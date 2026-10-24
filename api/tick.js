import webpush from 'web-push';
import { rpc } from './_supa.js';
import EVENTS from './_events.js';
// dipanggil Supabase pg_cron tiap menit: kirim push buat pesan yg jamnya udah lewat
const toEpoch = (naive, tzMin) => Date.parse(naive + ':00Z') - tzMin * 60000;
export default async function handler(req, res) {
  const secret = process.env.TICK_SECRET;
  if (req.headers['x-tick-secret'] !== secret) return res.status(401).end();
  webpush.setVapidDetails('mailto:noreply@hp-kino.vercel.app', process.env.VAPID_PUBLIC, process.env.VAPID_PRIVATE);
  const now = Date.now(); let sent = 0, dead = 0;
  let subs;
  try { subs = (await rpc('hpkino_subs', { p_secret: secret })) || []; } catch (e) { return res.status(500).json({ error: String(e.message || e) }); }
  await Promise.all(subs.map(async (s) => {
    const last = Date.parse(s.last_sent);
    const due = EVENTS.filter(e => { const t = toEpoch(e.t, s.tz_min); return t > last && t <= now; });
    if (!due.length) return;
    // satu notif per room: pesan terakhir + jumlah sisanya
    const byTag = {}; due.forEach(e => (byTag[e.tag] = byTag[e.tag] || []).push(e));
    const notes = Object.values(byTag).map(list => { const e0 = list[list.length - 1], e = e0[s.lang] || e0; const more = list.length > 1 ? `  (+${list.length - 1})` : ''; return { title: e.title, body: e.body + more, tag: e0.tag, ...(e0.gate ? { gate: e0.gate, full: (e.full || e0.full) + more, at: toEpoch(e0.t, s.tz_min) } : {}) }; }).slice(-4);
    const target = { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } };
    for (const n of notes) {
      try { await webpush.sendNotification(target, JSON.stringify(n), { TTL: 3600 }); sent++; }
      catch (e) { if (e.statusCode === 404 || e.statusCode === 410) { await rpc('hpkino_unsub', { p_secret: secret, p_endpoint: s.endpoint }); dead++; return; } }
    }
    await rpc('hpkino_mark', { p_secret: secret, p_id: s.id, p_ts: new Date(now).toISOString() });
  }));
  res.status(200).json({ subs: subs.length, sent, dead });
}

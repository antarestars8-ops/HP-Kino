import { rpc } from './_supa.js';
// simpan langganan push dari browser pemain
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const { sub, tz, lang } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!sub?.endpoint || !sub?.keys?.p256dh || !sub?.keys?.auth) return res.status(400).json({ error: 'bad sub' });
    await rpc('hpkino_subscribe', { p_endpoint: sub.endpoint, p_p256dh: sub.keys.p256dh, p_auth: sub.keys.auth, p_tz: Math.round(Number(tz) || 0), p_lang: ['id', 'en', 'ko', 'zh'].includes(lang) ? lang : 'id' });
    res.status(200).json({ ok: true });
  } catch (e) { res.status(500).json({ error: String(e.message || e) }); }
}

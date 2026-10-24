// ===== HP Kino — engine =====
// Cerita jalan real-time: chat muncul sesuai tanggal & jam beneran.
// Test: tambah ?now=2026-10-24T23:37 di URL buat lompat waktu.
const $ = (s, r = document) => r.querySelector(s);
const layersEl = $('#layers');

// ---------- waktu ----------
// ?now=... buat ngetes (sekali buka). ?replay = main ulang: hari pertama buka dianggap 20 Okt jam yg sama, kesimpen & jalan terus. ?replay=off balik ke tanggal asli
// ?now / ?lihat cuma buat yg punya link rahasia (?dev=...) sekali per HP, sama localhost. pemain biasa: jam beneran
// kode dev yg masih berlaku. hapus dari daftar = HP yg pernah pake kode itu otomatis ga dev lagi
const DEV_CODES = ['kn2510x7q', 'baca-7q4m', 'baca-24k9']; // [0] punya kamu, [1] tester tgl 22, [2] tester tgl 24–25
const DEV_UNTIL = { 'baca-7q4m': Date.parse('2026-10-22T23:59:59+07:00'), 'baca-24k9': Date.parse('2026-10-25T23:59:59+07:00') }; // kode tester mati 23.59 WIB
const DEV = (() => { try { const q = new URLSearchParams(location.search), c = q.get('dev'); if (c && DEV_CODES.includes(c) && !(DEV_UNTIL[c] && Date.now() > DEV_UNTIL[c])) localStorage.setItem('hpkino:dev', c); if (c === 'off') localStorage.removeItem('hpkino:dev'); let v = localStorage.getItem('hpkino:dev'); if (v && DEV_UNTIL[v] && Date.now() > DEV_UNTIL[v]) { localStorage.removeItem('hpkino:dev'); v = null; } return /^(localhost|127\.0\.0\.1)$/.test(location.hostname) || v === '1' || DEV_CODES.includes(v); } catch (e) { return false; } })();
const OFFSET = (() => {
  const q = new URLSearchParams(location.search), K = 'hpkino:replayOffset';
  const t = DEV && q.get('now') ? new Date(q.get('now')).getTime() : NaN; if (!isNaN(t)) return t - Date.now();
  try {
    if (q.get('replay') === 'off') { localStorage.removeItem(K); return 0; }
    if (q.has('replay') && localStorage.getItem(K) === null) {
      Object.keys(localStorage).filter(k => k.startsWith('hpkino:') && k !== 'hpkino:lang').forEach(k => localStorage.removeItem(k)); // mulai dari awal
      const d = new Date(), start = new Date(2026, 9, 20, d.getHours(), d.getMinutes(), d.getSeconds());
      localStorage.setItem(K, String(start - d));
    }
    const off = Number(localStorage.getItem(K)); return isFinite(off) ? off : 0;
  } catch (e) { return 0; }
})();
try { const q0 = new URLSearchParams(location.search), lk0 = q0.get('lihat'); if (lk0 && DEV) { if (q0.has('epilog')) { localStorage.setItem('hpkino:epi', JSON.stringify({ key: lk0, at: Date.now() })); localStorage.setItem('hpkino:ending', JSON.stringify(lk0)); localStorage.setItem('hpkino:fightDone', 'true'); } else localStorage.removeItem('hpkino:epi'); } } catch (e) {} // link ?lihat= selalu mulai dari ending, bukan HP epilog sisa sebelumnya
// ?sekarang = keluar dari HP seminggu kemudian, balik ke jam beneran (progres lain tetep). ?reset = hapus semua progres
try { const q1 = new URLSearchParams(location.search); if (q1.has('sekarang') || q1.has('reset')) { Object.keys(localStorage).filter(k => k.startsWith('hpkino:') && (q1.has('reset') || ['hpkino:epi', 'hpkino:epiShown', 'hpkino:epiDone', 'hpkino:pickAgain'].includes(k))).forEach(k => localStorage.removeItem(k)); history.replaceState(null, '', location.pathname); } } catch (e) {}
const EPI = (() => { try { return JSON.parse(localStorage.getItem('hpkino:epi') || 'null'); } catch (e) { return null; } })();
// epilog: jam lompat ke seminggu kemudian, terus jalan normal
const ULTAH_END = new Date('2026-10-25T23:59:30').getTime(), NOW_Q = DEV && new URLSearchParams(location.search).has('now');
// jam HP diganti (biar cepet nyampe tgl 25)? dicocokin sama jam server Cloudflare tiap buka. zona waktu ga ngaruh (dibandingin dlm UTC)
// anti curang ganti jam HP: dicocokin ke jam server Cloudflare. aman dari cache: 2x cek pake URL unik, harus seger & maju ~1 detik,
// cuma dikoreksi kalo HP kecepetan > 10 menit, dan ga disimpen permanen (cuma sesi ini, dicek ulang tiap buka)
let CLOCK = (() => { try { localStorage.removeItem('hpkino:clockFix'); const v = JSON.parse(sessionStorage.getItem('hpkino:clock') || 'null'); return v && Date.now() - v.at < 36e5 ? v.fix : 0; } catch (e) { return 0; } })();
// zona waktu: pemain yg ganti zona waktu HP biar cerita maju duluan (lebih maju dari KST) dipaksa ngikutin KST.
// ketauan kalo zonanya lebih maju dari pas pertama buka HP Kino
const TZ_SHIFT = (() => { try {
  const off = -new Date().getTimezoneOffset() / 60, tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let first = JSON.parse(localStorage.getItem('hpkino:tz0') || 'null'); if (!first) { first = { off, tz }; localStorage.setItem('hpkino:tz0', JSON.stringify(first)); }
  return off > 9 && off > first.off ? (9 - off) * 3600e3 : 0; // cuma yg ganti zona waktu abis mulai main. yg emang tinggal di sana (fiji, nz) dibiarin
} catch (e) { return 0; } })();
const tnow = () => Date.now() + (NOW_Q ? 0 : CLOCK + TZ_SHIFT);
const now = () => !EPI && !NOW_Q && tnow() + OFFSET > ULTAH_END ? new Date(ULTAH_END) : EPI ? new Date(new Date((typeof EPI_START !== 'undefined' && EPI_START[EPI.key]) || EPI_DATE).getTime() + Date.now() - EPI.at) : new Date(tnow() + OFFSET);
(async () => {
  try {
    const ask = async () => { const r = await fetch('https://hp-kino-media.hp-kino.workers.dev/icons/icon-192.png?c=' + Date.now() + Math.random().toString(36).slice(2), { method: 'HEAD', mode: 'cors', cache: 'no-store' }); return { srv: Date.parse(r.headers.get('Date') || ''), dev: Date.now() }; };
    const a = await ask(); await new Promise(r => setTimeout(r, 1200)); const b = await ask();
    if (isNaN(a.srv) || isNaN(b.srv)) return;
    const step = b.srv - a.srv; if (step < 1000 || step > 4000) return; // harus seger & maju (jawaban cache bakal sama/aneh)
    if (b.srv < Date.parse('2026-10-01') || b.srv > Date.parse('2026-12-31')) return; // jam server ga masuk akal → abaikan
    const fix = b.srv - b.dev, val = fix < -10 * 60000 ? fix : 0; // cuma kalo HP kecepetan > 10 menit
    if (Math.abs(val - CLOCK) < 60000) return;
    try { sessionStorage.setItem('hpkino:clock', JSON.stringify({ fix: val, at: Date.now() })); } catch (e) {}
    if (NOW_Q || sessionStorage.getItem('hpkino:clockReload')) { CLOCK = val; return; }
    try { sessionStorage.setItem('hpkino:clockReload', '1'); } catch (e) {} location.reload();
  } catch (e) {}
})();
const BDAY = new Date('2026-10-25T00:00');
const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
if (UI[L]) { HARI.splice(0, 7, ...UI[L].hari); BULAN.splice(0, 12, ...UI[L].bulan); }
const pad = (n) => String(n).padStart(2, '0');
const hm = (d) => `${pad(d.getHours())}.${pad(d.getMinutes())}`;
const dayStart = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const longDate = (d) => L === 'en' ? `${HARI[d.getDay()]}, ${BULAN[d.getMonth()]} ${d.getDate()}` : L === 'ko' || L === 'zh' ? `${BULAN[d.getMonth()]} ${d.getDate()}${L === 'ko' ? '일' : '日'} ${HARI[d.getDay()]}` : `${HARI[d.getDay()]}, ${d.getDate()} ${BULAN[d.getMonth()]}`;
function relDay(d) {
  const diff = Math.round((dayStart(now()) - dayStart(d)) / 864e5);
  if (diff <= 0) return hm(d);
  if (diff === 1) return 'Kemarin';
  if (diff < 7) return HARI[d.getDay()];
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${String(d.getFullYear()).slice(2)}`;
}
const visible = (ts) => ts <= now();

// ---------- simpan progres (opsional) ----------
const store = { get(k, d) { try { const v = localStorage.getItem('hpkino:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem('hpkino:' + k, JSON.stringify(v)); } catch (e) {} } };
// HP (terutama iPhone) ga ngizinin suara diputar tanpa sentuhan: ringtone & notif "dibuka kuncinya" di sentuhan pertama, terus dipake ulang
// yg diputer pas sentuhan pertama cuma suara hening (bukan ringtone-nya), baru abis itu file aslinya dipasang
// suara diambil langsung dari Cloudflare (dipake pas pertama buka, sebelum service worker jalan → jangan ke Vercel)
const AUD = (f) => (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) ? '' : 'https://hp-kino-media.hp-kino.workers.dev/') + f;
const SFX = {}, SFX_SRC = { ringtone: AUD('aud/ringtone.mp3'), katalk: AUD('aud/katalk.mp3') };
Object.keys(SFX_SRC).forEach(k => { try { SFX[k] = new Audio(); } catch (e) {} });
function sfx(k) { const a = SFX[k] || (SFX[k] = new Audio()); if (!a.src || /silent\.wav$/.test(a.src)) a.src = SFX_SRC[k]; return a; }
function unlockSfx() {
  document.removeEventListener('pointerdown', unlockSfx, true); document.removeEventListener('touchend', unlockSfx, true);
  Object.entries(SFX).forEach(([k, a]) => {
    const real = () => { a.pause(); a.src = SFX_SRC[k]; a.loop = k === 'ringtone'; a.preload = 'auto'; a.load(); };
    a.src = AUD('aud/silent.wav'); const p = a.play(); if (p) p.then(real).catch(real); else real();
  });
}
document.addEventListener('pointerdown', unlockSfx, true); document.addEventListener('touchend', unlockSfx, true);
const S = { unlocked: false, letterRead: store.get('letterRead', false), called: false, opened: store.get('opened', {}), wrong: 0 };

// ---------- siapkan pesan dengan timestamp ----------
CHATS.forEach(c => {
  let day = null;
  c.items = [];
  c.msgs.forEach(([who, text, time, o = {}]) => {
    if (who === 'date') { day = text; return; }
    c.items.push({ who, text, o, ts: new Date(`${day}T${time.replace('.', ':')}`) });
  });
});
const sortItems = (c) => c.items.sort((a, b) => a.ts - b.ts);
// jeda yg bagian dari cerita: jamnya ga boleh digeser (dipadetin / dimajuin)
const FROZEN = [[new Date('2026-10-24T13:30'), new Date('2026-10-24T21:00')], [new Date('2026-10-24T23:30'), new Date('2026-10-25T01:00')],
  [new Date('2026-10-23T13:00'), new Date('2026-10-23T13:30')], [new Date('2026-10-23T23:15'), new Date('2026-10-23T23:55')], [new Date('2026-10-24T08:00'), new Date('2026-10-24T13:30')]]; // berantem/klinik, 00.00, bagas bongkar cuti, deeptalk bagas, war room
const frozenAt = (t) => FROZEN.some(([a, b]) => t >= a && t < b);
const URGENT = [[new Date('2026-10-24T08:00'), new Date('2026-10-24T13:45')], [new Date('2026-10-24T14:20'), new Date('2026-10-24T17:40')]]; // war room
const KEEP_PAUSE = [new Date('2026-10-24T08:22'), new Date('2026-10-24T12:51')]; // juna ngaku deploy, prod down lagi (abis "13 menit")
// balesan basa-basi ("oh", "oke bang", "siap 🫡") ga usah ditunggu: nempel ke bubble sebelumnya (max 1 menit) kalo obrolannya masih nyambung (<15 menit)
const FILLER = /^(oh+|o+k+e*|ok+a*y+|sip+|siap+|iy+a*|ya+|y|hm+|k|noted|oalah|mantap|nice|thanks|thx|makasih|gpp|aman|done|sama2)[\s.!,]*(bang|kak|bin|jun|sur|lang|ham|ma|dew|kin|bro|deh|dong)?[\s.!,]*[\p{Extended_Pictographic}\uFE0F\s]*$/iu;
CHATS.forEach(c => {
  if (c.id === 'kris' || c.channel) return; sortItems(c);
  let prevOrig = null, prevNew = null;
  c.items.forEach(it => {
    const orig = it.ts, gap = prevOrig ? orig - prevOrig : Infinity;
    if (gap <= 15 * 60000 && !(it.o && (it.o.call || it.o.retract || it.o.deleted)) && !frozenAt(orig) && !frozenAt(prevOrig) && FILLER.test((it.text || '').trim())) it.ts = new Date(Math.min(orig, prevNew.getTime() + Math.min(gap, 60000)));
    prevOrig = orig; prevNew = it.ts;
  });
  sortItems(c);
});
// pesan Kris jam 00.00 (muncul pas ultah)
const KRIS = CHATS.find(c => c.id === 'kris');
KRIS.items.push({ who: 'them', text: 'selamat ulang tahun, kino.', ts: new Date('2026-10-25T00:00'), o: {} }, { who: 'them', text: 'aku di bawah.', ts: new Date('2026-10-25T00:00:30'), o: {} });

// ---------- balasan interaktif ----------
S.answers = store.get('answers', {});
function injectAnswer(r, choice, t0) {
  const c = CHATS.find(x => x.id === r.chat); const opt = r.opts[choice]; let t = t0;
  opt.me.forEach(txt => { c.items.push({ who: 'me', text: txt, o: {}, ts: new Date(t) }); t += 1500; });
  t += 2500;
  opt.them.forEach(m => { const [who, txt] = Array.isArray(m) ? m : ['them', m]; c.items.push({ who, text: txt, o: {}, ts: new Date(t), typed: true }); t += 1800 + txt.length * 45; });
}
REPLIES.forEach(r => { const a = S.answers[r.id]; if (a) injectAnswer(r, a.choice, a.t); });
// key pesan naskah yg dimajuin: chat:jamAsli (+#n kalo ada beberapa pesan di menit yg sama)
const earlyKeys = (c) => { const n = {}; return c.items.map(it => { const t = it.ts.getTime(), k = n[t] = (n[t] || 0) + 1; return c.id + ':' + t + (k > 1 ? '#' + k : ''); }); };
{ const e = store.get('early', {}); CHATS.forEach(c => { const ks = earlyKeys(c); c.items.forEach((it, i) => { const v = e[ks[i]]; if (v) it.ts = new Date(v); }); sortItems(c); }); }
CHATS.forEach(sortItems);
S.extra = store.get('extra', []);
// foto Koleksi Bersama yg udah terlanjur dikirim & dibales ("wah", "bagus bang") sebelum jadi rusak: balesannya dibiarin,
// paginya (abis fotonya dihapus Kris jam 7) yg bales nyusul: semalem ngelindur, ternyata fotonya ga kebuka
function brokenFollowups() {
  const bad = new Set(PHOTOS.filter(x => x.shared).map(x => x.img)), GONE = new Date('2026-10-23T07:00').getTime(), added = [];
  // ke Kris: foto itu ga boleh kekirim (Kino diem sampe tgl 24). yg udah terlanjur: fotonya, balesan Kris, & susulan "ngelindur" dibuang
  const toKris = S.extra.filter(e => e.chat === 'kris' && e.img && bad.has(e.img) && e.who === 'me');
  if (toKris.length) { const drop = new Set(); toKris.forEach(e => { drop.add(e); S.extra.forEach(x => { if (x.chat === 'kris' && x !== e && !x.img && !x.call && x.t > e.t && (x.t - e.t < 20000 || /fotonya ga kebuka|masih ngelindur|salah kirim|lah\. hahaha/.test(x.text || ''))) drop.add(x); }); });
    S.extra = S.extra.filter(x => !drop.has(x)); store.set('extra', S.extra); }
  S.extra.filter(e => e.img && bad.has(e.img) && e.who === 'me' && !e.followed && e.chat !== 'kris').forEach(e => {
    const c = CHATS.find(x => x.id === e.chat); if (!c) return;
    const reps = S.extra.filter(x => x.chat === e.chat && x.who !== 'me' && !x.img && !x.call && x.t > e.t && x.t - e.t < 20000);
    e.followed = 1; added.push(e); if (!reps.length) return;
    let t = Math.max(e.t + 30 * 60000, GONE + 12 * 60000);
    const pagi = new Date(e.t).getHours() < 7, who = reps[0].who, kpn = pagi ? 'tadi' : 'semalem'; // temen baru sadar, Kino ikut sadar abis salah kirim
    const pName = who === 'them' ? c.person : who; // siapa yg nanya (chat pribadi: orangnya; grup: yg pertama bales)
    const ASK = { Juna: `BANG foto ${kpn} apaan?? gue bales asal, masih ngelindur 😭`, Surya: `bang sorry I replied half asleep 😭 foto ${kpn} apa?`, Gemilang: `bang foto ${kpn} apa? gue bales padahal cuma liat warnanya 😩`,
      Sadewa: `foto ${kpn} apa.`, Bagas: `foto apaan ${kpn}`, Ilham: `bang foto ${kpn} apa? gue bales asal. bukan karena ga perhatian`, Mina: `kino foto ${kpn} apa? gue bales sambil ngantuk`, Aldrea: `kino, foto ${kpn} apa? gue ga ngerti` };
    const GONE_TXT = { Juna: 'sekarang ga kebuka 😭', Surya: "it won't open now 🥺", Gemilang: 'sekarang ga kebuka 😩', Sadewa: 'ga kebuka.', Bagas: 'ga kebuka', Ilham: 'sekarang error', Mina: 'sekarang ga kebuka', Aldrea: 'sekarang ga bisa kebuka' };
    const ALSO = { Juna: 'GUE JUGA. bales asal padahal ga liat apa2 😭', Gemilang: 'gue juga cuma liat warnanya 😩', Surya: 'me too bang 😭 I replied without looking', Bagas: 'sama.', Ilham: 'gue juga. bukan berarti gue ga merhatiin', Sadewa: 'sama. ok.' };
    const KINO = { Juna: 'salah kirim. lupain', Surya: 'gpp sur. salah kirim', Gemilang: 'salah kirim lang', Sadewa: 'salah kirim.', Bagas: 'salah kirim', Ilham: 'salah kirim ham. kerja', Mina: 'salah kirim kak', Aldrea: 'salah kirim drea' };
    const others = [...new Set(reps.map(r => r.who))].filter(w => w !== who && w !== 'them');
    const lines = e.chat === 'mama' ? [['them', `nak foto ${kpn} itu apa? mama ga ngerti`], ['them', 'sekarang fotonya ga keluar'], ['me', 'salah kirim ma']]
      : c.group ? [[who, ASK[pName] || `bang foto ${kpn} maksudnya apa? masih ngelindur 😭`], ...others.map(w => [w, ALSO[w] || 'sama, gue juga ga liat']), [who, GONE_TXT[pName] || 'sekarang fotonya ga kebuka juga'], ['me', 'lah. hahaha'], ['me', 'gpp. salah kirim']]
      : [[who, ASK[pName] || `foto ${kpn} apa?`], [who, GONE_TXT[pName] || 'sekarang ga kebuka'], ['me', KINO[pName] || 'salah kirim']];
    lines.forEach(([w, x]) => { const n = { chat: e.chat, who: w, text: x, t }; S.extra.push(n); added.push(n); t += 40000; });
  });
  if (added.length) store.set('extra', S.extra); return added.filter(x => !x.img);
}
brokenFollowups();
function pushExtra(chat, who, text, t, typed) { const c = CHATS.find(x => x.id === chat); c.items.push({ who, text, o: {}, ts: new Date(t), typed, x: 1 }); } // x = pesan tambahan (bukan naskah): ga ikut ketahan FIGHT_LOCK
S.extra.forEach(e => e.call ? CHATS.find(x => x.id === e.chat).items.push({ who: e.who, text: '', o: { call: e.call, quiet: e.quiet }, ts: new Date(e.t), x: 1 }) : e.img ? CHATS.find(x => x.id === e.chat).items.push({ who: e.who, text: '', o: { img: e.img }, ts: new Date(e.t), x: 1 }) : pushExtra(e.chat, e.who, e.text, e.t, e.who !== 'me'));
CHATS.forEach(sortItems); // pesan tambahan (random chat, ketikan) diurutin sesuai jam, bukan ditempel di bawah
// tambah pesan (who: 'me' / 'them' / nama) mulai delay ms dari sekarang
function addMsg(chat, list, delay = 0) {
  let t = now().getTime() + delay;
  list.forEach(([who, text, o]) => { // o.img = kirim foto
    if (o && o.img) { CHATS.find(x => x.id === chat).items.push({ who, text: '', o: { img: o.img }, ts: new Date(t), x: 1 }); S.extra.push({ chat, who, text: '', t, img: o.img }); t += 2500; return; }
    if (o && o.call) { CHATS.find(x => x.id === chat).items.push({ who, text: '', o: { call: o.call, quiet: o.quiet }, ts: new Date(t), x: 1 }); S.extra.push({ chat, who, text: '', t, call: o.call, quiet: o.quiet }); t += 1500; return; } // o.call = log telfon (mis. Kino nelpon dulu, ga diangkat)
    pushExtra(chat, who, text, t, who !== 'me'); S.extra.push({ chat, who, text, t }); t += who === 'me' ? 800 : 1600 + text.length * 50; });
  store.set('extra', S.extra); sortItems(CHATS.find(x => x.id === chat));
}
S.typeN = store.get('typeN', {});
function linePool(c) {
  if (c.id === 'kris') { const key = now() >= BDAY ? 'after' : dayKey(); return { key: 'kris' + key, pool: TYPE_KRIS[key] || [] }; }
  return { key: c.id, pool: TYPE_LINES[c.group ? c.id : c.person] || [] };
}
const inWin = (w) => { if (!w) return true; const n = now(), t = hm(n).replace('.', ':'); if (w.d && !w.d.includes(dayKey(n))) return false; if (w.since && n < new Date(w.since)) return false; if (w.until && n > new Date(w.until)) return false; return (!w.from || t >= w.from) && (!w.to || t <= w.to); };
function nextLine(c) { const { key, pool } = linePool(c); const used = Array.isArray(S.typeN[key]) ? S.typeN[key] : []; const i = pool.findIndex((l, j) => !used.includes(j) && inWin(l[2])); return i < 0 ? null : Object.assign(pool[i], { _i: i }); }
function useLine(c, line) { const { key } = linePool(c); const used = Array.isArray(S.typeN[key]) ? S.typeN[key] : []; used.push(line._i); S.typeN[key] = used; store.set('typeN', S.typeN); }
// animasi Kino ngetik di kolom pesan, terus kirim
// keyboard iOS boongan
const KB_ROWS = ['qwertyuiop', 'asdfghjkl', '⇧zxcvbnm⌫'];
function keyboardHTML() {
  return `<div class="kb">${KB_ROWS.map(r => `<div class="kbr">${[...r].map(k => `<span class="key ${k === '⇧' || k === '⌫' ? 'fn' : ''}" data-key="${k}">${k}</span>`).join('')}</div>`).join('')}
    <div class="kbr"><span class="key fn wide">123</span><span class="key fn">🙂</span><span class="key space" data-key=" ">spasi</span><span class="key fn wide ret">kirim</span></div></div>`;
}
// klik keyboard: pake aud/keyclick.mp3 kalau ada (didecode biar ga delay), kalau gak ada pake "tok" sintetis
let keyBuf = null, keyBufTried = false, noiseBuf = null;
function loadKeyBuf() {
  if (keyBufTried) return; keyBufTried = true; return; // file keyclick.mp3 ga ada → tiap sesi 404 (ngabisin kuota). pake "tok" sintetis aja
  const a = ac(); if (!a) return;
  fetch('aud/keyclick.mp3').then(r => r.ok ? r.arrayBuffer() : Promise.reject()).then(b => a.decodeAudioData(b)).then(buf => keyBuf = buf).catch(() => {});
}
function keyClick(big) {
  const a = ac(); if (!a) return; loadKeyBuf();
  try {
    const t = a.currentTime;
    if (keyBuf) { const src = a.createBufferSource(); src.buffer = keyBuf; src.playbackRate.value = big ? .92 : 1 + (Math.random() - .5) * .06; const g = a.createGain(); g.gain.value = .9; src.connect(g); g.connect(a.destination); src.start(t); return; }
    // badan "tok": sinus yg nadanya turun cepet
    const o = a.createOscillator(), og = a.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(big ? 1100 : 1700 + Math.random() * 150, t); o.frequency.exponentialRampToValueAtTime(big ? 500 : 700, t + .018);
    og.gain.setValueAtTime(0, t); og.gain.linearRampToValueAtTime(big ? .22 : .16, t + .001); og.gain.exponentialRampToValueAtTime(.0001, t + .03);
    o.connect(og); og.connect(a.destination); o.start(t); o.stop(t + .04);
    // "klik" tipis di depan
    if (!noiseBuf) { noiseBuf = a.createBuffer(1, a.sampleRate * .006, a.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length); }
    const n = a.createBufferSource(); n.buffer = noiseBuf; const hp = a.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 5000; const ng = a.createGain(); ng.gain.value = .05;
    n.connect(hp); hp.connect(ng); ng.connect(a.destination); n.start(t);
  } catch (e) {}
}
// animasi Kino ngetik: keyboard naik, tombol nyala, terus kirim
function typeOut(el, text, done) {
  if (el.dataset.typing) return; el.dataset.typing = '1';
  const inp = el.querySelector('.kinput .f'), snd = el.querySelector('.snd'), qr = el.querySelector('.qr');
  let kb = el.querySelector('.kb'); if (!kb) { el.insertAdjacentHTML('beforeend', keyboardHTML()); kb = el.querySelector('.kb'); }
  qr.style.pointerEvents = 'none'; inp.value = ''; inp.classList.add('typing-now');
  el.classList.add('kb-open');
  const body = el.querySelector('.body'); setTimeout(() => body.scrollTop = body.scrollHeight, 260);
  let k = 0; const shown = tr(text), ops = typoOps(text, shown);
  const flash = (ch) => { const key = /^[a-z0-9 ⌫]$/i.test(ch) ? kb.querySelector(`[data-key="${ch === ' ' ? ' ' : ch.toLowerCase()}"]`) : null; if (key) { key.classList.add('down'); setTimeout(() => key.classList.remove('down'), 110); } };
  const step = () => {
    if (!el.isConnected) return;
    if (k < ops.length) {
      const op = ops[k++];
      if (op === -1) { inp.value = inp.value.slice(0, -1); flash('⌫'); keyClick(false); return setTimeout(step, ops[k] === -1 ? 95 + Math.random() * 50 : 380); } // hapus
      if (op === 0) return setTimeout(step, 420 + Math.random() * 200); // sadar salah ketik, diem bentar
      inp.value += op; snd.classList.add('on'); flash(op); keyClick(op === ' '); setTimeout(step, op === ' ' ? 140 : 75 + Math.random() * 90); return;
    }
    setTimeout(() => {
      const ret = kb.querySelector('.ret'); ret.classList.add('down'); keyClick(true); snd.classList.add('press');
      setTimeout(() => { ret.classList.remove('down'); inp.value = ''; snd.classList.remove('on', 'press'); inp.classList.remove('typing-now'); qr.style.pointerEvents = ''; delete el.dataset.typing; done(text); setTimeout(() => el.classList.remove('kb-open'), 600); }, 200);
    }, 420);
  };
  setTimeout(step, 280);
}
// rencana ketikan: huruf biasa, 0 = jeda (sadar salah), -1 = hapus 1 huruf. ujungnya selalu = shown
const NEAR = (() => { const m = {}; ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'].forEach(r => [...r].forEach((c, i) => { m[c] = (r[i - 1] || '') + (r[i + 1] || ''); })); return m; })();
function typoOps(text, shown) {
  const own = L === 'id' && TYPO_SEQ[text];
  const flat = (seq) => seq.flatMap(x => typeof x === 'number' ? [0, ...Array(-x).fill(-1)] : [...x]);
  if (own) return flat(own);
  const t = now(); if (!PANIC.some(([a, b]) => t >= new Date(a) && t < new Date(b))) return [...shown];
  // posisi & tombol yg kepencet tetep per teks (ga acak tiap buka), biar kalo diulang keliatannya sama
  let h = 7; for (const ch of shown) h = (h * 31 + ch.charCodeAt(0)) >>> 0; const rnd = () => ((h = (h * 1103515245 + 12345) >>> 0) / 4294967296);
  const spots = [...shown].map((c, i) => i).filter(i => i > 0 && NEAR[shown[i].toLowerCase()]);
  const n = Math.min(3, spots.length, Math.max(1, Math.round(shown.length / 14))), pick = new Set();
  while (pick.size < n) pick.add(spots[Math.floor(rnd() * spots.length)]);
  const seq = []; let from = 0;
  [...pick].sort((a, b) => a - b).forEach(i => {
    if (i < from) return;
    const nb = NEAR[shown[i].toLowerCase()], wrong = nb[Math.floor(rnd() * nb.length)], extra = rnd() < .5 ? shown.slice(i + 1, i + 2) : ''; // kadang baru sadar abis 1 huruf lagi
    seq.push(shown.slice(from, i) + wrong + extra, -(1 + extra.length)); from = i;
  });
  seq.push(shown.slice(from));
  return flat(seq);
}
// balasan Kino yg udah ada di naskah tapi jamnya belum lewat: boleh dikirim lebih cepet
// konten HP seminggu kemudian: epi = key ending, atau 'all' buat semua ending
const epiIs = (e) => !!EPI && (e === 'all' || EPI.key === e);
const endKey = () => (EPI && EPI.key) || store.get('ending', null);
{ const e = store.get('ending', null), seen = store.get('endingsSeen', []); if (e && !seen.includes(e)) { seen.push(e); store.set('endingsSeen', seen); } } // pemain lama: ending yg udah didapet ikut kecatat
function hiddenByGate(c, it) { if (afterFightAns(c, it)) return true; return (it.o && it.o.noEnd && endKey() === it.o.noEnd) || (it.o && it.o.end && endKey() !== it.o.end) || (it.o && it.o.epi && (!EPI || !epiIs(it.o.epi))) || (!S.fightDone && ((it.o && it.o.afterFight) || (c.id === 'kris' && it.ts > FIGHT_LOCK && !it.x))); }
function nextScriptedMe(c) {
  const last = lastMsg(c); if (!last || last.who === 'me') return null;
  const nx = c.items.find(it => !visible(it.ts) && !it.typed && !hiddenByGate(c, it));
  if (!nx || nx.who !== 'me' || nx.o.call) return null;
  return nx.ts - now() <= 15 * 60000 ? nx : null; // boleh dikirim duluan max 15 menit sebelum jadwal (biar ga nyebut hal yg belum kejadian)
}
// Kino ngirim pesan naskah duluan → balesan temen yg nyambung (sampe giliran Kino lagi) ikut maju sejauh itu juga, jaraknya tetep
function sendEarly(c, it) {
  const e = store.get('early', {}), orig = it.ts.getTime(), t0 = now().getTime();
  const ks = earlyKeys(c), key = (x) => ks[c.items.indexOf(x)];
  const after = c.items.filter(x => x !== it && !visible(x.ts) && !hiddenByGate(c, x) && x.ts.getTime() >= orig).sort((a, b) => a.ts - b.ts);
  const moves = [[it, t0]], shift = orig - t0;
  // war room tgl 24 (kru, kak mina): genting, balesan langsung tiki-taka. kecuali jeda yg bagian cerita (juna ragu ngaku 08.22, prod up "13 menit" 12.51)
  const urgent = ['kru', 'mina'].includes(c.id) && URGENT.some(([a, b]) => it.ts >= a && it.ts < b);
  let t = t0 + 2500;
  for (const x of after) {
    if (x.who === 'me' || (x.o && (x.o.call || x.o.retract || x.o.deleted)) || x.ts.getTime() - orig > 15 * 60000) break;
    if (urgent) { if (KEEP_PAUSE.some(k => Math.abs(x.ts - k) < 60000)) { after.filter(y => Math.abs(y.ts - x.ts) < 60000 && y.who !== 'me').forEach(y => moves.push([y, Math.max(t, y.ts.getTime() - shift)])); break; } moves.push([x, t]); t += 1800 + (x.text || '').length * 45; continue; } // jeda cerita: jaraknya dari pesan Kino tetep
    if (frozenAt(x.ts)) break; moves.push([x, Math.max(t0 + 2500, x.ts.getTime() - shift)]);
  }
  moves.forEach(([x, nt]) => { e[key(x)] = nt; }); moves.forEach(([x, nt]) => { x.ts = new Date(nt); if (x !== it) x.typed = true; });
  store.set('early', e); sortItems(c);
}
// lagi ada adegan: ada yg lagi ngetik, atau pesan naskah berikutnya bentar lagi (≤2 menit). lebih dari itu = obrolannya udah kelar, jangan disuruh nunggu
function storyBusy(c) {
  if (c.items.some(it => it.typed && !visible(it.ts) && it.ts - now() < 2 * 60000)) return true;
  const nx = c.items.find(it => !visible(it.ts) && !hiddenByGate(c, it));
  return !!(nx && nx.ts - now() < 2 * 60000);
}
const owesAnswer = (c) => { const m = lastMsg(c); return !!(m && m.who !== 'me' && /\?[^a-z0-9]*$/i.test(m.text || '')); };
function sendTyped(el, c, line) {
  if (line._i !== undefined) useLine(c, line);
  addMsg(c.id, [['me', line[0]]], 0);
  if (line[1]) addMsg(c.id, line[1].map(m => Array.isArray(m) ? m : ['them', m]), 2500 + Math.random() * 3500);
  renderChat(el, c);
}
const pendingReply = (c) => REPLIES.filter(r => r.chat === c.id && !S.answers[r.id] && (!r.epi || (EPI && epiIs(r.epi))) && visible(new Date(r.at)) && !c.items.some(it => it.who === 'me' && it.ts > new Date(r.at) && visible(it.ts))).pop();
function answer(r, choice) {
  const t = now().getTime(); S.answers[r.id] = { choice, t }; store.set('answers', S.answers);
  if (r.final) { const them = r.opts[choice].them || []; setTimeout(EPI ? epiNarr : finale, 5200 + them.reduce((a, x) => a + 1800 + String(Array.isArray(x) ? x[1] : x).length * 45, 0)); }
  injectAnswer(r, choice, t); sortItems(CHATS.find(x => x.id === r.chat));
}
S.fightDone = store.get('fightDone', false);
const FIGHT_LOCK = new Date('2026-10-24T14:08');
// telpon berantem udah diangkat duluan: spam chat Kris sesudahnya (sampe jam telpon aslinya) ga dimunculin
S.fightAns = store.get('fightAns', 0);
const afterFightAns = (c, it) => S.fightAns && c.id === 'kris' && !it.x && ((it.ts.getTime() > S.fightAns && it.ts.getTime() <= new Date(FIGHT_AT).getTime()) || (it.o && it.o.afterFight && !it.o.fightLog && it.ts.getTime() < S.fightAns)); // diangkat telat: naskah sesudah-berantem yg jamnya sebelum diangkat ga dimunculin
// log "Panggilan suara" berantem: jam diangkat & durasinya ngikutin telpon beneran. save lama yg ga pernah diangkat = tak terjawab
S.fightEnd = store.get('fightEnd', 0);
// post akun priv "oke. angkat" ngikutin kapan telponnya beneran diangkat. belum diangkat = belum ada
const FIGHT_ALT = X_POSTS.find(x => x[1] === 'alt' && x[2] === '2026-10-24T14:07'), FIGHT_ALT_TXT = FIGHT_ALT && FIGHT_ALT[3];
function fixFightAlt() {
  if (!FIGHT_ALT) return;
  if (S.fightAns) { const t = new Date(S.fightAns - 20000); FIGHT_ALT[2] = `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}T${pad(t.getHours())}:${pad(t.getMinutes())}`; // jangan pake dayKey/hm: dipanggil pas startup, dayKey belum ada FIGHT_ALT[7] = {};
    FIGHT_ALT[3] = S.fightAns - new Date(FIGHT_AT).getTime() > 3 * 60000 ? FIGHT_ALT_TXT.replace(/^baru juga dikirim,? langsung/, 'dari tadi') : FIGHT_ALT_TXT; }
  else if (!S.fightDone) FIGHT_ALT[7] = { fight: true };
}
function fixFightLog() {
  fixFightAlt();
  const c = CHATS.find(x => x.id === 'kris'), it = c.items.find(i => i.o && i.o.afterFight && i.o.call && /^Panggilan suara/.test(i.o.call)); if (!it) return;
  it.o.fightLog = true;
  if (S.fightAns && S.fightEnd > S.fightAns) { const sec = Math.round((S.fightEnd - S.fightAns) / 1000); it.ts = new Date(S.fightAns); it.o.call = `Panggilan suara ${pad(Math.floor(sec / 60))}:${pad(sec % 60)}`; }
  else if (S.fightDone && !S.fightAns) it.o.call = 'Panggilan tak terjawab';
  sortItems(c);
}
fixFightLog();
const visItems = (c) => { const out = []; let lastDay = null; for (const it of c.items) { if (!visible(it.ts) || afterFightAns(c, it) || (it.o && it.o.noEnd && endKey() === it.o.noEnd) || (it.o && it.o.end && endKey() !== it.o.end) || (it.o && it.o.epi && (!EPI || !epiIs(it.o.epi))) || (!S.fightDone && ((it.o && it.o.afterFight) || (c.id === 'kris' && it.ts > FIGHT_LOCK && !it.x)))) continue; const d = dayStart(it.ts).getTime(); if (d !== lastDay) { out.push({ date: new Date(d) }); lastDay = d; } out.push(it); } return out; };
const msgsOnly = (c) => visItems(c).filter(i => !i.date);
function unread(c) {
  const ms = msgsOnly(c); let lastMe = -1; ms.forEach((m, i) => { if (m.who === 'me') lastMe = i; });
  const seen = Math.max(lastMe, (S.opened[c.id] ?? -1));
  return ms.filter((m, i) => i > seen && m.who !== 'me').length;
}
const lastMsg = (c) => msgsOnly(c).slice(-1)[0];
const preview = (m) => !m ? '' : m.o.img ? 'Foto' : (m.o.deleted || (m.o.retract && retractGone(m))) ? 'Pesan ini telah dihapus.' : m.o.call ? 'Panggilan suara' : m.text;

// nama kontak Kris di HP Kino (beda tiap ending di epilog)
const KRIS_NAME = { maafin: 'kris 🐺', jeda: 'nanti', turun: 'Kris', waktu: 'kris.' };
const krisName = () => EPI ? (KRIS_NAME[EPI.key] || 'kris 🐺') : 'kris 🐺';
const dispName = (who) => who === 'Kris' ? krisName() : who === 'Mina' ? 'Kak Mina' : who === 'Kurir' ? 'Kurir Kupang' : who === 'Spam' ? '+82 10-3391-2291' : who;
{ const kc = CHATS.find(c => c.id === 'kris'); if (kc) kc.name = krisName(); }

// ---------- util ----------
// ganti isi tanpa gambar ulang semuanya: elemen yg sama dibiarin (foto/avatar ga kedip)
function morph(el, html) {
  const t = document.createElement('div'); t.innerHTML = html;
  const loose = (x) => [...x.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
  if (loose(t) || loose(el)) { el.innerHTML = html; return; }
  const a = [...el.children], b = [...t.children];
  b.forEach((n, i) => { const o = a[i]; if (!o) el.appendChild(n); else if (!o.isEqualNode(n)) o.replaceWith(n); });
  a.slice(b.length).forEach(n => n.remove());
}
const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
// gambar diem buat video (frame ke-0.5 detik), biar grid ga item tanpa download videonya
const vidPoster = (src) => 'img/t/vid/' + src.replace(/^.*\//, '').replace(/\.mp4$/, '.jpg');
const im = (src) => !src ? '' : /\.mp4$/.test(src) ? `<video class="ph-img" src="${src}#t=0.5" muted playsinline preload="none" poster="${vidPoster(src)}"></video><span class="vdur">▶</span>` : `<img class="ph-img" src="${src}" alt="" loading="lazy" onerror="this.remove()">`;
// grid (Galeri / profil IG): pake thumbnail kecil img/t/..., foto penuh baru diload pas dibuka
const imT = (src) => !src || !/^img\/.*\.jpe?g$/.test(src) ? im(src) : `<img class="ph-img" src="img/t/${src.slice(4)}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${src}'">`;
const PERSON_SVG = '<svg viewBox="0 0 32 40"><circle cx="16" cy="11" r="8"/><path d="M0 40c0-10 7-16 16-16s16 6 16 16z"/></svg>';
const av = (name, cls = '') => { const p = PEOPLE[name] || {}; if (p.emoji) return `<div class="av ${cls}" style="background:${p.bg};display:grid;place-items:center;font-size:22px">${p.emoji}</div>`; return `<div class="av ${cls}">${PERSON_SVG}${p.av ? `<img src="${p.av}" alt="" onerror="this.remove()">` : ''}</div>`; };
const GROUP_AV = `<div class="av" style="background:#c1cfdc"><svg viewBox="0 0 32 40" style="left:8%;width:50%"><circle cx="16" cy="11" r="8"/><path d="M0 40c0-10 7-16 16-16s16 6 16 16z"/></svg><svg viewBox="0 0 32 40" style="left:44%;width:50%;opacity:.8"><circle cx="16" cy="11" r="8"/><path d="M0 40c0-10 7-16 16-16s16 6 16 16z"/></svg></div>`;
const CHEV = '<svg class="chev" viewBox="0 0 8 14"><path d="M1 1l6 6-6 6"/></svg>';
const BACK = '<svg viewBox="0 0 12 21"><path d="M10 2L2 10.5 10 19"/></svg>';

// ---------- ikon (SVG, gaya iOS) ----------
const ICONS = {
  mail: `<svg viewBox="0 0 60 60"><defs><linearGradient id="mlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1F8DFF"/><stop offset="1" stop-color="#1A6EF5"/></linearGradient></defs><rect width="60" height="60" fill="url(#mlg)"/><rect x="11" y="18" width="38" height="25" rx="3" fill="#fff"/><path d="M12.5 19.5L30 33l17.5-13.5" fill="none" stroke="#1A6EF5" stroke-width="2.2" stroke-linejoin="round"/></svg>`,
  kakao: `<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#FEE500"/><path d="M30 13c-10.5 0-19 6.6-19 14.8 0 5.3 3.6 10 9 12.6l-1.8 6.6c-.2.6.5 1.1 1 .7l7.8-5.2c1 .1 2 .2 3 .2 10.5 0 19-6.6 19-14.9S40.5 13 30 13z" fill="#3A1D1D"/><text x="30" y="31.5" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="9" fill="#FEE500" letter-spacing=".3">TALK</text></svg>`,
  photos: (() => { const c = ['#F9B529', '#F47B2A', '#EA3F5A', '#C63CB4', '#7D57DA', '#3B8BE6', '#34B7C9', '#8BCB3C']; return `<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fff"/><g style="mix-blend-mode:multiply">${c.map((col, i) => `<ellipse cx="30" cy="19.5" rx="5.6" ry="10.5" fill="${col}" opacity=".88" transform="rotate(${i * 45} 30 30)"/>`).join('')}</g></svg>`; })(),
  find: `<svg viewBox="0 0 60 60"><defs><linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fe07a"/><stop offset="1" stop-color="#28b84a"/></linearGradient></defs><rect width="60" height="60" fill="url(#fg)"/><circle cx="30" cy="30" r="18" fill="none" stroke="#fff" stroke-width="3.2"/><circle cx="30" cy="30" r="10" fill="none" stroke="#fff" stroke-width="3.2" opacity=".85"/><circle cx="30" cy="30" r="3.6" fill="#fff"/></svg>`,
  health: `<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fff"/><path d="M42 18.5c-4.4-3-9.3-.7-12 3.4-2.7-4.1-7.6-6.4-12-3.4-4.6 3.2-4.7 10-1 14.3C20.6 37.2 30 44 30 44s9.4-6.8 13-11.2c3.7-4.3 3.6-11.1-1-14.3z" fill="#ff2d55"/></svg>`,
  ai: `<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#d97757"/><g stroke="#fff" stroke-width="4.2" stroke-linecap="round">${[0, 30, 60, 90, 120, 150].map(a => `<path d="M30 16v28" transform="rotate(${a} 30 30)"/>`).join('')}</g></svg>`,
  notes: `<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fff"/><rect width="60" height="17" fill="#FDD13A"/><rect y="15" width="60" height="2" fill="#E8B92A"/><path d="M8 27h44M8 35h44M8 43h44M8 51h44" stroke="#D8D8DC" stroke-width="1.2"/><path d="M8 20.5h44" stroke="#C6C6CB" stroke-width="1.6" stroke-dasharray="1.6 2.4"/></svg>`,
  calendar: (d) => `<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fff"/><text x="30" y="17" text-anchor="middle" font-family="-apple-system,Helvetica,Arial" font-weight="600" font-size="9.5" fill="#FF3B30">${HARI[d.getDay()]}</text><text x="30" y="45" text-anchor="middle" font-family="-apple-system,Helvetica,Arial" font-weight="300" font-size="30" fill="#000">${d.getDate()}</text></svg>`,
  clock: (d) => { const hA = (d.getHours() % 12 + d.getMinutes() / 60) * 30, mA = d.getMinutes() * 6; let ticks = ''; for (let i = 0; i < 12; i++) ticks += `<text x="30" y="14" text-anchor="middle" font-size="6.2" font-family="-apple-system,Helvetica" fill="#000" transform="rotate(${i * 30} 30 30)">${''}</text><path d="M30 8.5v2.4" stroke="#000" stroke-width="${i % 3 ? .8 : 1.4}" transform="rotate(${i * 30} 30 30)"/>`; return `<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#000"/><circle cx="30" cy="30" r="23.5" fill="#fff"/>${ticks}<path d="M30 30V18" stroke="#000" stroke-width="2.4" stroke-linecap="round" transform="rotate(${hA} 30 30)"/><path d="M30 30V11.5" stroke="#000" stroke-width="1.6" stroke-linecap="round" transform="rotate(${mA} 30 30)"/><path d="M30 34V11" stroke="#FF9500" stroke-width=".9" transform="rotate(${d.getSeconds() * 6} 30 30)"/><circle cx="30" cy="30" r="1.8" fill="#FF9500"/></svg>`; },
  weather: `<svg viewBox="0 0 60 60"><defs><linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1E7CF2"/><stop offset="1" stop-color="#6FB4F8"/></linearGradient></defs><rect width="60" height="60" fill="url(#wg)"/><circle cx="23" cy="24" r="9" fill="#FFD60A"/><path d="M20 44h22a8 8 0 0 0 0-16 11 11 0 0 0-20.6 4.3A6 6 0 0 0 20 44z" fill="#fff"/></svg>`,
  settings: `<svg viewBox="0 0 60 60"><defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C4C4C9"/><stop offset="1" stop-color="#8A8A90"/></linearGradient></defs><rect width="60" height="60" fill="url(#sg)"/><circle cx="30" cy="30" r="19" fill="none" stroke="#3E3E43" stroke-width="7" stroke-dasharray="3.3 2.67"/><circle cx="30" cy="30" r="16.5" fill="#3E3E43"/><circle cx="30" cy="30" r="13" fill="#D3D3D8"/>${[0, 60, 120].map(a => `<path d="M30 18v24" stroke="#8A8A90" stroke-width="2.2" transform="rotate(${a} 30 30)"/>`).join('')}<circle cx="30" cy="30" r="6" fill="#3E3E43"/><circle cx="30" cy="30" r="3.2" fill="#C4C4C9"/></svg>`,
  insta: `<svg viewBox="0 0 60 60"><defs><radialGradient id="ig" cx=".3" cy="1.07" r="1.2"><stop offset="0" stop-color="#FFDD55"/><stop offset=".1" stop-color="#FFDD55"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></radialGradient><radialGradient id="ig2" cx="-.1" cy=".1" r=".6"><stop offset="0" stop-color="#3771C8"/><stop offset="1" stop-color="#3771C8" stop-opacity="0"/></radialGradient></defs><rect width="60" height="60" fill="url(#ig)"/><rect width="60" height="60" fill="url(#ig2)"/><rect x="15" y="15" width="30" height="30" rx="9" fill="none" stroke="#fff" stroke-width="3.4"/><circle cx="30" cy="30" r="7.2" fill="none" stroke="#fff" stroke-width="3.4"/><circle cx="39" cy="21" r="2.1" fill="#fff"/></svg>`,
  phone: `<svg viewBox="0 0 60 60"><defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6AE37F"/><stop offset="1" stop-color="#2EBC4E"/></linearGradient></defs><rect width="60" height="60" fill="url(#pg)"/><path d="M22.4 15.6c-1-.9-2.6-.8-3.5.2l-2.6 2.8c-1.6 1.8-1.9 4.4-.8 6.5 4 7.9 9.9 13.8 17.6 17.7 2.1 1.1 4.7.8 6.5-.8l2.9-2.6c1-.9 1.1-2.5.2-3.5l-4.3-4.6c-.9-1-2.4-1.1-3.4-.3l-2.7 2.2c-3.7-2-6.7-5-8.7-8.8l2.1-2.6c.8-1 .7-2.5-.2-3.4z" fill="#fff"/></svg>`,
  safari: `<svg viewBox="0 0 60 60"><defs><linearGradient id="sfg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#19D7FF"/><stop offset="1" stop-color="#1E64F0"/></linearGradient></defs><rect width="60" height="60" fill="#fff"/><circle cx="30" cy="30" r="24" fill="url(#sfg)"/>${Array.from({ length: 36 }, (_, i) => `<path d="M30 7.5v${i % 3 ? 2 : 3.2}" stroke="#fff" stroke-width=".7" transform="rotate(${i * 10} 30 30)"/>`).join('')}<path d="M30 30l13-13-10.2 15.8z" fill="#FF3B30"/><path d="M30 30L17 43l10.2-15.8z" fill="#fff"/></svg>`,
  camera: `<svg viewBox="0 0 60 60"><defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E6E6EB"/><stop offset="1" stop-color="#B9B9BF"/></linearGradient></defs><rect width="60" height="60" fill="url(#cg)"/><rect x="10" y="19" width="40" height="27" rx="5" fill="#2C2C2E"/><path d="M22 19l3-5h10l3 5z" fill="#2C2C2E"/><circle cx="30" cy="32.5" r="9" fill="#48484A"/><circle cx="30" cy="32.5" r="6" fill="#1C1C1E"/><circle cx="28" cy="30.5" r="1.6" fill="#6E6E73"/><circle cx="44" cy="24" r="1.6" fill="#FFD60A"/></svg>`,
  memo: `<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#1c1c1e"/>${[6, 12, 20, 28, 18, 34, 24, 14, 26, 10, 18, 8].map((h, i) => `<rect x="${8 + i * 3.8}" y="${30 - h / 2}" width="2" height="${h}" rx="1" fill="#ff3b30"/>`).join('')}</svg>`,
  x: `<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#000"/><g transform="translate(15 15) scale(1.25)"><path d="M17.7 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.3L1.6 3H8l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z" fill="#fff"/></g></svg>`,
  music: `<svg viewBox="0 0 60 60"><defs><linearGradient id="mg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FB5C74"/><stop offset="1" stop-color="#FA233B"/></linearGradient></defs><rect width="60" height="60" fill="url(#mg)"/><path d="M38.5 13.5l-14.5 3.2c-.9.2-1.5 1-1.5 1.9v17.1a5.6 5.6 0 1 0 2.8 4.8V24.7l11.6-2.6v10.8a5.6 5.6 0 1 0 2.8 4.8V15.4c0-1.2-1.1-2.1-2.2-1.9z" fill="#fff"/></svg>`,
};
const ST_SIGNAL = '<svg width="18" height="12" viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>';
const ST_WIFI = '<svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 2.2c2.4 0 4.6.9 6.3 2.5l1.2-1.3C13.5 1.5 10.9.4 8 .4S2.5 1.5.5 3.4l1.2 1.3C3.4 3.1 5.6 2.2 8 2.2zm0 3.6c1.4 0 2.7.5 3.7 1.4l1.2-1.3C11.6 4.7 9.9 4 8 4s-3.6.7-4.9 1.9l1.2 1.3c1-.9 2.3-1.4 3.7-1.4zM8 9.4c.5 0 1 .2 1.3.5L8 11.6 6.7 9.9c.3-.3.8-.5 1.3-.5z"/></svg>';
const ST_BATT = (p, ch = charging()) => `<svg width="27" height="13" viewBox="0 0 27 13"><rect x=".5" y=".5" width="23" height="12" rx="3.5" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="${Math.max(2, 20 * p)}" height="9" rx="2" fill="${ch ? '#34c759' : p < .2 ? '#ff3b30' : 'currentColor'}"/><path d="M25 4.5v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2z" opacity=".4"/>${ch ? '<path d="M13.4 2.2 8.6 7h3l-1.3 4 4.9-5h-3.1z" fill="#fff" stroke="#000" stroke-width=".4"/>' : ''}</svg>`;
const SVG_PHONE = '<svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>';

// ---------- status bar ----------
// baterai ngikut jam: penuh jam 14.00, turun pelan; 13.00–14.00 lagi dicas (Kino nyolok di meja kantor)
const charging = () => now().getHours() === 13;
function battery() { const t = now(); const mins = t.getHours() * 60 + t.getMinutes();
  if (charging()) { const low = 1 - 1380 / 1700; return low + (1 - low) * (t.getMinutes() / 60); }
  return Math.max(.08, 1 - ((mins + 600) % 1440) / 1700); }
function lowBattery() { // sekali sehari pas nyentuh 20%
  if (!S.unlocked || charging() || battery() >= .2) return; const k = dayKey(); if (store.get('lowBatt', '') === k) return;
  store.set('lowBatt', k); toast({ icon: ICONS.settings, title: 'Baterai Lemah', body: `${Math.round(battery() * 100)}% baterai tersisa`, ms: 4000 });
}
function tickStatus() {
  try { lowBattery(); } catch (e) {}
  try { findNotice(); } catch (e) {}
  try { epiNotice(); } catch (e) {}
  const st = $('#status');
  st.querySelector('.st-t').textContent = hm(now());
  st.querySelector('.st-b').innerHTML = ST_BATT(battery());
  document.querySelectorAll('[data-clock]').forEach(e => e.textContent = e.dataset.clock === 'lock' ? hm(now()).replace('.', ':') : hm(now()));
}
$('#status').innerHTML = `<span class="st-t"></span><span class="island"></span><span class="st-r">${ST_SIGNAL}${ST_WIFI}<span class="st-b"></span></span>`;
tickStatus();

// ---------- layers ----------
function setBase(el) { layersEl.innerHTML = ''; push(el); }
// pindah app/akun tanpa nutup-buka (home ga keliatan kedip): tutup langsung tanpa animasi, buka yg baru tanpa animasi masuk
function swapTo(fn) { const olds = [...layersEl.children].slice(1); S.noAnim = true; try { fn(); } finally { S.noAnim = false; } setTimeout(() => { olds.forEach(o => o.remove()); syncChrome(); }, 240); } // yg baru crossfade di atas yg lama, baru yg lama dibuang
function push(el) { el.classList.add('layer'); layersEl.appendChild(el); syncChrome(); return el; }
// keluar dgn animasi: layer dipindah ke #exits biar urutan layer lain langsung bener
const exitsEl = (() => { const e = document.createElement('div'); e.id = 'exits'; $('#screen').appendChild(e); return e; })();
function animOut(el, kind) {
  if (!el || el.classList.contains('lock') || el.classList.contains('intro')) { el && el.remove(); return; }
  const o = kind === 'exit-app' && el.dataset.origin && !el.style.transform ? el.dataset.origin : ''; // dibuka dari ikon → balik ke ikon (kalo lagi digeser, biarin dari posisi jari)
  if (o) el.style.transformOrigin = o;
  exitsEl.appendChild(el); el.classList.add(kind);
  // animasi keluar ditaro inline biar selalu menang (halaman yg punya animasi sendiri dulu "masuk lagi" pas back → glitch 2x)
  el.style.animation = kind === 'exit-sub' ? 'subout .27s cubic-bezier(.4,0,.6,1) forwards' : o ? 'appiconout .32s cubic-bezier(.4,0,.2,1) forwards' : 'appout .3s cubic-bezier(.4,0,.2,1) forwards';
  setTimeout(() => el.remove(), 320);
}
function pop() { const top = layersEl.lastElementChild; if (top && layersEl.children.length > 1) { if (top.dataset.epinarr) setTimeout(epiNarr, 700); animOut(top, top.classList.contains('sub') ? 'exit-sub' : 'exit-app'); syncChrome(); refreshUnder(); } }
function popTo(n) {
  if (layersEl.children.length <= n) return;
  if ([...layersEl.children].slice(n).some(x => x.dataset.epinarr)) setTimeout(epiNarr, 700);
  const top = layersEl.lastElementChild, root = layersEl.children[1];
  if (n <= 1 && root && root !== top && root.dataset.origin) top.dataset.origin = root.dataset.origin; // dari dalem chat langsung ke home: tetep balik ke ikon app-nya
  while (layersEl.children.length > n + 1) layersEl.children[n].remove();
  animOut(top, n <= 1 ? 'exit-app' : (top.classList.contains('sub') ? 'exit-sub' : 'exit-app'));
  syncChrome(); refreshUnder();
  const h0 = layersEl.firstElementChild; if (n <= 1 && h0 && h0.classList.contains('home')) { h0.classList.remove('rein'); void h0.offsetWidth; h0.classList.add('rein'); }
}
const topL = () => layersEl.lastElementChild;
// abis balik: update badge home & daftar chat (biar yg udah dibaca ilang)
function dailyToast(d) { toast({ icon: typeof ICONS[d[0]] === 'function' ? ICONS[d[0]](now()) : (ICONS[d[0]] || ICONS.calendar(now())), title: d[1], body: d[2], ms: 5000 }); }
function refreshUnder() {
  const t = layersEl.lastElementChild; if (!t) return;
  if (S.dailyLater && t.classList.contains('home')) { const d = S.dailyLater; S.dailyLater = null; setTimeout(() => dailyToast(d), 500); } // banner harian yg ditunda (masuk lewat notif)
  if (t.classList.contains('home')) t.querySelectorAll('.app').forEach(a => { const n = a.dataset.app === 'kakao' ? unreadTotal() : 0; const b = a.querySelector('.bdg'); if (a.dataset.app !== 'kakao') return; if (n) { if (b) b.textContent = n; else a.querySelector('.icon').insertAdjacentHTML('afterend', `<span class="bdg">${n}</span>`); } else if (b) b.remove(); });
  if (t.classList.contains('kakao') && !t.dataset.chat) { const b = t.querySelector('.body'), html = kakaoRows(); if (b._rows !== html) { morph(b, html); b._rows = html; } wireKakao(t); }
}
function syncChrome() {
  const t = topL(); const dark = t && t.dataset.dark === '1';
  $('#status').classList.toggle('dark', dark); $('#homebar').classList.toggle('dark', dark);
  $('#status').style.visibility = t && t.dataset.nostatus ? 'hidden' : '';
}
$('#homebar').onclick = () => { if (topL() && topL().classList.contains('cam')) return pop(); if (!S.unlocked) return passcode(); const t = topL(); if (t && (t.classList.contains('storyv') || t.classList.contains('memshow'))) { const x = t.querySelector('.sv-x, .mx'); if (x) x.click(); else t.remove(); } else if (t && t.dataset.modal) return; if (layersEl.children.length > 1) popTo(1); }; // story & kenangan: tombol home tetep jalan (telfon/ending/interview tetep dikunci)

// ---------- notifikasi ----------
function ncard({ icon = ICONS.kakao, title, body, when = 'sekarang', go = '' }) {
  return `<div class="ncard"${go ? ` data-go="${go}"` : ''}><div class="ni">${icon}</div><div class="nt"><div class="nh">${esc(title)}<span>${esc(when)}</span></div><div class="nb">${esc(body)}</div></div></div>`;
}
function katalk() {
  try { const a = sfx('katalk'); a.currentTime = 0; a.play().catch(() => { tone([1568], 0, .09, .07, 'triangle'); tone([2093], .1, .14, .07, 'triangle'); }); } catch (e) {}
}
function toast(opts) {
  sysNotify(opts.title, opts.body, 'msg-' + opts.title);
  if (!opts.icon || opts.icon === ICONS.kakao) katalk();
  buzz(/^kris/i.test(opts.title || '') ? 'kris' : 'notif');
  // cuma 1 banner sekaligus (kayak iPhone): yg baru gantiin yg lama, biar ga nutupin tombol back
  $('#toasts').querySelectorAll('.ncard').forEach(x => x.remove());
  const el = h(ncard(opts));
  let gone = false; const close = () => { if (gone) return; gone = true; el.classList.add('out'); setTimeout(() => el.remove(), 300); };
  let y0 = null;
  el.addEventListener('pointerdown', e => { y0 = e.clientY; });
  el.addEventListener('pointermove', e => { if (y0 !== null && y0 - e.clientY > 12) { y0 = null; close(); } });
  el.onclick = () => { if (gone) return; close(); opts.onClick && opts.onClick(); };
  $('#toasts').appendChild(el);
  setTimeout(close, opts.ms || 3500);
}

// ---------- PWA: install + notifikasi sistem ----------
let swReg = null, installEvt = null;
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) navigator.serviceWorker.register('sw.js').then(r => swReg = r).catch(() => {});
// versi baru udah aktif → muat ulang sekali biar langsung pake (jangan pas lagi telfon / narasi ending; kalo lagi, tunggu sampe app dibuka lagi)
if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
  let swNew = false;
  const swReload = () => { if (swNew && !document.querySelector('.call, .ending, .finale')) { swNew = false; location.reload(); } };
  navigator.serviceWorker.addEventListener('controllerchange', () => { swNew = true; swReload(); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) swReload(); });
}
addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; document.querySelectorAll('.pwa .inst').forEach(b => b.style.display = ''); });
const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone;
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
// ---------- getar ----------
// Android: navigator.vibrate. iPhone ga punya API getar buat web; Safari 18+ bisa diakalin pake <input switch> yg diklik (1 klik = 1 "tik", polanya dipecah per tik)
const BUZZ = {
  notif: [35, 70, 35],
  kris: [60, 60, 60, 60, 160], // notif dari Kris: lebih rame
  ring: [500, 250, 500, 1000], // telpon masuk, diulang selama bunyi
  wrong: [40, 50, 40, 50, 40], // kode sandi salah
  faint: [120, 280, 120, 280, 120, 600, 900], // deg.. deg.. deg.. terus jatuh
};
let iosSw = null;
function iosTick() { try { if (!iosSw) { iosSw = document.createElement('label'); iosSw.style.cssText = 'position:fixed;left:-99px;top:0;opacity:0;pointer-events:none'; iosSw.innerHTML = '<input type="checkbox" switch>'; document.body.appendChild(iosSw); } iosSw.click(); } catch (e) {} }
function buzz(k) {
  if (store.get('noBuzz', false)) return;
  const pat = BUZZ[k] || k;
  try { if (navigator.vibrate) { navigator.vibrate(pat); return; } } catch (e) {}
  if (!isIOS) return;
  let t = 0; pat.forEach((ms, i) => { if (i % 2 === 0) setTimeout(iosTick, t); t += ms; });
}
function wirePwa(el) {
  const inst = el.querySelector('.inst'), nb = el.querySelector('.notif');
  if (!standalone() && (installEvt || isIOS)) inst.style.display = '';
  inst.onclick = async () => {
    if (installEvt) { installEvt.prompt(); await installEvt.userChoice; installEvt = null; inst.style.display = 'none'; return; }
    toast({ icon: ICONS.safari, title: 'Install di iPhone', body: 'Safari → tombol Bagikan ⎋ → "Tambah ke Layar Utama"', ms: 7000 });
  };
  const sync = () => { if (!('Notification' in window)) { nb.style.display = 'none'; return; } nb.textContent = Notification.permission === 'granted' ? '🔔 Notifikasi nyala' : '🔔 Nyalain notifikasi'; nb.disabled = Notification.permission === 'granted'; };
  nb.onclick = async () => { try { await Notification.requestPermission(); } catch (e) {} sync(); subscribePush(); if (isIOS && !standalone()) toast({ icon: ICONS.safari, title: 'Info', body: 'di iPhone, notif pas app ketutup cuma jalan kalau HP Kino di-install dulu', ms: 6000 }); };
  sync();
}
// push pas app ketutup: daftar ke server (Vercel + Supabase)
const VAPID_PUBLIC = 'BO2o34udcwP0TJOL-xWZQtaKAJlw4DJ_6I008mv0241AywzjMF1Mj72T0wDi7IbARCLUDmu-VPrGKm4xQbFRbsc';
const b64u = (s) => { const p = '='.repeat((4 - s.length % 4) % 4); const r = atob((s + p).replace(/-/g, '+').replace(/_/g, '/')); return Uint8Array.from([...r].map(c => c.charCodeAt(0))); };
async function subscribePush() {
  try {
    if (!('PushManager' in window) || Notification.permission !== 'granted') return;
    const reg = swReg || await navigator.serviceWorker.ready;
    const sub = (await reg.pushManager.getSubscription()) || await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64u(VAPID_PUBLIC) });
    await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sub, tz: -new Date().getTimezoneOffset(), lang: L }) });
  } catch (e) {}
}
if ('Notification' in window && Notification.permission === 'granted' && location.protocol === 'https:') setTimeout(subscribePush, 2000);
// kalau app lagi di background: kirim notif sistem
function sysNotify(title, body, tag) {
  if (!document.hidden || !('Notification' in window) || Notification.permission !== 'granted') return;
  const opts = { body, tag, icon: 'icons/icon-192.png', badge: 'icons/icon-192.png', renotify: true };
  try { if (swReg) swReg.showNotification(title, opts); else new Notification(title, opts); } catch (e) {}
}

// ---------- intro ----------
const INTRO = {
  id: { when: d => d > 1 ? `${d} hari lagi Kino ulang tahun.` : d === 1 ? 'Besok Kino ulang tahun.' : 'Hari ini Kino ulang tahun.', p: 'Akhir-akhir ini Kris ngejauh.<br><br>Ceritanya jalan sesuai tanggal & jam beneran.<br>Chat baru masuk pelan-pelan sampai 25 Oktober.', go: 'Mulai' },
  en: { when: d => d > 1 ? `${d} days until Kino's birthday.` : d === 1 ? "Kino's birthday is tomorrow." : "Today is Kino's birthday.", p: 'Lately Kris has been pulling away.<br><br>The story runs on the real date & time.<br>New chats arrive slowly until October 25.', go: 'Start' },
  ko: { when: d => d > 1 ? `키노 생일까지 ${d}일.` : d === 1 ? '내일은 키노 생일.' : '오늘은 키노 생일.', p: '요즘 크리스가 멀어지고 있다.<br><br>이야기는 실제 날짜와 시간에 맞춰 흘러가요.<br>새 채팅은 10월 25일까지 천천히 도착해요.', go: '시작' },
  zh: { when: d => d > 1 ? `还有${d}天就是Kino的生日。` : d === 1 ? '明天是Kino的生日。' : '今天是Kino的生日。', p: '最近Kris在疏远他。<br><br>故事按真实的日期和时间进行。<br>新消息会慢慢到来,直到10月25日。', go: '开始' },
};
function daysLeft() { return Math.ceil((BDAY - dayStart(now())) / 864e5); }
function intro() {
  const d = daysLeft();
  const T = INTRO[L];
  const el = h(`<div class="intro" data-nostatus="1">
    <h1>HP Kino</h1>
    ${I18N_ON ? '' : '<!--'}<div class="langs">${LANGS.map(([k, f, n]) => `<button data-l="${k}" class="${k === L ? 'on' : ''}">${f} ${n}</button>`).join('')}</div>${I18N_ON ? '' : '-->'}
    <p>${T.when(d)}<br>${T.p}</p>
    <button class="cta">${T.go}</button>
    <div class="pwa"><button class="inst" style="display:none">⤓ Install ke HP</button><button class="notif">🔔 Nyalain notifikasi</button><button class="fullbtn" style="display:none"></button></div>
    <div class="disc">Fan fiction. Semua nama, chat & kejadian rekaan.<br>cr. stayroom ai & antarestars</div>
  </div>`);
  el.querySelectorAll('.langs button').forEach(b => b.onclick = () => { if (b.dataset.l !== L || !LANG) setLang(b.dataset.l); });
  el.querySelector('.cta').onclick = () => { if (!LANG) { try { localStorage.setItem('hpkino:lang', JSON.stringify(L)); } catch (e) {} } lock(); };
  wirePwa(el);
  const fb = el.querySelector('.fullbtn'), fsync = () => { fb.textContent = `⛶ Layar penuh · ${isFull() ? 'nyala' : 'mati'}`; };
  if (canFull()) { fb.style.display = ''; fsync(); fb.onclick = () => { setFull(!isFull()); fsync(); }; }
  setBase(el);
}

// ---------- lock screen ----------
function lockNotifs() {
  const out = [];
  CHATS.forEach(c => { const u = c.muted ? 0 : unread(c); if (u) { const m = lastMsg(c); out.push({ ts: m.ts, html: ncard({ go: 'c:' + c.id, title: c.group ? `${c.name} · ${m.who}` : c.name, body: u > 1 ? `${preview(m)}  (+${u - 1})` : preview(m), when: relDay(m.ts) === hm(m.ts) ? hm(m.ts) : relDay(m.ts) }) }); } });
  out.sort((a, b) => b.ts - a.ts);
  const d = daysLeft();
  const cal = d > 0 ? ncard({ icon: ICONS.calendar(BDAY), go: 'app:calendar', title: 'Kalender', body: `🎂  ${d === 1 ? 'besok' : d + ' hari lagi'}`, when: 'hari ini' }) : '';
  const mem = ncard({ icon: ICONS.photos, go: 'app:photos', title: 'Foto', body: 'Kenangan: ulang tahun kris 🎂 · 3 Oktober', when: 'kemarin' });
  const t = now();
  if (t >= INTV[0] && t < INTV[1]) { // lagi interview: notif dibisukan Fokus
    const ic = (bg, txt) => `<div style="width:100%;height:100%;border-radius:9px;background:${bg};display:grid;place-items:center;color:#fff;font-weight:700;font-size:17px">${txt}</div>`;
    const ex = [{ ts: new Date('2026-10-22T17:00'), html: ncard({ icon: ic('#5b5fc7', 'T'), title: 'Teams', body: 'Prof. Helen Ashby bergabung ke rapat', when: '17.00' }) }];
    if (t >= new Date('2026-10-22T17:06')) ex.push({ ts: new Date('2026-10-22T17:06'), html: ncard({ icon: ic('#ff2d55', '❤'), title: 'Kesehatan', body: 'Detak jantung tinggi: 118 BPM saat tidak beraktivitas', when: '17.06' }) });
    const all = [...out, ...ex].sort((a, b) => b.ts - a.ts).slice(0, 4).map(o => o.html).join('');
    return `<div class="lk-focus">🎧 Fokus: Interview · sampai 17.40</div><div class="lk-muted">${all}</div>`;
  }
  return out.slice(0, 2).map(o => o.html).join('') + mem + cal;
}
function lock() {
  S.unlocked = false;
  const el = h(`<div class="lock">${im(STORY.wallLock)}<div class="shade"></div>
    <div class="lk-top"><div class="lk-date">${longDate(now())}</div><div class="lk-time" data-clock="lock">${hm(now()).replace('.', ':')}</div></div>
    <div class="lk-notes">${lockNotifs()}</div>
    <div class="lk-bot"><div class="lk-btn"><svg viewBox="0 0 24 24"><path d="M8 2h8v4l-2 3v13h-4V9L8 6z"/></svg></div><div class="lk-btn lk-cam"><svg viewBox="0 0 24 24"><path d="M9 4l-1.5 2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.5L15 4zm3 4.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z"/></svg></div></div>
  </div>`);
  // ketuk di mana aja = kode sandi. ketuk notif = abis kebuka langsung ke chat/app-nya. geser ke atas: lihat gesture di bawah (ngikutin jari)
  el.addEventListener('click', e => {
    if (Date.now() - (S.lockDragAt || 0) < 400) return;
    if (e.target.closest('.lk-cam')) return openCamera();
    if (e.target.closest('.lk-btn')) return;
    const n = e.target.closest('.ncard'); S.goTo = (n && n.dataset.go) || null;
    passcode();
  });
  setBase(el);
}
// geser layar kunci: layarnya naik ngikutin jari, kode sandi muncul pelan2. dilepas: lanjut kalo cukup jauh / cukup cepet, kalo ngga balik lagi
function lockDrag(lk, d) {
  let p = layersEl.querySelector('.pass');
  if (!p) { S.goTo = null; passcode(); p = layersEl.querySelector('.pass'); if (!p) return; p.style.animation = 'none'; }
  const k = Math.min(1, d / 260);
  lk.style.transition = 'none'; lk.style.transform = `translateY(${-d}px)`; lk.style.opacity = Math.max(0, 1 - k * 1.8); // layar kunci pudar duluan,
  p.style.transition = 'none'; p.style.opacity = Math.max(0, (k - .3) / .7); // baru keypad nongol (ga numpuk di tengah)
}
function lockRelease(lk, d, v) {
  const p = layersEl.querySelector('.pass'), ok = d > 140 || (d > 40 && v > .5); S.lockDragAt = Date.now();
  lk.style.transition = 'transform .3s cubic-bezier(.2,.8,.2,1), opacity .3s'; lk.style.transform = ''; lk.style.opacity = '';
  if (p) { p.style.transition = 'opacity .22s'; p.style.opacity = ok ? '1' : '0'; }
  setTimeout(() => { lk.style.transition = ''; if (!p) return; p.style.transition = ''; if (!ok && p.isConnected) { p.remove(); syncChrome(); } }, 320);
}
function passcode() {
  if (layersEl.querySelector('.pass') || S.unlocked) return;
  let code = '';
  const keys = [['1', ''], ['2', 'ABC'], ['3', 'DEF'], ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'], ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ']];
  const el = h(`<div class="pass" data-nostatus="">
    <div class="blurbg" style="background-image:url('${STORY.wallLock}')"></div>
    <div class="pt">Masukkan Kode Sandi</div>
    <div class="pdots">${'<i></i>'.repeat(4)}</div>
    <div class="pkeys">${keys.map(([n, l]) => `<button class="pk" data-n="${n}">${n}<small>${l}</small></button>`).join('')}<span></span><button class="pk" data-n="0">0</button><span></span></div>
    <div class="pbot"><button class="emg">Darurat</button><button class="cancel">Batal</button></div>
  </div>`);
  const dots = el.querySelector('.pdots');
  const draw = () => { [...dots.children].forEach((d, i) => d.classList.toggle('on', i < code.length)); el.querySelector('.cancel').textContent = code ? 'Hapus' : 'Batal'; };
  el.querySelectorAll('.pk').forEach(b => b.onclick = () => {
    if (code.length >= 4) return;
    code += b.dataset.n; draw();
    if (code.length === 4) setTimeout(() => {
      if (code === STORY.passcode) return unlock();
      S.wrong++; buzz('wrong'); dots.classList.add('shake'); setTimeout(() => dots.classList.remove('shake'), 450);
      code = ''; draw();
    }, 120);
  });
  el.querySelector('.cancel').onclick = () => { if (code) { code = code.slice(0, -1); draw(); } else { S.goTo = null; pop(); } };
  push(el);
}
const FAINT = [new Date('2026-10-24T17:40'), new Date('2026-10-24T20:35')];
const INTV = [new Date('2026-10-22T17:00'), new Date('2026-10-22T17:40')];
function unlock() {
  const t = now(), go = S.goTo; S.goTo = null;
  if (t >= FAINT[0] && t < FAINT[1]) { // GERD Kino kumat (di klinik, ketiduran abis dikasih obat): HP ga bisa dibuka
    buzz('faint');
    const el = h(`<div class="faint" data-nostatus="1" data-modal="1"><p>Dada Kino panas. Perutnya melilit.</p><p class="s">Ia nggak bisa berdiri. Lalu semuanya jauh.</p><p class="s2">(Kino lagi ditangani di klinik. HP-nya cuma bisa nerima notif. coba buka lagi nanti.)</p></div>`);
    const go = () => { if (el.isConnected) { el.remove(); syncChrome(); } }; push(el); ambWhile(el, 'beep'); setTimeout(() => { el.onclick = go; }, 2500); setTimeout(go, 10000); return; // 10 detik biar kebaca semua; boleh ditap abis 2,5 detik
  }
  if (t >= INTV[0] && t < INTV[1]) { // interview oxford: HP ditelungkupin
    const el = h(`<div class="faint" data-nostatus="1" data-modal="1"><p>Kino lagi interview.</p><p class="s">Teams. Kamera nyala. Jangan diganggu.</p><p class="s2">(HP-nya ditelungkupin di meja. coba buka lagi abis 17.40)</p></div>`);
    const go = () => { if (el.isConnected) { el.remove(); syncChrome(); } }; el.onclick = go; push(el); setTimeout(go, 8000); return;
  }
  S.unlocked = true; home();
  if (go) setTimeout(() => { if (!S.unlocked || layersEl.children.length > 1) return; const [k, v] = go.split(':'); if (k === 'c') openApp('kakao', v); else openApp(v); }, 350);
  const k = dayKey(), d = DAILY[k], shown = store.get('daily', {});
  if (d && !shown[k] && !EPI) { shown[k] = 1; store.set('daily', shown); if (go) { S.dailyLater = d; return; } setTimeout(() => toast({ icon: typeof ICONS[d[0]] === 'function' ? ICONS[d[0]](now()) : (ICONS[d[0]] || ICONS.calendar(now())), title: d[1], body: d[2], ms: 5000 }), 900); }
}

// ---------- home ----------
const APPS = [
  { id: 'insta', name: 'Instagram' }, { id: 'photos', name: 'Foto' }, { id: 'calendar', name: 'Kalender' }, { id: 'clock', name: 'Jam' },
  { id: 'notes', name: 'Catatan' }, { id: 'weather', name: 'Cuaca' }, { id: 'camera', name: 'Kamera' }, { id: 'settings', name: 'Pengaturan' }, { id: 'x', name: 'X' }, { id: 'mail', name: 'Mail' }, { id: 'ai', name: 'Claude' }, { id: 'health', name: 'Kesehatan' },
];
const DOCK = [{ id: 'phone', name: 'Telepon' }, { id: 'safari', name: 'Safari' }, { id: 'kakao', name: 'KakaoTalk' }, { id: 'music', name: 'Musik' }];
const unreadTotal = () => CHATS.reduce((a, c) => a + (c.muted ? 0 : unread(c)), 0); // grup yg di-mute ga ikut badge
function appIcon(a) {
  const ic = typeof ICONS[a.id] === 'function' ? ICONS[a.id](now()) : ICONS[a.id];
  const n = a.id === 'kakao' ? unreadTotal() : a.id === 'mail' ? mailUnread() : a.id === 'phone' ? (S.called === 'missed' ? 1 : 0) : 0;
  return `<button class="app" data-app="${a.id}"><div class="icon">${ic}</div>${n ? `<span class="bdg">${n}</span>` : ''}<div class="lbl">${a.name}</div></button>`;
}
const EPI_OPEN = new Date('2026-10-25T22:00');
function epiNotice() { if (!S.unlocked || EPI || !store.get('ending', null) || now() < EPI_OPEN || store.get('epiToast', false)) return; store.set('epiToast', true); toast({ icon: ICONS.notes, title: 'Days Until', body: '📱 seminggu kemudian udah kebuka. cek di home', ms: 6000 }); }
function goEpilogPhone(key) { try { if (store.get('epiDone', null) !== key) { const a = store.get('answers', {}); delete a['fin-' + key]; store.set('answers', a); } } catch (e) {} try { localStorage.setItem('hpkino:epi', JSON.stringify({ key, at: Date.now() })); localStorage.setItem('hpkino:epiFresh', 'true'); } catch (e) {} if (location.search.includes('lihat=')) location.href = location.pathname; else location.reload(); }
// masuk HP seminggu kemudian: langsung kebuka (tanpa kode sandi), layar item + petunjuk sekali
function epiEnter() {
  S.unlocked = true; home();
  // layar item tiap kali masuk lewat "seminggu kemudian" (bukan tiap buka app). petunjuk cuma kalo epilognya belum kebaca
  const fresh = store.get('epiFresh', false) || store.get('epiShown', null) !== EPI.key; if (!fresh) return;
  try { localStorage.removeItem('hpkino:epiFresh'); } catch (e) {} store.set('epiShown', EPI.key);
  const hint = store.get('epiDone', null) !== EPI.key;
  const el = h(`<div class="faint" data-nostatus="1" data-modal="1"><p>seminggu kemudian.</p>${hint ? '<p class="s" style="color:#d1d1d6;font-size:15px;margin-top:16px;animation-delay:1.4s">explore HP Kino dulu aja, baru chat Kris.</p><p class="s2" style="color:#8e8e93;font-size:13px;margin-top:8px;animation-delay:2.2s">chat Kris untuk membuka epilog.</p>' : ''}</div>`);
  const go = () => { if (!el.isConnected) return; el.remove(); syncChrome(); };
  el.onclick = go; push(el); setTimeout(go, hint ? 9500 : 3000);
}
// chat terakhir sama Kris → narasi epilog → Days Until
const epiFinal = () => EPI && REPLIES.some(r => r.final && r.epi === EPI.key);
function epiNarr() { if (!EPI || document.querySelector('.ending')) return; store.set('epiDone', EPI.key); ending(EPI.key, true); }
function epiButton(el) {
  const key = store.get('ending', null);
  if (EPI) return; // HP seminggu kemudian: home bersih. epilog (dan baca ulang) lewat chat Kris, balik ke 25 Okt dari akhir epilog
  if (!key || now() < EPI_OPEN) return; // kebuka jam 22.00 tgl 25, biar hari ultahnya kebaca dulu
  const b = h(`<button class="epibtn">📱 seminggu kemudian →</button>`); b.onclick = (e) => { e.stopPropagation(); goEpilogPhone(key); };
  el.appendChild(b);
}
function home() {
  const t = now(), d = daysLeft();
  const el = h(`<div class="home">${im(STORY.wallHome)}
    <div class="widgets">
      <div class="widget wcal"><div class="wd">${HARI[t.getDay()]}</div><div class="wn">${t.getDate()}</div>
        ${d > 0 ? `<div class="we">🎂<span>${d === 1 ? 'besok' : d + ' hari lagi'}</span></div>` : d === 0 ? `<div class="we">🎂<span>Sepanjang hari</span></div>` : (() => { const hh = hm(t).replace('.', ':'), ev = AGENDA.filter(e => e[0] === dayKey(t) && (!e[5] || epiIs(e[5])) && (!e[1] || e[1] >= hh)).sort((a, b) => (a[1] || '00') < (b[1] || '00') ? -1 : 1)[0]; return ev ? `<div class="we">${esc(ev[2])}<span>${ev[1] ? ev[1].replace(':', '.') : 'sepanjang hari'}</span></div>` : `<div class="we">Tidak ada acara<span>hari ini</span></div>`; })()}</div>
      <div class="widget wwx"><svg class="ic" viewBox="0 0 24 24"><path d="M7 18h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.4 2A3 3 0 0 0 7 18z" fill="#fff"/></svg><div class="c">Seoul ➤</div><div class="t">${weatherNow().t}°</div><div class="d">${weatherNow().s}</div><div class="hl">T:${weatherNow().hi}° R:${weatherNow().lo}°</div></div>
    </div>
    <div class="hgrid">${APPS.slice(0, 8).map(appIcon).join('')}${findWidget()}${APPS.slice(8).map(appIcon).join('')}</div>
    <div class="spot"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>Cari</div>
    <div class="dock">${DOCK.map(appIcon).join('')}</div>
  </div>`);
  el.querySelectorAll('.app').forEach(b => b.onclick = () => openFrom(b.querySelector('.icon, .fmw-box') || b, b.dataset.app));
  el.querySelector('.wcal').onclick = (e) => openFrom(e.currentTarget, 'calendar');
  el.querySelector('.wwx').onclick = (e) => openFrom(e.currentTarget, 'weather');
  epiButton(el); setBase(el);
}
// update badge home + daftar chat di tempat (gak gambar ulang home biar gak kedip)
function refreshHome() {
  const first = layersEl.firstElementChild;
  if (first && first.classList.contains('home') && !first.querySelector('.epibtn')) epiButton(first);
  if (first && first.classList.contains('home')) { const w = first.querySelector('.fmw-box'), html = findWidgetInner(); if (w && w._h !== html) { morph(w, html); w._h = html; } }
  if (first && first.classList.contains('home')) first.querySelectorAll('.app[data-app="kakao"], .app[data-app="mail"]').forEach(a => { const n = a.dataset.app === 'mail' ? mailUnread() : unreadTotal(); const b = a.querySelector('.bdg'); if (n) { if (b) b.textContent = n; else a.querySelector('.icon').insertAdjacentHTML('afterend', `<span class="bdg">${n}</span>`); } else if (b) b.remove(); });
  layersEl.querySelectorAll('.win.kakao').forEach(k => { if (k.dataset.chat) return; const body = k.querySelector('.body'), html = kakaoRows(); if (body._rows === html) return; const st = body.scrollTop; morph(body, html); body._rows = html; body.scrollTop = st; wireKakao(k); });
}
function weatherNow() { const t = now(); const days = { 20: [11, 'Cerah Berawan', 16, 7], 21: [10, 'Berawan', 14, 6], 22: [8, 'Hujan Ringan', 12, 6], 23: [9, 'Berawan', 13, 5], 24: [7, 'Hujan Ringan', 11, 4], 25: [6, 'Cerah', 12, 3] }; const w = days[t.getDate()] || [9, 'Berawan', 13, 5]; const hr = t.getHours(); const adj = hr < 6 ? -3 : hr < 11 ? -1 : hr < 17 ? 3 : 0; return { t: w[0] + adj, s: w[1], hi: w[2], lo: w[3] }; }

// generic window
function win({ title = '', back = '', cls = '', body = '', dark = true, sub = false, footer = '', act = '', big = '' }) {
  const el = h(`<div class="win ${cls}${sub ? ' sub' : ''}" ${dark ? 'data-dark="1"' : ''}>
    <div class="nav"><button class="back">${BACK}${esc(back)}</button><h2>${title}</h2><div class="act">${act}</div></div>
    <div class="body">${big ? `<div class="bigtitle">${big}</div>` : ''}${body}</div>${footer}
  </div>`);
  el.querySelector('.back').onclick = pop;
  if (S.noAnim) el.style.animation = 'xfade .22s ease both';
  return push(el);
}
// buka app dari home: zoom keluar dari ikonnya (kayak iPhone). pas ditutup balik mengecil ke ikon itu (lihat animOut)
function openFrom(icon, id) {
  const scr = $('#screen'), r = icon.getBoundingClientRect(), sr = scr.getBoundingClientRect(), sc = sr.width / scr.offsetWidth;
  const o = `${Math.round((r.left + r.width / 2 - sr.left) / sc)}px ${Math.round((r.top + r.height / 2 - sr.top) / sc)}px`;
  const before = topL(); openApp(id);
  const t = topL(); if (!t || t === before || t.classList.contains('sub') || t.dataset.modal) return;
  t.dataset.origin = o; t.style.transformOrigin = o; t.style.animation = 'appicon .38s cubic-bezier(.2,.85,.25,1)';
}
function openApp(id, arg) {
  if (!S.unlocked) return;
  const t = topL(); if (t && t.dataset.modal) return;
  if (layersEl.children.length > 1 && !S.noAnim) return swapTo(() => openApp(id, arg)); // dari dalem app lain: ganti langsung, home ga kedip
  ({ find: appFind, health: appHealth, ai: appAI, mail: appMail, x: appX, memo: appMemo, camera: openCamera, kakao: appKakao, photos: appPhotos, notes: appNotes, calendar: appCalendar, insta: appInsta, clock: appClock, weather: appWeather, settings: appSettings, phone: appPhone, safari: appSafari, music: appMusic })[id](arg);
}

// ---------- X ----------
S.xLiked = store.get('xLiked', {});
const xPost = (id) => X_POSTS.find(p => p[0] === id);
const xOk = (p) => { const o = p[7] || {}; return visible(new Date(p[2])) && (!o.fight || S.fightDone) && (!o.epi || (EPI && epiIs(o.epi))) && (!o.end || endKey() === o.end); };
const xVis = () => X_POSTS.filter(xOk).sort((a, b) => new Date(b[2]) - new Date(a[2]));
function xAv(u, cls = '') { const U = X_USERS[u] || {}; if (U.avImg) return `<div class="av rd ${cls}">${im(U.avImg)}</div>`; if (U.person) return av(U.person, 'rd ' + cls); if (U.emoji) return `<div class="av rd ${cls}" style="background:#e8f2fb;display:grid;place-items:center;font-size:20px">${U.emoji}</div>`; return av('', 'rd ' + cls); }
const xAgo = (t) => { const m = (now() - t) / 6e4; return m < 60 ? `${Math.max(1, m | 0)}m` : m < 1440 ? `${(m / 60) | 0}j` : `${t.getDate()} ${BULAN[t.getMonth()].slice(0, 3)}`; };
const XI = {
  rep: '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg>',
  rt: '<svg viewBox="0 0 24 24"><path d="M7 7h10v6M14 10l3 3 3-3M17 17H7v-6M10 14l-3-3-3 3"/></svg>',
  like: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
  view: '<svg viewBox="0 0 24 24"><path d="M5 20V10M10 20V4M15 20v-7M20 20v-4"/></svg>',
};
function xCard(p, detail) {
  const [id, u, ts, text, img, reps = [], likes = 0] = p; const U = X_USERS[u] || {}; const liked = S.xLiked[id];
  return `<div class="xpost ${detail ? 'big' : ''}" data-x="${id}"><div class="xav" data-u="${u}">${xAv(u, 'sm')}</div><div class="xb">
    <div class="xh"><b data-u="${u}">${esc(U.name)}${U.locked ? ' 🔒' : ''}</b><span>@${esc(U.handle)} · ${xAgo(new Date(ts))}</span></div>
    <div class="xt">${esc(text)}</div>${img ? `<div class="ximg">${im(img)}</div>` : ''}
    <div class="xa"><span>${XI.rep}${(reps.length + ((S.soc && S.soc['x:' + id]) || []).length) || ''}</span><span>${XI.rt}${U.locked ? '' : (Math.round(likes / 9) || '')}</span><span class="xl ${liked ? 'on' : ''}" data-l="${id}">${XI.like}${(likes + (liked ? 1 : 0)) || ''}</span><span>${XI.view}${U.locked ? '' : likes * 37}</span></div></div></div>`;
}
function wireX(el) {
  el.querySelectorAll('[data-u]').forEach(b => b.onclick = (e) => { e.stopPropagation(); xProfile(b.dataset.u); });
  el.querySelectorAll('.xl').forEach(b => b.onclick = (e) => { e.stopPropagation(); const id = b.dataset.l; S.xLiked[id] = !S.xLiked[id]; store.set('xLiked', S.xLiked); const p = xPost(id); b.classList.toggle('on', !!S.xLiked[id]); b.innerHTML = XI.like + ((p[6] + (S.xLiked[id] ? 1 : 0)) || ''); });
  el.querySelectorAll('.xpost:not(.big)').forEach(c => c.onclick = () => xDetail(c.dataset.x));
}
const xBar = (on = 0) => `<div class="xbar">${['<path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z"/>', '<circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/>', '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>', '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'].map((p, i) => `<span class="${i === on ? 'on' : ''}" data-xb="${i}"><svg viewBox="0 0 24 24">${p}</svg></span>`).join('')}<span data-xb="4" class="${on === 4 ? 'on' : ''}">${xAv(S.xAcct, 'xs')}</span></div>`;
function wireXBar(el) { el.querySelectorAll('[data-xb]').forEach(b => b.onclick = () => { const i = +b.dataset.xb; if (i === 1) xSearch(); if (i === 2) xNotif(); if (i === 3) xDMs(); if (i === 4) xProfile(S.xAcct); if (i === 0) { while (topL() && !topL().dataset.xroot && layersEl.children.length > 1) pop(); } }); }
S.xAcct = store.get('xAcct', 'alt');
function appX() {
  if (S.xAcct === 'alt') clue('alt');
  const me = S.xAcct;
  const feed = xVis().filter(p => me === 'alt' ? p[1] === 'alt' : X_MAIN_FOLLOWS.includes(p[1]));
  const el = win({ cls: 'xapp', title: '<svg class="xlogo" viewBox="0 0 24 24"><path d="M17.7 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.3L1.6 3H8l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/></svg>', body: `<div class="xtabs"><span>Untuk Anda</span><span class="on">Mengikuti</span></div>${feed.length ? feed.map(p => xCard(p)).join('') : '<div class="xempty">Belum ada postingan</div>'}<div style="height:70px"></div>`, footer: xBar() });
  el.dataset.xroot = '1';
  el.querySelector('.back').outerHTML = `<button class="back xme">${xAv(me, 'xs')}</button>`;
  wireX(el); wireXBar(el);
  el.querySelector('.xme').onclick = (e) => { e.stopPropagation(); xAccounts(el); };
}
// sheet ganti akun (tap avatar kiri atas)
function xAccounts(root) {
  const row = (u) => { const U = X_USERS[u]; return `<div class="xacc" data-a="${u}">${xAv(u, 'sm')}<div><b>${esc(U.name)}${U.locked ? ' 🔒' : ''}</b><span>@${esc(U.handle)}</span></div>${S.xAcct === u ? '<i>✓</i>' : ''}</div>`; };
  const sh = h(`<div class="xsheet-bg"><div class="xsheet"><div class="xgrab"></div><div class="xsh-t">Akun</div>${row('alt')}${row('kino')}<div class="xacc xprofbtn">👤<div><b>Lihat profil</b><span>@${esc(X_USERS[S.xAcct].handle)}</span></div></div><div class="xacc add">＋<div><b>Buat akun baru</b></div></div></div></div>`);
  root.appendChild(sh);
  sh.onclick = (e) => { if (e.target === sh) sh.remove(); };
  sh.querySelectorAll('[data-a]').forEach(r => r.onclick = () => { const a = r.dataset.a; sh.remove(); if (a === S.xAcct) return; S.xAcct = a; store.set('xAcct', a); swapTo(appX); toast({ icon: ICONS.x, title: 'X', body: `Beralih ke @${X_USERS[a].handle}`, ms: 2200 }); ; });
  sh.querySelector('.xprofbtn').onclick = () => { sh.remove(); xProfile(S.xAcct); };
  sh.querySelector('.add').onclick = () => sh.remove();
}
function xSearch() {
  const list = X_STALK.filter(([, t]) => visible(new Date(t))).map(([u]) => u).reverse();
  const el = win({ cls: 'xapp', title: '<div class="xsbar">🔍 Cari</div>', back: '', sub: true, body: `<div class="xsh">Pencarian terakhir</div>${list.map(u => { const U = X_USERS[u]; return `<div class="xsrow" data-u="${u}">${xAv(u, 'sm')}<div><b>${esc(U.name)}</b><span>@${esc(U.handle)}</span></div></div>`; }).join('')}`, footer: xBar(1) });
  el.querySelectorAll('[data-u]').forEach(r => r.onclick = () => xProfile(r.dataset.u)); wireXBar(el);
}
// Secret Secret yg kelewat (momennya cuma bentar): mulai tgl 25 bisa ketemu lewat jejak di akun privat Kino
const LATE_CLUES = { '2026-10-20T21:30': ['lacak-boong'], '2026-10-22T21:00': ['lacak-boong'], '2026-10-22T22:44': ['lacak-off', 'cf-story'], '2026-10-24T21:50': ['lacak-klinik'] };
const lateOk = () => now() >= new Date('2026-10-25T00:00');
function xDetail(id) {
  const p = xPost(id); if (p && p[1] === 'alt' && lateOk()) (LATE_CLUES[p[2]] || []).forEach(clue); const reps = p[5] || []; const key = 'x:' + id;
  const mine = (S.soc[key] || []).map(([u, t, ts], i) => xCard([id + 'k' + i, u, new Date(ts).toISOString(), t, '', [], 0])).join('');
  const el = win({ cls: 'xapp', title: 'Postingan', back: '', sub: true, body: xCard(p, true) + reps.map(([u, t], i) => xCard([id + 'r' + i, u, new Date(new Date(p[2]).getTime() + (i + 1) * 7 * 6e4).toISOString(), t, '', [], 1 + (i * 3) % 9])).join('') + mine, footer: typeBar('Posting balasan') + xBar() });
  wireX(el); wireXBar(el);
  const pool = KINO_POST_LINES[key] || (p[2] >= WEEK0 || reps.some(r => r[0] === 'kino') ? [] : X_KINO_LINES[p[1]] || []);
  const next = () => EPI || S.xAcct !== 'kino' || kinoMute() || (p[1] === 'kris' && !krisSocialOk()) ? null : pickLine(key, pool);
  const body = el.querySelector('.body');
  const add = (u, t) => { socPush(key, u, t); if (!el.isConnected) return; body.insertAdjacentHTML('beforeend', xCard([id + 'k' + (S.soc[key].length - 1), u, now().toISOString(), t, '', [], 0])); wireX(el);
    const rc = el.querySelector('.xpost.big .xa span'); if (rc) rc.innerHTML = XI.rep + (reps.length + S.soc[key].length); body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' }); };
  const sync = wireTypeBar(el, 'Ketuk buat bales', next, (l) => { add('kino', l[0]); if (l[1]) setTimeout(() => { add(p[1], l[1]); sync(); }, 3500); });
  if (S.xAcct !== 'kino') el.querySelector('.socin .f').placeholder = 'Akun priv: ga bisa bales di sini';
}
// notifikasi X: balesan & like di tweet akun yg lagi aktif (akun priv: kosong, followernya 0)
function xNotif() {
  const me = S.xAcct, items = [];
  if (me === 'kino') X_POSTS.filter(p => p[1] === 'kino' && xOk(p)).forEach(p => {
    const t0 = new Date(p[2]).getTime();
    (p[5] || []).forEach(([u, t], i) => { if (u !== 'kino') items.push({ t: t0 + (i + 1) * 7 * 6e4, u, html: `<b>${esc(X_USERS[u] ? X_USERS[u].name : u)}</b> membalas: ${esc(t)}` }); });
    if (p[6]) items.push({ t: t0 + 40 * 6e4, u: (p[5] && p[5][0] && p[5][0][0]) || 'juna', html: `❤️ <b>${p[6]} orang</b> menyukai postingan kamu: <span style="color:#536471">${esc(p[3].slice(0, 60))}</span>` });
  });
  const vis = items.filter(x => x.t <= now().getTime()).sort((a, b) => b.t - a.t);
  const el = win({ cls: 'xapp', title: 'Notifikasi', back: '', sub: true, body: vis.length ? vis.map(x => `<div class="xsrow">${xAv(x.u, 'sm')}<div style="flex:1;min-width:0"><span style="color:#0f1419;font-size:14px">${x.html}</span><small style="display:block;color:#536471;font-size:12px">${xAgo(new Date(x.t))}</small></div></div>`).join('') : `<div class="xempty">${me === 'alt' ? 'Belum ada notifikasi.<br><small>akun ini dikunci, ga ada yg ngikutin</small>' : 'Belum ada notifikasi'}</div>`, footer: xBar(2) });
  wireXBar(el);
}
function xDMs(openU) {
  const ex = S.xAcct === 'kino' ? store.get('xdm', {}) : {};
  const th = (X_DMS[S.xAcct] || []).map(d => ({ ...d, msgs: [...d.msgs, ...(ex[d.u] || [])].sort((a, b) => a[0] < b[0] ? -1 : 1) })).map(d => ({ ...d, vis: d.msgs.filter(m => visible(new Date(m[0]))) })).filter(d => d.vis.length).sort((a, b) => new Date(b.vis[b.vis.length - 1][0]) - new Date(a.vis[a.vis.length - 1][0]));
  const el = win({ cls: 'xapp', title: 'Pesan', back: '', sub: true, body: th.length ? th.map(d => { const L = d.vis[d.vis.length - 1]; return `<div class="xsrow" data-dm="${d.u}">${xAv(d.u, 'sm')}<div style="flex:1;min-width:0"><b>${esc(X_USERS[d.u].name)}</b><span style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${L[1] === 'me' ? 'Kamu: ' : ''}${esc(L[2])}</span></div><small style="color:#536471">${xAgo(new Date(L[0]))}</small></div>`; }).join('') : `<div class="xempty">${S.xAcct === 'alt' ? 'Belum ada pesan.<br><small>ga ada yg tau akun ini</small>' : 'Belum ada pesan'}</div>`, footer: xBar(3) });
  const openT = (u) => { const d = th.find(x => x.u === u); if (d) dmThread(X_USERS[d.u].name, xAv(d.u, 'sm'), d.vis, 'xapp', 'x', d.u); };
  el.querySelectorAll('[data-dm]').forEach(r => r.onclick = () => openT(r.dataset.dm));
  wireXBar(el); if (typeof openU === 'string') openT(openU);
}
// satu percakapan DM (X / IG), cuma bisa dibaca
function dmThread(name, avHtml, msgs, cls, pf, u) {
  let lastDay = '';
  const body = msgs.map(([ts, who, text]) => { const t = new Date(ts), d = dayKey(t); const sep = d !== lastDay ? `<div class="dmday">${t.getDate()} ${BULAN[t.getMonth()].slice(0, 3)} · ${hm(t)}</div>` : ''; lastDay = d; return `${sep}<div class="dmb ${who === 'me' ? 'me' : ''}">${esc(text)}</div>`; }).join('');
  const pool = (pf && DM_KINO[pf] && DM_KINO[pf][u]) || [];
  const el = win({ cls: cls + ' dmwin', title: `<span style="display:flex;align-items:center;gap:8px;justify-content:center">${avHtml}${esc(name)}</span>`, back: '', sub: true, body: `<div class="dmlist">${body}</div>`, footer: pool.length ? typeBar('Ketuk buat bales') : '<div class="dmfoot">Kino lagi gak mau bales di sini</div>' });
  const b = el.querySelector('.body'); setTimeout(() => b.scrollTop = b.scrollHeight, 50);
  if (!pool.length) return;
  const sk = pf === 'x' ? 'xdm' : 'igdm', used = () => store.get('dmUsed', {})[pf + ':' + u] || 0;
  const next = () => (EPI || ((u === 'kris' || u === 'kris.chandra') && S.fightDone)) ? null : pool[used()] || null;
  wireTypeBar(el, 'Ketuk buat bales', next, (l) => {
    const add = (who, text) => { const a = store.get(sk, {}); (a[u] = a[u] || []).push([tsLocal(now()), who, text]); store.set(sk, a); };
    const du = store.get('dmUsed', {}); du[pf + ':' + u] = used() + 1; store.set('dmUsed', du);
    const show = (who, text) => { add(who, text); if (!el.isConnected) return; el.querySelector('.dmlist').insertAdjacentHTML('beforeend', `<div class="dmb ${who === 'me' ? 'me' : ''}">${esc(text)}</div>`); b.scrollTo({ top: b.scrollHeight, behavior: 'smooth' }); };
    show('me', l[0]); (l[1] || []).forEach((r, i) => setTimeout(() => show(u, r), 2500 + i * 1500));
  });
}
// IG: aktivitas (komen & like di postingan Kino) + DM
function igActivity() {
  const items = [];
  INSTA.filter(p => p.user === 'kinoo.lee').forEach(p => {
    const t0 = new Date(p.ts).getTime();
    igComs(p).forEach(([u, t], i) => { if (u !== 'kinoo.lee') items.push({ t: t0 + (i + 1) * 9 * 6e4, u, html: `<b>${esc(u)}</b> mengomentari: ${esc(t)}` }); });
    const likers = [t0 < new Date('2026-10-23T00:00').getTime() ? 'kris.chandra' : null, 'suryalix'].filter(Boolean);
    items.push({ t: t0 + 25 * 6e4, u: likers[0], html: `<b>${likers.join(', ')}</b> dan ${Math.max(1, (parseInt(p.likes) || 100) - likers.length)} lainnya menyukai postingan kamu` });
  });
  const vis = items.filter(x => x.t <= now().getTime()).sort((a, b) => b.t - a.t);
  win({ cls: 'insta', title: '<b>Notifikasi</b>', back: '', sub: true, body: vis.length ? vis.map(x => `<div class="igc-row">${igAv(x.u)}<div>${x.html}<small style="display:block;color:#8e8e8e">${ago(new Date(x.t))}</small></div></div>`).join('') : '<div class="xempty">Belum ada aktivitas</div>' });
}
// bales story: pesan Kino + balesan temen masuk DM IG (kesimpen)
function storyReply(u, s, box) {
  if (u === 'kinoo.lee') return;
  const done = store.get('storyRep', {}), k = u + s.ts, all = store.get('igdm', {}), mine = (all[u] || []).filter(m => m[1] === 'me').length;
  const sp = KINO_POST_LINES['st:' + u + '@' + s.ts], pool = IG_STORY_REPLY[u] || [];
  const line = (u === 'kris.chandra' && S.fightDone) || EPI || kinoMute() ? null : sp ? sp[0] : s.ts >= WEEK0 ? null : pool[mine];
  if (done[k]) { box.textContent = 'Udah dibales'; return; }
  if (!line) { box.textContent = 'Kino lagi gak mau bales'; return; }
  done[k] = 1; store.set('storyRep', done);
  const add = (who, text) => { const a = store.get('igdm', {}); (a[u] = a[u] || []).push([tsLocal(now()), who, text]); store.set('igdm', a); };
  add('me', '↪ membalas story: ' + line[0]); box.textContent = 'Terkirim ✓';
  line[1].forEach((r, i) => setTimeout(() => { add(u, r); toast({ icon: ICONS.insta, title: u, body: r, ms: 2600 }); }, 3500 + i * 1800));
}
function igDMs(openU) {
  const extra = store.get('igdm', {});
  const base = IG_DMS.map(d => ({ u: d.u, msgs: [...d.msgs, ...(extra[d.u] || [])] }));
  Object.keys(extra).forEach(u => { if (!base.some(d => d.u === u)) base.push({ u, msgs: extra[u] }); });
  base.forEach(d => d.msgs.sort((a, b) => a[0] < b[0] ? -1 : 1));
  const th = base.map(d => ({ ...d, vis: d.msgs.filter(m => visible(new Date(m[0]))) })).filter(d => d.vis.length).sort((a, b) => new Date(b.vis[b.vis.length - 1][0]) - new Date(a.vis[a.vis.length - 1][0]));
  const el = win({ cls: 'insta', title: '<b>kinoo.lee</b>', back: '', sub: true, body: `<div style="padding:8px 14px;font-weight:600">Pesan</div>${th.map(d => { const L = d.vis[d.vis.length - 1]; return `<div class="igc-row" data-dm="${d.u}" style="cursor:pointer;align-items:center">${igAv(d.u)}<div><b>${esc(d.u)}</b><small style="display:block;color:#8e8e8e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${L[1] === 'me' ? 'Kamu: ' : ''}${esc(L[2])} · ${ago(new Date(L[0]))}</small></div></div>`; }).join('') || '<div class="xempty">Belum ada pesan</div>'}` });
  const openT = (u) => { const d = th.find(x => x.u === u); if (d) dmThread(d.u, igAv(d.u), d.vis, 'insta', 'ig', d.u); };
  el.querySelectorAll('[data-dm]').forEach(r => r.onclick = () => openT(r.dataset.dm));
  if (typeof openU === 'string') openT(openU);
}
function xProfile(u) {
  if (u === 'kris') clue('kris-x'); if (u === 'alt') clue('alt');
  const U = X_USERS[u]; if (!U) return;
  const posts = xVis().filter(p => p[1] === u);
  const likes = u === 'kris' ? X_KRIS_LIKES.filter(([, t]) => visible(new Date(t))).sort((a, b) => new Date(b[1]) - new Date(a[1])).map(([id]) => xPost(id)).filter(p => p && visible(new Date(p[2]))) : null;
  const el = win({ cls: 'xapp xprof', title: '', back: '', sub: true, body: `<div class="xban"></div><div class="xpav">${xAv(u)}</div>
    <div class="xpinfo"><b>${esc(U.name)}${U.locked ? ' 🔒' : ''}</b><span>@${esc(U.handle)}</span><p>${esc(U.bio || '')}</p><div class="xfol"><b>${U.following}</b> Mengikuti &nbsp; <b>${U.followers}</b> Pengikut</div></div>
    <div class="xtabs"><span class="on" data-t="p">Postingan</span><span data-t="l">Suka</span></div><div class="xlist"></div><div style="height:70px"></div>`, footer: xBar() });
  const list = el.querySelector('.xlist');
  const show = (t) => {
    el.querySelectorAll('.xtabs span').forEach(s => s.classList.toggle('on', s.dataset.t === t));
    if (t === 'p') list.innerHTML = posts.length ? posts.map(p => xCard(p)).join('') : '<div class="xempty">Belum ada postingan</div>';
    else list.innerHTML = likes ? (likes.length ? likes.map(p => xCard(p)).join('') : '<div class="xempty">Belum ada suka</div>') : '<div class="xempty">Suka akun ini disembunyikan</div>';
    wireX(list);
  };
  el.querySelectorAll('.xtabs span').forEach(s => s.onclick = () => show(s.dataset.t)); show('p'); wireXBar(el);
}

// ---------- Memo Suara ----------
// ---------- Mail ----------
S.mailRead = store.get('mailRead', {});
const mailVis = () => MAILS.filter(m => visible(new Date(m.ts)) && (!m.epi || epiIs(m.epi))).sort((a, b) => new Date(b.ts) - new Date(a.ts));
const mailIsRead = (m) => m.ts < '2026-10-20' || S.mailRead[m.ts + m.subj];
const mailUnread = () => mailVis().filter(m => !mailIsRead(m)).length;
const mailFrom = (m) => m.from === 'Kris' ? krisName() : m.from;
const mailAv = (m) => m.from === 'Kris' ? av('Kris', 'sm') : m.av && /\.(jpg|png)$/.test(m.av[0]) ? `<div class="av sm"><img src="${m.av[0]}" alt=""></div>` : `<div class="av sm mav" style="background:${m.av ? m.av[1] : '#8e8e93'}">${esc(m.av ? m.av[0] : mailFrom(m)[0])}</div>`;
const mailWhen = (d) => relDay(d) === hm(d) ? hm(d) : `${d.getDate()}/${d.getMonth() + 1}/${String(d.getFullYear()).slice(2)}`;
function mailRows() {
  return mailVis().map((m, i) => { const d = new Date(m.ts), un = !mailIsRead(m); return `<button class="mrow2${un ? ' un' : ''}" data-i="${i}"><i class="mdot"></i>${mailAv(m)}<div class="mtx"><div class="m1"><b>${esc(mailFrom(m))}</b><span>${mailWhen(d)} ›</span></div><div class="m2">${m.tag ? `<em>${esc(m.tag)}</em>` : ''}${esc(m.subj)}</div><div class="m3">${esc(m.body.replace(/\n+/g, ' '))}</div></div></button>`; }).join('');
}
function appMail() {
  const el = win({ cls: 'mail', back: 'Kotak Surat', act: '<span style="color:#007aff;font-size:17px">Edit</span>', big: 'Kotak Masuk', body: `<div class="msearch"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>Cari</div><div class="mcats"><span class="on">👤 Utama</span><span>🛒 Transaksi</span><span>💬 Update</span><span>📣 Promosi</span></div><div class="mlist2">${mailRows()}</div>`,
    footer: `<div class="mfoot"><span></span><small>Diperbarui Baru Saja</small><svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg></div>` });
  const wire = () => el.querySelectorAll('.mrow2').forEach(r => r.onclick = () => { const m = mailVis()[+r.dataset.i]; S.mailRead[m.ts + m.subj] = 1; store.set('mailRead', S.mailRead); r.classList.remove('un'); refreshHome(); openMail(m); });
  el._mailRefresh = () => { morph(el.querySelector('.mlist2'), mailRows()); wire(); };
  wire();
}
function openMail(m) {
  if (/#1842/.test(m.subj) && /merged/.test(m.subj)) clue('github-1842');
  const d = new Date(m.ts);
  win({ cls: 'mail mread', sub: true, back: 'Kotak Masuk', act: '<span class="mnav">⌃ ⌄</span>', body: `<div class="mhead">${mailAv(m)}<div><b>${esc(mailFrom(m))}</b><small>Ke: Kino · ${d.getDate()} ${BULAN[d.getMonth()]} ${d.getFullYear()} ${hm(d)}</small><small class="maddr">${esc(m.addr)}</small></div></div><h3 class="msubj">${esc(m.subj)}</h3><div class="mbody">${esc(m.body)}</div>`,
    footer: `<div class="mfoot mact"><svg viewBox="0 0 24 24"><path d="M5 7h14l-1 13H6zM9 7V4h6v3"/></svg><svg viewBox="0 0 24 24"><path d="M4 6h16v12H4zM4 6l8 7 8-7"/></svg><svg viewBox="0 0 24 24"><path d="M10 8L5 12l5 4M5 12h9a5 5 0 0 1 5 5"/></svg><svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg></div>` });
}
function appMemo() {
  const list = MEMOS.filter(m => visible(new Date(m.ts))).sort((a, b) => new Date(b.ts) - new Date(a.ts));
  const el = win({ cls: 'notepage memo', big: 'Semua Rekaman', back: '', body: `<div class="mlist">${list.map((m, i) => { const d = new Date(m.ts); return `<div class="mrow" data-i="${i}" style="display:none"><div class="mt">${esc(m.title)}</div><div class="ms"><span>${relDay(d) === hm(d) ? hm(d) : `${d.getDate()} ${BULAN[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`}</span><span class="md">--:--</span></div><div class="mplay"><div class="mbar"><i></i></div><div class="mbtns"><button class="mp">▶</button></div></div></div>`; }).join('')}</div><div class="mempty">Belum ada rekaman</div>` });
  el.querySelector('.back').innerHTML = '<span>Edit</span>';
  let cur = null;
  el.querySelectorAll('.mrow').forEach(r => {
    const m = list[+r.dataset.i]; const a = new Audio(m.file);
    a.addEventListener('loadedmetadata', () => { r.style.display = ''; r.querySelector('.md').textContent = `${Math.floor(a.duration / 60)}:${pad(Math.round(a.duration % 60))}`; el.querySelector('.mempty').style.display = 'none'; });
    a.addEventListener('timeupdate', () => r.querySelector('.mbar i').style.width = (a.currentTime / a.duration * 100) + '%');
    a.addEventListener('ended', () => { r.querySelector('.mp').textContent = '▶'; });
    r.onclick = (e) => { el.querySelectorAll('.mrow').forEach(x => x.classList.toggle('open', x === r)); };
    r.querySelector('.mp').onclick = (e) => { e.stopPropagation(); if (cur && cur !== a) { cur.pause(); el.querySelectorAll('.mp').forEach(b => b.textContent = '▶'); } cur = a; if (a.paused) { a.play(); e.target.textContent = '❚❚'; } else { a.pause(); e.target.textContent = '▶'; } };
    a.load();
  });
  const obs = new MutationObserver(() => { if (!el.isConnected) { cur && cur.pause(); obs.disconnect(); } }); obs.observe(layersEl, { childList: true });
}

// ---------- Kamera ----------
const SELFIE_VIDS = ['vid/kino-casual-1.mp4', 'vid/kino-selfie-2.mp4', 'vid/kino-close.mp4', 'vid/kino-casual-2.mp4'];
S.shots = [];
function openCamera() {
  const today = CAMERA_BY_DAY[dayKey()] || { src: SELFIE_VIDS[0], start: 0 };
  let vi = -1;
  const lastThumb = () => S.shots[0] || [...PHOTOS].filter(p => visible(new Date(p.ts)) && !photoGone(p) && (!p.epi || (EPI && epiIs(p.epi)))).sort((a, b) => new Date(b.ts) - new Date(a.ts))[0]?.img;
  const el = h(`<div class="cam" data-nostatus="1">
    <div class="cam-top"><svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg><span class="cam-live">⌃</span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div>
    <div class="cam-view"><video playsinline muted autoplay loop></video><div class="cam-flash"></div><div class="cam-zoom"><span>.5</span><span class="on">1×</span><span>2</span></div></div>
    <div class="cam-modes"><span>SINEMATIK</span><span>VIDEO</span><span class="on">FOTO</span><span>POTRET</span><span>PANO</span></div>
    <div class="cam-bot"><div class="cam-thumb">${im(lastThumb())}</div><button class="cam-shut"><i></i></button><button class="cam-flip"><svg viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><path d="M9 13a3 3 0 0 1 5.2-2M15 12.5a3 3 0 0 1-5.2 2"/><path d="M14 9.5l.4 1.6-1.6.4M10 16l-.4-1.6 1.6-.4"/></svg></button></div>
  </div>`);
  const v = el.querySelector('video');
  const load = () => { const cur = vi < 0 ? today : { src: SELFIE_VIDS[vi], start: 0 }; v.src = cur.src + (cur.start ? `#t=${cur.start}` : ''); v.onended = () => { v.currentTime = cur.start || 0; v.play().catch(() => {}); }; v.play().catch(() => {}); };
  el.querySelector('.cam-flip').onclick = () => { vi = (vi + 1) % SELFIE_VIDS.length; if (SELFIE_VIDS[vi] === today.src && vi >= 0) vi = (vi + 1) % SELFIE_VIDS.length; v.style.opacity = 0; setTimeout(() => { load(); v.style.opacity = 1; }, 180); };
  el.querySelector('.cam-shut').onclick = () => {
    const f = el.querySelector('.cam-flash'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
    tone([1800], 0, .03, .05, 'square'); tone([1200], .05, .04, .04, 'square');
    try {
      const c = document.createElement('canvas'); c.width = v.videoWidth || 720; c.height = v.videoHeight || 1280;
      const x = c.getContext('2d'); x.translate(c.width, 0); x.scale(-1, 1); x.drawImage(v, 0, 0, c.width, c.height);
      const url = c.toDataURL('image/jpeg', .85); S.shots.unshift(url);
      PHOTOS.push({ img: url, ts: now().toISOString().slice(0, 19), place: 'Apart' });
      el.querySelector('.cam-thumb').innerHTML = im(url);
    } catch (e) {}
  };
  el.querySelector('.cam-thumb').onclick = () => { if (S.unlocked) openApp('photos'); };
  push(el); load();
}

// ---------- KakaoTalk ----------
const IC = {
  search: '<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L20 20"/></svg>',
  newchat: '<svg viewBox="0 0 24 24"><path d="M12 4C7 4 3 7.2 3 11c0 2.4 1.6 4.5 4 5.8L6.3 20l3.8-2.3c.6.1 1.2.2 1.9.2 5 0 9-3.1 9-7s-4-6.9-9-6.9z"/><path d="M12 8v6M9 11h6"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
};
function kakaoRows() {
  const order = [...CHATS].filter(c => lastMsg(c)).sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || lastMsg(b).ts - lastMsg(a).ts);
  const rows = order.map(c => {
    const u = unread(c), m = lastMsg(c);
    return `<button class="row" data-c="${c.id}">${c.group ? GROUP_AV : av(c.person)}<div class="rt"><div class="r1"><div>${esc(c.name)}${c.group ? ` <small>${c.members}</small>` : ''}${c.muted ? ' <small style="opacity:.6">🔕</small>' : ''}</div><span>${relDay(m.ts)}</span></div><div class="r2">${esc(c.group && m.who !== 'me' ? preview(m) : preview(m))}</div></div>${u ? `<span class="unr">${u > 99 ? '99+' : u}</span>` : ''}</button>`;
  }).join('');
  return rows;
}
function wireKakao(el) { el.querySelectorAll('[data-c]').forEach(b => b.onclick = () => openChat(b.dataset.c)); }
function appKakao(open) {
  const rows = kakaoRows();
  const el = win({ cls: 'kakao', title: 'Obrolan', act: IC.search + IC.newchat + IC.gear, body: rows,
    footer: `<div class="kbar">${[['Teman', '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>'], ['Obrolan', '<path d="M12 4C7 4 3 7.2 3 11c0 2.4 1.6 4.5 4 5.8L6.3 20l3.8-2.3c.6.1 1.2.2 1.9.2 5 0 9-3.1 9-7s-4-6.9-9-6.9z"/>', 1], ['OpenChat', '<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10.5" r=".8"/><circle cx="15" cy="10.5" r=".8"/><path d="M9 14.5c1.6 1.4 4.4 1.4 6 0"/>'], ['Belanja', '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'], ['Lainnya', '<circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>']].map(([n, p, on]) => `<div class="${on ? 'on' : ''}"><svg viewBox="0 0 24 24">${p}</svg>${n}</div>`).join('')}</div>` });
  el.querySelector('.back').remove();
  el.querySelectorAll('[data-c]').forEach(b => b.onclick = () => openChat(b.dataset.c));
  if (open) openChat(open);
}
function chatParts(c) {
  const items = visItems(c); const parts = [];
  const nowT = now(), krisTimes = c.id === 'kris' ? items.filter(x => !x.date && x.who === 'them').map(x => x.ts.getTime()) : null;
  const unreadByKris = (it) => { if (!krisTimes || it.who !== 'me' || (it.o && it.o.call)) return false; const k = it.ts.toISOString ? `${dayKey(it.ts)}T${hm(it.ts).replace('.', ':')}` : ''; const ex = typeof KRIS_READ !== 'undefined' && KRIS_READ[k]; const rt = ex ? new Date(ex).getTime() : krisTimes.find(t => t >= it.ts.getTime()); return !rt || rt > nowT.getTime(); };
  items.forEach((it, i) => {
    let html = it === c._unreadFrom ? '<div class="unread-div"><span>Belum dibaca</span></div>' : ''; // batas pesan terakhir dibaca
    if (it.date) { parts.push(`<div class="kdate"><span>${HARI[it.date.getDay()]}, ${it.date.getDate()} ${BULAN[it.date.getMonth()]} ${it.date.getFullYear()} ›</span></div>`); return; }
    const prev = items[i - 1], next = items[i + 1];
    const from = it.who === 'me' ? 'me' : it.who === 'them' ? c.person : it.who;
    const prevFrom = prev && !prev.date ? (prev.who === 'me' ? 'me' : prev.who === 'them' ? c.person : prev.who) : null;
    const nextFrom = next && !next.date ? (next.who === 'me' ? 'me' : next.who === 'them' ? c.person : next.who) : null;
    const head = prevFrom !== from || hm(prev.ts) !== hm(it.ts) && false || prevFrom !== from;
    const showTime = nextFrom !== from || hm(next.ts) !== hm(it.ts);
    const o = it.o;
    const bub = o.img && sharedGone(o.img) ? `<div class="bub photo broken"><span>⚠️</span>Foto tidak tersedia</div>`
      : o.img ? `<div class="bub photo" data-img="${o.img}" data-ts="${it.ts.toISOString()}">${im(o.img)}</div>`
      : (o.deleted || (o.retract && retractGone(it))) ? `<div class="bub del"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M6 6l12 12"/></svg>Pesan ini telah dihapus.</div>`
      : o.call ? `<div class="bub callb"><i>${SVG_PHONE}</i>${esc(o.call)}</div>`
      : `<div class="bub">${esc(it.text)}</div>`;
    const tm = showTime ? `<div class="tm">${hm(it.ts)}</div>` : '';
    const one = unreadByKris(it) ? '<b class="rd1">1</b>' : ''; // kakao: "1" = belum dibaca lawan bicara
    if (from === 'me') html += `<div class="km me${head ? ' head' : ''}" data-t="${it.ts.getTime()}"><div class="col"><div class="line">${bub}${one || tm ? `<div class="tm">${one}${showTime ? hm(it.ts) : ''}</div>` : ''}</div></div></div>`;
    else html += `<div class="km them${head ? ' head' : ''}" data-t="${it.ts.getTime()}">${head ? av(from, 'sm') : '<div class="spacer"></div>'}<div class="col">${head ? `<div class="who">${esc(dispName(from))}</div>` : ''}<div class="line">${bub}${tm}</div></div></div>`;
    parts.push(html);
  });
  const typing = c.items.find(it => it.typed && !visible(it.ts) && it.ts - now() < 6000) || soonTyping(c) || (c.id === 'kris' && ghostOn() ? { who: 'them' } : null);
  let typingHtml = '';
  if (typing) { const who = typing.who === 'them' ? c.person : typing.who; typingHtml = `<div class="km them head typing-row">${av(who, 'sm')}<div class="col"><div class="who">${esc(dispName(who))}</div><div class="bub typing"><i></i><i></i><i></i></div></div></div>`; }
  return { parts, typingHtml };
}
const chatHTML = (c) => { const { parts, typingHtml } = chatParts(c); return parts.join('') + typingHtml; };
// pesan cerita dari lawan bicara yg mau masuk ≤ 20 detik lagi → bubble "lagi ngetik" (biar pemain tau ada yg dateng, bukan error)
const soonTyping = (c) => { if (c.channel) return null; const nx = c.items.find(it => !visible(it.ts) && !hiddenByGate(c, it)); return nx && nx.who !== 'me' && !(nx.o && (nx.o.call || nx.o.deleted)) && nx.ts - now() < 20000 ? nx : null; };
const chatSig = (c) => msgsOnly(c).length + ':' + storyBusy(c) + ':' + (c.id === 'kris' && ghostOn()) + ':' + !!c.items.find(it => it.typed && !visible(it.ts) && it.ts - now() < 6000) + ':' + !!soonTyping(c) + ':' + !!pendingReply(c);
// update chat tanpa gambar ulang semuanya: cuma pesan baru yg ditambah
function patchChat(body, c) {
  const { parts, typingHtml } = chatParts(c); const old = body._parts || [];
  const nearBottom = body.scrollHeight - body.scrollTop - body.clientHeight < 80;
  let newTyping = false; const keepTyping = [...body.querySelectorAll('.typing-row')]; keepTyping.forEach(n => n.remove());
  const same = old.length && parts.length >= old.length && old.slice(0, -1).every((p, i) => p === parts[i]);
  // selalu lewat morph: satu "part" bisa isinya 2 elemen (garis "Belum dibaca" + pesan), jadi ganti per posisi dulu salah sasaran
  // (pesan Kino sebelumnya ilang, balesan dobel). pesan yg baru masuk dikasih animasi "fresh"
  const before = new Set(body.children);
  morph(body, parts.join(''));
  if (same) [...body.children].forEach(n => { if (!before.has(n) && n.classList.contains('km')) { n.classList.add('fresh'); setTimeout(() => n.classList.remove('fresh'), 700); } }); // dilepas lagi biar morph berikutnya ga nganggep beda
  if (typingHtml) { const k = keepTyping.find(n => n._html === typingHtml); if (k) body.appendChild(k); else { body.insertAdjacentHTML('beforeend', typingHtml); body.lastElementChild._html = typingHtml; newTyping = true; } }
  body._parts = parts;
  return { appended: !same || parts.length > old.length || newTyping, nearBottom, first: !old.length };
}
function renderChat(el, c) {
  const pr = patchChat(el.querySelector('.body'), c);
  const r = pendingReply(c);
  const qr = el.querySelector('.qr');
  const qrHtml = r ? r.opts.map((o, i) => `<button data-o="${i}">${esc(o.me[0])}</button>`).join('') : '';
  if (qr._html !== qrHtml) { qr.innerHTML = qrHtml; qr._html = qrHtml; }
  qr.style.display = r ? '' : 'none';
  if (!el.dataset.typing) el.querySelector('.kinput .f').placeholder = c.channel ? 'Channel ini gak bisa dibales' : r ? 'Pilih balasan di atas, atau ketuk di sini' : EPI ? 'Kino lagi gak mau ngetik apa2' : (nextScriptedMe(c) || pendingFollow(c) || pendingRandChat(c)) ? 'Ketuk buat bales' : storyBusy(c) ? 'tunggu bentar…' : (!owesAnswer(c) && nextLine(c)) ? 'Ketuk buat bales' : laterHint(c) || 'Kino lagi gak mau ngetik apa2';
  qr.querySelectorAll('[data-o]').forEach(b => b.onclick = () => typeOut(el, r.opts[+b.dataset.o].me[0], () => { answer(r, +b.dataset.o); renderChat(el, c); markRead(c); }));
  el.dataset.sig = chatSig(c);
  markRead(c); wireChat(el, pr);
  // pesan yg ditarik: abis keliatan 3.5 detik, jadi "dihapus"
  const fresh = msgsOnly(c).filter(m => m.o.retract && !retractGone(m));
  // langsung dicatet udah keliatan (keluar chat sebelum 3.5 detik pun ga keulang), teksnya cuma nongol di bukaan ini
  if (fresh.length && !el.dataset.retracting) { el.dataset.retracting = '1'; fresh.forEach(m => { S.glimpsed[m.ts.getTime()] = 1; RETRACT_NOW.add(m.ts.getTime()); }); store.set('glimpsed', S.glimpsed); if (c.id === 'kris') retractAlt(fresh);
    setTimeout(() => { fresh.forEach(m => RETRACT_NOW.delete(m.ts.getTime())); delete el.dataset.retracting; if (el.isConnected) renderChat(el, c); }, 3500); }
}
S.glimpsed = store.get('glimpsed', {});
// Kino sempet baca pesan Kris yg ditarik → beberapa menit kemudian dia ngomel di akun priv
function retractAlt(list) {
  const done = store.get('retractAlt', []); let t = now().getTime() + 90000;
  list.forEach(m => { const cap = RETRACT_ALT[m.text]; if (!cap || done.includes(m.text)) return; done.push(m.text);
    const p = { kind: 'x', acct: 'alt', img: '', ts: tsLocal(new Date(t)), cap, id: 'ra' + t, coms: [], reps: [], likes: 0 }; S.myPosts.push(p); applyMyPost(p); t += 120000; });
  store.set('retractAlt', done); store.set('myPosts', S.myPosts);
}
const RETRACT_NOW = new Set(); // pesan ditarik yg lagi nongol sebentar di chat yg kebuka
// pesan ditarik cuma bisa kebaca sebelum Kino ngirim pesan lagi di chat itu. udah pernah keliatan / Kino udah bales = langsung "dihapus"
const retractGone = (m) => { const t = m.ts.getTime(); if (RETRACT_NOW.has(t)) return false; if (S.glimpsed && S.glimpsed[t]) return true;
  const c = CHATS.find(x => x.items.includes(m)); return !!c && c.items.some(it => it.who === 'me' && it.ts > m.ts && visible(it.ts)); };
S.ghostUntil = 0;
// Kino udah nanya "ini kamu?" (bisa dikirim duluan) tapi balesan Kris baru jadwal 14.06:20: Kris ngetik, berhenti, ngetik lagi
const krisAsked = () => now() < new Date('2026-10-24T14:06:20') && msgsOnly(CHATS.find(c => c.id === 'kris')).slice(-1).some(m => m.who === 'me' && m.text === 'ini kamu?');
const ghostOn = () => !S.fightDone && Date.now() < S.ghostUntil && ((now() >= new Date(GHOST_TYPING[0]) && now() < new Date(GHOST_TYPING[1])) || krisAsked());
// obrolan masih nyambung tapi nanti (bukan sekarang): jangan bilang "ga mau ngetik", kasih tau ini belum kelar
const laterHint = (c) => { if (c.id === 'kris') return null; // chat Kris jangan ngasih kode bakal dibales apa ngga
  const nx = c.items.find(it => !visible(it.ts) && !hiddenByGate(c, it)), last = lastMsg(c); if (!nx || !last || nx.ts - now() > 3 * 3600e3) return null;
  if (nx.who === 'me' && last.who !== 'me') return 'Kino bales nanti'; // Kino sengaja bales telat
  if (nx.who !== 'me' && last.who === 'me') return 'belum dibales'; // nungguin dibales
  return null; };
function openChat(id) {
  RETRACT_NOW.clear(); // bukaan baru: pesan ditarik yg udah sempet keliatan langsung "dihapus"
  if (id === 'nonton' && now() >= new Date('2026-10-23T21:10')) clue('nontonflix'); if (id === 'bagas' && now() >= new Date('2026-10-23T13:11')) clue('bagas-cuti');
  const c = CHATS.find(x => x.id === id);
  const el = win({ cls: 'kchat', title: esc(c.name) + (c.group ? ` <span style="color:#666;font-weight:400">${c.members}</span>` : ''), back: '', sub: true, act: IC.search + IC.menu, body: chatHTML(c),
    footer: `<div class="qr" style="display:none"></div><div class="kinput"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg><div class="f" role="button" data-ph="Pesan"></div><button class="snd">${'<svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg>'}</button></div>` });
  if (EPI && id === 'kris' && store.get('epiDone', null) === EPI.key) { el.querySelector('.kinput').insertAdjacentHTML('beforebegin', '<button class="epire">📖 baca epilog lagi</button>'); el.querySelector('.epire').onclick = () => ending(EPI.key, true); }
  if (EPI && id === 'kris' && !epiFinal() && store.get('epiDone', null) !== EPI.key) el.dataset.epinarr = '1'; // ending tanpa balesan terakhir: abis chatnya dibaca & ditutup → epilog
  const inp = el.querySelector('.kinput .f');
  // bukan <input> beneran: biar iPhone ga munculin autofill / keyboard asli
  Object.defineProperty(inp, 'value', { get() { return this.textContent; }, set(v) { this.textContent = v; } });
  Object.defineProperty(inp, 'placeholder', { get() { return this.dataset.ph; }, set(v) { this.dataset.ph = v; } });
  inp.onclick = () => {
    if (c.channel) return;
    const r = pendingReply(c); // 1. ada pilihan balasan → ketik pilihan pertama
    if (r) return typeOut(el, r.opts[0].me[0], () => { answer(r, 0); renderChat(el, c); markRead(c); });
    if (EPI) return; // epilog: cuma chat penutup Kino–Kris yg interaktif
    const nx = nextScriptedMe(c); // 2. Kino emang mau bales (udah ada di naskah) → bales sekarang
    if (nx) return typeOut(el, nx.text || '📷', () => { sendEarly(c, nx); renderChat(el, c); });
    const fu = pendingFollow(c); // 2a. nyambung ke telpon barusan
    if (fu) return typeOut(el, fu[0], () => { const all = store.get('callFollow', {}); delete all[c.id]; store.set('callFollow', all); sendTyped(el, c, [fu[0], fu[1]]); });
    const rc = pendingRandChat(c); // 2b. chat random yg belum dibales
    if (rc) return typeOut(el, rc.reply[0], () => { const st = store.get('rchat', {}); st[rc.id] = 2; store.set('rchat', st); sendTyped(el, c, [rc.reply[0], rc.reply[1]]); });
    if (owesAnswer(c) || storyBusy(c)) return; // 3. ditanya / lagi ada adegan cerita → Kino ga ngetik basa-basi
    const line = nextLine(c); if (!line) return;
    if (line[2] && line[2].call) { if (el.dataset.typing) return; el.dataset.typing = '1'; addMsg(c.id, [['me', '', { call: 'Panggilan dibatalkan' }]], 0); renderChat(el, c); return setTimeout(() => { delete el.dataset.typing; typeOut(el, line[0], () => sendTyped(el, c, line)); }, 1800); } // "angkat" baru masuk akal abis nelpon ga diangkat
    typeOut(el, line[0], () => sendTyped(el, c, line));
  };
  el.dataset.chat = id;
  { const u = unread(c), ms = msgsOnly(c); c._unreadFrom = u >= 2 ? ms[ms.length - u] : null; }
  { const ms = msgsOnly(c), op = S.opened[c.id] ?? -1, n = ms.length - 1 - op; el._bm = op >= 0 && n >= 3 ? { t: ms[op + 1].ts.getTime(), n } : null; } // bookmark pembaca: terakhir dia buka chat ini
  const backN = unreadTotal() - unread(c);
  el.querySelector('.back').insertAdjacentHTML('beforeend', backN ? `<span>${backN}</span>` : '');
  renderChat(el, c);
  if (c.id === 'kris') playDraft(el, c);
}
// draft Kino ke Kris: sekali per jendela waktu, nongol bentar terus dihapus huruf per huruf
function playDraft(el, c) {
  if (EPI || pendingReply(c) || nextScriptedMe(c)) return;
  const t = now(), d = DRAFTS.find(x => t >= new Date(x[0]) && t < new Date(x[1]) && (!x[3] || S.fightDone) && (!x[4] || endKey() === x[4]));
  const seen = store.get('draftsSeen', []); if (!d || seen.includes(d[0])) return;
  seen.push(d[0]); store.set('draftsSeen', seen); clue('draft');
  const inp = el.querySelector('.kinput .f'); el.dataset.typing = '1';
  inp.classList.add('typing-now'); inp.value = '';
  // diketik pelan2, didiemin, baru dihapus (biar kebaca)
  let i = 0; const typ = () => { if (!el.isConnected) return; if (i < d[2].length) { inp.value = d[2].slice(0, ++i); keyClick(false); return setTimeout(typ, 70 + Math.random() * 60); } setTimeout(del, 3200); };
  let held = false; const del = () => {
    if (!el.isConnected) return;
    if (d[5] && !held && inp.value === d[5]) { held = true; return setTimeout(del, 2600); } // sisa "kamu" doang, didiemin, baru ikut dihapus
    if (inp.value.length) { inp.value = inp.value.slice(0, -1); keyClick(false); return setTimeout(del, (d[5] ? 45 : 90) + Math.random() * 60); }
    inp.classList.remove('typing-now'); delete el.dataset.typing;
  };
  setTimeout(typ, 900);
}
function markRead(c) { S.opened[c.id] = msgsOnly(c).length - 1; store.set('opened', S.opened); }
function wireChat(el, pr = { first: true }) {
  el.querySelectorAll('.photo:not(.broken)').forEach(p => p.onclick = () => viewPhoto({ img: p.dataset.img, ts: new Date(p.dataset.ts), place: '' }));
  const body = el.querySelector('.body'); const toBottom = () => body.scrollTo({ top: body.scrollHeight, behavior: pr.first ? 'auto' : 'smooth' });
  if (pr.first) {
    const bm = el._bm && body.querySelector(`.km[data-t="${el._bm.t}"]`); // ada ≥3 pesan baru sejak terakhir dibuka: mulai dari situ + chip ke bawah
    const go = () => { const dv = bm || body.querySelector('.unread-div'); body.scrollTop = dv ? Math.max(0, dv.offsetTop - (bm ? 40 : 12)) : body.scrollHeight; }; go(); setTimeout(go, 60); setTimeout(go, 330);
    if (bm) {
      const chip = h(`<button class="newchip">↓ ${el._bm.n} pesan baru</button>`); el.appendChild(chip);
      chip.onclick = () => { body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' }); chip.remove(); };
      body.addEventListener('scroll', () => { if (chip.isConnected && body.scrollHeight - body.scrollTop - body.clientHeight < 60) chip.remove(); });
      setTimeout(() => { if (body.scrollHeight - body.scrollTop - body.clientHeight < 60) chip.remove(); }, 400); // semua pesan baru udah keliatan: ga usah chip
    }
  }
  else if (pr.appended && pr.nearBottom) setTimeout(toBottom, 20);
}

// ---------- Foto ----------
const photoGone = (p) => p.gone && now() >= new Date(p.gone); // foto Koleksi Bersama yg udah dihapus pemiliknya
function appPhotos() {
  const vis = PHOTOS.map(p => ({ ...p, t: new Date(p.ts) })).filter(p => visible(p.t) && !photoGone(p) && (!p.epi || (EPI && epiIs(p.epi))) && (!p.end || endKey() === p.end) && (!p.noEnd || endKey() !== p.noEnd)).sort((a, b) => b.t - a.t);
  const groups = []; vis.forEach(p => { const k = `${BULAN[p.t.getMonth()]} ${p.t.getFullYear()}`; let g = groups.find(g => g.k === k); if (!g) groups.push(g = { k, items: [] }); g.items.push(p); });
  const mem = EPI ? EPI_MEMORY[EPI.key] : MEMORIES[dayKey()];
  const el = win({ cls: 'photos', body: `<div class="bigtitle">Pustaka</div><div class="cnt">${vis.length} Foto</div>${PHOTOS.filter(p => p.shared && photoGone(p) && visible(new Date(p.ts))).map(p => `<div class="shgone">${esc(p.shared)} menghapus 1 foto dari Koleksi Bersama</div>`).join('')}${mem ? `<div class="memcard"><div class="memimg">${im(mem[1][0])}</div><div class="memt"><small>KENANGAN · HARI INI</small><b>${esc(mem[0])}</b></div><span>▶</span></div>` : ''}${groups.map(g => `<div class="mon">${g.k}</div><div class="pgrid">${g.items.map(p => `<div class="ptile" data-i="${vis.indexOf(p)}">${imT(p.img)}${p.shared ? '<i class="shb">👥</i>' : ''}</div>`).join('')}</div>`).join('')}`,
    act: '<span style="color:#007aff;font-size:17px">Pilih</span>', footer: '<div class="seg"><span>Tahun</span><span>Bulan</span><span class="on">Semua Foto</span></div>' });
  el.querySelector('.back').style.visibility = 'hidden';
  el.querySelectorAll(".ptile").forEach(t => t.onclick = () => viewPhoto(vis[+t.dataset.i]));
  if (mem) el.querySelector('.memcard').onclick = () => memoryShow(mem);
}
function memoryShow([title, pics]) {
  const song = SONGS.find(x => /Through the Night/i.test(x[0])) || SONGS[0];
  const el = h(`<div class="memshow" data-nostatus="1" data-modal="1"><div class="mstage"></div><div class="mtitle"><small>kenangan</small>${esc(title)}</div><button class="mx">✕</button></div>`);
  const stage = el.querySelector('.mstage'); let i = 0; const au = new Audio(song[2]); au.volume = .6; if (music) music.pause(); au.play().catch(() => {});
  const show = () => { if (!el.isConnected) return; const d = document.createElement('div'); d.className = 'mslide'; d.style.backgroundImage = `url('${pics[i % pics.length]}')`; stage.appendChild(d); setTimeout(() => { [...stage.children].slice(0, -1).forEach(x => x.remove()); }, 1400); i++; if (i <= pics.length) setTimeout(show, 2800); else setTimeout(close, 2600); };
  const close = () => { au.pause(); el.remove(); syncChrome(); };
  el.querySelector('.mx').onclick = close; push(el); show();
}
function viewPhoto(p) {
  if (p.img === 'img/ig/minchan-5.jpg') clue('hari-pertama');
  const t = p.t || p.ts;
  const el = h(`<div class="win pview sub"><div class="nav"><button class="back" style="color:#fff">${BACK}</button><h2>${t ? `${t.getDate()} ${BULAN[t.getMonth()]} ${t.getFullYear()}<small>${p.place ? esc(p.place) + ' · ' : ''}${hm(t)}</small>` : ''}</h2></div><div class="pbig">${/\.mp4$/.test(p.img) ? `<video class="ph-img" src="${p.img}" playsinline autoplay loop controls></video>` : im(p.img)}</div></div>`);
  el.querySelector('.back').onclick = pop;
  if (p.img && !/^data:|\.mp4$/.test(p.img) && S.unlocked) {
    el.insertAdjacentHTML('beforeend', `<div class="pbar"><button class="psend"><svg viewBox="0 0 24 24"><path d="M12 15V3M7 8l5-5 5 5M5 13v7h14v-7"/></svg></button><span>Bagikan</span></div>`);
    el.querySelector('.psend').onclick = () => shareSheet(el, p);
  }
  push(el);
}
// share sheet ala iOS: pilih orang
const sharedImg = (img) => PHOTOS.some(x => x.shared && x.img === img); // foto Koleksi Bersama Kris
const sharedGone = (img) => PHOTOS.some(x => x.shared && x.img === img && photoGone(x)); // udah dihapus Kris: kiriman jadi rusak
function photoKind(img) { return /meong|cats|soonie|doongie|dori|kucing/.test(img) ? 'cat' : /chan|kita|kris|minchan|kafe-pertama|han-river|old-|couple/.test(img) ? 'kris' : /cook|jjigae|bake|food/.test(img) ? 'food' : 'other'; }
const NO_SHARE = ['img/lapor-2.jpg', 'img/story-kris-gemilang.jpg']; // foto bukti (aldrea, story ramen): Kino ga nyebarin, cuma diem
function shareSheet(root, p) {
  if (NO_SHARE.includes(p.img)) return toast({ icon: ICONS.photos, title: 'Foto', body: 'Kino ga mau ngirim foto ini ke siapa-siapa.', ms: 2800 });
  const people = SHARE_TO.map(id => CHATS.find(c => c.id === id)).filter(Boolean);
  const sh = h(`<div class="xsheet-bg"><div class="xsheet share"><div class="xgrab"></div><div class="shp">${im(p.img)}<div><b>1 Foto Dipilih</b><small>Opsi ›</small></div></div><div class="shppl">${people.map(c => `<button data-c="${c.id}">${c.group ? GROUP_AV : av(c.person)}<span>${esc(c.id === 'kris' ? krisName() : c.group ? c.name : dispName(c.person))}</span><i>${ICONS.kakao}</i></button>`).join('')}</div><div class="shapps"><div data-sh="ig">${ICONS.insta}<span>Instagram</span></div><div data-sh="x">${ICONS.x}<span>X</span></div><div>${ICONS.kakao}<span>KakaoTalk</span></div><div>${ICONS.mail}<span>Mail</span></div></div><button class="shx">Batal</button></div></div>`);
  root.appendChild(sh);
  const close = () => sh.remove();
  sh.onclick = (e) => { if (e.target === sh) close(); }; sh.querySelector('.shx').onclick = close;
  sh.querySelectorAll('[data-c]').forEach(b => b.onclick = () => { close(); b.dataset.c === 'kris' ? sendPhotoToKris(p) : sendPhotoTo(b.dataset.c, p); });
  sh.querySelector('[data-sh="x"]').onclick = () => { close(); shareTo('x', p); };
  sh.querySelector('[data-sh="ig"]').onclick = () => { // pilih story / postingan
    sh.querySelector('.xsheet').innerHTML = `<div class="xgrab"></div><div class="xsh-t">Bagikan ke Instagram</div><div class="xacc" data-k="igstory">${ICONS.insta}<div><b>Story</b><span>ilang dalam 24 jam</span></div></div><div class="xacc" data-k="igpost">${ICONS.insta}<div><b>Postingan</b><span>muncul di profil kinoo.lee</span></div></div><button class="shx">Batal</button>`;
    sh.querySelector('.shx').onclick = close;
    sh.querySelectorAll('[data-k]').forEach(b => b.onclick = () => { close(); shareTo(b.dataset.k, p); });
  };
}
// foto dari galeri dibagikan ke IG (story/post) atau X (akun yg lagi aktif) — caption & reaksi temen dari data
S.myPosts = store.get('myPosts', []);
// foto Itaewon (Koleksi Bersama) yg udah terlanjur diupload ke IG / X utama sebelum dikunci: diapus diem2 (Kino sendiri yg ngapus, semua orang ga boleh tau duluan).
// yg diupload ke akun priv dibiarin, followernya 0
{ const bad = new Set(PHOTOS.filter(x => x.shared).map(x => x.img)), n0 = S.myPosts.length;
  S.myPosts = S.myPosts.filter(m => !(bad.has(m.img) && !(m.kind === 'x' && m.acct === 'alt'))); if (S.myPosts.length !== n0) store.set('myPosts', S.myPosts); }
const tsLocal = (t) => `${dayKey(t)}T${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
function applyMyPost(m) {
  if (m.kind === 'igpost') { INSTA.push({ user: 'kinoo.lee', img: m.img, ts: m.ts, cap: m.cap, likes: String(m.likes) }); if (m.coms.length && typeof IG_COMMENTS !== 'undefined') IG_COMMENTS['kinoo.lee@' + m.ts] = m.coms; }
  else if (m.kind === 'igstory') STORIES.push({ user: 'kinoo.lee', img: m.img, ts: m.ts, txt: m.cap });
  else X_POSTS.push([m.id, m.acct, m.ts, m.cap, m.img, m.reps, m.likes]);
}
S.myPosts.forEach(applyMyPost);
// fase Kino–Kris buat reaksi postingan foto Kris: biasa → aneh (20 Okt sore) → abis berantem → hasil ending
const krisPhase = () => { const t = now(); if (EPI || t >= BDAY) { const e = endKey(); return e === 'maafin' ? 'maafin' : e === 'jeda' ? 'jeda' : e ? 'putus' : 'hurt'; } return t < new Date('2026-10-20T18:52') ? 'normal' : t < new Date(FIGHT_AT) ? 'tense' : 'hurt'; };
function shareTo(kind, p) {
  if (sharedImg(p.img) && !(kind === 'x' && S.xAcct === 'alt')) return toast({ icon: ICONS.photos, title: 'Foto', body: 'Kino ga mau upload foto ini ke mana-mana.', ms: 2800 }); // akun priv boleh: ga ada yg liat
  const acct = kind === 'x' ? S.xAcct : null, pk = kind === 'x' ? (acct === 'alt' ? 'xalt' : 'xmain') : kind;
  if (S.myPosts.some(m => m.kind === kind && m.img === p.img && m.acct === acct)) return toast({ icon: ICONS.photos, title: 'Foto', body: 'foto ini udah pernah dibagikan ke situ', ms: 2500 });
  const ph = photoKind(p.img), kp = ph === 'kris' ? krisPhase() : null, KP = kp && POST_KRIS[kp] || {}; // foto Kris: caption & reaksi temen ngikutin lagi gimana Kino–Kris
  const pool = sharedImg(p.img) ? ['koleksi bersama. bersama siapa, kris'] : (KP.cap && KP.cap[pk]) || SHARE_CAPS[pk][ph] || SHARE_CAPS[pk].other;
  const n = S.myPosts.filter(m => (m.kind === 'x' ? (m.acct === 'alt' ? 'xalt' : 'xmain') : m.kind) === pk && photoKind(m.img) === ph).length;
  const t = now(), seed = S.myPosts.length * 37 + p.img.length * 11;
  const m = { kind, acct, img: p.img, ts: tsLocal(t), cap: pool[n % pool.length], id: 'my' + t.getTime(), coms: [], reps: [],
    likes: kind === 'x' ? (acct === 'alt' ? 0 : 20 + seed % 60) : kind === 'igpost' ? 180 + seed % 320 : 0 };
  if (kind === 'igpost') m.coms = (KP.igpost || SHARE_REACT.igpost[ph] || []).slice(0, 2 + n % 2);
  if (kind === 'x' && acct === 'kino') m.reps = (KP.xmain || SHARE_REACT.xmain[ph] || []).slice();
  S.myPosts.push(m); store.set('myPosts', S.myPosts); applyMyPost(m);
  if (kind === 'igstory') { openApp('insta'); setTimeout(() => openStories('kinoo.lee'), 450); }
  else if (kind === 'igpost') { openApp('insta'); setTimeout(() => openProfile('kinoo.lee'), 350); }
  else openApp('x');
  toast({ icon: kind === 'x' ? ICONS.x : ICONS.insta, title: kind === 'x' ? 'X' : 'Instagram', body: kind === 'igstory' ? 'Story kamu udah dibagikan' : kind === 'igpost' ? 'Postingan kamu udah dibagikan' : `Diposting di @${X_USERS[acct].handle}`, ms: 2400 });
}
function sendPhotoTo(id, p) {
  const key = id + ':' + p.img, sent = store.get('sentPhotos2', []), c = CHATS.find(x => x.id === id);
  if (sent.includes(key)) return toast({ icon: ICONS.photos, title: 'Foto', body: `udah pernah dikirim ke ${c.group ? c.name : dispName(c.person)}`, ms: 2500 });
  sent.push(key); store.set('sentPhotos2', sent);
  const t = now(); let kind = photoKind(p.img); if (kind === 'kris' && S.fightDone && t < BDAY) kind = 'kris2';
  c.items.push({ who: 'me', text: '', o: { img: p.img }, ts: new Date(t.getTime()) }); S.extra.push({ chat: id, who: 'me', text: '', t: t.getTime(), img: p.img }); store.set('extra', S.extra);
  const pool = (PHOTO_SHARE[id] || {})[kind] || [];
  if (pool.length) { const n = sent.filter(k => k.startsWith(id + ':')).length - 1; addMsg(id, pool[n % pool.length].map(x => Array.isArray(x) ? x : ['them', x]), 2500 + Math.random() * 2500); }
  if (sharedImg(p.img)) brokenFollowups().forEach(e => pushExtra(e.chat, e.who, e.text, e.t, e.who !== "me")); // paginya: "semalem ngelindur, fotonya ga kebuka"
  sortItems(c); swapTo(() => openApp('kakao', id));
}
function sendPhotoToKris(p) {
  if (sharedImg(p.img)) return toast({ icon: ICONS.photos, title: 'Foto', body: 'Kino ga mau ngirim foto ini ke Kris.', ms: 2800 }); // nunggu Kris yg ngomong duluan
  const sent = store.get('sentPhotos', []); if (sent.includes(p.img)) return toast({ icon: ICONS.photos, title: 'Foto', body: 'udah pernah dikirim ke Kris', ms: 2500 });
  sent.push(p.img); store.set('sentPhotos', sent);
  const t = now(), old = new Date(p.ts || p.t) < new Date('2026-01-01');
  const phase = t >= BDAY ? 'after' : S.fightDone ? 'after' : t >= new Date('2026-10-23T00:00') ? 'afk' : t >= new Date('2026-10-20T18:52') ? 'cold' : 'normal';
  const c = CHATS.find(x => x.id === 'kris');
  c.items.push({ who: 'me', text: '', o: { img: p.img }, ts: new Date(t.getTime()) }); S.extra.push({ chat: 'kris', who: 'me', text: '', t: t.getTime(), img: p.img });
  const rep = PHOTO_REPLY[phase]; store.set('extra', S.extra);
  if (rep) addMsg('kris', (old ? rep.old : rep.now).map(x => ['them', x]), 3000);
  sortItems(c); swapTo(() => openApp('kakao', 'kris'));
}

// ---------- Catatan ----------
const letterNote = () => NOTES.find(n => n.locked);
// to-do: item keliatan kalau udah ditambah; kecentang kalau jam centangnya udah lewat
const todoOk = (done, e) => !!done && (!e || endKey() === e) && visible(new Date(done));
const todoVis = (n) => n.todo.filter(([, add]) => visible(new Date(add))).map(([t, add, done, e]) => ({ t, done: todoOk(done, e) }));
const todoLast = (n) => new Date(Math.max(...n.todo.flatMap(([, a, d, e]) => [a, todoOk(d, e) ? d : null]).filter(x => x && visible(new Date(x))).map(x => +new Date(x))));
function appNotes(open) {
  const vis = NOTES.filter(n => n.epi && !epiIs(n.epi) ? false : n.secret && secretCount() < CLUES.length ? false : n.todo ? todoVis(n).length : n.drafts ? !!lastDraft(n) : n.log ? n.log.some(logVis) : (!n.ts || visible(new Date(n.ts))));
  const lastT = (n) => { if (n.todo) return todoLast(n).getTime(); const dr = n.drafts && lastDraft(n), lg = n.log && n.log.filter(logVis).pop(); return new Date(n.ts || (dr && dr[0]) || (lg && lg[0]) || 0).getTime(); };
  vis.sort((a, b) => lastT(b) - lastT(a)); // kayak Notes asli: yg terbaru di atas
  const nseen = store.get('notesSeen', {}), tn = now().getTime(); const dot = (n) => { const lt = lastT(n); return lt > (nseen[n.id] || 0) && tn - lt < 2 * 864e5 ? '<i class="ndot"></i>' : ''; };
  const rows = vis.map(n => {
    const lastLog = n.log && n.log.filter(logVis).pop(); const dr = n.drafts && lastDraft(n);
    if (n.todo) { const it = todoVis(n), open = it.filter(x => !x.done); return `<button class="row" data-n="${n.id}"><div class="rt"><div class="r1">${dot(n)}<b>${esc(n.title)}</b></div><div class="r2"><span style="color:#3c3c43">${esc(relDay(todoLast(n)))}</span>&nbsp; ${esc(open.length ? open[0].t : 'semua beres')}</div></div></button>`; }
    const date = n.ts ? relDay(new Date(n.ts)) : dr ? relDay(new Date(dr[0])) : lastLog ? relDay(new Date(lastLog[0])) : n.date;
    const sub = dr ? (dr[1] ? dr[1].split('\n')[0] : 'Tidak ada teks tambahan') : n.locked ? (S.letterRead ? 'kino,' : 'Terkunci') : lastLog ? lastLog[1].split('\n')[0] : n.body.split('\n')[0];
    return `<button class="row" data-n="${n.id}"><div class="rt"><div class="r1">${dot(n)}<b>${n.locked ? '🔒 ' : ''}${esc(n.title)}</b></div><div class="r2"><span style="color:#3c3c43">${esc(date)}</span>&nbsp; ${esc(sub)}</div>${n.shared ? '<div class="r2" style="font-size:13px">👤 Dibagikan oleh Kris</div>' : ''}</div></button>`;
  }).join('');
  const el = win({ cls: 'notes', back: 'Folder', big: 'Catatan', body: `<div class="list">${rows}</div><div style="text-align:center;color:#8e8e93;font-size:12px">${vis.length} Catatan</div>` });
  el.querySelectorAll('[data-n]').forEach(b => b.onclick = () => { const n = NOTES.find(x => x.id === b.dataset.n), ns = store.get('notesSeen', {}); ns[b.dataset.n] = Math.max(now().getTime(), n ? lastT(n) : 0); store.set('notesSeen', ns); const d = b.querySelector('.ndot'); if (d) d.remove(); openNote(b.dataset.n); });
  if (open) openNote(open);
}
const lastDraft = (n) => n.drafts.filter(([t]) => visible(new Date(t))).pop();
const logVis = ([t, , f]) => visible(new Date(t)) && (f !== 'fight' || S.fightDone);
const logBody = (n) => n.log.filter(logVis).reverse().map(([t, x]) => { const d = new Date(t); return `${HARI[d.getDay()].toLowerCase()}, ${d.getDate()}/${d.getMonth() + 1}\n${x}`; }).join('\n\n—\n\n');
function openNote(id) {
  if (id === 'todo' && now() >= new Date('2026-10-20T10:05')) clue('todo-0042'); if (id === 'draft') { clue('notes-kris'); if (lateOk()) clue('draft'); } if (id === 'secret') store.set('secretRead', true);
  { const ns = store.get('notesSeen', {}); ns[id] = Math.max(ns[id] || 0, now().getTime()); store.set('notesSeen', ns); }
  const n = NOTES.find(x => x.id === id);
  if (n.todo) { const it = todoVis(n), d = todoLast(n); return win({ cls: 'notes notepage', back: 'Catatan', sub: true, body: `<div class="notebody"><div class="nd">${esc(relDay(d))}${relDay(d).includes('.') ? '' : ' ' + hm(d)}</div><h3>${esc(n.title)}</h3><div class="todo">${[...it.filter(x => !x.done), ...it.filter(x => x.done)].map(x => `<div class="td${x.done ? ' on' : ''}"><i></i><span>${esc(x.t)}</span></div>`).join('')}</div></div>` }); }
  if (n.drafts) { const d = lastDraft(n); return win({ cls: 'notes notepage', back: 'Catatan', sub: true, body: `<div class="notebody"><div class="nd">terakhir diedit ${relDay(new Date(d[0]))}${relDay(new Date(d[0])).includes('.') ? '' : ' ' + hm(new Date(d[0]))}</div><h3>${esc(n.title)}</h3>${n.drafts.filter(([t]) => visible(new Date(t))).map(([t, x], i, all) => `<div class="ndr"><small>${esc(HARI[new Date(t).getDay()].toLowerCase())}</small>${esc(x || '')}${i === all.length - 1 ? '<span class="caret"></span>' : ''}</div>`).join('')}</div>` }); } // semua draft numpuk, yg lama ga ilang
  if (n.log) return win({ cls: 'notes notepage', back: 'Catatan', sub: true, body: `<div class="notebody"><div class="nd">${relDay(new Date(n.log.filter(logVis).pop()[0]))}</div><h3>${esc(n.title)}</h3>${esc(logBody(n))}</div>` });
  if (n.locked) return S.letterRead ? showLetter() : lockedNote();
  win({ cls: 'notes notepage', back: 'Catatan', sub: true, body: `<div class="notebody"><div class="nd">${esc(n.date || (n.ts ? relDay(new Date(n.ts)) + (relDay(new Date(n.ts)).includes('.') ? '' : ' ' + hm(new Date(n.ts))) : ''))}</div><h3>${esc(n.title)}</h3>${esc(n.body)}</div>` });
}
function lockedNote() {
  let code = '';
  const el = win({ cls: 'notes', back: 'Catatan', sub: true, body: `<div class="lockbox">
    <svg class="lk" viewBox="0 0 40 50"><path d="M20 2a11 11 0 0 0-11 11v7H6a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24a4 4 0 0 0-4-4h-3v-7A11 11 0 0 0 20 2zm-7 18v-7a7 7 0 0 1 14 0v7z"/></svg>
    <h3>Catatan Ini Dikunci</h3><p>Masukkan kode untuk melihat catatan ini.</p>
    <div class="codein">${'<i></i>'.repeat(4)}</div>
    <div class="npad">${[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '⌫'].map(k => k === '' ? '<span></span>' : `<button data-k="${k}" class="${k === '⌫' ? 'x' : ''}">${k}</button>`).join('')}</div></div>` });
  const boxes = el.querySelector('.codein');
  const draw = () => [...boxes.children].forEach((b, i) => b.classList.toggle('on', i < code.length));
  el.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
    const k = b.dataset.k;
    if (k === '⌫') code = code.slice(0, -1); else if (code.length < 4) code += k;
    draw();
    if (code.length === 4) setTimeout(() => {
      if (code === STORY.noteCode) { S.letterRead = true; store.set('letterRead', true); pop(); showLetter(); return; }
      boxes.classList.add('shake'); setTimeout(() => boxes.classList.remove('shake'), 450); code = ''; draw();
    }, 180);
  });
}
function showLetter() {
  S.letterSeenAt = Date.now();
  const paras = LETTER.split('\n\n');
  const el = win({ cls: 'notes notepage', back: 'Catatan', sub: true, body: `<div class="notebody" style="padding-bottom:0"><div class="nd">${longDate(new Date(letterNote().ts))} pukul 23.38 · Kris</div></div><div class="letter">${paras.map((p, i) => `<p style="animation-delay:${i * 0.45}s">${esc(p)}</p>`).join('')}</div>` });
  const body = el.querySelector('.body');
  body.addEventListener('scroll', () => { S.letterSeenAt = Date.now(); if (body.scrollTop + body.clientHeight >= body.scrollHeight - 10) afterLetter(); });
  setTimeout(() => { if (body.scrollHeight <= body.clientHeight + 10) afterLetter(); }, paras.length * 450 + 1500);
}
// abis surat kelar dibaca: kasih jeda 15 detik dulu baru Kris nelpon
function afterLetter() { S.letterDone = true; if (S.called || now() < BDAY) return; S.called = true; setTimeout(incomingCall, 15000); }

// ---------- jam 00.00 ----------
// ---------- suara ----------
let AC = null;
const ac = () => { try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume(); } catch (e) {} return AC; };
document.addEventListener('pointerdown', ac, { once: true });
function tone(freqs, start, dur, vol = .06, type = 'sine') {
  const a = ac(); if (!a) return; try {
  const g = a.createGain(); g.connect(a.destination);
  g.gain.setValueAtTime(0, a.currentTime + start); g.gain.linearRampToValueAtTime(vol, a.currentTime + start + .02);
  g.gain.setValueAtTime(vol, a.currentTime + start + Math.max(.021, dur - .05)); g.gain.linearRampToValueAtTime(0, a.currentTime + start + Math.max(.03, dur));
  freqs.forEach(f => { const o = a.createOscillator(); o.type = type; o.frequency.value = f; o.connect(g); o.start(a.currentTime + start); o.stop(a.currentTime + start + dur + .05); });
  } catch (e) {}
}
// ---------- suara suasana: disintesis langsung (ga pake file → ga ada urusan hak cipta / kuota) ----------
let ambNoise = null;
function noiseSrc(a) { if (!ambNoise) { ambNoise = a.createBuffer(1, a.sampleRate * 2, a.sampleRate); const d = ambNoise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; } const s = a.createBufferSource(); s.buffer = ambNoise; s.loop = true; return s; }
// rain = hujan, hum = dengung kulkas kafe lobi, beep = monitor klinik. balikin fungsi stop(detik fade)
function amb(kind, vol) {
  const a = ac(); if (!a) return () => {};
  const out = a.createGain(), nodes = []; out.gain.value = 0; out.connect(a.destination);
  const fade = (v, sec) => { const t = a.currentTime; out.gain.cancelScheduledValues(t); out.gain.setValueAtTime(out.gain.value, t); out.gain.linearRampToValueAtTime(v, t + sec); };
  const filt = (type, f) => { const b = a.createBiquadFilter(); b.type = type; b.frequency.value = f; return b; };
  try {
    if (kind === 'rain') { const n = noiseSrc(a), hp = filt('highpass', 500), lp = filt('lowpass', 2800); n.connect(hp); hp.connect(lp); lp.connect(out); n.start(); nodes.push(n); fade(vol || .05, 1.5); }
    if (kind === 'hum') {
      [[100, .5], [200, .2], [300, .06]].forEach(([f, v]) => { const o = a.createOscillator(), g = a.createGain(); o.frequency.value = f; g.gain.value = v; o.connect(g); g.connect(out); o.start(); nodes.push(o); });
      const n = noiseSrc(a), lp = filt('lowpass', 450), g = a.createGain(); g.gain.value = .3; n.connect(lp); lp.connect(g); g.connect(out); n.start(); nodes.push(n);
      fade(vol || .035, 2.5);
    }
    if (kind === 'beep') {
      const o = a.createOscillator(), g = a.createGain(); o.frequency.value = 1050; g.gain.value = 0; o.connect(g); g.connect(out); o.start(); nodes.push(o);
      for (let i = 0; i < 60; i++) { const t = a.currentTime + .3 + i * 1.05; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(1, t + .01); g.gain.setValueAtTime(1, t + .11); g.gain.linearRampToValueAtTime(0, t + .13); }
      fade(vol || .03, .05);
    }
  } catch (e) {}
  let done = false;
  return (sec = 1.2) => { if (done) return; done = true; fade(0, sec); setTimeout(() => nodes.forEach(n => { try { n.stop(); } catch (e) {} }), sec * 1000 + 100); };
}
// "ting-tung" lift
function ding() {
  const a = ac(); if (!a) return;
  try { [[1319, 0], [1047, .45]].forEach(([f, d]) => [[1, .07], [2.76, .012]].forEach(([m, v]) => { const o = a.createOscillator(), g = a.createGain(), t = a.currentTime + d; o.frequency.value = f * m; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + .005); g.gain.exponentialRampToValueAtTime(.0001, t + 1.8); o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + 1.9); })); } catch (e) {}
}
// suara ikut idup selama layer-nya masih ada di layar
function ambWhile(el, kind, vol) { const stop = amb(kind, vol); const chk = setInterval(() => { if (!el.isConnected) { clearInterval(chk); stop(.6); } }, 400); return stop; }
function ringback() { let on = true; const loop = () => { if (!on) return; tone([440, 480], 0, 1.0, .07); setTimeout(loop, 3000); }; loop(); return () => on = false; }
// ringtone: aud/ringtone.mp3 kalau ada, kalau gak ada pake marimba sintetis
function marimba(f, at, vol = .12) {
  const a = ac(); if (!a) return; const t = a.currentTime + at;
  [[1, vol], [4, vol * .22], [10, vol * .05]].forEach(([m, v]) => {
    const o = a.createOscillator(), g = a.createGain(); o.type = 'sine'; o.frequency.value = f * m;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + .005); g.gain.exponentialRampToValueAtTime(.0001, t + (m === 1 ? .9 : .25));
    o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + 1);
  });
}
function ringtone() {
  let on = true, file = null;
  try { file = sfx('ringtone'); file.loop = true; file.currentTime = 0; } catch (e) {}
  const synth = () => { const seq = [[0, 784], [.15, 1047], [.3, 1175], [.45, 1047], [.6, 784], [.9, 880], [1.05, 1175], [1.2, 1319], [1.5, 1175], [1.65, 880]]; const loop = () => { if (!on) return; seq.forEach(([t, f]) => marimba(f, t)); setTimeout(loop, 2600); }; loop(); };
  if (file) file.play().catch(() => synth()); else synth();
  buzz('ring'); const vib = setInterval(() => buzz('ring'), 2250);
  return () => { on = false; if (file) file.pause(); clearInterval(vib); try { navigator.vibrate && navigator.vibrate(0); } catch (e) {} };
}
function say(who, onVoice) {
  return; // file aud/yeoboseyo-*.mp3 belum ada → tiap telfon cuma bikin 404. nyalain lagi kalo filenya udah diupload
  try { if (voiceEl) voiceEl.pause(); voiceEl = new Audio(AUD(`aud/yeoboseyo-${who.toLowerCase()}.mp3`)); voiceEl.play().then(() => onVoice && onVoice()).catch(() => {}); } catch (e) {}
}
const endTone = () => { tone([480], 0, .18, .06); tone([480], .25, .18, .06); tone([480], .5, .18, .06); };

// ---------- telepon ----------
// dir: 'out' (Kino nelpon) / 'in' (masuk). lines: [['t'|'k', teks]]
// log panggilan buat Telepon > Terkini
S.callLog = store.get('callLog', []);
// riwayat telpon: maks 40. missed call spam berantem cuma disisain 8 terbaru, biar riwayat hari2 sebelumnya (bisa diputer ulang) ga kedorong ilang
function trimCallLog() {
  S.callLog.sort((a, b) => b.t - a.t); let spam = 0;
  S.callLog = S.callLog.filter(c => !(c.fight && c.missed) || ++spam <= 8).slice(0, 40); store.set('callLog', S.callLog);
}
function callScreen(opts) {
  if (music) { music.pause(); }
  if (opts.replay) return callScreen_(opts); // puter ulang dari riwayat: ga dicatet lagi
  const entry = { who: opts.who, t: now().getTime(), out: opts.dir !== 'in', missed: opts.dir === 'in' };
  if (opts.lines && opts.lines.length > 1) entry.lines = opts.lines.map(l => [l[0], l[1]]);
  if (opts.lines === FIGHT_CALL) entry.fight = true;
  if (opts.vm) entry.vmLines = opts.vm;
  S.callLog.unshift(entry); trimCallLog();
  const onEnd = opts.onEnd; opts = { ...opts, onEnd: () => { entry.missed = false; store.set('callLog', S.callLog); onEnd && onEnd(); } };
  return callScreen_(opts);
}
function callScreen_({ who, dir = 'out', lines = [], noAnswer = false, rejectAfter = 0, autoMiss = 0, onEnd, onDecline, endWith, replay = false, onAnswer, voicemail = false, note = '' }) {
  if (replay) { endWith = null; onEnd = null; }
  const name = dispName(who); let stopRing = null, timer = null, i = -1;
  const el = h(`<div class="call" data-nostatus="" data-modal="1"><div class="blurbg" style="background-image:url('${(PEOPLE[who] || {}).av || ''}')"></div>
    <div class="cs">${dir === 'in' ? 'KakaoTalk Audio...' + (note ? ' · ' + esc(note) : '') : 'memanggil...'}</div><h2>${esc(name)}</h2>${av(who)}
    <div class="sub"></div><div class="taphint"></div>
    <div class="cbtns">${dir === 'in' ? `<button class="no"><i>${SVG_PHONE}</i>Tolak</button><button class="yes"><i>${SVG_PHONE}</i>Terima</button>` : `<span></span><button class="no end"><i>${SVG_PHONE}</i>Akhiri</button><span></span>`}</div>
  </div>`);
  const cs = el.querySelector('.cs'), sub = el.querySelector('.sub'), hint = el.querySelector('.taphint');
  const finish = (msg = 'Panggilan berakhir') => { if (stopRing) stopRing(); clearInterval(timer); try { voiceEl && voiceEl.pause(); } catch (e) {} endTone(); cs.textContent = msg; el.querySelector('.cbtns').innerHTML = ''; sub.innerHTML = ''; hint.textContent = ''; el.onclick = null; setTimeout(() => { el.remove(); syncChrome(); onEnd && onEnd(); }, 1300); };
  const show = () => {
    const [w, t] = lines[i]; sub.innerHTML = `<p class="${w}">${w === 'k' ? '<small>Kino</small>' : `<small>${esc(name)}</small>`}${esc(t)}</p>`;
    hint.textContent = 'ketuk buat lanjut';
  };
  const next = () => {
    i++;
    if (i < lines.length) return show();
    if (endWith) { sub.innerHTML = ''; hint.textContent = ''; el.onclick = null; endWith(el, () => { clearInterval(timer); }); return; }
    finish();
  };
  const answered = () => {
    if (stopRing) stopRing(); stopRing = null; if (onAnswer && !replay) onAnswer();
    el.querySelector('.cbtns').innerHTML = `<span></span><button class="no end"><i>${SVG_PHONE}</i>Akhiri</button><span></span>`;
    el.querySelector('.end').onclick = (e) => { e.stopPropagation(); finish(); };
    let s = 0; const pre = voicemail ? 'Pesan suara · ' : ''; cs.textContent = pre + '00:00'; timer = setInterval(() => { s++; cs.textContent = `${pre}${pad(Math.floor(s / 60))}:${pad(s % 60)}`; }, 1000);
    if (voicemail) { next(); setTimeout(() => { el.onclick = (e) => { if (!e.target.closest('button')) next(); }; }, 700); return; }
    sub.innerHTML = `<p class="t"><small>${esc(name)}</small>halo?</p>`; hint.textContent = 'ketuk buat lanjut';
    say(who, () => { const p = sub.querySelector('p'); if (p && i < 0) p.innerHTML = `<small>${esc(name)}</small>yeoboseyo?`; });
    setTimeout(() => { el.onclick = (e) => { if (!e.target.closest('button')) next(); }; }, 700);
  };
  if (replay) { el.querySelector('.cbtns').innerHTML = ''; setTimeout(answered, 300); }
  else if (dir === 'in') {
    sysNotify(name, 'KakaoTalk Audio · memanggil…', 'call');
    stopRing = ringtone();
    if (autoMiss) setTimeout(() => { if (el.isConnected && stopRing) { stopRing(); stopRing = null; el.remove(); syncChrome(); } }, autoMiss);
    el.querySelector('.yes').onclick = (e) => { e.stopPropagation(); answered(); };
    el.querySelector('.no').onclick = (e) => { e.stopPropagation(); if (onDecline) { stopRing(); el.remove(); syncChrome(); onDecline(); } else finish('Panggilan ditolak'); };
  } else {
    stopRing = ringback();
    el.querySelector('.end').onclick = (e) => { e.stopPropagation(); finish(); };
    if (rejectAfter) setTimeout(() => { if (el.isConnected) finish('Panggilan ditolak'); }, rejectAfter);
    else setTimeout(() => { if (!el.isConnected) return; if (noAnswer) { finish('Tidak menjawab'); toast({ icon: ICONS.phone, title: 'Telepon', body: `${name} tidak menjawab`, ms: 3500 }); } else answered(); }, 5600);
  }
  push(el);
  return el;
}
S.callN = store.get('callN', {});
function takeNext(key, pool) { const n = S.callN[key] || 0; S.callN[key] = n + 1; store.set('callN', S.callN); return pool[n] || null; }
const dayKey = (d = now()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
function callLines(who) { const vs = (CALL_LINES[who] || []).filter(v => visible(new Date(v.from))); return vs.length ? vs[vs.length - 1].lines : []; }
function callPerson(who) {
  if (who === 'Kris') {
    if (now() >= BDAY) {
      const ek = endKey(); if (!ek) return callScreen({ who, lines: [['t', 'kino...'], ['t', 'aku masih di kafe lobi']] });
      const vs = KRIS_AFTER[ek]; if (!vs) return callScreen({ who, noAnswer: true });
      const v = vs.find(o => inWin(o)) || vs[vs.length - 1]; return callScreen({ who, lines: v.lines });
    }
    if (S.fightDone) return callScreen({ who, lines: [['t', 'kino?? kamu nelpon—'], ['k', 'salah pencet.']] });
    if (now() >= new Date('2026-10-23T00:00')) return callScreen({ who, noAnswer: true }); // afk total
    const hr = now().getHours();
    if (hr >= 9 && hr < 19) { // jam kerja: ditolak, terus chat (beda2 tiap kali)
      const msg = takeNext('busyW', KRIS_BUSY.work);
      return callScreen({ who, rejectAfter: 3200, onEnd: () => msg && addMsg('kris', msg.map(t => ['them', t]), 1500) });
    }
    const night = takeNext('busyN', KRIS_BUSY.night);
    return night ? callScreen({ who, lines: night }) : callScreen({ who, noAnswer: true });
  }
  // nelpon pertama kali (per versi cerita) pake CALL_LINES, abis itu CALL_AGAIN
  const lines = callLines(who); const k = 'first' + who + JSON.stringify(lines).length;
  if (!S.callN[k]) { S.callN[k] = 1; store.set('callN', S.callN); return callScreen({ who, lines }); }
  const dk = 'cday' + who + dayKey(), win0 = (CALL_DAY_WIN[who] || {})[dayKey()]; // obrolan khusus hari ini (sekali), ada yg cuma boleh abis/sebelum jam tertentu (biar ga spoiler)
  const today = !win0 || inWin(win0) ? (CALL_DAY[who] || {})[dayKey()] : null;
  if (today && !S.callN[dk]) { S.callN[dk] = 1; store.set('callN', S.callN); return callScreen({ who, lines: today }); }
  const again = takeNext('again' + who, CALL_AGAIN[who] || []);
  callScreen({ who, lines: again || [['t', 'iya?'], ['k', 'gpp'], ['t', 'okay']] });
}
function incomingCall() {
  callScreen({ who: 'Kris', dir: 'in', lines: MIDNIGHT_CALL, endWith: (el, done) => showChoices(el, done), onDecline: () => declined() }); autoDecline();
}
// telfon 00.00 ditolak: Kris ga nyerah. missed call numpuk di chat, chatnya makin pendek, nelpon lagi 3 detik kemudian sampe diangkat
const MID_DECLINE = [['kino. angkat'], ['aku cuma mau ngomong sekali ini aja'], ['please. 5 menit'], ['kino', 'kino please'], ['aku ga pergi kok. aku tunggu kamu angkat']];
const MID_DECLINE_LOOP = [['kino please'], ['kino'], ['please'], ['kino']];
let midDeclines = 0;
async function declined() {
  const txt = MID_DECLINE[midDeclines] || MID_DECLINE_LOOP[(midDeclines - MID_DECLINE.length) % MID_DECLINE_LOOP.length]; midDeclines++;
  addMsg('kris', [['them', '', { call: 'Panggilan tak terjawab', quiet: true }], ...txt.map(x => ['them', x])], 300);
  await sleep(3000);
  if (!store.get('ending', null) && !document.querySelector('.call')) incomingCall();
}
// Kris nelpon setelah 1 menit main
S.krisCalled = store.get('krisCalled', false);
let playSince = null;
// berantem: Kris nelpon abis liat foto (sekali, kapanpun pemain buka setelah jamnya)
let fightRinging = false;
let fightGap = 0; // jeda abis ditolak sebelum nelpon lagi
function maybeFight() {
  if (fightRinging && !document.querySelector('.call') && Date.now() > fightGap) fightRinging = false; // layar telfonnya ketutup/kebuang tanpa diangkat/ditolak: bunyiin lagi, jangan nyangkut
  if (S.fightDone || fightRinging || !visible(new Date(FIGHT_AT))) return;
  fightCatchUp(Math.min(now().getTime(), FIGHT_GIVEUP.getTime()));
  // ga diangkat sampe 14.27 (atau baru buka HP sesudahnya): Kris berhenti nelpon, cerita jalan terus
  if (fightOver()) {
    S.fightDone = true; store.set('fightDone', true);
    // tetep dianggep diangkat jam 14.27 (Kino akhirnya ngangkat di pantry): log & riwayat "diterima", bisa diputer ulang dari Telepon
    if (!S.fightAns) { S.fightAns = FIGHT_GIVEUP.getTime(); S.fightEnd = S.fightAns + FIGHT_AUTO_SEC * 1000; store.set('fightAns', S.fightAns); store.set('fightEnd', S.fightEnd); }
    if (!S.callLog.some(c => c.fight && !c.missed)) { S.callLog.push({ who: 'Kris', t: S.fightAns, out: false, missed: false, fight: true, lines: FIGHT_CALL.map(l => [l[0], l[1]]) }); S.callLog.sort((a, b) => b.t - a.t); store.set('callLog', S.callLog); }
    fixFightLog(); kinoReacts();
    refreshUnder(); return;
  }
  if (document.querySelector('.intro')) return; // masih di layar "Mulai"
  const t = topL(); if (t && t.dataset.modal) return;
  fightCall(); // HP kekunci juga tetep bunyi, kayak telfon beneran
}
// telpon berantem (dipake juga sama telpon spam Kris abis foto dikirim: kalau diangkat, ya ini)
const FIGHT_DECLINE = [['kino', 'please'], ['aku tau kamu liat hp'], ['kasih aku 5 menit. abis itu terserah kamu'], ['aku ga akan bohong lagi', 'sumpah'], ['kamu boleh marah. boleh teriak', 'tapi ngomong sama aku'], ['jangan diem kino', 'diem kamu yg paling aku takutin'], ['aku ga akan berhenti nelfon']];
// abis itu muter terus, sampe diangkat. makin kacau
const FIGHT_DECLINE_LOOP = [['delapan tahun kino', 'jangan selesai kayak gini'], ['yuna itu', 'nggak.', 'aku salah. udah itu aja'], ['aku ga bisa mikir apa2', 'dari tadi cuma liatin hp'], ['bilang aku brengsek juga gpp', 'asal kamu ngomong'], ['kino'], ['aku jelasin semuanya. ga ada yg aku tutupin lagi'], ['kamu udah makan?', 'maaf. aku ga tau mau ngomong apa lagi'], ['satu kali aja'], ['kamu mau blok aku juga aku ngerti', 'tapi jangan dulu'], ['kino sayang', 'maaf', 'maaf maaf maaf'], ['ini aku. kris', 'masih aku'], ['aku ga tidur semalem', 'iya aku tau itu bukan alesan'], ['tolong'], ['kamu pernah bilang', '"kalo berantem jangan tidur sebelum baikan"', 'aku masih pegang itu'], ['aku nangis kayak orang bego'], ['...'], ['aku mau ke tempat kamu', 'nggak. nanti kamu makin marah', 'angkat aja please'], ['kino please please'], ['aku ga minta dimaafin sekarang', 'aku cuma mau denger suara kamu'], ['jangan pergi']];
let fightDeclines = store.get('fightDeclines', 0);
const FIGHT_RING_MS = 12000; // dibiarin bunyi segini = tak terjawab
// satu "ditolak": missed call + chat mohon2 (urut, makin kacau)
function fightPleas() {
  const txt = FIGHT_DECLINE[fightDeclines] || FIGHT_DECLINE_LOOP[(fightDeclines - FIGHT_DECLINE.length) % FIGHT_DECLINE_LOOP.length];
  fightDeclines++; store.set('fightDeclines', fightDeclines);
  return [['them', '', { call: 'Panggilan tak terjawab', quiet: true }], ...txt.map(x => ['them', x])];
}
// HP ga dibuka (telat / ditinggal) pas Kris lagi nelpon: dianggep Kino nolak terus. missed call + chat diisi mundur sesuai ritme telponnya
function fightCatchUp(until) {
  let t = store.get('fightNext', 0) || new Date(FIGHT_AT).getTime(), n = 0;
  while (t + FIGHT_RING_MS <= until) {
    S.callLog.push({ who: 'Kris', t, out: false, missed: true, fight: true, lines: FIGHT_CALL.map(l => [l[0], l[1]]) });
    const miss = t + FIGHT_RING_MS; addMsg('kris', fightPleas(), miss - now().getTime()); t = miss + fightRedialMs(); n++;
  }
  store.set('fightNext', t);
  if (n) trimCallLog();
}
// abis telpon berantem: Kino bales di chat. pendek, nyelekit, terus balik kerja
const FIGHT_REACT = ['brengsek.', 'delapan tahun. kamu bisa ngomong ke semua orang, kecuali aku.', 'nangisin kamu ga bikin prod naik.'];
function kinoReacts() {
  if (store.get('fightReact', false) || !S.fightEnd) return; store.set('fightReact', true);
  addMsg('kris', FIGHT_REACT.map(x => ['me', x]), S.fightEnd + 20000 - now().getTime());
}
// Kris nyerah 14.27 (~20 menit sejak telpon pertama, sebelum Kino balik dari pantry 14.31): telponnya kelewat, cerita jalan terus
const FIGHT_GIVEUP = new Date('2026-10-24T14:27');
const fightOver = () => now() >= FIGHT_GIVEUP;
const FIGHT_AUTO_SEC = 3 * 60 + 41; // durasi telpon kalo diangkatnya "di luar layar" jam 14.27: kelar 14.30, Kino balik ke ruangan 14.31
// jeda sebelum nelpon lagi: awalnya beruntun, lama2 makin jarang (biar ga ratusan telpon kalo HP dibiarin), tapi ga pernah berhenti
const fightRedialMs = () => fightDeclines <= 20 ? 3000 : Math.min(90000, 3000 + (fightDeclines - 20) * 6000);
// diangkat: chat mohon2 yg masih antri (dijadwalin beberapa detik ke depan) dibatalin, biar Kris ga spam pas lagi ngobrol
function dropQueuedPleas() {
  const t0 = now().getTime(), c = CHATS.find(x => x.id === 'kris'), late = (who, t) => who !== 'me' && t > t0;
  S.extra = S.extra.filter(x => !(x.chat === 'kris' && late(x.who, x.t))); store.set('extra', S.extra);
  for (let i = c.items.length - 1; i >= 0; i--) if (c.items[i].x && late(c.items[i].who, c.items[i].ts.getTime())) c.items.splice(i, 1);
}
function fightCall(autoMiss = 0) {
  if (fightRinging || S.fightDone || fightOver()) return;
  fightRinging = true;
  callScreen({ who: 'Kris', dir: 'in', lines: FIGHT_CALL, onAnswer: () => { if (!S.fightAns) { S.fightAns = now().getTime(); store.set('fightAns', S.fightAns); } dropQueuedPleas(); fixFightAlt(); },
    onEnd: () => { fightRinging = false; S.fightDone = true; store.set('fightDone', true); S.fightEnd = now().getTime(); store.set('fightEnd', S.fightEnd); fixFightLog(); kinoReacts(); refreshUnder(); },
    onDecline: () => { // ditolak: Kris ga nyerah, missed call numpuk + chat, nelpon lagi sampe diangkat (makin lama makin jarang) atau Kris nyerah 14.27
      const queued = S.extra.filter(x => x.chat === 'kris').reduce((m, x) => Math.max(m, x.t), 0) - now().getTime(); // chat batch sebelumnya belum abis masuk: antri di belakangnya, jangan nyampur
      addMsg('kris', fightPleas(), Math.max(300, queued + 1500));
      const gap = fightRedialMs(); store.set('fightNext', now().getTime() + gap); fightGap = Date.now() + gap + 500; setTimeout(() => { fightRinging = false; if (!S.fightDone && !fightOver() && !store.get('ending', null) && !document.querySelector('.call')) fightCall(); }, gap);
    } });
  autoDecline(); // dibiarin bunyi 25 detik = tak terjawab: Kris chat lagi terus nelpon lagi
}
// telfon Kris (berantem / 00.00) yg dicuekin: dianggep tak terjawab, jalur yg sama kayak ditolak
function autoDecline() { const el = [...document.querySelectorAll('.call')].pop(); setTimeout(() => { if (el && el.isConnected && el.querySelector('.yes')) el.querySelector('.no').click(); }, FIGHT_RING_MS); }
// telpon iseng dari orang2 pas lagi scrolling: jarang, sesuai jam, sekali per orang
let nextRandCall = null;
function maybeRandomCall() {
  if (!S.unlocked || EPI || document.hidden) return;
  const t = now(); if (t < new Date(RANDOM_CALL_WINDOW[0]) || t >= new Date(RANDOM_CALL_WINDOW[1])) return;
  if (nextRandCall === null) nextRandCall = Date.now() + (80 + Math.random() * 40) * 1000;
  if (Date.now() < nextRandCall) return;
  if (storyActive()) { nextRandCall = Date.now() + 30000; return; } // cerita utama dulu
  const top = topL(); if (!top || top.dataset.modal || top.dataset.chat === 'kris' || top.classList.contains('cam') || top.dataset.typing) return;
  const used = store.get('rcUsed', []), hr = t.getHours();
  const pool = RANDOM_CALLS.filter(c => !used.includes(c.id) && hr >= c.hours[0] && hr < c.hours[1] && (!c.d || c.d.includes(dayKey(t))));
  nextRandCall = Date.now() + (115 + Math.random() * 30) * 1000; // ~2 menit
  if (!pool.length) return;
  const c = pool[Math.floor(Math.random() * pool.length)]; used.push(c.id); store.set('rcUsed', used);
  const fu = CALL_FOLLOW[c.id], setFu = (k) => { if (!fu) return; const all = store.get('callFollow', {}); all[fu.chat] = { line: fu[k], t: now().getTime() }; store.set('callFollow', all); };
  setFu('miss'); // default: ga diangkat; kalau diangkat ketimpa 'ans'
  callScreen({ who: c.who, dir: 'in', lines: c.lines, autoMiss: 15000, onEnd: () => setFu('ans'), onDecline: () => {} });
}
const pendingFollow = (c) => { const f = store.get('callFollow', {})[c.id]; return f && now().getTime() - f.t < 2 * 3600e3 && now().getTime() >= f.t ? f.line : null; };
// main story lagi jalan? (pesan naskah masuk <3 menit lalu / bakal masuk <4 menit lagi, atau telpon berantem)
function storyActive() {
  if (typeof fightRinging !== 'undefined' && fightRinging) return true;
  const n = now().getTime(), extra = new Set(S.extra.map(e => e.t));
  return CHATS.some(c => !c.channel && c.items.some(it => { const t = it.ts.getTime(); return it.who !== 'me' && t > n - 3 * 60000 && t < n + 4 * 60000 && !extra.has(t) && !hiddenByGate(c, it); }));
}
// chat iseng dari orang2 (bukan Kris) pas lagi scrolling: sekali per id, sesuai jam
const pendingRandChat = (c) => { const st = store.get('rchat', {}); const m = lastMsg(c); return RANDOM_CHATS.find(r => r.chat === c.id && r.reply && st[r.id] === 1 && m && m.who !== 'me'); };
let nextRandChat = null;
function maybeRandomChat() {
  if (!S.unlocked || EPI || document.hidden) return;
  const t = now(); if (t < new Date(RANDOM_CALL_WINDOW[0]) || t >= new Date(RANDOM_CALL_WINDOW[1])) return;
  if (nextRandChat === null) nextRandChat = Date.now() + (40 + Math.random() * 50) * 1000;
  if (Date.now() < nextRandChat) return;
  if (storyActive()) { nextRandChat = Date.now() + 30000; return; } // cerita utama dulu
  const top = topL(); if (!top || top.dataset.modal || top.dataset.typing) return;
  nextRandChat = Date.now() + (110 + Math.random() * 20) * 1000; // ~2 menit
  const st = store.get('rchat', {}), hr = t.getHours();
  const pool = RANDOM_CHATS.filter(r => !st[r.id] && hr >= r.hours[0] && hr < r.hours[1] && (!r.d || r.d.includes(dayKey(t))) && top.dataset.chat !== r.chat && !storyBusy(CHATS.find(x => x.id === r.chat)) && !pendingReply(CHATS.find(x => x.id === r.chat)) /* masih ada pilihan balesan yg belum dijawab: jangan diselak random chat */);
  if (!pool.length) return;
  const r = pool[Math.floor(Math.random() * pool.length)]; st[r.id] = r.reply ? 1 : 2; store.set('rchat', st);
  addMsg(r.chat, r.msgs, 1000);
}
// telpon Kris yg jendelanya udah lewat pas app ketutup: masuk riwayat sbg tak terjawab (bisa diputer ulang)
function logMissedKrisCalls() {
  const n = now(), done = store.get('krisCalls', []); let added = false;
  S.callLog.forEach(c => { if (c.who !== 'Kris' || c.vmLines || !c.lines || !c.lines[0]) return; const d = dayKey(new Date(c.t)); const o = (KRIS_CALL[d] || []).find(o => o && o.vm && o.lines[0][1] === c.lines[0][1]); if (o) { c.vmLines = o.vm; added = true; } }); // isi pesan suara buat catatan lama
  Object.entries(KRIS_CALL).forEach(([day, opts]) => {
    if (!Array.isArray(opts)) return;
    opts.forEach((o, vi) => {
      if (!o || !o.lines || done.includes(day + ':' + vi)) return;
      const end = new Date(`${day}T${o.to || '23:59'}`), start = new Date(`${day}T${o.from || '00:00'}`);
      if (end >= n || end >= new Date('2026-10-24T23:30')) return; // jendela yg lagi jalan biar bunyi beneran
      const t = o.from ? start.getTime() + 20 * 60000 : end.getTime() - 60 * 60000;
      const first = o.lines[0] && o.lines[0][1];
      if (S.callLog.some(c => c.who === 'Kris' && c.lines && c.lines[0] && c.lines[0][1] === first && dayKey(new Date(c.t)) === day)) { done.push(day + ':' + vi); added = true; return; } // udah pernah bunyi (versi lama)
      S.callLog.push({ who: 'Kris', t, out: false, missed: true, lines: o.lines.map(l => [l[0], l[1]]), vmLines: o.vm }); done.push(day + ':' + vi); added = true;
    });
  });
  if (added) { trimCallLog(); store.set('krisCalls', done); }
}
function maybeKrisCall() {
  const k = dayKey(); const opts = KRIS_CALL[k]; const vi = Array.isArray(opts) ? opts.findIndex(o => o && o.lines && inWin(o)) : -1; const v = vi >= 0 ? opts[vi] : null; const lines = v ? v.lines : null;
  const slot = k + ':' + vi, done = store.get('krisCalls', []); // sekali per jendela waktu, jeda min 30 menit
  const lastAt = store.get('krisLastCall', 0);
  if (!lines || done.includes(slot) || now().getTime() - lastAt < 30 * 60000 || !S.unlocked || now() >= new Date('2026-10-24T23:30') || (k === '2026-10-22' && now() >= new Date(FIGHT_AT))) return;
  if (!playSince) playSince = Date.now();
  if (Date.now() - playSince < 60000) return;
  const t = topL(); if (t && t.dataset.modal) return;
  if (storyActive()) return; // lagi ada adegan lain: tunggu
  S.krisCalled = k; store.set('krisCalled', k); store.set('krisCalls', [...done, slot]); store.set('krisLastCall', now().getTime());
  callScreen({ who: 'Kris', dir: 'in', lines, vm: v.vm, onDecline: () => addMsg('kris', [['them', 'yaudah gpp. nanti aja']], 2000) });
}
function showChoices(el, done) {
  el.querySelectorAll('.cbtns, .taphint').forEach(x => x.remove()); const sub = el.querySelector('.sub'); if (sub) sub.style.minHeight = '0';
  const c = h(`<div class="choices"><div class="q">Kino...</div>
    <button data-e="maafin">"oke. tapi ini yg terakhir."</button>
    <button data-e="jeda">"kita break dulu."</button>
    <button data-e="turun">turun. balikin jaketnya</button>
    <button data-e="waktu">tutup telfonnya.</button></div>`);
  c.querySelectorAll('[data-e]').forEach(b => b.onclick = () => { done && done(); if (store.get('ending', null)) resetAfterChoice(); ending(b.dataset.e); });
  el.appendChild(c);
}
// milih ending lagi: yg kejadian abis telfon 00.00 (chat/balesan tgl 25, HP epilog) dihapus, kayak muter balik ke telfonnya.
// progres 20–24, Secret Secret, koleksi ending tetep
function resetAfterChoice() {
  const cut = new Date('2026-10-25T00:00').getTime();
  try {
    store.set('extra', store.get('extra', []).filter(x => x.t < cut));
    const a = store.get('answers', {}); Object.keys(a).forEach(k => { if (a[k] && a[k].t >= cut) delete a[k]; }); store.set('answers', a);
    ['epi', 'epiShown', 'epiDone', 'epiToast', 'pickAgain'].forEach(k => localStorage.removeItem('hpkino:' + k));
  } catch (e) {}
  S.reloadAfterEnding = true; // isi chat di memori masih yg lama → abis narasi, muat ulang
}
function pickAgain() {
  const c = h(`<div class="call" data-nostatus="" data-modal="1"><div class="blurbg" style="background-image:url('${PEOPLE.Kris.av}')"></div><div class="cs">00.00 · 25 Oktober</div><h2>${esc(krisName())}</h2>${av('Kris')}</div>`);
  push(c); showChoices(c);
}
// layar penutup: judul AU, the end
function finale() {
  if (document.querySelector('.finale')) return;
  const el = h(`<div class="finale" data-nostatus="1" data-modal="1"><div class="fin-in"><small>${esc('fan fiction')}</small><h1>${esc(AU_TITLE)}</h1><p>the end.</p><div class="fin-cr">cr. stayroom ai & antarestars</div><button class="cta fin-close">${esc('tutup')}</button></div></div>`);
  el.querySelector('.fin-close').onclick = () => { el.remove(); syncChrome(); };
  push(el);
}
// skor gaya main: tiap balasan pilihan = sabar (+1) / dingin (-1), liat TONE
function score() { return Object.entries(S.answers || {}).reduce((a, [id, v]) => a + ((TONE[id] || [])[v.choice] || 0), 0); }
// baris narasi: '***' jeda adegan, '_..._' italic, 'Flashback.'/'Flashback end.' penanda
function endP(l, d) {
  l = tr(l);
  const st = `style="animation-delay:${d}s"`;
  if (l === '***') return `<p class="brk" ${st}>***</p>`;
  if (/^Flashback( end)?\.$/.test(l)) return `<p class="fb" ${st}>${esc(l)}</p>`;
  if (/^_.*_$/.test(l)) return `<p class="itl" ${st}><em>${esc(l.slice(1, -1))}</em></p>`;
  return `<p ${st}>${esc(l)}</p>`;
}
function ending(key, epiMode = false, jump = false) {
  const E = ENDINGS[key]; const step = E.lines.length > 20 ? 1.15 : 1.6; // ending panjang: lebih cepet, bisa di-tap buat skip
  const tone = score() >= 0 ? 'sabar' : 'dingin';
  const lines = ENDING_TAIL[key] ? [...E.lines, ENDING_TAIL[key][tone]] : E.lines;
  store.set('ending', key);
  { const seen = store.get('endingsSeen', []); if (!seen.includes(key)) { seen.push(key); store.set('endingsSeen', seen); } }
  const epi = epiMode ? (E.epi || []) : []; const t0 = epiMode ? 0.2 : 0.4 + lines.length * step + 0.6;
  const shareLine = lines[lines.length - 1];
  const tEnd = epiMode ? t0 + 1.4 + (epi.length - 1) * step + 0.8 + 3 : t0 + 1.8 + epi.length * step; // epilog: 3 detik abis paragraf terakhir
  if (epiMode) lines.length = 0;
  const EL = !epiMode && !jump && ENDING_LOCK[key]; // penutup di layar kunci (bukan pas epilog / baca ulang)
  const tLock = 0.4 + lines.length * step + 1.6, lockLen = EL ? (ENDLOCK_IN + EL.notifs.length * ENDLOCK_GAP + ENDLOCK_HOLD) / 1000 : 0;
  const el = h(`<div class="ending" data-nostatus="1" data-modal="1"><h2>${esc(epiMode ? tr('Epilog · ') + tr(E.title) : tr(E.title))}</h2>
    ${lines.map((l, i) => endP(l, 0.4 + i * step)).join('')}
    ${epi.length ? `<p class="epihead" style="animation-delay:${t0}s">${esc(E.epiHead || 'Seminggu kemudian.')}</p>${epi.map((l, i) => endP(l, t0 + 1.4 + i * step)).join('')}<p class="theend${epiMode ? ' big' : ''}" style="animation-delay:${tEnd}s">${esc(AU_TITLE)}<small>the end.</small></p>` : ''}
    <div class="endcard${epiMode ? ' epi' : ''}" style="animation-delay:${(epi.length ? tEnd + (epiMode ? 6.5 : 0.8) : EL ? tLock + lockLen + 0.6 : 0.8 + lines.length * step)}s">
      ${epiMode ? '' : `<div class="bd">selamat ulang tahun, kino.</div>
      <div style="color:#8e8e93;font-size:13px">${`25.10 · kamu main ${tone === 'sabar' ? 'sabar 🤍' : 'dingin 🧊'}`}</div>`}
      ${epiMode ? '' : `<div class="endcol">${(() => { const seen = store.get('endingsSeen', []), keys = ['maafin', 'jeda', 'turun', 'waktu']; return `<div class="ec-t">Ending terbuka: ${keys.filter(k => seen.includes(k)).length}/4</div><div class="ec-row">${keys.map(k => `<span class="${seen.includes(k) ? 'on' : ''}">${seen.includes(k) ? esc(ENDINGS[k].title) : '???'}</span>`).join('')}</div>`; })()}</div>
      ${playlistHTML()}`}
      <div class="cr">fan fiction · semua nama & kejadian rekaan<br>cr. stayroom ai & antarestars</div>
      ${epiMode ? (EPI ? '<button class="cta epi">tutup</button><br><br><button class="cta now" style="background:transparent;color:#fff;border:1px solid #48484a">← balik ke hari ultah Kino</button>' : '<button class="cta epi">📱 buka HP Kino · seminggu kemudian</button>') : '<button class="cta bday">lanjut ke hari ulang tahun Kino →</button>'}<br><br>
      <button class="cta share" style="background:#fee500">Bagikan hasil</button><br><br>
      ${EPI ? '' : '<button class="cta other" style="background:transparent;color:#fff;border:1px solid #48484a">Ending lain</button>'}
    </div></div>`);
  // tap di teks: munculin semua (skip animasi)
  let stopLock = null; const lockT = EL ? setTimeout(() => { if (el.isConnected) stopLock = endLock(EL); }, tLock * 1000) : 0;
  // suara suasana di narasi (ENDING_SFX): mulai pas paragrafnya muncul
  const cueT = [], hums = [];
  if (!epiMode && !jump) (ENDING_SFX[key] || []).forEach(([k, from, to, vol]) => {
    const at = (s) => { const i = lines.findIndex(l => String(l).startsWith(s)); return i < 0 ? -1 : (0.4 + i * step) * 1000; };
    const t1 = at(from); if (t1 < 0) return;
    if (k === 'ding') return cueT.push(setTimeout(() => { if (el.isConnected) ding(); }, t1 + 300));
    const t2 = to ? at(to) : -1;
    cueT.push(setTimeout(() => { if (!el.isConnected) return; const st = ambWhile(el, k, vol); hums.push(st); cueT.push(setTimeout(() => st(2.5), t2 > t1 ? t2 - t1 : 30000)); }, t1));
  });
  el.addEventListener('click', (e) => { if (e.target.closest('button')) return; clearTimeout(lockT); stopLock && stopLock(true); cueT.forEach(clearTimeout); hums.forEach(st => st(.6)); el.querySelectorAll('p, .endcard').forEach(p => { p.style.animationDelay = '0s'; }); });
  // auto-scroll ngikutin kalimat yg muncul; berhenti kalau pemain scroll sendiri
  let userScrolled = false; el.addEventListener('wheel', () => userScrolled = true); el.addEventListener('touchmove', () => userScrolled = true);
  // epilog: pas Days Until & tombol muncul, pastiin udah di paling bawah
  el.querySelectorAll('.theend.big, .endcard.epi').forEach(x => x.addEventListener('animationstart', () => el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })));
  const follow = setInterval(() => { if (!el.isConnected || userScrolled) return clearInterval(follow); const ps = [...el.querySelectorAll('p, .endcard')].filter(p => getComputedStyle(p).opacity > 0.05); const last = ps[ps.length - 1]; if (last) el.scrollTo({ top: Math.max(0, last.offsetTop - el.clientHeight * 0.55), behavior: 'smooth' }); }, 700);
  const ot = el.querySelector('.other'); if (ot) ot.onclick = () => { // balik ke pilihan, biar bisa nyobain ending lain
    if (EPI) { // dari HP seminggu kemudian: keluar dulu, balik ke telfon 25 Oktober
      try { ['epi', 'epiShown', 'epiDone'].forEach(k => localStorage.removeItem('hpkino:' + k)); localStorage.setItem('hpkino:pickAgain', 'true'); } catch (e) {}
      location.href = location.pathname; return;
    }
    el.remove(); pickAgain();
  };
  const bd = el.querySelector('.bday'); if (bd) bd.onclick = () => { if (S.reloadAfterEnding) { try { localStorage.setItem('hpkino:resume', 'true'); } catch (e) {} location.href = location.pathname + location.search; return; } layersEl.querySelectorAll('.call, .ending').forEach(x => x.remove()); S.unlocked = true; home(); }; // ke HP, bukan balik ke pilihan
  el.querySelector('.share').onclick = () => shareCard(key, tone, shareLine);
  const nw = el.querySelector('.now'); if (nw) nw.onclick = () => { try { localStorage.removeItem('hpkino:epi'); localStorage.setItem('hpkino:backToCard', JSON.stringify(key)); } catch (e) {} location.href = location.pathname + (tnow() < EPI_OPEN.getTime() ? '?now=2026-10-25T22:00' : ''); };
  const ep = el.querySelector('.epi'); if (ep) ep.onclick = () => { if (EPI) { el.remove(); syncChrome(); return; } goEpilogPhone(key); };
  push(el);
  if (jump) { el.querySelectorAll('p, .endcard').forEach(p => { p.style.animationDelay = '0s'; p.style.animationDuration = '0s'; }); setTimeout(() => el.scrollTop = el.scrollHeight, 60); } // langsung ke kartu
}
// kartu hasil 9:16 buat dibagikan
// layar kunci penutup ending: notif masuk satu2, ga bisa dibuka, terus pudar ke kartu ending
const ENDLOCK_IN = 1400, ENDLOCK_GAP = 1500, ENDLOCK_HOLD = 3200;
const ICON_PENGINGAT = '<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fff"/><g fill="none" stroke="#c7c7cc" stroke-width="2.4"><path d="M24 18h22M24 30h22M24 42h22"/></g><circle cx="15" cy="18" r="4.5" fill="#ff9500"/><circle cx="15" cy="30" r="4.5" fill="#007aff"/><circle cx="15" cy="42" r="4.5" fill="#ff3b30"/></svg>';
function endLock(E) {
  const t = new Date(E.at), nc = (n) => ncard({ icon: n[0] === 'pengingat' ? ICON_PENGINGAT : (ICONS[n[0]] || ICONS.kakao), title: n[1], body: n[2], when: n[3] });
  const el = h(`<div class="endlock" data-nostatus="1" data-modal="1">${im(STORY.wallLock)}<div class="shade"></div>
    <div class="lk-top"><div class="lk-date">${longDate(t)}</div><div class="lk-time">${hm(t).replace('.', ':')}</div></div>
    <div class="lk-notes">${(E.base || []).map(nc).join('')}</div></div>`);
  push(el);
  const notes = el.querySelector('.lk-notes'), timers = [];
  E.notifs.forEach((n, i) => timers.push(setTimeout(() => { notes.insertAdjacentHTML('afterbegin', nc(n)); if (n[0] === 'kakao') katalk(); buzz(/^kris/i.test(n[1]) ? 'kris' : 'notif'); }, ENDLOCK_IN + i * ENDLOCK_GAP)));
  const stop = (now) => { timers.forEach(clearTimeout); if (!el.isConnected) return; if (now) { el.remove(); syncChrome(); return; } el.classList.add('out'); setTimeout(() => { el.remove(); syncChrome(); }, 900); };
  timers.push(setTimeout(stop, ENDLOCK_IN + E.notifs.length * ENDLOCK_GAP + ENDLOCK_HOLD));
  return stop;
}
async function shareCard(key, tone, line) {
  const W = 1080, H = 1920, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
  const load = (src) => new Promise(r => { const i = new Image(); i.onload = () => r(i); i.onerror = () => r(null); i.src = src; });
  x.fillStyle = '#0b0b0d'; x.fillRect(0, 0, W, H);
  const ph = await load({ maafin: 'img/kita-2.jpg', jeda: 'img/soonie-jaket.jpg', turun: 'img/han-river.jpg', waktu: 'img/wall-lock-sdd.jpg' }[key]);
  if (ph) { x.save(); x.translate(W / 2, 760); x.rotate(-.04); x.fillStyle = '#f4f1ea'; x.fillRect(-380, -440, 760, 900); const sz = 680, r = Math.max(sz / ph.width, sz / ph.height); x.beginPath(); x.rect(-340, -400, sz, sz); x.clip(); x.filter = 'grayscale(.35) contrast(1.05)'; x.drawImage(ph, -340 + (sz - ph.width * r) / 2, -400 + (sz - ph.height * r) / 2, ph.width * r, ph.height * r); x.restore();
    x.save(); x.translate(W / 2, 760); x.rotate(-.04); x.fillStyle = '#2a2420'; x.font = 'italic 40px -apple-system, sans-serif'; x.textAlign = 'center'; x.fillText('25.10', 0, 380); x.restore(); }
  x.textAlign = 'center'; x.fillStyle = '#8e8e93'; x.font = '600 34px -apple-system, sans-serif'; x.fillText('H P   K I N O', W / 2, 150);
  x.fillStyle = '#fff'; x.font = '800 96px -apple-system, sans-serif'; x.fillText(ENDINGS[key].title, W / 2, 1390);
  x.fillStyle = '#c7c7cc'; x.font = '40px -apple-system, sans-serif';
  const words = line.split(' '); let row = '', y = 1480; for (const w of words) { if (x.measureText(row + w).width > 860) { x.fillText(row.trim(), W / 2, y); row = ''; y += 56; } row += w + ' '; } x.fillText(row.trim(), W / 2, y);
  x.fillStyle = tone === 'sabar' ? '#ffd9e2' : '#9fd3ff'; x.font = '600 40px -apple-system, sans-serif'; x.fillText(tone === 'sabar' ? 'kamu main sabar 🤍' : 'kamu main dingin 🧊', W / 2, y + 110);
  x.fillStyle = '#fee500'; x.font = '600 36px -apple-system, sans-serif'; x.fillText(`🤫 secret secret: ${secretCount()}/${CLUES.length}`, W / 2, y + 180);
  x.fillStyle = '#636366'; x.font = '32px -apple-system, sans-serif'; x.fillText('hp-kino.vercel.app · cr. stayroom ai & antarestars', W / 2, H - 90);
  c.toBlob(async (blob) => {
    const file = new File([blob], `hp-kino-${key}.png`, { type: 'image/png' });
    try { if (navigator.canShare && navigator.canShare({ files: [file] })) return await navigator.share({ files: [file], text: 'ending aku di HP Kino 🐰 hp-kino.vercel.app' }); } catch (e) {}
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = file.name; a.click();
  }, 'image/png');
}
function confetti(host) {
  const cv = document.createElement('canvas'); cv.className = 'confetti'; host.appendChild(cv);
  const r = host.getBoundingClientRect(); cv.width = r.width; cv.height = r.height;
  const ctx = cv.getContext('2d'); const cols = ['#ffd9e2', '#fee500', '#c79ad8', '#8fb8e8', '#fff'];
  const ps = Array.from({ length: 80 }, () => ({ x: Math.random() * cv.width, y: -20 - Math.random() * cv.height, v: 1 + Math.random() * 2, s: 3 + Math.random() * 4, c: cols[Math.random() * 5 | 0], w: Math.random() * 6 }));
  let f = 0; (function tick() { ctx.clearRect(0, 0, cv.width, cv.height); ps.forEach(p => { p.y += p.v; p.x += Math.sin((f + p.w * 20) / 20) * .6; ctx.fillStyle = p.c; ctx.fillRect(p.x, p.y, p.s, p.s * 1.6); }); if (++f < 600) requestAnimationFrame(tick); else cv.remove(); })();
}

// ---------- app lain ----------
function appCalendar() {
  const t = now(); let y = t.getFullYear(), m = t.getMonth(), sel = dayKey(t);
  const ev = (k) => AGENDA.filter(e => e[0] === k && (!e[5] || epiIs(e[5]))).sort((a, b) => (a[1] || '00') < (b[1] || '00') ? -1 : 1);
  const el = win({ cls: 'notepage cal', back: '', body: '<div class="calwrap"></div>' });
  const draw = () => {
    const first = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate();
    let cells = '<span></span>'.repeat(first);
    for (let d = 1; d <= days; d++) {
      const k = `${y}-${pad(m + 1)}-${pad(d)}`, dow = (first + d - 1) % 7;
      cells += `<span data-k="${k}" class="${k === dayKey(t) ? 'today' : ''} ${k === sel ? 'sel' : ''} ${dow === 0 || dow === 6 ? 'wk' : ''} ${ev(k).length ? 'ev' : ''}"><b>${d}</b></span>`;
    }
    const sd = new Date(sel + 'T00:00'), list = ev(sel);
    el.querySelector('.back').innerHTML = `${BACK}${y}`;
    el.querySelector('.calwrap').innerHTML = `<div class="calbar"><div class="bigtitle" style="color:#ff3b30;padding:0">${BULAN[m]}</div><div><button class="cm" data-d="-1">‹</button><button class="cm" data-d="1">›</button></div></div>
      <div class="calhead">${['M', 'S', 'S', 'R', 'K', 'J', 'S'].map(d => `<span>${d}</span>`).join('')}</div><div class="calgrid">${cells}</div>
      <div class="caldate">${longDate(sd)}</div>
      ${list.length ? list.map(([, tm, ti, c, note]) => `<div class="evrow"><i style="background:${c}"></i><div style="flex:1"><div class="et">${esc(ti)}</div>${note ? `<div class="es">${esc(note)}</div>` : ''}</div><div class="es" style="text-align:right">${tm ? tm.replace(':', '.') : 'seharian'}</div></div>`).join('') : '<div style="padding:14px 16px;color:#8e8e93">Tidak Ada Acara</div>'}`;
    el.querySelectorAll('[data-k]').forEach(c => c.onclick = () => { sel = c.dataset.k; draw(); });
    el.querySelectorAll('.cm').forEach(b => b.onclick = () => { m += +b.dataset.d; if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; } draw(); });
  };
  draw();
}
// ---------- Instagram ----------
const IGI = {
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
  heartF: '<svg viewBox="0 0 24 24" style="fill:#ff3040;stroke:#ff3040"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
  com: '<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-3.3-6.5L21 4l-1.4 4.4A8 8 0 0 1 20 12z"/></svg>',
  send: '<svg viewBox="0 0 24 24"><path d="M4 12l16-8-6 16-2-6z"/></svg>',
  bm: '<svg class="bm" viewBox="0 0 24 24"><path d="M6 3h12v18l-6-5-6 5z"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/></svg>',
  reels: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M3 8h18M8 3l3 5M13 3l3 5M10 12v5l4-2.5z"/></svg>',
  add: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>',
};
S.igSeen = store.get('igSeen', {}); S.liked = store.get('liked', {});
const ago = (t) => { const m = (now() - t) / 6e4; return m < 60 ? `${Math.max(1, m | 0)} menit` : m < 1440 ? `${(m / 60) | 0} jam` : m < 10080 ? `${(m / 1440) | 0} hari` : `${t.getDate()} ${BULAN[t.getMonth()]}`; };
const igPerson = (u) => (PROFILES[u] || {}).person;
const igAv = (u, cls = 'sm rd') => av(igPerson(u), cls);
function activeStories() {
  const live = STORIES.map(s => ({ ...s, t: new Date(s.ts) })).filter(s => visible(s.t) && now() - s.t < 864e5 && (!s.epi || epiIs(s.epi)) && (!s.end || endKey() === s.end));
  const users = [...new Set(live.sort((a, b) => b.t - a.t).map(s => s.user))];
  const groups = users.map(u => ({ user: u, items: live.filter(s => s.user === u).sort((a, b) => a.t - b.t) }));
  groups.forEach(g => { g.seen = g.items.every(s => S.igSeen[s.user + s.ts]); g.cf = g.items.some(s => s.cf); });
  return groups.sort((a, b) => a.seen - b.seen);
}
// semua postingan satu akun: postingan feed (berwaktu) + grid lama
function userPosts(u) {
  const P = PROFILES[u]; const feed = igVisible().filter(p => p.user === u);
  const used = new Set(feed.map(p => p.img));
  const caps = ['🫶', '.', 'hari ini', '📸', 'lagi', 'ok', '✌️', 'ngantuk', '☁️', 'hmm', 'wkwk', '🌙'];
  const old = P.posts.filter(img => !used.has(img)).map((img, i) => ({ user: u, img, t: new Date(2026, 9, 17 - i * 9 - (u.length % 4), 20, 10), cap: caps[(i + u.length) % caps.length], likes: `${60 + ((i * 37 + u.length * 13) % 300)}` }));
  return [...feed, ...old].sort((a, b) => b.t - a.t);
}
const igVisible = () => INSTA.map(p => ({ ...p, t: new Date(p.ts) })).filter(p => visible(p.t) && (!p.end || endKey() === p.end) && (!p.epi || (EPI && epiIs(p.epi))));
// video di feed/reels: muter sendiri, tanpa suara, kayak IG
const vidHTML = (src) => `<video class="ph-img" src="${src}" muted loop playsinline autoplay preload="metadata" poster="${vidPoster(src)}"></video><span class="reelic">${IGI.reels}</span>`;
function postHTML(p, k) {
  const liked = S.liked[p.user + p.img];
  return `<div class="post"><div class="phd" data-u="${p.user}">${igAv(p.user)}<span>${esc(p.user)}</span></div><div class="img${p.reel ? ' reelimg' : ''}" data-k="${k}">${p.reel ? vidHTML(p.img) : im(p.img)}<div class="bigheart">${IGI.heartF}</div></div><div class="acts"><span class="lk" data-k="${k}">${liked ? IGI.heartF : IGI.heart}</span><span class="cm" data-cm="${p.user}@${p.ts}">${IGI.com}</span>${IGI.send}${IGI.bm}</div><div class="cap"><b>${esc(p.likes)} suka</b><br><b data-u="${p.user}">${esc(p.user)}</b> ${esc(p.cap || '')}</div>${igComHTML(p)}<div class="tm">${now() - p.t < 6048e5 ? ago(p.t) + ' yang lalu' : ago(p.t)}</div></div>`;
}
// kolom ketik buat IG/X (markup sama kayak chat, biar typeOut kepake)
const typeBar = (ph) => `<div class="qr" style="display:none"></div><div class="kinput socin"><div class="f" role="button" data-ph="${esc(ph)}"></div><button class="snd"><svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg></button></div>`;
function wireTypeBar(el, ph, next, onSent) {
  const inp = el.querySelector('.socin .f');
  Object.defineProperty(inp, 'value', { get() { return this.textContent; }, set(v) { this.textContent = v; } });
  Object.defineProperty(inp, 'placeholder', { get() { return this.dataset.ph; }, set(v) { this.dataset.ph = v; } });
  const sync = () => { if (!el.dataset.typing) inp.placeholder = next() ? ph : 'Kino lagi gak mau bales'; };
  inp.onclick = () => { const l = next(); if (!l) return; typeOut(el, l[0], () => { onSent(l); sync(); }); };
  sync(); return sync;
}
S.soc = store.get('soc', {});
const socPush = (key, u, t) => { (S.soc[key] = S.soc[key] || []).push([u, t, now().getTime()]); store.set('soc', S.soc); };
const socAdd = (key, u, t, delay = 0) => delay ? setTimeout(() => socPush(key, u, t), delay) : socPush(key, u, t);
const socUsed = (key) => (S.soc[key] || []).filter(([u]) => u === 'kinoo.lee' || u === 'kino').length;
// komentar IG
const igComs = (p) => (typeof IG_COMMENTS !== 'undefined' && IG_COMMENTS[p.user + '@' + p.ts]) || [];
function igComHTML(p) {
  const cs = [...igComs(p), ...((S.soc[p.user + '@' + p.ts]) || [])]; if (!cs.length) return '';
  return `<div class="igcom">${cs.length > 2 ? `<div class="igall" data-cm="${p.user}@${p.ts}">Lihat semua ${cs.length} komentar</div>` : ''}${cs.slice(0, 2).map(([u, t]) => `<div><b data-u="${u}">${esc(u)}</b> ${esc(t)}</div>`).join('')}</div>`;
}
// Kino komen/bales postingan Kris cuma pas lagi baik2 aja: sebelum minggu ini kerasa aneh (20 Okt 18.52), atau udah baikan (maafin, 25 Okt)
const WEEK0 = '2026-10-20'; // mulai minggu cerita: bales/komen Kino harus sesuai postingannya
const kinoMute = () => { const n = now(); return (n >= new Date('2026-10-24T13:50') && n < new Date('2026-10-24T20:38')) || (n >= INTV[0] && n < INTV[1]); }; // abis foto aldrea s/d bangun di klinik, & pas interview: ga bales siapa2
const krisSocialOk = () => now() < new Date('2026-10-20T18:52') || (endKey() === 'maafin' && now() >= BDAY);
// baris buat postingan ini: yg khusus urut, yg umum mulai dari titik beda tiap postingan (biar ga "kerja jun" mulu)
const pickLine = (key, pool) => { const used = socUsed(key), spec = KINO_POST_LINES[key] || KINO_POST_LINES['ig:' + key]; if (spec || !pool.length) return pool[used] || null; if (used) return null;
  let h = 0; for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return pool[h % pool.length]; };
// balesan Kino yg udah terlanjur dikirim pemain tapi ga nyambung (ke Kris pas lagi dingin, atau asal giliran di postingan minggu ini): dihapus, biar bisa dibales ulang
{
  const bad = (t) => t >= new Date('2026-10-20T18:52').getTime() && !(endKey() === 'maafin' && t >= BDAY.getTime()); let ch = false;
  Object.keys(S.soc).forEach(key => {
    const x = key.startsWith('x:'), p = x ? X_POSTS.find(q => q[0] === key.slice(2)) : null, [owner, pts] = x ? (p ? [p[1], p[2]] : []) : key.split('@'); if (!owner) return;
    const mine = S.soc[key].filter(([u]) => u === 'kino' || u === 'kinoo.lee'); if (!mine.length) return;
    const spec = KINO_POST_LINES[x ? key : 'ig:' + key], kris = owner === 'kris' || owner === 'kris.chandra';
    const wrong = (kris && mine.some(([, , t]) => bad(t))) || (pts >= WEEK0 && !(spec && mine.every(([, t]) => spec.some(l => l[0] === t))));
    if (wrong) { delete S.soc[key]; ch = true; }
  });
  if (ch) store.set('soc', S.soc);
}
function openComments(key) {
  const [user, ts] = key.split('@'); const p = INSTA.find(x => x.user === user && x.ts === ts); if (!p) return;
  const t0 = new Date(p.ts); const cs = [...igComs(p), ...(S.soc[key] || [])];
  const row = ([u, t, ts], i) => `<div class="igc-row" data-u="${u}">${igAv(u)}<div><b>${esc(u)}</b> ${esc(t)}<small>${ts ? 'baru saja' : ago(new Date(t0.getTime() + (i + 1) * 17 * 6e4))} · Balas</small></div><span class="igc-h">${IGI.heart}</span></div>`;
  const el = win({ cls: 'igapp igcoms', title: 'Komentar', back: '', sub: true, body: `<div class="igc-row cap0">${igAv(p.user)}<div><b>${esc(p.user)}</b> ${esc(p.cap || '')}<small>${ago(t0)}</small></div></div>${cs.map(row).join('')}`,
    footer: typeBar('Tambahkan komentar untuk ' + p.user + '...') });
  el.querySelectorAll('[data-u]').forEach(r => r.onclick = () => openProfile(r.dataset.u));
  const pool = KINO_POST_LINES['ig:' + key] || (p.ts >= WEEK0 || igComs(p).some(c => c[0] === 'kinoo.lee') ? [] : IG_KINO_LINES[p.user] || []); // minggu ini: komen sesuai postingannya, ga ada = Kino ga komen
  const next = () => EPI || kinoMute() || (p.user === 'kris.chandra' && !krisSocialOk()) ? null : pickLine(key, pool);
  const body = el.querySelector('.body');
  const wireRows = () => { el.querySelectorAll('[data-u]').forEach(r => r.onclick = () => openProfile(r.dataset.u)); el.querySelectorAll('.igc-h').forEach(h0 => h0.onclick = (e) => { e.stopPropagation(); h0.classList.toggle('on'); h0.innerHTML = h0.classList.contains('on') ? IGI.heartF : IGI.heart; }); };
  const add = (u, t) => { socPush(key, u, t); if (!el.isConnected) return; body.insertAdjacentHTML('beforeend', row([u, t, now().getTime()])); wireRows(); body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' }); };
  const sync = wireTypeBar(el, 'Ketuk buat komentar', next, (l) => { add('kinoo.lee', l[0]); if (l[1]) setTimeout(() => { add(p.user, l[1]); sync(); }, 3500); });
  wireRows();
}
function wirePosts(el, list) {
  el.querySelectorAll('[data-cm]').forEach(b => b.onclick = (e) => { e.stopPropagation(); openComments(b.dataset.cm); });
  el.querySelectorAll('[data-u]').forEach(b => b.onclick = (e) => { e.stopPropagation(); openProfile(b.dataset.u); });
  const like = (k, force) => { const p = list[k]; const key = p.user + p.img; S.liked[key] = force || !S.liked[key]; store.set('liked', S.liked); el.querySelector(`.lk[data-k="${k}"]`).innerHTML = S.liked[key] ? IGI.heartF : IGI.heart; };
  el.querySelectorAll('.lk').forEach(b => b.onclick = () => like(+b.dataset.k));
  el.querySelectorAll('.img[data-k]').forEach(b => b.ondblclick = () => { like(+b.dataset.k, true); const hh = b.querySelector('.bigheart'); hh.classList.remove('go'); void hh.offsetWidth; hh.classList.add('go'); });
}
const igTabs = (on) => `<div class="igbar">${[['home', IGI.home], ['search', IGI.search], ['add', IGI.add], ['reels', IGI.reels], ['me', `<div class="igme">${av('Kino', 'rd')}</div>`]].map(([k, ic]) => `<button data-tab="${k}" class="${on === k ? 'on' : ''}">${ic}</button>`).join('')}</div>`;
function wireTabs(el) { el.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { if (b.dataset.tab === 'reels') return openReels(); if (b.dataset.tab === 'me') openProfile('kinoo.lee'); if (b.dataset.tab === 'home' && el.dataset.igroot !== '1') { while (topL() && topL().dataset.igroot !== '1') pop(); } }); }
function storyRow() {
  const groups = activeStories();
  return `<div class="stories"><div class="story" data-s="kinoo.lee"><div class="ring seen none"><div>${av('Kino', 'rd')}</div><b class="plus">+</b></div><span>Cerita Anda</span></div>${groups.map(g => `<div class="story" data-s="${g.user}"><div class="ring ${g.seen ? 'seen' : ''} ${g.cf && !g.seen ? 'cf' : ''}"><div>${igAv(g.user, 'rd')}</div></div><span>${esc(g.user)}</span></div>`).join('')}</div>`;
}
// tab Reels: video2 yg udah keluar, terbaru di atas, geser ke bawah
function openReels() {
  clue('reels');
  const list = igVisible().filter(p => p.reel).sort((a, b) => b.t - a.t);
  const el = win({ cls: 'igapp reels', title: 'Reels', back: '', sub: true, body: list.length ? list.map((p, k) => `<div class="reel">${`<video src="${p.img}" muted loop playsinline preload="metadata" poster="${vidPoster(p.img)}"></video>`}<div class="reel-cap"><b data-u="${p.user}">${igAv(p.user)} ${esc(p.user)}</b><p>${esc(p.cap || '')}</p><small>♥ ${esc(p.likes || '')} · <span data-cm="${p.user}@${p.ts}">komentar</span></small></div></div>`).join('') : '<div class="xempty">Belum ada reels</div>', footer: igTabs('reels') });
  const vids = [...el.querySelectorAll('.reel video')];
  const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) e.target.play().catch(() => {}); else e.target.pause(); }), { root: el.querySelector('.body'), threshold: 0.6 });
  vids.forEach(v => { io.observe(v); v.onclick = () => { v.muted = !v.muted; }; });
  el.querySelectorAll('[data-cm]').forEach(b => b.onclick = (e) => { e.stopPropagation(); openComments(b.dataset.cm); });
  el.querySelectorAll('[data-u]').forEach(b => b.onclick = (e) => { e.stopPropagation(); openProfile(b.dataset.u); });
  wireTabs(el);
}
function appInsta() {
  const posts = igVisible().sort((a, b) => b.t - a.t);
  const el = win({ cls: 'insta', title: '<span class="logo">Instagram</span>', act: IGI.heart + IGI.send, body: storyRow() + posts.map(postHTML).join(''), footer: igTabs('home') });
  el.dataset.igroot = '1';
  el.querySelector('.back').remove();
  { const ic = el.querySelectorAll('.nav .act svg'); if (ic[0]) ic[0].onclick = igActivity; if (ic[1]) ic[1].onclick = igDMs; }
  wirePosts(el, posts); wireTabs(el); wireStories(el);
}
function wireStories(el) {
  el.querySelectorAll('[data-s]').forEach(b => b.onclick = () => { const u = b.dataset.s; if (activeStories().some(g => g.user === u)) openStories(u); else if (u !== 'kinoo.lee') openProfile(u); });
}
function krisActive() {
  const t = now();
  if (t >= new Date('2026-10-23T00:00') && !S.fightDone) return `Aktif ${2 + (t.getMinutes() % 7)} menit yang lalu`;
  if (S.fightDone && t < BDAY) return 'Aktif sekarang';
  return `Aktif ${1 + (t.getHours() % 3)} jam yang lalu`;
}
function openProfile(u) {
  const P = PROFILES[u]; if (!P) return;
  const posts = userPosts(u); const hasStory = activeStories().find(g => g.user === u);
  const me = u === 'kinoo.lee';
  const el = win({ cls: 'insta igprof', title: `<b>${esc(u)}</b>`, back: '', sub: true, body: `
    <div class="ph-top"><div class="ph-av ${hasStory ? (hasStory.seen ? 'seen' : 'live') : ''}" data-s="${u}">${av(P.person, 'rd')}</div>
      <div class="ph-stats"><div><b>${posts.length}</b>postingan</div><div><b>${P.followers}</b>pengikut</div><div><b>${P.following}</b>mengikuti</div></div></div>
    <div class="ph-bio"><b>${esc(P.name)}</b><br>${esc(P.bio)}${u === 'kris.chandra' ? `<div class="ph-act">● ${krisActive()}</div>` : ''}</div>
    <div class="ph-btns">${me ? '<button>Edit profil</button><button>Bagikan profil</button>' : '<button class="on">Mengikuti ⌄</button><button>Kirim pesan</button>'}</div>
    <div class="ph-tabs"><span class="on">${IGI.grid}</span><span><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="12" cy="11" r="3"/><path d="M7 19c1-3 9-3 10 0"/></svg></span></div>
    <div class="ph-grid">${posts.map((p, i) => `<div class="ptile" data-i="${i}">${imT(p.img)}</div>`).join('')}</div>`, footer: igTabs(me ? 'me' : '') });
  el.querySelector('.ph-av').onclick = () => { if (hasStory) openStories(u); };
  el.querySelectorAll('.ptile').forEach(t => t.onclick = () => openPostList(u, posts, +t.dataset.i));
  wireTabs(el);
}
function openPostList(u, posts, i) {
  const el = win({ cls: 'insta', title: `<span style="font-size:13px;color:#8e8e93;display:block;font-weight:400">${esc(u)}</span>Postingan`, back: '', sub: true, body: posts.map(postHTML).join(''), footer: igTabs('') });
  wirePosts(el, posts); wireTabs(el);
  setTimeout(() => { const t = el.querySelectorAll('.post')[i]; if (t) el.querySelector('.body').scrollTop = t.offsetTop - 100; }, 30);
}
function openStories(startUser) {
  const groups = activeStories(); let gi = Math.max(0, groups.findIndex(g => g.user === startUser)); let si = 0; let timer = null, t0 = 0;
  const el = h(`<div class="storyv" data-nostatus="1" data-modal="1"><div class="sv-img"></div><div class="sv-bars"></div><div class="sv-head"></div><button class="sv-x">✕</button><div class="sv-txt"></div><div class="sv-foot"><div class="sv-in">Kirim pesan</div>${IGI.heart}${IGI.send}</div><div class="sv-l"></div><div class="sv-r"></div></div>`);
  const close = () => { clearInterval(timer); el.remove(); syncChrome(); const t = topL(); if (t && t.querySelector('.stories')) { t.querySelector('.stories').outerHTML = storyRow(); wireStories(t); } };
  const show = () => {
    const g = groups[gi]; if (!g) return close(); const s = g.items[si];
    S.igSeen[s.user + s.ts] = 1; store.set('igSeen', S.igSeen);
    if (s.gone) clue('cf-story'); el.querySelector('.sv-img').innerHTML = s.gone ? '<div class="sv-gone">Story ini tidak tersedia lagi</div>' : im(s.img);
    el.querySelector('.sv-txt').textContent = s.txt || ''; el.querySelector('.sv-txt').style.display = s.txt ? '' : 'none';
    el.querySelector('.sv-bars').innerHTML = g.items.map((_, k) => `<i><b style="width:${k < si ? 100 : 0}%"></b></i>`).join('');
    el.querySelector('.sv-head').innerHTML = `${igAv(g.user)}<b>${esc(g.user)}</b><span>${ago(s.t)}</span>`;
    el.querySelector('.sv-head').onclick = () => { close(); openProfile(g.user); };
    t0 = Date.now();
  };
  const next = () => { const g = groups[gi]; if (si < g.items.length - 1) si++; else { gi++; si = 0; } show(); };
  const prev = () => { if (si > 0) si--; else if (gi > 0) { gi--; si = 0; } show(); };
  el.querySelector('.sv-r').onclick = next; el.querySelector('.sv-l').onclick = prev; el.querySelector('.sv-x').onclick = close;
  el.querySelector('.sv-in').onclick = (e) => { e.stopPropagation(); const g = groups[gi]; if (!g) return; storyReply(g.user, g.items[si], el.querySelector('.sv-in')); t0 = Date.now(); };
  timer = setInterval(() => { if (!el.isConnected) return clearInterval(timer); const p = Math.min(100, (Date.now() - t0) / 50); const bar = el.querySelectorAll('.sv-bars b')[si]; if (bar) bar.style.width = p + '%'; if (p >= 100) next(); }, 50);
  push(el); show();
}
// Claude: tempat Kino curhat (riwayat ngikut jam + pertanyaan yg bisa diketuk pemain)
const klodVis = () => KLOD.filter(c => (!c.end || endKey() === c.end) && (!c.epi || endKey() === c.epi)).map(c => ({ ...c, vis: c.msgs.filter(m => visible(new Date(m[0]))) })).filter(c => c.vis.length);
function appAI() {
  const extra = store.get('klodAsk', []);
  const list = [...klodVis(), ...(extra.length ? [{ title: 'obrolan baru', vis: extra, mine: true }] : [])].sort((a, b) => new Date(b.vis[b.vis.length - 1][0]) - new Date(a.vis[a.vis.length - 1][0]));
  const el = win({ cls: 'aiapp', title: 'Claude', back: '', body: `<div class="ai-h">Obrolan</div>${list.map((c, i) => `<div class="ai-row" data-i="${i}"><b>${esc(c.title)}</b><span>${relDay(new Date(c.vis[c.vis.length - 1][0]))}</span></div>`).join('') || '<div class="xempty">Belum ada obrolan</div>'}`, footer: '<div class="ai-new">+ Obrolan baru</div>' });
  el.querySelector('.back').style.visibility = 'hidden';
  el.querySelectorAll('[data-i]').forEach(r => r.onclick = () => aiThread(list[+r.dataset.i]));
  el.querySelector('.ai-new').onclick = () => aiThread({ title: 'obrolan baru', vis: store.get('klodAsk', []), mine: true });
}
// markdown kecil ala Claude: paragraf, list, **tebal**, `kode`, ```blok```
function aiMd(t) {
  const inl = (x) => esc(x).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<code>$1</code>');
  return t.split(/```\n?/).map((part, i) => i % 2 ? `<pre>${esc(part.replace(/\n$/, ''))}</pre>` : part.split(/\n{2,}/).map(x => x.trim()).filter(Boolean).map(blk => {
    const ls = blk.split('\n');
    if (ls.every(l => /^- /.test(l))) return `<ul>${ls.map(l => `<li>${inl(l.slice(2))}</li>`).join('')}</ul>`;
    if (ls.every(l => /^\d+\. /.test(l))) return `<ol>${ls.map(l => `<li>${inl(l.replace(/^\d+\. /, ''))}</li>`).join('')}</ol>`;
    if (ls.length > 1 && !/^- /.test(ls[0]) && ls.slice(1).every(l => /^- /.test(l))) return `<p>${inl(ls[0])}</p><ul>${ls.slice(1).map(l => `<li>${inl(l.slice(2))}</li>`).join('')}</ul>`;
    return `<p>${ls.map(inl).join('<br>')}</p>`;
  }).join('')).join('');
}
function aiThread(c) {
  if (/disayang/i.test(c.title || '')) clue('claude-lift');
  const star = ICONS.ai;
  const body = c.vis.map(([, who, t]) => who === 'me' ? `<div class="ai-me">${esc(t)}</div>` : `<div class="ai-bot"><i>${star}</i><div class="ai-md">${aiMd(t)}</div></div>`).join('') || '<div class="ai-hello"><i>' + star + '</i><p>Ada yang bisa aku bantu, Kino?</p></div>';
  const el = win({ cls: 'aiapp', title: esc(c.title), back: '', sub: true, body: `<div class="ai-list">${body}</div>`, footer: c.mine ? typeBar('Ketuk buat nanya') : '<div class="dmfoot">obrolan lama</div>' });
  const b = el.querySelector('.body'); setTimeout(() => b.scrollTop = b.scrollHeight, 50);
  if (!c.mine) return;
  const next = () => EPI ? null : KLOD_ASK[store.get('klodAsk', []).filter(m => m[1] === 'me').length] || null;
  const list = el.querySelector('.ai-list');
  const show = (who, t) => { const a = store.get('klodAsk', []); a.push([tsLocal(now()), who, t]); store.set('klodAsk', a); if (!el.isConnected) return;
    const hi = list.querySelector('.ai-hello'); if (hi) hi.remove();
    list.insertAdjacentHTML('beforeend', who === 'me' ? `<div class="ai-me">${esc(t)}</div>` : `<div class="ai-bot"><i>${star}</i><div class="ai-md">${aiMd(t)}</div></div>`); b.scrollTo({ top: b.scrollHeight, behavior: 'smooth' }); };
  const sync = wireTypeBar(el, 'Ketuk buat nanya', next, (l) => { show('me', l[0]); setTimeout(() => { show('ai', l[1]); sync(); }, 2200); });
}
// ===== Lacak: titik Kris di peta, ngga ada yg ngomong apa2 =====
const locAt = (arr, t = now()) => { let c = arr[0]; for (const e of arr) { if (e[2] && endKey() !== e[2]) continue; if (new Date(e[0]) <= t) c = e; else break; } return c; };
const kmBetween = (a, b) => Math.hypot(a.x - b.x, a.y - b.y) * 0.075;
function findMap(pk, pm) {
  const pin = (p, who, cls) => `<g transform="translate(${p.x} ${p.y})" class="fm-pin ${cls}"><circle r="15" fill="#fff"/><foreignObject x="-12.5" y="-12.5" width="25" height="25">${av(who, 'rd fm-av')}</foreignObject></g>`;
  const off = pk && Math.hypot(pk.x - pm.x, pk.y - pm.y) < 8 ? 9 : 0; // deket banget: pin digeser biar ga numpuk
  return `<svg class="fm-map" viewBox="0 -50 320 340" preserveAspectRatio="xMidYMid slice">
    <rect y="-50" width="320" height="340" fill="#f2efe6"/>
    <path d="M0 150 C60 140 90 196 150 182 S240 120 320 132 L320 158 C250 150 220 210 150 210 S70 168 0 176z" fill="#a9d3f5"/>
    <g stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"><path d="M10 60 L310 90"/><path d="M120 -50 L150 290"/><path d="M0 110 L320 100"/><path d="M230 -50 L250 290"/><path d="M40 -50 L80 290"/><path d="M0 250 L320 236"/><path d="M0 10 L320 0"/></g>
    <g fill="#d9ecd0"><rect x="180" y="40" width="40" height="28" rx="6"/><rect x="20" y="200" width="36" height="26" rx="6"/><rect x="270" y="170" width="38" height="40" rx="6"/></g>
    <g font-size="7" fill="#8e8e93" font-family="system-ui"><text x="26" y="70">Mapo</text><text x="40" y="196">Yeouido</text><text x="150" y="140">Yongsan</text><text x="244" y="108">Seongsu</text><text x="200" y="198">Sungai Han</text></g>
    <g transform="translate(${pm.x - off} ${pm.y})" class="fm-pin me"><circle r="14" fill="#0a84ff" fill-opacity=".16"><animate attributeName="r" values="11;16;11" dur="2.4s" repeatCount="indefinite"/></circle><circle r="7.5" fill="#fff"/><circle r="5.5" fill="#0a84ff"/></g>${pk ? pin({ x: pk.x + off, y: pk.y }, 'Kris', 'kr') : ''}
  </svg>`;
}
const krisSharing = () => { let on = true, at = null; SHARE_KRIS.slice().sort((x, y) => x[0] < y[0] ? -1 : 1).forEach(([ts, v, e]) => { if ((!e || endKey() === e) && visible(new Date(ts))) { on = v; at = new Date(ts); } }); return { on, at }; };
// widget Lacak 2x2 di home: titik Kris kelihatan tanpa buka app
function findWidgetInner() {
  const sh = krisSharing(), [ks, kk] = locAt(LOC_KRIS), [, mk] = locAt(LOC_KINO), pk = sh.on ? PLACES[kk] : null;
  const km = pk ? kmBetween(pk, PLACES[mk]) : 0;
  return `<div class="fmw-map"><svg viewBox="0 0 160 160" preserveAspectRatio="xMidYMid slice"><rect width="160" height="160" fill="#f2efe6"/><path d="M0 92 C40 84 60 118 100 108 S140 80 160 86 L160 104 C130 100 110 128 90 128 S30 106 0 112z" fill="#a9d3f5"/><g stroke="#fff" stroke-width="4" fill="none"><path d="M0 40 L160 52"/><path d="M58 0 L72 160"/><path d="M118 0 L126 160"/></g></svg>
    <div class="fmw-pin${pk ? '' : ' off'}">${av('Kris', 'rd')}</div></div>
    <div class="fmw-t"><b>${esc(dispName('Kris'))}</b><span>${pk ? esc(pk.n) : 'Lokasi tidak tersedia'}</span><small>${pk ? (kk === 'jalan' ? 'Sekarang' : km < 0.1 ? 'Di dekat kamu' : km.toFixed(1).replace('.', ',') + ' km') : ''}</small></div>`;
}
const findWidget = () => `<button class="app fmw" data-app="find"><div class="fmw-box">${findWidgetInner()}</div><div class="lbl">Lacak</div></button>`;
// petunjuk yg udah ditemuin pemain (buat daftar x/20 di kartu ending)
function clue(id) { try { if (EPI) return; /* di HP epilog koleksinya udah ditutup */ const c = store.get('clues', []); if (c.includes(id)) return; c.push(id); store.set('clues', c); const k = CLUES.find(x => x[0] === id); if (k && S.unlocked) setTimeout(() => toast({ icon: ICONS.music, title: '🤫 Secret Secret', body: `${k[1]}  (${secretCount()}/${CLUES.length})`, ms: 3500 }), 700); if (k && secretCount() === CLUES.length && S.unlocked) setTimeout(secretReminder, 4600); } catch (e) {} }
// 17/17: pengingat yg "disetel Kino sendiri", tap = buka catatannya. muncul lagi tiap buka app selama belum dibaca
function secretReminder() {
  if (!S.unlocked || secretCount() < CLUES.length || store.get('secretRead', false)) return;
  toast({ icon: ICONS.notes, title: 'Pengingat', body: '📝 kalo ga keucap · baca lagi sebelum tgl 25', ms: 9000, onClick: () => openApp('notes', 'secret') });
}
setTimeout(() => { if (S.unlocked) secretReminder(); else { const w = setInterval(() => { if (S.unlocked) { clearInterval(w); setTimeout(secretReminder, 2500); } }, 1500); } }, 4000);
// pemain lama: rahasia yg udah keliatan sebelum Secret Secret dipasang ikut kecatat (sebisanya dari jejak yg kesimpen)
function backfillClues() {
  try {
    const c = store.get('clues', []), add = (id) => { if (!c.includes(id)) c.push(id); };
    if (store.get('draftsSeen', []).length) add('draft');
    const sh = store.get('shareSeen', []); if (sh.includes('2026-10-22T22:40')) add('lacak-off'); if (sh.includes('2026-10-24T18:25')) add('lacak-klinik');
    const ig = store.get('igSeen', {}); if (Object.keys(ig).some(k => k.startsWith('kris.chandra2026-10-22T22:40'))) add('cf-story');
    const op = store.get('opened', {}), seenMsg = (id, re) => { const ch = CHATS.find(x => x.id === id); if (!ch || op[id] == null) return false; const ms = msgsOnly(ch), i = ms.findIndex(m => re.test(m.text || '')); return i >= 0 && i <= op[id]; };
    if (seenMsg('nonton', /Perangkat baru/)) add('nontonflix'); if (seenMsg('bagas', /dia cuti dari kemaren/)) add('bagas-cuti');
    store.set('clues', c);
  } catch (e) {}
}
setTimeout(backfillClues, 1500);
// daftar playlist buat kartu ending
const secretCount = () => { const got = store.get('clues', []); return CLUES.filter(c => got.includes(c[0])).length; };
const playlistHTML = () => { const got = store.get('clues', []); return `<div class="plist"><div class="ec-t">🤫 Secret Secret: ${secretCount()}/${CLUES.length}</div>${CLUES.map(([id, song, what, hint]) => got.includes(id) ? `<div class="pl on"><b>♪ ${esc(song)}</b><small>${esc(what)}</small></div>` : `<div class="pl"><b>▶ ???</b><small>${esc(hint)}</small></div>`).join('')}</div>`; };
function appFind() {
  { const sh0 = krisSharing(), k0 = locAt(LOC_KRIS)[1]; if (!sh0.on) clue('lacak-off'); else if (['ramen', 'yongsan', 'itaewon', 'seongsu'].includes(k0)) clue('lacak-boong'); else if (k0 === 'klinik') clue('lacak-klinik'); }
  const sh = krisSharing(), [ks, kk] = locAt(LOC_KRIS), [, mk] = locAt(LOC_KINO), pk = sh.on ? PLACES[kk] : null, pm = PLACES[mk];
  const km = pk ? kmBetween(pk, pm) : 0, dist = km < 0.1 ? 'Di dekat kamu' : `${km.toFixed(1).replace('.', ',')} km`;
  const at = (d) => (d.toDateString() === now().toDateString() ? '' : relDay(d) + ' ') + hm(d);
  const since = new Date(Math.max(new Date(ks), sh.at && sh.on ? sh.at : 0)), sinceTxt = at(since);
  const krow = pk ? `<span>${esc(pk.n)}</span><small>${kk === 'jalan' ? 'Sekarang' : 'Di sini sejak ' + sinceTxt}</small></div><em>${dist}</em>` : `<span style="color:#8e8e93">Lokasi tidak tersedia</span><small>Berhenti berbagi lokasi dengan kamu · ${at(sh.at)}</small></div>`;
  const el = win({ cls: 'findapp', back: '', body: `${findMap(pk, pm)}
    <div class="fm-sheet"><div class="fm-grab"></div><div class="fm-h">Orang</div>
      <div class="fm-row" data-p="Kris">${av('Kris', 'rd')}<div class="rt"><b>${esc(dispName('Kris'))}</b>${krow}</div>
      <div class="fm-row">${av('Kino', 'rd')}<div class="rt"><b>Aku</b><span>${esc(pm.n)}</span><small>Berbagi dengan Kris</small></div></div>
    </div>` });
  el.querySelector('.back').style.visibility = 'hidden';
  el.querySelector('[data-p="Kris"]').onclick = () => win({ cls: 'findapp', sub: true, back: 'Orang', title: esc(dispName('Kris')), body: `${findMap(pk, pm)}<div class="fm-sheet"><div class="fm-h">${esc(dispName('Kris'))}</div>${pk ? `<div class="fm-addr">${esc(pk.n)}<br><span>${esc(pk.a)}</span><br><span>${kk === 'jalan' ? 'Sekarang' : 'Sejak ' + sinceTxt} · ${dist}</span></div>` : `<div class="fm-addr">Lokasi tidak tersedia<br><span>${esc(dispName('Kris'))} berhenti berbagi lokasi dengan kamu.</span></div>`}<div class="list fm-acts">${pk ? '<div class="row"><div class="rt"><div class="r1" style="color:#007aff">Petunjuk Arah</div></div></div>' : '<div class="row"><div class="rt"><div class="r1" style="color:#007aff">Minta Lokasi</div></div></div>'}<div class="row"><div class="rt"><div class="r1" style="color:#007aff">Beri Tahu Saya</div></div></div><div class="row"><div class="rt"><div class="r1" style="color:#ff3b30">Berhenti Berbagi Lokasi Saya</div></div></div></div></div>` });
}
// notif pas Kris matiin / nyalain lagi share lokasinya (sekali, kalau baru < 10 menit)
function findNotice() {
  if (!S.unlocked) return; const seen = store.get('shareSeen', []);
  SHARE_KRIS.forEach(([ts, on, e]) => { const d = new Date(ts); if ((e && endKey() !== e) || seen.includes(ts) || !visible(d) || now() - d > 10 * 60000) return; seen.push(ts); store.set('shareSeen', seen);
    toast({ icon: ICONS.find, title: 'Lacak', body: `${dispName('Kris')} ${on ? 'mulai berbagi lokasi dengan kamu' : 'berhenti berbagi lokasi dengan kamu'}`, ms: 5000 }); });
}
// ===== Kesehatan =====
// ===== Kesehatan: data per tanggal (YYYY-MM-DD). abis tgl 25 ikut ending =====
const dKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const healthOf = (k) => { if (k.startsWith('2026-10-') && HEALTH[+k.slice(8)] && k <= '2026-10-25') return HEALTH[+k.slice(8)]; const e = endKey(); return e && HEALTH_AFTER[e] ? HEALTH_AFTER[e][k] : null; };
const hDay = (dt) => { const t = now(), v = healthOf(dKey(dt)); if (!v) return null; const today = dKey(dt) === dKey(t); const frac = today ? Math.max(0, Math.min(1, (t.getHours() * 60 + t.getMinutes() - 420) / 900)) : 1; return { steps: Math.round(v[0] * frac), sleep: today && t.getHours() < 6 ? null : v[1], hr: v[2] }; };
const hrs = (x) => `${Math.floor(x)}<small>j</small> ${Math.round((x % 1) * 60)}<small>m</small>`;
const lastDays = (n) => Array.from({ length: n }, (_, i) => { const d = new Date(now()); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() - (n - 1 - i)); return d; });
function appHealth() {
  if (now() >= new Date('2026-10-24T17:38')) clue('health');
  const t = now(), days = lastDays(7).filter(d => healthOf(dKey(d)));
  const cur = hDay(t) || { steps: 0, sleep: null, hr: 62 };
  const bars = (key, max, col) => `<div class="hc-bars">${days.map(x => { const v = hDay(x); const val = key === 'steps' ? v.steps : (v.sleep || 0); return `<div><i style="height:${Math.max(3, val / max * 100)}%;background:${col}"></i><span>${HARI[x.getDay()].slice(0, 1)}</span></div>`; }).join('')}</div>`;
  const notes = HEALTH_NOTE.filter(n => visible(new Date(n[0])) && (!n[2] || endKey() === n[2]) && t - new Date(n[0]) < 7 * 864e5).reverse();
  const hel = win({ cls: 'healthapp', big: 'Ringkasan', body: `
    ${notes.length ? `<div class="sectionh">Sorotan</div>${notes.map(([ts, x]) => `<div class="hcard"><div class="hc-t" style="color:#ff2d55">♥ ${relDay(new Date(ts))}</div><p>${esc(x)}</p></div>`).join('')}` : ''}
    <div class="sectionh">Favorit</div>
    <div class="hcard"><div class="hc-t" style="color:#ff9500">🔥 Langkah</div><div class="hc-v">${cur.steps.toLocaleString('id-ID')} <small>langkah</small></div>${bars('steps', 11000, '#ff9500')}</div>
    <div class="hcard"><div class="hc-t" style="color:#5e5ce6">🛏 Tidur</div><div class="hc-v">${cur.sleep == null ? '<small>Belum ada data</small>' : hrs(cur.sleep)}</div>${bars('sleep', 9, '#5e5ce6')}</div>
    <div class="hcard"><div class="hc-t" style="color:#ff2d55">♥ Detak Jantung Istirahat</div><div class="hc-v">${cur.hr} <small>BPM</small></div></div>` });
  hel.querySelector('.back').style.visibility = 'hidden';
}
// ===== Durasi Layar (Pengaturan). abis tgl 25 ikut ending; hari2 sebelumnya diturunin dikit2 biar grafiknya idup =====
const screenOf = (k) => { if (k.startsWith('2026-10-') && k <= '2026-10-25' && SCREEN[+k.slice(8)]) return SCREEN[+k.slice(8)]; const e = endKey(); if (!e || !SCREEN_AFTER[e] || k < '2026-10-26') return null; const base = SCREEN_AFTER[e], n = +k.slice(8) + (k.startsWith('2026-11') ? 31 : 0), w = 0.8 + ((n * 37) % 40) / 100; const o = {}; Object.entries(base).forEach(([a, m]) => o[a] = Math.round(m * w)); return o; };
function screenTime() {
  clue('screen');
  const t = now(), k = dKey(t), frac = Math.max(0.02, Math.min(1, (t.getHours() * 60 + t.getMinutes()) / 1440));
  const e = endKey(), after = k > '2026-10-25' && e && SCREEN_AFTER[e];
  const full = screenOf(k) || SCREEN[20];
  const today = Object.entries(full).map(([a, m]) => [a, Math.round(m * frac)]).sort((a, b) => b[1] - a[1]);
  const tot = today.reduce((a, b) => a + b[1], 0), fm = (m) => m >= 60 ? `${Math.floor(m / 60)}j ${m % 60}m` : `${m}m`;
  const week = lastDays(7).map(d => [d, dKey(d) === k ? tot : (screenOf(dKey(d)) ? Object.values(screenOf(dKey(d))).reduce((a, b) => a + b, 0) : null)]).filter(w => w[1] != null);
  const avg = Math.round(week.filter(w => dKey(w[0]) !== k).reduce((a, b) => a + b[1], 0) / Math.max(1, week.length - 1));
  const pick = after ? PICKUPS_AFTER[e] : (PICKUPS[t.getDate()] || 90), first = after ? FIRST_PICK[e] : 'KakaoTalk';
  win({ sub: true, back: 'Pengaturan', title: 'Durasi Layar', body: `<div class="list" style="padding:14px 16px"><div style="font-size:13px;color:var(--sub)">Hari ini</div><div style="font-size:30px;font-weight:700">${fm(tot)}</div>${week.length > 1 ? `<div style="font-size:13px;color:var(--sub)">Rata-rata harian ${fm(avg)}</div>` : ''}
    <div class="hc-bars st">${week.map(([d, m]) => `<div><i style="height:${Math.max(3, m / Math.max(...week.map(w => w[1])) * 100)}%;background:${dKey(d) === k ? '#007aff' : '#c7c7cc'}"></i><span>${d.getDate()}</span></div>`).join('')}</div></div>
    <div class="sectionh">Paling Banyak Digunakan</div><div class="list">${today.map(([a, m]) => `<div class="row"><div class="rt"><div class="r1">${esc(a)}<span>${fm(m)}</span></div><div class="st-bar"><i style="width:${m / today[0][1] * 100}%"></i></div></div></div>`).join('')}</div>
    <div class="sectionh">Diambil</div><div class="list"><div class="row"><div class="rt"><div class="r1">Total diambil hari ini<span>${Math.round(pick * frac)}×</span></div><div class="r2">Pertama diambil setelah bangun: ${first}</div></div></div></div>` });
}
function appClock() {
  const al = [['00.00', 'ulang tahun', 1], ['07.00', 'makan kucing', 1], ['09.15', 'standup', 1], ['09.00', 'Alarm', 0]];
  const el = win({ cls: 'dark-app', dark: false, back: '', act: '<span style="color:#ff9f0a;font-size:26px;font-weight:300">+</span>', body: `<div class="bigtitle">Alarm</div><div class="sectionh">Tidur | Bangun</div><div class="list" style="margin:0 16px 20px"><div class="row"><div class="rt" style="color:#8e8e93">Tidak Ada Alarm</div></div></div><div class="sectionh">Lainnya</div><div class="list">${al.map(([t, l, on]) => `<div class="row alarm"><div class="rt"><div class="at" style="${on ? '' : 'color:#8e8e93'}">${t}</div><div class="r2">${esc(l)}</div></div><i class="sw ${on ? '' : 'off'}"></i></div>`).join('')}</div>` });
  el.querySelector('.back').innerHTML = '<span style="color:#ff9f0a">Edit</span>';
}
function appWeather() {
  const w = weatherNow(); const hr = now().getHours();
  const icons = { cloud: '<svg viewBox="0 0 24 24"><path d="M7 18h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.4 2A3 3 0 0 0 7 18z" fill="#fff"/></svg>', rain: '<svg viewBox="0 0 24 24"><path d="M7 15h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.4 2A3 3 0 0 0 7 15z" fill="#fff"/><path d="M9 18l-1 3M13 18l-1 3M17 18l-1 3" stroke="#5ac8fa" stroke-width="1.6" stroke-linecap="round"/></svg>', moon: '<svg viewBox="0 0 24 24"><path d="M15 3a8 8 0 1 0 6 13A9 9 0 0 1 15 3z" fill="#fff"/></svg>' };
  const hours = Array.from({ length: 6 }, (_, i) => { const hh = (hr + i) % 24; return [i === 0 ? 'Skrg' : pad(hh), w.s.includes('Hujan') ? icons.rain : hh >= 19 || hh < 6 ? icons.moon : icons.cloud, w.t - (i > 2 ? 1 : 0)]; });
  if (w.s.includes('Hujan')) setTimeout(() => { const el = layersEl.querySelector('.win.weather'); if (el) ambWhile(el, 'rain'); }, 0);
  win({ cls: 'weather', dark: false, body: `<div class="wbig"><div class="c">Seoul</div><div class="t">${w.t}°</div><div class="s">${w.s}</div><div class="s">T:${w.hi}° R:${w.lo}°</div></div>
    <div class="wcard"><div class="wt">Prakiraan per jam</div><div class="wrow">${hours.map(([t, i, d]) => `<div><span>${t}</span>${i}<span>${d}°</span></div>`).join('')}</div></div>
    <div class="wcard"><div class="wt">Prakiraan 5 hari</div>${[['Hari ini', w.lo, w.hi], ['Rab', 6, 14], ['Kam', 6, 12], ['Jum', 5, 13], ['Sab', 4, 11]].map(([d, a, b]) => `<div style="display:flex;justify-content:space-between;padding:7px 0;font-weight:500"><span>${d}</span><span style="opacity:.7">${a}°  —  ${b}°</span></div>`).join('')}</div>` });
}
function appSettings() {
  const rows = [['#ff9500', 'Mode Pesawat', '', '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>'], ['#007aff', 'Wi-Fi', 'TowerB_4419', '<path d="M12 18.5l2.4-2.4a3.4 3.4 0 0 0-4.8 0zM7.2 13.7a6.8 6.8 0 0 1 9.6 0l1.7-1.7a9.2 9.2 0 0 0-13 0zM3.8 10.3a11.6 11.6 0 0 1 16.4 0l1.7-1.7a14 14 0 0 0-19.8 0z"/>'], ['#007aff', 'Bluetooth', 'Nyala', '<path d="M11 3l6 5-4.5 4 4.5 4-6 5v-7l-4 3.5-1-1L10 12 6 8.5l1-1 4 3.5z"/>'], ['#34c759', 'Seluler', '', '<path d="M5 17h3v4H5zM10 13h3v8h-3zM15 8h3v13h-3z"/>']];
  const rows2 = [['#ff3b30', 'Notifikasi', ''], ['#5856d6', 'Fokus', ''], ['#8e8e93', 'Umum', ''], ['#007aff', 'Tampilan & Kecerahan', ''], ['#34c759', 'Face ID & Kode Sandi', ''], ['#34c759', 'Baterai', `${Math.round(battery() * 100)}%`], ['#5856d6', 'Durasi Layar', '']].concat(I18N_ON ? [['#007aff', '🌐 Bahasa · Language', LANGS.find(x => x[0] === L)[2]]] : []);
  const r = (arr) => arr.map(([c, t, v, p]) => `<div class="row"><div class="sicon" style="background:${c}"><svg viewBox="0 0 24 24">${p || '<circle cx="12" cy="12" r="5"/>'}</svg></div><div class="rt"><div class="r1">${t}<span>${v}</span></div></div>${CHEV}</div>`).join('');
  // pilihan pemain (beneran ngaruh, bukan pajangan): layar penuh (cuma di HP) & getar
  const sw = (k, t, on, c, p) => `<div class="row" data-sw="${k}"><div class="sicon" style="background:${c}"><svg viewBox="0 0 24 24">${p}</svg></div><div class="rt"><div class="r1">${t}</div></div><i class="sw${on ? ' on' : ''}"></i></div>`;
  const opts = (canFull() ? sw('full', 'Layar Penuh', isFull(), '#8e8e93', '<path d="M4 9V4h5v2H6v3zm11-5h5v5h-2V6h-3zM4 15h2v3h3v2H4zm14 3v-3h2v5h-5v-2z"/>') : '') + sw('buzz', 'Getar', !store.get('noBuzz', false), '#ff2d55', '<path d="M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h6V5zM3 8h2v8H3zm16 0h2v8h-2z"/>');
  win({ big: 'Pengaturan', body: `<div class="list"><div class="row" style="padding:10px 16px">${av('Kino', 'rd')}<div class="rt"><div class="r1" style="font-size:20px">Kino</div><div class="r2" style="font-size:13px">Akun Apple, iCloud, dan lainnya</div></div>${CHEV}</div></div><div class="list">${r(rows)}</div><div class="list">${opts}</div><div class="list">${r(rows2)}</div>` });
  topL().querySelector('.back').remove();
  topL().querySelectorAll('[data-sw]').forEach(row => row.onclick = () => {
    const on = !row.querySelector('.sw').classList.contains('on'); row.querySelector('.sw').classList.toggle('on', on);
    if (row.dataset.sw === 'full') setFull(on); else { store.set('noBuzz', !on); if (on) buzz('notif'); }
  });
  [...topL().querySelectorAll('.row')].find(r => r.textContent.includes('Durasi Layar')).onclick = screenTime;
  const lr = [...topL().querySelectorAll('.row')].pop();
  if (I18N_ON) lr.onclick = () => { const sh = h(`<div class="sheet-bg"><div class="sheet"><div class="sh-t">Bahasa · Language</div>${LANGS.map(([k, f, n]) => `<div class="row" data-l="${k}"><div class="rt"><div class="r1">${f}  ${n}<span>${k === L ? '✓' : ''}</span></div></div></div>`).join('')}</div></div>`);
    topL().appendChild(sh); sh.onclick = (e) => { const r = e.target.closest('[data-l]'); if (r && r.dataset.l !== L) setLang(r.dataset.l); else sh.remove(); }; };
}
function appPhone() {
  const fav = ['Kris', 'Mama', 'Juna', 'Surya', 'Gemilang', 'Sadewa', 'Bagas', 'Ilham', 'Mina'];
  const calls = [...S.callLog.filter(c => c.t <= now().getTime()).map(c => ({ who: c.who, what: c.missed ? 'tak terjawab' : 'seluler', when: relDay(new Date(c.t)), out: c.out, missed: c.missed && !c.out, lines: c.lines, vmLines: c.vmLines, vm: c.missed && !c.out && !c.fight })), ...CALLS.map(c => ({ ...c, when: relDay(new Date(c.t)) }))];
  const el = win({ cls: 'notepage', big: 'Favorit', back: '', body: `<div style="margin:0 0 18px 16px">${fav.map(p => `<div class="row callrow" data-p="${p}" style="padding:8px 16px 8px 0">${av(p, 'sm rd')}<div class="rt"><div class="r1"><b style="font-weight:500">${esc(dispName(p))}</b></div><div class="r2" style="font-size:13px">seluler</div></div><span style="color:#007aff;font-size:20px">ⓘ</span></div>`).join('')}</div>
    <div class="bigtitle" style="font-size:24px">Terkini</div><div style="margin:0 0 0 16px">${calls.map((c, ci) => `<div class="row callrow" data-p="${c.who}" data-ci="${ci}" style="padding:10px 16px 10px 0"><div class="rt"><div class="r1"><b style="font-weight:600;${c.missed ? 'color:#ff3b30' : ''}">${esc(dispName(c.who))}${c.n ? ` (${c.n})` : ''}</b><span>${c.when}</span></div><div class="r2">${c.lines ? `<span class="replay">${c.vm ? '▶ pesan suara' : '▶ putar ulang'}</span>` : ''}${c.out ? '↗ ' : ''}${esc(c.what)}</div></div></div>`).join('')}</div>` });
  el.querySelector('.back').innerHTML = '<span>Edit</span>';
  el.querySelectorAll('.callrow').forEach(r => r.onclick = () => { const c = r.dataset.ci != null ? calls[+r.dataset.ci] : null; if (c && c.lines) callScreen({ who: c.who, dir: 'in', lines: c.vm ? (c.vmLines || c.lines.filter(l => l[0] === 't')) : c.lines, replay: true, voicemail: c.vm }); else callPerson(r.dataset.p); });
}
function appSafari() {
  clue('safari');
  const list = SAFARI.filter(([t, , , e]) => visible(new Date(t)) && (!e || epiIs(e) || (!EPI && endKey() === e))).sort((a, b) => new Date(b[0]) - new Date(a[0]));
  const groups = []; list.forEach(r => { const d = new Date(r[0]); const k = dayStart(d).getTime(); let g = groups.find(x => x.k === k); if (!g) groups.push(g = { k, d, items: [] }); g.items.push(r); });
  const today = dayStart(now()).getTime();
  const label = (g) => g.k === today ? 'Hari Ini' : g.k === today - 864e5 ? 'Kemarin' : `${HARI[g.d.getDay()]}, ${g.d.getDate()} ${BULAN[g.d.getMonth()]}`;
  win({ cls: 'safari', big: 'Riwayat', back: '', body: groups.map(g => `<div class="sfh">${label(g)}</div><div class="list">${g.items.map(([t, q, site]) => `<div class="row"><div class="sfic">${site === 'google.com' ? 'G' : site[0].toUpperCase()}</div><div class="rt"><div class="r1" style="font-size:16px">${esc(q)}</div><div class="r2" style="font-size:13px">${esc(site)} · ${hm(new Date(t))}</div></div></div>`).join('')}</div>`).join(''),
    footer: '<div class="sbar"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>Cari atau masukkan situs web</div>' });
  topL().querySelector('.back').remove();
}
let music = null, musicIdx = -1, musicSecret = null; // musicSecret = id lagu Secret Secret yg lagi diputer
// playlist "Secret Secret": lagu yg ketemu bisa diputer (preview iTunes) / buka YouTube; yg belum = ???. mulai 25 Okt ada petunjuk samar
function secretPlaylist() {
  const got = store.get('clues', []), hintOn = now() >= BDAY;
  const el = win({ cls: 'music', back: 'Musik', sub: true, title: 'Secret Secret', body: `<div class="mhead"><div class="mart" style="display:grid;place-items:center;font-size:64px;background:#1c1c1e">🤫</div><h3>Secret Secret</h3><div class="by">${secretCount()}/${CLUES.length} lagu</div><div style="color:#8e8e93;font-size:13px">말할 수 없는 비밀${EPI ? ' · dikumpulin 20–25 Okt' : ''}</div></div>
    <div class="list" style="margin:0">${CLUES.map(([id, song, what, hint], i) => got.includes(id)
      ? `<div class="row song" data-k="${id}"><div class="rt"><div class="r1" style="font-size:16px">${esc(song.split(' · ')[0])}</div><div class="r2" style="font-size:13px;white-space:normal;overflow:visible">${esc(song.split(' · ')[1] || 'Stray Kids')} · ${esc(what)}</div></div><span class="spp" style="color:#fa2d48;font-size:13px;flex:none;margin-left:8px">${SECRET_AUDIO[id] ? '▶' : 'YouTube ↗'}</span></div>`
      : `<div class="row" style="opacity:.45"><div class="rt"><div class="r1" style="font-size:16px">▶ ???</div><div class="r2" style="font-size:13px">${hintOn ? esc(hint.split(',')[0]) : 'belum ketemu'}</div></div></div>`).join('')}</div>` });
  // ▶ / ❚❚ ngikutin lagu yg lagi jalan (keluar-masuk playlist lagunya tetep jalan, ketuk lagi = pause/lanjut)
  const sync = () => el.querySelectorAll('[data-k]').forEach(x => { const on = x.dataset.k === musicSecret && music; x.classList.toggle('now', !!on); const b = x.querySelector('.spp'); if (b && SECRET_AUDIO[x.dataset.k]) b.textContent = on && !music.paused ? '❚❚' : '▶'; });
  el.querySelectorAll('[data-k]').forEach(r => r.onclick = () => {
    const id = r.dataset.k, song = CLUES.find(c => c[0] === id)[1];
    if (!SECRET_AUDIO[id]) return window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent('Stray Kids ' + song.split(' · ').reverse().join(' ')), '_blank');
    if (musicSecret === id && music) { music.paused ? music.play().catch(() => {}) : music.pause(); return sync(); }
    if (music) music.pause();
    music = new Audio(SECRET_AUDIO[id][0]); musicIdx = -1; musicSecret = id; music.onended = () => { musicSecret = null; if (el.isConnected) sync(); }; music.play().catch(() => {});
    sync();
  });
  sync();
}
function appMusic() {
  const el = win({ cls: 'music', back: 'Perpustakaan', body: `<div class="mhead"><div class="mart">${im('img/kita-2.jpg')}</div><h3>kris</h3><div class="by">Kino</div><div style="color:#8e8e93;font-size:13px">Diperbarui ${relDay(new Date('2026-10-22T02:14'))}</div><div class="mbtns"><div class="mplayall">▶ Putar</div><div class="mshuf">⤮ Acak</div></div></div>
    <div class="list secretrow" style="margin:0 0 14px"><div class="row"><div class="sicon" style="background:#1c1c1e;font-size:18px;display:grid;place-items:center">🤫</div><div class="rt"><div class="r1" style="font-size:16px">Secret Secret<span>${secretCount()}/${CLUES.length}</span></div><div class="r2" style="font-size:13px">playlist rahasia</div></div>${CHEV}</div></div>
    <div class="list" style="margin:0">${SONGS.map(([t, a, , art], i) => `<div class="row song" data-i="${i}"><img class="sart" src="${art}" alt=""><div class="rt"><div class="r1" style="font-size:16px">${esc(t)}</div><div class="r2" style="font-size:13px">${esc(a)}</div></div><span class="eq">⋯</span></div>`).join('')}</div><div style="height:90px"></div>`,
    footer: '<div class="mini" style="display:none"><img class="mart2" alt=""><div class="mt2"><b></b><span></span><div class="mprog"><i></i></div></div><button class="mpp">❚❚</button><button class="mnext">⏭</button></div>' });
  const mini = el.querySelector('.mini');
  const sync = () => {
    el.querySelectorAll('.song').forEach(r => r.classList.toggle('now', +r.dataset.i === musicIdx));
    if (musicIdx < 0) return; const [t, a, , art] = SONGS[musicIdx];
    mini.style.display = ''; mini.querySelector('.mart2').src = art; mini.querySelector('b').textContent = t; mini.querySelector('span').textContent = a;
    mini.querySelector('.mpp').textContent = music && !music.paused ? '❚❚' : '▶';
  };
  const play = (i) => {
    if (music) music.pause();
    musicIdx = (i + SONGS.length) % SONGS.length; musicSecret = null; music = new Audio(SONGS[musicIdx][2]);
    music.ontimeupdate = () => { const b = document.querySelector('.mini .mprog i'); if (b && music.duration) b.style.width = (music.currentTime / music.duration * 100) + '%'; };
    music.onended = () => { play(musicIdx + 1); };
    music.play().catch(() => {}); sync();
  };
  el.querySelectorAll('.song').forEach(r => r.onclick = () => play(+r.dataset.i));
  el.querySelector('.secretrow').onclick = () => { if (music && musicIdx >= 0) { music.pause(); sync(); } secretPlaylist(); }; // lagu secret yg lagi jalan jangan dimatiin
  el.querySelector('.mplayall').onclick = () => play(0);
  el.querySelector('.mshuf').onclick = () => play(Math.floor(Math.random() * SONGS.length));
  mini.querySelector('.mpp').onclick = () => { if (!music) return; music.paused ? music.play() : music.pause(); sync(); };
  mini.querySelector('.mnext').onclick = () => play(musicIdx + 1);
  sync();
}

// ---------- live: pesan baru masuk real-time ----------
let lastMailN = mailVis().length;
let lastVisCount = Object.fromEntries(CHATS.map(c => [c.id, msgsOnly(c).length]));
setInterval(() => {
  tickStatus();
  { const t = now(); if (S.unlocked && !EPI && ((t >= INTV[0] && t < INTV[1]) || (t >= FAINT[0] && t < FAINT[1])) && !document.querySelector('.call, .ending')) { if (t >= FAINT[0] && t < FAINT[1]) buzz('faint'); layersEl.querySelectorAll('.layer').forEach(x => x.remove()); lock(); } } // lagi interview / di klinik: HP kekunci (pas Kino jatoh: HP-nya getar)
  let changed = false;
  CHATS.forEach(c => {
    const ms = msgsOnly(c);
    if (ms.length > lastVisCount[c.id]) {
      const fresh = ms.slice(lastVisCount[c.id]); lastVisCount[c.id] = ms.length; changed = true;
      const t = topL();
      const ring = c.id === 'kris' && fresh.find(m => m.who === 'them' && m.o.call && !m.o.quiet && now() - m.ts < 120000); // quiet = log telfon yg udah bunyi sendiri (redial 00.00) // missed call lama ga ikut bunyi
      if (ring && S.unlocked && !(topL() && topL().dataset.modal)) { if (!S.fightDone && !fightOver()) fightCall(9000); else callScreen({ who: 'Kris', dir: 'in', autoMiss: 9000, lines: [['t', 'kino please, dengerin aku bentar'], ['k', 'aku lagi kerja.']], onDecline: () => {} }); }
      if (t && t.dataset.chat === c.id) renderChat(t, c);
      else if (!ring && !c.muted) fresh.filter(m => m.who !== 'me').slice(-1).forEach(m => S.unlocked ? toast({ title: c.group ? `${c.name}` : c.name, body: c.group ? `${m.who}: ${preview(m)}` : preview(m), onClick: () => openApp('kakao', c.id) }) : null);
    }
  });
  const t = topL(); if (t && t.dataset.chat) { const c = CHATS.find(x => x.id === t.dataset.chat); if (t.dataset.sig !== chatSig(c)) renderChat(t, c); }
  if (changed) { refreshHome(); if (!S.unlocked && topL() && topL().classList.contains('lock')) morph(topL().querySelector('.lk-notes'), lockNotifs()); }
  { const t = topL(); if (t && t.dataset.chat === 'kris') {
    const asked = krisAsked(); // panik nyari kata2: kedipnya lebih sering
    if (asked ? Date.now() > S.ghostUntil + 1500 + Math.random() * 2000 : Date.now() > S.ghostUntil + 9000 && Math.random() < .12) S.ghostUntil = Date.now() + (asked ? 2000 + Math.random() * 3000 : 3500 + Math.random() * 2500);
  } }
  { const mv = mailVis(); if (mv.length > lastMailN) { const m = mv[0]; lastMailN = mv.length; refreshHome(); layersEl.querySelectorAll('.win.mail').forEach(w => w._mailRefresh && w._mailRefresh()); if (S.unlocked) toast({ icon: ICONS.mail, title: mailFrom(m), body: m.subj, onClick: () => { openApp('mail'); } }); } }
  maybeFight();
  if (S.unlocked && (!S._mkc || Date.now() - S._mkc > 60000)) { S._mkc = Date.now(); logMissedKrisCalls(); }
  maybeKrisCall();
  maybeRandomCall(); maybeRandomChat();
  // 00.00 — Kris nelpon kalau suratnya udah dibaca
  if (!S.called && now() >= BDAY) { // ga ada batas akhir: yg telat baca surat tetep dapet telpon + ending
    if (S.letterRead && S.unlocked && !EPI && !store.get('ending', null) && (S.letterDone || !layersEl.querySelector('.letter')) && Date.now() - (S.letterSeenAt || 0) > 15000) { S.called = true; incomingCall(); }
  }
}, 1000);

// ---------- gesture ala iPhone: swipe up dari bawah = home, swipe dari kiri = back (ngikutin jari) ----------
(() => {
  const scr = $('#screen'); let g = null;
  const pos = (e) => { const r = scr.getBoundingClientRect(), sc = r.height / scr.offsetHeight; return [(e.clientX - r.left) / sc, (e.clientY - r.top) / sc]; };
  scr.addEventListener('pointerdown', e => {
    const [x, y] = pos(e); const t = topL();
    g = { x, y, bottom: y > scr.offsetHeight - 46, left: x < 22, t, moved: false, at: performance.now(), lock: !S.unlocked && !!t && t.classList.contains('lock') && !e.target.closest('.lk-btn') };
  });
  scr.addEventListener('pointermove', e => {
    if (!g || !g.t || g.t.dataset.modal) return; const [x, y] = pos(e); const dx = x - g.x, dy = y - g.y;
    if (g.lock) { if (g.moved || dy < -8) { g.moved = true; lockDrag(g.t, Math.max(0, -dy)); } return; }
    if (g.left && g.t.classList.contains('sub') && dx > 6) { g.moved = true; g.t.style.transition = 'none'; g.t.style.transform = `translateX(${Math.max(0, dx)}px)`; }
    else if (g.bottom && S.unlocked && layersEl.children.length > 1 && dy < -6) { g.moved = true; const k = Math.min(1, -dy / 500); g.t.style.transition = 'none'; g.t.style.transformOrigin = '50% 80%'; g.t.style.transform = `translateY(${dy * .45}px) scale(${1 - k * .45})`; g.t.style.borderRadius = `${k * 60}px`; }
  });
  // tap biasa di zona gesture: terusin ke elemen di bawahnya
  const passTap = (e) => { const z = e.target; if (!z.classList || !z.classList.contains('gz')) return; document.querySelectorAll('.gz').forEach(x => x.style.pointerEvents = 'none'); const under = document.elementFromPoint(e.clientX, e.clientY); document.querySelectorAll('.gz').forEach(x => x.style.pointerEvents = ''); if (under) under.click(); };
  const end = (e) => {
    if (!g) return; const st = g; g = null; const t = st.t;
    if (!st.moved && e.type === 'pointerup' && Math.abs(pos(e)[1] - st.y) < 10 && Math.abs(pos(e)[0] - st.x) < 10) passTap(e);
    if (!t) return;
    const [x, y] = pos(e); const dx = x - st.x, dy = y - st.y;
    if (st.lock) { if (st.moved) lockRelease(t, Math.max(0, -dy), -dy / Math.max(1, performance.now() - st.at)); return; }
    const snap = () => { t.style.transition = 'transform .22s cubic-bezier(.2,.8,.2,1), border-radius .22s'; t.style.transform = ''; t.style.borderRadius = ''; setTimeout(() => { t.style.transition = ''; }, 240); };
    if (t.dataset.modal) return;
    if (st.bottom && dy < -50) {
      if (t.classList.contains('cam')) return pop();
      if (!S.unlocked) return passcode();
      if (layersEl.children.length > 1) { t.style.transition = ''; return popTo(1); }
      return;
    }
    if (st.left && t.classList.contains('sub') && st.moved) {
      if (dx > 90) { t.style.transition = 'transform .2s ease-out'; t.style.transform = 'translateX(100%)'; setTimeout(() => { if (t.parentNode === layersEl) { t.remove(); syncChrome(); refreshUnder(); } }, 200); }
      else snap();
      return;
    }
    if (st.moved) snap();
  };
  scr.addEventListener('pointerup', end); scr.addEventListener('pointercancel', end);
})();

// ---------- fit ----------
// default: HP di dalem HP, frame iPhone keliatan & di-scale biar muat (biar ga kecampur sama HP beneran).
// mode layar penuh (pilihan pemain, cuma di layar HP): tanpa frame, lebar layar Kino = lebar layar, tingginya ngikutin
const canFull = () => Math.min(innerWidth, innerHeight) < 600;
const isFull = () => canFull() && store.get('full', false);
function setFull(on) { store.set('full', !!on); fit(); }
function fit() {
  const st = $('#stage'), ph = $('#phone'), full = isFull(); document.documentElement.classList.toggle('full', full);
  if (full) { const s = st.clientWidth / 371; ph.style.height = `${st.clientHeight / s}px`; ph.style.transform = `translate(-50%,-50%) scale(${s})`; return; }
  ph.style.height = ''; const m = innerWidth < 500 ? 16 : 24; const s = Math.min(1.15, (st.clientHeight - m) / 876, (st.clientWidth - m) / 417); ph.style.transform = `translate(-50%,-50%) scale(${s})`;
}
if (window.visualViewport) visualViewport.addEventListener('resize', fit);
addEventListener('resize', fit); fit();
// buat ngecek ending: ?lihat=maafin (ending) / ?lihat=maafin&epilog (narasi epilog → tombol HP seminggu kemudian). pake tab private biar progres asli ga ketimpa
{ const lk = DEV && new URLSearchParams(location.search).get('lihat'); if (lk && ENDINGS[lk] && !EPI) { S.unlocked = true; S.fightDone = true; store.set('fightDone', true); home(); setTimeout(() => ending(lk, new URLSearchParams(location.search).has('epilog')), 300); } else if (EPI) epiEnter(); else if (store.get('resume', false)) { try { localStorage.removeItem('hpkino:resume'); } catch (e) {} S.unlocked = true; home(); } else if (store.get('backToCard', null) && ENDINGS[store.get('backToCard', null)]) { const k = store.get('backToCard', null); try { localStorage.removeItem('hpkino:backToCard'); } catch (e) {} S.unlocked = true; home(); setTimeout(() => ending(k, false, true), 200); } else if (store.get('pickAgain', false)) { try { localStorage.removeItem('hpkino:pickAgain'); } catch (e) {} S.unlocked = true; home(); setTimeout(pickAgain, 300); } else intro(); }

// ---------- afk ≥ 1 jam → muat ulang (biar dapet cerita terbaru + versi terbaru) ----------
{
  const AFK = 60 * 60 * 1000; let last = Date.now(), hiddenAt = 0;
  const poke = () => { last = Date.now(); };
  ['pointerdown', 'keydown', 'touchstart', 'wheel'].forEach(ev => addEventListener(ev, poke, { passive: true }));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { hiddenAt = Date.now(); return; }
    if (hiddenAt && Date.now() - hiddenAt >= AFK) location.reload(); else poke();
  });
  setInterval(() => { if (!document.hidden && Date.now() - last >= AFK && !document.querySelector('.call, .ending')) location.reload(); }, 60000);
}

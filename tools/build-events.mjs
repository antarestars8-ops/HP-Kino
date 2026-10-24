// Bikin jadwal push dari data.js → api/_events.js
// Jalanin ulang tiap data.js berubah: node tools/build-events.mjs
import fs from 'fs'; import vm from 'vm';
const code = fs.readFileSync(new URL('../data.js', import.meta.url), 'utf8');
const ctx = {}; vm.createContext(ctx);
vm.runInContext(code + '\n;globalThis.__o = { CHATS, FIGHT_AT };', ctx);
const { CHATS, FIGHT_AT } = ctx.__o;
const ev = [];
for (const c of CHATS) { if (c.muted) continue; // grup di-mute: ga ada push
  let day;
  for (const [who, text, time, o = {}] of c.msgs) {
    if (who === 'date') { day = text; continue; }
    if (who === 'me' || o.epi || o.end || o.noEnd) continue; // yg tergantung ending ga di-push (server ga tau endingnya)
    const t = `${day}T${time.replace('.', ':')}`;
    if (t < '2026-10-20T00:00') continue;
    const cname = c.id === 'kris' ? 'kris 🐺' : c.name;
    const sender = who === 'them' ? cname : who;
    let body = o.img ? 'Foto' : o.call ? 'Panggilan suara' : o.deleted ? 'Pesan ini telah dihapus.' : text;
    let full; // pesan Kris sesudah berantem: isinya baru boleh keliatan kalau telponnya udah diangkat (HP pemain yg nentuin, lihat sw.js)
    if (c.id === 'kris' && o.afterFight && !o.retract) { full = body; body = 'pesan baru'; }
    else if (c.id === 'kris' && o.retract) body = 'pesan baru'; // jangan spoiler
    if (c.id === 'kris' && o.call) { if (o.call === 'Panggilan tak terjawab') ev.push({ t, tag: 'kriscall', title: 'kris 🐺', body: 'Panggilan tak terjawab' }); continue; } // telfon tak terjawab Kris di cerita (spam abis foto, panik pas klinik) ikut jadi notif. telfon random ga
    ev.push(full ? { t, tag: c.id, title: cname, body, full, gate: 'fight' } : { t, tag: c.id, title: cname, body: c.group ? `${sender}: ${body}` : body });
  }
}
ev.push({ t: FIGHT_AT, tag: 'call', title: 'kris 🐺', body: 'KakaoTalk Audio · memanggil…' });
ev.push({ t: '2026-10-25T00:00', tag: 'call', title: 'kris 🐺', body: 'KakaoTalk Audio · memanggil…' });
ev.push({ t: '2026-10-25T00:00', tag: 'kris', title: 'kris 🐺', body: 'selamat ulang tahun, kino.' });
ev.push({ t: '2026-10-25T22:00', tag: 'epi', title: 'Days Until', body: '📱 seminggu kemudian udah kebuka. udah milih ending? cek di home' });
ev.forEach(e => e.t = e.t.slice(0, 16)); // tick.js baca 'YYYY-MM-DDTHH:MM' (jam yg pake detik bikin notifnya ga pernah kekirim)
ev.sort((a, b) => a.t < b.t ? -1 : 1);
fs.writeFileSync(new URL('../api/_events.js', import.meta.url), '// dibikin otomatis oleh tools/build-events.mjs — jangan diedit\nexport default ' + JSON.stringify(ev) + ';\n');
console.log(ev.length, 'events');

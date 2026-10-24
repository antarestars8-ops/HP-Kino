// dict.json -> i18n/en.js, ko.js, zh.js (dimuat cuma kalau bahasa itu dipilih)
// + tambahin judul/isi notif per bahasa ke api/_events.js
import fs from 'fs';
const root = new URL('../../', import.meta.url);
const dict = JSON.parse(fs.readFileSync(new URL('./dict.json', import.meta.url)));
fs.mkdirSync(new URL('i18n/', root), { recursive: true });
['en', 'ko', 'zh'].forEach((l, i) => {
  const out = {};
  for (const [k, v] of Object.entries(dict)) if (v[i] && v[i] !== k) out[k] = v[i];
  fs.writeFileSync(new URL(`i18n/${l}.js`, root), `// dibikin otomatis oleh tools/i18n/build.mjs — jangan diedit\nwindow.I18N=${JSON.stringify(out)};\n`);
  console.log(l, Object.keys(out).length);
});
// notif push: "Nama: teks" -> terjemahin nama & teks
const evFile = new URL('api/_events.js', root);
const src = fs.readFileSync(evFile, 'utf8');
const ev = JSON.parse(src.slice(src.indexOf('['), src.lastIndexOf(']') + 1));
const tr = (s, i) => (dict[s] && dict[s][i]) || s;
const trBody = (b, i) => { const m = b.match(/^([^:]{1,24}): ([\s\S]*)$/); return m && dict[m[2]] ? `${tr(m[1], i)}: ${tr(m[2], i)}` : tr(b, i); };
let hit = 0;
ev.forEach(e => ['en', 'ko', 'zh'].forEach((l, i) => { e[l] = { title: tr(e.title, i), body: trBody(e.body, i) }; if (e.full) e[l].full = trBody(e.full, i); if (e[l].body !== e.body) hit++; }));
fs.writeFileSync(evFile, src.slice(0, src.indexOf('[')) + JSON.stringify(ev) + ';\n');
console.log('events', ev.length, 'translated bodies', hit);

// ambil semua teks yg keliatan pemain dari data.js -> tools/i18n/src.json ({ idx: teks })
import fs from 'fs';
const src = fs.readFileSync(new URL('../../data.js', import.meta.url), 'utf8');
const re = /'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"|`((?:[^`\\$]|\\.|\$(?!\{)|\$\{[^}]*\})*)`/g;
const SKIP_CTX = /(?:\b(?:id|chat|user|person|handle|ig|who|epi|src|file|img|av|avImg|bg|key|place|tag|addr|from|to|since|until|ts|at|t|d|type|emoji|cls)\s*:\s*\[?\s*)$/;
const out = []; const seen = new Set(); let m;
while ((m = re.exec(src))) {
  let s = m[1] ?? m[2] ?? m[3]; if (!s) continue;
  if (m[1] !== undefined) s = s.replace(/\\'/g, "'").replace(/\\n/g, '\n');
  if (m[2] !== undefined) s = s.replace(/\\"/g, '"').replace(/\\n/g, '\n');
  const before = src.slice(Math.max(0, m.index - 30), m.index);
  if (SKIP_CTX.test(before)) continue;
  if (/^(img|vid|aud|icons)\//.test(s) || /^https?:/.test(s) || /^\d{4}-\d\d-\d\d/.test(s) || /^#[0-9a-f]{3,8}$/i.test(s) || /^[\d.:\- ]+$/.test(s)) continue;
  if (['them', 'me', 't', 'k', 'date', 'sabar', 'dingin'].includes(s)) continue;
  if (!/[\p{L}]/u.test(s)) continue;               // emoji/angka doang
  if (/^[a-z0-9_.-]+$/.test(s) && !/^(oke|iya|ok|hm|k|udah|apa|knp|bang|kino|lucu|ga|bin|gapapa|makasih|thanks|kenapa|cocok|lumayan|terus|boleh|bentar|okee|hmm)$/.test(s) && s.length < 14 && before.match(/[\[{,(]\s*$/)) {
    // kata tunggal huruf kecil di posisi id/kunci: kemungkinan id → lewati, kecuali kata obrolan umum
    if (/\b(chat|id|user|person)\b/.test(before)) continue;
  }
  if (s.includes('${')) continue;
  if (seen.has(s)) continue; seen.add(s); out.push(s);
}
// teks yg dibentuk pas runtime (ending/epilog disisipin + dikapitalisasi): ambil nilai finalnya
{
  const vm = await import('vm');
  const ctx = { localStorage: { getItem() { return null; } }, console }; vm.createContext(ctx);
  vm.runInContext(src + ';this.__E = ENDINGS; this.__T = ENDING_TAIL; this.__A = AU_TITLE;', ctx);
  const add = (t) => { if (t && !seen.has(t)) { seen.add(t); out.push(t); } };
  for (const E of Object.values(ctx.__E)) { add(E.title); (E.lines || []).forEach(add); (E.epi || []).forEach(add); add(E.epiHead); }
  for (const t of Object.values(ctx.__T)) { add(t.sabar); add(t.dingin); }
  ['Seminggu kemudian.', 'Epilog · ', 'the end.', 'tutup', 'fan fiction'].forEach(add);
}
fs.writeFileSync(new URL('./src.json', import.meta.url), JSON.stringify(Object.fromEntries(out.map((s, i) => [i, s])), null, 0));
console.log(out.length, 'strings', out.reduce((a, b) => a + b.length, 0), 'chars');

// buang teks ending/epilog versi lama (ketimpa pas runtime) dari todo
import fs from 'fs'; import vm from 'vm';
const src = fs.readFileSync(new URL('../../data.js', import.meta.url), 'utf8');
const ctx = { localStorage: { getItem() { return null; } }, console }; vm.createContext(ctx);
vm.runInContext(src + ';this.__E = ENDINGS; this.__T = ENDING_TAIL;', ctx);
const live = new Set(); for (const E of Object.values(ctx.__E)) [E.title, E.epiHead, ...(E.lines || []), ...(E.epi || [])].forEach(t => t && live.add(t));
for (const t of Object.values(ctx.__T)) { live.add(t.sabar); live.add(t.dingin); }
const regions = [];
const a = src.indexOf('const ENDINGS = {'), b = src.indexOf('const ENDING_TAIL = {', a); regions.push(src.slice(a, b + 2000));
const c = src.indexOf('// ===== ending versi panjang'); regions.push(src.slice(c));
const c2 = src.indexOf('// ===== epilog langsung abis ending'); if (c2 > 0) regions.push(src.slice(c2, c));
const todo = JSON.parse(fs.readFileSync(new URL('./todo.json', import.meta.url)));
const keep = {}; let dead = 0, k = 0;
for (const s of Object.values(todo)) {
  const lit = JSON.stringify(s).slice(1, -1).replace(/'/g, "\\'");
  const inEnd = regions.some(r => r.includes(s.slice(0, 40)) || r.includes(lit.slice(0, 40)));
  if (inEnd && !live.has(s)) { dead++; continue; }
  keep[k++] = s;
}
fs.writeFileSync(new URL('./todo.json', import.meta.url), JSON.stringify(keep));
console.log('dead', dead, 'keep', k);

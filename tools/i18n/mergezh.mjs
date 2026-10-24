// isi zh buat entri lama: tr/zh-XXX.json ({ idx: zh } berdasarkan zhtodo.json)
import fs from 'fs';
const todo = JSON.parse(fs.readFileSync(new URL('./zhtodo.json', import.meta.url)));
const dict = JSON.parse(fs.readFileSync(new URL('./dict.json', import.meta.url)));
const t = JSON.parse(fs.readFileSync(process.argv[2]));
let n = 0; for (const [i, zh] of Object.entries(t)) { const k = todo[i] && todo[i][0]; if (!k || !dict[k]) throw new Error('bad idx ' + i); dict[k] = [dict[k][0], dict[k][1], zh]; n++; }
fs.writeFileSync(new URL('./dict.json', import.meta.url), JSON.stringify(dict));
console.log('zh merged', n);

// gabungin tr/todo-XXX.json ({ idx: [en, ko] } berdasarkan todo.json) ke dict.json
import fs from 'fs';
const todo = JSON.parse(fs.readFileSync(new URL('./todo.json', import.meta.url)));
const dict = JSON.parse(fs.readFileSync(new URL('./dict.json', import.meta.url)));
const f = process.argv[2]; const t = JSON.parse(fs.readFileSync(f));
let n = 0; for (const [i, v] of Object.entries(t)) { if (todo[i] === undefined) throw new Error('bad idx ' + i); dict[todo[i]] = v; n++; }
fs.writeFileSync(new URL('./dict.json', import.meta.url), JSON.stringify(dict));
console.log('merged', n, '→', Object.keys(dict).length, 'total');

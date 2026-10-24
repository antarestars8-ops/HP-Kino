// teks yg belum ada di dict.json -> todo.json ({ idx: teks }), print potongan buat diterjemahin
import fs from 'fs';
const src = JSON.parse(fs.readFileSync(new URL('./src.json', import.meta.url)));
const dict = JSON.parse(fs.readFileSync(new URL('./dict.json', import.meta.url)));
const todo = Object.values(src).filter(s => !dict[s]);
fs.writeFileSync(new URL('./todo.json', import.meta.url), JSON.stringify(Object.fromEntries(todo.map((s, i) => [i, s]))));
const [a, b] = process.argv.slice(2).map(Number);
if (isNaN(a)) console.log(todo.length, 'todo');
else for (let i = a; i < Math.min(b, todo.length); i++) console.log(i + '\t' + JSON.stringify(todo[i]));

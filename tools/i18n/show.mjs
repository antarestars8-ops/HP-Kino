import fs from 'fs';
const t = JSON.parse(fs.readFileSync(new URL('./todo.json', import.meta.url)));
const [a, b] = process.argv.slice(2).map(Number);
for (let i = a; i < b && t[i] !== undefined; i++) console.log(i + '\t' + JSON.stringify(t[i]));

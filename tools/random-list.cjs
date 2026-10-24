// bikin random-calls-chats.md: daftar telepon & chat random per hari (buat dibaca, ga ikut deploy)
const fs = require('fs'), vm = require('vm');
const ctx = { localStorage: { getItem() { return null; } }, console }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync('data.js', 'utf8') + ';this.RC=RANDOM_CALLS;this.RH=RANDOM_CHATS;this.CD=typeof CALL_DAY!=="undefined"?CALL_DAY:{};this.CF=CALL_FOLLOW', ctx);
const days = ['2026-10-20', '2026-10-21', '2026-10-22', '2026-10-23', '2026-10-24', '2026-10-25'];
const nm = { 20: 'Selasa 20', 21: 'Rabu 21', 22: 'Kamis 22', 23: 'Jumat 23', 24: 'Sabtu 24', 25: 'Minggu 25' };
let o = '# HP Kino · telepon & chat random\n\nTiap item muncul sekali, cuma pas jamnya cocok, dan ditunda kalau cerita utama lagi jalan. Telepon random berhenti 24 Okt 13.45.\n\n';
for (const d of days) {
  const calls = ctx.RC.filter(c => c.d && c.d.includes(d)).sort((a, b) => a.hours[0] - b.hours[0]);
  const chats = ctx.RH.filter(c => c.d && c.d.includes(d)).sort((a, b) => a.hours[0] - b.hours[0]);
  const cd = Object.entries(ctx.CD).filter(([, v]) => v && v[d]);
  if (!calls.length && !chats.length && !cd.length) continue;
  o += `## ${nm[+d.slice(8)]} Okt\n\n`;
  if (calls.length) { o += '### Telepon masuk\n\n'; calls.forEach(c => { o += `- **${c.who}** · jam ${c.hours[0]}–${c.hours[1]} · \`${c.id}\`\n`; c.lines.forEach(l => o += `  - ${l[0] === 'k' ? '**Kino**' : '**' + c.who + '**'}: ${l[1]}\n`); const f = ctx.CF[c.id]; if (f) o += `  - _chat lanjutan_ → diangkat: "${f.ans[0]}" · ga diangkat: "${f.miss[0]}"\n`; }); o += '\n'; }
  if (chats.length) { o += '### Chat masuk\n\n'; chats.forEach(c => { o += `- **${c.chat}** · jam ${c.hours[0]}–${c.hours[1]} · \`${c.id}\`\n`; c.msgs.forEach(m => o += `  - **${m[0] === 'them' ? c.chat : m[0]}**: ${m[1]}\n`); if (c.reply) o += `  - **Kino** (kalau diketuk): ${c.reply[0]}\n`; }); o += '\n'; }
  if (cd.length) { o += '### Kalau Kino yang nelpon duluan\n\n'; cd.forEach(([p, v]) => { o += `- **${p}**: ${v[d].map(l => (l[0] === 'k' ? 'Kino' : p) + ': ' + l[1]).join(' → ')}\n`; }); o += '\n'; }
}
fs.writeFileSync('random-calls-chats.md', o); console.log('ok', o.length);

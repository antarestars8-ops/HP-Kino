// timeline cerita (chat/X/IG/mail/notes) per rentang waktu: node tools/timeline.cjs 2026-10-20T00:00 2026-10-21T00:00
const fs = require('fs'), vm = require('vm'), path = require('path');
const ctx = { console, window: {}, document: {}, navigator: {}, localStorage: { getItem() { return null; }, setItem() {} } };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '../data.js'), 'utf8') + '\n;globalThis.__D = { CHATS, X_POSTS, INSTA, STORIES, MAILS, NOTES };', ctx);
const D = ctx.__D, [from, to] = process.argv.slice(2), rows = [], inR = t => t >= from && t < to;
const tag = (o = {}) => o.end ? `[${o.end}]` : o.epi ? `[epi:${o.epi}]` : o.noEnd ? `[!${o.noEnd}]` : '';
D.CHATS.forEach(c => { let day; (c.msgs || []).forEach(([w, x, tm, o = {}]) => { if (w === 'date') { day = x; return; } if (!tm) return; const t = `${day}T${tm.replace('.', ':')}`; if (inR(t)) rows.push([t, 'CHAT ' + c.id, `${w}: ${o.call ? '[' + o.call + ']' : o.img ? '[foto]' : x} ${tag(o)}`]); }); });
D.X_POSTS.forEach(p => { if (inR(p[2])) rows.push([p[2], 'X ' + p[1], p[3] + ' ' + tag(p[7] || {})]); });
D.INSTA.forEach(p => { if (inR(p.ts)) rows.push([p.ts, 'IG ' + p.user, (p.cap || '') + ' ' + tag(p)]); });
D.STORIES.forEach(p => { if (inR(p.ts)) rows.push([p.ts, 'STORY ' + p.user, (p.txt || '') + ' ' + tag(p)]); });
D.MAILS.forEach(m => { if (inR(m.ts)) rows.push([m.ts, 'MAIL ' + (m.from || m.name), m.subj]); });
D.NOTES.forEach(n => (n.log || []).forEach(([t, x]) => { if (inR(t)) rows.push([t, 'NOTE', x.replace(/\n/g, ' / ')]); }));
rows.sort((a, b) => a[0] < b[0] ? -1 : 1);
console.log(rows.map(r => `${r[0].slice(5, 16)} ${r[1].padEnd(16)} ${String(r[2]).slice(0, 110)}`).join('\n'));

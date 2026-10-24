// kumpulin semua teks yg harus diterjemahin (dari data.js final), dikelompokin per bagian. ga nerjemahin apa2.
// pake: node tools/i18n/compile.cjs  → tools/i18n/compile-<tanggal>.json + ringkasan
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '../..');
const ctx = { console, window: {}, document: {}, navigator: {}, localStorage: { getItem() { return null; }, setItem() {} } };
vm.createContext(ctx);
const NAMES = 'STORY PEOPLE CHATS REPLIES PHOTOS INSTA PROFILES STORIES NOTES LETTER SAFARI SONGS CALLS ENDINGS CALL_LINES KRIS_CALL KRIS_BUSY CALL_AGAIN MIDNIGHT_CALL TYPE_KRIS TYPE_LINES AGENDA MEMOS FIGHT_CALL GHOST_TYPING ENDING_TAIL PHOTO_REPLY PHOTO_SHARE SHARE_TO DAILY MEMORIES X_USERS X_POSTS EPI_MEMORY ALT X_STALK RANDOM_CALLS CALL_FOLLOW RANDOM_CHATS MAILS IG_COMMENTS X_EXTRA_REPLIES IG_KINO_LINES X_KINO_LINES AU_TITLE SHARE_CAPS SHARE_REACT KRIS_AFTER X_DMS IG_DMS IG_STORY_REPLY DM_KINO KLOD KLOD_ASK PLACES HEALTH_NOTE DRAFTS CLUES'.split(' ');
vm.runInContext(fs.readFileSync(path.join(root, 'data.js'), 'utf8') + `\n;globalThis.__D = { ${NAMES.map(n => `${n}: typeof ${n} !== 'undefined' ? ${n} : null`).join(', ')} };`, ctx);
const D = ctx.__D;
// bukan teks: path, url, tanggal, jam, warna, id, angka doang
const SKIP_KEY = new Set(['img', 'src', 'av', 'ts', 'at', 'id', 'chat', 'user', 'tag', 'addr', 'file', 'epi', 'end', 'noEnd', 'handle', 'person', 'tone', 'bg', 'kind', 'x', 'y', 'url', 'who', 'u']);
const isText = (s) => typeof s === 'string' && /[a-zA-Z]{2,}/.test(s) && !/^(img|vid|aud|icons)\//.test(s) && !/^https?:/.test(s) && !/^\d{4}-\d\d-\d\d/.test(s) && !/^#[0-9a-f]{3,6}$/i.test(s) && !/^[a-z0-9_-]+$/.test(s) || (typeof s === 'string' && /\s/.test(s) && /[a-z]/i.test(s) && !/^\d{4}-/.test(s));
const out = {}; const seen = new Set();
const add = (sec, s) => { s = s.trim(); if (!s || seen.has(s)) return; seen.add(s); (out[sec] = out[sec] || []).push(s); };
const walk = (v, sec, key) => {
  if (v == null) return;
  if (typeof v === 'string') { if (!SKIP_KEY.has(key) && isText(v)) add(sec, v); return; }
  if (Array.isArray(v)) { v.forEach((x, i) => walk(x, sec, i === 0 && typeof x === 'string' && /^(date|me|them|k|t)$/.test(x) ? 'id' : key)); return; }
  if (typeof v === 'object') Object.entries(v).forEach(([k, x]) => walk(x, sec, k));
};
// chat dipecah per room biar keliatan gedenya
(D.CHATS || []).forEach(c => { add('CHATS · nama room', c.name); (c.msgs || []).forEach(m => { if (m[0] === 'date') return; if (typeof m[1] === 'string') add('CHATS · ' + c.id, m[1]); }); });
NAMES.filter(n => n !== 'CHATS').forEach(n => walk(D[n], n, ''));
const dict = (() => { try { return JSON.parse(fs.readFileSync(path.join(__dirname, 'dict.json'), 'utf8')); } catch (e) { return {}; } })();
const rows = Object.entries(out).map(([sec, arr]) => ({ sec, lines: arr.length, chars: arr.reduce((a, s) => a + s.length, 0), done: arr.filter(s => dict[s]).length }));
rows.sort((a, b) => b.chars - a.chars);
const tot = rows.reduce((a, r) => ({ lines: a.lines + r.lines, chars: a.chars + r.chars, done: a.done + r.done }), { lines: 0, chars: 0, done: 0 });
const day = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(__dirname, `compile-${day}.json`), JSON.stringify({ total: tot, sections: rows, text: out }, null, 1));
console.log(JSON.stringify({ total: tot, sections: rows }));

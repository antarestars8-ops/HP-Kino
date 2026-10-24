// cari teks Indo yg belum ada terjemahannya (en/ko) -> tools/i18n/missing.json
// jalanin: node tools/i18n/missing.mjs   (ga butuh browser; data.js dijalanin di vm kayak extract.mjs)
import fs from 'fs';
import vm from 'vm';
const root = new URL('../../', import.meta.url);
const dict = JSON.parse(fs.readFileSync(new URL('./dict.json', import.meta.url), 'utf8'));
const LANGS = ['en', 'ko']; // index di dict: 0 = en, 1 = ko
// teks yg sengaja ga lewat kamus (udah diurus di kode / cuma kunci internal)
const IGNORE = new Set(fs.existsSync(new URL('./ignore.json', import.meta.url)) ? JSON.parse(fs.readFileSync(new URL('./ignore.json', import.meta.url), 'utf8')) : []);

// kata yg nandain kalimat Indo/slang (biar teks Inggris & nama ga ikut kehitung)
const ID = /\b(yg|ga|gak|nggak|enggak|udah|sudah|aku|kamu|gue|gw|lo|lu|bang|kak|dan|yang|sama|ini|itu|lagi|di|ke|dari|buat|untuk|tidak|ada|belum|masih|juga|tapi|kalo|kalau|abis|mau|bisa|jangan|banget|bgt|aja|deh|sih|dong|nya|ia|dengan|karena|soalnya|terus|udh|blm|jam|hari|minggu|besok|kemarin|kemaren|tadi|nanti|makan|tidur|pulang|kantor|cuti|lembur|sayang|maaf|makasih|gapapa|kenapa|gimana|siapa|kapan|mana|tolong|sumpah|panggilan|suara|pesan|telah|dihapus|tak|terjawab|angkat|tunggu|pergi|bentar|sebentar|iya|oke|nggak|engga|beneran|gimana|maksud|bukan|kok|kan|ya|yuk|ayo|baru|semua|selamat|ulang|tahun|tolak|terima|batal|kirim|balas|foto|video|catatan|lokasi|sekarang|kemarin|bulan|menit|detik|pagi|siang|sore|malam|malem|hapus|salin|teruskan|lihat|buka|tutup|lanjut|mulai|selesai|lewati|keluar|masuk|cari|ketik|tambah|ubah|simpan|nyala|mati|ada|apa|sini|situ|dulu|lho|loh|wkwk\w*|anjir|anjing|bego|brengsek|capek|kangen|marah|nangis)\b/i;
const SKIP_KEYS = new Set(['id', 'ts', 'img', 'addr', 'av', 'u', 'user', 'gone', 'shared', 'color', 'k', 'chat', 'handle', 'tag', 'src', 'file', 'avImg', 'bg', 'key', 'cls', 'at', 'since', 'until', 'from', 'to']);

const has = (s) => { const v = dict[s] ?? dict[s.trim()]; return v && LANGS.every((_, i) => v[i]); };
// sama kayak tr(): teks banyak baris boleh ketutup per baris
const covered = (s) => has(s) || (s.includes('\n') && s.split('\n').every(x => !x.trim() || !ID.test(x) || has(x)));
const out = new Map(); // teks -> asal
const consider = (s, where) => {
  if (typeof s !== 'string') return; const t = s.trim();
  if (t.length < 2 || /^(img|vid|aud|icons)\//.test(t) || /^https?:/.test(t) || /^\d{4}-\d\d/.test(t) || t.includes('${')) return;
  if (/^[a-z0-9]+(-[a-z0-9]+)+$/.test(t) || /Bang Chan|Lee Know|Seungmin|Hyunjin|Felix|Changbin|I\.N\b/.test(t)) return; // id / judul lagu
  if (IGNORE.has(t) || !ID.test(t) || covered(s)) return;
  if (!out.has(t)) out.set(t, where);
};

// 1) data.js: jalanin, terus telusurin semua const tingkat atas (nilai finalnya, termasuk yg di-patch pas runtime)
{
  const src = fs.readFileSync(new URL('data.js', root), 'utf8');
  const names = [...new Set([...src.matchAll(/^(?:const|let|var) ([A-Z][A-Z0-9_]*)\s*=/gm)].map(m => m[1]))];
  const ctx = { localStorage: { getItem() { return null; }, setItem() {} }, console, location: { search: '', pathname: '/' }, navigator: { userAgent: '' } };
  ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(src + `;this.__ALL = {${names.map(n => `${n}: typeof ${n} === 'undefined' ? null : ${n}`).join(',')}};`, ctx);
  const seen = new Set();
  const walk = (v, where, key) => {
    if (typeof v === 'string') { if (!SKIP_KEYS.has(key)) consider(v, where); return; }
    if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v);
    for (const k of Object.keys(v)) walk(v[k], where, k);
  };
  for (const [n, v] of Object.entries(ctx.__ALL)) walk(v, 'data.js ' + n);
}

// 2) app.js: string literal (teks UI, permohonan Kris pas telpon, dll)
{
  const src = fs.readFileSync(new URL('app.js', root), 'utf8');
  for (const m of src.matchAll(/'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"/g)) {
    const s = (m[1] ?? m[2]).replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, '\n');
    if (/[<>{}=;]|=>|\$\{/.test(s)) continue; // potongan kode/HTML, bukan teks
    consider(s, 'app.js:' + src.slice(0, m.index).split('\n').length);
  }
}

const list = [...out].map(([s, where]) => ({ s, where }));
fs.writeFileSync(new URL('./missing.json', import.meta.url), JSON.stringify(list, null, 1));
if (!list.length) console.log('✓ semua teks udah ada en + ko');
else { console.log(`⚠ ${list.length} teks belum diterjemahin (en/ko) → tools/i18n/missing.json`); list.slice(0, 15).forEach(x => console.log('  · ' + x.s.replace(/\n/g, ' ⏎ ').slice(0, 90))); if (list.length > 15) console.log('  …'); }

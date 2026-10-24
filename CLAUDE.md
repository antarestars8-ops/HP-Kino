# HP Kino

Fanfic phone sim (Kino & Kris, 20–25 Okt 2026, Seoul). Teks asli = Bahasa Indonesia; EN + KO diterjemahin lewat kamus.

## Tiap kali teks Indo diubah/ditambah → terjemahin juga (EN + KO), jangan ditunda

1. `node tools/i18n/missing.mjs` → daftar teks yg belum ada en/ko masuk `tools/i18n/missing.json`.
2. Tambahin ke `tools/i18n/dict.json`: `"teks indo persis": ["english", "한국어"]` (kunci = string runtime persis, termasuk hasil patch di akhir data.js).
3. `node tools/i18n/build.mjs` (bikin ulang `i18n/en.js`, `i18n/ko.js`, + terjemahan notif di `api/_events.js`).
4. Jalanin `missing.mjs` lagi sampe "✓ semua teks udah ada en + ko". Teks yg sengaja ga lewat kamus (udah diurus di kode / kunci internal) masuk `tools/i18n/ignore.json`.
5. Teks UI yg dirangkai di app.js (tanggal, angka + satuan) jangan lewat kamus: pake `fmtD`/`fmtMY` atau map `({ en: ..., ko: ... })[L] || 'indo'`.

## Gaya terjemahan (jangan gamblang; ikut konteks, slang, vibe)

- Kino↔Kris: KO 반말 + 자기야; EN lowercase santai, "babe".
- Anak2 tower (Juna, Surya, Ilham, Gemilang, Bagas, Sadewa) → Kino: KO 형 + 반말; EN "hyung". "bang" = 형/hyung.
- Kino → Mina: KO 해요체 + 선배 (sopan tapi akrab); Mina → Kino 반말. EN tetep santai.
- Mama → Kino: KO 아들, Kino → 엄마 반말; EN "sweetie"/"ma".
- Narasi ending/epilog: KO gaya -다; EN past tense sastra.
- Claude (AI di game): KO 해요체, EN hangat tapi rapi.
- Lokalisasi: Find My = 나의 찾기, wkwk = ㅋㅋㅋ, pantry = 탕비실, setengah hari = 반차, nama tempat Seoul pake hangeul di KO.
- Nama orang, judul lagu, email/notif yg aslinya Inggris: biarin.

## Deploy

Naikin `VERSION` di `sw.js`, commit, push. User deploy dari Mac:
`cd ~/Documents/skz-minho-phone && git checkout -- api/_events.js && git pull && zsh tools/deploy.sh`
(deploy.sh juga jalanin build bahasa + cek missing.)

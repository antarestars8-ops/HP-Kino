# Suara "yeoboseyo" waktu telepon
Taruh klip suara (mp3) di folder ini. Diputar pas member ngangkat telepon (atau pas Kris nelpon).
Kalau filenya gak ada, teleponnya tetep jalan tanpa suara.

- yeoboseyo-kris.mp3      (Bang Chan)
- yeoboseyo-juna.mp3      (Han)
- yeoboseyo-surya.mp3     (Felix)
- yeoboseyo-sadewa.mp3    (Seungmin)
- yeoboseyo-gemilang.mp3  (Hyunjin)
- yeoboseyo-bagas.mp3     (Changbin)
- yeoboseyo-ilham.mp3     (I.N)
- yeoboseyo-mama.mp3, yeoboseyo-dian.mp3 (opsional)
- ringtone.mp3 — nada dering telepon masuk (kalau gak ada, pake marimba bawaan)

Tips: potong 1–2 detik aja. Kalau punya video, bisa: ffmpeg -i video.mp4 -ss 00:00:12 -t 1.5 -vn yeoboseyo-kris.mp3
- katalk.mp3 — bunyi notif KakaoTalk ("katok!"). Kalau gak ada, pake bunyi ting bawaan.
- keyclick.mp3 — bunyi tombol keyboard pas Kino ngetik (pendek bgt, <0.1 detik). Kalau gak ada, pake "tok" sintetis.

Catatan: kalau gak ada file yeoboseyo, waktu telepon tulisannya "halo?".

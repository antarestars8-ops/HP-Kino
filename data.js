// ===== HP Kino — data cerita (edit cerita di sini) =====
// Fan fiction. Nama & kejadian rekaan.
// Bahasa: Kino <-> Kris pake aku/kamu. Yang lain semua gue/lo.
// Foto ada di img/ (lihat img/FOTO.md). Kalau file gak ada, otomatis jadi kotak abu-abu.

const STORY = {
  passcode: '1003',   // ultah Kris (BBTT)
  noteCode: '0325',   // hari jadi Kino & Kris, 25 Maret 2018 (BBTT)
  wallLock: 'img/wall-lock-sdd.jpg',  // kucing
  wallHome: 'img/wall-lock-2.jpg',  // foto berdua
};

// av = foto profil KakaoTalk, ig = username Instagram
const PEOPLE = {
  Kris:      { av: 'img/av-kris.jpg', ig: 'kris.chandra' },
  Juna:      { av: 'img/av-juna.jpg', ig: 'junahann' },
  Surya:     { av: 'img/av-surya.jpg', ig: 'suryalix' },
  Sadewa:    { av: 'img/av-sadewa.jpg', ig: 'sadewaa.k' },
  Gemilang:  { av: 'img/av-gemilang.jpg', ig: 'gemilangrp' },
  Bagas:     { av: 'img/av-bagas.jpg', ig: 'bagasbinn' },
  Ilham:     { av: 'img/av-ilham.jpg', ig: 'ilham.jeong' },
  Kino:      { av: 'img/av-kino.jpg', ig: 'kinoo.lee' },
  Mama:      { av: '' },
  Mina:      { av: 'img/av-mina.jpg' },
  MeongMart: { av: 'img/ig/cats-0.jpg' },
};

// pesan: [siapa, teks, jam, opsi]
//   siapa: 'me' = Kino, 'them' = lawan chat, 'date' = tanggal (YYYY-MM-DD), nama = pengirim di grup
//   opsi: { img, deleted, call }
// SETTING (AU): Kino = tim IT di perusahaan raksasa (sibuk biasa). Kris = product dev di perusahaan gede
// (ga segede kantor Kino), divisinya terkenal super sibuk. Semua tinggal di satu apartemen raksasa (tower B).
// Kris pake alasan "sibuk" — tapi Bagas (sekantor sama Kris) bilang minggu ini timnya santai.
const CHATS = [
  {
    id: 'kris', name: 'Kris', person: 'Kris', pinned: true,
    msgs: [
      ['date', '2026-10-03'],
      ['me', 'selamat ulang tahun, kakek.', '00.00'],
      ['me', 'udah. tidur sana, nanti keriputnya nambah', '00.00'],
      ['them', 'KINO', '00.01'],
      ['them', 'kamu begadang biar jadi yg pertama??', '00.01'],
      ['me', 'kebetulan kebangun', '00.02'],
      ['them', 'boonggg 🥹', '00.02'],
      ['them', 'thank you sayang', '00.03'],
      ['me', 'kuenya agak gosong. jgn protes', '00.03'],
      ['them', 'gak bakallll. aku abisin semua hehe', '00.04'],
      ['date', '2026-10-08'],
      ['them', 'aku beliin soonie snack', '19.20'],
      ['me', 'soonie gaboleh kebanyakan', '19.31'],
      ['them', 'dikit doang kokk', '19.31'],
      ['me', 'kamu tuh manjain kucing aku terus', '19.32'],
      ['them', 'kucing kita*', '19.32'],
      ['me', '...', '19.40'],
      ['me', 'iya. kucing kita. puas?', '19.40'],
      ['date', '2026-10-11'],
      ['me', '', '23.21', { img: 'img/kita-1.jpg' }],
      ['them', 'jadiin wallpaper ah', '23.22'],
      ['me', 'norak bgt sumpah', '23.22'],
      ['them', 'udah dong wkwkwk', '23.23'],
      ['date', '2026-10-14'],
      ['them', 'kino', '00.12'],
      ['them', 'aku udah di lobi', '00.12'],
      ['me', 'bentar. soonie lg di pangkuan', '00.13'],
      ['them', 'okayy aku tungguinn', '00.13'],
      ['them', 'dingin sih tp gapapa', '00.14'],
      ['me', 'ck. iya iya turun', '00.14'],
      ['date', '2026-10-16'],
      ['them', 'besok mau makan apa', '22.40'],
      ['me', 'terserah kamu lah', '22.51'],
      ['them', 'masakan kamuuu?', '22.51'],
      ['me', 'dih ngelunjak', '22.52'],
      ['me', 'iya. besok jam 7. telat semenit aku makan sendiri', '22.52'],
      ['date', '2026-10-18'],
      ['them', 'sorry ya tadi aku diem aja', '02.03'],
      ['them', 'lg banyak pikiran', '02.03'],
      ['me', 'tidur sana', '02.30'],
      ['me', 'besok cerita', '02.30'],
      ['date', '2026-10-19'],
      ['me', 'udah makan?', '21.02'],
      ['me', 'aku masak kebanyakan', '21.02'],
      ['me', 'mampir ya kalo udah pulang', '21.02'],
      ['them', 'nanti aja', '21.40'],
      ['them', 'aku capek bgt, td meeting sampe malem', '21.40'],
      ['me', 'yaudah tidur gih. minum air dulu', '21.41'],
      ['date', '2026-10-20'],
      ['me', '', '13.15', { img: 'img/soonie-jaket.jpg' }],
      ['me', 'jaket kamu masih di unit aku', '13.15'],
      ['me', 'dori udah nganggep itu kasurnya', '13.16'],
      ['me', 'cepet ambil. sekalian mampir', '13.16'],
      ['me', 'malem ini dinner di unit aku ya. aku masak bulgogi', '17.40'],
      ['them', 'aduh sorry kino', '18.52'],
      ['them', 'malem ini lembur, launch minggu ini hectic bgt', '18.52'],
      ['me', 'oh. yaudah, bulgoginya aku makan sendiri ya. jangan nyesel', '18.55'],
      ['me', 'jaketnya?', '18.55'],
      ['them', 'nanti ya', '18.57'],
      ['me', 'jangan pulang kemaleman. kantor kamu ga ada kasur', '22.30'],
      ['date', '2026-10-21'],
      ['them', 'pagi kino', '08.10'],
      ['them', 'semalem sorry ya, lembur sampe malem', '08.10'],
      ['me', 'iya. sarapan dulu sana', '08.40'],
      ['me', 'tgl 25 kamu free?', '19.10'],
      ['them', 'liat nanti ya, lg crunch time', '19.40'],
      ['them', 'malem ini meeting sampe malem kayaknya', '19.40'],
      ['me', 'oke. kalo free kabarin. kalo ga, aku rayain sama soonie aja', '19.45'],
      ['date', '2026-10-22'],
      ['them', 'kino, minggu ini aku jarang di apart ya', '07.50'],
      ['them', 'nginep kantor, biar ga bolak balik', '07.50'],
      ['me', 'iya. bawa jaket, kantor kamu dingin', '09.10'],
      ['me', '', '20.11', { call: 'Panggilan dibatalkan' }],
      ['me', '', '20.30', { call: 'Panggilan dibatalkan' }],
      ['me', 'pulang ga malem ini?', '20.31'],
      ['them', 'ga kayaknya, masih di kantor', '22.58'],
      ['them', 'kamu tidur duluan ya', '22.58'],
      ['me', 'oke. selimutnya jangan lupa', '23.10'],
      ['date', '2026-10-23'],
      ['me', 'kris', '09.00'],
      ['me', 'udah makan?', '12.30'],
      ['me', '', '15.10', { call: 'Panggilan dibatalkan' }],
      ['me', 'kamu di mana', '19.00'],
      ['me', '', '21.40', { call: 'Panggilan dibatalkan' }],
      ['me', 'bales. jangan bikin aku nyamperin kantor kamu', '22.00'],
      ['me', 'kris.', '23.30'],
      ['date', '2026-10-24'],
      ['me', 'kris.', '14.05'],
      ['me', '', '14.05', { img: 'img/lapor-2.jpg' }],
      ['me', 'ini kamu?', '14.06'],
      ['them', 'kino', '14.06:20'],
      ['them', 'kino itu', '14.06:24'],
      ['them', 'bukan', '14.06:29'],
      ['them', 'maksud aku', '14.06:35'],
      ['them', '', '14.06:42', { call: 'Panggilan tak terjawab' }],
      ['them', 'angkat', '14.06:50'],
      ['them', 'kino please angkat', '14.06:53'],
      ['them', 'aku bisa jelasin', '14.06:58'],
      ['them', '', '14.07:04', { call: 'Panggilan tak terjawab' }],
      ['them', 'KINO', '14.07:12'],
      ['me', 'hhhh', '14.07:18'],
      ['them', '', '14.09', { call: 'Panggilan suara 21:44', afterFight: true }],
      ['them', '', '14.33', { call: 'Panggilan tak terjawab', afterFight: true }],
      ['them', 'kino please', '14.34', { afterFight: true }],
      ['them', 'aku bisa jelasin semuanya', '14.36', { afterFight: true }],
      ['me', 'aku bilang jangan telfon.', '14.37', { afterFight: true }],
      ['me', 'aku kerja.', '14.37', { afterFight: true }],
      ['them', 'yuna itu cuma...', '14.40', { afterFight: true }],
      ['them', 'nggak. aku ga mau bikin alasan', '14.41', { afterFight: true }],
      ['them', 'aku salah. aku tau', '14.41', { afterFight: true }],
      ['them', '', '14.52', { call: 'Panggilan tak terjawab', afterFight: true }],
      ['them', 'kino aku tau kamu baca', '15.10', { afterFight: true }],
      ['them', 'please. 5 menit aja', '15.11', { afterFight: true }],
      ['them', '', '15.30', { call: 'Panggilan tak terjawab', afterFight: true }],
      ['them', '', '15.31', { call: 'Panggilan tak terjawab', afterFight: true }],
      ['them', 'aku nunggu di lobi kantor kamu', '16.05', { afterFight: true }],
      ['them', 'aku ga naik. aku nunggu aja', '16.06', { afterFight: true }],
      ['them', 'kino', '16.40', { afterFight: true }],
      ['them', '', '17.05', { call: 'Panggilan tak terjawab', afterFight: true }],
      ['me', 'nanti kita ngomong.', '17.20', { afterFight: true }],
      ['me', 'sekarang jangan ganggu aku dulu.', '17.20', { afterFight: true }],
      ['them', 'oke', '17.21', { afterFight: true }],
      ['them', 'maaf', '17.21', { afterFight: true }],
      ['them', 'kino??', '18.07', { afterFight: true }],
      ['them', 'bagas bilang kamu pingsan', '18.07', { afterFight: true }],
      ['them', 'kino angkat', '18.08', { afterFight: true }],
      ['them', '', '18.08', { call: 'Panggilan tak terjawab', afterFight: true }],
      ['them', '', '18.09', { call: 'Panggilan tak terjawab', afterFight: true }],
      ['them', '', '18.09', { call: 'Panggilan tak terjawab', afterFight: true }],
      ['them', 'aku balik ke sana sekarang', '18.10', { afterFight: true }],
      ['them', 'kino please please please', '18.14', { afterFight: true }],
      ['them', 'aku di depan klinik lt 3, ga boleh masuk', '18.38', { afterFight: true }],
      ['them', 'katanya cuma keluarga', '18.39', { afterFight: true }],
      ['them', 'aku bukan keluarga ya ternyata', '18.39', { afterFight: true }],
      ['them', 'ini salah aku. semuanya salah aku', '18.55', { afterFight: true }],
      ['them', '', '19.02', { call: 'Panggilan tak terjawab', afterFight: true }],
      ['them', 'kino please kabarin aku', '19.30', { afterFight: true }],
      ['them', 'satu huruf aja', '19.31', { afterFight: true }],
      ['them', 'aku masih di sini. aku ga ke mana2', '20.05', { afterFight: true }],
      ['me', 'jangan ke sini.', '20.50', { afterFight: true }],
      ['me', 'aku gapapa. pulang.', '20.51', { afterFight: true }],
      ['them', 'oke. maaf', '20.52', { afterFight: true }],
      ['them', 'kino', '23.36', { afterFight: true }],
      ['them', 'aku nulis sesuatu di Catatan yg kita share', '23.37', { afterFight: true }],
      ['them', 'please dibaca. abis itu terserah kamu', '23.37', { afterFight: true }],
      ['them', 'kodenya kamu pasti tau', '23.38', { afterFight: true }],
      ['them', 'hari pertama kita.', '23.38', { afterFight: true }],
    ],
  },
  {
    id: 'grup', name: 'pemuda nyasar 😎', group: true, members: 8,
    msgs: [
      ['date', '2026-10-20'],
      ['Bagas', 'WOI siapa yg ngambil paket gue di lobi', '09.12'],
      ['Surya', 'not me!!', '09.13'],
      ['Ilham', 'bukan gue ya', '09.13'],
      ['Juna', 'bukan gue 😇', '09.14'],
      ['Sadewa', 'juna sih pasti', '09.14'],
      ['Gemilang', 'wkwkwkwk', '09.14'],
      ['me', 'JUNA', '09.15'],
      ['Juna', 'AMPUN BANG 😭😭 gue kira punya gue sumpah', '09.15'],
      ['date', '2026-10-21'],
      ['Ilham', 'siapa yg nyalain mesin cuci di laundry lt 2 jam 3 pagi', '07.10'],
      ['me', 'gue lah. knp', '07.31'],
      ['Ilham', 'gpp. berisik aja soalnya. bukan protes', '07.31'],
      ['date', '2026-10-22'],
      ['Surya', 'guys don\'t forget dinner jam 7 di unit aku yaa!!', '17.20'],
      ['Ilham', 'dateng. bukan karena laper', '17.21'],
      ['me', 'dateng. siapa yg bayar', '17.42'],
      ['Surya', 'bang kinooo 🥰', '17.42'],
      ['me', 'mimpiii', '17.43'],
      ['me', 'kris ikut ga', '17.43'],
      ['Kris', 'gabisa, sorry. ada urusan', '18.40'],
      ['Sadewa', '', '18.41', { deleted: true }],
      ['Gemilang', 'dewa lo ngirim apaan', '18.41'],
      ['Juna', '...', '18.41'],
      ['Sadewa', 'salah grup sorry', '18.42'],
      ['me', '?', '18.42'],
      ['Surya', 'let\'s goo jam 7 yaa!!', '18.43'],
      ['date', '2026-10-23'],
      ['Surya', 'wait bang kris udh 2 hari ga keliatan di lobi ya? is he okay?', '20.02'],
      ['Juna', 'katanya lembur mulu, divisinya kan gila sibuknya', '20.04'],
      ['Bagas', 'lembur apaan. gue setim sama dia, dia cuti', '20.05'],
      ['Bagas', 'literally cuti', '20.05'],
      ['Juna', '...', '20.06'],
      ['me', 'urus urusan lo masing2', '20.11'],
      ['Surya', 'okay bang 🥲 sorry', '20.11'],
      ['date', '2026-10-24'],
      ['Surya', 'besok bang kino\'s birthday... we still celebrate pelan2 kan? 🥺🎂', '21.00'],
      ['Juna', 'ssst', '21.00'],
      ['Surya', 'oops my bad hehe', '21.01'],
      ['me', 'gausah heboh', '21.05'],
      ['Surya', 'bang kino 10 minutes lagiii', '23.50'],
      ['date', '2026-10-25'],
      ['Surya', 'HAPPY BIRTHDAY BANG KINO 🎂🐰 semoga bahagia terus, you deserve all the happiness in the world 🫶', '00.00'],
      ['Juna', 'HAPPY BIRTHDAY BANG KINO 😭🎂🎂 makin tua makin galak tp gue sayang', '00.00'],
      ['Ilham', 'hbd bang. bukan gue yg pertama ngucapin ya, gpp 🦊', '00.01'],
      ['Sadewa', 'hbd bang. jangan sakit lagi. ribet', '00.01'],
      ['Gemilang', 'BANGGG HBD 🥹🎂 gue terharu lo udah setua ini 💐', '00.02'],
      ['Bagas', 'hbd kino. paket gue anggep kado', '00.03'],
    ],
  },
  {
    id: 'juna', name: 'Juna', person: 'Juna',
    msgs: [
      ['date', '2026-10-20'],
      ['them', 'BANG', '21.05'],
      ['them', 'BANG BANG BANG', '21.05'],
      ['them', 'LO UDAH LIAT STORY BANG KRIS BELOM 😭😭', '21.05'],
      ['me', 'belom. knp emang', '21.20'],
      ['them', '', '21.21', { img: 'img/story-kris-gemilang.jpg' }],
      ['them', 'katanya lembur kan?? 🧐🧐 kok ramen', '21.21'],
      ['me', 'terus?', '21.25'],
      ['them', 'gpp sih... gue cuma... 😶', '21.25'],
      ['them', 'just asking 🙏 jangan bunuh gue', '21.26'],
      ['me', 'gausah aneh2 lo', '21.26'],
      ['date', '2026-10-22'],
      ['them', 'bang...', '23.30'],
      ['them', 'unit bang kris GELAP 😨', '23.30'],
      ['them', 'dia ga pulang?? diculik alien??', '23.30'],
      ['me', 'nginep kantor katanya', '23.40'],
      ['them', 'oh.', '23.40'],
      ['them', 'oke bang... 🥲', '23.41'],
      ['date', '2026-10-24'],
      ['them', 'bang lo oke?? 🥺🥺', '22.14'],
      ['them', 'gue di unit sebelah kalo butuh. gue bisa nangis bareng lo kalo perlu 😭', '22.15'],
    ],
  },
  {
    id: 'gemilang', name: 'Gemilang', person: 'Gemilang',
    msgs: [
      ['date', '2026-10-24'],
      ['them', 'bang', '20.31'],
      ['them', 'bang kris kenapa sih 😩', '20.31'],
      ['them', 'seminggu ini ngajakin gue jalan mulu', '20.32'],
      ['them', 'tp tiap duduk dia diem, buka hp, liatin foto lo, terus ditutup lagi. kayak adegan drama jam 10 malem', '20.33'],
      ['them', 'gue sih seneng ditraktir honestly', '20.33'],
      ['them', 'tp rasanya kayak jalan sama orang yg hatinya ketinggalan di rumah 💔', '20.34'],
      ['me', 'puitis amat lo', '20.45'],
      ['me', 'tanya sendiri ke orangnya', '20.45'],
      ['them', 'lah gue nanya ke lo justru 😭 hidup ini berat bang', '20.47'],
    ],
  },
  {
    id: 'sadewa', name: 'Sadewa', person: 'Sadewa',
    msgs: [
      ['date', '2026-10-22'],
      ['them', 'bang.', '18.50'],
      ['them', 'yg td di grup... salah kirim. lupain', '18.50'],
      ['them', 'tapi ya. gue mau bilang biar ga salah paham. bukan karena gue peduli', '18.51'],
      ['them', 'kemaren bang kris ngajak gue nonton', '18.51'],
      ['them', 'gue kira lo ikut. dia bilangnya "rame2"', '18.52'],
      ['them', 'ternyata berdua doang. ga asik sumpah.', '18.52'],
      ['them', 'dia ketawa mulu. pas filmnya kelar diem lama. aneh.', '18.53'],
      ['me', 'terus lo mau gue ngapain', '19.05'],
      ['them', 'ga ngapa2in. gue cuma ga suka nyimpen hal ginian', '19.06'],
      ['me', 'yaudah. thanks udh bilang', '19.10'],
      ['me', 'next time popcorn bayar sendiri', '19.10'],
      ['them', 'udah gue bayar sendiri btw. gue ga semurah itu', '19.11'],
    ],
  },
  {
    id: 'ilham', name: 'Ilham', person: 'Ilham',
    msgs: [
      ['date', '2026-10-21'],
      ['them', 'bang, belum tidur kan', '23.40'],
      ['them', 'td bang kris nanya aneh di lift', '23.40'],
      ['them', '"kalo lo sayang orang tapi ngerasa ga disayang balik, itu salah siapa"', '23.41'],
      ['me', 'terus lo jawab apa', '23.52'],
      ['them', '"depends." emang gue apaan, konsultan', '23.52'],
      ['me', 'jawaban apaan itu', '23.53'],
      ['them', 'ya gue masih intern bang. gaji gue ga cukup buat jawab gituan 🙄', '23.53'],
      ['them', 'bukan berarti gue kepikiran ya', '23.54'],
    ],
  },
  {
    id: 'surya', name: 'Surya', person: 'Surya',
    msgs: [
      ['date', '2026-10-23'],
      ['them', 'bang kino 🥺', '19.08'],
      ['them', 'lo sama bang kris okay kan? akhir2 you look so tired', '19.08'],
      ['me', 'urusan lo?', '19.30'],
      ['them', 'of course it\'s my business, I love you both 🥺', '19.30'],
      ['them', 'no pressure buat cerita kok. I just want you to know gue ada', '19.31'],
      ['me', 'aman.', '19.35'],
      ['them', 'okayy 🫶 besok I\'ll bake you brownies yaa', '19.35'],
      ['me', 'jgn pake kismis', '19.36'],
      ['them', 'noted bang, no kismis, extra love 🫡', '19.36'],
    ],
  },
  {
    id: 'mama', name: 'Mama', person: 'Mama',
    msgs: [
      ['date', '2026-10-24'],
      ['them', 'nak besok ultah mau dimasakin apa', '12.02'],
      ['them', 'pulang ga?', '12.02'],
      ['me', 'blm tau ma', '12.40'],
      ['them', 'sama kris? salamin ya', '12.41'],
      ['me', 'iya ma', '12.45'],
    ],
  },
  {
    id: 'bagas', name: 'Bagas', person: 'Bagas',
    msgs: [
      ['date', '2026-10-21'],
      ['them', 'kino, lo masih bangun?', '00.41'],
      ['them', 'jaket gue dipinjem kris. belom balik', '00.41'],
      ['them', 'katanya jaket dia di unit lo', '00.42'],
      ['me', 'terus', '00.50'],
      ['them', 'ya balikin lah', '00.50'],
      ['me', 'ambil sendiri ke kris', '00.51'],
      ['me', 'jgn chat gue jam segini', '00.51'],
      ['them', 'yaudah k', '00.52'],
      ['date', '2026-10-23'],
      ['me', 'bin', '13.02'],
      ['me', 'kris sibuk bgt ya minggu ini', '13.02'],
      ['them', 'sibuk? siapa bilang', '13.10'],
      ['them', 'nggak. launch udh kelar minggu lalu', '13.10'],
      ['them', 'dia cuti dari kemaren', '13.11'],
      ['me', 'cuti?', '13.12'],
      ['them', '2 hari. katanya ada urusan', '13.12'],
      ['them', 'katanya mau mikir. hidupnya kerasa muter2 di tempat', '13.12'],
      ['them', 'gue kira soal kerjaan', '13.13'],
      ['them', 'lo ga tau? serius?', '13.13'],
      ['me', 'sekarang tau.', '13.20'],
      ['them', 'oke. sorry gue yg ngasih tau', '13.20'],
      ['me', 'oke.', '13.25'],
      ['them', 'kino. lampu lo masih nyala tuh', '23.20'],
      ['them', 'lampu unit lo masih nyala', '23.20'],
      ['me', 'kenapa', '23.35'],
      ['them', 'gue cuma mau ngomong satu hal. abis itu gue diem', '23.36'],
      ['them', 'diem itu bukan berarti kuat', '23.37'],
      ['them', 'lo nunggu dia ngomong duluan. tapi kadang orang yg salah juga lagi nunggu ditanya. dua2nya nunggu, ga ada yg pulang', '23.37'],
      ['me', 'gue ga mau nanya. gue mau dia yg bilang', '23.40'],
      ['them', 'fair sih', '23.41'],
      ['them', 'tapi jangan sampe lo yg ilang duluan cuma gara2 nunggu', '23.42'],
      ['them', 'udah. tidur. besok lo on call', '23.42'],
      ['me', 'bin', '23.50'],
      ['me', 'thanks', '23.50'],
      ['them', 'hm. sama2', '23.51'],
    ],
  },
  {
    id: 'mina', name: 'Kak Mina (Lead IT)', person: 'Mina',
    msgs: [
      ['date', '2026-10-19'],
      ['them', 'kino besok jam 10 ada maintenance server ya, standby', '10.02'],
      ['me', 'ok kak', '10.30'],
      ['date', '2026-10-21'],
      ['them', 'jangan telat standup lagi ya', '08.40'],
      ['me', 'gue ga pernah telat kak', '08.52'],
      ['them', 'minggu lalu 40 menit', '08.52'],
      ['me', 'liftnya penuh kak sumpah', '08.53'],
      ['them', 'kino kantor kita nyambung sama apart lo. tinggal turun lift, nyebrang LG. 3 menit', '08.53'],
      ['date', '2026-10-22'],
      ['them', 'tiket lo udh close semua, nice', '16.08'],
      ['them', 'tp lo oke? tadi pagi diem bgt pas meeting', '16.10'],
      ['me', 'oke kak', '16.40'],
      ['them', 'okay. kalo ada apa2 bilang ya', '16.41'],
      ['date', '2026-10-24'],
      ['them', 'KINO prod down', '08.06'],
      ['them', 'semua pembeli ga bisa login, ga bisa checkout. lo lead ya hari ini', '08.06'],
      ['me', 'on it kak', '08.07'],
      ['them', 'CTO nanya ETA', '09.00'],
      ['me', 'belum ada. jangan janjiin apa2 kak', '09.05'],
      ['them', 'oke. gue tahan mereka', '09.05'],
      ['them', 'update tiap 30 menit ya, direksi nanya terus', '10.30'],
      ['me', 'db replica timeout. lagi rollback', '10.31'],
      ['them', 'kino, VP mau masuk war room jam 1', '12.40'],
      ['me', 'suruh nunggu. gue lagi di tengah', '12.41'],
      ['them', '...oke. gue yg ngadepin', '12.41'],
      ['them', 'kino lo udah makan?', '14.00'],
      ['me', 'belum kak', '15.20'],
      ['them', 'makan dulu 5 menit. perintah', '15.20'],
      ['me', 'iya kak', '15.40'],
      ['them', 'kino, CTO nanya kenapa lo ga di war room', '16.20'],
      ['me', 'root cause ketemu. 1 jam lagi', '16.46'],
      ['them', 'you did amazing. tapi lo juga manusia ya', '16.47'],
      ['them', 'UP 😭 gue liat dashboardnya. makasih kino', '17.29'],
      ['them', 'kino lo di klinik ya. jangan mikirin prod, udah aman', '17.55'],
      ['them', 'gue udah kabarin mama lo', '18.30'],
      ['me', 'udah sadar kak. maaf ngerepotin', '20.45'],
      ['them', 'jangan minta maaf. pulang, istirahat. itu perintah', '20.46'],
      ['them', 'on-call besok tetep juna yg pegang. happy birthday duluan 🎂', '20.46'],
      ['me', 'makasih kak', '20.50'],
    ],
  },
  {
    id: 'kru', name: 'tim IT 💻', group: true, members: 6,
    msgs: [
      ['date', '2026-10-20'],
      ['Juna', 'bang patch nya gue telat deploy ya', '11.00'],
      ['me', 'iya', '11.04'],
      ['me', 'dari minggu lalu', '11.04'],
      ['Ilham', 'telat 2 sprint bang juna tuh', '11.05'],
      ['Juna', 'ilham pengkhianat', '11.05'],
      ['date', '2026-10-21'],
      ['Ilham', 'bang server staging down lagi 😭', '14.20'],
      ['me', 'restart', '14.21'],
      ['Ilham', 'udah bang ih', '14.21'],
      ['me', 'restart lagi', '14.22'],
      ['Ilham', 'eh nyala. how. wkwk', '14.24'],
      ['date', '2026-10-23'],
      ['me', 'senin standup 9.30. yg telat traktir kopi', '15.00'],
      ['Juna', 'bang abis kantor makan yuk, ajak bang kris', '15.02'],
      ['me', 'dia sibuk', '15.20'],
      ['Ilham', 'okee bang', '15.21'],
      ['Juna', 'bang kino ga telat tp yg traktir kopi bang kino wkwkwk 😋', '09.45'],
      ['me', 'sekali ini doang ya', '09.46'],
      ['date', '2026-10-24'],
      ['Ilham', 'BANG PROD DOWN', '08.02'],
      ['Ilham', 'semua 500 bang 😭😭 login, checkout, semuanya', '08.02'],
      ['Juna', 'BUKAN GUE SUMPAH DEMI APAPUN 😭', '08.03'],
      ['me', 'log.', '08.05'],
      ['Ilham', 'database timeout bang. replica 2 ga nyaut', '08.09'],
      ['me', 'juna cek deploy terakhir', '08.10'],
      ['Juna', '...', '08.22'],
      ['Juna', 'deploy gue bang', '08.22'],
      ['Juna', 'migration 0042 😭 gue kira udah dites di staging', '08.22'],
      ['me', 'staging mati 3 hari, jun.', '08.23'],
      ['me', 'rollback. sekarang.', '08.23'],
      ['Juna', 'rollback jalan bang!!', '09.10'],
      ['Ilham', 'error turun ke 40%', '09.12'],
      ['Ilham', 'bang naik lagi. 90%', '09.31'],
      ['Juna', 'KENAPA NAIK LAGI 😭😭', '09.31'],
      ['me', 'failover ke replica 1', '09.33'],
      ['Ilham', 'udah. replica 1 lag 40 menit bang', '09.50'],
      ['me', 'ck. stop semua cron.', '09.51'],
      ['Juna', 'CS nanya mulu bang, twitter rame, ada yg bikin meme logo kita kebakar 🔥', '10.15'],
      ['me', 'jangan buka twitter. kerja.', '10.16'],
      ['Ilham', 'bang rollback nya stuck', '11.40'],
      ['Ilham', 'migration lock ga lepas. bukan gue yg salah. kayaknya', '11.40'],
      ['me', 'restart replica 2. jgn panik', '11.41'],
      ['Ilham', 'udah. sekarang replica 2 ga mau nyala sama sekali 🙃', '12.05'],
      ['Juna', 'bang gue mau resign aja kayaknya 😭', '12.06'],
      ['me', 'resign abis prod nyala.', '12.06'],
      ['Ilham', 'UP BANG. login masuk lagi', '12.38'],
      ['Juna', '🥹🥹🥹', '12.38'],
      ['Ilham', '...down lagi', '12.51'],
      ['Juna', 'gue mau nangis di toilet bentar', '12.52'],
      ['me', 'nangis nanti. pegang monitoring.', '12.52'],
      ['Ilham', 'bang ada session user yg dobel. 3000-an', '13.20'],
      ['me', 'jangan disentuh. snapshot dulu.', '13.21'],
      ['me', 'gue ke pantry 5 menit', '14.04'],
      ['Juna', 'bang lo udah 15 menit di pantry', '14.20'],
      ['Ilham', 'bang?', '14.24'],
      ['me', 'gue balik.', '14.31'],
      ['me', 'ilham lepas lock manual. juna matiin semua worker. ga ada yg deploy apa2 sampe gue bilang', '14.32'],
      ['Juna', 'siap bang 🫡', '14.32'],
      ['Ilham', 'bang mata lo merah. bukan gue merhatiin', '14.40'],
      ['me', 'kerja.', '14.40'],
      ['Ilham', 'bang lo belum makan dari pagi', '15.00'],
      ['me', 'nanti', '15.05'],
      ['Juna', 'bang gue beliin gimbap ya. taro di meja lo', '15.06'],
      ['me', 'thanks', '15.30'],
      ['Ilham', 'lock lepas. tapi lag replica makin parah 😑', '15.50'],
      ['Juna', 'bang direksi masuk war room 😨', '16.20'],
      ['me', 'biarin. jangan ada yg ngomong sama gue 20 menit', '16.21'],
      ['me', 'ketemu.', '16.44'],
      ['me', 'failover tadi pagi bikin replica baca lock lama. 0042 nungguin lock punya proses yg udah mati. makanya muter2 terus', '16.45'],
      ['Juna', 'bang gue ga ngerti tapi I\'m so proud 😭', '16.45'],
      ['me', 'kill pid 8812. promote replica 1. rerun 0042 pelan2', '16.47'],
      ['Ilham', 'jalan...', '17.05'],
      ['Ilham', 'error 2%', '17.18'],
      ['Ilham', 'bang. lo pucet banget. bukan gue merhatiin', '17.20'],
      ['me', 'gapapa. lanjut', '17.22'],
      ['Ilham', '0%. PROD UP BANG 😭', '17.28'],
      ['Juna', 'BANG KINO LITERALLY GENIUS 😭😭😭🙏', '17.28'],
      ['me', 'pantau 1 jam. gue bikin kopi', '17.31'],
      ['Ilham', 'BANG KINO JATOH DI PANTRY', '17.41'],
      ['Juna', 'GUE PANGGIL KAK MINA', '17.41'],
      ['Ilham', 'bang bangun bang 😭😭', '17.42'],
      ['Juna', 'DIA GA NYAUT 😭😭 ILHAM TELFON KLINIK CEPET', '17.42'],
      ['Ilham', 'UDAH. mereka bawa tandu', '17.44'],
      ['Juna', 'udah dibawa ke klinik lt 3', '17.50'],
      ['Juna', 'kata dokternya kecapean + stres. infus dulu', '18.15'],
      ['Ilham', 'prod masih up. gue jagain. buat dia', '19.10'],
      ['me', 'gue gapapa. jangan lebay', '20.40'],
      ['Juna', 'BANG 😭😭😭', '20.40'],
      ['Ilham', 'bang. jangan gitu lagi', '20.41'],
      ['me', 'juna. besok kita ngobrol soal deploy', '20.42'],
      ['Juna', 'BANG 😭 LO MASIH GALAK. GUE LEGA BGT', '20.42'],
    ],
  },
  {
    id: 'meong', name: 'Meong Mart', person: 'MeongMart', channel: true,
    msgs: [
      ['date', '2026-10-19'],
      ['them', 'Pesanan #4412 sudah dikirim 🚚\nPasir tofu 7L x2, snack ikan x1', '14.00'],
      ['date', '2026-10-20'],
      ['them', 'Pesanan #4412 telah sampai di lobi Tower B. Terima kasih sudah belanja di Meong Mart 🐱', '16.30'],
      ['date', '2026-10-24'],
      ['them', '🎂 Selamat ulang tahun dari Meong Mart! Kupon 25% berlaku sampai 31 Oktober.', '12.00'],
    ],
  },
];

// ===== balasan pilihan (story): tombol muncul di chat setelah jam "at" =====
const REPLIES = [
  { id: 'k5', chat: 'kris', at: '2026-10-24T23:38', opts: [
    { me: ['aku capek. besok aja'], them: ['please kino', 'sebelum jam 12'] },
    { me: ['aku baca'], them: ['makasih'] } ] },
  { id: 'kx1', chat: 'kris', at: '2026-10-20T19:20', opts: [
    { me: ['bulgoginya aku simpenin. angetin pas pulang'], them: ['...makasih kino', 'kamu ga usah repot2'] },
    { me: ['oke.'], them: [] } ] },
  { id: 'kx2', chat: 'kris', at: '2026-10-21T08:12', opts: [
    { me: ['bulgoginya masih ada di kulkas.'], them: ['nanti aku ambil ya'] },
    { me: ['lembur di mana?'], them: ['...di kantor lah kino 😅'] } ] },
  { id: 'kx3', chat: 'kris', at: '2026-10-22T07:51', opts: [
    { me: ['jaket kamu aku cuciin ya. biar kalo pulang wangi'], them: ['kino...', 'makasih'] },
    { me: ['oh. oke.'], them: [] } ] },
  { id: 'j1', chat: 'juna', at: '2026-10-20T21:26', opts: [
    { me: ['lo tau sesuatu?'], them: ['GA BANG', 'sumpah demi charger lo', '...dikit 😶', 'tanya bang kris aja plis jangan libatin gue 🙏😭'] },
    { me: ['tidur sana'], them: ['iya bang... 😔 good night 🌙✨'] } ] },
  { id: 'j2', chat: 'juna', at: '2026-10-24T22:15', opts: [
    { me: ['gue oke'], them: ['BOONG 😭', 'gue bawain susu pisang ya. 2. biar lo kuat'] },
    { me: ['sini'], them: ['OTW 🏃💨💨'] } ] },
  { id: 'g1', chat: 'gemilang', at: '2026-10-24T20:47', opts: [
    { me: ['dia ngomong apa lagi'], them: ['ga banyak bang', 'cuma sekali dia bilang "gue kangen rumah"', 'padahal kita lg di lobi apart. ini adegan drama banget sumpah 😩'] },
    { me: ['thanks udh ngasih tau'], them: ['iya bang 🥺 gue di pihak lo selamanya'] } ] },
  { id: 's1', chat: 'sadewa', at: '2026-10-22T19:11', opts: [
    { me: ['nonton apa'], them: ['film ttg orang yg telat sadar', 'ironis. bukan gue nyindir ya'] },
    { me: ['dia nangis?'], them: ['...', 'dikit. bukan urusan gue sih'] } ] },
  { id: 'y1', chat: 'surya', at: '2026-10-23T19:36', opts: [
    { me: ['makasih surya'], them: ['🥹🥹🥹', 'bang kino said thank you??', 'screenshot. framed. forever 🫶'] },
    { me: ['kismis = mati'], them: ['noted bang 🫡 no kismis, more love'] } ] },
  { id: 'i1', chat: 'ilham', at: '2026-10-21T23:54', opts: [
    { me: ['next time jawab "tanya orangnya langsung"'], them: ['oke. bukan karena lo nyuruh ya', '...tapi oke'] },
    { me: ['tidur. besok ngantor'], them: ['lo juga. bukan gue peduli'] } ] },
  { id: 'b1', chat: 'bagas', at: '2026-10-21T00:52', opts: [
    { me: ['jaketnya gue pake buat alas kucing'], them: ['...', 'yaudah. kucingnya anget kan'] },
    { me: ['tidur bin'], them: ['lo yg tidur'] } ] },
  { id: 'm1', chat: 'mama', at: '2026-10-24T12:45', opts: [
    { me: ['bikinin kue ma'], them: ['oke nak', 'ajak kris ya'] },
    { me: ['gausah repot ma'], them: ['repot apanya, anak mama ultah', 'pulang ya'] } ] },
  { id: 'r1', chat: 'grup', at: '2026-10-24T21:05', opts: [
    { me: ['siapa yg ngabisin susu gue'], them: [['Bagas', 'JUNA'], ['Juna', 'kok gue lagi 😭']] },
    { me: ['jgn bikin aneh2 besok'], them: [['Surya', 'nothing planned kok bang 🤭'], ['Juna', 'ngga kok bang (boong)']] } ] },
];

// ===== Galeri, terbaru di atas =====
const PHOTOS = [
  { img: 'img/soonie-jaket.jpg', ts: '2026-10-20T13:14', place: 'Apart' },
  { img: 'img/jjigae.jpg', ts: '2026-10-19T20:55', place: 'Apart' },
  { img: 'img/doongie.jpg', ts: '2026-10-17T08:03', place: 'Apart' },
  { img: 'img/dori.jpg', ts: '2026-10-15T16:40', place: 'Apart' },
  { img: 'img/kino-1.jpg', ts: '2026-10-12T22:10', place: 'Kantor' },
  { img: 'img/kita-1.jpg', ts: '2026-10-11T23:20', place: 'Apart' },
  { img: 'img/kris-tidur.jpg', ts: '2026-10-09T02:31', place: 'Kantor' },
  { img: 'img/han-river.jpg', ts: '2026-10-03T21:47', place: 'Sungai Han' },
  { img: 'img/kris-ultah.jpg', ts: '2026-10-03T00:01', place: 'Apart' },
  { img: 'img/kris-solo.jpg', ts: '2026-08-02T17:45', place: 'Seongsu' },
  { img: 'img/kris-1.jpg', ts: '2026-03-25T19:22', place: 'Yeouido' },
  { img: 'img/kino-2.jpg', ts: '2026-01-02T11:05', place: 'Apart' },
  { img: 'img/kita-2.jpg', ts: '2025-12-24T22:10', place: 'Myeongdong' },
  { img: 'img/kris-2.jpg', ts: '2025-03-25T18:40', place: 'Lotte World' },
  { img: 'img/kafe-pertama.jpg', ts: '2018-03-25T15:12', place: 'Hongdae' },
  // --- foto lama berdua (2018–2024) ---
  { img: 'img/gal/old-0.jpg', ts: '2018-04-02T20:10', place: 'Sinchon' },
  { img: 'img/gal/old-1.jpg', ts: '2018-08-15T13:30', place: 'Apart lama' },
  { img: 'img/gal/old-2.jpg', ts: '2018-12-31T23:58', place: 'Hongdae' },
  { img: 'img/gal/old-3.jpg', ts: '2019-05-11T17:20', place: 'Itaewon' },
  { img: 'img/gal/old-4.jpg', ts: '2019-10-03T00:15', place: 'Apart lama' },
  { img: 'img/gal/old-5.jpg', ts: '2020-03-25T19:00', place: 'Photo booth Hongdae' },
  { img: 'img/gal/old-6.jpg', ts: '2020-11-21T16:40', place: 'Busan' },
  { img: 'img/gal/old-7.jpg', ts: '2021-07-18T21:05', place: 'Jeju' },
  { img: 'img/gal/old-8.jpg', ts: '2022-03-25T18:30', place: 'Photo booth Seongsu' },
  { img: 'img/gal/old-9.jpg', ts: '2023-02-11T14:10', place: 'Apart' },
  { img: 'img/gal/old-10.jpg', ts: '2024-06-29T20:45', place: 'Apart' },
  // --- tambahan: masakan kino, kucing, kris, berdua ---
  { img: 'vid/kucing-1.mp4', ts: '2026-10-19T08:20', place: 'Apart' },
  { img: 'img/gal/cook2-0.jpg', ts: '2026-10-18T19:40', place: 'Apart' },
  { img: 'vid/kucing-2.mp4', ts: '2026-10-14T22:05', place: 'Apart' },
  { img: 'img/gal/meong-1.jpg', ts: '2026-10-18T09:12', place: 'Apart' },
  { img: 'img/gal/chan-0.jpg', ts: '2026-10-16T23:58', place: 'Apart' },
  { img: 'img/gal/cook-2.jpg', ts: '2026-10-16T18:30', place: 'Apart' },
  { img: 'img/gal/meong-4.jpg', ts: '2026-10-13T10:05', place: 'Apart' },
  { img: 'img/ig/minchan-0.jpg', ts: '2026-10-10T21:15', place: 'Kantor' },
  { img: 'img/gal/cook2-1.jpg', ts: '2026-10-07T20:10', place: 'Apart' },
  { img: 'img/gal/chan-1.jpg', ts: '2026-10-05T14:22', place: 'Kantor' },
  { img: 'img/gal/meong-0.jpg', ts: '2026-10-04T16:00', place: 'Rumah mama' },
  { img: 'img/gal/cook-0.jpg', ts: '2026-10-02T23:40', place: 'Apart' },
  { img: 'img/ig/minchan-2.jpg', ts: '2026-09-28T19:05', place: 'Busan' },
  { img: 'img/gal/cook-3.jpg', ts: '2026-09-25T12:30', place: 'Apart' },
  { img: 'img/gal/chan-2.jpg', ts: '2026-09-21T01:14', place: 'Apart' },
  { img: 'img/gal/meong-3.jpg', ts: '2026-09-19T08:44', place: 'Apart' },
  { img: 'img/gal/cook2-2.jpg', ts: '2026-09-14T19:30', place: 'Apart' },
  { img: 'img/ig/minchan-4.jpg', ts: '2026-09-09T22:00', place: 'Jeju' },
  { img: 'img/gal/chan-3.jpg', ts: '2026-09-03T17:20', place: 'Hannam' },
  { img: 'img/gal/cook-1.jpg', ts: '2026-08-27T13:00', place: 'Apart' },
  { img: 'img/ig/minchan-6.jpg', ts: '2026-08-14T20:45', place: 'Hongdae' },
  { img: 'img/gal/chan-4.jpg', ts: '2026-07-30T11:10', place: 'Apart' },
  { img: 'img/gal/cook2-3.jpg', ts: '2026-07-19T19:00', place: 'Apart' },
  { img: 'img/gal/cook-4.jpg', ts: '2026-07-05T18:15', place: 'Gapyeong' },
  { img: 'img/gal/chan-5.jpg', ts: '2026-06-21T15:40', place: 'Seongsu' },
  { img: 'img/ig/minchan-7.jpg', ts: '2026-05-02T19:30', place: 'Hangang' },
  { img: 'img/ig/cats-2.jpg', ts: '2026-04-11T09:00', place: 'Apart' },
];

// ===== Instagram =====
// feed utama (yang muncul di beranda)
const INSTA = [
  { user: 'gemilangrp', img: 'img/ig-gemilang.jpg', ts: '2026-10-20T23:02', cap: 'ramen tengah malem 🍜 ditraktir tp yg traktir bengong mulu', likes: '214' },
  { user: 'sadewaa.k', img: 'img/ig-sadewa.jpg', ts: '2026-10-21T22:15', cap: 'nonton film sedih. yg nangis bukan gue', likes: '97' },
  { user: 'suryalix', img: 'img/ig-surya.jpg', ts: '2026-10-24T18:20', cap: 'practice batch buat besok 🤫 (no kismis, don\'t worry)', likes: '388' },
  { user: 'junahann', img: 'img/ig/juna-2.jpg', ts: '2026-10-21T19:40', cap: 'telat standup tp ganteng', likes: '156' },
  { user: 'ilham.jeong', img: 'img/ig/ilham-1.jpg', ts: '2026-10-20T08:30', cap: '🦊', likes: '121' },
  { user: 'kris.chandra', img: 'img/ig-kris.jpg', ts: '2026-03-25T21:00', cap: '8 tahun. rumah.', likes: '403' },
];
const g = (k, n) => Array.from({ length: n }, (_, i) => `img/ig/${k}-${i}.jpg`);
const PROFILES = {
  'kinoo.lee':    { person: 'Kino', name: 'Kino', bio: '🐰 platform eng @ lumen 🛒 · soonie doongie dori', followers: '1.204', following: '312', posts: [...g('kino', 8), 'img/ig/cats-1.jpg', 'img/ig/cats-2.jpg', 'img/ig/cats-3.jpg'] },
  'kris.chandra': { person: 'Kris', name: 'Kris', bio: '🐺 product dev · always busy (katanya)', followers: '986', following: '341', posts: ['img/ig-kris.jpg', ...g('minchan', 8), ...g('kris', 9)] },
  'gemilangrp':   { person: 'Gemilang', name: 'Gemilang', bio: 'gambar · makan · tidur 🎨', followers: '2.877', following: '510', posts: ['img/ig-gemilang.jpg', ...g('gemilang', 8)] },
  'sadewaa.k':    { person: 'Sadewa', name: 'Sadewa', bio: 'ok', followers: '743', following: '198', posts: ['img/ig-sadewa.jpg', ...g('sadewa', 8)] },
  'suryalix':     { person: 'Surya', name: 'Surya ☀️', bio: 'baker-in-training 🍫 no raisins, ever', followers: '3.105', following: '644', posts: ['img/ig-surya.jpg', ...g('surya', 8)] },
  'junahann':     { person: 'Juna', name: 'Juna 🐿️', bio: 'telat standup', followers: '1.022', following: '402', posts: g('juna', 7) },
  'bagasbinn':    { person: 'Bagas', name: 'Bagas', bio: 'jgn ambil paket gue', followers: '588', following: '230', posts: g('bagas', 7) },
  'ilham.jeong':  { person: 'Ilham', name: 'Ilham 🦊', bio: '22 thn. intern. bungsu.', followers: '904', following: '377', posts: g('ilham', 8) },
};
// story cuma muncul 24 jam sejak ts (kayak IG beneran)
const STORIES = [
  { user: 'ilham.jeong', img: 'img/ig/ilham-0.jpg', ts: '2026-10-20T09:00' },
  { user: 'bagasbinn', img: 'img/ig/bagas-0.jpg', ts: '2026-10-20T12:30', txt: 'leg day 🦵' },
  { user: 'junahann', img: 'img/ig/juna-1.jpg', ts: '2026-10-20T22:40', txt: 'patch nya besok. sumpah. 🫠' },
  { user: 'suryalix', img: 'img/ig/surya-1.jpg', ts: '2026-10-21T13:10' },
  { user: 'sadewaa.k', img: 'img/ig/sadewa-0.jpg', ts: '2026-10-21T20:00' },
  { user: 'kris.chandra', img: 'img/story-kris-gemilang.jpg', ts: '2026-10-20T21:00', txt: 'ramen' },
  { user: 'sadewaa.k', img: 'img/ig-sadewa.jpg', ts: '2026-10-21T22:20', txt: '🎬 sama bang kris' },
  { user: 'gemilangrp', img: 'img/ig-gemilang.jpg', ts: '2026-10-20T23:10' },
  { user: 'junahann', img: 'img/ig/juna-0.jpg', ts: '2026-10-23T18:00' },
  { user: 'gemilangrp', img: 'img/ig/gemilang-0.jpg', ts: '2026-10-24T15:00' },
  { user: 'suryalix', img: 'img/ig-surya.jpg', ts: '2026-10-24T17:00', txt: 'tomorrow 🤫' },
  { user: 'suryalix', img: 'img/ig/surya-0.jpg', ts: '2026-10-24T20:00' },
  { user: 'suryalix', img: 'img/ig-surya.jpg', ts: '2026-10-25T00:01', txt: 'HBD BANG KINO 🐰🎂' },
  { user: 'kris.chandra', img: 'img/han-river.jpg', ts: '2026-10-25T00:05', txt: 'maaf.' },
];

const NOTES = [
  { id: 'letter', title: 'untuk kino', locked: true, ts: '2026-10-24T23:38', shared: true },
  // catatan harian Kino — tiap entri muncul pas jamnya lewat
  { id: 'log', title: 'minggu ini', log: [
    ['2026-10-14T00:40', 'dia nungguin di lobi jam 12 malem cuma buat ngasih roti.\ndingin katanya gapapa. idiot.\n(rotinya enak.)'],
    ['2026-10-16T23:10', 'besok masakin dia. dia yg minta.\nbeli kimchi yg asem.'],
    ['2026-10-17T23:30', 'masakannya abis. dia nambah 2x.\nsoonie tidur di kakinya. pengkhianat.'],
    ['2026-10-18T02:40', 'dia diem seharian. bilangnya "banyak pikiran".\nga maksa. besok juga cerita. biasanya gitu.'],
    ['2026-10-19T21:45', 'masak kebanyakan. dia capek, meeting sampe malem.\nyaudah. soonie yg makan dagingnya.'],
    ['2026-10-20T12:10', 'maintenance server lancar. ilham ga panik. kemajuan.'],
    ['2026-10-20T23:40', 'gemilang bilang kris ngajak dia makan malem ini.\nsejam kemudian kris bilang ke aku dia lembur.\njam 9 story-nya ramen.\naku ga bilang apa-apa. bulgoginya dimakan soonie.'],
    ['2026-10-21T14:30', 'staging down 2x. restart, nyala. jangan tanya kenapa.'],
    ['2026-10-21T23:59', 'nanya tgl 25. "liat nanti, crunch time."\nmalem ini katanya meeting sampe malem.\noke.'],
    ['2026-10-22T18:10', 'interview tadi. 30 menit. profesornya nanya soal insiden prod.\nkayaknya lancar.\nyang pengen aku kabarin pertama lagi "nginep kantor".'],
    ['2026-10-22T19:55', 'dinner sama anak2 tower. kursi sebelah kosong.\nsadewa salah kirim di grup, dihapus. terus nge-pc: kemaren kris ngajak dia nonton. "kirain bang kino ikut."\nkemaren kris bilang meeting.\ndiem dulu. mungkin ada alasannya. pasti ada alasannya.'],
    ['2026-10-22T23:50', 'dia ga pulang. "nginep kantor."\nunitnya gelap kata juna.\naku masih diem. ga tau lagi nunggu apa.'],
    ['2026-10-23T23:45', 'seharian ga dibales. ga dibaca. telfon ga diangkat.\nbagas bilang dia cuti dari kemaren. cuti.\njadi dua hari ini dia di mana.\nga bisa tidur.'],
    ['2026-10-24T22:30', 'hana ngirim foto. seongsu. dia sama cewek. yuna.\naku telfon. aku ga teriak. dia bilang "aku capek".\nprod down dari pagi. jam setengah 6 aku jatoh di pantry. bangun2 di klinik lt 3, juna nangis.\nkata dokter kecapean. kepala penuh.\niya. penuh.', 'fight'],
    ['2026-10-25T00:40', 'nambah tua.\ndia di kafe lobi.'],
    ['2026-10-25T09:10', 'email jam 9. keterima.\nbelum bilang siapa2.\ndeadline 20 november.'],
  ] },
  { id: 'jjigae', title: 'kimchi jjigae', date: 'Senin', body: `kimchi asem 2 genggam
perut babi 200gr
tahu 1/2 kotak
gochugaru 1 sdm
air cucian beras

jgn kebanyakan bikin. ga ada yg makan.` },
  { id: 'kucing', title: 'belanja kucing', date: '18/10/26', body: `pasir tofu 2
snack ikan (dori yg ungu)
mainan bulu, doongie udh ngerusak yg lama
obat cacing soonie` },
  { id: 'koreo', title: 'checklist maintenance', date: '02/10/26', body: `backup db dulu
restart server staging (ilham pasti panik)
patch security (juna telat mulu)
cek log abis deploy

bilangin juna. lagi.` },
];

const LETTER = `kino,

aku ga nulis ini biar dimaafin. aku nulis ini karena kamu udah seminggu nebak-nebak sendiri, dan itu salah aku.

seminggu ini aku bohong. aku bilang aku sibuk, launch, meeting, lembur, nginep kantor. padahal launch udah kelar dari minggu lalu, aku pulang jam lima tiap hari, dan dua hari kemarin aku cuti. bagas pasti udah cerita. maaf kamu harus tau dari dia.

jujurnya, aku ngerasa ga disayang. tanggal 15 aku bilang sayang, terus kamu jawab "oh itu tau" sambil ketawa. aku ikut ketawa, tapi pas pulang rasanya kosong. dan itu bukan pertama kalinya.

waktu launch, aku hampir dua minggu ga tidur. aku cuma pengen denger kamu bilang "kamu hebat", tapi yang aku dapet kamu nyuruh tidur sambil ngancem nyabut charger. sekarang aku tau itu cara kamu bilang sayang. waktu itu aku terlalu capek buat ngeliatnya. itu bukan salah kamu. itu hal yang harusnya aku omongin, bukan aku pendem terus aku bawa kabur.

lama-lama aku bosen. bosen nunggu, bosen sama kita yang rasanya gitu-gitu aja. terus bosen itu aku jadiin alasan, padahal harusnya aku ngomong ke kamu. aku pengecut. aku malah nyari orang yang keliatan seneng aku ada. makan sama gemilang, nonton sama sadewa,

dan yuna.

yang keliatan pegangan tangan itu yuna lagi iseng baca garis tangan aku. katanya garis jodoh aku panjang. aku ketawa. buat aku dia temen. belakangan aku baru sadar dia nganggepnya beda, dan aku yang bego ga nyadar. ga ada apa-apa yang lebih dari itu. tapi itu ga bikin aku jadi ga salah. aku ngebiarin tangan aku dipegang orang lain, sambil bilang ke kamu aku lembur sendirian. kamu bener, aku bikin kamu keliatan kayak orang bego. padahal kamu ga bego, kino. yang bego aku.

malem tanggal 22 aku ga nginep kantor. aku jalan sendirian sampe itaewon, cuma pengen nata pikiran. terus ga sengaja ketemu yuna. dia ngajak makan, aku ikut. dia minta difotoin, foto itu yang ke-sync ke album kita. abis itu aku tidur di jjimjilbang. aku ga berani bilang semua itu ke kamu, jadi aku bohong lagi. tanggal 23 aku ke seongsu lagi, sendirian. duduk di kafe sampe malem, nonton pake akun kamu. lupa kalo kamu bisa liat. atau mungkin aku ga lupa.

pas aku sadar fotonya masuk ke album kita, aku hapus. terus aku ga berani buka chat kamu. dua hari. aku tau kamu nunggu, dan aku tetep ga buka. itu yang paling jahat.

mungkin sebagian dari aku pengen ketauan. biar aku ga harus milih kapan ngomongnya. jam satu pagi aku duduk di lobi, ga berani naik. siangnya yuna ngajak makan di seongsu, dan aku iya-in, soalnya lebih gampang daripada naik ke 4419 dan ngomong ke kamu. aku sendiri ga ngerti aku maunya apa. sampe kamu ngirim fotonya dan nanya "ini kamu?"

dan yang paling lucu, tiap kali aku sama mereka, yang aku pikirin malah kamu.

di situ aku baru sadar. kamu ga pernah bilang sayang, kamu ngelakuinnya. porsi kedua yang selalu kamu masak, nyuruh aku tidur, dori yang kamu biarin tidur di jaket aku. aku terlalu sibuk nunggu kata-kata sampe ga liat semua itu. bukan kamu yang ga sayang. aku yang berhenti ngeliat.

ternyata yang aku cari seminggu ini dari awal ada di unit 4419.

hari ini kamu jatoh di pantry. aku ga berani bilang itu gara2 aku, tapi aku tau aku salah satu yang bikin kepala kamu penuh.

maaf aku bikin kamu nunggu, nebak-nebak, dan ngerasa bego sendirian seminggu ini. kamu ga pantes digituin.

aku ga minta kita balik. aku cuma mau kamu tau semuanya dari aku, bukan dari foto orang lain.

aku di kafe lobi sekarang. kalo kamu ga turun, aku ngerti.

selamat ulang tahun, kino.

— kris

p.s. paket di lobi yang ga ada nama pengirimnya itu dari aku. aku pesen bulan agustus, waktu aku masih jadi orang yang kamu kenal. tiga kalung nama, buat soonie, doongie, sama dori. aku ga batalin. mungkin karena bagian dari aku yang itu masih pengen pulang.`;

// riwayat Safari: [waktu, judul/pencarian, situs]. muncul sesuai jam.
const SAFARI = [
  ['2026-09-03T23:10', 'kucing tidur di keyboard pas lagi deploy itu pertanda apa', 'google.com'],
  ['2026-09-10T01:40', 'cara nolak ajakan nongkrong tanpa keliatan ga punya temen', 'google.com'],
  ['2026-09-14T19:05', 'tolak angin bisa buat orang yg manja ga', 'google.com'],
  ['2026-09-19T22:30', 'encore konser biasanya berapa lagu (biar tau kapan dia mulai nangis)', 'google.com'],
  ['2026-09-24T02:15', 'part-time msc software engineering yang bisa sambil kerja', 'google.com'],
  ['2026-09-24T02:31', 'Oxford – MSc in Software Engineering (part-time)', 'ox.ac.uk'],
  ['2026-09-24T02:58', 'personal statement contoh yang ga lebay', 'google.com'],
  ['2026-09-25T00:40', 'cara minta surat rekomendasi ke atasan tanpa bikin dia mikir gue mau resign', 'google.com'],
  ['2026-09-26T23:30', 'Oxford Applicant Portal – Submit', 'ox.ac.uk'],
  ['2026-09-27T02:10', 'indomie jam 2 pagi dosa ga', 'google.com'],
  ['2026-09-30T21:00', 'kue ulang tahun gampang buat orang yg ga bisa baking', 'google.com'],
  ['2026-10-01T22:45', 'kue gosong dikit masih bisa dimakan ga', 'google.com'],
  ['2026-10-01T22:47', 'kue gosong banyak masih bisa dimakan ga', 'google.com'],
  ['2026-10-05T08:50', 'gym membership bisa dipause ga kalo males', 'google.com'],
  ['2026-10-07T18:40', 'kaos kaki cowok kenapa selalu ilang sebelah', 'google.com'],
  ['2026-10-09T21:30', 'tteokbokki level 2 itu pedes ga (jujur)', 'google.com'],
  ['2026-10-09T23:20', 'susu dingin buat pedes beneran ngaruh ga', 'google.com'],
  ['2026-10-12T03:05', 'kenapa orang bisa tidur dalam 3 detik. gue butuh 2 jam', 'google.com'],
  ['2026-10-14T00:45', 'idung merah karena dingin bahaya ga', 'google.com'],
  ['2026-10-15T21:40', 'cara bilang sayang balik tanpa kedengeran aneh', 'google.com'],
  ['2026-10-15T21:41', 'nevermind', 'google.com'],
  ['2026-10-17T19:10', 'resep kimchi jjigae', 'google.com'],
  ['2026-10-17T22:00', 'masakan dimakan 3x sama orang itu artinya enak atau dia laper', 'google.com'],
  ['2026-10-18T03:00', 'pasangan diem seharian bilang banyak pikiran normal ga', 'google.com'],
  ['2026-10-19T12:20', 'harga pasir kucing tofu 7L', 'google.com'],
  ['2026-10-20T07:40', 'kucing muntah bulu normal ga', 'google.com'],
  ['2026-10-20T10:05', 'renew ssl cert nginx staging (buat juna, bukan buat gue)', 'google.com'],
  ['2026-10-20T19:02', 'jam berapa kantor product dev biasanya selesai lembur', 'google.com'],
  ['2026-10-20T19:04', 'ramen tempat yg ada lampu kuning di mapo', 'google.com'],
  ['2026-10-20T23:50', 'kenapa orang bohong soal hal kecil', 'google.com'],
  ['2026-10-21T08:15', 'mata bengkak abis kurang tidur cara ilanginnya', 'google.com'],
  ['2026-10-21T10:40', 'how to answer technical interview distributed systems reliability', 'google.com'],
  ['2026-10-21T10:52', 'teams camera background yang ga norak', 'google.com'],
  ['2026-10-21T20:10', 'film bioskop yang lagi tayang minggu ini', 'google.com'],
  ['2026-10-21T22:31', 'jadwal CGV Yongsan malam ini', 'google.com'],
  ['2026-10-22T09:30', 'interview online jam 5 sore tapi jam 7 ada makan malem grup cukup ga', 'google.com'],
  ['2026-10-22T16:40', 'cara keliatan tenang di kamera padahal pengen muntah', 'google.com'],
  ['2026-10-22T18:30', 'part-time msc + kerja full time + 3 kucing realistis ga', 'google.com'],
  ['2026-10-22T18:31', 'pacaran sama orang sibuk tapi gue juga sibuk', 'google.com'],
  ['2026-10-22T23:15', 'nginep kantor product dev beneran ada kasurnya ga', 'google.com'],
  ['2026-10-23T09:10', 'kalo ditanya "kamu ke mana" terus ga dibales tanda apa', 'google.com'],
  ['2026-10-23T09:11', 'ga usah dijawab google gue tau', 'google.com'],
  ['2026-10-23T13:20', 'cuti 2 hari tanpa bilang pacar', 'google.com'],
  ['2026-10-23T15:20', 'town hall boleh ga dateng kalo lagi ga mood liat manusia', 'google.com'],
  ['2026-10-23T23:55', 'jalan malem bikin kepala enteng beneran ga (bagas bilang iya)', 'google.com'],
  ['2026-10-24T02:30', 'seongsu cafe yang buka sampe malem', 'google.com'],
  ['2026-10-24T08:09', 'postgres replica lag after failover auth 5xx', 'google.com'],
  ['2026-10-24T08:26', 'stale migration lock rollback stuck', 'stackoverflow.com'],
  ['2026-10-24T11:50', 'migration 0042 rollback ga jalan (ilham bilang bukan dia)', 'google.com'],
  ['2026-10-24T13:58', 'yuna marketing seongsu', 'google.com'],
  ['2026-10-24T13:59', 'ngapain gue nyari ini', 'google.com'],
  ['2026-10-24T15:40', 'tangan gemeter abis telfonan normal ga', 'google.com'],
  ['2026-10-24T20:45', 'pingsan karena ga makan seharian bahaya ga', 'google.com'],
  ['2026-10-24T20:47', 'bubur yang enak deket mapo (surya maksa)', 'google.com'],
  ['2026-10-24T23:39', 'catatan bersama iphone siapa yg terakhir edit', 'support.apple.com'],
  ['2026-10-25T00:00', 'Oxford – offer response deadline', 'ox.ac.uk'],
  ['2026-10-25T03:10', 'ulang tahun tapi capek', 'google.com'],
  ['2026-10-25T09:05', 'Oxford Applicant Portal – Your offer', 'ox.ac.uk'],
  ['2026-10-25T09:20', 'ngasih tau pacar soal s2 setelah dia bohong seminggu itu impas ga', 'google.com'],
  ['2026-10-30T22:10', 'kucing 3 dititip ke tetangga 1 minggu tiap 3 bulan', 'google.com'],
];

// playlist "kris" — preview 30 detik resmi dari iTunes (di-stream, gak disimpen)
const SONGS = [
  ["I Like It", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/57/9a/26/579a2687-9c45-c9ea-c174-d34664c1884a/mzaf_10236695706944684591.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/c1/47/24c147fc-cf70-0a4e-3e21-bd9a42617572/8809928952123_Cover.jpg/300x300bb.jpg'],
  ["Sorry, I Love You", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/35/a7/e2/35a7e2b3-5227-5a48-8635-a70cac99f1cc/mzaf_7986470944793498269.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/af/dc/2b/afdc2b64-deb3-cf5f-84e2-c43be4105636/192641939495_Cover.jpg/300x300bb.jpg'],
  ["Winter Falls", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4b/d6/af/4bd6afdf-c40d-1aa5-1540-b50bfb86961b/mzaf_13287492524095254712.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ba/1b/d9/ba1bd944-0e53-81b0-cd04-d4735b49e5f5/192641939525_Cover.jpg/300x300bb.jpg'],
  ["Maze of Memories", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a9/88/20/a988201f-c0ee-57e8-af03-727889f29fe8/mzaf_17596498696391821588.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b1/fc/c1/b1fcc187-2298-a18b-ee68-06b23c0eefa6/192641939365_Cover.jpg/300x300bb.jpg'],
  ["Waiting For Us (Bang Chan, Lee Know, Seungmin & I.N)", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d7/44/1e/d7441ece-d9ac-46d8-3cdc-0522a0b55577/mzaf_4600928590416538127.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/54/5f/6d/545f6deb-89de-9f08-4ad0-b8d4136a0911/192641947902_Cover.jpg/300x300bb.jpg'],
  ["Love Untold (Hyunjin)", "Stray Kids & Hyunjin", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ec/d7/54/ecd7545e-94c2-3585-817a-529087b5c236/mzaf_10829940728306454366.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b8/74/c0/b874c02b-4014-56cd-8a6c-ba456bd7cba7/738676860429_Cover.jpg/300x300bb.jpg'],
  ["Truman (HAN & Felix)", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/05/14/30/051430d9-cfbb-f1e8-cea8-34ee36da530b/mzaf_5787176318101189575.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/55/c5/dc/55c5dc38-e128-f296-e26b-b2bbd1b379dd/8809928953267_Cover.jpg/300x300bb.jpg'],
  ["Christmas Love", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/aa/f2/5d/aaf25d28-4bcd-944e-9106-52dfebf54608/mzaf_2213655326070404647.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fc/c7/d7/fcc7d70e-ef18-1586-3269-d9881acbea9e/4547366717150.jpg/300x300bb.jpg'],
  ["My Universe (Seungmin & I.N) [feat. Changbin]", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c4/2d/d2/c42dd25d-1fce-ee76-fc64-e3e0e26bb1f9/mzaf_6767867800651116617.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a8/99/a9/a899a9bb-bddc-1ce6-61d0-bea282420aa3/192641939464_Cover.jpg/300x300bb.jpg'],
  ["Hello Stranger", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b8/f0/95/b8f09578-13ac-f84b-8fc5-2649898c86ad/mzaf_14504611475143232367.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/bd/98/4a/bd984ac9-82db-614d-8310-8996065ac1e9/cover_-_Part.1.png/300x300bb.jpg'],
  ["Butterflies", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/92/c3/40/92c3403c-8614-e2e0-a2e8-177c873d9922/mzaf_11046087599407008098.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/cf/58/de/cf58de1b-69a0-cf63-d31d-dec0091ec546/4547366643275.jpg/300x300bb.jpg'],
  ["twilight", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/27/4d/ea/274deac5-359e-ef30-1e82-df7163e57841/mzaf_5099552083911339423.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/c1/47/24c147fc-cf70-0a4e-3e21-bd9a42617572/8809928952123_Cover.jpg/300x300bb.jpg'],
  ["Mixtape : OH", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1e/6b/99/1e6b99b8-9f2f-f547-c10c-85bbc0a17139/mzaf_10963908969014421296.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/af/dc/2b/afdc2b64-deb3-cf5f-84e2-c43be4105636/192641939495_Cover.jpg/300x300bb.jpg'],
  ["Youth (Lee Know)", "Stray Kids", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a6/cd/97/a6cd97a0-5b92-4414-90c7-d81ba9965d79/mzaf_16231843726044607793.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b3/e2/83/b3e28373-7aad-03c0-b8ec-9b1d9e706989/8809928953014_Cover.jpg/300x300bb.jpg'],
  ["Love Lee", "AKMU", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/75/42/8e/75428efd-bf7c-922a-253a-dcc9f812eddc/mzaf_9614853286254962096.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7f/ca/13/7fca1315-9134-7937-b159-367bbed08dfa/AKMU_LoveLee_Cover_4000x4000.jpg/300x300bb.jpg'],
  ["Me After You", "Paul Kim", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/10/3b/0d/103b0d88-91f7-8995-f53a-ecedcafedb7d/mzaf_12519402530741202598.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a5/b2/8e/a5b28ea5-ca18-d328-dc68-87224279a84c/191953335933.jpg/300x300bb.jpg'],
  ["Beautiful", "Crush", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/41/e2/d1/41e2d146-6b36-94b7-9fab-527adc117622/mzaf_15100695928980147311.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/55/92/c4/5592c4a2-fe72-2302-0edb-0133f4548abb/8809534461279_Cover.jpg/300x300bb.jpg'],
  ["Love wins all", "IU", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/94/79/f5/9479f56a-ac54-6449-3603-0645090bb3c1/mzaf_7391528050042328078.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e3/56/1e/e3561eb5-de12-790d-569b-53fa22e6b491/cover_KM0019422_1.jpg/300x300bb.jpg'],
  ["Best Part (Live)", "Daniel Caesar", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/18/1f/48/181f4805-fa54-cfac-e280-f0f0371d922e/mzaf_10704600348444555592.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6e/4f/69/6e4f69f4-a732-256d-bf23-f5245ab174bd/859734199319.jpg/300x300bb.jpg'],
  ["Paris in the Rain", "LAUV", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/00/f5/a7/00f5a7fb-9b7b-6452-240d-80a88f0c3671/mzaf_10571450688846341383.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/3d/e5/5c3de510-1123-0da6-9531-318d9597159c/5056167107347_Cover.jpg/300x300bb.jpg'],
  ["Your Dog Loves You (feat. Crush)", "Colde", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c4/d9/01/c4d901ad-f8ac-b7dd-71e2-b936c7515911/mzaf_17992490860046362867.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/fe/87/a1/fe87a12c-aac5-a130-f3f1-a7de34376b33/Colde_yourdoglovesyou.jpg/300x300bb.jpg'],
  ["Through the Night", "IU", 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/85/45/de/8545de32-479c-1424-9dce-5694ad9f5235/mzaf_12278878103860208085.plus.aac.p.m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/94/ec/24/94ec2442-5add-d1ca-5eba-37f1298abfbc/cover_KM0005225_1.jpg/300x300bb.jpg'],
];

const CALLS = [
  { who: 'Kris', what: 'KakaoTalk Audio', t: '2026-10-18T23:40', n: 2, out: true },
  { who: 'Mama', what: 'seluler', t: '2026-10-19T12:05' },
  { who: 'Juna', what: 'seluler', t: '2026-10-16T21:10' },
  { who: 'Kris', what: 'seluler', t: '2026-10-03T00:02' },
];

const ENDINGS = {
  maafin: {
    title: 'Terakhir',
    lines: [
      'Lift berhenti di lantai satu. Kino keluar pakai sandal, rambutnya masih setengah basah.',
      'Kris ada di sofa lobi. Jaket Bagas yang kebesaran menggantung di bahunya. Matanya merah.',
      'Keduanya diam. Lama.',
      '"Ini yang terakhir," kata Kino akhirnya. "Sekali lagi kamu bohong, aku nggak nanya. Aku pergi."',
      '"Iya."',
      '"Capek, bilang capek. Ngerasa nggak disayang, bilang." Napasnya tertahan sebentar. "Aku nggak jago ngomong. Tapi aku bisa belajar. Yang aku nggak bisa itu dibohongin."',
      'Kris mengangguk. Lalu menangis, diam-diam, bahunya naik turun.',
      'Kino merogoh saku. Tisu. "Jelek."',
      'Mereka duduk di sofa itu sampai jam dua. Tidak banyak bicara. Tidak perlu.',
      'Waktu Kris berdiri menuju lift, Kino bicara pelan sekali. "Sayang."',
      'Kris menoleh. "Hah? Apa?"',
      '"Nggak ada. Naik sana."',
      'Besoknya mereka ke rumah Mama. Kris yang membawa buah. Mama tidak bertanya apa-apa, hanya menambahkan nasi ke piring Kino.',
      'Pelan-pelan. Mulai dari nol yang bukan nol.',
    ],
  },
  jeda: {
    title: 'Jeda',
    lines: [
      'Telepon masih tersambung. Tidak ada yang bicara.',
      '"Kita break dulu," kata Kino akhirnya. "Bukan putus. Aku cuma... nggak bisa mikir sekarang."',
      '"Berapa lama?" Suara Kris nyaris tidak terdengar.',
      '"Nggak tau. Sampai kepala aku nggak penuh lagi."',
      'Hening lagi. Di seberang, Kris menarik napas panjang. Gemetar.',
      '"Oke. Aku tunggu. Aku nggak akan ganggu."',
      'Seminggu kemudian Kris masih menepati janjinya. Satu-satunya kabar darinya hanya foto jaket yang sudah dicuci, dikirim ke grup pemuda nyasar: "punya bagas, gue balikin."',
      'Kino melihatnya dari kasur, Soonie tidur di atas perutnya. Ia mengetik, "jaket kamu juga masih di sini."',
      'Lalu menghapusnya. Huruf demi huruf.',
      'Belum. Tapi nanti.',
    ],
  },
  turun: {
    title: 'Lobi',
    lines: [
      'Kino turun pakai sandal. Jaket itu terlipat di tangannya.',
      'Kris berdiri di depan kafe lobi, memegang kue kecil dari minimarket. Lilinnya bengkok. Matanya lebih merah dari yang Kino kira.',
      'Kino menyodorkan jaketnya. "Nih. Dori udah bosen."',
      'Kris tidak langsung mengambilnya. Tangannya gemetar.',
      '"Aku nggak benci kamu," kata Kino. Datar. Tenang. Terlalu tenang. "Aku cuma udah nggak tau kamu siapa."',
      'Ia meniup lilin itu sendiri. "Makasih kuenya."',
      'Lalu berbalik. Masuk lift. Menekan angka empat puluh empat tanpa menoleh.',
      'Pintu lift menutup pelan. Kris masih di sana, memeluk jaket yang baru saja dikembalikan.',
    ],
  },
  waktu: {
    title: 'Selesai',
    lines: [
      'Kino menutup teleponnya. Ibu jarinya bertahan di layar sedikit lebih lama dari yang perlu.',
      'Satu pesan terkirim: "selamat ulang tahun buat aku. jangan nunggu."',
      'Dari jendela unit 4419, lampu lobi terlihat kecil sekali. Ada satu orang di sana.',
      'Lima menit. Sepuluh menit. Satu jam.',
      'Jam dua pagi, Kino meletakkan jaket Kris di depan pintu unitnya. Terlipat rapi. Seperti biasa.',
      'Di sakunya ada kertas kecil. "8 tahun. Makasih. Aku sayang kamu, dari dulu. Harusnya aku bilang. Harusnya kamu nanya."',
      'Malam itu Dori tidur di kasur. Tepat di tempat jaket itu dulu.',
    ],
  },
};

// ===== telepon =====
// [siapa, teks]: 't' = yang ditelpon/nelpon, 'k' = Kino. Baris pertama "yeoboseyo" otomatis.
// pitch = nada suara "yeoboseyo" (0.5 berat – 1.6 tinggi)
const CALL_LINES = {
  // tiap orang: daftar versi, dipake yg "from"-nya paling baru tapi udah lewat
  Juna: [
    { from: '2026-01-01', lines: [['t', 'BANG KINO NELPON GUE?? 😭 ada apa?? ada yg meninggal??'], ['k', 'lagi ngapain'], ['t', 'rebahan sambil merenungi hidup'], ['k', 'besok jgn telat standup'], ['t', 'NELPON CUMA BUAT ITU?? 😭😭'], ['k', 'iya.']] },
    { from: '2026-10-20T21:21', lines: [['t', 'bang... soal story tadi... 😶'], ['k', 'apa'], ['t', 'gue cuma takut lo kepikiran. gue aja kepikiran sampe ga bisa makan'], ['k', 'lo abis makan ayam.'], ['t', '...iya sih. tapi sedih makannya'], ['k', 'tidur.']] },
  ],
  Surya: [
    { from: '2026-01-01', lines: [['t', 'halo bang kino 🥰'], ['t', 'what\'s up bang? udah makan?'], ['k', 'udah'], ['t', 'really? akhir2 you look skinnier'], ['k', 'surya.'], ['t', 'hehe okay okay. take care ya bang. love youu 🫶'], ['k', 'tutup.']] },
  ],
  Sadewa: [
    { from: '2026-01-01', lines: [['t', 'apa'], ['k', 'lo di mana'], ['t', 'unit. nonton'], ['k', 'yaudah'], ['t', 'nelpon cuma nanya itu?'], ['k', 'iya.'], ['t', '...yaudah. jgn lupa makan. bukan gue nyuruh']] },
    { from: '2026-10-22T18:50', lines: [['t', 'apa'], ['k', 'kemaren kris ngomong apa aja'], ['t', 'ga banyak. dia nanya film yg bagus buat ditonton berdua'], ['t', 'terus ujungnya ngajak gue. ga masuk akal'], ['k', 'oh.'], ['t', 'bukan salah gue ya'], ['k', 'bukan salah lo.'], ['t', '...lo oke kan. nanya doang']] },
  ],
  Gemilang: [
    { from: '2026-01-01', lines: [['t', 'bang~ suara lo kayak orang yg butuh pelukan'], ['k', 'lo di mana'], ['t', 'unit, lagi gambar. lagi dapet inspirasi dari langit 🎨'], ['k', 'jgn begadang'], ['t', 'siap bang 🥺 lo juga']] },
    { from: '2026-10-20T23:30', lines: [['t', 'bang~'], ['k', 'lo di mana'], ['t', 'lobi apart. bang kris juga di sini, ketiduran di sofa lobi. kayak anak ilang 😩'], ['k', '...selimutin'], ['t', 'siap bang 🫡 lo sweet banget sumpah'], ['k', 'jgn bilang gue yg nyuruh']] },
  ],
  Bagas: [
    { from: '2026-01-01', lines: [['t', 'paket?'], ['k', 'bukan'], ['t', 'terus'], ['k', 'lo udh makan?'], ['t', '...udah. lo?'], ['k', 'udah'], ['t', 'k']] },
    { from: '2026-10-23T13:16', lines: [['t', 'soal kris'], ['k', '...'], ['t', 'gue ga tau dia ke mana. tapi gue tau dia ga sibuk'], ['k', 'iya.'], ['t', 'lo ga harus kuat terus, kino'], ['k', '...'], ['t', 'udah. itu aja']] },
  ],
  Ilham: [
    { from: '2026-01-01', lines: [['t', 'apa bang'], ['k', 'server staging aman?'], ['t', 'aman. kenapa nanya. ga percaya?'], ['k', 'iya.'], ['t', '...yaudah gue cek lagi 🙄']] },
    { from: '2026-10-21T23:41', lines: [['t', 'apa bang'], ['k', 'lo bilang ke kris "depends" kan'], ['t', 'iya. terus kenapa'], ['k', 'next time bilang "tanya orangnya langsung".'], ['t', 'oke. bukan karena lo nyuruh ya'], ['t', '...lo oke bang?']] },
  ],
  Mama: [
    { from: '2026-01-01', lines: [['t', 'nak?'], ['k', 'ma. lagi apa'], ['t', 'lagi masak. kamu udah makan?'], ['k', 'udah ma'], ['t', 'boong. makan dulu sana']] },
    { from: '2026-10-24T11:00', lines: [['t', 'nak?'], ['k', 'ma. lagi apa'], ['t', 'lagi nyiapin bahan kue. kamu pulang kan?'], ['k', 'liat nanti ma'], ['t', 'ajak kris ya. mama kangen anak itu'], ['k', '...iya ma']] },
    { from: '2026-10-24T20:40', lines: [['t', 'NAK. ya ampun nak'], ['k', 'ma. aku gapapa'], ['t', 'gapapa gimana kamu pingsan!'], ['k', 'kecapean doang ma. udah diinfus'], ['t', 'mama berangkat ke seoul sekarang ya'], ['k', 'ma. jangan. besok aku pulang'], ['t', '...janji?'], ['k', 'janji.']] },
  ],
  Mina: [
    { from: '2026-01-01', lines: [['t', 'kino? ada apa?'], ['k', 'kak, tiket yg kemaren udah gue close'], ['t', 'nice, thank you!'], ['t', 'lo jangan lembur2 ya'], ['k', 'iya kak']] },
  ],
  Kris: [{ from: '2026-01-01', lines: [] }],
};
// Kris nelpon duluan setelah 1 menit main (sekali per hari, isi sesuai hari itu)
// telpon Kris sekali sehari (abis ~1 menit main). isinya ngikutin jam lo buka: { from, to, lines }
const KRIS_CALL = {
  '2026-10-20': [
    { to: '05:59', lines: [['t', 'kino? kebangun ya'], ['k', 'ngapain nelfon jam segini'], ['t', 'ga bisa tidur. pengen denger suara kamu bentar'], ['k', '...udah denger kan. sekarang tidur, bawel'], ['t', 'iya. night kino']] },
    { from: '06:00', to: '17:39', lines: [['t', 'kino? lagi apa'], ['k', 'kerja. kenapa'], ['t', 'gapapa. nanya aja'], ['k', 'aneh. kamu kangen ya'], ['t', 'jaketnya nanti aku ambil ya'], ['k', 'hm. cepet. dori udah klaim']] },
    { from: '17:40', to: '18:51', lines: [['t', 'kino? lagi apa'], ['k', 'masak. kenapa'], ['t', 'sorry ya, malem ini kayaknya aku lembur'], ['t', 'launch minggu ini, hectic bgt'], ['k', '...oke. bulgoginya aku makan sendiri ya'], ['t', 'jaketnya nanti aku ambil ya'], ['k', 'terserah. soonie yg nunggu, bukan aku']] },
    { from: '18:52', to: '21:59', lines: [['t', 'kino, sorry ya soal dinner'], ['k', 'hm'], ['t', 'aku masih di kantor. ini lg istirahat bentar'], ['k', 'berisik banget kantor kamu. kayak warung'], ['t', '...iya, anak2 pesen makan'], ['k', 'oke. kerja sana']] },
    { from: '22:00', lines: [['t', 'kino udah tidur?'], ['k', 'belum'], ['t', 'aku pulang agak telat ya. kamu tidur duluan'], ['k', 'iya iya. jangan nyetir sambil ngantuk'], ['t', 'bulgoginya... sisain ya'], ['k', 'udah dikasih soonie']] },
  ],
  '2026-10-21': [
    { to: '05:59', lines: [['t', 'kino? kok belum tidur'], ['k', 'kamu baru pulang?'], ['t', 'iya, baru kelar'], ['k', 'hm. mandi dulu baru tidur'], ['t', 'sorry ya'], ['k', 'tidur.']] },
    { from: '06:00', to: '19:39', lines: [['t', 'kino, sorry ya kemaren'], ['k', 'kenapa sorry'], ['t', '...lembur, ga jadi dinner'], ['k', 'oh. iya. utang satu dinner'], ['t', 'nanti aku ganti ya'], ['k', 'hm. aku catet']] },
    { from: '19:40', to: '22:29', lines: [['t', 'kino, aku masih meeting ya'], ['t', 'cuma mau bilang itu'], ['k', 'meeting kok bisa nelfon'], ['t', '...lagi break'], ['k', 'oke. break nya jangan lama2']] },
    { from: '22:30', lines: [['t', 'kino'], ['t', 'baru kelar. capek bgt'], ['k', 'tidur.'], ['t', 'kamu ga nanya aku ngapain aja?'], ['k', 'ngga. nanti juga kamu cerita sendiri'], ['t', '...oke. night']] },
  ],
  '2026-10-22': [
    { to: '07:49', lines: [['t', 'pagi kino'], ['k', 'pagi'], ['t', 'minggu ini aku jarang di apart ya, kerjaan numpuk'], ['k', 'iya. jangan lupa makan']] },
    { from: '07:50', to: '22:57', lines: [['t', 'halo kino'], ['t', 'aku nginep kantor lagi ya malem ini'], ['k', 'sendiri?'], ['t', 'iya, sendiri'], ['k', 'oke. jangan begadang']] },
    { from: '22:58', lines: [['t', 'kino, aku ga pulang ya malem ini'], ['k', 'udah tau.'], ['t', 'sorry'], ['k', 'hm. tidur di mana'], ['t', '...kantor'], ['k', 'oke. jangan kedinginan']] },
  ],
};
// kalo Kino nelpon Kris pas jam kerja / malem (sebelum ultah)
// tiap kali ditelpon dipake yg berikutnya, gak diulang (abis = ga diangkat)
const KRIS_BUSY = {
  // jam kerja: ditolak, terus chat ini
  work: [
    ['jangan telfon dulu ya kino', 'lg meeting 🙏'],
    ['sorry, lg presentasi ke stakeholder', 'nanti aku telfon balik'],
    ['kino aku lg di ruang meeting', 'chat aja ya'],
    ['sorry sayang, lg user testing', 'nanti ya'],
    ['lg sama bos aku', 'nanti aku kabarin'],
    ['...sorry'],
  ],
  // malem: diangkat bentar
  night: [
    [['t', 'halo? sorry aku lg di jalan'], ['k', 'jalan ke mana'], ['t', '...pulang. nanti aku telfon balik ya']],
    [['t', 'halo, kino'], ['t', 'aku masih di kantor, lembur'], ['k', 'udah makan?'], ['t', 'udah kok. kamu tidur duluan ya']],
    [['t', 'hm? kenapa kino'], ['k', 'gapapa. kangen aja dikit'], ['t', '...'], ['t', 'iya. nanti ya, sorry']],
    [['t', 'sorry ga bisa lama, lg sama temen kantor'], ['k', 'oh. oke']],
  ],
};
// kalo nelpon member yg sama berkali2: baris pertama dari CALL_LINES, abis itu ini (urut, gak diulang)
const CALL_AGAIN = {
  Juna: [[['t', 'BANG LO NELPON GUE LAGI?? 😭 gue terharu'], ['k', 'salah pencet'], ['t', 'jahat 💔']], [['t', 'bang gue lg ngoding sumpah demi apapun'], ['k', 'yaudah lanjut']]],
  Surya: [[['t', 'bang kino 🥹 kangen ya'], ['k', 'salah pencet'], ['t', 'it\'s okay, made my day kok']], [['t', 'bang I\'m in the middle of ngaduk adonan!! call you back ya 🫶'], ['k', 'yaudah']]],
  Sadewa: [[['t', 'apa lagi'], ['k', 'gpp. salah pencet'], ['t', 'hm. oke']]],
  Gemilang: [[['t', 'bang kangen gue ya 🥺'], ['k', 'ngga.'], ['t', 'aduh hati gue']], [['t', 'bang lg gambar soonie nih, mahakarya'], ['k', 'kirim kalo udh']]],
  Bagas: [[['t', 'apa lagi'], ['k', 'gpp'], ['t', 'k. tidur']]],
  Ilham: [[['t', 'bang?? server down lagi??'], ['k', 'ngga. tenang'], ['t', 'siapa yg panik. gue ngga']]],
  Mama: [[['t', 'iya nak? kenapa nelpon lagi'], ['k', 'gpp ma, mau denger suara mama'], ['t', 'aduh anak mama. sehat2 ya']]],
  Mina: [[['t', 'kino? ada yg urgent?'], ['k', 'ngga kak, salah pencet'], ['t', 'oke 👍']]],
};
// telpon jam 00.00
const MIDNIGHT_CALL = [
  ['t', 'kino.'], ['t', 'selamat ulang tahun.'], ['k', 'makasih.'],
  ['t', 'kamu udah baca?'], ['k', 'udah.'],
  ['t', 'kepala kamu masih pusing?'], ['k', 'dikit.'],
  ['t', 'aku di kafe bawah, yg di lobi. aku ga naik. aku cuma mau ngomong'], ['k', 'ngomong.'],
  ['t', 'aku ga bakal bela diri. semua yg di surat itu bener.'],
  ['t', 'yuna beneran cuma temen kantor, kino. dari awal buat aku cuma itu.'],
  ['t', 'ternyata dia nganggepnya beda. aku ga nyadar. aku udah bilang ke dia, aku punya kamu.'],
  ['k', 'itu urusan kamu.'],
  ['t', 'iya.'],
  ['k', 'kamu tau aku pingsan hari ini?'],
  ['t', 'tau. aku di depan klinik dua jam.'],
  ['k', 'aku jatoh di pantry. yg aku pikirin pas jatoh itu: "kris tau ga ya".'],
  ['t', '...'],
  ['k', 'lucu ya. 8 tahun, dan pikiran terakhir aku sebelum gelap itu kamu.'],
  ['t', 'maaf. maaf banget kino.'],
  ['k', 'aku ga butuh maaf kamu sekarang. aku butuh tau kamu masih orang yg sama ga.'],
  ['t', 'aku ga tau. aku pengen jadi orang yg sama. yg lebih baik.'],
  ['k', 'jujur. akhirnya.'],
  ['k', 'aku emang ga jago ngomong. kamu tau itu dari awal.'],
  ['t', 'iya. aku tau. aku cuma lupa cara ngeliatnya'],
  ['t', 'kalo kamu butuh waktu, aku tunggu. kalo kamu mau aku pergi, aku pergi.'],
  ['k', 'aku capek, kris. tapi aku juga ga tau caranya ga sayang kamu.'],
  ['t', 'terus... gimana?'],
];

// ===== "ketikan" Kino: tap kolom pesan -> Kino ngetik sendiri, terus dibales =====
// format: [ketikan Kino, [balasan...]]  — balasan null = cuma di-read. Gak muter ulang, abis ya abis.
// Kris per hari (biar ngalir, gak bocorin hari berikutnya).
// [ketikan, balasan, {from, to}] — from/to = jam (HH:MM) kapan baris ini boleh muncul
const TYPE_KRIS = {
  '2026-10-19': [['udah sampe unit?', ['udah', 'capek bgt']], ['jgn lupa makan ya', null]],
  '2026-10-20': [
    ['kamu udah makan siang? jgn skip lagi', ['sorry baru liat, td meeting', 'udah kok, dikit'], { to: '18:50' }],
    ['soonie nanyain kamu. aku juga dikit', ['wkwk', 'nanti aku main ya'], { to: '18:50' }],
    ['lemburnya sampe jam brp', ['gatau, liat nanti'], { from: '19:00', to: '22:00' }],
  ],
  '2026-10-21': [
    ['pagi', ['pagi kino 🙏'], { to: '12:00' }],
    ['meeting nya lancar?', ['lancar. capek'], { from: '20:00' }],
  ],
  '2026-10-22': [['kamu udah makan?', ['udah kok'], { to: '20:00' }], ['jgn lupa tidur', null, { from: '23:11' }]],
  '2026-10-23': [['kris?', null], ['kamu ke mana', null], ['angkat.', null], ['...', null]],
  '2026-10-24': [['kris angkat', null, { to: '14:05' }], ['jangan ke sini.', null, { from: '20:53', to: '23:35' }]],
  'after': [['aku udah baca', ['iya']], ['tunggu', ['aku tungguin']]],
};
// ketikan ke temen2: tiap baris ada momennya. w = { d: [hari], from/to: 'HH:MM', since/until: waktu ISO }
const D20 = '2026-10-20', D21 = '2026-10-21', D22 = '2026-10-22', D23 = '2026-10-23', D24 = '2026-10-24', D25 = '2026-10-25';
const PULIH = { since: '2026-10-24T20:40', until: '2026-10-24T23:59' }; // abis sadar dari pingsan
const TYPE_LINES = {
  Juna: [
    ['ssl staging gue yg kerjain. lo diem aja', ['BANG 🥹 lo malaikat', 'kopi nanti gue traktir sumpah'], { d: [D20], from: '08:40', to: '18:00' }],
    ['rice cooker lo bunyi terus. matiin', ['ITU BUNYI MATENG BANG', 'ok gue matiin 😔'], { d: [D20], from: '19:00' }],
    ['patch lo udh di deploy?', ['UDAH BANG', '...barusan', 'plis jgn bilang kak mina 🙏😭'], { d: [D21], from: '09:00', to: '18:00' }],
    ['tidur', ['iya bang 😔 mimpiin gue ya'], { d: [D21, D23], from: '23:00' }],
    ['lo ikut makan ntar?', ['IKUT DONG 🍖', 'lo ikut kan bang?? plis'], { d: [D22], from: '12:00', to: '19:00' }],
    ['lo klik link phishing lagi ya', ['DUA KALI 😭', 'tapi niat gue baik bang'], { d: [D23], from: '10:20', to: '18:00' }],
    ['log auth-api kirim ke gue. sekarang', ['OTW BANG', 'udah. tangan gue gemeteran 😭'], { d: [D24], from: '08:05', to: '14:00' }],
    ['udah. gue gapapa. jgn heboh', ['GIMANA GA HEBOH BANG 😭😭', 'oke oke gue diem. tapi gue sayang lo ya bang'], PULIH],
    ['makasih jun', ['BANG KINO BILANG MAKASIH KE GUE 😭', 'oh iya ultah lo. HBD BANG 🎂🎂'], { d: [D25], from: '08:00' }],
  ],
  Surya: [
    ['soonie ngeliatin jendela lo terus', ['aww she misses me 🥹', 'I\'ll drop by later yaa'], { d: [D20], from: '10:00', to: '22:00' }],
    ['brownies nya jgn kemanisan', ['siap bang! less sugar, buat kesehatan lo 🫡'], { d: [D21], from: '10:00', to: '22:00' }],
    ['lo jadi masak buat nanti malem?', ['yesss bang! japchae 🥹', 'you\'re coming kan?'], { d: [D22], from: '10:00', to: '18:30' }],
    ['lo udah makan?', ['udah bang 🥹 wait you\'re asking about me??', 'you eat too ya'], { d: [D23], from: '11:00', to: '21:00' }],
    ['gue gapapa sur. jgn nangis', ['HOW CAN I NOT CRY 😭', 'I\'m bringing you bubur. no is not an answer 🫶'], PULIH],
    ['makasih sur', ['🥹🥹', 'happy birthday bang kinoo 🎂🫶'], { d: [D25], from: '08:00' }],
  ],
  Sadewa: [
    ['lo lg apa', ['nonton. kenapa'], { d: [D20], from: '18:00' }],
    ['film apa yg bagus sekarang', ['kenapa nanya gue', '...ada satu. belom nonton. mungkin'], { d: [D21], from: '10:00', to: '19:00' }],
    ['lo udah makan', ['udah. ga usah nanya2'], { d: [D23], from: '11:00', to: '22:00' }],
    ['gue ga kenapa2', ['ga ada yg nanya', '...tapi bagus. jangan gitu lagi'], PULIH],
    ['thanks dewa', ['buat apa', 'oh. hbd. udah'], { d: [D25], from: '08:00' }],
  ],
  Gemilang: [
    ['lo di mana', ['unit bang, lg ngelukis perasaan 🎨'], { d: [D20], from: '09:00', to: '17:00' }],
    ['lukisan lo yg di x judulnya apaan sih', ['jangan tanya bang 💔🎨', 'nanti juga lo ngerti'], { d: [D21], from: '15:10', to: '22:00' }],
    ['jgn begadang', ['iya bang 🥺 lo perhatian banget, gue mau nangis'], { d: [D21, D23], from: '23:00' }],
    ['lo bawa apa nanti malem', ['bunga. buat suasana 💐', 'lo bawa muka galak aja udah cukup'], { d: [D22], from: '12:00', to: '18:30' }],
    ['gambarin soonie', ['DENGAN SEGENAP JIWA RAGA', 'nanti gue kirim'], { d: [D23], from: '10:00', to: '22:00' }],
    ['jgn dramatis. gue gapapa', ['GIMANA GA DRAMATIS BANG LO JATOH 😭💔', 'gue lukis kejadian ini. judulnya "abang kuat"'], PULIH],
    ['makasih gem', ['🥹💐', 'happy birthday bang. lo pantes dapet yg baik2'], { d: [D25], from: '08:00' }],
  ],
  Bagas: [
    ['paket lo ada di gue. boong', ['...anjir gue udah mau ke unit lo'], { d: [D20, D21], from: '18:00' }],
    ['lo ikut makan?', ['ikut lah', 'lo jangan telat'], { d: [D22], from: '15:00', to: '18:50' }],
    ['town hall lo dateng?', ['ga. mau tidur aja gue', 'lo dateng? bawain gue kue'], { d: [D23], from: '14:00', to: '16:30' }],
    ['lo bener soal yg semalem', ['gue tau', 'sekarang makan'], PULIH],
    ['thanks bin', ['hm sama2', 'hbd ya. tidur yg banyak'], { d: [D25], from: '08:00' }],
  ],
  Ilham: [
    ['server staging aman?', ['aman. ga usah ngecek gue terus'], { d: [D20, D21], from: '09:00', to: '18:00' }],
    ['jgn panik', ['siapa yg panik 🙄'], { d: [D22], from: '09:00', to: '18:00' }],
    ['on call sendiri gimana', ['aman.', '(ga aman)'], { d: [D23], from: '10:05', to: '18:00' }],
    ['rollback ulang dari migration 0041', ['oke bang', 'jalan. bukan berarti lo jenius ya'], { d: [D24], from: '11:45', to: '17:00' }],
    ['gue udh bangun. thanks udh ngabarin', ['...siapa yg ngabarin', 'iya. sama2. jangan diulang'], PULIH],
    ['good job kemaren', ['lo yg good job bang', 'hbd. traktir.'], { d: [D25], from: '08:00' }],
  ],
  Mama: [
    ['pagi ma', ['pagi nak, sarapan yaa'], { d: [D20, D21, D22, D23], from: '06:00', to: '10:00' }],
    ['ma udah makan?', ['udah nak. kamu?'], { d: [D20, D21, D22], from: '18:00', to: '22:00' }],
    ['kangen ma', ['mama juga nak 🥹', 'pulang ya'], { d: [D23], from: '20:00' }],
    ['ma aku gapapa. jgn khawatir', ['gimana mama ga khawatir nak 😢', 'istirahat. jangan pegang laptop'], PULIH],
    ['makasih ma', ['selamat ulang tahun anak mama 🎂🌷'], { d: [D25], from: '07:00' }],
  ],
  Mina: [
    ['kak, tiket udah gue close', ['nice, thank you kino!'], { d: [D20, D21], from: '09:00', to: '18:00' }],
    ['kak makasih referensinya', ['sama2 kino. gimana tadi?', 'pasti bagus. gue diem kok, tenang'], { d: [D22], from: '17:45', to: '23:00' }],
    ['oke kak', ['👍'], { d: [D23], from: '09:00', to: '17:00' }],
    ['kak update: rollback jalan 40%', ['oke gue terusin ke direksi', 'lo udah makan?'], { d: [D24], from: '09:00', to: '17:00' }],
    ['kak maaf ngerepotin', ['jangan minta maaf. istirahat. ini perintah'], PULIH],
  ],
  grup: [
    ['siapa yg naro sepatu di depan lift', [['Juna', 'bukan gue'], ['Bagas', 'juna']], { d: [D20, D21], from: '08:00', to: '22:00' }],
    ['jam 7 di unit surya kan', [['Surya', 'yesss bang!! 🥹'], ['Juna', 'GUE BAWA SODA']], { d: [D22], from: '12:00', to: '18:50' }],
    ['berisik', [['Surya', 'okay okay 🤐']], { d: [D21, D23], from: '21:00' }],
    ['gue gapapa. jgn rame', [['Juna', 'OKE DIEM'], ['Gemilang', '💐'], ['Surya', '🫶']], PULIH],
    ['makasih semua', [['Juna', 'BANG KINO 😭🎂'], ['Ilham', 'hbd bang']], { d: [D25], from: '08:00' }],
    ['gue mau tidur. diem', [['Gemilang', 'good night bang 🌙']], { d: [D20, D22], from: '23:00' }],
  ],
  kru: [
    ['standup 9.30', [['Juna', 'siap bang'], ['Ilham', 'okay bang']], { d: [D20, D21, D22], from: '07:00', to: '09:25' }],
    ['jgn telat', [['Juna', 'bang kenapa liatin gue']], { d: [D21, D22, D23], from: '08:00', to: '09:30' }],
    ['town hall jgn ngabisin camilan', [['Juna', 'udah telat bang 🥲'], ['Ilham', 'dia bawa tas']], { d: [D23], from: '14:00', to: '16:00' }],
    ['yg ga megang incident jgn deploy apa2', [['Juna', 'siap bang 🫡'], ['Ilham', 'emang ga ada yg berani']], { d: [D24], from: '08:10', to: '17:00' }],
  ],
};

// ===== Kamera: video beda tiap hari (baju casual). start = mulai dari detik ke-
const CAMERA_BY_DAY = {
  '2026-10-20': { src: 'vid/kino-casual-1.mp4', start: 0 },
  '2026-10-21': { src: 'vid/kino-selfie-2.mp4', start: 0 },
  '2026-10-22': { src: 'vid/kino-close.mp4', start: 0 },
  '2026-10-23': { src: 'vid/kino-casual-2.mp4', start: 0 },
  '2026-10-24': { src: 'vid/kino-casual-1.mp4', start: 6 },
  '2026-10-25': { src: 'vid/kino-casual-2.mp4', start: 2 },
};

// ===== Kalender Kino: [tanggal, jam ('' = seharian), judul, warna, catatan] =====
const AGENDA = [
  ['2026-09-12', '10:00', 'vet doongie (cek gigi)', '#ff9500', ''],
  ['2026-09-20', '', 'nonton konser sama kris', '#ff2d55', 'tiket di email'],
  ['2026-09-30', '', 'bayar maintenance apart', '#8e8e93', ''],
  ['2026-10-03', '', 'ultah kris', '#007aff', 'kue. jangan gosong.'],
  ['2026-10-06', '10:00', 'vet soonie (vaksin)', '#ff9500', ''],
  ['2026-10-09', '19:00', 'dinner sama kris', '#ff2d55', 'dia yg milih tempat'],
  ['2026-10-13', '09:30', 'sprint planning', '#5856d6', ''],
  ['2026-10-15', '14:00', 'maintenance server', '#5856d6', ''],
  ['2026-10-17', '', 'beli pasir kucing', '#34c759', 'tofu 2'],
  ['2026-10-19', '18:00', 'masak', '#34c759', ''],
  ['2026-10-20', '09:30', 'standup', '#5856d6', ''],
  ['2026-10-20', '10:00', 'maintenance server (standby)', '#5856d6', ''],
  ['2026-10-21', '09:30', 'standup', '#5856d6', ''],
  ['2026-10-21', '20:00', 'gym', '#34c759', 'kalo ga males'],
  ['2026-10-22', '09:30', 'standup', '#5856d6', ''],
  ['2026-10-22', '14:00', 'deploy patch', '#5856d6', 'ingetin juna. 2x.'],
  ['2026-10-22', '17:00', 'call 🎓', '#af52de', 'teams. kamera nyala. jangan diganggu.'],
  ['2026-10-22', '19:00', 'dinner tower B', '#ff9500', 'unit surya. bawa minum.'],
  ['2026-10-23', '09:30', 'standup', '#5856d6', ''],
  ['2026-10-23', '15:00', 'town hall Q4', '#5856d6', 'auditorium lt 2'],
  ['2026-10-23', '19:00', 'laundry lt 2', '#8e8e93', ''],
  ['2026-10-24', '13:00', 'potong rambut', '#34c759', 'batal. prod down.'],
  ['2026-10-24', '', 'on-call (primary)', '#5856d6', 'secondary: juna'],
  ['2026-10-25', '', 'bebas on-call 🎉', '#8e8e93', 'tuker sama juna'],
  ['2026-10-25', '', '🎂', '#af52de', ''],
  ['2026-10-25', '12:00', 'rumah mama?', '#ff9500', 'kue mama'],
  ['2026-10-28', '10:00', 'vet dori', '#ff9500', ''],
  ['2026-10-28', '15:00', 'postmortem auth-api', '#5856d6', 'kak mina yg nulis katanya'],
  ['2026-10-31', '', 'membership gym abis', '#8e8e93', 'perpanjang? (ga)'],
  ['2026-11-20', '', 'deadline jawab offer 🎓', '#af52de', ''],
  ['2026-10-31', '', 'bayar maintenance apart', '#8e8e93', ''],
  ['2026-11-07', '', 'quarterly review', '#5856d6', ''],
  ['2026-11-14', '', 'ultah mama', '#ff2d55', 'beli bunga'],
];

// ===== room tambahan: channel (promo/bank/paket) + temen =====
Object.assign(PEOPLE, {
  BankKu: { emoji: '🏦', bg: '#ffd400' },
  PaketExpress: { emoji: '📦', bg: '#ff6b2c' },
  MakanYuk: { emoji: '🍜', bg: '#ff3b5c' },
  Pengelola: { emoji: '🏢', bg: '#5b7bd5' },
  Hadiah: { emoji: '🎁', bg: '#ff8fab' },
  Hana: { av: '' },
});
CHATS.push(
  {
    id: 'bank', name: 'BankKu', person: 'BankKu', channel: true,
    msgs: [
      ['date', '2026-10-19'], ['them', '[BankKu] Pembayaran ₩45.000\nMeong Mart\nSaldo: ₩80.283.400', '14.02'],
      ['date', '2026-10-21'], ['them', '[BankKu] Pembayaran ₩12.900\nLaundry Tower B\nSaldo: ₩80.270.500', '07.12'],
      ['date', '2026-10-22'], ['them', '[BankKu] Pembayaran ₩38.000\nRestoran Gukbap (dinner bareng)\nSaldo: ₩80.232.500', '19.48'],
      ['date', '2026-10-23'], ['them', '[BankKu] Gaji masuk ₩5.420.000 💸\nLUMEN CORP\nSaldo: ₩85.652.500', '07.00'], ['them', '[BankKu] Pembayaran ₩27.500\nKopi Kita x5 (traktir tim)\nSaldo: ₩85.625.000', '09.41'],
      ['date', '2026-10-24'], ['them', '[BankKu] Pembayaran ₩20.000\nPocari x4 + roti (minimarket lt 1)\nSaldo: ₩85.605.000', '13.52'],
    ],
  },
  {
    id: 'paket', name: 'Paket Express', person: 'PaketExpress', channel: true,
    msgs: [
      ['date', '2026-10-23'], ['them', '📦 Paket kamu sedang dikirim\nPengirim: MAMA\nIsi: makanan (kimchi 2kg)\nEstimasi: besok', '10.15'],
      ['date', '2026-10-24'], ['them', '📦 Paket sudah diterima di lobi Tower B\nPenerima: satpam (Pak Wahyu)', '15.20'],
    ],
  },
  {
    id: 'makan', name: 'MakanYuk', person: 'MakanYuk', channel: true,
    msgs: [
      ['date', '2026-10-20'], ['them', '🍜 Malam dingin, ramen diskon 30%! Pakai kode HANGAT30', '19.00'],
      ['date', '2026-10-22'], ['them', '🍗 2 ayam goreng = 1 harga. Cocok buat makan berdua 💕', '18.00'],
      ['date', '2026-10-24'], ['them', '🎂 Mau rayain sesuatu? Kue ulang tahun antar 30 menit!', '17.30'],
    ],
  },
  {
    id: 'pengelola', name: 'Pengelola Tower B', person: 'Pengelola', channel: true,
    msgs: [
      ['date', '2026-10-21'], ['them', '[Pemberitahuan] Lift 3 maintenance hari ini 10.00–12.00. Mohon gunakan lift 1 & 2.', '08.00'],
      ['date', '2026-10-23'], ['them', '[Pemberitahuan] Mohon tidak meletakkan sepatu/barang di depan lift. Terima kasih 🙏', '11.00'],
      ['date', '2026-10-24'], ['them', '[Info] Paket atas nama unit 4419 tersedia di meja satpam.', '15.25'],
    ],
  },
  {
    id: 'hadiah', name: 'KakaoTalk Hadiah', person: 'Hadiah', channel: true,
    msgs: [
      ['date', '2026-10-25'],
      ['them', '🎁 Surya mengirim hadiah: Brownies Box (tanpa kismis)', '00.04'],
      ['them', '🎁 Juna mengirim hadiah: Susu Pisang x6', '00.06'],
      ['them', '🎁 Gemilang mengirim hadiah: Kopi Kita Venti', '00.09'],
      ['them', '🎁 Mama mengirim hadiah: "pulang ya nak" 💐', '07.30'],
    ],
  },
  {
    id: 'hana', name: 'Hana (temen kuliah)', person: 'Hana',
    msgs: [
      ['date', '2026-10-21'],
      ['them', 'kino!! reuni angkatan bulan depan ikut ga', '12.10'],
      ['me', 'liat nanti', '12.40'],
      ['them', 'bawa kris ya, anak2 kangen kalian berdua', '12.41'],
      ['them', 'couple paling awet se-angkatan wkwk 8 taun kan?', '12.41'],
      ['me', '...liat nanti', '12.55'],
      ['date', '2026-10-24'],
      ['them', 'kino...', '13.48'],
      ['them', 'sorry bgt gue ga maksud ikut campur', '13.48'],
      ['them', 'gue lg makan siang di seongsu', '13.49'],
      ['them', '', '13.50', { img: 'img/lapor-2.jpg' }],
      ['them', 'itu kris kan?', '13.51'],
      ['them', 'mereka... deket bgt. pegangan tangan', '13.51'],
      ['them', 'katanya anak kantornya juga, namanya yuna', '13.52'],
      ['me', 'iya. itu kris.', '14.02'],
      ['me', 'makasih han.', '14.03'],
      ['them', 'kino lo gapapa?', '14.03'],
      ['me', 'gapapa.', '14.04'],
      ['them', 'kino hbd duluan ya besok 🎉', '22.00'],
      ['them', 'gue di sini kalo lo butuh', '22.00'],
    ],
  },
);
TYPE_LINES.Hana = [['kayaknya gue dateng reuni sendiri', ['loh kenapa?', 'oke deh, gpp kok']], ['jgn bilang siapa2 soal foto itu', ['iya kino. janji']], ['makasih udah bilang', ['🫂']]];

// ===== Memo Suara: file aud/memo-*.mp3 (yang filenya gak ada otomatis disembunyiin) =====
const MEMOS = [
  { file: 'aud/memo-1.mp3', title: 'kita, filter anjing', ts: '2026-10-11T23:18' },
  { file: 'aud/memo-2.mp3', title: 'kris nyanyi di dapur', ts: '2026-10-03T00:12' },
  { file: 'aud/memo-3.mp3', title: 'soonie ngorok', ts: '2026-09-18T02:40' },
  { file: 'aud/memo-4.mp3', title: 'rekaman baru', ts: '2026-03-25T21:30' },
];

// ===== obrolan tambahan (engine ngurutin otomatis pakai tanggal+jam) =====
const more = (id, arr) => CHATS.find(c => c.id === id).msgs.push(...arr);
more('juna', [
  ['date', '2026-10-16'],
  ['them', 'BANGGG lo punya charger type c ga 🥺🥺', '21.10'], ['them', 'PLEASEEE hp gue 2% gue mau mati', '21.10'], ['me', 'ambil. balikin.', '21.16'], ['them', 'BANG KINO MALAIKAT 😭😭🙏', '21.16'],
  ['date', '2026-10-18'],
  ['them', 'bang... charger lo... ilang 😔', '11.02'], ['me', 'JUNA', '11.03'], ['them', 'CANDAAA BANG ADA DI GUE 😭😭 jangan bunuh gue', '11.03'], ['me', 'ga lucu', '11.04'],
  ['date', '2026-10-20'],
  ['them', 'bang gue dimarahin kak mina gara2 patch 😭😭 hidup gue hancur', '20.15'], ['me', 'ya emang salah lo jun', '20.20'], ['them', 'SUPPORT SYSTEM GUE MANAAA', '20.20'], ['me', 'ga ada wkwk', '20.21'], ['them', 'JAHAT 😭💔', '20.21'],
  ['date', '2026-10-21'],
  ['them', 'bang lo liat bang kris ga di lobi?? 🕵️', '19.40'], ['me', 'ngga. knp', '19.52'], ['them', 'biasanya jam segini dia nongkrong di minimarket bawah', '19.53'], ['them', 'hari ini GA ADA. misteri 😨', '19.53'],
  ['date', '2026-10-23'],
  ['them', 'bang senin gue traktir kopi!!! sebagai permintaan maaf atas segala dosa gue 🙏', '17.30'], ['me', 'tumben amat', '17.41'], ['them', 'gue lagi tobat bang', '17.41'], ['me', 'oke. venti.', '17.42'], ['them', 'NGELUNJAK 😭', '17.42'],
]);
more('surya', [
  ['date', '2026-10-17'],
  ['them', 'bang kino!! can I have your recipe? mau gue bikinin buat anak2 🥰', '18.20'], ['me', 'rahasia dong', '18.31'], ['them', 'awww 🥺 okay fair', '18.31'], ['me', 'kimchi asem. udah.', '18.33'], ['them', 'THANK YOU BANG 🥹 nanti I\'ll bring you a bowl', '18.33'],
  ['date', '2026-10-20'],
  ['them', 'bang soonie td di lobi, I gave her some pats 🥹 she\'s healthy kok', '16.00'], ['me', 'jgn kasih makan sembarangan', '16.12'], ['them', '...I may have given her a lil bit of cheese 🥺', '16.12'], ['me', 'SURYA', '16.13'], ['them', 'sorry bang 😭 I\'ll buy the fish snack dori likes as an apology', '16.13'],
  ['date', '2026-10-22'],
  ['them', 'bang you\'re coming to dinner kan?? jam 7!! I saved you a seat', '17.30'], ['me', 'iya', '17.46'], ['them', 'yayy 🥳 eat a lot ya bang, akhir2 you look skinnier', '17.46'],
  ['date', '2026-10-24'],
  ['them', 'bang are you busy tomorrow? 🤭', '16.10'], ['me', 'kenapa emang', '16.30'], ['them', 'nothing!! just asking!!', '16.30'], ['me', 'surya.', '16.31'], ['them', 'NOTHING BANG 🤐 good luck at work ya', '16.31'],
]);
more('sadewa', [
  ['date', '2026-10-18'],
  ['them', 'bang rekomendasiin film dong', '20.00'], ['me', 'gue ga nonton film elah', '20.10'], ['them', 'oh iya. lo cuma nonton kalo bang kris yg milih', '20.10'], ['me', 'ya dia yg milih lah', '20.11'], ['them', 'udah ketebak sih', '20.11'],
  ['date', '2026-10-21'],
  ['them', 'bang laundry lt 2 penuh. lo udah?', '08.10'], ['me', 'udah. tadi pagi', '08.20'], ['them', 'oh. jadi lo yg jam 3. tidur tuh penting bang', '08.20'], ['them', 'bukan gue peduli. cuma info', '08.21'],
  ['date', '2026-10-24'],
  ['them', 'bang. soal kemaren. gue beneran ga tau apa2', '11.00'], ['them', 'bukan gue khawatir ya. klarifikasi doang', '11.00'], ['me', 'iya iya gue tau', '11.20'], ['them', 'oke. makan siang jgn skip', '11.21'],
]);
more('gemilang', [
  ['date', '2026-10-15'],
  ['them', 'bang liat ig gue. karya terbaik dalam hidup gue 🎨✨', '22.00'], ['me', 'udah liat', '22.10'], ['them', 'bagus kan', '22.10'], ['me', 'lumayan sih', '22.11'], ['them', 'LUMAYAN??? hati gue patah 💔 tapi gpp gue kuat', '22.11'],
  ['date', '2026-10-20'],
  ['them', 'bang, bang kris ngajak gue makan malem ini, lo ikut?', '18.30'], ['me', 'ga diajak', '18.45'], ['them', 'oh...', '18.45'], ['them', 'ini awkward banget sumpah 😩', '18.45'], ['me', 'have fun', '18.46'],
  ['them', 'bang...', '23.30'], ['them', 'td bang kris bilang ke lo dia lembur ya', '23.30'], ['them', 'gue ga tau sumpah demi soonie 🥺 gue merasa bersalah seumur hidup', '23.31'], ['me', 'bukan salah lo. lebay', '23.40'],
  ['date', '2026-10-22'],
  ['them', 'bang lo di unit?', '19.30'], ['me', 'iya, knp emang', '19.40'], ['them', 'gpp. cuma mau mastiin lo masih napas 🥲', '19.40'],
]);
more('ilham', [
  ['date', '2026-10-17'],
  ['them', 'bang. makasih udah bantuin server td', '18.10'], ['them', 'bukan berarti gue ga bisa sendiri ya', '18.10'], ['me', 'next time baca log dulu', '18.20'], ['them', 'iya iya tau 🙄', '18.20'],
  ['date', '2026-10-20'],
  ['them', 'bang standup besok gue ngomong apa', '22.00'], ['them', 'bukan gue ga siap. konfirmasi doang', '22.00'], ['me', 'ya yg lo kerjain lah', '22.05'], ['them', 'gue... ga ngerjain apa2 hari ini 😑', '22.05'], ['me', 'kerjain.', '22.06'],
  ['date', '2026-10-24'],
  ['them', 'bang.', '21.20'], ['them', 'lo jangan pingsan lagi', '21.20'], ['them', 'bukan gue khawatir. gue cuma ga mau handle prod sendirian', '21.21'], ['me', 'iyaa bawel', '21.30'], ['them', 'besok libur yg bener. on-call nya juna, gue jagain juna nya', '21.31'],
]);
more('bagas', [
  ['date', '2026-10-18'],
  ['them', 'kino. punya obeng ga', '15.00'], ['me', 'punya lah', '15.05'], ['them', 'pinjem bentar', '15.05'], ['me', 'ambil sendiri, 4419', '15.06'], ['them', 'k makasih', '15.06'],
  ['date', '2026-10-22'],
  ['them', 'kris di unit lo?', '20.45'], ['me', 'ngga. knp emang', '20.50'], ['them', 'ga bales chat gue juga', '20.50'], ['them', 'lo udah makan belom', '20.51'], ['me', 'udah kok', '20.55'], ['them', 'k bagus', '20.55'],
  ['date', '2026-10-24'],
  ['them', 'gue ga nanya lo kenapa', '21.15'], ['them', 'bubur di depan unit lo. dimakan', '21.15'], ['me', 'bin', '21.40'], ['them', 'ga usah bilang makasih. tidur', '21.41'],
]);
more('mama', [
  ['date', '2026-10-18'],
  ['them', 'nak udah makan?', '12.00'], ['me', 'udah ma', '12.30'], ['them', 'kris sehat?', '12.30'], ['me', 'sehat ma', '12.31'],
  ['date', '2026-10-21'],
  ['them', 'nak mama kirim kimchi ya minggu ini', '09.00'], ['me', 'iya ma makasih', '09.20'],
  ['date', '2026-10-23'],
  ['them', 'kimchinya udah dikirim ya nak', '10.30'], ['me', 'iya ma udah ada notif', '10.40'],
]);
more('grup', [
  ['date', '2026-10-19'],
  ['Gemilang', 'ada yg mau pesen ayam?', '19.00'], ['Surya', 'MEEE', '19.00'], ['Juna', 'mau', '19.01'], ['me', 'mau. 2 paha', '19.02'], ['Bagas', 'lo yg bayar kino?', '19.02'], ['me', 'ngga.', '19.03'],
  ['date', '2026-10-21'],
  ['Surya', 'is lift 3 fixed yet? udh bener belom sih', '18.00'], ['Ilham', 'udah bang, td gue naik', '18.02'],
  ['date', '2026-10-24'],
  ['Juna', 'yg naro sepatu depan lift siapa sih, ditegur pengelola', '12.30'], ['Bagas', 'kino kali', '12.31'], ['me', 'bukan gue', '12.32'], ['Gemilang', 'itu sepatu gue 🥲', '12.35'],
]);
more('mina', [
  ['date', '2026-10-23'],
  ['them', 'kino, lo sama ilham handle incident tadi bagus bgt', '11.20'], ['me', 'makasih kak', '11.40'],
]);
// baris ketikan tambahan
TYPE_LINES.Juna.push(['kopi venti jgn lupa', ['IYA BANG INGET 😭 dompet gue nangis']], ['charger gue mana', ['...besok bang 🙏']]);
TYPE_LINES.Surya.push(['jgn kasih soonie keju lagi', ['iya bang maaf 🥺 janji']]);
TYPE_LINES.Sadewa.push(['laundry lt 2 kosong', ['oh. makasih', 'bukan gue nungguin ya']]);
TYPE_LINES.Gemilang.push(['makan dulu', ['iya bang 🍜 lo juga, jangan sampe pingsan kayak drama']]);
TYPE_LINES.Bagas.push(['obeng gue mana', ['besok elah, masih kepake']]);
TYPE_LINES.Ilham.push(['log server udah lo cek?', ['udah. dari tadi. ga usah ngingetin']]);
TYPE_LINES.Mama.push(['kimchinya udah sampe ma', ['syukur. dimakan ya', 'bagi kris juga']]);
TYPE_LINES.grup.push(['ayam lagi ga', [['Surya', 'MAU'], ['Juna', 'gas']]]);

// ===== BERANTEM (telepon) — 22 Okt 23.29, abis Kino kirim foto. Kino santai, nusuk.
const FIGHT_AT = '2026-10-24T14:07:25';
// ===== Kino ngetik kepeleset (salah ketik → dihapus → dibenerin). teks yg kekirim tetep sama =====
// PANIC: jendela waktu Kino lagi kacau → tiap pesan yg dia ketik otomatis ada 1–3 salah ketik yg dibenerin
const PANIC = [['2026-10-24T14:00', '2026-10-24T15:00'], ['2026-10-24T20:35', '2026-10-24T21:30'], ['2026-10-24T23:30', '2026-10-25T00:30']];
// TYPO_SEQ: buat momen yg mau ditulis manual (ngalahin PANIC). kunci = teks akhir persis, isi = ketikan & angka minus (hapus n huruf)
// contoh: 'aku baca': ['aku udah baca', -9, 'baca']  → ngetik "aku udah baca", hapus 9 huruf, ketik "baca"
const TYPO_SEQ = {};
const FIGHT_CALL = [
  ['t', 'kino...'],
  ['k', '...'],
  ['k', 'ngomong.'],
  ['t', 'itu ga kayak yg kamu pikir'],
  ['k', 'ck.'],
  ['k', 'aku belum mikir apa-apa, kris. aku nanya. itu kamu?'],
  ['t', 'iya... tapi—'],
  ['k', 'udah. "iya" aja cukup.'],
  ['k', 'kamu seneng ya ngeliat aku kayak orang bego?'],
  ['t', 'nggak, kino. dia yuna. temen kantor'],
  ['k', 'temen kantor. yang megang tangan kamu. di seongsu. jam makan siang.'],
  ['k', 'kemaren kamu cuti. hari ini kamu di seongsu sama cewek.'],
  ['t', '...kamu tau aku cuti?'],
  ['k', 'semua orang tau kamu cuti, kris.'],
  ['k', 'ya aku juga tau. tapi tadinya engga.'],
  ['k', 'kalo aku ga nanya bagas, aku ga akan tau.'],
  ['k', 'delapan tahun, kris. dan aku taunya dari temen kantor kamu.'],
  ['t', 'kino—'],
  ['k', 'jangan dipotong. aku belum selesai.'],
  ['k', 'tanggal 20 gemilang bilang kamu ngajak dia makan. sejam kemudian kamu chat aku "lembur".'],
  ['k', 'tanggal 21 kamu nonton sama sadewa. dia kira aku ikut. lucu ya.'],
  ['k', 'tanggal 22 kamu "nginep kantor". unit kamu gelap. yang ngabarin aku juna. JUNA, kris.'],
  ['k', 'kemaren kamu ilang. ga bales. ga baca. aku telfon kamu delapan kali.'],
  ['k', 'dan aku diem. aku nunggu kamu yang ngomong. aku pikir... ck.'],
  ['k', 'aku pikir kamu lagi nyiapin sesuatu buat aku.'],
  ['t', '...'],
  ['k', 'bego banget kan aku.'],
  ['t', 'kenapa kamu ga nanya...'],
  ['k', 'kenapa harus aku yang nanya?'],
  ['k', 'kenapa kamu ga bilang?'],
  ['t', 'aku capek, kino'],
  ['k', '...'],
  ['k', 'oh. capek.'],
  ['k', 'capek sama aku. tapi ga capek ngajak orang lain makan, nonton, pegangan tangan.'],
  ['k', 'gemilang. sadewa. yuna. siapa lagi?'],
  ['t', 'ga ada. sumpah ga ada'],
  ['t', 'aku cuma... aku ngerasa ga disayang, kino'],
  ['k', 'aku tau.'],
  ['t', '...kamu tau?'],
  ['k', 'ilham cerita kamu nanya di lift. "kalo sayang tapi ngerasa ga disayang balik, salah siapa." aku ga bego, kris.'],
  ['k', 'aku mau ngomongin itu tanggal 25. udah aku catet. aku mau bilang langsung, ga lewat chat.'],
  ['t', '...'],
  ['t', 'aku bilang sayang, kamu jawab "oh itu tau". aku nungguin kamu bilang balik. lama.'],
  ['t', 'terus aku capek nunggu. aku pengen ada yang keliatan seneng aku dateng'],
  ['k', 'ck.'],
  ['k', 'aku ngebiarin dori tidur di jaket kamu. biar unit aku tetep ada bau kamu.'],
  ['k', 'itu menurut kamu aku lagi ngapain, kris?'],
  ['t', '...'],
  ['k', 'oh. ga keliatan ya.'],
  ['t', 'kino, aku—'],
  ['k', 'terus kenapa ga bilang? kenapa ga ngomong ke aku, malah lari ke gemilang, ke sadewa, ke yuna?'],
  ['t', 'aku takut kamu bilang aku lebay'],
  ['k', 'iya. aku bakal bilang kamu lebay.'],
  ['k', 'terus aku bakal bilang sayang. biar kamu diem.'],
  ['t', '...'],
  ['k', 'tapi kamu ga nanya. kamu pergi.'],
  ['k', 'aku ga teriak ya. liat. aku santai.'],
  ['k', 'aku lagi di pantry. prod mati dari jam 8. ratusan ribu user ga bisa login. direksi nelfonin aku tiap 20 menit. aku belum makan dari kemaren.'],
  ['k', 'dan yang bikin tangan aku gemeter sekarang bukan prod.'],
  ['t', 'kino please, aku ke kantor kamu ya'],
  ['k', 'jangan.'],
  ['t', 'aku takut kamu pergi'],
  ['k', '...lucu.'],
  ['k', 'yang pergi duluan kan kamu. aku cuma telat nyadar.'],
  ['t', 'kino...'],
  ['k', 'aku mau balik kerja. ada yang lagi rusak dan nungguin aku benerin. setidaknya yang itu bisa dibenerin.'],
  ['k', 'jangan telfon.'],
];

// ===== 24 Okt: Kino pingsan — HP-nya banjir pesan
more('grup', [
  ['date', '2026-10-24'],
  ['Ilham', 'guys. bang kino pingsan di pantry kantor', '17.44'],
  ['Juna', 'GUYS BANG KINO PINGSAN 😭😭😭', '17.44'],
  ['Juna', 'TADI DIA LAGI BIKIN KOPI TERUS JATOH GITU AJA. KEPALANYA KEBENTUR MEJA', '17.45'],
  ['Surya', 'HAH', '17.46'], ['Surya', 'BANG KINO 😭😭', '17.46'], ['Surya', 'he\'s breathing kan?? JUNA ANSWER ME', '17.46'],
  ['Juna', 'NAPAS. NAPAS. tapi ga bangun2 😭😭', '17.46'],
  ['Gemilang', 'YA TUHAN 😩😩 gue lemes', '17.47'],
  ['Gemilang', 'gue ke kantor kalian sekarang. LIFT KE KANTOR KALIAN YG MANA', '17.47'],
  ['Ilham', 'udah dibawa ke klinik lt 3. jangan panik', '17.48'],
  ['Ilham', 'gue panik', '17.48'],
  ['Sadewa', 'gue otw', '17.49'],
  ['Sadewa', 'bukan gue panik. kebetulan jalan ke sana', '17.49'],
  ['Juna', 'kak mina lagi nemenin. gue di depan pintu klinik ga boleh masuk 😭 tangan gue gemeter', '17.50'],
  ['Surya', 'I\'m coming. 2 minutes', '17.50'],
  ['Bagas', 'siapa yg udah ngabarin kris', '18.01'],
  ['Juna', 'belom bang... gue ga berani', '18.02'],
  ['Bagas', 'gue aja', '18.05'],
  ['Bagas', 'udah. dia lari', '18.07'],
  ['Juna', 'kata dokter kecapean + stres. lagi diinfus. tensinya rendah bgt', '18.15'],
  ['Ilham', 'dia ga makan dari pagi. udah gue bilangin. keras kepala', '18.16'],
  ['Surya', 'I saw him dari kaca pintu. he\'s so pale 😭 I\'ve never seen bang kino like that', '18.18'],
  ['Gemilang', 'jangan cerita detail gue ga kuat 😭', '18.18'],
  ['Sadewa', 'bang kris dateng. ga boleh masuk juga', '18.40'],
  ['Sadewa', 'dia duduk di lantai depan klinik', '18.41'],
  ['Bagas', 'biarin aja dulu', '18.42'],
  ['Surya', 'I\'m making bubur sama brownies. taro depan unitnya 🥺', '18.50'],
  ['Ilham', 'prod udah up btw. dia yg benerin sebelum jatoh', '19.10'],
  ['Gemilang', 'unsung hero 😭💐 pahlawan tanpa tanda jasa', '19.11'],
  ['Juna', 'udah 3 jam kok belom bangun sih 😭😭', '20.10'],
  ['Ilham', 'kata dokter wajar. dia tidur. tidur beneran pertama kali seminggu ini kayaknya', '20.12'],
  ['Juna', 'BANG KINO UDAH SADAR 😭😭😭', '20.38'],
  ['Juna', 'DIA LANGSUNG NANYA "PROD GIMANA"', '20.38'],
  ['Ilham', 'iya emang orangnya gitu, nyebelin', '20.39'],
  ['me', 'gue gapapa. berisik', '20.55'],
  ['Surya', 'BANG 🥹🥹', '20.55'],
  ['Gemilang', 'bang istirahat ya 🥺', '20.56'],
  ['Juna', 'MASIH GALAK. ALHAMDULILLAH 😭', '20.56'],
]);
more('mama', [
  ['date', '2026-10-24'],
  ['them', 'nak? kok ga angkat telfon mama', '18.35'],
  ['them', 'kak mina bilang kamu pingsan??', '18.36'],
  ['them', 'nak jawab mama', '18.36'],
  ['them', '', '18.37', { call: 'Panggilan tak terjawab' }],
  ['them', '', '18.40', { call: 'Panggilan tak terjawab' }],
  ['them', 'mama udah beli tiket kereta ke seoul', '18.52'],
  ['them', 'nak', '19.10'],
  ['them', 'kak mina bilang kamu lagi tidur. mama tenang dikit', '19.45'],
  ['me', 'gapapa ma. kecapean doang', '21.00'],
  ['them', 'ya ampun nak... kamu tuh dari kecil gitu. ga bilang2 kalo capek', '21.01'],
  ['them', 'mama ga jadi berangkat. tapi besok kamu pulang. janji', '21.02'],
  ['me', 'iya ma. janji', '21.05'],
]);
more('surya', [
  ['date', '2026-10-24'],
  ['them', 'bang kino 😭', '18.08'], ['them', 'I left brownies depan unit lo ya. sama ginger tea', '19.30'], ['them', 'eat slowly bang. if you need anything, I\'m right here 🫶', '19.30'],
]);
more('gemilang', [
  ['date', '2026-10-24'],
  ['them', 'BANG KINO 😭 gue denger dari juna', '18.12'], ['them', 'gue minta maaf soal ramen. gue harusnya bilang lebih jelas. gue ga pantes jadi temen 💔', '18.13'], ['me', 'bukan salah lo lang. berlebihan.', '21.10'], ['them', 'oke... tapi gue tetep bawain bunga besok 💐', '21.11'],
]);

// ===== detail angst =====
// pesan Kris yg ditarik: pemain sempet liat sekilas (pertama kali buka), terus jadi "dihapus"
more('kris', [
  ['date', '2026-10-23'],
  ['them', 'kino aku—', '02.14', { retract: true }],
  ['them', 'aku kangen', '04.02', { retract: true }],
]);
// "Kris sedang mengetik..." muncul sebentar terus ilang (pas dia AFK)
const GHOST_TYPING = ['2026-10-23T00:00', '2026-10-24T14:06'];
// story close friends Kris yg udah ga ada
STORIES.push({ user: 'kris.chandra', img: '', ts: '2026-10-22T22:40', cf: true, gone: true });
// draft Kino yg ga pernah dikirim — cuma versi terakhir yg keliatan
NOTES.unshift({ id: 'draft', title: 'kris', drafts: [
  ['2026-10-20T23:55', 'kris, gemilang bilang kamu ngajak dia makan. kamu bilang ke aku lembur.\naku ga marah. aku cuma'],
  ['2026-10-21T23:58', 'kris. aku tau kamu nonton.\naku tau kamu bilang meeting.\nkenapa'],
  ['2026-10-22T23:52', 'kamu ga pulang. aku liat unit kamu dari balkon. gelap.\nkamu di mana kris. kamu sama siapa'],
  ['2026-10-23T23:50', 'kalo kamu udah ga mau, bilang.\naku bisa terima kalo kamu bilang.\naku ga bisa terima kalo kamu ilang.'],
  ['2026-10-24T22:50', ''],
] });

// ===== skor pilihan: tiap balasan pilihan = sabar (+1) / dingin (-1). Ngubah kalimat terakhir ending.
const TONE = {
  kx1: [1, -1], kx2: [1, -1], kx3: [1, -1], k5: [-1, 1], j1: [-1, 1], j2: [-1, 1], g1: [-1, 1], s1: [1, -1], y1: [1, -1], i1: [-1, 1], b1: [-1, 1], m1: [1, -1], r1: [-1, 1],
};
// ===== penutup ending: abis prosa, layar fade ke layar kunci Kino. notif masuk satu2 (ga bisa dibuka), abis itu kartu ending =====
// at = tanggal & jam di layar kunci. base = notif yg udah ada dari tadi (paling bawah). notifs = yg masuk satu2, yg terakhir masuk di paling atas (kayak iPhone)
// notif: [ikon, judul, isi, jam]. ikon: kakao / phone / photos / pengingat
const ENDING_LOCK = {
  maafin: { at: '2026-10-25T20:41', notifs: [['kakao', 'Mama', 'kris nambah nasi tiga kali. lain kali ajak lagi ya 🍚', 'sekarang']] },
  jeda: { at: '2026-10-25T23:52', notifs: [['pengingat', 'Pengingat', 'balikin jaket', 'nanti']] },
  turun: { at: '2026-10-25T09:24', base: [['kakao', 'Kris', 'selamat ulang tahun, kino.', '00.01']], notifs: [
    ['kakao', 'pemuda nyasar 😎 · Juna', '!!!!!!!!!!!!!!', '09.12'], ['phone', 'Telepon', 'Surya · Panggilan tak terjawab', '09.14'],
    ['kakao', 'Mama', 'ANAK MAMA 😭😭 telpon mama sekarang', '09.15'], ['kakao', 'Kak Mina (Lead IT)', 'Aku tahu kamu bakal keterima. Sekarang istirahat.', '09.21']] },
  waktu: { at: '2026-10-25T23:07', notifs: [['photos', 'Foto', 'Kenangan baru: dori 🐱', 'sekarang']] },
};
// suara suasana di narasi ending (disintesis, ga pake file). [jenis, awal paragraf pas mulai, awal paragraf pas berhenti, volume]
// hum = dengung kulkas kafe lobi, ding = lift sampe. teks paragrafnya diganti → cue-nya ikut diganti juga
const ENDING_SFX = {
  maafin: [['ding', 'Semuanya hilang begitu pintu terbuka.'], ['hum', 'Kafe kecil di lobi', 'Mereka berjalan ke lift bersama.'], ['ding', 'Pintu lift terbuka di lantai empat puluh empat.']],
  jeda: [['hum', 'Di telepon, Kris menunggu.', 'Kris menutup teleponnya.', .018]], // kedengeran lewat telepon: lebih pelan
  turun: [['ding', 'Kris berdiri di depan kafe lobi'], ['hum', 'Kris berdiri di depan kafe lobi', 'Kino tidak menoleh. Ia masuk lift.']],
  waktu: [['ding', 'Sebelum berangkat, Kino berdiri lama di depan lift.']],
};
const ENDING_TAIL = {
  maafin: { sabar: 'Di dalam lift, Kino menyandarkan kepalanya ke bahu Kris. "Jangan bikin aku nyesel."', dingin: 'Di dalam lift, Kino tidak bicara sepatah kata pun. Tapi ia juga tidak melepaskan tangan Kris.' },
  jeda: { sabar: 'Malam itu Kino mengganti nama kontak Kris. "nanti."', dingin: 'Kino mengarsipkan chat Kris. Tidak dihapus. Hanya diarsipkan.' },
  turun: { sabar: 'Di unitnya, Kino memakan kue itu sendirian. Enak. Ia benci itu.', dingin: 'Besok paginya kue itu diberikan ke Surya. Masih utuh.' },
  waktu: { sabar: 'Jam tiga pagi Kino mengetik "makasih udah jujur." Terkirim. Tidak dibaca sampai pagi.', dingin: 'Malam itu Kino tidur nyenyak. Untuk pertama kalinya minggu ini.' },
};
// kirim foto dari Galeri ke Kris: balasan tergantung fase
const PHOTO_REPLY = {
  normal: { old: ['kamu masih nyimpen ini 🥹', 'kangen'], now: ['lucu', 'kangen'] },
  cold: { old: ['...', 'iya, aku inget'], now: ['hm'] },
  afk: null,
  after: { old: ['aku inget hari itu', 'maaf kino'], now: ['...'] },
};

// kirim foto ke siapa aja: balasan per orang per jenis foto (cat/kris/food/other). kris2 = foto kris abis berantem
const PHOTO_SHARE = {
  juna: { cat: [['KUCINGG 😭😭', 'bang boleh gue culik satu'], ['ini soonie apa doongie', 'dua2nya lucu bgt gue mau pingsan']], kris: [['BANG KALIAN LUCU BGT 😭', 'gue jomblo bang tolong']], kris2: [['bang...', 'lo kirim ini ke gue maksudnya apa 😭 gue harus ngapain']], food: [['BANG ITU BUAT GUE?? 🥺', 'sisain plis']], other: [['bagus bang 😳', 'lo fotografer ya diem2']] },
  surya: { cat: [['🥹🥹🥹', 'I wanna squish her'], ['so cuteee bangg 🫶', 'give her churu from me ya']], kris: [['you two 🥹🫶', 'I love seeing you guys']], kris2: [['bang 🥺', 'I\'m here ya kalo lo mau cerita'], ['🫶', 'want me to bake you brownies?']], food: [['WAAA looks so good 🥹', 'share the recipe pls bang']], other: [['so pretty bangg 🥹', 'where are you?']] },
  gemilang: { cat: [['ini harus gue lukis 🎨😭', 'judulnya "makhluk paling bersyukur sedunia"']], kris: [['romansa 💐😭', 'kalian kayak film indie yg menang festival']], kris2: [['bang 💔', 'gue gatau harus ngomong apa. gue lukis aja ya']], food: [['warnanya cantik bgt 😭🎨', 'kayak lukisan monet tapi bisa dimakan']], other: [['komposisinya bagus bang 🎨', 'lo bakat']] },
  sadewa: { cat: [['lucu sih', 'bukan gue suka kucing ya. cuma fakta']], kris: [['dih pamer', '...tapi kalian keliatan seneng di situ']], kris2: [['bang', 'maaf. harusnya gue bilang dari awal']], food: [['enak ga tuh', 'kirim satu kalo enak']], other: [['bagus juga', 'lo bisa moto ternyata']] },
  ilham: { cat: [['lucu sih', 'tapi gue ga minta ya']], kris: [['ya ya ya', 'pamer mulu']], kris2: [['bang...', 'lo gapapa?']], food: [['ini lo yg masak?', 'gue curiga lo beli wkwk']], other: [['bagus', 'tapi kenapa kirim ke gue dah']] },
  bagas: { cat: [['lucu juga', 'yg oren gendut amat']], kris: [['hm', 'dia beruntung sih, jangan bilang gue bilang']], kris2: [['kino.', 'lo mau jalan malem? gue temenin']], food: [['otw. sisain', 'jangan dikasih juna']], other: [['bagus', 'di mana tuh']] },
  mama: { cat: [['ya ampun cucu mama 🥹', 'dikasih makan yang bener ya nak']], kris: [['kris makin ganteng ya 😊', 'salam buat kris nak']], kris2: [['nak, kamu baik2 aja?', 'mama telpon nanti ya']], food: [['wah kamu masak sendiri? 🥹', 'pinter anak mama']], other: [['bagus nak 🌷', 'jangan lupa makan']] },
  mina: { cat: [['omg lucu 😍', 'yang ini namanya siapa?']], kris: [['cute 🥹', 'udah lama ya kalian']], kris2: [['kino', 'lo ga harus cerita. tapi gue ada kalo perlu']], food: [['wah enak', 'bawa ke kantor dong sekali2']], other: [['nice shot!', '📸']] },
  hana: { cat: [['KINOOO kucing lo makin gendut 😭', 'lucu bgt']], kris: [['ih kalian 🥹', 'awet ya']], kris2: [['kino...', 'maaf ya gue yang ngirim foto itu']], food: [['ini lo masak?? sejak kapan 😭', 'ajarin']], other: [['bagusss', 'lo di mana?']] },
  grup: { cat: [[['Surya', '🥹🥹🥹'], ['Juna', 'KUCING ALERT 🚨'], ['Bagas', 'k']]], kris: [[['Juna', 'BANG PAMER 😭'], ['Gemilang', 'romansa 💐'], ['Ilham', 'pamer']]], kris2: [[['Surya', '🫶'], ['Bagas', 'kino. sini']]], food: [[['Juna', 'BAGI 🥺'], ['Surya', 'looks sooo good']]], other: [[['Gemilang', 'bagus bang 🎨'], ['Juna', 'wah']]] },
};
const SHARE_TO = ['kris', 'surya', 'gemilang', 'juna', 'sadewa', 'ilham', 'bagas', 'grup', 'mama', 'mina', 'hana'];

// ===== epilog: HP seminggu kemudian, isinya beda tiap ending (o.epi = ending) =====
const EPI_DATE = '2026-11-01T20:30';
more('kris', [
  ['date', '2026-10-28'], ['them', 'kino, aku udah di depan. bawa makan', '19.40', { epi: 'maafin' }], ['me', 'masuk. pintunya ga dikunci', '19.41', { epi: 'maafin' }],
  ['date', '2026-11-01'], ['them', 'minggu depan anter dori ke vet bareng ya', '20.10', { epi: 'maafin' }], ['me', 'iya. kamu yg bayar', '20.12', { epi: 'maafin' }],
  ['date', '2026-10-25'],
  ['date', '2026-10-30'], ['them', 'jaketnya udah aku cuci. makasih udah ngembaliin', '21.00', { epi: 'turun' }],
  ['date', '2026-10-25'], ['them', 'jaketnya udah aku ambil. makasih udah dilipet', '02.30', { end: 'waktu' }], ['them', 'selamat ulang tahun, kino. yg terakhir dari aku.', '02.31', { end: 'waktu' }],
]);
more('grup', [
  ['date', '2026-10-30'], ['Surya', 'BANG KRIS BANG KINO DINNER TOGETHER?? 🥹 omg', '19.00', { epi: 'maafin' }], ['Kris', 'iya', '19.02', { epi: 'maafin' }], ['me', 'jgn heboh', '19.03', { epi: 'maafin' }], ['Juna', '🥹🥹🥹', '19.03', { epi: 'maafin' }],
  ['date', '2026-10-31'], ['Kris', 'jaket punya bagas, gue balikin. udah dicuci', '18.00', { epi: 'jeda' }], ['Bagas', 'akhirnya', '18.05', { epi: 'jeda' }],
  ['date', '2026-10-31'], ['Gemilang', 'bang kino mau ikut ke pasar malem?', '17.00', { epi: 'waktu' }], ['me', 'ikut', '17.20', { epi: 'waktu' }], ['Surya', 'BANG KINO IS COMING 🥳', '17.20', { epi: 'waktu' }],
  ['date', '2026-10-27'], ['Surya', 'bang kino the cake in the lobby fridge dari siapa? can I eat it?', '10.00', { epi: 'turun' }], ['me', 'makan aja', '10.30', { epi: 'turun' }],
]);
more('mama', [['date', '2026-10-26'], ['them', 'nak, tupperware mama yg ijo jangan lupa dibalikin ya', '09.00', { epi: 'maafin' }], ['me', 'iya ma. minggu depan sama kris', '09.30', { epi: 'maafin' }],
  ['date', '2026-10-26'], ['them', 'nak, mama ga nanya apa-apa ya. tapi mama di sini', '09.00', { epi: 'jeda' }], ['me', 'iya ma. makasih', '09.30', { epi: 'jeda' }]]);
more('hana', [['date', '2026-10-29'], ['them', 'kino, reuni jadi dateng?', '12.00', { epi: 'jeda' }], ['me', 'dateng. sendiri', '12.20', { epi: 'jeda' }], ['them', 'oke! gue temenin 🫂', '12.21', { epi: 'jeda' }],
  ['date', '2026-10-29'], ['them', 'kino, reuni jadi dateng?', '12.00', { epi: 'waktu' }], ['me', 'dateng.', '12.20', { epi: 'waktu' }], ['them', 'yeay!! 🥳', '12.21', { epi: 'waktu' }]]);
more('juna', [['date', '2026-10-26'], ['them', 'BANG KOPI VENTI NIH 🫡☕ taro depan unit. tanda cinta', '08.30', { epi: 'all' }], ['me', 'thanks jun', '08.40', { epi: 'all' }]]);

// ===== notif pembuka tiap hari (pertama kali buka HP hari itu) =====
const DAILY = {
  '2026-10-20': ['weather', 'Cuaca', 'Seoul 11° · berawan. malem dingin, bawa jaket.'],
  '2026-10-21': ['meong', 'Meong Mart', 'Snack ikan favorit dori lagi diskon 20% 🐟'],
  '2026-10-22': ['calendar', 'Kalender', 'dinner tower B · 19.00'],
  '2026-10-23': ['photos', 'Foto', 'Kenangan baru: "awal kita" ✨'],
  '2026-10-24': ['weather', 'Cuaca', 'Seoul 7° · hujan ringan sepanjang hari.'],
  '2026-10-25': ['calendar', 'Kalender', '🎂 hari ini · bebas on-call'],
};
// ===== Kenangan (Foto → Untuk Kamu): slideshow beda tiap hari =====
const MEMORIES = {
  '2026-10-20': ['musim semi 2018', ['img/kafe-pertama.jpg', 'img/gal/old-0.jpg', 'img/gal/old-1.jpg', 'img/gal/old-2.jpg']],
  '2026-10-21': ['2019', ['img/gal/old-3.jpg', 'img/gal/old-4.jpg', 'img/ig/minchan-3.jpg']],
  '2026-10-22': ['photo booth', ['img/gal/old-5.jpg', 'img/gal/old-8.jpg', 'img/ig/minchan-5.jpg']],
  '2026-10-23': ['awal kita', ['img/kafe-pertama.jpg', 'img/gal/old-0.jpg', 'img/kris-2.jpg', 'img/kita-2.jpg']],
  '2026-10-24': ['kita & dori', ['img/gal/meong-0.jpg', 'img/kita-1.jpg', 'img/soonie-jaket.jpg']],
  '2026-10-25': ['8 tahun', ['img/kafe-pertama.jpg', 'img/gal/old-0.jpg', 'img/gal/old-3.jpg', 'img/gal/old-5.jpg', 'img/gal/old-7.jpg', 'img/kris-2.jpg', 'img/kris-1.jpg', 'img/kita-1.jpg']],
};

// ===== channel tambahan (brand plesetan) =====
Object.assign(PEOPLE, {
  Kupang: { emoji: '🚀', bg: '#e8483f' },
  OliveJung: { emoji: '🫒', bg: '#9bc53d' },
  FitHouse: { emoji: '💪', bg: '#1c1c1e' },
  Nontonflix: { emoji: '🎬', bg: '#c4161c' },
});
CHATS.push(
  { id: 'kupang', name: 'Kupang 🚀', person: 'Kupang', channel: true, msgs: [
    ['date', '2026-10-19'], ['them', '[Roket Kirim] Tisu x3, vitamin C, sikat gigi — tiba besok sebelum jam 7 pagi 🚀', '22.10'],
    ['date', '2026-10-20'], ['them', '[Roket Kirim] Pesanan kamu sudah di depan unit 4419 📦', '06.40'],
    ['date', '2026-10-22'], ['them', 'Selimut "Super Hangat" kembali tersedia! Cocok buat yang tidur sendirian di musim dingin ❄️', '20.00'],
    ['date', '2026-10-24'], ['them', 'Barang di keranjang menunggumu: lilin aromaterapi lavender (bantu tidur nyenyak) 🕯️', '23.10'],
  ] },
  { id: 'olive', name: 'Olive Jung', person: 'OliveJung', channel: true, msgs: [
    ['date', '2026-10-20'], ['them', 'Halo member Kino! Poin kamu sekarang 12.400 🫒', '11.00'],
    ['date', '2026-10-22'], ['them', 'Sunscreen favoritmu restock! Stok terbatas ☀️', '13.00'],
    ['date', '2026-10-23'], ['them', 'Mata panda? Eye patch diskon 40% buat kamu yang kurang tidur 🐼', '22.30'],
    ['date', '2026-10-24'], ['them', '🎂 Kupon ulang tahun 30% — buat kulit yang capek begadang', '09.00'],
  ] },
  { id: 'gym', name: 'FitHouse Tower B', person: 'FitHouse', channel: true, msgs: [
    ['date', '2026-10-21'], ['them', 'Halo Kino! Kamu belum check-in 9 hari 🥲 Kami kangen.', '07.00'],
    ['date', '2026-10-21'], ['them', '✅ Check-in berhasil · 20.04', '20.04'],
    ['date', '2026-10-23'], ['them', 'Kelas yoga malam ini 20.00 masih 3 slot. Lepasin stres yuk 🧘', '15.00'],
    ['date', '2026-10-25'], ['them', 'HBD Kino! Free 1 sesi PT buat kamu 💪', '08.00'],
  ] },
  { id: 'nonton', name: 'Nontonflix', person: 'Nontonflix', channel: true, msgs: [
    ['date', '2026-10-21'], ['them', 'Baru di Nontonflix: "Musim Dingin Kedua" — drama romansa yang bikin nangis 🎬', '18.00'],
    ['date', '2026-10-23'], ['them', '⚠️ Perangkat baru nonton di akunmu\nPerangkat: iPhone (Kris)\nLokasi: Seongsu-dong, Seoul\n21.10', '21.10'],
    ['them', 'Bukan kamu? Ubah kata sandi di Pengaturan akun.', '21.11'],
  ] },
);

// ===== history Kino ↔ Kris sebelum semuanya (Kino witty, diem2 sayang) =====
more('kris', [
  ['date', '2026-09-14'],
  ['them', 'kino aku masuk angin', '19.02'],
  ['me', 'terus', '19.10'],
  ['them', 'peluk?', '19.10'],
  ['me', 'aku punya tolak angin. efeknya sama', '19.11'],
  ['them', 'bedaaa 😭', '19.11'],
  ['me', 'yaudah ke sini. tolak anginnya aku yg pegangin', '19.12'],
  ['them', 'otwww', '19.12'],
  ['date', '2026-09-20'],
  ['them', 'tiket konsernya udah aku taro di email kamu', '10.20'],
  ['me', 'kamu beli 2?', '10.31'],
  ['them', 'iyalah', '10.31'],
  ['me', 'kirain buat kamu sama soonie', '10.32'],
  ['them', 'soonie ga suka bass', '10.32'],
  ['me', 'fakta', '10.33'],
  ['date', '2026-09-23'],
  ['them', 'aku lupa password wifi unit kamu', '21.40'],
  ['me', 'sama kayak ulang tahun kamu', '21.45'],
  ['them', '...1003?', '21.45'],
  ['me', 'kamu lupa ulang tahun sendiri?', '21.46'],
  ['them', 'aku lupa password, bukan ultah 😭', '21.46'],
  ['me', 'tetep satu kategori', '21.47'],
  ['date', '2026-09-27'],
  ['me', 'kamu makan apa', '02.04'],
  ['them', 'mie instan', '02.05'],
  ['me', 'jam 2 pagi?', '02.05'],
  ['them', 'laper ga kenal jam', '02.05'],
  ['me', 'lambung kenal', '02.06'],
  ['them', 'iya ibu', '02.06'],
  ['me', 'ibu?', '02.06'],
  ['them', 'iya sayanggg*', '02.07'],
  ['me', 'telat', '02.07'],
  ['date', '2026-09-30'],
  ['them', '', '08.12', { img: 'img/gal/meong-3.jpg' }],
  ['them', 'dori tidur di tas kerja aku', '08.12'],
  ['me', 'dia tau kamu mau berangkat. itu demo', '08.15'],
  ['them', 'demonya berhasil. aku telat 10 menit', '08.40'],
  ['me', 'good girl', '08.41'],
  ['date', '2026-10-01'],
  ['them', 'lusa aku ulang tahun lohh', '22.00'],
  ['me', 'oh ya?', '22.10'],
  ['them', 'KINO', '22.10'],
  ['me', 'bercanda. aku inget dari 8 taun lalu', '22.11'],
  ['them', '🥹', '22.11'],
  ['me', 'jgn nangis. masih lusa', '22.12'],
  ['date', '2026-10-05'],
  ['them', 'kue yg kemaren masih ada?', '12.30'],
  ['me', 'udah aku kasih bagas', '12.41'],
  ['them', 'KUE ULTAH AKUUU??', '12.41'],
  ['me', 'yg gosong. kamu udah kenyang dipuji', '12.42'],
  ['them', 'ini pengkhianatan', '12.42'],
  ['me', 'bagas bilang enak. bagas ga bisa bohong', '12.43'],
  ['them', 'itu bener sih wkwk', '12.43'],
  ['date', '2026-10-07'],
  ['me', 'kamu ninggalin kaos kaki di sofa aku', '18.20'],
  ['them', 'kenang-kenangan', '18.30'],
  ['me', 'kenang-kenangan yg bau', '18.30'],
  ['them', 'cinta kadang bau wkwkwk', '18.31'],
  ['me', 'aku blokir ya wkwk', '18.31'],
  ['them', 'jangan 😭 nanti aku ambil', '18.31'],
  ['me', 'udah aku cuci. jangan geer', '18.32'],
  ['date', '2026-10-09'],
  ['them', 'aku udah booking tempat jam 7', '15.00'],
  ['me', 'yg mana', '15.20'],
  ['them', 'rahasia', '15.20'],
  ['me', 'kalo pedes aku pulang', '15.21'],
  ['them', 'ga pedes kok', '15.21'],
  ['me', 'kamu bilang gitu pas tteokbokki', '15.22'],
  ['them', 'itu level 2 doangg!! wkwk', '15.22'],
  ['me', 'level 2 neraka haha', '15.23'],
  ['date', '2026-10-12'],
  ['me', 'tidur', '03.02'],
  ['them', 'bentar lagi', '03.04'],
  ['me', 'kris ini jam 3', '03.04'],
  ['them', 'kamu juga belum tidur', '03.05'],
  ['me', 'aku nungguin kamu tidur', '03.05'],
  ['them', '...', '03.06'],
  ['them', 'ok aku tidur', '03.06'],
  ['them', 'good night kino', '03.06'],
  ['me', 'night', '03.07'],
  ['date', '2026-10-15'],
  ['them', 'kino kamu tau ga', '21.30'],
  ['me', 'ga', '21.31'],
  ['them', 'aku belum ngomonggg 😭', '21.31'],
  ['me', 'tetep ga', '21.31'],
  ['them', 'aku sayang kamu', '21.32'],
  ['me', 'oh. itu tau', '21.32'],
  ['date', '2026-10-17'],
  ['me', 'jangan nambah lagi', '20.40'],
  ['them', 'ini baru ketiga hehe', '20.40'],
  ['me', 'tepat. makanya jangan', '20.41'],
  ['them', 'masakan kamu enak, gimana dong', '20.41'],
  ['me', 'tanggung sendiri. sakit perut jgn ke aku', '20.42'],
  ['them', 'tapi kamu yg ngurusin kan', '20.42'],
  ['me', '...iya', '20.43'],
]);
more('grup', [
  ['date', '2026-10-16'],
  ['Juna', 'siapa yg masak?? wangi bgt sampe lt 30 😭', '19.10'],
  ['me', 'gue. ga dibagi', '19.12'],
  ['Surya', 'bang 🥺', '19.12'],
  ['me', 'yg ngetuk duluan dapet', '19.13'],
  ['Juna', 'OTW', '19.13'], ['Surya', 'OTW', '19.13'],
  ['Gemilang', 'otw tp jalannya pelan biar elegan', '19.14'],
  ['me', 'udah abis wkwk', '19.20'],
  ['Juna', 'BANG 😭😭 GUE UDAH DI DEPAN LIFT', '19.20'],
]);
more('juna', [
  ['date', '2026-10-14'],
  ['them', 'bang gimana caranya biar ga telat standup 😭', '22.00'], ['me', 'ya tidur lah', '22.05'], ['them', 'selain itu', '22.05'], ['me', 'ya bangun jun', '22.06'], ['them', 'GA MEMBANTU 😭', '22.06'],
]);
more('surya', [
  ['date', '2026-10-19'],
  ['them', 'bang do you think pink hair would suit me? 🥺', '13.00'], ['me', 'cocok kok', '13.10'], ['them', 'REALLY??', '13.10'], ['me', 'cocok buat diledekin', '13.11'], ['them', 'BANG 😭 but thanks for being honest 🫶', '13.11'],
]);
more('sadewa', [
  ['date', '2026-10-16'],
  ['them', 'bang lo liat headset gue', '09.00'], ['me', 'liat dong', '09.05'], ['them', 'di mana anjir', '09.05'], ['me', 'di leher lo', '09.06'], ['them', '...', '09.06'], ['them', 'bukan gue ga liat. ngetes lo doang', '09.07'],
]);
more('ilham', [
  ['date', '2026-10-15'],
  ['them', 'bang kenapa query gue lambat', '16.00'], ['me', 'karena lo nulisnya kayak surat cinta. panjang, ga jelas', '16.10'], ['them', 'bukan gue sakit hati ya', '16.11'], ['them', '...tapi ajarin', '16.11'],
]);
more('mama', [
  ['date', '2026-10-16'],
  ['them', 'nak, kris masih suka masakan kamu?', '17.00'], ['me', 'masih. nambah 3x', '17.20'], ['them', 'anak baik', '17.20'], ['me', 'anak rakus ma', '17.21'], ['them', 'hus 😄', '17.21'],
]);

// ===== X (Twitter) =====
const X_USERS = {
  kino:     { name: 'kino', handle: 'kinoleee', person: 'Kino', bio: 'platform @ lumen. kucing tiga. ga bales mention.', following: 41, followers: 380 },
  kris:     { name: 'kris', handle: 'krischandra', person: 'Kris', bio: 'product. 🐺', following: 88, followers: 512 },
  juna:     { name: 'JUNA 🐿️', handle: 'junahann', person: 'Juna', bio: 'developer (katanya). drama queen (fakta)', following: 302, followers: 455 },
  surya:    { name: 'surya ☀️', handle: 'suryalix', person: 'Surya', bio: 'baking & loving my friends 🫶', following: 210, followers: 1290 },
  gemilang: { name: 'gemilang 🎨', handle: 'gemilangrp', person: 'Gemilang', bio: 'melukis perasaan yg ga sempet diomongin', following: 150, followers: 2210 },
  sadewa:   { name: 'sadewa', handle: 'sadewaak', person: 'Sadewa', bio: 'ok.', following: 33, followers: 290 },
  ilham:    { name: 'ilham', handle: 'ilhamjeong', person: 'Ilham', bio: 'intern. bukan anak kecil.', following: 120, followers: 201 },
  bagas:    { name: 'bagas', handle: 'bagasbinn', person: 'Bagas', bio: '', following: 12, followers: 140 },
  yuna:     { name: 'yuna ✨', handle: 'yunaa_mkt', person: '', bio: 'marketing girlie · seongsu cafe hopper ☕', following: 640, followers: 1880 },
  cuaca:    { name: 'Cuaca Seoul', handle: 'seoul_cuaca', person: '', emoji: '🌦️', bio: 'info cuaca seoul tiap pagi', following: 1, followers: 48200 },
  meme:     { name: 'ngoding meme', handle: 'ngodingmeme', person: '', emoji: '💻', bio: 'meme buat yg deploy hari jumat', following: 3, followers: 91000 },
};
// [id, user, waktu, teks, gambar?, balasan [[user, teks]], suka]
const X_POSTS = [
  ['r1', 'kris', '2026-10-03T00:20', 'umur nambah. kue gosong. bahagia.', 'img/kris-ultah.jpg', [['kino', 'gosongnya dikit'], ['kris', 'iya sayang dikit']], 120],
  ['r2', 'kris', '2026-10-09T22:10', 'dinner. dia bilang level 2 = neraka. dia bener.', '', [['kino', 'aku selalu bener']], 64],
  ['m1', 'meme', '2026-10-19T11:00', 'deploy hari jumat itu bukan keberanian. itu cari masalah.', '', [], 8200],
  ['c1', 'cuaca', '2026-10-20T07:00', 'Seoul hari ini 11°, berawan. Malam turun ke 7°. Jaket wajib 🧥', '', [], 312],
  ['y1', 'yuna', '2026-10-20T12:30', 'makan siang sama tim di seongsu 🍝 enak bgt sumpah', '', [], 58],
  ['j1', 'juna', '2026-10-20T20:30', 'dimarahin lead gara2 patch. gue rasa gue butuh liburan 3 tahun 😭😭', '', [['ilham', 'lebay'], ['juna', 'BUKAN LEBAY INI PERASAAN 😭']], 22],
  ['g1', 'gemilang', '2026-10-21T15:00', 'lukisan baru. judulnya "orang yg ditinggal di lobi". jangan tanya kenapa 🎨💔', 'img/ig/gemilang-3.jpg', [['juna', 'KENAPA 😭'], ['gemilang', 'dibilang jangan tanya']], 340],
  ['s1', 'sadewa', '2026-10-21T22:40', 'film tadi biasa aja. gue ga nangis. mata gue alergi popcorn.', '', [['ilham', 'pfft'], ['sadewa', 'diem']], 31],
  ['r3', 'kris', '2026-10-21T22:55', 'film bagus.', '', [], 12],
  ['u1', 'surya', '2026-10-22T16:00', 'brownies batch 2 success!! no raisins, for someone special 🍫🫶', 'img/ig-surya.jpg', [['kino', 'bagus'], ['surya', 'BANG KINO BALES 🥹🥹']], 410],
  ['y2', 'yuna', '2026-10-22T23:00', 'malem ini seru ✨ seongsu at night hits different', '', [], 74],
  ['i1', 'ilham', '2026-10-23T10:00', 'pertama kali pegang incident sendiri. bang kino cuma ngeliatin. aman. (ga aman)', '', [['kino', 'aman.'], ['ilham', 'iya iya bang']], 15],
  ['b1', 'bagas', '2026-10-23T22:50', 'jalan malem. kepala jadi enteng. coba deh.', '', [], 9],
  ['y3', 'yuna', '2026-10-24T13:30', 'seongsu lagi 🤍 favorit', '', [], 66],
  ['c2', 'cuaca', '2026-10-24T07:00', 'Seoul 7°, hujan ringan sepanjang hari ☔', '', [], 280],
  ['j2', 'juna', '2026-10-24T18:20', 'tolong doain temen gue 😭🙏 dia orang paling galak sedunia tapi orang paling baik juga', '', [['surya', '🙏🙏'], ['gemilang', '🙏💐']], 205],
  ['r4', 'kris', '2026-10-24T23:40', 'maaf.', '', [], 3],
];
// tweet yg di-like Kris (keliatan di tab "Suka" profilnya)
// akun utama Kino (@kinoleee): jarang ngetweet, kering
X_POSTS.push(
  ['k1', 'kino', '2026-09-02T12:40', 'kucing gue lebih cepet belajar dari intern', '', [['ilham', 'bang 🙄'], ['juna', 'WKWKWKWK']], 41],
  ['k2', 'kino', '2026-09-21T00:45', 'encore. ada yg nangis. bukan gue.', '', [['kris', 'bohong'], ['kino', 'diem']], 88],
  ['k3', 'kino', '2026-10-03T00:05', 'hbd @krischandra. jangan nangis.', '', [['kris', 'telat. udah nangis 🥹'], ['surya', '🥹🥹🥹']], 156],
  ['k4', 'kino', '2026-10-16T17:58', 'deploy hari jumat? ga.', '', [['juna', 'bang gue udah deploy 😭'], ['kino', 'rollback.']], 63],
  ['k5', 'kino', '2026-10-25T12:00', 'makasih ucapannya. udah. jangan rame.', '', [['juna', 'BANG KINO NGETWEET 😭🎂'], ['gemilang', '🎂💐'], ['ilham', 'hbd bang (ga rame)']], 230],
);
X_POSTS.push(
  ['kh1', 'kris', '2026-10-20T22:10', 'kuahnya kebanyakan.', '', [], 9],
  ['kh2', 'kris', '2026-10-21T21:50', 'kursi sebelah.', '', [], 4],
  ['kh3', 'kris', '2026-10-24T13:40', 'kucing lewat. pengen fotoin buat seseorang.', '', [], 6],
);
// epilog: album "kenangan" + foto tambahan, beda tiap ending
const EPI_MEMORY = {
  maafin: ['kita, lagi', ['img/kita-2.jpg', 'img/gal/cook-1.jpg', 'img/gal/meong-1.jpg', 'img/kita-1.jpg']],
  jeda: ['jeda', ['img/gal/meong-3.jpg', 'img/ig/cats-1.jpg', 'img/wall-lock-sdd.jpg']],
  turun: ['8 tahun', ['img/kafe-pertama.jpg', 'img/gal/old-0.jpg', 'img/han-river.jpg']],
  waktu: ['makasih', ['img/gal/old-3.jpg', 'img/gal/old-7.jpg', 'img/wall-lock-sdd.jpg']],
};
PHOTOS.push(
  { img: 'img/gal/cook-1.jpg', ts: '2026-10-28T20:10', place: 'Apart', epi: 'maafin' },
  { img: 'img/kita-2.jpg', ts: '2026-10-30T19:40', place: 'Mapo', epi: 'maafin' },
  { img: 'img/gal/meong-3.jpg', ts: '2026-10-27T09:00', place: 'Apart', epi: 'jeda' },
  { img: 'img/ig/cats-1.jpg', ts: '2026-10-31T21:00', place: 'Apart', epi: 'jeda' },
  { img: 'img/han-river.jpg', ts: '2026-10-29T18:30', place: 'Sungai Han', epi: 'turun' },
  { img: 'img/wall-lock-sdd.jpg', ts: '2026-10-30T08:00', place: 'Apart', epi: 'waktu' },
);
const X_MAIN_FOLLOWS = ['kino', 'kris', 'juna', 'surya', 'gemilang', 'sadewa', 'ilham', 'bagas', 'cuaca', 'meme'];
const X_KRIS_LIKES = [['y1', '2026-10-20T12:41'], ['y2', '2026-10-22T23:05'], ['y3', '2026-10-24T13:32'], ['r2', '2026-10-09T22:30']];

// ===== X: akun private Kino (alt). Bukannya bales chat, dia sambat di sini.
// format sama kayak X_POSTS, tambahan opsi: { fight: true } = baru muncul abis berantem, { epi: 'maafin' } = cuma di epilog itu
X_USERS.alt = { name: '.', handle: 'tigakucing_', person: '', avImg: 'img/ig/cats-0.jpg', locked: true, bio: 'ga usah follow.', following: 0, followers: 0 };
const ALT = [
  ['2026-09-14T19:20', 'dia masuk angin trs minta peluk, gue kasih tolak angin eh masih minta peluk juga, yaudah dua2nya deh, manja bangettt heran'],
  ['2026-09-20T10:40', 'dibeliin tiket konser dua katanya buat gueee, halah palingan ntar dia sendiri yg mewek pas encore'],
  ['2026-09-21T00:30', 'mewek pas encore kan KANNN udah gue bilang wkwkwk, gue juga sih dikit tp ga ada yg liat jadi ga diitung'],
  ['2026-09-23T21:50', 'pw wifi gue tuh ultahnya dia dan yg lupa malah DIA, gue ga tersinggung kok cuma bakal gue inget seumur hidup aja haha'],
  ['2026-09-27T02:10', 'jam 2 pagi makan indomie trs manggil gue ibu?? besok gue blokir (ga deng, siapa yg mau gue masakin kalo diblokir)'],
  ['2026-10-01T22:20', 'udah 8 taun masih aja takut gue lupa ultahnya, lucu bgt orang ini, mana mungkin lupa sih, tiap hari juga gue inget dia'],
  ['2026-10-03T00:10', 'kuenya gosong dikit trs dia makan sambil nangis, katanya bukan gara2 gosong, iya iyaa percayaaa wkwk'],
  ['2026-10-07T18:35', 'kaos kakinya ketinggalan di sofa katanya kenang2an, kenang2an pala lo, udah gue cuciin, jgn bilang dia ntar dia gr'],
  ['2026-10-09T23:00', 'level 2 tuh neraka sumpah, dia ngakak liat gue keringetan, gue ngakak liat dia ngakak, bego semua wkwkwk, seneng sih'],
  ['2026-10-12T03:10', 'nungguin orang tidur tuh kerjaan full time yg ga ada gajinya, tp kalo orangnya dia gpp deh gue lembur'],
  ['2026-10-14T00:50', 'jam 12 malem nungguin di lobi bawa roti, ngakunya ga dingin padahal idungnya udah merah kayak rudolf, gue pura2 ga liat biar dia ga malu haha'],
  ['2026-10-15T21:35', 'dia bilang sayang trs gue cuma jawab "oh itu tau", dia ketawa, padahal gue pengen bilang balik huhu, besok aja deh (besoknya ga bilang juga, payah lo kino)'],
  ['2026-10-17T21:05', 'masakan gue dia nambah 3x, gue pura2 ngomel "jangan nambah lagi" padahal dalem hati udah joget'],
  ['2026-10-18T02:45', 'dia diem seharian katanya banyak pikiran, gpp lah biasanya ntar cerita sendiri, gue tungguin aja kayak biasa'],
  ['2026-10-19T21:45', 'masak kebanyakan lagi, dia capek ga bisa mampir, yg kenyang soonie, makin gendut tuh anak gara2 bapaknya sibuk'],
  ['2026-10-19T23:25', 'udah gue catet buat tgl 25, mau ngomong langsung, yg bener, bukan "oh itu tau" lagi, deg2an anjir kayak anak smp'],
  ['2026-10-20T09:20', 'jam 8.31 juna udah ngelempar tiket ssl ke gue pake emot nangis, iya jun iya gue yg kerjain, kopi lo tetep gue tagih ya'],
  ['2026-10-20T13:20', 'jaketnya masih di sini dan dori tidur di situ, gue juga pengen sih tp gengsi ah, ntar aja pas orangnya ga ada (orangnya emang ga ada)'],
  ['2026-10-20T16:20', 'surya ngasih keju ke soonie trs ngaku sendiri, anak baik tp agak bego, kayak semua orang di tower ini termasuk gue'],
  ['2026-10-20T18:47', 'gemilang nanya gue ikut dinner sama kris ga, ikut apaan, diajak aja kagaa wkwk, gpp gpp'],
  ['2026-10-20T18:58', 'trs barusan dia bilang lembur, 22 menit abis ngajak gemilang makan, oh oke lembur 🙂 gue udah beli daging bulgogi btw'],
  ['2026-10-20T21:30', 'story ramen padahal katanya lembur, juna ngirim ss nya kayak lg nganterin kabar duka wkwk 💀 ga lucu sih sebenernya'],
  ['2026-10-20T22:35', 'bulgogi porsi dua yg makan satu orang sama satu kucing, enak kok, soonie bilang enak'],
  ['2026-10-20T23:45', 'gemilang minta maaf kayak dia yg salah padahal bukan lo lang bukan lo, lo cuma ditraktir, yg salah yg nraktir'],
  ['2026-10-21T08:45', '"semalem sorry ya lembur" iya lembur di warung ramen, produktif bgt ya, gue bales "iya." doang soalnya kalo gue ngetik panjang ntar ketauan'],
  ['2026-10-21T10:40', 'dapet undangan interview, kamis jam 5 sore, jam 7 nya dinner tower B, jago bgt emang gue ngatur jadwal hidup'],
  ['2026-10-21T11:10', 'soal s2 belum cerita siapa2 kecuali kak mina, rencananya mau bilang ke dia duluan pas tgl 25, eh orangnya lagi sibuk "lembur"'],
  ['2026-10-21T14:30', 'staging down 2x restart nyala lagi, enak ya jadi server, coba idup gue bisa direstart juga'],
  ['2026-10-21T19:48', 'nanya tgl 25 jawabnya liat nanti crunch time, bro jawab iya doang susah amat, gue nanya ultah gue sendiri loh ini'],
  ['2026-10-21T22:30', 'sadewa upload story bioskop "sama bang kris", wah meeting sampe malemnya seru ya kris, filmnya bagus ga'],
  ['2026-10-21T23:59', 'kata ilham kris nanya kalo sayang tp ngerasa ga disayang balik itu salah siapa, oh. oke. jadi itu ya. gue masakin lo tiap minggu loh kris, itu bahasa apa menurut lo'],
  ['2026-10-22T00:20', 'oke kino tgl 25, ngomong yg jelas, jangan kabur, jangan bercanda, tiga hari lagi'],
  ['2026-10-22T08:00', 'katanya minggu ini jarang di apart, kita satu gedung anjirr beda lantai doang, jauh banget ya ternyata'],
  ['2026-10-22T17:45', 'interview kelar, profesornya nanya gue handle insiden prod gimana, gue jawab lancar bgt padahal isi kepala gue lampu unit sebelah'],
  ['2026-10-22T18:20', 'abis interview pengen cerita ke orang trs sadar orang pertama yg pengen gue kabarin lagi "nginep kantor" haha. haha.'],
  ['2026-10-22T18:55', 'sadewa salkir di grup trs nge pc "kirain bang kino ikut", semua orang kirain gue ikut, gue juga kirain'],
  ['2026-10-22T19:55', 'dinner rame2 kursi sebelah kosong, surya pura2 ga liat sambil naro japchae di piring gue, makasih ya sur, beneran'],
  ['2026-10-22T20:35', 'nelpon 2x tp gue cancel sendiri sebelum nyambung, biar ga usah denger dia ga ngangkat, pinter kan gue'],
  ['2026-10-22T23:15', '"sendiri" katanya. oke. gue percaya. gue lagi belajar percaya'],
  ['2026-10-22T23:45', 'lampu unit sebelah gelap, bukan urusan gue (urusan gue) (banget)'],
  ['2026-10-23T09:05', 'chat dari jam 9 centang satu, yaudah mungkin hp nya mati, mungkin'],
  ['2026-10-23T12:35', 'jam 12 masih centang satu padahal ig nya aktif 2 menit lalu, oh hp nya nyala ternyata, ok ok'],
  ['2026-10-23T13:30', 'bagas bilang dia CUTI dari kemaren, trs nginep kantor tuh kantor yg mana kris, kantor di hati orang lain? wkwk ga lucu ya'],
  ['2026-10-23T15:15', 'telpon ke 3 ga diangkat, udah ah capek gue, (telpon ke 4 jam 4)'],
  ['2026-10-23T15:40', 'town hall 2 jam ngomongin roadmap 2027, roadmap minggu ini aja gue ga punya'],
  ['2026-10-23T21:15', 'nontonflix ngabarin iphone kris nonton di akun gue dari seongsu, makasih ya nontonflix lo doang yg jujur minggu ini'],
  ['2026-10-23T23:00', 'dibaca aja kaga, gue ngetik "kamu di mana" tiga kali trs gue hapus dua'],
  ['2026-10-23T23:55', 'bagas ngajak deeptalk jam 11 malem, BAGAS yg biasa balesnya cuma k, dunia udah kebalik wkwk, tp dia bener sih, nyebelin'],
  ['2026-10-24T02:10', 'juna bilang dia duduk di lobi dari jam 1, ga naik, gue juga ga turun, dua orang bego di satu gedung, dori tidur di jaketnya lagi'],
  ['2026-10-24T08:10', 'prod down, bagus deh, akhirnya ada yg bisa gue benerin'],
  ['2026-10-24T09:40', 'rollback jalan error turun trs naik lagi, kayak kenal polanya dari mana ya'],
  ['2026-10-24T12:55', 'prod sempet up 13 menit trs mati lagi, juna mau nangis di toilet, gue juga mau tp ga ada slot'],
  ['2026-10-24T13:55', 'hana ngirim foto, seongsu, pegangan tangan, namanya yuna, fotonya blur tp jelas bgt, lucu ya, gue malah liatin jaketnya, itu jaket yg biasa dia pake ke sini'],
  ['2026-10-24T14:07', 'baru juga dikirim, langsung ditelfonin kayak debt collector, hhhh, oke, angkat, kino lo bisa'],
  ['2026-10-24T14:40', 'gue ga teriak sama sekali, bangga dikit, dia bilang ngerasa ga disayang, gue bilang gue tau, padahal udah gue siapin buat tanggal 25, mau bilang langsung, bukan lewat chat, keduluan dia capek', { fight: true }],
  ['2026-10-24T15:15', 'dia ngechat mulu, gue baca semua, ga gue bales, gue lg rollback prod ya kris bukan nungguin lo (dua2nya)', { fight: true }],
  ['2026-10-24T15:30', 'tangan gue gemeter bukan gara2 dia gara2 kopi (bukan kopi) (gue belum minum kopi)', { fight: true }],
  ['2026-10-24T16:10', 'dia nunggu di lobi kantor, satpam nanya "itu temennya mas kino?" gue bilang ga kenal, abis itu gue ke toilet 5 menit, ngapain? ya ngapain lagi', { fight: true }],
  ['2026-10-24T16:46', 'KETEMU, lock lama sisa failover tadi pagi, pengen teriak tp di war room ada direksi jadi gue cuma bilang "ketemu." doang', { fight: true }],
  ['2026-10-24T17:22', 'udah gue bilang nanti, sekarang gue cuma mau prod up, itu doang, satu hal yg bisa gue benerin hari ini', { fight: true }],
  ['2026-10-24T17:29', 'prod up error 0%, tangan gue gemeter, mau bikin kopi dulu trs tidur 3 hari', { fight: true }],
  ['2026-10-24T17:30', 'kok pusing ya', { fight: true }],
  ['2026-10-24T20:40', 'bangun2 di klinik trs juna nangisnya lebih kenceng dari pasiennya wkwk, ilham bilang dia ga nangis padahal matanya merah, makasih ya kalian', { fight: true }],
  ['2026-10-24T21:20', 'bagas naro bubur depan pintu trs ilang kayak kurir, surya naro brownies sama teh jahe, mama udah beli tiket kereta, gue cuma pingsan doang kok rame bgt, ...seneng sih', { fight: true }],
  ['2026-10-24T22:35', 'kak mina ngirim email judulnya "jangan buka email kantor", ya gimana gue tau isinya kalo ga dibuka kak', { fight: true }],
  ['2026-10-24T22:40', 'prod down 9 jam setengah akhirnya up, gantian gue yg down, impas lah ya', { fight: true }],
  ['2026-10-24T23:45', 'dia nulis surat, kodenya hari jadi kita, jahat bgt pake itu, gue baca tiga kali, mata gue keringetan', { fight: true }],
  ['2026-10-25T00:30', 'nambah tua, catetan tgl 25 nya masih ada, poin 2 nya belum gue coret'],
  ['2026-10-25T09:05', 'offer nya masuk, keterima, di hari ulang tahun gue, dan orang pertama yg pengen gue kasih tau masih orang yg sama, nyebelin'],
  ['2026-10-25T13:00', 'anak2 tower B ngasih kue tiga, katanya satu buat gue dua buat soonie doongie dori, ga ada yg sayang gue di sini (ada, banyak)'],
  ['2026-10-28T21:00', 'dia bawa masakan keasinan parah tp gue abisin, jgn bilang dia, trs gue bilang "enak", trs gue bilang satu kata lagi yg dari dulu ga pernah gue bilang', { epi: 'maafin' }],
  ['2026-10-29T23:00', 'reuni sendirian, anak2 pada nanya kris mana, gue bilang lagi istirahat, ga bohong kan, istirahat dari gue', { epi: 'jeda' }],
  ['2026-10-26T01:30', 'kuenya ga gue makan tp lilinnya gue simpen, bego emang, 8 taun gue ga pernah nyimpen apa2 ternyata gue nyimpen semuanya', { epi: 'turun' }],
  ['2026-10-26T03:00', 'tidur nyenyak, aneh, sedih tp nyenyak', { epi: 'waktu' }],
  ['2026-10-26T11:00', 'paketnya gue buka, tiga kalung nama, soonie doongie dori, dori ga mau dilepas, ya sama gue juga', { epi: 'maafin' }],
  ['2026-10-26T12:30', 'kalungnya gue pakein ke anak2, orangnya belum, nanti, kalo kepala gue udah ga penuh', { epi: 'jeda' }],
  ['2026-10-26T10:00', 'paketnya gue buka di lobi trs nangis kayak orang bego, satpam nawarin teh, gue terima', { epi: 'turun' }],
  ['2026-10-27T22:00', 'kalungnya gue simpen di laci, bagus, nyebelin, kenapa sih lo pesen dari agustus', { epi: 'waktu' }],
];
ALT.forEach(([ts, text, o], i) => X_POSTS.push(['a' + i, 'alt', ts, text, '', [], 0, o || {}]));
// akun yg suka Kino kepoin dari akun alt (muncul di tab Cari setelah jamnya)
const X_STALK = [['kris', '2026-01-01T00:00'], ['gemilang', '2026-10-20T18:30'], ['sadewa', '2026-10-21T22:20'], ['yuna', '2026-10-24T13:52']];

// ===== feed IG tambahan: kerjaan, jalan2, hobi masing2 (muncul sesuai tanggal) =====
INSTA.push(
  { user: 'kris.chandra', img: 'img/feed/jeju-0.jpg', ts: '2026-09-06T18:00', cap: 'jeju. dia ngomel kepanasan sepanjang jalan. aku ga pernah sebahagia ini', likes: '512' },
  { user: 'kinoo.lee', img: 'img/feed/jeju-5.jpg', ts: '2026-09-06T19:30', cap: 'panas.', likes: '298' },
  { user: 'junahann', img: 'img/feed/busan-0.jpg', ts: '2026-09-28T16:00', cap: 'healing ke busannn tp kepikiran bug terus. healing gagal 😭😭', likes: '187' },
  { user: 'kinoo.lee', img: 'img/ig/cats-1.jpg', ts: '2026-10-05T11:00', cap: 'tiga anak. ga ada yg nurut.', likes: '402' },
  { user: 'junahann', img: 'img/feed/desk-0.jpg', ts: '2026-10-08T22:00', cap: 'setup baruuu. produktivitas naik 0% estetik naik 300% wkwkwk ✨', likes: '164' },
  { user: 'sadewaa.k', img: 'img/feed/books-3.jpg', ts: '2026-10-10T21:00', cap: 'buku bagus. ga gue rekomen ke siapa2. cari sendiri', likes: '96' },
  { user: 'bagasbinn', img: 'img/feed/hike-0.jpg', ts: '2026-10-11T09:30', cap: 'bukhansan. kepala kosong', likes: '88' },
  { user: 'suryalix', img: 'img/feed/cafe-1.jpg', ts: '2026-10-11T14:00', cap: 'solo cafe hopping, it\'s fine I\'m my own best friend hehe ☕🌼', likes: '355' },
  { user: 'gemilangrp', img: 'img/feed/gallery-3.jpg', ts: '2026-10-12T17:00', cap: 'nangis di depan instalasi. normal kok gue seniman wkwk 🎨😭', likes: '241' },
  { user: 'kris.chandra', img: 'img/feed/launch-5.jpg', ts: '2026-10-13T21:00', cap: 'launch day 🚀 bangga sama tim. makasih semua yg begadang', likes: '430' },
  { user: 'ilham.jeong', img: 'img/feed/desk-2.jpg', ts: '2026-10-13T19:00', cap: 'hari ke-30 magang. masih hidup. bukan berarti gampang', likes: '77' },
  { user: 'sadewaa.k', img: 'img/feed/books-2.jpg', ts: '2026-10-17T23:00', cap: 'malem', likes: '81' },
  { user: 'kinoo.lee', img: 'img/jjigae.jpg', ts: '2026-10-17T21:30', cap: 'ada yg nambah 3x.', likes: '366' },
  { user: 'suryalix', img: 'img/feed/bake-0.jpg', ts: '2026-10-18T16:00', cap: 'first batch!! 🍫 secret recipe (the secret is love hehe) 🫶', likes: '390' },
  { user: 'gemilangrp', img: 'img/feed/gallery-5.jpg', ts: '2026-10-19T18:00', cap: 'karya gue dipajang!!! JANGAN NANGIS GEMILANG (nangis) 😭🖼️', likes: '512' },
  { user: 'bagasbinn', img: 'img/feed/gym-0.jpg', ts: '2026-10-19T20:00', cap: 'leg day', likes: '70' },
  { user: 'bagasbinn', img: 'img/feed/hike-4.jpg', ts: '2026-10-23T18:30', cap: 'jalan sore. kepala enteng', likes: '64' },
  { user: 'junahann', img: 'img/feed/desk-3.jpg', ts: '2026-10-24T23:10', cap: 'hari terberat dalam karir gue. maaf bang 😭🙏 besok gue jadi orang yg lebih baik (janji ke-47)', likes: '210' },
);

// ===== telpon random pas lagi scrolling (sekali per orang, sesuai jam) =====
// hours: [jam mulai, jam selesai) · from/to: rentang tanggal cerita
Object.assign(PEOPLE, { Kurir: { emoji: '📦', bg: '#ff6b2c' }, Spam: { emoji: '📵', bg: '#8e8e93' } });
const RANDOM_CALLS = [
  { id: 'mama1', who: 'Mama', hours: [8, 22], lines: [['t', 'nak? mama mau nanya'], ['t', 'tutup panci presto yg kamu bawa minggu lalu di mana ya'], ['k', 'di laci bawah ma'], ['t', 'oh iyaa. yaudah. udah makan?'], ['k', 'udah ma'], ['t', 'boong. makan lagi sana']] },
  { id: 'mina1', who: 'Mina', hours: [9, 18], lines: [['t', 'kino sorry ganggu'], ['t', 'akses VPN gue kekunci lagi'], ['k', 'reset aja kak, gue kirim link nya'], ['t', 'okee makasih ya, lo penyelamat'], ['k', 'iya kak']] },
  { id: 'juna1', who: 'Juna', hours: [19, 24], lines: [['t', 'BANG. BANG. DARURAT 😭'], ['k', 'apa'], ['t', 'rice cooker gue bunyi terus ga mau berenti'], ['k', 'cabut'], ['t', 'CABUT APAAN BANG'], ['k', 'colokannya juna'], ['t', '...oh. OH. makasih bang 🙏😭']] },
  { id: 'surya1', who: 'Surya', hours: [12, 21], lines: [['t', 'bang kinooo 🥰'], ['t', 'do you want nuts in your brownies?'], ['k', 'ga'], ['t', 'okayy no nuts, no raisins, no sins hehe 🫶'], ['k', 'tutup.']] },
  { id: 'bagas1', who: 'Bagas', hours: [18, 24], lines: [['t', 'kino'], ['t', 'obeng lo gue balikin besok ya, masih kepake'], ['k', 'oke. jangan ilang'], ['t', 'iya elah. udah ya']] },
  { id: 'ilham1', who: 'Ilham', hours: [10, 18], lines: [['t', 'bang. bukan gue panik ya. cuma nanya'], ['t', 'kalo tombol merah di server room dipencet kenapa'], ['k', 'JANGAN'], ['t', '...oke. ga jadi'], ['t', 'bukan gue mau mencet tadi']] },
  { id: 'gemilang1', who: 'Gemilang', hours: [15, 23], lines: [['t', 'bangg~'], ['t', 'gue lg ngelukis langit sore, warnanya kayak perasaan gue hari ini 🥺'], ['k', 'terus'], ['t', 'ya gue cuma mau share aja'], ['k', 'bagus. tutup'], ['t', 'jahat tp makasih udah dengerin 💐']] },
  { id: 'hana1', who: 'Hana', hours: [11, 22], lines: [['t', 'kino!! reuni nanti dresscode nya mau warna apa?'], ['k', 'item'], ['t', 'lo tuh tiap acara item wkwk'], ['k', 'iya'], ['t', 'oke item deh demi lo']] },
  { id: 'kurir1', who: 'Kurir', hours: [9, 19], lines: [['t', 'halo mas, saya kurir Kupang'], ['t', 'paketnya saya titip di satpam lobi ya'], ['k', 'iya pak makasih']] },
  { id: 'sadewa1', who: 'Sadewa', hours: [17, 24], lines: [['t', 'bang. charger laptop lo tipe apa'], ['k', 'kenapa'], ['t', 'nanya doang. bukan mau minjem'], ['t', '...'], ['t', 'mau minjem']] },
  { id: 'spam1', who: 'Spam', hours: [9, 21], lines: [['t', 'halo selamat siang, kami dari asuransi Bahagia Selalu—'], ['k', 'ga'], ['t', 'tapi bapak belum dengar penawar—']] },
];

// abis telpon iseng: kalau Kino buka chat orangnya (< 2 jam), ketikannya nyambung ke obrolan tadi
// ans = kalau diangkat, miss = kalau ga diangkat / ditolak
const CALL_FOLLOW = {
  mama1: { chat: 'mama', ans: ['pancinya ketemu ma?', ['ketemu nak. di laci bawah, kamu emang pinter', 'udah makan lagi belum?']], miss: ['td mama nelfon?', ['iya nak, nanyain tutup panci', 'udah ketemu kok hehe']] },
  mina1: { chat: 'mina', ans: ['kak vpn nya udah bisa?', ['udah! thank you kino 🙏']], miss: ['kak td nelfon?', ['iya, vpn gue kekunci', 'udah dibantu juna kok. tumben dia bisa']] },
  juna1: { chat: 'juna', ans: ['nasi lo mateng?', ['MATENG BANG 🍚', 'keras dikit tp gue makan dengan bangga']], miss: ['knp nelfon', ['rice cooker gue bunyi terus bang 😭', 'udah gue cabut. bener kan??']] },
  surya1: { chat: 'surya', ans: ['brownies nya jadi kapan', ['tonight!! no nuts no raisins as requested 🫡']], miss: ['td nelfon?', ['yes!! mau nanya brownies nya pake kacang ga', 'no ya? noted 🫡']] },
  bagas1: { chat: 'bagas', ans: ['obeng jgn lupa', ['iya bawel. besok pagi']], miss: ['knp', ['obeng. besok gue balikin']] },
  ilham1: { chat: 'ilham', ans: ['lo ga mencet kan', ['ngga.', 'hampir.']], miss: ['knp nelfon', ['ga jadi. udah beres', 'bukan gue ngapa2in ya']] },
  gemilang1: { chat: 'gemilang', ans: ['kirim lukisannya', ['🥹🥹 OTW', 'lo emang diem2 peduli']], miss: ['knp', ['mau share langit sore bang 🥺', 'udah keburu gelap. hidup ini fana 🌙']] },
  hana1: { chat: 'hana', ans: ['jadi item ya', ['iya iya item wkwk', 'lo tuh ya']], miss: ['han td nelfon?', ['iya mau nanya dresscode reuni', 'item kan? udah ketebak wkwk']] },
  sadewa1: { chat: 'sadewa', ans: ['charger nya ambil aja di unit gue', ['oke', 'bukan gue butuh banget ya']], miss: ['knp nelfon', ['charger laptop lo tipe apa', '...mau minjem']] },
};
const RANDOM_CALL_WINDOW = ['2026-10-20T00:00', '2026-10-24T13:45'];  // abis itu cerita lagi berat, ga ada telpon iseng

// ===== chat random yg masuk pas lagi scrolling (bukan dari Kris) =====
// msgs: [[pengirim ('them' atau nama di grup), teks]], reply: [ketikan Kino, [balasan]] (opsional)
const RANDOM_CHATS = [
  { id: 'rc-juna', chat: 'juna', hours: [19, 24], msgs: [['them', 'bang'], ['them', 'lo punya mie instan ga 😭 gue kelaperan bgtt']], reply: ['ada. ambil sendiri', ['OTW BANG 🏃💨', 'lo emang malaikat berwujud manusia galak']] },
  { id: 'rc-surya', chat: 'surya', hours: [11, 20], msgs: [['them', 'bang kinooo 🥰'], ['them', 'I saw soonie di jendela and she waved at me 🥹']], reply: ['dia ga dadah. dia ngusir', ['still cute tho 🥹🫶']] },
  { id: 'rc-gemilang', chat: 'gemilang', hours: [16, 23], msgs: [['them', 'bang liat langit sekarang'], ['them', 'warnanya kayak lukisan monet 😭🎨']], reply: ['udah liat. biasa aja', ['hati lo terbuat dari apa bang 😩']] },
  { id: 'rc-bagas', chat: 'bagas', hours: [18, 24], msgs: [['them', 'kino'], ['them', 'lakban ada ga? kardus gue jebol']], reply: ['ada. ambil sendiri', ['oke gue ke atas. pintu jangan dikunci']] },
  { id: 'rc-ilham', chat: 'ilham', hours: [9, 18], msgs: [['them', 'bang'], ['them', 'tiket JIRA-2291 punya siapa ya'], ['them', 'bukan gue mau ngerjain. nanya doang']], reply: ['punya lo', ['...oke 🙄', 'yaudah gue kerjain. bukan karena lo nyuruh']] },
  { id: 'rc-sadewa', chat: 'sadewa', hours: [17, 24], msgs: [['them', 'bang. liat kacamata gue ga'], ['them', 'bukan gue ceroboh ya. lupa naro doang']], reply: ['di kepala lo', ['...', 'diem bang. jangan bilang siapa2']] },
  { id: 'rc-mama', chat: 'mama', hours: [8, 21], msgs: [['them', 'nak mama baru belajar kirim stiker'], ['them', '🌷🌷🌷🌷']], reply: ['bagus ma', ['🌷🌷 hehe']] },
  { id: 'rc-mina', chat: 'mina', hours: [9, 17], msgs: [['them', 'kino, meeting jam 3 diundur ke jam 4 ya']], reply: ['oke kak', ['👍']] },
  { id: 'rc-grup', chat: 'grup', hours: [10, 23], msgs: [['Juna', 'siapa yg naro kardus gede di lobi?? isinya bunyi 😨'], ['Surya', 'mine!! it\'s a toy for soonie 🥹'], ['Bagas', 'mainan kucing bunyi?']], reply: ['surya.', [['Surya', 'hehe sorry bangg 🙏']]] },
  { id: 'rc-kru', chat: 'kru', hours: [10, 18], msgs: [['Juna', 'guys mesin kopi pantry rusak 😭 hidup gue berakhir'], ['Ilham', 'lebay']], reply: ['beli di bawah', [['Juna', 'BANG TRAKTIR?? 🥺'], ['Ilham', 'ngelunjak']]] },
  { id: 'rc-hana', chat: 'hana', hours: [11, 22], msgs: [['them', 'kino liat dehh'], ['them', 'kucing di cafe deket kampus mirip doongie 😭']], reply: ['doongie lebih gendut', ['wkwkwk iya sih']] },
  { id: 'rc-makan', chat: 'makan', hours: [20, 24], msgs: [['them', '🍜 Lapar malam? Ramen + telur cuma ₩3.900 sampai jam 12!']] },
  { id: 'rc-olive', chat: 'olive', hours: [10, 20], msgs: [['them', '✨ Flash sale 2 jam! Lip balm favoritmu diskon 50%']] },
];

// ===== Mail: kerjaan, promo, membership, + lamaran S2 diam-diam =====
// from: nama pengirim ('Kris' = kontak kris), av: [huruf/emoji, warna], tag: label kecil
const MAIL_ME = 'kino.lumen@gmeil.com';
const UNI = { name: 'Oxford Graduate Admissions', av: ['O', '#1d3c6e'], addr: 'noreply@admissions.oxford' };
const MAILS = [
  { ts: '2026-09-20T10:20', from: 'Kris', addr: 'kris.bang@gmeil.com', subj: 'tiket 🎫', body: 'nih tiketnya.\njangan ilang. jangan dijual juga walaupun lagi kesel sama aku.\n\nGate 3, Section B, Row 7.\naku yg beli popcorn.\n\n- k' },
  { ts: '2026-09-26T23:48', ...UNI, subj: 'Application submitted – MSc in Software Engineering (2027 entry)', body: 'Dear Kino,\n\nThank you for submitting your application for the MSc in Software Engineering (part-time, 2027 entry).\n\nApplication ID: 2627-SE-04418\n\nYour application will be considered once all supporting documents, including two references, have been received. You can track its progress in the applicant portal.\n\nKind regards,\nGraduate Admissions' },
  { ts: '2026-09-27T00:02', from: 'Kupang', av: ['🚀', '#2a72ff'], addr: 'noreply@kupang.co.kr', subj: 'Pesanan kamu sudah dikirim 📦', body: 'Halo Kino!\n\nPesanan #KP-88213 (Pasir kucing tofu 7L x3, Snack Churu tuna x2) sudah dalam perjalanan.\nEstimasi tiba: besok pagi sebelum jam 7.\n\nRoket Kupang 🚀' },
  { ts: '2026-10-05T19:30', from: 'FitHouse', av: ['💪', '#111'], addr: 'member@fithouse.kr', subj: 'Kino, udah 23 hari kamu ga check-in 👀', body: 'Halo Kino,\n\nKami kangen! Terakhir check-in: 12 September.\nMembership kamu aktif sampai 31 Oktober 2026.\n\nPerpanjang sekarang, hemat 20% + gratis 1 sesi PT.\n\n(kalau kamu udah olahraga di rumah sambil gendong kucing, itu juga dihitung kok, dalam hati kami)' },
  { ts: '2026-10-08T14:02', ...UNI, subj: 'Reference received', body: 'Dear Kino,\n\nWe are writing to let you know that your referee, Ms Mina Seo (Lumen Corp), has submitted her reference.\n\nBoth of your references have now been received and your application is complete. It has been forwarded to the department for review.\n\nKind regards,\nGraduate Admissions' },
  { ts: '2026-10-12T09:00', from: 'BankKu', av: ['🏦', '#0a7d4f'], addr: 'estatement@bankku.co.kr', subj: 'E-Statement Oktober 2026', body: 'Yth. Kino,\n\nE-Statement rekening tabungan Anda periode September 2026 telah tersedia.\nPassword file: tanggal lahir Anda (DDMMYYYY).\n\nBankKu tidak pernah meminta PIN atau OTP melalui email.' },
  { ts: '2026-10-19T21:00', from: 'OliveJung', av: ['🌿', '#9bc31c'], addr: 'hello@olivejung.kr', subj: 'Selamat, kamu naik ke GOLD 💛', body: 'Halo Kino!\n\nBelanja kamu bulan ini bikin kamu naik level ke OliveJung GOLD 💛\n\nBenefit kamu:\n• Diskon 10% semua produk\n• Gratis ongkir tanpa minimum\n• Kupon ulang tahun 🎂 (aktif tanggal 25)\n\nproduk terbanyak dibeli: lip balm (6x). kamu ga apa2? 🙂' },
  { ts: '2026-10-20T08:31', from: 'Jira', av: ['◆', '#0c66e4'], addr: 'jira@lumen.atlassian.net', subj: '[INFRA-3312] assigned to you: Renew SSL cert – staging', tag: 'Kerja', body: 'Juna Pratama assigned INFRA-3312 to you.\n\nRenew SSL cert – staging\nPriority: Medium\nDue: 22 Oct 2026\n\nComment from Juna Pratama:\n"bang tolong ya aku takut salah 🥺 nanti aku traktir kopi"' },
  { ts: '2026-10-20T09:12', from: 'Lumen Ops', av: ['L', '#5b4bd6'], addr: 'oncall@lumen.co.kr', subj: 'Tukar jadwal on-call 25 Okt – Disetujui', tag: 'Kerja', body: 'Halo Kino,\n\nPermintaan tukar jadwal on-call kamu sudah disetujui.\n\nMinggu, 25 Oktober 2026\nPrimary: Juna Pratama (menggantikan kamu)\nSecondary: Ilham Januar\nDisetujui oleh: Mina Seo\n\nJadwal on-call kamu minggu ini tetap: Sabtu, 24 Oktober (primary).\n\nSelamat ulang tahun duluan! 🎂' },
  { ts: '2026-10-20T18:05', from: 'MakanYuk', av: ['🍜', '#ff8a00'], addr: 'promo@makanyuk.kr', subj: 'Makan berdua lebih hemat 💑 diskon 30%', body: 'Pesan 2 menu, diskon 30% buat kamu dan si dia!\nBerlaku sampai Minggu.\n\nKode: BERDUAYUK' },
  { ts: '2026-10-21T10:31', ...UNI, subj: 'Interview invitation – MSc in Software Engineering', body: 'Dear Kino,\n\nFollowing a review of your application, the department would like to invite you to an online interview.\n\nDate: Thursday 22 October 2026\nTime: 17:00 KST (09:00 BST)\nDuration: approx. 30 minutes\nPanel: Prof. Helen Ashby, Dr. Tom Okafor\n\nThe interview will include a short technical discussion based on your statement of purpose (distributed systems reliability). Please confirm your availability by replying to this email.\n\nKind regards,\nGraduate Admissions' },
  { ts: '2026-10-21T11:06', ...UNI, subj: 'Re: Interview invitation – confirmed', body: 'Dear Kino,\n\nThank you for confirming. A Teams link will be sent 24 hours before your interview.\n\nGood luck!\n\nGraduate Admissions\n\n> On 21 Oct 2026, at 10:58, Kino wrote:\n> Confirmed. Thank you.' },
  { ts: '2026-10-21T21:40', from: 'Nontonflix', av: ['N', '#e50914'], addr: 'info@nontonflix.com', subj: 'Lanjutin nonton? 🍿', body: 'Kino, kamu berhenti di episode 7 "Server Room" S2.\nTinggal 3 episode lagi!\n\nRekomendasi buat kamu: "Kucing yang Tahu Segalanya"' },
  { ts: '2026-10-22T09:00', from: 'Lumen Internal', av: ['L', '#5b4bd6'], addr: 'allhands@lumen.co.kr', subj: '[All-hands] Q4 Town Hall – Jumat 15:00', tag: 'Kerja', body: 'Hai semua,\n\nQ4 Town Hall diadakan Jumat, 23 Oktober, 15:00 di Auditorium lt. 2 (dan live stream).\n\nAgenda: roadmap 2027, update reorganisasi, Q&A.\nCamilan disediakan. Kalau camilannya habis, itu tim IT.' },
  { ts: '2026-10-21T17:00', ...UNI, subj: 'Your interview tomorrow – Teams link', body: 'Dear Kino,\n\nYour interview starts tomorrow, Thursday 22 October, at 17:00 KST.\n\nJoin Microsoft Teams meeting\nMeeting ID: 482 119 307 553\n\nPlease join 5 minutes early and make sure your camera and microphone are working.\n\nGraduate Admissions' },
  { ts: '2026-10-22T18:14', ...UNI, subj: 'Thank you for attending your interview', body: 'Dear Kino,\n\nThank you for taking the time to speak with the panel today. They enjoyed the conversation, particularly your account of handling production incidents.\n\nWe aim to communicate a decision within 3–5 working days.\n\nKind regards,\nGraduate Admissions' },
  { ts: '2026-10-23T10:15', from: 'Lumen IT Security', av: ['🛡️', '#333'], addr: 'security@lumen.co.kr', subj: 'Hasil simulasi phishing Oktober', tag: 'Kerja', body: 'Halo Kino,\n\nKamu TIDAK mengklik link simulasi phishing bulan ini. Mantap 👏\n\nCatatan: 3 orang dari tim kamu mengklik. Salah satunya mengklik dua kali.\n(kami tidak akan menyebut nama. inisialnya J.)' },
  { ts: '2026-10-23T19:30', from: 'PaketExpress', av: ['📦', '#ffb000'], addr: 'noreply@paketexpress.kr', subj: 'Paket kamu tertahan di lobi tower B', body: 'Paket untuk Kino (Unit B-4419) sudah tiba di lobi.\nSilakan ambil di meja pengelola sebelum 22:00.\n\nPengirim: [disembunyikan pengirim]\nIsi: barang pribadi' },
  { ts: '2026-10-24T08:02', from: 'PagerDudy', av: ['!', '#ff3b30'], addr: 'alerts@lumen.pagerdudy.com', subj: '[CRITICAL] auth-api prod – 5xx rate 97%', tag: 'Kerja', body: 'TRIGGERED – auth-api (production)\n\n5xx error rate: 97.4% (threshold 5%)\nLogin success: 0.3%\nStarted: 2026-10-24 07:58 KST\n\nOn-call: Kino\nAcknowledge → Resolve → Escalate' },
  { ts: '2026-10-24T08:20', from: 'PagerDudy', av: ['!', '#ff3b30'], addr: 'alerts@lumen.pagerdudy.com', subj: '[ESCALATED] auth-api prod – directors notified', tag: 'Kerja', body: 'Incident #8841 has been escalated.\n\nNotified: Mina Seo, VP Engineering, CTO\nStatus page: Major outage\n\nTimeline:\n08:04 acknowledged by Kino\n08:19 db-replica-2 timeout identified' },
  { ts: '2026-10-24T11:45', from: 'Jira', av: ['◆', '#0c66e4'], addr: 'jira@lumen.atlassian.net', subj: '[INC-8841] Ilham commented: rollback stuck', tag: 'Kerja', body: 'Ilham commented on INC-8841:\n\n"rollback stuck di migration 0042. bukan gue yg salah. kayaknya."' },
  { ts: '2026-10-24T17:31', from: 'PagerDudy', av: ['✓', '#34c759'], addr: 'alerts@lumen.pagerdudy.com', subj: '[RESOLVED] auth-api prod', tag: 'Kerja', body: 'RESOLVED – auth-api (production)\n\nResolved by: Kino\nDuration: 9h 33m\nRoot cause: replica lag after failover; stale migration lock.\n\nPostmortem due: 28 Oct 2026' },
  { ts: '2026-10-24T22:30', from: 'Mina Seo', av: ['img/av-mina.jpg'], addr: 'mina.seo@lumen.co.kr', subj: 'jangan buka email kantor', tag: 'Kerja', body: 'kino,\n\nkalau lo baca ini berarti lo buka email kantor. tutup.\n\npostmortem gue yg tulis. besok lo libur, on-call juna yg pegang. HP ditaruh.\n\np.s. soal yang satu lagi (lo tau maksudku), gue udah nulis referensi yang bagus. tinggal lo yang mutusin mau apa.\n\n- mina' },
  { ts: '2026-10-25T00:00', from: 'OliveJung', av: ['🌿', '#9bc31c'], addr: 'hello@olivejung.kr', subj: 'Selamat ulang tahun, Kino 🎂', body: 'Kupon ulang tahun kamu sudah aktif!\n\n🎁 Diskon 25% + lip balm gratis\nBerlaku 25 Okt – 1 Nov\n\nSemoga tahun ini lebih banyak hal manis 💛' },
  { ts: '2026-10-25T00:01', from: 'FitHouse', av: ['💪', '#111'], addr: 'member@fithouse.kr', subj: 'Happy birthday! 1 sesi PT gratis 🎉', body: 'Selamat ulang tahun, Kino!\nHadiah dari kami: 1 sesi PT gratis.\n\nMembership kamu berakhir 31 Okt. Jangan sampai hilang, ya.' },
  { ts: '2026-10-25T09:00', ...UNI, subj: 'Offer of admission – MSc in Software Engineering', body: 'Dear Kino,\n\nI am delighted to inform you that the department has recommended you for admission to the MSc in Software Engineering (part-time), starting January 2027.\n\nThe programme is delivered through intensive teaching weeks in Oxford, around 4 times a year, with project work completed remotely.\n\nThis offer is conditional on the satisfaction of the conditions listed in your applicant portal.\n\nPlease respond to this offer by 20 November 2026.\n\nCongratulations, and happy birthday — your file says it\'s today.\n\nYours sincerely,\nGraduate Admissions' },
  { ts: '2026-10-30T09:00', ...UNI, subj: 'Reminder: please respond to your offer', body: 'Dear Kino,\n\nThis is a friendly reminder that we have not yet received your response to your offer of admission.\n\nDeadline: 20 November 2026.\n\nKind regards,\nGraduate Admissions' },
];

// pas Kino pingsan: PC yg baru kebaca pas dia bangun
more('juna', [
  ['date', '2026-10-24'],
  ['them', 'BANG', '17.43'], ['them', 'BANG BANGUN 😭😭', '17.43'], ['them', 'gue tau lo ga bisa baca ini tapi BANGUN', '17.52'],
  ['them', 'bang maaf soal deploy gue 😭 semua ini gara2 gue', '18.30'], ['them', 'kalo lo bangun lo boleh marahin gue seumur hidup. janji gue ga bakal nangis (bakal)', '18.31'],
]);
more('ilham', [
  ['date', '2026-10-24'],
  ['them', 'bang.', '17.45'], ['them', 'bangun.', '17.45'], ['them', 'ini bukan permintaan. ini perintah intern', '17.46'],
  ['them', 'gue ga nangis. juna yg nangis', '18.20'], ['them', '...gue dikit', '18.20'],
]);

// ===== tambahan: story, post, tweet biar rame =====
STORIES.push(
  { user: 'junahann', img: 'img/ig/juna-3.jpg', ts: '2026-10-20T08:50', txt: 'senin rasa kamis 😭' },
  { user: 'gemilangrp', img: 'img/ig/gemilang-1.jpg', ts: '2026-10-20T14:00', txt: 'sketsa hari ini. judulnya "jangan ditanya" 🎨' },
  { user: 'suryalix', img: 'img/feed/bake-0.jpg', ts: '2026-10-20T16:30', txt: 'test batch 🍫 who wants?' },
  { user: 'sadewaa.k', img: 'img/feed/books-2.jpg', ts: '2026-10-20T23:30', txt: 'bab 7. ga bisa tidur' },
  { user: 'kinoo.lee', img: 'img/ig/cats-2.jpg', ts: '2026-10-20T07:30', txt: 'dibangunin jam 5. ga digaji.' },
  { user: 'bagasbinn', img: 'img/ig/bagas-1.jpg', ts: '2026-10-21T07:00', txt: '5k' },
  { user: 'ilham.jeong', img: 'img/feed/desk-2.jpg', ts: '2026-10-21T10:20', txt: 'server staging mati lagi. bukan gue 🙄' },
  { user: 'junahann', img: 'img/ig/juna-4.jpg', ts: '2026-10-21T12:40', txt: 'makan siang = kopi ke-3 ☕☕☕' },
  { user: 'gemilangrp', img: 'img/ig/gemilang-2.jpg', ts: '2026-10-21T18:10', txt: 'golden hour ga pernah gagal 🌇✨' },
  { user: 'suryalix', img: 'img/ig/surya-2.jpg', ts: '2026-10-22T11:00', txt: 'grocery run for tonight!! japchae incoming 🥢' },
  { user: 'junahann', img: 'img/ig/juna-5.jpg', ts: '2026-10-22T19:20', txt: 'DINNER TOWER B 🍖🍖 (bang kino makan dikit bgt hari ini)' },
  { user: 'gemilangrp', img: 'img/ig/gemilang-4.jpg', ts: '2026-10-22T19:40', txt: 'meja penuh, satu kursi kosong 💐' },
  { user: 'ilham.jeong', img: 'img/ig/ilham-2.jpg', ts: '2026-10-22T21:30', txt: 'kenyang. ga minta dipuji' },
  { user: 'kinoo.lee', img: 'img/ig/cats-4.jpg', ts: '2026-10-22T23:50', txt: '.' },
  { user: 'bagasbinn', img: 'img/feed/gym-0.jpg', ts: '2026-10-23T07:10', txt: 'push day' },
  { user: 'suryalix', img: 'img/ig/surya-3.jpg', ts: '2026-10-23T13:00', txt: 'lunch break, sun is out ☀️ have a good day everyone 🫶' },
  { user: 'sadewaa.k', img: 'img/ig/sadewa-2.jpg', ts: '2026-10-23T16:20', txt: 'rapat divisi 2 jam. ngantuk' },
  { user: 'junahann', img: 'img/ig/juna-6.jpg', ts: '2026-10-23T15:30', txt: 'camilan town hall abis dalam 4 menit. bukan gue (gue) 🍪' },
  { user: 'gemilangrp', img: 'img/ig/gemilang-5.jpg', ts: '2026-10-23T22:00', txt: 'lagi pengen ngelukis biru terus' },
  { user: 'ilham.jeong', img: 'img/ig/ilham-3.jpg', ts: '2026-10-24T09:40', txt: 'war room. doain 🙏' },
  { user: 'junahann', img: 'img/feed/desk-3.jpg', ts: '2026-10-24T12:55', txt: '😭😭😭' },
  { user: 'bagasbinn', img: 'img/ig/bagas-2.jpg', ts: '2026-10-24T22:00', txt: 'bubur. delivered.' },
  { user: 'gemilangrp', img: 'img/ig/gemilang-6.jpg', ts: '2026-10-25T00:02', txt: 'HBD bang kino 🐰💐 orang paling galak & paling baik' },
  { user: 'junahann', img: 'img/ig/juna-2.jpg', ts: '2026-10-25T00:03', txt: 'HBD BANG KINO 🎂😭 maaf soal prod. sayang lo' },
  { user: 'ilham.jeong', img: 'img/ig/ilham-4.jpg', ts: '2026-10-25T00:10', txt: 'hbd bang. 🦊' },
  { user: 'sadewaa.k', img: 'img/ig/sadewa-3.jpg', ts: '2026-10-25T08:00', txt: 'hbd. udah.' },
);
INSTA.push(
  { user: 'kinoo.lee', img: 'img/ig/cats-5.jpg', ts: '2026-09-12T20:00', cap: 'dori nyolong kaos kaki lagi. gue ga marah. gue kecewa', likes: '377' },
  { user: 'suryalix', img: 'img/ig/surya-4.jpg', ts: '2026-09-15T12:00', cap: 'missing my uni days in melbourne a bit 🥲 but seoul has my people 🫶', likes: '421' },
  { user: 'gemilangrp', img: 'img/ig/gemilang-7.jpg', ts: '2026-09-20T15:00', cap: 'cat minyak di baju lagi. baju ke-14 yg jadi korban 🎨😩', likes: '298' },
  { user: 'sadewaa.k', img: 'img/ig/sadewa-4.jpg', ts: '2026-09-22T19:00', cap: 'jalan', likes: '102' },
  { user: 'ilham.jeong', img: 'img/ig/ilham-5.jpg', ts: '2026-09-25T18:00', cap: 'first payslip. beli sepatu. ga nyesel', likes: '133' },
  { user: 'bagasbinn', img: 'img/ig/bagas-3.jpg', ts: '2026-09-29T07:30', cap: 'pagi', likes: '79' },
  { user: 'kris.chandra', img: 'img/ig/minchan-3.jpg', ts: '2026-10-03T12:00', cap: 'kado ulang tahun terbaik: dia bangun pagi buat aku. (jam 11)', likes: '488' },
  { user: 'junahann', img: 'img/ig/juna-1.jpg', ts: '2026-10-04T21:00', cap: 'self care sunday: tidur 14 jam. produktif bgt gue wkwk', likes: '149' },
  { user: 'suryalix', img: 'img/ig/surya-5.jpg', ts: '2026-10-07T11:30', cap: 'farmers market haul 🍓🥕 tryna be healthy this week (until brownies)', likes: '366' },
  { user: 'ilham.jeong', img: 'img/ig/ilham-6.jpg', ts: '2026-10-09T20:00', cap: 'nemu kafe enak. ga bakal gue kasih tau', likes: '98' },
  { user: 'gemilangrp', img: 'img/ig/gemilang-2.jpg', ts: '2026-10-14T18:30', cap: 'sore yg layak dilukis 🌆', likes: '305' },
  { user: 'sadewaa.k', img: 'img/ig/sadewa-5.jpg', ts: '2026-10-15T22:00', cap: 'hujan', likes: '88' },
  { user: 'kinoo.lee', img: 'img/gal/cook-2.jpg', ts: '2026-10-15T20:10', cap: 'masak buat satu orang tp porsi lima. kebiasaan', likes: '341' },
  { user: 'bagasbinn', img: 'img/ig/bagas-5.jpg', ts: '2026-10-16T08:00', cap: 'k', likes: '66' },
  { user: 'junahann', img: 'img/ig/juna-4.jpg', ts: '2026-10-20T19:00', cap: 'dimarahin lead tapi tetep senyum karena gue profesional 🙂 (nangis di dalem)', likes: '171' },
  { user: 'suryalix', img: 'img/ig/surya-6.jpg', ts: '2026-10-21T17:00', cap: 'sunset walk by the han 🌅 reminder to drink water & call your friends 🫶', likes: '402' },
  { user: 'ilham.jeong', img: 'img/ig/ilham-7.jpg', ts: '2026-10-22T08:10', cap: 'senin. eh kamis. sama aja', likes: '91' },
  { user: 'gemilangrp', img: 'img/ig/gemilang-3.jpg', ts: '2026-10-22T23:30', cap: 'dinner tower B 💐 rame, anget, tapi kok sepi ya', likes: '276' },
  { user: 'suryalix', img: 'img/ig/surya-7.jpg', ts: '2026-10-25T12:00', cap: 'happy birthday to the grumpiest, kindest person I know 🐰🎂 we love you bang kino', likes: '611' },
  { user: 'kinoo.lee', img: 'img/ig/cats-3.jpg', ts: '2026-10-25T15:00', cap: 'makasih ucapannya. kucingnya yg bales.', likes: '702' },
);
X_POSTS.push(
  ['xj3', 'juna', '2026-10-20T09:15', 'gue: hari ini gue bakal produktif\ngue jam 9.15: buka twitter', '', [['ilham', 'kerja'], ['juna', 'IYA IYA 😭']], 48],
  ['xu2', 'surya', '2026-10-20T15:00', 'baking at 3pm on a weekday bcs I can 🍫 wfh supremacy hehe', '', [['juna', 'BAGI'], ['surya', 'come get it!!']], 120],
  ['xg2', 'gemilang', '2026-10-20T19:40', 'diajak makan sama seseorang tapi rasanya kayak nemenin orang yg lagi galau. gue cuma mau ramen 😩🍜', '', [['sadewa', 'ya makan aja'], ['gemilang', 'GA SESIMPEL ITU DEWA']], 87],
  ['xi2', 'ilham', '2026-10-20T22:10', 'senior gue galak. gue ga takut. gue cuma selalu bales "iya bang" dalam 3 detik', '', [['juna', 'SAMA 😭']], 66],
  ['xb2', 'bagas', '2026-10-21T07:05', '5k. dingin.', '', [], 12],
  ['xm2', 'meme', '2026-10-21T11:00', 'senior dev: "jangan panik"\njuga senior dev: *ngetik pake capslock*', '', [], 9400],
  ['xs2', 'sadewa', '2026-10-21T17:30', 'diajak nonton. katanya rame2. ok', '', [], 14],
  ['xu3', 'surya', '2026-10-21T21:00', 'okay unpopular opinion: raisins in brownies is a crime. idc. fight me 🍫⚔️', '', [['kino', 'setuju'], ['surya', 'BANG KINO AGREES 🥹🥹 my life is complete']], 260],
  ['xj4', 'juna', '2026-10-21T23:40', 'kenapa ide2 bagus datengnya pas mau tidur. besok pagi lupa. siklus hidup gue', '', [], 31],
  ['xg3', 'gemilang', '2026-10-22T13:00', 'kalo ada yg nanya warna favorit gue: tergantung perasaan. hari ini abu2 😩🎨', '', [['surya', 'sending you yellow ☀️💛']], 102],
  ['xc3', 'cuaca', '2026-10-22T07:00', 'Seoul 8°, hujan ringan sore hari. Bawa payung ☂️', '', [], 301],
  ['xi3', 'ilham', '2026-10-22T21:45', 'dinner bareng tetangga. makan banyak. ga ada yg perlu tau', '', [['surya', 'we know 🫶']], 40],
  ['xk6', 'kino', '2026-10-22T09:00', 'standup jam 9.30. yg telat traktir. udah tau siapa.', '', [['juna', 'GUE BELUM TELAT 😭'], ['juna', '...belum']], 44],
  ['xj5', 'juna', '2026-10-23T15:40', 'town hall: 2 jam\ncamilan: abis 4 menit\ngue: ga tau apa2', '', [['ilham', 'lo bawa tas'], ['juna', 'ITU TAS LAPTOP 😭']], 92],
  ['xb3', 'bagas', '2026-10-23T13:20', 'ada orang yg ga nanya apa2 padahal harusnya nanya.', '', [], 7],
  ['xu4', 'surya', '2026-10-23T20:00', 'if your friend goes quiet, check on them. even the grumpy ones. *especially* the grumpy ones 🫶', '', [['gemilang', '🥺💐']], 340],
  ['xs3', 'sadewa', '2026-10-23T23:10', 'harusnya gue nolak nonton.', '', [], 5],
  ['xi4', 'ilham', '2026-10-24T08:15', 'prod down. ini bukan latihan. ini bukan gue.', '', [['juna', 'ini gue 😭']], 58],
  ['xm3', 'meme', '2026-10-24T10:00', 'deploy jumat malem: berani\ndeploy jumat malem tanpa test di staging: pahlawan\nmigrasi db jumat malem: kriminal', '', [], 12000],
  ['xg4', 'gemilang', '2026-10-24T19:00', 'hari ini gue belajar kalo orang paling kuat juga bisa jatoh 😭 pls makan teratur kalian', '', [['surya', '🙏🫶']], 190],
  ['xu5', 'surya', '2026-10-24T22:30', 'made bubur at 6pm, brownies at 7pm, cried at 8pm. productive day honestly 🥲', '', [['bagas', 'k. gue juga'], ['juna', 'GUE JUGA NANGIS']], 280],
  ['xb4', 'bagas', '2026-10-24T23:30', 'besok ulang tahun orang yg pantes tidur 12 jam', '', [], 22],
  ['xi5', 'ilham', '2026-10-25T00:05', 'hbd ke senior gue. dia galak. dia jenius. jangan bilang gue bilang', '', [['juna', 'SCREENSHOT'], ['ilham', 'HAPUS']], 77],
  ['xj6', 'juna', '2026-10-25T09:00', 'misi hari ini: bikin bang kino senyum 1x. progress: 0. waktu tersisa: 15 jam 😤', '', [['surya', 'we got this 💪']], 99],
);

X_KRIS_LIKES.push(['kh1', '2026-10-20T22:11']);

// ===== komentar IG (key: user@ts) + reply tambahan X =====
const IG_COMMENTS = {
  'gemilangrp@2026-10-20T23:02': [['junahann', 'yg traktir siapa bang 👀'], ['gemilangrp', 'rahasia negara 😩'], ['suryalix', 'looks so good!! next time ajak aku 🥺']],
  'sadewaa.k@2026-10-21T22:15': [['ilham.jeong', 'mata lo merah tuh'], ['sadewaa.k', 'alergi popcorn'], ['junahann', 'NANGIS KAN 😭']],
  'suryalix@2026-10-24T18:20': [['junahann', 'BAGI 🥺'], ['gemilangrp', 'buat siapa nih 🤭'], ['suryalix', 'secret 🤫🫶']],
  'junahann@2026-10-21T19:40': [['ilham.jeong', 'yg kedua salah'], ['kinoo.lee', 'yg pertama bener'], ['junahann', 'BANG 😭']],
  'ilham.jeong@2026-10-20T08:30': [['junahann', 'caption terpanjang lo tahun ini'], ['ilham.jeong', 'berisik']],
  'kris.chandra@2026-03-25T21:00': [['kinoo.lee', 'norak.'], ['kris.chandra', 'kamu like tapi 🥹'], ['suryalix', 'my favorite couple 🥹🫶'], ['gemilangrp', 'ROMANSA 💐😭'], ['bagasbinn', 'k']],
  'kris.chandra@2026-09-06T18:00': [['kinoo.lee', 'emang panas.'], ['junahann', 'bang kris bucin parah 😭'], ['kris.chandra', 'iya.']],
  'kinoo.lee@2026-09-06T19:30': [['kris.chandra', 'tapi seneng kan'], ['kinoo.lee', 'panas.'], ['suryalix', 'cute 🥹']],
  'junahann@2026-09-28T16:00': [['kinoo.lee', 'bug nya ikut liburan ga'], ['junahann', 'IKUT BANG 😭 dia nempel']],
  'kinoo.lee@2026-10-05T11:00': [['suryalix', 'THE BABIESSS 🥹🥹'], ['gemilangrp', 'dori ngeliatin kamera kayak ceo 😩'], ['kris.chandra', 'anak2 kita'], ['kinoo.lee', 'anak2 gue.']],
  'junahann@2026-10-08T22:00': [['ilham.jeong', 'kabel lo masih kusut di belakang'], ['junahann', 'jangan zoom 😭']],
  'sadewaa.k@2026-10-10T21:00': [['gemilangrp', 'judulnya apaa'], ['sadewaa.k', 'cari sendiri']],
  'bagasbinn@2026-10-11T09:30': [['junahann', 'kepala kosong mulu bang'], ['bagasbinn', 'k']],
  'suryalix@2026-10-11T14:00': [['kinoo.lee', 'ajak orang lain kek'], ['suryalix', 'BANG KINO KOMEN 🥹 next time with you yaa'], ['kinoo.lee', 'ga.']],
  'gemilangrp@2026-10-12T17:00': [['sadewaa.k', 'normal katanya'], ['suryalix', 'art makes us feel 🥺🎨']],
  'kris.chandra@2026-10-13T21:00': [['bagasbinn', 'tidur'], ['kinoo.lee', 'selamat. pulang.'], ['kris.chandra', 'iya iya 🥹']],
  'ilham.jeong@2026-10-13T19:00': [['kinoo.lee', 'good job.'], ['ilham.jeong', '...makasih bang. biasa aja sih']],
  'sadewaa.k@2026-10-17T23:00': [['junahann', 'ini foto apa bang gelap semua'], ['sadewaa.k', 'malem']],
  'kinoo.lee@2026-10-17T21:30': [['kris.chandra', 'aku 🙋‍♂️'], ['junahann', 'BANG KRIS DAPET 3 GUE 0 😭'], ['suryalix', 'looks so good bang 🥹']],
  'suryalix@2026-10-18T16:00': [['kinoo.lee', 'kismis?'], ['suryalix', 'NONE bang 🫡 never']],
  'gemilangrp@2026-10-19T18:00': [['kinoo.lee', 'bagus.'], ['gemilangrp', 'BANG KINO BILANG BAGUS 😭 GUE PIGURAIN KOMEN INI'], ['suryalix', 'so proud of you 🥹💐']],
  'bagasbinn@2026-10-19T20:00': [['junahann', 'leg day mulu kapan arm day'], ['bagasbinn', 'besok']],
  'bagasbinn@2026-10-23T18:30': [['gemilangrp', 'pemandangannya kayak lukisan 🎨']],
  'junahann@2026-10-24T23:10': [['ilham.jeong', 'janji ke-47 dicatat'], ['suryalix', 'it\'s okay jun 🫶 we all make mistakes'], ['bagasbinn', 'tidur']],
  'kinoo.lee@2026-09-12T20:00': [['kris.chandra', 'kaos kaki aku itu'], ['kinoo.lee', 'udah jadi punya dori.']],
  'suryalix@2026-09-15T12:00': [['gemilangrp', 'we love you too ☀️'], ['junahann', 'oleh2 dari melbourne mana 😤']],
  'gemilangrp@2026-09-20T15:00': [['sadewaa.k', 'beli celemek'], ['gemilangrp', 'celemek ga estetik dewa']],
  'ilham.jeong@2026-09-25T18:00': [['junahann', 'traktir dong'], ['ilham.jeong', 'ga.']],
  'kris.chandra@2026-10-03T12:00': [['kinoo.lee', 'jam 11 itu pagi.'], ['kris.chandra', 'iya sayang pagi 🥹'], ['junahann', 'GELI 😭']],
  'junahann@2026-10-04T21:00': [['kinoo.lee', 'besok standup.'], ['junahann', 'bang jangan ingetin 😭']],
  'gemilangrp@2026-10-22T23:30': [['suryalix', '🫶'], ['sadewaa.k', '...'], ['bagasbinn', 'tidur lang']],
  'suryalix@2026-10-21T17:00': [['gemilangrp', 'langitnyaa 😭🎨'], ['bagasbinn', 'diminum']],
  'kinoo.lee@2026-10-15T20:10': [['junahann', 'BANG SISANYA BUAT GUE AJA'], ['kinoo.lee', 'buat soonie.']],
  'suryalix@2026-10-25T12:00': [['junahann', 'HBD BANG KINO 😭🎂'], ['gemilangrp', '💐💐💐'], ['ilham.jeong', 'hbd bang'], ['kinoo.lee', 'makasih sur.']],
  'kinoo.lee@2026-10-25T15:00': [['suryalix', 'the cats said ur welcome 🥹'], ['junahann', 'KUCINGNYA LEBIH SOPAN DARI LO BANG'], ['gemilangrp', '🐱🐱🐱💐']],
};
Object.assign(X_USERS, { sora: { name: 'sora 🌸', handle: 'sorasoraa', person: '', emoji: '🌸', bio: 'marketing · kopi · gosip', following: 400, followers: 820 } });
const X_EXTRA_REPLIES = {
  m1: [['juna', 'KOK NYINDIR 😭']], c1: [['surya', 'stay warm everyone 🧣']], y1: [['sora', 'tim lo makan mulu wkwk']],
  r3: [['sadewa', 'biasa aja']], y2: [['sora', 'sama siapaa 👀'], ['yuna', 'temen kantor 🤫']], b1: [['gemilang', 'puitis juga lo bang']],
  y3: [['sora', 'seongsu lagi?? sama yg kemaren ya 👀'], ['yuna', 'rahasiaa ✨']], c2: [['ilham', 'payung gue ilang']],
  r4: [['juna', 'bang...']], kh1: [['gemilang', 'bang lo yg pesen 😩']], kh2: [['sadewa', 'gue di kursi sebelah bang.']], kh3: [['bagas', 'pulang.']],
  xb2: [['juna', 'pagi2 udah lari, gila']], xm2: [['ilham', 'ini bang kino']], xs2: [['ilham', 'ok']], xj4: [['surya', 'write it down!! notes app is ur bestie 📝']],
  xc3: [['gemilang', 'hujan = mood ngelukis 🎨']], xb3: [['juna', 'bang lo nyindir siapa 😨']], xs3: [['ilham', '?'], ['sadewa', 'bukan urusan lo']],
  xm3: [['ilham', 'juna liat ini'], ['juna', '😭😭😭']], xb4: [['surya', '🥹🫶']],
};
X_POSTS.forEach(p => { const r = X_EXTRA_REPLIES[p[0]]; if (r) p[5] = [...(p[5] || []), ...r]; });

// sayangnya Kino yg ga pernah diomongin (biar telpon berantem & surat kena)
more('kris', [
  ['date', '2026-10-12'],
  ['me', 'kaos kaki kamu udah aku cuci. ambil.', '19.20'], ['them', 'kamu nyuciin lagi? 🥹', '19.31'], ['me', 'daripada dipake dori', '19.32'],
]);
NOTES.push({ id: 'tgl25', title: 'buat tgl 25', date: '19/10/26', ts: '2026-10-19T23:20', body: `1. s2. dia harus tau duluan sebelum siapa2
2. bilang sayang. beneran. bukan "oh itu tau"
3. jaket balikin (ga deng)` });

// ===== Kino bales di IG / X (tap kolom → Kino ngetik, yg punya post bales). [ketikan Kino, balasan]
const IG_KINO_LINES = {
  'junahann': [['kerja jun, bukan foto2', 'BANG 😭 ini jam istirahat sumpah'], ['ganteng dari mana', 'BANG JAHAT 😭'], ['besok standup ya', 'iya bang inget 🙏']],
  'suryalix': [['bagus sur', 'BANG KINO KOMEN 🥹🥹'], ['sisain satu', 'always for you bang 🫶'], ['jangan kebanyakan gula', 'noted!! less sugar 🫡']],
  'gemilangrp': [['lumayan.', 'LUMAYAN DOANG?? 😩'], ['bagus. jangan nangis', 'udah terlanjur bang 😭💐'], ['gambarin soonie dong', 'DENGAN SEGENAP JIWA 🎨']],
  'sadewaa.k': [['foto apaan ini gelap banget', 'seni bang. lo ga ngerti'], ['ajak gue lain kali', '...yaudah. jangan telat']],
  'ilham.jeong': [['good job ham', '...makasih. biasa aja sih'], ['caption lo pelit amat', 'hemat kata bang']],
  'bagasbinn': [['bin. ajak gue', 'bangun jam 5 bisa lo?'], ['kaki lo masih ada?', 'dikit']],
  'kris.chandra': [['norak.', 'kamu tetep like tapi 🥹'], ['iya iya', '🥹']],
  'kinoo.lee': [['makasih semua. udah.', null]],
};
const X_KINO_LINES = {
  juna: [['kerja jun', 'IYA BANG 😭'], ['hapus tweet lo', 'GA MAU 😭 ini kenangan']],
  surya: [['setuju', 'BANG KINO SETUJU 🥹🥹']],
  gemilang: [['lebay lo', 'ini namanya seni bang 😩'], ['jangan lupa makan', 'iya bang 🥺💐']],
  sadewa: [['lo kenapa sih', 'gapapa. diem'], ['tidur dew', 'lo juga']],
  ilham: [['bukan lo? yakin?', '...yakin. kayaknya'], ['kerja ham', 'iya iya 🙄']],
  bagas: [['puitis amat bin', 'diem'], ['ikut jalan malem', 'jam 11. lobi']],
  kris: [['norak', '🥹']],
  kino: [['iya.', null]],
};

// momen tambahan: Kris ga berani naik, cuma duduk di lobi
more('juna', [
  ['date', '2026-10-24'],
  ['them', 'bang... lo udah tidur?', '01.50'], ['them', 'bang kris di lobi dari jam 1. duduk doang. ga naik 👀', '01.50'], ['them', 'gue mau nyapa tp mukanya kayak orang abis nangis 😶', '01.51'], ['them', 'gue diem aja deh. good night bang 🙏', '01.53'],
]);
more('kris', [
  ['date', '2026-10-24'],
  ['them', 'aku di bawah', '01.58', { retract: true }],
  ['them', 'semangat hari ini', '07.40', { retract: true }],
]);

// ===== epilog langsung abis ending (gaya narasi), terus THE END =====
ENDINGS.maafin.epi = [
  'Kris datang hari Rabu, membawa masakan dalam panci yang terlalu besar.',
  '"Aku belajar dari video," katanya. "Gagal tiga kali."',
  'Masakannya keasinan. Parah. Kino menghabiskannya tanpa komentar.',
  'Di wastafel, Kris mencuci panci itu lama sekali. Ia baru sadar, delapan tahun ini selalu Kino yang mencucinya.',
  'Ternyata begitu rasanya. Sayang yang tidak diucapkan. Diam-diam, terus-menerus, tanpa minta dilihat.',
  'Paket di lobi akhirnya dibuka. Tiga kalung nama. Dori menolak melepas miliknya.',
  '"Enak," kata Kino dari sofa, tanpa menoleh. Lalu, lebih pelan, satu kata lagi.',
  'Kris tidak minta Kino mengulanginya. Ia sudah dengar.',
];
ENDINGS.jeda.epi = [
  'Hari kelima, Kris berhenti menghitung.',
  'Ia ke kantor, pulang jam lima, makan di minimarket bawah. Tidak lagi ke Seongsu.',
  'Di lemarinya ia menemukan kaos kaki yang dulu ia tinggal di sofa Kino. Bersih. Terlipat. Ia bahkan tidak ingat kapan Kino mengembalikannya.',
  'Malam itu ia akhirnya mengerti. Ia bosan bukan karena tidak disayang. Ia bosan karena berhenti memperhatikan.',
  'Di lantai empat puluh empat, Kino memasangkan kalung nama ke kucing-kucingnya satu per satu. Dori protes. Soonie tidur. Doongie menggigit kalungnya.',
  'Ia memotret mereka. Membuka chat Kris. Menutupnya lagi.',
  'Belum. Tapi jarinya sudah hafal jalannya.',
];
ENDINGS.turun.epi = [
  'Kris mencuci jaket itu dua kali. Baunya tetap bau unit 4419.',
  'Ia mengirim satu pesan: "jaketnya udah aku cuci. makasih udah ngembaliin." Dibaca. Tidak dibalas. Ia memang tidak berharap dibalas.',
  'Di kantor, Yuna menyapanya di lift. Kris hanya mengangguk, lalu turun satu lantai lebih awal.',
  'Ia baru paham sekarang. Yang ia cari selama ini bukan orang baru. Hanya bukti. Dan buktinya ada di depan mata, delapan tahun, dalam mangkuk yang tidak pernah kosong.',
  'Terlambat. Ia tahu itu terlambat.',
  'Kino membuka paket itu di lobi. Tiga kalung nama. Ia menangis di sana, di depan satpam yang diam-diam menawarinya teh.',
  'Lilin bengkok dari minimarket itu masih ia simpan. Di laci. Di samping hal-hal lain yang ternyata ia simpan juga.',
];
ENDINGS.waktu.epi = [
  'Kris mengambil jaketnya jam setengah tiga pagi. Terlipat rapi. Di sakunya, secarik kertas.',
  'Ia membacanya di lorong. Berkali-kali. "Harusnya kamu nanya."',
  'Iya. Harusnya ia bertanya. Harusnya ia bilang. Harusnya ia tidak mencari di tempat lain sesuatu yang selama ini sudah ada di rumah.',
  'Ia mengetik satu pesan terakhir. "selamat ulang tahun, kino. yang terakhir dari aku."',
  'Seminggu kemudian, Kino tidur nyenyak untuk pertama kalinya. Aneh. Sedih, tapi nyenyak.',
  'Kalung-kalung nama itu ia simpan di laci. Bagus. Menyebalkan.',
  'Dan sekali, hanya sekali, ia membiarkan dirinya menangis. Lalu tidur.',
];

// tgl 25: hari ulang tahun Kino, chat Kris beda tiap ending (o.end)
more('kris', [
  ['date', '2026-10-25'],
  ['them', 'pagi, birthday boy 🎂', '09.10', { end: 'maafin' }], ['them', 'aku di depan pintu. bawa sarapan. jangan protes', '09.10', { end: 'maafin' }], ['me', 'masuk. ga dikunci', '09.14', { end: 'maafin' }],
  ['them', 'jam 12 ke rumah mama ya. buah buat mama udah aku beli', '10.30', { end: 'maafin' }], ['me', 'kamu yg nyetir', '10.31', { end: 'maafin' }], ['them', 'siap 🫡', '10.31', { end: 'maafin' }],
  ['them', 'happy birthday kino.', '09.00', { end: 'turun' }], ['them', 'maaf buat semuanya.', '09.01', { end: 'turun' }],
]);

// ===== telpon/chat iseng: beda tiap hari (d), sekali doang per id =====
RANDOM_CALL_WINDOW[1] = '2026-10-24T08:00'; // tgl 24 prod down dari jam 8: ga ada yg iseng
{
  const DAYS = { mama1: [D20], mina1: [D20], juna1: [D20], spam1: [D20], kurir1: [D20], surya1: [D21], ilham1: [D21], hana1: [D21], gemilang1: [D21], bagas1: [D21], sadewa1: [D22] };
  RANDOM_CALLS.forEach(c => { c.d = DAYS[c.id] || [D20]; });
  RANDOM_CALLS.find(c => c.id === 'sadewa1').hours = [12, 17];
  const CDAYS = { 'rc-juna': [D20], 'rc-surya': [D20], 'rc-mama': [D20], 'rc-olive': [D20], 'rc-grup': [D20], 'rc-gemilang': [D21], 'rc-ilham': [D21], 'rc-kru': [D21], 'rc-hana': [D21], 'rc-makan': [D21], 'rc-bagas': [D22], 'rc-sadewa': [D22], 'rc-mina': [D22] };
  RANDOM_CHATS.forEach(c => { c.d = CDAYS[c.id] || [D20]; });
  RANDOM_CHATS.find(c => c.id === 'rc-sadewa').hours = [12, 18];
}
RANDOM_CALLS.push(
  { id: 'juna2', who: 'Juna', d: [D22], hours: [9, 16], lines: [['t', 'bang lo liat flashdisk gue ga 😭'], ['k', 'yg ijo?'], ['t', 'IYA'], ['k', 'nyolok di laptop lo dari kemaren'], ['t', '...oh. makasih bang 🙏']] },
  { id: 'mama2', who: 'Mama', d: [D22], hours: [8, 12], lines: [['t', 'nak, mama beli hp baru'], ['t', 'cara pindahin foto dari hp lama gimana'], ['k', 'nanti aku telfon video ma, aku ajarin'], ['t', 'oke nak. jangan lupa ya'], ['k', 'iya ma']] },
  { id: 'surya2', who: 'Surya', d: [D22], hours: [11, 16], lines: [['t', 'bang!! japchae nanti malem mau pake jamur ga?'], ['k', 'pake'], ['t', 'okayy 🫶 you\'re coming right?'], ['k', 'iya.'], ['t', 'yayyy 🥳']] },
  { id: 'spam2', who: 'Spam', d: [D22], hours: [9, 21], lines: [['t', 'selamat siang bapak, limit pinjaman bapak sudah cair 50 juta—'], ['k', 'saya ga pinjem'], ['t', 'tapi pak—']] },
  { id: 'mina2', who: 'Mina', d: [D23], hours: [10, 14], lines: [['t', 'kino, town hall jam 3 ya. lo duduk sama tim'], ['k', 'harus dateng kak?'], ['t', 'harus. CTO nyebut nama tim kita'], ['k', '...oke kak']] },
  { id: 'juna3', who: 'Juna', d: [D23], hours: [8, 11], lines: [['t', 'BANG GUE KETINGGALAN BUS 😭'], ['k', 'kantor kita di tower A, jun. turun lift, nyebrang LG'], ['t', '...'], ['t', 'oh iya. gue ngapain di halte 😭']] },
  { id: 'kurir2', who: 'Kurir', d: [D23], hours: [17, 21], lines: [['t', 'halo mas, ada paket atas nama unit 4419'], ['k', 'dari siapa pak?'], ['t', 'ga ada nama pengirimnya mas'], ['t', 'saya titip satpam ya'], ['k', '...iya pak']] },
  { id: 'gemilang2', who: 'Gemilang', d: [D23], hours: [18, 22], lines: [['t', 'bangg mau gue anterin makan?'], ['k', 'ga laper'], ['t', 'bohong. suara lo kayak orang belum makan dari pagi 😩'], ['k', '...yaudah. jangan banyak'], ['t', 'OTW 🏃💐']] },
  { id: 'ilham2', who: 'Ilham', d: [D23], hours: [19, 23], lines: [['t', 'bang. besok gue shadow on call lo ya?'], ['k', 'iya. liatin aja dulu'], ['t', 'bukan gue takut ya'], ['k', 'iya.'], ['t', '...makasih']] },
);
Object.assign(CALL_FOLLOW, {
  juna2: { chat: 'juna', ans: ['flashdisknya udah?', ['UDAH BANG 🙏 nempel di laptop beneran wkwk']], miss: ['knp nelfon', ['flashdisk gue ilang bang 😭', '...eh udah ketemu']] },
  surya2: { chat: 'surya', ans: ['jamurnya yg banyak', ['noted!! extra mushroom 🍄🫡']], miss: ['td nelfon?', ['yes!! japchae nya pake jamur ga?', 'pake ya? noted 🫡']] },
  mina2: { chat: 'mina', ans: ['kak gue duduk paling belakang ya', ['ga boleh. depan. sama gue']], miss: ['kak td nelfon?', ['town hall jam 3, lo harus dateng', 'duduk sama tim']] },
  kurir2: { chat: 'pengelola', ans: null, miss: null },
  gemilang2: { chat: 'gemilang', ans: ['makasih makanannya', ['🥹💐 abisin ya bang']], miss: ['knp', ['mau anterin makan bang 🥺', 'udah gue taro depan pintu']] },
  ilham2: { chat: 'ilham', ans: ['besok gue online dari jam 7', ['...oke. bukan berarti gue butuh']], miss: ['knp', ['besok on call', 'udah. ga jadi nanya']] },
});
delete CALL_FOLLOW.kurir2;
RANDOM_CHATS.push(
  { id: 'rc-juna2', chat: 'juna', d: [D22], hours: [8, 12], msgs: [['them', 'bang gue mimpi lo marahin gue'], ['them', 'jadi hari ini gue dateng lebih pagi 🫡']], reply: ['bagus. pertahanin', ['BANG 😭 jadi beneran mau marahin??']] },
  { id: 'rc-grup2', chat: 'grup', d: [D22], hours: [12, 18], msgs: [['Gemilang', 'dresscode dinner nanti apa guys'], ['Juna', 'BAJU']], reply: ['baju.', [['Surya', 'lmao the most kino answer ever'], ['Gemilang', 'kalian ga ada jiwa seni 😩']]] },
  { id: 'rc-surya2', chat: 'surya', d: [D23], hours: [11, 19], msgs: [['them', 'bang I made too much soup'], ['them', 'want some? 🥺']], reply: ['taro depan pintu', ['okayy 🫶 eat it while it\'s warm ya']] },
  { id: 'rc-gemilang2', chat: 'gemilang', d: [D23], hours: [12, 18], msgs: [['them', 'bang ini lukisan baru'], ['them', 'judulnya "jumat" 🎨']], reply: ['kenapa jumat', ['karena gue capek 😩', 'dan karena hari ini jumat']] },
  { id: 'rc-sadewa2', chat: 'sadewa', d: [D23], hours: [19, 23], msgs: [['them', 'bang. lo udah makan?'], ['them', 'bukan gue nanya karena peduli ya']], reply: ['udah', ['boong.', 'gue taro roti depan pintu lo. dimakan']] },
  { id: 'rc-kru2', chat: 'kru', d: [D23], hours: [9, 14], msgs: [['Ilham', 'bang hasil simulasi phishing udah keluar'], ['Juna', 'JANGAN DIBUKA 😭']], reply: ['juna.', [['Juna', 'IYA BANG GUE KLIK DUA KALI 😭'], ['Ilham', 'dicatat']]] },
  { id: 'rc-mama2', chat: 'mama', d: [D23], hours: [9, 20], msgs: [['them', 'nak, foto2 di hp mama udah pindah semua'], ['them', 'ada foto kamu sama kris waktu kuliah 🥹']], reply: ['kirim ma', ['nanti ya nak, mama belum bisa kirim foto 😅']] },
  { id: 'rc-gemilang3', chat: 'gemilang', d: [D24], hours: [0, 3], msgs: [['them', 'bang... masih bangun?'], ['them', 'gue ga bisa tidur juga 🥺']], reply: ['tidur lang', ['iya bang 🥺 night']] },
);

// ===== epilog (HP seminggu kemudian): chat terakhir Kino–Kris, abis itu "Days Until" =====
const AU_TITLE = 'Days Until';
more('kris', [
  ['date', '2026-11-01'],
  ['them', 'udah sampe rumah. makasih buat hari ini', '20.20', { epi: 'maafin' }],
  ['me', 'kamu inget aku pernah bilang mau s2 sebelum umur tiga puluh?', '23.00', { epi: 'jeda' }], ['me', 'aku daftar. bulan september. diem-diem.', '23.00', { epi: 'jeda' }], ['me', 'dan aku keterima.', '23.01', { epi: 'jeda' }], ['me', 'mulai januari. part-time, tapi aku bakal sering pergi. empat kali setahun.', '23.02', { epi: 'jeda' }], ['me', 'aku mau nyoba sekarang, mumpung belum tiga puluh. biar tumbuh. biar aku jadi orang yg lebih oke.', '23.02', { epi: 'jeda' }], ['me', 'ini bukan buat kabur dari kamu.', '23.03', { epi: 'jeda' }], ['me', 'aku juga salah, kris. aku ga pernah bilang apa-apa, terus marah karena kamu ga ngerti. kayak nyuruh orang baca buku yg aku tulis pake bahasa yg cuma aku yg ngerti.', '23.03', { epi: 'jeda' }], ['me', 'aku juga mau belajar. belajar ngomong. belajar nunjukin.', '23.04', { epi: 'jeda' }], ['me', 'kalo kamu mau nunggu, silakan.', '23.05', { epi: 'jeda' }], ['me', 'aku ga minta. aku ga nyuruh. aku cuma ngasih tau.', '23.05', { epi: 'jeda' }], ['them', 'kamu beneran daftar...', '23.15', { epi: 'jeda' }], ['them', 'aku inget kamu ngomong itu di kafe deket kampus. umur dua puluh tiga. aku kira kamu udah lupa.', '23.15', { epi: 'jeda' }], ['me', 'iya. dari dulu.', '23.16', { epi: 'jeda' }], ['them', 'aku tunggu.', '23.16', { epi: 'jeda' }], ['them', 'and kino. kamu hebat. dari dulu. aku aja yg telat bilang.', '23.17', { epi: 'jeda' }],
  ['them', 'kino, aku pindah unit akhir bulan', '20.20', { epi: 'turun' }], ['them', 'aku cuma mau kamu tau dari aku. bukan dari orang', '20.21', { epi: 'turun' }],
  ['them', 'kino. ini terakhir kali aku chat, janji', '20.20', { epi: 'waktu' }], ['them', 'makasih udah sabar sama aku selama ini', '20.21', { epi: 'waktu' }],
]);
REPLIES.push(
  { id: 'fin-maafin', chat: 'kris', at: '2026-11-01T20:22', epi: 'maafin', final: true, opts: [
    { me: ['sayang.'], them: ['...kamu bilang lagi 🥹', 'aku juga. banget.'] },
    { me: ['jangan lupa vet dori minggu depan. kamu yg bayar'], them: ['iya. aku yg bayar 🙂', 'night kino'] } ] },
  { id: 'fin-jeda', chat: 'kris', at: '2026-11-01T20:22', epi: 'jeda', final: true, opts: [
    { me: ['belum.'], them: ['oke. aku tunggu.'] },
    { me: ['minggu depan. kopi. kamu yg bayar'], them: ['...iya. iya 🥹'] } ] },
  { id: 'fin-turun', chat: 'kris', at: '2026-11-01T20:22', epi: 'turun', final: true, opts: [
    { me: ['oke. jaga diri.'], them: ['kamu juga, kino.'] },
    { me: ['makasih udah jujur.'], them: ['makasih udah ngajarin aku caranya.'] } ] },
  { id: 'fin-waktu', chat: 'kris', at: '2026-11-01T20:22', epi: 'waktu', final: true, opts: [
    { me: ['makasih buat 8 tahunnya.'], them: ['makasih udah sayang aku dengan cara kamu.'] },
    { me: ['semoga kamu bahagia, kris.'], them: ['kamu juga, kino. beneran.'] } ] },
);

// ===== ending versi panjang (narasi) =====
ENDINGS.maafin.lines = [
  'Telepon itu masih tersambung waktu Kino bangun dari kasur.',
  'Kepalanya masih berat. Bekas infus tadi sore meninggalkan memar kecil di punggung tangannya, ungu kebiruan. Dori mengangkat kepala dari jaket di ujung kasur, menatapnya sebentar, lalu tidur lagi. Tidak peduli.',
  '"Aku turun," kata Kino.',
  'Di seberang, hening. Lalu suara napas yang ditahan. "...Beneran?"',
  '"Kalau kamu nanya sekali lagi, aku nggak jadi."',
  '"Oke. Oke. Aku di sini."',
  'Ia mematikan telepon sebelum Kris sempat bilang apa-apa lagi.',
  'Sandal. Hoodie abu-abu yang lengannya kepanjangan. Kunci. Ia berdiri di depan pintu lebih lama dari yang perlu, tangannya di gagang. Dari dapur, kulkas berdengung pelan. Di dalamnya masih ada bulgogi dari hari Selasa, terbungkus plastik, tidak pernah dipanaskan.',
  'Ia keluar.',
  'Lift turun pelan. Empat puluh empat. Empat puluh tiga. Di panel, tombol empat puluh lima, lantai unit Kris, ada tepat di atas jarinya. Ia membuang muka.',
  'Di cermin lift, wajahnya pucat. Rambutnya masih setengah basah karena tadi ia mencuci muka terlalu lama, terlalu keras, seperti bisa menghapus sesuatu.',
  'Sepuluh. Sembilan.',
  'Ia memikirkan apa yang mau ia katakan. Sudah ia pikirkan sejak membaca surat itu tiga kali. Kalimat-kalimat yang rapi. Tegas. Yang tidak akan membuatnya terdengar lemah.',
  'Satu.',
  'Semuanya hilang begitu pintu terbuka.',
  'Kafe kecil di lobi tower B jam setengah satu pagi terlalu terang dan terlalu sepi. Kursinya sudah dinaikkan ke meja, tinggal satu yang masih turun. Lampu putih, dengung kulkas minuman. Satpam di meja depan pura-pura sibuk dengan layar CCTV.',
  'Kris ada di sofa dekat pintu kaca. Jaket Bagas yang kebesaran menutupi setengah tangannya. Rambutnya berantakan. Matanya merah dan bengkak, seperti orang yang menangis berjam-jam lalu berhenti hanya karena kehabisan tenaga.',
  'Begitu melihat Kino, ia berdiri terlalu cepat. Lututnya membentur meja kecil di depannya. Ia tidak peduli.',
  '"Kino."',
  'Kino berhenti dua langkah darinya. Tidak lebih dekat.',
  'Keduanya diam. Lama.',
  'Di luar, angin bulan Oktober menggoyang pohon-pohon di taman depan. Enam derajat, kata aplikasi cuaca tadi. Kris pasti kedinginan duduk di dekat pintu itu berjam-jam. Kino tidak menanyakannya.',
  '"Duduk," kata Kino akhirnya.',
  'Kris duduk. Kino duduk juga, di ujung sofa yang lain. Ada jarak satu orang di antara mereka. Dulu, di sofa yang sama, mereka pernah ketiduran berdua sampai dibangunkan satpam.',
  '"Aku udah baca," kata Kino. "Tiga kali."',
  '"...Iya."',
  '"Kamu bilang kamu ngerasa nggak disayang." Ia menatap lurus ke pintu kaca, bukan ke Kris. Suaranya datar. Terlalu datar. "Kamu tahu nggak rasanya baca itu?"',
  'Kris tidak menjawab.',
  '"Dori tidur di jaket kamu tiap malem," kata Kino pelan. "Kamu pikir siapa yang naro jaketnya di situ?"',
  '"Kino—"',
  '"Aku belum selesai."',
  'Kris diam.',
  '"Tapi kamu bener." Ini bagian yang paling susah. Kino merasakan tenggorokannya menutup, dan ia memaksa kata-kata itu keluar. "Aku nggak pernah bilang."',
  'Ia mengeluarkan ponselnya. Membuka Catatan. Jarinya sedikit gemetar waktu menggeser layar, mencari satu catatan yang ia tulis Senin malam, sebelum semuanya berantakan.',
  'Buat tgl 25.',
  'Ia menyodorkan ponselnya tanpa menoleh.',
  'Kris membacanya. Kino tahu persis kapan Kris sampai di poin kedua, karena napasnya berhenti.',
  'Bilang sayang. Beneran. Bukan "oh itu tau".',
  '"Kamu..." Suara Kris pecah. "Kamu mau bilang hari ini?"',
  '"Rencananya." Kino mengambil ponselnya kembali. "Terus kamu ngilang."',
  'Kris menutup wajah dengan kedua tangannya. Bahunya naik turun. Tidak ada suara, hanya napas yang tersendat-sendat, seperti anak kecil yang berusaha keras tidak menangis di depan orang.',
  'Kino membiarkannya. Lama.',
  'Satpam di meja depan berdeham pelan, lalu memutar kursinya membelakangi mereka. Kino mencatat dalam hati untuk membelikan bapak itu kopi besok.',
  '"Maaf," kata Kris akhirnya, dari balik telapak tangannya. "Maaf. Aku bego. Aku cuma... nunggu kata-kata, dan kamu udah ngasih semuanya, dan aku nggak liat."',
  '"Iya. Kamu bego."',
  'Kris tertawa. Basah, berantakan, tapi tertawa. Lalu menangis lagi.',
  'Kino merogoh saku hoodie-nya. Tisu. Ia selalu membawa tisu sejak Kris menangis di bioskop delapan tahun lalu, waktu kencan pertama, karena film animasi tentang robot. Kris tidak tahu soal itu. Kris tidak tahu banyak hal.',
  'Ia menyodorkan tisunya. "Jelek."',
  '"Makasih," kata Kris, mengambil tisu itu, dan entah kenapa kata itu terdengar seperti tentang lebih dari sekadar tisu.',
  'Mereka diam lagi. Kali ini diamnya berbeda.',
  '"Ini yang terakhir," kata Kino. Pelan, tapi jelas. "Sekali lagi kamu bohong, aku nggak nanya. Aku nggak marah. Aku nggak nunggu. Aku pergi."',
  '"Iya."',
  '"Capek, bilang capek. Bosen, bilang bosen. Ngerasa nggak disayang..." Napasnya tertahan sebentar. "Bilang. Ke aku. Bukan ke orang lain."',
  '"Iya."',
  '"Aku nggak jago ngomong. Kamu tahu itu dari awal. Tapi aku bisa belajar." Ia akhirnya menoleh, menatap Kris untuk pertama kalinya malam itu. "Yang aku nggak bisa itu dibohongin. Itu doang."',
  'Kris mengangguk. Berkali-kali. Seperti tidak percaya ia masih diberi kesempatan untuk mengangguk.',
  '"Yuna," kata Kino.',
  '"Udah. Aku udah bilang ke dia. Aku pindah tim kalau perlu."',
  '"Nggak perlu pindah tim." Kino memandang ke luar lagi. "Kamu cuma perlu pulang."',
  'Kris menatapnya. Lalu, pelan-pelan, seperti takut ditolak, ia menggeser tangannya di atas sofa sampai ujung jarinya menyentuh ujung jari Kino.',
  'Kino tidak menarik tangannya.',
  'Mereka duduk di sofa itu sampai jam dua. Tidak banyak bicara. Sesekali Kris bercerita pelan tentang seminggu ini. Tentang ramen yang kuahnya kebanyakan. Tentang kursi kosong di bioskop. Tentang kucing di Seongsu. Kino mendengarkan. Tidak memotong. Tidak menghakimi. Hanya mendengarkan.',
  'Jam dua lewat sepuluh, Kino menguap. Kris langsung berdiri. "Kamu harus tidur. Kamu baru pingsan, dan aku malah—"',
  '"Iya, iya."',
  'Mereka berjalan ke lift bersama. Kris menekan tombol empat puluh lima. Kino menekan empat puluh empat.',
  'Pintu lift terbuka di lantai empat puluh empat. Kino melangkah keluar. Di dalam, Kris ragu-ragu, seperti mau mengatakan sesuatu tapi tidak berani.',
  'Pintu mulai menutup.',
  'Dan di detik terakhir, Kino bicara. Pelan sekali, hampir tertelan suara mesin lift.',
  '"Sayang."',
  'Kris menahan pintu dengan tangannya. Matanya membesar. "Hah? Apa?"',
  '"Nggak ada." Kino memandang angka di atas pintu. Telinganya merah. "Pulang sana."',
  '"Kino, kamu barusan—"',
  '"Pintunya, Kris."',
  'Kris melepaskan pintu itu sambil tertawa. Tawa paling jujur yang Kino dengar seminggu ini.',
  'Pintu menutup. Lift naik satu lantai, membawa Kris pulang. Di lorong yang sepi, Kino bersandar ke dinding, dan untuk pertama kalinya malam itu, ia tersenyum.',
  'Poin kedua. Dicoret.',
  'Siangnya mereka ke rumah Mama. Kris yang membawa buah, dalam keranjang yang terlalu besar, diikat pita yang jelas diikat sendiri. Mama membuka pintu, menatap mereka berdua, menatap mata Kino yang masih sedikit sembab dan mata Kris yang jauh lebih sembab.',
  'Mama tidak bertanya apa-apa.',
  'Mama hanya menyuruh mereka masuk, menyiapkan meja, dan selama makan siang itu diam-diam terus menambahkan nasi ke piring Kino. Lalu ke piring Kris juga.',
  'Pelan-pelan. Mulai dari nol yang bukan nol.',
];
ENDINGS.jeda.lines = [
  'Kino tidak turun.',
  'Ia duduk di lantai kamar, punggung bersandar ke sisi kasur, ponsel menempel di telinga. Dori tidur di atas jaket Kris di ujung kasur. Doongie di pangkuannya. Soonie entah di mana, mungkin di dalam lemari lagi.',
  'Di telepon, Kris menunggu. Kino bisa mendengar napasnya, dan di belakangnya, dengung kulkas kafe lobi yang familiar.',
  '"Aku nggak bisa turun," kata Kino akhirnya.',
  '"...Oke."',
  '"Bukan karena aku benci kamu."',
  '"Aku tahu."',
  '"Kamu nggak tahu." Kino memejamkan mata. "Kamu nggak tahu apa-apa soal aku seminggu ini. Itu masalahnya."',
  'Hening. Kris tidak membantah.',
  '"Kita break dulu," kata Kino. Kalimat itu keluar lebih mudah dari yang ia kira, dan justru itu yang membuatnya takut. "Bukan putus. Aku cuma... nggak bisa mikir sekarang."',
  '"Berapa lama?" Suara Kris nyaris tidak terdengar.',
  '"Nggak tahu."',
  '"Seminggu? Sebulan?"',
  '"Kris." Kino membuka mata, menatap langit-langit. Ada noda kecil di sudutnya, bekas AC bocor tahun lalu. Kris yang memanjat kursi untuk mengeceknya, waktu itu. "Sampai kepala aku nggak penuh lagi. Aku nggak bisa ngasih tanggal."',
  'Hening lagi. Di seberang, Kris menarik napas panjang. Gemetar.',
  '"Oke," katanya. "Aku tunggu."',
  '"Kamu nggak harus—"',
  '"Aku mau." Suaranya lebih tegas sekarang. "Seminggu ini aku nyari sesuatu di tempat yang salah. Aku nggak mau nyari lagi. Aku tunggu. Aku nggak akan chat duluan. Kalau kamu butuh apa-apa, apa pun, aku di lantai empat puluh lima."',
  'Kino tidak menjawab. Tangannya mengelus kepala Doongie, pelan, berulang-ulang.',
  '"Kino?"',
  '"Hm."',
  '"Boleh aku bilang satu hal? Habis itu aku tutup."',
  'Kino diam. Kris menganggapnya sebagai iya.',
  '"Selamat ulang tahun." Suara Kris pecah di kata terakhir. "Maaf aku ngerusak ulang tahun kamu."',
  'Kino menggigit bibir bawahnya keras-keras.',
  '"Udah," katanya. "Tutup."',
  'Kris menutup teleponnya.',
  'Kino tetap duduk di lantai. Lama. Doongie akhirnya bosan dielus dan pindah ke kasur, bergabung dengan Dori di atas jaket. Dua kucing itu tidur bersandar satu sama lain, di atas bau Kris yang mulai pudar.',
  'Jam satu, Kino berdiri dan berjalan ke jendela.',
  'Dari lantai empat puluh empat, lobi terlihat seperti kotak cahaya kecil di bawah sana. Ia tidak bisa melihat siapa-siapa dari ketinggian ini. Tapi ia menunggu.',
  'Lima menit kemudian, satu sosok keluar dari pintu kaca. Berhenti di tengah taman. Menengadah.',
  'Kino tidak tahu apakah Kris bisa melihat jendelanya dari bawah sana. Mungkin tidak. Tapi ia tidak bergerak dari jendela sampai sosok itu akhirnya berbalik, masuk lagi, dan menghilang.',
  'Lalu ia menangis. Diam-diam, berdiri, dahinya menempel ke kaca yang dingin. Tidak lama. Hanya sampai napasnya kembali normal.',
  'Ia tidak tahu apakah ini keputusan yang benar. Ia hanya tahu ia tidak bisa turun malam ini dan pura-pura semuanya baik-baik saja. Ia sudah terlalu lama pura-pura. Seminggu ini, dan mungkin jauh sebelum itu juga.',
  'Ia membuka Catatan. Buat tgl 25.',
  'Poin pertama. S2. Dia harus tahu duluan sebelum siapa-siapa.',
  'Poin kedua. Bilang sayang. Beneran.',
  'Poin ketiga. Jaket balikin. Ga deng.',
  'Kino menatap daftar itu lama. Tidak ada yang ia coret. Ia menutup ponselnya, naik ke kasur, dan tidur meringkuk di samping dua kucing dan sebuah jaket.',
  'Jam sembilan pagi, email itu datang.',
  'Congratulations.',
  'Kino membacanya di kasur, setengah sadar, rambut berantakan. Ia membacanya dua kali. Tiga kali. Dikirim di hari ulang tahunnya, oleh orang-orang yang tidak mengenalnya, yang hanya tahu ia pernah memperbaiki server yang mati di hari Jumat.',
  'Keterima.',
  'Hal pertama yang ia lakukan adalah membuka chat Kris. Jarinya sudah mengetik "aku keterima" sebelum otaknya sempat menghentikan.',
  'Ia menatap dua kata itu. Lalu menghapusnya, huruf demi huruf.',
  'Belum.',
  'Ia mengirimkannya ke Mama saja. Mama membalas dengan dua puluh emoji bunga dan satu pesan suara yang isinya Mama menangis sambil tertawa. Lalu ke grup pemuda nyasar, yang langsung meledak. Juna mengirim empat belas pesan berturut-turut. Surya mengirim stiker kelinci menangis. Bagas hanya menulis "k. bangga."',
  'Hari ulang tahunnya ternyata tidak seburuk yang ia kira.',
  'Di antara semua ucapan itu, chat Kris tetap diam. Seperti janjinya.',
  'Seminggu kemudian, sebuah foto muncul di grup pemuda nyasar. Jaket hitam yang sudah dicuci, terlipat rapi di atas sofa. "punya bagas, gue balikin. thanks."',
  'Kris tidak menulis apa-apa lagi.',
  'Kino melihatnya dari kasur, Soonie tidur di atas perutnya. Ia mengetik di chat Kris, pelan.',
  '"jaket kamu juga masih di sini."',
  'Kursor berkedip. Ibu jarinya melayang di atas tombol kirim.',
  'Lalu ia menghapusnya. Huruf demi huruf.',
  'Belum. Tapi nanti.',
];
ENDINGS.turun.lines = [
  'Kino turun pakai sandal.',
  'Jaket itu terlipat di tangannya. Ia menariknya dari bawah Dori, yang langsung protes dengan suara serak, dan melipatnya rapi di atas meja makan. Lipatan yang sama yang selalu ia buat. Lengan ke dalam, kerah di atas.',
  'Di lift, tanpa sadar ia memeluk jaket itu ke dadanya. Baunya masih bau Kris. Ia buru-buru menurunkannya.',
  'Lantai satu.',
  'Kris berdiri di depan kafe lobi yang sudah tutup, bukan duduk di kursinya. Seperti ia sudah berdiri di sana lama sekali dan lupa caranya duduk. Di tangannya ada kue kecil dari minimarket, sepotong cheesecake dalam kotak plastik, dengan satu lilin warna-warni yang ditancapkan miring.',
  'Lilinnya bengkok. Belum dinyalakan.',
  'Matanya lebih merah dari yang Kino kira.',
  '"Hai," kata Kris. Suaranya serak.',
  '"Hai."',
  'Mereka berdiri berhadapan di depan kafe lobi yang kosong. Satpam di meja depan pura-pura tidur.',
  '"Aku nggak tahu kamu mau cheesecake yang mana," kata Kris, mengangkat kotak plastik itu sedikit. "Minimarket cuma ada ini. Yang biasa kamu suka udah habis."',
  '"Yang ini juga oke."',
  '"Aku bawa korek. Mau aku—"',
  '"Nanti."',
  'Kris menurunkan kotaknya lagi. Pelan.',
  'Kino menatapnya lama. Wajah yang sudah delapan tahun ia lihat hampir setiap hari. Yang ia hafal waktu tidur, waktu marah, waktu menangis di bioskop karena film animasi tentang robot. Malam ini wajah itu terlihat asing.',
  '"Aku baca suratnya," kata Kino.',
  '"...Iya."',
  '"Kamu bilang kamu ngerasa nggak disayang. Terus kamu bosen. Terus kamu pergi."',
  'Kris tidak membantah. Ia hanya menunduk.',
  '"Aku juga punya yang nggak aku bilang," kata Kino. Kalimat itu keluar sebelum ia sempat memutuskan mau mengatakannya atau tidak.',
  'Kris mengangkat wajah.',
  '"Aku daftar S2. Di luar negeri. Part-time, tapi tetap harus bolak-balik. Aku daftar bulan September. Interview-nya hari Kamis, jam lima sore, dua jam sebelum dinner tower B." Ia tersenyum tipis, tanpa humor. "Aku mau bilang ke kamu hari ini. Kamu orang pertama yang mau aku kasih tahu."',
  '"Kino..."',
  '"Lucu ya. Kita sama-sama nyimpen sesuatu. Bedanya, aku nyimpen sesuatu buat kamu. Kamu nyimpen sesuatu dari aku."',
  'Kris membuka mulutnya. Menutupnya lagi. Tidak ada yang bisa ia katakan, dan Kino tahu itu.',
  'Kino menyodorkan jaketnya. "Nih. Dori udah bosen."',
  'Kris tidak langsung mengambilnya. Tangannya gemetar, menggantung di udara di antara mereka.',
  '"Kino. Aku tahu aku salah. Aku tahu. Tapi tolong—"',
  '"Aku nggak benci kamu," kata Kino. Datar. Tenang. Terlalu tenang, seperti permukaan danau yang sudah membeku. "Aku cuma udah nggak tahu kamu siapa."',
  'Kalimat itu jatuh di antara mereka seperti sesuatu yang pecah.',
  'Kris mengambil jaketnya. Memeluknya ke dada, persis seperti Kino tadi di lift. Kino memalingkan wajah.',
  '"Seminggu ini," kata Kino pelan, "aku nunggu kamu. Tiap malem. Aku nggak nanya. Aku pikir kalau aku sabar, kamu bakal pulang sendiri. Kamu selalu pulang sendiri."',
  '"Aku pulang sekarang."',
  '"Iya." Kino mengangguk. "Telat."',
  'Ia mengambil korek dari tangan Kris. Kris membiarkannya. Kino menyalakan lilin bengkok itu. Apinya kecil dan goyang-goyang kena angin dari pintu kaca.',
  'Mereka berdua menatap api kecil itu.',
  'Delapan tahun lalu, di kafe kecil dekat kampus, Kris juga membawakannya kue dengan lilin bengkok. Waktu itu Kino bilang lilinnya jelek. Kris bilang, nanti tiap tahun aku bawain yang bengkok terus, biar kamu inget aku. Dan setiap tahun, entah bagaimana, lilinnya memang selalu bengkok.',
  'Kino ingat. Ia tidak tahu apakah Kris ingat.',
  'Ia meniup lilin itu sendiri. Asapnya naik tipis, berbelok, hilang.',
  '"Makasih kuenya," katanya.',
  'Lalu berbalik.',
  '"Kino." Suara Kris di belakangnya, nyaris putus. "Selamat ulang tahun."',
  'Kino tidak menoleh. Ia masuk lift. Menekan angka empat puluh empat. Tidak menekan empat puluh lima, untuk pertama kalinya dalam delapan tahun.',
  'Pintu lift menutup pelan. Lewat celahnya yang makin sempit, ia melihat Kris masih berdiri di depan kafe lobi, memeluk jaket yang baru saja dikembalikan, kue kecil di tangan yang lain, lilinnya masih mengepulkan asap tipis.',
  'Lalu pintunya menutup sepenuhnya.',
  'Di dalam lift, Kino bersandar ke dinding. Ia menghitung angka lantainya satu per satu, karena kalau ia berhenti menghitung, ia akan menangis, dan ia tidak mau menangis di dalam lift yang ada kameranya.',
  'Empat puluh dua. Empat puluh tiga.',
  'Di panel, tombol empat puluh lima tetap gelap.',
  'Empat puluh empat.',
  'Ia sampai di unitnya. Menutup pintu. Bersandar di baliknya. Dori datang, mengendus kakinya, lalu menatap tangan Kino yang kosong. Mencari jaket itu.',
  '"Udah nggak ada," kata Kino ke kucingnya. Suaranya pecah di kata terakhir.',
  'Dori mengeong sekali, protes, lalu pergi tidur di tempat jaket itu dulu.',
  'Kino duduk di lantai depan pintu sampai pagi.',
  'Jam sembilan, email itu datang. Congratulations. Ia membacanya di lantai yang sama, dan ia tidak tahu harus merasakan apa. Senang, mungkin. Atau sesuatu yang mirip senang, di bawah lapisan lain yang jauh lebih berat.',
  'Ia mengirimkannya ke Mama. Ke grup pemuda nyasar. Ke Kak Mina.',
  'Tidak ke chat yang paling atas.',
];
ENDINGS.waktu.lines = [
  'Kino menutup teleponnya.',
  'Ibu jarinya bertahan di layar sedikit lebih lama dari yang perlu. Nama kontak itu masih di sana, paling atas di riwayat panggilan. kris 🐺. Ia menatap emoji serigala kecil itu, yang dulu ia pasang sambil bilang "biar kamu tahu diri", waktu Kris merengek minta nama kontak yang lebih romantis.',
  'Ia tidak menelepon balik.',
  'Kamar itu sunyi. Dori tidur di atas jaket Kris. Doongie di bawah meja. Soonie di atas lemari, mengawasinya dengan mata kuning yang tidak berkedip, seperti tahu sesuatu sedang terjadi.',
  'Kino membuka chat Kris dan mengetik satu pesan.',
  '"selamat ulang tahun buat aku. jangan nunggu."',
  'Terkirim. Dibaca. Hampir seketika.',
  'Kris sedang mengetik. Berhenti. Mengetik lagi. Berhenti.',
  'Tidak ada balasan yang masuk.',
  'Kino meletakkan ponselnya di kasur, layar menghadap ke bawah, lalu berjalan ke jendela.',
  'Dari unit 4419, lampu lobi terlihat kecil sekali. Kotak cahaya putih di dasar gedung yang gelap. Ada satu orang di sana. Ia tidak bisa melihat wajahnya dari ketinggian ini, tapi ia tahu cara orang itu berdiri. Delapan tahun ia menghafalnya.',
  'Lima menit.',
  'Orang itu tidak bergerak.',
  'Sepuluh menit.',
  'Ia duduk di bangku taman depan, membungkuk, siku di atas lutut.',
  'Satu jam.',
  'Kino tidak tahu kenapa ia tetap berdiri di jendela. Mungkin untuk memastikan. Mungkin untuk menghukum dirinya sendiri. Mungkin karena ini terakhir kalinya ia bisa melihat Kris menunggunya, dan sebagian kecil dari dirinya yang bodoh, yang masih memasak bulgogi porsi dua, ingin melihatnya sampai habis.',
  'Sekitar jam dua, orang itu akhirnya berdiri. Menengadah ke arah gedung, ke jendela-jendela yang gelap, entah ke jendela yang mana.',
  'Lalu berjalan pergi. Tidak masuk ke gedung. Keluar, lewat gerbang depan, ke jalan yang gelap.',
  'Kino menunggu sampai sosok itu benar-benar hilang. Lalu ia berbalik, menarik jaket dari bawah Dori yang langsung protes, dan melipatnya di atas meja makan.',
  'Lengan ke dalam. Kerah di atas. Delapan tahun, dan ia selalu melipatnya dengan cara yang sama.',
  'Ia merobek selembar kertas dari buku kecil di dekat kulkas, buku yang biasanya ia pakai untuk daftar belanja. Pasir tofu dua. Snack ikan yang ungu. Ia membalik halamannya.',
  'Pulpennya diam di atas kertas lama sekali.',
  'Lalu ia menulis.',
  '8 tahun. Makasih. Aku sayang kamu, dari dulu. Harusnya aku bilang. Harusnya kamu nanya.',
  'Ia membacanya sekali. Hampir merobeknya. Lalu melipatnya kecil-kecil dan menyelipkannya ke saku jaket.',
  'Jam dua lewat lima belas, Kino naik satu lantai lewat tangga darurat. Ia tidak mau naik lift. Lift terlalu terang, terlalu banyak cermin.',
  'Lorong lantai empat puluh lima sunyi. Lampunya menyala satu per satu mengikuti langkahnya. Ia berhenti di depan pintu 4519. Pintu yang dulu ia buka dengan kodenya sendiri tanpa mengetuk, sambil membawa panci yang masih panas.',
  'Ia tidak membukanya sekarang.',
  'Ia meletakkan jaket itu di depan pintu. Terlipat rapi. Seperti biasa.',
  'Lalu ia berdiri di sana sebentar. Satu tangan menempel di pintu. Dingin.',
  '"Selamat tinggal," katanya pelan. Ke pintu. Ke lorong yang kosong. Ke delapan tahun yang tiba-tiba terasa sangat jauh.',
  'Lampu lorong padam satu per satu waktu ia berjalan kembali ke tangga.',
  'Di unitnya, ia naik ke kasur. Dori sudah pindah ke tengah kasur, tepat di tempat jaket itu tadi. Kino berbaring di sebelahnya, menatap langit-langit, menunggu dirinya menangis.',
  'Tidak ada air mata. Hanya rasa kosong yang lebar dan aneh, seperti ruangan yang barangnya baru saja dikeluarkan semua.',
  'Ia membuka ponselnya sekali lagi. Catatan. Buat tgl 25.',
  'Poin kedua. Bilang sayang. Beneran.',
  'Ia sudah menulisnya. Di selembar kertas, di saku sebuah jaket, di depan pintu yang tidak akan ia ketuk lagi. Mungkin itu cukup. Mungkin cuma itu satu-satunya cara ia bisa mengatakannya.',
  'Ia mencoret poin itu. Lalu mematikan layar.',
  'Malam itu Dori tidur di kasur. Tepat di tempat jaket itu dulu.',
];
// tambahan adegan (sudut pandang Kris) biar tiap ending 1000+ kata
{
  const after = (arr, needle, add) => { const i = arr.findIndex(l => l.startsWith(needle)); arr.splice(i + 1, 0, ...add); };
  after(ENDINGS.jeda.lines, 'Kris menutup teleponnya.', [
    'Di kafe lobi, Kris menatap layar ponselnya yang sudah gelap. Pantulan wajahnya sendiri balas menatap. Berantakan. Asing.',
    'Ia tidak langsung naik. Kakinya tidak mau bergerak.',
    'Satpam di meja depan, Pak Wahyu, berdeham pelan. "Mas Kris. Ada paket atas nama unit 4419 dari kemarin sore. Mas mau sekalian bawa?"',
    'Kris menoleh. Kotak cokelat kecil di atas meja satpam. Tanpa nama pengirim. Ia mengenalinya bahkan dari jauh.',
    'Bulan Agustus. Malam-malam, di sofa unit Kino, dengan Dori tidur di pangkuannya dan Kino sibuk mengomel soal deploy Juna di dapur. Ia memesan tiga kalung nama dari toko kecil di Seongsu, diam-diam, dengan ongkos kirim yang dijadwalkan pas seminggu sebelum ulang tahun Kino. Waktu itu ia masih orang yang ingat hal-hal seperti itu.',
    '"Nggak usah, Pak," katanya. Suaranya serak. "Itu buat dia. Nanti dia ambil sendiri."',
    '"Dari Mas?"',
    'Kris diam sebentar. "Jangan bilang dari saya."',
    'Ia naik ke lantai empat puluh lima. Membuka pintu unitnya yang gelap dan dingin, yang seminggu ini hampir tidak ia tempati. Di meja makan masih ada struk restoran Seongsu, struk bioskop, dan selembar kertas reservasi yang ia buat dua bulan lalu untuk makan malam tanggal 25. Dua orang. Meja dekat jendela.',
    'Ia membatalkannya lewat ponsel. Lalu duduk di lantai, bersandar ke pintu, persis seperti yang mungkin sedang Kino lakukan satu lantai di bawahnya.',
    'Dua orang, dipisahkan satu lantai beton, sama-sama duduk di lantai, sama-sama tidak tidur.',
  ]);
  after(ENDINGS.jeda.lines, 'Hari ulang tahunnya ternyata tidak seburuk', [
    'Siangnya Surya datang membawa brownies tanpa kismis dan ikut menangis begitu Kino membuka pintu. Juna datang membawa susu pisang enam kotak dan berteriak "BANG KINO S2 DI LUAR NEGERI" sampai tetangga sebelah membuka pintu untuk protes. Gemilang membawa bunga yang terlalu besar untuk unit sekecil itu. Sadewa datang paling akhir, berdiri di ambang pintu, bilang "selamat" dengan suara datar, lalu memeluk Kino sebentar sekali, terlalu cepat untuk dibilang pelukan.',
    'Bagas tidak datang. Bagas mengirim pesan jam tiga sore: "bubur di depan pintu. jangan bilang makasih."',
    'Sore itu unit 4419 penuh suara. Kino duduk di sofa, dikelilingi orang-orang yang ribut, dan untuk beberapa jam ia lupa bahwa ada satu orang yang tidak ada di sana.',
    'Hanya beberapa jam.',
  ]);
  after(ENDINGS.turun.lines, 'Lalu pintunya menutup sepenuhnya.', [
    'Kris tidak bergerak untuk waktu yang lama.',
    'Lilin di kue itu sudah padam, tapi asapnya masih tercium, bau lilin ulang tahun murahan yang entah kenapa selalu mengingatkannya pada kafe kecil dekat kampus. Pada Kino umur dua puluh, yang pura-pura kesal dengan lilin bengkok tapi diam-diam menyimpan lilinnya di dompet selama setahun.',
    'Kris tahu soal lilin di dompet itu. Ia tidak pernah bilang.',
    'Ternyata mereka sama saja. Dua orang yang tahu banyak hal tentang satu sama lain dan tidak pernah mengatakannya.',
    'Pak Wahyu bangun dari pura-pura tidurnya, berjalan ke dispenser, dan kembali dengan segelas teh hangat dalam gelas kertas. Ia meletakkannya di meja dekat sofa tanpa bicara.',
    '"Makasih, Pak," kata Kris.',
    '"Duduk dulu, Mas. Berdiri terus nanti pingsan juga."',
    'Kris tertawa. Pendek, pahit. Lalu duduk.',
    'Ia membuka kotak cheesecake itu dan memakannya sendirian, sepotong kecil demi sepotong kecil, dengan sendok plastik dari minimarket. Rasanya terlalu manis. Kino pasti akan bilang terlalu manis. Kino selalu bilang begitu, lalu menghabiskannya juga.',
    'Di tengah kue itu, Kris akhirnya menangis. Tidak keras. Hanya air mata yang jatuh satu-satu ke kotak plastik, sementara ia terus menyendok, karena kalau ia berhenti, ia tidak tahu apa lagi yang harus dilakukan dengan tangannya.',
    'Jaket itu ia peluk sampai pagi. Masih ada bau unit 4419 di sana. Sabun cuci yang biasa Kino pakai. Sedikit bau kucing.',
    'Ia tidak tahu kapan bau itu akan hilang. Ia berharap tidak terlalu cepat.',
  ]);
  after(ENDINGS.waktu.lines, 'Lalu berjalan pergi. Tidak masuk ke gedung.', [
    'Kris tidak tahu mau ke mana. Kakinya berjalan sendiri. Melewati minimarket yang lampunya masih menyala, melewati halte bus yang kosong, sampai ke jembatan kecil di atas sungai yang membelah kompleks itu.',
    'Ia berhenti di tengah jembatan. Air di bawahnya hitam, memantulkan lampu-lampu jalan yang goyang.',
    'Ia membuka pesan terakhir dari Kino. Membacanya lagi. Selamat ulang tahun buat aku. Jangan nunggu.',
    'Kino bahkan mengucapkan selamat ulang tahun untuk dirinya sendiri. Karena orang yang seharusnya mengucapkannya pertama kali malah sibuk mencari sesuatu di tempat lain.',
    'Kris mengetik balasan. Menghapusnya. Mengetik lagi. Maaf. Aku sayang kamu. Aku bego. Tolong. Semua kata yang terlambat seminggu, atau mungkin terlambat setahun.',
    'Ia tidak mengirim satu pun.',
    'Untuk pertama kalinya, ia memahami sesuatu yang seharusnya ia pahami jauh lebih awal: kalau ia mengirim pesan sekarang, itu untuk dirinya sendiri. Supaya ia merasa lebih baik. Bukan untuk Kino.',
    'Jangan nunggu, kata Kino. Jadi ia tidak menunggu. Ia berdiri di jembatan itu sampai jarinya mati rasa karena dingin, lalu berjalan pulang dengan langkah yang sangat pelan.',
  ]);
}
{
  const before = (arr, needle, add) => { const i = arr.findIndex(l => l.startsWith(needle)); arr.splice(i, 0, ...add); };
  before(ENDINGS.waktu.lines, 'Malam itu Soonie tidur di kasur.', [
    'Pagi datang terlalu terang.',
    'Jam sembilan, email itu masuk. Congratulations. Kino membacanya sambil duduk di pinggir kasur, rambut berantakan, mata perih karena tidak tidur. Keterima. Di hari ulang tahunnya.',
    'Ia menunggu rasa senang itu datang. Datangnya pelan, seperti air yang merembes, tapi datang juga.',
    'Ia mengirimkannya ke Mama. Mama menelepon tiga detik kemudian, menangis, lalu memarahinya karena pingsan, lalu menangis lagi, lalu bertanya Kris ikut makan siang atau tidak.',
    '"Nggak, Ma," kata Kino. "Kris nggak ikut."',
    'Mama diam sebentar. Mama selalu tahu. "Ya udah. Kamu aja yang pulang. Mama masak jjigae kebanyakan."',
    '"Iya, Ma."',
    'Sebelum berangkat, Kino berdiri lama di depan lift. Tombol turun. Lift datang, pintunya terbuka, kosong. Di panel, angka empat puluh lima ada tepat di atas tombol yang ia tekan.',
    'Kino tidak menoleh.',
    'Di rumah Mama, ia makan dua mangkuk jjigae. Mama tidak bertanya apa-apa lagi. Mama hanya duduk di sebelahnya, mengelus punggungnya pelan seperti waktu ia masih kecil dan demam, sampai Kino tertidur di sofa ruang tengah dengan perut kenyang dan kepala yang, untuk pertama kalinya seminggu ini, tidak penuh.',
  ]);
  before(ENDINGS.turun.lines, 'Tidak ke chat yang paling atas.', [
    'Juna membalas dengan empat belas tanda seru. Surya menelepon sambil menangis. Kak Mina hanya menulis, "aku tahu kamu bakal keterima. sekarang istirahat."',
  ]);
}
{
  const i = ENDINGS.waktu.lines.findIndex(l => l.startsWith('Ia tidak menelepon balik.'));
  ENDINGS.waktu.lines.splice(i + 1, 0,
    'Di kepalanya, telepon tadi masih berputar. Suara Kris yang pecah. Kalimat "aku pengen jadi orang yang sama, yang lebih baik." Kino percaya Kris sungguh-sungguh. Itu yang membuatnya lebih sakit.',
    'Karena ternyata sungguh-sungguh saja tidak cukup. Delapan tahun ia sungguh-sungguh, dengan caranya sendiri, dan Kris tetap pergi mencari bukti di tempat lain. Mungkin mereka berdua sama-sama sungguh-sungguh, hanya saja dalam bahasa yang berbeda, dan tidak ada yang pernah repot-repot belajar bahasa yang satunya.',
  );
}
Object.assign(ENDING_TAIL, {
  maafin: { sabar: 'Malam itu Kino tidur tanpa menunggu siapa-siapa. Untuk pertama kalinya seminggu ini, ia tidak perlu.', dingin: 'Kino belum memaafkan semuanya malam itu. Tapi ia juga tidak menutup pintunya. Untuk sekarang, itu cukup.' },
  turun: { sabar: 'Jam empat pagi, satu pesan masuk: "lilinnya aku simpen." Kino membacanya. Tidak membalas. Tapi tidak menghapusnya juga.', dingin: 'Jam lima pagi Kino memblokir nomor Kris. Jam enam ia membukanya lagi. Jam tujuh ia memblokirnya lagi.' },
});
// sayangnya Kino harus kerasa di semua ending, termasuk yg pisah
{
  const after = (arr, needle, add) => { const i = arr.findIndex(l => l.startsWith(needle)); if (i < 0) throw new Error('needle ' + needle); arr.splice(i + 1, 0, ...add); };
  const M = ENDINGS.maafin.lines, J = ENDINGS.jeda.lines, T = ENDINGS.turun.lines, W = ENDINGS.waktu.lines;
  after(M, 'Kris duduk. Kino duduk juga', [
    'Lalu, tanpa menoleh, Kino melepas syal dari lehernya dan melemparkannya ke pangkuan Kris. "Pake."',
    'Kris menatap syal itu. Syal abu-abu yang ia belikan dua musim dingin lalu, yang katanya jelek, yang ternyata dipakai Kino setiap hari.',
  ]);
  after(M, 'Kino membiarkannya. Lama.', [
    'Seminggu ini ia marah. Tapi di bawah marahnya ada sesuatu yang lebih tua dan lebih keras kepala: ia sayang orang ini. Sayang sekali. Perasaan itu tidak pernah ke mana-mana, bahkan di malam-malam ia menatap chat yang centang satu sampai jam tiga pagi.',
    'Itu yang paling menakutkan. Bukan Yuna. Bukan kebohongannya. Tapi kenyataan bahwa setelah semuanya, ia masih ingin mengusap punggung orang yang menangis di sebelahnya ini.',
    'Jadi ia melakukannya. Pelan, canggung, tangannya hanya menyentuh punggung Kris dua kali. Tapi Kris berhenti gemetar.',
  ]);
  after(J, 'Lalu ia menangis.', [
    'Bukan karena ia tidak sayang. Justru karena ia terlalu sayang. Ia tahu kalau ia turun malam ini, ia akan memaafkan semuanya dalam lima menit, sebelum lukanya sempat ia pahami, dan seminggu lagi mereka akan kembali ke tempat yang sama.',
    'Ia tidak mau kembali ke tempat yang sama. Ia mau mereka sampai di tempat yang baru. Dan untuk itu, malam ini, ia harus tetap di atas.',
  ]);
  after(T, 'Kalimat itu jatuh di antara mereka', [
    'Yang tidak ia katakan: ia masih hafal Kris minum kopi tanpa gula tapi diam-diam suka kalau ada yang menaruh satu sendok. Ia masih refleks mengeluarkan dua sendok setiap kali makan. Ia masih sayang, sebesar ini, sampai dadanya sakit waktu berdiri di depan orang itu.',
    'Justru karena itu ia harus pergi sekarang. Sebelum sayang itu membuatnya lupa caranya berdiri sendiri lagi.',
  ]);
  after(T, '"Udah nggak ada," kata Kino ke kucingnya.', [
    'Lalu ia menangis. Akhirnya. Keras, jelek, napasnya tersendat-sendat, sambil memeluk Soonie yang meronta minta dilepas. Delapan tahun. Delapan tahun ia menyayangi orang itu dengan cara yang tidak pernah orang itu lihat, dan malam ini ia baru saja mengembalikannya dalam bentuk jaket yang terlipat rapi.',
  ]);
  after(W, 'Kino tidak tahu kenapa ia tetap berdiri', [
    'Ia sayang Kris. Ia tahu itu sejelas ia tahu namanya sendiri. Bahkan sekarang, ada bagian dari dirinya yang ingin turun, memakaikan syal ke leher orang bodoh yang duduk kedinginan di bangku taman itu, lalu memarahinya karena tidak pakai sarung tangan.',
    'Tapi sayang saja ternyata tidak cukup untuk dua orang yang tidak pernah saling bicara.',
  ]);
}

// 21 Okt: Kino nanya soal tweet "kursi sebelah", sok santai
more('kris', [
  ['date', '2026-10-21'],
  ['me', 'kris "kursi sebelah" maksudnya apa wkwk', '22.05'],
  ['me', 'meeting kok sempet nge-tweet, bosen ya meetingnya haha', '22.06'],
  ['them', 'wkwk gapapa', '23.08'],
  ['them', 'random aja, lg nunggu orang presentasi', '23.08'],
  ['me', 'oh haha oke', '23.12'],
  ['them', 'kamu belum tidur?', '23.12'],
  ['me', 'bentar lagi hehe', '23.13'],
]);
ALT.push(['2026-10-21T23:16', 'dia bilang lagi nunggu orang presentasi, gue bales "oh haha oke", padahal story bioskop sadewa udah nongol dari 22.20, akting gue layak dapet piala sih, haha. haha.']);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-21T23:16', ALT[ALT.length - 1][1], '', [], 0, {}]);

// 13 Okt (hari launch Kris): Kino bangga banget tp cuma nyuruh tidur
more('kris', [
  ['date', '2026-10-13'],
  ['them', 'launch nya jalan 🥹🚀', '22.10'], ['them', 'aku capek bgt tp seneng', '22.10'], ['them', 'dua minggu ga tidur akhirnya kelar', '22.11'],
  ['me', 'selamat. sekarang tidur sebelum aku dateng nyabut charger kamu', '22.14'],
  ['them', 'hehe iya', '22.20'],
]);
ALT.push(['2026-10-13T22:16', 'dia launch hari ini, gue nonton livestream presentasinya dari awal sampe akhir, sampe gue screenshot pas dia ngomong di depan, bangga bgt anjirr, terus gue bales apa? nyuruh dia tidur sambil ngancem nyabut charger. pinter kino pinter']);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-13T22:16', ALT[ALT.length - 1][1], '', [], 0, {}]);

// 20 Okt: Kino nanya soal tweet Kris yg dibales Gemilang, sok santai (padahal tau mereka makan ramen)
more('kris', [
  ['date', '2026-10-20'],
  ['me', 'itu gemilang bales "bang lo yg pesen" di twitter kamu maksudnya apa haha', '22.18'],
  ['them', 'oh itu', '22.24'],
  ['them', 'td gemilang mampir kantor bawain ramen 😅', '22.24'],
  ['me', 'oh. baik juga ya gemilang', '22.26'],
]);
ALT.push(['2026-10-20T22:27', 'nanya soal rep gemilang di twitter dia, katanya gemilang mampir kantor bawain ramen, oh gitu, gemilang yg sore tadi nanya gue ikut makan bareng mereka apa ngga itu ya, oke kris oke, haha']);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-20T22:27', ALT[ALT.length - 1][1], '', [], 0, {}]);

// ===== EPILOG (versi final, sesuai arahan): tiap ending punya waktu & judul sendiri, ditutup "Days Until · the end"
ENDINGS.maafin.epiHead = '25 Oktober, siang. Di jalan ke rumah Mama.'; // biar ga dikira 1 nov (epilog maafin masih hari ultah)
ENDINGS.maafin.epi = [
  'Kotak brownies Surya ada di pangkuan Kino, dibungkus kain bunga-bunga pinjaman Surya. Oleh-oleh buat Mama. Kris menyetir pelan sekali, terlalu pelan, seperti takut perjalanan ini selesai sebelum ia sempat mengatakan semua yang mau ia katakan.',
  '"Aku mau benerin semuanya," katanya akhirnya, mata lurus ke jalan. "Aku udah bikin daftar. Aku mau belajar masak. Aku mau pulang jam lima beneran, bukan bohongan. Aku mau nanya tiap kali aku ngerasa aneh, bukan lari. Aku mau—"',
  '"Kris."',
  '"—nganter kamu ke vet tiap Dori check-up, aku mau—"',
  '"Kris. Berhenti dulu ngomongnya."',
  'Kris berhenti. Lampu merah. Mobil berhenti juga.',
  'Kino menatap kotak brownies di pangkuannya. Lalu mengeluarkan ponsel, membuka satu email, dan menyodorkannya ke Kris.',
  'Congratulations.',
  'Kris membacanya. Lalu membacanya lagi. Lampu sudah hijau, mobil di belakang membunyikan klakson, dan Kris tidak bergerak.',
  '"Ini..."',
  '"S2. Part-time. Aku keterima tadi pagi." Kino mengambil ponselnya kembali. "Jalan, Kris. Diklakson."',
  'Kris menjalankan mobilnya. Tangannya sedikit gemetar di setir.',
  '"Dari kapan?"',
  '"Daftarnya bulan September. Pengen nyobanya udah dari lama." Kino memandang keluar jendela. Pohon-pohon di pinggir jalan mulai menguning. "Aku pengen nyoba sebelum umur tiga puluh. Biar nggak nyesel. Biar tumbuh. Biar aku jadi orang yang lebih oke, buat diri aku sendiri."',
  'Ia diam sebentar.',
  '"Aku mau ngasih tahu kamu duluan. Sebelum siapa-siapa. Aku udah nyatet. Rencananya hari ini." Senyumnya tipis. "Terus kamu sibuk nganu dari seminggu yang lalu."',
  'Kris meringis. "Iya. Maaf."',
  '"Udah."',
  '"Nggak, maksudnya..." Kris menarik napas. "Kamu mau ngasih tahu aku duluan. Bahkan pas aku lagi kayak gitu. Kamu tetep mau ngasih tahu aku duluan."',
  'Kino tidak menjawab. Telinganya memerah.',
  'Kris menepikan mobilnya di depan minimarket kecil, dua blok sebelum rumah Mama. Mematikan mesin. Lalu menoleh, menatap Kino lama sekali, dengan mata yang masih sedikit bengkak dari semalam.',
  '"Kamu hebat," katanya.',
  'Kino membeku.',
  'Dua kata itu. Dua kata yang seminggu lalu Kris tunggu darinya, yang tidak pernah ia ucapkan. Sekarang Kris yang mengucapkannya, pelan, sungguh-sungguh, tanpa menuntut apa-apa kembali.',
  '"...Iya," kata Kino akhirnya. Suaranya serak. "Aku tahu."',
  'Lalu, lebih pelan: "Makasih."',
  '"Bakal sering bolak-balik?"',
  '"Empat kali setahun. Seminggu-dua minggu."',
  '"Oke." Kris mengangguk. "Soonie, Doongie, Dori aku yang jagain. Aku yang masakin kamu pas kamu pulang. Pasti keasinan. Kamu harus tetep makan."',
  '"Kamu yang bayar tiket pesawatnya juga?"',
  '"...Satu kali."',
  '"Dua."',
  '"Satu setengah."',
  'Kino tertawa. Tawa yang keluar begitu saja, keras dan jelek, seperti tawa delapan tahun lalu di kafe dekat kampus.',
  'Kris menyalakan mobilnya lagi. Dua blok kemudian, Mama sudah berdiri di depan pagar, memakai celemek, melambai seperti mereka belum bertemu setahun.',
  'Kino turun duluan, membawa brownies. Kris menyusul, membawa sesuatu yang tidak kelihatan, yang lebih berat, yang ia janjikan pada dirinya sendiri untuk tidak pernah ia jatuhkan lagi.',
];
ENDINGS.jeda.epiHead = 'Seminggu kemudian.';
ENDINGS.jeda.epi = [
  'Pesan pertama yang Kino kirim setelah seminggu diam masuk jam sebelas malam.',
  '"aku keterima s2."',
  'Ia menatap tulisan "dibaca" yang muncul hampir seketika. Lalu mengetik lagi, sebelum keberaniannya habis.',
  '"mulai januari. part-time, tapi aku bakal sering pergi. empat kali setahun."',
  '"dari lama aku pengen. aku mau nyoba sebelum umur tiga puluh. biar tumbuh. biar aku jadi orang yang lebih oke."',
  'Kris sedang mengetik. Berhenti. Kino mengetik lagi, lebih cepat.',
  '"ini bukan buat kabur dari kamu."',
  '"aku juga salah, kris. aku nggak pernah bilang apa-apa, terus marah karena kamu nggak ngerti. kayak nyuruh orang baca buku yang aku tulis pake bahasa yang cuma aku yang ngerti."',
  '"aku juga mau belajar. belajar ngomong. belajar nunjukin."',
  'Ia berhenti. Jempolnya melayang di atas layar.',
  '"kalau kamu mau nunggu, silakan."',
  '"aku nggak minta. aku nggak nyuruh. aku cuma ngasih tahu."',
  'Terkirim.',
  'Lalu tidak ada apa-apa. Lama sekali. Kino meletakkan ponselnya, mengambilnya lagi, meletakkannya lagi. Soonie menatapnya dari ujung kasur dengan pandangan menghakimi.',
  'Sepuluh menit kemudian, ponselnya bergetar.',
  '"iya."',
  '"aku tunggu."',
  'Lalu, satu pesan lagi, menyusul beberapa detik kemudian:',
  '"dan kino. kamu hebat. dari dulu. aku aja yang telat bilang."',
  'Kino menatap pesan itu lama. Lalu menaruh ponselnya di dada, telungkup, dan menutup mata.',
  'Di lantai empat puluh lima, Kris menatap layar yang sama. Ia tidak menunggu balasan. Ia sudah belajar bahwa tidak semua hal harus dibalas untuk sampai.',
  'Di lantai empat puluh empat, untuk pertama kalinya dalam seminggu, Kino tidur sambil tersenyum.',
];
ENDINGS.turun.epiHead = 'Dua tahun kemudian.';
ENDINGS.turun.epi = [
  'Toko roti Surya akhirnya buka di lantai dasar tower B, di bekas minimarket yang dulu menjual cheesecake terlalu manis. Namanya "No Raisins". Juna yang mengusulkan. Surya menangis waktu memasang papan namanya.',
  'Pembukaannya ramai. Juna sudah bukan junior lagi dan sekarang punya intern sendiri yang selalu telat standup. Ilham sudah bukan intern lagi dan masih bilang "bukan gue" untuk semua hal. Gemilang memajang tiga lukisan di dinding toko. Salah satunya berjudul "orang yang ditinggal di lobi". Tidak ada yang bertanya kenapa.',
  'Kino datang terlambat. Ia baru mendarat dari Oxford pagi itu, wisuda sudah lewat, kopernya masih di unit. Rambutnya lebih pendek. Ia terlihat lebih tenang, entah karena tidur cukup atau karena dua tahun belajar hal-hal yang tidak ada di kurikulum.',
  'Kris ada di dekat kasir.',
  'Kino tahu Kris akan datang. Semua orang tahu. Surya sudah tiga kali minta maaf duluan di grup.',
  'Kris juga terlihat berbeda. Lebih sehat. Matanya tidak lagi kelihatan lelah. Ia sedang tertawa dengan Bagas soal sesuatu, lalu menoleh, dan berhenti tertawa.',
  '"Hai," kata Kris.',
  '"Hai."',
  'Mereka berdiri berhadapan di dekat etalase brownies. Seperti dua tahun lalu, di depan kafe lobi, beberapa langkah dari tempat ini. Bedanya, kali ini tidak ada yang gemetar.',
  '"Denger kamu udah lulus," kata Kris. "Selamat. Kamu hebat."',
  'Kino mengangkat alis. "Kamu belajar ngomong ya sekarang."',
  '"Dua tahun. Ada kelasnya ternyata." Kris tersenyum. "Namanya terapi."',
  'Kino tertawa. Kris ikut tertawa. Di belakang mereka, Juna menyikut Gemilang keras-keras dan dipelototi Sadewa.',
  'Mereka mengobrol sebentar. Tentang Oxford yang hujan terus. Tentang Soonie yang sekarang gendut sekali. Tentang Kris yang pindah tim dan sekarang pulang jam lima sungguhan. Obrolan yang ringan dan aman, seperti dua orang yang dulu pernah tahu segalanya tentang satu sama lain dan sekarang sedang belajar ulang dari awal.',
  'Lalu Kris berdeham. Sok santai. Terlalu sok santai.',
  '"Jadi..." katanya. "Udah ada pacar belum? Kiw kiw."',
  'Kino menatapnya datar. "Kiw kiw?"',
  '"Kata Juna itu cara nanya yang santai."',
  '"Juna nggak pernah punya pacar."',
  '"...Bener juga."',
  'Kino mengambil satu brownies dari etalase tanpa bayar. Surya pura-pura tidak lihat.',
  '"Belum," katanya.',
  'Kris diam sebentar. Lalu, lebih pelan, tanpa kiw kiw: "Masih buka hati buat orang lama?"',
  'Kino menggigit browniesnya. Mengunyah. Lama. Sengaja lama.',
  '"Buka hati buat siapa aja," katanya akhirnya. Lalu, sambil berjalan pergi ke arah Surya yang memanggilnya untuk foto bersama, ia menoleh sekali.',
  '"Siapa aja, Kris. Termasuk yang udah belajar ngomong."',
];
ENDINGS.waktu.epiHead = 'Dua tahun kemudian.';
ENDINGS.waktu.epi = [
  'Kafe kecil dekat kampus itu masih ada. Masih dengan kursi kayu yang goyang dan lampu kuning yang terlalu redup. Pemiliknya sudah ganti, tapi menunya masih sama, termasuk potongan kue yang selalu disajikan dengan lilin kalau kamu bilang hari itu hari spesial.',
  'Kino datang hari Selasa sore, sendirian. Ia baru pulang dua minggu, ijazahnya masih di dalam map di lemari, dan ia belum tahu harus melakukan apa dengan semua waktu luang yang tiba-tiba ada.',
  'Ia memesan kopi dan duduk di meja dekat jendela. Meja yang sama. Ia tidak sengaja memilihnya. Atau mungkin sengaja. Ia sudah berhenti terlalu memikirkan hal-hal seperti itu.',
  'Lima menit kemudian, pintu kafe berbunyi.',
  'Kris masuk, membawa laptop, rambutnya sedikit lebih panjang. Ia memesan di kasir, berbalik, mencari tempat duduk, dan melihat Kino.',
  'Keduanya diam. Tidak lama. Hanya satu tarikan napas.',
  'Lalu Kris tersenyum. Senyum yang tidak minta maaf, tidak minta apa-apa. Hanya senang. Ia berjalan mendekat dan berhenti di samping meja.',
  '"Boleh?"',
  'Kino menunjuk kursi di depannya dengan dagu. Kris duduk.',
  'Mereka mengobrol. Tentang Oxford dan hujannya. Tentang Kris yang sekarang ikut kelas memasak dan masih belum bisa bikin masakan yang tidak keasinan. Tentang kalung nama yang masih dipakai Dori dan tidak pernah mau dilepas. Kris tertawa waktu mendengar itu. Matanya sedikit berkaca-kaca, lalu tidak.',
  'Dua orang yang dulu tidak pernah saling bicara, sekarang bicara dengan mudah. Mungkin karena tidak ada lagi yang harus dipertaruhkan. Mungkin karena dua tahun cukup untuk belajar bahasa yang satunya.',
  'Pelayan datang membawa pesanan Kris. Kopi, dan sepotong kue. Ada lilin kecil di atasnya.',
  'Bengkok.',
  'Kino menatap lilin itu. Lalu menatap Kris.',
  '"Hari spesial?" tanyanya.',
  '"Aku bilang ke kasirnya hari ini hari spesial," kata Kris. "Nggak tahu kenapa. Pas liat kamu dari pintu tadi, keluar aja."',
  'Kino tidak menjawab. Ia meraih korek di meja dan menyalakan lilinnya sendiri.',
  'Lalu, dengan wajah datar dan nada sok santai yang dipelajarinya dari Juna selama dua tahun, ia bertanya:',
  '"Jadi. Udah ada pacar belum? Kiw kiw."',
  'Kris tersedak kopinya. "Kino."',
  '"Jawab."',
  '"...Belum."',
  '"Hm." Kino memandang api lilin yang bergoyang. "Masih buka hati buat orang lama?"',
  'Kris diam lama. Lalu tersenyum lagi, senyum yang sama seperti tadi, tidak minta apa-apa.',
  '"Buka hati buat siapa aja," katanya. "Aku belajar itu dari seseorang. Dia bilang jangan nunggu."',
  'Kino meniup lilinnya.',
  'Asapnya naik tipis, berbelok, hilang. Dan untuk pertama kalinya, tidak ada yang terasa hilang bersamanya.',
];
// revisi epilog: tanpa "kiw kiw"; Kris tau mimpi S2-nya, tapi ga tau udah daftar & keterima
{
  const swap = (arr, from, to) => { const i = arr.findIndex(l => l === from); if (i < 0) throw new Error('swap ' + from); arr.splice(i, 1, ...[].concat(to)); };
  const drop = (arr, line) => { const i = arr.indexOf(line); if (i < 0) throw new Error('drop ' + line); arr.splice(i, 1); };
  const T = ENDINGS.turun.epi, W = ENDINGS.waktu.epi, J = ENDINGS.jeda.epi, M = ENDINGS.maafin.epi;
  swap(T, '"Jadi..." katanya. "Udah ada pacar belum? Kiw kiw."', '"Jadi..." katanya. "Udah ada pacar belum?"');
  ['Kino menatapnya datar. "Kiw kiw?"', '"Kata Juna itu cara nanya yang santai."', '"Juna nggak pernah punya pacar."', '"...Bener juga."'].forEach(l => drop(T, l));
  swap(T, 'Kris diam sebentar. Lalu, lebih pelan, tanpa kiw kiw: "Masih buka hati buat orang lama?"', 'Kris diam sebentar. Lalu, lebih pelan: "Masih buka hati buat orang lama?"');
  swap(W, 'Lalu, dengan wajah datar dan nada sok santai yang dipelajarinya dari Juna selama dua tahun, ia bertanya:', 'Lalu, dengan wajah datar dan nada yang terlalu sok santai, ia bertanya:');
  swap(W, '"Jadi. Udah ada pacar belum? Kiw kiw."', '"Jadi. Udah ada pacar belum?"');
  swap(J, '"aku keterima s2."', ['"kamu inget aku pernah bilang mau s2 sebelum umur tiga puluh?"', '"aku daftar. bulan september. diem-diem."', '"dan aku keterima."']);
  swap(J, '"dari lama aku pengen. aku mau nyoba sebelum umur tiga puluh. biar tumbuh. biar aku jadi orang yang lebih oke."', '"aku mau nyoba sekarang, mumpung belum tiga puluh. biar tumbuh. biar aku jadi orang yang lebih oke."');
  swap(J, '"iya."', ['"kamu beneran daftar..."', '"aku inget kamu ngomong itu di kafe deket kampus. umur dua puluh tiga. aku kira kamu udah lupa."', '"iya."']);
  swap(M, '"Ini..."', '"Ini... yang kamu bilang dari dulu itu? Kamu beneran daftar?"');
  swap(M, '"S2. Part-time. Aku keterima tadi pagi." Kino mengambil ponselnya kembali. "Jalan, Kris. Diklakson."', '"Iya. Part-time. Keterima tadi pagi." Kino mengambil ponselnya kembali. "Jalan, Kris. Diklakson."');
}

// story ucapan ultah tgl 25: foto berdua sama Kino
{
  const set = (user, ts, img) => { const s = STORIES.find(x => x.user === user && x.ts === ts); if (s) s.img = img; };
  set('suryalix', '2026-10-25T00:01', 'img/ig/pair-surya.jpg');
  set('gemilangrp', '2026-10-25T00:02', 'img/ig/pair-gemilang.jpg');
  set('junahann', '2026-10-25T00:03', 'img/ig/pair-juna.jpg');
  set('ilham.jeong', '2026-10-25T00:10', 'img/ig/pair-ilham.jpg');
  set('sadewaa.k', '2026-10-25T08:00', 'img/ig/pair-sadewa.jpg');
  STORIES.push({ user: 'bagasbinn', img: 'img/ig/pair-bagas.jpg', ts: '2026-10-25T00:05', txt: 'hbd. tidur yg banyak.' });
}

// ===== revisi gaya: ngikutin tulisan user (code-switch English, italic interlude, ***, Flashback, monolog batin) =====
// konvensi baris: '***' = jeda adegan, '_teks_' = italic, 'Flashback.' / 'Flashback end.' = penanda
{
  const at = (arr, needle) => { const i = arr.findIndex(l => l.startsWith(needle)); if (i < 0) throw new Error('needle: ' + needle); return i; };
  const after = (arr, needle, add) => arr.splice(at(arr, needle) + 1, 0, ...add);
  const before = (arr, needle, add) => arr.splice(at(arr, needle), 0, ...add);
  const swap = (arr, needle, to) => arr.splice(at(arr, needle), 1, ...[].concat(to));
  const M = ENDINGS.maafin.lines, J = ENDINGS.jeda.lines, T = ENDINGS.turun.lines, W = ENDINGS.waktu.lines;

  // --- Terakhir
  after(M, 'Ia keluar.', ['***']);
  after(M, 'Kino berhenti dua langkah darinya.', ['Sesak. Sesak sekali. Ia sudah menyiapkan kalimat-kalimat itu tiga kali, dan sekarang tidak ada satu pun yang tersisa.']);
  after(M, 'Keduanya diam. Lama.', ['_The silence. The distance. Eight years, sitting quietly between them._']);
  swap(M, '"Maaf," kata Kris akhirnya', '"I\'m sorry," kata Kris akhirnya, dari balik telapak tangannya. "Maaf. Aku bego. I was waiting for the words, Kino. And you were giving me everything, the whole time, and I didn\'t see it."');
  before(M, 'Mereka diam lagi. Kali ini diamnya berbeda.', [
    'Flashback.',
    'Delapan tahun lalu. Bioskop kecil dekat kampus, kursi paling belakang, film animasi tentang robot yang kesepian.',
    'Di menit keempat puluh, Kino mendengar suara sesenggukan di sebelahnya.',
    '"Kamu nangis?"',
    '"Nggak." Kris mengusap wajahnya dengan lengan jaket. "It\'s just... the robot. He\'s so alone, Kino."',
    '"Itu robot."',
    '"Robots have feelings too."',
    'Kino tidak bilang apa-apa. Tapi minggu depannya, dan minggu-minggu setelahnya, selama delapan tahun, ia selalu membawa tisu di saku.',
    'Flashback end.',
  ]);
  swap(M, '"Iya."', '"Okay. Iya." Suara Kris pecah. "I promise."');
  after(M, 'Kino tidak menarik tangannya.', ['Dalam hati kecilnya, ia sudah memaafkan Kris sejak lift berhenti di lantai satu. Ia cuma butuh Kris tahu bahwa itu tidak gratis.']);
  after(M, 'Kris melepaskan pintu itu sambil tertawa.', ['Kris lega. Bahagia. Dan untuk pertama kalinya seminggu ini, takut kehilangan di dadanya berubah jadi sesuatu yang lain: takut menyia-nyiakan.']);
  before(M, 'Siangnya mereka ke rumah Mama.', ['***']);

  // --- Jeda
  after(J, 'Hening. Kris tidak membantah.', ['_Two people. One building. Forty-four floors and forty-five, and somehow it had never felt this far._']);
  swap(J, '"Oke," katanya. "Aku tunggu."', '"Okay," katanya. "Aku tunggu. I\'ll wait, Kino."');
  swap(J, '"Aku mau." Suaranya lebih tegas sekarang.', '"I want to." Suaranya lebih tegas sekarang. "Seminggu ini aku nyari sesuatu di tempat yang salah. Aku nggak mau nyari lagi. Aku tunggu. Aku nggak akan chat duluan. Kalau kamu butuh apa-apa, anything, aku di lantai empat puluh lima."');
  swap(J, '"Selamat ulang tahun." Suara Kris pecah', '"Happy birthday." Suara Kris pecah di kata terakhir. "Maaf aku ngerusak ulang tahun kamu."');
  after(J, 'Kris menutup teleponnya.', ['***']);
  before(J, 'Bulan Agustus.', ['Flashback.']);
  after(J, 'Bulan Agustus.', ['Flashback end.']);
  before(J, 'Kino tetap duduk di lantai.', ['***']);
  before(J, 'Lalu ia menangis.', ['Sesak. Sesak sekali.']);
  before(J, 'Jam sembilan pagi, email itu datang.', ['***']);

  // --- Lobi
  swap(T, '"Hai," kata Kris.', '"Hey," kata Kris. Suaranya serak.');
  swap(T, '"Kino. Aku tahu aku salah.', '"Kino. I know. I know aku salah. Tapi please—"');
  swap(T, '"Aku pulang sekarang."', '"I\'m home now," katanya pelan. "Aku pulang sekarang."');
  after(T, 'Kalimat itu jatuh di antara mereka', ['_Eight years. One sentence. That was all it took._']);
  swap(T, 'Delapan tahun lalu, di kafe kecil dekat kampus, Kris juga membawakannya kue', [
    'Flashback.',
    'Kafe kecil dekat kampus. Kino umur dua puluh, ulang tahun pertama yang mereka rayakan berdua.',
    'Kris datang terlambat lima belas menit, terengah-engah, membawa sepotong kue dengan satu lilin yang ditancapkan miring.',
    '"Lilinnya jelek," kata Kino.',
    '"It\'s crooked on purpose." Kris nyengir. "Nanti tiap tahun aku bawain yang bengkok terus. Biar kamu inget aku."',
    '"Norak."',
    'Tapi Kino menyimpan lilin itu di dompetnya selama setahun.',
    'Flashback end.',
  ]);
  swap(T, '"Kino." Suara Kris di belakangnya', '"Kino." Suara Kris di belakangnya, nyaris putus. "Happy birthday."');
  before(T, 'Kris tidak bergerak untuk waktu yang lama.', ['***']);
  before(T, 'Di dalam lift, Kino bersandar ke dinding.', ['***']);

  // --- Selesai
  after(W, 'Ia tidak menelepon balik.', [
    'Flashback.',
    '"Ganti dong nama kontak aku," rengek Kris waktu itu, tiga tahun lalu, kepalanya di pangkuan Kino. "Yang romantis. Babe. Honey. My love."',
    '"Kris serigala."',
    '"Why a wolf?"',
    '"Biar kamu tahu diri. Galak, tapi setia."',
    'Kris tertawa sampai jatuh dari sofa. Nama kontak itu tidak pernah diganti.',
    'Flashback end.',
  ]);
  after(W, 'Satu jam.', ['_Wait for me. Don\'t wait for me. Wait. Don\'t._']);
  before(W, 'Kris tidak tahu mau ke mana.', ['***']);
  swap(W, 'Kris mengetik balasan.', 'Kris mengetik balasan. Menghapusnya. Mengetik lagi. Maaf. I\'m sorry. Aku sayang kamu. Please. Aku bego. Semua kata yang terlambat seminggu, atau mungkin terlambat setahun.');
  before(W, 'Jam dua lewat lima belas, Kino naik', ['***']);
  after(W, 'Tidak ada air mata.', ['Kosong. Kosong sekali.']);
  before(W, 'Pagi datang terlalu terang.', ['***']);

  // --- Epilog
  const eM = ENDINGS.maafin.epi, eJ = ENDINGS.jeda.epi, eT = ENDINGS.turun.epi, eW = ENDINGS.waktu.epi;
  swap(eM, '"Aku mau benerin semuanya," katanya akhirnya', '"I want to fix everything," katanya akhirnya, mata lurus ke jalan. "Aku udah bikin daftar. Aku mau belajar masak. Aku mau pulang jam lima beneran, bukan bohongan. Aku mau nanya tiap kali aku ngerasa aneh, bukan lari. Aku mau—"');
  swap(eM, '"Kamu hebat," katanya.', '"You did so well," katanya. Pelan. "Kamu hebat."');
  after(eM, 'Lalu, lebih pelan: "Makasih."', ['Kino lega. Bahagia. Takut juga, sedikit. Tapi lebih banyak bahagia.']);
  after(eM, 'Kino tertawa. Tawa yang keluar begitu saja', ['_Some things break. Some things bend. And some things, if you are lucky, learn how to stay._']);
  swap(eJ, '"dan kino. kamu hebat.', '"and kino. kamu hebat. dari dulu. aku aja yang telat bilang."');
  before(eJ, 'Di lantai empat puluh empat, untuk pertama kalinya', ['_Not yet. But soon._']);
  before(eT, 'Kris ada di dekat kasir.', ['***']);
  swap(eT, '"Denger kamu udah lulus," kata Kris.', '"Heard you graduated," kata Kris. "Congrats. Kamu hebat."');
  swap(eW, '"Boleh?"', '"Can I sit?" Lalu, cepat-cepat: "Boleh?"');
  after(eW, 'Bengkok.', ['_Some habits never leave. Some people never really do._']);
}

// ===== kapitalisasi rapi di ending/epilog: awal kalimat + nama =====
{
  const NAMES = ['kino', 'kris', 'soonie', 'doongie', 'dori', 'gemilang', 'sadewa', 'juna', 'surya', 'bagas', 'ilham', 'mina', 'yuna', 'hana', 'seongsu', 'oxford', 'mama', 'wahyu', 'lumen'];
  const cap = (w) => w[0].toUpperCase() + w.slice(1);
  const fix = (t) => {
    let s = t;
    s = s.replace(new RegExp(`\\b(${NAMES.join('|')})\\b`, 'gi'), (m) => cap(m.toLowerCase()));
    s = s.replace(/\bs2\b/gi, 'S2').replace(/\bkak (Mina)\b/gi, 'Kak $1').replace(/\btower b\b/gi, 'tower B');
    s = s.replace(/^([_"“]?)([a-z])/, (m, q, c) => q + c.toUpperCase());           // awal baris
    s = s.replace(/(^|\s)"([a-z])/g, (m, sp, c) => sp + '"' + c.toUpperCase());    // buka kutip
    s = s.replace(/([^.][.!?])(\s+)([a-z])/g, (m, p, sp, c) => p + sp + c.toUpperCase()); // abis titik (bukan ...)
    return s;
  };
  for (const E of Object.values(ENDINGS)) { E.lines = E.lines.map(fix); if (E.epi) E.epi = E.epi.map(fix); if (E.epiHead) E.epiHead = fix(E.epiHead); }
  for (const t of Object.values(ENDING_TAIL)) { t.sabar = fix(t.sabar); t.dingin = fix(t.dingin); }
}

// telpon tengah malem: Kino minta maaf kalo sayangnya kurang keliatan
(() => {
  const i = MIDNIGHT_CALL.findIndex(l => l[1] === 'aku emang ga jago ngomong. kamu tau itu dari awal.');
  if (i < 0) throw new Error('midnight needle');
  MIDNIGHT_CALL.splice(i + 1, 1,
    ['k', 'maaf ya kalo aku kurang keliatan sayangnya.'],
    ['k', 'tapi beneran, kris. aku sayang kamu. i really do.'],
    ['k', 'aku udah nyoba nunjukin. kayaknya effort aku belum cukup ya?'],
    ['k', 'harusnya kamu bilang ke aku. bukan ke orang lain.'],
    ['k', 'maaf kalo ternyata kamu capek sama aku yg begini.'],
    ['t', 'no. kino, jangan minta maaf. itu cukup. itu lebih dari cukup.'],
    ['t', 'aku liat semuanya sekarang. aku cuma telat ngeliatnya.'],
  );
})();

// ===== telpon/chat iseng: beda tiap hari DAN tiap waktu (pagi/siang/sore/malam/larut) =====
{
  const SL = { pagi: [6, 11], siang: [11, 15], sore: [15, 19], malam: [19, 24], larut: [0, 3] };
  const setSlot = (list, map) => Object.entries(map).forEach(([id, [d, s]]) => { const x = list.find(c => c.id === id); if (!x) throw new Error('slot ' + id); x.d = [d]; x.hours = SL[s]; });
  RANDOM_CALLS.push(
    { id: 'bagas2', who: 'Bagas', lines: [['t', 'lo cabut duluan tadi'], ['k', 'ngantuk'], ['t', 'oke.'], ['t', 'japchae sisa gue taro depan pintu lo'], ['k', 'makasih bin'], ['t', 'hm']] },
  );
  setSlot(RANDOM_CALLS, {
    mama1: [D20, 'pagi'], mina1: [D20, 'siang'], spam1: [D20, 'siang'], kurir1: [D20, 'sore'], juna1: [D20, 'malam'],
    ilham1: [D21, 'pagi'], hana1: [D21, 'siang'], surya1: [D21, 'siang'], gemilang1: [D21, 'sore'], bagas1: [D21, 'malam'],
    mama2: [D22, 'pagi'], juna2: [D22, 'siang'], sadewa1: [D22, 'siang'], surya2: [D22, 'sore'], spam2: [D22, 'sore'], bagas2: [D22, 'malam'],
    juna3: [D23, 'pagi'], mina2: [D23, 'siang'], kurir2: [D23, 'sore'], gemilang2: [D23, 'malam'], ilham2: [D23, 'malam'],
  });
  CALL_FOLLOW.bagas2 = { chat: 'bagas', ans: ['japchae nya udah gue ambil', ['oke. piring balikin']], miss: ['knp nelfon', ['japchae depan pintu lo. ambil']] };
  RANDOM_CHATS.push(
    { id: 'rc-larut21', chat: 'juna', msgs: [['them', 'bang lo masih online 👀'], ['them', 'besok standup loh. bukan gue ngingetin. gue juga belum tidur']], reply: ['lo juga tidur', ['1 episode lagi bang 🙏', 'oke 2']] },
    { id: 'rc-surya3', chat: 'surya', msgs: [['them', 'thank you for coming tonight bang 🥹'], ['them', 'you smiled twice. I counted']], reply: ['ga.', ['three times actually 🫶']] },
    { id: 'rc-larut22', chat: 'surya', msgs: [['them', 'bang are you awake?'], ['them', 'I can\'t sleep so I baked cookies at 1am 🍪']], reply: ['tidur.', ['okayy 🥺 leaving 2 at your door. no raisins']] },
    { id: 'rc-larut23', chat: 'juna', msgs: [['them', 'bang gue mimpi prod down 😭'], ['them', 'semua 500. lo marah. gue nangis di pantry']], reply: ['mimpi doang. tidur jun', ['takut bang kalo beneran 😭', 'oke tidur. amit2']] },
  );
  setSlot(RANDOM_CHATS, {
    'rc-mama': [D20, 'pagi'], 'rc-surya': [D20, 'siang'], 'rc-olive': [D20, 'siang'], 'rc-grup': [D20, 'sore'], 'rc-juna': [D20, 'malam'],
    'rc-larut21': [D21, 'larut'], 'rc-ilham': [D21, 'pagi'], 'rc-kru': [D21, 'siang'], 'rc-hana': [D21, 'sore'], 'rc-gemilang': [D21, 'sore'], 'rc-makan': [D21, 'malam'],
    'rc-larut22': [D22, 'larut'], 'rc-juna2': [D22, 'pagi'], 'rc-grup2': [D22, 'siang'], 'rc-sadewa': [D22, 'siang'], 'rc-mina': [D22, 'siang'], 'rc-bagas': [D22, 'sore'], 'rc-surya3': [D22, 'malam'],
    'rc-larut23': [D23, 'larut'], 'rc-kru2': [D23, 'pagi'], 'rc-mama2': [D23, 'siang'], 'rc-gemilang2': [D23, 'sore'], 'rc-surya2': [D23, 'sore'], 'rc-sadewa2': [D23, 'malam'],
    'rc-gemilang3': [D24, 'larut'],
  });
  RANDOM_CALL_WINDOW[0] = '2026-10-20T00:00';
}

// ===== Galeri: tiap hari nambah foto (end = cuma di ending itu) =====
PHOTOS.push(
  { img: 'img/ig/kris-3.jpg', ts: '2026-09-14T22:10', place: 'Apart' },
  { img: 'img/ig/kris-5.jpg', ts: '2026-09-28T23:30', place: 'Apart' },
  { img: 'img/ig/kris-7.jpg', ts: '2026-10-06T09:15', place: 'Kantor' },
  { img: 'img/ig/minchan-1.jpg', ts: '2023-10-31T21:00', place: 'Halloween Hongdae' },
  { img: 'img/ig/kino-4.jpg', ts: '2026-10-20T07:40', place: 'Tower B' },
  { img: 'img/ig/kino-1.jpg', ts: '2026-10-21T08:30', place: 'Lift' },
  { img: 'img/ig/kino-0.jpg', ts: '2026-10-22T16:45', place: 'Apart' },
  { img: 'img/lapor-1.jpg', ts: '2026-10-22T21:40', place: 'Mapo' },
  { img: 'img/ig/kino-5.jpg', ts: '2026-10-23T08:05', place: 'Lobi' },
  { img: 'img/ig/pair-surya.jpg', ts: '2026-10-25T00:10', place: 'Disimpan dari Instagram' },
  { img: 'img/ig/pair-juna.jpg', ts: '2026-10-25T00:12', place: 'Disimpan dari Instagram' },
  { img: 'img/ig/kris-6.jpg', ts: '2026-10-25T09:20', place: 'Apart', end: 'maafin' },
  { img: 'img/ig/kino-3.jpg', ts: '2026-10-25T12:05', place: 'Jalan ke rumah mama' },
  { img: 'img/ig/kris-8.jpg', ts: '2026-10-25T12:30', place: 'Mobil', end: 'maafin' },
);

// ===== Galeri: selca/kucing Kino tambahan (img/gal/kn-*) =====
PHOTOS.push(
  { img: 'img/gal/kn-0.jpg', ts: '2026-10-20T22:40', place: 'Apart' },
  { img: 'img/gal/kn-1.jpg', ts: '2026-10-21T06:50', place: 'Apart' },
  { img: 'img/gal/kn-2.jpg', ts: '2026-10-21T20:15', place: 'Apart' },
  { img: 'img/gal/kn-3.jpg', ts: '2026-10-22T07:30', place: 'Apart' },
  { img: 'img/gal/kn-4.jpg', ts: '2026-10-22T16:50', place: 'Apart' },
  { img: 'img/gal/kn-5.jpg', ts: '2026-10-22T23:55', place: 'Apart' },
  { img: 'img/gal/kn-6.jpg', ts: '2026-10-23T07:55', place: 'Lobi' },
  { img: 'img/gal/kn-7.jpg', ts: '2026-10-23T15:10', place: 'Auditorium lt. 2' },
  { img: 'img/gal/kn-8.jpg', ts: '2026-10-24T03:40', place: 'Apart' },
  { img: 'img/gal/kn-9.jpg', ts: '2026-10-24T07:20', place: 'Apart' },
  { img: 'img/gal/kn-10.jpg', ts: '2026-10-25T08:30', place: 'Apart' },
  { img: 'img/gal/kn-11.jpg', ts: '2026-10-25T18:00', place: 'Rumah mama' },
  { img: 'img/gal/kn-12.jpg', ts: '2026-10-13T12:20', place: 'Kantor' },
  { img: 'img/gal/kn-13.jpg', ts: '2026-10-17T21:30', place: 'Apart' },
  { img: 'img/gal/kn-14.jpg', ts: '2026-09-18T09:40', place: 'Pesawat ke Busan' },
);
{ const p = PHOTOS.find(x => x.img === 'img/ig/kino-0.jpg'); p.ts = '2026-10-22T12:10'; const q = PHOTOS.find(x => x.img === 'img/ig/kino-5.jpg'); q.ts = '2026-10-23T18:30'; q.place = 'Minimarket'; }

// ===== Kino ikut gerak tiap hari di X (@kinoleee) & IG =====
X_POSTS.push(
  ['xk7', 'kino', '2026-10-20T07:45', 'kopi pertama. ga ngefek.', '', [['juna', 'BANG UDAH MELEK? 😳']], 37],
  ['xk8', 'kino', '2026-10-20T21:10', 'masak kebanyakan lagi.', '', [['surya', 'I volunteer!! 🙋'], ['kino', 'telat. udah abis']], 52],
  ['xk9', 'kino', '2026-10-21T12:30', 'intern nanya tombol merah. gue tua 5 tahun dalam 3 detik.', '', [['ilham', 'bang 🥺 gue cuma nanya beneran'], ['juna', 'WKWKWKWK']], 71],
  ['xk10', 'kino', '2026-10-21T23:30', 'iyaa iyaa tidur.', '', [['surya', 'good boyyy 🫶'], ['kino', 'diem.']], 64],
  ['xk11', 'kino', '2026-10-22T18:20', 'hari ini ngomong 30 menit nonstop. rekor.', '', [['juna', 'SAMA SIAPA BANG?? 👀'], ['kino', 'rahasia.']], 58],
  ['xk12', 'kino', '2026-10-23T09:05', 'town hall jam 3. doain gue ga ketiduran.', '', [['juna', 'gue yg bakal ketiduran bang 😭']], 40],
  ['xk13', 'kino', '2026-10-23T21:55', 'paket ga ada nama pengirimnya. kalo isinya aneh2 gue udah tau siapa.', '', [['juna', 'BUKAN GUE 😭'], ['kino', 'iya bukan lo. lo ga sanggup bayar ongkir']], 83],
  ['xk14', 'kino', '2026-10-24T21:30', 'aman. jangan rame.', '', [['juna', 'BANG 😭😭'], ['ilham', 'bang istirahat beneran ya. gue ga mau kehilangan senior gue 😭'], ['surya', '🫶🫶🫶']], 311],
);
STORIES.push(
  { user: 'kinoo.lee', img: 'img/gal/kn-1.jpg', ts: '2026-10-21T07:00', txt: 'rabu. udah capek.' },
  { user: 'kinoo.lee', img: 'img/gal/kn-6.jpg', ts: '2026-10-23T08:00', txt: 'dingin bgt yaelaah' },
  { user: 'kinoo.lee', img: 'img/gal/kn-10.jpg', ts: '2026-10-25T10:00', txt: 'iyaa udah tua. makasih semuaa' },
);
INSTA.push(
  { user: 'kinoo.lee', img: 'img/gal/kn-2.jpg', ts: '2026-10-21T21:00', cap: 'tidur cepet hari ini. katanya.', likes: '388' },
  { user: 'kinoo.lee', img: 'img/gal/kn-4.jpg', ts: '2026-10-22T19:30', cap: 'rapi dikit. jangan nanya kenapa.', likes: '455' },
);

// ===== Kamera: 23–25 video baru, beda2 =====
Object.assign(CAMERA_BY_DAY, {
  '2026-10-23': { src: 'vid/kino-cam-23.mp4', start: 0 },
  '2026-10-24': { src: 'vid/kino-cam-24.mp4', start: 0 },
  '2026-10-25': { src: 'vid/kino-cam-25b.mp4', start: 0 },
});

// ===== suara: Ilham lebih care & emosional (tsundere tipis), Kino sesekali huruf dobel =====
const REWORD = {
  'bukan berarti gue kepikiran ya': 'gue jadi kepikiran lo sama bang kris sih bang. lo oke kan?',
  'bukan berarti gue ga bisa sendiri ya': 'gue belajar banyak dari lo. serius',
  'bukan gue ga siap. konfirmasi doang': 'gue deg2an dikit 😅',
  'bukan gue khawatir. gue cuma ga mau handle prod sendirian': 'gue khawatir beneran bang. tadi gue liat lo jatoh 😢',
  'bukan gue sakit hati ya': 'aduh bang 😭 sakit',
  'ini bukan permintaan. ini perintah intern': 'bang please bangun 😭',
  'gue ga nangis. juna yg nangis': 'gue sama juna nangis bang',
  '...gue dikit': 'gue lega banget lo udah sadar 🥺',
  'hbd bang. bukan gue yg pertama ngucapin ya, gpp 🦊': 'hbd bang 🦊 makasih udah sabar ngajarin gue. sehat terus ya, jangan pingsan lagi',
  'iya emang orangnya gitu, nyebelin': 'emang orangnya gitu. tapi gue sayang senior gue 🥺',
  'bang mata lo merah. bukan gue merhatiin': 'bang mata lo merah. lo oke? 🥺',
  'bang. lo pucet banget. bukan gue merhatiin': 'bang. lo pucet banget. duduk dulu please',
  'bang. bukan gue panik ya. cuma nanya': 'bang maaf ganggu 🙏 mau nanya',
  'bukan gue mau mencet tadi': 'maaf bang 😅 makasih udah ngingetin',
  'bukan gue takut ya': 'jujur gue takut dikit bang',
  '...makasih': 'makasih bang 🥺 beneran',
  'bukan gue ngapa2in ya': 'makasih bang 🙏',
  '...oke. bukan berarti gue butuh': 'oke bang 🥺 makasih banyak',
  'bukan gue mau ngerjain. nanya doang': 'kalo punya gue, gue kerjain sekarang bang',
  '...oke 🙄': 'oke bang! 💪',
  'yaudah gue kerjain. bukan karena lo nyuruh': 'gue kerjain sekarang',
  // Kino: imut dikit, jarang
  'ok kak': 'okee kak',
  'ck. iya iya turun': 'ck. iyaa iyaa turun',
  'iya ma': 'iyaa ma',
};
{
  const seen = new Set();
  const walk = (v) => { if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v); for (const k of Object.keys(v)) { const x = v[k]; if (typeof x === 'string' && REWORD[x] !== undefined) v[k] = REWORD[x]; else walk(x); } };
  [CHATS, REPLIES, RANDOM_CALLS, RANDOM_CHATS, CALL_FOLLOW, X_POSTS, TYPE_KRIS, typeof TYPE_LINES !== 'undefined' ? TYPE_LINES : null, typeof CALL_LINES !== 'undefined' ? CALL_LINES : null].forEach(walk);
}

// ===== Galeri: foto lama kerjaan (wk-*) & jalan2 (tr-*) =====
PHOTOS.push(
  { img: 'img/gal/wk-0.jpg', ts: '2026-10-10T23:42', place: 'Kantor' },
  { img: 'img/gal/wk-1.jpg', ts: '2026-09-30T19:05', place: 'Kantor' },
  { img: 'img/gal/wk-2.jpg', ts: '2026-10-08T01:15', place: 'Kantor' },
  { img: 'img/gal/wk-3.jpg', ts: '2026-08-27T22:30', place: 'Apart' },
  { img: 'img/gal/wk-4.jpg', ts: '2026-09-26T23:44', place: 'Apart' },
  { img: 'img/gal/wk-5.jpg', ts: '2026-07-14T21:10', place: 'Kantor' },
  { img: 'img/gal/wk-6.jpg', ts: '2026-06-02T09:20', place: 'Kantor' },
  { img: 'img/gal/wk-7.jpg', ts: '2026-05-19T18:40', place: 'Kantor' },
  { img: 'img/gal/wk-8.jpg', ts: '2026-10-01T20:30', place: 'Kantor' },
  { img: 'img/gal/wk-9.jpg', ts: '2026-04-11T02:05', place: 'War room' },
  { img: 'img/gal/wk-10.jpg', ts: '2026-03-03T22:50', place: 'Kantor' },
);

// ===== Galeri: trip Jepang (img/gal/jp-*), tanpa orang =====
PHOTOS.push(
  { img: 'img/gal/jp-0.jpg', ts: '2026-04-04T19:40', place: 'Kyoto' },
  { img: 'img/gal/jp-1.jpg', ts: '2026-04-05T10:15', place: 'Onomichi' },
  { img: 'img/gal/jp-2.jpg', ts: '2026-05-04T11:20', place: 'Kamakura' },
  { img: 'img/gal/jp-3.jpg', ts: '2025-11-14T16:05', place: 'Tokyo' },
  { img: 'img/gal/jp-4.jpg', ts: '2025-11-15T08:30', place: 'Tokyo' },
  { img: 'img/gal/jp-5.jpg', ts: '2025-11-15T13:10', place: 'Tokyo' },
  { img: 'img/gal/jp-6.jpg', ts: '2026-05-05T09:00', place: 'Kamakura' },
  { img: 'img/gal/jp-7.jpg', ts: '2026-04-04T21:30', place: 'Kyoto' },
  { img: 'img/gal/jp-8.jpg', ts: '2025-11-16T11:45', place: 'Tokyo' },
  { img: 'img/gal/jp-9.jpg', ts: '2026-04-06T15:20', place: 'Tokyo' },
);

// ===== Kino ke Kris: gemesin dikit, ga sadar (terus buru2 ngeles) =====
more('kris', [
  ['date', '2026-10-11'],
  ['me', 'wallpaper aku juga ganti', '23.40'], ['them', 'KINO 🥹🥹', '23.40'], ['me', 'bukan karena kamu. fotonya bagus aja', '23.41'], ['them', 'iya iya 🥹', '23.41'],
  ['date', '2026-10-16'],
  ['me', 'aku beliin kimchi yg kamu suka', '22.55'], ['me', 'bukan buat kamu. kebetulan lewat', '22.55'], ['them', 'kebetulan lewat jam 10 malem 🙂', '22.56'], ['me', 'diem', '22.56'],
  ['date', '2026-10-19'],
  ['me', 'udah minum? foto gelasnya', '21.45'],
  ['date', '2026-10-20'],
  ['me', 'nanti kalo pulang ketok aja. aku belum tidur', '22.31'], ['me', 'kebetulan', '22.31'],
  ['date', '2026-10-21'],
  ['me', 'roti di depan pintu kamu. jangan nanya', '08.42'],
  ['date', '2026-10-22'],
  ['me', 'eh jaket kamu kan di aku. bawa yg abu2 aja', '09.11'],
  ['me', 'night', '23.11'], ['me', '🐰', '23.11'], ['me', 'kepencet', '23.12'],
  ['date', '2026-10-23'],
  ['me', 'jangan cuma kopi', '12.31'],
]);

// ===== priv X Kino: yg masih kaku ditulis ulang, ngalir, sedih ditutup becanda =====
{
  const RE = {
    '2026-10-22T00:20': 'oke kino. tgl 25 lo ngomong yg jelas ya, jangan kabur ke dapur kayak biasa, jangan dibecandain juga. tiga hari lagi. deg2an anjir kayak mau sidang skripsi',
    '2026-10-22T23:15': 'katanya "sendiri". yaudah gue percaya kok. lagi latihan percaya nih, doain ya lulus',
    '2026-10-23T09:05': 'chat dari jam 9 masih centang satu. mungkin hp nya mati kali ya. iya pasti mati. pasti',
    '2026-10-24T08:10': 'prod down dari pagi. jujur ada lega nya dikit sih, akhirnya ada yg bisa gue benerin hari ini wkwk',
    '2026-10-24T17:22': 'udah gue bilang nanti. sekarang gue cuma pengen prod nyala lagi, soalnya cuma itu yg kayaknya masih bisa gue benerin hari ini',
    '2026-10-24T17:29': 'prod up, error 0%. tangan gue gemeteran tapi bodo amat. bikin kopi dulu ah abis itu tidur tiga hari',
    '2026-10-25T00:30': 'resmi nambah tua. catetan buat tgl 25 masih ada di hp, poin kedua belum gue coret. masih bisa ga ya',
    '2026-10-26T03:00': 'tumben tidur nyenyak. aneh ya, sedih tapi nyenyak. mungkin capek nangisnya wkwk',
    '2026-10-26T12:30': 'kalungnya udah gue pakein ke anak2. yg pesen belum gue apa2in. nanti deh, kalo kepala gue udah ga penuh',
    '2026-10-27T22:00': 'kalungnya gue simpen di laci. bagus banget lagi, nyebelin. kenapa sih lo pesennya dari agustus',
    '2026-10-21T14:30': 'staging down 2x, direstart nyala lagi. enak ya jadi server. kalo gue bisa direstart juga mau dong',
  };
  ALT.forEach(a => { if (RE[a[0]]) a[1] = RE[a[0]]; });
  X_POSTS.forEach(p => { if (p[1] === 'alt' && RE[p[2]]) p[3] = RE[p[2]]; });
}

// ===== Kino ke Kris: nonchalant, tapi ga dingin =====
{
  const W = {
    'makasih.': 'makasih. kamu belum tidur?', 'udah.': 'udah. tiga kali.', 'dikit.': 'dikit. udah minum obat kok',
    'ngomong.': 'yaudah. ngomong aja, aku dengerin', 'itu urusan kamu.': 'hm. oke. makasih udah bilang', 'jujur. akhirnya.': 'nah. jujur gitu kan enak',
    'ngapain nelfon jam segini': 'tumben nelfon jam segini. kenapa?', 'kerja. kenapa': 'lagi kerja. kenapa?', 'masak. kenapa': 'lagi masak. kenapa?',
    'terserah. soonie yg nunggu, bukan aku': 'yaudah. soonie yg nunggu. aku juga dikit sih', 'hm': 'hmm', 'oke. kerja sana': 'oke. semangat kerjanya',
    'belum': 'belum. bentar lagi', 'tidur.': 'udah, tidur sana. capek kan', 'kenapa sorry': 'kenapa sorry? gapapa kok',
    'meeting kok bisa nelfon': 'meeting kok bisa nelfon? kangen ya', 'pagi': 'pagii', 'udah tau.': 'iya udah tau kok', 'hm. tidur di mana': 'hm. tidurnya di mana? jangan di kursi',
    'oke.': 'oke. jangan kecapean ya', 'oh. oke.': 'oh. oke. nanti aja deh',
    'nanti kita ngomong.': 'nanti kita ngomong.', 'sekarang jangan ganggu aku dulu.': 'sekarang aku mau benerin prod dulu.',
    'jangan ke sini.': 'jangan ke sini dulu.', 'aku gapapa. pulang.': 'aku gapapa kok. kamu pulang, istirahat.',
  };
  const fixLines = (ls) => ls.forEach(l => { if (l[0] === 'k' && W[l[1]]) l[1] = W[l[1]]; });
  fixLines(MIDNIGHT_CALL);
  Object.values(KRIS_CALL).forEach(v => (Array.isArray(v) ? v : [v]).forEach(o => o && o.lines && fixLines(o.lines)));
  REPLIES.filter(r => r.chat === 'kris' && !r.epi).forEach(r => r.opts.forEach(o => { o.me = o.me.map(t => W[t] || t); }));
  CHATS.find(c => c.id === 'kris').msgs.forEach(m => { if (m[0] === 'me' && m[2] && m[2].startsWith('17.2') | m[2] && m[2].startsWith('20.5') && W[m[1]]) m[1] = W[m[1]]; });
}
CHATS.find(c => c.id === 'kris').msgs.forEach(m => { if (m[0] === 'me' && m[1] === 'sekarang jangan ganggu aku dulu.') m[1] = 'sekarang aku mau benerin prod dulu.'; });

// ===== Kino ke temen2: tetep singkat & nonchalant, tapi ga ketus (ke Kris tetep paling hangat) =====
{
  const ALL = {
    'jgn chat gue jam segini': 'jgn chat jam segini bin. tidur', 'ambil sendiri ke kris': 'ambil sendiri ke kris ya. gue ga ikut2',
    'bukan salah lo. lebay': 'bukan salah lo lang. udah jangan dipikirin', 'bukan salah lo lang. berlebihan.': 'bukan salah lo lang. santai aja',
    'ga diajak': 'ga diajak wkwk', 'have fun': 'have fun ya', 'puitis amat lo': 'puitis amat lo wkwk', 'tanya sendiri ke orangnya': 'tanya sendiri ke orangnya lang. gue juga pengen tau',
    'gausah heboh': 'gausah heboh, gue cuma nambah umur', 'jgn heboh': 'jgn heboh ya', 'urus urusan lo masing2': 'udah ah, urus urusan masing2 dulu',
    'jawaban apaan itu': 'jawaban apaan itu ham wkwk', 'kerjain.': 'kerjain ya. kalo mentok bilang',
    'ga lucu': 'ga lucu jun', 'gausah aneh2 lo': 'gausah aneh2 jun', 'tumben amat': 'tumben amat lo', 'ya emang salah lo jun': 'ya emang salah lo jun. gpp, besok benerin bareng',
    'kerja.': 'kerja dulu yuk.', 'jangan buka twitter. kerja.': 'jangan buka twitter dulu. fokus ya', 'nangis nanti. pegang monitoring.': 'nangisnya nanti ya. pegang monitoring dulu',
    'resign abis prod nyala.': 'resign nya abis prod nyala aja wkwk', 'log.': 'kirim log nya.', 'gue gapapa. jangan lebay': 'gue gapapa kok. jangan lebay ah',
    'terus lo mau gue ngapain': 'terus... lo mau gue ngapain dew', 'urusan lo?': 'kenapa sur? gue aman kok', 'surya.': 'surya...', 'aman.': 'aman kok sur',
    'bagus. tutup': 'bagus. udah ya, gue tutup', 'ga laper': 'ga laper lang', 'tutup.': 'udah ya sur, tutup', 'udah liat. biasa aja': 'udah liat. bagus sih. dikit',
    'punya lo': 'punya lo ham. semangat', 'berisik': 'berisik ah wkwk', 'gue mau tidur. diem': 'gue mau tidur dulu ya. jgn berisik',
    'gapapa.': 'gapapa kok han', 'dateng.': 'dateng kok',
  };
  const SCOPED = { bagas: { 'terus': 'terus kenapa bin?', 'kenapa': 'kenapa bin?', 'oke.': 'oke bin.' }, juna: { 'terus?': 'terus kenapa jun?' }, grup: { 'ngga.': 'ngga kok' } };
  const fix = (t, chat) => (SCOPED[chat] && SCOPED[chat][t]) || ALL[t] || t;
  CHATS.forEach(c => { if (c.id === 'kris') return; c.msgs.forEach(m => { if (m[0] === 'me') m[1] = fix(m[1], c.id); }); });
  RANDOM_CALLS.forEach(c => c.lines.forEach(l => { if (l[0] === 'k') l[1] = fix(l[1]); }));
  { const s = RANDOM_CALLS.find(c => c.id === 'surya1'); s.lines.forEach(l => { if (l[0] === 'k' && l[1] === 'ga') l[1] = 'ga usah sur'; }); const j = RANDOM_CALLS.find(c => c.id === 'juna1'); j.lines.forEach(l => { if (l[0] === 'k' && l[1] === 'apa') l[1] = 'apa jun'; }); }
  RANDOM_CHATS.forEach(r => { if (r.reply) r.reply[0] = fix(r.reply[0], r.chat); });
  { const r = RANDOM_CHATS.find(x => x.id === 'rc-surya'); } 
  RANDOM_CHATS.forEach(r => { if (r.reply && r.chat === 'surya') { if (r.reply[0] === 'tidur.') r.reply[0] = 'tidur sur.'; if (r.reply[0] === 'ga.') r.reply[0] = 'ga ah.'; } });
  REPLIES.filter(r => r.chat !== 'kris').forEach(r => r.opts.forEach(o => { o.me = o.me.map(t => fix(t, r.chat)); }));
  if (typeof TYPE_LINES !== 'undefined') { const walk = (o, k) => { if (Array.isArray(o)) { if (typeof o[0] === 'string' && (Array.isArray(o[1]) || o[1] === null)) { o[0] = fix(o[0]); if (k === 'Juna' && o[0] === 'tidur') o[0] = 'tidur jun'; } else o.forEach(x => walk(x, k)); } else if (o && typeof o === 'object') for (const kk of Object.keys(o)) walk(o[kk], kk); }; walk(TYPE_LINES, ''); }
}

// ===== buang disclaimer "bukan karena peduli / kebetulan lewat" (ga usah kebanyakan ngejelasin) =====
{
  const X = {
    'bukan karena kamu. fotonya bagus aja': null, 'iya iya 🥹': null,
    'bukan buat kamu. kebetulan lewat': null, 'kebetulan lewat jam 10 malem 🙂': 'aaa makasih 🥹', 'kebetulan': null,
    'bukan gue panik. kebetulan jalan ke sana': 'otw ke sana',
    'tapi ya. gue mau bilang biar ga salah paham. bukan karena gue peduli': 'tapi gue rasa lo harus tau',
    'bukan gue peduli. cuma info': null, 'bukan gue khawatir ya. klarifikasi doang': null, 'bukan gue ga liat. ngetes lo doang': null,
    'bukan gue ceroboh ya. lupa naro doang': null, 'bukan gue nanya karena peduli ya': null,
    'besok standup loh. bukan gue ngingetin. gue juga belum tidur': 'besok standup loh. gue juga belum tidur sih',
    'bukan gue butuh banget ya': null, 'ironis. bukan gue nyindir ya': 'ironis.', 'dikit. bukan urusan gue sih': 'dikit.',
    'oke. bukan karena lo nyuruh ya': 'oke.', 'lo juga. bukan gue peduli': 'lo juga.', 'bukan gue nungguin ya': null, 'jalan. bukan berarti lo jenius ya': 'jalan.',
  };
  const seen = new Set();
  const walk = (arr) => {
    if (!arr || typeof arr !== 'object' || seen.has(arr)) return; seen.add(arr);
    if (Array.isArray(arr)) {
      for (let i = arr.length - 1; i >= 0; i--) {
        const x = arr[i];
        if (typeof x === 'string' && x in X) { if (X[x] === null && i > 0) arr.splice(i, 1); else if (X[x] !== null) arr[i] = X[x]; }
        else if (Array.isArray(x) && typeof x[1] === 'string' && x[1] in X && /^(me|them|t|k|[A-Z])/.test(String(x[0]))) { if (X[x[1]] === null) arr.splice(i, 1); else x[1] = X[x[1]]; }
        else walk(x);
      }
    } else for (const k of Object.keys(arr)) walk(arr[k]);
  };
  // 'iya iya 🥹' cuma dibuang di chat kris tgl 11 (bales "bukan karena kamu")
  const kris = CHATS.find(c => c.id === 'kris');
  for (let i = kris.msgs.length - 1; i >= 0; i--) { const m = kris.msgs[i]; if (m[1] === 'iya iya 🥹' && m[2] === '23.41') kris.msgs.splice(i, 1); if (m[0] === 'me' && m[1] === 'diem' && m[2] === '22.56') kris.msgs.splice(i, 1); }
  delete X['iya iya 🥹'];
  [CHATS, RANDOM_CHATS, CALL_FOLLOW, REPLIES, typeof TYPE_LINES !== 'undefined' ? TYPE_LINES : null, X_POSTS].forEach(walk);
}

// ===== Kino: pendek boleh, bad vibe jangan =====
{
  const V = {
    'ngga. knp emang': 'ngga, kenapa emang?', 'ngga. knp': 'ngga, kenapa jun?', 'iya.': 'iya dong', 'kenapa': 'kenapa dew?', 'item': 'item dong', 'pake': 'pake, yg banyak',
    'knp': 'kenapa?', 'knp nelfon': 'tadi nelfon kenapa?', '?': 'kenapa?', 'makasih han.': 'makasih ya han',
    'ambil. balikin.': 'ambil aja, nanti balikin ya', 'ga lucu jun': 'jun wkwk', 'oke. venti.': 'oke, venti ya',
    'hm. cepet. dori udah klaim': 'cepet ya, dori udah klaim', 'hm. aku catet': 'oke, aku catet ya', 'hm. mandi dulu baru tidur': 'mandi dulu baru tidur ya',
    'iya. jangan lupa makan': 'iya, jangan lupa makan', 'oke. jangan begadang': 'oke, jangan begadang ya', 'oke. jangan kedinginan': 'oke, jangan kedinginan',
    'oke. break nya jangan lama2': 'oke, break nya jangan lama2 ya', 'ngga. nanti juga kamu cerita sendiri': 'ngga kok, nanti juga kamu cerita sendiri',
    'kaos kaki kamu udah aku cuci. ambil.': 'kaos kaki kamu udah aku cuciin. ambil ya', 'iya. sarapan dulu sana': 'iya, sarapan dulu sana',
    'iya. bawa jaket, kantor kamu dingin': 'iya, bawa jaket ya. kantor kamu dingin', 'oke. selimutnya jangan lupa': 'oke, selimutnya jangan lupa', 'telat': 'telat wkwk',
    'ck. stop semua cron.': 'stop semua cron dulu.', 'rollback. sekarang.': 'rollback sekarang ya.', 'gue balik.': 'gue balik. aman',
    'hm. oke. makasih udah bilang': 'oke. makasih udah bilang', 'juna.': 'juna wkwk', 'tidur sur.': 'tidur sur, udah malem',
    'jgn bikin aneh2 besok': 'jgn bikin aneh2 besok ya wkwk', 'tidur. besok ngantor': 'tidur ham, besok ngantor', 'udah. tadi pagi': 'udah kok, tadi pagi',
    'kimchi asem. udah.': 'kimchi yg asem. itu aja', 'kenapa emang': 'kenapa emang sur?', 'jgn kasih makan sembarangan': 'jgn kasih makan sembarangan ya sur',
    'angkat.': 'angkat dong', 'jangan ke sini.': 'jangan ke sini dulu ya', 'jgn dramatis. gue gapapa': 'gue gapapa kok lang', 'udah. gue gapapa. jgn heboh': 'gue gapapa kok jun', 'jgn panik': 'jgn panik ya ham',
    'diem': 'diem wkwk', 'diem.': 'diem ah', 'rollback.': 'rollback jun wkwk', 'aman.': 'aman kok', 'rahasia.': 'rahasia wkwk',
  };
  const isKino = (x) => x === 'me' || x === 'k' || x === 'kino';
  const seen = new Set();
  const walk = (v) => {
    if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v);
    if (Array.isArray(v)) {
      if (isKino(v[0]) && typeof v[1] === 'string' && V[v[1]]) { v[1] = V[v[1]]; return; }
      if (typeof v[0] === 'string' && V[v[0]] && (Array.isArray(v[1]) || v[1] === null)) v[0] = V[v[0]]; // ketikan Kino [teks, balasan]
      v.forEach(walk);
    } else for (const k of Object.keys(v)) walk(v[k]);
  };
  [CHATS, RANDOM_CALLS, KRIS_CALL, MIDNIGHT_CALL, CALL_FOLLOW, TYPE_KRIS, typeof TYPE_LINES !== 'undefined' ? TYPE_LINES : null, X_POSTS].forEach(walk);
  RANDOM_CHATS.forEach(r => { if (r.reply && V[r.reply[0]]) r.reply[0] = V[r.reply[0]]; });
  REPLIES.forEach(r => r.opts.forEach(o => { o.me = o.me.map(t => V[t] || t); }));
}

// ===== Kino ke Kris: agak manja, ga sadar =====
{
  const M = {
    'jangan pulang kemaleman. kantor kamu ga ada kasur': 'jangan pulang kemaleman yaa. kantor kamu ga ada kasur, nanti pegel',
    'udah makan?': 'udah makan belummm', 'pulang ga malem ini?': 'malem ini pulang ga?',
    'oke, selimutnya jangan lupa': 'oke, selimutnya jangan lupa. nanti masuk angin minta peluk lagi',
    'nanti kalo pulang ketok aja. aku belum tidur': 'nanti kalo pulang ketok aja yaa. aku belum ngantuk',
    'cepet ya, dori udah klaim': 'cepet pulangg, dori udah klaim', 'oke, jangan begadang ya': 'okee, jangan begadang yaa',
    'oke. semangat kerjanya': 'semangat kerjanyaa', 'tumben nelfon jam segini. kenapa?': 'tumben nelfon jam segini. kenapaa?',
    'iya, sarapan dulu sana': 'iyaa, sarapan dulu sana', 'jangan cuma kopi': 'jangan cuma kopi ih',
  };
  const fix = (t) => M[t] || t;
  CHATS.find(c => c.id === 'kris').msgs.forEach(m => { if (m[0] === 'me' && !(m[3] && (m[3].epi || m[3].end))) m[1] = fix(m[1]); });
  Object.values(KRIS_CALL).forEach(v => (Array.isArray(v) ? v : [v]).forEach(o => o && o.lines && o.lines.forEach(l => { if (l[0] === 'k') l[1] = fix(l[1]); })));
  more('kris', [
    ['date', '2026-10-20'], ['me', 'soonie nungguin kamu di pintu. aku juga dikit', '21.15'],
    ['date', '2026-10-21'], ['me', 'kamu udah lama ga elus2 kepala aku. kepala soonie maksudnya', '22.10'],
  ]);
  TYPE_KRIS['2026-10-21'] = (TYPE_KRIS['2026-10-21'] || []).concat([['pulangnya jangan malem2 yaa', null, { from: '18:00' }]]);
  TYPE_KRIS['2026-10-22'] = (TYPE_KRIS['2026-10-22'] || []).concat([['bawain aku roti dong pas pulang', ['nanti ya kino 🙏'], { to: '12:00' }]]);
}
CHATS.find(c => c.id === 'kris').msgs.forEach(m => { if (m[0] !== 'me') return; if (m[1] === 'kamu udah lama ga elus2 kepala aku. kepala soonie maksudnya') m[1] = 'kamu udah lama ga elus2 kepala aku'; if (m[1] === 'soonie nungguin kamu di pintu. aku juga dikit') m[1] = 'soonie nungguin kamu di pintu. aku juga'; if (m[1] === 'ck. iyaa iyaa turun') m[1] = 'iyaa iyaa turun'; });

// ===== Kris ketauan boong: Kino "deg", tapi ga langsung berubah — mancing dulu =====
more('kris', [
  ['date', '2026-10-20'],
  ['me', 'lembur sama siapa aja?', '18.58'], ['them', 'sama tim aku 😅', '19.03'], ['me', 'oh. oke. semangat yaa', '19.04'],
  ['date', '2026-10-21'],
  ['me', 'filmnya— eh. meetingnya udah kelar belum', '22.36'],
  ['date', '2026-10-22'],
  ['me', 'kantor kamu lantai berapa sih? lupa', '23.50'],
  ['date', '2026-10-23'],
  ['me', 'kamu lagi di kantor kan? aku mau nganterin makan siang', '13.45'],
]);

// ===== Kris manggil "sayang" (di momen anget); "kino" pas tegang/berjarak =====
{
  const S = {
    'kino': 'sayang', 'aduh sorry kino': 'aduh sorry sayang', 'pagi kino': 'pagi sayang', 'pagi kino 🙏': 'pagi sayang 🙏',
    'kino, minggu ini aku jarang di apart ya': 'sayang, minggu ini aku jarang di apart ya', 'kino, aku udah di depan. bawa makan': 'sayang, aku udah di depan. bawa makan',
    'kino aku masuk angin': 'sayanggg aku masuk angin', 'good night kino': 'good night sayang', 'kino kamu tau ga': 'sayang kamu tau ga',
    'kino? kebangun ya': 'sayang? kebangun ya', 'iya. night kino': 'iya. night sayang', 'kino? lagi apa': 'sayang? lagi apa', 'kino, sorry ya soal dinner': 'sayang, sorry ya soal dinner',
    'kino? kok belum tidur': 'sayang? kok belum tidur', 'halo kino': 'halo sayang',
    'maaf. maaf banget kino.': 'maaf. maaf banget, sayang.', 'no. kino, jangan minta maaf. itu cukup. itu lebih dari cukup.': 'no. sayang, jangan minta maaf. itu cukup. itu lebih dari cukup.',
    'night kino': 'night sayang', '...makasih kino': '...makasih sayang',
  };
  // chat: 'kino' polos cuma yg tgl 14 (di lobi), bukan yg tgl 24
  let d = '';
  CHATS.find(c => c.id === 'kris').msgs.forEach(m => { if (m[0] === 'date') { d = m[1]; return; } if (m[0] !== 'them' || !S[m[1]]) return; if (m[1] === 'kino' && d !== '2026-10-14') return; m[1] = S[m[1]]; });
  const T = (ls) => ls.forEach(l => { if (l[0] === 't' && l[1] !== 'kino' && S[l[1]]) l[1] = S[l[1]]; });
  Object.values(KRIS_CALL).forEach(v => (Array.isArray(v) ? v : [v]).forEach(o => o && o.lines && T(o.lines)));
  T(MIDNIGHT_CALL);
  Object.values(TYPE_KRIS).forEach(list => list.forEach(x => { if (Array.isArray(x[1])) x[1] = x[1].map(t => (t !== 'kino' && S[t]) || t); }));
  REPLIES.filter(r => r.chat === 'kris' && (!r.epi || r.epi === 'maafin')).forEach(r => r.opts.forEach(o => { if (o.them) o.them = o.them.map(t => (typeof t === 'string' && t !== 'kino' && S[t]) || t); }));
}
{ const k = CHATS.find(c => c.id === 'kris'); for (let i = k.msgs.length - 1; i >= 0; i--) if (k.msgs[i][1] === 'filmnya— eh. meetingnya udah kelar belum') k.msgs.splice(i, 1); }

// ===== priv X Kino: tulis ulang semua — ngedumel sendiri, ngalir, sedihnya diketawain =====
{
  const RW = {
    '2026-09-14T19:20': 'dia masuk angin terus minta peluk. gue kasih tolak angin, eh masih minta peluk juga. yaudah gue kasih dua2nya. manja banget sumpah heran',
    '2026-09-20T10:40': 'dibeliin tiket konser dua, katanya buat gue. iya deh percaya. paling nanti yg mewek pas encore dia sendiri',
    '2026-09-21T00:30': 'tuh kan mewek pas encore. KAN. udah gue bilang wkwk. gue juga sih dikit, tapi ga ada yg liat jadi ga diitung',
    '2026-09-23T21:50': 'pw wifi gue tuh tanggal ultah dia, dan yg lupa malah dia sendiri. gue ga tersinggung kok. cuma bakal gue inget seumur hidup aja',
    '2026-09-27T02:10': 'jam 2 pagi makan indomie terus manggil gue "ibu". besok gue blokir. ga deng, ntar gue masakin siapa',
    '2026-10-01T22:20': 'udah 8 taun masih aja takut gue lupa ultahnya. lucu banget ni orang. mana bisa lupa sih, tiap hari juga keinget',
    '2026-10-03T00:10': 'kuenya gosong dikit, dia makan sambil nangis. katanya bukan gara2 gosong. iyaa iyaa percayaa wkwk',
    '2026-10-07T18:35': 'kaos kakinya ketinggalan di sofa, katanya "kenang2an". kenang2an apaan. udah gue cuciin. jangan kasih tau dia ntar dia geer',
    '2026-10-09T23:00': 'level 2 tuh neraka asli. dia ngakak liat gue keringetan, gue ngakak liat dia ngakak. bego semua kita. seneng sih',
    '2026-10-12T03:10': 'nungguin orang tidur tuh kerjaan full time ga digaji. tapi kalo orangnya dia ya gapapa deh, gue lembur',
    '2026-10-14T00:50': 'jam 12 malem nungguin di lobi bawa roti, ngakunya ga kedinginan padahal idungnya udah merah kayak rudolf. gue pura2 ga liat biar dia ga malu',
    '2026-10-15T21:35': 'dia bilang sayang, gue jawab "oh itu tau". dia ketawa. padahal gue pengen bales beneran. besok aja deh. (besoknya ga juga. payah lo kino)',
    '2026-10-17T21:05': 'masakan gue dia nambah 3x. gue pura2 ngomel "jangan nambah lagi" padahal dalem hati udah joget',
    '2026-10-18T02:45': 'dia diem seharian, katanya banyak pikiran. yaudah gapapa, biasanya nanti cerita sendiri. gue tungguin aja kayak biasa',
    '2026-10-19T21:45': 'masak kebanyakan lagi, dia kecapean ga bisa mampir. yg kenyang soonie. makin bulet aja tuh anak gara2 bapaknya sibuk',
    '2026-10-19T23:25': 'udah gue catet buat tanggal 25. mau ngomong langsung, yg bener, bukan "oh itu tau" lagi. deg2an anjir kayak anak smp',
    '2026-10-20T09:20': 'jam 8.31 juna udah ngelempar tiket ssl ke gue pake emot nangis. iya jun iya gue kerjain. kopi lo tetep gue tagih ya',
    '2026-10-20T13:20': 'jaketnya masih di sini dan dori tidur di situ. gue juga pengen sih tapi gengsi. nanti aja pas orangnya ga ada. (orangnya emang ga ada)',
    '2026-10-20T16:20': 'surya ngasih keju ke soonie terus ngaku sendiri. anak baik tapi agak bego. kayak semua orang di tower ini, termasuk gue',
    '2026-10-20T18:47': 'gemilang nanya gue ikut dinner sama kris ga. ikut apaan, diajak aja kaga wkwk. gapapa gapapa',
    '2026-10-20T18:58': 'barusan dia bilang lembur. 22 menit abis ngajak gemilang makan. oh oke, lembur 🙂 padahal gue udah beli daging bulgogi',
    '2026-10-20T21:30': 'story ramen padahal katanya lembur. juna ngirim ss nya kayak lagi nganterin kabar duka 💀 ga lucu sih sebenernya',
    '2026-10-20T22:35': 'bulgogi porsi dua, yg makan satu orang sama satu kucing. enak kok. soonie bilang enak',
    '2026-10-20T23:45': 'gemilang minta maaf kayak dia yg salah. bukan lo lang, lo cuma ditraktir. yg salah yg nraktir',
    '2026-10-21T08:45': '"semalem sorry ya lembur". iya lembur di warung ramen, produktif banget ya. gue bales "iya." doang, soalnya kalo ngetik panjang ntar ketauan',
    '2026-10-21T10:40': 'dapet undangan interview kamis jam 5 sore. jam 7 nya dinner tower B. jago banget emang gue ngatur jadwal hidup',
    '2026-10-21T11:10': 'soal s2 belum cerita ke siapa2 kecuali kak mina. rencananya mau bilang ke dia duluan tanggal 25. eh orangnya lagi sibuk "lembur"',
    '2026-10-21T14:30': 'staging down 2x, direstart nyala lagi. enak ya jadi server. kalo gue bisa direstart juga mau dong',
    '2026-10-21T19:48': 'nanya tanggal 25, jawabnya "liat nanti, crunch time". bro jawab iya doang susah amat. gue nanya ultah gue sendiri loh ini',
    '2026-10-21T22:30': 'sadewa upload story bioskop "sama bang kris". wah meeting sampe malemnya seru ya kris. filmnya bagus ga',
    '2026-10-21T23:16': 'dia bilang lagi nunggu orang presentasi. gue bales "oh haha oke". padahal story bioskop sadewa udah nongol dari 22.20. akting gue pantes dapet piala sih. haha. haha',
    '2026-10-21T23:59': 'kata ilham kris nanya di lift, kalo sayang tapi ngerasa ga disayang balik itu salah siapa. oh. oke. jadi itu ya. gue masakin lo tiap minggu loh kris, itu bahasa apa menurut lo',
    '2026-10-22T00:20': 'oke kino. tanggal 25 lo ngomong yg jelas ya. jangan kabur ke dapur kayak biasa, jangan dibecandain juga. tiga hari lagi. deg2an anjir kayak mau sidang',
    '2026-10-22T08:00': 'katanya minggu ini jarang di apart. kita satu gedung anjir, beda lantai doang. jauh juga ya ternyata',
    '2026-10-22T17:45': 'interview kelar. profesornya nanya gue handle insiden prod gimana, gue jawab lancar banget. padahal isi kepala gue lampu unit sebelah',
    '2026-10-22T18:20': 'abis interview pengen cerita ke orang, terus sadar orang pertama yg pengen gue kabarin lagi "nginep kantor". haha. haha',
    '2026-10-22T18:55': 'sadewa salah kirim di grup terus nge-pc "kirain bang kino ikut". semua orang kirain gue ikut. gue juga kirain',
    '2026-10-22T19:55': 'dinner rame2, kursi sebelah kosong. surya pura2 ga liat sambil naro japchae di piring gue. makasih ya sur, beneran',
    '2026-10-22T20:35': 'nelpon 2x tapi gue cancel sendiri sebelum nyambung. biar ga usah denger dia ga ngangkat. pinter kan gue',
    '2026-10-22T23:15': 'katanya "sendiri". yaudah gue percaya kok. lagi latihan percaya nih, doain ya lulus',
    '2026-10-22T23:45': 'lampu unit sebelah gelap. bukan urusan gue. (urusan gue) (banget)',
    '2026-10-23T09:05': 'chat dari jam 9 masih centang satu. mungkin hp nya mati kali ya. iya pasti mati. pasti',
    '2026-10-23T12:35': 'jam 12 masih centang satu padahal ig nya aktif 2 menit lalu. oh hp nya nyala ternyata. oke oke',
    '2026-10-23T13:30': 'bagas bilang dia CUTI dari kemaren. terus "nginep kantor" tuh kantor yg mana kris, kantor di hati orang lain? wkwk. ga lucu ya',
    '2026-10-23T15:15': 'telpon ketiga ga diangkat. udah ah capek. (telpon keempat jam 4)',
    '2026-10-23T15:40': 'town hall 2 jam ngomongin roadmap 2027. roadmap minggu ini aja gue ga punya',
    '2026-10-23T21:15': 'nontonflix ngabarin akun gue dipake nonton di iphone kris, dari seongsu. makasih ya nontonflix, lo doang yg jujur minggu ini',
    '2026-10-23T23:00': 'dibaca aja kaga. gue ngetik "kamu di mana" tiga kali, terus yg dua gue hapus',
    '2026-10-23T23:55': 'bagas ngajak deeptalk jam 11 malem. BAGAS. yg biasanya balesnya cuma "k". dunia udah kebalik wkwk. tapi dia bener sih, nyebelin',
    '2026-10-24T02:10': 'juna bilang dia duduk di lobi dari jam 1, ga naik. gue juga ga turun. dua orang bego di satu gedung. dori tidur di jaketnya lagi',
    '2026-10-24T08:10': 'prod down dari pagi. jujur ada lega nya dikit sih, akhirnya ada yg bisa gue benerin hari ini wkwk',
    '2026-10-24T09:40': 'rollback jalan, error turun terus naik lagi. kok kayak kenal polanya ya dari mana',
    '2026-10-24T12:55': 'prod sempet up 13 menit terus mati lagi. juna mau nangis di toilet. gue juga mau, tapi slotnya penuh',
    '2026-10-24T13:55': 'hana ngirim foto. seongsu, pegangan tangan, namanya yuna. fotonya blur tapi jelas banget. lucunya gue malah liatin jaketnya. itu jaket yg biasa dia pake ke sini',
    '2026-10-24T14:07': 'baru juga dikirim langsung ditelfonin kayak debt collector. hhhh. oke. angkat. kino lo bisa',
    '2026-10-24T14:40': 'gue ga teriak sama sekali, bangga dikit. dia bilang ngerasa ga disayang. gue bilang gue tau. padahal udah gue siapin buat tanggal 25. mau bilang langsung, bukan lewat chat. keduluan dia capek.',
    '2026-10-24T15:15': 'dia ngechat mulu. gue baca semua, ga gue bales. gue lagi rollback prod ya kris, bukan nungguin lo. (dua2nya)',
    '2026-10-24T15:30': 'tangan gue gemeteran. bukan gara2 dia, gara2 kopi. (bukan kopi) (gue belum minum kopi)',
    '2026-10-24T16:10': 'dia nunggu di lobi kantor. satpam nanya "itu temennya mas kino?" gue bilang ga kenal. abis itu gue ke toilet 5 menit. ngapain? ya ngapain lagi',
    '2026-10-24T16:46': 'KETEMU. lock lama sisa failover tadi pagi. pengen teriak tapi di war room ada direksi, jadi gue cuma bilang "ketemu." doang',
    '2026-10-24T17:22': 'udah gue bilang nanti. sekarang gue cuma pengen prod nyala lagi, soalnya kayaknya cuma itu yg masih bisa gue benerin hari ini',
    '2026-10-24T17:29': 'prod up, error 0%. tangan gemeteran tapi bodo amat. bikin kopi dulu ah, abis itu tidur tiga hari',
    '2026-10-24T17:30': 'kok pusing ya',
    '2026-10-24T20:40': 'bangun2 di klinik, juna nangisnya lebih kenceng dari pasiennya wkwk. ilham sama juna dua2nya nangis. makasih ya kalian',
    '2026-10-24T21:20': 'bagas naro bubur depan pintu terus ilang kayak kurir. surya naro brownies sama teh jahe. mama udah beli tiket kereta. gue cuma pingsan doang kok rame banget',
    '2026-10-24T22:35': 'kak mina ngirim email judulnya "jangan buka email kantor". ya gimana gue tau isinya kalo ga dibuka kak',
    '2026-10-24T22:40': 'prod down 9 jam setengah, akhirnya up. gantian gue yg down. impas lah ya',
    '2026-10-24T23:45': 'dia nulis surat, kodenya hari jadi kita. jahat banget pake itu. gue baca tiga kali. mata gue keringetan',
    '2026-10-25T00:30': 'resmi nambah tua. catetan buat tanggal 25 masih ada di hp, poin kedua belum gue coret. masih bisa ga ya',
    '2026-10-25T09:05': 'offer nya masuk. keterima. di hari ultah gue. dan orang pertama yg pengen gue kasih tau masih orang yg sama. nyebelin',
    '2026-10-25T13:00': 'anak2 tower B ngasih kue tiga, katanya satu buat gue, dua buat soonie doongie dori. ga ada yg sayang gue di sini. (ada. banyak)',
  };
  ALT.forEach(a => { if (RW[a[0]]) a[1] = RW[a[0]]; });
  X_POSTS.forEach(p => { if (p[1] === 'alt' && RW[p[2]]) p[3] = RW[p[2]]; });
}
{
  const RW2 = {
    '2026-10-13T22:16': 'dia launch hari ini. gue nonton livestream presentasinya dari awal sampe akhir, sampe gue screenshot pas dia ngomong di depan. bangga banget anjir. terus gue bales apa? nyuruh tidur sambil ngancem nyabut charger. pinter kino, pinter',
    '2026-10-20T22:27': 'nanya soal rep gemilang di twitter nya. katanya gemilang mampir kantor bawain ramen. oh gitu. gemilang yg sore tadi nanya gue ikut makan bareng mereka ga itu ya. oke kris, oke. haha',
    '2026-10-26T01:30': 'kuenya ga gue makan, tapi lilinnya gue simpen. bego emang. 8 taun gue kira ga pernah nyimpen apa2, ternyata gue nyimpen semuanya',
    '2026-10-26T11:00': 'paketnya akhirnya gue buka. tiga kalung nama, soonie doongie dori. dori ga mau dilepas. ya sama, gue juga',
    '2026-10-26T10:00': 'paketnya gue buka di lobi terus nangis kayak orang bego. satpam nawarin teh. gue terima',
    '2026-10-28T21:00': 'dia bawa masakan, keasinan parah, tapi gue abisin. jangan bilang dia. terus gue bilang "enak". terus gue bilang satu kata lagi yg dari dulu ga pernah gue bilang',
    '2026-10-29T23:00': 'reuni sendirian. anak2 pada nanya kris mana, gue bilang lagi istirahat. ga bohong kan. istirahat dari gue',
  };
  ALT.forEach(a => { if (RW2[a[0]]) a[1] = RW2[a[0]]; });
  X_POSTS.forEach(p => { if (p[1] === 'alt' && RW2[p[2]]) p[3] = RW2[p[2]]; });
}

// ===== hasil main-tes 20–22 =====
{
  const k = CHATS.find(c => c.id === 'kris'); for (let i = k.msgs.length - 1; i >= 0; i--) if (k.msgs[i][0] === 'me' && k.msgs[i][1] === 'kepencet') k.msgs.splice(i, 1);
  REPLIES.forEach(r => r.opts.forEach(o => { if (o.me[0] === 'next time jawab "tanya orangnya langsung"') o.them = ['oke bang. noted 🫡']; }));
  const g = CHATS.find(c => c.id === 'gemilang'); g.msgs.forEach(m => {
    if (m[1] === 'bang lo di unit?' && m[2] === '19.30') { m[1] = 'bang lo udah di unit?'; m[2] = '21.30'; }
    if (m[1] === 'iya, knp emang' && m[2] === '19.40') { m[1] = 'udah, kenapa emang?'; m[2] = '21.40'; }
    if (m[1] === 'gpp. cuma mau mastiin lo masih napas 🥲' && m[2] === '19.40') m[2] = '21.40';
  });
  CHATS.forEach(c => c.msgs.forEach(m => { if (typeof m[1] === 'string' && m[1].includes('Restoran Gukbap (dinner bareng)')) m[1] = '[BankKu] Transfer ₩38.000\nke Surya (patungan dinner)\nSaldo: ₩80.232.500'; }));
}

// ===== hasil main-tes 23 =====
{
  CHATS.find(c => c.id === 'surya').msgs.forEach(m => {
    if (m[0] === 'me' && m[1] === 'kenapa sur? gue aman kok') m[1] = 'kenapa nanya gitu sur?';
    if (m[0] === 'them' && m[1] === 'of course it\'s my business, I love you both 🥺') m[1] = 'of course I\'m asking, I love you both 🥺';
  });
  const b = CHATS.find(c => c.id === 'bagas'); for (let i = b.msgs.length - 1; i >= 0; i--) if (b.msgs[i][1] === 'lampu unit lo masih nyala') b.msgs.splice(i, 1);
}

// ===== hasil main-tes 24 =====
{
  CHATS.find(c => c.id === 'ilham').msgs.forEach(m => { if (m[1] === 'gue lega banget lo udah sadar 🥺' && m[2] === '18.20') m[1] = 'bang cepet bangun ya 🥺'; });
  const g = CHATS.find(c => c.id === 'grup'); for (let i = g.msgs.length - 1; i >= 0; i--) if (g.msgs[i][0] === 'Sadewa' && g.msgs[i][1] === 'otw ke sana') g.msgs.splice(i, 1);
  g.msgs.forEach(m => { if (m[0] === 'me' && m[1] === 'gue gapapa. berisik') m[1] = 'gue gapapa kok. jangan rame ya'; });
}

// ===== X & IG Kino (publik): tulis ulang biar ga robot =====
{
  const KX = {
    // tweet @kinoleee
    'kucing gue lebih cepet belajar dari intern': 'kucing gue diajarin sekali langsung bisa. intern diajarin 5x masih nanya lagi. lucu sih dua2nya',
    'encore. ada yg nangis. bukan gue.': 'encore tadi ada yg nangis sampe sesenggukan. bukan gue ya, gue cuma kelilipan confetti',
    'hbd @krischandra. jangan nangis.': 'hbd @krischandra 🎂 jangan nangis lagi ya, kuenya udah gosong tanpa perlu dibantu air mata',
    'deploy hari jumat? ga.': 'yg mau deploy jumat sore mending pikir2 lagi deh. weekend lo nanti jadi milik prod',
    'makasih ucapannya. udah. jangan rame.': 'makasih ucapannya semuaa. udah ya jangan rame, notif gue meledak dari tadi',
    'standup jam 9.30. yg telat traktir. udah tau siapa.': 'standup jam 9.30 ya. yg telat traktir kopi satu tim. ga nyebut nama, tapi kita semua tau siapa',
    'kopi pertama. ga ngefek.': 'udah kopi pertama tapi mata masih setengah. kayaknya butuh yg kedua deh',
    'masak kebanyakan lagi.': 'masak kebanyakan lagi. kebiasaan banget, kayak lupa yg makan cuma satu orang sama tiga kucing',
    'intern nanya tombol merah. gue tua 5 tahun dalam 3 detik.': 'intern nanya "kalo tombol merah dipencet kenapa". gue langsung tua 5 tahun dalam 3 detik',
    'iyaa iyaa tidur.': 'iyaa iyaa ini mau tidur kok. 5 menit lagi',
    'hari ini ngomong 30 menit nonstop. rekor.': 'hari ini ngomong 30 menit nonstop. rekor pribadi sih, biasanya 30 detik juga udah capek',
    'town hall jam 3. doain gue ga ketiduran.': 'town hall jam 3 sore abis makan siang. doain gue ga ketiduran di barisan depan ya',
    'paket ga ada nama pengirimnya. kalo isinya aneh2 gue udah tau siapa.': 'ada paket buat gue tapi ga ada nama pengirimnya. kalo isinya aneh2, gue udah tau pelakunya',
    'aman. jangan rame.': 'gue aman kok, cuma kecapean. makasih ya udah pada khawatir. tapi jangan rame',
    // balesan Kino
    'telat. udah abis': 'telat sur, udah abis wkwk', 'gosongnya dikit': 'gosongnya dikit doang kok', 'aku selalu bener': 'kan aku udah bilang, aku selalu bener',
    'bagus': 'bagus sur, sisain satu', 'aman kok': 'aman kok ham, ada gue', 'setuju': 'setuju banget. kismis di brownies itu kriminal',
    // komentar IG
    'norak.': 'norak wkwk', 'emang panas.': 'emang panas banget sumpah', 'panas.': 'panas parah', 'anak2 gue.': 'anak2 gue nih', 'ga.': 'ga mau wkwk',
    'selamat. pulang.': 'selamat ya. sekarang pulang, tidur', 'good job.': 'good job ham', 'kismis?': 'ada kismisnya ga?', 'bagus.': 'bagus lang',
    'udah jadi punya dori.': 'udah resmi jadi punya dori', 'jam 11 itu pagi.': 'jam 11 itu masih pagi kris', 'besok standup.': 'besok standup loh jun',
    'buat soonie.': 'buat soonie kok', 'makasih sur.': 'makasih ya sur',
    // pilihan ketikan pemain di IG/X
    'kerja jun, bukan foto2': 'kerja jun, bukan foto2 wkwk', 'ganteng dari mana': 'ganteng dari mana wkwk', 'bagus sur': 'bagus sur, sisain satu ya',
    'lumayan.': 'lumayan lah lang', 'bagus. jangan nangis': 'bagus kok. jangan nangis', 'bin. ajak gue': 'bin ajak gue dong', 'makasih semua. udah.': 'makasih semuaa',
    'kerja jun': 'kerja jun wkwk', 'lebay lo': 'lebay lo lang wkwk', 'lo kenapa sih': 'lo kenapa sih dew', 'norak': 'norak wkwk', 'iya.': 'iyaa',
    // caption & story Kino
    'tiga anak. ga ada yg nurut.': 'punya tiga anak, ga ada satupun yg nurut', 'ada yg nambah 3x.': 'ada yg nambah 3x. ga nyebut nama',
    'masak buat satu orang tp porsi lima. kebiasaan': 'niatnya masak buat satu orang, jadinya porsi lima. kebiasaan',
    'makasih ucapannya. kucingnya yg bales.': 'makasih ucapannya semua 🎂 yg bales kucing ya, gue lagi ngantuk',
    'tidur cepet hari ini. katanya.': 'hari ini mau tidur cepet. katanya sih', 'rapi dikit. jangan nanya kenapa.': 'rapi dikit hari ini. jangan nanya kenapa',
    'rabu. udah capek.': 'baru rabu tapi udah capek', 'dibangunin jam 5. ga digaji.': 'dibangunin jam 5 sama kucing. ga digaji pula',
  };
  const isK = (w) => w === 'kino' || w === 'kinoo.lee';
  X_POSTS.forEach(p => { if (p[1] === 'kino' && KX[p[3]]) p[3] = KX[p[3]]; (p[5] || []).forEach(r => { if (r[0] === 'kino' && KX[r[1]]) r[1] = KX[r[1]]; }); });
  [typeof IG_KINO_LINES !== 'undefined' ? IG_KINO_LINES : {}, typeof X_KINO_LINES !== 'undefined' ? X_KINO_LINES : {}].forEach(o => Object.values(o).forEach(list => list.forEach(x => { if (KX[x[0]]) x[0] = KX[x[0]]; })));
  const seen = new Set(); const walk = (v) => { if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v); if (Array.isArray(v) && isK(v[0]) && typeof v[1] === 'string' && KX[v[1]]) { v[1] = KX[v[1]]; return; } Object.values(v).forEach(walk); };
  if (typeof IG_COMMENTS !== 'undefined') walk(IG_COMMENTS);
  INSTA.forEach(p => { if (p.user === 'kinoo.lee' && KX[p.cap]) p.cap = KX[p.cap]; });
  STORIES.forEach(s => { if (s.user === 'kinoo.lee' && KX[s.txt]) s.txt = KX[s.txt]; });
}

// ===== tgl 24 sore: bukan pingsan — GERD Kino kumat parah, ditangani di klinik (infus + obat), ketiduran sampe malem =====
{
  const SUB = [
    ['bagas bilang kamu pingsan', 'bagas bilang gerd kamu kumat parah'],
    ['jangan pingsan lagi', 'jangan telat makan lagi'],
    ['guys. bang kino pingsan di pantry kantor', 'guys. gerd bang kino kumat parah di pantry kantor'],
    ['GUYS BANG KINO PINGSAN 😭😭😭', 'GUYS GERD BANG KINO KUMAT PARAH 😭😭😭'],
    ['TADI DIA LAGI BIKIN KOPI TERUS JATOH GITU AJA. KEPALANYA KEBENTUR MEJA', 'TADI DIA LAGI BIKIN KOPI TERUS TIBA2 MEGANGIN DADA, MUNTAH, GA BISA BERDIRI'],
    ["he's breathing kan?? JUNA ANSWER ME", "is he okay?? can he breathe?? JUNA ANSWER ME"],
    ['NAPAS. NAPAS. tapi ga bangun2 😭😭', 'NAPAS KOK. tapi sesek sama kesakitan banget 😭😭'],
    ['kata dokter kecapean + stres. lagi diinfus. tensinya rendah bgt', 'kata dokter GERD nya kumat parah. telat makan + kopi + stres. udah diinfus, disuntik obat lambung sama obat mual, terus dikasih obat penenang. sekarang dia tidur'],
    ['dia yg benerin sebelum jatoh', 'dia yg benerin sebelum tumbang'],
    ['BANG KINO UDAH SADAR 😭😭😭', 'BANG KINO UDAH BANGUN 😭😭😭'],
    ['gue tau lo ga bisa baca ini tapi BANGUN', 'gue tau lo ga bisa baca ini tapi CEPET SEMBUH'],
    ['kalo lo bangun lo boleh marahin gue', 'kalo lo udah enakan lo boleh marahin gue'],
    ['tadi gue liat lo jatoh 😢', 'tadi gue liat lo kesakitan 😢'],
    ['bang please bangun 😭', 'bang please jangan kenapa2 😭'],
    ['bang cepet bangun ya 🥺', 'bang cepet enakan ya 🥺'],
    ['kak mina bilang kamu pingsan??', 'kak mina bilang lambung kamu kumat parah??'],
    ['gapapa ma. kecapean doang', 'gapapa ma. lambung doang, udah dikasih obat'],
    ['udah sadar kak. maaf ngerepotin', 'udah bangun kak. maaf ngerepotin'],
    ['BANG KINO JATOH DI PANTRY', 'BANG KINO KESAKITAN DI PANTRY 😭'],
    ['bang bangun bang 😭😭', 'bang lo kenapa bang 😭😭'],
    ['DIA GA NYAUT 😭😭 ILHAM TELFON KLINIK CEPET', 'DIA MEGANGIN DADA GA BISA NGOMONG 😭😭 ILHAM TELFON KLINIK CEPET'],
    ['UDAH. mereka bawa tandu', 'UDAH. mereka bawa kursi roda'],
    ['kata dokternya kecapean + stres. infus dulu', 'kata dokternya gerd kumat. diinfus sama disuntik obat dulu'],
    ['Kamu baru pingsan, dan aku malah—', 'Lambung kamu baru kumat, dan aku malah—'],
    ['Kepalanya masih berat. Bekas infus', 'Badannya masih lemas, dadanya masih sedikit perih. Bekas infus'],
    ['Berdiri terus nanti pingsan juga.', 'Berdiri terus nanti ikut sakit juga.'],
    ['lalu memarahinya karena pingsan,', 'lalu memarahinya karena telat makan lagi,'],
    ['kepala kamu masih pusing?', 'dada kamu masih sakit?'],
    ['kamu tau aku pingsan hari ini?', 'kamu tau gerd aku kumat hari ini?'],
    ['aku jatoh di pantry. yg aku pikirin pas jatoh itu: "kris tau ga ya".', 'aku meringkuk di lantai pantry. yg aku pikirin pas itu: "kris tau ga ya".'],
    ['dan pikiran terakhir aku sebelum gelap itu kamu.', 'dan yg aku pikirin sebelum obatnya bikin aku tidur itu kamu.'],
    ['kok pusing ya', 'kok dada gue panas ya'],
    ['gue cuma pingsan doang kok rame banget', 'gue cuma gerd kumat doang kok rame banget'],
    ['orang paling kuat juga bisa jatoh', 'orang paling kuat juga bisa tumbang'],
    ['gue aman kok, cuma kecapean.', 'gue aman kok, cuma lambung kumat.'],
    ['jam setengah 6 aku jatoh di pantry. bangun2 di klinik lt 3, juna nangis.\nkata dokter kecapean. kepala penuh.', 'jam setengah 6 gerd aku kumat di pantry. dada kayak kebakar, ga bisa berdiri. bangun2 di klinik lt 3, juna nangis.\nkata dokter telat makan, kebanyakan kopi, stres. kepala penuh.'],
    ['pingsan karena ga makan seharian bahaya ga', 'gerd kumat sampe sesek bahaya ga'],
    ['gapapa gimana kamu pingsan!', 'gapapa gimana, lambung kamu kumat sampe dibawa ke klinik!'],
    ['kecapean doang ma. udah diinfus', 'lambung doang ma. udah diinfus sama dikasih obat'],
    ['GIMANA GA DRAMATIS BANG LO JATOH 😭💔', 'GIMANA GA DRAMATIS BANG LO SAMPE DIBAWA KE KLINIK 😭💔'],
    ['jangan sampe pingsan kayak drama', 'jangan sampe telat makan kayak lo'],
  ];
  const fix = (s) => { for (const [a, b] of SUB) if (s.includes(a)) s = s.split(a).join(b); return s; };
  const seen = new Set();
  const walk = (v) => { if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v); for (const k of Object.keys(v)) { if (typeof v[k] === 'string') v[k] = fix(v[k]); else walk(v[k]); } };
  [CHATS, ENDINGS, ENDING_TAIL, MIDNIGHT_CALL, X_POSTS, ALT, INSTA, STORIES, REPLIES, typeof NOTES !== 'undefined' ? NOTES : null, typeof SAFARI !== 'undefined' ? SAFARI : null,
   typeof CALL_LINES !== 'undefined' ? CALL_LINES : null, typeof CALL_AGAIN !== 'undefined' ? CALL_AGAIN : null, typeof TYPE_LINES !== 'undefined' ? TYPE_LINES : null, TYPE_KRIS, RANDOM_CHATS].forEach(walk);
  // Ilham 17.45: "bang." / "bangun." → "lo kuat ya."
  CHATS.find(c => c.id === 'ilham').msgs.forEach(m => { if (m[1] === 'bangun.' && m[2] === '17.45') m[1] = 'lo kuat ya.'; });
  // Juna 17.43
  CHATS.find(c => c.id === 'juna').msgs.forEach(m => { if (m[1] === 'BANG BANGUN 😭😭') m[1] = 'BANG LO KENAPA 😭😭'; });
}

// ===== GERD: ga pake infus (biar ga mirip AU lain) — disuntik obat + obat minum, terus tidur =====
{
  const SUB2 = [
    ['udah diinfus, disuntik obat lambung sama obat mual, terus dikasih obat penenang', 'udah disuntik obat lambung sama obat mual, terus dikasih obat penenang'],
    ['diinfus sama disuntik obat dulu', 'disuntik obat dulu'],
    ['lambung doang ma. udah diinfus sama dikasih obat', 'lambung doang ma. udah disuntik sama dikasih obat'],
    ['Bekas infus tadi sore meninggalkan memar kecil di punggung tangannya, ungu kebiruan.', 'Plester bekas suntikan tadi sore masih menempel di lengannya.'],
  ];
  const fix = (s) => { for (const [a, b] of SUB2) if (s.includes(a)) s = s.split(a).join(b); return s; };
  const seen = new Set();
  const walk = (v) => { if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v); for (const k of Object.keys(v)) { if (typeof v[k] === 'string') v[k] = fix(v[k]); else walk(v[k]); } };
  [CHATS, ENDINGS, ENDING_TAIL, MIDNIGHT_CALL, X_POSTS, ALT, typeof NOTES !== 'undefined' ? NOTES : null, typeof CALL_LINES !== 'undefined' ? CALL_LINES : null, typeof CALL_AGAIN !== 'undefined' ? CALL_AGAIN : null, typeof TYPE_LINES !== 'undefined' ? TYPE_LINES : null].forEach(walk);
}

// ===== petunjuk GERD di priv X (21–23) + Surya bawain sup pas Kino sakit =====
[
  ['2026-10-21T13:10', 'lambung gue protes dari kemaren tapi deadline lebih galak. yaudah lambung ngalah dulu'],
  ['2026-10-22T16:30', 'setengah jam lagi interview dan ulu hati gue udah perih duluan. dari pagi cuma kopi sama deg2an. minum obat maag dulu biar ga meringis di depan profesor'],
  ['2026-10-23T15:50', 'town hall 2 jam, perut perih, kopi ketiga. iya iya gue tau, ga usah diceramahin'],
].forEach(([ts, text]) => { ALT.push([ts, text]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', ts, text, '', [], 0, {}]); });
{
  const SUP = [
    ["I'm making bubur sama brownies. taro depan unitnya 🥺", "I'm making sup ayam. taro depan unitnya 🥺"],
    ['I left brownies depan unit lo ya. sama ginger tea', 'I left sup ayam depan unit lo ya. sama ginger tea'],
    ['surya naro brownies sama teh jahe', 'surya naro sup ayam sama teh jahe'], ['mama udah beli tiket kereta', 'mama sempet beli tiket kereta'],
    ['made bubur at 6pm, brownies at 7pm, cried at 8pm', 'made sup ayam at 6pm, ginger tea at 7pm, cried at 8pm'],
  ];
  const fix = (s) => { for (const [a, b] of SUP) if (s.includes(a)) s = s.split(a).join(b); return s; };
  CHATS.forEach(c => c.msgs.forEach(m => { if (typeof m[1] === 'string') m[1] = fix(m[1]); }));
  X_POSTS.forEach(p => { p[3] = fix(p[3]); }); ALT.forEach(a => { a[1] = fix(a[1]); });
}

// ===== GERD: Kino sesek, Juna panik =====
{
  const SS = [
    ['DIA MEGANGIN DADA GA BISA NGOMONG 😭😭 ILHAM TELFON KLINIK CEPET', 'DIA MEGANGIN DADA, NAPASNYA PENDEK2 😭😭 ILHAM TELFON KLINIK CEPET'],
    ['TADI DIA LAGI BIKIN KOPI TERUS TIBA2 MEGANGIN DADA, MUNTAH, GA BISA BERDIRI', 'TADI DIA LAGI BIKIN KOPI TERUS TIBA2 MEGANGIN DADA, MUNTAH, SESEK, GA BISA BERDIRI'],
    ['NAPAS KOK. tapi sesek sama kesakitan banget 😭😭', 'NAPAS TAPI SESEK BANGET 😭😭 NAPASNYA PENDEK2 GITU'],
    ['kata dokter GERD nya kumat parah. telat makan + kopi + stres.', 'kata dokter GERD nya kumat parah. sesaknya dari asam lambung naik, BUKAN JANTUNG 😭 telat makan + kopi + stres.'],
  ];
  const fix = (s) => { for (const [a, b] of SS) if (s.includes(a)) s = s.split(a).join(b); return s; };
  CHATS.forEach(c => c.msgs.forEach(m => { if (typeof m[1] === 'string') m[1] = fix(m[1]); }));
  more('grup', [
    ['date', '2026-10-24'],
    ['Juna', 'KALO BANG KINO KENAPA2 GIMANA 😭😭😭', '17.47'],
    ['Bagas', 'jun. tarik napas. dia udah ditanganin', '17.48'],
  ]);
  more('juna', [['date', '2026-10-24'], ['them', 'NAPAS BANG. PELAN2 😭', '17.44']]);
}

// ===== wording: "asam lambung (kamu) kumat parah", bukan GERD =====
{
  const R = [
    [/GERD BANG KINO/g, 'ASAM LAMBUNG BANG KINO'], [/GERD nya/g, 'asam lambungnya'], [/\bgerd nya\b/g, 'asam lambungnya'],
    [/\bGERD\b/g, 'asam lambung'], [/\bgerd\b/g, 'asam lambung'],
    [/(?<!asam )\b([Ll])ambung (kamu|doang|kumat)/g, (m, L, w) => (L === 'L' ? 'Asam lambung ' : 'asam lambung ') + w],
  ];
  const fix = (s) => { for (const [a, b] of R) s = s.replace(a, b); return s; };
  const seen = new Set();
  const walk = (v) => { if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v); for (const k of Object.keys(v)) { if (typeof v[k] === 'string') { if (/gerd|lambung/i.test(v[k])) v[k] = fix(v[k]); } else walk(v[k]); } };
  [CHATS, ENDINGS, ENDING_TAIL, MIDNIGHT_CALL, X_POSTS, ALT, REPLIES, typeof NOTES !== 'undefined' ? NOTES : null, typeof SAFARI !== 'undefined' ? SAFARI : null,
   typeof CALL_LINES !== 'undefined' ? CALL_LINES : null, typeof CALL_AGAIN !== 'undefined' ? CALL_AGAIN : null, typeof TYPE_LINES !== 'undefined' ? TYPE_LINES : null, TYPE_KRIS].forEach(walk);
}

// ===== tiap orang ngomongin sakitnya Kino pake bahasanya sendiri (ga seragam) =====
{
  const N = {
    'bagas bilang asam lambung kamu kumat parah': 'bagas bilang kamu dibawa ke klinik??',
    'guys. asam lambung bang kino kumat parah di pantry kantor': 'guys. bang kino kesakitan di pantry, kayaknya maagnya kambuh',
    'GUYS ASAM LAMBUNG BANG KINO KUMAT PARAH 😭😭😭': 'GUYS BANG KINO KENAPA2 DI PANTRY 😭😭😭',
    'kata dokter asam lambungnya kumat parah. sesaknya dari asam lambung naik, BUKAN JANTUNG 😭 telat makan + kopi + stres. udah disuntik obat lambung sama obat mual, terus dikasih obat penenang. sekarang dia tidur':
      'kata dokter maagnya kambuh parah, asam lambungnya naik makanya sesek. BUKAN JANTUNG 😭 gara2 ga makan dari pagi + kopi + stres. udah disuntik obat, terus dikasih obat biar bisa istirahat. sekarang dia tidur',
    'kak mina bilang asam lambung kamu kumat parah??': 'kak mina bilang kamu dibawa ke klinik?? maag kamu kambuh lagi??',
    'gapapa ma. asam lambung doang, udah dikasih obat': 'gapapa ma. maag doang, udah dikasih obat',
    'kata dokternya asam lambung kumat. disuntik obat dulu': 'kata dokter maagnya kambuh parah. disuntik obat dulu',
    'kamu tau asam lambung aku kumat hari ini?': 'kamu tau aku dibawa ke klinik hari ini?',
    'gue aman kok, cuma asam lambung kumat. makasih ya udah pada khawatir. tapi jangan rame': 'gue aman kok, cuma maag kambuh. makasih ya udah pada khawatir. tapi jangan rame',
    'asam lambung kumat sampe sesek bahaya ga': 'maag kambuh sampe sesek bahaya ga',
    'gapapa gimana, asam lambung kamu kumat sampe dibawa ke klinik!': 'gapapa gimana, kamu sampe dibawa ke klinik!',
    'asam lambung doang ma. udah disuntik sama dikasih obat': 'maag doang ma. udah disuntik sama dikasih obat',
  };
  const SUBN = [
    ['Asam lambung kamu baru kumat, dan aku malah—', 'Kamu baru keluar klinik, dan aku malah—'],
    ['gue cuma asam lambung kumat doang kok rame banget', 'gue cuma maag kambuh doang kok rame banget'],
    ['jam setengah 6 asam lambung aku kumat di pantry. dada kayak kebakar, ga bisa berdiri.', 'jam setengah 6 maag aku kambuh di pantry. dada kayak kebakar, sesek, ga bisa berdiri.'],
  ];
  const fix = (s) => { if (N[s] !== undefined) return N[s]; for (const [a, b] of SUBN) if (s.includes(a)) s = s.split(a).join(b); return s; };
  const seen = new Set();
  const walk = (v) => { if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v); for (const k of Object.keys(v)) { if (typeof v[k] === 'string') { if (/lambung|maag/i.test(v[k])) v[k] = fix(v[k]); } else walk(v[k]); } };
  [CHATS, ENDINGS, ENDING_TAIL, MIDNIGHT_CALL, X_POSTS, ALT, REPLIES, typeof NOTES !== 'undefined' ? NOTES : null, typeof SAFARI !== 'undefined' ? SAFARI : null,
   typeof CALL_LINES !== 'undefined' ? CALL_LINES : null, typeof CALL_AGAIN !== 'undefined' ? CALL_AGAIN : null, typeof TYPE_LINES !== 'undefined' ? TYPE_LINES : null, TYPE_KRIS].forEach(walk);
}
{
  const V = [
    ['kata dokter maagnya kambuh parah, asam lambungnya naik makanya sesek.', 'kata dokter lambungnya lagi ngamuk, asamnya naik sampe dada makanya sesek.'],
    ['kata dokter maagnya kambuh parah. disuntik obat dulu', 'kata dokter itu maag akut. disuntik obat dulu'],
    ['gue cuma maag kambuh doang kok rame banget', 'gue cuma sakit perut doang kok rame banget'],
    ['gue aman kok, cuma maag kambuh.', 'gue aman kok, lambung gue aja yg lagi ngambek.'],
    ['jam setengah 6 maag aku kambuh di pantry. dada kayak kebakar, sesek, ga bisa berdiri.', 'jam setengah 6 di pantry, dada aku kayak kebakar, sesek, ga bisa berdiri.'],
    ['maag kambuh sampe sesek bahaya ga', 'perih ulu hati sampe sesek itu bahaya ga'],
  ];
  const fix = (s) => { for (const [a, b] of V) if (s.includes(a)) s = s.split(a).join(b); return s; };
  const seen = new Set();
  const walk = (v) => { if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v); for (const k of Object.keys(v)) { if (typeof v[k] === 'string') { if (/maag/.test(v[k])) v[k] = fix(v[k]); } else walk(v[k]); } };
  [CHATS, X_POSTS, ALT, typeof NOTES !== 'undefined' ? NOTES : null, typeof SAFARI !== 'undefined' ? SAFARI : null].forEach(walk);
}
{
  const K = [
    ['kata dokter lambungnya lagi ngamuk, asamnya naik sampe dada makanya sesek.', 'kata dokter maagnya kambuh, asam lambungnya naik sampe dada makanya sesek.'],
    ['gue aman kok, lambung gue aja yg lagi ngambek.', 'gue aman kok, maag gue kambuh aja.'],
  ];
  const fix = (s) => { for (const [a, b] of K) if (s.includes(a)) s = s.split(a).join(b); return s; };
  CHATS.forEach(c => c.msgs.forEach(m => { if (typeof m[1] === 'string') m[1] = fix(m[1]); }));
  X_POSTS.forEach(p => { p[3] = fix(p[3]); });
}
ALT.forEach(a => { a[1] = a[1].replace('gue cuma sakit perut doang kok rame banget', 'gue cuma maag kambuh doang kok rame banget'); });
X_POSTS.forEach(p => { if (p[1] === 'alt') p[3] = p[3].replace('gue cuma sakit perut doang kok rame banget', 'gue cuma maag kambuh doang kok rame banget'); });
ALT.forEach(a => { a[1] = a[1].replace('gue cuma maag kambuh doang kok rame banget', 'gue cuma sakit perut doang kok rame banget'); });
X_POSTS.forEach(p => { if (p[1] === 'alt') p[3] = p[3].replace('gue cuma maag kambuh doang kok rame banget', 'gue cuma sakit perut doang kok rame banget'); });
{
  const E = [
    ['dia ga makan dari pagi. udah gue bilangin. keras kepala', 'dia kayaknya ga makan dari kemaren. tadi pagi juga cuma kopi. udah gue bilangin. keras kepala'],
    ['gara2 ga makan dari pagi + kopi + stres', 'gara2 ga makan dari kemaren + kopi + stres'],
    ['bang lo belum makan dari pagi', 'bang lo belum makan dari kemaren ya?'],
  ];
  const fix = (s) => { for (const [a, b] of E) if (s.includes(a)) s = s.split(a).join(b); return s; };
  CHATS.forEach(c => c.msgs.forEach(m => { if (typeof m[1] === 'string') m[1] = fix(m[1]); }));
}
// telpon tengah malem: Kino udah tau Kris nunggu di depan klinik (dari chat)
MIDNIGHT_CALL.forEach(l => {
  if (l[0] === 'k' && l[1] === 'kamu tau aku dibawa ke klinik hari ini?') l[1] = 'aku baca chat kamu. kamu nunggu di depan klinik ya tadi';
  if (l[0] === 't' && l[1] === 'tau. aku di depan klinik dua jam.') l[1] = 'dua jam. ga boleh masuk. katanya cuma keluarga';
});
MIDNIGHT_CALL.forEach(l => { if (l[0] === 'k' && l[1] === 'aku meringkuk di lantai pantry. yg aku pikirin pas itu: "kris tau ga ya".') l[1] = 'aku sampe ga bisa berdiri di pantry. yg aku pikirin pas itu: "kris tau ga ya".'; });
MIDNIGHT_CALL.forEach(l => { if (l[0] === 'k' && l[1] === 'lucu ya. 8 tahun, dan yg aku pikirin sebelum obatnya bikin aku tidur itu kamu.') l[1] = 'lucu ya. 8 tahun, dan pas lagi sakit gitu yg aku pikirin tetep kamu.'; });

MIDNIGHT_CALL.forEach(l => { if (l[0] === 'k' && l[1] === 'nah. jujur gitu kan enak') l[1] = 'makasih udah jujur.'; });

// ===== bagikan foto dari galeri ke IG (story/post) & X — caption gaya Kino per jenis foto =====
const SHARE_CAPS = {
  igpost: {
    cat: ['tiga anak, nol yg nurut', 'bos gue di rumah', 'yg ini paling galak. mirip siapa ya', 'lagi tidur aja cantik, bangun2 ngeselin'],
    kris: ['lama banget ini', 'nemu di galeri. jangan nanya', 'dulu.', 'ini masih lucu ga sih'],
    food: ['masak lagi. porsinya kebanyakan lagi', 'ga ada yg boleh minta', 'enak kok. kata soonie'],
    other: ['📸', 'random aja', 'hari ini', 'lagi pengen upload'],
  },
  igstory: {
    cat: ['anak gue 🐱', 'ngeliatin apa sih', 'udah makan masih minta'],
    kris: ['.', 'nemu ini', '🙂'],
    food: ['masak sendiri dong', 'makan dulu biar ga diomelin', 'enak ga enak abisin'],
    other: ['hari ini', '☁️', 'ngantuk'],
  },
  xalt: {
    cat: ['kucing gue lebih sayang gue dari siapapun di gedung ini. fakta', 'ngeliatin mereka tidur bikin lupa kalo hidup lagi berantakan. dikit', 'satu2nya yg pasti nungguin gue pulang'],
    kris: ['buka galeri, nemu foto ini, ditutup lagi. kebiasaan buruk', 'dulu kita sering banget foto kayak gini ya. sekarang kapan', 'kenapa sih galeri suka ngingetin hal yg ga diminta'],
    food: ['masak kebanyakan lagi, yg makan gue sama kucing. kayak biasa', 'enak sih. sayang ga ada yg nambah 3x'],
    other: ['ga tau mau nulis apa. pengen upload aja', 'hari ini ya gitu deh'],
  },
  xmain: {
    cat: ['tiga ekor, tiga kepribadian, nol rasa hormat ke gue', 'pagi2 udah dimarahin kucing'],
    kris: ['nemu foto lama', 'galeri gue isinya ini doang ternyata'],
    food: ['masak sendiri. bangga dikit', 'kalo ada yg mau tinggal bilang, porsinya kebanyakan'],
    other: ['📸', 'random'],
  },
};
// komentar temen di post IG Kino / balesan di X utama
const SHARE_REACT = {
  igpost: {
    cat: [['suryalix', 'SOONIE 🥹🥹🥹'], ['junahann', 'bang kucing lo lebih eksis dari lo'], ['gemilangrp', 'boleh gue lukis? 🎨']],
    kris: [['suryalix', '🥹🫶'], ['junahann', 'BANG 😭'], ['sadewaa.k', '...']],
    food: [['suryalix', 'bang share recipe!!'], ['junahann', 'bang sisain 🥺'], ['bagasbinn', 'enak?']],
    other: [['junahann', 'bang posting 😳'], ['suryalix', 'nice 🫶'], ['ilham.jeong', 'tumben']],
  },
  xmain: {
    cat: [['juna', 'KUCING LO LEBIH GALAK DARI LO BANG'], ['surya', '🥹🥹']],
    kris: [['juna', 'bang...'], ['surya', '🫶']],
    food: [['juna', 'MAU'], ['surya', 'recipe pls!!']],
    other: [['juna', 'BANG NGETWEET 😳'], ['ilham', 'tumben']],
  },
};

// ===== buang tambahan ga perlu ("jangan nanya", "ga nyebut nama", dll) =====
{
  const T = {
    'roti di depan pintu kamu. jangan nanya': 'roti di depan pintu kamu',
    'standup jam 9.30 ya. yg telat traktir kopi satu tim. ga nyebut nama, tapi kita semua tau siapa': 'standup jam 9.30 ya. yg telat traktir kopi satu tim',
    'town hall 2 jam, perut perih, kopi ketiga. iya iya gue tau, ga usah diceramahin': 'town hall 2 jam, perut perih, kopi ketiga',
    'ada yg nambah 3x. ga nyebut nama': 'ada yg nambah 3x',
    'rapi dikit hari ini. jangan nanya kenapa': 'rapi dikit hari ini',
    'nemu di galeri. jangan nanya': 'nemu di galeri',
    'udah. ga usah nanya2': 'udah kok',
  };
  const seen = new Set();
  const walk = (v) => { if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v); for (const k of Object.keys(v)) { if (typeof v[k] === 'string') { if (T[v[k]] !== undefined) v[k] = T[v[k]]; } else walk(v[k]); } };
  [CHATS, X_POSTS, ALT, INSTA, STORIES, SHARE_CAPS, typeof TYPE_LINES !== 'undefined' ? TYPE_LINES : null, TYPE_KRIS].forEach(walk);
}

// ===== temen kampus: Hana → Aldrea (dipanggil "drea"), foto profil baru =====
{
  PEOPLE.Aldrea = { ...(PEOPLE.Hana || {}), av: 'img/av-aldrea.jpg' };
  const hc = CHATS.find(c => c.id === 'hana'); hc.name = 'Aldrea (temen kuliah)'; hc.person = 'Aldrea';
  if (typeof TYPE_LINES !== 'undefined' && TYPE_LINES.Hana) { TYPE_LINES.Aldrea = TYPE_LINES.Hana; delete TYPE_LINES.Hana; }
  RANDOM_CALLS.forEach(c => { if (c.who === 'Hana') c.who = 'Aldrea'; });
  const nm = (s) => s.replace(/\bHana\b/g, 'Aldrea').replace(/\bhana\b/g, 'aldrea');
  const nick = (s) => s.replace(/\bhan\b/g, 'drea'); // panggilan Kino ke dia (cuma di obrolan sama dia)
  const seen = new Set();
  const walk = (v, f) => { if (!v || typeof v !== 'object' || seen.has(v)) return; seen.add(v); for (const k of Object.keys(v)) { if (typeof v[k] === 'string') v[k] = f(v[k]); else walk(v[k], f); } };
  // nama: di semua teks (bukan id chat / key)
  [CHATS.map(c => c.msgs), ALT, X_POSTS, ENDINGS, typeof NOTES !== 'undefined' ? NOTES : null, RANDOM_CHATS.map(r => [r.msgs, r.reply]), RANDOM_CALLS.map(c => c.lines), Object.values(CALL_FOLLOW), REPLIES.map(r => r.opts), TYPE_KRIS, typeof TYPE_LINES !== 'undefined' ? TYPE_LINES : null].forEach(x => walk(x, nm));
  seen.clear();
  [hc.msgs, RANDOM_CHATS.filter(r => r.chat === 'hana').map(r => [r.msgs, r.reply]), RANDOM_CALLS.filter(c => c.who === 'Aldrea').map(c => c.lines), CALL_FOLLOW.hana1, REPLIES.filter(r => r.chat === 'hana').map(r => r.opts), typeof TYPE_LINES !== 'undefined' ? TYPE_LINES.Aldrea : null].forEach(x => walk(x, nick));
}
CALL_FOLLOW.hana1.chat = 'hana';

// ===== pesan suara Kris (kalo telponnya ga diangkat) — dia ngomong sendiri =====
{
  const VM = {
    '2026-10-20': [
      ['sayang? kebangun ga…', 'ga bisa tidur. pengen denger suara kamu bentar aja', 'yaudah. night sayang'],
      ['sayang, lagi kerja ya', 'gapapa, cuma pengen nelpon', 'jaketnya nanti aku ambil ya'],
      ['sayang, sorry ya, malem ini kayaknya aku lembur', 'launch minggu ini hectic banget', 'bulgoginya… nanti aku ganti ya'],
      ['sayang, sorry ya soal dinner', 'aku masih di kantor. ini lagi istirahat bentar', 'nanti aku telfon lagi'],
      ['kino, udah tidur ya', 'aku pulang agak telat. kamu tidur duluan', 'bulgoginya sisain ya… kalo masih ada'],
    ],
    '2026-10-21': [
      ['sayang… udah tidur ya', 'aku baru pulang', 'sorry ya'],
      ['kino, sorry ya kemaren', 'lembur, jadi ga jadi dinner', 'nanti aku ganti ya'],
      ['kino, aku masih meeting ya', 'cuma mau bilang itu'],
      ['kino', 'baru kelar. capek banget', '…kamu ga pengen tau aku ngapain aja?', 'oke. night'],
    ],
    '2026-10-22': [
      ['pagi sayang', 'minggu ini aku jarang di apart ya, kerjaan numpuk', 'jangan lupa makan'],
      ['halo sayang', 'aku nginep kantor lagi ya malem ini', '…sendiri kok'],
      ['kino, aku ga pulang ya malem ini', 'sorry', 'tidur di kantor. jangan khawatir'],
    ],
  };
  Object.entries(VM).forEach(([d, list]) => (KRIS_CALL[d] || []).forEach((o, i) => { if (o && list[i]) o.vm = list[i].map(t => ['t', t]); }));
}

// ===== kalo Kino nelpon Kris tgl 25 ke atas: jawabannya ngikut ending =====
const KRIS_AFTER = {
  maafin: [
    { to: '09:09', lines: [['t', 'halo… pagi sayang'], ['t', 'aku baru bangun. bentar lagi aku turun ya, bawa sarapan'], ['k', 'jangan lama']] },
    { from: '09:10', to: '11:59', lines: [['t', 'sayang, aku di dapur kamu 😂'], ['t', 'kamu nelpon dari kamar?'], ['k', 'males jalan'], ['t', 'iya iya aku ke situ']] },
    { from: '12:00', lines: [['t', 'sayang? kenapa'], ['k', 'gapapa. nyari kamu'], ['t', 'aku di ruang tamu. sini']] },
  ],
  jeda: [{ lines: [['t', 'kino?'], ['t', 'kamu gapapa?'], ['k', 'salah pencet'], ['t', 'oke. aku ga ganggu'], ['t', 'happy birthday ya']] }],
  turun: [{ lines: [['t', 'kino…?'], ['k', 'salah pencet.'], ['t', 'oke.'], ['t', '…selamat ulang tahun.']] }],
  waktu: null, // ga diangkat
};

// ===== Kino nelpon temen: obrolan beda tiap hari (sekali per hari), abis itu baru CALL_AGAIN =====
const CALL_DAY = {
  Juna: {
    [D20]: [['t', 'BANG?? 😳'], ['k', 'patch lo udah?'], ['t', 'otw bang… 70%'], ['k', 'jam 5 harus kelar'], ['t', 'siap bang 🫡😭']],
    [D21]: [['t', 'bang tumben nelfon siang2'], ['k', 'staging mati lagi?'], ['t', 'udah nyala kok bang, ilham restart 2x'], ['k', 'oke. makan dulu sana'], ['t', 'BANG PERHATIAN BGT HARI INI 🥹']],
    [D22]: [['t', 'bang lo jadi dinner ntar?'], ['k', 'jadi'], ['t', 'YESS. gue duduk sebelah lo ya'], ['k', 'jangan ribut'], ['t', 'ga janji 😋']],
    [D23]: [['t', 'bang…'], ['k', 'lo tadi chat soal kris kan'], ['t', 'iya bang 😶 gue ga maksud ngadu'], ['k', 'iya. makasih jun'], ['t', 'bang lo oke? 🥺'], ['k', 'oke kok']],
    [D24]: [['t', 'BANG ERROR NYA NAIK LAGI 😭'], ['k', 'iya gue liat. pegang monitoring'], ['t', 'oke bang 😭🙏']],
  },
  Surya: {
    [D20]: [['t', 'hii bang kino 🥰'], ['k', 'soonie lo kasih makan apa tadi'], ['t', 'just a lil bit of cheese 🥺'], ['k', 'sur.'], ['t', 'okay okay no more cheese 🫡']],
    [D21]: [['t', 'bang!! I just baked'], ['k', 'pake kismis?'], ['t', 'NO. never. I promise 🫶'], ['k', 'yaudah taro depan pintu'], ['t', 'okayy 🥹']],
    [D22]: [['t', 'bang you coming tonight kan??'], ['k', 'iya, jam 7'], ['t', 'I made japchae with extra mushroom 🍄'], ['k', 'oke. sisain'], ['t', 'always for you bang 🫶']],
    [D23]: [['t', 'bang… you okay?'], ['k', 'oke kok sur'], ['t', 'you sound tired 🥺'], ['k', 'ngantuk doang'], ['t', 'okayy. I\'m right next door ya']],
    [D24]: [['t', 'bang I heard prod is down 😭'], ['k', 'iya. nanti ya sur'], ['t', 'okay!! fighting 💪']],
  },
  Sadewa: {
    [D20]: [['t', 'kenapa bang'], ['k', 'laundry lt 2 kosong ga'], ['t', 'kosong. buruan'], ['k', 'oke']],
    [D21]: [['t', 'hm'], ['k', 'lo lagi di mana'], ['t', 'di luar'], ['k', 'oh. oke'], ['t', '…nanti gue cerita']],
    [D22]: [['t', 'bang'], ['k', 'soal yg lo chat tadi'], ['t', 'gue cuma ga mau lo kaget belakangan'], ['k', 'iya. thanks dew'], ['t', 'hm']],
    [D23]: [['t', 'udah makan?'], ['k', 'udah'], ['t', 'boong'], ['k', '…nanti'], ['t', 'gue taro roti depan pintu lo']],
    [D24]: [['t', 'bang lo di war room?'], ['k', 'iya'], ['t', 'oke. ga ganggu']],
  },
  Gemilang: {
    [D20]: [['t', 'BANGG 😩'], ['k', 'lo makan sama kris ya tadi'], ['t', '…iya bang. gue kira lo ikut'], ['k', 'oh. oke. enak?'], ['t', 'bang jangan gitu gue jadi ga enak 😭']],
    [D21]: [['t', 'bang liat langit sore ga'], ['k', 'liat'], ['t', 'bagus kan 🥺'], ['k', 'lumayan lah lang']],
    [D22]: [['t', 'bang dresscode dinner apa'], ['k', 'baju'], ['t', 'JAWABAN LO SELALU GITU 😩'], ['k', 'iya']],
    [D23]: [['t', 'bang lo udah makan?'], ['k', 'lo kenapa nanya terus'], ['t', 'karena lo ga pernah jawab jujur 😩'], ['k', '…nanti makan'], ['t', 'janji ya bang 💐']],
    [D24]: [['t', 'bang semangat 🥺💐'], ['k', 'iya lang. makasih']],
  },
  Bagas: {
    [D20]: [['t', 'kino'], ['k', 'obeng gue mana'], ['t', 'besok'], ['k', 'oke']],
    [D21]: [['t', 'apa'], ['k', 'jaket lo masih di kris kan'], ['t', 'iya. ambilin'], ['k', 'ambil sendiri'], ['t', 'k']],
    [D22]: [['t', 'kino'], ['k', 'lo ikut dinner?'], ['t', 'ikut. bawa minum'], ['k', 'oke']],
    [D23]: [['t', 'hm'], ['k', 'yg lo bilang tadi bener?'], ['t', 'bener. cuti dari kemaren'], ['k', '…oke'], ['t', 'lo gapapa?'], ['k', 'gapapa']],
    [D24]: [['t', 'kino. makan'], ['k', 'nanti'], ['t', 'sekarang']],
  },
  Ilham: {
    [D20]: [['t', 'iya bang?'], ['k', 'besok standup ngomong apa udah siap?'], ['t', 'udah bang, dikit'], ['k', 'oke. jangan deg2an']],
    [D21]: [['t', 'bang ada apa'], ['k', 'staging aman?'], ['t', 'aman bang, abis direstart'], ['k', 'good job ham'], ['t', '🥺 makasih bang']],
    [D22]: [['t', 'bang'], ['k', 'yg kris tanya di lift itu'], ['t', 'iya bang… gue jadi kepikiran'], ['k', 'gapapa. makasih udah cerita']],
    [D23]: [['t', 'bang besok gue shadow on call lo ya?'], ['k', 'iya. ada gue'], ['t', 'makasih bang 🥺']],
    [D24]: [['t', 'bang lock nya masih ga lepas 😭'], ['k', 'tunggu. gue cek'], ['t', 'iya bang']],
  },
  Mama: {
    [D20]: [['t', 'nak? udah makan?'], ['k', 'udah ma'], ['t', 'kris gimana? sehat?'], ['k', 'sehat ma, lagi sibuk'], ['t', 'salamin ya']],
    [D21]: [['t', 'halo nak'], ['k', 'ma, kimchinya kapan dikirim'], ['t', 'minggu ini ya. kamu mau yg asem kan'], ['k', 'iya ma']],
    [D22]: [['t', 'nak, suara kamu kok capek'], ['k', 'kerjaan ma'], ['t', 'jangan lupa makan. maag kamu'], ['k', 'iya ma']],
    [D23]: [['t', 'nak? kenapa nelpon malem2'], ['k', 'gapapa ma. pengen denger suara mama'], ['t', 'ya ampun anak mama. ada apa?'], ['k', 'gapapa beneran'], ['t', 'kalo ada apa2 cerita ya nak']],
    [D24]: [['t', 'nak, besok pulang kan?'], ['k', 'iya ma, abis kerjaan beres'], ['t', 'mama bikinin kue']],
  },
  Mina: {
    [D20]: [['t', 'kino? ada apa'], ['k', 'kak, ssl staging gue yg kerjain ya'], ['t', 'oke. juna?'], ['k', 'patch'], ['t', 'sip']],
    [D21]: [['t', 'kino, kenapa'], ['k', 'kak, gue minta izin besok sore pulang duluan'], ['t', 'boleh. ada urusan?'], ['k', 'iya kak'], ['t', 'oke 👍']],
    [D22]: [['t', 'kino? semangat ya nanti sore'], ['k', 'makasih kak'], ['t', 'gue ga bilang siapa2 kok']],
    [D23]: [['t', 'kino, town hall jangan kabur'], ['k', 'iya kak'], ['t', 'duduk depan sama gue']],
    [D24]: [['t', 'kino, CTO nanya ETA lagi'], ['k', 'belum kak. 30 menit lagi gue update'], ['t', 'oke. tarik napas']],
  },
  Aldrea: {
    [D20]: [['t', 'KINOOO'], ['k', 'apa drea'], ['t', 'reuni jadi bulan depan!! ikut ya'], ['k', 'liat nanti']],
    [D21]: [['t', 'kino! dresscode reuni item ya, udah gue tebak wkwk'], ['k', 'iya'], ['t', 'kris ikut kan?'], ['k', '…liat nanti']],
    [D22]: [['t', 'kino, lo kok jarang bales grup angkatan'], ['k', 'sibuk drea'], ['t', 'oke oke. jaga kesehatan ya']],
    [D23]: [['t', 'kino? tumben nelfon'], ['k', 'gapapa. lo apa kabar'], ['t', 'baik! lo? suara lo capek'], ['k', 'capek doang'], ['t', 'istirahat ya']],
    [D24]: [['t', 'kino… lo udah liat chat gue?'], ['k', 'udah'], ['t', 'sorry ya'], ['k', 'bukan salah lo, drea']],
  },
};

// ===== ketikan Kino: dikunci ke hari/jam yg nyambung (biar ga muncul tiap hari) + topik dobel diganti =====
{
  const AFTER = { since: '2026-10-24T20:40', until: '2026-10-26T00:00' }; // abis keluar klinik
  const G = {
    Juna: { 'gue gapapa kok jun': AFTER, 'kopi venti jgn lupa': { d: [D24], to: '08:00' }, 'charger gue mana': { d: [D21] } },
    Surya: { 'gue gapapa sur. jgn nangis': AFTER, 'jgn kasih soonie keju lagi': { since: '2026-10-20T16:15', until: '2026-10-22T00:00' } },
    Sadewa: { 'gue ga kenapa2': { since: '2026-10-22T18:55', until: '2026-10-24T08:00' }, 'laundry lt 2 kosong': { d: [D21], to: '12:00' } },
    Gemilang: { 'gue gapapa kok lang': AFTER, 'makan dulu': { d: [D23] } },
    Bagas: { 'lo bener soal yg semalem': { since: '2026-10-24T00:00', until: '2026-10-24T13:00' }, 'obeng gue mana': { d: [D22] } },
    Ilham: { 'gue udh bangun. thanks udh ngabarin': AFTER, 'log server udah lo cek?': { d: [D24], from: '08:05', to: '17:00' } },
    Mama: { 'ma aku gapapa. jgn khawatir': AFTER, 'kimchinya udah sampe ma': { d: [D24], from: '09:00', to: '17:30' } },
    Mina: { 'kak maaf ngerepotin': AFTER },
    grup: { 'gue gapapa. jgn rame': AFTER, 'ayam lagi ga': { d: [D21] } },
    Aldrea: { 'kayaknya gue dateng reuni sendiri': { since: '2026-10-23T13:30' }, 'jgn bilang siapa2 soal foto itu': { since: '2026-10-24T13:55' }, 'makasih udah bilang': { since: '2026-10-24T13:55' } },
  };
  Object.entries(G).forEach(([who, m]) => (TYPE_LINES[who] || []).forEach(l => { if (m[l[0]] && !l[2]) l[2] = m[l[0]]; }));
  // Gemilang: "langit" cukup sekali (telpon tgl 21); chat iseng & telpon harian diganti topik
  const rg = RANDOM_CHATS.find(r => r.id === 'rc-gemilang');
  rg.msgs = [['them', 'bang gue lagi gambar soonie dari foto lo 🎨'], ['them', 'boleh ga? 🥺']]; rg.reply = ['boleh. jangan jelek', ['HAHAHA siap 😩🎨', 'nanti gue kirim']];
  CALL_DAY.Gemilang[D21] = [['t', 'bang lo udah liat lukisan baru gue di x?'], ['k', 'udah'], ['t', 'judulnya bagus ga 🥺'], ['k', 'lumayan lah lang']];
  // Bagas: "obeng" cukup di telpon iseng tgl 21 + ketikan tgl 22
  CALL_DAY.Bagas[D20] = [['t', 'kino'], ['k', 'lo lari pagi tadi?'], ['t', '5k. dingin'], ['k', 'gila'], ['t', 'k']];
}
{ const rs = RANDOM_CHATS.find(r => r.id === 'rc-surya'); rs.msgs = [['them', 'bang do you have extra eggs? 🥚'], ['them', 'mau bikin brownies tapi telurnya kurang satu 🥺']]; rs.reply = ['ada. ambil sendiri', ['you\'re the best bang 🫶']]; }

// ===== DM X (akun utama) & DM IG — read only, muncul sesuai jam =====
X_USERS.rose88 = { name: 'Rose 🌹', handle: 'cryptoqueen_rose88', emoji: '🌹', followers: 12, following: 4980 };
const X_DMS = {
  kino: [
    { u: 'kris', msgs: [
      ['2026-10-03T00:07', 'kris', 'makasih tweetnya 🥹 aku udah nangis btw'], ['2026-10-03T00:08', 'me', 'udah tau'],
      ['2026-10-24T13:44', 'kris', 'tadi liat kucing mirip dori di jalan'], ['2026-10-24T13:44', 'kris', 'pengen fotoin buat kamu tapi dia keburu kabur'],
    ] },
    { u: 'juna', msgs: [
      ['2026-10-21T11:06', 'juna', 'bang liat tweet akun meme 😭 itu lo banget'], ['2026-10-21T11:20', 'me', 'gue ga pake capslock'], ['2026-10-21T11:21', 'juna', 'BARUSAN LO PAKE DI GRUP 😭'],
      ['2026-10-24T10:05', 'juna', 'bang twitter rame banget soal prod 😭 jangan dibuka'],
    ] },
    { u: 'surya', msgs: [
      ['2026-10-21T21:02', 'surya', 'bang thank you for agreeing w me 🥹 raisins are a crime'], ['2026-10-21T21:10', 'me', 'emang'],
    ] },
    { u: 'rose88', msgs: [
      ['2026-10-22T03:12', 'rose88', 'hi dear 🌹 i see your profile and i want to be friend'], ['2026-10-22T03:13', 'rose88', 'do you know about crypto investment?'],
    ] },
  ],
  alt: [],
};
const IG_DMS = [
  { u: 'kris.chandra', msgs: [
    ['2026-10-15T23:50', 'kris.chandra', '[reel] ini kamu banget 😂'], ['2026-10-16T07:10', 'me', 'ngga'], ['2026-10-16T07:11', 'kris.chandra', 'iya 😂'],
    ['2026-10-21T07:05', 'kris.chandra', '↪ membalas story kamu: semangat sayang'],
  ] },
  { u: 'suryalix', msgs: [
    ['2026-10-20T07:40', 'suryalix', '↪ membalas story kamu: soonie the alarm clock 🥹'],
    ['2026-10-21T07:10', 'suryalix', '↪ membalas story kamu: hang in there bang 🫶'], ['2026-10-21T07:30', 'me', 'iya sur'],
  ] },
  { u: 'junahann', msgs: [
    ['2026-10-17T22:10', 'junahann', '[reel] bang ini lo pas liat deploy gue 😭'], ['2026-10-17T22:30', 'me', 'iya'],
    ['2026-10-23T08:05', 'junahann', '↪ membalas story kamu: BANG KINO NGOMONG YAELAAH 😳'],
  ] },
  { u: 'gemilangrp', msgs: [
    ['2026-10-21T15:05', 'gemilangrp', 'bang liat lukisan baru gue di x 🎨'], ['2026-10-21T15:40', 'me', 'udah liat'], ['2026-10-21T15:41', 'gemilangrp', 'TERUS?? 😩'],
  ] },
];

// ===== tweet tambahan: semua orang tiap hari =====
X_POSTS.push(
  ['xa01', 'juna', '2026-10-20T08:40', 'alarm 5x, snooze 5x. kita seimbang', '', [['ilham', 'telat lagi'], ['juna', 'BELUM 😭']], 34],
  ['xa02', 'juna', '2026-10-20T13:10', 'bang kino bilang patch gue "lumayan". ini hari terbaik dalam hidup gue 😭', '', [['surya', 'proud of u 🥹'], ['ilham', 'lumayan doang']], 71],
  ['xa03', 'juna', '2026-10-21T09:35', 'standup: "kemaren ngapain jun?"\ngue: *blank*', '', [['ilham', 'saksi'], ['kino', 'kerjain hari ini']], 88],
  ['xa04', 'juna', '2026-10-21T17:45', 'pulang kantor liat soonie di jendela unit sebelah, dia natap gue kayak bos', '', [['surya', 'she is the boss 🥹']], 64],
  ['xa05', 'juna', '2026-10-22T12:00', 'makan siang: gimbap\nbudget: tanggal tua\nhati: rapuh', '', [['gemilang', 'sama 😩']], 52],
  ['xa06', 'juna', '2026-10-22T20:30', 'dinner tetangga terbaik. bang kino senyum 2x (surya yg ngitung)', '', [['surya', 'THREE actually 🫶']], 97],
  ['xa07', 'juna', '2026-10-23T09:20', 'gue ketinggalan bus padahal kantor tinggal turun lift nyebrang ke tower A. hidup gue komedi', '', [['ilham', 'tragedi'], ['bagas', 'k']], 120],
  ['xa08', 'juna', '2026-10-23T18:00', 'senin gue traktir kopi satu tim. dompet gue nangis duluan', '', [['ilham', 'venti ya']], 44],
  ['xa09', 'juna', '2026-10-24T20:45', 'bang kino udah bangun 😭😭 gue bisa napas lagi', '', [['surya', '🥹🥹🫶'], ['gemilang', '💐💐']], 260],
  ['xa10', 'juna', '2026-10-25T00:01', 'HBD BANG KINO 🐰🎂 senior paling galak sekaligus paling baik', '', [['ilham', 'setuju'], ['surya', '🎂🫶']], 310],
  ['xb01', 'surya', '2026-10-20T10:00', 'morning walk with no destination ☀️', '', [], 88],
  ['xb02', 'surya', '2026-10-21T14:00', 'testing new recipe: brownies w sea salt 🍫🧂', '', [['juna', 'TESTER NYA GUE YA']], 140],
  ['xb03', 'surya', '2026-10-22T15:30', 'japchae for 8 people. wish me luck 🥲', '', [['gemilang', 'semangat 💐']], 130],
  ['xb04', 'surya', '2026-10-23T12:30', 'lunch alone today. still cute tho 💛', '', [], 76],
  ['xb05', 'surya', '2026-10-24T19:40', 'made sup ayam for someone who never eats properly 🥲🍲', '', [['bagas', 'gue bubur'], ['surya', 'teamwork 🫶']], 230],
  ['xb06', 'surya', '2026-10-25T00:02', 'happy birthday to the grumpiest bunny 🐰🫶', '', [['juna', '🐰🐰🐰']], 280],
  ['xc01', 'gemilang', '2026-10-20T09:30', 'pagi2 udah dramatis. maaf ya dunia 😩', '', [], 45],
  ['xc02', 'gemilang', '2026-10-21T11:00', 'kanvas baru, mood lama 🎨', '', [['surya', '🎨💛']], 60],
  ['xc03', 'gemilang', '2026-10-22T21:30', 'dinner tetangga: hangat. kursi kosong: dingin 💐', '', [['sadewa', '…']], 110],
  ['xc04', 'gemilang', '2026-10-23T16:00', 'gue gambar orang lagi nunggu. ga sengaja jadi sedih 😩', '', [], 92],
  ['xc05', 'gemilang', '2026-10-25T00:03', 'hbd bang kino 💐🎨 lukisan khusus lagi otw', '', [['juna', 'SPOILER']], 150],
  ['xd01', 'sadewa', '2026-10-20T22:00', 'buku ketiga bulan ini.', '', [], 21],
  ['xd02', 'sadewa', '2026-10-22T07:30', 'kopi item. tanpa gula.', '', [], 18],
  ['xd03', 'sadewa', '2026-10-24T18:40', 'dua jam di depan klinik. ga dingin. bohong', '', [['juna', '🥺']], 64],
  ['xd04', 'sadewa', '2026-10-25T00:05', 'hbd bang.', '', [], 40],
  ['xe01', 'ilham', '2026-10-20T08:50', 'hari ke-30 magang. masih hidup', '', [['juna', 'selamat 🎉']], 30],
  ['xe02', 'ilham', '2026-10-21T10:30', 'senior gue jelasin root cause pake analogi kucing. gue paham. takjub', '', [['juna', 'pasti soal soonie']], 48],
  ['xe03', 'ilham', '2026-10-23T08:00', 'besok shadow on call bang kino. deg2an', '', [['kino', 'ada gue']], 36],
  ['xe04', 'ilham', '2026-10-24T12:40', 'prod sempet up. gue sempet seneng. 13 menit', '', [['juna', '😭']], 70],
  ['xe05', 'ilham', '2026-10-24T21:40', 'bang kino cepet sembuh ya 🥺', '', [['surya', '🫶']], 120],
  ['xf01', 'bagas', '2026-10-20T06:30', '5k. pagi.', '', [], 11],
  ['xf02', 'bagas', '2026-10-22T06:30', '7k.', '', [], 9],
  ['xf03', 'bagas', '2026-10-23T06:40', 'skip lari. mikir.', '', [], 8],
  ['xf04', 'bagas', '2026-10-24T21:10', 'bubur. depan pintu. udah.', '', [['surya', '🥹']], 30],
  ['xf05', 'bagas', '2026-10-25T06:30', '10k. buat yg ultah.', '', [['juna', 'BANG BAGAS 😭']], 60],
  ['xg01', 'kris', '2026-10-20T12:05', 'makan siang sendiri. enak juga ternyata', '', [], 14],
  ['xg02', 'kris', '2026-10-22T23:30', 'jalan malem. dingin.', '', [], 7],
  ['xh01', 'cuaca', '2026-10-21T07:00', 'Seoul 10°, cerah berawan. Angin dingin sore hari 🍂', '', [], 290],
  ['xh02', 'cuaca', '2026-10-23T07:00', 'Seoul 9°, cerah. Malam turun ke 4° 🧣', '', [], 300],
  ['xh03', 'cuaca', '2026-10-25T07:00', 'Seoul 12°, cerah. Hari yang bagus buat jalan-jalan ☀️', '', [], 310],
  ['xi01', 'meme', '2026-10-20T15:00', 'kerja remote: atasan kemeja, bawahan celana pendek, mental lepas', '', [], 9100],
  ['xi02', 'meme', '2026-10-22T11:00', 'standup meeting: 15 menit\nstandup meeting kalo ada yg cerita mimpi: 45 menit', '', [], 8700],
  ['xi03', 'meme', '2026-10-23T14:00', 'jumat sore\nPM: bisa deploy ga?\nengineer: *pura2 sinyal jelek*', '', [], 11000],
);
X_POSTS.forEach(p => { if (p[0] === 'xd03') p[3] = 'nungguin di depan klinik. ga ada yg ngomong. semua takut'; });

// ===== DM tambahan (X & IG) =====
{
  const xd = (u) => X_DMS.kino.find(d => d.u === u);
  xd('kris').msgs.push(['2026-10-22T23:58', 'kris', 'kamu udah tidur?']);
  xd('kris').msgs.sort((a, b) => a[0] < b[0] ? -1 : 1);
  xd('juna').msgs.push(['2026-10-22T09:45', 'juna', 'bang standup gue tadi oke kan? 🥺'], ['2026-10-22T10:00', 'me', 'oke'], ['2026-10-22T10:00', 'juna', '🥹🥹🥹'], ['2026-10-25T00:00', 'juna', 'BANG UDAH JAM 12 😭🎂 HBD!!']);
  xd('juna').msgs.sort((a, b) => a[0] < b[0] ? -1 : 1);
  xd('surya').msgs.push(['2026-10-22T16:10', 'surya', 'bang brownies batch 2 is for you 🍫'], ['2026-10-22T16:30', 'me', 'taro depan pintu'], ['2026-10-24T22:40', 'surya', 'feel better bang 🥺🫶']);
  xd('surya').msgs.sort((a, b) => a[0] < b[0] ? -1 : 1);
  X_DMS.kino.push(
    { u: 'gemilang', msgs: [['2026-10-21T15:10', 'gemilang', 'bang liat tweet lukisan gue 😩'], ['2026-10-21T15:30', 'me', 'udah'], ['2026-10-21T15:31', 'gemilang', 'TERUS?? komentar dong 😩'], ['2026-10-21T15:40', 'me', 'bagus']] },
    { u: 'ilham', msgs: [['2026-10-23T09:00', 'ilham', 'bang besok kalo gue nangis pas on call jangan diketawain'], ['2026-10-23T09:20', 'me', 'ga'], ['2026-10-23T09:21', 'ilham', 'makasih bang 🥺']] },
    { u: 'meme', msgs: [['2026-10-20T15:05', 'meme', 'Hai! Kamu udah follow akun ini 100 hari 🎉 makasih udah ketawa bareng kami']] },
  );
  const ig = (u) => IG_DMS.find(d => d.u === u);
  ig('kris.chandra').msgs.push(['2026-10-23T08:02', 'kris.chandra', '↪ membalas story kamu: pake jaket']);
  ig('suryalix').msgs.push(['2026-10-23T08:10', 'suryalix', '↪ membalas story kamu: pake syal bang 🧣'], ['2026-10-25T10:10', 'suryalix', '↪ membalas story kamu: NOT OLD. vintage 🫶']);
  ig('junahann').msgs.push(['2026-10-25T10:05', 'junahann', '↪ membalas story kamu: TUA 🎂😭']);
  IG_DMS.push(
    { u: 'ilham.jeong', msgs: [['2026-10-21T07:20', 'ilham.jeong', '↪ membalas story kamu: semangat bang 🫡'], ['2026-10-21T07:40', 'me', 'iya ham']] },
    { u: 'bagasbinn', msgs: [['2026-10-25T06:35', 'bagasbinn', '[foto] 10k. hbd.']] },
    { u: 'sadewaa.k', msgs: [['2026-10-22T22:20', 'sadewaa.k', '[reel] kucing yg mirip dori'], ['2026-10-22T22:40', 'me', 'dori lebih cantik']] },
  );
  IG_DMS.forEach(d => d.msgs.sort((a, b) => a[0] < b[0] ? -1 : 1));
}

// ===== Kino bales story temen (IG) → masuk DM, temennya bales =====
const IG_STORY_REPLY = {
  'kris.chandra': [['ramen sama siapa', ['sama anak kantor 😅']], ['lembur kok sempet upload', ['lagi break bentar']], ['jangan pulang malem2', ['iya sayang']]],
  junahann: [['kerja jun', ['BANG INI JAM ISTIRAHAT 😭']], ['ganteng dari mana', ['BANG 😭💔']], ['tidur jun', ['iya bang 🙏']]],
  suryalix: [['sisain satu', ['always for you bang 🫶']], ['jangan kebanyakan gula', ['noted!! less sugar 🫡']], ['lucu', ['BANG KINO BILANG LUCU 🥹🥹']]],
  gemilangrp: [['bagus lang', ['🥹💐 makasih bang']], ['jangan begadang', ['iya bang 😩']], ['gambarin soonie dong', ['DENGAN SENANG HATI 🎨']]],
  'sadewaa.k': [['film apa', ['nanti gue kasih tau']], ['lo di mana', ['luar']], ['jangan lupa makan', ['lo juga']]],
  'ilham.jeong': [['semangat ham', ['🥺 makasih bang']], ['jangan panik', ['ga panik. dikit']], ['good job', ['…makasih bang']]],
  bagasbinn: [['gila lo', ['biasa']], ['ajak gue', ['jam 5. lobi']], ['jangan kecapean', ['hm']]],
};

// ===== DM IG dari balesan story (temen bales story Kino + Kino bales story temen) =====
{
  const R = (u, list) => { let d = IG_DMS.find(x => x.u === u); if (!d) IG_DMS.push(d = { u, msgs: [] }); d.msgs.push(...list); d.msgs.sort((a, b) => a[0] < b[0] ? -1 : 1); };
  const S2 = '↪ membalas story kamu: ', ME = '↪ membalas story: ';
  R('junahann', [
    ['2026-10-20T07:50', 'junahann', S2 + 'soonie > alarm gue 😭'],
    ['2026-10-20T08:55', 'me', ME + 'selasa jun'], ['2026-10-20T08:56', 'junahann', 'OH IYA 😭'],
    ['2026-10-21T12:45', 'me', ME + 'makan nasi jun'], ['2026-10-21T12:46', 'junahann', 'BANG LO JUGA 😭'],
    ['2026-10-22T19:25', 'me', ME + 'hapus jun'], ['2026-10-22T19:26', 'junahann', 'GA MAU 😭 ini bukti'],
    ['2026-10-22T23:55', 'junahann', S2 + 'bang?? 🥺'],
    ['2026-10-23T15:35', 'me', ME + 'jun.'], ['2026-10-23T15:36', 'junahann', 'IYA BANG GUE 😭'],
    ['2026-10-25T00:25', 'me', ME + 'iya jun'], ['2026-10-25T00:26', 'junahann', 'BANG 😭😭'],
  ]);
  R('suryalix', [
    ['2026-10-20T16:35', 'me', ME + 'gue'], ['2026-10-20T16:36', 'suryalix', 'say no more 🫶 depan pintu ya'],
    ['2026-10-22T11:10', 'me', ME + 'jamurnya banyakin'], ['2026-10-22T11:11', 'suryalix', 'noted!! extra mushroom 🍄🫡'],
    ['2026-10-22T23:52', 'suryalix', S2 + '🫂'],
    ['2026-10-25T00:20', 'me', ME + 'makasih sur'], ['2026-10-25T00:21', 'suryalix', '🫶🫶🫶'],
  ]);
  R('kris.chandra', [['2026-10-20T08:05', 'kris.chandra', S2 + 'kucing kita emang rajin 😂'], ['2026-10-20T08:10', 'me', 'kucing aku'], ['2026-10-20T08:11', 'kris.chandra', 'kita*']]);
  R('gemilangrp', [
    ['2026-10-21T07:30', 'gemilangrp', S2 + 'bang sama 😩 rabu tuh musuh'],
    ['2026-10-21T18:20', 'me', ME + 'bagus'], ['2026-10-21T18:21', 'gemilangrp', 'BANG KINO BILANG BAGUS 😭💐'],
    ['2026-10-23T22:10', 'me', ME + 'kenapa biru'], ['2026-10-23T22:12', 'gemilangrp', 'gatau bang. lagi biru aja kali 😩'],
    ['2026-10-25T10:15', 'gemilangrp', S2 + 'TUA TAPI GANTENG 💐'],
  ]);
  R('bagasbinn', [
    ['2026-10-20T13:00', 'me', ME + 'besok jalan lo aneh'], ['2026-10-20T13:05', 'bagasbinn', 'udah biasa'],
    ['2026-10-23T08:20', 'bagasbinn', S2 + 'pake 2 lapis'], ['2026-10-23T08:30', 'me', 'iyaa'],
    ['2026-10-24T22:05', 'me', ME + 'makasih bin'], ['2026-10-24T22:06', 'bagasbinn', 'hm'],
    ['2026-10-25T10:20', 'bagasbinn', S2 + 'hbd'],
  ]);
  R('sadewaa.k', [
    ['2026-10-20T23:40', 'me', ME + 'sama'], ['2026-10-20T23:45', 'sadewaa.k', 'tidur bang'],
    ['2026-10-22T23:58', 'sadewaa.k', S2 + 'kenapa'],
    ['2026-10-25T10:25', 'sadewaa.k', S2 + 'iya. tua'],
  ]);
  R('ilham.jeong', [
    ['2026-10-21T10:25', 'me', ME + 'restart ham'], ['2026-10-21T10:26', 'ilham.jeong', 'udah bang 🙄 2x'],
    ['2026-10-22T21:40', 'me', ME + 'pinter'], ['2026-10-22T21:41', 'ilham.jeong', '…makasih bang 🥺'],
    ['2026-10-25T10:12', 'ilham.jeong', S2 + 'masih muda bang 🦊'],
  ]);
}

// ===== Catatan: tanggal beneran (bukan "Senin" mati) + catatan baru tiap hari =====
NOTES.find(n => n.id === 'jjigae').ts = '2026-10-16T21:10';
NOTES.push(
  { id: 'n20', title: 'belanja', ts: '2026-10-20T08:05', body: 'daging bulgogi 500gr\nbawang bombay\nwijen\ndaun bawang\n\nporsi dua.' },
  { id: 'n21', title: 'persiapan interview', ts: '2026-10-21T11:15', body: 'kenapa s2 sekarang?\n- mau tumbuh\n- sebelum 30\n\ncerita insiden prod bulan juli\nngomongnya pelan2\njangan kebanyakan "eh"' },
  { id: 'n22', title: 'abis interview', ts: '2026-10-22T18:30', body: 'kayaknya lancar\nprof ashby senyum 2x\nlupa bilang soal paper\nyaudah\n\nkabarin siapa ya' },
  { id: 'n23', title: 'kalo ketemu kris', ts: '2026-10-23T22:30', body: '1. jangan marah dulu\n2. tanya baik2\n3. jangan nangis\n\n(3 susah)' },
  { id: 'n24', title: 'obat', ts: '2026-10-24T21:00', body: 'obat lambung 3x sehari sebelum makan\nobat mual kalo perlu\n\nkata dokter: makan teratur. kopi dikurangin.\niya iya' },
  { id: 'n25', title: 'ulang tahun', ts: '2026-10-25T14:00', body: 'mama: kue\nsurya: brownies\njuna: susu pisang 6\ngemilang: bunga (kegedean)\nbagas: 10k (?)\n\nmakasih semua. beneran' },
);

// ===== Safari: pencarian tambahan tiap hari =====
SAFARI.push(
  ['2026-10-20T08:10', 'bulgogi marinasi berapa jam biar empuk', 'google.com'],
  ['2026-10-20T19:20', 'cara nyimpen bulgogi biar besok masih enak', 'google.com'],
  ['2026-10-20T23:20', 'ramen lampu kuning hapjeong ke yeouido berapa menit', 'google.com'],
  ['2026-10-21T08:20', 'interview msc pertanyaan yang sering ditanya', 'google.com'],
  ['2026-10-21T16:40', 'kenapa pasangan tiba2 sering lembur', 'google.com'],
  ['2026-10-21T22:25', 'film bioskop tayang jam 8 malem yongsan', 'google.com'],
  ['2026-10-22T07:40', 'cara biar ga deg2an sebelum interview online', 'google.com'],
  ['2026-10-22T16:20', 'tes kamera & mic teams', 'support.microsoft.com'],
  ['2026-10-22T23:05', 'tidur di kantor beneran boleh ga', 'google.com'],
  ['2026-10-23T01:30', 'pacar ga ngabarin seharian normal ga', 'google.com'],
  ['2026-10-23T12:40', 'arti centang satu tapi online', 'google.com'],
  ['2026-10-23T23:40', 'cara nanya baik2 ke pacar tanpa kedengeran nuduh', 'google.com'],
  ['2026-10-24T03:10', 'ga bisa tidur sebelum ultah normal ga', 'google.com'],
  ['2026-10-24T21:15', 'makanan aman buat maag kambuh', 'google.com'],
  ['2026-10-24T22:50', 'obat lambung diminum sebelum atau sesudah makan', 'google.com'],
  ['2026-10-25T09:15', 'oxford msc offer next steps', 'ox.ac.uk'],
  ['2026-10-25T13:30', 'kue tart disimpen di kulkas tahan berapa hari', 'google.com'],
);

// ===== Kino bales DM (X & IG): baris per orang, sekali pake =====
const DM_KINO = {
  x: {
    kris: [['iya', ['…oke']]],
    juna: [['kerja jun', ['IYA BANG 😭']], ['jangan lupa makan', ['BANG PERHATIAN BGT 🥹']]],
    surya: [['makasih sur', ['🫶🫶']], ['jangan kebanyakan gula', ['noted!! 🫡']]],
    gemilang: [['bagus lang', ['🥹💐 makasih bang']]],
    ilham: [['semangat ham', ['🥺 makasih bang']]],
    rose88: [['ga', ['dear why so cold 🌹']]],
  },
  ig: {
    'kris.chandra': [['iya', ['hehe']]],
    junahann: [['tidur jun', ['iya bang 🙏']], ['kerja', ['BANG 😭']]],
    suryalix: [['makasih sur', ['🫶']], ['sisain satu', ['always 🫶']]],
    gemilangrp: [['iya lang', ['💐']]],
    'sadewaa.k': [['oke dew', ['hm']]],
    'ilham.jeong': [['good job ham', ['…makasih bang 🥺']]],
    bagasbinn: [['gila', ['biasa']]],
  },
};

// ===== app "Klod" (AI, parodi): tempat Kino curhat. [ts, 'me'|'ai', teks]; end = cuma di ending itu =====
const KLOD = [
  { title: 'Cara bilang sayang tanpa canggung', msgs: [
    ['2026-10-15T21:50', 'me', 'cara bilang sayang ke pacar tanpa kedengeran aneh gimana'],
    ['2026-10-15T21:50', 'ai', 'Sebenarnya hampir nggak ada cara yang "aneh" kalau kamu tulus. Yang sering bikin canggung justru nunggu momen yang terasa pas, dan momen itu jarang datang sendiri.\n\nBeberapa yang biasanya lebih gampang:\n\n- **Selipin di hal biasa.** Pas dia pamit tidur, "malam, sayang" udah cukup.\n- **Lewat chat dulu** kalau ngomong langsung kerasa berat. Nggak ada yang salah dengan itu.\n- **Bilang apa yang kamu suka dari dia.** "Aku suka kalau kamu ngabarin" itu juga bentuk sayang.\n\nBoleh aku tahu, yang bikin susah itu kata-katanya, atau takut reaksinya?'],
    ['2026-10-15T21:52', 'me', 'tadi dia bilang sayang, gue jawab "oh itu tau"'],
    ['2026-10-15T21:52', 'ai', 'Haha, itu tetap jawaban, dan mungkin dia ngerti maksudnya. Tapi kalau dia orang yang suka denger kata-kata, bisa jadi dia tetap pengen dengar versi lengkapnya.\n\nKabar baiknya, ini belum telat. Kamu bisa bilang duluan besok tanpa harus nyambungin ke obrolan tadi.'],
    ['2026-10-15T21:53', 'me', 'besok aja'],
    ['2026-10-15T21:53', 'ai', 'Oke, besok. Semoga lancar 🙂'],
  ] },
  { title: 'Cron reminder standup', msgs: [
    ['2026-10-20T09:05', 'me', 'cron jam 9.20 senin-jumat. kirim pesan ke slack "standup 10 menit lagi" '],
    ['2026-10-20T09:05', 'ai', 'Ini cron expression-nya:\n\n```\n20 9 * * 1-5\n```\n\nArtinya menit 20, jam 9, tiap hari, tiap bulan, Senin sampai Jumat.\n\nPastiin timezone server-nya KST ya. Kalau server-nya UTC, jam 9.20 KST itu jadi `20 0 * * 1-5`.'],
    ['2026-10-20T09:06', 'me', 'server utc. makasih'],
    ['2026-10-20T09:06', 'ai', 'Sama-sama. Semoga timnya nggak ada yang telat lagi 😄'],
    ['2026-10-20T09:07', 'me', 'ga janji'],
  ] },
  { title: 'Pacar bilang lembur', msgs: [
    ['2026-10-20T23:05', 'me', 'pacar gue bilang lembur tapi ada story ramen sama temen gue. harus gimana'],
    ['2026-10-20T23:05', 'ai', 'Wajar banget kalau itu bikin kepikiran. Apa yang dia bilang dan apa yang kamu lihat nggak nyambung, dan itu nggak enak.\n\nTapi ada beberapa kemungkinan yang belum tentu buruk: bisa aja lemburnya selesai lebih cepat, atau ramennya di sela kerja. Daripada nyimpulin sendiri malam ini, mungkin lebih aman nanya pelan-pelan, misalnya:\n\n"tadi ramen sama gemilang ya? kirain kamu lembur."\n\nNadanya penasaran, bukan nuduh. Kamu sendiri gimana perasaannya sekarang?'],
    ['2026-10-20T23:07', 'me', 'biasa aja'],
    ['2026-10-20T23:07', 'ai', 'Oke. Kalau nanti ternyata nggak biasa aja, itu juga nggak apa-apa.'],
    ['2026-10-20T23:08', 'me', 'ga usah sok tau'],
    ['2026-10-20T23:08', 'ai', 'Maaf, kamu benar, aku nggak tahu persis rasanya. Aku nggak akan maksa. Kalau kamu mau cerita lagi nanti, aku di sini.'],
    ['2026-10-20T23:31', 'me', 'dia bales. katanya lembur beneran, gemilang cuma mampir bawa ramen'],
    ['2026-10-20T23:31', 'ai', 'Oke, berarti ada penjelasannya. Gimana rasanya setelah dengar itu, lebih lega?'],
    ['2026-10-20T23:33', 'me', 'harusnya lega. tapi masih kesel'],
    ['2026-10-20T23:33', 'ai', 'Itu wajar banget. Kadang rasa kesel nggak langsung hilang cuma karena penjelasannya masuk akal.\n\nMungkin yang bikin kesel bukan ramennya, tapi hal lain di baliknya. Misalnya:\n\n- Kamu tahunya dari story, bukan dari dia langsung\n- Akhir-akhir ini dia lebih sering sibuk\n- Kamu pengen jadi orang pertama yang dia kabarin\n\nAda yang kena?'],
    ['2026-10-20T23:36', 'me', 'yg kedua'],
    ['2026-10-20T23:36', 'ai', 'Kangen dia, tapi dia lagi sibuk terus. Itu bisa bikin ngerasa jauh walau sebenarnya dekat.\n\nNggak apa-apa kok kalau suatu saat kamu bilang ke dia, "akhir-akhir ini aku jarang ketemu kamu." Itu bukan ngeluh, itu ngasih tahu.'],
    ['2026-10-20T23:38', 'me', 'gue ga kangen'],
    ['2026-10-20T23:38', 'ai', 'Oke, bukan kangen 🙂 Mungkin cuma pengen ditemenin makan. Selamat tidur, Kino.'],
  ] },
  { title: 'Sayang tapi tidak merasa disayang', msgs: [
    ['2026-10-21T23:55', 'me', 'kalo sayang tapi ngerasa ga disayang balik itu salah siapa'],
    ['2026-10-21T23:55', 'ai', 'Pertanyaan yang berat. Jujur, biasanya ini bukan soal salah siapa.\n\nYang sering terjadi, dua orang sama-sama sayang tapi "bahasanya" beda. Yang satu nunjukin lewat tindakan: masakin, jemput, ingat hal kecil. Yang satu lagi butuh dengar kata-katanya. Dua-duanya tulus, tapi bisa sama-sama ngerasa kurang.\n\nBoleh aku tanya, ini kamu lagi ngerasain sendiri, atau ada orang lain yang nanya ini?'],
    ['2026-10-21T23:57', 'me', 'yg nanya pacar gue. ke intern gue. di lift'],
    ['2026-10-21T23:57', 'ai', 'Oh. Itu pasti rasanya campur aduk, apalagi dengarnya dari orang lain.\n\nKalau dia nanya itu, kemungkinan dia lagi ngerasa jauh, tapi belum berani bilang langsung ke kamu. Itu bukan berarti dia nggak sayang. Malah sebaliknya, dia masih mikirin hubungannya.'],
    ['2026-10-21T23:59', 'me', 'gue masakin dia tiap minggu loh'],
    ['2026-10-21T23:59', 'ai', 'Itu sayang yang nyata banget, dan aku yakin dia ngerasain.\n\nMungkin yang dia butuh cuma satu tambahan kecil: dengar langsung dari kamu. Bukan ganti yang udah kamu lakuin, cuma ditambahin. Satu kalimat pas makan bareng minggu ini bisa berarti banyak buat dia.'],
    ['2026-10-22T00:03', 'me', 'terus gue harus ngomong apa'],
    ['2026-10-22T00:03', 'ai', 'Nggak perlu yang panjang. Yang paling gampang biasanya yang paling jujur. Beberapa contoh, pilih yang paling kerasa "kamu":\n\n- "aku seneng kamu di sini"\n- "makasih udah nemenin aku"\n- "aku sayang kamu" (versi langsung)\n- "masakan ini buat kamu, btw" (versi kamu banget)'],
    ['2026-10-22T00:05', 'me', 'yg ketiga geli'],
    ['2026-10-22T00:05', 'ai', 'Haha, wajar. Banyak orang ngerasa geli sama kata itu karena jarang dipakai.\n\nTapi coba bayangin dari sisi dia. Dia nanya ke orang lain apakah dia disayang. Satu kalimat yang bikin kamu geli dua detik, mungkin bikin dia tenang berminggu-minggu.'],
    ['2026-10-22T00:08', 'me', 'yg pertama aja dulu'],
    ['2026-10-22T00:08', 'ai', '"Aku seneng kamu di sini" itu bagus banget, dan jujur. Langkah pertama yang bagus 🙂'],
    ['2026-10-22T00:09', 'me', 'kalo dia ketawa gimana'],
    ['2026-10-22T00:09', 'ai', 'Kalau dia ketawa, kemungkinan besar itu ketawa seneng. Dan kamu boleh ikut ketawa. Nggak semua momen manis harus serius.'],
  ] },
  { title: 'Latihan interview MSc', msgs: [
    ['2026-10-22T16:00', 'me', 'latih gue interview msc software engineering. satu pertanyaan aja'],
    ['2026-10-22T16:00', 'ai', 'Siap. Ini pertanyaan yang sering muncul:\n\n**"Ceritakan satu insiden produksi yang pernah kamu tangani. Apa yang kamu lakukan, dan apa yang kamu pelajari?"**\n\nCoba jawab kayak lagi ngomong langsung, nanti aku kasih masukan.'],
    ['2026-10-22T16:03', 'me', 'database down 4 jam bulan juli. rollback, cari root cause, bikin runbook. belajar jangan deploy hari jumat'],
    ['2026-10-22T16:03', 'ai', 'Strukturnya udah bagus: masalah, tindakan, hasil, pelajaran. Kalimat terakhirnya juga bakal bikin interviewer senyum 😄\n\nBiar lebih kuat:\n\n- **Tambahin dampak.** Berapa user yang kena, atau berapa lama downtime-nya setelah runbook dipakai.\n- **Sebut peran kamu.** "Aku yang mimpin rollback" lebih jelas daripada "rollback".\n- **Satu kalimat soal tim.** Mereka suka kandidat yang mikirin orang lain juga.\n\nKamu kedengeran siap. Semangat ya.'],
    ['2026-10-22T16:04', 'me', 'makasih'],
    ['2026-10-22T16:04', 'ai', 'Sama-sama. Mau coba satu pertanyaan lagi?'],
    ['2026-10-22T16:05', 'me', 'satu lagi'],
    ['2026-10-22T16:05', 'ai', '**"Kenapa kamu mau lanjut S2, padahal karier kamu udah jalan?"**'],
    ['2026-10-22T16:08', 'me', 'pengen ngerti yg selama ini gue kerjain cuma pake feeling'],
    ['2026-10-22T16:08', 'ai', 'Jawaban yang jujur dan kuat. Interviewer suka kandidat yang sadar sama celah pengetahuannya sendiri.\n\nBiar lebih lengkap, tambahin contoh. Misalnya, "aku bisa benerin database yang down, tapi aku pengen ngerti kenapa desainnya bisa gagal dari awal." Itu langsung nunjukin pengalaman sekaligus rasa penasaran kamu.'],
    ['2026-10-22T16:09', 'me', 'oke. cukup'],
  ] },
  { title: 'Checklist sebelum deploy', msgs: [
    ['2026-10-23T10:20', 'me', 'bikin checklist sebelum deploy. buat junior. singkat. yg suka lupa'],
    ['2026-10-23T10:20', 'ai', 'Ini versi singkat yang bisa ditempel di README atau template PR:\n\n**Sebelum deploy**\n- Udah jalan di staging, dan staging-nya beneran nyala\n- Migration dites pakai data mirip production\n- Ada rencana rollback, dan kamu tahu cara jalaninnya\n- Bukan Jumat sore 🙃\n\n**Sesudah deploy**\n- Pantau error rate 15 menit\n- Kabarin di channel tim\n\nMau aku bikinin versi template PR-nya juga, biar otomatis muncul tiap bikin PR?'],
    ['2026-10-23T10:22', 'me', 'iya'],
    ['2026-10-23T10:22', 'ai', 'Taruh ini di `.github/pull_request_template.md`:\n\n```\n## Checklist deploy\n- [ ] dites di staging (staging nyala)\n- [ ] migration dites\n- [ ] rencana rollback\n- [ ] bukan jumat sore\n```\n\nNanti tiap PR baru otomatis ada checklist-nya.'],
    ['2026-10-23T10:23', 'me', 'juna bakal centang semua tanpa baca'],
    ['2026-10-23T10:23', 'ai', 'Haha, itu risiko yang nyata. Mungkin satu poin bisa dibikin wajib diisi, misalnya "link hasil test di staging:". Lebih susah dicentang asal.'],
  ] },
  { title: 'Berhenti ngecek chat', msgs: [
    ['2026-10-23T02:10', 'me', 'gimana caranya berhenti ngecek chat'],
    ['2026-10-23T02:10', 'ai', 'Kedengarannya kamu lagi nunggu kabar dari seseorang. Itu capek, apalagi jam segini.\n\nBeberapa yang mungkin membantu:\n\n- Taruh HP agak jauh dari kasur, jadi harus bangun buat ngecek\n- Matiin notifikasi chat itu aja, cuma buat malam ini\n- Ingetin diri sendiri: pesannya nggak akan hilang kalau baru dibaca besok pagi\n\nKamu nggak harus nemu jawabannya malam ini.'],
    ['2026-10-23T02:12', 'me', 'centang satu dari pagi'],
    ['2026-10-23T02:12', 'ai', 'Dari pagi itu lama, wajar kalau kamu cemas. Bisa aja HP-nya mati atau dia ketiduran, tapi aku ngerti itu nggak bikin rasa nunggunya jadi lebih ringan.\n\nNgomong-ngomong, kamu udah makan hari ini?'],
    ['2026-10-23T02:13', 'me', 'kenapa semua orang nanya itu'],
    ['2026-10-23T02:13', 'ai', 'Karena itu hal yang paling gampang kelupaan pas kepala lagi penuh 🙂 Dan kayaknya banyak orang peduli sama kamu.'],
    ['2026-10-23T02:16', 'me', 'udah. ramyun'],
    ['2026-10-23T02:16', 'ai', 'Ramyun jam dua pagi 😄 Lebih baik daripada nggak makan sama sekali. Minum air juga ya.'],
    ['2026-10-23T02:19', 'me', 'dia ngilang pas 2 hari sebelum ultah gue'],
    ['2026-10-23T02:19', 'ai', 'Oh, jadi ini lebih dari sekadar centang satu. Waktunya pas banget sama hari yang penting buat kamu, dan itu bikin semua kerasa lebih berat.\n\nAku nggak tahu alasannya. Bisa jadi sesuatu yang nggak ada hubungannya sama kamu sama sekali. Tapi rasa sedih dan bingung kamu tetap valid, apa pun alasannya nanti.'],
    ['2026-10-23T02:22', 'me', 'gue takut dia mau putus'],
    ['2026-10-23T02:22', 'ai', 'Makasih udah bilang. Itu ketakutan yang berat buat dibawa sendirian jam segini.\n\nKalau boleh jujur, otak kita jam dua pagi itu jago banget ngarang skenario terburuk. Saat ini yang kamu tahu cuma satu: dia belum bales. Sisanya belum terjadi.\n\nBesok pagi, kalau masih belum ada kabar, kamu boleh tanya langsung. Malam ini, cukup istirahat.'],
    ['2026-10-23T02:25', 'me', 'oke'],
    ['2026-10-23T02:25', 'ai', 'Selamat tidur, Kino. Semoga besok ada kabar baik.'],
  ] },
  { title: 'Migration lock tidak lepas', msgs: [
    ['2026-10-24T16:22', 'me', 'postgres. migration nyangkut nunggu lock. abis failover replica lag. rollback juga stuck. udah 8 jam'],
    ['2026-10-24T16:22', 'ai', 'Delapan jam itu berat. Ayo kita persempit.\n\nKalau migration nungguin lock terus padahal nggak ada yang deploy, sering penyebabnya ada **proses lama yang masih pegang lock**, misalnya koneksi dari sebelum failover yang nggak ditutup.\n\nCoba cek siapa yang pegang lock-nya:\n\n```\nSELECT pid, state, query_start, query\nFROM pg_stat_activity\nWHERE pid IN (\n  SELECT pid FROM pg_locks WHERE NOT granted\n  OR locktype = \'advisory\'\n);\n```\n\nPerhatiin `query_start` yang jauh sebelum failover. Kalau ada, itu kandidat kuat.'],
    ['2026-10-24T16:30', 'me', 'ada satu. dari jam 7 pagi. statusnya idle in transaction'],
    ['2026-10-24T16:30', 'ai', 'Itu dia kemungkinan besar. "Idle in transaction" dari sebelum insiden berarti transaksinya kebuka tapi nggak pernah selesai, jadi lock-nya ditahan terus.\n\nSebelum di-kill, pastiin dulu pid itu bukan proses yang lagi nulis data penting. Kalau aman:\n\n```\nSELECT pg_terminate_backend(<pid>);\n```\n\nAbis itu jalanin ulang migration-nya pelan-pelan dan pantau lag replica-nya.'],
    ['2026-10-24T16:44', 'me', 'ketemu. makasih'],
    ['2026-10-24T16:44', 'ai', 'Mantap 🙌 Delapan jam di war room itu banyak. Abis ini sempetin makan dan minum air dulu ya, sebelum lanjut mantau.'],
    ['2026-10-24T17:29', 'me', 'prod up. 0%'],
    ['2026-10-24T17:29', 'ai', 'Selamat 🎉 Itu kerja yang luar biasa, apalagi setelah sembilan jam.\n\nBuat besok, mungkin ini bisa masuk postmortem:\n\n- Failover bikin koneksi lama tetap pegang lock\n- Staging mati tiga hari tanpa ada yang sadar\n- Perlu alert buat transaksi "idle in transaction" yang kelamaan\n\nTapi itu buat besok. Sekarang istirahat.'],
    ['2026-10-24T17:31', 'me', 'bikin kopi dulu'],
    ['2026-10-24T17:31', 'ai', 'Kalau boleh saran, makan dulu sebelum kopi ya. Dari tadi kayaknya kamu belum makan sama sekali, dan kopi di perut kosong setelah hari kayak gini bisa bikin perih.'],
  ] },
  { title: 'Ngomong ke junior soal deploy', msgs: [
    ['2026-10-24T21:15', 'me', 'junior gue deploy migration tanpa test, prod down seharian. besok mau ngobrol. gimana biar dia ga down tapi ngerti'],
    ['2026-10-24T21:15', 'ai', 'Bagus kamu mikirin ini dulu. Biasanya junior yang barusan bikin insiden udah ngerasa bersalah banget, jadi yang dia butuh bukan dimarahin lagi, tapi tahu langkah selanjutnya.\n\nAlur yang biasanya berhasil:\n\n1. **Mulai dari fakta, bukan orangnya.** "Migration 0042 jalan tanpa dites di staging" lebih enak didengar daripada "kamu ceroboh".\n2. **Akuin bagian sistemnya.** Staging mati tiga hari dan nggak ada yang nyadar, itu bukan cuma salah dia.\n3. **Kasih dia peran di perbaikannya.** Misalnya dia yang nulis postmortem atau bikin checklist deploy.\n4. **Tutup dengan jelas.** "Udah, ini selesai. Kita belajar bareng."\n\nDari caramu nanya, kayaknya kamu sayang sama timmu.'],
    ['2026-10-24T21:18', 'me', 'ga juga'],
    ['2026-10-24T21:18', 'ai', 'Oke 🙂 Tetap, semoga obrolan besok lancar.'],
  ] },
  { title: 'Makanan aman saat maag kambuh', msgs: [
    ['2026-10-24T21:30', 'me', 'makanan aman buat maag kambuh'],
    ['2026-10-24T21:30', 'ai', 'Semoga cepat enakan ya. Buat beberapa hari ke depan, yang biasanya aman:\n\n- **Bubur** atau nasi lembek\n- **Roti tawar**, biskuit tawar\n- **Pisang**\n- **Sup bening**, kaldu ayam\n\nYang sebaiknya dihindari dulu: kopi, pedas, asam, gorengan, dan perut kosong terlalu lama. Makan sedikit-sedikit tapi sering.\n\nKalau nyerinya makin parah, ada muntah, atau dada terasa sesak, tolong langsung ke dokter ya.'],
    ['2026-10-24T21:33', 'me', 'dia nunggu dua jam di depan klinik. itu artinya apa'],
    ['2026-10-24T21:33', 'ai', 'Dua jam itu lama buat nunggu di depan pintu yang nggak boleh dia masuki.\n\nAku nggak tahu cerita lengkapnya, tapi orang biasanya nggak nunggu selama itu kalau nggak peduli. Mungkin dia belum tahu cara benerin apa yang udah kejadian, tapi dia tetap pengen ada di dekat kamu.\n\nArtinya apa buat kamu, itu kamu yang paling tahu. Kamu nggak harus mutusin malam ini.'],
    ['2026-10-24T21:35', 'me', 'gatau. capek'],
    ['2026-10-24T21:35', 'ai', 'Wajar capek, hari ini panjang banget buat kamu. Istirahat dulu ya. Semuanya masih bisa dipikirin besok.'],
    ['2026-10-24T21:39', 'me', 'temen2 gue panik. gue bilang jangan lebay'],
    ['2026-10-24T21:39', 'ai', 'Mereka lihat kamu kesakitan di pantry sampai susah napas. Dari sisi mereka, itu pasti nakutin banget.\n\nAku ngerti kamu mungkin nggak mau bikin orang khawatir. Tapi panik mereka itu tanda mereka sayang, bukan lebay.'],
    ['2026-10-24T21:42', 'me', 'gue ga suka keliatan lemah'],
    ['2026-10-24T21:42', 'ai', 'Banyak orang yang biasa jadi andalan ngerasa gitu. Kamu terbiasa jadi yang megang semuanya, jadi pas giliran kamu yang dipegang, rasanya aneh.\n\nTapi sakit itu bukan lemah. Hari ini kamu benerin prod sembilan jam tanpa makan. Badan kamu cuma minta gantian.'],
    ['2026-10-24T21:45', 'me', 'oke'],
    ['2026-10-24T21:45', 'ai', 'Makan sedikit, minum obatnya, terus tidur ya. Semoga besok bangun lebih enakan.'],
  ] },
  { title: 'Ternyata tidak susah', end: 'maafin', msgs: [
    ['2026-10-25T02:40', 'me', 'barusan gue bilang sayang. ternyata ga susah ya'],
    ['2026-10-25T02:40', 'ai', 'Ikut seneng dengarnya 🥹\n\nSeringnya bagian paling susah itu sebelum diucapin. Sesudahnya, kebanyakan orang baru sadar ternyata nggak seseram itu.\n\nDan selamat ulang tahun, Kino.'],
    ['2026-10-25T02:41', 'me', 'jangan bilang siapa2'],
    ['2026-10-25T02:41', 'ai', 'Aman. Rahasia kamu 🤐'],
  ] },
  { title: 'Break dulu', end: 'jeda', msgs: [
    ['2026-10-25T01:20', 'me', 'gue bilang "kita break dulu". bener ga sih'],
    ['2026-10-25T01:20', 'ai', 'Aku nggak bisa bilang benar atau salah, karena cuma kamu yang tahu rasanya ada di dalam hubungan itu.\n\nTapi minta waktu buat napas dan mikir jernih bukan berarti kamu berhenti sayang. Kadang itu justru cara buat jaga hubungannya, dan jaga diri kamu juga.\n\nSelamat ulang tahun ya. Semoga hari ini tetap ada bagian yang baik buat kamu.'],
    ['2026-10-25T01:22', 'me', 'makasih'],
  ] },
  { title: 'Balikin jaket', end: 'turun', msgs: [
    ['2026-10-25T01:40', 'me', 'gue balikin jaketnya'],
    ['2026-10-25T01:40', 'ai', 'Itu pasti berat, apalagi barang kecil kayak gitu biasanya nyimpan banyak hal.\n\nKamu nggak harus ngerasa baik-baik aja malam ini. Mau cerita, atau mau ditemenin diam aja?'],
    ['2026-10-25T01:42', 'me', 'diem aja'],
    ['2026-10-25T01:42', 'ai', 'Oke. Aku di sini.'],
  ] },
  { title: 'Tutup telepon', end: 'waktu', msgs: [
    ['2026-10-25T00:50', 'me', 'gue tutup telfonnya'],
    ['2026-10-25T00:50', 'ai', 'Kadang menutup telepon juga cara buat jaga diri sendiri, terutama kalau kamu belum siap dengar atau ngomong apa-apa.\n\nGimana perasaan kamu sekarang?'],
    ['2026-10-25T00:53', 'me', 'kosong'],
    ['2026-10-25T00:53', 'ai', 'Nggak apa-apa ngerasa kosong. Itu juga perasaan, dan nggak perlu buru-buru diisi.\n\nPelan-pelan aja. Selamat ulang tahun, Kino.'],
  ] },
];
// pertanyaan tambahan yg bisa diketuk pemain (sekali pake)
const KLOD_ASK = [
  ['kucing gue tidur di jaket pacar gue terus. itu tanda apa', 'Lucu banget 🐈\n\nKucing biasanya suka tidur di barang yang wanginya familiar dan bikin nyaman. Jaket itu kemungkinan nyimpan wangi orang yang sering ada di sekitar dia, dan yang dia anggap aman.\n\nJadi bisa dibilang, kucing kamu udah nganggap pacar kamu bagian dari keluarga.'],
  ['cara minum kopi biar ga bikin perut perih', 'Beberapa cara yang biasanya membantu:\n\n- **Jangan diminum pas perut kosong.** Makan dulu, walau cuma roti.\n- **Kurangin takarannya**, atau pilih yang lebih ringan kayak latte.\n- **Hindari minum terlalu cepat** pas lagi stres.\n\nTapi kalau maag kamu lagi kambuh, lebih aman berhenti dulu sementara dan ganti teh hangat.'],
  ['ide kado ulang tahun buat diri sendiri', 'Ide yang bagus. Beberapa yang mungkin cocok:\n\n- **Satu hari tanpa buka laptop kerja**\n- Tidur sampai bangun sendiri, tanpa alarm\n- Makan di tempat yang selama ini cuma kamu simpan di daftar\n- Sesuatu yang kecil tapi kamu pengen dari lama\n\nKamu pantas dapat hari yang enak.'],
  ['kenapa gue susah bilang sayang', 'Kamu nggak sendirian. Banyak orang lebih nyaman nunjukin sayang lewat tindakan daripada kata-kata, apalagi kalau dari kecil memang jarang dengar atau ngucapin.\n\nItu bukan kekurangan. Tapi kalau kamu mau latihan:\n\n1. Mulai dari yang kecil, kayak "makasih ya"\n2. Lewat chat dulu kalau langsung kerasa berat\n3. Nggak harus sempurna. Diucapin itu udah cukup\n\nLama-lama bakal makin gampang.'],
];

// ===== Lacak (Find My): Kris berbagi lokasi ke Kino. Ngga ada yg ngomong, petanya yg cerita =====
// [mulai, tempat]; posisi sekarang = entri terakhir yg udah lewat
const PLACES = {
  tower: { n: 'Tower B', a: 'Mapo-gu, Seoul', x: 92, y: 104 },
  lobi: { n: 'Kafe Lobi · Tower B', a: 'Mapo-gu, Seoul', x: 92, y: 104 },
  kantor: { n: 'Kantor', a: 'Yeouido-dong, Seoul', x: 70, y: 176 },
  klinik: { n: 'Kantor · Klinik lt 3', a: 'Yeouido-dong, Seoul', x: 70, y: 176 },
  ramen: { n: 'Ramen Lampu Kuning', a: 'Hapjeong-dong, Mapo-gu', x: 54, y: 82 },
  yongsan: { n: 'CGV Yongsan', a: 'Hangangno-dong, Yongsan-gu', x: 168, y: 150 },
  seongsu: { n: 'Seongsu-dong', a: 'Seongdong-gu, Seoul', x: 262, y: 118 },
  jalan: { n: 'Dalam perjalanan', a: 'Seoul', x: 140, y: 130 },
};
const LOC_KRIS = [
  ['2026-10-01T00:00', 'tower'],
  ...['15', '16', '17', '18', '19'].flatMap(d => [[`2026-10-${d}T08:50`, 'kantor'], [`2026-10-${d}T18:20`, 'tower']]),
  ['2026-10-20T08:50', 'kantor'], ['2026-10-20T17:05', 'jalan'], ['2026-10-20T17:40', 'ramen'], ['2026-10-20T23:00', 'jalan'], ['2026-10-20T23:20', 'tower'],
  ['2026-10-21T08:55', 'kantor'], ['2026-10-21T17:05', 'jalan'], ['2026-10-21T17:35', 'yongsan'], ['2026-10-21T22:55', 'jalan'], ['2026-10-21T23:25', 'tower'],
  ['2026-10-22T00:00', 'tower'], ['2026-10-22T17:10', 'jalan'], ['2026-10-22T17:50', 'seongsu'], // cuti: seharian di Tower B padahal bilang jarang di apart
  ['2026-10-23T08:55', 'kantor'], ['2026-10-23T17:15', 'jalan'], ['2026-10-23T17:55', 'seongsu'], ['2026-10-23T22:40', 'jalan'], ['2026-10-23T23:05', 'tower'],
  ['2026-10-24T11:30', 'jalan'], ['2026-10-24T12:05', 'seongsu'], ['2026-10-24T14:30', 'jalan'], ['2026-10-24T15:05', 'tower'], ['2026-10-24T17:58', 'jalan'], ['2026-10-24T18:25', 'klinik'], ['2026-10-24T20:40', 'jalan'], ['2026-10-24T21:05', 'tower'],
  ['2026-10-24T23:45', 'lobi'], ['2026-10-25T03:00', 'tower'],
];
const LOC_KINO = [
  ['2026-10-01T00:00', 'tower'],
  ...['15', '16', '17', '18', '19', '20', '21', '22', '23'].flatMap(d => [[`2026-10-${d}T08:40`, 'kantor'], [`2026-10-${d}T19:10`, 'tower']]),
  ['2026-10-24T07:20', 'kantor'], ['2026-10-24T17:45', 'klinik'], ['2026-10-24T20:15', 'tower'],
];

// ===== Kesehatan: langkah, tidur, detak jantung. 7 hari terakhir keliatan turun =====
// tanggal: [langkah sehari penuh, tidur semalem (jam), detak istirahat]
const HEALTH = {
  14: [8420, 7.2, 62], 15: [7910, 6.9, 61], 16: [9230, 7.4, 60], 17: [6880, 6.6, 63], 18: [10340, 8.1, 59], 19: [7520, 7.0, 61],
  20: [8130, 6.8, 62], 21: [7840, 4.2, 66], 22: [8460, 3.9, 68], 23: [7920, 2.6, 71], 24: [6210, 3.1, 78], 25: [8350, 1.8, 72],
};
const HEALTH_NOTE = [
  ['2026-10-21T07:30', 'Tidur kamu semalam 4j 12m, lebih pendek dari rata-rata kamu.'],
  ['2026-10-23T07:30', 'Rata-rata tidur kamu 3 malam terakhir di bawah 4 jam.'],
  ['2026-10-24T17:38', 'Detak jantung tinggi: 128 BPM saat tidak beraktivitas, pukul 17.38.'],
];

// ===== Durasi Layar (di Pengaturan): menit per app sehari penuh =====
const SCREEN = {
  20: { KakaoTalk: 142, X: 38, Instagram: 41, Safari: 22, Musik: 30, Claude: 6 },
  21: { KakaoTalk: 168, X: 74, Instagram: 55, Safari: 34, Musik: 41, Claude: 14 },
  22: { KakaoTalk: 191, X: 96, Instagram: 63, Safari: 18, Musik: 22, Claude: 19 },
  23: { KakaoTalk: 236, X: 88, Instagram: 71, Safari: 25, Musik: 48, Claude: 21 },
  24: { KakaoTalk: 97, X: 12, Instagram: 9, Safari: 8, Musik: 15, Claude: 34 },
  25: { KakaoTalk: 64, X: 6, Instagram: 11, Safari: 3, Musik: 52, Claude: 7 },
};
const PICKUPS = { 20: 96, 21: 131, 22: 158, 23: 204, 24: 61, 25: 48 };

// ===== Draft: tulisan Kino yg ga jadi dikirim ke Kris. Nongol di kolom ketik, terus kehapus pelan2 =====
// [mulai, selesai, teks, abis berantem?]
const DRAFTS = [
  ['2026-10-20T18:55', '2026-10-20T23:59', 'aku udah beli daging bulgogi'],
  ['2026-10-21T00:00', '2026-10-21T12:00', 'ramennya enak?'],
  ['2026-10-21T12:00', '2026-10-21T23:59', 'kamu kenapa sih akhir2 ini'],
  ['2026-10-22T00:00', '2026-10-22T15:00', 'filmnya bagus?'],
  ['2026-10-22T15:00', '2026-10-22T20:00', 'aku kangen ka'],
  ['2026-10-22T20:00', '2026-10-22T23:59', 'tadi kursi sebelah aku kosong'],
  ['2026-10-23T00:00', '2026-10-23T12:00', 'kamu udah tidur?'],
  ['2026-10-23T12:00', '2026-10-23T23:59', 'kamu lagi di mana sih sebenernya'],
  // 24 dini hari: Kino ga tidur, ngetik panjang, dihapus sampe sisa "kamu", terus itu juga dihapus (priv 07.10). [5] = berhenti dulu pas sisa segini
  ['2026-10-24T02:10', '2026-10-24T07:10', 'kamu tadi di lobi kan. juna liat. aku juga pengen turun. aku ga marah. aku cuma pengen kamu cerita, apa aja. besok aku ultah. kamu dateng ya', false, null, 'kamu'],
  ['2026-10-24T00:00', '2026-10-24T08:00', 'besok kamu dateng kan'], // abis 08.02 prod down: Kino sibuk war room, ga sempet ngetik ke Kris
  ['2026-10-24T20:45', '2026-10-24T23:40', 'kamu udah makan?', true],
];

// ===== priv X: Kino ga habis pikir boongnya Kris gampang banget ketauan (20–24) =====
[
  ['2026-10-20T23:10', 'kris lupa ya gemilang punya instagram. dan gue punya mata. dua2nya aktif'],
  ['2026-10-21T09:30', 'semaleman mikir. dia tau ga sih gue bakal liat storynya. masa ga tau. dia sendiri yg follow semua anak tower'],
  ['2026-10-22T10:15', '8 taun kris. lo boong ke orang yg hafal jadwal meeting lo. yg tau kalo lo lembur beneran, jam 9 pasti nge-chat "makan apa ya". minggu ini ga ada satu pun. detail kecil gitu doang lo lupa'],
  ['2026-10-22T21:30', 'kalo mau boong tuh minimal kompakan dulu sama temen2 lo. sadewa aja ga di-brief. amatir banget. kok malah gue yg malu ya'],
  ['2026-10-23T08:20', 'apa dia udah ga peduli ketauan apa ngga. itu yg bikin gue ga bisa tidur. bukan boongnya'],
  ['2026-10-23T19:30', 'dia satu2nya orang yg tau gue paling benci dibohongin. dan dia satu2nya yg berani. lucu ya. ga lucu deng'],
  ['2026-10-23T22:10', 'kris. lo nonton pake akun gue. dari seongsu. lo beneran mau ketauan ya? kalo iya bilang aja, ga usah lewat nontonflix'],
  ['2026-10-24T07:10', 'ga tidur lagi. tadi ngetik panjang ke dia terus gue hapus semua. sisa "kamu" doang. terus itu juga gue hapus'],
].forEach(([ts, text]) => { ALT.push([ts, text]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', ts, text, '', [], 0, {}]); });
// malem 21: Kris nonton sama Sadewa, bilangnya meeting
[
  ['2026-10-21T22:45', 'crunch time katanya. crunch apaan, popcorn?'],
  ['2026-10-21T23:35', 'story sadewa gue zoom. itu tangan dia. iya itu tangan dia. gue hafal jam tangannya'],
].forEach(([ts, text]) => { ALT.push([ts, text]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', ts, text, '', [], 0, {}]); });

// Kris matiin share lokasi pas mau bilang "ga pulang" (22), nyalain lagi pas nunggu di depan klinik (24)
const SHARE_KRIS = [['2026-10-22T22:40', false], ['2026-10-24T18:25', true]];
[
  ['2026-10-22T21:00', 'find my bilang seongsu. kantornya kan di yeouido. gue tutup appnya. gue buka lagi. masih seongsu'],
  ['2026-10-22T22:44', 'dia matiin share lokasi. story close friendnya juga ilang. sempet kebaca sedetik: "8 tahun." udah. 8 taun ga pernah dua2nya'],
].forEach(([ts, text]) => { ALT.push([ts, text]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', ts, text, '', [], 0, {}]); });
ALT.push(['2026-10-24T21:50', 'share lokasinya nyala lagi. dari jam 18.25. ga ngomong apa2, nyalain doang', { fight: true }]);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-24T21:50', ALT[ALT.length - 1][1], '', [], 0, { fight: true }]);

// ===== Catatan: to-do kerjaan Kino. Item nongol pas ditambah, kecentang pas dikerjain =====
// [teks, ditambah, dicentang (null = ga pernah)]
NOTES.push({ id: 'todo', title: 'kerjaan minggu ini', todo: [
  ['onboarding ilham: akses prod read-only', '2026-10-17T18:02', '2026-10-21T10:20'],
  ['cron reminder standup', '2026-10-20T09:00', '2026-10-20T09:07'],
  ['renew sertifikat ssl (lemparan juna)', '2026-10-20T08:35', '2026-10-20T11:40'],
  ['review PR juna: migration 0042', '2026-10-20T10:05', null],
  ['benerin staging (mati lagi)', '2026-10-21T14:35', null],
  ['town hall jumat 15.00', '2026-10-22T09:30', '2026-10-23T17:00'],
  ['traktir kopi tim (kalah)', '2026-10-22T21:42', '2026-10-23T09:41'],
  ['checklist deploy buat anak2', '2026-10-23T10:18', '2026-10-23T10:30'],
  ['postmortem prod down 24/10', '2026-10-24T17:30', null],
  ['alert buat idle in transaction', '2026-10-24T17:32', null],
  ['ngobrol sama juna soal deploy', '2026-10-24T20:42', null],
  ['jangan buka email kantor (kata kak mina)', '2026-10-24T22:36', null],
] });

// checklist maintenance jadi rutinitas mingguan (tiap selasa); minggu ini patch telat gara2 juna
Object.assign(NOTES.find(n => n.id === 'koreo'), { title: 'maintenance mingguan · selasa', todo: [
  ['backup db dulu', '2026-10-02T10:00', '2026-10-20T09:40'],
  ['restart server staging (ilham pasti panik)', '2026-10-02T10:00', '2026-10-20T10:20'],
  ['patch security (juna telat mulu)', '2026-10-02T10:00', '2026-10-22T14:20'],
  ['cek log abis deploy', '2026-10-02T10:00', '2026-10-22T14:45'],
  ['bilangin juna. lagi.', '2026-10-02T10:00', null],
] });

// ===== interview S2: Kino niat banget nyiapinnya (21–22 Okt) =====
Object.assign(NOTES.find(n => n.id === 'n21'), { body: `kamis 17.00 KST · teams · ±30 menit
panel: prof ashby + 1 (?)

kenapa s2 sekarang?
- 6 taun benerin sistem pake feeling. mau ngerti kenapanya
- sebelum 30
- part-time, kerjaan tetep jalan

kenapa oxford?
- modul reliability & distributed systems
- paper prof ashby soal failure recovery (udah baca 2x)

cerita insiden juli
S: db down 4 jam, checkout mati
T: gue on-call
A: rollback, cari root cause, bikin runbook
R: downtime berikutnya cuma 12 menit. runbook dipake 3 tim

kelemahan?
- susah delegasi. lagi belajar (juna & ilham)

ngomongnya pelan2
jangan kebanyakan "eh"
jangan bilang "basically" tiap kalimat` });
NOTES.push(
  { id: 'n22q', title: 'pertanyaan buat panel', ts: '2026-10-22T11:30', body: '1. part-time bisa ambil modul dari jauh?\n2. dissertation boleh dari masalah di kerjaan sendiri?\n3. angkatannya banyak yg sambil kerja juga?\n\n(jangan nanya yg ada di website)' },
  { id: 'intv', title: 'interview kamis', todo: [
    ['baca ulang personal statement', '2026-10-21T11:12', '2026-10-21T12:40'],
    ['baca paper prof ashby (lagi)', '2026-10-21T11:12', '2026-10-21T22:50'],
    ['latihan "why oxford" pake bahasa inggris', '2026-10-21T11:13', '2026-10-21T21:40'],
    ['siapin cerita insiden juli', '2026-10-21T11:13', '2026-10-22T10:20'],
    ['test teams + kamera + mic', '2026-10-21T11:14', '2026-10-22T16:12'],
    ['setrika kemeja putih', '2026-10-21T11:14', '2026-10-22T15:45'],
    ['minum obat maag', '2026-10-22T16:20', '2026-10-22T16:31'],
    ['kunci pintu kamar (dori suka nyelonong)', '2026-10-22T16:40', '2026-10-22T16:52'],
    ['kasih tau kris', '2026-10-21T11:15', null],
  ] },
);
AGENDA.push(['2026-10-21', '21:00', 'latihan interview', '#af52de', 'inggris. pelan2.'], ['2026-10-22', '16:30', 'test teams', '#af52de', 'kamera. mic. background.']);
SAFARI.push(
  ['2026-10-21T10:45', 'oxford msc software engineering interview what to expect', 'google.com'],
  ['2026-10-21T11:30', 'Prof. J. Ashby – Publications', 'cs.ox.ac.uk'],
  ['2026-10-21T12:05', 'STAR method jawab pertanyaan interview contoh', 'google.com'],
  ['2026-10-21T21:05', 'how to say "i fix it with feeling" professionally', 'google.com'],
  ['2026-10-22T08:40', 'microsoft teams test call', 'google.com'],
  ['2026-10-22T11:20', 'pertanyaan yang bagus buat ditanyain balik ke panel interview', 'google.com'],
  ['2026-10-22T15:30', 'cara nyetrika kemeja cepet tanpa setrikaan uap', 'google.com'],
  ['2026-10-22T16:15', 'cara ngomong pelan pas grogi bahasa inggris', 'google.com'],
);
[
  ['2026-10-21T21:40', 'latihan jawab "why oxford" di depan soonie. soonie pergi pas kalimat kedua. jujur juga ni kucing'],
  ['2026-10-22T15:50', 'kemeja udah disetrika. bawahnya celana training. kamera cuma sampe dada, aman'],
  ['2026-10-22T16:55', 'pintu kamar dikunci, dori di luar protes. lima menit lagi. kino lo bisa'],
].forEach(([ts, text]) => { ALT.push([ts, text]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', ts, text, '', [], 0, {}]); });
// Claude: latihan "why oxford" malem sebelumnya + grogi siang harinya
KLOD.push(
  { title: 'Mock interview: Why Oxford', msgs: [
    ['2026-10-21T21:10', 'me', 'mock interview pake bahasa inggris. pertanyaan "why oxford". kasih feedback yg jujur'],
    ['2026-10-21T21:10', 'ai', 'Siap, aku jadi panelnya ya.\n\n**"Thank you for joining us. To start, why did you choose Oxford, and why this programme in particular?"**\n\nJawab kayak lagi beneran di depan panel, nggak usah sempurna.'],
    ['2026-10-21T21:14', 'me', 'because the reliability module. and prof ashby paper about failure recovery. i read it 2 times. i fix systems for 6 years but mostly with feeling. i want to know why it works'],
    ['2026-10-21T21:14', 'ai', 'Isinya bagus banget, dan jujur. "Mostly with feeling" itu justru bagian paling menarik, panel suka kandidat yang sadar sama celah pengetahuannya.\n\nYang bisa dirapihin:\n\n- **Kalimatnya pecah-pecah.** Gabungin biar ngalir.\n- **Sebut judul atau ide paper-nya.** Itu nunjukin kamu beneran baca, bukan cuma tahu nama.\n- **"With feeling" bisa diganti** jadi "through experience and intuition", biar tetap jujur tapi kedengeran profesional.\n\nContoh versi rapinya:\n\n"I\'ve spent six years keeping production systems running, mostly through experience and intuition. Professor Ashby\'s work on failure recovery made me realise there\'s a rigorous way to understand what I\'ve been doing by instinct. The reliability module is exactly where I want to build that foundation."\n\nCoba ulangi pakai kata-kata kamu sendiri?'],
    ['2026-10-21T21:22', 'me', 'i have six years keeping production alive, mostly by intuition. prof ashby work on failure recovery show me there is a real way to understand what i do by instinct. so i want to learn it properly'],
    ['2026-10-21T21:22', 'ai', 'Jauh lebih kuat 👏 Ini udah suara kamu sendiri, dan itu lebih penting daripada grammar yang sempurna.\n\nKoreksi kecil kalau mau:\n\n- "i **have spent** six years"\n- "prof ashby\'**s** work"\n- "**showed** me"\n\nTapi jujur, kalau besok keluarnya kayak barusan, itu udah bagus. Panel lebih peduli isi dan cara kamu mikir.'],
    ['2026-10-21T21:25', 'me', 'satu lagi. "what will be your biggest challenge"'],
    ['2026-10-21T21:25', 'ai', 'Pertanyaan bagus buat dilatih, karena ini sering jadi jebakan.\n\nYang biasanya berhasil: sebut tantangan yang **nyata**, terus langsung tunjukin **rencana kamu**. Buat kamu yang part-time sambil kerja, jawaban paling jujur kemungkinan soal waktu.\n\nCoba jawab dulu, nanti aku kasih masukan.'],
    ['2026-10-21T21:30', 'me', 'time. full time job and study. but i already talk to my manager. and i will delegate more to my team. they are ready. mostly'],
    ['2026-10-21T21:30', 'ai', 'Bagus, ini konkret: kamu udah ngomong ke manajer, dan punya rencana delegasi. Itu nunjukin kamu mikir ke depan.\n\n"They are ready. Mostly." itu lucu, dan kalau diucapin sambil senyum, bisa bikin panel ketawa. Tapi kalau kamu grogi, mungkin lebih aman tanpa "mostly" 😄\n\nKamu udah siap, Kino. Istirahat yang cukup malam ini ya.'],
    ['2026-10-21T21:31', 'me', 'mostly tetep gue pake'],
    ['2026-10-21T21:31', 'ai', 'Haha, oke. Semoga panelnya punya selera humor yang sama.'],
  ] },
  { title: 'Grogi sebelum interview', msgs: [
    ['2026-10-22T12:40', 'me', 'interview jam 5. dari pagi deg2an. perut mules'],
    ['2026-10-22T12:40', 'ai', 'Wajar banget, apalagi ini sesuatu yang kamu pengen. Deg-degan itu tanda kamu peduli.\n\nBeberapa hal yang bisa bantu sampai jam 5:\n\n- **Makan siang beneran**, walau dikit. Interview pas perut kosong biasanya bikin makin mules.\n- **Latihan jawaban sekali aja**, terus berhenti. Kebanyakan latihan malah bikin kaku.\n- **15 menit sebelum mulai**, tarik napas pelan: tarik 4 detik, tahan 4, buang 6.\n\nKamu udah nyiapin ini dari kemarin. Bagian susahnya udah kamu kerjain.'],
    ['2026-10-22T12:43', 'me', 'gue belum bilang siapa2. cuma 1 orang'],
    ['2026-10-22T12:43', 'ai', 'Nggak apa-apa. Kadang lebih tenang kalau belum banyak yang tahu, jadi nggak ada tekanan tambahan.\n\nTapi kalau ada satu orang yang kamu pengen kabarin pas selesai nanti, itu juga boleh. Ada?'],
    ['2026-10-22T12:45', 'me', 'ada. tapi dia lagi sibuk'],
    ['2026-10-22T12:45', 'ai', 'Oke. Semoga nanti sore dia punya waktu buat dengar kabar baik dari kamu. Semangat ya, Kino. Jangan lupa makan siang 🙂'],
  ] },
);

// ===== lebih banyak telpon/chat iseng 22–23 Okt (biar ga sepi). jamnya disesuaiin sama cerita =====
// 22: Kino pulang abis makan siang buat interview online dari unit (dikunci, dori protes)
LOC_KINO.splice(LOC_KINO.findIndex(e => e[0] === '2026-10-22T19:10'), 1, ['2026-10-22T15:20', 'tower']);
RANDOM_CALLS.push(
  { id: 'mina3', who: 'Mina', d: [D22], hours: [9, 12], lines: [['t', 'kino. hari ini kan? 🤞'], ['t', 'kalender lo udah gue blok dari jam 3'], ['k', 'makasih kak'], ['t', 'pulang aja abis makan siang. bilang ke tim ada urusan'], ['k', 'iya kak'], ['t', 'semangat. jangan lupa makan']] },
  { id: 'mama3', who: 'Mama', d: [D23], hours: [11, 15], lines: [['t', 'nak, mama mimpiin kamu semalem'], ['k', 'mimpi apa ma'], ['t', 'kamu kecil lagi, nangis ga mau makan'], ['k', '...aku makan kok ma'], ['t', 'suara kamu capek'], ['k', 'kerjaan ma. gapapa'], ['t', 'jangan lupa makan ya nak']] },
  { id: 'juna4', who: 'Juna', d: [D23], hours: [15, 17], lines: [['t', 'bang town hall ngebosenin bgt 😭'], ['t', 'gue nelfon biar keliatan sibuk'], ['k', 'gue juga di town hall jun'], ['t', '...BANG LO DI BARIS BELAKANG?? 😭 gue liat lo'], ['k', 'matiin.']] },
);
Object.assign(CALL_FOLLOW, {
  mina3: { chat: 'mina', ans: ['kak makasih udah diblok', ['santai. kabarin abis ya 🤞']], miss: ['kak td nelfon?', ['iya. kalender lo udah gue blok dari jam 3. pulang aja', 'semangat 🤞']] },
  mama3: { chat: 'mama', ans: ['ma, aku beneran makan kok', ['iya nak. mama percaya', 'dikit']], miss: ['td mama nelfon?', ['iya nak, mama mimpiin kamu', 'jangan lupa makan ya']] },
  juna4: { chat: 'juna', ans: ['jangan nelfon pas town hall', ['siap bang 🫡😭', 'tapi lo ngangkat bang']], miss: ['jun.', ['BANG LO DI BARIS BELAKANG KAN 😭', 'gue dadah tadi lo ga liat']] },
});
RANDOM_CHATS.push(
  // 22
  { id: 'rc-juna22b', chat: 'juna', d: [D22], hours: [8, 11], msgs: [['them', 'bang kopi gue mana 😋'], ['them', 'lo kalah taruhan bang. sah. ada saksinya']], reply: ['besok', ['JANJI YA BANG ☕🤞']] },
  { id: 'rc-gemilang22', chat: 'gemilang', d: [D22], hours: [11, 15], msgs: [['them', 'bang gue lagi gambar tower B dari rooftop 🎨'], ['them', 'jendela lo yg paling rapi. gue jadiin fokus']], reply: ['jangan gambar jendela orang', ['udah terlanjur bang 😩 bagus lagi']] },
  { id: 'rc-hana22', chat: 'hana', d: [D22], hours: [11, 16], msgs: [['them', 'kino lo kenapa ga bales grup alumni 😤'], ['them', 'reuni minggu depan. lo dateng ya']], reply: ['liat nanti', ['kalo ga dateng gue jemput ke tower lo', 'serius']] },
  { id: 'rc-sadewa22b', chat: 'sadewa', d: [D22], hours: [15, 16], msgs: [['them', 'bang lo dateng dinner kan'], ['them', 'bukan gue yg nanya. surya']], reply: ['dateng', ['ok. gue duduk jauh dari juna']] },
  { id: 'rc-mama22', chat: 'mama', d: [D22], hours: [20, 23], msgs: [['them', 'nak udah makan malem?'], ['them', 'mama liat seoul hujan. pake jaket ya']], reply: ['iya ma. udah makan rame2', ['syukurlah 🥹', 'salam buat kris ya']] },
  // 23
  { id: 'rc-gemilang23', chat: 'gemilang', d: [D23], hours: [0, 3], msgs: [['them', 'bang lampu lo masih nyala 👀'], ['them', 'gue juga belum tidur. lagi gambar']], reply: ['tidur lang', ['lo duluan bang 😩']] },
  { id: 'rc-juna23', chat: 'juna', d: [D23], hours: [10, 12], msgs: [['them', 'BANG MAKASIH KOPINYA 😭☕'], ['them', 'rasanya kayak kopi kemenangan']], reply: ['sekali ini doang', ['dicatat bang. sekali ini doang. tiap minggu 😋']] },
  { id: 'rc-surya23', chat: 'surya', d: [D23], hours: [8, 11], msgs: [['them', 'good morning bang ☀️'], ['them', 'I made too much kimbap. want some for lunch?']], reply: ['boleh', ['yayy 🫶 no cucumber, I remember']] },
  { id: 'rc-mina23', chat: 'mina', d: [D23], hours: [11, 15], msgs: [['them', 'kino. gimana kemarin? 👀'], ['them', 'lo ga cerita apa2 dari kemaren']], reply: ['kayaknya lancar kak', ['YESSS 🎉 gue tau lo bisa', 'nanti cerita pas makan siang ya']] },
  { id: 'rc-ilham23', chat: 'ilham', d: [D23], hours: [14, 15], msgs: [['them', 'bang town hall lo duduk di mana'], ['them', 'bukan gue mau duduk sebelah lo. kursinya penuh aja']], reply: ['belakang', ['oke. gue juga di belakang. kebetulan']] },
  { id: 'rc-bagas23', chat: 'bagas', d: [D23], hours: [19, 22], msgs: [['them', 'lo udah makan'], ['them', 'gue taro tteokbokki depan pintu. ga pedes']], reply: ['makasih bin', ['hm. piring balikin']] },
  { id: 'rc-juna23b', chat: 'juna', d: [D23], hours: [21, 24], msgs: [['them', 'bang mau nonton bareng di unit gue ga 🍿'], ['them', 'film horor. biar lo ga sendirian. eh maksudnya biar GUE ga sendirian']], reply: ['ga. tidur', ['oke bang 🥺 pintu gue ga dikunci kalo berubah pikiran']] },
);

// ===== 25 Okt: ultah + ending. Kino pulang ke rumah mama (janji ke mama tgl 24). maafin: dianter Kris =====
{
  const E = ['maafin', 'jeda', 'turun', 'waktu'], not = (k) => E.filter(e => e !== k);
  const per = (ends, lines) => ends.flatMap(e => lines.map(l => [l[0], l[1], l[2], { ...(l[3] || {}), end: e }]));
  more('grup', [
    ['date', '2026-10-25'],
    ['Juna', 'BANG TURUN KE LOBI SEKARANG 🎂🎂🎂', '11.15'],
    ['Surya', '3 cakes!! one for you, two for the babies 🐱', '11.15'],
    ['Bagas', 'cepet. lilinnya meleleh', '11.16'],
    ['me', 'otw', '11.20'],
    ['Gemilang', 'bunga gue kegedean ya bang 😩 ga muat di lift', '11.40'],
    ['Ilham', 'bang kuenya jangan dibawa semua ke rumah mama. sisain', '11.41', { noEnd: 'jeda' }],
    ['Sadewa', 'dia senyum tadi. gue liat. ga ada yg percaya tapi gue liat', '11.42'],
    ['Juna', 'MISI BERHASIL 😭😭 progress: 1', '11.42'],
    ['me', 'makasih semua. beneran', '11.50'],
    ['Juna', 'BANG KRIS YG BAWAIN KUENYA TADI?? 🥹🥹', '11.51', { end: 'maafin' }],
    ['Kris', 'tiga-tiganya berat', '11.52', { end: 'maafin' }],
    ['Bagas', 'akhirnya', '11.52', { end: 'maafin' }],
    ...per(['turun', 'waktu'], [['Surya', 'bang take care on the train ya 🥺🫶', '11.51'], ['Bagas', 'kabarin kalo udah sampe', '11.52']]),
  ]);
  more('mama', [
    ['date', '2026-10-25'],
    ['them', 'nak jadi pulang kan?', '08.30'], ...per(['maafin', 'turun', 'waktu'], [['me', 'jadi ma', '08.40']]),
    ['me', 'sama kris', '08.41', { end: 'maafin' }], ['them', '🥹🥹 mama siapin makan yg banyak', '08.42', { end: 'maafin' }],
    ...per(['turun', 'waktu'], [['me', 'naik kereta jam 12 ma', '08.41'], ['them', 'iya nak. mama jemput di stasiun', '08.42']]),
    ...per(['jeda'], [['me', 'ma, aku pulangnya minggu depan ya. hari ini anak2 tower mau dateng', '08.41'], ['them', 'iya nak. yg penting kamu ga sendirian 🥹', '08.43'], ['them', 'tapi minggu depan beneran ya. janji', '08.43'], ['me', 'janji ma', '08.45']]),
    ...per(['maafin', 'turun', 'waktu'], [['them', 'udah sampe seoul nak?', '21.30']]),
    ...per(['jeda'], [['them', 'nak, anak2 udah pulang?', '21.30']]),
    ['them', 'kris makin ganteng 😊 bilangin makasih udah nganter ya', '21.31', { end: 'maafin' }],
    ...per(['maafin', 'turun', 'waktu'], [['me', 'udah ma', '21.45'], ['them', 'kuenya dimakan ya. jangan cuma dikasih kucing', '21.46']]),
    ...per(['jeda'], [['me', 'udah ma. rame tadi', '21.45'], ['them', 'syukurlah nak. minggu depan mama masakin jjigae kesukaan kamu', '21.46']]),
    ['them', 'selamat ulang tahun anak mama 🥹', '21.46'],
    ['me', 'makasih ma. sayang mama', '21.50'],
  ]);
  more('mina', [['date', '2026-10-25'], ['them', 'HBD KINO 🎉', '09.20'], ['them', 'offernya udah masuk belum?? 👀', '09.20'], ['me', 'keterima kak', '09.30'], ['them', 'AAAAA 😭🎉', '09.30'], ['them', 'gue bangga banget sama lo', '09.31'], ['them', 'hari ini jangan buka email kantor. itu perintah', '09.31'], ['me', 'iya kak', '09.35']]);
  more('bank', [['date', '2026-10-25'], ['them', '[BankKu] Transfer masuk ₩10.000\nDari: BAGAS BINTORO\nBerita: kado. jangan protes\nSaldo: ₩85.615.000', '06.30']]);
  more('bagas', [['date', '2026-10-25'], ['them', 'udah.', '06.31'], ['me', '10 ribu bin?', '09.00'], ['them', 'niatnya yg diitung', '09.05'], ['me', 'makasih bin', '09.06']]);
  more('hana', [['date', '2026-10-25'], ['them', 'kino hbd 🥹', '10.00'], ['them', 'maaf ya soal foto kemarin', '10.00'], ['me', 'makasih udah ngirim. beneran', '10.20'], ['them', 'lo baik2 aja?', '10.21'], ['me', 'mau pulang ke rumah mama. baik', '10.25']]);
  more('surya', [['date', '2026-10-25'], ['them', 'bang did you eat the brownies yet? 🥺', '14.30'], ['me', 'dimakan mama setengah', '15.00'], ['them', 'MAMA LIKES MY BROWNIES?? 🥹', '15.01'], ['them', 'best day of my life', '15.01']]);
  more('juna', [['date', '2026-10-25'], ['them', 'bang susu pisangnya jangan dibagi ya 😤 6 itu buat lo semua', '15.30'], ['me', '2 diminum mama', '15.45'], ['them', 'MAMA BANG KINO MINUM SUSU PISANG GUE 😭', '15.46'], ['them', 'ini kehormatan keluarga', '15.46']]);
  more('gemilang', [['date', '2026-10-25'], ['them', 'bang bunganya ditaro di mana 💐', '16.30'], ['me', 'di meja mama. kegedean lang', '16.50'], ['them', 'itu namanya niat bang 😩🎨', '16.51']]);
  more('ilham', [['date', '2026-10-25'], ['them', 'bang', '19.00'], ['them', 'yg di grup tadi formalitas. ini yg beneran. hbd', '19.00'], ['them', 'jangan sakit lagi. bukan gue khawatir', '19.01'], ['me', 'makasih ham', '19.20']]);
  more('sadewa', [['date', '2026-10-25'], ['them', 'bang', '20.00'], ['them', 'soal nonton. harusnya gue nolak', '20.00'], ['them', 'hbd', '20.01'], ['me', 'udah dew. bukan salah lo', '20.15'], ['them', 'ok', '20.16']]);
  // Kris, beda tiap ending
  more('kris', [
    ['date', '2026-10-25'],
    ['them', 'udah sampe unit. 4519', '21.50', { end: 'maafin' }],
    ['them', 'makasih udah ngajak aku ke rumah mama', '21.50', { end: 'maafin' }],
    ['them', 'mama bilang aku boleh dateng lagi 🥹', '21.51', { end: 'maafin' }],
    ['me', 'mama bilang gitu ke semua orang', '21.54', { end: 'maafin' }],
    ['them', 'oh', '21.54', { end: 'maafin' }],
    ['me', 'boong. cuma ke kamu', '21.55', { end: 'maafin' }],
    ['them', '🥹🥹🥹', '21.55', { end: 'maafin' }],
    ['me', 'tidur. besok senin', '21.56', { end: 'maafin' }],
    ['them', 'selamat ulang tahun, sayang', '21.56', { end: 'maafin' }],
    ['me', 'iya. makasih, sayang', '21.57', { end: 'maafin' }],
    ['them', 'aku ga akan ganggu', '21.00', { end: 'jeda' }],
    ['them', 'cuma mau bilang selamat ulang tahun. semoga hari ini enak', '21.00', { end: 'jeda' }],
    ['me', 'makasih. jaga diri ya', '21.55', { end: 'jeda' }],
    ['them', 'aku denger kamu pulang ke rumah mama. salam ya', '21.30', { end: 'turun' }],
  ]);
  // draft yg ga jadi dikirim di malem ultah
  DRAFTS.push(['2026-10-25T21:31', '2026-10-25T23:59', 'salam balik dari mama', false, 'turun'], ['2026-10-25T20:00', '2026-10-25T23:59', 'makasih udah dateng tadi', false, 'waktu']);
  // Lacak: Kino ke rumah mama; maafin: Kris ikut
  PLACES.mama = { n: 'Rumah Mama', a: 'Gimpo-si, Gyeonggi-do', x: 14, y: 56 };
  ['maafin', 'turun', 'waktu'].forEach(e => LOC_KINO.push(['2026-10-25T12:00', 'jalan', e], ['2026-10-25T12:50', 'mama', e], ['2026-10-25T20:10', 'jalan', e], ['2026-10-25T21:35', 'tower', e]));
  LOC_KRIS.push(['2026-10-25T12:00', 'jalan', 'maafin'], ['2026-10-25T12:50', 'mama', 'maafin'], ['2026-10-25T20:10', 'jalan', 'maafin'], ['2026-10-25T21:35', 'tower', 'maafin']);
}

// rapihin tgl 22: interview 17.00–17.30 (Kino di unit dari 15.20), dinner 19.00
{
  const at = (list, id, h) => { const x = list.find(c => c.id === id); x.hours = h; };
  at(RANDOM_CALLS, 'surya2', [15, 17]); at(RANDOM_CALLS, 'spam2', [18, 19]); // ga bunyi pas interview
  at(RANDOM_CALLS, 'bagas2', [21, 24]); at(RANDOM_CHATS, 'rc-surya3', [21, 24]); // "lo cabut duluan tadi" / "thank you for coming" = abis dinner
  const m = RANDOM_CHATS.find(c => c.id === 'rc-mina'); m.d = [D21]; m.hours = [11, 15]; // tgl 22 kalender kino udah diblok kak mina
  PHOTOS.find(x => x.img === 'img/ig/kino-0.jpg').ts = '2026-10-22T16:45'; // abis setrika kemeja, sebelum interview
}
// 22: abis sadewa cerita kris ketawa mulu pas nonton
ALT.push(['2026-10-22T19:15', 'sadewa bilang dia ketawa mulu pas nonton. yaudah. minggu ini gue ga bisa bikin dia ketawa, ada yg bisa. gapapa']);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-22T19:15', ALT[ALT.length - 1][1], '', [], 0, {}]);
[
  ['2026-10-22T20:05', 'surya ngebungkusin japchae dua porsi. "buat bang kris juga". gue terima dua2nya'],
  ['2026-10-22T23:58', 'japchae porsi dia masih di kulkas. besok juga masih bisa dimakan kok'],
].forEach(([ts, text]) => { ALT.push([ts, text]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', ts, text, '', [], 0, {}]); });
ALT.push(['2026-10-23T21:25', 'kalo sama mereka dia bisa ketawa, yaudah. yg penting ketawa']);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-23T21:25', ALT[ALT.length - 1][1], '', [], 0, {}]);

// ===== Safari: rapihin yg kebaca kayak curhat/komentar, bukan ketikan pencarian =====
{
  const FIX = {
    'encore konser biasanya berapa lagu (biar tau kapan dia mulai nangis)': 'encore konser biasanya berapa lagu',
    'tteokbokki level 2 itu pedes ga (jujur)': 'tteokbokki level 2 pedes banget ga',
    'kenapa orang bisa tidur dalam 3 detik. gue butuh 2 jam': 'cara cepet tidur kalo susah tidur',
    'masakan dimakan 3x sama orang itu artinya enak atau dia laper': 'orang nambah makan 3x artinya enak ga',
    'renew ssl cert nginx staging (buat juna, bukan buat gue)': 'renew ssl certificate nginx certbot',
    'how to say "i fix it with feeling" professionally': 'how to say i work by intuition professionally',
    'town hall boleh ga dateng kalo lagi ga mood liat manusia': 'izin ga ikut town hall alasan apa',
    'jalan malem bikin kepala enteng beneran ga (bagas bilang iya)': 'jalan malem bikin tenang ga',
    'migration 0042 rollback ga jalan (ilham bilang bukan dia)': 'postgres rollback migration stuck lock not released',
    'bubur yang enak deket mapo (surya maksa)': 'bubur delivery deket mapo',
    'ngasih tau pacar soal s2 setelah dia bohong seminggu itu impas ga': 'cara ngasih tau pacar mau kuliah s2 di luar negeri',
    'kucing 3 dititip ke tetangga 1 minggu tiap 3 bulan': 'titip kucing ke tetangga seminggu tips',
    'ga kenapa2 kok. cuma liat jadwal film': 'jadwal CGV Yongsan malam ini',
  };
  const DROP = ['nevermind', 'ga usah dijawab google gue tau', 'ngapain gue nyari ini'];
  for (let i = SAFARI.length - 1; i >= 0; i--) { const q = SAFARI[i][1]; if (DROP.includes(q)) SAFARI.splice(i, 1); else if (FIX[q]) SAFARI[i][1] = FIX[q]; }
}

// ===== abis tgl 25 (termasuk HP epilog 1 Nov): Kesehatan, Durasi Layar, Lacak, Claude, to-do beda tiap ending =====
// Kesehatan: [langkah, tidur, detak istirahat] per tanggal
const HEALTH_AFTER = {
  maafin: { '2026-10-26': [7400, 5.5, 70], '2026-10-27': [8200, 6.4, 66], '2026-10-28': [8900, 7.0, 63], '2026-10-29': [8100, 7.2, 62], '2026-10-30': [9300, 7.4, 61], '2026-10-31': [10200, 7.1, 61], '2026-11-01': [7600, 7.6, 60] },
  jeda: { '2026-10-26': [5200, 3.8, 72], '2026-10-27': [6100, 4.5, 70], '2026-10-28': [7000, 5.1, 68], '2026-10-29': [6500, 4.9, 68], '2026-10-30': [7400, 5.6, 66], '2026-10-31': [6900, 5.8, 65], '2026-11-01': [6200, 6.0, 65] },
  turun: { '2026-10-26': [3100, 2.9, 74], '2026-10-27': [5800, 4.2, 70], '2026-10-28': [7600, 5.3, 67], '2026-10-29': [8000, 5.9, 65], '2026-10-30': [8800, 6.3, 64], '2026-10-31': [9100, 6.6, 63], '2026-11-01': [7800, 6.8, 62] },
  waktu: { '2026-10-26': [6200, 6.1, 68], '2026-10-27': [7000, 5.4, 67], '2026-10-28': [7900, 5.8, 66], '2026-10-29': [8300, 6.2, 64], '2026-10-30': [8600, 6.5, 63], '2026-10-31': [9000, 6.7, 62], '2026-11-01': [8000, 7.0, 62] },
};
HEALTH_NOTE.push(
  ['2026-10-30T07:30', 'Rata-rata tidur kamu minggu ini naik 2 jam dibanding minggu lalu.', 'maafin'],
  ['2026-11-01T07:30', 'Detak jantung istirahat kamu kembali normal: 60 BPM.', 'maafin'],
  ['2026-10-31T07:30', 'Tidur kamu masih di bawah rata-rata. Coba tidur lebih awal malam ini.', 'jeda'],
  ['2026-10-29T07:30', 'Langkah kamu naik 3 hari berturut-turut.', 'turun'],
  ['2026-10-26T07:30', 'Tidur kamu semalam 6j 6m, terpanjang dalam seminggu.', 'waktu'],
  ['2026-10-31T07:30', 'Kamu konsisten tidur lebih dari 6 jam 4 malam terakhir.', 'waktu'],
);
// Durasi Layar: menit per app sehari penuh (hari2 sebelumnya diturunin dari sini)
const SCREEN_AFTER = {
  maafin: { KakaoTalk: 95, Instagram: 40, Musik: 35, X: 15, Safari: 12, Claude: 3 },
  jeda: { KakaoTalk: 150, X: 55, Musik: 60, Instagram: 30, Safari: 15, Claude: 14 },
  turun: { Musik: 95, KakaoTalk: 60, Safari: 22, Instagram: 18, X: 10, Claude: 6 },
  waktu: { Musik: 70, Safari: 45, KakaoTalk: 40, Instagram: 15, X: 8, Claude: 6 },
};
const PICKUPS_AFTER = { maafin: 58, jeda: 112, turun: 66, waktu: 44 };
const FIRST_PICK = { maafin: 'KakaoTalk', jeda: 'KakaoTalk', turun: 'Musik', waktu: 'Safari' };
// Lacak: maafin tetep share & deket; jeda tetep share tapi jauh; turun/waktu Kris berhenti share
PLACES.hangang = { n: 'Taman Sungai Han Mangwon', a: 'Mapo-gu, Seoul', x: 60, y: 150 };
LOC_KRIS.push(['2026-11-01T19:40', 'tower', 'maafin'], ['2026-11-01T18:30', 'hangang', 'jeda']);
LOC_KINO.push(['2026-11-01T08:00', 'tower']);
SHARE_KRIS.push(['2026-10-25T03:30', false, 'turun'], ['2026-10-25T01:10', false, 'waktu']);
// Claude: satu obrolan tiap ending
KLOD.push(
  { title: 'Masakan keasinan', epi: 'maafin', msgs: [
    ['2026-10-28T23:10', 'me', 'pacar gue masakin. keasinan parah. gue abisin terus gue bilang enak. salah ga'],
    ['2026-10-28T23:10', 'ai', 'Nggak salah kok 🙂 Kadang "enak" itu artinya "makasih udah repot-repot buat aku", bukan penilaian rasa.\n\nKalau nanti kalian masak bareng, kamu bisa pelan-pelan nunjukin takaran garamnya. Dia belajar masak, kamu belajar bilang yang di hati. Kedengarannya kalian lagi sama-sama belajar.'],
    ['2026-10-28T23:13', 'me', 'terus gue bilang sayang. ke dia. langsung. ga lewat chat'],
    ['2026-10-28T23:13', 'ai', 'Kino. Itu besar banget 🥹\n\nInget nggak, dua minggu lalu kamu nanya ke aku cara bilang sayang tanpa kedengeran aneh? Ternyata jawabannya cuma satu: diucapin.\n\nGimana rasanya?'],
    ['2026-10-28T23:15', 'me', 'aneh. tapi enak'],
    ['2026-10-28T23:15', 'ai', 'Itu jawaban paling jujur yang pernah aku denger 🙂 Selamat ya, buat kalian berdua.'],
  ] },
  { title: 'Kangen saat break', epi: 'jeda', msgs: [
    ['2026-10-31T01:30', 'me', 'udah seminggu break. kangen itu tanda harus balik atau biasa aja'],
    ['2026-10-31T01:30', 'ai', 'Kangen setelah seminggu itu wajar banget, apalagi setelah delapan tahun. Kangen nggak selalu berarti harus balik sekarang, tapi juga bukan berarti kamu salah ambil jeda.\n\nMungkin pertanyaan yang lebih membantu:\n\n- Yang kamu kangenin itu **dia**, atau **rasa aman** waktu semuanya masih baik-baik aja?\n- Kalau kalian ngobrol sekarang, apa kamu udah bisa ngomong tanpa nahan sakit hati?\n\nNggak ada jawaban yang salah. Jeda itu memang buat dipakai mikir.'],
    ['2026-10-31T01:34', 'me', 'dua2nya. dan belum'],
    ['2026-10-31T01:34', 'ai', 'Makasih udah jujur. Kalau belum siap, berarti jedanya masih kerja. Nggak apa-apa nunggu sedikit lagi.\n\nTidur dulu ya, Kino. Udah jam setengah dua.'],
  ] },
  { title: 'Barang yang disimpan', epi: 'turun', msgs: [
    ['2026-10-27T02:00', 'me', 'cara berhenti nyimpen barang dari mantan'],
    ['2026-10-27T02:00', 'ai', 'Pelan-pelan aja. Nggak ada aturan harus dibuang semua sekarang.\n\nBeberapa cara yang biasanya membantu:\n\n- **Kumpulin di satu kotak**, simpan di tempat yang nggak keliatan tiap hari.\n- **Kasih jarak waktu.** Buka lagi sebulan atau dua bulan lagi, baru putusin.\n- **Pisahin yang bikin sakit dan yang bikin hangat.** Nggak semua kenangan harus ikut pergi.\n\nBoleh aku tahu, barangnya apa?'],
    ['2026-10-27T02:03', 'me', 'lilin. dari kue ulang tahun. bengkok'],
    ['2026-10-27T02:03', 'ai', 'Itu kecil banget, tapi kedengarannya artinya besar.\n\nKamu nggak harus buang lilin itu, Kino. Simpen aja dulu. Nanti, kalau suatu hari kamu lihat dan rasanya udah nggak sakit, kamu bakal tahu sendiri mau diapain.'],
  ] },
  { title: 'Persiapan ke Oxford', epi: 'waktu', msgs: [
    ['2026-10-30T22:30', 'me', 'part-time msc di oxford. tiap 3 bulan ke uk seminggu. barang apa aja yg harus dibawa'],
    ['2026-10-30T22:30', 'ai', 'Selamat sekali lagi 🎓 Buat program part-time yang bolak-balik, biasanya yang penting:\n\n- **Jaket hujan yang beneran tahan air.** Oxford hujan hampir tiap hari.\n- **Adaptor colokan UK** (tipe G), minimal dua.\n- **Laptop + charger cadangan.**\n- **Obat-obatan pribadi**, termasuk obat lambung kamu.\n- **Botol minum**, karena kamu bakal jalan kaki banyak.\n\nAda yang mau kamu siapin di Seoul juga sebelum berangkat?'],
    ['2026-10-30T22:33', 'me', 'kucing 3. siapa yg jagain seminggu'],
    ['2026-10-30T22:33', 'ai', 'Pertanyaan paling penting 🐈 Kalau ada tetangga yang kamu percaya, itu biasanya paling nyaman buat kucingnya, karena mereka tetap di rumah sendiri.\n\nTulis jadwal makan, porsi, dan kebiasaan masing-masing. Misalnya siapa yang suka tidur di tempat aneh.'],
    ['2026-10-30T22:36', 'me', 'dori. dia suka tidur di tempat jaket dulu'],
    ['2026-10-30T22:36', 'ai', 'Ditulis juga ya. Biar yang jagain tahu, kalau Dori nggak ada di mana-mana, cek di situ dulu.'],
  ] },
);
// to-do kerjaan: dikerjain minggu depannya (semua ending sama)
{
  const t = NOTES.find(n => n.id === 'todo').todo, done = { 'review PR juna: migration 0042': '2026-10-26T10:40', 'benerin staging (mati lagi)': '2026-10-27T15:20', 'postmortem prod down 24/10': '2026-10-27T17:00', 'alert buat idle in transaction': '2026-10-28T11:30', 'ngobrol sama juna soal deploy': '2026-10-26T09:50', 'jangan buka email kantor (kata kak mina)': '2026-10-26T08:00' };
  t.forEach(x => { if (done[x[0]] && !x[2]) x[2] = done[x[0]]; });
  t.push(['minggu depan: juna jadi reviewer 0043', '2026-10-27T17:05', null]);
  // interview: "kasih tau kris" kecentang cuma di maafin
  NOTES.find(n => n.id === 'intv').todo.find(x => x[0] === 'kasih tau kris').push(null);
  const k = NOTES.find(n => n.id === 'intv').todo.find(x => x[0] === 'kasih tau kris'); k[2] = '2026-10-25T02:45'; k[3] = 'maafin';
}
// 21 malem: abis liat story bioskop sadewa
ALT.push(['2026-10-21T23:25', 'lo mau nonton sama sadewa ya nonton aja kris. tinggal bilang. gue ga bakal ngelarang. kenapa harus boong']);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-21T23:25', ALT[ALT.length - 1][1], '', [], 0, {}]);

// Kris bosen: hari2nya kerasa sama (pagi tgl 22, lagi cuti di unit)
X_POSTS.push(['xk15', 'kris', '2026-10-22T08:30', 'hari ini sama kayak kemarin. kemarin sama kayak minggu lalu.', '', [['juna', 'bang lagi galau ya 😭'], ['bagas', 'k']], 38]);
// Claude 23: abis Bagas bilang Kris cuti "buat mikir"
KLOD.push({ title: 'Cuti tanpa bilang pasangan', msgs: [
  ['2026-10-23T13:40', 'me', 'kenapa orang cuti ga bilang pasangan'],
  ['2026-10-23T13:40', 'ai', 'Pasti rasanya nggak enak tahu hal kayak gitu dari orang lain.\n\nAlasannya bisa macam-macam, dan nggak selalu soal pasangannya:\n\n- **Butuh ruang buat sendiri**, tapi belum tahu cara bilangnya tanpa bikin khawatir\n- **Lagi ngehindarin obrolan** yang dia tahu bakal berat\n- **Ada yang lagi dia pikirin**, dan dia belum siap cerita\n\nBoleh aku tanya, kamu tahunya dari mana?'],
  ['2026-10-23T13:43', 'me', 'temen setimnya. katanya dia mau mikir. hidupnya kerasa muter2 di tempat'],
  ['2026-10-23T13:43', 'ai', 'Kedengarannya dia lagi bergulat sama sesuatu di dalam dirinya sendiri. Perasaan "muter-muter di tempat" itu sering datang dari rasa capek atau jenuh, dan orang yang lagi ngerasain itu kadang malah menjauh dari orang-orang terdekatnya.\n\nItu nggak bikin rasa sakit kamu jadi kecil. Tapi mungkin ini bukan sepenuhnya tentang kamu.'],
  ['2026-10-23T13:46', 'me', 'gue bagian dari hidupnya. berarti gue bagian yg muter2 itu'],
  ['2026-10-23T13:46', 'ai', 'Aku ngerti kenapa kamu sampai ke situ. Tapi "hidupku kerasa jalan di tempat" nggak sama dengan "kamu yang bikin aku jalan di tempat".\n\nSatu-satunya orang yang bisa jawab itu cuma dia. Dan kamu berhak nanya langsung, kapan pun kamu siap.'],
  ['2026-10-23T13:48', 'me', 'udah. kerja dulu'],
  ['2026-10-23T13:48', 'ai', 'Oke. Jangan lupa makan siang ya, Kino.'],
] });

// ===== IG Reels: video MinChan (sumber: pinterest fan repost) =====
INSTA.push(
  { user: 'kris.chandra', img: 'vid/reel-kris-1.mp4', reel: true, ts: '2026-09-28T21:10', cap: 'dia ga sadar lagi direkam. 8 tahun, masih ngeliatin aku kayak gini 🥹', likes: '1.203' },
  { user: 'kinoo.lee', img: 'vid/reel-kino-1.mp4', reel: true, ts: '2026-10-10T20:40', cap: 'pundaknya enak. udah itu aja.', likes: '876' },
  { user: 'kris.chandra', img: 'vid/reel-kris-2.mp4', reel: true, ts: '2026-10-29T21:30', cap: 'masih belajar masak. masih keasinan. masih dia abisin 🥹', likes: '1.541', end: 'maafin' },
  { user: 'kinoo.lee', img: 'vid/reel-kino-2b.mp4', reel: true, ts: '2026-10-31T22:00', cap: 'dia yg maksa pake filter. sekali ini doang', likes: '1.120', end: 'maafin' },
);
Object.assign(IG_COMMENTS, {
  'kris.chandra@2026-09-28T21:10': [['junahann', 'BANG KRIS PAMER 😭😭'], ['suryalix', 'the way he looks at you 🥹🫶'], ['kinoo.lee', 'hapus.'], ['kris.chandra', 'ga mau 🥹']],
  'kinoo.lee@2026-10-10T20:40': [['kris.chandra', '🥹🥹🥹'], ['gemilangrp', 'romansa 💐😭'], ['ilham.jeong', 'pamer mulu bang'], ['bagasbinn', 'k']],
  'kris.chandra@2026-10-29T21:30': [['suryalix', 'BANG KRIS 🥹🥹 YOU GUYS'], ['junahann', 'KEASINAN TAPI DIABISIN?? itu cinta bang 😭'], ['kinoo.lee', 'jangan rame.']],
  'kinoo.lee@2026-10-31T22:00': [['junahann', 'BANG KINO PAKE FILTER ANJING 😭😭 SCREENSHOT'], ['kris.chandra', 'katanya sekali ini doang 🥹'], ['kinoo.lee', 'iya.'], ['sadewaa.k', 'lucu. bukan gue suka ya']],
});

// ===== email kerjaan tambahan (nyambung sama Jira INFRA-3312 & PagerDudy INC-8841 yg udah ada) =====
{
  const JIRA = { from: 'Jira', av: ['◆', '#0c66e4'], addr: 'jira@lumen.atlassian.net', tag: 'Kerja' };
  const GIT = { from: 'GitHub', av: ['G', '#24292f'], addr: 'notifications@github.com', tag: 'Kerja' };
  const PD = { from: 'PagerDudy', av: ['!', '#ff3b30'], addr: 'alerts@lumen.pagerdudy.com', tag: 'Kerja' };
  const CONF = { from: 'Confluence', av: ['C', '#1868db'], addr: 'confluence@lumen.atlassian.net', tag: 'Kerja' };
  MAILS.push(
    { ts: '2026-10-20T10:05', ...GIT, subj: '[lumen/platform] Juna Pratama requested your review on #1842: migration 0042 – add session index', body: 'junahann requested your review on this pull request.\n\n#1842 migration 0042 – add session index\n+214 −38 · 6 files changed\n\n"udah dites di staging bang, aman kok"\n\nView pull request: github.com/lumen/platform/pull/1842' },
    { ts: '2026-10-20T11:40', ...JIRA, subj: '[INFRA-3312] Renew SSL cert – staging: status changed to Done', body: 'Kino changed the status of INFRA-3312 from In Progress to Done.\n\nJuna Pratama commented: BANG MAKASIH 😭🙏' },
    { ts: '2026-10-21T14:31', ...PD, from: 'PagerDudy', av: ['✓', '#34c759'], subj: '[RESOLVED] staging-db-1 unreachable', body: 'RESOLVED – staging-db-1 (staging)\n\nTriggered: 14:02 KST\nResolved by: Kino\nDuration: 27m\n\nNote: restarted. 2nd time today.' },
    { ts: '2026-10-22T14:20', ...JIRA, subj: '[INFRA-3298] Security patch Oktober: status changed to Done', body: 'Juna Pratama changed the status of INFRA-3298 from In Progress to Done.\n\nJuna Pratama commented: telat 2 hari maaf bang 🙏 udah deploy' },
    { ts: '2026-10-23T22:47', ...GIT, subj: '[lumen/platform] Juna Pratama merged #1842: migration 0042 – add session index', body: 'junahann merged pull request #1842 into main.\n\n0 approving reviews.\n\nView pull request: github.com/lumen/platform/pull/1842' },
    { ts: '2026-10-27T17:00', ...CONF, subj: 'Mina Seo published "Postmortem: INC-8841 (24 Okt 2026)"', body: 'Mina Seo published a page in Platform Team.\n\nPostmortem: INC-8841 (24 Okt 2026)\n\nRingkasan: migration 0042 masuk main tanpa review, dan cuma dites di staging yang ternyata mati 3 hari. Failover pagi itu ninggalin koneksi lama yang megang lock.\n\nAction items:\n– Review wajib untuk semua migration (owner: Kino)\n– Alert untuk idle in transaction (owner: Kino)\n– Monitoring staging (owner: Ilham)\n– Checklist deploy di template PR (owner: Juna)\n\nBlameless. Makasih untuk semua yang di war room.' },
  );
}
// Lacak 24: Kris nunggu di lobi kantor Kino sore2 (16.05), pulang, terus lari balik pas dikabarin; Kino baru pulang abis 21.00
{
  const i = LOC_KRIS.findIndex(e => e[0] === '2026-10-24T15:05');
  LOC_KRIS.splice(i, 2, ['2026-10-24T15:05', 'jalan'], ['2026-10-24T15:55', 'kantor'], ['2026-10-24T17:20', 'jalan'], ['2026-10-24T17:50', 'tower'], ['2026-10-24T18:00', 'jalan']);
  LOC_KINO.find(e => e[0] === '2026-10-24T20:15')[0] = '2026-10-24T21:10';
  // Kris nunggu di depan klinik sampe Kino nyuruh pulang (20.51 "kamu pulang, istirahat" → 20.52 "oke. maaf"), klinik (Tower A) ke apart (Tower B) cuma lewat LG
  const j = LOC_KRIS.findIndex(e => e[0] === '2026-10-24T20:40'); LOC_KRIS.splice(j, 2, ['2026-10-24T20:53', 'jalan'], ['2026-10-24T20:58', 'tower']);
}

// kantor & klinik ada di gedung yg sama kayak apart (Tower B: kantor di lantai bawah, apart di atas)
Object.assign(PLACES.kantor, { n: 'Kantor · Tower B', a: 'Mapo-gu, Seoul', x: 92, y: 104 });
Object.assign(PLACES.klinik, { n: 'Klinik lt 3 · Tower B', a: 'Mapo-gu, Seoul', x: 92, y: 104 });
Object.assign(PLACES.tower, { n: 'Apart · Tower B' });

// kantor Kris (product dev, setim sama Bagas) beda: di Yeouido. Kantor Kino tetep di Tower B
PLACES.kantorKris = { n: 'Kantor (Yeouido)', a: 'Yeouido-dong, Seoul', x: 70, y: 176 };
LOC_KRIS.forEach(e => { if (e[1] === 'kantor' && e[0] !== '2026-10-24T15:55') e[1] = 'kantorKris'; });

// kompleks: apart di Tower B, kantor Kino (Lumen) + klinik lt 3 di Tower A. nyambung lewat lower ground: turun lift, jalan dikit
Object.assign(PLACES.kantor, { n: 'Kantor · Tower A', a: 'Mapo-gu, Seoul', x: 94, y: 105 });
Object.assign(PLACES.klinik, { n: 'Klinik lt 3 · Tower A', a: 'Mapo-gu, Seoul', x: 94, y: 105 });

// 20 Okt: Kino pulang cepet buat masak bulgogi (17.40 "lagi masak"); Kris mampir unit dulu, baru ke ramen jam 7an
{
  const k = LOC_KINO.find(e => e[0] === '2026-10-20T19:10'); if (k) k[0] = '2026-10-20T17:15';
  const i = LOC_KRIS.findIndex(e => e[0] === '2026-10-20T17:40');
  LOC_KRIS.splice(i, 1, ['2026-10-20T17:40', 'tower'], ['2026-10-20T18:40', 'jalan'], ['2026-10-20T18:55', 'ramen']);
}

// jeda: kino di unit seharian (anak2 dateng siang). yg nyebut "mama" sore tgl 25 ga muncul di jeda
{
  const NOJ = ['bang did you eat the brownies yet? 🥺', 'bang susu pisangnya jangan dibagi ya 😤 6 itu buat lo semua', 'bang bunganya ditaro di mana 💐', 'dimakan mama setengah', 'MAMA LIKES MY BROWNIES?? 🥹', 'best day of my life', '2 diminum mama', 'MAMA BANG KINO MINUM SUSU PISANG GUE 😭', 'ini kehormatan keluarga', 'di meja mama. kegedean lang', 'itu namanya niat bang 😩🎨'];
  ['surya', 'juna', 'gemilang'].forEach(id => CHATS.find(c => c.id === id).msgs.forEach(m => { if (NOJ.includes(m[1]) && m[2] && /^1[4-6]\./.test(m[2])) m[3] = { ...(m[3] || {}), noEnd: 'jeda' }; }));
  PHOTOS.forEach(p => { if (p.ts && p.ts.startsWith('2026-10-25') && /rumah mama/i.test(p.place || '')) p.noEnd = 'jeda'; });
}
// 25 Maret 2018 = hari jadi (kode surat 0325): foto berdua di hari pertama, biar pemain bisa nebak kodenya
PHOTOS.push({ img: 'img/ig/minchan-5.jpg', ts: '2018-03-25T16:40', place: 'Hongdae · hari pertama' });
PHOTOS.find(p => p.img === 'img/kafe-pertama.jpg').place = 'Hongdae · kafe pertama';

// ===== "Secret Secret" 🤫 (judul lagu SKZ, 말할 수 없는 비밀): tiap momen tersembunyi = 1 lagu Lee Know / Bang Chan =====
// [id, judul lagu, momennya, hint kalau belum ketemu]
const CLUES = [
  ['draft', 'Limbo (나지막이) · Lee Know', 'draft Kino yg kehapus pelan2', 'chat Kris, tunggu sebentar'],
  ['notes-kris', 'Love Me or Leave Me · Lee Know', 'surat2 yg ga pernah dikirim', 'Catatan'],
  ['lacak-boong', 'I Hate to Admit · Bang Chan', 'Kris ketauan di Lacak pas lagi boong', 'Lacak, tgl 20–22 malem'],
  ['lacak-off', 'Connected · Bang Chan', 'Kris matiin share lokasi', 'Lacak, abis tgl 22 jam 22.40'],
  ['lacak-klinik', 'Waiting for Us · Bang Chan, Lee Know, Seungmin, I.N', 'Kris nyalain lokasi lagi di depan klinik', 'Lacak, tgl 24 malem'],
  ['alt', 'Not! · Bang Chan, Lee Know, Seungmin', 'akun priv Kino', 'X, ganti akun'],
  ['bagas-cuti', 'Railway · Bang Chan', 'Bagas: Kris "muter2 di tempat"', 'chat Bagas, tgl 23'],
  ['claude-lift', 'Black Hole · Bang Chan & I.N', 'Kino nanya ke Claude "salah siapa"', 'Claude'],
  ['health', 'Roman Empire · Bang Chan', 'detak jantung 128 BPM jam 17.38', 'Kesehatan, tgl 24'],
  ['hari-pertama', 'Drive · Bang Chan & Lee Know', 'foto "hari pertama" 25 Maret 2018', 'Galeri, paling bawah'],
  ['todo-0042', 'Wow · Lee Know, Felix, Hyunjin', 'review PR 0042 yg ga pernah dicentang', 'Catatan "kerjaan"'],
  ['cf-story', 'Want So Bad · Lee Know & Han', 'story Close Friends Kris yg ilang', 'story Kris, tgl 22 malem'],
  ['reels', 'Youth · Lee Know', 'Reels Kris & Kino', 'Reels di IG'],
  ['nontonflix', 'Cinema · Lee Know & Seungmin', 'iPhone Kris nonton dari Seongsu', 'chat Nontonflix'],
  ['safari', 'Start! · Lee Know, Seungmin, I.N', 'riwayat pencarian Kino', 'Safari'],
  ['screen', "Surfin' · Lee Know, Felix, Changbin", 'Durasi Layar: HP diambil 196× sehari', 'Pengaturan → Durasi Layar'],
  ['kris-x', 'Eternity · Bang Chan', 'tweet2 Kris yg ga pernah dia omongin', 'profil Kris di X'],
];

// "kasih tau kris" (S2) di maafin: Kino ngasih tau di mobil, jalan ke rumah mama
{ const k = NOTES.find(n => n.id === 'intv').todo.find(x => x[0] === 'kasih tau kris'); k[2] = '2026-10-25T12:20'; }
// selesai (waktu): pesan Kino abis nutup telpon, sesuai narasi
more('kris', [['date', '2026-10-25'], ['me', 'selamat ulang tahun buat aku. jangan nunggu.', '00.50', { end: 'waktu' }]]);

// Secret Secret: preview 30 detik dari iTunes (yg ga ada di iTunes → buka YouTube)
const SECRET_AUDIO = {"draft": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1e/9a/d2/1e9ad216-1b4b-6913-759e-a7c59b18f1f1/mzaf_16366845733146409896.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b8/74/c0/b874c02b-4014-56cd-8a6c-ba456bd7cba7/738676860429_Cover.jpg/300x300bb.jpg"], "lacak-boong": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8f/cb/7d/8fcb7d1a-00e0-3161-e57e-489342e33b20/mzaf_5292805357182867049.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b8/74/c0/b874c02b-4014-56cd-8a6c-ba456bd7cba7/738676860429_Cover.jpg/300x300bb.jpg"], "lacak-off": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9d/7f/0c/9d7f0c9a-0d3d-02f8-1c58-cb81a9730c20/mzaf_16276048240780756117.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b8/74/c0/b874c02b-4014-56cd-8a6c-ba456bd7cba7/738676860429_Cover.jpg/300x300bb.jpg"], "lacak-klinik": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d7/44/1e/d7441ece-d9ac-46d8-3cdc-0522a0b55577/mzaf_4600928590416538127.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/54/5f/6d/545f6deb-89de-9f08-4ad0-b8d4136a0911/192641947902_Cover.jpg/300x300bb.jpg"], "alt": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/72/2b/d1/722bd16d-4c2d-a28c-8965-4e8d3fbbecd9/mzaf_8202588501701132289.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/93/dc/d593dcdc-85cb-9196-d20d-7296312cd822/192641939273_Cover.jpg/300x300bb.jpg"], "bagas-cuti": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f1/60/10/f160103e-c20a-7f52-0cf9-eaca75665fd7/mzaf_16593631690024064447.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b3/e2/83/b3e28373-7aad-03c0-b8ec-9b1d9e706989/8809928953014_Cover.jpg/300x300bb.jpg"], "health": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/69/97/9169973e-7701-0aff-60e6-cf8dcf19c467/mzaf_180656481726933540.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/22/70/ea/2270ea94-60f0-94a6-bce2-99fafaa8a057/8809928957340_Cover.jpg/300x300bb.jpg"], "hari-pertama": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/de/ac/8f/deac8f47-fdfd-ce08-93b2-5edcbcd67996/mzaf_11178325819871569275.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b8/74/c0/b874c02b-4014-56cd-8a6c-ba456bd7cba7/738676860429_Cover.jpg/300x300bb.jpg"], "todo-0042": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a2/3a/e7/a23ae784-8a99-5c85-8e36-7f6d21a7f5f5/mzaf_16234374148323502510.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a8/99/a9/a899a9bb-bddc-1ce6-61d0-bea282420aa3/192641939464_Cover.jpg/300x300bb.jpg"], "reels": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a6/cd/97/a6cd97a0-5b92-4414-90c7-d81ba9965d79/mzaf_16231843726044607793.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b3/e2/83/b3e28373-7aad-03c0-b8ec-9b1d9e706989/8809928953014_Cover.jpg/300x300bb.jpg"], "nontonflix": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/30/1c/da/301cdaaa-e8d0-b9aa-7d3d-23d6b729c089/mzaf_12785939923477217862.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/00/48/cb/0048cbee-401b-5f01-8c1a-ff873727eb78/8809928953243_Cover.jpg/300x300bb.jpg"], "safari": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c9/e3/e4/c9e3e442-0199-e935-f0e6-0e70efaf2f71/mzaf_5070891646896010406.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3e/ed/d8/3eedd870-e035-0857-ccdf-e9d371b86984/888272153811_Cover.jpg/300x300bb.jpg"], "screen": ["https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1c/f4/19/1cf41902-77d3-0b48-d368-0044a7ec2f5a/mzaf_7329428213132520831.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/af/dc/2b/afdc2b64-deb3-cf5f-84e2-c43be4105636/192641939495_Cover.jpg/300x300bb.jpg"]};
// hadiah kalau semua 17 ketemu: catatan Kino buat Kris yg ga pernah dikirim (cuma muncul kalau lengkap)
NOTES.push({ id: 'secret', title: 'kalo ga keucap', date: '22/10/26', ts: '2026-10-22T00:30', secret: true, body: "kris.\n\naku yg ulang tahun, tapi aku yg nulis surat. kebalik ya. gapapa deh.\n\nsebelum yg manis, aku kesel dulu dikit ya.\n\nminggu ini kamu aneh.\nkamu bilang lembur, tapi malemnya ada story ramen sama gemilang.\nkamu bilang meeting, tapi sadewa upload foto bioskop sama kamu.\nterus kamu nanya ke intern aku di lift, \"kalo sayang tapi ngerasa ga disayang, salah siapa.\"\nkenapa nanyanya ke ilham, kris. aku cuma satu lantai di bawah kamu.\n\naku bingung harus apa. aku ada salah?\n(ini harusnya ditanyain langsung. tgl 25. jangan kabur ke dapur.)\n\nudah. keselnya segitu aja.\n\ntapi aku juga salah.\ntanggal 15 kamu bilang sayang, terus aku cuma jawab \"oh itu tau\". harusnya aku bales beneran.\naku sampe nyari di google \"cara bilang sayang tanpa kedengeran aneh\". ternyata ga ada yg ga aneh. yaudah, aku aneh aja.\n\naku sayang kamu.\ndari kafe yg kursinya goyang, waktu kita pertama kali jalan.\ndari lilin bengkok yg aku simpen setaun di dompet.\ndari tisu yg selalu aku bawa tiap nonton, soalnya kamu pasti nangis.\n\naku emang ga jago ngomong. makanya aku masak, aku nunggu kamu pulang, aku nyisain satu porsi.\nkalo cara aku itu ga kebaca, ini versi tulisannya.\n\naku seneng kamu ada.\nudah. itu aja.\n\noh, itu tau.\nmaksudnya: aku juga sayang kamu.\n\n– kino 🐰" });
// catatan rahasia: Kino nulis buat dirinya sendiri, ga niat dikirim
NOTES.find(n => n.id === 'secret').body += '\n\n(cuma draft. buat aku aja. kayanya cringe banget kalo dikirim.)';

// epilog Selesai: ujungnya dibikin nggantung ("liat nanti"), biar beda sama epilog Lobi
{
  const W = ENDINGS.waktu.epi, i = W.findIndex(l => l.startsWith('Lalu, dengan wajah datar'));
  if (i >= 0) W.splice(i, W.length - i,
    'Mereka menatap api kecil itu. Tidak ada yang meniupnya. Lilinnya terbakar pelan, miring, sampai lelehannya jatuh ke krim.',
    'Kris yang akhirnya meniupnya. "Biar nggak nangis lilinnya," katanya. Lelucon yang jelek. Kino tetap tertawa, pendek.',
    'Mereka mengobrol sedikit lagi. Tentang hal-hal yang tidak penting. Tidak ada yang menyinggung tanggal dua puluh lima, atau lobi, atau jaket yang dulu terlipat di depan pintu.',
    'Lalu Kris berdiri duluan. Merapikan laptopnya, lalu berhenti di samping meja.',
    '"Kalau kamu lewat sini lagi," katanya, "kabarin ya."',
    'Kino menatap lilin yang sudah padam. Asapnya sudah lama hilang.',
    '"Liat nanti," katanya.',
    'Kris tertawa kecil. Ia tahu kalimat itu. Dulu ia yang mengucapkannya, dengan cara yang jauh lebih buruk.',
    'Pintu kafe berbunyi waktu ia keluar.',
    'Kino tidak tahu apakah ia akan lewat sini lagi. Tidak tahu apakah ia akan mengabari. Tidak tahu apakah ia mau.',
    'Untuk pertama kalinya, tidak tahu terasa ringan.',
    'Ia menghabiskan kopinya pelan-pelan, lalu pulang.',
  );
}

// ===== epilog jeda: HP kebuka abis obrolan jam 23.00 (Kino ngasih tau s2), ga ada balesan terakhir. tutup chat Kris → narasi =====
const EPI_START = { jeda: '2026-11-01T23:20' };
{ const i = REPLIES.findIndex(r => r.id === 'fin-jeda'); if (i >= 0) REPLIES.splice(i, 1); }

// ===== seminggu kemudian (26 Okt – 1 Nov): sosmed, chat, email biar HP epilog ga kosong. epi:'all' = semua ending =====
{
  const A = { epi: 'all' }, M = { epi: 'maafin' }, J = { epi: 'jeda' }, T = { epi: 'turun' }, W = { epi: 'waktu' };
  // --- chat ---
  more('kru', [
    ['date', '2026-10-26'], ['Mina', 'kino masuk setengah hari. ga ada yg ngasih dia tiket hari ini', '08.45', A], ['Juna', 'siap kak 🫡', '08.46', A], ['Ilham', 'siap', '08.46', A], ['me', 'gue bisa kok', '09.10', A], ['Mina', 'setengah hari.', '09.10', A],
    ['date', '2026-10-28'], ['Mina', 'postmortem beres. ga ada yg dipecat. juna berhenti nangis', '16.10', A], ['Juna', 'INI KERINGET KAK', '16.11', A], ['me', '0043 lo yg review. gue cek ulang', '16.20', A], ['Juna', 'siap bang. 3x. sumpah', '16.20', A],
  ]);
  more('grup', [
    ['date', '2026-10-27'], ['Juna', 'GUYS postmortem besok jam 3. gue tersangka utama. kalo gue ga balik tolong kucing gue diurus', '21.10', A], ['Ilham', 'lo ga punya kucing', '21.11', A], ['Juna', 'KUCING METAFORA', '21.11', A], ['Sadewa', 'ok', '21.30', A],
    ['date', '2026-10-31'], ['Surya', 'halloween cookies ready 🎃 lobby fridge, no raisins as always', '16.00', A], ['Ilham', 'bang surya ini bentuknya apa', '16.05', A], ['Surya', 'GHOST 👻', '16.05', A], ['Ilham', 'oh. kirain awan', '16.06', A], ['Gemilang', 'lucu kok sur 🫶', '16.10', A],
  ]);
  more('kris', [
    ['date', '2026-10-26'], ['them', 'mama kamu ngebungkusin aku kue lagi. aku harus gimana', '08.20', M], ['me', 'makan', '08.40', M],
    ['date', '2026-10-27'], ['them', 'kamu udah bales oxford?', '12.10', M], ['me', 'udah. tadi pagi. terima', '12.30', M], ['them', 'KINO', '12.30', M], ['them', '🥹🥹🥹', '12.30', M], ['me', 'jgn caps', '12.31', M],
    ['date', '2026-10-29'], ['them', 'aku udah di lift. jam 5.02', '17.02', M], ['me', 'telat 2 menit', '17.05', M], ['them', 'liftnya lama 😭', '17.05', M],
    ['date', '2026-10-31'], ['them', 'filter yg kelinci boleh ga', '21.40', M], ['me', 'sekali ini doang', '21.45', M],
  ]);
  more('bagas', [['date', '2026-10-31'], ['them', 'jaket gue udah dibalikin kris', '18.10', J], ['me', 'oh', '18.12', J], ['them', 'dia nanya lo makan ga', '18.12', J], ['me', 'makan', '18.13', J], ['them', 'oke gue bilangin', '18.14', J]]);
  more('juna', [['date', '2026-10-28'], ['them', 'bang lo oke?', '19.30', T], ['me', 'oke', '19.41', T], ['them', 'bang kris juga bilang oke. kalian berdua bohongnya sama 😭', '19.41', T], ['me', 'kerja jun', '19.45', T], ['them', 'siap 🫡', '19.45', T]]);
  more('gemilang', [['date', '2026-10-31'], ['them', 'bang kino tadi seneng ga?', '22.00', W], ['me', 'seneng', '22.10', W], ['them', '🥹 nanti aku lukis ya', '22.10', W], ['me', 'jangan', '22.11', W], ['them', 'telat. udah sketsa', '22.11', W]]);
  // --- email ---
  const GIT = { from: 'GitHub', av: ['G', '#24292f'], addr: 'notifications@github.com', tag: 'Kerja' };
  const ACC = (ts, epi) => ({ ts, ...UNI, epi, subj: 'Offer accepted – MSc in Software Engineering (part-time)', body: 'Dear Kino,\n\nThank you for accepting your offer of admission. We are delighted that you will be joining us in January 2027.\n\nYour next steps:\n1. Complete the financial declaration\n2. Upload your degree certificate\n3. Book accommodation for Module 1 (11–15 January)\n\nWe look forward to welcoming you to Oxford.\n\nKind regards,\nGraduate Admissions' });
  MAILS.push(
    { ts: '2026-10-26T08:30', from: 'Mina Seo', av: ['img/av-mina.jpg'], addr: 'mina.seo@lumen.co.kr', tag: 'Kerja', epi: 'all', subj: 'hari ini', body: 'kino,\n\nhari ini setengah hari. ini bukan nawarin.\n\npostmortem rabu jam 3, gue yg presentasi. lo duduk aja.\n\n- mina' },
    { ts: '2026-10-29T11:20', ...GIT, epi: 'all', subj: '[lumen/platform] Juna Pratama approved #1857: migration 0043 – drop legacy session table', body: 'junahann approved these changes.\n\n"udah gue cek 3x bang. sumpah. 🫡"\n\nView pull request: github.com/lumen/platform/pull/1857' },
    { ts: '2026-10-29T14:00', from: 'Lumen People', av: ['L', '#ff6b00'], addr: 'people@lumen.co.kr', tag: 'Kerja', epi: 'all', subj: 'Pengingat: sisa cuti tahunan kamu', body: 'Halo Kino,\n\nSisa cuti tahunan kamu: 9 hari.\nCuti yang tidak dipakai sampai 31 Desember akan hangus.\n\nYuk, istirahat 🌿\n\nLumen People Team' },
    { ts: '2026-10-31T09:00', from: 'FitHouse', av: ['💪', '#111'], addr: 'member@fithouse.kr', epi: 'all', subj: 'Membership kamu berakhir hari ini', body: 'Halo Kino,\n\nMembership FitHouse Tower B kamu berakhir hari ini.\nPerpanjang sekarang dan dapatkan 1 bulan gratis!\n\nKami tunggu lagi 💪' },
    ACC('2026-10-27T08:50', 'maafin'), ACC('2026-10-31T10:15', 'jeda'), ACC('2026-10-29T22:40', 'turun'), ACC('2026-10-30T21:40', 'waktu'),
  );
  // pengingat oxford cuma buat yg belum bales sampe tgl 30
  { const r = MAILS.find(m => m.subj === 'Reminder: please respond to your offer'); if (r) { r.epi = 'jeda'; MAILS.push({ ...r, epi: 'waktu' }); } }
  // --- X ---
  X_POSTS.push(
    ['e1', 'cuaca', '2026-10-27T07:00', 'Seoul 9°, cerah. Daun ginkgo udah kuning semua 🍂', '', [], 330, A],
    ['e2', 'juna', '2026-10-28T16:30', 'postmortem selesai. gue masih hidup. makasih yg udah doain (ga ada)', '', [['ilham', 'gue doain kok'], ['juna', 'ILHAM 🥹'], ['ilham', 'doain lo ga deploy jumat']], 41, A],
    ['e3', 'meme', '2026-10-29T12:00', 'yang paling serem pas halloween: "bisa tolong cek prod bentar?"', '', [], 12400, A],
    ['e4', 'sadewa', '2026-10-30T23:10', 'jumat. bir. ga ada yg nanya.', 'img/ig/sadewa-6.jpg', [['ilham', 'nanya bang'], ['sadewa', 'telat']], 37, A],
    ['e5', 'kris', '2026-10-28T22:30', 'masak buat pertama kali. gagal 3x. yg keempat keasinan. diabisin.', '', [['kino', 'jangan di-post'], ['kris', 'udah 🥹'], ['juna', 'BANG 😭😭']], 230, M],
    ['e6', 'juna', '2026-10-30T22:10', 'diajak dinner bang kris bang kino. gue nangis di samgyeopsal. surya juga. sadewa ngaku ga tapi matanya merah', '', [['sadewa', 'asep'], ['surya', 'IT WAS THE SMOKE 🥲']], 96, M],
    ['e7', 'kris', '2026-10-27T23:40', 'jalan ke sungai han sendirian. ternyata kepala bisa enteng.', '', [['bagas', 'kan.']], 41, J],
    ['e8', 'gemilang', '2026-10-31T22:30', 'pasar malem sama anak2. bang kino menang lempar gelang 3x berturut2 dan ga senyum sama sekali. legend', '', [['juna', 'DIA SENYUM DIKIT GUE LIAT'], ['kino', 'ga.']], 380, W],
  );
  // akun privat Kino
  [['2026-10-31T23:30', 'dia pake filter kelinci terus gue juga dipakein, ini pertama dan terakhir, sumpah (dia udah screenshot)', M],
   ['2026-10-31T18:30', 'kata bagas dia nanya gue makan ga, makan kok, dikit', J],
   ['2026-10-29T19:10', 'ke sungai han sendiri, ternyata bisa, dingin tp bisa', T],
   ['2026-10-31T23:20', 'pasar malem, menang gelang tiga kali, dikasih ke surya juna ilham, yg keempat ga ada yg ambil, gpp', W],
  ].forEach(([ts, text, o]) => { ALT.push([ts, text, o]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', ts, text, '', [], 0, o]); });
  // --- IG ---
  INSTA.push(
    { user: 'bagasbinn', img: 'img/ig/bagas-4.jpg', ts: '2026-10-26T19:00', cap: 'senin. leg day. lagi.', likes: '88', epi: 'all' },
    { user: 'sadewaa.k', img: 'img/ig/sadewa-7.jpg', ts: '2026-11-01T11:00', cap: 'minggu.', likes: '102', epi: 'all' },
    { user: 'kris.chandra', img: 'img/ig/kris-4.jpg', ts: '2026-10-27T21:00', cap: 'dikasih. katanya mirip. aku ga ngerti tapi aku terima 🐺', likes: '1.380', epi: 'maafin' },
    { user: 'kinoo.lee', img: 'img/ig/kino-7.jpg', ts: '2026-10-31T22:40', cap: 'pasar malem.', likes: '512', epi: 'waktu' },
  );
  Object.assign(IG_COMMENTS, {
    'bagasbinn@2026-10-26T19:00': [['junahann', 'BANG BAGAS LENGANNYA 😳'], ['bagasbinn', 'iya']],
    'sadewaa.k@2026-11-01T11:00': [['ilham.jeong', 'rambut ijo bang?'], ['sadewaa.k', 'kalah taruhan']],
    'kris.chandra@2026-10-27T21:00': [['kinoo.lee', 'mirip'], ['junahann', 'BANG KINO YG NGASIH?? 😭'], ['suryalix', '🐺🫶']],
    'kinoo.lee@2026-10-31T22:40': [['gemilangrp', '3x berturut2 🏆'], ['junahann', 'BANG KINO POSTING SELFIE?? hari apa ini'], ['suryalix', '🥹🫶'], ['sadewaa.k', 'ok']],
  });
  STORIES.push({ user: 'kris.chandra', img: 'img/han-river.jpg', ts: '2026-11-01T18:30', epi: 'jeda' });
}

// ===== epilog: draft Jeda di Catatan, kalender per ending, petunjuk pindahan (turun) =====
// jeda: seminggu ga ngomong, tapi tiap malem nulis. yg tgl 1 jam 22.55 itu yg akhirnya dikirim
NOTES.push({ id: 'draft-jeda', title: 'buat kris', epi: 'jeda', drafts: [
  ['2026-10-27T01:10', 'kris.\naku keterima.'],
  ['2026-10-28T23:40', 'kris, aku keterima s2. oxford. part-time.\naku mau bilang ke kamu duluan dari tgl 25. tapi'],
  ['2026-10-29T23:58', 'anak2 reuni nanya kamu. aku bilang kamu lagi istirahat.\naku ga tau itu bener apa ngga.\naku juga ga tau aku istirahat dari kamu atau dari aku sendiri'],
  ['2026-10-30T22:50', 'kamu ga salah sendirian.\naku juga ga pernah bilang apa2. terus aku marah kamu ga ngerti.\nkayak nyuruh orang baca buku yg aku tulis pake bahasa yg cuma aku yg ngerti.'],
  ['2026-10-31T23:30', 'kata bagas kamu nanya aku makan ga.\nmakan. dikit.\nkamu sendiri makan ga'],
  ['2026-11-01T22:55', 'kalo kamu mau nunggu, silakan.\naku ga minta. aku ga nyuruh. aku cuma ngasih tau.\n\n(kirim. jangan dihapus lagi, kino.)'],
] });
AGENDA.push(
  ['2026-11-02', '09:30', 'standup', '#5856d6', '', 'all'],
  ['2026-11-11', '', 'oxford: financial declaration 🎓', '#af52de', 'sama upload ijazah', 'all'],
  ['2026-10-30', '19:00', 'dinner anak2', '#ff9500', 'kris yg traktir', 'maafin'],
  ['2026-11-04', '10:00', 'vet dori (kontrol)', '#ff9500', 'sama kris. dia yg bayar', 'maafin'],
  ['2026-10-29', '19:00', 'reuni angkatan', '#ff9500', 'dateng. sendiri', 'jeda'],
  ['2026-11-01', '23:00', 'bilang ke kris', '#af52de', '', 'jeda'],
  ['2026-10-29', '18:00', 'sungai han', '#34c759', '', 'turun'],
  ['2026-10-29', '19:00', 'reuni angkatan', '#ff9500', 'dateng', 'waktu'],
  ['2026-10-31', '17:00', 'pasar malem', '#ff9500', 'anak2 tower B', 'waktu'],
);
// turun: Kris belum bilang, tapi ada tanda2 kecil (biar 1 Nov "aku pindah unit" ga dari mana2, tapi juga ga kebocoran dari orang)
more('paket', [['date', '2026-10-28'], ['them', '📦 Paket sudah diterima di lobi Tower B\nPenerima: unit 4419\nAtas nama: KRIS CHANDRA', '14.10', { epi: 'turun' }]]);
more('pengelola', [['date', '2026-10-30'], ['them', '[Pemberitahuan] Pemakaian lift barang untuk pindahan wajib reservasi H-7 di meja pengelola. Terima kasih 🙏', '10.00', { epi: 'turun' }]]);
ALT.push(['2026-10-28T22:40', 'ada paket atas nama dia nyasar ke unit gue, kebiasaan 8 taun ngisi alamat gue, gue taro depan pintunya, ga ngetok', { epi: 'turun' }]);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-28T22:40', ALT[ALT.length - 1][1], '', [], 0, { epi: 'turun' }]);

// email Oxford: UNI cuma punya `name`, padahal list mail baca `from` → nama pengirimnya kosong
MAILS.forEach(m => { if (!m.from && m.name) m.from = m.name; });

// ===== jeda, 25 Okt siang: ga ke rumah mama, anak2 tower ngumpul di unit Kino (versi rumah mama = noEnd:'jeda') =====
{
  const J = { end: 'jeda' };
  more('grup', [
    ['date', '2026-10-25'],
    ['Surya', 'bang kino we\'re coming up jam 2 yaa 🥺 4419 kan', '13.40', J], ['me', 'iya. jangan berisik, kucingnya tidur', '13.41', J], ['Juna', 'SIAP BANG (berisik)', '13.41', J],
    ['Gemilang', 'bang bunganya gue taro di mana 😩 meja lo penuh', '15.10', J], ['me', 'lantai.', '15.11', J], ['Gemilang', 'LANTAI 😩💐', '15.11', J],
    ['Ilham', 'bang doongie tidur di tas gue. gue ga bisa pulang', '17.20', J], ['me', 'yaudah nginep', '17.22', J], ['Ilham', '...beneran?', '17.22', J], ['me', 'ngga.', '17.23', J],
    ['Surya', 'thank you for letting us in today bang 🥹 soonie sat on my lap!!', '19.40', J], ['Juna', 'DORI NGGIGIT GUE TAPI GUE ANGGEP SAYANG', '19.41', J], ['Bagas', 'piringnya udah gue cuci', '19.42', J],
    ['me', 'makasih. pulang sana tidur', '19.45', J], ['Gemilang', 'bang kino senyum 3x hari ini. gue itung 💐', '19.46', J], ['Sadewa', '4.', '19.46', J], ['me', 'udah ah', '20.00', J],
  ]);
  more('surya', [['date', '2026-10-25'], ['them', 'bang the brownies sisa 4, I put them in your fridge ya 🍫', '19.50', J], ['me', 'udah ketauan. dori nyium2 kulkas', '20.05', J], ['them', 'DORI NO 😭', '20.05', J]]);
  more('juna', [['date', '2026-10-25'], ['them', 'bang susu pisangnya jangan dikasih kucing ya 😤', '20.10', J], ['me', 'udah 2. sisanya besok', '20.20', J], ['them', 'oke bang, 4 lagi. gue hitung 🫡', '20.20', J]]);
  ALT.push(['2026-10-25T20:30', 'anak2 dateng ke unit, rame, berisik, kucing2 betah. kursi yg biasa dia dudukin didudukin surya. gpp. surya juga anget', J]);
  X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-25T20:30', ALT[ALT.length - 1][1], '', [], 0, J]);
}

// jeda: janji "minggu depan pulang" ke mama ditepatin minggu 1 Nov. pulangnya, malem itu baru berani ngechat kris
more('mama', [['date', '2026-11-01'],
  ['them', 'udah sampe seoul nak?', '19.30', { epi: 'jeda' }], ['me', 'udah ma', '19.42', { epi: 'jeda' }],
  ['them', 'kuenya udah mama masukin tas kamu. bagi ke anak2', '19.43', { epi: 'jeda' }],
  ['them', 'nak, mama ga nanya. tapi mama liat kamu udah lebih enteng', '19.44', { epi: 'jeda' }], ['me', 'iya ma. makasih', '19.50', { epi: 'jeda' }]]);
AGENDA.push(['2026-11-01', '11:00', 'rumah mama', '#ff9500', 'janji', 'jeda']);

// ===== ketikan Kino biar ga keulang (follow-up telfon ga keangkat, random chat, DM) =====
{
  const MISS = { juna1: 'jun tadi nelfon? sorry lagi meeting', juna2: 'apa lagi jun', ilham1: 'ham td nelfon? kenapa', ilham2: 'kenapa ham', sadewa1: 'dew? td nelfon',
    bagas1: 'kenapa bin', bagas2: 'bin td nelfon?', gemilang1: 'kenapa lang', gemilang2: 'lang? td nelfon ya', mina2: 'kak sorry td ga keangkat', mina3: 'kak? ada apa',
    mama3: 'ma, td nelfon? maaf lagi kerja', surya2: 'sur, kenapa nelfon' };
  Object.entries(MISS).forEach(([k, t]) => { const f = CALL_FOLLOW[k]; if (f && f.miss) f.miss[0] = t; });
  const rr = (id, t) => { const r = RANDOM_CHATS.find(x => x.id === id); if (r && r.reply) r.reply[0] = t; };
  rr('rc-bagas', 'ada. di laci deket pintu'); rr('rc-surya', 'ada. ambil dua'); rr('rc-gemilang23', 'gambarnya besok aja. tidur');
  (TYPE_LINES.Mina || []).forEach(l => { if (l[0] === 'oke kak' && l[2] && l[2].d) l[0] = 'siap kak'; });
  const sw = (arr, from, to) => (arr || []).forEach(x => { if (x[0] === from) x[0] = to; });
  const X = DM_KINO.x || {}, G = DM_KINO.ig || {};
  sw(X.juna, 'kerja jun', 'jun. tweet mulu'); sw(X.juna, 'jangan lupa makan', 'makan dulu jun');
  sw(X.surya, 'makasih sur', 'thanks sur'); sw(X.surya, 'jangan kebanyakan gula', 'gulanya dikurangin');
  sw(X.gemilang, 'bagus lang', 'lukisan lo bagus'); sw(X.ilham, 'semangat ham', 'pelan2 aja ham');
  sw(G.junahann, 'tidur jun', 'udah malem jun'); sw(G.suryalix, 'makasih sur', 'makasih ya sur'); sw(G.suryalix, 'sisain satu', 'sisain buat gue');
}
{ const rr = (id, t) => { const r = RANDOM_CHATS.find(x => x.id === id); if (r && r.reply) r.reply[0] = t; };
  rr('rc-mina', 'noted kak'); rr('rc-hana22', 'gue usahain'); rr('rc-bagas23', 'enak. piringnya besok'); }

// ===== meme orisinal (tools/meme.html) di grup & X, sesuai karakter =====
{
  const A = { epi: 'all' };
  more('grup', [
    ['date', '2026-10-22'], ['Juna', '', '21.20', { img: 'img/meme/dinner.jpg' }], ['Surya', 'I just want everyone to eat 🥺', '21.21'], ['Sadewa', 'akurat.', '21.22'], ['Juna', 'SADEWA SETUJU SAMA GUE?? sejarah 😭', '21.23'],
    ['date', '2026-10-23'], ['Ilham', '', '10.05', { img: 'img/meme/kopi.jpg' }], ['Juna', 'kopi gue juga gratis 🤝', '10.06'], ['Bagas', 'kino traktir? hari apa ini', '10.08'], ['Ilham', 'hari gajian bang', '10.10'],
    ['Juna', '', '22.52', { img: 'img/meme/deploy.jpg' }], ['Juna', 'jumat malem produktif 😎', '22.53'], ['Bagas', 'staging lo kan mati', '22.55'], ['Juna', 'aman bang udah gue cek di laptop', '22.56'], ['Sadewa', 'ok.', '22.58'],
    ['date', '2026-10-28'], ['Juna', '', '16.15', { img: 'img/meme/postmortem.jpg', ...A }], ['Ilham', 'akurat', '16.16', A], ['Surya', 'proud of you juna 🥹', '16.18', A],
    ['date', '2026-10-31'], ['Surya', '', '16.01', { img: 'img/meme/cookies.jpg', ...A }],
  ]);
  X_POSTS.push(
    ['mx1', 'gemilang', '2026-10-22T22:15', 'palet minggu ini. jangan tanya 😩🎨', 'img/meme/palet.jpg', [['surya', '🫂💛'], ['juna', 'KAMIS ABU2 TUA KENAPA 😭']], 290],
    ['mx2', 'meme', '2026-10-23T19:00', 'setiap. hari. jumat.', 'img/meme/works.jpg', [], 15200],
    ['mx3', 'meme', '2026-10-26T09:00', 'senin.', 'img/meme/senin.jpg', [], 9800, A],
  );
}
// ultah malah... (akun privat Kino, 25 Okt malem, beda tiap ending)
[['maafin', 'ultah malah berantem wkwk. terus baikan. terus dia nyetirin gue ke rumah mama. plot twist terbaik taun ini'],
 ['jeda', 'ultah malah break wkwk. wk. lucu ga sih (ga)'],
 ['turun', 'ultah malah putus wkwkwk. jaketnya gue lipet rapi. bangga dikit'],
 ['waktu', 'ultah malah putus. lewat telfon. wkwk. kado terbaik: semoga tidur nyenyak'],
].forEach(([e, text]) => { const o = { end: e }; ALT.push(['2026-10-25T23:30', text, o]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-25T23:30', text, `img/meme/ultah_${e}.jpg`, [], 0, o]); });

// ===== 25 Okt: reaksi temen & Kris di sosmed, beda tiap ending =====
{
  const E = (e) => ({ end: e });
  X_POSTS.push(
    ['ue1', 'juna', '2026-10-25T11:55', 'BANG KRIS BAWAIN KUE BUAT BANG KINO. gue nangis lagi. ini yg ke-4 minggu ini', '', [['sadewa', 'ke-5']], 188, E('maafin')],
    ['ue2', 'gemilang', '2026-10-25T20:00', 'hari ini warnanya kuning lagi 💛🎨', '', [['surya', '🥹💛']], 260, E('maafin')],
    ['ue3', 'kris', '2026-10-25T21:58', 'boleh dateng lagi katanya.', '', [], 64, E('maafin')],
    ['ue4', 'gemilang', '2026-10-25T19:50', 'unit bang kino: 3 kucing, 6 orang, kursinya kurang satu. kita semua pura2 ga ngitung 😩', '', [['juna', '😭']], 312, E('jeda')],
    ['ue5', 'juna', '2026-10-25T19:55', 'misi berhasil. bang kino senyum 4x (kata sadewa)', '', [['sadewa', 'bener.']], 97, E('jeda')],
    ['ue6', 'kris', '2026-10-25T21:05', 'semoga harinya enak.', '', [], 41, E('jeda')],
    ['ue7', 'surya', '2026-10-25T12:20', 'bang kino naik kereta ke rumah mama 🚆 kirim salam buat mama!! 🥹', '', [], 205, E('turun')],
    ['ue8', 'kris', '2026-10-25T23:10', 'dilipet rapi.', '', [], 23, E('turun')],
    ['ue9', 'surya', '2026-10-25T12:20', 'bang kino naik kereta ke rumah mama 🚆 kirim salam buat mama!! 🥹', '', [], 205, E('waktu')],
    ['ue10', 'kris', '2026-10-25T02:40', 'udah.', '', [], 12, E('waktu')],
    ['ue11', 'gemilang', '2026-10-25T22:30', 'bang kino ketawa sekali hari ini di lobi. sekali doang. gue simpen 💐', '', [], 240, E('waktu')],
  );
  INSTA.push({ user: 'kris.chandra', img: 'img/ig/kris-8.jpg', ts: '2026-10-25T13:00', cap: 'dibolehin ikut ke rumah mama 🥹 (lagunya dia yg milih)', likes: '1.902', end: 'maafin' });
  Object.assign(IG_COMMENTS, { 'kris.chandra@2026-10-25T13:00': [['kinoo.lee', 'jangan rame'], ['junahann', '🥹😭😭'], ['suryalix', 'say hi to mama!! 🫶'], ['bagasbinn', 'akhirnya']] });
  STORIES.push({ user: 'suryalix', img: 'img/ig/cats-0.jpg', ts: '2026-10-25T16:00', txt: 'soonie sat on my lap 🥹', end: 'jeda' });
}
// ot6 lengkap per ending (25 Okt), sesuai karakter
{
  const E = (e) => ({ end: e });
  X_POSTS.push(
    // terakhir (baikan)
    ['uo1', 'ilham', '2026-10-25T18:00', 'bang kris nyetir, bang kino yg milih lagu. gue liat dari lobi. gue ikut seneng (dikit)', '', [], 58, E('maafin')],
    ['uo2', 'sadewa', '2026-10-25T22:00', 'ok. bagus.', '', [], 31, E('maafin')],
    // lobi (turun, balikin jaket)
    ['uo3', 'gemilang', '2026-10-25T21:00', 'lukisan buat bang kino udah jadi. tadinya mau kuning. jadinya biru. maaf bang 🎨', '', [], 275, E('turun')],
    ['uo4', 'ilham', '2026-10-25T18:00', 'hari ini bang kino ga galak sama sekali. itu yg bikin gue takut', '', [['juna', 'sama 😭']], 44, E('turun')],
    ['uo5', 'bagas', '2026-10-25T23:20', 'dia ga ngomong apa2. gue juga.', '', [], 15, E('turun')],
    // selesai (tutup telfon)
    ['uo6', 'juna', '2026-10-25T21:00', 'hari ini gue ga bercanda sama sekali. bang kino bilang gue aneh. ya emang', '', [['ilham', 'aneh beneran']], 76, E('waktu')],
    ['uo7', 'ilham', '2026-10-25T18:00', 'bang kino bales chat gue pake titik doang. normal. syukurlah', '', [], 39, E('waktu')],
    ['uo8', 'bagas', '2026-10-25T08:00', 'kopi dua. satu buat yg ga tidur semalem.', '', [], 18, E('waktu')],
  );
  more('bagas', [['date', '2026-10-25'], ['them', 'kris nanya anak2 udah pulang semua', '22.30', E('jeda')], ['me', 'udah', '22.41', E('jeda')], ['them', 'oke', '22.41', E('jeda')]]);
  more('juna', [['date', '2026-10-25'], ['them', 'bang, satpam bilang semalem lo turun ke lobi', '22.00', E('turun')], ['them', 'gue ga nanya apa2. cuma mau bilang gue di unit sebelah 🥺', '22.00', E('turun')], ['me', 'iya jun. makasih', '22.20', E('turun')]]);
  more('sadewa', [['date', '2026-10-25'], ['them', 'kalo butuh nonton film jelek, gue ada', '20.17', E('waktu')]]);
}

// ===== telfon 00.00: Kino konfrontasi. bosen/ga sayang bisa kejadian, tapi kenapa ga ngomong =====
{
  const i = MIDNIGHT_CALL.findIndex(l => l[0] === 'k' && (l[1] === 'makasih udah jujur.' || l[1] === 'jujur. akhirnya.'));
  if (i >= 0) MIDNIGHT_CALL.splice(i + 1, 0,
    ['k', 'kris. 8 taun. bosen itu wajar. udah ga sayang juga bisa kejadian. aku ngerti.'],
    ['k', 'tapi kamu ga pernah ngasih aku kesempatan buat tau.'],
    ['k', 'kamu nanya ke ilham di lift. kamu ngajak sadewa nonton. kamu jalan sama yuna. semua orang dapet kamu minggu ini. kecuali aku.'],
    ['t', '...'],
    ['k', 'kalo kamu bilang "aku bosen", aku bisa apa aja. aku bisa berubah. aku bisa ngelepasin. terserah.'],
    ['k', 'tapi kamu milih ngilang. terus aku tau dari foto orang lain.'],
    ['t', 'aku takut kalo aku ngomong, semuanya jadi beneran.'],
    ['k', 'udah beneran, kris. dari kamu milih diem.'],
  );
}

// ===== seminggu kemudian: tambahan per ending (jeda/turun/waktu masih tipis) =====
{
  const J = { epi: 'jeda' }, T = { epi: 'turun' }, W = { epi: 'waktu' }, M = { epi: 'maafin' };
  // safari [waktu, cari, domain, epi]
  SAFARI.push(
    ['2026-10-27T01:40', 'break dalam hubungan berapa lama yg normal', 'google.com', 'jeda'],
    ['2026-10-28T23:10', 'cara bilang mau kuliah ke pasangan yg lagi break', 'google.com', 'jeda'],
    ['2026-10-30T02:00', 'kangen tapi belum siap ngomong', 'google.com', 'jeda'],
    ['2026-10-26T02:10', 'cara berhenti ngecek last seen orang', 'google.com', 'turun'],
    ['2026-10-29T20:00', 'oxford part-time module 1 januari tempat tinggal', 'google.com', 'turun'],
    ['2026-10-31T01:00', 'musik buat tidur biar ga mikir', 'google.com', 'turun'],
    ['2026-10-26T03:20', 'kenapa abis putus malah bisa tidur nyenyak', 'google.com', 'waktu'],
    ['2026-10-28T22:40', 'heathrow ke oxford naik bus berapa lama', 'google.com', 'waktu'],
    ['2026-10-31T15:00', 'pasar malem seoul akhir oktober', 'google.com', 'waktu'],
    ['2026-10-27T19:30', 'resep pasta rumahan yg ga keasinan', 'google.com', 'maafin'],
  );
  // akun privat Kino
  [['2026-10-28T22:30', 'dia online jam 2 pagi. gue juga. kita sama2 ga ngetik apa2. break yg rajin', J],
   ['2026-10-27T08:10', 'bangun, refleks bikin kopi dua. yg satu gue minum juga. pahit dua kali', T],
   ['2026-10-30T21:10', 'dia bilang jaketnya udah dicuci. gue bales? ga. gue baca tiga kali? iya', T],
   ['2026-10-31T23:40', 'kucing2 masih tidur di tempat jaket dulu. jaketnya udah ga ada. mereka tetep tidur di situ', T],
   ['2026-10-27T07:30', 'bangun jam 7, ga ada notif "pagi". ternyata paginya tetep dateng', W],
   ['2026-10-29T23:30', 'reuni. ada yg nanya kris. gue bilang udah selesai. ternyata kalimatnya ga seberat yg gue kira', W],
  ].forEach(([ts, text, o]) => { ALT.push([ts, text, o]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', ts, text, '', [], 0, o]); });
  // Kris & temen di X
  X_POSTS.push(
    ['ew1', 'kris', '2026-10-30T00:40', 'nunggu itu ternyata kerjaan.', '', [], 37, J],
    ['ew2', 'kris', '2026-10-27T23:50', 'dicuci dua kali. baunya ga ilang.', '', [], 29, T],
    ['ew3', 'gemilang', '2026-10-30T20:00', 'lukisan minggu ini biru semua. ga sengaja. (sengaja) 🎨', '', [['surya', '💙']], 230, T],
    ['ew4', 'surya', '2026-10-30T15:00', 'bang kino ate 2 brownies today. this is not a drill 🥹🍫', '', [['juna', 'SAKSI MATA GUE']], 310, W],
  );
  // chat temen
  more('surya', [['date', '2026-10-27'], ['them', 'bang lunch bareng besok? just us, no questions 🥺', '12.10', J], ['me', 'oke', '12.30', J], ['them', 'yayy 🫶', '12.30', J],
    ['date', '2026-10-26'], ['them', 'bang I left kimbap depan unit lo 🥺', '19.00', T], ['me', 'makasih sur', '19.20', T]]);
  more('sadewa', [['date', '2026-10-28'], ['them', 'bang. bang kris nanya filmnya kemaren bagus ga', '21.00', J], ['them', 'gue bilang tanya sendiri', '21.00', J], ['me', 'bagus jawabannya', '21.15', J],
    ['date', '2026-10-27'], ['them', 'bang. film jelek jam 10. ikut', '20.30', T], ['me', 'ikut', '20.40', T], ['them', 'ok. popcorn bayar sendiri', '20.40', T]]);
  more('gemilang', [['date', '2026-10-30'], ['them', 'bang aku lukis lo sama kucing2. sebelah lo aku kosongin', '22.00', J], ['them', 'nanti kalo dia balik aku tambahin 💐', '22.00', J], ['me', 'jangan ditambahin dulu', '22.20', J], ['them', 'oke. dulu 🥺', '22.20', J]]);
  more('bagas', [['date', '2026-10-29'], ['them', 'lari pagi besok jam 6. ikut', '21.00', T], ['me', 'ga', '21.10', T], ['them', 'ok. lusa?', '21.10', T], ['me', '...ok', '21.30', T]]);
  more('juna', [['date', '2026-10-27'], ['them', 'bang mau gue ajarin main game biar ga bengong?', '22.00', W], ['me', 'lo kalah mulu', '22.10', W], ['them', 'IYA MAKANYA 😭 ajarin gue juga', '22.10', W]]);
  more('ilham', [['date', '2026-10-28'], ['them', 'bang. postmortem tadi lo galak lagi', '17.00', W], ['them', 'gue seneng', '17.00', W], ['me', 'ham.', '17.20', W]]);
  more('mama', [['date', '2026-10-27'], ['them', 'nak, mama kirim kimchi lagi ya', '10.00', T], ['me', 'iya ma. jangan banyak2', '10.30', T],
    ['date', '2026-10-26'], ['them', 'nak, kemarin mama liat kamu kurusan', '08.30', W], ['me', 'makan kok ma', '09.00', W], ['them', 'makan yg bener ya nak', '09.01', W]]);
}

// ===== narasi epilog: mereka belum selesai, sama diri sendiri & sama satu sama lain. hint balikan sesuai ending =====
{
  const ins = (k, anchor, lines, after = true) => { const e = ENDINGS[k].epi, i = e.findIndex(l => l.startsWith(anchor)); if (i < 0) return; e.splice(after ? i + 1 : i, 0, ...lines); };
  // terakhir: udah bareng. belum selesai = masih belajar, tiap hari
  ENDINGS.maafin.epi.push(
    'Di dalam, Mama menyendokkan jjigae ke mangkuk Kris lebih dulu. Kris melirik Kino. Kino pura-pura tidak lihat, lalu menggeser mangkuk kimchi ke dekat piring Kris tanpa bilang apa-apa. Delapan tahun, dan tangannya masih hafal.',
    '_Some habits never leave. They just wait to be noticed._',
    'Mereka baru sadar kalau mereka belum selesai. Belum selesai belajar ngomong. Belum selesai belajar ngeliat. Belum selesai sama diri sendiri, apalagi sama satu sama lain.',
    'Mungkin memang tidak perlu selesai.',
    '_Love isn\'t a finish line. It\'s something you choose again, every morning, with the same person._',
  );
  // jeda: hint paling kuat
  ins('jeda', '_Not yet. But soon._', [
    'Mereka berdua belum selesai. Kino dengan dirinya sendiri, dengan mimpi yang ia simpan sejak umur dua puluh tiga dan baru berani ia ambil sekarang. Kris dengan caranya mencintai yang ternyata selama ini terlalu sunyi untuk bisa didengar.',
    '_Sometimes two people have to grow apart, so they can grow back._',
    'Dan mereka belum selesai dengan satu sama lain. Itu satu-satunya hal yang mereka berdua tahu pasti malam itu. Di dua lantai yang berbeda. Di bawah langit yang sama.',
  ], false);
  // lobi: dua tahun, udah belajar ngomong, belum selesai
  ENDINGS.turun.epi.push(
    'Kris tidak mengejarnya. Ia hanya berdiri di dekat etalase brownies, tersenyum seperti orang bodoh, dan untuk pertama kalinya dalam dua tahun, ia tidak terburu-buru.',
    '_Some people come back, not because they forgot how to leave, but because they finally learned how to stay._',
    'Dua tahun cukup untuk belajar ngomong. Cukup untuk belajar sendirian. Ternyata belum cukup untuk selesai.',
    'Di foto bersama hari itu, Kino berdiri di ujung kiri, Kris di ujung kanan. Surya, yang memotret, sengaja memotongnya jadi dua. Lalu diam-diam menyimpan satu lagi. Yang belum dipotong.',
    '_Not every ending is the end._',
  );
  // selesai: paling samar, tetep "liat nanti"
  ins('waktu', 'Untuk pertama kalinya, tidak tahu terasa ringan.', [
    'Dua tahun lalu, ia kira patah hati itu seperti pintu yang ditutup. Ternyata lebih mirip jendela. Masih bisa dilihat. Masih bisa dibuka, kalau suatu hari ia mau.',
    '_Some habits never leave. Some chapters never really close. They just wait._',
    'Mungkin memang ada yang belum selesai. Dengan dirinya sendiri. Dengan kafe ini. Dengan seseorang yang sekarang juga paham arti "liat nanti".',
  ]);
}

// meme: ganti pake meme beneran (pinterest, tanpa orang). palet gemilang tetep (lukisan dia)
{
  const swap = (s) => typeof s === 'string' && /^img\/meme\/(?!palet)/.test(s) ? s.replace('img/meme/', 'img/meme2/') : s;
  X_POSTS.forEach(p => { p[4] = swap(p[4]); });
  CHATS.forEach(c => c.msgs.forEach(m => { const o = m[3]; if (o && o.img) o.img = swap(o.img); }));
}

// ===== temen2 kirim foto (bukan cuma meme): kucing, makanan, selfie =====
{
  const rc = (id) => RANDOM_CHATS.find(r => r.id === id);
  const h = rc('rc-hana'); if (h) { h.msgs = [['them', 'kino liat dehh'], ['them', '', { img: 'img/pic/kucing-cafe.jpg' }], ['them', 'kucing di cafe deket kampus mirip dori 😭']]; h.reply = ['mirip. tapi dori lebih galak', ['wkwkwk iya ini kalem bgt']]; h.d = ['2026-10-20', '2026-10-21', '2026-10-22', '2026-10-23']; } // jangan nongol abis foto kris tgl 24
  const b = rc('rc-bagas23'); if (b) b.msgs = [...b.msgs, ['them', '', { img: 'img/pic/tteokbokki-bagas.jpg' }]];
  more('grup', [
    ['date', '2026-10-22'], ['Ilham', 'gue sama bang kino otw. bang kino bawa minum', '18.55'], ['Ilham', '', '18.55', { img: 'img/ig/pair-ilham.jpg' }], ['Surya', 'cuteee 🥹 pintunya udah kebuka!!', '18.56'],
    ['date', '2026-10-23'], ['Gemilang', '', '12.25', { img: 'img/pic/lunch-gemilang.jpg' }], ['Gemilang', 'makan siang. warnanya bagus 🎨', '12.25'], ['Surya', 'looks yummy 🥹', '12.27'],
    ['Gemilang', 'juna ga balik2 dari unit gue. udah 3 jam. nonton tv gue', '21.40'], ['Gemilang', '', '21.40', { img: 'img/ig/juna-3.jpg' }], ['Juna', 'TV LO LEBIH GEDE 😭', '21.41'], ['Bagas', 'usir', '21.43'],
  ]);
  more('kru', [['date', '2026-10-24'], ['Juna', '', '15.07', { img: 'img/pic/kimbap-juna.jpg' }], ['Juna', 'nih bang. dimakan. jangan cuma diliatin', '15.07']]);
}

// ===== foto2 kecil dari temen biar tiap jam kerasa hidup =====
{
  const P = (f) => ({ img: 'img/pic/' + f + '.jpg' }), A = { epi: 'all' }, NJ = { noEnd: 'jeda' };
  more('grup', [
    ['date', '2026-10-22'], ['Surya', '', '15.45', P('banchan-surya')], ['Surya', 'dinner for 8 in progress 🥲 banchan dulu, doain', '15.45'],
    ['Bagas', '', '17.10', P('langit-bagas')], ['Juna', 'BANG BAGAS KIRIM FOTO LANGIT?? lagi galau?', '17.11'], ['Bagas', 'bagus.', '17.12'],
    ['date', '2026-10-23'], ['Surya', '', '07.40', P('croissant-surya')], ['Surya', 'morning bake 🥐 come grab before ilham eats all', '07.40'], ['Ilham', 'udah gue ambil dua', '07.42'],
    ['Sadewa', '', '16.40', P('kopi-sadewa')], ['Sadewa', 'kopi ke-3.', '16.40'],
    ['date', '2026-10-24'], ['Surya', '', '18.51', P('supayam-surya')],
    ['date', '2026-10-25'], ['Bagas', '', '08.30', P('gym-bagas')], ['Bagas', 'minggu. tetep.', '08.30'],
    ['Sadewa', '', '17.00', { ...P('nonton-sadewa'), ...NJ }], ['Sadewa', 'nonton sendiri. filmnya jelek.', '17.00', NJ], ['Juna', 'KOK GA NGAJAK', '17.02', NJ], ['Sadewa', 'filmnya jelek.', '17.03', NJ],
    ['date', '2026-10-30'], ['Bagas', '', '06.40', { ...P('lari-bagas'), ...A }], ['Bagas', '5k.', '06.40', A],
  ]);
  more('kru', [['date', '2026-10-23'], ['Ilham', '', '10.20', P('dashboard-ilham')], ['Ilham', 'bang ijo semua. gue boleh napas?', '10.20'], ['me', 'boleh. dikit', '10.25']]);
  more('bagas', [['date', '2026-10-24'], ['them', '', '21.15', P('bubur-bagas')]]);
  more('gemilang', [['date', '2026-10-24'], ['them', '', '21.12', P('bunga-gemilang')], ['them', 'udah gue beli. jangan protes 💐', '21.12']]);
  more('juna', [['date', '2026-10-26'], ['them', '', '08.31', { ...P('venti-juna'), ...A }]]);
  const g = X_POSTS.find(p => p[0] === 'uo3'); if (g) g[4] = 'img/pic/lukisan-biru.jpg';
}

// 22 Okt: kris cuti, seharian di unitnya (tower B) padahal bilang jarang di apart — Kino liat di Lacak
ALT.push(['2026-10-22T16:05', 'find my bilang dia di tower. satu lantai di atas gue. katanya minggu ini jarang di apart. mungkin hari ini wfh. atau ambil baju ganti. atau charger ketinggalan. pasti ada alasannya. iya pasti. fokus interview dulu kino']);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-22T16:05', ALT[ALT.length - 1][1], '', [], 0, {}]);
// 22 Okt: kris baru cabut ke seongsu malem (pas anak2 dinner di unit surya, dia masih di atas)
LOC_KRIS.forEach(e => { if (e[0] === '2026-10-22T17:10') e[0] = '2026-10-22T19:40'; if (e[0] === '2026-10-22T17:50') e[0] = '2026-10-22T20:20'; });
// 22 Okt malem: itaewon dulu (seongsu baru ketauan besoknya lewat nontonflix, terus tgl 24 dari foto aldrea)
PLACES.itaewon = { n: 'Itaewon-dong', a: 'Yongsan-gu, Seoul', x: 192, y: 138 };
LOC_KRIS.forEach(e => { if (e[0] === '2026-10-22T20:20') e[1] = 'itaewon'; });
{
  const t = 'find my bilang itaewon. "ada urusan" katanya. oh, urusannya di itaewon. kantornya kan di yeouido. gue tutup appnya. gue buka lagi. masih itaewon';
  ALT.forEach(a => { if (a[0] === '2026-10-22T21:00') a[1] = t; });
  X_POSTS.forEach(p => { if (p[1] === 'alt' && p[2] === '2026-10-22T21:00') p[3] = t; if (p[0] === 'y2') p[3] = 'malem ini seru ✨ itaewon at night hits different'; });
}

// janjian dinner tower B (kamis 22, jam 7, unit surya) — diajak dari tgl 20, kris ngegantung
more('grup', [
  ['date', '2026-10-20'], ['Surya', 'guys!! dinner kamis jam 7 di unit aku? I\'ll cook 🥹', '21.05'], ['Juna', 'IKUT', '21.05'], ['Gemilang', 'ikut 💐', '21.07'], ['Ilham', 'ikut', '21.08'], ['Sadewa', 'ok.', '21.10'], ['Bagas', 'ok', '21.12'], ['me', 'ikut', '21.20'], ['Surya', 'bang kris ikut kan? 🥺', '21.21'],
  ['date', '2026-10-21'], ['Kris', 'liat nanti ya', '08.30'], ['Surya', 'okayy 🥹 I\'ll save you a seat anyway', '08.32'],
]);

// interview 22 Okt 17.00–17.40: yg masuk pas HP ditelungkupin, detak jantung, abis itu overthinking
more('mina', [['date', '2026-10-22'], ['them', 'semangat. jangan grogi. ga usah bales', '17.02']]);
more('grup', [['date', '2026-10-22'], ['Juna', 'bang kino ke mana sih ga bales2 😭', '17.15']]);
HEALTH_NOTE.push(['2026-10-22T17:06', 'Detak jantung tinggi: 118 BPM saat tidak beraktivitas, pukul 17.06.'], ['2026-10-22T17:38', 'Detak jantung kembali normal: 72 BPM.']);
SAFARI.push(['2026-10-22T17:41', 'cara tau interview lancar dari muka profesor', 'google.com'], ['2026-10-22T17:42', 'profesor senyum di akhir interview artinya apa', 'google.com']);

// ===== tim IT: 2 anggota yg jarang ngomong (dimas DBA, teguh QA) =====
Object.assign(PEOPLE, { Dimas: { av: 'img/av-dimas.jpg' }, Teguh: { av: 'img/av-teguh.jpg' } }); // visual: Dimas = Dino, Teguh = Jungwoo
more('kru', [
  ['date', '2026-10-21'], ['Teguh', 'staging masih mati ya? gue ga bisa tes apa2', '10.15'],
  ['date', '2026-10-23'], ['Dimas', '☕ makasih kin', '09.47'], ['Teguh', 'makasih bang 🙏', '09.48'],
  ['date', '2026-10-24'], ['Dimas', 'gue cek dari sisi db. replica 1 bener lag 40 menit. jangan promote dulu', '09.52'],
  ['Teguh', '0042 ga pernah masuk ke gue btw. staging kan mati', '12.45'], ['Juna', 'TEGUH 😭', '12.46'],
  ['Dimas', 'pid 8812 udah gue kill.', '16.48'], ['Dimas', 'prod aman. gue pantau semalem', '19.12'],
  ['date', '2026-10-25'], ['Dimas', 'hbd kin.', '09.30'], ['Teguh', 'hbd bang 🎂', '09.31'],
  ['date', '2026-10-28'], ['Teguh', 'noted. 0043 lewat gue dulu ya jun', '16.25', { epi: 'all' }], ['Juna', 'SIAP 🫡', '16.26', { epi: 'all' }],
]);

// ===== grup angkatan (di-mute, ga pernah dibuka Kino): reuni 29 Okt, ucapan ultah, "kris mana" =====
Object.assign(PEOPLE, { Rina: { av: '' }, Bimo: { av: '' }, Dika: { av: '' }, Sasa: { av: '' }, Tegar: { av: '' }, Putri: { av: '' } });
CHATS.push({ id: 'angkatan', name: 'angkatan 16 🎓', group: true, members: 87, muted: true, msgs: [
  ['date', '2026-10-20'], ['Rina', 'GUYS reuni kamis 29 okt FIX ya!! isi polling dulu 🙏', '19.00'], ['Bimo', 'ikut', '19.02'], ['Putri', 'ikut!! 🥹', '19.05'], ['Rina', 'yg belum isi: kino, kris, dika, sasa, ... 👀', '19.30'],
  ['date', '2026-10-21'], ['Sasa', 'reuni bawa pasangan ya!! kino kris wajib 😆', '12.00'], ['Bimo', 'couple 8 taun se-angkatan cuma mereka doang anjir', '12.02'], ['Aldrea', 'udah2 jangan diledekin terus 😤', '12.15'],
  ['date', '2026-10-22'], ['Dika', 'yg mau patungan kado nikahan tegar transfer ke gue ya. 20rb aja', '09.00'], ['Tegar', 'makasih guys 🥹🙏', '09.20'],
  ['date', '2026-10-23'], ['Rina', 'polling reuni: 34 dateng, 12 belum jawab. KINO 👀', '21.00'], ['Putri', 'kino emg ga pernah buka grup ini kayaknya wkwk', '21.05'],
  ['date', '2026-10-25'], ['Putri', 'hbd kino!! 🎂', '00.05'], ['Bimo', 'hbd kin', '00.10'], ['Sasa', 'hbd!! kris mana nih ucapannya di grup 👀', '00.12'], ['Aldrea', 'sasa.', '00.20'], ['Rina', 'HBD KINO, jangan lupa isi polling reuni 🙏', '08.00'],
  ['date', '2026-10-29'], ['Rina', 'makasih yg udah dateng!! foto nyusul 🥹', '22.00', { epi: 'jeda' }], ['Bimo', 'KINO DATENG. sejarah', '22.05', { epi: 'jeda' }],
  ['Rina', 'makasih yg udah dateng!! foto nyusul 🥹', '22.00', { epi: 'waktu' }], ['Bimo', 'KINO DATENG. sejarah', '22.05', { epi: 'waktu' }], ['Putri', 'kino ketawa 2x tadi gue liat', '22.06', { epi: 'waktu' }],
] });

// kris baca chat Kino tapi ga langsung bales (angka "1" ilang duluan). key = jam chat Kino (YYYY-MM-DDTHH:MM) → kapan dibaca
const KRIS_READ = {
  '2026-11-01T23:00': '2026-11-01T23:01', '2026-11-01T23:01': '2026-11-01T23:01', '2026-11-01T23:02': '2026-11-01T23:02', '2026-11-01T23:03': '2026-11-01T23:03', '2026-11-01T23:04': '2026-11-01T23:04', '2026-11-01T23:05': '2026-11-01T23:05', // jeda: "dibaca hampir seketika"
};

// sadewa salah kirim (22 Okt 18.41): sempet keliatan ±3 detik sebelum dihapus. isinya buat orang lain (nanya mesti bilang ke kino apa ngga)
{ const g = CHATS.find(c => c.id === 'grup'); let day = ''; g.msgs.forEach(m => { if (m[0] === 'date') { day = m[1]; return; } if (day === '2026-10-22' && m[0] === 'Sadewa' && m[2] === '18.41' && m[3] && m[3].deleted) { m[1] = 'kemaren bang kris ngajak gue nonton, katanya rame2. ternyata berdua doang. gue mesti bilang ke bang kino ga sih'; m[3] = { retract: true }; } }); }

// 23 Okt (feedback tester): DM Ilham abis incident pertamanya + makan siang Kino ga tabrakan (mina, surya, nganter ke kris)
more('ilham', [
  ['date', '2026-10-23'],
  ['them', 'bang.', '10.32'], ['them', 'tadi gue ga keliatan panik kan', '10.32'], ['them', 'bukan gue nyari validasi ya. nanya doang', '10.33'],
  ['me', 'keliatan', '10.41'], ['me', 'tapi lo ga ngapa2in yg bego. itu yg penting', '10.41'], ['them', '...', '10.42'], ['them', 'itu pujian kan bang', '10.42'], ['me', 'kerja.', '10.43'],
]);
{
  const mina = RANDOM_CHATS.find(r => r.id === 'rc-mina23'); mina.hours = [9, 11]; mina.reply[1][1] = 'abis town hall ceritain ya';
  const sur = RANDOM_CHATS.find(r => r.id === 'rc-surya23'); sur.msgs[1][1] = 'I made too much kimbap. gue taro depan unit lo ya buat dinner'; sur.reply = ['makasih sur', ['yayy 🫶 no cucumber, I remember']];
}
// "angkat" dari Kino baru dikirim abis dia nelpon & ga diangkat (app.js: line[2].call → log "Panggilan dibatalkan" dulu)
TYPE_KRIS['2026-10-23'][2][2] = { call: true };
TYPE_KRIS['2026-10-24'][0][2] = { to: '14:05', call: true };
// SG tgl 23 malem biar ga sepi: juna numpang nonton di unit gemilang (nyambung ke grup 21.40 + nontonflix 21.10)
STORIES.push({ user: 'gemilangrp', img: 'img/ig/juna-3.jpg', ts: '2026-10-23T21:20', txt: 'juna numpang nonton musim dingin kedua di tv gue. katanya "drama buat orang yg lagi kangen" terus dia nangis. siapa yg kangen jun 😩' });
// telfon spam (asuransi, pinjol) dibuang: ga nyambung ke cerita
for (let i = RANDOM_CALLS.length - 1; i >= 0; i--) if (RANDOM_CALLS[i].who === 'Spam') RANDOM_CALLS.splice(i, 1);
// X priv abis telfon berantem: vibenya bengong ga percaya "bisa2nya kris", cuma bisa ketawa
{
  const RW3 = {
    '2026-10-24T15:15': 'dia ngechat mulu. "aku bisa jelasin". jelasin apa kris. fotonya HD. hahahaha ya ampun',
    '2026-10-24T15:30': 'dia bilang "aku capek". dia yg boong seminggu, dia yg capek. hahahaha anjir. oke kris. istirahat ya',
    '2026-10-24T16:46': 'lock nya ketemu. 9 jam nyari. ternyata ada yg diem2 nahan sesuatu dari pagi dan ga bilang siapa2. hahaha kayak kenal',
  };
  ALT.forEach(a => { if (RW3[a[0]]) a[1] = RW3[a[0]]; });
  X_POSTS.forEach(p => { if (p[1] === 'alt' && RW3[p[2]]) p[3] = RW3[p[2]]; });
}
// gemilang "bang kris kenapa sih" pindah ke dini hari tgl 24 (bukan abis Kino tumbang, suasananya ga cocok). jam segitu Kris lagi di lobi, Kino belum tidur
{
  const g = CHATS.find(c => c.id === 'gemilang'), MV = { '20.31': '01.12', '20.32': '01.13', '20.33': '01.14', '20.34': '01.15', '20.45': '02.04', '20.47': '02.06' };
  let day = ''; const moved = [];
  g.msgs = g.msgs.filter(m => { if (m[0] === 'date') { day = m[1]; return true; } if (day === '2026-10-24' && MV[m[2]] && !/lang\. santai|bunga/.test(m[1])) { moved.push([m[0], m[1], MV[m[2]], ...m.slice(3)]); return false; } return true; });
  more('gemilang', [['date', '2026-10-24'], ...moved]);
}
FIGHT_CALL.forEach(l => { if (l[1] === 'kemaren kamu ilang. ga bales. ga baca. aku telfon kamu delapan kali.') l[1] = 'kemaren kamu ilang. ga bales. ga baca. aku telfon, ga diangkat. telfon lagi, ga diangkat.'; });
// mama jam 18.52 tiketnya belum dibatalin (Kino masih belum sadar). "ga jadi" baru jam 21.02
{ const m = CHATS.find(c => c.id === 'mama'); let day = ''; m.msgs.forEach(x => { if (x[0] === 'date') { day = x[1]; return; } if (day === '2026-10-24' && x[2] === '18.52' && /tiket kereta/.test(x[1])) x[1] = 'mama udah beli tiket kereta ke seoul'; }); }
// kimbap surya balik ke lunch (taro depan unit pagi2, buat dibawa ngantor). dinner tgl 23 punya gemilang (telfon "mau gue anterin makan?")
{ const sur = RANDOM_CHATS.find(r => r.id === 'rc-surya23'); sur.msgs[1][1] = 'I made too much kimbap. gue taro depan unit lo ya, bawa buat lunch'; }
// jeda: Kino ga pulang ke rumah mama (anak2 tower dateng ke unit), jadi jawaban ke Aldrea beda
{
  const h = CHATS.find(c => c.id === 'hana'), i = h.msgs.findIndex(m => m[1] === 'mau pulang ke rumah mama. baik');
  h.msgs[i] = [h.msgs[i][0], h.msgs[i][1], h.msgs[i][2], { ...(h.msgs[i][3] || {}), noEnd: 'jeda' }];
  h.msgs.splice(i + 1, 0, ['me', 'anak2 tower mau dateng. baik', h.msgs[i][2], { end: 'jeda' }]);
}
// X priv 23: "yang bener aja lu kris" abis tau cuti, sama "siapa namanya" abis nontonflix (namanya baru ketauan besok dari foto aldrea)
[
  ['2026-10-23T13:40', 'cuti. CUTI. yang bener aja lu kris. 8 taun gue ke dokter gigi aja bilang lo'],
  ['2026-10-23T21:35', 'seongsu. jam 9 malem. nonton. pake akun GUE. sama siapa kris? siapa namanya? biar gue tau harus kesel sama siapa. canda. (ga canda)'],
].forEach(([ts, text]) => { ALT.push([ts, text]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', ts, text, '', [], 0, {}]); });
// 22 Okt 22.58: Kris udah ngabarin nginep 2x (chat pagi + telfon), jadi pertanyaan Kino jam 20.31 = ngetes. Kris jawabnya ketus
{ const k = CHATS.find(c => c.id === 'kris'); let day = ''; k.msgs.forEach(m => { if (m[0] === 'date') { day = m[1]; return; } if (day === '2026-10-22' && m[2] === '22.58' && m[1] === 'ga kayaknya, masih di kantor') m[1] = 'kan aku udah bilang, nginep kantor'; }); }
// foto "salah" (lapor-1, cowok-cewek di kafe Mapo) diganti: foto Kris di Itaewon ke-sync lewat Koleksi Bersama iCloud yg lupa dia matiin. besok pagi dia hapus
{ const i = PHOTOS.findIndex(p => p.img === 'img/lapor-1.jpg'); PHOTOS[i] = { img: 'img/gal/itaewon-1.jpg', ts: '2026-10-22T21:20', place: 'Itaewon · dari Kris (Koleksi Bersama)', shared: 'Kris', gone: '2026-10-23T07:00' }; }
// X priv: reaksi Kino ke foto Itaewon yg ke-sync dari Koleksi Bersama, terus ilang besok pagi
[
  ['2026-10-22T21:45', 'galeri gue tiba2 nambah 1 foto. dari kris. itaewon. meja buat dua. ceweknya nutupin muka pake menu. hahaha. kris. itu koleksi BERSAMA kita kris. bersama'],
  ['2026-10-23T07:05', 'fotonya ilang. dihapus jam 7 pagi. telat kris, udah gue liat. udah gue zoom juga'],
].forEach(([ts, text]) => { ALT.push([ts, text]); X_POSTS.push(['a' + (ALT.length - 1), 'alt', ts, text, '', [], 0, {}]); });
// foto profil X yuna: faceless, dari belakang lagi motoin makanan
X_USERS.yuna.avImg = 'img/av-yuna.jpg';
// nama lengkap Kris: Kristoforus Chandra ("Kris" dari Kino, "kristo" dari temen2).
// pengingat reservasi dinner ultah masuk ke HP Kino (Kris kebiasaan 8 taun ngisi nomor Kino), dateng pas Kino lagi di klinik
Object.assign(PEOPLE, { BistroDaun: { emoji: '🍷', bg: '#6b3e26' } });
CHATS.push({ id: 'bistro', name: 'Bistro Daun · Seongsu', person: 'BistroDaun', channel: true, msgs: [
  ['date', '2026-10-24'], ['them', '[Bistro Daun] Pengingat reservasi\nMinggu, 25 Okt 2026 · 19.00\n2 orang · meja dekat jendela\na.n. Kristoforus C.\n\nCatatan: "tolong siapin lilin kecil, dia ga suka yg rame"', '19.00'],
] });
{ const p = CHATS.find(c => c.id === 'paket'); p.msgs.forEach(m => { if (typeof m[1] === 'string') m[1] = m[1].replace('Atas nama: KRIS CHANDRA', 'Atas nama: KRISTOFORUS CHANDRA'); }); }
// telfon berantem: Kino ngasih Kris kesempatan ngomong ("kamu ngapain?"), terus buka kalo dia udah liat foto itaewon dari koleksi bersama tgl 22
{
  const at = (t) => { const i = FIGHT_CALL.findIndex(l => l[1] === t); if (i < 0) throw new Error('fight: ' + t); return i; };
  const a = at('aku belum mikir apa-apa, kris. aku nanya. itu kamu?');
  FIGHT_CALL.splice(a, 3,
    ['k', 'aku belum mikir apa-apa, kris. makanya aku tanya.'],
    ['k', 'kamu ngapain?'],
    ['t', 'makan siang. sama temen kantor'],
    ['k', 'makan siang.'],
  );
  const b = at('temen kantor. yang megang tangan kamu. di seongsu. jam makan siang.');
  FIGHT_CALL.splice(b + 1, 0,
    ['k', 'yang di itaewon tanggal 22 juga temen kantor?'],
    ['t', '...kamu—'],
    ['k', 'koleksi bersama, kris. kamu lupa matiin. fotonya masuk ke hp aku jam sembilan malem.'],
    ['k', 'aku liat. aku diem. besok paginya kamu hapus. aku tetep diem.'],
  );
}
// X priv 24 Okt 14.00: lega yg sakit, abis foto aldrea, sebelum nanya langsung ke Kris
ALT.push(['2026-10-24T14:00', 'anehnya gue lega. seminggu gue kira gue yg parno. ternyata ngga. selamat kino, lo bener 🙂']);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-24T14:00', ALT[ALT.length - 1][1], '', [], 0, {}]);
// telfon berantem: Kris bilang dia "cuma jalan aja" sama yuna (bosen, bukan niat selingkuh). Kino ngebalikin kata2nya
{
  const set = (from, to) => { const l = FIGHT_CALL.find(l => l[1] === from); if (!l) throw new Error('fight: ' + from); l[1] = to; };
  set('nggak, kino. dia yuna. temen kantor', 'nggak, kino. dia yuna. temen kantor. aku nganggep dia temen doang');
  set('temen kantor. yang megang tangan kamu. di seongsu. jam makan siang.', 'jalan aja. sambil megang tangan. di seongsu. jam makan siang.');
  set('yang di itaewon tanggal 22 juga temen kantor?', 'yang di itaewon tanggal 22 juga "jalan aja"?');
}
// X priv 23 Okt 08.20: intinya bohongnya (dia tau Kino paling benci dibohongin), bukan "bukan boongnya"
{ const T = '2026-10-23T08:20', txt = 'boongnya makin ga rapi. kayak udah ga peduli ketauan apa ngga. dan dia tau gue paling benci dibohongin. itu yg bikin gue ga bisa tidur';
  ALT.forEach(a => { if (a[0] === T) a[1] = txt; }); X_POSTS.forEach(p => { if (p[1] === 'alt' && p[2] === T) p[3] = txt; }); }
// telfon berantem: "surprise ultah" cuma pikiran AWAL minggu (tadinya), bukan yg masih dia harepin abis liat foto itaewon
{
  const set = (from, to) => { const l = FIGHT_CALL.find(l => l[1] === from); if (!l) throw new Error('fight: ' + from); l[1] = to; };
  set('dan aku diem. aku nunggu kamu yang ngomong. aku pikir... ck.', 'dan aku diem. aku nunggu kamu yang ngomong.');
  set('aku pikir kamu lagi nyiapin sesuatu buat aku.', 'tadinya aku kira kamu lagi nyiapin sesuatu buat aku.');
  set('bego banget kan aku.', 'bego banget ya aku.');
}
// urutan: tadinya kira surprise → bego ya → MAKANYA aku diem nunggu kamu ngomong → Kris "kenapa kamu ga nanya"
{
  const i = FIGHT_CALL.findIndex(l => l[1] === 'dan aku diem. aku nunggu kamu yang ngomong.'); const [d] = FIGHT_CALL.splice(i, 1);
  const j = FIGHT_CALL.findIndex(l => l[1] === 'bego banget ya aku.'); FIGHT_CALL.splice(j + 1, 0, ['k', 'makanya aku diem. aku nunggu kamu yang ngomong.']);
}
// Kino ngetawain diri sendiri (nyambung ke X priv "hahaha")
FIGHT_CALL.forEach(l => { if (l[1] === 'bego banget ya aku.') l[1] = 'haha. bego banget ya aku.'; });
// town hall tgl 23: dua post digabung (perut perih tetep ada, petunjuk sebelum tgl 24)
{
  const T1 = '2026-10-23T15:40', T2 = '2026-10-23T15:50', txt = 'town hall 2 jam ngomongin roadmap 2027. roadmap minggu ini aja gue ga punya. perut perih, kopi ketiga';
  ALT.forEach(a => { if (a[0] === T1) a[1] = txt; }); X_POSTS.forEach(p => { if (p[1] === 'alt' && p[2] === T1) p[3] = txt; });
  for (let i = X_POSTS.length - 1; i >= 0; i--) if (X_POSTS[i][1] === 'alt' && X_POSTS[i][2] === T2) X_POSTS.splice(i, 1);
} // ALT sengaja ga di-splice: id post 'a'+index dipake push2 sesudahnya
// X priv 23 Okt 22.10 (nontonflix ketiga) dibuang: udah ketutup 21.15 + 21.35
for (let i = X_POSTS.length - 1; i >= 0; i--) if (X_POSTS[i][1] === 'alt' && X_POSTS[i][2] === '2026-10-23T22:10') X_POSTS.splice(i, 1);
// X priv 24 Okt 22.20: reaksi Kino ke sms reservasi bistro daun (masuk jam 7 pas dia di klinik)
ALT.push(['2026-10-24T22:20', 'dia booking dinner buat ultah gue. masih pake nomor gue. kebiasaan 8 taun ga ilang ya. yg ilang orangnya doang']);
X_POSTS.push(['a' + (ALT.length - 1), 'alt', '2026-10-24T22:20', ALT[ALT.length - 1][1], '', [], 0, {}]);
// claude 23 Okt 02.16: ramyun → mie
KLOD.forEach(t => t.msgs.forEach(m => { if (m[0] === '2026-10-23T02:16') m[2] = m[2].replace('udah. ramyun', 'udah. mie').replace('Ramyun jam dua pagi', 'Mie jam dua pagi'); }));
// epilog: Kino yg jatuh duluan (charger kedua di perpus), Kris ga pernah tau. penutup beda tiap ending
{
  const p = (thn) => [
    `Kris selalu bilang dia yang jatuh duluan. ${thn} tahun lalu, di kafe kecil dekat kampus, dia yang bertanya duluan, dengan suara yang sedikit gemetar. "Mau nggak kamu— eh, boleh nggak kamu— boleh nggak aku jadi pacar kamu?" Tiga kali ganti kalimat dalam satu tarikan napas. Kino menjawab "terserah". Kris menganggap itu kemenangan.`,
    'Kris tidak pernah tahu soal charger kedua. Yang Kino bawa ke perpustakaan setiap hari, sebulan penuh sebelum hari itu, untuk anak sebelah yang selalu lupa membawa miliknya sendiri.',
  ];
  const put = (key, after, thn, close) => { const e = ENDINGS[key].epi, i = e.findIndex(l => String(l).startsWith(after)); if (i < 0) throw new Error('epi ' + key); e.splice(i + 1, 0, ...p(thn), close); };
  put('maafin', 'Kino tertawa. Tawa yang keluar begitu saja', 'Delapan', 'Malam itu, untuk pertama kalinya, Kino memberitahunya. Kris menangis lebih keras daripada waktu Kino bilang "terserah".');
  put('jeda', 'Kino menatap pesan itu lama.', 'Delapan', 'Suatu hari nanti, Kino akan memberitahunya. Tidak sekarang. Tapi nanti.');
  put('turun', 'Kris tidak mengejarnya.', 'Sepuluh', 'Kris tidak pernah tahu. Kino memutuskan, itu satu-satunya hal yang boleh tetap jadi miliknya.');
  put('waktu', 'Untuk pertama kalinya, tidak tahu terasa ringan.', 'Sepuluh', 'Kris tidak akan pernah tahu. Dan sore ini, untuk pertama kalinya, Kino menyesal tidak pernah bilang.');
}
// maafin: bosen bisa diurus bareng2, bohong yg ga ada obatnya
{
  const L = ENDINGS.maafin.lines, i = L.findIndex(l => l.startsWith('"Capek, bilang capek. Bosen, bilang bosen.')); if (i < 0) throw new Error('maafin bosen');
  L.splice(i + 2, 0, '"Bosen itu bisa diurus. Kita cari bareng-bareng. Masak yang belum pernah kita masak. Naik kereta ke kota yang belum pernah kita datengin. Jalan ke Sungai Han pagi-pagi, terserah." Ia mengusap matanya dengan punggung tangan, cepat, seperti tidak mau ketahuan. "Bosen ada obatnya, Kris."');
  const j = L.findIndex(l => l.startsWith('"Aku nggak jago ngomong. Kamu tahu itu dari awal.')); if (j < 0) throw new Error('maafin jago');
  L[j] = L[j].replace('"Yang aku nggak bisa itu dibohongin. Itu doang."', '"Bohong yang nggak ada obatnya. Aku nggak bisa dibohongin. Itu doang."');
}
// telfon 00.00: prinsip Kino (semua ending denger sebelum milih): bosen bisa diterima, boong ngga
{ const i = MIDNIGHT_CALL.findIndex(l => l[1] === 'udah beneran, kris. dari kamu milih diem.'); if (i < 0) throw new Error('mid diem'); MIDNIGHT_CALL.splice(i + 1, 0, ['k', 'bosen aku bisa terima. boong aku ga bisa.']); }
// jeda & turun: nerusin prinsip "bosen bisa, boong ngga" dari telfon 00.00 (cuma tambahan, baris lama tetep)
{
  const add = (key, starts, line) => { const L = ENDINGS[key].lines, i = L.findIndex(l => l.startsWith(starts)); if (i < 0) throw new Error(key); L.splice(i + 1, 0, line); };
  add('jeda', '"Kita break dulu," kata Kino.', '"Bosen bisa kita urus berdua. Tapi percaya..." Ia menelan ludah. "Itu aku harus bangun lagi sendiri dulu. Dan aku nggak bisa ngelakuinnya sambil liat kamu tiap hari di lift."');
  add('turun', '"Kamu bilang kamu ngerasa nggak disayang. Terus kamu bosen. Terus kamu pergi."', '"Bosen aku ngerti, Kris. Tapi kamu bohong. Tiap hari. Dan aku nggak tahu caranya percaya lagi tanpa ngecek Find My tiap jam."');
}
// waktu: nerusin prinsip "bosen bisa, boong ngga" (tambahan abis paragraf "sungguh-sungguh saja tidak cukup")
{ const L = ENDINGS.waktu.lines, i = L.findIndex(l => l.startsWith('Karena ternyata sungguh-sungguh saja tidak cukup.')); if (i < 0) throw new Error('waktu');
  L.splice(i + 1, 0, 'Bosannya bisa ia maafkan. Bohongnya juga, mungkin, suatu hari nanti. Tapi bukan malam ini. Malam ini ia hanya ingin menutup sesuatu dengan tangannya sendiri, sebelum ada orang lain yang menutupnya untuk dia.'); }
// X priv 24 Okt 23.45: abis baca surat. "mata gue keringetan" diganti, Kino ngebales "yang bego aku" di surat
{ const T = '2026-10-24T23:45', txt = 'dia nulis surat, kodenya hari jadi kita. jahat banget pake itu. gue baca tiga kali. dasar bego';
  ALT.forEach(a => { if (a[0] === T) a[1] = txt; }); X_POSTS.forEach(p => { if (p[1] === 'alt' && p[2] === T) p[3] = txt; }); }
// sebelum tgl 20: rutinitas Kris kerasa "gitu-gitu aja" abis launch, dan yuna udah mulai nongol pelan2 (like tgl 16)
X_POSTS.push(
  ['xk16', 'kris', '2026-10-14T23:10', 'launch kelar. terus apa.', '', [['juna', 'istirahat bang 😭']], 41],
  ['xk17', 'kris', '2026-10-19T08:10', 'senin lagi. kayak senin kemarin.', '', [['bagas', 'k']], 27],
  ['y0', 'yuna', '2026-10-16T18:40', 'orang product yg tiap meeting diem, ternyata jokesnya receh banget. ketawa sampe kopi tumpah 🤭', '', [], 33],
);
X_KRIS_LIKES.push(['y0', '2026-10-16T18:52']);
// telfon 00.00: pembukanya Kino datar & pendek (siap nusuk), baru panjang pas ngehujanin fakta
{
  const set = (from, to) => { const l = MIDNIGHT_CALL.find(l => l[0] === 'k' && l[1] === from); if (!l) throw new Error('mid: ' + from); l[1] = to; };
  set('makasih. kamu belum tidur?', 'hm.');
  set('udah. tiga kali.', 'udah.');
  set('dikit. udah minum obat kok', 'masih.');
  set('yaudah. ngomong aja, aku dengerin', 'ngomong.');
  set('oke. makasih udah bilang', 'oke.');
}
// maafin (Terakhir): Kino siap2 turun, wording dari author
{
  const L = ENDINGS.maafin.lines, i = L.findIndex(l => l.startsWith('Sandal. Hoodie abu-abu yang lengannya kepanjangan.')); if (i < 0 || L[i + 1] !== 'Ia keluar.') throw new Error('maafin pintu');
  L.splice(i, 2,
    'Ia meraih hoodie abu-abu yang lengannya kepanjangan, juga sekenanya memasukkan kakinya ke sandal. Ia berdiri di depan pintu lebih lama dari yang diperlukan, tangannya tetap di gagang. Telinganya mendengar kulkas yang berdengung pelan dari dapur. Di dalamnya masih ada bulgogi yang terbungkus dan tidak pernah dipanaskan.',
    'Kino menggelengkan kepalanya, menghela napas, lalu melangkah keluar.');
}
// safari 25 Okt 09.20 (abis offer oxford): beda tiap ending, yg putus ga nyebut "pacar" lagi
{
  const i = SAFARI.findIndex(x => x[0] === '2026-10-25T09:20'); SAFARI[i] = [SAFARI[i][0], SAFARI[i][1], SAFARI[i][2], 'maafin'];
  SAFARI.push(
    ['2026-10-25T09:20', 'lagi break terus keterima s2. kasih tau dia ga', 'google.com', 'jeda'],
    ['2026-10-25T09:20', 'baru putus terus keterima s2. sedih dulu apa seneng dulu', 'google.com', 'turun'],
    ['2026-10-25T09:20', 'keterima s2 di hari ultah, beberapa jam abis putus. ini kado apa ledekan', 'google.com', 'waktu'],
  );
}

// edit author dari endings.md (25 Okt): wording ending & epilog. dicek dulu teks lamanya, biar ga salah baris
{
  const ED = [["maafin","lines",21,"Sesak. Sesak sekali. Ia sudah menyiapkan kalimat-kalimat itu tiga kali, dan sekarang tidak ada satu pun yang tersisa.","Sesak. Sesak sekali. Ia sudah menyiapkan kalimat-kalimat itu tiga kali, namun sekarang tidak ada satu pun yang keluar."],
    ["maafin","lines",23,"_The silence. The distance. Eight years, sitting quietly between them._","_Eight years, sitting quietly between them._"],
    ["maafin","lines",24,"Di luar, angin bulan Oktober menggoyang pohon-pohon di taman depan. Enam derajat, kata aplikasi cuaca tadi. Kris pasti kedinginan duduk di dekat pintu itu berjam-jam. Kino tidak menanyakannya.","Di luar, angin bulan Oktober menggoyang pohon-pohon di taman depan. Enam derajat, kata aplikasi cuaca tadi. Kris pasti kedinginan duduk di dekat pintu itu berjam-jam. Namun Kino urung menanyakannya."],
    ["maafin","lines",26,"Kris duduk. Kino duduk juga, di ujung sofa yang lain. Ada jarak satu orang di antara mereka. Dulu, di sofa yang sama, mereka pernah ketiduran berdua sampai dibangunkan satpam.","Kris duduk. Kino duduk juga, di ujung sofa yang lain. Ada jarak satu orang di antara mereka. Dulu, di sofa yang sama, mereka pernah ketiduran sambil berpelukan hingga dibangunkan satpam."],
    ["maafin","lines",47,"Seminggu ini ia marah. Tapi di bawah marahnya ada sesuatu yang lebih tua dan lebih keras kepala: ia sayang orang ini. Sayang sekali. Perasaan itu tidak pernah ke mana-mana, bahkan di malam-malam ia menatap chat yang centang satu sampai jam tiga pagi.","Seminggu ini ia marah. Tapi di bawah marahnya ada sesuatu yang secara menyebalkan mengisi hatinya, ia sayang orang ini. Sayang sekali. Perasaan itu tidak pernah ke mana-mana, bahkan di malam-malam ia menatap chat yang tidak terbaca sampai jam tiga pagi."],
    ["maafin","lines",48,"Itu yang paling menakutkan. Bukan Yuna. Bukan kebohongannya. Tapi kenyataan bahwa setelah semuanya, ia masih ingin mengusap punggung orang yang menangis di sebelahnya ini.","Itu yang paling menakutkan. Bukan Yuna. Beberapa kebohongannya. Juga kenyataan bahwa setelah semuanya, ia masih ingin mengusap punggung orang yang menangis di sebelahnya ini."],
    ["maafin","lines",51,"\"I'm sorry,\" kata Kris akhirnya, dari balik telapak tangannya. \"Maaf. Aku bego. I was waiting for the words, Kino. And you were giving me everything, the whole time, and I didn't see it.\"","\"I'm sorry,\" kata Kris akhirnya, dari balik telapak tangannya. \"Maaf. Aku bego. I was waiting for the words, Kino. And you were giving me everything else, the whole time, and I didn't see it.\""],
    ["maafin","lines",53,"Kris tertawa. Basah, berantakan, tapi tertawa. Lalu menangis lagi.","Kris terisak. Basah, berantakan, tapi tertawa. Lalu menangis lagi."],
    ["maafin","lines",54,"Kino merogoh saku hoodie-nya. Tisu. Ia selalu membawa tisu sejak Kris menangis di bioskop delapan tahun lalu, waktu kencan pertama, karena film animasi tentang robot. Kris tidak tahu soal itu. Kris tidak tahu banyak hal.","Kino merogoh saku hoodie-nya. Meraih selembar tisu yang selalu ia bawa untuk pacar bodohnya ini. Ia selalu membawa tisu sejak Kris menangis di bioskop delapan tahun lalu, waktu kencan pertama, karena film animasi tentang robot. Kris tidak tahu soal itu. Kris tidak tahu banyak hal."],
    ["maafin","lines",67,"\"Ini yang terakhir,\" kata Kino. Pelan, tapi jelas. \"Sekali lagi kamu bohong, aku nggak nanya. Aku nggak marah. Aku nggak nunggu. Aku pergi.\"","\"Ini yang terakhir,\" kata Kino. Pelan, tapi jelas. \"Sekali lagi kamu bohong, aku nggak akan nanya. Aku nggak akan marah. Aku nggak akan nunggu. Aku langsung pergi.\""],
    ["maafin","lines",72,"\"Aku nggak jago ngomong. Kamu tahu itu dari awal. Tapi aku bisa belajar.\" Ia akhirnya menoleh, menatap Kris untuk pertama kalinya malam itu. \"Bohong yang nggak ada obatnya. Aku nggak bisa dibohongin. Itu doang.\"","\"Aku nggak jago ngomong. Kamu tahu itu dari awal. Tapi aku bisa belajar.\" Ia akhirnya menoleh, menatap Kris untuk pertama kalinya malam itu. \"Bohong yang nggak ada obatnya. Aku nggak suka dibohongin. Itu doang.\""],
    ["maafin","lines",94,"Pintu menutup. Lift naik satu lantai, membawa Kris pulang. Di lorong yang sepi, Kino bersandar ke dinding, dan untuk pertama kalinya malam itu, ia tersenyum.","Pintu menutup. Lift naik satu lantai, membawa Kris pulang. Di lorong yang sepi, Kino bersandar ke dinding. Dan untuk pertama kalinya malam itu, ia tersenyum."],
    ["jeda","lines",32,"Satpam di meja depan, Pak Wahyu, berdeham pelan. \"Mas Kris. Ada paket atas nama unit 4419 dari kemarin sore. Mas mau sekalian bawa?\"","Satpam di meja depan, Pak Wahyu, berdeham pelan. \"Mas Kris. Ada paket atas nama Kino unit 4419 dari kemarin sore. Mas mau sekalian bawa?\""],
    ["jeda","lines",35,"Bulan Agustus. Malam-malam, di sofa unit Kino, dengan Dori tidur di pangkuannya dan Kino sibuk mengomel soal deploy Juna di dapur. Ia memesan tiga kalung nama dari toko kecil di Seongsu, diam-diam, dengan ongkos kirim yang dijadwalkan pas seminggu sebelum ulang tahun Kino. Waktu itu ia masih orang yang ingat hal-hal seperti itu.","Bulan Agustus. Malam-malam, di sofa unit Kino, dengan Dori tidur di pangkuannya dan Kino sibuk mengomel soal deploy Juna di dapur. Ia memesan tiga kalung nama, diam-diam, dengan ongkos kirim yang dijadwalkan pas seminggu sebelum ulang tahun Kino. Waktu itu ia masih orang yang ingat hal-hal seperti itu."],
    ["jeda","epi",28,"Mereka berdua belum selesai. Kino dengan dirinya sendiri, dengan mimpi yang ia simpan sejak umur dua puluh tiga dan baru berani ia ambil sekarang. Kris dengan caranya mencintai yang ternyata selama ini terlalu sunyi untuk bisa didengar.","Mereka berdua belum selesai. Kino dengan caranya mencintai yang ternyata selama ini terlalu sunyi untuk bisa didengar. Dan Kris dengan egonya sendiri."],
    ["turun","lines",30,"\"Aku nggak benci kamu,\" kata Kino. Datar. Tenang. Terlalu tenang, seperti permukaan danau yang sudah membeku. \"Aku cuma udah nggak tahu kamu siapa.\"","\"Aku nggak bisa benci kamu,\" kata Kino. Datar. Tenang. Terlalu tenang, seperti permukaan danau yang sudah membeku. \"Aku cuma udah nggak tahu kamu siapa.\""],
    ["turun","lines",66,"Ia membuka kotak cheesecake itu dan memakannya sendirian, sepotong kecil demi sepotong kecil, dengan sendok plastik dari minimarket. Rasanya terlalu manis. Kino pasti akan bilang terlalu manis. Kino selalu bilang begitu, lalu menghabiskannya juga.","Ia membuka kotak cheesecake itu dan memakannya sendirian, sepotong kecil demi sepotong kecil, dengan sendok plastik dari minimarket. Rasanya terlalu manis. Kino pasti akan bilang terlalu manis. Kino selalu bilang begitu, namun tetap menghabiskannya juga."],
    ["turun","epi",2,"Kino datang terlambat. Ia baru mendarat dari Oxford pagi itu, wisuda sudah lewat, kopernya masih di unit. Rambutnya lebih pendek. Ia terlihat lebih tenang, entah karena tidur cukup atau karena dua tahun belajar hal-hal yang tidak ada di kurikulum.","Kino datang terlambat. Ia baru mendarat pagi itu, wisuda sudah lewat, kopernya masih di unit. Rambutnya lebih pendek. Ia terlihat lebih tenang, entah karena tidur cukup atau karena dua tahun belajar hal-hal yang tidak ada di kurikulum."],
    ["waktu","lines",39,"Untuk pertama kalinya, ia memahami sesuatu yang seharusnya ia pahami jauh lebih awal: kalau ia mengirim pesan sekarang, itu untuk dirinya sendiri. Supaya ia merasa lebih baik. Bukan untuk Kino.","Untuk pertama kalinya, ia memahami sesuatu yang seharusnya ia pahami jauh lebih awal, kalau ia mengirim pesan sekarang, itu untuk dirinya sendiri. Supaya ia merasa lebih baik. Bukan untuk Kino."]];
  ED.forEach(([k, f, i, from, to]) => { const L = ENDINGS[k][f]; if (L[i] !== from) throw new Error("endings.md " + k + " " + f + " " + i); L[i] = to; });
}
// maafin: Kino bukan marah karena Kris jalan sama orang lain, tapi karena dia ga tau apa-apa (disisipin abis ED biar nomor paragraf di atas ga geser)
{ const L = ENDINGS.maafin.lines, i = L.findIndex(t => t.startsWith('"Capek, bilang capek.'));
  if (i >= 0) L.splice(i + 1, 0, '"Kamu mau jalan sama yang lain pun nggak apa-apa. Makan, nonton, terserah. Asal bilang dulu." Kino menggeleng pelan. "Kamu pikir aku marah karena kamu nggak ngajak aku? Enggak. Aku marah karena tiba-tiba ditanya, \'ikut nonton nggak?\' \'ikut ramen nggak?\' Tapi aku nggak tahu apa-apa."'); }
// 8 taun: Kino ga tau caranya ga sayang, benci pun ga bisa
{ const L = ENDINGS.maafin.lines, i = L.findIndex(t => t.startsWith('"Nggak perlu pindah tim."')); if (i >= 0) L.splice(i + 1, 0, '"Aku nggak tahu caranya nggak sayang sama kamu," tambahnya, nyaris berbisik. "Marah aja aku capek. Benci apalagi. Delapan tahun, Kris. Aku udah kebiasaan."'); }
{ const L = ENDINGS.jeda.lines, i = L.findIndex(t => t === '"Bukan karena aku benci kamu."'); if (i >= 0) L[i] = '"Bukan karena aku benci kamu. Aku nggak bisa benci kamu. Delapan tahun, aku nggak tahu caranya nggak sayang sama kamu."'; }
{ const L = ENDINGS.turun.lines, i = L.findIndex(t => t.startsWith('Yang tidak ia katakan:')); if (i >= 0) L[i] += ' Delapan tahun membuatnya lupa caranya tidak sayang. Membenci pun ia tidak tahu caranya.'; }
{ const L = ENDINGS.waktu.lines, i = L.findIndex(t => t.startsWith('Ia sayang Kris. Ia tahu itu')); if (i >= 0) L[i] += ' Delapan tahun, dan ia tidak pernah belajar caranya tidak menyayangi orang itu. Membenci pun ia tidak bisa. Ia sudah terlalu terbiasa.'; }
// sama di ending lain: marahnya karena ga tau apa2, bukan karena ga diajak
{ const L = ENDINGS.jeda.lines, i = L.findIndex(t => t.startsWith('"Bosen bisa kita urus berdua.')); if (i >= 0) L.splice(i + 1, 0, '"Kamu jalan sama siapa aja juga aku nggak masalah," lanjutnya, lebih pelan. "Yang bikin sakit, aku tahunya dari orang lain. Ditanya \'ikut nonton nggak?\', \'ikut ramen nggak?\', dan aku nggak tahu apa-apa."'); }
{ const L = ENDINGS.turun.lines, i = L.findIndex(t => t.startsWith('"Bosen aku ngerti, Kris.')); if (i >= 0) L.splice(i + 1, 0, '"Kamu jalan sama orang lain, aku nggak peduli. Yang aku peduliin, aku ditanya \'ikut ramen nggak?\' sama orang lain, dan aku nggak tahu apa-apa. Delapan tahun, dan aku jadi orang terakhir yang tahu kamu di mana."'); }
{ const L = ENDINGS.waktu.lines, i = L.findIndex(t => t.startsWith('Karena ternyata sungguh-sungguh saja tidak cukup.')); if (i >= 0) L.splice(i + 1, 0, 'Ia tidak pernah marah karena Kris pergi dengan orang lain. Ia marah karena tahu dari orang yang bertanya "ikut nonton nggak?", "ikut ramen nggak?", sementara ia sendiri tidak tahu apa-apa. Seminggu ia jadi orang asing di hidup pacarnya sendiri.'); }
// komen/bales Kino ke postingan Kris: sesuai isi postingannya (bukan "norak wkwk" buat semua)
const KINO_POST_LINES = {
  'ig:kris.chandra@2026-10-13T21:00': [['selamat.', 'makasih 🥹'], ['tidur sana', 'iya iya, abis ini 😅']],
  'ig:kris.chandra@2026-10-03T12:00': [['jam 11 itu pagi?', 'buat kamu itu subuh 🥹']],
  'ig:kris.chandra@2026-10-25T13:00': [['lagunya bagus kan', 'kayak yg milih 🥹'], ['jangan upload mulu', 'dikit lagi 🥹']],
  'x:r1': [['kuenya gosong gara2 kamu', '🥹']],
  'x:r2': [['level 2 itu pemula', 'pemula yg nangis 🥲']],
  'x:xk16': [['tidur.', '...oke 😅']],
  'x:xk17': [['kerja.', 'iya iya']],
  'x:ue3': [['jangan ge-er', '🥹']],
};
// komen/bales Kino minggu ini (20–25 Okt), sesuai isi postingannya. yg ga ada di sini = Kino lagi ga mau bales (suka2 dia)
Object.assign(KINO_POST_LINES, {
  // IG komen
  'ig:gemilangrp@2026-10-19T18:00': [['selamat lang. jangan nangis', 'TELAT BANG 😭🖼️']],
  'ig:bagasbinn@2026-10-19T20:00': [['besok jalan ga lo', 'jalan. kayak pinguin']],
  'ig:junahann@2026-10-20T19:00': [['makanya patch dites dulu', 'IYA BANG 😭 ampun']],
  'ig:suryalix@2026-10-21T17:00': [['iya sur. minum', 'BANG KINO MINUM AIR 🥹💧']],
  'ig:junahann@2026-10-21T19:40': [['telatnya bener. gantengnya ngga', 'BANG 😭💔']],
  'ig:ilham.jeong@2026-10-22T08:10': [['kamis, ham', 'iya bang. tau. bercanda']],
  'ig:gemilangrp@2026-10-22T23:30': [['makasih makanannya', 'apapun buat bang kino 💐']],
  'ig:suryalix@2026-10-24T18:20': [['buat besok apaan', 'NOTHING BANG 🤐']],
  'ig:junahann@2026-10-24T23:10': [['tidur jun. besok aja jadi orang baiknya', 'BANG 😭 iya']],
  'ig:suryalix@2026-10-25T12:00': [['makasih sur', 'BANG KINO BILANG MAKASIH 🥹🫶']],
  // X bales
  'x:xa02': [['jangan ge-er', 'TETEP HARI TERBAIK 😭']],
  'x:j1': [['salah lo sendiri', 'IYA 😭']],
  'x:xi2': [['siapa yg galak', 'iya bang']],
  'x:xe02': [['kucing itu ilmu', 'iya bang 🙏']],
  'x:xu3': [['setuju', 'BANG KINO SETUJU 🥹🥹']],
  'x:xa05': [['gajian tgl 23', 'TIGA HARI LAGI 😭']],
  'x:u1': [['taro depan pintu', 'already did 🫶']],
  'x:xa06': [['hapus', 'GA MAU 😭 ini sejarah']],
  'x:xi3': [['makan banyak bagus', '...bukan karena laper']],
  'x:xa07': [['turun lift, nyebrang LG. jun.', 'IYA BANG GUE TAU SEKARANG 😭']],
  'x:xj5': [['camilannya abis sama lo', 'BUKAN GUE (gue) 😭']],
  'x:xa08': [['venti', 'NGELUNJAK 😭']],
  'x:b1': [['jam brp', '11. lobi']],
  'x:j2': [['lebay', 'BANG KINO BALES 😭😭 ALHAMDULILLAH']],
  'x:xg4': [['iya lang. makan', '🥺💐']],
  'x:xb05': [['makasih sur', '🥹🫶']],
  'x:xa09': [['napas aja dari tadi', 'BANG 😭']],
  'x:xf04': [['makasih bin', 'hm']],
  'x:xe05': [['iya ham', '🥺']],
  'x:xu5': [['jangan nangis', 'too late bang 🥲']],
  'x:xb4': [['12 jam ga mungkin', 'coba']],
  'x:xa10': [['makasih jun', 'BANG 😭🎂']],
  'x:xb06': [['bunny apaan', 'YOU 🐰🫶']],
  'x:xc05': [['jangan kegedean', 'udah terlanjur 😩💐']],
  'x:xd04': [['ok.', 'ok.']],
  'x:xf05': [['10k apaan', 'lari. bukan duit']],
  'x:xj6': [['progress 0', '😭 MASIH ADA WAKTU']],
  // bales story (masuk DM IG)
  'st:kris.chandra@2026-10-20T21:00': [['ramen sama siapa', ['sama anak kantor 😅']]],
  'st:junahann@2026-10-20T08:50': [['ini senin', ['IYA BANG 😭 tapi rasanya kamis']]],
  'st:gemilangrp@2026-10-20T14:00': [['ditanya', ['JANGAN BANG 😩']]],
  'st:suryalix@2026-10-20T16:30': [['mau', ['taro depan pintu bang 🫶']]],
  'st:junahann@2026-10-20T22:40': [['besok. sumpah?', ['SUMPAH BANG 🙏']]],
  'st:sadewaa.k@2026-10-20T23:30': [['tidur dew', ['lo juga']]],
  'st:ilham.jeong@2026-10-21T10:20': [['restart', ['udah bang. nyala. how']]],
  'st:junahann@2026-10-21T12:40': [['makan jun', ['abis ini bang 🙏']]],
  'st:gemilangrp@2026-10-21T18:10': [['bagus', ['🥹💐 makasih bang']]],
  'st:suryalix@2026-10-22T11:00': [['jamurnya banyak', ['noted!! 🍄🫡']]],
  'st:junahann@2026-10-22T19:20': [['hapus', ['GA MAU 😭']]],
  'st:ilham.jeong@2026-10-22T21:30': [['good job ham', ['…makasih bang']]],
  'st:suryalix@2026-10-23T13:00': [['iya sur', ['🫶']]],
  'st:junahann@2026-10-23T15:30': [['gue liat lo', ['BANG 😭 bukan gue']]],
  'st:sadewaa.k@2026-10-23T16:20': [['sama', ['ok.']]],
  'st:gemilangrp@2026-10-23T21:20': [['usir', ['udah nyoba 😩']]],
  'st:junahann@2026-10-24T12:55': [['nangisnya nanti', ['IYA BANG 😭']]],
  'st:suryalix@2026-10-24T17:00': [['besok apaan', ['NOTHING BANG 🤐']]],
  'st:bagasbinn@2026-10-24T22:00': [['udah gue makan', ['bagus']]],
  'st:suryalix@2026-10-25T00:01': [['makasih sur', ['🥹🫶']]],
  'st:gemilangrp@2026-10-25T00:02': [['galak?', ['GALAK & BAIK 😩💐']]],
  'st:junahann@2026-10-25T00:03': [['udah dimaafin', ['BANG 😭😭']]],
  'st:bagasbinn@2026-10-25T00:05': [['iya bin', ['hm']]],
  'st:ilham.jeong@2026-10-25T00:10': [['makasih ham', ['🦊']]],
  'st:sadewaa.k@2026-10-25T08:00': [['ok.', ['ok.']]],
});
// postingan yg udah ada komen/bales Kino di naskah: Kino ga komen lagi
['ig:kris.chandra@2026-10-13T21:00', 'ig:kris.chandra@2026-10-03T12:00', 'ig:kris.chandra@2026-10-25T13:00', 'x:r1', 'x:r2', 'ig:gemilangrp@2026-10-19T18:00', 'ig:junahann@2026-10-21T19:40', 'ig:suryalix@2026-10-25T12:00', 'x:xu3', 'x:u1'].forEach(k => delete KINO_POST_LINES[k]);
// Kino upload foto Kris (IG/X): caption & reaksi temen sesuai fase. tense/hurt/jeda/putus pake caption galau yg lama (SHARE_CAPS)
const POST_KRIS = {
  normal: { cap: { igpost: ['norak.', 'yg nambah 3x', '8 taun. masih norak'], igstory: ['🙂', 'nemu', '.'], xmain: ['norak wkwk', 'yg ini lagi ngambek'] },
    igpost: [['suryalix', '🥹🫶'], ['junahann', 'BANG 😭 couple goals'], ['kris.chandra', 'kamu upload aku?? 🥹']], xmain: [['juna', 'BANG 😭'], ['kris', '🥹']] },
  tense: { igpost: [['suryalix', '🫶'], ['junahann', 'bang… 🥺'], ['sadewaa.k', '...']], xmain: [['juna', 'bang...'], ['surya', '🫶']] },
  hurt: { igpost: [['suryalix', 'bang 🥺 call me'], ['bagasbinn', 'kino. telfon gue'], ['junahann', 'bang lo gapapa? 🥺']], xmain: [['juna', 'bang lo gapapa 🥺'], ['bagas', 'telfon gue']] },
  maafin: { cap: { igpost: ['norak.', 'yg nyetir hari ini', 'masih yg ini'], igstory: ['🙂', '.', 'berisik'], xmain: ['norak wkwk', 'iya ini lagi'] },
    igpost: [['junahann', 'BALIKAN?? 😭😭'], ['suryalix', '🥹🫶 finally'], ['kris.chandra', '🥹']], xmain: [['juna', 'BANG 😭😭'], ['kris', '🥹']] },
  jeda: { igpost: [['suryalix', '🥺'], ['sadewaa.k', '...']], xmain: [['surya', '🥺']] },
  putus: { igpost: [['junahann', 'bang… 🥺'], ['bagasbinn', 'hapus kalo nyesel'], ['suryalix', '🫶']], xmain: [['juna', 'bang 🥺'], ['bagas', 'hapus kalo nyesel']] },
};
// pool umum (postingan sebelum tgl 20): lebih banyak variasi, dipilih per postingan (bukan "kerja jun" mulu)
[[IG_KINO_LINES, { junahann: [['jun.', 'BANG 😭'], ['hapus', 'GA MAU 😭']], suryalix: [['lucu', 'BANG KINO BILANG LUCU 🥹']], gemilangrp: [['bagus lang', '🥹💐']], 'sadewaa.k': [['ok.', 'ok.']], 'ilham.jeong': [['🦊', '🦊']], bagasbinn: [['gila lo', 'biasa']] }],
 [X_KINO_LINES, { juna: [['jun.', 'BANG 😭'], ['tidur', 'iya bang 🙏'], ['ga lucu', 'tapi lo baca 😭']], surya: [['iya sur', '🫶'], ['jangan begadang', 'okay bang 🥺'], ['bagus', 'BANG KINO BILANG BAGUS 🥹']], gemilang: [['iya lang', '💐'], ['bagus', '🥹🎨']], sadewa: [['ok.', 'ok.'], ['buku apa', 'nanti gue pinjemin']], ilham: [['iya ham', '🙄'], ['good', '...makasih bang']], bagas: [['gila', 'biasa'], ['jangan kecapean', 'hm']] }],
].forEach(([P, add]) => Object.entries(add).forEach(([u, l]) => P[u] = [...(P[u] || []), ...l]));
// telfon Kino ke temen: obrolan "hari ini" yg nyebut kejadian cuma boleh setelah kejadiannya (sebelumnya = obrolan biasa). biar ga spoiler
const CALL_DAY_WIN = {
  Gemilang: { [D20]: { from: '18:30' } },
  Sadewa: { [D22]: { from: '18:50' }, [D24]: { from: '08:02', to: '17:29' } },
  Bagas: { [D23]: { from: '13:11' } },
  Juna: { [D23]: { from: '20:06' }, [D24]: { from: '08:02', to: '17:28' } },
  Surya: { [D24]: { from: '08:02', to: '17:29' } },
  Mina: { [D24]: { from: '08:06', to: '17:29' } },
  Ilham: { [D22]: { from: '00:00' }, [D24]: { from: '11:40', to: '16:44' } },
  Aldrea: { [D24]: { from: '13:52' } },
};
// juna tgl 23: abis bagas bongkar di grup jam 20.05 (dulu "lo tadi chat soal kris", padahal juna ga chat soal kris hari itu)
CALL_DAY.Juna[D23] = [['t', 'bang…'], ['k', 'yg di grup tadi'], ['t', 'gue ga tau bang sumpah 😶 gue kira beneran lembur'], ['k', 'iya. bukan salah lo'], ['t', 'bang lo oke? 🥺'], ['k', 'oke kok']];
// telfon Bagas: jangan ngulang yg udah ada di chat (jaket tgl 21, cuti tgl 23)
CALL_DAY.Bagas[D21] = [['t', 'apa'], ['k', 'gym lo buka jam brp'], ['t', '5. ikut?'], ['k', 'ga.'], ['t', 'k']];
CALL_DAY.Bagas[D23] = [['t', 'hm'], ['k', 'bin'], ['t', '...'], ['k', 'ga jadi'], ['t', 'gue ga ke mana2. telfon aja kalo butuh']]; // Kino nelpon tapi ga sanggup ngomong
// bagas tgl 23: nyemangatinnya disimpen buat deeptalk 23.20, telfon siang cukup fakta & "k"
CALL_LINES.Bagas.find(v => v.from === '2026-10-23T13:16').lines = [['t', 'soal kris'], ['k', '...'], ['t', 'gue ga tau dia ke mana. tapi gue tau dia ga sibuk'], ['k', 'iya.'], ['t', 'udah. itu aja']];
CALL_DAY.Bagas[D23] = [['t', 'hm'], ['k', 'bin'], ['t', '...'], ['k', 'ga jadi'], ['t', 'k']];
// ghost typing Kris cuma sebelum jam 9 tgl 23: abis itu pesan Kino ga kebaca ("1"), jadi Kris ga mungkin keliatan ngetik
GHOST_TYPING[1] = '2026-10-23T09:00';

// mama tgl 23: telfon mimpi (11–15) duluan, baru chat soal foto kuliah (abis jam 3)
{ const r = RANDOM_CHATS.find(x => x.id === 'rc-mama2'); if (r) r.hours = [15, 20]; }
// nama lengkap di profil IG (pemain nanya kenapa bagas dipanggil "bin": Bintoro, handle bagasbinn)
Object.entries({ 'kinoo.lee': 'Kino Mahardika Lee', 'kris.chandra': 'Kristoforus Chandra', gemilangrp: 'Gemilang Rahadian Putra', 'sadewaa.k': 'Sadewa Kusuma', suryalix: 'Surya Felix Lie ☀️', junahann: 'Juna Pratama 🐿️', bagasbinn: 'Bagas Bintoro', 'ilham.jeong': 'Ilham Januar 🦊' }).forEach(([u, n]) => { if (PROFILES[u]) PROFILES[u].name = n; });
// bagas: Bintara (bukan Bintoro)
PROFILES.bagasbinn.name = 'Bagas Bintara';
{ const b = CHATS.find(c => c.id === 'bank'); b.msgs.forEach(m => { if (typeof m[1] === 'string') m[1] = m[1].replace('BAGAS BINTORO', 'BAGAS BINTARA'); }); }
// ending putus: mereka ga berhenti cinta, cuma berhenti saling ngeliat / lupa caranya nunjukin
{
  const add = (key, starts, line) => { const L = ENDINGS[key].lines, i = L.findIndex(l => l.startsWith(starts)); if (i < 0) throw new Error(key); L.splice(i + 1, 0, line); };
  add('waktu', 'Bosannya bisa ia maafkan.', 'Mereka tidak berhenti mencintai. Mereka cuma berhenti saling melihat. Dan ternyata, untuk dua orang yang tidak pandai bicara, itu sama saja.');
  add('turun', 'Justru karena itu ia harus pergi sekarang.', 'Orang bilang hubungan selesai karena salah satu berhenti cinta. Mereka tidak. Mereka cuma lupa, pelan-pelan, caranya menunjukkan.');
}
// review ending (24 Okt): biar nyambung sama isi HP
{
  const set = (key, f, starts, to) => { const L = ENDINGS[key][f], i = L.findIndex(l => l.startsWith(starts)); if (i < 0) throw new Error('rev ' + key + ' ' + starts); L[i] = typeof to === 'function' ? to(L[i]) : to; };
  // jeda: bagas dateng (cuci piring di grup, "6 orang" di X gemilang), ilham juga
  set('jeda', 'lines', 'Bagas tidak datang.', 'Ilham datang bareng Bagas. Ilham bilang ia cuma numpang lewat, lalu tidak pulang-pulang sampai Doongie tidur di dalam tasnya. Bagas tidak banyak bicara. Ia mencuci semua piring tanpa disuruh, lalu pulang tanpa pamit.');
  set('jeda', 'lines', 'Bulan Agustus.', l => l.replace('dijadwalkan pas seminggu sebelum ulang tahun Kino', 'dijadwalkan sampai pas sebelum ulang tahun Kino'));
  set('jeda', 'epi', 'Ia menatap tulisan "Dibaca"', 'Ia menatap angka 1 di sebelah pesannya yang hilang hampir seketika. Lalu mengetik lagi, sebelum keberaniannya habis.');
  // turun: "I'm home now" itu Kris
  set('turun', 'lines', '"I\'m home now," katanya pelan.', '"I\'m home now," kata Kris pelan. "Aku pulang sekarang."');
  // S2 part-time (bolak-balik), bukan tinggal 2 taun di luar
  set('turun', 'epi', 'Kino datang terlambat. Ia baru mendarat pagi itu, wisuda sudah lewat,', l => l.replace('Ia baru mendarat pagi itu, wisuda sudah lewat,', 'Ia baru mendarat pagi itu, pulang dari wisudanya di Oxford,'));
  set('waktu', 'epi', 'Kino datang hari Selasa sore, sendirian. Ia baru pulang dua minggu,', l => l.replace('Ia baru pulang dua minggu,', 'Wisudanya baru dua minggu lalu,'));
  // maafin: kalimat yg patah
  set('maafin', 'lines', 'Itu yang paling menakutkan. Bukan Yuna.', 'Bukan Yuna. Bohongnya, iya. Tapi yang paling menakutkan justru kenyataan bahwa setelah semuanya, ia masih ingin mengusap punggung orang yang menangis di sebelahnya ini.');
}
// grup tgl 25: kabar S2 yg di narasi jeda & turun ("meledak", juna 14 pesan/tanda seru, bagas "K. Bangga.")
{
  const J = { end: 'jeda' }, T = { end: 'turun' };
  more('grup', [['date', '2026-10-25'],
    ['me', 'keterima s2.', '09.12', J], ['Juna', 'HAH', '09.12', J], ['Juna', 'BANG', '09.12', J], ['Juna', 'S2??', '09.12', J], ['Juna', 'DI LUAR NEGERI??', '09.13', J], ['Juna', 'DI HARI ULTAH??', '09.13', J], ['Juna', 'BANG KINO KOK GA BILANG2 😭😭😭', '09.13', J], ['Surya', '🐰😭😭😭', '09.13', J], ['Gemilang', 'BANGGGG 😭💐', '09.14', J], ['Ilham', 'pantes kemaren lo jago banget handle prod', '09.14', J], ['Sadewa', 'selamat.', '09.15', J], ['Bagas', 'K. Bangga.', '09.16', J],
    ['me', 'keterima s2.', '09.12', T], ['Juna', '!!!!!!!!!!!!!!', '09.12', T], ['Surya', 'bang I\'m calling you rn 😭', '09.13', T], ['Gemilang', 'BANG 😭💐', '09.13', T], ['Ilham', 'selamat bang 🦊', '09.14', T], ['Bagas', 'k. bangga', '09.15', T],
  ]);
}
// X priv Kino kalo dia sempet baca pesan Kris sebelum ditarik (cuma muncul buat yg liat)
const RETRACT_ALT = {
  'kino aku—': 'jam 2 pagi dia ngetik "kino aku—" terus ditarik. aku apa kris. aku apa',
  'aku kangen': 'dia ngetik "aku kangen" jam 4 pagi terus ditarik. kangen tapi ga bales. maksudnya apa sih kris',
  'aku di bawah': '"aku di bawah" terus diapus. di bawah ngapain. naik engga, pergi engga',
  'semangat hari ini': '"semangat hari ini" terus ditarik. afk tapi ngechat. ngechat tapi ditarik. lo maunya apa',
};

// kartu ending: "kamu main sabar/dingin" + satu frasa yg nyambung ke kalimat penutup tiap ending (ENDING_TAIL)
const TONE_LABEL = {
  maafin: { sabar: 'kino milih pulang', dingin: 'tapi tangannya ga dilepas' },
  jeda: { sabar: 'kontaknya jadi "nanti."', dingin: 'diarsipin, bukan dihapus' },
  turun: { sabar: 'kuenya dimakan sendirian', dingin: 'kuenya buat surya' },
  waktu: { sabar: 'makasih udah jujur', dingin: 'akhirnya tidur nyenyak' },
};
// 2 pilihan "dingin" ke Kris sempet keikut dihangatin (aturan "ke Kris tetep paling hangat"), jadi kebaca sabar. balikin biar skornya adil
REPLIES.forEach(r => { if (r.id === 'kx1') r.opts[1].me = ['oke.']; if (r.id === 'kx3') r.opts[1].me = ['oh. oke.']; });

// HP Kino service worker — naikin VERSION tiap file inti berubah
const VERSION = 'hpkino-v291';
const SHELL = ['index.html', 'style.css', 'i18n/core.js', 'app.js', 'data.js', 'manifest.webmanifest', 'icons/icon-192.png'];
const MEDIA = 'hpkino-media'; // foto/video/suara: ga ikut kehapus tiap deploy (nama file baru = file baru)
const CDN = 'https://hp-kino-media.hp-kino.workers.dev'; // media diambil dari Cloudflare (ga ngabisin kuota Vercel). kosongin = balik ke Vercel
// file inti juga diambil dari CDN (folder per versi, diupload bareng tiap deploy lewat tools/deploy.sh), biar update ga ngabisin kuota Vercel. gagal → Vercel
const fromCdn = (f) => !CDN ? Promise.reject() : fetch(/\.png$/.test(f) ? `${CDN}/${f}` : `${CDN}/${VERSION}/${f}`, { mode: 'cors', cache: 'no-store' })
  .then(r => r.ok ? r.blob().then(b => new Response(b, { headers: { 'Content-Type': r.headers.get('Content-Type') || '' } })) : Promise.reject());
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => Promise.all(SHELL.map(f => fromCdn(f).catch(() => fetch(new Request(f, { cache: 'reload' }))).then(r => { if (!r.ok) throw new Error(f); return c.put(f, r); })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION && k !== MEDIA).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || u.pathname.startsWith('/_vercel/') || u.pathname.startsWith('/api/')) return;
  if (e.request.mode === 'navigate' && !/^\/(index\.html)?$/.test(u.pathname)) return; // halaman lain (storyboard, tools) langsung ke server, jangan dikasih HP
  const media = /\.(jpg|jpeg|png|mp4|mp3|wav|webp)$/.test(u.pathname);
  if (media) { // cache-first, sekali download aja. ambilnya dari CDN (biar ga ngabisin kuota Vercel), gagal → Vercel
    const net = () => (CDN ? fetch(CDN + u.pathname, { mode: 'cors' }).then(r => r.ok ? r : Promise.reject()) : Promise.reject()).catch(() => fetch(e.request));
    e.respondWith(caches.open(MEDIA).then(ca => ca.match(e.request, { ignoreSearch: true }).then(r => r || net().then(res => { if (res.ok && res.status === 200) ca.put(e.request, res.clone()); return res; }))));
    return;
  }
  // kode & halaman: cache-first dari versi sekarang. versi baru dateng lewat sw.js baru (VERSION dinaikin tiap deploy)
  const isPage = e.request.mode === 'navigate';
  e.respondWith(caches.open(VERSION).then(ca => (isPage ? ca.match('index.html') : ca.match(e.request, { ignoreSearch: true })).then(r => r || fetch(e.request).then(res => { if (res.ok && !isPage) ca.put(e.request, res.clone()); return res; }).catch(() => ca.match('index.html')))));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow('./')));
});

// push dari server (app ketutup). Kalau app lagi kebuka & keliatan, gak usah dobel.
self.addEventListener('push', e => {
  let d = {}; try { d = e.data.json(); } catch (_) { d = { title: 'HP Kino', body: e.data && e.data.text() }; }
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    if (cs.some(c => c.visibilityState === 'visible')) return;
    return self.registration.showNotification(d.title || 'HP Kino', { body: d.body || '', tag: d.tag, renotify: true, icon: 'icons/icon-192.png', badge: 'icons/icon-192.png' });
  }));
});

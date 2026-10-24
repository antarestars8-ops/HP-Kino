// dipake buat ngetes: jalanin di console abis halaman kebuka pake ?now=...
// ngumpulin pesan yg keliatan sejak checkpoint sebelumnya + error, terus jawab pilihan yg nunggu (opsi pertama)
window.playcheck = async function () {
  const errs = [];
  window.addEventListener('error', e => errs.push(String(e.message)));
  await new Promise(r => setTimeout(r, 1200));
  S.unlocked = true; if (!layersEl.querySelector('.home')) home();
  await new Promise(r => setTimeout(r, 2500));
  const last = +(localStorage.getItem('pc:last') || 0), nowT = now().getTime();
  const out = [];
  CHATS.forEach(c => msgsOnly(c).forEach(m => { const t = m.ts.getTime(); if (t > last && t <= nowT) out.push([t, c.name, m.who === 'me' ? 'KINO' : (m.who === 'them' ? c.person : m.who), m.o.img ? '[foto]' : m.o.call ? '[telpon]' : m.text]); }));
  out.sort((a, b) => a[0] - b[0]);
  const calls = [...layersEl.querySelectorAll('.call')].map(c => c.querySelector('h2').textContent + ' | ' + c.querySelector('.cs').textContent);
  const pend = CHATS.map(c => { const r = pendingReply(c); return r ? c.name + ': ' + r.opts.map(o => o.me[0]).join(' / ') : null; }).filter(Boolean);
  localStorage.setItem('pc:last', String(nowT));
  return { now: now().toString().slice(0, 21), calls, pend, errs, msgs: out.map(([t, ch, w, x]) => new Date(t).toTimeString().slice(0, 5) + ' [' + ch + '] ' + w + ': ' + String(x).slice(0, 110)) };
};

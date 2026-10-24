// ===== HP Kino — bahasa =====
// Teks asli (Indonesia) tetap jadi kunci; tiap teks yg nongol di layar diganti terjemahannya kalau ada.
// Kamus per bahasa ada di i18n/<lang>.js, cuma dimuat kalau bahasa itu yg dipilih.
const LANGS = [['id', '🇮🇩', 'Indonesia'], ['en', '🇬🇧', 'English'], ['ko', '🇰🇷', '한국어']];
const LANG = (() => { try { const l = JSON.parse(localStorage.getItem('hpkino:lang') || 'null'); return LANGS.some(x => x[0] === l) ? l : null; } catch (e) { return null; } })();
const I18N_ON = true; // zh belum, makanya ga ada di LANGS
const L = I18N_ON ? (LANG || 'id') : 'id', UILANG = L;
if (L !== 'id') document.write(`<script src="i18n/${L}.js"><\/script>`);
document.documentElement.lang = L;
// resume: balik langsung ke home (bukan layar Mulai); layar digelapin dulu biar ga ngeflash
function setLang(l, resume) {
  try { localStorage.setItem('hpkino:lang', JSON.stringify(l)); if (resume) localStorage.setItem('hpkino:resume', 'true'); } catch (e) {}
  const v = document.createElement('div'); v.style.cssText = 'position:fixed;inset:0;background:#000;z-index:99999;opacity:0;transition:opacity .18s';
  document.body.appendChild(v); requestAnimationFrame(() => { v.style.opacity = '1'; }); setTimeout(() => location.reload(), 200);
}
// terjemahin satu teks utuh; spasi di pinggir dipertahanin
function tr(s) {
  if (L === 'id' || s == null || !window.I18N) return s;
  s = String(s); const D = window.I18N;
  if (D[s] !== undefined) return D[s];
  const t = s.trim(); if (!t) return s;
  if (D[t] !== undefined) return s.slice(0, s.indexOf(t)) + D[t] + s.slice(s.indexOf(t) + t.length);
  // pola: "teks  (+2)", "Nama: teks", "Nama · Grup", "3 hari lagi", "🎂  besok"
  let m;
  if ((m = t.match(/^([\s\S]+?)(\s+\(\+\d+\))$/)) && D[m[1]] !== undefined) return D[m[1]] + m[2];
  if ((m = t.match(/^([^:\n]{1,24}): ([\s\S]+)$/)) && D[m[2]] !== undefined) return tr(m[1]) + ': ' + D[m[2]];
  if ((m = t.match(/^(.{1,30}) · (.{1,30})$/)) && (D[m[1]] !== undefined || D[m[2]] !== undefined)) return tr(m[1]) + ' · ' + tr(m[2]);
  if ((m = t.match(/^(🎂\s*)?(\d+) hari lagi$/))) return (m[1] || '') + ({ en: `${m[2]} days left`, ko: `${m[2]}일 남음`, zh: `还有${m[2]}天` })[L];
  if ((m = t.match(/^(🎂\s+)(\S.*)$/)) && D[m[2]] !== undefined) return m[1] + D[m[2]];
  if ((m = t.match(/^(\d+) Foto$/))) return ({ en: `${m[1]} Photos`, ko: `사진 ${m[1]}장`, zh: `${m[1]}张照片` })[L];
  if ((m = t.match(/^(\d+) Catatan$/))) return ({ en: `${m[1]} Notes`, ko: `메모 ${m[1]}개` })[L] || t;
  // teks banyak baris yg ga ada utuh di kamus: terjemahin per baris
  if (t.includes('\n')) { let hit = false; const out = s.split('\n').map(x => { const y = x.trim() ? tr(x) : x; if (y !== x) hit = true; return y; }).join('\n'); if (hit) return out; }
  return s;
}
// teks UI kecil yg nempel sama angka/nama (bukan dari naskah)
const UI = {
  en: { hari: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], bulan: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] },
  ko: { hari: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], bulan: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] },
  zh: { hari: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'], bulan: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] },
};
// ganti teks di layar begitu muncul (chat, notif, app, ending)
(() => {
  if (L === 'id') return;
  const seen = new WeakMap();
  const ATTR = ['placeholder', 'aria-label', 'data-ph', 'title'];
  const fixText = (n) => { const v = n.data; if (seen.get(n) === v) return; const t = tr(v); if (t !== v) n.data = t; seen.set(n, n.data); };
  const fixEl = (el) => {
    if (el.closest && el.closest('.kinput, script, style')) return;
    ATTR.forEach(a => { if (el.hasAttribute && el.hasAttribute(a)) { const v = el.getAttribute(a), t = tr(v); if (t !== v) el.setAttribute(a, t); } });
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    for (let n = w.currentNode; n; n = w.nextNode()) {
      if (n.nodeType === 3) { if (!(n.parentElement && n.parentElement.closest('.kinput, script, style'))) fixText(n); }
      else if (n !== el) ATTR.forEach(a => { if (n.hasAttribute(a)) { const v = n.getAttribute(a), t = tr(v); if (t !== v) n.setAttribute(a, t); } });
    }
  };
  const mo = new MutationObserver((recs) => {
    for (const r of recs) {
      if (r.type === 'characterData') { if (!(r.target.parentElement && r.target.parentElement.closest('.kinput'))) fixText(r.target); }
      else if (r.type === 'attributes') fixEl(r.target);
      else r.addedNodes.forEach(n => n.nodeType === 3 ? fixText(n) : n.nodeType === 1 && fixEl(n));
    }
  });
  mo.observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTR });
  const t = document.title; document.addEventListener('DOMContentLoaded', () => { document.title = tr(t); });
})();

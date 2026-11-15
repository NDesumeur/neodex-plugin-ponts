// lancé par le test « local » de NeoDex : un pont tiré à la souris, puis chaque taille d'archipel (7 à 13) résolue jusqu'au bout,
// le plein écran et la place prise (avec NEO_SHOTS : garde des images du jeu)
module.exports = async ({ pj, sleep }) => {
  const C = code => pj(`(() => { const cv = document.getElementById('gc'), T = cv.__po, po = T.st(); ${code} })()`);
  const shot = async n => { if (!process.env.NEO_SHOTS) return; const d = await pj(`document.getElementById('gc').toDataURL()`); require('fs').writeFileSync(require('path').join(process.env.NEO_SHOTS, 'ponts-' + n + '.png'), Buffer.from(d.split(',')[1], 'base64')); };
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); 0`);
  const size = v => pj(`(() => { const s = document.getElementById('poSize'); s.value = '${v}'; s.dispatchEvent(new Event('change', {bubbles: true})); return 0; })()`);
  const done = [];
  for (const v of [0, 1, 2, 3]) {
    await size(v); await sleep(300);
    // le premier pont de la solution, tiré à la souris d'une île à l'autre
    const drag = await C(`const [k] = [...po.sol.keys()], [a, b] = k.split('-').map(Number), r = cv.getBoundingClientRect(), P = q => { const [x, y] = T.xy(po.isl[q]); return [r.left + x / T.W * r.width, r.top + y / T.H * r.height]; };
      const [x1, y1] = P(a), [x2, y2] = P(b); cv.dispatchEvent(new PointerEvent('pointerdown', {bubbles: true, clientX: x1, clientY: y1, pointerId: 1}));
      cv.dispatchEvent(new PointerEvent('pointermove', {bubbles: true, clientX: x2, clientY: y2, pointerId: 1})); cv.dispatchEvent(new PointerEvent('pointerup', {bubbles: true, clientX: x2, clientY: y2, pointerId: 1})); return po.br.get(k) || 0;`);
    if (drag !== 1) throw new Error('le pont tiré à la souris ne se pose pas (' + drag + ')');
    if (v === 3) await shot('0-13-debut');
    // le reste de la solution, pont après pont
    await C(`for (const [k, c] of po.sol) { const [a, b] = k.split('-').map(Number); while ((po.br.get(k) || 0) !== c) T.toggle(a, b); } return 0;`); await sleep(600);
    const r = await C(`return [po.n, po.isl.length, po.mode];`); done.push(r[0] + '×' + r[0] + ' ' + r[1] + ' îles');
    if (r[2] !== 'won') throw new Error('archipel ' + r[0] + ' non relié');
    if (v >= 2) await shot('1-' + r[0] + '-fini');
  }
  await size(0);
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  await pj(`document.getElementById('gFs').click(), 0`); await sleep(700);
  const fs = await pj(`(() => { const c = document.getElementById('gc'), r = c.getBoundingClientRect(); return document.fullscreenElement === c.parentElement && (Math.abs(r.height - innerHeight) < 3 || Math.abs(r.width - innerWidth) < 3); })()`);
  await pj(`document.fullscreenElement && document.exitFullscreen(), 0`); await sleep(300);
  if (!fs) throw new Error('le plein écran ne remplit pas l\'écran');
  const L = await pj(`(() => { const r = document.getElementById('gc').getBoundingClientRect(); let s = 0; for (let e = document.getElementById('gc').parentElement; e; e = e.parentElement) s += e.scrollTop; return { bottom: Math.round(r.bottom + s), h: Math.round(r.height), wh: innerHeight, ww: innerWidth, sw: document.documentElement.scrollWidth }; })()`);
  if (L.bottom > L.wh + 1 || L.sw > L.ww + 1 || L.h < 300) throw new Error('le jeu dépasse la fenêtre ou reste petit : ' + JSON.stringify(L));
  return done.join(', ') + ' reliés · plein écran · ' + L.h + ' px dans ' + L.ww + '×' + L.wh;
};

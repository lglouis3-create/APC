/* ==========================================================================
   DIAGRAMS — figures drawn as inline SVG
   ==========================================================================
   A figure is a string of SVG markup wrapped in <figure class="fig">. Figures
   are written here rather than cropped from a slide when the point is a process
   or a relation: they stay sharp at any size, cost almost nothing in file size,
   and follow the page's light and dark colours.

   Three ways a figure reaches the reader:
     a question's concept block   `svg: DIA.key` on the question
     a reading tab                `<!--DIA:key-->` in reference.js / tell.js / guide.js
     the Diagrams tab             listed in DIAGRAMS below

   `figure(inner, cap, h)` wraps plain SVG. `stepper(key, title, steps, h, cap,
   footer)` builds a step-through: one group per step, with Back, Next, Replay
   step, Play all and a dot per step. The engine (views.js) animates the move
   between two steps, so authoring a step-through means writing each step's end
   state and nothing about the motion. See STEPPERS.md before writing one; the
   two rules that matter most are repeated here:

     1. A shape that is the same thing in two steps carries the same `data-k`.
        That is what makes it glide instead of fading out and back in.
     2. A shape that should keep its own opacity sets the `opacity` attribute,
        not a CSS class; the fade-in animates from 0 to whatever that is.

   Everything below the helpers is SAMPLE content: one step-through so the
   Diagrams tab, the stepper test and the browser sweep have something to
   exercise. Replace it with the course's own figures.
   ========================================================================== */
const DIA_W = 360;                                  // every figure is drawn 360 wide
const DIA_H = 200;

/* The arrow marker is defined inside each figure, since a figure can be moved
   into a question, a reading tab or the Diagrams tab and has to carry its own. */
const figure = (inner, cap, h = DIA_H) => `<figure class="fig"><svg viewBox="0 0 ${DIA_W} ${h}" role="img" aria-label="${
  String(cap || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().replace(/"/g, '&quot;')}">
  <defs><marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
  <path d="M0 0 L10 5 L0 10 z" fill="currentColor" opacity="0.65"/></marker></defs>${inner}</svg>${
  cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

/* Captions are drawn inside the panel so a step's own words travel with it.
   Three lines at most; the third is clipped rather than overflowing the box. */
const wrapLines = (t, n = 76) => {
  const out = []; let cur = '';
  String(t).split(' ').forEach(w => {
    if ((cur + ' ' + w).trim().length > n) { out.push(cur.trim()); cur = w; } else cur += ' ' + w;
  });
  out.push(cur.trim());
  if (out.length > 3) { out.length = 3; out[2] = out[2].replace(/.{2}$/, '…'); }
  return out.filter(Boolean);
};

/* steps = [[caption, inner, tag?], …]. The caption of the active step is drawn
   in the band at the bottom of the panel, which is why `h` has to leave room
   for it (about 34px for a one-line caption). Captions carry class `capt` so
   the engine fades them rather than trying to glide them. */
function stepper(key, title, steps, h = DIA_H, cap = '', footer = '') {
  let g = title ? `<text class="title" x="${DIA_W / 2}" y="11" text-anchor="middle">${title}</text>` : '';
  steps.forEach((st, i) => {
    const lines = wrapLines(st[0]);
    g += `<g class="st${i === 0 ? ' on' : ''}" data-step="${i + 1}">${st[1]}` +
      `<text class="lbl sm capt" x="6" y="${h - 12 - lines.length * 10}" text-anchor="start">Step ${i + 1} of ${steps.length}${st[2] ? ' · ' + st[2] : ''}</text>` +
      lines.map((l, k) => `<text class="lbl xs capt" x="6" y="${h - 2 - (lines.length - 1 - k) * 10}" text-anchor="start">${l}</text>`).join('') +
      `</g>`;
  });
  const dots = steps.map((st, i) =>
    `<button class="sdot${i === 0 ? ' on' : ''}" data-go="dot" data-i="${i}" aria-label="Go to step ${i + 1}"></button>`).join('');
  const controls = `<div class="anim" data-anim="${key}">` +
    `<button class="btn ghost" data-go="-1">◀ Back</button>` +
    `<button class="btn ghost" data-go="1">Next ▶</button>` +
    `<button class="btn ghost" data-go="replay">↻ Replay step</button>` +
    `<button class="btn ghost" data-go="play">▶ Play all</button>` +
    `<span class="sdots">${dots}</span>` +
    (footer ? `<span class="meta">${footer}</span>` : '') + `</div>`;
  return figure(g, cap, h).replace('</svg>', '</svg>' + controls);
}

/* ---------- SAMPLE: replace with the course's own figures ------------------
   A three-step figure. The ligand circle keeps data-k="lig" in all three
   steps, so it glides along; the signal arrow and the response bar appear only
   in later steps, so they fade in. */
const SAMPLE_STEPS = (() => {
  const box = (x, y, w, hh, k) => `<rect class="box" data-k="${k}" x="${x}" y="${y}" width="${w}" height="${hh}" rx="6"/>`;
  const label = (x, y, t, k) => `<text class="lbl" data-k="${k}" x="${x}" y="${y}" text-anchor="middle">${t}</text>`;
  const frame = `${box(28, 46, 96, 44, 'a')}${label(76, 73, 'SAMPLE A', 'la')}` +
                `${box(236, 46, 96, 44, 'b')}${label(284, 73, 'SAMPLE B', 'lb')}`;
  const lig = x => `<circle class="mark" data-k="lig" cx="${x}" cy="26" r="9"/>`;
  return stepper('sample-steps', 'SAMPLE: a three-step figure', [
    ['The first state: the thing that moves starts at A.', frame + lig(76)],
    ['It moves to B. Because it carries the same data-k, it glides rather than reappearing.', frame + lig(284) +
      `<path class="arrow" data-k="ar" d="M136 68 L224 68"/>`],
    ['A new shape appears, so it fades in; nothing that stayed is redrawn.', frame + lig(284) +
      `<path class="arrow" data-k="ar" d="M136 68 L224 68"/>` +
      `<rect class="mark" x="236" y="98" width="96" height="10" rx="5" opacity="0.45"/>` +
      `<text class="lbl xs" x="284" y="122" text-anchor="middle">a response at B</text>`],
  ], 170, 'Sample step-through. Replace it with a figure of the course’s own.');
})();

/* Inline SVG a question can show in its concept block via `svg: DIA.key`, a
   reading tab via <!--DIA:key-->, and the Diagrams tab via DIAGRAMS. */
const DIA = {};

/* The Diagrams tab: [group name, [figure keys]]. Course-specific — group the
   figures the way the course groups the processes they show. A key that is not
   in DIA is skipped, and the tab hides itself when nothing is listed. */
const DIAGRAMS = [];

/* A figure's own title, used by the Diagrams tab's contents chips when a key
   needs a name different from the title drawn inside it. */
const DIA_NAMES = {};

/* ==========================================================================
   Tell apart and Reference figures (drawn by helpers below)
   ========================================================================== */
const _CW = 5.7;                                    // estimated width of one character at 10.5px
const _FIGWARN = [];                                // lines that would not fit their box, for the checks
const _HUE = {blue: '#2f7fd0', green: '#2a9d6f', amber: '#c9792a', violet: '#8a5cc4'};
const _wrap = (s, n) => {
  const out = []; let cur = '';
  String(s).split(' ').forEach(w => {
    if ((cur + ' ' + w).trim().length > n) { if (cur) out.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
  });
  if (cur) out.push(cur);
  return out;
};
/* A rounded box with wrapped text. items: strings, or [string, 'b'] bold, [string, 'd'] dim.
   Returns {s, h}; the box is as tall as its text needs, at least o.min. */
function _card(x, y, w, items, o = {}) {
  const pad = o.hue ? 20 : 14, n = Math.floor((w - pad) / _CW), lines = [];
  items.forEach(it => {
    const t = Array.isArray(it) ? it[0] : it, st = Array.isArray(it) ? it[1] : '';
    _wrap(t, n).forEach(l => lines.push([l, st]));
  });
  const h = Math.max(o.min || 0, lines.length * 13 + 14);
  const tx = o.center ? x + w / 2 : x + (o.hue ? 13 : 8), an = o.center ? 'middle' : 'start';
  const top = y + (h - lines.length * 13) / 2 + 10;
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" style="fill:${o.fill || 'var(--surface)'};stroke:var(--line);stroke-width:1.2"/>`;
  if (o.hue) s += `<rect x="${x}" y="${y}" width="5" height="${h}" rx="2" style="fill:${o.hue}"/>`;
  lines.forEach(([l, st], i) => {
    if (l.length * _CW > w - 8) _FIGWARN.push(l);
    s += `<text x="${tx}" y="${top + i * 13}" text-anchor="${an}" style="fill:var(${st === 'd' ? '--text-dim' : '--text'});font-size:10.5px;${st === 'b' ? 'font-weight:700;' : ''}">${l}</text>`;
  });
  return {s, h};
}
const _down = (x, y1, y2) => `<path class="arrow" d="M${x} ${y1} L${x} ${y2}"/>`;
const _right = (x1, x2, y) => `<path class="arrow" d="M${x1} ${y} L${x2} ${y}"/>`;

/* (a) Eye: which condition */
DIA['tell-eye'] = (() => {
  let s = '', y = 4;
  const root = _card(10, y, 340, [['Red, irritated eye: what does the patient report?', 'b']], {center: true});
  s += root.s; y += root.h + 10;
  const rows = [
    [['Gritty, sandy feeling'], [['Dry eye disease', 'b'], 'Compress: warm', 'First line: ocular lubricants'], _HUE.blue],
    [['Itching, with tearing and red eyes'], [['Allergic conjunctivitis', 'b'], 'Compress: cold', 'First line: artificial tears, then ophthalmic antihistamines if symptoms persist'], _HUE.green],
    [['Tearing with lid crusting'], [['Bacterial or viral conjunctivitis', 'b'], 'Compress: cold', 'First line: ocular antimicrobial; refer to a provider for the antibiotic if applicable'], _HUE.amber],
    [['No symptoms until substantial visual field loss'], [['Primary open-angle glaucoma (POAG)', 'b'], 'Compress: not helpful', 'First line: prostaglandin analogs'], _HUE.violet]];
  rows.forEach(([cl, res, hue]) => {
    const r = _card(142, y, 208, res, {hue}), l = _card(10, y, 118, cl, {min: r.h, center: true});
    s += l.s + _right(128, 140, y + r.h / 2) + r.s; y += r.h + 8;
  });
  y -= 8;
  return figure(s, 'Eye: which condition. Start from the one symptom the patient reports; each branch ends in the compress and the first line.', y + 6);
})();

/* (b) Prescription review in three steps */
DIA['tell-review'] = (() => {
  let s = '', y = 4;
  const rows = [
    ['1. Is the prescription legal and safe for the patient?', 'Prescribing error', 'Contact the prescriber to clarify, correct or obtain a new prescription', _HUE.blue],
    ['2. Was it transcribed appropriately?', 'Transcribing error', 'Correct the prescription entered in the system and regenerate labels', _HUE.green],
    ['3. Does the product in hand match the transcribed product?', 'Dispensing error', 'Replace the incorrect product and/or relabel before dispensing', _HUE.amber]];
  rows.forEach(([st, er, fx, hue], i) => {
    const r = _card(176, y, 174, [[er, 'b'], 'Fix: ' + fx], {hue}), l = _card(10, y, 128, [[st, 'b']], {min: r.h, center: true});
    s += l.s + _right(138, 174, y + r.h / 2) + r.s;
    y += r.h;
    if (i < 2) { s += _down(74, y, y + 12); y += 12; }
  });
  return figure(s, 'Prescription review in three steps. A step that fails names the error type and the fix.', y + 6);
})();

/* (c) Bite or sting: self-care or refer */
DIA['tell-bite'] = (() => {
  let s = '', y = 4;
  const a = _card(80, y, 200, [['Bite or sting', 'b']], {center: true}); s += a.s; y += a.h;
  s += _down(180, y, y + 12); y += 12;
  const q = _card(40, y, 280, [['Referral condition or self-care exclusion present?', 'b']], {center: true}); s += q.s; y += q.h;
  s += `<path class="arrow" d="M120 ${y} L92 ${y + 16}"/><path class="arrow" d="M240 ${y} L268 ${y + 16}"/>`;
  y += 18;
  const yes = _card(6, y, 172, [['Yes: refer', 'b'], 'Tick bite, scabies, spider bite, secondary infection', 'Bite or sting with systemic symptoms',
    'Hives, excessive swelling or dizziness', 'Allergic response away from the sting: urgent care or the ER', 'Severe reaction to previous stings',
    'Personal or family history of significant allergy, such as hay fever', 'Age under 2 years'], {hue: _HUE.amber});
  const no = _card(186, y, 168, [['No: self-care', 'b'], 'Pain, itching or irritation at a single sting site',
    'Skin protectant: zinc oxide or calamine', 'Local anesthetic: pramoxine or benzyl alcohol', 'Topical diphenhydramine or hydrocortisone 1%',
    'Antipruritics and anesthetics: 7 days at most unless a provider advises'], {hue: _HUE.green, min: yes.h});
  s += yes.s + no.s; y += Math.max(yes.h, no.h);
  return figure(s, 'Bite or sting: refer when any condition or exclusion is present; otherwise self-care for a single sting site.', y + 6);
})();

/* (d) Acne ladder */
DIA['tell-acne'] = (() => {
  let s = '', y = 4;
  const rungs = [
    [0, 'Mildly clear', 'Rare non-inflammatory lesions; no more than one small lesion', 'Benzoyl peroxide alone or essential oils, or no product', _HUE.blue],
    [14, 'Mild', 'Some non-inflammatory lesions; at most a few papules or pustules; no nodules; minimal scarring', 'One topical agent: benzoyl peroxide or a topical retinoid', _HUE.green],
    [28, 'Moderate', 'Many non-inflammatory and some inflammatory lesions; at most one nodule; mild scarring', 'Topical combination, such as benzoyl peroxide plus a topical retinoid; the oral antibiotic is added after topical combinations (lecture)', _HUE.amber],
    [42, 'Severe', 'A few nodular lesions; moderate to extensive scarring', 'Refer: severe acne is not a self-care candidate; prescriber therapy', _HUE.violet]];
  rungs.forEach(([ind, nm, look, first, hue], i) => {
    const r = _card(8 + ind, y, 344 - ind, [[nm, 'b'], 'Looks like: ' + look, 'First line: ' + first], {hue});
    s += r.s; y += r.h;
    if (i < 3) { s += _down(180 + ind / 2, y, y + 12); y += 12; }
  });
  return figure(s, 'Acne by severity: from mildly clear to severe, with the first-line therapy at each level. Severe acne goes to referral.', y + 6);
})();

/* (e) AAFP order of use */
DIA['tell-aafp'] = (() => {
  let s = '', y = 4;
  const steps = ['Vaccines by age (Table 1)', 'Medical conditions (Table 2), often missed by providers', 'Notes: must be used on exams',
    'Appendix: contraindications and precautions', 'Addendum: new or updated guidance'];
  steps.forEach((t, i) => {
    const r = _card(46, y, 304, [t], {min: 30, hue: _HUE.blue});
    s += `<circle cx="24" cy="${y + r.h / 2}" r="12" style="fill:var(--surface);stroke:var(--line);stroke-width:1.4"/>` +
         `<text x="24" y="${y + r.h / 2 + 4}" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:700">${i + 1}</text>` + r.s;
    y += r.h;
    if (i < 4) { s += _down(24, y - 0, y + 10); y += 10; }
  });
  return figure(s, 'AAFP adult schedule: the order of use, from Table 1 to the Addendum.', y + 6);
})();

DIAGRAMS.push(['Tell apart', ['tell-eye', 'tell-review', 'tell-bite', 'tell-acne']], ['Reference', ['tell-aafp']]);
Object.assign(DIA_NAMES, {'tell-eye': 'Eye: which condition', 'tell-review': 'Prescription review in three steps',
  'tell-bite': 'Bite or sting: self-care or refer', 'tell-acne': 'Acne by severity', 'tell-aafp': 'AAFP schedule: order of use'});

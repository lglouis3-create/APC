/* ==========================================================================
   Order of the Topics list. Start with the two "Likely on the exam" sets, then the
   practice sets, then the lecture topics: Dr. Lahoud's, then Dr. Parsons'.
   Only the two star topics open by default. Each topic is defined in the file
   that holds its questions (the first two in q1_topics.js); this file only sorts.
   ========================================================================== */
{
  const ORDER = ['starl', 'starp', 'sbarl', 'sbarp', 'aafpcase', 'deentapply',
                 'dispensing', 'eoor', 'week4', 'deent', 'dacne', 'dscaly', 'deye', 'dglau', 'dboard',
                 'otc', 'poct', 'imm'];
  const rank = t => { const i = ORDER.indexOf(t.id); return i < 0 ? ORDER.length : i; };
  TOPICS.sort((a, b) => rank(a) - rank(b));
}

/* Prescription, label and stock bottle drawings (case_*.svg data in images.json): keep them
   to a readable width on wide screens. */
try {
  const st = document.createElement('style');
  st.textContent = '.qimg[src^="data:image/svg"]{max-width:460px;margin-left:auto;margin-right:auto;background:#f8fafc}';
  document.head.appendChild(st);
} catch (e) { /* the page renders without it */ }

/* Guides tab: cards in place of wide tables, and quieter source tags. */
try {
  const gs = document.createElement('style');
  gs.textContent = '.gcards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:10px;margin:10px 0}'
    + '.gcard{border:1px solid var(--line);border-left:5px solid #2f7fd0;border-radius:9px;padding:10px 12px;background:var(--paper);min-width:0;overflow-wrap:anywhere}'
    + '.gcard-t{font-weight:700;margin-bottom:4px}'
    + '.gcard-r{margin:5px 0;font-size:14px;line-height:1.45}'
    + '.gcard-k{font-size:10.5px;font-weight:700;color:var(--text-dim);text-transform:uppercase;letter-spacing:.05em}'
    + '.gsrc{font-size:.78em;color:var(--text-dim);white-space:nowrap}';
  document.head.appendChild(gs);
} catch (e) { /* the guide still reads without it */ }

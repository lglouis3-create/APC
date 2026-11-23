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

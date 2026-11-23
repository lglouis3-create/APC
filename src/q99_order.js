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

/* Guides tab: station list, layered requirements, ladders and date calculations. */
try {
  const g2 = document.createElement('style');
  g2.textContent = '.gstns{margin:8px 0}.gstn{display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--line)}'
    + '.gnum{flex:none;min-width:30px;height:30px;padding:0 6px;box-sizing:border-box;border-radius:15px;background:#1e3a8a;color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center}'
    + '.gbody{min-width:0;overflow-wrap:anywhere;font-size:14.5px;line-height:1.45}.gchips{margin:4px 0 2px;display:flex;flex-wrap:wrap;gap:5px}'
    + '.gtag{border:1.5px solid;border-radius:10px;padding:1px 8px;font-size:11px;font-weight:700}.gfix{font-size:13px;color:var(--text-dim)}'
    + '.gladder{list-style:none;margin:10px 0;padding:0}.gladder li{border-left:6px solid;padding:6px 0 6px 12px;margin:0 0 10px;font-size:14.5px;line-height:1.45}'
    + '.gl-t{font-weight:700;font-size:16px;margin-bottom:2px}.gl-r{margin:3px 0}'
    + '.gcalcs{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin:10px 0}'
    + '.gcalc{border:1px solid var(--line);border-radius:9px;background:var(--paper);overflow:hidden;min-width:0}'
    + '.gcalc-h{background:#1e3a8a;color:#fff;font-weight:700;font-size:13px;padding:7px 12px}'
    + '.gcalc-l{display:flex;justify-content:space-between;gap:10px;padding:6px 12px;font-size:13.5px;border-bottom:1px dashed var(--line)}.gcalc-l span:first-child{color:var(--text-dim)}'
    + '.gcalc-res{background:#fff7ed;color:#7c2d12;padding:8px 12px;font-size:14px;font-weight:700}.gcalc-res .gsrc{display:inline;text-transform:none;letter-spacing:0;opacity:1;font-size:.78em;font-weight:400;color:#7c2d12}.gcalc-res span{display:block;font-size:10.5px;letter-spacing:.05em;text-transform:uppercase;opacity:.8}'
    + '.glayers{margin:10px 0}.glay{border:2px solid;border-radius:10px;padding:8px 12px 10px;margin:6px 0 0}.glay ul{margin:4px 0 6px 18px;padding:0;font-size:14px;line-height:1.45}'
    + '.glay-t{font-weight:700;font-size:13px;letter-spacing:.03em;text-transform:uppercase}'
    + '.glay1{border-color:#2f7fd0;background:rgba(47,127,208,.07)}.glay1>.glay-t{color:#2f7fd0}'
    + '.glay2{border-color:#2a9d6f;background:rgba(42,157,111,.08)}.glay2>.glay-t{color:#2a9d6f}'
    + '.glay3{border-color:#c9792a;background:rgba(201,121,42,.09)}.glay3>.glay-t{color:#c9792a}';
  document.head.appendChild(g2);
} catch (e) { /* the guide still reads without it */ }

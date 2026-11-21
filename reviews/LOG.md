# Review log

## 2026-11-20 first build
- Three independent reviewers read the bank against the decks, transcripts and the AAFP text. No wrong keys. Findings (unsupported claims, wrong slide cites, ambiguous stems, unmarked duplicates) were applied.
- Reviewer notes not applied: unmarked duplicate families remain between d10/d11/d22, d39/d41/e01/e12 and e08/e19/e20/d46 (distinct wordings; `dupOf` set only for d12, e07, e14, e15, o15, o24).
- The AAFP schedule was read as flattened text, so table colors and column placement of the Appendix (contraindication vs precaution) were not read visually; i12, i14, i15 and i29 rest on the Appendix wording plus footnotes 1 and 2.

## 2026-11-20 second pass
- Rewrote 67 questions so the keyed option is never the longest wrong-or-right option, and expanded one-line explanations (agents), then three independent re-reviews of the changed text. Their findings (e.g. liveness claims for MMR/varicella/RZV, "fewest doses" wording in i16, half-true distractors in o19, p13, d25, d49) were applied.
- Not applied: renaming "slide" to "p." in EOOR key and TOSCE guide cites (cite_check reads the word "slide"); i28 and i03 rewording done; slide-number cites for the DEENT deck remain omitted (no page numbers available).
- Full checks: 36 pass; scheduler_test.js and state_check_test.js (engine self-tests tied to the template's undated-exam and lecture-id layout) fail; explain_check.js is a report only.

## 2026-11-21 DEENT questions
- 85 questions from the DEENT repo bank (q7-q10). Reviews found no wrong keys; fixes: recording-only facts marked (T) instead of attributed to heading-only slides, severity cut-offs cited to slide 26, fix wording for transcribing/dispensing errors taken from Intro-to-Dispensing slide 39.
- Not re-reviewed after fixes. Known source conflicts not keyed: BSA cut-offs on slides 26 vs 31, secukinumab class on slide 42, Simbrinza component on slides 51 vs 69, Latisse 0.3% vs 0.03%, Rocklatan QHS vs once daily.
- 2026-11-21: Rendered slides in the DEENT repo (deck/<id>/NN.webp) viewed: Patel acne 7, 19, 33, 38, 40 (classification, non-drug measures, tetracyclines, iPledge, algorithm) and Lam glaucoma 74 (5 min solution-solution and solution-suspension, 10 min solution-ointment), 83 (remove lenses, wait 15 min, BAK), 91-92 (acute symptoms; refer to ophthalmologist or optometrist) match the questions.

- 2026-11-21: q11_deent_board.js (19) from the verified lab answer key (photo). Template sample content removed from Guide, Tell apart, Reference, Diagrams (no drawn figures; stepper_test NOT RUN) and glossary/links. Differences: the key lists an ocular antimicrobial as first line for bacterial/viral conjunctivitis while Dr. Lam's slide 34 gives cold compresses and referral; questions key the lab key. Cipro schedule, ketotifen age and latanoprost storage come from the key only.

## 2026-11-21 star questions, study guide, redesigned tabs, AAFP chart cases
- Added 20 "star" questions per professor (q12 Lahoud, q13 Parsons), a study guide per professor (Guides tab), redesigned Tell apart and Reference (cards, flow figures, layers, recall prompts, number chips) and 14 AAFP chart cases (q14) that show the colored AAFP page the learner reads. Bank: 328 questions.
- The Parsons star set, the Lahoud star set and the three reading tabs each had one independent review. No wrong keys were found. Findings applied: sp16 stem now says the last dose was Tdap; sp18 says standard schedule; sp13 and sp14 explanations now match the Table 1 and Table 2 colors; sl15 lost an unsupported 72-hour claim; sl06 and sl18 tells fixed; guide, Tell apart and figure contradictions (severe acne wording, SBAR versions, coal tar row, slide 10) fixed. The AAFP legends were corrected after the colored pages were rendered (Table 1: green = shared decision-making; Table 2 uses different colors).
- Not verified by a second reader: the DEENT slide numbers in the fixes (the Patel, Lam and Smith decks are not in src/decks; the reviewer viewed the rendered slides in the DEENT repo for the Lahoud set, the fixing agents did not). sl01, sl04, sl05 and sl09 gained an indication line (diabetes, depression, urinary tract infection, otitis media) that no source supplies; it changes no key. sl17's Latisse item is a bank judgment (source: both). sl20's 9% "moderate to severe" key follows the 11/11 transcript's two-name rule; the slides give only the cut-offs.
- The AAFP Notes pages (pages 4 to 8) are not embedded; only Tables 1 and 2 and the Appendix (pages 2, 3, 9, 10) are, as WebP images in images.json. The question images use the engine's reaction-scheme alt text.
- The star topics are added after the other topics (TOPICS.push), because the engine's blank-item test plants items in the first two topics.
- Open: no check confirms the guide's 35 tables fit a phone width; page scroll width equals the viewport width at 375 px, and the tables were not inspected one by one.
- Full checks: 35 pass; scheduler_test.js and state_check_test.js still fail (engine self-tests); explain_check.js is a report; stepper_test.js NOT RUN (no step-through figures).


## 2026-11-21 logistics removed
- Louis: information about how the TOSCE stations run is not tested on the written exam. Removed from the Guides tab the TOSCE pulse and BP station block, the TOSCE SBAR stations bullet, the lab "counsel a partner" bullet and the TOSCE citations on the POCT section; removed question e22 (how the TOSCE station is carried out) and x04 (which disease states are sorted in the Part 2 review). Kept: the TOSCE medication list pairs (e21; the list names drugs the SBAR stations may use) and the SBAR content itself. Bank: 326 questions.

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

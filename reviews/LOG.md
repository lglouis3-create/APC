# Review log

## 2026-11-20 first build
- Three independent reviewers read the bank against the decks, transcripts and the AAFP text. No wrong keys. Findings (unsupported claims, wrong slide cites, ambiguous stems, unmarked duplicates) were applied.
- Reviewer notes not applied: unmarked duplicate families remain between d10/d11/d22, d39/d41/e01/e12 and e08/e19/e20/d46 (distinct wordings; `dupOf` set only for d12, e07, e14, e15, o15, o24).
- The AAFP schedule was read as flattened text, so table colors and column placement of the Appendix (contraindication vs precaution) were not read visually; i12, i14, i15 and i29 rest on the Appendix wording plus footnotes 1 and 2.

## 2026-11-20 second pass
- Rewrote 67 questions so the keyed option is never the longest wrong-or-right option, and expanded one-line explanations (agents), then three independent re-reviews of the changed text. Their findings (e.g. liveness claims for MMR/varicella/RZV, "fewest doses" wording in i16, half-true distractors in o19, p13, d25, d49) were applied.
- Not applied: renaming "slide" to "p." in EOOR key and TOSCE guide cites (cite_check reads the word "slide"); i28 and i03 rewording done; slide-number cites for the DEENT deck remain omitted (no page numbers available).
- Full checks: 36 pass; scheduler_test.js and state_check_test.js (engine self-tests tied to the template's undated-exam and lecture-id layout) fail; explain_check.js is a report only.

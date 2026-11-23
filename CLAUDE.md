# APC III Outpatient Written Exam drill: state

Course state for kit sessions (updated 2026-11-21). Source tree in `src/`, built page at the repository root (`index.html`).

## What the drill covers
- Exam: Mon 11/23/2026 1 PM, 50 minutes, 30 questions (15 Dr. Parsons, 15 Dr. Lahoud), non-sterile weeks. Source: Week 14 deck, slide "Outpatient Written Exam".
- Ingested (382 questions: 370 plus the Week 4 topic q17 (12 questions from APC_III_Week_4_Slides.pdf and its narration, 2026-11-23); then: 326 (328 minus two logistics items removed 2026-11-21) plus q15 SBAR practice (24) and q16 DEENT application (20), with SBAR builder and case drills and 16 DEENT slide images in the Reference tab: 274 core plus 2026-11-21 star sets q12/q13 (20 each) and 14 AAFP chart cases q14; Guide, Tell apart and Reference rewritten, colored AAFP pages embedded in images.json; earlier detail: 274 questions; 2026-11-21 also added 19 questions from the verified Week 14 Ophthalmic Review (Which is which) lab answer key, q11_deent_board.js, cited as Ophthalmic-Review-Key.pdf, a photo; Tell apart, Reference and Objective guide tabs now hold real tables and objectives instead of template samples; 2026-11-21 added 85 DEENT lab questions in q7-q10 from the lglouis3-create/DEENT bank: Patel acne and scaly dermatoses, Lam ophthalmic disorders and glaucoma): Week 2 Intro to Dispensing deck + 8/24 transcript + EOOR answer key + TOSCE guide (Dr. Lahoud); Week 3 OTC deck + APhA excerpt (no transcript); Week 5 POCT deck (no transcript exists); Week 6 immunization deck + AAFP 2026 schedule + 9/21 transcript; Week 14 DEENT deck + 11/16 transcript.
- Not ingested: 8/31 OTC transcript, 10/5 TOSCE and 10/26 OSCE Q&A transcripts, the 13 Week 2 lab prescriptions (only the answer key), the BDK list.

## Known conflicts (see `reviews/LOG.md`)
- Passing grade: 8/24 transcript says 75%; slide 2 and syllabus say 70%. No question keys it.
- CII expiration: key says ">1 month", slide 22 says 30 days; drill keys 30 days.
- Slide 7 lists incorrect patient under dispensing; slide 38 and the EOOR key treat it as transcribing (note on d03).
- Hydrocortisone frequency: slide 27 "1-4 times/day", APhA excerpt "3 or 4 times daily"; not keyed.
- Mid-level practitioner 3-month expiration (slide 22 footnote) was not stressed in lecture.
- TOSCE list and the Week 11 list name methylphenidate (Focalin XR); the SBAR questions use Focalin XR as a CII example (Intro to Dispensing slide 23 is the source for its schedule).

## Delivery status
- Checks: see `reviews/LOG.md`. Pushed to `main` (2026-11-20 and 2026-11-21); GitHub Pages must be enabled in repository settings (Deploy from a branch, main, root); no pull request opened.

## 2026-11-21 DEENT additions
- q7_deent_acne.js (19), q8_deent_scaly.js (22), q9_deent_eye.js (24), q10_deent_glaucoma.js (20); cites name the DEENT decks; decks are not on hand, so cite_check reports 86 references unchecked.
- Reviewed against the Drive slides by three reviewers; fixes applied but not re-reviewed. Checked by viewing the DEENT repo's rendered slide images (deck/p6, deck/lg): Patel acne slides 7, 19, 33, 38, 40 and Lam glaucoma slides 74, 83, 91, 92 match the cites; other acne and scaly slide numbers rest on the DEENT bank and the Drive text; Smith slide numbers omitted.
- Facts only in recordings are marked (T) and source 'both'.

## 2026-11-23 Week 4 (Day in the Life)
- Ingested APC_III_Week_4_Slides.pdf (27 slides) with the narration transcript (speech recognition; timestamps cited as mm:ss). Topic `week4` (q17_week4.js, 12 questions). Printed stars on slides 6, 14, 16 and 25 are the instructor's recall marks. Source disagreements, recorded in the q17 header: slide 30 days versus narration "one month" for a CII script; narration "March 21st, 2027" (likely 3/31/2027; unused); slide 5 "week 9" (narration corrects to week 2); slide 17 dates the example prescription 09/07/2026 and slide 19 dates the same prescription 10/27/2025; Week 4 used the 2025 ACIP schedule while Week 6 uses the AAFP 2026 schedule. The oxycodone ER "every day as needed" order on slide 13 is an unusual sig for an extended-release product; used as printed.

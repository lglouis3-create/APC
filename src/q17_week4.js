/* ==========================================================================
   Week 4: Day in the life of a community pharmacist (Dr. Lahoud, asynchronous
   lecture dated 9/7/2026). Source: APC_III_Week_4_Slides.pdf (27 pages, each
   page numbered as the slide) and the narration APC_III_Week_4_Narration.m4a
   (the transcript is speech recognition: names and numbers were checked
   against the slides). Printed stars on slides 6, 14, 16 and 25 are the
   instructor's "Recall" marks (slides 16 and 25 say "Recall!").
   Notes on the source:
   - Slides give 30 days for a CII script; the narration says "one month".
   - The narration gives the stock bottle example as "March 21st, 2027"; the
     expected month-end date is 3/31/2027. No question uses it.
   - Slide 5 says "week 9"; the narration corrects it to week 2.
   - Slide 17 dates the example prescription 09/07/2026 and slide 19 dates the
     same prescription 10/27/2025.
   ========================================================================== */
TOPICS.push({id:'week4', name:'Week 4: day in the life (Dr. Lahoud)', prof:'Dr. Lahoud', open:false, cite:'APC_III_Week_4_Slides.pdf and the Week 4 narration', subs:[
  {id:'rxsafe', name:'Prescription verification takeaways', cite:'APC_III_Week_4_Slides.pdf slides 6–9'},
  {id:'dates', name:'Prescription expiration and Use Before dates', cite:'APC_III_Week_4_Slides.pdf slides 11–14'},
  {id:'sbarcall', name:'The provider SBAR call', cite:'APC_III_Week_4_Slides.pdf slides 16–20'}]});

QUESTIONS.push(
/* ---- prescription verification takeaways -------------------------------- */
{id:'w401', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'week4', sub:'rxsafe', concept:'w4-ibuprofen-600-q4-6',
 tags:['Week 4','prescription review','maximum dose','ibuprofen'], source:'both',
 stem:'A prescription reads ibuprofen 600 mg tablets, QTY 60, take 2 tablets by mouth every 4 to 6 hours for 5 days. A student recommends only changing the frequency to every 6 to 8 hours. What is the complete correct recommendation to the prescriber?',
 options:[
  {t:'Change to 1 tablet every 6 to 8 hours, so the daily total stays under the maximum', correct:true, why:'Two tablets are 1,200 mg per dose. Even every 6 hours that is 4 doses and 4,800 mg per day (narration 06:38), above the 3.2 g prescription maximum for ibuprofen (narration 07:15). One tablet every 6 to 8 hours is 1,800 to 2,400 mg per day, so both the dose per administration and the interval needed to change.'},
  {t:'Change only the frequency to every 6 to 8 hours and keep 2 tablets per dose', correct:false, why:'This is the partial answer the narration warns about (06:02 to 06:38). Two tablets every 6 hours is 1,200 mg times 4, which is 4,800 mg per day, still above 3.2 g. The frequency was one of two problems, so fixing only it leaves a prescribing error in place.'},
  {t:'No change: 600 mg tablets are a normal prescription strength, so only the quantity needs checking', correct:false, why:'The strength is acceptable, because providers may prescribe more than the 200 mg over-the-counter dose for a short duration (narration 05:27). The error comes from the number of tablets per dose combined with the short interval, so the order cannot be dispensed as written.'},
  {t:'Reduce the duration from 5 days to 3 days and keep the directions the same', correct:false, why:'A shorter course does not change the daily total, which is the safety problem. At 2 tablets every 4 to 6 hours the patient can still take 4,800 mg or more in one day, above 3.2 g, so the dose and frequency must be corrected.'}],
 teach:'Check dose and frequency together against the maximum daily dose. The Week 4 example prescription (slide 6, Station 7 example) multiplies out to 1,200 mg per dose; at every 6 hours that is 4,800 mg per day, and at every 4 hours it is 7,200 mg per day (6 doses times 1,200 mg, computed here). The ibuprofen maximum of 3.2 g per day is marked as a recall item on slide 6, and the instructor says it should be committed to memory (narration 07:45). Because this is a prescribing error, the fix is a call to the prescriber with a specific recommendation.',
 cite:'APC_III_Week_4_Slides.pdf slide 6; narration 05:27–07:45'},

{id:'w402', skill:'recall', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'week4', sub:'rxsafe', concept:'w4-max-daily-doses',
 tags:['Week 4','maximum dose','ibuprofen','acetaminophen'], source:'both',
 stem:'Slide 6 marks the maximum daily doses of ibuprofen and acetaminophen as recall items. For an adult with normal liver function in whom both drugs are clinically safe, which values are the maximum total daily doses? Select all that apply.',
 options:[
  {t:'Ibuprofen 3.2 g (3,200 mg) per day', correct:true, why:'The narration gives 3.2 g as the maximum for prescription ibuprofen dosing (07:15) and tells students to know it without looking it up (07:45). The same value is the limit used to show that 2 tablets of 600 mg every 6 hours (4,800 mg per day) is too much.'},
  {t:'Acetaminophen 4 g (4,000 mg) per day', correct:true, why:'The narration states the Tylenol maximum is 4 g when normal liver function is assumed (07:45). The qualifier matters because liver disease lowers the safe limit, so the number applies to the stated patient only.'},
  {t:'Ibuprofen 4.8 g (4,800 mg) per day', correct:false, why:'4,800 mg is the daily total produced by the flawed order of 2 tablets of 600 mg every 6 hours (narration 06:38), not an allowed maximum. It is higher than the 3.2 g limit, which is why that order needed a second change.'},
  {t:'Acetaminophen 3.2 g (3,200 mg) per day', correct:false, why:'3.2 g is the ibuprofen figure. Swapping the two numbers is the confusion the slide targets by asking for both maximums side by side; the acetaminophen maximum for a patient with normal liver function is 4 g.'}],
 teach:'Two numbers to know without Lexicomp or Micromedex: ibuprofen 3.2 g per day and acetaminophen 4 g per day for normal liver function (slide 6 star; narration 07:15 to 07:45). They are the quickest safety check on an order that combines a strength, a number of tablets and a frequency: multiply tablets by strength by doses per day, then compare with the maximum.',
 cite:'APC_III_Week_4_Slides.pdf slide 6; narration 07:15–07:45'},

{id:'w403', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'week4', sub:'rxsafe', concept:'w4-indication-in-directions',
 tags:['Week 4','label','indication','directions'], source:'both',
 stem:'The prescription reads ondansetron 4 mg by mouth every 6 hours as needed for nausea/vomiting. The label reads ondansetron 4 mg by mouth every 6 hours. What is the problem?',
 options:[
  {t:'The label drops “as needed for nausea/vomiting,” so it reads as scheduled dosing', correct:true, why:'When the indication is part of the sig, it is required on the label (slide 7). Without it the label reads as a scheduled dose every 6 hours, which takes away from the prescriber’s intent of taking it only when needed (narration 10:03 to 10:39).'},
  {t:'Nothing is wrong, because an indication is never required on any prescription label', correct:false, why:'The rule is narrower: an indication is not required when it is not part of the sig, as in lisinopril “for hypertension.” Here it is part of the directions, so omitting it is an error (slide 7, example 2).'},
  {t:'The label is correct as long as an auxiliary label says the medication is for nausea', correct:false, why:'An auxiliary label does not fix the directions. The label has to carry the prescriber’s direction that the tablet is as needed, because the patient follows the directions line and would otherwise take it on a fixed schedule.'},
  {t:'The 6-hour interval is the error and should be changed to every 8 hours on the label by the pharmacist', correct:false, why:'The interval matches the prescription. The only mismatch is the missing as-needed indication, and a pharmacist cannot change an interval on the label without a call to the prescriber.'}],
 teach:'Compare the indication with the directions. If the indication is only information (lisinopril 40 mg daily “for hypertension”), it is not required on the label and does not change how the patient takes the drug. If the indication defines when to take it (ondansetron 4 mg every 6 hours as needed for nausea/vomiting), it is part of the directions and must appear (slide 7; narration 08:28 to 10:39).',
 cite:'APC_III_Week_4_Slides.pdf slide 7; narration 08:28–10:39'},

{id:'w404', skill:'tell', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'week4', sub:'rxsafe', concept:'w4-label-additions',
 tags:['Week 4','label','prescriber intent'], source:'both',
 stem:'Which pairings of a prescription and its label wording are appropriate? Select all that apply.',
 options:[
  {t:'Prescribed lisinopril 40 mg by mouth daily; label reads lisinopril 40 mg by mouth daily for hypertension', correct:true, why:'The indication does not change how the patient takes the medication, so adding it is not wrong, although it is not required (slide 7, example 1; narration 09:02). The dose, route and frequency are unchanged.'},
  {t:'Prescribed Xarelto 20 mg by mouth daily; label reads Xarelto 20 mg by mouth daily with food', correct:true, why:'“With food” is an administration instruction that does not change the dose, route or frequency, and it completes the intent because rivaroxaban needs food for absorption (slide 8, example 1; narration 11:30). It is appropriate to add.'},
  {t:'Prescribed celecoxib 200 mg by mouth every 12 hours; label reads celecoxib 200 mg every 12 hours as needed for pain', correct:false, why:'Adding “as needed for pain” turns a scheduled order into an as-needed one, which changes the prescriber’s intent (slide 8, example 2; narration 12:29). Additions are only allowed when they do not take away from that intent.'},
  {t:'Prescribed ondansetron 4 mg every 6 hours as needed for nausea/vomiting; label reads ondansetron 4 mg every 6 hours', correct:false, why:'Here the indication is part of the directions, so dropping it makes the order look scheduled (slide 7, example 2). Omitting a direction is not an administration addition and is not acceptable.'}],
 teach:'Two tests decide a label wording. First, is the information part of the directions? If yes, it must be on the label. Second, does an addition take away from the prescriber’s intent? If not, it may be added (administration information such as with food); if it does (celecoxib scheduled changed to as needed), it is inappropriate (slides 7 and 8).',
 cite:'APC_III_Week_4_Slides.pdf slides 7, 8; narration 08:28–12:55'},

{id:'w405', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'week4', sub:'rxsafe', concept:'w4-control-letter-expiry',
 tags:['Week 4','controlled substances','expiration'], source:'both',
 stem:'A written prescription dated 8/24/2026 is presented on 1/12/2027 for pregabalin extended-release tablets. The stock bottle shows a C with the Roman numeral V. Assume the prescription is otherwise complete. Is it valid to fill?',
 options:[
  {t:'Yes, a C-V prescription is good for 6 months, so it is valid until 2/24/2027', correct:true, why:'The C and Roman numeral on the bottle give the schedule (slide 9; narration 12:55), and schedule III to V prescriptions expire 6 months after issuance (slide 11). 8/24/2026 plus 6 months is 2/24/2027, so 1/12/2027 is still within the window.'},
  {t:'No, a C-V prescription expires 30 days after issuance', correct:false, why:'The 30-day limit belongs to schedule II. Matching 30 days to the C-V bottle confuses the two limits, which slide 11 lists side by side (CIII–V 6 months, CII 30 days).'},
  {t:'Yes, because controlled prescriptions are valid for 1 year like other prescriptions', correct:false, why:'One year is the limit for dangerous drugs, not controlled substances (slide 11). Controlled-substance limits are shorter because the patient must be reassessed by the prescriber (narration 15:11).'},
  {t:'No, because C-V prescriptions must be filled within 3 months', correct:false, why:'The slide lists 6 months for schedule III to V. A 3-month limit is the footnote for mid-level practitioners in the Week 2 deck, which the stem does not state.'}],
 teach:'Read the schedule off the stock bottle (alprazolam C-IV, pregabalin extended-release C-V, OxyContin C-II on slide 9), then apply the category rules: dangerous drugs 1 year, CIII–V 6 months with up to 5 refills, CII 30 days with no refills (slide 11).',
 cite:'APC_III_Week_4_Slides.pdf slides 9, 11; narration 12:55–14:42'},

/* ---- dates ---------------------------------------------------------------- */
{id:'w406', skill:'error', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'week4', sub:'dates', concept:'w4-oxycodone-dates',
 tags:['Week 4','dates','CII','Use Before'], source:'both',
 stem:'Fill date 9/7/2026. Prescription dated 7/28/2026 for oxycodone extended-release 10 mg, 1 tablet every day as needed for cancer pain. The label Use Before date is 9/7/2027. The stock bottle shows EXP 12/2028. Which statements are correct? Select all that apply.',
 options:[
  {t:'The prescription is expired, because a CII prescription is good for 30 days and 41 days have passed', correct:true, why:'The C and Roman numeral II on the bottle mark a schedule II drug (slide 9), and CII prescriptions expire 30 days after issuance. 7/28 to 9/7 is 3 days left in July, 31 in August and 7 in September, which is 41 days (computed here), so the prescription cannot be filled (slide 13).'},
  {t:'The fill date of 9/7/2026 is correct, because the drug is dispensed on the day it is filled', correct:true, why:'Slide 13 states that the fill date is correct. The fill date records the day the prescription is filled, so it is not an error even though the prescription itself cannot be filled.'},
  {t:'The Use Before date of 9/7/2027 is correct, because one year after the fill date is earlier than the stock bottle date', correct:true, why:'Medications removed from a stock bottle are labeled one year after the fill date or the stock bottle expiration if that is earlier (slide 14). One year is 9/7/2027, earlier than 12/2028, so the label date is correct (slide 13).'},
  {t:'The Use Before date should be 12/2028, because the stock bottle expires then', correct:false, why:'12/2028 applies to the tablets while they are in the sealed stock bottle (narration 18:22). Once removed into the vial, the label uses one year from fill, 9/7/2027, because that is earlier.'},
  {t:'The Use Before date is wrong, because a CII label must show 30 days', correct:false, why:'The 30-day limit is the legal prescription expiration for CII, not the stability date on the label. Mixing the two is the confusion slide 12 separates (legality versus stability).'}],
 teach:'Check three dates separately. The prescription expiration (legality, set by drug category) is 30 days for CII, so 7/28 to 9/7 is too long. The fill date is the day you fill. The Use Before date (stability) is one year after the fill date or the stock bottle date, whichever is earlier (slides 12 to 14). Only the prescription is wrong in this example.',
 cite:'APC_III_Week_4_Slides.pdf slides 9, 12, 13, 14; narration 16:58–19:03'},

{id:'w407', skill:'tell', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'week4', sub:'dates', concept:'w4-legality-vs-stability',
 tags:['Week 4','dates','Use Before','prescription expiration'], source:'both',
 stem:'Which statements correctly separate the prescription expiration from the Use Before (beyond use) date? Select all that apply.',
 options:[
  {t:'Prescription expiration is about legality and is set by the drug category', correct:true, why:'Slide 12 gives “prescription expiration = legality,” answering how long the prescription is legal to fill and when the patient must be reassessed, determined by drug category (narration 15:11, 16:17).'},
  {t:'Use Before date is about stability and is set by the stock bottle expiration or the compounded product’s stability', correct:true, why:'Slide 12 gives “Use Before/Beyond Use date = stability,” the time a medication can last outside its stock bottle and still be safe, determined by the stock bottle or compounded product stability (narration 16:17 to 16:51).'},
  {t:'Controlled prescriptions have shorter expirations because those drugs carry a risk of dependence and the patient is reassessed', correct:true, why:'The narration gives this reason for the 6-month CIII–V and 30-day CII limits (15:11 to 15:44). It explains why the category, not the product, sets the legal expiration. The reason comes from the narration; the categories are the written part.'},
  {t:'The Use Before date is set by the drug category', correct:false, why:'The category determines the prescription expiration. The Use Before date is determined by the stock bottle or compounded product stability, so this swaps the two.'},
  {t:'A prescription is still legal to fill after its expiration if the stock bottle has not expired', correct:false, why:'The two dates answer different questions. A fresh stock bottle date does not extend the legality of an expired prescription, as the oxycodone example on slide 13 shows.'}],
 teach:'Prescription expiration is the legal question and depends on the drug category; the Use Before date is the stability question and depends on the stock bottle or the compounded product. They are independent: the example on slide 13 has an expired prescription with a correct Use Before date.',
 cite:'APC_III_Week_4_Slides.pdf slide 12; narration 14:42–16:58'},

{id:'w408', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'week4', sub:'dates', concept:'w4-augmentin-discard',
 tags:['Week 4','Use Before','suspension'], source:'both',
 stem:'Augmentin powder for oral suspension has a stock bottle expiration of 12/2028 and is mixed with water in the pharmacy on 9/7/2026. The manufacturer’s label says to discard after 10 days. What Use Before date belongs on the label?',
 options:[
  {t:'9/17/2026, 10 days after mixing', correct:true, why:'For a product that is prepared in the pharmacy, the label directions govern: discard 10 days after mixing (slide 14; narration 20:03). 9/7/2026 plus 10 days is 9/17/2026, because September has 30 days and 7 plus 10 is 17.'},
  {t:'9/7/2027, one year after the fill date', correct:false, why:'One year applies to dry products removed from a stock bottle. Once water is added, the product has different stability, and compounded products follow their own individual directions.'},
  {t:'12/2028, the stock bottle expiration', correct:false, why:'The stock bottle date applies to the untouched powder (narration 19:30 to 20:03). As soon as water touches it, it becomes a different drug in front of the pharmacist.'},
  {t:'9/14/2026, 7 days after mixing', correct:false, why:'The label directions say discard after 10 days. Seven days is not given for this product, so choosing it substitutes a different duration.'}],
 teach:'For medications removed from a stock bottle, use one year or the stock expiration if earlier. For compounded or reconstituted products, follow the product’s own directions: Augmentin suspension is discarded 10 days after mixing (slide 14).',
 cite:'APC_III_Week_4_Slides.pdf slide 14; narration 19:03–20:15'},

/* ---- SBAR call ------------------------------------------------------------ */
{id:'w409', skill:'recall', prof:'Dr. Lahoud', type:'match', tier:'new', topic:'week4', sub:'sbarcall', concept:'w4-sbar-example-sort',
 tags:['Week 4','SBAR'], source:'both',
 stem:'Match each statement from the example SBAR call about the lisinopril prescription to its SBAR component.',
 left:['I am reviewing a lisinopril prescription for your patient, Michael Scott, DOB 3/15/1964.','The prescription was written for 20 mg tablets, 1 tablet by mouth twice daily. The maximum frequency for lisinopril is once daily.','Therefore, the frequency as prescribed is too high.','I recommend decreasing the frequency to lisinopril 20 mg by mouth once daily.'],
 right:['Situation','Background','Assessment','Recommendation'],
 pairs:[
  {l:'I am reviewing a lisinopril prescription for your patient, Michael Scott, DOB 3/15/1964.', r:'Situation', why:'The situation states the reason for the call with two patient identifiers (slide 18, task 3; example on slide 20).'},
  {l:'The prescription was written for 20 mg tablets, 1 tablet by mouth twice daily. The maximum frequency for lisinopril is once daily.', r:'Background', why:'The background gives the prescription and the relevant clinical fact, here the maximum frequency (slide 20; slide 16: clinical facts surrounding the problem).'},
  {l:'Therefore, the frequency as prescribed is too high.', r:'Assessment', why:'The assessment states what the pharmacist thinks the problem is. The word therefore shows it follows from the background (slide 20).'},
  {l:'I recommend decreasing the frequency to lisinopril 20 mg by mouth once daily.', r:'Recommendation', why:'The recommendation is the specific fix (slide 18, task 6; slide 20).'}],
 teach:'On slide 16 the four components are marked as a recall item. In the slide 20 example the background holds the facts (the order and the maximum frequency) and the assessment is the one-sentence conclusion. The narration stresses practicing the assessment because students tend to skip it (23:06).',
 cite:'APC_III_Week_4_Slides.pdf slides 16, 18, 20; narration 23:57–24:48'},

{id:'w410', skill:'recall', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'week4', sub:'sbarcall', concept:'w4-sbar-tasks',
 tags:['Week 4','SBAR','communication'], source:'both',
 stem:'When calling a prescriber about a prescribing error, which tasks are part of the call? Select all that apply.',
 options:[
  {t:'Introduce yourself and your role', correct:true, why:'Task 1 on slide 18. The provider does not know who is calling, so naming yourself and your role comes first (narration 22:37).'},
  {t:'Verify that you are speaking to the correct provider', correct:true, why:'Task 2 on slide 18. The example opens with “Is this Dr. John Johnson?” before any patient information is shared (slide 20).'},
  {t:'Give two patient identifiers and a brief reason for calling', correct:true, why:'Task 3 on slide 18: the situation includes two patient identifiers (in the example, name and date of birth) and why you are calling.'},
  {t:'Ask the provider whether they have questions, address them, and thank them for their time', correct:true, why:'Tasks 7 and 8 on slide 18. The example ends with “What questions do you have about my recommendation?” and a thank you.'},
  {t:'State your recommendation first and explain the background afterwards', correct:false, why:'The order is situation, background, assessment, then recommendation (slide 18, tasks 3 to 6). Starting with the recommendation skips the facts the prescriber needs.'},
  {t:'Leave out your assessment when the background makes the problem obvious', correct:false, why:'The assessment is a required task (task 5), and the narration singles it out because students skip it (23:06). The slide marks it with a star.'}],
 teach:'The eight tasks on slide 18, in order: introduce yourself and role; verify the provider; situation with two patient identifiers and a brief reason; background; assessment; a specific recommendation; ask for questions; thank them.',
 cite:'APC_III_Week_4_Slides.pdf slides 18, 20; narration 22:37–23:35'},

{id:'w411', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'week4', sub:'sbarcall', concept:'w4-sbar-call-flaw',
 tags:['Week 4','SBAR','communication'], source:'both',
 stem:'A student calls a clinic and says, “Your lisinopril 20 mg prescription for Michael Scott, date of birth 3/15/1964, says twice daily. The maximum is once daily, so the frequency is too high. I recommend once daily. Any questions?” Which required task is missing?',
 options:[
  {t:'The student never gives their name and role or checks who answered the phone', correct:true, why:'Tasks 1 and 2 on slide 18 come before the situation. The call begins with the patient and the problem, so the provider does not know who is calling and the identity of the listener is not checked.'},
  {t:'The student gives no specific recommendation for fixing the problem that was found', correct:false, why:'A recommendation is present: “I recommend once daily.” It is specific, which is what task 6 requires.'},
  {t:'The student gives no assessment of what the problem is in the order', correct:false, why:'The statement that the frequency is too high is the assessment, and it follows the background fact about the maximum frequency, so task 5 is met.'},
  {t:'The student gives only one patient identifier for the patient involved', correct:false, why:'The student gives the patient’s name and date of birth, which are the two identifiers the situation requires (slide 18, task 3).'}],
 teach:'Use slide 18 as a checklist. The structure of the call can be correct and still miss the opening: introduce yourself and role, then verify the provider (tasks 1 and 2), before stating the situation.',
 cite:'APC_III_Week_4_Slides.pdf slides 18, 20; narration 22:37–23:35'},

{id:'w412', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'week4', sub:'sbarcall', concept:'w4-lisinopril-bid-error',
 tags:['Week 4','SBAR','error types','lisinopril'], source:'both',
 stem:'A prescription reads lisinopril 20 mg tablets, QTY 30, take 1 tablet by mouth twice daily, written by Dr. Johnson with all other information complete. The label and bottle match the order. What is the error type, and what is the resolution?',
 options:[
  {t:'A prescribing error (frequency too high): call the provider to recommend a change', correct:true, why:'Slide 19 labels this prescribing error, frequency too high, and the resolution is to contact the provider (narration 22:05 to 22:31). Lisinopril is FDA approved as a once-daily medication, so twice daily exceeds the maximum frequency.'},
  {t:'A transcribing error: correct the prescription in the pharmacy system and regenerate the label', correct:false, why:'A transcribing error means the order was entered incorrectly. Here the label matches the order, so the mistake started with the prescriber and the pharmacy system holds what was written.'},
  {t:'A dispensing error: replace the product and relabel before dispensing', correct:false, why:'A dispensing error involves the wrong product, strength, quantity or date at filling. The product matches the order, so the dispensing step is not the source.'},
  {t:'No error: 20 mg is a normal strength, so the order can be dispensed as written', correct:false, why:'The strength is acceptable, but the frequency is not. Safety review includes maximum doses and frequency (slide 6), so the order must not be dispensed as written.'}],
 teach:'Match the error to the step where it started and fix it there. Prescribing errors (frequency, dose, quantity, refills, missing DEA number) are corrected by contacting the prescriber. The Week 4 example (slides 17 to 20) is lisinopril 20 mg twice daily, a prescribing error because the maximum frequency is once daily.',
 cite:'APC_III_Week_4_Slides.pdf slides 17, 19; narration 21:41–22:31'}
);

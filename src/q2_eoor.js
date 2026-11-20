/* ==========================================================================
   Week 2 lab: errors and omissions (EOOR). Source: EOOR-Answer-Key.pdf (13
   stations; the key gives each error and its correction, not the prescription
   images), with the error types and corrections from Intro-to-Dispensing.pdf
   slides 38-39. Two key entries are marked "this was not keyed" (station 6 and
   station 10, "incorrect drug entered/transcribed") and are left out.
   Second block: the drugs in TOSCE-Study-Guide.pdf page 2.
   ========================================================================== */
QUESTIONS.push(
{id:'e01', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-hydralazine',
 tags:['EOOR'], source:'slide',
 stem:'A prescription for hydroxyzine was filled with hydralazine. What is the error, and how is it corrected?',
 options:[
  {t:'Incorrect drug filled; get the correct stock bottle and reverify', correct:true, why:'EOOR key, station 1: filled with hydralazine instead of hydroxyzine; work with the technician to obtain the correct stock bottle and reverify.'},
  {t:'Incorrect drug entered; correct the system entry', correct:false, why:'The system entry was right; the wrong bottle was used (EOOR key, station 1).'},
  {t:'Prescribing error; call the prescriber', correct:false, why:'The prescription was correct (EOOR key, station 1).'},
  {t:'No error; the names are equivalent', correct:false, why:'Hydralazine and hydroxyzine are different drugs; the key lists this as an error.'}],
 teach:'Incorrect drug filled is a dispensing error, fixed by getting the right stock bottle and reverifying the product.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slide 38'},

{id:'e02', skill:'error', dupOf:'d42', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'type-sig',
 tags:['EOOR'], source:'slide',
 stem:'A prescription says “daily,” but the label says “BID.” What is the correction?',
 options:[
  {t:'Work with the technician to correct the label directions', correct:true, why:'EOOR key, station 2: directions transcribed incorrectly onto the label; correct the directions to match the prescribed frequency.'},
  {t:'Call the prescriber to confirm the frequency', correct:false, why:'The prescription is clear; the error is in the transcription (EOOR key, station 2).'},
  {t:'Replace the stock bottle', correct:false, why:'The product is correct; the label is wrong (EOOR key, station 2).'},
  {t:'Counsel the patient to take it as labeled', correct:false, why:'The label must match the prescription (EOOR key, station 2).'}],
 teach:'Directions transcribed incorrectly onto the label are a transcribing error, corrected with the technician and reverified.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slide 39'},

{id:'e03', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-brand-generic',
 tags:['EOOR','substitution'], source:'slide',
 stem:'The prescription is marked brand medically necessary, but the vial holds the generic. What is the error?',
 options:[
  {t:'Incorrect drug filled', correct:true, why:'EOOR key, station 2: brand medically necessary, but generic is used; get the correct stock bottle and reverify.'},
  {t:'Directions transcribed incorrectly', correct:false, why:'The directions are not the issue in this error (EOOR key, station 2).'},
  {t:'Incorrect strength filled', correct:false, why:'The strength is not stated as the problem; the product is generic rather than brand (EOOR key, station 2).'},
  {t:'No error; generics may always substitute', correct:false, why:'A valid brand necessary request prevents substitution (slide 24).'}],
 teach:'When the prescriber has validly required the brand, filling the generic is a dispensing error (incorrect drug filled).',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slide 24'},

{id:'e04', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-ss-ds',
 tags:['EOOR'], source:'slide',
 stem:'A prescription is written for the double-strength (DS) product, but the single-strength (SS) product fills the vial. What is the error?',
 options:[
  {t:'Incorrect strength or concentration filled', correct:true, why:'EOOR key, station 3: SS used to fill instead of DS; get the correct stock bottle and reverify.'},
  {t:'Incorrect formulation filled', correct:false, why:'Formulation means tablet versus capsule or IR versus ER (slide 36); this is a strength difference.'},
  {t:'Insufficient quantity filled', correct:false, why:'The quantity is not the problem here (EOOR key, station 3).'},
  {t:'Prescribed dose too low', correct:false, why:'The prescriber wrote DS; the error is in what was filled (EOOR key, station 3).'}],
 teach:'Strength mix-ups such as SS versus DS are dispensing errors: incorrect strength or concentration filled.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slides 36, 38'},

{id:'e05', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-wrong-patient',
 tags:['EOOR'], source:'slide',
 stem:'The prescription is for Bill Williams, but Jennifer Williams was selected in the pharmacy system. What is the correction?',
 options:[
  {t:'Work with the technician to process the correct patient and reverify', correct:true, why:'EOOR key, station 4: incorrect patient selected/processed.'},
  {t:'Call the prescriber to confirm the patient', correct:false, why:'The prescription names Bill Williams; the error is in the pharmacy entry (EOOR key, station 4).'},
  {t:'Fill the prescription and label it for Bill', correct:false, why:'The patient profile must be corrected so the record and label match (EOOR key, station 4).'},
  {t:'Counsel the patient about the mix-up', correct:false, why:'The wrong patient was processed; the correction is to process the right one (EOOR key, station 4).'}],
 teach:'Incorrect patient selected is fixed with the technician, who processes the correct patient; the pharmacist then reverifies.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slide 38'},

{id:'e06', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-refills-label',
 tags:['EOOR'], source:'slide',
 stem:'The prescription says 2 refills, but the label says 3. What type of error is this?',
 options:[
  {t:'Transcribing error', correct:true, why:'EOOR key, station 4: number of refills transcribed incorrectly onto the label; slide 38 lists it under transcribing.'},
  {t:'Prescribing error', correct:false, why:'The prescriber wrote 2 refills; the system entry differs (EOOR key, station 4).'},
  {t:'Dispensing error', correct:false, why:'The product is not the problem (EOOR key, station 4).'},
  {t:'No error; refills may differ', correct:false, why:'The label must match the prescription (slide 34, item 5).'}],
 teach:'Refills are verified in the transcription step: as prescribed.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slides 34, 38'},

{id:'e07', skill:'error', dupOf:'d25', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'fix', concept:'eoor-ciiv-expired',
 tags:['EOOR','controlled'], source:'slide',
 stem:'A physician wrote a CIII–V prescription more than 6 months ago. What is the correction?',
 options:[
  {t:'Contact the prescriber for a new prescription', correct:true, why:'EOOR key, station 6: expired, more than 6 months for CIII–V; contact the prescriber for a new prescription.'},
  {t:'Work with the technician to relabel', correct:false, why:'A technician cannot revive an expired script; the prescriber must issue a new one (EOOR key, station 6).'},
  {t:'Fill it with the old date', correct:false, why:'It is expired after 6 months (slide 22).'},
  {t:'Refill it once and counsel', correct:false, why:'An expired prescription cannot be refilled (slide 22).'}],
 teach:'CIII–V scripts expire 6 months after issue. An expired prescription is a prescribing error; call the prescriber.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slide 22'},

{id:'e08', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'fix', concept:'eoor-dea-missing',
 tags:['EOOR','controlled'], source:'slide',
 stem:'A controlled substance prescription has no DEA number. What is the correction?',
 options:[
  {t:'Contact the prescriber for the DEA number', correct:true, why:'EOOR key, stations 6 and 13: DEA number required but missing; contact the prescriber.'},
  {t:'Look up the DEA number and add it yourself', correct:false, why:'The key’s correction is to contact the prescriber.'},
  {t:'Fill it; the PMR holds the DEA number', correct:false, why:'The PMR exception applies only to patient address and birth date on dangerous drugs (slide 16).'},
  {t:'Work with the technician to relabel', correct:false, why:'A missing DEA number is a prescribing error, resolved by the prescriber (slide 38).'}],
 teach:'DEA number required but missing is a prescribing error; contact the prescriber.',
 cite:'EOOR-Answer-Key.pdf slides 1–2; Intro-to-Dispensing.pdf slides 16, 38'},

{id:'e09', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-strength',
 tags:['EOOR'], source:'slide',
 stem:'The prescription is for 0.5 mg, but the vial holds 1 mg tablets. What is the error?',
 options:[
  {t:'Incorrect strength or concentration filled', correct:true, why:'EOOR key, station 6: 0.5 mg on prescription, filled with 1 mg; obtain the correct stock bottle and reverify.'},
  {t:'Incorrect formulation filled', correct:false, why:'Formulation is tablet versus capsule or IR versus ER (slide 36).'},
  {t:'Prescribed dose too high', correct:false, why:'The prescription says 0.5 mg; the filled product is different (EOOR key, station 6).'},
  {t:'Directions transcribed incorrectly', correct:false, why:'The strength was filled wrongly; directions are not stated as the issue.'}],
 teach:'Filling a different strength than prescribed is a dispensing error, fixed by getting the right stock bottle.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slide 38'},

{id:'e10', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'fix', concept:'eoor-dose-high',
 tags:['EOOR','safety'], source:'slide',
 stem:'As prescribed, a patient could take 7200 mg daily, and the maximum is 3200 mg/day. What type of error is this, and what is the action?',
 options:[
  {t:'Prescribing error; contact the prescriber with a recommendation', correct:true, why:'EOOR key, station 7: dose/frequency too high; contact the prescriber with a new recommendation.'},
  {t:'Dispensing error; replace the product', correct:false, why:'The prescription itself is unsafe; the product is not the problem (EOOR key, station 7).'},
  {t:'Transcribing error; correct the label', correct:false, why:'The label matches the prescription; the prescription is the problem (EOOR key, station 7).'},
  {t:'No error; dispense and counsel', correct:false, why:'A dose above the maximum is not safe to dispense (slide 38).'}],
 teach:'Prescribed dose or frequency too high or too low is a prescribing error; (T) safety is checked in Lexicomp or Micromedex. Call the prescriber and recommend a safe dose.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slide 38; 8/24 transcript (T)'},

{id:'e11', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'fix', concept:'eoor-dangerous-expired',
 tags:['EOOR'], source:'slide',
 stem:'A prescription for a dangerous drug was issued more than 12 months ago. What is the correction?',
 options:[
  {t:'Call the prescriber for a new prescription', correct:true, why:'EOOR key, station 8: expired, more than 12 months for a dangerous drug.'},
  {t:'Refill it because dangerous drugs have no refill limit', correct:false, why:'No refill limit does not extend the 1-year script expiration (slide 22).'},
  {t:'Work with the technician to relabel', correct:false, why:'The script itself is expired (EOOR key, station 8).'},
  {t:'Dispense a 30-day supply', correct:false, why:'An expired script cannot be filled in any quantity (slide 22).'}],
 teach:'Dangerous-drug scripts expire 1 year after issue; an expired one needs a new prescription.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slide 22'},

{id:'e12', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-xarelto',
 tags:['EOOR','LASA'], source:'slide',
 stem:'Xarelto is prescribed, but apixaban was filled. What is the correction?',
 options:[
  {t:'Get the correct stock bottle and reverify', correct:true, why:'EOOR key, station 8: filled with apixaban instead of Xarelto; work with the technician.'},
  {t:'Call the prescriber to approve apixaban', correct:false, why:'The key treats it as a filling error, not a prescriber decision (EOOR key, station 8).'},
  {t:'Correct the label to read apixaban', correct:false, why:'The label matched the prescription; the wrong product was filled (EOOR key, station 8).'},
  {t:'Counsel the patient on both drugs', correct:false, why:'The error must be corrected before dispensing (slide 39).'}],
 teach:'Incorrect drug filled is a dispensing error: replace the product and relabel before dispensing.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slide 39'},

{id:'e13', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-quantity-filled',
 tags:['EOOR'], source:'slide',
 stem:'A liquid prescription is written for 75 mL, but 60 mL was dispensed. What is the error?',
 options:[
  {t:'Insufficient quantity filled', correct:true, why:'EOOR key, station 9: 60 mL dispensed when 75 mL is needed; a dispensing error (slide 38).'},
  {t:'Insufficient quantity prescribed', correct:false, why:'That is a prescribing error (slide 38); the key lists insufficient quantity filled (EOOR key, station 9).'},
  {t:'Incorrect strength filled', correct:false, why:'The concentration is not the issue (EOOR key, station 9).'},
  {t:'Incorrect formulation filled', correct:false, why:'The formulation is not the issue (EOOR key, station 9).'}],
 teach:'Distinguish insufficient quantity prescribed (prescribing error, call the prescriber) from insufficient quantity filled (dispensing error, fill the right amount).',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slide 38'},

{id:'e14', skill:'error', dupOf:'d44', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-ir-er',
 tags:['EOOR'], source:'slide',
 stem:'The prescription calls for an extended-release (ER) product, but the product filled is immediate release (IR). What is the correction?',
 options:[
  {t:'Work with the technician to fill the correct formulation', correct:true, why:'EOOR key, station 10: incorrect formulation filled, IR instead of ER; work with the technician.'},
  {t:'Call the prescriber to change to IR', correct:false, why:'The prescriber ordered ER; the pharmacy filled the wrong product (EOOR key, station 10).'},
  {t:'Relabel the IR product as ER', correct:false, why:'The product itself is wrong; relabeling does not fix it (slide 39).'},
  {t:'Counsel the patient to take it more often', correct:false, why:'This changes therapy without a prescriber; the error must be corrected (slide 39).'}],
 teach:'ER versus IR is part of product verification (formulation). The fix for a wrong formulation is to replace the product.',
 cite:'EOOR-Answer-Key.pdf slide 1; Intro-to-Dispensing.pdf slides 36, 39'},

{id:'e15', skill:'error', dupOf:'d34', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-use-before',
 tags:['EOOR','label date'], source:'slide',
 stem:'The stock bottle expires 1/2027 and the label’s “Use Before” date is incorrect. What date belongs on the label, if one year after fill is later?',
 options:[
  {t:'1/31/2027', correct:true, why:'EOOR key, station 10: bottle expires 1/2027, so the expiration should be 1/31/2027.'},
  {t:'1/1/2027', correct:false, why:'The key uses the last day of the month, not the first (EOOR key, station 10).'},
  {t:'1/15/2027', correct:false, why:'A mid-month date is not the stock expiration (EOOR key, station 10).'},
  {t:'12/31/2026', correct:false, why:'This is the end of the month before; the bottle is good through 1/2027 (EOOR key, station 10).'}],
 teach:'The use-before date is the earlier of one year after fill and the stock bottle’s expiration; a stock date given as month and year runs to the end of that month.',
 cite:'EOOR-Answer-Key.pdf slide 2; Intro-to-Dispensing.pdf slide 25'},

{id:'e16', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-prn-reason',
 tags:['EOOR'], source:'slide',
 stem:'The prescription reads “every 6 hours as needed for pain,” but the label omits the reason for as-needed use. What type of error is this?',
 options:[
  {t:'Transcribing error; correct the directions', correct:true, why:'EOOR key, station 12: label does not indicate the prn reason; directions transcribed incorrectly onto the label.'},
  {t:'Prescribing error; call the prescriber', correct:false, why:'The prescription states the reason; the label dropped it (EOOR key, station 12).'},
  {t:'Dispensing error; replace the product', correct:false, why:'The product is not the problem (EOOR key, station 12).'},
  {t:'No error; the label is acceptable', correct:false, why:'The key lists this as an error (station 12).'}],
 teach:'The sig is checked as prescribed, including the as-needed reason. Missing parts of the sig are a transcribing error.',
 cite:'EOOR-Answer-Key.pdf slide 2; Intro-to-Dispensing.pdf slide 38'},

{id:'e17', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'spot', concept:'eoor-product-expired',
 tags:['EOOR'], source:'slide',
 stem:'The prescription is valid, but the stock bottle used to fill it is past its expiration date. What is the correction?',
 options:[
  {t:'Work with the technician to get a fresh bottle', correct:true, why:'EOOR key, station 12: product used for dispensing is expired; get a fresh bottle.'},
  {t:'Call the prescriber for a new prescription', correct:false, why:'The prescription is not expired; the product is (EOOR key, station 12).'},
  {t:'Relabel with the stock expiration date', correct:false, why:'An expired product cannot be dispensed (slide 38).'},
  {t:'Dispense it with a counseling note', correct:false, why:'Counseling does not make an expired product safe (slide 38).'}],
 teach:'Product used for dispensing is expired is a dispensing error. It differs from an expired prescription, which is a prescribing error.',
 cite:'EOOR-Answer-Key.pdf slide 2; Intro-to-Dispensing.pdf slide 38'},

{id:'e18', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'fix', concept:'eoor-cii-expired',
 tags:['EOOR','CII'], source:'slide',
 stem:'A CII prescription was written more than a month ago. What is the correction?',
 options:[
  {t:'Contact the prescriber for a new prescription', correct:true, why:'EOOR key, station 13: expired, more than 1 month for CIIs. Slide 22 gives the CII period as 30 days.'},
  {t:'Fill it with one refill', correct:false, why:'CII scripts have no refills (slide 22).'},
  {t:'Work with the technician to relabel', correct:false, why:'A relabel does not make an expired script valid (EOOR key, station 13).'},
  {t:'Fill it if the patient presents the original', correct:false, why:'Possession of the paper does not extend the 30-day expiration (slide 22).'}],
 teach:'CII scripts expire after 30 days. The key words this as more than 1 month; slide 22 states 30 days.',
 cite:'EOOR-Answer-Key.pdf slide 2; Intro-to-Dispensing.pdf slide 22'},

{id:'e19', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'fix', concept:'eoor-cii-refills',
 tags:['EOOR','CII'], source:'slide',
 stem:'A CII prescription lists refills. What is the error and the action?',
 options:[
  {t:'Inappropriate number of refills; call the provider', correct:true, why:'EOOR key, station 13: CII cannot have refills; call the provider.'},
  {t:'Transcribing error; correct the label', correct:false, why:'The refills are on the prescription itself (EOOR key, station 13).'},
  {t:'Dispensing error; replace the product', correct:false, why:'The product is not the problem (EOOR key, station 13).'},
  {t:'No error; refills are limited to 5', correct:false, why:'Five refills is the CIII–V limit; CII allows 0 (slide 22).'}],
 teach:'CII prescriptions allow 0 refills. A prescribed refill on a CII is a prescribing error, resolved by calling the provider.',
 cite:'EOOR-Answer-Key.pdf slide 2; Intro-to-Dispensing.pdf slide 22'},

{id:'e20', skill:'error', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'eoor', sub:'fix', concept:'eoor-work-with-tech',
 tags:['EOOR'], source:'slide',
 stem:'Which of these errors are corrected by working with the technician? Select all that apply.',
 options:[
  {t:'Incorrect drug filled', correct:true, why:'EOOR key, stations 1, 2, 8.'},
  {t:'Incorrect patient processed', correct:true, why:'EOOR key, station 4.'},
  {t:'Number of refills transcribed wrongly onto the label', correct:true, why:'EOOR key, station 4.'},
  {t:'Product used is expired', correct:true, why:'EOOR key, station 12.'},
  {t:'The DEA number is missing', correct:false, why:'Contact the prescriber (EOOR key, stations 6, 13).'},
  {t:'A CII has refills', correct:false, why:'Call the provider (EOOR key, station 13).'}],
 teach:'In the key, filling and transcribing errors are fixed with the technician; prescribing errors (expired prescriptions, dose, missing DEA number, refills on a CII) go to the prescriber.',
 cite:'EOOR-Answer-Key.pdf slides 1–2'},

/* ---- the drugs in the TOSCE study guide ------------------------------- */
{id:'e21', skill:'recall', type:'match', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'drugs', concept:'tosce-brand-generic',
 tags:['brand','generic','TOSCE'], source:'slide',
 stem:'Match each brand name from the TOSCE medication list to its generic.',
 left:'Brand', right:'Generic',
 pairs:[
  {l:'Prozac', r:'fluoxetine', why:'TOSCE guide, medication list.'},
  {l:'Xarelto', r:'rivaroxaban', why:'TOSCE guide, medication list.'},
  {l:'Lexapro', r:'escitalopram', why:'TOSCE guide, medication list.'},
  {l:'Lipitor', r:'atorvastatin', why:'TOSCE guide, medication list.'},
  {l:'Norvasc', r:'amlodipine', why:'TOSCE guide, medication list.'},
  {l:'Bactrim', r:'sulfamethoxazole/trimethoprim', why:'TOSCE guide, medication list.'}],
 teach:'The TOSCE guide names these drugs as the medications encountered in lab from the BDK list.',
 cite:'TOSCE-Study-Guide.pdf slide 2'},

{id:'e22', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'eoor', sub:'drugs', concept:'tosce-scope',
 tags:['TOSCE'], source:'slide', lowYield:true,
 stem:'How is the TOSCE station on a prescription error carried out?',
 options:[
  {t:'SBAR communication with a provider', correct:true, why:'TOSCE guide: two stations involve SBAR with a healthcare provider about a prescription error.'},
  {t:'Counseling a patient on an OTC product', correct:false, why:'The third station is POCT (blood pressure or pulse) with counseling, not an error station.'},
  {t:'A written exam on the error types', correct:false, why:'The stations are interactions of up to 9 minutes (TOSCE guide).'},
  {t:'Speaking with a provider with no preparation', correct:false, why:'Students get at least 1 minute to review the case first (TOSCE guide).'}],
 teach:'The TOSCE has 3 stations: two with SBAR communication with a healthcare provider about a prescription error and one POCT station with counseling.',
 cite:'TOSCE-Study-Guide.pdf slide 1'}
);

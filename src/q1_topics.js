/* ==========================================================================
   TOPICS and the Week 2 question file: Dr. Lahoud, Intro to Dispensing (8/24).
   Sources: Intro-to-Dispensing.pdf (deck), the 8/24 transcript marked (T), and
   for the error key EOOR-Answer-Key.pdf (q2_eoor.js).
   ========================================================================== */
const TOPICS = [
 {id:'starl', name:'★ Likely on the exam: Dr. Lahoud', prof:'Dr. Lahoud', open:true, cite:'Intro-to-Dispensing.pdf, EOOR-Answer-Key.pdf and the Week 14 DEENT lab', subs:[
  {id:'rx', name:'Prescription review and errors', cite:'Intro-to-Dispensing.pdf slides 29–39, 43–44; EOOR-Answer-Key.pdf'},
  {id:'law', name:'Requirements, refills, expiration', cite:'Intro-to-Dispensing.pdf slides 15–27'},
  {id:'deent', name:'DEENT lab', cite:'DEENT-Lab-Deck.pdf, Patel and Lam decks, Ophthalmic-Review-Key.pdf'}]},
 {id:'starp', name:'★ Likely on the exam: Dr. Parsons', prof:'Dr. Parsons', open:true, cite:'OTC, POCT and immunization decks and the AAFP schedule', subs:[
  {id:'otc', name:'OTC self-care', cite:'OTC-Insect-Bites-Pediculosis.pdf slides 8–10, 14–34; APhA-Insect-Excerpt.pdf'},
  {id:'poct', name:'Physical assessment and POCT', cite:'POCT-Physical-Assessment.pdf slides 30–58'},
  {id:'imm', name:'Immunizations', cite:'Immunizations-Pre-Lab.pdf; AAFP-Adult-Schedule-2026.pdf; 9/21 transcript'}]},
 {id:'sbarl', name:'Practice: SBAR for prescription errors', prof:'Dr. Lahoud', open:false, cite:'Week 11 OSCE review; EOOR answer key; Intro to Dispensing slides 16–39', subs:[
  {id:'sort', name:'Sort the sentences of the call', cite:'APC-III-Week-11-OSCE-Prep_2026.pdf (SBAR review: components; Background vs Assessment)'},
  {id:'flaw', name:'Spot the flaw in a written SBAR', cite:'APC-III-Week-11-OSCE-Prep_2026.pdf; Intro-to-Dispensing.pdf slide 39'},
  {id:'case', name:'Case reasoning: error, owner and complete SBAR', cite:'EOOR-Answer-Key.pdf; Intro-to-Dispensing.pdf slides 18–22, 27, 38–39'}]},
 {id:'sbarp', name:'Practice: SBAR for vaccine recommendations', prof:'Dr. Parsons', open:false, cite:'Immunizations-Pre-Lab.pdf slides 20–23; 9/21 transcript; AAFP 2026 schedule', subs:[
  {id:'sort', name:'Sort the vaccine SBAR', cite:'Immunizations-Pre-Lab.pdf slides 20–22; 9/21 transcript (T)'},
  {id:'rec', name:'Assessment and recommendation from the AAFP tables', cite:'AAFP-Adult-Schedule-2026.pdf Table 2, Notes and Appendix'}]},
 {id:'aafpcase', name:'Practice: read the AAFP chart', prof:'Dr. Parsons', open:false, cite:'AAFP-Adult-Schedule-2026.pdf Tables 1 and 2 and Appendix', subs:[
  {id:'t1', name:'Table 1: by age', cite:'AAFP-Adult-Schedule-2026.pdf Table 1 (page 2)'},
  {id:'t2', name:'Table 2: by condition', cite:'AAFP-Adult-Schedule-2026.pdf Table 2 (page 3)'},
  {id:'app', name:'Appendix: contraindications and precautions', cite:'AAFP-Adult-Schedule-2026.pdf Appendix (pages 9–10)'}]},
 {id:'deentapply', name:'Practice: DEENT lab cases', prof:'Dr. Lahoud', open:false, cite:'Patel acne and scaly dermatoses decks; Lam ophthalmic disorders and glaucoma decks', subs:[
  {id:'acne', name:'Acne: grade, product, prescription review', cite:'Patel_Acne-Therapeutics-Student.pdf slides 8, 23, 24, 25, 27, 31'},
  {id:'scaly', name:'Psoriasis and scaly dermatoses', cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 6, 7, 12, 16, 26, 31, 32, 35, 36'},
  {id:'eye', name:'Ophthalmic: self-care and conjunctivitis', cite:'Lam_OphthalmicDisorders.pdf slides 11, 28, 29'},
  {id:'glau', name:'Glaucoma: drug choice and review', cite:'Lam_Glaucoma.pdf slides 32, 34, 44, 69, 72, 73, 90'}]},
 {id:'dispensing', name:'Intro to Dispensing: prescription validity and review', prof:'Dr. Lahoud', open:false,
  cite:'Week 2: Intro-to-Dispensing.pdf and the 8/24 transcript',
  subs:[
   {id:'mup',     name:'Medication use process and errors',      cite:'slides 5–10'},
   {id:'who',     name:'Who can write a prescription',           cite:'slides 13–14'},
   {id:'req',     name:'What a valid prescription contains',     cite:'slides 15–21, 27'},
   {id:'refill',  name:'Refills and script expiration',          cite:'slides 22–23'},
   {id:'subst',   name:'Generic substitution',                   cite:'slide 24'},
   {id:'expiry',  name:'Product expiration and label dates',     cite:'slides 25–26'},
   {id:'review',  name:'The three-step prescription review',     cite:'slides 30–37'},
   {id:'errors',  name:'Error types and corrections',            cite:'slides 38–39'},
   {id:'counsel', name:'Counseling and the 3 prime questions',   cite:'slides 41–45'}]},
 {id:'eoor', name:'Errors and omissions lab (Week 2) and TOSCE drug list', prof:'Dr. Lahoud',
  cite:'EOOR-Answer-Key.pdf and TOSCE-Study-Guide.pdf',
  subs:[
   {id:'spot', name:'Find the error in a filled prescription', cite:'EOOR key, stations 1–13'},
   {id:'fix',  name:'Who fixes it and how',                    cite:'EOOR key; Intro-to-Dispensing.pdf slide 39'},
   {id:'drugs',name:'Drugs in the TOSCE list',                 cite:'TOSCE-Study-Guide.pdf p. 2'}]},
 {id:'otc', name:'OTC self-care: insect stings and head lice', prof:'Dr. Parsons',
  cite:'Week 3: OTC-Insect-Bites-Pediculosis.pdf and APhA-Insect-Excerpt.pdf',
  subs:[
   {id:'ppcp',   name:'Patient care process, SCHOLAR-MAC and SOAP', cite:'slides 4–11'},
   {id:'refer',  name:'When to refer',                              cite:'slides 14–17, 21–22'},
   {id:'sting',  name:'Insect stings and OTC products',             cite:'slides 18–28'},
   {id:'lice',   name:'Head lice',                                  cite:'slides 29–34'}]},
 {id:'poct', name:'Physical assessment and point-of-care testing', prof:'Dr. Parsons',
  cite:'Week 5: POCT-Physical-Assessment.pdf',
  subs:[
   {id:'vitals', name:'Pulse, respirations, blood pressure, temperature, oximetry', cite:'slides 28–42'},
   {id:'swab',   name:'Specimen collection',                                       cite:'slides 45–51'},
   {id:'tests',  name:'Choosing and using a test',                                 cite:'slides 54–60'}]},
 {id:'imm', name:'Immunizations', prof:'Dr. Parsons',
  cite:'Week 6: Immunizations-Pre-Lab.pdf, AAFP-Adult-Schedule-2026.pdf and the 9/21 transcript',
  subs:[
   {id:'sched',  name:'Using the AAFP schedule',            cite:'slides 4–17; AAFP schedule'},
   {id:'vax',    name:'Vaccine recommendations and doses',  cite:'AAFP schedule Notes'},
   {id:'contra', name:'Contraindications and precautions',  cite:'AAFP schedule Appendix'},
   {id:'sbar',   name:'SBAR and talking with patients',     cite:'slides 19–23'},
   {id:'hes',    name:'Vaccine hesitancy and Ask-Tell-Ask', cite:'slides 27–36'}]},
 {id:'deent', name:'DEENT lab: QuEST/SCHOLAR-MAC', prof:'Dr. Lahoud',
  cite:'Week 14: DEENT-Lab-Deck.pdf and the 11/16 transcript',
  subs:[
   {id:'quest', name:'QuEST/SCHOLAR-MAC for an OTC acne patient', cite:'Week 14 deck'}]},
];

const QUESTIONS = [
/* ---- medication use process ------------------------------------------- */
{id:'d01', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'mup', concept:'mup-order',
 tags:['medication use process'], source:'slide',
 stem:'In which order do the steps of the medication use process occur?',
 options:[
  {t:'Prescribing, order processing, dispensing, administration, monitoring', correct:true, why:'Slide 6 shows the five steps in this order: prescribing, order processing, dispensing, administration, monitoring.'},
  {t:'Prescribing, dispensing, order processing, administration, and monitoring', correct:false, why:'Puts dispensing before order processing; the prescription is entered into the system before the product is filled (slide 6).'},
  {t:'Order processing, prescribing, dispensing, monitoring, and administration', correct:false, why:'Starts with order processing, but a prescriber must write the order first (slide 6).'},
  {t:'Prescribing, order processing, administration, dispensing, and monitoring', correct:false, why:'Puts administration before dispensing; the patient cannot take a medication before it is dispensed (slide 6).'}],
 teach:'The medication use process has five steps in this order: prescribing, order processing, dispensing, administration, monitoring. An error can occur at any step, which is why several checks are needed.',
 cite:'Intro-to-Dispensing.pdf slide 6'},

{id:'d02', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'mup', concept:'mup-transcribing',
 tags:['medication use process','errors'], source:'slide',
 stem:'A technician enters a prescription’s directions into the pharmacy system incorrectly. At which step of the medication use process does this error occur?',
 options:[
  {t:'Order processing', correct:true, why:'A transcribing error is listed under order processing (slide 7).'},
  {t:'Prescribing the drug', correct:false, why:'Prescribing errors are inappropriate drug, dose, formulation, route or sig choices by the prescriber (slide 7); the prescriber wrote it correctly here.'},
  {t:'Dispensing the drug', correct:false, why:'Dispensing errors involve the product or bag, such as the wrong drug or a mislabeled item (slide 7), not data entry.'},
  {t:'Monitoring the patient', correct:false, why:'Monitoring covers interactions, allergies and adverse events after the patient has the drug (slide 7).'}],
 teach:'Order processing is where the prescription is transcribed into the pharmacy system. A typing error in the drug, directions or refills is a transcribing error.',
 cite:'Intro-to-Dispensing.pdf slide 7'},

{id:'d03', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'mup', concept:'mup-dispensing-errors',
 tags:['medication use process','errors'], source:'slide',
 stem:'Which of the following is an error at the dispensing step of the medication use process?',
 options:[
  {t:'A mislabeled or mis-bagged product', correct:true, why:'Listed under dispensing on slide 7, with incorrect drug selection and expired medications.'},
  {t:'An inappropriate dose chosen by the prescriber', correct:false, why:'Slide 7 lists an inappropriate dose, formulation, route or sig under prescribing, not under dispensing.'},
  {t:'A transcribing error when the order is entered', correct:false, why:'Slide 7 lists the transcribing error under order processing, the step before dispensing.'},
  {t:'A missed drug-drug interaction after the patient starts the drug', correct:false, why:'Slide 7 lists drug-drug interactions, allergies and adverse events under monitoring, after the patient has the drug.'}],
 teach:'Dispensing errors involve the product handed over: wrong drug, expired product, or a mislabeled or mis-bagged item.',
 note:'Slide 7 also lists incorrect patient under dispensing, but slide 38 lists incorrect patient selected or processed as a transcribing error, and the EOOR key (station 4) fixes it with the technician.',
 cite:'Intro-to-Dispensing.pdf slide 7'},

{id:'d04', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'mup', concept:'swiss-cheese',
 tags:['medication use process','Swiss cheese'], source:'transcript',
 stem:'In the Swiss cheese model of the medication use process, how does an error reach the patient?',
 options:[
  {t:'It passes through a hole in every slice', correct:true, why:'(T) Each step is a slice with holes; an error that passes every hole reaches the patient.'},
  {t:'It starts at the prescriber and stops there', correct:false, why:'(T) The model describes an error that is not stopped at any step, not one that stays at the prescriber.'},
  {t:'The final slice has no holes', correct:false, why:'(T) An error can pass every slice, including the last one, so no single check is assumed to be perfect.'},
  {t:'Each slice catches it one time', correct:false, why:'(T) If a slice catches it, the error is stopped; the model’s point is that an error reaches the patient only when none does.'}],
 teach:'(T) Each step is a slice of cheese: the prescriber, the technician entering the order, the technician filling the product, and the pharmacist double-checking. If an error gets through one slice, the next slice should catch it. The pharmacist’s role is to catch major errors before they cause harm.',
 cite:'Intro-to-Dispensing.pdf slide 8; 8/24 transcript (T)'},

{id:'d05', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'mup', concept:'pharmacist-roles',
 tags:['pharmacist role'], source:'slide',
 stem:'A pharmacist contributes to the medication use process mainly through which two activities?',
 options:[
  {t:'Prescription review and counseling', correct:true, why:'Slides 10 and 41 mark these two under the pharmacist’s role.'},
  {t:'Order entry and delivering the product', correct:false, why:'(T) In the lecture’s example a technician transcribes the order into the system (slide 7, order processing); it is not one of the two pharmacist roles named on slide 10.'},
  {t:'Compounding and insurance claim billing', correct:false, why:'Slide 10 marks only prescription review and medication counseling as the pharmacist’s roles; compounding and billing are not named.'},
  {t:'Prescribing and monitoring lab values', correct:false, why:'Prescribing is the prescriber’s step; the pharmacist’s two roles are prescription review and counseling (slide 10).'}],
 teach:'Prescription review catches errors before dispensing; medication counseling helps the patient use the drug correctly.',
 cite:'Intro-to-Dispensing.pdf slides 10, 41'},

/* ---- who can write a prescription ------------------------------------- */
{id:'d06', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'who', concept:'prescription-definition',
 tags:['definition'], source:'both',
 stem:'Which statement defines a prescription drug order?',
 options:[
  {t:'A written or verbal order from a practitioner to a pharmacist', correct:true, why:'Slide 13 defines it as a written order from a practitioner, or a verbal order from a practitioner or authorized agent, to a pharmacist; (T) it is written or verbal.'},
  {t:'Only a written order signed by a physician and given to the pharmacist', correct:false, why:'The definition includes verbal orders and is not limited to physicians (slide 13).'},
  {t:'Only an electronic order sent from the prescriber to the pharmacy', correct:false, why:'Electronic is one route; the definition covers written and verbal orders (slide 13).'},
  {t:'A request from the patient to the pharmacist for a refill of a drug', correct:false, why:'The order comes from a practitioner, not the patient (slide 13).'}],
 teach:'A prescription drug order is a written order, or a verbal order from a practitioner or the practitioner’s authorized agent, to a pharmacist for a drug or device to be dispensed.',
 cite:'Intro-to-Dispensing.pdf slide 13; 8/24 transcript (T)'},

{id:'d07', skill:'recall', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dispensing', sub:'who', concept:'practitioner-list',
 tags:['practitioner'], source:'both',
 stem:'Which of the following can be a practitioner legally authorized to prescribe in Texas? Select all that apply.',
 options:[
  {t:'Podiatrist (DPM)', correct:true, why:'Slide 14 lists podiatrists (DPM) among the licensed prescribers in Texas.'},
  {t:'Veterinarian (DVM)', correct:true, why:'Listed on slide 14; (T) a prescription for an animal needs the species and the owner’s name.'},
  {t:'Therapeutic optometrist (OD)', correct:true, why:'Therapeutic optometrists and optometric glaucoma specialists are listed (slide 14).'},
  {t:'Pharmacy technician', correct:false, why:'Slide 14 does not list pharmacy technicians; it lists physicians, dentists, podiatrists, veterinarians, optometrists and delegated APRNs and PAs.'},
  {t:'Physician assistant with no physician delegation', correct:false, why:'A PA may prescribe only if delegated by a physician under Chapter 157 (slide 14).'}],
 teach:'Practitioners include MD and DO physicians, dentists, podiatrists, veterinarians and optometrists. Advanced practice registered nurses and physician assistants prescribe when a physician delegates authority.',
 cite:'Intro-to-Dispensing.pdf slide 14; 8/24 transcript (T)'},

{id:'d08', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'who', concept:'out-of-state-prescriber',
 tags:['practitioner'], source:'slide',
 stem:'A physician licensed in another state writes a prescription for a dangerous drug for a Texas patient. Can this come from a legally authorized practitioner?',
 options:[
  {t:'Yes, if that health field could prescribe in Texas', correct:true, why:'Slide 14 lists prescribers licensed in another state in a field that would allow prescribing in Texas, with this exact example.'},
  {t:'No, only Texas-licensed prescribers qualify', correct:false, why:'Slide 14 also lists prescribers licensed in another state, Canada or Mexico.'},
  {t:'Yes, but only with a Texas DEA number', correct:false, why:'A DEA number is a requirement for controlled substances (slides 18, 20), not for a dangerous drug.'},
  {t:'No, only controlled substances can come from out of state', correct:false, why:'Slide 14’s example is an out-of-state physician prescribing a dangerous drug.'}],
 teach:'Practitioners can be licensed in Texas; licensed in another state, Canada or Mexico in a field that would allow prescribing in Texas; out-of-state prescribers for controlled substances (active DEA number, Schedules II–V if legal in their state); or delegated prescribers.',
 cite:'Intro-to-Dispensing.pdf slide 14'},

{id:'d09', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'who', concept:'delegated-prescribers',
 tags:['practitioner'], source:'slide',
 stem:'Under what condition can an advanced practice registered nurse (APRN) or physician assistant (PA) prescribe in Texas?',
 options:[
  {t:'A physician delegates under Chapter 157', correct:true, why:'Slide 14 says APRNs and PAs may prescribe if delegated by a physician under Chapter 157.'},
  {t:'The drug is a non-controlled dangerous drug', correct:false, why:'Slide 14 sets no drug-category limit for APRNs and PAs; delegation by a physician under Chapter 157 is the condition.'},
  {t:'The practice setting is a hospital pharmacy', correct:false, why:'Hospital settings appear on slide 14 for pharmacists signing prescriptions, not as the condition for APRNs and PAs.'},
  {t:'The patient is a minor under 18 years of age', correct:false, why:'Slide 14 sets no age condition for APRNs and PAs; delegation by a physician under Chapter 157 is the condition.'}],
 teach:'APRNs and PAs are delegated prescribers: they may prescribe if a physician delegates under Chapter 157.',
 cite:'Intro-to-Dispensing.pdf slide 14'},

/* ---- what a valid prescription contains ------------------------------- */
{id:'d10', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'req', concept:'dob-dangerous',
 tags:['requirements','dangerous drug'], source:'both',
 stem:'A prescription for lisinopril (a dangerous drug) has no patient date of birth, but the pharmacy’s patient medication record (PMR) holds it. Is the prescription valid for this reason alone?',
 options:[
  {t:'Yes, the date of birth only has to be in the PMR', correct:true, why:'Slide 16: date of birth is not required on a dangerous-drug prescription but must be in the PMR.'},
  {t:'No, the date of birth is always required on the prescription', correct:false, why:'That is true for CIII–V prescriptions in Texas (slide 18), not for dangerous drugs.'},
  {t:'No, the pharmacist must call the prescriber for it', correct:false, why:'Slide 16: a date of birth held in the pharmacy’s PMR satisfies the requirement, so no call to the prescriber is needed.'},
  {t:'Yes, but only for the first fill', correct:false, why:'Slide 16 does not require the date of birth on a dangerous-drug prescription at all, so no first-fill limit applies; a PMR record is enough.'}],
 teach:'(T) You can have more information than required, never less. For dangerous drugs, the address and date of birth may be taken from the PMR; for CIII–V both must be on the prescription.',
 cite:'Intro-to-Dispensing.pdf slides 16, 27; 8/24 transcript (T)'},

{id:'d11', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'req', concept:'dob-ciiv',
 tags:['requirements','controlled'], source:'both',
 stem:'A written alprazolam (CIV) prescription lacks the patient’s date of birth, which is in the pharmacy’s PMR. Is the prescription valid?',
 options:[
  {t:'No, CIII–V needs the date of birth on it', correct:true, why:'Slide 18 lists the date of birth for CIII–V; (T) Texas law requires it even though federal law does not.'},
  {t:'Yes, the date of birth in the PMR is enough', correct:false, why:'That applies to dangerous drugs (slide 16), not controlled substances.'},
  {t:'Yes, as long as the patient’s address is on it', correct:false, why:'The address and the date of birth are separate requirements on slide 18.'},
  {t:'Yes, as long as the prescriber’s DEA number is on it', correct:false, why:'The DEA number is an added requirement, not a substitute for the date of birth (slide 18).'}],
 teach:'(T) The alprazolam example is a CIV. CIII–V prescriptions need the patient’s full name, address and date of birth on the prescription itself, plus the prescriber’s DEA number.',
 cite:'Intro-to-Dispensing.pdf slides 18–19; 8/24 transcript (T)'},

{id:'d12', skill:'tell', dupOf:'d10', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dispensing', sub:'req', concept:'pmr-exceptions',
 tags:['requirements','dangerous drug'], source:'slide',
 stem:'Which of these may be left off a non-controlled prescription if the pharmacy’s patient medication record holds it? Select all that apply.',
 options:[
  {t:'Patient address', correct:true, why:'Required unless readily retrievable from the PMR (slide 16).'},
  {t:'Patient date of birth', correct:true, why:'Not required, but a record of it must be in the PMR (slide 16).'},
  {t:'Directions for use', correct:false, why:'Slide 16 requires directions for use on the prescription itself and gives no PMR exception for them.'},
  {t:'Prescriber’s telephone number', correct:false, why:'Practitioner name, address and telephone are required on the prescription (slide 16).'}],
 teach:'On a dangerous-drug prescription only the patient address and date of birth have a PMR exception.',
 cite:'Intro-to-Dispensing.pdf slide 16'},

{id:'d13', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'req', concept:'dea-required',
 tags:['requirements','DEA'], source:'both',
 stem:'Which prescription categories require the prescriber’s DEA number?',
 options:[
  {t:'CIII–CV and CII', correct:true, why:'Slide 18 lists it for CIII–V; slide 20 adds everything required for CIII–V to CII.'},
  {t:'All three categories', correct:false, why:'Dangerous-drug prescriptions do not list a DEA number (slide 16).'},
  {t:'CII only', correct:false, why:'Slide 20 says CII requires everything required for CIII–V, which includes the DEA number (slide 18), so CII is not the only category.'},
  {t:'Dangerous drugs only', correct:false, why:'The DEA number is required for controlled substances, not dangerous drugs (slides 16, 18).'}],
 teach:'(T) The DEA number shows the prescriber has federal permission to prescribe controlled substances and lets the pharmacist track prescribing.',
 cite:'Intro-to-Dispensing.pdf slides 16, 18, 20; 8/24 transcript (T)'},

{id:'d14', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'req', concept:'quantity-word',
 tags:['requirements','controlled'], source:'both',
 stem:'How must the quantity appear on a written CIII–CV prescription?',
 options:[
  {t:'As a number and a word', correct:true, why:'Slide 18: numerically and written as a word, for example #20 (twenty).'},
  {t:'As a number only, such as #20', correct:false, why:'A number alone is not enough for a written controlled substance prescription (slide 18).'},
  {t:'As a word only, such as twenty', correct:false, why:'Slide 18 requires the quantity both numerically and written as a word, for example #20 (twenty), not a word alone.'},
  {t:'As the days’ supply only', correct:false, why:'Slide 18 asks for the quantity in two forms, not a days’ supply.'}],
 teach:'(T) Showing the quantity two ways helps prevent diversion, because a written number is harder to alter without being noticed.',
 cite:'Intro-to-Dispensing.pdf slide 18; 8/24 transcript (T)'},

{id:'d15', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'req', concept:'quantity-word-action',
 tags:['requirements','controlled'], source:'slide',
 stem:'A written CIV prescription shows the quantity only as “#30,” with no word. What should the pharmacist do?',
 options:[
  {t:'Call to verify the quantity', correct:true, why:'Slide 18 footnote: if it is not written as a word, the pharmacist should call to verify the quantity per the Texas State Board of Pharmacy (TSBP).'},
  {t:'Fill it as written', correct:false, why:'The word form is required on a written prescription (slide 18).'},
  {t:'Write the word on it', correct:false, why:'The slide directs a call, not an edit to the prescription (slide 18).'},
  {t:'Fill half and have the patient return', correct:false, why:'The slide describes verifying the quantity, not splitting the fill (slide 18).'}],
 teach:'A written controlled substance prescription needs the quantity as a number and a word. When the word is missing, call to verify.',
 cite:'Intro-to-Dispensing.pdf slide 18'},

{id:'d16', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'req', concept:'animal-rx',
 tags:['requirements'], source:'both',
 stem:'A prescription is written for a dog. Besides the usual drug information, what must it include?',
 options:[
  {t:'The species and owner’s name', correct:true, why:'Slides 16 and 18: required when the prescription is for an animal. (T) The lecturer’s example is a dog named Jimmy with her name as owner.'},
  {t:'The animal’s weight and breed', correct:false, why:'Slides 16 and 18 ask for the animal’s species and the owner’s name; weight and breed are not listed.'},
  {t:'The owner’s date of birth only', correct:false, why:'The owner’s name is required, not the date of birth (slide 16).'},
  {t:'A TSBP official prescription form', correct:false, why:'Slide 20 requires the TSBP-issued official form for a written CII prescription, not for an animal prescription.'}],
 teach:'For an animal, the prescription needs the species and the name of the owner in every category.',
 cite:'Intro-to-Dispensing.pdf slides 16, 18; 8/24 transcript (T)'},

{id:'d17', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'req', concept:'indication',
 tags:['requirements'], source:'both',
 stem:'A dangerous-drug prescription has no indication written on it. What is the practical action?',
 options:[
  {t:'Fill it; the prescriber may omit the indication', correct:true, why:'Slide 16: required unless the practitioner determines it is not in the patient’s best interest. (T) Calling the prescriber for this is not expected.'},
  {t:'Refuse it until the prescriber adds an indication', correct:false, why:'(T) The indication may be omitted when the prescriber judges that best, so refusal is not required.'},
  {t:'Call the prescriber about every missing indication', correct:false, why:'(T) Not expected; the lecturer said nobody has time for that.'},
  {t:'Add the likely indication from the drug', correct:false, why:'Slide 16 describes the prescriber’s intended use; it does not describe the pharmacist adding one.'}],
 teach:'(T) By law the intended use should be on the prescription unless the practitioner determines it is not in the patient’s best interest, so a missing indication is not by itself a reason to refuse.',
 cite:'Intro-to-Dispensing.pdf slide 16; 8/24 transcript (T)'},

{id:'d18', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'req', concept:'cii-written-form',
 tags:['requirements','CII'], source:'both',
 stem:'A written CII prescription must be on which form and signed how?',
 options:[
  {t:'A TSBP official form, manually signed', correct:true, why:'Slide 20. (T) A stamped or replica signature does not qualify.'},
  {t:'Any form, signed with a stamp', correct:false, why:'(T) The prescriber cannot stamp the signature on a written CII.'},
  {t:'A TSBP official form, signed with a stamp', correct:false, why:'Slide 20 requires a written CII to be manually signed, and slide 27 says no stamp or replica signature for CII.'},
  {t:'Any form, signed electronically', correct:false, why:'An electronic signature belongs to an e-prescription (slide 27), not a written one.'}],
 teach:'If a CII prescription is written (not ideal), it must be on a TSBP-issued official form and manually signed. On the back, the pharmacist records the date filled and the Rx number.',
 cite:'Intro-to-Dispensing.pdf slides 20, 27; 8/24 transcript (T)'},

{id:'d19', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'req', concept:'cii-record',
 tags:['requirements','CII'], source:'both',
 stem:'What must the pharmacist record on a filled CII prescription?',
 options:[
  {t:'The date filled and the Rx number', correct:true, why:'Slide 20. (T) The record lets auditors track the controlled medication.'},
  {t:'The pharmacist’s initials only', correct:false, why:'Slide 20 names the date filled and the Rx number, not initials, as what the pharmacist records.'},
  {t:'The patient’s insurance number and plan', correct:false, why:'Slide 20 lists no insurance information; the pharmacist records the date filled and the Rx number.'},
  {t:'The prescriber’s DEA number', correct:false, why:'The DEA number must already be on the prescription (slide 18); the pharmacist records the fill date and Rx number.'}],
 teach:'(T) The pharmacist writes the fill date and the Rx number so a later audit can track the CII.',
 cite:'Intro-to-Dispensing.pdf slide 20; 8/24 transcript (T)'},

{id:'d20', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'req', concept:'cii-electronic',
 tags:['requirements','CII'], source:'both',
 stem:'Which delivery method is preferred for controlled substance prescriptions, except in limited circumstances?',
 note:'Slide 21 states this for controlled substances; (T) the lecturer said it about CII. Both key electronic delivery.',
 options:[
  {t:'Electronically', correct:true, why:'Slide 21; (T) the prescriber, not the pharmacist, is responsible for sending it electronically.'},
  {t:'Handwritten on an official form', correct:false, why:'Slide 20 allows a written CII on a TSBP form but calls it not ideal; slide 21 says electronic issue is the standard.'},
  {t:'Verbally by phone', correct:false, why:'Verbal orders appear for substitution (slide 24), not as the standard route on slide 21.'},
  {t:'By fax to the pharmacy', correct:false, why:'Slide 21 says controlled substance prescriptions should be issued electronically, not by fax, except in limited circumstances.'}],
 teach:'(T) The pharmacist does not have to double-check that a prescriber used electronic delivery, but should know the law prefers it.',
 cite:'Intro-to-Dispensing.pdf slides 20–21; 8/24 transcript (T)'},

{id:'d21', skill:'recall', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dispensing', sub:'req', concept:'pmp',
 tags:['requirements','controlled'], source:'slide',
 stem:'Pharmacists must check the patient’s prescription monitoring program (PMP) history before dispensing which of these? Select all that apply.',
 options:[
  {t:'Opioids', correct:true, why:'Slide 21 lists opioids among the drugs that require a PMP history check before dispensing.'},
  {t:'Benzodiazepines', correct:true, why:'Slide 21 lists benzodiazepines among the drugs that require a PMP history check before dispensing.'},
  {t:'Barbiturates', correct:true, why:'Slide 21 lists barbiturates among the drugs that require a PMP history check before dispensing.'},
  {t:'Carisoprodol', correct:true, why:'Slide 21 lists carisoprodol among the drugs that require a PMP history check before dispensing.'},
  {t:'Statins', correct:false, why:'Slide 21 names only opioids, benzodiazepines, barbiturates and carisoprodol for the PMP check; statins are not named.'},
  {t:'ACE inhibitors', correct:false, why:'Slide 21 names only opioids, benzodiazepines, barbiturates and carisoprodol for the PMP check; ACE inhibitors are not named.'}],
 teach:'Pharmacists and prescribers (other than veterinarians) check the PMP before dispensing or prescribing opioids, benzodiazepines, barbiturates or carisoprodol.',
 cite:'Intro-to-Dispensing.pdf slide 21'},

{id:'d22', skill:'tell', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dispensing', sub:'req', concept:'ciiv-vs-dangerous',
 tags:['requirements','controlled'], source:'slide',
 stem:'Which are required on a written CIII–CV prescription but not on a dangerous-drug prescription? Select all that apply.',
 options:[
  {t:'Prescriber’s DEA number', correct:true, why:'Slide 18 requires the prescriber’s DEA number on CIII–V, while slide 16 lists none for dangerous drugs.'},
  {t:'Patient date of birth on the prescription', correct:true, why:'Slide 18; on a dangerous-drug prescription it may be in the PMR instead (slide 16).'},
  {t:'Quantity written as a word', correct:true, why:'Slide 18 requires the quantity as a word when the order is written; slide 16 has no such requirement.'},
  {t:'Directions for use', correct:false, why:'Slides 16 and 18 both require directions for use, so it does not separate the two categories.'},
  {t:'Date of issuance', correct:false, why:'Slides 16 and 18 both require the date of issuance, so it does not separate the two categories.'}],
 teach:'CIII–V adds the DEA number, the date of birth on the prescription, and the quantity as a word (when written) to the dangerous-drug list.',
 cite:'Intro-to-Dispensing.pdf slides 16, 18, 27'},

/* ---- refills and expiration ------------------------------------------- */
{id:'d23', skill:'recall', type:'match', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'refill', concept:'refill-table',
 tags:['refills','expiration'], source:'slide',
 stem:'Match each prescription category to its refill limit and the time after issue when the script expires.',
 left:'Category', right:'Refills and expiration',
 pairs:[
  {l:'Dangerous drug', r:'No limit; 1 year', why:'Slide 22 gives dangerous drugs no refill limit and a script expiration of 1 year after issuance.'},
  {l:'Schedule III–V', r:'5 refills; 6 months', why:'Slide 22 gives Schedule III–V a limit of 5 refills and a script expiration of 6 months after issuance.'},
  {l:'Schedule II', r:'0 refills; 30 days', why:'Slide 22 gives Schedule II 0 refills and a script expiration of 30 days after issuance.'}],
 teach:'Refill limits and script expiration depend on the category: dangerous drugs no limit and 1 year; CIII–V 5 refills and 6 months; CII no refills and 30 days. Slide 22’s footnote adds 3 months for mid-level practitioners; the lecture did not stress it.',
 cite:'Intro-to-Dispensing.pdf slide 22'},

{id:'d24', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'refill', concept:'dangerous-refills',
 tags:['refills','expiration'], source:'both',
 stem:'A prescription for Prozac (fluoxetine, a dangerous drug) was issued 8/18/2026 with 6 refills. Are the refills acceptable, and when does the script expire?',
 options:[
  {t:'Acceptable; it expires 8/18/2027', correct:true, why:'Dangerous drugs have no refill limit and expire 1 year after issue (slide 22); 8/18/2026 plus one year is 8/18/2027.'},
  {t:'Not acceptable; the maximum is 5 refills', correct:false, why:'5 refills is the CIII–V limit; dangerous drugs have no limit (slide 22).'},
  {t:'Acceptable; it expires 2/18/2027', correct:false, why:'2/18/2027 is six months after 8/18/2026, the CIII–V expiration; slide 22 gives dangerous drugs 1 year.'},
  {t:'Not acceptable; refills are not allowed', correct:false, why:'No refills is the CII rule; slide 22 gives dangerous drugs no refill limit, so 6 refills is acceptable.'}],
 teach:'(T) The Prozac example on slides 31–33 was judged legal and safe: dangerous drugs have no refill limit and are valid 1 year from the date of issuance.',
 cite:'Intro-to-Dispensing.pdf slides 22, 31; 8/24 transcript (T)'},

{id:'d25', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'refill', concept:'ciiv-expired',
 tags:['refills','expiration'], source:'slide',
 stem:'A physician issued a CIV prescription for alprazolam 6 months and 2 weeks ago. May it be filled?',
 options:[
  {t:'No, it expired after 6 months', correct:true, why:'Slide 22 gives CIII–V scripts 6 months after issue, and this one is 6 months and 2 weeks old.'},
  {t:'Yes, it is valid for 1 year', correct:false, why:'One year is the dangerous-drug expiration on slide 22; alprazolam is a CIV, which expires at 6 months.'},
  {t:'Yes, it is valid for 30 days after the last fill', correct:false, why:'Thirty days is the CII expiration on slide 22, counted from the date of issuance, not from the last fill.'},
  {t:'Yes, if refills remain', correct:false, why:'Refills do not extend the 6-month expiration of a CIII–V script (slide 22); an expired prescription needs a new one (slides 38–39).'}],
 teach:'A prescription that has passed its expiration is a prescribing error; contact the prescriber for a new prescription.',
 cite:'Intro-to-Dispensing.pdf slides 22, 38'},

{id:'d26', skill:'recall', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dispensing', sub:'refill', concept:'cii-multi-rx',
 tags:['refills','CII'], source:'slide',
 stem:'Which conditions must be met when a prescriber issues several CII prescriptions for up to a 90-day supply? Select all that apply.',
 options:[
  {t:'The total is no more than a 90-day supply', correct:true, why:'Slide 22 allows multiple CII prescriptions only if the total is no more than a 90-day supply.'},
  {t:'All prescriptions are issued the same day', correct:true, why:'Slide 22 requires the multiple CII prescriptions to be issued on the same day.'},
  {t:'The prescriber notes an earliest fill date', correct:true, why:'Slide 22 requires the prescriber to note an earliest fill date on the multiple CII prescriptions.'},
  {t:'Each prescription carries 2 refills', correct:false, why:'Slide 22 gives CII 0 refills, so a CII prescription cannot carry refills.'},
  {t:'Each prescription is issued on a different date', correct:false, why:'Slide 22 requires the prescriptions to be issued the same day, not on different dates.'}],
 teach:'(T) This is the legal way around the no-refill rule: separate prescriptions issued the same day, with earliest fill dates, totaling at most a 90-day supply.',
 cite:'Intro-to-Dispensing.pdf slide 22; 8/24 transcript (T)'},

{id:'d27', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'refill', concept:'cii-earliest-fill',
 tags:['refills','CII'], source:'both',
 stem:'Three Focalin XR prescriptions were all issued 8/24/2026. The second states an earliest fill date of 9/24/2026. May the second be filled on 9/10/2026?',
 options:[
  {t:'No, not before 9/24/2026', correct:true, why:'(T) The script cannot be filled before the earliest fill date the prescriber noted (slide 23).'},
  {t:'Yes, it was issued the same day as the first', correct:false, why:'The earliest fill date controls when it can be filled, not the issue date (slide 22).'},
  {t:'Yes, if the patient asks', correct:false, why:'A patient request does not change the prescriber’s earliest fill date (slide 22).'},
  {t:'No, CII prescriptions cannot be split', correct:false, why:'Multiple CII prescriptions are allowed under slide 22’s conditions.'}],
 teach:'(T) Focalin XR is a CII. The first script fills now, the second on or after 9/24/2026, and the third on or after 10/24/2026 (slide 23), which totals a 90-day supply.',
 cite:'Intro-to-Dispensing.pdf slides 22–23; 8/24 transcript (T)'},

/* ---- generic substitution --------------------------------------------- */
{id:'d28', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'subst', concept:'brand-written',
 tags:['substitution'], source:'both',
 stem:'On a written prescription, which method legally prevents generic substitution?',
 options:[
  {t:'The prescriber handwrites “Brand Necessary”', correct:true, why:'Slide 24: for a written prescription, handwrite “Brand Necessary” or “Brand Medically Necessary.”'},
  {t:'A pre-printed check box is marked', correct:false, why:'Slide 24 lists checkboxes among the methods that do not legally prevent generic substitution on a written prescription.'},
  {t:'A rubber stamp reads brand medically necessary', correct:false, why:'Rubber stamps do not legally prevent substitution (slide 24).'},
  {t:'A two-line prescription form is signed', correct:false, why:'Two-line forms do not legally prevent substitution (slide 24).'}],
 teach:'(T) On a written prescription the prescriber has to write it by hand. A pre-written box, a stamp or preprinted wording is not enough.',
 cite:'Intro-to-Dispensing.pdf slide 24; 8/24 transcript (T)'},

{id:'d29', skill:'recall', dupOf:'d28', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dispensing', sub:'subst', concept:'brand-written',
 tags:['substitution'], source:'slide',
 stem:'Which of these do NOT legally prevent generic substitution on a written prescription? Select all that apply.',
 options:[
  {t:'Checkboxes', correct:true, why:'Slide 24 lists checkboxes as a method that does not legally prevent generic substitution on a written prescription.'},
  {t:'Two-line prescription forms', correct:true, why:'Slide 24 lists two-line prescription forms as a method that does not legally prevent generic substitution.'},
  {t:'Preprinted wording', correct:true, why:'Slide 24 lists preprinted wording as a method that does not legally prevent generic substitution.'},
  {t:'Rubber stamps', correct:true, why:'Slide 24 lists rubber stamps as a method that does not legally prevent generic substitution.'},
  {t:'Handwritten “Brand Necessary”', correct:false, why:'This is the method that does prevent substitution (slide 24).'}],
 teach:'Only handwriting “Brand Necessary” or “Brand Medically Necessary” prevents substitution on a written prescription.',
 cite:'Intro-to-Dispensing.pdf slide 24'},

{id:'d30', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'subst', concept:'brand-by-type',
 tags:['substitution'], source:'both',
 stem:'A prescriber phones in a prescription and states that the brand is medically necessary. What makes that statement effective?',
 options:[
  {t:'The pharmacist documents the statement', correct:true, why:'Slide 24: for an oral order, the prescriber states it verbally and the pharmacist documents it.'},
  {t:'The prescriber also faxes a signed form', correct:false, why:'Slide 24 says an oral request needs only the verbal statement and the pharmacist’s documentation, not a faxed form.'},
  {t:'The pharmacy records it on a stamp', correct:false, why:'Stamps are listed as not preventing substitution on written prescriptions (slide 24).'},
  {t:'A verbal request cannot prevent substitution', correct:false, why:'Slide 24 lists the oral route as valid: the prescriber states it verbally and the pharmacist documents it.'}],
 teach:'(T) Written: handwritten. Oral: stated verbally and documented by the pharmacist. Electronic: clearly indicated in the e-prescription (in lab, assume prescriptions arrive electronically).',
 cite:'Intro-to-Dispensing.pdf slide 24; 8/24 transcript (T)'},

/* ---- product expiration ----------------------------------------------- */
{id:'d31', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'expiry', concept:'constituted-expiry',
 tags:['expiration','compounded'], source:'both',
 stem:'An Augmentin suspension is mixed at the pharmacy. What expiration applies?',
 options:[
  {t:'Discard 10 days after mixing', correct:true, why:'Slide 25: check the product’s own directions; Augmentin suspension is discarded 10 days after mixing.'},
  {t:'One year after the fill date', correct:false, why:'That rule is for products taken from a stock bottle (slide 25).'},
  {t:'The stock bottle’s printed expiration', correct:false, why:'Once water is added it is no longer the powder that was on the shelf (T), so the product’s directions apply.'},
  {t:'Thirty days after the fill date', correct:false, why:'Slide 25 gives no thirty-day rule; a mixed product follows its own directions, such as 10 days for Augmentin suspension.'}],
 teach:'(T) Unconstituted powder has a stock expiration, but once water is added it has its own, found on the bottle’s label (for example, discard after 10 days from reconstitution).',
 cite:'Intro-to-Dispensing.pdf slide 25; 8/24 transcript (T)'},

{id:'d32', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'expiry', concept:'stock-expiry-1',
 tags:['expiration','label date'], source:'both',
 stem:'Lisinopril is filled 8/24/2026 from a stock bottle that expires 2/2027. What expiration date goes on the label?',
 options:[
  {t:'02/28/2027', correct:true, why:'The stock expiration is earlier than one year after fill, and the label takes the last day of that month; (T) the lecture gave 2-28-2027 for a 2/2027 bottle.'},
  {t:'08/24/2027', correct:false, why:'One year after the fill date is used only if it is earlier than the stock expiration (slide 25).'},
  {t:'02/01/2027', correct:false, why:'The expiration is the end of the month; the key uses 1/31/2027 for a 1/2027 bottle (EOOR key, station 10).'},
  {t:'Cannot use the stock bottle', correct:false, why:'The bottle is still in date on 8/24/2026; it only sets an earlier label date.'}],
 teach:'The label date is the earlier of one year after fill and the stock bottle’s expiration. A month-and-year stock date runs to the last day of that month.',
 cite:'Intro-to-Dispensing.pdf slides 25–26; 8/24 transcript (T); EOOR-Answer-Key.pdf station 10'},

{id:'d33', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'expiry', concept:'stock-expiry-2',
 tags:['expiration','label date'], source:'slide',
 stem:'A prescription is filled 3/1/2026 from a stock bottle that expires 8/2027. What expiration date goes on the label?',
 options:[
  {t:'03/01/2027', correct:true, why:'One year after the fill date is earlier than the stock expiration of 8/2027 (slide 25).'},
  {t:'08/31/2027', correct:false, why:'The stock date is later than one year after fill, so the earlier date is used (slide 25).'},
  {t:'03/31/2027', correct:false, why:'One year after a 3/1/2026 fill is 3/1/2027, not the end of that month (slide 25).'},
  {t:'08/01/2027', correct:false, why:'Uses the stock bottle’s month; the earlier date, one year after fill, applies (slide 25).'}],
 teach:'Compare one year after the fill date with the stock bottle’s expiration, and use the earlier. Check: 3/1/2026 plus one year is 3/1/2027, which is before 8/2027.',
 cite:'Intro-to-Dispensing.pdf slide 25'},

{id:'d34', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'expiry', concept:'stock-expiry-3',
 tags:['expiration','label date'], source:'both',
 stem:'A prescription is filled 10/15/2026 from a stock bottle that expires 12/2026. What expiration date goes on the label?',
 options:[
  {t:'12/31/2026', correct:true, why:'The stock expiration is earlier than one year after fill (slide 25), and a month-and-year date runs to the last day of the month (EOOR key, station 10).'},
  {t:'10/15/2027', correct:false, why:'One year after fill is later than the stock expiration, so it is not used (slide 25).'},
  {t:'12/01/2026', correct:false, why:'The date should be the end of the month, as in the 1/2027 to 1/31/2027 example (EOOR key, station 10).'},
  {t:'12/15/2026', correct:false, why:'A month-and-year stock date runs to the end of that month, so the label takes the last day (EOOR key, station 10).'}],
 teach:'The earlier date wins. The stock bottle expires before one year after the fill, so the label date is the last day of December 2026.',
 cite:'Intro-to-Dispensing.pdf slides 25–26; EOOR-Answer-Key.pdf station 10'},

/* ---- the three-step review -------------------------------------------- */
{id:'d35', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'review', concept:'review-order',
 tags:['prescription review'], source:'both',
 stem:'In what order is the systematic approach to reviewing a prescription done?',
 options:[
  {t:'Legal and safe, transcribed correctly, product matches', correct:true, why:'Slide 30; (T) if it is not legal or safe, the prescriber is called before anything is processed.'},
  {t:'Product matches, legal and safe, transcribed correctly', correct:false, why:'Slide 30 puts legal and safe first, so checking the product match first is out of order.'},
  {t:'Transcribed correctly, legal and safe, product matches', correct:false, why:'The prescription must be legal and safe before the transcription is checked (slide 30).'},
  {t:'Transcribed correctly, product matches, legal and safe', correct:false, why:'Slide 30 puts legal and safe first, not last; the order is legal and safe, transcribed, then product match.'}],
 teach:'(1) Is the prescription legal and safe for the patient? (2) Was it transcribed appropriately? (3) Does the in-hand product match the transcribed product?',
 cite:'Intro-to-Dispensing.pdf slide 30; 8/24 transcript (T)'},

{id:'d36', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'review', concept:'fill-date',
 tags:['prescription review','transcription'], source:'both',
 stem:'A prescription was issued 8/18/2026 and filled 8/24/2026. The label shows a fill date of 8/24/2026. Is the label date an error?',
 options:[
  {t:'No, the label shows the fill date', correct:true, why:'Slide 34: the date of fill will often auto-populate. (T) The label date is when it is filled.'},
  {t:'Yes, the label must show 8/18/2026', correct:false, why:'8/18/2026 is the date of issuance on the prescription (slide 32), not the fill date.'},
  {t:'Yes, the prescription has expired', correct:false, why:'Slide 22 gives a dangerous drug 1 year after issue, so a prescription issued 8/18/2026 had not expired on 8/24/2026.'},
  {t:'No, but the label needs both dates', correct:false, why:'Slide 34 checks only the date of fill on the label; the issue date belongs to the prescription (slide 32).'}],
 teach:'(T) The prescription date and the fill date are different. Filling a prescription written 8/18 on 8/24 is correct as long as it has not expired.',
 cite:'Intro-to-Dispensing.pdf slides 32, 34; 8/24 transcript (T)'},

{id:'d37', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'review', concept:'safety-resources',
 tags:['prescription review','safety'], source:'both',
 stem:'Which resources are used to check that a prescribed dose is safe for a patient?',
 options:[
  {t:'Lexicomp/Lexidrug and Micromedex', correct:true, why:'Slides 44–45 name Lexicomp or Micromedex and allow Lexidrug and Micromedex in lab; (T) the lecturer wants them used to assess whether a prescription is safe, not only whether it is legal.'},
  {t:'The patient’s memory of the last fill', correct:false, why:'A patient’s memory of a past fill is not a drug reference; slide 45 names Lexidrug and Micromedex as the resources to use.'},
  {t:'The pharmacy’s inventory list', correct:false, why:'Inventory shows what is stocked, not whether a dose is safe.'},
  {t:'The previous prescription label', correct:false, why:'A label is not a drug reference; (T) safety is checked in Lexicomp or Micromedex.'}],
 teach:'(T) Legality and safety are equally important. Use Lexicomp or Micromedex to check, for example, whether lisinopril 20 mg once a day is safe for the patient.',
 cite:'Intro-to-Dispensing.pdf slides 44–45; 8/24 transcript (T)'},

{id:'d38', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'review', concept:'lasa',
 tags:['prescription review','LASA'], source:'both',
 stem:'In prescription verification, what does LASA stand for?',
 options:[
  {t:'Look-alike sound-alike', correct:true, why:'Slides 34 and 36 warn about brand-to-generic and LASA errors; (T) the example is fluoxetine and fluvoxamine.'},
  {t:'Label, amount, strength, and administration', correct:false, why:'Slides 34 and 36 use LASA for look-alike sound-alike drug names, not for label, amount, strength and administration.'},
  {t:'Legal and safe assessment', correct:false, why:'Legal and safe is step 1 of the systematic review (slide 30), a different idea from LASA.'},
  {t:'Late arrival, stock available', correct:false, why:'Slides 34 and 36 use LASA for look-alike sound-alike drug names; nothing there refers to late arrival or stock.'}],
 teach:'(T) Look-alike sound-alike drug names, such as fluoxetine and fluvoxamine, are easy to mix up when the pharmacy is busy.',
 cite:'Intro-to-Dispensing.pdf slides 34, 36, 37; 8/24 transcript (T)'},

{id:'d39', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'review', concept:'fluoxetine-fluvoxamine',
 tags:['prescription review','LASA','errors'], source:'both',
 stem:'Prozac (fluoxetine) is prescribed, but the stock bottle used holds fluvoxamine. Which error is this, and how is it corrected?',
 options:[
  {t:'Dispensing error; replace the product', correct:true, why:'Slide 37 flags an incorrect stock bottle (LASA); slide 38 lists incorrect drug filled under dispensing; slide 39 gives the fix.'},
  {t:'Prescribing error; call the prescriber', correct:false, why:'(T) Nothing is wrong with the prescription; it was legal and safe.'},
  {t:'Transcribing error; regenerate the label', correct:false, why:'The label was transcribed correctly (T); the wrong bottle was pulled.'},
  {t:'No error; the drugs are equivalent', correct:false, why:'(T) Fluoxetine and fluvoxamine are different drugs, so filling one for the other is an error (slide 37 flags the wrong stock bottle).'}],
 teach:'(T) The prescription was legal and safe, and the label was transcribed correctly. The error is the wrong bottle, a dispensing error to correct with the technician by replacing the product.',
 cite:'Intro-to-Dispensing.pdf slides 37–39; 8/24 transcript (T)'},

{id:'d40', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'review', concept:'bottle-look',
 tags:['prescription review'], source:'slide',
 stem:'When verifying the product in hand, which practice does the review warn against?',
 options:[
  {t:'Relying only on bottle color or look', correct:true, why:'Slide 36: avoid relying solely on color or look of the bottle; always read the label.'},
  {t:'Reading the label on the stock bottle', correct:false, why:'Slide 36 says to always read the label, so this is the recommended practice, not the one warned against.'},
  {t:'Checking tablet versus capsule', correct:false, why:'Slide 36 lists formulation (tablet vs capsule vs suspension vs injection) as a product check, so it is recommended.'},
  {t:'Confirming the expiration date', correct:false, why:'Slide 36 lists expiration date as one of the four product checks, so it is recommended.'}],
 teach:'Product verification checks correct medication, strength, formulation (tablet vs capsule vs suspension vs injection; ER vs IR) and expiration date.',
 cite:'Intro-to-Dispensing.pdf slide 36'},

/* ---- error types and corrections -------------------------------------- */
{id:'d41', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'errors', concept:'type-bupropion',
 tags:['errors'], source:'slide',
 stem:'Bupropion is filled for a prescription written for buspirone. Which type of error is this?',
 options:[
  {t:'Dispensing error', correct:true, why:'Slide 38 lists incorrect drug filled, with this example, under dispensing.'},
  {t:'Prescribing error', correct:false, why:'Slide 38 lists incorrect drug filled under dispensing; the prescriber wrote buspirone as intended.'},
  {t:'Transcribing error', correct:false, why:'The order was entered correctly; the wrong product was filled (slide 38).'},
  {t:'Monitoring error', correct:false, why:'Monitoring happens after the patient has the drug (slide 7).'}],
 teach:'Incorrect drug filled, incorrect formulation or strength filled, insufficient quantity filled, a wrong use-before date and an expired product are dispensing errors.',
 cite:'Intro-to-Dispensing.pdf slides 7, 38'},

{id:'d42', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'errors', concept:'type-sig',
 tags:['errors'], source:'slide',
 stem:'The label says twice daily but the prescription says once daily. Which type of error is this, and what is the correction?',
 options:[
  {t:'Transcribing; correct the entry', correct:true, why:'Slide 38 lists directions transcribed incorrectly onto the label as a transcribing error; slide 39 gives this correction.'},
  {t:'Prescribing; contact the prescriber', correct:false, why:'The prescriber wrote once daily; the system entry is wrong (slide 38).'},
  {t:'Dispensing; replace the product', correct:false, why:'The product is right and only the label text is wrong, which slide 38 lists as a transcribing error.'},
  {t:'Dispensing; relabel the product only', correct:false, why:'The entry in the system must be corrected so the label regenerates (slide 39).'}],
 teach:'Transcribing errors are fixed by correcting the prescription entered in the pharmacy system and regenerating labels and documentation.',
 cite:'Intro-to-Dispensing.pdf slides 38–39'},

{id:'d43', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'errors', concept:'type-expired',
 tags:['errors'], source:'slide',
 stem:'A prescription is expired. Which type of error is this, and who resolves it?',
 options:[
  {t:'Prescribing error; the prescriber', correct:true, why:'Slide 38 lists prescription is expired under prescribing; slide 39: contact the prescriber to obtain a new prescription.'},
  {t:'Transcribing error; the technician', correct:false, why:'The date on the label is not the issue; the prescription itself has lapsed (slide 38).'},
  {t:'Dispensing error; the technician', correct:false, why:'Product expiration is a different item: product used for dispensing is expired (slide 38).'},
  {t:'No error; refill it anyway', correct:false, why:'Slide 22 sets a script expiration, so an expired script cannot simply be refilled; slide 38 lists it as a prescribing error.'}],
 teach:'Prescribing errors (expired, dose too high or low, insufficient quantity prescribed, wrong number of refills, DEA number missing) often require a call to the prescriber.',
 cite:'Intro-to-Dispensing.pdf slides 38–39'},

{id:'d44', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'errors', concept:'type-formulation',
 tags:['errors'], source:'slide',
 stem:'An extended-release (ER) tablet was prescribed, but immediate-release (IR) tablets were filled. Which type of error is this?',
 options:[
  {t:'Dispensing error', correct:true, why:'Slide 38 lists incorrect formulation filled (for example IR vs ER) under dispensing.'},
  {t:'Prescribing error', correct:false, why:'Slide 38 lists incorrect formulation filled (IR vs ER) under dispensing; the prescriber chose ER correctly.'},
  {t:'Transcribing error', correct:false, why:'The order was entered as ER, so the entry is correct; slide 38 lists filling IR vs ER as a dispensing error.'},
  {t:'Patient adherence problem', correct:false, why:'The error is made before the patient receives the drug (slide 7).'}],
 teach:'Formulation is one of the four product-verification checks: tablet, capsule, suspension or injection, and ER versus IR.',
 cite:'Intro-to-Dispensing.pdf slides 36, 38'},

{id:'d45', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'errors', concept:'liquid-quantity',
 tags:['errors'], source:'slide',
 stem:'An insufficient prescribed quantity is a common prescribing error with which kind of prescription?',
 options:[
  {t:'Liquid', correct:true, why:'Slide 38 notes that an insufficient prescribed quantity is a common prescribing error with liquid prescriptions.'},
  {t:'Tablet', correct:false, why:'Slide 38 ties the common insufficient-quantity error to liquid prescriptions, not to tablets.'},
  {t:'Topical cream', correct:false, why:'Slide 38 ties the common insufficient-quantity error to liquid prescriptions, not to topical creams.'},
  {t:'Controlled substance', correct:false, why:'Slide 38 ties the common insufficient-quantity error to liquid prescriptions, not to a drug category.'}],
 teach:'A liquid prescription needs enough volume for the full directed course; an insufficient quantity prescribed is a prescribing error, whereas insufficient quantity filled is a dispensing error.',
 cite:'Intro-to-Dispensing.pdf slide 38'},

{id:'d46', skill:'error', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dispensing', sub:'errors', concept:'call-prescriber',
 tags:['errors'], source:'slide',
 stem:'Which errors usually require a call to the prescriber? Select all that apply.',
 options:[
  {t:'The prescription is expired', correct:true, why:'Slide 38 lists an expired prescription as a prescribing error, which often requires a call to the prescriber.'},
  {t:'The prescribed dose is too high', correct:true, why:'Slide 38 lists a dose or frequency that is too high or too low as a prescribing error, which often requires a call.'},
  {t:'The DEA number is missing', correct:true, why:'Slide 38 lists a required but missing DEA number as a prescribing error, which often requires a call to the prescriber.'},
  {t:'An inappropriate number of refills is prescribed', correct:true, why:'Slide 38 lists an inappropriate number of refills prescribed as a prescribing error, which often requires a call.'},
  {t:'The wrong strength was filled', correct:false, why:'Slide 38 lists incorrect strength filled as a dispensing error; slide 39 says to replace the product and/or relabel.'},
  {t:'The label directions were typed incorrectly', correct:false, why:'Transcribing error; correct it in the system (slides 38–39).'}],
 teach:'Slide 38’s footnote: prescribing errors often require a call to the prescriber. (T) and the EOOR key: transcribing and dispensing errors are worked out with the technician.',
 cite:'Intro-to-Dispensing.pdf slides 38–39; EOOR-Answer-Key.pdf slides 1–2; 8/24 transcript (T)'},

/* ---- counseling ------------------------------------------------------- */
{id:'d47', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'counsel', concept:'prime-questions',
 tags:['counseling'], source:'both',
 stem:'Which set lists the 3 prime questions used for counseling?',
 options:[
  {t:'What is it for, how to take it, what to expect', correct:true, why:'Slide 43: what did the doctor tell you this was for, how to take it, what to expect.'},
  {t:'What it costs, how to take it, where to store it', correct:false, why:'Slide 43 lists what it is for, how to take it and what to expect as the prime questions; cost and storage are not among them.'},
  {t:'What is it for, what allergies exist, what to avoid', correct:false, why:'Allergies are asked in the information-gathering part of the rubric (slide 44).'},
  {t:'Who prescribed it, how long to take it, how to refill', correct:false, why:'Slide 43’s prime questions are what it is for, how to take it and what to expect; prescriber, duration and refills are not.'}],
 teach:'(T) The three prime questions: What did the doctor tell you this medication was for? How did the doctor tell you to take it? What did the doctor tell you to expect?',
 cite:'Intro-to-Dispensing.pdf slide 43; 8/24 transcript (T)'},

{id:'d48', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'counsel', concept:'counseling-importance',
 tags:['counseling'], source:'both',
 stem:'Which is NOT a stated reason that counseling is important?',
 options:[
  {t:'It replaces prescription review', correct:true, why:'Not on slide 42; counseling and prescription review are separate roles (slide 10).'},
  {t:'It improves medication adherence', correct:false, why:'Slide 42 lists improved adherence as a reason counseling is important.'},
  {t:'It prevents harm to patients', correct:false, why:'Slide 42 lists preventing harm as a reason counseling is important.'},
  {t:'It reduces overall healthcare costs', correct:false, why:'Listed on slide 42; (T) adherent patients return less often.'}],
 teach:'(T) Counseling improves adherence, prevents harm, empowers patients and reduces healthcare costs.',
 cite:'Intro-to-Dispensing.pdf slides 10, 42; 8/24 transcript (T)'},

{id:'d49', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dispensing', sub:'counsel', concept:'rubric-identifiers',
 tags:['counseling'], source:'slide',
 stem:'The counseling rubric requires confirming the patient with how many identifiers?',
 options:[
  {t:'At least two', correct:true, why:'Slide 44, item 2, says to confirm the patient with at least two patient identifiers.'},
  {t:'One', correct:false, why:'Slide 44, item 2, requires at least two identifiers, so one is not enough.'},
  {t:'Three', correct:false, why:'Slide 44, item 2, requires at least two identifiers; the number is not set at three.'},
  {t:'None, if the patient is known to the pharmacy', correct:false, why:'Slide 44, item 2, requires at least two patient identifiers and states no exception.'}],
 teach:'The rubric begins with introducing yourself as a pharmacist intern, confirming the patient with at least two identifiers and explaining the purpose of the session.',
 cite:'Intro-to-Dispensing.pdf slide 44'},
];

/* ==========================================================================
   Week 14: Dr. Lahoud, DEENT lab (11/16). Sources: DEENT-Lab-Deck.pdf (the
   "Week 14: DEENT Activities" deck, text read from Drive) and the 11/16
   transcript. The deck names what the lab reviews (acne, ophthalmic
   conditions, psoriasis and scaly dermatoses) but the disease content is in
   Dr. Patel's acne lecture, Dr. Lam's ophthalmic documents and the
   psoriasis lecture, which are not in this drill; only what the Week 14 deck
   states is keyed here.
   ========================================================================== */
QUESTIONS.push(
{id:'x01', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'deent', sub:'quest', concept:'quest-steps',
 tags:['QuEST'], source:'slide',
 stem:'What are the four steps of QuEST in order?',
 options:[
  {t:'Quickly assess, establish self-care candidacy, suggest strategies, and talk about products', correct:true, why:'Week 14 deck, QuEST/SCHOLAR-MAC slide: quickly assess, establish self-care candidacy, suggest strategies, talk about products.'},
  {t:'Quickly assess, suggest strategies, establish self-care candidacy, and talk about products', correct:false, why:'Self-care candidacy is established before strategies are suggested (Week 14 deck).'},
  {t:'Talk about products, quickly assess, establish candidacy, and suggest strategies', correct:false, why:'Talking about the selected products is the last step (Week 14 deck).'},
  {t:'Establish candidacy, quickly assess, talk about products, and suggest strategies', correct:false, why:'The quick assessment with SCHOLAR-MAC comes first (Week 14 deck).'}],
 teach:'Q: quickly assess the patient using SCHOLAR-MAC. E: establish that the patient is an appropriate candidate for self-care. S: suggest appropriate self-care strategies. T: talk with the patient about the selected product(s).',
 cite:'DEENT-Lab-Deck.pdf, QuEST/SCHOLAR-MAC and Part 1 slides; 11/16 transcript (T)'},

{id:'x02', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'deent', sub:'quest', concept:'quest-talk',
 tags:['QuEST','counseling'], source:'slide',
 stem:'In the “Talk” step of QuEST, which three topics are covered for the selected product?',
 options:[
  {t:'Administration, efficacy, and safety', correct:true, why:'Week 14 deck: counseling points on administration/application; efficacy (what the patient can expect); safety (adverse effects).'},
  {t:'Cost, insurance coverage, and brand availability', correct:false, why:'The deck’s Talk step lists administration or application, efficacy and safety, not cost or coverage (Week 14 deck).'},
  {t:'Pathophysiology, history, and prognosis', correct:false, why:'The deck’s Talk step lists administration or application, efficacy and safety, not disease background (Week 14 deck).'},
  {t:'Dose calculation, compounding, and storage', correct:false, why:'The deck’s Talk step lists administration or application, efficacy and safety, not compounding or storage (Week 14 deck).'}],
 teach:'Efficacy asks what the patient can expect; safety asks which adverse effects the patient might experience.',
 cite:'DEENT-Lab-Deck.pdf, QuEST/SCHOLAR-MAC and Part 1 slides'},

{id:'x03', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'deent', sub:'quest', concept:'quest-acne-products',
 tags:['acne','OTC'], source:'slide',
 stem:'A patient with acne asks for an OTC product to treat it. Which pair is reviewed for counseling, efficacy and safety?',
 options:[
  {t:'Benzoyl peroxide and adapalene', correct:true, why:'Week 14 deck, Part 1: review OTC products like benzoyl peroxide and topical retinoids (for example, adapalene).'},
  {t:'Hydrocortisone cream and zinc oxide ointment', correct:false, why:'These are bite and itch products from Week 3 (OTC deck slides 27–28), not the acne products named in Part 1.'},
  {t:'Permethrin and pyrethrins', correct:false, why:'Permethrin and pyrethrins are head lice products, not acne products (OTC deck slides 32–33).'},
  {t:'Camphor and menthol', correct:false, why:'Camphor and menthol are counterirritants, not acne products (OTC deck slide 26).'}],
 teach:'(T) The acne recommendation follows Dr. Patel’s algorithm for mild, moderate and severe acne; the lab practices using QuEST/SCHOLAR-MAC to decide self-care eligibility, choose a product and counsel.',
 cite:'DEENT-Lab-Deck.pdf, QuEST/SCHOLAR-MAC and Part 1 slides; 11/16 transcript (T)'},

{id:'x04', skill:'recall', lowYield:true, prof:'Dr. Lahoud', tier:'new', topic:'deent', sub:'quest', concept:'ophtho-states',
 tags:['ophthalmic'], source:'slide',
 stem:'Which ophthalmic disease states are sorted in the Part 2 review?',
 options:[
  {t:'Dry eye, allergic conjunctivitis, bacterial or viral conjunctivitis, glaucoma', correct:true, why:'Week 14 deck, Part 2 activity 1: dry eye disease, allergic conjunctivitis, bacterial or viral conjunctivitis, primary open-angle glaucoma.'},
  {t:'Dry eye disease, cataract, age-related macular degeneration, and retinal detachment', correct:false, why:'Cataract, macular degeneration and retinal detachment are not among the states named in the Part 2 review (Week 14 deck).'},
  {t:'Allergic conjunctivitis, uveitis, blepharitis, and keratitis', correct:false, why:'Uveitis, blepharitis and keratitis are not among the states named in the Part 2 review (Week 14 deck).'},
  {t:'Glaucoma, cataract, dry eye disease, and uveitis', correct:false, why:'Cataract and uveitis are not among the states named in the Part 2 review (Week 14 deck).'}],
 teach:'(T) The exam may ask how these differ in symptoms and therapy; the clinical details come from Dr. Lam’s documents, which are not in this drill.',
 cite:'DEENT-Lab-Deck.pdf, Part 2 slide; 11/16 transcript (T)'},

{id:'x05', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'deent', sub:'quest', concept:'eoor-eye-drop',
 tags:['EOOR','glaucoma'], source:'slide',
 stem:'In the ophthalmic review, errors found on a glaucoma prescription are corrected using which communication format?',
 options:[
  {t:'SBAR', correct:true, why:'Week 14 deck, Part 2 activity 2: identify errors and omissions and correct using SBAR.'},
  {t:'The 3 prime questions', correct:false, why:'The prime questions are for patient counseling (Intro to Dispensing slide 43).'},
  {t:'SOAP', correct:false, why:'SOAP is a documentation format, not the format named for correcting errors (OTC deck slide 7).'},
  {t:'Ask-Tell-Ask', correct:false, why:'Ask-Tell-Ask is for vaccine hesitancy (Immunizations slide 32).'}],
 teach:'(T) The lab relates prescription verification principles to DEENT therapeutic concepts.',
 cite:'DEENT-Lab-Deck.pdf, Part 2 slide; 11/16 transcript (T)'}
);

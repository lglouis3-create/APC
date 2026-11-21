/* ==========================================================================
   Week 14 lab, Part 2: the "Ophthalmic Review: Which is which?" grid (Mix and
   Match warm-up). Source: the lab's verified answer key (Louis, 2026-11-21,
   photo of the completed grid): rows Clinical presentation, Treatment
   approach, Compress, Non-pharm recommendation, First line, Example
   medication with instructions; columns dry eye disease, allergic
   conjunctivitis, bacterial/viral conjunctivitis, primary open-angle
   glaucoma (POAG). Cited as Ophthalmic-Review-Key.pdf (a photo, not a PDF).
   Where it differs from Dr. Lam's slides: the key lists an ocular
   antimicrobial as first line for bacterial/viral conjunctivitis; Dr. Lam's
   slide 34 gives cold compresses and referral. The questions key the lab's
   answer key.
   ========================================================================== */
TOPICS.push({id:'dboard', name:'DEENT lab: Which is which (ophthalmic review)', prof:'Dr. Lahoud',
  cite:'Ophthalmic-Review-Key.pdf',
  subs:[
   {id:'present', name:'Presentation and treatment approach', cite:'Ophthalmic-Review-Key.pdf rows 1-2'},
   {id:'nondrug',  name:'Compresses and non-drug measures',     cite:'Ophthalmic-Review-Key.pdf rows 3-4'},
   {id:'drugs',    name:'First line and example medications',   cite:'Ophthalmic-Review-Key.pdf rows 5-6'}]});

QUESTIONS.push(
{id:'xb01', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'present', concept:'board-dry-eye-presentation',
 tags:['dry eye','Which is which'], source:'slide',
 stem:'A patient has a mildly red eye and a sandy, gritty feeling, as if something is in the eye. Which condition fits best?',
 options:[
  {t:'Dry eye disease', correct:true, why:'The answer key gives a mildly red eye with a sandy, gritty or foreign-body sensation as the dry eye presentation.'},
  {t:'Allergic conjunctivitis', correct:false, why:'The answer key gives itching, tearing and red eyes for allergic conjunctivitis; itching is the leading complaint, not grittiness.'},
  {t:'Bacterial or viral conjunctivitis', correct:false, why:'The answer key gives tearing and lid crusting for bacterial or viral conjunctivitis, not a sandy, gritty feeling.'},
  {t:'Primary open-angle glaucoma', correct:false, why:'The answer key says POAG is asymptomatic until substantial visual field loss occurs, so it does not cause a gritty feeling.'}],
 teach:'Presentations in the lab key: dry eye, mildly red with a sandy, gritty or foreign-body feeling; allergic conjunctivitis, itching, tearing and red eyes; bacterial or viral conjunctivitis, tearing and lid crusting; POAG, no symptoms until substantial visual field loss.',
 cite:'Ophthalmic-Review-Key.pdf (Clinical presentation row)'},

{id:'xb02', skill:'tell', type:'match', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'present', concept:'board-presentation-match',
 tags:['Which is which'], source:'slide',
 stem:'Match each presentation to the condition.',
 left:'Presentation', right:'Condition',
 pairs:[
  {l:'Itching, tearing and red eyes', r:'Allergic conjunctivitis', why:'The Clinical presentation row of the lab answer key lists this presentation under that condition.'},
  {l:'Tearing and lid crusting', r:'Bacterial or viral conjunctivitis', why:'The Clinical presentation row of the lab answer key lists this presentation under that condition.'},
  {l:'No symptoms until substantial visual field loss', r:'Primary open-angle glaucoma', why:'The Clinical presentation row of the lab answer key lists this presentation under that condition.'},
  {l:'Mildly red eye with a sandy, gritty feeling', r:'Dry eye disease', why:'The Clinical presentation row of the lab answer key lists this presentation under that condition.'}],
 teach:'Itch separates allergic conjunctivitis from the bacterial or viral types, which show tearing with lid crusting; grittiness marks dry eye; POAG gives no early symptoms.',
 cite:'Ophthalmic-Review-Key.pdf (Clinical presentation row)'},

{id:'xb03', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'present', concept:'board-bv-presentation',
 tags:['conjunctivitis','Which is which'], source:'slide',
 stem:'A patient has tearing and crusting along the eyelid margins. Which condition fits best?',
 options:[
  {t:'Bacterial or viral conjunctivitis', correct:true, why:'The answer key lists tearing and lid crusting as the clinical presentation of bacterial or viral conjunctivitis.'},
  {t:'Allergic conjunctivitis with itching', correct:false, why:'The key gives itching, tearing and red eyes for allergic conjunctivitis; lid crusting is not listed for it.'},
  {t:'Dry eye disease with a gritty feeling', correct:false, why:'The key gives a mildly red eye with a gritty sensation for dry eye disease, not tearing with lid crusting.'},
  {t:'Primary open-angle glaucoma', correct:false, why:'The key says POAG is asymptomatic until substantial visual field loss, so it does not cause lid crusting.'}],
 teach:'Lid crusting with tearing points to an infectious cause, while itch points to allergy.',
 cite:'Ophthalmic-Review-Key.pdf (Clinical presentation row)'},

{id:'xb04', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'present', concept:'board-poag-presentation',
 tags:['glaucoma','Which is which'], source:'slide',
 stem:'Which condition is asymptomatic until substantial visual field loss occurs?',
 options:[
  {t:'Primary open-angle glaucoma', correct:true, why:'The answer key gives asymptomatic until substantial visual field loss occurs as the POAG presentation.'},
  {t:'Dry eye disease', correct:false, why:'The key gives a mildly red eye with a sandy, gritty feeling for dry eye disease, which causes symptoms early.'},
  {t:'Allergic conjunctivitis', correct:false, why:'The key gives itching, tearing and red eyes for allergic conjunctivitis, which causes symptoms early.'},
  {t:'Bacterial or viral conjunctivitis', correct:false, why:'The key gives tearing and lid crusting for bacterial or viral conjunctivitis, which causes symptoms early.'}],
 teach:'POAG is silent early, which is why treatment aims to lower intraocular pressure before vision is lost.',
 cite:'Ophthalmic-Review-Key.pdf (Clinical presentation row)'},

{id:'xb05', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'nondrug', concept:'board-warm-compress',
 tags:['compress','Which is which'], source:'slide',
 stem:'Which condition is helped by a warm compress?',
 options:[
  {t:'Dry eye disease', correct:true, why:'The Compress row of the lab key lists a warm compress for dry eye disease.'},
  {t:'Allergic conjunctivitis', correct:false, why:'The Compress row lists a cold compress, not a warm one, for allergic conjunctivitis.'},
  {t:'Bacterial or viral conjunctivitis', correct:false, why:'The Compress row lists a cold compress, not a warm one, for bacterial or viral conjunctivitis.'},
  {t:'Primary open-angle glaucoma', correct:false, why:'The Compress row of the lab key says a compress is not helpful in POAG, so no temperature applies.'}],
 teach:'Compress row: dry eye warm; allergic conjunctivitis cold; bacterial or viral conjunctivitis cold; POAG not helpful.',
 cite:'Ophthalmic-Review-Key.pdf (Compress row)'},

{id:'xb06', skill:'tell', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dboard', sub:'nondrug', concept:'board-cold-compress',
 tags:['compress','Which is which'], source:'slide',
 stem:'Which conditions use a cold compress? Select all that apply.',
 options:[
  {t:'Allergic conjunctivitis', correct:true, why:'The Compress row of the lab key lists a cold compress for allergic conjunctivitis.'},
  {t:'Bacterial or viral conjunctivitis', correct:true, why:'The Compress row lists a cold compress for bacterial or viral conjunctivitis as well.'},
  {t:'Dry eye disease', correct:false, why:'The Compress row lists a warm compress, not a cold one, for dry eye disease.'},
  {t:'Primary open-angle glaucoma', correct:false, why:'The Compress row says a compress is not helpful for POAG, so no temperature applies.'}],
 teach:'Cold compresses are for the two conjunctivitis types; dry eye uses a warm compress; a compress does nothing for POAG.',
 cite:'Ophthalmic-Review-Key.pdf (Compress row)'},

{id:'xb07', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'nondrug', concept:'board-poag-compress',
 tags:['compress','glaucoma'], source:'slide',
 stem:'What does a compress do for a patient with primary open-angle glaucoma?',
 options:[
  {t:'Nothing; it is not helpful', correct:true, why:'The Compress row of the lab key lists a compress as not helpful for POAG.'},
  {t:'A warm compress lowers pressure', correct:false, why:'The key lists a warm compress for dry eye disease only; for POAG the compress is not helpful.'},
  {t:'A cold compress lowers pressure', correct:false, why:'The key lists a cold compress for the two conjunctivitis types; for POAG the compress is not helpful.'},
  {t:'It replaces drug therapy early on', correct:false, why:'The key lists prostaglandin analogs as first line for POAG; a compress is not helpful and replaces nothing.'}],
 teach:'POAG treatment targets intraocular pressure, which a compress does not change.',
 cite:'Ophthalmic-Review-Key.pdf (Compress row)'},

{id:'xb08', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'present', concept:'board-treatment-approach',
 tags:['treatment approach','Which is which'], source:'slide',
 stem:'The treatment approach is to reduce intraocular pressure. Which condition is being treated?',
 options:[
  {t:'Primary open-angle glaucoma', correct:true, why:'The Treatment Approach row of the lab key gives reducing intraocular pressure for POAG.'},
  {t:'Dry eye disease', correct:false, why:'The Treatment Approach row gives symptomatic relief, with referral vital for diagnosis and treatment, for dry eye disease.'},
  {t:'Allergic conjunctivitis', correct:false, why:'The Treatment Approach row gives symptomatic relief for allergic conjunctivitis, not pressure lowering.'},
  {t:'Bacterial or viral conjunctivitis', correct:false, why:'The Treatment Approach row gives symptomatic treatment and referral for an antibiotic if applicable, not pressure lowering.'}],
 teach:'Only POAG is treated by lowering intraocular pressure; the other three are managed for symptoms, with referral where the key says so.',
 cite:'Ophthalmic-Review-Key.pdf (Treatment approach row)'},

{id:'xb09', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'drugs', concept:'board-poag-first-line',
 tags:['glaucoma','first line'], source:'slide',
 stem:'Which drug class is first line for primary open-angle glaucoma?',
 options:[
  {t:'Prostaglandin analogs', correct:true, why:'The First line row of the lab key gives prostaglandin analogs for POAG.'},
  {t:'Ocular lubricants', correct:false, why:'The First line row gives ocular lubricants (artificial tears or bland ointments) for dry eye disease.'},
  {t:'Ophthalmic antihistamines', correct:false, why:'The First line row gives artificial tears, then ophthalmic antihistamines if symptoms persist, for allergic conjunctivitis.'},
  {t:'Ocular antimicrobials', correct:false, why:'The First line row gives an ocular antimicrobial, with or without tears or antihistamines, for bacterial or viral conjunctivitis.'}],
 teach:'First line by condition: dry eye, lubricants; allergic conjunctivitis, tears then antihistamines; bacterial or viral conjunctivitis, ocular antimicrobial; POAG, prostaglandin analogs.',
 cite:'Ophthalmic-Review-Key.pdf (First line row)'},

{id:'xb10', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'drugs', concept:'board-allergic-first-line',
 tags:['allergic conjunctivitis','first line'], source:'slide',
 stem:'What is first line for allergic conjunctivitis?',
 options:[
  {t:'Tears, then antihistamines if symptoms persist', correct:true, why:'The First line row of the lab key gives artificial tears followed by ophthalmic antihistamines if symptoms persist.'},
  {t:'Ocular antimicrobial drops, with or without tears', correct:false, why:'The First line row gives an ocular antimicrobial for bacterial or viral conjunctivitis, not allergic conjunctivitis.'},
  {t:'Prostaglandin analog drops, dosed once daily', correct:false, why:'The First line row gives prostaglandin analogs for POAG, not allergic conjunctivitis.'},
  {t:'Bland ophthalmic ointment as the first choice', correct:false, why:'The First line row gives lubricants, including bland ointments, for dry eye disease, not allergic conjunctivitis.'}],
 teach:'Allergic conjunctivitis: remove or avoid the allergen, a cold compress, and tears first with an antihistamine added if symptoms persist.',
 cite:'Ophthalmic-Review-Key.pdf (First line row)'},

{id:'xb11', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'drugs', concept:'board-dry-eye-first-line',
 tags:['dry eye','first line'], source:'slide',
 stem:'What is first line for dry eye disease?',
 options:[
  {t:'Ocular lubricants: tears or bland ointments', correct:true, why:'The First line row of the lab key gives ocular lubricants, meaning artificial tears or bland ophthalmic ointments.'},
  {t:'Ophthalmic antihistamine drops, if tears fail', correct:false, why:'The First line row gives antihistamines only after tears fail in allergic conjunctivitis, not for dry eye disease.'},
  {t:'Prostaglandin analog drops, dosed once daily', correct:false, why:'The First line row gives prostaglandin analogs for POAG, not for dry eye disease.'},
  {t:'An ocular antimicrobial, with or without tears', correct:false, why:'The First line row gives an ocular antimicrobial for bacterial or viral conjunctivitis, not dry eye disease.'}],
 teach:'The key adds that dry eye treatment is symptomatic relief, but referral is vital for diagnosis and treatment.',
 cite:'Ophthalmic-Review-Key.pdf (First line and Treatment approach rows)'},

{id:'xb12', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'present', concept:'board-bv-approach',
 tags:['conjunctivitis','treatment approach'], source:'slide',
 stem:'Which approach fits bacterial or viral conjunctivitis?',
 options:[
  {t:'Symptomatic care; antibiotic referral if applicable', correct:true, why:'The Treatment Approach row gives symptomatic treatment, with referral to a provider for an antibiotic if applicable.'},
  {t:'Pressure-lowering drops started at once, then tears', correct:false, why:'The Treatment Approach row gives pressure lowering only for POAG, not bacterial or viral conjunctivitis.'},
  {t:'Symptomatic relief alone with no referral', correct:false, why:'The row for allergic conjunctivitis is symptomatic relief; bacterial or viral conjunctivitis adds referral for an antibiotic.'},
  {t:'A warm compress and no other treatment', correct:false, why:'The Compress row lists a cold compress for bacterial or viral conjunctivitis; a warm compress is for dry eye disease.'}],
 teach:'The key also lists an ocular antimicrobial, with or without tears or antihistamines for symptoms, as first line.',
 cite:'Ophthalmic-Review-Key.pdf (Treatment approach and First line rows)'},

{id:'xb13', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'nondrug', concept:'board-nonpharm-poag',
 tags:['glaucoma','non-drug'], source:'slide',
 stem:'Which non-drug recommendation belongs to primary open-angle glaucoma?',
 options:[
  {t:'Limit drugs that raise intraocular pressure', correct:true, why:'The Non-pharm row of the lab key gives limiting or eliminating drugs that increase intraocular pressure for POAG.'},
  {t:'Avoid dusty places that dry out the tear film', correct:false, why:'The Non-pharm row gives avoiding environments that increase tear film evaporation for dry eye disease.'},
  {t:'Remove the allergen or avoid exposure to it', correct:false, why:'The Non-pharm row gives removing or avoiding the offending allergen for allergic conjunctivitis.'},
  {t:'Apply a compress to the closed eye', correct:false, why:'The Non-pharm row gives a compress for bacterial or viral conjunctivitis; the Compress row says it is not helpful in POAG.'}],
 teach:'Non-drug measures: dry eye, avoid environments that increase evaporation; allergic conjunctivitis, avoid the allergen; bacterial or viral conjunctivitis, a compress; POAG, limit drugs that raise pressure.',
 cite:'Ophthalmic-Review-Key.pdf (Non-pharm recommendation row)'},

{id:'xb14', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'nondrug', concept:'board-nonpharm-dry',
 tags:['dry eye','non-drug'], source:'slide',
 stem:'Which advice fits a patient with dry eye disease?',
 options:[
  {t:'Avoid dusty places that increase tear evaporation', correct:true, why:'The Non-pharm row gives avoiding environments that increase evaporation of the tear film, for example dusty places.'},
  {t:'Use a cold compress and avoid exposure to the allergen', correct:false, why:'The key pairs the allergen and a cold compress with allergic conjunctivitis; dry eye uses a warm compress.'},
  {t:'Limit drugs that increase intraocular pressure', correct:false, why:'The Non-pharm row gives this advice for POAG, not dry eye disease.'},
  {t:'Use a cold compress and tears every hour', correct:false, why:'The Compress row lists a warm compress for dry eye, and the tear frequency in the key is once or twice a day.'}],
 teach:'Dry eye: warm compress, avoid dry or dusty environments, ocular lubricants, and referral for diagnosis and treatment.',
 cite:'Ophthalmic-Review-Key.pdf (Non-pharm recommendation row)'},

{id:'xb15', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'drugs', concept:'board-ketotifen',
 tags:['allergic conjunctivitis','ketotifen'], source:'slide',
 stem:'Ketotifen dosed twice per day for patients 3 years and older is the example medication for which condition?',
 options:[
  {t:'Allergic conjunctivitis', correct:true, why:'The Example medication row of the lab key gives ketotifen, dosed twice per day for patients 3 years and older, for allergic conjunctivitis.'},
  {t:'Dry eye disease', correct:false, why:'The Example medication row gives artificial tears once or twice a day for dry eye disease.'},
  {t:'Bacterial or viral conjunctivitis', correct:false, why:'The Example medication row gives ciprofloxacin ophthalmic solution for bacterial or viral conjunctivitis.'},
  {t:'Primary open-angle glaucoma', correct:false, why:'The Example medication row gives latanoprost, dosed once daily, for POAG.'}],
 teach:'Example medications in the key: artificial tears (dry eye), ketotifen (allergic conjunctivitis), ciprofloxacin ophthalmic solution (bacterial or viral conjunctivitis), latanoprost (POAG).',
 cite:'Ophthalmic-Review-Key.pdf (Example medication row)'},

{id:'xb16', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'drugs', concept:'board-ciprofloxacin',
 tags:['conjunctivitis','ciprofloxacin'], source:'slide',
 stem:'How is ciprofloxacin ophthalmic solution dosed for bacterial conjunctivitis?',
 options:[
  {t:'1–2 drops every 2 hours for 2 days, then every 4 hours for 5 days', correct:true, why:'The Example medication row of the lab key gives 1–2 drops q2h for 2 days and then 1–2 drops q4h for 5 days.'},
  {t:'1–2 drops every 4 hours for 2 days, then every 2 hours for 5 days', correct:false, why:'This reverses the schedule; the key starts with the more frequent every-2-hour dosing for 2 days.'},
  {t:'1–2 drops once daily for 7 days, with no step-down in frequency', correct:false, why:'The key gives a step-down schedule of every 2 hours then every 4 hours, not a once-daily dose.'},
  {t:'1–2 drops every 2 hours for 7 days, with no step-down in frequency', correct:false, why:'The key steps down to every 4 hours after 2 days rather than staying at every 2 hours.'}],
 teach:'The key gives the schedule as q2h × 2 days, then q4h × 5 days, for a 7-day course.',
 cite:'Ophthalmic-Review-Key.pdf (Example medication row)'},

{id:'xb17', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'drugs', concept:'board-latanoprost',
 tags:['glaucoma','latanoprost','counseling'], source:'slide',
 stem:'What dosing and storage instructions apply to latanoprost for glaucoma?',
 options:[
  {t:'Once daily; refrigerate until opened, then room temperature', correct:true, why:'The Example medication row gives once daily dosing, refrigeration before opening and room temperature storage once opened.'},
  {t:'Twice daily; keep it refrigerated even after it has been opened', correct:false, why:'The key gives once daily dosing and room temperature storage once opened, not twice daily or refrigeration after opening.'},
  {t:'Once daily; store at room temperature before opening', correct:false, why:'The key says to refrigerate latanoprost before opening and store it at room temperature only once opened.'},
  {t:'Four times daily; discard 30 days after opening', correct:false, why:'The key gives once daily dosing for latanoprost, a prostaglandin analog, not four times daily.'}],
 teach:'Latanoprost is a prostaglandin analog, the first-line class for POAG in the key.',
 cite:'Ophthalmic-Review-Key.pdf (Example medication row)'},

{id:'xb18', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dboard', sub:'drugs', concept:'board-artificial-tears',
 tags:['dry eye','artificial tears','counseling'], source:'slide',
 stem:'What instructions does the key give for artificial tears in dry eye disease?',
 options:[
  {t:'Once or twice a day, on arising and before retiring', correct:true, why:'The Example medication row gives once or twice a day, typically on arising in the morning and before retiring at night.'},
  {t:'Every 2 hours for 2 days, then every 4 hours for 5 days', correct:false, why:'That schedule is the ciprofloxacin ophthalmic solution dosing for bacterial conjunctivitis in the same key.'},
  {t:'Twice per day, for patients 3 years and older', correct:false, why:'That is the ketotifen instruction for allergic conjunctivitis in the same key.'},
  {t:'Once daily; refrigerate before opening', correct:false, why:'That is the latanoprost instruction for POAG in the same key.'}],
 teach:'The key gives one example instruction for each condition; matching the instruction to the drug is how the row is tested.',
 cite:'Ophthalmic-Review-Key.pdf (Example medication row)'},

{id:'xb19', skill:'tell', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dboard', sub:'drugs', concept:'board-poag-sort',
 tags:['glaucoma','Which is which'], source:'slide',
 stem:'Which statements describe primary open-angle glaucoma? Select all that apply.',
 options:[
  {t:'It is asymptomatic until substantial visual field loss', correct:true, why:'The Clinical presentation row of the lab key gives this for POAG.'},
  {t:'The treatment approach is to reduce intraocular pressure', correct:true, why:'The Treatment approach row gives reducing intraocular pressure for POAG.'},
  {t:'Prostaglandin analogs are first line', correct:true, why:'The First line row of the lab key gives prostaglandin analogs as the first-line drug class for POAG.'},
  {t:'A warm compress is recommended', correct:false, why:'The Compress row lists a warm compress for dry eye disease; for POAG it says not helpful.'},
  {t:'Artificial tears are first line', correct:false, why:'The First line row gives artificial tears for dry eye disease and as the first step for allergic conjunctivitis, not POAG.'}],
 teach:'POAG row of the key: asymptomatic early; reduce intraocular pressure; no compress; limit drugs that raise pressure; prostaglandin analogs; latanoprost once daily.',
 cite:'Ophthalmic-Review-Key.pdf (POAG column)'}
);

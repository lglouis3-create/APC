/* ==========================================================================
   Week 14, Part 3 of Dr. Lahoud's DEENT lab (psoriasis and scaly dermatoses
   sorting challenge): dandruff, seborrheic dermatitis and psoriasis.
   Source: Patel_Scaly-Dermatoses-Therapeutics-Student.pdf (Dr. Patel's Lecture 7,
   slide N = PDF page; printed slide text only) and the 11/10 and 11/11
   transcripts of that lecture, marked (T). Facts were taken from the student's
   verified DEENT course drill (q13_L07.js) and the slide text was re-read in
   the DEENT slide folder.
   Slides 26 and 31 both give psoriasis severity as <= 5%, >= 8% and >= 10% BSA
   (slide 31 underlines the inequality signs; checked on the slide images). The
   items key the 10% cut-off that Dr. Patel confirmed on 11/11 (T); no item
   uses a BSA of exactly 5%, 8% or 10%. She first said ">= 20%" for
   severe and then told students to follow the slide (10%).
   Not keyed: doses of biologics and cyclosporine, PASI/DLQI scoring, epidermal
   turnover multiples.
   ========================================================================== */
TOPICS.push({id:'dscaly', name:'DEENT lab: scaly dermatoses and psoriasis', prof:'Dr. Lahoud', cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf', subs:[
 {id:'sort', name:'Dandruff, seborrheic dermatitis or psoriasis', cite:'slides 6–8, 11–13'},
 {id:'otc', name:'OTC products, counseling and referral', cite:'slides 7, 9, 16, 18'},
 {id:'sev', name:'Psoriasis severity and non-drug measures', cite:'slides 24, 26, 31, 33–34'},
 {id:'alg', name:'Psoriasis treatment placement and agents', cite:'slides 35–45'}]});

QUESTIONS.push(
{id:'xs01', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'sort', concept:'dscaly-sort-dandruff',
 tags:['dandruff','sorting'], source:'slide',
 stem:'A patient has thin white or grey flakes on the scalp with no inflammation of the skin. Which scaly dermatosis is this?',
 options:[
  {t:'Dandruff', correct:true, why:'Slide 6 gives dandruff thin white or grey flakes on the scalp, with inflammation absent.'},
  {t:'Seborrheic dermatitis', correct:false, why:'Slide 6 gives seborrheic dermatitis yellow oily scales on red skin, with inflammation present.'},
  {t:'Plaque psoriasis', correct:false, why:'Slide 6 gives psoriasis red plaques with sharp borders and silvery white scales, with inflammation present.'},
  {t:'Rosacea', correct:false, why:'Rosacea is not one of the three scaly dermatoses compared on slide 6, so it does not fit this sorting.'}],
 teach:'Dandruff is the non-inflammatory scalp condition. Seborrheic dermatitis and psoriasis both have inflammation and epidermal hyperplasia.',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slide 6'},

{id:'xs02', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'sort', concept:'dscaly-sort-sd',
 tags:['seborrheic dermatitis','sorting'], source:'both',
 stem:'A man has yellow, greasy scales on red skin of the scalp, ears and face. Which scaly dermatosis is this?',
 options:[
  {t:'Seborrheic dermatitis', correct:true, why:'Slides 6 and 12 describe yellow, greasy scales on red skin of the head, ears and face as seborrheic dermatitis.'},
  {t:'Dandruff', correct:false, why:'Dandruff is limited to the scalp as thin white or grey flakes without inflammation (slide 6).'},
  {t:'Plaque psoriasis', correct:false, why:'Psoriasis has sharp-bordered red plaques with silvery white scales on the elbows and knees (slide 6).'},
  {t:'Infant cradle cap (scalp scaling only)', correct:false, why:'Cradle cap is the infant form of seborrheic dermatitis (slide 12), mostly scalp scaling in infants (T); this patient is an adult with ear and face involvement.'}],
 teach:'Key words for seborrheic dermatitis: greasy, yellowish scales, and a location beyond the scalp such as the ears and face (T: 11/10 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 6, 12; 11/10 transcript (T)'},

{id:'xs03', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'sort', concept:'dscaly-sort-psoriasis',
 tags:['psoriasis','sorting'], source:'slide',
 stem:'A patient has discrete, symmetrical red plaques with sharp borders and silvery white scales on the elbows and knees. Which scaly dermatosis is this?',
 options:[
  {t:'Psoriasis', correct:true, why:'Slide 6 gives psoriasis discrete symmetrical red plaques with sharp borders, silvery white scales and bleeding points.'},
  {t:'Dandruff', correct:false, why:'Dandruff produces thin white or grey scalp flakes, not red plaques on the elbows and knees (slide 6).'},
  {t:'Seborrheic dermatitis', correct:false, why:'Seborrheic dermatitis favors the scalp, face and trunk with yellow oily scales (slide 6).'},
  {t:'Cradle cap', correct:false, why:'Cradle cap is infant scalp scaling from seborrheic dermatitis (slide 12), not plaques on the elbows and knees.'}],
 teach:'Psoriasis involves the scalp, elbows, knees, trunk and lower extremities, with sharp-bordered red plaques and silvery white scales.',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slide 6'},

{id:'xs04', skill:'tell', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dscaly', sub:'sort', concept:'dscaly-features-absent-dandruff',
 tags:['dandruff','seborrheic dermatitis','psoriasis','sorting'], source:'both',
 stem:'Which features are absent in dandruff but present in both seborrheic dermatitis and psoriasis? Select all that apply.',
 options:[
  {t:'Inflammation', correct:true, why:'Slide 6 lists inflammation as absent in dandruff and present in the other two; slide 8 allows mild inflammation, which (T) is secondary to scratching, so the key follows slide 6.'},
  {t:'Epidermal hyperplasia', correct:true, why:'Slide 6 lists epidermal hyperplasia as absent in dandruff and present in the other two conditions.'},
  {t:'Malassezia involvement', correct:false, why:'Slide 8 lists Malassezia fungi in dandruff, so it is not absent there.'},
  {t:'Flaking of scalp skin', correct:false, why:'Slide 8 says dandruff causes flaking and pruritus, so flaking is present in dandruff.'}],
 teach:'Inflammation from the start, not from scratching, and epidermal hyperplasia separate seborrheic dermatitis and psoriasis from dandruff (T: 11/10 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 6, 8; 11/10 transcript (T)'},

{id:'xs05', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'sort', concept:'dscaly-malassezia',
 tags:['Malassezia','sorting'], source:'slide',
 stem:'Which condition is NOT associated with Malassezia fungi?',
 options:[
  {t:'Psoriasis', correct:true, why:'Slide 21 describes psoriasis as a T-lymphocyte mediated inflammatory disease, and no Malassezia link is given.'},
  {t:'Dandruff', correct:false, why:'Slide 8 lists the presence of Malassezia fungi as part of dandruff.'},
  {t:'Seborrheic dermatitis', correct:false, why:'Slide 11 says seborrheic dermatitis, like dandruff, involves Malassezia species.'},
  {t:'Cradle cap', correct:false, why:'Cradle cap is infant seborrheic dermatitis (slide 12), which involves Malassezia species (slide 11).'}],
 teach:'Dandruff and seborrheic dermatitis involve Malassezia. Psoriasis is an immune-mediated disease involving adaptive and innate immunity.',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 8, 11, 12, 21'},

{id:'xs06', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'otc', concept:'dscaly-hydrocortisone-dandruff',
 tags:['OTC ingredients','sorting'], source:'both',
 stem:'Which over-the-counter (OTC) ingredient is not effective for dandruff but is used for seborrheic dermatitis and psoriasis?',
 options:[
  {t:'Hydrocortisone 1%', correct:true, why:'Slide 7 marks hydrocortisone “no” for dandruff and gives 0.5–1% for seborrheic dermatitis and psoriasis.'},
  {t:'Pyrithione zinc (rinse-off)', correct:false, why:'Slide 7 lists rinse-off pyrithione zinc for dandruff, so it is effective there.'},
  {t:'Selenium sulfide', correct:false, why:'Slide 7 lists selenium sulfide 1% for dandruff, so it is effective there.'},
  {t:'Coal tar', correct:false, why:'Slide 7 lists coal tar 0.5–5% for dandruff, seborrheic dermatitis and psoriasis.'}],
 teach:'Slide 7 has two “no” cells: hydrocortisone for dandruff and sulfur for psoriasis (T: 11/10 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slide 7; 11/10 transcript (T)'},

{id:'xs07', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'otc', concept:'dscaly-sulfur-psoriasis',
 tags:['OTC ingredients','sorting'], source:'both',
 stem:'Which OTC ingredient is used for dandruff and seborrheic dermatitis but is not effective for psoriasis?',
 options:[
  {t:'Sulfur', correct:true, why:'Slide 7 gives sulfur 2–5% for dandruff and seborrheic dermatitis and “no” for psoriasis.'},
  {t:'Coal tar', correct:false, why:'Slide 7 gives coal tar 0.5–5% for all three conditions, including psoriasis.'},
  {t:'Salicylic acid', correct:false, why:'Slide 7 gives salicylic acid 1.8–3% for all three conditions, including psoriasis.'},
  {t:'Ketoconazole shampoo', correct:false, why:'Slide 7 gives ketoconazole shampoo 1% for all three conditions, including psoriasis.'}],
 teach:'Sulfur is the ingredient with “no” under psoriasis; hydrocortisone is the one with “no” under dandruff (T: 11/10 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slide 7; 11/10 transcript (T)'},

{id:'xs08', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'otc', concept:'dscaly-mild-dandruff',
 tags:['dandruff','counseling'], source:'both',
 stem:'A young man has intermittent white flakes on dark clothing, with an itch-free scalp that is not inflamed. Which product is appropriate?',
 options:[
  {t:'Non-medicated shampoo, daily or every other day', correct:true, why:'Slide 9 treats mild dandruff (intermittent, mild inflammation) with a non-medicated shampoo daily or every other day.'},
  {t:'Coal tar shampoo left on for 3–5 minutes', correct:false, why:'Slide 9 reserves OTC medicated shampoos such as coal tar for moderate to severe dandruff.'},
  {t:'Hydrocortisone 1% lotion to the scalp', correct:false, why:'Slide 7 marks hydrocortisone “no” for dandruff, so it is not effective here.'},
  {t:'Ketoconazole shampoo daily for 1–2 weeks, then 2–3 times weekly', correct:false, why:'Slide 16 gives that schedule for seborrheic dermatitis, and this patient has mild dandruff.'}],
 teach:'Mild dandruff: non-medicated shampoo. Moderate to severe (daily dandruff, moderate–severe inflammation): medicated shampoo (pyrithione zinc, selenium sulfide, coal tar).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 7, 9; 11/10 transcript (T)'},

{id:'xs09', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'otc', concept:'dscaly-moderate-dandruff-regimen',
 tags:['dandruff','counseling'], source:'both',
 stem:'A man has daily dandruff and a moderately inflamed scalp and starts a medicated shampoo. Which instructions are appropriate?',
 options:[
  {t:'3–5 minutes; daily 1 week, then 2–3 times weekly for 2–3 weeks, then weekly', correct:true, why:'Slide 9 gives this exact schedule for moderate to severe dandruff, ending with once weekly for control.'},
  {t:'Rinse off at once; use once weekly from the start for 4 weeks', correct:false, why:'Slide 9 says to leave the shampoo on the scalp for 3 to 5 minutes and begin daily for 1 week.'},
  {t:'Leave on 3–5 minutes; daily for 1–2 weeks, then 2–3 times weekly for 4 weeks', correct:false, why:'Slide 16 gives that longer taper for seborrheic dermatitis; dandruff uses 1 week daily then 2–3 weeks (slide 9).'},
  {t:'Leave on 3–5 minutes; use daily without a taper', correct:false, why:'Slide 9 tapers to 2–3 times weekly and then once weekly for control rather than staying daily.'}],
 teach:'Dandruff taper: 1 week daily, then 2–3 weeks at 2–3 times weekly, then weekly. Seborrheic dermatitis taper is longer: 1–2 weeks daily, then 4 weeks (T: 11/10 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 9, 16; 11/10 transcript (T)'},

{id:'xs10', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'otc', concept:'dscaly-sd-first-line',
 tags:['seborrheic dermatitis','OTC products'], source:'both',
 stem:'An adult has seborrheic dermatitis of the scalp. Which shampoo is first line?',
 options:[
  {t:'Ketoconazole shampoo', correct:true, why:'Slide 16 lists ketoconazole shampoo as first line for decreasing fungal growth in seborrheic dermatitis.'},
  {t:'Selenium sulfide shampoo', correct:false, why:'Slide 16 lists selenium sulfide as second line, after ketoconazole.'},
  {t:'Pyrithione zinc shampoo', correct:false, why:'Slide 16 lists pyrithione zinc as second line, after ketoconazole.'},
  {t:'Coal tar shampoo', correct:false, why:'Slide 16 lists coal tar shampoo as second line, after ketoconazole.'}],
 teach:'First line is the key word: ketoconazole shampoo (T: 11/10 transcript). Second line: selenium sulfide, pyrithione zinc, ciclopirox, coal tar.',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slide 16; 11/10 transcript (T)'},

{id:'xs11', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'otc', concept:'dscaly-sd-refer',
 tags:['seborrheic dermatitis','referral'], source:'slide',
 stem:'An adult is using an antifungal shampoo for seborrheic dermatitis. When should the patient consult a health care provider?',
 options:[
  {t:'If it worsens or persists longer than 7 days', correct:true, why:'Slide 16 says a health care provider should be consulted if the disorder worsens or symptoms persist longer than 7 days.'},
  {t:'Only after the full 4-week schedule is completed', correct:false, why:'Slide 16 sets the referral point at 7 days, not at the end of the 4-week schedule.'},
  {t:'Only after 1–2 weeks of daily shampooing', correct:false, why:'Slide 16 uses 1–2 weeks daily as the first phase of treatment, not the point for referral.'},
  {t:'Never, because it is harmless', correct:false, why:'Slide 11 calls it neither harmful nor contagious, but slide 16 still sends worsening or persistent cases to a provider.'}],
 teach:'Seborrheic dermatitis is chronic with no specific cure, but a worsening or persistent course beyond 7 days goes to a provider.',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 11, 16'},

{id:'xs12', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'otc', concept:'dscaly-infant-steroid',
 tags:['cradle cap','counseling'], source:'both',
 stem:'A pharmacist suggests hydrocortisone cream for scaling on the cheeks of a 3-week-old infant with cradle cap. What is the error?',
 options:[
  {t:'No corticosteroid should go on an infant’s face', correct:true, why:'Slide 18 says to wash the face with mild soap or cleanser, apply a facial emollient and not suggest corticosteroids.'},
  {t:'The cream must be a lotion for the scalp', correct:false, why:'Slide 17 gives corticosteroid lotion for scalp care; slide 18 says not to suggest corticosteroids for the infant’s face.'},
  {t:'A ketoconazole cream is required for infant faces', correct:false, why:'Slide 18 gives infants baby oil, a non-medicated shampoo and a soft brush, with no antifungal cream.'},
  {t:'Coal tar must be applied to the face first', correct:false, why:'Slide 18 does not use coal tar for infant seborrheic dermatitis; severe scalp cases use salicylic acid 3–5%.'}],
 teach:'Infant care: baby oil or vegetable oil massage, non-medicated shampoo, soft bristle brush; for the face, mild cleanser and emollient (T: 11/10 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 17, 18; 11/10 transcript (T)'},

{id:'xs13', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'sev', concept:'dscaly-bsa-mild-moderate',
 tags:['psoriasis','severity','BSA'], source:'both',
 stem:'A woman has two plaques on her elbows with a body surface area (BSA) involvement of 7%. Between which classes does her psoriasis fall?',
 options:[
  {t:'Mild to moderate', correct:true, why:'Slide 26 puts mild at 5% or less and moderate at 8% or more, and Dr. Patel called 7% in between (T).'},
  {t:'Mild', correct:false, why:'Slide 26 limits mild psoriasis to a BSA of 5% or less, and 7% is above that.'},
  {t:'Moderate to severe', correct:false, why:'Slide 26 puts severe at 10% or more, so 7% is too low to sit between moderate and severe.'},
  {t:'Severe', correct:false, why:'Slide 26 puts severe at a BSA of 10% or more, and 7% is below it.'}],
 teach:'Cut-offs: mild BSA 5% or less, moderate 8% or more, severe 10% or more. A value between two cut-offs takes both names, such as 7% mild to moderate and 9% moderate to severe (T: 11/11 transcript). Slides 26 and 31 both give these cut-offs; slide 26 notes that some phototherapy trials use 20% or more as the lower limit.',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 26, 31, 50; 11/11 transcript (T)'},

{id:'xs14', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'sev', concept:'dscaly-bsa-severe',
 tags:['psoriasis','severity','BSA'], source:'both',
 stem:'A man has plaques over his back, chest and both legs, with a BSA of 12%. How is his psoriasis classified?',
 options:[
  {t:'Severe', correct:true, why:'Slide 26 classes psoriasis with a BSA of 10% or more as severe, and 12% meets that.'},
  {t:'Moderate', correct:false, why:'Slide 26 puts moderate at 8% or more, but a BSA of 12% also passes the severe cut-off of 10%, the highest class met.'},
  {t:'Mild', correct:false, why:'Slide 26 limits mild psoriasis to a BSA of 5% or less, which 12% far exceeds.'},
  {t:'Mild to moderate', correct:false, why:'“Mild to moderate” is the in-between class for 5% to 8% (T: 11/11 transcript), and 12% lies above both cut-offs.'}],
 teach:'Dr. Patel first said severe was 20% or more, then told students to follow the slide: 10% (T: 11/11 transcript). She asked students to know the BSA.',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 26, 31; 11/11 transcript (T)'},

{id:'xs15', skill:'tell', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dscaly', sub:'sev', concept:'dscaly-nonpharm-sort',
 tags:['psoriasis','non-drug'], source:'both',
 stem:'Which are non-drug measures recommended for psoriasis? Select all that apply.',
 options:[
  {t:'Smoking cessation', correct:true, why:'Slide 33 lists cessation of smoking among the healthy lifestyle recommendations for all psoriasis patients.'},
  {t:'Weight management (BMI 18.5–24.9)', correct:true, why:'Slide 33 lists weight management, aiming for a body mass index of 18.5–24.9.'},
  {t:'Oatmeal baths and emollients', correct:true, why:'Slide 34 lists moisturizers or emollients and oatmeal baths as non-pharmacologic treatments.'},
  {t:'Daily ibuprofen for aches', correct:false, why:'Slide 24 lists NSAIDs among the medications that may worsen psoriasis, so ibuprofen is not a recommended measure.'}],
 teach:'Non-drug care for every patient: reduce stress, exercise, weight management, moderate alcohol, stop smoking, moisturizers, oatmeal baths and sunscreen SPF 30+ with UVA protection (T: 11/11 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 24, 33, 34; 11/11 transcript (T)'},

{id:'xs16', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'sev', concept:'dscaly-drug-trigger',
 tags:['psoriasis','triggers'], source:'slide',
 stem:'Which medication can precipitate or worsen psoriasis?',
 options:[
  {t:'Lithium', correct:true, why:'Slide 24 lists lithium among the medications that may precipitate or worsen psoriasis.'},
  {t:'Metformin', correct:false, why:'Slide 24 lists lithium, NSAIDs, antimalarials, β-blockers, fluoxetine and steroid withdrawal; metformin is not among them.'},
  {t:'Omeprazole', correct:false, why:'Slide 24 does not list omeprazole; the listed medications include lithium, NSAIDs and β-adrenergic blockers.'},
  {t:'Levothyroxine', correct:false, why:'Slide 24 does not list levothyroxine; the listed medications include lithium, NSAIDs and fluoxetine.'}],
 teach:'Medications on slide 24: lithium, NSAIDs, antimalarials such as chloroquine, β-adrenergic blockers, fluoxetine and withdrawal of corticosteroids.',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slide 24'},

{id:'xs17', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'alg', concept:'dscaly-first-drug-mild-moderate',
 tags:['psoriasis','algorithm'], source:'both',
 stem:'A man has mild plaque psoriasis (BSA 4%) on the elbows and knees and has not been treated before. Which drug therapy comes first?',
 options:[
  {t:'Topical corticosteroid', correct:true, why:'Slides 35–36 place topical agents first in mild-to-moderate psoriasis, and corticosteroids are the most effective topical (T).'},
  {t:'Methotrexate with folic acid', correct:false, why:'Slide 37 places systemic agents such as methotrexate in the moderate-to-severe algorithm, not first for mild disease.'},
  {t:'Adalimumab (Humira)', correct:false, why:'Slide 35 has no biologic in the mild-to-moderate algorithm; biologics appear only in the moderate-to-severe algorithm (slide 37).'},
  {t:'Oral psoralen plus UVA', correct:false, why:'Slide 45 reserves psoralen plus UVA light for patients with severe, refractory psoriasis.'}],
 teach:'Mild to moderate: topical agents first, with non-drug measures. Systemic therapy is last line there. Corticosteroids are applied 2 to 4 times daily, limited to 4 weeks or less (slide 36).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 35, 36, 37, 44, 45; 11/11 transcript (T)'},

{id:'xs18', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'alg', concept:'dscaly-puva-placement',
 tags:['psoriasis','phototherapy'], source:'slide',
 stem:'Which therapy is reserved for patients with severe, refractory psoriasis?',
 options:[
  {t:'Psoralen plus UVA (PUVA)', correct:true, why:'Slide 45 says PUVA photochemotherapy is reserved for patients with severe, refractory psoriasis.'},
  {t:'Calcipotriene (vitamin D3 analogue)', correct:false, why:'Slide 36 lists calcipotriene as a topical option for plaques, not a last-line therapy.'},
  {t:'Coal tar applied in the evening', correct:false, why:'Slide 36 lists coal tar as a topical applied in the evening and washed off in the morning.'},
  {t:'Apremilast (Otezla), a PDE-4 blocker', correct:false, why:'Slide 38 lists apremilast as an oral systemic agent with a response expected by week 4, not a last-line therapy.'}],
 teach:'PUVA works by psoralen cross-linking with DNA in the presence of UVA light; Dr. Patel called it the absolute last line, with about 90% responding (T: 11/11 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 36, 38, 44, 45; 11/11 transcript (T)'},

{id:'xs19', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'alg', concept:'dscaly-key-adr-sort',
 tags:['psoriasis','adverse effects','sorting'], source:'slide',
 stem:'Which adverse effect is a serious concern with PUVA photochemotherapy?',
 options:[
  {t:'Serious burns', correct:true, why:'Slide 44 lists serious burns, blistering and peeling among the side effects of PUVA.'},
  {t:'Nephrotoxicity', correct:false, why:'Slide 39 lists nephrotoxicity for cyclosporine, not for PUVA.'},
  {t:'Depression', correct:false, why:'Slide 38 lists depression among the adverse effects of apremilast, not PUVA.'},
  {t:'Hepatotoxicity', correct:false, why:'Slide 39 lists hepatotoxicity risk for methotrexate, not for PUVA.'}],
 teach:'PUVA side effects: serious burns, blistering, peeling, itching, nausea, a possible increase in basal cell and melanoma cancers, and photoaging.',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 38, 39, 44'},

{id:'xs20', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'alg', concept:'dscaly-cyclosporine',
 tags:['psoriasis','systemic','adverse effects'], source:'both',
 stem:'Which systemic psoriasis agent is nephrotoxic and not recommended for use beyond 4 months?',
 options:[
  {t:'Cyclosporine', correct:true, why:'Slide 39 says cyclosporine is not recommended for prolonged use (under 4 months) and is nephrotoxic.'},
  {t:'Methotrexate', correct:false, why:'Slide 39 ties methotrexate to hepatotoxicity risk, with folic acid given and CBC and LFTs screened.'},
  {t:'Apremilast', correct:false, why:'Slide 38 lists nausea, vomiting, diarrhea, depression and weight loss for apremilast, not nephrotoxicity.'},
  {t:'Acitretin', correct:false, why:'Slide 38 lists acitretin as an oral retinoid with a maximum response at 3 to 6 months and a pregnancy caution.'}],
 teach:'Cyclosporine: nephrotoxic, under 4 months of use, many interactions (CYP 3A4 and 2C9 inhibitor), contraindicated with untreated hypertension (T: 11/11 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 38, 39; 11/11 transcript (T)'},

{id:'xs21', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'alg', concept:'dscaly-methotrexate',
 tags:['psoriasis','systemic','counseling'], source:'both',
 stem:'Which systemic psoriasis agent is given with folic acid 1–5 mg daily and screened with a complete blood count (CBC) and liver function tests (LFTs)?',
 options:[
  {t:'Methotrexate', correct:true, why:'Slide 39 gives methotrexate with folic acid 1-5 mg daily, with CBC and LFTs as the screening.'},
  {t:'Cyclosporine', correct:false, why:'Slide 39 lists nephrotoxicity and many interactions for cyclosporine, not folic acid co-administration.'},
  {t:'Apremilast', correct:false, why:'Slide 38 lists dose titration to 30 mg twice daily for apremilast, with no folic acid.'},
  {t:'Tofacitinib', correct:false, why:'Slide 38 lists tofacitinib monitoring of lymphocytes, neutrophils, hemoglobin, liver enzymes and lipids, with no folic acid.'}],
 teach:'Methotrexate: psoriasis and psoriatic arthritis, onset 3–6 weeks, folic acid lowers nausea, bone marrow suppression and hepatotoxicity; avoid in pregnancy and cirrhosis (T: 11/11 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 38, 39; 11/11 transcript (T)'},

{id:'xs22', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dscaly', sub:'alg', concept:'dscaly-tnf-chf',
 tags:['psoriasis','biologics'], source:'both',
 stem:'A man with severe psoriasis and congestive heart failure is to start a biologic. Which agent should be avoided?',
 options:[
  {t:'Infliximab (Remicade)', correct:true, why:'Slide 41 says not to use tumor necrosis factor (TNF)-α inhibitors such as infliximab in congestive heart failure.'},
  {t:'Guselkumab (Tremfya)', correct:false, why:'Slide 42 lists guselkumab as an interleukin-23 inhibitor with active TB and live vaccines as the cautions.'},
  {t:'Ustekinumab (Stelara)', correct:false, why:'Slide 42 lists ustekinumab as an IL-12 and IL-23 inhibitor with active TB and live vaccines as the cautions.'},
  {t:'Risankizumab (Skyriza)', correct:false, why:'Slide 42 lists risankizumab as an interleukin-23 inhibitor; heart failure worsening is the anti-TNF caution (slide 43).'}],
 teach:'TNF-α inhibitors (adalimumab, etanercept, infliximab, golimumab, certolizumab): avoid in heart failure and demyelinating disease. Every biologic: no live vaccines, TB screening, stop during active infection (T: 11/11 transcript).',
 cite:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf slides 40–43; 11/11 transcript (T)'}
);

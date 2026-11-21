/* ==========================================================================
   Week 14: Dr. Lahoud, DEENT lab (11/16), acne part. Dr. Lahoud said the
   lab's acne part uses Dr. Patel's acne lecture and her mild / moderate /
   severe algorithm, practiced with QuEST/SCHOLAR-MAC. Facts are taken only
   from the student's verified DEENT course items for Dr. Patel's lecture
   (Patel_Acne-Therapeutics-Student.pdf, slide numbers as that course cites
   them; "(T)" marks a point the DEENT bank takes from the 11/10 lecture
   transcript). The Patel deck itself is not in this drill.
   Not keyed because the DEENT bank records that slide and speech disagree or
   the point is not traceable: retinoids in pregnancy, the OTC retinoid age
   boundary at exactly 12 years, isotretinoin as a severe first-line choice,
   acne prevalence figures.
   ========================================================================== */
TOPICS.push({id:'dacne', name:'DEENT lab: acne', prof:'Dr. Lahoud', cite:'Patel_Acne-Therapeutics-Student.pdf', subs:[
  {id:'assess', name:'Assessing severity and self-care candidacy', cite:'slides 7–8, 10, 17–18'},
  {id:'path', name:'Mild, moderate and severe pathway', cite:'slides 20, 40–41'},
  {id:'otc', name:'OTC products and counseling', cite:'slides 19, 23–29, 42'},
  {id:'safety', name:'Pregnancy and safety cautions', cite:'slides 33, 38'}]});

QUESTIONS.push(
{id:'xa01', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'assess', concept:'acne-grade-moderate',
 tags:['acne','severity'], source:'both',
 stem:'A 17-year-old boy has many open and closed comedones, some papules and pustules on his cheeks, and one nodule on his jaw. Scarring is mild. How should his acne be classified?',
 options:[
  {t:'Moderate acne', correct:true, why:'Moderate acne has many non-inflammatory and some inflammatory lesions, no more than one nodule and mild scarring (slide 8).'},
  {t:'Mild acne', correct:false, why:'Mild acne has some non-inflammatory lesions, at most a few papules or pustules and no nodules (slide 7); many comedones plus a nodule is beyond it.'},
  {t:'Mildly clear acne', correct:false, why:'Mildly clear acne is rare non-inflammatory lesions with no more than one small lesion (slide 7), far less than this patient has.'},
  {t:'Severe acne', correct:false, why:'Severe acne has a few nodular lesions with moderate to extensive scarring (slide 8); he has one nodule and mild scarring.'}],
 teach:'Count the lesion types and nodules: one, some, many. Rare lesions is mildly clear, some is mild, many with some inflammatory lesions and no more than one nodule is moderate, and more than one nodule with scarring is severe. (T) Dr. Patel said she uses the words one, some and many on exam cases.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 7–8; 11/10 transcript (T)'},

{id:'xa02', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'assess', concept:'acne-severe-refer',
 tags:['acne','severity','referral'], source:'slide',
 stem:'A man asks for an OTC acne product. He has many inflammatory and non-inflammatory lesions, a few nodules on his cheeks and back, and moderate scarring. What should the pharmacist do?',
 options:[
  {t:'Refer him; severe acne is not a self-care candidate', correct:true, why:'Slide 18 excludes severe acne from self-care, and a few nodular lesions with moderate scarring is severe acne (slide 8).'},
  {t:'Recommend a benzoyl peroxide wash and reassess in a few weeks', correct:false, why:'A single topical agent is the first step for mild acne (slide 40), and severe acne is excluded from self-care (slide 18).'},
  {t:'Recommend OTC adapalene gel at night and a glycolic acid peel', correct:false, why:'Topical OTC agents suit mild acne (slide 40); severe acne needs a prescriber, with an oral antibiotic and topical combination or other prescription therapy (slide 40).'},
  {t:'Recommend a salicylic acid cleanser and tea tree oil in a lotion', correct:false, why:'Salicylic acid has limited efficacy data (slide 29) and cannot treat several nodules with scarring.'}],
 teach:'Self-care exclusions for acne are severe acne, possible rosacea, exacerbating factors and comedogenic drugs (slide 18). Severe acne needs a prescriber (oral antibiotic with a topical combination, or other prescription therapy).',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 8, 18, 29, 40'},

{id:'xa03', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'path', concept:'acne-mild-first-step',
 tags:['acne','algorithm'], source:'both',
 stem:'A 15-year-old boy has some open and closed comedones on his forehead and two small papules on his chin. There are no nodules and scarring is minimal. He has used no acne product. What is the first step?',
 options:[
  {t:'One topical agent: benzoyl peroxide or a topical retinoid', correct:true, why:'Slide 40 lists topical single therapy, benzoyl peroxide or a topical retinoid, as first line for mild acne; slide 25 calls benzoyl peroxide the preferred initial OTC agent.'},
  {t:'Topical dapsone gel as the first agent, before other topicals', correct:false, why:'Slide 40 lists topical dapsone only as a second-line option for mild acne, after the first-line topical therapy has been tried.'},
  {t:'An oral antibiotic added to a topical combination', correct:false, why:'Slide 40 adds an oral antibiotic at moderate acne, not at mild acne.'},
  {t:'A combined oral contraceptive with spironolactone', correct:false, why:'Slide 40 lists contraceptives and spironolactone as a second-line hormonal option for females, and he is a boy with mild acne.'}],
 teach:'Mild acne means some non-inflammatory lesions, no more than a few papules and pustules, no nodules and minimal scarring (slide 7). Slide 40 lists one topical agent (benzoyl peroxide or a topical retinoid) as single therapy; topical combinations are a listed first-line alternative, and (T) Dr. Patel described a step by step process.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 7, 25, 40; 11/10 transcript (T)'},

{id:'xa04', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'path', concept:'acne-moderate-first-step',
 tags:['acne','algorithm'], source:'both',
 stem:'A 17-year-old boy has many open and closed comedones and some papules and pustules, with no nodules. He has never used an acne product. Which therapy comes first, before any oral antibiotic is added?',
 options:[
  {t:'Benzoyl peroxide plus a topical retinoid', correct:true, why:'Slide 40 gives topical combination therapy, such as benzoyl peroxide with a topical retinoid, as first line for moderate acne.'},
  {t:'A topical antibiotic such as clindamycin gel used alone', correct:false, why:'Topical antibiotics are not recommended as monotherapy; benzoyl peroxide is added to reduce resistance (slides 25, 31).'},
  {t:'Oral doxycycline with benzoyl peroxide and a topical retinoid', correct:false, why:'(T) Slide 40 also lists oral antibiotic regimens as moderate first line, but Dr. Patel’s stepwise ordering adds the oral antibiotic only after the topical combinations have been tried, so it is not the first step here.'},
  {t:'Oral isotretinoin as the first agent for his comedones', correct:false, why:'(T) Dr. Patel called isotretinoin the absolute last line for moderate acne, after topical and oral antibiotic combinations (slide 40).'}],
 teach:'Many non-inflammatory lesions with some inflammatory lesions is moderate acne (slide 8). First line is a topical combination; an oral antibiotic is added when the topical combinations have been tried (T, Dr. Patel’s stepwise ordering; slide 40 itself also lists oral regimens as moderate first line).',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 8, 25, 31, 40; 11/10 transcript (T)'},

{id:'xa05', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'assess', concept:'acne-mildly-clear',
 tags:['acne','severity'], source:'both',
 stem:'A 19-year-old man has no inflammation and one small closed comedone on his forehead. Which approach fits his acne?',
 options:[
  {t:'Benzoyl peroxide alone or essential oils, or no product at all', correct:true, why:'Slide 40 lists benzoyl peroxide alone or essential oils, with or without, as first line for mildly clear acne.'},
  {t:'Topical retinoid plus topical antibiotic, both applied at night', correct:false, why:'Mildly clear acne is treated with benzoyl peroxide alone or essential oils (slide 40); a retinoid plus antibiotic is a mild-acne combination, beyond one small comedone.'},
  {t:'Oral antibiotic for 3–4 months plus benzoyl peroxide gel', correct:false, why:'Oral antibiotics are moderate and severe options (slide 40), and slide 33 asks for the shortest possible duration.'},
  {t:'Referral to a prescriber for isotretinoin and its monthly tests', correct:false, why:'Isotretinoin is for severe refractory nodular acne (slide 37); one small comedone is mildly clear acne (slide 7).'}],
 teach:'Mildly clear acne is rare non-inflammatory lesions with no more than one small lesion (slide 7). It is the lowest rung of the algorithm and needs little or no treatment.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 7, 33, 37, 40; 11/10 transcript (T)'},

{id:'xa06', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'assess', concept:'acne-self-care-exclusion-drug',
 tags:['acne','referral','self-care candidacy'], source:'both',
 stem:'Which patient with acne should the pharmacist refer instead of recommending self-care?',
 options:[
  {t:'A 17-year-old boy whose acne flared after he started lithium', correct:true, why:'Slide 18 excludes acne with exacerbating factors or comedogenic drugs, and lithium is on the list of drugs that worsen acne (slide 10).'},
  {t:'A 16-year-old girl with some comedones and no inflamed lesions', correct:false, why:'Some non-inflammatory lesions with no inflammation is mild acne (slide 7), which is within self-care.'},
  {t:'A 15-year-old boy with some comedones and a few papules', correct:false, why:'A few papules and pustules with no nodules still fit mild acne (slide 7), so he is a self-care candidate.'},
  {t:'A 20-year-old woman with one small closed comedone', correct:false, why:'One small lesion is mildly clear acne (slide 7); none of the exclusions on slide 18 applies to her.'}],
 teach:'Exclusions from self-care (slide 18): severe acne, possible rosacea, exacerbating factors, comedogenic drugs. Slide 10 also lists corticosteroids, androgens, progesterone contraceptives, antiepileptics and SSRIs. (T) Dr. Patel called this a straight referral to dermatology.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 7, 10, 18; 11/10 transcript (T)'},

{id:'xa07', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'assess', concept:'acne-quest-candidacy',
 tags:['QuEST','acne','self-care candidacy'], source:'both',
 stem:'In QuEST (Quickly assess, Establish self-care candidacy, Suggest self-care strategies, Talk about the product), at which step does the pharmacist decide that a patient with severe acne needs a referral?',
 options:[
  {t:'Establish self-care candidacy', correct:true, why:'Severe acne is an exclusion from self-care (slide 18), and the Establish step is where that exclusion is checked.'},
  {t:'Quickly assess with SCHOLAR-MAC', correct:false, why:'The quick assessment gathers the history; the decision that the acne is severe enough to exclude self-care is made in the next step (slide 18).'},
  {t:'Suggest self-care strategies', correct:false, why:'Strategies such as cleansing advice (slide 19) are suggested only after the patient is judged a self-care candidate.'},
  {t:'Talk about the product', correct:false, why:'Talking about administration, efficacy and safety of the product comes last and assumes the patient is a candidate.'}],
 teach:'QuEST order: quickly assess with SCHOLAR-MAC, establish self-care candidacy, suggest self-care strategies, talk about the product. For acne, the Establish step uses the exclusions on slide 18: severe acne, possible rosacea, exacerbating factors, comedogenic drugs.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slide 18; 11/16 transcript (T)'},

{id:'xa08', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'assess', concept:'acne-scholar-mac-medications',
 tags:['SCHOLAR-MAC','acne'], source:'both',
 stem:'A mother says her 16-year-old daughter’s acne got worse over the past month. Which SCHOLAR-MAC element should the pharmacist ask about to find a possible drug cause?',
 options:[
  {t:'Medications', correct:true, why:'Slide 10 lists drugs that cause or worsen acne, including corticosteroids, lithium and androgens, so current medicines must be asked about.'},
  {t:'Location', correct:false, why:'Location tells where the acne is, such as the face only, but it does not reveal a drug that worsens acne (slide 10).'},
  {t:'Allergies', correct:false, why:'Allergies identify products to avoid; they do not reveal which drug is worsening acne (slide 10).'},
  {t:'Remitting factors', correct:false, why:'Remitting factors ask what makes the problem better; the drug causes on slide 10 are found by asking about medications.'}],
 teach:'SCHOLAR-MAC: Symptoms, Characteristics, History, Onset, Location, Aggravating factors, Remitting factors, Medications, Allergies, Conditions. The medication history can uncover acne-causing drugs such as those on slide 10, which are an exclusion from self-care (slide 18).',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 10, 18; 11/16 transcript (T)'},

{id:'xa09', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'safety', concept:'acne-tetracycline-cautions', multi:true,
 tags:['acne','pregnancy','safety'], source:'both',
 stem:'A prescriber adds oral doxycycline to a patient’s topical acne regimen. Which statements about this tetracycline-class antibiotic are correct? Select all that apply.',
 options:[
  {t:'It is for patients older than 12 years, because of tooth discoloration', correct:true, why:'Slide 33 limits minocycline and doxycycline to patients over 12 years old; use under 12 may discolor teeth permanently.'},
  {t:'It should be avoided during pregnancy because of fetal harm', correct:true, why:'Slide 33 lists fetal harm and advises avoiding the tetracyclines during pregnancy.'},
  {t:'Photosensitivity can occur, so sunscreen is advised', correct:true, why:'Slide 33 lists photosensitivity as an adverse effect of the tetracyclines, and slide 42 includes sunscreen in oral counseling.'},
  {t:'It can be taken together with oral isotretinoin', correct:false, why:'Slide 38 says not to use isotretinoin with vitamin A supplements, tetracyclines or steroids.'},
  {t:'It is used alone, without any topical agent', correct:false, why:'Slide 40 gives an oral antibiotic in combination with topical agents, not as a single agent.'}],
 teach:'Tetracyclines for acne: over 12 years, not in pregnancy, not with isotretinoin, photosensitivity, shortest possible duration with re-evaluation at 3–4 months (slide 33). (T) Dr. Patel stressed that the oral antibiotic is given with the topicals.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 33, 38, 40, 42; 11/10 transcript (T)'},

{id:'xa10', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'safety', concept:'acne-isotretinoin-contraception',
 tags:['acne','pregnancy','isotretinoin','safety'], source:'slide',
 stem:'A 19-year-old woman of reproductive potential has a prescription for oral isotretinoin. Which birth control plan fits the iPledge program?',
 options:[
  {t:'Two forms from 1 month before treatment to 1 month after', correct:true, why:'Slide 38 requires two forms of birth control from 1 month before, during, and for 1 month after treatment for females of reproductive potential.'},
  {t:'One reliable form during the 15–20 weeks of treatment only', correct:false, why:'Slide 38 requires two forms, started 1 month before and continued for 1 month after treatment, not one form during treatment only.'},
  {t:'A progestin-only pill alone, once both pregnancy tests are negative', correct:false, why:'Slide 38 says not to use progestin-only products with isotretinoin, and negative tests do not replace two forms of birth control.'},
  {t:'No added method, because the monthly pregnancy test is enough', correct:false, why:'Slide 38 requires two pregnancy tests before starting and a monthly test, in addition to two forms of birth control.'}],
 teach:'Isotretinoin carries a boxed warning for birth defects (slide 37). A female of reproductive potential needs two negative pregnancy tests before starting, a monthly test, two forms of birth control, and fills within a 7-day window; males and females who cannot get pregnant have a 30-day window (slide 38).',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 37–38'},

{id:'xa11', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'otc', concept:'acne-bp-adverse-effects',
 tags:['acne','benzoyl peroxide','counseling'], source:'both',
 stem:'A 15-year-old will start an OTC benzoyl peroxide wash. Which counseling point applies to this ingredient?',
 options:[
  {t:'It can bleach hair and clothing and cause dryness', correct:true, why:'Slide 23 lists bleaching of hair and clothing, drying, photosensitivity and contact allergy as adverse effects of benzoyl peroxide.'},
  {t:'It is malodorous and may change the color of the skin', correct:false, why:'Those are the drawbacks of sulfur on slide 23, not of benzoyl peroxide.'},
  {t:'It lowers sensitivity of the skin to sunlight', correct:false, why:'Benzoyl peroxide causes photosensitivity (slide 23), so sun protection is advised rather than relaxed.'},
  {t:'It is applied three to four times daily to affected areas', correct:false, why:'Slide 23 gives benzoyl peroxide as 1–2 times daily, with OTC strengths of 2.5–10%.'}],
 teach:'Benzoyl peroxide: OTC 2.5–10%, 1–2 times daily; drying, photosensitivity, contact allergy, bleaching. Irritation is the most common effect and is more likely with higher strengths; side effects stabilize within 1–2 weeks (slide 26). (T) Dr. Patel linked this to its first-line status.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 23, 26; 11/10 transcript (T)'},

{id:'xa12', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'otc', concept:'acne-adapalene-timing',
 tags:['acne','adapalene','counseling'], source:'both',
 stem:'A 15-year-old starts OTC adapalene (Differin) gel and already uses a benzoyl peroxide wash. Which plan is correct?',
 options:[
  {t:'Adapalene at night, benzoyl peroxide in the morning, with sunscreen', correct:true, why:'Slide 27 says to apply the retinoid at night and separate it from benzoyl peroxide (am versus pm); sunscreen and a moisturizer are advised.'},
  {t:'Adapalene and benzoyl peroxide together each morning, then sunscreen', correct:false, why:'Slide 27 says to separate use from benzoyl peroxide products (am versus pm), so they are not applied together.'},
  {t:'Adapalene in the morning under sunscreen, benzoyl peroxide at night', correct:false, why:'The times are reversed: slide 27 says to apply the retinoid at night, not in the morning.'},
  {t:'Adapalene at night, followed right away by a salicylic acid product', correct:false, why:'Slide 27 says not to use the retinoid with sulfur, resorcinol, salicylic acid or vitamin C products.'}],
 teach:'OTC adapalene: apply at night, separate from benzoyl peroxide (am versus pm), moisturizer and sunscreen, and not with sulfur, resorcinol, salicylic acid or vitamin C products (slide 27). (T) Dr. Patel said vitamin C may be used if kept separate.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slide 27; 11/10 transcript (T)'},

{id:'xa13', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'otc', concept:'acne-adapalene-age',
 tags:['acne','adapalene','referral'], source:'both',
 stem:'A mother asks to buy Differin gel for her 10-year-old son’s comedones. What should the pharmacist advise?',
 options:[
  {t:'Do not recommend it; the FDA limits OTC retinoids to age over 12', correct:true, why:'Slide 27 says the FDA limits the OTC topical retinoid to persons over 12 years of age.'},
  {t:'Recommend it, applied each morning after he washes his face', correct:false, why:'He is under the FDA age limit, and slide 27 says the retinoid is applied at night, not in the morning.'},
  {t:'Recommend it with a topical antibiotic to lower resistance', correct:false, why:'Combining products does not lift the age limit of slide 27; benzoyl peroxide, not the retinoid, reduces resistance (slide 26).'},
  {t:'Do not recommend it; OTC retinoids are limited to adults over 18', correct:false, why:'Slide 27 gives the limit as over 12 years of age, not over 18.'}],
 teach:'OTC adapalene 0.1% is limited to persons over 12 years of age (slide 27). (T) Dr. Patel said younger children are not recommended a retinoid. A child under the limit with acne is referred or given another suitable step.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 26–27; 11/10 transcript (T)'},

{id:'xa14', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'otc', concept:'acne-bp-properties',
 tags:['acne','benzoyl peroxide','class'], source:'both',
 stem:'Which OTC acne ingredient is bactericidal, keratolytic and comedolytic?',
 options:[
  {t:'Benzoyl peroxide', correct:true, why:'Slide 23 marks benzoyl peroxide yes for all three properties, which is why it is the first-line OTC agent.'},
  {t:'Topical retinoid such as adapalene', correct:false, why:'Slide 23 marks the topical retinoid as not bactericidal, though it is comedolytic.'},
  {t:'Alpha and beta hydroxy acids', correct:false, why:'Slide 23 marks the hydroxy acids as not bactericidal; salicylic acid is comedolytic but has limited efficacy data (slide 29).'},
  {t:'Resorcinol', correct:false, why:'Slide 23 marks resorcinol as bactericidal and keratolytic but not comedolytic, so it does not target comedones.'}],
 teach:'Benzoyl peroxide covers bacteria, keratin plugging and comedones, so it is the preferred initial OTC agent (slides 23, 25). (T) Dr. Patel made this point when explaining why it is first line.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 23, 25, 29; 11/10 transcript (T)'},

{id:'xa15', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'otc', concept:'acne-salicylic-vs-bp',
 tags:['acne','salicylic acid','counseling'], source:'both',
 stem:'A parent asks whether a salicylic acid cleanser is the best OTC choice for her teenager’s mild acne. What should the pharmacist say?',
 options:[
  {t:'Its efficacy data are limited; benzoyl peroxide is preferred', correct:true, why:'Slide 29 notes limited efficacy data for salicylic acid, and slide 25 calls benzoyl peroxide the preferred initial OTC agent.'},
  {t:'It is bactericidal, so it replaces benzoyl peroxide', correct:false, why:'Slide 23 marks the hydroxy acids as not bactericidal, while benzoyl peroxide is bactericidal.'},
  {t:'It does not cause photosensitivity, so sunscreen is not needed', correct:false, why:'Slide 29 lists photosensitivity among the adverse effects of salicylic acid, so sun protection still applies.'},
  {t:'It works best as a peel, repeated each week until clear', correct:false, why:'Salicylic acid is used once or twice daily as a cleanser or gel for 4–6 weeks (slide 29); peels every 2–4 weeks are the alpha hydroxy acids (slide 28).'}],
 teach:'Salicylic acid: once or twice daily as a cleanser or gel on the affected area, with maximum effect over 4–6 weeks and limited efficacy data (slide 29). (T) Dr. Patel said it was once first line, until benzoyl peroxide proved more effective.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 23, 25, 28–29; 11/10 transcript (T)'},

{id:'xa16', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'otc', concept:'acne-non-drug-cleansing',
 tags:['acne','non-drug','counseling'], source:'both',
 stem:'A 16-year-old with oily skin and mild acne wears heavy covering makeup. Which non-drug advice is appropriate?',
 options:[
  {t:'Cleanse twice daily without abrasives; pick a gel, solution or lotion', correct:true, why:'Slide 19 advises cleansing twice a day with a mild cleanser and no abrasives, and slide 24 gives gels, solutions and lotions for oily skin.'},
  {t:'Scrub with an abrasive cleanser several times a day to clear out the pores', correct:false, why:'Slide 19 says to avoid abrasive products, devices and excessive cleansing, which can irritate acne-prone skin.'},
  {t:'Wash with a medicated bar and use an ointment on the lesions', correct:false, why:'Slide 24 says ointments and bars are not usually recommended for any skin type; gels, solutions and lotions suit oily skin.'},
  {t:'Remove makeup with a water-based cleanser, then an oil-based one', correct:false, why:'The order is reversed: slide 19 removes dirt and makeup with an oil-based cleanser before using a water-based cleanser.'}],
 teach:'Non-drug measures: cleanse twice a day with a mild soap or non-soap cleanser, avoid abrasives and excessive cleansing, remove makeup with an oil-based cleanser before a water-based one (slide 19), and match the vehicle to skin type (slide 24).',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 19, 24; 11/10 transcript (T)'},

{id:'xa17', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'path', concept:'acne-time-to-benefit',
 tags:['acne','counseling','follow-up'], source:'both',
 stem:'A 16-year-old started benzoyl peroxide in the morning and a topical retinoid at night 3 weeks ago for mild acne. Her lesions look unchanged, and she wants to stop both. What is the best advice?',
 options:[
  {t:'Continue both; visible benefit takes 8 weeks or more', correct:true, why:'Slide 41 says patience is key, with 8 weeks or more needed to see visible benefits, so 3 weeks is too early to judge.'},
  {t:'Stop both today, since no change by 3 weeks means failure', correct:false, why:'Slide 41 gives 8 weeks or more before visible benefit; (T) Dr. Patel said a medication is never stopped abruptly.'},
  {t:'Add an oral antibiotic now, because topical therapy has failed', correct:false, why:'Oral antibiotics are not in the mild column of slide 40, and 3 weeks is too short to call topical therapy a failure.'},
  {t:'Stop the retinoid and keep only the benzoyl peroxide wash', correct:false, why:'It is too early to judge either agent (slide 41); a 10–25% lesion decrease is expected within 4–8 weeks (slide 44).'}],
 teach:'Set expectations at the start: 8 weeks or more for visible benefit (slide 41), a 10–25% drop in lesion count within 4–8 weeks, and a pharmacist check every 4–8 weeks (slide 44).',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 40–41, 44; 11/10 transcript (T)'},

{id:'xa18', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'path', concept:'acne-mild-after-bp',
 tags:['acne','algorithm'], source:'both',
 stem:'A 14-year-old with mild acne used benzoyl peroxide twice daily for 2 months with no benefit. In Dr. Patel’s stepwise order, which single-agent change comes next?',
 options:[
  {t:'Switch to a topical retinoid as the single topical agent', correct:true, why:'Slide 40 lists benzoyl peroxide or a topical retinoid as mild first line; (T) a retinoid is used when benzoyl peroxide gave no benefit.'},
  {t:'Add oral doxycycline to the benzoyl peroxide wash', correct:false, why:'Oral antibiotics enter at moderate acne (slide 40), not at mild acne, and the single topical agents have not all been tried.'},
  {t:'Switch to topical clindamycin as a single agent', correct:false, why:'Topical antibiotics are not used as monotherapy; benzoyl peroxide is added to reduce resistance (slides 25, 31).'},
  {t:'Refer for oral isotretinoin and its pregnancy-test program', correct:false, why:'Isotretinoin is for severe refractory nodular acne (slide 37); (T) Dr. Patel called it the last line, which does not fit mild acne after one agent.'}],
 teach:'Slide 40 lists the mild options; the sequence of switching to the other single topical agent, then combining, before anything oral comes from the lecture (T, 11/10), where Dr. Patel described a step by step process.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slides 25, 31, 37, 40; 11/10 transcript (T)'},

{id:'xa19', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dacne', sub:'otc', concept:'acne-topical-application',
 tags:['acne','counseling','administration'], source:'both',
 stem:'Under “Talk about the product,” how should the pharmacist tell a patient to apply a topical acne medicine?',
 options:[
  {t:'Wash gently, pat dry, wait 20–30 minutes; thin layer in the evening', correct:true, why:'Slide 42 says to wash with a mild soap, pat dry and wait 20–30 minutes, then apply a thin layer in the evening or before bedtime.'},
  {t:'Wash and apply at once while the skin is damp, each morning', correct:false, why:'Slide 42 has the patient pat dry and wait 20–30 minutes, and apply in the evening or before bedtime.'},
  {t:'Wait 5 minutes after washing, then apply a thick layer to the whole face', correct:false, why:'Slide 42 calls for a thin layer on the affected area after waiting 20–30 minutes, not a thick layer.'},
  {t:'Apply a thin layer twice daily, including the eyes and lips', correct:false, why:'Slide 42 says to avoid the eyes, ears, nostrils and mouth when applying the medicine.'}],
 teach:'Administration counseling (slide 42): gentle wash with a mild soap, pat dry, wait 20–30 minutes, thin layer to the affected area in the evening or before bedtime, avoiding the eyes, ears, nostrils and mouth. If stinging or irritation develops, temporarily stop or use it less often.',
 cite:'Patel_Acne-Therapeutics-Student.pdf slide 42; 11/10 transcript (T)'}
);

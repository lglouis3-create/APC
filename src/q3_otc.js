/* ==========================================================================
   Week 3: Dr. Parsons, OTC self-care (insect bites and stings, pediculosis).
   Sources: OTC-Insect-Bites-Pediculosis.pdf (printed slide text only; the
   handwritten margin notes in the student copy are not used) and
   APhA-Insect-Excerpt.pdf (the "For Quiz" excerpt from APhA OTC). There is
   no 8/31 transcript, so nothing here is marked (T).
   Where the sources differ: slide 27 says hydrocortisone 1% is applied
   1-4 times a day; the APhA excerpt says 3 or 4 times daily. Both agree on up
   to 7 days, so no item keys the frequency.
   ========================================================================== */
QUESTIONS.push(
{id:'o01', skill:'recall', prof:'Dr. Parsons', multi:true, tier:'new', topic:'otc', sub:'ppcp', concept:'ppcp-components',
 tags:['PPCP'], source:'slide',
 stem:'Which are core components of the Pharmacist Patient Care Process (PPCP)? Select all that apply.',
 options:[
  {t:'Collect', correct:true, why:'Slide 4 lists collect, assess, plan, implement and follow-up.'},
  {t:'Assess', correct:true, why:'Slide 4 names assess as the second of the five core PPCP components.'},
  {t:'Implement', correct:true, why:'Slide 4 names implement as the fourth of the five core PPCP components.'},
  {t:'Follow-up', correct:true, why:'Slide 4 lists follow-up as the fifth component and says “Do not forget follow-up!”'},
  {t:'Dispense', correct:false, why:'Slide 4 lists only collect, assess, plan, implement and follow-up; dispensing is not among them.'},
  {t:'Bill', correct:false, why:'Slide 4 lists only collect, assess, plan, implement and follow-up; billing is not among them.'}],
 teach:'The PPCP, developed by the Joint Commission of Pharmacy Practitioners, has five core components: collect, assess, plan, implement and follow-up.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 4'},

{id:'o02', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'ppcp', concept:'ppcp-developer',
 tags:['PPCP'], source:'slide',
 stem:'Which group developed the Pharmacist Patient Care Process (PPCP)?',
 options:[
  {t:'Joint Commission of Pharmacy Practitioners', correct:true, why:'Slide 4 states the PPCP was developed by the Joint Commission of Pharmacy Practitioners.'},
  {t:'Texas State Board of Pharmacy', correct:false, why:'The TSBP issues the official form for written CII prescriptions (Intro to Dispensing slide 20), not the PPCP (slide 4).'},
  {t:'American Academy of Family Physicians', correct:false, why:'The AAFP issues immunization recommendations (Immunizations slide 5), not the PPCP.'},
  {t:'Advisory Committee on Immunization Practices', correct:false, why:'The ACIP makes vaccine recommendations (Immunizations slide 4), not the PPCP.'}],
 teach:'The PPCP was developed by the Joint Commission of Pharmacy Practitioners.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 4'},

{id:'o03', skill:'recall', type:'match', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'ppcp', concept:'scholar-mac-questions',
 tags:['SCHOLAR-MAC'], source:'slide',
 stem:'Match each SCHOLAR-MAC element to the question that collects it.',
 left:'Element', right:'Question',
 pairs:[
  {l:'Characteristics', r:'What are the symptoms like?', why:'Slide 6 pairs Characteristics with the question “What are the symptoms like?”'},
  {l:'History', r:'What has been done so far? Has this happened in the past?', why:'Slide 6 pairs History with “What has been done so far? Has this happened in the past?”'},
  {l:'Onset', r:'When did it start?', why:'Slide 6 pairs Onset with the question “When did it start?”'},
  {l:'Location', r:'Where is the problem?', why:'Slide 6 pairs Location with the question “Where is the problem?”'},
  {l:'Aggravating factors', r:'What makes it worse?', why:'Slide 6 pairs Aggravating factors with the question “What makes it worse?”'},
  {l:'Remitting factors', r:'What makes it better?', why:'Slide 6 pairs Remitting factors with the question “What makes it better?”'}],
 teach:'SCHOLAR-MAC: Symptoms, Characteristics, History, Onset, Location, Aggravating factors, Remitting factors, Medications, Allergies, Conditions.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 6'},

{id:'o04', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'ppcp', concept:'scholar-mac-mac',
 tags:['SCHOLAR-MAC'], source:'slide',
 stem:'In SCHOLAR-MAC, which elements do the final letters M, A and C (after the hyphen) stand for?',
 options:[
  {t:'Medications, Allergies, Conditions', correct:true, why:'Slide 6 ends SCHOLAR-MAC with Medications, Allergies and Conditions.'},
  {t:'Medications, Age, Chief complaint', correct:false, why:'Slide 6 has no age or chief complaint element; M, A and C are medications, allergies, conditions.'},
  {t:'Monitoring, Assessment, Counseling', correct:false, why:'Monitoring, assessment and counseling are not SCHOLAR-MAC elements on slide 6.'},
  {t:'Measurements, Allergies, Concerns', correct:false, why:'Slide 6 asks about medications and conditions, not measurements or concerns.'}],
 teach:'The last three elements: What prescription medications, OTC products, vitamins and supplements are you taking? What allergies do you have? What health conditions do you have, and are you pregnant or breastfeeding?',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 6'},

{id:'o05', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'ppcp', concept:'soap-assessment',
 tags:['SOAP'], source:'slide',
 stem:'In which part of a SOAP note does the pharmacist’s interpretation of the patient’s condition belong?',
 options:[
  {t:'Assessment', correct:true, why:'Slide 8: an evaluation of the situation; slide 10: your clinical interpretation with your rationale.'},
  {t:'Subjective', correct:false, why:'Subjective is what the patient says, recorded with SCHOLAR-MAC (slide 9).'},
  {t:'Objective', correct:false, why:'Objective is facts you and others would observe, such as lab results and exam findings (slides 8–9).'},
  {t:'Plan', correct:false, why:'Slide 8 defines the plan as your description of how you will address the patient’s condition.'}],
 teach:'S: what the patient says. O: observable facts. A: what you think is happening and why. P: what you will do, follow-up, when to seek medical treatment and education.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 8–11'},

{id:'o06', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'ppcp', concept:'soap-subjective',
 tags:['SOAP'], source:'slide',
 stem:'The patient’s answers to the SCHOLAR-MAC questions are documented in which part of the SOAP note?',
 options:[
  {t:'Subjective', correct:true, why:'Slides 9–10: subjective is what the patient says (SCHOLAR-MAC).'},
  {t:'Objective', correct:false, why:'Objective holds lab results, exam findings, visual inspection and procedure findings (slide 9).'},
  {t:'Assessment', correct:false, why:'Slide 10 says the assessment is your clinical interpretation of the condition and includes your rationale.'},
  {t:'Plan', correct:false, why:'Slide 9 says the plan holds what you will do, follow-up instructions and other education.'}],
 teach:'Subjective captures the patient’s perspective and can be used to evaluate safety and efficacy of therapy at a follow-up visit.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 9–10'},

{id:'o07', skill:'recall', prof:'Dr. Parsons', multi:true, tier:'new', topic:'otc', sub:'ppcp', concept:'soap-plan-objective',
 tags:['SOAP'], source:'slide',
 stem:'Which belong in the Objective part of a SOAP note? Select all that apply.',
 options:[
  {t:'Lab results', correct:true, why:'Slide 9 lists lab results under Objective, with exam findings and procedure findings.'},
  {t:'Physical exam findings, including visual inspection', correct:true, why:'Slide 9 lists physical exam findings, including those from visual inspection, under Objective.'},
  {t:'Procedure findings', correct:true, why:'Slide 9 lists procedure findings under Objective, with lab results and exam findings.'},
  {t:'What the patient says is wrong', correct:false, why:'Slide 9 puts what the patient says under Subjective (SCHOLAR-MAC), not Objective.'},
  {t:'The follow-up interval', correct:false, why:'Slide 9 puts follow-up instructions, including the interval, under Plan, not Objective.'}],
 teach:'Objective: information you and others who observe the patient at the same time would consider facts.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 8–9'},

{id:'o08', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'ppcp', concept:'soap-legal',
 tags:['SOAP'], source:'slide',
 stem:'Why is care taken with SOAP notes in the medical record?',
 options:[
  {t:'Legal documentation that can be subpoenaed', correct:true, why:'Slide 7 says SOAP notes serve as legal documentation and are subject to subpoena.'},
  {t:'They are hidden from patients and their designees', correct:false, why:'Slide 7 says patients and their designees (such as family and caregivers) can access SOAP notes.'},
  {t:'They are used only on the day of the visit', correct:false, why:'They are used to follow patients over time and between care settings (slide 7).'},
  {t:'They replace the prescription', correct:false, why:'Slide 7 describes SOAP notes as part of the medical record and says nothing about replacing a prescription.'}],
 teach:'SOAP notes are part of medical records, serve as legal documentation subject to subpoena, can be accessed by patients and their designees, and follow patients over time.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 7'},

{id:'o09', skill:'apply', prof:'Dr. Parsons', multi:true, tier:'new', topic:'otc', sub:'refer', concept:'refer-list',
 tags:['referral'], source:'slide',
 stem:'Which conditions must be referred to a medical provider? Select all that apply.',
 options:[
  {t:'Tick bites', correct:true, why:'Slides 14–15 list tick bites among the conditions that must be referred to a medical provider.'},
  {t:'Scabies', correct:true, why:'Slides 14–15 list scabies among the conditions that must be referred to a medical provider.'},
  {t:'Spider bites', correct:true, why:'Slide 14 lists spider bites among the conditions that must be referred to a medical provider.'},
  {t:'Secondary infection', correct:true, why:'Slide 14 lists secondary infection among the conditions that must be referred to a medical provider.'},
  {t:'A bite or sting with systemic symptoms', correct:true, why:'Slide 14 lists a bite or sting with systemic symptoms as a condition to refer to a medical provider.'},
  {t:'Pain and itching at a single sting site', correct:false, why:'This is the typical self-care complaint (slide 20) when no exclusion applies (slides 21–22).'}],
 teach:'Slide 14 lists tick bites, scabies, spider bites, secondary infection and a bite or sting with systemic symptoms as conditions to refer.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 14–15, 17, 20'},

{id:'o10', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'refer', concept:'brown-recluse',
 tags:['spider bite'], source:'slide',
 stem:'An early bite with a violaceous center, surrounded by faint spreading redness, gives a “red, white, and blue” appearance. Which bite is this?',
 options:[
  {t:'Brown recluse bite', correct:true, why:'Slide 16: early brown recluse bite (about 8 hours) with a violaceous center and spreading erythema; spider bites are referred (slide 14).'},
  {t:'Honeybee sting at the site', correct:false, why:'A honeybee sting produces pain, itching and irritation at the site (slide 20).'},
  {t:'Tick bite with attached tick', correct:false, why:'Slides 14–15 list tick bites as a separate referral condition; the early bite photo on slide 16 is a brown recluse spider bite.'},
  {t:'Head lice bite on the scalp', correct:false, why:'Lice bites cause a wheal and local papule on the scalp (slide 30).'}],
 teach:'A brown recluse bite is referred. Its early appearance, about 8 hours after the bite, is a violaceous center surrounded by faint spreading erythema.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 14, 16'},

{id:'o11', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'sting', concept:'venomous-insects',
 tags:['stings'], source:'slide',
 stem:'Which group contains only venomous insects?',
 options:[
  {t:'Wasps, hornets, yellow jackets and fire ants', correct:true, why:'All four are on the venomous list on slide 18, with honeybees.'},
  {t:'Honeybees, wasps, hornets, yellow jackets and head lice', correct:false, why:'Head lice are covered as pediculosis (slide 29); they are not on the venomous list (slide 18).'},
  {t:'Honeybees, fire ants, scabies mites, and wasps together', correct:false, why:'Scabies is listed as a referral condition (slide 14), not as a venomous insect on slide 18.'},
  {t:'Wasps, hornets, ticks, and yellow jackets together', correct:false, why:'Tick bites are listed separately as a referral condition (slide 14); ticks are not on slide 18’s venomous list.'}],
 teach:'Slide 18 lists honeybees, wasps, hornets, yellow jackets and fire ants. Venom contains allergenic proteins and pharmacologically active compounds.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 14, 18, 29'},

{id:'o12', skill:'recall', prof:'Dr. Parsons', multi:true, tier:'new', topic:'otc', sub:'sting', concept:'anaphylaxis-signs',
 tags:['anaphylaxis'], source:'slide',
 stem:'Which are characteristics of anaphylaxis after a sting? Select all that apply.',
 options:[
  {t:'Fall in blood pressure', correct:true, why:'Slide 19 lists a fall in blood pressure as a characteristic of anaphylaxis.'},
  {t:'Light-headedness', correct:true, why:'Slide 19 lists light-headedness as a characteristic of anaphylaxis.'},
  {t:'Chest tightness', correct:true, why:'Slide 19 lists chest tightness as a characteristic of anaphylaxis.'},
  {t:'Dyspnea', correct:true, why:'Slide 19 lists dyspnea (shortness of breath) as a characteristic of anaphylaxis.'},
  {t:'Itching only at the sting site', correct:false, why:'Local pain, itching and irritation are the usual self-care complaint (slide 20).'},
  {t:'A small amount of redness at the site', correct:false, why:'Not among the characteristics on slide 19; slide 20 gives pain, itching and irritation at the site as the usual self-care complaint.'}],
 teach:'Anaphylaxis is rare, life-threatening and needs a 911 call. It may include loss of consciousness.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 19–20'},

{id:'o13', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'sting', concept:'anaphylaxis-timing',
 tags:['anaphylaxis'], source:'slide',
 stem:'After a sting, anaphylaxis may appear as soon as 10–15 minutes later and up to how long after?',
 options:[
  {t:'6 hours', correct:true, why:'Slide 19 says anaphylaxis may appear as soon as 10–15 minutes, but also up to 6 hours after the sting.'},
  {t:'1 hour', correct:false, why:'Slide 19 says anaphylaxis can appear up to 6 hours after the sting, so 1 hour is too short.'},
  {t:'24 hours', correct:false, why:'Slide 19 gives up to 6 hours after the sting, not 24 hours.'},
  {t:'48 hours', correct:false, why:'Slide 19 gives up to 6 hours after the sting, not 48 hours.'}],
 teach:'Patients must be counseled on symptoms and when to call 911.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 19'},

{id:'o14', skill:'apply', prof:'Dr. Parsons', multi:true, tier:'new', topic:'otc', sub:'refer', concept:'sting-exclusions',
 tags:['stings','exclusions'], source:'slide',
 stem:'Which findings exclude an insect sting from self-care? Select all that apply.',
 options:[
  {t:'Hives, excessive swelling or dizziness', correct:true, why:'Slide 22 lists hives, excessive swelling and dizziness among the exclusions for self-care.'},
  {t:'Allergic response away from the sting', correct:true, why:'Slides 21–22 list an allergic response away from the sting as an exclusion; refer to urgent care or the ER.'},
  {t:'Severe reaction to previous stings', correct:true, why:'Slide 22 lists severe reactions to previous insect bites or stings as an exclusion from self-care.'},
  {t:'Personal or family history of hay fever', correct:true, why:'Slide 22 lists a personal or family history of significant allergic reactions such as hay fever as an exclusion.'},
  {t:'Age under 2 years', correct:true, why:'Slide 22 lists age less than 2 years as an exclusion from self-care.'},
  {t:'Itching at the site only', correct:false, why:'Itching at the site is the usual self-care complaint (slide 20).'}],
 teach:'Allergic reactions need urgent care or the ER, not self-care.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 20–22'},

{id:'o15', skill:'apply', dupOf:'o14', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'refer', concept:'sting-hives-away',
 tags:['stings','referral'], source:'slide',
 stem:'A patient stung on the arm now has hives on the torso and neck. What is the recommendation?',
 options:[
  {t:'Refer to urgent care or the ER', correct:true, why:'Slide 21: reactions away from the sting, such as hives on the torso, are allergic reactions that require referral.'},
  {t:'Apply a topical antihistamine and watch', correct:false, why:'A reaction away from the site excludes self-care (slides 21–22).'},
  {t:'Recommend hydrocortisone 1% for 7 days', correct:false, why:'Hydrocortisone is for minor insect bites (slide 27), not a systemic allergic response.'},
  {t:'Apply zinc oxide and reassess in a week', correct:false, why:'Allergic reactions require referral to urgent care or the ER (slide 21).'}],
 teach:'An allergic response away from the sting excludes self-care and needs referral.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 21–22, 27–28'},

{id:'o16', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'sting', concept:'local-anesthetics-safest',
 tags:['local anesthetics'], source:'slide',
 stem:'Which local anesthetics have the fewest adverse effects and the least cross-sensitivity?',
 options:[
  {t:'Pramoxine and benzyl alcohol', correct:true, why:'Slide 24 says pramoxine and benzyl alcohol do not commonly cause adverse effects and show less cross-sensitivity.'},
  {t:'Dibucaine and phenol', correct:false, why:'Dibucaine and phenol have the most potential for adverse effects (APhA excerpt).'},
  {t:'Benzocaine and dibucaine', correct:false, why:'Slide 24 says to avoid dibucaine because of systemic toxicity, so this pair is not the safest.'},
  {t:'Lidocaine, benzocaine and phenol', correct:false, why:'Slide 24 names pramoxine and benzyl alcohol, not lidocaine, benzocaine or phenol, as least likely to cause adverse effects.'}],
 teach:'Local anesthetics cause a reversible blockade of nerve impulse conduction at the site of application, relieving pain and also itching and irritation.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 24; APhA-Insect-Excerpt.pdf'},

{id:'o17', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'sting', concept:'dibucaine',
 tags:['local anesthetics'], source:'slide',
 stem:'Which local anesthetic should be avoided because of the risk of systemic toxicity, including seizures and arrhythmias?',
 options:[
  {t:'Dibucaine', correct:true, why:'Slide 24: avoid dibucaine; seizures, respiratory depression, arrhythmias and death.'},
  {t:'Pramoxine', correct:false, why:'Slide 24 says pramoxine and benzyl alcohol do not commonly cause adverse effects, unlike dibucaine.'},
  {t:'Benzyl alcohol', correct:false, why:'Slide 24 says benzyl alcohol is better tolerated than other local anesthetics; dibucaine is the one to avoid.'},
  {t:'Lidocaine', correct:false, why:'Slide 24 singles out dibucaine, not lidocaine, as the agent to avoid for systemic toxicity.'}],
 teach:'Dibucaine is a common allergen and may cause systemic toxicity if too much is absorbed.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 24; APhA-Insect-Excerpt.pdf'},

{id:'o18', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'sting', concept:'phenol',
 tags:['local anesthetics'], source:'slide',
 stem:'Which statement about phenol in a bite product is correct?',
 options:[
  {t:'Avoid it in pregnancy, infants and children', correct:true, why:'Slide 24 says not to use phenol in pregnancy or in infants or children.'},
  {t:'Concentrations above 2% are best for large areas', correct:false, why:'Above 2% is irritating and may cause sloughing and necrosis; avoid large areas (slide 24).'},
  {t:'Apply it under bandages for stronger effect', correct:false, why:'Do not apply under bandages because of skin damage and systemic absorption (slide 24).'},
  {t:'It is the safest local anesthetic', correct:false, why:'Pramoxine and benzyl alcohol have fewer adverse effects (slide 24).'}],
 teach:'Phenol above 2% is irritating and may cause sloughing and necrosis of skin. Do not apply to large areas or under bandages.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 24'},

{id:'o19', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'sting', concept:'topical-diphenhydramine',
 tags:['antihistamine'], source:'slide',
 stem:'How is topical diphenhydramine used for insect bites?',
 options:[
  {t:'3–4 times daily for no longer than 7 days', correct:true, why:'Slide 25 says topical diphenhydramine is applied 3–4 times daily for no longer than 7 days.'},
  {t:'Once daily for up to 4 weeks', correct:false, why:'Slide 25 limits use to 7 days; use beyond 3–4 weeks increases the possibility of contact dermatitis.'},
  {t:'As needed with no limit', correct:false, why:'Slide 25 says topical diphenhydramine is applied for no longer than 7 days, so there is a limit.'},
  {t:'3–4 times daily, continued for up to 4 weeks', correct:false, why:'Slide 25 caps use at 7 days; continued use for 3–4 weeks increases the possibility of contact dermatitis.'}],
 teach:'Topical antihistamines depress cutaneous histamine receptors and are approved for temporary relief of pain and itching. They may be less effective than other options and can cause photosensitivity and hypersensitivity.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 25; APhA-Insect-Excerpt.pdf'},

{id:'o20', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'sting', concept:'hydrocortisone-1',
 tags:['hydrocortisone'], source:'slide',
 stem:'A patient uses hydrocortisone 1% for a minor insect bite. For how long may it be used before medical attention is needed?',
 options:[
  {t:'Up to 7 days', correct:true, why:'Slide 27: apply for up to 7 days; seek medical attention if needed longer.'},
  {t:'Up to 3 days', correct:false, why:'Slide 27 says to apply hydrocortisone 1% for up to 7 days, not 3 days.'},
  {t:'Up to 14 days', correct:false, why:'Slide 27 says to apply hydrocortisone 1% for up to 7 days, not 14 days.'},
  {t:'Up to 30 days', correct:false, why:'Slide 27 says to apply hydrocortisone 1% for up to 7 days, not 30 days.'}],
 teach:'Hydrocortisone 1% is a very weak steroid indicated for temporary relief of minor insect bites.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 27'},

{id:'o21', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'sting', concept:'hydrocortisone-caution',
 tags:['hydrocortisone'], source:'slide',
 stem:'Why should a patient with scabies or a bacterial or fungal infection not use hydrocortisone without medical supervision?',
 options:[
  {t:'It can worsen or mask the infection', correct:true, why:'APhA excerpt, Product Selection Guidelines: hydrocortisone can worsen or mask scabies, bacterial and fungal infections.'},
  {t:'It causes systemic toxicity', correct:false, why:'Short-term hydrocortisone does not usually cause clinically significant systemic absorption (APhA excerpt).'},
  {t:'It is not approved for insect bites', correct:false, why:'Hydrocortisone 1% is indicated for minor insect bites (slide 27).'},
  {t:'It interacts with antiparasitic drugs', correct:false, why:'No such interaction is described; the excerpt’s concern is that it can worsen or mask the disorder.'}],
 teach:'Scabies and secondary infection need medical evaluation (slide 14); the APhA excerpt adds that a steroid can hide or worsen bacterial and fungal infections.',
 cite:'APhA-Insect-Excerpt.pdf; OTC-Insect-Bites-Pediculosis.pdf slide 14'},

{id:'o22', skill:'recall', prof:'Dr. Parsons', multi:true, tier:'new', topic:'otc', sub:'sting', concept:'skin-protectants',
 tags:['skin protectants'], source:'slide',
 stem:'Which statements about skin protectants are correct? Select all that apply.',
 options:[
  {t:'Zinc oxide and calamine are recommended for adults, children and infants', correct:true, why:'Slide 28 says zinc oxide and calamine are recommended for adults, children and infants.'},
  {t:'They may be applied as needed', correct:true, why:'Slide 28 says skin protectants may be applied as needed.'},
  {t:'Zinc oxide works as a mild astringent with weak antiseptic properties', correct:true, why:'Slide 28 says zinc oxide works as a mild astringent and has weak antiseptic properties.'},
  {t:'The FDA has established the safety and efficacy of titanium dioxide', correct:false, why:'Titanium dioxide’s safety and efficacy have not been evaluated by the FDA (slide 28).'},
  {t:'They are limited to 7 days of use', correct:false, why:'Slide 28 says as needed; 7-day limits appear for topical antihistamines and hydrocortisone (slides 25, 27).'}],
 teach:'Skin protectants (zinc oxide, calamine lotion, titanium dioxide) reduce inflammation and irritation and are formulated as lotions, ointments and creams.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 28; APhA-Insect-Excerpt.pdf'},

{id:'o23', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'sting', concept:'camphor-danger',
 tags:['counterirritants'], source:'slide',
 stem:'Which counterirritant is very dangerous if ingested and should be kept away from children and pets?',
 options:[
  {t:'Camphor', correct:true, why:'Slide 26 says camphor is very dangerous if ingested and should be kept away from children and pets.'},
  {t:'Menthol', correct:false, why:'Slide 26 flags camphor, not menthol, as very dangerous if ingested.'},
  {t:'Zinc oxide', correct:false, why:'Slide 28 lists zinc oxide as a skin protectant, not a counterirritant.'},
  {t:'Calamine', correct:false, why:'Slide 28 lists calamine lotion as a skin protectant, not a counterirritant.'}],
 teach:'Camphor and menthol exert a cooling effect; camphor-containing products are an inappropriate choice for children.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 26; APhA-Insect-Excerpt.pdf'},

{id:'o24', skill:'recall', dupOf:'o20', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'sting', concept:'seven-day-rule',
 tags:['duration'], source:'slide',
 stem:'For how long may topical antipruritics and anesthetics be used before a provider’s advice is needed?',
 options:[
  {t:'No more than 7 days', correct:true, why:'APhA excerpt: should not be used for more than 7 days unless a provider advises it.'},
  {t:'No more than 3 days', correct:false, why:'APhA excerpt, Product Selection Guidelines: the limit is 7 days, not 3 days.'},
  {t:'No more than 14 days', correct:false, why:'APhA excerpt, Product Selection Guidelines: the limit is 7 days, not 14 days.'},
  {t:'There is no limit', correct:false, why:'Topical antihistamines and hydrocortisone carry a 7-day limit (slides 25 and 27), and the APhA excerpt gives it for antipruritics and anesthetics.'}],
 teach:'Patients must understand that topical antipruritics and anesthetics should not be used for more than 7 days unless a provider specifically advises it.',
 cite:'APhA-Insect-Excerpt.pdf; OTC-Insect-Bites-Pediculosis.pdf slides 25, 27'},

{id:'o25', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'lice', concept:'lice-features',
 tags:['pediculosis'], source:'slide',
 stem:'Where are nits and nit castings most easily seen when the hair is parted?',
 options:[
  {t:'Crown, near the ears, base of neck', correct:true, why:'Slide 30 says nits and nit castings are especially seen at the crown of the head, near the ears, or at the base of the neck.'},
  {t:'The forehead, eyebrows and eyelids', correct:false, why:'Lice in the eyelids or eyebrows is an exclusion from self-care (slide 31), not the typical site.'},
  {t:'Only at the ends of the hair, away from the scalp', correct:false, why:'Slide 30 says lice attach to the hair shaft and nits are especially seen at the crown, ears and neck base, not only at the ends.'},
  {t:'Only on the back of the hands and forearms', correct:false, why:'Slide 29 describes pediculosis as “head lice”, so the hands and forearms are not the site.'}],
 teach:'Lice attach to the hair shaft. A nit is about 1 mm in diameter; black powdery specks may be lice feces.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 29–30'},

{id:'o26', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'lice', concept:'lice-bite',
 tags:['pediculosis'], source:'slide',
 stem:'Lice feed by biting the scalp. What does this cause?',
 options:[
  {t:'An immediate wheal and a papule within 24 hours', correct:true, why:'Slide 30 says lice feed by biting the scalp, causing an immediate wheal and a local papule within 24 hours.'},
  {t:'A vesicle that crusts within 3 days', correct:false, why:'Slide 30 describes only an immediate wheal and a papule within 24 hours, not a vesicle that crusts.'},
  {t:'A violaceous center with spreading redness at the site', correct:false, why:'Slide 16 describes a violaceous center with faint spreading erythema as the early brown recluse bite, not a lice bite.'},
  {t:'Hives on the torso', correct:false, why:'Slide 21 says hives away from the sting site are an allergic reaction, not the effect of a lice bite.'}],
 teach:'Lice bites cause a wheal at once and a local papule within 24 hours.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 30'},

{id:'o27', skill:'apply', prof:'Dr. Parsons', multi:true, tier:'new', topic:'otc', sub:'lice', concept:'lice-exclusions',
 tags:['pediculosis','exclusions'], source:'slide',
 stem:'Which findings exclude a patient with head lice from self-treatment? Select all that apply.',
 options:[
  {t:'Lice infection of the eyelids or eyebrows', correct:true, why:'Slides 31, 34 list lice infection of the eyelids or eyebrows as an exclusion from self-treatment.'},
  {t:'Age under 2 months', correct:true, why:'Slides 31, 34 list age under 2 months (permethrins) as an exclusion from self-treatment.'},
  {t:'Secondary infection from scratching', correct:true, why:'Slides 31, 34 list secondary infection from scratching as an exclusion from self-treatment.'},
  {t:'Pregnancy or breastfeeding', correct:true, why:'Slides 31, 34: pregnancy or breastfeeding calls for strong caution; refer to primary care.'},
  {t:'Nits seen at the crown of the head', correct:false, why:'Slide 30 describes nits at the crown of the head as how head lice present, not as an exclusion.'}],
 teach:'Other exclusions: hypersensitivity to chrysanthemums, ragweed or pediculicide ingredients; under 2 years for pyrethrins; active tumors; regional resistance. Slide 31 lists these and the other exclusions.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 30–31, 34'},

{id:'o28', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'lice', concept:'pyrethrins-pbo',
 tags:['pediculosis','pyrethrins'], source:'slide',
 stem:'In synergized pyrethrins, what does “synergized” mean?',
 options:[
  {t:'Piperonyl butoxide slows pyrethrin breakdown', correct:true, why:'Slide 32 says “synergized” means the addition of piperonyl butoxide, which inhibits pyrethrin breakdown.'},
  {t:'Permethrin is added to the pyrethrins', correct:false, why:'Slide 33 presents permethrin (Nix) as a separate product from pyrethrins, not the synergist.'},
  {t:'The product is applied twice as often', correct:false, why:'Synergized refers to an added ingredient, not frequency (slide 32).'},
  {t:'The product kills both nits and lice together', correct:false, why:'Slide 32 says synergized means piperonyl butoxide was added, not that nits and lice are killed together.'}],
 teach:'Pyrethrins block nerve impulse transmission, causing paralysis and death of the insect. They come as shampoos, foams, solutions and gels, and a lice comb must be used.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 32'},

{id:'o29', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'lice', concept:'pyrethrins-vs-permethrin-retreat',
 tags:['pediculosis'], source:'slide',
 stem:'Which statement about retreating head lice after 7–10 days is correct?',
 options:[
  {t:'Pyrethrins must be retreated; permethrin may be', correct:true, why:'Slide 32: must retreat in 7–10 days. Slide 33: may retreat in 7–10 days if lice or nits are seen.'},
  {t:'Both must be retreated in 7–10 days', correct:false, why:'Permethrin is repeated only if lice or nits are seen (slide 33).'},
  {t:'Neither one is ever retreated', correct:false, why:'Slides 32–33 describe retreatment in 7–10 days, so “never repeated” is wrong.'},
  {t:'Permethrin must be retreated; pyrethrins may be', correct:false, why:'Slide 32 says pyrethrins MUST be retreated and slide 33 says permethrin MAY be, so this reverses them.'}],
 teach:'Both need a lice comb. Permethrin (Nix) is applied as a cream rinse to the scalp for 10 minutes.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slides 32–33'},

{id:'o30', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'otc', sub:'lice', concept:'lice-age-limits',
 tags:['pediculosis','age'], source:'slide',
 stem:'Which age limits apply to head lice products for self-care?',
 options:[
  {t:'Under 2 years for pyrethrins; under 2 months for permethrins', correct:true, why:'Slide 31 lists under 2 years for pyrethrins and under 2 months for permethrins.'},
  {t:'Under 2 months for pyrethrins; under 2 years for permethrins', correct:false, why:'Slide 31 gives under 2 years for pyrethrins and 2 months for permethrins, so this reverses the limits.'},
  {t:'Under 2 years for both', correct:false, why:'Slide 31 gives under 2 months for permethrins, so under 2 years for both is wrong.'},
  {t:'Under 12 years for both', correct:false, why:'Slide 31 gives under 2 years and under 2 months, not 12 years.'}],
 teach:'Pyrethrins are excluded under 2 years; permethrins under 2 months. Slide 31 exclusions also include hypersensitivity to chrysanthemums, ragweed or pediculicide ingredients.',
 cite:'OTC-Insect-Bites-Pediculosis.pdf slide 31'}
);

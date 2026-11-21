/* ==========================================================================
   DEENT lab, Part 2 (Ophthalmic Review, Mix & Match warm-up): Dr. Lahoud's
   lab sorts items into a table for dry eye disease, allergic conjunctivitis,
   bacterial/viral conjunctivitis and primary open-angle glaucoma. This file
   covers the first three (symptoms, therapies and other identifying
   features); glaucoma is in another file.
   Sources: Lam_OphthalmicDisorders.pdf (Dr. Lam, 11/20 lecture, 58 slides; slide N =
   PDF page) and, for cyclosporine side effects, Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf
   (Dr. Smith). Facts follow the student's verified DEENT drill. Facts that come
   only from the 11/20 recording or the handout, not the printed slide, are
   marked (T).
   Source notes: slide 35 of the deck headlines first-line tears plus a
   dual-acting agent for "allergic/viral/bacterial conjunctivitis"; the DEENT
   drill and the recording key it to allergic conjunctivitis, and bacterial or
   viral conjunctivitis to symptomatic care and referral (slides 28, 34). The
   items here follow the drill.
   ========================================================================== */
TOPICS.push({id:'deye', name:'DEENT lab: dry eye and conjunctivitis', prof:'Dr. Lahoud', cite:'Lam_OphthalmicDisorders.pdf', subs:[
  {id:'dedx', name:'Dry eye: causes, presentation and referral', cite:'slides 6–11'},
  {id:'dert', name:'Dry eye: goals, non-drug measures and products', cite:'slides 9–21'},
  {id:'cjdx', name:'Conjunctivitis: telling the types apart', cite:'slides 28–31'},
  {id:'cjrx', name:'Conjunctivitis: treatment and counseling', cite:'slides 33–46'}]});

QUESTIONS.push(
{id:'xe01', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'dedx', concept:'dry-eye-presentation',
 tags:['dry eye','sorting'], source:'slide',
 stem:'A patient describes a sandy, gritty feeling and a foreign body sensation in an eye that looks normal or mildly red, with excessive tearing. Which condition fits?',
 options:[
  {t:'Dry eye disease', correct:true, why:'Slide 7 gives a normal or mildly red eye, foreign body sensation, a sandy gritty feeling and excessive tearing as dry eye.'},
  {t:'Seasonal allergic conjunctivitis', correct:false, why:'Slide 29 gives itching, tearing and red eyes for seasonal allergy; grittiness without itch does not fit.'},
  {t:'Bacterial conjunctivitis with lid crusting', correct:false, why:'Slide 28 gives tearing and lid crusting for bacterial disease; no crusting is described here.'},
  {t:'Giant papillary conjunctivitis from contact lenses', correct:false, why:'Slide 29 ties giant papillary disease to itching, mucous discharge and contact lens intolerance, none of which is described.'}],
 teach:'Dry eye looks like a normal or mildly red eye with a sandy, gritty or foreign body feeling and tearing. Itch points to allergy and lid crusting to bacterial or viral infection.',
 cite:'Lam_OphthalmicDisorders.pdf slide 7'},

{id:'xe02', skill:'recall', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'deye', sub:'dedx', concept:'dry-eye-offending-drugs',
 tags:['dry eye','drugs','sorting'], source:'slide',
 stem:'Which products can contribute to dry eye disease? Select all that apply.',
 options:[
  {t:'A diuretic', correct:true, why:'Slide 6 includes diuretics among the drugs that are risk factors for dry eye.'},
  {t:'A decongestant', correct:true, why:'Slide 6 includes decongestants among the drugs that are risk factors for dry eye.'},
  {t:'An oral contraceptive', correct:true, why:'Slide 6 includes oral contraceptives and hormone-replacement agents as risk factors for dry eye.'},
  {t:'Preservative-free artificial tears used several times a day', correct:false, why:'Slide 14 makes preservative-free artificial tears the first-line treatment, not a cause of dry eye.'},
  {t:'An omega fatty acid supplement taken by mouth every day', correct:false, why:'Slide 16 lists omega fatty acids as a supplement used for dry eye, not a cause.'}],
 teach:'Risk factors for dry eye include older age, female sex, environment, comorbidities, surgery, preservatives such as benzalkonium chloride, and drugs: anticholinergic agents, diuretics, decongestants, oral contraceptives or hormone replacement, and corticosteroids. Artificial tears and supplements are treatments.',
 cite:'Lam_OphthalmicDisorders.pdf slides 6, 14, 16'},

{id:'xe03', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'dedx', concept:'dry-eye-preservative',
 tags:['dry eye','preservatives'], source:'both',
 stem:'A patient uses a multi-dose artificial tear bottle six times a day and says his eyes burn after each drop. The bottle contains the preservative benzalkonium chloride (BAK). What is the best change?',
 options:[
  {t:'Switch to preservative-free single-use vials', correct:true, why:'Slide 43 gives preservative-free unit-dose dispensers as the fix when a preservative irritates the eye.'},
  {t:'Switch to a topical corticosteroid drop four times daily', correct:false, why:'Slide 20 places topical corticosteroids as prescription drugs for brief use, not as the fix for preservative irritation.'},
  {t:'Add a decongestant drop for the burning and redness', correct:false, why:'Slide 39 shows decongestants carry rebound hyperemia and epithelial dryness risks, so they do not fix preservative irritation.'},
  {t:'Use the same bottle but double the number of drops', correct:false, why:'Slides 6 and 43 identify the preservative (BAK) as the problem, so more drops from the same bottle add more preservative.'}],
 teach:'Preservatives such as benzalkonium chloride are a risk factor for dry eye. When a preservative causes irritation, move to a preservative-free formulation in unit-dose dispensers; these cost more and are easier to contaminate (T).',
 cite:'Lam_OphthalmicDisorders.pdf slides 6, 43 (T)'},

{id:'xe04', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'dedx', concept:'dry-eye-first-episode-referral',
 tags:['dry eye','referral'], source:'both',
 stem:'A man has had gritty, mildly irritated eyes in both eyes for three days. This is his first episode, and he has no eye pain, trauma or eyelid swelling. What is the best response?',
 options:[
  {t:'Refer him to an eye doctor and suggest artificial tears meanwhile', correct:true, why:'Slide 10 says referral for everyone while OTC products can still be recommended; slide 14 makes artificial tears first.'},
  {t:'Suggest artificial tears alone and make no referral at all', correct:false, why:'Slide 10 says every dry eye patient is referred, so treating without referral skips half of the plan.'},
  {t:'Refer him to an eye doctor and recommend no product until the visit', correct:false, why:'Slide 10 says OTC products can still be recommended, so withholding artificial tears leaves him untreated.'},
  {t:'Start a topical corticosteroid while he waits for an appointment', correct:false, why:'Slides 17 and 20 show corticosteroids are prescription drugs for very short use, not a first step for the pharmacist.'}],
 teach:'In dry eye every patient is referred, and the pharmacist can still recommend OTC artificial tears in the meantime. Referral without a product or a product without referral each misses half of the plan (T).',
 cite:'Lam_OphthalmicDisorders.pdf slides 10, 14 (T)'},

{id:'xe05', skill:'recall', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'deye', sub:'dedx', concept:'eye-exclusions-self-care',
 tags:['dry eye','conjunctivitis','referral','sorting'], source:'slide',
 stem:'Which findings mean a patient with red, irritated eyes is excluded from self-treatment and should be referred? Select all that apply.',
 options:[
  {t:'Light sensitivity', correct:true, why:'Slides 11 and 30 name light sensitivity as an exclusion for self-treatment.'},
  {t:'Eye pain', correct:true, why:'Slides 11 and 30 name eye pain as an exclusion for self-treatment.'},
  {t:'A chemical splash to the eye', correct:true, why:'Slides 11 and 30 name chemical exposure as an exclusion for self-treatment.'},
  {t:'Blurred vision only after applying an eye ointment', correct:false, why:'Slides 11 and 30 exclude blurred vision not due to eye ointments, so ointment blur is the stated exception.'},
  {t:'A stye with a red, tender bump on the eyelid edge', correct:false, why:'Slides 11 and 30 exclude eyelid infection except a stye, so a stye alone is the stated exception.'}],
 teach:'The same exclusion list applies to dry eye and conjunctivitis: eye pain, ocular trauma, chemical exposure, eye exposure to heat (not sun exposure), blurred vision not due to eye ointments, light sensitivity, and signs of eyelid infection other than a stye.',
 cite:'Lam_OphthalmicDisorders.pdf slides 11, 30'},

{id:'xe06', skill:'tell', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'deye', sub:'dert', concept:'goals-allergic-vs-dry',
 tags:['dry eye','allergic conjunctivitis','goals','sorting'], source:'slide',
 stem:'Which treatment goals belong to allergic conjunctivitis rather than dry eye disease? Select all that apply.',
 options:[
  {t:'Remove or avoid the allergen', correct:true, why:'Slide 31 gives removing or avoiding the allergen as the first goal of conjunctivitis therapy; dry eye goals on slide 9 do not mention it.'},
  {t:'Limit the severity of the allergic reaction', correct:true, why:'Slide 31 gives limiting or reducing the severity of the allergic reaction as a conjunctivitis goal; slide 9 has no such goal.'},
  {t:'Alleviate dryness of the surface of the eye', correct:false, why:'Slide 9 gives alleviating dryness as the first goal of dry eye treatment, not of allergic conjunctivitis.'},
  {t:'Prevent damage to the cornea from dryness', correct:false, why:'Slide 9 gives preventing damage as the third goal of dry eye treatment, not a goal tied to an allergen.'}],
 teach:'Dry eye goals: alleviate dryness, relieve irritation, prevent damage. Conjunctivitis goals: remove or avoid the allergen, limit the severity of the allergic reaction, provide symptomatic relief, and protect the ocular surface.',
 cite:'Lam_OphthalmicDisorders.pdf slides 9, 31'},

{id:'xe07', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'dert', concept:'dry-eye-nondrug',
 tags:['dry eye','non-drug'], source:'slide',
 stem:'A woman has dry, gritty eyes. She works eight hours a day at a computer directly beneath an air-conditioning vent. Which non-drug advice best matches the cause?',
 options:[
  {t:'Move her workstation and limit screen time', correct:true, why:'Slide 13 lists repositioning the workstation, avoiding prolonged screens and avoiding environments that raise evaporation.'},
  {t:'Keep the doors and windows closed and track the pollen count', correct:false, why:'Slide 33 gives closed windows and the pollen count as allergen avoidance for allergic conjunctivitis, not dry eye.'},
  {t:'Use hypoallergenic bedding and wash her clothes frequently', correct:false, why:'Slide 33 gives hypoallergenic bedding and frequent clothes washing for allergic conjunctivitis, not dry eye.'},
  {t:'Wear sunglasses and apply cold compresses to the eyes', correct:false, why:'Slide 33 gives cold compresses and sunglasses for allergic conjunctivitis; slide 13 gives warm compresses for dry eye.'}],
 teach:'For dry eye, improve evaporation of the tear film (avoid drying environments, use humidifiers, reposition the workstation, limit screens, use eye protection) and improve eyelid function (warm compresses, stop offending agents, eyelid hygiene).',
 cite:'Lam_OphthalmicDisorders.pdf slides 13, 33'},

{id:'xe08', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'dert', concept:'artificial-tears-dosing',
 tags:['dry eye','artificial tears'], source:'slide',
 stem:'A patient with chronic dry eye starts artificial tears. How often can they be used, and for how long?',
 options:[
  {t:'Up to hourly if needed, for as long as the response requires', correct:true, why:'Slide 14 allows 1–2 drops 1–2 times daily, up to 3–4 times daily or hourly, for a duration set by response.'},
  {t:'Four times daily for no more than 72 hours before referral', correct:false, why:'The 72-hour limit on slides 39 and 41 applies to decongestants and referral in conjunctivitis, not to artificial tears.'},
  {t:'Once daily for a maximum of 30 days, then discard the product', correct:false, why:'The 30 days on slide 50 is how long opened drops may be kept, not a limit on artificial tear therapy.'},
  {t:'Twice daily for 4 weeks, then stop until symptoms return', correct:false, why:'Slide 14 sets no fixed stop; a 4-week course belongs to a different dry eye drug, not to artificial tears.'}],
 teach:'Artificial tears start at 1–2 drops once or twice daily and can go up to 3–4 times daily or hourly. Preservative-free products are preferred, and use continues as long as the patient responds, which is why dry eye is chronic.',
 cite:'Lam_OphthalmicDisorders.pdf slide 14'},

{id:'xe09', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'dert', concept:'bland-ointment-tradeoff',
 tags:['dry eye','ointment'], source:'slide',
 stem:'What is the advantage of a bland ophthalmic ointment over artificial tear drops, and what is its main drawback?',
 options:[
  {t:'Longer retention time; blurry vision', correct:true, why:'Slide 15 gives longer retention time as the advantage and blurry vision and hypersensitivity as the side effects.'},
  {t:'Faster onset of relief; a limit of 72 hours of use', correct:false, why:'Slide 15 gives longer retention, not faster onset; the 72-hour limit on slide 39 applies to decongestants.'},
  {t:'No preservative at all; a need to refrigerate after opening', correct:false, why:'Slide 15 gives longer retention as the advantage, and refrigeration is a storage point on slide 50, not an ointment drawback.'},
  {t:'Blocks the release of histamine; drying of the cornea itself', correct:false, why:'Slide 15 describes a lubricant, not an antihistamine; histamine blockade belongs to dual-acting agents on slide 37.'}],
 teach:'Bland ointments stay longer on the eye but blur vision and can cause hypersensitivity, so they go on mainly at bedtime. A bland gel is better tolerated. Neither makes the eye produce more tears.',
 cite:'Lam_OphthalmicDisorders.pdf slide 15'},

{id:'xe10', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'dert', concept:'rx-dry-eye-route',
 tags:['dry eye','prescription','sorting'], source:'slide',
 stem:'Which prescription medicine for dry eye is a nasal spray rather than an eye drop?',
 options:[
  {t:'Varenicline (Tyrvaya)', correct:true, why:'Slides 17 and 21 give varenicline as the nasal spray; slide 22 teaches priming and resisting inhaling.'},
  {t:'Cyclosporine (Restasis, Cequa)', correct:false, why:'Slides 17 and 18 give topical cyclosporine as an eye drop, an immunomodulator.'},
  {t:'Lifitegrast (Xiidra)', correct:false, why:'Slides 17 and 19 give lifitegrast as a topical eye drop, an LFA-1 antagonist.'},
  {t:'A topical corticosteroid for dry eye', correct:false, why:'Slides 17 and 20 give topical corticosteroids as eye drops used for a short duration.'}],
 teach:'Prescription dry eye options: topical cyclosporine (immunomodulator), lifitegrast (LFA-1 antagonist), topical corticosteroids, and varenicline nasal spray (secretagogue). Varenicline is the only one given in the nose; it is applied by tilting, elevating the tongue, administering and resisting inhaling.',
 cite:'Lam_OphthalmicDisorders.pdf slides 17, 21, 22'},

{id:'xe11', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'dert', concept:'cyclosporine-side-effects',
 tags:['dry eye','prescription','counseling'], source:'both',
 stem:'A woman started cyclosporine eye drops for dry eye one week ago and calls because her eyes burn, sting and feel gritty. What is the best response?',
 options:[
  {t:'These are common effects and can resemble dry eye itself', correct:true, why:'Slide 18 lists common side effects, and Smith slide 67 gives burning, pain, foreign body sensation and itchiness as its ocular effects.'},
  {t:'Stop the drops for good, because burning means an allergy to cyclosporine', correct:false, why:'Slide 18 lists burning and stinging as common side effects, so they alone do not mean allergy or call for stopping.'},
  {t:'Switch to a topical decongestant, since redness is the real problem', correct:false, why:'Slide 39 limits decongestants to 72 hours, and they do not treat the inflammation that cyclosporine targets.'},
  {t:'Take both daily doses at once to finish the course sooner', correct:false, why:'Slide 18 gives twice-daily dosing; doses are spaced about 8 to 12 hours apart (T), not combined.'}],
 teach:'Topical cyclosporine (Restasis, Cequa) is taken twice daily for about 6 months or longer; common effects are burning, stinging and foreign body sensation, which resemble dry eye symptoms (T). Counsel on what to expect and keep the schedule.',
 cite:'Lam_OphthalmicDisorders.pdf slide 18 (T); Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slide 67'},

{id:'xe12', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'dert', concept:'topical-steroid-duration',
 tags:['dry eye','prescription','corticosteroid'], source:'both',
 stem:'A prescriber plans a topical corticosteroid as the maintenance drug for chronic dry eye. What concern should the pharmacist raise?',
 options:[
  {t:'Use should be very short because chronic use can cause glaucoma', correct:true, why:'Slide 20 lists duration of therapy and contraindications; the recording adds that long use raises glaucoma risk (T).'},
  {t:'It must be used for at least 6 months before any benefit appears', correct:false, why:'A 6-month course belongs to cyclosporine on slide 18; corticosteroids on slide 20 are for short duration.'},
  {t:'It should be given as a nasal spray into each nostril twice daily', correct:false, why:'Slide 21 gives the nasal spray route for varenicline; topical corticosteroids on slide 20 are eye drops.'},
  {t:'It is first-line therapy and should be dosed as often as hourly', correct:false, why:'Slide 14 makes artificial tears the first-line product that can go up to hourly; corticosteroids are not first line.'}],
 teach:'Topical corticosteroids give short-term symptom relief and are not maintenance drugs for dry eye, because chronic use risks glaucoma and other problems (T). Cyclosporine runs about 6 months or longer, lifitegrast about 12 weeks (T).',
 cite:'Lam_OphthalmicDisorders.pdf slides 18, 20 (T)'},

{id:'xe13', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjdx', concept:'allergic-itch-rule',
 tags:['allergic conjunctivitis','bacterial/viral conjunctivitis','sorting'], source:'slide',
 stem:'Which finding is present in allergic conjunctivitis but not in bacterial or viral conjunctivitis?',
 options:[
  {t:'Itching', correct:true, why:'Slide 29 lists itching for allergic conjunctivitis; slide 28 lists only tearing and lid crusting for bacterial and viral types.'},
  {t:'Tearing', correct:false, why:'Slides 28 and 29 both list tearing, so it appears in allergic, bacterial and viral conjunctivitis.'},
  {t:'Lid crusting on waking', correct:false, why:'Slide 28 lists lid crusting for bacterial and viral conjunctivitis, not for the allergic types on slide 29.'},
  {t:'Foreign body sensation with a sandy feeling', correct:false, why:'Slide 7 lists foreign body sensation and a sandy, gritty feeling as dry eye findings, not conjunctivitis.'}],
 teach:'Itching points to allergic conjunctivitis. Tearing is common to every type and cannot separate them. Lid crusting points to bacterial or viral conjunctivitis, and a sandy, gritty feeling points to dry eye.',
 cite:'Lam_OphthalmicDisorders.pdf slides 28, 29, 7'},

{id:'xe14', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjdx', concept:'bacterial-viral-case',
 tags:['bacterial/viral conjunctivitis','case'], source:'slide',
 stem:'A man has watery eyes and crusted eyelids when he wakes up. He denies itching. Which condition is most likely?',
 options:[
  {t:'Bacterial or viral conjunctivitis', correct:true, why:'Slide 28 gives tearing and lid crusting, including crusting upon awakening for adenoviral disease, with no itch.'},
  {t:'Seasonal allergic conjunctivitis', correct:false, why:'Slide 29 gives itching, tearing and red eyes for seasonal allergy; he denies itching.'},
  {t:'Dry eye disease with mild redness', correct:false, why:'Slide 7 gives a sandy, gritty feeling and foreign body sensation for dry eye, not crusted eyelids on waking.'},
  {t:'Giant papillary conjunctivitis from lens wear', correct:false, why:'Slide 29 gives itching and contact lens intolerance for giant papillary disease; he has neither.'}],
 teach:'Tearing plus lid crusting without itch is the bacterial or viral picture. Treatment is symptomatic care (cold compresses) with referral to a provider as needed.',
 cite:'Lam_OphthalmicDisorders.pdf slides 28, 29, 34'},

{id:'xe15', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjdx', concept:'why-allergic-itch',
 tags:['allergic conjunctivitis','mechanism'], source:'both',
 stem:'Why does allergic conjunctivitis itch while bacterial and viral conjunctivitis do not usually?',
 options:[
  {t:'The allergen triggers mast cells to release histamine', correct:true, why:'Slide 29 lists itching for allergic types, and slide 37 treats it with antihistamine and mast cell stabilizer agents.'},
  {t:'Bacteria and viruses release histamine from the eyelid glands', correct:false, why:'Slide 28 gives tearing and lid crusting for infection, with no itching and no histamine release described.'},
  {t:'Tearing washes the allergen out so the eye cannot itch', correct:false, why:'Slides 28 and 29 show tearing in every type, and slide 36 gives allergen washout as a role of artificial tears, not an itch cause.'},
  {t:'Dryness of the cornea stimulates the nerves that cause itching', correct:false, why:'Slide 7 ties dryness to grittiness and a foreign body sensation, not to the itch of allergy.'}],
 teach:'In allergy the allergen sets off mast cell degranulation and histamine produces the itch (T). In bacterial and viral disease the byproducts cause lid crusting and the eye tears to clear them, so the same red, tearing eye is sorted by itch.',
 cite:'Lam_OphthalmicDisorders.pdf slides 28, 29, 37 (T)'},

{id:'xe16', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjdx', concept:'giant-papillary',
 tags:['allergic conjunctivitis','contact lenses'], source:'slide',
 stem:'A woman who wears contact lenses has had itchy, red eyes with mucous discharge for two weeks and can no longer tolerate her lenses. Which condition fits?',
 options:[
  {t:'Giant papillary conjunctivitis', correct:true, why:'Slide 29 gives itching, contact lens intolerance, mucous discharge and red eyes for giant papillary conjunctivitis.'},
  {t:'Seasonal allergic conjunctivitis with spring pollen', correct:false, why:'Slide 29 gives only itching, tearing and red eyes for the seasonal type, with no lens intolerance or mucous discharge.'},
  {t:'Bacterial conjunctivitis with acute lid crusting', correct:false, why:'Slide 28 gives tearing and lid crusting for bacterial disease, and no itching or lens intolerance.'},
  {t:'Dry eye disease from older age and female sex', correct:false, why:'Slide 7 gives a sandy, gritty feeling and foreign body sensation for dry eye, not itching with mucous discharge.'}],
 teach:'Within allergic conjunctivitis, seasonal disease gives itching, tearing and red eyes; vernal and giant papillary types add mucous discharge, and giant papillary adds contact lens intolerance. Lens intolerance is the clue.',
 cite:'Lam_OphthalmicDisorders.pdf slide 29'},

{id:'xe17', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjrx', concept:'cold-compress-only',
 tags:['bacterial/viral conjunctivitis','non-drug','sorting'], source:'slide',
 stem:'Cold compresses are the only non-drug measure for which condition?',
 options:[
  {t:'Bacterial or viral conjunctivitis', correct:true, why:'Slide 34 gives applying cold compresses as the single non-drug measure for viral and bacterial conjunctivitis.'},
  {t:'Allergic conjunctivitis with a known allergen', correct:false, why:'Slide 33 gives a long list for allergic conjunctivitis, including avoiding allergens, air filters and sunglasses.'},
  {t:'Dry eye disease with eyelid dysfunction', correct:false, why:'Slide 13 gives humidifiers, workstation changes, warm compresses and eyelid hygiene for dry eye, not cold compresses.'},
  {t:'Giant papillary conjunctivitis with lens wear', correct:false, why:'Giant papillary disease is allergic, so slide 33 gives its long list of avoidance measures, not one measure.'}],
 teach:'Dry eye uses warm compresses and environmental measures. Allergic conjunctivitis uses allergen avoidance and cold compresses. Bacterial or viral conjunctivitis has one non-drug measure, cold compresses, which give comfort while the patient arranges to see a provider (T).',
 cite:'Lam_OphthalmicDisorders.pdf slides 13, 33, 34 (T)'},

{id:'xe18', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjrx', concept:'allergen-avoidance-measure',
 tags:['allergic conjunctivitis','non-drug','sorting'], source:'slide',
 stem:'Which non-drug measure belongs to allergic conjunctivitis rather than to dry eye?',
 options:[
  {t:'Keeping doors and windows closed when pollen is high', correct:true, why:'Slide 33 gives checking the pollen count and keeping doors and windows closed as allergen avoidance.'},
  {t:'Applying warm compresses to improve eyelid function', correct:false, why:'Slide 13 gives warm compresses for improving eyelid function in dry eye, not for allergic conjunctivitis.'},
  {t:'Repositioning the workstation away from drying air flow', correct:false, why:'Slide 13 gives repositioning the workstation to reduce evaporation, which is a dry eye measure.'},
  {t:'Using humidifiers to reduce evaporation of the tear film', correct:false, why:'Slide 13 gives humidifiers to reduce tear film evaporation, which is a dry eye measure.'}],
 teach:'Allergic conjunctivitis: avoid the allergen (pollen count, closed doors and windows, hypoallergenic bedding, washing clothes, showering, air conditioning, air filters, sunglasses) and use cold compresses. Dry eye: reduce evaporation and improve eyelid function.',
 cite:'Lam_OphthalmicDisorders.pdf slides 13, 33'},

{id:'xe19', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjrx', concept:'allergic-first-line',
 tags:['allergic conjunctivitis','OTC'], source:'both',
 stem:'What is the first-line OTC regimen for allergic conjunctivitis?',
 options:[
  {t:'Artificial tears plus a dual-acting agent', correct:true, why:'Slide 35 gives artificial tears plus an ophthalmic dual-acting antihistamine and mast cell stabilizer as first line.'},
  {t:'An ophthalmic decongestant used for up to 72 hours', correct:false, why:'Slide 39 limits decongestants to 72 hours, and they relieve redness only; they are not the first-line regimen.'},
  {t:'A second-generation oral antihistamine taken by itself', correct:false, why:'Slide 40 reserves oral antihistamines for systemic symptoms or persistent ocular symptoms, not first line.'},
  {t:'Cetirizine eye drops given as the only product', correct:false, why:'Slide 38 gives ophthalmic cetirizine a limited role, not first line, since it blocks histamine alone.'}],
 teach:'First line for allergic conjunctivitis is two products: artificial tears to wash out the allergen and protect the ocular surface, plus a dual-acting agent for the itch. Bacterial or viral conjunctivitis is not treated with this pair; it gets cold compresses and provider referral (T).',
 cite:'Lam_OphthalmicDisorders.pdf slides 35, 36, 38, 39, 40 (T)'},

{id:'xe20', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjrx', concept:'otc-dual-acting-sort',
 tags:['allergic conjunctivitis','OTC','sorting'], source:'slide',
 stem:'Which OTC eye drop is a dual-acting antihistamine and mast cell stabilizer?',
 options:[
  {t:'Ketotifen', correct:true, why:'Slide 37 gives ketotifen fumarate as an OTC antihistamine, mast cell stabilizer and H1 receptor antagonist.'},
  {t:'Naphazoline by itself', correct:false, why:'Slide 39 gives naphazoline as an OTC ophthalmic decongestant, which reduces redness only.'},
  {t:'Tetrahydrozoline used for redness', correct:false, why:'Slide 39 gives tetrahydrozoline as an OTC ophthalmic decongestant, not a dual-acting agent.'},
  {t:'Brimonidine 0.025% used for redness', correct:false, why:'Slide 39 gives brimonidine 0.025% as an OTC ophthalmic decongestant, not a dual-acting agent.'}],
 teach:'OTC dual-acting agents: olopatadine (Pataday), alcaftadine and ketotifen fumarate. OTC decongestants: naphazoline, tetrahydrozoline and brimonidine 0.025%. Pheniramine appears only in combination with naphazoline.',
 cite:'Lam_OphthalmicDisorders.pdf slides 37, 39'},

{id:'xe21', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjrx', concept:'rx-dual-acting-sort',
 tags:['allergic conjunctivitis','prescription','sorting'], source:'slide',
 stem:'Which dual-acting eye drop for allergic conjunctivitis requires a prescription?',
 options:[
  {t:'Bepotastine', correct:true, why:'Slide 37 gives azelastine, bepotastine and epinastine as the prescription dual-acting agents.'},
  {t:'Olopatadine (Pataday)', correct:false, why:'Slide 37 gives olopatadine (Pataday) as an OTC dual-acting agent, so it needs no prescription.'},
  {t:'Alcaftadine, available OTC', correct:false, why:'Slide 37 gives alcaftadine as an OTC dual-acting agent, so it needs no prescription.'},
  {t:'Ketotifen fumarate, available OTC', correct:false, why:'Slide 37 gives ketotifen fumarate as an OTC dual-acting agent.'}],
 teach:'Prescription dual-acting agents: azelastine, bepotastine and epinastine. OTC dual-acting agents: olopatadine, alcaftadine and ketotifen.',
 cite:'Lam_OphthalmicDisorders.pdf slide 37'},

{id:'xe22', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjrx', concept:'decongestant-rebound',
 tags:['allergic conjunctivitis','decongestant','counseling'], source:'both',
 stem:'A man with hypertension has used tetrahydrozoline eye drops four times daily for 6 days for red eyes, and his eyes are redder when he skips a dose. What is the best advice?',
 options:[
  {t:'Stop it; past 72 hours it causes rebound redness and raises blood pressure', correct:true, why:'Slide 39 gives rebound conjunctival hyperemia beyond 72 hours and increased blood pressure as a side effect.'},
  {t:'Keep using it, since redness on skipping a dose means the drops are working well', correct:false, why:'Slide 39 gives rebound conjunctival hyperemia beyond 72 hours, so redness on skipping a dose is rebound.'},
  {t:'Use it hourly instead, because the dose was too low to control his redness', correct:false, why:'Slide 39 limits decongestant dosing and warns of rebound beyond 72 hours, so more frequent use makes the problem worse.'},
  {t:'Switch to a preservative-free brand of tetrahydrozoline and continue it', correct:false, why:'Slide 39 lists rebound hyperemia as a decongestant effect beyond 72 hours; a preservative-free product does not remove it.'}],
 teach:'Ophthalmic decongestants (naphazoline, tetrahydrozoline, brimonidine 0.025%) shrink vessels and reduce redness only. Beyond 72 hours they risk rebound conjunctival hyperemia and epithelial dryness, and absorbed drug can raise blood pressure. They do not treat the allergic response (T).',
 cite:'Lam_OphthalmicDisorders.pdf slide 39 (T)'},

{id:'xe23', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjrx', concept:'referral-72-hours',
 tags:['allergic conjunctivitis','referral'], source:'slide',
 stem:'A man with itchy, red eyes has used artificial tears plus ketotifen drops correctly for three days with no improvement. What should the pharmacist do?',
 options:[
  {t:'Refer him to a provider', correct:true, why:'Slide 41 says to refer if symptoms do not resolve after 72 hours of appropriate treatment.'},
  {t:'Add an ophthalmic decongestant for another week', correct:false, why:'Slide 39 limits decongestants to 72 hours and shows rebound hyperemia beyond it, so extending is not advised.'},
  {t:'Continue the same products for several more weeks', correct:false, why:'Slide 41 sets 72 hours of appropriate treatment as the point for medical referral, not a longer trial.'},
  {t:'Switch to a topical corticosteroid eye drop sold OTC', correct:false, why:'Slide 17 lists topical corticosteroids as prescription medications, so they are not an OTC step.'}],
 teach:'If an OTC regimen is used correctly and symptoms have not resolved after 72 hours, the patient needs a provider and possibly a prescription or another diagnosis.',
 cite:'Lam_OphthalmicDisorders.pdf slides 17, 39, 41'},

{id:'xe24', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'deye', sub:'cjrx', concept:'contact-lens-counseling',
 tags:['contact lenses','counseling'], source:'slide',
 stem:'A woman who wears soft contact lenses will use eye drops that contain BAK. What counseling is correct?',
 options:[
  {t:'Remove lenses; wait 15 minutes after the drops', correct:true, why:'Slide 46 says to remove lenses and wait 15 minutes, especially for products with the BAK preservative.'},
  {t:'Leave the lenses in and apply the drops over them', correct:false, why:'Slides 46 and 48 say to remove contacts before instilling drops, because lenses trap drug and preservative.'},
  {t:'Remove the lenses and reinsert them as soon as the drop is in', correct:false, why:'Slide 46 says to wait 15 minutes before reinserting the lenses, not to reinsert at once.'},
  {t:'Reinsert the lenses after 5 minutes, the wait between two solutions', correct:false, why:'Slide 44 gives 5 minutes between two solutions; slide 46 gives 15 minutes before lens reinsertion.'}],
 teach:'Contact lenses can trap drug and preservative against the eye and can be discolored by some products. Remove them before instilling eye drops and wait 15 minutes before reinserting, especially with benzalkonium chloride.',
 cite:'Lam_OphthalmicDisorders.pdf slides 44, 46, 48'}
);

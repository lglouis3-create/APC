/* ==========================================================================
   Week 6: Dr. Parsons, Immunizations. Sources: Immunizations-Pre-Lab.pdf (the
   deck), the 9/21 transcript marked (T), and AAFP-Adult-Schedule-2026.pdf (the
   2026 schedule, text read from Drive; its colors cannot be read from the
   text, so no item keys a color except where the transcript names it).
   Dr. Parsons said the PDF schedule will be available on exams and that the
   Notes section must be used, so items here ask for the rule the schedule
   gives. She also said the source-credibility terms (convergent evidence,
   body of evidence, meta-analysis, systematic review) need not be memorized.
   ========================================================================== */
QUESTIONS.push(
/* ---- using the schedule ----------------------------------------------- */
{id:'i01', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sched', concept:'schedule-order',
 tags:['AAFP schedule'], source:'both',
 stem:'In what order are the parts of the AAFP adult immunization schedule used?',
 options:[
  {t:'Age, medical conditions, Notes, Appendix, Addendum', correct:true, why:'Slide 8 and the schedule’s “How to use” box.'},
  {t:'Notes, age, medical conditions, Appendix, and Addendum', correct:false, why:'Age (Table 1) comes first (slide 8).'},
  {t:'Age, Notes, medical conditions, Addendum, and Appendix', correct:false, why:'Medical conditions (Table 2) come before the Notes, and the Appendix before the Addendum (slide 8).'},
  {t:'Medical conditions, age, Appendix, Notes, and Addendum', correct:false, why:'Vaccines by age are first (slide 8).'}],
 teach:'(1) Vaccines by age, Table 1. (2) Medical conditions, Table 2. (3) Notes. (4) Appendix: contraindications and precautions. (5) Addendum: new or updated guidance.',
 cite:'Immunizations-Pre-Lab.pdf slide 8; AAFP-Adult-Schedule-2026.pdf'},

{id:'i02', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sched', concept:'schedule-conditions-missed',
 tags:['AAFP schedule'], source:'both',
 stem:'Which part of the schedule do providers most often miss, so the pharmacist should focus on it?',
 options:[
  {t:'Vaccines by medical condition or risk factor', correct:true, why:'Slide 8 marks medical conditions as often missed by providers; (T) age-based vaccines are done reasonably well.'},
  {t:'Vaccines by age', correct:false, why:'(T) Providers do a reasonably good job with vaccines by age.'},
  {t:'The trade-name column', correct:false, why:'Not a missed step (slide 8).'},
  {t:'The Addendum', correct:false, why:'The Addendum holds new or updated guidance (slide 8).'}],
 teach:'(T) A patient with lupus on immunosuppressants developed shingles at 40 because a vaccine was missed; special situations get missed across specialists, so pharmacists should own them.',
 cite:'Immunizations-Pre-Lab.pdf slide 8; 9/21 transcript (T)'},

{id:'i03', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sched', concept:'schedule-notes-exams',
 tags:['AAFP schedule','exam'], source:'both',
 stem:'Which statement about the AAFP schedule on exams is correct?',
 options:[
  {t:'The PDF schedule is provided, and the Notes must be used', correct:true, why:'Slides 8 and 17; (T) a right answer cannot be reached without the Notes.'},
  {t:'Students must memorize every dose interval', correct:false, why:'The schedule is provided on exams (slide 17), so intervals are read from it rather than recalled.'},
  {t:'Any website may be used to answer', correct:false, why:'(T) Use the schedule provided on exams, not another website.'},
  {t:'Only Table 1 is needed', correct:false, why:'Table 2 and the Notes are needed to catch risk factors (slide 8).'}],
 teach:'(T) Skim the Notes regularly to get a global impression of the risk factors and special situations for each vaccine.',
 cite:'Immunizations-Pre-Lab.pdf slides 8, 17; 9/21 transcript (T)'},

{id:'i04', skill:'recall', type:'match', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sched', concept:'table1-legend',
 tags:['AAFP schedule'], source:'both',
 stem:'Match each Table 1 category to what it means for the recommendation.',
 left:'Table 1 category', right:'What to do',
 pairs:[
  {l:'Recommended for adults who meet the age requirement', r:'Give the vaccine', why:'Table 1 legend; (T) this is the one you give.'},
  {l:'Recommended with an additional risk factor or another indication', r:'Read the Notes for the indication', why:'Table 1 legend; (T) read the Notes to see whether the patient has another risk factor.'},
  {l:'Recommended based on shared clinical decision-making', r:'Decide with the patient; evidence is mixed', why:'Table 1 legend; (T) evidence mixed, or vaccinate if risk factors now exist.'},
  {l:'No recommendation or not applicable', r:'Do not give', why:'Table 1 legend; (T) there is no body of evidence.'}],
 teach:'(T) Example: HPV at 27–45 years is shared decision-making; a 28-year-old who now has risk factors should be vaccinated. Tables 1 and 2 have different legends; read the one at the bottom of each.',
 cite:'AAFP-Adult-Schedule-2026.pdf; Immunizations-Pre-Lab.pdf slide 11; 9/21 transcript (T)'},

{id:'i05', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sched', concept:'abbrev-flu',
 tags:['abbreviations','trade names'], source:'both',
 stem:'Which abbreviation and trade name pair is correct for the live attenuated influenza vaccine?',
 options:[
  {t:'LAIV3: FluMist', correct:true, why:'AAFP vaccine list: Influenza vaccine (live, attenuated) LAIV3 FluMist.'},
  {t:'RIV3: FluMist', correct:false, why:'RIV3 is the recombinant vaccine, Flublok.'},
  {t:'ccIIV3: FluMist', correct:false, why:'ccIIV3 is the cell culture-based inactivated vaccine, Flucelvax.'},
  {t:'IIV3: Flublok', correct:false, why:'IIV3 is egg-based and inactivated; Flublok is RIV3.'}],
 teach:'(T) You need to know the abbreviations, which vaccines are live and which inactivated, and the trade names. LAIV3 is the live vaccine; the others in this group are inactivated or recombinant.',
 cite:'AAFP-Adult-Schedule-2026.pdf; Immunizations-Pre-Lab.pdf slide 6; 9/21 transcript (T)'},

{id:'i06', skill:'recall', type:'match', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sched', concept:'trade-pneumo-zoster',
 tags:['abbreviations','trade names'], source:'slide',
 stem:'Match each vaccine to its trade name.',
 left:'Vaccine', right:'Trade name',
 pairs:[
  {l:'PCV15', r:'Vaxneuvance', why:'AAFP vaccine list.'},
  {l:'PCV20', r:'Prevnar 20', why:'AAFP vaccine list.'},
  {l:'PCV21', r:'Capvaxive', why:'AAFP vaccine list.'},
  {l:'PPSV23', r:'Pneumovax 23', why:'AAFP vaccine list.'},
  {l:'RZV', r:'Shingrix', why:'AAFP vaccine list.'},
  {l:'RSV (pregnancy)', r:'Abrysvo', why:'AAFP RSV pregnancy note: 1 dose Abrysvo.'}],
 teach:'Pneumococcal conjugate vaccines are PCV15, PCV20 and PCV21; the polysaccharide vaccine is PPSV23. RZV is the recombinant zoster vaccine.',
 cite:'AAFP-Adult-Schedule-2026.pdf'},

{id:'i07', skill:'recall', type:'match', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sched', concept:'trade-misc',
 tags:['abbreviations','trade names'], source:'slide',
 stem:'Match each vaccine to its trade name.',
 left:'Vaccine', right:'Trade name',
 pairs:[
  {l:'Tdap', r:'Boostrix', why:'AAFP vaccine list (Adacel also).'},
  {l:'Td', r:'Tenivac', why:'AAFP vaccine list.'},
  {l:'HPV', r:'Gardasil 9', why:'AAFP vaccine list.'},
  {l:'MenACWY-CRM', r:'Menveo', why:'AAFP vaccine list.'},
  {l:'MenB-4C', r:'Bexsero', why:'AAFP vaccine list.'},
  {l:'Mpox', r:'Jynneos', why:'AAFP vaccine list.'}],
 teach:'Several vaccines have more than one trade name; the AAFP list shows Tdap as Adacel or Boostrix.',
 cite:'AAFP-Adult-Schedule-2026.pdf'},

{id:'i08', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sched', concept:'acip',
 tags:['ACIP'], source:'both',
 stem:'What is the Advisory Committee on Immunization Practices (ACIP)?',
 options:[
  {t:'A CDC subcommittee whose recommendations become CDC policy once adopted', correct:true, why:'Slide 4: recommendations are forwarded to the CDC Director and, once adopted, become official CDC policy.'},
  {t:'A committee of the AAFP that writes its schedule', correct:false, why:'The AAFP is a physician-led society (slide 5), separate from ACIP.'},
  {t:'A part of the FDA that approves vaccines', correct:false, why:'Slide 4 places ACIP under the CDC.'},
  {t:'A state board that licenses vaccinators', correct:false, why:'Not described on slide 4.'}],
 teach:'ACIP has regularly scheduled public meetings, for example on eligibility, timing and number of doses. Other societies, including the AAFP, American Academy of Pediatrics and ACOG, also issue recommendations.',
 cite:'Immunizations-Pre-Lab.pdf slides 4–5; 9/21 transcript (T)'},

{id:'i09', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sched', concept:'vaccine-resources',
 tags:['resources'], source:'slide',
 stem:'A pharmacist needs a patient handout and a contraindication screening form for a vaccine. Which resource supplies them?',
 options:[
  {t:'Immunize.org', correct:true, why:'Slide 6: vaccine information sheets, screening checklists, news and updates.'},
  {t:'CDC Yellow Book', correct:false, why:'The Yellow Book is for travel vaccines (slide 6).'},
  {t:'The Addendum of the AAFP schedule', correct:false, why:'The Addendum lists new or updated guidance (slide 8).'},
  {t:'The ACIP meeting minutes', correct:false, why:'Not named on slide 6.'}],
 teach:'(T) The .org shows Immunize.org is a nonprofit organization, though that does not mean there are no financial interests.',
 cite:'Immunizations-Pre-Lab.pdf slides 6, 8; 9/21 transcript (T)'},

{id:'i10', skill:'apply', prof:'Dr. Parsons', multi:true, tier:'new', topic:'imm', sub:'vax', concept:'hepa-who',
 tags:['hepatitis A'], source:'both',
 stem:'Which patients should receive hepatitis A vaccine if not fully vaccinated? Select all that apply.',
 options:[
  {t:'A patient with HIV', correct:true, why:'Slide 16.'},
  {t:'A patient with chronic liver disease', correct:true, why:'Slide 16.'},
  {t:'A patient with alcoholism', correct:true, why:'Slide 16.'},
  {t:'Any patient who requests it', correct:true, why:'Slide 16; AAFP Notes: identification of a risk factor is not required.'},
  {t:'Every patient 40 years old', correct:false, why:'Not an indication in the Notes; age alone does not qualify.'}],
 teach:'(T) Also give it to patients listed in the Notes under special situations, as long as the screening checklist shows no contraindication.',
 cite:'Immunizations-Pre-Lab.pdf slides 14–16; AAFP-Adult-Schedule-2026.pdf'},

{id:'i11', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'hepa-pregnancy',
 tags:['hepatitis A','pregnancy'], source:'both',
 stem:'A pregnant patient has no risk factor and has not asked for hepatitis A vaccine. Is it routinely indicated?',
 options:[
  {t:'No, only if she is in a special-situation risk group', correct:true, why:'Slide 14: pregnant patients get it if in one of the special situations; (T) not all pregnant patients.'},
  {t:'Yes, for every pregnant patient', correct:false, why:'(T) You do not do it for all pregnant patients, only those in a risk bucket.'},
  {t:'No, because live vaccines are contraindicated', correct:false, why:'Slide 14: the hepatitis A vaccine is not a live vaccine, so that rule does not apply.'},
  {t:'Yes, but only after delivery for everyone', correct:false, why:'Slide 14 allows it in pregnancy for patients in a risk group.'}],
 teach:'Hepatitis A vaccine is not a live vaccine. Separately, any person not fully vaccinated who requests it can receive it without identifying a risk factor (slide 16; AAFP Notes).',
 cite:'Immunizations-Pre-Lab.pdf slides 14, 16; 9/21 transcript (T)'},

{id:'i12', skill:'apply', prof:'Dr. Parsons', multi:true, tier:'new', topic:'imm', sub:'contra', concept:'pregnancy-contraindicated',
 tags:['pregnancy','contraindications'], source:'both',
 stem:'Which vaccines are contraindicated in pregnancy? Select all that apply.',
 options:[
  {t:'Measles, mumps and rubella (MMR)', correct:true, why:'AAFP Appendix: MMR, pregnancy.'},
  {t:'Varicella (VAR)', correct:true, why:'AAFP Appendix: VAR, pregnancy.'},
  {t:'Live attenuated influenza (LAIV3)', correct:true, why:'AAFP Appendix: LAIV3, pregnancy.'},
  {t:'Hepatitis A', correct:false, why:'Not live; given in pregnancy if in a risk group (slide 14).'},
  {t:'Tdap', correct:false, why:'One dose of Tdap is recommended in each pregnancy (AAFP Notes).'}],
 teach:'After pregnancy and before discharge from the facility, a patient without evidence of rubella or varicella immunity gets the missing dose.',
 cite:'AAFP-Adult-Schedule-2026.pdf Appendix; Immunizations-Pre-Lab.pdf slide 14'},

{id:'i13', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'contra', concept:'contra-vs-precaution',
 tags:['contraindications'], source:'slide',
 stem:'What is the difference between a contraindication and a precaution in the AAFP Appendix?',
 options:[
  {t:'With a contraindication do not give; with a precaution, usually defer', correct:true, why:'Appendix footnotes 1 and 2: a contraindication means the vaccine should NOT be administered; a precaution means vaccination should generally be deferred.'},
  {t:'A contraindication is permanent; a precaution is a warning only', correct:false, why:'The footnotes define precautions as generally deferred but possibly indicated if benefit outweighs risk.'},
  {t:'Both mean the vaccine is never given', correct:false, why:'A precaution may still lead to vaccination if the benefit of protection outweighs the risk.'},
  {t:'A precaution applies only to live vaccines', correct:false, why:'Moderate or severe acute illness is a precaution for every vaccine listed in the Appendix.'}],
 teach:'Contraindications and precautions are listed per vaccine in the Appendix, which comes after the Notes in the order of use.',
 cite:'AAFP-Adult-Schedule-2026.pdf Appendix; Immunizations-Pre-Lab.pdf slide 8'},

{id:'i14', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'contra', concept:'acute-illness',
 tags:['precautions'], source:'both',
 stem:'A patient with a moderate or severe acute illness, with or without fever, comes for a vaccine. What does the schedule treat this as?',
 options:[
  {t:'A precaution; assess how sick the patient is before vaccinating', correct:true, why:'AAFP Appendix lists it as a precaution for each vaccine; (T) the lecturer assesses how sick the patient is, so the vaccine is not blamed if the patient needs a doctor or hospital.'},
  {t:'A contraindication for all vaccines', correct:false, why:'It is in the precautions column, so vaccination may be deferred but not always refused (Appendix footnote 2).'},
  {t:'No concern; vaccinate every patient', correct:false, why:'It is a listed precaution for every vaccine in the Appendix.'},
  {t:'A contraindication for live vaccines only', correct:false, why:'It is a precaution for inactivated and live vaccines alike (Appendix).'}],
 teach:'(T) A moderate or severe illness is deferred so that, if the patient needs a doctor or hospital, the vaccine is not a possible cause of the problem.',
 cite:'AAFP-Adult-Schedule-2026.pdf Appendix; 9/21 transcript (T)'},

{id:'i15', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'contra', concept:'anaphylaxis-contra',
 tags:['contraindications'], source:'slide',
 stem:'A patient had anaphylaxis after a previous dose of Tdap. What does the AAFP Appendix say for Tdap?',
 options:[
  {t:'It is contraindicated; do not give it', correct:true, why:'Appendix, Tdap: severe allergic reaction (for example anaphylaxis) after a previous dose or to a vaccine component is a contraindication.'},
  {t:'It is a precaution; vaccinate in 4 weeks', correct:false, why:'It is a contraindication, so the vaccine should not be administered (Appendix footnote 1).'},
  {t:'It is allowed with a reduced dose', correct:false, why:'The Appendix does not describe reduced doses.'},
  {t:'It is allowed if the patient waits 30 minutes', correct:false, why:'Not described in the Appendix.'}],
 teach:'The screening questionnaire lists next steps if the patient screens positive (T).',
 cite:'AAFP-Adult-Schedule-2026.pdf Appendix; 9/21 transcript (T)'},

{id:'i16', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'hepb-dialysis',
 tags:['hepatitis B','dialysis'], source:'slide',
 stem:'A patient starting dialysis needs hepatitis B vaccine. Which of the dialysis regimens in the Notes needs the fewest doses?',
 options:[
  {t:'Recombivax HB dialysis formulation (40 mcg/1 mL), 3 doses at 0, 1 and 6 months', correct:true, why:'AAFP Notes: 3-dose series of Recombivax HB at 0, 1, 6 months.'},
  {t:'Engerix-B 4 doses at 0, 1, 2 and 6 months, with a 2 mL dose', correct:false, why:'A valid dialysis option, but it takes 4 doses (AAFP Notes).'},
  {t:'Heplisav-B 2 doses 4 weeks apart', correct:false, why:'Heplisav-B is not named in the dialysis notes; the dialysis options are the 3- and 4-dose series (AAFP Notes).'},
  {t:'Twinrix 3 doses at 0, 1 and 6 months', correct:false, why:'Twinrix combines hepatitis A and B; the dialysis notes name Recombivax HB or Engerix-B.'}],
 teach:'Patients on dialysis complete a 3- or 4-dose series. Engerix-B uses a 2 mL dose instead of the normal adult 1 mL.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (hepatitis B)'},

{id:'i17', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'hepa-products',
 tags:['hepatitis A'], source:'slide',
 stem:'Which hepatitis A product is given as 2 doses, with dose 2 anywhere from 6 to 18 months after dose 1?',
 options:[
  {t:'Vaqta', correct:true, why:'AAFP Notes: Vaqta 6–18 months apart.'},
  {t:'Havrix', correct:false, why:'Havrix is 6–12 months apart (AAFP Notes).'},
  {t:'Twinrix', correct:false, why:'Twinrix is a 3-dose series at 0, 1 and 6 months (AAFP Notes).'},
  {t:'Engerix-B', correct:false, why:'Engerix-B is a hepatitis B vaccine.'}],
 teach:'Any person not fully vaccinated who requests hepatitis A vaccine can get Havrix or Vaqta (2 doses) or Twinrix (3 doses).',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (hepatitis A)'},

{id:'i18', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'pneumo-after-ppsv23',
 tags:['pneumococcal'], source:'slide',
 stem:'A 65-year-old patient received only PPSV23 more than a year ago. Which is recommended?',
 options:[
  {t:'1 dose of PCV20 or PCV21 (or PCV15)', correct:true, why:'AAFP Notes: previously received only PPSV23, 1 dose of PCV15, PCV20 or PCV21 at least 1 year after the last PPSV23.'},
  {t:'Repeat PPSV23 now', correct:false, why:'The Notes call for a conjugate vaccine, not a repeat PPSV23.'},
  {t:'No further pneumococcal vaccine', correct:false, why:'A conjugate dose is recommended after PPSV23 alone (AAFP Notes).'},
  {t:'PCV20 followed by PPSV23 in 1 year', correct:false, why:'After PCV20 or PCV21 no further dose is needed; PPSV23 follows only PCV15 in other pathways (AAFP Notes).'}],
 teach:'If PCV15 is used for a patient with PPSV23 only, no additional PPSV23 is recommended. Adults who have received PCV20 or PCV21 need no additional pneumococcal vaccine.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (pneumococcal)'},

{id:'i19', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'pneumo-none-before',
 tags:['pneumococcal'], source:'slide',
 stem:'A 55-year-old has never had a pneumococcal vaccine, and PCV15 is chosen. What follows?',
 options:[
  {t:'1 dose of PPSV23 a year after PCV15', correct:true, why:'AAFP Notes: if PCV15 is used, give 1 dose PPSV23 1 year after the PCV15 dose.'},
  {t:'Nothing; pneumococcal vaccination is complete', correct:false, why:'Complete after PCV20 or PCV21, not PCV15 (AAFP Notes).'},
  {t:'A second PCV15 in 8 weeks', correct:false, why:'The Notes give PPSV23, not a second PCV15.'},
  {t:'PPSV23 on the same day', correct:false, why:'The Notes say 1 year after PCV15 (a minimum of 8 weeks only for immunocompromising conditions, cochlear implant or CSF leak).'}],
 teach:'Age 50 or older with no previous PCV: 1 dose PCV15, PCV20 or PCV21. PCV20 or PCV21 completes the series.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (pneumococcal)'},

{id:'i20', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'rzv-dosing',
 tags:['zoster'], source:'both',
 stem:'A 52-year-old receives the first dose of Shingrix (RZV) today. When is dose 2?',
 options:[
  {t:'2 to 6 months later', correct:true, why:'AAFP Notes and slide 22: 2-dose series 2–6 months apart (minimum interval 4 weeks).'},
  {t:'1 year later', correct:false, why:'The series is 2–6 months apart (slide 22).'},
  {t:'2 to 6 weeks later', correct:false, why:'The minimum interval is 4 weeks, but the standard is 2–6 months (AAFP Notes).'},
  {t:'None; one dose is enough', correct:false, why:'RZV is a 2-dose series (AAFP Notes).'}],
 teach:'RZV is recommended at 50 or older regardless of previous herpes zoster or zoster vaccine live (Zostavax).',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (zoster); Immunizations-Pre-Lab.pdf slide 22'},

{id:'i21', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'rzv-immunocompromised',
 tags:['zoster'], source:'both',
 stem:'A 40-year-old with lupus takes an immunosuppressant. Is Shingrix (RZV) recommended?',
 options:[
  {t:'Yes, immunocompromising conditions get a 2-dose series', correct:true, why:'AAFP Notes: special situations, immunocompromising conditions, 2-dose RZV; (T) her lupus patient had shingles at 40 without the vaccine.'},
  {t:'No, RZV starts at 50 for everyone', correct:false, why:'The Notes recommend RZV for immunocompromising conditions before age 50.'},
  {t:'No, live vaccines are given instead', correct:false, why:'RZV is the recombinant (not live) zoster vaccine.'},
  {t:'Yes, but only 1 dose', correct:false, why:'The series is 2 doses (AAFP Notes).'}],
 teach:'(T) Immunosuppressed patients are often missing vaccines they should have had before the immunosuppressant was started.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (zoster); 9/21 transcript (T)'},

{id:'i22', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'rsv-pregnancy',
 tags:['RSV','pregnancy'], source:'slide',
 stem:'A patient is 33 weeks pregnant in October. Which RSV vaccine recommendation applies?',
 options:[
  {t:'1 dose of Abrysvo', correct:true, why:'AAFP Notes: 32 weeks 0 days through 36 weeks 6 days, September through January, 1 dose Abrysvo.'},
  {t:'1 dose of Arexvy', correct:false, why:'The pregnancy recommendation names Abrysvo (AAFP Notes).'},
  {t:'None; RSV vaccine is not recommended in pregnancy', correct:false, why:'It is recommended in this window (AAFP Notes).'},
  {t:'2 doses 4 weeks apart', correct:false, why:'The pregnancy recommendation is 1 dose (AAFP Notes).'}],
 teach:'Either maternal Abrysvo or infant nirsevimab or clesrovimab is recommended to prevent severe RSV in infants. Additional doses in later pregnancies are not recommended.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (RSV)'},

{id:'i23', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'rsv-older',
 tags:['RSV'], source:'slide',
 stem:'A 77-year-old has never had an RSV vaccine. What is recommended?',
 options:[
  {t:'1 dose of Arexvy, Abrysvo or mResvia', correct:true, why:'AAFP Notes: age 75 or older, unvaccinated, 1 dose; additional doses not recommended.'},
  {t:'An annual RSV dose', correct:false, why:'Additional doses are not recommended (AAFP Notes).'},
  {t:'Only if she has a risk factor', correct:false, why:'The risk-factor requirement applies to ages 50–74 (AAFP Notes).'},
  {t:'None; RSV vaccine is for pregnancy only', correct:false, why:'It is recommended at 75 or older (AAFP Notes).'}],
 teach:'Age 50–74 is vaccinated only if at increased risk of severe RSV disease (such as chronic lung or heart disease).',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (RSV)'},

{id:'i24', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'tdap-pregnancy',
 tags:['Tdap','pregnancy'], source:'slide',
 stem:'How often is Tdap recommended in pregnancy?',
 options:[
  {t:'1 dose in each pregnancy, preferably in weeks 27–36', correct:true, why:'AAFP Notes: 1 dose Tdap during each pregnancy, preferably early in gestational weeks 27–36.'},
  {t:'1 dose only in the first pregnancy', correct:false, why:'It is recommended each pregnancy (AAFP Notes).'},
  {t:'No dose; Td is used', correct:false, why:'If a tetanus-toxoid vaccine is indicated for a pregnant woman, use Tdap (AAFP Notes).'},
  {t:'2 doses 4 weeks apart', correct:false, why:'One dose per pregnancy (AAFP Notes).'}],
 teach:'If a tetanus-toxoid vaccine is indicated for a pregnant woman, use Tdap (AAFP Notes).',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (Tdap)'},

{id:'i25', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'tetanus-wound',
 tags:['Td','wound'], source:'slide',
 stem:'A patient with 3 or more previous tetanus doses has a deep puncture wound; the last dose was 7 years ago. What is recommended?',
 options:[
  {t:'Tdap or Td, since more than 5 years have passed', correct:true, why:'AAFP Notes: for wounds other than clean and minor, give Tdap or Td if more than 5 years since the last dose.'},
  {t:'No vaccine; less than 10 years since the last dose', correct:false, why:'10 years applies to clean and minor wounds (AAFP Notes).'},
  {t:'A 3-dose primary series', correct:false, why:'The patient has completed a primary series (3 or more doses).'},
  {t:'Tdap only if pregnant', correct:false, why:'Wound management does not require pregnancy (AAFP Notes).'}],
 teach:'Adults who have completed the primary series need Td or Tdap every 10 years after the first Tdap.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (tetanus)'},

{id:'i26', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'contra', concept:'mmr-hiv',
 tags:['MMR','HIV'], source:'slide',
 stem:'A patient with HIV has a CD4 count of 150 cells/mm³ and no evidence of immunity to measles. What applies to MMR?',
 options:[
  {t:'MMR is contraindicated', correct:true, why:'AAFP Notes: contraindicated for HIV with CD4 percentage below 15% or count below 200 cells/mm³.'},
  {t:'Give 2 doses 4 weeks apart', correct:false, why:'This applies at CD4 15% or above and 200 or above for at least 6 months (AAFP Notes).'},
  {t:'Give 1 dose after delivery', correct:false, why:'This is the rule for pregnancy without rubella immunity (AAFP Notes).'},
  {t:'Give it only if born before 1957', correct:false, why:'Birth before 1957 is evidence of immunity, not a path for this patient (AAFP Notes).'}],
 teach:'Severe immunodeficiency makes both MMR and varicella vaccine contraindicated.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (MMR); Appendix'},

{id:'i27', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'mmr-immunity',
 tags:['MMR'], source:'slide',
 stem:'Which is evidence of immunity to measles, mumps and rubella?',
 options:[
  {t:'Laboratory evidence of immunity or disease', correct:true, why:'AAFP Notes list laboratory evidence, documentation of MMR vaccine, or birth before 1957 (except health care personnel).'},
  {t:'A clinical diagnosis of measles without a lab test', correct:false, why:'Diagnosis of disease without laboratory confirmation is not evidence of immunity (AAFP Notes).'},
  {t:'A patient’s memory of childhood vaccines', correct:false, why:'Documentation of receipt is required, not recall (AAFP Notes).'},
  {t:'Being born after 1957', correct:false, why:'Birth before 1957 qualifies; after does not (AAFP Notes).'}],
 teach:'Health care personnel born before 1957 without evidence of immunity should still be considered for a 2-dose series.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (MMR)'},

{id:'i28', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'flu-65',
 tags:['influenza'], source:'slide',
 stem:'Which influenza vaccines are preferred for a patient aged 65 or older?',
 options:[
  {t:'High-dose, recombinant or adjuvanted (HD-IIV3, RIV3, aIIV3)', correct:true, why:'AAFP Notes: any one of HD-IIV3, RIV3 or aIIV3 is preferred.'},
  {t:'Live attenuated (LAIV3)', correct:false, why:'FluMist is not the preferred product at 65 or older (AAFP Notes).'},
  {t:'Only egg-based IIV3', correct:false, why:'An egg allergy does not limit the choice, and the preferred vaccines are HD-IIV3, RIV3 or aIIV3 (AAFP Notes).'},
  {t:'Any influenza vaccine with no preference', correct:false, why:'Preferred products are named for 65 or older (AAFP Notes).'}],
 teach:'Persons with an egg allergy can receive any influenza vaccine appropriate for age and health status.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (influenza)'},

{id:'i29', skill:'tell', prof:'Dr. Parsons', multi:true, tier:'new', topic:'imm', sub:'contra', concept:'laiv-contra',
 tags:['influenza','contraindications'], source:'slide',
 stem:'Which are contraindications to live attenuated influenza vaccine (LAIV3, FluMist)? Select all that apply.',
 options:[
  {t:'Anatomic or functional asplenia', correct:true, why:'AAFP Appendix.'},
  {t:'Pregnancy', correct:true, why:'AAFP Appendix.'},
  {t:'Immunocompromised due to any cause', correct:true, why:'AAFP Appendix.'},
  {t:'Cochlear implant', correct:true, why:'AAFP Appendix.'},
  {t:'An egg allergy', correct:false, why:'Egg allergy does not prevent any influenza vaccine (AAFP Notes; the Appendix excludes egg from the component allergy).'},
  {t:'Age 25 years', correct:false, why:'Age 19–49 is covered by the schedule; age is not a contraindication (AAFP Table 2).'}],
 teach:'Close contacts or caregivers of severely immunosuppressed persons who require a protected environment should not receive LAIV3, or should avoid contact for 7 days.',
 cite:'AAFP-Adult-Schedule-2026.pdf Appendix and Notes'},

{id:'i30', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'hib-asplenia',
 tags:['Hib','asplenia'], source:'both',
 stem:'A patient is having an elective splenectomy. When is Hib vaccine best given?',
 options:[
  {t:'1 dose, preferably at least 14 days before surgery', correct:true, why:'AAFP Notes: elective splenectomy, 1 dose preferably at least 14 days before splenectomy.'},
  {t:'1 dose on the day of surgery', correct:false, why:'The Notes advise at least 14 days before (AAFP Notes).'},
  {t:'3 doses starting 6 months after surgery', correct:false, why:'That is the stem cell transplant series (AAFP Notes).'},
  {t:'None; Hib is only for children', correct:false, why:'The adult schedule lists Hib for asplenia (AAFP Notes).'}],
 teach:'Asplenia (including sickle cell disease): 1 dose if not previously vaccinated. HSCT recipients: 3 doses 4 weeks apart starting 6–12 months after successful transplant. (T) A trauma patient with an urgent splenectomy needs many vaccines.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (Hib); 9/21 transcript (T)'},

{id:'i31', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'menacwy-risk',
 tags:['meningococcal'], source:'slide',
 stem:'A patient with asplenia or HIV needs MenACWY. What is the regimen?',
 options:[
  {t:'2 doses of Menveo or MenQuadfi, at least 8 weeks apart', correct:true, why:'AAFP Notes; revaccinate every 5 years if risk remains.'},
  {t:'1 dose of Menveo only', correct:false, why:'That is for first-year college students in residential housing or military recruits (AAFP Notes).'},
  {t:'3 doses of Bexsero', correct:false, why:'Bexsero is MenB, not MenACWY (AAFP vaccine list).'},
  {t:'1 dose every 10 years', correct:false, why:'The Notes give revaccination every 5 years if risk remains.'}],
 teach:'MenACWY products are Menveo (MenACWY-CRM) and MenQuadfi (MenACWY-TT).',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (meningococcal)'},

{id:'i32', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'dose-interval',
 tags:['dose intervals'], source:'slide',
 stem:'A second dose was given 6 days before the minimum interval. What is correct?',
 options:[
  {t:'The dose is not valid and is repeated', correct:true, why:'AAFP Notes: doses given 5 or more days early are not counted and are repeated.'},
  {t:'The dose is valid', correct:false, why:'Only doses given 4 days or fewer before the minimum interval are valid (AAFP Notes).'},
  {t:'The series restarts from dose 1', correct:false, why:'The Notes say not to restart series for extended intervals; the repeat is spaced after the invalid dose.'},
  {t:'The dose is valid if the patient asks', correct:false, why:'Validity depends on the interval, not a request (AAFP Notes).'}],
 teach:'4 weeks equals 28 days. A dose given up to 4 days before the minimum age or interval is valid; 5 or more days early is repeated.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (additional information)'},

{id:'i33', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'vax', concept:'mpox',
 tags:['mpox'], source:'slide',
 stem:'What is the mpox vaccine (Jynneos) regimen for an adult at risk?',
 options:[
  {t:'2 doses, 28 days apart', correct:true, why:'AAFP Notes: 2-dose series, 28 days apart.'},
  {t:'1 dose', correct:false, why:'The series is 2 doses (AAFP Notes).'},
  {t:'3 doses at 0, 1 and 6 months', correct:false, why:'That is the hepatitis B schedule (AAFP Notes).'},
  {t:'2 doses, 6 months apart', correct:false, why:'The interval is 28 days (AAFP Notes).'}],
 teach:'Risk includes some persons who are gay, bisexual or other men who have sex with men, with certain recent exposures, and persons deemed at risk by public health authorities.',
 cite:'AAFP-Adult-Schedule-2026.pdf Notes (mpox)'},

/* ---- SBAR and talking with patients ----------------------------------- */
{id:'i34', skill:'recall', type:'match', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sbar', concept:'sbar-sort',
 tags:['SBAR'], source:'slide',
 stem:'Match each statement from the example SBAR to its component.',
 left:'Statement', right:'Component',
 pairs:[
  {l:'Mrs. Jones is at the pharmacy to be assessed for vaccine needs', r:'Situation', why:'Slide 22, S.'},
  {l:'She is a 61-year-old healthcare worker with type 2 diabetes complicated by chronic kidney disease', r:'Background', why:'Slide 22, B.'},
  {l:'AAFP recommends PCV21 for patients aged 19–64 with diabetes', r:'Assessment', why:'Slide 22, A.'},
  {l:'I recommend PCV21, Shingrix, influenza, RSV and an updated COVID-19 vaccine', r:'Recommendation', why:'Slide 22, R.'}],
 teach:'(T) If you have trouble formulating an SBAR, think in reverse: start from the recommendation, then ask what assessment led to it and what background supports it. The situation should be simple. Be complete but concise.',
 cite:'Immunizations-Pre-Lab.pdf slides 20–22; 9/21 transcript (T)'},

{id:'i35', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sbar', concept:'sbar-source',
 tags:['SBAR'], source:'both',
 stem:'In a vaccine SBAR to a preceptor, what should the assessment state beyond the vaccines indicated?',
 options:[
  {t:'The source of the recommendation, such as AAFP or CDC', correct:true, why:'(T) Cite your source, especially early in your career; the example reads “AAFP recommends…” (slide 22).'},
  {t:'The patient’s insurance plan', correct:false, why:'Not part of the example assessment (slide 22).'},
  {t:'The pharmacy’s vaccine stock', correct:false, why:'Not part of the example assessment (slide 22).'},
  {t:'Nothing; the recommendation is enough', correct:false, why:'(T) State the source.'}],
 teach:'(T) A source matters most when guidance is new and other providers may not have caught up.',
 cite:'Immunizations-Pre-Lab.pdf slide 22; 9/21 transcript (T)'},

{id:'i36', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sbar', concept:'patient-language',
 tags:['communication'], source:'both',
 stem:'How should the pharmacist explain a vaccine recommendation to the patient?',
 options:[
  {t:'In simple language, with why this patient needs it and any follow-up dose', correct:true, why:'Slides 22–23 and (T): use the simplest language, say why the patient specifically needs it, and mention the next dose (for example 2–6 months).'},
  {t:'In medical terms to show expertise', correct:false, why:'(T) Basic language is appreciated by nearly all patients.'},
  {t:'With only the vaccine name', correct:false, why:'(T) Tell the patient why they specifically need it.'},
  {t:'Without mentioning a second dose', correct:false, why:'Slide 23: tell the patient that a second shot is needed in 2–6 months.'}],
 teach:'(T) For example, as we get older our immunity naturally declines, and with diabetes the immune system is less strong.',
 cite:'Immunizations-Pre-Lab.pdf slide 23; 9/21 transcript (T)'},

{id:'i37', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'sbar', concept:'travel-resources',
 tags:['travel'], source:'both',
 stem:'Which resource tells which vaccines are indicated for a trip, by destination?',
 options:[
  {t:'The CDC travel site and Yellow Book', correct:true, why:'Slides 6 and 26; (T) the recommendations can differ by area within a country.'},
  {t:'The AAFP adult schedule', correct:false, why:'The adult schedule covers routine adult vaccines; travel information is in the CDC resources (slides 6, 26).'},
  {t:'Immunize.org screening checklists', correct:false, why:'Immunize.org provides information sheets and screening checklists (slide 6).'},
  {t:'The pharmacy’s travel clinic list', correct:false, why:'Travel clinics provide vaccines; they are not the source of recommendations (slide 25).'}],
 teach:'(T) Community pharmacists can give travel vaccines but generally are not prescribers for travel medications such as antimalarials.',
 cite:'Immunizations-Pre-Lab.pdf slides 6, 24–26; 9/21 transcript (T)'},

/* ---- vaccine hesitancy ------------------------------------------------ */
{id:'i38', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'hes', concept:'hesitancy-definition',
 tags:['vaccine hesitancy'], source:'both',
 stem:'What is vaccine hesitancy?',
 options:[
  {t:'Reluctance or refusal to vaccinate despite vaccines being available', correct:true, why:'Slide 27.'},
  {t:'A shortage of vaccines in a community', correct:false, why:'Hesitancy applies when vaccines are available (slide 27).'},
  {t:'A delay caused by insurance approval', correct:false, why:'Not described on slide 27.'},
  {t:'A contraindication to a vaccine', correct:false, why:'A contraindication is a medical reason not to give (Appendix); hesitancy is reluctance.'}],
 teach:'Healthcare professionals may be vaccine hesitant. Of all barriers to vaccination, hesitancy is considered one of the most critical, and the WHO named it among the ten leading threats to global health in 2019 (slides 27–28). (T) It is likely to be on assessments.',
 cite:'Immunizations-Pre-Lab.pdf slides 27–28; 9/21 transcript (T)'},

{id:'i39', skill:'recall', type:'match', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'hes', concept:'ask-tell-ask',
 tags:['Ask-Tell-Ask'], source:'slide',
 stem:'Match each statement to its step in the Ask-Tell-Ask method.',
 left:'Statement', right:'Step',
 pairs:[
  {l:'It sounds like you don’t want the shot today. Can you help me understand why not?', r:'Ask: learn the reason', why:'Slide 32, first Ask: explore why the patient is declining.'},
  {l:'Do you mind if I share some information with you about the vaccine?', r:'Ask: get permission to share', why:'Slide 32, first Ask: request permission before giving information.'},
  {l:'Respond with information centered on the patient’s belief or question', r:'Tell: address the belief', why:'Slide 32, Tell: respond to the patient’s own belief or question, then listen and watch for reactions.'},
  {l:'What are your thoughts now about getting this vaccine?', r:'Ask: check their thoughts', why:'Slide 32, final Ask: find out where the patient stands after the information.'}],
 teach:'If the patient still declines, respect their autonomy and tell them they can contact you to learn more or if they change their mind (slide 32).',
 cite:'Immunizations-Pre-Lab.pdf slide 32'},

{id:'i40', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'hes', concept:'hesitancy-protect-others',
 tags:['vaccine hesitancy'], source:'slide',
 stem:'A parent hesitates to vaccinate. Which point may help most, based on the sources?',
 options:[
  {t:'Someone in the household, like a grandparent, may benefit', correct:true, why:'Slide 35: if they understand a household member may benefit, they are more likely to vaccinate.'},
  {t:'Refusal is the parent’s problem alone', correct:false, why:'(T) It is the whole community’s problem if people do not get vaccines.'},
  {t:'The vaccine has no risks', correct:false, why:'Slide 33: share the risks as well as the benefits.'},
  {t:'The patient must decide at once', correct:false, why:'Slide 36: help the patient come to their own decision with kindness, patience and active listening.'}],
 teach:'Provide scientific information from reliable sources: benefits shown in trials (for example, reduced hospitalization) and the risks of the vaccine.',
 cite:'Immunizations-Pre-Lab.pdf slides 33–36; 9/21 transcript (T)'},

{id:'i41', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'hes', concept:'hesitancy-religious',
 tags:['vaccine hesitancy'], source:'slide',
 stem:'A patient declines a vaccine for religious reasons. Which approach fits?',
 options:[
  {t:'Show sensitivity to the belief and hear the concerns', correct:true, why:'Slide 34; religious leaders and vaccine clinics at places of worship can help.'},
  {t:'Dismiss the belief and repeat the benefits', correct:false, why:'Slide 34 asks for care and sensitivity to beliefs.'},
  {t:'Stop all discussion with the patient', correct:false, why:'Slide 36 asks for kindness, patience and active listening; the patient may return if they want to learn more (slide 32).'},
  {t:'Label the patient as anti-vaccine', correct:false, why:'(T) Do not use “anti-vaxxer”; it is rude and condescending.'}],
 teach:'(T) A patient hesitant because of incorrect information is not a bad or unintelligent person; their information source has incorrect information.',
 cite:'Immunizations-Pre-Lab.pdf slides 32, 34, 36; 9/21 transcript (T)'},

{id:'i42', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'imm', sub:'hes', concept:'hesitancy-misconception',
 tags:['vaccine hesitancy'], source:'both',
 stem:'A patient says, “I took the flu vaccine and I got the flu anyway.” Which fact addresses this belief?',
 options:[
  {t:'The influenza virus has multiple strains', correct:true, why:'(T) Patients with this belief often do not understand that the virus has strains; the statement is one of the misconceptions on slide 30.'},
  {t:'Vaccines contain harmful ingredients', correct:false, why:'A different misconception on slide 30; it does not explain getting the flu after vaccination.'},
  {t:'mRNA vaccines go into your DNA', correct:false, why:'A different misconception on slide 30; (T) mRNA does not enter the nucleus to change DNA.'},
  {t:'A great immune system replaces vaccines', correct:false, why:'A different misconception on slide 30; (T) an immune system cannot fight a pathogen it has not been exposed to.'}],
 teach:'(T) Respond with information centered on the patient’s belief, as in the Ask-Tell-Ask method.',
 cite:'Immunizations-Pre-Lab.pdf slide 30; 9/21 transcript (T)'}
);

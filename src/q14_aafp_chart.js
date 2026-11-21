/* ==========================================================================
   AAFP schedule chart cases (Dr. Parsons, Week 6 immunizations). Each item shows the
   page of the AAFP 2026 schedule the learner needs (Table 1, Table 2 or the
   Appendix) and asks the learner to read the cell color or the column, with the
   legend printed under each table. Every key was read from the colored page
   render of AAFP-Adult-Schedule-2026.pdf (pages 2, 3, 9 and 10), not from
   extracted text. Table 1 legend: yellow = recommended for adults who meet the
   age requirement and lack documentation or evidence of past infection; light
   blue = recommended with an additional risk factor or another indication;
   green = shared clinical decision-making; gray = no recommendation. Table 2
   legend: yellow = recommended for all adults lacking documentation; light
   green = not recommended for all but for some adults, based on age or risk;
   teal = shared clinical decision-making; orange = recommended for all adults
   and additional doses may be necessary; navy = precaution; red =
   contraindicated or not recommended; gray = no guidance.
   ========================================================================== */
TOPICS.push({id:'aafpcase', name:'AAFP schedule: use the chart', prof:'Dr. Parsons', open:true, cite:'AAFP-Adult-Schedule-2026.pdf Tables 1 and 2 and Appendix', subs:[
  {id:'t1', name:'Table 1: by age', cite:'AAFP-Adult-Schedule-2026.pdf Table 1 (page 2)'},
  {id:'t2', name:'Table 2: by condition', cite:'AAFP-Adult-Schedule-2026.pdf Table 2 (page 3)'},
  {id:'app', name:'Appendix: contraindications and precautions', cite:'AAFP-Adult-Schedule-2026.pdf Appendix (pages 9–10)'}]});

QUESTIONS.push(
/* ---- Table 2: by condition ------------------------------------------- */
{id:'ac01', skill:'apply', prof:'Dr. Parsons', multi:true, tier:'new', topic:'aafpcase', sub:'t2', concept:'chart-pregnancy-red', img:'aafp_t2',
 tags:['AAFP','Table 2','pregnancy','contraindication'], source:'slide',
 stem:'A woman at 20 weeks of gestation asks which vaccines she should avoid. Use the Pregnancy column of Table 2 shown above. Which vaccines are in the red category (contraindicated or not recommended) for her? Select all that apply.',
 options:[
  {t:'Live attenuated influenza vaccine (LAIV3)', correct:true, why:'The LAIV3 row is red in the Pregnancy column, and the Appendix lists pregnancy as a contraindication to LAIV3. Inactivated and recombinant influenza vaccines are yellow in the same column, so only the live nasal product is avoided.'},
  {t:'Measles, mumps and rubella (MMR)', correct:true, why:'The MMR cell is red with an asterisk, meaning contraindicated or not recommended, and the legend says to vaccinate after pregnancy if indicated. The Appendix also lists pregnancy under the MMR contraindications.'},
  {t:'Varicella (VAR)', correct:true, why:'The varicella cell is red with an asterisk for pregnancy, and the Appendix lists pregnancy as a contraindication to varicella vaccine. If she lacks immunity, the vaccine is given after the pregnancy.'},
  {t:'Human papillomavirus (HPV)', correct:true, why:'The HPV cell is red with an asterisk in the Pregnancy column, and the Appendix says HPV vaccination is not recommended in pregnancy. The series is completed after delivery if it is still indicated.'},
  {t:'Inactivated poliovirus (IPV) series completion', correct:false, why:'The IPV cell for pregnancy is navy, which the legend defines as a precaution: the dose might be indicated if the benefit outweighs the risk. Navy and red are different categories, so IPV is not contraindicated.'},
  {t:'Tdap in the third trimester', correct:false, why:'The Tdap cell for pregnancy is orange: recommended for all adults, with one dose of Tdap each pregnancy. It is a recommended vaccine in pregnancy, so it does not belong in the red category.'},
  {t:'Meningococcal B (MenB) for a patient with risk', correct:false, why:'The MenB cell for pregnancy is navy, a precaution, and the Appendix lists pregnancy as a MenB precaution. A precaution means generally defer unless the benefit outweighs the risk, which is not a contraindication.'}],
 teach:'Read the Pregnancy column of Table 2 by color: red cells (LAIV3, MMR, VAR and HPV) are contraindicated or not recommended, navy cells (IPV and MenB) are precautions, and the orange Tdap cell is recommended with each pregnancy. The two dark colors are easy to confuse, so check the legend under the table.',
 cite:'AAFP-Adult-Schedule-2026.pdf Table 2 (page 3), Appendix (pages 9–10)'},

{id:'ac02', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'aafpcase', sub:'t2', concept:'chart-pregnancy-navy', img:'aafp_t2',
 tags:['AAFP','Table 2','pregnancy','precaution'], source:'slide',
 stem:'A pregnant 28-year-old has an incomplete poliovirus vaccine series. In Table 2 above, the IPV cell in the Pregnancy column is navy. Which statement matches that color?',
 options:[
  {t:'A precaution: give only if the benefit outweighs the risk', correct:true, why:'The legend defines navy as a precaution: might be indicated if the benefit of protection outweighs the risk of an adverse reaction. The Appendix lists pregnancy under IPV precautions, so vaccination is generally deferred unless the benefit is greater.'},
  {t:'A contraindication: the vaccine must never be given in pregnancy', correct:false, why:'Contraindications are red in Table 2, and the legend says a vaccine should not be given. The IPV pregnancy cell is navy, and the Appendix places pregnancy in the precautions column for IPV, not the contraindications column.'},
  {t:'A routine recommendation for every pregnant adult, like Tdap', correct:false, why:'Routine recommendations for all adults are yellow, and orange marks recommended vaccines with possible extra doses. IPV completion in pregnancy is navy, so it is not a routine recommendation for every pregnant patient.'},
  {t:'No guidance: the schedule gives no direction on IPV in pregnancy', correct:false, why:'Gray means no guidance or not applicable, and the IPV pregnancy cell is not gray. It is navy, and the Appendix also addresses pregnancy for IPV, so the schedule does give guidance.'}],
 teach:'Navy means precaution. For a precaution the vaccine is generally deferred but may be given when the benefit of protection outweighs the risk, whereas red means do not give. For IPV and MenB in pregnancy the cells are navy.',
 cite:'AAFP-Adult-Schedule-2026.pdf Table 2 (page 3) legend; Appendix (page 10)'},

{id:'ac03', skill:'apply', prof:'Dr. Parsons', multi:true, tier:'new', topic:'aafpcase', sub:'t2', concept:'chart-hiv-low-cd4', img:'aafp_t2',
 tags:['AAFP','Table 2','HIV','CD4'], source:'slide',
 stem:'A 36-year-old with HIV has a CD4 percentage of 11% and a CD4 count of 150/mm³. Use the HIV columns of Table 2 shown above. Which vaccines are in the red category for this patient? Select all that apply.',
 options:[
  {t:'Measles, mumps and rubella (MMR)', correct:true, why:'The MMR cell is red in the HIV column for CD4 under 15% or under 200/mm³. Severe immunocompromise from HIV is also listed as an MMR contraindication in the Appendix.'},
  {t:'Varicella (VAR)', correct:true, why:'The varicella cell is red in the same HIV column, and the Appendix lists severe immunodeficiency, including HIV infection with severe immunocompromise, as a contraindication. The next column, CD4 15% and 200/mm³ or more, changes to yellow.'},
  {t:'Live attenuated influenza vaccine (LAIV3)', correct:true, why:'LAIV3 is red across both HIV columns, and the Appendix lists immunocompromise from any cause, including HIV infection, as a contraindication. Inactivated influenza vaccine is the yellow, recommended option.'},
  {t:'Meningococcal ACWY (MenACWY)', correct:false, why:'The MenACWY cell in both HIV columns is orange, meaning recommended for all adults with additional doses possible for the condition. It is a recommended vaccine for HIV, so it is not red.'},
  {t:'Hepatitis B (HepB)', correct:false, why:'The HepB cell in the HIV columns is yellow: recommended for adults who lack documentation of vaccination. Immune status changes the response to some vaccines but does not make HepB contraindicated.'},
  {t:'Inactivated influenza vaccine', correct:false, why:'The influenza row for HIV is yellow, one dose annually. Only the live attenuated product, LAIV3, is red, so a patient with a low CD4 count should receive the inactivated or recombinant vaccine.'}],
 teach:'Table 2 splits HIV into two columns by CD4 percentage and count. In the lower column (under 15% or under 200/mm³) the live vaccines MMR, varicella and LAIV3 are red; the inactivated vaccines stay yellow or orange.',
 cite:'AAFP-Adult-Schedule-2026.pdf Table 2 (page 3); Appendix (pages 9–10)'},

{id:'ac04', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'aafpcase', sub:'t2', concept:'chart-hiv-high-cd4', img:'aafp_t2',
 tags:['AAFP','Table 2','HIV','CD4','MMR'], source:'slide',
 stem:'The patient with HIV starts treatment, and 18 months later the CD4 percentage is 24% and the count is 420/mm³. He has no documentation of measles immunity. In Table 2 above, how is MMR marked for his current HIV column?',
 options:[
  {t:'Yellow: recommended when there is no documentation', correct:true, why:'In the HIV column for CD4 15% and 200/mm³ or more, the MMR cell is yellow. The legend says yellow is recommended for all adults who lack documentation of vaccination or evidence of past infection.'},
  {t:'Red: contraindicated for every patient who has HIV', correct:false, why:'MMR is red only in the lower HIV column, CD4 under 15% or under 200/mm³, and in pregnancy and other immunocompromising conditions. At 24% and 420/mm³ he is in the higher column, where it turns yellow.'},
  {t:'Navy: a precaution because of his earlier low CD4 count', correct:false, why:'The MMR row has no navy cell in either HIV column. Navy means precaution and appears for other vaccines such as LAIV3 in chronic disease; the legend ties the category to the column the patient is in now.'},
  {t:'Teal: a shared clinical decision with his prescriber', correct:false, why:'Teal means recommended based on shared clinical decision-making, and the MMR cell for the higher HIV column is not teal. It is yellow, a standard recommendation for adults without documented immunity.'}],
 teach:'The two HIV columns in Table 2 are separated by CD4 percentage and count. MMR and varicella are red in the lower column and yellow in the higher one (varicella adds See Notes), so always place the patient in the right column first.',
 cite:'AAFP-Adult-Schedule-2026.pdf Table 2 (page 3)'},

{id:'ac05', skill:'apply', prof:'Dr. Parsons', multi:true, tier:'new', topic:'aafpcase', sub:'t2', concept:'chart-asplenia', img:'aafp_t2',
 tags:['AAFP','Table 2','asplenia'], source:'slide',
 stem:'A 45-year-old has anatomic asplenia. In the asplenia column of Table 2 shown above, which vaccines carry a cell that is specific to asplenia (an orange cell, or the Hib cell that reads Asplenia: 1 dose)? Select all that apply.',
 options:[
  {t:'Meningococcal ACWY (MenACWY)', correct:true, why:'The MenACWY cell in the asplenia and complement deficiency column is orange: recommended for all adults, with additional doses possible because of the condition. The Notes give the series and booster details.'},
  {t:'Meningococcal B (MenB)', correct:true, why:'The MenB cell in the asplenia column is orange. Most other condition columns of the MenB row are gray, which means no guidance for those conditions.'},
  {t:'Haemophilus influenzae type b (Hib)', correct:true, why:'The Hib cell in the asplenia column is yellow and reads Asplenia: 1 dose. Hib is gray in most other columns, so asplenia is one of the few conditions for which it is recommended.'},
  {t:'Live attenuated influenza vaccine (LAIV3)', correct:false, why:'The LAIV3 cell in the asplenia column is red: contraindicated or not recommended. The Appendix lists anatomic or functional asplenia as a contraindication to LAIV3.'},
  {t:'Hepatitis A (HepA)', correct:false, why:'The HepA cell in the asplenia column is gray, which means no guidance or not applicable. Hepatitis A is yellow for HIV, men who have sex with men and chronic liver disease, but not for asplenia.'},
  {t:'Human papillomavirus (HPV)', correct:false, why:'The HPV cell in the asplenia column is light green: not recommended for all adults but recommended for some, based on age or risk. It is not an asplenia-specific cell, and Table 1 gives the age rules for HPV.'}],
 teach:'In the asplenia column of Table 2, MenACWY and MenB are orange, Hib is the yellow Asplenia: 1 dose cell, and LAIV3 is red. Gray cells such as HepA mean the schedule gives no guidance for that condition.',
 cite:'AAFP-Adult-Schedule-2026.pdf Table 2 (page 3); Appendix (page 9)'},

{id:'ac06', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'aafpcase', sub:'t2', concept:'chart-light-green-legend', img:'aafp_t2',
 tags:['AAFP','Table 2','legend'], source:'slide',
 stem:'Many cells in Table 2 above are light green, for example the HPV row and the RZV row in several conditions. What does light green mean in Table 2?',
 options:[
  {t:'Recommended for some adults, based on age or increased risk', correct:true, why:'This is the Table 2 legend for light green. It differs from Table 1, where green means shared clinical decision-making, so the same word does not carry the same meaning in the two tables.'},
  {t:'Recommended based on shared clinical decision-making with the patient', correct:false, why:'In Table 2 shared clinical decision-making is teal (blue-green), for example the RSV cells. Table 1 uses green for shared decision-making, which is the reason the two legends must be read separately.'},
  {t:'Contraindicated or not recommended for that condition in every patient', correct:false, why:'Red is the contraindicated or not recommended category in Table 2, with an asterisk to vaccinate after pregnancy if indicated. Light green is a recommendation for some adults, not a prohibition.'},
  {t:'A precaution: give only if the benefit clearly outweighs the risk', correct:false, why:'Navy marks precautions in Table 2, such as LAIV3 for chronic heart or lung disease. Light green is a recommendation for some adults, so it does not mean to defer unless the benefit is greater.'}],
 teach:'Colors are not shared between the tables. Table 1: yellow, light blue, green (shared decision-making), gray. Table 2: yellow, light green (some adults based on age or risk), teal (shared decision-making), orange, navy (precaution), red and gray. Read the legend under each table before using a color.',
 cite:'AAFP-Adult-Schedule-2026.pdf Tables 1 and 2 legends (pages 2–3); Immunizations-Pre-Lab.pdf slide 11'},

/* ---- Table 1: by age -------------------------------------------------- */
{id:'ac07', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'aafpcase', sub:'t1', concept:'chart-rsv-age', img:'aafp_t1',
 tags:['AAFP','Table 1','RSV','age'], source:'slide',
 stem:'Four adults with no chronic conditions and no pregnancy ask about RSV vaccine. Using the RSV row of Table 1 shown above, for which patient is the vaccine recommended by age alone (a yellow cell)?',
 options:[
  {t:'A 78-year-old', correct:true, why:'The RSV row has a yellow cell for adults older than 75 years, which the legend defines as recommended for adults who meet the age requirement. A 78-year-old meets it with no additional risk factor.'},
  {t:'A 70-year-old', correct:false, why:'The cell for 50 through 74 years is light blue, meaning recommended for adults with an additional risk factor or another indication. A healthy 70-year-old has none, so age alone does not qualify.'},
  {t:'A 52-year-old', correct:false, why:'A 52-year-old falls in the 50 through 74 years cell, which is light blue and needs an additional risk factor or another indication. The Notes list the qualifying conditions.'},
  {t:'A 34-year-old', correct:false, why:'The cell for 19 through 49 years is light blue and reads seasonal administration during pregnancy, so it applies only with pregnancy or another indication. A healthy 34-year-old does not qualify.'}],
 teach:'In Table 1 the RSV row is yellow only for adults older than 75 years. For 50 through 74 years the cell is light blue, so the patient needs an additional risk factor or another indication from the Notes.',
 cite:'AAFP-Adult-Schedule-2026.pdf Table 1 (page 2)'},

{id:'ac08', skill:'apply', prof:'Dr. Parsons', multi:true, tier:'new', topic:'aafpcase', sub:'t1', concept:'chart-rzv-age', img:'aafp_t1',
 tags:['AAFP','Table 1','RZV','age'], source:'slide',
 stem:'Several adults ask about the recombinant zoster vaccine (RZV). Using the RZV row of Table 1 shown above, which patients meet the schedule’s recommendation? Select all that apply.',
 options:[
  {t:'A healthy 54-year-old', correct:true, why:'The RZV row is yellow from 50 years and older, 2 doses. A healthy 54-year-old meets the age requirement with no further indication.'},
  {t:'A healthy 70-year-old', correct:true, why:'The yellow 2-dose cell covers every adult 50 years and older, including the 65-and-older column.'},
  {t:'A 33-year-old with an immunocompromising condition', correct:true, why:'For 19 through 49 years the cell is light blue and reads 2 doses for immunocompromising conditions. A patient with such a condition has the additional indication, so RZV is recommended.'},
  {t:'A healthy 33-year-old', correct:false, why:'The 19 through 49 years cell applies only to immunocompromising conditions. A healthy 33-year-old has no indication, so RZV is not recommended at that age.'},
  {t:'A healthy 41-year-old', correct:false, why:'The 19 through 49 years cell applies only to immunocompromising conditions, not to everyone in the age band. A healthy 41-year-old does not qualify under Table 1.'}],
 teach:'RZV in Table 1: light blue for 19 through 49 years (immunocompromising conditions only) and yellow for 50 years and older. The same light blue legend (additional risk factor) is used for hepatitis A and for MenACWY.',
 cite:'AAFP-Adult-Schedule-2026.pdf Table 1 (page 2)'},

{id:'ac09', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'aafpcase', sub:'t1', concept:'chart-hpv-sdm', img:'aafp_t1',
 tags:['AAFP','Table 1','HPV','shared decision-making'], source:'slide',
 stem:'A 38-year-old with no prior HPV vaccination asks whether to start the series. In the HPV row of Table 1 shown above, her age is covered by a green cell. What does the green cell mean?',
 options:[
  {t:'Recommended based on shared clinical decision-making', correct:true, why:'The Table 1 legend defines green this way, and the cell is labeled 27 through 45 years. The pharmacist and the patient weigh the benefit, such as likely future exposure, before deciding.'},
  {t:'Recommended for all adults who lack documentation of vaccination', correct:false, why:'That is the yellow category, which in the HPV row covers 19 through 26 years. The 27 through 45 years cell is green instead.'},
  {t:'Recommended only for adults with an additional risk factor', correct:false, why:'That is the light blue category, which the HPV row does not use for adults. The green cell is the one with shared clinical decision-making, and the row is gray for the 50-and-older columns.'},
  {t:'No recommendation or not applicable', correct:false, why:'Gray cells mean no recommendation, and in the HPV row gray begins at 50 years of age. At 38 years she is inside the green 27 through 45 years cell.'}],
 teach:'HPV in Table 1: yellow for 19 through 26 years, green (shared clinical decision-making) for 27 through 45 years, then gray. MenB works the same way at 19 through 23 years: green for the age band, light blue for adults with risk.',
 cite:'AAFP-Adult-Schedule-2026.pdf Table 1 (page 2)'},

/* ---- Appendix: contraindications and precautions --------------------- */
{id:'ac10', skill:'tell', prof:'Dr. Parsons', multi:true, tier:'new', topic:'aafpcase', sub:'app', concept:'chart-mmr-contra', img:'aafp_app2',
 tags:['AAFP','Appendix','MMR','contraindication','precaution'], source:'slide',
 stem:'Using the measles, mumps and rubella (MMR) row of the Appendix shown above, which findings are contraindications (the left column), not precautions? Select all that apply.',
 options:[
  {t:'Pregnancy', correct:true, why:'Pregnancy is in the Contraindicated or Not Recommended column for MMR, so the vaccine is not given. It matches the red MMR cell in the Pregnancy column of Table 2.'},
  {t:'Receipt of chemotherapy for a tumor', correct:true, why:'Severe immunodeficiency, including receipt of chemotherapy and hematologic or solid tumors, is a contraindication for MMR. The vaccine contains live virus, which is the reason immunosuppression matters.'},
  {t:'A family history of altered immunocompetence that has not been verified as normal', correct:true, why:'The Appendix contraindication reads family history of altered immunocompetence, unless verified clinically or by laboratory testing as immunocompetent. Verification removes the contraindication.'},
  {t:'Receipt of an antibody-containing blood product 8 months ago', correct:false, why:'Recent receipt of an antibody-containing blood product (within 11 months or less, depending on the product) is in the Precautions column. A precaution means defer unless the benefit outweighs the risk.'},
  {t:'A history of thrombocytopenia or thrombocytopenic purpura', correct:false, why:'This is a precaution in the right-hand column for MMR. A precaution is weighed against the benefit, whereas a contraindication means the vaccine should not be given.'},
  {t:'A need for tuberculin skin testing or an interferon-gamma release assay', correct:false, why:'Needing a TB skin test or IGRA is another MMR precaution, because the vaccine can temporarily affect the result. It is in the precautions column, not the contraindications column.'}],
 teach:'For MMR the contraindications are anaphylaxis to a component, severe immunodeficiency, pregnancy and an unverified family history of altered immunocompetence. The precautions are a recent antibody-containing blood product, thrombocytopenia, a pending TB test and moderate or severe acute illness.',
 cite:'AAFP-Adult-Schedule-2026.pdf Appendix (page 10)'},

{id:'ac11', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'aafpcase', sub:'app', concept:'chart-var-aspirin', img:'aafp_app2',
 tags:['AAFP','Appendix','varicella','precaution'], source:'slide',
 stem:'A 30-year-old who takes aspirin daily has no evidence of varicella immunity and is not pregnant. Using the varicella (VAR) row of the Appendix above, how is the aspirin classified?',
 options:[
  {t:'A precaution: defer unless the benefit outweighs the risk', correct:true, why:'The Appendix places use of aspirin or aspirin-containing products in the Precautions column for varicella vaccine. Precautions are generally deferred but the vaccine may be given when the benefit is greater than the risk.'},
  {t:'A contraindication: the vaccine must not be given at all', correct:false, why:'The varicella contraindications are anaphylaxis, severe immunodeficiency, pregnancy and an unverified family history of altered immunocompetence. Aspirin is in the right-hand precautions column instead.'},
  {t:'Not addressed: aspirin has no bearing on varicella vaccination', correct:false, why:'The Appendix does address it: use of aspirin is a listed varicella precaution, along with antiviral drugs and recent antibody-containing blood products. It is not ignored by the schedule.'},
  {t:'A contraindication only if the patient is also younger than 19', correct:false, why:'The Appendix gives no age condition for aspirin. It is a precaution for adults; the schedule simply lists aspirin-containing products with the other varicella precautions.'}],
 teach:'Varicella precautions (Appendix): a recent antibody-containing blood product, antiviral drugs (acyclovir, famciclovir or valacyclovir) 24 hours before vaccination, use of aspirin or aspirin-containing products, and moderate or severe acute illness. Contraindications are a separate left-hand column.',
 cite:'AAFP-Adult-Schedule-2026.pdf Appendix (page 10)'},

{id:'ac12', skill:'tell', prof:'Dr. Parsons', multi:true, tier:'new', topic:'aafpcase', sub:'app', concept:'chart-covid-precaution', img:'aafp_app1',
 tags:['AAFP','Appendix','COVID-19','precaution'], source:'slide',
 stem:'Using the mRNA COVID-19 vaccine row of the Appendix shown above, which findings are precautions (the right-hand column) rather than contraindications? Select all that apply.',
 options:[
  {t:'Myocarditis or pericarditis within 3 weeks after a dose of any COVID-19 vaccine', correct:true, why:'This is in the Precautions column for the mRNA vaccines. It means generally defer, but vaccinate if the benefit of protection outweighs the risk.'},
  {t:'A diagnosed non-severe allergy such as urticaria beyond the injection site to a component', correct:true, why:'A diagnosed non-severe allergy to a component is a precaution, as is a non-severe, immediate allergic reaction within 4 hours of a previous dose. Only a severe reaction such as anaphylaxis is a contraindication.'},
  {t:'Moderate or severe acute illness with or without fever', correct:true, why:'Acute illness is a precaution for every vaccine in the Appendix. The vaccine can be given after the illness resolves, so it is not a permanent bar.'},
  {t:'Anaphylaxis after a previous dose of an mRNA COVID-19 vaccine', correct:false, why:'A severe allergic reaction such as anaphylaxis after a previous dose is the contraindication in the left-hand column. The vaccine should not be given.'},
  {t:'Anaphylaxis to a component of an mRNA COVID-19 vaccine', correct:false, why:'A severe allergic reaction to a component is also a contraindication, and the Appendix footnote notes that mRNA COVID-19 vaccines contain polyethylene glycol (PEG). It is not a precaution.'}],
 teach:'For mRNA COVID-19 vaccines the contraindication is a severe allergic reaction (for example anaphylaxis) to a previous dose or a component. Precautions are non-severe allergy, myocarditis or pericarditis within 3 weeks of a dose, MIS-C or MIS-A, and moderate or severe acute illness.',
 cite:'AAFP-Adult-Schedule-2026.pdf Appendix (page 9)'},

{id:'ac13', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'aafpcase', sub:'app', concept:'chart-egg-iiv3', img:'aafp_app1',
 tags:['AAFP','Appendix','influenza','egg allergy'], source:'slide',
 stem:'A patient reports an allergic reaction to eggs and asks to receive the egg-based inactivated influenza vaccine (IIV3). Using the IIV3 row of the Appendix shown above, what does the contraindication column say about an egg allergy?',
 options:[
  {t:'Egg is excluded: only a severe reaction to another component counts', correct:true, why:'The IIV3 contraindication reads severe allergic reaction (for example anaphylaxis) to any vaccine component, excluding egg. An egg allergy alone is not a listed contraindication for this vaccine.'},
  {t:'Any egg allergy is a contraindication to every influenza vaccine product', correct:false, why:'The Appendix says the opposite for IIV3: egg is excluded from the component contraindication. The influenza vaccines are also listed in separate rows with their own contraindications.'},
  {t:'Egg allergy is a precaution that requires a 6-week wait first', correct:false, why:'The IIV3 precautions are Guillain-Barré syndrome within 6 weeks of a previous influenza vaccine and moderate or severe acute illness. Egg allergy is not one of them.'},
  {t:'Egg allergy is a contraindication only for the live attenuated vaccine', correct:false, why:'The LAIV3 row also excludes egg when it lists severe allergy to a vaccine component. The row has other contraindications, such as pregnancy, but egg allergy is not among them.'}],
 teach:'The influenza vaccine rows list anaphylaxis to a previous influenza vaccine or to a component as contraindications, with egg explicitly excluded for egg-based IIV3 and LAIV3. Guillain-Barré syndrome within 6 weeks and acute illness are the precautions.',
 cite:'AAFP-Adult-Schedule-2026.pdf Appendix (page 9)'},

{id:'ac14', skill:'tell', prof:'Dr. Parsons', multi:true, tier:'new', topic:'aafpcase', sub:'app', concept:'chart-laiv3-contra', img:'aafp_app1',
 tags:['AAFP','Appendix','LAIV3','contraindication','precaution'], source:'slide',
 stem:'Using the live attenuated influenza vaccine (LAIV3) row of the Appendix shown above, which findings are contraindications (the left-hand column)? Select all that apply.',
 options:[
  {t:'A cochlear implant', correct:true, why:'Cochlear implant is in the Contraindicated column for LAIV3, along with active cerebrospinal fluid leaks between the CSF and the oropharynx, nasopharynx, nose or ear.'},
  {t:'Being a close contact of a severely immunosuppressed person who needs a protected environment', correct:true, why:'This is a contraindication for LAIV3 because the vaccine virus is live. A close contact of an immunocompromised person who does not need a protected environment is not listed.'},
  {t:'Pregnancy', correct:true, why:'Pregnancy is a contraindication for LAIV3 and the LAIV3 cell in the Pregnancy column of Table 2 is red. Inactivated influenza vaccine is recommended in pregnancy instead.'},
  {t:'Asthma in a person aged 5 years or older', correct:false, why:'Asthma in persons aged 5 years or older is in the Precautions column, not the Contraindications column. It is weighed against the benefit before giving the vaccine.'},
  {t:'Chronic pulmonary or cardiovascular disease', correct:false, why:'Underlying medical conditions that might predispose to influenza complications, such as chronic pulmonary or cardiovascular disease, are precautions. These cells are navy in Table 2 for heart or lung disease.'},
  {t:'Guillain-Barré syndrome within 6 weeks after a previous influenza vaccine', correct:false, why:'Guillain-Barré syndrome within 6 weeks of a previous dose of any influenza vaccine is listed as a precaution. A precaution allows vaccination if the benefit outweighs the risk.'}],
 teach:'LAIV3 contraindications include pregnancy, immunocompromise, asplenia, cochlear implant, CSF leaks, close contact with severely immunosuppressed people who need a protected environment, recent influenza antivirals and anaphylaxis. Asthma at age 5 or older, Guillain-Barré syndrome, chronic conditions and acute illness are precautions.',
 cite:'AAFP-Adult-Schedule-2026.pdf Appendix (page 9); Table 2 (page 3)'}
);

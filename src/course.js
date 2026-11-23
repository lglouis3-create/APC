/* ==========================================================================
   COURSE MANIFEST: PHAR 4232 APC III, Outpatient Written Exam drill.
   The engine reads COURSE and nothing else about the course; every field is
   described in the kit's template/course.js and core/README.md.
   Sources of the exam facts (the exam blueprint): Week 14 deck "DEENT
   Activities" (Dr. Lahoud, 11/16/2026), slide "Outpatient Written Exam":
   Monday November 23 at 1 PM, P2 Classroom, 50 minutes, 30 questions (15 from
   Dr. Parsons, 15 from Dr. Lahoud), lecture and lab material from the
   non-sterile-product weeks. The number of select-all items was not announced.
   ========================================================================== */
const COURSE = {
  id: 'apc3-outpatient',
  title: 'PHAR 4232 APC III: Outpatient Written Exam',
  short: 'APC III Outpatient',
  ns: 'apc3-outpatient-drill',
  output: 'APC3_Outpatient_Drill.html',
  atlas: false,
  professors: ['Dr. Lahoud', 'Dr. Parsons'],

  lectures: [
    {id:'L02',  deck:'Intro-to-Dispensing.pdf',           label:'Week 2: Intro to Dispensing (8/24)',                 prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: dispensing and errors'},
    {id:'L04',  deck:'APC_III_Week_4_Slides.pdf',        label:'Week 4: Day in the life of a community pharmacist (9/7)', prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: dispensing and errors'},
  {id:'L02K', deck:'EOOR-Answer-Key.pdf',               label:'Week 2 lab: errors and omissions answer key',        prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: dispensing and errors'},
    {id:'L08T', deck:'TOSCE-Study-Guide.pdf',             label:'Week 8: TOSCE study guide',                          prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: dispensing and errors'},
    {id:'L06D', deck:'Patel_Acne-Therapeutics-Student.pdf',                 label:'DEENT lab source: Dr. Patel, acne therapeutics (11/10)',                 prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: DEENT lab'},
    {id:'L07D', deck:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf',     label:'DEENT lab source: Dr. Patel, scaly dermatoses (11/10-11/11)',            prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: DEENT lab'},
    {id:'L13D', deck:'Lam_OphthalmicDisorders.pdf',                         label:'DEENT lab source: Dr. Lam, ophthalmic disorders (11/20)',                prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: DEENT lab'},
    {id:'L12D', deck:'Lam_Glaucoma.pdf',                                    label:'DEENT lab source: Dr. Lam, glaucoma therapeutics (11/19)',               prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: DEENT lab'},
    {id:'L09D', deck:'Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf',          label:'DEENT lab source: Dr. Smith, eye lectures (11/13, 11/17)',               prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: DEENT lab'},
    {id:'L14K', deck:'Ophthalmic-Review-Key.pdf',                          label:'Week 14 lab: Ophthalmic Review (Which is which) answer key',            prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: DEENT lab'},
    {id:'L14',  deck:'DEENT-Lab-Deck.pdf',                label:'Week 14: DEENT activities (11/16)',                  prof:'Dr. Lahoud',  exam:1, module:'Dr. Lahoud: DEENT lab'},
    {id:'L03',  deck:'OTC-Insect-Bites-Pediculosis.pdf',  label:'Week 3: OTC, insect bites and pediculosis (8/31)',   prof:'Dr. Parsons', exam:1, module:'Dr. Parsons: OTC'},
    {id:'L03A', deck:'APhA-Insect-Excerpt.pdf',           label:'Week 3: APhA OTC excerpt on insect bites',           prof:'Dr. Parsons', exam:1, module:'Dr. Parsons: OTC'},
    {id:'L05',  deck:'POCT-Physical-Assessment.pdf',      label:'Week 5: POCT and physical assessment (9/14)',        prof:'Dr. Parsons', exam:1, module:'Dr. Parsons: POCT'},
    {id:'L06',  deck:'Immunizations-Pre-Lab.pdf',         label:'Week 6: Immunizations (9/21)',                       prof:'Dr. Parsons', exam:1, module:'Dr. Parsons: immunizations'},
    {id:'L06A', deck:'AAFP-Adult-Schedule-2026.pdf',      label:'Week 6: AAFP adult immunization schedule 2026',      prof:'Dr. Parsons', exam:1, module:'Dr. Parsons: immunizations'},
  ],

  exams: [
    {id:'exam1', name:'Outpatient Written Exam', date:'Mon Nov 23, 1:00 PM', when:'2026-11-23T13:00',
     questions:30, minutes:50, sata:0,
     blurb:'30 questions in 50 minutes: 15 from Dr. Parsons, 15 from Dr. Lahoud, from the non-sterile-product weeks.',
     pools:[
       {key:'parsons', name:'Dr. Parsons (OTC, POCT, immunizations)', marks:15, filter:{prof:'Dr. Parsons'}},
       {key:'lahoud',  name:'Dr. Lahoud (dispensing, errors, DEENT lab)', marks:15, filter:{prof:'Dr. Lahoud'}},
     ]},
  ],
  activeExam: 'exam1',

  skills: [
    {id:'recall', label:'Recall the fact',                short:'Recall'},
    {id:'tell',   label:'Tell apart',                     short:'Tell apart'},
    {id:'apply',  label:'Apply to a case',                short:'Apply'},
    {id:'error',  label:'Find the error and the fix',     short:'Error'},
  ],

  paceDefault: 'cram',

  scheduler: {model:'concept'},

  files: ['atlas.js', 'diagrams.js',
          'q1_topics.js', 'q2_eoor.js', 'q3_otc.js', 'q4_poct.js', 'q5_immunizations.js', 'q6_deent.js',
          'q7_deent_acne.js', 'q8_deent_scaly.js', 'q9_deent_eye.js', 'q10_deent_glaucoma.js', 'q11_deent_board.js', 'q12_star_lahoud.js', 'q13_star_parsons.js', 'q14_aafp_chart.js', 'q15_sbar.js', 'q16_deent_apply.js', 'q17_week4.js', 'q99_order.js'],

  tools: {citeAliases:{'apc_iii_week_4_slides.pdf': null, 'aafp-adult-schedule-2026.pdf': null, 'apha-insect-excerpt.pdf': null, 'deent-lab-deck.pdf': null, 'ophthalmic-review-key.pdf': null,
                       'patel_acne-therapeutics-student.pdf': null, 'patel_scaly-dermatoses-therapeutics-student.pdf': null,
                       'lam_ophthalmicdisorders.pdf': null, 'lam_glaucoma.pdf': null, 'smith_eye_glaucoma_allergicconj_dryeye.pdf': null},
          citeLectures:{}, citeBareMap:{},
          explainTerms:[], harvestMasks:[]},

  kit: {core: '64302e2ff0831c225b8fcf576cc3ef60f03a001b'},
};

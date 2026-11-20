/* ==========================================================================
   Week 5: Dr. Parsons, physical assessment and point-of-care testing (POCT).
   Source: POCT-Physical-Assessment.pdf (the NASPA program slides with speaker
   notes, 67 pages). The 9/14 lecture has no transcript. Slide 40 says the
   oximetry calculation is not needed for exams and slide 58 says the Centor
   score is not needed, so neither is tested. TOSCE-Study-Guide.pdf adds that
   pulse may be measured over 15 or 30 seconds (same as slide 31).
   ========================================================================== */
QUESTIONS.push(
{id:'p01', skill:'recall', type:'match', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'pulse-ranges',
 tags:['pulse'], source:'slide',
 stem:'Match each term to its pulse range.',
 left:'Term', right:'Pulse range',
 pairs:[
  {l:'Normal pulse', r:'60–100 beats/min', why:'Slide 30 gives a normal pulse of 60–100 beats/min.'},
  {l:'Tachycardia', r:'Greater than 100 beats/min', why:'Slide 30 defines tachycardia as a pulse above 100 beats/min.'},
  {l:'Bradycardia', r:'Less than 60 beats/min', why:'Slide 30 defines bradycardia as a pulse below 60 beats/min.'}],
 teach:'Pulse is a measure of cardiac function, usually taken by palpating the radial artery.',
 cite:'POCT-Physical-Assessment.pdf slide 30'},

{id:'p02', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'pulse-technique',
 tags:['pulse'], source:'slide',
 stem:'Which technique is correct for taking a radial pulse?',
 options:[
  {t:'Use the pads of the fingers, not the thumb', correct:true, why:'Slide 31 says to use the pads of the fingers, which work better than the tips, and not the thumb.'},
  {t:'Use the tips of the fingers and the thumb', correct:false, why:'The pads work better than the tips, and the thumb is not used (slide 31).'},
  {t:'Press lightly so the artery is not compressed', correct:false, why:'Press hard enough to start to collapse the artery (slide 31).'},
  {t:'Use the ulnar side of the wrist', correct:false, why:'The radial pulse is on the radial (thumb) side of the wrist (slide 31).'}],
 teach:'Press over the artery until it begins to collapse, then adjust pressure if you cannot feel the pulse at first.',
 cite:'POCT-Physical-Assessment.pdf slide 31'},

{id:'p03', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'pulse-calculation',
 tags:['pulse'], source:'slide',
 stem:'A pulse is counted for 15 seconds and is 18 beats. What is the heart rate?',
 options:[
  {t:'72 beats/min', correct:true, why:'15 seconds multiplied by 4 gives a minute: 18 × 4 = 72 (slide 31); the TOSCE guide also allows a 15- or 30-second count.'},
  {t:'36 beats/min', correct:false, why:'Multiplies by 2, the factor for a 30-second count (slide 31).'},
  {t:'90 beats/min', correct:false, why:'Multiplies by 5, which is not the factor for a 15-second count (slide 31).'},
  {t:'18 beats/min', correct:false, why:'The 15-second count must be converted to a full minute (slide 31).'}],
 teach:'The minimum time is 15 seconds multiplied by 4, or 30 seconds multiplied by 2. Check: 18 × 4 = 72. If the result is close to the tachycardia or bradycardia cut-off, repeat for the full minute.',
 cite:'POCT-Physical-Assessment.pdf slide 31; TOSCE-Study-Guide.pdf slide 1'},

{id:'p04', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'respirations',
 tags:['respirations'], source:'slide',
 stem:'Which statement about measuring respirations is correct?',
 options:[
  {t:'Do not tell the patient; count at least 30 seconds', correct:true, why:'Slide 32 says do not tell the patient and the minimum time for inspection is 30 seconds.'},
  {t:'Tell the patient so they breathe at a normal pace', correct:false, why:'Slide 32 says do not tell the patient, so telling the patient is incorrect.'},
  {t:'Count for at least 10 seconds, then double it', correct:false, why:'Slide 32 gives a minimum of 30 seconds of inspection, not 10 seconds.'},
  {t:'Listen over the back with a stethoscope for a minute', correct:false, why:'Slide 32 says respirations are done by inspection, watching the rise and fall of the chest, not by listening.'}],
 teach:'Watch the rise and fall of the chest. Normal is 12–20 breaths/min; tachypnea is greater than 20 and bradypnea less than 12.',
 cite:'POCT-Physical-Assessment.pdf slide 32'},

{id:'p05', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'vital-signs',
 tags:['vitals'], source:'slide',
 stem:'Which of these is a vital sign rather than a vital statistic?',
 options:[
  {t:'Oxygen saturation', correct:true, why:'Slide 29 lists pulse, respirations, blood pressure, temperature and O2 saturation as vital signs.'},
  {t:'Weight', correct:false, why:'Slide 29 lists weight with the vital statistics, not the vital signs.'},
  {t:'Smoking status', correct:false, why:'Slide 29 lists smoking status with the vital statistics, not the vital signs.'},
  {t:'Perception of pain', correct:false, why:'Slide 29 lists perception of pain with the vital statistics, not the vital signs.'}],
 teach:'Vital statistics: age, height, weight, medication allergies, smoking status and perception of pain.',
 cite:'POCT-Physical-Assessment.pdf slide 29'},

{id:'p06', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'systematic-approach',
 tags:['physical assessment'], source:'slide',
 stem:'Feeling a patient’s radial pulse is which step of the systematic approach to physical assessment?',
 options:[
  {t:'Palpation', correct:true, why:'Slide 28 defines palpation as “what do I feel”, with pulse as the example.'},
  {t:'Inspection', correct:false, why:'Slide 28 defines inspection as what you see, such as coughing, not what you feel.'},
  {t:'Percussion', correct:false, why:'Slide 28 defines percussion as what you hear and feel; the pulse example is under palpation.'},
  {t:'Auscultation', correct:false, why:'Slide 28 defines auscultation as what you hear, such as a wheeze, not what you feel.'}],
 teach:'The approach: inspection, palpation, percussion, auscultation.',
 cite:'POCT-Physical-Assessment.pdf slide 28'},

{id:'p07', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'cuff-size',
 tags:['blood pressure'], source:'slide',
 stem:'A blood pressure cuff that is too small for the patient’s arm gives which effect on the reading?',
 options:[
  {t:'Overestimates the pressure', correct:true, why:'Slide 33 says a cuff that is too small overestimates the blood pressure.'},
  {t:'Underestimates the pressure', correct:false, why:'Slide 33 says a cuff that is too large or too loose underestimates the pressure.'},
  {t:'No effect if positioned at heart level', correct:false, why:'Slide 33 says an inappropriate cuff size affects the accuracy of the measurement.'},
  {t:'Reads the diastolic pressure only', correct:false, why:'Slide 33 describes only overestimating or underestimating effects of cuff size, not reading diastolic alone.'}],
 teach:'A cuff that is too large underestimates, and one that is too loose underestimates. Standard cuffs work for most adults.',
 cite:'POCT-Physical-Assessment.pdf slide 33'},

{id:'p08', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'bp-arm-position',
 tags:['blood pressure'], source:'slide',
 stem:'During a blood pressure measurement, how should the patient’s arm be positioned?',
 options:[
  {t:'At heart level, not supported by the patient', correct:true, why:'Slide 34: heart level, and the patient should not support their arm, since muscle tension can falsely elevate the reading.'},
  {t:'Held up by the patient at about shoulder height', correct:false, why:'The patient should not support the arm; muscle tension falsely elevates the reading (slide 34).'},
  {t:'Below heart level, hanging at the patient’s side', correct:false, why:'Slide 34 says the arm should be positioned at heart level, not below it.'},
  {t:'Raised above the head on a pillow', correct:false, why:'Slide 34 says the arm should be at heart level, not raised above the head.'}],
 teach:'The patient may sit, stand or lie down. The cuff may be placed over a shirt.',
 cite:'POCT-Physical-Assessment.pdf slides 34–35'},

{id:'p09', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'bp-prep',
 tags:['blood pressure'], source:'slide',
 stem:'Before a blood pressure measurement, the patient should avoid caffeine, smoking and exercise for at least how long?',
 options:[
  {t:'30 minutes', correct:true, why:'Slide 35 says the patient should avoid caffeine, smoking and exercise for at least 30 minutes.'},
  {t:'5 minutes', correct:false, why:'5 minutes is the wait before repeating a measurement (slide 37).'},
  {t:'60 minutes', correct:false, why:'Slide 35 gives at least 30 minutes of avoiding caffeine, smoking and exercise, not 60.'},
  {t:'2 hours', correct:false, why:'Slide 35 gives at least 30 minutes of avoiding caffeine, smoking and exercise, not 2 hours.'}],
 teach:'The patient sits comfortably with the arm at about heart level, palm up, feet flat on the floor, and relaxed.',
 cite:'POCT-Physical-Assessment.pdf slides 35, 37'},

{id:'p10', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'bp-technique',
 tags:['blood pressure'], source:'slide',
 stem:'In the auscultatory method, which sound marks the systolic and which the diastolic pressure?',
 options:[
  {t:'First tapping sound is systolic; last sound is diastolic', correct:true, why:'Slides 36–37: the first clear tapping sound is systolic and the last sound heard is diastolic.'},
  {t:'First tapping sound is diastolic; last sound is systolic', correct:false, why:'Slides 36–37 make the first tapping sound systolic and the last sound diastolic, so this reverses them.'},
  {t:'Both are read from the first tapping sound', correct:false, why:'Slide 37 says diastolic is the last sound heard, when the tapping sounds disappear.'},
  {t:'Both are read when the sounds begin to fade', correct:false, why:'Slide 36 says systolic is the first clear tapping sound, not when sounds fade.'}],
 teach:'Inflate rapidly to about 160–180 mmHg, deflate at about 2–3 mmHg per second, and place the stethoscope diaphragm over the brachial artery. If a repeat is warranted, wait 5 minutes.',
 cite:'POCT-Physical-Assessment.pdf slides 36–37'},

{id:'p11', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'bp-categories',
 tags:['blood pressure'], source:'slide',
 stem:'Which reading is in the hypertensive urgency range (180/110 mmHg or greater)?',
 options:[
  {t:'182/112 mmHg', correct:true, why:'Slide 38: hypertensive urgency is 180/110 mmHg or greater, and 182/112 meets both values.'},
  {t:'172/108 mmHg', correct:false, why:'Slide 38 puts 130/80 mmHg or greater in hypertension; 172/108 is below the 180/110 urgency cutoff.'},
  {t:'118/76 mmHg', correct:false, why:'Slide 38 lists normal as less than 120/80 mmHg, so 118/76 is not urgency.'},
  {t:'88/48 mmHg', correct:false, why:'Slide 38 lists hypotension as SBP below 90–100 or DBP below 50–60 mmHg, so 88/48 is not urgency.'}],
 teach:'From the ACC/AHA 2017 guidelines on slide 38: normal less than 120/80; hypertension 130/80 or greater; hypertensive urgency 180/110 or greater; hypotension systolic below 90–100 or diastolic below 50–60.',
 cite:'POCT-Physical-Assessment.pdf slide 38'},

{id:'p12', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'fever',
 tags:['temperature'], source:'slide',
 stem:'At or above which temperature is a fever defined?',
 options:[
  {t:'99.5 °F (37.5 °C)', correct:true, why:'Slide 39 defines fever as 99.5 °F (37.5 °C) or higher.'},
  {t:'98.6 °F (37.0 °C)', correct:false, why:'Slide 39 gives normal as 98.0–98.6 °F, below the fever cutoff.'},
  {t:'101.0 °F (38.3 °C)', correct:false, why:'Slide 39 sets fever at 99.5 °F (37.5 °C) or higher, not 101.0 °F.'},
  {t:'105.0 °F (40.5 °C)', correct:false, why:'Slide 39 lists above 105.0 °F as dangerous, not as the fever threshold.'}],
 teach:'Normal: 98.0–98.6 °F (36.7–37 °C). Fever: 99.5 °F (37.5 °C) or higher. Dangerous: above 105.0 °F (40.5 °C). Antipyretics, environment and warm or cold food or drink can affect the reading.',
 cite:'POCT-Physical-Assessment.pdf slide 39'},

{id:'p13', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'oximetry-ranges',
 tags:['pulse oximetry'], source:'slide',
 stem:'What pulse oximetry reading is normal, and under what value does a patient need medical attention?',
 options:[
  {t:'95% to 99% is normal; below 90% needs attention', correct:true, why:'Slide 40 says 95% to 99% is normal and below 90% needs medical attention.'},
  {t:'90% to 94% is normal; below 85% needs attention', correct:false, why:'Slide 40 gives 95% to 99% as normal and below 90% for attention, not 90%–94% and 85%.'},
  {t:'90% to 100% is normal; below 95% needs attention', correct:false, why:'Normal is 95% to 99%; attention is needed below 90% (slide 40).'},
  {t:'85% to 90% is normal; below 80% needs attention', correct:false, why:'Slide 40 gives 95% to 99% as normal and below 90% for attention, not 85%–90% and 80%.'}],
 teach:'The oximeter measures the oxygen saturation of arterial blood. The calculation of saturation is not needed for exams (slide 40).',
 cite:'POCT-Physical-Assessment.pdf slide 40'},

{id:'p14', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'oximetry-melanin',
 tags:['pulse oximetry'], source:'slide',
 stem:'A Black patient’s pulse oximeter reads normal, but the patient looks unwell. What does the pharmacist consider?',
 options:[
  {t:'Falsely high; use a lower threshold for the ER', correct:true, why:'Slide 41: oximeters can overestimate O2 saturation in Black patients; the ER can get an arterial blood gas.'},
  {t:'The reading is accurate in every skin tone', correct:false, why:'Melanin interferes with light transmission and absorption (slide 41).'},
  {t:'The reading is falsely low; repeat in 5 minutes', correct:false, why:'Slide 41 says oximeters give falsely high readings in Black patients, not falsely low ones.'},
  {t:'Skip the oximeter and measure temperature', correct:false, why:'Slide 41 advises a lower threshold for the ER, not a different vital sign.'}],
 teach:'Melanin absorbs more light and interferes with the oximeter. Falsely high readings can delay diagnosis and treatment.',
 cite:'POCT-Physical-Assessment.pdf slide 41'},

{id:'p15', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'vitals', concept:'oximetry-technique',
 tags:['pulse oximetry'], source:'slide',
 stem:'Which step belongs in preparing a patient for a pulse oximeter reading?',
 options:[
  {t:'Remove nail polish and warm cold hands', correct:true, why:'Slide 42: nails dry and clean; remove polish, acrylics or artificial tips; warm cold hands.'},
  {t:'Place the sensor on the thumb', correct:false, why:'Slide 42 places the oximeter on the fingertip of an index or middle finger, not the thumb.'},
  {t:'Take the reading as soon as a number appears', correct:false, why:'The patient should be still for at least a minute until the numbers are steady (slide 42).'},
  {t:'Leave acrylic nails on to hold the sensor', correct:false, why:'Slide 42 says to remove fingernail polish, acrylic nails and artificial tips before the reading.'}],
 teach:'Record the two numbers: oxygen saturation and heart rate.',
 cite:'POCT-Physical-Assessment.pdf slide 42'},

{id:'p16', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'swab', concept:'throat-swab',
 tags:['specimen collection'], source:'slide',
 stem:'In a throat swab, which structure is struck with the side of the swab?',
 options:[
  {t:'The uvula', correct:true, why:'Slide 46: follow the glossopalatine arch, striking the uvula with the side of the swab.'},
  {t:'The tongue', correct:false, why:'Slide 46 has the patient stick the tongue out and says the swab strikes the uvula, not the tongue.'},
  {t:'The hard palate', correct:false, why:'Slide 46 describes the swab path along the glossopalatine arch from tonsil to tonsil, not the hard palate.'},
  {t:'The inferior turbinate', correct:false, why:'Slide 51 places the inferior turbinate in the nose, so it is not part of the throat swab.'}],
 teach:'Start at the base of the arch at the level of the tonsil, follow the glossopalatine arch, strike the uvula, end at the opposite tonsil, then swab in reverse immediately.',
 cite:'POCT-Physical-Assessment.pdf slide 46'},

{id:'p17', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'swab', concept:'nasal-swab',
 tags:['specimen collection'], source:'slide',
 stem:'Which instruction applies to the nasal swab technique?',
 options:[
  {t:'The patient does not blow their nose beforehand', correct:true, why:'Slide 48 says to ensure the patient does not blow their nose prior to the procedure.'},
  {t:'Insert the swab about 4 inches to the turbinates', correct:false, why:'The cotton end is inserted to the turbinates, about 1 inch (slide 48).'},
  {t:'Do not rotate the swab', correct:false, why:'Rotate slightly so cells as well as mucus are collected (slide 48).'},
  {t:'Hold the patient’s chin with the dominant hand', correct:false, why:'The chin is held with the non-dominant hand; the swab is held in the dominant hand (slide 48).'}],
 teach:'Nostril technique: rotate 5 times with good contact and leave the swab in the nostril for 15 seconds; repeat in the other nostril if the manufacturer requires. A nasopharyngeal swab goes past the inferior meatus.',
 cite:'POCT-Physical-Assessment.pdf slides 48–51'},

{id:'p18', skill:'tell', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'tests', concept:'sens-spec',
 tags:['sensitivity','specificity'], source:'slide',
 stem:'Which statement defines specificity?',
 options:[
  {t:'The proportion of people without the disease who test negative', correct:true, why:'Slide 55 defines specificity as the proportion of individuals without the disease who test negative.'},
  {t:'The proportion of people with the disease who test positive', correct:false, why:'Slide 55 defines this as sensitivity: individuals with the disease who test positive.'},
  {t:'The proportion of all positive test results that are true positives', correct:false, why:'Slide 55 defines only sensitivity and specificity; the share of positives that are true positives is not specificity.'},
  {t:'The proportion of people tested who have the disease', correct:false, why:'Slide 55 defines specificity among individuals without the disease, not the proportion of those tested who have it.'}],
 teach:'High specificity makes a test good at ruling out disease; high sensitivity makes it good at detecting disease.',
 cite:'POCT-Physical-Assessment.pdf slides 54–55'},

{id:'p19', skill:'apply', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'tests', concept:'screening-sensitivity',
 tags:['sensitivity','screening'], source:'slide',
 stem:'A pharmacy screens many people for HIV or hepatitis C, and most will not have the disease. Which test property is needed?',
 options:[
  {t:'High sensitivity', correct:true, why:'Slide 57 says screening needs high sensitivity because you do not want to miss patients.'},
  {t:'High specificity only', correct:false, why:'Slide 57 calls for a test with high sensitivity, not high specificity only.'},
  {t:'A long processing time', correct:false, why:'Time is a logistical consideration (slide 56), not the property needed.'},
  {t:'No confirmatory testing', correct:false, why:'A good referral program for confirmatory testing is needed (slide 57).'}],
 teach:'Screening casts a wide net to find a few patients, so counseling about results and referral for confirmation are essential.',
 cite:'POCT-Physical-Assessment.pdf slide 57'},

{id:'p20', skill:'recall', prof:'Dr. Parsons', tier:'new', topic:'poct', sub:'tests', concept:'clia-waived',
 tags:['test selection'], source:'slide',
 stem:'Which logistical consideration is required when choosing a point-of-care test?',
 options:[
  {t:'The test must be CLIA-waived', correct:true, why:'Slide 56 lists “Need a CLIA-waived test” first among the logistical considerations.'},
  {t:'It must use only a nasopharyngeal swab', correct:false, why:'Throat, nasal and nasopharyngeal collection are all options (slide 56).'},
  {t:'It must be free to the patient', correct:false, why:'Cost and reimbursement are considered, not required to be free (slide 56).'},
  {t:'It must take over an hour', correct:false, why:'Time required is a consideration, with no minimum (slide 56).'}],
 teach:'Other logistical considerations: cost and reimbursement, specimen collection method, specimen processing space and training, and time.',
 cite:'POCT-Physical-Assessment.pdf slide 56'},

{id:'p21', skill:'apply', prof:'Dr. Parsons', multi:true, tier:'new', topic:'poct', sub:'tests', concept:'gas-flu-testing',
 tags:['influenza','strep'], source:'slide',
 stem:'Which are appropriate practices for Group A strep or influenza point-of-care testing? Select all that apply.',
 options:[
  {t:'Test only patients with symptoms consistent with the disease', correct:true, why:'Slide 58 says to only test patients with symptoms consistent with the disease.'},
  {t:'Test for influenza only when documented disease activity is in the community', correct:true, why:'Slide 58 says to only test for influenza when there is documented disease activity in the community.'},
  {t:'Test every patient who walks in', correct:false, why:'Slide 58 limits testing to patients with symptoms consistent with the disease, not every patient.'},
  {t:'Ignore specificity when choosing the test', correct:false, why:'A test with poor specificity could lead to unnecessary courses of treatment (slide 58).'}],
 teach:'The Centor score is not needed for exams (slide 58).',
 cite:'POCT-Physical-Assessment.pdf slide 58'},

{id:'p22', skill:'recall', prof:'Dr. Parsons', multi:true, tier:'new', topic:'poct', sub:'tests', concept:'protocol-contents',
 tags:['protocol'], source:'slide',
 stem:'A POCT service protocol defines which of these? Select all that apply.',
 options:[
  {t:'The patient population for the service', correct:true, why:'Slide 60 lists the patient population for the service among the protocol contents.'},
  {t:'Inclusion and exclusion criteria', correct:true, why:'Slide 60 lists inclusion and exclusion criteria among the protocol contents.'},
  {t:'The test and collection technique to be used', correct:true, why:'Slide 60 lists the test and collection technique to be used among the protocol contents.'},
  {t:'Post-testing therapy or referral', correct:true, why:'Slide 60 lists defined post-testing therapy or referral among the protocol contents.'},
  {t:'How results are communicated', correct:true, why:'Slide 60 lists defined communication of testing results among the protocol contents.'},
  {t:'The pharmacy’s reimbursement rate', correct:false, why:'Reimbursement is a test-selection consideration (slide 56), not part of the protocol list on slide 60.'}],
 teach:'A protocol, which may be part of a collaborative agreement, also includes the clinical information or algorithm.',
 cite:'POCT-Physical-Assessment.pdf slides 56, 60'}
);

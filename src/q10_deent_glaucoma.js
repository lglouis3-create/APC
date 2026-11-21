/* ==========================================================================
   Week 14, Dr. Lahoud's DEENT lab, Part 2 (ophthalmic review): primary open-angle
   glaucoma and the "EOOR Eye Drop" glaucoma prescription verification. Facts come
   from Dr. Lam's 11/19 glaucoma deck, Lam_Glaucoma.pdf (slide N = PDF page; slides
   1-80 were re-read in Google Drive for this file), as carried in the student's
   own verified DEENT drill. Pathophysiology and mechanism wording is limited to
   what the DEENT items cite from Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf.
   Review items use the Week 2 error types (Intro-to-Dispensing.pdf slides 38-39):
   a prescribing error is fixed by calling the prescriber; a transcribing error is
   fixed by re-entering the sig in the pharmacy system and regenerating the label
   (slide 39); a dispensing error by replacing the incorrect product and relabeling
   before dispensing (slide 39).
   Facts that only the DEENT bank states (not seen on slides 1-80 here): slides 83,
   91 and 92 (contact lenses; angle-closure presentation), and the Latisse versus
   Lumigan indications (slide 19 only names the brands). Marked (bank) in the notes.
   Not used: Latisse strength (slide 19 prints 0.3%, the handout 0.03%).
   ========================================================================== */
TOPICS.push({id:'dglau', name:'DEENT lab: glaucoma', prof:'Dr. Lahoud', cite:'Lam_Glaucoma.pdf', subs:[
  {id:'pres', name:'Open-angle glaucoma: presentation and goal', cite:'slides 12–14, 91–92'},
  {id:'drugs', name:'Drug classes, dosing and cautions', cite:'slides 18–21, 31–34, 41–44, 51–53, 57, 62–63, 69'},
  {id:'tech', name:'Eye drop technique, spacing and order', cite:'slides 22, 35, 71–75, 83'},
  {id:'rev', name:'Eye drop prescription review (EOOR)', cite:'slides 19, 24–25, 32, 51, 62, 69'}]});

QUESTIONS.push(
{id:'xg01', skill:'tell', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'pres', concept:'poag-silent',
 tags:['glaucoma','POAG'], source:'slide',
 stem:'A man with newly diagnosed primary open-angle glaucoma (POAG) says his vision is fine and asks why he must use eye drops every day. What is the best explanation?',
 options:[
  {t:'It is silent until substantial field loss', correct:true, why:'Slide 12 gives the clinical presentation as asymptomatic until substantial visual field loss occurs, so feeling well says nothing about pressure.'},
  {t:'POAG causes sandy, gritty eyes that the drops relieve', correct:false, why:'Slide 12 describes POAG as asymptomatic; the drops lower intraocular pressure and are not for surface irritation.'},
  {t:'POAG causes pain that the drops prevent', correct:false, why:'Slide 12 lists no pain for POAG; it is asymptomatic until substantial visual field loss occurs.'},
  {t:'POAG resolves once the pressure is measured once', correct:false, why:'Slides 13–14 set a goal of reducing pressure with ongoing therapy; measuring it once does not end the disease.'}],
 teach:'Primary open-angle glaucoma is asymptomatic until substantial visual field loss occurs. A patient cannot judge control by how the eyes feel, so the drops are used daily and an eye care professional follows the pressure.',
 cite:'Lam_Glaucoma.pdf slide 12'},

{id:'xg02', skill:'tell', lowYield:true, prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'pres', concept:'poag-vs-acg',
 tags:['glaucoma','POAG'], source:'both',
 stem:'A woman has severe pain in one eye with headache, nausea, vomiting, blurred vision, colored halos around lights and sudden vision loss. Which statement fits?',
 options:[
  {t:'Not POAG; send her for emergency eye evaluation', correct:true, why:'Slide 12 shows open-angle glaucoma is asymptomatic, while slides 91–92 give pain, halos and sudden loss as acute angle closure (bank).'},
  {t:'This is typical POAG and she should start a once-daily drop', correct:false, why:'Slide 12 says POAG is asymptomatic until substantial field loss; this pain and sudden loss is a different, urgent picture.'},
  {t:'An adverse effect of a prostaglandin analog', correct:false, why:'Slide 21 lists blurred vision, stinging, pigmentation and lash growth for prostaglandin analogs, not severe pain with vomiting.'},
  {t:'This is dry eye and artificial tears are enough', correct:false, why:'Severe pain with vomiting and sudden vision loss is not a surface irritation problem and cannot be handled with a lubricant.'}],
 teach:'Open-angle glaucoma is symptomless until late. Severe eye pain with headache, nausea, vomiting, halos and sudden vision loss points to acute angle closure, which is an emergency referral to an eye care professional.',
 cite:'Lam_Glaucoma.pdf slides 12, 91–92 (bank)'},

{id:'xg03', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'pres', concept:'iop-goal',
 tags:['glaucoma','goal'], source:'slide',
 stem:'Which statement about the goal of therapy in primary open-angle glaucoma is correct?',
 options:[
  {t:'Lower pressure; target set by an eye care professional', correct:true, why:'Slide 14 gives the goal as reducing intraocular pressure (IOP), with the target determined by an eye care professional.'},
  {t:'Relieve symptoms, with the target set by the pharmacist', correct:false, why:'Slide 12 shows POAG has no symptoms to relieve, and slide 14 says an eye care professional determines the IOP target.'},
  {t:'Reduce IOP by 25–30%, with the target set by the pharmacist', correct:false, why:'Slide 14 shows the 25–30% reduction but states the IOP target is determined by an eye care professional, not the pharmacist.'},
  {t:'Raise ocular perfusion pressure, with no pressure target', correct:false, why:'Slide 7 names lower perfusion pressure as a risk factor, but slide 14 gives the goal as lowering IOP.'}],
 teach:'The goal of POAG therapy is a lower IOP. An eye care professional determines the target; the reduction shown on the slide is 25–30%.',
 cite:'Lam_Glaucoma.pdf slides 12, 14'},

{id:'xg04', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'drugs', concept:'first-line-pga',
 tags:['glaucoma','prostaglandin'], source:'slide',
 stem:'Which drug class is first-line therapy for primary open-angle glaucoma?',
 options:[
  {t:'Prostaglandin analogs', correct:true, why:'Slide 19 is titled First-Line Therapy: Prostaglandin Analogues, and slide 63 lists them first in the sequence.'},
  {t:'Ophthalmic beta blockers', correct:false, why:'Slide 31 titles beta blockers adjunctive or alternative, and slide 63 puts them second after prostaglandin analogs.'},
  {t:'Alpha-2 adrenergic agonists', correct:false, why:'Slide 41 titles alpha-2 agonists adjunctive therapy or alternative; slide 63 puts them third in the sequence.'},
  {t:'Cholinergic agonists', correct:false, why:'Slide 63 puts cholinergic agents fifth, and slide 57 dosing is four times daily, so they are not first line.'}],
 teach:'The six classes in the usual order are prostaglandin analog, beta blocker, alpha-2 agonist, topical carbonic anhydrase inhibitor, cholinergic and Rho kinase inhibitor. The prostaglandin analog starts therapy.',
 cite:'Lam_Glaucoma.pdf slides 19, 63'},

{id:'xg05', skill:'recall', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dglau', sub:'drugs', concept:'pga-reasons',
 tags:['glaucoma','prostaglandin'], source:'slide',
 stem:'Which are reasons prostaglandin analogs are first-line therapy for primary open-angle glaucoma? Select all that apply.',
 options:[
  {t:'Once-daily dosing', correct:true, why:'Slide 20 gives once-daily dosing as the first reason prostaglandin analogs are first line.'},
  {t:'IOP reduction of up to 33%', correct:true, why:'Slide 20 states they reduce intraocular pressure by up to 33%, more than the beta blocker (20–30%), alpha-2 agonist (18–27%) and topical CAI (15–26%) ranges.'},
  {t:'Lower-cost generics', correct:true, why:'Slide 20 lists lower-cost generics among the reasons for first-line use.'},
  {t:'Good tolerance', correct:true, why:'Slide 20 lists good tolerance as one of the reasons for first-line use.'},
  {t:'Dosing four times daily', correct:false, why:'Slide 20 stresses once-daily dosing; four times daily is the pilocarpine frequency on slide 57.'}],
 teach:'Prostaglandin analogs combine a large pressure reduction (up to 33%) with one dose a day, generic availability and good tolerance.',
 cite:'Lam_Glaucoma.pdf slide 20'},

{id:'xg06', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'drugs', concept:'pga-night',
 tags:['glaucoma','prostaglandin'], source:'slide',
 stem:'A patient starting latanoprost asks why the drop is used at night. Which side effect is the reason for nightly dosing?',
 options:[
  {t:'Blurred vision', correct:true, why:'Slide 21 states blurred vision is the reason for nightly dosing of prostaglandin analogs.'},
  {t:'Eyelash growth', correct:false, why:'Slide 21 lists eyelash growth and thickening as a side effect, but it is not the stated reason for nightly dosing.'},
  {t:'Increased iris pigmentation', correct:false, why:'Slide 21 lists increased pigmentation as a side effect, but blurred vision is the stated reason for nightly dosing.'},
  {t:'Stinging', correct:false, why:'Slide 21 lists stinging as a side effect, but only blurred vision carries the note about nightly dosing.'}],
 teach:'Prostaglandin analog side effects are blurred vision, stinging, increased iris or eyelash pigmentation, eyelash growth and a foreign body sensation. Blurred vision is why the drop is used at night.',
 cite:'Lam_Glaucoma.pdf slide 21'},

{id:'xg07', skill:'recall', prof:'Dr. Lahoud', multi:true, tier:'new', topic:'dglau', sub:'drugs', concept:'pga-contra',
 tags:['glaucoma','prostaglandin'], source:'slide',
 stem:'Which histories are contraindications to prostaglandin analogs? Select all that apply.',
 options:[
  {t:'Macular edema', correct:true, why:'Slide 21 lists macular edema under contraindications for prostaglandin analogs.'},
  {t:'History of herpetic keratitis', correct:true, why:'Slide 21 lists a history of herpetic keratitis under contraindications for prostaglandin analogs.'},
  {t:'Asthma', correct:false, why:'Slides 34 and 59 list asthma as a precaution for beta blockers and cholinergic agents, not for prostaglandin analogs.'},
  {t:'Sickle cell disease', correct:false, why:'Slide 54 lists sickle cell disease as a carbonic anhydrase inhibitor precaution, not a prostaglandin analog contraindication.'}],
 teach:'Match each caution to its class: macular edema and herpetic keratitis for prostaglandin analogs; asthma for beta blockers and cholinergics; sickle cell disease for carbonic anhydrase inhibitors.',
 cite:'Lam_Glaucoma.pdf slides 21, 34, 54, 59'},

{id:'xg08', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'drugs', concept:'timolol-asthma',
 tags:['glaucoma','beta blocker'], source:'slide',
 stem:'A patient with uncontrolled asthma is prescribed timolol eye drops. Which response is best?',
 options:[
  {t:'Call the prescriber about asthma and beta blockers', correct:true, why:'Slide 34 lists asthma/COPD as a precaution for ophthalmic beta blockers, and slide 33 lists bronchospasm as a systemic effect.'},
  {t:'Dispense it; beta blocker eye drops do not reach the lungs', correct:false, why:'Slide 33 lists bronchospasm as a systemic effect of ophthalmic beta blockers, so absorbed drug can reach the lungs.'},
  {t:'Change the drop to pilocarpine, which also treats glaucoma', correct:false, why:'Slide 59 lists asthma as a precaution for cholinergic agents too, so pilocarpine does not solve the problem.'},
  {t:'Double the frequency to speed up the effect', correct:false, why:'Slide 32 gives timolol as BID or once daily as a gel; a higher frequency adds exposure and does not remove the precaution.'}],
 teach:'Ophthalmic beta blockers can cause bradycardia, hypotension and bronchospasm. Asthma/COPD, heart block, uncompensated cardiac failure and oral beta blocker therapy are precautions, so the pharmacist raises them with the prescriber.',
 cite:'Lam_Glaucoma.pdf slides 33, 34, 59'},

{id:'xg09', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'drugs', concept:'timolol-gel',
 tags:['glaucoma','beta blocker'], source:'slide',
 stem:'A patient forgets the evening dose of timolol solution taken twice daily (BID). Which change allows once-daily dosing of the same drug?',
 options:[
  {t:'Timoptic XE gel', correct:true, why:'Slide 32 gives Timoptic XE gel as 1 drop into the affected eye(s) daily, while timolol solution is BID.'},
  {t:'Combigan combination drop', correct:false, why:'Slide 69 gives Combigan as 1 drop BID, so it cannot meet a once-daily need.'},
  {t:'Cosopt combination drop', correct:false, why:'Slide 69 gives Cosopt as 1 drop BID, so it does not reduce the evening dose problem.'},
  {t:'Simbrinza combination drop', correct:false, why:'Slide 69 gives Simbrinza as 1 drop TID, a higher frequency than timolol solution, and it contains no timolol.'}],
 teach:'Timolol solution (Timoptic, Istalol) is BID, and Timoptic XE gel is once daily. The combination products on slide 69 are BID or TID, never once daily.',
 cite:'Lam_Glaucoma.pdf slides 32, 69'},

{id:'xg10', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'drugs', concept:'cai-why-last',
 tags:['glaucoma','CAI'], source:'slide',
 stem:'Oral carbonic anhydrase inhibitors lower IOP by 25–40%. Why are they still a last-line choice?',
 options:[
  {t:'Systemic acidosis', correct:true, why:'Slide 53 gives systemic acidosis (malaise, fatigue, anorexia, nausea, weight loss, altered taste) as the reason they are last.'},
  {t:'Bronchospasm and heart block', correct:false, why:'Slide 58 lists bronchospasm and heart block as cholinergic agent systemic effects, not the oral carbonic anhydrase inhibitor problem.'},
  {t:'Eyelash growth and iris darkening', correct:false, why:'Slide 21 lists these as prostaglandin analog effects, and slide 53 gives acidosis as the oral carbonic anhydrase inhibitor problem.'},
  {t:'Too small a pressure reduction', correct:false, why:'Slide 53 states the oral reduction is 25–40%, larger than the topical 15–26%; the limit is tolerability.'}],
 teach:'Oral acetazolamide and methazolamide lower pressure well but cause systemic acidosis, so they sit at the end of the sequence. The topical agents reduce IOP 15–26% with minimal systemic effects.',
 cite:'Lam_Glaucoma.pdf slides 51–53'},

{id:'xg11', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'drugs', concept:'class-order',
 tags:['glaucoma','sequence'], source:'slide',
 stem:'A patient is adherent on a prostaglandin analog, a beta blocker and an alpha-2 agonist, and the intraocular pressure (IOP) is still above goal. Which class comes next in the usual order?',
 options:[
  {t:'Topical carbonic anhydrase inhibitor', correct:true, why:'Slide 63 lists the topical carbonic anhydrase inhibitor fourth, after the prostaglandin analog, beta blocker and alpha-2 agonist.'},
  {t:'Rho kinase inhibitor (netarsudil)', correct:false, why:'Slide 63 lists the Rho kinase inhibitor sixth and last, after the cholinergic.'},
  {t:'Another prostaglandin analog in a second bottle', correct:false, why:'Slide 15 lists duplicate therapy as an indication problem, and a second prostaglandin analog is not a new class.'},
  {t:'Cholinergic agonist', correct:false, why:'Slide 63 lists the cholinergic fifth, so it follows the topical carbonic anhydrase inhibitor.'}],
 teach:'Add classes in order: prostaglandin analog, beta blocker, alpha-2 agonist, topical carbonic anhydrase inhibitor, cholinergic, Rho kinase inhibitor.',
 cite:'Lam_Glaucoma.pdf slides 15, 63'},

{id:'xg12', skill:'recall', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'tech', concept:'eyelid-closure',
 tags:['eye drops','technique'], source:'slide',
 stem:'A patient with heart disease uses timolol drops. What does closing the eyelids after each drop do?',
 options:[
  {t:'Lowers drainage and systemic absorption', correct:true, why:'Slide 72 states eyelid closure decreases nasolacrimal drainage, systemic absorption and the severity of systemic side effects.'},
  {t:'Raises the concentration of the drop in the bottle', correct:false, why:'Slide 72 lists effects on drainage and absorption; nothing changes the strength of the product in the bottle.'},
  {t:'Replaces the wait between two different drops', correct:false, why:'Slide 74 gives a separate 5 minute wait between two solutions; eyelid closure does not replace it.'},
  {t:'Prevents contamination of the bottle tip', correct:false, why:'Slide 71 prevents contamination by not touching the dropper tip; slide 72 gives eyelid closure a different purpose.'}],
 teach:'Eyelid closure lowers nasolacrimal drainage, which lowers systemic absorption and the severity of systemic effects such as bradycardia or bronchospasm. Contamination is prevented by keeping the tip from touching anything.',
 cite:'Lam_Glaucoma.pdf slides 71–72'},

{id:'xg13', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'tech', concept:'wait-solutions',
 tags:['eye drops','spacing'], source:'slide',
 stem:'A patient uses two different eye drop solutions every morning and instills them back to back. How long should she wait between the two solutions?',
 options:[
  {t:'5 minutes', correct:true, why:'Slide 74 shows a 5 minute wait between solution 1 and solution 2 drops.'},
  {t:'10 minutes', correct:false, why:'Slide 74 gives 5 minutes between two solutions, so 10 minutes is not the interval; an ointment or gel-forming solution goes last.'},
  {t:'1 minute', correct:false, why:'Slide 74 shows 5 minutes between two solutions, so 1 minute is too short.'},
  {t:'No wait is needed if the lids are closed', correct:false, why:'Slide 74 gives a 5 minute wait between solutions; eyelid closure on slide 72 serves a different purpose.'}],
 teach:'Wait 5 minutes between two solutions. An ointment or gel-forming solution goes last.',
 cite:'Lam_Glaucoma.pdf slide 74'},

{id:'xg14', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'tech', concept:'order-application',
 tags:['eye drops','order'], source:'slide',
 stem:'A patient uses latanoprost solution, brinzolamide suspension and timolol gel-forming solution at the same time of day. In which order should they be instilled?',
 options:[
  {t:'Latanoprost, brinzolamide, timolol gel', correct:true, why:'Slide 75 orders application as solution, then suspension, then ointment or gel-forming solution.'},
  {t:'Timolol gel, latanoprost, brinzolamide', correct:false, why:'Slide 75 puts the gel-forming solution last, so starting with it blocks the drops that follow.'},
  {t:'Brinzolamide, latanoprost, timolol gel', correct:false, why:'Slide 75 puts the solution before the suspension; brinzolamide is the suspension (slide 51).'},
  {t:'Any order, since the drugs differ', correct:false, why:'Slide 75 sets one order by dosage form, so the order is not free.'}],
 teach:'Order of application is solution, suspension, then ointment or gel-forming solution. Brinzolamide 1% (Azopt) is the suspension, latanoprost is a solution and timolol gel is the gel-forming product.',
 cite:'Lam_Glaucoma.pdf slides 51, 74–75'},

{id:'xg15', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'tech', concept:'preservative-pf',
 tags:['eye drops','preservative'], source:'slide',
 stem:'A man using dorzolamide/timolol (Cosopt) has burning and redness attributed to the preservative in the bottle. Which change keeps both drugs?',
 options:[
  {t:'Cosopt PF', correct:true, why:'Slide 35 names Cosopt PF as the preservative-free option for a reaction to the preservative, and slide 51 lists it as dorzolamide plus timolol.'},
  {t:'Combigan', correct:false, why:'Slide 69 shows Combigan pairs brimonidine with timolol, so it does not keep dorzolamide.'},
  {t:'Simbrinza', correct:false, why:'Simbrinza contains no timolol (slide 69), so it does not keep both drugs; Cosopt PF is the preservative-free dorzolamide plus timolol.'},
  {t:'Timoptic XE gel', correct:false, why:'Slide 32 shows Timoptic XE gel is timolol alone, so dorzolamide would be lost.'}],
 teach:'For intolerance from the preservative, change to a preservative-free product: Cosopt PF for dorzolamide plus timolol, and Trusopt is also available preservative-free.',
 cite:'Lam_Glaucoma.pdf slides 22, 35, 51, 55, 69'},

{id:'xg16', skill:'apply', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'tech', concept:'contact-lens',
 tags:['eye drops','contact lenses'], source:'both',
 stem:'A woman wears soft contact lenses and uses a multiple-dose glaucoma drop containing benzalkonium chloride. What should the pharmacist counsel?',
 options:[
  {t:'Remove lenses first; reinsert 15 minutes after the drop', correct:true, why:'Slide 83 and the 11/19 lecture (T): lenses come out before the drop and go back at least 15 minutes later (bank).'},
  {t:'Leave the lenses in and wait 5 minutes for the drop to settle', correct:false, why:'The 5 minute wait on slide 74 applies between two solutions, not to lens wear; lenses hold preservative against the eye.'},
  {t:'Stop the drop because contact lens wearers cannot use glaucoma drugs', correct:false, why:'Lens wear changes how drops are given and does not exclude any product (bank, slide 83).'},
  {t:'Use the drop only at bedtime with the lenses on', correct:false, why:'Slide 83 has the lenses out for the drop; moving the time to bedtime does not remove the preservative problem.'}],
 teach:'Contact lenses can trap drug and preservative against the eye. Remove them before the drop and wait at least 15 minutes before reinserting. (T)',
 cite:'Lam_Glaucoma.pdf slide 83 (bank; slide not in the readable extraction)'},

{id:'xg17', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'rev', concept:'rev-pga-bid',
 tags:['EOOR','eye drops'], source:'both',
 stem:'A prescription reads bimatoprost 0.01% ophthalmic solution, 1 drop in both eyes (OU) twice daily (BID), for primary open-angle glaucoma. What is the error and the fix?',
 options:[
  {t:'Prescribing error: frequency too high; call the prescriber', correct:true, why:'Slide 20 supports once-daily dosing; more frequent dosing decreases efficacy (T); the prescriber fixes a prescribing error.'},
  {t:'Transcribing error: wrong frequency; correct the label with the technician', correct:false, why:'The prescription itself says BID, so the frequency was prescribed that way and no transcribing mistake occurred (slides 24–25).'},
  {t:'Dispensing error: wrong drug filled; replace the bottle', correct:false, why:'Bimatoprost is the drug written, and the problem on slides 24–25 is the BID frequency, not the product filled.'},
  {t:'No error; BID is the usual frequency', correct:false, why:'Slide 20 gives once-daily dosing for prostaglandin analogs; BID is the beta blocker frequency on slide 32.'}],
 teach:'A prostaglandin analog is dosed once daily, and more frequent dosing decreases its efficacy (T, 11/19 lecture). A frequency written wrongly by the prescriber is a prescribing error, corrected by calling the prescriber.',
 cite:'Lam_Glaucoma.pdf slides 20, 24–25; 11/19 transcript (T); Intro-to-Dispensing.pdf slide 38'},

{id:'xg18', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'rev', concept:'rev-label-tid',
 tags:['EOOR','eye drops'], source:'slide',
 stem:'The prescription reads Trusopt 2% (dorzolamide), 1 drop OU three times daily (TID). The label reads 1 drop OU BID. What is the error and the fix?',
 options:[
  {t:'Transcribing error: re-enter sig; regenerate label', correct:true, why:'Slide 51 gives dorzolamide as TID, matching the prescription; re-enter the sig in the pharmacy system and regenerate the label (slide 39).'},
  {t:'Prescribing error: frequency wrong; call the prescriber', correct:false, why:'Slide 51 gives dorzolamide as TID, so the prescription is right and the fault lies in the label.'},
  {t:'Dispensing error: wrong strength; replace the bottle', correct:false, why:'The strength and drug match the prescription; only the label frequency differs from what was written.'},
  {t:'No error; BID is acceptable for dorzolamide', correct:false, why:'Slide 51 gives dorzolamide as TID; BID is the frequency of Cosopt on slide 69, which also contains timolol.'}],
 teach:'When the prescription is correct and the label differs, the error is transcribing and the sig is re-entered in the pharmacy system and the label regenerated (slide 39). Dorzolamide alone is TID; the combination with timolol is BID.',
 cite:'Lam_Glaucoma.pdf slides 51, 69; Intro-to-Dispensing.pdf slide 38'},

{id:'xg19', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'rev', concept:'rev-netarsudil-time',
 tags:['EOOR','eye drops'], source:'slide',
 stem:'A prescription reads netarsudil 0.02% (Rhopressa), 1 drop OU every night at bedtime (QHS). The label reads 1 drop OU every morning (QAM). What is the error and the fix?',
 options:[
  {t:'Transcribing error: re-enter sig; regenerate label', correct:true, why:'Slide 62 gives netarsudil 0.02% as QHS, matching the prescription, so the QAM is a transcribing error: re-enter the sig, regenerate the label (slide 39).'},
  {t:'Prescribing error: wrong time; call the prescriber', correct:false, why:'Slide 62 gives netarsudil as QHS, so the prescribed time is correct and the prescriber is not at fault.'},
  {t:'Dispensing error: wrong drug filled; replace the bottle', correct:false, why:'Netarsudil is what the prescription and label both name; the only mismatch is the time of day (slide 62).'},
  {t:'No error; morning and bedtime are equivalent', correct:false, why:'Slide 62 gives QHS for netarsudil, so the morning time on the label differs from what was prescribed.'}],
 teach:'Netarsudil (Rhopressa) and Rocklatan are given once at bedtime (QHS). A label that differs from a correct prescription is a transcribing error: re-enter the sig in the pharmacy system and regenerate the label (slide 39).',
 cite:'Lam_Glaucoma.pdf slide 62; Intro-to-Dispensing.pdf slide 38'},

{id:'xg20', skill:'error', prof:'Dr. Lahoud', tier:'new', topic:'dglau', sub:'rev', concept:'rev-latisse',
 tags:['EOOR','eye drops'], source:'both',
 stem:'A prescription for Lumigan (bimatoprost) for glaucoma is filled with Latisse (bimatoprost for eyelash growth). What is the error and the fix?',
 options:[
  {t:'Dispensing error: replace product and relabel', correct:true, why:'Slide 19 names Lumigan and Latisse as separate bimatoprost brands, and Latisse is the eyelash product (bank/handout), so the wrong product was filled.'},
  {t:'Prescribing error: wrong drug written; call the prescriber', correct:false, why:'Lumigan, the glaucoma brand on slide 19, was what the prescriber wrote, so the mistake occurred at filling.'},
  {t:'Transcribing error: wrong label directions; correct the label', correct:false, why:'The directions are not the issue; the wrong brand was filled, which is a dispensing error, not a label transcription.'},
  {t:'No error; both are the same drug and indication', correct:false, why:'Slide 19 lists Lumigan and Latisse as different brands; Latisse is for eyelash growth, not glaucoma (bank).'}],
 teach:'Bimatoprost is sold as Lumigan for glaucoma and as Latisse for eyelash growth. Filling the wrong product is a dispensing error: replace the incorrect product and relabel before dispensing (slide 39).',
 cite:'Lam_Glaucoma.pdf slide 19; DEENT bank/handout (indications); Intro-to-Dispensing.pdf slide 38'}
);

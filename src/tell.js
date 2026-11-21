const TELL_HTML = `
<h2>Tell apart</h2>
<p class="sub">Pairs and groups that share wording. Each table gives what separates them and where it comes from. Nothing here is scored.</p>

<h3 id="tell-ophtho">Ophthalmic review: which is which (Week 14 lab answer key)</h3>
<table class="reftab"><thead><tr><th style="width:15%"></th><th>Dry eye disease</th><th>Allergic conjunctivitis</th><th>Bacterial/viral conjunctivitis</th><th>Primary open-angle glaucoma</th></tr></thead><tbody>
<tr><td><b>Clinical presentation</b></td><td>Mildly red eye; sandy, gritty feeling or sensation that something is in the eye</td><td>Itching, tearing, red eyes</td><td>Tearing, lid crusting</td><td>Asymptomatic until substantial visual field loss occurs</td></tr>
<tr><td><b>Treatment approach</b></td><td>Symptomatic relief, but referral is vital for diagnosis and treatment</td><td>Symptomatic relief</td><td>Symptomatic treatment; refer to provider for antibiotic if applicable</td><td>Reduce intraocular pressure</td></tr>
<tr><td><b>Compress</b></td><td>Warm</td><td>Cold</td><td>Cold</td><td>Not helpful</td></tr>
<tr><td><b>Non-pharm recommendation</b></td><td>Avoid environments that increase evaporation of the tear film (for example dusty places)</td><td>Remove or avoid exposure to the offending allergen</td><td>Compress</td><td>Limit or eliminate drugs that increase intraocular pressure</td></tr>
<tr><td><b>First line</b></td><td>Ocular lubricants (artificial tears or bland ophthalmic ointments)</td><td>Artificial tears, followed by ophthalmic antihistamines if symptoms persist</td><td>Ocular antimicrobial, with or without artificial tears or ophthalmic antihistamines for symptomatic relief</td><td>Prostaglandin analogs</td></tr>
<tr><td><b>Example medication with instructions</b></td><td>Artificial tears: instill drops once or twice a day, typically on arising and before retiring</td><td>Ketotifen: twice per day, for patients 3 years and older</td><td>Ciprofloxacin ophthalmic solution: 1&ndash;2 drops every 2 hours for 2 days, then 1&ndash;2 drops every 4 hours for 5 days</td><td>Latanoprost: once daily; refrigerate before opening, room temperature once opened</td></tr>
</tbody></table>
<p class="prose">Source: the lab's verified answer key (Ophthalmic-Review-Key.pdf). Dr. Lam's slide 34 gives cold compresses and referral for bacterial or viral conjunctivitis; the key's row is what the lab keyed.</p>

<h3 id="tell-rx-categories">Prescription requirements by category (Intro-to-Dispensing.pdf slides 16, 18, 20, 22)</h3>
<table class="reftab"><thead><tr><th style="width:18%"></th><th>Dangerous drug (non-controlled)</th><th>Schedule III&ndash;V</th><th>Schedule II</th></tr></thead><tbody>
<tr><td><b>Patient address</b></td><td>Required unless readily retrievable from the pharmacy patient medication record</td><td colspan="2">On the prescription</td></tr>
<tr><td><b>Patient date of birth</b></td><td>Not required, but must be in the record</td><td colspan="2">On the prescription (Texas)</td></tr>
<tr><td><b>Prescriber DEA number</b></td><td>Not listed</td><td colspan="2">Required</td></tr>
<tr><td><b>Quantity</b></td><td>Name, strength, dosage form and quantity</td><td colspan="2">Also written as a word if the order is written</td></tr>
<tr><td><b>If written</b></td><td>&mdash;</td><td>&mdash;</td><td>TSBP official form, manually signed; pharmacist records date filled and Rx number</td></tr>
<tr><td><b>Refills</b></td><td>No limit</td><td>5 refills</td><td>0 refills</td></tr>
<tr><td><b>Script expires</b></td><td>1 year after issue</td><td>6 months after issue</td><td>30 days after issue</td></tr>
</tbody></table>

<h3 id="tell-errors">Prescribing, transcribing and dispensing errors (Intro-to-Dispensing.pdf slides 38&ndash;39)</h3>
<table class="reftab"><thead><tr><th style="width:18%">Type</th><th>Examples</th><th style="width:30%">Correction</th></tr></thead><tbody>
<tr><td><b>Prescribing</b></td><td>Prescription expired; dose or frequency too high or too low; insufficient prescribed quantity (common with liquids); inappropriate number of refills; DEA number missing</td><td>Contact the prescriber to clarify, correct or obtain a new prescription</td></tr>
<tr><td><b>Transcribing</b></td><td>Incorrect patient selected or processed; incorrect drug entered; directions or refills transcribed incorrectly onto the label</td><td>Correct the prescription entered in the system and regenerate labels</td></tr>
<tr><td><b>Dispensing</b></td><td>Incorrect drug, formulation or strength filled; insufficient quantity filled; wrong use-before date; expired product used</td><td>Replace the incorrect product and/or relabel before dispensing</td></tr>
</tbody></table>

<h3 id="tell-lice">Pyrethrins and permethrin for head lice (OTC-Insect-Bites-Pediculosis.pdf slides 31&ndash;33)</h3>
<table class="reftab"><thead><tr><th style="width:18%"></th><th>Synergized pyrethrins</th><th>Permethrin (Nix)</th></tr></thead><tbody>
<tr><td><b>What is special</b></td><td>Piperonyl butoxide inhibits pyrethrin breakdown</td><td>Cream rinse applied to the scalp for 10 minutes</td></tr>
<tr><td><b>Retreatment</b></td><td>Must retreat in 7&ndash;10 days</td><td>May retreat in 7&ndash;10 days if lice or nits are seen</td></tr>
<tr><td><b>Age exclusion</b></td><td>Under 2 years</td><td>Under 2 months</td></tr>
<tr><td><b>Both</b></td><td colspan="2">Block nerve impulse transmission (paralysis and death of the lice); a lice comb must be used</td></tr>
</tbody></table>

<h3 id="tell-contra">Contraindication or precaution (AAFP-Adult-Schedule-2026.pdf Appendix)</h3>
<table class="reftab"><thead><tr><th style="width:18%"></th><th>Meaning</th><th style="width:34%">Example</th></tr></thead><tbody>
<tr><td><b>Contraindication</b></td><td>The vaccine should NOT be administered</td><td>Severe allergic reaction (for example anaphylaxis) after a previous dose or to a component</td></tr>
<tr><td><b>Precaution</b></td><td>Vaccination should generally be deferred, but might be indicated if the benefit of protection outweighs the risk of an adverse reaction</td><td>Moderate or severe acute illness, with or without fever</td></tr>
</tbody></table>
`;

const GUIDE_HTML = `
<h2>Study guide</h2>
<p class="sub">One guide per professor, in the order of the exam. Each section gives what to know, what is easily confused, how it is asked and the usual traps. Bracketed tags name the source; (T) marks a point heard only in a recording.</p>
<h2>Dr. Lahoud: dispensing, errors and the DEENT lab</h2>
<div class="gtoc" style="border:1px solid var(--line);border-radius:9px;padding:8px 12px 8px 8px;margin:10px 0;background:var(--paper)"><ol style="margin:0 0 0 22px;padding:0;line-height:1.6;font-size:14.5px">
<li><a href="#gl-1">Medication use process, errors and the Swiss cheese model</a></li>
<li><a href="#gl-2">Who can prescribe and what makes a prescription valid</a></li>
<li><a href="#gl-3">Generic substitution and label expiration dates</a></li>
<li><a href="#gl-4">The three-step prescription review and error classification</a></li>
<li><a href="#gl-5">Counseling</a></li>
<li><a href="#gl-6">DEENT lab, part 1: acne and QuEST/SCHOLAR-MAC</a></li>
<li><a href="#gl-7">DEENT lab, part 2: ophthalmic review</a></li>
<li><a href="#gl-8">DEENT lab, part 3: psoriasis and scaly dermatoses</a></li>
</ol></div>

<section class="gobj" id="gl-1">
<h3>1. Medication use process, errors and the Swiss cheese model</h3>
<div class="gbar"><span>SECTION 1</span><b>Name the five steps, place each error at its step, and explain how an error reaches a patient.</b><i>Intro to Dispensing deck, slides 5&ndash;10 (sl.); 8/24 transcript (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>Five steps in order: prescribing, order processing, dispensing, administration, monitoring <span class="gsrc">[sl. 6]</span>.</li>
<li>An error can occur at any step <span class="gsrc">[sl. 7]</span>.</li>
<li>Swiss cheese model: several small errors line up and allow a major error <span class="gsrc">[sl. 8]</span>.</li>
<li>An unaddressed medication error becomes a medication-related problem <span class="gsrc">[sl. 9]</span>.</li>
<li>The pharmacist&rsquo;s two roles: prescription review and medication counseling <span class="gsrc">[sl. 10]</span>.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>The five steps and their errors</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Prescribing</div><div class="gcard-r"><span class="gcard-k">Errors listed on the slide</span><br>Inappropriate medication selection; inappropriate dose, formulation, route or sig (directions)</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 7</div></div><div class="gcard"><div class="gcard-t">Order processing</div><div class="gcard-r"><span class="gcard-k">Errors listed on the slide</span><br>Transcribing error</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 7</div></div><div class="gcard"><div class="gcard-t">Dispensing</div><div class="gcard-r"><span class="gcard-k">Errors listed on the slide</span><br>Incorrect drug selection or expired medication; mislabeled or mis-bagged product; incorrect patient</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 7</div></div><div class="gcard"><div class="gcard-t">Administration</div><div class="gcard-r"><span class="gcard-k">Errors listed on the slide</span><br>Wrong instructions to the patient; lack of counseling or patient misunderstanding</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 7</div></div><div class="gcard"><div class="gcard-t">Monitoring</div><div class="gcard-r"><span class="gcard-k">Errors listed on the slide</span><br>Drug&ndash;drug interaction (DDI); allergies; adverse events (AEs); lack of counseling or patient misunderstanding</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 7</div></div></div></div>
<div class="gpt"><h5>Swiss cheese model</h5><ul>
<li>Each step is a slice of cheese, and each slice has holes <span class="gsrc">[sl. 8; (T)]</span>.</li>
<li>Slices named in lecture: the prescriber, the technician entering the order, the technician filling the product, and the pharmacist double-checking [(T)].</li>
<li>An error that passes through a hole in every slice reaches the patient [(T)].</li>
<li>The next slice is meant to catch what the previous slice missed [(T)].</li>
<li>The pharmacist&rsquo;s goal is to catch major errors before they cause harm [(T)].</li>
</ul></div>
<div class="gpt"><h5>Downstream effects</h5><ul>
<li>Unaddressed medication error &rarr; medication-related problem <span class="gsrc">[sl. 9]</span>.</li>
<li>Harms named in lecture: wrong medication, unnecessary medication, dose too high causing an adverse effect [(T)].</li>
</ul></div>
<div class="gpt"><h5>The pharmacist&rsquo;s role</h5><ul>
<li>Prescription review spans prescribing, order processing and dispensing; medication counseling spans administration and monitoring <span class="gsrc">[sl. 10]</span>.</li>
<li>Counseling does not replace prescription review; they are separate roles <span class="gsrc">[sl. 10]</span>.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Order processing vs dispensing: order processing is entering the prescription into the system (transcribing); dispensing is handling the product <span class="gsrc">[sl. 7]</span>.</li>
<li>Incorrect patient: slide 7 lists it under dispensing, but slide 38 and the errors-and-omissions (EOOR) key classify it as a transcribing error; the exam keys transcribing <span class="gsrc">[sl. 38; EOOR st. 4]</span>.</li>
<li>Medication error vs medication-related problem: the problem is the downstream result of an error nobody addressed <span class="gsrc">[sl. 9]</span>.</li>
<li>Prescription review vs counseling: review catches errors before the product leaves; counseling helps the patient use it correctly <span class="gsrc">[sl. 10, 41]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Placement question. Example stem: &ldquo;A technician enters the directions incorrectly. At which step does the error occur?&rdquo;</li>
<li>Step 1: decide who or what made the mistake (prescriber, order entry, product handling, patient use, follow-up).</li>
<li>Step 2: match that to the step: order entry = order processing; wrong bottle = dispensing.</li>
<li>Model question. Example stem: &ldquo;How does an error reach the patient in the Swiss cheese model?&rdquo; Answer: it passes through a hole in every slice [(T)].</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Choosing &ldquo;each slice catches it one time&rdquo; or &ldquo;the last slice has no holes&rdquo;; every slice has holes.</li>
<li>Calling a typing error in the system a dispensing error; it is order processing.</li>
<li>Treating counseling as a substitute for prescription review.</li>
</ul></div>
</section>

<section class="gobj" id="gl-2">
<h3>2. Who can prescribe and what makes a prescription valid</h3>
<div class="gbar"><span>SECTION 2</span><b>Identify a legal prescriber and apply the required items, refill limit and script expiration for each category.</b><i>Intro to Dispensing deck, slides 11&ndash;22, 27; 8/24 transcript (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>A prescription drug order is a written order, or a verbal order from a practitioner or authorized agent, to a pharmacist for a drug or device <span class="gsrc">[sl. 13]</span>.</li>
<li>Required items depend on three categories: dangerous drug (non-controlled), CIII&ndash;V, and CII <span class="gsrc">[sl. 15]</span>.</li>
<li>A prescription may hold more information than required, never less <span class="gsrc">[sl. 15; (T)]</span>.</li>
<li>Dangerous drugs: no refill limit, 1 year. CIII&ndash;V: 5 refills, 6 months. CII: 0 refills, 30 days <span class="gsrc">[sl. 22]</span>.</li>
<li>Texas law requires the date of birth on CIII&ndash;V prescriptions even though federal law does not [(T)].</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Who is a practitioner</h5><ul>
<li>Licensed prescribers in Texas: physicians (MD, DO), dentists (DDS, DMD), podiatrists (DPM), veterinarians (DVM), and optometrists (therapeutic optometrists and optometric glaucoma specialists) <span class="gsrc">[sl. 14]</span>.</li>
<li>Prescribers licensed in another state, Canada or Mexico, in a field that would allow prescribing in Texas <span class="gsrc">[sl. 14]</span>.</li>
<li>Out-of-state physicians, dentists, veterinarians and podiatrists for controlled substances: an active DEA number is required, and Schedules II&ndash;V are allowed if legal in their state <span class="gsrc">[sl. 14]</span>.</li>
<li>Delegated prescribers: advanced practice registered nurses (APRNs) and physician assistants (PAs) prescribe if a physician delegates under Chapter 157 <span class="gsrc">[sl. 14]</span>.</li>
<li>Pharmacists in certain settings (hospital, hospital-based clinic, academic health center) may sign dangerous-drug prescriptions if delegated under section 157.101 <span class="gsrc">[sl. 14]</span>.</li>
<li>The practitioner types are not limited to MDs [(T)].</li>
</ul></div>
<div class="gpt"><h5>Required items by category</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Date of issuance; patient name; drug name, strength, dosage form, quantity; directions; prescriber name, address, phone</div><div class="gcard-r"><span class="gcard-k">Dangerous drug</span><br>Required</div><div class="gcard-r"><span class="gcard-k">CIII&ndash;V</span><br>Required</div><div class="gcard-r"><span class="gcard-k">CII</span><br>Required</div></div><div class="gcard"><div class="gcard-t">Patient address</div><div class="gcard-r"><span class="gcard-k">Dangerous drug</span><br>Required unless readily retrievable from the pharmacy patient medication record (PMR)</div><div class="gcard-r"><span class="gcard-k">CIII&ndash;V</span><br>On the prescription</div><div class="gcard-r"><span class="gcard-k">CII</span><br>On the prescription</div></div><div class="gcard"><div class="gcard-t">Patient date of birth (DOB)</div><div class="gcard-r"><span class="gcard-k">Dangerous drug</span><br>Not required on the prescription, but a record of DOB or age must be in the PMR</div><div class="gcard-r"><span class="gcard-k">CIII&ndash;V</span><br>On the prescription, even if in the PMR</div><div class="gcard-r"><span class="gcard-k">CII</span><br>On the prescription</div></div><div class="gcard"><div class="gcard-t">Animal patient</div><div class="gcard-r"><span class="gcard-k">Dangerous drug</span><br>Species and owner&rsquo;s name</div><div class="gcard-r"><span class="gcard-k">CIII&ndash;V</span><br>Species and owner&rsquo;s name</div><div class="gcard-r"><span class="gcard-k">CII</span><br>Species and owner&rsquo;s name</div></div><div class="gcard"><div class="gcard-t">Intended use (indication)</div><div class="gcard-r"><span class="gcard-k">Dangerous drug</span><br>Required unless the prescriber decides it is not in the patient&rsquo;s best interest</div><div class="gcard-r"><span class="gcard-k">CIII&ndash;V</span><br>Same</div><div class="gcard-r"><span class="gcard-k">CII</span><br>Same</div></div><div class="gcard"><div class="gcard-t">Prescriber DEA number</div><div class="gcard-r"><span class="gcard-k">Dangerous drug</span><br>Not required</div><div class="gcard-r"><span class="gcard-k">CIII&ndash;V</span><br>Required</div><div class="gcard-r"><span class="gcard-k">CII</span><br>Required</div></div><div class="gcard"><div class="gcard-t">Quantity as number and word (written orders)</div><div class="gcard-r"><span class="gcard-k">Dangerous drug</span><br>Not required</div><div class="gcard-r"><span class="gcard-k">CIII&ndash;V</span><br>Required</div><div class="gcard-r"><span class="gcard-k">CII</span><br>Required</div></div><div class="gcard"><div class="gcard-t">Signature</div><div class="gcard-r"><span class="gcard-k">Dangerous drug</span><br>Manual, valid replica, or valid electronic if e-prescribed</div><div class="gcard-r"><span class="gcard-k">CIII&ndash;V</span><br>Manual, valid replica, or valid electronic if e-prescribed</div><div class="gcard-r"><span class="gcard-k">CII</span><br>Manual (no stamp or replica) or valid electronic if e-prescribed</div></div><div class="gcard"><div class="gcard-t">Official Texas prescription form</div><div class="gcard-r"><span class="gcard-k">Dangerous drug</span><br>Not required</div><div class="gcard-r"><span class="gcard-k">CIII&ndash;V</span><br>Not required</div><div class="gcard-r"><span class="gcard-k">CII</span><br>Required unless valid e-prescription</div></div></div>
<ul><li>Sources: sl. 16, 18, 20, 27. The CII column inherits everything required for CIII&ndash;V <span class="gsrc">[sl. 20]</span>.</li></ul></div>
<div class="gpt"><h5>Why the DEA number and word quantity</h5><ul>
<li>The DEA number shows federal permission to prescribe controlled substances and helps track prescribing habits [(T)].</li>
<li>Quantity as a number and a word (for example #20 (twenty)) limits diversion <span class="gsrc">[sl. 18; (T)]</span>.</li>
<li>If a written controlled-substance quantity has no word, call to verify the quantity per the Texas State Board of Pharmacy (TSBP) <span class="gsrc">[sl. 18]</span>.</li>
<li>The lecturer did not require the DEA number letter format [(T)].</li>
</ul></div>
<div class="gpt"><h5>Additional CII rules</h5><ul>
<li>A written CII must be on a TSBP-issued official form and manually signed; this is not ideal <span class="gsrc">[sl. 20]</span>.</li>
<li>The pharmacist records the date filled and the Rx number on the prescription record <span class="gsrc">[sl. 20; (T) so auditors can track it]</span>.</li>
<li>Controlled-substance prescriptions should be issued electronically except in limited circumstances; the prescriber, not the pharmacist, ensures this <span class="gsrc">[sl. 21; (T)]</span>.</li>
<li>Check the patient&rsquo;s prescription monitoring program (PMP) history before dispensing opioids, benzodiazepines, barbiturates or carisoprodol <span class="gsrc">[sl. 21]</span>.</li>
</ul></div>
<div class="gpt"><h5>Refills and script expiration</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Dangerous drug</div><div class="gcard-r"><span class="gcard-k">Refill limit</span><br>No limit</div><div class="gcard-r"><span class="gcard-k">Script expires (after issue)</span><br>1 year</div></div><div class="gcard"><div class="gcard-t">CIII&ndash;V</div><div class="gcard-r"><span class="gcard-k">Refill limit</span><br>5 refills</div><div class="gcard-r"><span class="gcard-k">Script expires (after issue)</span><br>6 months</div><div class="gcard-r"><span class="gcard-k">Note</span><br>3 months for mid-level practitioners (slide 22 footnote; not stressed in lecture)</div></div><div class="gcard"><div class="gcard-t">CII</div><div class="gcard-r"><span class="gcard-k">Refill limit</span><br>0 refills</div><div class="gcard-r"><span class="gcard-k">Script expires (after issue)</span><br>30 days</div><div class="gcard-r"><span class="gcard-k">Note</span><br>Multiple prescriptions allowed if total is 90 days&rsquo; supply or less, issued the same day, with an earliest fill date noted</div></div></div>
<ul><li>Source: sl. 22, 27.</li></ul></div>
<div class="gpt"><h5>CII multiple-prescription example</h5><ul>
<li>Three Focalin XR 10 mg scripts, all dated 8/24/2026, each 30 capsules and 0 refills <span class="gsrc">[sl. 23]</span>.</li>
<li>Script 1 fills now; script 2 lists earliest fill date 9/24/2026; script 3 lists 10/24/2026 <span class="gsrc">[sl. 23]</span>.</li>
<li>Together they give a 90-day supply <span class="gsrc">[sl. 22; (T)]</span>.</li>
<li>The prescriber, not the patient or pharmacist, sets the earliest fill dates <span class="gsrc">[sl. 22]</span>.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Dangerous drug vs CIII&ndash;V on DOB: DOB may live in the PMR for a dangerous drug; it must be on the prescription for CIII&ndash;V.</li>
<li>Dangerous drug vs CIII&ndash;V on address: PMR can supply it only for a dangerous drug.</li>
<li>CIII&ndash;V vs CII on refills: CIII&ndash;V allows up to 5; CII allows none.</li>
<li>CII vs other categories on signature: a stamp or replica signature is not accepted for a CII.</li>
<li>Refill limit vs expiration: &ldquo;5 refills&rdquo; and &ldquo;6 months&rdquo; are both CIII&ndash;V limits, whichever ends first <span class="gsrc">[sl. 22, 27]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Select-all about one category. Example stem: &ldquo;Which are required on a written CIII&ndash;V prescription but not on a dangerous-drug prescription?&rdquo; Answer: DEA number, DOB on the prescription, quantity as a word.</li>
<li>Scenario. Example stem: &ldquo;A written alprazolam prescription lacks the DOB, which is in the PMR. Valid?&rdquo;</li>
<li>Step 1: name the category (alprazolam is CIV, so CIII&ndash;V) <span class="gsrc">[sl. 19; (T)]</span>.</li>
<li>Step 2: read that category&rsquo;s column. CIII&ndash;V needs the DOB on the prescription, so it is not valid.</li>
<li>Match question: pair each category with its refill limit and expiration.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>PMR exception applied to CIII&ndash;V; it applies only to the dangerous-drug address and DOB.</li>
<li>Requiring a DEA number on a dangerous-drug prescription; it is not required.</li>
<li>A missing indication is not a reason to refuse or to call; the prescriber may omit it <span class="gsrc">[sl. 16; (T)]</span>.</li>
<li>Prescribing refills on a CII; that is a prescribing error.</li>
<li>Forgetting that the 6-month CIII&ndash;V expiration also applies to a prescription with refills left.</li>
</ul></div>
<dl class="gwords">
<dt>PMR</dt><dd>Patient medication record kept by the pharmacy.</dd>
<dt>TSBP</dt><dd>Texas State Board of Pharmacy.</dd>
<dt>PMP</dt><dd>Prescription monitoring program: the patient&rsquo;s dispensing history for controlled substances [(T)].</dd>
<dt>Dangerous drug</dt><dd>A non-controlled prescription drug <span class="gsrc">[sl. 16]</span>.</dd>
</dl>
</section>

<section class="gobj" id="gl-3">
<h3>3. Generic substitution and label expiration dates</h3>
<div class="gbar"><span>SECTION 3</span><b>Decide when a brand must be dispensed, choose the correct label date, and compute script expiration dates.</b><i>Intro to Dispensing deck, slides 22&ndash;26; EOOR key station 10; 8/24 transcript (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>Brand is required only if the prescriber states it in the way the prescription type requires <span class="gsrc">[sl. 24]</span>.</li>
<li>Written prescription: the prescriber handwrites &ldquo;Brand Necessary&rdquo; or &ldquo;Brand Medically Necessary&rdquo; <span class="gsrc">[sl. 24]</span>.</li>
<li>Label date for a vial filled from a stock bottle: one year after the fill date, or the stock bottle expiration if earlier <span class="gsrc">[sl. 25]</span>.</li>
<li>A stock date given as month and year runs to the last day of that month <span class="gsrc">[EOOR st. 10]</span>.</li>
<li>Compounded or reconstituted products follow the product&rsquo;s own directions <span class="gsrc">[sl. 25]</span>.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Preventing substitution</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Written</div><div class="gcard-r"><span class="gcard-k">What prevents substitution</span><br>Prescriber handwrites &ldquo;Brand Necessary&rdquo; or &ldquo;Brand Medically Necessary&rdquo;</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 24</div></div><div class="gcard"><div class="gcard-t">Oral</div><div class="gcard-r"><span class="gcard-k">What prevents substitution</span><br>Prescriber states it verbally and the pharmacist documents it</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 24</div></div><div class="gcard"><div class="gcard-t">Electronic</div><div class="gcard-r"><span class="gcard-k">What prevents substitution</span><br>Clearly indicated in the e-prescription</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 24</div></div></div></div>
<div class="gpt"><h5>Written methods that do not prevent substitution</h5><ul>
<li>Checkboxes <span class="gsrc">[sl. 24]</span>.</li>
<li>Two-line prescription forms <span class="gsrc">[sl. 24]</span>.</li>
<li>Preprinted wording <span class="gsrc">[sl. 24]</span>.</li>
<li>Rubber stamps <span class="gsrc">[sl. 24]</span>.</li>
<li>Lab prescriptions are assumed to arrive electronically [(T)].</li>
<li>When brand is validly required, filling the generic is the error &ldquo;incorrect drug filled&rdquo; <span class="gsrc">[EOOR st. 2]</span>.</li>
</ul></div>
<div class="gpt"><h5>Choosing the label expiration (use-before) date</h5><ul>
<li>Compare two dates: one year after the fill date, and the stock bottle expiration <span class="gsrc">[sl. 25]</span>.</li>
<li>Use the earlier date <span class="gsrc">[sl. 25; (T)]</span>.</li>
<li>Convert a month-and-year stock date to the last day of that month <span class="gsrc">[EOOR st. 10]</span>.</li>
<li>The fill date, not the prescription issue date, is the starting point; it often auto-populates on the label <span class="gsrc">[sl. 34; (T)]</span>.</li>
<li>Reconstituted or compounded products: read the product&rsquo;s directions; Augmentin suspension is discarded 10 days after mixing <span class="gsrc">[sl. 25]</span>.</li>
</ul></div>
<div class="gpt"><h5>Worked label dates (recomputed)</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">8/24/2026</div><div class="gcard-r"><span class="gcard-k">Stock bottle</span><br>2/2027 &rarr; 2/28/2027</div><div class="gcard-r"><span class="gcard-k">1 year after fill</span><br>8/24/2027</div><div class="gcard-r"><span class="gcard-k">Label date</span><br>02/28/2027 (stock is earlier) <span class="gsrc">[sl. 26; (T)]</span></div></div><div class="gcard"><div class="gcard-t">3/1/2026</div><div class="gcard-r"><span class="gcard-k">Stock bottle</span><br>8/2027 &rarr; 8/31/2027</div><div class="gcard-r"><span class="gcard-k">1 year after fill</span><br>3/1/2027</div><div class="gcard-r"><span class="gcard-k">Label date</span><br>03/01/2027 (1 year is earlier)</div></div><div class="gcard"><div class="gcard-t">10/15/2026</div><div class="gcard-r"><span class="gcard-k">Stock bottle</span><br>12/2026 &rarr; 12/31/2026</div><div class="gcard-r"><span class="gcard-k">1 year after fill</span><br>10/15/2027</div><div class="gcard-r"><span class="gcard-k">Label date</span><br>12/31/2026 (stock is earlier)</div></div><div class="gcard"><div class="gcard-t">Any fill date after 1/31/2026</div><div class="gcard-r"><span class="gcard-k">Stock bottle</span><br>1/2027 &rarr; 1/31/2027</div><div class="gcard-r"><span class="gcard-k">1 year after fill</span><br>Later than 1/31/2027</div><div class="gcard-r"><span class="gcard-k">Label date</span><br>1/31/2027 <span class="gsrc">[EOOR st. 10]</span></div></div></div>
<ul><li>Check by year: 2/28/2027 is 188 days after 8/24/2026, which is under a year, so the stock date wins.</li></ul></div>
<div class="gpt"><h5>Worked script expiration dates (recomputed)</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">8/18/2026 (Prozac)</div><div class="gcard-r"><span class="gcard-k">Category</span><br>Dangerous drug</div><div class="gcard-r"><span class="gcard-k">Expires</span><br>8/18/2027</div><div class="gcard-r"><span class="gcard-k">Rule</span><br>1 year <span class="gsrc">[sl. 22; (T)]</span></div></div><div class="gcard"><div class="gcard-t">8/24/2026 (alprazolam)</div><div class="gcard-r"><span class="gcard-k">Category</span><br>CIV</div><div class="gcard-r"><span class="gcard-k">Expires</span><br>2/24/2027</div><div class="gcard-r"><span class="gcard-k">Rule</span><br>6 months <span class="gsrc">[sl. 22]</span></div></div><div class="gcard"><div class="gcard-t">8/24/2026 (Focalin XR)</div><div class="gcard-r"><span class="gcard-k">Category</span><br>CII</div><div class="gcard-r"><span class="gcard-k">Expires</span><br>9/23/2026</div><div class="gcard-r"><span class="gcard-k">Rule</span><br>30 days <span class="gsrc">[sl. 22]</span></div></div></div>
<ul>
<li>A CII issued 8/24/2026 and presented 9/25/2026 is past 30 days and is expired.</li>
<li>A CIV issued 8/24/2026 and presented 3/1/2027 is past 6 months and is expired.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Expired prescription vs expired product: an expired prescription is a prescribing error (call the prescriber); an expired stock bottle is a dispensing error (get a fresh bottle) <span class="gsrc">[sl. 38; EOOR st. 12]</span>.</li>
<li>Incorrect use-before date vs expired product: the first is a wrong date on the label; the second is a stock bottle already past its date <span class="gsrc">[sl. 38]</span>.</li>
<li>Prescription date vs fill date: the label carries the fill date [(T)].</li>
<li>CII expiration wording: the EOOR key says &ldquo;&gt;1 month&rdquo; and slide 22 says 30 days; the drill keys 30 days.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Letter-option date question. Example stem: &ldquo;Filled 08/24/2026; stock bottle expires 2/2027. What is the label date? A. 08/24/2027 B. 02/01/2027 C. 02/28/2027 D. Cannot use stock bottle.&rdquo;</li>
<li>Step 1: write the fill date plus one year (08/24/2027).</li>
<li>Step 2: write the stock date as the last day of its month (02/28/2027).</li>
<li>Step 3: pick the earlier date: C.</li>
<li>Substitution question. Example stem: &ldquo;Which method legally prevents substitution on a written prescription?&rdquo; Answer: handwritten &ldquo;Brand Necessary&rdquo;.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>A &ldquo;brand medically necessary&rdquo; stamp, checkbox or preprinted line does not prevent substitution on a written prescription.</li>
<li>Choosing the first of the month (02/01/2027) for a month-and-year stock date.</li>
<li>Choosing &ldquo;one year after fill&rdquo; when the stock bottle expires sooner.</li>
<li>Choosing &ldquo;cannot use stock bottle&rdquo;; a stock bottle is usable when in date.</li>
<li>Using the stock expiration for a reconstituted suspension.</li>
</ul></div>
</section>

<section class="gobj" id="gl-4">
<h3>4. The three-step prescription review and error classification</h3>
<div class="gbar"><span>SECTION 4</span><b>Review in order, classify each error as prescribing, transcribing or dispensing, and give the fix.</b><i>Intro to Dispensing deck, slides 30&ndash;39; EOOR key stations 1&ndash;13; 8/24 transcript (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>Three steps in order: (1) legal and safe, (2) transcribed correctly, (3) product matches <span class="gsrc">[sl. 30]</span>.</li>
<li>Safety is checked with Lexicomp or Micromedex, not only legality <span class="gsrc">[sl. 44&ndash;45; (T)]</span>.</li>
<li>Prescribing errors usually need a call to the prescriber <span class="gsrc">[sl. 38]</span>.</li>
<li>Transcribing errors: correct the system entry and regenerate the label <span class="gsrc">[sl. 39]</span>.</li>
<li>Dispensing errors: replace the product and relabel before dispensing <span class="gsrc">[sl. 39]</span>.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>The three steps</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">1. Legal and safe</div><div class="gcard-r"><span class="gcard-k">Question</span><br>Is the prescription legal and safe for this patient?</div><div class="gcard-r"><span class="gcard-k">What to check</span><br>Date of issuance; patient ID (address if not in the PMR, DOB if controlled); medication, strength, form, quantity, sig; brand or product selection; refills; prescriber information (DEA if controlled); signature (manual if written CII)</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 30, 32</div></div><div class="gcard"><div class="gcard-t">2. Transcribed correctly</div><div class="gcard-r"><span class="gcard-k">Question</span><br>Does the label match the prescription?</div><div class="gcard-r"><span class="gcard-k">What to check</span><br>Date of fill (often auto-populates); correct patient; drug, strength, form, quantity, sig; brand-necessary noted; refills as prescribed; prescriber information</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 30, 34</div></div><div class="gcard"><div class="gcard-t">3. Product match</div><div class="gcard-r"><span class="gcard-k">Question</span><br>Does the stock product match the transcribed product?</div><div class="gcard-r"><span class="gcard-k">What to check</span><br>Correct medication; strength; formulation (tablet, capsule, suspension, injection; ER vs IR); expiration date</div><div class="gcard-r"><span class="gcard-k">Source</span><br>sl. 30, 36</div></div></div></div>
<div class="gpt"><h5>Rules inside the steps</h5><ul>
<li>If a prescription is not legal or not safe, stop and call the prescriber before processing [(T)].</li>
<li>Administration instructions are not the same as the prescribed sig <span class="gsrc">[sl. 32]</span>.</li>
<li>Watch for brand-to-generic and look-alike sound-alike (LASA) errors in steps 2 and 3 <span class="gsrc">[sl. 34, 36]</span>.</li>
<li>Do not rely only on bottle color or look; always read the label <span class="gsrc">[sl. 36]</span>.</li>
<li>&ldquo;Daily&rdquo; and &ldquo;once a day&rdquo; are the same sig [(T)].</li>
</ul></div>
<div class="gpt"><h5>Error types and fixes</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Prescribing (often a call to the prescriber)</div><div class="gcard-r"><span class="gcard-k">Errors on the list</span><br>Prescription expired; dose or frequency too high or too low; insufficient prescribed quantity (common with liquids); inappropriate number of refills; DEA number missing (controlled)</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Contact the prescriber to clarify, correct or obtain a new prescription <span class="gsrc">[sl. 38&ndash;39]</span></div></div><div class="gcard"><div class="gcard-t">Transcribing</div><div class="gcard-r"><span class="gcard-k">Errors on the list</span><br>Incorrect patient selected or processed; incorrect drug entered; directions or sig transcribed incorrectly; number of refills transcribed incorrectly</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Correct the entry in the pharmacy system and regenerate labels (work with the technician, then reverify) <span class="gsrc">[sl. 39; EOOR st. 2, 4]</span></div></div><div class="gcard"><div class="gcard-t">Dispensing</div><div class="gcard-r"><span class="gcard-k">Errors on the list</span><br>Incorrect drug filled (for example bupropion for buspirone, generic for brand); incorrect formulation (IR vs ER); incorrect strength; insufficient quantity filled; incorrect use-before date; expired product used</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Replace the product or relabel before dispensing (work with the technician, then reverify) <span class="gsrc">[sl. 39; EOOR st. 1, 3, 9, 10, 12]</span></div></div></div>
<ul><li>&ldquo;No errors and safe to dispense as is&rdquo; is also an answer choice (EOOR stations 5 and 11).</li></ul></div>
<div class="gpt"><h5>EOOR answer key by station</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Step 1</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>Filled hydralazine for hydroxyzine; dispensing</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Correct stock bottle with technician; reverify</div></div><div class="gcard"><div class="gcard-t">Step 2</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>Label says BID, prescription says daily (transcribing); brand necessary but generic filled (dispensing)</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Correct label directions; correct stock bottle</div></div><div class="gcard"><div class="gcard-t">Step 3</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>SS filled instead of DS; dispensing</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Correct stock bottle</div></div><div class="gcard"><div class="gcard-t">Step 4</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>Jennifer Williams selected for Bill Williams; refills 3 on label, 2 on prescription; transcribing</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Technician processes correct patient; transcribe refills correctly</div></div><div class="gcard"><div class="gcard-t">5, 11</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>No errors</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Safe to dispense</div></div><div class="gcard"><div class="gcard-t">Step 6</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>Expired (&gt;6 months, CIII&ndash;V); DEA missing; wrong drug entered (not keyed); 1 mg filled for 0.5 mg</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Call prescriber (expired, DEA); correct entry; correct bottle</div></div><div class="gcard"><div class="gcard-t">Step 7</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>Dose could reach 7200 mg daily, maximum 3200 mg/day; prescribing</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Contact prescriber with a new recommendation</div></div><div class="gcard"><div class="gcard-t">Step 8</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>Expired (&gt;12 months, dangerous drug); apixaban filled for Xarelto</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>New prescription; correct bottle</div></div><div class="gcard"><div class="gcard-t">Step 9</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>60 mL dispensed, 75 mL needed; dispensing</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Fill sufficient amount</div></div><div class="gcard"><div class="gcard-t">Step 10</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>IR instead of ER; use-before wrong (bottle 1/2027, so 1/31/2027); wrong drug entered (not keyed)</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Work with technician</div></div><div class="gcard"><div class="gcard-t">Step 12</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>prn reason missing on label (transcribing); expired product</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Fix directions; fresh bottle</div></div><div class="gcard"><div class="gcard-t">Step 13</div><div class="gcard-r"><span class="gcard-k">Error and type</span><br>CII expired (&gt;1 month); CII has refills; DEA missing</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>New prescription; call provider; get DEA number</div></div></div>
<ul><li>Source: EOOR key. &ldquo;Not keyed&rdquo; is the key&rsquo;s own note on the wrong-drug-entered item.</li></ul></div>
<div class="gpt"><h5>Worked example: Prozac prescription</h5><ul>
<li>Prescription: Prozac 20 mg tablets, qty 30, 1 tablet by mouth daily, 6 refills, indication depression, dated 8/18/2026, substitution permitted <span class="gsrc">[sl. 31]</span>.</li>
<li>Step 1: dangerous drug; address present; DOB in the PMR is acceptable; 6 refills are allowed (no limit); expires 8/18/2027. Legal and safe <span class="gsrc">[sl. 33; (T)]</span>.</li>
<li>Step 2: label shows fill date 08/24/26, fluoxetine 20 mg, 1 tablet daily, 6 refills. Fill date differs from issue date by design. Transcribed correctly <span class="gsrc">[sl. 35; (T)]</span>.</li>
<li>Step 3: the stock bottle is fluvoxamine 25 mg, expiring 2/2027. Errors: incorrect stock bottle (LASA) and incorrect use-before date <span class="gsrc">[sl. 37]</span>.</li>
<li>Label shows USE BEFORE 08/24/27; the earlier stock date makes it 02/28/2027 <span class="gsrc">[sl. 37; (T)]</span>.</li>
<li>Fix: dispensing error, so replace the product with the technician and relabel; no call to the prescriber <span class="gsrc">[sl. 39; (T)]</span>.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Insufficient quantity prescribed (prescribing, call prescriber) vs insufficient quantity filled (dispensing, fill the right amount) <span class="gsrc">[sl. 38; EOOR st. 9]</span>.</li>
<li>Expired prescription (prescribing) vs expired product (dispensing) <span class="gsrc">[sl. 38]</span>.</li>
<li>Incorrect drug entered (transcribing, fix the entry) vs incorrect drug filled (dispensing, replace the bottle) <span class="gsrc">[sl. 38]</span>.</li>
<li>Prescribed dose too high (prescribing) vs incorrect strength filled (dispensing).</li>
<li>Incorrect patient: slide 7 says dispensing, slide 38 and the key say transcribing; key transcribing.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Prescription, label and stock bottle shown together, with a select-all list of errors (the slide 38 list) and a request to describe the fix (lab format) [(T)].</li>
<li>Example stem: &ldquo;Prescription: hydroxyzine. Label: hydroxyzine. Bottle: hydralazine. Select all errors.&rdquo;</li>
<li>Step 1: check the prescription alone for legality and safety (date, category, refills, DEA, dose).</li>
<li>Step 2: compare prescription to label field by field.</li>
<li>Step 3: compare label to bottle: drug, strength, formulation, expiration.</li>
<li>Step 4: select each error, then match the fix to its type. One prescription can hold several errors.</li>
<li>The outpatient written exam on 11/23 is built from Dr. Parsons&rsquo; and Dr. Lahoud&rsquo;s material; the errors-and-omissions lecture is a large share of Dr. Lahoud&rsquo;s questions [(T) 11/16].</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Calling the prescriber for a transcribing or dispensing error; the technician fixes those.</li>
<li>Missing the wrong stock bottle because the label is correct; read the bottle against the label.</li>
<li>Flagging the fill date as an error because it differs from the issue date.</li>
<li>Counting an indication missing from a dangerous-drug prescription as an error.</li>
<li>Selecting only one error when the label date and the bottle are both wrong.</li>
<li>Treating a brand-necessary prescription filled with generic as a transcribing error; it is incorrect drug filled.</li>
</ul></div>
<dl class="gwords">
<dt>LASA</dt><dd>Look-alike sound-alike drug names, for example fluoxetine and fluvoxamine [(T)].</dd>
<dt>ER / IR</dt><dd>Extended release / immediate release <span class="gsrc">[sl. 36]</span>.</dd>
<dt>SS / DS</dt><dd>Single strength / double strength <span class="gsrc">[EOOR st. 3]</span>.</dd>
</dl>
</section>

<section class="gobj" id="gl-5">
<h3>5. Counseling</h3>
<div class="gbar"><span>SECTION 5</span><b>Run a counseling session with the 3 prime questions and cover the rubric elements in order.</b><i>Intro to Dispensing deck, slides 40&ndash;45; 8/24 transcript (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>The 3 prime questions: what the doctor said it is for, how to take it, what to expect <span class="gsrc">[sl. 43]</span>.</li>
<li>Counseling improves adherence, prevents harm, empowers patients and reduces healthcare costs <span class="gsrc">[sl. 42]</span>.</li>
<li>Confirm the patient with at least two identifiers <span class="gsrc">[sl. 44]</span>.</li>
<li>Use Lexicomp or Micromedex to find counseling content quickly <span class="gsrc">[sl. 44]</span>.</li>
<li>Close with teach-back and an opportunity for follow-up <span class="gsrc">[sl. 44]</span>.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>The 3 prime questions</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">#1</div><div class="gcard-r"><span class="gcard-k">Ask the patient</span><br>&ldquo;What did your provider tell you this medication was for?&rdquo;</div><div class="gcard-r"><span class="gcard-k">Then provide</span><br>The indication</div></div><div class="gcard"><div class="gcard-t">#2</div><div class="gcard-r"><span class="gcard-k">Ask the patient</span><br>&ldquo;How did your provider tell you to use this medication?&rdquo;</div><div class="gcard-r"><span class="gcard-k">Then provide</span><br>Dosage regimen (strength, dose, route, frequency, duration); technique if applicable; self-monitoring; missed doses; refills; storage</div></div><div class="gcard"><div class="gcard-t">#3</div><div class="gcard-r"><span class="gcard-k">Ask the patient</span><br>&ldquo;What did your provider tell you to expect?&rdquo;</div><div class="gcard-r"><span class="gcard-k">Then provide</span><br>Common side effects; expected efficacy and time to effect; serious warnings</div></div></div>
<ul><li>Source: sl. 43&ndash;44.</li></ul></div>
<div class="gpt"><h5>Rubric order</h5><ul>
<li>Introduction: introduce yourself as a pharmacist intern; confirm the patient or agent with at least two identifiers; explain the purpose <span class="gsrc">[sl. 44]</span>.</li>
<li>Obtaining information: allergies and reaction; pregnancy or breastfeeding if applicable; other medicines including OTC, vitamins, minerals and herbals; concerns or questions <span class="gsrc">[sl. 44]</span>.</li>
<li>Competence: provide the medication name (brand and generic) before prime question #1 <span class="gsrc">[sl. 44]</span>.</li>
<li>Communication: effective non-verbal behavior; logical order; accurate information; plain language without jargon; open-ended questions, not compounded or leading ones; teach-back; closure with follow-up <span class="gsrc">[sl. 44]</span>.</li>
</ul></div>
<div class="gpt"><h5>Why counseling matters and how it is practiced</h5><ul>
<li>Adherence rises when the patient understands and agrees to the regimen [(T)].</li>
<li>Counseling reduces return visits to the clinic or hospital [(T)].</li>
<li>Resources allowed in lab: lecture notes plus Lexidrug or Micromedex <span class="gsrc">[sl. 45]</span>.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Prime question vs the information that follows it: ask first, then fill gaps.</li>
<li>Open-ended vs leading or compounded questions: only open-ended questions score <span class="gsrc">[sl. 44]</span>.</li>
<li>Counseling vs prescription review: separate pharmacist roles <span class="gsrc">[sl. 10]</span>.</li>
<li>Number of identifiers: at least two, not one <span class="gsrc">[sl. 44]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Recall. Example stem: &ldquo;Which set lists the 3 prime questions?&rdquo; Answer: what is it for, how to take it, what to expect.</li>
<li>Rubric item. Example stem: &ldquo;How many patient identifiers must be confirmed?&rdquo; Answer: at least two.</li>
<li>Step 1: sort the item to a prime question.</li>
<li>Step 2: check whether it asks for the patient&rsquo;s belief or the pharmacist&rsquo;s information.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Replacing &ldquo;what to expect&rdquo; with cost, storage or allergies.</li>
<li>Choosing &ldquo;counseling replaces prescription review&rdquo; as a reason counseling is important.</li>
<li>Using medical jargon or a yes/no leading question.</li>
</ul></div>
</section>

<section class="gobj" id="gl-6">
<h3>6. DEENT lab, part 1: acne and QuEST/SCHOLAR-MAC</h3>
<div class="gbar"><span>SECTION 6</span><b>Assess acne with SCHOLAR-MAC, decide self-care candidacy, choose a product and counsel on it.</b><i>Week 14 DEENT deck (W14); Patel acne deck (Acne sl.); 11/16 and 11/10 recordings (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>QuEST: Quickly assess, Establish self-care candidacy, Suggest strategies, Talk about the product <span class="gsrc">[W14]</span>.</li>
<li>SCHOLAR-MAC supplies the quick assessment questions <span class="gsrc">[W14]</span>.</li>
<li>Severity is set by lesion counts: one, some, many <span class="gsrc">[Acne sl. 7&ndash;8; (T)]</span>.</li>
<li>Severe acne, possible rosacea, exacerbating factors and comedogenic drugs are not self-care <span class="gsrc">[Acne sl. 18]</span>.</li>
<li>Benzoyl peroxide is the preferred first OTC agent <span class="gsrc">[Acne sl. 25]</span>.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>QuEST and SCHOLAR-MAC</h5><ul>
<li>Q: quickly assess with SCHOLAR-MAC <span class="gsrc">[W14]</span>.</li>
<li>E: establish that the patient is an appropriate self-care candidate; exclusions are checked here <span class="gsrc">[W14; Acne sl. 18]</span>.</li>
<li>S: suggest self-care strategies <span class="gsrc">[W14]</span>.</li>
<li>T: talk about the selected product: administration or application, efficacy (what to expect), safety (adverse effects) <span class="gsrc">[W14]</span>.</li>
<li>SCHOLAR-MAC: Symptoms, Characteristics, History, Onset, Location, Aggravating factors, Remitting factors, Medications, Allergies, Conditions <span class="gsrc">[Acne sl. 10, 18]</span>.</li>
<li>Ask about Medications to find drugs that cause acne <span class="gsrc">[Acne sl. 10]</span>.</li>
</ul></div>
<div class="gpt"><h5>Severity and first line</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Mildly clear</div><div class="gcard-r"><span class="gcard-k">Lesions</span><br>Rare non-inflammatory lesions; no more than one small lesion <span class="gsrc">[Acne sl. 7]</span></div><div class="gcard-r"><span class="gcard-k">First line (slide 40)</span><br>Benzoyl peroxide alone, or essential oils, or no product</div></div><div class="gcard"><div class="gcard-t">Mild</div><div class="gcard-r"><span class="gcard-k">Lesions</span><br>Some non-inflammatory lesions; no more than a few papules and pustules; no nodules; minimal scarring <span class="gsrc">[Acne sl. 7]</span></div><div class="gcard-r"><span class="gcard-k">First line (slide 40)</span><br>One topical agent: benzoyl peroxide or a topical retinoid; topical combinations are a listed alternative</div></div><div class="gcard"><div class="gcard-t">Moderate</div><div class="gcard-r"><span class="gcard-k">Lesions</span><br>Many non-inflammatory and some inflammatory lesions; no more than one nodule; mild scarring <span class="gsrc">[Acne sl. 8]</span></div><div class="gcard-r"><span class="gcard-k">First line (slide 40)</span><br>Topical combination, for example benzoyl peroxide plus a topical retinoid</div></div><div class="gcard"><div class="gcard-t">Severe</div><div class="gcard-r"><span class="gcard-k">Lesions</span><br>A few nodular lesions with moderate to extensive scarring <span class="gsrc">[Acne sl. 8]</span>; (T) Dr. Patel: more than one nodule</div><div class="gcard-r"><span class="gcard-k">First line (slide 40)</span><br>Refer; prescriber-directed therapy such as an oral antibiotic with a topical combination <span class="gsrc">[Acne sl. 18, 29]</span></div></div></div>
<ul><li>Dr. Patel used the words one, some and many on exam cases, and described a stepwise order; slide 40 also lists oral regimens as moderate first line [(T)].</li></ul></div>
<div class="gpt"><h5>Self-care exclusions</h5><ul>
<li>Severe acne <span class="gsrc">[Acne sl. 18]</span>.</li>
<li>Possible rosacea <span class="gsrc">[Acne sl. 18]</span>.</li>
<li>Exacerbating factors <span class="gsrc">[Acne sl. 18]</span>.</li>
<li>Comedogenic drugs: corticosteroids, androgens, progesterone contraceptives, antiepileptics, SSRIs, lithium <span class="gsrc">[Acne sl. 10]</span>.</li>
<li>Dr. Patel called drug-caused acne a straight referral to dermatology [(T)].</li>
</ul></div>
<div class="gpt"><h5>OTC products</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Benzoyl peroxide</div><div class="gcard-r"><span class="gcard-k">Use and strength</span><br>OTC 2.5&ndash;10%, 1&ndash;2 times daily; bactericidal, keratolytic and comedolytic <span class="gsrc">[Acne sl. 23, 26]</span></div><div class="gcard-r"><span class="gcard-k">Counseling points</span><br>Bleaches hair and clothing; drying; photosensitivity; contact allergy; irritation most common and more likely with higher strengths; side effects settle in 1&ndash;2 weeks</div></div><div class="gcard"><div class="gcard-t">Adapalene (Differin) 0.1%</div><div class="gcard-r"><span class="gcard-k">Use and strength</span><br>Topical retinoid; FDA limits OTC use to persons over 12 <span class="gsrc">[Acne sl. 27]</span></div><div class="gcard-r"><span class="gcard-k">Counseling points</span><br>Apply at night; separate from benzoyl peroxide (am vs pm); moisturizer and sunscreen; not with sulfur, resorcinol, salicylic acid or vitamin C products (T: vitamin C may be used if kept separate)</div></div><div class="gcard"><div class="gcard-t">Salicylic acid</div><div class="gcard-r"><span class="gcard-k">Use and strength</span><br>Once or twice daily; maximum effect 4&ndash;6 weeks; limited efficacy data <span class="gsrc">[Acne sl. 29]</span></div><div class="gcard-r"><span class="gcard-k">Counseling points</span><br>Not preferred over benzoyl peroxide</div></div></div></div>
<div class="gpt"><h5>Non-drug care and application</h5><ul>
<li>Cleanse twice daily with a mild soap or non-soap cleanser; avoid abrasives and excessive cleansing <span class="gsrc">[Acne sl. 19]</span>.</li>
<li>Remove makeup with an oil-based cleanser before a water-based one <span class="gsrc">[Acne sl. 19]</span>.</li>
<li>Match the vehicle to skin type; gels, solutions and lotions for oily skin <span class="gsrc">[Acne sl. 24]</span>.</li>
<li>Apply: wash gently, pat dry, wait 20&ndash;30 minutes, apply a thin layer in the evening or before bedtime; avoid eyes, ears, nostrils and mouth <span class="gsrc">[Acne sl. 42]</span>.</li>
<li>If stinging or irritation develops, use less often or stop temporarily <span class="gsrc">[Acne sl. 42]</span>.</li>
<li>Visible benefit takes 8 weeks or more; expect a 10&ndash;25% drop in lesion count within 4&ndash;8 weeks; pharmacist check every 4&ndash;8 weeks <span class="gsrc">[Acne sl. 41, 44]</span>.</li>
</ul></div>
<div class="gpt"><h5>Prescription therapy to recognize</h5><ul>
<li>Oral doxycycline and minocycline: patients over 12 (tooth discoloration under 12); avoid in pregnancy; photosensitivity; not with isotretinoin; used with topicals; reassess at 3&ndash;4 months <span class="gsrc">[Acne sl. 33, 38, 40]</span>.</li>
<li>Oral isotretinoin: boxed warning for birth defects; two negative pregnancy tests before starting, a monthly test, two forms of birth control from 1 month before to 1 month after treatment; fill within a 7-day window (30 days if the patient cannot get pregnant) <span class="gsrc">[Acne sl. 37&ndash;38]</span>.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Mildly clear vs mild: mildly clear has rare lesions (one small lesion at most); mild has some non-inflammatory lesions and a few papules or pustules.</li>
<li>Mild vs moderate: mild has no nodules; moderate has many comedones, some inflammatory lesions and at most one nodule.</li>
<li>Moderate vs severe: moderate has at most one nodule and mild scarring; severe has a few nodular lesions with moderate to extensive scarring <span class="gsrc">[Acne sl. 8]</span>; (T) Dr. Patel: more than one nodule.</li>
<li>Establish step vs Quickly assess: Establish is where an exclusion triggers referral <span class="gsrc">[Acne sl. 18]</span>.</li>
<li>Benzoyl peroxide vs salicylic acid: benzoyl peroxide is preferred; salicylic acid has limited data.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>QuEST case. Example stem: &ldquo;A 17-year-old has many comedones, some papules and pustules and one nodule on the jaw; scarring is mild. What is the severity and first line?&rdquo;</li>
<li>Step 1: count lesion types and nodules (one, some, many).</li>
<li>Step 2: check exclusions (severe, rosacea, exacerbating factors, comedogenic drugs, SCHOLAR-MAC medications).</li>
<li>Step 3: pick the first-line row for that severity; then counsel on administration, efficacy and safety.</li>
<li>Product question. Example stem: &ldquo;Differin and benzoyl peroxide are both started; what is the plan?&rdquo; Answer: adapalene at night, benzoyl peroxide in the morning, with sunscreen.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Treating one nodule as severe; moderate allows up to one nodule.</li>
<li>Recommending OTC adapalene for a child of 10; the OTC limit is over 12.</li>
<li>Stopping therapy at 3 weeks; benefit takes 8 weeks or more.</li>
<li>Putting a retinoid and benzoyl peroxide together at the same time of day.</li>
<li>Giving a tetracycline in pregnancy or alongside isotretinoin.</li>
<li>Recommending self-care to a patient whose acne started after lithium.</li>
</ul></div>
</section>

<section class="gobj" id="gl-7">
<h3>7. DEENT lab, part 2: ophthalmic review</h3>
<div class="gbar"><span>SECTION 7</span><b>Sort dry eye, allergic, bacterial or viral conjunctivitis and POAG, then review a glaucoma prescription.</b><i>Lab answer key (Key); Dr. Lam ophthalmic and glaucoma decks (Eye sl., Glau. sl.); W14 deck; 11/19 recording (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>Part 2 sorts four conditions: dry eye disease, allergic conjunctivitis, bacterial or viral conjunctivitis, primary open-angle glaucoma (POAG) <span class="gsrc">[W14]</span>.</li>
<li>Itch marks allergy; lid crusting marks infection; grittiness marks dry eye; no symptoms marks POAG [Key; Eye sl. 7, 28&ndash;29].</li>
<li>Only POAG is treated by lowering intraocular pressure (IOP) [Key].</li>
<li>Prostaglandin analogs are first line for POAG [Key; Glau. sl. 19].</li>
<li>Errors on a glaucoma prescription are corrected with SBAR communication <span class="gsrc">[W14]</span>.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Which is which (lab answer key)</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Presentation</div><div class="gcard-r"><span class="gcard-k">Dry eye</span><br>Mildly red eye; sandy, gritty, foreign-body feeling</div><div class="gcard-r"><span class="gcard-k">Allergic conjunctivitis</span><br>Itching, tearing, red eyes</div><div class="gcard-r"><span class="gcard-k">Bacterial or viral conjunctivitis</span><br>Tearing and lid crusting</div><div class="gcard-r"><span class="gcard-k">POAG</span><br>No symptoms until substantial visual field loss</div></div><div class="gcard"><div class="gcard-t">Treatment approach</div><div class="gcard-r"><span class="gcard-k">Dry eye</span><br>Symptomatic relief; referral vital for diagnosis and treatment</div><div class="gcard-r"><span class="gcard-k">Allergic conjunctivitis</span><br>Avoid the allergen; tears first</div><div class="gcard-r"><span class="gcard-k">Bacterial or viral conjunctivitis</span><br>Symptomatic care; referral for an antibiotic if applicable</div><div class="gcard-r"><span class="gcard-k">POAG</span><br>Reduce IOP</div></div><div class="gcard"><div class="gcard-t">Compress</div><div class="gcard-r"><span class="gcard-k">Dry eye</span><br>Warm</div><div class="gcard-r"><span class="gcard-k">Allergic conjunctivitis</span><br>Cold</div><div class="gcard-r"><span class="gcard-k">Bacterial or viral conjunctivitis</span><br>Cold</div><div class="gcard-r"><span class="gcard-k">POAG</span><br>Not helpful</div></div><div class="gcard"><div class="gcard-t">Non-drug</div><div class="gcard-r"><span class="gcard-k">Dry eye</span><br>Avoid environments that raise tear evaporation, such as dusty places</div><div class="gcard-r"><span class="gcard-k">Allergic conjunctivitis</span><br>Avoid the allergen</div><div class="gcard-r"><span class="gcard-k">Bacterial or viral conjunctivitis</span><br>Compress</div><div class="gcard-r"><span class="gcard-k">POAG</span><br>Limit drugs that raise IOP</div></div><div class="gcard"><div class="gcard-t">First line</div><div class="gcard-r"><span class="gcard-k">Dry eye</span><br>Ocular lubricants: tears or bland ointments</div><div class="gcard-r"><span class="gcard-k">Allergic conjunctivitis</span><br>Tears, then antihistamines if symptoms persist</div><div class="gcard-r"><span class="gcard-k">Bacterial or viral conjunctivitis</span><br>Ocular antimicrobial, with or without tears or antihistamines for symptoms</div><div class="gcard-r"><span class="gcard-k">POAG</span><br>Prostaglandin analogs</div></div><div class="gcard"><div class="gcard-t">Example</div><div class="gcard-r"><span class="gcard-k">Dry eye</span><br>Artificial tears once or twice a day, on arising and before retiring</div><div class="gcard-r"><span class="gcard-k">Allergic conjunctivitis</span><br>Ketotifen twice a day, age 3 and older</div><div class="gcard-r"><span class="gcard-k">Bacterial or viral conjunctivitis</span><br>Ciprofloxacin solution 1&ndash;2 drops every 2 hours for 2 days, then every 4 hours for 5 days</div><div class="gcard-r"><span class="gcard-k">POAG</span><br>Latanoprost once daily; refrigerate until opened, then room temperature</div></div></div>
<ul>
<li>Source: Key rows, as verified in lab.</li>
<li>Conflict: the Key lists an ocular antimicrobial as first line for bacterial or viral conjunctivitis, while Dr. Lam&rsquo;s slide 34 gives cold compresses and referral. The exam keys the lab Key.</li>
</ul></div>
<div class="gpt"><h5>Dry eye details</h5><ul>
<li>Risk factors: older age, female sex, environment, comorbidities, surgery, preservatives such as benzalkonium chloride (BAK), and drugs (anticholinergics, diuretics, decongestants, oral contraceptives or hormone replacement, corticosteroids) <span class="gsrc">[Eye sl. 6]</span>.</li>
<li>Refer every dry eye patient; OTC artificial tears may still be recommended <span class="gsrc">[Eye sl. 10, 14]</span>.</li>
<li>Artificial tears: 1&ndash;2 drops once or twice daily, up to 3&ndash;4 times daily or hourly; preservative-free preferred; duration set by response <span class="gsrc">[Eye sl. 14]</span>.</li>
<li>Bland ointment: longer retention; blurred vision and hypersensitivity <span class="gsrc">[Eye sl. 15]</span>.</li>
<li>Prescription options: cyclosporine (Restasis, Cequa), lifitegrast (Xiidra), topical corticosteroids, varenicline nasal spray (Tyrvaya) <span class="gsrc">[Eye sl. 17&ndash;21]</span>.</li>
<li>Cyclosporine: burning, stinging and foreign-body feeling are common and look like dry eye; used about 6 months or longer [(T)]; slide number not verified (Smith deck not on hand).</li>
<li>Corticosteroids: very short use only; chronic use risks glaucoma [(T)].</li>
</ul></div>
<div class="gpt"><h5>Exclusions from self-treatment (dry eye and conjunctivitis)</h5><ul>
<li>Eye pain; ocular trauma; chemical exposure; exposure to heat (not sun); blurred vision not from eye ointments; light sensitivity; signs of eyelid infection other than a stye <span class="gsrc">[Eye sl. 11, 30]</span>.</li>
</ul></div>
<div class="gpt"><h5>Allergic conjunctivitis details</h5><ul>
<li>Goals: remove or avoid the allergen; limit reaction severity; symptomatic relief; protect the ocular surface <span class="gsrc">[Eye sl. 31]</span>.</li>
<li>Subtypes: seasonal (itching, tearing, red eyes); vernal and giant papillary add mucous discharge; giant papillary adds contact lens intolerance <span class="gsrc">[Eye sl. 29]</span>.</li>
<li>Itch arises because the allergen causes mast cells to release histamine [(T)].</li>
<li>Allergen avoidance: pollen count, closed doors and windows, hypoallergenic bedding, washing clothes, showering, air conditioning, filters, sunglasses <span class="gsrc">[Eye sl. 33]</span>.</li>
<li>First line OTC: artificial tears plus a dual-acting antihistamine and mast cell stabilizer <span class="gsrc">[Eye sl. 35]</span>.</li>
<li>Refer if no resolution after 72 hours of correct treatment <span class="gsrc">[Eye sl. 41]</span>.</li>
</ul>
<div class="gcards"><div class="gcard"><div class="gcard-t">OTC dual-acting</div><div class="gcard-r"><span class="gcard-k">Agents</span><br>Olopatadine (Pataday), alcaftadine, ketotifen</div><div class="gcard-r"><span class="gcard-k">Points</span><br>Itch relief <span class="gsrc">[Eye sl. 37]</span></div></div><div class="gcard"><div class="gcard-t">Prescription dual-acting</div><div class="gcard-r"><span class="gcard-k">Agents</span><br>Azelastine, bepotastine, epinastine</div><div class="gcard-r"><span class="gcard-k">Points</span><br><span class="gsrc">[Eye sl. 37]</span></div></div><div class="gcard"><div class="gcard-t">OTC decongestants</div><div class="gcard-r"><span class="gcard-k">Agents</span><br>Naphazoline, tetrahydrozoline, brimonidine 0.025%</div><div class="gcard-r"><span class="gcard-k">Points</span><br>Redness only; beyond 72 hours rebound redness; may raise blood pressure <span class="gsrc">[Eye sl. 39]</span></div></div></div></div>
<div class="gpt"><h5>POAG and glaucoma drugs</h5><ul>
<li>POAG is silent until substantial field loss; feeling well does not show control [Glau. sl. 12].</li>
<li>Goal: lower IOP, with the target set by an eye care professional [Glau. sl. 14].</li>
<li>Severe eye pain with headache, nausea, vomiting, halos and sudden vision loss is not POAG; send for emergency eye evaluation [Glau. sl. 91&ndash;92].</li>
<li>Usual order of classes: prostaglandin analog, beta blocker, alpha-2 agonist, topical carbonic anhydrase inhibitor (CAI), cholinergic, Rho kinase inhibitor [Glau. sl. 63].</li>
</ul>
<div class="gcards"><div class="gcard"><div class="gcard-t">Prostaglandin analog</div><div class="gcard-r"><span class="gcard-k">Examples and dosing</span><br>Latanoprost, bimatoprost (Lumigan); once daily, at night</div><div class="gcard-r"><span class="gcard-k">IOP lowering</span><br>Up to 33%</div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>Macular edema; herpetic keratitis; blurred vision, stinging, iris and eyelash pigmentation, eyelash growth [Glau. sl. 19&ndash;21]</div></div><div class="gcard"><div class="gcard-t">Beta blocker</div><div class="gcard-r"><span class="gcard-k">Examples and dosing</span><br>Timolol solution twice daily; Timoptic XE gel once daily</div><div class="gcard-r"><span class="gcard-k">IOP lowering</span><br>20&ndash;30%</div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>Asthma or COPD, heart block, uncompensated cardiac failure, oral beta blocker; bradycardia, hypotension, bronchospasm [Glau. sl. 32&ndash;34]</div></div><div class="gcard"><div class="gcard-t">Alpha-2 agonist</div><div class="gcard-r"><span class="gcard-k">Examples and dosing</span><br>Third class in the usual order; combination drops on slide 69 are twice or three times daily</div><div class="gcard-r"><span class="gcard-k">IOP lowering</span><br>18&ndash;27%</div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>[Glau. sl. 41, 69]</div></div><div class="gcard"><div class="gcard-t">Topical CAI</div><div class="gcard-r"><span class="gcard-k">Examples and dosing</span><br>Dorzolamide (Trusopt) 2% three times daily; brinzolamide 1% (Azopt) suspension; Cosopt (with timolol) twice daily; Cosopt PF preservative-free</div><div class="gcard-r"><span class="gcard-k">IOP lowering</span><br>15&ndash;26%</div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>Sickle cell disease [Glau. sl. 35, 51, 69]</div></div><div class="gcard"><div class="gcard-t">Cholinergic</div><div class="gcard-r"><span class="gcard-k">Examples and dosing</span><br>Fifth in the usual order</div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>Asthma [Glau. sl. 59, 63]</div></div><div class="gcard"><div class="gcard-t">Rho kinase inhibitor</div><div class="gcard-r"><span class="gcard-k">Examples and dosing</span><br>Netarsudil 0.02% (Rhopressa) at bedtime; Rocklatan at bedtime</div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>[Glau. sl. 62]</div></div><div class="gcard"><div class="gcard-t">Oral CAI (last line)</div><div class="gcard-r"><span class="gcard-k">Examples and dosing</span><br>Acetazolamide, methazolamide</div><div class="gcard-r"><span class="gcard-k">IOP lowering</span><br>25&ndash;40%</div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>Systemic acidosis [Glau. sl. 51&ndash;53]</div></div></div></div>
<div class="gpt"><h5>Drop technique</h5><ul>
<li>Close the eyelids after each drop; this lowers drainage and systemic absorption [Glau. sl. 71&ndash;72].</li>
<li>Wait 5 minutes between two solutions [Glau. sl. 74].</li>
<li>Order of application: solution, then suspension, then ointment or gel-forming solution [Glau. sl. 75].</li>
<li>Contact lenses: remove first, wait 15 minutes before reinserting, especially with BAK [Glau. sl. 83; Eye sl. 46; (T)].</li>
<li>If the preservative irritates, switch to a preservative-free product [Glau. sl. 35; Eye sl. 43].</li>
</ul></div>
<div class="gpt"><h5>Glaucoma prescription review with SBAR</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Bimatoprost 0.01% OU twice daily</div><div class="gcard-r"><span class="gcard-k">Error type</span><br>Prescribing: frequency too high (once daily is the dose)</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Call the prescriber [Glau. sl. 20; (T)]</div></div><div class="gcard"><div class="gcard-t">Trusopt 2% three times daily; label says twice daily</div><div class="gcard-r"><span class="gcard-k">Error type</span><br>Transcribing: sig</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Re-enter the sig and regenerate the label [Glau. sl. 51]</div></div><div class="gcard"><div class="gcard-t">Netarsudil at bedtime; label says every morning</div><div class="gcard-r"><span class="gcard-k">Error type</span><br>Transcribing: sig</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Re-enter the sig and regenerate the label [Glau. sl. 62]</div></div><div class="gcard"><div class="gcard-t">Lumigan prescribed; Latisse filled</div><div class="gcard-r"><span class="gcard-k">Error type</span><br>Dispensing: wrong product</div><div class="gcard-r"><span class="gcard-k">Fix</span><br>Replace the product and relabel [Glau. sl. 19]</div></div></div>
<ul>
<li>Use the section 4 three-step review: legal and safe, then label against prescription, then bottle against label <span class="gsrc">[sl. 30]</span>.</li>
<li>SBAR is the communication format for correcting the error <span class="gsrc">[W14]</span>: <b>Situation</b> (why you are calling), <b>Background</b> (who the patient is, the prescription, the clinical facts), <b>Assessment</b> (what the actual problem is and why it matters), <b>Recommendation</b> (what should be done to correct it) <span class="gsrc">[W11 OSCE deck]</span>.</li>
<li>Background is the clinical fact; Assessment is the problem. Example: Background &ldquo;the maximum prescribed dose of ibuprofen is 3.2 g/day&rdquo;; Assessment &ldquo;the total daily dose prescribed is too high&rdquo; <span class="gsrc">[W11 OSCE deck]</span>.</li>
<li>This definition applies to a prescription-error SBAR (the prescription-error SBAR taught in the Week 11 and Week 14 labs). For a vaccine-needs SBAR, the Immunizations slide 22 example applies instead: Background = patient characteristics, Assessment = what the AAFP schedule recommends (see the Parsons guide, section 8).</li>
<li>Prescribing errors go to the prescriber; transcribing and dispensing errors go to the technician <span class="gsrc">[sl. 38&ndash;39; EOOR key]</span>.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Dry eye vs allergic: grittiness vs itch.</li>
<li>Allergic vs bacterial or viral: itch (allergic) vs lid crusting (infectious); tearing occurs in all types <span class="gsrc">[Eye sl. 28&ndash;29]</span>.</li>
<li>Warm vs cold compress: dry eye warm; both conjunctivitis types cold; POAG none.</li>
<li>Giant papillary conjunctivitis vs seasonal: contact lens intolerance and mucous discharge.</li>
<li>Latanoprost frequency vs timolol: latanoprost once daily; timolol solution twice daily; the gel once daily.</li>
<li>Lumigan vs Latisse: both bimatoprost; Lumigan is for glaucoma [Glau. sl. 19].</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Which-is-which grid or match. Example stem: &ldquo;Ketotifen dosed twice daily for patients 3 and older is the example for which condition?&rdquo; Answer: allergic conjunctivitis.</li>
<li>Step 1: find the distinguishing feature (itch, crusting, gritty, silent).</li>
<li>Step 2: read across that column of the grid.</li>
<li>Prescription review. Example stem: &ldquo;Prescription says dorzolamide TID; label says BID. Error and fix?&rdquo;</li>
<li>Step 1: is the prescription correct for the drug? Yes, TID.</li>
<li>Step 2: the label differs, so transcribing; re-enter the sig.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Choosing tearing as the separating feature; it appears in every type.</li>
<li>Choosing artificial tears alone for allergic first line; the lab key adds antihistamines if symptoms persist.</li>
<li>Calling a wrong frequency written by the prescriber a transcribing error.</li>
<li>Keeping the decongestant beyond 72 hours.</li>
<li>Skipping the 15-minute lens wait or the 5-minute wait between solutions.</li>
</ul></div>
</section>

<section class="gobj" id="gl-8">
<h3>8. DEENT lab, part 3: psoriasis and scaly dermatoses</h3>
<div class="gbar"><span>SECTION 8</span><b>Sort dandruff, seborrheic dermatitis and psoriasis, then match severity and therapy.</b><i>Patel scaly dermatoses deck (Scaly sl.); 11/10 and 11/11 recordings (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>Dandruff has no inflammation; seborrheic dermatitis and psoriasis do <span class="gsrc">[Scaly sl. 6]</span>.</li>
<li>Seborrheic dermatitis: yellow, greasy scales on red skin; psoriasis: silvery white scales on sharp red plaques <span class="gsrc">[Scaly sl. 6]</span>.</li>
<li>Psoriasis severity by body surface area (BSA): mild 5% or less, moderate 8% or more, severe 10% or more <span class="gsrc">[Scaly sl. 26]</span>.</li>
<li>Mild to moderate psoriasis: topical therapy first <span class="gsrc">[Scaly sl. 35&ndash;36]</span>.</li>
<li>Ketoconazole shampoo is first line for seborrheic dermatitis <span class="gsrc">[Scaly sl. 16]</span>.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>The three conditions</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Appearance</div><div class="gcard-r"><span class="gcard-k">Dandruff</span><br>Thin white or grey flakes</div><div class="gcard-r"><span class="gcard-k">Seborrheic dermatitis</span><br>Yellow, greasy scales on red skin</div><div class="gcard-r"><span class="gcard-k">Psoriasis</span><br>Discrete, symmetrical red plaques with sharp borders; silvery white scales; bleeding points</div></div><div class="gcard"><div class="gcard-t">Location</div><div class="gcard-r"><span class="gcard-k">Dandruff</span><br>Scalp</div><div class="gcard-r"><span class="gcard-k">Seborrheic dermatitis</span><br>Scalp, ears, face</div><div class="gcard-r"><span class="gcard-k">Psoriasis</span><br>Scalp, elbows, knees, trunk, lower extremities</div></div><div class="gcard"><div class="gcard-t">Inflammation</div><div class="gcard-r"><span class="gcard-k">Dandruff</span><br>Absent</div><div class="gcard-r"><span class="gcard-k">Seborrheic dermatitis</span><br>Present</div><div class="gcard-r"><span class="gcard-k">Psoriasis</span><br>Present</div></div><div class="gcard"><div class="gcard-t">Epidermal hyperplasia</div><div class="gcard-r"><span class="gcard-k">Dandruff</span><br>Absent</div><div class="gcard-r"><span class="gcard-k">Seborrheic dermatitis</span><br>Present</div><div class="gcard-r"><span class="gcard-k">Psoriasis</span><br>Present</div></div><div class="gcard"><div class="gcard-t">Cause</div><div class="gcard-r"><span class="gcard-k">Dandruff</span><br>Malassezia</div><div class="gcard-r"><span class="gcard-k">Seborrheic dermatitis</span><br>Malassezia</div><div class="gcard-r"><span class="gcard-k">Psoriasis</span><br>T-lymphocyte mediated; no Malassezia link</div></div></div>
<ul><li>Source: Scaly sl. 6, 8, 11, 12, 21; (T). Cradle cap is infant scalp scaling.</li></ul></div>
<div class="gpt"><h5>OTC ingredients (slide 7)</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Hydrocortisone 0.5&ndash;1%</div><div class="gcard-r"><span class="gcard-k">Dandruff</span><br>No</div><div class="gcard-r"><span class="gcard-k">Seborrheic dermatitis</span><br>Yes</div><div class="gcard-r"><span class="gcard-k">Psoriasis</span><br>Yes</div></div><div class="gcard"><div class="gcard-t">Sulfur 2&ndash;5%</div><div class="gcard-r"><span class="gcard-k">Dandruff</span><br>Yes</div><div class="gcard-r"><span class="gcard-k">Seborrheic dermatitis</span><br>Yes</div><div class="gcard-r"><span class="gcard-k">Psoriasis</span><br>No</div></div><div class="gcard"><div class="gcard-t">Coal tar 0.5&ndash;5%</div><div class="gcard-r"><span class="gcard-k">Dandruff</span><br>Yes</div><div class="gcard-r"><span class="gcard-k">Seborrheic dermatitis</span><br>Yes</div><div class="gcard-r"><span class="gcard-k">Psoriasis</span><br>Yes</div></div><div class="gcard"><div class="gcard-t">Pyrithione zinc, selenium sulfide</div><div class="gcard-r"><span class="gcard-k">Dandruff</span><br>Medicated shampoos for moderate to severe</div><div class="gcard-r"><span class="gcard-k">Seborrheic dermatitis</span><br>Second-line shampoos</div></div></div>
<ul><li>Hydrocortisone (dandruff) and sulfur (psoriasis) hold the only two &ldquo;no&rdquo; cells; coal tar is listed for all three conditions <span class="gsrc">[Scaly sl. 7]</span>.</li>
<li>Coal tar is also a medicated shampoo for moderate to severe dandruff <span class="gsrc">[Scaly sl. 9]</span> and a second-line shampoo for seborrheic dermatitis <span class="gsrc">[Scaly sl. 16]</span>.</li></ul></div>
<div class="gpt"><h5>Dandruff and seborrheic dermatitis care</h5><ul>
<li>Mild dandruff (intermittent, mild inflammation): non-medicated shampoo daily or every other day <span class="gsrc">[Scaly sl. 9]</span>.</li>
<li>Moderate to severe dandruff: medicated shampoo left on 3&ndash;5 minutes; daily for 1 week, then 2&ndash;3 times weekly for 2&ndash;3 weeks, then weekly <span class="gsrc">[Scaly sl. 9]</span>.</li>
<li>Seborrheic dermatitis taper is longer: 1&ndash;2 weeks daily, then 4 weeks <span class="gsrc">[Scaly sl. 16; (T)]</span>.</li>
<li>Seborrheic dermatitis first line: ketoconazole shampoo; second line: selenium sulfide, pyrithione zinc, ciclopirox, coal tar <span class="gsrc">[Scaly sl. 16; (T)]</span>.</li>
<li>Consult a provider if it worsens or lasts longer than 7 days <span class="gsrc">[Scaly sl. 16]</span>.</li>
<li>Infant face: mild cleanser and emollient; do not suggest corticosteroids <span class="gsrc">[Scaly sl. 18]</span>.</li>
<li>Infant scalp: baby oil or vegetable oil massage, non-medicated shampoo, soft bristle brush <span class="gsrc">[Scaly sl. 17; (T)]</span>.</li>
</ul></div>
<div class="gpt"><h5>Psoriasis severity</h5>
<div class="gcards"><div class="gcard"><div class="gcard-t">Mild</div><div class="gcard-r"><span class="gcard-k">BSA</span><br>5% or less</div></div><div class="gcard"><div class="gcard-t">Moderate</div><div class="gcard-r"><span class="gcard-k">BSA</span><br>8% or more</div></div><div class="gcard"><div class="gcard-t">Severe</div><div class="gcard-r"><span class="gcard-k">BSA</span><br>10% or more</div><div class="gcard-r"><span class="gcard-k">Note</span><br>Follow the slide, not the 20% said first [(T)]</div></div><div class="gcard"><div class="gcard-t">In between</div><div class="gcard-r"><span class="gcard-k">BSA</span><br>For example 7% or 9%</div><div class="gcard-r"><span class="gcard-k">Note</span><br>Take both names: 7% is mild to moderate; 9% is moderate to severe [(T)]</div></div></div>
<ul><li>Source: Scaly sl. 26, 31; 11/11 recording. Slide 26 notes some phototherapy trials use 20% or more as a lower limit.</li></ul></div>
<div class="gpt"><h5>Triggers and non-drug care for psoriasis</h5><ul>
<li>Drugs that may precipitate or worsen psoriasis: lithium, NSAIDs, antimalarials such as chloroquine, beta blockers, fluoxetine, withdrawal of corticosteroids <span class="gsrc">[Scaly sl. 24]</span>.</li>
<li>Lifestyle: reduce stress, exercise, weight management (BMI 18.5&ndash;24.9), moderate alcohol, stop smoking <span class="gsrc">[Scaly sl. 33; (T)]</span>.</li>
<li>Skin care: moisturizers or emollients, oatmeal baths, sunscreen SPF 30+ with UVA protection <span class="gsrc">[Scaly sl. 34; (T)]</span>.</li>
</ul></div>
<div class="gpt"><h5>Psoriasis drug therapy</h5>
<table class="reftab"><thead><tr><th>Therapy</th><th>Key facts</th></tr></thead><tbody>
<tr><td>Topical corticosteroid</td><td>Most effective topical; first for mild to moderate; 2&ndash;4 times daily, limited to 4 weeks or less <span class="gsrc">[Scaly sl. 35&ndash;36]</span></td></tr>
<tr><td>Calcipotriene</td><td>Vitamin D3 analogue</td></tr>
<tr><td>Methotrexate</td><td>With folic acid 1&ndash;5 mg daily; screen with CBC and LFTs; onset 3&ndash;6 weeks; avoid in pregnancy and cirrhosis <span class="gsrc">[Scaly sl. 39; (T)]</span></td></tr>
<tr><td>Cyclosporine</td><td>Nephrotoxic; under 4 months; CYP 3A4 and 2C9 inhibitor; contraindicated with untreated hypertension <span class="gsrc">[Scaly sl. 39; (T)]</span></td></tr>
<tr><td>Apremilast (Otezla)</td><td>PDE-4 blocker</td></tr>
<tr><td>TNF-&alpha; inhibitors (adalimumab, etanercept, infliximab, golimumab, certolizumab)</td><td>Avoid in congestive heart failure and demyelinating disease <span class="gsrc">[Scaly sl. 41&ndash;43; (T)]</span></td></tr>
<tr><td>All biologics</td><td>No live vaccines; screen for TB; stop during active infection [(T)]</td></tr>
<tr><td>PUVA (psoralen plus UVA)</td><td>Reserved for severe, refractory psoriasis; serious burns, blistering, peeling <span class="gsrc">[Scaly sl. 44&ndash;45]</span></td></tr>
</tbody></table>
<ul><li>Systemic therapy is last line in mild to moderate disease <span class="gsrc">[Scaly sl. 35&ndash;36]</span>.</li></ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Dandruff vs seborrheic dermatitis: inflammation and epidermal hyperplasia (absent vs present); greasy yellow scales beyond the scalp.</li>
<li>Seborrheic dermatitis vs psoriasis: greasy yellow scales on red skin vs silvery scales on sharp-bordered plaques; Malassezia vs T-cell disease.</li>
<li>Hydrocortisone vs sulfur: hydrocortisone is not effective for dandruff; sulfur is not effective for psoriasis.</li>
<li>Methotrexate vs cyclosporine: folic acid with CBC and LFTs vs nephrotoxic and under 4 months.</li>
<li>Slide 8 allows mild inflammation in dandruff; the key follows slide 6, where inflammation is absent <span class="gsrc">[Scaly sl. 6, 8]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Sorting challenge from descriptors. Example stem: &ldquo;A patient has discrete symmetrical red plaques with silvery white scales on elbows and knees.&rdquo; Answer: psoriasis.</li>
<li>Step 1: look for inflammation (absent = dandruff).</li>
<li>Step 2: look for scale color and texture (yellow greasy vs silvery).</li>
<li>BSA case. Example stem: &ldquo;BSA is 12%.&rdquo; Answer: severe.</li>
<li>Step 1: compare the BSA with 5%, 8% and 10%.</li>
<li>Step 2: if it falls between cut-offs, name both classes.</li>
<li>Recording note: Dr. Lahoud said this was the hardest part of the lab last year [(T) 11/16].</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Selecting hydrocortisone for dandruff or sulfur for psoriasis.</li>
<li>Linking psoriasis to Malassezia.</li>
<li>Using 20% as the severe cut-off.</li>
<li>Recommending a corticosteroid for an infant&rsquo;s face.</li>
<li>Starting systemic or PUVA therapy first in mild to moderate disease.</li>
<li>Using a TNF-&alpha; inhibitor in a patient with heart failure.</li>
</ul></div>
</section>

<h2>Dr. Parsons: OTC, POCT and immunizations</h2>
<div class="gtoc" style="border:1px solid var(--line);border-radius:9px;padding:8px 12px 8px 8px;margin:10px 0;background:var(--paper)"><ol style="margin:0 0 0 22px;padding:0;line-height:1.6;font-size:14.5px">
<li><a href="#gp-1">Patient care process, SCHOLAR-MAC and SOAP notes</a></li>
<li><a href="#gp-2">Insect bites and stings: referral, anaphylaxis, self-care exclusions and OTC products</a></li>
<li><a href="#gp-3">Head lice (pediculosis)</a></li>
<li><a href="#gp-4">Vital signs and physical assessment</a></li>
<li><a href="#gp-5">Specimen collection and choosing a point-of-care test</a></li>
<li><a href="#gp-6">Using the AAFP adult immunization schedule</a></li>
<li><a href="#gp-7">Vaccines by situation</a></li>
<li><a href="#gp-8">SBAR, patient communication and vaccine hesitancy</a></li>
</ol></div>

<section class="gobj" id="gp-1">
<h3>1. Patient care process, SCHOLAR-MAC and SOAP notes</h3>
<div class="gbar"><span>SECTION 1</span><b>Interview with SCHOLAR-MAC, then document and reason in a SOAP note.</b><i>OTC deck slides 4&ndash;11</i></div>
<h4>At a glance</h4>
<ul>
<li>The Pharmacist Patient Care Process (PPCP) has 5 components: collect, assess, plan, implement, follow-up.</li>
<li>SCHOLAR-MAC lists 10 questions that collect the patient history.</li>
<li>SOAP = Subjective, Objective, Assessment, Plan.</li>
<li>Patient statements go in S; observable facts go in O; the pharmacist&rsquo;s interpretation goes in A; the actions and education go in P.</li>
<li>A SOAP note is legal documentation and can be subpoenaed.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Terms defined</h5>
<dl class="gwords">
<dt>PPCP</dt><dd>Pharmacist Patient Care Process, developed by the Joint Commission of Pharmacy Practitioners <span class="gsrc">[OTC sl 4]</span>.</dd>
<dt>SCHOLAR-MAC</dt><dd>The ten-element interview used to collect the patient history in self-care <span class="gsrc">[OTC sl 6]</span>.</dd>
<dt>SOAP note</dt><dd>Subjective, Objective, Assessment, Plan; part of medical records <span class="gsrc">[OTC sl 7]</span>.</dd>
</dl></div>
<div class="gpt"><h5>PPCP</h5><ul>
<li>Five core components: collect, assess, plan, implement, follow-up <span class="gsrc">[OTC sl 4]</span>.</li>
<li>Developed by the Joint Commission of Pharmacy Practitioners <span class="gsrc">[OTC sl 4]</span>.</li>
<li>The slide stresses &ldquo;Do not forget follow-up!&rdquo; <span class="gsrc">[OTC sl 4]</span>.</li>
<li>The SCHOLAR-MAC questions are the Collect step <span class="gsrc">[OTC sl 6]</span>.</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">S</div><div class="gcard-r"><span class="gcard-k">Element</span><br>Symptom</div><div class="gcard-r"><span class="gcard-k">Question asked <span class="gsrc">[OTC sl 6]</span></span><br>What are the main symptoms?</div></div><div class="gcard"><div class="gcard-t">C</div><div class="gcard-r"><span class="gcard-k">Element</span><br>Characteristics</div><div class="gcard-r"><span class="gcard-k">Question asked <span class="gsrc">[OTC sl 6]</span></span><br>What are the symptoms like?</div></div><div class="gcard"><div class="gcard-t">H</div><div class="gcard-r"><span class="gcard-k">Element</span><br>History</div><div class="gcard-r"><span class="gcard-k">Question asked <span class="gsrc">[OTC sl 6]</span></span><br>What has been done so far? Has this happened in the past?</div></div><div class="gcard"><div class="gcard-t">O</div><div class="gcard-r"><span class="gcard-k">Element</span><br>Onset</div><div class="gcard-r"><span class="gcard-k">Question asked <span class="gsrc">[OTC sl 6]</span></span><br>When did it start?</div></div><div class="gcard"><div class="gcard-t">L</div><div class="gcard-r"><span class="gcard-k">Element</span><br>Location</div><div class="gcard-r"><span class="gcard-k">Question asked <span class="gsrc">[OTC sl 6]</span></span><br>Where is the problem?</div></div><div class="gcard"><div class="gcard-t">A</div><div class="gcard-r"><span class="gcard-k">Element</span><br>Aggravating factors</div><div class="gcard-r"><span class="gcard-k">Question asked <span class="gsrc">[OTC sl 6]</span></span><br>What makes it worse?</div></div><div class="gcard"><div class="gcard-t">R</div><div class="gcard-r"><span class="gcard-k">Element</span><br>Remitting factors</div><div class="gcard-r"><span class="gcard-k">Question asked <span class="gsrc">[OTC sl 6]</span></span><br>What makes it better?</div></div><div class="gcard"><div class="gcard-t">M</div><div class="gcard-r"><span class="gcard-k">Element</span><br>Medications</div><div class="gcard-r"><span class="gcard-k">Question asked <span class="gsrc">[OTC sl 6]</span></span><br>What prescription medications are you taking? OTC, vitamins, supplements?</div></div><div class="gcard"><div class="gcard-t">A</div><div class="gcard-r"><span class="gcard-k">Element</span><br>Allergies</div><div class="gcard-r"><span class="gcard-k">Question asked <span class="gsrc">[OTC sl 6]</span></span><br>What allergies do you have to medications or other substances?</div></div><div class="gcard"><div class="gcard-t">C</div><div class="gcard-r"><span class="gcard-k">Element</span><br>Conditions</div><div class="gcard-r"><span class="gcard-k">Question asked <span class="gsrc">[OTC sl 6]</span></span><br>What health conditions do you have? Are you currently pregnant or breastfeeding?</div></div></div>
<div class="gpt"><h5>SOAP notes in the medical record</h5><ul>
<li>Part of medical records from clinics, hospitals, rehabilitation facilities, emergency rooms and urgent care centers <span class="gsrc">[OTC sl 7]</span>.</li>
<li>Serve as legal documentation and are subject to subpoena <span class="gsrc">[OTC sl 7]</span>.</li>
<li>Patients and their designees (family, caregivers) can access them <span class="gsrc">[OTC sl 7]</span>.</li>
<li>Used to follow patients over time and across care settings <span class="gsrc">[OTC sl 7]</span>.</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">Subjective</div><div class="gcard-r"><span class="gcard-k">Definition</span><br>Information based on or influenced by personal feelings, tastes or opinions <span class="gsrc">[sl 8]</span></div><div class="gcard-r"><span class="gcard-k">What goes in it</span><br>What the patient says (SCHOLAR-MAC) <span class="gsrc">[sl 9]</span></div><div class="gcard-r"><span class="gcard-k">Purpose</span><br>Captures the patient&rsquo;s perspective; evaluates safety and efficacy of therapy at follow-up <span class="gsrc">[sl 10]</span></div></div><div class="gcard"><div class="gcard-t">Objective</div><div class="gcard-r"><span class="gcard-k">Definition</span><br>Information that you and others observing the patient at the same time would consider facts <span class="gsrc">[sl 8]</span></div><div class="gcard-r"><span class="gcard-k">What goes in it</span><br>Lab results, physical exam findings including visual inspection, procedure findings <span class="gsrc">[sl 9]</span></div><div class="gcard-r"><span class="gcard-k">Purpose</span><br>Documents medical facts; evaluates therapy at follow-up <span class="gsrc">[sl 10]</span></div></div><div class="gcard"><div class="gcard-t">Assessment</div><div class="gcard-r"><span class="gcard-k">Definition</span><br>An evaluation of the situation; your interpretation of the nature or quality of the condition <span class="gsrc">[sl 8]</span></div><div class="gcard-r"><span class="gcard-k">What goes in it</span><br>What you think is happening and why <span class="gsrc">[sl 9]</span></div><div class="gcard-r"><span class="gcard-k">Purpose</span><br>Gives your clinical interpretation with rationale, so others do not repeat your work <span class="gsrc">[sl 10]</span></div></div><div class="gcard"><div class="gcard-t">Plan</div><div class="gcard-r"><span class="gcard-k">Definition</span><br>How you will address the condition <span class="gsrc">[sl 8]</span></div><div class="gcard-r"><span class="gcard-k">What goes in it</span><br>What you will do; follow-up interval and location; when to seek medical treatment; other education <span class="gsrc">[sl 9]</span></div><div class="gcard-r"><span class="gcard-k">Purpose</span><br>Lets the pharmacist at follow-up see what was recommended and taught <span class="gsrc">[sl 10]</span></div></div></div>
<div class="gpt"><h5>Lab SOAP note for head lice</h5><ul>
<li>The note includes pharmacologic measures, non-pharmacologic measures and patient education <span class="gsrc">[OTC sl 3]</span>.</li>
<li>Lab also uses SCHOLAR-MAC to interview a patient with a bee sting <span class="gsrc">[OTC sl 3, 36]</span>.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Subjective vs Objective: the patient says it (S); you or another observer can see or measure it (O) <span class="gsrc">[OTC sl 8]</span>.</li>
<li>Assessment vs Plan: what you think is happening and why (A); what you will do, the follow-up and the education (P) <span class="gsrc">[OTC sl 9]</span>.</li>
<li>PPCP vs SCHOLAR-MAC: PPCP is the 5-step process; SCHOLAR-MAC is the question set inside the Collect step <span class="gsrc">[OTC sl 4, 6]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Patient case, then &ldquo;which SCHOLAR-MAC question is missing?&rdquo; Example stem: a patient asks for something for a bite; the pharmacist has asked what has been done so far and whether it has happened before. Step 1: match the question to the table. Step 2: name the element (History).</li>
<li>Placement question. Example stem: &ldquo;Your interpretation of the patient&rsquo;s condition belongs in which part of the SOAP note?&rdquo; Step 1: decide if it is patient-reported, observed, interpreted or an action. Step 2: interpretation = Assessment <span class="gsrc">[OTC sl 11]</span>.</li>
<li>Select-all on the Objective section. Step 1: keep only measurable or observed findings. Step 2: lab results, exam findings and procedure findings qualify.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>The Plan includes when to seek medical treatment and follow-up, not only the product <span class="gsrc">[OTC sl 9]</span>.</li>
<li>Follow-up is a PPCP component and is easy to omit <span class="gsrc">[OTC sl 4]</span>.</li>
<li>The M, A and C after the hyphen are Medications, Allergies and Conditions; pregnancy and breastfeeding are asked under Conditions <span class="gsrc">[OTC sl 6]</span>.</li>
<li>Dispense and bill are not PPCP components <span class="gsrc">[OTC sl 4]</span>.</li>
</ul></div>
</section>

<section class="gobj" id="gp-2">
<h3>2. Insect bites and stings: referral, anaphylaxis, self-care exclusions and OTC products</h3>
<div class="gbar"><span>SECTION 2</span><b>Decide self-care or referral, then choose a product and a duration.</b><i>OTC deck slides 14&ndash;28; APhA OTC excerpt (Fabel and Blake, 2024)</i></div>
<h4>At a glance</h4>
<ul>
<li>Always refer: tick bites, scabies, spider bites, secondary infection, and a bite or sting with systemic symptoms.</li>
<li>Anaphylaxis is a life-threatening emergency: call 911.</li>
<li>Self-care is excluded by hives, excessive swelling, dizziness, reactions away from the sting, a severe previous reaction, hay fever history or age under 2 years.</li>
<li>Five OTC classes: local anesthetics, topical antihistamines, hydrocortisone, skin protectants, counterirritants.</li>
<li>Topical antipruritics and anesthetics: no more than 7 days unless a provider advises.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Conditions that must be referred</h5><ul>
<li>Tick bites <span class="gsrc">[OTC sl 14&ndash;15]</span>.</li>
<li>Scabies <span class="gsrc">[OTC sl 14&ndash;15]</span>.</li>
<li>Spider bites <span class="gsrc">[OTC sl 14]</span>.</li>
<li>Secondary infection <span class="gsrc">[OTC sl 14]</span>.</li>
<li>A bite or sting with systemic symptoms <span class="gsrc">[OTC sl 14]</span>.</li>
<li>Complete exclusion criteria are in the APhA OTC chapter <span class="gsrc">[OTC sl 14]</span>.</li>
</ul></div>
<div class="gpt"><h5>Brown recluse bite</h5><ul>
<li>Early bite, about 8 hours: violaceous (violet) center surrounded by faint spreading erythema <span class="gsrc">[OTC sl 16]</span>.</li>
<li>Appears &ldquo;red, white, and blue&rdquo; <span class="gsrc">[OTC sl 16]</span>.</li>
<li>Spider bites are referred <span class="gsrc">[OTC sl 14]</span>.</li>
</ul></div>
<div class="gpt"><h5>Stings</h5><ul>
<li>Venomous insects: honeybees, wasps, hornets, yellow jackets, fire ants <span class="gsrc">[OTC sl 18]</span>.</li>
<li>Venom contains allergenic proteins and pharmacologically active compounds <span class="gsrc">[OTC sl 18]</span>.</li>
<li>Usual complaints: pain, itching and irritation at the sting site <span class="gsrc">[OTC sl 20]</span>.</li>
</ul></div>
<div class="gpt"><h5>Anaphylaxis</h5><ul>
<li>Rare, but may occur in severely allergic patients; a life-threatening emergency; call 911 immediately <span class="gsrc">[OTC sl 19]</span>.</li>
<li>Features: fall in blood pressure, light-headedness, chest tightness, dyspnea, possible loss of consciousness <span class="gsrc">[OTC sl 19]</span>.</li>
<li>Onset: as soon as 10&ndash;15 minutes, up to 6 hours after the sting <span class="gsrc">[OTC sl 19]</span>.</li>
<li>Counsel the patient on the symptoms and when to call 911 <span class="gsrc">[OTC sl 19]</span>.</li>
</ul></div>
<div class="gpt"><h5>Exclusions for self-care of a sting</h5><ul>
<li>Allergic reactions: hives, itching, swelling and burning of the skin <span class="gsrc">[OTC sl 21]</span>.</li>
<li>Reactions away from the sting site (stung on the arm, hives on the torso or neck) <span class="gsrc">[OTC sl 21]</span>.</li>
<li>Allergic reactions require referral to urgent care or the ER <span class="gsrc">[OTC sl 21]</span>.</li>
<li>Hives, excessive swelling, dizziness <span class="gsrc">[OTC sl 22]</span>.</li>
<li>Weakness, nausea, vomiting, difficulty breathing <span class="gsrc">[OTC sl 22]</span>.</li>
<li>Severe reactions to previous bites or stings <span class="gsrc">[OTC sl 22]</span>.</li>
<li>Personal or family history of significant allergic reactions such as hay fever <span class="gsrc">[OTC sl 22]</span>.</li>
<li>Age under 2 years <span class="gsrc">[OTC sl 22]</span>. External analgesics are not approved for children under 2 years <span class="gsrc">[APhA]</span>.</li>
</ul></div>
<div class="gpt"><h5>Product classes and general rules</h5><ul>
<li>Five classes: local anesthetics, topical antihistamines, hydrocortisone, skin protectants, counterirritants <span class="gsrc">[OTC sl 23]</span>.</li>
<li>Topical antipruritics and anesthetics are not used longer than 7 days unless the provider specifically advises it <span class="gsrc">[APhA]</span>.</li>
<li>Oral acetaminophen or NSAIDs may treat pain <span class="gsrc">[APhA]</span>.</li>
<li>Systemic antihistamines are often used for itching but this is not a label indication <span class="gsrc">[APhA]</span>.</li>
<li>First-aid antiseptics and antibiotics can help prevent secondary infection <span class="gsrc">[APhA]</span>.</li>
<li>The patient&rsquo;s preferred dosage form should guide the recommendation <span class="gsrc">[APhA]</span>.</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">Local anesthetics</div><div class="gcard-r"><span class="gcard-k">Agents and action</span><br>Benzocaine, pramoxine, benzyl alcohol, lidocaine, dibucaine, phenol. Reversible blockade of nerve impulse conduction at the site; relieve pain, itching, irritation <span class="gsrc">[OTC sl 24]</span></div><div class="gcard-r"><span class="gcard-k">Use and duration</span><br>Up to 3&ndash;4 times daily for no longer than 7 days <span class="gsrc">[APhA]</span></div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>Pramoxine and benzyl alcohol cause the fewest adverse effects and least cross-sensitivity. Avoid dibucaine: systemic toxicity (seizures, respiratory depression, arrhythmias, death). Phenol above 2% irritates and may cause sloughing and necrosis; not on large areas or under bandages; not in pregnancy, infants or children <span class="gsrc">[OTC sl 24]</span></div></div><div class="gcard"><div class="gcard-t">Topical antihistamine</div><div class="gcard-r"><span class="gcard-k">Agents and action</span><br>Diphenhydramine (0.5%&ndash;2% in most products <span class="gsrc">[APhA]</span>). Depresses cutaneous histamine receptors; approved for temporary relief of pain and itching <span class="gsrc">[OTC sl 25]</span></div><div class="gcard-r"><span class="gcard-k">Use and duration</span><br>3&ndash;4 times daily for no longer than 7 days <span class="gsrc">[OTC sl 25]</span></div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>May be less effective than other options. Photosensitivity and hypersensitivity reactions. Use beyond 3&ndash;4 weeks raises the chance of contact dermatitis <span class="gsrc">[OTC sl 25]</span></div></div><div class="gcard"><div class="gcard-t">Hydrocortisone 1%</div><div class="gcard-r"><span class="gcard-k">Agents and action</span><br>Very weak steroid; temporary relief of minor insect bites <span class="gsrc">[OTC sl 27]</span></div><div class="gcard-r"><span class="gcard-k">Use and duration</span><br>Up to 7 days; seek medical attention if needed longer. Frequency: slide 1&ndash;4 times a day <span class="gsrc">[OTC sl 27]</span>; APhA 3 or 4 times daily</div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>Not for scabies, bacterial or fungal infection without medical supervision: it can worsen or mask them <span class="gsrc">[APhA]</span></div></div><div class="gcard"><div class="gcard-t">Skin protectants</div><div class="gcard-r"><span class="gcard-k">Agents and action</span><br>Zinc oxide, calamine lotion; titanium dioxide (FDA has not evaluated safety or efficacy) <span class="gsrc">[OTC sl 28]</span>. Lotions, ointments, creams; reduce inflammation and irritation <span class="gsrc">[OTC sl 28]</span></div><div class="gcard-r"><span class="gcard-k">Use and duration</span><br>As needed <span class="gsrc">[OTC sl 28]</span></div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>Recommended for adults, children and infants (zinc oxide, calamine) <span class="gsrc">[OTC sl 28]</span>. Zinc oxide is a mild astringent with weak antiseptic properties <span class="gsrc">[OTC sl 28]</span>; zinc oxide and calamine absorb fluid from weeping lesions <span class="gsrc">[APhA]</span></div></div><div class="gcard"><div class="gcard-t">Counterirritants</div><div class="gcard-r"><span class="gcard-k">Agents and action</span><br>Camphor and menthol; cooling effect; also used in musculoskeletal pain products <span class="gsrc">[OTC sl 26]</span></div><div class="gcard-r"><span class="gcard-k">Use and duration</span><br>3&ndash;4 times daily for up to 7 days <span class="gsrc">[APhA]</span></div><div class="gcard-r"><span class="gcard-k">Cautions</span><br>Camphor is very dangerous if ingested: keep away from children and pets <span class="gsrc">[OTC sl 26]</span>; inappropriate for use in children <span class="gsrc">[APhA]</span></div></div></div>
<div class="gpt"><h5>Extra detail from the APhA excerpt</h5><ul>
<li>Hydrocortisone, skin protectants, topical antihistamines, local anesthetics and some counterirritants are approved external analgesics for bite pain and itching <span class="gsrc">[APhA]</span>.</li>
<li>Zinc oxide and calamine: FDA considers 1%&ndash;25% safe and effective <span class="gsrc">[APhA]</span>.</li>
<li>Phenol in OTC products: 0.5%&ndash;1.5% <span class="gsrc">[APhA]</span>.</li>
<li>Camphor: FDA limit 11% or less; menthol: approved up to 16% <span class="gsrc">[APhA]</span>.</li>
<li>Dibucaine is a common allergen <span class="gsrc">[APhA]</span>.</li>
<li>Dibucaine and phenol have the most potential for adverse effects <span class="gsrc">[APhA]</span>.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Pramoxine and benzyl alcohol (low adverse effects, less cross-sensitivity) vs dibucaine (avoid; systemic toxicity) and phenol (above 2% damages skin; avoid in pregnancy and children) <span class="gsrc">[OTC sl 24]</span>.</li>
<li>Zinc oxide and calamine (FDA-evaluated; fine for infants) vs titanium dioxide (FDA has not evaluated safety or efficacy) <span class="gsrc">[OTC sl 28]</span>.</li>
<li>Skin protectants (as needed) vs hydrocortisone, antihistamine and anesthetics (limited to 7 days) <span class="gsrc">[OTC sl 27&ndash;28; APhA]</span>.</li>
<li>Local reaction (pain, itching at the site: self-care) vs allergic reaction away from the site (refer) vs anaphylaxis (911) <span class="gsrc">[OTC sl 19, 21]</span>.</li>
<li>Hydrocortisone frequency conflict: slide 27 says 1&ndash;4 times a day; the APhA excerpt says 3 or 4 times daily. Both agree on up to 7 days. The frequency is not keyed.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>SCHOLAR-MAC patient case (bee sting), then self-care or refer. Example stem: a patient stung on the arm now has hives on the torso and neck. Step 1: scan the case for an exclusion. Step 2: hives away from the site exclude self-care; refer to urgent care or the ER <span class="gsrc">[OTC sl 21&ndash;22]</span>.</li>
<li>Select-all exclusion list. Example stem: &ldquo;Which findings exclude an insect sting from self-care?&rdquo; Step 1: mark every item on the slide 21&ndash;22 list. Step 2: include age under 2 years and hay fever history.</li>
<li>Product choice for a case. Example stem: an adult asks for an anesthetic cream. Step 1: pick the lowest-risk agent (pramoxine or benzyl alcohol). Step 2: state the limit of 7 days.</li>
<li>Referral list. Example stem: &ldquo;Which conditions must be referred?&rdquo; Select tick bites, scabies, spider bites, secondary infection and systemic symptoms.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Hives on the torso after an arm sting are a reaction away from the site, not a local reaction <span class="gsrc">[OTC sl 21]</span>.</li>
<li>Anaphylaxis can start up to 6 hours after the sting, not only within minutes <span class="gsrc">[OTC sl 19]</span>.</li>
<li>Patients with scabies or an infection must not use hydrocortisone without supervision <span class="gsrc">[APhA]</span>.</li>
<li>Camphor products are a poor choice for children <span class="gsrc">[APhA]</span>.</li>
<li>Sources differ on the vascular effect of counterirritants: slide 26 says constricting blood vessels; the APhA excerpt says menthol causes vasodilation that may relieve pain. The agents, the 7-day limit and the camphor ingestion hazard are the points both sources share.</li>
</ul></div>
</section>

<section class="gobj" id="gp-3">
<h3>3. Head lice (pediculosis)</h3>
<div class="gbar"><span>SECTION 3</span><b>Recognise an infestation, check exclusions, then choose pyrethrins or permethrin and the retreatment rule.</b><i>OTC deck slides 29&ndash;34</i></div>
<h4>At a glance</h4>
<ul>
<li>Head lice (Pediculus humanus capitis) cause outbreaks in schools and daycare centers.</li>
<li>Nits and nit castings are seen when the hair is parted, especially at the crown, near the ears and at the base of the neck.</li>
<li>Exclusions include secondary infection, eyelid or eyebrow infestation, pregnancy or breastfeeding, active tumors and regional resistance.</li>
<li>Synergized pyrethrins must be retreated in 7&ndash;10 days; permethrin may be retreated.</li>
<li>A lice comb is used with both.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Recognition</h5><ul>
<li>Lice egg (nit) is about 1 mm in diameter <span class="gsrc">[OTC sl 30]</span>.</li>
<li>Lice feed by biting the scalp: an immediate wheal, then a local papule within 24 hours <span class="gsrc">[OTC sl 30]</span>.</li>
<li>Lice attach to the hair shaft <span class="gsrc">[OTC sl 30]</span>.</li>
<li>Black powdery specks may be lice feces <span class="gsrc">[OTC sl 30]</span>.</li>
</ul></div>
<div class="gpt"><h5>Exclusions for self-treatment</h5><ul>
<li>Secondary infection from scratching <span class="gsrc">[OTC sl 31]</span>.</li>
<li>Hypersensitivity to chrysanthemums, ragweed or pediculicide ingredients <span class="gsrc">[OTC sl 31]</span>.</li>
<li>Age under 2 years for pyrethrins <span class="gsrc">[OTC sl 31]</span>.</li>
<li>Age under 2 months for permethrin <span class="gsrc">[OTC sl 31]</span>.</li>
<li>Lice infection of the eyelids or eyebrows <span class="gsrc">[OTC sl 31]</span>.</li>
<li>Pregnancy or breastfeeding: strong caution for self-treatment; refer to primary care <span class="gsrc">[OTC sl 31]</span>.</li>
<li>Presence of active tumors <span class="gsrc">[OTC sl 31]</span>.</li>
<li>Regional resistance to pediculicides <span class="gsrc">[OTC sl 31]</span>.</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">Action</div><div class="gcard-r"><span class="gcard-k">Synergized pyrethrins</span><br>Block nerve impulse transmission: paralysis and death of the insect <span class="gsrc">[OTC sl 32]</span></div><div class="gcard-r"><span class="gcard-k">Permethrin (Nix)</span><br>Causes paralysis and death of the lice <span class="gsrc">[OTC sl 33]</span></div></div><div class="gcard"><div class="gcard-t">Forms</div><div class="gcard-r"><span class="gcard-k">Synergized pyrethrins</span><br>Shampoos, foams, solutions, gels <span class="gsrc">[OTC sl 32]</span></div><div class="gcard-r"><span class="gcard-k">Permethrin (Nix)</span><br>Cream rinse applied to the scalp for 10 minutes <span class="gsrc">[OTC sl 33]</span></div></div><div class="gcard"><div class="gcard-t">&ldquo;Synergized&rdquo;</div><div class="gcard-r"><span class="gcard-k">Synergized pyrethrins</span><br>Piperonyl butoxide added; it inhibits pyrethrin breakdown <span class="gsrc">[OTC sl 32]</span></div><div class="gcard-r"><span class="gcard-k">Permethrin (Nix)</span><br>Not applicable</div></div><div class="gcard"><div class="gcard-t">Lice comb</div><div class="gcard-r"><span class="gcard-k">Synergized pyrethrins</span><br>Must use <span class="gsrc">[OTC sl 32]</span></div><div class="gcard-r"><span class="gcard-k">Permethrin (Nix)</span><br>Must use <span class="gsrc">[OTC sl 33]</span></div></div><div class="gcard"><div class="gcard-t">Retreatment</div><div class="gcard-r"><span class="gcard-k">Synergized pyrethrins</span><br>MUST retreat in 7&ndash;10 days <span class="gsrc">[OTC sl 32]</span></div><div class="gcard-r"><span class="gcard-k">Permethrin (Nix)</span><br>MAY retreat in 7&ndash;10 days if lice or nits are seen <span class="gsrc">[OTC sl 33]</span></div></div><div class="gcard"><div class="gcard-t">Age limit</div><div class="gcard-r"><span class="gcard-k">Synergized pyrethrins</span><br>Excluded under 2 years <span class="gsrc">[OTC sl 31]</span></div><div class="gcard-r"><span class="gcard-k">Permethrin (Nix)</span><br>Excluded under 2 months <span class="gsrc">[OTC sl 31]</span></div></div></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Pyrethrins vs permethrin: retreatment is required for pyrethrins and conditional for permethrin; the age cut-offs are 2 years vs 2 months <span class="gsrc">[OTC sl 31&ndash;33]</span>.</li>
<li>Nit vs black specks: nits and castings are on the hair shaft; black powdery specks are lice feces <span class="gsrc">[OTC sl 30]</span>.</li>
<li>Pyrethrins hypersensitivity cue: chrysanthemums and ragweed <span class="gsrc">[OTC sl 31]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Select-all exclusion list. Example stem: &ldquo;Which exclude a patient with head lice from self-treatment?&rdquo; Step 1: tick eyelid or eyebrow infestation, secondary infection, pregnancy or breastfeeding, and age limits. Step 2: check the product named against its age limit <span class="gsrc">[OTC sl 34]</span>.</li>
<li>Patient case then product. Example stem: a 5-year-old with lice at school and no exclusions. Step 1: run the exclusion list. Step 2: choose pyrethrins or permethrin with a lice comb and state the retreatment rule.</li>
<li>Lab SOAP note: include drug and non-drug measures and education <span class="gsrc">[OTC sl 3]</span>.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>&ldquo;Must&rdquo; (pyrethrins) vs &ldquo;may&rdquo; (permethrin) retreatment <span class="gsrc">[OTC sl 32&ndash;33]</span>.</li>
<li>Age 2 months applies to permethrin, age 2 years to pyrethrins <span class="gsrc">[OTC sl 31]</span>.</li>
<li>Pregnancy and breastfeeding are a strong caution with referral, not a free choice of product <span class="gsrc">[OTC sl 31]</span>.</li>
<li>Lice involving eyelids or eyebrows are excluded from self-care <span class="gsrc">[OTC sl 31]</span>.</li>
</ul></div>
</section>

<section class="gobj" id="gp-4">
<h3>4. Vital signs and physical assessment</h3>
<div class="gbar"><span>SECTION 4</span><b>Measure pulse, respirations, blood pressure, temperature and oxygen saturation correctly and read the result.</b><i>POCT deck slides 27&ndash;42</i></div>
<h4>At a glance</h4>
<ul>
<li>Vital signs: pulse, respirations, blood pressure, temperature, O2 saturation. Vital statistics: age, height, weight, medication allergies, smoking status, perception of pain.</li>
<li>Pulse: pads of fingers, 15 seconds &times; 4 or 30 seconds &times; 2.</li>
<li>Respirations: do not tell the patient; observe at least 30 seconds.</li>
<li>BP cuff too small overestimates; too large or too loose underestimates.</li>
<li>Pulse oximetry: 95%&ndash;99% normal, below 90% needs medical attention.</li>
</ul>
<h4>Know this</h4>
<div class="gcards"><div class="gcard"><div class="gcard-t">Pulse <span class="gsrc">[POCT sl 30]</span></div><div class="gcard-r"><span class="gcard-k">Normal</span><br>60&ndash;100 beats/min</div><div class="gcard-r"><span class="gcard-k">Low</span><br>Bradycardia: below 60</div><div class="gcard-r"><span class="gcard-k">High</span><br>Tachycardia: above 100</div></div><div class="gcard"><div class="gcard-t">Respirations <span class="gsrc">[POCT sl 32]</span></div><div class="gcard-r"><span class="gcard-k">Normal</span><br>12&ndash;20 breaths/min</div><div class="gcard-r"><span class="gcard-k">Low</span><br>Bradypnea: below 12</div><div class="gcard-r"><span class="gcard-k">High</span><br>Tachypnea: above 20</div></div><div class="gcard"><div class="gcard-t">Blood pressure <span class="gsrc">[POCT sl 38, ACC/AHA 2017]</span></div><div class="gcard-r"><span class="gcard-k">Normal</span><br>Normal: less than 120/80 mmHg. Elevated: 120/80 or greater (as printed)</div><div class="gcard-r"><span class="gcard-k">Low</span><br>Hypotension: SBP below 90&ndash;100 or DBP below 50&ndash;60; patients may be symptomatic at higher values</div><div class="gcard-r"><span class="gcard-k">High</span><br>Hypertension: 130/80 or greater. Hypertensive urgency: 180/110 or greater</div></div><div class="gcard"><div class="gcard-t">Temperature <span class="gsrc">[POCT sl 39]</span></div><div class="gcard-r"><span class="gcard-k">Normal</span><br>98.0&ndash;98.6 &deg;F (36.7&ndash;37 &deg;C)</div><div class="gcard-r"><span class="gcard-k">Low</span><br>Not given</div><div class="gcard-r"><span class="gcard-k">High</span><br>Fever: 99.5 &deg;F (37.5 &deg;C) or higher. Dangerous: above 105.0 &deg;F (40.5 &deg;C)</div></div><div class="gcard"><div class="gcard-t">Oxygen saturation <span class="gsrc">[POCT sl 40]</span></div><div class="gcard-r"><span class="gcard-k">Normal</span><br>95%&ndash;99%</div><div class="gcard-r"><span class="gcard-k">Low</span><br>Below 90% needs medical attention</div><div class="gcard-r"><span class="gcard-k">High</span><br>Not given</div></div></div>
<div class="gpt"><h5>Systematic approach</h5><ul>
<li>Inspection: what do I see (coughing). Palpation: what do I feel (pulse). Percussion: what do I hear and feel. Auscultation: what do I hear (wheeze) <span class="gsrc">[POCT sl 28]</span>.</li>
</ul></div>
<div class="gpt"><h5>Pulse technique</h5><ul>
<li>Palpate an artery close to the surface and over bone; usually the radial pulse <span class="gsrc">[POCT sl 30]</span>.</li>
<li>Use the pads of the fingers (better than the tips); do not use the thumb <span class="gsrc">[POCT sl 31]</span>.</li>
<li>Radial side of the wrist (thumb side), just outside the last wrist tendon <span class="gsrc">[POCT sl 31]</span>.</li>
<li>Press hard enough to start to collapse the artery; adjust pressure if you cannot feel it <span class="gsrc">[POCT sl 31]</span>.</li>
<li>Minimum 15 seconds &times; 4, or 30 seconds &times; 2 <span class="gsrc">[POCT sl 31]</span>.</li>
<li>If the result is near the tachycardia or bradycardia cut-off, count the full minute <span class="gsrc">[POCT sl 31]</span>.</li>
</ul></div>
<div class="gpt"><h5>Respirations</h5><ul>
<li>Done by inspection: watch the rise and fall of the chest <span class="gsrc">[POCT sl 32]</span>.</li>
<li>Do not tell the patient <span class="gsrc">[POCT sl 32]</span>.</li>
<li>Minimum 30 seconds of observation <span class="gsrc">[POCT sl 32]</span>.</li>
</ul></div>
<div class="gpt"><h5>Blood pressure: cuff and position</h5><ul>
<li>Cuff width at least 50% around the bicep; length 75%&ndash;80% around the bicep <span class="gsrc">[POCT sl 33]</span>.</li>
<li>Standard cuffs fit most adults; about 1/3 of females need a pediatric cuff and about 1/2 of males need a large cuff <span class="gsrc">[POCT sl 33]</span>.</li>
<li>Arm at heart level; the patient should not support the arm because muscle tension can falsely elevate the reading <span class="gsrc">[POCT sl 34]</span>.</li>
<li>Patient may sit, stand or lie down; cuff goes around the bicep and may be over a shirt <span class="gsrc">[POCT sl 34]</span>.</li>
</ul></div>
<div class="gpt"><h5>Blood pressure: steps</h5><ul>
<li>Patient seated, relaxed, arm at about heart level, palm up, feet flat on the floor <span class="gsrc">[POCT sl 35]</span>.</li>
<li>No caffeine, smoking or exercise for at least 30 minutes beforehand <span class="gsrc">[POCT sl 35]</span>.</li>
<li>Cuff snug about 1 inch above the elbow; artery marker over the brachial artery <span class="gsrc">[POCT sl 35]</span>.</li>
<li>Stethoscope diaphragm on bare skin over the brachial artery, just below the cuff edge <span class="gsrc">[POCT sl 36]</span>.</li>
<li>Inflate rapidly to about 160&ndash;180 mmHg (higher if the usual systolic is higher) <span class="gsrc">[POCT sl 36]</span>.</li>
<li>Deflate about 2&ndash;3 mmHg per second <span class="gsrc">[POCT sl 36]</span>.</li>
<li>First clear tapping sound = systolic; last sound heard = diastolic <span class="gsrc">[POCT sl 36&ndash;37]</span>.</li>
<li>Record the reading, the arm used and the patient position; wait 5 minutes before a repeat <span class="gsrc">[POCT sl 37]</span>.</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">Cuff too small</div><div class="gcard-r"><span class="gcard-k">Effect on the reading</span><br>Overestimates <span class="gsrc">[POCT sl 33]</span></div><div class="gcard-r"><span class="gcard-k">Correct technique</span><br>Use the correct size: width at least 50% and length 75%&ndash;80% around the bicep <span class="gsrc">[sl 33]</span></div></div><div class="gcard"><div class="gcard-t">Cuff too large</div><div class="gcard-r"><span class="gcard-k">Effect on the reading</span><br>Underestimates <span class="gsrc">[POCT sl 33]</span></div><div class="gcard-r"><span class="gcard-k">Correct technique</span><br>Use the correct size: width at least 50% and length 75%&ndash;80% around the bicep <span class="gsrc">[sl 33]</span></div></div><div class="gcard"><div class="gcard-t">Cuff too loose</div><div class="gcard-r"><span class="gcard-k">Effect on the reading</span><br>Underestimates <span class="gsrc">[POCT sl 33]</span></div><div class="gcard-r"><span class="gcard-k">Correct technique</span><br>Wrap snugly <span class="gsrc">[sl 35]</span></div></div><div class="gcard"><div class="gcard-t">Patient holds the arm up</div><div class="gcard-r"><span class="gcard-k">Effect on the reading</span><br>Falsely elevated by muscle tension <span class="gsrc">[POCT sl 34]</span></div><div class="gcard-r"><span class="gcard-k">Correct technique</span><br>Arm rested at heart level on a support; the patient does not hold it up (slide 34: the patient should not support the arm; muscle tension raises the reading)</div></div></div>
<div class="gpt"><h5>Temperature</h5><ul>
<li>Antipyretics (acetaminophen, NSAIDs, steroids) can affect the reading <span class="gsrc">[POCT sl 39]</span>.</li>
<li>Environmental temperature and humidity can affect the reading <span class="gsrc">[POCT sl 39]</span>.</li>
<li>Warm or cold food and beverages can affect the reading <span class="gsrc">[POCT sl 39]</span>.</li>
</ul></div>
<div class="gpt"><h5>Pulse oximetry</h5><ul>
<li>Measures the oxygen saturation of arterial blood <span class="gsrc">[POCT sl 40]</span>.</li>
<li>The saturation calculation is not required for exams <span class="gsrc">[POCT sl 40]</span>.</li>
<li>Oximeters can overestimate saturation in Black patients because melanin absorbs more light; readings look normal when oxygen is dangerously low <span class="gsrc">[POCT sl 41]</span>.</li>
<li>Use a lower threshold for sending the patient to the ER, which can obtain an arterial blood gas <span class="gsrc">[POCT sl 41]</span>.</li>
<li>Technique: dry, clean nails; remove polish, acrylics, artificial tips; warm cold hands <span class="gsrc">[POCT sl 42]</span>.</li>
<li>Place on the index or middle finger; keep the patient still at least a minute until the numbers steady <span class="gsrc">[POCT sl 42]</span>.</li>
<li>Record both numbers: oxygen saturation and heart rate <span class="gsrc">[POCT sl 42]</span>.</li>
</ul></div>

<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Vital signs (pulse, respirations, blood pressure, temperature, O2 saturation) vs vital statistics (age, height, weight, medication allergies, smoking status, pain perception) <span class="gsrc">[POCT sl 29]</span>.</li>
<li>Tachycardia (above 100) vs bradycardia (below 60); tachypnea (above 20) vs bradypnea (below 12) <span class="gsrc">[POCT sl 30, 32]</span>.</li>
<li>Systolic (first tapping sound) vs diastolic (last sound) <span class="gsrc">[POCT sl 36&ndash;37]</span>.</li>
<li>Hypertension (130/80 or greater) vs hypertensive urgency (180/110 or greater) vs hypotension <span class="gsrc">[POCT sl 38]</span>.</li>
<li>Respirations: do not tell the patient you are counting <span class="gsrc">[POCT sl 32]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Measurement technique error. Example stem: a patient props the arm on the shoulder while BP is taken. Step 1: identify the error (patient supporting the arm). Step 2: state the effect (false elevation) and the fix (arm at heart level, supported).</li>
<li>Calculation. Example stem: 18 beats in 15 seconds. Step 1: 18 &times; 4. Step 2: 72 beats/min, normal.</li>
<li>Range question. Example stem: &ldquo;182/112 mmHg is which category?&rdquo; Step 1: compare both values with the cut-offs. Step 2: 180/110 or greater = hypertensive urgency.</li>
<li>Oximeter case. Example stem: a Black patient reads 96% but looks unwell. Step 1: consider a falsely high reading. Step 2: lower threshold for the ER.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>The pulse oximetry saturation calculation is not tested <span class="gsrc">[POCT sl 40]</span>.</li>
<li>Do not tell the patient you are counting respirations <span class="gsrc">[POCT sl 32]</span>.</li>
<li>Do not use the thumb for a pulse <span class="gsrc">[POCT sl 31]</span>.</li>
<li>A too-small cuff overestimates; a too-large or too-loose cuff underestimates <span class="gsrc">[POCT sl 33]</span>.</li>
<li>Wait 5 minutes before repeating a BP <span class="gsrc">[POCT sl 37]</span>.</li>
<li>Fever starts at 99.5 &deg;F (37.5 &deg;C), not 98.6 &deg;F <span class="gsrc">[POCT sl 39]</span>.</li>
</ul></div>
</section>

<section class="gobj" id="gp-5">
<h3>5. Specimen collection and choosing a point-of-care test</h3>
<div class="gbar"><span>SECTION 5</span><b>Collect a throat or nasal swab correctly and pick a test by sensitivity, specificity and logistics.</b><i>POCT deck slides 44&ndash;60</i></div>
<h4>At a glance</h4>
<ul>
<li>A point-of-care test (POCT) is a test run in the pharmacy; the pharmacist needs a CLIA-waived test.</li>
<li>Throat swab: strike the uvula with the side of the swab along the glossopalatine arch.</li>
<li>Nasal swab: the patient does not blow the nose first; rotate and hold in the nostril.</li>
<li>Sensitivity detects disease; specificity rules it out.</li>
<li>A protocol defines the population, criteria, test technique, therapy or referral and communication of results.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Throat swab</h5><ul>
<li>Tell the patient what to expect (coughing or gagging; try to resist) <span class="gsrc">[POCT sl 46]</span>.</li>
<li>Sanitize hands; wear appropriate PPE <span class="gsrc">[POCT sl 46]</span>.</li>
<li>Head tilted back, tongue out, eyes closed <span class="gsrc">[POCT sl 46]</span>.</li>
<li>Tongue depressor in the non-dominant hand, swab in the dominant hand; use the swab recommended for the test <span class="gsrc">[POCT sl 46]</span>.</li>
<li>Start at the base of the arch at the level of the tonsil; follow the glossopalatine arch, striking the uvula with the side of the swab; end at the opposite tonsil; immediately swab in reverse <span class="gsrc">[POCT sl 46]</span>.</li>
<li>Process and dispose of the specimen; sanitize hands <span class="gsrc">[POCT sl 46]</span>.</li>
</ul></div>
<div class="gpt"><h5>Nasal swab</h5><ul>
<li>The patient does not blow the nose beforehand <span class="gsrc">[POCT sl 48]</span>.</li>
<li>Tell the patient it may be mildly uncomfortable but should not be painful <span class="gsrc">[POCT sl 48]</span>.</li>
<li>Head tilted back slightly, eyes closed; non-dominant hand holds the chin; swab in the dominant hand between thumb and forefinger <span class="gsrc">[POCT sl 48]</span>.</li>
<li>Insert the cotton end straight in to the turbinates (about 1 inch); rotate slightly to collect cells as well as mucus <span class="gsrc">[POCT sl 48]</span>.</li>
<li>Nostril technique: rotate 5 times with good contact; leave in the nostril 15 seconds; repeat in the other nostril if the manufacturer requires <span class="gsrc">[POCT sl 49]</span>.</li>
<li>Nasopharyngeal technique: angle toward the bridge of the nose, then elevate the end and angle toward the back of the throat <span class="gsrc">[POCT sl 50]</span>.</li>
<li>Insert until resistance is met; gently rotate and wiggle; the swab passes the inferior nasal turbinate into the inferior nasal meatus; push past the meatus for a nasopharyngeal swab <span class="gsrc">[POCT sl 51]</span>.</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">Sensitivity</div><div class="gcard-r"><span class="gcard-k">Definition</span><br>Proportion of people with the disease who test positive <span class="gsrc">[POCT sl 55]</span></div><div class="gcard-r"><span class="gcard-k">Means</span><br>Good at detecting disease; most people with it test positive <span class="gsrc">[sl 55]</span></div><div class="gcard-r"><span class="gcard-k">When it matters</span><br>Screening (HIV, hepatitis C): most tested will not have the disease; do not want to miss patients <span class="gsrc">[sl 57]</span></div></div><div class="gcard"><div class="gcard-t">Specificity</div><div class="gcard-r"><span class="gcard-k">Definition</span><br>Proportion of people without the disease who test negative <span class="gsrc">[POCT sl 55]</span></div><div class="gcard-r"><span class="gcard-k">Means</span><br>Good at ruling out disease <span class="gsrc">[sl 55]</span></div><div class="gcard-r"><span class="gcard-k">When it matters</span><br>Group A strep and influenza: poor specificity could lead to unnecessary treatment courses <span class="gsrc">[sl 58]</span></div></div></div>
<div class="gpt"><h5>Choosing a test</h5><ul>
<li>Clinical: the sensitivity and specificity you will accept depend on what you test for and the goal of the program <span class="gsrc">[POCT sl 54]</span>.</li>
<li>Use the test in a population that maximizes the positive predictive value; work with the public health department or physicians <span class="gsrc">[POCT sl 54]</span>.</li>
<li>Logistical: the test must be CLIA-waived; cost and reimbursement; specimen collection method (throat, nasal, nasopharyngeal); processing space and training; time required <span class="gsrc">[POCT sl 56]</span>.</li>
</ul></div>
<div class="gpt"><h5>HCV and HIV screening</h5><ul>
<li>Most patients tested will not have the disease: a wide net to find a few <span class="gsrc">[POCT sl 57]</span>.</li>
<li>Need a test with high sensitivity <span class="gsrc">[POCT sl 57]</span>.</li>
<li>Need a referral program for confirmatory testing; counseling about results is essential <span class="gsrc">[POCT sl 57]</span>.</li>
<li>CDC: everyone in the US tested for HIV at least once; hepatitis C screening for all born 1945&ndash;1965 <span class="gsrc">[POCT sl 16&ndash;17]</span>.</li>
</ul></div>
<div class="gpt"><h5>Group A strep and influenza testing</h5><ul>
<li>Consider what happens to the patient with a false-negative result <span class="gsrc">[POCT sl 58]</span>.</li>
<li>Test only patients with symptoms consistent with the disease <span class="gsrc">[POCT sl 58]</span>.</li>
<li>Test for influenza only when disease activity is documented in the community <span class="gsrc">[POCT sl 58]</span>.</li>
<li>The Centor or modified Centor score is not required for exams <span class="gsrc">[POCT sl 58]</span>.</li>
<li>Influenza is often not identified in time to treat (48-hour window) <span class="gsrc">[POCT sl 18]</span>.</li>
</ul></div>
<table class="reftab"><thead><tr><th>Protocol content <span class="gsrc">[POCT sl 60]</span></th><th>Example of what it states</th></tr></thead><tbody>
<tr><td>Patient population</td><td>Who the service is for</td></tr>
<tr><td>Inclusion and exclusion criteria</td><td>Who may or may not be tested</td></tr>
<tr><td>Clinical information or algorithm</td><td>The decision path</td></tr>
<tr><td>Test and collection technique</td><td>Which test and which swab</td></tr>
<tr><td>Post-testing therapy or referral</td><td>What happens after the result</td></tr>
<tr><td>Communication of results</td><td>How results are reported</td></tr>
</tbody></table>
<div class="gpt"><h5>Protocol</h5><ul>
<li>Protocol: the procedure for conducting medical treatment <span class="gsrc">[POCT sl 60]</span>.</li>
<li>It may or may not be part of a collaborative agreement or other authority given to the pharmacist <span class="gsrc">[POCT sl 60]</span>.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Sensitivity (disease present, test positive) vs specificity (disease absent, test negative) <span class="gsrc">[POCT sl 55]</span>.</li>
<li>Throat swab (uvula, glossopalatine arch, tonsils) vs nostril swab (about 1 inch, rotate 5 times, 15 seconds) vs nasopharyngeal swab (past the inferior meatus) <span class="gsrc">[POCT sl 46&ndash;51]</span>.</li>
<li>Clinical considerations (sensitivity, specificity, predictive value) vs logistical considerations (CLIA-waived, cost, collection, space, time) <span class="gsrc">[POCT sl 54, 56]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Test property for a program. Example stem: a pharmacy screens many people for HIV; most do not have it. Step 1: identify that missing cases is the risk. Step 2: choose high sensitivity.</li>
<li>Appropriate practice, select all. Example stem: &ldquo;Which are appropriate for influenza point-of-care testing?&rdquo; Step 1: keep symptomatic patients and documented community activity. Step 2: drop &ldquo;test everyone&rdquo;.</li>
<li>Protocol contents, select all. Step 1: match each option to the slide 60 list. Step 2: reimbursement rate is not on it.</li>
<li>Technique. Example stem: &ldquo;Which structure is struck with the side of the throat swab?&rdquo; Answer: the uvula.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>The Centor score is not tested <span class="gsrc">[POCT sl 58]</span>.</li>
<li>Nasal swabs: no blowing the nose first <span class="gsrc">[POCT sl 48]</span>.</li>
<li>CLIA-waived is the first logistical requirement <span class="gsrc">[POCT sl 56]</span>.</li>
<li>The sources list &ldquo;CLIA&rdquo; among terms to define but the printed slides give no definition beyond the requirement for a CLIA-waived test <span class="gsrc">[POCT sl 6, 56]</span>.</li>
</ul></div>
</section>

<section class="gobj" id="gp-6">
<h3>6. Using the AAFP adult immunization schedule</h3>
<div class="gbar"><span>SECTION 6</span><b>Work through the schedule in order, read each legend, and use the Notes and Appendix to reach the answer.</b><i>Immunization deck slides 4&ndash;19; AAFP 2026 adult schedule; 9/21 lecture (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>Order: Table 1 (age), Table 2 (medical conditions), Notes, Appendix, Addendum.</li>
<li>The PDF schedule is provided on exams; the Notes must be used (T).</li>
<li>Table 1 and Table 2 have different legends; read the legend each time.</li>
<li>Contraindication: do not give. Precaution: generally defer.</li>
<li>Doses 5 or more days early are not valid and are repeated.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Terms defined</h5>
<dl class="gwords">
<dt>ACIP</dt><dd>Advisory Committee on Immunization Practices, a subcommittee of the CDC; its recommendations go to the CDC Director and become official CDC policy once adopted <span class="gsrc">[Imm sl 4]</span>.</dd>
<dt>AAFP</dt><dd>American Academy of Family Physicians; its 2026 adult schedule is the one used here <span class="gsrc">[Imm sl 5]</span>.</dd>
<dt>VIS</dt><dd>Vaccine Information Sheet, available from Immunize.org <span class="gsrc">[Imm sl 6]</span>.</dd>
</dl></div>
<div class="gpt"><h5>Where the information comes from</h5><ul>
<li>ACIP holds regularly scheduled public meetings (for example on eligibility or timing) <span class="gsrc">[Imm sl 4]</span>.</li>
<li>Other societies also issue recommendations: American Academy of Pediatrics, American College of Physicians, Infectious Diseases Society of America, American College of Obstetricians and Gynecologists <span class="gsrc">[Imm sl 5]</span>.</li>
<li>AAFP schedules are posted on Canvas <span class="gsrc">[Imm sl 6]</span>.</li>
<li>Immunize.org supplies Vaccine Information Sheets, screening checklists, news and updates <span class="gsrc">[Imm sl 6]</span>.</li>
<li>Travel vaccines: CDC Yellow Book and the CDC travel site; recommendations can differ by area within a country (T) <span class="gsrc">[Imm sl 6, 26]</span>.</li>
<li>Community pharmacists can give travel vaccines but generally are not prescribers for travel medications such as antimalarials (T) <span class="gsrc">[Imm sl 25]</span>.</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">Step 1</div><div class="gcard-r"><span class="gcard-k">Part</span><br>Table 1: vaccines by age</div><div class="gcard-r"><span class="gcard-k">What it tells you</span><br>Which vaccines apply by age group</div><div class="gcard-r"><span class="gcard-k">Note</span><br>Prescribers do this part reasonably well (T) <span class="gsrc">[Imm sl 8]</span></div></div><div class="gcard"><div class="gcard-t">Step 2</div><div class="gcard-r"><span class="gcard-k">Part</span><br>Table 2: medical conditions or other indication</div><div class="gcard-r"><span class="gcard-k">What it tells you</span><br>Extra vaccines for conditions and risk factors</div><div class="gcard-r"><span class="gcard-k">Note</span><br>Often missed by providers; focus here (T) <span class="gsrc">[Imm sl 8]</span></div></div><div class="gcard"><div class="gcard-t">Step 3</div><div class="gcard-r"><span class="gcard-k">Part</span><br>Notes</div><div class="gcard-r"><span class="gcard-k">What it tells you</span><br>Vaccine types, dosing frequencies and intervals, special situations</div><div class="gcard-r"><span class="gcard-k">Note</span><br>Must use on exams <span class="gsrc">[Imm sl 8]</span></div></div><div class="gcard"><div class="gcard-t">Step 4</div><div class="gcard-r"><span class="gcard-k">Part</span><br>Appendix</div><div class="gcard-r"><span class="gcard-k">What it tells you</span><br>Contraindications and precautions per vaccine</div><div class="gcard-r"><span class="gcard-k">Note</span><br><span class="gsrc">[Imm sl 8]</span></div></div><div class="gcard"><div class="gcard-t">Step 5</div><div class="gcard-r"><span class="gcard-k">Part</span><br>Addendum</div><div class="gcard-r"><span class="gcard-k">What it tells you</span><br>New or updated guidance</div><div class="gcard-r"><span class="gcard-k">Note</span><br>The 2026 schedule reports no new vaccines or recommendations (effective 3/1/2026) <span class="gsrc">[AAFP]</span></div></div></div>
<div class="gpt"><h5>Reading Table 1 (age groups 19&ndash;26, 27&ndash;49, 50&ndash;64, 65 and older)</h5><ul>
<li>The legend is at the bottom of the table; read it to make a recommendation <span class="gsrc">[Imm sl 11]</span>.</li>
<li>Tables 1 and 2 have different legends <span class="gsrc">[Imm sl 11]</span>.</li>
<li>&ldquo;See Notes&rdquo; appears on many rows; even without it, rows such as Hib (1 or 3 doses depending on indication) need the Notes (T).</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">Recommended for adults who meet the age requirement, lack documentation of vaccination or lack evidence of past infection</div><div class="gcard-r"><span class="gcard-k">Color (Table 1)</span><br>Yellow</div><div class="gcard-r"><span class="gcard-k">Meaning</span><br>Give the vaccine</div></div><div class="gcard"><div class="gcard-t">Recommended for adults with an additional risk factor or another indication</div><div class="gcard-r"><span class="gcard-k">Color (Table 1)</span><br>Light blue</div><div class="gcard-r"><span class="gcard-k">Meaning</span><br>Read the Notes to see whether the patient has the risk factor</div></div><div class="gcard"><div class="gcard-t">Recommended based on shared clinical decision-making</div><div class="gcard-r"><span class="gcard-k">Color (Table 1)</span><br>Green</div><div class="gcard-r"><span class="gcard-k">Meaning</span><br>Evidence is mixed, or vaccinate if the patient now has risk factors (example: HPV at 27&ndash;45 years)</div></div><div class="gcard"><div class="gcard-t">No recommendation / not applicable</div><div class="gcard-r"><span class="gcard-k">Color (Table 1)</span><br>Gray</div><div class="gcard-r"><span class="gcard-k">Meaning</span><br>Do not give; no body of evidence</div></div></div>
<div class="gpt"><h5>Reading Table 2</h5><ul>
<li>Columns: pregnancy; HIV infection by CD4 (below 15% or below 200/mm3; at or above 15% and 200/mm3); immunocompromised (excluding HIV); men who have sex with men; asplenia and complement deficiency; kidney failure, ESRD or dialysis; heart or lung disease; chronic liver disease or alcoholism; diabetes; health care personnel <span class="gsrc">[AAFP; Imm sl 8]</span>.</li>
<li>Legend categories include recommended for all adults who lack documentation or evidence of past infection; recommended for all adults with additional doses based on condition; recommended for some adults based on age or risk; shared clinical decision-making; precaution (might be indicated if benefit outweighs risk); contraindicated or not recommended; no guidance <span class="gsrc">[AAFP]</span>.</li>
<li>Table 2 colors: yellow = recommended for all adults who lack documentation or evidence of past infection; light green = not recommended for all adults but recommended for some, based on age or increased risk; teal = shared clinical decision-making; orange = recommended for all adults, with additional doses based on condition; navy = precaution (might be indicated if the benefit outweighs the risk); red = contraindicated or not recommended; gray = no guidance or not applicable <span class="gsrc">[AAFP Table 2 legend]</span>.</li>
<li>Asterisk: vaccinate after pregnancy, if indicated <span class="gsrc">[AAFP]</span>.</li>
<li>Some vaccines depend on the CD4 count (T).</li>
</ul></div>
<div class="gpt"><h5>Appendix: contraindication vs precaution</h5><ul>
<li>When a contraindication is present, the vaccine should NOT be administered <span class="gsrc">[AAFP Appendix, footnote 1]</span>.</li>
<li>When a precaution is present, vaccination should generally be deferred but might be indicated if the benefit outweighs the risk <span class="gsrc">[AAFP Appendix, footnote 2]</span>.</li>
<li>Moderate or severe acute illness, with or without fever, is a precaution for the vaccines listed <span class="gsrc">[AAFP Appendix]</span>.</li>
<li>The reason: if the patient needs a doctor or hospital, the vaccine is not a possible cause of the problem (T). Judge how sick the patient is (T).</li>
<li>The screening questionnaire from Immunize.org lists what to do for a positive screen (T).</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">Any vaccine on the Appendix</div><div class="gcard-r"><span class="gcard-k">Contraindication (do not give)</span><br>Severe allergic reaction (for example anaphylaxis) after a previous dose or to a component</div><div class="gcard-r"><span class="gcard-k">Precaution (generally defer)</span><br>Moderate or severe acute illness, with or without fever</div></div><div class="gcard"><div class="gcard-t">MMR</div><div class="gcard-r"><span class="gcard-k">Contraindication (do not give)</span><br>Severe immunodeficiency (including severely immunocompromised HIV); pregnancy; family history of altered immunocompetence unless verified</div><div class="gcard-r"><span class="gcard-k">Precaution (generally defer)</span><br>Recent antibody-containing blood product (11 months or less); history of thrombocytopenia or purpura; need for TB skin test or IGRA</div></div><div class="gcard"><div class="gcard-t">VAR</div><div class="gcard-r"><span class="gcard-k">Contraindication (do not give)</span><br>Severe immunodeficiency; pregnancy; family history of altered immunocompetence</div><div class="gcard-r"><span class="gcard-k">Precaution (generally defer)</span><br>Recent antibody-containing blood product; acyclovir, famciclovir or valacyclovir 24 hours before vaccination; aspirin or aspirin-containing products</div></div><div class="gcard"><div class="gcard-t">LAIV3 (FluMist)</div><div class="gcard-r"><span class="gcard-k">Contraindication (do not give)</span><br>Asplenia; immunocompromise from any cause; close contacts of severely immunosuppressed persons in a protected environment; pregnancy; cochlear implant; CSF leak</div><div class="gcard-r"><span class="gcard-k">Precaution (generally defer)</span><br>Guillain-Barr&eacute; syndrome within 6 weeks of a flu vaccine; asthma at 5 years or older; other chronic underlying conditions</div></div><div class="gcard"><div class="gcard-t">Tdap and Td</div><div class="gcard-r"><span class="gcard-k">Contraindication (do not give)</span><br>Anaphylaxis after a previous dose or component; Tdap only: encephalopathy within 7 days of a previous pertussis-containing dose</div><div class="gcard-r"><span class="gcard-k">Precaution (generally defer)</span><br>Guillain-Barr&eacute; syndrome within 6 weeks; Arthus-type reaction (defer until 10 years since last dose); Tdap only: progressive or unstable neurologic disorder</div></div></div>
<div class="gpt"><h5>Live vaccines and pregnancy</h5><ul>
<li>Live vaccines are contraindicated during pregnancy <span class="gsrc">[Imm sl 14]</span>.</li>
<li>The Appendix lists pregnancy as a contraindication for MMR, VAR and LAIV3 <span class="gsrc">[AAFP Appendix]</span>.</li>
<li>Hepatitis A vaccine is not a live vaccine <span class="gsrc">[Imm sl 14]</span>.</li>
<li>LAIV3 is the live influenza vaccine; know which vaccines are live and which are inactivated (T).</li>
</ul></div>
<div class="gpt"><h5>Dose-interval rules</h5><ul>
<li>4 weeks = 28 days; intervals of 4 months or more use calendar months <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Doses given up to 4 days before the minimum age or interval are valid <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Doses given 5 or more days early are not valid and are repeated, spaced from the invalid dose by the minimum interval <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Administer recommended vaccines if history is incomplete or unknown; do not restart or add doses for extended intervals <span class="gsrc">[AAFP]</span>.</li>
<li>Report suspected vaccine-preventable disease to the health department; report significant post-vaccination reactions to VAERS <span class="gsrc">[AAFP]</span>.</li>
</ul></div>
<div class="gpt"><h5>Screening questions to assess needs <span class="gsrc">[Imm sl 19]</span></h5><ul>
<li>Year of birth; travel outside the US.</li>
<li>Weakened immune system from illness or medication; HIV (and CD4 count).</li>
<li>First-year college student in a dormitory or new military recruit.</li>
<li>Work with patients in a health care setting.</li>
<li>Medical conditions: heart disease, diabetes, chronic lung disease, kidney failure or dialysis, chronic liver disease, no spleen, cancer, bone marrow transplant.</li>
<li>Alcoholism, smoking, men who have sex with men, homelessness.</li>
<li>Chickenpox disease or chickenpox vaccine.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Contraindication (do not give) vs precaution (generally defer; may be given if benefit outweighs risk) <span class="gsrc">[AAFP Appendix]</span>.</li>
<li>Table 1 (age) vs Table 2 (condition); each has its own legend <span class="gsrc">[Imm sl 11]</span>.</li>
<li>Recommended (yellow, give) vs recommended with another indication (light blue, read the Notes) vs shared decision-making (green; mixed evidence) vs no recommendation (gray). Table 2 uses a different legend: its green means &ldquo;not recommended for all adults but recommended for some&rdquo; and its teal means shared decision-making.</li>
<li>ACIP (CDC subcommittee) vs AAFP (physician society; the schedule used here) <span class="gsrc">[Imm sl 4&ndash;5]</span>.</li>
<li>Immunize.org (screening checklists and VIS) vs CDC Yellow Book (travel) <span class="gsrc">[Imm sl 6]</span>.</li>
<li>Dose 4 days early (valid) vs 5 days early (repeat) <span class="gsrc">[AAFP Notes]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Order of use. Example stem: &ldquo;In what order are the schedule parts used?&rdquo; Answer: age, medical conditions, Notes, Appendix, Addendum.</li>
<li>Patient case where the Notes decide. Example stem: a 40-year-old with lupus on an immunosuppressant; is Shingrix recommended? Step 1: find the vaccine row in Table 1 or 2. Step 2: open the Notes for the special situation. Step 3: check the Appendix. Result: yes, 2 doses (immunocompromising condition).</li>
<li>Contraindication or precaution. Example stem: anaphylaxis after a previous Tdap dose. Step 1: find Tdap in the Appendix. Step 2: severe allergic reaction is a contraindication; do not give.</li>
<li>Match abbreviation to trade name or live vs inactivated; see the trade-name table in Section 7.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Answering from Table 1 alone: a right answer cannot be reached without the Notes (T).</li>
<li>Using a website instead of the schedule provided on the exam (T).</li>
<li>Giving a vaccine marked with a shared-decision color as a default; it is not &ldquo;give&rdquo; (T).</li>
<li>Treating moderate or severe acute illness as a contraindication; it is a precaution <span class="gsrc">[AAFP Appendix]</span>.</li>
<li>The source-credibility terms (convergent evidence, body of evidence, meta-analysis, systematic review) are not tested (T).</li>
<li>The sources do not call MMR or VAR &ldquo;live&rdquo;; they list pregnancy as a contraindication for them <span class="gsrc">[AAFP Appendix]</span>.</li>
</ul></div>
</section>

<section class="gobj" id="gp-7">
<h3>7. Vaccines by situation</h3>
<div class="gbar"><span>SECTION 7</span><b>Apply the Notes: regimen, interval and trade name for each vaccine and patient situation.</b><i>AAFP 2026 adult schedule (Notes, vaccine list); Immunization deck slides 14&ndash;16, 21&ndash;23; 9/21 lecture (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>Hepatitis A is given to anyone who requests it if not fully vaccinated, and to those with risk factors.</li>
<li>Pneumococcal: PCV20 or PCV21 completes the series; PCV15 needs PPSV23 one year later.</li>
<li>Shingrix: 2 doses, 2&ndash;6 months apart, from age 50 and for immunocompromising conditions.</li>
<li>MMR and varicella are contraindicated with HIV when CD4 is below 15% or below 200 cells/mm3.</li>
<li>Know the trade names.</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Hepatitis A</h5><ul>
<li>Any person not fully vaccinated who requests it, with no risk factor needed: Havrix (2 doses, 6&ndash;12 months apart) or Vaqta (2 doses, 6&ndash;18 months apart, minimum 6 months) or Twinrix (3 doses at 0, 1, 6 months) <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Risk: chronic liver disease, HIV, men who have sex with men, injection or noninjection drug use, homelessness, travel to high or intermediate endemic countries, and others in the Notes <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Give to all patients with HIV, chronic liver disease or alcoholism, to all who request it, and to those in the Notes special situations <span class="gsrc">[Imm sl 16]</span>.</li>
<li>Pregnant: only if in a risk group, not all pregnant patients (T); the vaccine is not live <span class="gsrc">[Imm sl 14]</span>.</li>
</ul></div>
<div class="gpt"><h5>Hepatitis B</h5><ul>
<li>Age 19&ndash;59: complete a 2-, 3- or 4-dose series <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Age 60 or older with known risk factors: series recommended; any adult 60 or older who requests it may receive it <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Engerix-B or Recombivax HB: 3 doses at 0, 1, 6 months <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Heplisav-B: 2 doses at 0, 1 month (at least 4 weeks apart) <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Dialysis: Recombivax HB dialysis formulation (1 mL = 40 mcg), 3 doses at 0, 1, 6 months; or Engerix-B 4 doses at 0, 1, 2, 6 months using a 2 mL dose instead of 1 mL <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Immunocompromising conditions including HIV: complete the series at 20 years or older <span class="gsrc">[AAFP Notes]</span>.</li>
</ul></div>
<div class="gpt"><h5>Pneumococcal (PCV15, PCV20, PCV21, PPSV23)</h5><ul>
<li>Age 50 or older, or 19&ndash;49 with an underlying condition or risk factor (for example diabetes), never vaccinated or unknown: 1 dose PCV15, PCV20 or PCV21 <span class="gsrc">[AAFP Notes]</span>.</li>
<li>If PCV15 is used: 1 dose PPSV23 one year later (8 weeks minimum for an immunocompromising condition, cochlear implant or CSF leak) <span class="gsrc">[AAFP Notes]</span>.</li>
<li>If PCV20 or PCV21 is used: no PPSV23; the series is complete <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Only PPSV23 before: 1 dose PCV15, PCV20 or PCV21 at least 1 year after the PPSV23; if PCV15 is used, no further PPSV23 <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Only PCV13 before: 1 dose PCV20 or PCV21 at least 1 year later <span class="gsrc">[AAFP Notes]</span>.</li>
<li>PCV13 plus 1 PPSV23: 1 dose PCV20 or PCV21 at least 5 years after the last dose <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Adults who received PCV20 or PCV21: no additional dose <span class="gsrc">[AAFP Notes]</span>. Pregnancy: no recommendation <span class="gsrc">[AAFP Notes]</span>.</li>
</ul></div>
<div class="gpt"><h5>Zoster (RZV, Shingrix)</h5><ul>
<li>Age 50 or older: 2 doses, 2&ndash;6 months apart, minimum 4 weeks, regardless of previous zoster or Zostavax <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Immunocompromising conditions (including HIV regardless of CD4): 2-dose series, 2&ndash;6 months apart <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Pregnancy: no ACIP recommendation; consider delaying <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Example from lecture: a 40-year-old with lupus on immunosuppressants had shingles because the vaccine was missed (T).</li>
</ul></div>
<div class="gpt"><h5>RSV</h5><ul>
<li>Pregnant, 32 weeks 0 days to 36 weeks 6 days, September through January: 1 dose Abrysvo <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Either maternal Abrysvo or infant nirsevimab or clesrovimab prevents severe infant RSV disease <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Other pregnant persons: not recommended; additional doses in later pregnancies not recommended <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Age 75 or older, unvaccinated: 1 dose of Arexvy, Abrysvo or mResvia <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Age 50&ndash;74, unvaccinated and at increased risk of severe RSV disease: 1 dose; risk can be self-attested <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Risk conditions include chronic cardiovascular disease (not isolated hypertension), chronic lung disease, ESRD, diabetes with complications or on insulin or an SGLT2 inhibitor, and BMI 40 or higher <span class="gsrc">[AAFP Notes]</span>.</li>
</ul></div>
<div class="gpt"><h5>Tdap, Td and wounds</h5><ul>
<li>Pregnancy: 1 dose Tdap each pregnancy, preferably early in gestational weeks 27&ndash;36; use Tdap if a tetanus-toxoid vaccine is indicated in pregnancy <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Primary series complete with a Tdap at age 10 or older: Td or Tdap every 10 years <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Primary series complete without Tdap: 1 dose Tdap, then Td or Tdap every 10 years <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Wound, 3 or more previous doses: clean and minor wound, give Tdap or Td if more than 10 years since the last dose; all other wounds, if more than 5 years <span class="gsrc">[AAFP Notes]</span>.</li>
</ul></div>
<div class="gpt"><h5>MMR and varicella, including HIV</h5><ul>
<li>MMR evidence of immunity: born before 1957 (not health care personnel), documented MMR vaccine, or laboratory evidence of immunity or disease; a clinical diagnosis without laboratory confirmation does not count <span class="gsrc">[AAFP Notes]</span>.</li>
<li>MMR with no evidence: 1 dose; 2 doses at least 4 weeks apart for students, international travelers, household contacts of immunocompromised persons and health care personnel born in 1957 or later <span class="gsrc">[AAFP Notes]</span>.</li>
<li>HIV with CD4 at least 15% and at least 200 cells/mm3 for at least 6 months: MMR 2 doses at least 4 weeks apart; MMR contraindicated if CD4 below 15% or below 200 cells/mm3 <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Varicella with no evidence: 2 doses 4&ndash;8 weeks apart. Evidence: US-born before 1980 (except pregnant persons and health care personnel), 2 documented doses at least 4 weeks apart, provider-verified history, or laboratory evidence <span class="gsrc">[AAFP Notes]</span>.</li>
<li>HIV with CD4 at least 15% and at least 200 cells/mm3: varicella may be considered (2 doses 3 months apart); contraindicated if CD4 below 15% or below 200 <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Severe immunocompromising conditions: both MMR and VAR contraindicated <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Pregnancy with no immunity: contraindicated; give after pregnancy and before discharge from the facility <span class="gsrc">[AAFP Notes]</span>.</li>
</ul></div>
<div class="gpt"><h5>Influenza</h5><ul>
<li>Age 19 or older: 1 dose of any age-appropriate vaccine annually <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Age 65 or older: HD-IIV3, RIV3 or aIIV3 preferred; if none is available, any other age-appropriate vaccine <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Solid organ transplant recipients on immunosuppression, age 19&ndash;64: HD-IIV3 and aIIV3 are acceptable <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Egg allergy: any influenza vaccine appropriate for age and health status <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Close contacts of severely immunosuppressed persons who need a protected environment should not receive LAIV3, or avoid that contact for 7 days after <span class="gsrc">[AAFP Notes]</span>.</li>
<li>FluMist is approved for self-administration at 18 years or older, or by a caregiver at 18 or older for recipients 2&ndash;17 years <span class="gsrc">[AAFP Notes]</span>.</li>
</ul></div>
<div class="gpt"><h5>Meningococcal</h5><ul>
<li>MenACWY (Menveo or MenQuadfi) for asplenia, HIV, persistent complement deficiency or complement inhibitor use: 2 doses at least 8 weeks apart; revaccinate every 5 years if risk remains <span class="gsrc">[AAFP Notes]</span>.</li>
<li>MenACWY, 1 dose: travel to hyperendemic or epidemic areas, microbiologists, first-year college students in residential housing (not vaccinated at 16 or older) and military recruits <span class="gsrc">[AAFP Notes]</span>.</li>
<li>MenB (Bexsero or Trumenba) for asplenia, complement deficiency or microbiologists: 3 doses at 0, 1&ndash;2, 6 months; booster 1 year after the primary series then every 2&ndash;3 years if risk remains <span class="gsrc">[AAFP Notes]</span>.</li>
<li>MenB shared decision-making at 16&ndash;23 years (16&ndash;18 preferred): 2 doses at least 6 months apart <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Use the same MenB brand for all doses; MenB products from different manufacturers are not interchangeable <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Delay MenB in pregnancy unless the benefit outweighs the risk <span class="gsrc">[AAFP Notes]</span>.</li>
</ul></div>
<div class="gpt"><h5>Hib, mpox, HPV, COVID-19</h5><ul>
<li>Hib, asplenia (including sickle cell disease): 1 dose if never vaccinated <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Hib, elective splenectomy: 1 dose, preferably at least 14 days before surgery <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Hib, hematopoietic stem cell transplant: 3 doses 4 weeks apart starting 6&ndash;12 months after successful transplant, whatever the history <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Mpox (Jynneos): 2 doses, 28 days apart, for persons at risk <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Mpox risk: gay, bisexual or other men who have sex with men, transgender or nonbinary persons with a new sexually transmitted disease diagnosis, more than 1 partner, sex at a commercial sex venue or at a large public event in the past 6 months; their sexual contacts; those deemed at risk by public health <span class="gsrc">[AAFP Notes]</span>.</li>
<li>HPV: up through age 26, 2 or 3 doses; ages 27&ndash;45, shared decision-making; not recommended in pregnancy <span class="gsrc">[AAFP Notes]</span>.</li>
<li>COVID-19, age 19&ndash;64 unvaccinated: 1 dose of Spikevax, mNexspike, Comirnaty or Nuvaxovid; age 65 or older: a second dose 6 months later (minimum 2 months) <span class="gsrc">[AAFP Notes]</span>.</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">Requests hepatitis A</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>HepA (Havrix, Vaqta); HepA-HepB (Twinrix)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>Havrix 2 doses 6&ndash;12 months; Vaqta 2 doses 6&ndash;18 months; Twinrix 0, 1, 6 months</div></div><div class="gcard"><div class="gcard-t">Dialysis</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>HepB (Recombivax HB, Engerix-B)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>Recombivax dialysis formulation 0, 1, 6 months; Engerix-B 2 mL at 0, 1, 2, 6 months</div></div><div class="gcard"><div class="gcard-t">Age 50 or older, never vaccinated</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>PCV15 (Vaxneuvance), PCV20 (Prevnar 20), PCV21 (Capvaxive), PPSV23 (Pneumovax 23)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>PCV20 or PCV21 once; PCV15 then PPSV23 in 1 year</div></div><div class="gcard"><div class="gcard-t">Age 50 or older; or immunocompromised at 19 or older</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>RZV (Shingrix)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>2 doses, 2&ndash;6 months apart</div></div><div class="gcard"><div class="gcard-t">Pregnant, 32w0d&ndash;36w6d, Sept&ndash;Jan</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>RSV (Abrysvo)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>1 dose</div></div><div class="gcard"><div class="gcard-t">Age 75 or older</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>RSV (Arexvy, Abrysvo, mResvia)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>1 dose</div></div><div class="gcard"><div class="gcard-t">Each pregnancy, weeks 27&ndash;36</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>Tdap (Adacel, Boostrix)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>1 dose per pregnancy</div></div><div class="gcard"><div class="gcard-t">Wound, 3 or more doses before</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>Tdap or Td (Tenivac)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>Clean minor: over 10 years; other wounds: over 5 years since last dose</div></div><div class="gcard"><div class="gcard-t">HIV, CD4 below 15% or below 200</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>MMR (M-M-R II, Priorix); VAR (Varivax)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>Contraindicated</div></div><div class="gcard"><div class="gcard-t">Asplenia or HIV</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>MenACWY (Menveo, MenQuadfi)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>2 doses at least 8 weeks apart; every 5 years if risk remains</div></div><div class="gcard"><div class="gcard-t">Elective splenectomy</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>Hib (ActHIB, Hiberix, PedvaxHIB)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>1 dose at least 14 days before</div></div><div class="gcard"><div class="gcard-t">At risk for mpox</div><div class="gcard-r"><span class="gcard-k">Vaccine (trade name)</span><br>Mpox (Jynneos)</div><div class="gcard-r"><span class="gcard-k">Regimen</span><br>2 doses, 28 days apart</div></div></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">COVID-19</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>1vCOV-mRNA; 1vCOV-aPS</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Comirnaty, Spikevax, mNexspike (mRNA); Nuvaxovid (protein subunit)</div></div><div class="gcard"><div class="gcard-t">Hib</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>Hib</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>ActHIB, Hiberix, PedvaxHIB</div></div><div class="gcard"><div class="gcard-t">Hepatitis A</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>HepA</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Havrix, Vaqta</div></div><div class="gcard"><div class="gcard-t">Hepatitis A and B</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>HepA-HepB</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Twinrix</div></div><div class="gcard"><div class="gcard-t">Hepatitis B</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>HepB</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Engerix-B, Heplisav-B, Recombivax HB</div></div><div class="gcard"><div class="gcard-t">HPV</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>HPV</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Gardasil 9</div></div><div class="gcard"><div class="gcard-t">Influenza (egg-based inactivated)</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>IIV3</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Multiple</div></div><div class="gcard"><div class="gcard-t">Influenza (cell culture inactivated)</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>ccIIV3</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Flucelvax</div></div><div class="gcard"><div class="gcard-t">Influenza (recombinant)</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>RIV3</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Flublok</div></div><div class="gcard"><div class="gcard-t">Influenza (live attenuated)</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>LAIV3</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>FluMist</div></div><div class="gcard"><div class="gcard-t">MMR</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>MMR</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>M-M-R II, Priorix</div></div><div class="gcard"><div class="gcard-t">Meningococcal ACWY</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>MenACWY-CRM; MenACWY-TT</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Menveo; MenQuadfi</div></div><div class="gcard"><div class="gcard-t">Meningococcal B</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>MenB-4C; MenB-FHbp</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Bexsero; Trumenba</div></div><div class="gcard"><div class="gcard-t">Meningococcal ABCWY</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>MenACWY-TT/MenB-FHbp; MenACWY-CRM/MenB-4C</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Penbraya; Penmenvy</div></div><div class="gcard"><div class="gcard-t">Mpox</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>Mpox</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Jynneos</div></div><div class="gcard"><div class="gcard-t">Pneumococcal conjugate</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>PCV15; PCV20; PCV21</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Vaxneuvance; Prevnar 20; Capvaxive</div></div><div class="gcard"><div class="gcard-t">Pneumococcal polysaccharide</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>PPSV23</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Pneumovax 23</div></div><div class="gcard"><div class="gcard-t">Polio (inactivated)</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>IPV</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>IPOL</div></div><div class="gcard"><div class="gcard-t">RSV</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>RSV</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Arexvy, Abrysvo, mResvia</div></div><div class="gcard"><div class="gcard-t">Tetanus and diphtheria</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>Td</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Tenivac</div></div><div class="gcard"><div class="gcard-t">Tdap</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>Tdap</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Adacel, Boostrix</div></div><div class="gcard"><div class="gcard-t">Varicella</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>VAR</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Varivax</div></div><div class="gcard"><div class="gcard-t">Zoster (recombinant)</div><div class="gcard-r"><span class="gcard-k">Abbreviation</span><br>RZV</div><div class="gcard-r"><span class="gcard-k">Trade name(s) <span class="gsrc">[AAFP vaccine list]</span></span><br>Shingrix</div></div></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Havrix (dose 2 at 6&ndash;12 months) vs Vaqta (dose 2 at 6&ndash;18 months, minimum 6 months) <span class="gsrc">[AAFP Notes]</span>.</li>
<li>PCV15 (needs PPSV23 in 1 year) vs PCV20 or PCV21 (complete) <span class="gsrc">[AAFP Notes]</span>.</li>
<li>PPSV23 (polysaccharide, Pneumovax 23) vs PCV (conjugate) <span class="gsrc">[AAFP vaccine list]</span>.</li>
<li>Menveo and MenQuadfi (MenACWY) vs Bexsero and Trumenba (MenB) vs Penbraya and Penmenvy (combined) <span class="gsrc">[AAFP vaccine list]</span>.</li>
<li>Shingrix interval 2&ndash;6 months vs mpox interval 28 days vs Heplisav-B 4 weeks <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Tdap wound interval: over 10 years for a clean minor wound vs over 5 years for any other wound <span class="gsrc">[AAFP Notes]</span>.</li>
<li>MMR and varicella with HIV: contraindicated below CD4 15% or 200; allowed at or above both <span class="gsrc">[AAFP Notes]</span>.</li>
<li>LAIV3 (FluMist, live) vs IIV3, ccIIV3 (Flucelvax) and RIV3 (Flublok) <span class="gsrc">[AAFP vaccine list]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Patient case where the Notes decide. Example stem: &ldquo;A 33-week pregnant patient in October. Which RSV recommendation applies?&rdquo; Step 1: find RSV in the Notes. Step 2: match gestational weeks and months. Result: 1 dose Abrysvo.</li>
<li>Prior-history case. Example stem: a 65-year-old who had only PPSV23 over a year ago. Step 1: find the history line in the pneumococcal Notes. Step 2: 1 dose PCV15, PCV20 or PCV21.</li>
<li>Wound. Example stem: a deep puncture wound, last tetanus dose 7 years ago, 3 or more doses before. Step 1: classify the wound as other than clean and minor. Step 2: more than 5 years, so Tdap or Td.</li>
<li>CD4 case. Example stem: HIV with a CD4 of 150 cells/mm3 and no measles immunity. Step 1: compare with 15% and 200. Step 2: MMR contraindicated.</li>
<li>Trade-name matching: Prevnar 20 = PCV20, Capvaxive = PCV21, Shingrix = RZV, Boostrix and Adacel = Tdap.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Hepatitis A requests need no risk factor <span class="gsrc">[AAFP Notes; Imm sl 16]</span>.</li>
<li>Pneumococcal series: do not add PPSV23 after PCV20 or PCV21 <span class="gsrc">[AAFP Notes]</span>.</li>
<li>A dose 5 or more days early is repeated, not counted <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Engerix-B for dialysis uses a 2 mL dose <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Shingrix is not limited to age 50; immunocompromised adults qualify <span class="gsrc">[AAFP Notes; T]</span>.</li>
<li>Pregnant patients receive hepatitis A vaccine only if in a risk group (T).</li>
<li>Egg allergy does not restrict influenza vaccine choice <span class="gsrc">[AAFP Notes]</span>.</li>
<li>Hepatitis A is not a live vaccine <span class="gsrc">[Imm sl 14]</span>.</li>
</ul></div>
</section>

<section class="gobj" id="gp-8">
<h3>8. SBAR, patient communication and vaccine hesitancy</h3>
<div class="gbar"><span>SECTION 8</span><b>Sort and write an SBAR, explain the recommendation in plain language, and respond to a hesitant patient with Ask-Tell-Ask.</b><i>Immunization deck slides 20&ndash;36; 9/21 lecture (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>SBAR = Situation, Background, Assessment, Recommendation.</li>
<li>If an SBAR is hard to form, think in reverse, starting with the recommendation.</li>
<li>Be complete but concise.</li>
<li>Tell the patient the recommendation in simple language, why they need it, and when the next dose is due.</li>
<li>Ask-Tell-Ask: ask why, tell with information about that belief, ask what they now think.</li>
</ul>
<h4>Know this</h4>
<div class="gcards"><div class="gcard"><div class="gcard-t">Situation</div><div class="gcard-r"><span class="gcard-k">Content</span><br>Simple: why you are communicating (T)</div><div class="gcard-r"><span class="gcard-k">Example <span class="gsrc">[Imm sl 22]</span></span><br>Mrs. Jones is at the pharmacy to be assessed for vaccine needs</div></div><div class="gcard"><div class="gcard-t">Background</div><div class="gcard-r"><span class="gcard-k">Content</span><br>The characteristics that support your assessment (T)</div><div class="gcard-r"><span class="gcard-k">Example <span class="gsrc">[Imm sl 22]</span></span><br>61-year-old health care worker with type 2 diabetes complicated by chronic kidney disease; had chickenpox; screening checklist negative; vaccine history</div></div><div class="gcard"><div class="gcard-t">Assessment</div><div class="gcard-r"><span class="gcard-k">Content</span><br>The source and what is indicated (T)</div><div class="gcard-r"><span class="gcard-k">Example <span class="gsrc">[Imm sl 22]</span></span><br>AAFP recommends PCV21 for ages 19&ndash;64 with diabetes, Shingrix over 50, influenza, RSV and an updated COVID-19 vaccine</div></div><div class="gcard"><div class="gcard-t">Recommendation</div><div class="gcard-r"><span class="gcard-k">Content</span><br>What you recommend, including the next dose</div><div class="gcard-r"><span class="gcard-k">Example <span class="gsrc">[Imm sl 22]</span></span><br>PCV21, Shingrix, influenza, RSV, updated COVID-19 vaccine; second Shingrix dose in 2&ndash;6 months</div></div></div>
<div class="gpt"><h5>Writing an SBAR</h5><ul>
<li>Which version applies: this table (Imm sl 22: Background = patient characteristics, Assessment = what the AAFP schedule recommends) is for a vaccine-needs SBAR. For a prescription-error SBAR (the prescription-error SBAR taught in the Week 11 and Week 14 labs), use the Week 11 deck definition: Background = the clinical fact, Assessment = the actual problem and why it matters (see the Lahoud guide, section 7).</li>
<li>Start from the recommendation, then ask what assessment led to it and what background supports it <span class="gsrc">[Imm sl 20; T]</span>.</li>
<li>Be complete but concise <span class="gsrc">[Imm sl 20]</span>.</li>
<li>Name the source (for example AAFP or CDC) in the assessment, especially early in a career (T).</li>
<li>In practice SBARs are short and can be sent through chart messaging; the lab versions are longer (T).</li>
</ul></div>
<div class="gpt"><h5>Talking to the patient</h5><ul>
<li>Give the assessment and recommendation in patient-friendly language <span class="gsrc">[Imm sl 23]</span>.</li>
<li>Example: a pneumonia vaccine called PCV21 is recommended because of diabetes and higher risk of severe illness; also shingles, flu, RSV and an updated COVID-19 vaccine <span class="gsrc">[Imm sl 23]</span>.</li>
<li>State the next dose: the shingles vaccine needs a second shot in 2&ndash;6 months <span class="gsrc">[Imm sl 23]</span>.</li>
<li>Use the simplest language and say why the patient specifically needs the vaccine (age lowers immunity; diabetes weakens the immune system) (T).</li>
</ul></div>
<div class="gpt"><h5>Vaccine hesitancy</h5><ul>
<li>Definition: the reluctance or refusal to vaccinate despite the availability of vaccines <span class="gsrc">[Imm sl 27]</span>.</li>
<li>Health care professionals may be vaccine hesitant <span class="gsrc">[Imm sl 27]</span>.</li>
<li>One of the most critical barriers to effective vaccination; threatens progress against vaccine-preventable diseases <span class="gsrc">[Imm sl 27]</span>.</li>
<li>Has led to resurgence of disease such as measles; in 2019 the WHO named it one of the ten leading threats to global health <span class="gsrc">[Imm sl 28]</span>.</li>
<li>It is likely to be on assessments (T).</li>
<li>Common misconceptions: the COVID vaccine gave me COVID; I took the flu vaccine and got the flu anyway; I have a great immune system; mRNA vaccines change your DNA; vaccines cause autism; COVID is just like a head cold; vaccines contain harmful ingredients <span class="gsrc">[Imm sl 30]</span>.</li>
<li>A hesitant patient is not a bad or unintelligent person; their information source is incorrect (T). Do not use the term &ldquo;anti-vaxxer&rdquo; (T).</li>
</ul></div>
<div class="gcards"><div class="gcard"><div class="gcard-t">Ask</div><div class="gcard-r"><span class="gcard-k">What to say or do <span class="gsrc">[Imm sl 32]</span></span><br>&ldquo;It sounds like you don&rsquo;t want the ___ shot today. Can you help me understand why not?&rdquo; Then: &ldquo;Do you mind if I share some information with you about the vaccine?&rdquo;</div><div class="gcard-r"><span class="gcard-k">Purpose</span><br>Learn the reason and get permission</div></div><div class="gcard"><div class="gcard-t">Tell</div><div class="gcard-r"><span class="gcard-k">What to say or do <span class="gsrc">[Imm sl 32]</span></span><br>Respond with information centered on the patient&rsquo;s belief or question; listen and observe verbal and nonverbal reactions; address further questions or confusion</div><div class="gcard-r"><span class="gcard-k">Purpose</span><br>Address the specific belief</div></div><div class="gcard"><div class="gcard-t">Ask</div><div class="gcard-r"><span class="gcard-k">What to say or do <span class="gsrc">[Imm sl 32]</span></span><br>&ldquo;What are your thoughts now about getting this vaccine?&rdquo;</div><div class="gcard-r"><span class="gcard-k">Purpose</span><br>Check where the patient stands</div></div><div class="gcard"><div class="gcard-t">If still declined</div><div class="gcard-r"><span class="gcard-k">What to say or do <span class="gsrc">[Imm sl 32]</span></span><br>Respect autonomy; they can contact you to learn more or if they change their mind</div><div class="gcard-r"><span class="gcard-k">Purpose</span><br>Keep the relationship</div></div></div>
<div class="gpt"><h5>Content of the Tell step</h5><ul>
<li>Scientific information: benefits shown in trials (for example reduced hospitalization, preventing symptoms or long-term effects) and the risks of the vaccine <span class="gsrc">[Imm sl 33]</span>.</li>
<li>Use reliable sources <span class="gsrc">[Imm sl 33]</span>.</li>
<li>Be sensitive to religious and cultural beliefs; religious leaders can help; clinics at places of worship address concerns <span class="gsrc">[Imm sl 34]</span>.</li>
<li>Share protection of others, especially close contacts; a household member such as a grandparent who may benefit makes parents more likely to vaccinate <span class="gsrc">[Imm sl 35]</span>.</li>
<li>Help the patient evaluate actual risks and benefits and reach their own decision; address fears about side effects; use kindness, patience and active listening <span class="gsrc">[Imm sl 36]</span>.</li>
</ul></div>
<div class="gpt"><h5>Matching a response to a misconception (T)</h5><ul>
<li>&ldquo;I took the flu vaccine and I got the flu anyway&rdquo;: influenza virus has multiple strains.</li>
<li>&ldquo;I have a great immune system&rdquo;: an immune system not previously exposed to the pathogen cannot fight it.</li>
<li>&ldquo;mRNA vaccines change your DNA&rdquo;: mRNA does not enter the nucleus.</li>
<li>&ldquo;Vaccines cause autism&rdquo;: large studies found no signal for autism.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>S (simple reason for contact) vs B (supporting characteristics) vs A (interpretation and source) vs R (what to do) <span class="gsrc">[Imm sl 20&ndash;22]</span>.</li>
<li>First Ask (why; permission) vs Tell (information about their belief) vs final Ask (current thoughts) <span class="gsrc">[Imm sl 32]</span>.</li>
<li>Vaccine hesitancy (reluctance or refusal despite availability) vs a contraindication (a reason not to give the vaccine) <span class="gsrc">[Imm sl 27; AAFP]</span>.</li>
<li>Patient-friendly language (to the patient) vs the SBAR with citations (to a prescriber) <span class="gsrc">[Imm sl 22&ndash;23]</span>.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>SBAR sorting. Example stem: &ldquo;AAFP recommends PCV21 for patients aged 19&ndash;64 with diabetes.&rdquo; Which component? Step 1: decide whether it describes the patient, the interpretation or the action. Step 2: it states the guideline source and the indication, so Assessment.</li>
<li>Hesitancy statement, then best response. Example stem: &ldquo;I took the flu vaccine and got the flu anyway.&rdquo; Step 1: ask why and get permission. Step 2: respond about strains, then ask what they think now.</li>
<li>Step sorting. Example stem: &ldquo;Do you mind if I share some information?&rdquo; Which Ask-Tell-Ask step? Answer: first Ask, permission.</li>
<li>Religious reason. Example stem: a patient declines for religious reasons. Best answer: show sensitivity and hear the concerns <span class="gsrc">[Imm sl 34]</span>.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Do not dismiss the belief and repeat the benefits; address the stated belief <span class="gsrc">[Imm sl 32]</span>.</li>
<li>Do not label the patient; do not say &ldquo;anti-vaxxer&rdquo; (T).</li>
<li>Do not stop talking to a patient who still declines; respect autonomy and keep the door open <span class="gsrc">[Imm sl 32]</span>.</li>
<li>Cite the source in the SBAR assessment (T).</li>
<li>Use reliable sources, not AI, for patient information in the lab (T) <span class="gsrc">[Imm sl 33]</span>.</li>
</ul></div>
</section>

`;

const GUIDE_HTML = `
<h2>Study guide</h2>
<p class="sub">One guide per professor, in the order of the exam. Each section gives what to know, what is easily confused, how it is asked and the usual traps. Bracketed tags name the source; (T) marks a point heard only in a recording.</p>
<h2>Dr. Lahoud: dispensing, errors and the DEENT lab</h2>
<nav class="gtoc"><ol>
<li><a href="#gl-1">Medication use process, errors and the Swiss cheese model</a></li>
<li><a href="#gl-2">Who can prescribe and what makes a prescription valid</a></li>
<li><a href="#gl-3">Generic substitution and label expiration dates</a></li>
<li><a href="#gl-4">The three-step prescription review and error classification</a></li>
<li><a href="#gl-5">Counseling</a></li>
<li><a href="#gl-6">DEENT lab, part 1: acne and QuEST/SCHOLAR-MAC</a></li>
<li><a href="#gl-7">DEENT lab, part 2: ophthalmic review</a></li>
<li><a href="#gl-8">DEENT lab, part 3: psoriasis and scaly dermatoses</a></li>
</ol></nav>

<section class="gobj" id="gl-1">
<h3>1. Medication use process, errors and the Swiss cheese model</h3>
<div class="gbar"><span>SECTION 1</span><b>Name the five steps, place each error at its step, and explain how an error reaches a patient.</b><i>Intro to Dispensing deck, slides 5&ndash;10 (sl.); 8/24 transcript (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>Five steps in order: prescribing, order processing, dispensing, administration, monitoring [sl. 6].</li>
<li>An error can occur at any step [sl. 7].</li>
<li>Swiss cheese model: several small errors line up and allow a major error [sl. 8].</li>
<li>An unaddressed medication error becomes a medication-related problem [sl. 9].</li>
<li>The pharmacist&rsquo;s two roles: prescription review and medication counseling [sl. 10].</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>The five steps and their errors</h5>
<table class="reftab"><thead><tr><th>Step</th><th>Errors listed on the slide</th><th>Source</th></tr></thead><tbody>
<tr><td>Prescribing</td><td>Inappropriate medication selection; inappropriate dose, formulation, route or sig (directions)</td><td>sl. 7</td></tr>
<tr><td>Order processing</td><td>Transcribing error</td><td>sl. 7</td></tr>
<tr><td>Dispensing</td><td>Incorrect drug selection or expired medication; mislabeled or mis-bagged product; incorrect patient</td><td>sl. 7</td></tr>
<tr><td>Administration</td><td>Wrong instructions to the patient; lack of counseling or patient misunderstanding</td><td>sl. 7</td></tr>
<tr><td>Monitoring</td><td>Drug&ndash;drug interaction (DDI); allergies; adverse events (AEs); lack of counseling or patient misunderstanding</td><td>sl. 7</td></tr>
</tbody></table></div>
<div class="gpt"><h5>Swiss cheese model</h5><ul>
<li>Each step is a slice of cheese, and each slice has holes [sl. 8; (T)].</li>
<li>Slices named in lecture: the prescriber, the technician entering the order, the technician filling the product, and the pharmacist double-checking [(T)].</li>
<li>An error that passes through a hole in every slice reaches the patient [(T)].</li>
<li>The next slice is meant to catch what the previous slice missed [(T)].</li>
<li>The pharmacist&rsquo;s goal is to catch major errors before they cause harm [(T)].</li>
</ul></div>
<div class="gpt"><h5>Downstream effects</h5><ul>
<li>Unaddressed medication error &rarr; medication-related problem [sl. 9].</li>
<li>Harms named in lecture: wrong medication, unnecessary medication, dose too high causing an adverse effect [(T)].</li>
</ul></div>
<div class="gpt"><h5>The pharmacist&rsquo;s role</h5><ul>
<li>Prescription review acts at order processing and dispensing [sl. 10].</li>
<li>Medication counseling acts at administration and monitoring [sl. 10].</li>
<li>Counseling does not replace prescription review; they are separate roles [sl. 10].</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Order processing vs dispensing: order processing is entering the prescription into the system (transcribing); dispensing is handling the product [sl. 7].</li>
<li>Incorrect patient: slide 7 lists it under dispensing, but slide 38 and the errors-and-omissions (EOOR) key classify it as a transcribing error; the exam keys transcribing [sl. 38; EOOR st. 4].</li>
<li>Medication error vs medication-related problem: the problem is the downstream result of an error nobody addressed [sl. 9].</li>
<li>Prescription review vs counseling: review catches errors before the product leaves; counseling helps the patient use it correctly [sl. 10, 41].</li>
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
<li>A prescription drug order is a written order, or a verbal order from a practitioner or authorized agent, to a pharmacist for a drug or device [sl. 13].</li>
<li>Required items depend on three categories: dangerous drug (non-controlled), CIII&ndash;V, and CII [sl. 15].</li>
<li>A prescription may hold more information than required, never less [sl. 15; (T)].</li>
<li>Dangerous drugs: no refill limit, 1 year. CIII&ndash;V: 5 refills, 6 months. CII: 0 refills, 30 days [sl. 22].</li>
<li>Texas law requires the date of birth on CIII&ndash;V prescriptions even though federal law does not [(T)].</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Who is a practitioner</h5><ul>
<li>Licensed prescribers in Texas: physicians (MD, DO), dentists (DDS, DMD), podiatrists (DPM), veterinarians (DVM), and optometrists (therapeutic optometrists and optometric glaucoma specialists) [sl. 14].</li>
<li>Prescribers licensed in another state, Canada or Mexico, in a field that would allow prescribing in Texas [sl. 14].</li>
<li>Out-of-state physicians, dentists, veterinarians and podiatrists for controlled substances: an active DEA number is required, and Schedules II&ndash;V are allowed if legal in their state [sl. 14].</li>
<li>Delegated prescribers: advanced practice registered nurses (APRNs) and physician assistants (PAs) prescribe if a physician delegates under Chapter 157 [sl. 14].</li>
<li>Pharmacists in certain settings (hospital, hospital-based clinic, academic health center) may sign dangerous-drug prescriptions if delegated under section 157.101 [sl. 14].</li>
<li>The practitioner types are not limited to MDs [(T)].</li>
</ul></div>
<div class="gpt"><h5>Required items by category</h5>
<table class="reftab"><thead><tr><th>Item</th><th>Dangerous drug</th><th>CIII&ndash;V</th><th>CII</th></tr></thead><tbody>
<tr><td>Date of issuance; patient name; drug name, strength, dosage form, quantity; directions; prescriber name, address, phone</td><td>Required</td><td>Required</td><td>Required</td></tr>
<tr><td>Patient address</td><td>Required unless readily retrievable from the pharmacy patient medication record (PMR)</td><td>On the prescription</td><td>On the prescription</td></tr>
<tr><td>Patient date of birth (DOB)</td><td>Not required on the prescription, but a record of DOB or age must be in the PMR</td><td>On the prescription, even if in the PMR</td><td>On the prescription</td></tr>
<tr><td>Animal patient</td><td>Species and owner&rsquo;s name</td><td>Species and owner&rsquo;s name</td><td>Species and owner&rsquo;s name</td></tr>
<tr><td>Intended use (indication)</td><td>Required unless the prescriber decides it is not in the patient&rsquo;s best interest</td><td>Same</td><td>Same</td></tr>
<tr><td>Prescriber DEA number</td><td>Not required</td><td>Required</td><td>Required</td></tr>
<tr><td>Quantity as number and word (written orders)</td><td>Not required</td><td>Required</td><td>Required</td></tr>
<tr><td>Signature</td><td>Manual, valid replica, or valid electronic if e-prescribed</td><td>Manual, valid replica, or valid electronic if e-prescribed</td><td>Manual (no stamp or replica) or valid electronic if e-prescribed</td></tr>
<tr><td>Official Texas prescription form</td><td>Not required</td><td>Not required</td><td>Required unless valid e-prescription</td></tr>
</tbody></table>
<ul><li>Sources: sl. 16, 18, 20, 27. The CII column inherits everything required for CIII&ndash;V [sl. 20].</li></ul></div>
<div class="gpt"><h5>Why the DEA number and word quantity</h5><ul>
<li>The DEA number shows federal permission to prescribe controlled substances and helps track prescribing habits [(T)].</li>
<li>Quantity as a number and a word (for example #20 (twenty)) limits diversion [sl. 18; (T)].</li>
<li>If a written controlled-substance quantity has no word, call to verify the quantity per the Texas State Board of Pharmacy (TSBP) [sl. 18].</li>
<li>The lecturer did not require the DEA number letter format [(T)].</li>
</ul></div>
<div class="gpt"><h5>Additional CII rules</h5><ul>
<li>A written CII must be on a TSBP-issued official form and manually signed; this is not ideal [sl. 20].</li>
<li>The pharmacist records the date filled and the Rx number on the prescription record [sl. 20; (T) so auditors can track it].</li>
<li>Controlled-substance prescriptions should be issued electronically except in limited circumstances; the prescriber, not the pharmacist, ensures this [sl. 21; (T)].</li>
<li>Check the patient&rsquo;s prescription monitoring program (PMP) history before dispensing opioids, benzodiazepines, barbiturates or carisoprodol [sl. 21].</li>
</ul></div>
<div class="gpt"><h5>Refills and script expiration</h5>
<table class="reftab"><thead><tr><th>Category</th><th>Refill limit</th><th>Script expires (after issue)</th><th>Note</th></tr></thead><tbody>
<tr><td>Dangerous drug</td><td>No limit</td><td>1 year</td><td>&ndash;</td></tr>
<tr><td>CIII&ndash;V</td><td>5 refills</td><td>6 months</td><td>3 months for mid-level practitioners (slide 22 footnote; not stressed in lecture)</td></tr>
<tr><td>CII</td><td>0 refills</td><td>30 days</td><td>Multiple prescriptions allowed if total is 90 days&rsquo; supply or less, issued the same day, with an earliest fill date noted</td></tr>
</tbody></table>
<ul><li>Source: sl. 22, 27.</li></ul></div>
<div class="gpt"><h5>CII multiple-prescription example</h5><ul>
<li>Three Focalin XR 10 mg scripts, all dated 8/24/2026, each 30 capsules and 0 refills [sl. 23].</li>
<li>Script 1 fills now; script 2 lists earliest fill date 9/24/2026; script 3 lists 10/24/2026 [sl. 23].</li>
<li>Together they give a 90-day supply [sl. 22; (T)].</li>
<li>The prescriber, not the patient or pharmacist, sets the earliest fill dates [sl. 22].</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Dangerous drug vs CIII&ndash;V on DOB: DOB may live in the PMR for a dangerous drug; it must be on the prescription for CIII&ndash;V.</li>
<li>Dangerous drug vs CIII&ndash;V on address: PMR can supply it only for a dangerous drug.</li>
<li>CIII&ndash;V vs CII on refills: CIII&ndash;V allows up to 5; CII allows none.</li>
<li>CII vs other categories on signature: a stamp or replica signature is not accepted for a CII.</li>
<li>Refill limit vs expiration: &ldquo;5 refills&rdquo; and &ldquo;6 months&rdquo; are both CIII&ndash;V limits, whichever ends first [sl. 22, 27].</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Select-all about one category. Example stem: &ldquo;Which are required on a written CIII&ndash;V prescription but not on a dangerous-drug prescription?&rdquo; Answer: DEA number, DOB on the prescription, quantity as a word.</li>
<li>Scenario. Example stem: &ldquo;A written alprazolam prescription lacks the DOB, which is in the PMR. Valid?&rdquo;</li>
<li>Step 1: name the category (alprazolam is CIV, so CIII&ndash;V) [sl. 19; (T)].</li>
<li>Step 2: read that category&rsquo;s column. CIII&ndash;V needs the DOB on the prescription, so it is not valid.</li>
<li>Match question: pair each category with its refill limit and expiration.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>PMR exception applied to CIII&ndash;V; it applies only to the dangerous-drug address and DOB.</li>
<li>Requiring a DEA number on a dangerous-drug prescription; it is not required.</li>
<li>A missing indication is not a reason to refuse or to call; the prescriber may omit it [sl. 16; (T)].</li>
<li>Prescribing refills on a CII; that is a prescribing error.</li>
<li>Forgetting that the 6-month CIII&ndash;V expiration also applies to a prescription with refills left.</li>
</ul></div>
<dl class="gwords">
<dt>PMR</dt><dd>Patient medication record kept by the pharmacy.</dd>
<dt>TSBP</dt><dd>Texas State Board of Pharmacy.</dd>
<dt>PMP</dt><dd>Prescription monitoring program: the patient&rsquo;s dispensing history for controlled substances [(T)].</dd>
<dt>Dangerous drug</dt><dd>A non-controlled prescription drug [sl. 16].</dd>
</dl>
</section>

<section class="gobj" id="gl-3">
<h3>3. Generic substitution and label expiration dates</h3>
<div class="gbar"><span>SECTION 3</span><b>Decide when a brand must be dispensed, choose the correct label date, and compute script expiration dates.</b><i>Intro to Dispensing deck, slides 22&ndash;26; EOOR key station 10; 8/24 transcript (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>Brand is required only if the prescriber states it in the way the prescription type requires [sl. 24].</li>
<li>Written prescription: the prescriber handwrites &ldquo;Brand Necessary&rdquo; or &ldquo;Brand Medically Necessary&rdquo; [sl. 24].</li>
<li>Label date for a vial filled from a stock bottle: one year after the fill date, or the stock bottle expiration if earlier [sl. 25].</li>
<li>A stock date given as month and year runs to the last day of that month [EOOR st. 10].</li>
<li>Compounded or reconstituted products follow the product&rsquo;s own directions [sl. 25].</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Preventing substitution</h5>
<table class="reftab"><thead><tr><th>Prescription type</th><th>What prevents substitution</th><th>Source</th></tr></thead><tbody>
<tr><td>Written</td><td>Prescriber handwrites &ldquo;Brand Necessary&rdquo; or &ldquo;Brand Medically Necessary&rdquo;</td><td>sl. 24</td></tr>
<tr><td>Oral</td><td>Prescriber states it verbally and the pharmacist documents it</td><td>sl. 24</td></tr>
<tr><td>Electronic</td><td>Clearly indicated in the e-prescription</td><td>sl. 24</td></tr>
</tbody></table></div>
<div class="gpt"><h5>Written methods that do not prevent substitution</h5><ul>
<li>Checkboxes [sl. 24].</li>
<li>Two-line prescription forms [sl. 24].</li>
<li>Preprinted wording [sl. 24].</li>
<li>Rubber stamps [sl. 24].</li>
<li>Lab prescriptions are assumed to arrive electronically [(T)].</li>
<li>When brand is validly required, filling the generic is the error &ldquo;incorrect drug filled&rdquo; [EOOR st. 2].</li>
</ul></div>
<div class="gpt"><h5>Choosing the label expiration (use-before) date</h5><ul>
<li>Compare two dates: one year after the fill date, and the stock bottle expiration [sl. 25].</li>
<li>Use the earlier date [sl. 25; (T)].</li>
<li>Convert a month-and-year stock date to the last day of that month [EOOR st. 10].</li>
<li>The fill date, not the prescription issue date, is the starting point; it often auto-populates on the label [sl. 34; (T)].</li>
<li>Reconstituted or compounded products: read the product&rsquo;s directions; Augmentin suspension is discarded 10 days after mixing [sl. 25].</li>
</ul></div>
<div class="gpt"><h5>Worked label dates (recomputed)</h5>
<table class="reftab"><thead><tr><th>Fill date</th><th>Stock bottle</th><th>1 year after fill</th><th>Label date</th></tr></thead><tbody>
<tr><td>8/24/2026</td><td>2/2027 &rarr; 2/28/2027</td><td>8/24/2027</td><td>02/28/2027 (stock is earlier) [sl. 26; (T)]</td></tr>
<tr><td>3/1/2026</td><td>8/2027 &rarr; 8/31/2027</td><td>3/1/2027</td><td>03/01/2027 (1 year is earlier)</td></tr>
<tr><td>10/15/2026</td><td>12/2026 &rarr; 12/31/2026</td><td>10/15/2027</td><td>12/31/2026 (stock is earlier)</td></tr>
<tr><td>Any fill date after 1/31/2026</td><td>1/2027 &rarr; 1/31/2027</td><td>Later than 1/31/2027</td><td>1/31/2027 [EOOR st. 10]</td></tr>
</tbody></table>
<ul><li>Check by year: 2/28/2027 is 188 days after 8/24/2026, which is under a year, so the stock date wins.</li></ul></div>
<div class="gpt"><h5>Worked script expiration dates (recomputed)</h5>
<table class="reftab"><thead><tr><th>Issued</th><th>Category</th><th>Expires</th><th>Rule</th></tr></thead><tbody>
<tr><td>8/18/2026 (Prozac)</td><td>Dangerous drug</td><td>8/18/2027</td><td>1 year [sl. 22; (T)]</td></tr>
<tr><td>8/24/2026 (alprazolam)</td><td>CIV</td><td>2/24/2027</td><td>6 months [sl. 22]</td></tr>
<tr><td>8/24/2026 (Focalin XR)</td><td>CII</td><td>9/23/2026</td><td>30 days [sl. 22]</td></tr>
</tbody></table>
<ul>
<li>A CII issued 8/24/2026 and presented 9/25/2026 is past 30 days and is expired.</li>
<li>A CIV issued 8/24/2026 and presented 3/1/2027 is past 6 months and is expired.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Expired prescription vs expired product: an expired prescription is a prescribing error (call the prescriber); an expired stock bottle is a dispensing error (get a fresh bottle) [sl. 38; EOOR st. 12].</li>
<li>Incorrect use-before date vs expired product: the first is a wrong date on the label; the second is a stock bottle already past its date [sl. 38].</li>
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
<li>Three steps in order: (1) legal and safe, (2) transcribed correctly, (3) product matches [sl. 30].</li>
<li>Safety is checked with Lexicomp or Micromedex, not only legality [sl. 44&ndash;45; (T)].</li>
<li>Prescribing errors usually need a call to the prescriber [sl. 38].</li>
<li>Transcribing errors: correct the system entry and regenerate the label [sl. 39].</li>
<li>Dispensing errors: replace the product and relabel before dispensing [sl. 39].</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>The three steps</h5>
<table class="reftab"><thead><tr><th>Step</th><th>Question</th><th>What to check</th><th>Source</th></tr></thead><tbody>
<tr><td>1. Legal and safe</td><td>Is the prescription legal and safe for this patient?</td><td>Date of issuance; patient ID (address if not in the PMR, DOB if controlled); medication, strength, form, quantity, sig; brand or product selection; refills; prescriber information (DEA if controlled); signature (manual if written CII)</td><td>sl. 30, 32</td></tr>
<tr><td>2. Transcribed correctly</td><td>Does the label match the prescription?</td><td>Date of fill (often auto-populates); correct patient; drug, strength, form, quantity, sig; brand-necessary noted; refills as prescribed; prescriber information</td><td>sl. 30, 34</td></tr>
<tr><td>3. Product match</td><td>Does the stock product match the transcribed product?</td><td>Correct medication; strength; formulation (tablet, capsule, suspension, injection; ER vs IR); expiration date</td><td>sl. 30, 36</td></tr>
</tbody></table></div>
<div class="gpt"><h5>Rules inside the steps</h5><ul>
<li>If a prescription is not legal or not safe, stop and call the prescriber before processing [(T)].</li>
<li>Administration instructions are not the same as the prescribed sig [sl. 32].</li>
<li>Watch for brand-to-generic and look-alike sound-alike (LASA) errors in steps 2 and 3 [sl. 34, 36].</li>
<li>Do not rely only on bottle color or look; always read the label [sl. 36].</li>
<li>&ldquo;Daily&rdquo; and &ldquo;once a day&rdquo; are the same sig [(T)].</li>
</ul></div>
<div class="gpt"><h5>Error types and fixes</h5>
<table class="reftab"><thead><tr><th>Type</th><th>Errors on the list</th><th>Fix</th></tr></thead><tbody>
<tr><td>Prescribing (often a call to the prescriber)</td><td>Prescription expired; dose or frequency too high or too low; insufficient prescribed quantity (common with liquids); inappropriate number of refills; DEA number missing (controlled)</td><td>Contact the prescriber to clarify, correct or obtain a new prescription [sl. 38&ndash;39]</td></tr>
<tr><td>Transcribing</td><td>Incorrect patient selected or processed; incorrect drug entered; directions or sig transcribed incorrectly; number of refills transcribed incorrectly</td><td>Correct the entry in the pharmacy system and regenerate labels (work with the technician, then reverify) [sl. 39; EOOR st. 2, 4]</td></tr>
<tr><td>Dispensing</td><td>Incorrect drug filled (for example bupropion for buspirone, generic for brand); incorrect formulation (IR vs ER); incorrect strength; insufficient quantity filled; incorrect use-before date; expired product used</td><td>Replace the product or relabel before dispensing (work with the technician, then reverify) [sl. 39; EOOR st. 1, 3, 9, 10, 12]</td></tr>
</tbody></table>
<ul><li>&ldquo;No errors and safe to dispense as is&rdquo; is also an answer choice (EOOR stations 5 and 11).</li></ul></div>
<div class="gpt"><h5>EOOR answer key by station</h5>
<table class="reftab"><thead><tr><th>Station</th><th>Error and type</th><th>Fix</th></tr></thead><tbody>
<tr><td>1</td><td>Filled hydralazine for hydroxyzine; dispensing</td><td>Correct stock bottle with technician; reverify</td></tr>
<tr><td>2</td><td>Label says BID, prescription says daily (transcribing); brand necessary but generic filled (dispensing)</td><td>Correct label directions; correct stock bottle</td></tr>
<tr><td>3</td><td>SS filled instead of DS; dispensing</td><td>Correct stock bottle</td></tr>
<tr><td>4</td><td>Jennifer Williams selected for Bill Williams; refills 3 on label, 2 on prescription; transcribing</td><td>Technician processes correct patient; transcribe refills correctly</td></tr>
<tr><td>5, 11</td><td>No errors</td><td>Safe to dispense</td></tr>
<tr><td>6</td><td>Expired (&gt;6 months, CIII&ndash;V); DEA missing; wrong drug entered (not keyed); 1 mg filled for 0.5 mg</td><td>Call prescriber (expired, DEA); correct entry; correct bottle</td></tr>
<tr><td>7</td><td>Dose could reach 7200 mg daily, maximum 3200 mg/day; prescribing</td><td>Contact prescriber with a new recommendation</td></tr>
<tr><td>8</td><td>Expired (&gt;12 months, dangerous drug); apixaban filled for Xarelto</td><td>New prescription; correct bottle</td></tr>
<tr><td>9</td><td>60 mL dispensed, 75 mL needed; dispensing</td><td>Fill sufficient amount</td></tr>
<tr><td>10</td><td>IR instead of ER; use-before wrong (bottle 1/2027, so 1/31/2027); wrong drug entered (not keyed)</td><td>Work with technician</td></tr>
<tr><td>12</td><td>prn reason missing on label (transcribing); expired product</td><td>Fix directions; fresh bottle</td></tr>
<tr><td>13</td><td>CII expired (&gt;1 month); CII has refills; DEA missing</td><td>New prescription; call provider; get DEA number</td></tr>
</tbody></table>
<ul><li>Source: EOOR key. &ldquo;Not keyed&rdquo; is the key&rsquo;s own note on the wrong-drug-entered item.</li></ul></div>
<div class="gpt"><h5>Worked example: Prozac prescription</h5><ul>
<li>Prescription: Prozac 20 mg tablets, qty 30, 1 tablet by mouth daily, 6 refills, indication depression, dated 8/18/2026, substitution permitted [sl. 31].</li>
<li>Step 1: dangerous drug; address present; DOB in the PMR is acceptable; 6 refills are allowed (no limit); expires 8/18/2027. Legal and safe [sl. 33; (T)].</li>
<li>Step 2: label shows fill date 08/24/26, fluoxetine 20 mg, 1 tablet daily, 6 refills. Fill date differs from issue date by design. Transcribed correctly [sl. 35; (T)].</li>
<li>Step 3: the stock bottle is fluvoxamine 25 mg, expiring 2/2027. Errors: incorrect stock bottle (LASA) and incorrect use-before date [sl. 37].</li>
<li>Label shows USE BEFORE 08/24/27; the earlier stock date makes it 02/28/2027 [sl. 37; (T)].</li>
<li>Fix: dispensing error, so replace the product with the technician and relabel; no call to the prescriber [sl. 39; (T)].</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Insufficient quantity prescribed (prescribing, call prescriber) vs insufficient quantity filled (dispensing, fill the right amount) [sl. 38; EOOR st. 9].</li>
<li>Expired prescription (prescribing) vs expired product (dispensing) [sl. 38].</li>
<li>Incorrect drug entered (transcribing, fix the entry) vs incorrect drug filled (dispensing, replace the bottle) [sl. 38].</li>
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
<dt>ER / IR</dt><dd>Extended release / immediate release [sl. 36].</dd>
<dt>SS / DS</dt><dd>Single strength / double strength [EOOR st. 3].</dd>
</dl>
</section>

<section class="gobj" id="gl-5">
<h3>5. Counseling</h3>
<div class="gbar"><span>SECTION 5</span><b>Run a counseling session with the 3 prime questions and cover the rubric elements in order.</b><i>Intro to Dispensing deck, slides 40&ndash;45; 8/24 transcript (T)</i></div>
<h4>At a glance</h4>
<ul>
<li>The 3 prime questions: what the doctor said it is for, how to take it, what to expect [sl. 43].</li>
<li>Counseling improves adherence, prevents harm, empowers patients and reduces healthcare costs [sl. 42].</li>
<li>Confirm the patient with at least two identifiers [sl. 44].</li>
<li>Use Lexicomp or Micromedex to find counseling content quickly [sl. 44].</li>
<li>Close with teach-back and an opportunity for follow-up [sl. 44].</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>The 3 prime questions</h5>
<table class="reftab"><thead><tr><th>Prime question</th><th>Ask the patient</th><th>Then provide</th></tr></thead><tbody>
<tr><td>#1</td><td>&ldquo;What did your provider tell you this medication was for?&rdquo;</td><td>The indication</td></tr>
<tr><td>#2</td><td>&ldquo;How did your provider tell you to use this medication?&rdquo;</td><td>Dosage regimen (strength, dose, route, frequency, duration); technique if applicable; self-monitoring; missed doses; refills; storage</td></tr>
<tr><td>#3</td><td>&ldquo;What did your provider tell you to expect?&rdquo;</td><td>Common side effects; expected efficacy and time to effect; serious warnings</td></tr>
</tbody></table>
<ul><li>Source: sl. 43&ndash;44.</li></ul></div>
<div class="gpt"><h5>Rubric order</h5><ul>
<li>Introduction: introduce yourself as a pharmacist intern; confirm the patient or agent with at least two identifiers; explain the purpose [sl. 44].</li>
<li>Obtaining information: allergies and reaction; pregnancy or breastfeeding if applicable; other medicines including OTC, vitamins, minerals and herbals; concerns or questions [sl. 44].</li>
<li>Competence: provide the medication name (brand and generic) before prime question #1 [sl. 44].</li>
<li>Communication: effective non-verbal behavior; logical order; accurate information; plain language without jargon; open-ended questions, not compounded or leading ones; teach-back; closure with follow-up [sl. 44].</li>
</ul></div>
<div class="gpt"><h5>Why counseling matters and how it is practiced</h5><ul>
<li>Adherence rises when the patient understands and agrees to the regimen [(T)].</li>
<li>Counseling reduces return visits to the clinic or hospital [(T)].</li>
<li>Lab: counsel a partner on one reviewed medication and score each other with the OSCE counseling rubric [sl. 45].</li>
<li>Resources allowed in lab: lecture notes plus Lexidrug or Micromedex [sl. 45].</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Prime question vs the information that follows it: ask first, then fill gaps.</li>
<li>Open-ended vs leading or compounded questions: only open-ended questions score [sl. 44].</li>
<li>Counseling vs prescription review: separate pharmacist roles [sl. 10].</li>
<li>Number of identifiers: at least two, not one [sl. 44].</li>
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
<li>QuEST: Quickly assess, Establish self-care candidacy, Suggest strategies, Talk about the product [W14].</li>
<li>SCHOLAR-MAC supplies the quick assessment questions [W14].</li>
<li>Severity is set by lesion counts: one, some, many [Acne sl. 7&ndash;8; (T)].</li>
<li>Severe acne, possible rosacea, exacerbating factors and comedogenic drugs are not self-care [Acne sl. 18].</li>
<li>Benzoyl peroxide is the preferred first OTC agent [Acne sl. 25].</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>QuEST and SCHOLAR-MAC</h5><ul>
<li>Q: quickly assess with SCHOLAR-MAC [W14].</li>
<li>E: establish that the patient is an appropriate self-care candidate; exclusions are checked here [W14; Acne sl. 18].</li>
<li>S: suggest self-care strategies [W14].</li>
<li>T: talk about the selected product: administration or application, efficacy (what to expect), safety (adverse effects) [W14].</li>
<li>SCHOLAR-MAC: Symptoms, Characteristics, History, Onset, Location, Aggravating factors, Remitting factors, Medications, Allergies, Conditions [Acne sl. 10, 18].</li>
<li>Ask about Medications to find drugs that cause acne [Acne sl. 10].</li>
</ul></div>
<div class="gpt"><h5>Severity and first line</h5>
<table class="reftab"><thead><tr><th>Severity</th><th>Lesions</th><th>First line (slide 40)</th></tr></thead><tbody>
<tr><td>Mildly clear</td><td>Rare non-inflammatory lesions; no more than one small lesion [Acne sl. 7]</td><td>Benzoyl peroxide alone, or essential oils, or no product</td></tr>
<tr><td>Mild</td><td>Some non-inflammatory lesions; no more than a few papules and pustules; no nodules; minimal scarring [Acne sl. 7]</td><td>One topical agent: benzoyl peroxide or a topical retinoid; topical combinations are a listed alternative</td></tr>
<tr><td>Moderate</td><td>Many non-inflammatory and some inflammatory lesions; no more than one nodule; mild scarring [Acne sl. 8]</td><td>Topical combination, for example benzoyl peroxide plus a topical retinoid</td></tr>
<tr><td>Severe</td><td>More than one nodule, with scarring [Acne sl. 8; (T)]</td><td>Refer; prescriber-directed therapy such as an oral antibiotic with a topical combination [Acne sl. 18, 29]</td></tr>
</tbody></table>
<ul><li>Dr. Patel used the words one, some and many on exam cases, and described a stepwise order; slide 40 also lists oral regimens as moderate first line [(T)].</li></ul></div>
<div class="gpt"><h5>Self-care exclusions</h5><ul>
<li>Severe acne [Acne sl. 18].</li>
<li>Possible rosacea [Acne sl. 18].</li>
<li>Exacerbating factors [Acne sl. 18].</li>
<li>Comedogenic drugs: corticosteroids, androgens, progesterone contraceptives, antiepileptics, SSRIs, lithium [Acne sl. 10].</li>
<li>Dr. Patel called drug-caused acne a straight referral to dermatology [(T)].</li>
</ul></div>
<div class="gpt"><h5>OTC products</h5>
<table class="reftab"><thead><tr><th>Product</th><th>Use and strength</th><th>Counseling points</th></tr></thead><tbody>
<tr><td>Benzoyl peroxide</td><td>OTC 2.5&ndash;10%, 1&ndash;2 times daily; bactericidal, keratolytic and comedolytic [Acne sl. 23, 26]</td><td>Bleaches hair and clothing; drying; photosensitivity; contact allergy; irritation most common and more likely with higher strengths; side effects settle in 1&ndash;2 weeks</td></tr>
<tr><td>Adapalene (Differin) 0.1%</td><td>Topical retinoid; FDA limits OTC use to persons over 12 [Acne sl. 27]</td><td>Apply at night; separate from benzoyl peroxide (am vs pm); moisturizer and sunscreen; not with sulfur, resorcinol, salicylic acid or vitamin C products (T: vitamin C may be used if kept separate)</td></tr>
<tr><td>Salicylic acid</td><td>Once or twice daily; maximum effect 4&ndash;6 weeks; limited efficacy data [Acne sl. 29]</td><td>Not preferred over benzoyl peroxide</td></tr>
</tbody></table></div>
<div class="gpt"><h5>Non-drug care and application</h5><ul>
<li>Cleanse twice daily with a mild soap or non-soap cleanser; avoid abrasives and excessive cleansing [Acne sl. 19].</li>
<li>Remove makeup with an oil-based cleanser before a water-based one [Acne sl. 19].</li>
<li>Match the vehicle to skin type; gels, solutions and lotions for oily skin [Acne sl. 24].</li>
<li>Apply: wash gently, pat dry, wait 20&ndash;30 minutes, apply a thin layer in the evening or before bedtime; avoid eyes, ears, nostrils and mouth [Acne sl. 42].</li>
<li>If stinging or irritation develops, use less often or stop temporarily [Acne sl. 42].</li>
<li>Visible benefit takes 8 weeks or more; expect a 10&ndash;25% drop in lesion count within 4&ndash;8 weeks; pharmacist check every 4&ndash;8 weeks [Acne sl. 41, 44].</li>
</ul></div>
<div class="gpt"><h5>Prescription therapy to recognize</h5><ul>
<li>Oral doxycycline and minocycline: patients over 12 (tooth discoloration under 12); avoid in pregnancy; photosensitivity; not with isotretinoin; used with topicals; reassess at 3&ndash;4 months [Acne sl. 33, 38, 40].</li>
<li>Oral isotretinoin: boxed warning for birth defects; two negative pregnancy tests before starting, a monthly test, two forms of birth control from 1 month before to 1 month after treatment; fill within a 7-day window (30 days if the patient cannot get pregnant) [Acne sl. 37&ndash;38].</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Mildly clear vs mild: mildly clear has rare lesions (one small lesion at most); mild has some non-inflammatory lesions and a few papules or pustules.</li>
<li>Mild vs moderate: mild has no nodules; moderate has many comedones, some inflammatory lesions and at most one nodule.</li>
<li>Moderate vs severe: moderate has at most one nodule and mild scarring; severe has more than one nodule with scarring.</li>
<li>Establish step vs Quickly assess: Establish is where an exclusion triggers referral [Acne sl. 18].</li>
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
<li>Part 2 sorts four conditions: dry eye disease, allergic conjunctivitis, bacterial or viral conjunctivitis, primary open-angle glaucoma (POAG) [W14].</li>
<li>Itch marks allergy; lid crusting marks infection; grittiness marks dry eye; no symptoms marks POAG [Key; Eye sl. 7, 28&ndash;29].</li>
<li>Only POAG is treated by lowering intraocular pressure (IOP) [Key].</li>
<li>Prostaglandin analogs are first line for POAG [Key; Glau. sl. 19].</li>
<li>Errors on a glaucoma prescription are corrected with SBAR communication [W14].</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>Which is which (lab answer key)</h5>
<table class="reftab"><thead><tr><th>Row</th><th>Dry eye</th><th>Allergic conjunctivitis</th><th>Bacterial or viral conjunctivitis</th><th>POAG</th></tr></thead><tbody>
<tr><td>Presentation</td><td>Mildly red eye; sandy, gritty, foreign-body feeling</td><td>Itching, tearing, red eyes</td><td>Tearing and lid crusting</td><td>No symptoms until substantial visual field loss</td></tr>
<tr><td>Treatment approach</td><td>Symptomatic relief; referral vital for diagnosis and treatment</td><td>Avoid the allergen; tears first</td><td>Symptomatic care; referral for an antibiotic if applicable</td><td>Reduce IOP</td></tr>
<tr><td>Compress</td><td>Warm</td><td>Cold</td><td>Cold</td><td>Not helpful</td></tr>
<tr><td>Non-drug</td><td>Avoid environments that raise tear evaporation, such as dusty places</td><td>Avoid the allergen</td><td>Compress</td><td>Limit drugs that raise IOP</td></tr>
<tr><td>First line</td><td>Ocular lubricants: tears or bland ointments</td><td>Tears, then antihistamines if symptoms persist</td><td>Ocular antimicrobial, with or without tears or antihistamines for symptoms</td><td>Prostaglandin analogs</td></tr>
<tr><td>Example</td><td>Artificial tears once or twice a day, on arising and before retiring</td><td>Ketotifen twice a day, age 3 and older</td><td>Ciprofloxacin solution 1&ndash;2 drops every 2 hours for 2 days, then every 4 hours for 5 days</td><td>Latanoprost once daily; refrigerate until opened, then room temperature</td></tr>
</tbody></table>
<ul>
<li>Source: Key rows, as verified in lab.</li>
<li>Conflict: the Key lists an ocular antimicrobial as first line for bacterial or viral conjunctivitis, while Dr. Lam&rsquo;s slide 34 gives cold compresses and referral. The exam keys the lab Key.</li>
</ul></div>
<div class="gpt"><h5>Dry eye details</h5><ul>
<li>Risk factors: older age, female sex, environment, comorbidities, surgery, preservatives such as benzalkonium chloride (BAK), and drugs (anticholinergics, diuretics, decongestants, oral contraceptives or hormone replacement, corticosteroids) [Eye sl. 6].</li>
<li>Refer every dry eye patient; OTC artificial tears may still be recommended [Eye sl. 10, 14].</li>
<li>Artificial tears: 1&ndash;2 drops once or twice daily, up to 3&ndash;4 times daily or hourly; preservative-free preferred; duration set by response [Eye sl. 14].</li>
<li>Bland ointment: longer retention; blurred vision and hypersensitivity [Eye sl. 15].</li>
<li>Prescription options: cyclosporine (Restasis, Cequa), lifitegrast (Xiidra), topical corticosteroids, varenicline nasal spray (Tyrvaya) [Eye sl. 17&ndash;21].</li>
<li>Cyclosporine: burning, stinging and foreign-body feeling are common and look like dry eye; used about 6 months or longer [(T); Smith sl. 67].</li>
<li>Corticosteroids: very short use only; chronic use risks glaucoma [(T)].</li>
</ul></div>
<div class="gpt"><h5>Exclusions from self-treatment (dry eye and conjunctivitis)</h5><ul>
<li>Eye pain; ocular trauma; chemical exposure; exposure to heat (not sun); blurred vision not from eye ointments; light sensitivity; signs of eyelid infection other than a stye [Eye sl. 11, 30].</li>
</ul></div>
<div class="gpt"><h5>Allergic conjunctivitis details</h5><ul>
<li>Goals: remove or avoid the allergen; limit reaction severity; symptomatic relief; protect the ocular surface [Eye sl. 31].</li>
<li>Subtypes: seasonal (itching, tearing, red eyes); vernal and giant papillary add mucous discharge; giant papillary adds contact lens intolerance [Eye sl. 29].</li>
<li>Itch arises because the allergen causes mast cells to release histamine [(T)].</li>
<li>Allergen avoidance: pollen count, closed doors and windows, hypoallergenic bedding, washing clothes, showering, air conditioning, filters, sunglasses [Eye sl. 33].</li>
<li>First line OTC: artificial tears plus a dual-acting antihistamine and mast cell stabilizer [Eye sl. 35].</li>
<li>Refer if no resolution after 72 hours of correct treatment [Eye sl. 41].</li>
</ul>
<table class="reftab"><thead><tr><th>Group</th><th>Agents</th><th>Points</th></tr></thead><tbody>
<tr><td>OTC dual-acting</td><td>Olopatadine (Pataday), alcaftadine, ketotifen</td><td>Itch relief [Eye sl. 37]</td></tr>
<tr><td>Prescription dual-acting</td><td>Azelastine, bepotastine, epinastine</td><td>[Eye sl. 37]</td></tr>
<tr><td>OTC decongestants</td><td>Naphazoline, tetrahydrozoline, brimonidine 0.025%</td><td>Redness only; beyond 72 hours rebound redness; may raise blood pressure [Eye sl. 39]</td></tr>
</tbody></table></div>
<div class="gpt"><h5>POAG and glaucoma drugs</h5><ul>
<li>POAG is silent until substantial field loss; feeling well does not show control [Glau. sl. 12].</li>
<li>Goal: lower IOP, with the target set by an eye care professional [Glau. sl. 14].</li>
<li>Severe eye pain with headache, nausea, vomiting, halos and sudden vision loss is not POAG; send for emergency eye evaluation [Glau. sl. 91&ndash;92].</li>
<li>Usual order of classes: prostaglandin analog, beta blocker, alpha-2 agonist, topical carbonic anhydrase inhibitor (CAI), cholinergic, Rho kinase inhibitor [Glau. sl. 63].</li>
</ul>
<table class="reftab"><thead><tr><th>Class</th><th>Examples and dosing</th><th>IOP lowering</th><th>Cautions</th></tr></thead><tbody>
<tr><td>Prostaglandin analog</td><td>Latanoprost, bimatoprost (Lumigan); once daily, at night</td><td>Up to 33%</td><td>Macular edema; herpetic keratitis; blurred vision, stinging, iris and eyelash pigmentation, eyelash growth [Glau. sl. 19&ndash;21]</td></tr>
<tr><td>Beta blocker</td><td>Timolol solution twice daily; Timoptic XE gel once daily</td><td>20&ndash;30%</td><td>Asthma or COPD, heart block, uncompensated cardiac failure, oral beta blocker; bradycardia, hypotension, bronchospasm [Glau. sl. 32&ndash;34]</td></tr>
<tr><td>Alpha-2 agonist</td><td>Third class in the usual order; combination drops on slide 69 are twice or three times daily</td><td>18&ndash;27%</td><td>[Glau. sl. 41, 69]</td></tr>
<tr><td>Topical CAI</td><td>Dorzolamide (Trusopt) 2% three times daily; brinzolamide 1% (Azopt) suspension; Cosopt (with timolol) twice daily; Cosopt PF preservative-free</td><td>15&ndash;26%</td><td>Sickle cell disease [Glau. sl. 35, 51, 69]</td></tr>
<tr><td>Cholinergic</td><td>Fifth in the usual order</td><td>&ndash;</td><td>Asthma [Glau. sl. 59, 63]</td></tr>
<tr><td>Rho kinase inhibitor</td><td>Netarsudil 0.02% (Rhopressa) at bedtime; Rocklatan at bedtime</td><td>&ndash;</td><td>[Glau. sl. 62]</td></tr>
<tr><td>Oral CAI (last line)</td><td>Acetazolamide, methazolamide</td><td>25&ndash;40%</td><td>Systemic acidosis [Glau. sl. 51&ndash;53]</td></tr>
</tbody></table></div>
<div class="gpt"><h5>Drop technique</h5><ul>
<li>Close the eyelids after each drop; this lowers drainage and systemic absorption [Glau. sl. 71&ndash;72].</li>
<li>Wait 5 minutes between two solutions [Glau. sl. 74].</li>
<li>Order of application: solution, then suspension, then ointment or gel-forming solution [Glau. sl. 75].</li>
<li>Contact lenses: remove first, wait 15 minutes before reinserting, especially with BAK [Glau. sl. 83; Eye sl. 46; (T)].</li>
<li>If the preservative irritates, switch to a preservative-free product [Glau. sl. 35; Eye sl. 43].</li>
</ul></div>
<div class="gpt"><h5>Glaucoma prescription review with SBAR</h5>
<table class="reftab"><thead><tr><th>Prescription vs label or bottle</th><th>Error type</th><th>Fix</th></tr></thead><tbody>
<tr><td>Bimatoprost 0.01% OU twice daily</td><td>Prescribing: frequency too high (once daily is the dose)</td><td>Call the prescriber [Glau. sl. 20; (T)]</td></tr>
<tr><td>Trusopt 2% three times daily; label says twice daily</td><td>Transcribing: sig</td><td>Re-enter the sig and regenerate the label [Glau. sl. 51]</td></tr>
<tr><td>Netarsudil at bedtime; label says every morning</td><td>Transcribing: sig</td><td>Re-enter the sig and regenerate the label [Glau. sl. 62]</td></tr>
<tr><td>Lumigan prescribed; Latisse filled</td><td>Dispensing: wrong product</td><td>Replace the product and relabel [Glau. sl. 19]</td></tr>
</tbody></table>
<ul>
<li>Use the section 4 three-step review: legal and safe, then label against prescription, then bottle against label [sl. 30].</li>
<li>SBAR is the communication format for correcting the error [W14; TOSCE guide]: <b>Situation</b> (why you are calling), <b>Background</b> (who the patient is, the prescription, the clinical facts), <b>Assessment</b> (what the actual problem is and why it matters), <b>Recommendation</b> (what should be done to correct it) [W11 OSCE deck].</li>
<li>Background is the clinical fact; Assessment is the problem. Example: Background &ldquo;the maximum prescribed dose of ibuprofen is 3.2 g/day&rdquo;; Assessment &ldquo;the total daily dose prescribed is too high&rdquo; [W11 OSCE deck].</li>
<li>Prescribing errors go to the prescriber; transcribing and dispensing errors go to the technician [sl. 38&ndash;39; EOOR key].</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Dry eye vs allergic: grittiness vs itch.</li>
<li>Allergic vs bacterial or viral: itch (allergic) vs lid crusting (infectious); tearing occurs in all types [Eye sl. 28&ndash;29].</li>
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
<li>Dandruff has no inflammation; seborrheic dermatitis and psoriasis do [Scaly sl. 6].</li>
<li>Seborrheic dermatitis: yellow, greasy scales on red skin; psoriasis: silvery white scales on sharp red plaques [Scaly sl. 6].</li>
<li>Psoriasis severity by body surface area (BSA): mild 5% or less, moderate 8% or more, severe 10% or more [Scaly sl. 26].</li>
<li>Mild to moderate psoriasis: topical therapy first [Scaly sl. 35&ndash;36].</li>
<li>Ketoconazole shampoo is first line for seborrheic dermatitis [Scaly sl. 16].</li>
</ul>
<h4>Know this</h4>
<div class="gpt"><h5>The three conditions</h5>
<table class="reftab"><thead><tr><th>Feature</th><th>Dandruff</th><th>Seborrheic dermatitis</th><th>Psoriasis</th></tr></thead><tbody>
<tr><td>Appearance</td><td>Thin white or grey flakes</td><td>Yellow, greasy scales on red skin</td><td>Discrete, symmetrical red plaques with sharp borders; silvery white scales; bleeding points</td></tr>
<tr><td>Location</td><td>Scalp</td><td>Scalp, ears, face</td><td>Scalp, elbows, knees, trunk, lower extremities</td></tr>
<tr><td>Inflammation</td><td>Absent</td><td>Present</td><td>Present</td></tr>
<tr><td>Epidermal hyperplasia</td><td>Absent</td><td>Present</td><td>Present</td></tr>
<tr><td>Cause</td><td>Malassezia</td><td>Malassezia</td><td>T-lymphocyte mediated; no Malassezia link</td></tr>
</tbody></table>
<ul><li>Source: Scaly sl. 6, 8, 11, 12, 21; (T). Cradle cap is infant scalp scaling.</li></ul></div>
<div class="gpt"><h5>OTC ingredients (slide 7)</h5>
<table class="reftab"><thead><tr><th>Ingredient</th><th>Dandruff</th><th>Seborrheic dermatitis</th><th>Psoriasis</th></tr></thead><tbody>
<tr><td>Hydrocortisone 0.5&ndash;1%</td><td>No</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Sulfur 2&ndash;5%</td><td>Yes</td><td>Yes</td><td>No</td></tr>
<tr><td>Pyrithione zinc, selenium sulfide, coal tar</td><td>Medicated shampoos for moderate to severe</td><td>Second-line shampoos</td><td>&ndash;</td></tr>
</tbody></table>
<ul><li>Hydrocortisone and sulfur hold the only two &ldquo;no&rdquo; cells [(T)].</li></ul></div>
<div class="gpt"><h5>Dandruff and seborrheic dermatitis care</h5><ul>
<li>Mild dandruff (intermittent, mild inflammation): non-medicated shampoo daily or every other day [Scaly sl. 9].</li>
<li>Moderate to severe dandruff: medicated shampoo left on 3&ndash;5 minutes; daily for 1 week, then 2&ndash;3 times weekly for 2&ndash;3 weeks, then weekly [Scaly sl. 9].</li>
<li>Seborrheic dermatitis taper is longer: 1&ndash;2 weeks daily, then 4 weeks [Scaly sl. 16; (T)].</li>
<li>Seborrheic dermatitis first line: ketoconazole shampoo; second line: selenium sulfide, pyrithione zinc, ciclopirox, coal tar [Scaly sl. 16; (T)].</li>
<li>Consult a provider if it worsens or lasts longer than 7 days [Scaly sl. 16].</li>
<li>Infant face: mild cleanser and emollient; do not suggest corticosteroids [Scaly sl. 18].</li>
<li>Infant scalp: baby oil or vegetable oil massage, non-medicated shampoo, soft bristle brush [Scaly sl. 17; (T)].</li>
</ul></div>
<div class="gpt"><h5>Psoriasis severity</h5>
<table class="reftab"><thead><tr><th>Class</th><th>BSA</th><th>Note</th></tr></thead><tbody>
<tr><td>Mild</td><td>5% or less</td><td>&ndash;</td></tr>
<tr><td>Moderate</td><td>8% or more</td><td>&ndash;</td></tr>
<tr><td>Severe</td><td>10% or more</td><td>Follow the slide, not the 20% said first [(T)]</td></tr>
<tr><td>In between</td><td>For example 7% or 9%</td><td>Take both names: 7% is mild to moderate; 9% is moderate to severe [(T)]</td></tr>
</tbody></table>
<ul><li>Source: Scaly sl. 26, 31; 11/11 recording. Slide 26 notes some phototherapy trials use 20% or more as a lower limit.</li></ul></div>
<div class="gpt"><h5>Triggers and non-drug care for psoriasis</h5><ul>
<li>Drugs that may precipitate or worsen psoriasis: lithium, NSAIDs, antimalarials such as chloroquine, beta blockers, fluoxetine, withdrawal of corticosteroids [Scaly sl. 24].</li>
<li>Lifestyle: reduce stress, exercise, weight management (BMI 18.5&ndash;24.9), moderate alcohol, stop smoking [Scaly sl. 33; (T)].</li>
<li>Skin care: moisturizers or emollients, oatmeal baths, sunscreen SPF 30+ with UVA protection [Scaly sl. 34; (T)].</li>
</ul></div>
<div class="gpt"><h5>Psoriasis drug therapy</h5>
<table class="reftab"><thead><tr><th>Therapy</th><th>Key facts</th></tr></thead><tbody>
<tr><td>Topical corticosteroid</td><td>Most effective topical; first for mild to moderate; 2&ndash;4 times daily, limited to 4 weeks or less [Scaly sl. 35&ndash;36]</td></tr>
<tr><td>Calcipotriene</td><td>Vitamin D3 analogue</td></tr>
<tr><td>Methotrexate</td><td>With folic acid 1&ndash;5 mg daily; screen with CBC and LFTs; onset 3&ndash;6 weeks; avoid in pregnancy and cirrhosis [Scaly sl. 39; (T)]</td></tr>
<tr><td>Cyclosporine</td><td>Nephrotoxic; under 4 months; CYP 3A4 and 2C9 inhibitor; contraindicated with untreated hypertension [Scaly sl. 39; (T)]</td></tr>
<tr><td>Apremilast (Otezla)</td><td>PDE-4 blocker</td></tr>
<tr><td>TNF-&alpha; inhibitors (adalimumab, etanercept, infliximab, golimumab, certolizumab)</td><td>Avoid in congestive heart failure and demyelinating disease [Scaly sl. 41&ndash;43; (T)]</td></tr>
<tr><td>All biologics</td><td>No live vaccines; screen for TB; stop during active infection [(T)]</td></tr>
<tr><td>PUVA (psoralen plus UVA)</td><td>Reserved for severe, refractory psoriasis; serious burns, blistering, peeling [Scaly sl. 44&ndash;45]</td></tr>
</tbody></table>
<ul><li>Systemic therapy is last line in mild to moderate disease [Scaly sl. 35&ndash;36].</li></ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Dandruff vs seborrheic dermatitis: inflammation and epidermal hyperplasia (absent vs present); greasy yellow scales beyond the scalp.</li>
<li>Seborrheic dermatitis vs psoriasis: greasy yellow scales on red skin vs silvery scales on sharp-bordered plaques; Malassezia vs T-cell disease.</li>
<li>Hydrocortisone vs sulfur: hydrocortisone is not effective for dandruff; sulfur is not effective for psoriasis.</li>
<li>Methotrexate vs cyclosporine: folic acid with CBC and LFTs vs nephrotoxic and under 4 months.</li>
<li>Slide 8 allows mild inflammation in dandruff; the key follows slide 6, where inflammation is absent [Scaly sl. 6, 8].</li>
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
<nav class="gtoc"><ol>
<li><a href="#gp-1">Patient care process, SCHOLAR-MAC and SOAP notes</a></li>
<li><a href="#gp-2">Insect bites and stings: referral, anaphylaxis, self-care exclusions and OTC products</a></li>
<li><a href="#gp-3">Head lice (pediculosis)</a></li>
<li><a href="#gp-4">Vital signs and physical assessment</a></li>
<li><a href="#gp-5">Specimen collection and choosing a point-of-care test</a></li>
<li><a href="#gp-6">Using the AAFP adult immunization schedule</a></li>
<li><a href="#gp-7">Vaccines by situation</a></li>
<li><a href="#gp-8">SBAR, patient communication and vaccine hesitancy</a></li>
</ol></nav>

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
<dt>PPCP</dt><dd>Pharmacist Patient Care Process, developed by the Joint Commission of Pharmacy Practitioners [OTC sl 4].</dd>
<dt>SCHOLAR-MAC</dt><dd>The ten-element interview used to collect the patient history in self-care [OTC sl 6].</dd>
<dt>SOAP note</dt><dd>Subjective, Objective, Assessment, Plan; part of medical records [OTC sl 7].</dd>
</dl></div>
<div class="gpt"><h5>PPCP</h5><ul>
<li>Five core components: collect, assess, plan, implement, follow-up [OTC sl 4].</li>
<li>Developed by the Joint Commission of Pharmacy Practitioners [OTC sl 4].</li>
<li>The slide stresses &ldquo;Do not forget follow-up!&rdquo; [OTC sl 4].</li>
<li>The SCHOLAR-MAC questions are the Collect step [OTC sl 6].</li>
</ul></div>
<table class="reftab"><thead><tr><th>Letter</th><th>Element</th><th>Question asked [OTC sl 6]</th></tr></thead><tbody>
<tr><td>S</td><td>Symptom</td><td>What are the main symptoms?</td></tr>
<tr><td>C</td><td>Characteristics</td><td>What are the symptoms like?</td></tr>
<tr><td>H</td><td>History</td><td>What has been done so far? Has this happened in the past?</td></tr>
<tr><td>O</td><td>Onset</td><td>When did it start?</td></tr>
<tr><td>L</td><td>Location</td><td>Where is the problem?</td></tr>
<tr><td>A</td><td>Aggravating factors</td><td>What makes it worse?</td></tr>
<tr><td>R</td><td>Remitting factors</td><td>What makes it better?</td></tr>
<tr><td>M</td><td>Medications</td><td>What prescription medications are you taking? OTC, vitamins, supplements?</td></tr>
<tr><td>A</td><td>Allergies</td><td>What allergies do you have to medications or other substances?</td></tr>
<tr><td>C</td><td>Conditions</td><td>What health conditions do you have? Are you currently pregnant or breastfeeding?</td></tr>
</tbody></table>
<div class="gpt"><h5>SOAP notes in the medical record</h5><ul>
<li>Part of medical records from clinics, hospitals, rehabilitation facilities, emergency rooms and urgent care centers [OTC sl 7].</li>
<li>Serve as legal documentation and are subject to subpoena [OTC sl 7].</li>
<li>Patients and their designees (family, caregivers) can access them [OTC sl 7].</li>
<li>Used to follow patients over time and across care settings [OTC sl 7].</li>
</ul></div>
<table class="reftab"><thead><tr><th>Part</th><th>Definition</th><th>What goes in it</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Subjective</td><td>Information based on or influenced by personal feelings, tastes or opinions [sl 8]</td><td>What the patient says (SCHOLAR-MAC) [sl 9]</td><td>Captures the patient&rsquo;s perspective; evaluates safety and efficacy of therapy at follow-up [sl 10]</td></tr>
<tr><td>Objective</td><td>Information that you and others observing the patient at the same time would consider facts [sl 8]</td><td>Lab results, physical exam findings including visual inspection, procedure findings [sl 9]</td><td>Documents medical facts; evaluates therapy at follow-up [sl 10]</td></tr>
<tr><td>Assessment</td><td>An evaluation of the situation; your interpretation of the nature or quality of the condition [sl 8]</td><td>What you think is happening and why [sl 9]</td><td>Gives your clinical interpretation with rationale, so others do not repeat your work [sl 10]</td></tr>
<tr><td>Plan</td><td>How you will address the condition [sl 8]</td><td>What you will do; follow-up interval and location; when to seek medical treatment; other education [sl 9]</td><td>Lets the pharmacist at follow-up see what was recommended and taught [sl 10]</td></tr>
</tbody></table>
<div class="gpt"><h5>Lab SOAP note for head lice</h5><ul>
<li>The note includes pharmacologic measures, non-pharmacologic measures and patient education [OTC sl 3].</li>
<li>Lab also uses SCHOLAR-MAC to interview a patient with a bee sting [OTC sl 3, 36].</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Subjective vs Objective: the patient says it (S); you or another observer can see or measure it (O) [OTC sl 8].</li>
<li>Assessment vs Plan: what you think is happening and why (A); what you will do, the follow-up and the education (P) [OTC sl 9].</li>
<li>PPCP vs SCHOLAR-MAC: PPCP is the 5-step process; SCHOLAR-MAC is the question set inside the Collect step [OTC sl 4, 6].</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Patient case, then &ldquo;which SCHOLAR-MAC question is missing?&rdquo; Example stem: a patient asks for something for a bite; the pharmacist has asked what has been done so far and whether it has happened before. Step 1: match the question to the table. Step 2: name the element (History).</li>
<li>Placement question. Example stem: &ldquo;Your interpretation of the patient&rsquo;s condition belongs in which part of the SOAP note?&rdquo; Step 1: decide if it is patient-reported, observed, interpreted or an action. Step 2: interpretation = Assessment [OTC sl 11].</li>
<li>Select-all on the Objective section. Step 1: keep only measurable or observed findings. Step 2: lab results, exam findings and procedure findings qualify.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>The Plan includes when to seek medical treatment and follow-up, not only the product [OTC sl 9].</li>
<li>Follow-up is a PPCP component and is easy to omit [OTC sl 4].</li>
<li>The M, A and C after the hyphen are Medications, Allergies and Conditions; pregnancy and breastfeeding are asked under Conditions [OTC sl 6].</li>
<li>Dispense and bill are not PPCP components [OTC sl 4].</li>
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
<li>Tick bites [OTC sl 14&ndash;15].</li>
<li>Scabies [OTC sl 14&ndash;15].</li>
<li>Spider bites [OTC sl 14].</li>
<li>Secondary infection [OTC sl 14].</li>
<li>A bite or sting with systemic symptoms [OTC sl 14].</li>
<li>Complete exclusion criteria are in the APhA OTC chapter [OTC sl 14].</li>
</ul></div>
<div class="gpt"><h5>Brown recluse bite</h5><ul>
<li>Early bite, about 8 hours: violaceous (violet) center surrounded by faint spreading erythema [OTC sl 16].</li>
<li>Appears &ldquo;red, white, and blue&rdquo; [OTC sl 16].</li>
<li>Spider bites are referred [OTC sl 14].</li>
</ul></div>
<div class="gpt"><h5>Stings</h5><ul>
<li>Venomous insects: honeybees, wasps, hornets, yellow jackets, fire ants [OTC sl 18].</li>
<li>Venom contains allergenic proteins and pharmacologically active compounds [OTC sl 18].</li>
<li>Usual complaints: pain, itching and irritation at the sting site [OTC sl 20].</li>
</ul></div>
<div class="gpt"><h5>Anaphylaxis</h5><ul>
<li>Rare, but may occur in severely allergic patients; a life-threatening emergency; call 911 immediately [OTC sl 19].</li>
<li>Features: fall in blood pressure, light-headedness, chest tightness, dyspnea, possible loss of consciousness [OTC sl 19].</li>
<li>Onset: as soon as 10&ndash;15 minutes, up to 6 hours after the sting [OTC sl 19].</li>
<li>Counsel the patient on the symptoms and when to call 911 [OTC sl 19].</li>
</ul></div>
<div class="gpt"><h5>Exclusions for self-care of a sting</h5><ul>
<li>Allergic reactions: hives, itching, swelling and burning of the skin [OTC sl 21].</li>
<li>Reactions away from the sting site (stung on the arm, hives on the torso or neck) [OTC sl 21].</li>
<li>Allergic reactions require referral to urgent care or the ER [OTC sl 21].</li>
<li>Hives, excessive swelling, dizziness [OTC sl 22].</li>
<li>Weakness, nausea, vomiting, difficulty breathing [OTC sl 22].</li>
<li>Severe reactions to previous bites or stings [OTC sl 22].</li>
<li>Personal or family history of significant allergic reactions such as hay fever [OTC sl 22].</li>
<li>Age under 2 years [OTC sl 22]. External analgesics are not approved for children under 2 years [APhA].</li>
</ul></div>
<div class="gpt"><h5>Product classes and general rules</h5><ul>
<li>Five classes: local anesthetics, topical antihistamines, hydrocortisone, skin protectants, counterirritants [OTC sl 23].</li>
<li>Topical antipruritics and anesthetics are not used longer than 7 days unless the provider specifically advises it [APhA].</li>
<li>Oral acetaminophen or NSAIDs may treat pain [APhA].</li>
<li>Systemic antihistamines are often used for itching but this is not a label indication [APhA].</li>
<li>First-aid antiseptics and antibiotics can help prevent secondary infection [APhA].</li>
<li>The patient&rsquo;s preferred dosage form should guide the recommendation [APhA].</li>
</ul></div>
<table class="reftab"><thead><tr><th>Class</th><th>Agents and action</th><th>Use and duration</th><th>Cautions</th></tr></thead><tbody>
<tr><td>Local anesthetics</td><td>Benzocaine, pramoxine, benzyl alcohol, lidocaine, dibucaine, phenol. Reversible blockade of nerve impulse conduction at the site; relieve pain, itching, irritation [OTC sl 24]</td><td>Up to 3&ndash;4 times daily for no longer than 7 days [APhA]</td><td>Pramoxine and benzyl alcohol cause the fewest adverse effects and least cross-sensitivity. Avoid dibucaine: systemic toxicity (seizures, respiratory depression, arrhythmias, death). Phenol above 2% irritates and may cause sloughing and necrosis; not on large areas or under bandages; not in pregnancy, infants or children [OTC sl 24]</td></tr>
<tr><td>Topical antihistamine</td><td>Diphenhydramine (0.5%&ndash;2% in most products [APhA]). Depresses cutaneous histamine receptors; approved for temporary relief of pain and itching [OTC sl 25]</td><td>3&ndash;4 times daily for no longer than 7 days [OTC sl 25]</td><td>May be less effective than other options. Photosensitivity and hypersensitivity reactions. Use beyond 3&ndash;4 weeks raises the chance of contact dermatitis [OTC sl 25]</td></tr>
<tr><td>Hydrocortisone 1%</td><td>Very weak steroid; temporary relief of minor insect bites [OTC sl 27]</td><td>Up to 7 days; seek medical attention if needed longer. Frequency: slide 1&ndash;4 times a day [OTC sl 27]; APhA 3 or 4 times daily</td><td>Not for scabies, bacterial or fungal infection without medical supervision: it can worsen or mask them [APhA]</td></tr>
<tr><td>Skin protectants</td><td>Zinc oxide, calamine lotion; titanium dioxide (FDA has not evaluated safety or efficacy) [OTC sl 28]. Lotions, ointments, creams; reduce inflammation and irritation [OTC sl 28]</td><td>As needed [OTC sl 28]</td><td>Recommended for adults, children and infants (zinc oxide, calamine) [OTC sl 28]. Zinc oxide is a mild astringent with weak antiseptic properties [OTC sl 28]; zinc oxide and calamine absorb fluid from weeping lesions [APhA]</td></tr>
<tr><td>Counterirritants</td><td>Camphor and menthol; cooling effect; also used in musculoskeletal pain products [OTC sl 26]</td><td>3&ndash;4 times daily for up to 7 days [APhA]</td><td>Camphor is very dangerous if ingested: keep away from children and pets [OTC sl 26]; inappropriate for use in children [APhA]</td></tr>
</tbody></table>
<div class="gpt"><h5>Extra detail from the APhA excerpt</h5><ul>
<li>Hydrocortisone, skin protectants, topical antihistamines, local anesthetics and some counterirritants are approved external analgesics for bite pain and itching [APhA].</li>
<li>Zinc oxide and calamine: FDA considers 1%&ndash;25% safe and effective [APhA].</li>
<li>Phenol in OTC products: 0.5%&ndash;1.5% [APhA].</li>
<li>Camphor: FDA limit 11% or less; menthol: approved up to 16% [APhA].</li>
<li>Dibucaine is a common allergen [APhA].</li>
<li>Dibucaine and phenol have the most potential for adverse effects [APhA].</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Pramoxine and benzyl alcohol (low adverse effects, less cross-sensitivity) vs dibucaine (avoid; systemic toxicity) and phenol (above 2% damages skin; avoid in pregnancy and children) [OTC sl 24].</li>
<li>Zinc oxide and calamine (FDA-evaluated; fine for infants) vs titanium dioxide (FDA has not evaluated safety or efficacy) [OTC sl 28].</li>
<li>Skin protectants (as needed) vs hydrocortisone, antihistamine and anesthetics (limited to 7 days) [OTC sl 27&ndash;28; APhA].</li>
<li>Local reaction (pain, itching at the site: self-care) vs allergic reaction away from the site (refer) vs anaphylaxis (911) [OTC sl 19, 21].</li>
<li>Hydrocortisone frequency conflict: slide 27 says 1&ndash;4 times a day; the APhA excerpt says 3 or 4 times daily. Both agree on up to 7 days. The frequency is not keyed.</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>SCHOLAR-MAC patient case (bee sting), then self-care or refer. Example stem: a patient stung on the arm now has hives on the torso and neck. Step 1: scan the case for an exclusion. Step 2: hives away from the site exclude self-care; refer to urgent care or the ER [OTC sl 21&ndash;22].</li>
<li>Select-all exclusion list. Example stem: &ldquo;Which findings exclude an insect sting from self-care?&rdquo; Step 1: mark every item on the slide 21&ndash;22 list. Step 2: include age under 2 years and hay fever history.</li>
<li>Product choice for a case. Example stem: an adult asks for an anesthetic cream. Step 1: pick the lowest-risk agent (pramoxine or benzyl alcohol). Step 2: state the limit of 7 days.</li>
<li>Referral list. Example stem: &ldquo;Which conditions must be referred?&rdquo; Select tick bites, scabies, spider bites, secondary infection and systemic symptoms.</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Hives on the torso after an arm sting are a reaction away from the site, not a local reaction [OTC sl 21].</li>
<li>Anaphylaxis can start up to 6 hours after the sting, not only within minutes [OTC sl 19].</li>
<li>Patients with scabies or an infection must not use hydrocortisone without supervision [APhA].</li>
<li>Camphor products are a poor choice for children [APhA].</li>
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
<li>Lice egg (nit) is about 1 mm in diameter [OTC sl 30].</li>
<li>Lice feed by biting the scalp: an immediate wheal, then a local papule within 24 hours [OTC sl 30].</li>
<li>Lice attach to the hair shaft [OTC sl 30].</li>
<li>Black powdery specks may be lice feces [OTC sl 30].</li>
</ul></div>
<div class="gpt"><h5>Exclusions for self-treatment</h5><ul>
<li>Secondary infection from scratching [OTC sl 31].</li>
<li>Hypersensitivity to chrysanthemums, ragweed or pediculicide ingredients [OTC sl 31].</li>
<li>Age under 2 years for pyrethrins [OTC sl 31].</li>
<li>Age under 2 months for permethrin [OTC sl 31].</li>
<li>Lice infection of the eyelids or eyebrows [OTC sl 31].</li>
<li>Pregnancy or breastfeeding: strong caution for self-treatment; refer to primary care [OTC sl 31].</li>
<li>Presence of active tumors [OTC sl 31].</li>
<li>Regional resistance to pediculicides [OTC sl 31].</li>
</ul></div>
<table class="reftab"><thead><tr><th>Feature</th><th>Synergized pyrethrins</th><th>Permethrin (Nix)</th></tr></thead><tbody>
<tr><td>Action</td><td>Block nerve impulse transmission: paralysis and death of the insect [OTC sl 32]</td><td>Causes paralysis and death of the lice [OTC sl 33]</td></tr>
<tr><td>Forms</td><td>Shampoos, foams, solutions, gels [OTC sl 32]</td><td>Cream rinse applied to the scalp for 10 minutes [OTC sl 33]</td></tr>
<tr><td>&ldquo;Synergized&rdquo;</td><td>Piperonyl butoxide added; it inhibits pyrethrin breakdown [OTC sl 32]</td><td>Not applicable</td></tr>
<tr><td>Lice comb</td><td>Must use [OTC sl 32]</td><td>Must use [OTC sl 33]</td></tr>
<tr><td>Retreatment</td><td>MUST retreat in 7&ndash;10 days [OTC sl 32]</td><td>MAY retreat in 7&ndash;10 days if lice or nits are seen [OTC sl 33]</td></tr>
<tr><td>Age limit</td><td>Excluded under 2 years [OTC sl 31]</td><td>Excluded under 2 months [OTC sl 31]</td></tr>
</tbody></table>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Pyrethrins vs permethrin: retreatment is required for pyrethrins and conditional for permethrin; the age cut-offs are 2 years vs 2 months [OTC sl 31&ndash;33].</li>
<li>Nit vs black specks: nits and castings are on the hair shaft; black powdery specks are lice feces [OTC sl 30].</li>
<li>Pyrethrins hypersensitivity cue: chrysanthemums and ragweed [OTC sl 31].</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>Select-all exclusion list. Example stem: &ldquo;Which exclude a patient with head lice from self-treatment?&rdquo; Step 1: tick eyelid or eyebrow infestation, secondary infection, pregnancy or breastfeeding, and age limits. Step 2: check the product named against its age limit [OTC sl 34].</li>
<li>Patient case then product. Example stem: a 5-year-old with lice at school and no exclusions. Step 1: run the exclusion list. Step 2: choose pyrethrins or permethrin with a lice comb and state the retreatment rule.</li>
<li>Lab SOAP note: include drug and non-drug measures and education [OTC sl 3].</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>&ldquo;Must&rdquo; (pyrethrins) vs &ldquo;may&rdquo; (permethrin) retreatment [OTC sl 32&ndash;33].</li>
<li>Age 2 months applies to permethrin, age 2 years to pyrethrins [OTC sl 31].</li>
<li>Pregnancy and breastfeeding are a strong caution with referral, not a free choice of product [OTC sl 31].</li>
<li>Lice involving eyelids or eyebrows are excluded from self-care [OTC sl 31].</li>
</ul></div>
</section>

<section class="gobj" id="gp-4">
<h3>4. Vital signs and physical assessment</h3>
<div class="gbar"><span>SECTION 4</span><b>Measure pulse, respirations, blood pressure, temperature and oxygen saturation correctly and read the result.</b><i>POCT deck slides 27&ndash;42; TOSCE study guide</i></div>
<h4>At a glance</h4>
<ul>
<li>Vital signs: pulse, respirations, blood pressure, temperature, O2 saturation. Vital statistics: age, height, weight, medication allergies, smoking status, perception of pain.</li>
<li>Pulse: pads of fingers, 15 seconds &times; 4 or 30 seconds &times; 2.</li>
<li>Respirations: do not tell the patient; observe at least 30 seconds.</li>
<li>BP cuff too small overestimates; too large or too loose underestimates.</li>
<li>Pulse oximetry: 95%&ndash;99% normal, below 90% needs medical attention.</li>
</ul>
<h4>Know this</h4>
<table class="reftab"><thead><tr><th>Sign</th><th>Normal</th><th>Low</th><th>High</th></tr></thead><tbody>
<tr><td>Pulse [POCT sl 30]</td><td>60&ndash;100 beats/min</td><td>Bradycardia: below 60</td><td>Tachycardia: above 100</td></tr>
<tr><td>Respirations [POCT sl 32]</td><td>12&ndash;20 breaths/min</td><td>Bradypnea: below 12</td><td>Tachypnea: above 20</td></tr>
<tr><td>Blood pressure [POCT sl 38, ACC/AHA 2017]</td><td>Normal: less than 120/80 mmHg. Elevated: 120/80 or greater (as printed)</td><td>Hypotension: SBP below 90&ndash;100 or DBP below 50&ndash;60; patients may be symptomatic at higher values</td><td>Hypertension: 130/80 or greater. Hypertensive urgency: 180/110 or greater</td></tr>
<tr><td>Temperature [POCT sl 39]</td><td>98.0&ndash;98.6 &deg;F (36.7&ndash;37 &deg;C)</td><td>Not given</td><td>Fever: 99.5 &deg;F (37.5 &deg;C) or higher. Dangerous: above 105.0 &deg;F (40.5 &deg;C)</td></tr>
<tr><td>Oxygen saturation [POCT sl 40]</td><td>95%&ndash;99%</td><td>Below 90% needs medical attention</td><td>Not given</td></tr>
</tbody></table>
<div class="gpt"><h5>Systematic approach</h5><ul>
<li>Inspection: what do I see (coughing). Palpation: what do I feel (pulse). Percussion: what do I hear and feel. Auscultation: what do I hear (wheeze) [POCT sl 28].</li>
</ul></div>
<div class="gpt"><h5>Pulse technique</h5><ul>
<li>Palpate an artery close to the surface and over bone; usually the radial pulse [POCT sl 30].</li>
<li>Use the pads of the fingers (better than the tips); do not use the thumb [POCT sl 31].</li>
<li>Radial side of the wrist (thumb side), just outside the last wrist tendon [POCT sl 31].</li>
<li>Press hard enough to start to collapse the artery; adjust pressure if you cannot feel it [POCT sl 31].</li>
<li>Minimum 15 seconds &times; 4, or 30 seconds &times; 2 [POCT sl 31; TOSCE guide].</li>
<li>If the result is near the tachycardia or bradycardia cut-off, count the full minute [POCT sl 31].</li>
</ul></div>
<div class="gpt"><h5>Respirations</h5><ul>
<li>Done by inspection: watch the rise and fall of the chest [POCT sl 32].</li>
<li>Do not tell the patient [POCT sl 32].</li>
<li>Minimum 30 seconds of observation [POCT sl 32].</li>
</ul></div>
<div class="gpt"><h5>Blood pressure: cuff and position</h5><ul>
<li>Cuff width at least 50% around the bicep; length 75%&ndash;80% around the bicep [POCT sl 33].</li>
<li>Standard cuffs fit most adults; about 1/3 of females need a pediatric cuff and about 1/2 of males need a large cuff [POCT sl 33].</li>
<li>Arm at heart level; the patient should not support the arm because muscle tension can falsely elevate the reading [POCT sl 34].</li>
<li>Patient may sit, stand or lie down; cuff goes around the bicep and may be over a shirt [POCT sl 34].</li>
</ul></div>
<div class="gpt"><h5>Blood pressure: steps</h5><ul>
<li>Patient seated, relaxed, arm at about heart level, palm up, feet flat on the floor [POCT sl 35].</li>
<li>No caffeine, smoking or exercise for at least 30 minutes beforehand [POCT sl 35].</li>
<li>Cuff snug about 1 inch above the elbow; artery marker over the brachial artery [POCT sl 35].</li>
<li>Stethoscope diaphragm on bare skin over the brachial artery, just below the cuff edge [POCT sl 36].</li>
<li>Inflate rapidly to about 160&ndash;180 mmHg (higher if the usual systolic is higher) [POCT sl 36].</li>
<li>Deflate about 2&ndash;3 mmHg per second [POCT sl 36].</li>
<li>First clear tapping sound = systolic; last sound heard = diastolic [POCT sl 36&ndash;37].</li>
<li>Record the reading, the arm used and the patient position; wait 5 minutes before a repeat [POCT sl 37].</li>
</ul></div>
<table class="reftab"><thead><tr><th>Technique error</th><th>Effect on the reading</th><th>Correct technique</th></tr></thead><tbody>
<tr><td>Cuff too small</td><td>Overestimates [POCT sl 33]</td><td>Width at least 50% around the bicep [sl 33]</td></tr>
<tr><td>Cuff too large</td><td>Underestimates [POCT sl 33]</td><td>Length 75%&ndash;80% around the bicep [sl 33]</td></tr>
<tr><td>Cuff too loose</td><td>Underestimates [POCT sl 33]</td><td>Wrap snugly [sl 35]</td></tr>
<tr><td>Patient holds the arm up</td><td>Falsely elevated by muscle tension [POCT sl 34]</td><td>Arm supported at heart level [sl 34]</td></tr>
</tbody></table>
<div class="gpt"><h5>Temperature</h5><ul>
<li>Antipyretics (acetaminophen, NSAIDs, steroids) can affect the reading [POCT sl 39].</li>
<li>Environmental temperature and humidity can affect the reading [POCT sl 39].</li>
<li>Warm or cold food and beverages can affect the reading [POCT sl 39].</li>
</ul></div>
<div class="gpt"><h5>Pulse oximetry</h5><ul>
<li>Measures the oxygen saturation of arterial blood [POCT sl 40].</li>
<li>The saturation calculation is not required for exams [POCT sl 40].</li>
<li>Oximeters can overestimate saturation in Black patients because melanin absorbs more light; readings look normal when oxygen is dangerously low [POCT sl 41].</li>
<li>Use a lower threshold for sending the patient to the ER, which can obtain an arterial blood gas [POCT sl 41].</li>
<li>Technique: dry, clean nails; remove polish, acrylics, artificial tips; warm cold hands [POCT sl 42].</li>
<li>Place on the index or middle finger; keep the patient still at least a minute until the numbers steady [POCT sl 42].</li>
<li>Record both numbers: oxygen saturation and heart rate [POCT sl 42].</li>
</ul></div>
<div class="gpt"><h5>TOSCE (pulse and BP station)</h5><ul>
<li>One of 3 stations is POCT (blood pressure or pulse) with patient counseling [TOSCE guide].</li>
<li>Palpable systolic pressure is not asked [TOSCE guide].</li>
<li>Pulse may be measured over 15 or 30 seconds and multiplied [TOSCE guide].</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Vital signs (pulse, respirations, blood pressure, temperature, O2 saturation) vs vital statistics (age, height, weight, medication allergies, smoking status, pain perception) [POCT sl 29].</li>
<li>Tachycardia (above 100) vs bradycardia (below 60); tachypnea (above 20) vs bradypnea (below 12) [POCT sl 30, 32].</li>
<li>Systolic (first tapping sound) vs diastolic (last sound) [POCT sl 36&ndash;37].</li>
<li>Hypertension (130/80 or greater) vs hypertensive urgency (180/110 or greater) vs hypotension [POCT sl 38].</li>
<li>Respirations: do not tell the patient you are counting [POCT sl 32].</li>
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
<li>The pulse oximetry saturation calculation is not tested [POCT sl 40].</li>
<li>Do not tell the patient you are counting respirations [POCT sl 32].</li>
<li>Do not use the thumb for a pulse [POCT sl 31].</li>
<li>A too-small cuff overestimates; a too-large or too-loose cuff underestimates [POCT sl 33].</li>
<li>Wait 5 minutes before repeating a BP [POCT sl 37].</li>
<li>Fever starts at 99.5 &deg;F (37.5 &deg;C), not 98.6 &deg;F [POCT sl 39].</li>
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
<li>Tell the patient what to expect (coughing or gagging; try to resist) [POCT sl 46].</li>
<li>Sanitize hands; wear appropriate PPE [POCT sl 46].</li>
<li>Head tilted back, tongue out, eyes closed [POCT sl 46].</li>
<li>Tongue depressor in the non-dominant hand, swab in the dominant hand; use the swab recommended for the test [POCT sl 46].</li>
<li>Start at the base of the arch at the level of the tonsil; follow the glossopalatine arch, striking the uvula with the side of the swab; end at the opposite tonsil; immediately swab in reverse [POCT sl 46].</li>
<li>Process and dispose of the specimen; sanitize hands [POCT sl 46].</li>
</ul></div>
<div class="gpt"><h5>Nasal swab</h5><ul>
<li>The patient does not blow the nose beforehand [POCT sl 48].</li>
<li>Tell the patient it may be mildly uncomfortable but should not be painful [POCT sl 48].</li>
<li>Head tilted back slightly, eyes closed; non-dominant hand holds the chin; swab in the dominant hand between thumb and forefinger [POCT sl 48].</li>
<li>Insert the cotton end straight in to the turbinates (about 1 inch); rotate slightly to collect cells as well as mucus [POCT sl 48].</li>
<li>Nostril technique: rotate 5 times with good contact; leave in the nostril 15 seconds; repeat in the other nostril if the manufacturer requires [POCT sl 49].</li>
<li>Nasopharyngeal technique: angle toward the bridge of the nose, then elevate the end and angle toward the back of the throat [POCT sl 50].</li>
<li>Insert until resistance is met; gently rotate and wiggle; the swab passes the inferior nasal turbinate into the inferior nasal meatus; push past the meatus for a nasopharyngeal swab [POCT sl 51].</li>
</ul></div>
<table class="reftab"><thead><tr><th>Term</th><th>Definition</th><th>Means</th><th>When it matters</th></tr></thead><tbody>
<tr><td>Sensitivity</td><td>Proportion of people with the disease who test positive [POCT sl 55]</td><td>Good at detecting disease; most people with it test positive [sl 55]</td><td>Screening (HIV, hepatitis C): most tested will not have the disease; do not want to miss patients [sl 57]</td></tr>
<tr><td>Specificity</td><td>Proportion of people without the disease who test negative [POCT sl 55]</td><td>Good at ruling out disease [sl 55]</td><td>Group A strep and influenza: poor specificity could lead to unnecessary treatment courses [sl 58]</td></tr>
</tbody></table>
<div class="gpt"><h5>Choosing a test</h5><ul>
<li>Clinical: the sensitivity and specificity you will accept depend on what you test for and the goal of the program [POCT sl 54].</li>
<li>Use the test in a population that maximizes the positive predictive value; work with the public health department or physicians [POCT sl 54].</li>
<li>Logistical: the test must be CLIA-waived; cost and reimbursement; specimen collection method (throat, nasal, nasopharyngeal); processing space and training; time required [POCT sl 56].</li>
</ul></div>
<div class="gpt"><h5>HCV and HIV screening</h5><ul>
<li>Most patients tested will not have the disease: a wide net to find a few [POCT sl 57].</li>
<li>Need a test with high sensitivity [POCT sl 57].</li>
<li>Need a referral program for confirmatory testing; counseling about results is essential [POCT sl 57].</li>
<li>CDC: everyone in the US tested for HIV at least once; hepatitis C screening for all born 1945&ndash;1965 [POCT sl 16&ndash;17].</li>
</ul></div>
<div class="gpt"><h5>Group A strep and influenza testing</h5><ul>
<li>Consider what happens to the patient with a false-negative result [POCT sl 58].</li>
<li>Test only patients with symptoms consistent with the disease [POCT sl 58].</li>
<li>Test for influenza only when disease activity is documented in the community [POCT sl 58].</li>
<li>The Centor or modified Centor score is not required for exams [POCT sl 58].</li>
<li>Influenza is often not identified in time to treat (48-hour window) [POCT sl 18].</li>
</ul></div>
<table class="reftab"><thead><tr><th>Protocol content [POCT sl 60]</th><th>Example of what it states</th></tr></thead><tbody>
<tr><td>Patient population</td><td>Who the service is for</td></tr>
<tr><td>Inclusion and exclusion criteria</td><td>Who may or may not be tested</td></tr>
<tr><td>Clinical information or algorithm</td><td>The decision path</td></tr>
<tr><td>Test and collection technique</td><td>Which test and which swab</td></tr>
<tr><td>Post-testing therapy or referral</td><td>What happens after the result</td></tr>
<tr><td>Communication of results</td><td>How results are reported</td></tr>
</tbody></table>
<div class="gpt"><h5>Protocol</h5><ul>
<li>Protocol: the procedure for conducting medical treatment [POCT sl 60].</li>
<li>It may or may not be part of a collaborative agreement or other authority given to the pharmacist [POCT sl 60].</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Sensitivity (disease present, test positive) vs specificity (disease absent, test negative) [POCT sl 55].</li>
<li>Throat swab (uvula, glossopalatine arch, tonsils) vs nostril swab (about 1 inch, rotate 5 times, 15 seconds) vs nasopharyngeal swab (past the inferior meatus) [POCT sl 46&ndash;51].</li>
<li>Clinical considerations (sensitivity, specificity, predictive value) vs logistical considerations (CLIA-waived, cost, collection, space, time) [POCT sl 54, 56].</li>
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
<li>The Centor score is not tested [POCT sl 58].</li>
<li>Nasal swabs: no blowing the nose first [POCT sl 48].</li>
<li>CLIA-waived is the first logistical requirement [POCT sl 56].</li>
<li>The sources list &ldquo;CLIA&rdquo; among terms to define but the printed slides give no definition beyond the requirement for a CLIA-waived test [POCT sl 6, 56].</li>
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
<dt>ACIP</dt><dd>Advisory Committee on Immunization Practices, a subcommittee of the CDC; its recommendations go to the CDC Director and become official CDC policy once adopted [Imm sl 4].</dd>
<dt>AAFP</dt><dd>American Academy of Family Physicians; its 2026 adult schedule is the one used here [Imm sl 5].</dd>
<dt>VIS</dt><dd>Vaccine Information Sheet, available from Immunize.org [Imm sl 6].</dd>
</dl></div>
<div class="gpt"><h5>Where the information comes from</h5><ul>
<li>ACIP holds regularly scheduled public meetings (for example on eligibility or timing) [Imm sl 4].</li>
<li>Other societies also issue recommendations: American Academy of Pediatrics, American College of Physicians, Infectious Diseases Society of America, American College of Obstetricians and Gynecologists [Imm sl 5].</li>
<li>AAFP schedules are posted on Canvas [Imm sl 6].</li>
<li>Immunize.org supplies Vaccine Information Sheets, screening checklists, news and updates [Imm sl 6].</li>
<li>Travel vaccines: CDC Yellow Book and the CDC travel site; recommendations can differ by area within a country (T) [Imm sl 6, 26].</li>
<li>Community pharmacists can give travel vaccines but generally are not prescribers for travel medications such as antimalarials (T) [Imm sl 25].</li>
</ul></div>
<table class="reftab"><thead><tr><th>Step</th><th>Part</th><th>What it tells you</th><th>Note</th></tr></thead><tbody>
<tr><td>1</td><td>Table 1: vaccines by age</td><td>Which vaccines apply by age group</td><td>Prescribers do this part reasonably well (T) [Imm sl 8]</td></tr>
<tr><td>2</td><td>Table 2: medical conditions or other indication</td><td>Extra vaccines for conditions and risk factors</td><td>Often missed by providers; focus here (T) [Imm sl 8]</td></tr>
<tr><td>3</td><td>Notes</td><td>Vaccine types, dosing frequencies and intervals, special situations</td><td>Must use on exams [Imm sl 8]</td></tr>
<tr><td>4</td><td>Appendix</td><td>Contraindications and precautions per vaccine</td><td>[Imm sl 8]</td></tr>
<tr><td>5</td><td>Addendum</td><td>New or updated guidance</td><td>The 2026 schedule reports no new vaccines or recommendations (effective 3/1/2026) [AAFP]</td></tr>
</tbody></table>
<div class="gpt"><h5>Reading Table 1 (age groups 19&ndash;26, 27&ndash;49, 50&ndash;64, 65 and older)</h5><ul>
<li>The legend is at the bottom of the table; read it to make a recommendation [Imm sl 11].</li>
<li>Tables 1 and 2 have different legends [Imm sl 11].</li>
<li>&ldquo;See Notes&rdquo; appears on many rows; even without it, rows such as Hib (1 or 3 doses depending on indication) need the Notes (T).</li>
</ul></div>
<table class="reftab"><thead><tr><th>Table 1 category (AAFP legend)</th><th>Color (T)</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Recommended for adults who meet the age requirement, lack documentation of vaccination or lack evidence of past infection</td><td>Yellow</td><td>Give the vaccine</td></tr>
<tr><td>Recommended for adults with an additional risk factor or another indication</td><td>Blue</td><td>Read the Notes to see whether the patient has the risk factor</td></tr>
<tr><td>Recommended based on shared clinical decision-making</td><td>Not stated</td><td>Evidence is mixed, or vaccinate if the patient now has risk factors (example: HPV at 27&ndash;45 years)</td></tr>
<tr><td>No recommendation / not applicable</td><td>Gray</td><td>Do not give; no body of evidence</td></tr>
</tbody></table>
<div class="gpt"><h5>Reading Table 2</h5><ul>
<li>Columns: pregnancy; HIV infection by CD4 (below 15% or below 200/mm3; at or above 15% and 200/mm3); immunocompromised (excluding HIV); men who have sex with men; asplenia and complement deficiency; kidney failure, ESRD or dialysis; heart or lung disease; chronic liver disease or alcoholism; diabetes; health care personnel [AAFP; Imm sl 8].</li>
<li>Legend categories include recommended for all adults who lack documentation or evidence of past infection; recommended for all adults with additional doses based on condition; recommended for some adults based on age or risk; shared clinical decision-making; precaution (might be indicated if benefit outweighs risk); contraindicated or not recommended; no guidance [AAFP].</li>
<li>Asterisk: vaccinate after pregnancy, if indicated [AAFP].</li>
<li>Some vaccines depend on the CD4 count (T).</li>
</ul></div>
<div class="gpt"><h5>Appendix: contraindication vs precaution</h5><ul>
<li>When a contraindication is present, the vaccine should NOT be administered [AAFP Appendix, footnote 1].</li>
<li>When a precaution is present, vaccination should generally be deferred but might be indicated if the benefit outweighs the risk [AAFP Appendix, footnote 2].</li>
<li>Moderate or severe acute illness, with or without fever, is a precaution for the vaccines listed [AAFP Appendix].</li>
<li>The reason: if the patient needs a doctor or hospital, the vaccine is not a possible cause of the problem (T). Judge how sick the patient is (T).</li>
<li>The screening questionnaire from Immunize.org lists what to do for a positive screen (T).</li>
</ul></div>
<table class="reftab"><thead><tr><th>Vaccine</th><th>Contraindication (do not give)</th><th>Precaution (generally defer)</th></tr></thead><tbody>
<tr><td>Any vaccine on the Appendix</td><td>Severe allergic reaction (for example anaphylaxis) after a previous dose or to a component</td><td>Moderate or severe acute illness, with or without fever</td></tr>
<tr><td>MMR</td><td>Severe immunodeficiency (including severely immunocompromised HIV); pregnancy; family history of altered immunocompetence unless verified</td><td>Recent antibody-containing blood product (11 months or less); history of thrombocytopenia or purpura; need for TB skin test or IGRA</td></tr>
<tr><td>VAR</td><td>Severe immunodeficiency; pregnancy; family history of altered immunocompetence</td><td>Recent antibody-containing blood product; acyclovir, famciclovir or valacyclovir 24 hours before vaccination; aspirin or aspirin-containing products</td></tr>
<tr><td>LAIV3 (FluMist)</td><td>Asplenia; immunocompromise from any cause; close contacts of severely immunosuppressed persons in a protected environment; pregnancy; cochlear implant; CSF leak</td><td>Guillain-Barr&eacute; syndrome within 6 weeks of a flu vaccine; asthma at 5 years or older; other chronic underlying conditions</td></tr>
<tr><td>Tdap and Td</td><td>Anaphylaxis after a previous dose or component; Tdap only: encephalopathy within 7 days of a previous pertussis-containing dose</td><td>Guillain-Barr&eacute; syndrome within 6 weeks; Arthus-type reaction (defer until 10 years since last dose); Tdap only: progressive or unstable neurologic disorder</td></tr>
</tbody></table>
<div class="gpt"><h5>Live vaccines and pregnancy</h5><ul>
<li>Live vaccines are contraindicated during pregnancy [Imm sl 14].</li>
<li>The Appendix lists pregnancy as a contraindication for MMR, VAR and LAIV3 [AAFP Appendix].</li>
<li>Hepatitis A vaccine is not a live vaccine [Imm sl 14].</li>
<li>LAIV3 is the live influenza vaccine; know which vaccines are live and which are inactivated (T).</li>
</ul></div>
<div class="gpt"><h5>Dose-interval rules</h5><ul>
<li>4 weeks = 28 days; intervals of 4 months or more use calendar months [AAFP Notes].</li>
<li>Doses given up to 4 days before the minimum age or interval are valid [AAFP Notes].</li>
<li>Doses given 5 or more days early are not valid and are repeated, spaced from the invalid dose by the minimum interval [AAFP Notes].</li>
<li>Administer recommended vaccines if history is incomplete or unknown; do not restart or add doses for extended intervals [AAFP].</li>
<li>Report suspected vaccine-preventable disease to the health department; report significant post-vaccination reactions to VAERS [AAFP].</li>
</ul></div>
<div class="gpt"><h5>Screening questions to assess needs [Imm sl 19]</h5><ul>
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
<li>Contraindication (do not give) vs precaution (generally defer; may be given if benefit outweighs risk) [AAFP Appendix].</li>
<li>Table 1 (age) vs Table 2 (condition); each has its own legend [Imm sl 11].</li>
<li>Recommended (yellow, give) vs recommended with another indication (blue, read the Notes) vs shared decision-making (mixed evidence) vs no recommendation (gray) (T).</li>
<li>ACIP (CDC subcommittee) vs AAFP (physician society; the schedule used here) [Imm sl 4&ndash;5].</li>
<li>Immunize.org (screening checklists and VIS) vs CDC Yellow Book (travel) [Imm sl 6].</li>
<li>Dose 4 days early (valid) vs 5 days early (repeat) [AAFP Notes].</li>
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
<li>Treating moderate or severe acute illness as a contraindication; it is a precaution [AAFP Appendix].</li>
<li>The source-credibility terms (convergent evidence, body of evidence, meta-analysis, systematic review) are not tested (T).</li>
<li>The sources do not call MMR or VAR &ldquo;live&rdquo;; they list pregnancy as a contraindication for them [AAFP Appendix].</li>
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
<li>Any person not fully vaccinated who requests it, with no risk factor needed: Havrix (2 doses, 6&ndash;12 months apart) or Vaqta (2 doses, 6&ndash;18 months apart, minimum 6 months) or Twinrix (3 doses at 0, 1, 6 months) [AAFP Notes].</li>
<li>Risk: chronic liver disease, HIV, men who have sex with men, injection or noninjection drug use, homelessness, travel to high or intermediate endemic countries, and others in the Notes [AAFP Notes].</li>
<li>Give to all patients with HIV, chronic liver disease or alcoholism, to all who request it, and to those in the Notes special situations [Imm sl 16].</li>
<li>Pregnant: only if in a risk group, not all pregnant patients (T); the vaccine is not live [Imm sl 14].</li>
</ul></div>
<div class="gpt"><h5>Hepatitis B</h5><ul>
<li>Age 19&ndash;59: complete a 2-, 3- or 4-dose series [AAFP Notes].</li>
<li>Age 60 or older with known risk factors: series recommended; any adult 60 or older who requests it may receive it [AAFP Notes].</li>
<li>Engerix-B or Recombivax HB: 3 doses at 0, 1, 6 months [AAFP Notes].</li>
<li>Heplisav-B: 2 doses at 0, 1 month (at least 4 weeks apart) [AAFP Notes].</li>
<li>Dialysis: Recombivax HB dialysis formulation (1 mL = 40 mcg), 3 doses at 0, 1, 6 months; or Engerix-B 4 doses at 0, 1, 2, 6 months using a 2 mL dose instead of 1 mL [AAFP Notes].</li>
<li>Immunocompromising conditions including HIV: complete the series at 20 years or older [AAFP Notes].</li>
</ul></div>
<div class="gpt"><h5>Pneumococcal (PCV15, PCV20, PCV21, PPSV23)</h5><ul>
<li>Age 50 or older, or 19&ndash;49 with an underlying condition or risk factor (for example diabetes), never vaccinated or unknown: 1 dose PCV15, PCV20 or PCV21 [AAFP Notes].</li>
<li>If PCV15 is used: 1 dose PPSV23 one year later (8 weeks minimum for an immunocompromising condition, cochlear implant or CSF leak) [AAFP Notes].</li>
<li>If PCV20 or PCV21 is used: no PPSV23; the series is complete [AAFP Notes].</li>
<li>Only PPSV23 before: 1 dose PCV15, PCV20 or PCV21 at least 1 year after the PPSV23; if PCV15 is used, no further PPSV23 [AAFP Notes].</li>
<li>Only PCV13 before: 1 dose PCV20 or PCV21 at least 1 year later [AAFP Notes].</li>
<li>PCV13 plus 1 PPSV23: 1 dose PCV20 or PCV21 at least 5 years after the last dose [AAFP Notes].</li>
<li>Adults who received PCV20 or PCV21: no additional dose [AAFP Notes]. Pregnancy: no recommendation [AAFP Notes].</li>
</ul></div>
<div class="gpt"><h5>Zoster (RZV, Shingrix)</h5><ul>
<li>Age 50 or older: 2 doses, 2&ndash;6 months apart, minimum 4 weeks, regardless of previous zoster or Zostavax [AAFP Notes].</li>
<li>Immunocompromising conditions (including HIV regardless of CD4): 2-dose series, 2&ndash;6 months apart [AAFP Notes].</li>
<li>Pregnancy: no ACIP recommendation; consider delaying [AAFP Notes].</li>
<li>Example from lecture: a 40-year-old with lupus on immunosuppressants had shingles because the vaccine was missed (T).</li>
</ul></div>
<div class="gpt"><h5>RSV</h5><ul>
<li>Pregnant, 32 weeks 0 days to 36 weeks 6 days, September through January: 1 dose Abrysvo [AAFP Notes].</li>
<li>Either maternal Abrysvo or infant nirsevimab or clesrovimab prevents severe infant RSV disease [AAFP Notes].</li>
<li>Other pregnant persons: not recommended; additional doses in later pregnancies not recommended [AAFP Notes].</li>
<li>Age 75 or older, unvaccinated: 1 dose of Arexvy, Abrysvo or mResvia [AAFP Notes].</li>
<li>Age 50&ndash;74, unvaccinated and at increased risk of severe RSV disease: 1 dose; risk can be self-attested [AAFP Notes].</li>
<li>Risk conditions include chronic cardiovascular disease (not isolated hypertension), chronic lung disease, ESRD, diabetes with complications or on insulin or an SGLT2 inhibitor, and BMI 40 or higher [AAFP Notes].</li>
</ul></div>
<div class="gpt"><h5>Tdap, Td and wounds</h5><ul>
<li>Pregnancy: 1 dose Tdap each pregnancy, preferably early in gestational weeks 27&ndash;36; use Tdap if a tetanus-toxoid vaccine is indicated in pregnancy [AAFP Notes].</li>
<li>Primary series complete with a Tdap at age 10 or older: Td or Tdap every 10 years [AAFP Notes].</li>
<li>Primary series complete without Tdap: 1 dose Tdap, then Td or Tdap every 10 years [AAFP Notes].</li>
<li>Wound, 3 or more previous doses: clean and minor wound, give Tdap or Td if more than 10 years since the last dose; all other wounds, if more than 5 years [AAFP Notes].</li>
</ul></div>
<div class="gpt"><h5>MMR and varicella, including HIV</h5><ul>
<li>MMR evidence of immunity: born before 1957 (not health care personnel), documented MMR vaccine, or laboratory evidence of immunity or disease; a clinical diagnosis without laboratory confirmation does not count [AAFP Notes].</li>
<li>MMR with no evidence: 1 dose; 2 doses at least 4 weeks apart for students, international travelers, household contacts of immunocompromised persons and health care personnel born in 1957 or later [AAFP Notes].</li>
<li>HIV with CD4 at least 15% and at least 200 cells/mm3 for at least 6 months: MMR 2 doses at least 4 weeks apart; MMR contraindicated if CD4 below 15% or below 200 cells/mm3 [AAFP Notes].</li>
<li>Varicella with no evidence: 2 doses 4&ndash;8 weeks apart. Evidence: US-born before 1980 (except pregnant persons and health care personnel), 2 documented doses at least 4 weeks apart, provider-verified history, or laboratory evidence [AAFP Notes].</li>
<li>HIV with CD4 at least 15% and at least 200 cells/mm3: varicella may be considered (2 doses 3 months apart); contraindicated if CD4 below 15% or below 200 [AAFP Notes].</li>
<li>Severe immunocompromising conditions: both MMR and VAR contraindicated [AAFP Notes].</li>
<li>Pregnancy with no immunity: contraindicated; give after pregnancy and before discharge from the facility [AAFP Notes].</li>
</ul></div>
<div class="gpt"><h5>Influenza</h5><ul>
<li>Age 19 or older: 1 dose of any age-appropriate vaccine annually [AAFP Notes].</li>
<li>Age 65 or older: HD-IIV3, RIV3 or aIIV3 preferred; if none is available, any other age-appropriate vaccine [AAFP Notes].</li>
<li>Solid organ transplant recipients on immunosuppression, age 19&ndash;64: HD-IIV3 and aIIV3 are acceptable [AAFP Notes].</li>
<li>Egg allergy: any influenza vaccine appropriate for age and health status [AAFP Notes].</li>
<li>Close contacts of severely immunosuppressed persons who need a protected environment should not receive LAIV3, or avoid that contact for 7 days after [AAFP Notes].</li>
<li>FluMist is approved for self-administration at 18 years or older, or by a caregiver at 18 or older for recipients 2&ndash;17 years [AAFP Notes].</li>
</ul></div>
<div class="gpt"><h5>Meningococcal</h5><ul>
<li>MenACWY (Menveo or MenQuadfi) for asplenia, HIV, persistent complement deficiency or complement inhibitor use: 2 doses at least 8 weeks apart; revaccinate every 5 years if risk remains [AAFP Notes].</li>
<li>MenACWY, 1 dose: travel to hyperendemic or epidemic areas, microbiologists, first-year college students in residential housing (not vaccinated at 16 or older) and military recruits [AAFP Notes].</li>
<li>MenB (Bexsero or Trumenba) for asplenia, complement deficiency or microbiologists: 3 doses at 0, 1&ndash;2, 6 months; booster 1 year after the primary series then every 2&ndash;3 years if risk remains [AAFP Notes].</li>
<li>MenB shared decision-making at 16&ndash;23 years (16&ndash;18 preferred): 2 doses at least 6 months apart [AAFP Notes].</li>
<li>Use the same MenB brand for all doses; MenB products from different manufacturers are not interchangeable [AAFP Notes].</li>
<li>Delay MenB in pregnancy unless the benefit outweighs the risk [AAFP Notes].</li>
</ul></div>
<div class="gpt"><h5>Hib, mpox, HPV, COVID-19</h5><ul>
<li>Hib, asplenia (including sickle cell disease): 1 dose if never vaccinated [AAFP Notes].</li>
<li>Hib, elective splenectomy: 1 dose, preferably at least 14 days before surgery [AAFP Notes].</li>
<li>Hib, hematopoietic stem cell transplant: 3 doses 4 weeks apart starting 6&ndash;12 months after successful transplant, whatever the history [AAFP Notes].</li>
<li>Mpox (Jynneos): 2 doses, 28 days apart, for persons at risk [AAFP Notes].</li>
<li>Mpox risk: gay, bisexual or other men who have sex with men, transgender or nonbinary persons with a new sexually transmitted disease diagnosis, more than 1 partner, sex at a commercial sex venue or at a large public event in the past 6 months; their sexual contacts; those deemed at risk by public health [AAFP Notes].</li>
<li>HPV: up through age 26, 2 or 3 doses; ages 27&ndash;45, shared decision-making; not recommended in pregnancy [AAFP Notes].</li>
<li>COVID-19, age 19&ndash;64 unvaccinated: 1 dose of Spikevax, mNexspike, Comirnaty or Nuvaxovid; age 65 or older: a second dose 6 months later (minimum 2 months) [AAFP Notes].</li>
</ul></div>
<table class="reftab"><thead><tr><th>Situation</th><th>Vaccine (trade name)</th><th>Regimen</th></tr></thead><tbody>
<tr><td>Requests hepatitis A</td><td>HepA (Havrix, Vaqta); HepA-HepB (Twinrix)</td><td>Havrix 2 doses 6&ndash;12 months; Vaqta 2 doses 6&ndash;18 months; Twinrix 0, 1, 6 months</td></tr>
<tr><td>Dialysis</td><td>HepB (Recombivax HB, Engerix-B)</td><td>Recombivax dialysis formulation 0, 1, 6 months; Engerix-B 2 mL at 0, 1, 2, 6 months</td></tr>
<tr><td>Age 50 or older, never vaccinated</td><td>PCV15 (Vaxneuvance), PCV20 (Prevnar 20), PCV21 (Capvaxive), PPSV23 (Pneumovax 23)</td><td>PCV20 or PCV21 once; PCV15 then PPSV23 in 1 year</td></tr>
<tr><td>Age 50 or older; or immunocompromised at 19 or older</td><td>RZV (Shingrix)</td><td>2 doses, 2&ndash;6 months apart</td></tr>
<tr><td>Pregnant, 32w0d&ndash;36w6d, Sept&ndash;Jan</td><td>RSV (Abrysvo)</td><td>1 dose</td></tr>
<tr><td>Age 75 or older</td><td>RSV (Arexvy, Abrysvo, mResvia)</td><td>1 dose</td></tr>
<tr><td>Each pregnancy, weeks 27&ndash;36</td><td>Tdap (Adacel, Boostrix)</td><td>1 dose per pregnancy</td></tr>
<tr><td>Wound, 3 or more doses before</td><td>Tdap or Td (Tenivac)</td><td>Clean minor: over 10 years; other wounds: over 5 years since last dose</td></tr>
<tr><td>HIV, CD4 below 15% or below 200</td><td>MMR (M-M-R II, Priorix); VAR (Varivax)</td><td>Contraindicated</td></tr>
<tr><td>Asplenia or HIV</td><td>MenACWY (Menveo, MenQuadfi)</td><td>2 doses at least 8 weeks apart; every 5 years if risk remains</td></tr>
<tr><td>Elective splenectomy</td><td>Hib (ActHIB, Hiberix, PedvaxHIB)</td><td>1 dose at least 14 days before</td></tr>
<tr><td>At risk for mpox</td><td>Mpox (Jynneos)</td><td>2 doses, 28 days apart</td></tr>
</tbody></table>
<table class="reftab"><thead><tr><th>Vaccine</th><th>Abbreviation</th><th>Trade name(s) [AAFP vaccine list]</th></tr></thead><tbody>
<tr><td>COVID-19</td><td>1vCOV-mRNA; 1vCOV-aPS</td><td>Comirnaty, Spikevax, mNexspike (mRNA); Nuvaxovid (protein subunit)</td></tr>
<tr><td>Hib</td><td>Hib</td><td>ActHIB, Hiberix, PedvaxHIB</td></tr>
<tr><td>Hepatitis A</td><td>HepA</td><td>Havrix, Vaqta</td></tr>
<tr><td>Hepatitis A and B</td><td>HepA-HepB</td><td>Twinrix</td></tr>
<tr><td>Hepatitis B</td><td>HepB</td><td>Engerix-B, Heplisav-B, Recombivax HB</td></tr>
<tr><td>HPV</td><td>HPV</td><td>Gardasil 9</td></tr>
<tr><td>Influenza (egg-based inactivated)</td><td>IIV3</td><td>Multiple</td></tr>
<tr><td>Influenza (cell culture inactivated)</td><td>ccIIV3</td><td>Flucelvax</td></tr>
<tr><td>Influenza (recombinant)</td><td>RIV3</td><td>Flublok</td></tr>
<tr><td>Influenza (live attenuated)</td><td>LAIV3</td><td>FluMist</td></tr>
<tr><td>MMR</td><td>MMR</td><td>M-M-R II, Priorix</td></tr>
<tr><td>Meningococcal ACWY</td><td>MenACWY-CRM; MenACWY-TT</td><td>Menveo; MenQuadfi</td></tr>
<tr><td>Meningococcal B</td><td>MenB-4C; MenB-FHbp</td><td>Bexsero; Trumenba</td></tr>
<tr><td>Meningococcal ABCWY</td><td>MenACWY-TT/MenB-FHbp; MenACWY-CRM/MenB-4C</td><td>Penbraya; Penmenvy</td></tr>
<tr><td>Mpox</td><td>Mpox</td><td>Jynneos</td></tr>
<tr><td>Pneumococcal conjugate</td><td>PCV15; PCV20; PCV21</td><td>Vaxneuvance; Prevnar 20; Capvaxive</td></tr>
<tr><td>Pneumococcal polysaccharide</td><td>PPSV23</td><td>Pneumovax 23</td></tr>
<tr><td>Polio (inactivated)</td><td>IPV</td><td>IPOL</td></tr>
<tr><td>RSV</td><td>RSV</td><td>Arexvy, Abrysvo, mResvia</td></tr>
<tr><td>Tetanus and diphtheria</td><td>Td</td><td>Tenivac</td></tr>
<tr><td>Tdap</td><td>Tdap</td><td>Adacel, Boostrix</td></tr>
<tr><td>Varicella</td><td>VAR</td><td>Varivax</td></tr>
<tr><td>Zoster (recombinant)</td><td>RZV</td><td>Shingrix</td></tr>
</tbody></table>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>Havrix (dose 2 at 6&ndash;12 months) vs Vaqta (dose 2 at 6&ndash;18 months, minimum 6 months) [AAFP Notes].</li>
<li>PCV15 (needs PPSV23 in 1 year) vs PCV20 or PCV21 (complete) [AAFP Notes].</li>
<li>PPSV23 (polysaccharide, Pneumovax 23) vs PCV (conjugate) [AAFP vaccine list].</li>
<li>Menveo and MenQuadfi (MenACWY) vs Bexsero and Trumenba (MenB) vs Penbraya and Penmenvy (combined) [AAFP vaccine list].</li>
<li>Shingrix interval 2&ndash;6 months vs mpox interval 28 days vs Heplisav-B 4 weeks [AAFP Notes].</li>
<li>Tdap wound interval: over 10 years for a clean minor wound vs over 5 years for any other wound [AAFP Notes].</li>
<li>MMR and varicella with HIV: contraindicated below CD4 15% or 200; allowed at or above both [AAFP Notes].</li>
<li>LAIV3 (FluMist, live) vs IIV3, ccIIV3 (Flucelvax) and RIV3 (Flublok) [AAFP vaccine list].</li>
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
<li>Hepatitis A requests need no risk factor [AAFP Notes; Imm sl 16].</li>
<li>Pneumococcal series: do not add PPSV23 after PCV20 or PCV21 [AAFP Notes].</li>
<li>A dose 5 or more days early is repeated, not counted [AAFP Notes].</li>
<li>Engerix-B for dialysis uses a 2 mL dose [AAFP Notes].</li>
<li>Shingrix is not limited to age 50; immunocompromised adults qualify [AAFP Notes; T].</li>
<li>Pregnant patients receive hepatitis A vaccine only if in a risk group (T).</li>
<li>Egg allergy does not restrict influenza vaccine choice [AAFP Notes].</li>
<li>Hepatitis A is not a live vaccine [Imm sl 14].</li>
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
<table class="reftab"><thead><tr><th>Component</th><th>Content</th><th>Example [Imm sl 22]</th></tr></thead><tbody>
<tr><td>Situation</td><td>Simple: why you are communicating (T)</td><td>Mrs. Jones is at the pharmacy to be assessed for vaccine needs</td></tr>
<tr><td>Background</td><td>The characteristics that support your assessment (T)</td><td>61-year-old health care worker with type 2 diabetes complicated by chronic kidney disease; had chickenpox; screening checklist negative; vaccine history</td></tr>
<tr><td>Assessment</td><td>The source and what is indicated (T)</td><td>AAFP recommends PCV21 for ages 19&ndash;64 with diabetes, Shingrix over 50, influenza, RSV and an updated COVID-19 vaccine</td></tr>
<tr><td>Recommendation</td><td>What you recommend, including the next dose</td><td>PCV21, Shingrix, influenza, RSV, updated COVID-19 vaccine; second Shingrix dose in 2&ndash;6 months</td></tr>
</tbody></table>
<div class="gpt"><h5>Writing an SBAR</h5><ul>
<li>Start from the recommendation, then ask what assessment led to it and what background supports it [Imm sl 20; T].</li>
<li>Be complete but concise [Imm sl 20].</li>
<li>Name the source (for example AAFP or CDC) in the assessment, especially early in a career (T).</li>
<li>In practice SBARs are short and can be sent through chart messaging; the lab versions are longer (T).</li>
</ul></div>
<div class="gpt"><h5>Talking to the patient</h5><ul>
<li>Give the assessment and recommendation in patient-friendly language [Imm sl 23].</li>
<li>Example: a pneumonia vaccine called PCV21 is recommended because of diabetes and higher risk of severe illness; also shingles, flu, RSV and an updated COVID-19 vaccine [Imm sl 23].</li>
<li>State the next dose: the shingles vaccine needs a second shot in 2&ndash;6 months [Imm sl 23].</li>
<li>Use the simplest language and say why the patient specifically needs the vaccine (age lowers immunity; diabetes weakens the immune system) (T).</li>
</ul></div>
<div class="gpt"><h5>Vaccine hesitancy</h5><ul>
<li>Definition: the reluctance or refusal to vaccinate despite the availability of vaccines [Imm sl 27].</li>
<li>Health care professionals may be vaccine hesitant [Imm sl 27].</li>
<li>One of the most critical barriers to effective vaccination; threatens progress against vaccine-preventable diseases [Imm sl 27].</li>
<li>Has led to resurgence of disease such as measles; in 2019 the WHO named it one of the ten leading threats to global health [Imm sl 28].</li>
<li>It is likely to be on assessments (T).</li>
<li>Common misconceptions: the COVID vaccine gave me COVID; I took the flu vaccine and got the flu anyway; I have a great immune system; mRNA vaccines change your DNA; vaccines cause autism; COVID is just like a head cold; vaccines contain harmful ingredients [Imm sl 30].</li>
<li>A hesitant patient is not a bad or unintelligent person; their information source is incorrect (T). Do not use the term &ldquo;anti-vaxxer&rdquo; (T).</li>
</ul></div>
<table class="reftab"><thead><tr><th>Step</th><th>What to say or do [Imm sl 32]</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Ask</td><td>&ldquo;It sounds like you don&rsquo;t want the ___ shot today. Can you help me understand why not?&rdquo; Then: &ldquo;Do you mind if I share some information with you about the vaccine?&rdquo;</td><td>Learn the reason and get permission</td></tr>
<tr><td>Tell</td><td>Respond with information centered on the patient&rsquo;s belief or question; listen and observe verbal and nonverbal reactions; address further questions or confusion</td><td>Address the specific belief</td></tr>
<tr><td>Ask</td><td>&ldquo;What are your thoughts now about getting this vaccine?&rdquo;</td><td>Check where the patient stands</td></tr>
<tr><td>If still declined</td><td>Respect autonomy; they can contact you to learn more or if they change their mind</td><td>Keep the relationship</td></tr>
</tbody></table>
<div class="gpt"><h5>Content of the Tell step</h5><ul>
<li>Scientific information: benefits shown in trials (for example reduced hospitalization, preventing symptoms or long-term effects) and the risks of the vaccine [Imm sl 33].</li>
<li>Use reliable sources [Imm sl 33].</li>
<li>Be sensitive to religious and cultural beliefs; religious leaders can help; clinics at places of worship address concerns [Imm sl 34].</li>
<li>Share protection of others, especially close contacts; a household member such as a grandparent who may benefit makes parents more likely to vaccinate [Imm sl 35].</li>
<li>Help the patient evaluate actual risks and benefits and reach their own decision; address fears about side effects; use kindness, patience and active listening [Imm sl 36].</li>
</ul></div>
<div class="gpt"><h5>Matching a response to a misconception (T)</h5><ul>
<li>&ldquo;I took the flu vaccine and I got the flu anyway&rdquo;: influenza virus has multiple strains.</li>
<li>&ldquo;I have a great immune system&rdquo;: an immune system not previously exposed to the pathogen cannot fight it.</li>
<li>&ldquo;mRNA vaccines change your DNA&rdquo;: mRNA does not enter the nucleus.</li>
<li>&ldquo;Vaccines cause autism&rdquo;: large studies found no signal for autism.</li>
</ul></div>
<h4>Tell apart</h4>
<div class="gtell"><b>Tell apart</b><ul>
<li>S (simple reason for contact) vs B (supporting characteristics) vs A (interpretation and source) vs R (what to do) [Imm sl 20&ndash;22].</li>
<li>First Ask (why; permission) vs Tell (information about their belief) vs final Ask (current thoughts) [Imm sl 32].</li>
<li>Vaccine hesitancy (reluctance or refusal despite availability) vs a contraindication (a reason not to give the vaccine) [Imm sl 27; AAFP].</li>
<li>Patient-friendly language (to the patient) vs the SBAR with citations (to a prescriber) [Imm sl 22&ndash;23].</li>
</ul></div>
<h4>How it is asked</h4>
<div class="gask"><b>How it is asked and how to answer</b><ul>
<li>SBAR sorting. Example stem: &ldquo;AAFP recommends PCV21 for patients aged 19&ndash;64 with diabetes.&rdquo; Which component? Step 1: decide whether it describes the patient, the interpretation or the action. Step 2: it states the guideline source and the indication, so Assessment.</li>
<li>Hesitancy statement, then best response. Example stem: &ldquo;I took the flu vaccine and got the flu anyway.&rdquo; Step 1: ask why and get permission. Step 2: respond about strains, then ask what they think now.</li>
<li>Step sorting. Example stem: &ldquo;Do you mind if I share some information?&rdquo; Which Ask-Tell-Ask step? Answer: first Ask, permission.</li>
<li>Religious reason. Example stem: a patient declines for religious reasons. Best answer: show sensitivity and hear the concerns [Imm sl 34].</li>
</ul></div>
<h4>Common traps</h4>
<div class="ghook"><b>Traps</b><ul>
<li>Do not dismiss the belief and repeat the benefits; address the stated belief [Imm sl 32].</li>
<li>Do not label the patient; do not say &ldquo;anti-vaxxer&rdquo; (T).</li>
<li>Do not stop talking to a patient who still declines; respect autonomy and keep the door open [Imm sl 32].</li>
<li>Cite the source in the SBAR assessment (T).</li>
<li>Use reliable sources, not AI, for patient information in the lab (T) [Imm sl 33].</li>
<li>The TOSCE SBAR stations concern a prescription error communicated to a preceptor or physician [TOSCE guide].</li>
</ul></div>
</section>

`;

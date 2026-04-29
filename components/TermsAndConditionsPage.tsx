
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Schema from './Schema';
import { getBreadcrumbSchema } from '../lib/schemaLibrary';

const TermsAndConditionsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | FastAutoPass Driving School";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Read the full terms and conditions of FastAutoPass Driving School. Our policies on booking, payments, cancellations, and student conduct for driving lessons in Bradford and Leeds.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans legal-page">
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Terms & Conditions", item: "https://fastautopass.co.uk/terms-and-conditions" }
      ])} />
      {/* HEADER SECTION */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-4">Terms & Conditions</h1>
          <div className="h-1.5 w-20 bg-red-600 mx-auto"></div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-12">
            
            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">1. Introduction</h2>
              <p className="mb-6">
                By booking, purchasing or using any services offered by FastAutoPass, you agree to be legally bound by these Terms and Conditions. These apply to Automatic Driving Lessons, Intensive Driving Courses, Pass Plus Courses, Motorway Lessons, Taxi Driver Assessment, ADI Part 2 Training, ADI Part 3 Training, and Mock Driving Tests provided by us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">2. Eligibility and Legal Capacity</h2>
              <p className="mb-6">
                To enroll in driving lessons with us, you must be at least 17 years old and hold either a provisional or full driving licence from within the UK. For ADI training purposes, DVSA eligibility requirements will also need to be fulfilled; all information provided must be correct and up-to-date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">3. Services Offered</h2>
              <p className="mb-6">
                Services may differ based on instructor availability and regional capacity, with some provided by DVSA-qualified instructors where applicable.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">4. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>All lessons and courses must be paid in full in advance.</li>
                <li>Payments are non-refundable unless cancellation conditions are met (see Section 5).</li>
                <li>Lesson bundles must be used within 6 months of purchase.</li>
                <li>Prices are subject to change without notice.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">5. Cancellation & Refund Policy</h2>
              <p className="mb-6">
                Pupils/trainees must provide at least 48 hours’ notice to cancel or reschedule scheduled lessons. Otherwise, full payment or deduction of the lesson fee will occur from your package.
              </p>
              <p className="mb-6">
                Once any lesson from an intensive, crash, refresher, or standard lesson package has taken place, the package is considered started and non-refundable; there will be no partial refunds given in any circumstance once this time has elapsed.
              </p>
              <p className="mb-6">
                If no lessons have taken place, a full refund can be requested within seven days from the original purchase date, regardless of whether lessons have begun. Any requests submitted after seven days will not be honoured.
              </p>
              <p className="mb-6">
                Refunds (when applicable) will be issued using the original payment method within seven working days after approval.
              </p>
              <p className="mb-4 font-bold text-gray-900 uppercase tracking-tight italic">FastAutoPass’s Rights</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>We reserve the right to cancel or reschedule any lesson due to unforeseen circumstances (e.g., instructor illness, vehicle failure, unsafe weather).</li>
                <li>In such cases, we will reschedule your session at the earliest availability.</li>
                <li>FastAutoPass accepts no responsibility for financial loss or inconvenience resulting from the rescheduling or cancellation of lessons beyond our control.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">6. Instructor Allocation & Driving Test Bookings</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Instructors are assigned based on availability and may change at any time.</li>
                <li>FastAutoPass does not guarantee driving test dates unless this is agreed upon in writing.</li>
                <li>Students are responsible for booking theory and practical tests unless explicitly arranged by us.</li>
                <li>We are not liable for test cancellations or delays caused by the DVSA.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">7. Conduct and Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Students must behave respectfully and professionally.</li>
                <li>Aggression, abuse, threats, or unsafe conduct will result in immediate termination of service without refund.</li>
                <li>You must be fit to drive — free from alcohol, drugs, or medication that affects driving.</li>
                <li>Valid photo ID and eyesight compliance are required for all sessions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">8. Crash Courses, Intensive Courses, Refresher Lessons & Test Access</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Each package includes a specific number of training hours. FastAutoPass is not obligated to provide additional time beyond the purchased hours.</li>
                <li>Test access is conditional on instructor approval.</li>
                <li>If, in the instructor’s professional opinion, the student is not ready or poses a safety risk, use of the FastAutoPass vehicle for the practical test will be refused without refund.</li>
                <li>Unsafe or unprepared candidates will not be allowed to test using our car, to protect the safety of the instructor, the examiner, and the public. The instructor’s decision on test readiness is final and non-negotiable.</li>
              </ul>
              <p className="mb-4 font-bold text-gray-900 uppercase tracking-tight italic">Driving Test Availability Disclaimer</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>FastAutoPass does not guarantee that a driving test will be available within a specific timeframe (e.g. 2–3 weeks) after completing a crash course, intensive course, or any other type of course.</li>
                <li>Driving test waiting times in the UK can range from 3 to 6 months, depending on the test centre and DVSA availability.</li>
                <li>While cancellations may occasionally become available, they are rare and unpredictable.</li>
                <li>If a pupil already has a confirmed driving test booked, we will aim to support them accordingly.</li>
                <li>If the pupil does not have a test booked, any test dates FastAutoPass may help find will be subject to availability and may occur:</li>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>On any day of the week, including early mornings or short notice</li>
                  <li>At any test centre within a reasonable distance, based on what is available</li>
                </ul>
                <li>FastAutoPass is not responsible for test delays, booking limitations, or DVSA cancellations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">9. Pass Plus and Additional Courses</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Pass Plus and other enhancement modules are for skill development only.</li>
                <li>Completion of such courses does not guarantee insurance discounts or licensing benefits.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">10. ADI Training Terms</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>You must meet the DVSA eligibility criteria to enrol in ADI training.</li>
                <li>FastAutoPass provides training support for Parts 1–3 of the ADI qualification process.</li>
                <li>We do not guarantee successful completion or DVSA approval.</li>
                <li>Test booking, theory study, and final preparation remain the responsibility of the trainee.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">11. Limitation of Liability</h2>
              <p className="mb-4">To the fullest extent allowed by law:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>FastAutoPass is not liable for indirect, incidental, or consequential losses, including loss of income, test fees, or career opportunities.</li>
                <li>Our total liability under any agreement shall not exceed the amount paid by the customer for the specific service in question.</li>
                <li>No liability is accepted for issues arising from external parties (e.g., DVSA delays, examiner availability).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">12. Indemnification</h2>
              <p className="mb-4">You agree to indemnify, defend, and hold FastAutoPass’s directors, instructors, staff members, and affiliates harmless against all liabilities, losses or expenses related to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Your breach of these Terms</li>
                <li>Unsafe or unlawful driving behaviour</li>
                <li>Misrepresentation or false claims</li>
                <li>Your conduct may result in legal proceedings by third parties.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">13. Force Majeure</h2>
              <p className="mb-6">
                We cannot accept liability for failure or delays caused by events beyond our control, such as acts of God, fires, floods, illnesses, war, civil unrest, fuel shortages, DVSA disruptions and national emergencies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">14. Intellectual Property</h2>
              <p className="mb-6">
                All content, branding, images, and materials on <a href="https://www.fastautopass.co.uk/" className="text-red-600 font-bold hover:underline">FastAutoPass Driving School</a> are the exclusive intellectual property of FastAutoPass. You may not reproduce, share, or use them without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">15. Governing Law and Jurisdiction</h2>
              <p className="mb-6">
                These Terms shall be governed by and construed by the laws of England and Wales.<br />
                You agree to submit to the exclusive jurisdiction of the courts of England and Wales for any dispute.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">16. Misuse of Services</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Attempting to defraud, threaten, defame, or misuse FastAutoPass services will result in termination and may lead to legal action.</li>
                <li>Publishing false or misleading reviews or damaging our reputation online or offline will be pursued legally under defamation laws.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">17. Code of Conduct and Termination Policy</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>FastAutoPass enforces a strict zero-tolerance policy on harassment, verbal abuse, threats, or manipulation of instructors or staff.</li>
                <li>We reserve the right to terminate lessons or contracts without refund if unacceptable behaviour is displayed.</li>
                <li>This includes refusal to follow safety advice, aggressive test pressure, or repeated lateness or cancellations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">18. No Guarantee Clause</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>FastAutoPass does not guarantee a pass result for theory or practical driving tests, nor successful completion of ADI training.</li>
                <li>Success depends on the student’s personal ability, commitment, and conduct.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">19. No Class Action Waiver & Dispute Resolution Clause</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Any dispute or claim arising out of or relating to FastAutoPass services must be handled individually, and not as part of a group or class action.</li>
                <li>You agree to waive all rights to participate in class action or group legal proceedings against FastAutoPass or its affiliates.</li>
                <li>All disputes shall be resolved through binding arbitration, as provided in the Arbitration Act 1996, conducted privately in the English language.</li>
                <li>The arbitrator’s decision will be final and binding.</li>
                <li>Any claim must be brought within six months of the issue occurring; otherwise, it is permanently barred.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">20. Changes to Terms</h2>
              <p className="mb-6">
                Sometimes we may need to update these terms, and will do our best to notify you in advance when something changes. So it is worthwhile checking back every so often; by continuing using our services after any modifications have taken effect, that constitutes your agreement to any new agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">21. Contact Details</h2>
              <p className="mb-6">
                To reach us with your inquiries or complaints:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:support@fastautopass.co.uk" className="text-red-600 font-bold hover:underline">support@fastautopass.co.uk</a></p>
                <p><strong>Contact us:</strong> <a href="tel:07842587200" className="text-red-600 font-bold hover:underline">07842 587200</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">22. Communication & Response Policy</h2>
              <p className="mb-6">
                At FastAutoPass, we aim to respond within 24-48 hours (Monday-Sunday business hours).<br />
                We cannot accept liability for missed lessons, scheduling issues, or delays caused by incorrect contact details provided by pupils, or technical problems beyond our control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">23. Pupil No-Show Policy</h2>
              <p className="mb-6">
                Should a pupil fail to give 48 hours’ notice when cancelling a lesson without providing sufficient notice beforehand, their session will be recorded as used and no refund, rescheduling, or rescheduling will be offered. Repeated no-shows may result in termination of service at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">24. Data Protection & Privacy Notice</h2>
              <p className="mb-6">
                FastAutoPass is committed to protecting your personal information.<br />
                Any data collected through our website, contact forms, or communication channels will be processed and stored by UK GDPR regulations.<br />
                By using our website or booking a service, you consent to the collection and use of your information as outlined in our <Link to="/privacy-policy" className="text-red-600 font-bold hover:underline">Privacy Policy</Link>.<br />
                We do not share or sell your information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">25. Vehicle Condition and Insurance Disclaimer</h2>
              <p className="mb-6">
                FastAutoPass tuition vehicles are fully insured for driving instruction purposes, regularly maintained and safety-checked, and equipped with dual controls – these controls must only be operated under the supervision of a FastAutoPass instructor.<br />
                Any intentional damage, reckless misuse, or unauthorised driving may result in service termination and recovery of repair costs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">26. Learning Progress Disclaimer</h2>
              <p className="mb-6">
                Progress and development vary from pupil to pupil.<br />
                FastAutoPass does not guarantee that a pupil will reach the test standard within a fixed number of hours or sessions.<br />
                Instructor recommendations are based on safety, DVSA standards, and the pupil’s demonstrated driving ability.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;

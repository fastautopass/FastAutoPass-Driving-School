
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Schema from './Schema';
import { getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    // metadata handled by SEO component
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans legal-page">
      <SEO 
        title="Privacy Policy | FastAutoPass Driving School"
        description="Learn how FastAutoPass Driving School protects your personal data. Our privacy policy outlines our commitment to UK GDPR and data security for all our learners in Bradford and Leeds."
        canonical="https://fastautopass.co.uk/privacy-policy"
      />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Privacy Policy", item: "https://fastautopass.co.uk/privacy-policy" }
      ])} />
      {/* HEADER SECTION */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-4">Privacy Policy</h1>
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
                FastAutoPass is committed to safeguarding the personal information you share with us and this Privacy Policy outlines how we collect, use, store and protect it when you visit our website or services. We strictly abide by all rules set out under the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">2. What Personal Data We Collect</h2>
              <p className="mb-6">
                We may collect the following personal information from you: Your full name, email, phone number and home address if required. Driving licence number (for lessons or ADI training). Bank transfer payment confirmations (if applicable when paying by bank transfer). Any messages or emails you have sent us (with attachments). Your IP address or basic website activity via cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">3. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Respond to enquiries or booking requests</li>
                <li>Arrange and deliver driving lessons or courses</li>
                <li>Contact you about lesson times or schedule changes</li>
                <li>Handle payments and issue receipts</li>
                <li>Meet DVSA requirements (for ADI training or test bookings)</li>
                <li>Improve the way we run our services and website</li>
              </ul>
              <p>We do not use your personal data for any kind of <strong>unsolicited marketing</strong>.</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">4. Legal Basis for Processing Your Data</h2>
              <p className="mb-4">We collect and use your personal data under one or more of the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>To fulfil a contract (e.g. delivering booked lessons)</li>
                <li>To comply with legal obligations (e.g. HMRC or DVSA record-keeping)</li>
                <li>For legitimate business reasons (e.g. scheduling, fraud prevention)</li>
                <li>With your consent, where required (e.g. optional communications)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">5. Who We Share Your Data With</h2>
              <p className="mb-4">We do not sell or share your personal data with third parties for marketing.</p>
              <p className="mb-4">We may share necessary information with:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>DVSA (for test or ADI training-related purposes)</li>
                <li>Our driving instructors (for scheduling your lessons)</li>
                <li>Legal or tax authorities if required by law</li>
              </ul>
              <p>All third parties we partner with must abide by <strong>UK data protection standards</strong>.</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">6. Data Storage and Security</h2>
              <p className="mb-6">
                At our school, we take data security very seriously. Your personal data is stored safely on <strong>password-protected systems</strong> and is only accessible by authorised staff or instructors. Your records will also be reviewed regularly for proper management.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">7. How Long We Keep Your Data</h2>
              <p className="mb-6">
                We’ll only keep your personal information for as long as it’s needed — for example, to complete your lessons, resolve a complaint, or meet legal requirements. In most cases, we’ll keep basic records (e.g. payment or lesson logs) for up to <strong>6 years</strong> for tax or audit purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">8. Children’s Privacy</h2>
              <p className="mb-6">
                Our services are designed for people aged 17 and over. If a parent or guardian contacts us to book on behalf of someone under 18, we only collect the necessary details for scheduling and communication. We do not knowingly collect information from anyone under 13.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">9. Payments and Security</h2>
              <p className="mb-6">
                FastAutoPass does not accept card payments through our website or any third-party platform. <br />
                <strong>All payments must be made via bank transfer.</strong> <br />
                We do not store, collect, or process debit or credit card details.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">10. Cookies and Website Tracking</h2>
              <p className="mb-4">Our website may utilise cookies in order to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Make it work more efficiently</li>
                <li>Track anonymous visitor data using tools like Google Analytics</li>
              </ul>
              <p>This helps us understand which pages are useful and improve your experience. You can turn off cookies in your browser settings if you prefer.</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">11. Your Rights</h2>
              <p className="mb-4">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>See the personal data we hold about you</li>
                <li>Correct inaccurate or outdated information</li>
                <li>Ask us to delete your data (where legally possible)</li>
                <li>Withdraw your consent for optional communications</li>
                <li>Object to or restrict how we use your data</li>
                <li>File a complaint with the Information Commissioner’s Office (ICO)</li>
              </ul>
              <p>To make a request, just email us at <a href="mailto:support@fastautopass.co.uk" className="text-red-600 font-bold hover:underline">support@fastautopass.co.uk</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">12. Marketing and Contact Preferences</h2>
              <p className="mb-6">
                We may contact you with booking confirmations, reminders, or important updates. <br />
                We will only send promotional offers or updates if you’ve asked to receive them. <br />
                You can unsubscribe at any time by replying to our message or contacting us directly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">13. Third-Party Links</h2>
              <p className="mb-6">
                Our website may include links to other sites (like DVSA test bookings or training resources). We’re not responsible for how those sites use your data — please check their privacy policies if you’re unsure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">14. Changes to This Policy</h2>
              <p className="mb-6">
                Sometimes we might update this Privacy Policy. We won’t always be able to notify you directly, so it’s worth checking this page now and then to stay informed. If you carry on using our services after we’ve made changes, we’ll assume you’re happy with the new version.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">15. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, please get in touch:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:support@fastautopass.co.uk" className="text-red-600 font-bold hover:underline">support@fastautopass.co.uk</a></p>
                <p><strong>Contact us:</strong> <a href="tel:07842587200" className="text-red-600 font-bold hover:underline">07842 587200</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;

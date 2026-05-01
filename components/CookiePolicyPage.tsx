
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Schema from './Schema';
import { getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const CookiePolicyPage: React.FC = () => {
  useEffect(() => {
    // metadata handled by SEO component
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans legal-page">
      <SEO 
        title="Cookies Policy | FastAutoPass Driving School"
        description="Understand how FastAutoPass Driving School uses cookies to improve your experience. Our cookie policy details the types of cookies we use and how you can manage them."
        canonical="https://fastautopass.co.uk/cookie-policy"
      />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Cookies Policy", item: "https://fastautopass.co.uk/cookie-policy" }
      ])} />
      {/* HEADER SECTION */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-4">Cookies Policy</h1>
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
                This Cookies Policy explains how FastAutoPass uses cookies and similar technologies when you visit <a href="https://fastautopass.co.uk/" className="text-red-600 font-bold hover:underline">FastAutoPass Driving School</a>. It should be read alongside our <Link to="/privacy-policy" className="text-red-600 font-bold hover:underline">Privacy Policy</Link> and <Link to="/terms-and-conditions" className="text-red-600 font-bold hover:underline">Terms & Conditions</Link>.
              </p>
              <p>By continuing to use our website, you acknowledge that cookies may be used in the ways described in this policy, subject to your browser settings and any cookie preferences you choose.</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">2. What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files placed on your device when you visit a website. They help websites work properly, improve user experience, remember preferences, and collect information about how visitors use the site.
              </p>
              <p className="mb-4">Cookies may be:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Session cookies, which are deleted when you close your browser</li>
                <li>Persistent cookies, which remain on your device until they expire or are deleted</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">3. How We Use Cookies</h2>
              <p className="mb-4">FastAutoPass may use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Make the website function properly</li>
                <li>Improve site speed, performance, and usability</li>
                <li>Remember user preferences where applicable</li>
                <li>Understand how visitors use the website</li>
                <li>Help us improve our pages, services, and user experience</li>
                <li>Support website security and prevent misuse</li>
              </ul>
              <p>We do not use cookies to sell your personal data or to send unsolicited marketing.</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">4. Types of Cookies We May Use</h2>
              <p className="mb-6">We may use the following types of cookies on our website:</p>
              
              <div className="space-y-6">
                <div>
                  <p className="mb-2 font-bold text-gray-900 uppercase tracking-tight italic">- Strictly Necessary Cookies</p>
                  <p>These are essential for the website to function properly. Without them, some parts of the website may not work correctly.</p>
                </div>
                
                <div>
                  <p className="mb-2 font-bold text-gray-900 uppercase tracking-tight italic">- Performance and Analytics Cookies</p>
                  <p>These help us understand how visitors use the website, such as which pages are visited most often and how users move around the site. This information helps us improve website performance and usability.</p>
                </div>

                <div>
                  <p className="mb-2 font-bold text-gray-900 uppercase tracking-tight italic">- Functionality Cookies</p>
                  <p>These may be used to remember choices you make, such as preferences or form-related settings, so the website can provide a more tailored experience.</p>
                </div>

                <div>
                  <p className="mb-2 font-bold text-gray-900 uppercase tracking-tight italic">- Security Cookies</p>
                  <p>These help protect the website and users against suspicious or malicious activity.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">5. Third-Party Cookies</h2>
              <p className="mb-4">Some cookies may be placed by trusted third-party services used on our website, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Google Analytics or similar analytics tools</li>
                <li>Website plugins or embedded features</li>
                <li>Spam prevention or security tools</li>
                <li>Website performance or caching tools</li>
              </ul>
              <p>These third parties may collect information in accordance with their own privacy and cookie policies. We do not control third-party cookies directly and recommend that you review their own policies where relevant.</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">6. Managing and Controlling Cookies</h2>
              <p className="mb-6">
                You can control or disable cookies through your browser settings. Most browsers allow you to:<br />
                - View what cookies are stored<br />
                - Delete cookies<br />
                - Block cookies completely<br />
                - Block cookies from specific websites
              </p>
              <p className="mb-6">Please note that disabling certain cookies may affect how the website functions and may limit some features or usability.</p>
              <p>If a cookie banner or consent tool is available on our website, you can also use it to manage your cookie preferences.</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">7. Cookies and Personal Data</h2>
              <p className="mb-6">
                Some cookies may collect information that is considered personal data, such as an IP address or browsing activity. Where this happens, we handle that information in line with our <Link to="/privacy-policy" className="text-red-600 font-bold hover:underline">Privacy Policy</Link> and applicable UK data protection laws, including UK GDPR and the Data Protection Act 2018.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">8. Updates to This Cookies Policy</h2>
              <p className="mb-6">
                We may update this Cookies Policy from time to time to reflect changes in law, website functionality, or the way cookies are used.
              </p>
              <p>Any updates will be posted on this page. We recommend checking this page from time to time so you remain informed.</p>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">9. Related Policies</h2>
              <p className="mb-4">For more information on how we handle personal data and your rights, please review our:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link to="/privacy-policy" className="text-red-600 font-bold hover:underline">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions" className="text-red-600 font-bold hover:underline">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black uppercase italic mb-4 text-gray-900">10. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Cookies Policy or how cookies are used on our website, please get in touch:
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

export default CookiePolicyPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Mail } from 'lucide-react';
import { CONTACT_INFO, TRUST_LINKS } from '../constants';
import BookingForm from './BookingForm';

import Schema from './Schema';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const ContactPage: React.FC = () => {
  React.useEffect(() => {
    // metadata handled by SEO component
  }, []);

  return (
    <div className="bg-white animate-fadeIn contact-page">
      <SEO 
        title="Contact FastAutoPass | Book Driving Lessons Bradford & Leeds"
        description="Get in touch to book driving lessons in Bradford or Leeds. Our 24/7 team is ready to help you start your journey to passing your driving test."
        canonical="https://fastautopass.co.uk/contact"
      />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Contact", item: "https://fastautopass.co.uk/contact" }
      ])} />
      <Schema type="LocalBusiness" data={getLocalBusinessSchema()} />
      <Schema type="FAQPage" data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can I start my driving lessons?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We aim to respond to all enquiries within 2 hours. Depending on instructor availability in your area of Bradford or Leeds, we can often get you behind the wheel within 1-2 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "What is your cancellation policy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We require a minimum of 48 hours' notice for any lesson cancellations. This allows us to offer the slot to other students. Cancellations made with less than 48 hours' notice may be charged at the full lesson rate."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer weekend or evening lessons?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer flexible booking options including evenings and weekends across West Yorkshire to fit around your work or study commitments."
            }
          }
        ]
      }} />
      {/* Hero Section */}
      <section className="relative bg-[#001A33] text-white py-24 lg:py-40 border-b-8 border-red-600 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter mb-6">
            Contact <span className="text-red-600">FastAutoPass</span> Driving School
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium mb-12 leading-relaxed italic opacity-90">
            Whether you have a quick question about automatic lessons, want to check instructor availability in your area, or are ready to book an intensive course, our team is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8">
            <a 
              href={TRUST_LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <span className="text-xs font-black text-white uppercase tracking-widest italic">5-Star Google Reviews</span>
            </a>
            
            <div className="hidden sm:block w-px h-8 bg-white/10"></div>

            <a 
              href={TRUST_LINKS.trustpilot}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <svg className="w-5 h-5 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.002 0L14.77 8.52h8.962l-7.25 5.267 2.768 8.52-7.25-5.267-7.25 5.267 2.768-8.52-7.25-5.267h8.962z"/></svg>
              <span className="text-sm font-black text-white uppercase tracking-widest italic">Excellent on Trustpilot</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="flex-grow">
                <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-10 h-10" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-3">Call Support</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">Speak directly with our friendly booking team for immediate help with lessons and tests.</p>
              </div>
              <div className="mt-auto">
                <a href="tel:07842587200" className="inline-block bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase italic tracking-widest hover:bg-red-700 transition-all shadow-md text-sm">
                  Call Now
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="flex-grow">
                <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-10 h-10" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-3">WhatsApp</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">Send us a quick message about lessons, intensive courses, mock tests, Pass Plus, motorway lessons, or availability in your area.</p>
              </div>
              <div className="mt-auto">
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-10 py-4 rounded-full font-black uppercase italic tracking-widest hover:bg-green-600 transition-all shadow-md text-sm">Chat Now</a>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="flex-grow">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-10 h-10" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-3">Email Us</h3>
                <p className="text-gray-500 font-medium mb-4 leading-relaxed">Send us an email about lessons, course options, availability, or general enquiries.</p>
              </div>
              <div className="mt-auto pt-8">
                <a href="mailto:admin@fastautopass.co.uk" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-black uppercase italic tracking-widest hover:bg-blue-700 transition-all shadow-md text-sm">
                  Email Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-black italic uppercase tracking-tighter mb-8 text-center">
              Local Coverage <span className="text-red-600">& Service Areas</span>
            </h2>
            <p className="text-gray-600 font-medium mb-12 text-center max-w-3xl mx-auto">
              FastAutoPass provides professional automatic driving tuition and intensive courses across the following key hubs and surrounding districts in West Yorkshire.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-6 border-b-2 border-red-600 inline-block pb-1">Core Services</h4>
                <div className="space-y-3">
                  <Link to="/automatic-driving-lessons" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Automatic Lessons</Link>
                  <Link to="/manual-driving-lessons" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Manual Lessons</Link>
                  <Link to="/intensive-driving-courses" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Intensive Courses</Link>
                  <Link to="/mock-driving-tests" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Mock Driving Tests</Link>
                  <Link to="/refresher-lessons" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Refresher Lessons</Link>
                  <Link to="/pass-plus" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Pass Plus</Link>
                  <Link to="/motorway-lessons" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Motorway Lessons</Link>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-6 border-b-2 border-red-600 inline-block pb-1">Bradford Hub</h4>
                <div className="space-y-3">
                  <Link to="/bradford" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">All Bradford Areas</Link>
                  <Link to="/bradford/shipley" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Shipley</Link>
                  <Link to="/bradford/heaton" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Heaton</Link>
                  <Link to="/bradford/manningham" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Manningham</Link>
                  <Link to="/bradford/thornton" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Thornton</Link>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-6 border-b-2 border-red-600 inline-block pb-1">Leeds Hub</h4>
                <div className="space-y-3">
                  <Link to="/leeds" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">All Leeds Areas</Link>
                  <Link to="/leeds/harehills" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Harehills</Link>
                  <Link to="/leeds/horsforth" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Horsforth</Link>
                  <Link to="/leeds/pudsey-leeds" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Pudsey</Link>
                  <Link to="/leeds/headingley" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Headingley</Link>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-6 border-b-2 border-red-600 inline-block pb-1">Driving Test Centres</h4>
                <div className="space-y-3">
                  <Link to="/driving-test-centres" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">All Test Centres</Link>
                  <Link to="/driving-test-centres/thornbury-driving-test-centre" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Thornbury (Bradford)</Link>
                  <Link to="/driving-test-centres/heaton-driving-test-centre" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Heaton (Bradford)</Link>
                  <Link to="/driving-test-centres/steeton-driving-test-centre" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Steeton (Keighley)</Link>
                  <Link to="/driving-test-centres/horsforth-driving-test-centre" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Horsforth (Leeds)</Link>
                  <Link to="/driving-test-centres/leeds-colton-driving-test-centre" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Leeds (Colton)</Link>
                  <Link to="/driving-test-centres/leeds-fearnville-driving-test-centre" className="block text-gray-500 hover:text-red-600 font-bold transition-colors">Leeds (Fearnville)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
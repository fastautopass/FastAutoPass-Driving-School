
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import Accordion from './Accordion';
import MockTestChecklist from './MockTestChecklist';
import TrustBadges from './TrustBadges';
import ReviewsSlider from './ReviewsSlider';
import RecentPasses from './RecentPasses';
import Schema from './Schema';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

const MockTestsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const renderMarkdownLinks = (text: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const linkText = match[1];
      const linkUrl = match[2];

      if (linkUrl.startsWith('/')) {
        parts.push(
          <Link 
            key={match.index} 
            to={linkUrl} 
            className="text-red-600 font-bold hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a 
            key={match.index} 
            href={linkUrl} 
            className="text-red-600 font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {linkText}
          </a>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  React.useEffect(() => {
    document.title = "Mock Driving Tests Bradford & Leeds | DVSA Style Assessments";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Prepare for your practical exam with realistic mock driving tests in Bradford and Leeds. Master local test routes and build confidence with DVSA standards.');
  }, []);

  const faqs = [
    {
      question: "What happens in a mock driving test?",
      answer: "A mock driving test replicates the full DVSA exam experience. Your instructor will remain silent, marking your drive using the official DL25 criteria. We cover everything from the eyesight check to the independent driving section. To prepare, many students combine these with our [automatic driving lessons](/automatic-driving-lessons)."
    },
    {
      question: "How long does a mock driving test take?",
      answer: "The test itself lasts approximately 40 minutes, mirroring the real exam duration. We also include a 15-minute debrief at the end to review your performance and any faults. This structured approach is a key part of our [intensive driving courses](/intensive-driving-courses). You can book a session via our [contact page](/contact)."
    },
    {
      question: "Is your mock test marked like the DVSA test?",
      answer: "Yes, we use the exact same marking system as the DVSA. Faults are categorised as driving (minor), serious, or dangerous. A single serious or dangerous fault results in a mock failure. This rigorous marking helps you understand the standards required for our [recent passes](/recent-passes)."
    },
    {
      question: "Can I book a mock test without regular lessons?",
      answer: "Absolutely. We offer standalone mock tests for learners who want an independent assessment of their readiness. This is particularly useful if you have been practicing with family or another school. If you find you need more help, you can transition to our [automatic driving lessons](/automatic-driving-lessons)."
    },
    {
      question: "Will we drive near my local test centre?",
      answer: "Yes, we conduct mock tests on actual routes used by your chosen test centre. Whether you are at [Thornbury](/driving-test-centres/thornbury-driving-test-centre), [Heaton](/driving-test-centres/heaton-driving-test-centre), [Steeton](/driving-test-centres/steeton-driving-test-centre), or [Horsforth](/driving-test-centres/horsforth-driving-test-centre), we ensure you are familiar with the local junctions. This local knowledge is vital for success in our [intensive driving courses](/intensive-driving-courses)."
    },
    {
      question: "What do I need to bring to my mock test?",
      answer: "You should bring your provisional driving licence and any glasses or contact lenses you require for driving. It is also helpful to have your theory test certificate number if you have already passed it. For more details on test requirements, visit our [contact page](/contact)."
    },
    {
      question: "What if I make a serious fault during the mock?",
      answer: "Don't panic. The purpose of the mock is to identify these issues before the real thing. We will provide a detailed explanation of why the fault occurred and how to fix it. Many learners find that a few extra [automatic driving lessons](/automatic-driving-lessons) are enough to correct these serious errors."
    },
    {
      question: "Do you give feedback after the mock test?",
      answer: "Yes, every mock test includes a comprehensive verbal debrief and a written summary of your faults. We explain the risk associated with each error to help you improve your safety. This feedback loop is essential for the high success rate seen in our [recent passes](/recent-passes)."
    },
    {
      question: "How many mock tests should I do before my real test?",
      answer: "Most learners benefit from 2 to 3 mock tests. The first identifies weaknesses, and subsequent tests build confidence and consistency. This progression is a core element of our [intensive driving courses](/intensive-driving-courses). You can discuss a plan on our [contact page](/contact)."
    },
    {
      question: "Can I do a mock test in an automatic car?",
      answer: "Yes, we specialise in automatic tuition. Our mock tests are conducted in modern automatic vehicles, removing the stress of gear changes so you can focus on the road. Learn more about our fleet on the [automatic driving lessons](/automatic-driving-lessons) page."
    },
    {
      question: "Do you cover both Bradford and Leeds areas?",
      answer: "Yes, we provide mock tests across both Bradford and Leeds, covering all major test centres in West Yorkshire. Our instructors are experts in the local road networks of both cities. This wide coverage supports our [intensive driving courses](/intensive-driving-courses) throughout the region."
    },
    {
      question: "Can you help with manoeuvres and parking before the test?",
      answer: "Certainly. If the mock test reveals issues with your manoeuvres, we can dedicate time to perfecting them. Whether it's parallel parking or bay parking, we ensure you are confident. Check our [automatic driving lessons](/automatic-driving-lessons) for specific manoeuvre training."
    },
    {
      question: "What if I have test anxiety or panic on test day?",
      answer: "Mock tests are the best way to combat anxiety through exposure. By normalising the test environment, you reduce the \"fear of the unknown.\" We also offer tips on staying calm and focused. For more support, reach out via our [contact page](/contact)."
    },
    {
      question: "How do I book and how quickly can you get back to me?",
      answer: "You can book directly through our website or by messaging us on WhatsApp. We aim to respond to all enquiries within a few hours to get you scheduled. Start your journey today by visiting our [contact page](/contact) or checking our [mock driving tests](/mock-driving-tests) availability."
    }
  ];

  return (
    <div className="animate-fadeIn mock-tests-page">
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "Mock Driving Tests",
          "DVSA-style mock driving tests in Bradford and Leeds. Experience real test conditions with expert feedback to ensure test-day success.",
          "https://fastautopass.co.uk/mock-driving-tests"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Mock Driving Tests", item: "https://fastautopass.co.uk/mock-driving-tests" }
        ])} 
      />
      <Schema 
        type="FAQPage" 
        data={{
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
            }
          }))
        }} 
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-24 hero-impact">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-7/12">
              <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Maximise Your Pass Potential
              </span>
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight">
                Mock Driving Tests in <span className="text-red-500">Bradford & Leeds</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-medium">
                Prepare for your DVSA test with our structured Mock Test System. Experience real test conditions, receive expert feedback, and build the confidence to pass first time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span className="text-sm font-bold italic uppercase">DVSA-Style Assessment</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span className="text-sm font-bold italic uppercase">Detailed Marking & Feedback</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 sm:col-span-2">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span className="text-sm font-bold italic uppercase">Realistic Test-Route Simulation</span>
                </div>
              </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#booking" className="bg-red-600 text-white px-8 py-4 rounded-lg font-extrabold text-center hover:bg-red-700 shadow-xl transition-all uppercase italic tracking-widest">
                    Book a mock driving test
                  </a>
                  <div className="flex items-center justify-center">
                    <TrustBadges dark minimal />
                  </div>
                </div>
            </div>
            
            <div className="lg:w-5/12 w-full" id="booking">
              <BookingForm areaName="Mock Test" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Importance of Mock Driving Tests */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter">The Importance of Mock Driving Tests</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed font-medium italic">
                Statistics show that many learners in Bradford and Leeds fail their practical driving test not due to lack of skill, but due to <span className="text-red-600 font-bold">test-day nerves</span>. The transition from a supportive lesson environment to the formal atmosphere of an exam can be daunting.
              </p>
              <p className="text-gray-700 leading-relaxed font-medium italic">
                Our Mock Driving Tests are designed to bridge that gap. By replicating the exact format of the DVSA test, we help you normalise the experience, allowing your skills to shine when it counts. This is a full simulation, distinct from our <Link to="/test-preparation" className="text-red-600 font-bold hover:underline">DVSA test preparation</Link> coaching sessions.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-inner">
              <h4 className="font-black text-xl mb-4 text-gray-900 italic uppercase">Key Benefits:</h4>
              <ul className="space-y-4">
                {['Identify hidden weaknesses before the examiner does', 'Understand the DVSA marking criteria in depth', 'Master the "Independent Drive" and Sat-Nav sections', 'Significantly reduce anxiety through exposure'].map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    <span className="font-bold text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The FastAutoPass Unique Mock Test System */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Methodology</span>
            <h2 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter">The FastAutoPass Mock System</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Real Conditions",
                desc: "Full silence from the instructor. No coaching or prompts. We simulate the examiner's tone and the full 'Show Me, Tell Me' procedure.",
                icon: "⏱️"
              },
              {
                title: "DVSA Marking",
                desc: "We use the official DL25 marking criteria, categorising faults as Minor (Driving), Serious, or Dangerous just like a real examiner.",
                icon: "📝"
              },
              {
                title: "Expert Debrief",
                desc: "A comprehensive review of your drive. We explain not just what went wrong, but why it's a risk on today's busy roads.",
                icon: "🤝"
              },
              {
                title: "Targeted Plan",
                desc: "Receive a tailored improvement roadmap focusing on any 'Serious' faults identified, ensuring they are corrected before test day.",
                icon: "🎯"
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl transition-all hover:bg-white/10 hover:-translate-y-2">
                <div className="text-5xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tight text-red-500">{step.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority & Reviews Section */}
      <ReviewsSlider />

      {/* Recent Passes Section */}
      <RecentPasses areaName="Bradford & Leeds" />

      <MockTestChecklist showCTA={false} />

      {/* Local SEO Section */}
      <section className="pt-0 pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-8 italic uppercase tracking-tighter leading-tight">Master Local Test Routes</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              Our instructors are experts in the specific road networks, complex junctions, and high-pressure test routes used across the entire <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link> and <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link> region. Whether you are preparing for a test at <Link to="/driving-test-centres/thornbury-driving-test-centre" className="text-red-600 font-bold hover:underline">Thornbury</Link>, <Link to="/driving-test-centres/heaton-driving-test-centre" className="text-red-600 font-bold hover:underline">Heaton</Link>, <Link to="/driving-test-centres/steeton-driving-test-centre" className="text-red-600 font-bold hover:underline">Steeton</Link>, <Link to="/driving-test-centres/horsforth-driving-test-centre" className="text-red-600 font-bold hover:underline">Horsforth</Link>, <Link to="/driving-test-centres/leeds-colton-driving-test-centre" className="text-red-600 font-bold hover:underline">Leeds Colton</Link>, <Link to="/driving-test-centres/leeds-fearnville-driving-test-centre" className="text-red-600 font-bold hover:underline">Leeds Fearnville</Link>, or <Link to="/driving-test-centres/walton-lgv-driving-test-centre" className="text-red-600 font-bold hover:underline">Walton LGV</Link>, we simulate the exact conditions you will face. From the multi-lane roundabouts of the Bradford ring road to the busy urban corridors of Leeds, our mock tests ensure you are never surprised by a local road layout on the day that matters most.
              <br /><br />
              We cover all major residential and commercial areas, ensuring that whether you're navigating the steep hills of Bradford, the high-speed dual carriageways of Leeds, or the busy commuter routes of the region, you have the local knowledge required to pass first time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg italic uppercase">Authentic Routes</h4>
                <p className="text-gray-600">We use the same high-speed dual carriageways and tight urban junctions examiners prefer.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg italic uppercase">Test-Ready Verification</h4>
                <p className="text-gray-600">We won't just say you're ready; we'll prove it with data-backed feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: RELATED DRIVING SERVICES */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Explore More Driving Services
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">You may also be interested in these related services</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/automatic-driving-lessons" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Automatic Driving Lessons
            </Link>
            <Link to="/intensive-driving-courses" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Intensive Driving Courses
            </Link>
            <Link to="/pass-plus" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Pass Plus Courses
            </Link>
            <Link to="/motorway-lessons" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Motorway Lessons
            </Link>
            <Link to="/test-preparation" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              DVSA Test Preparation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 italic uppercase tracking-tighter">Mock Driving Test FAQs</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-base font-black uppercase italic text-gray-900 group-hover:text-red-600 transition-colors">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all ${openFaq === i ? 'bg-red-600 border-red-600 text-white rotate-45' : 'text-gray-400'}`}>
                    <span className="text-xl font-black">+</span>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="p-8 bg-gray-50 border-t border-gray-200 animate-slideDown">
                    <div className="text-gray-600 font-medium leading-relaxed italic">
                      {renderMarkdownLinks(faq.answer)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MockTestsPage;

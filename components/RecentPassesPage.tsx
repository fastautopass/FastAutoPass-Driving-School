import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ShieldCheck, Zap, MapPin, ClipboardCheck } from 'lucide-react';
import RecentPasses from './RecentPasses';
import TrustBadges from './TrustBadges';
import BookingForm from './BookingForm';
import { ALL_LOCATIONS, CONTACT_INFO } from '../constants';
import Schema from './Schema';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const MarkdownLink: React.FC<any> = ({ href, children, ...props }) => {
  const isInternal = href?.startsWith('/');
  if (isInternal) {
    return <Link to={href} {...props}>{children}</Link>;
  }
  return <a href={href} {...props}>{children}</a>;
};

const FAQItem: React.FC<{ faq: { question: string; answer: string }; idx: number }> = ({ faq, idx }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${idx}`}
        className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left group"
      >
        <span className="text-base font-black uppercase italic text-gray-900 pr-8 leading-tight group-hover:text-red-600 transition-colors">{faq.question}</span>
        <span className={`text-red-600 font-black transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
      </button>
      <div 
        id={`faq-answer-${idx}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-8 bg-white prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed border-t border-gray-100">
          <ReactMarkdown components={{ a: MarkdownLink }}>{faq.answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

const RecentPassesPage: React.FC = () => {
  React.useEffect(() => {
    // window.scrollTo(0, 0); // optional
  }, []);

  const bradfordAreas = ALL_LOCATIONS.filter(l => l.city === 'bradford').slice(0, 12);
  const leedsAreas = ALL_LOCATIONS.filter(l => l.city === 'leeds').slice(0, 12);

  const faqs = [
    {
      question: "How do recent automatic test passes in Bradford and Leeds help new learners choose an instructor?",
      answer: "Seeing real people pass their tests in your local area is the ultimate proof of quality. When you see our students successfully navigating the complex roundabouts in Leeds or the narrow residential streets of Bradford, it shows our instructors have the local knowledge required. It’s about more than just driving; it’s about mastering the specific routes you’ll face on your big day."
    },
    {
      question: "What do successful learners usually do before they pass their automatic driving test?",
      answer: "Consistency is the secret to success. Most of our successful students take regular [automatic driving lessons](/automatic-driving-lessons) and supplement them with private practice if possible. They also take the time to understand the theory behind the road layouts, ensuring they aren't just memorising routes but actually learning how to drive safely in any situation."
    },
    {
      question: "Can mock driving tests improve my chances of passing first time?",
      answer: "Yes, they are arguably the most important part of your preparation. A [mock driving test](/mock-driving-tests) simulates the exact pressure of the real exam, helping you identify small habits that could lead to faults. By experiencing the \"test environment\" before the actual day, you'll feel much more composed when the examiner is sitting next to you."
    },
    {
      question: "Do your recent passes come from Bradford test routes and Leeds test routes?",
      answer: "Absolutely. Our gallery is filled with passes from across the region. We make sure every learner is comfortable with the specific quirks of these areas, such as the busy filter lights in Bradford or the high-speed merges often found on Leeds test routes."
    },
    {
      question: "How much local route practice do learners usually need before passing?",
      answer: "While everyone learns at a different pace, we usually recommend spending the final 10-15 hours of your training focusing specifically on test-ready skills. This involves navigating the most challenging junctions in your chosen area and ensuring you are comfortable with the independent driving section of the test."
    },
    {
      question: "Are automatic driving lessons better for nervous learners preparing for the test?",
      answer: "For many, yes. Removing the need to manage a clutch and gears allows you to focus 100% on your surroundings. This is especially helpful in busy city environments where hazard perception is key. Many of our students choose automatic tuition to build their confidence faster and simplify the learning process."
    },
    {
      question: "What common mistakes stop learners from getting a recent pass result?",
      answer: "The most common mistakes often involve simple observation errors at junctions or failing to react correctly to changing road conditions. In busy areas like Leeds city centre or Bradford's arterial roads, missing a road sign or a pedestrian crossing can lead to a serious fault. Our training focuses heavily on these areas to ensure you are prepared for test day."
    },
    {
      question: "How do you help learners prepare for busy Bradford and Leeds roads?",
      answer: "We use a progressive approach. We won't throw you into the deep end at a major roundabout on day one. We start in quieter areas to build your car control and gradually move into busier environments as your skills improve. This ensures you feel capable and calm, even in heavy traffic."
    },
    {
      question: "Can intensive driving courses help me pass faster?",
      answer: "[Intensive driving courses](/intensive-driving-courses) are a fantastic way to consolidate your learning. By spending more time behind the wheel in a shorter window, you retain information better and build muscle memory faster. This is a popular choice for learners who have a test date booked and want to ensure they are fully prepared."
    },
    {
      question: "What is the benefit of learning with an instructor who knows the local test areas?",
      answer: "Local knowledge is invaluable. An instructor who knows the \"tricky\" spots—like a deceptive speed limit change or a lane that ends abruptly—can give you the heads-up you need. This insider info helps you avoid common pitfalls and ensures your preparation is targeted and highly relevant to your actual test."
    },
    {
      question: "Do recent pass stories reflect real driving test conditions?",
      answer: "Every pass story we share is a result of a real DVSA practical test conducted under standard exam conditions. Our learners face the same traffic, weather, and road challenges as any other driver in Bradford or Leeds. These stories are a testament to the effectiveness of our structured training and the hard work our students put in to reach the required standard."
    },
    {
      question: "How can I tell if I am ready to book my practical test?",
      answer: "You’re ready when your instructor no longer needs to help you with the controls or the navigation. If you can drive for a full hour without any \"serious\" or \"dangerous\" faults, you’re in a great position. We often use a final [mock driving test](/mock-driving-tests) to confirm you're truly ready for the real thing."
    },
    {
      question: "What should I focus on in the final weeks before my driving test?",
      answer: "In the final weeks, you should focus on refining your maneuvers and practicing the specific routes used by your chosen test centre. It’s also a great time to take a final mock driving test to ensure your nerves are under control. Consistency is key during this period to maintain your test-ready mindset."
    },
    {
      question: "What is the best next step if I want to become one of your recent automatic test passes?",
      answer: "The best next step is to [contact our booking team](/contact) to check current instructor availability in your area. We can discuss your previous experience and help you choose the right course, whether it's regular weekly lessons or an intensive boost. Join our growing list of successful learners and start your journey today."
    }
  ];

  return (
    <div className="bg-white animate-fadeIn recent-passes-page">
      <SEO 
        title="Recent Driving Test Passes in Bradford & Leeds | Student Success"
        description="See our latest driving test success stories across Bradford and Leeds areas. Real student results from West Yorkshire's automatic driving specialists."
        canonical="https://fastautopass.co.uk/recent-passes"
      />
      <Schema 
        type="LocalBusiness" 
        data={getLocalBusinessSchema()} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Recent Passes", item: "https://fastautopass.co.uk/recent-passes" }
        ])} 
      />
      <Schema 
        type="FAQPage" 
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }} 
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 lg:py-24 border-b-8 border-red-600 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-none">
                Recent Automatic <span className="text-red-600">Test Passes</span> in Bradford & Leeds
              </h1>
              <p className="text-lg lg:text-xl text-gray-400 max-w-2xl font-medium mb-8 italic leading-relaxed">
                Join hundreds of successful learners who have passed their automatic driving test across <Link to="/bradford" className="text-white hover:text-red-600 underline decoration-red-600 underline-offset-4 transition-colors">Bradford</Link> and <Link to="/leeds" className="text-white hover:text-red-600 underline decoration-red-600 underline-offset-4 transition-colors">Leeds</Link> with FastAutoPass. Our students gain the confidence to handle busy city roads, roundabouts, and residential streets, helping them feel fully prepared for test day.
              </p>
              <div className="flex items-center justify-start">
                <TrustBadges dark minimal />
              </div>
            </div>
            <div className="w-full flex justify-center lg:justify-end [&>div]:max-w-2xl">
              <BookingForm areaName="Recent Passes Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <RecentPasses areaName="Bradford & Leeds" />
        </div>
      </section>

      {/* Why Learners Choose FastAutoPass */}
      <section className="py-[60px] bg-gray-900 text-white border-y border-white/5 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 skew-x-12 transform translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-6xl font-black italic uppercase tracking-tighter mb-4 leading-none">
              WHY <span className="text-red-600">FASTAUTOPASS</span> STUDENTS PASS WITH CONFIDENCE
            </h2>
            <p className="text-gray-400 font-medium text-lg lg:text-xl italic max-w-2xl mx-auto mb-6">
              Practical, confidence-building automatic driving lessons across Bradford and Leeds.
            </p>
            <div className="h-1.5 w-24 bg-red-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Block 1 */}
            <div className="flex flex-col h-full group">
              <div className="mb-[30px] flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-red-600/20 shrink-0">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black uppercase italic mb-[20px] tracking-tight min-h-[3.5rem] flex items-center">Trusted & Supportive Lessons</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                FastAutoPass has built a strong reputation across Bradford and Leeds for helping learners develop the confidence and safe driving habits needed to pass their driving test.
              </p>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col h-full group">
              <div className="mb-[30px] flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-red-600/20 shrink-0">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black uppercase italic mb-[20px] tracking-tight min-h-[3.5rem] flex items-center">Automatic Driving Lessons</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our <Link to="/automatic-driving-lessons" className="text-white hover:text-red-600 underline decoration-red-600 underline-offset-4 transition-colors">automatic driving lessons</Link> help many learners feel more relaxed behind the wheel while building the skills needed to progress smoothly towards their driving test.
              </p>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col h-full group">
              <div className="mb-[30px] flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-red-600/20 shrink-0">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black uppercase italic mb-[20px] tracking-tight min-h-[3.5rem] flex items-center">Local Test Route Practice</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lessons include practice on the types of roads, junctions, and roundabouts learners often encounter during their driving test across Bradford and Leeds.
              </p>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col h-full group">
              <div className="mb-[30px] flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-red-600/20 shrink-0">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black uppercase italic mb-[20px] tracking-tight min-h-[3.5rem] flex items-center">Mock Test Preparation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <Link to="/mock-driving-tests" className="text-white hover:text-red-600 underline decoration-red-600 underline-offset-4 transition-colors">Mock driving tests</Link> recreate the real exam environment so learners feel confident, calm, and fully prepared on the day of their practical test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Directory Section */}
      <section id="areas-directory" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-black italic uppercase tracking-tighter mb-4">Find automatic lessons near you</h2>
            <p className="text-gray-600 font-medium mb-6 max-w-2xl mx-auto">We provide automatic driving lessons across Bradford and Leeds, helping learners practise in the areas where they are most likely to drive and take their test.</p>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Comprehensive coverage across West Yorkshire</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bradford Block */}
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
              <h3 className="text-2xl font-black uppercase italic mb-6 text-red-600 tracking-tight">Bradford Areas</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {bradfordAreas.map(area => (
                  <Link key={area.id} to={`/bradford/${area.id}`} className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors uppercase tracking-tight">
                    • {area.name}
                  </Link>
                ))}
              </div>
              <Link to="/bradford" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-black text-xs uppercase italic tracking-widest hover:bg-black transition-all">
                View all Bradford areas
              </Link>
            </div>

            {/* Leeds Block */}
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
              <h3 className="text-2xl font-black uppercase italic mb-6 text-red-600 tracking-tight">Leeds Areas</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {leedsAreas.map(area => (
                  <Link key={area.id} to={`/leeds/${area.id}`} className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors uppercase tracking-tight">
                    • {area.name}
                  </Link>
                ))}
              </div>
              <Link to="/leeds" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-black text-xs uppercase italic tracking-widest hover:bg-black transition-all">
                View all Leeds areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Recent Automatic Test Passes FAQs
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Expert Insights into Passing Your Test in Bradford & Leeds</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} idx={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentPassesPage;

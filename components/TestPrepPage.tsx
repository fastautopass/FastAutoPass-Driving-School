import React from 'react';
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import MockTestChecklist from './MockTestChecklist';
import Accordion from './Accordion';
import Schema from './Schema';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';
import { CONTACT_INFO } from '../constants';

const TestPrepPage: React.FC = () => {
  React.useEffect(() => {
    document.title = "DVSA Driving Test Preparation Bradford & Leeds | FastAutoPass";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Refine your driving skills for the DVSA practical test. Our specialist preparation in Bradford and Leeds targets common failure points to ensure you are test-ready.');
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "How is test preparation different from a standard driving lesson?",
      answer: "While standard lessons focus on fundamental skill acquisition, test preparation is a dedicated coaching phase. We move away from direct instruction and towards assessment, refining your existing skills to meet the precise DVSA marking criteria."
    },
    {
      question: "Is a test preparation session the same as a mock driving test?",
      answer: "They are complementary but different. A [Mock driving test](/mock-driving-tests) is a formal simulation where your instructor remains silent to mimic exam pressure. In contrast, test preparation is an active coaching session where we identify faults and explain exactly why an examiner would log them."
    },
    {
      question: "When should I book my test preparation sessions?",
      answer: "We usually suggest starting these focused sessions about 2 to 4 weeks before your big day. This gives us enough time to iron out any bad habits without you feeling rushed or overwhelmed. If you haven't booked your test yet, check out our [intensive driving courses](/intensive-driving-courses) for a faster route."
    },
    {
      question: "How many preparation sessions will I need?",
      answer: "It really depends on how you're doing, but most learners in [Bradford](/bradford) or [Leeds](/leeds) find that 2 to 4 hours of dedicated prep makes a world of difference. We'll give you an honest appraisal after your first session so you know exactly where you stand."
    },
    {
      question: "What actually happens during a test preparation session?",
      answer: "We'll focus on the specific areas you're worried about. We might head to the [driving test centres](/driving-test-centres) you've chosen to practice the local hotspots. We'll observe your driving and give you immediate, clear feedback on how to stay within the 'Pass' zone."
    },
    {
      question: "I'm really nervous about the exam. Can you help with that?",
      answer: "Absolutely. Nerves are the biggest reason for simple mistakes. Our instructors are experts at helping you build mental composure. By practicing the exact standards examiners look for, you'll feel much more in control when you finally sit in that seat for real."
    },
    {
      question: "Do we practice on the actual driving test routes?",
      answer: "Yes, we use our local knowledge of routes around Thornbury, Heaton, Steeton, Horsforth, and other local centres. Knowing where the tricky roundabouts or hidden speed limit changes are helps you stay calm and avoid unnecessary 'serious' faults."
    },
    {
      question: "I've failed my driving test before. Can you help me pass this time?",
      answer: "Definitely. We'll look at your previous 'fail sheet' and target those specific reasons. Often, it's just a small misunderstanding of a rule or a lack of observation at junctions. We'll turn those weaknesses into strengths before your next attempt."
    },
    {
      question: "What if I keep making the same serious fault over and over?",
      answer: "That's exactly what these sessions are for. We'll break down the fault, explain why it's happening, and practice a new technique until it becomes second nature. We won't let you go to your test until we're both confident that fault is gone for good."
    },
    {
      question: "Is test preparation different for automatic car learners?",
      answer: "The marking criteria are the same, but the focus shifts. In [automatic driving lessons](/automatic-driving-lessons), we spend more time on planning and awareness since you don't have to worry about gears. We ensure your junctions are perfect and your speed control is spot on."
    },
    {
      question: "What about manual learners? What's the focus there?",
      answer: "For [manual driving lessons](/manual-driving-lessons), we make sure your gear selection and clutch control are 'test-perfect.' Examiners look for smooth planning so you're not rushing gear changes at busy junctions. We'll polish those physical skills until they're effortless."
    },
    {
      question: "What do I need to bring on my driving test day?",
      answer: "You must bring your UK driving photocard licence. If you have an old-style paper licence, you'll also need your valid passport. Don't forget your theory test pass certificate too, just in case! If you're unsure, feel free to start [contacting us](/contact) with any questions."
    },
    {
      question: "How far in advance should I book my prep sessions?",
      answer: "As soon as you have your test date! Our diaries fill up fast, especially for peak times. By booking in advance, we can ensure we have the car and the instructor available for your test time. See our [recent passes](/recent-passes) to see how others have succeeded!"
    },
    {
      question: "Can I combine a mock test with test preparation?",
      answer: "We highly recommend it. Many pupils do a [mock driving test](/mock-driving-tests) first to see the 'reality' of the exam, and then use test prep sessions to fix the issues we found. This 'test-and-fix' approach is one of the most effective ways to ensure a first-time pass."
    }
  ];

  return (
    <div className="bg-white animate-fadeIn test-prep-page">
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "DVSA Driving Test Preparation",
          "Expert driving test preparation in Bradford and Leeds. Structured coaching to meet DVSA standards and build test-day confidence.",
          "https://fastautopass.co.uk/test-preparation"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Test Preparation", item: "https://fastautopass.co.uk/test-preparation" }
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
              "text": faq.answer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
            }
          }))
        }} 
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 lg:py-32 border-b-8 border-red-600 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-left">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-none">
              DVSA Driving <span className="text-red-600">Test Preparation</span> Bradford & Leeds
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl font-medium mb-10 italic leading-relaxed">
              Structured lessons to help you meet the DVSA test standard and build professional test day confidence across West Yorkshire.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link to="/contact" className="bg-red-600 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-red-700 transition-all shadow-xl uppercase italic tracking-widest text-center w-full sm:w-auto">
                Enquire About Test Preparation
              </Link>
              <a href={`tel:${CONTACT_INFO.phone}`} className="bg-white text-gray-900 px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-xl uppercase italic tracking-widest text-center w-full sm:w-auto">
                Call Now
              </a>
            </div>
            <div className="mt-12 flex items-center justify-start">
              <TrustBadges dark minimal />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Professional <span className="text-red-600">Test Day</span> Readiness
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed italic">
                <p>
                  Many learners don’t fail because they can’t drive — they fail because they’re not prepared for the pressure of test day. Our structured test preparation sessions focus on meeting the strict DVSA standards.
                </p>
                <p>
                  This service is designed for learners who are approaching their test date and need to refine their skills. It is different from a standard lesson as we focus entirely on the assessment criteria used by examiners in <Link to="/bradford" className="font-bold text-red-600 underline decoration-2 underline-offset-4">Bradford</Link> and <Link to="/leeds" className="font-bold text-red-600 underline decoration-2 underline-offset-4">Leeds</Link>.
                </p>
                <p>
                  While a <Link to="/mock-driving-tests" className="font-bold text-red-600 underline decoration-2 underline-offset-4">Mock driving test</Link> provides a full simulation, these preparation sessions are about coaching and refinement, ensuring you have the technical accuracy and mental composure to pass.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "DVSA Standards", desc: "We align your driving with the exact criteria used by examiners." },
                { title: "Fault Refinement", desc: "Identifying and removing recurring driving faults before they cost you a pass." },
                { title: "Route Familiarity", desc: "Gaining confidence on the specific local routes used by test centres." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                  <h3 className="text-xl font-black uppercase italic mb-3 text-red-600 tracking-tight">{item.title}</h3>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-tight leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-6xl font-black mb-6 italic uppercase tracking-tighter leading-tight">
              Understanding the <span className="text-red-600">DVSA Standard</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium italic">
              Our preparation lessons help you understand exactly what the examiner is looking for on test day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Fault Types",
                desc: "We explain the difference between minor (driving), serious, and dangerous faults, and how to avoid them.",
                icon: "⚖️"
              },
              {
                title: "Marking Criteria",
                desc: "Learn how examiners use the DL25 form to assess your safety, control, and awareness.",
                icon: "📝"
              },
              {
                title: "Common Fails",
                desc: "We target the most common reasons for failure in West Yorkshire, such as junction observation.",
                icon: "⚠️"
              },
              {
                title: "Local Routes",
                desc: "Familiarity with local test centre hotspots in Bradford and Leeds reduces avoidable mistakes.",
                icon: "📍"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-black uppercase italic mb-4 text-red-600 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 font-medium italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Areas Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black italic uppercase tracking-tighter mb-4 text-gray-900">DVSA Driving Test Assessment Areas</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Key areas we help you prepare for before test day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto text-left">
            {[
              { title: "Vehicle Control", desc: "Master precise clutch control and smooth acceleration. We ensure you can manage the car confidently in all traffic conditions." },
              { title: "Observation & Awareness", desc: "Develop 360-degree awareness. We coach you on effective mirror use and identifying hazards before they require sudden action." },
              { title: "Junctions & Roundabouts", desc: "Navigate complex Bradford roundabouts and busy Leeds junctions with correct lane discipline and safe gap judgement." },
              { title: "Manoeuvres", desc: "Perfect your parallel parking, bay parking, and pulling up on the right with constant observation and accuracy." },
              { title: "Decision Making", desc: "Learn to make safe independent choices. We help you react correctly to changing road signs and traffic signals under pressure." },
              { title: "Road Positioning", desc: "Maintain the ideal position on the road. We focus on lane discipline on dual carriageways and safe clearance from parked cars." }
            ].map((block, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-black uppercase italic mb-3 text-red-600 tracking-tight">{block.title}</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed italic">{block.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] italic">Interactive Readiness Checklist</p>
          </div>
          <MockTestChecklist showCTA={false} />
        </div>
      </section>

      {/* Experience a Real Test Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-6xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
            Experience a <span className="text-red-600">Real Test</span> Before the Real One
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed italic max-w-2xl mx-auto">
            Our mock driving tests simulate the exact conditions of a DVSA exam, helping you identify and fix potential faults under pressure. It's the ultimate way to build resilience and ensure you're truly ready for test day success in West Yorkshire.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900 leading-tight">
              Test Preparation FAQs
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Common Questions from Learners in Bradford & Leeds</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <Accordion key={i} title={faq.question}>
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestPrepPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import ReviewsSlider from './ReviewsSlider';
import RecentPasses from './RecentPasses';
import Schema from './Schema';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const PassPlusPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

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

  const faqs = [
    {
      question: "What does the Pass Plus course actually include for West Yorkshire drivers?",
      answer: "The Pass Plus course is a minimum of six hours of advanced training designed to bridge the gap between passing your test and real-world driving. It covers six specific modules: town driving, all-weather driving, out-of-town roads and rural lanes, night driving, dual carriageways, and motorways. In [Bradford](/bradford) and [Leeds](/leeds), we tailor these modules to the local environment. For example, the town driving module often involves navigating the Leeds city centre loops, while the rural module takes you into the challenging Pennine lanes. It's not a second test, but a coaching-led programme to build a higher level of maturity and technical skill."
    },
    {
      question: "Does Pass Plus really reduce insurance premiums in Bradford and Leeds?",
      answer: "The honest answer is that it depends on your insurer. While many major companies used to offer a flat discount, many now use it as a 'rating factor'. This positions you as a lower-risk driver, which is vital in high-premium areas like [Bradford](/bradford) and [Leeds](/leeds). Even if the immediate saving is small, the skills you learn—like managing the M62 in heavy rain—could save you from an 'at-fault' accident. We recommend checking with your broker or exploring our [motorway lessons](/motorway-lessons) for additional confidence."
    },
    {
      question: "How does Pass Plus help build post-test confidence on busy roads?",
      answer: "Many new drivers in West Yorkshire feel 'test-ready' but not 'road-ready'. Pass Plus addresses this by taking you into scenarios you likely avoided during your lessons. We focus on 'proactive' driving—learning to anticipate hazards. By navigating the complex intersections of [Leeds](/leeds) and the busy urban roundabouts of [Bradford](/bradford) with a professional ADI, you build mental resilience. This is a natural progression from our [automatic driving lessons](/automatic-driving-lessons) or [intensive driving courses](/intensive-driving-courses)."
    },
    {
      question: "What is the motorway element of the Pass Plus course like?",
      answer: "The motorway module is often the most anticipated part of the course. We'll take you onto the M62, M621 or M1. We focus on high-speed planning, lane discipline, and the art of the 'merge'. In [Leeds](/leeds) and [Bradford](/bradford), where motorway traffic is intense, this module is vital. For those who want more focused training, we also offer dedicated [motorway lessons in Bradford & Leeds](/motorway-lessons)."
    },
    {
      question: "Is there a test at the end of the Pass Plus course?",
      answer: "No, there is no formal test at the end of Pass Plus. Instead, your instructor will continually assess your performance throughout the six hours of training. Once you've successfully completed the course, you receive your official Pass Plus certificate. If you are still nervous about testing environments, you might find our [mock driving tests](/mock-driving-tests) helpful to build general confidence."
    },
    {
      question: "Can I take Pass Plus if I've been driving for a few years?",
      answer: "While Pass Plus is primarily for newly qualified drivers, anyone can take it. If you've been driving for a few years but still feel nervous about motorways or night driving in [Bradford](/bradford) and [Leeds](/leeds), the course is an excellent way to refresh your skills. You might also consider our [refresher driving lessons](/refresher-lessons) if you need a more tailored approach."
    },
    {
      question: "How is the 6-hour Pass Plus course structured in Leeds?",
      answer: "We usually recommend splitting the six hours into two 3-hour blocks. In [Leeds](/leeds) and [Bradford](/bradford), we often time one of the sessions for late afternoon or early evening to cover 'Night Driving' effectively. We coordinate all modules to ensure you get the most realistic experience across the West Yorkshire road network, similar to the high-standard training in our [intensive driving courses](/intensive-driving-courses)."
    },
    {
      question: "Which motorways will we practice on during my Pass Plus training?",
      answer: "Yes, we almost always use the M62 and M606 for our motorway training in [Bradford](/bradford) and [Leeds](/leeds). These are some of the busiest motorways in the country. We also focus on 'smart' motorway sections, teaching you how to read variable speed limits. This is a key part of our [motorway lessons](/motorway-lessons) syllabus."
    },
    {
      question: "How does the 'all-weather' driving module work if it's a sunny day?",
      answer: "We can still teach the principles of all-weather driving on a sunny day, discussing aquaplaning and stopping distances. If the weather does turn—which it often does in [Bradford](/bradford)—we'll use it as a real-world training opportunity. This proactive hazard awareness is also a major focus in our [DVSA test preparation](/test-preparation)."
    },
    {
      question: "What are the specific challenges of rural driving around Bradford?",
      answer: "Rural roads around [Bradford](/bradford) and the Pennines are statistically the most dangerous for new drivers. During the rural module, we focus on 'limit point' steering and speed management. Mastering these challenging lanes is a great way to build on the skills learned during [automatic driving lessons in Bradford & Leeds](/automatic-driving-lessons)."
    },
    {
      question: "Why is 'night driving' a vital part of the Pass Plus syllabus?",
      answer: "Driving at night in a busy city like [Leeds](/leeds) is a completely different world. We'll practice navigating the Leeds city centre loops and the busy urban roads of [Bradford](/bradford) after dark. We focus on your use of lights and following distances, which are advanced skills often touched upon in our [intensive driving courses](/intensive-driving-courses)."
    },
    {
      question: "How do I get my Pass Plus certificate after completing the training?",
      answer: "Once you've completed all six modules, your FastAutoPass instructor will give you a signed training report form to send to the DVSA. They will then send you your official Pass Plus certificate. This certificate is what you'll use to claim insurance discounts. We ensure all our students are fully prepared for this process, just as we do with [DVSA test preparation](/test-preparation)."
    },
    {
      question: "Can I use my own car for the Pass Plus course in West Yorkshire?",
      answer: "Absolutely, and we actually encourage it. If you've already bought your first car, it makes sense to learn its handling on the M62 or in the Pennine lanes. Whether you drive a manual or preferred [automatic driving lessons](/automatic-driving-lessons) car, we can accommodate you. Your car must be roadworthy and fully insured for the instructor."
    },
    {
      question: "Why is FastAutoPass the best choice for advanced driving in Leeds?",
      answer: "We are local experts in West Yorkshire road safety. Our Pass Plus instructors are specifically trained in advanced coaching. We know the specific challenges of the [Bradford](/bradford) and [Leeds](/leeds) road networks. From [mock driving tests](/mock-driving-tests) to [motorway lessons](/motorway-lessons), we offer a complete post-test journey."
    }
  ];


  return (
    <div className="bg-white animate-fadeIn font-sans pass-plus-page">
      <SEO 
        title="Pass Plus Course Bradford & Leeds | Insurance Savings | FastAutoPass"
        description="Bridge the gap between passing your test and real-world driving. Our Pass Plus course in Bradford and Leeds builds safety, maturity, and helps reduce insurance costs."
        canonical="https://fastautopass.co.uk/pass-plus"
      />
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "Pass Plus Course",
          "Advanced driving qualification for new drivers. Reduce insurance costs and improve your motorway and night driving skills.",
          "https://fastautopass.co.uk/pass-plus"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Pass Plus", item: "https://fastautopass.co.uk/pass-plus" }
        ])} 
      />
      <Schema type="FAQPage" data={{
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
          }
        }))
      }} />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-32 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-7/12 text-center lg:text-left">
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic drop-shadow-2xl">
                Pass Plus <br/><span className="text-red-500">Course</span> in <br/>Bradford & Leeds
              </h1>
              <p className="text-xl lg:text-2xl font-bold mb-10 max-w-3xl text-gray-200 italic">
                You've passed the test, now learn to survive the road. Our Pass Plus programme builds the maturity and technical skill needed for West Yorkshire's most challenging environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mt-10">
                <a href="#enquiry" className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-xl text-center hover:bg-red-700 shadow-2xl transition-all uppercase italic tracking-widest">
                  Send Enquiry
                </a>
                <button 
                  onClick={() => setShowCallPopup(true)}
                  className="bg-white text-gray-900 px-10 py-5 rounded-full font-black text-xl text-center hover:bg-gray-100 shadow-2xl transition-all uppercase italic tracking-widest"
                >
                  Call Now
                </button>
                <div className="flex items-center justify-center">
                  <TrustBadges dark minimal />
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 w-full" id="enquiry">
              <BookingForm areaName="Bradford & Leeds" />
            </div>
          </div>
        </div>
      </section>

      {/* REAL-WORLD PROGRAMME BREAKDOWN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              What We Actually Focus On
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
              Pass Plus isn't a second driving test. It's a coaching-led exploration of the roads that the standard learner syllabus barely touches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">High-Speed Planning (Motorways)</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Most learners pass without ever touching a motorway. We'll take you onto the <strong>M62</strong> and <strong>M606</strong>. We focus on 'long-range scanning'—identifying lane closures and slow-moving traffic half a mile ahead, rather than just reacting to the car in front.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">The 'Invisible' Hazards (Rural Roads)</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Rural roads around Bradford are statistically the most dangerous. We'll navigate the narrow lanes and blind bends of the <strong>Pennines</strong>. We focus on speed management—knowing that the 'national speed limit' isn't a target, but a maximum that is often far too fast for the conditions.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Night Driving & Glare Management</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Driving in <strong>Leeds city centre</strong> at night is a completely different world. We'll practice managing the glare from oncoming LED headlights, judging distances in the dark, and staying focused when the visual cues you rely on during the day are gone.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">All-Weather Survival</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  We don't wait for a sunny day. If it's raining or foggy, that's the best time to learn. We'll discuss aquaplaning, stopping distances on greasy West Yorkshire roads, and how to keep your vision clear when the weather turns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FASTAUTOPASS IS DIFFERENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              Why We're Different
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We don't treat Pass Plus as a 'victory lap'. It's a serious piece of advanced training. We refuse to just 'drive around' for 6 hours. Every module is structured to push your boundaries, much like our <Link to="/intensive-driving-courses" className="text-red-600 font-bold hover:underline">intensive driving courses</Link>.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We value maturity over speed. Our instructors are trained to coach you, not just instruct you. We want you to develop the internal 'risk-assessment' skills that keep you safe, which is why we often recommend <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving tests</Link> to gauge awareness.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We use real-world pressure. We'll take you into the busiest parts of <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link> and <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link> at the most challenging times. We want you to feel the pressure now, while you have a professional by your side.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Our approach is focused on long-term survival. We aren't just ticking boxes for a certificate; we're building the foundation for a lifetime of safe, confident driving, often starting with <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic driving lessons in Bradford & Leeds</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSlider />
      <RecentPasses areaName="Bradford & Leeds" />

      {/* LOCAL EXPERIENCE SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Real-World Experience Across Bradford & Leeds
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
                <p>
                  You've mastered the test routes; now it's time to master the roads you'll actually use. Our Pass Plus course is designed around the specific geography of West Yorkshire, often following the same high standards as our <Link to="/intensive-driving-courses" className="text-red-600 font-bold hover:underline">intensive driving courses in Bradford & Leeds</Link>.
                </p>
                <p>
                  We'll spend time on the <strong>M621</strong> and the <strong>Leeds inner ring road</strong>, navigating the complex lane changes that confuse even experienced drivers. We'll head out towards the <strong>Pennine rural lanes</strong> on the outskirts of <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link> to practice high-speed hazard perception.
                </p>
                <p>
                  We'll even take you through <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds city centre</Link> during the evening rush hour to experience the reality of multi-lane urban driving under pressure. This is about building a mental map of the area's most challenging spots, a skill we also emphasize in our <Link to="/motorway-lessons" className="text-red-600 font-bold hover:underline">motorway lessons</Link>.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-6">Advanced Local Skills</h3>
              <ul className="space-y-4">
                {[
                  "M62 & M606 High-Speed Integration",
                  "Leeds Inner Ring Road Navigation",
                  "Pennine Rural Road Hazard Management",
                  "Bradford City Centre Night Driving",
                  "All-Weather Pennine Condition Training",
                  "Advanced Multi-Lane Roundabout Mastery"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic text-gray-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVICE IS REALLY FOR */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <h2 className="text-3xl lg:text-5xl font-black mb-16 italic uppercase tracking-tighter text-gray-900 text-center">
            Who This Is Really For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "The Newly Qualified Driver", 
                desc: "You've just passed and you're terrified of the M62. You want to build your experience safely before you start driving solo. You need a bridge between the test and the reality of West Yorkshire roads." 
              },
              { 
                title: "The Insurance-Conscious Driver", 
                desc: "You're looking at a £2,000 insurance quote and you need to bring it down. You want to demonstrate to insurers that you're a lower-risk driver by completing a recognised advanced qualification." 
              },
              { 
                title: "The Safety-First Parent", 
                desc: "Your child has just passed their test and you want them to have the best possible start. You want the peace of mind that comes from knowing they've had professional motorway and night driving training." 
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-black mb-4 uppercase italic text-red-600">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINK-WORTHY AUTHORITY SECTION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
            Does Pass Plus Really Reduce Insurance?
          </h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
            <p>
              It's the most common reason people book the course, but the reality is more nuanced than a simple 'yes'. Ten years ago, almost every insurer offered a 10-15% discount for Pass Plus. Today, the market is more complex.
            </p>
            <p>
              <strong>The Reality:</strong> Many insurers now use 'telematics' (black boxes) to judge risk. However, for those who don't, Pass Plus is still a significant 'rating factor'. It tells the insurer that you aren't just a standard driver; you're someone who has invested in advanced training. This can move you into a different risk bracket entirely.
            </p>
            <p>
              <strong>The Hidden Saving:</strong> The real saving isn't always on the premium itself. It's in the avoidance of accidents. A single 'at-fault' accident in your first year will wipe out your No Claims Bonus and could double your premium for the next five years. If Pass Plus prevents just one minor bump on a Leeds roundabout, it has paid for itself ten times over.
            </p>
            <p>
              <strong>Our Advice:</strong> Check with your specific insurer first. But even if they don't offer a direct discount, consider the long-term value. Being a safer, more confident driver in a high-risk area like Bradford is an investment in your future, not just a way to save a few pounds today.
            </p>
          </div>
        </div>
      </section>

      {/* GEO-OPTIMISED AUTHORITY BLOCKS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
                Pass Plus Course in Bradford
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Bradford's mix of high-density urban traffic and steep Pennine roads makes it the perfect training ground for <strong>Pass Plus Bradford</strong>. We focus on the areas where new drivers often struggle, such as the multi-lane roundabouts at <strong>Staygate</strong> and the narrow, winding lanes around <strong>Thornton</strong>.
                </p>
                <p>
                  Our <strong>advanced driving course Bradford</strong> is led by instructors who understand the local pass/fail patterns. We use this knowledge to build your maturity and technical skill, ensuring you're ready for the reality of driving solo in West Yorkshire. If you're looking for a <strong>Pass Plus instructor Bradford</strong>, we provide the professional, expert-led training you need.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
                Pass Plus Course in Leeds
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Leeds is a fast-paced city with some of the most complex motorway systems in the North. Our <strong>Pass Plus Leeds</strong> course focuses heavily on the <strong>M621</strong>, the <strong>A64</strong>, and the <strong>Leeds inner ring road</strong>. We help you master high-speed lane discipline and proactive hazard perception in a busy urban environment.
                </p>
                <p>
                  A <strong>reduce insurance driving course Leeds</strong> with FastAutoPass is more than just a certificate. It's an immersive experience that builds genuine confidence. Our <strong>Pass Plus instructor Leeds</strong> will guide you through the city's most challenging junctions, ensuring you're a safe, competent driver for life in the Leeds area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EXPLORE MORE DRIVING SERVICES */}
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
            <Link to="/motorway-lessons" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Motorway Lessons
            </Link>
            <Link to="/test-preparation" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              DVSA Test Preparation
            </Link>
            <Link to="/mock-driving-tests" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Mock Driving Tests
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Common Questions
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Real Answers for Advanced Drivers</p>
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
                  <div className="p-8 bg-gray-50 border-t border-gray-100 animate-slideDown">
                    <div className="text-gray-600 font-medium leading-relaxed">
                      {renderMarkdownLinks(faq.answer)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Popup */}
      {showCallPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-slideUp">
            <div className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter text-gray-900">Call Booking Team</h3>
              <p className="text-gray-500 font-medium mb-8 italic">Discuss your Pass Plus course requirements.</p>
              
              <div className="space-y-4">
                <a href={`tel:${CONTACT_INFO.phone}`} className="block w-full bg-red-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl uppercase italic tracking-widest">
                  {CONTACT_INFO.phone}
                </a>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-green-700 transition-all shadow-xl uppercase italic tracking-widest">
                  WhatsApp Us
                </a>
                <button onClick={() => setShowCallPopup(false)} className="block w-full py-4 text-gray-400 font-black uppercase italic tracking-widest text-xs hover:text-gray-600 transition-colors">
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassPlusPage;

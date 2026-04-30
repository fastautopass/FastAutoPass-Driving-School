import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import ReviewsSlider from './ReviewsSlider';
import RecentPasses from './RecentPasses';
import Schema from './Schema';
import { getLocalBusinessSchema, getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const AutomaticLessonsPage: React.FC = () => {
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

  const faqs = [
    {
      question: "Are automatic driving lessons easier to pass?",
      answer: "Many learners find automatic driving lessons significantly easier because they eliminate the need for clutch control and gear changes. This reduces the cognitive load, allowing you to focus more on road positioning, observation, and hazard perception. While the DVSA test criteria remain strict, the simplified vehicle control often leads to a more confident performance on test day."
    },
    {
      question: "Is it quicker to pass your test in an automatic car?",
      answer: "Statistically, many students reach the required test standard faster in an automatic vehicle. By removing the mechanical complexity of manual gearboxes, learners often require fewer hours of tuition to achieve the same level of competence. If you're in a hurry to get on the road, you might consider one of our [Intensive Driving Courses](/intensive-driving-courses)."
    },
    {
      question: "What areas do you cover?",
      answer: "FastAutoPass provides comprehensive coverage across the entire Bradford and Leeds region. We serve the city centre, Horsforth, Headingley, Pudsey, and surrounding West Yorkshire residential hubs. You can find more details on our dedicated [Bradford](/bradford) and [Leeds](/leeds) pages."
    },
    {
      question: "How much do automatic driving lessons cost?",
      answer: "Lesson prices vary depending on your location and experience level. For the most up-to-date lesson information, please contact our booking team directly. While we are not the cheapest driving school in the region, our structured, results-driven approach often means you require fewer lessons overall to pass your test."
    },
    {
      question: "How do automatic lessons differ from manual training?",
      answer: "Automatic lessons remove the requirement for clutch control and gear synchronization. This allows the training to focus immediately on road positioning, observation, and hazard perception. Most students find they reach the required DVSA test standard significantly faster than those learning in manual vehicles."
    },
    {
      question: "Are your instructors qualified for automatic tuition?",
      answer: "Yes. Every instructor at FastAutoPass is a fully qualified, DVSA-approved driving instructor (ADI). We do not use trainee instructors (PDIs). Our team undergoes regular standards checks to ensure our coaching methods align with the latest DVSA requirements for automatic vehicle training."
    },
    {
      question: "Which test centres do you cover in West Yorkshire?",
      answer: "We cover all local test routes throughout Bradford and Leeds, ensuring our students have total familiarity with the major urban routes and surrounding areas frequently used by examiners across West Yorkshire. You can see the full list on our [driving test centres](/driving-test-centres) hub."
    },
    {
      question: "Can I switch to automatic if I have already started manual lessons?",
      answer: "Many of our students switch to automatic after finding manual gear changes a barrier to progress. The transition is usually seamless, and most learners find their confidence improves instantly. If you've had a long break from driving, our [refresher training](/refresher-lessons) can also help you get back on the road."
    },
    {
      question: "How many hours of tuition are typically required?",
      answer: "While the national average is approximately 45 hours, automatic learners often require fewer sessions. We provide a structured progress record to track your development across all DVSA syllabus areas, ensuring you only pay for the training you actually need to pass your test."
    },
    {
      question: "Do you offer intensive automatic courses in Bradford and Leeds?",
      answer: "Yes. We provide structured [intensive driving courses](/intensive-driving-courses) ranging from 1 to 4 weeks. These are designed for learners who wish to consolidate their training and reach test standard in a shorter timeframe, subject to instructor availability."
    },
    {
      question: "What happens if I pass my test in an automatic car?",
      answer: "Upon passing, your UK driving license will be restricted to automatic vehicles. Given the rapid shift towards electric and hybrid vehicles in the UK—most of which are automatic—this is increasingly seen as a future-proof choice for modern drivers. For extra confidence after passing, we also offer specialized [Motorway Lessons](/motorway-lessons)."
    },
    {
      question: "Are your training vehicles dual-controlled?",
      answer: "Every vehicle in our fleet is a modern, late-model automatic equipped with high-quality dual controls. This ensures maximum safety during your lessons and allows our instructors to intervene if necessary while you build your confidence on busy West Yorkshire roads."
    },
    {
      question: "Do you provide mock driving tests?",
      answer: "Yes. We believe mock tests are essential for success. We conduct realistic assessments on actual Bradford and Leeds test routes, marked to the same strict criteria used by DVSA examiners. You can book a session on our [Mock Driving Tests](/mock-driving-tests) page."
    },
    {
      question: "Can I book weekend or evening lessons?",
      answer: "We offer flexible scheduling to accommodate work and study commitments. While weekend and evening slots are in high demand, we strive to provide a consistent weekly schedule that fits your lifestyle across Bradford and Leeds."
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans automatic-lessons-page">
      <SEO 
        title="Automatic Driving Lessons Bradford & Leeds | FastAutoPass"
        description="Expert automatic driving lessons in Bradford and Leeds with DVSA approved instructors. High first-time pass rates, modern dual-controlled cars, and local test route expertise."
        canonical="https://fastautopass.co.uk/automatic-driving-lessons"
      />
      <Schema type="LocalBusiness" data={getLocalBusinessSchema()} />
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "Automatic Driving Lessons",
          "Expert automatic driving lessons in Bradford and Leeds with DVSA approved instructors. High first-time pass rates and local test route expertise.",
          "https://fastautopass.co.uk/automatic-driving-lessons"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Automatic Driving Lessons", item: "https://fastautopass.co.uk/automatic-driving-lessons" }
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

      {/* Breadcrumbs UI */}
      <div className="bg-gray-900 border-b border-gray-800 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex text-xs font-black uppercase italic tracking-widest text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-red-600">/</span>
            <span className="text-white">Automatic Driving Lessons</span>
          </nav>
        </div>
      </div>

      {/* SECTION 1: HERO STRUCTURE FIX */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-32 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-7/12 text-center lg:text-left">
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic drop-shadow-2xl">
                Automatic Driving <br/><span className="text-red-500">Lessons</span> in <br/>Bradford & Leeds
              </h1>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mt-10">
                <a href="#availability" className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-xl text-center hover:bg-red-700 shadow-2xl transition-all uppercase italic tracking-widest">
                  Send Enquiry
                </a>
                <button 
                  onClick={() => setShowCallPopup(true)}
                  className="bg-white text-gray-900 px-10 py-5 rounded-full font-black text-xl text-center hover:bg-gray-100 shadow-2xl transition-all uppercase italic tracking-widest"
                >
                  Call Now
                </button>
                <TrustBadges dark minimal />
              </div>
            </div>
            <div className="lg:w-5/12 w-full" id="availability">
              <BookingForm areaName="Bradford & Leeds" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STRUCTURED INTRODUCTION */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <p className="text-lg lg:text-xl text-gray-500 font-bold uppercase tracking-widest italic mb-12">
              Structured DVSA-Aligned Training Across West Yorkshire
            </p>
            <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6 mx-auto">
              <p>
                FastAutoPass is a leading driving school providing professional <Link to="/bradford" className="text-red-600 font-bold hover:underline">automatic driving lessons in Bradford</Link> and <Link to="/leeds" className="text-red-600 font-bold hover:underline">automatic driving lessons in Leeds</Link> for learners across West Yorkshire. Our instruction is delivered by DVSA-approved instructors who specialise in modern, structured coaching methods.
              </p>
              <p>
                Whether you require <Link to="/intensive-driving-courses" className="text-red-600 font-bold hover:underline">intensive automatic driving courses</Link> or <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving test preparation</Link>, we focus on developing safe, independent driving skills tailored to the specific challenges of local test routes. By removing the mechanical complexity of manual gears, we enable our students to achieve test standard with greater efficiency and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT LEARNERS SAY */}
      <ReviewsSlider />

      {/* SECTION 4: RECENT PASSES IN BRADFORD & LEEDS */}
      <RecentPasses areaName="Bradford & Leeds" />

      {/* SECTION 5: WHY LEARNERS CHOOSE FASTAUTOPASS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              Why Learners Choose FastAutoPass for Automatic Driving Lessons
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
              As the leading automatic driving school in Bradford and Leeds, we pride ourselves on delivering a premium, results-driven service that prioritises safety and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "DVSA-Approved Instructors", desc: "Every automatic driving instructor at FastAutoPass is fully qualified and DVSA-approved, ensuring you receive the highest standard of tuition." },
              { title: "Structured DVSA Syllabus", desc: "Our training is meticulously aligned with DVSA test standards, covering everything from basic control to advanced hazard perception." },
              { title: "Local Test Route Expertise", desc: "We possess in-depth knowledge of Bradford and Leeds test routes, preparing you for the specific challenges examiners look for." },
              { title: "Modern Dual-Controlled Cars", desc: "Learn in comfort and safety with our fleet of modern, late-model automatic vehicles equipped with high-quality dual controls." },
              { title: "Real Mock Test Preparation", desc: "We conduct realistic mock driving tests to ensure you're mentally and technically prepared for the big day." },
              { title: "First-Time Pass Focus", desc: "Our structured approach is designed to maximise your chances of a first-time pass, saving you time and money in the long run." },
              { title: "Flexible Scheduling", desc: "We offer flexible weekday, evening, and weekend lessons to accommodate your work or study commitments across West Yorkshire." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-black mb-4 uppercase italic text-gray-900">{item.title}</h3>
                <div className="text-gray-600 font-medium leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR STRUCTURED LEARNING PROGRAMME */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              Our Structured Learning Programme
            </h2>
            <div className="h-2 w-24 bg-red-600 mb-8"></div>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Our curriculum is meticulously mapped to the DVSA national standard for driving. We ensure every student masters the core competencies required to pass the practical driving test and remain a safe driver for life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                title: "Vehicle Control Mastery", 
                desc: "Developing precise control over acceleration, braking, and steering. We focus on smooth execution and understanding the technical nuances of automatic transmissions." 
              },
              { 
                title: "Hazard Perception Training", 
                desc: "Advanced observation techniques to identify potential and developing hazards. This training is critical for meeting the high standards of the DVSA marking criteria." 
              },
              { 
                title: "Independent Driving Practice", 
                desc: "Building the ability to navigate complex road networks using sat-nav and road signs. This prepares students for the 20-minute independent driving section of the test." 
              },
              { 
                title: "Local Test Route Preparation", 
                desc: "Familiarisation with the specific challenges of Bradford and Leeds test routes, including high-speed dual carriageways and intricate urban junctions." 
              },
              { 
                title: "Show Me Tell Me Questions", 
                desc: "Comprehensive coaching on vehicle safety and maintenance questions. We ensure you can confidently demonstrate your knowledge to the examiner." 
              },
              { 
                title: "Mock Driving Assessments", 
                desc: "Realistic test simulations conducted under exam conditions. This identifies areas for refinement and builds the mental resilience needed for the actual test." 
              }
            ].map((feature, i) => (
              <div key={i} className="group">
                <h3 className="text-xl font-black mb-4 uppercase italic text-gray-900 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed border-l-4 border-gray-100 pl-6 group-hover:border-red-600 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: LOCAL TEST CENTRE EXPERTISE (TEXT-LED) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-12 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Local Test Route Knowledge Across Bradford & Leeds
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
                <p>
                  Success on test day often depends on your familiarity with local road conditions. Our instructors possess in-depth knowledge of the routes used throughout Bradford and Leeds, ensuring you are prepared for any scenario.
                </p>
                <p>
                  We provide targeted training on the specific challenges found in West Yorkshire, practicing on local test routes across the region to ensure total confidence.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-6">Expertise Highlights</h3>
              <ul className="grid grid-cols-1 gap-4 mb-10">
                {[
                  "Complex Bradford urban routes",
                  "Leeds city centre junctions",
                  "High-speed dual carriageways (A650, A647)",
                  "Large multi-lane roundabouts",
                  "Steep residential hill starts",
                  "Busy pedestrian-heavy shopping areas"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic text-gray-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-gray-100">
                <h4 className="text-sm font-black uppercase italic text-gray-900 mb-4">How This Benefits You on Test Day</h4>
                <ul className="space-y-2">
                  {[
                    "Reduced surprises on test day",
                    "Familiarity with high-risk junctions",
                    "Improved confidence under pressure",
                    "Stronger route anticipation"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs font-medium text-gray-500">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHO THIS SERVICE IS DESIGNED FOR */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <h2 className="text-3xl lg:text-5xl font-black mb-16 italic uppercase tracking-tighter text-gray-900 text-center">
            Who This Service Is Designed For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Complete Beginners", desc: "For those starting their driving journey who want the most efficient path to securing a full UK license. We specialize in first-time pass automatic training.", link: "/how-many-driving-lessons-do-i-need" },
              { title: "Manual-to-Automatic Switchers", desc: "Ideal for learners who find manual gear coordination a barrier to their progress and confidence. Switch for a smoother experience and faster results.", link: "/automatic-vs-manual-driving-lessons" },
              { title: "Nervous Drivers", desc: "A simplified driving experience that reduces cognitive load, allowing for a calmer and more focused learning environment.", link: "/nervous-driver-lessons" },
              { title: "Learners Preparing for Test", desc: "Structured coaching for those approaching their test date who need to refine their skills on local routes with expert mock assessments.", link: "/mock-driving-tests" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                <h3 className="text-lg font-black mb-4 uppercase italic text-red-600">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm flex-grow mb-4">{item.desc}</p>
                <Link to={item.link} className="text-xs font-black uppercase italic tracking-widest text-gray-900 hover:text-red-600 transition-colors">Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: EXPLORE MORE DRIVING SERVICES */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Explore More Driving Services
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">You may also be interested in these related services</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/intensive-driving-courses" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Intensive Driving Courses
            </Link>
            <Link to="/mock-driving-tests" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Mock Driving Tests
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

      {/* SECTION 10: FAQ (Accordion Style) */}
      <section className="pt-16 pb-4 md:pb-6 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Professional Guidance on Automatic Tuition</p>
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

      {/* FIND DRIVING LESSONS NEAR YOU */}
      <section className="pt-4 md:pt-6 pb-10 bg-white border-gray-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-extrabold mb-2 italic tracking-tighter text-gray-900">
              Find Driving Lessons Near You
            </h2>
            <p className="text-gray-500 font-medium italic text-sm">
              We cover Bradford, Leeds and surrounding areas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/bradford" className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase italic tracking-widest hover:bg-red-600 transition-all shadow-sm active:scale-95">
              Bradford
            </Link>
            <Link to="/leeds" className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase italic tracking-widest hover:bg-red-600 transition-all shadow-sm active:scale-95">
              Leeds
            </Link>
            <Link to="/contact" className="bg-red-600 text-white px-8 py-2.5 rounded-full font-black text-[10px] uppercase italic tracking-widest hover:bg-red-700 transition-all shadow-md active:scale-95">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Call Booking Team Popup */}
      {showCallPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-slideUp">
            <div className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter text-gray-900">Call Booking Team</h3>
              <p className="text-gray-500 font-medium mb-8 italic">Our team is available to discuss your automatic lessons.</p>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="block w-full bg-red-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-100 uppercase italic tracking-widest"
                >
                  {CONTACT_INFO.phone}
                </a>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-green-700 transition-all shadow-xl shadow-green-100 uppercase italic tracking-widest"
                >
                  WhatsApp Us
                </a>
                <button 
                  onClick={() => setShowCallPopup(false)}
                  className="block w-full py-4 text-gray-400 font-black uppercase italic tracking-widest text-xs hover:text-gray-600 transition-colors"
                >
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

export default AutomaticLessonsPage;

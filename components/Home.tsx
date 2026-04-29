import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TrustBadges from './TrustBadges';
import ReviewsSlider from './ReviewsSlider';
import HomeTrustSection from './HomeTrustSection';
import BookingForm from './BookingForm';
import MockTestChecklist from './MockTestChecklist';
import RecentPasses from './RecentPasses';
import Schema from './Schema';
import { getLocalBusinessSchema, getOrganizationSchema, getWebSiteSchema } from '../lib/schemaLibrary';
import { CONTACT_INFO } from '../constants';
import { processFAQContent } from '../faqUtils';

import ReactMarkdown from 'react-markdown';

const MarkdownLink: React.FC<any> = ({ href, children, ...props }) => {
  const isInternal = href?.startsWith('/');
  // Default classes for links
  const classes = "text-red-600 font-bold hover:underline transition-colors";
  
  if (isInternal) {
    return <Link to={href} className={classes}>{children}</Link>;
  }
  return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
};

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Driving School Bradford & Leeds | Automatic Driving Lessons | FastAutoPass";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Learn with a top-rated automatic driving school in Bradford and Leeds. 95% first-time pass rate, patient instructors, and local test route expertise.');
  }, []);

  const services = [
    {
      title: "Automatic Driving Lessons",
      desc: "The modern way to your license. No gears, no stalling, just smooth progress across West Yorkshire.",
      link: "/automatic-driving-lessons"
    },
    {
      title: "Manual Driving Lessons",
      desc: "Learn to drive a manual car with confidence. Gain full control, flexibility, and long-term driving options.",
      link: "/manual-driving-lessons"
    },
    {
      title: "Intensive Driving Courses",
      desc: "Reach test standard in weeks. Structured, high-impact programmes for rapid results.",
      link: "/intensive-driving-courses"
    },
    {
      title: "Pass Plus Course",
      desc: "Master the motorways and complex urban routes. Advanced skills for the confident driver.",
      link: "/pass-plus"
    },
    {
      title: "Refresher Lessons",
      desc: "Build your confidence back behind the wheel. Ideal if you haven’t driven in a while or feel unsure on busy roads.",
      link: "/refresher-lessons"
    },
    {
      title: "Motorway Lessons",
      desc: "Conquer the M62 and M1 with specialist coaching. High-speed confidence starts here.",
      link: "/motorway-lessons"
    },
    {
      title: "Taxi Driver Assessments",
      desc: "Professional preparation for local council tests. Expert coaching for your professional badge.",
      link: "/taxi-assessments"
    },
    {
      title: "ADI Part 2 Training",
      desc: "Advanced driving standards coaching for aspiring instructors. Precision coaching for professional qualification.",
      link: "/adi-part-2-training"
    },
    {
      title: "ADI Part 3 Training",
      desc: "Master the art of instruction. Expert mentoring to help you pass your final qualifying exam.",
      link: "/adi-part-3-training"
    },
    {
      title: "Mock Driving Tests",
      desc: "Realistic DVSA-style assessments on local routes. Know you're ready before the real thing.",
      link: "/mock-driving-tests"
    }
  ];

  const faqs = [
    {
      question: "How much are automatic driving lessons in Bradford and Leeds?",
      answer: "Lesson prices vary depending on your location and experience level. For the most up-to-date lesson information, please [contact us directly](#enquiry-form). We always aim to provide the best value for West Yorkshire learners, ensuring the consistency needed for rapid progress. We also offer specialized [intensive driving courses](/intensive-driving-courses) for those looking to pass quickly. For an accurate quote based on your current experience and goals, we recommend filling out our enquiry form for a fast response."
    },
    {
      question: "Is learning in an automatic car easier than manual?",
      answer: "For the vast majority of learners in Bradford and Leeds, automatic is significantly easier and faster to master. By removing the need to coordinate a clutch pedal and gear stick, you can focus entirely on the road ahead and hazard perception. This is particularly beneficial on the busy, hilly roads of West Yorkshire where stalling a manual car can be stressful. Most students find they reach test standard in fewer hours, often saving money in the long run. If you've struggled with manual lessons in the past, switching to automatic could be the best decision you make for your driving confidence. [Learn more about our Automatic Lessons](/automatic-driving-lessons)."
    },
    {
      question: "How long does it take to pass my driving test in an automatic?",
      answer: "The time it takes to pass varies, but automatic learners typically require about 25% fewer lessons than manual students. On average, a complete beginner might need between 20 to 30 hours of professional tuition to reach the DVSA test standard. However, if you have previous experience or take one of our [intensive courses](/intensive-driving-courses), you could be ready much sooner. We use realistic [mock driving tests](/mock-driving-tests) to track your progress and ensure you only head to the test centre when you are genuinely ready, maximizing your chances of a first-time pass."
    },
    {
      question: "Which driving test centres do you cover in West Yorkshire?",
      answer: "We provide expert coverage for all major test centres in the region, including Thornbury, Heaton, and Steeton in Bradford, and Horsforth and Harehills in Leeds. Our instructors have years of experience with the specific routes used by examiners at these locations. We don't just teach you to drive; we teach you how to handle the specific challenges of these local areas, from the complex lane markings at Thornbury to the busy residential streets of Horsforth. This local knowledge is a key part of our high success rate. [Book a Mock Test on your local route](/mock-driving-tests)."
    },
    {
      question: "Do you offer refresher lessons for full license holders?",
      answer: "Yes, we offer bespoke [refresher lessons](/refresher-lessons) for anyone who already holds a license but feels they need to sharpen their skills. This is ideal if you haven't driven for a while, have recently moved to the Bradford or Leeds area, or have just switched to an automatic vehicle. Our sessions are low-pressure and tailored to your needs, whether you want to practice motorway driving on the M62 or simply get more comfortable with modern urban traffic flow. We'll help you rebuild your confidence so you can enjoy the freedom of driving again."
    },
    {
      question: "What is your first-time pass rate for automatic learners?",
      answer: "We are proud to maintain a 95% first-time pass rate, which is well above the national average. This success comes from our structured coaching method and our commitment to thorough preparation. We don't just teach you the basics; we ensure you are a safe, confident driver capable of handling any situation. By using our [mock test system](/mock-driving-tests), we identify and fix any minor errors before your actual exam, ensuring you head to the test centre with total peace of mind. Our reputation in West Yorkshire is built on these genuine results."
    },
    {
      question: "Can I take my driving test in my own car?",
      answer: "While the DVSA allows you to use your own car, most of our students prefer to use their instructor's vehicle. Our automatic cars are modern, well-maintained, and fitted with dual controls for your safety. You'll also be completely familiar with the car's controls and dimensions after your lessons, which reduces stress on the day. If you do wish to use your own car, it must meet strict DVSA requirements, and your instructor will need to verify its suitability during a lesson. For most, the reliability and familiarity of the instructor's car is the best choice for the test. [Learn more about our Automatic Lessons](/automatic-driving-lessons)."
    },
    {
      question: "What happens if I need to cancel a lesson?",
      answer: "We understand that plans change, but to keep our instructors' schedules fair for all learners in Bradford and Leeds, we require at least 48 hours' notice for any cancellations. This allows us to offer the slot to another student who may be waiting. If a lesson is cancelled with less than 48 hours' notice, the full fee may still be charged. Our 24/7 support team is always available to help you manage your bookings and answer any questions about our policies. We strive to be as flexible as possible while ensuring a professional service for everyone. [Read our full terms on the Contact Us page](/contact)."
    },
    {
      question: "Do you have female automatic instructors available?",
      answer: "Yes, we have both male and female professional instructors available across West Yorkshire. We understand that some learners have a preference, and we do our best to accommodate this during the booking process. All our instructors are DVSA-approved and trained to provide a patient, supportive environment for every student. Whether you're a nervous beginner or looking for [Pass Plus](/pass-plus) training, we'll match you with an instructor who makes you feel comfortable and confident. Simply let us know your preference when you first get in touch."
    },
    {
      question: "Are your instructors local to Bradford and Leeds?",
      answer: "Absolutely. We only work with instructors who live and work in the local area. This means they have an intimate knowledge of the Bradford and Leeds road networks, including the specific 'tricky' spots that often appear on test routes. This local expertise is invaluable for your training, as it ensures you are practicing in the exact environments where you will be assessed. Unlike national schools that might send an instructor from outside the area, our team are genuine West Yorkshire locals who take pride in helping their community get on the road safely. [Find out about ADI Training](/adi-part-2-training)."
    },
    {
      question: "Do you offer intensive automatic driving courses in West Yorkshire?",
      answer: "Yes, we are specialists in [intensive automatic driving courses](/intensive-driving-courses) across Bradford, Leeds, and the wider West Yorkshire area. These courses are perfect for learners who need to get their license in a shorter timeframe, perhaps for a new job or personal commitment. Our intensive programmes are structured to provide high-impact learning while ensuring you don't feel overwhelmed. We'll work with you to find a schedule that fits, typically ranging from one to four weeks of focused tuition. It's a great way to build momentum and reach test standard quickly with the support of an expert local instructor."
    },
    {
      question: "What is the Pass Plus course, and is it available for automatic drivers?",
      answer: "Pass Plus is an excellent follow-up course for new drivers, and it's fully available for those who have passed in an automatic car. The course covers six modules, including motorway driving, night driving, and all-weather driving, which are essential skills for navigating the M62 and M1 safely. There's no test at the end; instead, you're assessed throughout the sessions. Completing [Pass Plus](/pass-plus) not only makes you a more confident driver on the busy roads of West Yorkshire but can also help reduce your car insurance premiums with many UK providers. It's a smart investment for any new driver."
    },
    {
      question: "Can I switch from manual to automatic lessons if I'm struggling?",
      answer: "Many of our most successful students started in manual cars but found the coordination of gears and the clutch too stressful. Switching to automatic is a very common and sensible move, especially given the busy nature of Bradford and Leeds traffic. Removing the gearbox allows you to focus entirely on hazard perception and safe navigation, which often leads to a much faster pass. There's no shame in choosing the modern way to drive; in fact, it's becoming the standard for many new drivers in the UK. We'll help you make the transition smoothly and rebuild your confidence on the road. [Learn more about switching to Automatic](/automatic-driving-lessons)."
    },
    {
      question: "How do I book my first automatic driving lesson?",
      answer: "Booking your first lesson with FastAutoPass is quick and easy. You can simply fill out the enquiry form on our website or give our 24/7 support team a call. We'll ask a few details about your location in Bradford or Leeds, your previous experience, and your availability. We then match you with one of our expert local instructors who will get in touch to arrange your first session. We pride ourselves on our fast response times and aim to get you behind the wheel as soon as possible. Don't wait—start your journey to independence with West Yorkshire's leading automatic driving school today. [Contact us to book your first lesson](#enquiry-form)."
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans text-gray-900 leading-normal">
      <Schema type="LocalBusiness" data={getLocalBusinessSchema()} />
      <Schema type="Organization" data={getOrganizationSchema()} />
      <Schema type="WebSite" data={getWebSiteSchema()} />
      <Schema type="BreadcrumbList" data={{
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://fastautopass.co.uk/"
        }]
      }} />
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
      
      {/* SECTION 1: HERO - PRECISION REFINED */}
      <section className="hero-section relative min-h-[40vh] lg:min-h-[450px] flex items-center bg-[#001A33] text-white overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4 relative z-10 pt-4 pb-8 lg:pt-6 lg:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            
            {/* Left: Authority Messaging */}
            <div className="max-w-2xl pt-0">
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 text-gray-300 px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest mb-3 italic">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                <span>24/7 Support Across West Yorkshire</span>
              </div>
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black mb-2 leading-[1.05] tracking-tight italic uppercase">
                Automatic Driving Lessons in <br/><span className="text-red-600">Bradford & Leeds</span>
              </h1>
              <p className="text-base lg:text-xl text-gray-300 mb-5 font-medium leading-relaxed italic opacity-80">
                High-quality automatic driving lessons in <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link> and <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link>. We provide patient, DVSA-approved tuition across West Yorkshire, focusing on real test routes and building genuine confidence behind the wheel.
              </p>

              {/* Statistics Layout - Consistent & Minimal */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-white/10 max-w-lg">
                {/* DVSA Approved */}
                <div className="flex items-center sm:flex-col sm:items-start gap-4 sm:gap-2">
                  <div className="text-red-600 w-6 h-6 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg lg:text-xl font-black italic text-white leading-none mb-1 uppercase">DVSA Approved</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 italic">Qualified Instructors</div>
                  </div>
                </div>

                {/* Successful Learners */}
                <div className="flex items-center sm:flex-col sm:items-start gap-4 sm:gap-2">
                  <div className="text-red-600 w-6 h-6 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg lg:text-xl font-black italic text-white leading-none mb-1 uppercase">150+ Passed</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 italic">Successful Learners</div>
                  </div>
                </div>

                {/* Route Experts */}
                <div className="flex items-center sm:flex-col sm:items-start gap-4 sm:gap-2">
                  <div className="text-red-600 w-6 h-6 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg lg:text-xl font-black italic text-white leading-none mb-1 uppercase">Local Routes</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 italic">Bradford & Leeds</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Premium Form - Spacious & Aligned */}
            <div className="flex justify-center lg:justify-end w-full" id="enquiry-form">
              <BookingForm areaName="Hero Precision Refined" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: 24/7 SUPPORT - CALM & CONFIDENT */}
      <section className="tight-transition py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-black mb-6 italic uppercase tracking-tight text-gray-900 leading-tight">
                Driving Tuition That <br/><span className="text-red-600">Works Around You.</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium italic leading-relaxed mb-8">
                As a local driving school owner, I know that finding time for lessons can be a struggle. That's why we've built our service around flexibility and reliability. Whether you're a student in <strong>Leeds</strong> or a busy professional in <strong>Bradford</strong>, we offer automatic driving lessons that fit your lifestyle. Our instructors aren't just experienced instructors in the car; they have deep-rooted knowledge of the local West Yorkshire roads, from the busy urban centres to the tricky residential test routes. We focus on helping nervous drivers find their feet, using structured lesson plans and realistic <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving tests</Link> to ensure you're fully prepared for the big day.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="font-black uppercase italic tracking-widest text-[10px] text-gray-900">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <span className="font-black uppercase italic tracking-widest text-[10px] text-gray-900">High Standards</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-8 italic uppercase tracking-tight text-gray-900">
                    Flexible Learning <span className="text-red-600">On Your Terms</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                    <div className="flex items-start space-x-4">
                      <div className="text-red-600 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <div className="font-black uppercase italic tracking-widest text-[10px] text-gray-900 mb-1">24/7 Availability</div>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed">Book or enquire anytime, day or night.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-red-600 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      </div>
                      <div>
                        <div className="font-black uppercase italic tracking-widest text-[10px] text-gray-900 mb-1">Morning & Evening</div>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed">Lessons that fit before or after work.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-red-600 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <div className="font-black uppercase italic tracking-widest text-[10px] text-gray-900 mb-1">Weekend Slots</div>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed">Saturday and Sunday tuition available.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-red-600 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <div className="font-black uppercase italic tracking-widest text-[10px] text-gray-900 mb-1">Fast Response</div>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed">Average response time under 2 hours.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-50">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic text-center">
                      Serving all test centres in <Link to="/bradford" className="hover:text-red-600 transition-colors">Bradford</Link> & Leeds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES - CLEAN GRID */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 italic uppercase tracking-tight text-gray-900">
              Driving <span className="text-red-600">Courses</span>
            </h2>
            <div className="h-1.5 w-16 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium italic">
              Comprehensive driving courses tailored for every stage of your journey — from beginner lessons to test-ready confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link to={service.link} key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex flex-col border-b-2 hover:border-red-600 duration-300">
                <h3 className="text-lg font-black mb-3 uppercase italic tracking-tight text-gray-900 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-medium mb-6 flex-grow leading-relaxed text-sm italic">
                  {service.desc}
                </p>
                <div className="text-red-600 font-black text-sm uppercase italic tracking-widest flex items-center">
                  Learn More <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: MOCK TESTS - SERIOUS & HIGH VALUE */}
      <section className="py-16 lg:py-20 bg-[#001A33] text-white overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-500 font-black uppercase tracking-widest italic text-[10px] mb-4 block">Test Readiness</span>
              <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tight leading-tight">
                DVSA Mock Tests. <br/><span className="text-red-600">Master Your Routes.</span>
              </h2>
              <p className="text-lg text-gray-300 font-medium italic leading-relaxed mb-8">
                Nerves cause more failures than lack of skill. Our realistic DVSA-style mock tests on actual <strong>Bradford</strong> and <strong>Leeds</strong> routes identify your weak spots before they cost you a test fee.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["Actual Route Familiarity", "DVSA Marking Standards", "Stress-Test Your Skills", "Detailed Feedback"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-bold italic text-white/80">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-block bg-red-600 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-red-700 transition-all shadow-xl uppercase italic tracking-widest">
                Book Mock Test
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 overflow-hidden">
              <MockTestChecklist variant="home" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SOCIAL PROOF - CONSOLIDATED */}
      <RecentPasses areaName="Bradford & Leeds" />
      <ReviewsSlider />
      <HomeTrustSection />

      {/* SECTION 5.5: LOCAL AUTHORITY - SEO DEPTH */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-black mb-8 italic uppercase tracking-tight text-gray-900 text-center">
            Automatic Driving Lessons in <span className="text-red-600">Bradford, Leeds & West Yorkshire</span>
          </h2>
          <div className="text-gray-600 font-medium italic leading-relaxed space-y-6 text-lg">
              <p>
                Finding the right driving school in West Yorkshire is about more than just booking a slot. We provide patient, reliable <Link to="/bradford" className="text-red-600 font-bold hover:underline">automatic driving lessons in Bradford</Link> and <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link>, focusing on building your confidence from your very first session. Our goal is to help you pass your test efficiently while ensuring you feel safe on today's busy roads.
              </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              {[
                { t: 'Automatic Driving Lessons', d: 'The most efficient way to pass.', l: '/automatic-driving-lessons' },
                { t: 'Manual Driving Lessons', d: 'Full control and flexibility.', l: '/manual-driving-lessons' },
                { t: 'Intensive Courses', d: 'Pass in weeks, not months.', l: '/intensive-driving-courses' },
                { t: 'Mock Driving Tests', d: 'Know you are ready for test day.', l: '/mock-driving-tests' },
                { t: 'Refresher Lessons', d: 'Tailored for licence holders.', l: '/refresher-lessons' },
                { t: 'Local Route Expertise', d: 'Master your specific test area.', l: '/mock-driving-tests' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <Link to={item.l} className="block font-black uppercase italic tracking-tight text-gray-900 hover:text-red-600 transition-colors">{item.t}</Link>
                    <span className="text-sm text-gray-500">{item.d}</span>
                  </div>
                </div>
              ))}
            </div>

            <p>
              Our instructors live and work in the areas they teach, meaning they understand the specific challenges of West Yorkshire driving. Whether you're navigating city centre loops or quieter residential suburbs, we use our local knowledge to prepare you for the exact conditions you'll face on test day.
            </p>
            
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="space-x-4">
                <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford Hub</Link>
                <span className="text-gray-300">|</span>
                <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds Hub</Link>
              </div>
              <div className="space-x-4">
                <Link to="/bradford" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors">View All Bradford Areas</Link>
                <Link to="/leeds" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors">View All Leeds Areas</Link>
              </div>
            </div>

            <p className="text-center font-bold text-gray-900 pt-4">
              Due to high demand, we recommend <Link to="/contact" className="text-red-600 hover:underline">contacting us</Link> early to discuss your preferred start date and availability.
            </p>


          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ - SPACIOUS */}
      <section className="py-16 lg:py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tight text-gray-900">
              Frequently Asked Questions About Automatic Driving Lessons in Bradford & Leeds
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] italic">Expert Answers for West Yorkshire Learners</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-sm lg:text-base font-black uppercase italic text-gray-900 group-hover:text-red-600 transition-colors">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all ${openFaq === i ? 'bg-red-600 border-red-600 text-white rotate-45' : 'text-gray-400'}`}>
                    <span className="text-lg font-black">+</span>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="p-8 bg-gray-50 border-t border-gray-100 animate-slideDown">
                    <div className="prose prose-sm max-w-none text-gray-600 font-medium leading-relaxed italic">
                      <ReactMarkdown components={{ a: MarkdownLink }}>{faq.answer}</ReactMarkdown>
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

export default Home;

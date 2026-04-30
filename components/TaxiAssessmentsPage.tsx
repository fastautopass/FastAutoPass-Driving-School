import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import Schema from './Schema';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const TaxiAssessmentsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  useEffect(() => {
    // window.scrollTo removed if needed, but keeping smallest change
  }, []);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "How do I prepare for the Bradford or Leeds Council taxi assessment?",
      answer: (
        <>
          Preparation is key to securing your badge. We recommend starting with a thorough review of the Highway Code—assessors will expect you to follow it to the letter. Next, book a professional assessment with FastAutoPass. We’ll conduct a <Link to="/mock-driving-tests" className="font-bold text-red-600 hover:underline">mock taxi test</Link> on the actual routes used by the council assessors in Bradford and Leeds. We’ll identify any 'bad habits' you’ve picked up over years of driving and show you exactly how to fix them. We also focus on the specific 'taxi' maneuvers, such as the 'U-turn' and the 'stop as if to pick up a passenger'.
        </>
      )
    },
    {
      question: "What exactly do council assessors look for during the driving test?",
      answer: "Assessors are looking for a high standard of professional driving. This means your planning must be long-range, your vehicle control must be smooth, and your awareness of other road users must be exceptional. They also place a massive emphasis on 'passenger comfort'. If you’re braking late or taking corners too fast, you’ll fail. In Bradford and Leeds, they also look for your ability to navigate busy urban environments safely and your knowledge of local road signs and restrictions. It’s not just a driving test; it’s a professional assessment of your suitability for the trade."
    },
    {
      question: "What are the most common reasons for failing a taxi assessment?",
      answer: (
        <>
          The most common fails in West Yorkshire are poor observation at junctions, incorrect lane discipline on roundabouts, and failing to check mirrors before signaling or changing speed. Many experienced drivers also fail on 'passenger comfort'—being too aggressive with the pedals or steering. Another common pitfall is the 'wheelchair accessible vehicle' (WAV) module, where candidates fail to secure the wheelchair correctly or forget to use the safety belts. Our <Link to="/test-preparation" className="font-bold text-red-600 hover:underline">DVSA test preparation</Link> addresses all these areas, ensuring you don't fall into the same traps as other applicants.
        </>
      )
    },
    {
      question: "Is the taxi test more difficult than a standard driving test?",
      answer: "In many ways, yes. While the technical requirements are similar to the standard driving test, the 'standard' expected is much higher. You are being assessed as a professional driver who will be responsible for the safety of the public. The duration is often longer (around 45-60 minutes), and the examiner will be much stricter on minor faults. In Bradford and Leeds, the routes are designed to be challenging, involving complex city centre junctions and busy residential areas. You need to demonstrate that you can handle these environments with calm, professional precision."
    },
    {
      question: "How do I ensure I'm 'private hire ready' for West Yorkshire?",
      answer: "Being 'private hire ready' means more than just being able to drive. It means understanding the professional standards expected by the council and your future operator. We’ll teach you how to conduct yourself professionally, how to handle passengers with care, and how to maintain your vehicle to the required standard. We also focus on your ability to use GPS systems effectively while maintaining your focus on the road—a vital skill for any modern taxi driver in Leeds or Bradford."
    },
    {
      question: "What is 'passenger comfort' and why is it a major marking factor?",
      answer: "Passenger comfort is about the 'quality' of your driving. If a passenger feels nervous or physically jolted by your driving, you aren't doing your job correctly. Assessors in West Yorkshire will look at how you accelerate, how you brake, and how you take corners. They want to see 'progressive' braking—slowing down early and smoothly. They also watch your steering—it should be smooth and controlled, not jerky. If you drive like you’re in a hurry, you’ll likely fail on passenger comfort. We’ll help you refine your 'smoothness' until it becomes second nature."
    },
    {
      question: "Do I need to know the 'Knowledge' of Leeds or Bradford for the driving part?",
      answer: "The driving assessment is primarily about your technical driving ability, not your geographical knowledge. However, the assessor may ask you to follow signs to a specific destination or use a sat-nav. While you don't need to know every street by heart for the driving test, having a general familiarity with the main routes in Bradford and Leeds will reduce your stress levels. The 'Knowledge' test is usually a separate part of the council’s licensing process, but being a confident local driver certainly helps with both."
    },
    {
      question: "How do I handle the wheelchair accessible vehicle (WAV) part of the test?",
      answer: "The WAV module is a critical part of the assessment for many councils in West Yorkshire. You must demonstrate that you can safely load, secure, and unload a wheelchair user. This involves using the ramps correctly, securing the wheelchair with the floor restraints, and ensuring the passenger is wearing the safety belt correctly. Many candidates fail here because they rush or miss a vital safety step. We provide hands-on training with a real WAV, ensuring you know the exact sequence of actions required to pass this module first time."
    },
    {
      question: "Can I use my own car for the taxi assessment in West Yorkshire?",
      answer: "This depends on the specific council and the assessment provider they use. Some councils require you to use a vehicle provided by the assessment centre, while others allow you to use your own, provided it meets their specific taxi/private hire criteria (e.g., age, condition, and insurance). If you use your own car, it must be clean, roadworthy, and have an extra rear-view mirror for the assessor. We’ll advise you on the specific requirements for Bradford and Leeds so you can make the right choice for your test."
    },
    {
      question: "What are the specific requirements for Leeds City Council assessments?",
      answer: "Leeds City Council has its own specific set of standards and assessment providers. They place a high priority on safety, professional conduct, and your ability to navigate the city’s complex road network. They also have specific requirements for the WAV module. Our training is specifically tailored to the Leeds City Council criteria. We stay up-to-date with any changes in their assessment process, ensuring our Leeds-based students are always prepared for the exact format of the test they will face."
    },
    {
      question: "How many driving faults am I allowed on a taxi assessment?",
      answer: "Typically, you are allowed a maximum of 9 'minor' driving faults (compared to 15 on a learner test). However, any 'serious' or 'dangerous' fault will result in an immediate fail. In our experience with West Yorkshire assessments, the examiners are very strict on what constitutes a 'minor' fault. Things that might be overlooked on a learner test are often marked as faults on a professional assessment. Our goal is to get you to a 'zero-fault' standard, giving you a comfortable margin for error on the day."
    },
    {
      question: "Will training with FastAutoPass guarantee a pass for my badge?",
      answer: "While we can't 'guarantee' a pass (no reputable school can), our success rate for taxi assessments in Bradford and Leeds is exceptionally high. Our training is designed to remove the guesswork. We show you exactly what the assessors are looking for and we practice until you can deliver it consistently. By the time you take your test, you won't be 'hoping' to pass; you'll be confident that your driving meets the professional standard required by the council."
    },
    {
      question: "How do I manage the pressure of a professional driving assessment?",
      answer: "Pressure is part of the job for a taxi driver, and the assessor wants to see how you handle it. We use 'mock' assessments to build your resilience. By experiencing the pressure of a timed, marked test with one of our experienced trainers, you become desensitized to the stress. We also teach you mental techniques to stay focused on your driving rather than the assessor’s clipboard. In the busy traffic of Bradford or Leeds, staying calm is the key to making safe, professional decisions."
    },
    {
      question: "Why is professional training vital for experienced drivers in Bradford?",
      answer: (
        <>
          Experienced drivers are often the ones who struggle most with taxi assessments. Over 10, 20, or 30 years of driving, everyone picks up 'habits' that are perfectly safe for everyday driving but are immediate fails on a professional test. Things like 'palming' the steering wheel, failing to check mirrors before every signal, or poor lane discipline on roundabouts. Our training isn't about 'teaching you to drive'; it's about 'polishing' your driving to meet a very specific, professional standard. It’s an investment in your future livelihood. If you're ready to get started, <Link to="/contact" className="font-bold text-red-600 hover:underline">contact us</Link> today.
        </>
      )
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans taxi-assessments-page">
      <SEO 
        title="Taxi Driver Assessment Training Bradford & Leeds | FastAutoPass"
        description="Pass your Bradford or Leeds City Council taxi assessment first time. Professional training for private hire and hackney carriage drivers in West Yorkshire."
        canonical="https://fastautopass.co.uk/taxi-assessments"
      />
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "Taxi Driver Assessment Training",
          "Pass your Bradford or Leeds City Council taxi assessment first time. Professional training for private hire and hackney carriage drivers in West Yorkshire.",
          "https://fastautopass.co.uk/taxi-assessments"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Taxi Assessments", item: "https://fastautopass.co.uk/taxi-assessments" }
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
              "text": typeof faq.answer === 'string' ? faq.answer : "Professional taxi assessment training information for Bradford and Leeds."
            }
          }))
        }} 
      />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-32 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic drop-shadow-2xl">
                Taxi <br/><span className="text-red-500">Assessments</span> in <br/>Bradford & Leeds
              </h1>
              <p className="text-xl lg:text-2xl font-bold mb-10 text-gray-200 italic">
                Your livelihood depends on your badge. Don't leave it to chance. Our training helps you meet the standards of Bradford and Leeds City Councils first time.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-10">
                <a 
                  href="#hero-form"
                  className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-xl text-center hover:bg-red-700 shadow-2xl transition-all uppercase italic tracking-widest w-full sm:w-auto"
                >
                  Send Enquiry
                </a>
                <button 
                  onClick={() => setShowCallPopup(true)}
                  className="bg-white text-gray-900 px-10 py-5 rounded-full font-black text-xl text-center hover:bg-gray-100 shadow-2xl transition-all uppercase italic tracking-widest w-full sm:w-auto"
                >
                  Call Now
                </button>
                <div className="flex items-center justify-center">
                  <TrustBadges dark minimal />
                </div>
              </div>
            </div>
            <div id="hero-form" className="w-full">
              <BookingForm areaName="Taxi Assessment Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* REAL-WORLD PROGRAMME BREAKDOWN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              What the Assessment Actually Looks For
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
              Council examiners aren't just checking if you can drive; they're checking if you can drive professionally. We focus on the four pillars of a successful taxi assessment. If you're feeling a bit rusty, our <Link to="/mock-driving-tests" className="font-bold text-red-600 hover:underline">mock driving tests</Link> can help you get back up to speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Passenger Comfort & Safety</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  This is the #1 failure point. We'll refine your braking and acceleration to ensure a smooth ride. We focus on 'progressive' braking—no more jerky stops at <strong>Bradford</strong> traffic lights. Your passengers should feel secure, not shaken.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Advanced Hazard Perception</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  As a taxi driver, you're on the road for 8-10 hours a day. We'll teach you the scanning techniques used by advanced drivers to identify potential issues in <strong>Leeds city centre</strong> long before they become hazards.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Wheelchair & Vehicle Knowledge</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  If you're going for a Hackney badge, you'll be tested on WAV handling. We'll cover the correct ramp deployment, passenger securing, and the 'cabology' questions that <strong>Leeds City Council</strong> examiners love to ask.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Manoeuvring Under Pressure</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  You'll be asked to perform a 'taxi turn' (U-turn) and potentially a reverse. We'll practice these in tight urban environments, ensuring your observation is 360-degrees and your control is flawless.
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
                We don't treat you like a learner. We know you're an experienced driver, and we respect that. Our coaching is focused on 'rehabilitating' your driving—identifying the habits that will cause a fail and replacing them with professional standards.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We value your time. We know that every day you spend without your badge is a day you aren't earning. Our training is intensive, focused, and designed to get you through the assessment as quickly as possible.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We use real-world assessment routes. We'll take you on the exact roads the council examiners use. We want you to feel familiar with the environment so you can focus entirely on your driving performance.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Our success rate is exceptional. We take pride in the fact that the vast majority of our taxi students pass their assessment on the first attempt after training with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL EXPERIENCE SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Council-Specific Knowledge in Bradford & Leeds
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
                <p>
                  Every council has its own quirks. We've spent years studying the assessment routes and examiner preferences for both <strong>Bradford Council</strong> and <strong>Leeds City Council</strong>.
                </p>
                <p>
                  In <strong>Bradford</strong>, we'll focus on the hilly, high-density urban routes around the city centre and the complex junctions that often catch out drivers. In <strong>Leeds</strong>, we'll master the inner ring road and the specific requirements for the 'knowledge' elements of the assessment.
                </p>
                <p>
                  We don't just give you a general driving lesson. We give you a targeted, council-specific preparation session that addresses the exact criteria you'll be judged on. This is practical training for drivers who want to get it right. You can also <Link to="/contact" className="font-bold text-red-600 hover:underline">contact us</Link> if you have any specific questions.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-6">Professional Standards</h3>
              <ul className="space-y-4">
                {[
                  "Bradford Council Route Familiarisation",
                  "Leeds City Council Assessment Criteria",
                  "WAV (Wheelchair Accessible) Handling",
                  "Advanced Passenger Comfort Coaching",
                  "Professional 'Cabology' Preparation",
                  "Eco-Driving for Maximum Profitability"
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
                title: "The Career Changer", 
                desc: "You're starting a new chapter as a professional driver. You want to ensure your first step into the industry is a success by passing your assessment without delay." 
              },
              { 
                title: "The Experienced Driver", 
                desc: "You've been driving for decades but you know you've developed 'lazy' habits. You want a professional to help you polish your skills with some refresher lessons so you meet the council's strict advanced standard." 
              },
              { 
                title: "The 'Second Chance' Driver", 
                desc: "You've already failed an assessment and you can't afford to fail again. You need professional help to identify exactly what went wrong and fix it permanently." 
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-black mb-4 uppercase italic text-red-600">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                  {item.title === "The Experienced Driver" ? (
                    <>You've been driving for decades but you know you've developed 'lazy' habits. You want a professional to help you polish your skills with some <Link to="/refresher-lessons" className="font-bold text-red-600 hover:underline">refresher lessons</Link> so you meet the council's strict advanced standard.</>
                  ) : item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINK-WORTHY AUTHORITY SECTION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
            The 5 Most Common Reasons for Failing a Taxi Assessment
          </h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
            <p>
              After years of training drivers for <strong>Bradford</strong> and <strong>Leeds</strong> assessments, we've identified the same patterns of failure. It's rarely 'bad driving'; it's almost always 'unprofessional driving'.
            </p>
            <ol className="space-y-4">
              <li><strong>1. Poor Mirror Use:</strong> Most drivers check their mirrors, but not *every* time they change speed or direction. In an assessment, if you don't check your interior mirror before braking, it's a fault.</li>
              <li><strong>2. Lack of Steering Control:</strong> Crossing arms or 'spinning' the wheel with one hand is an immediate red flag for examiners. They want to see 'pull-push' steering for maximum control.</li>
              <li><strong>3. Jerky Braking:</strong> If the examiner's head moves forward every time you stop, you've failed on passenger comfort. We teach 'progressive' braking—firm at first, then easing off as you come to a halt.</li>
              <li><strong>4. Speed Limit Infringements:</strong> In 20mph zones (common in Leeds residential areas), doing 22mph is a fail. Examiners have zero tolerance for speeding.</li>
              <li><strong>5. Poor Lane Discipline:</strong> Especially on multi-lane roundabouts. If you 'drift' across lanes without a clear reason and a mirror check, the assessment is over.</li>
            </ol>
            <p>
              <strong>Our Advice:</strong> Don't assume your experience will save you. These faults are often 'invisible' to the driver but glaringly obvious to an examiner. Professional training is the only way to catch them. Take a look at our <Link to="/test-preparation" className="font-bold text-red-600 hover:underline">DVSA test preparation</Link> for more tips on staying sharp.
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
                Taxi Assessment Training Bradford
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Preparing for a <strong>Bradford Council taxi assessment</strong> requires a deep understanding of the city's unique road layout. Our <strong>taxi driver training Bradford</strong> focuses on the high-density urban routes and the specific 'cabology' questions asked by local examiners.
                </p>
                <p>
                  We provide taxi assessment preparation in Bradford that is tailored to the council's strict standards. Whether you're applying for a private hire or hackney badge, our taxi driving instructor Bradford will ensure you're fully prepared.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
                Taxi Assessment Training Leeds
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  The <strong>Leeds City Council taxi assessment</strong> is known for its intensity. Our <strong>taxi driver training Leeds</strong> is designed to help you navigate the city's complex inner ring road and busy urban junctions with professional precision. We focus heavily on passenger comfort and advanced hazard perception.
                </p>
                <p>
                  A <strong>taxi assessment course Leeds</strong> with FastAutoPass is the most effective way to ensure a first-time pass. Our <strong>taxi driving instructor Leeds</strong> understands the exact criteria used by council examiners. If you're serious about your career, our <strong>professional taxi training Leeds</strong> provides the competitive edge you need to secure your badge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EXPLORE MORE DRIVING SERVICES */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Explore More Driving Services
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">You may also be interested in these related services</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/automatic-driving-lessons" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">Automatic Driving Lessons</Link>
            <Link to="/intensive-driving-courses" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">Intensive Driving Courses</Link>
            <Link to="/refresher-lessons" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">Refresher Lessons</Link>
            <Link to="/pass-plus" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">Pass Plus Courses</Link>
            <Link to="/motorway-lessons" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">Motorway Lessons</Link>
            <Link to="/mock-driving-tests" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">Mock Driving Tests</Link>
            <Link to="/test-preparation" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">DVSA Test Preparation</Link>
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
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Real Answers for Professional Drivers</p>
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
                    <p className="text-gray-600 font-medium leading-relaxed">{faq.answer}</p>
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
              <p className="text-gray-500 font-medium mb-8 italic">Discuss your taxi training requirements.</p>
              
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

export default TaxiAssessmentsPage;

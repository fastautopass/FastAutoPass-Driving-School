import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import Schema from './Schema';
import Breadcrumbs from './Breadcrumbs';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const AdiPart2Page: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "What exactly is the ADI Part 2 test and how does it differ from a learner test?",
      answer: (
        <>
          The ADI Part 2 is a test of your advanced driving ability. While a learner test checks for basic safety and competence, Part 2 demands a professional standard. You are expected to demonstrate high-quality car control, long-range planning, and a deep understanding of the Highway Code. The test is longer (around 60 minutes) and you are allowed a maximum of only 6 driving faults (compared to 15 for learners). Any serious or dangerous fault is an immediate fail. In Bradford and Leeds, the routes are specifically chosen to test your ability to handle complex urban environments with absolute precision.
        </>
      )
    },
    {
      question: "How many hours of training do I typically need for Part 2?",
      answer: (
        <>
          This varies depending on your current driving standard and how many 'bad habits' you've picked up over the years. Most trainees find that 10-15 hours of coaching is sufficient to reach the required advanced standard. We start with an initial assessment to identify your weak points—often things like mirror timing, hand position, or eco-safe driving—and then create a targeted plan to fix them. Our goal is to get you to a 'zero-fault' standard before you even book your test. You can learn more about our <Link to="/mock-driving-tests" className="font-bold text-red-600 hover:underline">mock driving tests</Link> to see how we assess your skills.
        </>
      )
    },
    {
      question: "What are the most common reasons for failing the ADI Part 2 in West Yorkshire?",
      answer: (
        <>
          The most common failure points in Bradford and Leeds are poor observation at junctions, incorrect lane discipline on complex roundabouts, and failing to demonstrate 'eco-safe' driving. Many experienced drivers also fail on 'technical' faults like crossing their arms while steering or failing to check mirrors before every signal. The examiners in West Yorkshire are looking for a 'smooth' and 'systematic' approach to every hazard. If your driving feels reactive rather than proactive, you'll struggle to pass. Our <Link to="/test-preparation" className="font-bold text-red-600 hover:underline">DVSA test preparation</Link> covers these common pitfalls in detail.
        </>
      )
    },
    {
      question: "Can I use my own car for the ADI Part 2 test?",
      answer: "Yes, you can use your own car, provided it meets the DVSA's specific requirements. It must be a standard four-wheeled vehicle with a manual or automatic transmission (though most ADIs train in manuals), and it must be roadworthy, taxed, and insured for a driving test. It must also have an extra rear-view mirror for the examiner. We recommend training in the car you intend to use for the test so you are completely familiar with its dimensions and controls."
    },
    {
      question: "What is the 'System of Car Control' (IPSGA) and why is it vital?",
      answer: "IPSGA stands for Information, Position, Speed, Gear, and Acceleration. It is the foundation of advanced driving. The examiner expects you to apply this system to every hazard you encounter. It ensures your driving is planned, smooth, and safe. In the busy urban environments of Leeds and Bradford, using IPSGA correctly allows you to manage complex situations with calm, professional precision. We spend a significant amount of time mastering this system until it becomes your natural way of driving."
    },
    {
      question: "How do I manage the pressure of the Part 2 assessment?",
      answer: (
        <>
          The pressure of being watched by a senior DVSA examiner can be intense. We manage this through <Link to="/mock-driving-tests" className="font-bold text-red-600 hover:underline">mock tests</Link>. By simulating the exact conditions of the real test—including the marking sheet and the examiner's silence—we build your resilience. We also teach you mental techniques to stay focused on the 'system' rather than the clipboard. In the challenging traffic of West Yorkshire, staying calm is the key to making the right decisions under pressure.
        </>
      )
    },
    {
      question: "What does 'Eco-Safe Driving' mean in the context of Part 2?",
      answer: "Eco-safe driving is about planning and awareness. The examiner wants to see that you can drive in a way that minimizes fuel consumption and emissions without compromising safety. This means using 'engine braking' by coming off the accelerator early, avoiding unnecessary acceleration, and choosing the correct gear for the situation. It's not just about being 'green'; it's a demonstration of your ability to plan ahead and read the road—vital skills for any professional driving instructor."
    },
    {
      question: "What maneuvers are included in the ADI Part 2 test?",
      answer: "You'll be asked to perform two maneuvers from the following: parallel park, bay park (either forward or reverse), or pulling up on the right and reversing. You may also be asked to perform an emergency stop. The standard expected is very high. This means your observation must be 360-degrees throughout, your control must be slow and precise, and you must finish in a safe, legal position. We practice these in various locations across Bradford and Leeds to ensure you can handle them anywhere."
    },
    {
      question: "Is there an 'Independent Driving' section in the Part 2 test?",
      answer: "Yes, there is a 20-minute independent driving section. You'll be asked to follow either a series of road signs or directions from a sat-nav. The examiner is looking for your ability to navigate safely while maintaining your advanced driving standard. In the complex road networks of Leeds and Bradford, this is a true test of your planning and awareness. If you take a wrong turn, don't panic—as long as you do it safely and maintain the system, you won't be penalized."
    },
    {
      question: "What are the eyesight and 'show me, tell me' requirements?",
      answer: "At the start of the test, you must read a number plate from 26.5 meters. You'll then be asked five 'show me, tell me' questions about vehicle safety and maintenance. These are more advanced than the learner version. You need to provide detailed, accurate answers that demonstrate your professional knowledge. We provide you with a comprehensive guide to these questions, ensuring you start your test with a confident, professional impression."
    },
    {
      question: "How many attempts do I get at the ADI Part 2 test?",
      answer: "You are allowed a maximum of three attempts at the Part 2 test. If you fail three times, you must wait until two years from the date you passed your Part 1 (theory) test and then start the entire process again. This is why professional training is so critical. We don't want you to 'waste' an attempt. Our goal is to ensure you are at a standard where passing is a formality, not a gamble."
    },
    {
      question: "Why should I choose FastAutoPass for my Part 2 training in Bradford?",
      answer: (
        <>
          We don't just teach you to pass a test; we teach you to be a professional driver. Our trainers are highly experienced ADIs who understand the specific challenges of the Bradford and Leeds test routes. We focus on the 'why' as much as the 'how', giving you the deep understanding you'll eventually need to teach your own students. Our reputation for excellence in West Yorkshire is built on the success of the instructors we've trained. If you're looking for <Link to="/intensive-driving-courses" className="font-bold text-red-600 hover:underline">intensive driving courses</Link> to speed up your progress, we can help with that too.
        </>
      )
    },
    {
      question: "What happens after I pass the ADI Part 2?",
      answer: (
        <>
          Once you pass Part 2, you move on to Part 3—the test of your instructional ability. This is the final and most challenging stage. Passing Part 2 is a huge milestone; it proves you have the physical skills to be a professional. Now, you need to learn how to transfer those skills to others. We offer a seamless transition to <Link to="/adi-part-3-training" className="font-bold text-red-600 hover:underline">ADI Part 3 training</Link>, helping you build on your advanced driving foundation to become a truly exceptional instructor.
        </>
      )
    },
    {
      question: "Can I train for Part 2 while still working my current job?",
      answer: (
        <>
          Absolutely. Most of our trainees are in the process of a career change and have existing commitments. We offer flexible training slots in Bradford and Leeds, including evenings and weekends, to fit around your schedule. We can do intensive blocks or weekly sessions—whatever works best for you. The key is consistency; regular training helps you maintain the advanced mindset required for success. Feel free to <Link to="/contact" className="font-bold text-red-600 hover:underline">contact us</Link> to discuss a schedule that works for you.
        </>
      )
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans adi-part2-page">
      <SEO 
        title="ADI Part 2 Training Bradford & Leeds | Advanced Driving | FastAutoPass"
        description="Master the ADI Part 2 test with expert advanced driving coaching in Bradford and Leeds. Professional training for aspiring driving instructors in West Yorkshire."
        canonical="https://fastautopass.co.uk/adi-part-2-training"
      />
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "ADI Part 2 Training",
          "Master the ADI Part 2 test with expert advanced driving coaching in Bradford and Leeds. Professional training for aspiring driving instructors in West Yorkshire.",
          "https://fastautopass.co.uk/adi-part-2-training"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "ADI Part 2 Training", item: "https://fastautopass.co.uk/adi-part-2-training" }
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
              "text": "Professional ADI Part 2 training information for aspiring instructors in West Yorkshire."
            }
          }))
        }} 
      />
      <Breadcrumbs />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-32 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic drop-shadow-2xl">
                ADI <br/><span className="text-red-500">Part 2</span> Training <br/>Bradford & Leeds
              </h1>
              <p className="text-xl lg:text-2xl font-bold mb-10 text-gray-200 italic">
                Professional advanced driving coaching for aspiring instructors. Don't just pass the test—master the art of professional driving with West Yorkshire's dedicated trainers.
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
              <BookingForm areaName="ADI Part 2 Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* REAL-WORLD PROGRAMME BREAKDOWN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              The Path to Advanced Driving
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
              The ADI Part 2 test is about more than just safety; it's about demonstrating a professional standard of driving. We focus on the core competencies required for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">The System of Car Control</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  We'll master the IPSGA system (Information, Position, Speed, Gear, Acceleration). This is the foundation of all advanced driving and is what the <strong>Bradford</strong> examiners will be looking for at every hazard.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Hazard Perception</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Learn to read the road like a pro. We'll develop your scanning and planning skills, allowing you to identify and manage hazards in <strong>Leeds city centre</strong> long before they become problems.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Precision Manoeuvring</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  The standard for Part 2 manoeuvres is very high. We'll refine your control and observation during parallel parks, bay parks, and emergency stops until they are flawless every single time.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Eco-Safe Driving Techniques</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Demonstrate your ability to drive efficiently without compromising safety. We'll teach you the planning and vehicle control techniques that <strong>West Yorkshire</strong> examiners demand from professional instructors.
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
              Why Train With Us?
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We are dedicated ADI trainers. We don't just do learner lessons; we are highly experienced in the 'Part 2' and 'Part 3' standards. We know exactly what the DVSA examiners are looking for and how to help you deliver it.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Our coaching is bespoke. We identify your specific 'bad habits' and create a targeted plan to fix them. We don't waste time on things you already do well; we focus on the areas that will get you a pass.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We use <Link to="/mock-driving-tests" className="font-bold text-red-600 hover:underline">mock tests</Link> to build your confidence. By simulating the real test environment, we ensure you are prepared for the pressure of the day. Our goal is a 'zero-fault' pass.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We offer a complete path. Once you pass Part 2, we are ready to take you through <Link to="/adi-part-3-training" className="font-bold text-red-600 hover:underline">Part 3 training</Link> and onto your new career. We are your partners in becoming a successful driving instructor.
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
                Learning the West Yorkshire Test Routes
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
                <p>
                  The ADI Part 2 test routes in <strong>Bradford</strong> and <strong>Leeds</strong> are designed to be challenging. They include everything from high-speed dual carriageways to narrow, congested residential streets and complex urban roundabouts.
                </p>
                <p>
                  Our training takes you onto the actual roads used by the DVSA examiners. We'll master the tricky junctions around <strong>Thornbury</strong>, the busy commuter routes in <strong>Leeds</strong>, and the varied terrain of the <strong>West Yorkshire</strong> hills.
                </p>
                <p>
                  We don't just teach you to drive; we teach you to drive *these* routes to a professional standard. By the time you take your test, you'll be familiar with every potential pitfall and confident in your ability to handle it with professional poise.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-6">Advanced Competencies</h3>
              <ul className="space-y-4">
                {[
                  "Systematic IPSGA Application",
                  "Advanced Hazard Management",
                  "High-Speed Road Discipline",
                  "Complex Urban Navigation",
                  "Precision Manoeuvre Training",
                  "Professional 'Show Me, Tell Me' Prep"
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
            Is This Right For You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "The Aspiring ADI", 
                desc: "You've passed Part 1 and you're ready to prove your driving ability. You want the best possible start to your new career by passing Part 2 first time." 
              },
              { 
                title: "The Experienced Driver", 
                desc: "You've been driving for years but you know you've developed habits. You need a professional to 'rehabilitate' your driving to the DVSA's advanced standard." 
              },
              { 
                title: "The 'Second Attempt' Trainee", 
                desc: "You've already had a setback at Part 2. You need expert intervention to identify the root cause of the failure and ensure your next attempt is a success." 
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
            The 5 Golden Rules of ADI Part 2 Success
          </h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
            <p>
              Passing the ADI Part 2 in <strong>Bradford</strong> or <strong>Leeds</strong> isn't about luck; it's about preparation. Here are the five rules we live by.
            </p>
            <ol className="space-y-4">
              <li><strong>1. Master the System:</strong> IPSGA isn't just a theory; it must be your natural way of driving. If you aren't using it consistently, you aren't at the required standard.</li>
              <li><strong>2. Observations are Everything:</strong> You must demonstrate active, purposeful scanning. The examiner needs to *see* you looking and *feel* you reacting to what you see.</li>
              <li><strong>3. Smoothness is Professionalism:</strong> Jerky pedals or aggressive steering are immediate red flags. Your driving should be so smooth that the examiner barely notices the car moving.</li>
              <li><strong>4. Know Your Limits:</strong> Speed limits are absolute. In 20mph zones, 21mph is a fail. You must demonstrate absolute discipline in every environment.</li>
              <li><strong>5. Plan for the Worst:</strong> Assume every other road user is going to do something unexpected. Your planning should always leave you an 'out'.</li>
            </ol>
            <p>
              <strong>Our Advice:</strong> Don't underestimate this test. It is a professional assessment of your ability to be a role model for future drivers. Treat it with the respect it deserves. If you need to brush up on your skills, consider our <Link to="/refresher-lessons" className="font-bold text-red-600 hover:underline">refresher lessons</Link> to get back to peak performance.
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
                ADI Part 2 Training Bradford
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Our <strong>ADI Part 2 training Bradford</strong> is specifically designed to help you master the challenging local test routes. We focus on the complex junctions and varied terrain that <strong>Bradford</strong> examiners use to test advanced driving ability.
                </p>
                <p>
                  With expert <strong>advanced driving coaching Bradford</strong>, we'll identify your weak points and replace them with professional techniques. Whether you're a local or coming from further afield, our <strong>ADI Part 2 instructor Bradford</strong> provides the elite preparation you need for a first-time pass.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
                ADI Part 2 Training Leeds
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Master the busy urban environments of <strong>Leeds</strong> with our specialist <strong>ADI Part 2 training Leeds</strong>. We focus on high-speed road discipline and complex city centre navigation, ensuring you meet the DVSA's elite standard.
                </p>
                <p>
                  Our <strong>advanced driving course Leeds</strong> is the most effective way to prepare for your assessment. With a dedicated <strong>ADI Part 2 trainer Leeds</strong>, you'll build the confidence and skill required to pass the test and move onto the final stage of your instructor journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              ADI Part 2 FAQs
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Professional Advice for Future Instructors</p>
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
              <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter text-gray-900">Call Training Team</h3>
              <p className="text-gray-500 font-medium mb-8 italic">Discuss your instructor training requirements.</p>
              
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

export default AdiPart2Page;
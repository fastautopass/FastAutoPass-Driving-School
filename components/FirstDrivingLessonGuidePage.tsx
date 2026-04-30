import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import Schema from './Schema';
import { getBreadcrumbSchema, getArticleSchema } from '../lib/schemaLibrary';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import RecentPasses from './RecentPasses';
import ReviewsSlider from './ReviewsSlider';

import SEO from './SEO';

const FirstDrivingLessonGuidePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  React.useEffect(() => {
    // window.scrollTo(0, 0); // optional
  }, []);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "What happens in my first driving lesson?",
      answer: "Your instructor will start by checking your provisional licence and performing a basic eyesight check. You'll then be introduced to the car's controls in a quiet, safe residential area. The goal is to get you comfortable with the seating position, mirrors, and basic moving and stopping techniques without the stress of busy traffic."
    },
    {
      question: "Do I need my provisional licence for my first lesson?",
      answer: "Yes, it is a legal requirement for your instructor to verify your physical provisional driving licence and your online driving record check code before you can reach the driver's seat. We cannot begin any driving tuition until these documents have been checked and confirmed. Please have them ready to ensure a smooth start."
    },
    {
      question: "Will I drive on the road straight away?",
      answer: "We aim to get you behind the wheel as quickly as possible, but we always prioritize your safety. For complete beginners, your first drive will be on quiet 'nursery' roads with minimal traffic. As your control and confidence grow, we’ll naturally move onto more complex residential streets and gradually introduce busier local roads."
    },
    {
      question: "What if I feel nervous before my lesson?",
      answer: (
        <>
          It is completely normal to feel apprehensive, especially if you are new to driving. Our instructors are trained to be calm, patient, and reassuring. We take everything at a pace that feels comfortable for you, starting in low-pressure areas to help you settle in. You can also read more about our <Link to="/nervous-driver-lessons" className="text-red-600 font-bold hover:underline">nervous driver support</Link> for extra peace of mind.
        </>
      )
    },
    {
      question: "What will my instructor teach me first?",
      answer: "The very first stage is usually the 'cockpit drill,' ensuring you can adjust your seat, headrest, and mirrors correctly for maximum safety and visibility. You'll then learn about the foot pedals, steering, and how to use the handbrake before being guided through the steps to start the engine and move the car off safely."
    },
    {
      question: "How long is a driving lesson?",
      answer: "We generally recommend 2-hour sessions as they provide much better value and learning momentum compared to 1-hour lessons. Longer sessions allow us to travel to more varied road types and give you steady practice time without having to cut the session short just as you're starting to build confidence and rhythm."
    },
    {
      question: "Do lessons follow the same structure every time?",
      answer: "While we have a structured syllabus to cover, each lesson is adapted to your progress. Every session starts with a quick briefing to set goals and ends with feedback and a plan for next time. The middle portion is always dedicated to active driving practice, focusing on the specific skills you need to develop that day."
    },
    {
      question: "What happens if I make mistakes?",
      answer: "Mistakes like stalling or poor positioning are an essential part of the learning process. Your instructor is there to guide you through them safely and without judgment. We use these moments as calm learning opportunities, helping you understand what happened and how to handle the situation better next time you encounter it."
    },
    {
      question: "Will I learn on local Bradford and Leeds roads?",
      answer: "Absolutely. We believe in learning on the roads you'll actually be driving on once you pass. Whether it’s handling the hills of Bradford or the busy urban junctions of Leeds, we use real local routes to build your familiarity and ensure you're fully prepared for the specific challenges of your local environment."
    },
    {
      question: "Do lessons include roundabouts and junctions?",
      answer: "Yes, these are vital skills for any driver. We introduce junctions early on and move onto roundabouts once you have good control over your speed and steering. We’ll practice a variety of types—from quiet residential mini-roundabouts to larger, multi-lane junctions—until they feel like second nature to you."
    },
    {
      question: "When will I start practising manoeuvres?",
      answer: "We usually introduce manoeuvres like parallel parking or reversing into a bay once you have mastered basic car control and road positioning. We don't save them all for the end; instead, we integrate them throughout your training so you have plenty of time to refine your accuracy and observation skills before test day."
    },
    {
      question: "Do you offer both automatic and manual lessons?",
      answer: (
        <>
          Yes, we have instructors across West Yorkshire covering both formats. <Link to="/manual-driving-lessons" className="text-red-600 font-bold hover:underline">Manual lessons</Link> give you more control and a full licence, while <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic lessons</Link> are often faster to learn as there is no clutch to manage. Your instructor can help you decide which route is best for your goals.
        </>
      )
    },
    {
      question: "When will I be ready for a mock driving test?",
      answer: (
        <>
          Mock tests are introduced once you have covered the full driving syllabus and are making safe, independent decisions. We use these to simulate real test conditions and find any remaining areas that need focus. You can view our <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock test checklist</Link> to see how we evaluate your readiness for the official DVSA exam.
        </>
      )
    },
    {
      question: "How do I enquire about driving lessons?",
      answer: (
        <>
          Getting started is simple. You can use our online <Link to="/contact" className="text-red-600 font-bold hover:underline">enquiry form</Link>, send us a message on WhatsApp, or give our booking team a call. We’ll just need to know your location, preference for manual or automatic, and your general availability to match you with the right instructor.
        </>
      )
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans first-lesson-page">
      <SEO 
        title="What Happens in a Driving Lesson? | FastAutoPass"
        description="Understand exactly what to expect in your driving lessons. From your very first session to test preparation, we explain the journey to becoming a safe driver."
        canonical="https://fastautopass.co.uk/what-happens-in-a-driving-lesson"
      />
      <Schema type="Article" data={getArticleSchema(
        "What Happens in a Driving Lesson? A Complete Guide",
        "Step-by-step guide on what to expect during your first driving lesson in Bradford or Leeds. Covers pickup, safety checks, and basic car controls.",
        "https://fastautopass.co.uk/what-happens-in-a-driving-lesson",
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1600"
      )} />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "First Lesson Guide", item: "https://fastautopass.co.uk/what-happens-in-a-driving-lesson" }
      ])} />
      <Schema type="FAQPage" data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": typeof faq.answer === 'string' ? faq.answer : "Please visit our website for more details on this topic."
          }
        }))
      }} />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-6 lg:py-8 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="lg:w-7/12 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-black mb-2 leading-tight tracking-tighter uppercase italic text-white uppercase italic">
                What Happens in a <br/><span className="text-red-500">Driving Lesson?</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-300 font-medium mb-3 leading-relaxed max-w-2xl mx-auto lg:mx-0 italic">
                Whether it's your first time or your tenth, understanding what to expect helps remove the nerves. We provide structured, calm, and productive training across Bradford and Leeds to help you become a safe driver.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
                <a href="#booking" className="w-full sm:w-auto bg-red-600 text-white px-10 py-4 rounded-full font-black text-lg text-center hover:bg-red-700 transition-all uppercase italic tracking-widest shadow-xl">
                  Send Enquiry
                </a>
                <button 
                  onClick={() => setShowCallPopup(true)}
                  className="w-full sm:w-auto bg-white text-gray-900 px-10 py-4 rounded-full font-black text-lg text-center hover:bg-gray-100 transition-all uppercase italic tracking-widest shadow-xl"
                >
                  Call Now
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center lg:justify-start opacity-80 scale-90 origin-left">
                <TrustBadges dark minimal />
              </div>
            </div>
            <div className="lg:w-5/12 w-full" id="booking">
              <BookingForm areaName="Bradford & Leeds" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-1 lg:py-4 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-5 lg:p-6 shadow-sm italic text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-black mb-1.5 italic uppercase tracking-tighter text-gray-900 leading-tight">
              Honest, Structured <span className="text-red-600">Training</span>
            </h2>
            <div className="text-gray-600 font-medium leading-relaxed space-y-2 text-sm lg:text-base italic">
              <p>
                A driving lesson with us is far more than just "driving around" for an hour. It is a structured learning session with a clear purpose, designed to move you closer to your goal of being a safe, independent driver. We don't believe in time-wasting; every minute spent in the car is focused on building your awareness and skill.
              </p>
              <p>
                Whether you are taking <Link to="/manual-driving-lessons" className="text-red-600 font-bold hover:underline">manual driving lessons</Link> or prefer the streamlined path of <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic driving lessons</Link>, your instructor will adapt each session to your current confidence and ability. There is no one-size-fits-all script—we move at the pace that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS SECTION */}
      <section className="py-1 lg:py-4 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-3">
            <p className="text-gray-400 font-black uppercase tracking-widest text-[9px] italic mb-1">How we structure your time</p>
            <h2 className="text-2xl lg:text-3xl font-black mb-1 italic uppercase tracking-tighter text-gray-900 leading-tight">
              What a Lesson <span className="text-red-600">Actually Includes</span>
            </h2>
            <p className="text-gray-500 font-medium italic text-sm max-w-2xl mx-auto mb-4">
              Most lessons follow a simple, four-part structure so you always know exactly where you are in your learning journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 italic font-sans">
            {[
              { title: "The Briefing", desc: "A short start-of-lesson conversation to check what we covered last time, how confident you feel, and what our specific goal is for today's session." },
              { title: "Skills Practice", desc: "The bulk of your time is spent driving on real roads, covering skills like moving off, junctions, roundabouts, mirrors, positioning, or route planning." },
              { title: "Review & Feedback", desc: "A calm, non-judgmental review of your performance. We discuss what went well and identify any specific areas that need more attention next time." },
              { title: "Next Steps", desc: "We wrap up with a clear plan for your next lesson. You'll leave understanding exactly what you've achieved and what we will be working towards next." }
            ].map((box, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-red-600 font-black text-2xl italic leading-none mb-1">0{i + 1}</div>
                <h3 className="text-xs font-black mb-1 uppercase text-gray-900">{box.title}</h3>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-1 lg:py-4 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* FIRST LESSON */}
            <div className="lg:w-1/2 bg-gray-50 p-5 lg:p-6 rounded-[2rem] border border-gray-100">
              <h2 className="text-xl font-black mb-2 italic uppercase tracking-tighter text-gray-900">
                Your <span className="text-red-600">First Lesson</span>
              </h2>
              <p className="text-sm text-gray-600 font-medium mb-3 italic">We ensure you feel safe and comfortable from the moment you sit down. No rushing, just steady progress.</p>
              <ul className="space-y-3">
                {[
                  { label: "Licence and eyesight verification", desc: "Checking your provisional licence and reading a plate from 20m." },
                  { label: "Basic car controls", desc: "Learning the cockpit drill, pedals, and steering in a static car." },
                  { label: "Moving off and stopping safely", desc: "Actually moving the vehicle for the first time in a quiet area." },
                  { label: "Building comfort on quiet roads", desc: "Managing low speeds without the pressure of other traffic." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] flex-shrink-0 mt-0.5 font-black italic">✓</div>
                    <div>
                      <span className="text-[14px] font-black text-gray-900 italic block leading-tight mb-0.5">{item.label}</span>
                      <span className="text-[12px] text-gray-500 font-medium italic block">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* ONGOING TRAINING */}
            <div className="lg:w-1/2 bg-gray-900 text-white p-5 lg:p-6 rounded-[2rem] border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-24 h-24 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              </div>
              <h2 className="text-xl font-black mb-2 italic uppercase tracking-tighter text-white relative z-10">
                Ongoing <span className="text-red-500">Training</span>
              </h2>
              <p className="text-sm text-gray-400 font-medium mb-3 italic relative z-10">Building the complex skills and independent awareness needed to be fully test-ready and safe.</p>
              <ul className="space-y-3 relative z-10">
                {[
                  { label: "Junctions, roundabouts, and parking", desc: "Mastering the physical manoeuvres and road rules step-by-step." },
                  { label: "Hazard awareness and planning", desc: "Looking further ahead to anticipate what other road users might do." },
                  { label: "Local route familiarity", desc: "Getting comfortable with the actual roads used in local test centres." },
                  { label: "Mock test preparation", desc: "Simulating test conditions with honest feedback on your readiness." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] flex-shrink-0 mt-0.5 font-black italic">✓</div>
                    <div>
                      <span className="text-[14px] font-black text-white italic block leading-tight mb-0.5">{item.label}</span>
                      <span className="text-[12px] text-gray-400 font-medium italic block">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADAPTATION SECTION */}
      <section className="py-1 lg:py-4 bg-gray-50 border-y border-gray-100 italic">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-4">
            <h2 className="text-2xl lg:text-3xl font-black mb-1 italic uppercase tracking-tighter text-gray-900 leading-tight">
              How Your Lesson Is <span className="text-red-600">Adapted to You</span>
            </h2>
            <p className="text-gray-500 font-medium italic text-sm max-w-2xl mx-auto">
              Our lessons are not one-size-fits-all; they are carefully adjusted around how you are progressing and how you feel behind the wheel.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Your Confidence", desc: "If you feel nervous, we start with quiet residential roads and build up the intensity at a pace you feel safe with." },
              { title: "Your Ability", desc: "Every lesson is based on what you can actually do right now, not a one-size-fits-all script that holds you back or rushes you." },
              { title: "Your Route", desc: "Manual and automatic routes focus on different areas—such as clutch finesse for manual or road planning for automatic." },
              { title: "Your Progress", desc: "We track every achievement so you can see your development over time and know exactly what is improving week by week." }
            ].map((box, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-[10px] font-black mb-1 uppercase text-red-600 tracking-widest">{box.title}</h3>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESSION SECTION */}
      <section className="py-1 lg:py-4 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tighter text-gray-900 leading-tight">
            How You <span className="text-red-600">Improve Over Time</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 italic justify-center mt-4">
            {[
              { title: "Control", desc: "Smoother steering, braking, pedals, and clutch/gear control if manual." },
              { title: "Awareness", desc: "Mirrors, positioning, signs, road users, and planning ahead." },
              { title: "Confidence", desc: "Less hesitation, safer decisions, and more independence behind the wheel." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm flex-1">
                <h4 className="text-[11px] font-black uppercase text-red-600 mb-1 tracking-widest">{item.title}</h4>
                <p className="text-[12px] text-gray-600 font-bold leading-tight italic uppercase tracking-tighter">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSITION & SOCIAL PROOF */}
      <div className="container mx-auto px-4 max-w-4xl text-center mt-4 mb-2">
        <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] italic">
          Here’s what learners experience when they start lessons with us.
        </p>
      </div>

      {/* What Learners Say */}
      <ReviewsSlider />

      {/* Recent Passes – Bradford & Leeds */}
      <RecentPasses areaName="Bradford & Leeds" />

      {/* LOCAL CONTEXT SECTION */}
      <section className="py-1 lg:py-4 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-6 items-center text-center lg:text-left">
            <div className="lg:w-1/2">
              <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Learning in <br/><span className="text-red-600">Bradford and Leeds</span>
              </h2>
              <div className="text-gray-600 font-medium space-y-2 text-sm lg:text-base italic">
                <p>
                  Bradford and Leeds have some of the most varied roads in West Yorkshire. To be a safe driver, you need practice on steep hills, complex junctions, multi-lane roundabouts, and narrow residential streets.
                </p>
                <p>
                  Local practice helps reduce surprises on test day because you'll already be familiar with the tricky urban loop systems and residential hazards. Our lessons focus on real-world driving skill, not just test preparation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
                <Link to="/bradford" className="text-[10px] font-black uppercase text-red-600 hover:underline tracking-widest italic">Bradford areas</Link>
                <Link to="/leeds" className="text-[10px] font-black uppercase text-red-600 hover:underline tracking-widest italic">Leeds areas</Link>
                <Link to="/driving-test-centres" className="text-[10px] font-black uppercase text-red-600 hover:underline tracking-widest italic">Driving test centres</Link>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 italic">
              {[
                { title: "Hills & Inclines", desc: "Mastering clutch control and smooth starts on Bradford's hilly terrain." },
                { title: "Complex Junctions", desc: "Navigating busy Leeds intersections with total confidence." },
                { title: "Residential Routes", desc: "Dealing with parked cars, tight gaps, and hazards on local streets." },
                { title: "Real-World Experience", desc: "Building the instinct for heavy traffic and changing conditions." }
              ].map((box, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-[11px] font-black mb-1 uppercase text-gray-900 leading-tight tracking-widest">{box.title}</h3>
                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORRIES SECTION */}
      <section className="py-1 lg:py-6 bg-gray-900 text-white border-y-8 border-red-600 italic relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <p className="text-red-500 font-black uppercase tracking-widest text-[10px] mb-2">Supportive Training</p>
          <h2 className="text-3xl lg:text-4xl font-black mb-2 uppercase tracking-tighter italic">
            Common Worries <span className="text-red-500">Before a Driving Lesson</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:bg-white/[0.08] transition-colors">
              <h3 className="text-xs font-black uppercase text-red-500 mb-3 tracking-widest">What if I'm nervous?</h3>
              <p className="text-[12px] text-gray-400 font-medium italic leading-relaxed">It's completely normal to feel apprehensive. We take things at your pace, starting in very quiet areas until you feel safe and ready to move forward.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:bg-white/[0.08] transition-colors">
              <h3 className="text-xs font-black uppercase text-red-500 mb-3 tracking-widest leading-tight">What if I make mistakes?</h3>
              <p className="text-[12px] text-gray-400 font-medium italic leading-relaxed">Mistakes like stalling or poor positioning are an essential part of learning. Your instructor will help you recover calmly and turn it into a learning moment.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:bg-white/[0.08] transition-colors">
              <h3 className="text-xs font-black uppercase text-red-500 mb-3 tracking-widest">What if I learn slower?</h3>
              <p className="text-[12px] text-gray-400 font-medium italic leading-relaxed">Everyone learns at their own speed. We don't rush you or hold you back—every lesson is adjusted according to your actual progress on the day.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:bg-white/[0.08] transition-colors">
              <h3 className="text-xs font-black uppercase text-red-500 mb-3 tracking-widest leading-tight">Busy roads early?</h3>
              <p className="text-[12px] text-gray-400 font-medium italic leading-relaxed">Never. We only introduce harder roads and complex junctions once you are fully prepared and in control of the car, ensuring your safety at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL NEED SECTION */}
      <section className="py-1 lg:py-4 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-start">
            <div className="md:w-1/2">
              <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tighter text-gray-900 leading-tight">
                What You'll Need <span className="text-red-600">For Your Lesson</span>
              </h2>
              <p className="text-gray-600 font-medium text-[15px] leading-relaxed italic">
                You don't need to overprepare for your driving lessons, but a few simple things will help the session run smoothly and keep you focused on the road.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-5 lg:p-6 shadow-sm">
                <ul className="space-y-4">
                  {[
                    "Provisional driving licence card",
                    "Glasses or contact lenses (if prescribed for driving)",
                    "Comfortable, flat shoes with a thin sole",
                    "Be ready to start a few minutes before pickup",
                    "A positive mindset—no previous experience required"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] flex-shrink-0 font-black">✓</div>
                      <span className="text-[13px] font-bold text-gray-700 italic">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET THE MOST OUT OF LESSONS SECTION */}
      <section className="py-1 lg:py-4 bg-gray-50 border-y border-gray-100 italic">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-start">
            <div className="md:w-1/2">
              <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tighter text-gray-900 leading-tight">
                How to Get the Most <span className="text-red-600">Out of Your Lessons</span>
              </h2>
              <p className="text-gray-600 font-medium text-[14px] leading-relaxed italic">
                Progress is not just about time spent in the car. It also depends on consistency, asking questions when you're unsure, and focusing effort on the skills that need the most work. 
                Check our <Link to="/how-many-driving-lessons-do-i-need" className="text-red-600 font-bold hover:underline">lesson estimate guide</Link> for realistic progress timelines.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="space-y-4">
                {[
                  { title: "Keep lessons consistent", desc: "Try to have at least one or two sessions every week to keep your momentum." },
                  { title: "Ask questions early", desc: "If you don't understand why something happened, ask while it's fresh in your mind." },
                  { title: "Focus on weak areas", desc: "Don't avoid the things that feel hard; spend more time on them to build mastery." },
                  { title: "Avoid rushing your test", desc: "Wait until your instructor agrees you are safely and consistently test-ready." },
                  { title: "Use private practice wisely", desc: "Only supplement lessons with private practice if it's safe and suitable for your level." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-red-600 font-black text-2xl italic leading-none opacity-20">0{i + 1}</div>
                    <div>
                      <h4 className="text-[12px] font-black uppercase text-gray-900 mb-0.5 tracking-tight">{item.title}</h4>
                      <p className="text-[11px] text-gray-500 font-medium leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-2 lg:py-4 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-2">
            <h2 className="text-2xl lg:text-3xl font-black mb-1 italic uppercase tracking-tighter text-gray-900 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 font-black uppercase tracking-widest text-[9px] italic mb-2">Clear answers about what happens in a driving lesson</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm italic">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-[13px] font-black uppercase italic text-gray-900 group-hover:text-red-600 transition-colors tracking-tight leading-tight">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all ${openFaq === i ? 'bg-red-600 border-red-600 text-white rotate-45' : 'text-gray-300'}`}>
                    <span className="text-xl font-black">+</span>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="p-6 bg-gray-50 border-t border-gray-100 animate-slideDown">
                    <div className="text-gray-600 font-medium leading-relaxed text-sm italic">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
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
              <p className="text-gray-500 font-medium mb-8 italic">Our team is available to discuss your learning path.</p>
              
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

export default FirstDrivingLessonGuidePage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import ReviewsSlider from './ReviewsSlider';
import RecentPasses from './RecentPasses';
import Schema from './Schema';
import { getServiceSchema, getBreadcrumbSchema, getLocalBusinessSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const ManualLessonsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Are manual driving lessons harder than automatic?",
      answer: "Manual driving does take a little more coordination to start with because you're managing the clutch and gear stick yourself. However, most students find that once they get the hang of the timing, it becomes second nature. We break everything down into simple steps so you're never juggling too much at once while you're learning."
    },
    {
      question: "How many manual lessons do I need?",
      answer: "Every learner is different, so there isn't a fixed number that applies to everyone. The national average is around 45 hours of professional training, but we focus on your individual progress to help you get test-ready as efficiently as possible. We track your skills every week so you always know exactly where you stand and what's left to master."
    },
    {
      question: "What is clutch control?",
      answer: "Clutch control is simply the skill of using the clutch pedal to manage how the engine's power reaches the wheels. It's the key to smooth pull-aways and low-speed manoeuvres like reversing or parking. We'll spend plenty of time in quiet areas helping you find the 'biting point' until you can move the car effortlessly every single time."
    },
    {
      question: "What happens if I stall?",
      answer: "Stalling is a completely normal part of learning to drive a manual car—even experienced drivers do it occasionally! If you stall, our instructors will help you stay calm, secure the car, and get moving again safely. In a driving test, a single stall is usually only a minor fault as long as you handle it correctly and keep the car under control."
    },
    {
      question: "Can I switch from automatic to manual?",
      answer: "Yes, you can certainly make the switch, though you'll need to learn the extra physical skills of gear changes and clutch management. If you already have some road experience in an automatic, you'll likely find the transition easier because you can focus purely on the mechanical side of the car while we guide you through the process."
    },
    {
      question: "Can I drive automatic after passing manual?",
      answer: "Absolutely. Passing a manual driving test gives you a 'full' UK driving licence, which covers both manual and automatic vehicles. This gives you total flexibility in the future, whether you're buying your first car, renting one on holiday, or driving a van for work. It's one of the biggest advantages of choosing the manual route."
    },
    {
      question: "Do manual lessons take longer?",
      answer: "Initially, you might spend a few extra hours mastering the gears and clutch compared to an automatic learner. However, once those mechanical skills become muscle memory, your progress on the actual road usually mirrors any other type of training. The long-term benefit of being able to drive any car often outweighs the small amount of extra time at the start."
    },
    {
      question: "Are manual lessons suitable for nervous learners?",
      answer: (
        <>
          Yes, they are. While there is more to think about at first, a patient and supportive instructor can make manual driving feel very manageable even if you're feeling anxious. We stay in quiet residential areas until you feel completely comfortable with the car's controls. If you ever feel it's not the right fit, you can easily switch to our <Link to="/automatic-driving-lessons" className="font-bold text-red-600 hover:underline">automatic driving lessons</Link>.
        </>
      )
    },
    {
      question: "Do you teach hill starts?",
      answer: "Hill starts are a vital part of driving, especially in hilly areas like Bradford and Leeds. We'll teach you how to coordinate the handbrake, clutch, and accelerator so you can move off smoothly on any incline without rolling back. By the time you take your test, you'll be able to handle steep junctions with total confidence."
    },
    {
      question: "Do you offer manual lessons in Bradford?",
      answer: "Yes, we have local instructors providing manual tuition throughout Bradford, including areas like Thornbury, Heaton, Wibsey, and Wyke. Because our instructors live and work locally, they know the specific junctions and road conditions you'll face, ensuring you're fully prepared for your practical test at the Bradford test centres."
    },
    {
      question: "Do you offer manual lessons in Leeds?",
      answer: "We cover the whole of Leeds, from the city centre out to places like Horsforth, Harehills, and Pudsey. Our instructors have deep local knowledge of the Leeds road networks and will take you on the routes examiners frequently use, making sure you're comfortable with everything from busy multi-lane roundabouts to quiet residential streets."
    },
    {
      question: "Can I do intensive manual lessons?",
      answer: (
        <>
          If you're looking to pass your test quickly, we offer <Link to="/intensive-driving-courses" className="font-bold text-red-600 hover:underline">intensive driving courses</Link> for manual learners. These courses allow you to consolidate your training into a shorter window, which can help some students retain information better. We recommend an initial assessment to see if this fast-track approach is the right choice for you.
        </>
      )
    },
    {
      question: "Do you cover test routes?",
      answer: (
        <>
          Yes, we believe practicing on local test routes is one of the best ways to prepare. We'll guide you through the specific junctions, roundabouts, and dual carriageways that examiners often use. To make sure you're truly ready, we also recommend taking a <Link to="/mock-driving-tests" className="font-bold text-red-600 hover:underline">mock driving test</Link> with us to experience test-day conditions before the real thing.
        </>
      )
    },
    {
      question: "How do I enquire about manual lessons?",
      answer: (
        <>
          The best way to get started is to fill out the <Link to="/contact" className="font-bold text-red-600 hover:underline">enquiry form</Link> on this page or give us a call. Our friendly team will chat through your needs, check which manual instructors are available in your specific area, and help you get your first lesson booked in at a time that works for you.
        </>
      )
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans manual-lessons-page">
      <SEO 
        title="Manual Driving Lessons Bradford & Leeds | FastAutoPass Driving School"
        description="Professional manual driving lessons in Bradford and Leeds. Master clutch control and gear changes with our DVSA approved instructors. Full license flexibility and local test route expertise."
        canonical="https://fastautopass.co.uk/manual-driving-lessons"
      />
      <Schema type="LocalBusiness" data={getLocalBusinessSchema()} />
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "Manual Driving Lessons",
          "Comprehensive manual driving lessons in Bradford and Leeds. Master the clutch and gears with patient, local DVSA approved instructors.",
          "https://fastautopass.co.uk/manual-driving-lessons"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Manual Driving Lessons", item: "https://fastautopass.co.uk/manual-driving-lessons" }
        ])} 
      />
      <Schema 
        type="FAQPage" 
        data={{
          "mainEntity": faqs.slice(0, 5).map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": typeof faq.answer === 'string' ? faq.answer : "Professional manual driving lessons in Bradford and Leeds."
            }
          }))
        }} 
      />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-2 lg:py-4 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="lg:w-7/12 text-center lg:text-left mb-1 lg:mb-0">
              <h1 className="text-4xl lg:text-7xl font-black mb-1 leading-tight tracking-tighter uppercase italic drop-shadow-2xl">
                Manual Driving <br/><span className="text-red-500">Lessons</span> in <br/>Bradford & Leeds
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 font-medium italic mb-2 max-w-2xl mx-auto lg:mx-0">
                Learn manual driving with confidence across Bradford and Leeds. We'll help you build clutch control, smooth gear changes, road awareness, and the confidence to drive without licence restrictions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-2">
                <a href="#availability" className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-xl text-center hover:bg-red-700 shadow-2xl transition-all uppercase italic tracking-widest w-full sm:w-auto">
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
            <div className="lg:w-5/12 w-full" id="availability">
              <BookingForm areaName="Manual Lessons" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-2 lg:py-3 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl lg:text-5xl font-black mb-1.5 italic uppercase tracking-tighter text-gray-900 leading-tight">
              Manual Driving Lessons Overview
            </h2>
            <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-1.5 mx-auto italic">
              <p>
                Many learners choose manual driving because it provides total control over the vehicle and complete licence flexibility. At FastAutoPass Driving School, we focus on helping you build your confidence gradually, starting with the basics of clutch management and smooth gear transitions in a calm environment.
              </p>
              <p>
                Whether you are looking for regular weekly tuition or a faster route via our <Link to="/intensive-driving-courses" className="text-red-600 font-bold hover:underline">intensive driving courses</Link>, our instructors are here to support you. We also provide realistic <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving tests</Link> to ensure you are 100% prepared for the practical exam.
              </p>
              <p>
                Passing your test in a manual car means you are qualified to drive both manual and automatic vehicles for life. This long-term flexibility is ideal whether you're buying your first car or driving for work, as you'll never be restricted by the type of gearbox a vehicle has.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY LEARN MANUAL */}
      <section className="py-2 lg:py-3 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-2">
            <h2 className="text-3xl lg:text-5xl font-black mb-1.5 italic uppercase tracking-tighter text-gray-900 leading-tight">
              Why Learn Manual Driving?
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-2"></div>
            <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto italic">
              Mastering a manual gearbox opens up more opportunities and provides a deeper connection to your vehicle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: "Full Licence Flexibility", desc: "A manual licence allows you to drive both manual and automatic cars, giving you total freedom when choosing your future vehicles." },
              { title: "Better Control", desc: "Gain superior control in challenging conditions, especially when handling steep hills or navigating heavy stop-start traffic." },
              { title: "Career Opportunities", desc: "Many work vehicles and commercial vans are still manual. Having a manual licence ensures you're ready for any employment requirement." },
              { title: "Gears and Speed Mastery", desc: "Develop a stronger understanding of how speed and engine power work together, resulting in a more efficient driving style." },
              { title: "Lower Costs", desc: "Manual cars are typically more affordable to purchase and maintain, making them a popular and cost-effective choice for new drivers." },
              { title: "Driving Connectivity", desc: "Many drivers prefer the mechanical feel of a manual car, finding it more engaging and predictable on long-distance or varied journeys." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col min-h-[160px]">
                <h3 className="text-xl font-black mb-4 uppercase italic text-gray-900 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed italic text-sm mt-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <ReviewsSlider />

      {/* RECENT PASSES */}
      <RecentPasses areaName="Bradford & Leeds" />

      {/* HOW WE TEACH MANUAL */}
      <section className="py-2 lg:py-3 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="max-w-3xl mb-2">
            <h2 className="text-3xl lg:text-5xl font-black mb-1.5 italic uppercase tracking-tighter text-gray-900">
              How FastAutoPass Driving School Teaches Manual Driving
            </h2>
            <div className="h-1 w-20 bg-red-600 mb-2"></div>
            <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
              We use a step-by-step approach that removes the anxiety of learning gears, helping you build your skills steadily until clutch control becomes second nature.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { 
                title: "Quiet Area Foundation", 
                desc: "We begin in quiet residential roads to master the 'biting point' and moving off smoothly before introducing busier road conditions." 
              },
              { 
                title: "Clutch & Gear Flow", 
                desc: "Learning how to coordinate gear changes with your speed perfectly, ensuring smooth transitions without jerking the car." 
              },
              { 
                title: "Junction Mastery", 
                desc: "Applying your gear skills to junctions, roundabouts, and traffic lights, helping you manage the mechanics while staying safe." 
              },
              { 
                title: "Real Road Readiness", 
                desc: "Moving into the actual routes used during tests across Bradford and Leeds to ensure you're comfortable with real driving scenarios." 
              }
            ].map((feature, i) => (
              <div key={i} className="group">
                <h3 className="text-xl font-black mb-4 uppercase italic text-gray-900 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed italic text-sm border-l-4 border-gray-100 pl-6 group-hover:border-red-600 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON CHALLENGES */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <h2 className="text-3xl lg:text-5xl font-black mb-3 italic uppercase tracking-tighter text-gray-900 text-center">
            Common Manual Driving Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: "Stalling", desc: "It's a normal part of learning! We teach you a calm restart procedure so you can get moving again safely without feeling pressured." },
              { title: "Hill Starts", desc: "Master the balance between the handbrake, clutch, and gas to move off perfectly on any gradient without rolling back." },
              { title: "Gear Confusion", desc: "We simplify the gear layout and provide clear reference points so you always know which gear to use without looking down." },
              { title: "Stop-Start Traffic", desc: "Learning how to manage the clutch smoothly in heavy traffic to avoid fatigue and maintain steady control in busy urban areas." },
              { title: "Junction Hesitation", desc: "Building the confidence to make safe decisions at busy intersections while managing your gears and observations simultaneously." },
              { title: "Clutch Control Nerves", desc: "Developing a 'feel' for the biting point until it becomes muscle memory, removing the worry about move-offs and slow manoeuvres." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm min-h-[160px]">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 font-black italic border border-red-100 text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-black mb-2 uppercase italic text-gray-900 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed text-sm italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="py-2 lg:py-4 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-2 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Manual Driving Lessons in <br/><span className="text-red-600">Bradford & Leeds</span>
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-1.5 italic">
                <p>
                  We have local road knowledge across Bradford and Leeds. From the busy multi-lane roundabouts at Thornbury to the complex junctions in Leeds city centre, we'll practice on the steady routes used during tests.
                </p>
                <p>
                  Whether it's the hills of Wibsey or the residential loops in Pudsey, you'll be fully prepared for West Yorkshire's unique driving conditions. We integrate local routes into every lesson, making sure you're comfortable with the <Link to="/driving-test-centres" className="text-red-600 font-bold hover:underline">test centres</Link> and surrounding roads before your big day.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-red-600/30 transition-all"></div>
              <h3 className="text-xl font-black uppercase italic mb-8 relative z-10">Local Road Knowledge</h3>
              <ul className="space-y-4 relative z-10">
                {[
                  "Complex urban junctions and roundabouts",
                  "Major routes across West Yorkshire",
                  "One-way systems in Leeds city centre",
                  "Steep residential hills and tight turns",
                  "Real roads used during practical tests",
                  "Busy town centres and residential hubs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest italic text-gray-300">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <h2 className="text-3xl lg:text-5xl font-black mb-3 italic uppercase tracking-tighter text-gray-900 text-center leading-tight">
            Who Manual Lessons Are For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: "Complete Beginners", desc: "Those starting from scratch who want the complete flexibility of a full UK manual licence." },
              { title: "Flexibility Seekers", desc: "Learners who want to ensure they aren't restricted to only driving automatic cars in the future." },
              { title: "Career Focused", desc: "Drivers needing a manual licence for work vehicles, commercial roles, or specific job requirements." },
              { title: "Automatic Switchers", desc: "Learners moving from automatic to manual to gain broader driving capabilities and understanding." },
              { title: "Nervous Learners", desc: "Students who want a patient, step-by-step approach to mastering the gear and clutch mechanics." },
              { title: "Long-Term Control", desc: "Those who prefer the mechanical engagement and braking control a manual car provides on hills." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col min-h-[160px]">
                <h3 className="text-lg font-black mb-4 uppercase italic text-red-600 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm italic mt-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUAL VS AUTOMATIC */}
      <section className="py-4 lg:py-6 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-2 italic uppercase tracking-tighter text-gray-900 leading-tight">
            Not Sure Whether Manual or Automatic Is Right for You?
          </h2>
          <p className="text-base text-gray-600 font-medium leading-relaxed italic mb-3 max-w-3xl mx-auto">
            Manual gives you more licence flexibility, while automatic can feel simpler for some learners. If you're unsure which route suits you best, our comparison guide explains the difference clearly.
          </p>
          <Link to="/automatic-vs-manual-driving-lessons" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-black text-lg hover:bg-red-600 hover:scale-105 active:scale-95 transition-all shadow-xl uppercase italic tracking-widest">
            Compare Manual vs Automatic Lessons
          </Link>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="py-4 lg:py-6 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-4">
            <h2 className="text-2xl lg:text-4xl font-black mb-1.5 italic uppercase tracking-tighter text-gray-900">
              Explore More Driving Services
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Tailored training for every stage of your journey</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
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
            <Link to="/mock-driving-tests" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Mock Driving Tests
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-4 lg:py-6 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-4 lg:mb-6">
            <h2 className="text-3xl lg:text-5xl font-black mb-2 italic uppercase tracking-tighter text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 font-medium italic mb-4">Useful info. No jargon. Everything you need to know about manual lessons.</p>
          </div>
          <div className="space-y-3">
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
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CALL POPUP */}
       {showCallPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-slideUp">
            <div className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter text-gray-900">Call Our Team</h3>
              <p className="text-gray-500 font-medium mb-8 italic">We're here to help you start your manual driving journey.</p>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="block w-full bg-red-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl uppercase italic tracking-widest"
                >
                  {CONTACT_INFO.phone}
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

export default ManualLessonsPage;

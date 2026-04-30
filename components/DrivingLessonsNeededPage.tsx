import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import RecentPasses from './RecentPasses';
import ReviewsSlider from './ReviewsSlider';
import Schema from './Schema';
import { getArticleSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const DrivingLessonsNeededPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  React.useEffect(() => {
    // window.scrollTo removed if needed
  }, []);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "What is the average number of lessons needed to pass?",
      answer: "While every learner is different, the DVSA suggests that most people need around 45 hours of professional tuition plus an additional 22 hours of private practice. At FastAutoPass, we focus on helping you reach the required standard efficiently, ensuring you feel confident on busy Bradford and Leeds roads without wasting time on unnecessary sessions."
    },
    {
      question: "Do automatic learners need fewer lessons?",
      answer: (
        <>
          In many cases, yes. Automatic learners often progress faster because they don't have to master the complexity of clutch control and manual gear changes. This allows them to focus on road positioning and hazard perception much sooner. You can explore our <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic driving lessons</Link> to see if this path suits your timeline.
        </>
      )
    },
    {
      question: "Do manual learners need more lessons?",
      answer: (
        <>
          Manual lessons typically take longer at the start because learning to coordinate the clutch and gears takes time and practice. However, once you've mastered the mechanics, the progress pace levels out. If you're looking for flexibility, our <Link to="/manual-driving-lessons" className="text-red-600 font-bold hover:underline">manual driving lessons</Link> offer a traditional route to a full licence.
        </>
      )
    },
    {
      question: "How does age affect learning to drive?",
      answer: "Learners of all ages pass every day. Younger learners often pick up the physical controls quickly, while those starting later in life frequently bring better hazard awareness. We welcome everyone and adapt our teaching style to your individual pace. Whether you are 17 or 70, we'll help you build confidence on the road."
    },
    {
      question: "Do nervous learners need more lessons?",
      answer: (
        <>
          Anxiety can sometimes slow down progress as it takes longer to feel relaxed behind the wheel. We have a deep focus on <Link to="/nervous-driver-lessons" className="text-red-600 font-bold hover:underline">nervous driver lessons</Link> in Bradford and Leeds, using a low-pressure approach. Building a solid foundation of confidence often helps nervous learners progress more steadily in the long run.
        </>
      )
    },
    {
      question: "Can private practice reduce the number of lessons?",
      answer: "Private practice with family or friends is a great way to build up experience between professional lessons. It allows you to practice basic car control so that your time with an instructor can be spent on more complex road planning. We are happy to advise your supervisor on how best to support your learning progress."
    },
    {
      question: "How often should I take driving lessons?",
      answer: "Consistency is key to reducing the total number of hours you'll need. We recommend at least one 2-hour lesson per week. Taking longer gaps often means you spend the start of every lesson 'refreshing' what you learned previously, which can slow down your overall progress and increase the total cost of learning."
    },
    {
      question: "Is one lesson a week enough?",
      answer: (
        <>
          One 2-hour lesson a week is a good balance for most people. However, if you are in a rush, having two sessions a week can help you retain information much better. If you need to pass even faster for a job or relocation, our <Link to="/intensive-driving-courses" className="text-red-600 font-bold hover:underline">intensive driving courses</Link> might be the ideal solution.
        </>
      )
    },
    {
      question: "How do I know I’m ready for my driving test?",
      answer: (
        <>
          You are ready when you can drive consistently for a full session without the instructor needing to intervene. We use <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving tests</Link> to simulate the real exam conditions on local Bradford and Leeds test routes, ensuring you are fully prepared for the pressure of the actual driving test day.
        </>
      )
    },
    {
      question: "Should I book my test before I feel ready?",
      answer: "We advise against booking a test until your instructor agrees you have reached the required standard. Rushing into a test when you're underprepared often leads to a failure, which can damage your confidence and cost more in the long run due to additional test fees and 'keep-warm' lessons while waiting for a new slot."
    },
    {
      question: "Can mock driving tests reduce lesson numbers?",
      answer: (
        <>
          Yes, because they identify exactly where you are losing marks or feeling unsure. Rather than just driving around, a mock test allows us to target your final lessons on specific weak spots. This focused approach is far more efficient than generic lessons and gives you a much clear picture of your readiness.
        </>
      )
    },
    {
      question: "Do Bradford and Leeds roads affect how many lessons I need?",
      answer: "Local roads include complex roundabouts like Thornbury and busy junctions in Headingley. Learning to navigate these requires more focused road planning than driving in a quiet village. We'll ensure you practice on the specific types of roads used during the test so you can handle them with total confidence on the day."
    },
    {
      question: "Can intensive driving courses help me pass quicker?",
      answer: (
        <>
          Intensive courses are designed to compress your learning into a short timeframe. While they require focus, the momentum of daily driving can help some learners reach test standard in just a few weeks. It's an excellent option for those who want to get on the road quickly. Check our <Link to="/intensive-driving-courses" className="text-red-600 font-bold hover:underline">intensive driving options</Link> for more details.
        </>
      )
    },
    {
      question: "How do I enquire about lessons with FastAutoPass Driving School?",
      answer: (
        <>
          The best way to start is by filling out our <Link to="/contact" className="text-red-600 font-bold hover:underline">contact form</Link> or giving us a call. We'll discuss your goals, check instructor availability in your part of Bradford or Leeds, and help you book your first session to assess your current level and plan your journey to a licence.
        </>
      )
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans lessons-needed-page">
      <SEO 
        title="How Many Driving Lessons Do I Need to Pass? | FastAutoPass"
        description="Find out how many driving lessons you might need to pass your test in Bradford or Leeds. Learn about the factors that influence progress and how we help you get test-ready."
        canonical="https://fastautopass.co.uk/how-many-driving-lessons-do-i-need"
      />
      <Schema type="Article" data={getArticleSchema(
        "How Many Driving Lessons Do I Need to Pass?",
        "An expert guide on how many driving lessons most learners need to pass their test in Bradford and Leeds. Factors include consistency, age, and transmission type.",
        "https://fastautopass.co.uk/how-many-driving-lessons-do-i-need",
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1600"
      )} />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Lessons Needed Guide", item: "https://fastautopass.co.uk/how-many-driving-lessons-do-i-need" }
      ])} />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-6 lg:py-8 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="lg:w-7/12 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-black mb-3 leading-tight tracking-tighter uppercase italic text-white">
                How Many <span className="text-red-500">Driving Lessons</span> <br/>Do I Need to Pass?
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 font-medium mb-5 leading-relaxed max-w-2xl mx-auto lg:mx-0 italic">
                Every learner's journey is unique. Your progress depends on confidence, consistency, previous experience, and whether you choose manual or automatic. We'll help you build your skills steadily and get you test-ready with no wasted time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
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
              <div className="mt-5 flex items-center justify-center lg:justify-start opacity-80 scale-90 origin-left">
                <TrustBadges dark minimal />
              </div>
            </div>
            <div className="lg:w-5/12 w-full" id="booking">
              <BookingForm areaName="Bradford & Leeds" />
            </div>
          </div>
        </div>
      </section>

      {/* CLEAR ANSWER SECTION */}
      <section className="py-2 lg:py-4 bg-white" id="lessons-guide">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-5 lg:p-8 shadow-sm italic overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-2xl lg:text-4xl font-black mb-3 italic uppercase tracking-tighter text-gray-900 leading-tight">
                So, How Many Lessons Do <br/><span className="text-red-600">Most Learners Need?</span>
              </h2>
              <p className="text-base text-gray-600 font-medium mb-5 leading-relaxed">
                The honest truth is there is no fixed number. However, looking at national averages and our experience in Bradford and Leeds, we can provide a realistic guide for your journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Typical Range", value: "35-45 Hours", sub: "Professional Tuition" },
                  { label: "Extra Practice", value: "22 Hours", sub: "With Friends/Family" },
                  { label: "Transmission Type", value: "Manual or Automatic", sub: "Automatic may feel simpler, manual offers full licence flexibility." },
                  { label: "Consistency", value: "Regular Lessons", sub: "Steady progress" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 text-center shadow-sm flex flex-col justify-center h-full">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                    <p className="text-base font-black text-gray-900 mb-1 leading-tight">{item.value}</p>
                    <p className="text-[9px] font-bold text-red-600 uppercase italic调节 leading-tight mt-auto">{item.sub}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[10px] text-gray-500 font-bold italic text-center">
                *These figures are only a guide. Your own lesson total depends on confidence, lesson frequency, previous experience, private practice, and whether you learn in a manual or automatic car.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Learners Say */}
      <ReviewsSlider />

      {/* Recent Passes – Bradford & Leeds */}
      <RecentPasses areaName="Bradford & Leeds" />

      <div className="container mx-auto px-4 max-w-4xl text-center mb-2">
        <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] italic">
          Your progress depends on confidence, lesson frequency, previous experience, and the type of driving you choose.
        </p>
      </div>

      {/* WHY LESSON NUMBERS VARY */}
      <section className="py-2 lg:py-4 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-5/12">
              <h2 className="text-3xl lg:text-5xl font-black mb-3 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Why Your Total Hours <span className="text-red-600">Will Be Different</span>
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed italic space-y-2">
                <p className="text-sm font-bold">
                  Some learners feel natural behind the wheel immediately, while others need a few sessions to manage nerves.
                </p>
                <p className="text-sm">
                  Road conditions play a part; navigating busy Bradford hills or Leeds city centre traffic requires more situational awareness. Whether you choose <Link to="/manual-driving-lessons" className="text-red-600 font-bold hover:underline">manual</Link> or <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic</Link>, we focus on building real-world skills that make you a safe, independent driver.
                </p>
              </div>
            </div>
            <div className="lg:w-7/12 flex flex-col gap-2 italic">
              {[
                { title: "Lesson Frequency", desc: "Consistency is your best friend. Taking two hours every week is far more effective than one hour every fortnight because you spend less time recapping." },
                { title: "Previous Experience", desc: "If you've driven before, even on private land or with family, you'll pick up the physical basics of steering and pedals much faster." },
                { title: "Automatic vs Manual", desc: "Automatic can sometimes reduce the initial learning curve, but manual gives you more flexibility for the future. Choose the path that fits your confidence." },
                { title: "Local Conditions", desc: "Practicing on local Bradford or Leeds test routes builds specific confidence. Knowing exactly how a junction feels removes the fear of the unknown." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center group">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-red-600 font-black flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors text-xs">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xs font-black mb-0.5 uppercase italic text-gray-900 leading-none">{item.title}</h3>
                    <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESSION SPLIT */}
      <section className="py-2 lg:py-4 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-2">
            <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] italic mb-1">Practical advice for every learner</p>
            <h2 className="text-3xl lg:text-4xl font-black mb-1 italic uppercase tracking-tighter text-gray-900">
              What Slows Progress — And <span className="text-red-600">What Speeds It Up?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 italic">
            {/* SLOWS DOWN */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-black">!</div>
                <h3 className="text-base font-black uppercase text-gray-900">Things That Can Slow You Down</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Irregular or infrequent lessons that lead to skill fading.",
                  "Being overly nervous without addressing specific fears.",
                  "Struggling with the physical coordination of a manual gearbox.",
                  "Rushing to book a test before building independent confidence.",
                  "Having long gaps of several weeks between driving sessions."
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-gray-600 font-medium">
                    <span className="text-red-600 flex-shrink-0">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* SPEEDS UP */}
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-black">✓</div>
                <h3 className="text-base font-black uppercase text-gray-900">How to Progress Faster</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Booking double (2-hour) lessons once or twice a week.",
                  "Focusing on weak areas immediately rather than avoiding them.",
                  "Using mock driving tests to get used to the exam pressure.",
                  "Choosing automatic lessons to remove gearbox complexity.",
                  "Practicing hazard awareness on local Bradford and Leeds roads."
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-gray-700 font-medium leading-tight">
                    <span className="text-red-600 flex-shrink-0">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATE SECTION */}
      <section className="py-2 lg:py-4 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tighter text-gray-900">
            How to Get a Realistic <span className="text-red-600">Lesson Estimate</span>
          </h2>
          <p className="text-sm text-gray-600 font-medium mb-5 leading-relaxed max-w-2xl mx-auto italic">
            The best way to understand your timeline is through honesty relative to your current experience. Our instructors assess your confidence, coordination, and local road awareness to give you an estimate that fits your specific needs.
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic text-left max-w-2xl mx-auto">
            <p className="text-[11px] font-black uppercase text-gray-400 mb-3 tracking-widest">Factors we consider:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Your current confidence level behind the wheel",
                "Any previous experience (manual or automatic)",
                "How often you can commit to weekly lessons",
                "Your choice between manual and automatic",
                "Your familiarity with local Bradford/Leeds roads"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                  <span className="text-[13px] font-bold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href="#booking" className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-black text-sm uppercase italic tracking-widest hover:bg-red-700 transition-all shadow-md">
                Enquire for Advice
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATIC VS MANUAL */}
      <section className="py-2 lg:py-4 bg-gray-900 text-white border-y-8 border-red-600 italic relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-2xl lg:text-4xl font-black mb-3 uppercase tracking-tighter italic">
            Does <span className="text-red-500">Automatic or Manual</span> Affect Progress?
          </h2>
          <div className="text-gray-300 font-medium leading-relaxed space-y-3 text-base mb-5">
            <p className="max-w-3xl mx-auto">
              Automatic lessons can often shorten your journey because you aren't spending the first few hours mastering clutch control. This allows you to focus on the road and hazard perception much sooner.
            </p>
            <p className="max-w-3xl mx-auto">
              However, manual lessons remain a popular choice for those who want the full flexibility of a manual licence. We offer both paths, and our instructors are dedicated to helping you pass whichever you choose.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/automatic-driving-lessons" className="bg-red-600 text-white px-8 py-3 rounded-full font-black text-xs hover:bg-red-700 transition-all uppercase tracking-widest shadow-xl">
              Automatic Lessons
            </Link>
            <Link to="/manual-driving-lessons" className="bg-white text-gray-900 px-8 py-3 rounded-full font-black text-xs hover:bg-gray-100 transition-all uppercase tracking-widest shadow-xl">
              Manual Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* LEARNING TIMELINE */}
      <section className="py-2 lg:py-4 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-2">
            <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] italic mb-1">So what does a typical journey look like?</p>
            <h2 className="text-3xl lg:text-4xl font-black mb-1 italic uppercase tracking-tighter text-gray-900">
              Your Typical Learning Timeline
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 italic">
            {[
              { 
                step: "01", 
                title: "The Basics", 
                desc: "Car controls, steering, and simple moving/stopping. This is where you build your foundation and confidence.",
                sub: "3-8 Hours"
              },
              { 
                step: "02", 
                title: "Traffic Flow", 
                desc: "Handling junctions, roundabouts, and basic traffic. Building your road planning and hazard skills.",
                sub: "10-20 Hours"
              },
              { 
                step: "03", 
                title: "Refinement", 
                desc: "Complex junctions, manoeuvres, and high-speed roads. Finding your independence as a safe driver.",
                sub: "25-35 Hours"
              },
              { 
                step: "04", 
                title: "Test Readiness", 
                desc: "Mock tests, finishing touches, and local route familiarity. Polishing your confidence for the test day.",
                sub: "40+ Hours"
              }
            ].map((box, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-2xl border border-gray-100 text-center lg:text-left flex flex-col group hover:bg-white hover:shadow-md transition-all">
                <div className="text-red-600 font-black text-2xl italic leading-none mb-2 opacity-30 group-hover:opacity-100 transition-opacity">#{box.step}</div>
                <h3 className="text-sm font-black mb-1 uppercase text-gray-900">{box.title}</h3>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-3">{box.desc}</p>
                <div className="mt-auto pt-2 border-t border-gray-200/50">
                  <span className="text-[9px] font-black uppercase tracking-widest text-red-600 italic">Target Range: {box.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READY CHECKLIST */}
      <section className="py-2 lg:py-4 bg-gray-50 border-y border-gray-100 italic">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center bg-white rounded-[2rem] p-5 lg:p-8 shadow-sm border border-gray-100">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-black mb-2 uppercase tracking-tighter text-gray-900 leading-tight">
                Are You <span className="text-red-600">Ready for Your Test?</span>
              </h2>
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-4">
                Passing the test isn't about luck; it's about being consistent. Here is a quick checklist to see if you're reaching the standard required for a first-time pass.
              </p>
              <Link to="/mock-driving-tests" className="inline-block bg-gray-900 text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase italic tracking-widest hover:bg-red-600 transition-all">
                Learn About Mock Tests
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
              <ul className="space-y-1.5">
                {[
                  "You drive safely without any physical help.",
                  "You handle complex roundabouts calmly.",
                  "You recover from small errors safely.",
                  "You fully understand all road signs and limits.",
                  "You pass mock tests with zero serious faults.",
                  "You feel confident on local test roads."
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-100/50">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-600 flex items-center justify-center text-white text-[8px] flex-shrink-0 font-black">✓</div>
                    <span className="text-[12px] font-bold text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-2 lg:py-4 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl lg:text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Learning to drive in <br/><span className="text-red-600">Bradford and Leeds</span>
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed italic space-y-4">
                <p className="text-sm">
                  Learning locally means dealing with real driving situations you will actually face on your test and beyond. Our training in Bradford and Leeds takes you through everything from busy multi-lane roundabouts to tight residential streets and complex city traffic.
                </p>
                <p className="text-sm">
                  We focus on specific local conditions, including hill starts on the steeper roads of West Yorkshire and the varied traffic light systems in the city centres. By practicing in these environments, you'll be better prepared for actual test route conditions and more confident as an independent driver.
                </p>
                <div className="pt-2">
                  <p className="text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest">Start by exploring the areas and routes you may be learning around:</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    <Link to="/bradford" className="text-sm font-black text-gray-900 hover:text-red-600 flex items-center gap-1.5 uppercase tracking-widest italic group transition-all">
                      Explore Bradford lesson areas <span className="text-red-600 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <Link to="/leeds" className="text-sm font-black text-gray-900 hover:text-red-600 flex items-center gap-1.5 uppercase tracking-widest italic group transition-all">
                      Explore Leeds lesson areas <span className="text-red-600 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <Link to="/driving-test-centres" className="text-sm font-black text-gray-900 hover:text-red-600 flex items-center gap-1.5 uppercase tracking-widest italic group transition-all">
                      View local driving test centres <span className="text-red-600 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-50 p-6 lg:p-8 rounded-3xl border border-gray-100 italic shadow-sm">
                <h4 className="text-lg font-black uppercase text-gray-900 mb-4 italic">Why local practice matters</h4>
                <ul className="space-y-3">
                  {[
                    "Practise on roads similar to your test routes",
                    "Build confidence in real Bradford and Leeds traffic",
                    "Reduce surprises before test day",
                    "Learn how local junctions, roundabouts, and hills affect progress"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] flex-shrink-0 mt-0.5 font-black">✓</div>
                      <span className="text-sm font-bold text-gray-700 leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-3 lg:py-5 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-3">
            <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tighter text-gray-900">
              Still unsure how many lessons you’ll need?
            </h2>
            <p className="text-gray-400 font-black uppercase tracking-widest text-[9px] italic">Honest advice on your learning journey</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm italic">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-sm font-black uppercase italic text-gray-900 group-hover:text-red-600 transition-colors">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all ${openFaq === i ? 'bg-red-600 border-red-600 text-white rotate-45' : 'text-gray-300'}`}>
                    <span className="text-xl font-black">+</span>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="p-6 bg-gray-50 border-t border-gray-100 animate-slideDown">
                    <div className="text-gray-600 font-medium leading-relaxed text-sm">
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

export default DrivingLessonsNeededPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import RecentPasses from './RecentPasses';
import ReviewsSlider from './ReviewsSlider';
import Schema from './Schema';
import { getArticleSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

const IntensiveDrivingCoursesWorthItPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  React.useEffect(() => {
    document.title = "Intensive Driving Courses: Are They Worth It? | FastAutoPass";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Discover the truth about intensive driving courses in Bradford and Leeds. Learn who they work for, who they don't, and whether a fast-track course is your best path to passing.");
  }, []);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Can I really learn to drive in just one week?",
      answer: "While some 'crash courses' claim this is possible for everyone, it is extremely challenging for a complete beginner. Most people who pass in a single week already have basic car control experience and have passed their theory test. For absolute beginners, we usually recommend a slightly longer semi-intensive timeline to ensure you are actually safe, not just rushed through the basics."
    },
    {
      question: "Do I need to pass my theory test first?",
      answer: "Yes, this is vital. You cannot book a practical driving test with the DVSA until you have a valid theory test certificate. We strongly advise having your theory pass in hand before starting an intensive course so we can align your driving hours with a confirmed test date, preventing any gap where your skills might fade."
    },
    {
      question: "Are intensive courses more expensive?",
      answer: "The upfront cost is higher because you are paying for a large block of hours at once. However, because you learn so quickly through daily repetition and momentum, you may actually require fewer total hours than if you took one lesson a week over many months. This often makes the total cost of reaching your licence cheaper in the long run."
    },
    {
      question: "How many hours a day will I be driving?",
      answer: "A standard intensive course typically involves driving for 4 to 6 hours a day with scheduled breaks to prevent fatigue. It is physically and mentally demanding, requiring high levels of sustained concentration. If that sounds too intense, we also offer semi-intensive options of 2-3 hours per day, which many learners find better for information retention."
    },
    {
      question: "Is an intensive course better in manual or automatic?",
      answer: (
        <>
          Automatic is significantly faster as there is no clutch or gearbox to master, allowing you to focus entirely on road planning and hazard perception. If your priority is passing in the shortest possible time, <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic driving lessons</Link> are usually the most effective choice for a fast-track course.
        </>
      )
    },
    {
      question: "What if I fail the practical test at the end?",
      answer: "Unfortunately, no driving school can guarantee a first-time pass as it depends on your performance on the day. If you don't succeed, we will help you book a new test immediately and arrange a few 'refresher' hours to keep your skills sharp. Our focus on test readiness and mock exams is designed to minimize this risk as much as possible."
    },
    {
      question: "Is a 'crash course' safe for complete beginners?",
      answer: "It can be, but it depends entirely on your learning style. Some people thrive in immersive environments, while others find the sheer volume of information overwhelming. We can perform an initial assessment lesson to see how you handle the car before committing to a full intensive week, ensuring the pace is right for your specific needs."
    },
    {
      question: "Will I learn on actual test routes?",
      answer: (
        <>
          Yes, we focus a significant portion of your training on the specific areas and routes used by <Link to="/driving-test-centres" className="text-red-600 font-bold hover:underline">local test centres</Link> in Bradford and Leeds. This builds your familiarity with complex junctions, speed changes, and local hazards, ensuring that when your test date arrives, you feel like you are driving on home territory.
        </>
      )
    },
    {
      question: "What is the difference between intensive and semi-intensive?",
      answer: "Intensive courses are usually 5-6 hours a day over a single week, aimed at a very fast pass. Semi-intensive courses spread the same number of hours over two to four weeks, usually doing 2-hour sessions several times a week. We often find semi-intensive is the 'sweet spot' for most learners, offering great momentum without the mental exhaustion of full days."
    },
    {
      question: "Do I get the same instructor for the whole course?",
      answer: "Consistency is vital for the momentum that makes fast-track learning work, so we always aim to keep you with the same instructor for the duration of your course. They will track your skills day-by-day, adjusting the focus based on your progress and ensuring that every part of the DVSA syllabus is covered thoroughly before your test."
    },
    {
      question: "Can I take an intensive course if I work full-time?",
      answer: "It is difficult to balance a full-time job with 5 hours of driving a day. Most learners choose to take a week off work to fully commit to the process. If you cannot take time away from your job, a semi-intensive course with lessons after work or on weekends is a much more realistic and productive way to reach your licence."
    },
    {
      question: "What if I am a very nervous learner?",
      answer: (
        <>
          Intensive courses can sometimes add extra pressure that makes anxiety worse for some learners. A more gradual approach via <Link to="/manual-driving-lessons" className="text-red-600 font-bold hover:underline">regular manual</Link> or automatic lessons often works better to build confidence steadily. However, some nervous learners find the immersion helps them 'get over the hump' faster—we can discuss which path is right for you.
        </>
      )
    },
    {
      question: "Is the driving test included in the price?",
      answer: "Our course prices focus on the professional tuition provided by our instructors. While we can help you find and book a suitable test date, the official DVSA test fee is a separate cost that is paid directly to the government. We will always clearly explain the total breakdown of costs before you begin any intensive training package."
    },
    {
      question: "How do I know which course length I need?",
      answer: (
        <>
          The most accurate way is to book an assessment lesson where an instructor can evaluate your current control and awareness. From there, we can give you an honest recommendation on whether you need 20, 30, or 40 hours. You can also check our <Link to="/how-many-driving-lessons-do-i-need" className="text-red-600 font-bold hover:underline">lesson estimate guide</Link> for a general breakdown based on your experience levels.
        </>
      )
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans intensive-worth-it-page">
      <Schema type="Article" data={getArticleSchema(
        "Intensive Driving Courses: Are They Worth It?",
        "An honest look at intensive driving courses in Bradford and Leeds. We compare fast-track courses to weekly lessons to see if they are worth the money.",
        "https://fastautopass.co.uk/intensive-driving-courses-are-they-worth-it",
        "https://images.unsplash.com/photo-1449960232335-d8f914a50d11?auto=format&fit=crop&q=80&w=1600"
      )} />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Intensive Courses Worth It?", item: "https://fastautopass.co.uk/intensive-driving-courses-are-they-worth-it" }
      ])} />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-4 lg:py-6 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="lg:w-7/12 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-black mb-2 leading-tight tracking-tighter uppercase italic text-white uppercase italic">
                Intensive Courses: <br/><span className="text-red-500">Are They Worth It?</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-300 font-medium mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0 italic">
                Passing your test in a matter of days sounds perfect, but is it the right path for you? We take an honest, practical look at fast-track driving tuition in Bradford and Leeds.
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

      {/* DIRECT INTRO */}
      <section className="py-1 lg:py-2 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-5 lg:p-6 shadow-sm italic text-center">
            <h2 className="text-2xl lg:text-3xl font-black mb-1 italic uppercase tracking-tighter text-gray-900 leading-tight">
              The <span className="text-red-600">Honest Verdict</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 font-black italic uppercase italic leading-tight mb-2">
              “Intensive courses work brilliantly for some, but they may not be the right approach for everyone.”
            </p>
            <div className="text-gray-600 font-medium leading-relaxed space-y-3 text-sm lg:text-base italic text-left">
              <p>
                An intensive driving course can be a good option if you already have some confidence, can stay focused for longer sessions, and have the time to commit properly. The main benefit is momentum — you are driving regularly, practising more often, and keeping skills fresh from one day to the next.
              </p>
              <p>
                However, fast-track learning is not always the easiest route. If you are completely new, nervous behind the wheel, or need more time to process information, <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">a steady lesson plan</Link> may help you build confidence more naturally before increasing lesson frequency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS SECTION */}
      <section className="py-1 lg:py-2 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tighter text-gray-900 leading-tight">
                What is an <br/><span className="text-red-600">Intensive Course?</span>
              </h2>
              <p className="text-gray-600 font-medium text-sm leading-relaxed mb-2 italic">
                An intensive course usually means taking several hours of driving tuition over a short period, often across one or two weeks. Instead of spreading lessons over months, you learn in a concentrated block with regular practice.
              </p>
              <p className="text-gray-600 font-medium text-sm leading-relaxed mb-3 italic">
                This can help some learners progress quickly, but it can also feel mentally demanding. Long sessions require concentration, patience, and the ability to absorb feedback quickly. For that reason, intensive courses tend to work best when the learner already has some basic confidence or previous driving experience.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 italic">
              {[
                { title: "Daily Driving", desc: "Several hours of one-to-one tuition across a short period." },
                { title: "Theory Ready", desc: "Best suited to learners who have already passed or are close to passing theory." },
                { title: "Test Focused", desc: "Lessons can be shaped around local test routes and real driving conditions." },
                { title: "Momentum", desc: "Regular practice helps reduce long gaps between lessons." }
              ].map((box, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-[10px] font-black mb-1 uppercase text-red-600 leading-tight tracking-widest">{box.title}</h3>
                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT WORKS FOR SECTION */}
      <section className="py-1 lg:py-2 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-4">
            <p className="text-gray-500 font-medium italic text-sm">Whether an intensive course works depends on your confidence, availability, learning style, and how much driving experience you already have.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* WORKS FOR */}
            <div className="bg-red-50 p-5 lg:p-6 rounded-[2rem] border border-red-100 italic">
              <h2 className="text-xl font-black mb-2 italic uppercase tracking-tighter text-red-600">
                Who it can <span className="text-gray-900">work well for</span>
              </h2>
              <ul className="space-y-2">
                {[
                  "Learners with some previous driving experience",
                  "Confident learners who pick up physical tasks quickly",
                  "Learners who have already passed their theory test",
                  "People who can fully commit time across the course",
                  "Learners who prefer focused, regular practice"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-white text-[8px] flex-shrink-0 mt-0.5 font-black italic">✓</div>
                    <span className="text-[11px] font-bold text-gray-700 italic leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* DOES NOT WORK FOR */}
            <div className="bg-gray-900 text-white p-5 lg:p-6 rounded-[2rem] border border-gray-800 italic">
              <h2 className="text-xl font-black mb-2 italic uppercase tracking-tighter text-white">
                Who may <span className="text-red-500">prefer a slower pace</span>
              </h2>
              <ul className="space-y-2">
                {[
                  "Complete beginners who need more time to build confidence",
                  "Nervous learners who prefer a calmer pace",
                  "Learners who find long sessions mentally tiring",
                  "People who have not started theory preparation yet",
                  "Learners who prefer steady weekly progress"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center text-white text-[8px] flex-shrink-0 mt-0.5 font-black italic">!</div>
                    <span className="text-[11px] font-bold text-gray-300 italic leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VS SECTION */}
      <section className="py-1 lg:py-2 bg-gray-50 border-y border-gray-100 uppercase italic font-bold">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tighter text-gray-900 leading-tight">
            Intensive vs <span className="text-red-600">Weekly Lessons</span>
          </h2>
          <p className="text-gray-500 font-medium text-sm mb-4 italic normal-case">It helps to compare intensive courses with weekly lessons before deciding which route feels more realistic for you.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left italic border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 px-4 text-[9px] font-black uppercase text-gray-400 tracking-widest">Feature</th>
                  <th className="py-2 px-4 text-[9px] font-black uppercase text-red-600 tracking-widest">Intensive</th>
                  <th className="py-2 px-4 text-[9px] font-black uppercase text-gray-900 tracking-widest">Weekly</th>
                </tr>
              </thead>
              <tbody className="text-[11px] font-bold text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">Timeline</td>
                  <td className="py-2 px-4 text-red-600 uppercase">1-2 Weeks</td>
                  <td className="py-2 px-4 uppercase">4-8 Months</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">Learning pace</td>
                  <td className="py-2 px-4 text-red-600">Very fast block learning</td>
                  <td className="py-2 px-4 uppercase">Steady session by session</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">Pressure level</td>
                  <td className="py-2 px-4 text-red-600">High (Fast paced)</td>
                  <td className="py-2 px-4 uppercase">Low (Steady progress)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">Cost structure</td>
                  <td className="py-2 px-4 text-red-600 uppercase">Large single payment</td>
                  <td className="py-2 px-4 uppercase">Spread over months</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4">Confidence building</td>
                  <td className="py-2 px-4 text-red-600 uppercase">Immersive adaptation</td>
                  <td className="py-2 px-4 uppercase">Gradual understanding</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-500 font-medium text-[13px] italic normal-case">For many learners, weekly or semi-intensive lessons give more time to absorb feedback, practise independently, and build confidence without feeling rushed.</p>
        </div>
      </section>

      {/* TRANSITION & SOCIAL PROOF */}
      <div className="container mx-auto px-4 max-w-4xl text-center mt-4 mb-2">
        <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] italic">
          Here’s how learners have progressed with different learning approaches.
        </p>
      </div>

      {/* What Learners Say */}
      <ReviewsSlider />

      {/* Recent Passes – Bradford & Leeds */}
      <RecentPasses areaName="Bradford & Leeds" />

      {/* REALITY SECTION */}
      <section className="py-1 lg:py-2 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-6 items-center text-center lg:text-left">
            <div className="lg:w-1/2">
              <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tighter text-gray-900 leading-tight">
                The Reality in <br/><span className="text-red-600">Bradford and Leeds</span>
              </h2>
              <div className="text-gray-600 font-medium space-y-2 text-[13px] italic">
                <p>
                  Roads in Bradford and Leeds can be busy, varied, and demanding. From steep hills and tight residential roads to multi-lane roundabouts and complex city-centre routes, learners need time to build calm decision-making. We often recommend <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving tests</Link> to prepare for these challenges.
                </p>
                <p>
                  An intensive course can help if you are already confident, but if you are still building road awareness, a steady approach may give you more time to understand local <Link to="/driving-test-centres" className="text-red-600 font-bold hover:underline">test routes</Link> properly and feel comfortable before test day.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gray-50 p-5 lg:p-6 rounded-[2rem] border border-gray-100 shadow-sm italic text-left">
              <h3 className="text-base font-black uppercase text-gray-900 mb-1 italic leading-tight">The Better Approach?</h3>
              <p className="text-red-600 font-black italic uppercase italic text-xs mb-2 tracking-tight">"Semi-Intensive: The Sweet Spot"</p>
              <p className="text-[11px] text-gray-600 leading-relaxed font-medium mb-3">
                For many learners, taking 2 to 4 hours several times a week for a month is a great alternative. You get the momentum without the total exhaustion, giving you more time to process the complex hazards of Bradford and Leeds roads.
              </p>
              <a href="#booking" className="inline-block bg-red-600 text-white px-6 py-2.5 rounded-full font-black text-[9px] uppercase italic tracking-widest hover:bg-red-700 transition-all shadow-md">
                Send an Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO DECIDE SECTION */}
      <section className="py-2 lg:py-4 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-black mb-2 italic uppercase tracking-tighter text-gray-900 leading-tight">
              How to decide if an <span className="text-red-600">intensive course is right for you</span>
            </h2>
            <p className="text-gray-500 font-medium italic text-sm">Before choosing an intensive course, ask yourself:</p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-5 lg:p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Have I passed or nearly completed my theory test?",
                "Do I already feel comfortable with basic car control?",
                "Can I concentrate for longer driving sessions?",
                "Do I learn well with regular feedback and repetition?",
                "Would I feel pressured if progress is not instant?"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-white text-[8px] flex-shrink-0 font-black italic">✓</div>
                  <span className="text-[12px] font-bold text-gray-700 italic leading-tight">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
              <p className="text-[12px] text-gray-500 font-medium italic leading-relaxed">
                If you are unsure, starting with <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">normal driving lessons</Link> is often the calmer and more effective way to build confidence before increasing how often you drive. Some learners also consider learning in a <Link to="/manual-driving-lessons" className="text-red-600 font-bold hover:underline">manual car</Link> before switching later, depending on their long-term driving goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-2 lg:py-4 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-3">
            <h2 className="text-2xl lg:text-3xl font-black mb-1 italic uppercase tracking-tighter text-gray-900 leading-tight">
              Intensive Course FAQs
            </h2>
            <p className="text-gray-400 font-black uppercase tracking-widest text-[9px] italic">Everything you need to know about fast-track learning</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm italic">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-[12px] font-black uppercase italic text-gray-900 group-hover:text-red-600 transition-colors tracking-tight leading-tight">{faq.question}</span>
                  <div className={`w-7 h-7 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all ${openFaq === i ? 'bg-red-600 border-red-600 text-white rotate-45' : 'text-gray-300'}`}>
                    <span className="text-lg font-black">+</span>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="p-5 bg-gray-50 border-t border-gray-100 animate-slideDown">
                    <div className="text-gray-600 font-medium leading-relaxed text-[13px] italic">
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
              <p className="text-gray-500 font-medium mb-8 italic">Our team is available to discuss your course options.</p>
              
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

export default IntensiveDrivingCoursesWorthItPage;

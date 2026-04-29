import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import ReviewsSlider from './ReviewsSlider';
import RecentPasses from './RecentPasses';

import Schema from './Schema';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

const MarkdownLink: React.FC<any> = ({ href, children, ...props }) => {
  const isInternal = href?.startsWith('/');
  const classes = "text-red-600 font-bold hover:underline transition-colors";
  
  if (isInternal) {
    return <Link to={href} className={classes}>{children}</Link>;
  }
  return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
};

const MotorwayLessonsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  useEffect(() => {
    document.title = "Motorway Driving Lessons Bradford & Leeds | Confidence Building | FastAutoPass";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Master high-speed driving with our specialist motorway lessons in Bradford and Leeds. Overcome motorway anxiety and build real confidence on the M62 and M606.');
  }, []);

  const faqs = [
    {
      question: "Can learner drivers legally take motorway lessons in West Yorkshire?",
      answer: "Yes, since 2018, learner drivers in the UK have been legally allowed to take motorway lessons, provided they are accompanied by a fully qualified Approved Driving Instructor (ADI) in a dual-controlled car. In [Bradford](/bradford) and [Leeds](/leeds), this is a fantastic opportunity to gain high-speed experience before you pass your test. We highly recommend it for any learner who feels ready. It removes the 'fear of the unknown' that many new drivers face on the M62 or M606 once they get their full licence."
    },
    {
      question: "Why should I take motorway lessons with a dual-control instructor?",
      answer: "The M62 and M621 are some of the busiest motorways in the country. At 70mph, things happen very quickly. Having a dual-control instructor next to you provides a vital safety net. If you misjudge a merge or fail to see a vehicle in your blind spot, your instructor can intervene instantly. This is a standard part of our [intensive driving courses](/intensive-driving-courses) and [Pass Plus training](/pass-plus). We teach you how to read the traffic flow and plan your moves long before you need to make them."
    },
    {
      question: "How do I overcome a deep-seated fear of high-speed driving?",
      answer: "Fear of motorways (motorway phobia) is incredibly common, even among experienced drivers in [Leeds](/leeds) and [Bradford](/bradford). We handle this with a very gradual, structured approach. We don't just throw you onto the M62 at rush hour. We start on quieter dual carriageways to build your confidence with higher speeds and lane discipline, similar to our [automatic driving lessons](/automatic-driving-lessons). Once you feel comfortable at 60-70mph on a dual carriageway, the transition to the motorway feels much more manageable."
    },
    {
      question: "Will we practice on the M62 and M606 during my lessons?",
      answer: "Yes, these are our primary training grounds for motorway lessons in [Bradford](/bradford) and [Leeds](/leeds). The M606 is particularly useful for practicing slip-road merging, as it has several challenging entries and exits. The M62 allows us to practice long-distance cruising, lane discipline, and navigating 'smart' motorway sections. We’ll also use the M621 to practice driving through the heart of Leeds, which involves complex lane changes and high-density traffic. This is a key focus in our [Pass Plus courses](/pass-plus)."
    },
    {
      question: "What are the most common mistakes people make on motorways?",
      answer: "The most common mistakes we see in West Yorkshire are 'middle-lane hogging', poor following distances, and failing to check blind spots properly before changing lanes. During our motorway lessons, we focus on 'long-range observation'. We teach you how to read the traffic half a mile ahead, allowing you to anticipate lane closures or slowing traffic long before you need to move. This level of awareness is also taught in our [mock driving tests](/mock-driving-tests)."
    },
    {
      question: "How long does a typical motorway lesson last in Bradford or Leeds?",
      answer: "We recommend a minimum of two hours for a motorway lesson. Because of the nature of motorway driving, you often need to travel a fair distance to cover a variety of junctions and scenarios. A one-hour lesson simply doesn't give us enough time to get onto the M62, practice several merges, and return safely. For those on an [intensive driving course](/intensive-driving-courses), we often integrate motorway training into the longer sessions."
    },
    {
      question: "What is a 'Smart Motorway' and how do I navigate one safely?",
      answer: "Smart motorways use technology like variable speed limits and 'all-lane running' (where the hard shoulder is used as a live lane) to manage traffic flow. The M62 through West Yorkshire has several smart sections. They can be confusing for new drivers. We’ll teach you how to read the overhead gantries, what the 'Red X' means (and why you must never ignore it), and what to do if you break down. This is a vital part of our [DVSA test preparation](/test-preparation) for those looking for advanced knowledge."
    },
    {
      question: "How do I manage high-speed merging on short slip roads like the M606?",
      answer: "Merging onto a motorway is often the most stressful part for new drivers. The key is speed matching. You must use the slip road to reach the same speed as the traffic in lane one. We’ll teach you how to use your mirrors and a quick 'shoulder check' to identify a gap early. In [Bradford](/bradford), where some slip roads on the M606 can feel short, we’ll practice the timing and acceleration needed to merge smoothly. This is a skill we also refine in our [automatic driving lessons in Bradford & Leeds](/automatic-driving-lessons)."
    },
    {
      question: "What should I do if my car breaks down on a busy motorway?",
      answer: "This is a vital part of our motorway training. If you break down, the priority is getting the car to a safe place—ideally an Emergency Area or off the motorway entirely. We’ll discuss the 'Go Left' campaign and ensure you know exactly how to use the emergency SOS phones. This safety-first approach is consistent across all our training, including [Pass Plus courses](/pass-plus)."
    },
    {
      question: "Can I take motorway lessons if I've been driving for many years?",
      answer: "Yes! We see many 'full licence' holders who have avoided motorways for years and now find their lives restricted by their fear. Whether you’ve recently moved to West Yorkshire and find the M62 daunting, or you’ve just never had the need to use them until now, we can help. Our [refresher driving lessons](/refresher-lessons) are tailored entirely to your experience level."
    },
    {
      question: "How do you teach 'long-range observation' at 70mph?",
      answer: "At high speeds, your 'stopping distance' is much greater, so you need to see hazards much earlier. We use 'commentary driving' to help you develop this. We’ll ask you to tell us what you see in the far distance—brake lights, lane closure signs, or vehicles joining from a slip road. This proactive approach is what keeps you safe on busy motorways like the M621 in [Leeds](/leeds). It's an advanced skill we also emphasize in our [intensive driving courses](/intensive-driving-courses)."
    },
    {
      question: "Will motorway lessons help me with my general driving confidence?",
      answer: "Absolutely. Once you’ve mastered the art of high-speed planning and lane discipline at 70mph, urban driving in [Bradford](/bradford) or [Leeds](/leeds) often feels much slower and more manageable. Motorway training improves your overall awareness, your mirror habits, and your ability to process information quickly. It's a great follow-up to our [mock driving tests](/mock-driving-tests)."
    },
    {
      question: "Is it better to do motorway lessons in my own car or yours?",
      answer: "If you have your own car, we recommend using it for at least part of the training. It’s important to know how *your* car accelerates on a slip road and how it feels at 70mph. Whether you drive a manual or prefer our [automatic driving lessons](/automatic-driving-lessons) car, we can accommodate you. We can start in our car to build your confidence and then transition to yours once you feel ready."
    },
    {
      question: "Why is local expertise vital for motorway training in Leeds?",
      answer: "The motorway network around [Leeds](/leeds) and [Bradford](/bradford) is unique. Between the M62, M621, M606, and the A1(M), there are dozens of complex interchanges. As local West Yorkshire instructors, we know these roads inside out. We can take you to the exact spots that will challenge you the most, ensuring you’re prepared for anything, just as we do with our [DVSA test preparation](/test-preparation)."
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans motorway-lessons-page">
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "Motorway Driving Lessons",
          "Master high-speed driving with our specialist motorway lessons in Bradford and Leeds. Overcome motorway anxiety and build real confidence on the M62 and M606.",
          "https://fastautopass.co.uk/motorway-lessons"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Motorway Lessons", item: "https://fastautopass.co.uk/motorway-lessons" }
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
              "text": faq.answer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
            }
          }))
        }} 
      />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-32 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-7/12 text-center lg:text-left">
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic drop-shadow-2xl">
                Motorway <br/><span className="text-red-500">Lessons</span> in <br/>Bradford & Leeds
              </h1>
              <p className="text-xl lg:text-2xl font-bold mb-10 max-w-3xl text-gray-200 italic">
                Stop avoiding the M62. Our specialist motorway training is designed to remove the fear and build the high-speed confidence you need to navigate West Yorkshire's busiest roads safely.
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
              Motorway driving is 90% psychology and 10% technical skill. We address both, focusing on the specific scenarios that cause anxiety for drivers in Bradford and Leeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">The Art of the Merge (Slip Roads)</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Joining a motorway like the <strong>M606</strong> can be terrifying if you don't understand speed matching. We'll practice using the full length of the slip road to match the speed of the traffic in lane one, ensuring a smooth, safe merge every time.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">High-Speed Lane Discipline</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  We'll master the 'keep left' rule and understand when it's actually safe to overtake. We focus on mirror-signal-manoeuvre at 70mph, ensuring you're always aware of the 'blind spots' that are much larger at high speeds.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Reading the 'Smart' Motorway</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  The <strong>M62</strong> is a 'smart' motorway. We'll teach you how to read the overhead gantries, understand variable speed limits, and what to do if you see a 'Red X'. This is vital for avoiding heavy fines and staying safe.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Breakdown & Emergency Safety</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  What do you do if your car loses power at 70mph? We'll discuss the 'SOS' areas, how to position your car safely, and the vital steps to take to protect yourself and your passengers if the worst happens.
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
                We don't just 'take you for a drive'. We treat motorway lessons as a specialist skill. We refuse to rush you into high-speed traffic before you're ready. Our approach is focused on building a solid technical foundation on dual carriageways first.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We value the psychology of driving. Our instructors are trained to identify the 'triggers' for your anxiety and provide practical, real-world coping mechanisms. We want you to feel in control, not just 'surviving' the experience.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We use real-world scenarios. We'll practice overtaking large HGVs, managing tailgaters, and navigating complex lane closures. We want you to experience the reality of the M62 while you have a professional by your side.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Our local knowledge is unmatched. We know exactly which junctions are the most confusing and we'll spend extra time mastering them until they become second nature.
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
                  You can't learn motorway driving in a classroom. Our lessons take you directly onto the busiest high-speed routes in West Yorkshire, following the same professional standards as our <Link to="/intensive-driving-courses" className="text-red-600 font-bold hover:underline">intensive driving courses in Bradford & Leeds</Link>.
                </p>
                <p>
                  We'll spend time on the <strong>M62</strong>, navigating the complex lane changes between <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link> and <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link>. We'll practice joining the <strong>M606</strong> from the Staygate roundabout and mastering the high-speed merges onto the <strong>M621</strong>.
                </p>
                <p>
                  We'll even head out towards the <strong>A1(M)</strong> to experience different types of motorway layouts. This isn't just about driving in a straight line; it's about building a mental map of the area's most challenging high-speed junctions, a skill we also cover in our <Link to="/pass-plus" className="text-red-600 font-bold hover:underline">Pass Plus courses</Link>.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-6">High-Speed Mastery</h3>
              <ul className="space-y-4">
                {[
                  "M62 Smart Motorway Navigation",
                  "M606 High-Speed Slip Road Merging",
                  "M621 Leeds City Centre Integration",
                  "A1(M) Long-Distance Planning",
                  "Staygate to M606 Transition Mastery",
                  "Gildersome Intersection Lane Discipline"
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
                title: "The 'Motorway-Avoider'", 
                desc: "You've been driving for years but you'll add 30 minutes to your journey just to avoid the M62. You're tired of the limitation and you want to reclaim your freedom to travel anywhere." 
              },
              { 
                title: "The Newly Qualified Driver", 
                desc: "You've just passed your test and the thought of 70mph traffic is daunting. You want to build your high-speed skills safely before you start commuting between Bradford and Leeds solo." 
              },
              { 
                title: "The 'Smart Motorway' Skeptic", 
                desc: "You're confused by the variable speed limits and the 'Red X' signs. You want a professional to talk you through how the modern motorway network actually works so you can drive with confidence." 
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
            Why Most New Drivers Avoid Motorways — And Why That’s Risky
          </h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
            <p>
              It's a common pattern: a learner passes their test, drives on a motorway once, feels overwhelmed by the speed, and then never does it again. In West Yorkshire, this is particularly common due to the intensity of the <strong>M62</strong>.
            </p>
            <p>
              <strong>The Risk:</strong> Avoiding motorways doesn't make you safer; it just makes you less experienced. Eventually, you'll be forced to use one—perhaps in bad weather or at night—and your lack of familiarity will make you a higher risk to yourself and others. Motorways are statistically the safest roads, but only if you know how to use them.
            </p>
            <p>
              <strong>The Solution:</strong> Professional motorway training isn't about 'learning to drive' again; it's about 'speed recalibration'. Your brain needs time to adjust to processing information at 70mph. By doing this with an instructor, you build the correct mental habits from day one.
            </p>
            <p>
              <strong>Our Advice:</strong> Don't wait until you 'have' to use a motorway. Book a session as soon as you pass. It's much easier to build confidence early than it is to break a years-long habit of avoidance.
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
                Motorway Lessons in Bradford
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Bradford drivers are uniquely positioned next to the <strong>M606</strong>, one of the shortest but busiest motorway spurs in the country. Our <strong>motorway lessons Bradford</strong> focus on mastering the transition from the urban <strong>Staygate</strong> roundabout to high-speed traffic in seconds.
                </p>
                <p>
                  We provide specialist <strong>motorway driving tuition Bradford</strong> that addresses the specific challenges of the local network. Whether you're a nervous driver or a new pass, our <strong>motorway confidence course Bradford</strong> will give you the technical skills to join the <strong>M62</strong> with ease. If you're looking for a <strong>motorway driving instructor Bradford</strong>, we are the local experts.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
                Motorway Lessons in Leeds
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Leeds is surrounded by a complex web of motorways including the <strong>M621</strong>, <strong>M62</strong>, and <strong>M1</strong>. Our <strong>motorway lessons Leeds</strong> are designed to help you navigate these high-pressure intersections with confidence. We focus on lane discipline and proactive hazard perception in heavy urban motorway traffic.
                </p>
                <p>
                  A <strong>motorway driving course Leeds</strong> with FastAutoPass is an investment in your long-term safety. Our <strong>motorway driving instructor Leeds</strong> will guide you through the city's most challenging slip roads and junctions, ensuring you're a safe, competent driver at any speed. If you need to <strong>overcome motorway fear Leeds</strong>, we have the proven techniques to help.
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
            <Link to="/intensive-driving-courses" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Intensive Driving Courses
            </Link>
            <Link to="/pass-plus" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Pass Plus Courses
            </Link>
            <Link to="/mock-driving-tests" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Mock Driving Tests
            </Link>
            <Link to="/test-preparation" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              DVSA Test Preparation
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
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Real Answers for High-Speed Drivers</p>
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
                    <div className="prose prose-sm max-w-none text-gray-600 font-medium leading-relaxed">
                      <ReactMarkdown components={{ a: MarkdownLink }}>{faq.answer}</ReactMarkdown>
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
              <p className="text-gray-500 font-medium mb-8 italic">Discuss your motorway lesson requirements.</p>
              
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

export default MotorwayLessonsPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import ReviewsSlider from './ReviewsSlider';
import RecentPasses from './RecentPasses';
import Schema from './Schema';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

const IntensiveCoursesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  useEffect(() => {
    document.title = "Intensive Driving Courses Bradford & Leeds | FastAutoPass";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Fast-track your driving licence with intensive driving courses in Bradford and Leeds. Real expert tuition designed for efficiency and first-time success.');
  }, []);

  const faqs = [
    {
      question: "How long does an intensive driving course actually take?",
      answer: "The duration of an intensive driving course depends entirely on your current experience level. For a complete beginner, we typically recommend a 35 to 45-hour programme spread over two to three weeks. If you’ve had previous lessons or recently failed a test, a 10 to 20-hour [refresher intensive](/refresher-lessons) might be more appropriate, often completed in just 3 to 5 days. We don't believe in rushing the process; our goal is to ensure you are safe and confident, not just 'test-ready'."
    },
    {
      question: "Can I really pass my driving test in just one week?",
      answer: "While a 'one-week pass' is a popular marketing term, the reality is more complex. It is possible if you have significant prior experience and have already passed your theory test. However, for most learners, a one-week timeline is incredibly intense and can lead to information overload. We often suggest a semi-intensive approach over two weeks to allow your brain to process the training without burnout, similar to how we structure our [automatic driving lessons in Bradford & Leeds](/automatic-driving-lessons)."
    },
    {
      question: "Are 'crash courses' suitable for complete beginners?",
      answer: "Yes, 'crash courses' can work for beginners, but they require a high level of commitment. An intensive course means spending 5 or 6 hours a day in the car. It’s a steep learning curve. We find that beginners who succeed are those who are highly motivated and can maintain focus for long periods. For those who prefer a slower pace, our standard [automatic driving lessons](/automatic-driving-lessons) are a great alternative."
    },
    {
      question: "How do you handle driving test bookings?",
      answer: "We actively manage the booking process. We use cancellation trackers and our local network to find slots that align with your course completion. Ideally, we want your test booked for the final day of your training. We also provide comprehensive [DVSA test preparation](/test-preparation) to ensure you're ready for the big day."
    },
    {
      question: "What is the success rate for intensive driving lessons?",
      answer: "Intensive driving lessons often have a higher first-time pass rate because they eliminate the 'weekly reset'. The skills are fresh, and practicing for several hours a day builds muscle memory much faster. To further boost your chances, we highly recommend taking [mock driving tests](/mock-driving-tests) before the real thing."
    },
    {
      question: "Which test centres do you use?",
      answer: "We use all local test centres. During your intensive course, we spend significant time on the actual routes used by these centres. We want you to be so familiar with the road layouts that you feel like an expert by the time your examiner sits next to you. You can find more details on our [driving test centres](/driving-test-centres) page."
    },
    {
      question: "Do I need to have passed my theory test before starting?",
      answer: "Ideally, yes. We cannot book a practical driving test with the DVSA without a valid theory test certificate number. If you haven't passed it yet, we can still start your training, but we won't be able to guarantee a test date at the end of your course. We can provide guidance on [DVSA test preparation](/test-preparation) for both theory and practical exams."
    },
    {
      question: "Can I choose between manual and automatic?",
      answer: "Yes, we offer both manual and automatic intensive driving courses. [Automatic driving lessons](/automatic-driving-lessons) are becoming increasingly popular for intensive learners because they remove the complexity of gear changes, allowing you to focus more on planning and awareness."
    },
    {
      question: "What happens if I'm not ready for my test?",
      answer: "We won't blindly take you to a test if you're not ready. If we feel you need more time, we'll have an honest conversation. We might suggest adding a few extra hours or moving the test back slightly. Our priority is making sure you're actually safe, which is why we often use [mock driving tests](/mock-driving-tests) to gauge readiness."
    },
    {
      question: "Are your instructors fully qualified?",
      answer: "Absolutely. Every instructor at FastAutoPass is a fully qualified, DVSA-approved professional. We don't use 'trainee' instructors for intensive courses; we only use experienced ADIs who understand the pressure of fast-track training across [Bradford](/bradford) and [Leeds](/leeds)."
    },
    {
      question: "Who are intensive driving courses NOT suitable for?",
      answer: "Intensive courses aren't for everyone. If you struggle with concentration for long periods, or if you find high-pressure environments overwhelming, the 5-hour daily blocks might be counter-productive. They also don't suit people with very busy, unpredictable schedules. In these cases, our [weekly automatic lessons](/automatic-driving-lessons) might be a better fit."
    },
    {
      question: "How do you manage fatigue during long blocks?",
      answer: "Driving for 5 hours is exhausting. We structure our intensive sessions with regular, strategic breaks. These aren't just for rest; they're for reflection. We monitor your performance closely; if we see your concentration dipping, we’ll pull over and reset. This is a key part of our [DVSA test preparation](/test-preparation) strategy."
    },
    {
      question: "Why is local route familiarity so important?",
      answer: "Local road systems can be confusing. In an intensive course, you don't have months to learn these by osmosis. You need targeted, expert guidance. We take you directly to the junctions that cause the most faults on test day, whether you are in [Bradford](/bradford) or [Leeds](/leeds)."
    },
    {
      question: "What makes FastAutoPass the best choice?",
      answer: "We aren't a national booking agency; we are a local driving school. Most 'crash course' companies take your deposit and then scramble to find any instructor with a spare hour. We use our own team of local experts. Our approach is structured, professional, and entirely focused on creating safe, independent drivers, offering everything from [automatic driving lessons](/automatic-driving-lessons) to [Pass Plus](/pass-plus) courses."
    }
  ];

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

  return (
    <div className="bg-white animate-fadeIn font-sans intensive-courses-page">
      <Schema type="Service" data={getServiceSchema(
        "Intensive Driving Courses Bradford & Leeds",
        "Fast-track your driving licence with structured, high-impact intensive driving courses in West Yorkshire.",
        "https://fastautopass.co.uk/intensive-driving-courses"
      )} />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Intensive Courses", item: "https://fastautopass.co.uk/intensive-driving-courses" }
      ])} />
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
                Intensive Driving <br/><span className="text-red-500">Courses</span> in <br/>Bradford & Leeds
              </h1>
              <p className="text-xl lg:text-2xl font-bold mb-10 max-w-3xl text-gray-200 italic">
                Stop waiting months for a licence. Our structured, high-impact 'crash courses' are designed for learners who need results now, delivered by instructors who know exactly what it takes to pass in West Yorkshire.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mt-10">
                <a href="#availability" className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-xl text-center hover:bg-red-700 shadow-2xl transition-all uppercase italic tracking-widest">
                  Book Now
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
            <div className="lg:w-5/12 w-full" id="availability">
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
              We don't just drive around aimlessly. Every hour of an intensive course is mapped to the specific skills that examiners at Thornbury and Horsforth are looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Eliminating the 'Weekly Reset'</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  The biggest killer of progress is the seven-day gap between lessons. We structure our sessions in 4 to 6-hour blocks. This allows us to move past the basics and spend real time on the complex stuff—like the multi-lane roundabouts at Staygate or the tricky one-way systems in Leeds city centre—until they become second nature.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Where Learners Struggle Most</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  In West Yorkshire, it's rarely the maneuvers that fail people; it's planning and awareness. We focus heavily on 'reading' the road. We'll spend hours practicing how to anticipate the erratic behavior of other drivers on the A647 or managing the high-speed merges on the M606.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">What Examiners Look For</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Examiners aren't looking for perfection; they're looking for safety. We simulate test conditions early and often. We mark you to the same strict DVSA criteria, focusing on 'serious' faults like observation at junctions and lane discipline, which are the most common reasons for failure in Bradford and Leeds.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">The 'Pressure Test'</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  An intensive course is a pressure cooker. We use that to your advantage. By the time you get to your actual test, you've already spent 20+ hours in the car that week. The nerves are still there, but your technical ability is so sharp that you can perform even when you're feeling the heat.
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
                Most 'crash course' companies are just booking agencies. They take your deposit and then scramble to find any instructor with a spare hour. <strong>We are different.</strong> We are a local team of instructors who actually live and work in <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link> and <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link>.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We refuse to rush learners blindly. If you aren't ready, we'll tell you. We value our reputation and your safety more than a quick booking. Our structured progression means we don't move to the next skill until the previous one is solid, often incorporating <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving tests</Link> to ensure readiness.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We simulate real pressure properly. We don't just tell you what to do; we ask you what you're seeing. We use coaching techniques that build independent drivers, not just robots who can follow instructions. This is a core part of our <Link to="/test-preparation" className="text-red-600 font-bold hover:underline">DVSA test preparation</Link>.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Our local route familiarity isn't just a marketing line. We know which lane you need to be in at the bottom of the M606 three minutes before you get there. That's the level of detail we provide in all our <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic driving lessons</Link> and intensive courses.
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
                  You can't learn to drive by sticking to quiet backstreets. Our intensive courses take you directly into the heart of the areas where you'll be tested, whether you're looking for <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic driving lessons in Bradford & Leeds</Link> or manual tuition.
                </p>
                <p>
                  We'll spend time navigating the busy roundabouts, managing hill starts, and mastering high-speed approaches. We'll take you through complex junctions and city centre loops until you stop thinking about the car and start thinking about the road.
                </p>
                <p>
                  This isn't just about passing a test; it's about making sure that when you drive solo for the first time, you aren't terrified. We build mastery through direct, guided exposure across <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link> and <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link>.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-6">Local Road Mastery</h3>
              <ul className="space-y-4">
                {[
                  "Thornbury Test Centre Route Analysis",
                  "Heaton & Toller Lane Urban Challenges",
                  "Horsforth & Pudsey Junction Mastery",
                  "Leeds City Centre One-Way Systems",
                  "Staygate & Odsal Roundabout Confidence",
                  "A647 & A650 High-Speed Commuter Routes"
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

      {/* LINK-WORTHY AUTHORITY SECTION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
            How Intensive Courses Actually Work (And Who They Don’t Suit)
          </h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
            <p>
              There's a common misconception that an intensive course is a 'shortcut'. It isn't. You still have to do the same amount of work as a weekly learner; you're just doing it in a much shorter window. This requires a specific type of mindset.
            </p>
            <p>
              <strong>The Pros:</strong> You build momentum. You don't forget what you learned last week because 'last week' was yesterday. In a city like Leeds, where the road systems are constantly changing, that continuity is a massive advantage. You also get used to the physical act of driving for long periods, which is exactly what you'll be doing once you pass, perhaps even moving on to <Link to="/pass-plus" className="text-red-600 font-bold hover:underline">Pass Plus</Link> or <Link to="/refresher-lessons" className="text-red-600 font-bold hover:underline">refresher driving lessons</Link>.
            </p>
            <p>
              <strong>The Cons:</strong> It is exhausting. Driving for 5 or 6 hours a day is mentally draining. If you struggle with information overload or if you have a very low tolerance for stress, an intensive course might actually hinder your progress.
            </p>
            <p>
              <strong>Our Advice:</strong> Don't book an intensive course just because you're in a rush. Book it because you have the time and mental energy to commit to it fully. If you're unsure, we always recommend a 2-hour assessment lesson first. We'll be honest with you—if we think you'd be better off with a semi-intensive approach, we'll tell you. Many of our students find that <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic driving lessons in Bradford & Leeds</Link> are the perfect middle ground.
            </p>
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
                title: "The Career-Driven Professional", 
                desc: "You've got a new job starting in three weeks and it requires a car. You don't have time for six months of lessons. You need a structured, high-intensity path to a licence that fits into a single holiday block." 
              },
              { 
                title: "The 'Second Chance' Learner", 
                desc: "You've failed twice before. You're nervous, and you've lost your momentum. A 1-week intensive course strips away the baggage and focuses purely on fixing the technical gaps that failed you last time." 
              },
              { 
                title: "The Fast-Track Student", 
                desc: "Uni starts in a month and you want your independence. You're a quick learner but you need someone to push you. Our beginner intensive packages are designed to get you from zero to test-ready without the fluff." 
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

      {/* GEO-OPTIMISED AUTHORITY BLOCKS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
                Intensive Driving Courses in Bradford
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Bradford presents a unique set of challenges for intensive learners. From the high-density urban traffic to complex multi-lane roundabouts, you need a course that doesn't cut corners. We focus on building your confidence in these high-pressure environments, ensuring you're ready for the local test centres.
                </p>
                <p>
                  Our courses are led by instructors who understand the local rhythm. We don't just teach you the routes; we teach you how to manage the specific hazards of the area's roads.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
                Intensive Driving Courses in Leeds
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Leeds is a fast-paced city, and our intensive driving courses reflect that. We take you through the inner ring road, master the busy roundabouts, and navigate the commuter routes. Our training is designed to get you test-ready by immersing you in the city's most challenging road systems.
                </p>
                <p>
                  Learning with us means you're learning from people who know exactly where the 'trap' junctions are. We focus on technical precision and proactive hazard perception, ensuring that when you take your test, you're doing so with the confidence of an expert.
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
            <Link to="/mock-driving-tests" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Mock Driving Tests
            </Link>
            <Link to="/pass-plus" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Pass Plus Courses
            </Link>
            <Link to="/test-preparation" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              DVSA Test Preparation
            </Link>
            <Link to="/our-instructors" className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm">
              Female Driving Instructors
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
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Real Answers for West Yorkshire Learners</p>
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

      {/* Call Popup */}
      {showCallPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-slideUp">
            <div className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter text-gray-900">Call Booking Team</h3>
              <p className="text-gray-500 font-medium mb-8 italic">Discuss your intensive course requirements.</p>
              
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

export default IntensiveCoursesPage;

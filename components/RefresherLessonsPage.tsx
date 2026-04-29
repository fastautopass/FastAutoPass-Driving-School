import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import ReviewsSlider from './ReviewsSlider';
import RecentPasses from './RecentPasses';
import Schema from './Schema';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

const RefresherLessonsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  React.useEffect(() => {
    document.title = "Refresher Driving Lessons Bradford & Leeds | FastAutoPass";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Rebuild your driving confidence with professional automatic refresher lessons in Bradford and Leeds. Patient, non-judgmental coaching for license holders returning to the road.');
  }, []);

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
      question: "I haven't driven in years—is it normal to feel this nervous?",
      answer: "It is completely normal! We help people every week who haven't touched a steering wheel for 5, 10, or even 20 years. Driving is a skill like any other, and the muscle memory is still there. We take a patient, slow approach to help you settle back in and feel comfortable behind the wheel again."
    },
    {
      question: "Can I do my refresher lessons in an automatic car?",
      answer: "Yes, and many returning drivers find this makes things much easier. Our [automatic driving lessons](/automatic-driving-lessons) remove the stress of gear changes and stalling, allowing you to focus entirely on your observations and road positioning. It is the fastest way to get your confidence back."
    },
    {
      question: "Will you take me on the motorways if I'm scared of them?",
      answer: "Only when you feel ready. We can dedicate time specifically to [motorway lessons](/motorway-lessons) as part of your refresher training. We will practice joining, lane discipline, and exiting at your own pace, ensuring you feel comfortable handling high-speed traffic again."
    },
    {
      question: "How many sessions will I need to feel confident again?",
      answer: "There's no set number because everyone is different. Some people find a single 2-hour session is enough to blow away the cobwebs, while others prefer a short course of 5 or 10 hours to really master local hotspots in [Bradford](/bradford) or [Leeds](/leeds). We'll give you honest feedback as we go."
    },
    {
      question: "Can we practice specific routes, like my commute to work?",
      answer: "Absolutely! This is one of the most useful things we can do. We can practice your exact route to work, the local supermarket, or your children's school. Mastering a specific route is a brilliant way to build real-world confidence that carries over into your daily life."
    },
    {
      question: "I've moved to West Yorkshire and find the roads overwhelming—can you help?",
      answer: "The roads around here can be tricky, especially with busy junctions and steep hills. We'll help you navigate the unique challenges of local driving, from the busy multi-lane roundabouts in Leeds to the narrow residential streets in Bradford. We'll teach you the local road layouts so you're never caught off guard."
    },
    {
      question: "Do I need to have my own car for refresher lessons?",
      answer: "No, you will use our dual-controlled instructor car for your lessons. This provides a safety net while you are getting back into the swing of things. If you have your own car and would prefer to use it once we've assessed your driving, we can discuss that too, provided it is fully insured."
    },
    {
      question: "What happens if I make a mistake during the lesson?",
      answer: "Nothing bad! All of our instructors are incredibly patient and non-judgmental. Because we use dual-controlled cars, we can step in to keep things safe if needed. We're here to support you and help you learn from those small errors so they don't happen when you're driving on your own."
    },
    {
      question: "I recently had a minor accident and I'm scared to drive. How can you help?",
      answer: "We specialize in [nervous driver lessons](/nervous-driver-lessons). After an accident, it is natural to feel hesitant. We'll work on rebuilding your trust in your own judgment and the car's reactions. We take a very slow, calm approach, ensuring you feel 100% safe at every stage."
    },
    {
      question: "Is there a test at the end of refresher lessons?",
      answer: "No, there is no test at all. Refresher lessons are entirely for you and your own personal confidence. There is no pressure to perform or pass anything. The goal is simply for you to feel safe, confident, and happy behind the wheel again. You decide when you've done enough sessions."
    },
    {
      question: "Can you help me with parking? I've always struggled with it.",
      answer: "Definitely. We can spend an entire session just on different types of parking if you like. Whether it is parallel parking on a busy slope or reversing into a bay at the supermarket, we'll show you simple, reliable techniques that take the guesswork out of it."
    },
    {
      question: "Are your instructors patient with people who haven't driven for a long time?",
      answer: "Yes, patience is our superpower. We hand-pick our instructors for their calm and supportive nature. We understand that you're not a student in the traditional sense, but a license holder who just needs a bit of a boost. We treat every student with total respect and kindness."
    },
    {
      question: "What if I'm not sure if I need refresher lessons or a full course?",
      answer: "If you already have a full UK license, refresher lessons are the way to go. We can help you prepare for the reality of independent driving with [mock driving test](/mock-driving-tests) style assessments if you want an objective check of your skills before you venture out alone."
    },
    {
      question: "How do I get started with booking my first refresher session?",
      answer: "The easiest way is to [contact us](/contact) for a friendly, no-pressure chat. Tell us about your driving history and what makes you feel nervous. We'll then match you with one of our local instructors in Bradford or Leeds who best fits your needs."
    }
  ];

  return (
    <div className="bg-white animate-fadeIn refresher-lessons-page">
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "Refresher Driving Lessons",
          "Professional automatic refresher driving lessons in Bradford and Leeds. Rebuild your driving confidence at your own pace with calm, patient instructors.",
          "https://fastautopass.co.uk/refresher-lessons"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Refresher Lessons", item: "https://fastautopass.co.uk/refresher-lessons" }
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

      {/* Breadcrumbs UI */}
      <div className="bg-gray-900 border-b border-gray-800 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex text-xs font-black uppercase italic tracking-widest text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-red-600">/</span>
            <span className="text-white">Refresher Lessons</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-32 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-7/12 text-center lg:text-left">
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic drop-shadow-2xl">
                Refresher Driving <br/><span className="text-red-500">Lessons</span> in <br/>Bradford & Leeds
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-medium mb-10 italic">
                Get back on the road with confidence, at your own pace, with calm and patient guidance.
              </p>
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
              <BookingForm areaName="Refresher Lessons" />
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              Who This Is For
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-medium leading-relaxed italic max-w-3xl mx-auto">
              Our refresher sessions are entirely tailored to license holders who want a bit of extra support. Whether you haven't driven in a long time or just moved to the area, we're here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Long-term Breaks", desc: "Haven't driven in years or even decades? We help people return to the wheel from the ground up." },
              { title: "Nervous Drivers", desc: "Lost your confidence after an accident or simply find the busy West Yorkshire roads overwhelming?" },
              { title: "New to the Area", desc: "Just moved to the area? We'll help you navigate the tricky roundabouts and junctions in Leeds and Bradford." },
              { title: "Switching to Automatic", desc: "Experience a smoother, easier way to drive that lets you focus more on the road and less on the gear stick." },
              { title: "New to UK Roads", desc: "Hold an international license but feeling nervous about UK road layouts? We'll help you adapt quickly." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-black mb-4 uppercase italic text-gray-900">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed italic text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVING AFTER A LONG BREAK */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-white">
            Driving After a Long Break
          </h2>
          <p className="text-xl text-gray-400 font-medium leading-relaxed italic mb-10">
            If it's been years since you last drove, it's natural to feel anxious. We specialize in helping nervous license holders return to the road safely. We start in very quiet areas with no pressure, helping you rebuild your muscle memory before tackling busier junctions.
          </p>
          <div className="flex justify-center">
            <TrustBadges dark minimal />
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL PRACTISE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              What You'll Practise
            </h2>
            <div className="h-2 w-24 bg-red-600 mb-8"></div>
            <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
              We don't follow a rigid plan. We listen to what worries you most and focus on those areas to build real confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-gray-600 font-medium">
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic"><span className="w-2 h-2 bg-red-600 rounded-full"></span><span>Complex Roundabouts</span></li>
              <li className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic"><span className="w-2 h-2 bg-red-600 rounded-full"></span><span>Busy Multi-lane Junctions</span></li>
              <li className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic"><span className="w-2 h-2 bg-red-600 rounded-full"></span><span>Safe Motorway Merging</span></li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic"><span className="w-2 h-2 bg-red-600 rounded-full"></span><span>Parallel & Bay Parking</span></li>
              <li className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic"><span className="w-2 h-2 bg-red-600 rounded-full"></span><span>Rush-hour Traffic</span></li>
              <li className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic"><span className="w-2 h-2 bg-red-600 rounded-full"></span><span>Out-of-town Rural Lanes</span></li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic"><span className="w-2 h-2 bg-red-600 rounded-full"></span><span>Navigating via Sat-Nav</span></li>
              <li className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic"><span className="w-2 h-2 bg-red-600 rounded-full"></span><span>Hazard Perception</span></li>
              <li className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic"><span className="w-2 h-2 bg-red-600 rounded-full"></span><span>Confident Overtaking</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <h2 className="text-3xl lg:text-5xl font-black mb-16 italic uppercase tracking-tighter text-gray-900 text-center">
            How Refresher Lessons Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Friendly Chat", text: "We start by talking about your experience and what makes you feel nervous. No judgment, just understanding." },
              { step: "02", title: "Assessment Drive", text: "We'll go for a quiet drive so your instructor can see where you're at. We always start in a low-pressure environment." },
              { step: "03", title: "Tailored Coaching", text: "We focus on your specific goals—whether it's getting to work, the school run, or the motorway." }
            ].map((item, i) => (
              <div key={i} className="relative p-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <span className="text-5xl font-black text-red-600/10 italic absolute top-6 right-8 leading-none">{item.step}</span>
                <h3 className="text-2xl font-black uppercase italic mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed italic">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW MANY LESSONS WILL I NEED */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              How Many Refresher Lessons Will I Need?
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
          </div>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6 mx-auto italic text-center">
            <p>
              Everyone is different. Some drivers find that just one or two 2-hour sessions are enough to blow away the cobwebs.
            </p>
            <p>
              Others prefer a short course of 5–10 hours to really master things like the busy junctions in <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link> or the unique road layouts in <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link>. We'll give you honest feedback and let you decide how much support you want.
            </p>
          </div>
        </div>
      </section>

      {/* MANUAL TO AUTOMATIC REFRESHER LESSONS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
            Manual to Automatic Refresher Lessons
          </h2>
          <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-medium leading-relaxed italic mb-8">
            Many people who passed in a manual car years ago choose to switch to automatic when they return to driving. Our <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic driving lessons</Link> remove the stress of gear changes and stalling, allowing you to focus entirely on your observations and road positioning. It is the fastest way to get your confidence back.
          </p>
        </div>
      </section>

      {/* AREAS WE COVER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
            Areas We Cover
          </h2>
          <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-medium leading-relaxed italic mb-10">
            We provide local refresher lessons across most of West Yorkshire, focusing specifically on <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford</Link> and <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds</Link>. Whether you need to practice a specific route or just want to feel safe driving to your local shops, we've got you covered.
          </p>
        </div>
      </section>

      {/* RECENT PASSES */}
      <RecentPasses areaName="Bradford & Leeds" title="Real Learner Progress in Bradford & Leeds" />

      {/* TESTIMONIALS */}
      <ReviewsSlider />

      {/* WHY CHOOSE FASTAUTOPASS */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Why Choose FastAutoPass
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6 italic">
                <p>
                  Returning to driving isn't just about technical skill—it's about emotional confidence. Our instructors are chosen for their calm energy and ability to make learners feel safe.
                </p>
                <p>
                  With deep local knowledge of the area, we can help you master the specific junctions and routes that matter most to your daily life.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Calm, Patient Approach",
                "Local Road Experts",
                "Flexible Lesson Times",
                "Non-Judgmental Coaching",
                "Modern Dual-Controls",
                "Patient Guidance"
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full shrink-0"></div>
                  <span className="text-sm font-black uppercase italic tracking-tight text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE MORE DRIVING SERVICES */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Explore More Driving Services
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">You may also be interested in these related services</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              { name: "Automatic Driving Lessons", path: "/automatic-driving-lessons" },
              { name: "Manual Driving Lessons", path: "/manual-driving-lessons" },
              { name: "Intensive Driving Courses", path: "/intensive-driving-courses" },
              { name: "Mock Driving Tests", path: "/mock-driving-tests" },
              { name: "Pass Plus Courses", path: "/pass-plus" }
            ].map((service, i) => (
              <Link 
                key={i} 
                to={service.path} 
                className="bg-white px-8 py-4 rounded-2xl border border-gray-200 font-black text-sm text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase italic tracking-widest shadow-sm"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION (BOTTOM) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Supportive answers for returning drivers</p>
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

      {/* Call Booking Team Popup */}
      {showCallPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-slideUp">
            <div className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter text-gray-900">Call Booking Team</h3>
              <p className="text-gray-500 font-medium mb-8 italic">Our team is available to discuss your refresher lessons.</p>
              
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

export default RefresherLessonsPage;

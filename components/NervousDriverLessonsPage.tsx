import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import ReviewsSlider from './ReviewsSlider';
import RecentPasses from './RecentPasses';
import Breadcrumbs from './Breadcrumbs';
import TrustBadges from './TrustBadges';
import Schema from './Schema';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';
import { 
  ChevronDown
} from 'lucide-react';

import SEO from './SEO';

const NervousDriverLessonsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  useEffect(() => {
    // window.scrollTo removed from SEO to avoid duplication if needed, 
    // but here it's fine to keep or remove. The manager said only smallest change.
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
      question: "Can I really learn to drive if I'm extremely nervous?",
      answer: "Absolutely. Many of our most successful students started with high levels of anxiety and a genuine fear of being behind the wheel. We don't rush you; we adapt every lesson to suit your comfort level and emotional state. Our [automatic driving lessons](/automatic-driving-lessons) are particularly popular for reducing stress."
    },
    {
      question: "What if I've had a bad experience with a previous instructor?",
      answer: "We understand that a negative experience can set you back. Our instructors are chosen specifically for their patience and calm demeanour, ensuring you never feel pressured or judged. We focus on rebuilding your trust in the car and your own ability."
    },
    {
      question: "How do you handle the fear of busy roads and junctions?",
      answer: "Busy roads are a common worry, but we never throw you into the deep end before you are ready. We start on very quiet residential streets where you can master the car's controls comfortably until your confidence grows naturally."
    },
    {
      question: "What if I'm terrified of roundabouts?",
      answer: "Roundabouts can feel chaotic, but they are actually very structured. We break them down into manageable steps, starting with quiet mini-roundabouts before moving to larger ones. We have great practice spots in [Bradford](/bradford) and [Leeds](/leeds) for this."
    },
    {
      question: "What happens in my very first lesson for nervous drivers?",
      answer: "Your first hour is all about putting you at ease. We'll pick a very quiet area where there's almost no other traffic. We spend time getting you comfortable with the seat and controls before we even think about moving, ensuring you feel in total control from the start."
    },
    {
      question: "Are your instructors really as patient as you say?",
      answer: "Yes, we hand-pick our team for their character as much as their teaching skills. We know that as a nervous driver, you need someone who speaks calmly, never rushes you, and understands that mistakes are just part of the journey. We treat every student with real respect."
    },
    {
      question: "How long will it take for me to feel confident behind the wheel?",
      answer: "Confidence builds at different speeds for everyone, so we never set a strict timeline. Some people feel a shift in a few weeks, others take longer. We focus on 'stacking' small wins—mastering a junction or a turn—until you realize you're handling roads that used to worry you."
    },
    {
      question: "I'm scared of making a mistake and causing an accident. How do you prevent this?",
      answer: "Safety is our priority. All our cars have dual controls, meaning your instructor can stop the car or steer at any second. We act as your safety net, so you can practice your skills knowing that we'll never let anything dangerous happen while you're learning. You're never alone."
    },
    {
      question: "Is it normal to feel like I'll never be able to do it?",
      answer: "It is 100% normal! Almost every nervous student tells us the same thing on day one. Driving is a complex skill, but like anything, it gets easy with repetition. We break it down so simply that you'll find yourself performing actions naturally before you even have time to worry."
    },
    {
      question: "Can nervous drivers still pass their test first time?",
      answer: "Absolutely. In fact, nervous drivers often pass first time because they are naturally more observant and careful. Once we help you channel that caution into confidence, you'll be a very safe driver. We can even use [mock driving tests](/mock-driving-tests) to help you get used to the exam format."
    },
    {
      question: "Are automatic cars better for people with driving anxiety?",
      answer: "We find that [automatic driving lessons](/automatic-driving-lessons) are a huge help. Without a clutch or gear stick to worry about, you can keep both hands on the wheel and focus entirely on the road. It removes a lot of the 'physical' stress, making the whole experience feel much more peaceful."
    },
    {
      question: "What tips do you have for staying calm during a lesson?",
      answer: "Controlled breathing is great, but the best way to stay calm is knowing you have a plan. We use clear instructions and simple visual aids so you always know what to expect. If you ever feel a bit much, we'll just pull over for a two-minute reset. You are always the boss of the pace."
    },
    {
      question: "What if I feel a panic attack coming on or need to stop suddenly?",
      answer: "If you need a breather, we pull over immediately. We are used to helping people manage stress. We'll stop in a safe spot, have a quiet chat, and only move off again when you feel ready. We never force you to keep driving if you're not feeling up to it at that moment."
    },
    {
      question: "How do I start my journey if I'm feeling really anxious about it?",
      answer: "The best first step is to [contact us](/contact) for a friendly chat. Tell us about your worries so we can match you with the right instructor. We can even discuss [intensive driving courses](/intensive-driving-courses) if you'd prefer to get it done in a shorter window. We're here to help you start calmly."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-red-600 selection:text-white nervous-drivers-page">
      <SEO 
        title="Nervous Driver Lessons Bradford & Leeds | Patient Instructors | FastAutoPass"
        description="Calm, patient, and supportive automatic driving lessons for nervous learners in Bradford and Leeds. Build confidence at your own pace with our supportive instructors."
        canonical="https://fastautopass.co.uk/nervous-driver-lessons"
      />
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "Nervous Driver Lessons",
          "Patient and supportive automatic driving lessons for nervous learners in Bradford and Leeds. Build driving confidence at your own pace.",
          "https://fastautopass.co.uk/nervous-driver-lessons"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Nervous Driver Lessons", item: "https://fastautopass.co.uk/nervous-driver-lessons" }
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
      {/* 1. HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-32 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-7/12 text-center lg:text-left">
              <Breadcrumbs city="Bradford & Leeds" area="Nervous Driver Lessons" />
              
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic drop-shadow-2xl mt-8">
                Nervous Driver <br/><span className="text-red-500">Lessons</span> in <br/>Bradford & Leeds
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-10 font-medium leading-relaxed max-w-2xl">
                It’s completely normal to feel a bit anxious about getting behind the wheel. We help you build your skills with <Link to="/automatic-driving-lessons" className="text-red-500 font-bold hover:underline">automatic driving lessons</Link> that move at your pace, ensuring you always feel in control.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mt-10">
                <a 
                  href="#enquiry" 
                  className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-xl text-center hover:bg-red-700 shadow-2xl transition-all uppercase italic tracking-widest"
                >
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

      {/* 2. "IT'S OKAY TO FEEL NERVOUS" SECTION */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <p className="text-lg lg:text-xl text-gray-500 font-bold uppercase tracking-widest italic mb-12">
              A Calm, Supportive Approach to Learning
            </p>
            <div className="prose prose-xl text-gray-600 mx-auto space-y-8 text-left lg:text-center">
              <p className="font-medium">
                Feeling a knot in your stomach before a lesson is something many of our learners experience. Whether you’re a complete beginner or returning to the road after a long break, the thought of busy junctions in Bradford or Leeds city traffic can feel daunting.
              </p>
              <p className="font-medium">
                We don’t just teach you the mechanics of driving; we focus on making you feel safe. Our instructors understand that confidence isn't something you're born with—it's something we build together, one quiet street at a time. There’s no shouting, no pressure, and absolutely no judgment. Just a calm environment where you can learn at a pace that feels right for you.
              </p>
              <p className="font-medium">
                Every lesson is designed to be gradual. We start where you feel safe and only move forward when you are ready. You are always in control of the car and the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT LEARNERS SAY */}
      <ReviewsSlider />
      {/* 4. RECENT PASSES – BRADFORD & LEEDS */}
      <RecentPasses areaName="Bradford & Leeds" />

      {/* 5. HOW WE HELP YOU FEEL IN CONTROL */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight italic uppercase">How we help you feel in control</h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto italic">We believe that the best way to overcome driving anxiety is to ensure you never feel out of your depth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Calm starts", 
                desc: "We always begin in quiet, residential areas where traffic is minimal. This gives you the space to get used to the car's controls without the distraction of other drivers or busy roads." 
              },
              { 
                title: "Step-by-step progress", 
                desc: "We break every skill down into small, manageable chunks. We won't move on to something new until you feel 100% comfortable with what we've already covered." 
              },
              { 
                title: "No pressure learning", 
                desc: "Our team is chosen for their patience and understanding. If you need to spend an extra lesson perfecting a turn or just getting used to the feel of the car, that’s exactly what we’ll do." 
              }
            ].map((item, i) => (
              <div key={i} className="text-center bg-white p-10 rounded-3xl shadow-sm border border-gray-100 group">
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-red-600 transition-all duration-500 transform group-hover:rotate-6 shadow-sm">
                  <span className="text-3xl font-black text-red-600 group-hover:text-white">0{i+1}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TACKLING YOUR WORRIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight italic uppercase">Tackling Your Worries</h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto italic">We know exactly which parts of driving tend to cause the most stress. Here is how we help you tackle them calmly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Busy roads", 
                desc: "The chaos of city traffic can feel overwhelming. We avoid busy routes entirely until your car control is second nature and you feel ready to handle more activity." 
              },
              { 
                title: "Roundabouts", 
                desc: "Large junctions can be confusing. We simplify them with clear, easy-to-follow techniques, starting with small mini-roundabouts before moving to larger ones." 
              },
              { 
                title: "Hill starts", 
                desc: "The fear of rolling back is a big one. In our automatic cars, this is much easier to manage, and we’ll practice on gentle slopes until you’re completely confident." 
              },
              { 
                title: "Test nerves", 
                desc: "The pressure of the exam is real. We use realistic mock driving tests to help you get used to the format, so the real thing feels like just another lesson." 
              },
              { 
                title: "Previous bad experience", 
                desc: "If a past instructor made you feel stressed, we help you hit the reset button. We focus on positive reinforcement to help you enjoy being behind the wheel again." 
              },
              { 
                title: "Fear of mistakes", 
                desc: "Everyone makes mistakes when they’re learning. We create a safe space where a stalled engine or a missed turn is just a chance to learn, not a reason to panic." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-red-200 transition-all group">
                <h3 className="text-xl font-black text-gray-900 mb-4 uppercase italic tracking-tight group-hover:text-red-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE JOURNEY TO CONFIDENCE */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight italic uppercase">The Journey to Confidence</h2>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto italic">We take a structured approach that builds your skills and self-belief from the very first hour.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Start quiet", 
                desc: "Your first few hours will be spent on very quiet side streets. You’ll learn how to move, stop, and steer the car without having to worry about other traffic or complex junctions." 
              },
              { 
                title: "Build gradually", 
                desc: "Once you’re comfortable with the basics, we’ll start introducing simple turns and quiet junctions. We move at your pace, ensuring you feel in control of the car at every stage." 
              },
              { 
                title: "Real roads", 
                desc: "As your self-belief grows, we’ll begin navigating slightly busier roads. You’ll learn how to anticipate other drivers and manage your speed calmly in everyday traffic conditions." 
              },
              { 
                title: "Independence", 
                desc: (
                  <>
                    The final stage is about making you feel ready for anything. We’ll practice common test routes and use <Link to="/mock-driving-tests" className="text-red-500 font-bold hover:underline">mock driving tests</Link> to ensure you’re ready to pass and drive safely on your own.
                  </>
                )
              }
            ].map((step, i) => (
              <div key={i} className="relative p-8 bg-gray-800/50 rounded-3xl border border-gray-700 hover:border-red-500 transition-all">
                <div className="text-5xl font-black text-red-600/20 absolute top-4 right-6 italic">0{i+1}</div>
                <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight relative z-10">{step.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY LEARNERS FEEL COMFORTABLE WITH US */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-10 tracking-tight italic uppercase leading-tight">Why learners feel <br/><span className="text-red-600">comfortable</span> with us</h2>
              <div className="space-y-10">
                {[
                  { 
                    title: "Calm teaching", 
                    desc: "Our instructors are naturally patient people who enjoy helping others overcome their fears. We focus on clear communication and a supportive atmosphere in every session." 
                  },
                  { 
                    title: "No pressure", 
                    desc: "You decide the goals for each lesson. If you don't feel ready for a certain road or manoeuvre, we don't push you. Your comfort is our absolute priority." 
                  },
                  { 
                    title: "Adapting to you", 
                    desc: "We know that everyone learns differently. We tailor our coaching to match your personality, whether you need more technical detail or just a bit of extra encouragement." 
                  },
                  { 
                    title: "Confidence first", 
                    desc: "We believe that a confident driver is a safe driver. We celebrate your progress and help you see how far you’ve come, turning 'I can't' into 'I just did'." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                      <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-2 uppercase italic tracking-tight">{item.title}</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/calm/800/800" 
                  alt="Calm driving lesson" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white text-gray-900 p-10 rounded-3xl shadow-2xl hidden lg:block max-w-sm border border-gray-100">
                <p className="text-lg font-medium leading-relaxed text-gray-600 italic">
                  "We understand that every driver is different. Some people feel ready for the main road in a few hours, while others prefer to stay on quiet streets for longer. We never rush you, and we never judge. Our only goal is to help you become a safe, capable driver at a pace that feels right for you."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOCAL SUPPORT in BRADFORD & LEEDS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-8 tracking-tight italic uppercase leading-tight">
                Local support in <br/><span className="text-red-600">Bradford & Leeds</span>
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
                <p>
                  We provide supportive driving lessons across the whole region, from the quiet suburbs of North Leeds to the residential streets of Bradford. We know the best local spots to start your journey—places where you can practice without the glare of a busy city centre.
                </p>
                <p>
                  If you're looking for <Link to="/refresher-lessons" className="text-red-600 font-bold hover:underline">refresher lessons</Link> to get back on the road or would prefer to learn with a <Link to="/female-driving-instructor" className="text-red-600 font-bold hover:underline">female driving instructor</Link>, our local team is here to help you feel at ease.
                </p>
                <p>
                  Our goal is to make sure you feel supported from your very first hour until the moment you pass your test. We focus on building a solid foundation of skills in a relaxed environment, ensuring you have the self-belief to handle any road situation with a level head.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-8 text-center">Where you’ll build confidence step by step</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Quiet residential Bradford streets",
                  "Suburban Leeds training routes",
                  "Calm mini-roundabouts",
                  "Gentle hill start locations",
                  "Low-traffic practice zones",
                  "Local test route familiarisation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-bold uppercase tracking-tight italic text-gray-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-medium italic mb-6 text-center">
                  You can find more details on our <Link to="/bradford" className="text-red-600 font-bold hover:underline">Bradford Hub</Link> and <Link to="/leeds" className="text-red-600 font-bold hover:underline">Leeds Hub</Link> pages.
                </p>
                <div className="flex justify-center">
                  <Link to="/mock-driving-tests" className="text-xs font-black uppercase italic tracking-widest text-red-600 hover:text-red-700">Mock Driving Tests</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NERVOUS DRIVER FAQ */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight italic uppercase">
              Nervous Driver FAQs
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto"></div>
            <p className="mt-8 text-lg text-gray-600 font-medium">Everything you need to know about starting your journey with us.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-black text-gray-900 text-lg uppercase italic tracking-tight group-hover:text-red-600 transition-colors">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-8 bg-gray-50">
                        <div className="text-gray-600 font-medium leading-relaxed text-lg italic">
                          {renderMarkdownLinks(faq.answer)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              <p className="text-gray-500 font-medium mb-8 italic">Our team is available to discuss your nervous driver lessons.</p>
              
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

export default NervousDriverLessonsPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import TrustBadges from './TrustBadges';
import BookingForm from './BookingForm';
import ReviewsSlider from './ReviewsSlider';
import { CONTACT_INFO } from '../constants';
import Schema from './Schema';
import { getLocalBusinessSchema, getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const MarkdownLink: React.FC<any> = ({ href, children, ...props }) => {
  const isInternal = href?.startsWith('/');
  const classes = "text-red-600 font-bold hover:underline transition-colors";
  
  if (isInternal) {
    return <Link to={href} className={classes}>{children}</Link>;
  }
  return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
};

const FAQItem: React.FC<{ faq: { question: string; answer: string }; idx: number }> = ({ faq, idx }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${idx}`}
        className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left group"
      >
        <span className="text-base font-black uppercase italic text-gray-900 pr-8 leading-tight group-hover:text-red-600 transition-colors">{faq.question}</span>
        <span className={`text-red-600 font-black transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
      </button>
      <div 
        id={`faq-answer-${idx}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-8 bg-white prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed border-t border-gray-100">
          <ReactMarkdown components={{ a: MarkdownLink }}>{faq.answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

const FemaleInstructorsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Do you have female driving instructors available in Bradford and Leeds?",
      answer: "Yes, we have a dedicated team of female instructors covering both [Bradford](/bradford) and [Leeds](/leeds). We understand that many learners feel more at ease with a female teacher, and we work hard to ensure we can meet this preference whenever possible. Our instructors are highly experienced, patient, and familiar with all local test routes."
    },
    {
      question: "Why do many learners prefer a female driving instructor?",
      answer: "Learners choose female instructors for many reasons. For some, it's about feeling more comfortable and relaxed in a smaller, enclosed space. Others find that female instructors often bring a particularly calm and empathetic approach to teaching, which is incredibly helpful for nervous drivers or those with anxiety. We also respect cultural and religious preferences where a female instructor is required."
    },
    {
      question: "Are your female instructors experienced with nervous learners?",
      answer: "Absolutely. Our female team is dedicated to helping nervous or anxious learners build their confidence at a pace that feels right for them. We focus on creating a supportive, pressure-free environment where you can learn the basics before moving on to busier roads. Many of our students who were initially terrified of driving are now successful, confident license holders."
    },
    {
      question: "Do you offer automatic lessons with female instructors?",
      answer: "Yes, we focus entirely on [automatic driving lessons](/automatic-driving-lessons) across West Yorkshire. All our female instructors teach in modern, dual-controlled automatic cars. Learning in an automatic can significantly reduce stress as there's no clutch or gears to worry about, allowing you to focus entirely on your steering, observation, and the road ahead."
    },
    {
      question: "Can I book an intensive course with a female instructor?",
      answer: "We do offer [intensive driving courses](/intensive-driving-courses) with our female instructors, subject to their current availability. These courses are great for learners who want to reach test standard quickly. Because these blocks of time are longer, having an instructor you feel completely comfortable with is even more important for maintaining focus and staying relaxed."
    },
    {
      question: "Will my female instructor know the local Bradford and Leeds test routes?",
      answer: "Yes, our instructors are familiar with all local test routes. They know the specific challenges of test centres like Thornbury and Heaton in Bradford, as well as Horsforth and Harehills in Leeds. They will guide you through the exact junctions, roundabouts, and tricky spots that examiners frequently use, ensuring you are fully prepared for your practical test."
    },
    {
      question: "How do I request a female instructor when booking?",
      answer: "When you fill out our [booking form](#hero-form), simply mention in the notes that you have a preference for a female instructor. Our booking team will then check the current availability in your specific area. If we have a female instructor with space in her diary, we will prioritize matching you with her."
    },
    {
      question: "What if there is a waiting list for a female instructor?",
      answer: "Because our female instructors are in high demand, there can sometimes be a short wait for a start date. We will always be honest about lead times. If you are in a hurry, we can also discuss our other calm and patient male instructors, but if your preference is strictly for a female teacher, we will keep you updated as soon as a slot becomes available."
    },
    {
      question: "Is the teaching style different with a female instructor?",
      answer: "While every instructor has their own unique approach, many learners find that female instructors tend to be particularly patient and supportive. They often excel at breaking down complex maneuvers into simple, manageable steps. Our goal is always to provide a structured, professional, yet warm environment that makes learning to drive an enjoyable experience."
    },
    {
      question: "Do you support learners with religious or cultural requirements?",
      answer: "Yes, we are very experienced in supporting learners who require a female instructor for religious or cultural reasons. We provide a respectful and professional service that ensures you can learn to drive in an environment where you feel completely safe and comfortable. This is a very common request for us in both Bradford and Leeds."
    },
    {
      question: "Can a female instructor help me if I've failed my test before?",
      answer: "Definitely. If you've had a bad experience or failed a test previously, a fresh start with a supportive female instructor can be exactly what you need. We'll help you identify why things went wrong and work on those specific areas using [mock driving tests](/mock-driving-tests) to ensure you are 100% ready for your next attempt."
    },
    {
      question: "How do I get started with a female instructor at FastAutoPass?",
      answer: "The best way to start is by [contacting us](/contact) today. We'll have a quick chat about your goals, your location, and your availability. From there, we can check our female instructor team's diary and get your first lesson in the calendar. We look forward to helping you become a safe, confident driver!"
    }
  ];

  return (
    <div className="bg-white animate-fadeIn female-instructors-page">
      <SEO 
        title="Female Driving Instructors Bradford & Leeds | FastAutoPass"
        description="Find calm and patient female driving instructors for automatic driving lessons in Bradford and Leeds. Supportive tuition for nervous learners and cultural preferences."
        canonical="https://fastautopass.co.uk/our-instructors"
      />
      <Schema 
        type="LocalBusiness" 
        data={getLocalBusinessSchema()} 
      />
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "Female Driving Instructors",
          "Find calm and patient female driving instructors for automatic lessons in Bradford and Leeds. Supportive tuition for nervous learners.",
          "https://fastautopass.co.uk/female-driving-instructors"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Female Instructors", item: "https://fastautopass.co.uk/female-driving-instructors" }
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
              "text": "Information about female driving instructors and automatic lessons with FastAutoPass in Bradford and Leeds."
            }
          }))
        }} 
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 lg:py-32 border-b-8 border-red-600 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-none">
                Female Driving <span className="text-red-600">Instructors</span> Bradford & Leeds
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl font-medium mb-10 italic leading-relaxed">
                Find a calm, patient, and supportive female instructor for your <Link to="/automatic-driving-lessons" className="font-bold text-red-600 hover:underline">automatic driving lessons</Link>. We provide a relaxed learning environment across all areas of Bradford and Leeds.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <a href="#hero-form" className="bg-red-600 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-red-700 transition-all shadow-xl uppercase italic tracking-widest text-center w-full sm:w-auto">
                  Send Enquiry
                </a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="bg-white text-gray-900 px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-xl uppercase italic tracking-widest text-center w-full sm:w-auto">
                  Call Now
                </a>
              </div>
              <div className="mt-12 flex items-center justify-start">
                <TrustBadges dark minimal />
              </div>
            </div>
            <div id="hero-form" className="w-full flex justify-center lg:justify-end [&>div]:max-w-2xl">
              <BookingForm areaName="Female Instructors Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Prefer Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Why Many Learners Prefer a <span className="text-red-600">Female Instructor</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed italic">
                <p>
                  Learning to drive is a major milestone, but for many, it can be a source of significant anxiety. We've found that a large number of our students specifically request a female instructor because they feel it creates a more approachable and less intimidating atmosphere inside the car.
                </p>
                <p>
                  Whether it's a preference for a certain communication style, cultural or religious requirements, or simply feeling more at ease in a one-on-one setting with another woman, we believe your comfort is the most important factor in how quickly you learn.
                </p>
                <p>
                  Our female team is known for being incredibly patient and understanding. They don't just teach you how to pass a test; they help you overcome your fears and build the genuine confidence needed to handle busy West Yorkshire roads independently.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Calm & Patient", desc: "A supportive environment where you never feel rushed or pressured." },
                { title: "Anxiety Support", desc: "Experienced in helping nervous learners find their confidence." },
                { title: "Local Knowledge", desc: "Deep understanding of Bradford and Leeds test routes." },
                { title: "Cultural Respect", desc: "Providing a comfortable space for all religious and cultural needs." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-red-200 transition-colors">
                  <h3 className="text-xl font-black uppercase italic mb-3 text-red-600 tracking-tight">{item.title}</h3>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-tight leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FastAutoPass */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-6xl font-black mb-12 italic uppercase tracking-tighter leading-tight">
            Why Choose <span className="text-red-600">FastAutoPass?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight">Trust & Support</h3>
              <p className="text-gray-400 font-medium italic">We are a well-established school with a reputation for reliability and high-quality instruction across West Yorkshire.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight">Automatic Focus</h3>
              <p className="text-gray-400 font-medium italic">We focus exclusively on <Link to="/automatic-driving-lessons" className="font-bold text-red-600 hover:underline">automatic driving lessons</Link>, making the learning process smoother and faster for you.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight">Local Knowledge</h3>
              <p className="text-gray-400 font-medium italic">Our instructors live and work in Bradford and Leeds, meaning they know every tricky junction and quiet practice spot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Female Automatic Lessons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
            Female <span className="text-red-600">Automatic</span> Driving Lessons
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12 italic">
            Many of our learners find that combining a female instructor with an automatic car is the perfect recipe for success. Without the distraction of a clutch pedal or gear stick, you can focus entirely on your surroundings and hazard perception. This often leads to faster progress and a much more enjoyable learning experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/automatic-driving-lessons" className="text-red-600 font-black uppercase italic tracking-widest hover:underline underline-offset-8">Learn more about automatic lessons →</Link>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-12 italic uppercase tracking-tighter text-gray-900 leading-tight">
            Local Coverage in <span className="text-red-600">Bradford & Leeds</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 text-left">
              <h3 className="text-2xl font-black uppercase italic mb-6 text-red-600 tracking-tight">Bradford Areas</h3>
              <p className="text-gray-600 font-medium italic mb-6">Our female instructors cover the entire Bradford district, including Thornbury, Heaton, Eccleshill, Shipley, and <Link to="/bradford/keighley" className="font-bold text-red-600 hover:underline">Keighley</Link>. We are familiar with all local test routes and quiet practice areas near the Heaton Test Centre or the <Link to="/driving-test-centres/steeton-driving-test-centre" className="font-bold text-red-600 hover:underline">Steeton Test Centre</Link>.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Thornbury', 'Heaton', 'Steeton', 'Eccleshill', 'Shipley', 'Idle', 'Baildon', 'Manningham', 'Girlington'].map((area) => (
                  <span key={area} className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 italic border border-gray-100">{area}</span>
                ))}
              </div>
              <Link to="/bradford" className="text-xs font-black uppercase tracking-widest text-red-600 hover:underline transition-colors italic">View all Bradford areas →</Link>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 text-left">
              <h3 className="text-2xl font-black uppercase italic mb-6 text-red-600 tracking-tight">Leeds Areas</h3>
              <p className="text-gray-600 font-medium italic mb-6">Providing patient female tuition across Leeds, from Headingley and Horsforth to Harehills, Roundhay, and <Link to="/leeds/pudsey" className="font-bold text-red-600 hover:underline">Pudsey</Link>. We know the tricky junctions examiners love to use near the <Link to="/driving-test-centres/horsforth-driving-test-centre" className="font-bold text-red-600 hover:underline">Horsforth Test Centre</Link>.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Headingley', 'Horsforth', 'Harehills', 'Roundhay', 'Pudsey', 'Beeston', 'Armley', 'Bramley'].map((area) => (
                  <span key={area} className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 italic border border-gray-100">{area}</span>
                ))}
              </div>
              <Link to="/leeds" className="text-xs font-black uppercase tracking-widest text-red-600 hover:underline transition-colors italic">View all Leeds areas →</Link>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/recent-passes" className="text-red-600 font-black uppercase italic tracking-widest hover:underline underline-offset-8">See our recent test passes →</Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSlider />

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
            <Link to="/pass-plus" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">Pass Plus Courses</Link>
            <Link to="/motorway-lessons" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">Motorway Lessons</Link>
            <Link to="/mock-driving-tests" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">Mock Driving Tests</Link>
            <Link to="/test-preparation" className="px-8 py-4 bg-white border border-gray-100 rounded-full text-sm font-black uppercase italic tracking-widest text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm">DVSA Test Preparation</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900 leading-tight">
              Female Instructor FAQs
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Common Questions from Learners in Bradford & Leeds</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} idx={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FemaleInstructorsPage;
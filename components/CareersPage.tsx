import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import ReviewsSlider from './ReviewsSlider';
import Schema from './Schema';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

const CareersPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  useEffect(() => {
    document.title = "Join Our Team – Driving Instructor Careers in Bradford & Leeds | FastAutoPass";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Build a rewarding driving instructor career with FastAutoPass in Bradford and Leeds. We offer a supportive local team, steady work, and a calm professional environment for ADIs and PDIs.');
  }, []);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "Can I become a driving instructor with no experience?",
      answer: "Yes, you certainly can. Most people who become driving instructors come from completely different career backgrounds. What matters most is that you have a full UK driving licence (held for at least three years), a clean record, and a patient, helpful personality. We can help guide you through the process of getting started."
    },
    {
      question: "How long does it take to qualify as a driving instructor?",
      answer: "It varies depending on how much time you can dedicate to your training, but on average, it takes between six months to a year. There are three parts to the qualifying process, and we're here to support you at every stage, from your initial theory through to your final instructional test."
    },
    {
      question: "What is the process to become a driving instructor in the UK?",
      answer: (
        <>
          The process involves three main qualifying tests: Part 1 (Theory and Hazard Perception), Part 2 (Driving Ability), and Part 3 (Instructional Ability). Once you've passed Part 2, you can often apply for a trainee licence (PDI) to start gaining real-world experience while preparing for your final test. You can find more details on our <Link to="/adi-part-2-training" className="font-bold text-red-600 hover:underline">Part 2</Link> and <Link to="/adi-part-3-training" className="font-bold text-red-600 hover:underline">Part 3</Link> support pages.
        </>
      )
    },
    {
      question: "Can I join FastAutoPass while I’m still training?",
      answer: (
        <>
          Absolutely. We welcome Potential Driving Instructors (PDIs) who are working towards their qualification. Joining a supportive local team like ours while you're training is a great way to build your confidence and get a feel for the industry. We provide a professional environment where you can learn from experienced colleagues.
        </>
      )
    },
    {
      question: "Do I need to bring my own pupils?",
      answer: "No, that's one of the biggest advantages of joining our team. We handle all the marketing and enquiries for you. Because we have a strong reputation in Bradford and Leeds, we have a steady stream of local learners waiting for lessons, so we can help you fill your diary quickly."
    },
    {
      question: "How much can I earn as a driving instructor?",
      answer: "Your earnings depend on how many hours you choose to work. As a self-employed instructor with FastAutoPass, you have control over your schedule. During our initial chat, we can discuss typical hourly rates and how your income might look based on the hours you're looking to put in."
    },
    {
      question: "Which areas would I cover in Bradford and Leeds?",
      answer: "We focus on the Bradford and Leeds districts. We'll work with you to define a working area that makes sense for you, covering locations like Thornbury, Heaton, Headingley, Horsforth, and surrounding neighbourhoods. Our goal is to keep your travel time between lessons as efficient as possible."
    },
    {
      question: "Can I choose my own working hours?",
      answer: "Yes, flexibility is one of the main reasons people choose this career. You manage your own diary, so you can work the hours that suit your lifestyle, whether that's full-time, part-time, or fitting lessons around other commitments."
    },
    {
      question: "Is this suitable if I’m changing careers?",
      answer: "Definitely. We see people from all walks of life—from retail and office work to trades and emergency services—successfully transition into driving instruction. If you're looking for a role that offers more independence and the chance to work with people in your local community, this could be a perfect fit."
    },
    {
      question: "Can I return to instructing after a break?",
      answer: (
        <>
          We'd be very happy to help you get back on the road. If you've taken a break and want to restart your career, we offer a welcoming and straightforward way to return. We can help you get back up to speed with current <Link to="/test-preparation" className="font-bold text-red-600 hover:underline">test standards</Link> and provide the steady work you need to get going again.
        </>
      )
    },
    {
      question: "Do you provide support for ADI Part 2 and Part 3?",
      answer: (
        <>
          Yes, we provide practical, hands-on support for both <Link to="/adi-part-2-training" className="font-bold text-red-600 hover:underline">Part 2</Link> and <Link to="/adi-part-3-training" className="font-bold text-red-600 hover:underline">Part 3</Link>. We believe in supporting our team members throughout their journey, ensuring you feel prepared and confident for your assessments.
        </>
      )
    },
    {
      question: "Will I get help building my confidence as a new instructor?",
      answer: "Absolutely. We don't just hand you a list of pupils and leave you to it. You'll be part of a supportive local team where you can always ask for advice or discuss any challenges you're facing. We're here to help you settle in and grow into a confident, successful instructor."
    },
    {
      question: "Do I need my own car to get started?",
      answer: "Most instructors use their own car, which must be fitted with dual controls and meet certain standards. We can have a chat about the requirements for your vehicle and offer advice on the best setup for providing professional tuition."
    },
    {
      question: "Can I have an informal chat before making a decision?",
      answer: (
        <>
          Of course. We encourage you to <Link to="/contact" className="font-bold text-red-600 hover:underline">get in touch</Link> for an informal discussion. It's a chance for you to ask questions, learn more about how we work, and see if joining FastAutoPass is the right move for you—with no pressure at all.
        </>
      )
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans careers-page">
      <Schema 
        type="LocalBusiness" 
        data={getLocalBusinessSchema()} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Careers", item: "https://fastautopass.co.uk/careers" }
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
              "text": "Information about driving instructor careers and training with FastAutoPass in Bradford and Leeds."
            }
          }))
        }} 
      />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-20 lg:py-32 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
                Become a Driving Instructor with <span className="text-red-500">FastAutoPass</span>
              </h1>
              <p className="text-xl lg:text-2xl font-bold mb-10 text-gray-200 italic leading-relaxed max-w-2xl">
                Join a supportive local team in Bradford and Leeds. Whether you're a qualified ADI, currently in training, or looking for a fresh career path, we offer a calm, reliable environment to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-10">
                <a 
                  href="#join-form"
                  className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-xl text-center hover:bg-red-700 shadow-2xl transition-all uppercase italic tracking-widest w-full sm:w-auto"
                >
                  Enquire Now
                </a>
                <button 
                  onClick={() => setShowCallPopup(true)}
                  className="bg-white text-gray-900 px-10 py-5 rounded-full font-black text-xl text-center hover:bg-gray-100 shadow-2xl transition-all uppercase italic tracking-widest w-full sm:w-auto"
                >
                  Call Us
                </button>
              </div>
              <div className="mt-10 flex items-center justify-center lg:justify-start opacity-80">
                <TrustBadges dark minimal />
              </div>
            </div>
            <div id="join-form" className="w-full flex justify-center lg:justify-end [&>div]:max-w-2xl">
              <BookingForm areaName="Careers Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING HUB LINKS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900 leading-tight">
              Specialist Instructor <span className="text-red-600">Training</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto italic leading-relaxed">
              We provide dedicated support for every stage of your qualifying journey in West Yorkshire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/adi-part-2-training" className="group bg-gray-900 p-12 rounded-[3rem] text-white hover:bg-gray-800 transition-all shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-red-600/40 transition-all"></div>
               <h3 className="text-3xl font-black mb-4 uppercase italic">Part 2 Training</h3>
               <p className="text-gray-400 font-medium mb-8 italic">Master advanced driving techniques to the highest professional standard. Our coaching ensures you pass the Part 2 assessment with ease.</p>
               <span className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-black uppercase italic tracking-widest group-hover:bg-red-600 group-hover:text-white transition-all">Explore Part 2</span>
            </Link>
            <Link to="/adi-part-3-training" className="group bg-gray-900 p-12 rounded-[3rem] text-white hover:bg-gray-800 transition-all shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-red-600/40 transition-all"></div>
               <h3 className="text-3xl font-black mb-4 uppercase italic">Part 3 Training</h3>
               <p className="text-gray-400 font-medium mb-8 italic">Learn the art of instruction and client-centred learning. We guide you through the 17 core competencies for a successful Part 3 pass.</p>
               <span className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-black uppercase italic tracking-widest group-hover:bg-red-600 group-hover:text-white transition-all">Explore Part 3</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY JOIN OUR TEAM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              Why Join Our Team?
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto italic leading-relaxed">
              We believe in providing a supportive, professional environment where you can focus on what you do best—helping people become safe drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-2xl font-black uppercase italic text-gray-900 mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-sm not-italic group-hover:bg-red-600 group-hover:text-white transition-colors">01</span>
                  Steady Local Enquiries
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed text-lg pl-14">
                  As a trusted name in Bradford and Leeds, we have a constant stream of local enquiries. We handle the marketing so you can enjoy a full, reliable diary without the stress of having to chase all your own work.
                </p>
              </div>
              <div className="group">
                <h3 className="text-2xl font-black uppercase italic text-gray-900 mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-sm not-italic group-hover:bg-red-600 group-hover:text-white transition-colors">02</span>
                  A Supportive Setup
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed text-lg pl-14">
                  We aren't a giant national franchise. We're a local team that values every instructor. You'll always have someone to talk to for advice, practical support, or just a quick catch-up about your day.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-2xl font-black uppercase italic text-gray-900 mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-sm not-italic group-hover:bg-red-600 group-hover:text-white transition-colors">03</span>
                  Flexibility That Works
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed text-lg pl-14">
                  We understand that life happens. We offer the flexibility to manage your own hours and working areas, ensuring your career fits naturally around your personal commitments and lifestyle.
                </p>
              </div>
              <div className="group">
                <h3 className="text-2xl font-black uppercase italic text-gray-900 mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-sm not-italic group-hover:bg-red-600 group-hover:text-white transition-colors">04</span>
                  Calm & Professional
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed text-lg pl-14">
                  We value patient, learner-focused teaching. If you take pride in helping people build confidence and skill in a calm, approachable environment, you'll find yourself right at home with our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL OPPORTUNITIES */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
            Local Demand in <span className="text-red-600">Bradford & Leeds</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8 italic">
            We have a high demand for instructors across the Bradford and Leeds districts. From Thornbury and Heaton to Headingley and Horsforth, we can help you build a steady diary in the areas that make sense for you.
          </p>
          <p className="text-lg text-gray-600 font-medium leading-relaxed italic mb-12">
            By focusing on these local areas, we ensure our instructors have efficient schedules and our learners benefit from genuine local knowledge. Being part of a known local brand gives you a distinct advantage from day one.
          </p>
          <a href="#join-form" className="inline-block bg-red-600 text-white px-12 py-5 rounded-full font-black text-xl uppercase italic tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-100">
            Enquire About Your Area
          </a>
        </div>
      </section>

      {/* WHO THIS IS SUITABLE FOR */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              Who We Are Looking For
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">A Place for Every Stage of Your Career</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Qualified ADIs", 
                desc: "Experienced instructors looking for a more supportive local setup with steady work across Bradford and Leeds." 
              },
              { 
                title: "PDIs in Training", 
                desc: "Those working towards their qualification who want a professional environment to build their experience and confidence." 
              },
              { 
                title: "Career Changers", 
                desc: "People considering a new path who value patience, reliability, and clear communication with students." 
              },
              { 
                title: "Returning Instructors", 
                desc: "Instructors returning after a break who want a straightforward, welcoming way to get back into the industry." 
              },
              { 
                title: "Automatic Tuition", 
                desc: (
                  <>
                    With the high demand for <Link to="/automatic-driving-lessons" className="font-bold text-red-600 hover:underline">automatic lessons</Link>, we have plenty of opportunities for those who prefer this path.
                  </>
                )
              },
              { 
                title: "Female Instructors", 
                desc: (
                  <>
                    We have a high demand for <Link to="/our-instructors" className="font-bold text-red-600 hover:underline">female driving instructors</Link> in Bradford and Leeds. We'd love to have you on the team.
                  </>
                )
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-black mb-4 uppercase italic text-red-600 tracking-tight">{item.title}</h3>
                <div className="text-gray-600 font-medium leading-relaxed text-sm italic">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILDING YOUR CAREER */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
            A Rewarding Career in <span className="text-red-600">West Yorkshire</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed italic max-w-3xl mx-auto">
            Being a driving instructor offers genuine job satisfaction and the flexibility to build a career that works for you. At FastAutoPass, we're here to provide the stability, support, and steady work you need to build something reliable long-term in your local community.
          </p>
        </div>
      </section>

      {/* HOW JOINING WORKS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              A Simple Joining Process
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Straightforward and Low Pressure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Enquire", desc: "Fill out the form or call us. It's just a simple first step to start the conversation." },
              { step: "02", title: "Friendly Chat", desc: "We'll have an informal chat to learn about your experience and what you're looking for." },
              { step: "03", title: "Local Plan", desc: "We'll discuss your preferred areas in Bradford or Leeds and your availability." },
              { step: "04", title: "Get Started", desc: "If it feels like the right fit for both of us, we'll help you get settled into the team." }
            ].map((item, i) => (
              <div key={i} className="text-center px-4">
                <div className="w-16 h-16 bg-white text-red-600 rounded-2xl flex items-center justify-center text-2xl font-black italic mx-auto mb-6 border border-red-100 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-black uppercase italic text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING AND DEVELOPMENT */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-[1140px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter leading-tight">
                Ongoing <span className="text-red-600">Support</span> & Guidance
              </h2>
              <div className="text-gray-300 font-medium leading-relaxed space-y-6 italic text-lg">
                <p>
                  We believe that support should be a core part of being in a team. We offer practical guidance to help you stay up to date with the latest <Link to="/test-preparation" className="font-bold text-red-600 hover:underline text-white underline decoration-red-600 underline-offset-4">test standards</Link>.
                </p>
                <p>
                  For those still qualifying, we provide targeted support for your <Link to="/adi-part-2-training" className="font-bold text-red-600 hover:underline text-white underline decoration-red-600 underline-offset-4">Part 2</Link> and <Link to="/adi-part-3-training" className="font-bold text-red-600 hover:underline text-white underline decoration-red-600 underline-offset-4">Part 3</Link> assessments.
                </p>
                <p>
                  Our goal is to help you build your confidence and experience, ensuring you feel supported while settling into the team and managing your diary.
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-12 rounded-[3rem] border border-white/10 shadow-2xl">
              <h3 className="text-xl font-black uppercase italic text-white mb-8 tracking-widest border-b border-white/10 pb-4">How We Support You</h3>
              <ul className="space-y-6">
                {[
                  "Part 2 Coaching Support",
                  "Part 3 Instructional Guidance",
                  "Standards Check Support",
                  "Steady Local Enquiries",
                  "Flexible Diary Management",
                  "Supportive Team Community"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4 text-sm font-bold uppercase tracking-widest italic text-gray-200">
                    <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT KIND OF PERSON FITS THE TEAM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900 leading-tight">
              A Team Built on <span className="text-red-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed italic max-w-2xl mx-auto">
              We're looking for patient, reliable people who share our commitment to safe driving and approachable teaching.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "Calm under pressure",
              "Professional and approachable",
              "Reliable and punctual",
              "Patient with every learner",
              "Safe and consistent style",
              "Clear, helpful communication",
              "Willing to keep improving",
              "Genuinely supportive attitude"
            ].map((trait, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs font-black group-hover:bg-red-600 group-hover:text-white transition-colors">✓</div>
                <span className="font-bold uppercase tracking-tight text-gray-700 italic">{trait}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <ReviewsSlider hideIntro={true} />

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Common Questions
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Helpful Advice for Future Instructors</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
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
                    <div className="text-gray-600 font-medium leading-relaxed italic">{faq.answer}</div>
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
              <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter text-gray-900">Call Our Team</h3>
              <p className="text-gray-500 font-medium mb-8 italic">Discuss joining the FastAutoPass team.</p>
              
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

export default CareersPage;

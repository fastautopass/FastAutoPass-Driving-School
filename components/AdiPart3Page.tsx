import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import BookingForm from './BookingForm';
import TrustBadges from './TrustBadges';
import Schema from './Schema';
import Breadcrumbs from './Breadcrumbs';
import { getServiceSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const AdiPart3Page: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallPopup, setShowCallPopup] = useState(false);

  const faqs: { question: string; answer: React.ReactNode }[] = [
    {
      question: "What exactly is the ADI Part 3 test and how is it marked?",
      answer: (
        <>
          The ADI Part 3 is a test of your ability to teach. You'll be observed by a DVSA examiner while you give a real 45-minute lesson to a pupil. The examiner marks you on 17 core competencies across three main categories: Lesson Planning, Risk Management, and Teaching & Learning Strategies. Each competency is marked from 0 to 3. To pass, you need a total score of at least 31, with a minimum of 8 in Risk Management. In Bradford and Leeds, the examiner will be looking for your ability to manage real-world hazards while maintaining a productive learning environment. Our <Link to="/test-preparation" className="font-bold text-red-600 hover:underline">DVSA test preparation</Link> covers these competencies in detail.
        </>
      )
    },
    {
      question: "What is the 'Client-Centred' approach and why is it mandatory?",
      answer: "Client-centred learning is about involving the pupil in the learning process. It's not just about telling them what to do; it's about helping them understand *why* and allowing them to take responsibility for their own learning. The examiner wants to see you listening to the pupil, adapting the lesson to their needs, and using effective questioning to check their understanding. In our training, we master the art of 'coaching' rather than just 'instructing', which is the key to a high score on Part 3."
    },
    {
      question: "How do I choose the right pupil for my Part 3 test in West Yorkshire?",
      answer: "Choosing the right pupil is critical. They should be someone you've been training regularly and who is at a level where they can benefit from the lesson you've planned. They shouldn't be too advanced (where there's nothing left to teach) or too raw (where they might be overwhelmed by the test environment). In Bradford and Leeds, we recommend choosing a pupil who is comfortable with the local road types but still has clear areas for improvement. We'll help you assess your pupils to find the perfect candidate for your test."
    },
    {
      question: "What are the most common reasons for failing the ADI Part 3?",
      answer: (
        <>
          The most common failure point is poor 'Risk Management'. If the pupil makes a serious mistake and you don't intervene correctly (either verbally or with dual controls), it's an immediate fail. Other common issues include poor lesson planning (the lesson is too easy or too hard) and failing to adapt the teaching style to the pupil's needs. Many trainees also struggle with 'timely' feedback—giving the pupil information when it's most useful, not five minutes later. Our <Link to="/mock-driving-tests" className="font-bold text-red-600 hover:underline">mock driving tests</Link> focus heavily on these high-stakes areas.
        </>
      )
    },
    {
      question: "What is a 'PDI' and can I earn money while training for Part 3?",
      answer: (
        <>
          A PDI is a Potential Driving Instructor. Once you've passed Part 2 and completed at least 40 hours of Part 3 training, you can apply for a 'trainee license'. This allows you to work for a driving school (like FastAutoPass) and charge for lessons while you prepare for your Part 3 test. This is a fantastic way to gain real-world experience and build your confidence in the busy streets of Bradford and Leeds. We provide full support for our PDIs, including pupil supply and ongoing mentoring. Feel free to <Link to="/contact" className="font-bold text-red-600 hover:underline">contact us</Link> to discuss PDI opportunities.
        </>
      )
    },
    {
      question: "How do I manage the 'Risk Management' section of the marking sheet?",
      answer: "Risk management is the most important part of the test. You must demonstrate that you are aware of the risks at all times and that you take appropriate action to keep the lesson safe. This includes sharing responsibility with the pupil, using dual controls when necessary, and giving clear, timely instructions. In the challenging traffic of West Yorkshire, you need to be proactive. We'll teach you the 'verbal intervention' techniques that satisfy the examiner while keeping the pupil's confidence intact."
    },
    {
      question: "What lesson topics are best for the Part 3 test?",
      answer: "The best topic is one that your pupil actually needs to work on. It could be anything from emerging at junctions to meeting traffic or mastering roundabouts. The examiner wants to see a 'real' lesson, not a rehearsed performance. In Bradford and Leeds, topics like 'complex roundabouts' or 'busy urban junctions' are often good choices as they provide plenty of learning opportunities. We'll help you identify the best topics for your specific pupil and show you how to structure the lesson for maximum impact."
    },
    {
      question: "How do I handle a pupil making a serious mistake during the test?",
      answer: "First, you must ensure safety. This might mean using your dual controls or giving a firm, clear instruction. Once the immediate danger is over, you must deal with the mistake. This involves pulling over when safe, discussing what happened, why it happened, and how to prevent it in the future. The examiner isn't looking for a 'perfect' pupil; they're looking for a 'perfect' instructor who can manage mistakes professionally. We'll practice these 'intervention' scenarios until you can handle them with calm authority."
    },
    {
      question: "What is the 'Reflection' part of the lesson and why is it important?",
      answer: "Reflection happens throughout the lesson and at the end. It's about asking the pupil how they feel they're doing and what they've learned. This is a core part of client-centred learning. The examiner wants to see that the pupil is actively engaged in their own progress. In our training, we'll show you how to use 'open' questions to encourage reflection, ensuring your pupil (and the examiner) can see the clear value in every minute of the lesson."
    },
    {
      question: "How many hours of training do I need for Part 3?",
      answer: (
        <>
          The DVSA requires a minimum of 40 hours of training before you can go on a trainee license, but most successful instructors find they need 50-60 hours to truly master the instructional competencies. This isn't just about 'learning the test'; it's about learning the trade. We offer comprehensive training blocks in Bradford and Leeds that cover every aspect of the marking sheet, giving you the deep skills you need for a long and successful career. If you are just starting, you should check our <Link to="/adi-part-2-training" className="font-bold text-red-600 hover:underline">ADI Part 2 training</Link> first.
        </>
      )
    },
    {
      question: "Can I take my Part 3 test in an automatic car?",
      answer: "Yes, you can. If you pass your Part 3 in an automatic, your ADI license will be restricted to teaching in automatics only. Given the massive surge in demand for automatic lessons in Bradford and Leeds, this is becoming a very popular and lucrative choice for new instructors. We are specialists in automatic instructor training and can help you build a highly successful business in this growing sector."
    },
    {
      question: "What happens if I fail the ADI Part 3 test?",
      answer: (
        <>
          You are allowed a maximum of three attempts at the Part 3 test. If you fail all three, you must wait until two years from the date you passed your Part 1 (theory) test and then start the entire process again. This is why our <Link to="/mock-driving-tests" className="font-bold text-red-600 hover:underline">mock tests</Link> are so vital. We ensure you are at a standard where you can handle the pressure and deliver a high-scoring lesson before you even think about booking the real thing.
        </>
      )
    },
    {
      question: "How do I manage the 'Lesson Planning' section of the test?",
      answer: "Lesson planning starts with the pupil. You must agree on a clear goal for the lesson that is relevant to their needs. You also need to ensure the environment (the roads you choose in Bradford or Leeds) is appropriate for that goal. Throughout the lesson, you must be prepared to adapt the plan if the pupil is struggling or progressing faster than expected. We'll show you how to create 'flexible' lesson plans that satisfy the examiner's criteria while remaining truly pupil-focused."
    },
    {
      question: "Why is FastAutoPass the best choice for Part 3 training in West Yorkshire?",
      answer: "Because we are an active, high-performing driving school, not just a training centre. We know what works on the roads of Bradford and Leeds every single day. Our trainers are 'Grade A' instructors who are experts in the latest DVSA standards. We don't just teach you to pass a test; we give you the real-world skills, the business support, and the pupil supply you need to thrive as a professional driving instructor from day one."
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans adi-part3-page">
      <SEO 
        title="ADI Part 3 Training Bradford & Leeds | Instructional Ability | FastAutoPass"
        description="Master the ADI Part 3 test with expert instructional coaching in Bradford and Leeds. Professional training for aspiring driving instructors in West Yorkshire."
        canonical="https://fastautopass.co.uk/adi-part-3-training"
      />
      <Schema 
        type="Service" 
        data={getServiceSchema(
          "ADI Part 3 Training",
          "Master the ADI Part 3 test with expert instructional coaching in Bradford and Leeds. Professional training for aspiring driving instructors in West Yorkshire.",
          "https://fastautopass.co.uk/adi-part-3-training"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "ADI Part 3 Training", item: "https://fastautopass.co.uk/adi-part-3-training" }
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
              "text": "Professional ADI Part 3 training and instructional ability coaching in Bradford and Leeds."
            }
          }))
        }} 
      />
      <Breadcrumbs />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-32 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic drop-shadow-2xl">
                ADI <br/><span className="text-red-500">Part 3</span> Training <br/>Bradford & Leeds
              </h1>
              <p className="text-xl lg:text-2xl font-bold mb-10 max-w-2xl text-gray-200 italic">
                Master the art of instruction. Professional coaching for the final stage of your ADI journey. Learn the 'Grade A' techniques that ensure success in West Yorkshire.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 items-center mt-10">
                <a 
                  href="#hero-form" 
                  className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-xl text-center hover:bg-red-700 shadow-2xl transition-all uppercase italic tracking-widest w-full sm:w-auto"
                >
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
            <div id="hero-form" className="w-full">
              <BookingForm areaName="ADI Part 3" />
            </div>
          </div>
        </div>
      </section>

      {/* REAL-WORLD PROGRAMME BREAKDOWN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              The 3 Pillars of Instructional Excellence
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
              The ADI Part 3 test marks you on 17 core competencies. We break these down into manageable, masterable skills that will serve you throughout your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Lesson Planning</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Learn to set clear, achievable goals that are relevant to your pupil's needs. We'll show you how to choose the right roads in <strong>Bradford</strong> and <strong>Leeds</strong> to support your lesson objectives.
              </p>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Risk Management</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                The most critical section. We'll teach you how to maintain absolute safety while allowing your pupil to learn. Master the art of timely intervention in busy <strong>West Yorkshire</strong> traffic.
              </p>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-3">Teaching Strategies</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Master 'Client-Centred Learning'. Learn how to use effective questioning, coaching, and feedback to help your pupil take responsibility for their own progress and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FASTAUTOPASS IS DIFFERENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              Why Train With FastAutoPass?
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We are a high-volume, high-performance driving school. We don't just teach the 'Part 3' test; we live and breathe professional instruction every single day. Our trainers are active instructors with 'Grade A' ratings.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We offer PDI sponsorship. Once you're ready, you can join our team on a trainee license, earning money and gaining vital experience while you prepare for your final assessment. We provide the pupils and the support you need to succeed.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We use <Link to="/mock-driving-tests" className="font-bold text-red-600 hover:underline">mock tests</Link> to build your confidence. By simulating the real test environment, we ensure you are prepared for the pressure of the day. Our goal is a 'Grade A' pass.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We offer a complete path. If you are still working on your driving skills, check our <Link to="/adi-part-2-training" className="font-bold text-red-600 hover:underline">Part 2 training</Link>. Once you pass Part 3, we are ready to help you launch your new career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL EXPERIENCE SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Real Lessons on Real West Yorkshire Roads
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
                <p>
                  Instructional ability isn't just about theory; it's about how you handle real situations with real pupils. Our training takes place on the busy, varied road networks of <strong>Bradford</strong> and <strong>Leeds</strong>.
                </p>
                <p>
                  We'll practice managing risks at complex junctions, coaching through multi-lane roundabouts, and helping pupils master high-speed road discipline. You'll learn how to adapt your teaching style to the environment, whether it's a quiet residential street in <strong>Pudsey</strong> or a busy commuter route in <strong>Shipley</strong>.
                </p>
                <p>
                  By training in the actual environments where you'll be tested, you'll build the confidence and situational awareness required to pass the Part 3 assessment with flying colours. This is practical, hands-on training for the modern instructor.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black uppercase italic text-gray-900 mb-6">Instructional Competencies</h3>
              <ul className="space-y-4">
                {[
                  "Client-Centred Coaching Techniques",
                  "Dynamic Risk Management Skills",
                  "Effective Lesson Goal Setting",
                  "Proactive Feedback & Questioning",
                  "Dual Control Intervention Mastery",
                  "Professional Pupil Management"
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
            The Final Step
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "The Ready Trainee", 
                desc: "You've passed Part 2 and you're ready for the final hurdle. You want expert coaching to ensure your instructional ability meets the DVSA's high standard." 
              },
              { 
                title: "The PDI on License", 
                desc: "You're already teaching but you need that extra 'polish' to ensure you pass your Part 3 test. You want to move from 'instructing' to 'coaching' for a higher score." 
              },
              { 
                title: "The 'Rescue' Trainee", 
                desc: "You've had a setback at Part 3 and you're feeling discouraged. You need a fresh perspective and expert intervention to fix the issues and get your career back on track." 
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
            The 3 Secrets to a 'Grade A' Part 3 Pass
          </h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
            <p>
              Passing the ADI Part 3 in <strong>Bradford</strong> or <strong>Leeds</strong> is about more than just following a script. It's about being a truly effective coach.
            </p>
            <ol className="space-y-4">
              <li><strong>1. Share the Responsibility:</strong> Don't just tell the pupil what to do. Ask them what they think they should do. This is the heart of client-centred learning and is what the examiner is looking for.</li>
              <li><strong>2. Manage the Risk, Not Just the Pupil:</strong> Your primary job is safety. If you see a risk developing, you must act. Whether it's a verbal hint or a dual control intervention, it must be timely and effective.</li>
              <li><strong>3. Adapt or Fail:</strong> If the pupil isn't 'getting it', change your approach. Don't just repeat the same instruction louder. A Grade A instructor has a toolbox of different teaching strategies.</li>
            </ol>
            <p>
              <strong>Our Advice:</strong> Treat the Part 3 as a demonstration of your value as a professional. Show the examiner that you can create a safe, productive, and engaging learning environment for any pupil.
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
                ADI Part 3 Training Bradford
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Our <strong>ADI Part 3 training Bradford</strong> is focused on developing your instructional ability in a real-world urban environment. We master the art of coaching on the busy roads of <strong>Bradford</strong>, ensuring you can manage risks and deliver effective lessons under pressure.
                </p>
                <p>
                  With expert <strong>instructional coaching Bradford</strong>, we'll help you build the skills required for a first-time pass. Our <strong>ADI Part 3 instructor Bradford</strong> provides the dedicated support and mentoring you need to transition from a trainee to a fully qualified professional.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">
                ADI Part 3 Training Leeds
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-4">
                <p>
                  Prepare for your final assessment with our specialist <strong>ADI Part 3 training Leeds</strong>. We focus on 'Grade A' teaching strategies and dynamic risk management in the busy city centre and surrounding commuter routes of <strong>Leeds</strong>.
                </p>
                <p>
                  Our <strong>instructional ability course Leeds</strong> is designed to help you master the 17 core competencies. With a dedicated <strong>ADI Part 3 trainer Leeds</strong>, you'll gain the confidence and skill required to pass the test and launch your new career as a successful driving instructor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              ADI Part 3 FAQs
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Professional Advice for Future Instructors</p>
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
                    <div className="text-gray-600 font-medium leading-relaxed">{faq.answer}</div>
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
              <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter text-gray-900">Call Training Team</h3>
              <p className="text-gray-500 font-medium mb-8 italic">Discuss your instructor training requirements.</p>
              
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

export default AdiPart3Page;
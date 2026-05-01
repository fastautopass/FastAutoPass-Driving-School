import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TrustBadges from './TrustBadges';
import ReviewsSlider from './ReviewsSlider';
import Schema from './Schema';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const AboutUsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { 
      name: 'Automatic Driving Lessons', 
      path: '/automatic-driving-lessons', 
      desc: 'Simple and stress-free learning in modern automatic cars. This is perfect for those who want to avoid the hassle of gears and focus entirely on the road and their surroundings. It often leads to a much faster learning process.' 
    },
    { 
      name: 'Intensive Driving Courses', 
      path: '/intensive-driving-courses', 
      desc: 'Reach test standard faster with a structured course designed to build your skills quickly. Ideal for learners who have a specific deadline or just want to get on the road sooner without months of waiting.' 
    },
    { 
      name: 'Mock Driving Tests', 
      path: '/mock-driving-tests', 
      desc: 'See if you are truly ready for the real thing with a realistic practice test. We provide honest feedback and help you iron out any last-minute nerves by mimicking the actual DVSA exam conditions.' 
    },
    { 
      name: 'DVSA Test Preparation', 
      path: '/test-preparation', 
      desc: 'Focus on the specific skills and standards needed to pass the practical test. We guide you through the "show me, tell me" questions and all required manoeuvres to ensure you are fully prepared for the big day.' 
    },
    { 
      name: 'Pass Plus Courses', 
      path: '/pass-plus', 
      desc: 'Gain extra experience on motorways and in different weather conditions after you have passed. This course helps you become a safer driver and can even lead to a discount on your car insurance premiums.' 
    },
    { 
      name: 'Motorway Lessons', 
      path: '/motorway-lessons', 
      desc: 'Build your confidence on high-speed roads with professional guidance. This is essential for new drivers who feel uneasy about their first solo motorway trip and want to learn safe overtaking and lane discipline.' 
    },
    { 
      name: 'Refresher Lessons', 
      path: '/refresher-lessons', 
      desc: 'Get back behind the wheel with a boost to your confidence if you haven\'t driven for a while. We help you brush up on your skills in a relaxed environment, focusing on the areas where you feel you need the most help.' 
    },
    { 
      name: 'ADI Part 2 Training', 
      path: '/adi-part-2-training', 
      desc: 'Advanced driving skills for those training to become instructors. We help you reach the high standard of driving required for the second part of the qualifying process, focusing on precision and safety.' 
    },
    { 
      name: 'ADI Part 3 Training', 
      path: '/adi-part-3-training', 
      desc: 'Master the art of teaching with our instructor training. We focus on your ability to pass on your knowledge effectively and manage a learning environment, preparing you for a rewarding new career.' 
    }
  ];

  const faqs = [
    {
      question: "Why choose automatic over manual?",
      answer: (
        <>
          Learning in an automatic car is often much faster and less stressful because you don't have to worry about the clutch or changing gears. This allows you to focus more on your steering, road positioning, and the traffic around you. Many of our learners find they reach test standard in fewer hours compared to manual lessons. You can read more about the benefits on our <Link to="/automatic-driving-lessons" className="font-bold text-red-600 hover:underline">Automatic Driving Lessons</Link> page.
        </>
      )
    },
    {
      question: "How many lessons will I need to pass?",
      answer: (
        <>
          The number of lessons varies for everyone as we all learn at different speeds. On average, the DVSA suggests around 45 hours of professional tuition, but our goal is to get you ready as efficiently as possible. We'll always give you honest feedback on your progress so you know exactly where you stand. If you want to speed up the process, you might consider one of our <Link to="/intensive-driving-courses" className="font-bold text-red-600 hover:underline">Intensive Driving Courses</Link>.
        </>
      )
    },
    {
      question: "Do you cover my area in Bradford?",
      answer: (
        <>
          We have a wide coverage across <Link to="/bradford" className="font-bold text-red-600 hover:underline">Bradford</Link> and the nearby towns. Our instructors are familiar with the local test centres and the specific challenges of driving in the area, from busy city junctions to quieter residential streets. We can usually pick you up from home, work, or college to make your lessons as convenient as possible.
        </>
      )
    },
    {
      question: "What happens on my first driving lesson?",
      answer: "Your first lesson is all about getting comfortable in the driver's seat and understanding the controls of the car. We'll start in a very quiet location where you can practice moving off and stopping without the pressure of other traffic. It’s a relaxed introduction designed to build your confidence from the very first minute. We'll go at a pace that feels right for you."
    },
    {
      question: "I am nervous about driving — can you help?",
      answer: "Being nervous is completely normal, and we have helped hundreds of anxious learners become confident drivers. Our instructors are known for being calm and patient, and we never rush you into situations you aren't ready for. We focus on building your skills gradually so that your confidence grows naturally as you learn. We believe that a relaxed environment is the best way to learn."
    },
    {
      question: "Do you offer intensive courses in Leeds?",
      answer: (
        <>
          Yes, we provide structured <Link to="/intensive-driving-courses" className="font-bold text-red-600 hover:underline">Intensive Driving Courses</Link> throughout <Link to="/leeds" className="font-bold text-red-600 hover:underline">Leeds</Link>. These are ideal if you have a specific deadline or simply want to get your license more quickly. We'll assess your current skill level and create a plan that helps you reach test standard in a shorter timeframe, while still ensuring you are a safe and capable driver.
        </>
      )
    },
    {
      question: "How do I book a mock driving test?",
      answer: (
        <>
          You can book one of our <Link to="/mock-driving-tests" className="font-bold text-red-600 hover:underline">Mock Driving Tests</Link> directly through our website or by speaking with your instructor. These tests are designed to mimic the real DVSA practical exam as closely as possible, giving you a chance to experience the pressure and format before the big day. It’s one of the best ways to identify any areas that need a little more work.
        </>
      )
    },
    {
      question: "What exactly is Pass Plus?",
      answer: (
        <>
          <Link to="/pass-plus" className="font-bold text-red-600 hover:underline">Pass Plus</Link> is a short course designed for new drivers who have already passed their practical test. It covers six modules, including motorway driving, night driving, and rural roads, which you might not have experienced much during your initial lessons. Completing the course can help you become a safer driver and may even lead to a discount on your car insurance.
        </>
      )
    },
    {
      question: "Can I have lessons specifically for motorway driving?",
      answer: (
        <>
          Absolutely. Many new drivers feel a bit uneasy about high-speed roads, so we offer dedicated <Link to="/motorway-lessons" className="font-bold text-red-600 hover:underline">Motorway Lessons</Link> to help you feel safe and in control. We'll cover things like joining and leaving the motorway, safe overtaking, and understanding the different signs and signals. It’s a great way to ensure you are ready for longer journeys on your own.
        </>
      )
    },
    {
      question: "I have not driven in years — can you help me get back on the road?",
      answer: (
        <>
          We certainly can. Our <Link to="/refresher-lessons" className="font-bold text-red-600 hover:underline">Refresher Lessons</Link> are perfect for anyone who has a license but hasn't been behind the wheel for a while. Whether you've lost your confidence or just need to get used to modern traffic conditions, we'll help you get back on the road in a supportive and relaxed environment. We'll focus on the specific areas where you feel you need the most help.
        </>
      )
    },
    {
      question: "How do I start training to become a driving instructor?",
      answer: (
        <>
          If you enjoy driving and like helping people, becoming an instructor could be a great career move. We offer full support for those looking to <Link to="/careers" className="font-bold text-red-600 hover:underline">Join Our Team</Link>. You'll need to pass three qualifying tests, and we provide the training and guidance needed for each stage. It’s a rewarding job with flexible hours and the chance to be your own boss.
        </>
      )
    },
    {
      question: "What is the difference between ADI Part 2 and Part 3 training?",
      answer: (
        <>
          <Link to="/adi-part-2-training" className="font-bold text-red-600 hover:underline">ADI Part 2</Link> is a test of your own advanced driving skills, ensuring you can drive to a very high standard in all conditions. <Link to="/adi-part-3-training" className="font-bold text-red-600 hover:underline">ADI Part 3</Link> is the final stage, where you are assessed on your ability to teach a pupil effectively. We offer dedicated training for both parts to ensure you have the skills and confidence to pass and start your new career.
        </>
      )
    },
    {
      question: "How do I prepare for the DVSA practical test?",
      answer: (
        <>
          Preparation is key to passing, which is why we offer specific <Link to="/test-preparation" className="font-bold text-red-600 hover:underline">DVSA Test Preparation</Link>. We'll go over the "show me, tell me" questions, practice all the required manoeuvres, and ensure you are comfortable with the independent driving section. We also recommend taking a mock test to get used to the exam format and reduce any nerves on the day.
        </>
      )
    },
    {
      question: "How do I get started with FastAutoPass?",
      answer: (
        <>
          The easiest way to get started is to send us a message through our <Link to="/contact" className="font-bold text-red-600 hover:underline">Contact Us</Link> page or give us a call. We'll have a quick chat about your experience and what you are looking for, and then we can get your first lesson booked in. We look forward to helping you start your journey toward becoming a safe and confident driver.
        </>
      )
    }
  ];

  return (
    <div className="bg-white animate-fadeIn font-sans about-us-page">
      <SEO 
        title="About FastAutoPass | Local Driving School Bradford & Leeds"
        description="Learn about FastAutoPass, your local automatic driving school in Bradford and Leeds. Over 10 years of experience helping learners become safe, confident drivers."
        canonical="https://fastautopass.co.uk/about-us"
      />
      <Schema 
        type="LocalBusiness" 
        data={getLocalBusinessSchema()} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "About Us", item: "https://fastautopass.co.uk/about" }
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
              "text": "Information about FastAutoPass driving school services in Bradford and Leeds."
            }
          }))
        }} 
      />
      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-32 border-b-8 border-red-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic drop-shadow-2xl">
              About <span className="text-red-500">FastAutoPass</span>
            </h1>
            <p className="text-xl lg:text-2xl font-bold mb-10 text-gray-200 italic leading-relaxed">
              We are a local driving school helping learners across Bradford and Leeds get on the road with confidence. Our approach is simple, calm, and focused on making you a safe driver for life, not just for the test day.
            </p>
            <TrustBadges dark minimal />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight border-l-8 border-red-600 pl-6">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed italic">
                <p>
                  FastAutoPass is a local driving school based around Bradford and Leeds, born from a desire to make learning to drive more accessible and less stressful. We focus exclusively on automatic driving lessons because we know how much simpler it makes the process for our learners.
                </p>
                <p>
                  With over 10 years of experience, we have seen every kind of struggle and success, and we use that knowledge to guide you through the local roads and test routes with ease. We understand the common hurdles learners face and we know how to help you overcome them.
                </p>
                <p>
                  Our goal isn't just to help you pass; it's to ensure you feel safe and ready for the real world once you have your license. We want you to be a safe, confident driver who feels at home behind the wheel.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-black uppercase italic text-gray-900 mb-6 tracking-tight">Our Core Values</h3>
              <ul className="space-y-4">
                {[
                  "Patience and understanding",
                  "Clear and simple instruction",
                  "Honesty and transparency",
                  "Focus on safety",
                  "Reliability and punctuality"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-lg font-bold uppercase tracking-tight italic text-gray-600">
                    <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              Why People Choose Us
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Calm & Patient", desc: "We know how it feels to be behind the wheel for the first time. We keep our lessons relaxed so you can learn without feeling rushed or pressured." },
              { title: "Flexible Times", desc: "Life is busy, so we work around your schedule. Whether it's early mornings or late afternoons, we find a time that fits your routine." },
              { title: "Local Knowledge", desc: "We know the Bradford and Leeds test routes like the back of our hand. We'll show you the tricky junctions and quiet spots where you can build your skills." },
              { title: "Real Driving", desc: "Passing the test is just the start. We teach you how to handle busy roundabouts, narrow streets, and high-speed roads so you are ready for anything." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-red-600 transition-colors">
                <h3 className="text-xl font-black uppercase italic text-red-600 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 font-medium italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              What We Offer
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto italic">
              We provide a range of services to help you at every stage of your driving journey, from your very first lesson to advanced instructor training.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                <Link to={service.path} className="text-xl font-black uppercase italic text-red-600 hover:underline mb-4 block tracking-tight">
                  {service.name}
                </Link>
                <p className="text-gray-600 font-medium italic leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Step-by-Step", desc: "We break everything down into simple, manageable steps that never feel overwhelming." },
                  { title: "Confidence", desc: "We focus on building your self-belief behind the wheel through positive reinforcement." },
                  { title: "Simplicity", desc: "We keep our instructions clear and avoid overcomplicating things with unnecessary jargon." },
                  { title: "Adaptable", desc: "We change our teaching style to suit how you learn best, ensuring steady progress." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-lg font-black uppercase italic text-red-500 mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-medium italic leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter leading-tight">
                Our <span className="text-red-600">Approach</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400 font-medium leading-relaxed italic">
                <p>
                  We believe in a step-by-step learning process that never feels overwhelming. We start with the basics in quiet areas and build your confidence gradually before moving on to busier roads.
                </p>
                <p>
                  We keep our lessons simple and easy to follow. We don't use complicated jargon or over-explain things. We want you to spend as much time as possible actually driving and experiencing the road.
                </p>
                <p>
                  Every learner is different, so we always adapt our teaching to suit you. Whether you learn best by doing, watching, or listening, we'll find the right way to help you progress and feel safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL PROGRESS, REAL RESULTS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">
              Real Progress, Real Results
            </h2>
            <div className="h-2 w-24 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Building Confidence", desc: "We take pride in helping nervous beginners find their feet. We have seen hundreds of learners go from being anxious about starting the car to driving confidently in city traffic." },
              { title: "Safe for Life", desc: "Our focus is on creating safe drivers. We don't just teach you how to pass a test; we ensure you have the skills to handle real-world situations independently and safely." },
              { title: "Returning to the Road", desc: "We have helped many people return to driving after long breaks. Whether it's been five years or twenty, we provide the support needed to get you back behind the wheel." },
              { title: "Future Instructors", desc: "Some of our most successful learners have gone on to train as instructors themselves. We support people in Bradford and Leeds through every stage of their professional journey." },
              { title: "Steady Progress", desc: "We focus on making sure every lesson counts. By setting clear goals and providing honest feedback, we help our learners make steady, measurable progress toward their license." },
              { title: "Local Success", desc: "Having helped so many people across Bradford and Leeds, we have a deep understanding of what it takes to succeed on our local roads and pass at our local test centres." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-black uppercase italic text-gray-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 font-medium italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE COVER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1140px] text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
            Areas We Cover
          </h2>
          <div className="h-2 w-24 bg-red-600 mx-auto mb-12"></div>
          <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12 italic max-w-3xl mx-auto">
            We cover all areas of <strong>Bradford</strong> and <strong>Leeds</strong>, including the city centres and the surrounding suburbs. Whether you are in Shipley, Pudsey, or Headingley, we have instructors who know your local area.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/bradford" className="px-8 py-4 bg-gray-50 rounded-full font-black uppercase italic tracking-widest text-gray-900 hover:bg-red-600 hover:text-white transition-all border border-gray-100 shadow-sm">Bradford</Link>
            <Link to="/leeds" className="px-8 py-4 bg-gray-50 rounded-full font-black uppercase italic tracking-widest text-gray-900 hover:bg-red-600 hover:text-white transition-all border border-gray-100 shadow-sm">Leeds</Link>
          </div>
        </div>
      </section>

      <ReviewsSlider />

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">
              Common Questions
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Clear and honest answers for our learners</p>
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
                    <div className="text-gray-600 font-medium leading-relaxed italic">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
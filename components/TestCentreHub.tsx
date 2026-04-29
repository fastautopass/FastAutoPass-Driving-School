
import React from 'react';
import { Link } from 'react-router-dom';
import { TEST_CENTRES } from '../testCentresData';
import Accordion from './Accordion';
import Schema from './Schema';
import { getBreadcrumbSchema } from '../lib/schemaLibrary';

const TestCentreHub: React.FC = () => {
  React.useEffect(() => {
    document.title = "Driving Test Centres in Bradford & Leeds | Passing Your Test | FastAutoPass";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Explore our comprehensive guides for all driving test centres in Bradford and Leeds. Learn about Horsforth, Thornbury, Heaton, and more with expert route advice.');
  }, []);

  const faqs = [
    {
      question: "Which driving test centres do you cover in Bradford and Leeds?",
      answer: "We provide comprehensive coverage for all major test centres in the region. In Leeds, this includes Horsforth, Colton, Fearnville, and Walton LGV. In the Bradford area, we cover Heaton, Thornbury, and Steeton."
    },
    {
      question: "What are the main Leeds driving test centres?",
      answer: "The three main centres for car drivers in Leeds are Horsforth (Low Lane), Colton (Selby Road), and Fearnville (Oakwood Lane)."
    },
    {
      question: "Which Bradford driving test centres can I use?",
      answer: "Learners in Bradford typically use the Heaton or Thornbury test centres. We also cover Steeton for those living further west."
    }
  ];

  return (
    <div className="bg-white min-h-screen test-centre-page">
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Driving Test Centres", item: "https://fastautopass.co.uk/driving-test-centres" }
        ])} 
      />
      <Schema 
        type="CollectionPage" 
        data={{
          "name": "Driving Test Centres in Bradford & Leeds",
          "description": "Guides for all driving test centres in the Bradford and Leeds area.",
          "url": "https://fastautopass.co.uk/driving-test-centres",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": TEST_CENTRES.map((centre, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://fastautopass.co.uk/driving-test-centres/${centre.id}`,
              "name": centre.name
            }))
          }
        }} 
      />
      <Schema 
        type="FAQPage" 
        data={{
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }} 
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-20 pb-8 border-b-8 border-red-600 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter mb-4">
            Driving Test <span className="text-red-600">Centres</span> in Bradford & Leeds
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-medium mb-2 leading-relaxed">
            Success on your driving test in Bradford or Leeds starts with knowing your local test centre. Each location has its own road layouts, busy junctions, and unique challenges that can catch you off guard. Our guides help you understand exactly what to expect, so you can focus on your driving with confidence.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-16 pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed">
            <p>
              Choosing the right test centre is a key part of your journey toward passing your driving test. Whether you are heading into central Leeds or navigating the Bradford district, each location presents its own road layouts—from multi-lane roundabouts to narrow residential streets.
            </p>
            <p>
              Being prepared for these local challenges is the best way to build confidence and reduce nerves. We often suggest taking a <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving test</Link> to familiarise yourself with the exam environment. For those just starting, our <Link to="/automatic-driving-lessons" className="text-red-600 font-bold hover:underline">automatic driving lessons</Link> focus on the specific skills needed to handle these routes safely.
            </p>
            <p className="mt-8 text-gray-900 font-bold italic tracking-tight text-xl leading-snug">
              Explore our guides below to learn more about the main driving test centres in Bradford and Leeds and find out what to expect on your test day.
            </p>
          </div>
        </div>
      </section>

      {/* Test Centres List */}
      <section className="pt-16 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Leeds Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-black italic uppercase mb-8 text-center">Leeds Test Centres</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TEST_CENTRES.filter(c => c.city.toLowerCase() === 'leeds' || c.name.includes('Walton')).map((centre) => (
                <Link 
                  key={centre.id} 
                  to={`/driving-test-centres/${centre.id}`}
                  className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase italic text-gray-900 group-hover:text-red-600 transition-colors">
                        {centre.name}
                      </h3>
                      <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">{centre.city}</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-4">{centre.about}</p>
                  <span className="text-red-600 font-black uppercase italic text-xs tracking-widest">View Full Guide</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bradford Section */}
          <div>
            <h2 className="text-3xl font-black italic uppercase mb-8 text-center">Bradford & District Test Centres</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TEST_CENTRES.filter(c => c.city.toLowerCase() === 'bradford').map((centre) => (
                <Link 
                  key={centre.id} 
                  to={`/driving-test-centres/${centre.id}`}
                  className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase italic text-gray-900 group-hover:text-red-600 transition-colors">
                        {centre.name}
                      </h3>
                      <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">{centre.city}</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-4">{centre.about}</p>
                  <span className="text-red-600 font-black uppercase italic text-xs tracking-widest">View Full Guide</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-black uppercase italic mb-8">Driving Lesson Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link to="/automatic-driving-lessons" className="flex items-center justify-center bg-gray-900 text-white px-4 py-4 rounded-xl font-black uppercase italic tracking-widest text-xs hover:bg-black transition-all text-center h-full">
              Automatic Lessons
            </Link>
            <Link to="/intensive-driving-courses" className="flex items-center justify-center bg-gray-900 text-white px-4 py-4 rounded-xl font-black uppercase italic tracking-widest text-xs hover:bg-black transition-all text-center h-full">
              Intensive Courses
            </Link>
            <Link to="/mock-driving-tests" className="flex items-center justify-center bg-gray-900 text-white px-4 py-4 rounded-xl font-black uppercase italic tracking-widest text-xs hover:bg-black transition-all text-center h-full">
              Mock Driving Tests
            </Link>
            <Link to="/pass-plus" className="flex items-center justify-center bg-gray-900 text-white px-4 py-4 rounded-xl font-black uppercase italic tracking-widest text-xs hover:bg-black transition-all text-center h-full">
              Pass Plus
            </Link>
            <Link to="/motorway-lessons" className="flex items-center justify-center bg-gray-900 text-white px-4 py-4 rounded-xl font-black uppercase italic tracking-widest text-xs hover:bg-black transition-all text-center h-full">
              Motorway Lessons
            </Link>
            <Link to="/recent-passes" className="flex items-center justify-center bg-gray-900 text-white px-4 py-4 rounded-xl font-black uppercase italic tracking-widest text-xs hover:bg-black transition-all text-center h-full">
              Success Stories
            </Link>
            <div className="col-span-2">
              <Link to="/contact" className="flex items-center justify-center bg-red-600 text-white px-4 py-4 rounded-xl font-black uppercase italic tracking-widest text-sm hover:bg-red-700 transition-all text-center w-full h-full">
                Send an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Section */}
      <section className="pt-16 pb-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black italic uppercase mb-8 text-center">Driving Test Centre Guides Across Bradford and Leeds</h2>
          <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed">
            <p>
              We provide clear, practical guides for the main driving test centres across Bradford and Leeds. Every learner has different preferences; some may feel more at home with the urban roads of Thornbury or Heaton, while others might prefer the routes around Horsforth or Steeton.
            </p>
            <p>
              Our guides cover local road layouts and common challenges found at Colton, Fearnville, and Walton LGV. By getting to know these locations in advance, you can better anticipate hazards and manage your speed, giving you the best possible chance of passing first time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-black italic uppercase mb-12 text-center">
            Frequently Asked Questions About Driving Test Centres in Bradford and Leeds
          </h2>
          <div className="space-y-2">
            <Accordion title="Which driving test centres do you cover in Bradford and Leeds?">
              We provide comprehensive coverage for all major test centres in the region. In Leeds, this includes Horsforth, Colton, Fearnville, and Walton LGV. In the Bradford area, we cover Heaton, Thornbury, and Steeton. Our instructors are highly familiar with the specific routes used at each of these locations.
            </Accordion>
            <Accordion title="What are the main Leeds driving test centres?">
              The three main centres for car drivers in Leeds are Horsforth (Low Lane), Colton (Selby Road), and Fearnville (Oakwood Lane). Each offers a different driving environment, from the busy Ring Road near Horsforth to the suburban junctions around Colton. We offer [automatic driving lessons](/automatic-driving-lessons) tailored to each of these areas.
            </Accordion>
            <Accordion title="Which Bradford driving test centres can I use?">
              Learners in Bradford typically use the Heaton or Thornbury test centres. Heaton often involves busy urban roads and one-way systems, while Thornbury features a mix of residential streets and larger roundabouts. We also cover Steeton for those living further west. You can see our [recent success stories](/recent-passes) from learners at all these centres.
            </Accordion>
            <Accordion title="How do I choose the right test centre for me?">
              Most learners choose the centre closest to where they live to make practicing easier. However, you might also consider the types of roads you feel most confident on. Discuss your options with your instructor, as they can help you decide which location matches your driving style best.
            </Accordion>
            <Accordion title="Is one test centre easier to pass at than others?">
              While pass rates vary, the DVSA maintains a consistent national standard for all tests. A centre might seem 'easier' simply because the local roads are more familiar to you. This is why we emphasise local preparation and [mock driving tests](/mock-driving-tests) to ensure you are ready for any location.
            </Accordion>
            <Accordion title="Why is it important to practice near my chosen test centre?">
              Practicing on the roads around your test centre helps you identify tricky junctions, speed limit changes, and common hazards before the big day. It removes the 'fear of the unknown,' allowing you to stay calm and follow the examiner's instructions more naturally.
            </Accordion>
            <Accordion title="Do you provide lessons for the Horsforth test routes?">
              Yes, we have a lot of experience with the Horsforth test centre. We focus on the complex Horsforth roundabout, the A6120 Ring Road, and the hilly residential streets of Cookridge. Our [intensive driving courses](/intensive-driving-courses) are a great way to get plenty of practice in this area quickly.
            </Accordion>
            <Accordion title="Can I get help with the Heaton and Thornbury test routes?">
              Definitely. We cover both Bradford centres extensively. We'll help you navigate the busy junctions near Thornbury and the often-congested streets around Heaton. Familiarity with these specific road layouts is a core part of our training.
            </Accordion>
            <Accordion title="What should I expect on the day of my practical test?">
              Your test will last about 40 minutes. It starts with an eyesight check and safety questions, followed by about 20 minutes of independent driving and one reversing manoeuvre. The examiner is looking for safe, legal driving and good awareness of other road users. You can find more details on our [contact page](/contact) if you have specific questions.
            </Accordion>
            <Accordion title="Do examiners always use the same test routes?">
              No, examiners have several routes they can choose from, and they may divert due to traffic or roadworks. This is why we teach you to drive safely in all conditions rather than just memorising a specific path. Our goal is to make you a confident driver on any road.
            </Accordion>
            <Accordion title="Is a mock driving test really worth doing?">
              We believe a [mock driving test](/mock-driving-tests) is one of the most valuable parts of your preparation. It simulates the pressure of the real exam and helps identify any small habits that could lead to faults, giving you time to fix them before your actual test.
            </Accordion>
            <Accordion title="How soon should I start practicing at my test centre?">
              We usually start introducing test-centre roads once you have mastered basic vehicle control. The final few weeks of your lessons will typically focus heavily on the specific challenges of your chosen centre to ensure you are fully prepared.
            </Accordion>
            <Accordion title="Are automatic lessons available for all these centres?">
              Yes, all the test centres in Bradford and Leeds are suitable for automatic learners. In fact, many students find that our [automatic driving lessons](/automatic-driving-lessons) make navigating busy junctions like those in Thornbury or Horsforth much easier, as there is no need to worry about gear changes.
            </Accordion>
            <Accordion title="Which centre is best if I live between Bradford and Leeds?">
              If you live in an area like Pudsey or Stanningley, you might find that both Thornbury and Horsforth are equally convenient. We can help you weigh up the pros and cons of each based on your current driving progress and the typical traffic conditions during your preferred test times.
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestCentreHub;

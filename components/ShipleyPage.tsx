
import React from 'react';
import BookingForm from './BookingForm';
import RecentPasses from './RecentPasses';
import ReviewsSlider from './ReviewsSlider';
import ReactMarkdown from 'react-markdown';
import { AreaData } from '../types';
import { ALL_LOCATIONS } from '../constants';
import TrustBadges from './TrustBadges';
import Breadcrumbs from './Breadcrumbs';
import { Link } from 'react-router-dom';
import Accordion from './Accordion';
import MockTestChecklist from './MockTestChecklist';

import Schema from './Schema';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const MarkdownLink: React.FC<any> = ({ href, children, ...props }) => {
  const isInternal = href?.startsWith('/');
  // Default classes for area page links
  const classes = "text-red-600 font-bold hover:underline transition-colors";
  
  // Special classes for the prep paragraphs which are in a dark section
  const isPrep = props.className?.includes('prep-link');
  const finalClasses = isPrep 
    ? "text-white font-bold underline hover:text-red-500 transition-colors"
    : classes;

  if (isInternal) {
    return <Link to={href} className={finalClasses}>{children}</Link>;
  }
  return <a href={href} className={finalClasses} target="_blank" rel="noopener noreferrer">{children}</a>;
};

interface ShipleyPageProps {
  area: AreaData & { city: string };
}

const ShipleyPage: React.FC<ShipleyPageProps> = ({ area }) => {
  React.useEffect(() => {
    // metadata handled by SEO component
  }, []);

  const nearbyAreas = area.nearbyIds 
    ? ALL_LOCATIONS.filter(a => area.nearbyIds?.includes(a.id))
    : ALL_LOCATIONS.filter(a => a.city === area.city && a.id !== area.id).slice(0, 5);

  const mapQuery = encodeURIComponent(`${area.name}, ${area.city === 'leeds' ? 'Leeds' : 'Bradford'}, UK`);
  const mapUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="animate-fadeIn font-inter text-gray-800 bg-white location-page">
      <SEO 
        title="Automatic Driving Lessons Shipley | BD17 & BD18 | FastAutoPass"
        description="Expert automatic driving lessons in Shipley, Saltaire, and Windhill. High pass rate, patient local instructors, and modern dual-controlled cars."
        canonical={`https://fastautopass.co.uk/${area.city}/${area.id}`}
      />
      <Schema type="LocalBusiness" data={{
        ...getLocalBusinessSchema(),
        "name": `FastAutoPass ${area.name}`,
        "description": `Professional automatic driving lessons in ${area.name}, ${area.city}. Specialist local instructors with focus on first-time passes and test route expertise.`,
        "address": {
          ...getLocalBusinessSchema().address,
          "addressLocality": area.name,
          "postalCode": area.postcode
        }
      }} />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: area.city.charAt(0).toUpperCase() + area.city.slice(1), item: `https://fastautopass.co.uk/${area.city}` },
        { name: area.name, item: `https://fastautopass.co.uk/${area.city}/${area.id}` }
      ])} />
      {area.localFAQs && area.localFAQs.length > 0 && (
        <Schema type="FAQPage" data={{
          "mainEntity": area.localFAQs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }} />
      )}
      <Breadcrumbs city={area.city} area={area.name} />
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-16 lg:py-32 border-b-8 border-red-600">
        {area.city !== 'bradford' && area.city !== 'leeds' && (
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src={`https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1600`} 
              alt={`Automatic driving lessons in ${area.name} ${area.postcode} with local instructor`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
          </div>
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-7/12">
              <span className="inline-block bg-red-600 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 italic shadow-lg">
                Automatic Driving Lessons in {area.postcode || area.name}
              </span>
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
                Automatic Driving Lessons in <span className="text-red-500">{area.name}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl font-medium italic">
                Pass your driving test with confidence in {area.name} using our modern automatic dual-controlled cars. Expert local tuition for the Bradford area.
              </p>
                <div className="flex flex-col sm:flex-row gap-5 mb-8">
                  <a href="#booking" className="bg-red-600 text-white px-10 py-5 rounded-full font-black text-xl text-center hover:bg-red-700 shadow-2xl transition-all uppercase italic tracking-widest">
                    {(area.city === 'bradford' || area.city === 'leeds') ? 'Book Now' : 'Book Availability'}
                  </a>
                  <div className="flex items-center justify-center sm:justify-start">
                    <TrustBadges dark minimal />
                  </div>
                </div>
            </div>
            <div className="lg:w-5/12 w-full" id="booking">
              <BookingForm areaName={area.name} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEO AUTHORITY & LOCAL CONTEXT SECTION */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight">
                Automatic Driving Lessons in {area.name} – Local Knowledge That Makes a Difference
              </h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
                <p>
                  Navigating the roads of <span className="text-gray-900 font-bold">{area.name}</span> requires more than just basic vehicle control; it demands an understanding of local traffic flow and junction layouts. Our instructors specialise in <span className="text-gray-900 font-bold">automatic driving lessons in {area.name}</span>, focusing on high-traffic areas like <span className="text-gray-900 font-bold">{area.roads[0]}</span> and the complex systems near <span className="text-gray-900 font-bold">{area.landmarks[0]}</span>.
                </p>
                <p>
                  We integrate <Link to="/mock-driving-tests" className="text-red-600 font-bold hover:underline">mock driving test</Link> preparation into our curriculum, ensuring you are familiar with the specific routes used by the <span className="text-gray-900 font-bold">{area.testCentres[0]}</span> test centre. This structured approach helps reduce test-day anxiety and significantly improves your chances of a first-time pass.
                </p>
                <p>
                  Whether you are looking for a standard weekly schedule or a more <Link to="/intensive-driving-courses" className="text-red-600 font-bold hover:underline">intensive automatic driving course</Link>, we provide the local expertise needed to master the unique challenges of <span className="text-gray-900 font-bold">{area.name}</span>. 
                  {nearbyAreas.length > 0 && (
                    <>
                      {" "}We also offer coverage for <Link to={`/${area.city}/${nearbyAreas[0].id}`} className="text-red-600 font-bold hover:underline">automatic lessons in {nearbyAreas[0].name}</Link> and throughout the wider <Link to={`/${area.city}`} className="text-red-600 font-bold hover:underline">{area.city.charAt(0).toUpperCase() + area.city.slice(1)} hub</Link>.
                    </>
                  )}
                  {nearbyAreas.length === 0 && (
                    <>
                      {" "}We also offer coverage throughout the wider <Link to={`/${area.city}`} className="text-red-600 font-bold hover:underline">{area.city.charAt(0).toUpperCase() + area.city.slice(1)} hub</Link>.
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-xl border border-gray-100 h-fit">
              {(() => {
                const index = ALL_LOCATIONS.findIndex(a => a.id === area.id);
                const version = index % 4;
                
                const variations = [
                  {
                    heading: `Why Learners Choose FastAutoPass in ${area.name}`,
                    points: [
                      `Patient, local instructors who understand ${area.name} roads.`,
                      "High pass rates with learners from across the area.",
                      "Modern, clean automatic cars for a premium experience.",
                      "Flexible pick-up points designed around your schedule."
                    ]
                  },
                  {
                    heading: `Master Automatic Driving in ${area.name}`,
                    points: [
                      "Calm instruction tailored to your individual learning pace.",
                      `Strategic practice on ${area.name}'s most common test roads.`,
                      "Stress-free learning with no gears or stalling to worry about.",
                      "Expert support to build your confidence behind the wheel."
                    ]
                  },
                  {
                    heading: `Your Journey to Passing in ${area.name}`,
                    points: [
                      "Building skills and confidence on local residential streets.",
                      `Focused preparation for the specific ${area.name} test routes.`,
                      "Professional guidance for every stage of your journey.",
                      "Honest, realistic feedback to help you succeed first time."
                    ]
                  },
                  {
                    heading: `Confidence Behind the Wheel in ${area.name}`,
                    points: [
                      `Mastering ${area.name}'s unique urban road systems and junctions.`,
                      "Identifying local hazards and developing perception.",
                      "Realistic mock tests to ensure you are fully test-ready.",
                      "Expert automatic tuition focused on safety and control."
                    ]
                  }
                ];

                const selected = variations[version];

                return (
                  <>
                    <h3 className="text-2xl lg:text-3xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 leading-tight border-b-4 border-red-600 pb-4 inline-block">
                      {selected.heading}
                    </h3>
                    <ul className="space-y-6">
                      {selected.points.map((item, i) => (
                        <li key={i} className="flex items-center space-x-4 text-gray-700 font-bold italic uppercase tracking-tight text-lg">
                          <span className="w-3 h-3 bg-red-600 rounded-full shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                );
              })()}
              
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center space-x-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Local {area.name} knowledge integrated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRO (LOCAL FOCUS) */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter text-gray-900 text-center">Top-Rated Automatic Tuition in {area.name}</h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed space-y-6">
            {area.introParagraphs && area.introParagraphs.length > 0 ? (
              area.introParagraphs.map((p, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <ReactMarkdown components={{ a: MarkdownLink }}>{p}</ReactMarkdown>
                </div>
              ))
            ) : (
              <>
                <p>
                  Looking for professional <span className="text-red-600 font-bold italic underline">automatic driving lessons in {area.name}</span>? At FastAutoPass, we provide high-quality, patient instruction tailored specifically to the unique road conditions of {area.name} and the wider {area.city === 'leeds' ? 'Leeds' : 'Bradford'} region.
                </p>
                <p>
                  Whether you are a complete beginner or looking to switch from manual, our local instructors know the area intimately. We focus on building your confidence, removing the stress of gear changes, and ensuring you are fully prepared for the challenges of modern {area.city === 'leeds' ? 'Leeds' : 'Bradford'} traffic.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4. RECENT PASSES SLIDESHOW */}
      <RecentPasses areaName={area.name} />

      {/* 5. LOCAL ENVIRONMENT & COMMUNITY */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-black mb-8 italic uppercase tracking-tighter text-gray-900">Learning to Drive in {area.name}</h2>
            <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
              <p>
                {area.communityContext} The {area.name} area offers a diverse range of driving environments, from the busy arterial routes like <span className="font-bold text-gray-900 underline decoration-red-200">{area.roads[0]}</span> to the quieter residential grids near <span className="font-bold text-gray-900">{area.landmarks[0]}</span>.
              </p>
              <p>
                <span className="text-red-600 font-black italic">The Challenge:</span> {area.learnerChallenges} Our lessons are structured to tackle these specific local hazards, using practice routes that mirror those used by DVSA examiners from the <span className="font-bold text-gray-900">{area.testCentres[0]}</span> test centre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCAL ROAD & JUNCTION ANALYSIS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 italic uppercase tracking-tighter text-gray-900">Local Road & Junction Analysis</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">Technical Insights for Learners in {area.name}</p>
            <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">Key Training Roads</h3>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                We utilise <span className="text-gray-900 font-bold">{area.roads.join(', ')}</span> to teach high-speed planning and lane discipline. These roads provide a perfect mix of varying speed limits and clear signage.
              </p>
              <div className="flex items-center text-[10px] font-black text-red-600 uppercase tracking-[0.2em] italic">
                <span className="w-8 h-px bg-red-200 mr-3"></span> Lane Management
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">Junction Mastery</h3>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                Learners in {area.name} must navigate complex junctions, from the busy roundabouts near <span className="text-gray-900 font-bold">{area.landmarks[0]}</span> to tight T-junctions requiring precise observation.
              </p>
              <div className="flex items-center text-[10px] font-black text-red-600 uppercase tracking-[0.2em] italic">
                <span className="w-8 h-px bg-red-200 mr-3"></span> Priority Skills
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">Traffic Flow Analysis</h3>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                Peak periods are heavily influenced by {area.communityContext?.toLowerCase() || 'local commuter patterns'}. We plan lessons to ensure you experience both quiet residential and busy urban flow.
              </p>
              <div className="flex items-center text-[10px] font-black text-red-600 uppercase tracking-[0.2em] italic">
                <span className="w-8 h-px bg-red-200 mr-3"></span> Hazard Perception
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRACTICE ROUTES & LANDMARKS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-12 italic uppercase tracking-tighter text-gray-900">Practice Routes & Local Landmarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-black mb-4 uppercase italic">Key Road Networks</h3>
              <p className="text-gray-600">We frequently utilise <span className="font-bold text-gray-900">{area.roads.join(', ')}</span> to help you master junction planning and speed control.</p>
            </div>
            <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-black mb-4 uppercase italic">Local Landmarks</h3>
              <p className="text-gray-600">Your lessons will take you past <span className="font-bold text-gray-900">{area.landmarks.join(', ')}</span>, providing excellent visual markers for navigation.</p>
            </div>
            <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-black mb-4 uppercase italic">College & Work Links</h3>
              <p className="text-gray-600">Popular pick-up points include <span className="font-bold text-gray-900">{area.colleges.join(', ') || 'Local stations and hubs'}</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTENSIVE & DVSA PREP */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 italic uppercase tracking-tighter text-red-500">Intensive Courses & DVSA Preparation</h2>
              <div className="space-y-6 text-lg text-gray-400 font-medium leading-relaxed">
                {area.prepParagraphs && area.prepParagraphs.length > 0 ? (
                  area.prepParagraphs.map((p, i) => (
                    <div key={i} className="mb-4 last:mb-0">
                      <ReactMarkdown components={{ a: (props) => <MarkdownLink {...props} className="prep-link" /> }}>{p}</ReactMarkdown>
                    </div>
                  ))
                ) : (
                  <>
                    <p>
                      Need to pass quickly? Our <Link to="/intensive-driving-courses" className="text-white font-bold underline hover:text-red-500 transition-colors">Intensive Automatic Courses in {area.name}</Link> are the fastest way to gain your freedom. We condense months of learning into just a few weeks of focused, high-impact tuition.
                    </p>
                    <p>
                      For those nearing their test, we offer <Link to="/mock-driving-tests" className="text-white font-bold underline hover:text-red-500 transition-colors">Mock Driving Tests</Link> on actual {area.name} test routes. This ensures you are familiar with the specific expectations of the {area.testCentres[0]} examiners.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
              <h3 className="text-2xl font-black mb-6 uppercase italic">Why Automatic in {area.name}?</h3>
              <ul className="space-y-4 font-bold uppercase tracking-tight italic">
                {['Faster Learning Curve', 'Zero Stalling in Traffic', 'Focus on Road Safety', 'Higher Pass Rates', 'Better for Hill Starts'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Mock Test & Test Preparation in Shipley */}
      <MockTestChecklist locationName={area.name} variant="teaser" />

      {/* 10. What Learners Say */}
      <ReviewsSlider />

      {/* 11. LOCAL AREA MAP SECTION */}
      <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-black mb-4 italic uppercase tracking-tighter text-gray-900">Local Map of {area.name}, {area.city === 'leeds' ? 'Leeds' : 'Bradford'}</h2>
              <p className="text-gray-600 font-medium italic">Our automatic driving lessons cover the {area.name} area shown below.</p>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
            </div>

            <div className="relative group bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden aspect-video">
              <iframe 
                title={`Map of ${area.name} ${area.city === 'leeds' ? 'Leeds' : 'Bradford'} for automatic driving lessons`}
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[2.4rem] grayscale-[0.2] contrast-[1.1] brightness-[1.05]"
              ></iframe>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-500 font-bold uppercase tracking-widest italic leading-relaxed">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                <p>Mastering complex test routes around <span className="text-gray-900">{area.roads[0]}</span> and surrounding {area.name} hotspots.</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                <p>Strategic training near <span className="text-gray-900">{area.landmarks[0]}</span> ensuring total exam confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl lg:text-5xl font-black mb-12 italic uppercase tracking-tighter text-gray-900 text-center">Frequently Asked Questions</h2>
          <div className="space-y-0">
            {area.localFAQs?.map((faq, i) => (
              <Accordion key={i} title={faq.question}>
                <div className="prose prose-sm max-w-none text-gray-600 font-medium leading-relaxed">
                  <ReactMarkdown components={{ a: MarkdownLink }}>{faq.answer}</ReactMarkdown>
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* 13. NEARBY AREAS */}
      <section className="py-12 bg-gray-50 nearby-coverage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900">Nearby Coverage Areas</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyAreas.map(nearby => (
              <Link 
                key={nearby.id} 
                to={`/${area.city}/${nearby.id}`}
                className="bg-white px-6 py-3 rounded-xl border border-gray-200 font-bold text-sm text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all uppercase italic tracking-tight shadow-sm"
              >
                {nearby.name}
              </Link>
            ))}
            <Link 
              to={`/${area.city}`}
              className="bg-gray-900 px-6 py-3 rounded-xl font-bold text-sm text-white hover:bg-black transition-all uppercase italic tracking-tight"
            >
              All {area.city.charAt(0).toUpperCase() + area.city.slice(1)} Areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShipleyPage;

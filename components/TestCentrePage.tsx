
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { TEST_CENTRES } from '../testCentresData';
import { CONTACT_INFO } from '../constants';
import TrustBadges from './TrustBadges';
import Schema from './Schema';
import { getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const MarkdownLink: React.FC<any> = ({ href, children, ...props }) => {
  const isInternal = href?.startsWith('/');
  const classes = "text-red-600 font-black hover:underline transition-all";
  if (isInternal) {
    return <Link to={href} className={classes} {...props}>{children}</Link>;
  }
  return <a href={href} className={classes} {...props}>{children}</a>;
};

const FAQItem: React.FC<{ faq: { question: string; answer: string }; idx: number }> = ({ faq, idx }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${idx}`}
        className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="text-sm font-black uppercase italic text-gray-900 pr-8 leading-tight">{faq.question}</span>
        <span className={`text-red-600 font-black transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
      </button>
      <div 
        id={`faq-answer-${idx}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 bg-white prose prose-sm max-w-none text-gray-600 font-medium leading-relaxed border-t border-gray-100">
          <ReactMarkdown components={{ a: MarkdownLink }}>{faq.answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

const TestCentrePage: React.FC = () => {
  const { centreId } = useParams<{ centreId: string }>();
  const centre = TEST_CENTRES.find(c => c.id === centreId);

  React.useEffect(() => {
    // metadata handled by SEO component
  }, [centre]);

  if (!centre) {
    return <Navigate to="/driving-test-centres" replace />;
  }

  return (
    <div className="bg-white min-h-screen animate-fadeIn test-centre-page">
      <SEO 
        title={centre.metaTitle}
        description={centre.metaDescription}
        canonical={`https://fastautopass.co.uk/driving-test-centres/${centre.id}`}
      />
      <Schema 
        type="BreadcrumbList" 
        data={getBreadcrumbSchema([
          { name: "Home", item: "https://fastautopass.co.uk/" },
          { name: "Driving Test Centres", item: "https://fastautopass.co.uk/driving-test-centres" },
          { name: centre.name, item: `https://fastautopass.co.uk/driving-test-centres/${centre.id}` }
        ])} 
      />
      <Schema 
        type="FAQPage" 
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": centre.faqs.map(faq => ({
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
      <section className="relative bg-gray-900 text-white py-12 lg:py-16 border-b-8 border-red-600 overflow-hidden">
        {centre.city !== 'Bradford' && centre.city !== 'Leeds' && (
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?auto=format&fit=crop&q=80&w=2000" 
              alt={centre.name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/driving-test-centres" className="inline-block text-red-600 font-black uppercase italic tracking-widest text-xs mb-4 hover:text-white transition-colors">
            ← Back to all centres
          </Link>
          <h1 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-4 max-w-4xl leading-none">
            {centre.h1}
          </h1>
          
          {(centre.city === 'Bradford' || centre.city === 'Leeds' || centre.name.includes('Walton')) && (
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="bg-red-600 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-red-700 transition-all uppercase italic tracking-widest shadow-xl">
                Enquire Now
              </Link>
              <TrustBadges dark minimal />
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            
            {/* SECTION 1: Quick Intro */}
            <div className="mb-12">
              <div className="prose prose-lg max-w-none text-gray-700 font-medium leading-relaxed italic border-l-4 border-red-600 pl-6">
                <ReactMarkdown components={{ a: MarkdownLink }}>{centre.intro}</ReactMarkdown>
              </div>
            </div>

            {/* SECTION 2: About */}
            <div className="mb-12">
              <h2 className="text-2xl font-black italic uppercase mb-4 text-gray-900 tracking-tight">About this driving test centre</h2>
              <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed">
                <ReactMarkdown components={{ a: MarkdownLink }}>{centre.about}</ReactMarkdown>
              </div>
            </div>

            {/* SECTION 2.5: Services */}
            {centre.services && (
              <div className="mb-12">
                <h2 className="text-2xl font-black italic uppercase mb-6 text-gray-900 tracking-tight">Driving Services at {centre.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {centre.services.map((service, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col">
                      <h3 className="text-lg font-black italic uppercase mb-3 text-gray-900">{service.name}</h3>
                      <p className="text-gray-600 text-sm font-medium mb-6 flex-grow leading-relaxed">{service.description}</p>
                      <Link to={service.link} className="text-red-600 font-black uppercase italic tracking-widest text-[10px] hover:underline">
                        Learn More →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION 3: Roads & Roundabouts */}
            <div className="mb-12">
              <h2 className="text-2xl font-black italic uppercase mb-4 text-gray-900 tracking-tight">Roads & roundabouts we practise near {centre.name}</h2>
              <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed">
                <ReactMarkdown components={{ a: MarkdownLink }}>{centre.roads}</ReactMarkdown>
              </div>
            </div>

            {/* SECTION 4: Common Mistakes */}
            <div className="mb-12">
              <h2 className="text-2xl font-black italic uppercase mb-4 text-gray-900 tracking-tight">Common mistakes at this test centre</h2>
              <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed">
                <ReactMarkdown components={{ a: MarkdownLink }}>{centre.mistakes}</ReactMarkdown>
              </div>
            </div>

            {/* SECTION 5: How we prepare you */}
            <div className="mb-12">
              <h2 className="text-2xl font-black italic uppercase mb-4 text-gray-900 tracking-tight">How we prepare you for this test centre</h2>
              <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed">
                <ReactMarkdown components={{ a: MarkdownLink }}>{centre.preparation}</ReactMarkdown>
              </div>
            </div>

            {/* SECTION 6: Recent Passes */}
            <div className="mb-12">
              <h2 className="text-2xl font-black italic uppercase mb-4 text-gray-900 tracking-tight">Recent passes at {centre.name}</h2>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <p className="text-gray-600 font-medium mb-6 italic leading-relaxed">{centre.recentPassesText}</p>
                <Link to={centre.recentPassesLink} className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-black uppercase italic tracking-widest text-xs hover:bg-red-700 transition-all shadow-md">
                  View Success Stories
                </Link>
              </div>
            </div>

            {/* SECTION 7: Areas we cover */}
            <div className="mb-12">
              <h2 className="text-2xl font-black italic uppercase mb-4 text-gray-900 tracking-tight">Areas we cover for this centre</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {centre.coveredAreas.map((area, idx) => {
                  const itemClasses = "bg-white p-3 rounded-xl border border-gray-100 text-center font-black uppercase italic text-[10px] tracking-widest transition-all shadow-sm";
                  if (area.link && area.link !== '#' && area.link !== '/contact') {
                    return (
                      <Link 
                        key={idx} 
                        to={area.link}
                        className={`${itemClasses} hover:border-red-600 hover:text-red-600`}
                      >
                        {area.name}
                      </Link>
                    );
                  }
                  return (
                    <div 
                      key={idx} 
                      className={`${itemClasses} text-gray-400 opacity-75`}
                    >
                      {area.name}
                    </div>
                  );
                })}
              </div>
              <Link to={centre.city.toLowerCase() === 'leeds' ? '/leeds' : '/bradford'} className="text-red-600 font-black uppercase italic tracking-widest text-[10px] hover:underline">
                View all {centre.city} areas →
              </Link>
            </div>

            {/* SECTION 8: Location Map */}
            <div className="mb-12">
              <h2 className="text-2xl font-black italic uppercase mb-4 text-gray-900 tracking-tight">Location Map</h2>
              <div className="bg-gray-50 p-4 rounded-3xl border border-gray-100 shadow-sm">
                <div className="aspect-video w-full overflow-hidden rounded-2xl">
                  <iframe
                    src={centre.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${centre.name} Location Map`}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* SECTION 9: FAQs */}
            <div className="mb-12">
              <h2 className="text-2xl font-black italic uppercase mb-6 text-gray-900 tracking-tight">FAQs about {centre.name} Driving Test Centre</h2>
              <div className="space-y-3">
                {centre.faqs.map((faq, idx) => (
                  <FAQItem key={idx} faq={faq} idx={idx} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCentrePage;

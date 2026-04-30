
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_LOCATIONS } from '../constants';
import Breadcrumbs from './Breadcrumbs';
import Schema from './Schema';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const LeedsHub: React.FC = () => {
  React.useEffect(() => {
    // metadata handled by SEO component
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const leedsAreas = ALL_LOCATIONS
    .filter(a => a.city === 'leeds')
    .filter(a => 
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      a.postcode?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aPC = a.postcode || '';
      const bPC = b.postcode || '';
      
      // Sort by postcode prefix (e.g., LS vs BD)
      const aPrefix = aPC.replace(/[0-9]/g, '');
      const bPrefix = bPC.replace(/[0-9]/g, '');
      if (aPrefix !== bPrefix) return aPrefix.localeCompare(bPrefix);

      // Sort by postcode number (e.g., 1, 2, 10)
      const aNum = parseInt(aPC.replace(/[^0-9]/g, '') || '0');
      const bNum = parseInt(bPC.replace(/[^0-9]/g, '') || '0');
      if (aNum !== bNum) return aNum - bNum;

      // Finally by name
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="bg-white animate-fadeIn min-h-screen location-page">
      <SEO 
        title="Automatic Driving Lessons Leeds | Local Service Areas & Postcodes"
        description="Explore all Leeds areas covered by FastAutoPass. Professional automatic driving tuition across LS postcodes including Headingley, Horsforth, and beyond."
        canonical="https://fastautopass.co.uk/leeds"
      />
      <Schema type="LocalBusiness" data={{
        ...getLocalBusinessSchema(),
        "name": "FastAutoPass Leeds",
        "address": {
          ...getLocalBusinessSchema().address,
          "addressLocality": "Leeds",
          "postalCode": "LS1"
        }
      }} />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Leeds", item: "https://fastautopass.co.uk/leeds" }
      ])} />
      <Schema type="CollectionPage" data={{
        "name": "Driving Lessons in Leeds Areas",
        "description": "Directory of all locations covered by FastAutoPass Driving School in Leeds.",
        "url": "https://fastautopass.co.uk/leeds",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": leedsAreas.map((area, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://fastautopass.co.uk/leeds/${area.id}`,
            "name": area.name
          }))
        }
      }} />
      <Schema type="FAQPage" data={{
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where do you offer driving lessons in Leeds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer automatic driving lessons across all Leeds postcodes including LS1 to LS29, covering areas like Headingley, Horsforth, Pudsey, and Roundhay."
            }
          },
          {
            "@type": "Question",
            "name": "Do you cover the Leeds Horsforth test centre?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialise in the Horsforth and Harehills test centre routes, ensuring our Leeds students are fully prepared for their specific exam environment."
            }
          }
        ]
      }} />
      
      {/* 1. BREADCRUMBS */}
      <Breadcrumbs city="Leeds" />
      
      {/* 2. PREMIUM HERO SECTION */}
      <section className="relative py-16 lg:py-24 bg-gray-900 text-white overflow-hidden border-b-8 border-red-600 hero-impact">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=2000" 
            alt="Leeds City" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-[0.9] drop-shadow-2xl">
              Automatic Driving <br/><span className="text-red-600">Lessons in Leeds Areas</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 font-bold italic leading-relaxed max-w-2xl mx-auto uppercase tracking-wide">
              Use this page to find your local Leeds area and go straight to the correct location page.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEARCH & MICRO-SECTION */}
      <div className="py-10 bg-white border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 italic block mb-4">
              Quick Area Search
            </span>
            <div className="relative group">
              <input 
                type="text"
                placeholder="Search your Leeds area or postcode (e.g. LS1, Headingley, LS6)"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-red-600 focus:ring-0 transition-all outline-none font-bold italic text-gray-700 placeholder:text-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-red-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">
            All areas are listed by postcode for quick navigation
          </p>
        </div>
      </div>

      {/* 4. AREA DIRECTORY GRID */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {leedsAreas.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {leedsAreas.map((area) => (
                <Link 
                  key={area.id} 
                  to={`/leeds/${area.id}`} 
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-20 group-hover:text-red-600 transition-all font-black italic text-3xl">
                     {area.postcode}
                  </div>
                  <span className="text-[10px] font-black text-red-600 mb-2 uppercase tracking-widest italic">{area.postcode}</span>
                  <span className="font-bold text-gray-800 text-sm uppercase italic tracking-tighter leading-tight group-hover:text-red-600 transition-colors">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 font-bold italic uppercase tracking-wide">No areas found matching "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-red-600 font-black uppercase italic text-xs hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* 5. BOTTOM NOTE */}
          <div className="mt-16 text-center max-w-2xl mx-auto pt-12 border-t border-gray-200">
            <p className="text-gray-400 font-bold italic leading-relaxed uppercase tracking-wide text-[10px]">
              If you are not sure which Leeds area is right for you, get in touch and we will point you to the correct local page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeedsHub;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_LOCATIONS } from '../constants';
import Breadcrumbs from './Breadcrumbs';
import Schema from './Schema';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const BradfordHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const bradfordAreas = ALL_LOCATIONS
    .filter(a => a.city === 'bradford' && a.postcode?.startsWith('BD'))
    .filter(a => 
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      a.postcode?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aPC = a.postcode || '';
      const bPC = b.postcode || '';
      
      // Sort by postcode prefix (BD)
      const aPrefix = aPC.replace(/[0-9]/g, '');
      const bPrefix = bPC.replace(/[0-9]/g, '');
      if (aPrefix !== bPrefix) return aPrefix.localeCompare(bPrefix);

      // Sort by postcode number
      const aNum = parseInt(aPC.replace(/[^0-9]/g, '') || '0');
      const bNum = parseInt(bPC.replace(/[^0-9]/g, '') || '0');
      if (aNum !== bNum) return aNum - bNum;

      // Finally by name
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="bg-white animate-fadeIn min-h-screen location-page">
      <SEO 
        title="Automatic Driving Lessons Bradford | All Service Areas & Postcodes"
        description="Find automatic driving lessons in your Bradford area. We cover all BD postcodes including Shipley, Bingley, Keighley, and more. Choose your local area to start."
        canonical="https://fastautopass.co.uk/bradford"
      />
      <Schema type="LocalBusiness" data={{
        ...getLocalBusinessSchema(),
        "name": "FastAutoPass Bradford",
        "address": {
          ...getLocalBusinessSchema().address,
          "addressLocality": "Bradford",
          "postalCode": "BD1"
        }
      }} />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Bradford", item: "https://fastautopass.co.uk/bradford" }
      ])} />
      <Schema type="CollectionPage" data={{
        "name": "Driving Lessons in Bradford Areas",
        "description": "Directory of all locations covered by FastAutoPass Driving School in Bradford.",
        "url": "https://fastautopass.co.uk/bradford",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": bradfordAreas.map((area, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://fastautopass.co.uk/bradford/${area.id}`,
            "name": area.name
          }))
        }
      }} />
      <Schema type="FAQPage" data={{
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where do you offer driving lessons in Bradford?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer automatic driving lessons across all Bradford postcodes including BD1 to BD18, covering areas like Shipley, Bingley, Thornton, and Wyke."
            }
          },
          {
            "@type": "Question",
            "name": "Do you cover the Bradford Thornbury test centre?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialise in the Thornbury, Heaton, and Steeton test centre routes, ensuring our Bradford students are locally prepared for their practical exam."
            }
          }
        ]
      }} />
      
      {/* 1. BREADCRUMBS */}
      <Breadcrumbs city="Bradford" />
      
      {/* 2. PREMIUM HERO SECTION */}
      <section className="relative py-16 lg:py-24 bg-gray-900 text-white overflow-hidden border-b-8 border-red-600 hero-impact">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000" 
            alt="Bradford District" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-[0.9] drop-shadow-2xl">
              Automatic Driving <br/><span className="text-red-600">Lessons in Bradford Areas</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 font-bold italic leading-relaxed max-w-2xl mx-auto uppercase tracking-wide">
              Use this page to find your local Bradford area and go straight to the correct location page.
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
                placeholder="Search your Bradford area or postcode (e.g. BD1, Shipley, BD10)"
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
          {bradfordAreas.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {bradfordAreas.map((area) => (
                <Link 
                  key={area.id} 
                  to={`/bradford/${area.id}`} 
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
              If you are not sure which Bradford area is right for you, get in touch and we will point you to the correct local page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BradfordHub;

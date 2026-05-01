
import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_LOCATIONS, CONTACT_INFO } from '../constants';
import { TEST_CENTRES } from '../testCentresData';

import Schema from './Schema';
import { getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const InternalOverview: React.FC = () => {
  React.useEffect(() => {
    // metadata handled by SEO component
  }, []);

  const lastReviewed = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const bradfordAreas = ALL_LOCATIONS.filter(a => a.city === 'bradford');
  const leedsAreas = ALL_LOCATIONS.filter(a => a.city === 'leeds');

  const corePages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Instructors', path: '/our-instructors' },
    { name: 'Become a Driving Instructor – Join Our Team', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Sitemap', path: '/sitemap' }
  ];

  const services = [
    { name: 'Automatic Driving Lessons', path: '/automatic-driving-lessons' },
    { name: 'Intensive Driving Courses', path: '/intensive-driving-courses' },
    { name: 'Pass Plus Courses', path: '/pass-plus' },
    { name: 'Motorway Lessons', path: '/motorway-lessons' },
    { name: 'Refresher Lessons', path: '/refresher-lessons' },
    { name: 'Mock Driving Tests', path: '/mock-driving-tests' },
    { name: 'ADI Part 2 Training', path: '/adi-part-2-training' },
    { name: 'ADI Part 3 Training', path: '/adi-part-3-training' },
    { name: 'Taxi Driver Assessment', path: '/taxi-assessments' }
  ];

  const testPrep = [
    { name: 'Recent Automatic Test Passes', path: '/recent-passes' },
    { name: 'DVSA Test Preparation', path: '/test-preparation' },
    { name: 'Driving Test Centres Hub', path: '/driving-test-centres' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 legal-page">
      <SEO 
        title="Site Content Overview | FastAutoPass Driving School"
        description="Internal overview of all FastAutoPass website pages, including core services, driving test centres, and local service areas across Bradford and Leeds."
        canonical="https://fastautopass.co.uk/internal-overview"
      />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Site Overview", item: "https://fastautopass.co.uk/internal-overview" }
      ])} />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-gray-100 pb-8">
            <div>
              <h1 className="text-4xl font-black uppercase italic tracking-tighter text-gray-900">Site Content Overview</h1>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic mt-2">Internal Management Dashboard</p>
            </div>
            <div className="mt-4 md:mt-0 bg-gray-900 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest italic">
              Last Reviewed: {lastReviewed}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* 1. Core Pages */}
            <section>
              <h2 className="text-lg font-black uppercase italic mb-6 text-red-600 border-b-2 border-red-600 pb-1 inline-block">1. Core Pages</h2>
              <ul className="space-y-2">
                {corePages.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors uppercase tracking-tight">• {page.name}</Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2. Services */}
            <section>
              <h2 className="text-lg font-black uppercase italic mb-6 text-red-600 border-b-2 border-red-600 pb-1 inline-block">2. Services</h2>
              <ul className="space-y-2">
                {services.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors uppercase tracking-tight">• {page.name}</Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Mock & Test Prep */}
            <section>
              <h2 className="text-lg font-black uppercase italic mb-6 text-red-600 border-b-2 border-red-600 pb-1 inline-block">3. Mock & Test Prep</h2>
              <ul className="space-y-2">
                {testPrep.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors uppercase tracking-tight">• {page.name}</Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Driving Test Centres */}
            <section className="lg:col-span-3">
              <h2 className="text-lg font-black uppercase italic mb-6 text-red-600 border-b-2 border-red-600 pb-1 inline-block">4. Driving Test Centres</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {TEST_CENTRES.map(centre => (
                  <Link 
                    key={centre.id} 
                    to={`/driving-test-centres/${centre.id}`}
                    className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-red-600 transition-all"
                  >
                    <p className="text-xs font-black uppercase italic text-gray-900">{centre.name}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{centre.city}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* 5. Bradford Areas */}
            <section className="lg:col-span-3">
              <h2 className="text-lg font-black uppercase italic mb-6 text-red-600 border-b-2 border-red-600 pb-1 inline-block">5. Bradford Areas ({bradfordAreas.length})</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {bradfordAreas.map(area => (
                  <Link 
                    key={area.id} 
                    to={`/bradford/${area.id}`}
                    className="text-[10px] font-bold text-gray-500 hover:text-red-600 transition-colors uppercase tracking-tight"
                  >
                    • {area.name}
                  </Link>
                ))}
              </div>
            </section>

            {/* 6. Leeds Areas */}
            <section className="lg:col-span-3">
              <h2 className="text-lg font-black uppercase italic mb-6 text-red-600 border-b-2 border-red-600 pb-1 inline-block">6. Leeds Areas ({leedsAreas.length})</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {leedsAreas.map(area => (
                  <Link 
                    key={area.id} 
                    to={`/leeds/${area.id}`}
                    className="text-[10px] font-bold text-gray-500 hover:text-red-600 transition-colors uppercase tracking-tight"
                  >
                    • {area.name}
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalOverview;

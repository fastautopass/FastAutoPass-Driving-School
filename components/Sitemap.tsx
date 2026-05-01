
import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_LOCATIONS } from '../constants';
import { TEST_CENTRES } from '../testCentresData';
import Schema from './Schema';
import { getBreadcrumbSchema } from '../lib/schemaLibrary';

import SEO from './SEO';

const Sitemap: React.FC = () => {
  React.useEffect(() => {
    // metadata handled by SEO component
  }, []);

  const bradfordAreas = ALL_LOCATIONS.filter(a => a.city === 'bradford');
  const leedsAreas = ALL_LOCATIONS.filter(a => a.city === 'leeds');

  return (
    <div className="bg-white min-h-screen pt-20 pb-32 legal-page">
      <SEO 
        title="Sitemap | FastAutoPass Driving School Bradford & Leeds"
        description="Navigate through all our driving lesson services, location pages, and learning resources across West Yorkshire."
        canonical="https://fastautopass.co.uk/sitemap"
      />
      <Schema type="BreadcrumbList" data={getBreadcrumbSchema([
        { name: "Home", item: "https://fastautopass.co.uk/" },
        { name: "Sitemap", item: "https://fastautopass.co.uk/sitemap" }
      ])} />
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter mb-12 text-gray-900">Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* CORE PAGES */}
          <div>
            <h2 className="text-xl font-black uppercase italic mb-6 text-red-600 tracking-widest border-b-4 border-red-600 pb-2 inline-block">Core Pages</h2>
            <ul className="space-y-4 font-bold text-gray-600 uppercase tracking-tight italic">
              <li><Link to="/" className="hover:text-red-600">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-red-600">About Us</Link></li>
              <li><Link to="/our-instructors" className="hover:text-red-600">Female Driving Instructors</Link></li>
              <li><Link to="/careers" className="hover:text-red-600">Become a Driving Instructor with FastAutoPass</Link></li>
              <li><Link to="/contact" className="hover:text-red-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* LEARN TO DRIVE */}
          <div>
            <h2 className="text-xl font-black uppercase italic mb-6 text-red-600 tracking-widest border-b-4 border-red-600 pb-2 inline-block">Learn to Drive</h2>
            <ul className="space-y-4 font-bold text-gray-600 uppercase tracking-tight italic">
              <li><Link to="/nervous-driver-lessons" className="hover:text-red-600">Nervous Driver Lessons</Link></li>
              <li><Link to="/how-many-driving-lessons-do-i-need" className="hover:text-red-600">How many driving lessons do I need to pass?</Link></li>
              <li><Link to="/what-happens-in-a-driving-lesson" className="hover:text-red-600">What Happens in a Driving Lesson?</Link></li>
              <li><Link to="/intensive-driving-courses-are-they-worth-it" className="hover:text-red-600">Intensive Courses: Are They Worth It?</Link></li>
              <li><Link to="/automatic-vs-manual-driving-lessons" className="hover:text-red-600">Automatic vs Manual</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-xl font-black uppercase italic mb-6 text-red-600 tracking-widest border-b-4 border-red-600 pb-2 inline-block">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 italic">Learner Driving Services</h3>
                <ul className="space-y-4 font-bold text-gray-600 uppercase tracking-tight italic">
                  <li><Link to="/automatic-driving-lessons" className="hover:text-red-600">Automatic Driving Lessons</Link></li>
                  <li><Link to="/manual-driving-lessons" className="hover:text-red-600">Manual Driving Lessons</Link></li>
                  <li><Link to="/intensive-driving-courses" className="hover:text-red-600">Intensive Driving Courses</Link></li>
                  <li><Link to="/pass-plus" className="hover:text-red-600">Pass Plus Courses</Link></li>
                  <li><Link to="/motorway-lessons" className="hover:text-red-600">Motorway Lessons</Link></li>
                  <li><Link to="/refresher-lessons" className="hover:text-red-600">Refresher Lessons</Link></li>
                  <li><Link to="/mock-driving-tests" className="hover:text-red-600">Mock Driving Tests</Link></li>
                </ul>
              </div>
              <div>
                <div className="mb-8">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 italic">Instructor Training</h3>
                  <ul className="space-y-4 font-bold text-gray-600 uppercase tracking-tight italic">
                    <li><Link to="/adi-part-2-training" className="hover:text-red-600">ADI Part 2 Training</Link></li>
                    <li><Link to="/adi-part-3-training" className="hover:text-red-600">ADI Part 3 Training</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 italic">Professional Driver Services</h3>
                  <ul className="space-y-4 font-bold text-gray-600 uppercase tracking-tight italic">
                    <li><Link to="/taxi-assessments" className="hover:text-red-600">Taxi Driver Assessment</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* TEST & PREPARATION */}
          <div>
            <h2 className="text-xl font-black uppercase italic mb-6 text-red-600 tracking-widest border-b-4 border-red-600 pb-2 inline-block">Test & Preparation</h2>
            <ul className="space-y-4 font-bold text-gray-600 uppercase tracking-tight italic">
              <li><Link to="/recent-passes" className="hover:text-red-600">Recent Automatic Test Passes</Link></li>
              <li><Link to="/test-preparation" className="hover:text-red-600">DVSA Test Preparation</Link></li>
            </ul>
          </div>

          {/* DRIVING TEST CENTRES */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black uppercase italic mb-6 text-red-600 tracking-widest border-b-4 border-red-600 pb-2 inline-block">Driving Test Centres</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-4 font-bold text-gray-600 uppercase tracking-normal md:tracking-tight italic leading-snug md:leading-relaxed">
              <div className="col-span-1 md:col-span-2 mb-2">
                <Link to="/driving-test-centres" className="text-gray-900 font-black text-xs hover:text-red-600 uppercase tracking-widest italic">Driving Test Centres in Bradford & Leeds (Hub)</Link>
              </div>
              {TEST_CENTRES.sort((a, b) => a.name.localeCompare(b.name)).map(centre => (
                <div key={centre.id} className="list-none">
                  <Link to={`/driving-test-centres/${centre.id}`} className="hover:text-red-600 transition-colors text-sm block py-1">
                    {centre.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* BRADFORD AREAS */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black uppercase italic mb-6 text-red-600 tracking-widest border-b-4 border-red-600 pb-2 inline-block">Bradford Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-bold text-[10px] text-gray-500 uppercase tracking-widest italic leading-relaxed">
              <div className="col-span-1 sm:col-span-2 mb-2">
                <Link to="/bradford" className="text-gray-900 font-black text-xs hover:text-red-600">Bradford Hub Home</Link>
              </div>
              {bradfordAreas.map(area => (
                <div key={area.id} className="list-none">
                  <Link to={`/bradford/${area.id}`} className="hover:text-red-600 transition-colors block">
                    Automatic Lessons in {area.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* LEEDS AREAS */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black uppercase italic mb-6 text-red-600 tracking-widest border-b-4 border-red-600 pb-2 inline-block">Leeds Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-bold text-[10px] text-gray-500 uppercase tracking-widest italic leading-relaxed">
              <div className="col-span-1 sm:col-span-2 mb-2">
                <Link to="/leeds" className="text-gray-900 font-black text-xs hover:text-red-600">Leeds Hub Home</Link>
              </div>
              {leedsAreas.map(area => (
                <div key={area.id} className="list-none">
                  <Link to={`/leeds/${area.id}`} className="hover:text-red-600 transition-colors block">
                    Automatic Lessons in {area.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
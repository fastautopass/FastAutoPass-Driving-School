
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, TRUST_LINKS, ALL_LOCATIONS } from '../constants';

import AreaFinder from './AreaFinder';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t-8 border-red-600">
      {/* SECTION 1: AREA FINDER SECTION (Top of footer region) */}
      <div className="bg-white/[0.02] py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <AreaFinder />
        </div>
      </div>

      {/* SECTION 2: PRIMARY FOOTER NAVIGATION (Below Area Finder) */}
      <div className="pt-12 pb-6 lg:pt-16 lg:pb-8 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* COLUMN 1: Brand & Bio */}
            <div className="lg:col-span-1">
              <p className="text-gray-500 text-sm font-medium leading-relaxed italic mb-6">
                FastAutoPass is a local automatic driving school helping learners across Bradford and Leeds. We focus on simple, structured lessons that build real confidence on the road.
              </p>
              <div className="flex items-center space-x-4">
                <a href={TRUST_LINKS.google} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Google Reviews</a>
                <span className="text-gray-800">•</span>
                <a href={TRUST_LINKS.trustpilot} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Trustpilot</a>
              </div>
            </div>

            {/* COLUMN 2: Tuition Services */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-red-500 italic">Tuition Services</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-400 uppercase tracking-tight italic">
                <li><Link to="/automatic-driving-lessons" className="hover:text-red-600 transition-colors">Automatic Lessons</Link></li>
                <li><Link to="/manual-driving-lessons" className="hover:text-red-600 transition-colors">Manual Lessons</Link></li>
                <li><Link to="/intensive-driving-courses" className="hover:text-red-600 transition-colors">Intensive Courses</Link></li>
                <li><Link to="/mock-driving-tests" className="hover:text-red-600 transition-colors">Mock Driving Tests</Link></li>
                <li><Link to="/refresher-lessons" className="hover:text-red-600 transition-colors">Refresher Lessons</Link></li>
                <li><Link to="/pass-plus" className="hover:text-red-600 transition-colors">Pass Plus Courses</Link></li>
                <li><Link to="/motorway-lessons" className="hover:text-red-600 transition-colors">Motorway Lessons</Link></li>
              </ul>
            </div>

            {/* COLUMN 3: Company */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-red-500 italic">Company</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-400 uppercase tracking-tight italic">
                <li><Link to="/about-us" className="hover:text-red-600 transition-colors">About Us</Link></li>
                <li><Link to="/our-instructors" className="hover:text-red-600 transition-colors">Female Driving Instructors</Link></li>
                <li><Link to="/careers" className="hover:text-red-600 transition-colors">Become a Driving Instructor with FastAutoPass</Link></li>
                <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* COLUMN 4: Get In Touch */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-red-500 italic">Get In Touch</h4>
              <div className="space-y-6">
                <a href={`tel:07842587200`} className="block">
                  <span className="block text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Call Booking Team</span>
                  <span className="text-2xl font-black italic text-white hover:text-red-600 transition-colors leading-none tracking-tighter">07842 587200</span>
                </a>
                <div className="space-y-2">
                  <a href="mailto:support@fastautopass.co.uk" className="block text-xs font-bold text-gray-400 hover:text-red-600 transition-colors">support@fastautopass.co.uk</a>
                  <p className="text-[10px] font-black uppercase text-gray-600 tracking-widest italic">
                    Or visit our <Link to="/contact" className="text-red-600 hover:underline">Contact Us page</Link> to send us a message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: LEGAL STRIP (Bottom strip) */}
      <div className="py-4 bg-black/40 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.25em] text-gray-600">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} FastAutoPass Driving School.
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <Link to="/privacy-policy" className="hover:text-red-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-red-600 transition-colors">Terms & Conditions</Link>
              <Link to="/sitemap" className="hover:text-red-600 transition-colors">Sitemap</Link>
              <Link to="/cookie-policy" className="hover:text-red-600 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

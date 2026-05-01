
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const location = useLocation();

  // Close menus on navigation
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setOpenAccordion(null);
  }, [location.pathname]);

  const navData = [
    {
      name: 'Services',
      items: [
        { name: 'Automatic Lessons', path: '/automatic-driving-lessons' },
        { name: 'Manual Lessons', path: '/manual-driving-lessons' },
        { name: 'Intensive Driving Courses', path: '/intensive-driving-courses' },
        { name: 'Refresher Lessons', path: '/refresher-lessons' },
        { name: 'Pass Plus Courses', path: '/pass-plus' },
      ]
    },
    {
      name: 'Test Preparation',
      items: [
        { name: 'Mock Driving Tests', path: '/mock-driving-tests' },
        { name: 'DVSA Test Preparation', path: '/test-preparation' },
        { name: 'Recent Passes', path: '/recent-passes' },
      ]
    },
    {
      name: 'Driving Test Centres',
      items: [
        { name: 'Driving test centres in Bradford & Leeds (HUB)', path: '/driving-test-centres' },
      ]
    },
    {
      name: 'Areas We Cover',
      items: [
        { name: 'Bradford Hub Home', path: '/bradford' },
        { name: 'Leeds Hub Home', path: '/leeds' },
      ]
    },
    {
      name: 'Learn to Drive',
      items: [
        { name: 'Nervous Driver Lessons', path: '/nervous-driver-lessons' },
        { name: 'How many driving lessons do I need to pass?', path: '/how-many-driving-lessons-do-i-need' },
        { name: 'What Happens in a Driving Lesson?', path: '/what-happens-in-a-driving-lesson' },
        { name: 'Intensive Courses: Are They Worth It?', path: '/intensive-driving-courses-are-they-worth-it' },
        { name: 'Automatic vs Manual', path: '/automatic-vs-manual-driving-lessons' }
      ]
    }
  ];

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <header className="container mx-auto px-4 h-20 lg:h-24 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <Link to="/" className="flex items-center group shrink-0">
          <img 
            src="https://fastautopass.co.uk/wp-content/uploads/2026/04/FastAutoPass-Driving-School-Logo-1.jpeg" 
            alt="FastAutoPass Driving School"
            className="h-[58px] md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* CENTRE: Desktop Main Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 xl:space-x-4">
          {navData.map((category) => (
            <div 
              key={category.name} 
              className="relative group h-20 lg:h-24 flex items-center"
              onMouseEnter={() => setActiveDropdown(category.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200 hover:text-red-600 ${activeDropdown === category.name ? 'text-red-600' : 'text-[#001A33]'}`}
              >
                {category.name}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === category.name ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === category.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[calc(100%-1px)] left-0 w-72 bg-white shadow-2xl rounded-b-2xl border border-gray-100 overflow-hidden py-3"
                  >
                    <div className="flex flex-col">
                      {category.items.map((item) => (
                        <Link 
                          key={item.name} 
                          to={item.path} 
                          className="px-6 py-3.5 text-[13px] font-bold text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-red-600 flex items-center justify-between group/item"
                        >
                          {item.name}
                          <span className="text-red-600 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">→</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* RIGHT: Desktop - Empty (Mobile Hamburger only) */}
        <div className="flex items-center">
          <button 
            id="mobile-menu-toggle"
            className="lg:hidden text-[#001A33] p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="lg:hidden bg-white border-t border-gray-50 overflow-hidden shadow-2xl"
          >
            <div className="container mx-auto px-4 py-8">
              <div id="mobile-accordion" className="space-y-2">
                {navData.map((category) => (
                  <div key={category.name} className="border-b border-gray-50 last:border-0">
                    <button 
                      className="w-full flex items-center justify-between py-4 text-left group"
                      onClick={() => setOpenAccordion(openAccordion === category.name ? null : category.name)}
                    >
                      <span className={`text-lg font-black uppercase italic tracking-tight transition-colors ${openAccordion === category.name ? 'text-red-600' : 'text-[#001A33]'}`}>
                        {category.name}
                      </span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openAccordion === category.name ? 'rotate-180 text-red-600' : 'text-gray-400'}`} />
                    </button>
                    
                    <AnimatePresence>
                      {openAccordion === category.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-gray-50/50 rounded-2xl mb-2"
                        >
                          <div className="flex flex-col p-2">
                            {category.items.map((item) => (
                              <Link 
                                key={item.name} 
                                to={item.path} 
                                className="px-4 py-3 text-sm font-bold text-gray-500 hover:text-red-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Menu Bottom Link */}
              <div className="mt-8 pt-8 border-t border-gray-100 flex justify-center">
                <Link 
                  to="/contact" 
                  className="text-gray-900 font-black uppercase italic tracking-widest text-sm hover:text-red-600 transition-colors flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us <span className="text-red-600">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import { TRUST_LINKS } from '../constants';

const FloatingReviews: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-24 lg:bottom-8 left-0 lg:left-8 z-[90] flex flex-col items-start lg:space-y-3 animate-fadeIn w-full lg:w-auto px-4 lg:px-0 pointer-events-none">
      <div className="relative flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-3 pointer-events-auto">
        {/* Mobile Dismiss Button */}
        <button 
          onClick={() => setIsDismissed(true)}
          className="lg:hidden absolute -top-3 -right-1 w-6 h-6 bg-white border border-gray-100 shadow-md rounded-full flex items-center justify-center text-gray-500 hover:text-red-600 transition-colors z-10"
          aria-label="Dismiss reviews"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Google Review Badge */}
        <a 
          href={TRUST_LINKS.google}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white p-1.5 lg:p-2 pr-3 lg:pr-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
        >
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-lg flex items-center justify-center mr-2 lg:mr-3 shadow-sm border border-gray-50">
            <svg className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
          <div className="hidden sm:block lg:block">
            <div className="flex text-[#FBBC05] mb-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-2.5 h-2.5 lg:w-3 lg:h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-gray-900 leading-none">5★ Google</p>
          </div>
          <span className="sm:hidden text-[10px] font-black uppercase tracking-widest text-gray-900 ml-1">5★</span>
        </a>
  
        {/* Trustpilot Review Badge */}
        <a 
          href={TRUST_LINKS.trustpilot}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white p-1.5 lg:p-2 pr-3 lg:pr-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
        >
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#00b67a] rounded-lg flex items-center justify-center mr-2 lg:mr-3 shadow-sm">
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.954 9.58l-8.664-.001L12.59.252a.31.31 0 00-.58 0L9.31 9.579.646 9.58a.31.31 0 00-.182.558l7.01 5.093-2.677 8.24a.31.31 0 00.477.347l7.01-5.093 7.01 5.093a.31.31 0 00.477-.347l-2.677-8.24 7.01-5.093a.31.31 0 00-.182-.558z"/>
            </svg>
          </div>
          <div className="hidden sm:block lg:block">
            <div className="flex space-x-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-[#00b67a] flex items-center justify-center">
                  <svg className="w-1.5 h-1.5 lg:w-2 lg:h-2 text-white fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
              ))}
            </div>
            <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-gray-900 leading-none">Trustpilot</p>
          </div>
          <span className="sm:hidden text-[10px] font-black uppercase tracking-widest text-gray-900 ml-1">Trust</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingReviews;

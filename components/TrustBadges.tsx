
import React from 'react';
import { TRUST_LINKS } from '../constants';

interface TrustBadgesProps {
  centered?: boolean;
  dark?: boolean;
  minimal?: boolean;
  className?: string;
}

const TrustBadges: React.FC<TrustBadgesProps> = ({ centered, dark, minimal, className = "" }) => {
  const alignmentClasses = centered 
    ? "justify-center mx-auto" 
    : "justify-center md:justify-start mx-auto md:mx-0 text-center md:text-left";
  
  const containerClasses = `flex flex-wrap items-center gap-2 md:gap-4 ${alignmentClasses} max-w-fit mt-4 md:mt-0 ${className}`;

  if (minimal) {
    return (
      <div className={`${containerClasses} text-[11px] font-black uppercase tracking-widest`}>
        <a href={TRUST_LINKS.google} target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-1.5 ${dark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-red-600'} transition-colors`}>
          <span className="text-yellow-400">⭐</span>
          <span>5-Star Google Reviews</span>
        </a>
        <span className={`${dark ? 'text-white/20' : 'text-gray-200'} hidden sm:block`}>|</span>
        <a href={TRUST_LINKS.trustpilot} target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-1.5 ${dark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-[#00b67a]'} transition-colors`}>
          <svg className="w-3 h-3 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.002 0L14.77 8.52h8.962l-7.25 5.267 2.768 8.52-7.25-5.267-7.25 5.267 2.768-8.52-7.25-5.267h8.962z"/></svg>
          <span>Excellent on Trustpilot</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-4 md:gap-6 ${alignmentClasses} mt-4 md:mt-0 ${className}`}>
      <a 
        href={TRUST_LINKS.google}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center space-x-2 p-3 rounded-lg border transition-all hover:scale-105 ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="w-5" />
        <div className="flex flex-col">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
          <span className={`text-[10px] font-bold ${dark ? 'text-gray-400' : 'text-gray-600'}`}>⭐ 5-Star Google Reviews</span>
        </div>
      </a>

      <a 
        href={TRUST_LINKS.trustpilot}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center space-x-2 p-3 rounded-lg border transition-all hover:scale-105 ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}
      >
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.002 0L14.77 8.52h8.962l-7.25 5.267 2.768 8.52-7.25-5.267-7.25 5.267 2.768-8.52-7.25-5.267h8.962z"/></svg>
        <div className="flex flex-col">
          <span className={`text-[11px] font-black ${dark ? 'text-white' : 'text-gray-900'}`}>Trustpilot</span>
          <span className={`text-[10px] font-bold ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Excellent 4.9/5</span>
        </div>
      </a>
    </div>
  );
};

export default TrustBadges;

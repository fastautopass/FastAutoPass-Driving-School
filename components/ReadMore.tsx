
import React, { useState } from 'react';

interface ReadMoreProps {
  children: React.ReactNode;
  maxLines?: number;
  buttonText?: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ children, maxLines = 3, buttonText = "Read more" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-[150px] opacity-90'}`}
      >
        {children}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-red-600 font-black uppercase italic tracking-widest text-xs hover:text-red-700 transition-colors flex items-center"
      >
        {isExpanded ? 'Show less' : buttonText}
        <svg 
          className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default ReadMore;


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ALL_LOCATIONS } from '../constants';

const AreaFinder: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof ALL_LOCATIONS>([]);
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Popular areas (6 Bradford, 6 Leeds)
  const popularBradford = [
    { name: 'Shipley', id: 'shipley', city: 'bradford' },
    { name: 'Manningham', id: 'manningham', city: 'bradford' },
    { name: 'Wibsey', id: 'wibsey', city: 'bradford' },
    { name: 'Heaton', id: 'heaton', city: 'bradford' },
    { name: 'Eccleshill', id: 'eccleshill', city: 'bradford' },
    { name: 'Thornton', id: 'thornton', city: 'bradford' },
  ];

  const popularLeeds = [
    { name: 'Horsforth', id: 'horsforth', city: 'leeds' },
    { name: 'Headingley', id: 'headingley', city: 'leeds' },
    { name: 'Pudsey', id: 'pudsey-leeds', city: 'leeds' },
    { name: 'Bramley', id: 'bramley', city: 'leeds' },
    { name: 'Leeds City Centre', id: 'leeds-city-centre', city: 'leeds' },
    { name: 'Armley', id: 'armley', city: 'leeds' },
  ];

  useEffect(() => {
    if (query.length > 1) {
      const queryLower = query.toLowerCase().trim();
      
      const filtered = ALL_LOCATIONS.filter(area => {
        const nameMatch = area.name.toLowerCase().includes(queryLower);
        const postcodeMatch = area.postcode?.toLowerCase().includes(queryLower);
        const keywordMatch = area.searchKeywords?.toLowerCase().includes(queryLower);
        
        return nameMatch || postcodeMatch || keywordMatch;
      });

      // Sort results to prioritize better matches
      const sorted = filtered.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        const aPost = a.postcode?.toLowerCase() || '';
        const bPost = b.postcode?.toLowerCase() || '';

        // 1. Exact name match
        if (aName === queryLower && bName !== queryLower) return -1;
        if (bName === queryLower && aName !== queryLower) return 1;

        // 2. Exact postcode match
        if (aPost === queryLower && bPost !== queryLower) return -1;
        if (bPost === queryLower && aPost !== queryLower) return 1;

        // 3. Name starts with
        if (aName.startsWith(queryLower) && !bName.startsWith(queryLower)) return -1;
        if (bName.startsWith(queryLower) && !aName.startsWith(queryLower)) return 1;

        // 4. Postcode starts with
        if (aPost.startsWith(queryLower) && !bPost.startsWith(queryLower)) return -1;
        if (bPost.startsWith(queryLower) && !aPost.startsWith(queryLower)) return 1;

        return 0;
      });

      setResults(sorted.slice(0, 10));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef}>
      <div className="text-center mb-10">
        <h4 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter text-white mb-2">
          Find your area in <span className="text-red-600">Bradford & Leeds</span>
        </h4>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 italic">
          Automatic lessons only • DVSA-focused • Bradford & Leeds
        </p>
      </div>

      <div className="max-w-2xl mx-auto relative mb-10">
        <div className="relative group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your area or postcode (e.g., Shipley, BD3, LS6)"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white font-bold italic focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-gray-600"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-red-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Search Results Dropdown */}
        {showResults && (
          <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {results.length > 0 ? (
              <div className="py-2">
                {results.map((area) => (
                  <Link
                    key={area.id}
                    to={`/${area.city}/${area.id}`}
                    onClick={() => setShowResults(false)}
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 group"
                  >
                    <div className="flex flex-col">
                      <span className="font-black text-gray-900 uppercase italic tracking-tight group-hover:text-red-600 transition-colors">{area.name}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{area.city}</span>
                    </div>
                    <span className="text-xs font-black text-red-600 uppercase italic tracking-widest">{area.postcode}</span>
                  </Link>
                ))}
                <div className="bg-gray-50 p-4 text-center">
                  <Link to="/sitemap" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors">
                    View all areas in our sitemap →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic mb-4">No results found for "{query}"</p>
                <Link to="/sitemap" className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-black uppercase italic tracking-widest text-[10px] hover:bg-red-700 transition-all">
                  View All Areas
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Popular Areas Chips */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[...popularBradford, ...popularLeeds].map((area) => (
            <Link
              key={area.id}
              to={`/${area.city}/${area.id}`}
              className="bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-red-600/10 px-5 py-2.5 rounded-full text-[11px] font-black uppercase italic tracking-widest text-gray-400 hover:text-white transition-all"
            >
              {area.name}
            </Link>
          ))}
        </div>

        {/* Hub Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <Link to="/bradford" className="group flex items-center space-x-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-red-600 transition-colors italic">View all Bradford areas</span>
            <div className="w-8 h-px bg-white/10 group-hover:bg-red-600 transition-colors"></div>
          </Link>
          <Link to="/leeds" className="group flex items-center space-x-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-red-600 transition-colors italic">View all Leeds areas</span>
            <div className="w-8 h-px bg-white/10 group-hover:bg-red-600 transition-colors"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AreaFinder;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbsProps {
  city?: string;
  area?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ city, area }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="container mx-auto px-4 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
      <div className="flex items-center space-x-2">
        <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
        
        {/* Careers Hierarchy for ADI Pages */}
        {(path.includes('adi-part') || path === '/careers') && (
          <>
            <span className="text-gray-300">/</span>
            {path === '/careers' ? (
              <span className="text-gray-600">Careers</span>
            ) : (
              <Link to="/careers" className="hover:text-red-600 transition-colors">Careers</Link>
            )}
          </>
        )}

        {city && (
          <>
            <span className="text-gray-300">/</span>
            <Link 
              to={city.toLowerCase() === 'bradford' ? '/bradford' : `/${city.toLowerCase()}`} 
              className="hover:text-red-600 transition-colors capitalize"
            >
              {city}
            </Link>
          </>
        )}
        {area && (
          <>
            <span className="text-gray-300">/</span>
            <span className="text-gray-600">{area}</span>
          </>
        )}

        {/* Dynamic Fallback for Service Pages that don't use props */}
        {!city && !area && path !== '/' && path !== '/careers' && (
          <>
            <span className="text-gray-300">/</span>
            <span className="text-gray-600">
              {path.replace('/', '').replace(/-/g, ' ')}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Breadcrumbs;

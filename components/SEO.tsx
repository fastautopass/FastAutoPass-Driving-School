import React, { createContext, useContext, useEffect } from 'react';

export interface SEOData {
  title?: string;
  description?: string;
  canonical?: string;
}

export const SEOContext = createContext<{ setSEO: (data: SEOData) => void }>({
  setSEO: () => {}
});

export const SEO: React.FC<SEOData> = ({ title, description, canonical }) => {
  const { setSEO } = useContext(SEOContext);

  // During SSR, this will update the captured SEO data
  if (typeof window === 'undefined') {
    setSEO({ title, description, canonical });
  }

  useEffect(() => {
    if (title) document.title = title;
    
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);

  return null;
};

export default SEO;

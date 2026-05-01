import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent, AppStyle, ScrollToTop } from './App';
import { SEOContext, SEOData } from './components/SEO';

export function render(url: string) {
  let seoData: SEOData = {};
  const setSEO = (data: SEOData) => {
    seoData = { ...seoData, ...data };
  };

  const html = renderToString(
    <React.StrictMode>
      <SEOContext.Provider value={{ setSEO }}>
        <StaticRouter location={url}>
          <ScrollToTop />
          <AppStyle />
          <AppContent />
        </StaticRouter>
      </SEOContext.Provider>
    </React.StrictMode>
  );
  
  return { html, seoData };
}

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent, AppStyle, ScrollToTop } from './App';

export function render(url: string) {
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <ScrollToTop />
        <AppStyle />
        <AppContent />
      </StaticRouter>
    </React.StrictMode>
  );
  return { html };
}

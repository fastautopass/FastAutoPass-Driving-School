
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

hydrateRoot(
  rootElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

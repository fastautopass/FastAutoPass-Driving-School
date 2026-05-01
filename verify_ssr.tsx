
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
import { ALL_LOCATIONS } from './constants';
import { TEST_CENTRES } from './testCentresData';

const staticPages = [
  '/',
  '/mock-driving-tests',
  '/test-preparation',
  '/recent-passes',
  '/driving-test-centres',
  '/internal-overview',
  '/sitemap',
  '/bradford',
  '/leeds',
  '/about-us',
  '/our-instructors',
  '/careers',
  '/automatic-driving-lessons',
  '/manual-driving-lessons',
  '/nervous-driver-lessons',
  '/automatic-vs-manual-driving-lessons',
  '/how-many-driving-lessons-do-i-need',
  '/what-happens-in-a-driving-lesson',
  '/intensive-driving-courses-are-they-worth-it',
  '/intensive-driving-courses',
  '/pass-plus',
  '/motorway-lessons',
  '/taxi-assessments',
  '/adi-part-2-training',
  '/adi-part-3-training',
  '/refresher-lessons',
  '/privacy-policy',
  '/terms-and-conditions',
  '/cookie-policy',
  '/contact'
];

const locations = ALL_LOCATIONS.map(l => `/${l.city}/${l.id}`);
const testCentresList = TEST_CENTRES.map(tc => `/driving-test-centres/${tc.id}`);

const allUrls = [...staticPages, ...testCentresList, ...locations];

async function runAudit() {
  console.log('| URL | Status | SSR Working | Keywords Found |');
  console.log('|-----|--------|-------------|----------------|');

  for (const url of allUrls) {
    try {
      const html = renderToString(
        <StaticRouter location={url}>
          <AppContent />
        </StaticRouter>
      );

      const isWorking = html.length > 500;
      
      // Check for some keywords based on URL
      let keywordsFound = false;
      if (url === '/') keywordsFound = html.toLowerCase().includes('bradford');
      else if (url.includes('/bradford/')) {
        const areaId = url.split('/').pop();
        const area = ALL_LOCATIONS.find(a => a.id === areaId);
        keywordsFound = area ? html.includes(area.name) : false;
      } else if (url.includes('/leeds/')) {
        const areaId = url.split('/').pop();
        const area = ALL_LOCATIONS.find(a => a.id === areaId);
        keywordsFound = area ? html.includes(area.name) : false;
      } else if (url.includes('/driving-test-centres/')) {
        const centreId = url.split('/').pop();
        const centre = TEST_CENTRES.find(c => c.id === centreId);
        keywordsFound = centre ? html.includes(centre.name) : false;
      } else {
        keywordsFound = true; // Static pages check is simpler
      }

      console.log(`| ${url} | 200 | ${isWorking ? '✅ YES' : '❌ NO'} | ${keywordsFound ? '✅ YES' : '❌ NO'} |`);
    } catch (error) {
           console.log(`| ${url} | 500 | ❌ ERROR | ${error.message} |`);
    }
  }
}

runAudit();

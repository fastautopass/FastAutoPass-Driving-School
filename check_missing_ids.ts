
import { ALL_LOCATIONS } from './constants';
import fs from 'fs';

const sitemap = fs.readFileSync('./public/sitemap.xml', 'utf-8');
const urls = [...sitemap.matchAll(/<loc>https:\/\/fastautopass\.co\.uk\/([^<]+)<\/loc>/g)].map(m => m[1]);

console.log('Total URLs in sitemap:', urls.length);

const missing = [];
urls.forEach(urlPath => {
  if (urlPath === '' || urlPath === 'automatic-driving-lessons' || urlPath === 'manual-driving-lessons' || 
      urlPath === 'intensive-driving-courses' || urlPath === 'pass-plus' || urlPath === 'motorway-lessons' || 
      urlPath === 'refresher-lessons' || urlPath === 'mock-driving-tests' || urlPath === 'test-preparation' || 
      urlPath === 'taxi-assessments' || urlPath === 'nervous-driver-lessons' || urlPath === 'adi-part-2-training' || 
      urlPath === 'adi-part-3-training' || urlPath === 'instructor-training' || urlPath === 'automatic-vs-manual-driving-lessons' || 
      urlPath === 'how-many-driving-lessons-do-i-need' || urlPath === 'what-happens-in-a-driving-lesson' || 
      urlPath === 'intensive-driving-courses-are-they-worth-it' || urlPath === 'recent-passes' || 
      urlPath === 'bradford' || urlPath === 'leeds' || urlPath.startsWith('driving-test-centres') || 
      urlPath === 'contact' || urlPath === 'about-us' || urlPath === 'careers' || urlPath === 'sitemap' || 
      urlPath === 'privacy-policy' || urlPath === 'terms-and-conditions' || urlPath === 'cookie-policy') {
    return;
  }

  const [city, areaId] = urlPath.split('/');
  if (!areaId) return;

  const area = ALL_LOCATIONS.find(a => 
    a.id === areaId && a.city === city.toLowerCase()
  );

  if (!area) {
    missing.push(urlPath);
  }
});

console.log('Missing area IDs in constants.tsx:', JSON.stringify(missing, null, 2));

import { ALL_LOCATIONS } from './constants';
import { TEST_CENTRES } from './testCentresData';

const locations = ALL_LOCATIONS.map(l => `/${l.city}/${l.id}`);
const testCentresList = TEST_CENTRES.map(tc => `/driving-test-centres/${tc.id}`);

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

console.log('--- STATIC PAGES ---');
staticPages.forEach(p => console.log(p));

console.log('\n--- TEST CENTRE PAGES ---');
testCentresList.forEach(p => console.log(p));

console.log('\n--- LOCATION PAGES ---');
locations.forEach(p => console.log(p));

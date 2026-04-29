
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';
import FloatingReviews from './components/FloatingReviews';
import Home from './components/Home';
import AreaPage from './components/AreaPage';
import ShipleyPage from './components/ShipleyPage';
import BradfordAreaPage from './components/BradfordAreaPage';
import LeedsAreaPage from './components/LeedsAreaPage';
import MockTestsPage from './components/MockTestsPage';
import TestPrepPage from './components/TestPrepPage';
import RecentPassesPage from './components/RecentPassesPage';
import RefresherLessonsPage from './components/RefresherLessonsPage';
import FemaleInstructorsPage from './components/FemaleInstructorsPage';
import ContactPage from './components/ContactPage';
import PlaceholderPage from './components/PlaceholderPage';
import BradfordHub from './components/BradfordHub';
import LeedsHub from './components/LeedsHub';
import Sitemap from './components/Sitemap';
import TestCentreHub from './components/TestCentreHub';
import TestCentrePage from './components/TestCentrePage';
import InternalOverview from './components/InternalOverview';
import AutomaticLessonsPage from './components/AutomaticLessonsPage';
import IntensiveCoursesPage from './components/IntensiveCoursesPage';
import PassPlusPage from './components/PassPlusPage';
import MotorwayLessonsPage from './components/MotorwayLessonsPage';
import TaxiAssessmentsPage from './components/TaxiAssessmentsPage';
import AdiPart2Page from './components/AdiPart2Page';
import AdiPart3Page from './components/AdiPart3Page';
import CareersPage from './components/CareersPage';
import AboutUsPage from './components/AboutUsPage';
import AutomaticVsManualPage from './components/AutomaticVsManualPage';
import ManualLessonsPage from './components/ManualLessonsPage';
import NervousDriverLessonsPage from './components/NervousDriverLessonsPage';
import DrivingLessonsNeededPage from './components/DrivingLessonsNeededPage';
import FirstDrivingLessonGuidePage from './components/FirstDrivingLessonGuidePage';
import IntensiveDrivingCoursesWorthItPage from './components/IntensiveDrivingCoursesWorthItPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import CookiePolicyPage from './components/CookiePolicyPage';
import { ALL_LOCATIONS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AreaRouteWrapper = () => {
  const { city, areaId } = useParams();
  
  const area = ALL_LOCATIONS.find(a => 
    a.id === areaId && (!city || a.city === city.toLowerCase())
  );

  if (!area) return <PlaceholderPage title="Location Not Found" description="The requested location page is currently being updated." />;

  if (areaId === 'shipley') {
    return <ShipleyPage area={area} />;
  }

  if (area.city === 'bradford') {
    return <BradfordAreaPage area={area} />;
  }

  if (area.city === 'leeds') {
    return <LeedsAreaPage area={area} />;
  }

  return <AreaPage area={area} />;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`flex flex-col min-h-screen ${isHome ? 'is-home' : 'is-internal'}`}>
      <Header />
      
      <main className="flex-grow pb-20 lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mock-driving-tests" element={<MockTestsPage />} />
          <Route path="/test-preparation" element={<TestPrepPage />} />
          <Route path="/recent-passes" element={<RecentPassesPage />} />
          <Route path="/driving-test-centres" element={<TestCentreHub />} />
          <Route path="/driving-test-centres/harehills-driving-test-centre" element={<Navigate to="/driving-test-centres/leeds-fearnville-driving-test-centre" replace />} />
          <Route path="/driving-test-centres/:centreId" element={<TestCentrePage />} />
          <Route path="/internal-overview" element={<InternalOverview />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          <Route path="/bradford" element={<BradfordHub />} />
          <Route path="/bradford/:areaId" element={<AreaRouteWrapper />} />
          
          <Route path="/leeds" element={<LeedsHub />} />
          <Route path="/leeds/:areaId" element={<AreaRouteWrapper />} />

          <Route path="/prices" element={<Navigate to="/contact" replace />} />

          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-instructors" element={<FemaleInstructorsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/automatic-driving-lessons" element={<AutomaticLessonsPage />} />
          <Route path="/manual-driving-lessons" element={<ManualLessonsPage />} />
          <Route path="/nervous-driver-lessons" element={<NervousDriverLessonsPage />} />
          <Route path="/automatic-vs-manual-driving-lessons" element={<AutomaticVsManualPage />} />
          <Route path="/how-many-driving-lessons-do-i-need" element={<DrivingLessonsNeededPage />} />
          <Route path="/what-happens-in-a-driving-lesson" element={<FirstDrivingLessonGuidePage />} />
          <Route path="/intensive-driving-courses-are-they-worth-it" element={<IntensiveDrivingCoursesWorthItPage />} />
          <Route path="/intensive-driving-courses" element={<IntensiveCoursesPage />} />
          <Route path="/pass-plus" element={<PassPlusPage />} />
          <Route path="/motorway-lessons" element={<MotorwayLessonsPage />} />
          <Route path="/taxi-assessments" element={<TaxiAssessmentsPage />} />
          <Route path="/adi-part-2-training" element={<AdiPart2Page />} />
          <Route path="/adi-part-3-training" element={<AdiPart3Page />} />
          <Route path="/refresher-lessons" element={<RefresherLessonsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
      <StickyActions />
      <FloatingReviews />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <style>{`
        /* Homepage Spacing (Tight & Refined) */
        .is-home section {
          padding-top: 1.5rem !important;
          padding-bottom: 1.5rem !important;
        }
        @media (min-width: 768px) {
          .is-home section {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
        }
        @media (min-width: 1024px) {
          .is-home section {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          /* Safe Areas for Floating UI */
          main {
            padding-left: 10rem;
            padding-right: 10rem;
          }
        }
        
        /* Internal Page Spacing (Restored & Balanced) */
        .is-internal section {
          padding-top: 4rem !important; /* 64px Mobile */
          padding-bottom: 4rem !important;
        }
        @media (min-width: 1024px) {
          .is-internal section {
            padding-top: 6rem !important; /* 96px Desktop */
            padding-bottom: 6rem !important;
          }
        }

        /* Mock Driving Tests Page Specific Spacing (Controlled Tightening) */
        .mock-tests-page section {
          padding-top: 2rem !important;
          padding-bottom: 2rem !important;
        }
        .mock-tests-page .hero-impact {
          padding-top: 3rem !important;
          padding-bottom: 3rem !important;
        }
        @media (min-width: 1024px) {
          .mock-tests-page section {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
          .mock-tests-page .hero-impact {
            padding-top: 5rem !important;
            padding-bottom: 5rem !important;
          }
        }
        /* Tighten inner margins on Mock Tests page */
        .mock-tests-page .mb-16, 
        .mock-tests-page .mb-20, 
        .mock-tests-page .mb-12,
        .mock-tests-page .mb-8 {
          margin-bottom: 1.5rem !important;
        }
        @media (min-width: 1024px) {
          .mock-tests-page .mb-16, 
          .mock-tests-page .mb-20, 
          .mock-tests-page .mb-12,
          .mock-tests-page .mb-8 {
            margin-bottom: 2.5rem !important;
          }
        }

        /* Contact Page Specific Spacing (Strong Tightening) */
        .contact-page section {
          padding-top: 3rem !important;
          padding-bottom: 3rem !important;
        }
        .contact-page section.py-24 {
          padding-top: 3rem !important;
          padding-bottom: 3rem !important;
        }
        .contact-page .relative.bg-\[\#001A33\] {
          padding-top: 4rem !important;
          padding-bottom: 4rem !important;
        }
        @media (min-width: 1024px) {
          .contact-page section {
            padding-top: 5rem !important;
            padding-bottom: 5rem !important;
          }
          .contact-page .relative.bg-\[\#001A33\] {
            padding-top: 6rem !important;
            padding-bottom: 6rem !important;
          }
        }
        
        /* Tighten inner elements on Contact page */
        .contact-page .mb-24,
        .contact-page .mb-12,
        .contact-page .mb-8 {
          margin-bottom: 1.5rem !important;
        }
        .contact-page .mb-6 {
          margin-bottom: 1rem !important;
        }
        .contact-page .p-10 {
          padding: 1.5rem !important;
        }
        .contact-page .gap-12 {
          gap: 1.5rem !important;
        }
        .contact-page .w-20.h-20.mb-8 {
          margin-bottom: 1rem !important;
          width: 4rem !important;
          height: 4rem !important;
        }
        .contact-page .w-20.h-20 svg {
          width: 2rem !important;
          height: 2rem !important;
        }
        
        @media (min-width: 1024px) {
          .contact-page .mb-24,
          .contact-page .mb-12,
          .contact-page .mb-8 {
            margin-bottom: 2.5rem !important;
          }
          .contact-page .p-10 {
            padding: 2.5rem !important;
          }
          .contact-page .gap-12 {
            gap: 3rem !important;
          }
        }

        .automatic-lessons-page .container,
        .manual-lessons-page .container,
        .intensive-courses-page .container,
        .pass-plus-page .container,
        .motorway-lessons-page .container,
        .lessons-needed-page .container,
        .first-lesson-page .container,
        .intensive-worth-it-page .container {
          max-width: 1000px !important;
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }
        @media (min-width: 1280px) {
          .automatic-lessons-page .container,
          .manual-lessons-page .container,
          .intensive-courses-page .container,
          .pass-plus-page .container,
          .motorway-lessons-page .container,
        .lessons-needed-page .container,
        .first-lesson-page .container,
        .intensive-worth-it-page .container {
            max-width: 1100px !important;
          }
        }
        .automatic-lessons-page section,
        .manual-lessons-page section,
        .intensive-courses-page section,
        .pass-plus-page section,
        .motorway-lessons-page section,
        .lessons-needed-page section,
        .first-lesson-page section,
        .intensive-worth-it-page section {
          padding-top: 2rem !important; /* Loosened midpoint */
          padding-bottom: 2rem !important;
        }
        
        .automatic-lessons-page section.py-24,
        .manual-lessons-page section.py-24,
        .intensive-courses-page section.py-24,
        .pass-plus-page section.py-24,
        .motorway-lessons-page section.py-24,
        .automatic-lessons-page section.py-16,
        .manual-lessons-page section.py-16,
        .intensive-courses-page section.py-16,
        .pass-plus-page section.py-16,
        .motorway-lessons-page section.py-16,
        .automatic-lessons-page section.py-12,
        .manual-lessons-page section.py-12,
        .intensive-courses-page section.py-12,
        .pass-plus-page section.py-12,
        .motorway-lessons-page section.py-12,
        .lessons-needed-page section.py-24,
        .first-lesson-page section.py-24,
        .intensive-worth-it-page section.py-24,
        .lessons-needed-page section.py-16,
        .first-lesson-page section.py-16,
        .intensive-worth-it-page section.py-16,
        .lessons-needed-page section.py-12,
        .first-lesson-page section.py-12,
        .intensive-worth-it-page section.py-12 {
          padding-top: 1.5rem !important;
          padding-bottom: 1.5rem !important;
        }

        .automatic-lessons-page section.hero-section,
        .manual-lessons-page section.hero-section,
        .intensive-courses-page section.hero-section,
        .pass-plus-page section.hero-section,
        .motorway-lessons-page section.hero-section,
        .automatic-lessons-page section.relative.bg-gray-900,
        .manual-lessons-page section.relative.bg-gray-900,
        .intensive-courses-page section.relative.bg-gray-900,
        .pass-plus-page section.relative.bg-gray-900,
        .motorway-lessons-page section.relative.bg-gray-900,
        .lessons-needed-page section.relative.bg-gray-900,
        .first-lesson-page section.relative.bg-gray-900,
        .intensive-worth-it-page section.relative.bg-gray-900 {
          padding-top: 2.5rem !important;
          padding-bottom: 2.5rem !important;
        }

        @media (min-width: 1024px) {
          .automatic-lessons-page section,
          .manual-lessons-page section,
          .intensive-courses-page section,
          .pass-plus-page section,
          .motorway-lessons-page section,
          .lessons-needed-page section,
          .first-lesson-page section,
          .intensive-worth-it-page section {
            padding-top: 3.5rem !important; /* Loosened midpoint */
            padding-bottom: 3.5rem !important;
          }
          
          .automatic-lessons-page section.py-24,
          .manual-lessons-page section.py-24,
          .intensive-courses-page section.py-24,
          .pass-plus-page section.py-24,
          .motorway-lessons-page section.py-24,
          .automatic-lessons-page section.py-16,
          .manual-lessons-page section.py-16,
          .intensive-courses-page section.py-16,
          .pass-plus-page section.py-16,
          .motorway-lessons-page section.py-16,
          .automatic-lessons-page section.py-12,
          .manual-lessons-page section.py-12,
          .intensive-courses-page section.py-12,
          .pass-plus-page section.py-12,
          .motorway-lessons-page section.py-12,
          .lessons-needed-page section.py-24,
          .first-lesson-page section.py-24,
          .intensive-worth-it-page section.py-24,
          .lessons-needed-page section.py-16,
          .first-lesson-page section.py-16,
          .intensive-worth-it-page section.py-16,
          .lessons-needed-page section.py-12,
          .first-lesson-page section.py-12,
          .intensive-worth-it-page section.py-12 {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }

          .automatic-lessons-page section.hero-section,
          .manual-lessons-page section.hero-section,
          .intensive-courses-page section.hero-section,
          .pass-plus-page section.hero-section,
          .motorway-lessons-page section.hero-section,
          .automatic-lessons-page section.relative.bg-gray-900,
          .manual-lessons-page section.relative.bg-gray-900,
          .intensive-courses-page section.relative.bg-gray-900,
          .pass-plus-page section.relative.bg-gray-900,
          .motorway-lessons-page section.relative.bg-gray-900,
          .lessons-needed-page section.relative.bg-gray-900,
          .first-lesson-page section.relative.bg-gray-900,
          .intensive-worth-it-page section.relative.bg-gray-900 {
            padding-top: 5rem !important;
            padding-bottom: 5rem !important;
          }
        }

        /* Inner spacing tightening for Service Pages */
        .automatic-lessons-page .mb-24, .manual-lessons-page .mb-24, .intensive-courses-page .mb-24, .pass-plus-page .mb-24, .motorway-lessons-page .mb-24,
        .automatic-lessons-page .mb-20, .manual-lessons-page .mb-20, .intensive-courses-page .mb-20, .pass-plus-page .mb-20, .motorway-lessons-page .mb-20,
        .automatic-lessons-page .mb-16, .manual-lessons-page .mb-16, .intensive-courses-page .mb-16, .pass-plus-page .mb-16, .motorway-lessons-page .mb-16,
        .automatic-lessons-page .mb-12, .manual-lessons-page .mb-12, .intensive-courses-page .mb-12, .pass-plus-page .mb-12, .motorway-lessons-page .mb-12,
        .automatic-lessons-page .mb-10, .manual-lessons-page .mb-10, .intensive-courses-page .mb-10, .pass-plus-page .mb-10, .motorway-lessons-page .mb-10,
        .automatic-lessons-page .mb-8, .manual-lessons-page .mb-8, .intensive-courses-page .mb-8, .pass-plus-page .mb-8, .motorway-lessons-page .mb-8,
        .automatic-lessons-page .mb-6, .manual-lessons-page .mb-6, .intensive-courses-page .mb-6, .pass-plus-page .mb-6, .motorway-lessons-page .mb-6,
        .automatic-lessons-page .mb-5, .manual-lessons-page .mb-5, .intensive-courses-page .mb-5, .pass-plus-page .mb-5, .motorway-lessons-page .mb-5,
        .automatic-lessons-page .mb-4, .manual-lessons-page .mb-4, .intensive-courses-page .mb-4, .pass-plus-page .mb-4, .motorway-lessons-page .mb-4,
        .lessons-needed-page .mb-24, .first-lesson-page .mb-24, .intensive-worth-it-page .mb-24,
        .lessons-needed-page .mb-20, .first-lesson-page .mb-20, .intensive-worth-it-page .mb-20,
        .lessons-needed-page .mb-16, .first-lesson-page .mb-16, .intensive-worth-it-page .mb-16,
        .lessons-needed-page .mb-12, .first-lesson-page .mb-12, .intensive-worth-it-page .mb-12,
        .lessons-needed-page .mb-10, .first-lesson-page .mb-10, .intensive-worth-it-page .mb-10,
        .lessons-needed-page .mb-8, .first-lesson-page .mb-8, .intensive-worth-it-page .mb-8,
        .lessons-needed-page .mb-6, .first-lesson-page .mb-6, .intensive-worth-it-page .mb-6,
        .lessons-needed-page .mb-5, .first-lesson-page .mb-5, .intensive-worth-it-page .mb-5,
        .lessons-needed-page .mb-4, .first-lesson-page .mb-4, .intensive-worth-it-page .mb-4,
        .lessons-needed-page .mb-3, .first-lesson-page .mb-3, .intensive-worth-it-page .mb-3,
        .lessons-needed-page .mb-2, .first-lesson-page .mb-2, .intensive-worth-it-page .mb-2,
        .lessons-needed-page .mt-24, .first-lesson-page .mt-24, .intensive-worth-it-page .mt-24,
        .lessons-needed-page .mt-20, .first-lesson-page .mt-20, .intensive-worth-it-page .mt-20,
        .lessons-needed-page .mt-16, .first-lesson-page .mt-16, .intensive-worth-it-page .mt-16,
        .lessons-needed-page .mt-12, .first-lesson-page .mt-12, .intensive-worth-it-page .mt-12,
        .lessons-needed-page .mt-10, .first-lesson-page .mt-10, .intensive-worth-it-page .mt-10,
        .lessons-needed-page .mt-8, .first-lesson-page .mt-8, .intensive-worth-it-page .mt-8,
        .lessons-needed-page .mt-6, .first-lesson-page .mt-6, .intensive-worth-it-page .mt-6,
        .lessons-needed-page .mt-4, .first-lesson-page .mt-4, .intensive-worth-it-page .mt-4,
        .automatic-lessons-page .mb-3, .manual-lessons-page .mb-3, .intensive-courses-page .mb-3, .pass-plus-page .mb-3, .motorway-lessons-page .mb-3,
        .automatic-lessons-page .mb-2, .manual-lessons-page .mb-2, .intensive-courses-page .mb-2, .pass-plus-page .mb-2, .motorway-lessons-page .mb-2,
        .automatic-lessons-page .mt-24, .manual-lessons-page .mt-24, .intensive-courses-page .mt-24, .pass-plus-page .mt-24, .motorway-lessons-page .mt-24,
        .automatic-lessons-page .mt-20, .manual-lessons-page .mt-20, .intensive-courses-page .mt-20, .pass-plus-page .mt-20, .motorway-lessons-page .mt-20,
        .automatic-lessons-page .mt-16, .manual-lessons-page .mt-16, .intensive-courses-page .mt-16, .pass-plus-page .mt-16, .motorway-lessons-page .mt-16,
        .automatic-lessons-page .mt-12, .manual-lessons-page .mt-12, .intensive-courses-page .mt-12, .pass-plus-page .mt-12, .motorway-lessons-page .mt-12,
        .automatic-lessons-page .mt-10, .manual-lessons-page .mt-10, .intensive-courses-page .mt-10, .pass-plus-page .mt-10, .motorway-lessons-page .mt-10,
        .automatic-lessons-page .mt-8, .manual-lessons-page .mt-8, .intensive-courses-page .mt-8, .pass-plus-page .mt-8, .motorway-lessons-page .mt-8,
        .automatic-lessons-page .mt-6, .manual-lessons-page .mt-6, .intensive-courses-page .mt-6, .pass-plus-page .mt-6, .motorway-lessons-page .mt-6,
        .automatic-lessons-page .mt-4, .manual-lessons-page .mt-4, .intensive-courses-page .mt-4, .pass-plus-page .mt-4, .motorway-lessons-page .mt-4 {
          margin-bottom: 1rem !important; /* Loosened midpoint */
          margin-top: 1rem !important;
        }
        
        @media (min-width: 1024px) {
          .automatic-lessons-page .mb-24, .manual-lessons-page .mb-24, .intensive-courses-page .mb-24, .pass-plus-page .mb-24, .motorway-lessons-page .mb-24,
          .automatic-lessons-page .mb-20, .manual-lessons-page .mb-20, .intensive-courses-page .mb-20, .pass-plus-page .mb-20, .motorway-lessons-page .mb-20,
          .automatic-lessons-page .mb-16, .manual-lessons-page .mb-16, .intensive-courses-page .mb-16, .pass-plus-page .mb-16, .motorway-lessons-page .mb-16,
          .automatic-lessons-page .mb-12, .manual-lessons-page .mb-12, .intensive-courses-page .mb-12, .pass-plus-page .mb-12, .motorway-lessons-page .mb-12,
          .automatic-lessons-page .mb-10, .manual-lessons-page .mb-10, .intensive-courses-page .mb-10, .pass-plus-page .mb-10, .motorway-lessons-page .mb-10,
          .automatic-lessons-page .mb-8, .manual-lessons-page .mb-8, .intensive-courses-page .mb-8, .pass-plus-page .mb-8, .motorway-lessons-page .mb-8,
          .automatic-lessons-page .mb-6, .manual-lessons-page .mb-6, .intensive-courses-page .mb-6, .pass-plus-page .mb-6, .motorway-lessons-page .mb-6,
          .automatic-lessons-page .mb-5, .manual-lessons-page .mb-5, .intensive-courses-page .mb-5, .pass-plus-page .mb-5, .motorway-lessons-page .mb-5,
          .automatic-lessons-page .mb-4, .manual-lessons-page .mb-4, .intensive-courses-page .mb-4, .pass-plus-page .mb-4, .motorway-lessons-page .mb-4,
          .lessons-needed-page .mb-24, .first-lesson-page .mb-24, .intensive-worth-it-page .mb-24,
          .lessons-needed-page .mb-20, .first-lesson-page .mb-20, .intensive-worth-it-page .mb-20,
          .lessons-needed-page .mb-16, .first-lesson-page .mb-16, .intensive-worth-it-page .mb-16,
          .lessons-needed-page .mb-12, .first-lesson-page .mb-12, .intensive-worth-it-page .mb-12,
          .lessons-needed-page .mb-10, .first-lesson-page .mb-10, .intensive-worth-it-page .mb-10,
          .lessons-needed-page .mb-8, .first-lesson-page .mb-8, .intensive-worth-it-page .mb-8,
          .lessons-needed-page .mb-6, .first-lesson-page .mb-6, .intensive-worth-it-page .mb-6,
          .lessons-needed-page .mb-5, .first-lesson-page .mb-5, .intensive-worth-it-page .mb-5,
          .lessons-needed-page .mb-4, .first-lesson-page .mb-4, .intensive-worth-it-page .mb-4,
          .lessons-needed-page .mb-3, .first-lesson-page .mb-3, .intensive-worth-it-page .mb-3,
          .lessons-needed-page .mb-2, .first-lesson-page .mb-2, .intensive-worth-it-page .mb-2,
          .lessons-needed-page .mt-24, .first-lesson-page .mt-24, .intensive-worth-it-page .mt-24,
          .lessons-needed-page .mt-20, .first-lesson-page .mt-20, .intensive-worth-it-page .mt-20,
          .lessons-needed-page .mt-16, .first-lesson-page .mt-16, .intensive-worth-it-page .mt-16,
          .lessons-needed-page .mt-12, .first-lesson-page .mt-12, .intensive-worth-it-page .mt-12,
          .lessons-needed-page .mt-10, .first-lesson-page .mt-10, .intensive-worth-it-page .mt-10,
          .lessons-needed-page .mt-8, .first-lesson-page .mt-8, .intensive-worth-it-page .mt-8,
          .lessons-needed-page .mt-6, .first-lesson-page .mt-6, .intensive-worth-it-page .mt-6,
          .lessons-needed-page .mt-4, .first-lesson-page .mt-4, .intensive-worth-it-page .mt-4,
          .automatic-lessons-page .mb-3, .manual-lessons-page .mb-3, .intensive-courses-page .mb-3, .pass-plus-page .mb-3, .motorway-lessons-page .mb-3,
          .automatic-lessons-page .mb-2, .manual-lessons-page .mb-2, .intensive-courses-page .mb-2, .pass-plus-page .mb-2, .motorway-lessons-page .mb-2,
          .automatic-lessons-page .mt-24, .manual-lessons-page .mt-24, .intensive-courses-page .mt-24, .pass-plus-page .mt-24, .motorway-lessons-page .mt-24,
          .automatic-lessons-page .mt-20, .manual-lessons-page .mt-20, .intensive-courses-page .mt-20, .pass-plus-page .mt-20, .motorway-lessons-page .mt-20,
          .automatic-lessons-page .mt-16, .manual-lessons-page .mt-16, .intensive-courses-page .mt-16, .pass-plus-page .mt-16, .motorway-lessons-page .mt-16,
          .automatic-lessons-page .mt-12, .manual-lessons-page .mt-12, .intensive-courses-page .mt-12, .pass-plus-page .mt-12, .motorway-lessons-page .mt-12,
          .automatic-lessons-page .mt-10, .manual-lessons-page .mt-10, .intensive-courses-page .mt-10, .pass-plus-page .mt-10, .motorway-lessons-page .mt-10,
          .automatic-lessons-page .mt-8, .manual-lessons-page .mt-8, .intensive-courses-page .mt-8, .pass-plus-page .mt-8, .motorway-lessons-page .mt-8,
          .automatic-lessons-page .mt-6, .manual-lessons-page .mt-6, .intensive-courses-page .mt-6, .pass-plus-page .mt-6, .motorway-lessons-page .mt-6,
          .automatic-lessons-page .mt-4, .manual-lessons-page .mt-4, .intensive-courses-page .mt-4, .pass-plus-page .mt-4, .motorway-lessons-page .mt-4 {
            margin-bottom: 2rem !important; /* Loosened midpoint */
            margin-top: 2rem !important;
          }
        }

        /* Gap tightening */
        .automatic-lessons-page .gap-16, .manual-lessons-page .gap-16, .intensive-courses-page .gap-16, .pass-plus-page .gap-16, .motorway-lessons-page .gap-16,
        .automatic-lessons-page .gap-12, .manual-lessons-page .gap-12, .intensive-courses-page .gap-12, .pass-plus-page .gap-12, .motorway-lessons-page .gap-12,
        .automatic-lessons-page .gap-10, .manual-lessons-page .gap-10, .intensive-courses-page .gap-10, .pass-plus-page .gap-10, .motorway-lessons-page .gap-10,
        .automatic-lessons-page .gap-8, .manual-lessons-page .gap-8, .intensive-courses-page .gap-8, .pass-plus-page .gap-8, .motorway-lessons-page .gap-8,
        .automatic-lessons-page .gap-6, .manual-lessons-page .gap-6, .intensive-courses-page .gap-6, .pass-plus-page .gap-6, .motorway-lessons-page .gap-6,
        .automatic-lessons-page .gap-4, .manual-lessons-page .gap-4, .intensive-courses-page .gap-4, .pass-plus-page .gap-4, .motorway-lessons-page .gap-4,
        .lessons-needed-page .gap-16, .first-lesson-page .gap-16, .intensive-worth-it-page .gap-16,
        .lessons-needed-page .gap-12, .first-lesson-page .gap-12, .intensive-worth-it-page .gap-12,
        .lessons-needed-page .gap-10, .first-lesson-page .gap-10, .intensive-worth-it-page .gap-10,
        .lessons-needed-page .gap-8, .first-lesson-page .gap-8, .intensive-worth-it-page .gap-8,
        .lessons-needed-page .gap-6, .first-lesson-page .gap-6, .intensive-worth-it-page .gap-6,
        .lessons-needed-page .gap-4, .first-lesson-page .gap-4, .intensive-worth-it-page .gap-4 {
          gap: 0.75rem !important; /* Loosened from 0.375rem */
        }
        @media (min-width: 1024px) {
          .automatic-lessons-page .gap-16, .manual-lessons-page .gap-16, .intensive-courses-page .gap-16, .pass-plus-page .gap-16, .motorway-lessons-page .gap-16,
          .automatic-lessons-page .gap-12, .manual-lessons-page .gap-12, .intensive-courses-page .gap-12, .pass-plus-page .gap-12, .motorway-lessons-page .gap-12,
          .automatic-lessons-page .gap-10, .manual-lessons-page .gap-10, .intensive-courses-page .gap-10, .pass-plus-page .gap-10, .motorway-lessons-page .gap-10,
          .automatic-lessons-page .gap-8, .manual-lessons-page .gap-8, .intensive-courses-page .gap-8, .pass-plus-page .gap-8, .motorway-lessons-page .gap-8,
          .automatic-lessons-page .gap-6, .manual-lessons-page .gap-6, .intensive-courses-page .gap-6, .pass-plus-page .gap-6, .motorway-lessons-page .gap-6,
          .automatic-lessons-page .gap-4, .manual-lessons-page .gap-4, .intensive-courses-page .gap-4, .pass-plus-page .gap-4, .motorway-lessons-page .gap-4,
          .lessons-needed-page .gap-16, .first-lesson-page .gap-16, .intensive-worth-it-page .gap-16,
          .lessons-needed-page .gap-12, .first-lesson-page .gap-12, .intensive-worth-it-page .gap-12,
          .lessons-needed-page .gap-10, .first-lesson-page .gap-10, .intensive-worth-it-page .gap-10,
          .lessons-needed-page .gap-8, .first-lesson-page .gap-8, .intensive-worth-it-page .gap-8,
          .lessons-needed-page .gap-6, .first-lesson-page .gap-6, .intensive-worth-it-page .gap-6,
          .lessons-needed-page .gap-4, .first-lesson-page .gap-4, .intensive-worth-it-page .gap-4 {
            gap: 1.5rem !important; /* Loosened from 0.75rem */
          }
        }


        /* Shared components tightening within the 4 pages */
        .automatic-lessons-page #reviews-section,
        .manual-lessons-page #reviews-section,
        .intensive-courses-page #reviews-section,
        .pass-plus-page #reviews-section,
        .motorway-lessons-page #reviews-section,
        .lessons-needed-page #reviews-section,
        .first-lesson-page #reviews-section,
        .intensive-worth-it-page #reviews-section,
        .automatic-lessons-page .tight-section,
        .manual-lessons-page .tight-section,
        .intensive-courses-page .tight-section,
        .pass-plus-page .tight-section,
        .motorway-lessons-page .tight-section {
          padding-top: 1rem !important; /* Loosened from 0.5rem */
          padding-bottom: 1rem !important;
        }
        
        @media (min-width: 1024px) {
          .automatic-lessons-page #reviews-section,
          .manual-lessons-page #reviews-section,
          .intensive-courses-page #reviews-section,
          .pass-plus-page #reviews-section,
          .motorway-lessons-page #reviews-section,
          .lessons-needed-page #reviews-section,
          .first-lesson-page #reviews-section,
          .intensive-worth-it-page #reviews-section,
          .automatic-lessons-page .tight-section,
          .manual-lessons-page .tight-section,
          .intensive-courses-page .tight-section,
          .pass-plus-page .tight-section,
          .motorway-lessons-page .tight-section {
            padding-top: 2rem !important; /* Loosened from 1rem */
            padding-bottom: 2rem !important;
          }
        }

        /* Specific Review Card Tightening for the 4 Service Pages */
        .automatic-lessons-page #reviews-section .bg-white,
        .manual-lessons-page #reviews-section .bg-white,
        .intensive-courses-page #reviews-section .bg-white,
        .pass-plus-page #reviews-section .bg-white,
        .motorway-lessons-page #reviews-section .bg-white,
        .lessons-needed-page #reviews-section .bg-white,
        .first-lesson-page #reviews-section .bg-white,
        .intensive-worth-it-page #reviews-section .bg-white {
          padding-top: 2rem !important;
          padding-bottom: 2rem !important;
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
        @media (min-width: 1024px) {
          .automatic-lessons-page #reviews-section .bg-white,
          .manual-lessons-page #reviews-section .bg-white,
          .intensive-courses-page #reviews-section .bg-white,
          .pass-plus-page #reviews-section .bg-white,
          .motorway-lessons-page #reviews-section .bg-white {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
            padding-left: 2.5rem !important;
            padding-right: 2.5rem !important;
          }
        }
        .automatic-lessons-page #reviews-section .mb-8,
        .manual-lessons-page #reviews-section .mb-8,
        .intensive-courses-page #reviews-section .mb-8,
        .pass-plus-page #reviews-section .mb-8,
        .motorway-lessons-page #reviews-section .mb-8,
        .lessons-needed-page #reviews-section .mb-8,
        .first-lesson-page #reviews-section .mb-8,
        .intensive-worth-it-page #reviews-section .mb-8 {
          margin-bottom: 1rem !important;
        }
        .automatic-lessons-page #reviews-section .mb-4,
        .manual-lessons-page #reviews-section .mb-4,
        .intensive-courses-page #reviews-section .mb-4,
        .pass-plus-page #reviews-section .mb-4,
        .motorway-lessons-page #reviews-section .mb-4 {
          margin-bottom: 0.5rem !important;
        }
        .automatic-lessons-page #reviews-section h3,
        .manual-lessons-page #reviews-section h3,
        .intensive-courses-page #reviews-section h3,
        .pass-plus-page #reviews-section h3,
        .motorway-lessons-page #reviews-section h3,
        .lessons-needed-page #reviews-section h3,
        .first-lesson-page #reviews-section h3,
        .intensive-worth-it-page #reviews-section h3 {
          margin-top: 0 !important;
          margin-bottom: 0.5rem !important;
        }
        .automatic-lessons-page #reviews-section p,
        .manual-lessons-page #reviews-section p,
        .intensive-courses-page #reviews-section p,
        .pass-plus-page #reviews-section p,
        .motorway-lessons-page #reviews-section p,
        .lessons-needed-page #reviews-section p,
        .first-lesson-page #reviews-section p,
        .intensive-worth-it-page #reviews-section p {
          margin-bottom: 1rem !important;
        }

        /* Specific Heading & Paragraph tightening for Service Pages */
        .automatic-lessons-page h2, .manual-lessons-page h2, .intensive-courses-page h2, .pass-plus-page h2, .motorway-lessons-page h2,
        .lessons-needed-page h2, .first-lesson-page h2, .intensive-worth-it-page h2 {
          margin-bottom: 0.75rem !important; /* Loosened from 0.25rem */
          margin-top: 1.5rem !important; /* Loosened from 0.5rem */
        }
        .automatic-lessons-page h3, .manual-lessons-page h3, .intensive-courses-page h3, .pass-plus-page h3, .motorway-lessons-page h3,
        .lessons-needed-page h3, .first-lesson-page h3, .intensive-worth-it-page h3 {
          margin-bottom: 0.5rem !important; /* Loosened from 0.125rem */
          margin-top: 1rem !important; /* Loosened from 0.25rem */
        }
        .automatic-lessons-page p, .manual-lessons-page p, .intensive-courses-page p, .pass-plus-page p, .motorway-lessons-page p,
        .lessons-needed-page p, .first-lesson-page p, .intensive-worth-it-page p {
          margin-bottom: 0.75rem !important; /* Loosened from 0.25rem */
        }
        .automatic-lessons-page .prose p, .manual-lessons-page .prose p, .intensive-courses-page .prose p, .pass-plus-page .prose p, .motorway-lessons-page .prose p,
        .lessons-needed-page .prose p, .first-lesson-page .prose p, .intensive-worth-it-page .prose p {
          margin-bottom: 1rem !important; /* Loosened from 0.5rem */
        }
        /* Space-y tightening */
        .automatic-lessons-page .space-y-12 > *, .manual-lessons-page .space-y-12 > *, .intensive-courses-page .space-y-12 > *, .pass-plus-page .space-y-12 > *, .motorway-lessons-page .space-y-12 > *,
        .automatic-lessons-page .space-y-10 > *, .manual-lessons-page .space-y-10 > *, .intensive-courses-page .space-y-10 > *, .pass-plus-page .space-y-10 > *, .motorway-lessons-page .space-y-10 > *,
        .automatic-lessons-page .space-y-8 > *, .manual-lessons-page .space-y-8 > *, .intensive-courses-page .space-y-8 > *, .pass-plus-page .space-y-8 > *, .motorway-lessons-page .space-y-8 > *,
        .automatic-lessons-page .space-y-6 > *, .manual-lessons-page .space-y-6 > *, .intensive-courses-page .space-y-6 > *, .pass-plus-page .space-y-6 > *, .motorway-lessons-page .space-y-6 > *,
        .automatic-lessons-page .space-y-4 > *, .manual-lessons-page .space-y-4 > *, .intensive-courses-page .space-y-4 > *, .pass-plus-page .space-y-4 > *, .motorway-lessons-page .space-y-4 > *,
        .automatic-lessons-page .space-y-2 > *, .manual-lessons-page .space-y-2 > *, .intensive-courses-page .space-y-2 > *, .pass-plus-page .space-y-2 > *, .motorway-lessons-page .space-y-2 > *,
        .lessons-needed-page [class*="space-y-"] > *, .first-lesson-page [class*="space-y-"] > *, .intensive-worth-it-page [class*="space-y-"] > * {
          margin-top: 1rem !important; /* Loosened from 0.375rem */
          margin-bottom: 0 !important;
        }
        @media (min-width: 1024px) {
          .automatic-lessons-page .space-y-12 > *, .manual-lessons-page .space-y-12 > *, .intensive-courses-page .space-y-12 > *, .pass-plus-page .space-y-12 > *, .motorway-lessons-page .space-y-12 > *,
          .automatic-lessons-page .space-y-10 > *, .manual-lessons-page .space-y-10 > *, .intensive-courses-page .space-y-10 > *, .pass-plus-page .space-y-10 > *, .motorway-lessons-page .space-y-10 > *,
          .automatic-lessons-page .space-y-8 > *, .manual-lessons-page .space-y-8 > *, .intensive-courses-page .space-y-8 > *, .pass-plus-page .space-y-8 > *, .motorway-lessons-page .space-y-8 > *,
          .automatic-lessons-page .space-y-6 > *, .manual-lessons-page .space-y-6 > *, .intensive-courses-page .space-y-6 > *, .pass-plus-page .space-y-6 > *, .motorway-lessons-page .space-y-6 > *,
          .automatic-lessons-page .space-y-4 > *, .manual-lessons-page .space-y-4 > *, .intensive-courses-page .space-y-4 > *, .pass-plus-page .space-y-4 > *, .motorway-lessons-page .space-y-4 > *,
          .automatic-lessons-page .space-y-2 > *, .manual-lessons-page .space-y-2 > *, .intensive-courses-page .space-y-2 > *, .pass-plus-page .space-y-2 > *, .motorway-lessons-page .space-y-2 > *,
          .lessons-needed-page [class*="space-y-"] > *, .first-lesson-page [class*="space-y-"] > *, .intensive-worth-it-page [class*="space-y-"] > * {
            margin-top: 1.5rem !important; /* Loosened from 0.625rem */
            margin-bottom: 0 !important;
          }
        }


        /* Remaining Pages Spacing Refinement */
        .mock-tests-page .container,
        .taxi-assessments-page .container,
        .adi-part2-page .container,
        .adi-part3-page .container,
        .test-prep-page .container,
        .refresher-lessons-page .container,
        .nervous-drivers-page .container,
        .female-instructors-page .container,
        .about-us-page .container,
        .careers-page .container,
        .recent-passes-page .container,
        .area-page .container,
        .test-centre-page .container,
        .legal-page .container,
        .location-page .container,
        .auto-vs-manual-page .container {
          max-width: 1000px !important;
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }
        @media (min-width: 1280px) {
          .mock-tests-page .container,
          .taxi-assessments-page .container,
          .adi-part2-page .container,
          .adi-part3-page .container,
          .test-prep-page .container,
          .refresher-lessons-page .container,
          .nervous-drivers-page .container,
          .female-instructors-page .container,
          .about-us-page .container,
          .careers-page .container,
          .recent-passes-page .container,
          .area-page .container,
          .test-centre-page .container,
          .legal-page .container,
          .location-page .container,
          .auto-vs-manual-page .container {
            max-width: 1100px !important;
          }
        }

        .mock-tests-page section,
        .taxi-assessments-page section,
        .adi-part2-page section,
        .adi-part3-page section,
        .test-prep-page section,
        .refresher-lessons-page section,
        .nervous-drivers-page section,
        .female-instructors-page section,
        .about-us-page section,
        .careers-page section,
        .recent-passes-page section,
        .area-page section,
        .test-centre-page section,
        .legal-page section,
        .location-page section,
        .auto-vs-manual-page section {
          padding-top: 1.5rem !important;
          padding-bottom: 1.5rem !important;
        }

        .mock-tests-page section.py-24, .taxi-assessments-page section.py-24, .adi-part2-page section.py-24, .adi-part3-page section.py-24, .test-prep-page section.py-24, .refresher-lessons-page section.py-24, .nervous-drivers-page section.py-24, .female-instructors-page section.py-24, .about-us-page section.py-24, .careers-page section.py-24, .recent-passes-page section.py-24, .area-page section.py-24, .test-centre-page section.py-24, .legal-page section.py-24, .location-page section.py-24,
        .mock-tests-page section.py-16, .taxi-assessments-page section.py-16, .adi-part2-page section.py-16, .adi-part3-page section.py-16, .test-prep-page section.py-16, .refresher-lessons-page section.py-16, .nervous-drivers-page section.py-16, .female-instructors-page section.py-16, .about-us-page section.py-16, .careers-page section.py-16, .recent-passes-page section.py-16, .area-page section.py-16, .test-centre-page section.py-16, .legal-page section.py-16, .location-page section.py-16,
        .mock-tests-page section.py-12, .taxi-assessments-page section.py-12, .adi-part2-page section.py-12, .adi-part3-page section.py-12, .test-prep-page section.py-12, .refresher-lessons-page section.py-12, .nervous-drivers-page section.py-12, .female-instructors-page section.py-12, .about-us-page section.py-12, .careers-page section.py-12, .recent-passes-page section.py-12, .area-page section.py-12, .test-centre-page section.py-12, .legal-page section.py-12, .location-page section.py-12, .auto-vs-manual-page section.py-12 {
          padding-top: 1rem !important;
          padding-bottom: 1rem !important;
        }

        .mock-tests-page section.relative.bg-gray-900,
        .taxi-assessments-page section.relative.bg-gray-900,
        .adi-part2-page section.relative.bg-gray-900,
        .adi-part3-page section.relative.bg-gray-900,
        .test-prep-page section.relative.bg-gray-900,
        .refresher-lessons-page section.relative.bg-gray-900,
        .nervous-drivers-page section.relative.bg-gray-900,
        .female-instructors-page section.relative.bg-gray-900,
        .about-us-page section.relative.bg-gray-900,
        .careers-page section.relative.bg-gray-900,
        .recent-passes-page section.relative.bg-gray-900,
        .area-page section.relative.bg-gray-900,
        .test-centre-page section.relative.bg-gray-900,
        .legal-page section.relative.bg-gray-900,
        .location-page section.relative.bg-gray-900,
        .auto-vs-manual-page section.relative.bg-gray-900 {
          padding-top: 2rem !important;
          padding-bottom: 2rem !important;
        }

        @media (min-width: 1024px) {
          .mock-tests-page section,
          .taxi-assessments-page section,
          .adi-part2-page section,
          .adi-part3-page section,
          .test-prep-page section,
          .refresher-lessons-page section,
          .nervous-drivers-page section,
          .female-instructors-page section,
          .about-us-page section,
          .careers-page section,
          .recent-passes-page section,
          .area-page section,
          .test-centre-page section,
          .legal-page section,
          .location-page section,
          .auto-vs-manual-page section {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          
          .mock-tests-page section.py-24, .taxi-assessments-page section.py-24, .adi-part2-page section.py-24, .adi-part3-page section.py-24, .test-prep-page section.py-24, .refresher-lessons-page section.py-24, .nervous-drivers-page section.py-24, .female-instructors-page section.py-24, .about-us-page section.py-24, .careers-page section.py-24, .recent-passes-page section.py-24, .area-page section.py-24, .test-centre-page section.py-24, .legal-page section.py-24, .location-page section.py-24,
          .mock-tests-page section.py-16, .taxi-assessments-page section.py-16, .adi-part2-page section.py-16, .adi-part3-page section.py-16, .test-prep-page section.py-16, .refresher-lessons-page section.py-16, .nervous-drivers-page section.py-16, .female-instructors-page section.py-16, .about-us-page section.py-16, .careers-page section.py-16, .recent-passes-page section.py-16, .area-page section.py-16, .test-centre-page section.py-16, .legal-page section.py-16, .location-page section.py-16,
          .mock-tests-page section.py-12, .taxi-assessments-page section.py-12, .adi-part2-page section.py-12, .adi-part3-page section.py-12, .test-prep-page section.py-12, .refresher-lessons-page section.py-12, .nervous-drivers-page section.py-12, .female-instructors-page section.py-12, .about-us-page section.py-12, .careers-page section.py-12, .recent-passes-page section.py-12, .area-page section.py-12, .test-centre-page section.py-12, .legal-page section.py-12, .location-page section.py-12 {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
          }

          .mock-tests-page section.relative.bg-gray-900,
          .taxi-assessments-page section.relative.bg-gray-900,
          .adi-part2-page section.relative.bg-gray-900,
          .adi-part3-page section.relative.bg-gray-900,
          .test-prep-page section.relative.bg-gray-900,
          .refresher-lessons-page section.relative.bg-gray-900,
          .nervous-drivers-page section.relative.bg-gray-900,
          .female-instructors-page section.relative.bg-gray-900,
          .about-us-page section.relative.bg-gray-900,
          .careers-page section.relative.bg-gray-900,
          .recent-passes-page section.relative.bg-gray-900,
          .area-page section.relative.bg-gray-900,
          .test-centre-page section.relative.bg-gray-900,
          .legal-page section.relative.bg-gray-900,
          .location-page section.relative.bg-gray-900,
          .auto-vs-manual-page section.relative.bg-gray-900 {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
        }

        /* Inner spacing tightening for Remaining Pages */
        .mock-tests-page .mb-24, .taxi-assessments-page .mb-24, .adi-part2-page .mb-24, .adi-part3-page .mb-24, .test-prep-page .mb-24, .refresher-lessons-page .mb-24, .nervous-drivers-page .mb-24, .female-instructors-page .mb-24, .about-us-page .mb-24, .careers-page .mb-24, .recent-passes-page .mb-24, .area-page .mb-24, .test-centre-page .mb-24, .legal-page .mb-24, .location-page .mb-24,
        .mock-tests-page .mb-20, .taxi-assessments-page .mb-20, .adi-part2-page .mb-20, .adi-part3-page .mb-20, .test-prep-page .mb-20, .refresher-lessons-page .mb-20, .nervous-drivers-page .mb-20, .female-instructors-page .mb-20, .about-us-page .mb-20, .careers-page .mb-20, .recent-passes-page .mb-20, .area-page .mb-20, .test-centre-page .mb-20, .legal-page .mb-20, .location-page .mb-20,
        .mock-tests-page .mb-16, .taxi-assessments-page .mb-16, .adi-part2-page .mb-16, .adi-part3-page .mb-16, .test-prep-page .mb-16, .refresher-lessons-page .mb-16, .nervous-drivers-page .mb-16, .female-instructors-page .mb-16, .about-us-page .mb-16, .careers-page .mb-16, .recent-passes-page .mb-16, .area-page .mb-16, .test-centre-page .mb-16, .legal-page .mb-16, .location-page .mb-16,
        .mock-tests-page .mb-12, .taxi-assessments-page .mb-12, .adi-part2-page .mb-12, .adi-part3-page .mb-12, .test-prep-page .mb-12, .refresher-lessons-page .mb-12, .nervous-drivers-page .mb-12, .female-instructors-page .mb-12, .about-us-page .mb-12, .careers-page .mb-12, .recent-passes-page .mb-12, .area-page .mb-12, .test-centre-page .mb-12, .legal-page .mb-12, .location-page .mb-12,
        .mock-tests-page .mb-10, .taxi-assessments-page .mb-10, .adi-part2-page .mb-10, .adi-part3-page .mb-10, .test-prep-page .mb-10, .refresher-lessons-page .mb-10, .nervous-drivers-page .mb-10, .female-instructors-page .mb-10, .about-us-page .mb-10, .careers-page .mb-10, .recent-passes-page .mb-10, .area-page .mb-10, .test-centre-page .mb-10, .legal-page .mb-10, .location-page .mb-10,
        .mock-tests-page .mb-8, .taxi-assessments-page .mb-8, .adi-part2-page .mb-8, .adi-part3-page .mb-8, .test-prep-page .mb-8, .refresher-lessons-page .mb-8, .nervous-drivers-page .mb-8, .female-instructors-page .mb-8, .about-us-page .mb-8, .careers-page .mb-8, .recent-passes-page .mb-8, .area-page .mb-8, .test-centre-page .mb-8, .legal-page .mb-8, .location-page .mb-8,
        .mock-tests-page .mb-6, .taxi-assessments-page .mb-6, .adi-part2-page .mb-6, .adi-part3-page .mb-6, .test-prep-page .mb-6, .refresher-lessons-page .mb-6, .nervous-drivers-page .mb-6, .female-instructors-page .mb-6, .about-us-page .mb-6, .careers-page .mb-6, .recent-passes-page .mb-6, .area-page .mb-6, .test-centre-page .mb-6, .legal-page .mb-6, .location-page .mb-6 {
          margin-bottom: 0.75rem !important;
        }
        
        @media (min-width: 1024px) {
          .mock-tests-page .mb-24, .taxi-assessments-page .mb-24, .adi-part2-page .mb-24, .adi-part3-page .mb-24, .test-prep-page .mb-24, .refresher-lessons-page .mb-24, .nervous-drivers-page .mb-24, .female-instructors-page .mb-24, .about-us-page .mb-24, .careers-page .mb-24, .recent-passes-page .mb-24, .area-page .mb-24, .test-centre-page .mb-24, .legal-page .mb-24, .location-page .mb-24,
          .mock-tests-page .mb-20, .taxi-assessments-page .mb-20, .adi-part2-page .mb-20, .adi-part3-page .mb-20, .test-prep-page .mb-20, .refresher-lessons-page .mb-20, .nervous-drivers-page .mb-20, .female-instructors-page .mb-20, .about-us-page .mb-20, .careers-page .mb-20, .recent-passes-page .mb-20, .area-page .mb-20, .test-centre-page .mb-20, .legal-page .mb-20, .location-page .mb-20,
          .mock-tests-page .mb-16, .taxi-assessments-page .mb-16, .adi-part2-page .mb-16, .adi-part3-page .mb-16, .test-prep-page .mb-16, .refresher-lessons-page .mb-16, .nervous-drivers-page .mb-16, .female-instructors-page .mb-16, .about-us-page .mb-16, .careers-page .mb-16, .recent-passes-page .mb-16, .area-page .mb-16, .test-centre-page .mb-16, .legal-page .mb-16, .location-page .mb-16,
          .mock-tests-page .mb-12, .taxi-assessments-page .mb-12, .adi-part2-page .mb-12, .adi-part3-page .mb-12, .test-prep-page .mb-12, .refresher-lessons-page .mb-12, .nervous-drivers-page .mb-12, .female-instructors-page .mb-12, .about-us-page .mb-12, .careers-page .mb-12, .recent-passes-page .mb-12, .area-page .mb-12, .test-centre-page .mb-12, .legal-page .mb-12, .location-page .mb-12,
          .mock-tests-page .mb-10, .taxi-assessments-page .mb-10, .adi-part2-page .mb-10, .adi-part3-page .mb-10, .test-prep-page .mb-10, .refresher-lessons-page .mb-10, .nervous-drivers-page .mb-10, .female-instructors-page .mb-10, .about-us-page .mb-10, .careers-page .mb-10, .recent-passes-page .mb-10, .area-page .mb-10, .test-centre-page .mb-10, .legal-page .mb-10, .location-page .mb-10,
          .mock-tests-page .mb-8, .taxi-assessments-page .mb-8, .adi-part2-page .mb-8, .adi-part3-page .mb-8, .test-prep-page .mb-8, .refresher-lessons-page .mb-8, .nervous-drivers-page .mb-8, .female-instructors-page .mb-8, .about-us-page .mb-8, .careers-page .mb-8, .recent-passes-page .mb-8, .area-page .mb-8, .test-centre-page .mb-8, .legal-page .mb-8, .location-page .mb-8,
          .mock-tests-page .mb-6, .taxi-assessments-page .mb-6, .adi-part2-page .mb-6, .adi-part3-page .mb-6, .test-prep-page .mb-6, .refresher-lessons-page .mb-6, .nervous-drivers-page .mb-6, .female-instructors-page .mb-6, .about-us-page .mb-6, .careers-page .mb-6, .recent-passes-page .mb-6, .area-page .mb-6, .test-centre-page .mb-6, .legal-page .mb-6, .location-page .mb-6 {
            margin-bottom: 1.5rem !important;
          }
        }

        /* Gap tightening for Remaining Pages */
        .mock-tests-page .gap-16, .taxi-assessments-page .gap-16, .adi-part2-page .gap-16, .adi-part3-page .gap-16, .test-prep-page .gap-16, .refresher-lessons-page .gap-16, .nervous-drivers-page .gap-16, .female-instructors-page .gap-16, .about-us-page .gap-16, .careers-page .gap-16, .recent-passes-page .gap-16, .area-page .gap-16, .test-centre-page .gap-16, .legal-page .gap-16, .location-page .gap-16,
        .mock-tests-page .gap-12, .taxi-assessments-page .gap-12, .adi-part2-page .gap-12, .adi-part3-page .gap-12, .test-prep-page .gap-12, .refresher-lessons-page .gap-12, .nervous-drivers-page .gap-12, .female-instructors-page .gap-12, .about-us-page .gap-12, .careers-page .gap-12, .recent-passes-page .gap-12, .area-page .gap-12, .test-centre-page .gap-12, .legal-page .gap-12, .location-page .gap-12 {
          gap: 1rem !important;
        }
        @media (min-width: 1024px) {
          .mock-tests-page .gap-16, .taxi-assessments-page .gap-16, .adi-part2-page .gap-16, .adi-part3-page .gap-16, .test-prep-page .gap-16, .refresher-lessons-page .gap-16, .nervous-drivers-page .gap-16, .female-instructors-page .gap-16, .about-us-page .gap-16, .careers-page .gap-16, .recent-passes-page .gap-16, .area-page .gap-16, .test-centre-page .gap-16, .legal-page .gap-16, .location-page .gap-16,
          .mock-tests-page .gap-12, .taxi-assessments-page .gap-12, .adi-part2-page .gap-12, .adi-part3-page .gap-12, .test-prep-page .gap-12, .refresher-lessons-page .gap-12, .nervous-drivers-page .gap-12, .female-instructors-page .gap-12, .about-us-page .gap-12, .careers-page .gap-12, .recent-passes-page .gap-12, .area-page .gap-12, .test-centre-page .gap-12, .legal-page .gap-12, .location-page .gap-12 {
            gap: 2rem !important;
          }
        }

        /* Heading & Paragraph tightening for Remaining Pages */
        .mock-tests-page h2, .taxi-assessments-page h2, .adi-part2-page h2, .adi-part3-page h2, .test-prep-page h2, .refresher-lessons-page h2, .nervous-drivers-page h2, .female-instructors-page h2, .about-us-page h2, .careers-page h2, .recent-passes-page h2, .area-page h2, .test-centre-page h2, .legal-page h2, .location-page h2 {
          margin-bottom: 0.5rem !important;
          margin-top: 1rem !important;
        }
        .mock-tests-page h3, .taxi-assessments-page h3, .adi-part2-page h3, .adi-part3-page h3, .test-prep-page h3, .refresher-lessons-page h3, .nervous-drivers-page h3, .female-instructors-page h3, .about-us-page h3, .careers-page h3, .recent-passes-page h3, .area-page h3, .test-centre-page h3, .legal-page h3, .location-page h3 {
          margin-bottom: 0.375rem !important;
          margin-top: 0.75rem !important;
        }
        .mock-tests-page p, .taxi-assessments-page p, .adi-part2-page p, .adi-part3-page p, .test-prep-page p, .refresher-lessons-page p, .nervous-drivers-page p, .female-instructors-page p, .about-us-page p, .careers-page p, .recent-passes-page p, .area-page p, .test-centre-page p, .legal-page p, .location-page p {
          margin-bottom: 0.75rem !important;
        }

        /* Space-y tightening for Remaining Pages */
        .mock-tests-page .space-y-12 > *, .taxi-assessments-page .space-y-12 > *, .adi-part2-page .space-y-12 > *, .adi-part3-page .space-y-12 > *, .test-prep-page .space-y-12 > *, .refresher-lessons-page .space-y-12 > *, .nervous-drivers-page .space-y-12 > *, .female-instructors-page .space-y-12 > *, .about-us-page .space-y-12 > *, .careers-page .space-y-12 > *, .recent-passes-page .space-y-12 > *, .area-page .space-y-12 > *, .test-centre-page .space-y-12 > *, .legal-page .space-y-12 > *, .location-page .space-y-12 > *,
        .mock-tests-page .space-y-8 > *, .taxi-assessments-page .space-y-8 > *, .adi-part2-page .space-y-8 > *, .adi-part3-page .space-y-8 > *, .test-prep-page .space-y-8 > *, .refresher-lessons-page .space-y-8 > *, .nervous-drivers-page .space-y-8 > *, .female-instructors-page .space-y-8 > *, .about-us-page .space-y-8 > *, .careers-page .space-y-8 > *, .recent-passes-page .space-y-8 > *, .area-page .space-y-8 > *, .test-centre-page .space-y-8 > *, .legal-page .space-y-8 > *, .location-page .space-y-8 > *,
        .mock-tests-page .space-y-6 > *, .taxi-assessments-page .space-y-6 > *, .adi-part2-page .space-y-6 > *, .adi-part3-page .space-y-6 > *, .test-prep-page .space-y-6 > *, .refresher-lessons-page .space-y-6 > *, .nervous-drivers-page .space-y-6 > *, .female-instructors-page .space-y-6 > *, .about-us-page .space-y-6 > *, .careers-page .space-y-6 > *, .recent-passes-page .space-y-6 > *, .area-page .space-y-6 > *, .test-centre-page .space-y-6 > *, .legal-page .space-y-6 > *, .location-page .space-y-6 > * {
          margin-top: 0.75rem !important;
          margin-bottom: 0 !important;
        }
        @media (min-width: 1024px) {
          .mock-tests-page .space-y-12 > *, .taxi-assessments-page .space-y-12 > *, .adi-part2-page .space-y-12 > *, .adi-part3-page .space-y-12 > *, .test-prep-page .space-y-12 > *, .refresher-lessons-page .space-y-12 > *, .nervous-drivers-page .space-y-12 > *, .female-instructors-page .space-y-12 > *, .about-us-page .space-y-12 > *, .careers-page .space-y-12 > *, .recent-passes-page .space-y-12 > *, .area-page .space-y-12 > *, .test-centre-page .space-y-12 > *, .legal-page .space-y-12 > *, .location-page .space-y-12 > *,
          .mock-tests-page .space-y-8 > *, .taxi-assessments-page .space-y-8 > *, .adi-part2-page .space-y-8 > *, .adi-part3-page .space-y-8 > *, .test-prep-page .space-y-8 > *, .refresher-lessons-page .space-y-8 > *, .nervous-drivers-page .space-y-8 > *, .female-instructors-page .space-y-8 > *, .about-us-page .space-y-8 > *, .careers-page .space-y-8 > *, .recent-passes-page .space-y-8 > *, .area-page .space-y-8 > *, .test-centre-page .space-y-8 > *, .legal-page .space-y-8 > *, .location-page .space-y-8 > *,
          .mock-tests-page .space-y-6 > *, .taxi-assessments-page .space-y-6 > *, .adi-part2-page .space-y-6 > *, .adi-part3-page .space-y-6 > *, .test-prep-page .space-y-6 > *, .refresher-lessons-page .space-y-6 > *, .nervous-drivers-page .space-y-6 > *, .female-instructors-page .space-y-6 > *, .about-us-page .space-y-6 > *, .careers-page .space-y-6 > *, .recent-passes-page .space-y-6 > *, .area-page .space-y-6 > *, .test-centre-page .space-y-6 > *, .legal-page .space-y-6 > *, .location-page .space-y-6 > * {
            margin-top: 1.25rem !important;
          }
        }

        /* Hero sections on homepage should keep their impact */
        .is-home section.hero-section,
        .is-home section.hero-impact,
        .is-home section.relative.bg-gray-900, 
        .is-home section.py-20.lg.py-32,
        .is-home section.py-24.bg-red-600 {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
        @media (min-width: 1024px) {
          .is-home section.hero-section,
          .is-home section.hero-impact,
          .is-home section.relative.bg-gray-900,
          .is-home section.py-20.lg.py-32,
          .is-home section.py-24.bg-red-600 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
        }

        /* Hero sections on internal pages should still have some breathing room but keep impact */
        .is-internal section.hero-section,
        .is-internal section.hero-impact,
        .is-internal section.relative.bg-gray-900 {
           padding-top: 2rem !important;
           padding-bottom: 2rem !important;
        }
        @media (min-width: 1024px) {
          .is-internal section.hero-section,
          .is-internal section.hero-impact,
          .is-internal section.relative.bg-gray-900 {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
        }

        /* Tight sections on homepage */
        .is-home #trust, 
        .is-home #reviews-section, 
        .is-home .nearby-coverage, 
        .is-home .tight-section, 
        .is-home .tight-transition {
          padding-top: 1.5rem !important;
          padding-bottom: 1.5rem !important;
        }
        @media (min-width: 1024px) {
          .is-home #trust, 
          .is-home #reviews-section, 
          .is-home .nearby-coverage, 
          .is-home .tight-section, 
          .is-home .tight-transition {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
        }

        /* Heading Spacing (Homepage only) */
        .is-home h2 { margin-bottom: 1rem !important; }
        .is-home p { margin-bottom: 1rem !important; }
        
        /* Remove excessive margins from inner containers (Homepage only) */
        .is-home .mb-16, .is-home .mb-20, .is-home .mb-24 { margin-bottom: 2rem !important; }
        @media (min-width: 1024px) {
          .is-home .mb-16, .is-home .mb-20, .is-home .mb-24 { margin-bottom: 3rem !important; }
        }
      `}</style>
      <AppContent />
    </Router>
  );
};



export default App;

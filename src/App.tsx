import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import BackgroundHoverReveal from './components/BackgroundHoverReveal';
import SEOHead from './components/SEOHead';
import { ThemeProvider } from './context/ThemeContext';
import { BrandAssetProvider } from './context/BrandAssetContext';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';
import Institutions from './pages/Institutions';
import Process from './pages/Process';
import Knowledge from './pages/Knowledge';
import Consultation from './pages/Consultation';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Jurisdictions from './pages/Jurisdictions';
import SiteMapPage from './pages/SiteMapPage';
import StartupsIP from './pages/StartupsIP';
import CollegesUniversitiesIPR from './pages/CollegesUniversitiesIPR';
import AuthorityHub from './pages/AuthorityHub';
import Locations from './pages/Locations';
import { AnimatePresence } from 'motion/react';

function AppContent() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/startups-ip", element: <StartupsIP /> },
    { path: "/colleges-universities-ipr", element: <CollegesUniversitiesIPR /> },
    { path: "/authority-hub", element: <AuthorityHub /> },
    { path: "/locations", element: <Locations /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/services", element: <Services /> },
    { path: "/institutions", element: <Institutions /> },
    { path: "/process", element: <Process /> },
    { path: "/knowledge", element: <Knowledge /> },
    { path: "/blog", element: <BlogList /> },
    { path: "/blog/:slug", element: <BlogPost /> },
    { path: "/jurisdictions", element: <Jurisdictions /> },
    { path: "/sitemap", element: <SiteMapPage /> },
    { path: "/consultation", element: <Consultation /> },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      <SEOHead />
      <BackgroundHoverReveal />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrandAssetProvider>
        <AppContent />
      </BrandAssetProvider>
    </ThemeProvider>
  );
}

import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';
import Institutions from './pages/Institutions';
import Process from './pages/Process';
import Knowledge from './pages/Knowledge';
import Consultation from './pages/Consultation';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/services", element: <Services /> },
    { path: "/institutions", element: <Institutions /> },
    { path: "/process", element: <Process /> },
    { path: "/knowledge", element: <Knowledge /> },
    { path: "/consultation", element: <Consultation /> },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

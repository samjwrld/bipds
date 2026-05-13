import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contacts', path: '/consultation' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsMenuOpen(false);
    
    // If it's a hash link (e.g., /#about)
    if (path.includes('#')) {
      const [pagePath, hash] = path.split('#');
      
      // If we are already on the target page, just scroll
      if (location.pathname === (pagePath || '/')) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // If we are on a different page, let the default navigation happen
      // The browser will navigate to the page and then jump to the hash
    } else if (path === location.pathname) {
      // If clicking the link to the current page, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center cursor-pointer" onClick={(e) => handleLinkClick(e, '/')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center mr-3 shadow-lg shadow-red-500/20">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight text-slate-900 leading-none">
                  Bharat <span className="text-red-600">IP</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                  Defense Solutions
                </span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
                  onClick={(e) => handleLinkClick(e, item.path)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/consultation" className="bg-slate-900 text-white hover:bg-red-600 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg">
                Free Consultation
              </Link>
            </div>

            <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6">
          <div className="flex flex-col space-y-6 text-2xl font-display font-bold">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={(e) => handleLinkClick(e, item.path)} 
                className="text-left text-slate-900 hover:text-red-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/consultation" onClick={() => setIsMenuOpen(false)} className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-4 rounded-2xl mt-8 text-xl shadow-lg shadow-red-500/20 text-center">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

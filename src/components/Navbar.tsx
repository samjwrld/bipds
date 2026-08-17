import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown, 
  Rocket, 
  GraduationCap, 
  Scale, 
  MapPin, 
  Globe, 
  BookOpen, 
  Award, 
  ArrowRight,
  Shield,
  FileCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection for dynamic elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    if (path.includes('#')) {
      const [pagePath, hash] = path.split('#');
      if (location.pathname === (pagePath || '/')) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (path === location.pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const servicesLinks = [
    { title: 'Patents & Novelty Search', desc: '48-hr prior art search & Form 18A fast-track', path: '/services#patent-services', icon: Scale },
    { title: 'Startups & DPIIT 80% Rebate', desc: 'Fast-track grant roadmap & Section 3(k) strategy', path: '/startups-ip', icon: Rocket },
    { title: 'Universities & NIRF IPR Cells', desc: 'Campus IPR cell setup & AICTE KAPILA grants', path: '/colleges-universities-ipr', icon: GraduationCap },
    { title: 'Trademarks & Brand Moats', desc: 'Multi-class filing & Madrid international protocol', path: '/services#trademark-services', icon: Shield },
    { title: 'Regional Jurisdictions (Grehat)', desc: 'Delhi, Mumbai, Chennai & Kolkata Patent Offices', path: '/jurisdictions', icon: Globe },
    { title: 'Pan-India Tech Hubs', desc: 'Offices in Hyderabad, Bengaluru, Delhi NCR & Pune', path: '/locations', icon: MapPin },
  ];

  const isServicesActive = ['/services', '/startups-ip', '/colleges-universities-ipr', '/jurisdictions', '/locations'].includes(location.pathname);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm py-3.5' 
          : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo (Supports full Name + Logo PNG files in Light & Dark modes) */}
          <Link 
            to="/" 
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center group cursor-pointer"
            aria-label="Bharat IP Defence Solutions Home"
          >
            <div className="relative h-10 sm:h-11 max-w-[260px] sm:max-w-[300px] flex items-center justify-start transition-transform duration-300 group-hover:scale-[1.02]">
              <Logo className="h-full w-auto object-contain drop-shadow-sm" />
              <span className="sr-only">Bharat IP Defence Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium">
            
            <Link
              to="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-red-600 dark:text-red-400 font-semibold bg-red-50/60 dark:bg-red-950/30' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors inline-flex items-center space-x-1 cursor-pointer ${
                  isServicesActive 
                    ? 'text-red-600 dark:text-red-400 font-semibold bg-red-50/60 dark:bg-red-950/30' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>Services &amp; Practice</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1.5 w-[520px] bg-white dark:bg-slate-900 rounded-2xl p-3 shadow-xl border border-slate-200 dark:border-slate-800 z-50 grid grid-cols-2 gap-1.5"
                  >
                    {servicesLinks.map((item) => {
                      const IconComp = item.icon;
                      const isActive = location.pathname === item.path.split('#')[0];
                      return (
                        <Link
                          key={item.title}
                          to={item.path}
                          onClick={(e) => handleLinkClick(e, item.path)}
                          className={`p-2.5 rounded-xl flex items-start space-x-2.5 transition-colors group ${
                            isActive
                              ? 'bg-red-50/80 dark:bg-red-950/40 text-red-600 dark:text-red-400'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className={`p-2 rounded-lg flex-shrink-0 transition-colors ${
                            isActive
                              ? 'bg-red-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-red-600 group-hover:text-white'
                          }`}>
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold block group-hover:text-red-600 dark:group-hover:text-red-400">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight line-clamp-1">
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/testimonials"
              onClick={(e) => handleLinkClick(e, '/testimonials')}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === '/testimonials' 
                  ? 'text-red-600 dark:text-red-400 font-semibold bg-red-50/60 dark:bg-red-950/30' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Track Record
            </Link>

            <Link
              to="/blog"
              onClick={(e) => handleLinkClick(e, '/blog')}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                location.pathname.startsWith('/blog') 
                  ? 'text-red-600 dark:text-red-400 font-semibold bg-red-50/60 dark:bg-red-950/30' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              Insights
            </Link>

            <Link
              to="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-red-600 dark:text-red-400 font-semibold bg-red-50/60 dark:bg-red-950/30' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme Mode"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* Primary Action Button */}
            <Link 
              to="/consultation" 
              onClick={(e) => handleLinkClick(e, '/consultation')}
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button 
              className="p-2 rounded-xl text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={(e) => handleLinkClick(e, '/')}
                className="text-sm font-semibold text-slate-800 dark:text-slate-200 py-1"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={(e) => handleLinkClick(e, '/services')}
                className="text-sm font-semibold text-slate-800 dark:text-slate-200 py-1"
              >
                Services
              </Link>
              <Link 
                to="/startups-ip" 
                onClick={(e) => handleLinkClick(e, '/startups-ip')}
                className="text-sm font-semibold text-slate-800 dark:text-slate-200 py-1 flex items-center justify-between"
              >
                <span>Startups &amp; DPIIT Rebate</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">80% Off</span>
              </Link>
              <Link 
                to="/colleges-universities-ipr" 
                onClick={(e) => handleLinkClick(e, '/colleges-universities-ipr')}
                className="text-sm font-semibold text-slate-800 dark:text-slate-200 py-1 flex items-center justify-between"
              >
                <span>Colleges &amp; Universities (NIRF)</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">KAPILA</span>
              </Link>
              <Link 
                to="/testimonials" 
                onClick={(e) => handleLinkClick(e, '/testimonials')}
                className="text-sm font-semibold text-slate-800 dark:text-slate-200 py-1"
              >
                Track Record (98.4% Grants)
              </Link>
              <Link 
                to="/blog" 
                onClick={(e) => handleLinkClick(e, '/blog')}
                className="text-sm font-semibold text-slate-800 dark:text-slate-200 py-1"
              >
                IP Insights &amp; Articles
              </Link>
              <Link 
                to="/about" 
                onClick={(e) => handleLinkClick(e, '/about')}
                className="text-sm font-semibold text-slate-800 dark:text-slate-200 py-1"
              >
                About Firm
              </Link>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <Link 
                  to="/consultation" 
                  onClick={(e) => handleLinkClick(e, '/consultation')}
                  className="w-full bg-red-600 hover:bg-red-500 text-white text-center py-2.5 rounded-xl text-xs font-bold block"
                >
                  Book Free Assessment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

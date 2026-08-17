import React, { useState } from 'react';
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import CertificateModal from './CertificateModal';

export default function Footer() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Brand Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 pb-12 border-b border-slate-200 dark:border-slate-800 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 sm:h-14 max-w-[280px] sm:max-w-[320px] flex items-center justify-start">
                <Logo 
                  alt="Bharat IP Defence Solutions" 
                  className="h-full w-auto object-contain drop-shadow-sm" 
                />
                <span className="sr-only">Bharat IP Defence Solutions</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Leading <strong>Patent Consultants for Startups</strong> and <strong>Trademark Registration Experts</strong> in India. Providing comprehensive IP services to secure your innovations.
            </p>
            {/* Certified & Trusted Badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center space-x-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-2.5 shadow-sm">
                <div className="w-9 h-9 bg-red-50 dark:bg-red-950/50 rounded-xl flex items-center justify-center flex-shrink-0 text-red-600 dark:text-red-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM10 14.5l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider leading-none">Registered & Approved</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">Govt. Registered IP Enabler</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-2.5 shadow-sm">
                <div className="w-9 h-9 bg-amber-50 dark:bg-amber-950/50 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-600 dark:text-amber-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider leading-none">Trusted Excellence</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">100% Confidential Assured</p>
                </div>
              </div>

              {/* Govt Certified Button */}
              <button
                type="button"
                onClick={() => setIsCertModalOpen(true)}
                className="flex items-center space-x-3 bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-300/80 dark:border-emerald-700/60 hover:border-emerald-500 dark:hover:border-emerald-400 rounded-2xl p-2.5 shadow-sm hover:shadow-md transition-all duration-300 text-left group cursor-pointer"
                title="Click to view Government IPR Certificate"
              >
                <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-900/60 rounded-xl flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[9px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider leading-none">Recognized IPR</p>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-600 text-white leading-tight">View ↗</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100 mt-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    We are Govt certified
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Online & Offline Services Available
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://www.linkedin.com/company/bharat-ip-defense-solutions" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Bharat IP Defense Solutions on LinkedIn"
                title="Follow Bharat IP Defense on LinkedIn"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] dark:hover:bg-[#0A66C2] dark:hover:border-[#0A66C2] transition-all duration-200 shadow-sm hover:shadow-md text-xs font-semibold group"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover:text-white transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.instagram.com/bharatipdefence" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Bharat IP Defense on Instagram"
                title="Follow @bharatipdefence on Instagram"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-transparent transition-all duration-200 shadow-sm hover:shadow-md text-xs font-semibold group"
              >
                <Instagram className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://twitter.com/BharatIPDefence" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Bharat IP Defence on Twitter / X"
                title="Follow on Twitter / X"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com/BharatIPDefence" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Bharat IP Defence on Facebook"
                title="Follow on Facebook"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all duration-200 shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-5 uppercase tracking-wider text-xs">Target Ecosystems</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li><Link to="/startups-ip" className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-semibold text-red-600 dark:text-red-400">Startup IP &amp; DPIIT 80% Rebates</Link></li>
              <li><Link to="/colleges-universities-ipr" className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-semibold text-blue-600 dark:text-blue-400">Colleges &amp; Universities (NIRF/NAAC)</Link></li>
              <li><Link to="/institutions" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Academic IPR Cells &amp; TTO</Link></li>
              <li><Link to="/services" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Patent Search &amp; Drafting</Link></li>
              <li><Link to="/services" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Trademark Registration 45 Classes</Link></li>
              <li><Link to="/process" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">5-Stage IPO Filing Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-5 uppercase tracking-wider text-xs">Knowledge &amp; Portals</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li><Link to="/locations" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Pan-India Tech Hubs</Link></li>
              <li><Link to="/jurisdictions" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Grehat Jurisdictions Map</Link></li>
              <li><Link to="/authority-hub" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Statutory Authority &amp; Citations</Link></li>
              <li><Link to="/blog" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">IP Blog &amp; Case Studies</Link></li>
              <li><Link to="/knowledge" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Section 3(k) &amp; Law Guides</Link></li>
              <li><Link to="/sitemap" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Sitemap &amp; Semantic Directory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-5 uppercase tracking-wider text-xs">Authoritative Citations</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-xs">
              <li>
                <a href="https://ipindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center">
                  CGPDTM (IP India Portal) <span className="text-[10px] text-slate-400 ml-1">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.startupindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center">
                  Startup India (DPIIT SIPP) <span className="text-[10px] text-slate-400 ml-1">↗</span>
                </a>
              </li>
              <li>
                <a href="https://kapila.mic.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center">
                  AICTE KAPILA Scheme <span className="text-[10px] text-slate-400 ml-1">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.wipo.int" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center">
                  WIPO (PCT &amp; Madrid Treaty) <span className="text-[10px] text-slate-400 ml-1">↗</span>
                </a>
              </li>
              <li>
                <a href="https://delhihighcourt.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center">
                  Delhi High Court IPD Rules <span className="text-[10px] text-slate-400 ml-1">↗</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-5 uppercase tracking-wider text-xs">Offices &amp; Contact</h4>
            <div className="mb-3">
              <span className="block font-bold text-slate-700 dark:text-slate-200 text-xs mb-0.5">Head Office (Hyderabad):</span>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                Villa 48, Mythri Lake View, Mallampet, Bachupally, Hyderabad 502325
              </p>
            </div>
            <div className="mb-3">
              <span className="block font-bold text-slate-700 dark:text-slate-200 text-xs mb-0.5">Branch Office (Guntur):</span>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                5/4, Ram Sita Complex, Arudelpet, Guntur, AP 522002
              </p>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
              <p><span className="font-bold text-slate-700 dark:text-slate-200">Phone:</span> +91 7799045557</p>
              <p><span className="font-bold text-slate-700 dark:text-slate-200">Email:</span> support@ipdefensesolutions.com</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Bharat IP Defence. All rights reserved. 
            <span className="mx-2 hidden md:inline">•</span>
            <span className="block md:inline mt-2 md:mt-0">
              Handcrafted by <a href="https://www.boldblank.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors">BoldBlank</a>
            </span>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal 
        isOpen={isCertModalOpen} 
        onClose={() => setIsCertModalOpen(false)} 
      />
    </footer>
  );
}

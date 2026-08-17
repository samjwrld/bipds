import React, { useState } from 'react';
import { 
  Rocket, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  FileText, 
  DollarSign, 
  TrendingUp, 
  Lock, 
  Award, 
  Building2, 
  ExternalLink,
  ChevronDown,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { generateStartupAndCollegeFAQSchema, PAGE_SEO_DATA } from '../data/seoData';
import BrandMarquee from '../components/BrandMarquee';

export default function StartupsIP() {
  const [selectedEntity, setSelectedEntity] = useState<'dpiit' | 'standard'>('dpiit');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://ipdefensesolutions.com/' },
    { name: 'Startups IP Program', url: 'https://ipdefensesolutions.com/startups-ip' }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <SEOHead 
        customMeta={PAGE_SEO_DATA['/startups-ip']} 
        structuredData={generateStartupAndCollegeFAQSchema()}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 dark:bg-red-600/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/70 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-6 border border-red-200 dark:border-red-900 shadow-sm">
              <Rocket className="w-4 h-4 text-red-600 animate-bounce" />
              <span>DPIIT Startup IP Accelerator &amp; SIPP Facilitation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Claim <span className="text-red-600 dark:text-red-500">80% Patent Fee Rebates</span> &amp; Build Venture-Ready IP Moats
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Designed for seed to growth-stage Indian founders. Fast-track patent examination under <strong>Rule 24C Form 18A</strong>, software/AI protection under <strong>Section 3(k)</strong>, and ironclad 45-class trademark defenses.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-red-600/25 flex items-center justify-center cursor-pointer"
              >
                <span>Book Free Startup IP Audit</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#calculator"
                className="w-full sm:w-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500 text-slate-800 dark:text-slate-200 px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-sm flex items-center justify-center"
              >
                <span>Calculate 80% Savings</span>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <span className="text-xs text-slate-500 font-bold uppercase block">Official Rebate</span>
                <span className="text-xl font-bold text-red-600">80% Less Fee</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Under SIPP DPIIT Scheme</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <span className="text-xs text-slate-500 font-bold uppercase block">Speed to Grant</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white">Under 12 Mo.</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Via Form 18A Fast-Track</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <span className="text-xs text-slate-500 font-bold uppercase block">First-Pass Rate</span>
                <span className="text-xl font-bold text-green-600">98.4% Grants</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Zero-Defect Claim Drafting</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <span className="text-xs text-slate-500 font-bold uppercase block">VC Diligence</span>
                <span className="text-xl font-bold text-blue-600">100% Clean Moat</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">FTO &amp; Assignment Proof</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fee Savings Comparison Engine */}
      <section id="calculator" className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Official Indian Patent Office (CGPDTM) Statutory Fee Comparison
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              See how DPIIT recognition under Startup India dramatically slashes government filing fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-950">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
              {/* Standard Enterprise */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-4">
                  Standard Enterprise
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Large Corporate</h3>
                <p className="text-xs text-slate-500 mt-1">Non-DPIIT registered entities</p>
                <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span>Patent Filing (Form 1):</span>
                    <span className="font-bold text-slate-900 dark:text-white">₹8,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span>Early Publication (Form 9):</span>
                    <span className="font-bold text-slate-900 dark:text-white">₹12,500</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span>Examination (Form 18):</span>
                    <span className="font-bold text-slate-900 dark:text-white">₹20,000</span>
                  </div>
                  <div className="flex justify-between py-2 font-bold text-slate-900 dark:text-white text-base">
                    <span>Total Statutory Cost:</span>
                    <span>₹40,500</span>
                  </div>
                </div>
              </div>

              {/* DPIIT Recognized Startup */}
              <div className="p-8 bg-red-500/5 dark:bg-red-950/20 relative">
                <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-sm">
                  80% Subsidy
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                  DPIIT Startup India
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Recognized Startup</h3>
                <p className="text-xs text-slate-500 mt-1">With DPIIT Certificate &amp; SIPP</p>
                <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span>Patent Filing (Form 1):</span>
                    <span className="font-bold text-red-600 dark:text-red-400">₹1,600 (80% Off)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span>Early Publication (Form 9):</span>
                    <span className="font-bold text-red-600 dark:text-red-400">₹2,500 (80% Off)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                    <span>Expedited Exam (Form 18A):</span>
                    <span className="font-bold text-red-600 dark:text-red-400">₹8,000 (Fast Track)</span>
                  </div>
                  <div className="flex justify-between py-2 font-bold text-red-600 dark:text-red-400 text-base">
                    <span>Total Statutory Cost:</span>
                    <span>₹12,100</span>
                  </div>
                </div>
              </div>

              {/* Startup Value Delivered */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
                    Founder ROI
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Why It Matters</h3>
                  <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Re-invest saved statutory capital into core engineering &amp; marketing.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Secures official patent pending priority date across all 157 PCT countries.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>VC Due Diligence ready with full founder assignment chains.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Link
                    to="/consultation"
                    className="w-full inline-flex items-center justify-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-red-600 dark:hover:bg-red-500 dark:hover:text-white py-3 rounded-xl text-xs font-bold transition-all"
                  >
                    Start DPIIT Patent Application <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars for Tech & SaaS Startups */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
              The 4 Core IP Assets Every Indian Startup Needs
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
              Protect your software architecture, brand identity, user interface, and trade secrets before raising external capital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Section 3(k) AI &amp; Software Patents</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Draft claims with demonstrable technical effect, hardware synchronization, and processing efficiency to breeze through Indian Patent Office CRI scrutiny.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Trademark Class 9, 35 &amp; 42 Moats</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Protect brand name, logos, and SaaS delivery platforms against copycats with 50% statutory fee concessions for startups.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center mb-5">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Source Code &amp; Algorithm Copyright</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Official registration of core codebase, backend schemas, and UI design assets with the Copyright Office of India.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-950/60 text-green-600 flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">VC Due Diligence &amp; FTO Clean Chit</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Clear Freedom-to-Operate (FTO) reports, clean founder assignment agreements, and pre-fundraise IP valuation audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <div className="mb-16">
        <BrandMarquee />
      </div>

      {/* FAQ Section */}
      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions by Indian Startup Founders
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Clear, authoritative answers to patent costs, DPIIT certificates, and software IP in India.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How does a startup qualify for the 80% patent fee rebate in India?",
              a: "Your entity must hold a valid DPIIT Certificate of Recognition issued under the Startup India initiative. When filing Forms 1, 9, 18, or 18A, we attach Form 28 along with your DPIIT certificate to automatically claim the 80% statutory fee concession."
            },
            {
              q: "Can software code or AI algorithms be patented under Indian Law?",
              a: "Under Section 3(k) of the Patents Act, algorithms or computer programs 'per se' are non-patentable. However, if your software provides a technical solution to a technical problem, exhibits novel hardware synergy, or demonstrates tangible data-flow optimization, it is fully patentable under CGPDTM CRI guidelines."
            },
            {
              q: "What is Form 18A Expedited Examination for Startups?",
              a: "Form 18A allows DPIIT-recognized startups to skip the typical 3-4 year examination queue. The First Examination Report (FER) is typically issued within 105 days, enabling patent grant in as little as 8 to 12 months."
            },
            {
              q: "When should a startup file a provisional patent specification?",
              a: "You must file a provisional application BEFORE publicly launching, demoing at hackathons, publishing research papers, or pitching to investors without an NDA. This establishes your official international priority date."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 flex items-center justify-between font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 hover:text-red-600 transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown className={`w-4 h-4 ml-2 transform transition-transform ${activeFaq === idx ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-3xl p-10 md:p-14 text-white text-center shadow-xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-display font-bold mb-4">
            Protect Your Startup's Core Invention Today
          </h2>
          <p className="text-red-100 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Speak directly with a registered Indian patent agent. Get a free preliminary prior art novelty search and 80% DPIIT subsidy assessment under strict NDA.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/consultation"
              className="bg-white text-red-600 hover:bg-slate-100 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              Schedule Free 30-Min Founder Audit
            </Link>
            <Link
              to="/jurisdictions"
              className="bg-red-800/80 hover:bg-red-800 text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all border border-red-400/30"
            >
              Check My Territorial Patent Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

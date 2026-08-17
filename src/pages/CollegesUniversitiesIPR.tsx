import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Users, 
  Building2, 
  BookOpen, 
  TrendingUp, 
  Scale, 
  ShieldCheck, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO_DATA, generateOrganizationSchema } from '../data/seoData';
import BrandMarquee from '../components/BrandMarquee';

export default function CollegesUniversitiesIPR() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://ipdefensesolutions.com/' },
    { name: 'Colleges & Universities IPR Hub', url: 'https://ipdefensesolutions.com/colleges-universities-ipr' }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <SEOHead 
        customMeta={PAGE_SEO_DATA['/colleges-universities-ipr']} 
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 dark:bg-red-600/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/70 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-6 border border-red-200 dark:border-red-900 shadow-sm">
              <GraduationCap className="w-4 h-4 text-red-600 animate-pulse" />
              <span>Institutional IPR &amp; Academic Innovation Moats</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Accelerate <span className="text-red-600 dark:text-red-500">NIRF &amp; NAAC Scores</span> Through Campus Patent Ecosystems
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We partner with Vice-Chancellors, Principals, and R&amp;D Deans across India to establish Technology Transfer Offices (TTOs), facilitate AICTE KAPILA funding, and convert student &amp; faculty research into granted patents.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/consultation"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-red-600/25 flex items-center justify-center cursor-pointer"
              >
                <span>Establish Campus IPR Cell (MoU)</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/institutions"
                className="w-full sm:w-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500 text-slate-800 dark:text-slate-200 px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-sm flex items-center justify-center"
              >
                <span>Explore Institutional TTO Services</span>
              </Link>
            </div>

            {/* Academic Impact Metrics */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <span className="text-xs text-slate-500 font-bold uppercase block">Partner Colleges</span>
                <span className="text-xl font-bold text-red-600">50+ Institutions</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">NIRF &amp; NAAC A++ Ranked</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <span className="text-xs text-slate-500 font-bold uppercase block">Campus Patents</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white">650+ Filed</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Faculty &amp; Student Inventions</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <span className="text-xs text-slate-500 font-bold uppercase block">Government Scheme</span>
                <span className="text-xl font-bold text-green-600">AICTE KAPILA</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">100% Fee Reimbursement</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <span className="text-xs text-slate-500 font-bold uppercase block">Renewal Concession</span>
                <span className="text-xl font-bold text-blue-600">100% Rebate</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Under Patent Rules 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NIRF & NAAC Accreditation Acceleration Engine */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Direct Impact on Institutional Ranking &amp; Accreditation Metrics
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              Transform dormant classroom and lab projects into quantifiable ranking parameters recognized by MHRD and UGC.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NIRF Ranking Parameter */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/70 text-red-600 flex items-center justify-center font-bold">
                    NIRF
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Research &amp; Professional Practice (RPP)</h3>
                    <span className="text-xs text-slate-500 font-semibold">100 Maximum Weightage Marks</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  NIRF allocates substantial points for <strong>IPR and Patents Published (IPR_P)</strong> and <strong>Patents Granted (IPR_G)</strong> over the preceding 3 academic assessment years.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multi-departmental patent filing schedules to ensure continuous yearly grants.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Official IPO application receipts for immediate NIRF portal verification upload.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">NIRF MoE Compliance</span>
                <span className="font-bold text-red-600 dark:text-red-400">Score Multiplier Active</span>
              </div>
            </div>

            {/* NAAC Criterion 3 */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-600 flex items-center justify-center font-bold">
                    NAAC
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Criterion 3: Research, Innovations &amp; Extension</h3>
                    <span className="text-xs text-slate-500 font-semibold">Metrics 3.2.2 &amp; 3.3.2 IPR Deliverables</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  NAAC peer teams heavily scrutinize documented evidence of workshops on Intellectual Property Rights, industry technology transfers, and student innovation awards.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Complete documentation of NIPAM / IPR faculty development programs (FDP).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ready-to-present IPR Cell annual audit reports for NAAC Peer Review visits.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">NAAC A++ Target Metric</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">Criterion 3 Booster</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Academic IPR Partnership Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
              End-to-End Institutional TTO Engagement Model
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
              A hassle-free, legally sound turnkey mechanism for university leadership and research committees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Institutional MoU & IPR Policy",
                desc: "Drafting custom institutional IPR policy, defining 70:30 faculty/college royalty sharing, and establishing ownership protocols."
              },
              {
                step: "02",
                title: "Campus Ideation Hackathons",
                desc: "Conducting patent harvesting bootcamps across departments (CS, Mechanical, ECE, Biotech, Pharmacy) to screen novel inventions."
              },
              {
                step: "03",
                title: "Prior Art & Novelty Screening",
                desc: "Thorough clearance search using Indian & International patent databases to filter high-probability patentable disclosures."
              },
              {
                step: "04",
                title: "Patent Drafting & KAPILA Filing",
                desc: "Zero-defect provisional & complete claims drafted by registered patent agents with full AICTE KAPILA reimbursement paperwork."
              },
              {
                step: "05",
                title: "Commercialization & TTO",
                desc: "Connecting granted academic patents with industrial corporate partners for licensing royalties and incubation startup spin-offs."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm relative group hover:border-red-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-display font-bold text-red-600 dark:text-red-400 block mb-3">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Social Proof for Academic Institutions */}
      <div className="mb-16">
        <BrandMarquee />
      </div>

      {/* Frequently Asked Questions */}
      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions by Academic Leadership
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Essential guidelines for Vice-Chancellors, Principals, and R&amp;D Directors.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Who owns the patent filed from a college lab — the faculty or the institution?",
              a: "Under standard UGC and institutional IPR guidelines, if the invention utilizes university infrastructure, laboratory resources, or grant funding, the patent is jointly owned with the institution as the 'Applicant' and faculty/students listed as 'Inventors'. Commercial royalties are typically shared under a 70:30 or 60:40 framework."
            },
            {
              q: "What is the fee reduction for Educational Institutions under Patents (Amendment) Rules 2024?",
              a: "Under the latest Patents Rules 2024 amendments, educational institutions receive an 80% reduction on statutory filing fees and a 100% renewal fee concession, making long-term patent portfolio maintenance extremely affordable."
            },
            {
              q: "How does AICTE KAPILA Scheme reimburse patent costs for colleges?",
              a: "AICTE KAPILA provides financial assistance reimbursing government application and examination fees for patents filed by faculty and students of AICTE-approved institutions upon submission of official IPO receipts."
            },
            {
              q: "Can final-year student engineering projects be patented?",
              a: "Yes! High-quality capstone projects in AI, IoT, EV mobility, robotics, and biomedical devices frequently contain patentable hardware architectures and unique algorithmic methods. Filing a provisional patent prior to project exhibition secures institutional priority."
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
        <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl relative overflow-hidden border border-slate-800">
          <h2 className="text-2xl sm:text-4xl font-display font-bold mb-4">
            Partner With India's Leading Academic IPR Facilitator
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Schedule an institutional MoU briefing with our senior patent attorneys. We provide complete orientation sessions for your R&amp;D faculty and student innovators.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/consultation"
              className="bg-red-600 hover:bg-red-500 text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              Schedule Institutional Briefing
            </Link>
            <Link
              to="/authority-hub"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all border border-slate-700"
            >
              View UGC &amp; AICTE Statutory Guidelines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

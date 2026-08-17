import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, ShieldCheck, FileText, Search, Scale, Users, CheckCircle2, ArrowRight,
  Briefcase, Award, Building, Receipt, Rocket, Store, Utensils,
  Layers, Filter, Clock, FileCheck, DollarSign, HelpCircle, Check, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import SpotlightHoverCard from '../components/SpotlightHoverCard';

function ServiceSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800 animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
        </div>
        <div className="flex-grow space-y-6 w-full">
          <div className="space-y-3">
            <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-xl w-1/3"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/2"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-slate-200 dark:bg-slate-800 rounded-full flex-shrink-0"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-2/3"></div>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

type ServiceCategory = 'all' | 'patents' | 'trademarks' | 'copyrights' | 'compliance';

interface ServiceItem {
  id: string;
  category: ServiceCategory[];
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
  details: string[];
  documents?: string[];
  timeline?: string;
}

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const categoryTabs = [
    { id: 'all' as ServiceCategory, label: 'All Services', icon: Layers, count: 13 },
    { id: 'patents' as ServiceCategory, label: 'Patents', icon: Lightbulb, count: 4 },
    { id: 'trademarks' as ServiceCategory, label: 'Trademarks', icon: ShieldCheck, count: 4 },
    { id: 'copyrights' as ServiceCategory, label: 'Copyrights', icon: FileText, count: 3 },
    { id: 'compliance' as ServiceCategory, label: 'Corporate & Compliance', icon: Briefcase, count: 7 },
  ];

  const categoryHighlights = {
    patents: {
      title: "Specialized Patent Protection",
      description: "Safeguard your technical inventions, software algorithms, processes, and novel designs against unlawful reproduction with robust patent drafting and IPO filings.",
      timeline: "12 - 24 Months (Fast-track 6-8 mos for Startups)",
      validity: "20 Years from filing date",
      rebate: "Up to 80% discount on IPO official fees for Startups & MSMEs",
      documents: [
        "Invention Disclosure Form & Drawings",
        "Identity & Address Proof of Applicant & Inventors",
        "Form 1 (Application for Grant of Patent)",
        "Form 2 (Provisional/Complete Specification)",
        "DPIIT Recognition Certificate (for fee concession)"
      ],
      process: [
        { step: "01", name: "Novelty & Prior Art Search", detail: "Global patent database screening to ensure patentability." },
        { step: "02", name: "Provisional / Complete Draft", detail: "Technical specification and claims drafting by patent agents." },
        { step: "03", name: "IPO Filing & Priority Date", detail: "Filing application with Indian Patent Office for priority date." },
        { step: "04", name: "Examination & FER Response", detail: "Handling First Examination Report and IPO technical hearings." },
        { step: "05", name: "Grant & Patent Maintenance", detail: "Issuance of Patent Certificate and annuity fee management." }
      ]
    },
    trademarks: {
      title: "Brand & Trademark Registration",
      description: "Secure exclusive legal rights over your brand name, tagline, logo, shape, or sound mark across all 45 classes of goods and services.",
      timeline: "6 - 12 Months (Use ™ tag immediately after filing)",
      validity: "10 Years (Indefinitely renewable every 10 years)",
      rebate: "50% rebate on official TM-A fees for Individuals, MSMEs & Startups",
      documents: [
        "Logo Artwork / Brand Name Specification",
        "User Affidavit (if brand is already in commercial use)",
        "Incorporation Certificate / Applicant Identity Proof",
        "Form TM-M (Power of Attorney for Trademark Agent)"
      ],
      process: [
        { step: "01", name: "Comprehensive TM Search", detail: "Checking phonetic and visual similarity across all 45 classes." },
        { step: "02", name: "TM Application Filing", detail: "Filing TM-A with Trade Marks Registry to start using the ™ mark." },
        { step: "03", name: "Examination Response", detail: "Replying to official examination reports & objection notices." },
        { step: "04", name: "Trademark Journal Publication", detail: "4-month public advertisement for third-party opposition." },
        { step: "05", name: "® Certificate Issuance", detail: "Formal grant of Trademark Certificate and ® mark authorization." }
      ]
    },
    copyrights: {
      title: "Creative & Software Copyrights",
      description: "Establish legal ownership over your software source code, creative writings, artistic designs, sound recordings, and literary works.",
      timeline: "2 - 6 Months",
      validity: "Lifetime of Author + 60 Years",
      rebate: "International protection in 180+ countries under Berne Convention",
      documents: [
        "3 Copies of Original Work (or Source Code excerpts)",
        "Author & Applicant Identity Proofs",
        "No Objection Certificate (NOC) from Author/Publisher",
        "Statement of Particulars & Statement of Further Particulars"
      ],
      process: [
        { step: "01", name: "Categorization & Audit", detail: "Reviewing code or creative work for copyright eligibility." },
        { step: "02", name: "Filing with Copyright Office", detail: "Submitting Application Form IV with necessary attachments." },
        { step: "03", name: "30-Day Mandatory Wait", detail: "Public notice period for any third-party objections." },
        { step: "04", name: "Examination & Review", detail: "Copyright examiner checks compliance and originality." },
        { step: "05", name: "Extract from Register (ROC)", detail: "Issuance of formal Copyright Certificate." }
      ]
    },
    compliance: {
      title: "Corporate Incorporation & Legal Compliance",
      description: "Turn your startup into a legal entity and stay fully compliant with ROC, GST, Labor, and MSME regulations with expert secretarial assistance.",
      timeline: "1 - 7 Working Days",
      validity: "Annual Renewal & Statutory Maintenance",
      rebate: "Access to Collateral-free loans, Tax exemptions & Govt Tenders",
      documents: [
        "Director Identity & Address Proofs (PAN, Aadhaar, Passport)",
        "Registered Office Proof (Utility Bill + Rent Agreement/NOC)",
        "Digital Signature Certificate (DSC)",
        "Cancelled Cheque for Bank Account opening"
      ],
      process: [
        { step: "01", name: "Name Reservation (RUN/SPICe+)", detail: "Securing unique business name with MCA." },
        { step: "02", name: "SPICe+ Part B Incorporation", detail: "PAN, TAN, EPFO, ESIC, Professional Tax & Bank A/C allotment." },
        { step: "03", name: "Tax Registrations (GST/MSME)", detail: "Filing for GSTIN, Udyam, and DPIIT Recognition." },
        { step: "04", name: "Statutory Compliances", detail: "Managing annual ROC returns, GST filings, and audits." }
      ]
    }
  };

  const services: ServiceItem[] = [
    {
      id: 'patent-filing',
      category: ['patents'],
      icon: Lightbulb,
      title: "Patent Filing Services",
      badge: "Popular for Tech & Hardware",
      description: "Comprehensive patent services for startups, research institutions, and enterprises. We guide you from technical invention disclosures to final patent grant.",
      timeline: "12 - 24 Months (Fast Track Available)",
      details: [
        "Prior Art Search & Global Patentability Analysis",
        "Provisional & Complete Specification Drafting",
        "Filing with Indian Patent Office (IPO)",
        "International PCT Filing & National Phase Entry",
        "Office Action Responses & Examiner Hearings"
      ],
      documents: [
        "Invention Disclosure Document",
        "Technical Flowcharts & CAD Drawings",
        "Applicant & Inventor ID Proofs",
        "Form 1, Form 2, Form 3, and Form 5"
      ]
    },
    {
      id: 'trademark-reg',
      category: ['trademarks'],
      icon: ShieldCheck,
      title: "Trademark Registration",
      badge: "Instant ™ Badge",
      description: "Protect your brand identity, business name, logo, and slogan. Our trademark attorneys ensure your brand remains exclusively yours against copycats.",
      timeline: "6 - 12 Months",
      details: [
        "Comprehensive Phonetic & Visual TM Search",
        "NICE Classification Class Selection Strategy",
        "Response to Examination Reports & Objections",
        "Opposition & Rectification Proceedings",
        "Trademark Renewal & Maintenance"
      ],
      documents: [
        "Brand Logo PNG/JPEG",
        "User Affidavit (if logo in prior use)",
        "Incorporation Cert / Aadhaar",
        "Form TM-M Authorization"
      ]
    },
    {
      id: 'copyright-protect',
      category: ['copyrights'],
      icon: FileText,
      title: "Copyright Protection",
      badge: "Software & Creative Code",
      description: "Secure your creative works including software code, literature, music, videos, and artwork. Prevent unauthorized duplication and distribution.",
      timeline: "2 - 6 Months",
      details: [
        "Copyright Registration for Software & Source Code",
        "Protection for Literary, Visual & Artistic Works",
        "Cinematograph Film & Sound Recording Rights",
        "Copyright Infringement & Cease-and-Desist Notices",
        "Licensing, Royalty & Assignment Agreements"
      ],
      documents: [
        "First & Last 20 Lines of Source Code",
        "Author NOC & Assignment Deed",
        "Statement of Particulars",
        "Applicant Identity Proof"
      ]
    },
    {
      id: 'design-reg',
      category: ['patents', 'trademarks'],
      icon: Search,
      title: "Industrial Design Registration",
      description: "Protect the aesthetic look, shape, pattern, and feel of your physical product. Secure your industrial designs against imitation.",
      timeline: "3 - 6 Months",
      details: [
        "Novelty & Prior Art Search for Designs",
        "Preparation of 6-View Product Drawings",
        "Filing Design Applications with Design Office",
        "Handling Examination Objections & Hearings",
        "Design Portfolio Management & Enforcement"
      ],
      documents: [
        "6-Side Perspective View Drawings / Photos",
        "Product Statement of Novelty",
        "Applicant Entity Proof"
      ]
    },
    {
      id: 'ip-litigation',
      category: ['patents', 'trademarks', 'copyrights'],
      icon: Scale,
      title: "IP Litigation & Enforcement",
      badge: "Legal Defense",
      description: "Robust legal defense and enforcement for your intellectual property rights. We handle infringement disputes, court suits, and cease-and-desist actions.",
      details: [
        "Cease & Desist Legal Notices",
        "Infringement Suit Filing & Defense in High Courts",
        "Mediation, Arbitration & Out-of-Court Dispute Resolution",
        "Anti-Counterfeiting Raids & Customs Enforcement",
        "IP Due Diligence for Mergers & Acquisitions"
      ]
    },
    {
      id: 'startup-strategy',
      category: ['patents', 'trademarks', 'compliance'],
      icon: Users,
      title: "Startup IP Strategy & Valuation",
      badge: "Valuation Boost",
      description: "Tailored IP roadmaps for startups to maximize company valuation, secure venture capital funding, and build an unassailable market moat.",
      details: [
        "IP Portfolio Valuation & Legal Audit",
        "Freedom to Operate (FTO) Search & Clearance",
        "Competitor IP Landscape Analysis",
        "Investor Due Diligence Support",
        "IP Policy Formulation for Employees & Vendors"
      ]
    },
    {
      id: 'labor-compliance',
      category: ['compliance'],
      icon: Briefcase,
      title: "Labor Compliances",
      description: "Ensure your business adheres to all labor laws and statutory regulations. We handle the complexities of labor compliance so you can focus on scale.",
      timeline: "3 - 5 Working Days",
      details: [
        "PF & ESI Registration & Monthly Filings",
        "Contract Labor Licensing",
        "Shop & Establishment Act Registration",
        "Professional Tax Compliance & Filings",
        "Audit & Advisory on Labor Laws & POSH"
      ]
    },
    {
      id: 'iso-services',
      category: ['compliance'],
      icon: Award,
      title: "ISO Certification Services",
      description: "Get certified with international standards to enhance your brand's global credibility, trust, and operational efficiency.",
      timeline: "5 - 10 Working Days",
      details: [
        "ISO 9001:2015 (Quality Management System)",
        "ISO 27001 (Information Security Management)",
        "ISO 14001 (Environmental Management System)",
        "Gap Analysis & Documentation Support",
        "Internal Audit & Final Certification Assistance"
      ]
    },
    {
      id: 'company-reg',
      category: ['compliance'],
      icon: Building,
      title: "Company Incorporation & Compliances",
      badge: "1-Week Turnaround",
      description: "End-to-end support for incorporating your company and maintaining seamless annual statutory ROC compliances.",
      timeline: "3 - 7 Working Days",
      details: [
        "Private Limited Company & OPC Incorporation",
        "LLP & Partnership Firm Registration",
        "Annual ROC Filings, AOC-4 & MGT-7 Maintenance",
        "Director Identification Number (DIN) & DSC Services",
        "Drafting MOA, AOA & Shareholders Agreements"
      ]
    },
    {
      id: 'gst-services',
      category: ['compliance'],
      icon: Receipt,
      title: "GST Registration & Filings",
      description: "Hassle-free GST services including new registrations, monthly returns (GSTR-1, GSTR-3B), and annual reconciliations.",
      timeline: "2 - 4 Working Days",
      details: [
        "New GST Registration Certificate",
        "Monthly & Quarterly GSTR Return Filings",
        "GST Annual Return (GSTR-9 & 9C)",
        "GST Export Refund Processing",
        "Legal Representation in GST Audits & Notices"
      ]
    },
    {
      id: 'startup-reg',
      category: ['compliance'],
      icon: Rocket,
      title: "Startup India Registration (DPIIT)",
      badge: "Tax Exemption",
      description: "Get officially recognized by DPIIT to avail tax benefits, patent fee concessions, funding opportunities, and simplified compliance norms.",
      timeline: "2 - 5 Working Days",
      details: [
        "DPIIT Startup Recognition Certificate",
        "Startup India Portal Profile Setup",
        "Section 80-IAC Income Tax Exemption Support",
        "Self-Certification under Labor & Environmental Laws",
        "Fast-Track Patent Application & 80% Fee Concession"
      ]
    },
    {
      id: 'msme-reg',
      category: ['compliance'],
      icon: Store,
      title: "MSME Udyam Registration",
      description: "Register under Udyam to access government schemes, subsidies, priority sector lending, and protection against delayed payments.",
      timeline: "1 Working Day",
      details: [
        "Instant Udyam Registration Certificate",
        "Benefits under MSME Samadhaan (Delayed Payment Portal)",
        "Subsidies on Patent & Trademark Filing Fees",
        "Access to Government E-Marketplace (GeM) Tenders",
        "Collateral-Free Credit Guarantee Scheme (CGTMSE)"
      ]
    },
    {
      id: 'fssai-license',
      category: ['compliance'],
      icon: Utensils,
      title: "Food License (FSSAI)",
      description: "Mandatory food safety registration for all food manufacturers, cloud kitchens, exporters, and distributors.",
      timeline: "3 - 7 Working Days",
      details: [
        "FSSAI Basic Registration Certificate",
        "FSSAI State & Central License Processing",
        "Annual FSSAI Return Filings",
        "Modification & Renewal of Existing License",
        "Food Safety Hygiene Audit & Compliance Checklist"
      ]
    }
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      activeCategory === 'all' ? true : service.category.includes(activeCategory);
    
    const matchesQuery =
      searchQuery.trim() === ''
        ? true
        : service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

  const currentCategoryHighlight = activeCategory !== 'all' ? categoryHighlights[activeCategory as keyof typeof categoryHighlights] : null;

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-red-100 dark:border-slate-800 text-red-600 dark:text-red-400 text-sm font-bold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" /> Complete IP & Corporate Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Our Specialized <span className="text-red-600 dark:text-red-500">Services</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Protect your intellectual assets and ensure full legal compliance. Filter by category to explore specialized processes, requirements, and document checklists.
          </p>
        </div>

        {/* Filter Controls & Category Toggles */}
        <div className="mb-12 space-y-6">
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800">
            {categoryTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`ml-1 text-xs px-2 py-0.5 rounded-full font-semibold ${
                      isActive
                        ? 'bg-red-700/80 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Active Count Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-100 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800">
            <div className="relative w-full sm:w-96">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. PCT, Trademark, GST, Code)..."
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <Filter className="w-3.5 h-3.5 text-red-500" />
              <span>Showing <strong>{filteredServices.length}</strong> of <strong>{services.length}</strong> services</span>
              {activeCategory !== 'all' && (
                <button
                  onClick={() => setActiveCategory('all')}
                  className="ml-2 text-red-600 dark:text-red-400 hover:underline cursor-pointer"
                >
                  Reset Filter
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Specialized Details Highlight Card (When a specific category like Patents/Trademarks/Copyrights/Compliance is selected) */}
        <AnimatePresence mode="wait">
          {currentCategoryHighlight && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mb-12 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 dark:from-slate-900 dark:to-slate-950 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-800 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                      Specialized Breakdown
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                      {currentCategoryHighlight.title}
                    </h2>
                    <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                      {currentCategoryHighlight.description}
                    </p>
                  </div>

                  <Link
                    to="/consultation"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-bold transition-all shadow-lg shadow-red-600/30 whitespace-nowrap self-start md:self-auto"
                  >
                    Consult an Expert <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-4">
                    <div className="flex items-center text-xs font-medium text-slate-400 mb-1">
                      <Clock className="w-4 h-4 text-red-400 mr-2" /> Timeline
                    </div>
                    <div className="text-sm font-bold text-white">{currentCategoryHighlight.timeline}</div>
                  </div>

                  <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-4">
                    <div className="flex items-center text-xs font-medium text-slate-400 mb-1">
                      <FileCheck className="w-4 h-4 text-green-400 mr-2" /> Validity
                    </div>
                    <div className="text-sm font-bold text-white">{currentCategoryHighlight.validity}</div>
                  </div>

                  <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-4">
                    <div className="flex items-center text-xs font-medium text-slate-400 mb-1">
                      <DollarSign className="w-4 h-4 text-amber-400 mr-2" /> Govt Concession / Benefits
                    </div>
                    <div className="text-sm font-bold text-white">{currentCategoryHighlight.rebate}</div>
                  </div>
                </div>

                {/* Documents & Process Flow */}
                <div className="grid md:grid-cols-2 gap-8 pt-2">
                  {/* Documents Required */}
                  <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-800">
                    <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-4 flex items-center">
                      <FileText className="w-4 h-4 mr-2" /> Essential Documents Needed
                    </h3>
                    <ul className="space-y-2.5 text-sm text-slate-300">
                      {currentCategoryHighlight.documents.map((doc, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step-by-Step Flow */}
                  <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-800">
                    <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-4 flex items-center">
                      <HelpCircle className="w-4 h-4 mr-2" /> Step-by-Step Filing Workflow
                    </h3>
                    <div className="space-y-3">
                      {currentCategoryHighlight.process.map((p, i) => (
                        <div key={i} className="flex items-start space-x-3 text-xs">
                          <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-red-500/20 text-red-400 font-bold flex items-center justify-center text-[10px]">
                            {p.step}
                          </span>
                          <div>
                            <span className="font-bold text-slate-200 block">{p.name}</span>
                            <span className="text-slate-400">{p.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Services List */}
        <div className="grid gap-8">
          {isLoading ? (
            <>
              <ServiceSkeleton />
              <ServiceSkeleton />
              <ServiceSkeleton />
            </>
          ) : filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
              <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No matching services found</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">Try clearing your search or switching filter categories.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-red-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <SpotlightHoverCard className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-red-50 dark:bg-red-950/60 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-10 h-10 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center space-x-2">
                          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">
                            {service.title}
                          </h2>
                          {service.badge && (
                            <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold">
                              {service.badge}
                            </span>
                          )}
                        </div>

                        {service.timeline && (
                          <div className="inline-flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                            <Clock className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                            {service.timeline}
                          </div>
                        )}
                      </div>

                      <p className="text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {service.details.map((detail, i) => (
                          <div key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Required Documents Pill Checklist (if present) */}
                      {service.documents && (
                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                            Key Documents Needed:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.documents.map((doc, di) => (
                              <span
                                key={di}
                                className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium"
                              >
                                <FileCheck className="w-3 h-3 text-red-500 mr-1.5" />
                                {doc}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-4">
                        <Link
                          to="/consultation"
                          className="inline-flex items-center text-red-600 dark:text-red-400 font-bold hover:text-red-700 dark:hover:text-red-300 transition-colors text-sm"
                        >
                          Get Started with {service.title} <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Link>

                        <span className="text-xs text-slate-400 dark:text-slate-500">
                          100% Confidential • Official IPO/Govt Filing
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightHoverCard>
              </motion.div>
            ))
          )}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 text-center bg-slate-900 dark:bg-slate-900/90 border border-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold mb-4">Unsure which IP or Compliance Service you need?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-base">
              Speak directly with our senior IP attorneys and corporate consultants to perform a free preliminary search and strategy session.
            </p>
            <Link to="/consultation" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-red-600/30 inline-flex items-center">
              Book Free 1-on-1 Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

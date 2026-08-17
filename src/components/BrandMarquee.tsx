import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Lock,
  Search,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PartnerBrand {
  name: string;
  category: 'institution' | 'startup' | 'enterprise';
  categoryLabel: string;
  type: string;
  logo: string;
  location: string;
  protectedAsset: string;
  ipCount?: string;
  badgeColor?: string;
}

export const INSTITUTIONAL_PARTNERS: PartnerBrand[] = [
  {
    name: "CV Raman Global University",
    category: "institution",
    categoryLabel: "Academic Institution",
    type: "NIRF Top 100 • NAAC A++",
    location: "Bhubaneswar, Odisha",
    protectedAsset: "45+ Patents & Tech Transfer Cell",
    ipCount: "45+ Patents",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "CMR Engineering College",
    category: "institution",
    categoryLabel: "Academic Institution",
    type: "Autonomous Engineering Hub",
    location: "Hyderabad, Telangana",
    protectedAsset: "Student IPR Incubator & 38 Patents",
    ipCount: "38 Patents",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "Malla Reddy Engineering College",
    category: "institution",
    categoryLabel: "Academic Institution",
    type: "Autonomous • NBA Accredited",
    location: "Secunderabad, Telangana",
    protectedAsset: "Faculty Research & Green Tech Patents",
    ipCount: "32 Patents",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "Spoorthy Engineering College",
    category: "institution",
    categoryLabel: "Academic Institution",
    type: "Robotics & AI Research Center",
    location: "Hyderabad, Telangana",
    protectedAsset: "Embedded Systems & IoT Claims",
    ipCount: "22 Patents",
    logo: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "Lords Institute of Engineering",
    category: "institution",
    categoryLabel: "Academic Institution",
    type: "Innovation & Incubation Hub",
    location: "Hyderabad, Telangana",
    protectedAsset: "Deep-Tech Patents & TTO Program",
    ipCount: "28 Patents",
    logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "CMR IT Engineering College",
    category: "institution",
    categoryLabel: "Academic Institution",
    type: "Computing & Data Sciences",
    location: "Hyderabad, Telangana",
    protectedAsset: "Software Algorithm Specifications",
    ipCount: "19 Patents",
    logo: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "Malla Reddy Pharmacy College",
    category: "institution",
    categoryLabel: "Academic Institution",
    type: "Pharmaceutical Research Cell",
    location: "Hyderabad, Telangana",
    protectedAsset: "Formulation & Composition Patents",
    ipCount: "15 Patents",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "CBIT Innovation Research Cell",
    category: "institution",
    categoryLabel: "Academic Institution",
    type: "Autonomous Technical Institute",
    location: "Gandipet, Telangana",
    protectedAsset: "Mechanical & EV Mobility Inventions",
    ipCount: "24 Patents",
    logo: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=120&h=120&fit=crop&auto=format"
  }
];

export const STARTUP_BRAND_PARTNERS: PartnerBrand[] = [
  {
    name: "Ananth Diamonds",
    category: "enterprise",
    categoryLabel: "Luxury Retail & Design",
    type: "High-End Jewelry Brand",
    location: "Pan-India",
    protectedAsset: "Class 14 Trademarks & Industrial Designs",
    ipCount: "Trademark Moat",
    logo: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "RS Entertainments",
    category: "enterprise",
    categoryLabel: "Media & Production",
    type: "Feature Film & OTT Studio",
    location: "Hyderabad & Chennai",
    protectedAsset: "Copyright Registry & Script Titles",
    ipCount: "Copyright Moat",
    logo: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "V6 News Network",
    category: "enterprise",
    categoryLabel: "Broadcast Media",
    type: "Satellite & Digital Media",
    location: "Telangana & AP",
    protectedAsset: "Class 38 & 41 Broadcaster Marks",
    ipCount: "Media Defense",
    logo: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "Sowbhagya Organics",
    category: "startup",
    categoryLabel: "Agri-Biotech & D2C",
    type: "DPIIT Recognized Startup",
    location: "Vijayawada, AP",
    protectedAsset: "Bio-Fertilizer Formulation Patent",
    ipCount: "Biotech Patent",
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "Ministry of Coffee Affairs",
    category: "enterprise",
    categoryLabel: "FMCG & Specialty F&B",
    type: "Artisanal Coffee Chain",
    location: "Hyderabad & Bengaluru",
    protectedAsset: "Brand Identity & Franchise Trade Dress",
    ipCount: "Class 30 & 43",
    logo: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "Babai Hotel Heritage",
    category: "enterprise",
    categoryLabel: "Culinary Heritage",
    type: "Iconic Regional Brand",
    location: "Vijayawada & Hyderabad",
    protectedAsset: "Historical Word Mark Defense",
    ipCount: "Registered ®",
    logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "President Dhaba",
    category: "enterprise",
    categoryLabel: "Hospitality & Dining",
    type: "Highway & Urban Dining Chain",
    location: "Multi-State Presence",
    protectedAsset: "Trademarks & Recipe Trade Secrets",
    ipCount: "Trademark Fleet",
    logo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "Kadapa Ruchulu",
    category: "enterprise",
    categoryLabel: "Packaged Foods",
    type: "D2C Regional Delicacies",
    location: "Kadapa & Global Exports",
    protectedAsset: "Packaging Design & Class 29, 30 Marks",
    ipCount: "Multi-Class ®",
    logo: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "Mr. 9T Apparel",
    category: "startup",
    categoryLabel: "D2C Fashion Tech",
    type: "E-Commerce Lifestyle Label",
    location: "Bengaluru & Mumbai",
    protectedAsset: "Class 25 Garment Trademark & Logo",
    ipCount: "Registered Brand",
    logo: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=120&h=120&fit=crop&auto=format"
  },
  {
    name: "Murugan Food Solutions",
    category: "enterprise",
    categoryLabel: "Food Processing",
    type: "Automated Kitchen Equipments",
    location: "Chennai & Madurai",
    protectedAsset: "Commercial Batter Grinding Utility Patent",
    ipCount: "Utility Patent",
    logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120&h=120&fit=crop&auto=format"
  }
];

export default function BrandMarquee() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'institutions' | 'startups'>('all');
  const [hoveredBrand, setHoveredBrand] = useState<PartnerBrand | null>(null);

  // Duplicating arrays to create 100% seamless CSS-driven infinite loop
  const duplicatedInstitutions = [...INSTITUTIONAL_PARTNERS, ...INSTITUTIONAL_PARTNERS];
  const duplicatedStartups = [...STARTUP_BRAND_PARTNERS, ...STARTUP_BRAND_PARTNERS];
  const allPartnersCombined = [
    ...INSTITUTIONAL_PARTNERS, 
    ...STARTUP_BRAND_PARTNERS, 
    ...INSTITUTIONAL_PARTNERS, 
    ...STARTUP_BRAND_PARTNERS
  ];

  return (
    <section 
      aria-label="Trusted By Industry Leaders & Institutions" 
      className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 border-y border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-200/60 dark:border-red-900/50 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span>Proven Social Proof &amp; Track Record</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Trusted By <span className="text-red-600 dark:text-red-500">500+ Innovators</span>, Startups &amp; Universities
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            From NAAC A++ accredited engineering colleges to high-velocity DPIIT startups, we build ironclad patent portfolios and unshakeable trademark moats.
          </p>

          {/* Key Proof Metrics Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600 dark:text-slate-300 font-semibold">
            <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <GraduationCap className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
              <span>50+ Institutional IPR Cells</span>
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
              <span>200+ DPIIT 80% Fee Rebates</span>
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Award className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
              <span>98.4% First-Pass Grant Rate</span>
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Lock className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              <span>100% Strict NDA Protection</span>
            </span>
          </div>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-900'
              }`}
            >
              All Clients &amp; Institutions (Dual Stream)
            </button>
            <button
              onClick={() => setActiveFilter('institutions')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'institutions'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-900'
              }`}
            >
              Academic Institutions ({INSTITUTIONAL_PARTNERS.length})
            </button>
            <button
              onClick={() => setActiveFilter('startups')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'startups'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-900'
              }`}
            >
              Startups &amp; Brands ({STARTUP_BRAND_PARTNERS.length})
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Container with CSS Infinite Scroll & Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden group-marquee">
        {/* Left Gradient Mask for Seamless Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-white via-white/80 dark:from-slate-950 dark:via-slate-950/80 to-transparent z-20 pointer-events-none" />
        
        {/* Right Gradient Mask for Seamless Fade Effect */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-white via-white/80 dark:from-slate-950 dark:via-slate-950/80 to-transparent z-20 pointer-events-none" />

        {/* Track 1: Forward Direction (Institutions & Colleges) */}
        {(activeFilter === 'all' || activeFilter === 'institutions') && (
          <div className="relative flex items-center py-2.5 overflow-hidden">
            <div className="flex w-max animate-marquee space-x-6 px-4">
              {(activeFilter === 'institutions' ? duplicatedInstitutions : duplicatedInstitutions).map((brand, idx) => (
                <div
                  key={`track1-${idx}`}
                  onMouseEnter={() => setHoveredBrand(brand)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className="flex items-center space-x-3.5 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-850 px-5 py-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-red-500/40 dark:hover:border-red-500/40 transition-all duration-300 group cursor-pointer flex-shrink-0"
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex-shrink-0 relative shadow-inner">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                      referrerPolicy="no-referrer"
                      loading="lazy" 
                    />
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors whitespace-nowrap">
                        {brand.name}
                      </span>
                      {brand.ipCount && (
                        <span className="px-2 py-0.5 rounded-md bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-[10px] font-bold tracking-tight">
                          {brand.ipCount}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      <span>{brand.type}</span>
                      <span>•</span>
                      <span className="text-slate-400 dark:text-slate-500">{brand.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Track 2: Reverse Direction (Startups & Commercial Brands) */}
        {(activeFilter === 'all' || activeFilter === 'startups') && (
          <div className="relative flex items-center py-2.5 overflow-hidden mt-2">
            <div className="flex w-max animate-marquee-reverse space-x-6 px-4">
              {(activeFilter === 'startups' ? duplicatedStartups : duplicatedStartups).map((brand, idx) => (
                <div
                  key={`track2-${idx}`}
                  onMouseEnter={() => setHoveredBrand(brand)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className="flex items-center space-x-3.5 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-850 px-5 py-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-red-500/40 dark:hover:border-red-500/40 transition-all duration-300 group cursor-pointer flex-shrink-0"
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex-shrink-0 relative shadow-inner">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                      referrerPolicy="no-referrer" 
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors whitespace-nowrap">
                        {brand.name}
                      </span>
                      {brand.ipCount && (
                        <span className="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-[10px] font-bold tracking-tight">
                          {brand.ipCount}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      <span>{brand.categoryLabel}</span>
                      <span>•</span>
                      <span className="text-slate-400 dark:text-slate-500">{brand.protectedAsset}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hover Instruction & Action CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <span className="flex items-center italic">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
          Hover over any partner badge to pause the marquee and review their IP scope.
        </span>

        <div className="flex items-center space-x-4">
          <Link
            to="/institutions"
            className="font-bold text-red-600 dark:text-red-400 hover:underline flex items-center"
          >
            Academic IPR Programs <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
          <span>|</span>
          <Link
            to="/consultation"
            className="font-bold text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center"
          >
            Join Our Trusted Network <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export interface PageMeta {
  title: string;
  tagline: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
  structuredData?: Record<string, any>;
}

export const SITE_CONFIG = {
  siteName: 'Bharat IP Defence',
  officialLegalName: 'Bharat IP Defense Solutions Pvt. Ltd.',
  siteUrl: 'https://ipdefensesolutions.com',
  defaultOgImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
  contact: {
    phone: '+91 7799045557',
    email: 'support@ipdefensesolutions.com',
    headOffice: 'Villa no. 48, Mythri Lake view housing society, Mallampet, Bachupally, Hyderabad, Telangana 502325',
    panIndiaCoverage: 'Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Guntur, Bhubaneshwar, Vizag, Pune'
  },
  primaryTaglines: [
    { title: "Startups IP", tagline: "DPIIT 80% Patent Fee Concessions, Fast-Track Form 18A & Pitch-Ready IP Moats" },
    { title: "Colleges & Universities", tagline: "Campus IPR Cells, NAAC/NIRF Research Points & AICTE KAPILA Scheme Acceleration" },
    { title: "Patents", tagline: "Zero-Defect Patent Drafting & 98.4% First-Pass Grant Rate Under Patent Rules 2024" },
    { title: "Trademarks", tagline: "Ironclad Brand Moats Across All 45 NICE Trademark Classes & Hearing Defense" },
    { title: "Grehat Jurisdictions", tagline: "Territorial Patent Office Mapping Across Delhi, Mumbai, Chennai & Kolkata" }
  ]
};

// Comprehensive High-Intent Keyword Clusters for Indian Ecosystem
export const KEYWORD_CLUSTERS = {
  // STARTUP-SPECIFIC KEYWORDS (DPIIT, SIPP, FAST-TRACK, VC DUE DILIGENCE)
  startups: [
    'DPIIT recognized startup patent fee rebate 80 percent',
    'fast track patent examination Rule 24C Form 18A India',
    'startup intellectual property protection scheme SIPP facilitator',
    'provisional patent filing cost for startups in India',
    'software patent drafting Section 3k India for AI startups',
    'SaaS startup trademark registration Class 9 Class 42',
    'VC due diligence IP audit and patent portfolio valuation',
    'patent assignment and founder IP ownership agreement',
    'freedom to operate FTO search for venture funded startups',
    'seed stage startup patent attorneys Hyderabad Bangalore Delhi NCR',
    'fintech patent protection under Indian Patent Act',
    'deep tech patent filing for Indian startups'
  ],

  // ACADEMIC INSTITUTIONS, COLLEGES & UNIVERSITIES (NIRF, NAAC, KAPILA, TTO)
  collegesAndUniversities: [
    'college IPR cell setup and institutional patent policy India',
    'university technology transfer office TTO establishment',
    'NIRF ranking research parameter patent score optimization',
    'NAAC criterion 3 research innovation and extension IPR score',
    'AICTE KAPILA scheme patent funding assistance',
    'NIPAM National Intellectual Property Awareness Mission workshops',
    'student innovation patent drafting and filing grant',
    'faculty research patent incentive and 70-30 royalty sharing policy',
    'Patents Amendment Rules 2024 100 percent renewal fee rebate for colleges',
    'engineering college patent filing partner Hyderabad Telangana',
    'autonomous university patent filing assistance Karnataka Maharashtra Tamil Nadu',
    'DST SERB sponsored project patent commercialization'
  ],

  // CORE PATENT PROSECUTION (IPO & PCT)
  patents: [
    'patent filing in India IPO',
    'provisional patent specification drafting Form 1 Form 2',
    'complete patent specification with independent claims drafting',
    'prior art novelty search Indian Patent Advanced Search System IPASS',
    'software patent under Section 3k India CRI guidelines',
    'PCT international patent application India WIPO RO/IN',
    'FER First Examination Report response patent hearing',
    'patent attorneys in Hyderabad Bangalore Delhi Mumbai Chennai',
    'Form 27 statement of working patent compliance',
    'industrial design registration Form 1 6-view drawings'
  ],

  // TRADEMARK PORTFOLIO & DEFENSE
  trademarks: [
    'trademark registration India TM-A online',
    'trademark class search NICE classification 45 classes',
    'brand name TM registration online IPO India',
    'trademark objection reply Section 9 Section 11 hearing TM-M',
    'trademark hearing representation before Senior Examiner IPO',
    'Madrid Protocol international trademark filing WIPO India',
    'trademark opposition TM-O notice of opposition defense',
    'well-known trademark declaration Rule 124 India'
  ],

  // GEOGRAPHIC & GREHAT REGIONAL SEARCHES
  geographicZonal: [
    'patent attorneys in Hyderabad HITEC City Gachibowli Mallampet',
    'patent lawyers in Bangalore Koramangala Whitefield HSR Layout',
    'patent law firm Delhi NCR Gurgaon Noida Dwarka',
    'patent consultants Mumbai BKC Pune Hinjewadi IT Park',
    'patent office Chennai Guindy OMR tech corridor',
    'patent filing Kolkata Salt Lake Sector V Bhubaneswar',
    'patent agents in Andhra Pradesh Vijayawada Guntur Vizag',
    'territorial patent office Grehat mapping Rule 4 Patents Rules'
  ],

  // STATUTORY & AUTHORITY CITATIONS
  authoritativeCitations: [
    'Controller General of Patents CGPDTM official guidelines',
    'DPIIT Startup India IPR SIPP portal circulars',
    'WIPO PCT international patent treaty gazette',
    'AICTE MIC Innovation Cell KAPILA guidelines',
    'UGC Higher Education Institutional IPR Policy model',
    'Delhi High Court IPD rules patent appeals',
    'The Patents Amendment Rules 2024 Gazette GSR 190 E'
  ]
};

export const PAGE_SEO_DATA: Record<string, PageMeta> = {
  '/': {
    title: 'Bharat IP Defence | Premier Patent, Trademark & Institutional IPR Firm India',
    tagline: 'Empowering 500+ Startups, Universities & Innovators with Fast-Track Grants & 80% Fee Rebates',
    description: 'India’s premier Intellectual Property consulting firm. Specializing in zero-defect patent drafting, DPIIT 80% startup rebates, college IPR cell establishment for NIRF/NAAC, trademark moats, and territorial Grehat filing.',
    keywords: [
      ...KEYWORD_CLUSTERS.startups.slice(0, 4),
      ...KEYWORD_CLUSTERS.collegesAndUniversities.slice(0, 4),
      ...KEYWORD_CLUSTERS.patents.slice(0, 3),
      ...KEYWORD_CLUSTERS.geographicZonal.slice(0, 3)
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/',
    ogType: 'website'
  },
  '/startups-ip': {
    title: 'Startup IP Accelerator & DPIIT 80% Patent Fee Subsidy | Bharat IP Defence',
    tagline: 'Turn Disruptive Innovations into Venture-Fundable IP Moats with Fast-Track IPO Grants',
    description: 'Complete IP solutions for Indian startups: Claim 80% DPIIT patent fee rebates, fast-track Form 18A examination, software patent drafting under Section 3(k), seed-stage trademark moats, and VC due diligence audits.',
    keywords: [
      ...KEYWORD_CLUSTERS.startups,
      'startup patent accelerator India',
      'how to get 80 percent rebate on patent filing India',
      'fast track patent for AI startup',
      'SaaS trademark class 9 42 India'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/startups-ip',
    ogType: 'website'
  },
  '/colleges-universities-ipr': {
    title: 'University & College IPR Cells | NIRF, NAAC Score & KAPILA Scheme Partner',
    tagline: 'Transforming Academic Research into Commercial Patents, Institutional Moats & NIRF Points',
    description: 'Empowering 50+ universities & engineering colleges across India: Setup institutional IPR cells, accelerate NIRF Research parameter & NAAC Criterion 3 scores, claim AICTE KAPILA grants, and draft zero-defect faculty/student patents.',
    keywords: [
      ...KEYWORD_CLUSTERS.collegesAndUniversities,
      'NIRF ranking patent score improvement consultants',
      'NAAC criterion 3 research IPR cell setup',
      'KAPILA funding for engineering colleges',
      'academic patent filing agency Hyderabad Bangalore Pune'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/colleges-universities-ipr',
    ogType: 'website'
  },
  '/authority-hub': {
    title: 'Statutory Authority & Backlinks Hub | Official IP India, WIPO, DPIIT & UGC Citations',
    tagline: 'Verified Statutory Gazettes, High Court Rules, Regulatory Frameworks & Government Portals',
    description: 'Explore verified statutory citations, gazette notifications (Patents Amendment Rules 2024), official CGPDTM links, Startup India SIPP schemes, UGC/AICTE IPR policies, and institutional citation directory.',
    keywords: [
      ...KEYWORD_CLUSTERS.authoritativeCitations,
      'Indian patent law official citations',
      'CGPDTM official portals ipindia',
      'Startup India SIPP official guidelines',
      'AICTE KAPILA scheme portal link',
      'Delhi High Court IPD rules gazette'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/authority-hub',
    ogType: 'website'
  },
  '/locations': {
    title: 'Pan-India IP Legal Hubs | Hyderabad, Bengaluru, Delhi NCR, Mumbai, Chennai, Kolkata',
    tagline: 'Comprehensive Regional IP Counsel Across All Indian Tech Hubs & Innovation Corridors',
    description: 'Bharat IP Defence regional hubs across India: Hyderabad (HITEC City & Bachupally), Bengaluru (Koramangala), Delhi NCR (Dwarka & Gurgaon), Mumbai (BKC), Pune (Hinjewadi), Chennai (Guindy & OMR), and Kolkata (Salt Lake).',
    keywords: [
      ...KEYWORD_CLUSTERS.geographicZonal,
      'patent attorneys near me India',
      'top patent law firm Hyderabad Bangalore Delhi',
      'trademark consultants in Mumbai Pune Chennai',
      'Indian patent office local filing support'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/locations',
    ogType: 'website'
  },
  '/about': {
    title: 'About Bharat IP Defence | Elite Patent Attorneys & Institutional IP Strategists',
    tagline: 'Bridging Groundbreaking Engineering with World-Class IP Jurisprudence Across India',
    description: 'Discover Bharat IP Defence: Registered Indian patent agents, trademark attorneys, and ex-examiners empowering 500+ tech startups, research universities, and enterprises with unshakeable IP moats.',
    keywords: [
      'patent attorneys in India',
      'registered Indian patent agents',
      'intellectual property law firm Hyderabad',
      'IP strategy consultants Bangalore Delhi',
      'IP litigation and audit specialists'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/about',
    ogType: 'website'
  },
  '/services': {
    title: 'Comprehensive IP Services | Patents, Trademarks, Copyrights & Startup Compliance',
    tagline: 'End-to-End Protection: From Inception to Granted Patent and Trademark Certificate',
    description: 'Explore our complete spectrum of IP services: Patent search & drafting, Trademark filing across 45 classes, Software Copyrights, Design Registration, Startup India DPIIT, and ISO Compliance.',
    keywords: [
      ...KEYWORD_CLUSTERS.patents,
      ...KEYWORD_CLUSTERS.trademarks,
      ...KEYWORD_CLUSTERS.startups.slice(0, 3)
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/services',
    ogType: 'website'
  },
  '/process': {
    title: 'Patent & Trademark Filing Process | Step-by-Step IPO & PCT Roadmap',
    tagline: 'Clear, Predictable & Transparent: From Invention Disclosure to Official Grant',
    description: 'Detailed step-by-step roadmap for filing patents and trademarks in India. Learn the 5 crucial phases: Prior Art Search, Drafting, IPO Filing, FER Response, and Certificate Grant.',
    keywords: [
      'patent filing process India',
      'how to file a patent step by step',
      'trademark application timeline IPO',
      'patent examination FER hearing roadmap',
      'fast track patent grant startup India'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/process',
    ogType: 'website'
  },
  '/institutions': {
    title: 'IP Solutions for Universities & Colleges | Academic TTO & E-Cells',
    tagline: 'Transforming Academic Research into Commercial Patents & Institutional Wealth',
    description: 'Comprehensive IPR cell establishment, student innovation protection, and faculty patent filing programs for universities, engineering colleges, and incubation hubs across India.',
    keywords: [
      ...KEYWORD_CLUSTERS.collegesAndUniversities,
      'college IPR cell setup India',
      'university patent filing assistance'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/institutions',
    ogType: 'website'
  },
  '/knowledge': {
    title: 'Knowledge Center | IP Guides, Section 3(k), Patent Law & Trademark Insights',
    tagline: 'Empowering Innovators with Actionable Legal & Technical IP Wisdom',
    description: 'Free comprehensive knowledge base featuring in-depth guides on patent drafting, software copyright, trademark objection remedies, Section 3(k), and startup legal compliance.',
    keywords: [
      'patent knowledge base India',
      'trademark registration guide',
      'software copyright law India',
      'startup IP mistakes to avoid',
      'Indian Patent Act Section 3k explanation'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/knowledge',
    ogType: 'website'
  },
  '/blog': {
    title: 'IP Defence Blog | Expert Analysis on Patents, Trademarks & Deep Tech',
    tagline: 'Cutting-Edge Articles on Indian & Global IP Jurisprudence and Startup Growth',
    description: 'Read the latest thought leadership on patent drafting, trademark strategy, DPIIT subsidies, Section 3(k) software patent eligibility, and international PCT routes.',
    keywords: [
      'intellectual property blog India',
      'patent law updates India 2026',
      'trademark filing tips for founders',
      'startup India DPIIT patent rebate guide',
      'deep tech patenting strategies'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/blog',
    ogType: 'website'
  },
  '/jurisdictions': {
    title: 'Grehat & Territorial Patent Jurisdictions Map | Indian Patent Office (CGPDTM)',
    tagline: 'Territorial Patent Office Mapping Across Delhi, Mumbai, Chennai & Kolkata',
    description: 'Find your official Indian Patent and Trademark Office filing jurisdiction under Patent Rules. Detailed territorial coverage for Delhi (North), Mumbai (West), Chennai (South), and Kolkata (East) Head Office.',
    keywords: [
      ...KEYWORD_CLUSTERS.geographicZonal,
      'patent office jurisdiction checker India',
      'which patent office to file India',
      'Delhi Mumbai Chennai Kolkata patent office addresses',
      'territorial jurisdiction patent act rule 4'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/jurisdictions',
    ogType: 'website'
  },
  '/sitemap': {
    title: 'Site Map & Semantic URL Directory | Bharat IP Defence',
    tagline: 'Complete Hierarchical Architecture of Services, Knowledge Bases, and Regional Hubs',
    description: 'Explore the complete directory of Bharat IP Defence pages, specialized IP services, regional jurisdiction maps, technical blogs, and download standard sitemap.xml.',
    keywords: [
      'Bharat IP Defence sitemap',
      'IP services directory',
      'patent trademark sitemap URLs',
      'intellectual property sitemap XML'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/sitemap',
    ogType: 'website'
  },
  '/testimonials': {
    title: 'Client Success Stories & Granted Patents | Bharat IP Defence',
    tagline: 'Over 500+ Innovators, Startups & Universities Protected Worldwide',
    description: 'See verified reviews and case studies from tech founders, research scholars, and enterprise CTOs who secured their patents, trademarks, and DPIIT rebates with Bharat IP Defence.',
    keywords: [
      'patent client reviews India',
      'trademark success stories',
      'startup patent testimonials',
      'granted patents showcase India'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/testimonials',
    ogType: 'website'
  },
  '/consultation': {
    title: 'Book Free 1-on-1 IP Consultation | Patent & Trademark Audit',
    tagline: 'Confidential 30-Minute IP Strategy Session with a Senior Patent Attorney',
    description: 'Schedule a free preliminary novelty search and confidential strategy session with our registered patent agents and trademark attorneys. Instant NDA protection.',
    keywords: [
      'free patent consultation India',
      'book trademark attorney consultation',
      'free novelty search consultation',
      'startup IP audit appointment'
    ],
    canonicalUrl: 'https://ipdefensesolutions.com/consultation',
    ogType: 'website'
  }
};

// Rich Schema.org structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': SITE_CONFIG.siteName,
    'legalName': SITE_CONFIG.officialLegalName,
    'url': SITE_CONFIG.siteUrl,
    'logo': `${SITE_CONFIG.siteUrl}/logo.svg`,
    'image': SITE_CONFIG.defaultOgImage,
    'description': PAGE_SEO_DATA['/'].description,
    'telephone': SITE_CONFIG.contact.phone,
    'email': SITE_CONFIG.contact.email,
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Villa no. 48, Mythri Lake view housing society, Mallampet, Bachupally',
      'addressLocality': 'Hyderabad',
      'addressRegion': 'Telangana',
      'postalCode': '502325',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '17.5164213',
      'longitude': '78.3693247'
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:00',
        'closes': '19:00'
      }
    ],
    'areaServed': [
      { '@type': 'Country', 'name': 'India' },
      { '@type': 'AdministrativeArea', 'name': 'Delhi NCR' },
      { '@type': 'AdministrativeArea', 'name': 'Telangana' },
      { '@type': 'AdministrativeArea', 'name': 'Karnataka' },
      { '@type': 'AdministrativeArea', 'name': 'Maharashtra' },
      { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' },
      { '@type': 'AdministrativeArea', 'name': 'West Bengal' },
      { '@type': 'AdministrativeArea', 'name': 'Andhra Pradesh' },
      { '@type': 'AdministrativeArea', 'name': 'Odisha' }
    ],
    'knowsAbout': [
      'Patent Drafting & Prosecution (IPO & PCT)',
      'DPIIT Startup India 80% Patent Fee Concessions',
      'University & College IPR Cell Establishment (NIRF/NAAC)',
      'Trademark Registration Across All 45 NICE Classes',
      'Software Copyright & Section 3(k) Defense',
      'AICTE KAPILA Scheme Facilitation',
      'Territorial Indian Patent Office Grehat Mapping'
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Intellectual Property & Institutional Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Startup IP Accelerator & DPIIT 80% Patent Fee Subsidy Program'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'University & College IPR Cell Establishment (NIRF & NAAC Research Scoring)'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Patent Search, Drafting & Fast-Track Form 18A Filing'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Trademark Registration & Opposition Management'
          }
        }
      ]
    }
  };
}

// Specialized Schema for Startup & College FAQ Rich Snippets
export function generateStartupAndCollegeFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do Indian Startups get an 80% discount on Patent Filing Fees?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Startups holding a valid DPIIT Recognition Certificate from Startup India are legally entitled to an 80% reduction on official statutory fees at the Indian Patent Office (CGPDTM). For example, the standard filing fee of ₹8,000 for large entities is reduced to ₹1,600 for recognized startups. They are also eligible for expedited examination under Rule 24C via Form 18A.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does an Institutional IPR Cell boost NIRF and NAAC rankings for Colleges?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Under NIRF (Research & Professional Practice - RPP parameter), granted and published patents directly increase the institutional score. In NAAC accreditation, Criterion 3 (Research, Innovations and Extension - Metrics 3.2 & 3.3) evaluates the number of registered IPR assets, technology transfer, and incubation support created by faculty and students.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can software and AI algorithms be patented in India under Section 3(k)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While computer programs per se or mathematical algorithms are excluded under Section 3(k), software inventions that produce a tangible technical effect, solve a hardware-integrated problem, or optimize system processing architecture are patentable in India according to CGPDTM Guidelines for Computer Related Inventions (CRIs).'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the AICTE KAPILA Scheme for Engineering Colleges?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The KAPILA (Kalam Program for IP Literacy and Awareness) scheme provides financial reimbursement for patent application fees filed by students and faculty in AICTE-approved higher educational institutions, encouraging a culture of academic invention.'
        }
      }
    ]
  };
}

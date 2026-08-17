export interface SiteMapNode {
  url: string;
  title: string;
  category: 'Core Pages' | 'Primary IP Services' | 'Corporate Compliance' | 'Knowledge & Guides' | 'Technical Blogs' | 'Regional Jurisdictions (Grehat)' | 'Client Proof';
  tagline: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  lastmod: string;
  description: string;
}

export const SITEMAP_ENTRIES: SiteMapNode[] = [
  // Core Portal
  {
    url: '/',
    title: 'Home Page',
    category: 'Core Pages',
    tagline: 'Defending Indian Innovation with Fast-Track Patent Grants & Unshakeable Brand Moats',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: '2026-08-14',
    description: 'Main portal showcasing end-to-end IP defense, patent drafting, trademark protection, and startup support.'
  },
  {
    url: '/about',
    title: 'About Bharat IP Defence',
    category: 'Core Pages',
    tagline: 'Bridging Groundbreaking Engineering with World-Class IP Jurisprudence',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: '2026-08-10',
    description: 'Our team of registered patent agents, litigation attorneys, ex-IPO examiners, and mission history.'
  },
  {
    url: '/startups-ip',
    title: 'Startup IP Accelerator & DPIIT 80% Patent Rebate',
    category: 'Primary IP Services',
    tagline: 'Turn Disruptive Innovations into Venture-Fundable IP Moats with Fast-Track IPO Grants',
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: '2026-08-16',
    description: 'Complete startup IP accelerator: Claim 80% DPIIT patent fee rebates, fast-track Form 18A, software patent drafting under Section 3(k), and VC audits.'
  },
  {
    url: '/colleges-universities-ipr',
    title: 'University & College IPR Cells (NIRF & NAAC Score Boost)',
    category: 'Primary IP Services',
    tagline: 'Transforming Academic Research into Commercial Patents, Institutional Moats & NIRF Points',
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: '2026-08-16',
    description: 'Empowering 50+ universities & engineering colleges across India: Setup campus IPR cells, accelerate NIRF RPP & NAAC Criterion 3 scores, and claim AICTE KAPILA grants.'
  },
  {
    url: '/authority-hub',
    title: 'Statutory Authority & Official Backlinks Hub',
    category: 'Knowledge & Guides',
    tagline: 'Verified Statutory Gazettes, High Court Rules, Regulatory Frameworks & Government Portals',
    priority: 0.85,
    changefreq: 'weekly',
    lastmod: '2026-08-16',
    description: 'Verified statutory citations, Patents Amendment Rules 2024 gazette, official CGPDTM links, Startup India SIPP schemes, and UGC/AICTE IPR policies.'
  },
  {
    url: '/locations',
    title: 'Pan-India IP Legal Hubs & Regional Innovation Corridors',
    category: 'Regional Jurisdictions (Grehat)',
    tagline: 'Comprehensive Regional IP Counsel Across All Indian Tech Hubs & Innovation Corridors',
    priority: 0.85,
    changefreq: 'monthly',
    lastmod: '2026-08-16',
    description: 'Regional hubs across India: Hyderabad (HITEC City), Bengaluru (Koramangala), Delhi NCR (Dwarka & Gurgaon), Mumbai, Pune, Chennai, Kolkata, and Vizag.'
  },
  {
    url: '/services',
    title: 'Services Overview Hub',
    category: 'Primary IP Services',
    tagline: 'End-to-End Protection: From Inception to Granted Patent and Trademark Certificate',
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: '2026-08-12',
    description: 'Comprehensive directory of patent, trademark, copyright, design, and regulatory compliance services.'
  },
  {
    url: '/process',
    title: '5-Stage Filing Process Roadmap',
    category: 'Core Pages',
    tagline: 'Clear, Predictable & Transparent: From Invention Disclosure to Official Grant',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: '2026-08-05',
    description: 'Step-by-step guidance on prior art search, drafting, IPO filings, FER objections, and grant stages.'
  },
  {
    url: '/institutions',
    title: 'Academic IPR Cells & TTOs',
    category: 'Core Pages',
    tagline: 'Transforming Academic Research into Commercial Patents & Institutional Wealth',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: '2026-08-01',
    description: 'Institutional IPR frameworks, college patent programs, and student innovation cells for NIRF/NAAC growth.'
  },
  {
    url: '/knowledge',
    title: 'Knowledge Center Hub',
    category: 'Knowledge & Guides',
    tagline: 'Empowering Innovators with Actionable Legal & Technical IP Wisdom',
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: '2026-08-14',
    description: 'Guides, checklists, Section 3(k) analyses, and practical tips for founders and researchers.'
  },
  {
    url: '/blog',
    title: 'Technical IP Blog & Thought Leadership',
    category: 'Technical Blogs',
    tagline: 'Cutting-Edge Articles on Indian & Global IP Jurisprudence and Startup Growth',
    priority: 0.9,
    changefreq: 'daily',
    lastmod: '2026-08-14',
    description: 'In-depth legal and technical analyses of Indian Patent Rules, Madrid Protocol, and deep-tech claims.'
  },
  {
    url: '/jurisdictions',
    title: 'Grehat & Territorial Jurisdictions Map',
    category: 'Regional Jurisdictions (Grehat)',
    tagline: 'Territorial Patent Office Mapping Across Delhi, Mumbai, Chennai & Kolkata',
    priority: 0.9,
    changefreq: 'monthly',
    lastmod: '2026-08-14',
    description: 'Territorial statutory filing boundaries for CGPDTM offices in New Delhi, Mumbai, Chennai, and Kolkata.'
  },
  {
    url: '/testimonials',
    title: 'Client Success & Granted Patents',
    category: 'Client Proof',
    tagline: 'Over 500+ Innovators, Startups & Universities Protected Worldwide',
    priority: 0.7,
    changefreq: 'weekly',
    lastmod: '2026-08-11',
    description: 'Verified testimonials, case studies, and granted patent metrics from founders and enterprises.'
  },
  {
    url: '/consultation',
    title: 'Free 1-on-1 IP Consultation & Audit',
    category: 'Core Pages',
    tagline: 'Confidential 30-Minute IP Strategy Session with a Senior Patent Attorney',
    priority: 0.9,
    changefreq: 'monthly',
    lastmod: '2026-08-14',
    description: 'Direct booking portal for preliminary novelty opinions, brand searches, and patent consultations.'
  },
  {
    url: '/sitemap',
    title: 'HTML & XML Sitemap Index',
    category: 'Core Pages',
    tagline: 'Complete Hierarchical Architecture of Services, Knowledge Bases, and Regional Hubs',
    priority: 0.6,
    changefreq: 'weekly',
    lastmod: '2026-08-14',
    description: 'Interactive index of all website URLs, XML schema feed, and search engine crawling rules.'
  },

  // Specific Blog Articles (with SEO URLs)
  {
    url: '/blog/guide-to-patent-filing-india-2026',
    title: 'Step-by-Step Guide to Filing a Patent in India (2026)',
    category: 'Technical Blogs',
    tagline: 'From Invention Disclosure to Patent Grant: Demystifying the IPO Roadmap',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: '2026-01-18',
    description: '5 essential stages of patent prosecution: Prior Art Search, Drafting, Form Filings, FER, and Grant.'
  },
  {
    url: '/blog/startup-india-80-percent-patent-fee-rebate',
    title: 'Claiming 80% Patent Fee Concessions Under DPIIT',
    category: 'Technical Blogs',
    tagline: 'Leveraging Government Schemes: SIPP Program, Fast-Track Examination, and Cost Savings',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: '2026-02-02',
    description: 'How recognized startups and MSMEs reduce statutory filing fees from ₹8,000 to ₹1,600.'
  },
  {
    url: '/blog/software-patents-section-3k-india',
    title: 'Software & AI Patents in India: Overcoming Section 3(k)',
    category: 'Technical Blogs',
    tagline: 'How to Patent Machine Learning Models, SaaS Algorithms, and Hardware-Integrated Code',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: '2026-02-10',
    description: 'Understanding Technical Effect, CRI Guidelines, and landmark Delhi High Court rulings for software.'
  },
  {
    url: '/blog/trademark-registration-class-search-guide',
    title: 'Trademark Registration in India: NICE Classes & ™ vs ®',
    category: 'Technical Blogs',
    tagline: 'Building an Unshakeable Brand Moat: A Founder’s Guide to Class Selection & Legal Defense',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: '2026-02-14',
    description: 'How to select trademark classes, avoid Section 9/11 objections, and protect brand identity.'
  },
  {
    url: '/blog/copyright-vs-patent-for-tech-startups',
    title: 'Source Code & Deep Tech: Copyright vs Patent Protection',
    category: 'Technical Blogs',
    tagline: 'Strategic IP Allocation: Protecting Literary Expression vs Underlying Functional Utility',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: '2026-02-20',
    description: 'When to copyright software repositories versus when to file functional patent specifications.'
  },
  {
    url: '/blog/pct-international-patent-filing-strategy',
    title: 'Global IP Strategy: Patent Cooperation Treaty (PCT) Route',
    category: 'Technical Blogs',
    tagline: 'Securing Monopolies in the US, Europe, and Asia through the Patent Cooperation Treaty',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: '2026-02-28',
    description: 'Using the 30-month PCT window to enter national phase examination with high grant probability.'
  }
];

export function generateSitemapXML(baseUrl = 'https://ipdefensesolutions.com'): string {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
  
  const entries = SITEMAP_ENTRIES.map(item => `  <url>
    <loc>${baseUrl}${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority.toFixed(1)}</priority>
  </url>`).join('\n');

  return `${xmlHeader}\n${entries}\n</urlset>`;
}

export interface AuthoritativeBacklink {
  id: string;
  title: string;
  category: 'government' | 'academic' | 'startup' | 'international' | 'judiciary';
  organization: string;
  officialUrl: string;
  authorityLevel: 'Statutory Body' | 'Apex Ministry' | 'Global Treaty' | 'High Court' | 'Regulatory Council';
  referenceGazetteOrAct: string;
  targetRelevance: string;
  description: string;
  citationText: string;
  keyTopics: string[];
}

export const AUTHORITATIVE_BACKLINKS: AuthoritativeBacklink[] = [
  {
    id: 'cgpdtm-ipo',
    title: 'Controller General of Patents, Designs and Trade Marks (CGPDTM)',
    category: 'government',
    organization: 'Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry',
    officialUrl: 'https://ipindia.gov.in',
    authorityLevel: 'Statutory Body',
    referenceGazetteOrAct: 'The Patents Act, 1970 (Act No. 39 of 1970) & Patents Rules 2003 (as amended 2024)',
    targetRelevance: 'Startups, Colleges & Patent Applicants across India',
    description: 'The statutory authority governing patents, designs, trademarks, and geographical indications across territorial offices in Delhi, Mumbai, Chennai, and Kolkata.',
    citationText: 'CGPDTM, Intellectual Property India, Ministry of Commerce and Industry, Govt. of India (ipindia.gov.in)',
    keyTopics: ['Patent Filing India', 'Rule 24C Expedited Examination', 'Form 18A Startup Concessions', 'Trademark Registry']
  },
  {
    id: 'startup-india-sipp',
    title: 'Startup India Hub – Scheme for Facilitating Start-Ups Intellectual Property Protection (SIPP)',
    category: 'startup',
    organization: 'DPIIT, Ministry of Commerce & Industry, Government of India',
    officialUrl: 'https://www.startupindia.gov.in',
    authorityLevel: 'Apex Ministry',
    referenceGazetteOrAct: 'DPIIT Notification No. 5(1)/2020-IPR-I (SIPP Scheme Extended)',
    targetRelevance: 'DPIIT-Recognized Startups & Tech Incubatees',
    description: 'Government portal providing 80% statutory fee concessions on patents, 50% rebates on trademarks, and fast-track examination for recognized Indian startups.',
    citationText: 'Startup India Portal, Department for Promotion of Industry and Internal Trade (DPIIT) (startupindia.gov.in)',
    keyTopics: ['DPIIT 80% Patent Fee Rebate', 'SIPP IP Facilitators', 'Startup Tax Exemptions 80-IAC', 'Seed Stage IP Moats']
  },
  {
    id: 'wipo-pct-madrid',
    title: 'World Intellectual Property Organization (WIPO) – PCT & Madrid System',
    category: 'international',
    organization: 'United Nations Specialized Agency for IP',
    officialUrl: 'https://www.wipo.int',
    authorityLevel: 'Global Treaty',
    referenceGazetteOrAct: 'Patent Cooperation Treaty (PCT 1970) & Madrid Agreement (Marks)',
    targetRelevance: 'Export-Oriented Startups & Global Academic Inventions',
    description: 'Administers international patent applications across 157 member countries through a single standardized PCT filing with 30/31-month national phase entry.',
    citationText: 'WIPO International Bureau, Geneva, Switzerland (wipo.int)',
    keyTopics: ['PCT International Patent Filing', 'Madrid Protocol Trademarks', 'WIPO DAS Priority Document', 'Global Patent Search']
  },
  {
    id: 'aicte-kapila',
    title: 'AICTE – KAPILA Scheme (Kalam Program for IP Literacy and Awareness)',
    category: 'academic',
    organization: 'All India Council for Technical Education (AICTE), Ministry of Education',
    officialUrl: 'https://kapila.mic.gov.in',
    authorityLevel: 'Regulatory Council',
    referenceGazetteOrAct: 'AICTE-MIC Policy on Innovation & IP Support for HEIs',
    targetRelevance: 'Engineering Colleges, Universities & Polytechnic Institutes',
    description: 'Government funding scheme providing financial assistance for patent filing fees to AICTE-approved institutions and developing institutional IPR cells.',
    citationText: 'KAPILA - Kalam Program for IP Literacy and Awareness, MoE Innovation Cell, AICTE (kapila.mic.gov.in)',
    keyTopics: ['KAPILA Patent Funding', 'College IPR Cell Grant', 'Student Inventions', 'NIRF Innovation Score']
  },
  {
    id: 'ugc-ipr-framework',
    title: 'University Grants Commission (UGC) – National IPR Policy Guidelines for HEIs',
    category: 'academic',
    organization: 'University Grants Commission, Ministry of Education, Govt. of India',
    officialUrl: 'https://www.ugc.gov.in',
    authorityLevel: 'Regulatory Council',
    referenceGazetteOrAct: 'UGC Guidelines for Intellectual Property Rights (IPR) Management in Higher Education Institutions',
    targetRelevance: 'Deemed, Central, State & Private Universities across India',
    description: 'National policy guidelines establishing institutional ownership, technology transfer cells (TTO), royalty-sharing ratios (70:30 faculty/institute), and student IP guidelines.',
    citationText: 'UGC Guidelines on Intellectual Property Management in HEIs, Ministry of Education (ugc.gov.in)',
    keyTopics: ['University IPR Policy', 'NAAC Criterion 3 Research', 'Tech Transfer Office TTO', 'Faculty Royalty Sharing']
  },
  {
    id: 'nipam-mission',
    title: 'National Intellectual Property Awareness Mission (NIPAM)',
    category: 'government',
    organization: 'Intellectual Property Office India (IPO) & Ministry of Commerce',
    officialUrl: 'https://ipindia.gov.in/nipam.htm',
    authorityLevel: 'Statutory Body',
    referenceGazetteOrAct: 'Azadi Ka Amrit Mahotsav NIPAM Flagship Directive',
    targetRelevance: 'Colleges, Schools & Academic Innovation Councils',
    description: 'Flagship initiative imparting IPR literacy to 1 million+ students, fostering IP mindset in educational campuses, and facilitating campus patent filings.',
    citationText: 'NIPAM, Office of the Controller General of Patents, Designs and Trade Marks (ipindia.gov.in/nipam)',
    keyTopics: ['NIPAM IPR Workshop', 'Campus IP Training', 'Patent Awareness Certification', 'Institutional MoU']
  },
  {
    id: 'delhi-high-court-ipd',
    title: 'Delhi High Court – Intellectual Property Division (IPD) & Rules',
    category: 'judiciary',
    organization: 'High Court of Delhi',
    officialUrl: 'https://delhihighcourt.nic.in',
    authorityLevel: 'High Court',
    referenceGazetteOrAct: 'Delhi High Court Intellectual Property Rights Division Rules, 2022',
    targetRelevance: 'Patent Litigants, Trademark Owners & Brand Defenders',
    description: 'Specialized judicial division handling patent revocation, trademark appeals, infringement suits, and commercial IP disputes with expedited hearings.',
    citationText: 'Intellectual Property Division, High Court of Delhi (delhihighcourt.nic.in)',
    keyTopics: ['IPD Court Appeals', 'Patent Revocation Section 64', 'Interim Injunctions', 'Commercial Courts Act']
  },
  {
    id: 'patent-amendment-rules-2024',
    title: 'The Patents (Amendment) Rules, 2024 Gazette Notification',
    category: 'government',
    organization: 'Ministry of Commerce and Industry (DPIIT)',
    officialUrl: 'https://egazette.gov.in',
    authorityLevel: 'Statutory Body',
    referenceGazetteOrAct: 'G.S.R. 190(E) dated 15th March 2024 (Patents Amendment Rules 2024)',
    targetRelevance: 'Startups, Universities, MSMEs & Patent Agents',
    description: 'Introduced 100% renewal fee concessions for educational institutions, streamlined Statement of Working (Form 27 every 3 years), and discounted examination fees.',
    citationText: 'The Gazette of India: Extraordinary, Part II—Sec. 3(i), Ministry of Commerce and Industry (G.S.R. 190(E))',
    keyTopics: ['Patents Amendment Rules 2024', 'Form 27 Statement of Working', 'College Renewal Fee Rebate', 'Grace Period Form 31']
  }
];

export interface GeoLocationTarget {
  region: 'South' | 'North' | 'West' | 'East & Central';
  city: string;
  state: string;
  startupHubs: string[];
  majorUniversities: string[];
  nearestPatentBranch: 'Chennai' | 'Delhi' | 'Mumbai' | 'Kolkata';
  grehatTerritory: string;
  focusKeywords: string[];
}

export const PAN_INDIA_GEO_HUBS: GeoLocationTarget[] = [
  {
    region: 'South',
    city: 'Hyderabad',
    state: 'Telangana',
    startupHubs: ['HITEC City', 'Gachibowli', 'T-Hub 2.0', 'Madhapur', 'Bachupally & Mallampet Tech Corridor'],
    majorUniversities: ['IIT Hyderabad', 'BITS Pilani Hyderabad', 'IIIT Hyderabad', 'Osmania University', 'JNTUH', 'CBIT', 'MREC'],
    nearestPatentBranch: 'Chennai',
    grehatTerritory: 'South Zone (Chennai Patent Office / Telangana Grehat)',
    focusKeywords: [
      'patent attorneys in Hyderabad',
      'patent filing company HITEC City Gachibowli',
      'startup patent consultants T-Hub Hyderabad',
      'university IPR cell setup Telangana',
      'trademark registration Bachupally Hyderabad'
    ]
  },
  {
    region: 'South',
    city: 'Bengaluru',
    state: 'Karnataka',
    startupHubs: ['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'Electronic City'],
    majorUniversities: ['IISc Bengaluru', 'IIIT Bangalore', 'RV College of Engineering', 'PES University', 'BMS College', 'MS Ramaiah'],
    nearestPatentBranch: 'Chennai',
    grehatTerritory: 'South Zone (Chennai Patent Office / Karnataka Grehat)',
    focusKeywords: [
      'patent agents in Bangalore Koramangala',
      'deep tech startup patent lawyers Bengaluru',
      'software patent Section 3k Bangalore',
      'IISc research patent attorneys Bangalore',
      'AI SaaS trademark registration Whitefield'
    ]
  },
  {
    region: 'North',
    city: 'Delhi NCR (Delhi, Gurgaon, Noida)',
    state: 'Delhi / Haryana / UP',
    startupHubs: ['Cyber City Gurgaon', 'Sector 62 Noida', 'Okhla Industrial Area', 'Saket & Connaught Place'],
    majorUniversities: ['IIT Delhi', 'Delhi University', 'DTU', 'JNU', 'Amity University', 'Bennett University', 'Shiv Nadar University'],
    nearestPatentBranch: 'Delhi',
    grehatTerritory: 'North Zone (Dwarka Patent Office / Delhi NCR Grehat)',
    focusKeywords: [
      'patent law firm Delhi NCR Gurgaon',
      'Dwarka patent office filing consultants',
      'DPIIT startup patent registration Noida',
      'university tech transfer office Delhi',
      'trademark attorney Connaught Place Delhi'
    ]
  },
  {
    region: 'West',
    city: 'Mumbai & Pune',
    state: 'Maharashtra',
    startupHubs: ['Bandra Kurla Complex (BKC)', 'Powai Startup Hub', 'Hinjewadi IT Park Pune', 'Viman Nagar'],
    majorUniversities: ['IIT Bombay', 'VJTI Mumbai', 'COEP Tech University Pune', 'Symbiosis International', 'MIT World Peace University'],
    nearestPatentBranch: 'Mumbai',
    grehatTerritory: 'West Zone (Antop Hill Patent Office / Maharashtra Grehat)',
    focusKeywords: [
      'patent attorneys in Mumbai BKC',
      'fintech startup patent drafting Mumbai',
      'patent lawyers in Pune Hinjewadi',
      'IIT Bombay alumni patent filing',
      'Maharashtra college IPR cell registration'
    ]
  },
  {
    region: 'South',
    city: 'Chennai',
    state: 'Tamil Nadu',
    startupHubs: ['OMR IT Corridor', 'Guindy Industrial Estate', 'IIT Madras Research Park', 'Tidel Park'],
    majorUniversities: ['IIT Madras', 'Anna University', 'SRM Institute', 'Vellore Institute of Technology (VIT)', 'SSN College of Engineering'],
    nearestPatentBranch: 'Chennai',
    grehatTerritory: 'South Zone (Guindy Head Patent Branch / Tamil Nadu Grehat)',
    focusKeywords: [
      'patent filing office Chennai Guindy',
      'IIT Madras Research Park patent agent',
      'EV and battery technology patents Chennai',
      'Tamil Nadu engineering colleges IPR cell',
      'trademark consultants OMR Chennai'
    ]
  },
  {
    region: 'East & Central',
    city: 'Kolkata & Bhubaneswar',
    state: 'West Bengal & Odisha',
    startupHubs: ['Salt Lake Sector V', 'New Town Rajarhat', 'Infocity Bhubaneswar', 'IDCO Incubation Center'],
    majorUniversities: ['IIT Kharagpur', 'Jadavpur University', 'IIT Bhubaneswar', 'KIIT University', 'CV Raman Global University', 'NIT Rourkela'],
    nearestPatentBranch: 'Kolkata',
    grehatTerritory: 'East Zone (Salt Lake Patent Office Head Branch / West Bengal & Odisha Grehat)',
    focusKeywords: [
      'patent office Kolkata Salt Lake filing',
      'patent consultants in Bhubaneswar Odisha',
      'CV Raman Global University IPR partner',
      'Eastern India startup patent grant service',
      'biotech and chemical patent drafting Kolkata'
    ]
  },
  {
    region: 'South',
    city: 'Vijayawada, Guntur & Visakhapatnam',
    state: 'Andhra Pradesh',
    startupHubs: ['Auto Nagar Vijayawada', 'Rushikonda IT SEZ Vizag', 'Guntur Agri-Tech Corridor'],
    majorUniversities: ['Andhra University', 'K L University', 'Vignan University', 'SRM University AP', 'GITAM Vizag'],
    nearestPatentBranch: 'Chennai',
    grehatTerritory: 'South Zone (Chennai Patent Office / Andhra Pradesh Grehat)',
    focusKeywords: [
      'patent office in Guntur Arundelpet',
      'patent lawyers in Vijayawada AP',
      'Vizag MVP Colony trademark patent consultant',
      'agri-biotech patent filing Andhra Pradesh',
      'AP university research patent support'
    ]
  }
];

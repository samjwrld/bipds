export interface TerritorialJurisdiction {
  id: string;
  zone: string;
  name: string;
  grehatCode: string;
  patentOfficeAddress: string;
  trademarkRegistryAddress: string;
  jurisdictionStates: string[];
  highCourtIPD: string;
  officialController: string;
  contactNumber: string;
  officialEmail: string;
  ourNearestBranch: {
    city: string;
    address: string;
    phone: string;
  };
  keyCoverageHighlights: string[];
  governingRule: string;
}

export const PATENT_JURISDICTIONS: TerritorialJurisdiction[] = [
  {
    id: 'delhi-north',
    zone: 'Northern Grehat / Zone',
    name: 'Patent Office New Delhi (CGPDTM)',
    grehatCode: 'IPO-DEL',
    patentOfficeAddress: 'Intellectual Property Office Building, Plot No. 32, Sector 14, Dwarka, New Delhi - 110078',
    trademarkRegistryAddress: 'Trade Marks Registry, Plot No. 32, Sector 14, Dwarka, New Delhi - 110078',
    jurisdictionStates: [
      'Delhi',
      'Haryana',
      'Punjab',
      'Uttar Pradesh',
      'Rajasthan',
      'Chandigarh',
      'Himachal Pradesh',
      'Jammu & Kashmir',
      'Ladakh',
      'Uttarakhand'
    ],
    highCourtIPD: 'Delhi High Court Intellectual Property Division (DHC-IPD)',
    officialController: 'Deputy Controller of Patents & Designs, New Delhi',
    contactNumber: '011-28034304 / 28034305',
    officialEmail: 'delhi-patent@nic.in',
    ourNearestBranch: {
      city: 'Delhi NCR Liaison Desk',
      address: 'Connaught Place & Cyber City Hub, New Delhi / Gurugram',
      phone: '+91 7799045557'
    },
    keyCoverageHighlights: [
      'Primary jurisdiction for North Indian deep-tech startups, central universities (IIT Delhi, IIT Roorkee, IIT Kanpur) and AI enterprises.',
      'Active Specialized Intellectual Property Division (IPD) at the High Court of Delhi for fast-track commercial injunctions.',
      'Comprehensive electronic filing and video conference hearing facilities for all Northern applicants.'
    ],
    governingRule: 'Rule 4(1)(i) of The Patents Rules 2003 (as amended) & Section 74 of The Patents Act 1970'
  },
  {
    id: 'mumbai-west',
    zone: 'Western Grehat / Zone',
    name: 'Patent Office Mumbai (CGPDTM)',
    grehatCode: 'IPO-BOM',
    patentOfficeAddress: 'Boudhik Sampada Bhavan, Near Antop Hill Post Office, S.M. Road, Antop Hill, Mumbai - 400037',
    trademarkRegistryAddress: 'Trade Marks Registry, Boudhik Sampada Bhavan, S.M. Road, Antop Hill, Mumbai - 400037',
    jurisdictionStates: [
      'Maharashtra',
      'Gujarat',
      'Madhya Pradesh',
      'Goa',
      'Chhattisgarh',
      'Daman & Diu',
      'Dadra & Nagar Haveli'
    ],
    highCourtIPD: 'High Court of Judicature at Bombay (Commercial & IP Bench)',
    officialController: 'Deputy Controller of Patents & Designs, Mumbai',
    contactNumber: '022-24137701 / 24141026',
    officialEmail: 'mumbai-patent@nic.in',
    ourNearestBranch: {
      city: 'Western Zone Coordination Cell',
      address: 'BKC Business Corridor, Mumbai / Pune Innovation Hub',
      phone: '+91 7799045557'
    },
    keyCoverageHighlights: [
      'Hub for India’s pharmaceutical, chemical, fintech, automotive, and polymer innovation corridors.',
      'Handles landmark chemical Section 3(d) and manufacturing process patent prosecutions.',
      'Pivotal for international shipping, maritime, and FMCG brand trademark defenses.'
    ],
    governingRule: 'Rule 4(1)(ii) of The Patents Rules 2003 & Section 74 of The Patents Act 1970'
  },
  {
    id: 'chennai-south',
    zone: 'Southern Grehat / Zone',
    name: 'Patent Office Chennai (CGPDTM)',
    grehatCode: 'IPO-CHE',
    patentOfficeAddress: 'Intellectual Property Building, G.S.T. Road, Guindy, Chennai - 600032',
    trademarkRegistryAddress: 'Trade Marks Registry, Intellectual Property Building, G.S.T. Road, Guindy, Chennai - 600032',
    jurisdictionStates: [
      'Telangana',
      'Andhra Pradesh',
      'Karnataka',
      'Tamil Nadu',
      'Kerala',
      'Puducherry',
      'Lakshadweep'
    ],
    highCourtIPD: 'Madras High Court IPD, High Court of Telangana & Karnataka High Court',
    officialController: 'Deputy Controller of Patents & Designs, Chennai',
    contactNumber: '044-22502081 / 22502082',
    officialEmail: 'chennai-patent@nic.in',
    ourNearestBranch: {
      city: 'Hyderabad Global Headquarters',
      address: 'Villa no. 48, Mythri Lake view housing society, Mallampet, Bachupally, Hyderabad, Telangana 502325',
      phone: '+91 7799045557'
    },
    keyCoverageHighlights: [
      'The Silicon Valley & Biotech engine of India: covering Bengaluru, Hyderabad HITEC City, Chennai, and Kochi startup belts.',
      'World-renowned expertise in Computer-Related Inventions (CRI), semiconductor topographies, aerospace, EV mobility, and biotech patents.',
      'Direct headquarters for Bharat IP Defence with physical offices in Hyderabad, Guntur, and Vizag.'
    ],
    governingRule: 'Rule 4(1)(iii) of The Patents Rules 2003 & Section 74 of The Patents Act 1970'
  },
  {
    id: 'kolkata-east',
    zone: 'Eastern Grehat / Zone (Head Office)',
    name: 'Patent Office Kolkata (Head Office, CGPDTM)',
    grehatCode: 'IPO-CAL',
    patentOfficeAddress: 'Boudhik Sampada Bhavan, CP-2, Sector V, Salt Lake City, Kolkata - 700091',
    trademarkRegistryAddress: 'Trade Marks Registry, Nizam Palace, 234/4, A.J.C. Bose Road, Kolkata - 700020',
    jurisdictionStates: [
      'West Bengal',
      'Bihar',
      'Jharkhand',
      'Odisha',
      'Assam',
      'Meghalaya',
      'Manipur',
      'Tripura',
      'Mizoram',
      'Nagaland',
      'Arunachal Pradesh',
      'Sikkim',
      'Andaman & Nicobar Islands'
    ],
    highCourtIPD: 'Calcutta High Court Intellectual Property Rights Bench',
    officialController: 'Controller General of Patents, Designs and Trade Marks (Head Office)',
    contactNumber: '033-23679101 / 23671987',
    officialEmail: 'kolkata-patent@nic.in',
    ourNearestBranch: {
      city: 'Bhubaneshwar & Rourkela Offices',
      address: 'Kalpana Square, Plot no 18, near Chintamaishwar Temple, Bhubaneshwar / Civil Township Plot G29, Rourkela',
      phone: '+91 7799045557'
    },
    keyCoverageHighlights: [
      'The historic Central Head Office of the Indian Patent Office where the National Patent Register is maintained.',
      'Exclusive jurisdiction for all metallurgical, mining, agricultural heritage, tea/GI, heavy machinery, and material science patents.',
      'Active regional presence by Bharat IP Defence serving institutions throughout Odisha, Bengal, and the North East.'
    ],
    governingRule: 'Rule 4(1)(iv) of The Patents Rules 2003 & Section 74 of The Patents Act 1970'
  }
];

export const STATE_TO_JURISDICTION_MAP: Record<string, string> = {
  // Northern Zone
  'Delhi': 'delhi-north',
  'Haryana': 'delhi-north',
  'Punjab': 'delhi-north',
  'Uttar Pradesh': 'delhi-north',
  'Rajasthan': 'delhi-north',
  'Chandigarh': 'delhi-north',
  'Himachal Pradesh': 'delhi-north',
  'Jammu & Kashmir': 'delhi-north',
  'Ladakh': 'delhi-north',
  'Uttarakhand': 'delhi-north',
  
  // Western Zone
  'Maharashtra': 'mumbai-west',
  'Gujarat': 'mumbai-west',
  'Madhya Pradesh': 'mumbai-west',
  'Goa': 'mumbai-west',
  'Chhattisgarh': 'mumbai-west',
  'Daman and Diu': 'mumbai-west',
  'Dadra and Nagar Haveli': 'mumbai-west',

  // Southern Zone
  'Telangana': 'chennai-south',
  'Andhra Pradesh': 'chennai-south',
  'Karnataka': 'chennai-south',
  'Tamil Nadu': 'chennai-south',
  'Kerala': 'chennai-south',
  'Puducherry': 'chennai-south',
  'Lakshadweep': 'chennai-south',

  // Eastern Zone
  'West Bengal': 'kolkata-east',
  'Bihar': 'kolkata-east',
  'Jharkhand': 'kolkata-east',
  'Odisha': 'kolkata-east',
  'Assam': 'kolkata-east',
  'Meghalaya': 'kolkata-east',
  'Manipur': 'kolkata-east',
  'Tripura': 'kolkata-east',
  'Mizoram': 'kolkata-east',
  'Nagaland': 'kolkata-east',
  'Arunachal Pradesh': 'kolkata-east',
  'Sikkim': 'kolkata-east',
  'Andaman and Nicobar Islands': 'kolkata-east'
};

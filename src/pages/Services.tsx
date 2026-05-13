import React from 'react';
import { 
  Lightbulb, ShieldCheck, FileText, Search, Scale, Users, CheckCircle2, ArrowRight,
  Briefcase, Award, Building, Receipt, Rocket, Store, Utensils
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: "Patent Filing Services",
      description: "Comprehensive patent services for startups, individuals, and enterprises. We guide you from the initial idea to the final grant.",
      details: [
        "Prior Art Search & Patentability Analysis",
        "Provisional & Complete Specification Drafting",
        "Filing with Indian Patent Office (IPO)",
        "International PCT Filing & National Phase Entry",
        "Office Action Responses & Hearings"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Trademark Registration",
      description: "Protect your brand identity, logo, and slogan. Our trademark experts ensure your brand remains exclusively yours.",
      details: [
        "Comprehensive Trademark Search",
        "Class Selection & Filing Strategy",
        "Response to Examination Reports",
        "Opposition & Rectification Proceedings",
        "Trademark Renewal & Maintenance"
      ]
    },
    {
      icon: FileText,
      title: "Copyright Protection",
      description: "Secure your creative works including software, literature, music, and art. Prevent unauthorized use and distribution.",
      details: [
        "Copyright Registration for Software Code",
        "Protection for Literary & Artistic Works",
        "Cinematograph Film & Sound Recording Rights",
        "Copyright Enforcement & Infringement Notices",
        "Licensing & Assignment Agreements"
      ]
    },
    {
      icon: Search,
      title: "Design Registration",
      description: "Protect the aesthetic look and feel of your product. Secure your industrial designs against imitation.",
      details: [
        "Novelty Search for Designs",
        "Filing Design Applications",
        "Handling Objections & Hearings",
        "Design Portfolio Management",
        "Enforcement of Design Rights"
      ]
    },
    {
      icon: Scale,
      title: "IP Litigation & Enforcement",
      description: "Robust legal defense for your intellectual property rights. We handle disputes and litigation with aggressive representation.",
      details: [
        "Cease & Desist Notices",
        "Infringement Suit Filing & Defense",
        "Mediation & Dispute Resolution",
        "Anti-Counterfeiting Raids",
        "IP Due Diligence for Mergers & Acquisitions"
      ]
    },
    {
      icon: Users,
      title: "Startup IP Strategy",
      description: "Tailored IP roadmaps for startups to maximize valuation and secure funding through strong intellectual property portfolios.",
      details: [
        "IP Valuation & Audit",
        "Freedom to Operate (FTO) Analysis",
        "Competitor IP Landscape Analysis",
        "Investor Due Diligence Support",
        "IP Policy Formulation for Startups"
      ]
    },
    {
      icon: Briefcase,
      title: "Labor Compliances",
      description: "Ensure your business adheres to all labor laws and regulations. We handle the complexities of labor compliance so you can focus on growth.",
      details: [
        "PF & ESI Registration & Filings",
        "Contract Labor License",
        "Shop & Establishment Act Registration",
        "Professional Tax Compliance",
        "Audit & Advisory on Labor Laws"
      ]
    },
    {
      icon: Award,
      title: "ISO Services",
      description: "Get certified with international standards to enhance your brand's credibility and operational efficiency.",
      details: [
        "ISO 9001:2015 (Quality Management)",
        "ISO 27001 (Information Security)",
        "ISO 14001 (Environmental Management)",
        "Gap Analysis & Documentation",
        "Internal Audit & Certification Support"
      ]
    },
    {
      icon: Building,
      title: "Company Registration & Compliances",
      description: "End-to-end support for incorporating your business and maintaining annual statutory compliances.",
      details: [
        "Private Limited Company Incorporation",
        "LLP & Partnership Firm Registration",
        "Annual ROC Filings & Maintenance",
        "Director Identification Number (DIN) Services",
        "Drafting MOA, AOA & Shareholder Agreements"
      ]
    },
    {
      icon: Receipt,
      title: "GST Registration & Filings",
      description: "Hassle-free GST services including registration, monthly returns, and annual reconciliations.",
      details: [
        "New GST Registration",
        "Monthly & Quarterly GSTR Filings",
        "GST Annual Return (GSTR-9)",
        "GST Refund Processing",
        "Representation in GST Audits"
      ]
    },
    {
      icon: Rocket,
      title: "Startup Registration",
      description: "Get recognized by DPIIT to avail tax benefits, funding opportunities, and simplified compliance norms.",
      details: [
        "DPIIT Recognition Application",
        "Startup India Hub Registration",
        "Section 80-IAC Tax Exemption Support",
        "Self-Certification under Labor & Environmental Laws",
        "Fast-track Patent Application Support"
      ]
    },
    {
      icon: Store,
      title: "MSME Registration",
      description: "Register under Udyam to access government schemes, subsidies, and priority sector lending.",
      details: [
        "Udyam Registration Certificate",
        "Benefits under MSME Samadhaan",
        "Subsidies on Patent & Trademark Fees",
        "Access to Government Tenders",
        "Collateral-Free Bank Loans Support"
      ]
    },
    {
      icon: Utensils,
      title: "Food License (FSSAI)",
      description: "Mandatory registration for all food-related businesses to ensure safety and quality standards.",
      details: [
        "FSSAI Basic Registration",
        "FSSAI State & Central License",
        "Annual Return Filings",
        "Modification & Renewal of License",
        "Food Safety Audit & Compliance"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Our <span className="text-red-600">Services</span></h1>
          <p className="text-xl text-slate-600">
            We offer a full spectrum of Intellectual Property services designed to protect your innovations and maximize their commercial value.
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 sticky top-28 z-0" style={{ zIndex: idx + 1 }}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-red-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10">
                    <Link to="/consultation" className="inline-flex items-center text-red-600 font-bold hover:text-red-700 transition-colors">
                      Get Started with {service.title} <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold mb-6">Ready to protect your innovation?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Don't let your hard work go unprotected. Schedule a free consultation with our experts today.
            </p>
            <Link to="/consultation" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-red-600/20 inline-flex items-center">
              Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}

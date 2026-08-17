import React from 'react';
import { Scale, MapPin, Building2, CheckCircle2, Shield, FileText, ArrowRight, HelpCircle, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import GrehatJurisdictionMap from '../components/GrehatJurisdictionMap';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO_DATA } from '../data/seoData';
import { PATENT_JURISDICTIONS } from '../data/jurisdictionsData';

export default function Jurisdictions() {
  const meta = PAGE_SEO_DATA['/jurisdictions'];

  const breadcrumbs = [
    { name: 'Home', url: 'https://ipdefensesolutions.com/' },
    { name: 'Territorial Jurisdictions (Grehat Mapping)', url: 'https://ipdefensesolutions.com/jurisdictions' }
  ];

  const faqs = [
    {
      q: 'What is "Grehat" / Territorial Jurisdiction in Indian Patent Law?',
      a: 'Under Section 74 of the Patents Act 1970 and Rule 4 of the Patents Rules 2003, the appropriate patent office for filing is determined strictly by the domicile, nationality, or principal place of business/research of the first-named applicant, or where the invention actually originated.'
    },
    {
      q: 'Can a startup in Bengaluru file a patent at the Delhi Patent Office?',
      a: 'No. An applicant whose principal place of business or place of invention is in Karnataka must file with the Chennai Patent Office (Southern Jurisdiction). However, all examinations and hearings can be attended virtually via video conference from anywhere in India.'
    },
    {
      q: 'How does High Court IPD jurisdiction function after the dissolution of IPAB?',
      a: 'With the enactment of the Tribunals Reforms Act 2021, the Intellectual Property Appellate Board (IPAB) was abolished. Appeals against Controller decisions and patent revocation suits are now heard directly by the specialized Intellectual Property Divisions (IPD) of the respective High Courts (Delhi, Madras, Calcutta, Bombay).'
    },
    {
      q: 'What if the applicant is a foreign entity with no place of business in India?',
      a: 'For foreign applicants without a physical address in India, the territorial jurisdiction is determined by the official registered address of their Indian Patent Attorney / Agent (Bharat IP Defence address).'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-20 transition-colors duration-300">
      <SEOHead 
        customMeta={meta}
        breadcrumbs={breadcrumbs}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqs.map(f => ({
            '@type': 'Question',
            'name': f.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': f.a
            }
          }))
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-200 dark:border-red-900/50">
            <Globe className="w-4 h-4" />
            <span>Pan-India Statutory Network</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Grehat &amp; Territorial <span className="text-red-600 dark:text-red-500">Patent Jurisdictions</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Statutory mapping of all 28 States and 8 Union Territories across the 4 Indian Patent &amp; Trademark Office zonal branches under The Patents Act 1970.
          </p>
        </div>

        {/* Interactive Grehat Map Tool */}
        <div className="mb-20">
          <GrehatJurisdictionMap />
        </div>

        {/* 4 Territorial Jurisdictions Matrix */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
              The 4 Statutory Patent Offices of India
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Controller General of Patents, Designs and Trade Marks (CGPDTM) Administrative Zones
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PATENT_JURISDICTIONS.map((j) => (
              <div
                key={j.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider bg-red-50 dark:bg-red-950/60 px-3 py-1 rounded-full">
                      {j.zone}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      {j.grehatCode}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">
                    {j.name}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {j.patentOfficeAddress}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 mb-6">
                    <div className="text-xs">
                      <strong className="text-slate-900 dark:text-white block mb-1">States / UTs Covered:</strong>
                      <div className="flex flex-wrap gap-1">
                        {j.jurisdictionStates.map((st, i) => (
                          <span
                            key={i}
                            className="inline-block px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-[11px]"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 dark:text-slate-400 pt-2">
                      <strong className="text-slate-900 dark:text-white block mb-0.5">High Court IP Division:</strong>
                      <span>{j.highCourtIPD}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    {j.contactNumber.split('/')[0]}
                  </span>
                  <Link
                    to="/consultation"
                    className="inline-flex items-center text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
                  >
                    File in this Zone <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs on Grehat Jurisdictions */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">
              Frequently Asked Questions on Patent Jurisdictions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Legal guidance regarding territorial filing rules, transfer petitions, and virtual hearings.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-start">
                  <HelpCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl font-display font-bold mb-4">
              Need Assistance Determining Your Official Jurisdiction?
            </h2>
            <p className="text-slate-300 text-sm mb-8 leading-relaxed">
              Our registered patent agents across Hyderabad, Delhi, Bangalore, and Kolkata will verify your applicant domicile, review foreign filing permissions, and file e-applications seamlessly.
            </p>
            <Link
              to="/consultation"
              className="bg-red-600 hover:bg-red-500 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-red-600/30 inline-flex items-center"
            >
              Get Jurisdiction Assessment <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

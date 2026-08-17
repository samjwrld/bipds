import React, { useState } from 'react';
import { 
  Building2, 
  ExternalLink, 
  Scale, 
  BookOpen, 
  ShieldCheck, 
  Search, 
  Filter, 
  FileText, 
  Award, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO_DATA } from '../data/seoData';
import { AUTHORITATIVE_BACKLINKS, AuthoritativeBacklink } from '../data/backlinksData';

export default function AuthorityHub() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);

  const filteredLinks = AUTHORITATIVE_BACKLINKS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.keyTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCopyCitation = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCitationId(id);
    setTimeout(() => setCopiedCitationId(null), 2500);
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://ipdefensesolutions.com/' },
    { name: 'Statutory Authority & Backlinks Hub', url: 'https://ipdefensesolutions.com/authority-hub' }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <SEOHead 
        customMeta={PAGE_SEO_DATA['/authority-hub']} 
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/70 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-6 border border-red-200 dark:border-red-900 shadow-sm">
              <Scale className="w-4 h-4 text-red-600" />
              <span>Verified Statutory Sources, Citations &amp; Backlinks</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Statutory Authority &amp; Government <span className="text-red-600 dark:text-red-500">Citation Directory</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Official Indian Patent Office gazettes, Startup India SIPP directives, UGC institutional IPR frameworks, and WIPO international treaties.
            </p>

            {/* Search and Filters */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search acts, gazettes, UGC, KAPILA, or WIPO..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-red-500 shadow-sm"
                />
              </div>

              <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                {[
                  { id: 'all', label: 'All Sources' },
                  { id: 'government', label: 'Government' },
                  { id: 'academic', label: 'Academic' },
                  { id: 'startup', label: 'Startups' },
                  { id: 'international', label: 'WIPO' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === tab.id
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {filteredLinks.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="inline-block px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider">
                    {item.authorityLevel}
                  </span>
                  <a
                    href={item.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline inline-flex items-center flex-shrink-0"
                  >
                    Official Portal <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 font-mono mb-4">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5">Statutory Reference:</span>
                  {item.referenceGazetteOrAct}
                </div>

                {/* Key Keywords / Topic Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.keyTopics.map((topic, tidx) => (
                    <span
                      key={tidx}
                      className="px-2.5 py-0.5 rounded-md bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-[10px] font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Citation Copy Bar */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Target: {item.targetRelevance}</span>
                <button
                  onClick={() => handleCopyCitation(item.id, item.citationText)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer"
                >
                  {copiedCitationId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500" />
                      <span className="text-green-600 text-[11px]">Citation Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy Citation</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Partner Backlink & Verification Badge Guide */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Institutional IPR Partner Verification Badge
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Colleges, incubators, and university IPR cells can display this verified badge and backlink on their official websites.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-36 h-36 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col items-center justify-center text-center shadow-md flex-shrink-0">
                <img src="/logo.svg?v=3" alt="Bharat IP Defence Official Partner Badge" className="w-12 h-12 mb-2" />
                <span className="text-[9px] font-extrabold uppercase text-slate-800 dark:text-slate-200 tracking-wider">Official IPR Partner</span>
                <span className="text-[8px] text-red-600 font-bold">Bharat IP Defence</span>
              </div>

              <div className="flex-1 text-left">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                  Embed HTML Snippet on Institutional Website:
                </h4>
                <p className="text-xs text-slate-500 mb-3">
                  Add this code to your college/startup incubation footer or IPR Cell page for verified accreditation.
                </p>
                <div className="bg-slate-900 text-slate-300 p-3.5 rounded-xl font-mono text-[11px] overflow-x-auto relative">
                  <code>{`<a href="https://ipdefensesolutions.com/institutions" target="_blank" rel="noopener">Verified IPR Cell Partner – Bharat IP Defence</a>`}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

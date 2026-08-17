import React, { useState } from 'react';
import { 
  Network, 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  Code, 
  Download, 
  FileText, 
  Globe, 
  Layers, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITEMAP_ENTRIES, generateSitemapXML, SiteMapNode } from '../data/sitemapData';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO_DATA, SITE_CONFIG } from '../data/seoData';

export default function SiteMapPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [viewXml, setViewXml] = useState<boolean>(false);
  const [xmlCopied, setXmlCopied] = useState<boolean>(false);

  const meta = PAGE_SEO_DATA['/sitemap'];

  const categories = [
    'All',
    'Core Pages',
    'Primary IP Services',
    'Technical Blogs',
    'Regional Jurisdictions (Grehat)',
    'Knowledge & Guides',
    'Client Proof'
  ];

  const filteredEntries = SITEMAP_ENTRIES.filter((entry) => {
    const matchesCat = selectedCategory === 'All' || entry.category === selectedCategory;
    const matchesQuery = 
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleCopyUrl = (fullUrl: string) => {
    navigator.clipboard.writeText(fullUrl);
    setCopiedUrl(fullUrl);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const xmlContent = generateSitemapXML();

  const handleCopyXml = () => {
    navigator.clipboard.writeText(xmlContent);
    setXmlCopied(true);
    setTimeout(() => setXmlCopied(false), 2000);
  };

  const handleDownloadXml = () => {
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-24 transition-colors duration-300">
      <SEOHead 
        customMeta={meta}
        breadcrumbs={[
          { name: 'Home', url: `${SITE_CONFIG.siteUrl}/` },
          { name: 'Site Map & URL Directory', url: `${SITE_CONFIG.siteUrl}/sitemap` }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-200 dark:border-red-900/50">
            <Network className="w-4 h-4" />
            <span>Architecture &amp; URL Index</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Site Map &amp; <span className="text-red-600 dark:text-red-500">Semantic URLs</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Complete hierarchical map of all portal pages, technical blogs, regional patent jurisdictions (Grehat), and search engine index feeds.
          </p>

          {/* XML / HTML Switch Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setViewXml(false)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                !viewXml
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-red-600'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Visual Tree</span>
            </button>
            <button
              onClick={() => setViewXml(true)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewXml
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-red-600'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Raw sitemap.xml Schema</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Raw XML View */}
        {viewXml ? (
          <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
              <div>
                <h3 className="font-mono text-base font-bold text-red-400 flex items-center">
                  <FileText className="w-4 h-4 mr-2" /> sitemap.xml (W3C Sitemaps 0.9 Compliant)
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Target: {SITE_CONFIG.siteUrl}/sitemap.xml • Total Indexed URLs: {SITEMAP_ENTRIES.length}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCopyXml}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors flex items-center space-x-1.5 border border-slate-700 cursor-pointer"
                >
                  {xmlCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{xmlCopied ? 'XML Copied!' : 'Copy XML'}</span>
                </button>
                <button
                  onClick={handleDownloadXml}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-bold text-white transition-colors flex items-center space-x-1.5 shadow-md cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download sitemap.xml</span>
                </button>
              </div>
            </div>

            <pre className="font-mono text-xs text-slate-300 bg-slate-950 p-6 rounded-2xl overflow-x-auto border border-slate-800 leading-relaxed max-h-[500px]">
              {xmlContent}
            </pre>
          </div>
        ) : (
          /* View Mode 2: Interactive Visual Directory */
          <div>
            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-red-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72 flex-shrink-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter URLs, taglines, paths..."
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
            </div>

            {/* Sitemap Nodes Table / Cards */}
            <div className="space-y-4">
              {filteredEntries.map((node, idx) => {
                const fullUrl = `${SITE_CONFIG.siteUrl}${node.url}`;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-900 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Left: Path, Title, and Tagline */}
                      <div className="space-y-1.5 flex-grow">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-mono font-bold">
                            {node.url}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-[11px] font-bold">
                            {node.category}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono">
                            Priority: {node.priority.toFixed(1)}
                          </span>
                        </div>

                        <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                          <Link to={node.url} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                            {node.title}
                          </Link>
                        </h3>

                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 italic">
                          "{node.tagline}"
                        </p>

                        <p className="text-xs text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">
                          {node.description}
                        </p>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center space-x-2 flex-shrink-0 pt-2 lg:pt-0">
                        <button
                          onClick={() => handleCopyUrl(fullUrl)}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600 border border-slate-200 dark:border-slate-700 text-xs font-medium flex items-center transition-colors"
                          title="Copy Full Canonical URL"
                        >
                          {copiedUrl === fullUrl ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>

                        <Link
                          to={node.url}
                          className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-red-600 dark:hover:bg-red-600 text-white text-xs font-bold flex items-center transition-all shadow-sm"
                        >
                          <span>Visit Page</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Global IP Coverage & Quick Jurisdiction Finder Box */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-800/60 text-red-100 text-xs font-bold uppercase tracking-wider mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>Grehat &amp; Territorial Jurisdictions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              Looking for Your State's Statutory Patent Office?
            </h3>
            <p className="text-red-100 text-sm max-w-xl leading-relaxed">
              Explore territorial jurisdiction rules across Delhi, Mumbai, Chennai, and Kolkata branches under Section 74 of the Patents Act.
            </p>
          </div>
          <Link
            to="/jurisdictions"
            className="bg-white text-red-600 hover:bg-slate-100 px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg whitespace-nowrap inline-flex items-center"
          >
            Open Grehat Jurisdictions Map <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

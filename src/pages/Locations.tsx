import React, { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  GraduationCap, 
  Rocket, 
  ArrowRight, 
  ExternalLink, 
  Search, 
  ShieldCheck, 
  Phone, 
  Mail,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO_DATA } from '../data/seoData';
import { PAN_INDIA_GEO_HUBS, GeoLocationTarget } from '../data/backlinksData';

export default function Locations() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredHubs = PAN_INDIA_GEO_HUBS.filter(hub => {
    const matchesRegion = selectedRegion === 'all' || hub.region === selectedRegion;
    const matchesSearch = hub.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hub.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hub.startupHubs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          hub.majorUniversities.some(u => u.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  const breadcrumbs = [
    { name: 'Home', url: 'https://ipdefensesolutions.com/' },
    { name: 'Pan-India IP Hubs', url: 'https://ipdefensesolutions.com/locations' }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <SEOHead 
        customMeta={PAGE_SEO_DATA['/locations']} 
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/70 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-6 border border-red-200 dark:border-red-900 shadow-sm">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>Pan-India Regional Innovation Corridors</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Pan-India <span className="text-red-600 dark:text-red-500">Patent &amp; Trademark Legal Hubs</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Serving high-growth startups, deep-tech incubators, and research universities across major technology corridors and statutory patent jurisdictions in India.
            </p>

            {/* Search & Region Filter */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search city, university, or tech park (e.g. Koramangala, HITEC City, IIT)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:border-red-500 shadow-sm"
                />
              </div>

              <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                {['all', 'South', 'North', 'West', 'East & Central'].map(reg => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedRegion === reg
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {reg === 'all' ? 'All Regions' : reg}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hubs Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHubs.map((hub, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    {hub.region} Region
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                    IPO {hub.nearestPatentBranch} Branch
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {hub.city}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4">
                  {hub.state} • {hub.grehatTerritory}
                </p>

                {/* Tech Hubs & SEZs */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 flex items-center">
                    <Rocket className="w-3 h-3 mr-1 text-red-500" /> Major Tech &amp; Startup Hubs:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {hub.startupHubs.map((s, sidx) => (
                      <span key={sidx} className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-800/80 text-[11px] text-slate-700 dark:text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Major Universities */}
                <div className="mb-5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 flex items-center">
                    <GraduationCap className="w-3 h-3 mr-1 text-blue-500" /> Prominent Academic Institutions:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {hub.majorUniversities.map((u, uidx) => (
                      <span key={uidx} className="px-2 py-0.5 rounded bg-blue-50/50 dark:bg-blue-950/40 text-[11px] text-blue-800 dark:text-blue-300">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  to="/consultation"
                  className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline flex items-center"
                >
                  Book Local IP Counsel <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
                <Link
                  to="/jurisdictions"
                  className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Jurisdiction Rules
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Head & Regional Offices Summary */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-2">Central Headquarters</span>
              <h4 className="text-lg font-bold text-white mb-2">Hyderabad, Telangana</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Villa no. 48, Mythri Lake view housing society, Mallampet, Bachupally, Hyderabad 502325
              </p>
              <p className="text-xs text-slate-300 font-semibold mt-3">Tel: +91 7799045557</p>
            </div>
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-2">Branch Office</span>
              <h4 className="text-lg font-bold text-white mb-2">Guntur, Andhra Pradesh</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                5/4, Ram Sita Complex, Arudelpet, Guntur, Andhra Pradesh 522002
              </p>
              <p className="text-xs text-slate-300 font-semibold mt-3">Serving Amaravati &amp; Coastal AP</p>
            </div>
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-2">Eastern Support Hubs</span>
              <h4 className="text-lg font-bold text-white mb-2">Bhubaneswar &amp; Vizag</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Kalpana Square, Bhubaneswar, Odisha &amp; MVP Colony, Visakhapatnam
              </p>
              <p className="text-xs text-slate-300 font-semibold mt-3">support@ipdefensesolutions.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

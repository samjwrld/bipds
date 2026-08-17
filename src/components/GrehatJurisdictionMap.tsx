import React, { useState } from 'react';
import { MapPin, Building2, Scale, Phone, Mail, FileText, CheckCircle, Search, Shield, ArrowRight } from 'lucide-react';
import { PATENT_JURISDICTIONS, STATE_TO_JURISDICTION_MAP } from '../data/jurisdictionsData';
import { Link } from 'react-router-dom';

export default function GrehatJurisdictionMap() {
  const [selectedState, setSelectedState] = useState<string>('Telangana');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentJurisdictionId = STATE_TO_JURISDICTION_MAP[selectedState] || 'chennai-south';
  const activeJurisdiction = PATENT_JURISDICTIONS.find(j => j.id === currentJurisdictionId) || PATENT_JURISDICTIONS[0];

  const allStates = Object.keys(STATE_TO_JURISDICTION_MAP).sort();
  const filteredStates = allStates.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 dark:border-slate-800 transition-all">
      {/* Header & State Selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Scale className="w-3.5 h-3.5" />
            <span>Official CGPDTM Filing Jurisdictions (Grehat Mapping)</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
            Find Your Statutory Patent &amp; Trademark Office
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Under Rule 4 of The Patents Rules 2003, patent applications must be filed at the appropriate territorial branch office.
          </p>
        </div>

        {/* State Selector Dropdown & Search */}
        <div className="w-full lg:w-80">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Select Your State / UT:
          </label>
          <div className="relative">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-semibold rounded-2xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all cursor-pointer shadow-inner"
            >
              {allStates.map((state) => (
                <option key={state} value={state}>
                  {state} ({PATENT_JURISDICTIONS.find(j => j.id === STATE_TO_JURISDICTION_MAP[state])?.zone.split(' ')[0]})
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* 4 Territorial Zone Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
        {PATENT_JURISDICTIONS.map((jurisdiction) => {
          const isSelected = activeJurisdiction.id === jurisdiction.id;
          return (
            <button
              key={jurisdiction.id}
              onClick={() => {
                // select first state of this jurisdiction
                const firstState = Object.keys(STATE_TO_JURISDICTION_MAP).find(
                  s => STATE_TO_JURISDICTION_MAP[s] === jurisdiction.id
                );
                if (firstState) setSelectedState(firstState);
              }}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 relative ${
                isSelected
                  ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/20'
                  : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-900'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider block ${isSelected ? 'text-red-100' : 'text-slate-400 dark:text-slate-500'}`}>
                {jurisdiction.grehatCode}
              </span>
              <span className="font-bold text-sm block mt-0.5 leading-snug">
                {jurisdiction.zone.split('/')[0]}
              </span>
              <span className={`text-xs block mt-1 line-clamp-1 ${isSelected ? 'text-red-100' : 'text-slate-500 dark:text-slate-400'}`}>
                {jurisdiction.name.replace(' (CGPDTM)', '')}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Jurisdiction Deep Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Official Patent Office & Rules */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block">
                  Designated Filing Office for {selectedState}
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeJurisdiction.name}
                </h4>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400 text-xs font-bold rounded-full flex items-center">
                <CheckCircle className="w-3.5 h-3.5 mr-1" /> e-Filing Enabled
              </span>
            </div>

            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start">
                <Building2 className="w-4 h-4 text-red-500 mr-2.5 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Patent &amp; Design Office:</strong>
                  <span>{activeJurisdiction.patentOfficeAddress}</span>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="w-4 h-4 text-amber-500 mr-2.5 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Trade Marks Registry Branch:</strong>
                  <span>{activeJurisdiction.trademarkRegistryAddress}</span>
                </div>
              </div>

              <div className="flex items-start">
                <Scale className="w-4 h-4 text-blue-500 mr-2.5 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Appellate Jurisdiction &amp; High Court IPD:</strong>
                  <span>{activeJurisdiction.highCourtIPD}</span>
                </div>
              </div>
            </div>

            {/* Official Contact Info */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                {activeJurisdiction.contactNumber}
              </span>
              <span className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                {activeJurisdiction.officialEmail}
              </span>
            </div>
          </div>

          {/* Key Strategic Highlights for this Zone */}
          <div>
            <h5 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Territorial Sector Highlights &amp; Practice Areas
            </h5>
            <ul className="space-y-2.5">
              {activeJurisdiction.keyCoverageHighlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-red-500 mr-2.5 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: States in this Zone & Bharat IP Defence Support */}
        <div className="lg:col-span-5 space-y-6">
          {/* States included in this Grehat */}
          <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>States Covered in {activeJurisdiction.zone.split('/')[0]}</span>
              <span className="text-red-600 dark:text-red-400 text-[11px] font-bold">
                {activeJurisdiction.jurisdictionStates.length} States / UTs
              </span>
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {activeJurisdiction.jurisdictionStates.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedState(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedState === st
                      ? 'bg-red-600 text-white font-bold'
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Nearest Bharat IP Defence Office Desk */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-md">
            <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Bharat IP Defence Local Support</span>
            </div>
            <h5 className="font-bold text-lg text-white">
              {activeJurisdiction.ourNearestBranch.city}
            </h5>
            <p className="text-slate-300 text-xs mt-1 leading-relaxed">
              {activeJurisdiction.ourNearestBranch.address}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                {activeJurisdiction.ourNearestBranch.phone}
              </span>
              <Link
                to="/consultation"
                className="inline-flex items-center text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
              >
                Book Jurisdiction Audit <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>

          {/* Statutory Reference */}
          <div className="text-[11px] text-slate-400 dark:text-slate-500 italic flex items-start">
            <FileText className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 mt-0.5" />
            <span>Authority: {activeJurisdiction.governingRule}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

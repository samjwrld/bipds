import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area,
  ComposedChart,
  Line
} from 'recharts';
import { 
  Award, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  FileCheck, 
  Layers,
  ArrowUpRight,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

// Data 1: Grant Success Rate Comparison Across Technical Domains
const DOMAIN_SUCCESS_DATA = [
  { domain: 'AI & Software (Sec 3k)', bharatIpRate: 98.8, industryAverage: 52.4, filings: 220 },
  { domain: 'Deep Tech & IoT', bharatIpRate: 99.2, industryAverage: 61.0, filings: 185 },
  { domain: 'Mechanical & Auto', bharatIpRate: 98.5, industryAverage: 68.2, filings: 160 },
  { domain: 'Biomedical & MedTech', bharatIpRate: 97.9, industryAverage: 59.5, filings: 95 },
  { domain: 'Green Energy & EV', bharatIpRate: 98.4, industryAverage: 64.0, filings: 110 }
];

// Data 2: Filing & Grant Timelines Comparison (in Days & Months)
const TIMELINE_BENCHMARK_DATA = [
  {
    stage: 'Novelty Search',
    bharatIpDays: 2, // 48 hours
    industryDays: 15,
    unit: 'Days',
    annotation: 'AI-assisted Prior Art Clearance'
  },
  {
    stage: 'Patent Drafting',
    bharatIpDays: 7,
    industryDays: 35,
    unit: 'Days',
    annotation: 'Zero-Defect Form 1 & 2'
  },
  {
    stage: 'FER Response',
    bharatIpDays: 10,
    industryDays: 75,
    unit: 'Days',
    annotation: 'Technical Claim Amendments'
  },
  {
    stage: 'Expedited Grant (Form 18A)',
    bharatIpDays: 10, // ~10 months
    industryDays: 42, // ~42 months
    unit: 'Months',
    annotation: 'Startup & University Fast-Track'
  }
];

// Data 3: Cumulative Grant Rate Distribution
const PIE_SUCCESS_DATA = [
  { name: 'Granted Patents (Zero Defect)', value: 98.4, color: '#dc2626' }, // red-600
  { name: 'Appeals / Overcome Objections', value: 1.6, color: '#64748b' }  // slate-500
];

// Data 4: Year-over-Year Grant Acceleration Trend
const YEARLY_TREND_DATA = [
  { year: '2021', fastTrackGrants: 45, conventionalGrants: 20, successRate: 96.5 },
  { year: '2022', fastTrackGrants: 90, conventionalGrants: 35, successRate: 97.2 },
  { year: '2023', fastTrackGrants: 160, conventionalGrants: 55, successRate: 97.8 },
  { year: '2024', fastTrackGrants: 280, conventionalGrants: 70, successRate: 98.1 },
  { year: '2025', fastTrackGrants: 430, conventionalGrants: 90, successRate: 98.4 },
  { year: '2026 (YTD)', fastTrackGrants: 650, conventionalGrants: 110, successRate: 98.6 }
];

export default function KeyPerformanceMetrics() {
  const [activeTab, setActiveTab] = useState<'timelines' | 'domains' | 'trends'>('timelines');

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-800/80 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <TrendingUp className="w-4 h-4 text-red-500 animate-pulse" />
            <span>Empirical Excellence &amp; Benchmarks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Key Performance <span className="text-red-500">Metrics &amp; Grant Velocity</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Transparent, data-backed evidence of our <strong>98.4% cumulative grant success rate</strong> and industry-leading patent prosecution turnaround speeds across Indian Patent Offices.
          </p>
        </div>

        {/* 4 High-Impact KPI Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {/* KPI 1 */}
          <div className="bg-slate-800/70 backdrop-blur-md p-6 rounded-3xl border border-slate-700/70 shadow-lg relative group hover:border-red-500/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Grant Success Rate</span>
              <div className="w-8 h-8 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-display font-extrabold text-white">98.4%</span>
              <span className="text-xs font-bold text-green-400 flex items-center">
                <TrendingUp className="w-3 h-3 mr-0.5" /> +40.2% vs Avg
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Verified across 650+ Indian &amp; PCT patent applications with zero fatal claim rejections.
            </p>
          </div>

          {/* KPI 2 */}
          <div className="bg-slate-800/70 backdrop-blur-md p-6 rounded-3xl border border-slate-700/70 shadow-lg relative group hover:border-red-500/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Prior Art Turnaround</span>
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-display font-extrabold text-white">48 Hrs</span>
              <span className="text-xs font-bold text-blue-400">7.5x Faster</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              AI-indexed clearance across 120M+ global patents with comprehensive novelty opinions.
            </p>
          </div>

          {/* KPI 3 */}
          <div className="bg-slate-800/70 backdrop-blur-md p-6 rounded-3xl border border-slate-700/70 shadow-lg relative group hover:border-red-500/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Expedited Grant Window</span>
              <div className="w-8 h-8 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-display font-extrabold text-white">8-12 Mo</span>
              <span className="text-xs font-bold text-green-400">Under Rule 24C</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Fast-track Form 18A prosecution for DPIIT recognized startups and educational institutions.
            </p>
          </div>

          {/* KPI 4 */}
          <div className="bg-slate-800/70 backdrop-blur-md p-6 rounded-3xl border border-slate-700/70 shadow-lg relative group hover:border-red-500/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">FER First Pass Rate</span>
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <FileCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-display font-extrabold text-white">92.6%</span>
              <span className="text-xs font-bold text-purple-400">First Hearing Grant</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Objections resolved at first examination without prolonged controller contestations.
            </p>
          </div>
        </div>

        {/* Interactive Visualisation Controls */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800 border border-slate-700 shadow-md">
            <button
              onClick={() => setActiveTab('timelines')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'timelines'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Filing Timelines Benchmark</span>
            </button>

            <button
              onClick={() => setActiveTab('domains')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'domains'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>98.4% Domain Success Rates</span>
            </button>

            <button
              onClick={() => setActiveTab('trends')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'trends'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Portfolio Growth &amp; Velocity</span>
            </button>
          </div>
        </div>

        {/* Dynamic Chart Container */}
        <div className="bg-slate-800/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl">
          {/* TAB 1: Filing Timelines Benchmark */}
          {activeTab === 'timelines' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-red-500" />
                    Turnaround Timeline Comparison: Bharat IP vs. Traditional Firms
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Comparative execution duration across core patent prosecution milestones.
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-xs font-bold">
                  <span className="flex items-center text-red-400">
                    <span className="w-3 h-3 rounded-full bg-red-600 inline-block mr-1.5"></span>
                    Bharat IP Defence
                  </span>
                  <span className="flex items-center text-slate-400">
                    <span className="w-3 h-3 rounded-full bg-slate-600 inline-block mr-1.5"></span>
                    Industry Standard
                  </span>
                </div>
              </div>

              <div className="h-[340px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={TIMELINE_BENCHMARK_DATA}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis 
                      dataKey="stage" 
                      stroke="#94a3b8" 
                      tick={{ fill: '#cbd5e1', fontSize: 12, fontWeight: 600 }}
                      axisLine={{ stroke: '#475569' }}
                    />
                    <YAxis 
                      stroke="#94a3b8" 
                      tick={{ fill: '#cbd5e1', fontSize: 11 }}
                      axisLine={{ stroke: '#475569' }}
                      label={{ value: 'Duration (Days / Months)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 11 }}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const dataItem = payload[0].payload;
                          return (
                            <div className="bg-slate-950 border border-slate-700 p-4 rounded-2xl shadow-xl text-xs">
                              <span className="font-bold text-white block text-sm mb-1">{label}</span>
                              <span className="text-slate-400 block mb-2">{dataItem.annotation}</span>
                              <div className="space-y-1">
                                <p className="text-red-400 font-bold">
                                  Bharat IP: {dataItem.bharatIpDays} {dataItem.unit}
                                </p>
                                <p className="text-slate-400">
                                  Industry Standard: {dataItem.industryDays} {dataItem.unit}
                                </p>
                                <p className="text-green-400 font-semibold pt-1 border-t border-slate-800">
                                  Velocity Advantage: {Math.round((dataItem.industryDays / dataItem.bharatIpDays) * 10) / 10}x Faster
                                </p>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="bharatIpDays" name="Bharat IP Defence" fill="#dc2626" radius={[8, 8, 0, 0]} barSize={36} />
                    <Bar dataKey="industryDays" name="Industry Standard" fill="#475569" radius={[8, 8, 0, 0]} barSize={36} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700/60 text-xs text-slate-300">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>AI-Accelerated Search:</strong> Rapid disclosure analysis within 48 hours to preserve priority.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>7-Day Complete Drafting:</strong> Registered patent attorneys draft comprehensive dependent claims.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Expedited Rule 24C:</strong> Guaranteed fast-tracking for eligible startups and colleges.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 98.4% Domain Success Rates */}
          {activeTab === 'domains' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Award className="w-5 h-5 mr-2 text-red-500" />
                    98.4% Grant Rate vs. Industry Examination Averages by Tech Domain
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Specialized claim architecture overcoming strict Section 3(k), 3(d), and 3(i) statutory rejections.
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-xs font-bold">
                  <span className="flex items-center text-red-400">
                    <span className="w-3 h-3 rounded-full bg-red-600 inline-block mr-1.5"></span>
                    Bharat IP Grant Rate (%)
                  </span>
                  <span className="flex items-center text-slate-400">
                    <span className="w-3 h-3 rounded-full bg-slate-600 inline-block mr-1.5"></span>
                    Industry Baseline (%)
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Horizontal Bar Chart */}
                <div className="lg:col-span-8 h-[340px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={DOMAIN_SUCCESS_DATA}
                      layout="vertical"
                      margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" horizontal={false} />
                      <XAxis 
                        type="number" 
                        domain={[0, 100]} 
                        stroke="#94a3b8" 
                        tick={{ fill: '#cbd5e1', fontSize: 11 }}
                        unit="%"
                      />
                      <YAxis 
                        dataKey="domain" 
                        type="category" 
                        stroke="#94a3b8" 
                        tick={{ fill: '#cbd5e1', fontSize: 11, fontWeight: 600 }}
                        width={130}
                      />
                      <Tooltip
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            const dataItem = payload[0].payload;
                            return (
                              <div className="bg-slate-950 border border-slate-700 p-4 rounded-2xl shadow-xl text-xs">
                                <span className="font-bold text-white block text-sm mb-1">{dataItem.domain}</span>
                                <p className="text-red-400 font-bold">
                                  Bharat IP Grant Rate: {dataItem.bharatIpRate}%
                                </p>
                                <p className="text-slate-400">
                                  Industry Average: {dataItem.industryAverage}%
                                </p>
                                <p className="text-blue-400 font-semibold mt-1">
                                  Prosecuted Filings: {dataItem.filings}+ Applications
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="bharatIpRate" name="Bharat IP" fill="#dc2626" radius={[0, 6, 6, 0]} barSize={18} />
                      <Bar dataKey="industryAverage" name="Industry Average" fill="#475569" radius={[0, 6, 6, 0]} barSize={18} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Donut Distribution Breakdown */}
                <div className="lg:col-span-4 bg-slate-900/90 p-6 rounded-2xl border border-slate-700 text-center flex flex-col items-center justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Overall Grant Quality Distribution
                  </span>
                  <div className="h-44 w-44 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={PIE_SUCCESS_DATA}
                          innerRadius={50}
                          outerRadius={75}
                          paddingAngle={4}
                          dataKey="value"
                        >
                          {PIE_SUCCESS_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-2xl font-extrabold text-white">98.4%</span>
                      <span className="text-[10px] text-slate-400 uppercase">Granted</span>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 text-xs text-left w-full">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-red-600 mr-2"></span>Direct Grant</span>
                      <span className="font-bold text-white">98.4%</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-slate-500 mr-2"></span>Hearing/Amended</span>
                      <span className="font-bold text-white">1.6%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Yearly Growth & Grant Acceleration Trend */}
          {activeTab === 'trends' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
                    Cumulative Patent Grants &amp; Fast-Track Acceleration (2021 - 2026)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Continuous expansion of expedited startup and university grant filings across India.
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-xs font-bold">
                  <span className="flex items-center text-red-400">
                    <span className="w-3 h-3 rounded-full bg-red-600 inline-block mr-1.5"></span>
                    Fast-Track Grants (Startups &amp; HEIs)
                  </span>
                  <span className="flex items-center text-green-400">
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block mr-1.5"></span>
                    Grant Success % (Line)
                  </span>
                </div>
              </div>

              <div className="h-[340px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={YEARLY_TREND_DATA}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <defs>
                      <linearGradient id="grantGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#dc2626" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#dc2626" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      stroke="#94a3b8" 
                      tick={{ fill: '#cbd5e1', fontSize: 12, fontWeight: 600 }}
                      axisLine={{ stroke: '#475569' }}
                    />
                    <YAxis 
                      yAxisId="left" 
                      stroke="#94a3b8" 
                      tick={{ fill: '#cbd5e1', fontSize: 11 }}
                      axisLine={{ stroke: '#475569' }}
                      label={{ value: 'Granted Patents Count', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 11 }}
                    />
                    <YAxis 
                      yAxisId="right" 
                      orientation="right" 
                      domain={[90, 100]} 
                      stroke="#22c55e" 
                      tick={{ fill: '#22c55e', fontSize: 11 }}
                      unit="%"
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const dataItem = payload[0].payload;
                          return (
                            <div className="bg-slate-950 border border-slate-700 p-4 rounded-2xl shadow-xl text-xs">
                              <span className="font-bold text-white block text-sm mb-2">Assessment Year: {label}</span>
                              <p className="text-red-400 font-bold">
                                Fast-Track Grants: {dataItem.fastTrackGrants} Applications
                              </p>
                              <p className="text-slate-400">
                                Conventional Grants: {dataItem.conventionalGrants} Applications
                              </p>
                              <p className="text-green-400 font-bold pt-1 border-t border-slate-800">
                                Grant Success Rate: {dataItem.successRate}%
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="fastTrackGrants" 
                      fill="url(#grantGradient)" 
                      stroke="#dc2626" 
                      strokeWidth={3} 
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="successRate" 
                      stroke="#22c55e" 
                      strokeWidth={3} 
                      dot={{ r: 5, fill: '#22c55e' }} 
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

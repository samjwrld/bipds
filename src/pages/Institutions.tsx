import React from 'react';
import { GraduationCap, Lightbulb, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Institutions() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">For <span className="text-red-600">Institutions</span></h1>
          <p className="text-xl text-slate-600">
            Empowering colleges, universities, and research centers to protect student innovation and faculty research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Transforming Academic Research into <span className="text-red-600">Commercial Assets.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We understand the unique challenges faced by academic institutions in managing intellectual property. Our dedicated programs bridge the gap between academic research and commercial viability, ensuring that student projects and faculty inventions are properly protected and monetized.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Specialized IP Workshops for Students & Faculty",
                "Discounted Patent Filing Rates for Educational Institutions",
                "Support for Incubation Centers & E-Cells",
                "Assistance with Technology Transfer & Licensing"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link to="/consultation" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors inline-flex items-center shadow-lg">
              Partner With Us <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                alt="University Collaboration" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">50+ Partners</div>
                  <div className="text-sm text-slate-500">Leading Colleges</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Lightbulb,
              title: "Student Innovation Program",
              desc: "We guide students through the patent process, from idea validation to filing, fostering a culture of innovation on campus."
            },
            {
              icon: Users,
              title: "Faculty Research Support",
              desc: "Dedicated support for faculty members to protect their research outcomes and publish papers without losing patent rights."
            },
            {
              icon: GraduationCap,
              title: "IP Cell Establishment",
              desc: "We help institutions set up and manage their own Intellectual Property Rights (IPR) cells for sustainable innovation management."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8">Join our network of innovative institutions.</h2>
            <p className="text-xl text-slate-300 mb-10">
              Provide your students and faculty with the best IP resources. Contact us to discuss a customized partnership plan.
            </p>
            <Link to="/consultation" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-red-600/20 inline-flex items-center">
              Schedule a Meeting <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
}

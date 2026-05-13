import React from 'react';
import { Lightbulb, ClipboardCheck, PenTool, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Process() {
  const steps = [
    {
      step: "01",
      icon: Lightbulb,
      title: "Idea Disclosure & Consultation",
      description: "We start with a confidential discussion about your invention or brand. We sign a Non-Disclosure Agreement (NDA) to ensure your idea remains secure.",
      details: "Our experts will understand the technical aspects and commercial potential of your IP."
    },
    {
      step: "02",
      icon: ClipboardCheck,
      title: "Novelty & Clearance Search",
      description: "We conduct a thorough search of existing patents and trademarks to determine the uniqueness and registrability of your IP.",
      details: "This crucial step helps avoid potential infringement issues and strengthens your application."
    },
    {
      step: "03",
      icon: PenTool,
      title: "Drafting & Documentation",
      description: "Our experienced patent agents and attorneys draft comprehensive specifications and legal documents tailored to your invention.",
      details: "We ensure all technical details are accurately captured to provide the broadest possible protection."
    },
    {
      step: "04",
      icon: Send,
      title: "Filing & Submission",
      description: "We file your application with the appropriate IP office (Indian Patent Office, Trademark Registry, etc.) and handle all formalities.",
      details: "You receive an official filing receipt and application number immediately upon submission."
    },
    {
      step: "05",
      icon: ShieldCheck,
      title: "Prosecution & Grant",
      description: "We monitor the application status, respond to examination reports, and attend hearings until the final grant or registration.",
      details: "Our team proactively manages deadlines and legal requirements throughout the process."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-6">Our <span className="text-red-600">Process</span></h1>
          <p className="text-xl text-slate-600">
            A transparent, streamlined workflow designed to take your idea from concept to protected asset with minimal hassle.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 p-4">
                  <div className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all relative ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`absolute top-8 ${idx % 2 === 0 ? 'right-8' : 'left-8'} text-6xl font-display font-bold text-slate-100 -z-10`}>
                      {step.step}
                    </div>
                    <div className={`w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 ${idx % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                      <step.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                    <p className="text-sm text-slate-500 italic">{step.details}</p>
                  </div>
                </div>
                
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-sm transform -translate-x-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Ready to start your journey?</h2>
          <Link to="/consultation" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center">
            Begin Step 1: Free Consultation <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { ShieldCheck, Users, Target, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandMarquee from '../components/BrandMarquee';

export default function About() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-red-100 dark:border-slate-800 text-red-600 dark:text-red-400 text-sm font-bold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
            About Us
          </div>
          <h1 className="text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Protecting Innovation, <br/><span className="text-red-600 dark:text-red-500">Empowering Growth.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Bharat IP Defence is India's premier Intellectual Property consulting firm, dedicated to helping startups, researchers, and enterprises secure their most valuable assets.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="w-14 h-14 bg-red-50 dark:bg-red-950/60 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To democratize Intellectual Property protection in India by making expert legal counsel accessible, affordable, and transparent for every innovator. We strive to build a robust IP ecosystem that fuels national growth and technological advancement.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="w-14 h-14 bg-red-50 dark:bg-red-950/60 rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the most trusted partner for IP strategy in India, recognized for our integrity, technical expertise, and unwavering commitment to client success. We envision a future where every Indian innovation is legally protected and commercially viable.
            </p>
          </div>
        </div>
      </div>

      {/* Why Bharat IP Defence */}
      <div className="bg-slate-900 dark:bg-slate-900/90 border-y border-slate-800 text-white py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Bharat IP Defence?</h2>
            <p className="text-slate-400 text-lg">
              We combine deep legal expertise with technical understanding to provide unmatched IP protection services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Expertise",
                desc: "Our team comprises patent agents with backgrounds in engineering, biotechnology, and computer science, ensuring we understand your invention inside out."
              },
              {
                title: "Proactive Strategy",
                desc: "We don't just file applications; we build comprehensive IP strategies that align with your business goals and maximize valuation."
              },
              {
                title: "Transparent Process",
                desc: "No hidden fees or legal jargon. We keep you informed at every step of the process with clear timelines and deliverables."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start mb-4">
                  <CheckCircle2 className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed pl-9">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Meet Our Experts</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">The minds protecting your innovations.</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Debasis Barik",
              role: "Founder",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "S. Deepika",
              role: "Proprietor",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "Nandini Srinivas",
              role: "IP Expert (Patent & Trademark Litigation)",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "Shaik Nazeerudin Baba",
              role: "Advocate",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "S Vaishnavi",
              role: "Trademark Expert",
              image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "R. Akhila",
              role: "Promotional Manager",
              image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "K Khusi",
              role: "Legal Draft Specialist",
              image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "M Priyanka",
              role: "Legal Operations Manager",
              image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400",
            }
          ].map((member, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                <div className="text-red-600 dark:text-red-400 font-medium text-xs">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted By Brands & Institutions */}
      <div className="mb-24">
        <BrandMarquee />
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-red-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold mb-6">Ready to work with the best?</h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto text-lg">
              Schedule a consultation with our expert team and take the first step towards securing your intellectual property.
            </p>
            <Link to="/consultation" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition-colors inline-flex items-center shadow-lg">
              Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>
        </div>
      </div>
    </div>
  );
}

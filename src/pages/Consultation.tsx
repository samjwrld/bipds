import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';
import { socialLinks } from '../data/socialLinks';

export default function Consultation() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Contact <span className="text-red-600 dark:text-red-500">Us</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Get in touch with our IP experts for a free, confidential consultation.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 md:p-16 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold mb-8">Let's Discuss Your IP Needs</h2>
              <p className="text-slate-300 mb-12 leading-relaxed">
                Whether you have a new invention, a brand to protect, or need legal advice on an existing IP portfolio, we are here to help. Our team will guide you through the process with clarity and expertise.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-6 border border-white/10 flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Call Us</div>
                    <div className="text-xl font-bold text-white">7799045557</div>
                    <div className="text-sm text-slate-500 mt-1">Mon-Fri, 9am - 6pm IST</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-6 border border-white/10 flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email Us</div>
                    <div className="text-xl font-bold text-white">support@ipdefensesolutions.com</div>
                    <div className="text-sm text-slate-500 mt-1">We reply within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-6 border border-white/10 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Visit Us</div>
                      <div className="text-lg font-bold text-white">Head Office (Hyderabad)</div>
                      <div className="text-sm text-slate-500 mt-1">
                        Villa no. 48, Mythri Lake view housing society,<br/>
                        Mallampet, Bachupally, Hyderabad,<br/>
                        Telangana 502325
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-white/10">
                      <div>
                        <div className="text-md font-bold text-white">Branch Office (Guntur)</div>
                        <div className="text-xs text-slate-400 mt-1">
                          5/4, Ram Sita Complex, Arudelpet,<br/>
                          Guntur, Andhra Pradesh 522002
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-md font-bold text-white">Bhubaneshwar Office</div>
                        <div className="text-xs text-slate-400 mt-1">
                          Kalpana Square, Plot no 18, near Chintamaishwar Temple, Bhubaneshwar
                        </div>
                      </div>

                      <div>
                        <div className="text-md font-bold text-white">Rourkella Office</div>
                        <div className="text-xs text-slate-400 mt-1">
                          Civil township, Plot no G29
                        </div>
                      </div>

                      <div>
                        <div className="text-md font-bold text-white">Vizag Office</div>
                        <div className="text-xs text-slate-400 mt-1">
                          MVP colony, sector 2, Plot no 5, Vizag
                        </div>
                      </div>
                    </div>

                    {/* Social Media Connect Section */}
                    <div className="pt-6 border-t border-white/10">
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">Connect on Social Channels</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a 
                          href="https://www.linkedin.com/company/bharat-ip-defense-solutions" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2] transition-all duration-200 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white flex-shrink-0">
                            <Linkedin className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">LinkedIn</div>
                            <div className="text-[11px] text-slate-400 truncate">Bharat IP Defense Solutions</div>
                          </div>
                        </a>

                        <a 
                          href="https://www.instagram.com/bharatipdefence" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-rose-500/20 hover:border-rose-500 transition-all duration-200 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                            <Instagram className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-white group-hover:text-rose-400 transition-colors">Instagram</div>
                            <div className="text-[11px] text-slate-400 truncate">@bharatipdefence</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-16 bg-white dark:bg-slate-900">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-8">Send us a Message</h2>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 pt-20 pb-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <ShieldCheck className="w-8 h-8 text-red-600 mr-2" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight text-slate-900 leading-none">
                  Bharat <span className="text-red-600">IP</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                  Defense Solutions
                </span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              Leading <strong>Patent Consultants for Startups</strong> and <strong>Trademark Registration Experts</strong> in India. Providing comprehensive IP services to secure your innovations.
            </p>
            <div className="flex space-x-4 mb-8">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-600 hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-md">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Online & Offline Services Available
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Patent Search & Filing</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Trademark Registration</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Copyright Protection</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">IP Litigation Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li><Link to="/" className="hover:text-red-600 transition-colors">About Us</Link></li>
              <li><Link to="/institutions" className="hover:text-red-600 transition-colors">For Institutions</Link></li>
              <li><Link to="/knowledge" className="hover:text-red-600 transition-colors">Knowledge Center</Link></li>
              <li><Link to="/consultation" className="hover:text-red-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Contact & Location</h4>
            <div className="mb-4">
              <span className="block font-bold text-slate-700 text-sm mb-1">Head Office (Hyderabad):</span>
              <p className="text-slate-500 text-sm">
                Villa no. 48, Mythri Lake view housing society,<br/>
                Mallampet, Bachupally, Hyderabad,<br/>
                Telangana 502325
              </p>
            </div>
            <div className="mb-4">
              <span className="block font-bold text-slate-700 text-sm mb-1">Branch Office (Guntur):</span>
              <p className="text-slate-500 text-sm">
                5/4, Ram Sita Complex, Arudelpet,<br/>
                Guntur, Andhra Pradesh 522002
              </p>
            </div>
            <p className="text-slate-500 text-sm mb-4">
              <span className="block font-bold text-slate-700">Phone:</span> 7799045557
            </p>
            <p className="text-slate-500 text-sm mb-6">
              <span className="block font-bold text-slate-700">Email:</span> support@ipdefensesolutions.com
            </p>
            <div className="w-full h-32 rounded-lg overflow-hidden border border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.814321033282!2d78.3693247!3d17.5164213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d002a24687f%3A0x67a9962a9b311100!2sMallampet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1708498000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Bharat IP Defence. All rights reserved. 
            <span className="mx-2 hidden md:inline">|</span>
            <span className="block md:inline mt-2 md:mt-0">
              Hand Crafted by <a href="https://www.boldblank.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-medium hover:text-red-600 transition-colors">BoldBlank</a>
            </span>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

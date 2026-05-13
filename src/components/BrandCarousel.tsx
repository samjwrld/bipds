import React from 'react';
import { motion } from 'motion/react';

const brands = [
  { name: "TechNova", url: "https://picsum.photos/seed/tech/200/100" },
  { name: "GreenEnergy", url: "https://picsum.photos/seed/green/200/100" },
  { name: "BioLife", url: "https://picsum.photos/seed/bio/200/100" },
  { name: "FinTech Secure", url: "https://picsum.photos/seed/fin/200/100" },
  { name: "EduSmart", url: "https://picsum.photos/seed/edu/200/100" },
  { name: "AgriGrow", url: "https://picsum.photos/seed/agri/200/100" },
  { name: "HealthPlus", url: "https://picsum.photos/seed/health/200/100" },
  { name: "BuildRight", url: "https://picsum.photos/seed/build/200/100" },
];

export default function BrandCarousel() {
  return (
    <div className="py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <h3 className="text-2xl font-display font-bold text-slate-900">Trusted by Leading Brands</h3>
        <p className="text-slate-500 mt-2">Partnering with the best to protect their innovations.</p>
      </div>
      
      <div className="relative flex overflow-hidden mask-linear-gradient">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        <motion.div
          className="flex flex-shrink-0 gap-16 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {/* Duplicate the list to create seamless loop */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center w-48 h-24 bg-slate-50 rounded-2xl border border-slate-100 p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
            >
              <img 
                src={brand.url} 
                alt={brand.name} 
                className="max-w-full max-h-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

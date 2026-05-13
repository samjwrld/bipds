import React from 'react';

const brands = [
  { name: "President Dhaba", logo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=100&h=100&fit=crop&auto=format" },
  { name: "Kadapa Ruchulu", logo: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=100&h=100&fit=crop&auto=format" },
  { name: "Ministry of Coffee Affairs", logo: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=100&h=100&fit=crop&auto=format" },
  { name: "Murugan", logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop&auto=format" },
  { name: "Sowbhagya Organics", logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&h=100&fit=crop&auto=format" },
  { name: "V6 News", logo: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=100&h=100&fit=crop&auto=format" },
  { name: "Babai Hotel", logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop&auto=format" },
  { name: "Mr.9T", logo: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=100&h=100&fit=crop&auto=format" },
];

export default function BrandMarquee() {
  // Duplicate the brands array to create a seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Brands We Worked For</h3>
      </div>
      <div className="relative w-full overflow-hidden flex">
        <div className="flex w-max animate-marquee">
          {duplicatedBrands.map((brand, idx) => (
            <div key={idx} className="flex items-center space-x-4 mx-8 group cursor-pointer">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <span className="text-lg font-bold text-slate-700 group-hover:text-red-600 transition-colors whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

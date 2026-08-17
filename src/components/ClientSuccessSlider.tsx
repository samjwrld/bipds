import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseItem {
  id: number;
  category: string;
  client: string;
  title: string;
  turnaround: string;
  description: string;
  image: string;
}

const CASES: CaseItem[] = [
  {
    id: 1,
    category: 'Patent Granted',
    client: 'TechNova Automotive Labs',
    title: 'Eco-Charge EV Fast-Grid Balancing System',
    turnaround: '14 Months (Rule 24C)',
    description: 'Expedited patent grant overcoming Section 3(k) objections for high-efficiency bidirectional charging firmware.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    category: 'Trademark Registered',
    client: 'Sowbhagya Agro Corp',
    title: 'Sowbhagya Pure Harvest Organics',
    turnaround: '4.5 Months Turnaround',
    description: 'Multi-class brand moat across Class 29, 30 & 35, successfully resolving sound-alike competitor oppositions.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    category: 'PCT International',
    client: 'IIT Innovation Research Cell',
    title: 'Nano-Filter Desalination Graphene Membrane',
    turnaround: 'WIPO Priority Secured',
    description: 'Secured international priority filing across US, EPO, and Japan with zero novelty invalidity citations.',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    category: 'Copyright & AI',
    client: 'BioLife AI Solutions',
    title: 'DeepLobe Neural Voice Biometrics Engine',
    turnaround: '21 Days Fast-Track',
    description: 'Registered proprietary neural audio synthesizers and transformer algorithms under statutory copyright protections.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    category: 'Design Registered',
    client: 'Arogya Medical Systems',
    title: 'Ergonomic 3D Surgical Laparoscope',
    turnaround: '3 Months Total',
    description: 'Industrial design registration protecting novel aesthetic contours and 7-axis ergonomic grip.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    category: 'Startup Patent',
    client: 'KrishiVigyan Robotics',
    title: 'Autonomous Multi-Spectral Crop Yield Drone',
    turnaround: '11 Months (DPIIT)',
    description: 'Accelerated patent grant under DPIIT startup 80% fee rebate for edge-computing agricultural sensors.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80'
  }
];

export default function ClientSuccessSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, CASES.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) nextSlide();
    if (diff < -40) prevSlide();
    touchStartX.current = null;
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Carousel Navigation */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Client Success &amp; IP Laurels
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1.5 max-w-2xl">
              Real-world patents, trademarks, and design rights secured for innovative startups and research institutions.
            </p>
          </div>

          {/* Simple Navigation Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
            }}
          >
            {CASES.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 px-2.5 sm:px-3"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between group">
                  
                  {/* Clean Image Banner */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 dark:bg-slate-900/90 text-red-600 dark:text-red-400 border border-slate-200/80 dark:border-slate-700 shadow-sm backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Clean Details */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider block mb-1">
                        {item.client}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer Milestone */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-700/70 flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Timeline</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                        {item.turnaround}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center space-x-1.5 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 bg-red-600'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

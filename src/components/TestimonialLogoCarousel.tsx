import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Founder, TechNova",
    logo: "https://picsum.photos/seed/tech/200/100",
    quote: "Bharat IP Defence helped us secure our patent in record time. Their team is extremely knowledgeable and professional. The entire process was transparent and efficient.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Anjali Gupta",
    role: "Researcher, IIT Delhi",
    logo: "https://picsum.photos/seed/edu/200/100",
    quote: "The best IP consulting firm for academic institutions. They understand the nuances of research and patent filing. Their guidance was invaluable for our department.",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "CEO, GreenEnergy",
    logo: "https://picsum.photos/seed/green/200/100",
    quote: "Their trademark registration process was seamless. Highly recommended for startups looking for hassle-free IP protection. We felt supported every step of the way.",
    rating: 5
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Co-founder, BioLife Solutions",
    logo: "https://picsum.photos/seed/bio/200/100",
    quote: "We were struggling with IP strategy until we met the team at Bharat IP Defence. They not only filed our patents but helped us structure our IP portfolio for investment.",
    rating: 5
  }
];

export default function TestimonialLogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
      <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Logo Section */}
              <div className="w-48 h-24 flex-shrink-0 bg-slate-50 rounded-2xl border border-slate-100 p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src={testimonials[currentIndex].logo} 
                  alt={testimonials[currentIndex].name} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow relative">
                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-red-50 opacity-50" />
                
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed italic mb-6 relative z-10">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-red-600 font-medium text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center mt-8 space-x-6">
        <button
          onClick={() => paginate(-1)}
          className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-600 hover:text-red-600 hover:scale-110 transition-all duration-300"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-red-600 w-8' : 'bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-600 hover:text-red-600 hover:scale-110 transition-all duration-300"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

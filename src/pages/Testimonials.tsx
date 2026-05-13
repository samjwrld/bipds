import React from 'react';
import { Quote, Star, User, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import TestimonialLogoCarousel from '../components/TestimonialLogoCarousel';
import BrandMarquee from '../components/BrandMarquee';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Founder, TechNova",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    quote: "Bharat IP Defence helped us secure our patent in record time. Their team is extremely knowledgeable and professional. The entire process was transparent and efficient.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Anjali Gupta",
    role: "Researcher, IIT Delhi",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    quote: "The best IP consulting firm for academic institutions. They understand the nuances of research and patent filing. Their guidance was invaluable for our department.",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "CEO, GreenEnergy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    quote: "Their trademark registration process was seamless. Highly recommended for startups looking for hassle-free IP protection. We felt supported every step of the way.",
    rating: 5
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Co-founder, BioLife Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    quote: "We were struggling with IP strategy until we met the team at Bharat IP Defence. They not only filed our patents but helped us structure our IP portfolio for investment.",
    rating: 5
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "Director, Mehta Textiles",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    quote: "Protecting our legacy designs was crucial. The copyright services provided were top-notch. They explained everything in simple terms and got the job done.",
    rating: 4
  },
  {
    id: 6,
    name: "Priya Desai",
    role: "CTO, FinTech Secure",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=200",
    quote: "Fast, reliable, and expert advice. That's what you get with Bharat IP Defence. They handled our software patent application with incredible attention to detail.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-red-100 text-red-600 text-sm font-bold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
            Client Stories
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Trusted by <span className="text-red-600">Innovators</span> Across India
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Don't just take our word for it. Hear from the startups, researchers, and businesses we've helped protect.
          </p>
        </div>
      </div>

      {/* Featured Carousel Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold text-slate-900">Featured Partnerships</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <TestimonialLogoCarousel />
      </div>

      <BrandMarquee />

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-red-50">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                  <div className="text-xs font-medium text-slate-500 flex items-center">
                    <Building2 className="w-3 h-3 mr-1" />
                    {testimonial.role}
                  </div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} 
                  />
                ))}
              </div>

              <div className="relative flex-grow">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-red-50 opacity-50" />
                <p className="text-slate-600 italic relative z-10 pl-4">
                  "{testimonial.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
        <div className="bg-slate-900 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-display font-bold mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Patents Filed", value: "500+" },
              { label: "Trademarks Registered", value: "1200+" },
              { label: "Happy Clients", value: "850+" },
              { label: "Success Rate", value: "98%" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

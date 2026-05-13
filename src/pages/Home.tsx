import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'motion/react';
import { 
  ShieldCheck, Lightbulb, FileText, Scale, Search, Clock, Users, 
  CreditCard, Lock, GraduationCap, ChevronRight, Phone, Mail, 
  MapPin, MessageSquare, ArrowRight, CheckCircle2,
  ClipboardCheck, PenTool, Send
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';
import InteractiveHeroGraphic from '../components/InteractiveHeroGraphic';
import BrandMarquee from '../components/BrandMarquee';

const CountUp = ({ to, suffix = "", duration = 2 }: { to: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = to;
      const totalFrames = Math.round(duration * 60);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 3))); // Ease out cubic
        
        if (frame === totalFrames) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(currentCount);
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }
  }, [isInView, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const PatentGrowthChart = () => {
  const data = [
    { year: '2020', patents: 12 },
    { year: '2021', patents: 25 },
    { year: '2022', patents: 45 },
    { year: '2023', patents: 80 },
    { year: '2024', patents: 150 },
    { year: '2025', patents: 200 },
  ];

  return (
    <div className="h-64 w-full bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10 mt-8">
      <h3 className="text-white text-sm font-bold mb-4">Student Innovation Growth</h3>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPatents" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area type="monotone" dataKey="patents" stroke="#ef4444" fillOpacity={1} fill="url(#colorPatents)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const TimelineComparisonChart = () => {
  const data = [
    { name: 'Others', days: 45 },
    { name: 'Bharat IP', days: 15 },
  ];

  return (
    <div className="h-full w-full bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-center">
      <h3 className="text-slate-900 text-lg font-bold mb-1">Filing Speed</h3>
      <p className="text-slate-500 text-sm mb-6">Average days from disclosure to filing</p>
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" barSize={24}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12, fontWeight: 600, fill: '#475569'}} axisLine={false} tickLine={false} />
            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
            <Bar dataKey="days" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 1 ? '#ef4444' : '#94a3b8'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(heroScrollYProgress, [0, 1], [0, 100]);
  const blobsY = useTransform(heroScrollYProgress, [0, 1], [0, 250]);
  
  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Mouse movement for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans selection:bg-red-500 selection:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        </motion.div>
          
        {/* Animated Background Blobs */}
        <motion.div style={{ y: blobsY }} className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-12 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-red-100 text-red-600 text-sm font-bold mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                Trusted by startups, founders & institutions
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                Protect Your Ideas <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                  Before Someone Else Does.
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
                Helping startups, businesses & innovators secure <strong>Patents</strong>, <strong>Trademarks</strong> & <strong>Copyrights</strong> with complete legal support & enforcement.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Expert Legal Team', 'Fast Filing', '100% Confidential', 'End-to-End Support'].map((item, i) => (
                  <div key={i} className="flex items-center text-sm font-medium text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/consultation" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center group">
                  Book a Free Consultation Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <InteractiveHeroGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-slate-900 text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
            {[
              { label: "Applications Filed", value: 500, suffix: "+" },
              { label: "Confidential & Secure", value: 100, suffix: "%" },
              { label: "Expert Legal Support", value: 24, suffix: "/7" },
              { label: "Fast Filing System", value: 100, suffix: "%" }
            ].map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brands Marquee */}
      <BrandMarquee />

      {/* About Section */}
      <section id="about" className="py-20 bg-white border-b border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">About Bharat IP Defence</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Bharat IP Defence is a premier <strong>Intellectual Property consulting firm</strong> dedicated to protecting ideas and innovations. We provide end-to-end support for <strong>Patent Filing</strong>, <strong>Trademark Registration</strong>, and <strong>Copyright Protection</strong>. Our mission is to make IP protection accessible and affordable for startups, universities, and research institutions across India. With expert legal teams and confidential handling, we ensure your intellectual assets remain secure.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Complete IP Protection <br/><span className="text-red-600">Under One Roof</span></h2>
            <p className="text-slate-600 text-lg">We help you secure and legally protect your ideas through:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Lightbulb, 
                title: "Patent Registration", 
                desc: "Expert assistance for startups and researchers. We handle everything from prior art search to provisional drafting and international PCT filing.",
                features: ['Prior Art Search', 'Provisional Drafting', 'International PCT']
              },
              { 
                icon: ShieldCheck, 
                title: "Trademark Registration", 
                desc: "Protect your brand identity. We offer comprehensive trademark search, filing, and objection handling services in India.",
                features: ['Brand Search', 'Filing & Prosecution', 'Objection Handling']
              },
              { 
                icon: FileText, 
                title: "Copyright Protection", 
                desc: "Secure your creative works, software code, and literature. Our copyright services ensure your original content is legally protected.",
                features: ['Software Code', 'Literary Works', 'Artistic Content']
              },
              { 
                icon: Search, 
                title: "Free Trademark Watch", 
                desc: "Stay ahead of infringers. Our continuous monitoring service alerts you to potential conflicting trademark applications.",
                features: ['24/7 Monitoring', 'Conflict Alerts', 'Opposition Filing']
              },
              { 
                icon: Scale, 
                title: "IP Enforcement & Legal Support", 
                desc: "Robust legal defense for your IP. We handle infringement notices, litigation, and dispute resolution to enforce your rights.",
                features: ['Infringement Notices', 'Litigation Support', 'Dispute Resolution']
              },
              { 
                icon: Users, 
                title: "Startup IP Strategy", 
                desc: "Tailored IP roadmaps for startups to maximize valuation and secure funding through strong intellectual property portfolios.",
                features: ['IP Valuation', 'Portfolio Strategy', 'Investor Due Diligence']
              }
            ].map((service, idx) => (
              <div key={idx} className="glass-card-premium rounded-3xl p-8 group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-2 mb-8 border-t border-slate-100 pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs font-medium text-slate-500">
                      <CheckCircle2 className="w-3 h-3 text-green-500 mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-red-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Why Choose IP Defence Solutions?</h2>
            <p className="text-lg text-slate-600">We blend legal expertise with a deep understanding of technology and business.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
               <TimelineComparisonChart />
            </div>
            {[
              { icon: Users, title: "Expert Legal Team", desc: "Our team consists of seasoned patent agents and attorneys with deep technical and legal expertise." },
              { icon: CreditCard, title: "Affordable Pricing", desc: "Transparent, flat-fee pricing designed for startups and educational institutions. No hidden costs." },
              { icon: ShieldCheck, title: "Confidential Handling", desc: "Your ideas are safe with us. We maintain strict confidentiality throughout the process." },
              { icon: Search, title: "Free Trademark Monitoring", desc: "We keep an eye on your brand protection even after registration." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300"
                whileHover="hover"
                initial="rest"
              >
                <motion.div 
                  className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-300"
                  variants={{
                    rest: { scale: 1 },
                    hover: { 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { 
                        duration: 0.4,
                        ease: "easeInOut"
                      }
                    }
                  }}
                >
                  <feature.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">Trusted by innovators across the country.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", role: "Founder, TechNova", quote: "Bharat IP Defence helped us secure our patent in record time. Their team is extremely knowledgeable and professional." },
              { name: "Dr. Anjali Gupta", role: "Researcher, IIT Delhi", quote: "The best IP consulting firm for academic institutions. They understand the nuances of research and patent filing." },
              { name: "Vikram Singh", role: "CEO, GreenEnergy", quote: "Their trademark registration process was seamless. Highly recommended for startups looking for hassle-free IP protection." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-3">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-xs text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions Section */}
      <section id="institutions" className="py-32 bg-slate-900 text-white rounded-[3rem] mx-4 lg:mx-8 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent rounded-l-[5rem] -z-10 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-red-400 text-sm font-bold mb-8 border border-white/10">
                <GraduationCap className="w-4 h-4 mr-2" />
                For Institutions
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight tracking-tight text-white">
                Patent Filing for <br/>Colleges & <span className="text-red-500">Universities.</span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                We specialize in <strong>Institution Innovation Protection</strong>. Our dedicated programs help colleges and research institutions secure patents for student projects and faculty research. We bridge the gap between academic innovation and commercial IP assets.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-10 border-t border-white/10 pt-8">
                <div>
                  <div className="text-4xl font-display font-bold text-white mb-2"><CountUp to={50} suffix="+" /></div>
                  <div className="text-slate-400 font-medium">Partner Colleges</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-white mb-2"><CountUp to={200} suffix="+" /></div>
                  <div className="text-slate-400 font-medium">Student Patents</div>
                </div>
              </div>
              
              <PatentGrowthChart />

              <Link to="/institutions" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center shadow-lg hover:shadow-red-600/20 mt-8 w-fit">
                Partner With Us <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-slate-800 p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-white/10">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                    <Lightbulb className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="font-bold text-white">Idea to Patent</div>
                </div>
                <p className="text-sm text-slate-400">Specialized workshops and discounted filing rates for academic research.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">How It Works</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">From concept to protected asset in a streamlined, transparent process.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-10 right-10 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            
            {[
              { step: "01", icon: Lightbulb, title: "Idea", desc: "Share concept under NDA" },
              { step: "02", icon: ClipboardCheck, title: "Evaluation", desc: "Novelty & clearance search" },
              { step: "03", icon: PenTool, title: "Drafting", desc: "Expert attorney drafting" },
              { step: "04", icon: Send, title: "Filing", desc: "Submission to IP offices" },
              { step: "05", icon: ShieldCheck, title: "Protection", desc: "Monitoring & enforcement" }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-red-500 group-hover:shadow-red-500/20 group-hover:shadow-xl transition-all duration-300 relative">
                   <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                   >
                    <item.icon className="w-10 h-10 text-slate-400 group-hover:text-red-600 transition-colors duration-300" />
                   </motion.div>
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-100 rounded-full border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300">
                    {item.step}
                   </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Center */}
      <section id="knowledge" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">We don’t just file — we educate.</h2>
            <p className="text-lg text-slate-600">Essential resources for protecting your intellectual property.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "What is a Trademark?", desc: "A trademark is a unique symbol or name that represents your brand. It distinguishes your goods or services from competitors." },
              { title: "Patent vs Copyright", desc: "Patents protect inventions and functional improvements, while copyright protects original creative works like literature, art, and code." },
              { title: "Common Legal Mistakes", desc: "Startups often fail to file for IP protection before disclosing their idea, losing their right to patent. Always file before you publish." },
              { title: "IP Basics for Founders", desc: "Understanding the different types of IP protection available and how to leverage them for business growth." }
            ].slice(0, 3).map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                <Link to="/knowledge" className="text-red-600 font-bold text-sm flex items-center hover:underline">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                  Don’t Wait Until <br/><span className="text-red-500">It’s Too Late.</span>
                </h2>
                <p className="text-lg text-slate-400 mb-10">
                  Secure your intellectual property before someone copies it. Schedule a free, confidential consultation with our IP experts.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mr-6 border border-white/10">
                      <Phone className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Call us directly</div>
                      <div className="text-xl font-bold text-white">7799045557</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mr-6 border border-white/10">
                      <Mail className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Email us</div>
                      <div className="text-xl font-bold text-white">support@ipdefensesolutions.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mr-6 border border-white/10">
                      <Users className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">We offer both</div>
                      <div className="text-white font-medium">Online Consultation & Offline Legal Assistance</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

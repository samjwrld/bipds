import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ShieldCheck, Lightbulb, FileText, Globe, Lock, CheckCircle2 } from 'lucide-react';

export default function InteractiveHeroGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Mouse movement for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredNode(null);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);

  const nodes = [
    { id: 1, icon: Lightbulb, label: "Patent", color: "text-amber-500", bg: "bg-amber-50", x: -140, y: -100, delay: 0 },
    { id: 2, icon: FileText, label: "Copyright", color: "text-blue-500", bg: "bg-blue-50", x: 140, y: -80, delay: 0.2 },
    { id: 3, icon: Globe, label: "Trademark", color: "text-purple-500", bg: "bg-purple-50", x: -100, y: 120, delay: 0.4 },
    { id: 4, icon: Lock, label: "Trade Secret", color: "text-emerald-500", bg: "bg-emerald-50", x: 120, y: 100, delay: 0.6 },
  ];

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[500px] flex items-center justify-center perspective-1000 cursor-pointer"
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center preserve-3d"
        style={{ rotateX, rotateY }}
      >
        {/* Central Core */}
        <motion.div 
          className="relative z-20 w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-slate-50"
          style={{ transform: "translateZ(50px)" }}
          animate={{ 
            boxShadow: ["0 20px 50px -12px rgba(220, 38, 38, 0.25)", "0 20px 50px -12px rgba(220, 38, 38, 0.5)", "0 20px 50px -12px rgba(220, 38, 38, 0.25)"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-50 to-rose-100 opacity-50 animate-pulse"></div>
          <ShieldCheck className="w-12 h-12 text-red-600 relative z-10" />
          
          {/* Orbit Rings */}
          <div className="absolute inset-0 border border-red-100 rounded-full scale-150 opacity-50 animate-spin-slow"></div>
          <div className="absolute inset-0 border border-dashed border-red-200 rounded-full scale-[2] opacity-30 animate-reverse-spin-slow"></div>
        </motion.div>

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          {nodes.map((node) => (
            <motion.line
              key={`line-${node.id}`}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${node.x}px)`}
              y2={`calc(50% + ${node.y}px)`}
              stroke="url(#gradient-line)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: node.delay }}
            />
          ))}
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className={`absolute flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-lg border border-slate-100 transition-all duration-300 ${hoveredNode === node.id ? 'scale-110 ring-2 ring-red-100 z-50' : 'z-10'}`}
            style={{ 
              x: node.x, 
              y: node.y, 
              transform: "translateZ(80px)" 
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: node.delay 
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            whileHover={{ y: node.y - 10 }}
          >
            <div className={`w-10 h-10 rounded-xl ${node.bg} flex items-center justify-center mb-2`}>
              <node.icon className={`w-5 h-5 ${node.color}`} />
            </div>
            <span className="text-xs font-bold text-slate-700">{node.label}</span>
            
            {/* Status Badge on Hover */}
            <motion.div 
              className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center shadow-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: hoveredNode === node.id ? 1 : 0, scale: hoveredNode === node.id ? 1 : 0 }}
            >
              <CheckCircle2 className="w-3 h-3 mr-1" /> Protected
            </motion.div>
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-red-400 opacity-40"
            style={{
              x: Math.random() * 300 - 150,
              y: Math.random() * 300 - 150,
              transform: "translateZ(20px)"
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}

      </motion.div>
    </div>
  );
}

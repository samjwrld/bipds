import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function BackgroundHoverReveal() {
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [smoothPos, setSmoothPos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovered) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  // Smooth lerp for fluid spotlight movement
  useEffect(() => {
    const loop = () => {
      setSmoothPos((prev) => {
        if (prev.x === -1000) return mousePos;
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) return prev;
        return {
          x: prev.x + dx * 0.12,
          y: prev.y + dy * 0.12,
        };
      });
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [mousePos]);

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Background base mesh grid overlay */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark 
            ? 'opacity-30 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px]' 
            : 'opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px]'
        }`} 
      />

      {/* Interactive Cursor Spotlight Glow Reveal */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0.4,
          background: isDark
            ? `radial-gradient(650px circle at ${smoothPos.x}px ${smoothPos.y}px, rgba(220, 38, 38, 0.18), rgba(225, 29, 72, 0.08) 40%, transparent 75%)`
            : `radial-gradient(550px circle at ${smoothPos.x}px ${smoothPos.y}px, rgba(239, 68, 68, 0.12), rgba(220, 38, 38, 0.04) 45%, transparent 75%)`,
        }}
      />

      {/* Grid line reveal effect specifically under spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.8 : 0.2,
          maskImage: `radial-gradient(350px circle at ${smoothPos.x}px ${smoothPos.y}px, black 20%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(350px circle at ${smoothPos.x}px ${smoothPos.y}px, black 20%, transparent 80%)`,
          backgroundImage: isDark
            ? `linear-gradient(to right, rgba(239, 68, 68, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(239, 68, 68, 0.15) 1px, transparent 1px)`
            : `linear-gradient(to right, rgba(220, 38, 38, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(220, 38, 38, 0.12) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Secondary subtle high-precision central beam */}
      <div
        className="absolute w-2 h-2 rounded-full blur-md transition-all duration-75"
        style={{
          left: `${smoothPos.x}px`,
          top: `${smoothPos.y}px`,
          transform: 'translate(-50%, -50%)',
          backgroundColor: isDark ? 'rgba(239, 68, 68, 0.6)' : 'rgba(220, 38, 38, 0.4)',
          boxShadow: isDark
            ? '0 0 40px 20px rgba(239, 68, 68, 0.3)'
            : '0 0 30px 15px rgba(220, 38, 38, 0.2)',
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}

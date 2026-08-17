import React, { useRef, useState } from 'react';

interface SpotlightHoverCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  revealContent?: React.ReactNode;
  key?: React.Key;
}

export default function SpotlightHoverCard({
  children,
  className = '',
  spotlightColor = 'rgba(239, 68, 68, 0.15)',
  revealContent,
}: SpotlightHoverCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden group transition-all duration-300 ${className}`}
    >
      {/* Background Hover Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-[inherit] z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Grid Pattern Hover Reveal */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0 rounded-[inherit]"
        style={{
          opacity: isHovered ? 0.3 : 0,
          maskImage: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 80%)`,
          backgroundImage: `linear-gradient(to right, rgba(239, 68, 68, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(239, 68, 68, 0.2) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Optional Custom Reveal Content layer */}
      {revealContent && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0 rounded-[inherit] overflow-hidden"
          style={{
            opacity: isHovered ? 1 : 0,
            maskImage: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, black 30%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, black 30%, transparent 80%)`,
          }}
        >
          {revealContent}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

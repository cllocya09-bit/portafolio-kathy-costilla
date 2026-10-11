import React, { useState, useEffect, useRef } from 'react';

interface FloatingStylusProps {
  className?: string;
}

export const FloatingStylus: React.FC<FloatingStylusProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position state with normalized coordinates (-1 to 1)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Mouse move listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize from -1 to 1
      const nx = (e.clientX / innerWidth) * 2 - 1;
      const ny = (e.clientY / innerHeight) * 2 - 1;
      setTargetPos({ x: nx, y: ny });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth lerp animation loop for organic floating physics
  useEffect(() => {
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setMousePos((prev) => ({
        x: lerp(prev.x, targetPos.x, 0.06),
        y: lerp(prev.y, targetPos.y, 0.06)
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPos]);

  // Dynamic transforms based on mouse & scroll
  // Tilt angle between -35deg and -15deg, with mouse influence
  const baseRotation = -28;
  const rotateZ = baseRotation + mousePos.x * 12 + Math.sin(scrollY * 0.005) * 8;
  const rotateX = mousePos.y * 18;
  const rotateY = -mousePos.x * 20;
  
  // Parallax translation
  const translateX = mousePos.x * 28;
  const translateY = mousePos.y * 22 + Math.sin(Date.now() * 0.002) * 6;

  return (
    <div
      ref={containerRef}
      className={`relative select-none pointer-events-none ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* 1. Luminous Celeste Energy Ribbon / Trailing Light Wave from the Stylus Tip */}
      <svg
        className="absolute -top-32 -left-44 w-[480px] h-[480px] pointer-events-none -z-10 overflow-visible opacity-75"
        viewBox="0 0 500 500"
        fill="none"
      >
        <defs>
          <linearGradient id="stylus-beam" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#0284c7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
          </linearGradient>

          <filter id="stylus-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dynamic Curved Energy Arc following the Stylus tip */}
        <path
          d={`M ${280 + mousePos.x * 25} ${290 + mousePos.y * 20} 
              C ${200 + mousePos.x * 15} ${220 + mousePos.y * 10}, 
                ${130 - mousePos.x * 20} ${280 - mousePos.y * 15}, 
                ${60 + mousePos.x * 10} ${160 + mousePos.y * 10}`}
          stroke="url(#stylus-beam)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#stylus-glow)"
          strokeDasharray="6 4"
        />

        <path
          d={`M ${280 + mousePos.x * 25} ${290 + mousePos.y * 20} 
              C ${220 + mousePos.x * 10} ${240 + mousePos.y * 5}, 
                ${150 - mousePos.x * 10} ${310 - mousePos.y * 10}, 
                ${90} ${220}`}
          stroke="#38bdf8"
          strokeWidth="1.5"
          opacity="0.4"
          strokeLinecap="round"
        />

        {/* Floating Digital Dust / Sparkles near the tip */}
        <circle cx={275 + mousePos.x * 20} cy={285 + mousePos.y * 15} r="3" fill="#00e5ff" filter="url(#stylus-glow)" />
        <circle cx={220 + mousePos.x * 10} cy={235 + mousePos.y * 5} r="2" fill="#38bdf8" opacity="0.8" />
        <circle cx={160 - mousePos.x * 15} cy={290 - mousePos.y * 10} r="2.5" fill="#00e5ff" opacity="0.6" />
      </svg>

      {/* 2. THE FLOATING PRECISION STYLUS (3D PERSPECTIVE VECTOR OBJECT) */}
      <div
        className="relative transition-transform duration-75 ease-out cursor-grab active:cursor-grabbing group"
        style={{
          transform: `translate3d(${translateX}px, ${translateY}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
          transformOrigin: '25% 75%'
        }}
      >
        {/* Soft Ambient Shadow behind the Stylus */}
        <div
          className="absolute -bottom-8 left-10 w-44 h-12 bg-sky-950/20 rounded-full blur-xl -z-10 transition-opacity duration-300 pointer-events-none"
          style={{
            transform: `scale(${1 + Math.abs(mousePos.y) * 0.2}) translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)`
          }}
        />

        {/* Realistic High-Fidelity SVG Stylus (Wacom Pro Pen / Stylus Digital de Diseño Publicitario) */}
        <svg
          width="260"
          height="140"
          viewBox="0 0 320 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_15px_30px_rgba(2,132,199,0.28)]"
        >
          <defs>
            {/* Shading gradients for cylindrical 3D depth */}
            <linearGradient id="pen-body" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="35%" stopColor="#1e293b" />
              <stop offset="70%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id="pen-grip" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="40%" stopColor="#1e293b" />
              <stop offset="80%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>

            <linearGradient id="pen-metal-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="25%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="85%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            {/* Glowing cyan core for the active drawing tip */}
            <radialGradient id="tip-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#00e5ff" />
              <stop offset="75%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="celeste-ring" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#00e5ff" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>

          {/* --- STYLUS ERASER END (Right Top) --- */}
          <path
            d="M 285 73 C 290 73, 298 75, 298 80 C 298 85, 290 87, 285 87 Z"
            fill="url(#pen-body)"
            stroke="#475569"
            strokeWidth="0.8"
          />
          {/* Eraser chrome ring */}
          <rect x="281" y="73.5" width="4" height="13" rx="1" fill="url(#pen-metal-highlight)" />

          {/* --- MAIN STYLUS BARREL (Shaft) --- */}
          <path
            d="M 170 71 L 281 74 L 281 86 L 170 89 Z"
            fill="url(#pen-body)"
          />
          {/* Subtle light reflection sheen along the upper edge */}
          <path
            d="M 170 71.8 L 281 74.5 L 281 76 L 170 73.5 Z"
            fill="#ffffff"
            opacity="0.18"
          />

          {/* Precision Coiled Aesthetic Accent Rings (Inspired by reference image rings) */}
          <rect x="235" y="73" width="3" height="14" rx="0.5" fill="url(#celeste-ring)" />
          <rect x="241" y="73" width="2" height="14" rx="0.5" fill="#38bdf8" opacity="0.8" />
          <rect x="245" y="73" width="2" height="14" rx="0.5" fill="#00e5ff" opacity="0.6" />

          {/* Metallic Branding Collar */}
          <rect x="166" y="70" width="5" height="20" rx="1" fill="url(#pen-metal-highlight)" />

          {/* --- ERGONOMIC CONTOUR SILICONE GRIP (Left Body) --- */}
          {/* Curved flare towards the front */}
          <path
            d="M 80 65 C 110 68, 140 70, 166 70 L 166 90 C 140 90, 110 92, 80 95 Z"
            fill="url(#pen-grip)"
          />
          {/* Grip tactile texture ribbing */}
          <path d="M 110 68 L 110 92" stroke="#334155" strokeWidth="1" opacity="0.6" />
          <path d="M 125 69 L 125 91" stroke="#334155" strokeWidth="1" opacity="0.6" />
          <path d="M 140 70 L 140 90" stroke="#334155" strokeWidth="1" opacity="0.6" />

          {/* Dual Rocker Switch with Celeste LED Indicator */}
          <rect x="105" y="74" width="38" height="8" rx="3" fill="#090d16" stroke="#475569" strokeWidth="0.8" />
          <circle cx="112" cy="78" r="1.5" fill="#00e5ff" className="animate-pulse" />
          <rect x="120" y="76" width="10" height="4" rx="1" fill="#1e293b" />
          <rect x="131" y="76" width="10" height="4" rx="1" fill="#1e293b" />

          {/* Front Chrome Bevel Ring */}
          <path
            d="M 75 64 L 80 65 L 80 95 L 75 96 Z"
            fill="url(#pen-metal-highlight)"
          />

          {/* --- CONICAL NOSE CONE (Precision Taper) --- */}
          <path
            d="M 40 73 L 75 64 L 75 96 L 40 87 Z"
            fill="url(#pen-body)"
          />
          {/* Nose specular highlight */}
          <path
            d="M 40 74 L 75 66 L 75 68 L 40 75.5 Z"
            fill="#ffffff"
            opacity="0.25"
          />

          {/* Metal Nib Chuck Ring */}
          <rect x="36" y="75" width="4" height="10" rx="0.5" fill="url(#pen-metal-highlight)" />

          {/* --- PRECISION DRAWING NIB (Punta de Dibujo a 300 DPI) --- */}
          <path
            d="M 22 79 L 36 76 L 36 84 L 22 81 Z"
            fill="#e2e8f0"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />

          {/* ACTIVE NEON CELESTE TIP (EMISSIVE LIGHT BEACON) */}
          <circle cx="21" cy="80" r="5" fill="url(#tip-glow)" />
          <circle cx="21" cy="80" r="2.2" fill="#ffffff" />
          <circle cx="21" cy="80" r="8" fill="#00e5ff" opacity="0.35" className="animate-ping" />

          {/* Target Reticle Crosshairs at Tip (Indicador de Precisión Publicitaria) */}
          <g opacity="0.7">
            <line x1="21" y1="68" x2="21" y2="72" stroke="#00e5ff" strokeWidth="1" strokeLinecap="round" />
            <line x1="21" y1="88" x2="21" y2="92" stroke="#00e5ff" strokeWidth="1" strokeLinecap="round" />
            <line x1="9" y1="80" x2="13" y2="80" stroke="#00e5ff" strokeWidth="1" strokeLinecap="round" />
            <line x1="29" y1="80" x2="33" y2="80" stroke="#00e5ff" strokeWidth="1" strokeLinecap="round" />
          </g>
        </svg>

      </div>

    </div>
  );
};

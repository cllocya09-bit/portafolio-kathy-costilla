import React from 'react';

// Official Adobe Photoshop Vector Logo with high-definition styling
export const PhotoshopLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    role="img"
    aria-label="Adobe Photoshop"
  >
    <defs>
      <linearGradient id="psGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#001e36" />
        <stop offset="100%" stopColor="#001222" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#psGlow)" />
    <rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="#31a8ff" strokeWidth="2.5" />
    <text
      x="17"
      y="43"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="27"
      fontWeight="900"
      fill="#31a8ff"
      letterSpacing="-1px"
    >
      Ps
    </text>
  </svg>
);

// Official Adobe Illustrator Vector Logo
export const IllustratorLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    role="img"
    aria-label="Adobe Illustrator"
  >
    <defs>
      <linearGradient id="aiGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#330000" />
        <stop offset="100%" stopColor="#1f0000" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#aiGlow)" />
    <rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="#ff9a00" strokeWidth="2.5" />
    <text
      x="18"
      y="43"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="27"
      fontWeight="900"
      fill="#ff9a00"
      letterSpacing="-1px"
    >
      Ai
    </text>
  </svg>
);

// Official Adobe Premiere Pro Vector Logo
export const PremiereLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    role="img"
    aria-label="Adobe Premiere Pro"
  >
    <defs>
      <linearGradient id="prGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00005b" />
        <stop offset="100%" stopColor="#000038" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#prGlow)" />
    <rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="#9999ff" strokeWidth="2.5" />
    <text
      x="17"
      y="43"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="27"
      fontWeight="900"
      fill="#9999ff"
      letterSpacing="-1px"
    >
      Pr
    </text>
  </svg>
);

// Official Adobe After Effects Vector Logo
export const AfterEffectsLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    role="img"
    aria-label="Adobe After Effects"
  >
    <defs>
      <linearGradient id="aeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00005b" />
        <stop offset="100%" stopColor="#1a0033" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#aeGlow)" />
    <rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="#d291ff" strokeWidth="2.5" />
    <text
      x="16"
      y="43"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="27"
      fontWeight="900"
      fill="#d291ff"
      letterSpacing="-1px"
    >
      Ae
    </text>
  </svg>
);

// Official CapCut Pro Vector Logo
export const CapCutLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    role="img"
    aria-label="CapCut Pro"
  >
    <rect width="64" height="64" rx="14" fill="#0d0e12" />
    <rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="#2a2e38" strokeWidth="1.5" />
    {/* Interlocking geometric ribbon cutter mark */}
    <g transform="translate(10, 10) scale(0.68)">
      {/* Top trapezoid */}
      <polygon points="4,10 32,24 60,10 32,0" fill="#ffffff" />
      {/* Left chevron */}
      <polygon points="0,17 32,32 0,47" fill="#ffffff" />
      {/* Right chevron */}
      <polygon points="64,17 32,32 64,47" fill="#ffffff" />
      {/* Bottom trapezoid */}
      <polygon points="4,54 32,40 60,54 32,64" fill="#ffffff" />
    </g>
  </svg>
);

// Official Canva Pro Vector Logo
export const CanvaLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    role="img"
    aria-label="Canva Pro"
  >
    <defs>
      <linearGradient id="canvaOfficialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C4CC" />
        <stop offset="50%" stopColor="#7D2AE8" />
        <stop offset="100%" stopColor="#00C4CC" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#canvaOfficialGrad)" />
    {/* Canva signature smooth custom C logomark */}
    <path
      d="M37.5 21.5c-2.3-1.8-5.3-2.7-8.8-2.7-9.2 0-15.5 6.8-15.5 16.5 0 9.8 6.5 16.2 16.2 16.2 5.9 0 10.4-2.3 12.8-5.8l-4.2-3.4c-1.8 2.4-5 4-8.6 4-6.3 0-10.4-4.3-10.4-11 0-6.8 4.1-11.2 10.3-11.2 4.1 0 6.6 1.8 7.8 3.5l4.4-3.2c-.8-1.1-2.1-2.1-4-2.9z"
      fill="#ffffff"
    />
  </svg>
);

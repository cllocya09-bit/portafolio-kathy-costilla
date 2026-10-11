import React from 'react';

export const MarqueeStrip: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'light' }) => {
  const items = [
    'DISEÑO PUBLICITARIO',
    'CREACIÓN AUDIOVISUAL',
    'REELS & TIKTOK 9:16',
    'IDENTIDAD VISUAL',
    'ADOBE PHOTOSHOP',
    'ADOBE ILLUSTRATOR',
    'PREMIERE PRO',
    'CAPCUT PRO',
    'AFTER EFFECTS',
    'CANVA PRO',
    'ESTUDIANTE IESTP M. R. ARÁOZ PINTO',
    'LIMA, PERÚ'
  ];

  const isDark = variant === 'dark';

  return (
    <div
      className={`relative w-full overflow-hidden py-3 border-y select-none ${
        isDark
          ? 'bg-slate-950 border-slate-800 text-sky-300'
          : 'bg-sky-50/80 border-sky-100 text-sky-800'
      }`}
    >
      <div className="flex w-max animate-marquee">
        {/* Sequence 1 */}
        <div className="flex items-center gap-8 px-4 text-xs font-semibold tracking-widest uppercase">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="whitespace-nowrap">{item}</span>
              <span className={isDark ? 'text-sky-600' : 'text-sky-300'}>✦</span>
            </React.Fragment>
          ))}
        </div>
        {/* Sequence 2 for continuous infinite loop */}
        <div className="flex items-center gap-8 px-4 text-xs font-semibold tracking-widest uppercase" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="whitespace-nowrap">{item}</span>
              <span className={isDark ? 'text-sky-600' : 'text-sky-300'}>✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

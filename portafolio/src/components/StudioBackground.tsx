import React from 'react';

export const StudioBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* 1. Creative Studio Blueprint Grid */}
      <div className="absolute inset-0 bg-design-grid opacity-75" />

      {/* 2. Fluid Ambient Celeste Auroras */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-300/30 via-cyan-200/20 to-transparent blur-3xl animate-aurora-1" />
      <div className="absolute top-1/3 -left-48 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-sky-400/20 via-blue-200/15 to-transparent blur-3xl animate-aurora-2" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-cyan-300/25 via-sky-200/20 to-transparent blur-3xl animate-aurora-1" />

      {/* 3. Subtle Creative Agency Crop Marks on Viewport Corners */}
      <div className="absolute top-4 left-4 text-sky-400/40 text-xs font-mono select-none">
        ┌ 00:00
      </div>
      <div className="absolute top-4 right-4 text-sky-400/40 text-xs font-mono select-none">
        300 DPI ┐
      </div>
      <div className="absolute bottom-4 left-4 text-sky-400/30 text-xs font-mono select-none">
        └ CMYK
      </div>
      <div className="absolute bottom-4 right-4 text-sky-400/30 text-xs font-mono select-none">
        RGB ┘
      </div>
    </div>
  );
};

export const KineticMarquee: React.FC = () => {
  const marqueeItems = [
    'CREATIVIDAD QUE CONVIERTE',
    'AFICHES PUBLICITARIOS 300 DPI',
    'IMPACTO VISUAL DE PRODUCTO',
    'CAMPAÑAS 360°',
    'REELS COMERCIALES 9:16',
    'DISEÑO PUBLICITARIO COMERCIAL',
    'FOTOMONTAJE & RETOQUE EN PHOTOSHOP',
    'ARTE FINAL PARA IMPRENTA'
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-sky-100 bg-gradient-to-r from-sky-50/60 via-white to-sky-50/60 select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-bold tracking-wider text-slate-400 uppercase">
        {marqueeItems.concat(marqueeItems).map((text, idx) => (
          <span key={idx} className="flex items-center gap-8">
            <span className={idx % 2 === 0 ? 'text-sky-600 font-extrabold' : 'text-slate-500 font-semibold'}>
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

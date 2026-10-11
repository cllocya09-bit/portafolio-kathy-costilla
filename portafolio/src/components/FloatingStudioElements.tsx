import React, { useState } from 'react';
import { Sparkles, Layers, Sliders, CheckCircle2, Ruler, MousePointer2 } from 'lucide-react';

export const FloatingStudioElements: React.FC = () => {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const chips = [
    {
      id: 'cmyk',
      label: '300 DPI CMYK Ready',
      sub: 'Arte final sin pérdida de píxel para vía pública e imprenta',
      icon: <Layers className="w-3.5 h-3.5 text-sky-500" />,
      position: 'top-20 -left-6 sm:left-4',
      rotate: '-rotate-2'
    },
    {
      id: 'hook',
      label: '0.8s Retención Visual',
      sub: 'Psicología de color y composición para frenar el scroll',
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-500" />,
      position: 'top-40 -right-4 sm:right-6',
      rotate: 'rotate-3'
    },
    {
      id: 'retouch',
      label: 'Fotomontaje + Luz 100% Pro',
      sub: 'Sin plantillas genéricas. Retoque publicitario a medida',
      icon: <Sliders className="w-3.5 h-3.5 text-sky-500" />,
      position: 'bottom-24 left-8 sm:left-12',
      rotate: 'rotate-1'
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {chips.map((chip) => {
        const isActive = activeChip === chip.id;
        return (
          <div
            key={chip.id}
            className={`hidden md:block absolute ${chip.position} transition-all duration-300 pointer-events-auto`}
          >
            <div
              onMouseEnter={() => setActiveChip(chip.id)}
              onMouseLeave={() => setActiveChip(null)}
              className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-xl backdrop-blur-md border shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-200 ${
                isActive
                  ? 'bg-slate-900/95 text-white border-sky-400 shadow-sky-500/20'
                  : 'bg-white/90 text-slate-800 border-sky-200/80 hover:border-sky-400 shadow-slate-900/5'
              } ${chip.rotate}`}
            >
              <div className="p-1 rounded-md bg-sky-50 border border-sky-200/50 group-hover:bg-sky-500/20">
                {chip.icon}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold leading-tight flex items-center gap-1.5">
                  {chip.label}
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                </p>
                {isActive && (
                  <p className="text-[10px] text-sky-300 font-medium max-w-[200px] mt-0.5 animate-fadeIn">
                    {chip.sub}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const CreativeStudioSpecsBanner: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 text-slate-200 py-3 px-4 border-y border-sky-950/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 text-sky-400 font-mono">
          <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping" />
          <span className="font-bold uppercase tracking-wider text-[11px]">
            Taller Creativo Activo
          </span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline font-sans">
            Dirección de Arte & Retoque Publicitario
          </span>
        </div>

        <div className="flex items-center gap-6 font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="text-sky-400 font-bold">CALIDAD:</span>
            <span>300 DPI CMYK & RGB</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="text-sky-400 font-bold">FORMATOS:</span>
            <span>9:16 · 4:5 · Vía Pública</span>
          </div>
          <div className="flex items-center gap-1.5 text-sky-300 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Piezas 100% Originales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

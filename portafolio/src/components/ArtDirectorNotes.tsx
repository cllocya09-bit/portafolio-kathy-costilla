import React, { useState } from 'react';
import { Sparkles, Eye, Tag, CheckCircle2, ArrowRight, Layers, Sliders, ShieldCheck } from 'lucide-react';
import { OfficialWhatsAppIcon } from './WhatsAppFloatingButton';

interface ArtDirectorNotesProps {
  phone: string;
}

interface NotePin {
  id: number;
  label: string;
  tag: string;
  title: string;
  category: string;
  xPercent: number; // position on image
  yPercent: number;
  explanation: string;
  commercialBenefit: string;
  color: string;
}

export const ArtDirectorNotes: React.FC<ArtDirectorNotesProps> = ({ phone }) => {
  const [activePinId, setActivePinId] = useState<number>(1);
  const [inspectorActive, setInspectorActive] = useState<boolean>(true);

  const pins: NotePin[] = [
    {
      id: 1,
      label: '01',
      tag: 'Psicología Térmica',
      title: 'Salpicaduras y Cristales en Suspensión',
      category: 'Retoque de Producto · Photoshop',
      xPercent: 78,
      yPercent: 35,
      explanation:
        'Se compusieron más de 12 capas independientes de gotas de condensación y esquirlas de hielo en perspectiva para generar una respuesta sensorial instantánea de sed y frío extremo en el espectador.',
      commercialBenefit: 'Detiene el scroll al provocar deseo físico inmediato.',
      color: 'bg-sky-500'
    },
    {
      id: 2,
      label: '02',
      tag: 'Identidad Visual',
      title: 'Luz de Borde y Sello Celeste de Contra',
      category: 'Iluminación Publicitaria',
      xPercent: 24,
      yPercent: 42,
      explanation:
        'Un halo de luz celeste vibrante aplicado con pincel volumétrico en los bordes metálicos de la lata. Esto despega la figura del fondo oscuro y le otorga presencia tridimensional de nivel internacional.',
      commercialBenefit: 'Hace que el producto se vea premium y costoso sin decir una sola palabra.',
      color: 'bg-sky-400'
    },
    {
      id: 3,
      label: '03',
      tag: 'Impacto a Distancia',
      title: 'Tipografía de Campaña "FROST CRUSH"',
      category: 'Dirección Tipográfica',
      xPercent: 50,
      yPercent: 12,
      explanation:
        'Tipografía condensada con inclinación a 8° para transmitir energía y velocidad. Tratamiento con bisel metálico sutil y resplandor celeste para garantizar legibilidad a 40 metros en paneles de vía pública.',
      commercialBenefit: 'La marca se reconoce y recuerda en menos de 0.6 segundos.',
      color: 'bg-amber-400'
    },
    {
      id: 4,
      label: '04',
      tag: 'Física Realista',
      title: 'Sombra de Contacto y Reflejo en Suelo Húmedo',
      category: 'Composición y Oclusión',
      xPercent: 50,
      yPercent: 88,
      explanation:
        'Sombra de oclusión calculada milimétricamente en la base de la lata, combinada con un reflejo difuso en suelo helado. Sin esta técnica, el producto parecería flotar como un sticker pegado.',
      commercialBenefit: 'Credibilidad visual absoluta: el cerebro del cliente asume que la fotografía fue real.',
      color: 'bg-emerald-400'
    }
  ];

  const currentPin = pins.find((p) => p.id === activePinId) || pins[0];

  const whatsappInquiryUrl = `https://wa.me/${phone}?text=Hola%20Khaterine,%20estuve%20viendo%20las%20anotaciones%20de%20direcci%C3%B3n%20de%20arte%20en%20tu%20web%20y%20quiero%20cotizar%20un%20afiche%20con%20este%20mismo%20nivel%20de%20producci%C3%B3n%20para%20mi%20producto.`;

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin" />
              <span>Detrás de Escena · Dirección de Arte</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Anotaciones de Dirección de Arte: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">
                ¿Por qué cada detalle vende?
              </span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              En publicidad nada es casualidad. Toca los stickers sobre el afiche para ver las decisiones técnicas, psicológicas y tipográficas que convierten una pieza gráfica en un imán de clientes.
            </p>
          </div>

          {/* Toggle Inspector Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setInspectorActive(!inspectorActive)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                inspectorActive
                  ? 'bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/30'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{inspectorActive ? 'Stickers Visibles' : 'Ocultar Stickers'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Workspace Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: The Visual Poster with Interactive Pins */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl shadow-sky-950/80 bg-slate-950 group">
              
              {/* Ad Image */}
              <img
                src="images/ad_poster_energy_drink_1791693876265.jpg"
                alt="Afiche Frost Crush con anotaciones de dirección de arte"
                className="w-full h-auto object-cover select-none"
              />

              {/* Grid overlay for studio vibe */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

              {/* Interactive Sticker Pins */}
              {inspectorActive &&
                pins.map((pin) => {
                  const isSelected = activePinId === pin.id;
                  return (
                    <button
                      key={pin.id}
                      onClick={() => setActivePinId(pin.id)}
                      style={{ top: `${pin.yPercent}%`, left: `${pin.xPercent}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 transition-all duration-300 focus:outline-none ${
                        isSelected ? 'scale-125 z-40' : 'hover:scale-110'
                      }`}
                      title={pin.title}
                    >
                      {/* Pulse ring when selected */}
                      {isSelected && (
                        <span className="absolute -inset-2 rounded-full bg-sky-400 opacity-60 animate-ping" />
                      )}
                      
                      {/* Badge Pin */}
                      <div
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black shadow-xl border ${
                          isSelected
                            ? 'bg-sky-400 text-slate-950 border-white ring-2 ring-sky-300'
                            : 'bg-slate-900/90 text-white border-sky-400/60 hover:bg-sky-500 hover:text-white'
                        }`}
                      >
                        <span>{pin.label}</span>
                        <span className="hidden sm:inline text-[10px] font-semibold">{pin.tag}</span>
                      </div>
                    </button>
                  );
                })}

              {/* Bottom status watermark */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono text-sky-400">PIEZA: Frost Crush · Afiche 300 DPI</span>
                <span className="font-sans">Toca un pin para inspeccionar</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Art Director Commentary Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Pin Selector Tabs */}
            <div className="grid grid-cols-4 gap-2">
              {pins.map((pin) => {
                const isSelected = activePinId === pin.id;
                return (
                  <button
                    key={pin.id}
                    onClick={() => setActivePinId(pin.id)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                        : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    Pin {pin.label}
                  </button>
                );
              })}
            </div>

            {/* Active Explanation Box */}
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-sky-500/30 shadow-xl space-y-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  {currentPin.category}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  Anotación #{currentPin.label}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {currentPin.title}
                </h3>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  {currentPin.explanation}
                </p>
              </div>

              {/* Commercial Benefit Highlight */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-sky-500/20 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Por qué esto te genera dinero:</span>
                </div>
                <p className="text-xs text-slate-300 pl-5">
                  {currentPin.commercialBenefit}
                </p>
              </div>

              {/* Micro specs */}
              <div className="grid grid-cols-2 gap-3 text-[11px] pt-1 border-t border-slate-700/60 text-slate-400">
                <div>
                  <span className="text-slate-400 font-semibold">Técnica:</span> Fotomontaje multicapa
                </div>
                <div>
                  <span className="text-slate-400 font-semibold">Herramienta:</span> Photoshop + Wacom
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <OfficialWhatsAppIcon className="w-5 h-5 text-slate-950 fill-current" />
                <span>Quiero un afiche con esta calidad para mi marca</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Respuesta directa de Khaterine · Sin intermediarios ni demoras
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

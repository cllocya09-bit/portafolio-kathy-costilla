import React, { useState } from 'react';
import {
  Eye,
  MapPin,
  Building2,
  ShoppingBag,
  Bus,
  Image as ImageIcon,
  ArrowUpRight,
  Sparkles,
  Sun,
  Moon,
  Zap,
  Sliders,
  Layers,
  Info
} from 'lucide-react';
import { OfficialWhatsAppIcon } from './WhatsAppFloatingButton';

interface RealContextMockupProps {
  phone: string;
}

export const RealContextMockup: React.FC<RealContextMockupProps> = ({ phone }) => {
  const environments = [
    {
      id: 'billboard',
      label: 'Valla Iluminada Nocturna',
      subtitle: 'Avenida Principal · Vía Pública',
      icon: <Building2 className="w-4 h-4" />,
      image: 'images/ad_billboard_city_mockup_1791693917414.jpg',
      badge: 'Publicidad Exterior (OOH)',
      description:
        'Gran formato sobre avenidas de alto tránsito vehicular y peatonal. El contraste cian sobre la noche genera retención visual instantánea.',
      dimensions: '12 x 4 metros · Resolución Gigantografía',
      daylightNote: 'Titulares en blanco puro que contrastan sobre fondos oscuros incluso con sol directo.',
      nightNote: 'Retroiluminación perimetral LED con halo cian que se distingue a más de 100 metros.'
    },
    {
      id: 'mall',
      label: 'Tótem Mupi en Mall',
      subtitle: 'Centro Comercial · Retail',
      icon: <ShoppingBag className="w-4 h-4" />,
      image: 'images/mall_mupi_mockup_1791695655504.jpg',
      badge: 'Punto de Venta & Pasillo Comercial',
      description:
        'Tótem digital vertical ubicado en pasillos con flujo continuo de compradores. Ideal para impulsar decisiones de compra en el momento exacto.',
      dimensions: 'Pantalla 75" Vertical · 4K UHD',
      daylightNote: 'Luminancia de 2500 nits calibrada para competir contra la iluminación de tiendas retail.',
      nightNote: 'Negros profundos OLED que hacen resaltar la lata congelada como si flotara en el aire.'
    },
    {
      id: 'bus_stop',
      label: 'Parada de Autobús',
      subtitle: 'Mobiliario Urbano · Transeúntes',
      icon: <Bus className="w-4 h-4" />,
      image: 'images/bus_shelter_ad_1791695669467.jpg',
      badge: 'Transit Advertising',
      description:
        'Exposición directa a corta distancia en paraderos concurridos con tiempo de visualización prolongado mientras las personas esperan el transporte.',
      dimensions: '120 x 175 cm · Papel Backlight Iluminado',
      daylightNote: 'Impresión en lona traslúcida que mantiene saturación de color con luz natural difusa.',
      nightNote: 'Caja de luz interna con fluorescentes LED que activan la transparencia del hielo y las gotas.'
    },
    {
      id: 'flat_art',
      label: 'Arte Plano Original',
      subtitle: 'Master File · 300 DPI CMYK',
      icon: <ImageIcon className="w-4 h-4" />,
      image: 'images/ad_poster_energy_drink_1791693876265.jpg',
      badge: 'Key Visual Master',
      description:
        'La pieza publicitaria en su formato original de alta fidelidad, con sangrías y perfiles de color listos para su adaptación a cualquier soporte.',
      dimensions: '70 x 100 cm · 300 DPI Imprenta',
      daylightNote: 'Calibración de perfil de color CMYK Coated FOGRA39 para prensas offset.',
      nightNote: 'Modo RGB digital enriquecido para pantallas LED de vía pública y mupis interactivos.'
    }
  ];

  const [activeEnv, setActiveEnv] = useState(environments[0]);
  const [isNightMode, setIsNightMode] = useState<boolean>(true);
  const [backlightIntensity, setBacklightIntensity] = useState<'standard' | 'high'>('high');

  const whatsappMessage = encodeURIComponent(
    `Hola Khaterine, vi la simulación de afiches en vía pública (${activeEnv.label} - ${isNightMode ? 'Modo Noche con Backlight' : 'Modo Día'}) y me gustaría cotizar una campaña publicitaria para mi marca.`
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Day/Night Concept */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-sky-100">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              <span>Simulación en Escala Real · Vía Pública</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Tus Afiches en <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-[#00a8ff]">Contexto Real</span>: La Calle y la Ciudad
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              La publicidad no se juzga en una pantalla en blanco: se juzga bajo el sol del mediodía y bajo la retroiluminación nocturna de la avenida. Comprueba el impacto visual en ambos escenarios:
            </p>
          </div>

          {/* Interactive Day/Night Switch (Concepto 2) */}
          <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-700 shadow-lg flex items-center gap-1 shrink-0">
            <button
              onClick={() => setIsNightMode(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                !isNightMode
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-102 font-extrabold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sun className={`w-4 h-4 ${!isNightMode ? 'text-slate-950' : 'text-amber-400'}`} />
              <span>Modo Día ☀️</span>
            </button>

            <button
              onClick={() => setIsNightMode(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isNightMode
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-md shadow-sky-500/30 scale-102 font-extrabold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Moon className={`w-4 h-4 ${isNightMode ? 'text-slate-950' : 'text-sky-400'}`} />
              <span>Noche LED 🌙</span>
            </button>
          </div>

        </div>

        {/* Environment Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {environments.map((env) => {
            const isActive = activeEnv.id === env.id;
            return (
              <button
                key={env.id}
                type="button"
                onClick={() => setActiveEnv(env)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-500/25 ring-2 ring-sky-300'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`p-2 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-sky-50 text-sky-600'}`}>
                    {env.icon}
                  </span>
                  {isActive && (
                    <span className="text-[10px] font-bold uppercase bg-white text-sky-600 px-2 py-0.5 rounded-full">
                      Activo
                    </span>
                  )}
                </div>
                <div>
                  <div className={`font-bold text-xs sm:text-sm ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {env.label}
                  </div>
                  <div className={`text-[11px] ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                    {env.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Display Showcase with Day/Night Lighting Simulator */}
        <div className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Showcase Image Container with Dynamic Lighting Filters */}
            <div className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] bg-black overflow-hidden flex items-center justify-center group">
              
              {/* The Mockup Image with Day vs Night filter transition */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={activeEnv.image}
                  alt={activeEnv.label}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isNightMode
                      ? 'brightness-90 contrast-110'
                      : 'brightness-105 contrast-100 saturate-105'
                  }`}
                />

                {/* Night Mode Simulated Backlight Glow Layers (Concepto 2) */}
                {isNightMode && (
                  <>
                    {/* Atmospheric Night Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none transition-opacity duration-500" />
                    
                    {/* Simulated Internal LED Glow from the billboard / mupi */}
                    <div
                      className={`absolute inset-0 pointer-events-none transition-opacity duration-700 mix-blend-screen ${
                        backlightIntensity === 'high' ? 'opacity-90' : 'opacity-60'
                      }`}
                      style={{
                        background:
                          'radial-gradient(ellipse at 50% 50%, rgba(0, 229, 255, 0.45) 0%, rgba(56, 189, 248, 0.25) 45%, transparent 80%)'
                      }}
                    />

                    {/* Cyan Neon Reflected Edge Light */}
                    <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#00e5ff]/25 via-sky-500/10 to-transparent pointer-events-none" />
                  </>
                )}

                {/* Day Mode Simulated Sunlight Flare Layer */}
                {!isNightMode && (
                  <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-bl from-amber-200/35 via-white/20 to-transparent rounded-full blur-2xl pointer-events-none" />
                )}
              </div>

              {/* Top Context Tag & Lighting Indicator */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <div className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span>{activeEnv.badge}</span>
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md border ${
                    isNightMode
                      ? 'bg-sky-950/80 text-cyan-300 border-cyan-400/50 shadow-md shadow-cyan-500/20'
                      : 'bg-amber-950/80 text-amber-300 border-amber-400/50'
                  }`}
                >
                  {isNightMode ? (
                    <>
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Backlight LED: Activo (4500K)</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Luz Solar Directa (5500K)</span>
                    </>
                  )}
                </div>
              </div>

              {/* Bottom Quick Controls over Mockup */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                
                {/* Backlight Intensity selector (Only when Night mode is on) */}
                {isNightMode ? (
                  <div className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs text-slate-300">
                    <span className="text-[11px] font-bold text-sky-400 px-2 flex items-center gap-1">
                      <Sliders className="w-3 h-3" />
                      Intensidad LED:
                    </span>
                    <button
                      onClick={() => setBacklightIntensity('standard')}
                      className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                        backlightIntensity === 'standard'
                          ? 'bg-sky-500 text-white'
                          : 'hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      Estándar
                    </button>
                    <button
                      onClick={() => setBacklightIntensity('high')}
                      className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                        backlightIntensity === 'high'
                          ? 'bg-cyan-400 text-slate-950 shadow-xs'
                          : 'hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      Potente ⚡
                    </button>
                  </div>
                ) : (
                  <div className="p-1.5 px-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-[11px] text-amber-200 font-medium">
                    ☀️ Visibilidad óptima con luz solar
                  </div>
                )}

                {/* Dimensions readout */}
                <div className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white text-[11px] font-mono border border-white/10 hidden sm:block">
                  {activeEnv.dimensions}
                </div>

              </div>

            </div>

            {/* Right Information & Technical Direction Panel (4 cols on lg) */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 text-white space-y-6">
              
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Dirección Técnica de Luz</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                    300 DPI Ready
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {activeEnv.label}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeEnv.description}
                </p>

                {/* Dynamic Lighting Analysis Box */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold flex items-center gap-2">
                    {isNightMode ? (
                      <>
                        <Moon className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-300">Comportamiento en la Noche:</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-300">Comportamiento en el Día:</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isNightMode ? activeEnv.nightNote : activeEnv.daylightNote}
                  </p>
                </div>

                {/* Specs List */}
                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                  <div className="flex justify-between">
                    <span>Entorno Urbano:</span>
                    <strong className="text-slate-200">{activeEnv.subtitle}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Formato Físico:</span>
                    <strong className="text-sky-300">{activeEnv.dimensions}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Psicología Visual:</span>
                    <strong className="text-slate-200">Prestigio de Marca & Autoridad</strong>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Action for this context */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Entrega con perfiles de color listos para imprenta o pantalla LED.</span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <OfficialWhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                  <span>Cotizar Afiche para Vía Pública</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-100" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

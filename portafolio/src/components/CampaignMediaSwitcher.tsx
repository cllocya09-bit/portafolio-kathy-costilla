import React, { useState } from 'react';
import {
  Smartphone,
  Monitor,
  Layout,
  Maximize2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Layers,
  Zap,
  Sliders,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Volume2
} from 'lucide-react';
import { OfficialWhatsAppIcon } from './WhatsAppFloatingButton';

interface CampaignMediaSwitcherProps {
  phone: string;
}

type FormatId = 'reel' | 'billboard_wide' | 'poster_ooh' | 'feed_post';

interface FormatConfig {
  id: FormatId;
  label: string;
  shortTag: string;
  ratio: string;
  icon: React.ReactNode;
  canvasAspect: string;
  specs: {
    resolution: string;
    target: string;
    colorSpace: string;
    safeZoneNote: string;
  };
  headline: string;
  description: string;
}

export const CampaignMediaSwitcher: React.FC<CampaignMediaSwitcherProps> = ({ phone }) => {
  const [selectedFormat, setSelectedFormat] = useState<FormatId>('reel');
  const [selectedCampaign, setSelectedCampaign] = useState<'frost' | 'kinetic'>('frost');
  const [showSafeZones, setShowSafeZones] = useState<boolean>(true);

  const campaigns = {
    frost: {
      name: 'Frost Crush Energy',
      tagline: '«Unleash the Frost — Stay Sharp. Go Bold.»',
      category: 'Bebida Energética · Campaña Comercial',
      imageVertical: 'images/ad_poster_energy_drink_1791693876265.jpg',
      imageWide: 'images/ad_billboard_city_mockup_1791693917414.jpg',
      palette: ['#00e5ff', '#38bdf8', '#0284c7', '#0f172a', '#ffffff'],
      headline: 'UNLEASH THE FROST',
      subhead: 'Máxima energía con cero azúcar. Disponible en todo el país.',
      cta: '¡Pruébala Fría!'
    },
    kinetic: {
      name: 'Air Kinetic Sneakers',
      tagline: '«Defy Gravity — Urban High-Performance»',
      category: 'Moda Urbana & Calzado Deportivo',
      imageVertical: 'images/ad_billboard_sneaker_1791693889498.jpg',
      imageWide: 'images/ad_billboard_sneaker_1791693889498.jpg',
      palette: ['#00e5ff', '#38bdf8', '#ff6b35', '#0b1120', '#ffffff'],
      headline: 'DEFY GRAVITY',
      subhead: 'Tecnología de amortiguación ultraligera para la ciudad.',
      cta: 'Ver Colección'
    }
  };

  const currentCamp = campaigns[selectedCampaign];

  const formats: FormatConfig[] = [
    {
      id: 'reel',
      label: 'Reel / TikTok 9:16',
      shortTag: 'Vertical 9:16',
      ratio: '9:16',
      icon: <Smartphone className="w-4 h-4" />,
      canvasAspect: 'aspect-[9/16]',
      specs: {
        resolution: '1080 x 1920 px',
        target: 'Retención de Scroll en Instagram & TikTok',
        colorSpace: 'sRGB · 60 FPS',
        safeZoneNote: 'Respeto de zonas de interfaz (avatar, botón like, caption) para visibilidad total.'
      },
      headline: 'Formato Vertical Inmersivo (9:16)',
      description:
        'Diseñado para pantallas completas de smartphones. El producto central y el titular quedan exactamente en la zona visible, sin ser tapados por los botones de TikTok ni la descripción de Instagram.'
    },
    {
      id: 'billboard_wide',
      label: 'Valla LED 16:9',
      shortTag: 'Panorámica 16:9',
      ratio: '16:9',
      icon: <Monitor className="w-4 h-4" />,
      canvasAspect: 'aspect-[16/9]',
      specs: {
        resolution: '3840 x 2160 px (4K)',
        target: 'Autopistas, Pantallas LED Urbanas & Vía Pública',
        colorSpace: 'RGB High-Contrast',
        safeZoneNote: 'Titular de gran escala legible a más de 80 km/h por conductores.'
      },
      headline: 'Valla Panorámica LED (16:9)',
      description:
        'Composición horizontal con producto a un tercio y titular display expandido. Garantiza lectura inmediata en autopistas y pantallas gigantes de centros urbanos.'
    },
    {
      id: 'poster_ooh',
      label: 'Afiche Mupi 70x100 cm',
      shortTag: 'Impreso 70x100 cm',
      ratio: '7:10',
      icon: <Maximize2 className="w-4 h-4" />,
      canvasAspect: 'aspect-[7/10]',
      specs: {
        resolution: '70 x 100 cm · 300 DPI Nativo',
        target: 'Marquesinas, Vitrinas Retail & Paraderos',
        colorSpace: 'CMYK Coated FOGRA39',
        safeZoneNote: 'Sangrías de 5 mm y marcas de corte listas para imprenta offset.'
      },
      headline: 'Afiche Comercial de Gran Formato (70x100 cm)',
      description:
        'El formato clásico y rey de la publicidad exterior. Impresión en alta resolución con detalle nítido de salpicaduras de producto y tipografía jerarquizada.'
    },
    {
      id: 'feed_post',
      label: 'Post Feed 4:5',
      shortTag: 'Feed 4:5',
      ratio: '4:5',
      icon: <Layout className="w-4 h-4" />,
      canvasAspect: 'aspect-[4/5]',
      specs: {
        resolution: '1080 x 1350 px',
        target: 'Meta Ads (Facebook & Instagram Feed)',
        colorSpace: 'sRGB Optimizado',
        safeZoneNote: 'Mayor área vertical en el feed para aumentar el tiempo de retención y CTR.'
      },
      headline: 'Creativo para Pauta en Feed (4:5)',
      description:
        'El formato con mayor tasa de clics (CTR) en publicidad de pago. Ocupa el máximo espacio en pantalla antes de que el usuario haga scroll.'
    }
  ];

  const currentFormatConfig = formats.find((f) => f.id === selectedFormat) || formats[0];

  const whatsappMessage = encodeURIComponent(
    `Hola Khaterine, me interesa cotizar una campaña publicitaria en Sistema 360° (${currentCamp.name} adaptado a ${currentFormatConfig.label}).`
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-white via-sky-50/20 to-slate-50 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-300 text-xs font-bold text-sky-800 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Sistema Publicitario Adaptable · Campaña 360°</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Una Campaña. <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-[#00a8ff] to-cyan-500">Todos los Formatos.</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Un afiche publicitario no es una pieza estática aislada. Cada campaña que diseño se concibe como un **sistema visual flexible** listo para desplegarse con armonía y precisión milimétrica en vía pública, pantallas digitales, reels verticales y pauta en redes.
          </p>
        </div>

        {/* Campaign Switcher Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-3 rounded-2xl bg-white border border-sky-200 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-2">
              Campaña a Probar:
            </span>
            <button
              onClick={() => setSelectedCampaign('frost')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCampaign === 'frost'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-sky-50'
              }`}
            >
              Frost Crush (Energizante)
            </button>
            <button
              onClick={() => setSelectedCampaign('kinetic')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCampaign === 'kinetic'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-sky-50'
              }`}
            >
              Air Kinetic (Sneakers)
            </button>
          </div>

          {/* Safe Zones Toggle Button */}
          {selectedFormat === 'reel' && (
            <button
              onClick={() => setShowSafeZones(!showSafeZones)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                showSafeZones
                  ? 'bg-amber-100 text-amber-800 border border-amber-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>{showSafeZones ? 'Ocultar Zonas Seguras 9:16' : 'Ver Zonas Seguras 9:16'}</span>
            </button>
          )}
        </div>

        {/* 4 Format Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {formats.map((fmt) => {
            const isActive = selectedFormat === fmt.id;
            return (
              <button
                key={fmt.id}
                onClick={() => setSelectedFormat(fmt.id)}
                className={`group p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 text-white border-sky-400 shadow-xl shadow-sky-500/15 ring-2 ring-sky-400/40'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 rounded-xl ${
                      isActive ? 'bg-sky-500/20 text-sky-400' : 'bg-sky-50 text-sky-600'
                    }`}
                  >
                    {fmt.icon}
                  </div>
                  <span
                    className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                      isActive ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {fmt.ratio}
                  </span>
                </div>

                <div>
                  <h4
                    className={`font-bold text-xs sm:text-sm ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {fmt.label}
                  </h4>
                  <p
                    className={`text-[11px] mt-0.5 ${
                      isActive ? 'text-sky-300' : 'text-slate-500'
                    }`}
                  >
                    {fmt.specs.resolution}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Staging Canvas & Technical Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Canvas (7 cols on lg): Live Format Frame Simulation */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col items-center justify-center min-h-[520px] relative overflow-hidden">
            
            {/* Ambient Cyan/Sky Background Aura */}
            <div className="absolute top-10 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Canvas Bar with Ratio Tag */}
            <div className="w-full flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-slate-800 mb-6">
              <span className="font-mono flex items-center gap-2 text-sky-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span>Simulador de Ratio: {currentFormatConfig.ratio}</span>
              </span>
              <span className="text-[11px] font-mono bg-slate-900 px-2.5 py-1 rounded border border-slate-700">
                {currentFormatConfig.specs.resolution}
              </span>
            </div>

            {/* =========================================================================
                FORMAT 1: REEL 9:16 (SMARTPHONE FRAME WITH SOCIAL UI & SAFE ZONES)
               ========================================================================= */}
            {selectedFormat === 'reel' && (
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[9/16] rounded-[2.5rem] p-3 bg-slate-900 border-4 border-slate-700 shadow-2xl shadow-sky-500/20 overflow-hidden flex flex-col">
                
                {/* Dynamic Screen Area */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black flex flex-col justify-between">
                  <img
                    src={currentCamp.imageVertical}
                    alt={currentCamp.name}
                    className="absolute inset-0 w-full h-full object-cover brightness-95"
                  />

                  {/* Top Instagram/TikTok Header UI */}
                  <div className="relative z-10 p-4 pt-3 flex items-center justify-between text-white drop-shadow-md">
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>Reels</span>
                    </div>
                    <Volume2 className="w-4 h-4 text-white" />
                  </div>

                  {/* Safe Zone Overlay Lines (Concepto de Zona Segura Publicitaria) */}
                  {showSafeZones && (
                    <div className="absolute inset-0 pointer-events-none z-20 border-2 border-dashed border-amber-400/80 m-3 my-12 rounded-2xl flex flex-col justify-between p-2">
                      <div className="bg-amber-400/90 text-slate-950 font-black text-[9px] px-1.5 py-0.5 rounded uppercase self-start shadow-xs">
                        Zona Segura Publicitaria ✓
                      </div>
                      <div className="bg-amber-400/90 text-slate-950 font-black text-[8px] px-1 py-0.5 rounded self-end">
                        Titular & Logo Protegidos
                      </div>
                    </div>
                  )}

                  {/* Bottom & Right Social Overlay UI */}
                  <div className="relative z-10 p-4 pb-4 flex items-end justify-between bg-gradient-to-t from-black/85 via-black/35 to-transparent text-white">
                    {/* Left Creator Info */}
                    <div className="space-y-1.5 max-w-[190px]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-sky-500 ring-1 ring-white overflow-hidden">
                          <img
                            src="images/creative_portrait_1791686281113.jpg"
                            alt="Khaterine"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs font-bold leading-none">@khaterine.design</span>
                        <span className="text-[10px] bg-sky-500 px-1 py-0.2 rounded font-bold">Seguir</span>
                      </div>
                      <p className="text-[11px] text-slate-200 line-clamp-2 leading-tight font-medium">
                        {currentCamp.headline} · {currentCamp.subhead}
                      </p>
                    </div>

                    {/* Right Social Actions Column */}
                    <div className="flex flex-col items-center gap-3 text-white">
                      <div className="flex flex-col items-center">
                        <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                        <span className="text-[10px] font-bold">14.2k</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-[10px] font-bold">482</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Share2 className="w-5 h-5" />
                        <span className="text-[10px] font-bold">1.1k</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* =========================================================================
                FORMAT 2: VALLA LED 16:9 (PANORÁMICA DE CARRETERA)
               ========================================================================= */}
            {selectedFormat === 'billboard_wide' && (
              <div className="relative w-full max-w-xl aspect-[16/9] rounded-2xl p-2.5 bg-slate-900 border-4 border-slate-700 shadow-2xl overflow-hidden flex flex-col justify-center">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-between p-6 sm:p-8">
                  
                  {/* Left Billboard Copy */}
                  <div className="relative z-10 max-w-xs space-y-2 text-white">
                    <span className="text-[10px] font-mono tracking-widest text-sky-400 font-bold uppercase bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                      Vía Pública · Pantalla LED 4K
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-none text-white">
                      {currentCamp.headline}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {currentCamp.subhead}
                    </p>
                    <div className="pt-2">
                      <span className="inline-block px-3 py-1.5 rounded-lg bg-sky-500 text-white text-xs font-bold shadow-md">
                        {currentCamp.cta} →
                      </span>
                    </div>
                  </div>

                  {/* Right Key Visual Can / Sneaker Element */}
                  <div className="relative z-10 w-44 sm:w-52 h-full flex items-center justify-center">
                    <img
                      src={currentCamp.imageVertical}
                      alt={currentCamp.name}
                      className="h-full w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,229,255,0.4)]"
                    />
                  </div>

                  {/* Background Billboard Lighting Texture */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950/70" />
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />
                </div>
              </div>
            )}

            {/* =========================================================================
                FORMAT 3: AFICHE MUPI 70x100 CM (CLÁSICO VERTICAL)
               ========================================================================= */}
            {selectedFormat === 'poster_ooh' && (
              <div className="relative w-full max-w-[320px] aspect-[7/10] rounded-2xl p-2 bg-slate-800 border-2 border-slate-600 shadow-2xl overflow-hidden flex flex-col justify-center">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={currentCamp.imageVertical}
                    alt={currentCamp.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Print Crop Marks on corners */}
                  <div className="absolute top-2 left-2 text-[8px] font-mono text-white/50 select-none">
                    ┌ 70x100 CM
                  </div>
                  <div className="absolute top-2 right-2 text-[8px] font-mono text-white/50 select-none">
                    300 DPI ┐
                  </div>
                  <div className="absolute bottom-2 left-2 text-[8px] font-mono text-white/50 select-none">
                    └ CMYK FOGRA39
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================================
                FORMAT 4: FEED POST 4:5 (META ADS CREATIVE)
               ========================================================================= */}
            {selectedFormat === 'feed_post' && (
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl p-3 bg-white text-slate-900 shadow-2xl overflow-hidden flex flex-col">
                {/* Meta Ad Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sky-500 font-bold text-[9px] text-white flex items-center justify-center">
                      K
                    </div>
                    <div>
                      <strong className="text-[11px] block leading-none">{currentCamp.name}</strong>
                      <span className="text-[9px] text-slate-400">Publicidad comercial</span>
                    </div>
                  </div>
                  <span className="text-slate-400 font-bold">···</span>
                </div>

                {/* Ad Image Area */}
                <div className="relative flex-1 rounded-xl overflow-hidden bg-slate-950 my-2">
                  <img
                    src={currentCamp.imageVertical}
                    alt={currentCamp.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white rounded text-[9px] font-bold">
                    Pauta 4:5
                  </div>
                </div>

                {/* Ad CTA Bar */}
                <div className="pt-1 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block">{currentCamp.headline}</span>
                    <span className="text-[9px] text-slate-500">Haz clic para ordenar en web</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-sky-500 text-white text-[11px] font-bold shadow-xs">
                    Comprar
                  </span>
                </div>
              </div>
            )}

            {/* Bottom Status */}
            <div className="w-full text-center pt-4 text-xs text-slate-400">
              <span>{currentFormatConfig.headline}</span>
            </div>

          </div>

          {/* Right Inspector & Deliverables Breakdown (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Format Explanatory Card */}
            <div className="p-6 rounded-3xl bg-white border border-sky-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  {currentFormatConfig.shortTag}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Ratio {currentFormatConfig.ratio}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {currentFormatConfig.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentFormatConfig.description}
              </p>

              {/* Technical Specifications */}
              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex justify-between p-2 rounded-xl bg-slate-50">
                  <span className="text-slate-500">Resolución de Entrega:</span>
                  <strong className="text-slate-900 font-mono">{currentFormatConfig.specs.resolution}</strong>
                </div>
                <div className="flex justify-between p-2 rounded-xl bg-slate-50">
                  <span className="text-slate-500">Perfil de Color:</span>
                  <strong className="text-sky-700 font-mono">{currentFormatConfig.specs.colorSpace}</strong>
                </div>
                <div className="flex justify-between p-2 rounded-xl bg-slate-50">
                  <span className="text-slate-500">Objetivo del Canal:</span>
                  <strong className="text-slate-900">{currentFormatConfig.specs.target}</strong>
                </div>
              </div>

              {/* Safe Zone Alert Note */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Criterio Técnico:</strong> {currentFormatConfig.specs.safeZoneNote}
                </span>
              </div>

            </div>

            {/* 360° Campaign Pack Value Box */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl border border-sky-950">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Pack Publicitario Multicanal 360°</span>
              </div>

              <h4 className="text-lg font-bold text-white">
                ¿Qué incluye una campaña 360° con Khaterine?
              </h4>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Key Visual maestro en Photoshop a 300 DPI CMYK.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Adaptaciones exactas a 9:16 (Reel), 16:9 (LED) y 4:5 (Feed).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Respeto riguroso de zonas seguras de interfaz de redes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Mockups fotorrealistas para aprobación de dirección y clientes.</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <OfficialWhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Cotizar Campaña 360° Completa</span>
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

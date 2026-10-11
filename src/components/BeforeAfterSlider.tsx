import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles, Layers, Sliders, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { OfficialWhatsAppIcon } from './WhatsAppFloatingButton';

interface BeforeAfterSliderProps {
  phone: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ phone }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImage = 'images/raw_can_before_1791695633596.jpg';
  const afterImage = 'images/ad_poster_energy_drink_1791693876265.jpg';

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.min(Math.max((x / width) * 100, 0), 100);
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const whatsappMessage = encodeURIComponent(
    'Hola Khaterine, vi el Antes y Después en tu web y quiero cotizar la producción de un afiche publicitario para la foto de mi producto.'
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;

  return (
    <section className="relative overflow-hidden py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>El Mayor Generador de Impacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Demostración en Vivo: <span className="text-sky-500 font-extrabold">Antes & Después</span> del Producto
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Un cliente no siempre dimensiona el trabajo técnico hasta que lo ve frente a frente. 
            Compara cómo convertimos una fotografía cruda y sin editar en un afiche publicitario comercial de nivel internacional:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Interactive Slider Area (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Quick Toggle Controls */}
            <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-100 rounded-xl text-xs font-semibold text-slate-700">
              <button
                type="button"
                onClick={() => setSliderPos(0)}
                className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer text-center ${
                  sliderPos === 0
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                100% Foto Cruda (Antes)
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(50)}
                className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer text-center ${
                  sliderPos === 50
                    ? 'bg-white text-sky-600 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                Comparativa 50 / 50
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer text-center ${
                  sliderPos === 100
                    ? 'bg-white text-sky-600 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                100% Afiche Final (Después)
              </button>
            </div>

            {/* The Before/After Viewer Canvas */}
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200 select-none cursor-ew-resize bg-slate-950"
            >
              {/* "DESPUÉS" (Background Full Image) */}
              <img
                src={afterImage}
                alt="Afiche Publicitario Producido en Photoshop"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              
              {/* Badge "DESPUÉS" */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-sky-500/90 backdrop-blur-md text-white text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DESPUÉS: Afiche Comercial</span>
              </div>

              {/* "ANTES" (Clipped Layer on Left) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={beforeImage}
                  alt="Fotografía cruda del producto sin retocar"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%'
                  }}
                  draggable={false}
                />
                
                {/* Badge "ANTES" */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-slate-200 text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>ANTES: Foto Cruda del Producto</span>
                </div>
              </div>

              {/* The Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Vertical Divider */}
                <div className="w-0.5 h-full bg-white shadow-[0_0_12px_rgba(14,165,233,0.8)]" />

                {/* Circular Tactile Grip Knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-sky-600 shadow-[0_4px_16px_rgba(0,0,0,0.35)] border-2 border-sky-400 flex items-center justify-center pointer-events-auto cursor-ew-resize">
                  <ArrowLeftRight className="w-5 h-5 text-sky-600" />
                </div>
              </div>

              {/* Floating Instruction Tooltip */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-medium border border-white/15 pointer-events-none flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-sky-400" />
                <span>Arrastra el centro para comparar detalles</span>
              </div>
            </div>

          </div>

          {/* Right Column: Technical Explanations & Commercial Value (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-white border border-sky-100 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-sky-500" />
                <span>¿Qué realizamos en esta pieza?</span>
              </h3>
              
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">1. Calado milimétrico & Silueta</strong>
                    <span>Extracción perfecta de la lata en Photoshop eliminando fondos planos o reflejos no deseados.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">2. Fotomontaje de Salpicaduras & Escarcha</strong>
                    <span>Integración de bloques de hielo, agua congelada dinámica y condensación sobre el aluminio.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">3. Iluminación Dramática & Sombras</strong>
                    <span>Ajuste de curvas de luminosidad, sombras de contacto y destellos celestes publicitarios.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">4. Tipografía Display Comercial</strong>
                    <span>Titular «Unleash the Frost» con peso publicitario y jerarquía pensada para acelerar la compra.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Commercial Callout Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-100 bg-sky-400/50 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                  ¿Tienes fotos de tus productos?
                </span>
                <h4 className="text-lg font-bold text-white leading-snug">
                  Transformemos las fotos de tu marca en afiches que vendan.
                </h4>
                <p className="text-xs text-sky-100 mt-1 leading-relaxed">
                  Solo necesitas enviarnos la foto de tu producto por WhatsApp. Nosotros nos encargamos de todo el montaje publicitario.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white text-slate-900 hover:bg-sky-50 text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <OfficialWhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cotizar Afiche para mi Producto</span>
                <ArrowUpRight className="w-4 h-4 text-slate-600" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

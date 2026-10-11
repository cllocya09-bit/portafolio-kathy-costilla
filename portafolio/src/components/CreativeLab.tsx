import React, { useState } from 'react';
import { Palette, Wrench, Layers, Check, Copy, Sparkles, Sliders, Eye, ArrowRight } from 'lucide-react';
import {
  PhotoshopLogo,
  IllustratorLogo,
  PremiereLogo,
  AfterEffectsLogo,
  CapCutLogo,
  CanvaLogo
} from './SoftwareLogos';

export const CreativeLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'process' | 'palette' | 'workflow'>('process');
  const [processMode, setProcessMode] = useState<'both' | 'sketch' | 'final'>('both');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [selectedSoftware, setSelectedSoftware] = useState<string>('ps');

  const paletteColors = [
    {
      name: 'Celeste Puro (Sky Blue)',
      hex: '#38bdf8',
      role: 'Acento principal & Llamados a la acción',
      psychology: 'Transmite frescura, energía limpia, innovación y confianza comercial.',
      textDark: true
    },
    {
      name: 'Azul Océano Publicitario',
      hex: '#0284c7',
      role: 'Titulares de alto impacto & Logotipos',
      psychology: 'Fuerza de marca, profesionalismo y estabilidad visual en anuncios.',
      textDark: false
    },
    {
      name: 'Cian Neón / Electric Cyan',
      hex: '#00e5ff',
      role: 'Efectos de energía y resaltadores de producto',
      psychology: 'Dinamismo deportivo, juventud y alto impacto lumínico.',
      textDark: true
    },
    {
      name: 'Hielo Glacial (Ice Blue)',
      hex: '#e0f2fe',
      role: 'Superficies publicitarias y fondos limpios',
      psychology: 'Genera amplitud, respiración visual y resalta el producto central.',
      textDark: true
    },
    {
      name: 'Pizarra Profunda (Slate 900)',
      hex: '#0f172a',
      role: 'Tipografía de lectura y contraste comercial',
      psychology: 'Asegura legibilidad estricta y solidez en titulares publicitarios.',
      textDark: false
    }
  ];

  const softwareDetails: Record<
    string,
    {
      name: string;
      shortcut: string;
      specialty: string;
      deliverable: string;
      spec: string;
      logoComponent: React.ReactNode;
    }
  > = {
    ps: {
      name: 'Adobe Photoshop',
      shortcut: 'Cmd + T (Free Transform) · B (Brush) · W (Selection)',
      specialty: 'Edición fotográfica, fotomontajes publicitarios de producto, máscaras de recorte, retoque y gradación tonal comercial.',
      deliverable: 'Afiches publicitarios de gran formato, key visuals de campaña y mockups de producto.',
      spec: 'Archivos PSD multicapa, 300 DPI, CMYK para imprenta y sRGB para pauta digital',
      logoComponent: <PhotoshopLogo className="w-10 h-10 shrink-0" />
    },
    ai: {
      name: 'Adobe Illustrator',
      shortcut: 'P (Pen Tool) · M (Shape) · V (Direct Selection)',
      specialty: 'Ilustración vectorial, diseño de logotipos, branding comercial, diagramación de afiches y piezas publicitarias escalables.',
      deliverable: 'Manuales de marca, isotipos vectoriales, papelería y artes finales para corte.',
      spec: 'Vectores escalables (.AI / .SVG / PDF CMYK con sangrías y marcas de corte)',
      logoComponent: <IllustratorLogo className="w-10 h-10 shrink-0" />
    },
    pr: {
      name: 'Adobe Premiere Pro',
      shortcut: 'C (Razor Cut) · V (Selection) · Shift + 7 (Effects)',
      specialty: 'Edición de videos publicitarios, montaje comercial de producto, sincronización al beat y corrección de color Lumetri.',
      deliverable: 'Spots comerciales, trailers publicitarios de lanzamiento y videos para redes masterizados.',
      spec: 'Exportación ProRes 422 / H.264 4K / Rec.709 Color Space',
      logoComponent: <PremiereLogo className="w-10 h-10 shrink-0" />
    },
    ae: {
      name: 'Adobe After Effects',
      shortcut: 'U (Keyframes) · F9 (Easy Ease) · Ctrl + M (Render)',
      specialty: 'Motion graphics, animación de logotipos publicitarios, rotulación cinética y efectos visuales (VFX) comerciales.',
      deliverable: 'Intros dinámicas, cortinillas publicitarias y títulos animados para campañas.',
      spec: 'Renderizado en canal Alfa (.MOV ProRes 4444 con fondo transparente)',
      logoComponent: <AfterEffectsLogo className="w-10 h-10 shrink-0" />
    },
    cc: {
      name: 'CapCut Pro',
      shortcut: 'Auto-Captions · Speed Curves · Keyframing',
      specialty: 'Edición dinámica de formato 9:16 para Reels y TikToks publicitarios, ganchos de retención y subtítulos animados con personalidad.',
      deliverable: 'Micro-videos verticales con gancho en los primeros 1.5 segundos para pauta en redes.',
      spec: '1080 x 1920 (9:16) a 60 FPS con sonido normalizado a -14 LUFS',
      logoComponent: <CapCutLogo className="w-10 h-10 shrink-0" />
    },
    cv: {
      name: 'Canva Pro',
      shortcut: 'Brand Kit · Magic Resize · Team Templates',
      specialty: 'Diseños ágiles para redes sociales, carruseles promocionales, presentaciones comerciales y kits de plantillas editables.',
      deliverable: 'Packs de redes sociales listos para que el cliente edite textos y promociones rápidamente.',
      spec: 'Plantillas compartibles en la nube con permisos restringidos de marca',
      logoComponent: <CanvaLogo className="w-10 h-10 shrink-0" />
    }
  };

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-sky-100 shadow-xl overflow-hidden">
      
      {/* Top Banner / Tab Navigation */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-sky-500/10 via-sky-50 to-white border-b border-sky-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Mesa de Trabajo & Proceso de Diseño Publicitario</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
            El proceso publicitario detrás de cada campaña
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Desde el storyboard y bocetado inicial en papel hasta el afiche comercial de alto impacto con dirección de arte profesional.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-white/90 rounded-xl border border-sky-200/80 shadow-xs self-start md:self-auto">
          <button
            onClick={() => setActiveTab('process')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'process'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>01. Storyboard a Afiche</span>
          </button>

          <button
            onClick={() => setActiveTab('palette')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'palette'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>02. Paleta Publicitaria</span>
          </button>

          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'workflow'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>03. Suite de Programas</span>
          </button>
        </div>
      </div>

      {/* Tab 1: De Storyboard a Afiche Publicitario */}
      {activeTab === 'process' && (
        <div className="p-6 sm:p-10 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Proceso Publicitario: Campaña «AquaCharge»
              </h3>
              <p className="text-xs text-slate-500">
                Comparativa entre el storyboard y boceto estructural a lápiz (izquierda) frente al afiche publicitario comercial final (derecha).
              </p>
            </div>

            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-lg text-xs self-start sm:self-auto">
              <button
                onClick={() => setProcessMode('both')}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
                  processMode === 'both' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'
                }`}
              >
                Vista Completa
              </button>
              <button
                onClick={() => setProcessMode('sketch')}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
                  processMode === 'sketch' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'
                }`}
              >
                Storyboard
              </button>
              <button
                onClick={() => setProcessMode('final')}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
                  processMode === 'final' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'
                }`}
              >
                Afiche Comercial
              </button>
            </div>
          </div>

          {/* Interactive Artwork Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-xl">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="images/sketch_to_advertising_ad_1791692186552.jpg"
                alt="Proceso de diseño publicitario: de storyboard en libreta a afiche comercial final de bebida energética"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md border border-slate-700/60 px-3 py-1.5 rounded-lg text-[11px] text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Etapa 01: Storyboard & Boceto Conceptual</span>
            </div>

            <div className="absolute top-4 right-4 bg-sky-900/85 backdrop-blur-md border border-sky-600/60 px-3 py-1.5 rounded-lg text-[11px] text-sky-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-300" />
              <span>Etapa 02: Afiche Publicitario Final Terminado</span>
            </div>
          </div>

          {/* 4 Advertising Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'Estrategia & Storyboard',
                desc: 'Definición del público objetivo, beneficio principal del producto y estructura de viñetas en libreta.'
              },
              {
                step: '02',
                title: 'Composición Visual & Fotomontaje',
                desc: 'Dirección de arte en Photoshop: pose dinámica del deportista, perspectiva y efectos de energía celeste.'
              },
              {
                step: '03',
                title: 'Jerarquía Tipográfica Publicitaria',
                desc: 'Titular de gran escala "AQUACHARGE", copy persuasivo y llamado a la acción comercial contundente.'
              },
              {
                step: '04',
                title: 'Artes Finales & Adaptación',
                desc: 'Exportación en alta resolución CMYK a 300 DPI para vía pública y adaptaciones en RGB para redes sociales.'
              }
            ].map((item) => (
              <div key={item.step} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="font-mono text-xs font-bold text-sky-600">{item.step}</div>
                <div className="font-semibold text-xs text-slate-900">{item.title}</div>
                <div className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Tab 2: Paleta Publicitaria */}
      {activeTab === 'palette' && (
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Paleta Cromática Publicitaria: Psicología del Color & Impacto
            </h3>
            <p className="text-xs text-slate-500">
              Haz clic en cualquier color para copiar su código HEX al portapapeles:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {paletteColors.map((color) => (
              <div
                key={color.hex}
                onClick={() => handleCopyHex(color.hex)}
                className="group p-4 rounded-2xl border border-slate-200 bg-white hover:border-sky-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div>
                  <div
                    className="w-full h-28 rounded-xl shadow-inner border border-black/5 flex items-end justify-end p-2 transition-transform group-hover:scale-102"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        color.textDark ? 'bg-black/20 text-slate-900' : 'bg-white/20 text-white'
                      }`}
                    >
                      {color.hex}
                    </span>
                  </div>

                  <div className="pt-3 space-y-1">
                    <div className="font-display font-bold text-xs text-slate-900">{color.name}</div>
                    <div className="text-[11px] font-semibold text-sky-700">{color.role}</div>
                    <div className="text-[11px] text-slate-500 leading-snug pt-1">{color.psychology}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-sky-600">
                  <span className="text-[11px] font-medium">Copiar HEX</span>
                  {copiedColor === color.hex ? (
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold text-[11px]">
                      <Check className="w-3.5 h-3.5" />
                      Copiado
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Software Mastery with Official Vector Logos */}
      {activeTab === 'workflow' && (
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Programas Profesionales & Flujo de Trabajo
            </h3>
            <p className="text-xs text-slate-500">
              Selecciona cualquier programa para ver el rol específico en la producción publicitaria y audiovisual:
            </p>
          </div>

          {/* Software Buttons Bar with Authentic Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.entries(softwareDetails).map(([key, item]) => {
              const isSelected = selectedSoftware === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedSoftware(key)}
                  className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-2.5 ${
                    isSelected
                      ? 'border-sky-500 bg-sky-50/80 shadow-md ring-2 ring-sky-300'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="transition-transform group-hover:scale-105">
                    {item.logoComponent}
                  </div>
                  <span className="text-xs font-semibold text-slate-800 leading-tight">
                    {item.name.replace('Adobe ', '')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Software Detail Card */}
          {softwareDetails[selectedSoftware] && (
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-5 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    {softwareDetails[selectedSoftware].logoComponent}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-white">
                      {softwareDetails[selectedSoftware].name}
                    </h4>
                    <span className="text-xs text-sky-400 font-mono">
                      Atajos de teclado: {softwareDetails[selectedSoftware].shortcut}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 self-start sm:self-auto">
                  Suite de Producción Publicitaria
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                    Rol en Diseño Publicitario
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {softwareDetails[selectedSoftware].specialty}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                    Piezas Entregables
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {softwareDetails[selectedSoftware].deliverable}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                    Estándar de Exportación
                  </div>
                  <p className="text-xs text-slate-300 font-mono leading-relaxed">
                    {softwareDetails[selectedSoftware].spec}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

import React from 'react';
import { Check, Sparkles, ArrowRight, ArrowUpRight, Zap, Printer, Clapperboard, Star } from 'lucide-react';
import { OfficialWhatsAppIcon } from './WhatsAppFloatingButton';

interface CommercialPacksProps {
  phone: string;
}

export const CommercialPacks: React.FC<CommercialPacksProps> = ({ phone }) => {
  const packs = [
    {
      id: 'pack-01',
      number: '01',
      title: 'Lanzamiento de Producto',
      subtitle: 'Key Visual Digital',
      icon: <Zap className="w-5 h-5 text-sky-500" />,
      idealFor: 'Marcas y negocios que lanzan un nuevo producto o promoción en redes sociales.',
      featured: false,
      deliverables: [
        '1 Afiche principal de alto impacto comercial (Key Visual)',
        '3 Adaptaciones verticales (9:16) para Instagram Stories & TikTok',
        '1 Banner horizontal para Web o Facebook Ads (16:9 / 1.91:1)',
        'Fotomontaje de producto en Photoshop con iluminación publicitaria',
        'Formatos optimizados para pauta digital y carga ultrarrápida'
      ],
      whatsappMsg:
        'Hola Khaterine, me interesa cotizar el Pack 01: Lanzamiento de Producto (Key Visual) para mi marca.'
    },
    {
      id: 'pack-03',
      number: '03',
      title: 'Campaña Gráfica + Reel Comercial',
      subtitle: 'Solución Omnicanal 360°',
      icon: <Clapperboard className="w-5 h-5 text-sky-400" />,
      idealFor: 'El combo definitivo: imagen fija de impacto + video dinámico para máxima conversión.',
      featured: true,
      tag: 'Más Solicitado · Máximo Retorno',
      deliverables: [
        'Afiche comercial publicitario de producto en alta resolución',
        'Video vertical comercial de 15s con gancho visual de retención',
        'Sincronización milimétrica al beat musical y efectos sonoros (SFX)',
        'Subtítulos dinámicos estilizados y rotulación tipográfica',
        '3 adaptaciones para feed y stories en Instagram, TikTok y YouTube Shorts',
        'Dirección de arte unificada entre la gráfica y el video'
      ],
      whatsappMsg:
        'Hola Khaterine, me interesa cotizar el Pack 03: Combo Campaña Gráfica + Reel Comercial para mi marca.'
    },
    {
      id: 'pack-02',
      number: '02',
      title: 'Afiche para Imprenta / Vía Pública',
      subtitle: 'Producción Física en Gran Formato',
      icon: <Printer className="w-5 h-5 text-sky-500" />,
      idealFor: 'Paneles en avenidas, vallas, mupis, gigantografías, afiches en tiendas y banners impresos.',
      featured: false,
      deliverables: [
        'Arte final en resolución 300 DPI CMYK listo para enviar a imprenta',
        'Ficha técnica con perfiles de color (FOGRA39 / US Web Coated)',
        'Textos convertidos a curvas vectoriales y sangrías de corte exactas',
        'Pruebas de contraste para visibilidad diurna y nocturna',
        'Archivos maestros en PDF/X-1a y TIFF de alta fidelidad sin compresión'
      ],
      whatsappMsg:
        'Hola Khaterine, quiero cotizar el Pack 02: Afiche para Imprenta y Vía Pública en alta resolución.'
    }
  ];

  return (
    <section className="relative overflow-hidden py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Soluciones Comerciales Listas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Paquetes Comerciales Claros: <span className="text-sky-500 font-extrabold">Elige y Cotiza</span> sin Dudas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Eliminamos la incertidumbre. Si no sabes exactamente qué pedir, estos 3 paquetes resuelven las necesidades más comunes con tiempos de entrega ágiles y calidad de agencia:
          </p>
        </div>

        {/* 3 Pack Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packs.map((pack) => {
            const isFeatured = pack.featured;
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(pack.whatsappMsg)}`;

            return (
              <div
                key={pack.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-slate-950 text-white border-2 border-sky-400 shadow-2xl shadow-sky-500/20 lg:-translate-y-3'
                    : 'bg-white text-slate-900 border border-slate-200 hover:border-sky-300 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                    <span>{pack.tag}</span>
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Pack Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className={`text-xs font-mono font-bold tracking-wider ${isFeatured ? 'text-sky-400' : 'text-sky-600'}`}>
                        PAQUETE {pack.number}
                      </span>
                      <h3 className={`text-xl font-bold ${isFeatured ? 'text-white' : 'text-slate-900'} leading-tight`}>
                        {pack.title}
                      </h3>
                      <p className={`text-xs font-medium ${isFeatured ? 'text-sky-200' : 'text-slate-500'}`}>
                        {pack.subtitle}
                      </p>
                    </div>

                    <div className={`p-3 rounded-2xl ${isFeatured ? 'bg-sky-950 border border-sky-800' : 'bg-sky-50 border border-sky-100'}`}>
                      {pack.icon}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <p className={`text-xs sm:text-sm leading-relaxed p-3 rounded-xl ${isFeatured ? 'bg-slate-900/90 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-600 border border-slate-100'}`}>
                    {pack.idealFor}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3">
                    <div className={`text-xs font-bold uppercase tracking-wider ${isFeatured ? 'text-sky-300' : 'text-slate-700'}`}>
                      ¿Qué incluye exactamente?
                    </div>
                    <ul className="space-y-2.5">
                      {pack.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isFeatured ? 'text-sky-400' : 'text-sky-600'}`} />
                          <span className={isFeatured ? 'text-slate-200' : 'text-slate-600'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* WhatsApp Direct Action Button */}
                <div className="pt-8 mt-6 border-t border-slate-100/10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-primary w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-bold transition-all shadow-md ${
                      isFeatured
                        ? 'bg-sky-400 hover:bg-sky-300 text-slate-950 shadow-sky-400/25'
                        : 'bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/25'
                    }`}
                  >
                    <OfficialWhatsAppIcon className="w-4 h-4 text-current shrink-0" />
                    <span>Cotizar este Paquete por WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <div className={`text-[11px] text-center mt-2 ${isFeatured ? 'text-slate-400' : 'text-slate-400'}`}>
                    Respuesta rápida con cotización a medida
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

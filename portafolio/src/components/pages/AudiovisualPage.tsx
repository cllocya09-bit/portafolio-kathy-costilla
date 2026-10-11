import React, { useState } from 'react';
import { VideoProject } from '../../types/portfolio';
import { ReelSimulator } from '../ReelSimulator';
import { MarqueeStrip } from '../MarqueeStrip';
import { Play, Clapperboard, Sparkles, Smartphone, MonitorPlay, MessageCircle, Volume2, Sparkle } from 'lucide-react';

interface AudiovisualPageProps {
  videos: VideoProject[];
  onSelectVideo: (video: VideoProject) => void;
  phone: string;
}

export const AudiovisualPage: React.FC<AudiovisualPageProps> = ({
  videos,
  onSelectVideo,
  phone
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Todos los Videos' },
    { id: 'Reels', label: 'Reels & TikToks (9:16)' },
    { id: 'Publicitario', label: 'Comerciales (16:9)' },
    { id: 'Motion', label: 'Motion Graphics' },
    { id: 'Contenido Redes', label: 'Micro-Contenido' }
  ];

  const filteredVideos = videos.filter((vid) => {
    if (activeFilter === 'all') return true;
    return vid.category === activeFilter;
  });

  const whatsappUrl = `https://wa.me/${phone}?text=Hola%20Khaterine,%20vi%20tu%20secci%C3%B3n%20audiovisual%20y%20me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20edici%C3%B3n%20de%20video.`;

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      
      {/* 1. HERO WITH REALISTIC PHONE REEL SIMULATOR */}
      <section className="relative pt-6 sm:pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Edición de Video Dinámica & Social Media 9:16</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] text-balance">
                Edición de video que retiene, emociona y convierte.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Especializada en el formato vertical de alta retención para <strong className="text-slate-900">TikTok e Instagram Reels</strong>, combinando cortes al compás de la música, subtítulos animados con personalidad y curvas de velocidad.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-mono font-bold text-sky-600">01. RITMO</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Cortes al Beat</div>
                  <div className="text-[11px] text-slate-500">Sincronización exacta</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-mono font-bold text-sky-600">02. HOOK</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Primeros 1.5 Seg</div>
                  <div className="text-[11px] text-slate-500">Gancho visual de entrada</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
                  <div className="text-xs font-mono font-bold text-sky-600">03. COLOR</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Tonos Celestes</div>
                  <div className="text-[11px] text-slate-500">Etalonaje fresco y moderno</div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-agency px-7 py-4 text-sm font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 rounded-full shadow-[0_8px_24px_-3px_rgba(14,165,233,0.45)] hover:shadow-[0_14px_30px_-3px_rgba(14,165,233,0.6)] transition-all flex items-center gap-2 transform hover:-translate-y-1 active:translate-y-0 active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Cotizar Paquete de Videos</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Reel Simulator Phone */}
            <div className="lg:col-span-5 flex justify-center">
              <ReelSimulator phone={phone} />
            </div>

          </div>
        </div>
      </section>

      {/* Ticker */}
      <MarqueeStrip variant="dark" />

      {/* 2. VIDEOS GRID WITH FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">
              Catálogo Audiovisual
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Proyectos de Edición & Postproducción
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-full border border-slate-200">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-white text-slate-900 shadow-sm scale-102'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              onClick={() => onSelectVideo(video)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-sky-400 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                <div className="aspect-[16/9] overflow-hidden bg-slate-900 relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Play badge */}
                  <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-sky-500/95 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Overlays */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                    <span className="bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md font-mono text-[10px]">
                      {video.format}
                    </span>
                    <span className="bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md font-mono text-[10px]">
                      {video.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-sky-600">{video.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{video.tools.join(' · ')}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-sky-700 transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="truncate max-w-[200px]">{video.editingPace}</span>
                <span className="text-sky-600 font-semibold group-hover:translate-x-1 transition-transform shrink-0">
                  Ver reproductor →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display font-bold text-2xl text-white">
              ¿Tienes clips grabados y necesitas darles vida?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Envíame tu material por Drive/WeTransfer y me encargo del montaje, corrección de color y subtitulado.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl shadow transition-all inline-flex items-center gap-2 shrink-0 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
};

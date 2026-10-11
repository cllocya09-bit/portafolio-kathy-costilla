import React, { useState, useEffect } from 'react';
import { VideoProject } from '../types/portfolio';
import { X, Play, Pause, Volume2, RotateCcw, Wrench, Clock, Music, Gauge, MessageCircle } from 'lucide-react';

interface VideoModalProps {
  video: VideoProject | null;
  onClose: () => void;
  phone: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, phone }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Video simulation progress timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!video) return null;

  const isVertical = video.format.includes('9:16');
  const whatsappUrl = `https://wa.me/${phone}?text=Hola%20Khaterine,%20me%20interesa%20cotizar%20un%20Reel%20comercial%20para%20mi%20marca%20(inspirado%20en%20"${encodeURIComponent(
    video.title
  )}")`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-800 overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2 text-xs text-sky-400">
            <span className="font-semibold">{video.format}</span>
            <span aria-hidden="true">·</span>
            <span>{video.duration}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar reproductor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          <div className="space-y-2">
            <h2 className="font-display font-bold text-2xl text-white tracking-tight">
              {video.title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {video.description}
            </p>
          </div>

          {/* Interactive Player Canvas */}
          <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden p-4 flex flex-col items-center justify-center relative">
            <div
              className={`relative rounded-lg overflow-hidden bg-slate-800 shadow-2xl border border-slate-700/60 ${
                isVertical
                  ? 'w-[240px] sm:w-[280px] aspect-[9/16]'
                  : 'w-full max-w-2xl aspect-[16/9]'
              }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isPlaying ? 'brightness-105' : 'brightness-90'
                }`}
              />

              {/* Simulated timeline overlay / play button */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-between p-4">
                <div className="flex justify-between items-center text-xs text-slate-200">
                  <span className="bg-black/60 px-2 py-0.5 rounded font-mono text-[10px]">
                    {video.format}
                  </span>
                  <div className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded text-[10px] text-sky-300 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Center play button */}
                <div className="self-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-sky-500/90 hover:bg-sky-400 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                    aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 text-white" />
                    ) : (
                      <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                    )}
                  </button>
                </div>

                {/* Bottom player controls */}
                <div className="space-y-2">
                  {/* Progress bar */}
                  <div
                    className="w-full bg-slate-700/80 h-1.5 rounded-full overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const percentage = Math.round((clickX / rect.width) * 100);
                      setProgress(percentage);
                    }}
                  >
                    <div
                      className="bg-sky-400 h-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="hover:text-sky-400 transition-colors"
                      >
                        {isPlaying ? 'Pausa' : 'Play'}
                      </button>
                      <button
                        onClick={() => {
                          setProgress(0);
                          setIsPlaying(true);
                        }}
                        className="hover:text-sky-400 transition-colors flex items-center gap-1"
                        title="Reiniciar"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span className="font-mono text-[10px]">{progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-500 mt-3 text-center">
              Vista previa interactiva del proyecto · Edición optimizada para plataformas digitales
            </p>
          </div>

          {/* Technical Specs Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-sky-400">
                <Wrench className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider text-[10px]">Herramientas</span>
              </div>
              <div className="text-slate-200">{video.tools.join(' · ')}</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-sky-400">
                <Gauge className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider text-[10px]">Ritmo & Montaje</span>
              </div>
              <div className="text-slate-200">{video.editingPace}</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-sky-400">
                <Music className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider text-[10px]">Pista de Audio</span>
              </div>
              <div className="text-slate-200">{video.audioTrack}</div>
            </div>
          </div>

          {/* Editorial notes */}
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 text-xs space-y-1 text-slate-300">
            <div className="font-semibold text-slate-200">Objetivo del Proyecto:</div>
            <p className="leading-relaxed text-slate-400">{video.objective}</p>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/90">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consultar por edición similar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

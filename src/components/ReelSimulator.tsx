import React, { useState, useEffect } from 'react';
import { Play, Pause, Heart, MessageCircle, Share2, Music, Volume2, VolumeX, Sparkles, FastForward } from 'lucide-react';

interface ReelSimulatorProps {
  phone: string;
}

export const ReelSimulator: React.FC<ReelSimulatorProps> = ({ phone }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [likes, setLikes] = useState(45200);
  const [hasLiked, setHasLiked] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [progress, setProgress] = useState(30);
  const [currentCaptionIdx, setCurrentCaptionIdx] = useState(0);

  const captions = [
    '✨ El secreto de un reel viral: primeros 1.5s decisivos',
    '🎨 Curvas de color en tonos celestes & contraste urbano',
    '⚡ Cortes rítmicos sincronizados exactamente al beat',
    '📱 Subtítulos dinámicos de alto impacto visual'
  ];

  // Rotate captions and progress
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1.5;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const captionInterval = setInterval(() => {
      if (isPlaying) {
        setCurrentCaptionIdx((prev) => (prev + 1) % captions.length);
      }
    }, 2800);
    return () => clearInterval(captionInterval);
  }, [isPlaying]);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }

    // Add floating heart
    const newHeart = {
      id: Date.now(),
      x: Math.random() * 60 - 30,
      y: Math.random() * 40 - 20
    };
    setFloatingHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);
  };

  const whatsappUrl = `https://wa.me/${phone}?text=Hola%20Kathy,%20vi%20el%20simulador%20de%20Reels%20en%20tu%20web%20y%20quiero%20cotizar%20un%20video%20as%C3%AD.`;

  return (
    <div className="relative flex flex-col items-center">
      {/* Phone container */}
      <div className="relative w-[280px] sm:w-[310px] aspect-[9/18] rounded-[44px] bg-slate-950 p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-sky-500/30 overflow-hidden select-none">
        
        {/* Dynamic island notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        </div>

        {/* Screen inner area */}
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative w-full h-full rounded-[34px] overflow-hidden bg-slate-900 cursor-pointer flex flex-col justify-between"
        >
          {/* Main Visual background */}
          <img
            src="images/reels_fashion_ad_1791686938416.jpg"
            alt="Simulación de video reel publicitario"
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
              isPlaying ? 'scale-105' : 'scale-100 brightness-75'
            }`}
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/40 pointer-events-none" />

          {/* Top phone header */}
          <div className="relative z-20 pt-6 px-4 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-[11px] drop-shadow">
              <span>Reels</span>
              <span className="text-sky-400">·</span>
              <span className="text-[10px] text-sky-200">Kathy Costilla</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[9px] bg-sky-500/80 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-white">
                Edición 9:16
              </span>
            </div>
          </div>

          {/* Middle play state indicator */}
          {!isPlaying && (
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center shadow-xl">
                <Play className="w-7 h-7 fill-white ml-1 text-white" />
              </div>
            </div>
          )}

          {/* Floating hearts animation */}
          {floatingHearts.map((heart) => (
            <div
              key={heart.id}
              className="absolute z-30 pointer-events-none transition-all duration-1000 -translate-y-20 opacity-0 text-rose-500 animate-bounce"
              style={{
                right: '28px',
                bottom: '120px',
                transform: `translate(${heart.x}px, ${heart.y}px)`
              }}
            >
              <Heart className="w-7 h-7 fill-rose-500" />
            </div>
          ))}

          {/* Bottom phone info & controls */}
          <div className="relative z-20 p-4 space-y-3">
            
            {/* Dynamic caption ticker */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-sky-500 text-[10px] font-bold text-white flex items-center justify-center">
                  K
                </div>
                <span className="text-white text-xs font-bold drop-shadow">
                  kathy.costilla.editor
                </span>
              </div>
              <p className="text-[11px] text-white/95 leading-tight font-medium bg-black/40 backdrop-blur-xs p-1.5 rounded-lg border border-white/10 transition-all duration-300">
                {captions[currentCaptionIdx]}
              </p>
            </div>

            {/* Audio bar visualizer */}
            <div className="flex items-center justify-between text-white/90 text-[10px]">
              <div className="flex items-center gap-2">
                <Music className="w-3 h-3 text-sky-400 animate-pulse" />
                <span className="truncate max-w-[140px]">Audio Trend · 128 BPM Edit</span>
              </div>

              {/* Animated audio bars */}
              <div className="flex items-end gap-0.5 h-3">
                <span className={`w-0.5 bg-sky-400 rounded-full transition-all duration-150 ${isPlaying ? 'h-3' : 'h-1'}`} />
                <span className={`w-0.5 bg-sky-300 rounded-full transition-all duration-150 ${isPlaying ? 'h-2' : 'h-1'}`} />
                <span className={`w-0.5 bg-sky-400 rounded-full transition-all duration-150 ${isPlaying ? 'h-3.5' : 'h-1'}`} />
                <span className={`w-0.5 bg-sky-200 rounded-full transition-all duration-150 ${isPlaying ? 'h-1.5' : 'h-1'}`} />
              </div>
            </div>

            {/* Scrubber progress */}
            <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
              <div
                className="bg-sky-400 h-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Right vertical action column (Instagram/TikTok style) */}
          <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-3">
            <button
              onClick={handleLike}
              className="flex flex-col items-center gap-0.5 group cursor-pointer"
            >
              <div className={`p-2 rounded-full transition-transform active:scale-125 ${hasLiked ? 'bg-rose-500/20 text-rose-500' : 'bg-black/40 text-white'}`}>
                <Heart className={`w-5 h-5 ${hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
              </div>
              <span className="text-[10px] text-white font-bold drop-shadow">
                {(likes / 1000).toFixed(1)}k
              </span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-0.5 group cursor-pointer"
            >
              <div className="p-2 rounded-full bg-emerald-500/80 text-white hover:bg-emerald-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-white font-medium drop-shadow">
                Cotizar
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Helpful caption below phone */}
      <div className="mt-3 text-center">
        <p className="text-xs text-slate-500 font-medium">
          Toca la pantalla para {isPlaying ? 'pausar' : 'reproducir'} · Da like o cotiza
        </p>
      </div>
    </div>
  );
};

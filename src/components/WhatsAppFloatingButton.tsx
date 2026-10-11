import React, { useState } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  phone: string;
  avatarUrl?: string;
}

// Pixel-perfect official WhatsApp brand mark with telephone receiver
export const OfficialWhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.002 2C8.28 2 2 8.28 2 16.002c0 2.68.754 5.184 2.06 7.319L2 30.004l6.892-1.954a13.93 13.93 0 007.11 1.954c7.722 0 14.002-6.28 14.002-14.002S23.724 2 16.002 2zm7.994 19.824c-.334.938-1.937 1.796-2.712 1.912-.695.103-1.574.147-2.54-.16a18.3 18.3 0 01-2.298-.85c-4.04-1.742-6.678-5.834-6.88-6.103-.201-.268-1.644-2.185-1.644-4.168s1.039-2.955 1.408-3.357c.369-.402.805-.503 1.074-.503.268 0 .536.003.771.014.25.012.582-.094.908.689.34.815 1.159 2.827 1.26 3.034.102.207.17.449.034.718-.135.269-.204.437-.406.673-.202.236-.426.527-.609.706-.203.202-.414.421-.178.825.235.403 1.045 1.722 2.242 2.788 1.54 1.371 2.836 1.795 3.241 1.996.404.203.64.17.876-.104.236-.27 1.012-1.179 1.282-1.583.27-.404.539-.337.91-.202.37.135 2.358 1.112 2.762 1.314.404.202.673.303.774.472.101.169.101.977-.233 1.915z"
    />
  </svg>
);

export const WhatsAppLogo = OfficialWhatsAppIcon;

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  phone,
  avatarUrl = 'images/creative_portrait_1791686281113.jpg'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuickMsg, setSelectedQuickMsg] = useState('Hola Khaterine, vi el afiche de tu portafolio y quiero cotizar uno similar para mi producto.');

  const quickMessages = [
    'Hola Khaterine, vi el afiche de tu portafolio y quiero cotizar uno similar para mi producto.',
    'Hola Khaterine, me interesa cotizar un Reel comercial para mi marca.',
    'Hola Khaterine, vi el Antes y Después y quiero cotizar la producción para mi producto.',
    'Hola Khaterine, me interesa cotizar un afiche para imprenta o vía pública.'
  ];

  const currentWhatsAppUrl = `https://wa.me/${phone}?text=${encodeURIComponent(selectedQuickMsg)}`;

  return (
    <aside
      aria-label="Botón flotante de contacto WhatsApp directo"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none font-sans"
    >
      {/* High-end Chat Preview Bubble Card */}
      {isOpen && (
        <div className="mb-3 w-[310px] sm:w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300">
          
          {/* Card WhatsApp Brand Header */}
          <div className="bg-[#128C7E] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={avatarUrl}
                  alt="Khaterine Costilla"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/90 shadow-xs"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white tracking-tight leading-tight">
                  Khaterine Costilla
                </h4>
                <p className="text-[11px] text-emerald-100 font-medium">
                  En línea · Diseñadora Publicitaria
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
              aria-label="Cerrar chat flotante"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Content Body with realistic message bubble */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-200 text-slate-800 space-y-1">
              <p className="font-normal leading-relaxed">
                ¡Hola! 👋 Soy Khaterine. ¿Tienes una campaña publicitaria, afiche o video que quieras realizar?
              </p>
              <span className="block text-[10px] text-slate-400 text-right">
                Respuesta en minutos por WhatsApp
              </span>
            </div>

            {/* Quick Prompt Selector */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Elige tu consulta rápida:
              </div>
              <div className="space-y-1">
                {quickMessages.map((msg, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedQuickMsg(msg)}
                    className={`w-full text-left p-2 rounded-lg text-[11px] transition-all cursor-pointer border ${
                      selectedQuickMsg === msg
                        ? 'bg-sky-50 text-sky-900 border-sky-300 font-semibold shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>

            {/* Launch WhatsApp direct link */}
            <div className="pt-2">
              <a
                href={currentWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <OfficialWhatsAppIcon className="w-4 h-4 text-white" />
                <span>Abrir Chat en WhatsApp</span>
                <Send className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir chat de WhatsApp con Kathy Costilla"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <OfficialWhatsAppIcon className="w-7 h-7 text-white" />
          )}
        </button>

        {/* Hover Pill Hint (visible only when closed) */}
        {!isOpen && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg">
            Chatear por WhatsApp
          </div>
        )}
      </div>
    </aside>
  );
};

import React from 'react';
import { PageId, ProfileData } from '../types/portfolio';
import { MessageCircle, Linkedin, ArrowUp } from 'lucide-react';
import { OfficialWhatsAppIcon } from './WhatsAppFloatingButton';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  profile: ProfileData;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand info with Sello Celeste Identity */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo theme="dark" size="md" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Diseño publicitario que comunica con claridad comercial y edición audiovisual que retiene audiencias en plataformas digitales con una identidad limpia y distintiva.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Diseño Publicitario · {profile.education.institution}</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portafolio')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  Afiches & Campañas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('audiovisual')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  Video & Reels
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  Servicios Publicitarios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre-mi')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  Sobre Khaterine
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Contacto Directo
            </h4>
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${profile.phone}?text=Hola%20Khaterine,%20te%20escribo%20desde%20tu%20portafolio%20de%20dise%C3%B1o%20publicitario.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-sky-500/50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <OfficialWhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">WhatsApp Directo</div>
                  <div className="text-sm font-semibold text-white group-hover:text-sky-300">
                    {profile.phoneDisplay}
                  </div>
                </div>
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-sky-500/50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Perfil Profesional</div>
                  <div className="text-sm font-semibold text-white group-hover:text-sky-300">
                    LinkedIn / Khaterine Costilla
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {profile.fullName} · Diseño Publicitario.
          </div>
          <div className="flex items-center gap-4">
            <span>Lima, Perú</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

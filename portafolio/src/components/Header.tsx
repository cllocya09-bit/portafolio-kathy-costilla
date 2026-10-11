import React from 'react';
import { PageId } from '../types/portfolio';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { OfficialWhatsAppIcon } from './WhatsAppFloatingButton';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  phone: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  phone
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'portafolio', label: 'Afiches & Campañas' },
    { id: 'audiovisual', label: 'Video & Reels' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'sobre-mi', label: 'Sobre Khaterine' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${phone}?text=Hola%20Khaterine,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20consultar%20por%20una%20campa%C3%B1a%20publicitaria.`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100/90 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Brand Wordmark with signature celeste identity matching brand image */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
          >
            <BrandLogo size="md" />
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-sky-100">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-sky-500 text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-sky-700 hover:bg-white/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* WhatsApp Direct Action with celeste signature style */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 rounded-full shadow-[0_4px_16px_rgba(14,165,233,0.35)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.45)] transition-all"
            >
              <OfficialWhatsAppIcon className="w-4 h-4 text-white shrink-0" />
              <span>Contactar por WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-sky-600 rounded-xl hover:bg-sky-50 cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sky-100 bg-white px-4 pt-3 pb-6 shadow-xl space-y-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-sky-50 text-sky-600 font-bold border-l-2 border-sky-500'
                    : 'text-slate-700 hover:bg-sky-50/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

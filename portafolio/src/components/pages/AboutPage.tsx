import React from 'react';
import { PageId, ProfileData, SoftwareSkill } from '../../types/portfolio';
import { advertisingCompetencies } from '../../data/initialData';
import {
  PhotoshopLogo,
  IllustratorLogo,
  PremiereLogo,
  AfterEffectsLogo,
  CapCutLogo,
  CanvaLogo
} from '../SoftwareLogos';
import {
  Palette,
  Film,
  Sparkles,
  MessageCircle,
  Linkedin,
  CheckCircle2,
  Layers,
  Award,
  ArrowRight
} from 'lucide-react';
import { OfficialWhatsAppIcon } from '../WhatsAppFloatingButton';

interface AboutPageProps {
  profile: ProfileData;
  softwareSkills: SoftwareSkill[];
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  profile,
  softwareSkills,
  onNavigate
}) => {
  const whatsappUrl = `https://wa.me/${profile.phone}?text=Hola%20Khaterine,%20le%C3%AD%20tu%20perfil%20de%20dise%C3%B1o%20publicitario%20y%20me%20gustar%C3%ADa%20conversar.`;

  const getSoftwareLogo = (id: string) => {
    switch (id) {
      case 'photoshop':
        return <PhotoshopLogo className="w-12 h-12 shrink-0 drop-shadow-sm" />;
      case 'illustrator':
        return <IllustratorLogo className="w-12 h-12 shrink-0 drop-shadow-sm" />;
      case 'premiere':
        return <PremiereLogo className="w-12 h-12 shrink-0 drop-shadow-sm" />;
      case 'aftereffects':
        return <AfterEffectsLogo className="w-12 h-12 shrink-0 drop-shadow-sm" />;
      case 'capcut':
        return <CapCutLogo className="w-12 h-12 shrink-0 drop-shadow-sm" />;
      case 'canva':
        return <CanvaLogo className="w-12 h-12 shrink-0 drop-shadow-sm" />;
      default:
        return <div className="w-12 h-12 rounded-xl bg-sky-500 text-white font-bold flex items-center justify-center">K</div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      
      {/* 1. Header & Split Profile Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Portrait with Celeste Accent Frame */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-3xl overflow-hidden border border-sky-200 shadow-xl bg-white relative">
            <div className="aspect-square bg-sky-50 relative group">
              <img
                src={profile.avatarUrl}
                alt={profile.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>Disponible para proyectos</span>
              </div>
            </div>
            
            <div className="p-6 bg-white border-t border-sky-100 space-y-2">
              <div className="font-bold text-slate-900 text-2xl tracking-tight">
                Khaterine <span className="text-[#00a8ff] font-extrabold">Costilla</span>
              </div>
              <div className="text-xs text-sky-600 font-bold uppercase tracking-wider">
                <span>Diseño Publicitario</span>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{profile.location}</span>
                <span className="text-sky-700 font-semibold">
                  Afiches · Campañas · Video
                </span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-sky-50/80 border border-sky-200 text-xs text-slate-700 space-y-2.5">
            <div className="font-bold text-sky-950 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Contacto directo para clientes y marcas:</span>
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white text-slate-900 hover:text-sky-600 font-semibold border border-sky-200 hover:border-sky-400 transition-colors shadow-2xs"
              >
                <OfficialWhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp Directo: {profile.phoneDisplay}</span>
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white text-slate-900 hover:text-sky-600 font-semibold border border-sky-200 hover:border-sky-400 transition-colors shadow-2xs"
              >
                <Linkedin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Perfil Profesional en LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Prose */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5 text-sky-600" />
            <span>Diseño Publicitario</span>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Creatividad y efectividad en <span className="text-sky-500 font-black">diseño publicitario</span> comercial.
          </h1>

          <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
            {profile.fullBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Core Pillars Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 hover:border-sky-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                Diseño Gráfico Publicitario
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Afiches de alto impacto, anuncios comerciales, mupis de vía pública y composiciones fotográficas con jerarquía tipográfica.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 hover:border-sky-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                Producción Audiovisual & Reels
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Edición de video dinámico con ritmo, cortes al beat musical, ganchos de retención para TikTok y Reels, y gradación de color en tonos fríos y celestes.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* 2. Qué se aprende en Diseño Publicitario: Las 5 Competencias Profesionales */}
      <section className="pt-8 border-t border-sky-100 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center gap-2">
            <Award className="w-4 h-4 text-sky-600" />
            <span>Fundamentos de la Carrera · IESTP María Rosario Aráoz Pinto</span>
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
            ¿Qué hace un Diseñador Publicitario?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Las 5 competencias técnicas y estratégicas que respaldan cada afiche, campaña y pieza audiovisual desarrollada:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advertisingCompetencies.map((comp) => (
            <div
              key={comp.number}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 shadow-xs hover:shadow-md transition-all duration-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sky-600 text-sm bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/60">
                  {comp.number}
                </span>
                <CheckCircle2 className="w-5 h-5 text-sky-500" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">
                {comp.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {comp.description}
              </p>
            </div>
          ))}

          {/* Formación Profesional Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-sky-50 via-white to-sky-100/70 border border-sky-200 space-y-3 flex flex-col justify-between shadow-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Perfil Profesional</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900">
                {profile.education.institution}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {profile.education.degree}. {profile.education.status}.
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-sky-800 border-t border-sky-200/60">
              <span>Lima, Perú</span>
              <span className="text-sky-700 font-bold">✓ Diseño Publicitario</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Programas Oficiales con Logotipos Vectoriales Profesionales */}
      <section className="pt-8 border-t border-sky-100 space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-sky-600" />
            <span>Herramientas Profesionales</span>
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
            Programas que Domina
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Suite oficial de Adobe, CapCut Pro y Canva Pro con logotipos y especificaciones profesionales de trabajo:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-sm transition-all space-y-3.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  {getSoftwareLogo(skill.id)}
                  <div>
                    <h3 className="font-bold text-base text-slate-900">{skill.name}</h3>
                    <span className="text-[11px] text-slate-500 font-medium">{skill.category}</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Action Banner with Celeste Call to Action */}
      <section className="pt-4">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-sky-950">
          <div className="space-y-1.5 text-center sm:text-left max-w-xl">
            <h3 className="font-bold text-2xl sm:text-3xl text-white">
              ¿Listo para ver los afiches publicitarios y videos?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Explora la galería con afiches comerciales de producto, publicidad exterior y edición audiovisual con el sello celeste.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('portafolio')}
              className="btn-primary px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-full shadow-md transition-all cursor-pointer"
            >
              Ver Galería de Afiches
            </button>
            <button
              onClick={() => onNavigate('audiovisual')}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 border border-slate-700 rounded-full transition-colors cursor-pointer"
            >
              Ver Sección de Video
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

import React from 'react';
import { PageId, ProfileData, ProjectItem, VideoProject } from '../../types/portfolio';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Layers,
  Sparkles,
  Clapperboard,
  ShieldCheck,
  TrendingUp,
  Palette,
  AlertTriangle,
  Flame,
  Check
} from 'lucide-react';
import { OfficialWhatsAppIcon } from '../WhatsAppFloatingButton';
import {
  PhotoshopLogo,
  IllustratorLogo,
  PremiereLogo,
  AfterEffectsLogo,
  CapCutLogo,
  CanvaLogo
} from '../SoftwareLogos';
import { KineticMarquee } from '../StudioBackground';
import { BeforeAfterSlider } from '../BeforeAfterSlider';
import { RealContextMockup } from '../RealContextMockup';
import { CommercialPacks } from '../CommercialPacks';
import { ArtDirectorNotes } from '../ArtDirectorNotes';
import { FloatingStudioElements, CreativeStudioSpecsBanner } from '../FloatingStudioElements';
import { FloatingStylus } from '../FloatingStylus';
import { CampaignMediaSwitcher } from '../CampaignMediaSwitcher';

interface HomePageProps {
  profile: ProfileData;
  featuredProjects: ProjectItem[];
  featuredVideo: VideoProject;
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectVideo: (video: VideoProject) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  profile,
  featuredProjects,
  featuredVideo,
  onNavigate,
  onSelectProject,
  onSelectVideo
}) => {
  const defaultWhatsAppMsg = encodeURIComponent(
    'Hola Khaterine, vi tu portafolio de diseño publicitario y me gustaría cotizar un proyecto para mi marca.'
  );
  const whatsappUrl = `https://wa.me/${profile.phone}?text=${defaultWhatsAppMsg}`;

  const videoWhatsAppMsg = encodeURIComponent(
    'Hola Khaterine, me interesa cotizar un Reel comercial para mi marca.'
  );
  const videoWhatsAppUrl = `https://wa.me/${profile.phone}?text=${videoWhatsAppMsg}`;

  const competencies = [
    {
      num: '01',
      title: 'Diseño Gráfico Publicitario',
      desc: 'Creación de afiches comerciales, flyers, banners, vallas de vía pública, anuncios de pauta y catálogos diseñados para promocionar productos y acelerar ventas.'
    },
    {
      num: '02',
      title: 'Ilustración y Composición Visual',
      desc: 'Dominio de colores, tipografías, formas y fotomontaje en Photoshop e Illustrator para comunicar mensajes con estética de impacto y alto nivel de acabado.'
    },
    {
      num: '03',
      title: 'Producción Audiovisual',
      desc: 'Edición de spots comerciales y videos verticales (9:16) para Reels y TikTok con cortes al beat, efectos de sonido y ganchos visuales que retienen a la audiencia.'
    },
    {
      num: '04',
      title: 'Creatividad y Estrategias Publicitarias',
      desc: 'Investigación de las necesidades del cliente, análisis del público objetivo y desarrollo de conceptos creativos claros, diferenciados y memorables.'
    },
    {
      num: '05',
      title: 'Dirección de Arte',
      desc: 'Organización, conceptualización y supervisión de la identidad visual completa de una campaña publicitaria, desde el primer boceto hasta el arte final.'
    }
  ];

  const tools = [
    {
      name: 'Adobe Photoshop',
      role: 'Edición fotográfica, retoque y fotomontajes de producto en alta resolución.',
      logo: <PhotoshopLogo className="w-10 h-10 shrink-0" />,
      tag: 'Avanzado · 300 DPI'
    },
    {
      name: 'Adobe Illustrator',
      role: 'Ilustración vectorial, diagramación de afiches, logotipos y gráficos publicitarios.',
      logo: <IllustratorLogo className="w-10 h-10 shrink-0" />,
      tag: 'Avanzado · Vectores'
    },
    {
      name: 'Adobe Premiere Pro',
      role: 'Montaje de videos publicitarios, ritmo de cortes y gradación de color Lumetri.',
      logo: <PremiereLogo className="w-10 h-10 shrink-0" />,
      tag: 'Avanzado · Spots'
    },
    {
      name: 'Adobe After Effects',
      role: 'Animación de logotipos, gráficos en movimiento (motion graphics) y rotulación cinética.',
      logo: <AfterEffectsLogo className="w-10 h-10 shrink-0" />,
      tag: 'Motion & VFX'
    },
    {
      name: 'CapCut Pro',
      role: 'Edición ágil de formato vertical 9:16 para TikTok e Instagram con subtítulos y dinamismo.',
      logo: <CapCutLogo className="w-10 h-10 shrink-0" />,
      tag: 'Reels & TikTok 9:16'
    },
    {
      name: 'Canva Pro',
      role: 'Diseños rápidos para redes sociales, carruseles comerciales y presentaciones ejecutivas.',
      logo: <CanvaLogo className="w-10 h-10 shrink-0" />,
      tag: 'Contenido Ágil'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20 relative">
      
      {/* 1. HERO SECTION: ADVERTISING DESIGN STUDIO WITH AMBIENT SKY GLOW */}
      <section className="relative pt-6 sm:pt-12 lg:pt-14 overflow-hidden">
        
        {/* Floating Creative Studio Elements & Parallax Badges (Item 1) */}
        <FloatingStudioElements />

        {/* Luminous Ambient Glow (Soft and Fresh) */}
        <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-sky-200/35 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-36 left-10 w-[360px] h-[360px] bg-cyan-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Direct Commercial Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#00a8ff] animate-pulse" />
                <span className="font-bold text-slate-900">Khaterine Costilla</span>
                <span className="text-slate-400">·</span>
                <span className="text-sky-700">Diseño Publicitario</span>
              </div>

              {/* Bold Headline (Item 3 Copywriting) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] text-balance">
                Tu producto es de calidad. <br />
                Tu publicidad debe <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-[#00a8ff]">vender como tal.</span>
              </h1>

              {/* Clear Presentation */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Soy <strong className="text-slate-900 font-bold">Khaterine Costilla</strong>. Diseño afiches comerciales de alto impacto, fotomontajes de producto en Photoshop y contenido audiovisual estratégico que despiertan el deseo inmediato del consumidor.
              </p>

              {/* Conversion Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-full shadow-[0_6px_20px_-2px_rgba(14,165,233,0.4)] hover:shadow-[0_8px_25px_-2px_rgba(14,165,233,0.5)] transition-all cursor-pointer"
                >
                  <OfficialWhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                  <span>Cotizar con Khaterine en WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-100" />
                </a>

                <button
                  onClick={() => onNavigate('portafolio')}
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-sky-50 border border-sky-200 rounded-full shadow-xs transition-all cursor-pointer"
                >
                  <span>Ver Afiches & Campañas</span>
                  <ArrowRight className="w-4 h-4 text-sky-600" />
                </button>
              </div>

              {/* Value Pillars List with Celeste Badges */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-sky-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>Afiches de Gran Formato</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>300 DPI CMYK & Digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>Reels Comerciales 9:16</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Key Visual Poster with Lighting Feedback */}
            <div className="lg:col-span-5 relative">
              
              {/* Floating Stylus de Precisión Publicitaria (Inspirado en la aguja/stylus 3D de VALKYRIE) */}
              <div className="hidden lg:block absolute -top-16 -left-32 z-30">
                <FloatingStylus />
              </div>

              <div
                onClick={() => onSelectProject(featuredProjects[0])}
                className="group relative rounded-2xl overflow-hidden bg-white border border-sky-200 shadow-[0_16px_40px_-12px_rgba(14,165,233,0.22)] hover:shadow-[0_24px_50px_-12px_rgba(14,165,233,0.32)] hover:border-sky-400 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden bg-slate-950 relative">
                  <img
                    src="images/ad_poster_energy_drink_1791693876265.jpg"
                    alt="Afiche publicitario comercial Frost Crush de alto impacto con salpicaduras en Photoshop"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  
                  {/* Subtle hover badge */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-4 py-2 bg-white rounded-full text-xs font-semibold text-slate-900 shadow-lg flex items-center gap-2">
                      <Eye className="w-4 h-4 text-sky-500" />
                      <span>Ver Ficha Técnica del Afiche</span>
                    </div>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="p-5 border-t border-sky-100 flex items-center justify-between bg-gradient-to-r from-white via-sky-50/40 to-white">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Frost Crush · «Unleash the Frost»
                    </h3>
                    <p className="text-xs text-slate-500">
                      Afiche Comercial · Fotomontaje & Salpicaduras en Photoshop
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-100/90 px-3 py-1 rounded-md border border-sky-300">
                    Key Visual
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. LIVE STUDIO SPECS BANNER (Item 1 depth) */}
      <CreativeStudioSpecsBanner />

      {/* 3. KINETIC TICKER MARQUEE (CONTINUOUS CREATIVE ENERGY) */}
      <KineticMarquee />

      {/* 4. ITEM 3: COPYWRITING PUBLICITARIO CON GARRA Y ACTITUD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-14 border border-sky-500/20 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-400/30">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Realidad Publicitaria Comercial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Un cliente tarda <span className="text-sky-400">0.8 segundos</span> en juzgar tu marca por su publicidad.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Si tu producto se promociona con una foto simple sobre fondo blanco o una plantilla genérica, el cliente asume que tu producto es común y corriente. La publicidad estratégica no es un adorno: es el motor que justifica tu precio y dispara tus ventas.
            </p>
          </div>

          {/* Comparative Cards: Amateur vs Khaterine's Direction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            
            {/* Bad / Amateur Approach */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-950/70 border border-rose-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  El Enfoque Común (El que no vende)
                </span>
                <span className="text-[11px] font-mono text-rose-300/80 bg-rose-500/10 px-2 py-0.5 rounded">
                  Pérdida de Dinero
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Fotos crudas de celular sin calibración de luz ni sombras de contacto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Tipografías genéricas que no se leen al pasar rápido en el feed o en la calle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Sin psicología del color: el cliente hace scroll y olvida la marca en 1 segundo.</span>
                </li>
              </ul>
            </div>

            {/* Khaterine's Professional Approach */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950/90 border border-sky-400/50 space-y-4 shadow-lg shadow-sky-500/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  Dirección de Arte de Khaterine Costilla
                </span>
                <span className="text-[11px] font-mono font-bold text-sky-300 bg-sky-500/20 px-2.5 py-0.5 rounded border border-sky-400/30">
                  Alto Retorno
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Fotomontaje multicapa en Photoshop con salpicaduras, texturas y halo celeste.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Diseño tipográfico con jerarquía comercial visible a 30 km/h en vía pública.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Archivos maestros en 300 DPI CMYK listos para imprenta o pauta digital sin sorpresas.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ITEM 4: ANOTACIONES DE DIRECCIÓN DE ARTE / STICKERS INTERACTIVOS */}
      <ArtDirectorNotes phone={profile.phone} />

      {/* 6. INTERACTIVE BEFORE & AFTER SLIDER (THE GREATEST IMPACT GENERATOR) */}
      <BeforeAfterSlider phone={profile.phone} />

      {/* 7. REAL-WORLD OUTDOOR CONTEXT SIMULATION (BILLBOARDS & MUPIS) CON MODO DÍA/NOCHE BACKLIGHT */}
      <RealContextMockup phone={profile.phone} />

      {/* 8. EL PROBADOR MULTICANAL 360° (UNA CAMPAÑA, TODOS LOS FORMATOS) */}
      <CampaignMediaSwitcher phone={profile.phone} />

      {/* 9. CLEAR COMMERCIAL PACKS (DECIDE AND QUOTE WITHOUT HESITATION) */}
      <CommercialPacks phone={profile.phone} />

      {/* 10. FEATURED ADVERTISING CAMPAIGNS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-sky-100">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Portafolio Seleccionado</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Campañas & Afiches Publicitarios Realizados
            </h2>
          </div>
          <button
            onClick={() => onNavigate('portafolio')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer"
          >
            <span>Ver galería completa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2-Column Clean Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.slice(0, 4).map((project) => {
            const projectWhatsAppMsg = encodeURIComponent(
              `Hola Khaterine, vi el afiche "${project.title}" en tu portafolio y quiero cotizar uno similar para mi producto.`
            );
            const projectWhatsAppUrl = `https://wa.me/${profile.phone}?text=${projectWhatsAppMsg}`;

            return (
              <article
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-400 transition-all duration-300 hover:shadow-[0_14px_35px_-8px_rgba(14,165,233,0.18)] flex flex-col"
              >
                <div
                  onClick={() => onSelectProject(project)}
                  className="aspect-[4/3] overflow-hidden bg-slate-100 relative cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-4 py-2 bg-white rounded-full text-xs font-semibold text-slate-900 shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-sky-500" />
                      <span>Ver Ficha Técnica Completa</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        {project.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 gap-3">
                    <span className="font-medium text-slate-600">{project.tools.join(' · ')}</span>
                    
                    <a
                      href={projectWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white border border-sky-200 hover:border-sky-500 font-semibold transition-all"
                    >
                      <OfficialWhatsAppIcon className="w-3.5 h-3.5 text-current shrink-0" />
                      <span>Cotizar similar</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </section>

      {/* 11. QUÉ SE HACE EN DISEÑO PUBLICITARIO (5 COMPETENCIAS CLAVE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Formación Profesional · {profile.education.institution}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            ¿Qué hace un Diseñador Publicitario?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Las 5 competencias clave que fundamentan el trabajo de Khaterine, garantizando que cada pieza gráfica no solo sea atractiva, sino estratégicamente efectiva:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp) => (
            <div
              key={comp.num}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-400 hover:shadow-[0_10px_25px_-5px_rgba(14,165,233,0.12)] transition-all space-y-3"
            >
              <div className="text-sm font-bold text-sky-600 bg-sky-50 inline-block px-2.5 py-1 rounded-md border border-sky-200/60">
                {comp.num}
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {comp.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {comp.desc}
              </p>
            </div>
          ))}

          {/* Special Specialty Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-sky-50 via-sky-50/70 to-cyan-50 border border-sky-300/80 space-y-3 flex flex-col justify-between shadow-2xs">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-sky-600" />
                <span>Diseño Publicitario</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Claridad, Frescura & Precisión
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Cada afiche y pieza gráfica está estructurada para captar la atención inmediata del público, priorizando la legibilidad, el impacto visual y los resultados comerciales.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900"
            >
              <span>Consultar disponibilidad con Khaterine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </section>

      {/* 12. HERRAMIENTAS Y SOFTWARE OFICIALES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Suite Profesional
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Programas y Herramientas que Domino
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Manejo de los programas estándar de la industria publicitaria para producir artes en alta definición y con entrega técnica impecable:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-sm transition-all flex items-start gap-4"
            >
              {t.logo}
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-sm text-slate-900">
                    {t.name}
                  </h3>
                  <span className="text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    {t.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 13. AUDIOVISUAL & REELS SPOTLIGHT WITH CELESTIAL AMBIENT GLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-sky-950">
          {/* Cyan ambient light inside dark section */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/60">
                <Clapperboard className="w-4 h-4 text-sky-400" />
                <span>Producción Audiovisual Comercial</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Videos publicitarios que enganchan en los primeros 3 segundos.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                El contenido en video es el rey de la pauta publicitaria actual. Edición dinámica para reels comerciales, sincronización de ritmo, ganchos visuales y corrección de color.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Formato vertical 9:16 optimizado para Instagram Reels & TikTok</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Cortes al compás musical con efectos de sonido de impacto (SFX)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Subtítulos dinámicos y rotulación tipográfica publicitaria</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={videoWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-full transition-all cursor-pointer shadow-[0_4px_16px_rgba(56,189,248,0.3)]"
                >
                  <OfficialWhatsAppIcon className="w-4 h-4 text-slate-950 shrink-0" />
                  <span>Cotizar Reel Comercial</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-900" />
                </a>

                <button
                  onClick={() => onNavigate('audiovisual')}
                  className="btn-primary inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-sky-500/20 rounded-full transition-all cursor-pointer"
                >
                  <span>Ver Galería de Videos</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                onClick={() => onSelectVideo(featuredVideo)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-sky-900/60 shadow-2xl cursor-pointer hover:border-sky-500 transition-colors"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 brightness-90 group-hover:brightness-100"
                  />
                </div>
                <div className="p-6 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      {featuredVideo.title}
                    </h3>
                    <p className="text-xs text-sky-300 font-medium">
                      {featuredVideo.format} · {featuredVideo.duration} · {featuredVideo.tools.join(', ')}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Ver</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 14. PROCESO DE TRABAJO CON CLIENTES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Metodología de Trabajo
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            ¿Cómo trabajamos tu próxima campaña?
          </h2>
          <p className="text-sm text-slate-600">
            Un flujo claro, estructurado y sin sorpresas para que recibas piezas listas para usar:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 transition-colors space-y-2">
            <div className="text-xs font-bold text-sky-600">Paso 01</div>
            <h3 className="font-bold text-slate-900 text-sm">Briefing & Objetivos</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Definimos qué quieres promocionar, cuál es tu público objetivo y en qué soportes se publicará.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 transition-colors space-y-2">
            <div className="text-xs font-bold text-sky-600">Paso 02</div>
            <h3 className="font-bold text-slate-900 text-sm">Concepto & Bocetos</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Planteamiento de ideas, composición visual, selección tipográfica y dirección de arte preliminar.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 transition-colors space-y-2">
            <div className="text-xs font-bold text-sky-600">Paso 03</div>
            <h3 className="font-bold text-slate-900 text-sm">Producción en Alta Definición</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Retoque en Photoshop, vectorización en Illustrator o edición en Premiere con los más altos estándares.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 transition-colors space-y-2">
            <div className="text-xs font-bold text-sky-600">Paso 04</div>
            <h3 className="font-bold text-slate-900 text-sm">Entrega de Artes Finales</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Archivos 300 DPI CMYK para imprenta y formatos optimizados para redes sociales y pauta publicitaria.
            </p>
          </div>
        </div>

      </section>

      {/* 15. HIGH-CONVERSION SALES BANNER (DIRECT WHATSAPP CONVERSION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white p-8 sm:p-12 lg:p-16 border border-sky-900/60 shadow-2xl relative overflow-hidden">
          {/* Ambient cyan reflection */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/80">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Diseño Publicitario · Disponible para proyectos comerciales</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              ¿Listo para que tu marca destaque con diseño publicitario profesional?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Hablemos directamente por WhatsApp. Coordinamos afiches para tu producto, piezas para redes sociales o producción audiovisual con atención rápida y personalizada de Khaterine.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-full shadow-[0_8px_25px_-3px_rgba(56,189,248,0.45)] transition-all font-bold"
              >
                <OfficialWhatsAppIcon className="w-5 h-5 text-slate-950 shrink-0" />
                <span>Escribir a WhatsApp · {profile.phoneDisplay}</span>
              </a>

              <button
                onClick={() => onNavigate('contacto')}
                className="btn-primary inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-sky-500/30 rounded-full transition-all cursor-pointer"
              >
                <span>Ver Canales de Contacto</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

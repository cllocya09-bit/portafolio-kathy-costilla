import React, { useState } from 'react';
import { ProfileData } from '../../types/portfolio';
import { MessageCircle, Linkedin, MapPin, Mail, Send, Copy, Check, Clock, ExternalLink } from 'lucide-react';

interface ContactPageProps {
  profile: ProfileData;
}

export const ContactPage: React.FC<ContactPageProps> = ({ profile }) => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [projectType, setProjectType] = useState('Diseño Gráfico / Publicitario');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const whatsappDirectUrl = `https://wa.me/${profile.phone}?text=Hola%20Khaterine,%20te%20escribo%20desde%20tu%20portafolio%20profesional.`;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `*Mensaje desde tu Portafolio Web*
*Nombre:* ${name || 'Interesado'}
*Contacto:* ${contactInfo || 'No especificado'}
*Interés:* ${projectType}
*Mensaje:* ${message}`;

    const url = `https://wa.me/${profile.phone}?text=${encodeURIComponent(formattedMessage)}`;
    window.location.href = url;
  };

  const handleCopyMessage = () => {
    const textToCopy = `Hola Khaterine Costilla,
Mi nombre es ${name || 'un cliente'} (${contactInfo}).
Te contacto respecto a un proyecto de ${projectType}:
${message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600">
          <span>Contacto Directo</span>
          <span aria-hidden="true">·</span>
          <span>Hablemos de tu Proyecto</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
          Conversemos y démosle forma a tus ideas.
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Estoy disponible para conversar sobre nuevos proyectos de diseño publicitario, identidad visual, creación de piezas para redes y edición de video.
        </p>
      </div>

      {/* Main Grid: Channels + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Direct Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <h2 className="font-display font-bold text-xl text-slate-900">
            Canales Directos
          </h2>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-colors space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">WhatsApp Oficial</h3>
                <p className="text-xs text-slate-500">Respuesta rápida y directa</p>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Chatear al {profile.phoneDisplay}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-colors space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Perfil en LinkedIn</h3>
                <p className="text-xs text-slate-500">Red profesional y conexiones</p>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Conectar en LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location & Availability Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs text-slate-600">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>{profile.location}</span>
            </div>
            <p className="leading-relaxed">
              Trabajo de forma remota para clientes y marcas de cualquier ciudad, así como coordinación presencial en Lima.
            </p>
            <div className="flex items-center gap-2 text-emerald-700 font-medium pt-1">
              <Clock className="w-4 h-4 shrink-0" />
              <span>{profile.experienceStatus}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Consultation Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="font-display font-bold text-xl text-slate-900">
                Escríbeme un Mensaje
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Llena el formulario y el mensaje se enviará directamente a mi WhatsApp o podrás copiarlo con un clic:
              </p>
            </div>

            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Tu Nombre o Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Valeria López"
                    className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Tu Teléfono o Correo *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="Ej. 987 654 321 / correo@ejemplo.com"
                    className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  ¿Qué tipo de trabajo necesitas?
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                >
                  <option value="Diseño Gráfico / Publicitario">
                    Diseño Gráfico / Publicitario (Afiches, Banners, Flyers)
                  </option>
                  <option value="Identidad Visual & Logotipos">
                    Identidad Visual & Logotipos
                  </option>
                  <option value="Edición de Video (Reels / TikToks)">
                    Edición de Video (Reels / TikToks)
                  </option>
                  <option value="Contenido para Redes Sociales">
                    Contenido para Redes Sociales (Carruseles, Stories)
                  </option>
                  <option value="Oportunidad Laboral / Prácticas">
                    Oportunidad Laboral / Prácticas pre-profesionales
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Cuéntame sobre tu proyecto o consulta *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe brevemente de qué trata tu marca, qué necesitas y en qué fecha aproximada..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="btn-primary-agency w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-cyan-500 rounded-full shadow-[0_4px_16px_-2px_rgba(14,165,233,0.4)] hover:shadow-[0_8px_24px_-2px_rgba(14,165,233,0.55)] transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:scale-98"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">¡Mensaje copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar texto</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
};

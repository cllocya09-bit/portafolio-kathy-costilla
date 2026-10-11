import React, { useState } from 'react';
import { ServiceItem } from '../../types/portfolio';
import { Check, ArrowRight, MessageCircle, Clock, Sparkles, Send } from 'lucide-react';

interface ServicesPageProps {
  services: ServiceItem[];
  phone: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ services, phone }) => {
  // Interactive fast quote estimator
  const [selectedService, setSelectedService] = useState<string>('diseno-publicitario');
  const [projectUrgency, setProjectUrgency] = useState<string>('estandar');
  const [projectDetails, setProjectDetails] = useState<string>('');

  const handleWhatsAppQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName =
      services.find((s) => s.id === selectedService)?.title || 'Servicio General';
    const urgencyLabel =
      projectUrgency === 'urgente'
        ? 'Entrega rápida (24-48 hrs)'
        : 'Plazo estándar normal';
    const message = `Hola Khaterine, vi tu portafolio y me gustaría cotizar:
*Servicio:* ${serviceName}
*Plazo preferido:* ${urgencyLabel}
${projectDetails ? `*Detalle:* ${projectDetails}` : ''}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const workflowSteps = [
    {
      number: '01',
      title: 'Brief & Objetivos',
      desc: 'Conversamos sobre tu marca, el público al que te diriges y el propósito específico de la pieza publicitaria o video.'
    },
    {
      number: '02',
      title: 'Conceptualización',
      desc: 'Defino el camino visual: referencias, paleta de colores, estructura del mensaje y ritmo de edición propuesto.'
    },
    {
      number: '03',
      title: 'Diseño o Montaje',
      desc: 'Producción de las piezas en Adobe Suite (Ps, Ai, Pr) o CapCut cuidando cada detalle estético y técnico.'
    },
    {
      number: '04',
      title: 'Ajustes & Entrega',
      desc: 'Revisión conjunta para afinar detalles y entrega de los archivos finales en los formatos requeridos listos para usar.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600">
          <span>Servicios Profesionales</span>
          <span aria-hidden="true">·</span>
          <span>Soluciones Creativas</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
          ¿En qué puedo ayudarte a potenciar tu marca?
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Propuestas a medida tanto para marcas y negocios que necesitan posicionarse visualmente como para creadores que buscan contenido audiovisual dinámico.
        </p>
      </div>

      {/* 3 Main Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-sky-600">
                0{index + 1}.
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-sky-700">
                  {service.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Qué incluye:
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="truncate max-w-[170px]">{service.toolsUsed.join(' · ')}</span>
              <a
                href={`https://wa.me/${phone}?text=Hola%20Kathy,%20me%20gustar%C3%ADa%20cotizar%20el%20servicio%20de%20${encodeURIComponent(
                  service.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 font-semibold hover:text-sky-700 shrink-0 inline-flex items-center gap-1"
              >
                <span>Cotizar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 4-Step Process Section */}
      <div className="pt-8 border-t border-slate-200 space-y-10">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-1">
            Metodología
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Cómo trabajamos paso a paso
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Un proceso claro y transparente desde la primera idea hasta la entrega definitiva.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3 relative"
            >
              <div className="font-display font-extrabold text-3xl text-sky-200 font-mono">
                {step.number}
              </div>
              <h3 className="font-semibold text-base text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Quick Quote Builder */}
      <div className="p-8 sm:p-10 rounded-2xl bg-sky-50 border border-sky-100">
        <div className="max-w-2xl space-y-3 mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Cotización Directa
          </div>
          <h2 className="font-display font-bold text-2xl text-slate-900">
            ¿Quieres un presupuesto rápido para tu proyecto?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Elige los detalles y envíame un mensaje directo por WhatsApp sin compromiso:
          </p>
        </div>

        <form onSubmit={handleWhatsAppQuote} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Tipo de Servicio
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Tiempo Estimado
            </label>
            <select
              value={projectUrgency}
              onChange={(e) => setProjectUrgency(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="estandar">Plazo normal / estándar</option>
              <option value="urgente">Urgente (entrega rápida)</option>
            </select>
          </div>

          <div className="md:col-span-1 flex items-end">
            <button
              type="submit"
              className="btn-primary-agency w-full px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-cyan-500 rounded-full shadow-[0_4px_16px_-2px_rgba(14,165,233,0.4)] hover:shadow-[0_8px_24px_-2px_rgba(14,165,233,0.55)] transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Enviar por WhatsApp</span>
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

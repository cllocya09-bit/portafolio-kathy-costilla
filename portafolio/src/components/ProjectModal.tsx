import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, Check, Calendar, User, Wrench, Palette, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  phone: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, phone }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const whatsappInquiryUrl = `https://wa.me/${phone}?text=Hola%20Khaterine,%20vi%20el%20afiche%20de%20tu%20portafolio%20("${encodeURIComponent(
    project.title
  )}")%20y%20quiero%20cotizar%20uno%20similar%20para%20mi%20producto.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-sky-100 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-sky-700">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Cerrar detalle"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content scroll area */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Header info */}
          <div className="space-y-3">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </div>

          {/* Main Visual showcase */}
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[500px]"
              onError={(e) => {
                // Zero-broken-image fallback
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Quick metadata strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-sky-50/50 border border-sky-100 text-xs">
            <div>
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <User className="w-3.5 h-3.5 text-sky-600" />
                <span>Cliente / Contexto</span>
              </div>
              <div className="font-medium text-slate-800">{project.client}</div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                <span>Periodo</span>
              </div>
              <div className="font-medium text-slate-800">{project.year}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Wrench className="w-3.5 h-3.5 text-sky-600" />
                <span>Software Empleado</span>
              </div>
              <div className="font-medium text-slate-800">{project.tools.join(' · ')}</div>
            </div>
          </div>

          {/* Case study body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                01. Objetivo Estratégico
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-100">
                {project.objective}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                02. Solución Visual
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-100">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables & Palette */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Entregables Clave
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-sky-600" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Paleta Cromática
                </h3>
              </div>
              <div className="flex items-center gap-3 pt-1">
                {project.palette.map((color, idx) => (
                  <div key={idx} className="group relative flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-lg shadow-sm border border-slate-200 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[10px] text-slate-500 mt-1 font-mono uppercase">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/50">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Presiona ESC para salir
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Cerrar
            </button>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-agency inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>Consultar por WhatsApp (+51 970 181 127)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

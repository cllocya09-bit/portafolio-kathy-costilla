import React, { useState } from 'react';
import { ProjectItem } from '../../types/portfolio';
import { Eye, Search, Sparkles, ArrowRight } from 'lucide-react';

interface PortfolioPageProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  projects,
  onSelectProject
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todos los Trabajos' },
    { id: 'Publicidad', label: 'Afiches & Publicidad Exterior' },
    { id: 'Identidad', label: 'Campañas de Producto & Packaging' },
    { id: 'Redes Sociales', label: 'Creativos & Banners Digitales' }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'all' || project.category === activeCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
          <span>Diseño Publicitario</span>
        </div>
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
          Afiches comerciales y campañas publicitarias de <span className="text-sky-500 font-extrabold">alto impacto</span>.
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Explora la selección de afiches publicitarios para vía pública, fotomontajes de producto en Photoshop, composiciones vectoriales en Illustrator y campañas comerciales desarrolladas con una paleta clara y vendedora.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        {/* Interactive Segmented Tabs with Celeste Signature */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/90 rounded-full border border-sky-100 max-w-full overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-sky-500 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-sky-700 hover:bg-white/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-sky-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por programa o campaña..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-full border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-800 shadow-2xs"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white border border-sky-100 space-y-3">
          <p className="text-slate-600 text-sm">
            No se encontraron afiches con el criterio seleccionado.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="text-xs font-bold text-sky-600 hover:underline cursor-pointer"
          >
            Restablecer filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-400 transition-all duration-300 hover:shadow-[0_16px_36px_-8px_rgba(14,165,233,0.2)] cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-950 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 bg-white rounded-full text-xs font-semibold text-slate-900 shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-sky-500" />
                    <span>Ver Afiche Publicitario</span>
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
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-600">{project.tools.join(' · ')}</span>
                  <span className="text-sky-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Abrir detalle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

    </div>
  );
};

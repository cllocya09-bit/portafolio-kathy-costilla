import React, { useState } from 'react';
import { ProfileData, ProjectItem } from '../types/portfolio';
import { X, Copy, Check, Download, Code, Sliders, FileText, CheckCircle2 } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onUpdateProfile: (updated: Partial<ProfileData>) => void;
  projects: ProjectItem[];
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  projects
}) => {
  const [activeTab, setActiveTab] = useState<'customizer' | 'files'>('customizer');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string>('index.html');

  // Form states
  const [phone, setPhone] = useState(profile.phone);
  const [email, setEmail] = useState(profile.email);
  const [tagline, setTagline] = useState(profile.tagline);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      phone,
      phoneDisplay: phone.startsWith('51') ? `+51 ${phone.slice(2, 5)} ${phone.slice(5, 8)} ${phone.slice(8)}` : phone,
      email,
      tagline
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  // Generate clean standalone HTML templates matching user's multi-page specification
  const staticFiles: Record<string, string> = {
    'index.html': `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profile.fullName} | Diseñadora Publicitaria & Creadora Audiovisual</title>
  <link rel="stylesheet" href="css/estilos.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body>
  <!-- ENCABEZADO Y MENÚ -->
  <header class="site-header">
    <div class="container nav-container">
      <a href="index.html" class="brand">
        <span class="brand-name">${profile.shortName}</span>
        <span class="brand-badge">Portafolio</span>
      </a>
      <nav class="nav-links">
        <a href="index.html" class="active">Inicio</a>
        <a href="sobre-mi.html">Sobre Kathy</a>
        <a href="portafolio.html">Diseño</a>
        <a href="audiovisual.html">Video</a>
        <a href="servicios.html">Servicios</a>
        <a href="contacto.html">Contacto</a>
      </nav>
      <a href="https://wa.me/${profile.phone}" target="_blank" class="btn btn-primary">WhatsApp</a>
    </div>
  </header>

  <!-- HERO SECTION -->
  <main>
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="kicker">Diseño Publicitario & Narrativa Audiovisual</span>
          <h1 class="hero-title">${profile.fullName}</h1>
          <p class="hero-desc">${profile.tagline}</p>
          <div class="hero-actions">
            <a href="portafolio.html" class="btn btn-primary">Ver Portafolio</a>
            <a href="audiovisual.html" class="btn btn-outline">Sección Audiovisual</a>
          </div>
        </div>
        <div class="hero-media">
          <img src="assets/img/hero.jpg" alt="Estudio creativo de Kathy Costilla">
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© ${new Date().getFullYear()} ${profile.fullName} · Estudiante en ${profile.education.institution}</p>
    </div>
  </footer>
</body>
</html>`,

    'sobre-mi.html': `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sobre Mí | ${profile.fullName}</title>
  <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
  <header class="site-header">
    <div class="container nav-container">
      <a href="index.html" class="brand">${profile.shortName}</a>
      <nav class="nav-links">
        <a href="index.html">Inicio</a>
        <a href="sobre-mi.html" class="active">Sobre Kathy</a>
        <a href="portafolio.html">Diseño</a>
        <a href="audiovisual.html">Video</a>
        <a href="servicios.html">Servicios</a>
        <a href="contacto.html">Contacto</a>
      </nav>
      <a href="https://wa.me/${profile.phone}" target="_blank" class="btn btn-primary">WhatsApp</a>
    </div>
  </header>

  <main class="container section">
    <h1>Sobre Kathy Katherine Costilla Altamirano</h1>
    <p class="lead">${profile.bioSummary}</p>
    
    <div class="card">
      <h3>Formación Académica</h3>
      <p><strong>${profile.education.institution}</strong></p>
      <p>${profile.education.degree} (${profile.education.status})</p>
    </div>

    <div class="card">
      <h3>Software que Domina</h3>
      <p>Photoshop · Illustrator · Premiere Pro · CapCut · After Effects · Canva</p>
    </div>
  </main>
</body>
</html>`,

    'css/estilos.css': `/* PALETA CELESTE & ESTILOS EDITORIALES PARA KATHY COSTILLA */
:root {
  --color-primary: #0284c7;
  --color-primary-light: #38bdf8;
  --color-primary-soft: #f0f9ff;
  --color-dark: #0f172a;
  --color-gray: #475569;
  --color-light: #f8fafc;
  --color-white: #ffffff;
  --font-display: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--font-body); color: var(--color-dark); background: var(--color-light); line-height: 1.6; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.site-header { background: #ffffff; border-bottom: 1px solid #e0f2fe; position: sticky; top: 0; z-index: 100; }
.nav-container { display: flex; justify-content: space-between; align-items: center; height: 76px; }
.brand { text-decoration: none; color: var(--color-dark); font-family: var(--font-display); font-size: 1.35rem; font-weight: 700; }
.brand-badge { font-size: 0.75rem; color: var(--color-primary); margin-left: 0.4rem; text-transform: uppercase; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a { text-decoration: none; color: var(--color-gray); font-size: 0.95rem; font-weight: 500; }
.nav-links a.active, .nav-links a:hover { color: var(--color-primary); }

.btn { display: inline-block; padding: 0.65rem 1.4rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; }
.btn-primary { background: var(--color-primary); color: #fff; }
.btn-primary:hover { background: #0369a1; }
.btn-outline { border: 1px solid #bae6fd; color: var(--color-primary); }

.hero-section { padding: 5rem 0; }
.hero-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: center; }
.kicker { font-size: 0.85rem; text-transform: uppercase; color: var(--color-primary); letter-spacing: 0.08em; font-weight: 600; }
.hero-title { font-family: var(--font-display); font-size: 3rem; line-height: 1.1; margin: 0.8rem 0; }
.hero-desc { color: var(--color-gray); font-size: 1.15rem; margin-bottom: 1.5rem; }
.hero-actions { display: flex; gap: 1rem; }
.hero-media img { width: 100%; border-radius: 16px; border: 1px solid #e0f2fe; }

@media (max-width: 768px) {
  .hero-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
}`
  };

  const handleCopyCode = (filename: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedFile(filename);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  const handleDownloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-sky-100 overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-sky-50/50">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Centro de Control & Archivos HTML
            </h3>
            <p className="text-xs text-slate-500">
              Personaliza los datos de Kathy o descarga el código fuente estático multipágina
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-200 px-6 bg-slate-50/60">
          <button
            onClick={() => setActiveTab('customizer')}
            className={`py-3 px-4 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'customizer'
                ? 'border-sky-600 text-sky-700 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Actualizar Datos en Vivo</span>
          </button>
          <button
            onClick={() => setActiveTab('files')}
            className={`py-3 px-4 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'files'
                ? 'border-sky-600 text-sky-700 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Archivos HTML / CSS para Descarga</span>
          </button>
        </div>

        {/* Body content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {activeTab === 'customizer' ? (
            <form onSubmit={handleSaveProfile} className="space-y-6 max-w-xl mx-auto">
              <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-slate-700 space-y-1">
                <div className="font-semibold text-sky-900">Configuración rápida:</div>
                <p>
                  Como mencionaste que el correo está pendiente y los proyectos se están reuniendo, aquí puedes actualizar los datos en cualquier momento para ver reflejado el cambio instantáneamente en la web.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Número de WhatsApp (con código de país)
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="51970181127"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Actualmente: +51 970 181 127
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Correo Electrónico (opcional / cuando esté listo)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="kathy.costilla@ejemplo.com"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Frase Creativa / Eslogan de Portada
                  </label>
                  <textarea
                    rows={3}
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div className="font-semibold text-slate-800">Datos verificados en el portafolio:</div>
                  <ul className="space-y-1 text-slate-600">
                    <li>· <strong>Nombre:</strong> {profile.fullName}</li>
                    <li>· <strong>Formación:</strong> {profile.education.institution}</li>
                    <li>· <strong>LinkedIn:</strong> {profile.linkedinUrl}</li>
                    <li>· <strong>Software:</strong> Photoshop, Illustrator, Premiere, CapCut, After Effects, Canva</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Guardar cambios en la web
                </button>
                {savedSuccess && (
                  <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>¡Datos actualizados con éxito!</span>
                  </div>
                )}
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  Selecciona un archivo para ver su código fuente estático o descargarlo:
                </div>
              </div>

              {/* File list pills */}
              <div className="flex flex-wrap gap-2">
                {Object.keys(staticFiles).map((filename) => (
                  <button
                    key={filename}
                    onClick={() => setSelectedFile(filename)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                      selectedFile === filename
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{filename}</span>
                  </button>
                ))}
              </div>

              {/* Code viewer */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 text-slate-200">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs font-mono">
                  <span>{selectedFile}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyCode(selectedFile, staticFiles[selectedFile])}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedFile === selectedFile ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => handleDownloadFile(selectedFile, staticFiles[selectedFile])}
                      className="px-2.5 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar</span>
                    </button>
                  </div>
                </div>
                <pre className="p-4 text-xs font-mono overflow-x-auto max-h-[380px] leading-relaxed text-sky-100/90">
                  <code>{staticFiles[selectedFile]}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
};

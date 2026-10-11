import { ProfileData, ProjectItem, VideoProject, ServiceItem, SoftwareSkill } from '../types/portfolio';

export const initialProfile: ProfileData = {
  fullName: 'Khaterine Costilla Altamirano',
  shortName: 'Khaterine Costilla',
  title: 'Diseño Publicitario',
  tagline: 'Creando afiches de alto impacto visual, campañas comerciales y piezas audiovisuales con ritmo que potencian marcas.',
  bioSummary: 'Especialista en diseño publicitario y producción comercial.',
  fullBio: [
    'Hola, soy Khaterine Costilla Altamirano. Me dedico al diseño publicitario y a la creación de contenido audiovisual estratégico para marcas, productos y negocios comerciales.',
    'Cuento con formación especializada en Diseño Publicitario (IESTP María Rosario Aráoz Pinto), abarcando el ciclo completo de una campaña: desde la investigación de mercado, target y conceptualización de ideas, hasta la producción final de afiches de vía pública, anuncios digitales, empaques y videos comerciales.',
    'Domino la suite profesional de Adobe (Photoshop, Illustrator, Premiere Pro, After Effects) junto a herramientas de producción ágil como CapCut Pro y Canva Pro para crear piezas con ritmo, estética cuidada y efectividad comercial comprobada.'
  ],
  education: {
    institution: 'IESTP María Rosario Aráoz Pinto',
    degree: 'Carrera Profesional de Diseño Publicitario',
    status: 'Especialidad en Publicidad Comercial & Producción Audiovisual',
    focus: 'Diseño gráfico publicitario, composición visual, producción audiovisual publicitaria, estrategia creativa y dirección de arte.'
  },
  experienceStatus: 'Disponible para proyectos freelance de publicidad, campañas de marca y producción audiovisual.',
  phone: '51970181127',
  phoneDisplay: '+51 970 181 127',
  email: 'contacto@khaterinecostilla.design',
  linkedinUrl: 'https://www.linkedin.com/in/kathy-katherine-costilla-altamirano-9869711b8/',
  location: 'Lima, Perú',
  avatarUrl: 'images/creative_portrait_1791686281113.jpg'
};

export const softwareSkills: SoftwareSkill[] = [
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'Diseño',
    icon: 'Ps',
    level: 'Avanzado',
    description: 'Edición fotográfica profesional, retoque y composición de imágenes, fotomontajes publicitarios de productos con efectos de salpicadura y luces, preparación de artes finales para imprenta y pauta.'
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    category: 'Diseño',
    icon: 'Ai',
    level: 'Avanzado',
    description: 'Ilustraciones vectoriales, logotipos, afiches publicitarios vectoriales, tipografía publicitaria, diagramación editorial, empaques comerciales y gráficos escalables sin pérdida de resolución.'
  },
  {
    id: 'premiere',
    name: 'Adobe Premiere Pro',
    category: 'Audiovisual',
    icon: 'Pr',
    level: 'Avanzado',
    description: 'Edición de videos publicitarios, montaje comercial, sincronización de audio milimétrica al compás, curvas de velocidad (speed ramps), transiciones y gradación de color Lumetri en tonos celestes.'
  },
  {
    id: 'aftereffects',
    name: 'Adobe After Effects',
    category: 'Audiovisual',
    icon: 'Ae',
    level: 'Intermedio - Avanzado',
    description: 'Animación de logotipos corporativos, efectos visuales (VFX) comerciales, motion graphics para redes sociales, rotulación cinética y transiciones publicitarias de alto impacto.'
  },
  {
    id: 'capcut',
    name: 'CapCut Pro',
    category: 'Audiovisual',
    icon: 'Cc',
    level: 'Avanzado',
    description: 'Edición dinámica en formato vertical 9:16 para Reels, TikToks y YouTube Shorts publicitarios, ganchos visuales de retención en los primeros segundos y subtítulos automáticos estilizados.'
  },
  {
    id: 'canva',
    name: 'Canva Pro',
    category: 'Plantillas',
    icon: 'Cv',
    level: 'Avanzado',
    description: 'Diseños rápidos y eficientes para redes sociales, carruseles de valor, presentaciones comerciales de campaña, kits de marca y plantillas editables entregables a clientes.'
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: 'frost-crush-ad',
    title: 'Frost Crush — Afiche Publicitario de Bebida Energética',
    category: 'Publicidad',
    categoryLabel: 'Afiche Publicitario & Key Visual',
    summary: 'Afiche comercial publicitario de alto impacto para bebida energizante con fotomontaje de producto en Adobe Photoshop, salpicaduras de agua congelada, cristales de hielo y titular display "UNLEASH THE FROST".',
    client: 'Frost Crush Energy Drink · Campaña Comercial',
    year: '2025',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    image: 'images/ad_poster_energy_drink_1791693876265.jpg',
    objective: 'Diseñar un afiche publicitario para vía pública y redes sociales que comunique frescura extrema, energía revitalizante y motive a la compra inmediata del público joven y deportista.',
    solution: 'Fotomontaje multinivel en Photoshop con efectos de salpicaduras hiperrealistas, relámpagos lumínicos celestes, textura de escarcha en la lata y tipografía display bold "UNLEASH THE FROST: STAY SHARP. GO BOLD. THE ULTIMATE ICY KICK."',
    deliverables: [
      'Afiche publicitario impreso 70x100 cm en alta resolución (CMYK 300 DPI)',
      'Arte publicitario adaptado para pantallas digitales LED',
      'Creativos para historias de Instagram y Facebook Ads',
      'Mockup fotomontado de producto en punto de venta'
    ],
    palette: ['#00e5ff', '#38bdf8', '#0284c7', '#0f172a', '#ffffff'],
    featured: true
  },
  {
    id: 'air-kinetic-ad',
    title: 'Air Kinetic — Campaña Publicitaria de Sneakers Urbanos',
    category: 'Publicidad',
    categoryLabel: 'Publicidad Exterior & Cartel de Campaña',
    summary: 'Póster publicitario de calzado deportivo con composición diagonal dinámica, estelas de luz cian en movimiento, titular contundente "AIR KINETIC: DEFY GRAVITY" y precio promocional.',
    client: 'Kinetic Sportswear · Colección Urbana',
    year: '2025',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    image: 'images/ad_billboard_sneaker_1791693889498.jpg',
    objective: 'Promocionar el lanzamiento de la línea de calzado urbano destacando ligereza, velocidad y tecnología de amortiguación.',
    solution: 'Dirección de arte con punto de fuga en perspectiva nocturna urbana, destellos eléctricos en celeste y cian, jerarquía tipográfica con precio comercial destacado y botón de compra web.',
    deliverables: [
      'Póster publicitario comercial para vitrinas y tiendas retail',
      'Formatos horizontales para banners web e e-commerce',
      'Anuncio para pauta publicitaria en TikTok y Meta Ads'
    ],
    palette: ['#00e5ff', '#38bdf8', '#0284c7', '#0b1120', '#ff6b35'],
    featured: true
  },
  {
    id: 'volt-billboard-mupi',
    title: 'Volt Energy — Publicidad Exterior en Mupi Urbano',
    category: 'Publicidad',
    categoryLabel: 'Publicidad Exterior (OOH) & Vía Pública',
    summary: 'Anuncio publicitario para panel iluminado de paradero urbano con contraste eléctrico en celeste y naranja, titular persuasivo "IGNITE YOUR NIGHT. ZERO SUGAR."',
    client: 'Volt Energy Co. · Publicidad Exterior',
    year: '2024 - 2025',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    image: 'images/ad_billboard_city_mockup_1791693917414.jpg',
    objective: 'Captar la atención de transeúntes en avenidas principales y zonas comerciales nocturnas mediante un anuncio con alta luminosidad y mensaje instantáneo.',
    solution: 'Key visual con lata iluminada al centro, ícono de relámpago con alto contraste de color complementario y tipografía limpia legible a más de 10 metros de distancia.',
    deliverables: [
      'Arte final para Mupi publicitario 120x175 cm',
      'Mockup fotográfico realista en entorno de ciudad real',
      'Guía técnica de artes finales para imprenta en lona translúcida'
    ],
    palette: ['#38bdf8', '#0284c7', '#f97316', '#0f172a', '#ffffff'],
    featured: true
  },
  {
    id: 'aura-hydrate-campaign',
    title: 'Aura Hydrate — Campaña Publicitaria de Cosmética Facial',
    category: 'Identidad',
    categoryLabel: 'Publicidad Digital & Flyer Comercial',
    summary: 'Flyer publicitario y creativos para cosmética facial de lujo, frasco en vidrio esmerilado con gotas de agua, modelo comercial y desglose de beneficios "72H MOISTURE LOCK".',
    client: 'Aura Skincare · Línea Hidratante',
    year: '2024 - 2025',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva Pro'],
    image: 'images/ad_social_campaign_skincare_1791693902858.jpg',
    objective: 'Transmitir pureza clínica, frescura y efectividad dermatológica mediante una composición comercial elegante orientada al público femenino.',
    solution: 'Fotomontaje de producto con textura acuática, tipografía serif editorial combinada con sans-serif publicitaria limpia y paleta de celestes suaves con blanco perla.',
    deliverables: [
      'Flyer publicitario impreso y digital',
      'Pack de creativos para pauta en Instagram y Pinterest Ads',
      'Etiquetas de envases y packaging secundario'
    ],
    palette: ['#7dd3fc', '#bae6fd', '#0284c7', '#f0f9ff', '#ffffff'],
    featured: true
  },
  {
    id: 'aquacharge-process',
    title: 'AquaCharge — Proceso: Del Boceto al Afiche Publicitario',
    category: 'Publicidad',
    categoryLabel: 'Estrategia Creativa & Proceso de Campaña',
    summary: 'Demostración del proceso publicitario completo: desde el bocetado de composición y storyboard a mano alzada hasta el afiche comercial final con retoque en Photoshop.',
    client: 'AquaCharge Sports Drink',
    year: '2024 - 2025',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    image: 'images/sketch_to_advertising_ad_1791692186552.jpg',
    objective: 'Documentar el método de trabajo profesional que garantiza que cada pieza publicitaria responda a una sólida estrategia de comunicación visual.',
    solution: 'Bocetado de rejilla visual, selección de ángulos de producto, fotomontaje de texturas líquidas y aplicación de titulares con jerarquía publicitaria.',
    deliverables: [
      'Storyboard y bocetos de concepto preliminares',
      'Afiche comercial publicitario final en alta resolución',
      'Manual de aplicación gráfica para pauta en redes'
    ],
    palette: ['#0284c7', '#38bdf8', '#00e5ff', '#0f172a', '#ffffff'],
    featured: true
  },
  {
    id: 'zing-social-pack',
    title: 'Zing Soda & Fashion — Creativos Publicitarios & Banners',
    category: 'Redes Sociales',
    categoryLabel: 'Banners Comerciales & Social Ads',
    summary: 'Sistema integral de banners publicitarios, anuncios para historias y piezas promocionales con diseño vibrante para aumentar la conversión de ventas.',
    client: 'Marcas Comerciales',
    year: '2024',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva Pro'],
    image: 'images/advertising_campaign_studio_1791692160257.jpg',
    objective: 'Diseñar anuncios publicitarios digitales con alto porcentaje de clics (CTR) para pauta pagada en Facebook e Instagram.',
    solution: 'Composiciones con fondos contrastantes en celeste, llamadas a la acción claras y adaptación a múltiples formatos de pantalla.',
    deliverables: [
      'Banners para pauta publicitaria en 1080x1080 y 1080x1920',
      'Plantillas comerciales editables en Canva para el cliente',
      'Guía de estilos para publicaciones de temporada'
    ],
    palette: ['#0284c7', '#38bdf8', '#e0f2fe', '#0f172a', '#ffffff'],
    featured: false
  }
];

export const initialVideoProjects: VideoProject[] = [
  {
    id: 'video-reel-urban-vibes',
    title: 'Spot Comercial en Formato 9:16 — Moda Urbana & Streetstyle',
    format: '9:16 Vertical (Reel/TikTok)',
    category: 'Reels',
    duration: '0:24 seg',
    tools: ['CapCut Pro', 'Adobe Premiere Pro'],
    thumbnail: 'images/reels_fashion_ad_1791686938416.jpg',
    objective: 'Crear un video publicitario de alto ritmo para captar la atención de consumidores en los primeros 2 segundos y promocionar una colección de moda juvenil.',
    editingPace: 'Cortes rápidos al compás de la música (128 BPM), transiciones dinámicas, textos flotantes cinemáticos y gradación de color en tonos celestes.',
    description: 'Producción audiovisual publicitaria vertical diseñada para Instagram Reels, TikTok y YouTube Shorts con gancho visual de entrada y llamada a la acción comercial.',
    audioTrack: 'Urban Hip-Hop / 128 BPM Commercial Beat'
  },
  {
    id: 'spot-promocional-narrativo',
    title: 'Spot Publicitario Comercial — Montaje Narrativo & Color',
    format: '16:9 Horizontal (Spot/Promo)',
    category: 'Publicitario',
    duration: '1:15 min',
    tools: ['Adobe Premiere Pro', 'Adobe After Effects'],
    thumbnail: 'images/ad_billboard_city_mockup_1791693917414.jpg',
    objective: 'Narrar los beneficios de un producto con tratamiento de color publicitario profesional, ritmo envolvente y diseño de sonido.',
    editingPace: 'Montaje cinematográfico con curvas de velocidad (speed ramps), etalonaje en tonos fríos/celestes y rotulación publicitaria en movimiento.',
    description: 'Postproducción audiovisual completa con sincronización de tomas, estabilización, corrección de color y mezcla de audio.',
    audioTrack: 'Cinematic Ambient Commercial Soundtrack'
  },
  {
    id: 'motion-logo-identidad',
    title: 'Animación de Logotipo Publicitario & Cortinillas de Marca',
    format: 'Motion Graphics',
    category: 'Motion',
    duration: '0:12 seg',
    tools: ['Adobe After Effects', 'Adobe Illustrator'],
    thumbnail: 'images/brand_advertising_packaging_1791692177726.jpg',
    objective: 'Dar dinamismo a la identidad corporativa mediante animación de vectores, revelado de logotipo y efectos de luz.',
    editingPace: 'Curvas de velocidad suaves (Easy Ease), destello de luz celeste y remate sonoro de marca.',
    description: 'Activo audiovisual publicitario utilizado como intro y outro en videos comerciales y presentaciones de campaña.',
    audioTrack: 'Brand Sound Identity / Chime'
  },
  {
    id: 'pack-videos-educativos',
    title: 'Micro-Videos Publicitarios para Redes & Promociones',
    format: '9:16 Vertical (Reel/TikTok)',
    category: 'Contenido Redes',
    duration: '0:35 seg cada uno',
    tools: ['CapCut Pro', 'Canva Pro'],
    thumbnail: 'images/ad_social_campaign_skincare_1791693902858.jpg',
    objective: 'Presentar ofertas comerciales y mensajes clave de producto en cápsulas cortas de fácil digestión para el usuario móvil.',
    editingPace: 'Transiciones ágiles, subtítulos destacados en celeste y llamadas a la acción al final del video.',
    description: 'Serie de cápsulas audiovisuales optimizadas para pauta publicitaria en redes sociales.',
    audioTrack: 'Upbeat Energy Commercial Track'
  }
];

export const advertisingCompetencies = [
  {
    number: '01',
    title: 'Diseño Gráfico Publicitario',
    description: 'Creación de afiches, flyers, banners, anuncios comerciales, catálogos y piezas gráficas para promocionar productos, servicios o empresas con alto impacto visual.'
  },
  {
    number: '02',
    title: 'Ilustración y Composición Visual',
    description: 'Manejo experto de colores, tipografías, formas e ilustraciones para comunicar ideas publicitarias persuasivas que atraigan y retengan la mirada del consumidor.'
  },
  {
    number: '03',
    title: 'Producción Audiovisual',
    description: 'Creación y montaje de contenidos publicitarios en video (spots comerciales, reels de retención y micro-videos dinámicos) según las necesidades de la marca.'
  },
  {
    number: '04',
    title: 'Creatividad y Estrategias Publicitarias',
    description: 'Investigación del público objetivo, detección de insights y desarrollo de conceptos creativos comerciales para transmitir un mensaje eficaz que venda.'
  },
  {
    number: '05',
    title: 'Dirección de Arte',
    description: 'Organización y supervisión integral de los elementos visuales de una campaña, desde la idea inicial y storyboard hasta el arte final listo para publicación.'
  }
];

export const servicesList: ServiceItem[] = [
  {
    id: 'diseno-publicitario',
    title: 'Diseño Gráfico Publicitario & Afiches',
    subtitle: 'Piezas comerciales estratégicas que venden y captan la mirada',
    description: 'Creación de afiches publicitarios para vía pública, anuncios comerciales, banners para pauta digital, folletos y piezas gráficas de alto rendimiento.',
    deliverables: [
      'Afiches publicitarios de gran impacto (vía pública, mupis, vitrinas)',
      'Banners y anuncios para pauta digital (Instagram & Facebook Ads)',
      'Diseño de identidad visual de marca y papelería corporativa',
      'Diseño de empaques comerciales (packaging) y etiquetas',
      'Artes finales listos para imprenta en alta resolución (CMYK / 300 DPI)'
    ],
    toolsUsed: ['Adobe Photoshop', 'Adobe Illustrator']
  },
  {
    id: 'edicion-video',
    title: 'Producción Audiovisual Publicitaria & Reels',
    subtitle: 'Videos con ritmo, ganchos de retención y estética comercial cuidada',
    description: 'Edición y postproducción de videos comerciales y reels verticales de alto dinamismo para marcas, productos y creadores de contenido.',
    deliverables: [
      'Edición de Reels, TikToks y Shorts publicitarios en formato 9:16',
      'Spots comerciales y videos promocionales en formato 16:9',
      'Subtitulado cinemático animado con resaltadores en color',
      'Corrección de color Lumetri profesional y gradación tonal en celestes',
      'Sincronización rítmica con efectos sonoros (SFX) y música comercial'
    ],
    toolsUsed: ['Adobe Premiere Pro', 'CapCut Pro', 'Adobe After Effects']
  },
  {
    id: 'contenido-redes',
    title: 'Estrategia Visual & Creativos para Redes Sociales',
    subtitle: 'Consistencia gráfica y anuncios publicitarios que generan interacción',
    description: 'Diseño de carruseles informativos, historias interactivas y kits de plantillas editables que elevan la presencia de tu marca.',
    deliverables: [
      'Carruseles promocionales de alto impacto y guardado',
      'Gráficos para promociones, ofertas de temporada y lanzamientos',
      'Kits de plantillas editables en Canva Pro para el cliente',
      'Banners publicitarios para perfiles corporativos',
      'Guía visual de color y tipografía para publicaciones'
    ],
    toolsUsed: ['Canva Pro', 'Adobe Illustrator', 'Adobe Photoshop']
  }
];

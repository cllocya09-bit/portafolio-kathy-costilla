export type PageId = 'inicio' | 'sobre-mi' | 'portafolio' | 'audiovisual' | 'servicios' | 'contacto';

export interface SoftwareSkill {
  id: string;
  name: string;
  category: 'Diseño' | 'Audiovisual' | 'Plantillas';
  icon: string;
  level: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Publicidad' | 'Identidad' | 'Redes Sociales' | 'Editorial';
  categoryLabel: string;
  summary: string;
  client: string;
  year: string;
  tools: string[];
  image: string;
  additionalImages?: string[];
  objective: string;
  solution: string;
  deliverables: string[];
  palette: string[];
  featured?: boolean;
}

export interface VideoProject {
  id: string;
  title: string;
  format: '9:16 Vertical (Reel/TikTok)' | '16:9 Horizontal (Spot/Promo)' | 'Motion Graphics';
  category: 'Reels' | 'Publicitario' | 'Contenido Redes' | 'Motion';
  duration: string;
  tools: string[];
  thumbnail: string;
  videoUrl?: string;
  objective: string;
  editingPace: string;
  description: string;
  audioTrack: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  toolsUsed: string[];
  badge?: string;
}

export interface ProfileData {
  fullName: string;
  shortName: string;
  title: string;
  tagline: string;
  bioSummary: string;
  fullBio: string[];
  education: {
    institution: string;
    degree: string;
    status: string;
    focus: string;
  };
  experienceStatus: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  linkedinUrl: string;
  location: string;
  avatarUrl: string;
}

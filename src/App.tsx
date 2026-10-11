import React, { useState, useEffect } from 'react';
import { PageId, ProfileData, ProjectItem, VideoProject } from './types/portfolio';
import {
  initialProfile,
  initialProjects,
  initialVideoProjects,
  servicesList,
  softwareSkills
} from './data/initialData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { AudiovisualPage } from './components/pages/AudiovisualPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ContactPage } from './components/pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { VideoModal } from './components/VideoModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { StudioBackground } from './components/StudioBackground';

export default function App() {
  // Navigation state with hash sync
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  
  // Data states (with local storage persistence if edited)
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('kathy_portfolio_profile');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return initialProfile;
  });

  const [projects] = useState<ProjectItem[]>(initialProjects);
  const [videoProjects] = useState<VideoProject[]>(initialVideoProjects);

  // Modals
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  // Synchronize hash with current page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') as PageId;
      const validPages: PageId[] = [
        'inicio',
        'sobre-mi',
        'portafolio',
        'audiovisual',
        'servicios',
        'contacto'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // Initialize from URL
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateProfile = (updated: Partial<ProfileData>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem('kathy_portfolio_profile', JSON.stringify(next));
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-200 selection:text-sky-950 font-sans relative">
      {/* Dynamic Creative Studio Blueprint & Ambient Celeste Auroras */}
      <StudioBackground />
      
      {/* Top Bar Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        phone={profile.phone}
      />

      {/* Main Multi-Page View Container */}
      <main className="flex-1">
        {currentPage === 'inicio' && (
          <HomePage
            profile={profile}
            featuredProjects={projects.filter((p) => p.featured)}
            featuredVideo={videoProjects[0]}
            onNavigate={navigateTo}
            onSelectProject={setSelectedProject}
            onSelectVideo={setSelectedVideo}
          />
        )}

        {currentPage === 'sobre-mi' && (
          <AboutPage
            profile={profile}
            softwareSkills={softwareSkills}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'portafolio' && (
          <PortfolioPage
            projects={projects}
            onSelectProject={setSelectedProject}
          />
        )}

        {currentPage === 'audiovisual' && (
          <AudiovisualPage
            videos={videoProjects}
            onSelectVideo={setSelectedVideo}
            phone={profile.phone}
          />
        )}

        {currentPage === 'servicios' && (
          <ServicesPage
            services={servicesList}
            phone={profile.phone}
          />
        )}

        {currentPage === 'contacto' && (
          <ContactPage profile={profile} />
        )}
      </main>

      {/* Footer */}
      <Footer profile={profile} onNavigate={navigateTo} />

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        phone={profile.phone}
      />

      {/* Video Interactive Player Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        phone={profile.phone}
      />

      {/* Persistent Floating WhatsApp Button */}
      <WhatsAppFloatingButton phone={profile.phone} avatarUrl={profile.avatarUrl} />

    </div>
  );
}

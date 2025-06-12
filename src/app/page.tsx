"use client";

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Home() {
  const [heroRef, isHeroVisible] = useIntersectionObserver();
  const [aboutRef, isAboutVisible] = useIntersectionObserver();
  const [projectsRef, isProjectsVisible] = useIntersectionObserver();
  const [contactRef, isContactVisible] = useIntersectionObserver();

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      <div 
        ref={heroRef}
        className={`transition-all duration-1000 ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <HeroSection />
      </div>
      <div 
        ref={aboutRef}
        className={`transition-all duration-1000 ${
          isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <AboutSection />
      </div>
      <div 
        ref={projectsRef}
        className={`transition-all duration-1000 ${
          isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <ProjectsSection />
      </div>
      <div 
        ref={contactRef}
        className={`transition-all duration-1000 ${
          isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <ContactSection />
      </div>
    </main>
  );
} 
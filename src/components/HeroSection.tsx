"use client";

import Image from 'next/image';
import AnimatedText from './AnimatedText';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-60px)] w-full flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 py-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <AnimatedText
            text="An affordable way to launch your product idea"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight"
          />
          <p className="text-gray-600 mb-8">
            I&apos;m a passionate full-stack developer with expertise in building modern web applications.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:shadow-primary/20 inline-block"
          >
            Let&apos;s Work Together
          </a>
        </div>

        {/* Profile Image */}
        <div className="flex-1 relative w-full max-w-lg aspect-square">
          <Image
            src="/images/profile.png"
            alt="Usman"
            fill
            className="object-contain object-center opacity-90 hover:opacity-100 transition-all duration-500 mix-blend-soft-light"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute inset-0 border border-border/30 rounded-full shadow-lg" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full" />
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="w-full fixed bottom-0 left-0 bg-gradient-to-r from-primary to-primary-dark text-white text-center py-2 text-sm font-medium shadow-lg z-50">
        Accepting new project opportunities
      </div>
    </section>
  );
} 
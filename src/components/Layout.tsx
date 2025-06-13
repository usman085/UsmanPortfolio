"use client";

import { ReactNode } from 'react';
import AnimatedBackground from './AnimatedBackground';
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar';
import LoadingWrapper from './LoadingWrapper';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LoadingWrapper>
      <div className="min-h-screen w-full bg-background text-text transition-colors duration-300 overflow-hidden">
        <AnimatedBackground />
        <Navbar />
        <main className="pt-16 w-full overflow-hidden">
          <div className="animated-gradient absolute inset-0 -z-10 opacity-10" />
          {children}
        </main>
        <ScrollToTop />
      </div>
    </LoadingWrapper>
  );
} 
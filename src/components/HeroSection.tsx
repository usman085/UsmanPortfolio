"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const phrases = [
  "Crafting Digital Experiences",
  "Building Modern Web Applications",
  "Transforming Ideas into Reality",
  "Creating Scalable Solutions"
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-60px)] w-full flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10 pb-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 py-24">
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center lg:text-left"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={textVariants}
          >
            <motion.span 
              key={currentPhraseIndex}
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {phrases[currentPhraseIndex]}
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            variants={textVariants}
          >
            I&apos;m a passionate full-stack developer specializing in building modern, scalable web applications with cutting-edge technologies.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={textVariants}
          >
            <motion.a
              href="#contact"
              className="group bg-gradient-to-r from-primary to-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:shadow-primary/20 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Work Together
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              className="group border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg hover:bg-primary hover:text-white inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="flex-1 relative w-full max-w-lg aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full h-full">
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
        </motion.div>
      </div>

      {/* Bottom Banner */}
      <motion.div 
        className="w-full fixed bottom-0 left-0 bg-gradient-to-r from-primary to-primary-dark text-white text-center py-4 text-sm font-medium shadow-lg z-[100] mb-safe"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Accepting new project opportunities
      </motion.div>
    </section>
  );
} 
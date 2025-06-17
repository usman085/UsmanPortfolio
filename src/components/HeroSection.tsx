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
      className="min-h-[calc(100vh-60px)] w-full flex items-center relative overflow-hidden bg-white pb-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0EB55F]/10 via-transparent to-[#0EB55F]/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

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
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {phrases[currentPhraseIndex].split(' ').map((word, index) => (
                <span key={index} className={index % 2 === 0 ? 'text-[#1E1E1E]' : 'text-[#0EB55F]'}>
                  {word}{' '}
                </span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8"
            variants={textVariants}
          >
            <span className="text-[#1E1E1E]">Full Stack Developer</span>{' '}
            <span className="text-[#0EB55F]">&</span>{' '}
            <span className="text-[#1E1E1E]">UI/UX Designer</span>
          </motion.h2>

          <motion.p 
            className="text-xl text-[#1E1E1E]/80 mb-8 max-w-2xl mx-auto lg:mx-0"
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
              className="group bg-[#0EB55F] hover:bg-[#0EB55F]/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:shadow-[#0EB55F]/20 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Work Together
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              className="group border-2 border-[#0EB55F] text-[#0EB55F] font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg hover:bg-[#0EB55F] hover:text-white inline-flex items-center justify-center"
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
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Usman"
              fill
              className="object-cover object-[center_30%] opacity-90 hover:opacity-100 transition-all duration-500 mix-blend-soft-light"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB55F]/20 to-[#0EB55F]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute inset-0 border border-[#0EB55F]/30 rounded-full shadow-lg" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB55F]/5 to-transparent rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
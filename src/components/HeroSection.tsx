"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedContent from './AnimatedContent';
import { FaPlay, FaCode, FaEnvelope } from 'react-icons/fa';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleWatchClick = () => {
    // Add your video URL or modal trigger here
    window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', '_blank');
  };

  return (
    <section id="home" className="section min-h-screen flex items-center relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimatedContent 
            direction="left" 
            delay={isLoaded ? 0.2 : 0}
            distance={150}
            className="flex-1 text-center md:text-left"
          >
            <div>
              <AnimatedContent direction="fade" delay={isLoaded ? 0.4 : 0}>
                <h1 className="heading-1 mb-4">
                  Hi, I'm Usman
                  <br />
                  <span className="text-primary">Full Stack Developer</span>
                </h1>
              </AnimatedContent>
              
              <AnimatedContent direction="fade" delay={isLoaded ? 0.6 : 0}>
                <p className="paragraph mb-8 max-w-2xl">
                  I specialize in building exceptional digital experiences. Currently, I'm focused on
                  building accessible, human-centered products.
                </p>
              </AnimatedContent>

              <AnimatedContent direction="up" delay={isLoaded ? 0.8 : 0} distance={50}>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <motion.button
                    onClick={handleWatchClick}
                    className="btn-primary flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPlay className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </motion.button>
                  <motion.a
                    href="#projects"
                    className="btn-secondary flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaCode className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Projects
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="btn-secondary flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Contact Me
                  </motion.a>
                </div>
              </AnimatedContent>
            </div>
          </AnimatedContent>

          <AnimatedContent 
            direction="right" 
            delay={isLoaded ? 0.4 : 0}
            distance={150}
            className="flex-1 flex justify-center"
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: isLoaded ? 0.6 : 0 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/20"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(var(--primary-rgb), 0.2)",
                    "0 0 20px 10px rgba(var(--primary-rgb), 0.2)",
                    "0 0 0 0 rgba(var(--primary-rgb), 0.2)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/profile.jpeg"
                  alt="Usman"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle at center, transparent 60%, rgba(var(--primary-rgb), 0.1) 100%)"
                }}
                animate={{
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
} 
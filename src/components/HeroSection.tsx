"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { HiCode, HiOutlineLightBulb } from 'react-icons/hi';
import { IoRocketOutline } from 'react-icons/io5';

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

const features = [
  { icon: HiCode, text: "Clean Code", color: "from-blue-500/20 to-blue-500/5" },
  { icon: HiOutlineLightBulb, text: "Creative Solutions", color: "from-purple-500/20 to-purple-500/5" },
  { icon: IoRocketOutline, text: "Fast Performance", color: "from-orange-500/20 to-orange-500/5" },
];

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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B86B]/10 via-transparent to-[#00B86B]/5" />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,184,107,0.1),transparent_50%)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#00B86B]/10 to-[#00B86B]/5 rounded-full text-[#00B86B] font-medium mb-6"
            >
              Full Stack Developer
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={textVariants}
            >
              <motion.span 
                key={currentPhraseIndex}
                className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1E1E1E] to-[#00B86B]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {phrases[currentPhraseIndex]}
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl text-[#1E1E1E]/80 mb-8 max-w-2xl lg:mx-0"
              variants={textVariants}
            >
              I&apos;m a passionate full-stack developer specializing in building modern, scalable web applications with cutting-edge technologies.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              variants={textVariants}
            >
              <motion.a
                href="#contact"
                className="group bg-[#00B86B] hover:bg-[#00B86B]/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:shadow-[#00B86B]/20 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Work Together
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#projects"
                className="group border-2 border-[#00B86B] text-[#00B86B] font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg hover:bg-[#00B86B] hover:text-white inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <feature.icon className="w-6 h-6 mb-2 text-gray-800" />
                  <p className="text-sm font-medium text-gray-800">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Main container with green background */}
              <div className="relative w-full h-full bg-[#00B86B] ml-3 mb-3">
                {/* Thin black frame */}
                <div className="absolute -left-8 -bottom-8 w-full h-full border-[3px] border-black"></div>
                
                {/* Image container */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/profile.png"
                    alt="Usman"
                    fill
                    className="object-cover object-[center_top]"
                    priority
                    sizes="(min-width: 640px) 288px, 256px"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -z-10 w-32 h-32 -top-6 -right-6 bg-[#00B86B]/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
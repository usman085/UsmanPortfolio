"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = 'home';
      let minDistance = Infinity;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme as 'light' | 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 bg-white backdrop-blur-lg ${
        isScrolled ? 'shadow-lg border-b border-[#0EB55F]/10' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            {/* <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#0EB55F]">
              <Image
                src="/images/profile.png"
                alt="Syed Usman"
                fill
                quality={100}
                className="object-cover object-top scale-125 filter-none"
                priority
              />
            </div> */}
            <span className="text-[#0EB55F] font-bold text-2xl">
              Syed Usman
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                className={`text-[#0EB55F] hover:text-[#0EB55F]/80 transition-colors relative group font-medium text-sm ${
                  activeSection === item ? 'font-bold' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0EB55F] transition-all duration-300 ${
                  activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.button>
            ))}
            <div className="flex items-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/923394023446', '_blank')}
                className="bg-[#0EB55F] hover:bg-[#0EB55F]/90 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:shadow-[#0EB55F]/20"
              >
                Let&apos;s Discuss Project
              </motion.button>
             
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-white/80 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200 border border-[#0EB55F]/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className="w-5 h-5 text-[#0EB55F]" />
            ) : (
              <FiMenu className="w-5 h-5 text-[#0EB55F]" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-[#0EB55F]/10 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-3">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                className={`text-[#0EB55F] hover:text-[#0EB55F]/80 transition-colors text-left px-4 py-2 rounded-lg hover:bg-white/80 font-medium text-sm ${
                  activeSection === item ? 'bg-[#0EB55F]/10 font-bold' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
            <div className="flex items-center space-x-4 mt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://wa.me/923394023446', '_blank')}
                className="flex-1 bg-[#0EB55F] hover:bg-[#0EB55F]/90 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:shadow-[#0EB55F]/20"
              >
                Let&apos;s Discuss Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/80 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200 border border-[#0EB55F]/20"
              >
                {theme === 'light' ? (
                  <FiMoon className="w-4 h-4 text-[#0EB55F]" />
                ) : (
                  <FiSun className="w-4 h-4 text-[#0EB55F]" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar; 
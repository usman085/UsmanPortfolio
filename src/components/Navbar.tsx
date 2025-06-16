"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
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
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 border-b-2 border-white/20 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <motion.div
            className="text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Usman
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                className="text-foreground hover:text-primary transition-colors relative group font-medium"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:shadow-primary/20"
              >
                Let&apos;s Discuss Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-background/80 hover:bg-background shadow-sm hover:shadow-md transition-all duration-200 border border-border/50"
              >
                {theme === 'light' ? (
                  <FiMoon className="w-5 h-5 text-foreground" />
                ) : (
                  <FiSun className="w-5 h-5 text-foreground" />
                )}
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-background/80 hover:bg-background shadow-sm hover:shadow-md transition-all duration-200 border border-border/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className="w-6 h-6 text-foreground" />
            ) : (
              <FiMenu className="w-6 h-6 text-foreground" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                className="text-foreground hover:text-primary transition-colors text-left px-4 py-2 rounded-lg hover:bg-background/80 font-medium"
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
                onClick={() => scrollToSection('contact')}
                className="flex-1 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:shadow-primary/20"
              >
                Let&apos;s Discuss Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-background/80 hover:bg-background shadow-sm hover:shadow-md transition-all duration-200 border border-border/50"
              >
                {theme === 'light' ? (
                  <FiMoon className="w-5 h-5 text-foreground" />
                ) : (
                  <FiSun className="w-5 h-5 text-foreground" />
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
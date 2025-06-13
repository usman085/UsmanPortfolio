"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

interface AnimatedTextProps {
  lines: string[];
  className?: string;
  delay?: number;
}

export default function AnimatedText({ lines, className = '', delay = 0 }: AnimatedTextProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLineIndex(prev => (prev + 1) % lines.length);
    }, 2000); // Show each line for 2 seconds

    return () => clearTimeout(timer);
  }, [currentLineIndex, lines.length]);

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentLineIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              duration: 0.8,
              bounce: 0.2,
            }
          }}
          exit={{ 
            opacity: 0, 
            y: -30,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          className="mb-2"
        >
          {lines[currentLineIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 
"use client";

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const words = text.split(' ');

  return (
    <div className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ${className}`}>
      <motion.h1
        className="inline-block w-full text-dark font-bold capitalize text-8xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText; 
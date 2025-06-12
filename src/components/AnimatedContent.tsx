"use client";

import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

interface AnimatedContentProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'fade';
  delay?: number;
  className?: string;
  distance?: number;
}

const getAnimationVariants = (direction: 'left' | 'right' | 'up' | 'down' | 'fade', distance: number) => {
  switch (direction) {
    case 'left':
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: {
            type: "spring",
            duration: 1.2,
            bounce: 0.3,
          }
        }
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: distance },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: {
            type: "spring",
            duration: 1.2,
            bounce: 0.3,
          }
        }
      };
    case 'up':
      return {
        hidden: { opacity: 0, y: distance },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            duration: 1.2,
            bounce: 0.3,
          }
        }
      };
    case 'down':
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            duration: 1.2,
            bounce: 0.3,
          }
        }
      };
    case 'fade':
      return {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut"
          }
        }
      };
  }
};

export default function AnimatedContent({ 
  children, 
  direction = 'fade', 
  delay = 0,
  className = '',
  distance = 100
}: AnimatedContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-50px",
    amount: 0.2
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getAnimationVariants(direction, distance)}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 
"use client";

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaLaravel, FaVuejs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si';

const icons = [
  { Icon: FaReact, x: 10, y: 20, delay: 0 },
  { Icon: SiNextdotjs, x: 80, y: 40, delay: 1 },
  { Icon: FaNodeJs, x: 30, y: 70, delay: 2 },
  { Icon: FaDocker, x: 60, y: 10, delay: 3 },
  { Icon: FaLaravel, x: 20, y: 50, delay: 4 },
  { Icon: FaVuejs, x: 70, y: 30, delay: 5 },
  { Icon: SiMongodb, x: 40, y: 80, delay: 6 },
  { Icon: SiPostgresql, x: 90, y: 60, delay: 7 },
  { Icon: SiMysql, x: 50, y: 90, delay: 8 },
  { Icon: FaDatabase, x: 15, y: 40, delay: 9 },
];

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundSize: '400% 400%',
        }}
      />

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />

      {/* Floating tech icons */}
      {icons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={{
            left: `${x}%`,
            top: `${y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            delay,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}

      {/* Animated circles */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-primary/10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-secondary/10"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
} 
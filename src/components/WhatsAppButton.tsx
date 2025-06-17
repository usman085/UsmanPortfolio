"use client";

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/923394023446', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-16 right-8 z-50 bg-[#0EB55F] text-white p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ 
        scale: 1.15,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          type: "spring",
          stiffness: 260,
          damping: 20
        }
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.div>
    </motion.button>
  );
};

export default WhatsAppButton; 
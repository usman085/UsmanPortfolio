import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function ProjectBanner() {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-[#0EB55F] text-white py-3 px-4 shadow-lg z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Accepting new project opportunities</span>
        </div>
        <a
          href="#contact"
          className="group flex items-center space-x-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <span>Let's discuss your project</span>
          <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
} 
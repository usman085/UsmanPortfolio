import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { skillsData } from '../utils/data';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -150,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0.4,
    },
  },
};

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section 
      id="skills" 
      className="py-20 bg-card-bg relative" 
      ref={sectionRef}
      style={{ opacity, scale }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            type: "spring",
            duration: 0.8,
            bounce: 0.3
          }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-6"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-background rounded-xl p-6 shadow-lg w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] relative overflow-hidden"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)",
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-semibold mb-4 text-primary relative">
                {category.category}
              </h3>
              <div className="space-y-4 relative">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 
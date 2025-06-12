"use client";

import { motion } from 'framer-motion';
import { experienceData } from '../utils/data';
import { useState } from 'react';

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 bg-primary h-full -translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2" />

              <motion.div
                className={`w-[calc(50%-2rem)] bg-card-bg rounded-xl p-6 shadow-lg cursor-pointer ${
                  index % 2 === 0 ? 'mr-8' : 'ml-8'
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                  <span className="text-sm text-text-light">{exp.period}</span>
                </div>
                <h4 className="text-lg mb-2">{exp.company}</h4>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? 'auto' : '0',
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-text-light mt-2">{exp.description}</p>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: expandedIndex === index ? 180 : 0,
                  }}
                  className="w-6 h-6 mx-auto mt-2 text-primary"
                >
                  ▼
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'AWS', icon: FaAws, color: '#232F3E' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const viewportConfig = {
  amount: 0.1,
  margin: "-50px"
};

export default function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="section bg-card-bg rounded-xl my-8"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">About Me</h2>
          <p className="paragraph max-w-3xl mx-auto">
            I'm a passionate software engineer with over 6 years of experience in building
            scalable web applications. I specialize in modern JavaScript frameworks and
            cloud technologies, always striving to create efficient and user-friendly solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
          >
            <h3 className="heading-3 mb-6">My Skills</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center p-4 bg-background rounded-lg shadow-lg hover:shadow-neon transition-all duration-300"
                >
                  <skill.icon
                    className="text-4xl mb-2 transform hover:rotate-12 transition-transform duration-300"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="heading-3 mb-4">Experience</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="space-y-4"
              >
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 }
                  }}
                  className="card hover:bg-background/50 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-lg mb-2">Senior Software Engineer</h4>
                  <p className="text-text-light mb-2">Tech Company • 2020 - Present</p>
                  <p className="text-sm">
                    Leading development of enterprise-scale applications using React, Node.js,
                    and cloud technologies. Mentoring junior developers and implementing
                    best practices.
                  </p>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 }
                  }}
                  className="card hover:bg-background/50 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-lg mb-2">Software Engineer</h4>
                  <p className="text-text-light mb-2">Startup • 2018 - 2020</p>
                  <p className="text-sm">
                    Developed and maintained multiple web applications using modern
                    JavaScript frameworks and RESTful APIs.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 
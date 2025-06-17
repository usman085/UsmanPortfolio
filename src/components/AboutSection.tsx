import { motion } from 'framer-motion';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiMysql, SiRedux, SiAmazon } from 'react-icons/si';
import { FaReact, FaNodeJs, FaLaravel, FaVuejs, FaDocker, FaPhp, FaGitAlt } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
  { name: 'Vue.js', icon: FaVuejs, color: '#4FC08D' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
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
      className="section bg-gradient-to-br from-background via-background/95 to-primary/10 rounded-xl my-8"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text-light leading-relaxed">
              I am a Senior Full Stack Developer with extensive experience in designing and developing dynamic web applications. 
              With a strong foundation in both frontend and backend technologies, I specialize in creating scalable, 
              high-performance solutions that meet complex business requirements.
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Skills Section - Takes 4 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-8 text-primary">Core Competencies</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="grid grid-cols-2 gap-6"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(0,0,0,0.2)",
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center p-4 bg-card-bg/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    <skill.icon
                      className="text-4xl mb-3 transform hover:rotate-12 transition-transform duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-text-light">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Section - Takes 8 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-8 text-primary">Professional Experience</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="space-y-6"
              >
                {/* Byteimpulse CTO */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-card-bg/50 backdrop-blur-sm rounded-xl p-6 hover:bg-background/50 transition-all duration-300 border border-primary/5"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">Chief Technology Officer</h4>
                      <p className="text-text-light">Byteimpulse</p>
                      <p className="text-sm text-text-light mt-1">Lahore, Punjab, Pakistan · Hybrid</p>
                    </div>
                    <span className="text-sm text-text-light bg-primary/10 px-4 py-2 rounded-full">January 2024 - Present</span>
                  </div>
                </motion.div>

                {/* Byteimpulse Lead */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-card-bg/50 backdrop-blur-sm rounded-xl p-6 hover:bg-background/50 transition-all duration-300 border border-primary/5"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">Lead Software Engineer</h4>
                      <p className="text-text-light">Byteimpulse</p>
                      <p className="text-sm text-text-light mt-1">Remote</p>
                    </div>
                    <span className="text-sm text-text-light bg-primary/10 px-4 py-2 rounded-full">July 2023 - January 2024</span>
                  </div>
                </motion.div>

                {/* Taro Technologies */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-card-bg/50 backdrop-blur-sm rounded-xl p-6 hover:bg-background/50 transition-all duration-300 border border-primary/5"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">Senior Software Engineer</h4>
                      <p className="text-text-light">Taro Technologies</p>
                      <p className="text-sm text-text-light mt-1">Pakistan · On-site</p>
                    </div>
                    <span className="text-sm text-text-light bg-primary/10 px-4 py-2 rounded-full">April 2022 - March 2024</span>
                  </div>
                </motion.div>

                {/* Geeklone Technologies */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-card-bg/50 backdrop-blur-sm rounded-xl p-6 hover:bg-background/50 transition-all duration-300 border border-primary/5"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">Laravel/Vue.js/MERN Stack Developer</h4>
                      <p className="text-text-light">Geeklone Technology</p>
                      <p className="text-sm text-text-light mt-1">Lahore, Punjab, Pakistan · On-site</p>
                    </div>
                    <span className="text-sm text-text-light bg-primary/10 px-4 py-2 rounded-full">January 2021 - April 2022</span>
                  </div>
                </motion.div>

                {/* Geek Tech Sol */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-card-bg/50 backdrop-blur-sm rounded-xl p-6 hover:bg-background/50 transition-all duration-300 border border-primary/5"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">Laravel Developer</h4>
                      <p className="text-text-light">Geek Tech Sol</p>
                      <p className="text-sm text-text-light mt-1">Lahore, Punjab, Pakistan · On-site</p>
                    </div>
                    <span className="text-sm text-text-light bg-primary/10 px-4 py-2 rounded-full">January 2020 - December 2020</span>
                  </div>
                </motion.div>

                {/* Tektiks Innovative */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-card-bg/50 backdrop-blur-sm rounded-xl p-6 hover:bg-background/50 transition-all duration-300 border border-primary/5"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">Web Developer</h4>
                      <p className="text-text-light">Tektiks Innovative Network Pvt. Ltd.</p>
                      <p className="text-sm text-text-light mt-1">Lahore, Punjab, Pakistan · On-site</p>
                    </div>
                    <span className="text-sm text-text-light bg-primary/10 px-4 py-2 rounded-full">September 2019 - December 2019</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 
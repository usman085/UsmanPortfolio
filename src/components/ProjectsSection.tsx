import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Button from './Button';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include real-time inventory management, payment processing, and admin dashboard.',
    image: '/images/project1.svg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/username/ecommerce',
    live: 'https://ecommerce-demo.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
    image: '/images/project2.svg',
    technologies: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/username/task-manager',
    live: 'https://task-manager-demo.com',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'An analytics dashboard that uses machine learning to provide insights and predictions based on user data.',
    image: '/images/project3.svg',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
    github: 'https://github.com/username/analytics-dashboard',
    live: 'https://analytics-demo.com',
  },
  {
    title: 'Social Media Platform',
    description: 'A modern social media platform with real-time chat, post sharing, and user interactions. Built with real-time updates and modern UI/UX.',
    image: '/images/project4.svg',
    technologies: ['Next.js', 'Socket.io', 'TailwindCSS', 'PostgreSQL'],
    github: 'https://github.com/username/social-platform',
    live: 'https://social-platform-demo.com',
  },
  {
    title: 'Fitness Tracking App',
    description: 'A comprehensive fitness tracking application with workout planning, progress tracking, and nutrition management features.',
    image: '/images/project5.svg',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/fitness-app',
    live: 'https://fitness-app-demo.com',
  },
  {
    title: 'Real Estate Marketplace',
    description: 'A real estate platform with property listings, virtual tours, and advanced search capabilities.',
    image: '/images/project6.svg',
    technologies: ['Vue.js', 'Three.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/username/real-estate',
    live: 'https://real-estate-demo.com',
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="section bg-background">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="heading-2 mb-4">Featured Projects</h2>
          <p className="paragraph max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
            in building modern web applications.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card overflow-hidden transform transition-all duration-300 hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-text-light text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <FaGithub className="mr-2" />
                          Code
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg hover:bg-background transition-colors z-10"
            onClick={scrollPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg hover:bg-background transition-colors z-10"
            onClick={scrollNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
} 
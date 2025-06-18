import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Button from './Button';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const workSamples = [
  {
    title: 'QS Learning Platform',
    description: 'Developed a comprehensive educational platform for QS Learning tuition center using Vue.js and Vuetify. Built a responsive and user-friendly interface with Laravel backend and MySQL database, creating an engaging learning environment for students.',
    image: '/images/qslearning/image_original.png',
    category: 'Full Stack',
    client: 'QS Learning',
    duration: '4 months',
    impact: 'Enhanced student learning experience',
    link: 'https://case-study-qs.com'
  },
  {
    title: 'Taro Fintech Platform',
    description: 'Developed a comprehensive fintech web application with seamless payment gateway integration. Built responsive UI with React.js and Material UI, implemented backend logic using Node.js and Express, and managed data with MySQL.',
    image: '/images/taro/image_original.png',
    category: 'Full Stack',
    client: 'Taro Fintech',
    duration: '6 months',
    impact: 'Successful payment gateway integration',
    link: 'https://case-study-taro.com'
  },
  {
    title: 'Hirio',
    description: 'A recruitment platform that connects companies with qualified talent quickly and efficiently, leveraging advanced technology to enhance the hiring experience. I helped turn this idea into reality, making it highly effective.',
    image: '/images/hirio/image_original.png',
    category: 'Full Stack',
    client: 'Hirio',
    duration: '5 months',
    impact: 'Streamlined recruitment process',
    link: 'https://case-study-hirio.com'
  },
  {
    title: 'Hourhub | Time Tracking',
    description: 'Effortless Time Tracking for Swiss Businesses. Our time tracking solution is designed with simplicity and reliability at its core — built specifically to meet the needs of small and medium-sized businesses across Switzerland. Whether you\'re managing a growing team or handling multiple projects, our platform ensures accurate tracking of work hours without the complexity.',
    image: '/images/hourhub/image_original.png',
    category: 'WordPress Development',
    client: 'Hourhub',
    duration: '3 months',
    impact: 'Streamlined time tracking for Swiss businesses',
    link: 'https://case-study-hourhub.com'
  },
  {
    title: 'Time Tracking | Construction Management',
    description: 'A comprehensive time tracking solution designed specifically for construction work, managing weekly timesheets and reports, as well as complete management of phases and projects. Built with MERN stack and MySQL database, providing robust web APIs for seamless project management and time tracking capabilities.',
    image: '/images/timetracking/image_original.png',
    category: 'Full Stack',
    client: 'Construction Company',
    duration: '4 months',
    impact: 'Streamlined construction project management',
    link: 'https://case-study-timetracking.com'
  },
  {
    title: 'Car Studio | Auto Repair Website',
    description: 'A comprehensive website for auto repairing and service shop featuring dynamic listing, payment gateway integration, service builder form, contact form, HubSpot integration, and training section. Built with React, Node.js, Express.js, Redux, and MySQL database.',
    image: '/images/carstudio/image_original.png',
    category: 'Full Stack',
    client: 'Car Studio',
    duration: '5 months',
    impact: 'Enhanced auto repair service management',
    link: 'https://case-study-carstudio.com'
  }
];

const categories = [
  'All Work',
  'UI/UX Design',
  'Development',
  'Data Visualization',
  'Full Stack',
  'Backend Development',
  'AI/ML',
  'WordPress Development'
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: true,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const filteredWork = selectedCategory === 'All Work'
    ? workSamples
    : workSamples.filter(work => work.category === selectedCategory);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section id="projects" className="section bg-white relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container relative px-8 lg:px-16">
        <motion.div
          className="text-center mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="heading-2 mb-6 text-gray-800">
            Selected Work
          </h2>
          <p className="paragraph max-w-3xl mx-auto text-gray-600 text-lg">
            A collection of my recent work showcasing expertise in various domains
            and technologies.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${selectedCategory === category
                  ? 'bg-[#0EB55F] text-white shadow-[#0EB55F]/20'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-gray-200/50 border border-gray-200'
                }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="relative px-16 mb-20 py-12">
          {/* Enhanced Navigation Buttons */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl hover:shadow-[#0EB55F]/20 transition-all duration-300 border-2 border-[#0EB55F]/20 hover:border-[#0EB55F]/40 hover:bg-[#0EB55F]/5 disabled:opacity-30 disabled:cursor-not-allowed z-10 group"
            onClick={scrollPrev}
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.9 }}
            disabled={selectedIndex === 0}
          >
            <ChevronLeft className="w-7 h-7 text-[#0EB55F] group-hover:text-[#0EB55F] transition-colors duration-300" />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl hover:shadow-[#0EB55F]/20 transition-all duration-300 border-2 border-[#0EB55F]/20 hover:border-[#0EB55F]/40 hover:bg-[#0EB55F]/5 disabled:opacity-30 disabled:cursor-not-allowed z-10 group"
            onClick={scrollNext}
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.9 }}
            disabled={selectedIndex === filteredWork.length - 1}
          >
            <ChevronRight className="w-7 h-7 text-[#0EB55F] group-hover:text-[#0EB55F] transition-colors duration-300" />
          </motion.button>

          {/* Carousel Container with Gradient Edges */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-5" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-5 " />

            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex py-4">
                {filteredWork.map((work, index) => (
                  <motion.div
                    key={work.title}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                  >
                    <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 h-full flex flex-col border-2 border-[#0EB55F]/20 shadow-xl hover:border-[#0EB55F]/40 hover:shadow-[#0EB55F]/20">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0EB55F]/5 via-transparent to-[#0EB55F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Work Image */}
                      <div className="relative h-40 overflow-hidden flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0EB55F]/20 to-transparent z-10" />
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-20" />

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 z-30">
                          <span className="px-3 py-1 text-xs rounded-full bg-white/95 text-[#0EB55F] backdrop-blur-sm font-bold shadow-xl border border-[#0EB55F]/20">
                            {work.category}
                          </span>
                        </div>

                        {/* Work Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                          <h3 className="text-xl font-bold text-white mb-2 drop-shadow-2xl leading-tight">
                            {work.title}
                          </h3>
                          <div className="w-12 h-0.5 bg-[#0EB55F] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 flex flex-col flex-grow relative z-10">
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
                          {work.description}
                        </p>

                        {/* Work Details */}
                        <div className="mb-4 flex-grow space-y-2">
                          <div className="flex justify-between items-center py-1.5 border-b border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Client</span>
                            <span className="font-bold text-gray-800 text-sm">{work.client}</span>
                          </div>
                          <div className="flex justify-between items-center py-1.5 border-b border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Duration</span>
                            <span className="font-bold text-gray-800 text-sm">{work.duration}</span>
                          </div>
                          <div className="flex justify-between items-center py-1.5">
                            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Impact</span>
                            <span className="font-bold text-gray-800 text-right max-w-[60%] text-sm">{work.impact}</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => window.open(work.link, '_blank')}
                          className="group/btn h-10 w-full rounded-lg font-bold text-sm transition-all duration-500 hover:bg-[#0EB55F] hover:text-white hover:shadow-lg hover:shadow-[#0EB55F]/30 hover:scale-105 border-2 border-[#0EB55F]/20"
                        >
                          <div className="flex items-center justify-center">
                            <FaExternalLinkAlt className="w-4 h-4 mr-2 transition-transform group-hover/btn:translate-x-1" />
                            <span className="font-bold">
                              View Case Study
                            </span>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {filteredWork.length > 0 && (
            <>
              {/* Enhanced Progress Bar */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-6">
                <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#0EB55F] to-[#0EB55F]/80 rounded-full shadow-lg"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((selectedIndex + 1) / filteredWork.length) * 100}%`
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {selectedIndex + 1} / {filteredWork.length}
                </span>
              </div>

              {/* Enhanced Slide Indicators */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {scrollSnaps.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`rounded-full transition-all duration-500 ${index === selectedIndex
                        ? 'w-8 h-3 bg-[#0EB55F] shadow-lg shadow-[#0EB55F]/30'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110'
                      }`}
                    onClick={() => scrollTo(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
} 
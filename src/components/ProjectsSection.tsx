import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Button from './Button';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  }
];

const categories = [
  'All Work',
  'UI/UX Design',
  'Development',
  'Data Visualization',
  'Full Stack',
  'Backend Development',
  'AI/ML'
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
    <section id="work" className="section bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container relative">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="heading-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Selected Work
          </h2>
          <p className="paragraph max-w-3xl mx-auto text-gray-600">
            A collection of my recent work showcasing expertise in various domains
            and technologies.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/20'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-gray-100'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-100 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            onClick={scrollPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={selectedIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-100 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            onClick={scrollNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={selectedIndex === filteredWork.length - 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </motion.button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {filteredWork.map((work, index) => (
                <motion.div
                  key={work.title}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    {/* Work Image */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20" />
                      
                      {/* Work Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                          {work.title}
                        </h3>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm font-medium">
                            {work.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                        {work.description}
                      </p>

                      {/* Work Details */}
                      <div className="mb-6 flex-grow space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Client</span>
                          <span className="font-medium text-gray-700">{work.client}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Duration</span>
                          <span className="font-medium text-gray-700">{work.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Impact</span>
                          <span className="font-medium text-primary">{work.impact}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(work.link, '_blank')}
                        className="group h-10 w-full bg-primary hover:bg-primary/90 transition-colors duration-300"
                      >
                        <div className="flex items-center justify-center">
                          <FaExternalLinkAlt className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                          <span className="text-sm font-medium text-white">
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
          
          {filteredWork.length > 0 && (
            <>
              {/* Progress Bar */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${((selectedIndex + 1) / filteredWork.length) * 100}%` 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {scrollSnaps.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                    onClick={() => scrollTo(index)}
                    whileHover={{ scale: 1.2 }}
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
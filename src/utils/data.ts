import { FaReact, FaNodeJs, FaDocker, FaLaravel, FaVuejs, FaDatabase, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiPostgresql, SiMysql, SiFirebase } from 'react-icons/si';

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: FaVuejs },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Laravel', icon: FaLaravel },
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Firebase', icon: SiFirebase },
    ]
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'AWS', icon: FaAws },
    ]
  }
];

export const experienceData = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2021 - Present',
    description: 'Led development of enterprise-scale applications using MERN stack. Implemented CI/CD pipelines and microservices architecture.'
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Solutions',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple web applications using Laravel and Vue.js. Improved application performance by 40%.'
  },
  {
    role: 'Software Developer',
    company: 'Innovate Tech',
    period: '2017 - 2019',
    description: 'Built responsive web applications using React and Node.js. Collaborated with cross-functional teams to deliver projects on time.'
  }
];

export const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with MERN stack',
    image: '/images/project1.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    demo: 'https://demo1.com',
    github: 'https://github.com/username/project1'
  },
  {
    title: 'Task Management System',
    description: 'Real-time task management application with Laravel and Vue.js',
    image: '/images/project2.jpg',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'WebSocket'],
    demo: 'https://demo2.com',
    github: 'https://github.com/username/project2'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: '/images/project3.jpg',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
    demo: 'https://demo3.com',
    github: 'https://github.com/username/project3'
  }
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/username',
    icon: 'FaLinkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/username',
    icon: 'FaGithub',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/username',
    icon: 'FaTwitter',
  },
]; 
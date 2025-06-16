import { FaReact, FaNodeJs, FaDocker, FaLaravel, FaVuejs, FaAws, FaPhp, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiSupabase, SiTypescript, SiTailwindcss, SiRedux, SiMaterialdesign, SiBootstrap, SiJquery, SiSocketdotio, SiPusher, SiCheckio } from 'react-icons/si';

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: FaVuejs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Redux', icon: SiRedux },
      { name: 'Material UI', icon: SiMaterialdesign },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'jQuery', icon: SiJquery }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: FaNodeJs },
      { name: 'Laravel', icon: FaLaravel },
      { name: 'PHP', icon: FaPhp },
      { name: 'REST APIs', icon: FaNodeJs },
      { name: 'WebSockets', icon: SiSocketdotio },
      { name: 'Docker', icon: FaDocker }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Supabase', icon: SiSupabase }
    ]
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Apache', icon: FaAws }
    ]
  },
  {
    category: 'CMS & Others',
    skills: [
      { name: 'WordPress', icon: FaWordpress },
      { name: 'Pusher', icon: SiPusher },
      { name: 'Checkout.com', icon: SiCheckio }
    ]
  }
];

export const experienceData = [
  {
    role: 'Senior Software Engineer',
    company: 'Taro Technologies | Soliton Technologies',
    period: 'April 2022 - Present',
    description: `• Taro Website (Fintech Platform)
      - Led architectural improvements resulting in 40% better performance
      - Spearheaded complete website redesign with modern UI/UX principles
      - Successfully integrated Checkout.com payment gateway, handling $1M+ transactions
      - Implemented secure authentication and real-time transaction monitoring
      
    • Tofu AI (AI-Powered Platform)
      - Developed and designed dynamic website with real-time AI processing
      - Implemented responsive design ensuring seamless mobile experience
      - Integrated advanced AI algorithms for data processing
      
    • Horizon Auto (Automotive Platform)
      - Architected scalable backend infrastructure
      - Developed responsive React.js frontend with modern design patterns
      - Implemented real-time vehicle tracking and management system
      
    • Bkccaffe (E-commerce Platform)
      - Built UI from scratch using React.js and Material UI
      - Implemented RESTful APIs for seamless data flow
      - Integrated Redux for efficient state management
      - Achieved 99.9% uptime for critical services
      
    • Fillet.AI (AI Data Processing)
      - Developed end-to-end website with AI integration
      - Implemented real-time data processing and visualization
      - Created intuitive user interface for complex AI operations`
  },
  {
    role: 'Laravel/Vue.js/MERN Stack Developer',
    company: 'Geeklone Technologies',
    period: 'January 2021 - April 2022',
    description: `• Pizza Reborn (Multi-Tenant Architecture)
      - Developed comprehensive invoicing system with automated billing
      - Built inventory management with real-time stock tracking
      - Implemented multilingual support for 5+ languages
      - Created detailed reporting system with data visualization
      Tech Stack: Node.js, React.js, MySQL, Redis
      
    • QS Learning (Learning Management System)
      - Developed work management system with task tracking
      - Built attendance system with automated reporting
      - Created class management with scheduling capabilities
      - Implemented group and session management features
      Tech Stack: Vue.js, Laravel, MySQL, WebSockets
      
    • Virtual Classroom
      - Built real-time chat module with file sharing
      - Developed comprehensive user management system
      - Integrated with QS Learning platform
      Tech Stack: Node.js, HBS, Socket.io, MySQL
      
    • Smart Budget App
      - Developed expense and income tracking system
      - Built group and individual account management
      - Implemented secure transaction handling
      Tech Stack: Go Lang, React.js, TypeScript, Redux, PostgreSQL
      
    • Torrent Downloader
      - Built file conversion system for multiple formats
      - Implemented secure file handling
      Tech Stack: Go Lang, React.js, TypeScript, Redux, PostgreSQL
      
    • Gainabit
      - Developed real-time chat using Pusher
      - Optimized existing codebase for better performance
      Tech Stack: Go Lang, React.js, TypeScript, Redux, PostgreSQL
      
    • Data Lake House
      - Built data processing pipeline
      - Implemented data visualization dashboard
      Tech Stack: JavaScript, jQuery, D3.js`
  },
  {
    role: 'Laravel/Vue.js Developer',
    company: 'Geek Tech Sol',
    period: 'January 2020 - December 2020',
    description: `• Cricket App
      - Developed teams and players management system
      - Built match scheduling with automated notifications
      - Implemented real-time scoring system
      - Created tournament management features
      Tech Stack: Laravel, Pusher, Vue.js, MySQL, Redis
      
    • POS (Point Of Sale)
      - Developed complete POS system with inventory management
      - Built reporting and analytics dashboard
      - Implemented barcode scanning and receipt printing
      Tech Stack: Laravel, Vue.js, Vuetify, MySQL, WebSockets`
  },
  {
    role: 'Laravel Intern',
    company: 'Tektiks Innovative',
    period: 'January 2020 - December 2020',
    description: `• Downtown Slice
      - Developed full-stack web application
      - Implemented responsive design
      - Built admin dashboard
      - Created user authentication system
      Tech Stack: Laravel, Bootstrap, jQuery, Ajax, MySQL`
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
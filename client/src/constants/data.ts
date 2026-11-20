import type { ProjectCategory } from '@/types';



export const PROJECT_CATEGORIES: ProjectCategory[] = [

  'Web Applications',

  'Mobile Applications',

  'HRMS',

  'CRM',

  'Logistics',

  'Personal Projects',

];



export const PROJECTS_PER_PAGE = 6;



export const projects = [

  {

    id: 'freight-forwarding-erp',

    title: 'Freight Forwarding ERP System',

    description:

      'Enterprise logistics platform with sales, CRM, booking, operations, and accounting modules.',

    longDescription:

      'Built a comprehensive Freight Forwarding ERP serving end-to-end logistics workflows — from lead conversion and dynamic rate-card pricing to shipment tracking, job management, and automated invoice/PO/SO generation. Deployed serverless async processing on AWS Lambda, S3, and SQS.',

    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',

    category: 'Logistics' as ProjectCategory,

    technologies: ['React', 'TypeScript', 'Node.js', 'MySQL', 'AWS Lambda', 'S3', 'SQS'],

    featured: true,

  },

  {

    id: 'hrms-platform',

    title: 'HRMS — Human Resource Management System',

    description:

      'Full-featured HR platform with org setup, employee management, attendance, and leave workflows.',

    longDescription:

      'Developed a scalable HRMS with role-based access control, employee onboarding, real-time attendance and shift rosters, and configurable leave policies with multi-level approval workflows.',

    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',

    category: 'HRMS' as ProjectCategory,

    technologies: ['React', 'TypeScript', 'Node.js', 'MySQL'],

    featured: true,

  },

  {

    id: 'crm-sales-hub',

    title: 'CRM Sales & Operations Hub',

    description:

      'Full CRM module with leads, customers, enquiries, quotations, booking forms, and dynamic pricing.',

    longDescription:

      'Built a complete CRM module for the Freight Forwarding ERP — managing the full sales pipeline from lead capture and customer conversion through enquiries, dynamic rate-card quotations, shipment booking, and pricing management. Implemented with HTML5, CSS3, JavaScript (ES6+), React, TypeScript, Node.js, and MySQL.',

    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',

    category: 'CRM' as ProjectCategory,

    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'MySQL'],

    liveUrl: '/projects/crm/index.html',

    featured: true,

  },

  {

    id: 'ecommerce-platform',

    title: 'E-Commerce Platform',

    description:

      'Product listing, shopping cart, and order management system built during product internship.',

    longDescription:

      'Developed a full e-commerce web application with product catalog, cart functionality, and order management. Built with HTML5, CSS3, JavaScript (ES6+), and Flask backend.',

    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',

    category: 'Web Applications' as ProjectCategory,

    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Flask', 'Python'],

    featured: true,

  },

  {

    id: 'attendance-system',

    title: 'Student Attendance System',

    description:

      'Face-recognition based attendance tracker with Python, OpenCV, and a web reporting dashboard.',

    longDescription:

      'Built an automated attendance system using Python and OpenCV for face recognition, paired with a web dashboard for real-time reporting and attendance analytics.',

    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',

    category: 'Personal Projects' as ProjectCategory,

    technologies: ['Python', 'OpenCV', 'Flask', 'HTML5', 'CSS3'],

    featured: true,

  },

  {

    id: 'otp-auth',

    title: 'Sign-In with OTP',

    description:

      'OTP-based authentication system with email and SMS delivery for secure user sign-in.',

    longDescription:

      'Implemented a secure OTP-based authentication flow with email and SMS delivery, session management, and rate limiting for production-ready sign-in experiences.',

    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',

    category: 'Web Applications' as ProjectCategory,

    technologies: ['JavaScript', 'Node.js', 'HTML5', 'CSS3'],

    featured: false,

  },

  {

    id: 'portfolio-website',

    title: 'Developer Portfolio',

    description: 'Modern, responsive portfolio website with dark mode and animations.',

    longDescription:

      'Personal portfolio built with React, TypeScript, and Framer Motion featuring project showcase, contact form, and optimized performance scores.',

    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',

    category: 'Personal Projects' as ProjectCategory,

    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],

    githubUrl: 'https://github.com/Mandapelli',

    featured: false,

  },

];



export const experiences = [

  {

    id: 'exp-1',

    company: 'Voltuswave',

    designation: 'Software Engineer — Full-Stack Developer',

    duration: 'sept 2024 – Present',

    location: 'Hyderabad, India',

    achievements: [

      'Built and maintained production features using React.js, TypeScript, Node.js, and MySQL.',

      'Deployed serverless workflows on AWS Lambda, S3, and SQS for scalable async processing.',

      'Delivered flagship product modules: Freight Forwarding ERP and HRMS across agile sprints.',

    ],

    skills: ['React', 'TypeScript', 'Node.js', 'MySQL', 'AWS Lambda', 'S3', 'SQS'],

  },

  // {

  //   id: 'exp-2',

  //   company: 'Voltuswave',

  //   designation: 'Product Intern',

  //   duration: 'Sep 2024 – May 2025',

  //   location: 'Hyderabad, India',

  //   achievements: [

  //     'Developed e-commerce platform with product listing, cart, and order management (HTML, CSS, JavaScript, Flask).',

  //     'Built face-recognition attendance tracker using Python and OpenCV with web reporting dashboard.',

  //     'Implemented OTP-based authentication with email/SMS delivery for secure sign-in.',

  //   ],

  //   skills: ['HTML5', 'CSS3', 'JavaScript', 'Flask', 'Python', 'OpenCV'],

  // },

];



export const education = [

  {

    id: 'edu-1',

    degree: 'B.Tech — Computer Science & Engineering',

    institution: 'Kakatiya University',

    duration: '2020 – 2024',

    score: 'CGPA: 8.3',

  },

  {

    id: 'edu-2',

    degree: 'Intermediate (MPC)',

    institution: 'TSWERIS Jr. College',

    duration: '2018 – 2020',

    score: '95%',

  },

  {

    id: 'edu-3',

    degree: 'SSC',

    institution: 'TSWERIS, Warangal',

    duration: '2018',

    score: 'CGPA: 9.2',

  },

];



export const skillCategories = [

  {

    category: 'Frontend',

    skills: [

      { name: 'HTML5', level: 92 },

      { name: 'CSS3', level: 90 },

      { name: 'JavaScript (ES6+)', level: 88 },

      { name: 'TypeScript', level: 85 },

      { name: 'React', level: 90 },

    ],

  },

  {

    category: 'Backend',

    skills: [

      { name: 'Node.js', level: 88 },

      { name: 'Flask', level: 80 },

      { name: 'Python', level: 82 },

    ],

  },

  {

    category: 'Database',

    skills: [

      { name: 'MySQL', level: 85 },

      { name: 'SQL', level: 88 },

    ],

  },

  {

    category: 'Cloud — AWS',

    skills: [

      { name: 'AWS Lambda', level: 80 },

      { name: 'Amazon S3', level: 82 },

      { name: 'Amazon SQS', level: 78 },

    ],

  },

  {

    category: 'Tools & Platforms',

    skills: [

      { name: 'Git', level: 88 },

      { name: 'VS Code', level: 92 },

      { name: 'Postman', level: 85 },

      { name: 'Jupyter Notebook', level: 75 },

      { name: 'Eclipse', level: 70 },

    ],

  },

];



export const certifications = [

  {

    id: 'cert-sql-mindluster',

    name: 'SQL from Zero',

    provider: 'Mind Luster',

    date: 'January 17, 2024',

    verificationUrl: 'https://www.mindluster.com/certificate/15424134189',

    credentialId: '15424134189',

    duration: '17 hours',

    image: '/certifications/sql-from-zero-mindluster.png',

    badge: 'sql',

  },

];



export const testimonials = [

  {

    id: 'test-1',

    name: 'Team Lead',

    role: 'Engineering Manager',

    company: 'Voltuswave',

    content:

      'Mounika consistently delivers production-ready features across our ERP and HRMS modules. Her ability to work across the full stack — from React frontends to AWS serverless backends — makes her a valuable team member.',

    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',

  },

  {

    id: 'test-2',

    name: 'Product Manager',

    role: 'Product Lead',

    company: 'Voltuswave',

    content:

      'During her internship, Mounika took ownership of multiple product features — from e-commerce flows to face-recognition attendance — and delivered them with attention to detail and clean code.',

    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',

  },

  {

    id: 'test-3',

    name: 'Senior Developer',

    role: 'Tech Lead',

    company: 'Voltuswave',

    content:

      'Mounika picks up new technologies quickly and applies them effectively. Her work on the Freight Forwarding ERP and HRMS platforms demonstrates strong full-stack engineering skills.',

    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',

  },

];


export const SITE_CONFIG = {

  name: import.meta.env.VITE_SITE_NAME || 'Mandapelli Mounika',

  profileImage: '/images/profile.png',

  title: 'Software Engineer | Full-Stack Developer',

  description:

    import.meta.env.VITE_SITE_DESCRIPTION ||

    'Software Engineer and Full-Stack Developer specializing in React, TypeScript, Node.js, MySQL, and AWS serverless architecture.',

  url: import.meta.env.VITE_SITE_URL || 'https://mounikamandapelli.dev',

  email: 'mounikamandapelli08@gmail.com',

  phone: '+91-8639000830',

  location: 'Hyderabad, India',

  github: 'https://github.com/Mandapelli',

  linkedin: 'https://linkedin.com/in/mounika',

  twitter: '',

  resumeUrl: '/resume/index.html',

} as const;



export const NAV_LINKS = [

  { label: 'Home', href: '/' },

  { label: 'About', href: '/about' },

  { label: 'Projects', href: '/projects' },

  { label: 'Experience', href: '/experience' },

  { label: 'Certifications', href: '/certifications' },

  { label: 'Contact', href: '/contact' },

] as const;



export const TYPING_ROLES = [

  'Software Engineer',

  'Full-Stack Developer',

  'React Specialist',

  'Node.js Engineer',

  'AWS Serverless Developer',

] as const;



export const STATS = [

  { label: 'Years Experience', value: 1, suffix: '+' },

  { label: 'Projects Delivered', value: 5, suffix: '+' },

  { label: 'Technologies', value: 15, suffix: '+' },

  { label: 'Modules Built', value: 10, suffix: '+' },

] as const;


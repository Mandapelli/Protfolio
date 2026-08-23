export type ProjectCategory =
  | 'Web Applications'
  | 'Mobile Applications'
  | 'HRMS'
  | 'CRM'
  | 'Logistics'
  | 'Personal Projects';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  designation: string;
  duration: string;
  location: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  date: string;
  verificationUrl?: string;
  badge?: string;
  image?: string;
  credentialId?: string;
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

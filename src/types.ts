export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack' | 'Frontend' | 'AI / ML' | 'DevTools' | 'OpenSource';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
  image: string;
  metrics: string;
  longDescription: string;
  architectureNotes?: string[];
  keyFeatures: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Open Source' | 'Internship' | 'Academic Project';
  description: string;
  achievements: string[];
  techStack: string[];
  companyUrl?: string;
}

export interface SkillItem {
  name: string;
  level?: number; // 0-100
  iconName?: string;
  experienceYears?: string;
  category: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  score: string;
  period: string;
  location: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isOffline?: boolean;
}

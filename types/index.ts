export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  imageUrl: string;
  publishedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}
export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  techStack: string[];
  startDate?: string;
  endDate?: string;
  heroImageUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
  images?: string[];
}

export interface TimelineEntry {
  id: string;
  title: string;
  date: string; // human-friendly, e.g. "2024"
  summary: string;
  description?: string;
  imageUrl?: string;

  // Optional links
  projectSlug?: string | null;    // /projects/:slug
  experienceSlug?: string | null; // /experience/:slug
  educationSlug?: string | null;  // /education/:slug

  tags?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 0–100
  categoryId: string;
  icon?: string;
}

export type ExperienceItem = {
  id: string;
  slug: string;
  role: string;
  org: string;
  location?: string;
  period?: string;
  description: string;
  highlights?: string[];
};

export type EducationItem = {
  id: string;
  slug: string; 
  degree: string;      // e.g. "B.Sc. Computer Science"
  field?: string;      // optional, if you want a separate field
  school: string;
  location?: string;
  period: string;      // e.g. "2017 – 2020"
  description: string;
  highlights?: string[];
};

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  techStack: string[];
  startDate?: string; // ISO date
  endDate?: string; // optional
  heroImageUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface TimelineEntry {
  id: string;
  title: string;
  date: string; // human-friendly, e.g. "2024"
  summary: string;
  description?: string;
  imageUrl?: string;
  projectSlug?: string | null; // link to Project if exists, else null
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
import type { SkillCategory, Skill } from '../types/content';

export const skillCategories: SkillCategory[] = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'tools', name: 'Tools' },
];

export const skills: Skill[] = [
  { id: 'react', name: 'React', level: 90, categoryId: 'frontend' },
  { id: 'ts', name: 'TypeScript', level: 88, categoryId: 'frontend' },
  { id: 'tailwind', name: 'TailwindCSS', level: 85, categoryId: 'frontend' },
  { id: 'node', name: 'Node.js', level: 75, categoryId: 'backend' },
  { id: 'express', name: 'Express', level: 70, categoryId: 'backend' },
  { id: 'git', name: 'Git', level: 80, categoryId: 'tools' },
  { id: 'vite', name: 'Vite', level: 78, categoryId: 'tools' },
];
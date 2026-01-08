import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    slug: 'pcb-portfolio',
    title: 'PCB-Inspired Portfolio',
    shortDescription: 'A personal portfolio themed after schematic and PCB editors.',
    longDescription:
      'A React + Tailwind portfolio with advanced theming and scroll-based PCB-style animations.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'signal-visualizer',
    title: 'Signal Visualizer',
    shortDescription: 'Interactive visualization of digital/analog signals.',
    techStack: ['React', 'D3.js', 'TypeScript'],
  },
];
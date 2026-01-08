import type { TimelineEntry } from '../types/content';

export const timeline: TimelineEntry[] = [
  {
    id: '2024-portfolio',
    title: 'Launched PCB-Inspired Portfolio',
    date: '2024',
    summary: 'Designed and built this thematic portfolio site.',
    description:
      'Explored PCB metaphors for navigation and storytelling using React and Tailwind.',
    imageUrl: '/images/portfolio-thumb.png',
    projectSlug: 'pcb-portfolio',
    tags: ['Portfolio', 'React', 'Design'],
  },
  {
    id: '2023-visualizer',
    title: 'Signal Visualizer',
    date: '2023',
    summary: 'Created a tool to visualize oscilloscope-like signals.',
    projectSlug: 'signal-visualizer',
  },
  {
    id: '2022-career-shift',
    title: 'Transition to Frontend Architecture',
    date: '2022',
    summary: 'Focused on front-end architecture and design systems.',
    projectSlug: null, // timeline node only
  },
];
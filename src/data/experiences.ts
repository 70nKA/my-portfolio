import type { ExperienceItem } from '../types/content';

export const experiences: ExperienceItem[] = [
  {
    id: 'frontend-architect',
    role: 'Frontend Architect',
    org: 'Example Company',
    location: 'Remote',
    period: '2023 – Present',
    description:
      'Leading the design and implementation of complex React frontends with a focus on performance, DX, and design systems.',
    highlights: [
      'Introduced a component library aligned with design tokens and theming (light schematic / dark PCB).',
      'Reduced bundle size and improved perceived performance on key flows.',
    ],
  },
  {
    id: 'association',
    role: 'Board Member',
    org: 'Electronics & Maker Association',
    location: 'City, Country',
    period: '2021 – 2023',
    description:
      'Organized workshops and meetups around PCB design, embedded systems, and frontend visualizations for hardware projects.',
  },
  // Add more…
];
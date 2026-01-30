import type { EducationItem } from '../types/content';

export const education: EducationItem[] = [
  {
    id: 'bsc-compsci',
    slug: 'bsc-compsci',
    degree: 'B.Sc. Computer Science',
    field: 'Computer Science',
    school: 'Example University',
    location: 'City, Country',
    period: '2017 – 2020',
    description:
      'Focused on software engineering, algorithms, and human–computer interaction with a strong interest in frontend architecture.',
    highlights: [
      'Graduated with honors.',
      'Capstone project on interactive visualization of hardware systems.',
    ],
  },
  {
    id: 'hs-electronics',
    slug: 'hs-electronics',
    degree: 'High School',
    field: 'Electronics / Technical Program',
    school: 'Technical High School',
    location: 'City, Country',
    period: '2013 – 2017',
    description:
      'Built a foundation in electronics, PCB design, and embedded systems that heavily influences my UI work.',
  },
];

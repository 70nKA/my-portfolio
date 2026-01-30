import type { EducationItem } from '../types/content';

export const education: EducationItem[] = [
  {
    id: 'msc-electronics-compsys',
    slug: 'msc-electronics-compsys',
    degree: 'Master of Electronics and Computer Engineering (in progress)',
    field: 'Electronics and Computer Engineering',
    school: 'FESB – University of Split',
    location: 'Split, Croatia',
    period: '2023 – Present',
    description:
      'Graduate studies focused on embedded systems, digital and analog electronics, and computer engineering, with strong emphasis on hardware design and low-level development.',
    highlights: [
      'Master thesis: design and validation of a BMS master PCB for a Formula Student electric race car.',
      'Coursework in embedded systems, digital design, and power electronics.',
    ],
  },
  {
    id: 'bsc-electrical-it',
    slug: 'bsc-electrical-it',
    degree: 'B.Sc. Electrical Engineering and Information Technology',
    field: 'Electrical Engineering and IT',
    school: 'FESB – University of Split',
    location: 'Split, Croatia',
    period: '2019 – 2023',
    description:
      'Built a strong foundation in electronics, embedded systems, communication interfaces, and computer engineering.',
    highlights: [
      'Bachelor thesis: implemented an Ethernet TX driver on a PIC32MZ EF using bare-metal C, DMA, and RMII.',
    ],
  },
  {
    id: 'electrical-technician',
    slug: 'electrical-technician',
    degree: 'Electrical Technician (Vocational Secondary School)',
    field: 'Electrical Installations and Maintenance',
    school: 'Vocational Secondary School – Electrical Technician Program',
    location: 'Croatia',
    period: 'Completed 2018',
    description:
      'Vocational training focused on residential electrical installations, cabling, and safety regulations.',
    highlights: [
      'Hands-on experience with fuse-box wiring, socket and light fixture installation, and safe 230 V practices.',
    ],
  },
];

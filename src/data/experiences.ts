// src/content/experiences.ts
import type { ExperienceItem } from '../types/content';

export const experiences: ExperienceItem[] = [
  {
    id: 'hardware-fesb-team-racing',
    slug: 'hardware-fesb-team-racing',
    role: 'Hardware Design Engineer',
    org: 'FESB Team Racing (Formula Student)',
    location: 'Split, Croatia',
    period: 'Dec 2022 – Present',
    description: 'Designing and validating critical power and control electronics for an electric Formula Student race car.',
    highlights: [
      'BMS Master Design: Led the schematic and layout of a high-voltage BMS master board in Altium Designer, managing isolation and signal integrity on a 2-layer board.',
      'Analog Stability Fixes: Resolved latching logic failures by identifying input impedance mismatches and migrating to high-precision, high-input-resistance Op-Amps.',
      'Switching & Protection: Designed relay driver circuits with flyback diode protection to mitigate inductive kickback during fault-state triggering.',
      'Enclosure Design: Designed mechanical housings in SolidWorks, ensuring robust integration and electrical clearances under high-vibration racing conditions.',
    ],
  },
  {
    id: 'embedded-ericsson',
    slug: 'embedded-ericsson',
    role: 'Embedded Software Engineer (C/C++)',
    org: 'Ericsson Nikola Tesla',
    location: 'Split, Croatia',
    period: 'Dec 2022 – Mar 2025',
    description: 'Pioneered low-level clock synchronization and firmware bring-up for next-gen telecommunications radio hardware.',
    highlights: [
      'Clock Synchronization (10MHz): Led the implementation of the first 10MHz reference feature on Kryton-based radios, controlling chips for global clock and signal references.',
      'R&D Troubleshooting: Decoded SPI messages manually to identify ASIC-to-Clock sequencing errors; identified internal ASIC clock divider limitations through signal analysis.',
      'HW/SW Collaboration: Collaborated with HW teams to propose physical pin reassignments and signal amplification for improved reference stability.',
      'Automation & CI/CD: Engineered Python/Bash scripts for high-standard hardware validation within Jenkins/Gerrit CI workflows.',
    ],
  },
  {
    id: 'lab-demonstrator-fesb',
    slug: 'lab-demonstrator-fesb',
    role: 'Laboratory Demonstrator (Teaching Assistant)',
    org: 'FESB – University of Split',
    location: 'Split, Croatia',
    period: '2020–2023, 2026 (intermittent)',
    description:
      'Assisted professors in laboratory classes, supporting students with exercises, debugging issues, and developing lab materials.',
    highlights: [
      'Subjects covered: Engineering and Graphic Presentation, Computers and Programming, Digital Electronics.',
      'Practical Debugging: Helped students troubleshoot hardware and software problems in real-time during laboratory sessions.',
      'Content Creation: Authored and updated lab resource materials and instructions to improve clarity and student understanding.',
    ],
  },
  {
    id: 'optical-technician',
    slug: 'optical-technician',
    role: 'Optical Technician (Field Assistant)',
    org: 'Telecommunications – Optical Access Installations',
    location: 'Croatia',
    description:
      'Assisting with last‑mile optical fiber installations from the distribution point to end‑customer premises.',
    highlights: [
      'Perform fiber splicing, connector preparation, and optical cable management for FTTH connections.',
      'Route transparent indoor fiber through customer homes, including drilling, fixing hooks, and planning discreet cable paths.',
      'Handle outdoor distribution cabling from the last distribution point to the building or house entry.',
      'Work directly in customers’ homes, managing expectations and communication professionally.',
    ],
  },
  {
    id: 'electrical-tech-installations',
    slug: 'electrical-tech-installations',
    role: 'Electrical Technician',
    org: 'Residential Electrical Installations (Freelance)',
    location: 'Various Locations, Croatia',
    period: '2018 – Present',
    description:
      'Performed residential electrical installations and small-scale projects, focusing on power distribution and safety compliance.',
    highlights: [
      'Completed full-house and apartment installations: cable routing, mounting sockets, and installing lighting fixtures.',
      'Designed and wired fuse boxes and power distribution for entire apartments, adhering to safety standards.',
      'Responsible for ordering supplies, planning cable protection needs, and tracking material logistics.',
    ],
  },
  {
    id: 'conference-support-softcom-splitech',
    slug: 'conference-support-softcom-splitech',
    role: 'Conference Technical Support & Organizer',
    org: 'SoftCOM & Splitech Conferences',
    location: 'Split, Croatia',
    period: '2020 – 2024',
    description:
      'Part of the organizing and technical support teams for international scientific conferences.',
    highlights: [
      'Provided technical support during sessions, assisting chairs and presenters with A/V and logistics.',
      'Managed session time-slot distribution and coordinated collection of scientific paper documentation.',
      'Helped with on-site setup, room preparation, and post-conference teardown.',
    ],
  },
  {
    id: 'cafe-bar-lido',
    slug: 'cafe-bar-lido',
    role: 'Waitress & Bartender',
    org: 'Cafe Bar Lido',
    location: 'Stobreč, Croatia',
    period: '2018 – 2025',
    description:
      'Worked as a waitress and bartender in a busy seaside café, managing bar and floor operations under pressure.',
    highlights: [
      'Prepared drinks, served guests, and handled payments while maintaining a welcoming atmosphere.',
      'Created and managed order lists for supplies, ensuring stock during peak periods.',
      'Developed strong multitasking and communication skills in a high-pressure, customer-facing role.',
    ],
  },
];
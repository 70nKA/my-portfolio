import type { ExperienceItem } from '../types/content';

export const experiences: ExperienceItem[] = [
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
      'Handle outdoor distribution cabling (black 4‑wire cable) from the last distribution point to the building or house entry.',
      'Work directly in customers’ homes, managing expectations and communication professionally in sometimes stressful situations.',
      'Support setup and teardown on site, ensuring clean, safe, and well-documented installations.',
    ],
  },
  {
    id: 'hardware-fesb-team-racing',
    slug: 'hardware-fesb-team-racing',
    role: 'Hardware Design Engineer',
    org: 'FESB Team Racing (Formula Student)',
    location: 'Split, Croatia',
    period: 'Dec 2022 – Present',
    description:
      'Designing and validating electronic hardware for a Formula Student electric race car, with a focus on BMS and low-voltage systems.',
    highlights: [
      'Led schematic design and PCB layout of a custom BMS master board in Altium Designer.',
      'Performed board bring-up and debugging, resolving routing issues, component mistakes, and analog stability problems.',
      'Designed the first relay board version and contributed to debugging and validation of later revisions.',
      'Designed the mechanical enclosure and carrier for the low-voltage battery pack in SolidWorks, ensuring robust mounting and integration.',
    ],
  },
  {
    id: 'embedded-ericsson',
    slug: 'embedded-ericsson',
    role: 'Embedded Software Engineer (C/C++)',
    org: 'Ericsson Nikola Tesla',
    location: 'Split, Croatia',
    period: 'Dec 2022 – Mar 2025',
    description:
      'Worked on low-level firmware and synchronization drivers for next-generation radio hardware in an embedded Linux environment.',
    highlights: [
      'Developed and maintained low-level sync drivers in Embedded C, improving radio reliability and synchronization performance.',
      'Planned and implemented tasks for the first 10 MHz feature on Kryton-based radios, coordinating requirements, implementation, and verification with senior engineers.',
      'Supported launch of new hardware platforms through firmware bring-up, debugging, and regression testing for security, reliability, and performance.',
      'Created Bash and Python scripts to automate hardware validation and configuration-file conversion, reducing manual effort and increasing test coverage.',
      'Used Jenkins CI, JSON-based test setups, and internal test frameworks for automated test execution, result monitoring, and troubleshooting.',
      'Collaborated in a large Agile/SCRUM team using Git and Gerrit for code review, participating in sprint planning, daily stand-ups, and CI workflows.',
      'Operated in embedded Linux environments, using Bash for running tests, parsing logs, and interacting with firmware and hardware.',
    ]
  },
  {
    id: 'electrical-tech-installations',
    slug: 'electrical-tech-installations',
    role: 'Electrical Technician',
    org: 'Residential Electrical Installations (Freelance)',
    location: 'Various Locations, Croatia',
    period: '2018 – Present',
    description:
      'Performed residential electrical installations and small-scale projects, from rough-in wiring to final fixtures and safety checks.',
    highlights: [
      'Completed full-house and apartment installations: cable routing, mounting sockets and switches, and installing lighting fixtures.',
      'Designed and wired fuse boxes and power distribution for entire apartments, adhering to safety standards.',
      'Responsible for ordering supplies and materials, planning cable and protection needs, and tracking tool usage and amortization.',
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
      'Guided students through lab assignments, explaining concepts and helping them troubleshoot hardware and software problems.',
      'Co‑taught laboratory sessions alongside professors, reinforcing theoretical content with practical examples.',
      'Authored and updated lab resource materials and instructions to improve clarity and student understanding.',
      'Subjects covered: Engineering and Graphic Presentation, Computers and Programming, Digital Electronics.',
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
      'Provided technical support during sessions and meetings, assisting chairs and presenters with A/V and logistics.',
      'For Splitech, managed session time-slot distribution and coordinated collection of scientific paper documentation.',
      'Helped with on-site setup, room preparation, and post-conference teardown (“clean up”) for both conferences.',
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
      'Worked as a waitress and bartender in a busy seaside café, often managing the bar and floor alone.',
    highlights: [
      'Prepared drinks, served guests, and handled payments while maintaining a welcoming atmosphere.',
      'Created and managed order lists for supplies, ensuring the bar was stocked during peak periods.',
      'Developed strong multitasking, communication, and customer-facing skills under time pressure.',
    ],
  },
];
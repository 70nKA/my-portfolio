// src/content/timeline.ts
import type { TimelineEntry } from '../types/content';

export const timeline: TimelineEntry[] = [
  {
    id: '2026-master-thesis-bms-master',
    title: 'Master Thesis: BMS Master PCB for Formula Student EV',
    date: '2026',
    summary:
      'End-to-end design of a Battery Management System (BMS) master PCB for a Formula Student electric race car.',
    description:
      'Completed the design and validation of a custom BMS master PCB in Altium, handling power paths, safety circuitry, and data collection from distributed slave boards.',
    imageUrl: 'images/journey/BMS_master.jpg',
    projectSlug: 'bms-master-pcb',
    tags: ['Hardware', 'PCB Design', 'Altium', 'BMS', 'Formula Student'],
  },
  {
    id: '2026-pcb-portfolio',
    title: 'Launched PCB-Inspired Portfolio',
    date: '2026',
    summary:
      'Designed and built this PCB-inspired portfolio to showcase projects, experience, and education.',
    description:
      'Implemented a fully responsive layout, mobile navigation with portals, dark/light theming, and reusable UI primitives. The site itself is a project and a living playground for frontend architecture ideas.',
    projectSlug: 'pcb-inspired-portfolio',
    tags: ['Portfolio', 'React', 'Tailwind CSS'],
  },
  {
    id: '2025-lv-battery-carrier',
    title: 'LV Battery Carrier & Enclosure (Formula Student)',
    date: '2025',
    summary:
      'Designed the low-voltage battery carrier and enclosure in SolidWorks.',
    description:
      'Created a robust mechanical carrier and enclosure for the Formula Student EV low-voltage battery pack, ensuring secure mounting, serviceability, and safe cable routing.',
    imageUrl: '/my-portfolio/images/journey/LV_battery_carrier_single.png',
    projectSlug: 'lv-battery-carrier',
    tags: ['Mechanical', 'SolidWorks', 'Formula Student'],
  },
  {
    id: '2023-bachelors-thesis-ethernet',
    title: "Bachelor's Thesis: Bare-Metal Ethernet TX Driver",
    date: '2023',
    summary:
      'Implemented an Ethernet transmit driver on a PIC32MZ using bare-metal C, DMA, and RMII.',
    description:
      'Designed and coded a low-level Ethernet TX driver, working directly with PIC32MZ registers, DMA engines, and interrupts to achieve reliable frame transmission.',
    imageUrl: 'images/journey/Ethernet_TX.png',
    projectSlug: 'ethernet-tx-driver',
    tags: ['Embedded', 'C', 'Ethernet', 'DMA'],
  },
  {
    id: '2022-ericsson-start',
    title: 'Joined Ericsson Nikola Tesla as Embedded Software Engineer',
    date: '2022',
    summary:
      'Started working on low-level C/C++ firmware and sync drivers for radio hardware.',
    description:
      'Joined Ericsson Nikola Tesla in Split as an Embedded Software Engineer, contributing to synchronization drivers, test automation, and bring-up of new radio platforms.',
    experienceSlug: 'embedded-ericsson',
    tags: ['Industry', 'Embedded', 'C/C++'],
  },
  {
    id: '2022-fesb-team-racing',
    title: 'Joined FESB Team Racing (Formula Student)',
    date: '2022',
    summary:
      'Became hardware design engineer for the electric Formula Student race car.',
    description:
      'Worked on BMS, relay boards, and low-voltage battery hardware, including PCB design, debugging, and mechanical integration.',
    imageUrl: 'images/journey/FESB_Racing.jpeg',
    projectSlug: 'bms-master-pcb',
    tags: ['Formula Student', 'Hardware', 'BMS'],
  },
  {
    id: '2021-DAC',
    title: 'Binary Weighted Resistor DAC design implementation',
    date: '2021',
    summary:
      'Designed and built a binary weighted resistor DAC with an op-amp invert.',
    description:
      'The design included positive and negative power supplies to support diffrent types of analog output signals.',
    projectSlug: 'DAC-breadboard',
    tags: ['Hardware', 'Analog Design', 'Op-Amps', 'DAC'],
  },
  {
    id: '2018-smart-lighting',
    title: 'Smart Lighting System & Interface PCB',
    date: '2018',
    summary:
      'Designed a smart lighting system with a custom PCB and 230 V installation.',
    description:
      'Combined household wiring with a low-voltage control PCB using relays and optocouplers, laying the foundation for later hardware design work.',
    imageUrl: 'images/journey/installation.png',
    projectSlug: 'smart-lighting-system',
    tags: ['Early Project', 'Electrical Installation', 'PCB'],
  },
];
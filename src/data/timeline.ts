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
    tags: ['Hardware', 'PCB Design', 'Altium', 'BMS'],
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
    title: 'Joined Ericsson Nikola Tesla as Embedded Engineer',
    date: '2022',
    summary:
      'Started working on low-level synchronization drivers for new radio hardware platforms.',
    description:
      'Began industry work on embedded Linux-based radio systems, contributing to synchronization drivers, automated testing, and CI workflows.',
    imageUrl: 'images/journey/Ericsson.jpg',
    projectSlug: 'radio-sync-drivers',
    tags: ['Industry', 'Embedded C', 'Radio'],
  },
  {
    id: '2022-fesb-team-racing',
    title: 'Joined FESB Team Racing (Formula Student)',
    date: '2022',
    summary:
      'Became hardware design engineer for the electric Formula Student race car.',
    description:
      'Worked on BMS, relay boards, and low-voltage battery hardware, including PCB design, debugging, and mechanical integration.',
    imageUrl: 'images/journey/FESB_team_racing.jpg',
    projectSlug: 'bms-master-pcb',
    tags: ['Formula Student', 'Hardware', 'BMS'],
  },
  {
    id: '2018-smart-lighting',
    title: 'Smart Lighting System & Interface PCB',
    date: '2018',
    summary:
      'Designed a smart lighting system with a custom PCB and 230 V installation.',
    description:
      'Combined household wiring with a low-voltage control PCB using relays and optocouplers, laying the foundation for later hardware design work.',
    imageUrl: 'images/journey/Smart_lighting.jpg',
    projectSlug: 'smart-lighting-system',
    tags: ['Early Project', 'Electrical Installation', 'PCB'],
  },
];
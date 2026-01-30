// src/content/projects.ts
import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    slug: 'bms-master-pcb',
    title: 'Master Thesis: BMS Master PCB for Formula Student EV',
    shortDescription:
      'End-to-end design of a Battery Management System (BMS) master PCB for a Formula Student electric race car.',
    longDescription:
      'Designed, laid out, and validated a custom BMS master PCB responsible for monitoring cell voltages and temperatures, \
managing pre-charge and discharge paths, and ensuring safe operation of a Formula Student electric race car battery pack. \
Work included schematic capture and PCB layout in Altium Designer, component selection, board bring-up, hardware debugging, \
and dedicated test firmware for communication buses and sensor interfaces (CAN, SPI, ADCs, GPIOs).',
    techStack: [
      'Altium Designer',
      'STM32',
      'CAN',
      'SPI',
      'High-Voltage Design',
      'Board Bring-up',
      'Testing & Validation',
      'Firmware',
      'Documentation',
    ],
    liveUrl: '#',
    repoUrl: '#', // private / team-owned
    heroImageUrl: '/my-portfolio/images/journey/BMS_master.jpg',
    images: ['/my-portfolio/images/journey/BMS_master.jpg', '/my-portfolio/images/journey/BMS_master.jpg'],
  },
  {
    slug: 'ethernet-tx-driver',
    title: "Bachelor's Thesis: Bare-Metal Ethernet TX Driver (PIC32MZ)",
    shortDescription:
      'Bare-metal Ethernet transmit driver on a PIC32MZ microcontroller with DMA and RMII.',
    longDescription:
      'Implemented a low-level Ethernet TX driver in C for a PIC32MZ microcontroller. \
Configured RMII, DMA channels, interrupt handling, and buffer management to reliably transmit Ethernet frames. \
Focused on register-level control, cache coherency, and deterministic behavior without an RTOS.',
    techStack: ['C', 'PIC32MZ', 'Ethernet', 'RMII', 'DMA', 'Interrupts', 'Bare-Metal Firmware'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'smart-lighting-system',
    title: 'Smart Lighting System & Interface PCB',
    shortDescription:
      'High-school project combining 230 V household wiring with a custom low-voltage control PCB.',
    longDescription:
      'Designed and built a complete smart lighting system, including 230 V residential wiring and a custom interface PCB. \
The board safely connected a low-voltage Arduino control circuit to mains-powered lighting using isolation, optocouplers, and relays. \
Also handled installation of cabling, sockets, switches, and fixtures according to safety practices.',
    techStack: ['Analog Design', 'Relays', 'Optocouplers', 'Arduino', '230 V Wiring', 'Electrical Installation'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'analog-digital-projects',
    title: 'Analog & Digital Design Projects',
    shortDescription:
      'Selection of university projects: R-2R DAC and digital logic conversion board.',
    longDescription:
      'Built a 4-bit R-2R DAC with an op-amp buffer as an introduction to basic data conversion and analog signal conditioning. \
Designed a digital logic conversion board to adapt a motorbike brake light actuation mechanism, focusing on signal levels, \
noise immunity, and robust wiring in an automotive environment.',
    techStack: ['R-2R DAC', 'Op-Amps', 'Digital Logic', 'Prototyping', 'Testing'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'radio-sync-drivers',
    title: 'Radio Synchronization Drivers (Ericsson Nikola Tesla)',
    shortDescription:
      'Low-level synchronization drivers for next-generation radio hardware.',
    longDescription:
      'Contributed to the development and maintenance of synchronization drivers in Embedded C for new radio platforms. \
Worked on configuration flows, timing behavior, and regression testing in embedded Linux environments. \
Used automated test frameworks, scripting, and CI (Jenkins, Gerrit, Git) to ensure reliability and performance. \
Code is proprietary, so only an overview is provided here.',
    techStack: ['Embedded C', 'Embedded Linux', 'Radio Hardware', 'Synchronization', 'Python', 'Bash', 'Jenkins', 'Git', 'Gerrit'],
    liveUrl: '#',
    repoUrl: '#', // proprietary
  },
];
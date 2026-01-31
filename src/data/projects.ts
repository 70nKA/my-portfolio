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
    liveUrl: 'https://fesb-my.sharepoint.com/:v:/g/personal/agrbav02_fesb_hr/IQBY0IsdodtlRr0t0xaUYEvDAZuQSea7t0g4Y6L2IG_hV8s?e=TgnmyK',
    heroImageUrl: '/my-portfolio/images/journey/BMS_master.jpg',
  },
  {
    slug: 'pcb-inspired-portfolio',
    title: 'PCB-Inspired Portfolio',
    shortDescription:
      'This portfolio site themed after schematic and PCB editors, built with React, TypeScript, and Tailwind CSS.',
    longDescription:
      'A personal portfolio that combines frontend architecture best practices with a visual language inspired by schematics and PCB layout tools. It features a responsive layout, dark/light theming, smooth section navigation, and reusable UI primitives for cards, headings, and timeline entries.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    repoUrl: 'https://github.com/your-username/pcb-inspired-portfolio', // change to your repo
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
    liveUrl: 'https://fesb-my.sharepoint.com/:v:/g/personal/agrbav02_fesb_hr/IQBC1cRWtR-0RKNg8CGofrLNARAHe0fUzWtY6EApwBuT410?e=AHSRFM',
    repoUrl: 'https://github.com/70nKA/zavrsni_v3_1',
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
    liveUrl: 'https://fesb-my.sharepoint.com/:v:/g/personal/agrbav02_fesb_hr/IQAeQaGC83AGRYfPa7l1lhycAXGwefWUwIx1c6PNGwxInoA?e=zjbF05',
    repoUrl: 'https://github.com/70nKA/maturalni_rad',
    images: ['/my-portfolio/images/projects/smart-lighting-system/scheme_lights.png', 
      '/my-portfolio/images/projects/smart-lighting-system/scheme_sockets.png', 
      '/my-portfolio/images/projects/smart-lighting-system/fuse_box.png',
      '/my-portfolio/images/projects/smart-lighting-system/build.png',
      '/my-portfolio/images/projects/smart-lighting-system/installation.png',
      '/my-portfolio/images/projects/smart-lighting-system/lv_2_hw_pcb.jpg'],
  },
  {
    slug: 'DAC-breadboard',
    title: 'Binary Weighted Resistor DAC design implementation',
    shortDescription:
      'Simple design and implementation of a binary weighted resistor DAC.',
    longDescription:
      'Binary weighted resistor DAC with 12V positive and negative power rails to support different types of analog output signals. \
The DAC has an inverting oputput so for testing purposes another op-amp stage is used to obtain non-inverted voltage lowered output signal so that the ouput can be connected to Arduino analog input. \
Arduino is used to provide digital input signals (binary values for a ramp signal) and read back the analog output voltage on Aroudino IDE monitor which in this case was used as an osilloscope for validation. \
Later on I aquired an oscilloscope to properly validate the design and its performance which can be seen in the provided demo.',
    techStack: ['Hardware', 'Analog Design', 'Op-Amps', 'DAC', 'Prototyping', 'Testing'],
    liveUrl: 'https://fesb-my.sharepoint.com/:v:/g/personal/agrbav02_fesb_hr/IQCPj2EJMRttS5rTK2t3YpUHAVer01OdeCdE_zX-7M_8Hyw?e=6EAYQ4',
  },
//   {
//     slug: 'radio-sync-drivers',
//     title: 'Radio Synchronization Drivers (Ericsson Nikola Tesla)',
//     shortDescription:
//       'Low-level synchronization drivers for next-generation radio hardware.',
//     longDescription:
//       'Contributed to the development and maintenance of synchronization drivers in Embedded C for new radio platforms. \
// Worked on configuration flows, timing behavior, and regression testing in embedded Linux environments. \
// Used automated test frameworks, scripting, and CI (Jenkins, Gerrit, Git) to ensure reliability and performance. \
// Code is proprietary, so only an overview is provided here.',
//     techStack: ['Embedded C', 'Embedded Linux', 'Radio Hardware', 'Synchronization', 'Python', 'Bash', 'Jenkins', 'Git', 'Gerrit'],
//     liveUrl: '#',
//     repoUrl: '#', // proprietary
//   },
];
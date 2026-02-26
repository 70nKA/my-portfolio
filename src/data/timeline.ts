// src/content/timeline.ts
import type { TimelineEntry } from '../types/content';

export const timeline: TimelineEntry[] = [
  {
    id: '2026-master-thesis-bms-master',
    title: 'Master Thesis: 480V BMS Master R&D',
    date: '2026',
    summary:
      'Engineered a safety-critical BMS Master PCB for a Formula Student EV power-train.',
    description:
      'Managed the full cycle from simulation to 2-layer HW implementation. Solved thermal throttling issues using IR imaging and optimized power budgets for stable firmware testing.',
    imageUrl: 'images/journey/BMS_master.jpg',
    projectSlug: 'bms-master-pcb',
    tags: ['Hardware', 'BMS', 'Thermal Analysis', 'Power Budgeting'],
  },
  {
    id: '2026-pcb-portfolio',
    title: 'Launched PCB-Inspired Portfolio',
    date: '2026',
    summary:
      'Built a React/TypeScript portfolio site modeled after professional ECAD software.',
    description:
      'A personal technical playground showcasing hardware projects through a frontend architecture that mimics a PCB editor interface.',
    projectSlug: 'pcb-inspired-portfolio',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
  },
  {
    id: '2025-lv-battery-carrier',
    title: 'LV Battery Carrier (Formula Student)',
    date: '2025',
    summary:
      'Mechanical engineering of low voltage battery carrier.',
    description:
      'Designed a SolidWorks enclosure ensuring mechanical stability and electrical clearance for the LV battery.',
    imageUrl: '/my-portfolio/images/journey/LV_battery_carrier_single.png',
    projectSlug: 'lv-battery-carrier',
    tags: ['SolidWorks', 'Mechanical Design', 'Vibration Mitigation'],
  },
  {
    id: '2025-fpga-sobel-filter',
    title: 'FPGA Sobel Filter Implementation',
    date: '2025',
    summary:
      'Hardware-accelerated edge detection using Verilog.',
    description:
      'Implemented a 3x3 convolution kernel on an FPGA for real-time image processing, focusing on timing closure and resource utilization.',
    imageUrl: '/my-portfolio/images/journey/fpga_sobel_filter.jpg',
    projectSlug: 'fpga-sobel-filter',
    tags: ['Verilog', 'FPGA', 'Image Processing', 'RTL'],
  },
  {
    id: '2023-bachelors-thesis-ethernet',
    title: "Bachelor's Thesis: Bare-Metal Ethernet Driver",
    date: '2023',
    summary:
      'Developed a PIC32MZ Ethernet TX driver with manual physical-layer validation.',
    description:
      'Solved complex Cache Coherency bugs and performed manual Manchester decoding via oscilloscope to validate a custom bare-metal Ethernet TX driver.',
    imageUrl: 'images/journey/Ethernet_TX.png',
    projectSlug: 'ethernet-tx-driver',
    tags: ['Embedded C', 'DMA', 'Cache Coherency', 'Oscilloscope'],
  },
  {
    id: '2022-ericsson-start',
    title: 'Ericsson: Embedded Software Engineer',
    date: '2022',
    summary:
      'Pioneered 10MHz synchronization features for next-gen radio platforms.',
    description:
      'Successfully identified ASIC clock-divider limitations and led the R&D for the first-ever 10MHz sync implementation on Kryton-based radio hardware.',
    experienceSlug: 'embedded-ericsson',
    tags: ['Industry R&D', 'Clock Sync', 'ASIC', 'Jenkins/Gerrit'],
  },
  {
    id: '2022-fesb-team-racing',
    title: 'FESB Team Racing: Hardware Design Engineer',
    date: '2022',
    summary:
      'Designed power distribution and shutdown circuitry for an electric race car.',
    description:
      'Responsible for BMS hardware, relay drivers, and pre-charge and discharge circuity component selection and acquisition.',
    imageUrl: 'images/journey/FESB_Racing.jpeg',
    experienceSlug: 'hardware-fesb-team-racing',
    tags: ['BMS', 'Relays', 'Analog Stability', 'Formula Student'],
  },
  {
    id: '2021-DAC',
    title: 'Dual-Rail Resistor DAC',
    date: '2021',
    summary:
      'Designed a binary-weighted DAC with ±12V rails for AC signal generation.',
    description:
      'Analyzed non-linearity and step-size errors using oscilloscope-based validation of resistor ladder tolerances.',
    projectSlug: 'DAC-breadboard',
    tags: ['Analog Design', 'Op-Amps', 'Signal Conditioning'],
  },
  {
    id: '2018-smart-lighting',
    title: 'Smart Apartment: 230V Installation & Control',
    date: '2018',
    summary:
      'Full-scale 1-bedroom apartment electrical model with Bluetooth remote control.',
    description:
      'Engineered a complete electrical installation (sockets, fuses, FID) on a hand-drawn architectural board. Integrated a custom LV-HV bridge and Arduino-based Bluetooth control to manage lighting via a mobile app.',
    imageUrl: 'images/journey/installation.png',
    projectSlug: 'smart-lighting-system',
    tags: ['System Integration', '230V AC', 'Arduino', 'Bluetooth', 'PCB Design'],
},
];
// src/content/projects.ts
import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    slug: 'bms-master-pcb',
    title: 'Master Thesis: BMS Master PCB for Formula Student EV',
    shortDescription:
      'Full-cycle R&D of a 480V-isolated BMS Master Controller, designed for FSG safety compliance and high-reliability operation.',
    longDescription:
      'Developed a custom BMS master controller under strict size and budget constraints (2-layer design).\n\n' +
      'Key Technical Challenges:\n' +
      '• High Voltage Sensing: Implemented a 480V HV-to-LV sensing circuit using isolated voltage dividers and a MAX isolated ADC, ensuring 95% pre-charge verification between the battery pack and inverter as per FSG regulations.\n' +
      '• Signal Integrity: Managed mixed-signal routing on a 2-layer board, using datasheet-driven trace geometry for isoSPI and optimizing return current paths to minimize noise coupling near power switching areas.\n' +
      '• Safety & Compliance: Designed according to IPC-2221 standards for creepage and clearance distances to ensure galvanic isolation.\n' +
      '• HW Debugging & Thermal Optimization: Diagnosed a recurring MCU reset issue using thermal imaging (IR camera) and power dissipation calculations. Mitigated LDO thermal throttling by optimizing the power budget—specifically underclocking the MCU and re-calculating LED current consumption—to ensure stable firmware testing.',
    techStack: [
      'Altium Designer',
      'High Voltage (480V DC)',
      'Galvanic Isolation',
      'IPC-2221 Compliance',
      'Thermal Analysis',
      'Hardware Debugging',
      'CAN / isoSPI',
      'STM32',
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
      'A personal portfolio that combines frontend architecture best practices with a visual language inspired by schematics and PCB layout tools.\n\n' +
      'Key Features:\n' +
      '• Responsive Architecture: Built with a mobile-first approach using React and Tailwind CSS.\n' +
      '• Theming: Features a custom dark/light mode system designed to mimic professional ECAD environments.\n' +
      '• Reusable UI: Developed a library of custom primitives for timeline entries, project cards, and technical breadcrumbs.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    repoUrl: 'https://github.com/70nKA/my-portfolio',
  },
  {
    slug: 'lv-battery-carrier',
    title: 'LV Battery Carrier & Enclosure (Formula Student)',
    shortDescription:
      'Mechanical design of the low-voltage battery carrier and enclosure for a Formula Student EV.',
    longDescription:
      'Designed the mechanical carrier and enclosure for the low-voltage battery pack of a Formula Student electric race car using SolidWorks.\n\n' +
      'Technical Highlights:\n' +
      '• Mechanical Robustness: Engineered a high-retention housing system to withstand extreme vibration and G-loads in a racing environment.\n' +
      '• Packaging Constraints: Optimized internal volume for tight cable routing while maintaining electrical clearances and airflow.\n' +
      '• Serviceability: Integrated quick-access mounting points to allow for rapid battery swaps and maintenance during competition.',
    techStack: ['SolidWorks', 'Mechanical Design', 'Battery Packaging', 'Vibration Mitigation'],
    heroImageUrl: '/my-portfolio/images/journey/LV_battery_carrier_single.png',
    images: [
      '/my-portfolio/images/projects/lv-battery-carrier/LV_battery_carrier_battery.png',
      '/my-portfolio/images/projects/lv-battery-carrier/LV_battery_carrier_formula.png',
    ],
  },
  {
    slug: 'fpga-sobel-filter',
    title: 'FPGA Sobel Filter simulation',
    shortDescription:
      'Simulation of a Sobel edge detection filter on an FPGA.',
    longDescription:
      'Simulated a Sobel edge detection filter on an FPGA using Verilog.\n\n' +
      'Technical Challenges:\n' +
      '• Algorithm Optimization: Implemented a 3x3 convolution kernel for grayscale image processing optimized for hardware logic.\n' +
      '• Resource Management: Balanced memory usage and logical gates to maintain high-speed processing within FPGA constraints.\n' +
      '• Timing Analysis: Performed rigorous simulation to ensure zero timing violations and deterministic output across varied image data.',
    techStack: ['Verilog', 'FPGA', 'Sobel Filter', 'Image Processing', 'Timing Analysis'],
    heroImageUrl: '/my-portfolio/images/journey/fpga_sobel_filter.jpg',
    images: [
      "/my-portfolio/images/projects/fpga-sobel-filter/img5_319_bw.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img5_319_wb.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img5_255_bw.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img5_255_wb.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img5_127_bw.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img5_127_wb.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img5_63_wb.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img5_63_bw.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img6_319_bw.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img6_319_wb.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img6_255_bw.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img6_255_wb.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img6_127_bw.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img6_127_wb.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img6_319_bw.jpg",
      "/my-portfolio/images/projects/fpga-sobel-filter/img6_319_wb.jpg",
    ],
    liveUrl: 'https://fesb-my.sharepoint.com/:v:/g/personal/agrbav02_fesb_hr/IQCtGOeU2HmJR63o9p6_mnxsAYqST7S623Xx5juxuvWo_ng?e=7uZa3k',
    repoUrl: 'https://github.com/70nKA/PDS_SIM',
  },
  {
    slug: 'ethernet-tx-driver',
    title: "Bachelor's Thesis: Bare-Metal Ethernet TX Driver (PIC32MZ)",
    shortDescription:
      'Low-level driver development from scratch, involving DMA, Cache Coherency, and physical Manchester signal validation.',
    longDescription:
      'Engineered a bare-metal Ethernet transmit driver for the PIC32MZ platform by following manufacturer manuals and register maps.\n\n' +
      'Key Contributions:\n' +
      '• Memory Management: Solved Cache Coherency challenges by implementing manual cache invalidation for specific RAM addresses, ensuring data synchronization between CPU and DMA.\n' +
      '• Physical Layer Validation: Due to a lack of a logic analyzer, I performed manual Manchester decoding by analyzing oscilloscope screenshots of the Ethernet cable signal to validate bit transitions and frame headers.\n' +
      '• Protocol Implementation: Hardcoded PHY values and descriptor-based memory allocation to isolate and resolve low-level timing bugs under tight deadlines.',
    techStack: ['C', 'PIC32MZ', 'DMA', 'Cache Coherency', 'Manchester Decoding', 'Oscilloscope', 'Bare-Metal Firmware'],
    liveUrl: 'https://fesb-my.sharepoint.com/:v:/g/personal/agrbav02_fesb_hr/IQBC1cRWtR-0RKNg8CGofrLNARAHe0fUzWtY6EApwBuT410?e=AHSRFM',
    repoUrl: 'https://github.com/70nKA/zavrsni_v3_1',
},
  {
    slug: 'smart-lighting-system',
    title: 'Smart Apartment Electrical Installation & Control',
    shortDescription:
      'A full-scale electrical model of a 1-bedroom apartment featuring manual wiring and Bluetooth-based lighting control.',
    longDescription:
      'This project involved the end-to-end design and execution of a residential electrical system integrated with custom smart-home logic.\n\n' +
      'Key Technical Challenges:\n' +
      '• System Architecture: Designed and implemented a full 230V AC installation, including sockets, buttons, fuse boxes, and FID safety switches, mounted on a hand-drawn "birds-eye" architectural layout of a 1-bedroom apartment.\n' +
      '• LV-HV Interfacing: Engineered a custom PCB bridge to safely isolate 5V Arduino logic from 230V mains power using relays and optocouplers.\n' +
      '• Wireless Control: Developed firmware and a mobile interface to allow remote lighting control via Bluetooth, bridging traditional electrical infrastructure with modern IoT.\n' +
      '• Troubleshooting & Safety: Solved early trace-width failures on the control board by augmenting high-current paths with 1.5mm² copper bus-wiring to meet current density requirements.',
    techStack: ['230V AC Installation', 'System Integration', 'Arduino', 'PCB Design', 'Galvanic Isolation', 'Bluetooth/IoT'],
    liveUrl: 'https://fesb-my.sharepoint.com/:v:/g/personal/agrbav02_fesb_hr/IQAeQaGC83AGRYfPa7l1lhycAXGwefWUwIx1c6PNGwxInoA?e=zjbF05',
    repoUrl: 'https://github.com/70nKA/maturalni_rad',
    images: [
      '/my-portfolio/images/projects/smart-lighting-system/build.png',
      '/my-portfolio/images/projects/smart-lighting-system/installation.png',
      '/my-portfolio/images/projects/smart-lighting-system/fuse_box.png',
      '/my-portfolio/images/projects/smart-lighting-system/lv_2_hw_pcb.jpg'
    ],
},
  {
    slug: 'DAC-breadboard',
    title: 'Binary Weighted Resistor DAC & Analog Signal Chain',
    shortDescription:
      'Implementation and validation of a resistor-ladder DAC with dual-rail Op-Amp buffering.',
    longDescription:
      'Built a binary-weighted resistor DAC to explore digital-to-analog conversion principles and signal conditioning.\n\n' +
      'Technical Features:\n' +
      '• Dual-Rail Supply: Utilized ±12V rails to achieve full-scale bipolar analog output swing for AC signal generation.\n' +
      '• Signal Conditioning: Designed an inverting Op-Amp output stage with gain-scaling for safe MCU interfacing.\n' +
      '• Validation: Used an oscilloscope to identify and analyze differential non-linearity (DNL) errors caused by resistor tolerance mismatches.',
    techStack: ['Analog Design', 'Op-Amp Circuits', 'Dual-Rail Supplies', 'Signal Conditioning', 'Oscilloscope Validation', 'Error Analysis'],
    liveUrl: 'https://fesb-my.sharepoint.com/:v:/g/personal/agrbav02_fesb_hr/IQCPj2EJMRttS5rTK2t3YpUHAVer01OdeCdE_zX-7M_8Hyw?e=6EAYQ4',
  },
];
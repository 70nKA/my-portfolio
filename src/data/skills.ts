// src/content/skills.ts
import type { SkillCategory, Skill } from '../types/content';

export const skillCategories: SkillCategory[] = [
  { id: 'hardware', name: 'Hardware Design & Electronics' },
  { id: 'embedded', name: 'Embedded & Firmware' },
  { id: 'tools', name: 'Tools & Workflow' },
];

export const skills: Skill[] = [
  // Hardware
  { id: 'altium', name: 'Altium Designer', level: 60, categoryId: 'hardware' },
  { id: 'schematic', name: 'Schematic Design', level: 90, categoryId: 'hardware' },
  { id: 'pcb-layout', name: 'PCB Layout', level: 60, categoryId: 'hardware' },
  { id: 'analog-digital', name: 'Analog & Digital Circuits', level: 60, categoryId: 'hardware' },
  { id: 'power-electronics', name: 'Power & BMS Hardware', level: 60, categoryId: 'hardware' },
  { id: 'electrical-installations', name: 'Electrical Installations (230 V)', level: 75, categoryId: 'hardware' },

  // Embedded & Firmware
  { id: 'c', name: 'C (Embedded)', level: 75, categoryId: 'embedded' },
  { id: 'stm32', name: 'STM32', level: 60, categoryId: 'embedded' },
  { id: 'pic32', name: 'PIC32', level: 70, categoryId: 'embedded' },
  { id: 'buses', name: 'SPI / I2C / CAN / UART', level: 76, categoryId: 'embedded' },
  { id: 'dma-interrupts', name: 'DMA & Interrupts', level: 80, categoryId: 'embedded' },
  { id: 'embedded-linux', name: 'Embedded Linux', level: 70, categoryId: 'embedded' },
  { id: 'python', name: 'Python (Scripting & Tests)', level: 70, categoryId: 'embedded' },
  { id: 'bash', name: 'Bash Scripting', level: 76, categoryId: 'embedded' },

  // Tools & Workflow
  { id: 'git', name: 'Git', level: 85, categoryId: 'tools' },
  { id: 'gerrit', name: 'Gerrit / Code Review', level: 82, categoryId: 'tools' },
  { id: 'jenkins', name: 'Jenkins / CI', level: 60, categoryId: 'tools' },
  { id: 'solidworks', name: 'SolidWorks', level: 40, categoryId: 'tools' },
  { id: 'lab-equipment', name: 'Oscilloscope & Lab Equipment', level: 70, categoryId: 'tools' },
];
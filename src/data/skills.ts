// src/content/skills.ts
import type { SkillCategory, Skill } from '../types/content';

export const skillCategories: SkillCategory[] = [
  { id: 'hardware', name: 'Hardware Design & Electronics' },
  { id: 'embedded', name: 'Embedded & Firmware' },
  { id: 'tools', name: 'Tools & Workflow' },
  { id: 'languages', name: 'Languages' },
];

export const skills: Skill[] = [
  // Hardware
  { id: 'altium', name: 'Altium Designer', level: 75, categoryId: 'hardware' },
  { id: 'schematic', name: 'Schematic Design', level: 90, categoryId: 'hardware' },
  { id: 'pcb-layout', name: 'PCB Layout', level: 70, categoryId: 'hardware' },
  { id: 'power-electronics', name: 'BMS Hardware', level: 75, categoryId: 'hardware' },
  { id: 'analog-signals', name: 'Analog Signal Conditioning', level: 70, categoryId: 'hardware' },
  { id: 'thermal-analysis', name: 'Thermal Imaging & Management', level: 65, categoryId: 'hardware' },
  { id: 'electrical-installations', name: 'Electrical Installations (230 V)', level: 85, categoryId: 'hardware' },

  // Embedded & Firmware
  { id: 'c', name: 'C (Embedded/Bare-Metal)', level: 85, categoryId: 'embedded' },
  { id: 'dma-cache', name: 'DMA & Cache Coherency', level: 85, categoryId: 'embedded' },
  { id: 'buses', name: 'SPI / I2C / CAN / RMII / UART', level: 85, categoryId: 'embedded' },
  { id: 'sync-clocks', name: 'Clock Sync & Reference Signals', level: 75, categoryId: 'embedded' },
  { id: 'stm32-pic32', name: 'STM32 & PIC32MZ Architecture', level: 80, categoryId: 'embedded' },
  { id: 'embedded-linux', name: 'Embedded Linux', level: 70, categoryId: 'embedded' },
  { id: 'scripting', name: 'Python & Bash Automation', level: 80, categoryId: 'embedded' },

  // Tools & Workflow
  { id: 'lab-equipment', name: 'Oscilloscope & Thermal Imaging', level: 85, categoryId: 'tools' },
  { id: 'git-gerrit', name: 'Git & Gerrit (Code Review)', level: 85, categoryId: 'tools' },
  { id: 'ci-cd', name: 'Jenkins & CI Workflows', level: 65, categoryId: 'tools' },
  { id: 'solidworks', name: 'SolidWorks (CAD)', level: 50, categoryId: 'tools' },
    { id: 'autoCAD', name: 'AutoCAD', level: 50, categoryId: 'tools' },
  { id: 'catia', name: 'CATIA', level: 30, categoryId: 'tools' },
  { id: 'verification', name: 'HIL & Hardware Verification', level: 70, categoryId: 'tools' },

  // Languages
  { id: 'english', name: 'English (B2 - Proficient)', level: 80, categoryId: 'languages' },
  { id: 'german', name: 'German (A1.1 - Beginner)', level: 20, categoryId: 'languages' },
  { id: 'croatian', name: 'Croatian (Native)', level: 100, categoryId: 'languages' },
];
import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutSection: React.FC = () => {
  // Placeholder layout, minimal content.
  return (
    <section id="about" className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 scroll-mt-24">
      <div className="mx-auto max-w-4xl rounded-xl border border-schematic-grid/60 bg-schematic-surface/70 p-6 shadow-sm backdrop-blur dark:border-pcb-dot/60 dark:bg-pcb-surface/70">
        <SectionHeading eyebrow="About" title="About Me" />

        <p className="mt-3 text-sm text-schematic-muted dark:text-pcb-muted">
          I’m an embedded hardware and software engineer from Split, Croatia. My work is centered on designing reliable PCBs and power systems, then bringing them to life on the bench and in the field.
        </p>

        <p className="mt-2 text-sm text-schematic-muted dark:text-pcb-muted">
          With FESB Team Racing I led the development of the Battery Management System (BMS) master PCB for a Formula Student electric race car — handling schematic design, component selection, PCB layout in Altium, and hardware bring‑up. I’ve also designed relay and power‑distribution boards and mechanical enclosures for low‑voltage battery packs, work that now continues as part of my master’s thesis.
        </p>

        <p className="mt-2 text-sm text-schematic-muted dark:text-pcb-muted">
          Industry experience at Ericsson Nikola Tesla exposed me to production‑grade radio hardware, low‑level drivers, and automated testing. Years of residential electrical installations and current work as an optical technician (FTTH) keep me close to how cables, terminations, and enclosures behave in actual buildings and customer homes.
        </p>

        <p className="mt-2 text-sm text-schematic-muted dark:text-pcb-muted">
          I enjoy projects where I can own the full hardware path: from first schematic and layout, through prototyping, measurement, and debugging, to a stable, manufacturable design that is safe to install and maintain. If you need someone to design, debug, and validate electronic hardware end‑to‑end, that’s where I’m at my best.
        </p>
      </div>
    </section>
  );
};
import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutSection: React.FC = () => {
  // Placeholder layout, minimal content.
  return (
    <section id="about" className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 scroll-mt-24">
      <div className="mx-auto max-w-4xl rounded-xl border border-schematic-grid/60 bg-schematic-surface/70 p-6 shadow-sm backdrop-blur dark:border-pcb-dot/60 dark:bg-pcb-surface/70">
        <SectionHeading eyebrow="About" title="About Me" />

        <p className="mt-3 text-sm text-schematic-muted dark:text-pcb-muted">
          I’m an electronics and hardware design engineer from Split, Croatia. My work is centered on designing reliable boards and power systems, then validating them in the lab.
        </p>

        <p className="mt-2 text-sm text-schematic-muted dark:text-pcb-muted">
          With FESB Team Racing I led the development of the Battery Management System (BMS) master PCB for a Formula Student electric race car — handling schematic design, component selection, PCB layout in Altium, and hardware bring‑up on the bench. I’ve also designed relay and power‑distribution boards and mechanical enclosures for low‑voltage battery packs.
        </p>

        <p className="mt-2 text-sm text-schematic-muted dark:text-pcb-muted">
          My background includes years of hands‑on electrical installation work, which helps me think about real‑world constraints: wiring, safety, grounding, and how hardware is actually built and maintained.
        </p>

        <p className="mt-2 text-sm text-schematic-muted dark:text-pcb-muted">
          I enjoy projects where I can own the full hardware path: from first schematic and layout, through prototyping and measurement, to a stable, manufacturable design. If you need someone to design, debug, and validate electronic hardware, that’s where I’m at my best.
        </p>
      </div>
    </section>
  );
};
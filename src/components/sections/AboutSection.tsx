import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutSection: React.FC = () => {
  // Placeholder layout, minimal content.
  return (
    <section id="about" className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 scroll-mt-24">
      <div className="mx-auto max-w-4xl rounded-xl border border-schematic-grid/60 bg-schematic-surface/70 p-6 shadow-sm backdrop-blur dark:border-pcb-dot/60 dark:bg-pcb-surface/70">
        <SectionHeading eyebrow="About" title="About Me (Placeholder)" />

        <p className="mt-3 text-sm text-schematic-muted dark:text-pcb-muted">
          This is a placeholder About section. You can replace this text with your
          story later, or remove the entire component from the homepage if you
          decide not to include an About section.
        </p>
      </div>
    </section>
  );
};
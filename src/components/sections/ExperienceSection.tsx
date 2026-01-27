import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Experience" title="Where I've been working" />

        <p className="mt-3 max-w-2xl text-sm text-schematic-muted dark:text-pcb-muted">
          A brief look at recent roles and collaborations. For the full story, see
          the dedicated experience page.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="border-schematic-grid/70 bg-schematic-surface/80 dark:border-pcb-dot/70 dark:bg-pcb-surface/80">
            <h3 className="text-base font-semibold">Frontend Architect</h3>
            <p className="mt-1 text-sm text-schematic-muted dark:text-pcb-muted">
              Leading React architecture and design systems for complex interfaces.
            </p>
          </Card>

          <Card className="border-schematic-grid/70 bg-schematic-surface/80 dark:border-pcb-dot/70 dark:bg-pcb-surface/80">
            <h3 className="text-base font-semibold">Electronics Association</h3>
            <p className="mt-1 text-sm text-schematic-muted dark:text-pcb-muted">
              Running workshops around PCB design, embedded systems, and visual tooling.
            </p>
          </Card>
        </div>

        <div className="mt-6">
          <Link
            to="/experience"
            className="text-sm font-medium text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
          >
            View full experience
          </Link>
        </div>
      </div>
    </section>
  );
};
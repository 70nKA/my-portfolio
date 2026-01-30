import React from 'react';
//import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { education } from '../../data/educations';

export const EducationSection: React.FC = () => {
  // Show only the first 1–2 items as a teaser
  const preview = education;

  return (
    <section
      id="education"
      className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Education" title="Academic Background" />

        <p className="mt-3 max-w-2xl text-sm text-schematic-muted dark:text-pcb-muted">
          Degrees and programs that built the foundation for my work across
          frontend engineering and electronics-inspired interfaces.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-1">
          {preview.map((ed) => (
            <Card
              key={ed.id}
              className="border-schematic-grid/70 bg-schematic-surface/80 dark:border-pcb-dot/70 dark:bg-pcb-surface/80"
            >
              <h3 className="text-base font-semibold">{ed.degree}</h3>
              <p className="text-sm font-medium text-schematic-muted dark:text-pcb-muted">
                {ed.school}
              </p>
              <p className="mt-1 text-xs text-schematic-muted dark:text-pcb-muted">
                {ed.period}
              </p>
              <p className="mt-2 text-sm text-schematic-muted dark:text-pcb-muted line-clamp-3">
                {ed.description}
              </p>
            </Card>
          ))}
        </div>

        {/* <div className="mt-6">
          <Link
            to="/education"
            className="text-sm font-medium text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
          >
            View full education
          </Link>
        </div> */}
      </div>
    </section>
  );
};

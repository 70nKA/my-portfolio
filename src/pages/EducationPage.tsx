import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { education } from '../data/educations';

export const EducationPage: React.FC = () => {
  return (
    <div className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Education" title="Academic Background" />
        <p className="mt-3 max-w-2xl text-sm text-schematic-muted dark:text-pcb-muted">
          Formal education that underpins my approach to systems thinking,
          interface design, and electronics-inspired UI work.
        </p>

        <div className="mt-8 space-y-4">
          {education.map((ed) => (
            <Card
              key={ed.id}
              className="flex flex-col gap-2 border-schematic-grid/70 bg-schematic-surface/80
                         dark:border-pcb-dot/70 dark:bg-pcb-surface/80"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{ed.degree}</h3>
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-schematic-muted dark:text-pcb-muted">
                  {ed.period}
                </span>
              </div>

              <p className="text-sm font-medium text-schematic-muted dark:text-pcb-muted">
                {ed.school}
                {ed.location ? ` • ${ed.location}` : ''}
              </p>

              {ed.field && (
                <p className="text-xs uppercase tracking-[0.18em] text-schematic-muted dark:text-pcb-muted">
                  {ed.field}
                </p>
              )}

              <p className="mt-1 text-sm text-schematic-muted dark:text-pcb-muted">
                {ed.description}
              </p>

              {ed.highlights && ed.highlights.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-schematic-muted dark:text-pcb-muted">
                  {ed.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

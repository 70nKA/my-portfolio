import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { experiences } from '../data/experiences';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Experience" title="Professional Experience" />
        <p className="mt-3 max-w-2xl text-sm text-schematic-muted dark:text-pcb-muted">
          A selection of roles, collaborations, and associations that shaped how I
          design interfaces and systems.
        </p>

        <div className="mt-8 space-y-4">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="flex flex-col gap-2 border-schematic-grid/70 bg-schematic-surface/80
                         dark:border-pcb-dot/70 dark:bg-pcb-surface/80"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-schematic-muted dark:text-pcb-muted">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm font-medium text-schematic-muted dark:text-pcb-muted">
                {exp.org}
                {exp.location ? ` • ${exp.location}` : ''}
              </p>

              <p className="mt-1 text-sm text-schematic-muted dark:text-pcb-muted">
                {exp.description}
              </p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-schematic-muted dark:text-pcb-muted">
                  {exp.highlights.map((h) => (
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
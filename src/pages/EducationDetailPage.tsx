import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { education } from '../data/educations';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

export const EducationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const ed = education.find((e) => e.slug === slug);

  if (!ed) {
    return (
      <div className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-schematic-muted dark:text-pcb-muted">
            Education entry not found.
          </p>
          <Link
            to="/education"
            className="mt-4 inline-block text-sm text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
          >
            Back to Education
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Education" title={ed.degree} />

        <p className="mt-3 text-sm text-schematic-muted dark:text-pcb-muted">
          {ed.school}
          {ed.location ? ` • ${ed.location}` : ''} — {ed.period}
        </p>

        <Card className="mt-6 space-y-4 border-schematic-grid/70 bg-schematic-surface/80 p-6 dark:border-pcb-dot/70 dark:bg-pcb-surface/80">
          {ed.field && (
            <p className="text-xs uppercase tracking-[0.18em] text-schematic-muted dark:text-pcb-muted">
              {ed.field}
            </p>
          )}

          <p className="text-sm text-schematic-muted dark:text-pcb-muted">
            {ed.description}
          </p>

          {ed.highlights && ed.highlights.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-schematic-muted dark:text-pcb-muted">
              {ed.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          <Link
            to="/education"
            className="inline-block text-xs text-schematic-muted underline-offset-4 hover:underline dark:text-pcb-muted"
          >
            ← Back to Education
          </Link>
        </Card>
      </div>
    </div>
  );
};

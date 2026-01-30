import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

export const ExperienceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const exp = experiences.find((e) => e.slug === slug);

  if (!exp) {
    return (
      <div className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-schematic-muted dark:text-pcb-muted">
            Experience entry not found.
          </p>
          <Link
            to="/experience"
            className="mt-4 inline-block text-sm text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
          >
            Back to Experience
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Experience" title={exp.role} />

        <p className="mt-3 text-sm text-schematic-muted dark:text-pcb-muted">
          {exp.org}
          {exp.location ? ` • ${exp.location}` : ''} — {exp.period}
        </p>

        <Card className="mt-6 space-y-4 border-schematic-grid/70 bg-schematic-surface/80 p-6 dark:border-pcb-dot/70 dark:bg-pcb-surface/80">
          <p className="text-sm text-schematic-muted dark:text-pcb-muted">
            {exp.description}
          </p>

          {exp.highlights && exp.highlights.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-schematic-muted dark:text-pcb-muted">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          <Link
            to="/experience"
            className="inline-block text-xs text-schematic-muted underline-offset-4 hover:underline dark:text-pcb-muted"
          >
            ← Back to Experience
          </Link>
        </Card>
      </div>
    </div>
  );
};

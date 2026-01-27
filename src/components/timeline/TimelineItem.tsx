import React from 'react';
import { Link } from 'react-router-dom';
import type { TimelineEntry } from '../../types/content';
import { useInView } from '../../hooks/useInView';
import { Card } from '../ui/Card';

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ entry, index }) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.4 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        relative flex w-full items-stretch gap-6 py-8
        ${isLeft ? 'flex-row' : 'flex-row-reverse'}
      `}
    >
      {/* Vertical line / traces */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-schematic-grid dark:bg-pcb-dot md:block">
        {/* Extension: multi-line red/blue traces, animated glow near viewport center */}
      </div>

      {/* Spacer for alignment on small screens */}
      <div className="hidden flex-1 md:block" />

      {/* Card */}
      <div
        className={`flex-1 ${
          inView ? 'animate-fade-in-up' : 'opacity-50'
        } transition-transform`}
      >
        <Card
          className="relative border-schematic-grid/70 bg-schematic-surface/80 dark:border-pcb-dot/70 dark:bg-pcb-surface/80"
        >
          <p className="mb-1 text-xs uppercase tracking-[0.2em] text-schematic-muted dark:text-pcb-muted">
            {entry.date}
          </p>
          <h3 className="text-lg font-semibold">{entry.title}</h3>
          <p className="mt-1 text-sm text-schematic-muted dark:text-pcb-muted">
            {entry.summary}
          </p>

          {/* Image (optional) */}
          {entry.imageUrl && (
            <div className="mt-3 overflow-hidden rounded-xl border border-schematic-grid/40 dark:border-pcb-dot/40">
              <img
                src={entry.imageUrl}
                alt={entry.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          {entry.projectSlug && (
            <div className="mt-3">
              <Link
                to={`/projects/${entry.projectSlug}`}
                className="text-xs font-medium text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
              >
                View project
              </Link>
            </div>
          )}

          {/* Optional: underlined trace when in view */}
          <div className="mt-3 h-0.5 bg-gradient-to-r from-pcb-traceRed via-pcb-traceBlue to-pcb-traceRed opacity-0 transition-opacity dark:opacity-100" />
        </Card>
      </div>
    </div>
  );
};
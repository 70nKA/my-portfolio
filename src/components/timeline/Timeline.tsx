import React from 'react';
import type { TimelineEntry } from '../../types/content';
import { TimelineItem } from './TimelineItem';

interface TimelineProps {
  entries: TimelineEntry[];
}

export const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="hidden h-full w-px bg-schematic-grid dark:bg-pcb-dot md:absolute md:left-1/2 md:block md:-translate-x-1/2" />
      <div className="space-y-0">
        {entries.map((entry, index) => (
          <TimelineItem key={entry.id} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
};
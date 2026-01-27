import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Timeline } from '../timeline/Timeline';
import { timeline } from '../../data/timeline';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 scroll-mt-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Journey" title="Hero's Journey" />
        <p className="mt-3 max-w-2xl text-sm text-schematic-muted dark:text-pcb-muted">
          A wave-like timeline of projects and milestones, flowing like signals on a PCB.
        </p>
        <div className="mt-8">
          <Timeline entries={timeline} />
        </div>
      </div>
    </section>
  );
};
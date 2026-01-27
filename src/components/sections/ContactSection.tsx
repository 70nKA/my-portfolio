import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 scroll-mt-24">
      <div className="relative mx-auto max-w-3xl lg:max-w-5xl">
        {/* Future: <ContactTraces /> as an absolutely positioned layer */}

        <div className="relative rounded-xl border border-schematic-grid/60 bg-schematic-surface/80 p-6 shadow-sm backdrop-blur dark:border-pcb-dot/60 dark:bg-pcb-surface/80">
          <SectionHeading eyebrow="Contact" title="Let’s Connect" />

          <p className="mt-3 text-sm text-schematic-muted dark:text-pcb-muted">
            Reach out if you’d like to collaborate on PCB-like interfaces, design
            systems, or frontend architecture.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <div>
              <span className="font-medium">Email: </span>
              <a
                href="mailto:you@example.com"
                className="text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
              >
                you@example.com
              </a>
            </div>
            <div>
              <span className="font-medium">GitHub: </span>
              <a
                href="https://github.com/your-handle"
                target="_blank"
                rel="noreferrer"
                className="text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
              >
                github.com/your-handle
              </a>
            </div>
            <div>
              <span className="font-medium">LinkedIn: </span>
              <a
                href="https://linkedin.com/in/your-handle"
                target="_blank"
                rel="noreferrer"
                className="text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
              >
                linkedin.com/in/your-handle
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-8"
    >
      {/* Placeholder for future PCB trace animation */}
      <div className="pointer-events-none absolute inset-0">
        {/* e.g. <HeroTraces /> (SVG/Canvas) later */}
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-schematic-muted dark:text-pcb-muted">
            Hardware Design Engineer • Embedded Software Engineer • Electrician
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Antonija Grbavac
          </h1>
          <p className="max-w-xl text-sm text-schematic-muted dark:text-pcb-muted sm:text-base">
            I connect code, copper, and real‑world volts — designing PCBs, writing low‑level firmware, and making hardware behave the way it should.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-3xl border border-schematic-grid bg-schematic-surface shadow-lg dark:border-pcb-dot dark:bg-pcb-surface">
            {/* Placeholder avatar */}
            <div className="flex h-full w-full items-center justify-center text-sm text-schematic-muted dark:text-pcb-muted">
              <img
                  src="images/hero/hero_1.jpg"
                  alt="Your Photo"
                  className="h-full w-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
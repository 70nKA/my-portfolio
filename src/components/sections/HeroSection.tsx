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
            Frontend Architect • React • PCB Enthusiast
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Your Name
          </h1>
          <p className="max-w-xl text-sm text-schematic-muted dark:text-pcb-muted sm:text-base">
            I design and build interactive systems inspired by electronics:
            schematic clarity in light mode, PCB depth in dark mode.
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
              Your Photo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { projects } from '../data/projects';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 scroll-mt-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Projects" title="Selected Projects" />
        <p className="mt-3 max-w-2xl text-sm text-schematic-muted dark:text-pcb-muted">
          Some of the work that shaped my approach to frontend architecture and
          electronic-inspired interfaces.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="flex flex-col border-schematic-grid/70 bg-schematic-surface/80 dark:border-pcb-dot/70 dark:bg-pcb-surface/80"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-schematic-muted dark:text-pcb-muted">
                {project.shortDescription}
              </p>
              <div className="mt-2 flex flex-wrap gap-1 text-xs text-schematic-muted dark:text-pcb-muted">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-schematic-grid/60 px-2 py-0.5 dark:bg-pcb-dot/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-xs font-medium text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
                >
                  View details
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
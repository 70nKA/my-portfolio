import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { SectionHeading } from '../components/ui/SectionHeading';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-schematic-muted dark:text-pcb-muted">
            Project not found.
          </p>
          <Link
            to="/projects"
            className="mt-4 inline-block text-sm text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Project" title={project.title} />

        <p className="mt-3 text-sm text-schematic-muted dark:text-pcb-muted">
          {project.shortDescription}
        </p>

        {/* Hero image */}
        {project.heroImageUrl && (
          <div className="mt-6 overflow-hidden rounded-xl border border-schematic-grid/70 bg-schematic-surface/60 dark:border-pcb-dot/70 dark:bg-pcb-surface/60">
            <img
              src={project.heroImageUrl}
              alt={`${project.title} preview`}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* Main content card */}
        <div className="mt-8 space-y-6 rounded-xl border border-schematic-grid/60 bg-schematic-surface/80 p-6 shadow-sm backdrop-blur dark:border-pcb-dot/60 dark:bg-pcb-surface/80">
          {project.longDescription && (
            <p className="text-sm text-schematic-muted dark:text-pcb-muted">
              {project.longDescription}
            </p>
          )}

          <div>
            <h3 className="text-sm font-semibold">Tech stack</h3>
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
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
              >
                Live demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-schematic-accent underline-offset-4 hover:underline dark:text-pcb-traceBlue"
              >
                Source code
              </a>
            )}
          </div>

          {/* Gallery */}
          {project.images && project.images.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold">Screenshots</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {project.images.map((src, index) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-lg border border-schematic-grid/40 bg-schematic-surface/60 dark:border-pcb-dot/40 dark:bg-pcb-surface/60"
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link
            to="/projects"
            className="inline-block text-xs text-schematic-muted underline-offset-4 hover:underline dark:text-pcb-muted"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};
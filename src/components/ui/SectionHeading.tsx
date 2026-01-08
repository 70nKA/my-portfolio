import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
}) => {
  return (
    <div>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-schematic-muted dark:text-pcb-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
};
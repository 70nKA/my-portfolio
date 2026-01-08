import React, { useMemo, useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillsFilters } from '../skills/SkillsFilters';
import { SkillsGrid } from '../skills/SkillsGrid';
import { skillCategories, skills } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  const [selected, setSelected] = useState<'all' | string>('all');

  const filteredSkills = useMemo(() => {
    if (selected === 'all') return skills;
    return skills.filter((s) => s.categoryId === selected);
  }, [selected]);

  return (
    <section id="skills" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Skills" title="Skills & Tools" />
        <p className="mt-3 max-w-2xl text-sm text-schematic-muted dark:text-pcb-muted">
          Core technologies I work with, expressed as simple familiarity levels.
        </p>

        {/* Chrome / visuals wrapper: easy to swap for PCB traces later */}
        <div className="mt-8 rounded-xl border border-schematic-grid/60 bg-schematic-surface/70 p-6 shadow-sm backdrop-blur dark:border-pcb-dot/60 dark:bg-pcb-surface/70">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SkillsFilters
              categories={skillCategories}
              selectedCategoryId={selected}
              onSelect={setSelected}
            />
          </div>

          <div className="mt-6">
            <SkillsGrid skills={filteredSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};
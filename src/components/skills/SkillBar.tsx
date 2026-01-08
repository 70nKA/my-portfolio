import React from 'react';
import type { Skill } from '../../types/content';

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span>{skill.name}</span>
        <span className="text-schematic-muted dark:text-pcb-muted">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-schematic-grid/60 dark:bg-pcb-dot/80">
        <div
          className="h-full rounded-full bg-schematic-accent dark:bg-pcb-traceBlue"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};
import React from 'react';
import type { Skill } from '../../types/content';
import { SkillBar } from './SkillBar';

interface SkillsGridProps {
  skills: Skill[];
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map((skill) => (
        <SkillBar key={skill.id} skill={skill} />
      ))}
    </div>
  );
};
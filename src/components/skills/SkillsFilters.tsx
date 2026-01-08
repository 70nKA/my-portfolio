import React from 'react';
import type { SkillCategory } from '../../types/content';

interface SkillsFiltersProps {
  categories: SkillCategory[];
  selectedCategoryId: string | 'all';
  onSelect: (id: string | 'all') => void;
}

export const SkillsFilters: React.FC<SkillsFiltersProps> = ({
  categories,
  selectedCategoryId,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onSelect('all')}
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          selectedCategoryId === 'all'
            ? 'bg-schematic-accent text-white dark:bg-pcb-traceBlue'
            : 'bg-schematic-surface text-schematic-muted dark:bg-pcb-surface dark:text-pcb-muted'
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onSelect(cat.id)}
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            selectedCategoryId === cat.id
              ? 'bg-schematic-accent text-white dark:bg-pcb-traceBlue'
              : 'bg-schematic-surface text-schematic-muted dark:bg-pcb-surface dark:text-pcb-muted'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};
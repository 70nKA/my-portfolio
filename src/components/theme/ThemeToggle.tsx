import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/Button';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? '☀︎' : '☾'}
    </Button>
  );
};
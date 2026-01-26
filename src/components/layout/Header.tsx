import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '../theme/ThemeToggle';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-schematic-grid/40 bg-schematic-surface/80 backdrop-blur dark:border-pcb-dot/40 dark:bg-pcb-bg/80">
      <div className="mx-auto flex max-w-5xl lg:max-w-7xl items-center justify-between px-4 py-3">
        <div className="font-mono text-sm uppercase tracking-[0.2em]">
          {/* Replace with your logo or initials */}
          <NavLink to="/" className="hover:opacity-80">
            TONKA
          </NavLink>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/projects" className="hover:underline">
            Projects
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
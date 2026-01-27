// src/components/layout/Header.tsx
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { ThemeToggle } from '../theme/ThemeToggle';

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

type PageNavItemId = 'home' | 'projects';
type SectionNavItemId = 'about' | 'journey' | 'skills' | 'contact';

type PageNavItem = {
  id: PageNavItemId;
  label: string;
  type: 'page';
  to: string;
};

type SectionNavItem = {
  id: SectionNavItemId;
  label: string;
  type: 'section';
  hash: string;
};

type NavItem = PageNavItem | SectionNavItem;

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', type: 'page', to: '/' },
  { id: 'about', label: 'About me', type: 'section', hash: '#about' },
  { id: 'journey', label: 'Journey', type: 'section', hash: '#journey' },
  { id: 'skills', label: 'Skills', type: 'section', hash: '#skills' },
  { id: 'contact', label: 'Contact', type: 'section', hash: '#contact' },
  { id: 'projects', label: 'Projects', type: 'page', to: '/projects' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  getSectionLink: (hash: string) => string;
}

/**
 * Full-screen mobile menu rendered via portal to <body>.
 * This guarantees it covers everything, independent of layout/z-index.
 */
function MobileMenuOverlay({ isOpen, onClose, getSectionLink }: MobileMenuProps) {
  if (!isOpen) return null;
  const target = document.body;

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-[9999] md:hidden',
        'flex flex-col bg-schematic-bg text-schematic-text dark:bg-pcb-bg dark:text-pcb-text',
      )}
    >
      {/* Top bar with logo + close button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-schematic-grid/40 dark:border-pcb-dot/40">
        <span className="font-mono text-sm uppercase tracking-[0.2em]">
          TONKA
        </span>
        <button
          type="button"
          onClick={onClose}
          className="p-2 text-schematic-text dark:text-pcb-text"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>

      {/* Centered nav items, scrollable if viewport is short */}
            {/* Scrollable nav area below the top bar */}
      {/* Scrollable nav area below the top bar */}
      <div className="flex flex-1 overflow-y-auto px-6">
        <div
          className="mx-auto flex min-h-full w-full max-w-xs flex-col
                    items-center justify-center gap-8 py-12"
        >
          {navItems.map((item) => {
            if (item.type === 'page') {
              return (
                <NavLink
                  key={item.id}
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'text-lg font-medium transition-colors hover:text-schematic-accent dark:hover:text-pcb-traceBlue',
                      isActive && 'text-schematic-accent dark:text-pcb-traceBlue',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              );
            }

            return (
              <Link
                key={item.id}
                to={getSectionLink(item.hash)}
                onClick={onClose}
                className="text-lg font-medium transition-colors hover:text-schematic-accent dark:hover:text-pcb-traceBlue"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>,
    target,
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu automatically when switching to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Run once on mount in case the app loads at a large width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Header shrink on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes (e.g., / -> /projects)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Lock scroll when menu is open
  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    return () => {
      body.style.overflow = '';
    };
  }, [isMenuOpen]);

  function getSectionLink(hash: string): string {
    if (location.pathname === '/') {
      return hash;
    }
    return `/${hash}`;
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-40 w-full border-b transition-all duration-300',
          'border-schematic-grid/40 bg-schematic-surface/80 backdrop-blur',
          'dark:border-pcb-dot/40 dark:bg-pcb-bg/80',
          isScrolled ? 'py-2 shadow-sm' : 'py-4',
        )}
      >
        <div
          className="mx-auto flex w-full items-center justify-between px-4
                     max-w-4xl md:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl"
        >
          <Link
            to="/"
            className="font-mono text-sm uppercase tracking-[0.2em] hover:opacity-80 sm:text-base"
          >
            TONKA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 text-xs sm:text-sm md:flex">
            {navItems.map((item) => {
              if (item.type === 'page') {
                return (
                  <NavLink
                    key={item.id}
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'transition-colors hover:text-schematic-accent dark:hover:text-pcb-traceBlue',
                        isActive &&
                          'text-schematic-accent dark:text-pcb-traceBlue',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={getSectionLink(item.hash)}
                  className="transition-colors hover:text-schematic-accent dark:hover:text-pcb-traceBlue"
                >
                  {item.label}
                </Link>
              );
            })}

            <ThemeToggle />
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-schematic-text dark:text-pcb-text"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu rendered at <body> level, above everything */}
      <MobileMenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        getSectionLink={getSectionLink}
      />
    </>
  );
}
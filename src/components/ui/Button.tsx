import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost';
  size?: 'sm' | 'md';
  asChild?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  asChild = false,
  className,
  children,
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center rounded-full border text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants: Record<string, string> = {
    solid:
      'border-transparent bg-schematic-accent text-white hover:bg-schematic-accent/90 focus:ring-schematic-accent dark:bg-pcb-traceBlue dark:hover:bg-pcb-traceBlue/90 dark:focus:ring-pcb-traceBlue',
    ghost:
      'border-transparent bg-transparent text-schematic-muted hover:bg-schematic-grid/60 focus:ring-schematic-accent dark:text-pcb-muted dark:hover:bg-pcb-dot/60 dark:focus:ring-pcb-traceBlue',
  };
  const sizes: Record<string, string> = {
    sm: 'px-3 py-1',
    md: 'px-4 py-1.5',
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (asChild && React.isValidElement(children)) {
  // Cast to a ReactElement that we know accepts props
  const child = children as React.ReactElement<any>;

  return React.cloneElement(child, {
    className: clsx(classes, child.props.className),
    ...rest,
  });
}

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
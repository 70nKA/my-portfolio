import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'rounded-xl border bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-black/30',
        className,
      )}
    >
      {children}
    </div>
  );
};
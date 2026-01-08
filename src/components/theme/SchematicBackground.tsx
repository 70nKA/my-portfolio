import React from 'react';

interface SchematicBackgroundProps {
  children: React.ReactNode;
}

export const SchematicBackground: React.FC<SchematicBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="relative min-h-screen bg-schematic-bg text-schematic-text">
      {/* Grid */}
      <div className="pointer-events-none fixed inset-0 bg-schematic-grid opacity-60" />

      {/* Placeholder for schematic components (ICs, resistors, etc.) */}
      <div className="pointer-events-none fixed inset-0">
        {/* Later: replace with SVG / Canvas components */}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
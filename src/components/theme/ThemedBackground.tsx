import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { SchematicBackground } from './SchematicBackground';
import { PcbBackground } from './PcbBackground';

interface ThemedBackgroundProps {
  children: React.ReactNode;
}

export const ThemedBackground: React.FC<ThemedBackgroundProps> = ({
  children,
}) => {
  const { theme } = useTheme();

  // Switch entire chrome between schematic and PCB styles
  if (theme === 'dark') {
    return <PcbBackground>{children}</PcbBackground>;
  }

  return <SchematicBackground>{children}</SchematicBackground>;
};
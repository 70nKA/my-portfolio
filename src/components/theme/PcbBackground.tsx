import React from 'react';
//import { PcbTracesOverlay } from './PcbTracesOverlay';

interface PcbBackgroundProps {
  children: React.ReactNode;
}

export const PcbBackground: React.FC<PcbBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-pcb-bg text-pcb-text">
      <div className="pointer-events-none fixed inset-0 bg-pcb-dot-grid opacity-60" />

      {/* PCB traces layer – extension point */}
      <div className="pointer-events-none fixed inset-0">
        {/* Example extension later:
           <AnimatedTrace path="..." color="red" />
        */}
        {/* PCB traces layer */}
        {/* <div className="pointer-events-none fixed inset-0">
            <PcbTracesOverlay />
        </div> */}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
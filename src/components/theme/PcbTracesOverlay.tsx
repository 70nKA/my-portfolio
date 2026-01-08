import React from 'react';
import type { SVGProps } from 'react';

type TraceColor = 'red' | 'blue';

interface PcbTraceProps extends Omit<SVGProps<SVGPathElement>, 'color'> {
  color?: TraceColor;
  animated?: boolean;
}

/**
 * Single trace path with color + optional dash animation.
 */
function PcbTrace({ color = 'red', animated = true, d, ...rest }: PcbTraceProps) {
  const stroke =
    color === 'red'
      ? '#ff4b5c' // keep in sync with tailwind pcb.traceRed
      : '#00b0ff'; // keep in sync with tailwind pcb.traceBlue

  const className = [
    'pcb-trace-path',
    animated ? 'pcb-trace-animated' : null,
    rest.className,
  ]
    .filter(Boolean)
    .join(' ');

  return <path d={d} stroke={stroke} className={className} {...rest} />;
}

/**
 * Full-screen SVG overlay with a few decorative traces.
 * Uses a 0–100 viewBox so paths scale with viewport.
 */
export function PcbTracesOverlay() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Top-left to center red trace */}
      <PcbTrace
        color="red"
        d="M5 15 H 40 V 35 H 70"
      />

      {/* Parallel blue trace slightly offset */}
      <PcbTrace
        color="blue"
        d="M5 20 H 38 V 40 H 68"
      />

      {/* Bottom-left to mid-right red trace */}
      <PcbTrace
        color="red"
        d="M10 80 H 45 V 60 H 85"
      />

      {/* Bottom-right blue "return" trace, not animated */}
      <PcbTrace
        color="blue"
        animated={false}
        d="M90 70 H 60 V 50 H 30"
        opacity={0.7}
      />
    </svg>
  );
}
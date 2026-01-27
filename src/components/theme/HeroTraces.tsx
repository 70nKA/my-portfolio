import type { SVGProps } from 'react';

type TraceColor = 'red' | 'blue';

interface HeroTracesProps {
  /** Enable or disable dash animation on traces */
  animate?: boolean;
}

/**
 * Internal helper: single PCB trace path with color + optional animation.
 */
function HeroTracePath({
  color = 'red',
  animate = true,
  d,
  className,
  ...rest
}: {
  color?: TraceColor;
  animate?: boolean;
  d: string;
} & Omit<SVGProps<SVGPathElement>, 'color' | 'd'>) {
  const stroke =
    color === 'red'
      ? '#ff4b5c' // keep aligned with tailwind pcb.traceRed
      : '#00b0ff'; // keep aligned with tailwind pcb.traceBlue

  const classes = [
    'pcb-trace-path',
    animate ? 'pcb-trace-animated' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <path d={d} stroke={stroke} className={classes} {...rest} />;
}

/**
 * Hero-specific traces overlay.
 *
 * Coordinates assume:
 * - Text section roughly in the left ~0–50 x range
 * - Avatar roughly in the right ~55–95 x range
 */
export function HeroTraces({ animate = true }: HeroTracesProps) {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Frame around avatar area (right side) */}

      {/* Top horizontal segment of the frame */}
      <HeroTracePath
        color="red"
        animate={animate}
        d="M60 20 H 92"
      />

      {/* Right vertical */}
      <HeroTracePath
        color="blue"
        animate={animate}
        d="M92 20 V 80"
      />

      {/* Bottom horizontal */}
      <HeroTracePath
        color="red"
        animate={animate}
        d="M92 80 H 60"
      />

      {/* Inner “highlight” line near avatar */}
      <HeroTracePath
        color="blue"
        animate={animate}
        d="M65 30 V 70"
        opacity={0.9}
      />

      {/* Connection from text area to avatar frame */}

      {/* Primary red line from left text block to avatar frame */}
      <HeroTracePath
        color="red"
        animate={animate}
        d="M10 40 H 45 V 45 H 60"
      />

      {/* Parallel blue line slightly offset */}
      <HeroTracePath
        color="blue"
        animate={animate}
        d="M10 45 H 43 V 50 H 58"
        opacity={0.85}
      />

      {/* A small “signal notch” above the heading, left side */}
      <HeroTracePath
        color="blue"
        animate={animate}
        d="M12 22 H 30 V 28 H 40"
        opacity={0.7}
      />
    </svg>
  );
}
'use client';
import type { RefObject } from 'react';

/**
 * HeroShapes
 * ──────────
 * Sharp, solid-layered organic curved shapes matching the screenshot exactly.
 * 
 * To match the screenshot visual:
 *  - Top shape: Parallel pink curves separated by a dark chocolate band.
 *    Achieved by layering: Pink Base -> Dark Chocolate Mask -> Pink Front.
 *  - Bottom shape: Mirrors the top shape's nested layered structure.
 *  - No blur filter, keeping the shapes sharp and solid.
 *  - Both shapes scale, rotate, and morph continuously using the 'data-end' attribute.
 */

interface Props {
  topRef: RefObject<SVGSVGElement | null>;
  bottomRef: RefObject<SVGSVGElement | null>;
}

export default function HeroShapes({ topRef, bottomRef }: Props) {
  const accent = 'var(--current-color-40)'; // #ff77c9 (NexGrowth brand pink)
  const darkChocolate = '#211512';          // Dark chocolate background color

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 1,
  };

  const svgStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    display: 'block',
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden',
  };

  return (
    <div style={containerStyle}>
      {/* ── TOP SHAPE — Nested layered curves ── */}
      <svg
        ref={topRef}
        aria-hidden="true"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          ...svgStyle,
          top: 0,
          transform: 'translateY(-15%) scale(1.02)',
        }}
      >
        {/* Layer 1: Pink Base curve (Deepest) */}
        <path
          d="M0,0 L1440,0 L1440,110 C1080,110 720,110 360,110 Z"
          data-end="M0,0 L1440,0 L1440,480 C1100,580 800,540 500,560 C300,580 120,500 0,440 Z"
          fill={accent}
        />

        {/* Layer 2: Dark Chocolate Mask (Middle) */}
        <path
          d="M0,0 L1440,0 L1440,80 C1080,80 720,80 360,80 Z"
          data-end="M0,0 L1440,0 L1440,390 C1100,490 800,450 500,470 C300,490 120,410 0,350 Z"
          fill={darkChocolate}
        />

        {/* Layer 3: Pink Front curve (Shallowest) */}
        <path
          d="M0,0 L1440,0 L1440,40 C1080,40 720,40 360,40 Z"
          data-end="M0,0 L1440,0 L1440,280 C1100,360 800,330 500,350 C300,370 120,290 0,240 Z"
          fill={accent}
        />
      </svg>

      {/* ── BOTTOM SHAPE — Nested layered curves ── */}
      <svg
        ref={bottomRef}
        aria-hidden="true"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          ...svgStyle,
          bottom: 0,
          transform: 'translateY(15%) scale(1.02)',
        }}
      >
        {/* Layer 1: Pink Base curve (Deepest) */}
        <path
          d="M0,800 L1440,800 L1440,690 C1080,690 720,690 360,690 Z"
          data-end="M0,800 L1440,800 L1440,320 C1100,220 800,260 500,240 C300,220 120,300 0,360 Z"
          fill={accent}
        />

        {/* Layer 2: Dark Chocolate Mask (Middle) */}
        <path
          d="M0,800 L1440,800 L1440,720 C1080,720 720,720 360,720 Z"
          data-end="M0,800 L1440,800 L1440,410 C1100,310 800,350 500,330 C300,310 120,390 0,450 Z"
          fill={darkChocolate}
        />

        {/* Layer 3: Pink Front curve (Shallowest) */}
        <path
          d="M0,800 L1440,800 L1440,760 C1080,760 720,760 360,760 Z"
          data-end="M0,800 L1440,800 L1440,520 C1100,440 800,470 500,450 C300,430 120,510 0,560 Z"
          fill={accent}
        />
      </svg>
    </div>
  );
}

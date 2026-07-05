'use client';
import type { RefObject } from 'react';

interface Props {
  contentRef: RefObject<HTMLDivElement | null>;
}

/**
 * HeroContent
 * ───────────
 * Typography and CTA button layout matching the screenshot exactly:
 *  - Headline text is fully pink (var(--current-color-40)).
 *  - Font sizes, line heights, and margins match the reference screenshot.
 *  - CTA button is styled as a white rectangle with slightly rounded corners (4px),
 *    dark chocolate text, and monospace uppercase font.
 */
export default function HeroContent({ contentRef }: Props) {
  const accent = 'var(--current-color-40)'; // Pink #ff77c9

  return (
    <div
      ref={contentRef}
      className="home__hero__wrapper"
      style={{ position: 'relative', zIndex: 10, isolation: 'isolate' }}
    >
      <div className="home__hero-text" style={{ textAlign: 'center' }}>
        {/* Headline — Very large bold pink centered, tight line height */}
        <h1
          style={{
            fontSize: 'var(--hero-title-size, min(7vw, 6.4rem))', // Large bold scale with mobile variable fallback
            lineHeight: '0.95',
            fontFamily: 'GT-Planar, Inter, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: accent, // Pink headline matching screenshot
            maxWidth: '1000px',
            margin: '0 auto',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            perspective: '1000px',
          }}
        >
          {"Custom B2B Web Development & Software Engineering That Power Growing Businesses.".split(" ").map((word, i) => (
            <b 
              key={i} 
              className="hero-word" 
              style={{ 
                display: 'inline-block', 
                marginRight: '0.25em',
                fontWeight: 'inherit',
                fontStyle: 'normal',
                willChange: 'transform, opacity',
              }}
            >
              {word}
            </b>
          ))}
        </h1>

        {/* Supporting text — kept from existing content but styled to frame nicely */}
        <p
          className="hero-support"
          style={{
            display: 'inline-block',
            marginTop: '2.5rem',
            fontSize: 'var(--hero-support-size, min(2vw, 1.45rem))',
            lineHeight: '1.5',
            maxWidth: '820px',
            color: 'rgba(252,250,248,0.70)',
            fontFamily: 'GT-Planar, Inter, sans-serif',
            fontWeight: 300,
            WebkitFontSmoothing: 'antialiased',
            willChange: 'transform, opacity, filter',
          }}
        >
          We design and develop custom websites, web applications, and software platforms
          that help businesses acquire users, streamline operations, and scale with confidence.
        </p>
      </div>

      {/* Center CTA Button — White rectangle, dark text, monospace uppercase */}
      <div className="home__hero-button" style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
        <a
          className="cta-button"
          href="#contact"
          style={{
            padding: '1.4rem 2.8rem',
            fontSize: '1.2rem',
            fontFamily: 'ABCReproMono, monospace',
            textTransform: 'uppercase',
            fontWeight: 500,
            borderRadius: '4px', // Rectangular with slight rounding
            color: '#211512',
            background: '#fcfaf8',
            border: 'none',
            transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(252,250,248,0.15)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          <div className="cta-button__text">
            <span>Discuss Your B2B Project</span>
          </div>
        </a>
      </div>
    </div>
  );
}

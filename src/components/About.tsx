'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * About Component (2nd Page)
 * ──────────────────────────
 * Recreated with updated editorial copywriting and layout:
 *  - Soft pink background (#ffdfef) covering the entire section.
 *  - Left-aligned dark chocolate text (#322312) with large bold typography and tight line-height.
 *  - Monospace uppercase eyebrow labels.
 *  - Clean bordered container showcasing early collaborator logos.
 */
export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const els = ref.current?.querySelectorAll('.anim-in');
    if (!els) return;

    gsap.fromTo(
      [...els],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={ref}
      className="home__intro"
      id="home__intro"
      style={{
        background: '#ffdfef', // Soft pink background matching the screenshot
        padding: '12rem 0',
        color: '#322312', // Dark chocolate text color
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Eyebrow Label */}
          <p
            className="anim-in section-label"
            style={{
              fontFamily: 'ABCReproMono, monospace',
              fontSize: '1.25rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(50, 35, 18, 0.65)',
              marginBottom: '2rem',
            }}
          >
            Meet NexGrowth
          </p>

          {/* Headline - Products that grow. Not products you'll rebuild. */}
          <h2
            className="anim-in"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)',
              lineHeight: '1.02',
              fontFamily: 'GT-Planar, Inter, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: '#322312',
              margin: '0 0 2rem 0',
              textAlign: 'left',
            }}
          >
            Products that grow.<br />
            Not products you'll rebuild.
          </h2>

          {/* Supporting paragraph text */}
          <p
            className="anim-in"
            style={{
              fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)',
              lineHeight: '1.45',
              fontFamily: 'GT-Planar, Inter, sans-serif',
              fontWeight: 300,
              color: 'rgba(50, 35, 18, 0.85)',
              maxWidth: '820px',
              textAlign: 'left',
              margin: '0 0 5rem 0',
            }}
          >
            We design and engineer websites, MVPs, and software that launch faster, scale effortlessly, and help your business move with confidence.
          </p>

          {/* Collaborators Container Card */}
          <div
            className="anim-in"
            style={{
              background: 'transparent',
              border: '1px solid rgba(50, 35, 18, 0.12)',
              borderRadius: '24px',
              padding: '3.5rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              marginTop: '4rem',
            }}
          >
            {/* Header */}
            <p
              style={{
                fontFamily: 'ABCReproMono, monospace',
                fontSize: '1.1rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(50, 35, 18, 0.55)',
                margin: 0,
              }}
            >
              Early Collaborators Include
            </p>

            {/* Logo Grid Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '3rem',
              }}
            >
              {/* Logo 1: PathPulse / nPulse.ai */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.85 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 16H11V10H13V16ZM13 8H11V6H13V8Z" fill="#322312" />
                </svg>
                <span style={{ fontFamily: 'GT-Planar, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#322312', letterSpacing: '-0.02em' }}>
                  nPulse.ai
                </span>
              </div>

              {/* Logo 2: ./gradient */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: 0.85 }}>
                <span style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '1.9rem', fontWeight: 500, color: '#322312' }}>
                  ./gradient
                </span>
              </div>

              {/* Logo 3: Open Ledger */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.85 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#322312" strokeWidth="2" />
                  <path d="M12 6V12L16 14" stroke="#322312" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span style={{ fontFamily: 'GT-Planar, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#322312', letterSpacing: '-0.02em' }}>
                  Open Ledger
                </span>
              </div>

              {/* Logo 4: NBCUniversal */}
              <div style={{ display: 'flex', alignItems: 'center', opacity: 0.85 }}>
                <span style={{ fontFamily: 'GT-Planar, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#322312', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  NBCUniversal
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

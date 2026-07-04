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
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                gap: '4rem 6rem',
              }}
            >
              {/* Logo 1: dashifyservices */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.85 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="9" rx="1.5" stroke="#322312" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="5" rx="1.5" stroke="#322312" strokeWidth="2"/>
                  <rect x="3" y="16" width="7" height="5" rx="1.5" stroke="#322312" strokeWidth="2"/>
                  <rect x="14" y="12" width="7" height="9" rx="1.5" stroke="#322312" strokeWidth="2"/>
                </svg>
                <span style={{ fontFamily: 'GT-Planar, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#322312', letterSpacing: '-0.02em' }}>
                  dashifyservices
                </span>
              </div>

              {/* Logo 2: Morality Home Care */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.85 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke="#322312" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V12H15V21" stroke="#322312" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily: 'GT-Planar, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: '#322312', letterSpacing: '-0.01em' }}>
                  Morality Home Care
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

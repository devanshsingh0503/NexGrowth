'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Section elements fade & slide up
    const els = ref.current?.querySelectorAll('.anim-in');
    if (els && els.length > 0) {
      gsap.fromTo(
        [...els],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Stats counter animation
    if (statsRef.current) {
      const statObj = { val1: 0, val2: 0, val3: 0 };
      gsap.to(statObj, {
        val1: 50,
        val2: 3,
        val3: 100,
        duration: 2.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
        },
        onUpdate: () => {
          if (stat1Ref.current) stat1Ref.current.innerText = `${Math.floor(statObj.val1)}+`;
          if (stat2Ref.current) stat2Ref.current.innerText = `${Math.floor(statObj.val2)}`;
          if (stat3Ref.current) stat3Ref.current.innerText = `${Math.floor(statObj.val3)}%`;
        },
      });
    }
  }, []);

  return (
    <section
      ref={ref}
      className="home__intro about-section"
      id="home__intro"
      style={{
        background: '#171916',
        color: '#f4f2ea',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          {/* Eyebrow Label */}
          <p
            className="anim-in"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#e5ff3d',
              marginBottom: '1.8rem',
            }}
          >
            B2B Web Development &amp; Software Company
          </p>

          {/* Headline */}
          <h2
            className="anim-in"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              lineHeight: 1.05,
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#f4f2ea',
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
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              lineHeight: 1.55,
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 400,
              color: 'rgba(244, 242, 234, 0.7)',
              maxWidth: '780px',
              textAlign: 'left',
              margin: '0 0 4rem 0',
            }}
          >
            We design and engineer high-performance business websites, custom software, SaaS web
            applications, and MVPs that launch faster, scale effortlessly, and help your business move
            with confidence.
          </p>

          {/* Stats Row */}
          <div
            ref={statsRef}
            className="anim-in stats-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              margin: '3rem 0 4rem 0',
              padding: '2.5rem 0',
              borderTop: '1px solid rgba(244, 242, 234, 0.12)',
              borderBottom: '1px solid rgba(244, 242, 234, 0.12)',
              gap: '2rem',
            }}
          >
            {/* Stat 1 */}
            <div style={{ flex: 1 }}>
              <div
                ref={stat1Ref}
                style={{
                  fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                  fontSize: '4rem',
                  fontWeight: 700,
                  color: '#e5ff3d',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                50+
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: '#f4f2ea',
                  letterSpacing: '0.02em',
                }}
              >
                Projects Delivered
              </div>
            </div>

            {/* Divider 1 */}
            <div
              className="stat-divider"
              style={{
                width: '1px',
                height: '60px',
                background: 'rgba(244, 242, 234, 0.12)',
              }}
            />

            {/* Stat 2 */}
            <div style={{ flex: 1 }}>
              <div
                ref={stat2Ref}
                style={{
                  fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                  fontSize: '4rem',
                  fontWeight: 700,
                  color: '#e5ff3d',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                3
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: '#f4f2ea',
                  letterSpacing: '0.02em',
                }}
              >
                Countries Served
              </div>
            </div>

            {/* Divider 2 */}
            <div
              className="stat-divider"
              style={{
                width: '1px',
                height: '60px',
                background: 'rgba(244, 242, 234, 0.12)',
              }}
            />

            {/* Stat 3 */}
            <div style={{ flex: 1 }}>
              <div
                ref={stat3Ref}
                style={{
                  fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                  fontSize: '4rem',
                  fontWeight: 700,
                  color: '#e5ff3d',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                100%
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: '#f4f2ea',
                  letterSpacing: '0.02em',
                }}
              >
                Client Satisfaction
              </div>
            </div>
          </div>

          {/* Collaborators Container Card */}
          <div
            className="anim-in"
            style={{
              background: 'transparent',
              border: '1px solid rgba(244, 242, 234, 0.10)',
              borderRadius: '16px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              marginTop: '3.5rem',
            }}
          >
            {/* Header */}
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(244, 242, 234, 0.6)',
                margin: 0,
              }}
            >
              EARLY COLLABORATORS INCLUDE
            </p>

            {/* Logo Grid Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                gap: '3.5rem 5rem',
              }}
            >
              {/* Logo 1: dashifyservices */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.9 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="9" rx="1.5" stroke="#f4f2ea" strokeWidth="2" />
                  <rect x="14" y="3" width="7" height="5" rx="1.5" stroke="#f4f2ea" strokeWidth="2" />
                  <rect x="3" y="16" width="7" height="5" rx="1.5" stroke="#f4f2ea" strokeWidth="2" />
                  <rect x="14" y="12" width="7" height="9" rx="1.5" stroke="#f4f2ea" strokeWidth="2" />
                </svg>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#f4f2ea',
                    letterSpacing: '-0.02em',
                  }}
                >
                  dashifyservices
                </span>
              </div>

              {/* Logo 2: Morality Home Care */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.9 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z"
                    stroke="#f4f2ea"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 21V12H15V21"
                    stroke="#f4f2ea"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#f4f2ea',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Morality Home Care
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 8rem 0;
        }
        @media (max-width: 768px) {
          .about-section {
            padding: 5rem 0;
          }
          .stats-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2.2rem !important;
          }
          .stat-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

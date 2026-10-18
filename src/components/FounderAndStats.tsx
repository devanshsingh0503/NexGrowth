'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FounderAndStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const stat3Ref = useRef<HTMLSpanElement>(null);
  const stat4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (statsContainerRef.current) {
        const statBoxes = statsContainerRef.current.children;
        gsap.fromTo(
          statBoxes,
          { y: 35, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.1)',
            scrollTrigger: {
              trigger: statsContainerRef.current,
              start: 'top 85%',
            },
          }
        );

        const counter = { val1: 0, val2: 0, val3: 0, val4: 2.8 };

        gsap.to(counter, {
          val1: 50,
          val2: 3,
          val3: 100,
          val4: 1.2,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: 'top 85%',
          },
          onUpdate: () => {
            if (stat1Ref.current) stat1Ref.current.innerText = `${Math.floor(counter.val1)}+`;
            if (stat2Ref.current) stat2Ref.current.innerText = `${Math.floor(counter.val2)}`;
            if (stat3Ref.current) stat3Ref.current.innerText = `${Math.floor(counter.val3)}%`;
            if (stat4Ref.current) stat4Ref.current.innerText = `<${counter.val4.toFixed(1)}s`;
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ethosTags = [
    'BUILT FOR PEOPLE',
    'CODE WITH PRIDE',
    'ROOM TO GROW',
    'DATA BACKED',
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#171916',
        color: '#f4f2ea',
        padding: '7rem 0 8rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="flow-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Ethos & Founder Statement */}
          <div ref={contentRef} style={{ maxWidth: '580px' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="flow-tag-dark">
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#e5ff3d',
                  }}
                />
                OUR ETHOS &amp; PHILOSOPHY
              </span>
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                lineHeight: 1.0,
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: '#f4f2ea',
                marginBottom: '1.75rem',
              }}
            >
              WORK IS HUMAN. WE BUILD IT THAT WAY.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: 'rgba(244, 242, 234, 0.75)',
                marginBottom: '1.5rem',
              }}
            >
              NexGrowth began with a simple what-if: what if B2B web applications and enterprise websites felt as fluid, human, and thoughtful as consumer software?
            </p>

            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'rgba(244, 242, 234, 0.6)',
                marginBottom: '2.5rem',
              }}
            >
              No cookie-cutter templates or bloated architectures. We operate as an extension of your product team — crafting custom digital systems that convert traffic into loyal accounts.
            </p>

            {/* Pill Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {ethosTags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(244, 242, 234, 0.08)',
                    color: '#f4f2ea',
                    border: '1px solid rgba(244, 242, 234, 0.12)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Stat Counters in #e5ff3d */}
          <div
            ref={statsContainerRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.75rem',
            }}
          >
            {/* Stat 1 */}
            <div
              style={{
                backgroundColor: '#1f221e',
                borderRadius: '20px',
                border: '1px solid rgba(244, 242, 234, 0.1)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <span
                ref={stat1Ref}
                className="font-display"
                style={{
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
                  lineHeight: 1,
                  fontWeight: 700,
                  color: '#e5ff3d',
                  marginBottom: '0.5rem',
                }}
              >
                50+
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(244, 242, 234, 0.65)',
                }}
              >
                Projects Delivered
              </span>
            </div>

            {/* Stat 2 */}
            <div
              style={{
                backgroundColor: '#1f221e',
                borderRadius: '20px',
                border: '1px solid rgba(244, 242, 234, 0.1)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <span
                ref={stat2Ref}
                className="font-display"
                style={{
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
                  lineHeight: 1,
                  fontWeight: 700,
                  color: '#e5ff3d',
                  marginBottom: '0.5rem',
                }}
              >
                3
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(244, 242, 234, 0.65)',
                }}
              >
                Countries Served
              </span>
            </div>

            {/* Stat 3 */}
            <div
              style={{
                backgroundColor: '#1f221e',
                borderRadius: '20px',
                border: '1px solid rgba(244, 242, 234, 0.1)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <span
                ref={stat3Ref}
                className="font-display"
                style={{
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
                  lineHeight: 1,
                  fontWeight: 700,
                  color: '#e5ff3d',
                  marginBottom: '0.5rem',
                }}
              >
                100%
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(244, 242, 234, 0.65)',
                }}
              >
                Client Satisfaction
              </span>
            </div>

            {/* Stat 4 */}
            <div
              style={{
                backgroundColor: '#1f221e',
                borderRadius: '20px',
                border: '1px solid rgba(244, 242, 234, 0.1)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <span
                ref={stat4Ref}
                className="font-display"
                style={{
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
                  lineHeight: 1,
                  fontWeight: 700,
                  color: '#e5ff3d',
                  marginBottom: '0.5rem',
                }}
              >
                &lt;2s
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(244, 242, 234, 0.65)',
                }}
              >
                Average Load Time
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

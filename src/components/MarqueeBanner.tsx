'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MarqueeBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (badgesRef.current) {
        gsap.fromTo(
          badgesRef.current.children,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          }
        );

        // Scroll scrub interactive float & rotations
        const badgeEls = Array.from(badgesRef.current.children);
        if (badgeEls[0]) {
          gsap.to(badgeEls[0], {
            rotate: 4,
            y: -15,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }
        if (badgeEls[1]) {
          gsap.to(badgeEls[1], {
            rotate: -6,
            y: 15,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }
        if (badgeEls[2]) {
          gsap.to(badgeEls[2], {
            rotate: 5,
            y: -12,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }
      }

      if (textRef.current && containerRef.current) {
        gsap.fromTo(
          textRef.current,
          { scale: 0.96 },
          {
            scale: 1.03,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        backgroundColor: '#f4f2ea',
        padding: '8rem 0 7rem',
        borderTop: '1px solid rgba(23, 25, 22, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="flow-container" style={{ textAlign: 'center' }}>
        {/* Stickers / Pill Badges */}
        <div
          ref={badgesRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.85rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              backgroundColor: '#171916',
              color: '#e5ff3d',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              transform: 'rotate(-2deg)',
            }}
          >
            [LESS FRICTION]
          </span>

          <span
            style={{
              backgroundColor: '#e5ff3d',
              color: '#171916',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              border: '1px solid #171916',
              transform: 'rotate(2deg)',
            }}
          >
            [MORE FLOW]
          </span>

          <span
            style={{
              backgroundColor: '#ffffff',
              color: '#171916',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              border: '1px solid rgba(23, 25, 22, 0.15)',
              transform: 'rotate(-1deg)',
            }}
          >
            [NEXGROWTH®]
          </span>
        </div>

        {/* Big Energetic Headline */}
        <h2
          ref={textRef}
          className="font-display"
          style={{
            fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
            lineHeight: 0.96,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#171916',
            maxWidth: '1000px',
            margin: '0 auto 2.5rem',
          }}
        >
          <div>YOUR NEXT GOOD IDEA.</div>
          <div>IN FLOW.</div>
          <div>BUILT TO SCALE.</div>
        </h2>

        <div>
          <a
            href="#contact"
            className="btn-primary-lime"
            style={{
              fontSize: '1.05rem',
              padding: '1.1rem 2.5rem',
            }}
          >
            Start Your Project Now →
          </a>
        </div>
      </div>
    </section>
  );
}

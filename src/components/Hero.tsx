'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (tagRef.current) {
        tl.fromTo(
          tagRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        );
      }

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current.children,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.12 },
          '-=0.3'
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, clearProps: 'opacity,transform' },
          '-=0.4'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, clearProps: 'opacity,transform' },
          '-=0.4'
        );
      }

      if (marqueeRef.current) {
        tl.fromTo(
          marqueeRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, clearProps: 'opacity' },
          '-=0.2'
        );
      }

      // ── Scroll-based Editorial Parallax (Drift without fading out text) ──
      if (headlineRef.current && containerRef.current) {
        const line1 = headlineRef.current.children[0];
        const line2 = headlineRef.current.children[1];
        const line3 = headlineRef.current.children[2];

        // Opposing horizontal drift on scroll
        gsap.to(line1, {
          x: -35,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });

        gsap.to(line2, {
          x: 35,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });

        gsap.to(line3, {
          x: -25,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const marqueeItems = [
    'Custom Websites',
    'SaaS Dashboards',
    'Technical SEO',
    'Enterprise Software',
    'Google Ads & PPC',
    'High-Converting UX',
    'Speed & Core Web Vitals',
    'Full-Stack Architecture',
  ];

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        backgroundColor: '#f4f2ea',
        paddingTop: 'clamp(110px, 16vh, 170px)',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      <div className="flow-container">
        {/* Eyebrow Tag Pill */}
        <div ref={tagRef} style={{ marginBottom: '1.75rem' }}>
          <div className="flow-tag">
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#171916',
              }}
            />
            B2B WEB DEVELOPMENT &amp; SOFTWARE ENGINEERING
          </div>
        </div>

        {/* Giant Editorial Headline */}
        <h1
          ref={headlineRef}
          className="font-display"
          style={{
            fontSize: 'clamp(3.5rem, 8.2vw, 7.5rem)',
            lineHeight: 0.94,
            fontWeight: 700,
            color: '#171916',
            letterSpacing: '-0.03em',
            marginBottom: '2rem',
            maxWidth: '1100px',
            willChange: 'transform, opacity',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <span style={{ display: 'inline-block' }}>YOUR PRODUCT,</span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span style={{ display: 'inline-block' }}>FINALLY</span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span style={{ display: 'inline-block' }}>IN FLOW.</span>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontSize: 'clamp(1.125rem, 1.4vw, 1.35rem)',
            lineHeight: 1.6,
            color: '#171916',
            fontWeight: 450,
            maxWidth: '680px',
            marginBottom: '2.5rem',
            opacity: 1,
          }}
        >
          We design and develop custom websites, web applications, and software platforms that help businesses acquire users, streamline operations, and scale with confidence.
        </p>

        {/* CTA Button Row */}
        <div
          ref={ctaRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '5rem',
          }}
        >
          <a
            href="#contact"
            className="btn-primary-lime"
            style={{ fontSize: '1rem', padding: '1rem 2rem' }}
          >
            <span>Discuss Your B2B Project</span>
            <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>→</span>
          </a>

          <a
            href="#services"
            className="btn-secondary-outline"
            style={{ fontSize: '1rem', padding: '1rem 2rem' }}
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* FlowPilot Infinite Marquee Ticker */}
      <div
        ref={marqueeRef}
        style={{
          width: '100%',
          overflow: 'hidden',
          borderTop: '1px solid rgba(23, 25, 22, 0.08)',
          borderBottom: '1px solid rgba(23, 25, 22, 0.08)',
          padding: '1.25rem 0',
          backgroundColor: 'rgba(23, 25, 22, 0.02)',
        }}
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.75rem',
                marginRight: '1.75rem',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'rgba(23, 25, 22, 0.45)',
                }}
              >
                {item}
              </span>
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#e5ff3d',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

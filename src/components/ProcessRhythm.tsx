'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Step {
  num: string;
  phase: string;
  headline: string;
  desc: string;
  deliverables: string[];
  timeline: string;
}

const steps: Step[] = [
  {
    num: '01',
    phase: 'ONBOARD',
    headline: 'MAP THE BUSINESS AND THE FLOW.',
    desc: 'Before a single line of code moves, we go deep into your core model, audience personas, and technical requirements. We build interactive wireframes so every user journey is proven before visual engineering begins.',
    deliverables: ['Discovery & Requirements Audit', 'Competitive Moat Analysis', 'Interactive Wireframe Flow', 'Tech Stack & Schema Plan'],
    timeline: 'Days 1 – 4',
  },
  {
    num: '02',
    phase: 'ENGINEER',
    headline: 'BUILD THE MACHINE WITH ZERO BLOAT.',
    desc: 'We engineer your digital platform in Next.js 16 and clean TypeScript. No clunky plugins or bloated third-party templates. Every page is crafted for sub-second speeds, flawless accessibility, and rock-solid reliability.',
    deliverables: ['Next.js 16 Production Codebase', 'Responsive UI & Micro-Interactions', 'Database & API Microservices', 'Core Web Vitals 95+ Tuning'],
    timeline: 'Days 5 – 12',
  },
  {
    num: '03',
    phase: 'SCALE',
    headline: 'LAUNCH WITH CONFIDENCE AND SUSTAINED SPEED.',
    desc: 'Launch day is the start of momentum, not the finish line. We run end-to-end QA, verify technical SEO indexing, integrate tracking pipelines, and remain in your corner with ongoing feature upgrades and support.',
    deliverables: ['Zero-Downtime Deployment', 'Google Analytics 4 & Conversion Setup', 'Technical SEO Indexation', '30-Day Guaranteed Warranty'],
    timeline: 'Days 13 – 14+',
  },
];

export default function ProcessRhythm() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            }
          );

          // Focus state when card is in reading center
          gsap.to(card, {
            borderColor: 'rgba(23, 25, 22, 0.3)',
            boxShadow: '0 20px 48px rgba(23, 25, 22, 0.08)',
            scrollTrigger: {
              trigger: card,
              start: 'top 65%',
              end: 'bottom 35%',
              toggleActions: 'play reverse play reverse',
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        backgroundColor: '#f4f2ea',
        padding: '6rem 0 8rem',
        position: 'relative',
      }}
    >
      <div className="flow-container">
        {/* Section Header */}
        <div ref={headerRef} style={{ maxWidth: '820px', marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="flow-tag">
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#171916',
                }}
              />
              EXECUTION PROCESS
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              lineHeight: 1.0,
              fontWeight: 700,
              color: '#171916',
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem',
            }}
          >
            YOUR RHYTHM. YOUR RULES.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1.125rem',
              color: '#50534b',
              lineHeight: 1.6,
            }}
          >
            A clear, predictable roadmap from raw requirements to a live high-performance platform. No surprises, no endless meetings, and zero wasted motion.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div
          ref={cardsRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(23, 25, 22, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Left Column: Number, Phase, Headline */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#171916',
                    }}
                  >
                    {step.num}
                  </span>
                  <span style={{ color: 'rgba(23, 25, 22, 0.3)' }}>/</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#50534b',
                    }}
                  >
                    {step.phase}
                  </span>
                  <span
                    style={{
                      marginLeft: 'auto',
                      backgroundColor: 'rgba(23, 25, 22, 0.05)',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#50534b',
                    }}
                  >
                    {step.timeline}
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                    lineHeight: 1.05,
                    fontWeight: 700,
                    color: '#171916',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {step.headline}
                </h3>
              </div>

              {/* Right Column: Description & Deliverables */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#50534b',
                    marginBottom: '1.5rem',
                  }}
                >
                  {step.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {step.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: '#f4f2ea',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: '#171916',
                      }}
                    >
                      <span style={{ color: '#171916', fontSize: '0.8rem' }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Their ability to hear what we had to say and act on it pretty quickly is very impressive. They were highly responsive throughout the process and shipped ahead of schedule.',
    name: 'Lindsay Dufresne',
    role: 'Director of Customer Success',
    company: 'Syntelli Solutions',
    country: 'United States',
  },
  {
    quote: 'Responsive, cost-effective website designs that built deep trust with bilingual audiences. The engineering was top-tier and mobile performance is pristine.',
    name: 'Mark Blackburn',
    role: 'Founder',
    company: 'Curated Health',
    country: 'Puerto Rico',
  },
  {
    quote: 'We had a vision for what we wanted and they were able to execute on it. Amazing. They were extremely reliable and great partners to work with throughout our product launch.',
    name: 'Emily Bartels',
    role: 'Product Lead',
    company: 'Tech Operations',
    country: 'United Kingdom',
  },
  {
    quote: 'NexGrowth converted complex logistics workflows into a clean, intuitive platform. Our internal operations team saved hours every week right after rollout.',
    name: 'Leadership Team',
    role: 'Operations & Technology',
    company: 'Dashify Services',
    country: 'India',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{
        backgroundColor: '#f4f2ea',
        padding: '6rem 0 8rem',
        position: 'relative',
      }}
    >
      <div className="flow-container">
        {/* Header */}
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
              CLIENT VOICES &amp; FEEDBACK
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
            TRUSTED PARTNERS. REAL VOICES.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1.125rem',
              color: '#50534b',
              lineHeight: 1.6,
            }}
          >
            We take pride in long-term partnerships built on clear communication, technical excellence, and measurable return on investment.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(23, 25, 22, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* 5-Star indicator & Quote Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '3px', color: '#171916' }}>
                    {[...Array(5)].map((_, sIdx) => (
                      <span key={sIdx} style={{ fontSize: '1rem', color: '#171916' }}>★</span>
                    ))}
                  </div>

                  <span
                    style={{
                      fontFamily: 'serif',
                      fontSize: '1.75rem',
                      lineHeight: 1,
                      color: '#e5ff3d',
                      backgroundColor: '#171916',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    “
                  </span>
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    color: '#171916',
                    marginBottom: '2rem',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(23, 25, 22, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#171916',
                    color: '#f4f2ea',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                  }}
                >
                  {t.name[0]}
                </div>

                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: '#171916',
                    }}
                  >
                    {t.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.8125rem',
                      color: '#50534b',
                    }}
                  >
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

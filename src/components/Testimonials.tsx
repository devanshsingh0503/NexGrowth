'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const testimonialsData = [
  {
    quote: `"Their ability to hear what we had to say and act on it pretty quickly is very impressive. They were highly responsive throughout the process."`,
    name: 'Lindsay Dufresne',
    role: 'Director of Customer Success',
    company: 'Syntelli Solutions',
  },
  {
    quote: `"Responsive, cost-effective website designs that built trust with bilingual audiences. The engineering was top-tier."`,
    name: 'Mark Blackburn',
    role: 'Founder',
    company: 'Curated Health, Puerto Rico',
  },
  {
    quote: `"We had a vision for what we wanted and they were able to execute on it. Amazing. They were extremely reliable and great partners to work with."`,
    name: 'Emily Bartels',
    role: 'Product Lead',
    company: 'Tech Operations',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = ref.current;
    if (!section) return;

    // Header animation
    const headerEls = section.querySelectorAll('.anim-header');
    if (headerEls.length > 0) {
      gsap.fromTo(
        [...headerEls],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );
    }

    // Cards animation with stagger 0.12s from y:60 opacity:0
    const cards = section.querySelectorAll('.testimonial-card');
    if (cards.length > 0) {
      gsap.fromTo(
        [...cards],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={ref}
      className="home__partners testimonials-section"
      id="testimonials"
      style={{
        background: '#f4f2ea',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Eyebrow */}
        <p
          className="anim-header"
          style={{
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#50534b',
            marginBottom: '1.2rem',
          }}
        >
          TESTIMONIALS
        </p>

        {/* Headline */}
        <h2
          className="anim-header"
          style={{
            fontFamily: 'var(--font-oswald), Oswald, sans-serif',
            fontWeight: 700,
            color: '#171916',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '3.5rem',
          }}
        >
          What Clients Say About Working With Us
        </h2>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
        >
          {testimonialsData.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                background: '#ffffff',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                borderRadius: '16px',
                padding: '2.5rem',
                boxSizing: 'border-box',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(23, 25, 22, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* 5-Star Rating */}
                <div style={{ display: 'flex', gap: '5px', marginBottom: '1.8rem' }}>
                  {[...Array(5)].map((_, sIdx) => (
                    <svg
                      key={sIdx}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#e5ff3d"
                      stroke="#171916"
                      strokeWidth="0.8"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '1.05rem',
                    color: '#171916',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    margin: '0 0 2rem 0',
                  }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div style={{ borderTop: '1px solid rgba(23, 25, 22, 0.06)', paddingTop: '1.2rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#171916',
                    margin: '0 0 0.25rem 0',
                  }}
                >
                  {t.name}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.85rem',
                    color: '#50534b',
                    display: 'block',
                  }}
                >
                  {t.role} – {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 8rem 0;
        }
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 5rem 0;
          }
        }
      `}</style>
    </section>
  );
}

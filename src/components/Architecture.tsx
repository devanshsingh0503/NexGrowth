'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Architecture() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const els = ref.current?.querySelectorAll('.anim-in');
    if (!els || els.length === 0) return;

    gsap.fromTo(
      [...els],
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
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
      className="home__architecture"
      id="numbers"
      style={{
        paddingTop: '8rem',
        paddingBottom: '8rem',
        background: '#171916',
        color: '#f4f2ea',
        position: 'relative',
        borderTop: '1px solid rgba(244, 242, 234, 0.08)',
        borderBottom: '1px solid rgba(244, 242, 234, 0.08)',
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
          <span
            className="anim-in"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#e5ff3d',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            By The Numbers // Proven Impact
          </span>
          <h2
            className="anim-in"
            style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: 'clamp(2.6rem, 4.5vw, 4.2rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#f4f2ea',
              marginBottom: '1.2rem',
            }}
          >
            NexGrowth by the Numbers
          </h2>
          <p
            className="anim-in"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              color: 'rgba(244, 242, 234, 0.65)',
              margin: '0 auto',
            }}
          >
            A track record of engineering scalable platforms, custom software, and conversions that drive B2B growth globally.
          </p>
        </div>

        <div
          className="anim-in"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
          }}
        >
          {[
            { label: 'Projects delivered', value: '8+' },
            { label: 'Client satisfaction', value: '100%' },
            { label: 'Industries served', value: '5' },
            { label: 'Avg. load time', value: '<2s' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: '#1d201c',
                border: '1px solid rgba(244, 242, 234, 0.10)',
                borderRadius: '20px',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(229, 255, 61, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(244, 242, 234, 0.10)';
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(3.2rem, 5vw, 4.8rem)',
                  fontWeight: 700,
                  color: '#e5ff3d',
                  lineHeight: 1,
                  fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                }}
              >
                {stat.value}
              </div>
              <span
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(244, 242, 234, 0.7)',
                  marginTop: '1.2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

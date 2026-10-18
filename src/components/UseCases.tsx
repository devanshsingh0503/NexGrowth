'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DARK_BG = '#171916';
const LIGHT_BG = '#f4f2ea';

export default function UseCases() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = 3;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = ref.current?.querySelectorAll('.anim-slide');
    if (!items || items.length === 0) return;

    gsap.fromTo(
      [...items],
      { x: 50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.9, 
        stagger: 0.15, 
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' } 
      }
    );
  }, []);

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, total - 1));
    setActive(clamped);

    // Slide track transition
    if (trackRef.current) {
      gsap.to(trackRef.current, { 
        x: `-${clamped * 100}%`, 
        duration: 0.8, 
        ease: 'power3.inOut' 
      });
    }

    // Realistic lighting switch transition
    const tl = gsap.timeline();
    if (clamped === 0) {
      // Light turned off (dark mode)
      tl.to(ref.current, {
        backgroundColor: DARK_BG,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    } else {
      // Light turned on (subtle flash warm-up)
      tl.to(ref.current, {
        backgroundColor: '#ffffff',
        duration: 0.08,
        ease: 'none',
      })
      .to(ref.current, {
        backgroundColor: LIGHT_BG,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  const isLight = active > 0;
  const textColor = isLight ? '#171916' : '#f4f2ea';
  const bodyColor = isLight ? '#50534b' : 'rgba(244, 242, 234, 0.7)';

  return (
    <section 
      ref={ref} 
      className="home__use-cases" 
      id="why-nexgrowth"
      style={{
        background: DARK_BG,
        color: textColor,
        transition: 'color 0.5s ease',
        position: 'relative',
        overflow: 'hidden',
        padding: '10rem 0',
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
        <div 
          className="home__use-cases__content__slider" 
          style={{ 
            overflow: 'hidden', 
            position: 'relative', 
            borderRadius: '28px',
          }}
        >
          
          <div 
            ref={trackRef} 
            className="home__use-cases__content__slider__container" 
            style={{ display: 'flex', willChange: 'transform' }}
          >
            
            {/* Slide 0: Other Agencies (Dark) */}
            <div className="use-case-slide anim-slide" style={{ minWidth: '100%', padding: '3.5rem 1.5rem' }}>
              <div 
                className="use-case-card" 
                style={{ 
                  background: isLight ? '#ffffff' : '#1d201c',
                  border: isLight ? '1px solid rgba(23, 25, 22, 0.08)' : '1px solid rgba(244, 242, 234, 0.10)',
                  borderRadius: '28px',
                  padding: '4.5rem',
                  boxShadow: isLight ? '0 16px 48px rgba(23, 25, 22, 0.06)' : '0 20px 60px rgba(0, 0, 0, 0.45)',
                  transition: 'all 0.5s ease',
                }}
              >
                <div 
                  className="home__use-cases__content__slide__left__tag"
                  style={{
                    display: 'inline-block',
                    border: '1px solid rgba(244, 242, 234, 0.15)',
                    background: 'rgba(244, 242, 234, 0.05)',
                    padding: '5px 14px',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-inter), Inter, monospace',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'rgba(244, 242, 234, 0.75)',
                    marginBottom: '2.2rem',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <span>Other Agencies</span>
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                    fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                    fontWeight: 700,
                    lineHeight: 1.12,
                    color: textColor,
                    marginBottom: '2rem',
                    maxWidth: '840px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  Why settle for less with traditional agencies?
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '1.35rem',
                    lineHeight: 1.6,
                    color: bodyColor,
                    marginBottom: '3.2rem',
                    maxWidth: '740px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  Traditional agencies often build generic, template-based solutions that fail to address your business context. With poor collaboration, slow and unstructured processes, a limited understanding of your brand, and no support after delivery, projects quickly fall behind schedule and fail to achieve growth.
                </p>
                <a 
                  className="cta-button" 
                  href="#contact"
                  style={{
                    background: '#e5ff3d',
                    color: '#171916',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '1.1rem 2.6rem',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(229, 255, 61, 0.25)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(229, 255, 61, 0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(229, 255, 61, 0.25)';
                  }}
                >
                  <span>Get Free SEO Audit</span>
                </a>
              </div>
            </div>

            {/* Slide 1: The NexGrowth Difference (Light) */}
            <div className="use-case-slide anim-slide" style={{ minWidth: '100%', padding: '3.5rem 1.5rem' }}>
              <div 
                className="use-case-card" 
                style={{ 
                  background: isLight ? '#ffffff' : '#1d201c',
                  border: isLight ? '1px solid rgba(23, 25, 22, 0.08)' : '1px solid rgba(244, 242, 234, 0.10)',
                  borderRadius: '28px',
                  padding: '4.5rem',
                  boxShadow: isLight ? '0 16px 48px rgba(23, 25, 22, 0.06)' : '0 20px 60px rgba(0, 0, 0, 0.45)',
                  transition: 'all 0.5s ease',
                }}
              >
                <div 
                  className="home__use-cases__content__slide__left__tag"
                  style={{
                    display: 'inline-block',
                    background: '#171916',
                    color: '#e5ff3d',
                    padding: '5px 14px',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-inter), Inter, monospace',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '2.2rem',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <span>The NexGrowth Difference</span>
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                    fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                    fontWeight: 700,
                    lineHeight: 1.12,
                    color: textColor,
                    marginBottom: '2rem',
                    maxWidth: '840px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  Custom B2B website development &amp; software engineering.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '1.35rem',
                    lineHeight: 1.6,
                    color: bodyColor,
                    marginBottom: '3.2rem',
                    maxWidth: '740px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  At NexGrowth, we believe great products are engineered, not improvised. We stand for quick and clear communication, custom-built digital solutions tailored to your goals, a transparent process with firm timelines, and deep brand/UX research. Plus, we offer free post-launch maintenance to keep your site optimized.
                </p>
                <a 
                  className="cta-button" 
                  href="#contact"
                  style={{
                    background: '#171916',
                    color: '#e5ff3d',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '1.1rem 2.6rem',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(23, 25, 22, 0.25)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(23, 25, 22, 0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(23, 25, 22, 0.25)';
                  }}
                >
                  <span>Get Custom Web Quote</span>
                </a>
              </div>
            </div>

            {/* Slide 2: Why NexGrowth (Light) */}
            <div className="use-case-slide anim-slide" style={{ minWidth: '100%', padding: '3.5rem 1.5rem' }}>
              <div 
                className="use-case-card" 
                style={{ 
                  background: isLight ? '#ffffff' : '#1d201c',
                  border: isLight ? '1px solid rgba(23, 25, 22, 0.08)' : '1px solid rgba(244, 242, 234, 0.10)',
                  borderRadius: '28px',
                  padding: '4.5rem',
                  boxShadow: isLight ? '0 16px 48px rgba(23, 25, 22, 0.06)' : '0 20px 60px rgba(0, 0, 0, 0.45)',
                  transition: 'all 0.5s ease',
                }}
              >
                <div 
                  className="home__use-cases__content__slide__left__tag"
                  style={{
                    display: 'inline-block',
                    background: '#171916',
                    color: '#e5ff3d',
                    padding: '5px 14px',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-inter), Inter, monospace',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '2.2rem',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <span>Why NexGrowth</span>
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                    fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                    fontWeight: 700,
                    lineHeight: 1.12,
                    color: textColor,
                    marginBottom: '2rem',
                    maxWidth: '840px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  Detailed process over guesswork.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '1.35rem',
                    lineHeight: 1.6,
                    color: bodyColor,
                    marginBottom: '3.2rem',
                    maxWidth: '740px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  We deep-dive into your business model, customer journeys, and competitive landscape. We map every user action, design bespoke mockups, write clean responsive code, perform extensive testing, and launch with precision. A reliable partner to scale your engineering efforts with confidence.
                </p>
                <a 
                  className="cta-button" 
                  href="#contact"
                  style={{
                    background: '#171916',
                    color: '#e5ff3d',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '1.1rem 2.6rem',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(23, 25, 22, 0.25)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(23, 25, 22, 0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(23, 25, 22, 0.25)';
                  }}
                >
                  <span>Discuss Your Project</span>
                </a>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div 
            className="home__use-cases__content__slide__left__navigation"
            style={{
              position: 'absolute',
              right: '32px',
              bottom: '32px',
              display: 'flex',
              gap: '12px',
              zIndex: 10,
            }}
          >
            <button 
              className="home__use-cases__content__slide__nav-btn"
              onClick={() => goTo(active - 1)} 
              aria-label="Previous"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: isLight ? 'rgba(23, 25, 22, 0.08)' : 'rgba(244, 242, 234, 0.08)',
                border: isLight ? '1px solid rgba(23, 25, 22, 0.15)' : '1px solid rgba(244, 242, 234, 0.15)',
                color: textColor,
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.borderColor = '#e5ff3d';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = isLight ? 'rgba(23, 25, 22, 0.15)' : 'rgba(244, 242, 234, 0.15)';
              }}
            >
              &#8592;
            </button>
            <button 
              className="home__use-cases__content__slide__nav-btn"
              onClick={() => goTo(active + 1)} 
              aria-label="Next"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: isLight ? 'rgba(23, 25, 22, 0.08)' : 'rgba(244, 242, 234, 0.08)',
                border: isLight ? '1px solid rgba(23, 25, 22, 0.15)' : '1px solid rgba(244, 242, 234, 0.15)',
                color: textColor,
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.borderColor = '#e5ff3d';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = isLight ? 'rgba(23, 25, 22, 0.15)' : 'rgba(244, 242, 234, 0.15)';
              }}
            >
              &#8594;
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

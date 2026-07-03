'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DARK_BG = '#1b0d22'; // Gloomy deep plum
const LIGHT_BG = '#ECDDFC'; // Premium light lavender/white
const DARK_TEXT = 'rgba(236, 221, 252, 0.45)';
const LIGHT_TEXT = '#410060';

export default function UseCases() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = 3;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = ref.current?.querySelectorAll('.anim-slide');
    if (!items) return;

    gsap.fromTo([...items],
      { x: 60, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.9, 
        stagger: 0.2, 
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

    // Realistic light-bulb turn-on / turn-off transition
    const tl = gsap.timeline();
    if (clamped === 0) {
      // Light turned off
      tl.to(ref.current, {
        backgroundColor: DARK_BG,
        color: DARK_TEXT,
        duration: 0.7,
        ease: 'power2.inOut',
      });
    } else {
      // Light turned on (rapid warm-up ignition effect)
      tl.to(ref.current, {
        backgroundColor: '#ffffff', // brief bright flash
        color: LIGHT_TEXT,
        duration: 0.08,
        ease: 'none',
      })
      .to(ref.current, {
        backgroundColor: LIGHT_BG, // settle to warm theme background
        duration: 0.55,
        ease: 'power2.out',
      });
    }
  };

  const isLight = active > 0;
  const textColor = isLight ? LIGHT_TEXT : 'rgba(236, 221, 252, 0.85)';
  const bodyColor = isLight ? 'rgba(65, 0, 96, 0.85)' : DARK_TEXT;

  return (
    <section 
      ref={ref} 
      className="home__use-cases" 
      id="why-nexgrowth"
      style={{
        background: DARK_BG,
        color: DARK_TEXT,
        transition: 'color 0.5s ease',
        position: 'relative',
        overflow: 'hidden',
        padding: '12rem 0',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="home__use-cases__content__slider" style={{ overflow: 'hidden', position: 'relative', borderRadius: '24px' }}>
          
          <div ref={trackRef} className="home__use-cases__content__slider__container" style={{ display: 'flex', willChange: 'transform' }}>
            
            {/* Slide 0: Other Agencies (Dark) */}
            <div className="use-case-slide anim-slide" style={{ minWidth: '100%', padding: '4rem 2rem' }}>
              <div className="use-case-card" style={{ '--card-bg': isLight ? 'rgba(65, 0, 96, 0.03)' : 'rgba(255, 255, 255, 0.02)', '--card-border': isLight ? 'rgba(65, 0, 96, 0.08)' : 'rgba(255, 255, 255, 0.06)' } as React.CSSProperties}>
                <div 
                  className="home__use-cases__content__slide__left__tag"
                  style={{
                    display: 'inline-block',
                    border: `1px solid ${isLight ? 'rgba(65, 0, 96, 0.2)' : 'rgba(236, 221, 252, 0.2)'}`,
                    background: isLight ? 'rgba(65, 0, 96, 0.04)' : 'rgba(236, 221, 252, 0.03)',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontFamily: 'monospace',
                    fontSize: '1.15rem',
                    textTransform: 'uppercase',
                    color: textColor,
                    marginBottom: '2.5rem',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <span>Other Agencies</span>
                </div>
                <h2
                  style={{
                    fontFamily: 'GT-Planar, Inter, sans-serif',
                    fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: textColor,
                    marginBottom: '2.4rem',
                    maxWidth: '820px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  Why settle for less with traditional agencies?
                </h2>
                <p
                  style={{
                    fontFamily: 'GT-Planar, Inter, sans-serif',
                    fontSize: '1.7rem',
                    lineHeight: 1.6,
                    color: bodyColor,
                    marginBottom: '3.6rem',
                    maxWidth: '720px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  Traditional agencies often build generic, template-based solutions that fail to address your business context. With poor collaboration, slow and unstructured processes, a limited understanding of your brand, and no support after delivery, projects quickly fall behind schedule and fail to achieve growth.
                </p>
                <a 
                  className="cta-button" 
                  href="#contact"
                  style={{
                    background: '#ff77c9', // Brand pink
                    color: '#161008',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '1.2rem 2.8rem',
                    fontSize: '1.3rem',
                    display: 'inline-block',
                  }}
                >
                  <div className="cta-button__text"><span>Request Quote</span></div>
                </a>
              </div>
            </div>

            {/* Slide 1: The NexGrowth Difference (Light) */}
            <div className="use-case-slide anim-slide" style={{ minWidth: '100%', padding: '4rem 2rem' }}>
              <div className="use-case-card" style={{ '--card-bg': isLight ? 'rgba(65, 0, 96, 0.03)' : 'rgba(255, 255, 255, 0.02)', '--card-border': isLight ? 'rgba(65, 0, 96, 0.08)' : 'rgba(255, 255, 255, 0.06)' } as React.CSSProperties}>
                <div 
                  className="home__use-cases__content__slide__left__tag"
                  style={{
                    display: 'inline-block',
                    border: `1px solid ${isLight ? 'rgba(65, 0, 96, 0.2)' : 'rgba(236, 221, 252, 0.2)'}`,
                    background: isLight ? 'rgba(65, 0, 96, 0.04)' : 'rgba(236, 221, 252, 0.03)',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontFamily: 'monospace',
                    fontSize: '1.15rem',
                    textTransform: 'uppercase',
                    color: textColor,
                    marginBottom: '2.5rem',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <span>The NexGrowth Difference</span>
                </div>
                <h2
                  style={{
                    fontFamily: 'GT-Planar, Inter, sans-serif',
                    fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: textColor,
                    marginBottom: '2.4rem',
                    maxWidth: '820px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  Custom digital solutions engineered for growth.
                </h2>
                <p
                  style={{
                    fontFamily: 'GT-Planar, Inter, sans-serif',
                    fontSize: '1.7rem',
                    lineHeight: 1.6,
                    color: bodyColor,
                    marginBottom: '3.6rem',
                    maxWidth: '720px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  At NexGrowth, we believe great products are engineered, not improvised. We stand for quick and clear communication, custom-built digital solutions tailored to your goals, a transparent process with firm timelines, and deep brand/UX research. Plus, we offer free post-launch maintenance to keep your site optimized.
                </p>
                <a 
                  className="cta-button" 
                  href="#contact"
                  style={{
                    background: '#ff77c9',
                    color: '#161008',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '1.2rem 2.8rem',
                    fontSize: '1.3rem',
                    display: 'inline-block',
                  }}
                >
                  <div className="cta-button__text"><span>Request Quote</span></div>
                </a>
              </div>
            </div>

            {/* Slide 2: Why NexGrowth (Light) */}
            <div className="use-case-slide anim-slide" style={{ minWidth: '100%', padding: '4rem 2rem' }}>
              <div className="use-case-card" style={{ '--card-bg': isLight ? 'rgba(65, 0, 96, 0.03)' : 'rgba(255, 255, 255, 0.02)', '--card-border': isLight ? 'rgba(65, 0, 96, 0.08)' : 'rgba(255, 255, 255, 0.06)' } as React.CSSProperties}>
                <div 
                  className="home__use-cases__content__slide__left__tag"
                  style={{
                    display: 'inline-block',
                    border: `1px solid ${isLight ? 'rgba(65, 0, 96, 0.2)' : 'rgba(236, 221, 252, 0.2)'}`,
                    background: isLight ? 'rgba(65, 0, 96, 0.04)' : 'rgba(236, 221, 252, 0.03)',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontFamily: 'monospace',
                    fontSize: '1.15rem',
                    textTransform: 'uppercase',
                    color: textColor,
                    marginBottom: '2.5rem',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <span>Why NexGrowth</span>
                </div>
                <h2
                  style={{
                    fontFamily: 'GT-Planar, Inter, sans-serif',
                    fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: textColor,
                    marginBottom: '2.4rem',
                    maxWidth: '820px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  Detailed process over guesswork.
                </h2>
                <p
                  style={{
                    fontFamily: 'GT-Planar, Inter, sans-serif',
                    fontSize: '1.7rem',
                    lineHeight: 1.6,
                    color: bodyColor,
                    marginBottom: '3.6rem',
                    maxWidth: '720px',
                    transition: 'color 0.5s ease',
                  }}
                >
                  We deep-dive into your business model, customer journeys, and competitive landscape. We map every user action, design bespoke mockups, write clean responsive code, perform extensive testing, and launch with precision. A reliable partner to scale your engineering efforts with confidence.
                </p>
                <a 
                  className="cta-button" 
                  href="#contact"
                  style={{
                    background: '#ff77c9',
                    color: '#161008',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '1.2rem 2.8rem',
                    fontSize: '1.3rem',
                    display: 'inline-block',
                  }}
                >
                  <div className="cta-button__text"><span>Request Quote</span></div>
                </a>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div 
            className="home__use-cases__content__slide__left__navigation"
            style={{
              position: 'absolute',
              right: '24px',
              bottom: '24px',
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
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: isLight ? 'rgba(65, 0, 96, 0.08)' : 'rgba(236, 221, 252, 0.08)',
                border: `1px solid ${isLight ? 'rgba(65, 0, 96, 0.15)' : 'rgba(236, 221, 252, 0.15)'}`,
                color: textColor,
                fontSize: '1.6rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              &#8592;
            </button>
            <button 
              className="home__use-cases__content__slide__nav-btn"
              onClick={() => goTo(active + 1)} 
              aria-label="Next"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: isLight ? 'rgba(65, 0, 96, 0.08)' : 'rgba(236, 221, 252, 0.08)',
                border: `1px solid ${isLight ? 'rgba(65, 0, 96, 0.15)' : 'rgba(236, 221, 252, 0.15)'}`,
                color: textColor,
                fontSize: '1.6rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
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

'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Services Component
 * ──────────────────
 * Presents 6 services, each as its own dedicated 100vh page section.
 * Animates theme transitions (Burgundy -> Emerald Green) smoothly using CSS custom variables.
 * 
 * 1. DESIGN & DEVELOPMENT (Burgundy Theme)
 *  - Service 01: Website Design & Development (#services)
 *  - Service 02: Web Application Development (#services-app)
 *  - Service 03: Mobile App Development (#services-mobile)
 * 
 * 2. DIGITAL MARKETING (Forest Emerald Theme)
 *  - Service 04: Search Engine Optimisation (#services-seo)
 *  - Service 05: Google & Meta Ads (#services-google-ads)
 *  - Service 06: Social Media Marketing (SMM) (#services-smm)
 * 
 * Grouping behavior:
 *  - Category headings ("Software & Engineering" and "Digital Marketing") 
 *    are shown ONLY on the first page of their respective clusters (Service 01 and 04).
 */
export default function Services() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const sect1Ref = useRef<HTMLElement>(null);
  const sect2Ref = useRef<HTMLElement>(null);
  const sect3Ref = useRef<HTMLElement>(null);
  const sect4Ref = useRef<HTMLElement>(null);
  const sect5Ref = useRef<HTMLElement>(null);
  const sect6Ref = useRef<HTMLElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const card6Ref = useRef<HTMLDivElement>(null);

  const mock1Ref = useRef<HTMLDivElement>(null);
  const mock2Ref = useRef<HTMLDivElement>(null);
  const mock3Ref = useRef<HTMLDivElement>(null);
  const mock4Ref = useRef<HTMLDivElement>(null);
  const mock5Ref = useRef<HTMLDivElement>(null);
  const mock6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const sect4 = sect4Ref.current;
    const sect6 = sect6Ref.current;
    if (!wrapper) return;

    const animations: gsap.core.Timeline[] = [];

    // ── 1. Scroll triggered slide & fade animations for card components ──
    const triggers = [
      { section: sect1Ref.current, card: card1Ref.current, mockItems: mock1Ref.current?.querySelectorAll('.float-item') },
      { section: sect2Ref.current, card: card2Ref.current, mockItems: mock2Ref.current?.querySelectorAll('.float-item') },
      { section: sect3Ref.current, card: card3Ref.current, mockItems: mock3Ref.current?.querySelectorAll('.float-item') },
      { section: sect4Ref.current, card: card4Ref.current, mockItems: mock4Ref.current?.querySelectorAll('.float-item') },
      { section: sect5Ref.current, card: card5Ref.current, mockItems: mock5Ref.current?.querySelectorAll('.float-item') },
      { section: sect6Ref.current, card: card6Ref.current, mockItems: mock6Ref.current?.querySelectorAll('.float-item') },
    ];

    triggers.forEach(({ section, card, mockItems }) => {
      if (!section || !card) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none', // Play once on entry so content remains visible
        }
      });

      // Fade & slide up the main card wrapper
      tl.fromTo(card, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      // Fade & slide up mock elements inside browser window
      if (mockItems && mockItems.length > 0) {
        tl.fromTo(mockItems,
          { y: 30, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );
      }

      animations.push(tl);
    });

    // Set initial Burgundy state on wrapper
    gsap.set(wrapper, {
      '--bg-primary': '#2a0710',
      '--bg-secondary': '#180206',
      '--surface': '#ffdce2',
      '--surface-border': 'rgba(42, 7, 16, 0.12)',
      '--text-primary': '#2a0710',
      '--text-secondary': 'rgba(42, 7, 16, 0.75)',
      '--accent': '#ff77a8',
      '--btn-bg': '#2a0710',
      '--btn-text': '#ffdce2',
      '--shadow': '0 16px 64px rgba(42, 7, 16, 0.15)',
      '--glow': 'rgba(255, 100, 150, 0.05)',
    });

    // ── 2. Scroll-Scrub Color Theme Interpolation (Burgundy -> Emerald Green) ──
    if (sect4) {
      const colorTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sect4,
          start: 'top bottom', // when top of section 4 enters viewport bottom
          end: 'top 20%', // when section 4 has scrolled up
          scrub: 1.2,
          invalidateOnRefresh: true,
        }
      });

      colorTimeline.fromTo(wrapper, 
        {
          '--bg-primary': '#2a0710',
          '--bg-secondary': '#180206',
          '--surface': '#ffdce2',
          '--surface-border': 'rgba(42, 7, 16, 0.12)',
          '--text-primary': '#2a0710',
          '--text-secondary': 'rgba(42, 7, 16, 0.75)',
          '--accent': '#ff77a8',
          '--btn-bg': '#2a0710',
          '--btn-text': '#ffdce2',
          '--shadow': '0 16px 64px rgba(42, 7, 16, 0.15)',
          '--glow': 'rgba(255, 100, 150, 0.05)',
        },
        {
          '--bg-primary': '#042616',
          '--bg-secondary': '#01170c',
          '--surface': '#dcf9d6',
          '--surface-border': 'rgba(19, 37, 21, 0.12)',
          '--text-primary': '#132515',
          '--text-secondary': 'rgba(19, 37, 21, 0.75)',
          '--accent': '#5ce685',
          '--btn-bg': '#132515',
          '--btn-text': '#dcf9d6',
          '--shadow': '0 16px 64px rgba(19, 37, 21, 0.15)',
          '--glow': 'rgba(92, 230, 133, 0.05)',
          ease: 'none',
          immediateRender: false,
        }
      );

      animations.push(colorTimeline as any);
    }

    // ── 3. Scroll-Scrub Color Theme Interpolation (Emerald Green -> Deep Purple) ──
    if (sect6) {
      const purpleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sect6,
          start: 'top 20%', // start when SMM starts scrolling out
          end: 'bottom top', // complete when SMM has fully scrolled off
          scrub: 1.2,
          invalidateOnRefresh: true,
        }
      });

      purpleTimeline.fromTo(wrapper,
        {
          '--bg-primary': '#042616',
          '--bg-secondary': '#01170c',
          '--surface': '#dcf9d6',
          '--surface-border': 'rgba(19, 37, 21, 0.12)',
          '--text-primary': '#132515',
          '--text-secondary': 'rgba(19, 37, 21, 0.75)',
          '--accent': '#5ce685',
          '--btn-bg': '#132515',
          '--btn-text': '#dcf9d6',
          '--shadow': '0 16px 64px rgba(19, 37, 21, 0.15)',
          '--glow': 'rgba(92, 230, 133, 0.05)',
        },
        {
          '--bg-primary': '#1b0d22',
          '--bg-secondary': '#0f0714',
          '--surface': '#ECDDFC',
          '--surface-border': 'rgba(65, 0, 96, 0.12)',
          '--text-primary': '#410060',
          '--text-secondary': 'rgba(65, 0, 96, 0.75)',
          '--accent': '#D778F8',
          '--btn-bg': '#410060',
          '--btn-text': '#ECDDFC',
          '--shadow': '0 16px 64px rgba(65, 0, 96, 0.15)',
          '--glow': 'rgba(215, 120, 248, 0.05)',
          ease: 'none',
          immediateRender: false,
        }
      );

      animations.push(purpleTimeline as any);
    }

    return () => {
      animations.forEach(tl => {
        tl.scrollTrigger?.kill();
        tl.kill();
      });
    };
  }, []);

  // ── CSS Properties using variables ──
  const pageStyle: React.CSSProperties = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    background: 'radial-gradient(circle at center, var(--bg-primary, #2a0710) 0%, var(--bg-secondary, #180206) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 2rem',
    overflow: 'hidden',
    borderBottom: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))',
    transition: 'border-color 0.5s ease',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'var(--surface, #ffdce2)',
    border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))',
    borderRadius: '32px',
    padding: '4.5rem',
    boxShadow: 'var(--shadow, 0 16px 64px rgba(42, 7, 16, 0.15))',
    display: 'grid',
    gridTemplateColumns: '1.1fr 1.4fr',
    gap: '4.5rem',
    alignItems: 'center',
    position: 'relative',
    isolation: 'isolate',
    width: '100%',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    transition: 'background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
  };

  const browserStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-secondary, #180206)',
    border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))',
    borderRadius: '18px',
    height: '400px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    transition: 'background-color 0.5s ease, border-color 0.5s ease',
  };

  const categoryHeadingStyle = (): React.CSSProperties => ({
    fontFamily: 'GT-Planar, Inter, sans-serif',
    fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: 'var(--accent, #ff77a8)',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
    transition: 'color 0.5s ease',
  });

  return (
    <div
      ref={wrapperRef}
      className="services-wrapper"
      style={{
        // Fallback definitions for initial render
        '--bg-primary': '#2a0710',
        '--bg-secondary': '#180206',
        '--surface': '#ffdce2',
        '--surface-border': 'rgba(42, 7, 16, 0.12)',
        '--text-primary': '#2a0710',
        '--text-secondary': 'rgba(42, 7, 16, 0.75)',
        '--accent': '#ff77a8',
        '--btn-bg': '#2a0710',
        '--btn-text': '#ffdce2',
        '--shadow': '0 16px 64px rgba(42, 7, 16, 0.15)',
        '--glow': 'rgba(255, 100, 150, 0.05)',
      } as React.CSSProperties}
    >
      {/* =========================================================================
          SECTION 1: SOFTWARE, APP & WEB DEVELOPMENT (Burgundy Theme)
          ========================================================================= */}
      
      {/* ── Page 1: Website Design & Development ── */}
      <section ref={sect1Ref} style={pageStyle} id="services">
        <div className="container" style={{ maxWidth: '1360px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
            <h4 style={categoryHeadingStyle()}>
              Software &amp; Engineering
            </h4>
            <p className="section-label" style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(252,250,248,0.4)', margin: 0 }}>
              Service 01 // Web Design &amp; Development
            </p>
          </div>
          <div ref={card1Ref} style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'GT-Planar, Inter, sans-serif', fontSize: '3.6rem', fontWeight: 700, color: 'var(--text-primary, #2a0710)', marginBottom: '2rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Website Design &amp; Development
              </h3>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary, rgba(42, 7, 16, 0.75))', lineHeight: '1.6', marginBottom: '3.5rem', transition: 'color 0.5s' }}>
                We craft custom, conversion-driven websites designed to captivate your audience, convey your brand identity, and achieve real business goals. From high-converting corporate sites to complex e-commerce, we construct clean, responsive, and SEO-optimized sites.
              </p>
              <a className="cta-button" href="#contact" style={{ padding: '1.2rem 2.6rem', fontSize: '1.25rem', borderRadius: '9999px', background: 'var(--btn-bg, #2a0710)', color: 'var(--btn-text, #ffdce2)', border: 'none', display: 'inline-block', transition: 'all 0.5s ease' }}>
                Request A Quote
              </a>
            </div>
            {/* Right (Browser Wireframe Mockup) */}
            <div style={browserStyle}>
              <div style={{ height: '40px', borderBottom: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', background: 'rgba(24, 2, 6, 0.9)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c8faae', opacity: 0.8 }} />
                <div style={{ marginLeft: '2rem', height: '18px', width: '180px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }} />
              </div>
              <div ref={mock1Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ gridColumn: 'span 3', height: '55px', background: 'var(--glow, rgba(255, 100, 150, 0.05))', borderRadius: '8px', border: '1px dashed var(--surface-border, rgba(42, 7, 16, 0.12))', transition: 'background-color 0.5s ease, border-color 0.5s ease' }} />
                  <div className="float-item" style={{ gridColumn: 'span 2', height: '135px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.5rem', transition: 'border-color 0.5s' }}>
                    <div style={{ width: '40%', height: '12px', background: 'var(--surface-border, rgba(42, 7, 16, 0.12))', borderRadius: '4px', marginBottom: '1rem', transition: 'background-color 0.5s' }} />
                    <div style={{ width: '80%', height: '8px', background: 'var(--surface-border, rgba(42, 7, 16, 0.12))', borderRadius: '4px', marginBottom: '0.6rem', transition: 'background-color 0.5s' }} />
                    <div style={{ width: '90%', height: '8px', background: 'var(--surface-border, rgba(42, 7, 16, 0.12))', borderRadius: '4px', marginBottom: '0.6rem', transition: 'background-color 0.5s' }} />
                    <div style={{ width: '60%', height: '8px', background: 'var(--surface-border, rgba(42, 7, 16, 0.12))', borderRadius: '4px', transition: 'background-color 0.5s' }} />
                  </div>
                  <div className="float-item" style={{ height: '135px', background: 'var(--glow, rgba(255, 100, 150, 0.05))', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.5s, border-color 0.5s' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--surface-border, rgba(42, 7, 16, 0.12))', transition: 'background-color 0.5s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page 2: Web Application Development ── */}
      <section ref={sect2Ref} style={pageStyle} id="services-app">
        <div className="container" style={{ maxWidth: '1360px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(252,250,248,0.4)', margin: 0 }}>
              Service 02 // Software Development for Business
            </p>
          </div>
          <div ref={card2Ref} style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'GT-Planar, Inter, sans-serif', fontSize: '3.6rem', fontWeight: 700, color: 'var(--text-primary, #2a0710)', marginBottom: '2rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Software Development for Business
              </h3>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary, rgba(42, 7, 16, 0.75))', lineHeight: '1.6', marginBottom: '3.5rem', transition: 'color 0.5s' }}>
                We build tailored, scalable web applications and SaaS platforms that streamline operations, solve complex workflows, and grow with your business. Using cutting-edge tech stacks, we deliver fast, reliable, and secure software engineered for growth.
              </p>
              <a className="cta-button" href="#contact" style={{ padding: '1.2rem 2.6rem', fontSize: '1.25rem', borderRadius: '9999px', background: 'var(--btn-bg, #2a0710)', color: 'var(--btn-text, #ffdce2)', border: 'none', display: 'inline-block', transition: 'all 0.5s ease' }}>
                Request A Quote
              </a>
            </div>
            {/* Right (Browser SaaS Mockup) */}
            <div style={browserStyle}>
              <div style={{ height: '40px', borderBottom: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', background: 'rgba(24, 2, 6, 0.9)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
              </div>
              <div ref={mock2Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ height: '90px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'border-color 0.5s' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Users</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent, #ff77a8)', marginTop: '0.3rem', transition: 'color 0.5s' }}>14,842</span>
                  </div>
                  <div className="float-item" style={{ height: '90px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'border-color 0.5s' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Queries</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ffc2ad', marginTop: '0.3rem', transition: 'color 0.5s' }}>99.98%</span>
                  </div>
                  <div className="float-item" style={{ height: '90px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'border-color 0.5s' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Database</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#c8faae', marginTop: '0.3rem', transition: 'color 0.5s' }}>Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page 3: Mobile App Development ── */}
      <section ref={sect3Ref} style={pageStyle} id="services-mobile">
        <div className="container" style={{ maxWidth: '1360px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(252,250,248,0.4)', margin: 0 }}>
              Service 03 // Mobile App Development
            </p>
          </div>
          <div ref={card3Ref} style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'GT-Planar, Inter, sans-serif', fontSize: '3.6rem', fontWeight: 700, color: 'var(--text-primary, #2a0710)', marginBottom: '2rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Mobile App Development
              </h3>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary, rgba(42, 7, 16, 0.75))', lineHeight: '1.6', marginBottom: '3.5rem', transition: 'color 0.5s' }}>
                We design and build premium, native iOS and Android applications, as well as cross-platform solutions (React Native/Flutter), that deliver seamless user experiences and integrate with your existing cloud infrastructure.
              </p>
              <a className="cta-button" href="#contact" style={{ padding: '1.2rem 2.6rem', fontSize: '1.25rem', borderRadius: '9999px', background: 'var(--btn-bg, #2a0710)', color: 'var(--btn-text, #ffdce2)', border: 'none', display: 'inline-block', transition: 'all 0.5s ease' }}>
                Request A Quote
              </a>
            </div>
            {/* Right (Browser Mobile App Dashboard Mockup) */}
            <div style={browserStyle}>
              <div style={{ height: '40px', borderBottom: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', background: 'rgba(24, 2, 6, 0.9)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c8faae', opacity: 0.8 }} />
              </div>
              <div ref={mock3Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ height: '100px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'border-color 0.5s' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>App Downloads</span>
                    <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--accent, #ff77a8)', marginTop: '0.3rem', transition: 'color 0.5s' }}>24,500</span>
                  </div>
                  <div className="float-item" style={{ height: '100px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'border-color 0.5s' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Active Users</span>
                    <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#ffc2ad', marginTop: '0.3rem', transition: 'color 0.5s' }}>8,920</span>
                  </div>
                  <div className="float-item" style={{ height: '100px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'border-color 0.5s' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Store Rating</span>
                    <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#c8faae', marginTop: '0.3rem', transition: 'color 0.5s' }}>4.9 ★</span>
                  </div>
                  <div className="float-item" style={{ height: '100px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'border-color 0.5s' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>API Latency</span>
                    <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--accent, #ff77a8)', marginTop: '0.3rem', transition: 'color 0.5s' }}>42ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DIGITAL MARKETING SUITE (Forest Emerald Theme)
          ========================================================================= */}

      {/* ── Page 4: Search Engine Optimisation ── */}
      <section ref={sect4Ref} style={pageStyle} id="services-seo">
        <div className="container" style={{ maxWidth: '1360px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
            <h4 style={categoryHeadingStyle()}>
              Digital Marketing
            </h4>
            <p className="section-label" style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(252,250,248,0.4)', margin: 0 }}>
              Service 04 // Search Engine Optimisation
            </p>
          </div>
          <div ref={card4Ref} style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'GT-Planar, Inter, sans-serif', fontSize: '3.6rem', fontWeight: 700, color: 'var(--text-primary, #2a0710)', marginBottom: '2rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Search Engine Optimisation
              </h3>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary, rgba(42, 7, 16, 0.75))', lineHeight: '1.6', marginBottom: '3.5rem', transition: 'color 0.5s' }}>
                We optimize your digital footprint to drive high-intent organic traffic, improve search rankings, and increase conversion rates. Our metrics-driven SEO approach includes technical audits, on-page optimization, content strategy, and authority building.
              </p>
              <a className="cta-button" href="#contact" style={{ padding: '1.2rem 2.6rem', fontSize: '1.25rem', borderRadius: '9999px', background: 'var(--btn-bg, #2a0710)', color: 'var(--btn-text, #ffdce2)', border: 'none', display: 'inline-block', transition: 'all 0.5s ease' }}>
                Request A Quote
              </a>
            </div>
            {/* Right (Browser SEO Mockup) */}
            <div style={browserStyle}>
              <div style={{ height: '40px', borderBottom: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', background: 'rgba(4, 38, 22, 0.9)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c8faae', opacity: 0.8 }} />
                <div style={{ marginLeft: '2rem', height: '18px', width: '180px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }} />
              </div>
              <div ref={mock4Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ height: '260px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.5rem', transition: 'border-color 0.5s' }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#fcfaf8', fontWeight: 'bold', marginBottom: '1.2rem' }}>Google Keywords</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        { term: 'b2b custom web development', pos: '#1', volume: '12.4k' },
                        { term: 'custom saas developer nyc', pos: '#2', volume: '4.8k' },
                        { term: 'enterprise web applications', pos: '#1', volume: '22.1k' },
                        { term: 'high performance page speed', pos: '#3', volume: '8.5k' },
                      ].map((k, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.5rem' }}>
                          <span style={{ color: 'rgba(255,255,255,0.7)' }}>{k.term}</span>
                          <div style={{ display: 'flex', gap: '1rem' }}>
                            <span style={{ color: 'var(--accent, #ff77a8)', transition: 'color 0.5s' }}>{k.pos}</span>
                            <span style={{ color: 'rgba(255,255,255,0.3)' }}>{k.volume}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div className="float-item" style={{ height: '124px', background: 'rgba(255,119,201,0.04)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', transition: 'border-color 0.5s' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent, #ff77a8)', textTransform: 'uppercase', transition: 'color 0.5s' }}>Page Speed Index</span>
                      <span style={{ fontSize: '2.4rem', fontWeight: 'bold', color: '#fcfaf8', marginTop: '0.3rem' }}>100/100</span>
                    </div>
                    <div className="float-item" style={{ height: '124px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', transition: 'border-color 0.5s' }}>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Traffic Growth</span>
                      <span style={{ fontSize: '2.4rem', fontWeight: 'bold', color: '#c8faae', marginTop: '0.3rem' }}>+348%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page 5: Google & Meta Ads (Combined) ── */}
      <section ref={sect5Ref} style={pageStyle} id="services-google-ads">
        <div className="container" style={{ maxWidth: '1360px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(252,250,248,0.4)', margin: 0 }}>
              Service 05 // Google &amp; Meta Ads
            </p>
          </div>
          <div ref={card5Ref} style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'GT-Planar, Inter, sans-serif', fontSize: '3.6rem', fontWeight: 700, color: 'var(--text-primary, #2a0710)', marginBottom: '2rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Google &amp; Meta Ads
              </h3>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary, rgba(42, 7, 16, 0.75))', lineHeight: '1.6', marginBottom: '3.5rem', transition: 'color 0.5s' }}>
                Reach high-intent customers right when they search, and capture your ideal demographic across Facebook and Instagram. We build, manage, and scale comprehensive acquisition campaigns across both Search and Social display networks to maximize direct-response ROAS.
              </p>
              <a className="cta-button" href="#contact" style={{ padding: '1.2rem 2.6rem', fontSize: '1.25rem', borderRadius: '9999px', background: 'var(--btn-bg, #2a0710)', color: 'var(--btn-text, #ffdce2)', border: 'none', display: 'inline-block', transition: 'all 0.5s ease' }}>
                Request A Quote
              </a>
            </div>
            {/* Right (Browser Combined Google & Meta Ads Mockup) */}
            <div style={browserStyle}>
              <div style={{ height: '40px', borderBottom: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', background: 'rgba(4, 38, 22, 0.9)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
              </div>
              <div ref={mock5Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ gridColumn: 'span 3', height: '100px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem 1.5rem', transition: 'border-color 0.5s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Google Search Sponsored Result</span>
                    </div>
                    <div style={{ fontSize: '1.15rem', color: '#c8faae', fontWeight: 'bold', marginBottom: '0.2rem' }}>NexGrowth Custom Software Development</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Scale your B2B business operations with custom engineering.</div>
                  </div>
                  <div className="float-item" style={{ height: '120px', background: 'rgba(255,119,201,0.04)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'border-color 0.5s' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>ROAS</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent, #ff77a8)', marginTop: '0.4rem', transition: 'color 0.5s' }}>5.2x</span>
                  </div>
                  <div className="float-item" style={{ height: '120px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'border-color 0.5s' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>CPA</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ffc2ad', marginTop: '0.4rem' }}>$14.20</span>
                  </div>
                  <div className="float-item" style={{ height: '120px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'border-color 0.5s' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Search Share</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#c8faae', marginTop: '0.4rem' }}>74%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page 6: Social Media Marketing (SMM) ── */}
      <section ref={sect6Ref} style={pageStyle} id="services-smm">
        <div className="container" style={{ maxWidth: '1360px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(252,250,248,0.4)', margin: 0 }}>
              Service 06 // Social Media Marketing
            </p>
          </div>
          <div ref={card6Ref} style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'GT-Planar, Inter, sans-serif', fontSize: '3.6rem', fontWeight: 700, color: 'var(--text-primary, #2a0710)', marginBottom: '2rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Social Media Marketing (SMM)
              </h3>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary, rgba(42, 7, 16, 0.75))', lineHeight: '1.6', marginBottom: '3.5rem', transition: 'color 0.5s' }}>
                Social media platforms are some of the best places to reach your audience. The best digital marketing companies, like NexGrowth, use social media to help your company reach your target audience, build credibility, and grow a community around your brand.
              </p>
              <a className="cta-button" href="#contact" style={{ padding: '1.2rem 2.6rem', fontSize: '1.25rem', borderRadius: '9999px', background: 'var(--btn-bg, #2a0710)', color: 'var(--btn-text, #ffdce2)', border: 'none', display: 'inline-block', transition: 'all 0.5s ease' }}>
                Request A Quote
              </a>
            </div>
            {/* Right (Browser SMM Mockup) */}
            <div style={browserStyle}>
              <div style={{ height: '40px', borderBottom: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', background: 'rgba(4, 38, 22, 0.9)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c8faae', opacity: 0.8 }} />
              </div>
              <div ref={mock6Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ height: '260px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', transition: 'border-color 0.5s' }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#fcfaf8', fontWeight: 'bold', margin: 0 }}>Engagement Metrics</h4>
                    {[
                      { channel: 'LinkedIn Posts', reach: '42.8k', engagement: '8.4%' },
                      { channel: 'X / Twitter Threads', reach: '108.2k', engagement: '6.2%' },
                      { channel: 'Instagram Reels', reach: '82.5k', engagement: '11.8%' },
                    ].map((row, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.6rem' }}>
                        <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)' }}>{row.channel}</span>
                        <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.95rem', fontWeight: 'bold' }}>
                          <span style={{ color: 'var(--accent, #ff77a8)', transition: 'color 0.5s' }}>{row.reach}</span>
                          <span style={{ color: '#c8faae' }}>{row.engagement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="float-item" style={{ height: '122px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', transition: 'border-color 0.5s' }}>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Audience Growth</span>
                      <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#fcfaf8', marginTop: '0.3rem' }}>+12,400</span>
                    </div>
                    <div className="float-item" style={{ height: '122px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--surface-border, rgba(42, 7, 16, 0.12))', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', transition: 'border-color 0.5s' }}>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Brand Mentions</span>
                      <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#ffc2ad', marginTop: '0.3rem' }}>+240%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

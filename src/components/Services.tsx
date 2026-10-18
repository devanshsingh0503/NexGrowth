'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Services Component
 * ──────────────────
 * Presents 6 services, each as its own dedicated 100vh page section.
 * Smoothly transitions from Warm Cream (#f4f2ea) into Sleek Dark (#171916).
 *
 * 1. SOFTWARE & ENGINEERING (Warm Cream Light Palette)
 *  - Service 01: Website Design & Development (#services)
 *  - Service 02: Web Application Development (#services-app)
 *  - Service 03: Mobile App Development (#services-mobile)
 *
 * 2. DIGITAL MARKETING (Sleek Near-Black Dark Palette)
 *  - Service 04: Search Engine Optimisation (#services-seo)
 *  - Service 05: Google & Meta Ads (#services-google-ads)
 *  - Service 06: Social Media Marketing (SMM) (#services-smm)
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
          toggleActions: 'play none none none',
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

    // Set initial Warm Cream state on wrapper
    gsap.set(wrapper, {
      '--bg-primary': '#f4f2ea',
      '--bg-secondary': '#ebe7db',
      '--surface': '#ffffff',
      '--surface-border': 'rgba(23, 25, 22, 0.08)',
      '--text-primary': '#171916',
      '--text-secondary': '#50534b',
      '--accent': '#171916',
      '--accent-badge': '#e5ff3d',
      '--btn-bg': '#171916',
      '--btn-text': '#e5ff3d',
      '--shadow': '0 16px 48px rgba(23, 25, 22, 0.06)',
      '--glow': 'rgba(229, 255, 61, 0.15)',
      '--browser-bg': '#171916',
      '--browser-border': 'rgba(23, 25, 22, 0.12)',
      '--browser-header': '#121411',
    });

    // ── 2. Scroll-Scrub Color Theme Interpolation (Warm Cream -> Sleek Dark #171916) ──
    if (sect4) {
      const colorTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sect4,
          start: 'top bottom',
          end: 'top 20%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        }
      });

      colorTimeline.fromTo(wrapper, 
        {
          '--bg-primary': '#f4f2ea',
          '--bg-secondary': '#ebe7db',
          '--surface': '#ffffff',
          '--surface-border': 'rgba(23, 25, 22, 0.08)',
          '--text-primary': '#171916',
          '--text-secondary': '#50534b',
          '--btn-bg': '#171916',
          '--btn-text': '#e5ff3d',
          '--shadow': '0 16px 48px rgba(23, 25, 22, 0.06)',
          '--glow': 'rgba(229, 255, 61, 0.15)',
          '--browser-bg': '#171916',
          '--browser-border': 'rgba(23, 25, 22, 0.12)',
          '--browser-header': '#121411',
        },
        {
          '--bg-primary': '#171916',
          '--bg-secondary': '#121411',
          '--surface': '#1d201c',
          '--surface-border': 'rgba(244, 242, 234, 0.10)',
          '--text-primary': '#f4f2ea',
          '--text-secondary': 'rgba(244, 242, 234, 0.7)',
          '--btn-bg': '#e5ff3d',
          '--btn-text': '#171916',
          '--shadow': '0 20px 60px rgba(0, 0, 0, 0.5)',
          '--glow': 'rgba(229, 255, 61, 0.12)',
          '--browser-bg': '#121411',
          '--browser-border': 'rgba(244, 242, 234, 0.12)',
          '--browser-header': '#0c0e0b',
          ease: 'none',
          immediateRender: false,
        }
      );

      animations.push(colorTimeline as any);
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
    background: 'radial-gradient(circle at center, var(--bg-primary, #f4f2ea) 0%, var(--bg-secondary, #ebe7db) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 2rem',
    overflow: 'hidden',
    borderBottom: '1px solid var(--surface-border, rgba(23, 25, 22, 0.08))',
    transition: 'border-color 0.5s ease',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'var(--surface, #ffffff)',
    border: '1px solid var(--surface-border, rgba(23, 25, 22, 0.08))',
    borderRadius: '28px',
    padding: '4.5rem',
    boxShadow: 'var(--shadow, 0 16px 48px rgba(23, 25, 22, 0.06))',
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
    backgroundColor: 'var(--browser-bg, #171916)',
    border: '1px solid var(--browser-border, rgba(23, 25, 22, 0.12))',
    borderRadius: '18px',
    height: '400px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
    transition: 'background-color 0.5s ease, border-color 0.5s ease',
  };

  const categoryHeadingStyle = (): React.CSSProperties => ({
    fontFamily: 'var(--font-oswald), Oswald, sans-serif',
    fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: 'var(--text-primary, #171916)',
    textTransform: 'uppercase',
    marginBottom: '0.6rem',
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
        '--bg-primary': '#f4f2ea',
        '--bg-secondary': '#ebe7db',
        '--surface': '#ffffff',
        '--surface-border': 'rgba(23, 25, 22, 0.08)',
        '--text-primary': '#171916',
        '--text-secondary': '#50534b',
        '--accent': '#171916',
        '--btn-bg': '#171916',
        '--btn-text': '#e5ff3d',
        '--shadow': '0 16px 48px rgba(23, 25, 22, 0.06)',
        '--glow': 'rgba(229, 255, 61, 0.15)',
        '--browser-bg': '#171916',
        '--browser-border': 'rgba(23, 25, 22, 0.12)',
        '--browser-header': '#121411',
      } as React.CSSProperties}
    >
      {/* =========================================================================
          SECTION 1: SOFTWARE, APP & WEB DEVELOPMENT (Light Cream Palette)
          ========================================================================= */}
      
      {/* ── Page 1: Website Design & Development ── */}
      <section ref={sect1Ref} style={pageStyle} id="services">
        <div className="container" style={{ maxWidth: '1360px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
            <h4 style={categoryHeadingStyle()}>
              <span>Software &amp; Engineering</span>
              <span style={{ 
                background: '#e5ff3d', 
                color: '#171916', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                padding: '3px 10px', 
                borderRadius: '4px',
                letterSpacing: '0.08em',
                fontFamily: 'var(--font-inter), Inter, sans-serif'
              }}>
                CORE
              </span>
            </h4>
            <p className="section-label" style={{ fontFamily: 'var(--font-inter), Inter, monospace', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>
              Service 01 // Web Design &amp; Development
            </p>
          </div>
          <div ref={card1Ref} className="services-card" style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', fontSize: 'clamp(2.4rem, 3.5vw, 3.6rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.8rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                B2B Custom Website Development
              </h3>
              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.35rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3.2rem', transition: 'color 0.5s' }}>
                As an experienced website development company, we craft custom website development solutions and responsive website design layouts designed to establish credibility and convert traffic. We build clean, fast, and search-optimized sites that grow with your company.
              </p>
              <a 
                className="cta-button" 
                href="/services/web-development" 
                style={{ 
                  padding: '1.1rem 2.6rem', 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  borderRadius: '9999px', 
                  background: 'var(--btn-bg)', 
                  color: 'var(--btn-text)', 
                  border: 'none', 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease' 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>Get Custom Website Quote</span>
              </a>
            </div>
            {/* Right (Browser Wireframe Mockup) */}
            <div className="services-browser" style={browserStyle} role="img" aria-label="Responsive web design mockup showing structured user conversion wireframe layout">
              <div style={{ height: '40px', borderBottom: '1px solid var(--browser-border)', background: 'var(--browser-header)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e5ff3d', opacity: 0.8 }} />
                <div style={{ marginLeft: '2rem', height: '18px', width: '180px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }} />
              </div>
              <div ref={mock1Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ gridColumn: 'span 3', height: '55px', background: 'rgba(229, 255, 61, 0.08)', borderRadius: '8px', border: '1px dashed rgba(229, 255, 61, 0.3)', transition: 'background-color 0.5s ease, border-color 0.5s ease' }} />
                  <div className="float-item" style={{ gridColumn: 'span 2', height: '135px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem', transition: 'border-color 0.5s' }}>
                    <div style={{ width: '40%', height: '12px', background: '#e5ff3d', borderRadius: '4px', marginBottom: '1rem', opacity: 0.8 }} />
                    <div style={{ width: '80%', height: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px', marginBottom: '0.6rem' }} />
                    <div style={{ width: '90%', height: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px', marginBottom: '0.6rem' }} />
                    <div style={{ width: '60%', height: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px' }} />
                  </div>
                  <div className="float-item" style={{ height: '135px', background: 'rgba(229, 255, 61, 0.08)', borderRadius: '8px', border: '1px solid rgba(229, 255, 61, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#e5ff3d', opacity: 0.9 }} />
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
            <p className="section-label" style={{ fontFamily: 'var(--font-inter), Inter, monospace', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>
              Service 02 // Software Development for Business
            </p>
          </div>
          <div ref={card2Ref} className="services-card" style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', fontSize: 'clamp(2.4rem, 3.5vw, 3.6rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.8rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Custom Web Application Development
              </h3>
              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.35rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3.2rem', transition: 'color 0.5s' }}>
                As an agile software development company, we build tailored, scalable web applications and SaaS platforms that streamline operations, solve complex workflows, and grow with your business. Using cutting-edge Next.js development frameworks, we engineer fast, secure software.
              </p>
              <a 
                className="cta-button" 
                href="/services/software-development" 
                style={{ 
                  padding: '1.1rem 2.6rem', 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  borderRadius: '9999px', 
                  background: 'var(--btn-bg)', 
                  color: 'var(--btn-text)', 
                  border: 'none', 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease' 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>Get Custom Software Quote</span>
              </a>
            </div>
            {/* Right (Browser SaaS Mockup) */}
            <div className="services-browser" style={browserStyle} role="img" aria-label="Custom SaaS application dashboard showing database metrics and user analysis">
              <div style={{ height: '40px', borderBottom: '1px solid var(--browser-border)', background: 'var(--browser-header)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e5ff3d', opacity: 0.8 }} />
              </div>
              <div ref={mock2Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ height: '90px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Users</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#e5ff3d', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>14,842</span>
                  </div>
                  <div className="float-item" style={{ height: '90px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Queries</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#f4f2ea', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>99.98%</span>
                  </div>
                  <div className="float-item" style={{ height: '90px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Database</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#e5ff3d', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>Active</span>
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
            <p className="section-label" style={{ fontFamily: 'var(--font-inter), Inter, monospace', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>
              Service 03 // Mobile App Development
            </p>
          </div>
          <div ref={card3Ref} className="services-card" style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', fontSize: 'clamp(2.4rem, 3.5vw, 3.6rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.8rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Mobile App Development
              </h3>
              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.35rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3.2rem', transition: 'color 0.5s' }}>
                We design and build premium, native iOS and Android applications, as well as cross-platform solutions (React Native/Flutter), that deliver seamless user experiences and integrate with your existing cloud infrastructure.
              </p>
              <a 
                className="cta-button" 
                href="#contact" 
                style={{ 
                  padding: '1.1rem 2.6rem', 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  borderRadius: '9999px', 
                  background: 'var(--btn-bg)', 
                  color: 'var(--btn-text)', 
                  border: 'none', 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease' 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>Request A Quote</span>
              </a>
            </div>
            {/* Right (Browser Mobile App Dashboard Mockup) */}
            <div className="services-browser" style={browserStyle} role="img" aria-label="Mobile application portal showing app downloads and store rating metrics">
              <div style={{ height: '40px', borderBottom: '1px solid var(--browser-border)', background: 'var(--browser-header)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e5ff3d', opacity: 0.8 }} />
              </div>
              <div ref={mock3Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ height: '100px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>App Downloads</span>
                    <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#e5ff3d', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>24,500</span>
                  </div>
                  <div className="float-item" style={{ height: '100px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Active Users</span>
                    <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#f4f2ea', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>8,920</span>
                  </div>
                  <div className="float-item" style={{ height: '100px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Store Rating</span>
                    <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#e5ff3d', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>4.9 ★</span>
                  </div>
                  <div className="float-item" style={{ height: '100px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>API Latency</span>
                    <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#e5ff3d', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>42ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DIGITAL MARKETING SUITE (Sleek Near-Black Palette #171916)
          ========================================================================= */}

      {/* ── Page 4: Search Engine Optimisation ── */}
      <section ref={sect4Ref} style={pageStyle} id="services-seo">
        <div className="container" style={{ maxWidth: '1360px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
            <h4 style={categoryHeadingStyle()}>
              <span>Digital Marketing</span>
              <span style={{ 
                background: '#e5ff3d', 
                color: '#171916', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                padding: '3px 10px', 
                borderRadius: '4px',
                letterSpacing: '0.08em',
                fontFamily: 'var(--font-inter), Inter, sans-serif'
              }}>
                GROWTH
              </span>
            </h4>
            <p className="section-label" style={{ fontFamily: 'var(--font-inter), Inter, monospace', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>
              Service 04 // Search Engine Optimisation
            </p>
          </div>
          <div ref={card4Ref} className="services-card" style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', fontSize: 'clamp(2.4rem, 3.5vw, 3.6rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.8rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Search Engine Optimisation
              </h3>
              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.35rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3.2rem', transition: 'color 0.5s' }}>
                As an authority B2B SEO agency and technical SEO company, we grow organic visibility and search rankings. Our metrics-driven team delivers comprehensive technical SEO services, keyword-focused on-page SEO services, and strategic website SEO audits.
              </p>
              <a 
                className="cta-button" 
                href="/services/seo" 
                style={{ 
                  padding: '1.1rem 2.6rem', 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  borderRadius: '9999px', 
                  background: 'var(--btn-bg)', 
                  color: 'var(--btn-text)', 
                  border: 'none', 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
                  transition: 'all 0.3s ease' 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>Get Custom SEO Quote</span>
              </a>
            </div>
            {/* Right (Browser SEO Mockup) */}
            <div className="services-browser" style={browserStyle} role="img" aria-label="Search rankings dashboard showing Google keywords ranking in position 1">
              <div style={{ height: '40px', borderBottom: '1px solid var(--browser-border)', background: 'var(--browser-header)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e5ff3d', opacity: 0.8 }} />
                <div style={{ marginLeft: '2rem', height: '18px', width: '180px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }} />
              </div>
              <div ref={mock4Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ height: '260px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#f4f2ea', fontWeight: 'bold', marginBottom: '1.2rem', fontFamily: 'var(--font-oswald), sans-serif' }}>Google Keywords</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {[
                        { term: 'b2b custom web development', pos: '#1', volume: '12.4k' },
                        { term: 'custom saas developer nyc', pos: '#2', volume: '4.8k' },
                        { term: 'enterprise web applications', pos: '#1', volume: '22.1k' },
                        { term: 'high performance page speed', pos: '#3', volume: '8.5k' },
                      ].map((k, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.5rem', fontFamily: 'var(--font-inter)' }}>
                          <span style={{ color: 'rgba(244, 242, 234, 0.75)' }}>{k.term}</span>
                          <div style={{ display: 'flex', gap: '1rem' }}>
                            <span style={{ color: '#e5ff3d', fontWeight: 'bold' }}>{k.pos}</span>
                            <span style={{ color: 'rgba(244, 242, 234, 0.4)' }}>{k.volume}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div className="float-item" style={{ height: '124px', background: 'rgba(229, 255, 61, 0.08)', borderRadius: '8px', border: '1px solid rgba(229, 255, 61, 0.25)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: '#e5ff3d', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Page Speed Index</span>
                      <span style={{ fontSize: '2.4rem', fontWeight: 'bold', color: '#f4f2ea', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>100/100</span>
                    </div>
                    <div className="float-item" style={{ height: '124px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(244, 242, 234, 0.5)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Traffic Growth</span>
                      <span style={{ fontSize: '2.4rem', fontWeight: 'bold', color: '#e5ff3d', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>+348%</span>
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
            <p className="section-label" style={{ fontFamily: 'var(--font-inter), Inter, monospace', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>
              Service 05 // Google &amp; Meta Ads
            </p>
          </div>
          <div ref={card5Ref} className="services-card" style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', fontSize: 'clamp(2.4rem, 3.5vw, 3.6rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.8rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Google &amp; Meta Ads Management
              </h3>
              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.35rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3.2rem', transition: 'color 0.5s' }}>
                As an accredited Google Ads agency and Facebook Ads agency, we deliver complete PPC management, Google Ads services, and Meta Ads management. We build, optimize, and scale campaigns across search and display networks to maximize acquisition ROAS.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  className="cta-button" 
                  href="/services/google-ads" 
                  style={{ 
                    padding: '1.1rem 2.4rem', 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    borderRadius: '9999px', 
                    background: 'var(--btn-bg)', 
                    color: 'var(--btn-text)', 
                    border: 'none', 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
                    transition: 'all 0.3s ease' 
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <span>Get Google Ads Quote</span>
                </a>
                <a 
                  className="cta-button" 
                  href="/services/meta-ads" 
                  style={{ 
                    padding: '1.1rem 2.4rem', 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    borderRadius: '9999px', 
                    background: 'transparent', 
                    color: 'var(--text-primary)', 
                    border: '1px solid var(--text-primary)', 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    transition: 'all 0.3s ease' 
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--text-primary)';
                    e.currentTarget.style.color = 'var(--btn-text)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  <span>Get Facebook Ads Quote</span>
                </a>
              </div>
            </div>
            {/* Right (Browser Combined Google & Meta Ads Mockup) */}
            <div className="services-browser" style={browserStyle} role="img" aria-label="Paid advertising interface displaying campaign ROAS performance and CPA metrics">
              <div style={{ height: '40px', borderBottom: '1px solid var(--browser-border)', background: 'var(--browser-header)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e5ff3d', opacity: 0.8 }} />
              </div>
              <div ref={mock5Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ gridColumn: 'span 3', height: '100px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem 1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#e5ff3d', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', fontWeight: 600 }}>Google Search Sponsored Result</span>
                    </div>
                    <div style={{ fontSize: '1.15rem', color: '#f4f2ea', fontWeight: 'bold', marginBottom: '0.2rem', fontFamily: 'var(--font-oswald), sans-serif' }}>NexGrowth Custom Software Development</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(244, 242, 234, 0.65)', fontFamily: 'var(--font-inter)' }}>Scale your B2B business operations with custom engineering.</div>
                  </div>
                  <div className="float-item" style={{ height: '120px', background: 'rgba(229, 255, 61, 0.08)', borderRadius: '8px', border: '1px solid rgba(229, 255, 61, 0.25)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(244, 242, 234, 0.6)', fontFamily: 'var(--font-inter)' }}>ROAS</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#e5ff3d', marginTop: '0.4rem', fontFamily: 'var(--font-oswald), sans-serif' }}>5.2x</span>
                  </div>
                  <div className="float-item" style={{ height: '120px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(244, 242, 234, 0.6)', fontFamily: 'var(--font-inter)' }}>Conv. Rate</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#f4f2ea', marginTop: '0.4rem', fontFamily: 'var(--font-oswald), sans-serif' }}>14.2%</span>
                  </div>
                  <div className="float-item" style={{ height: '120px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(244, 242, 234, 0.6)', fontFamily: 'var(--font-inter)' }}>Search Share</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#e5ff3d', marginTop: '0.4rem', fontFamily: 'var(--font-oswald), sans-serif' }}>74%</span>
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
            <p className="section-label" style={{ fontFamily: 'var(--font-inter), Inter, monospace', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>
              Service 06 // Social Media Marketing
            </p>
          </div>
          <div ref={card6Ref} className="services-card" style={cardStyle}>
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', fontSize: 'clamp(2.4rem, 3.5vw, 3.6rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.8rem', lineHeight: '1.1', transition: 'color 0.5s' }}>
                Social Media Marketing (SMM)
              </h3>
              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.35rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '3.2rem', transition: 'color 0.5s' }}>
                As an experienced social media marketing agency, we handle all aspects of social media management, organic Instagram marketing, and customer engagement. As a full-suite digital marketing agency, we leverage networks to connect you with your audience and grow your brand.
              </p>
              <a 
                className="cta-button" 
                href="/services/social-media-marketing" 
                style={{ 
                  padding: '1.1rem 2.6rem', 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  borderRadius: '9999px', 
                  background: 'var(--btn-bg)', 
                  color: 'var(--btn-text)', 
                  border: 'none', 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
                  transition: 'all 0.3s ease' 
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>Get Social Marketing Quote</span>
              </a>
            </div>
            {/* Right (Browser SMM Mockup) */}
            <div className="services-browser" style={browserStyle} role="img" aria-label="Social media feed visualizer displaying likes count and community growth progress">
              <div style={{ height: '40px', borderBottom: '1px solid var(--browser-border)', background: 'var(--browser-header)', display: 'flex', alignItems: 'center', padding: '0 1.6rem', gap: '0.8rem', transition: 'border-color 0.5s' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fd8565', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffc2ad', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e5ff3d', opacity: 0.8 }} />
              </div>
              <div ref={mock6Ref} style={{ padding: '2.5rem', height: 'calc(100% - 40px)', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1.5rem', height: '100%' }}>
                  <div className="float-item" style={{ height: '260px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <h4 style={{ fontSize: '1.1rem', color: '#f4f2ea', fontWeight: 'bold', margin: 0, fontFamily: 'var(--font-oswald), sans-serif' }}>Engagement Metrics</h4>
                    {[
                      { channel: 'LinkedIn Posts', reach: '42.8k', engagement: '8.4%' },
                      { channel: 'X / Twitter Threads', reach: '108.2k', engagement: '6.2%' },
                      { channel: 'Instagram Reels', reach: '82.5k', engagement: '11.8%' },
                    ].map((row, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.6rem', fontFamily: 'var(--font-inter)' }}>
                        <span style={{ fontSize: '0.95rem', color: 'rgba(244, 242, 234, 0.7)' }}>{row.channel}</span>
                        <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.95rem', fontWeight: 'bold' }}>
                          <span style={{ color: '#e5ff3d' }}>{row.reach}</span>
                          <span style={{ color: '#f4f2ea' }}>{row.engagement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="float-item" style={{ height: '122px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(244, 242, 234, 0.5)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Audience Growth</span>
                      <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#f4f2ea', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>+12,400</span>
                    </div>
                    <div className="float-item" style={{ height: '122px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(244, 242, 234, 0.5)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Brand Mentions</span>
                      <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#e5ff3d', marginTop: '0.3rem', fontFamily: 'var(--font-oswald), sans-serif' }}>+240%</span>
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

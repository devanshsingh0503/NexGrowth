'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const navLinks = [
  { label: 'Services',    href: '#services' },
  { label: 'Why NexGrowth', href: '#why-nexgrowth' },
  { label: 'Our Process', href: '#process' },
  { label: 'Portfolio',   href: '#portfolio' },
];

interface ThemeConfig {
  id: string;
  bg: string;
  border: string;
  text: string;
  activeText: string;
  ctaBg: string;
  ctaText: string;
  ctaBorder: string;
  logo: string;
  shadow: string;
}

const defaultTheme: ThemeConfig = {
  id: 'default',
  bg: 'rgba(33, 21, 18, 0.45)',
  border: '1px solid rgba(255, 119, 201, 0.12)',
  text: 'rgba(255, 255, 255, 0.65)',
  activeText: 'var(--current-color-40)',
  ctaBg: 'transparent',
  ctaText: '#fff',
  ctaBorder: '1px solid rgba(255, 255, 255, 0.15)',
  logo: 'var(--current-color-40)',
  shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.35)',
};

const themes: ThemeConfig[] = [
  // 0. Hero (Dark chocolate transparent)
  {
    id: 'home__hero',
    bg: 'rgba(33, 21, 18, 0.45)',
    border: '1px solid rgba(255, 119, 201, 0.12)',
    text: 'rgba(255, 255, 255, 0.65)',
    activeText: 'var(--current-color-40)',
    ctaBg: 'transparent',
    ctaText: '#fff',
    ctaBorder: '1px solid rgba(255, 255, 255, 0.15)',
    logo: 'var(--current-color-40)',
    shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.35)',
  },
  // 1. About (Pink background -> dark chocolate navbar)
  {
    id: 'home__intro',
    bg: 'rgba(50, 35, 18, 0.85)',
    border: '1px solid rgba(255, 119, 201, 0.18)',
    text: 'rgba(252, 250, 248, 0.65)',
    activeText: 'var(--current-color-40)',
    ctaBg: '#fcfaf8',
    ctaText: '#322312',
    ctaBorder: 'none',
    logo: 'var(--current-color-40)',
    shadow: '0 12px 40px rgba(0, 0, 0, 0.45)',
  },
  // 2. Services - Burgundy Theme (Software Dev)
  {
    id: 'services-burgundy',
    bg: 'rgba(24, 2, 6, 0.85)', // Dark wine
    border: '1px solid rgba(255, 119, 201, 0.22)',
    text: 'rgba(255, 255, 255, 0.65)',
    activeText: '#ff77a8',
    ctaBg: '#ff77a8', // Pink button
    ctaText: '#180206',
    ctaBorder: 'none',
    logo: '#ff77a8',
    shadow: '0 12px 48px rgba(0, 0, 0, 0.5)',
  },
  // 3. Services - Emerald Green Theme (Digital Marketing)
  {
    id: 'services-emerald',
    bg: 'rgba(17, 35, 19, 0.85)', // Dark forest green
    border: '1px solid rgba(134, 232, 151, 0.22)',
    text: 'rgba(255, 255, 255, 0.65)',
    activeText: '#86e897',
    ctaBg: '#86e897', // Bright mint green button
    ctaText: '#112313', // Dark green text
    ctaBorder: 'none',
    logo: '#86e897',
    shadow: '0 12px 48px rgba(0, 0, 0, 0.5)',
  },
  // 4. Why NexGrowth & Process (Lavender/purple background -> dark purple navbar)
  {
    id: 'why-nexgrowth',
    bg: 'rgba(65, 0, 96, 0.85)',
    border: '1px solid rgba(215, 120, 248, 0.22)',
    text: 'rgba(236, 221, 252, 0.65)',
    activeText: '#D778F8',
    ctaBg: '#ECDDFC',
    ctaText: '#410060',
    ctaBorder: 'none',
    logo: '#D778F8',
    shadow: '0 12px 48px rgba(0, 0, 0, 0.5)',
  },
];

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('');
  const [navTheme, setNavTheme] = useState<ThemeConfig>(defaultTheme);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    // Entry animation
    gsap.fromTo(el,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.3 }
    );

    // Bounding Client Rect-based viewport scroll handler for zero-latency theme swapping
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      // ── 1. Active Navigation Link Highlighting ──
      const sections = ['services', 'why-nexgrowth', 'process', 'portfolio'];
      let current = '';
      for (const id of sections) {
        const sect = document.getElementById(id);
        if (sect && scrollPos >= sect.offsetTop && scrollPos < sect.offsetTop + sect.offsetHeight) {
          current = `#${id}`;
          break;
        }
      }
      setActiveSection(current);

      // ── 2. Viewport-based Theme Switching ──
      const heroEl = document.getElementById('home__hero');
      const introEl = document.getElementById('home__intro');
      const whyEl = document.getElementById('why-nexgrowth');
      const portfolioEl = document.getElementById('portfolio');
      const seoEl = document.getElementById('services-seo');

      const whyRect = whyEl?.getBoundingClientRect();
      const introRect = introEl?.getBoundingClientRect();
      const heroRect = heroEl?.getBoundingClientRect();
      const portfolioRect = portfolioEl?.getBoundingClientRect();
      const seoRect = seoEl?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Transition boundaries
      if (portfolioRect && portfolioRect.top <= 96) {
        // Revert back to default dark theme on Projects page
        setNavTheme(themes[0]);
      } else if (whyRect && whyRect.top <= viewportHeight) {
        // Purple theme zone triggers precisely when bottom of screen touches top of Process suite
        setNavTheme(themes[4]);
      } else if (introRect && introRect.top <= 96 && introRect.bottom > 96) {
        // Pink / About page
        setNavTheme(themes[1]);
      } else if (heroRect && heroRect.bottom > 96) {
        // Hero section
        setNavTheme(themes[0]);
      } else {
        // Services section pages (Web Design, Web App, SEO, Google Ads, Meta Ads, SMM)
        // If we have crossed the SEO section entry, apply the Emerald Green theme.
        // Otherwise, apply the Burgundy theme for Web Design/Web App pages.
        if (seoRect && seoRect.top <= 96) {
          setNavTheme(themes[3]); // Emerald Green Theme
        } else {
          setNavTheme(themes[2]); // Burgundy Theme
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load to establish correct theme
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={ref}
      className="header-pill"
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999,
        height: '64px',
        width: '92vw',
        maxWidth: '1440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        borderRadius: '24px', // 24-30px rounded corners
        background: navTheme.bg,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: navTheme.border,
        boxShadow: navTheme.shadow,
        transition: 'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%', position: 'relative' }}>
        
        {/* Left: Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
        >
          <svg width="160" height="24" viewBox="0 0 160 30" xmlns="http://www.w3.org/2000/svg">
            <text 
              x="0" 
              y="22" 
              fontFamily="GT-Planar, Inter, sans-serif" 
              fontSize="22" 
              fontWeight="bold" 
              fill={navTheme.logo} 
              letterSpacing="-0.05em"
              style={{ transition: 'fill 0.5s ease' }}
            >
              NEXGROWTH
            </text>
          </svg>
        </button>

        {/* Center: Navigation Links */}
        <nav style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <ul style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    position: 'relative',
                    color: activeSection === l.href ? navTheme.activeText : navTheme.text,
                    fontFamily: 'GT-Planar, sans-serif',
                    fontSize: '1.35rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    transition: 'color 0.5s ease, background 0.3s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => {
                    if (activeSection !== l.href) {
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (activeSection !== l.href) {
                      e.currentTarget.style.color = navTheme.text;
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {l.label}
                  {activeSection === l.href && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '16px',
                        right: '16px',
                        height: '2px',
                        background: navTheme.activeText,
                        borderRadius: '2px',
                        transition: 'background 0.5s ease',
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: CTA Button */}
        <div>
          <a
            className="cta-button"
            href="#contact"
            style={{
              padding: '0.8rem 2.0rem',
              fontSize: '1.25rem',
              borderRadius: '9999px',
              border: navTheme.ctaBorder || 'none',
              background: navTheme.ctaBg,
              color: navTheme.ctaText,
              transition: 'all 0.5s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              if (navTheme.ctaBg === 'transparent') {
                e.currentTarget.style.background = 'var(--current-color-40)';
                e.currentTarget.style.borderColor = 'var(--current-color-40)';
                e.currentTarget.style.color = '#161008';
              } else {
                e.currentTarget.style.transform = 'scale(1.03)';
              }
            }}
            onMouseLeave={e => {
              if (navTheme.ctaBg === 'transparent') {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#fff';
              } else {
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            <div className="cta-button__text">
              <span>Request Quote</span>
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}

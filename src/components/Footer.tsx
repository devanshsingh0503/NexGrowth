'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const footerServices = [
  { label: 'Website Design & Development', href: 'https://nexgrowth.com/website-design-development/' },
  { label: 'Web Application Development', href: 'https://nexgrowth.com/web-application-development/' },
  { label: 'Search Engine Optimisation', href: 'https://nexgrowth.com/search-engine-optimization/' },
];

const footerLinks = [
  { label: 'About', href: '#home__intro' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: 'https://nexgrowth.com/privacy-policy/' },
  { label: 'Terms of Service', href: 'https://nexgrowth.com/terms-and-condition/' },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 90%' } });
  }, []);

  return (
    <footer ref={ref} className="footer" style={{ background: '#161008', position: 'relative', overflow: 'hidden' }}>
      {/* Top feather — blends contact section into footer */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '10rem',
        background: 'linear-gradient(to bottom, #161008 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Top row: brand + nav columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          {/* Brand / tagline */}
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--current-color-40)', fontFamily: 'GT-Planar, Inter, sans-serif', letterSpacing: '-0.04em', marginBottom: '1.25rem' }}>
              NEXGROWTH
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', fontSize: '0.95rem', maxWidth: '320px' }}>
              At NexGrowth, we architect digital experiences that breathe life into your brand's most ambitious vision. Transforming pixels into possibilities.
            </p>
            {/* Phone Contact */}
            <div style={{ marginTop: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', fontFamily: 'GT-Planar, Inter, sans-serif' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--current-color-40)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.5s ease' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+918052731617" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}>
                +91 8052731617
              </a>
            </div>
            {/* Social icons */}
            <div className="footer__socials" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              {/* LinkedIn */}
              <a className="footer__social-link" href="https://linkedin.com/company/nexgrowth" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a className="footer__social-link" href="https://twitter.com/nexgrowth" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a className="footer__social-link" href="https://instagram.com/nexgrowth" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerServices.map(s => (
                <li key={s.href}>
                  <a href={s.href} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--current-color-40)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  >{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--current-color-40)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div className="footer__bottom" style={{ paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>© 2026 NexGrowth. All rights reserved.</p>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>
            Trusted by B2B businesses worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}

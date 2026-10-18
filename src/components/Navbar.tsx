'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2,
        },
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBookCall = () => {
    setMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent('open-book-modal'));
  };

  const navLinks = [
    { name: 'SERVICES', href: '#services' },
    { name: 'PROCESS', href: '#process' },
    { name: 'WORK', href: '#work' },
    { name: 'PACKAGES', href: '#packages' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(244, 242, 234, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(23, 25, 22, 0.08)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="flow-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: '2px',
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: '1.45rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#171916',
              textTransform: 'lowercase',
            }}
          >
            nexgrowth
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                color: '#171916',
                transform: 'translateY(-6px)',
              }}
            >
              ®
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#171916',
                  opacity: 0.8,
                  transition: 'opacity 0.2s ease',
                  padding: '6px 2px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={openBookCall}
              className="btn-primary-lime"
              style={{
                padding: '0.65rem 1.35rem',
                fontSize: '0.875rem',
              }}
            >
              Book a Call
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(23, 25, 22, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                padding: 0,
              }}
              aria-label="Toggle navigation menu"
            >
              <span
                style={{
                  width: '18px',
                  height: '2px',
                  backgroundColor: '#171916',
                  transition: 'transform 0.2s',
                  transform: mobileMenuOpen ? 'rotate(45deg) translate(2.5px, 2.5px)' : 'none',
                }}
              />
              <span
                style={{
                  width: '18px',
                  height: '2px',
                  backgroundColor: '#171916',
                  transition: 'opacity 0.2s',
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: '18px',
                  height: '2px',
                  backgroundColor: '#171916',
                  transition: 'transform 0.2s',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translate(2.5px, -2.5px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator Bar */}
        <div
          ref={progressBarRef}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2.5px',
            backgroundColor: '#e5ff3d',
            transformOrigin: 'left',
            transform: 'scaleX(0)',
            zIndex: 10,
          }}
        />
      </header>

      {/* Mobile Menu Dropdown Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '72px',
            zIndex: 99,
            backgroundColor: '#f4f2ea',
            display: 'flex',
            flexDirection: 'column',
            padding: '2.5rem 1.75rem',
            gap: '1.5rem',
            borderTop: '1px solid rgba(23, 25, 22, 0.08)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#171916',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(23, 25, 22, 0.06)',
                paddingBottom: '0.75rem',
              }}
            >
              {link.name}
            </a>
          ))}

          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            <button
              onClick={openBookCall}
              className="btn-primary-lime"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '1rem',
                fontSize: '1rem',
              }}
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </>
  );
}

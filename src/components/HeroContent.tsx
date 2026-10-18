'use client';

import type { RefObject } from 'react';
import Link from 'next/link';

interface Props {
  contentRef: RefObject<HTMLDivElement | null>;
}

const tickerItems = [
  'Custom Websites',
  'SaaS Applications',
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Social Media',
];

export default function HeroContent({ contentRef }: Props) {
  return (
    <div
      ref={contentRef}
      className="home__hero__wrapper"
      style={{
        position: 'relative',
        zIndex: 10,
        isolation: 'isolate',
        width: '100%',
        maxWidth: '1100px',
        padding: '0 2rem',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Eyebrow tag */}
      <div style={{ marginBottom: '2rem' }}>
        <span
          className="hero-eyebrow"
          style={{
            border: '1px solid rgba(23, 25, 22, 0.20)',
            borderRadius: '100px',
            padding: '0.4rem 1rem',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontSize: '0.8rem',
            color: '#50534b',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            display: 'inline-block',
            fontWeight: 500,
          }}
        >
          B2B Web Development Agency
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: 'clamp(3rem, 7vw, 6.5rem)',
          lineHeight: 1.0,
          fontFamily: 'var(--font-oswald), Oswald, sans-serif',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: '#171916',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          perspective: '1000px',
        }}
      >
        {'Custom B2B Web Development & Software Engineering That Power Growing Businesses.'
          .split(' ')
          .map((word, i) => (
            <span
              key={i}
              className="hero-word"
              style={{
                display: 'inline-block',
                marginRight: '0.25em',
                willChange: 'transform, opacity',
              }}
            >
              {word}
            </span>
          ))}
      </h1>

      {/* Infinite scrolling ticker / marquee */}
      <div
        className="hero-marquee"
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
          maxWidth: '900px',
          margin: '2.2rem auto 2.2rem auto',
          position: 'relative',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'inline-flex',
            width: 'max-content',
            animation: 'marquee 20s linear infinite',
            willChange: 'transform',
          }}
        >
          {/* Half 1 */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2.5rem',
              paddingRight: '2.5rem',
            }}
          >
            {tickerItems.map((item, idx) => (
              <span
                key={`m1-${idx}`}
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  color: '#50534b',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '2.5rem',
                }}
              >
                <span>{item}</span>
                <span style={{ opacity: 0.6 }}>·</span>
              </span>
            ))}
          </div>
          {/* Half 2 (duplicate for seamless loop) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2.5rem',
              paddingRight: '2.5rem',
            }}
          >
            {tickerItems.map((item, idx) => (
              <span
                key={`m2-${idx}`}
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  color: '#50534b',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '2.5rem',
                }}
              >
                <span>{item}</span>
                <span style={{ opacity: 0.6 }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Subtext */}
      <p
        className="hero-support"
        style={{
          fontFamily: 'var(--font-inter), Inter, sans-serif',
          fontWeight: 400,
          fontSize: '1.1rem',
          color: '#50534b',
          maxWidth: '560px',
          margin: '0 auto',
          textAlign: 'center',
          lineHeight: 1.6,
        }}
      >
        We design and develop custom websites, web applications, and software platforms that help
        businesses acquire users, streamline operations, and scale with confidence.
      </p>

      {/* Two CTA Buttons */}
      <div
        className="hero-buttons"
        style={{
          display: 'flex',
          gap: '1.2rem',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3rem',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 5,
        }}
      >
        <Link
          href="#contact"
          style={{
            background: '#e5ff3d',
            color: '#171916',
            fontWeight: 700,
            padding: '1rem 2.2rem',
            borderRadius: '6px',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontSize: '1rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            lineHeight: 1.2,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(229, 255, 61, 0.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Discuss Your B2B Project
        </Link>
        <Link
          href="/services"
          style={{
            background: 'transparent',
            color: '#171916',
            border: '1.5px solid #171916',
            padding: '1rem 2.2rem',
            borderRadius: '6px',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease, color 0.2s ease, transform 0.2s ease',
            lineHeight: 1.2,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#171916';
            e.currentTarget.style.color = '#f4f2ea';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#171916';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          View Services
        </Link>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

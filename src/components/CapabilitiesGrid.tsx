'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Capability {
  num: string;
  shortTag: string;
  title: string;
  desc: string;
  features: string[];
  link: string;
}

const capabilities: Capability[] = [
  {
    num: '01',
    shortTag: 'WEB DEV',
    title: 'Website Design & Development',
    desc: 'High-converting corporate websites and responsive layouts engineered for performance, brand authority, and seamless conversions.',
    features: ['Next.js 16 SSR & SSG', 'Core Web Vitals 95+', 'Interactive Animations', 'Responsive Multi-Device'],
    link: '/services/web-development',
  },
  {
    num: '02',
    shortTag: 'SAAS APPS',
    title: 'SaaS & Web Applications',
    desc: 'Custom SaaS dashboards, client portals, complex database workflows, and cloud-native digital platforms built to scale.',
    features: ['Role-Based Auth & RBAC', 'Cloud Database Architecture', 'Real-Time Data Streams', 'API Microservices'],
    link: '/services/software-development',
  },
  {
    num: '03',
    shortTag: 'SEO ENGINE',
    title: 'Technical SEO Audits & Growth',
    desc: 'Deep technical SEO, programmatic page infrastructure, schema architecture, and search visibility that compounds organically.',
    features: ['Technical Site Audits', 'Structured Data Schema', 'Programmatic SEO Scaling', 'Page Speed Optimization'],
    link: '/services/seo',
  },
  {
    num: '04',
    shortTag: 'SEARCH ADS',
    title: 'Google Ads & PPC Campaigns',
    desc: 'High-intent search acquisition campaigns, keyword bid management, and data-backed ROAS scaling that captures in-market buyers.',
    features: ['High-Intent Search Ads', 'Conversion Tracking Setup', 'Keyword Negative Lists', 'Continuous Bid Scaling'],
    link: '/services/google-ads',
  },
  {
    num: '05',
    shortTag: 'SOCIAL ADS',
    title: 'Meta & Paid Social Funnels',
    desc: 'Targeted paid social funnels, dynamic creative testing, and retargeting architectures that turn passive scrollers into customers.',
    features: ['Audience Retargeting', 'Video Ad Creatives', 'Funnel Friction Removal', 'ROAS Optimization'],
    link: '/services/meta-ads',
  },
  {
    num: '06',
    shortTag: 'MAINTENANCE',
    title: 'Platform Maintenance & SMM',
    desc: 'Ongoing code maintenance, 99.9% uptime monitoring, monthly security patches, and organic social media brand growth.',
    features: ['SLA & Uptime Monitoring', 'Security Patches', 'Content Updates', 'Organic Social Strategy'],
    link: '/services/social-media-marketing',
  },
];

export default function CapabilitiesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          { y: 55, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: 'back.out(1.15)',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        backgroundColor: '#f4f2ea',
        padding: '6rem 0 8rem',
        position: 'relative',
      }}
    >
      <div className="flow-container">
        {/* Section Header */}
        <div ref={headerRef} style={{ maxWidth: '780px', marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="flow-tag">
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#171916',
                }}
              />
              CAPABILITIES &amp; SERVICES
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              lineHeight: 1.0,
              fontWeight: 700,
              color: '#171916',
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem',
            }}
          >
            EVERY TOOL YOU NEED TO GROW IN FLOW.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1.125rem',
              color: '#50534b',
              lineHeight: 1.6,
            }}
          >
            From custom corporate web engineering and SaaS platforms to search visibility and paid acquisition — engineered under one roof with zero friction.
          </p>
        </div>

        {/* 6-Card White Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {capabilities.map((item) => (
            <div
              key={item.num}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '360px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(23, 25, 22, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Number & Short Tag Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#50534b',
                    }}
                  >
                    {item.num} / {item.shortTag}
                  </span>

                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#e5ff3d',
                      border: '1px solid #171916',
                    }}
                  />
                </div>

                {/* Card Title */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.65rem',
                    lineHeight: 1.15,
                    fontWeight: 700,
                    color: '#171916',
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem',
                  }}
                >
                  {item.title}
                </h3>

                {/* Card Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: '#50534b',
                    marginBottom: '1.5rem',
                  }}
                >
                  {item.desc}
                </p>

                {/* Bullet Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  {item.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        backgroundColor: '#f4f2ea',
                        color: '#171916',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Link */}
              <a
                href={item.link}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: '#171916',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(23, 25, 22, 0.08)',
                }}
              >
                <span>Learn more</span>
                <span style={{ fontSize: '1.1rem', transition: 'transform 0.2s ease' }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

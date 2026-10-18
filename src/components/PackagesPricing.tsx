'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type BillingMode = 'project' | 'retainer';

interface PackageTier {
  name: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  projectType: string;
}

const packages: PackageTier[] = [
  {
    name: 'STARTER / LAUNCH',
    tagline: 'A little room to begin. Perfect for new brands, MVPs, and rapid validation.',
    features: [
      'Custom Next.js 16 Corporate Website',
      'Mobile-First Responsive Layout',
      'Core Web Vitals 95+ Performance',
      'On-Page Technical SEO Setup',
      'Contact Forms & Analytics Tracking',
      '14-Day Delivery Timeline',
    ],
    ctaText: 'Contact for Further Info & Price',
    projectType: 'Website Design & Development',
  },
  {
    name: 'GROWTH / SCALE',
    tagline: 'For your next good idea. Custom web apps and high-converting B2B platforms.',
    popular: true,
    features: [
      'Everything in Starter Tier',
      'Custom SaaS Dashboard or Client Portal',
      'Database Architecture (Postgres/Cloud)',
      'Role-Based Authentication & Workflows',
      'Technical SEO & Programmatic Pages',
      'Google & Meta Conversion API Setup',
      '30-Day Guaranteed Post-Launch Support',
    ],
    ctaText: 'Contact for Further Info & Price',
    projectType: 'SaaS Web Application',
  },
  {
    name: 'ENTERPRISE / PARTNER',
    tagline: 'Make space for each other. Dedicated full-stack software engineering team.',
    features: [
      'Full-Stack Architecture & Microservices',
      'Dedicated Senior Engineer & Project Manager',
      'Enterprise SLA & 99.9% Uptime Guarantee',
      'Bi-Weekly Feature Sprints & Releases',
      'Continuous Security & Performance Audits',
      'High-Intent Google Ads & Funnel Scaling',
    ],
    ctaText: 'Contact for Further Info & Price',
    projectType: 'Full-Stack Retainer',
  },
];

export default function PackagesPricing() {
  const [billingMode, setBillingMode] = useState<BillingMode>('project');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
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
      id="packages"
      style={{
        backgroundColor: '#f4f2ea',
        padding: '6rem 0 8rem',
        position: 'relative',
      }}
    >
      <div className="flow-container">
        {/* Header */}
        <div ref={headerRef} style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
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
              PACKAGES &amp; DELIVERABLES
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
            PICK YOUR PACE.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1.125rem',
              color: '#50534b',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            Clear deliverables, guaranteed turnaround, and dedicated engineering. Choose fixed-scope sprints or ongoing monthly retainers — contact our engineering team for further info and pricing.
          </p>

          {/* Billing Switcher Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(23, 25, 22, 0.06)',
              borderRadius: '9999px',
              padding: '4px',
              border: '1px solid rgba(23, 25, 22, 0.08)',
            }}
          >
            <button
              onClick={() => setBillingMode('project')}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                backgroundColor: billingMode === 'project' ? '#171916' : 'transparent',
                color: billingMode === 'project' ? '#e5ff3d' : '#50534b',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Project-Based
            </button>
            <button
              onClick={() => setBillingMode('retainer')}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                backgroundColor: billingMode === 'retainer' ? '#171916' : 'transparent',
                color: billingMode === 'retainer' ? '#e5ff3d' : '#50534b',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Monthly Retainer
            </button>
          </div>
        </div>

        {/* 3 Packages Grid */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {packages.map((pkg, idx) => {
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: pkg.popular ? '#171916' : '#ffffff',
                  color: pkg.popular ? '#f4f2ea' : '#171916',
                  borderRadius: '24px',
                  border: pkg.popular ? '2px solid #e5ff3d' : '1px solid rgba(23, 25, 22, 0.08)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: pkg.popular ? '0 20px 48px rgba(0, 0, 0, 0.25)' : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  if (!pkg.popular) e.currentTarget.style.boxShadow = '0 16px 36px rgba(23, 25, 22, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (!pkg.popular) e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      right: '24px',
                      backgroundColor: '#e5ff3d',
                      color: '#171916',
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 14px',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(229, 255, 61, 0.4)',
                    }}
                  >
                    RECOMMENDED
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.5rem',
                      lineHeight: 1.1,
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      marginBottom: '0.5rem',
                      color: pkg.popular ? '#f4f2ea' : '#171916',
                    }}
                  >
                    {pkg.name}
                  </h3>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      color: pkg.popular ? 'rgba(244, 242, 234, 0.7)' : '#50534b',
                      marginBottom: '1.75rem',
                      minHeight: '42px',
                    }}
                  >
                    {pkg.tagline}
                  </p>

                  {/* Price & Info Block */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                      <span
                        className="font-display"
                        style={{
                          fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)',
                          fontWeight: 700,
                          color: pkg.popular ? '#e5ff3d' : '#171916',
                          lineHeight: 1.1,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        Contact for Price
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: pkg.popular ? 'rgba(244, 242, 234, 0.55)' : 'rgba(23, 25, 22, 0.55)',
                        display: 'inline-block',
                        marginTop: '0.4rem',
                      }}
                    >
                      {billingMode === 'project'
                        ? 'Project-Based Scope · Contact for Further Info & Price'
                        : 'Monthly Retainer · Contact for Further Info & Price'}
                    </span>
                  </div>

                  {/* Feature List */}
                  <div
                    style={{
                      borderTop: pkg.popular ? '1px solid rgba(244, 242, 234, 0.12)' : '1px solid rgba(23, 25, 22, 0.08)',
                      paddingTop: '1.5rem',
                      marginBottom: '2.5rem',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: pkg.popular ? 'rgba(244, 242, 234, 0.5)' : '#50534b',
                        marginBottom: '1rem',
                      }}
                    >
                      What&apos;s Included:
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {pkg.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem',
                            fontSize: '0.875rem',
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            lineHeight: 1.45,
                            color: pkg.popular ? 'rgba(244, 242, 234, 0.85)' : '#171916',
                          }}
                        >
                          <span
                            style={{
                              color: pkg.popular ? '#e5ff3d' : '#171916',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                            }}
                          >
                            ✓
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={pkg.popular ? 'btn-primary-lime' : 'btn-secondary-outline'}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.9rem',
                    fontSize: '0.9375rem',
                    textAlign: 'center',
                  }}
                >
                  {pkg.ctaText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

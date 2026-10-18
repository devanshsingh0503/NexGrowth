'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type TabKey = 'focus' | 'engineer' | 'scale';

export default function ShowcaseWindow() {
  const [activeTab, setActiveTab] = useState<TabKey>('engineer');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

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

      if (windowRef.current) {
        gsap.fromTo(
          windowRef.current,
          {
            y: 80,
            scale: 0.92,
            rotateX: 7,
            opacity: 0.7,
            transformPerspective: 1200,
            transformOrigin: 'top center',
          },
          {
            y: 0,
            scale: 1,
            rotateX: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: windowRef.current,
              start: 'top 92%',
              end: 'top 40%',
              scrub: 1.2,
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
      style={{
        backgroundColor: '#f4f2ea',
        padding: '5rem 0 8rem',
        position: 'relative',
      }}
    >
      <div className="flow-container">
        {/* Header */}
        <div ref={headerRef} style={{ maxWidth: '820px', marginBottom: '3rem' }}>
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
              LESS NOISE. MORE CALM.
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
            BUSY ISN’T A BADGE. SCALABILITY IS A FEELING.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1.125rem',
              color: '#50534b',
              lineHeight: 1.6,
            }}
          >
            We eliminate spaghetti code, outdated CMS bloat, and fragile dependencies. Everything is organized inside a clean, modern Next.js engine that moves with your business.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {(['focus', 'engineer', 'scale'] as TabKey[]).map((tab) => {
            const isActive = activeTab === tab;
            const labels = {
              focus: '01 / FOCUS (ARCHITECTURE)',
              engineer: '02 / ENGINEER (NEXT.JS & CLOUD)',
              scale: '03 / SCALE (SEO & CONVERSIONS)',
            };

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  backgroundColor: isActive ? '#171916' : 'rgba(23, 25, 22, 0.06)',
                  color: isActive ? '#e5ff3d' : '#50534b',
                  border: isActive ? '1px solid #171916' : '1px solid rgba(23, 25, 22, 0.1)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        {/* Dark Browser Frame */}
        <div
          ref={windowRef}
          style={{
            backgroundColor: '#171916',
            borderRadius: '24px',
            border: '1px solid rgba(244, 242, 234, 0.12)',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Window Header */}
          <div
            style={{
              padding: '1rem 1.5rem',
              borderBottom: '1px solid rgba(244, 242, 234, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
            }}
          >
            {/* 3 Window Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
            </div>

            {/* URL Pill */}
            <div
              style={{
                backgroundColor: 'rgba(244, 242, 234, 0.06)',
                borderRadius: '9999px',
                padding: '4px 18px',
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                color: 'rgba(244, 242, 234, 0.65)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span style={{ color: '#e5ff3d' }}>●</span>
              nexgrowth.in/engine/system
            </div>

            <div style={{ width: '42px' }} />
          </div>

          {/* Interactive Window Body */}
          <div style={{ padding: 'clamp(1.5rem, 3.5vw, 3rem)', color: '#f4f2ea' }}>
            {activeTab === 'focus' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div style={{ backgroundColor: '#1f221e', padding: '2rem', borderRadius: '18px', border: '1px solid rgba(244, 242, 234, 0.08)' }}>
                  <span style={{ color: '#e5ff3d', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    01 / INFORMATION ARCHITECTURE
                  </span>
                  <h4 className="font-display" style={{ fontSize: '1.5rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                    Zero-Bloat Wireframing
                  </h4>
                  <p style={{ color: 'rgba(244, 242, 234, 0.7)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    Every user journey is mapped out intentionally to minimize clicks, eliminate decision fatigue, and funnel visitors directly into qualified inquiries.
                  </p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="flow-tag-dark">User Friction Audit</span>
                    <span className="flow-tag-dark">Flow Diagrams</span>
                    <span className="flow-tag-dark">Figma Prototypes</span>
                  </div>
                </div>

                <div style={{ backgroundColor: '#1f221e', padding: '2rem', borderRadius: '18px', border: '1px solid rgba(244, 242, 234, 0.08)' }}>
                  <span style={{ color: '#e5ff3d', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    02 / TECHNICAL BLUEPRINT
                  </span>
                  <h4 className="font-display" style={{ fontSize: '1.5rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                    Schema &amp; API Strategy
                  </h4>
                  <p style={{ color: 'rgba(244, 242, 234, 0.7)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    Before writing code, we define data models, security parameters, caching strategies, and third-party webhook integrations for zero downtime.
                  </p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="flow-tag-dark">TypeScript Spec</span>
                    <span className="flow-tag-dark">DB Schema</span>
                    <span className="flow-tag-dark">Edge Routing</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'engineer' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div style={{ backgroundColor: '#1f221e', padding: '2rem', borderRadius: '18px', border: '1px solid rgba(244, 242, 234, 0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#e5ff3d', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      ENGINEERING BENCHMARK
                    </span>
                    <span style={{ backgroundColor: 'rgba(229, 255, 61, 0.15)', color: '#e5ff3d', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                      100 / 100
                    </span>
                  </div>
                  <h4 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                    Next.js 16 + React 19 Core
                  </h4>
                  <p style={{ color: 'rgba(244, 242, 234, 0.7)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    Ultra-fast server-rendered React components combined with edge caching. Pages load in under 1.2 seconds anywhere in the world.
                  </p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="flow-tag-dark">LCP &lt; 0.9s</span>
                    <span className="flow-tag-dark">FID &lt; 10ms</span>
                    <span className="flow-tag-dark">CLS 0.00</span>
                  </div>
                </div>

                <div style={{ backgroundColor: '#1f221e', padding: '2rem', borderRadius: '18px', border: '1px solid rgba(244, 242, 234, 0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#e5ff3d', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      CLOUD ARCHITECTURE
                    </span>
                    <span style={{ backgroundColor: 'rgba(39, 201, 63, 0.15)', color: '#27c93f', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                      HEALTHY 99.9%
                    </span>
                  </div>
                  <h4 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                    Reliable Serverless Infra
                  </h4>
                  <p style={{ color: 'rgba(244, 242, 234, 0.7)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    Automated CI/CD workflows, zero configuration downtime deployments, encrypted databases, and enterprise email notifications.
                  </p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="flow-tag-dark">Vercel &amp; AWS</span>
                    <span className="flow-tag-dark">Nodemailer SMTP</span>
                    <span className="flow-tag-dark">SSL Auto-Renewal</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'scale' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div style={{ backgroundColor: '#1f221e', padding: '2rem', borderRadius: '18px', border: '1px solid rgba(244, 242, 234, 0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#e5ff3d', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      ORGANIC EXPANSION
                    </span>
                    <span style={{ backgroundColor: 'rgba(229, 255, 61, 0.15)', color: '#e5ff3d', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                      +280% IMPRESSIONS
                    </span>
                  </div>
                  <h4 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                    High-Intent Technical SEO
                  </h4>
                  <p style={{ color: 'rgba(244, 242, 234, 0.7)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    JSON-LD Schema structures, clean canonical tags, automated XML sitemaps, and optimized content clusters that rank for buyers, not bots.
                  </p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="flow-tag-dark">Rich Snippets</span>
                    <span className="flow-tag-dark">Top 3 Rankings</span>
                    <span className="flow-tag-dark">Authority Backlinks</span>
                  </div>
                </div>

                <div style={{ backgroundColor: '#1f221e', padding: '2rem', borderRadius: '18px', border: '1px solid rgba(244, 242, 234, 0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#e5ff3d', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      PAID CONVERSIONS
                    </span>
                    <span style={{ backgroundColor: 'rgba(229, 255, 61, 0.15)', color: '#e5ff3d', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                      4.2x ROAS
                    </span>
                  </div>
                  <h4 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                    Ad Funnel Precision
                  </h4>
                  <p style={{ color: 'rgba(244, 242, 234, 0.7)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    Google Search PPC and Meta campaign setups paired directly with custom high-converting landing pages for maximum pipeline growth.
                  </p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="flow-tag-dark">Google Ads</span>
                    <span className="flow-tag-dark">Meta Retargeting</span>
                    <span className="flow-tag-dark">Conversion API</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

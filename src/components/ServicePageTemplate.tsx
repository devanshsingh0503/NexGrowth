'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';

export interface ServicePageTemplateProps {
  breadcrumbs: { name: string; href?: string }[];
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  whyChooseTitle?: string;
  whyChooseContent: React.ReactNode;
  servicesTitle?: string;
  servicesSubtitle?: string;
  servicesList: { title: string; desc: string }[];
  benefitsTitle?: string;
  benefitsSubtitle?: string;
  benefitsList: { tag: string; title: string; desc: string }[];
  processTitle?: string;
  processSubtitle?: string;
  processList: { num: string; title: string; desc: string }[];
  midPageCta: {
    tag?: string;
    title: string;
    desc: string;
    buttonText: string;
    buttonHref?: string;
  };
  techTitle?: string;
  techIntro?: string;
  techTags: string[];
  techOutro?: string;
  industriesTitle?: string;
  industriesIntro?: string;
  industriesList: { title: string; desc: string }[];
  faqsTitle?: string;
  faqsList: { q: string; a: string }[];
  bottomCta: {
    tag?: string;
    title: string;
    desc: string;
    buttonText: string;
    buttonHref?: string;
  };
  schemaScripts?: React.ReactNode;
}

export default function ServicePageTemplate({
  breadcrumbs,
  badge,
  title,
  subtitle,
  primaryCtaText = 'Get Custom Quote',
  primaryCtaHref = '/#contact',
  secondaryCtaText = 'Talk To Expert',
  secondaryCtaHref = '/#contact',
  whyChooseTitle = 'Why Choose NexGrowth',
  whyChooseContent,
  servicesTitle = 'Services Overview',
  servicesSubtitle = 'Our specialized capabilities include:',
  servicesList,
  benefitsTitle = 'Key Business Benefits',
  benefitsSubtitle = 'Partnering with NexGrowth delivers measurable advantages:',
  benefitsList,
  processTitle = 'Our Execution Process',
  processSubtitle = 'A structured delivery framework designed to guarantee speed, quality, and reliability:',
  processList,
  midPageCta,
  techTitle = 'Technologies We Use',
  techIntro = 'We select modern, battle-tested technologies built for speed, scalability, and security:',
  techTags,
  techOutro,
  industriesTitle = 'Industries We Serve',
  industriesIntro = 'Our engineers construct custom tools across major business sectors:',
  industriesList,
  faqsTitle = 'Frequently Asked Questions',
  faqsList,
  bottomCta,
  schemaScripts,
}: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div style={{ backgroundColor: '#f4f2ea', color: '#171916', minHeight: '100vh', position: 'relative' }}>
      {/* Schema scripts (if provided) */}
      {schemaScripts}

      {/* Global FlowPilot Navbar */}
      <Navbar />

      <main style={{ paddingTop: 'clamp(110px, 14vh, 150px)', paddingBottom: '7rem' }}>
        <div className="flow-container" style={{ maxWidth: '1020px' }}>
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            style={{
              marginBottom: '2.5rem',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#50534b',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={index}>
                  {index > 0 && <span style={{ opacity: 0.35 }}>/</span>}
                  {isLast ? (
                    <span style={{ color: '#171916', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e5ff3d', display: 'inline-block' }} />
                      {item.name}
                    </span>
                  ) : item.href ? (
                    <Link href={item.href} style={{ color: '#50534b', transition: 'color 0.2s' }}>
                      {item.name}
                    </Link>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Hero Header */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="flow-tag">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#171916' }} />
                {badge}
              </span>
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                lineHeight: 1.0,
                fontWeight: 700,
                color: '#171916',
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '1.1875rem',
                lineHeight: 1.6,
                color: '#50534b',
                maxWidth: '760px',
                marginBottom: '2.5rem',
              }}
            >
              {subtitle}
            </p>

            {/* Top CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={primaryCtaHref} className="btn-primary-lime">
                <span>{primaryCtaText}</span>
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </Link>
              <Link href={secondaryCtaHref} className="btn-secondary-outline">
                {secondaryCtaText}
              </Link>
            </div>
          </div>

          {/* Content Cards Wrapper */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Section 1: Why Choose NexGrowth */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: '1.875rem',
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                {whyChooseTitle}
              </h2>
              <div style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: '#50534b' }}>
                {whyChooseContent}
              </div>
            </div>

            {/* Section 2: Services Offerings */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: '1.875rem',
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                }}
              >
                {servicesTitle}
              </h2>
              {servicesSubtitle && (
                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.05rem', color: '#50534b', marginBottom: '2rem' }}>
                  {servicesSubtitle}
                </p>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {servicesList.map((srv, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#f4f2ea',
                      borderRadius: '16px',
                      padding: '1.75rem',
                      border: '1px solid rgba(23, 25, 22, 0.06)',
                    }}
                  >
                    <h3 className="font-display" style={{ fontSize: '1.3rem', color: '#171916', marginBottom: '0.5rem' }}>
                      {srv.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.6, color: '#50534b' }}>
                      {srv.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Benefits */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: '1.875rem',
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                }}
              >
                {benefitsTitle}
              </h2>
              {benefitsSubtitle && (
                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.05rem', color: '#50534b', marginBottom: '2rem' }}>
                  {benefitsSubtitle}
                </p>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {benefitsList.map((b, bIdx) => (
                  <div key={bIdx} style={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: '#f4f2ea' }}>
                    <span style={{ color: '#171916', fontSize: '1.15rem', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                      {b.tag}
                    </span>
                    <h3 className="font-display" style={{ fontSize: '1.2rem', color: '#171916', marginBottom: '0.5rem' }}>
                      {b.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.6, color: '#50534b' }}>
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Our Process */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: '1.875rem',
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                }}
              >
                {processTitle}
              </h2>
              {processSubtitle && (
                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1.05rem', color: '#50534b', marginBottom: '1.5rem' }}>
                  {processSubtitle}
                </p>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {processList.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      alignItems: 'flex-start',
                      padding: '1.25rem 0',
                      borderBottom: sIdx < processList.length - 1 ? '1px solid rgba(23, 25, 22, 0.08)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#171916',
                        minWidth: '36px',
                      }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3
                        className="font-display"
                        style={{ fontSize: '1.2rem', color: '#171916', marginBottom: '0.35rem' }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.6, color: '#50534b' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mid-Page Dark CTA Banner */}
            <div
              style={{
                backgroundColor: '#171916',
                color: '#f4f2ea',
                borderRadius: '24px',
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                textAlign: 'center',
                border: '1px solid rgba(244, 242, 234, 0.12)',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.25)',
              }}
            >
              {midPageCta.tag && (
                <div style={{ marginBottom: '1rem' }}>
                  <span className="flow-tag-dark">
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e5ff3d' }} />
                    {midPageCta.tag}
                  </span>
                </div>
              )}
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                  color: '#f4f2ea',
                }}
              >
                {midPageCta.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  color: 'rgba(244, 242, 234, 0.7)',
                  maxWidth: '560px',
                  margin: '0 auto 2rem',
                }}
              >
                {midPageCta.desc}
              </p>
              <Link href={midPageCta.buttonHref || '/#contact'} className="btn-primary-lime">
                {midPageCta.buttonText} →
              </Link>
            </div>

            {/* Section 5: Technologies We Use */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: '1.875rem',
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                {techTitle}
              </h2>
              {techIntro && (
                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: '#50534b', marginBottom: '1.5rem' }}>
                  {techIntro}
                </p>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {techTags.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      backgroundColor: '#f4f2ea',
                      color: '#171916',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(23, 25, 22, 0.08)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {techOutro && (
                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.6, color: '#50534b' }}>
                  {techOutro}
                </p>
              )}
            </div>

            {/* Section 6: Industries We Serve */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: '1.875rem',
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                {industriesTitle}
              </h2>
              {industriesIntro && (
                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: '#50534b', marginBottom: '1.5rem' }}>
                  {industriesIntro}
                </p>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {industriesList.map((ind, iIdx) => (
                  <div key={iIdx} style={{ padding: '1.25rem', backgroundColor: '#f4f2ea', borderRadius: '14px' }}>
                    <h3 className="font-display" style={{ fontSize: '1.15rem', color: '#171916', marginBottom: '0.4rem' }}>
                      {ind.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '0.875rem', lineHeight: 1.5, color: '#50534b' }}>
                      {ind.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 7: FAQs */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: '1.875rem',
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.75rem',
                }}
              >
                {faqsTitle}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqsList.map((faq, fIdx) => {
                  const isOpen = openFaq === fIdx;
                  return (
                    <div
                      key={fIdx}
                      style={{
                        borderRadius: '16px',
                        border: '1px solid rgba(23, 25, 22, 0.08)',
                        overflow: 'hidden',
                        backgroundColor: '#ffffff',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <button
                        onClick={() => toggleFaq(fIdx)}
                        style={{
                          width: '100%',
                          padding: '1.25rem 1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textAlign: 'left',
                          gap: '1rem',
                          cursor: 'pointer',
                        }}
                      >
                        <span
                          className="font-display"
                          style={{
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            color: '#171916',
                          }}
                        >
                          {faq.q}
                        </span>
                        <span
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            backgroundColor: isOpen ? '#171916' : '#f4f2ea',
                            color: isOpen ? '#e5ff3d' : '#171916',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.1rem',
                            flexShrink: 0,
                          }}
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div
                          style={{
                            padding: '0 1.5rem 1.5rem',
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontSize: '0.9375rem',
                            lineHeight: 1.6,
                            color: '#50534b',
                            borderTop: '1px solid rgba(23, 25, 22, 0.04)',
                            paddingTop: '1rem',
                          }}
                        >
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 8: Bottom Call to Action */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                textAlign: 'center',
                boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
              }}
            >
              {bottomCta.tag && (
                <div style={{ marginBottom: '1rem' }}>
                  <span className="flow-tag">
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#171916' }} />
                    {bottomCta.tag}
                  </span>
                </div>
              )}
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.05,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                {bottomCta.title}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  color: '#50534b',
                  maxWidth: '580px',
                  margin: '0 auto 2rem',
                }}
              >
                {bottomCta.desc}
              </p>
              <Link href={bottomCta.buttonHref || '/#contact'} className="btn-primary-lime">
                {bottomCta.buttonText} →
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Global FlowPilot Footer */}
      <Footer />

      {/* Discovery Call Modal */}
      <BookCallModal />
    </div>
  );
}

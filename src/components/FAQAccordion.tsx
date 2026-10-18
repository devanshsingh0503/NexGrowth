'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'What is the NexGrowth custom website development process?',
    a: 'Our process consists of 3 clear phases: Onboarding & Behavior Mapping (discovering your core value proposition and wireframing user flows), Core Engineering (building in Next.js 16 with zero bloat and accessible UI components), and Launch & Scale (Core Web Vitals tuning, technical SEO audits, and ongoing optimization).',
  },
  {
    q: 'Do you provide post-launch support and software maintenance?',
    a: 'Yes. The launch is day one, not the finish line. We provide ongoing support, 99.9% uptime monitoring, monthly security patches, dependency updates, and iterative feature improvements to keep your digital products performing at their highest level.',
  },
  {
    q: 'What B2B services does NexGrowth offer?',
    a: 'We offer custom website design and engineering, SaaS application development, customer portals, technical SEO audits, Google & Meta Ads management, and ongoing software maintenance.',
  },
  {
    q: 'How long does a custom SaaS web app take to build?',
    a: 'A typical custom MVP or corporate website takes 2 to 4 weeks, while complex full-stack web platforms and SaaS dashboards generally range from 4 to 8 weeks depending on database integrations, role-based workflows, and scope.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply fill out our brief contact form below or book a 15-minute discovery call. We will review your project requirements, outline an architectural plan, and provide a fixed-scope proposal within 24 hours.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

      if (listRef.current) {
        const items = listRef.current.children;
        gsap.fromTo(
          items,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
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
              FREQUENTLY ASKED
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
            A FEW GOOD QUESTIONS.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1.125rem',
              color: '#50534b',
              lineHeight: 1.6,
            }}
          >
            Got questions about timelines, technology, or engagement models? Here are answers to what clients ask us most often.
          </p>
        </div>

        {/* Accordion List */}
        <div
          ref={listRef}
          style={{
            maxWidth: '960px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid rgba(23, 25, 22, 0.08)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: isOpen ? '0 8px 24px rgba(23, 25, 22, 0.05)' : 'none',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '1.75rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    gap: '1.5rem',
                    cursor: 'pointer',
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#171916',
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.q}
                  </span>

                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? '#171916' : '#f4f2ea',
                      color: isOpen ? '#e5ff3d' : '#171916',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 2rem 2rem',
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '1rem',
                      lineHeight: 1.65,
                      color: '#50534b',
                      borderTop: '1px solid rgba(23, 25, 22, 0.04)',
                      paddingTop: '1.25rem',
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Project {
  name: string;
  category: string;
  desc: string;
  statBadge: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    name: 'Nation (Agentic Shopify)',
    category: 'AI & Agentic E-Commerce',
    desc: 'Autonomous agentic e-commerce platform that builds complete digital storefronts in 60s, manages supply chain fulfillment, and drives profitable AI ad campaigns across Meta and Google.',
    statBadge: '<60s Storefront Launch',
    tags: ['Agentic AI', 'Autonomous E-Com', 'Ryze Ad Engine', 'Next.js 16'],
    link: 'https://nation-demo-theta.vercel.app/',
  },
  {
    name: 'Procreate Dreams Studio',
    category: 'Creative Tech & Animation',
    desc: 'High-performance interactive web experience showcasing 2D animation tools, real-time rendering engine, fluid multitouch timelines, and multi-track audio-video editing capabilities.',
    statBadge: '60 FPS WebGL Motion',
    tags: ['Interactive 3D/Video', 'Animation Studio', 'Fluid Gestures', 'Next.js'],
    link: 'https://fiver-p-2.vercel.app/',
  },
  {
    name: 'Alchromatic Atelier',
    category: 'Luxury Art & Atelier',
    desc: 'Premier dark-aesthetic atelier destination for museum-grade fine art supplies, archival mineral pigments, Belgian linen canvases, and professional Huion 4K pen displays.',
    statBadge: '15,000+ Artists Served',
    tags: ['Curated Atelier', 'Archival Mediums', 'Dynamic Video Showcase', 'E-Commerce'],
    link: 'https://alchromatic-gjjw.vercel.app/',
  },
  {
    name: 'Phantom Brew',
    category: 'D2C Beverage & Cold Brew',
    desc: 'Bespoke D2C beverage brand experience featuring dark-mode editorial storytelling, hauntingly smooth product showcases, and interactive subscription ordering.',
    statBadge: '4.8★ Brand Rating',
    tags: ['D2C E-Commerce', 'Brand Storytelling', 'Framer / Next.js', 'Interactive Motion'],
    link: 'https://involved-onboarding-468782.framer.app/',
  },
  {
    name: 'Dashify Services',
    category: 'B2B & Logistics',
    desc: 'Enterprise business logistics management portal featuring real-time shipment tracking, vendor dashboard, and automated scheduling workflows.',
    statBadge: '100/100 Mobile Speed',
    tags: ['Next.js 16', 'Logistics Portal', 'API Integration', 'Tailwind CSS'],
    link: 'https://dashifyservices.in/',
  },
  {
    name: 'Morality Care',
    category: 'Healthcare & Wellness',
    desc: 'Compassionate clinical care platform featuring HIPAA-compliant patient intake, online appointment booking, and bilingual healthcare guides.',
    statBadge: '+140% Patient Bookings',
    tags: ['Healthcare Web', 'Patient Intake', 'Bilingual UI', 'SEO Architecture'],
    link: 'https://morality-care.vercel.app/',
  },
  {
    name: 'Ghadzi',
    category: 'Creative Agency',
    desc: 'Modern portfolio and digital design agency showcasing bespoke motion choreography, dynamic case studies, and editorial layouts.',
    statBadge: 'Awwwards Nominee',
    tags: ['GSAP Animations', 'Creative Portfolio', 'WebGL Showcase', 'Dark Mode'],
    link: 'https://www.ghadzi.com/',
  },
  {
    name: 'Rootspace',
    category: 'Property & Spaces',
    desc: 'Premium digital co-working marketplace platform enabling automated venue booking, tenant billing, and host property management.',
    statBadge: 'Real-Time Availability',
    tags: ['Real Estate Portal', 'Booking Engine', 'Interactive Maps', 'Next.js'],
    link: 'https://rootspacefinal-psi.vercel.app/',
  },
  {
    name: 'FitForge',
    category: 'Health & Fitness',
    desc: 'Interactive fitness center platform featuring online memberships, dynamic class schedules, trainer bookings, and athlete profiles.',
    statBadge: '3.2x Conversion Rate',
    tags: ['Membership System', 'Class Scheduler', 'High Conversion', 'Stripe Ready'],
    link: 'https://gymdemo-coral.vercel.app/',
  },
  {
    name: 'Apex Athletics',
    category: 'Fitness & Training',
    desc: 'High-impact athletic conditioning portal with custom workout plans, coach video reviews, and digital merchandise store.',
    statBadge: '<1.2s Page Speed',
    tags: ['Athlete Portal', 'Training Programs', 'Video Hub', 'Fast Loading'],
    link: 'https://gymdemo-1.vercel.app/',
  },
];

export default function PortfolioSection() {
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
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (gridRef.current) {
        const cards = Array.from(gridRef.current.children);
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );

        // Subtle alternating parallax depth shift on scroll for desktop screens
        const mm = gsap.matchMedia();
        mm.add('(min-width: 768px)', () => {
          cards.forEach((card, idx) => {
            const isAlternate = idx % 2 === 1;
            gsap.to(card, {
              y: isAlternate ? -20 : 20,
              ease: 'none',
              scrollTrigger: {
                trigger: gridRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.4,
              },
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      style={{
        backgroundColor: '#f4f2ea',
        padding: '6rem 0 8rem',
        position: 'relative',
      }}
    >
      <div className="flow-container">
        {/* Header */}
        <div ref={headerRef} style={{ maxWidth: '820px', marginBottom: '4rem' }}>
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
              SELECTED WORK &amp; CLIENTS
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
            GOOD WORK. REAL IMPACT.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1.125rem',
              color: '#171916',
              fontWeight: 450,
              lineHeight: 1.6,
            }}
          >
            Every product we engineer is tailored to real users, real operational workflows, and verified business performance. Explore our live builds below.
          </p>
        </div>

        {/* 10 Projects Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((proj, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(23, 25, 22, 0.08)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '380px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(23, 25, 22, 0.09)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Header row: category & metric badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#50534b',
                    }}
                  >
                    {proj.category}
                  </span>

                  <span
                    style={{
                      backgroundColor: 'rgba(229, 255, 61, 0.3)',
                      color: '#171916',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {proj.statBadge}
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.875rem',
                    lineHeight: 1.1,
                    fontWeight: 700,
                    color: '#171916',
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem',
                  }}
                >
                  {proj.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: '#282b26',
                    marginBottom: '1.5rem',
                  }}
                >
                  {proj.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        backgroundColor: '#f4f2ea',
                        color: '#171916',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Live Project link */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(23, 25, 22, 0.08)',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#171916',
                }}
              >
                <span>Visit Live Project</span>
                <span
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#171916',
                    color: '#e5ff3d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                  }}
                >
                  ↗
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

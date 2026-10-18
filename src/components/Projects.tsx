'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Project {
  name: string;
  cat: string;
  desc: string;
  link: string;
}

const projects: Project[] = [
  { 
    name: 'Ghadzi', 
    cat: 'Creative Agency', 
    desc: 'Modern portfolio and digital design agency showcasing bespoke motion and web designs.', 
    link: 'https://www.ghadzi.com/'
  },
  { 
    name: 'Rootspace', 
    cat: 'Property & Spaces', 
    desc: 'Premium digital portal for renting, hosting, and listing co-working spaces and venues.', 
    link: 'https://rootspacefinal-psi.vercel.app/'
  },
  { 
    name: 'FitForge', 
    cat: 'Health & Fitness', 
    desc: 'Interactive fitness center site with online memberships, class schedules, and trainer bookings.', 
    link: 'https://gymdemo-coral.vercel.app/'
  },
  { 
    name: 'Dashify Services', 
    cat: 'B2B & Logistics', 
    desc: 'Premium business services portal for logistics management, tracking, and operations.', 
    link: 'https://dashifyservices.in/'
  },
  { 
    name: 'Apex Athletics', 
    cat: 'Fitness & Training', 
    desc: 'High-impact athlete conditioning portal featuring training programs and coach consultations.', 
    link: 'https://gymdemo-1.vercel.app/'
  },
  { 
    name: 'Morality Care', 
    cat: 'Healthcare & Wellness', 
    desc: 'Compassionate clinical care portal for patient booking, wellness guides, and healthcare support.', 
    link: 'https://morality-care.vercel.app/'
  },
];

// Coordinate layout mappings inside a 1200x600 coordinate system
const cardCoords = [
  { x: 90,  y: 50  }, // Card 1: Top-Left
  { x: 50,  y: 230 }, // Card 2: Mid-Left
  { x: 90,  y: 410 }, // Card 3: Bottom-Left
  { x: 850, y: 50  }, // Card 4: Top-Right
  { x: 890, y: 230 }, // Card 5: Mid-Right
  { x: 850, y: 410 }, // Card 6: Bottom-Right
];

const pathDStrings = [
  'M 500 300 L 380 300 L 380 120 L 350 120', // Hub to Card 1
  'M 500 300 L 310 300',                     // Hub to Card 2
  'M 500 300 L 380 300 L 380 480 L 350 480', // Hub to Card 3
  'M 700 300 L 820 300 L 820 120 L 850 120', // Hub to Card 4
  'M 700 300 L 890 300',                     // Hub to Card 5
  'M 700 300 L 820 300 L 820 480 L 850 480', // Hub to Card 6
];

export default function Projects() {
  const wrapperRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(SVGPathElement | null)[]>([]);

  const setCardRef = (el: HTMLDivElement | null, idx: number) => { cardRefs.current[idx] = el; };
  const setLineRef = (el: SVGPathElement | null, idx: number) => { lineRefs.current[idx] = el; };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    const hub = hubRef.current;
    if (!wrapper || !container || !hub) return;

    const mm = gsap.matchMedia();

    // ── Desktop Scroll-pinned Architecture diagram ──
    mm.add("(min-width: 993px)", () => {
      // Set initial state
      gsap.set(cardRefs.current, { scale: 0.95, opacity: 0, x: 0, y: 0 });
      lineRefs.current.forEach(path => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.3,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ── 0–15%: Baseline view. Gentle breathing of the hub ──
      gsap.to(hub, {
        scale: 1.04,
        duration: 2.2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      // ── 15–35%: Connector lines draw & branch cards scale in ──
      lineRefs.current.forEach((path, idx) => {
        if (!path) return;
        tl.to(path, {
          strokeDashoffset: 0,
          ease: 'power2.inOut',
        }, 0.15 + (idx * 0.02));
      });

      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        tl.to(card, {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
        }, 0.22 + (idx * 0.02));
      });

      // ── 35–55%: Architecture expansion (cards move slightly outward) ──
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const isLeft = idx < 3;
        const offsetX = isLeft ? -15 : 15;
        tl.to(card, {
          x: offsetX,
          ease: 'power1.out',
        }, 0.35);
      });

      // ── 55–75%: Continuous Theme Interpolation (Light -> Dark) ──
      tl.to(wrapper, {
        backgroundColor: '#171916',
        ease: 'none',
      }, 0.55);

      tl.to(lineRefs.current, {
        stroke: '#e5ff3d',
        ease: 'none',
      }, 0.55);

      tl.to(hub, {
        borderColor: '#e5ff3d',
        backgroundColor: '#1d201c',
        boxShadow: '0 0 40px rgba(229, 255, 61, 0.25)',
        color: '#f4f2ea',
        ease: 'none',
      }, 0.55);

      // Animate header title text color
      const h2 = headerRef.current?.querySelector('h2');
      if (h2) {
        tl.to(h2, {
          color: '#f4f2ea',
          ease: 'none',
        }, 0.55);
      }
      const eyebrow = headerRef.current?.querySelector('span');
      if (eyebrow) {
        tl.to(eyebrow, {
          color: '#e5ff3d',
          ease: 'none',
        }, 0.55);
      }

      cardRefs.current.forEach((card) => {
        if (!card) return;
        tl.to(card, {
          backgroundColor: '#1d201c',
          borderColor: 'rgba(229, 255, 61, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          color: '#f4f2ea',
          ease: 'none',
        }, 0.55);

        const cardH3 = card.querySelector('h3');
        if (cardH3) {
          tl.to(cardH3, { color: '#f4f2ea', ease: 'none' }, 0.55);
        }
        const cardP = card.querySelector('p');
        if (cardP) {
          tl.to(cardP, { color: 'rgba(244, 242, 234, 0.7)', ease: 'none' }, 0.55);
        }
      });

      // ── 75–90%: Compression & final theme settling ──
      tl.to(container, {
        scale: 0.95,
        ease: 'power1.inOut',
      }, 0.75);

      cardRefs.current.forEach((card) => {
        if (!card) return;
        tl.to(card, {
          scale: 0.94,
          ease: 'power1.inOut',
        }, 0.75);
      });

      // ── 90–100%: Fade out for exit unpin transition ──
      tl.to(container, {
        opacity: 0,
        scale: 0.9,
        ease: 'power2.in',
      }, 0.9);

      // Micro-floating drift
      const floatTimelines = cardRefs.current.map((card, idx) => {
        if (!card) return null;
        return gsap.to(card, {
          y: '+=3',
          rotation: (idx % 2 === 0 ? 0.3 : -0.3),
          duration: 3 + (idx * 0.3),
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        floatTimelines.forEach(t => t?.kill());
      };
    });

    // ── Mobile Grid Fade-in ──
    mm.add("(max-width: 992px)", () => {
      gsap.set(cardRefs.current, { scale: 1, opacity: 1, x: 0, y: 0 });

      const mobileTriggers = cardRefs.current.map((card) => {
        if (!card) return null;
        return gsap.fromTo(card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      });

      return () => {
        mobileTriggers.forEach(t => t?.scrollTrigger?.kill());
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      id="portfolio"
      className="home-projects-wrapper"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        background: '#f4f2ea', // Warm cream background
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.5s ease',
      }}
    >
      {/* High-impact Section Header to highlight entrance */}
      <div 
        ref={headerRef} 
        className="home-projects-header" 
        style={{ 
          width: '100%', 
          maxWidth: '1200px', 
          margin: '0 auto 4rem auto', 
          padding: '0 2rem', 
          textAlign: 'center',
          zIndex: 5 
        }}
      >
        <span 
          style={{ 
            fontFamily: 'var(--font-inter), Inter, sans-serif', 
            fontSize: '0.85rem', 
            fontWeight: 600,
            letterSpacing: '0.14em', 
            textTransform: 'uppercase', 
            color: '#50534b', 
            display: 'block', 
            marginBottom: '1rem',
            transition: 'color 0.5s ease',
          }}
        >
          Projects Served // Portfolio
        </span>
        <h2 
          style={{ 
            fontFamily: 'var(--font-oswald), Oswald, sans-serif', 
            fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', 
            fontWeight: 700, 
            lineHeight: 1.15, 
            color: '#171916', 
            maxWidth: '900px',
            margin: '0 auto',
            transition: 'color 0.5s ease',
          }}
        >
          Bespoke engineering for high-growth brands.
        </h2>
      </div>

      {/* Centered Architecture Diagram Canvas */}
      <div
        ref={containerRef}
        className="home-projects-container"
        style={{
          position: 'relative',
          width: '1200px',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        {/* SVG Connector Lines Layer */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          {pathDStrings.map((d, i) => (
            <path
              key={i}
              ref={(el) => setLineRef(el, i)}
              d={d}
              fill="none"
              stroke="rgba(23, 25, 22, 0.2)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: 'stroke 0.5s ease' }}
            />
          ))}
        </svg>

        {/* Central Hub Card */}
        <div
          ref={hubRef}
          className="home-projects-hub"
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '2px solid #171916',
            background: '#ffffff',
            boxShadow: '0 8px 30px rgba(23, 25, 22, 0.08)',
            color: '#171916',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3,
            textAlign: 'center',
            padding: '1.5rem',
            transition: 'border-color 0.5s, background-color 0.5s, box-shadow 0.5s, color 0.5s',
          }}
        >
          <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-inter), Inter, monospace', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.65 }}>NexGrowth</span>
          <h4 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '0.5rem 0', fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}>Projects Served</h4>
          <span style={{ fontSize: '0.85rem', opacity: 0.65, fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Bespoke Engineering</span>
        </div>

        {/* Floating Project Nodes */}
        {projects.map((proj, i) => (
          <div
            key={i}
            ref={(el) => setCardRef(el, i)}
            className="architecture-node-card"
            style={{
              position: 'absolute',
              left: `${cardCoords[i].x}px`,
              top: `${cardCoords[i].y}px`,
              width: '260px',
              height: '140px',
              background: '#ffffff',
              border: '1px solid rgba(23, 25, 22, 0.08)',
              borderRadius: '16px',
              padding: '1.8rem',
              boxShadow: '0 8px 24px rgba(23, 25, 22, 0.06)',
              color: '#171916',
              zIndex: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'background-color 0.5s, border-color 0.5s, box-shadow 0.3s, transform 0.3s, color 0.5s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(23, 25, 22, 0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(23, 25, 22, 0.06)';
            }}
            onClick={() => window.open(proj.link, '_blank')}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  background: '#171916', 
                  color: '#e5ff3d', 
                  padding: '2px 8px', 
                  borderRadius: '4px', 
                  fontWeight: 600,
                  textTransform: 'uppercase', 
                  letterSpacing: '0.06em',
                  fontFamily: 'var(--font-inter), Inter, sans-serif'
                }}>
                  {proj.cat}
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0.6rem 0 0.3rem 0', fontFamily: 'var(--font-oswald), Oswald, sans-serif', color: '#171916', transition: 'color 0.5s' }}>
                {proj.name}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#50534b', lineHeight: '1.45', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontFamily: 'var(--font-inter), Inter, sans-serif', transition: 'color 0.5s' }}>
                {proj.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

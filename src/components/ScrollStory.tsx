'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Our Process — Circular Scroll Wheel
 * ─────────────────────────────────────
 * Layout:
 *   Left  (55%) — stacked content panels, one per step
 *   Right (45%) — SVG circular wheel that rotates 1:1 with scroll
 *
 * Mechanism:
 *   • Section is pinned for 8 × 120vh of scroll distance
 *   • GSAP scrub timeline drives ALL animation — no IntersectionObserver here
 *   • Wheel rotates –45° per step (360°/8), bringing the next dot to 12 o'clock
 *   • Each step's text panel fades out upward, next fades in upward
 *   • Step labels counter-rotate so they stay legible throughout
 *   • Active dot blooms with accent color + soft glow
 *   • Static "pointer" triangle sits at 12 o'clock outside the wheel
 *
 * Palette:
 *   Background  #410060   Text     #ECDDFC   Accent  #D778F8
 *
 * Fonts (loaded in layout.tsx):
 *   --font-space-grotesk  headlines
 *   --font-pt-serif       body copy
 *   monospace             badges / wheel labels
 */

const BG     = '#410060';
const FG     = '#ECDDFC';
const ACCENT = '#D778F8';
const DIM    = 'rgba(236,221,252,0.22)';
const N      = 8;
const RADIUS = 155; // wheel node radius in px
const WHEEL  = (RADIUS + 52) * 2; // overall wheel div size

const steps = [
  {
    num: '01',
    headline: 'Know Your Business',
    body: 'Before a single pixel moves, we go deep. A focused onboarding session surfaces your goals, constraints, and the edge that makes you worth noticing.',
  },
  {
    num: '02',
    headline: 'Study The Field',
    body: 'We map the competitive landscape, audit user behaviour, and identify the gaps your product can own — so you launch with a clear, informed advantage.',
  },
  {
    num: '03',
    headline: 'Map The Flow',
    body: 'Wireframes establish how users move, not just where they land. Every screen is intentional before a single visual decision is made.',
  },
  {
    num: '04',
    headline: 'Shape The Vision',
    body: 'Multiple design directions. One refined outcome. We iterate with you until every visual element earns its place.',
  },
  {
    num: '05',
    headline: 'Fill The Canvas',
    body: "Words and media are structured with the same care as the design itself. Content isn't an afterthought — it's half the product.",
  },
  {
    num: '06',
    headline: 'Build The Machine',
    body: 'Clean code, responsive layouts, optimised performance. We ship software that works exactly as designed, on every device.',
  },
  {
    num: '07',
    headline: 'Ship With Confidence',
    body: 'End-to-end testing, performance audits, and a structured launch sequence ensure you go live without surprises.',
  },
  {
    num: '08',
    headline: 'Sustain & Grow',
    body: "The launch is day one, not the finish line. Ongoing maintenance and monitoring keep your product sharp long after handoff.",
  },
];

/* Node positions around the wheel, starting at 12 o'clock, going clockwise */
const nodeAngles = steps.map((_, i) => (i * 2 * Math.PI) / N - Math.PI / 2);
const nodePositions = nodeAngles.map((a) => ({
  x: RADIUS * Math.cos(a),
  y: RADIUS * Math.sin(a),
}));

export default function ScrollStory() {
  /* ── Refs ── */
  const wrapperRef      = useRef<HTMLElement>(null);
  const wheelRef        = useRef<HTMLDivElement>(null);
  const contentRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs         = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs       = useRef<(HTMLDivElement | null)[]>([]);
  const stepCounterRef  = useRef<HTMLSpanElement>(null);
  const ambientGlowRef  = useRef<HTMLDivElement>(null);
  const leftContentRef  = useRef<HTMLDivElement>(null);

  const setContent = (el: HTMLDivElement | null, i: number) => { contentRefs.current[i] = el; };
  const setDot     = (el: HTMLDivElement | null, i: number) => { dotRefs.current[i]     = el; };
  const setLabel   = (el: HTMLDivElement | null, i: number) => { labelRefs.current[i]   = el; };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const wheel   = wheelRef.current;
    if (!wrapper || !wheel) return;

    /* ── Initial states ── */
    // All content panels hidden except first
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 28 });
    });

    // All dots dim except first (active)
    dotRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, {
        backgroundColor: i === 0 ? ACCENT : DIM,
        scale:           i === 0 ? 1.6    : 1,
        boxShadow:       i === 0 ? `0 0 18px 5px ${ACCENT}55` : 'none',
      });
    });

    // All labels dim except first
    labelRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0.3 });
    });

    // Hide ambient elements initially for ignition reveal
    if (ambientGlowRef.current) gsap.set(ambientGlowRef.current, { opacity: 0 });
    if (stepCounterRef.current) gsap.set(stepCounterRef.current, { opacity: 0 });

    // ── Setup 3D Depth Zoom-in Initial States ──
    gsap.set(wheel, { scale: 0.72, opacity: 0, transformOrigin: 'center center' });
    if (leftContentRef.current) {
      gsap.set(leftContentRef.current, { scale: 0.84, opacity: 0, transformOrigin: 'left center' });
    }

    /* ── Counter — updated via onUpdate ── */
    if (stepCounterRef.current) stepCounterRef.current.textContent = '01 / 08';

    // ── Neon light switch ignition & 3D Zoom-in (triggered once on section entry) ──
    const ignitionTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 75%',
        toggleActions: 'play none none none',
      }
    });

    ignitionTl
      .fromTo(wrapper,
        { backgroundColor: '#161008' }, // start from previous section's dark chocolate
        { backgroundColor: '#60058c', duration: 0.08, ease: 'none' } // quick flash to bright purple
      )
      .to(wrapper, {
        backgroundColor: BG, // settle to deep process purple
        duration: 0.55,
        ease: 'power2.out',
      })
      .fromTo([ambientGlowRef.current, stepCounterRef.current, dotRefs.current[0]],
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.06, 
          repeat: 3, 
          yoyo: true, 
          ease: 'none' 
        }, 
        0
      )
      .to([ambientGlowRef.current, stepCounterRef.current], {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      })
      .to(dotRefs.current[0], {
        opacity: 1,
        scale: 1.6,
        boxShadow: `0 0 18px 5px ${ACCENT}55`,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.4')
      // ── Zoom-in from back (3D Depth Transition) ──
      .to(wheel, {
        scale: 1,
        opacity: 1,
        duration: 0.95,
        ease: 'power3.out',
      }, 0.1)
      .to(leftContentRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.95,
        ease: 'power3.out',
      }, 0.1);

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start:   'top top',
          end:     `+=${N * 35}%`,
          pin:     true,
          pinSpacing: true,
          scrub:   0.3,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            /* Live step counter in center */
            const idx = Math.min(
              Math.floor(self.progress * N),
              N - 1
            );
            if (stepCounterRef.current) {
              stepCounterRef.current.textContent =
                `${String(idx + 1).padStart(2, '0')} / 0${N}`;
            }
          },
        },
        defaults: { ease: 'none' },
      });

      const seg = 1 / N;

      for (let i = 0; i < N - 1; i++) {
        const start = i * seg;
        const end   = (i + 1) * seg;

        /* ── Wheel rotation: -45° per step → next dot to 12 o'clock ── */
        tl.to(wheel, {
          rotate: `-=${360 / N}`,
          duration: seg,
          ease: 'power1.inOut',
        }, start);

        /* ── Counter-rotate ALL labels to keep them upright ── */
        tl.to(labelRefs.current, {
          rotate: `+=${360 / N}`,
          duration: seg,
          ease: 'power1.inOut',
        }, start);

        /* ── Exit current content ── */
        tl.to(contentRefs.current[i], {
          opacity: 0,
          y: -28,
          duration: seg * 0.28,
          ease: 'power2.in',
        }, start + seg * 0.45);

        /* ── Enter next content ── */
        tl.fromTo(
          contentRefs.current[i + 1],
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: seg * 0.32, ease: 'power2.out' },
          start + seg * 0.62
        );

        /* ── Deactivate current dot ── */
        tl.to(dotRefs.current[i], {
          backgroundColor: DIM,
          scale: 1,
          boxShadow: 'none',
          duration: seg * 0.25,
          ease: 'power2.in',
        }, start + seg * 0.5);

        /* ── Activate next dot ── */
        tl.to(dotRefs.current[i + 1], {
          backgroundColor: ACCENT,
          scale: 1.6,
          boxShadow: `0 0 18px 5px ${ACCENT}55`,
          duration: seg * 0.25,
          ease: 'power2.out',
        }, start + seg * 0.62);

        /* ── Label opacity: dim current, brighten next ── */
        tl.to(labelRefs.current[i], { opacity: 0.3, duration: seg * 0.25 }, start + seg * 0.5);
        tl.to(labelRefs.current[i + 1], { opacity: 1, duration: seg * 0.25 }, start + seg * 0.62);
      }

    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      id="process"
      style={{
        position:   'relative',
        height:     '100vh',
        background: BG,
        overflow:   'hidden',
      }}
    >
      {/* ── Ambient radial glow behind wheel ── */}
      <div
        ref={ambientGlowRef}
        aria-hidden
        style={{
          position:   'absolute',
          right:      '-5%',
          top:        '50%',
          transform:  'translateY(-50%)',
          width:      '55vw',
          height:     '55vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${ACCENT}18 0%, transparent 65%)`,
          pointerEvents: 'none',
          zIndex:     0,
        }}
      />

      {/* ── Two-column layout ── */}
      <div
        style={{
          position:      'relative',
          zIndex:        1,
          display:       'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          height:        '100%',
          maxWidth:      '1320px',
          margin:        '0 auto',
          padding:       '0 5rem',
          gap:           '3rem',
          alignItems:    'center',
        }}
      >
        {/* ════════════════════ LEFT: Content ════════════════════ */}
        <div ref={leftContentRef} style={{ width: '100%' }}>
          {/* Section eyebrow */}
          <p
            style={{
              fontFamily:    'monospace, monospace',
              fontSize:      '1.15rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         ACCENT,
              marginBottom:  '2.5rem',
            }}
          >
            Our Process
          </p>

          {/* Premium Card Container */}
          <div style={{
            background: '#f7f0fd',
            border: '1px solid rgba(65, 0, 96, 0.12)',
            borderRadius: '32px',
            padding: '4.5rem',
            boxShadow: '0 20px 80px rgba(0, 0, 0, 0.25)',
            minHeight: '420px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => setContent(el, i)}
                style={{
                  position:      i === 0 ? 'relative' : 'absolute',
                  top:           '4.5rem',
                  left:          '4.5rem',
                  right:         '4.5rem',
                  willChange:    'transform, opacity',
                }}
              >
                {/* Badge */}
                <div
                  style={{
                    display:       'inline-block',
                    fontFamily:    'monospace, monospace',
                    fontSize:      '1.2rem',
                    letterSpacing: '0.06em',
                    color:         '#410060',
                    border:        '1px solid rgba(65, 0, 96, 0.15)',
                    background:    'rgba(65, 0, 96, 0.05)',
                    borderRadius:  '6px',
                    padding:       '4px 12px',
                    marginBottom:  '2.4rem',
                  }}
                >
                  Step {step.num}
                </div>

                {/* Headline */}
                <h2
                  style={{
                    fontFamily:    'var(--font-space-grotesk), "Space Grotesk", system-ui, sans-serif',
                    fontWeight:    700,
                    fontSize:      'clamp(2.8rem, 4vw, 4.2rem)',
                    lineHeight:    1.08,
                    letterSpacing: '-0.02em',
                    color:         '#410060',
                    marginBottom:  '2.4rem',
                  }}
                >
                  {step.headline}
                </h2>

                {/* Body */}
                <p
                  style={{
                    fontFamily:    'var(--font-pt-serif), "PT Serif", Georgia, serif',
                    fontWeight:    400,
                    fontSize:      '1.75rem',
                    lineHeight:    1.6,
                    color:         'rgba(65, 0, 96, 0.75)',
                    maxWidth:      '100%',
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════ RIGHT: Circular Wheel ════════════════════ */}
        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            position:       'relative',
          }}
        >
          {/* Fixed 12 o'clock pointer triangle */}
          <div
            aria-hidden
            style={{
              position:  'absolute',
              top:       `calc(50% - ${WHEEL / 2 + 18}px)`,
              left:      '50%',
              transform: 'translateX(-50%)',
              width:     0,
              height:    0,
              borderLeft:  '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop:   `10px solid ${ACCENT}`,
              zIndex:    10,
            }}
          />

          {/* Wheel container (this div ROTATES) */}
          <div
            ref={wheelRef}
            style={{
              position:        'relative',
              width:           `${WHEEL}px`,
              height:          `${WHEEL}px`,
              transformOrigin: 'center center',
              willChange:      'transform',
            }}
          >
            {/* Outer ring */}
            <div
              aria-hidden
              style={{
                position:     'absolute',
                inset:        '26px',
                border:       `1px solid rgba(236,221,252,0.10)`,
                borderRadius: '50%',
              }}
            />
            {/* Secondary inner ring */}
            <div
              aria-hidden
              style={{
                position:     'absolute',
                inset:        '60px',
                border:       `1px solid rgba(236,221,252,0.06)`,
                borderRadius: '50%',
              }}
            />

            {/* Spoke lines from center to each node */}
            {nodePositions.map((pos, i) => {
              const angleDeg = (i * 360) / N;
              return (
                <div
                  key={i}
                  aria-hidden
                  style={{
                    position:        'absolute',
                    top:             '50%',
                    left:            '50%',
                    width:           `${RADIUS}px`,
                    height:          '1px',
                    background:      `rgba(236,221,252,0.06)`,
                    transformOrigin: '0 50%',
                    transform:       `rotate(${angleDeg}deg)`,
                  }}
                />
              );
            })}

            {/* 8 Nodes */}
            {nodePositions.map((pos, i) => (
              <div
                key={i}
                style={{
                  position:  'absolute',
                  left:      `calc(50% + ${pos.x}px)`,
                  top:       `calc(50% + ${pos.y}px)`,
                  transform: 'translate(-50%, -50%)',
                  display:   'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap:       '10px',
                }}
              >
                {/* Dot */}
                <div
                  ref={(el) => setDot(el, i)}
                  style={{
                    width:        i === 0 ? '18px' : '11px',
                    height:       i === 0 ? '18px' : '11px',
                    borderRadius: '50%',
                    background:   i === 0 ? ACCENT : DIM,
                    boxShadow:    i === 0 ? `0 0 18px 5px ${ACCENT}55` : 'none',
                    flexShrink:   0,
                    willChange:   'transform, background-color',
                  }}
                />

                {/* Label wrapper — counter-rotates to stay upright */}
                <div
                  ref={(el) => setLabel(el, i)}
                  style={{
                    fontFamily:    'monospace, monospace',
                    fontSize:      '1.05rem',
                    letterSpacing: '0.04em',
                    color:         i === 0 ? FG : `rgba(236,221,252,0.3)`,
                    opacity:       i === 0 ? 1 : 0.3,
                    transformOrigin: 'center center',
                    willChange:    'transform, opacity',
                    userSelect:    'none',
                    whiteSpace:    'nowrap',
                  }}
                >
                  {steps[i].num}
                </div>
              </div>
            ))}

            {/* Center step counter */}
            <div
              style={{
                position:        'absolute',
                top:             '50%',
                left:            '50%',
                transform:       'translate(-50%, -50%)',
                display:         'flex',
                flexDirection:   'column',
                alignItems:      'center',
                justifyContent:  'center',
                textAlign:       'center',
                pointerEvents:   'none',
              }}
            >
              {/* Center dot */}
              <div
                style={{
                  width:        '8px',
                  height:       '8px',
                  borderRadius: '50%',
                  background:   FG,
                  marginBottom: '10px',
                  opacity:      0.5,
                }}
              />
              {/* Live counter — updated by onUpdate */}
              <span
                ref={stepCounterRef}
                style={{
                  fontFamily:    'monospace, monospace',
                  fontSize:      '1.1rem',
                  letterSpacing: '0.08em',
                  color:         `rgba(236,221,252,0.45)`,
                }}
              >
                01 / 08
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

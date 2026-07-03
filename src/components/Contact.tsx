'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ACCENT  = 'var(--current-color-40)';
const DIM     = 'rgba(255,255,255,0.06)';

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function Contact() {
  const ref        = useRef<HTMLElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused,   setFocused]   = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const els = ref.current?.querySelectorAll('.anim-in');
    if (!els) return;
    gsap.fromTo([...els],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.13, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' } });

    // Animate decorative rule line
    if (lineRef.current) {
      gsap.fromTo(lineRef.current, { scaleX: 0 }, {
        scaleX: 1, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    background: focused === field ? 'rgba(255,119,168,0.04)' : 'rgba(255,255,255,0.025)',
    border: `1px solid ${focused === field ? 'rgba(255,119,168,0.4)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '10px',
    padding: '1.3rem 1.4rem',
    color: '#fff',
    fontSize: '1.5rem',
    outline: 'none',
    transition: 'all 0.25s ease',
    fontFamily: 'GT-Planar, Inter, sans-serif',
    width: '100%',
    boxSizing: 'border-box' as const,
  });

  const labelStyle: React.CSSProperties = {
    fontSize: '1.05rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'rgba(255,255,255,0.35)',
    fontFamily: 'ABCReproMono, monospace',
  };

  const trustItems = [
    'Response within 24 hours',
    'NDA available on request',
    'No retainer required',
    'Fixed-scope pricing',
  ];

  return (
    <section
      ref={ref}
      className="home__early-access"
      id="contact"
      style={{
        padding: '12rem 0 14rem',
        position: 'relative',
        overflow: 'hidden',
        background: '#161008',
      }}
    >
      {/* Top feather — blends architecture into contact */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '12rem',
        background: 'linear-gradient(to bottom, #161008 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />
      {/* Bottom feather — blends into footer */}
      <div aria-hidden style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '12rem',
        background: 'linear-gradient(to top, #161008 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>

        {/* ─── Section header ──────────────────────────────────────── */}
        <div className="anim-in" style={{ marginBottom: '2rem' }}>
          <p style={{
            fontFamily: 'ABCReproMono, monospace',
            fontSize: '1.15rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: ACCENT,
            marginBottom: '2.5rem',
          }}>
            Get In Touch
          </p>
          <h2 style={{
            fontSize: 'clamp(3.2rem, 5.5vw, 5.8rem)',
            fontWeight: 700,
            fontFamily: 'GT-Planar, Inter, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: 1.04,
            color: '#fff',
            maxWidth: '820px',
            marginBottom: '2.4rem',
          }}>
            Let's build something<br />
            <span style={{ color: ACCENT }}>extraordinary together.</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.48)',
            fontSize: 'clamp(1.5rem, 1.8vw, 1.85rem)',
            lineHeight: 1.65,
            maxWidth: '540px',
            fontWeight: 300,
            fontFamily: 'GT-Planar, Inter, sans-serif',
          }}>
            Whether you're starting from scratch or scaling an existing product — we'd love to hear your vision.
          </p>
        </div>

        {/* Decorative horizontal rule */}
        <div
          ref={lineRef}
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(255,119,168,0.4), rgba(255,255,255,0.06) 60%, transparent)',
            marginBottom: '6rem',
            transformOrigin: 'left center',
          }}
        />

        {/* Trust row */}
        <div className="anim-in" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.4rem 3.5rem',
          marginBottom: '7rem',
          alignItems: 'center',
        }}>
          {trustItems.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1.35rem',
              fontFamily: 'GT-Planar, sans-serif',
            }}>
              <span style={{ color: ACCENT, display: 'flex' }}><CheckIcon /></span>
              {item}
            </div>
          ))}
        </div>

        {/* ─── Two-column grid ─────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2.8rem',
          alignItems: 'start',
        }}>

          {/* ── Discovery Call Card ───────────────────────────────── */}
          <div className="anim-in" style={{
            background: 'rgba(255,119,168,0.04)',
            border: '1px solid rgba(255,119,168,0.14)',
            borderRadius: '24px',
            padding: '4.5rem 4rem',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: '3.2rem',
            height: '100%',
          }}>
            {/* Top accent line */}
            <div style={{
              position: 'absolute', top: 0, left: '4rem', right: '4rem',
              height: '2px',
              background: 'linear-gradient(to right, rgba(255,119,168,0.6), transparent)',
            }} />

            {/* Icon */}
            <div style={{
              width: '52px', height: '52px',
              borderRadius: '14px',
              background: 'rgba(255,119,168,0.08)',
              border: '1px solid rgba(255,119,168,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: ACCENT,
            }}>
              <CalendarIcon />
            </div>

            <div>
              <h3 style={{
                fontSize: '2.4rem',
                fontWeight: 700,
                fontFamily: 'GT-Planar, Inter, sans-serif',
                letterSpacing: '-0.025em',
                color: '#fff',
                marginBottom: '1.4rem',
              }}>
                Schedule a Discovery Call
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.48)',
                lineHeight: 1.7,
                fontSize: '1.5rem',
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}>
                Book a free 30-minute strategy session. We'll review your project, map out your goals, and walk you through how NexGrowth can accelerate your growth.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.4rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'GT-Planar, Inter, sans-serif', marginTop: '1.5rem' }}>
                <span>Or call directly:</span>
                <a href="tel:+918052731617" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600, transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.8'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  +91 8052731617
                </a>
              </div>
            </div>

            {/* Feature list */}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                'Project scope & feasibility review',
                'Custom strategy recommendations',
                'Transparent, fixed-scope pricing',
              ].map((item, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '1.1rem',
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '1.45rem',
                  fontFamily: 'GT-Planar, sans-serif',
                }}>
                  <span style={{ color: ACCENT, flexShrink: 0, display: 'flex' }}><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://calendly.com/nexgrowth"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '1rem',
                background: ACCENT,
                color: '#fff',
                borderRadius: '10px',
                padding: '1.4rem 2.6rem',
                fontFamily: 'GT-Planar, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'opacity 0.22s, transform 0.22s',
                width: 'fit-content',
                marginTop: 'auto',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.82'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              Book a Discovery Call <ArrowRight />
            </a>
          </div>

          {/* ── Quote Request Form ────────────────────────────────── */}
          <div className="anim-in" style={{
            background: DIM,
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '24px',
            padding: '4.5rem 4rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Top accent line */}
            <div style={{
              position: 'absolute', top: 0, left: '4rem', right: '4rem',
              height: '2px',
              background: 'linear-gradient(to right, rgba(255,255,255,0.15), transparent)',
            }} />

            {/* Icon + Title */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '2.4rem',
              }}>
                <MessageIcon />
              </div>
              <h3 style={{
                fontSize: '2.4rem',
                fontWeight: 700,
                fontFamily: 'GT-Planar, Inter, sans-serif',
                letterSpacing: '-0.025em',
                color: '#fff',
                marginBottom: '1rem',
              }}>
                Request A Quote
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.42)',
                fontSize: '1.45rem',
                lineHeight: 1.65,
                fontWeight: 300,
              }}>
                Complete the form and we'll respond within one business day with a tailored proposal.
              </p>
            </div>

            {submitted ? (
              <div style={{
                padding: '4.5rem 2rem',
                textAlign: 'center',
                background: 'rgba(255,119,168,0.04)',
                border: '1px solid rgba(255,119,168,0.14)',
                borderRadius: '14px',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'rgba(255,119,168,0.1)',
                  border: '1px solid rgba(255,119,168,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: ACCENT, margin: '0 auto 2rem',
                }}>
                  <CheckIcon />
                </div>
                <p style={{ color: '#fff', fontSize: '2rem', fontWeight: 700, marginBottom: '0.8rem', fontFamily: 'GT-Planar, sans-serif' }}>Message Received</p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.45rem', fontFamily: 'GT-Planar, sans-serif' }}>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.6rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <label htmlFor="contact-name" style={labelStyle}>Full Name</label>
                    <input
                      id="contact-name" type="text" placeholder="Jane Smith" required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('name')}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <label htmlFor="contact-email" style={labelStyle}>Email Address</label>
                    <input
                      id="contact-email" type="email" placeholder="jane@company.com" required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('email')}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <label htmlFor="contact-project" style={labelStyle}>Service Needed</label>
                  <select
                    id="contact-project" required
                    value={form.projectType}
                    onChange={e => setForm({ ...form, projectType: e.target.value })}
                    onFocus={() => setFocused('project')}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle('project'),
                      color: form.projectType ? '#fff' : 'rgba(255,255,255,0.28)',
                      cursor: 'pointer',
                      background: focused === 'project' ? 'rgba(255,119,168,0.04)' : 'rgba(20,14,28,0.95)',
                    }}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="website">Website Design &amp; Development</option>
                    <option value="webapp">Web Application Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="seo">Search Engine Optimisation</option>
                    <option value="ads">Google &amp; Meta Ads</option>
                    <option value="smm">Social Media Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <label htmlFor="contact-message" style={labelStyle}>Project Brief</label>
                  <textarea
                    id="contact-message"
                    placeholder="Describe your goals, timeline, and any specific requirements…"
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle('message'),
                      resize: 'vertical',
                      minHeight: '130px',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '1rem',
                    background: ACCENT,
                    border: 'none',
                    borderRadius: '10px',
                    padding: '1.5rem 3rem',
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    fontFamily: 'GT-Planar, sans-serif',
                    cursor: 'pointer',
                    transition: 'opacity 0.22s, transform 0.22s',
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.82'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                >
                  Send Request <ArrowRight />
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

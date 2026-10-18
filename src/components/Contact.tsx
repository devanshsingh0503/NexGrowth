'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ACCENT = '#e5ff3d';

export default function Contact() {
  const ref        = useRef<HTMLElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused,   setFocused]   = useState<string | null>(null);

  // States for Quick Call Booking Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const els = ref.current?.querySelectorAll('.anim-in');
    if (!els || els.length === 0) return;

    gsap.fromTo(
      [...els],
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.0, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' } 
      }
    );

    // Animate decorative rule line
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current, 
        { scaleX: 0 }, 
        {
          scaleX: 1, 
          duration: 1.4, 
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit proposal.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitting(true);
    setBookingError(null);

    try {
      const res = await fetch('/api/book-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: bookingPhone }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit request.');
      }

      setBookingSubmitted(true);
      setBookingPhone('');
    } catch (err: any) {
      setBookingError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setBookingSubmitting(false);
    }
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    background: focused === field ? 'rgba(244, 242, 234, 0.05)' : 'rgba(244, 242, 234, 0.02)',
    border: `1px solid ${focused === field ? ACCENT : 'rgba(244, 242, 234, 0.12)'}`,
    borderRadius: '12px',
    padding: '1.2rem 1.4rem',
    color: '#f4f2ea',
    fontSize: '1.35rem',
    outline: 'none',
    transition: 'all 0.25s ease',
    fontFamily: 'var(--font-inter), Inter, sans-serif',
    width: '100%',
    boxSizing: 'border-box' as const,
  });

  const labelStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'rgba(244, 242, 234, 0.55)',
    fontFamily: 'var(--font-inter), Inter, sans-serif',
    fontWeight: 600,
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
        padding: '10rem 0 12rem',
        position: 'relative',
        overflow: 'hidden',
        background: '#171916',
      }}
    >
      {/* Top feather — blends architecture into contact */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '10rem',
        background: 'linear-gradient(to bottom, #171916 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />
      {/* Bottom feather — blends into footer */}
      <div aria-hidden style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '10rem',
        background: 'linear-gradient(to top, #171916 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>

        {/* ─── Section header ──────────────────────────────────────── */}
        <div className="anim-in" style={{ marginBottom: '2.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontSize: '0.85rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: ACCENT,
            display: 'block',
            marginBottom: '1.2rem',
            fontWeight: 600,
          }}>
            Get In Touch
          </span>
          <h2 style={{
            fontSize: 'clamp(2.8rem, 5vw, 5rem)',
            fontWeight: 700,
            fontFamily: 'var(--font-oswald), Oswald, sans-serif',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#f4f2ea',
            maxWidth: '840px',
            marginBottom: '1.8rem',
          }}>
            Let's build something<br />
            <span style={{ color: ACCENT }}>extraordinary together.</span>
          </h2>
          <p style={{
            color: 'rgba(244, 242, 234, 0.65)',
            fontSize: 'clamp(1.25rem, 1.6vw, 1.6rem)',
            lineHeight: 1.6,
            maxWidth: '560px',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
          }}>
            Whether you're starting from scratch or scaling an existing product — we'd love to hear your vision.
          </p>
        </div>

        {/* Decorative horizontal rule */}
        <div
          ref={lineRef}
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(229,255,61,0.4), rgba(244,242,234,0.08) 60%, transparent)',
            marginBottom: '4.5rem',
            transformOrigin: 'left center',
          }}
        />

        {/* Trust row */}
        <div className="anim-in" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem 2rem',
          marginBottom: '5rem',
          alignItems: 'center',
          color: 'rgba(244, 242, 234, 0.55)',
          fontSize: '1.15rem',
          fontFamily: 'var(--font-inter), Inter, sans-serif',
        }}>
          {trustItems.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <span>{item}</span>
              {i < trustItems.length - 1 && <span style={{ color: 'rgba(244, 242, 234, 0.15)' }}>//</span>}
            </span>
          ))}
        </div>

        {/* ─── Two-column grid ─────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'stretch',
        }}>

          {/* ── Direct Channels Column ─────────────────────────────── */}
          <div className="anim-in" style={{
            background: '#1d201c',
            border: '1px solid rgba(244, 242, 234, 0.10)',
            borderRadius: '24px',
            padding: '4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '3rem',
            boxSizing: 'border-box',
            boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
          }}>
            <div>
              <span style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: ACCENT,
                display: 'block',
                marginBottom: '1rem',
                fontWeight: 600,
              }}>
                Direct Channels // Let's talk
              </span>
              <h3 style={{
                fontSize: '2.4rem',
                fontWeight: 700,
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                color: '#f4f2ea',
                marginBottom: '1.2rem',
              }}>
                Speak with us.
              </h3>
              <p style={{
                color: 'rgba(244, 242, 234, 0.65)',
                lineHeight: 1.6,
                fontSize: '1.35rem',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                marginBottom: '2.5rem',
              }}>
                Ready to outline your goals? Book a free 30-minute strategy call directly into our calendar, or reach out to us at our direct contact channels.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(244, 242, 234, 0.45)', fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Direct Line</span>
                  <a href="tel:+918052731617" style={{ fontSize: '1.6rem', color: '#f4f2ea', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s', fontFamily: 'var(--font-inter), Inter, sans-serif' }} onMouseEnter={e => e.currentTarget.style.color = ACCENT} onMouseLeave={e => e.currentTarget.style.color = '#f4f2ea'}>
                    +91 8052731617
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(244, 242, 234, 0.45)', fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Email Address</span>
                  <a href="mailto:devanshnexgrowth@gmail.com" style={{ fontSize: '1.6rem', color: '#f4f2ea', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s', fontFamily: 'var(--font-inter), Inter, sans-serif' }} onMouseEnter={e => e.currentTarget.style.color = ACCENT} onMouseLeave={e => e.currentTarget.style.color = '#f4f2ea'}>
                    devanshnexgrowth@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(244, 242, 234, 0.08)', paddingTop: '2.2rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f4f2ea', marginBottom: '1.2rem', fontFamily: 'var(--font-inter), Inter, sans-serif' }}>On the call:</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'Project scope & feasibility review',
                  'Custom strategy recommendations',
                  'Transparent, fixed-scope pricing',
                ].map((item, i) => (
                  <li key={i} style={{
                    color: 'rgba(244, 242, 234, 0.7)',
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}>
                    <span style={{ color: ACCENT, fontWeight: 'bold' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setBookingSubmitted(false);
                  setBookingError(null);
                  setBookingPhone('');
                }}
                style={{
                  display: 'inline-block',
                  background: ACCENT,
                  color: '#171916',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '1.2rem 2.8rem',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: 'fit-content',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(229, 255, 61, 0.25)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(229, 255, 61, 0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(229, 255, 61, 0.25)'; }}
              >
                Book a Discovery Call
              </button>
            </div>
          </div>

          {/* ── Quote Request Column ───────────────────────────────── */}
          <div className="anim-in" style={{
            background: '#1d201c',
            border: '1px solid rgba(244, 242, 234, 0.10)',
            borderRadius: '24px',
            padding: '4rem',
            boxSizing: 'border-box',
            boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
          }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: ACCENT,
                display: 'block',
                marginBottom: '1rem',
                fontWeight: 600,
              }}>
                Proposal Request // Tailored proposal
              </span>
              <h3 style={{
                fontSize: '2.4rem',
                fontWeight: 700,
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                color: '#f4f2ea',
                marginBottom: '1.2rem',
              }}>
                Request a quote.
              </h3>
              <p style={{
                color: 'rgba(244, 242, 234, 0.65)',
                fontSize: '1.35rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-inter), Inter, sans-serif',
              }}>
                Share your project brief below and we'll respond within one business day with a customized plan.
              </p>
            </div>

            {submitted ? (
              <div style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                background: 'rgba(229, 255, 61, 0.05)',
                border: '1px solid rgba(229, 255, 61, 0.25)',
                borderRadius: '16px',
              }}>
                <p style={{ color: '#f4f2ea', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.8rem', fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}>Request Received</p>
                <p style={{ color: 'rgba(244, 242, 234, 0.7)', fontSize: '1.35rem', fontFamily: 'var(--font-inter), Inter, sans-serif' }}>We will get in touch with you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <label htmlFor="contact-project" style={labelStyle}>Service Needed</label>
                  <select
                    id="contact-project" required
                    value={form.projectType}
                    onChange={e => setForm({ ...form, projectType: e.target.value })}
                    onFocus={() => setFocused('project')}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle('project'),
                      color: form.projectType ? '#f4f2ea' : 'rgba(244, 242, 234, 0.35)',
                      cursor: 'pointer',
                      background: '#171916',
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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
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
                      minHeight: '120px',
                    }}
                  />
                </div>

                {error && (
                  <p style={{ color: '#ff6b6b', fontSize: '1.3rem', fontFamily: 'var(--font-inter), Inter, sans-serif', margin: '0 0 1rem 0' }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    display: 'inline-block',
                    background: submitting ? '#666666' : ACCENT,
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '1.25rem 2.8rem',
                    color: '#171916',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    width: 'fit-content',
                    marginTop: '0.5rem',
                    boxShadow: submitting ? 'none' : '0 4px 20px rgba(229, 255, 61, 0.25)',
                    opacity: submitting ? 0.7 : 1,
                  }}
                  onMouseEnter={e => {
                    if (!submitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(229, 255, 61, 0.4)';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(229, 255, 61, 0.25)';
                  }}
                >
                  {submitting ? 'Sending...' : 'Send Proposal'}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>

      {/* ─── Discovery Call Modal Overlay ───────────────────────── */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(10, 12, 10, 0.85)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '2rem',
        }}>
          <style>{`
            @keyframes modalSlideIn {
              from {
                opacity: 0;
                transform: translateY(20px) scale(0.96);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>
          {/* Modal box */}
          <div style={{
            background: '#171916',
            border: '1px solid rgba(229, 255, 61, 0.25)',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '460px',
            padding: '3.5rem',
            position: 'relative',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)',
            animation: 'modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}>
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'rgba(244, 242, 234, 0.5)',
                fontSize: '2rem',
                cursor: 'pointer',
                transition: 'color 0.2s',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#f4f2ea'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(244, 242, 234, 0.5)'}
            >
              &times;
            </button>

            {bookingSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(229, 255, 61, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  border: '1px solid rgba(229, 255, 61, 0.3)',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  color: '#f4f2ea',
                  fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                  fontWeight: 700,
                  marginBottom: '1rem',
                }}>
                  Call Request Received
                </h3>
                <p style={{
                  color: 'rgba(244, 242, 234, 0.7)',
                  fontSize: '1.35rem',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  lineHeight: 1.5,
                  marginBottom: '2.5rem',
                }}>
                  Thank you! We will call you back at your provided number shortly to schedule our call.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: ACCENT,
                    color: '#171916',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '1rem 2.5rem',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 16px rgba(229, 255, 61, 0.25)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <span style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  display: 'block',
                  marginBottom: '0.8rem',
                  fontWeight: 600,
                }}>
                  Quick Booking
                </span>
                <h3 style={{
                  fontSize: '2.2rem',
                  color: '#f4f2ea',
                  fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                  fontWeight: 700,
                  marginBottom: '1.2rem',
                  lineHeight: 1.2,
                }}>
                  Book a Discovery Call
                </h3>
                <p style={{
                  color: 'rgba(244, 242, 234, 0.65)',
                  fontSize: '1.35rem',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  lineHeight: 1.5,
                  marginBottom: '2.5rem',
                }}>
                  Enter your contact number below, and our team will call you within 24 hours to schedule your strategy session.
                </p>

                <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <label htmlFor="booking-phone" style={labelStyle}>Contact Number</label>
                    <input
                      id="booking-phone"
                      type="tel"
                      placeholder="+91 99999 99999"
                      required
                      disabled={bookingSubmitting}
                      value={bookingPhone}
                      onChange={e => setBookingPhone(e.target.value)}
                      style={inputStyle('booking-phone')}
                    />
                  </div>

                  {bookingError && (
                    <p style={{ color: '#ff6b6b', fontSize: '1.3rem', fontFamily: 'var(--font-inter), Inter, sans-serif', margin: '0' }}>
                      {bookingError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={bookingSubmitting}
                    style={{
                      background: bookingSubmitting ? '#666666' : ACCENT,
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '1.25rem 2.8rem',
                      color: '#171916',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      cursor: bookingSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      width: '100%',
                      textAlign: 'center',
                      boxShadow: bookingSubmitting ? 'none' : '0 4px 20px rgba(229, 255, 61, 0.25)',
                      opacity: bookingSubmitting ? 0.7 : 1,
                    }}
                    onMouseEnter={e => {
                      if (!bookingSubmitting) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(229, 255, 61, 0.4)';
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(229, 255, 61, 0.25)';
                    }}
                  >
                    {bookingSubmitting ? 'Sending Request...' : 'Send Call Request'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

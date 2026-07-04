'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ACCENT  = 'var(--current-color-40)';
const DIM     = 'rgba(255,255,255,0.02)';

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
    if (!els) return;
    gsap.fromTo([...els],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' } });

    // Animate decorative rule line
    if (lineRef.current) {
      gsap.fromTo(lineRef.current, { scaleX: 0 }, {
        scaleX: 1, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
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
    background: focused === field ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.015)',
    border: `1px solid ${focused === field ? 'rgba(255,119,168,0.3)' : 'rgba(255,255,255,0.06)'}`,
    borderRadius: '12px',
    padding: '1.2rem 1.4rem',
    color: '#fff',
    fontSize: '1.35rem',
    outline: 'none',
    transition: 'all 0.25s ease',
    fontFamily: 'GT-Planar, Inter, sans-serif',
    width: '100%',
    boxSizing: 'border-box' as const,
  });

  const labelStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'rgba(255,255,255,0.35)',
    fontFamily: 'GT-Planar, Inter, sans-serif',
    fontWeight: 500,
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
        background: '#161008',
      }}
    >
      {/* Top feather — blends architecture into contact */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '10rem',
        background: 'linear-gradient(to bottom, #161008 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />
      {/* Bottom feather — blends into footer */}
      <div aria-hidden style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '10rem',
        background: 'linear-gradient(to top, #161008 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>

        {/* ─── Section header ──────────────────────────────────────── */}
        <div className="anim-in" style={{ marginBottom: '2.5rem' }}>
          <span style={{
            fontFamily: 'GT-Planar, Inter, sans-serif',
            fontSize: '1.05rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: ACCENT,
            display: 'block',
            marginBottom: '1.5rem',
            fontWeight: 600,
          }}>
            Get In Touch
          </span>
          <h2 style={{
            fontSize: 'clamp(2.8rem, 5vw, 5.2rem)',
            fontWeight: 700,
            fontFamily: 'GT-Planar, Inter, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#fff',
            maxWidth: '820px',
            marginBottom: '2rem',
          }}>
            Let's build something<br />
            <span style={{ color: ACCENT }}>extraordinary together.</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.48)',
            fontSize: 'clamp(1.3rem, 1.6vw, 1.65rem)',
            lineHeight: 1.6,
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
            background: 'linear-gradient(to right, rgba(255,119,168,0.25), rgba(255,255,255,0.04) 60%, transparent)',
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
          color: 'rgba(255,255,255,0.4)',
          fontSize: '1.2rem',
          fontFamily: 'GT-Planar, Inter, sans-serif',
        }}>
          {trustItems.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <span>{item}</span>
              {i < trustItems.length - 1 && <span style={{ color: 'rgba(255,255,255,0.12)' }}>//</span>}
            </span>
          ))}
        </div>

        {/* ─── Two-column grid ─────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* ── Direct Channels Column ─────────────────────────────── */}
          <div className="anim-in" style={{
            background: 'rgba(255,255,255,0.015)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '24px',
            padding: '4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            height: '100%',
            boxSizing: 'border-box',
          }}>
            <div>
              <span style={{
                fontFamily: 'GT-Planar, Inter, sans-serif',
                fontSize: '0.95rem',
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
                fontSize: '2.2rem',
                fontWeight: 700,
                fontFamily: 'GT-Planar, Inter, sans-serif',
                letterSpacing: '-0.02em',
                color: '#fff',
                marginBottom: '1.5rem',
              }}>
                Speak with us.
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.65,
                fontSize: '1.4rem',
                fontWeight: 300,
                marginBottom: '2rem',
              }}>
                Ready to outline your goals? Book a free 30-minute strategy call directly into our calendar, or reach out to us at our direct contact channels.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '2.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)' }}>Direct Line</span>
                  <a href="tel:+918052731617" style={{ fontSize: '1.6rem', color: '#fff', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = ACCENT} onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
                    +91 8052731617
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)' }}>Email Address</span>
                  <a href="mailto:devanshnexgrowth@gmail.com" style={{ fontSize: '1.6rem', color: '#fff', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = ACCENT} onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
                    devanshnexgrowth@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2.5rem' }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff', marginBottom: '1.2rem' }}>On the call:</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'Project scope & feasibility review',
                  'Custom strategy recommendations',
                  'Transparent, fixed-scope pricing',
                ].map((item, i) => (
                  <li key={i} style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '1.3rem',
                    fontFamily: 'GT-Planar, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}>
                    <span style={{ color: ACCENT }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                setIsModalOpen(true);
                setBookingSubmitted(false);
                setBookingError(null);
                setBookingPhone('');
              }}
              style={{
                display: 'inline-block',
                background: '#ff77c9',
                color: '#161008',
                border: 'none',
                borderRadius: '9999px',
                padding: '1.2rem 2.8rem',
                fontFamily: 'GT-Planar, Inter, sans-serif',
                fontSize: '1.35rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: 'fit-content',
                marginTop: 'auto',
                textAlign: 'center',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 119, 168, 0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Book a Discovery Call
            </button>
          </div>

          {/* ── Quote Request Column ───────────────────────────────── */}
          <div className="anim-in" style={{
            background: 'rgba(255,255,255,0.015)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '24px',
            padding: '4rem',
            boxSizing: 'border-box',
          }}>
            <div style={{ marginBottom: '3rem' }}>
              <span style={{
                fontFamily: 'GT-Planar, Inter, sans-serif',
                fontSize: '0.95rem',
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
                fontSize: '2.2rem',
                fontWeight: 700,
                fontFamily: 'GT-Planar, Inter, sans-serif',
                letterSpacing: '-0.02em',
                color: '#fff',
                marginBottom: '1.2rem',
              }}>
                Request a quote.
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.42)',
                fontSize: '1.35rem',
                lineHeight: 1.6,
                fontWeight: 300,
              }}>
                Share your project brief below and we'll respond within one business day with a customized plan.
              </p>
            </div>

            {submitted ? (
              <div style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                background: 'rgba(255,119,168,0.02)',
                border: '1px solid rgba(255,119,168,0.12)',
                borderRadius: '16px',
              }}>
                <p style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.8rem', fontFamily: 'GT-Planar, sans-serif' }}>Request Received</p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.35rem', fontFamily: 'GT-Planar, sans-serif' }}>We will get in touch with you within one business day.</p>
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
                      color: form.projectType ? '#fff' : 'rgba(255,255,255,0.28)',
                      cursor: 'pointer',
                      background: focused === 'project' ? 'rgba(255,255,255,0.03)' : 'rgba(20,14,28,0.98)',
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
                  <p style={{ color: '#ff4b4b', fontSize: '1.3rem', fontFamily: 'GT-Planar, sans-serif', margin: '0 0 1rem 0' }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    display: 'inline-block',
                    background: submitting ? '#cccccc' : '#ff77c9',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '1.25rem 2.8rem',
                    color: '#161008',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    fontFamily: 'GT-Planar, Inter, sans-serif',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    width: 'fit-content',
                    marginTop: '0.5rem',
                    opacity: submitting ? 0.7 : 1,
                  }}
                  onMouseEnter={e => {
                    if (!submitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 119, 168, 0.25)';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
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
          background: 'rgba(10, 7, 4, 0.8)',
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
            background: 'rgba(30, 22, 16, 0.98)',
            border: '1px solid rgba(255, 119, 168, 0.2)',
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
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '2rem',
                cursor: 'pointer',
                transition: 'color 0.2s',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              &times;
            </button>

            {bookingSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(255, 119, 168, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  border: '1px solid rgba(255, 119, 168, 0.3)',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#ff77c9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  color: '#fff',
                  fontFamily: 'GT-Planar, Inter, sans-serif',
                  fontWeight: 700,
                  marginBottom: '1rem',
                }}>
                  Call Request Received
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '1.35rem',
                  fontFamily: 'GT-Planar, Inter, sans-serif',
                  lineHeight: 1.5,
                  marginBottom: '2.5rem',
                }}>
                  Thank you! We will call you back at your provided number shortly to schedule our call.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: '#ff77c9',
                    color: '#161008',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '1rem 2.5rem',
                    fontFamily: 'GT-Planar, Inter, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
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
                  fontFamily: 'GT-Planar, Inter, sans-serif',
                  fontSize: '0.9rem',
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
                  color: '#fff',
                  fontFamily: 'GT-Planar, Inter, sans-serif',
                  fontWeight: 700,
                  marginBottom: '1.2rem',
                  lineHeight: 1.2,
                }}>
                  Book a Discovery Call
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.48)',
                  fontSize: '1.35rem',
                  fontFamily: 'GT-Planar, Inter, sans-serif',
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
                    <p style={{ color: '#ff4b4b', fontSize: '1.3rem', fontFamily: 'GT-Planar, sans-serif', margin: '0' }}>
                      {bookingError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={bookingSubmitting}
                    style={{
                      background: bookingSubmitting ? '#cccccc' : '#ff77c9',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '1.25rem 2.8rem',
                      color: '#161008',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      fontFamily: 'GT-Planar, Inter, sans-serif',
                      cursor: bookingSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      width: '100%',
                      textAlign: 'center',
                      opacity: bookingSubmitting ? 0.7 : 1,
                    }}
                    onMouseEnter={e => {
                      if (!bookingSubmitting) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 119, 168, 0.25)';
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
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

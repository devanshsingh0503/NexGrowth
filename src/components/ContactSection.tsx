'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: 'Website Design & Development',
    budget: 'Custom Scope',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

      if (formCardRef.current) {
        gsap.fromTo(
          formCardRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formCardRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openBookCall = () => {
    window.dispatchEvent(new CustomEvent('open-book-modal'));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const fullMessage = `Budget: ${form.budget}\n\n${form.message}`;

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          message: fullMessage,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit proposal.');
      }

      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        projectType: 'Website Design & Development',
        budget: 'Custom Scope',
        message: '',
      });
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const badges = ['WHAT IF?', 'WHY NOT?', "LET'S BUILD."];

  return (
    <section
      ref={sectionRef}
      id="contact"
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
              GET IN TOUCH
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
            GOOD IDEAS LIKE COMPANY.
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
            A workshop, a collaboration, an unexpected what-if. Bring your idea. We&apos;ll bring the engineering.
          </p>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {badges.map((badge, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  backgroundColor: '#ffffff',
                  color: '#171916',
                  border: '1px solid rgba(23, 25, 22, 0.12)',
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Form Card */}
        <div
          ref={formCardRef}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '1px solid rgba(23, 25, 22, 0.1)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            maxWidth: '820px',
            boxShadow: '0 12px 40px rgba(23, 25, 22, 0.05)',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#e5ff3d',
                  color: '#171916',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 1.5rem',
                  fontWeight: 700,
                }}
              >
                ✓
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: '2rem',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                  color: '#171916',
                }}
              >
                Message Received
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '1.05rem',
                  color: '#50534b',
                  maxWidth: '520px',
                  margin: '0 auto 2rem',
                  lineHeight: 1.6,
                }}
              >
                Thank you for reaching out! A NexGrowth senior engineer will review your project brief and reply with technical feedback and timeline estimates within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-primary-lime"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {/* Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: '#171916',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex River"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(23, 25, 22, 0.15)',
                      backgroundColor: '#f4f2ea',
                      color: '#171916',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: '#171916',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(23, 25, 22, 0.15)',
                      backgroundColor: '#f4f2ea',
                      color: '#171916',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {/* Project Type */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: '#171916',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Service Needed
                  </label>
                  <select
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(23, 25, 22, 0.15)',
                      backgroundColor: '#f4f2ea',
                      color: '#171916',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Website Design & Development">Website Design &amp; Development</option>
                    <option value="SaaS Web Application">SaaS Web Application / Portal</option>
                    <option value="Technical SEO & Audit">Technical SEO &amp; Organic Growth</option>
                    <option value="Google & Meta Ads">Google Ads &amp; Paid Social</option>
                    <option value="Full-Stack Retainer">Full-Stack Ongoing Retainer</option>
                    <option value="Other Project">Other / Custom Inquiry</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: '#171916',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Project Scope / Engagement
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(23, 25, 22, 0.15)',
                      backgroundColor: '#f4f2ea',
                      color: '#171916',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Custom Scope">Custom Scope / Inquire for Proposal</option>
                    <option value="Starter / MVP">Starter / MVP Launch</option>
                    <option value="Growth Scale">Growth / Scale Platform</option>
                    <option value="Enterprise Architecture">Enterprise Solution</option>
                    <option value="Monthly Retainer">Dedicated Monthly Retainer</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#171916',
                    marginBottom: '0.5rem',
                  }}
                >
                  Project Details &amp; Objectives *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about what you want to build, current challenges, and your ideal timeline..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(23, 25, 22, 0.15)',
                    backgroundColor: '#f4f2ea',
                    color: '#171916',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              {error && (
                <p style={{ color: '#d92d20', fontSize: '0.875rem' }}>{error}</p>
              )}

              {/* Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  paddingTop: '0.5rem',
                }}
              >
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary-lime"
                  style={{
                    padding: '1rem 2.25rem',
                    fontSize: '1rem',
                    opacity: submitting ? 0.7 : 1,
                  }}
                >
                  {submitting ? 'Sending Proposal...' : 'Send Message →'}
                </button>

                <button
                  type="button"
                  onClick={openBookCall}
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#171916',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Or Book a 15-Min Discovery Call
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

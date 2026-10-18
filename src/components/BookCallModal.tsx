'use client';

import { useState, useEffect } from 'react';

interface BookCallModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function BookCallModal({ isOpen: controlledIsOpen, onClose: controlledOnClose }: BookCallModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
    // Reset state on close after a brief delay
    setTimeout(() => {
      setSubmitted(false);
      setError(null);
      setPhone('');
    }, 300);
  };

  useEffect(() => {
    const handleOpenEvent = () => setInternalIsOpen(true);
    window.addEventListener('open-book-modal', handleOpenEvent);
    return () => window.removeEventListener('open-book-modal', handleOpenEvent);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError('Please enter a valid phone number');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to request call.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        backgroundColor: 'rgba(23, 25, 22, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          backgroundColor: '#171916',
          borderRadius: '24px',
          border: '1px solid rgba(244, 242, 234, 0.15)',
          padding: '2.5rem 2rem',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
          color: '#f4f2ea',
          fontFamily: 'var(--font-inter), Inter, sans-serif',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(244, 242, 234, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f4f2ea',
            fontSize: '1.2rem',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(244, 242, 234, 0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(244, 242, 234, 0.1)')}
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(229, 255, 61, 0.15)',
                color: '#e5ff3d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                fontSize: '1.75rem',
                border: '1px solid #e5ff3d',
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '1.75rem',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Discovery Call Requested
            </h3>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(244, 242, 234, 0.7)',
                lineHeight: 1.6,
                marginBottom: '1.75rem',
              }}
            >
              Thank you! Our technical lead will call you within 24 hours to discuss your project scope and architecture.
            </p>
            <button
              onClick={handleClose}
              className="btn-primary-lime"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#e5ff3d',
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#e5ff3d',
                }}
              >
                15-Min Discovery Call
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '1.875rem',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Let’s Talk About Your Project
            </h3>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(244, 242, 234, 0.7)',
                lineHeight: 1.5,
                marginBottom: '1.75rem',
              }}
            >
              Enter your phone number or WhatsApp. We’ll connect for a focused 15-minute scoping conversation — no pushy sales, just honest technical feedback.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'rgba(244, 242, 234, 0.6)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000 or +91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(244, 242, 234, 0.05)',
                    border: '1px solid rgba(244, 242, 234, 0.15)',
                    borderRadius: '12px',
                    color: '#f4f2ea',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#e5ff3d')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(244, 242, 234, 0.15)')}
                  required
                />
              </div>

              {error && (
                <p style={{ color: '#ff6b6b', fontSize: '0.8125rem' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary-lime"
                style={{
                  width: '100%',
                  marginTop: '0.5rem',
                  opacity: submitting ? 0.7 : 1,
                  justifyContent: 'center',
                }}
              >
                {submitting ? 'Requesting...' : 'Request Discovery Call →'}
              </button>

              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(244, 242, 234, 0.45)',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                }}
              >
                No spam. Direct conversation with a NexGrowth engineer.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

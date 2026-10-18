import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';

export const metadata: Metadata = {
  title: 'Privacy Policy | NexGrowth',
  description: 'Learn how NexGrowth collects, uses, and safeguards your personal information.',
  alternates: {
    canonical: 'https://nexgrowth.in/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | NexGrowth',
    description: 'Learn how NexGrowth collects, uses, and safeguards your personal information.',
    url: 'https://nexgrowth.in/privacy-policy',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'NexGrowth Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | NexGrowth',
    description: 'Learn how NexGrowth collects, uses, and safeguards your personal information.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: '#f4f2ea', color: '#171916', minHeight: '100vh', position: 'relative' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://nexgrowth.in',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Privacy Policy',
                item: 'https://nexgrowth.in/privacy-policy',
              },
            ],
          }),
        }}
      />

      {/* Global FlowPilot Navbar */}
      <Navbar />

      <main style={{ paddingTop: 'clamp(110px, 14vh, 150px)', paddingBottom: '7rem' }}>
        <div className="flow-container" style={{ maxWidth: '880px' }}>
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
            <Link href="/" style={{ color: '#50534b', transition: 'color 0.2s' }}>
              Home
            </Link>
            <span style={{ opacity: 0.35 }}>/</span>
            <span style={{ color: '#171916', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e5ff3d', display: 'inline-block' }} />
              Privacy Policy
            </span>
          </nav>

          {/* Hero Header */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="flow-tag">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#171916' }} />
                Legal Documentation // Compliance
              </span>
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                lineHeight: 1.05,
                fontWeight: 700,
                color: '#171916',
                letterSpacing: '-0.025em',
                marginBottom: '1rem',
              }}
            >
              Privacy Policy
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '0.9375rem',
                color: '#50534b',
                fontWeight: 500,
              }}
            >
              Last Updated: July 5, 2026
            </p>
          </div>

          {/* White Card Content Container */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(23, 25, 22, 0.08)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#50534b',
            }}
          >
            <section>
              <h2
                className="font-display"
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                1. Information We Collect
              </h2>
              <p>
                We collect information that you voluntarily provide to us when you fill out contact forms, book advisory calls, or request quotes. This typically includes your name, email address, company name, phone number, and any project requirements you share.
              </p>
            </section>

            <section>
              <h2
                className="font-display"
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                2. How We Use Your Information
              </h2>
              <p>
                We use the collected information solely to respond to your inquiries, schedule consultations, perform client outreach, deliver our custom web design and engineering services, and provide updates regarding NexGrowth services.
              </p>
            </section>

            <section>
              <h2
                className="font-display"
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                3. Cookies and Analytics
              </h2>
              <p>
                We use third-party analytics services (such as Google Analytics) to track and analyze traffic patterns and user behavior on our website. This helps us optimize performance and user experience. These tools collect anonymized data via cookies.
              </p>
            </section>

            <section>
              <h2
                className="font-display"
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                4. Data Sharing and Protection
              </h2>
              <p>
                NexGrowth does not sell, rent, or trade your personal information to third parties. We employ industry-standard administrative, technical, and physical security measures to safeguard your data from unauthorized access, disclosure, or modification.
              </p>
            </section>

            <section>
              <h2
                className="font-display"
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: '#171916',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                5. Contact Us
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us at:
              </p>
              <div
                style={{
                  backgroundColor: '#f4f2ea',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(23, 25, 22, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.9375rem',
                  color: '#171916',
                }}
              >
                <div>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:devanshnexgrowth@gmail.com" style={{ color: '#171916', textDecoration: 'underline' }}>
                    devanshnexgrowth@gmail.com
                  </a>
                </div>
                <div>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+918052731617" style={{ color: '#171916', textDecoration: 'underline' }}>
                    +91 8052731617
                  </a>
                </div>
              </div>
            </section>
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

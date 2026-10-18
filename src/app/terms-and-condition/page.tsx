import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';

export const metadata: Metadata = {
  title: 'Terms of Service | NexGrowth',
  description: 'Understand the terms and guidelines governing your use of the NexGrowth website and services.',
  alternates: {
    canonical: 'https://nexgrowth.in/terms-and-condition',
  },
  openGraph: {
    title: 'Terms of Service | NexGrowth',
    description: 'Understand the terms and guidelines governing your use of the NexGrowth website and services.',
    url: 'https://nexgrowth.in/terms-and-condition',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'NexGrowth Terms of Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | NexGrowth',
    description: 'Understand the terms and guidelines governing your use of the NexGrowth website and services.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function TermsOfServicePage() {
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
                name: 'Terms of Service',
                item: 'https://nexgrowth.in/terms-and-condition',
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
              Terms of Service
            </span>
          </nav>

          {/* Hero Header */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="flow-tag">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#171916' }} />
                Legal Documentation // User Agreement
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
              Terms of Service
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
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using the NexGrowth website and any services we offer, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not access our website or utilize our services.
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
                2. Intellectual Property Rights
              </h2>
              <p>
                Unless otherwise indicated, the website, its original contents, features, layouts, designs, code, graphics, and brands are the intellectual property of NexGrowth and are protected by international copyright, trademark, and other intellectual property laws.
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
                3. Service Engagements
              </h2>
              <p>
                Any agreement to design or develop custom websites, applications, or software platforms for a client will be governed by a separate, signed project agreement/contract. The terms outlined here apply to website browsing and advisory inquiry submissions.
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
                4. Limitations of Liability
              </h2>
              <p>
                NexGrowth will not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our website or standard online booking resources.
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
                5. Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the courts of India.
              </p>
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

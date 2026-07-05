import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | NexGrowth',
  description: 'Understand the terms and guidelines governing your use of the NexGrowth website and services.',
  alternates: {
    canonical: 'https://nexgrowth.com/terms-and-condition',
  },
  openGraph: {
    title: 'Terms of Service | NexGrowth',
    description: 'Understand the terms and guidelines governing your use of the NexGrowth website and services.',
    url: 'https://nexgrowth.com/terms-and-condition',
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
    <div style={{ background: '#161008', minHeight: '100vh', color: '#fcfaf8', fontFamily: 'GT-Planar, Inter, sans-serif', padding: '6rem 2rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://nexgrowth.com'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Terms of Service',
                'item': 'https://nexgrowth.com/terms-and-condition'
              }
            ]
          })
        }}
      />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Breadcrumbs */}
        <nav 
          aria-label="Breadcrumb"
          style={{ 
            marginBottom: '4rem', 
            fontFamily: 'ABCReproMono, monospace', 
            fontSize: '0.85rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em',
            color: 'rgba(252,250,248,0.5)'
          }}
        >
          <Link href="/" style={{ color: 'rgba(252,250,248,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
          <span style={{ margin: '0 8px', color: 'rgba(252,250,248,0.3)' }}>&gt;</span>
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Terms of Service</span>
        </nav>

        <h1 style={{ fontSize: 'min(8vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '2rem', fontFamily: 'GT-Planar, Inter, sans-serif' }}>
          Terms of Service
        </h1>
        <p style={{ color: 'rgba(252,250,248,0.6)', fontSize: '0.95rem', marginBottom: '3rem', fontFamily: 'ABCReproMono, monospace' }}>
          Last Updated: July 5, 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', lineHeight: '1.7', fontSize: '1.1rem', color: 'rgba(252,250,248,0.85)' }}>
          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the NexGrowth website and any services we offer, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not access our website or utilize our services.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, the website, its original contents, features, layouts, designs, code, graphics, and brands are the intellectual property of NexGrowth and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              3. Service Engagements
            </h2>
            <p>
              Any agreement to design or develop custom websites, applications, or software platforms for a client will be governed by a separate, signed project agreement/contract. The terms outlined here apply to website browsing and advisory inquiry submissions.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              4. Limitations of Liability
            </h2>
            <p>
              NexGrowth will not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our website or standard online booking resources.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              5. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the courts of India.
            </p>
          </section>
        </div>

        <div style={{ borderTop: '1px solid rgba(252,250,248,0.1)', marginTop: '5rem', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'rgba(252,250,248,0.4)' }}>
          © 2026 NexGrowth. All rights reserved.
        </div>
      </div>
    </div>
  );
}

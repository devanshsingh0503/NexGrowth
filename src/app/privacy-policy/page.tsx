import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | NexGrowth',
  description: 'Learn how NexGrowth collects, uses, and safeguards your personal information.',
  alternates: {
    canonical: 'https://nexgrowth.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | NexGrowth',
    description: 'Learn how NexGrowth collects, uses, and safeguards your personal information.',
    url: 'https://nexgrowth.com/privacy-policy',
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
                'name': 'Privacy Policy',
                'item': 'https://nexgrowth.com/privacy-policy'
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
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Privacy Policy</span>
        </nav>

        <h1 style={{ fontSize: 'min(8vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '2rem', fontFamily: 'GT-Planar, Inter, sans-serif' }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'rgba(252,250,248,0.6)', fontSize: '0.95rem', marginBottom: '3rem', fontFamily: 'ABCReproMono, monospace' }}>
          Last Updated: July 5, 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', lineHeight: '1.7', fontSize: '1.1rem', color: 'rgba(252,250,248,0.85)' }}>
          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              1. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when you fill out contact forms, book advisory calls, or request quotes. This typically includes your name, email address, company name, phone number, and any project requirements you share.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information solely to respond to your inquiries, schedule consultations, perform client outreach, deliver our custom web design and engineering services, and provide updates regarding NexGrowth services.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              3. Cookies and Analytics
            </h2>
            <p>
              We use third-party analytics services (such as Google Analytics) to track and analyze traffic patterns and user behavior on our website. This helps us optimize performance and user experience. These tools collect anonymized data via cookies.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              4. Data Sharing and Protection
            </h2>
            <p>
              NexGrowth does not sell, rent, or trade your personal information to third parties. We employ industry-standard administrative, technical, and physical security measures to safeguard your data from unauthorized access, disclosure, or modification.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              5. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us at:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Email:</strong> devanshnexgrowth@gmail.com</li>
              <li><strong>Phone:</strong> +91 8052731617</li>
            </ul>
          </section>
        </div>

        <div style={{ borderTop: '1px solid rgba(252,250,248,0.1)', marginTop: '5rem', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'rgba(252,250,248,0.4)' }}>
          © 2026 NexGrowth. All rights reserved.
        </div>
      </div>
    </div>
  );
}

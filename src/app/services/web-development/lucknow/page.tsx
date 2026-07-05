import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Development Company in Lucknow | Custom Web Design | NexGrowth',
  description: 'Looking for a website development company in Lucknow? NexGrowth designs fast, SEO-friendly, responsive websites for startups in Gomti Nagar and Hazratganj.',
  alternates: {
    canonical: 'https://nexgrowth.com/services/web-development/lucknow',
  },
  openGraph: {
    title: 'Website Development Company in Lucknow | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Lucknow? NexGrowth designs fast, SEO-friendly, responsive websites for startups in Gomti Nagar and Hazratganj.',
    url: 'https://nexgrowth.com/services/web-development/lucknow',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Website Development Company in Lucknow',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Lucknow | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Lucknow? NexGrowth designs fast, SEO-friendly, responsive websites for startups in Gomti Nagar and Hazratganj.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function LucknowWebDevelopmentPage() {
  return (
    <div style={{ background: '#12071a', color: '#fcfaf8', minHeight: '100vh', padding: '12rem 2rem 8rem', fontFamily: 'GT-Planar, sans-serif' }}>
      {/* JSON-LD breadcrumb script */}
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
                'name': 'Services',
                'item': 'https://nexgrowth.com/services'
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Web Development',
                'item': 'https://nexgrowth.com/services/web-development'
              },
              {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Lucknow',
                'item': 'https://nexgrowth.com/services/web-development/lucknow'
              }
            ]
          })
        }}
      />

      {/* JSON-LD Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'serviceType': 'Website Development Services in Lucknow',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'NexGrowth Lucknow',
              'url': 'https://nexgrowth.com/services/web-development/lucknow'
            },
            'areaServed': 'Lucknow, Uttar Pradesh, India',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Lucknow Website Development',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Responsive Website Layout Lucknow',
                    'description': 'Modern web portals for Hazratganj and Gomti Nagar enterprises.'
                  }
                }
              ]
            }
          })
        }}
      />

      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
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
          <Link href="/" style={{ color: 'rgba(252,250,248,0.6)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px', color: 'rgba(252,250,248,0.3)' }}>&gt;</span>
          <Link href="/services" style={{ color: 'rgba(252,250,248,0.6)', textDecoration: 'none' }}>Services</Link>
          <span style={{ margin: '0 8px', color: 'rgba(252,250,248,0.3)' }}>&gt;</span>
          <Link href="/services/web-development" style={{ color: 'rgba(252,250,248,0.6)', textDecoration: 'none' }}>Web Development</Link>
          <span style={{ margin: '0 8px', color: 'rgba(252,250,248,0.3)' }}>&gt;</span>
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Lucknow</span>
        </nav>

        {/* Hero Title */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Local Services // Central Uttar Pradesh
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '2rem', color: '#fcfaf8' }}>
            Website Development Company in Lucknow
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', fontWeight: 300, marginBottom: '2.5rem' }}>
            Looking to establish a premium digital footprint? NexGrowth is a dedicated website development company in Lucknow, designing secure, SEO-optimized, and fast React systems for emerging startups in Gomti Nagar and Hazratganj.
          </p>

          {/* Top CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ padding: '1rem 2rem', background: '#fcfaf8', color: '#12071a', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '0.9rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500 }}>
              Get Custom Quote
            </Link>
            <Link href="/#contact" style={{ padding: '1rem 2rem', border: '1px solid rgba(252,250,248,0.2)', color: '#fcfaf8', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '0.9rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500 }}>
              Book Free Consultation
            </Link>
          </div>
        </div>

        {/* Modular Content Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', lineHeight: '1.7', fontSize: '1.1rem', color: 'rgba(252,250,248,0.8)', fontWeight: 300 }}>
          
          {/* Section 1: Why Choose NexGrowth in Lucknow */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Why Choose NexGrowth in Lucknow
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              Lucknow has witnessed a substantial startup surge, with modern business hubs expanding in Vibhuti Khand and Gomti Nagar IT Parks. Traditional merchant houses in Hazratganj are also digitizing rapidly. To compete effectively, local brands need websites that load in under 1 second.
            </p>
            <p>
              NexGrowth supports this growth by writing clean, server-side rendered Next.js portals. We focus on search visibility and UX conversion paths, turning standard visitor traffic into qualified buyers.
            </p>
          </section>

          {/* Section 2: Lucknow Website Development Services */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Lucknow Website Development Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We build specialized digital systems:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>Local Startup Landing Pages</strong>: Built to scale email subscriptions and sales leads.</li>
              <li><strong>E-commerce Portals Lucknow</strong>: Custom storefront designs with database inventory control.</li>
              <li><strong>Corporate Portals Redesign</strong>: Rebuilding slow templates into responsive Next.js.</li>
            </ul>
          </section>

          {/* Section 3: Benefits */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Benefits
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Why local Lucknow businesses choose NexGrowth:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>Local SEO Readiness</strong>: Optimized schema data targeting central UP client bases.</li>
              <li><strong>Near-Instant Load Speeds</strong>: Accelerated Largest Contentful Paint (LCP) performance.</li>
              <li><strong>Scalable Backends</strong>: Structured database systems built to handle expansion.</li>
            </ul>
          </section>

          {/* Section 4: Our Process */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Our Process
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We ensure project alignment at every phase:
            </p>
            <ol style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>1. Discovery Mapping</strong>: Defining local market user actions and tech scopes.</li>
              <li><strong>2. Interface Wireframing</strong>: Prototyping custom B2B designs in Figma.</li>
              <li><strong>3. Frontend Engineering</strong>: Writing clean, secure React code components.</li>
              <li><strong>4. Responsive Verification</strong>: Reviewing display outputs on multiple viewports.</li>
              <li><strong>5. Safe Launch</strong>: Running speed configurations and index submissions.</li>
            </ol>

            {/* Mid-Page CTA Banner */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '12px', marginTop: '3.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.75rem' }}>
                Is your site failing to rank in Lucknow search queries?
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(252,250,248,0.6)', marginBottom: '1.5rem' }}>
                Get a comprehensive check covering mobile viewport accessibility, CSS structures, and page speed index scores.
              </p>
              <Link href="/#contact" style={{ padding: '0.8rem 2rem', background: '#ff77c9', color: '#161008', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '0.85rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500, display: 'inline-block' }}>
                Get Free Website Audit
              </Link>
            </div>
          </section>

          {/* Section 5: Technologies We Use */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Technologies We Use
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              We build using optimized, modern technology:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)' }}>
              React, Next.js, Node.js, TypeScript, Vercel, and Tailwind CSS.
            </p>
          </section>

          {/* Section 6: Industries We Serve */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Industries We Serve
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              We engineer custom portals across major Lucknow verticals:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)' }}>
              Emerging B2B SaaS start-ups, Gomti Nagar logistics operators, Hazratganj retailers, and professional consulting firms.
            </p>
          </section>

          {/* Section 7: Frequently Asked Questions */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  How does NexGrowth support startups in Gomti Nagar?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  We provide scalable pricing packages and robust system architectures designed to handle rapid user base growth.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Will my site have localized schema data?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes. We inject custom JSON-LD schema blocks to define your business location and service area targets to Google bots.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Contact Us */}
          <section style={{ borderTop: '1px solid rgba(252,250,248,0.1)', paddingTop: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Contact Us
            </h2>
            <p style={{ color: 'rgba(252,250,248,0.6)', marginBottom: '2.5rem', fontWeight: 300 }}>
              Ready to construct a high-converting portal with a leading <strong>website development company in Lucknow</strong>? Submit your brief to discuss scope and get a custom quote.
            </p>
            <Link href="/#contact" style={{ padding: '1.2rem 2.8rem', background: '#fcfaf8', color: '#12071a', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '1rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500 }}>
              Get Custom Website Quote
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}

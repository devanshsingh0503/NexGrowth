import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Development Company in Delhi | Custom Web Design | NexGrowth',
  description: 'Looking for a website development company in Delhi? NexGrowth builds fast, responsive, and SEO-friendly websites for enterprises in CP, Okhla, and Saket.',
  alternates: {
    canonical: 'https://nexgrowth.com/services/web-development/delhi',
  },
  openGraph: {
    title: 'Website Development Company in Delhi | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Delhi? NexGrowth builds fast, responsive, and SEO-friendly websites for enterprises in CP, Okhla, and Saket.',
    url: 'https://nexgrowth.com/services/web-development/delhi',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Website Development Company in Delhi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Delhi | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Delhi? NexGrowth builds fast, responsive, and SEO-friendly websites for enterprises in CP, Okhla, and Saket.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function DelhiWebDevelopmentPage() {
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
                'name': 'Delhi',
                'item': 'https://nexgrowth.com/services/web-development/delhi'
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
            'serviceType': 'Website Development Services in Delhi',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'NexGrowth Delhi',
              'url': 'https://nexgrowth.com/services/web-development/delhi'
            },
            'areaServed': 'Delhi, India',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Delhi Website Development',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Enterprise React Portal Delhi',
                    'description': 'High-speed Next.js portals for CP and Okhla corporates.'
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
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Delhi</span>
        </nav>

        {/* Hero Title */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Local Services // National Capital Region
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '2rem', color: '#fcfaf8' }}>
            Website Development Company in Delhi
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', fontWeight: 300, marginBottom: '2.5rem' }}>
            Are you searching for a reliable website development company in Delhi? NexGrowth engineers fast, SEO-friendly, and responsive websites for enterprises across Connaught Place, Okhla, and Saket.
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
          
          {/* Section 1: Why Choose NexGrowth in Delhi */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Why Choose NexGrowth in Delhi
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              Delhi serves as the corporate nerve center of the nation. Businesses in Connaught Place (CP) and Saket require high-end, bespoke web designs to build trust with enterprise clients. At the same time, logistics and D2C brands in Okhla demand rapid database portals.
            </p>
            <p>
              NexGrowth delivers by building custom portals rather than utilizing sluggish page-builder plugins. We code in clean Next.js, giving you high Lighthouse scores and superior search indexing out of the box.
            </p>
          </section>

          {/* Section 2: Delhi Website Development Services */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Delhi Website Development Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We design and construct tailored web architectures:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>Enterprise Portals CP</strong>: Tailored corporate sites with secure hosting and user permission hierarchies.</li>
              <li><strong>E-commerce Redesigns</strong>: Fast-loading storefronts with custom inventory sync.</li>
              <li><strong>Local B2B Campaign Banners</strong>: Optimized layouts to convert paid search clicks.</li>
            </ul>
          </section>

          {/* Section 3: Benefits */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Benefits
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Why choose our Delhi web engineering team:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>Strict On-Page SEO</strong>: Crawl-ready structures that position well in local searches.</li>
              <li><strong>Mobile Viewport Optimizations</strong>: Fast rendering on standard cellular connections.</li>
              <li><strong>IP Transfer</strong>: Complete repository ownership upon deployment.</li>
            </ul>
          </section>

          {/* Section 4: Our Process */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Our Process
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Our structured approach guarantees delivery:
            </p>
            <ol style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>1. Discovery Session</strong>: Scoping target conversion metrics.</li>
              <li><strong>2. Figma Prototyping</strong>: Designing visual user flows.</li>
              <li><strong>3. Custom Web Coding</strong>: Implementing clean React modules.</li>
              <li><strong>4. Quality Reviews</strong>: Reviewing redirects, accessibility tags, and speed.</li>
              <li><strong>5. Final Deployment</strong>: Server setup and index mapping.</li>
            </ol>

            {/* Mid-Page CTA Banner */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '12px', marginTop: '3.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.75rem' }}>
                Is your corporate site failing to convert traffic?
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(252,250,248,0.6)', marginBottom: '1.5rem' }}>
                Get a detailed audit of your mobile performance, heading structures, and index errors.
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
              React, Next.js, TypeScript, PostgreSQL, Vercel, and Tailwind CSS.
            </p>
          </section>

          {/* Section 6: Industries We Serve */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Industries We Serve
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              Our client portfolio covers key Delhi verticals:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)' }}>
              Corporate Finance, Saket retail operations, Okhla manufacturers, B2B software, and national law offices.
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
                  Do you coordinate meetings with corporate teams in Delhi?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes. We frequently collaborate with marketing teams based in Connaught Place and Saket via secure screenshares and direct messaging channels.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Will our custom website have high Lighthouse speed scores?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes. By avoiding bulky site builders, our code compiles to static assets that deliver near-perfect mobile speed scores.
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
              Ready to construct a high-converting portal with a leading <strong>website development company in Delhi</strong>? Submit your requirements to schedule a discovery call and get a custom quote.
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

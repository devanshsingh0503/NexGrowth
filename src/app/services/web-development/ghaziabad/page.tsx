import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Development Company in Ghaziabad | Custom Web Design | NexGrowth',
  description: 'Looking for a website development company in Ghaziabad? NexGrowth builds fast, responsive websites for manufacturers and logistics firms in Sahibabad.',
  alternates: {
    canonical: 'https://nexgrowth.com/services/web-development/ghaziabad',
  },
  openGraph: {
    title: 'Website Development Company in Ghaziabad | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Ghaziabad? NexGrowth builds fast, responsive websites for manufacturers and logistics firms in Sahibabad.',
    url: 'https://nexgrowth.com/services/web-development/ghaziabad',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Website Development Company in Ghaziabad',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Ghaziabad | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Ghaziabad? NexGrowth builds fast, responsive websites for manufacturers and logistics firms in Sahibabad.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function GhaziabadWebDevelopmentPage() {
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
                'name': 'Ghaziabad',
                'item': 'https://nexgrowth.com/services/web-development/ghaziabad'
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
            'serviceType': 'Website Development Services in Ghaziabad',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'NexGrowth Ghaziabad',
              'url': 'https://nexgrowth.com/services/web-development/ghaziabad'
            },
            'areaServed': 'Ghaziabad, Uttar Pradesh, India',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Ghaziabad Website Development',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Industrial Web Portal Ghaziabad',
                    'description': 'Secure, responsive portals for Sahibabad manufacturing plants.'
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
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Ghaziabad</span>
        </nav>

        {/* Hero Title */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Local Services // Industrial NCR Zone
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '2rem', color: '#fcfaf8' }}>
            Website Development Company in Ghaziabad
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', fontWeight: 300, marginBottom: '2.5rem' }}>
            Looking for a website development company in Ghaziabad? NexGrowth builds fast, responsive websites for manufacturers and logistics firms in Sahibabad and Kavi Nagar.
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
          
          {/* Section 1: Why Choose NexGrowth in Ghaziabad */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Why Choose NexGrowth in Ghaziabad
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              Ghaziabad serves as a massive industrial and manufacturing node in the National Capital Region. Heavy industries, supply chain providers, and logistics companies in Sahibabad and Kavi Nagar need customized web interfaces to automate client scheduling, manage quote requests, and display operations.
            </p>
            <p>
              NexGrowth meets this need by developing dedicated web apps. We prioritize backend database speed and mobile accessibility so that industrial coordinators can access shipping charts and client files on the go.
            </p>
          </section>

          {/* Section 2: Ghaziabad Website Development Services */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Ghaziabad Website Development Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We build specialized portals to drive regional growth:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>Industrial Logistics Portals</strong>: Dispatch trackers, tracking forms, and client login panels.</li>
              <li><strong>Manufacturer Showcases</strong>: Visual product catalogs designed to acquire national distributor queries.</li>
              <li><strong>Legacy Upgrades</strong>: Transforming slow layouts to secure, responsive, and indexable Next.js code.</li>
            </ul>
          </section>

          {/* Section 3: Benefits */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Benefits
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Why Ghaziabad businesses partner with NexGrowth:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>Crawl-Friendly Setup</strong>: Clean heading hierarchies and canonical configuration loops.</li>
              <li><strong>Flawless Mobile Rendering</strong>: Built for simple mobile connections in industrial areas.</li>
              <li><strong>Direct Project Ownership</strong>: Git repository and IP transfer upon launch.</li>
            </ul>
          </section>

          {/* Section 4: Our Process */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Our Process
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We ensure structured deployment:
            </p>
            <ol style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>1. Requirement Analysis</strong>: Mapping shipping trackers and quote workflows.</li>
              <li><strong>2. Interface Wireframing</strong>: Prototyping custom, clean user panels in Figma.</li>
              <li><strong>3. Frontend Coding</strong>: Building modular React Next.js modules.</li>
              <li><strong>4. Responsive Verification</strong>: Confirming accessibility across multiple devices.</li>
              <li><strong>5. Production Launch</strong>: Deploying to Vercel and updating search sitemaps.</li>
            </ol>

            {/* Mid-Page CTA Banner */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '12px', marginTop: '3.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.75rem' }}>
                Is your company website losing mobile leads?
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(252,250,248,0.6)', marginBottom: '1.5rem' }}>
                Get a comprehensive check covering mobile viewport sizing, SSL settings, and Core Web Vitals speed scores.
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
              We serve key industrial segments in Ghaziabad:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)' }}>
              Sahibabad steel and manufacturing operations, Kavi Nagar logistics coordinators, distributors, and corporate service partners.
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
                  Can you integrate custom order tracking APIs?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes. We design and code custom APIs to bridge your legacy shipping databases with responsive client portals.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Do you perform sitemap integrations for local search queries?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes. We register all subpages and regional URLs directly in sitemaps to ensure search bots crawl them regularly.
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
              Ready to construct a high-converting portal with a leading <strong>website development company in Ghaziabad</strong>? Submit your details to discuss logistics specs and get a custom quote.
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

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Development Company in Noida | Custom Design | NexGrowth',
  description: 'Looking for a website development company in Noida? NexGrowth designs fast, SEO-friendly, responsive websites for startups and corporates in Sector 62 and 125.',
  alternates: {
    canonical: 'https://nexgrowth.com/services/web-development/noida',
  },
  openGraph: {
    title: 'Website Development Company in Noida | Custom Design | NexGrowth',
    description: 'Looking for a website development company in Noida? NexGrowth designs fast, SEO-friendly, responsive websites for startups and corporates in Sector 62 and 125.',
    url: 'https://nexgrowth.com/services/web-development/noida',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Website Development Company in Noida',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Noida | Custom Design | NexGrowth',
    description: 'Looking for a website development company in Noida? NexGrowth designs fast, SEO-friendly, responsive websites for startups and corporates in Sector 62 and 125.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function NoidaWebDevelopmentPage() {
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
                'name': 'Noida',
                'item': 'https://nexgrowth.com/services/web-development/noida'
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
            'serviceType': 'Website Development Services in Noida',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'NexGrowth Noida',
              'url': 'https://nexgrowth.com/services/web-development/noida'
            },
            'areaServed': 'Noida, Uttar Pradesh, India',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Noida Website Development',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'B2B Website Design Noida',
                    'description': 'Mobile-friendly layouts for IT and corporate startups.'
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
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Noida</span>
        </nav>

        {/* Hero Title */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Local Services // Noida Area
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '2rem', color: '#fcfaf8' }}>
            Website Development Company in Noida
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', fontWeight: 300, marginBottom: '2.5rem' }}>
            Are you seeking a high-performance web presence for your brand? NexGrowth is a leading website development company in Noida, constructing custom, fast-loading, and responsive business portals designed to maximize local and global sales.
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
          
          {/* Section 1: Why Choose NexGrowth in Noida */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Why Choose NexGrowth in Noida
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              Noida has evolved into a powerhouse for technology startups and enterprise software firms, particularly around Sector 62, Sector 125, and Film City. To stand out in this competitive landscape, your business website needs superior speed, custom branding, and responsive configurations.
            </p>
            <p>
              Unlike template-based web agencies, we engineer every layout using clean React code and Next.js protocols. This delivers near-instant load speeds that capture search bots and retain high-value prospects.
            </p>
          </section>

          {/* Section 2: Noida Website Development Services */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Noida Website Development Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We build customized portals tailored for local commercial goals:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>B2B Tech Startups Portals</strong>: High-end landing pages designed to acquire SaaS signups and inquiries.</li>
              <li><strong>Corporate Website Redesign</strong>: Re-engineering legacy layouts to fast, modern frameworks.</li>
              <li><strong>Custom Integrations</strong>: Bridging local CRM, lead-handling sheets, and payment APIs safely.</li>
            </ul>
          </section>

          {/* Section 3: Benefits */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Benefits
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Partnering with a local Noida web design team offers clear strategic benefits:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>On-Page Technical SEO</strong>: Structural keyword targets built into sitemaps and heading hierarchies.</li>
              <li><strong>High Mobile Responsiveness</strong>: Flawless rendering across mobile screens and tablets.</li>
              <li><strong>Clear Project Scoping</strong>: Directly align with engineers who understand Noida's dynamic IT business community.</li>
            </ul>
          </section>

          {/* Section 4: Our Process */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Our Process
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We ensure structured deployment via our five-stage framework:
            </p>
            <ol style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>1. Regional Discovery</strong>: Aligning site structures with local customer search metrics.</li>
              <li><strong>2. UI Custom Drafting</strong>: Styling mockups in Figma that convey premium B2B branding.</li>
              <li><strong>3. Dynamic Frontend Coding</strong>: Coding clean Next.js React modules.</li>
              <li><strong>4. Responsive Audits</strong>: Validating load times, CSS breakpoints, and form routes.</li>
              <li><strong>5. Safe Server Launch</strong>: Deploying to Vercel and registering sitemaps with Search Console.</li>
            </ol>

            {/* Mid-Page CTA Banner */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '12px', marginTop: '3.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.75rem' }}>
                Is your site ready for Noida’s competitive search space?
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(252,250,248,0.6)', marginBottom: '1.5rem' }}>
                Request a comprehensive digital performance audit to evaluate speed, responsiveness, and index status.
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
              We leverage reliable and modern technology stacks:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)' }}>
              React, Next.js, Node.js, TypeScript, PostgreSQL, Vercel, and Tailwind CSS.
            </p>
          </section>

          {/* Section 6: Industries We Serve */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Industries We Serve
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              We serve a broad range of sectors in Noida:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)' }}>
              B2B SaaS start-ups, IT &amp; software consulting firms, real estate developers, professional agencies, and e-commerce setups.
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
                  Do you provide local support for businesses in Noida?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes. Our team works closely with startups and corporates in Sector 62 and 125, providing direct communications and swift turnaround.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Can you migrate our legacy site to a Next.js framework?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Absolutely. We migrate slow templates to React/Next.js architectures, securing your URL pathways and keyword history.
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
              Ready to construct your next business portal with a trusted <strong>website development company in Noida</strong>? Connect with us to discuss scope and get a custom estimate.
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

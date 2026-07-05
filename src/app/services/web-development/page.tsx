import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Development Company | Custom Business Websites | NexGrowth',
  description: 'Get high-converting websites built by NexGrowth, a leading website development company. We design fast, responsive, and SEO-friendly websites.',
  alternates: {
    canonical: 'https://nexgrowth.com/services/web-development',
  },
  openGraph: {
    title: 'Website Development Company | Custom Business Websites | NexGrowth',
    description: 'Get high-converting websites built by NexGrowth, a leading website development company. We design fast, responsive, and SEO-friendly websites.',
    url: 'https://nexgrowth.com/services/web-development',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'B2B Custom Website Development Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company | Custom Business Websites | NexGrowth',
    description: 'Get high-converting websites built by NexGrowth, a leading website development company. We design fast, responsive, and SEO-friendly websites.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function WebDevelopmentServicePage() {
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
            'serviceType': 'Custom Website Development',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'NexGrowth',
              'url': 'https://nexgrowth.com'
            },
            'areaServed': 'Worldwide',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Website Development Services',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Responsive Website Design',
                    'description': 'Mobile-first layout styling and components.'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Next.js Website Development',
                    'description': 'Dynamic and statically generated React framework applications.'
                  }
                }
              ]
            }
          })
        }}
      />

      {/* JSON-LD FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'How much does website development cost?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'The cost of custom website development depends on project scope, custom designs, database requirements, and API integrations. Contact us for a detailed brief and estimate.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How long does website development take?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'A standard corporate website redesigned or built on Next.js takes between 4 to 8 weeks from initial discovery and wireframes to launch.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Is SEO included with website development?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes. All our custom website development projects include essential technical SEO setups, optimized heading tag structures, sitemaps, and SSL certificate integrations.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is a website redesign and why do we need it?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'A website redesign upgrades outdated frameworks to modern codebases like Next.js, optimizing mobile viewports, site speed scores, and core web vitals while retaining your exact search query history.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Will my custom website render well on mobile viewports?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Absolutely. Every website layout we build undergoes thorough responsive audits across multiple hardware profiles to guarantee responsive display and tap target sizing.'
                }
              }
            ]
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
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Web Development</span>
        </nav>

        {/* Hero Title */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Capabilities // Web Development
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '2rem', color: '#fcfaf8' }}>
            Custom Website Development Company Services
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', fontWeight: 300, marginBottom: '2.5rem' }}>
            We build fast, responsive websites designed to help businesses generate more leads, improve user experience, and rank better in search engines. As a custom website development company, NexGrowth focuses on solving your digital bottlenecks.
          </p>
          
          {/* Top CTAs (Dual Button Group) */}
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
          
          {/* Section 1: Why Choose NexGrowth */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Why Choose NexGrowth
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              When looking for a <strong>web development</strong> partner, you need a team that understands the intersection of high-end aesthetics, raw speed, and search visibility. At NexGrowth, we don't build generic templates. Generic templates are filled with bloated code, unnecessary CSS frameworks, and scripting modules that slow down client loading times.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              We design and code every <strong>custom website</strong> from the ground up, ensuring your brand story is represented with precision. Our engineering workflow prioritizes clean syntax, optimized images, and semantic layouts that rank. We treat search spiders with the same care as human visitors, building readable header structures and clean link paths.
            </p>
            <p>
              By utilizing modular design frameworks, we create web systems that are extremely easy to expand as your business grows. Whether you need additional service landing pages, database forms, or localized portals, our code remains scalable and clean.
            </p>
          </section>

          {/* Section 2: Website Development Services */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Website Development Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Our capabilities cover the complete spectrum of frontend and backend web engineering, including:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Business Website Development</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We design custom corporate portals tailored for B2B lead acquisition. We map user journeys from search click to conversion, integrating lead capture forms, scheduling tools, and CRM database connectors.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Website Redesign Services</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  If your current website is slow, outdated, or built on restricted site builders, we provide complete migration services. We move your design layout to high-performance code, preserving your canonical tags, redirect rules, and keyword rankings.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Next.js Website Architecture</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We leverage static site generation (SSG) and incremental static regeneration (ISR) to compile layouts beforehand. This means pages load in milliseconds, optimizing crawling indexation.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>High-Converting Landing Page Design</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  Built for paid campaigns (Google Ads and Meta Ads), these pages feature singular conversion actions, fast load times, and optimized viewport layouts to reduce user bounce rates.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Benefits */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Benefits
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              An optimized <strong>modern website</strong> serves as your 24/7 sales representative. Partnering with NexGrowth delivers key benefits:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Accelerated Load Times (LCP)</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  Speed is a direct search ranking factor. Our custom React compiles deliver Core Web Vitals scores above 95/100, which reduces ad bounce rates and improves organic position authority.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Flawless Responsive Rendering</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  More than 60% of B2B searches happen on mobile devices. We test layouts across multiple viewport widths to ensure typography sizes, images, and buttons render cleanly.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>SEO-Friendly Structure</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We configure metadata, semantic HTML5 structure, custom Open Graph elements, canonical alternates, and dynamic robots.txt files to index your site correctly in search spiders.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Our Process */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Our Process
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We follow a rigorous, five-stage development framework to guarantee delivery on time:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>1. Discovery &amp; Scope</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We map out your business objectives, target buyer personas, key search query opportunities, and required third-party API integrations (CRMs, newsletters, databases).
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>2. Wireframing &amp; UX Design</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We construct high-fidelity visual mockups in Figma. This includes defining layout grids, typography scales, conversion path directions, and micro-animation timelines.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>3. Frontend &amp; Backend Engineering</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  Our programmers write clean React and Tailwind CSS components. We configure server-side routing hooks, deploy secure contact API handlers, and connect database records.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>4. Quality Assurance &amp; Audits</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We test page performance across various hardware platforms (mobile and desktop viewports). We audit form validation systems, check for broken links, and test Lighthouse metrics.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>5. Launch &amp; Indexation Sequence</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We deploy production bundles to high-speed CDN edges (Vercel/AWS). We submit dynamic XML sitemaps to Google Search Console to initiate prompt crawler indexing.
                </p>
              </div>
            </div>

            {/* Mid-Page CTA Banner */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '12px', marginTop: '3.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.75rem' }}>
                Curious about your site's current performance?
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(252,250,248,0.6)', marginBottom: '1.5rem' }}>
                Get a comprehensive analysis covering Core Web Vitals, mobile viewport sizes, and crawling configurations.
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
              We select modern tech stacks built for speed, scalability, and security:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)', marginBottom: '1.25rem' }}>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>React</a>, <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Next.js</a>, TypeScript, Node.js, <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Vercel</a>, Tailwind CSS, GSAP (for micro-animations), and Prismic CMS.
            </p>
            <p>
              By leveraging serverless backend runtimes and statically generated files, we compile site pages into cached assets distributed globally. This structure completely bypasses database latency issues.
            </p>
          </section>

          {/* Section 6: Industries We Serve */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Industries We Serve
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              Our team has engineered responsive web solutions for a broad range of sectors:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>B2B SaaS &amp; Tech Startups</strong>: Designing visual dashboards, conversion-optimized landing pages, and interactive product calculators.</li>
              <li><strong>Professional Services &amp; Consulting</strong>: Building corporate portals that project enterprise credibility.</li>
              <li><strong>Logistics &amp; Operations</strong>: Custom web portals configured with client login panels, tracking charts, and database integrations.</li>
              <li><strong>Premium E-commerce Setup</strong>: Highly responsive storefronts with fast search filters.</li>
            </ul>
          </section>

          {/* Section 7: Frequently Asked Questions */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  How much does website development cost?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  The cost of custom website development depends on project scope, custom designs, database requirements, and API integrations. Contact us for a detailed brief and estimate.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  How long does website development take?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  A standard corporate website redesigned or built on Next.js takes between 4 to 8 weeks from initial discovery and wireframes to launch.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Is SEO included with website development?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes. All our custom website development projects include essential technical SEO setups, optimized heading tag structures, sitemaps, and SSL certificate integrations.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  What is a website redesign and why do we need it?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  A website redesign upgrades outdated frameworks to modern codebases like Next.js, optimizing mobile viewports, site speed scores, and core web vitals while retaining your exact search query history.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Will my custom website render well on mobile viewports?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Absolutely. Every website layout we build undergoes thorough responsive audits across multiple hardware profiles to guarantee responsive display and tap target sizing.
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
              Ready to partner with a trusted <strong>website development company</strong>? Submit your requirements to discuss scope and get a custom quote.
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

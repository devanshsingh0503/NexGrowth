import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technical SEO Services | SEO Agency Company | NexGrowth',
  description: 'Grow organic search visibility with NexGrowth. Our SEO agency delivers expert technical SEO services, on-page optimization, and audits that increase site rankings.',
  alternates: {
    canonical: 'https://nexgrowth.com/services/seo',
  },
  openGraph: {
    title: 'Technical SEO Services | SEO Agency Company | NexGrowth',
    description: 'Grow organic search visibility with NexGrowth. Our SEO agency delivers expert technical SEO services, on-page optimization, and audits that increase site rankings.',
    url: 'https://nexgrowth.com/services/seo',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'NexGrowth Technical SEO Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO Services | SEO Agency Company | NexGrowth',
    description: 'Grow organic search visibility with NexGrowth. Our SEO agency delivers expert technical SEO services, on-page optimization, and audits that increase site rankings.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function SeoServicePage() {
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
                'name': 'SEO',
                'item': 'https://nexgrowth.com/services/seo'
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
            'serviceType': 'Search Engine Optimisation & Audit Services',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'NexGrowth',
              'url': 'https://nexgrowth.com'
            },
            'areaServed': 'Worldwide',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'SEO Services',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Technical SEO Services',
                    'description': 'Speed optimization, crawl audits, canonical tagging, and XML sitemaps.'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'On-page SEO Services',
                    'description': 'Keyword-optimized headings, metadata layout structure, and copy optimization.'
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
                'name': 'How long does it take to see organic traffic growth?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'While technical changes improve crawlability instantly, significant organic ranking growth typically builds over 3 to 6 months depending on competition.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is the difference between technical and on-page SEO?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Technical SEO focuses on site speed, crawl errors, sitemaps, and SSL. On-page SEO involves optimizing copy, headings, and metadata structures.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Do you perform reverse DNS Googlebot log file analysis?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we analyze raw server logs to monitor crawler frequency, check for crawl budget waste, and verify authentic search spider hits.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Why is site speed important for search engine rankings?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Google uses site speed as a primary ranking signal (via Core Web Vitals). Faster loading pages reduce user bounce rates and improve crawling frequency.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is an XML sitemap and do we need it?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'An XML sitemap lists all important page URLs, serving as a roadmap for search spiders. It guarantees that new blog posts or service updates are index promptly.'
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
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>SEO</span>
        </nav>

        {/* Hero Title */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Capabilities // Search Engine Optimisation
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '2rem', color: '#fcfaf8' }}>
            Technical SEO Services &amp; On-Page Audit Solutions
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', fontWeight: 300, marginBottom: '2.5rem' }}>
            Struggling to earn search visibility? NexGrowth is a specialized B2B SEO agency. We deliver expert technical SEO services and audits designed to scale organic traffic.
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
              Most SEO firms focus only on buying links or rewriting copy. At NexGrowth, we approach organic visibility from an engineering standpoint. We are a search optimization <strong>SEO company</strong> that solves the technical problems holding back your rankings. Crawl blockages, unoptimized redirection rules, duplicate templates, and slow server response times can isolate key service pages from search engine indexing.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              By aligning page architecture, speed index scores, sitemaps, and content, we build a solid pipeline of high-intent organic traffic that actually converts into sales. Our campaign consultants prioritize structural page integrity, ensuring header selectors match the precise keywords your prospects query daily.
            </p>
            <p>
              We monitor indexation patterns weekly using advanced console logs, identifying orphan pages and fixing redirect loops promptly. This proactive approach ensures search bots crawl your site efficiently, maximizing your return on organic investment.
            </p>
          </section>

          {/* Section 2: Technical SEO Services */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Technical SEO Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Our expert consultants deliver complete optimization audits and campaign management:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Technical SEO Audits &amp; Optimization</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We evaluate Core Web Vitals, mobile viewport setups, canonical targets, redirect rules, and robots instructions. We eliminate crawl waste, securing efficient indexing.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>On-Page Content Structuring</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We optimize title tags, meta descriptions, visual heading structures, and media attributes. We align copies with natural LSI related terms to prevent keyword stuffing.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Website SEO Audit Reporting</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We perform crawl simulations to identify duplicate path tags, missing sitemap logs, slow script files, and broken links across your directory tree.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Google Ranking Services</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We design data-driven campaigns targeting high-converting search strings, tracking performance using Google Search Console and analytics hooks.
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
              A high-ranking website reduces your dependency on paid ads. Key benefits include:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Compounding Traffic Channels</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  Paid advertising stops when the budget ends. Organic traffic grows over time, building a pipeline of prospects without continuous cost-per-click charges.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>High Conversion Relevance</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We target transaction queries rather than informational terms, positioning your services directly in front of buyers ready to request quotes.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Enhanced Brand Credibility</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  Dominating search results demonstrates industry authority, building trust with corporate clients searching for reliable B2B services.
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
              Our workflow is structured, transparent, and metrics-driven:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>1. Site Architecture Crawl Audit</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We scan your codebase using simulated crawlers to identify redirect loops, missing canonical configurations, and broken links.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>2. Keyword &amp; Competitor Mapping</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We analyze search volume and competition to select high-intent search terms that match your company's service offerings.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>3. On-Page Copy Alignment</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We restructure layout headers, optimize title strings, write meta descriptions, and link related subpages to pass crawler index checks.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>4. Technical Script &amp; Schema Configurations</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We configure dynamic robots.txt logs, build XML sitemaps, inject JSON-LD schemas, and test mobile speed indexes.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>5. Performance Monitoring</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We track search positions, review console indexation logs, and adjust link structures based on rank metrics.
                </p>
              </div>
            </div>

            {/* Mid-Page CTA Banner */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '12px', marginTop: '3.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.75rem' }}>
                Want to identify indexation and crawl errors today?
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(252,250,248,0.6)', marginBottom: '1.5rem' }}>
                Get a complimentary technical check covering canonical tags, redirect loops, and sitemap layout setups.
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
              We utilize industry-leading analytics and auditing tools:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)', marginBottom: '1.25rem' }}>
              <a href="https://search.google.com/search-console/about" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Google Search Console</a>, Screaming Frog Crawl Simulator, Ahrefs, SEMrush, <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Google Analytics 4</a>, and Lighthouse Speed Indexers.
            </p>
            <p>
              By leveraging raw server logs and analytics hooks, we verify search spider traffic, monitor resource allocation, and address crawler errors immediately.
            </p>
          </section>

          {/* Section 6: Industries We Serve */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Industries We Serve
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              We optimize search presence for companies in key verticals:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>B2B SaaS platforms</strong>: Targeting transactional terms like CRM integrations and analytics software.</li>
              <li><strong>Professional B2B Consulting</strong>: Optimization targeting corporate clients looking for advisory services.</li>
              <li><strong>E-commerce Brands</strong>: Architecting clean catalog indexes to secure product search snippets.</li>
              <li><strong>Finance &amp; Law Firms</strong>: Dominating regional advisory searches to scale local client acquisition.</li>
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
                  How long does it take to see organic traffic growth?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  While technical changes improve crawlability instantly, significant organic ranking growth typically builds over 3 to 6 months depending on competition.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  What is the difference between technical and on-page SEO?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Technical SEO focuses on site speed, crawl errors, sitemaps, and SSL. On-page SEO involves optimizing copy, headings, and metadata structures.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Do you perform reverse DNS Googlebot log file analysis?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes, we analyze raw server logs to monitor crawler frequency, check for crawl budget waste, and verify authentic search spider hits.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Why is site speed important for search engine rankings?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Google uses site speed as a primary ranking signal (via Core Web Vitals). Faster loading pages reduce user bounce rates and improve crawling frequency.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  What is an XML sitemap and do we need it?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  An XML sitemap lists all important page URLs, serving as a roadmap for search spiders. It guarantees that new blog posts or service updates are indexed promptly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Contact Us */}
          <section style={{ borderTop: '1px solid rgba(252,250,248,0.1)', paddingTop: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Contact Us
            </h2>
            <p style={{ color: 'rgba(252,250,248,0.6)', marginBottom: '1rem', fontWeight: 300 }}>
              Need a new website? See our <Link href="/services/web-development" style={{ color: 'var(--current-color-40, #ff77c9)', textDecoration: 'underline' }}>Website Development</Link> service.
            </p>
            <p style={{ color: 'rgba(252,250,248,0.6)', marginBottom: '2.5rem', fontWeight: 300 }}>
              Ready to scale your search visibility with <strong>technical SEO services</strong>? Submit your requirements to connect with an SEO expert and get a custom quote.
            </p>
            <Link href="/#contact" style={{ padding: '1.2rem 2.8rem', background: '#fcfaf8', color: '#12071a', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '1rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500 }}>
              Get Custom SEO Quote
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}

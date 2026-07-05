import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Google Ads Agency | Expert PPC Management | NexGrowth',
  description: 'Acquire high-intent customers with NexGrowth. As a Google Ads agency, we offer expert PPC management and Google Ads services designed to scale acquisition ROAS.',
  alternates: {
    canonical: 'https://nexgrowth.com/services/google-ads',
  },
  openGraph: {
    title: 'Google Ads Agency | Expert PPC Management | NexGrowth',
    description: 'Acquire high-intent customers with NexGrowth. As a Google Ads agency, we offer expert PPC management and Google Ads services designed to scale acquisition ROAS.',
    url: 'https://nexgrowth.com/services/google-ads',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Google Ads Agency Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Agency | Expert PPC Management | NexGrowth',
    description: 'Acquire high-intent customers with NexGrowth. As a Google Ads agency, we offer expert PPC management and Google Ads services designed to scale acquisition ROAS.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function GoogleAdsServicePage() {
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
                'name': 'Google Ads',
                'item': 'https://nexgrowth.com/services/google-ads'
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
            'serviceType': 'Google Ads & Paid Search Advertising Management',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'NexGrowth',
              'url': 'https://nexgrowth.com'
            },
            'areaServed': 'Worldwide',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'PPC Advertising Services',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Search Campaign Setup',
                    'description': 'Targeting high-intent keyword search strings.'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'PPC Keyword Bid Management',
                    'description': 'Real-time bidding audits and landing page testing.'
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
                'name': 'What is a good starting budget for Google Ads campaign management?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We recommend a starting ad spend budget of at least $1,500 to $2,000 per month to acquire sufficient data to optimize bids.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Do you build custom landing pages for the ad campaigns?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes. We design and code fast, responsive landing pages to maximize conversion rates and improve Google Quality Scores.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How do you track conversions accurately?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We deploy Tag Manager scripts to track form submissions, phone call clicks, and booking events, filtering out spam or duplicate hits.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is Quality Score in Google Ads and why does it matter?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Quality Score is Google’s rating of ad relevance, expected CTR, and landing page experience. Higher scores reduce CPC fees significantly.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What are negative keywords and how do they save budget?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Negative keywords prevent ads from rendering on unrelated queries, ensuring click budgets are spent exclusively on transaction intent search strings.'
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
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Google Ads</span>
        </nav>

        {/* Hero Title */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Capabilities // Google Ads
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '2rem', color: '#fcfaf8' }}>
            Google Ads Agency &amp; B2B PPC Management Solutions
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', fontWeight: 300, marginBottom: '2.5rem' }}>
            Acquire high-intent customers with NexGrowth. As a specialized Google Ads agency, we offer expert PPC management and Google Ads services designed to scale acquisition ROAS.
          </p>

          {/* Top CTAs (Dual Button Group) */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ padding: '1rem 2rem', background: '#fcfaf8', color: '#12071a', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '0.9rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500 }}>
              Get Custom Quote
            </Link>
            <Link href="/#contact" style={{ padding: '1rem 2rem', border: '1px solid rgba(252,250,248,0.2)', color: '#fcfaf8', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '0.9rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500 }}>
              Talk To Expert
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
              Many agencies set up ad campaigns and let them run on autopilot, leading to wasted spend on low-intent keywords. At NexGrowth, we approach <strong>PPC campaign</strong> architecture with an engineering mindset. We don't rely on automated bid recommendations that waste your click budget on broad-match informational search queries.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              We optimize landing page layouts, design clean conversion tracking, and perform daily bid modifications to ensure your budget is spent on queries that drive revenue. We monitor performance factors such as click-through rates (CTR), quality score ratings, and cost-per-acquisition (CPA) metrics.
            </p>
            <p>
              By aligning your paid ads with fast-loading, highly-targeted landing pages, we improve Google's landing page experience metrics. This directly lowers your average cost-per-click, enabling you to acquire more qualified leads for the same ad spend.
            </p>
          </section>

          {/* Section 2: Google Ads Services */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Google Ads Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We build, manage, and scale comprehensive advertising campaigns across Google networks:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>PPC Search Campaign Management</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We build highly structured keyword ad groups, write engaging ad copy versions, and manage negative keyword directories daily to prevent waste.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Performance Max (PMax) Campaigns</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We manage asset groups, feed audiences, and check target ROAS settings to scale conversions across YouTube, Discover, Gmail, and Google Maps.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Display &amp; Retargeting Campaign Setup</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We design responsive display banners and set up audience retargeting arrays to recapture past landing page visitors who left before converting.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Local Search Ad Campaigns</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We optimize local map campaigns to drive phone calls and navigation queries for physical business locations.
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
              Partnering with an experienced <strong>Google Ads expert</strong> delivers compounding marketing benefits:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Instant Lead Pipelines</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  While organic SEO builds over months, PPC campaigns position your B2B offerings on page one of Google search results instantly.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>High-Intent Clicks</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We target users searching for commercial queries (e.g. "software development company near me"), securing visitors who are ready to buy.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Transparent ROI Metrics</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  Every rupee of ad spend is tracked. We report exact cost-per-lead (CPL) and return-on-ad-spend (ROAS) indicators to keep metrics clear.
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
              We apply a systematic 5-stage setup:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>1. Account &amp; Analytics Audit</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We audit your historical campaign data to identify wasted ad spend, search term anomalies, and tracking issues.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>2. Keyword &amp; Match Type Mapping</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We compile transactional keyword lists and organize them into exact and phrase match parameters.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>3. Landing Page Optimization &amp; Pixel Setup</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We build fast, responsive landing pages and set up Google Tag Manager scripts to track form leads and booking calls accurately.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>4. Ad Copywriting &amp; Launch</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We draft ad headlines and description variations to secure high Quality Scores before launching campaigns.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>5. Optimization &amp; Scale</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We exclude non-converting search terms, test landing pages, adjust device bids, and scale winning campaigns.
                </p>
              </div>
            </div>

            {/* Mid-Page CTA Banner */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '12px', marginTop: '3.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.75rem' }}>
                Unsure why your cost-per-click is climbing?
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(252,250,248,0.6)', marginBottom: '1.5rem' }}>
                Let our certified experts perform a free review of your account setup, bidding models, and landing page quality scores.
              </p>
              <Link href="/#contact" style={{ padding: '0.8rem 2rem', background: '#ff77c9', color: '#161008', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '0.85rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500, display: 'inline-block' }}>
                Book Free Consultation
              </Link>
            </div>
          </section>

          {/* Section 5: Technologies We Use */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Technologies We Use
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              We leverage reliable tracking and software platforms:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)', marginBottom: '1.25rem' }}>
              <a href="https://ads.google.com/home/tools/ads-editor/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Google Ads Editor</a>, <a href="https://tagmanager.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Tag Manager</a> (for custom triggers), Analytics 4, Hotjar, and Optimizely.
            </p>
            <p>
              By leveraging Google Ads Editor and Tag Manager, we manage large campaign setups efficiently and set up secure server-side tracking pipelines to bypass ad blockers.
            </p>
          </section>

          {/* Section 6: Industries We Serve */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Industries We Serve
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              We drive search clicks for companies across major verticals:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>B2B SaaS Portals</strong>: Generating signups for administrative software platforms.</li>
              <li><strong>Professional B2B Services</strong>: Acquiring consult leads for accounting, auditing, and corporate advisory agencies.</li>
              <li><strong>Logistics &amp; Transportation</strong>: Driving quotes for shipping and warehouse operations.</li>
              <li><strong>Enterprise E-commerce</strong>: Driving shopping conversions and catalog sales.</li>
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
                  What is a good starting budget for Google Ads campaign management?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  We recommend a starting ad spend budget of at least $1,500 to $2,000 per month to acquire sufficient data to optimize bids.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Do you build custom landing pages for the ad campaigns?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes. We design and code fast, responsive landing pages to maximize conversion rates and improve Google Quality Scores.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  How do you track conversions accurately?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  We deploy Tag Manager scripts to track form submissions, phone call clicks, and booking events, filtering out spam or duplicate hits.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  What is Quality Score in Google Ads and why does it matter?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Quality Score is Google’s rating of ad relevance, expected CTR, and landing page experience. Higher scores reduce CPC fees significantly.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  What are negative keywords and how do they save budget?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Negative keywords prevent ads from rendering on unrelated queries, ensuring click budgets are spent exclusively on transaction intent search strings.
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
              Also looking to target social networks? Explore our <Link href="/services/meta-ads" style={{ color: 'var(--current-color-40, #ff77c9)', textDecoration: 'underline' }}>Facebook &amp; Meta Ads</Link> services.
            </p>
            <p style={{ color: 'rgba(252,250,248,0.6)', marginBottom: '2.5rem', fontWeight: 300 }}>
              Ready to partner with an accredited <strong>Google Ads agency</strong>? Submit your requirements to discuss PPC budget options and get a custom quote.
            </p>
            <Link href="/#contact" style={{ padding: '1.2rem 2.8rem', background: '#fcfaf8', color: '#12071a', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '1rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500 }}>
              Get Paid Ads Quote
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}

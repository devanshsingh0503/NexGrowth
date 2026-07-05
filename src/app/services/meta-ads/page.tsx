import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Facebook Ads Agency | Meta Ads Management | NexGrowth',
  description: 'Acquire B2B clients with NexGrowth. As a premier Facebook Ads agency, we specialize in Meta Ads management and Instagram Ads expert creatives that scale ROAS.',
  alternates: {
    canonical: 'https://nexgrowth.com/services/meta-ads',
  },
  openGraph: {
    title: 'Facebook Ads Agency | Meta Ads Management | NexGrowth',
    description: 'Acquire B2B clients with NexGrowth. As a premier Facebook Ads agency, we specialize in Meta Ads management and Instagram Ads expert creatives that scale ROAS.',
    url: 'https://nexgrowth.com/services/meta-ads',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Facebook Ads Agency Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Ads Agency | Meta Ads Management | NexGrowth',
    description: 'Acquire B2B clients with NexGrowth. As a premier Facebook Ads agency, we specialize in Meta Ads management and Instagram Ads expert creatives that scale ROAS.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function MetaAdsServicePage() {
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
                'name': 'Meta Ads',
                'item': 'https://nexgrowth.com/services/meta-ads'
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
            'serviceType': 'Meta & Social Media Advertising Management',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'NexGrowth',
              'url': 'https://nexgrowth.com'
            },
            'areaServed': 'Worldwide',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Meta Advertising Services',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Facebook Marketing Services',
                    'description': 'Bespoke demographics targeting and audience filters.'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Instagram Ad Creative Setup',
                    'description': 'Designing high-converting video and image layouts.'
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
                'name': 'What is the Meta Conversions API (CAPI) and do you configure it?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes. Meta CAPI links server-side events directly to Meta’s ad server, bypassing browser ad-blockers to track conversions accurately.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How often should ad creatives be refreshed?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'To avoid ad fatigue (users ignoring repetitive banners), we recommend updating ad creatives every 2 to 3 weeks.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What starting budget is recommended for Meta Ads?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'A daily budget of $30 to $50 is a solid starting point to test multiple ad creatives and identify winning audience segments.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is lookalike audience targeting in Meta Ads?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Lookalike targeting uses Meta’s machine learning algorithm to find new prospects whose characteristics match those of your current best buyers.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How do you structure custom retargeting campaigns?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We target users who viewed your pricing page or products but left before converting, showing them custom video client reviews and social proof.'
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
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Meta Ads</span>
        </nav>

        {/* Hero Title */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Capabilities // Meta Ads
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '2rem', color: '#fcfaf8' }}>
            Facebook Ads Agency &amp; B2B Meta Campaign Management
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', fontWeight: 300, marginBottom: '2.5rem' }}>
            Acquire B2B clients with NexGrowth. As a premier Facebook Ads agency, we specialize in Meta Ads management and Instagram Ads expert creatives that scale ROAS.
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
              Scaling display advertising on Facebook and Instagram requires more than simply boosting posts. You need a dedicated B2B display campaign partner that understands creative iteration, audience testing, and data tracking. Lazy ad setups and generic, non-optimized layouts cause ad fatigue, resulting in high acquisition costs.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              At NexGrowth, we build custom conversion paths that bridge high-impact social display ads with optimized, fast-loading landing pages, ensuring maximum efficiency. We focus on hook rates, CTR metrics, and return on ad spend (ROAS) indicators.
            </p>
            <p>
              By utilizing the Meta Conversions API (CAPI), we set up server-to-server tracking pipelines that bypass standard browser ad-blockers. This guarantees that your conversion data remains 100% accurate, allowing Meta's algorithms to optimize campaign delivery effectively.
            </p>
          </section>

          {/* Section 2: Facebook & Instagram Meta Ads Services */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Facebook &amp; Instagram Meta Ads Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We build, manage, and optimize scalable paid acquisition campaigns across Meta networks:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Meta Ads Campaign Setup &amp; Structuring</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We set up business accounts, configure pixel triggers, verify custom domains, and pace media budgets across ad sets.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>B2B Custom Demographic Targeting</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We target decision-makers based on industry classifications, company sizes, job titles, and lookalike list metrics.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Social Ad Creative Production</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We design high-converting visual assets, write ad copy versions, and structure carousel, story, and video overlay assets.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Dynamic Product Retargeting</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We set up dynamic catalog syncs to display viewed products to interested users, bringing them back to purchase.
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
              Partnering with an <strong>Instagram Ads expert</strong> helps you turn display clicks into revenue:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Targeted Brand Reach</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  Meta ads allow you to display your B2B offerings directly to people matching your ideal client profile.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Visual Storytelling</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  Showcase software capabilities, client reviews, and product features using engaging video formats.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Lookalike Audience Scale</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  Meta's machine learning finds new prospects similar to your existing leads, enabling reliable growth.
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
              We follow a rigorous conversion-focused workflow:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>1. Pixel &amp; API Integration</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We set up secure Meta Pixel tracking APIs to capture conversion events safely, resolving standard browser tracking limitations.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>2. Audience Research &amp; Segmentation</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We define targeting variables, build lookalike source parameters, and segment cold prospect pools from past visitors.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>3. Creative Prototyping &amp; Copy</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We design graphic templates, draft video hooks, write ad descriptions, and design conversion-optimized landing pages.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>4. Campaign Setup &amp; Launch</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We set up campaign layouts, divide testing budgets, configure bidding parameters, and launch the first ad sets.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>5. Iterative Scaling &amp; Optimization</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We stop low-performing assets, shift budgets to winning demographics, test new copy variations, and scale.
                </p>
              </div>
            </div>

            {/* Mid-Page CTA Banner */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '12px', marginTop: '3.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.75rem' }}>
                Want to audit your current social ad creatives?
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(252,250,248,0.6)', marginBottom: '1.5rem' }}>
                Set up a creative review with our display experts to check visual copy, hook angles, and funnel drop-off stats.
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
              We leverage modern media management and testing tools:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)', marginBottom: '1.25rem' }}>
              Meta Ads Manager, Conversion API (CAPI) integrations, Canva, Figma (for creative drafts), and Google Analytics 4.
            </p>
            <p>
              By leveraging Meta's Conversion API and GTM events, we synchronize user actions from backend databases directly with Facebook, securing accurate campaign attribution data.
            </p>
          </section>

          {/* Section 6: Industries We Serve */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Industries We Serve
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              We design display campaigns for businesses in major verticals:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>B2B SaaS platforms</strong>: Acquiring trial signups from business managers.</li>
              <li><strong>E-commerce</strong>: Scaling D2C sales with responsive product catalog displays.</li>
              <li><strong>Real Estate Developers</strong>: Capturing high-intent buyer leads with custom video tours.</li>
              <li><strong>Professional B2B Services</strong>: Connecting consulting agencies with enterprise corporate buyers.</li>
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
                  What is the Meta Conversions API (CAPI) and do you configure it?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes. Meta CAPI links server-side events directly to Meta’s ad server, bypassing browser ad-blockers to track conversions accurately.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  How often should ad creatives be refreshed?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  To avoid ad fatigue (users ignoring repetitive banners), we recommend updating ad creatives every 2 to 3 weeks.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  What starting budget is recommended for Meta Ads?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  A daily budget of $30 to $50 is a solid starting point to test multiple ad creatives and identify winning audience segments.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  What is lookalike audience targeting in Meta Ads?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Lookalike targeting uses Meta’s machine learning algorithm to find new prospects whose characteristics match those of your current best buyers.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  How do you structure custom retargeting campaigns?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  We target users who viewed your pricing page or products but left before converting, showing them custom video client reviews and social proof.
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
              Need organic branding support too? Explore our <Link href="/services/social-media-marketing" style={{ color: 'var(--current-color-40, #ff77c9)', textDecoration: 'underline' }}>Social Media Management</Link> services.
            </p>
            <p style={{ color: 'rgba(252,250,248,0.6)', marginBottom: '2.5rem', fontWeight: 300 }}>
              Ready to scale displays with a premier B2B <strong>Facebook Ads agency</strong>? Submit your requirements to discuss campaign strategies and get a custom quote.
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

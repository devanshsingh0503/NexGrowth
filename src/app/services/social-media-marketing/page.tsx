import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency | SMM Services | NexGrowth',
  description: 'Scale SMM content calendar campaigns with NexGrowth. As a leading social media marketing agency, we offer expert content creation and organic growth services.',
  alternates: {
    canonical: 'https://nexgrowth.com/services/social-media-marketing',
  },
  openGraph: {
    title: 'Social Media Marketing Agency | SMM Services | NexGrowth',
    description: 'Scale SMM content calendar campaigns with NexGrowth. As a leading social media marketing agency, we offer expert content creation and organic growth services.',
    url: 'https://nexgrowth.com/services/social-media-marketing',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Social Media Marketing SMM Agency Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency | SMM Services | NexGrowth',
    description: 'Scale SMM content calendar campaigns with NexGrowth. As a leading social media marketing agency, we offer expert content creation and organic growth services.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function SocialMediaMarketingServicePage() {
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
                'name': 'Social Media Marketing',
                'item': 'https://nexgrowth.com/services/social-media-marketing'
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
            'serviceType': 'Social Media Marketing & Management Services',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'NexGrowth',
              'url': 'https://nexgrowth.com'
            },
            'areaServed': 'Worldwide',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Social Media Marketing Services',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Social Media Management',
                    'description': 'Audits, content calendars planning, and scheduling.'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Instagram & LinkedIn Growth',
                    'description': 'Custom designs, copywriting, and profile optimization.'
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
                'name': 'What is a social media content calendar and how does it organize posting?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'A content calendar maps out visual assets, copy drafts, and publish times weeks in advance, ensuring consistent presence across LinkedIn and Instagram.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Do SMM campaigns include professional copy and graphic design?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes. We provide complete copy drafts, graphic designs matching brand palettes, and video formatting optimized for social platforms.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How do you measure social media marketing ROI?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We track engagement rates, profile views, outbound site traffic, and inbound lead queries using custom attribution hooks.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How often do you publish posts across channels?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Posting frequency depends on industry trends. We typically schedule 3 to 5 high-value posts per week to maximize reach without flooding feeds.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Which social platforms should my business prioritize?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'B2B companies benefit most from LinkedIn and Twitter (X) campaigns, while e-commerce and retail brands drive sales on Instagram and TikTok.'
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
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>SMM</span>
        </nav>

        {/* Hero Title */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Capabilities // Social Media Marketing
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '2rem', color: '#fcfaf8' }}>
            Social Media Marketing Agency &amp; B2B SMM Services
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', fontWeight: 300, marginBottom: '2.5rem' }}>
            Scale organic content campaigns with NexGrowth. As a leading social media marketing agency, we offer expert content creation and organic growth services.
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
              Organic brand visibility on social networks requires more than sharing occasional quotes or updates. You need a dedicated B2B content marketing partner that understands SMM campaign layouts, audience patterns, and creative scheduling. Lazy posting calendars and generic templates cause feed fatigue, resulting in low follower engagement.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              At NexGrowth, we approach organic growth with an editorial framework. We design custom graphic templates and write professional copy designed to build brand authority. We track metrics like profile view counts, click-through rates, and inbound lead queries.
            </p>
            <p>
              By aligning your social campaigns with your technical site optimizations, we drive a pipeline of high-intent search traffic. This integrated marketing approach ensures that followers turn into qualified sales opportunities.
            </p>
          </section>

          {/* Section 2: Social Media Marketing Services */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Social Media Marketing Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We build, manage, and optimize scalable paid and organic campaigns across social platforms:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>SMM Campaign Setup &amp; Structuring</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We set up business profiles, verify domains, compile custom hashtags, configure link overlays, and analyze competitor strategies.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Content Calendar Planning</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We map out graphic assets, copy drafts, and publish times weeks in advance, ensuring consistent presence across LinkedIn and Instagram.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Social Copywriting &amp; Asset Creation</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We design graphic templates, draft video hooks, write ad descriptions, and design conversion-optimized landing pages.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Growth Audits &amp; Optimization</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We exclude non-converting search terms, shift budgets to winning demographics, test new copy variations, and scale.
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
              Partnering with an SMM specialist helps you turn social clicks into revenue:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Targeted Brand Reach</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  SMM services allow you to display your B2B offerings directly to people matching your ideal client profile.
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
              We follow a rigorous, conversion-focused workflow:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>1. SMM Campaign Setup &amp; Audit</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We set up business profiles, verify domains, compile custom hashtags, configure link overlays, and analyze competitor strategies.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>2. Content Calendar Planning</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We map out graphic assets, copy drafts, and publish times weeks in advance, ensuring consistent presence across LinkedIn and Instagram.
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
                Want to audit your current social media calendars?
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
              Meta Ads Manager, Conversions API (CAPI) integrations, Canva, Figma (for creative drafts), and Google Analytics 4.
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
                  What is a social media content calendar and how does it organize posting?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  A content calendar maps out visual assets, copy drafts, and publish times weeks in advance, ensuring consistent presence across LinkedIn and Instagram.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Do SMM campaigns include professional copy and graphic design?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes. We provide complete copy drafts, graphic designs matching brand palettes, and video formatting optimized for social platforms.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  How do you measure social media marketing ROI?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  We track engagement rates, profile views, outbound site traffic, and inbound lead queries using custom attribution hooks.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  How often do you publish posts across channels?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Posting frequency depends on industry trends. We typically schedule 3 to 5 high-value posts per week to maximize reach without flooding feeds.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Which social platforms should my business prioritize?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  B2B companies benefit most from LinkedIn and Twitter (X) campaigns, while e-commerce and retail brands drive sales on Instagram and TikTok.
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
              Need organic SEO support too? Explore our <Link href="/services/seo" style={{ color: 'var(--current-color-40, #ff77c9)', textDecoration: 'underline' }}>Technical SEO Services</Link>.
            </p>
            <p style={{ color: 'rgba(252,250,248,0.6)', marginBottom: '2.5rem', fontWeight: 300 }}>
              Ready to partner with a trusted B2B <strong>social media marketing agency</strong>? Submit your requirements to discuss SMM content calendars and get a custom quote.
            </p>
            <Link href="/#contact" style={{ padding: '1.2rem 2.8rem', background: '#fcfaf8', color: '#12071a', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '1rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500 }}>
              Get Custom SMM Quote
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}

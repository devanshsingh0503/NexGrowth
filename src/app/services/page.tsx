import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency | B2B Services | NexGrowth',
  description: 'Explore NexGrowth capabilities. We design and engineer custom website development, SaaS web applications, technical SEO, PPC, and organic social marketing.',
  alternates: {
    canonical: 'https://nexgrowth.in/services',
  },
  openGraph: {
    title: 'Digital Marketing Agency | B2B Services | NexGrowth',
    description: 'Explore NexGrowth capabilities. We design and engineer custom website development, SaaS web applications, technical SEO, PPC, and organic social marketing.',
    url: 'https://nexgrowth.in/services',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'NexGrowth Services Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency | B2B Services | NexGrowth',
    description: 'Explore NexGrowth capabilities. We design and engineer custom website development, SaaS web applications, technical SEO, PPC, and organic social marketing.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

const serviceItems = [
  {
    num: '01',
    shortTag: 'WEB DEV',
    title: 'B2B Custom Website Development',
    keyword: 'Website Development Company',
    desc: 'Bespoke corporate websites and responsive layouts engineered for conversion, search visibility, and maximum brand credibility.',
    href: '/services/web-development',
  },
  {
    num: '02',
    shortTag: 'SAAS APPS',
    title: 'Custom Web Application Development',
    keyword: 'Software Development Company',
    desc: 'Tailored SaaS dashboards, customer portal systems, database workflows, and custom enterprise software engineered for business growth.',
    href: '/services/software-development',
  },
  {
    num: '03',
    shortTag: 'SHOPIFY & E-COM',
    title: 'Shopify & E-Commerce Development',
    keyword: 'Shopify Website Development',
    desc: 'Custom Shopify Liquid themes, headless Next.js commerce, payment gateway setup, and high-converting checkout funnels.',
    href: '/services/shopify-development',
  },
  {
    num: '04',
    shortTag: 'LANDING PAGES',
    title: 'High-Converting Landing Pages',
    keyword: 'Landing Page Design Agency',
    desc: 'PPC and paid social landing pages built with sub-second Next.js speed, conversion copywriting, and full tracking attribution.',
    href: '/services/landing-page-development',
  },
  {
    num: '05',
    shortTag: 'REDESIGN',
    title: 'Website Redesign & Modernization',
    keyword: 'Website Redesign Company',
    desc: 'Transforming slow, outdated websites into modern digital platforms with 95+ Core Web Vitals and zero loss in SEO rankings.',
    href: '/services/website-redesign',
  },
  {
    num: '06',
    shortTag: 'TECHNICAL SEO',
    title: 'Search Engine Optimisation',
    keyword: 'Technical SEO Services',
    desc: 'Metrics-driven organic visibility campaigns utilizing technical SEO audits, on-page optimization, content strategy, and authority building.',
    href: '/services/seo',
  },
  {
    num: '07',
    shortTag: 'GOOGLE ADS',
    title: 'Google Ads & PPC Management',
    keyword: 'Google Ads Agency',
    desc: 'Data-driven paid search acquisition setups, keyword bid management, and high-converting copy targeting direct-response ROAS growth.',
    href: '/services/google-ads',
  },
  {
    num: '08',
    shortTag: 'META ADS',
    title: 'Facebook & Instagram Meta Ads',
    keyword: 'Facebook Ads Agency',
    desc: 'Targeted demographic campaigns, creative display setups, retargeting funnels, and performance monitoring across social networks.',
    href: '/services/meta-ads',
  },
  {
    num: '09',
    shortTag: 'SMM & CARE',
    title: 'Social Media Marketing (SMM)',
    keyword: 'Social Media Marketing Agency',
    desc: 'Complete social media management, organic Instagram marketing, content scheduling, and community engagement to build brand trust.',
    href: '/services/social-media-marketing',
  },
];

export default function ServicesDirectoryPage() {
  return (
    <div style={{ backgroundColor: '#f4f2ea', color: '#171916', minHeight: '100vh', position: 'relative' }}>
      {/* JSON-LD breadcrumb script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://nexgrowth.in',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://nexgrowth.in/services',
              },
            ],
          }),
        }}
      />

      {/* Global Navbar */}
      <Navbar />

      <main style={{ paddingTop: 'clamp(110px, 14vh, 150px)', paddingBottom: '7rem' }}>
        <div className="flow-container" style={{ maxWidth: '1180px' }}>
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            style={{
              marginBottom: '2.5rem',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#50534b',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Link href="/" style={{ color: '#50534b', transition: 'color 0.2s' }}>
              Home
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: '#171916', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e5ff3d', display: 'inline-block' }} />
              Services Directory
            </span>
          </nav>

          {/* Hero title */}
          <div style={{ marginBottom: '4rem', maxWidth: '840px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="flow-tag">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#171916' }} />
                NEXGROWTH CAPABILITIES
              </span>
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                lineHeight: 1.0,
                fontWeight: 700,
                color: '#171916',
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
              }}
            >
              CUSTOM B2B SOFTWARE &amp; DIGITAL MARKETING SERVICES
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '1.1875rem',
                lineHeight: 1.6,
                color: '#50534b',
              }}
            >
              We design, engineer, and optimize custom web applications, responsive websites, and user acquisition pipelines. Select a service below to explore specialized capabilities, technical blueprints, and delivery roadmaps.
            </p>
          </div>

          {/* Grid of services in FlowPilot white card style */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '2rem',
              marginBottom: '5rem',
            }}
          >
            {serviceItems.map((s, idx) => (
              <Link
                key={idx}
                href={s.href}
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(23, 25, 22, 0.08)',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: '#50534b',
                      }}
                    >
                      {s.num} / {s.shortTag}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#171916',
                        backgroundColor: '#f4f2ea',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(23, 25, 22, 0.08)',
                      }}
                    >
                      {s.keyword}
                    </span>
                  </div>

                  <h2
                    className="font-display"
                    style={{
                      fontSize: '1.65rem',
                      lineHeight: 1.15,
                      fontWeight: 700,
                      color: '#171916',
                      letterSpacing: '-0.02em',
                      marginBottom: '1rem',
                    }}
                  >
                    {s.title}
                  </h2>

                  <p
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      color: '#50534b',
                      marginBottom: '2rem',
                    }}
                  >
                    {s.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(23, 25, 22, 0.08)',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#171916',
                  }}
                >
                  <span>Explore Service</span>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#171916',
                      color: '#e5ff3d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                    }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Call to Action Card */}
          <div
            style={{
              backgroundColor: '#171916',
              color: '#f4f2ea',
              borderRadius: '24px',
              border: '1px solid rgba(244, 242, 234, 0.12)',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              textAlign: 'center',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <span className="flow-tag-dark">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e5ff3d' }} />
                START A CONVERSATION
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.05,
                fontWeight: 700,
                color: '#f4f2ea',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              READY TO SCALE YOUR DIGITAL PRESENCE?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '1.05rem',
                lineHeight: 1.6,
                color: 'rgba(244, 242, 234, 0.7)',
                maxWidth: '560px',
                margin: '0 auto 2rem',
              }}
            >
              Let&apos;s discuss how our technical engineering and conversion focus can accelerate your business goals.
            </p>
            <Link href="/#contact" className="btn-primary-lime">
              Discuss Your B2B Project →
            </Link>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Discovery Call Modal */}
      <BookCallModal />
    </div>
  );
}

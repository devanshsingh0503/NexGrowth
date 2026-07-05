import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency | B2B Services | NexGrowth',
  description: 'Explore NexGrowth capabilities. We design and engineer custom website development, SaaS web applications, technical SEO, PPC, and organic social marketing.',
  alternates: {
    canonical: 'https://nexgrowth.com/services',
  },
  openGraph: {
    title: 'Digital Marketing Agency | B2B Services | NexGrowth',
    description: 'Explore NexGrowth capabilities. We design and engineer custom website development, SaaS web applications, technical SEO, PPC, and organic social marketing.',
    url: 'https://nexgrowth.com/services',
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
    title: 'B2B Custom Website Development',
    keyword: 'Website Development Company',
    desc: 'Bespoke corporate websites and responsive layouts engineered for conversion, search visibility, and maximum brand credibility.',
    href: '/services/web-development',
  },
  {
    num: '02',
    title: 'Custom Web Application Development',
    keyword: 'Software Development Company',
    desc: 'Tailored SaaS dashboards, customer portal systems, database workflows, and custom enterprise software engineered for business growth.',
    href: '/services/software-development',
  },
  {
    num: '03',
    title: 'Search Engine Optimisation',
    keyword: 'Technical SEO Services',
    desc: 'Metrics-driven organic visibility campaigns utilizing technical SEO audits, on-page optimization, content strategy, and authority building.',
    href: '/services/seo',
  },
  {
    num: '04',
    title: 'Google Ads & PPC Management',
    keyword: 'Google Ads Agency',
    desc: 'Data-driven paid search acquisition setups, keyword bid management, and high-converting copy targeting direct-response ROAS growth.',
    href: '/services/google-ads',
  },
  {
    num: '05',
    title: 'Facebook & Instagram Meta Ads',
    keyword: 'Facebook Ads Agency',
    desc: 'Targeted demographic campaigns, creative display setups, retargeting funnels, and performance monitoring across social networks.',
    href: '/services/meta-ads',
  },
  {
    num: '06',
    title: 'Social Media Marketing (SMM)',
    keyword: 'Social Media Marketing Agency',
    desc: 'Complete social media management, organic Instagram marketing, content scheduling, and community engagement to build brand trust.',
    href: '/services/social-media-marketing',
  },
];

export default function ServicesDirectoryPage() {
  return (
    <div style={{ background: '#12071a', color: '#fcfaf8', minHeight: '100vh', padding: '12rem 2rem 8rem' }}>
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
              }
            ]
          })
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
          <Link href="/" style={{ color: 'rgba(252,250,248,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
          <span style={{ margin: '0 8px', color: 'rgba(252,250,248,0.3)' }}>&gt;</span>
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Services</span>
        </nav>

        {/* Hero title */}
        <div style={{ marginBottom: '6rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            NEXGROWTH CAPABILITIES
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.05', maxWidth: '800px', marginBottom: '2rem', fontFamily: 'GT-Planar, sans-serif' }}>
            Custom B2B Software &amp; Digital Marketing Services
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', maxWidth: '720px', fontFamily: 'GT-Planar, sans-serif', fontWeight: 300 }}>
            We design, engineer, and optimize custom web applications, responsive websites, and user acquisition pipelines. Select a service to view specialized capabilities and case studies.
          </p>
        </div>

        {/* Grid of services */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '6rem' }}>
          {serviceItems.map((s, idx) => (
            <Link 
              key={idx} 
              href={s.href}
              style={{
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <span style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'rgba(252,250,248,0.3)' }}>
                    [{s.num}]
                  </span>
                  <span style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--current-color-40, #ff77c9)', background: 'rgba(255,119,201,0.08)', padding: '2px 8px', borderRadius: '4px' }}>
                    {s.keyword}
                  </span>
                </div>
                <h2 style={{ fontFamily: 'GT-Planar, sans-serif', fontSize: '1.7rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'rgba(252,250,248,0.6)', fontWeight: 300, marginBottom: '2rem' }}>
                  {s.desc}
                </p>
              </div>
              <span style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.8rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Explore Service &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Closing Contact section */}
        <div style={{ borderTop: '1px solid rgba(252,250,248,0.1)', paddingTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'GT-Planar, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
            Ready to scale your digital presence?
          </h3>
          <p style={{ color: 'rgba(252,250,248,0.6)', maxWidth: '500px', marginBottom: '2.5rem', fontWeight: 300 }}>
            Let's discuss how our technical expertise can align with your operational and growth goals.
          </p>
          <Link href="/#contact" style={{ padding: '1.2rem 2.8rem', background: '#fcfaf8', color: '#12071a', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '1rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500 }}>
            Discuss Your B2B Project
          </Link>
        </div>
      </div>
    </div>
  );
}

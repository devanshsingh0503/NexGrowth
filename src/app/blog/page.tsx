import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'B2B Web Engineering & SEO Insights Blog | NexGrowth',
  description: 'Read the latest guides, checklists, and insights on building high-performance B2B websites, SaaS dashboards, and technical SEO campaigns.',
  alternates: {
    canonical: 'https://nexgrowth.com/blog',
  },
};

export default function BlogPage() {
  const posts = [
    {
      title: 'The Checklist for Building High-Converting B2B Websites',
      excerpt: 'Discover the exact design, copy, and performance benchmarks that turn anonymous traffic into qualified enterprise sales opportunities.',
      date: 'July 05, 2026',
      readTime: '6 min read',
      tag: 'Web Design',
      color: 'var(--current-color-40, #ff77c9)'
    },
    {
      title: 'How Much Does Website Development Cost in India?',
      excerpt: 'A comprehensive breakdown of custom web development costs, developer rates, and tech stacks for Indian startups and global brands.',
      date: 'July 03, 2026',
      readTime: '7 min read',
      tag: 'Pricing Guides',
      color: '#ffd28a'
    },
    {
      title: 'Website vs Landing Page: Which One Does Your Business Need?',
      excerpt: 'Learn the core differences between multi-page brand hubs and high-converting single-page landing pages built for PPC campaigns.',
      date: 'June 29, 2026',
      readTime: '5 min read',
      tag: 'Marketing Strategy',
      color: '#c8faae'
    },
    {
      title: '10 SEO Mistakes Small Businesses Make',
      excerpt: 'Avoid these critical search mistakes covering broken links, missing canonical elements, incorrect heading structures, and zero sitemaps.',
      date: 'June 21, 2026',
      readTime: '8 min read',
      tag: 'SEO Optimization',
      color: 'var(--current-color-40, #ff77c9)'
    },
    {
      title: 'Google Ads vs Facebook Ads: Which Is Better?',
      excerpt: 'Compare high-intent Search advertising and demographic-targeted display campaigns to maximize marketing acquisition ROAS.',
      date: 'June 15, 2026',
      readTime: '9 min read',
      tag: 'Paid Ads',
      color: '#ffd28a'
    },
    {
      title: 'Why Every Local Business Needs a Website in 2026',
      excerpt: 'Understand how regional search visibility, Google Map listings, and mobile responsive pages drive local business leads.',
      date: 'June 10, 2026',
      readTime: '6 min read',
      tag: 'Local SEO',
      color: '#c8faae'
    },
    {
      title: 'How Custom SaaS Dashboards Streamline Enterprise Operations',
      excerpt: 'A deep dive into UX mapping, integrations, and fast data rendering for internal platforms that save teams hours of manual workflow.',
      date: 'May 14, 2026',
      readTime: '8 min read',
      tag: 'Engineering',
      color: '#c8faae'
    },
    {
      title: 'The Technical SEO Checklist for Next.js Applications in 2026',
      excerpt: 'Configure robots, sitemaps, semantic headings, and JSON-LD schema objects to dominate Google rankings with modern web technology.',
      date: 'April 02, 2026',
      readTime: '10 min read',
      tag: 'SEO Optimization',
      color: '#ffd28a'
    }
  ];

  return (
    <div style={{ background: '#161008', minHeight: '100vh', color: '#fcfaf8', fontFamily: 'GT-Planar, Inter, sans-serif', padding: '6rem 2rem' }}>
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
                'name': 'Blog',
                'item': 'https://nexgrowth.com/blog'
              }
            ]
          })
        }}
      />
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Navigation / Header back home */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6rem' }}>
          <Link 
            href="/" 
            style={{ 
              fontFamily: 'GT-Planar, sans-serif', 
              fontSize: '1.4rem', 
              fontWeight: 700, 
              color: 'var(--current-color-40, #ff77c9)', 
              textDecoration: 'none', 
              letterSpacing: '-0.04em' 
            }}
          >
            NEXGROWTH
          </Link>
          {/* Breadcrumbs */}
          <nav 
            aria-label="Breadcrumb"
            style={{ 
              fontFamily: 'ABCReproMono, monospace', 
              fontSize: '0.8rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em',
              color: 'rgba(252,250,248,0.5)'
            }}
          >
            <Link href="/" style={{ color: 'rgba(252,250,248,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
            <span style={{ margin: '0 8px', color: 'rgba(252,250,248,0.3)' }}>&gt;</span>
            <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Blog</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div style={{ marginBottom: '5rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            ENGINEERING &amp; GROWTH INSIGHTS
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.05', maxWidth: '800px', marginBottom: '2rem' }}>
            B2B Custom Software &amp; SEO Publication
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(252,250,248,0.7)', maxWidth: '640px', lineHeight: '1.6' }}>
            Practical engineering playbooks, website conversion strategies, and search engine optimization guides for high-growth businesses.
          </p>
        </div>

        {/* Articles List Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', margin: '4rem 0' }}>
          {posts.map((post, idx) => (
            <article 
              key={idx} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                background: 'rgba(255, 255, 255, 0.02)', 
                border: '1px solid rgba(255, 255, 255, 0.05)', 
                borderRadius: '16px', 
                padding: '2.5rem 2rem', 
                transition: 'transform 0.3s, border-color 0.3s' 
              }}
            >
              <div>
                <span style={{ 
                  fontFamily: 'ABCReproMono, monospace', 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  color: post.color, 
                  border: `1px solid ${post.color}`, 
                  padding: '4px 10px', 
                  borderRadius: '4px',
                  letterSpacing: '0.08em',
                  display: 'inline-block',
                  marginBottom: '2rem'
                }}>
                  {post.tag}
                </span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '1.2rem', lineHeight: '1.25', letterSpacing: '-0.02em' }}>
                  {post.title}
                </h2>
                <p style={{ color: 'rgba(252,250,248,0.65)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                  {post.excerpt}
                </p>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(252,250,248,0.45)', fontFamily: 'ABCReproMono, monospace' }}>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action card linking back to home services and contact */}
        <div style={{ background: '#1c150b', border: '1px solid rgba(252,250,248,0.06)', borderRadius: '20px', padding: '4rem 3rem', textAlign: 'center', marginTop: '6rem' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Ready to scale your digital presence?
          </h2>
          <p style={{ color: 'rgba(252,250,248,0.7)', maxWidth: '580px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            We design, engineer, and optimize custom B2B web applications and software platforms that drive conversions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/#contact" 
              style={{ 
                padding: '1.2rem 2.6rem', 
                fontSize: '1.1rem', 
                fontFamily: 'ABCReproMono, monospace',
                textTransform: 'uppercase',
                fontWeight: 500,
                borderRadius: '6px', 
                background: '#fcfaf8', 
                color: '#161008', 
                textDecoration: 'none' 
              }}
            >
              Get In Touch
            </Link>
            <Link 
              href="/#services" 
              style={{ 
                padding: '1.2rem 2.6rem', 
                fontSize: '1.1rem', 
                fontFamily: 'ABCReproMono, monospace',
                textTransform: 'uppercase',
                fontWeight: 500,
                borderRadius: '6px', 
                background: 'rgba(252,250,248,0.05)', 
                color: '#fff', 
                border: '1px solid rgba(252,250,248,0.15)',
                textDecoration: 'none' 
              }}
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid rgba(252,250,248,0.1)', marginTop: '6rem', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.9rem', color: 'rgba(252,250,248,0.4)' }}>
          <p>© 2026 NexGrowth. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms-and-condition" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

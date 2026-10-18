import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';

export const metadata: Metadata = {
  title: 'B2B Web Engineering & SEO Insights Blog | NexGrowth',
  description: 'Read the latest guides, checklists, and insights on building high-performance B2B websites, SaaS dashboards, and technical SEO campaigns.',
  alternates: {
    canonical: 'https://nexgrowth.in/blog',
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
    },
    {
      title: 'How Much Does Website Development Cost in India?',
      excerpt: 'A comprehensive breakdown of custom web development costs, developer rates, and tech stacks for Indian startups and global brands.',
      date: 'July 03, 2026',
      readTime: '7 min read',
      tag: 'Pricing Guides',
    },
    {
      title: 'Website vs Landing Page: Which One Does Your Business Need?',
      excerpt: 'Learn the core differences between multi-page brand hubs and high-converting single-page landing pages built for PPC campaigns.',
      date: 'June 29, 2026',
      readTime: '5 min read',
      tag: 'Marketing Strategy',
    },
    {
      title: '10 SEO Mistakes Small Businesses Make',
      excerpt: 'Avoid these critical search mistakes covering broken links, missing canonical elements, incorrect heading structures, and zero sitemaps.',
      date: 'June 21, 2026',
      readTime: '8 min read',
      tag: 'SEO Optimization',
    },
    {
      title: 'Google Ads vs Facebook Ads: Which Is Better?',
      excerpt: 'Compare high-intent Search advertising and demographic-targeted display campaigns to maximize marketing acquisition ROAS.',
      date: 'June 15, 2026',
      readTime: '9 min read',
      tag: 'Paid Ads',
    },
    {
      title: 'Why Every Local Business Needs a Website in 2026',
      excerpt: 'Understand how regional search visibility, Google Map listings, and mobile responsive pages drive local business leads.',
      date: 'June 10, 2026',
      readTime: '6 min read',
      tag: 'Local SEO',
    },
    {
      title: 'How Custom SaaS Dashboards Streamline Enterprise Operations',
      excerpt: 'A deep dive into UX mapping, integrations, and fast data rendering for internal platforms that save teams hours of manual workflow.',
      date: 'May 14, 2026',
      readTime: '8 min read',
      tag: 'Engineering',
    },
    {
      title: 'The Technical SEO Checklist for Next.js Applications in 2026',
      excerpt: 'Configure robots, sitemaps, semantic headings, and JSON-LD schema objects to dominate Google rankings with modern web technology.',
      date: 'April 02, 2026',
      readTime: '10 min read',
      tag: 'SEO Optimization',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f4f2ea', color: '#171916', minHeight: '100vh', position: 'relative' }}>
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
                name: 'Blog',
                item: 'https://nexgrowth.in/blog',
              },
            ],
          }),
        }}
      />

      {/* Global FlowPilot Navbar */}
      <Navbar />

      <main style={{ paddingTop: 'clamp(110px, 14vh, 150px)', paddingBottom: '7rem' }}>
        <div className="flow-container" style={{ maxWidth: '1120px' }}>
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
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <Link href="/" style={{ color: '#50534b', transition: 'color 0.2s' }}>
              Home
            </Link>
            <span style={{ opacity: 0.35 }}>/</span>
            <span style={{ color: '#171916', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e5ff3d', display: 'inline-block' }} />
              Blog
            </span>
          </nav>

          {/* Hero Header */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="flow-tag">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#171916' }} />
                Engineering &amp; Growth Insights
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
              B2B Custom Software &amp; SEO Publication
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '1.1875rem',
                lineHeight: 1.6,
                color: '#50534b',
                maxWidth: '720px',
              }}
            >
              Practical engineering playbooks, website conversion strategies, and search engine optimization guides for high-growth businesses.
            </p>
          </div>

          {/* Articles Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
              marginBottom: '5rem',
            }}
          >
            {posts.map((post, idx) => (
              <article
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid rgba(23, 25, 22, 0.08)',
                  padding: 'clamp(2rem, 3.5vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 30px rgba(23, 25, 22, 0.03)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <div>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        backgroundColor: '#f4f2ea',
                        color: '#171916',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '999px',
                        border: '1px solid rgba(23, 25, 22, 0.08)',
                        display: 'inline-block',
                      }}
                    >
                      {post.tag}
                    </span>
                  </div>

                  <h2
                    className="font-display"
                    style={{
                      fontSize: '1.45rem',
                      lineHeight: 1.2,
                      fontWeight: 700,
                      color: '#171916',
                      letterSpacing: '-0.02em',
                      marginBottom: '1rem',
                    }}
                  >
                    {post.title}
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
                    {post.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(23, 25, 22, 0.08)',
                    paddingTop: '1.25rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: '#50534b',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                  }}
                >
                  <span>{post.date}</span>
                  <span style={{ color: '#171916' }}>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Dark CTA Card */}
          <div
            style={{
              backgroundColor: '#171916',
              color: '#f4f2ea',
              borderRadius: '24px',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              textAlign: 'center',
              border: '1px solid rgba(244, 242, 234, 0.12)',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <span className="flow-tag-dark">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e5ff3d' }} />
                Get Started
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                color: '#f4f2ea',
              }}
            >
              Ready to scale your digital presence?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '1.05rem',
                lineHeight: 1.6,
                color: 'rgba(244, 242, 234, 0.7)',
                maxWidth: '580px',
                margin: '0 auto 2.5rem',
              }}
            >
              We design, engineer, and optimize custom B2B web applications and software platforms that drive conversions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contact" className="btn-primary-lime">
                Get In Touch →
              </Link>
              <Link
                href="/services"
                style={{
                  padding: '0.875rem 1.75rem',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: '#f4f2ea',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(244, 242, 234, 0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'background-color 0.2s, border-color 0.2s',
                }}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Global FlowPilot Footer */}
      <Footer />

      {/* Discovery Call Modal */}
      <BookCallModal />
    </div>
  );
}

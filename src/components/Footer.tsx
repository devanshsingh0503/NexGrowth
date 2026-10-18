'use client';

import Link from 'next/link';

export default function Footer() {
  const capabilities = [
    { name: 'Website Design & Dev', href: '/services/web-development' },
    { name: 'SaaS Web Applications', href: '/services/software-development' },
    { name: 'Shopify & E-Commerce', href: '/services/shopify-development' },
    { name: 'Landing Page Engineering', href: '/services/landing-page-development' },
    { name: 'Website Redesign', href: '/services/website-redesign' },
    { name: 'Technical SEO Audits', href: '/services/seo' },
    { name: 'Google Ads & PPC', href: '/services/google-ads' },
    { name: 'Meta & Paid Social', href: '/services/meta-ads' },
    { name: 'Software Maintenance & SMM', href: '/services/social-media-marketing' },
  ];

  const locations = [
    { name: 'Web Dev Ghaziabad', href: '/services/web-development/ghaziabad' },
    { name: 'Web Dev Noida', href: '/services/web-development/noida' },
    { name: 'Web Dev Delhi NCR', href: '/services/web-development/delhi' },
    { name: 'Software Dev Noida', href: '/services/software-development/noida' },
    { name: 'SEO Services Ghaziabad', href: '/services/seo/ghaziabad' },
  ];

  const company = [
    { name: 'About Us', href: '#services' },
    { name: 'Execution Process', href: '#process' },
    { name: 'Selected Work', href: '#work' },
    { name: 'Pricing Packages', href: '#packages' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog & Articles', href: '/blog' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-condition' },
  ];

  const socials = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/nexgrowth' },
    { name: 'Twitter / X', href: 'https://twitter.com/nexgrowth' },
    { name: 'Instagram', href: 'https://instagram.com/nexgrowth' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#171916',
        color: '#f4f2ea',
        padding: '6rem 0 3rem',
        borderTop: '1px solid rgba(244, 242, 234, 0.1)',
      }}
    >
      <div className="flow-container">
        {/* Top Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '5rem',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'baseline',
                gap: '2px',
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '1.65rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#f4f2ea',
                textTransform: 'lowercase',
                marginBottom: '1rem',
              }}
            >
              nexgrowth
              <span style={{ fontSize: '0.65rem', color: '#e5ff3d', transform: 'translateY(-6px)' }}>
                ®
              </span>
            </Link>

            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'rgba(244, 242, 234, 0.65)',
                marginBottom: '1.75rem',
              }}
            >
              Less friction. More flow. We engineer custom B2B web applications and enterprise websites built to scale.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a
                href="mailto:devanshnexgrowth@gmail.com"
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#e5ff3d',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                devanshnexgrowth@gmail.com
              </a>
              <a
                href="tel:+918052731617"
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: 'rgba(244, 242, 234, 0.75)',
                }}
              >
                +91 8052731617
              </a>
            </div>
          </div>

          {/* Capabilities Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#f4f2ea',
                marginBottom: '1.25rem',
              }}
            >
              Capabilities
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {capabilities.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: 'rgba(244, 242, 234, 0.65)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f4f2ea')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 242, 234, 0.65)')}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations Column (Local SEO) */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#f4f2ea',
                marginBottom: '1.25rem',
              }}
            >
              Delhi NCR Hubs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {locations.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: 'rgba(244, 242, 234, 0.65)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f4f2ea')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 242, 234, 0.65)')}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#f4f2ea',
                marginBottom: '1.25rem',
              }}
            >
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {company.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: 'rgba(244, 242, 234, 0.65)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f4f2ea')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 242, 234, 0.65)')}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Legal & Socials */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#f4f2ea',
                marginBottom: '1.25rem',
              }}
            >
              Connect &amp; Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {socials.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: 'rgba(244, 242, 234, 0.65)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#e5ff3d')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 242, 234, 0.65)')}
                >
                  {item.name} ↗
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {legal.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.8125rem',
                    color: 'rgba(244, 242, 234, 0.45)',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(244, 242, 234, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'rgba(244, 242, 234, 0.5)',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} NexGrowth. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted with precision for speed and conversion</span>
            <span style={{ color: '#e5ff3d' }}>●</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

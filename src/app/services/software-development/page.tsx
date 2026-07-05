import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software Development Company | Custom Web Apps | NexGrowth',
  description: 'Get scalable software solutions built by NexGrowth, a leading software development company. We design fast, secure web applications and custom SaaS dashboards.',
  alternates: {
    canonical: 'https://nexgrowth.com/services/software-development',
  },
  openGraph: {
    title: 'Software Development Company | Custom Web Apps | NexGrowth',
    description: 'Get scalable software solutions built by NexGrowth, a leading software development company. We design fast, secure web applications and custom SaaS dashboards.',
    url: 'https://nexgrowth.com/services/software-development',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'B2B Custom Software Development Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company | Custom Web Apps | NexGrowth',
    description: 'Get scalable software solutions built by NexGrowth, a leading software development company. We design fast, secure web applications and custom SaaS dashboards.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function SoftwareDevelopmentServicePage() {
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
                'name': 'Software Development',
                'item': 'https://nexgrowth.com/services/software-development'
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
            'serviceType': 'Custom Software Engineering & Web App Development',
            'provider': {
              '@type': 'LocalBusiness',
              'name': 'NexGrowth',
              'url': 'https://nexgrowth.com'
            },
            'areaServed': 'Worldwide',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Software Development Services',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'Custom SaaS Dashboard Development',
                    'description': 'Real-time charts, analytics grids, and user access permissions.'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'B2B Client Portal Engineering',
                    'description': 'Secure portals, database records, and custom workflow automation.'
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
                'name': 'How much does custom software development cost?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'The investment for custom software depends entirely on database structures, API integrations, user accounts system, and UI layout complexity. Contact us for a quote.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How long does software development take?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Bespoke web applications or SaaS portals typically take 8 to 16 weeks to build, test, and deploy securely.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Do we own the software code after project completion?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, absolutely. NexGrowth transfers full IP ownership and repository rights to your business upon deployment.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How do you ensure data security in custom web applications?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We implement strict encryption protocols, SSL certificates, parameterized database query structures to prevent injections, and JWT-based user session authorization.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What database technologies do you integrate?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We integrate both relational and non-relational database architectures, including PostgreSQL, MySQL, MongoDB, and Redis caching layers depending on system workload needs.'
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
          <span style={{ color: 'var(--current-color-40, #ff77c9)' }}>Software Development</span>
        </nav>

        {/* Hero Title */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'ABCReproMono, monospace', fontSize: '0.9rem', color: 'var(--current-color-40, #ff77c9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Capabilities // Software Development
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '2rem', color: '#fcfaf8' }}>
            Custom Software Development Company Solutions
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'rgba(252,250,248,0.7)', fontWeight: 300, marginBottom: '2.5rem' }}>
            NexGrowth is an agile software development company. We design and build fast, secure web applications and custom SaaS dashboards that streamline business operations.
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
              For custom B2B application architecture, relying on simple scripts is not enough. You need an engineering partner that prioritizes secure, modular <strong>software development</strong>, rapid query execution, and robust integrations. Bulky database setups, unoptimized backend endpoints, and poor session management can compromise data safety and operational efficiency.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              At NexGrowth, we approach <strong>software engineering</strong> with a focus on business logic. We design bespoke systems that solve operational bottlenecks, secure client data, and scale without requiring complete re-builds. Our software engineers build secure APIs and utilize indexing techniques to ensure queries execute in milliseconds.
            </p>
            <p>
              By decoupling the frontend visual layer from backend server runtimes, we create web systems that are extremely robust. This architecture ensures that even during high-traffic events, your user dashboards and customer databases remain responsive.
            </p>
          </section>

          {/* Section 2: Software Development Services */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Software Development Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We build high-performance, customized backends and dynamic portal frontends, including:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Custom Web Application Engineering</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We design B2B client portals, secure messaging systems, scheduling interfaces, and corporate resource managers. We focus on input security, multi-role user access permission scopes, and real-time synchronization.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>SaaS Dashboard Development</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We construct responsive administrative dashboards with dynamic grids, drag-and-drop file uploaders, CSV generators, and analytics charts.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Database Integration &amp; Caching</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We design secure database schemas, write structured migration scripts, and deploy Redis cache configurations to speed up repetitive query executions.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Custom API Architectures</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We build RESTful and GraphQL API servers utilizing try/catch handlers, custom middleware hooks, rate-limiting, and JSON Web Token (JWT) session setups.
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
              Upgrading to <strong>custom software</strong> yields substantial business returns:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Workflow &amp; Operations Automation</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  By automating manual data entry, PDF creation, and internal emails, our software solutions eliminate administrative errors and save your team hours of labor.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Zero Licensing Constraints</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  Off-the-shelf software tools charge per user. Custom software development gives you complete IP ownership, meaning you can scale your customer base without user-license fees.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>Strict Security &amp; Encryption Standards</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We deploy database-level encryption, secure API endpoints, parameterized queries, and CORS boundaries to safeguard your company data.
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
              We apply a structured development lifecycle to deliver secure software products on time:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(252,250,248,0.7)', paddingLeft: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fcfaf8' }}>1. Requirements Scoping &amp; Mapping</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We document database schemas, user roles, security specifications, third-party API keys, and workflow dependencies to build a concrete roadmap.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>2. Interface Wireframing &amp; UX Drafts</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We design responsive mockup layouts in Figma to define admin dashboard interfaces, report generation grids, and navigation structures.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>3. Backend Setup &amp; API Development</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We write database schemas (PostgreSQL/MongoDB), code API endpoints, configure session controllers, and build secure transaction pipelines.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>4. Frontend Assembly &amp; State Management</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We code interactive React frontends, implementing dashboard displays, charts, input validation, and real-time alerts.
                </p>
              </div>
              <div>
                <strong style={{ color: '#fcfaf8' }}>5. Security Auditing &amp; Deployment</strong>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  We test API endpoints for vulnerability, check CORS boundaries, audit SSL settings, and deploy production builds to AWS serverless edges.
                </p>
              </div>
            </div>

            {/* Mid-Page CTA Banner */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '12px', marginTop: '3.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.75rem' }}>
                Need help scoping your custom database app?
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(252,250,248,0.6)', marginBottom: '1.5rem' }}>
                Set up a discovery call with our lead systems architect to define specs and workflow dependencies.
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
              We leverage reliable and modern technology stacks:
            </p>
            <p style={{ color: 'rgba(252,250,248,0.7)', marginBottom: '1.25rem' }}>
              Node.js, Next.js, Express, PostgreSQL, MongoDB, Redis, Docker, and AWS Serverless routing layers.
            </p>
            <p>
              By leveraging containerized runtime environments (Docker) and AWS serverless hosting, we ensure that database connection pools scale automatically, minimizing downtime.
            </p>
          </section>

          {/* Section 6: Industries We Serve */}
          <section>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Industries We Serve
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              Our software engineers construct custom tools across major sectors:
            </p>
            <ul style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(252,250,248,0.7)' }}>
              <li><strong>B2B SaaS platforms</strong>: Designing dashboard interfaces, subscription integrations, and reporting setups.</li>
              <li><strong>Logistics &amp; Supply Chain</strong>: Custom dispatcher control desks, real-time inventory tracking, and warehouse databases.</li>
              <li><strong>Healthcare Portals</strong>: Secure patient registration databases with secure document storage.</li>
              <li><strong>Finance &amp; Auditing</strong>: Real-time calculation portals with transaction histories.</li>
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
                  How much does custom software development cost?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  The investment for custom software depends entirely on database structures, API integrations, user accounts system, and UI layout complexity. Contact us for a quote.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  How long does software development take?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Bespoke web applications or SaaS portals typically take 8 to 16 weeks to build, test, and deploy securely.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  Do we own the software code after project completion?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  Yes, absolutely. NexGrowth transfers full IP ownership and repository rights to your business upon deployment.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  How do you ensure data security in custom web applications?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  We implement strict encryption protocols, SSL certificates, parameterized database query structures to prevent injections, and JWT-based user session authorization.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcfaf8', marginBottom: '0.5rem' }}>
                  What database technologies do you integrate?
                </h3>
                <p style={{ color: 'rgba(252,250,248,0.7)' }}>
                  We integrate both relational and non-relational database architectures, including PostgreSQL, MySQL, MongoDB, and Redis caching layers depending on system workload needs.
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
              Ready to collaborate with an experienced <strong>software development company</strong>? Submit your specifications to discuss project scope and get a custom quote.
            </p>
            <Link href="/#contact" style={{ padding: '1.2rem 2.8rem', background: '#fcfaf8', color: '#12071a', fontFamily: 'ABCReproMono, monospace', textTransform: 'uppercase', fontSize: '1rem', textDecoration: 'none', borderRadius: '4px', fontWeight: 500 }}>
              Get Custom Software Quote
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}

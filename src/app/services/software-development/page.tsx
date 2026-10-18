import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Software Development Company | Custom Web Apps | NexGrowth',
  description: 'Get scalable software solutions built by NexGrowth, a leading software development company. We design fast, secure web applications and custom SaaS dashboards.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/software-development',
  },
  openGraph: {
    title: 'Software Development Company | Custom Web Apps | NexGrowth',
    description: 'Get scalable software solutions built by NexGrowth, a leading software development company. We design fast, secure web applications and custom SaaS dashboards.',
    url: 'https://nexgrowth.in/services/software-development',
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
  const faqs = [
    {
      q: 'How much does custom software development cost?',
      a: 'The investment for custom software depends entirely on database structures, API integrations, user accounts system, and UI layout complexity. Contact us for a quote.',
    },
    {
      q: 'How long does software development take?',
      a: 'Bespoke web applications or SaaS portals typically take 8 to 16 weeks to build, test, and deploy securely.',
    },
    {
      q: 'Do we own the software code after project completion?',
      a: 'Yes, absolutely. NexGrowth transfers full IP ownership and repository rights to your business upon deployment.',
    },
    {
      q: 'How do you ensure data security in custom web applications?',
      a: 'We implement strict encryption protocols, SSL certificates, parameterized database query structures to prevent injections, and JWT-based user session authorization.',
    },
    {
      q: 'What database technologies do you integrate?',
      a: 'We integrate both relational and non-relational database architectures, including PostgreSQL, MySQL, MongoDB, and Redis caching layers depending on system workload needs.',
    },
  ];

  const schemaScripts = (
    <>
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
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Software Development',
                item: 'https://nexgrowth.in/services/software-development',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Custom Software Engineering & Web App Development',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Software Development Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Custom SaaS Dashboard Development',
                    description: 'Real-time charts, analytics grids, and user access permissions.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'B2B Client Portal Engineering',
                    description: 'Secure portals, database records, and custom workflow automation.',
                  },
                },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a,
              },
            })),
          }),
        }}
      />
    </>
  );

  return (
    <ServicePageTemplate
      schemaScripts={schemaScripts}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Software Development' },
      ]}
      badge="CAPABILITIES // SOFTWARE DEVELOPMENT"
      title="CUSTOM SOFTWARE DEVELOPMENT COMPANY SOLUTIONS"
      subtitle="NexGrowth is an agile software development company. We design and build fast, secure web applications and custom SaaS dashboards that streamline business operations."
      primaryCtaText="Get Custom Quote"
      secondaryCtaText="Talk To Expert"
      whyChooseTitle="Why Choose NexGrowth"
      whyChooseContent={
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            For custom B2B application architecture, relying on simple scripts is not enough. You need an engineering partner that prioritizes secure, modular <strong>software development</strong>, rapid query execution, and robust integrations. Bulky database setups, unoptimized backend endpoints, and poor session management can compromise data safety and operational efficiency.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            At NexGrowth, we approach <strong>software engineering</strong> with a focus on business logic. We design bespoke systems that solve operational bottlenecks, secure client data, and scale without requiring complete re-builds. Our software engineers build secure APIs and utilize indexing techniques to ensure queries execute in milliseconds.
          </p>
          <p>
            By decoupling the frontend visual layer from backend server runtimes, we create web systems that are extremely robust. This architecture ensures that even during high-traffic events, your user dashboards and customer databases remain responsive.
          </p>
        </>
      }
      servicesTitle="Software Development Services"
      servicesSubtitle="We build high-performance, customized backends and dynamic portal frontends, including:"
      servicesList={[
        {
          title: 'Custom Web Application Engineering',
          desc: 'We design B2B client portals, secure messaging systems, scheduling interfaces, and corporate resource managers. We focus on input security, multi-role user access permission scopes, and real-time synchronization.',
        },
        {
          title: 'SaaS Dashboard Development',
          desc: 'We construct responsive administrative dashboards with dynamic grids, drag-and-drop file uploaders, CSV generators, and analytics charts.',
        },
        {
          title: 'Database Integration & Caching',
          desc: 'We design secure database schemas, write structured migration scripts, and deploy Redis cache configurations to speed up repetitive query executions.',
        },
        {
          title: 'Custom API Architectures',
          desc: 'We build RESTful and GraphQL API servers utilizing try/catch handlers, custom middleware hooks, rate-limiting, and JSON Web Token (JWT) session setups.',
        },
      ]}
      benefitsTitle="Benefits of Custom Software"
      benefitsSubtitle="Upgrading to custom software yields substantial business returns:"
      benefitsList={[
        {
          tag: '01 / Automation',
          title: 'Workflow & Operations Automation',
          desc: 'By automating manual data entry, PDF creation, and internal emails, our software solutions eliminate administrative errors and save your team hours of labor.',
        },
        {
          tag: '02 / Ownership',
          title: 'Zero Licensing Constraints',
          desc: 'Off-the-shelf software tools charge per user. Custom software development gives you complete IP ownership, meaning you can scale your customer base without user-license fees.',
        },
        {
          tag: '03 / Security',
          title: 'Strict Security & Encryption Standards',
          desc: 'We deploy database-level encryption, secure API endpoints, parameterized queries, and CORS boundaries to safeguard your company data.',
        },
      ]}
      processTitle="Our Development Process"
      processSubtitle="We apply a structured development lifecycle to deliver secure software products on time:"
      processList={[
        {
          num: '01',
          title: 'Requirements Scoping & Mapping',
          desc: 'We document database schemas, user roles, security specifications, third-party API keys, and workflow dependencies to build a concrete roadmap.',
        },
        {
          num: '02',
          title: 'Interface Wireframing & UX Drafts',
          desc: 'We design responsive mockup layouts in Figma to define admin dashboard interfaces, report generation grids, and navigation structures.',
        },
        {
          num: '03',
          title: 'Backend Setup & API Development',
          desc: 'We write database schemas (PostgreSQL/MongoDB), code API endpoints, configure session controllers, and build secure transaction pipelines.',
        },
        {
          num: '04',
          title: 'Frontend Assembly & State Management',
          desc: 'We code interactive React frontends, implementing dashboard displays, charts, input validation, and real-time alerts.',
        },
        {
          num: '05',
          title: 'Security Auditing & Deployment',
          desc: 'We test API endpoints for vulnerability, check CORS boundaries, audit SSL settings, and deploy production builds to AWS serverless edges.',
        },
      ]}
      midPageCta={{
        tag: 'ARCHITECTURE SCOPING',
        title: 'Need help scoping your custom database app?',
        desc: 'Set up a discovery call with our lead systems architect to define specs and workflow dependencies.',
        buttonText: 'Book Free Consultation',
        buttonHref: '/#contact',
      }}
      techTitle="Technologies We Use"
      techIntro="We leverage reliable and modern technology stacks:"
      techTags={['Node.js', 'Next.js 16', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS Serverless']}
      techOutro="By leveraging containerized runtime environments (Docker) and AWS serverless hosting, we ensure that database connection pools scale automatically, minimizing downtime."
      industriesTitle="Industries We Serve"
      industriesIntro="Our software engineers construct custom tools across major sectors:"
      industriesList={[
        {
          title: 'B2B SaaS Platforms',
          desc: 'Designing dashboard interfaces, subscription integrations, and reporting setups.',
        },
        {
          title: 'Logistics & Supply Chain',
          desc: 'Custom dispatcher control desks, real-time inventory tracking, and warehouse databases.',
        },
        {
          title: 'Healthcare Portals',
          desc: 'Secure patient registration databases with secure document storage.',
        },
        {
          title: 'Finance & Auditing',
          desc: 'Real-time calculation portals with transaction histories.',
        },
      ]}
      faqsTitle="Frequently Asked Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'START BUILDING',
        title: 'READY TO COLLABORATE WITH AN EXPERIENCED SOFTWARE TEAM?',
        desc: 'Submit your specifications to discuss project scope and get a custom quote within 24 hours.',
        buttonText: 'Get Custom Software Quote',
        buttonHref: '/#contact',
      }}
    />
  );
}

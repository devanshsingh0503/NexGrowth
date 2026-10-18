import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Website Development Company in Lucknow | Custom Web Design | NexGrowth',
  description: 'Looking for a website development company in Lucknow? NexGrowth designs fast, SEO-friendly, responsive websites for startups in Gomti Nagar and Hazratganj.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/web-development/lucknow',
  },
  openGraph: {
    title: 'Website Development Company in Lucknow | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Lucknow? NexGrowth designs fast, SEO-friendly, responsive websites for startups in Gomti Nagar and Hazratganj.',
    url: 'https://nexgrowth.in/services/web-development/lucknow',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Website Development Company in Lucknow',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Lucknow | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Lucknow? NexGrowth designs fast, SEO-friendly, responsive websites for startups in Gomti Nagar and Hazratganj.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function LucknowWebDevelopmentPage() {
  const faqs = [
    {
      q: 'How does NexGrowth support startups in Gomti Nagar?',
      a: 'We provide scalable engagement models and robust system architectures designed to handle rapid user base growth.',
    },
    {
      q: 'Will my site have localized schema data?',
      a: 'Yes. We inject custom JSON-LD schema blocks to define your business location and service area targets to Google bots.',
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
                name: 'Web Development',
                item: 'https://nexgrowth.in/services/web-development',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Lucknow',
                item: 'https://nexgrowth.in/services/web-development/lucknow',
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
            serviceType: 'Website Development Services in Lucknow',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth Lucknow',
              url: 'https://nexgrowth.in/services/web-development/lucknow',
            },
            areaServed: 'Lucknow, Uttar Pradesh, India',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Lucknow Website Development',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Responsive Website Layout Lucknow',
                    description: 'Modern web portals for Hazratganj and Gomti Nagar enterprises.',
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
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );

  return (
    <ServicePageTemplate
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Lucknow' },
      ]}
      badge="Local Services // Central Uttar Pradesh"
      title="Website Development Company in Lucknow"
      subtitle="Looking to establish a premium digital footprint? NexGrowth is a dedicated website development company in Lucknow, designing secure, SEO-optimized, and fast React systems for emerging startups in Gomti Nagar and Hazratganj."
      primaryCtaText="Get Custom Quote"
      primaryCtaHref="/#contact"
      secondaryCtaText="Book Free Consultation"
      secondaryCtaHref="/#contact"
      whyChooseTitle="Why Choose NexGrowth in Lucknow"
      whyChooseContent={
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Lucknow has witnessed a substantial startup surge, with modern business hubs expanding in Vibhuti Khand and Gomti Nagar IT Parks. Traditional merchant houses in Hazratganj are also digitizing rapidly. To compete effectively, local brands need websites that load in under 1 second.
          </p>
          <p>
            NexGrowth supports this growth by writing clean, server-side rendered Next.js portals. We focus on search visibility and UX conversion paths, turning standard visitor traffic into qualified buyers.
          </p>
        </>
      }
      servicesTitle="Lucknow Website Development Services"
      servicesSubtitle="We build specialized digital systems:"
      servicesList={[
        {
          title: 'Local Startup Landing Pages',
          desc: 'Built to scale email subscriptions and sales leads.',
        },
        {
          title: 'E-commerce Portals Lucknow',
          desc: 'Custom storefront designs with database inventory control.',
        },
        {
          title: 'Corporate Portals Redesign',
          desc: 'Rebuilding slow templates into responsive Next.js.',
        },
      ]}
      benefitsTitle="Benefits"
      benefitsSubtitle="Why local Lucknow businesses choose NexGrowth:"
      benefitsList={[
        {
          tag: 'Advantage 01',
          title: 'Local SEO Readiness',
          desc: 'Optimized schema data targeting central UP client bases.',
        },
        {
          tag: 'Advantage 02',
          title: 'Near-Instant Load Speeds',
          desc: 'Accelerated Largest Contentful Paint (LCP) performance.',
        },
        {
          tag: 'Advantage 03',
          title: 'Scalable Backends',
          desc: 'Structured database systems built to handle expansion.',
        },
      ]}
      processTitle="Our Process"
      processSubtitle="We ensure project alignment at every phase:"
      processList={[
        {
          num: '01',
          title: 'Discovery Mapping',
          desc: 'Defining local market user actions and tech scopes.',
        },
        {
          num: '02',
          title: 'Interface Wireframing',
          desc: 'Prototyping custom B2B designs in Figma.',
        },
        {
          num: '03',
          title: 'Frontend Engineering',
          desc: 'Writing clean, secure React code components.',
        },
        {
          num: '04',
          title: 'Responsive Verification',
          desc: 'Reviewing display outputs on multiple viewports.',
        },
        {
          num: '05',
          title: 'Safe Launch',
          desc: 'Running speed configurations and index submissions.',
        },
      ]}
      midPageCta={{
        tag: 'Search Visibility Check',
        title: 'Is your site failing to rank in Lucknow search queries?',
        desc: 'Get a comprehensive check covering mobile viewport accessibility, CSS structures, and page speed index scores.',
        buttonText: 'Get Free Website Audit',
        buttonHref: '/#contact',
      }}
      techTitle="Technologies We Use"
      techIntro="We build using optimized, modern technology:"
      techTags={['React', 'Next.js', 'Node.js', 'TypeScript', 'Vercel', 'Tailwind CSS']}
      industriesTitle="Industries We Serve"
      industriesIntro="We engineer custom portals across major Lucknow verticals:"
      industriesList={[
        {
          title: 'Emerging B2B SaaS Startups',
          desc: 'Scalable cloud portals and subscription platforms in Vibhuti Khand & Gomti Nagar IT Parks.',
        },
        {
          title: 'Logistics & Supply Chain Operators',
          desc: 'Fast tracking portals and booking engines across central Uttar Pradesh.',
        },
        {
          title: 'Hazratganj Retailers & Merchant Houses',
          desc: 'Digital storefronts, inventory portals, and regional brand hubs.',
        },
        {
          title: 'Professional Consulting & Law Firms',
          desc: 'Authoritative, search-optimized web platforms built for client acquisition.',
        },
      ]}
      faqsTitle="Frequently Asked Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'Contact Us',
        title: 'Ready to construct a high-converting portal with a leading website development company in Lucknow?',
        desc: 'Submit your brief to discuss scope and get a custom quote.',
        buttonText: 'Get Custom Website Quote',
        buttonHref: '/#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

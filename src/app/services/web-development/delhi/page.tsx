import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Website Development Company in Delhi | Custom Web Design | NexGrowth',
  description: 'Looking for a website development company in Delhi? NexGrowth builds fast, responsive, and SEO-friendly websites for enterprises in CP, Okhla, and Saket.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/web-development/delhi',
  },
  openGraph: {
    title: 'Website Development Company in Delhi | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Delhi? NexGrowth builds fast, responsive, and SEO-friendly websites for enterprises in CP, Okhla, and Saket.',
    url: 'https://nexgrowth.in/services/web-development/delhi',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Website Development Company in Delhi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Delhi | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Delhi? NexGrowth builds fast, responsive, and SEO-friendly websites for enterprises in CP, Okhla, and Saket.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function DelhiWebDevelopmentPage() {
  const faqs = [
    {
      q: 'Do you coordinate meetings with corporate teams in Delhi?',
      a: 'Yes. We frequently collaborate with marketing teams based in Connaught Place and Saket via secure screenshares and direct messaging channels.',
    },
    {
      q: 'Will our custom website have high Lighthouse speed scores?',
      a: 'Yes. By avoiding bulky site builders, our code compiles to static assets that deliver near-perfect mobile speed scores.',
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
                name: 'Delhi',
                item: 'https://nexgrowth.in/services/web-development/delhi',
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
            serviceType: 'Website Development Services in Delhi',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth Delhi',
              url: 'https://nexgrowth.in/services/web-development/delhi',
            },
            areaServed: 'Delhi, India',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Delhi Website Development',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Enterprise React Portal Delhi',
                    description: 'High-speed Next.js portals for CP and Okhla corporates.',
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
        { name: 'Delhi' },
      ]}
      badge="Local Services // National Capital Region"
      title="Website Development Company in Delhi"
      subtitle="Are you searching for a reliable website development company in Delhi? NexGrowth engineers fast, SEO-friendly, and responsive websites for enterprises across Connaught Place, Okhla, and Saket."
      primaryCtaText="Get Custom Quote"
      primaryCtaHref="/#contact"
      secondaryCtaText="Book Free Consultation"
      secondaryCtaHref="/#contact"
      whyChooseTitle="Why Choose NexGrowth in Delhi"
      whyChooseContent={
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Delhi serves as the corporate nerve center of the nation. Businesses in Connaught Place (CP) and Saket require high-end, bespoke web designs to build trust with enterprise clients. At the same time, logistics and D2C brands in Okhla demand rapid database portals.
          </p>
          <p>
            NexGrowth delivers by building custom portals rather than utilizing sluggish page-builder plugins. We code in clean Next.js, giving you high Lighthouse scores and superior search indexing out of the box.
          </p>
        </>
      }
      servicesTitle="Delhi Website Development Services"
      servicesSubtitle="We design and construct tailored web architectures:"
      servicesList={[
        {
          title: 'Enterprise Portals CP',
          desc: 'Tailored corporate sites with secure hosting and user permission hierarchies.',
        },
        {
          title: 'E-commerce Redesigns',
          desc: 'Fast-loading storefronts with custom inventory sync.',
        },
        {
          title: 'Local B2B Campaign Banners',
          desc: 'Optimized layouts to convert paid search clicks.',
        },
      ]}
      benefitsTitle="Benefits"
      benefitsSubtitle="Why choose our Delhi web engineering team:"
      benefitsList={[
        {
          tag: 'Advantage 01',
          title: 'Strict On-Page SEO',
          desc: 'Crawl-ready structures that position well in local searches.',
        },
        {
          tag: 'Advantage 02',
          title: 'Mobile Viewport Optimizations',
          desc: 'Fast rendering on standard cellular connections.',
        },
        {
          tag: 'Advantage 03',
          title: 'IP Transfer',
          desc: 'Complete repository ownership upon deployment.',
        },
      ]}
      processTitle="Our Process"
      processSubtitle="Our structured approach guarantees delivery:"
      processList={[
        {
          num: '01',
          title: 'Discovery Session',
          desc: 'Scoping target conversion metrics.',
        },
        {
          num: '02',
          title: 'Figma Prototyping',
          desc: 'Designing visual user flows.',
        },
        {
          num: '03',
          title: 'Custom Web Coding',
          desc: 'Implementing clean React modules.',
        },
        {
          num: '04',
          title: 'Quality Reviews',
          desc: 'Reviewing redirects, accessibility tags, and speed.',
        },
        {
          num: '05',
          title: 'Final Deployment',
          desc: 'Server setup and index mapping.',
        },
      ]}
      midPageCta={{
        tag: 'Performance Audit',
        title: 'Is your corporate site failing to convert traffic?',
        desc: 'Get a detailed audit of your mobile performance, heading structures, and index errors.',
        buttonText: 'Get Free Website Audit',
        buttonHref: '/#contact',
      }}
      techTitle="Technologies We Use"
      techIntro="We build using optimized, modern technology:"
      techTags={['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Vercel', 'Tailwind CSS']}
      industriesTitle="Industries We Serve"
      industriesIntro="Our client portfolio covers key Delhi verticals:"
      industriesList={[
        {
          title: 'Corporate Finance & Enterprise',
          desc: 'High-trust, security-first portals designed for corporate headquarters in Connaught Place.',
        },
        {
          title: 'Retail & D2C Brands',
          desc: 'Fast-loading e-commerce and retail storefronts across Saket and South Delhi.',
        },
        {
          title: 'Manufacturing & Logistics',
          desc: 'High-speed catalog and operations portals for industrial hubs in Okhla.',
        },
        {
          title: 'Legal & Consulting Firms',
          desc: 'Authoritative, search-optimized web presences for law and advisory offices.',
        },
      ]}
      faqsTitle="Frequently Asked Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'Contact Us',
        title: 'Ready to construct a high-converting portal with a leading website development company in Delhi?',
        desc: 'Submit your requirements to schedule a discovery call and get a custom quote.',
        buttonText: 'Get Custom Website Quote',
        buttonHref: '/#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

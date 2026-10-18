import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Website Development Company in Noida | Custom Design | NexGrowth',
  description: 'Looking for a website development company in Noida? NexGrowth designs fast, SEO-friendly, responsive websites for startups and corporates in Sector 62 and 125.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/web-development/noida',
  },
  openGraph: {
    title: 'Website Development Company in Noida | Custom Design | NexGrowth',
    description: 'Looking for a website development company in Noida? NexGrowth designs fast, SEO-friendly, responsive websites for startups and corporates in Sector 62 and 125.',
    url: 'https://nexgrowth.in/services/web-development/noida',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Website Development Company in Noida',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Noida | Custom Design | NexGrowth',
    description: 'Looking for a website development company in Noida? NexGrowth designs fast, SEO-friendly, responsive websites for startups and corporates in Sector 62 and 125.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function NoidaWebDevelopmentPage() {
  const faqs = [
    {
      q: 'Do you provide local support for businesses in Noida?',
      a: 'Yes. Our team works closely with startups and corporates in Sector 62 and 125, providing direct communications and swift turnaround.',
    },
    {
      q: 'Can you migrate our legacy site to a Next.js framework?',
      a: 'Absolutely. We migrate slow templates to React/Next.js architectures, securing your URL pathways and keyword history.',
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
                name: 'Noida',
                item: 'https://nexgrowth.in/services/web-development/noida',
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
            serviceType: 'Website Development Services in Noida',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth Noida',
              url: 'https://nexgrowth.in/services/web-development/noida',
            },
            areaServed: 'Noida, Uttar Pradesh, India',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Noida Website Development',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'B2B Website Design Noida',
                    description: 'Mobile-friendly layouts for IT and corporate startups.',
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
        { name: 'Noida' },
      ]}
      badge="Local Services // Noida Area"
      title="Website Development Company in Noida"
      subtitle="Are you seeking a high-performance web presence for your brand? NexGrowth is a leading website development company in Noida, constructing custom, fast-loading, and responsive business portals designed to maximize local and global sales."
      primaryCtaText="Get Custom Quote"
      primaryCtaHref="/#contact"
      secondaryCtaText="Book Free Consultation"
      secondaryCtaHref="/#contact"
      whyChooseTitle="Why Choose NexGrowth in Noida"
      whyChooseContent={
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Noida has evolved into a powerhouse for technology startups and enterprise software firms, particularly around Sector 62, Sector 125, and Film City. To stand out in this competitive landscape, your business website needs superior speed, custom branding, and responsive configurations.
          </p>
          <p>
            Unlike template-based web agencies, we engineer every layout using clean React code and Next.js protocols. This delivers near-instant load speeds that capture search bots and retain high-value prospects.
          </p>
        </>
      }
      servicesTitle="Noida Website Development Services"
      servicesSubtitle="We build customized portals tailored for local commercial goals:"
      servicesList={[
        {
          title: 'B2B Tech Startups Portals',
          desc: 'High-end landing pages designed to acquire SaaS signups and inquiries.',
        },
        {
          title: 'Corporate Website Redesign',
          desc: 'Re-engineering legacy layouts to fast, modern frameworks.',
        },
        {
          title: 'Custom Integrations',
          desc: 'Bridging local CRM, lead-handling sheets, and payment APIs safely.',
        },
      ]}
      benefitsTitle="Benefits"
      benefitsSubtitle="Partnering with a local Noida web design team offers clear strategic benefits:"
      benefitsList={[
        {
          tag: 'Advantage 01',
          title: 'On-Page Technical SEO',
          desc: 'Structural keyword targets built into sitemaps and heading hierarchies.',
        },
        {
          tag: 'Advantage 02',
          title: 'High Mobile Responsiveness',
          desc: 'Flawless rendering across mobile screens and tablets.',
        },
        {
          tag: 'Advantage 03',
          title: 'Clear Project Scoping',
          desc: 'Directly align with engineers who understand Noida\'s dynamic IT business community.',
        },
      ]}
      processTitle="Our Process"
      processSubtitle="We ensure structured deployment via our five-stage framework:"
      processList={[
        {
          num: '01',
          title: 'Regional Discovery',
          desc: 'Aligning site structures with local customer search metrics.',
        },
        {
          num: '02',
          title: 'UI Custom Drafting',
          desc: 'Styling mockups in Figma that convey premium B2B branding.',
        },
        {
          num: '03',
          title: 'Dynamic Frontend Coding',
          desc: 'Coding clean Next.js React modules.',
        },
        {
          num: '04',
          title: 'Responsive Audits',
          desc: 'Validating load times, CSS breakpoints, and form routes.',
        },
        {
          num: '05',
          title: 'Safe Server Launch',
          desc: 'Deploying to Vercel and registering sitemaps with Search Console.',
        },
      ]}
      midPageCta={{
        tag: 'Competitive Audit',
        title: 'Is your site ready for Noida’s competitive search space?',
        desc: 'Request a comprehensive digital performance audit to evaluate speed, responsiveness, and index status.',
        buttonText: 'Get Free Website Audit',
        buttonHref: '/#contact',
      }}
      techTitle="Technologies We Use"
      techIntro="We leverage reliable and modern technology stacks:"
      techTags={['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Vercel', 'Tailwind CSS']}
      industriesTitle="Industries We Serve"
      industriesIntro="We serve a broad range of sectors in Noida:"
      industriesList={[
        {
          title: 'B2B SaaS & Cloud Platforms',
          desc: 'Modern web architectures for software firms in Sector 62 and Sector 125.',
        },
        {
          title: 'IT & Software Consulting',
          desc: 'Corporate sites with structured service catalogs and team portfolios.',
        },
        {
          title: 'Real Estate Developers & Media',
          desc: 'High-converting interactive project showcases across Film City & expressway zones.',
        },
        {
          title: 'Enterprise E-commerce & Retail',
          desc: 'Scalable storefronts and custom merchant portals for regional brands.',
        },
      ]}
      faqsTitle="Frequently Asked Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'Contact Us',
        title: 'Ready to construct your next business portal with a trusted website development company in Noida?',
        desc: 'Connect with us to discuss scope and get a custom estimate.',
        buttonText: 'Get Custom Website Quote',
        buttonHref: '/#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

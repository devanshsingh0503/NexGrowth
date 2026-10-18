import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Website Development Company in Ghaziabad | Custom Web Design | NexGrowth',
  description: 'Looking for a website development company in Ghaziabad? NexGrowth builds fast, responsive websites for manufacturers and logistics firms in Sahibabad.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/web-development/ghaziabad',
  },
  openGraph: {
    title: 'Website Development Company in Ghaziabad | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Ghaziabad? NexGrowth builds fast, responsive websites for manufacturers and logistics firms in Sahibabad.',
    url: 'https://nexgrowth.in/services/web-development/ghaziabad',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Website Development Company in Ghaziabad',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Ghaziabad | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company in Ghaziabad? NexGrowth builds fast, responsive websites for manufacturers and logistics firms in Sahibabad.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function GhaziabadWebDevelopmentPage() {
  const faqs = [
    {
      q: 'Can you integrate custom order tracking APIs?',
      a: 'Yes. We design and code custom APIs to bridge your legacy shipping databases with responsive client portals.',
    },
    {
      q: 'Do you perform sitemap integrations for local search queries?',
      a: 'Yes. We register all subpages and regional URLs directly in sitemaps to ensure search bots crawl them regularly.',
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
                name: 'Ghaziabad',
                item: 'https://nexgrowth.in/services/web-development/ghaziabad',
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
            serviceType: 'Website Development Services in Ghaziabad',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth Ghaziabad',
              url: 'https://nexgrowth.in/services/web-development/ghaziabad',
            },
            areaServed: 'Ghaziabad, Uttar Pradesh, India',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Ghaziabad Website Development',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Industrial Web Portal Ghaziabad',
                    description: 'Secure, responsive portals for Sahibabad manufacturing plants.',
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
        { name: 'Ghaziabad' },
      ]}
      badge="Local Services // Industrial NCR Zone"
      title="Website Development Company in Ghaziabad"
      subtitle="Looking for a website development company in Ghaziabad? NexGrowth builds fast, responsive websites for manufacturers and logistics firms in Sahibabad and Kavi Nagar."
      primaryCtaText="Get Custom Quote"
      primaryCtaHref="/#contact"
      secondaryCtaText="Book Free Consultation"
      secondaryCtaHref="/#contact"
      whyChooseTitle="Why Choose NexGrowth in Ghaziabad"
      whyChooseContent={
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Ghaziabad serves as a massive industrial and manufacturing node in the National Capital Region. Heavy industries, supply chain providers, and logistics companies in Sahibabad and Kavi Nagar need customized web interfaces to automate client scheduling, manage quote requests, and display operations.
          </p>
          <p>
            NexGrowth meets this need by developing dedicated web apps. We prioritize backend database speed and mobile accessibility so that industrial coordinators can access shipping charts and client files on the go.
          </p>
        </>
      }
      servicesTitle="Ghaziabad Website Development Services"
      servicesSubtitle="We build specialized portals to drive regional growth:"
      servicesList={[
        {
          title: 'Industrial Logistics Portals',
          desc: 'Dispatch trackers, tracking forms, and client login panels.',
        },
        {
          title: 'Manufacturer Showcases',
          desc: 'Visual product catalogs designed to acquire national distributor queries.',
        },
        {
          title: 'Legacy Upgrades',
          desc: 'Transforming slow layouts to secure, responsive, and indexable Next.js code.',
        },
      ]}
      benefitsTitle="Benefits"
      benefitsSubtitle="Why Ghaziabad businesses partner with NexGrowth:"
      benefitsList={[
        {
          tag: 'Advantage 01',
          title: 'Crawl-Friendly Setup',
          desc: 'Clean heading hierarchies and canonical configuration loops.',
        },
        {
          tag: 'Advantage 02',
          title: 'Flawless Mobile Rendering',
          desc: 'Built for simple mobile connections in industrial areas.',
        },
        {
          tag: 'Advantage 03',
          title: 'Direct Project Ownership',
          desc: 'Git repository and IP transfer upon launch.',
        },
      ]}
      processTitle="Our Process"
      processSubtitle="We ensure structured deployment:"
      processList={[
        {
          num: '01',
          title: 'Requirement Analysis',
          desc: 'Mapping shipping trackers and quote workflows.',
        },
        {
          num: '02',
          title: 'Interface Wireframing',
          desc: 'Prototyping custom, clean user panels in Figma.',
        },
        {
          num: '03',
          title: 'Frontend Coding',
          desc: 'Building modular React Next.js modules.',
        },
        {
          num: '04',
          title: 'Responsive Verification',
          desc: 'Confirming accessibility across multiple devices.',
        },
        {
          num: '05',
          title: 'Production Launch',
          desc: 'Deploying to Vercel and updating search sitemaps.',
        },
      ]}
      midPageCta={{
        tag: 'Performance Audit',
        title: 'Is your company website losing mobile leads?',
        desc: 'Get a comprehensive check covering mobile viewport sizing, SSL settings, and Core Web Vitals speed scores.',
        buttonText: 'Get Free Website Audit',
        buttonHref: '/#contact',
      }}
      techTitle="Technologies We Use"
      techIntro="We build using optimized, modern technology:"
      techTags={['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Vercel', 'Tailwind CSS']}
      industriesTitle="Industries We Serve"
      industriesIntro="We serve key industrial segments in Ghaziabad:"
      industriesList={[
        {
          title: 'Steel & Manufacturing Plants',
          desc: 'High-speed operations portals and inventory catalogs in Sahibabad.',
        },
        {
          title: 'Logistics Coordinators & Warehousing',
          desc: 'Dispatch systems, live tracking, and client login panels in Kavi Nagar.',
        },
        {
          title: 'Distributors & Wholesalers',
          desc: 'Automated wholesale order processing and account management systems.',
        },
        {
          title: 'Corporate Service Partners',
          desc: 'Modern web architectures for industrial service and maintenance providers.',
        },
      ]}
      faqsTitle="Frequently Asked Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'Contact Us',
        title: 'Ready to construct a high-converting portal with a leading website development company in Ghaziabad?',
        desc: 'Submit your details to discuss logistics specs and get a custom quote.',
        buttonText: 'Get Custom Website Quote',
        buttonHref: '/#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

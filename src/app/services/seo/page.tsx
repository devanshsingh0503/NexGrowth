import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Technical SEO Services | SEO Agency Company | NexGrowth',
  description: 'Grow organic search visibility with NexGrowth. Our SEO agency delivers expert technical SEO services, on-page optimization, and audits that increase site rankings.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/seo',
  },
  openGraph: {
    title: 'Technical SEO Services | SEO Agency Company | NexGrowth',
    description: 'Grow organic search visibility with NexGrowth. Our SEO agency delivers expert technical SEO services, on-page optimization, and audits that increase site rankings.',
    url: 'https://nexgrowth.in/services/seo',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'NexGrowth Technical SEO Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO Services | SEO Agency Company | NexGrowth',
    description: 'Grow organic search visibility with NexGrowth. Our SEO agency delivers expert technical SEO services, on-page optimization, and audits that increase site rankings.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function SeoServicePage() {
  const faqs = [
    {
      q: 'How long does it take to see organic traffic growth?',
      a: 'While technical changes improve crawlability instantly, significant organic ranking growth typically builds over 3 to 6 months depending on competition.',
    },
    {
      q: 'What is the difference between technical and on-page SEO?',
      a: 'Technical SEO focuses on site speed, crawl errors, sitemaps, and SSL. On-page SEO involves optimizing copy, headings, and metadata structures.',
    },
    {
      q: 'Do you perform reverse DNS Googlebot log file analysis?',
      a: 'Yes, we analyze raw server logs to monitor crawler frequency, check for crawl budget waste, and verify authentic search spider hits.',
    },
    {
      q: 'Why is site speed important for search engine rankings?',
      a: 'Google uses site speed as a primary ranking signal (via Core Web Vitals). Faster loading pages reduce user bounce rates and improve crawling frequency.',
    },
    {
      q: 'What is an XML sitemap and do we need it?',
      a: 'An XML sitemap lists all important page URLs, serving as a roadmap for search spiders. It guarantees that new blog posts or service updates are indexed promptly.',
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
                name: 'SEO',
                item: 'https://nexgrowth.in/services/seo',
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
            serviceType: 'Search Engine Optimisation & Audit Services',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'SEO Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Technical SEO Services',
                    description: 'Speed optimization, crawl audits, canonical tagging, and XML sitemaps.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'On-page SEO Services',
                    description: 'Keyword-optimized headings, metadata layout structure, and copy optimization.',
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
        { name: 'SEO' },
      ]}
      badge="Capabilities // Search Engine Optimisation"
      title="Technical SEO Services & On-Page Audit Solutions"
      subtitle="Struggling to earn search visibility? NexGrowth is a specialized B2B SEO agency. We deliver expert technical SEO services and audits designed to scale organic traffic."
      primaryCtaText="Get Custom Quote"
      primaryCtaHref="/#contact"
      secondaryCtaText="Book Free Consultation"
      secondaryCtaHref="/#contact"
      whyChooseTitle="Why Choose NexGrowth"
      whyChooseContent={
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Most SEO firms focus only on buying links or rewriting copy. At NexGrowth, we approach organic visibility from an engineering standpoint. We are a search optimization <strong>SEO company</strong> that solves the technical problems holding back your rankings. Crawl blockages, unoptimized redirection rules, duplicate templates, and slow server response times can isolate key service pages from search engine indexing.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            By aligning page architecture, speed index scores, sitemaps, and content, we build a solid pipeline of high-intent organic traffic that actually converts into sales. Our campaign consultants prioritize structural page integrity, ensuring header selectors match the precise keywords your prospects query daily.
          </p>
          <p>
            We monitor indexation patterns weekly using advanced console logs, identifying orphan pages and fixing redirect loops promptly. This proactive approach ensures search bots crawl your site efficiently, maximizing your return on organic investment.
          </p>
        </>
      }
      servicesTitle="Technical SEO Services"
      servicesSubtitle="Our expert consultants deliver complete optimization audits and campaign management:"
      servicesList={[
        {
          title: 'Technical SEO Audits & Optimization',
          desc: 'We evaluate Core Web Vitals, mobile viewport setups, canonical targets, redirect rules, and robots instructions. We eliminate crawl waste, securing efficient indexing.',
        },
        {
          title: 'On-Page Content Structuring',
          desc: 'We optimize title tags, meta descriptions, visual heading structures, and media attributes. We align copies with natural LSI related terms to prevent keyword stuffing.',
        },
        {
          title: 'Website SEO Audit Reporting',
          desc: 'We perform crawl simulations to identify duplicate path tags, missing sitemap logs, slow script files, and broken links across your directory tree.',
        },
        {
          title: 'Google Ranking Services',
          desc: 'We design data-driven campaigns targeting high-converting search strings, tracking performance using Google Search Console and analytics hooks.',
        },
      ]}
      benefitsTitle="Benefits"
      benefitsSubtitle="A high-ranking website reduces your dependency on paid ads. Key benefits include:"
      benefitsList={[
        {
          tag: 'Advantage 01',
          title: 'Compounding Traffic Channels',
          desc: 'Paid advertising stops when the budget ends. Organic traffic grows over time, building a pipeline of prospects without continuous cost-per-click charges.',
        },
        {
          tag: 'Advantage 02',
          title: 'High Conversion Relevance',
          desc: 'We target transaction queries rather than informational terms, positioning your services directly in front of buyers ready to request quotes.',
        },
        {
          tag: 'Advantage 03',
          title: 'Enhanced Brand Credibility',
          desc: 'Dominating search results demonstrates industry authority, building trust with corporate clients searching for reliable B2B services.',
        },
      ]}
      processTitle="Our Process"
      processSubtitle="Our workflow is structured, transparent, and metrics-driven:"
      processList={[
        {
          num: '01',
          title: 'Site Architecture Crawl Audit',
          desc: 'We scan your codebase using simulated crawlers to identify redirect loops, missing canonical configurations, and broken links.',
        },
        {
          num: '02',
          title: 'Keyword & Competitor Mapping',
          desc: 'We analyze search volume and competition to select high-intent search terms that match your company\'s service offerings.',
        },
        {
          num: '03',
          title: 'On-Page Copy Alignment',
          desc: 'We restructure layout headers, optimize title strings, write meta descriptions, and link related subpages to pass crawler index checks.',
        },
        {
          num: '04',
          title: 'Technical Script & Schema Configurations',
          desc: 'We configure dynamic robots.txt logs, build XML sitemaps, inject JSON-LD schemas, and test mobile speed indexes.',
        },
        {
          num: '05',
          title: 'Performance Monitoring',
          desc: 'We track search positions, review console indexation logs, and adjust link structures based on rank metrics.',
        },
      ]}
      midPageCta={{
        tag: 'Complimentary Check',
        title: 'Want to identify indexation and crawl errors today?',
        desc: 'Get a complimentary technical check covering canonical tags, redirect loops, and sitemap layout setups.',
        buttonText: 'Get Free Website Audit',
        buttonHref: '/#contact',
      }}
      techTitle="Technologies We Use"
      techIntro="We utilize industry-leading analytics and auditing tools:"
      techTags={[
        'Google Search Console',
        'Screaming Frog',
        'Ahrefs',
        'SEMrush',
        'Google Analytics 4',
        'Lighthouse Speed Indexers',
      ]}
      techOutro="By leveraging raw server logs and analytics hooks, we verify search spider traffic, monitor resource allocation, and address crawler errors immediately."
      industriesTitle="Industries We Serve"
      industriesIntro="We optimize search presence for companies in key verticals:"
      industriesList={[
        {
          title: 'B2B SaaS platforms',
          desc: 'Targeting transactional terms like CRM integrations and analytics software.',
        },
        {
          title: 'Professional B2B Consulting',
          desc: 'Optimization targeting corporate clients looking for advisory services.',
        },
        {
          title: 'E-commerce Brands',
          desc: 'Architecting clean catalog indexes to secure product search snippets.',
        },
        {
          title: 'Finance & Law Firms',
          desc: 'Dominating regional advisory searches to scale local client acquisition.',
        },
      ]}
      faqsTitle="Frequently Asked Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'Get In Touch',
        title: 'Ready to scale your search visibility with technical SEO services?',
        desc: 'Submit your requirements to connect with an SEO expert and get a custom quote. Need a new website? Check our Web Development services.',
        buttonText: 'Get Custom SEO Quote',
        buttonHref: '/#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

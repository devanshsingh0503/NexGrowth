import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Google Ads Agency | Expert PPC Management | NexGrowth',
  description: 'Acquire high-intent customers with NexGrowth. As a Google Ads agency, we offer expert PPC management and Google Ads services designed to scale acquisition ROAS.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/google-ads',
  },
  openGraph: {
    title: 'Google Ads Agency | Expert PPC Management | NexGrowth',
    description: 'Acquire high-intent customers with NexGrowth. As a Google Ads agency, we offer expert PPC management and Google Ads services designed to scale acquisition ROAS.',
    url: 'https://nexgrowth.in/services/google-ads',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Google Ads Agency Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Agency | Expert PPC Management | NexGrowth',
    description: 'Acquire high-intent customers with NexGrowth. As a Google Ads agency, we offer expert PPC management and Google Ads services designed to scale acquisition ROAS.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function GoogleAdsServicePage() {
  const faqs = [
    {
      q: 'What is a good starting budget for Google Ads campaign management?',
      a: 'We tailor the recommended ad spend to your industry competition and target cost-per-click to ensure sufficient data volume for bid optimization.',
    },
    {
      q: 'Do you build custom landing pages for the ad campaigns?',
      a: 'Yes. We design and code fast, responsive landing pages to maximize conversion rates and improve Google Quality Scores.',
    },
    {
      q: 'How do you track conversions accurately?',
      a: 'We deploy Tag Manager scripts to track form submissions, phone call clicks, and booking events, filtering out spam or duplicate hits.',
    },
    {
      q: 'What is Quality Score in Google Ads and why does it matter?',
      a: 'Quality Score is Google’s rating of ad relevance, expected CTR, and landing page experience. Higher scores reduce CPC fees significantly.',
    },
    {
      q: 'What are negative keywords and how do they save budget?',
      a: 'Negative keywords prevent ads from rendering on unrelated queries, ensuring click budgets are spent exclusively on transaction intent search strings.',
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
                name: 'Google Ads',
                item: 'https://nexgrowth.in/services/google-ads',
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
            serviceType: 'Google Ads & Paid Search Advertising Management',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'PPC Advertising Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Search Campaign Setup',
                    description: 'Targeting high-intent keyword search strings.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'PPC Keyword Bid Management',
                    description: 'Real-time bidding audits and landing page testing.',
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
        { name: 'Google Ads' },
      ]}
      badge="Capabilities // Google Ads"
      title="Google Ads Agency & B2B PPC Management Solutions"
      subtitle="Acquire high-intent customers with NexGrowth. As a specialized Google Ads agency, we offer expert PPC management and Google Ads services designed to scale acquisition ROAS."
      primaryCtaText="Get Custom Quote"
      primaryCtaHref="/#contact"
      secondaryCtaText="Talk To Expert"
      secondaryCtaHref="/#contact"
      whyChooseTitle="Why Choose NexGrowth"
      whyChooseContent={
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Many agencies set up ad campaigns and let them run on autopilot, leading to wasted spend on low-intent keywords. At NexGrowth, we approach <strong>PPC campaign</strong> architecture with an engineering mindset. We don't rely on automated bid recommendations that waste your click budget on broad-match informational search queries.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            We optimize landing page layouts, design clean conversion tracking, and perform daily bid modifications to ensure your budget is spent on queries that drive revenue. We monitor performance factors such as click-through rates (CTR), quality score ratings, and cost-per-acquisition (CPA) metrics.
          </p>
          <p>
            By aligning your paid ads with fast-loading, highly-targeted landing pages, we improve Google's landing page experience metrics. This directly lowers your average cost-per-click, enabling you to acquire more qualified leads for the same ad spend.
          </p>
        </>
      }
      servicesTitle="Google Ads Services"
      servicesSubtitle="We build, manage, and scale comprehensive advertising campaigns across Google networks:"
      servicesList={[
        {
          title: 'PPC Search Campaign Management',
          desc: 'We build highly structured keyword ad groups, write engaging ad copy versions, and manage negative keyword directories daily to prevent waste.',
        },
        {
          title: 'Performance Max (PMax) Campaigns',
          desc: 'We manage asset groups, feed audiences, and check target ROAS settings to scale conversions across YouTube, Discover, Gmail, and Google Maps.',
        },
        {
          title: 'Display & Retargeting Campaign Setup',
          desc: 'We design responsive display banners and set up audience retargeting arrays to recapture past landing page visitors who left before converting.',
        },
        {
          title: 'Local Search Ad Campaigns',
          desc: 'We optimize local map campaigns to drive phone calls and navigation queries for physical business locations.',
        },
      ]}
      benefitsTitle="Benefits"
      benefitsSubtitle="Partnering with an experienced Google Ads expert delivers compounding marketing benefits:"
      benefitsList={[
        {
          tag: 'Advantage 01',
          title: 'Instant Lead Pipelines',
          desc: 'While organic SEO builds over months, PPC campaigns position your B2B offerings on page one of Google search results instantly.',
        },
        {
          tag: 'Advantage 02',
          title: 'High-Intent Clicks',
          desc: 'We target users searching for commercial queries (e.g. "software development company near me"), securing visitors who are ready to buy.',
        },
        {
          tag: 'Advantage 03',
          title: 'Transparent ROI Metrics',
          desc: 'Every rupee of ad spend is tracked. We report exact cost-per-lead (CPL) and return-on-ad-spend (ROAS) indicators to keep metrics clear.',
        },
      ]}
      processTitle="Our Process"
      processSubtitle="We apply a systematic 5-stage setup:"
      processList={[
        {
          num: '01',
          title: 'Account & Analytics Audit',
          desc: 'We audit your historical campaign data to identify wasted ad spend, search term anomalies, and tracking issues.',
        },
        {
          num: '02',
          title: 'Keyword & Match Type Mapping',
          desc: 'We compile transactional keyword lists and organize them into exact and phrase match parameters.',
        },
        {
          num: '03',
          title: 'Landing Page Optimization & Pixel Setup',
          desc: 'We build fast, responsive landing pages and set up Google Tag Manager scripts to track form leads and booking calls accurately.',
        },
        {
          num: '04',
          title: 'Ad Copywriting & Launch',
          desc: 'We draft ad headlines and description variations to secure high Quality Scores before launching campaigns.',
        },
        {
          num: '05',
          title: 'Optimization & Scale',
          desc: 'We exclude non-converting search terms, test landing pages, adjust device bids, and scale winning campaigns.',
        },
      ]}
      midPageCta={{
        tag: 'PPC Account Audit',
        title: 'Unsure why your cost-per-click is climbing?',
        desc: 'Let our certified experts perform a free review of your account setup, bidding models, and landing page quality scores.',
        buttonText: 'Book Free Consultation',
        buttonHref: '/#contact',
      }}
      techTitle="Technologies We Use"
      techIntro="We leverage reliable tracking and software platforms:"
      techTags={[
        'Google Ads Editor',
        'Google Tag Manager',
        'Google Analytics 4',
        'Hotjar',
        'Optimizely',
      ]}
      techOutro="By leveraging Google Ads Editor and Tag Manager, we manage large campaign setups efficiently and set up secure server-side tracking pipelines to bypass ad blockers."
      industriesTitle="Industries We Serve"
      industriesIntro="We drive search clicks for companies across major verticals:"
      industriesList={[
        {
          title: 'B2B SaaS Portals',
          desc: 'Generating signups for administrative software platforms.',
        },
        {
          title: 'Professional B2B Services',
          desc: 'Acquiring consult leads for accounting, auditing, and corporate advisory agencies.',
        },
        {
          title: 'Logistics & Transportation',
          desc: 'Driving quotes for shipping and warehouse operations.',
        },
        {
          title: 'Enterprise E-commerce',
          desc: 'Driving shopping conversions and catalog sales.',
        },
      ]}
      faqsTitle="Frequently Asked Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'Contact Us',
        title: 'Ready to partner with an accredited Google Ads agency?',
        desc: 'Submit your requirements to discuss PPC budget options and get a custom quote. Also looking to target social networks? Explore our Facebook & Meta Ads services.',
        buttonText: 'Get Paid Ads Quote',
        buttonHref: '/#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Facebook Ads Agency | Meta Ads Management | NexGrowth',
  description: 'Acquire B2B clients with NexGrowth. As a premier Facebook Ads agency, we specialize in Meta Ads management and Instagram Ads expert creatives that scale ROAS.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/meta-ads',
  },
  openGraph: {
    title: 'Facebook Ads Agency | Meta Ads Management | NexGrowth',
    description: 'Acquire B2B clients with NexGrowth. As a premier Facebook Ads agency, we specialize in Meta Ads management and Instagram Ads expert creatives that scale ROAS.',
    url: 'https://nexgrowth.in/services/meta-ads',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Facebook Ads Agency Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Ads Agency | Meta Ads Management | NexGrowth',
    description: 'Acquire B2B clients with NexGrowth. As a premier Facebook Ads agency, we specialize in Meta Ads management and Instagram Ads expert creatives that scale ROAS.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function MetaAdsServicePage() {
  const faqs = [
    {
      q: 'What is the Meta Conversions API (CAPI) and do you configure it?',
      a: 'Yes. Meta CAPI links server-side events directly to Meta’s ad server, bypassing browser ad-blockers to track conversions accurately.',
    },
    {
      q: 'How often should ad creatives be refreshed?',
      a: 'To avoid ad fatigue (users ignoring repetitive banners), we recommend updating ad creatives every 2 to 3 weeks.',
    },
    {
      q: 'What starting budget is recommended for Meta Ads?',
      a: 'A focused initial testing budget allows us to validate multiple creative variations and identify high-converting audience segments before scaling.',
    },
    {
      q: 'What is lookalike audience targeting in Meta Ads?',
      a: 'Lookalike targeting uses Meta’s machine learning algorithm to find new prospects whose characteristics match those of your current best buyers.',
    },
    {
      q: 'How do you structure custom retargeting campaigns?',
      a: 'We target engaged visitors who explored your core services or products but left before converting, re-engaging them with social proof and video testimonials.',
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
                name: 'Meta Ads',
                item: 'https://nexgrowth.in/services/meta-ads',
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
            serviceType: 'Meta & Social Media Advertising Management',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Meta Advertising Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Facebook Marketing Services',
                    description: 'Bespoke demographics targeting and audience filters.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Instagram Ad Creative Setup',
                    description: 'Designing high-converting video and image layouts.',
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
        { name: 'Meta Ads' },
      ]}
      badge="Capabilities // Meta Ads"
      title="Facebook Ads Agency & B2B Meta Campaign Management"
      subtitle="Acquire B2B clients with NexGrowth. As a premier Facebook Ads agency, we specialize in Meta Ads management and Instagram Ads expert creatives that scale ROAS."
      primaryCtaText="Get Custom Quote"
      primaryCtaHref="/#contact"
      secondaryCtaText="Talk To Expert"
      secondaryCtaHref="/#contact"
      whyChooseTitle="Why Choose NexGrowth"
      whyChooseContent={
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Scaling display advertising on Facebook and Instagram requires more than simply boosting posts. You need a dedicated B2B display campaign partner that understands creative iteration, audience testing, and data tracking. Lazy ad setups and generic, non-optimized layouts cause ad fatigue, resulting in high acquisition costs.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            At NexGrowth, we build custom conversion paths that bridge high-impact social display ads with optimized, fast-loading landing pages, ensuring maximum efficiency. We focus on hook rates, CTR metrics, and return on ad spend (ROAS) indicators.
          </p>
          <p>
            By utilizing the Meta Conversions API (CAPI), we set up server-to-server tracking pipelines that bypass standard browser ad-blockers. This guarantees that your conversion data remains 100% accurate, allowing Meta's algorithms to optimize campaign delivery effectively.
          </p>
        </>
      }
      servicesTitle="Facebook & Instagram Meta Ads Services"
      servicesSubtitle="We build, manage, and optimize scalable paid acquisition campaigns across Meta networks:"
      servicesList={[
        {
          title: 'Meta Ads Campaign Setup & Structuring',
          desc: 'We set up business accounts, configure pixel triggers, verify custom domains, and pace media budgets across ad sets.',
        },
        {
          title: 'B2B Custom Demographic Targeting',
          desc: 'We target decision-makers based on industry classifications, company sizes, job titles, and lookalike list metrics.',
        },
        {
          title: 'Social Ad Creative Production',
          desc: 'We design high-converting visual assets, write ad copy versions, and structure carousel, story, and video overlay assets.',
        },
        {
          title: 'Dynamic Product Retargeting',
          desc: 'We set up dynamic catalog syncs to display viewed products to interested users, bringing them back to purchase.',
        },
      ]}
      benefitsTitle="Benefits"
      benefitsSubtitle="Partnering with an Instagram Ads expert helps you turn display clicks into revenue:"
      benefitsList={[
        {
          tag: 'Advantage 01',
          title: 'Targeted Brand Reach',
          desc: 'Meta ads allow you to display your B2B offerings directly to people matching your ideal client profile.',
        },
        {
          tag: 'Advantage 02',
          title: 'Visual Storytelling',
          desc: 'Showcase software capabilities, client reviews, and product features using engaging video formats.',
        },
        {
          tag: 'Advantage 03',
          title: 'Lookalike Audience Scale',
          desc: 'Meta\'s machine learning finds new prospects similar to your existing leads, enabling reliable growth.',
        },
      ]}
      processTitle="Our Process"
      processSubtitle="We follow a rigorous conversion-focused workflow:"
      processList={[
        {
          num: '01',
          title: 'Pixel & API Integration',
          desc: 'We set up secure Meta Pixel tracking APIs to capture conversion events safely, resolving standard browser tracking limitations.',
        },
        {
          num: '02',
          title: 'Audience Research & Segmentation',
          desc: 'We define targeting variables, build lookalike source parameters, and segment cold prospect pools from past visitors.',
        },
        {
          num: '03',
          title: 'Creative Prototyping & Copy',
          desc: 'We design graphic templates, draft video hooks, write ad descriptions, and design conversion-optimized landing pages.',
        },
        {
          num: '04',
          title: 'Campaign Setup & Launch',
          desc: 'We set up campaign layouts, divide testing budgets, configure bidding parameters, and launch the first ad sets.',
        },
        {
          num: '05',
          title: 'Iterative Scaling & Optimization',
          desc: 'We stop low-performing assets, shift budgets to winning demographics, test new copy variations, and scale.',
        },
      ]}
      midPageCta={{
        tag: 'Creative Review',
        title: 'Want to audit your current social ad creatives?',
        desc: 'Set up a creative review with our display experts to check visual copy, hook angles, and funnel drop-off stats.',
        buttonText: 'Book Free Consultation',
        buttonHref: '/#contact',
      }}
      techTitle="Technologies We Use"
      techIntro="We leverage modern media management and testing tools:"
      techTags={[
        'Meta Ads Manager',
        'Meta Conversions API (CAPI)',
        'Canva',
        'Figma',
        'Google Analytics 4',
      ]}
      techOutro="By leveraging Meta's Conversion API and GTM events, we synchronize user actions from backend databases directly with Facebook, securing accurate campaign attribution data."
      industriesTitle="Industries We Serve"
      industriesIntro="We design display campaigns for businesses in major verticals:"
      industriesList={[
        {
          title: 'B2B SaaS platforms',
          desc: 'Acquiring trial signups from business managers.',
        },
        {
          title: 'E-commerce',
          desc: 'Scaling D2C sales with responsive product catalog displays.',
        },
        {
          title: 'Real Estate Developers',
          desc: 'Capturing high-intent buyer leads with custom video tours.',
        },
        {
          title: 'Professional B2B Services',
          desc: 'Connecting consulting agencies with enterprise corporate buyers.',
        },
      ]}
      faqsTitle="Frequently Asked Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'Contact Us',
        title: 'Ready to scale displays with a premier B2B Facebook Ads agency?',
        desc: 'Submit your requirements to discuss campaign strategies and get a custom quote. Need organic branding support too? Explore our Social Media Management services.',
        buttonText: 'Get Paid Ads Quote',
        buttonHref: '/#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency | SMM Services | NexGrowth',
  description: 'Scale SMM content calendar campaigns with NexGrowth. As a leading social media marketing agency, we offer expert content creation and organic growth services.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/social-media-marketing',
  },
  openGraph: {
    title: 'Social Media Marketing Agency | SMM Services | NexGrowth',
    description: 'Scale SMM content calendar campaigns with NexGrowth. As a leading social media marketing agency, we offer expert content creation and organic growth services.',
    url: 'https://nexgrowth.in/services/social-media-marketing',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Social Media Marketing SMM Agency Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency | SMM Services | NexGrowth',
    description: 'Scale SMM content calendar campaigns with NexGrowth. As a leading social media marketing agency, we offer expert content creation and organic growth services.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function SocialMediaMarketingServicePage() {
  const faqs = [
    {
      q: 'What is a social media content calendar and how does it organize posting?',
      a: 'A content calendar maps out visual assets, copy drafts, and publish times weeks in advance, ensuring consistent presence across LinkedIn and Instagram.',
    },
    {
      q: 'Do SMM campaigns include professional copy and graphic design?',
      a: 'Yes. We provide complete copy drafts, graphic designs matching brand palettes, and video formatting optimized for social platforms.',
    },
    {
      q: 'How do you measure social media marketing ROI?',
      a: 'We track engagement rates, profile views, outbound site traffic, and inbound lead queries using custom attribution hooks.',
    },
    {
      q: 'How often do you publish posts across channels?',
      a: 'Posting frequency depends on industry trends. We typically schedule 3 to 5 high-value posts per week to maximize reach without flooding feeds.',
    },
    {
      q: 'Which social platforms should my business prioritize?',
      a: 'B2B companies benefit most from LinkedIn and Twitter (X) campaigns, while e-commerce and retail brands drive sales on Instagram and TikTok.',
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
                name: 'Social Media Marketing',
                item: 'https://nexgrowth.in/services/social-media-marketing',
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
            serviceType: 'Social Media Marketing & Management Services',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Social Media Marketing Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Social Media Management',
                    description: 'Audits, content calendars planning, and scheduling.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Instagram & LinkedIn Growth',
                    description: 'Custom designs, copywriting, and profile optimization.',
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
        { name: 'Social Media Marketing' },
      ]}
      badge="Capabilities // Social Media Marketing"
      title="Social Media Marketing Agency & B2B SMM Services"
      subtitle="Scale organic content campaigns with NexGrowth. As a leading social media marketing agency, we offer expert content creation and organic growth services."
      primaryCtaText="Get Custom Quote"
      primaryCtaHref="/#contact"
      secondaryCtaText="Talk To Expert"
      secondaryCtaHref="/#contact"
      whyChooseTitle="Why Choose NexGrowth"
      whyChooseContent={
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            Organic brand visibility on social networks requires more than sharing occasional quotes or updates. You need a dedicated B2B content marketing partner that understands SMM campaign layouts, audience patterns, and creative scheduling. Lazy posting calendars and generic templates cause feed fatigue, resulting in low follower engagement.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            At NexGrowth, we approach organic growth with an editorial framework. We design custom graphic templates and write professional copy designed to build brand authority. We track metrics like profile view counts, click-through rates, and inbound lead queries.
          </p>
          <p>
            By aligning your social campaigns with your technical site optimizations, we drive a pipeline of high-intent search traffic. This integrated marketing approach ensures that followers turn into qualified sales opportunities.
          </p>
        </>
      }
      servicesTitle="Social Media Marketing Services"
      servicesSubtitle="We build, manage, and optimize scalable paid and organic campaigns across social platforms:"
      servicesList={[
        {
          title: 'SMM Campaign Setup & Structuring',
          desc: 'We set up business profiles, verify domains, compile custom hashtags, configure link overlays, and analyze competitor strategies.',
        },
        {
          title: 'Content Calendar Planning',
          desc: 'We map out graphic assets, copy drafts, and publish times weeks in advance, ensuring consistent presence across LinkedIn and Instagram.',
        },
        {
          title: 'Social Copywriting & Asset Creation',
          desc: 'We design graphic templates, draft video hooks, write ad descriptions, and design conversion-optimized landing pages.',
        },
        {
          title: 'Growth Audits & Optimization',
          desc: 'We exclude non-converting search terms, shift budgets to winning demographics, test new copy variations, and scale.',
        },
      ]}
      benefitsTitle="Benefits"
      benefitsSubtitle="Partnering with an SMM specialist helps you turn social clicks into revenue:"
      benefitsList={[
        {
          tag: 'Advantage 01',
          title: 'Targeted Brand Reach',
          desc: 'SMM services allow you to display your B2B offerings directly to people matching your ideal client profile.',
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
      processSubtitle="We follow a rigorous, conversion-focused workflow:"
      processList={[
        {
          num: '01',
          title: 'SMM Campaign Setup & Audit',
          desc: 'We set up business profiles, verify domains, compile custom hashtags, configure link overlays, and analyze competitor strategies.',
        },
        {
          num: '02',
          title: 'Content Calendar Planning',
          desc: 'We map out graphic assets, copy drafts, and publish times weeks in advance, ensuring consistent presence across LinkedIn and Instagram.',
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
        tag: 'Content Audit',
        title: 'Want to audit your current social media calendars?',
        desc: 'Set up a creative review with our display experts to check visual copy, hook angles, and funnel drop-off stats.',
        buttonText: 'Book Free Consultation',
        buttonHref: '/#contact',
      }}
      techTitle="Technologies We Use"
      techIntro="We leverage modern media management and testing tools:"
      techTags={[
        'Meta Ads Manager',
        'Conversions API (CAPI)',
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
        title: 'Ready to partner with a trusted B2B social media marketing agency?',
        desc: 'Submit your requirements to discuss SMM content calendars and get a custom quote. Need organic SEO support too? Explore our Technical SEO Services.',
        buttonText: 'Get Custom SMM Quote',
        buttonHref: '/#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

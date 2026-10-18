import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Landing Page Design and Development Agency in India | NexGrowth',
  description: 'High-converting landing page design and development agency in India. Next.js engineered landing pages with lightning-fast load times, persuasive copy, and high ROAS for Google & Meta Ads.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/landing-page-development',
  },
  keywords: [
    'Landing page design and development agency',
    'High converting landing pages India',
    'Next.js landing page developer',
    'PPC landing page design agency',
    'Landing page development Delhi NCR Noida Ghaziabad',
  ],
  openGraph: {
    title: 'Landing Page Design and Development Agency in India | NexGrowth',
    description: 'Bespoke high-converting landing pages engineered for paid ads, SaaS signups, and enterprise lead generation.',
    url: 'https://nexgrowth.in/services/landing-page-development',
    siteName: 'NexGrowth',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Landing Page Design Agency India' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function LandingPageDevelopmentPage() {
  const faqs = [
    {
      q: 'Why should I build a custom coded landing page instead of using Unbounce or WordPress?',
      a: 'Custom Next.js landing pages achieve 95+ Google PageSpeed scores, zero third-party plugin vulnerabilities, instant server responses, and full flexibility for custom CRM webhooks, multi-step forms, and interactive pricing calculators that template builders cannot support.',
    },
    {
      q: 'Can you integrate landing page forms with HubSpot, Zoho, or custom webhooks?',
      a: 'Yes. Every landing page we build connects directly with your CRM, Google Sheets, WhatsApp Business API, and automated email follow-ups with instant confirmation triggers.',
    },
    {
      q: 'Do you set up conversion tracking pixels and Google Tag Manager?',
      a: 'Yes. We configure precise tracking for Google Ads enhanced conversions, Meta CAPI (Conversions API), LinkedIn Insight Tag, and GA4 custom events so your ad algorithms optimize for real revenue.',
    },
    {
      q: 'What is the delivery timeline for a custom landing page?',
      a: 'A high-converting custom landing page complete with responsive design, copywriting refinement, tracking integration, and speed optimization is typically delivered in 5 to 7 business days.',
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexgrowth.in' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://nexgrowth.in/services' },
              { '@type': 'ListItem', position: 3, name: 'Landing Page Development', item: 'https://nexgrowth.in/services/landing-page-development' },
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
            serviceType: 'Landing Page Design and Development Services',
            provider: {
              '@type': 'Organization',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
              telephone: '+918052731617',
              email: 'devanshnexgrowth@gmail.com',
            },
            areaServed: ['India', 'Delhi NCR', 'Ghaziabad', 'Noida', 'Worldwide'],
            description: 'Custom high-converting landing page design, copywriting alignment, Next.js engineering, and conversion rate optimization services.',
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
        { name: 'Landing Pages' },
      ]}
      badge="CONVERSION RATE ENGINEERING"
      title="Landing Page Design and Development Agency"
      subtitle="Engineered for maximum return on ad spend. Fast, persuasive, and designed to convert paid clicks into qualified business enquiries."
      whyChooseTitle="Why Choose NexGrowth for Landing Page Development"
      whyChooseContent={
        <>
          <p>
            When spending on Google Ads or Meta Ads, sending traffic to a generic homepage burns ad budget. A high-converting landing page isolates search intent, removes distracting site links, and guides visitors straight to a clear, compelling call to action.
          </p>
          <p>
            At NexGrowth, we engineer custom Next.js landing pages that load in under 1.5 seconds on mobile networks, feature persuasive benefit-driven hierarchies, and include server-side form validation that ensures zero lead leakage.
          </p>
        </>
      }
      servicesTitle="Landing Page Capabilities"
      servicesSubtitle="Targeted engineering designed to lower customer acquisition cost (CAC) and elevate conversion rates."
      servicesList={[
        { title: 'PPC & Search Campaign Pages', desc: 'Direct keyword message-match layouts that increase Google Ads Quality Scores and reduce Cost Per Click (CPC).' },
        { title: 'B2B Lead Generation Funnels', desc: 'Multi-step qualification forms, interactive ROI calculators, and instant calendar booking integrations.' },
        { title: 'SaaS Free-Trial & Demo Pages', desc: 'Product showcase windows, feature breakdown tables, customer proof counters, and instant signup triggers.' },
        { title: 'Conversion Copywriting Structure', desc: 'Compelling headlines, clear value propositions, trust signals, and FAQs mapped to objection handling.' },
        { title: 'Analytics & Tracking Architecture', desc: 'Full setup of Meta Conversions API (CAPI), Google Ads enhanced conversion tracking, and GA4 events.' },
        { title: 'Speed & Core Web Vitals Optimization', desc: 'Sub-second rendering with Next.js static page generation and automatic image compression.' },
      ]}
      benefitsTitle="Measurable Campaign Impact"
      benefitsSubtitle="How dedicated custom landing pages transform ad campaign profitability."
      benefitsList={[
        { tag: 'ROAS', title: '2x to 4x Higher Conversion Rates', desc: 'Eliminating navigation exits keeps user attention locked on the primary conversion goal.' },
        { tag: 'Speed', title: 'Under 1.5s Load Time', desc: 'Prevent mobile bounce rates with instant rendering on 4G and 5G cellular networks.' },
        { tag: 'Quality Score', title: 'Lower Cost Per Click', desc: 'Strong message match between search ads and landing page content earns higher Google Quality Scores.' },
        { tag: 'Data', title: 'Clean CRM Integration', desc: 'Instant data delivery to your sales team with automatic email notifications and WhatsApp alerts.' },
      ]}
      processTitle="Landing Page Delivery Process"
      processSubtitle="From audience analysis to live campaign deployment within 5-7 days."
      processList={[
        { num: '01', title: 'Intent & Competitor Research', desc: 'Auditing your target keywords, competitors, value proposition, and user pain points.' },
        { num: '02', title: 'Wireframing & Copy Alignment', desc: 'Crafting persuasive editorial copy and structural layouts focused on conversion psychology.' },
        { num: '03', title: 'Next.js Development & Testing', desc: 'Coding the page with clean Tailwind CSS, GSAP micro-animations, and responsive layouts.' },
        { num: '04', title: 'Tracking Setup & Launch', desc: 'Configuring GA4, GTM, Meta Pixel, testing form submissions, and deploying to fast cloud CDN.' },
      ]}
      midPageCta={{
        tag: 'BOOST YOUR ADS',
        title: 'Stop wasting ad spend on low-converting pages.',
        desc: 'Let our team build a high-performance landing page tailored to your paid advertising campaign.',
        buttonText: 'Discuss Your Landing Page',
        buttonHref: '#contact',
      }}
      techTitle="Modern Technology Stack"
      techIntro="Built with enterprise-grade web frameworks that outperform WordPress page builders."
      techTags={['Next.js 16', 'React 19', 'Tailwind CSS', 'TypeScript', 'Google Tag Manager', 'Meta CAPI', 'HubSpot API', 'Zapier', 'Vercel Edge']}
      techOutro="Zero bloated plugins. 100% custom code optimized for speed and conversion."
      industriesTitle="Who We Build Landing Pages For"
      industriesIntro="Tailored conversion pages for diverse commercial verticals across India."
      industriesList={[
        { title: 'B2B & IT Services', desc: 'Custom enterprise consultation and RFP quote request landing pages.' },
        { title: 'Real Estate & Properties', desc: 'Project launch pages with floor plans, brochure downloads, and site visit scheduling.' },
        { title: 'Healthcare & Clinics', desc: 'Doctor appointment booking funnels with clinic locations and patient testimonials.' },
        { title: 'Financial & Legal Advisory', desc: 'Confidential inquiry forms, eligibility calculators, and trust verification badges.' },
      ]}
      faqsTitle="Landing Page FAQs"
      faqsList={faqs}
      bottomCta={{
        tag: 'LAUNCH TODAY',
        title: 'Ready for a landing page that actually converts?',
        desc: 'Contact our team for a fast 15-minute consultation to review your campaign and get a fixed-price proposal.',
        buttonText: 'Get Landing Page Proposal',
        buttonHref: '#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

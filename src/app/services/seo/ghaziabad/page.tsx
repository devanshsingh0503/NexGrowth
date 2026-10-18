import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'SEO Services in Ghaziabad | Digital Marketing Agency | NexGrowth',
  description: 'Top SEO services and digital marketing agency in Ghaziabad. We help manufacturers, traders, and local businesses in Sahibabad, Raj Nagar, and Indirapuram rank #1 on Google and capture local leads.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/seo/ghaziabad',
  },
  keywords: [
    'SEO services in Ghaziabad',
    'Digital marketing agency in Ghaziabad',
    'Local SEO company in Ghaziabad',
    'SEO agency Sahibabad Industrial Area',
    'Website SEO Indirapuram Vaishali Raj Nagar Ghaziabad',
  ],
  openGraph: {
    title: 'SEO Services in Ghaziabad | Digital Marketing Agency | NexGrowth',
    description: 'Data-driven SEO, Google Business Profile optimization, and local search growth for businesses in Ghaziabad.',
    url: 'https://nexgrowth.in/services/seo/ghaziabad',
    siteName: 'NexGrowth',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'SEO Services Ghaziabad' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function GhaziabadSEOPage() {
  const faqs = [
    {
      q: 'How long does it take to see organic rankings improve in Ghaziabad and Delhi NCR?',
      a: 'Most local business queries (e.g. Sahibabad, Indirapuram, Raj Nagar) begin showing significant ranking movement and initial inbound inquiries within 60 to 90 days. High-competition national keywords typically require 4 to 6 months of systematic content and technical optimization.',
    },
    {
      q: 'Do you help optimize our Google Business Profile (Google Maps) in Ghaziabad?',
      a: 'Yes. Local map-pack optimization is central to our strategy. We optimize your primary category, geo-tagged photo uploads, local review generation workflows, and local citation consistency across Indian directories.',
    },
    {
      q: 'What is included in your monthly SEO service for Ghaziabad businesses?',
      a: 'Our monthly packages include comprehensive technical site audits, on-page optimization, target keyword tracking, localized blog and service content creation, high-authority backlink outreach, and transparent monthly reporting on rankings and lead inquiries.',
    },
    {
      q: 'Do you use white-hat SEO techniques approved by Google?',
      a: 'Exclusively 100% white-hat. We follow Google Search Essentials strictly, focusing on technical page speed, schema markup, helpful user-focused content, and authentic digital PR that protects your website from algorithmic penalties.',
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
              { '@type': 'ListItem', position: 3, name: 'SEO Services', item: 'https://nexgrowth.in/services/seo' },
              { '@type': 'ListItem', position: 4, name: 'Ghaziabad', item: 'https://nexgrowth.in/services/seo/ghaziabad' },
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
            serviceType: 'Search Engine Optimization and Digital Marketing in Ghaziabad',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth Ghaziabad',
              url: 'https://nexgrowth.in/services/seo/ghaziabad',
              telephone: '+918052731617',
              email: 'devanshnexgrowth@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ghaziabad',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'IN',
              },
            },
            areaServed: ['Ghaziabad', 'Sahibabad Industrial Area', 'Indirapuram', 'Vaishali', 'Raj Nagar Extension', 'Delhi NCR'],
            description: 'Professional SEO services, Google Business Profile local search optimization, and digital marketing in Ghaziabad, Uttar Pradesh.',
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
        { name: 'SEO Services', href: '/services/seo' },
        { name: 'Ghaziabad' },
      ]}
      badge="GHAZIABAD SEO & DIGITAL MARKETING"
      title="SEO Services in Ghaziabad"
      subtitle="Dominate local Google searches, outrank regional competitors, and generate consistent inbound commercial leads for your business across Ghaziabad and Delhi NCR."
      whyChooseTitle="Local Search Dominance in Ghaziabad"
      whyChooseContent={
        <>
          <p>
            Ghaziabad is a booming economic powerhouse in Delhi NCR — spanning major manufacturing hubs in Sahibabad and Kavi Nagar to thriving commercial hubs in Indirapuram, Vaishali, and Raj Nagar Extension. When prospective clients search for products or services in your sector, appearing on page 1 of Google is the difference between winning high-value contracts and losing them to competitors.
          </p>
          <p>
            NexGrowth delivers technical, data-backed SEO that captures real commercial intent. We do not chase vanity metrics or irrelevant keywords; we target high-intent search queries that connect your sales team with buyers ready to do business.
          </p>
        </>
      }
      servicesTitle="SEO & Digital Marketing Solutions in Ghaziabad"
      servicesSubtitle="A comprehensive, multi-pillar SEO strategy tailored for local and regional growth."
      servicesList={[
        { title: 'Google Business Profile & Local 3-Pack', desc: 'Optimizing local map listings, geo-targeted signals, and customer review workflows to rank in the coveted Google 3-Pack.' },
        { title: 'Technical SEO & Page Speed Audits', desc: 'Resolving crawl errors, indexing blocks, mobile responsiveness, and Core Web Vitals to maximize search engine crawl efficiency.' },
        { title: 'Commercial Keyword Research', desc: 'Identifying high-converting search queries used by buyers in Ghaziabad, Noida, and Delhi NCR looking for your specific services.' },
        { title: 'On-Page Content & Schema Architecture', desc: 'Optimizing H1-H3 structures, keyword density, internal linking, and JSON-LD schema (Service, LocalBusiness, FAQ).' },
        { title: 'High-Authority Local Link Building', desc: 'Securing contextual backlinks from reputable Indian business directories, industry publications, and regional partners.' },
        { title: 'Transparent Rank & Lead Reporting', desc: 'Clear monthly reports detailing Google Search Console impressions, organic clicks, target keyword rankings, and phone/form leads.' },
      ]}
      benefitsTitle="Tangible Business Growth"
      benefitsSubtitle="How targeted SEO delivers sustainable, compounding returns compared to paid ads."
      benefitsList={[
        { tag: 'Leads', title: 'Consistent Inbound Inquiries', desc: 'Target buyers at the exact moment they are actively searching for your service.' },
        { tag: 'Cost', title: 'Zero Per-Click Costs', desc: 'Unlike Google Ads where visibility stops when your budget runs out, organic rankings compound over time.' },
        { tag: 'Trust', title: 'Higher Customer Credibility', desc: 'Over 75% of business searchers trust organic search results over sponsored search ads.' },
        { tag: 'Local', title: 'Direct Phone & Direction Clicks', desc: 'Google Maps optimization drives direct phone calls and office visits from local clients.' },
      ]}
      processTitle="Our 4-Phase SEO Growth Blueprint"
      processSubtitle="A proven roadmap that systematically elevates your organic rankings."
      processList={[
        { num: '01', title: 'Technical Audit & Baseline Crawl', desc: 'Auditing your site’s code, indexing status, speed bottlenecks, and competitor ranking profiles.' },
        { num: '02', title: 'Local Intent Keyword Mapping', desc: 'Selecting primary commercial queries and mapping each search intent to dedicated, high-converting URLs.' },
        { num: '03', title: 'On-Page & Schema Implementation', desc: 'Restructuring content, metadata, schema markup, and speed optimizations across target landing pages.' },
        { num: '04', title: 'Authority Building & Monthly Growth', desc: 'Earning legitimate editorial backlinks, optimizing Google Business Profile, and monitoring ranking climbs.' },
      ]}
      midPageCta={{
        tag: 'FREE SEO AUDIT',
        title: 'Find out why your website isn’t ranking in Ghaziabad.',
        desc: 'Request a free, no-obligation technical SEO audit. We will identify indexing errors and outline a realistic keyword ranking strategy.',
        buttonText: 'Claim Free SEO Audit',
        buttonHref: '#contact',
      }}
      techTitle="SEO & Analytics Stack"
      techIntro="We use industry-standard SEO and diagnostic tools to ensure accurate data."
      techTags={['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'Semrush', 'Screaming Frog', 'PageSpeed Insights', 'Schema.org', 'Google Tag Manager']}
      techOutro="100% white-hat methodologies compliant with Google Search Essentials."
      industriesTitle="Industries We Help Rank in Ghaziabad"
      industriesIntro="Proven SEO execution for local businesses and industrial enterprises."
      industriesList={[
        { title: 'Manufacturing & Industrial Goods', desc: 'Ranking for specialized machinery, raw materials, fabrication, and B2B industrial terms.' },
        { title: 'Logistics, Warehousing & Fleet', desc: 'Capturing freight, supply chain, and commercial transport queries across Western UP.' },
        { title: 'Healthcare, Clinics & Hospitals', desc: 'Dominating local search for specialized doctors, diagnostics, and regional clinics.' },
        { title: 'Real Estate & Commercial Spaces', desc: 'Generating organic investor leads for residential and commercial property developments.' },
      ]}
      faqsTitle="Ghaziabad SEO FAQs"
      faqsList={faqs}
      bottomCta={{
        tag: 'START RANKING',
        title: 'Ready to turn Google into your #1 client acquisition channel?',
        desc: 'Speak with our SEO strategists to discuss your target market, review competitors, and build a customized ranking plan.',
        buttonText: 'Schedule Strategy Session',
        buttonHref: '#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

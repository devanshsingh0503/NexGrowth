import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Shopify Website Development Company in India | E-Commerce Stores | NexGrowth',
  description: 'Custom Shopify and e-commerce website development company in India. High-converting Shopify stores, theme customizations, checkout optimization, and API integrations.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/shopify-development',
  },
  keywords: [
    'Shopify website development company in India',
    'E-commerce website development company in India',
    'Custom Shopify store development',
    'Shopify Plus agency Delhi NCR',
    'Ecommerce web development Ghaziabad Noida',
  ],
  openGraph: {
    title: 'Shopify Website Development Company in India | NexGrowth',
    description: 'Custom Shopify and e-commerce website development company in India. Engineered for high ROAS and seamless checkout.',
    url: 'https://nexgrowth.in/services/shopify-development',
    siteName: 'NexGrowth',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Shopify Development Company India' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ShopifyDevelopmentPage() {
  const faqs = [
    {
      q: 'Do you build custom Shopify themes or use pre-made templates?',
      a: 'We build tailored Shopify liquid themes and headless Next.js Shopify storefronts with bespoke UX, optimized for speed, brand differentiation, and maximum conversion rates.',
    },
    {
      q: 'Can you migrate an existing WooCommerce or Magento store to Shopify?',
      a: 'Yes. We perform complete e-commerce migrations, preserving customer records, product catalogs, order history, URLs, and SEO rankings without downtime.',
    },
    {
      q: 'Do you integrate Indian payment gateways like Razorpay, Cashfree, and PayU?',
      a: 'Absolutely. We configure automated UPI, credit/debit card, net banking, and COD fraud verification solutions tailored for Indian and international buyers.',
    },
    {
      q: 'How long does it take to launch a custom Shopify store with NexGrowth?',
      a: 'Standard custom Shopify stores typically launch within 2 to 4 weeks, depending on catalog size, custom functionality, and third-party ERP/CRM integrations.',
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
              { '@type': 'ListItem', position: 3, name: 'Shopify Development', item: 'https://nexgrowth.in/services/shopify-development' },
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
            serviceType: 'Shopify & E-Commerce Website Development Services',
            provider: {
              '@type': 'Organization',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
              telephone: '+918052731617',
              email: 'devanshnexgrowth@gmail.com',
            },
            areaServed: ['India', 'Delhi NCR', 'Ghaziabad', 'Noida', 'Worldwide'],
            description: 'Custom Shopify development, theme customization, e-commerce app integrations, and conversion rate optimization in India.',
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
        { name: 'Shopify & E-Commerce' },
      ]}
      badge="SHOPIFY & E-COMMERCE ENGINEERING"
      title="Shopify Website Development Company in India"
      subtitle="Engineered for high-volume sales, instant checkout speeds, and seamless omnichannel integrations that turn visitors into loyal customers."
      whyChooseTitle="Why Choose NexGrowth for Shopify Development"
      whyChooseContent={
        <>
          <p>
            An e-commerce store is more than a digital catalog — it is your 24/7 revenue engine. At NexGrowth, we engineer high-converting Shopify and e-commerce platforms with speed-focused theme code, intuitive product discovery, frictionless checkout, and reliable ERP/CRM connections.
          </p>
          <p>
            Whether launching an emerging D2C brand or scaling an established retail business across India and global markets, our developers build scalable architectures that maximize Average Order Value (AOV) and reduce cart abandonment.
          </p>
        </>
      }
      servicesTitle="Shopify & E-Commerce Development Solutions"
      servicesSubtitle="End-to-end commerce solutions designed for fast performance and frictionless conversions."
      servicesList={[
        { title: 'Custom Shopify Theme Architecture', desc: 'Bespoke liquid code tailored to your brand identity with zero template bloat and sub-second load times.' },
        { title: 'Shopify App & API Integrations', desc: 'Seamless synchronization with ERPs, CRMs, inventory managers, automated logistics, and shipping tracking systems.' },
        { title: 'Payment Gateway Configuration', desc: 'Secure checkout setups for Razorpay, Cashfree, Stripe, UPI, and automated Cash-on-Delivery (COD) fraud checks.' },
        { title: 'Headless Commerce with Next.js', desc: 'Next-generation decoupled stores using Shopify Storefront API and Next.js for instant static page transitions.' },
        { title: 'Platform Migration & SEO Continuity', desc: 'Flawless transfers from WooCommerce, Magento, or custom carts with complete 301 redirect mapping to protect rankings.' },
        { title: 'Checkout & Conversion Optimization', desc: 'Data-backed micro-interactions, trust badges, up-sell funnels, and mobile-first checkout usability audits.' },
      ]}
      benefitsTitle="Measurable E-Commerce Outcomes"
      benefitsSubtitle="Every line of code is structured to increase transactions, trust, and profitability."
      benefitsList={[
        { tag: 'Speed', title: 'Sub-2 Second Page Loads', desc: 'Optimized product collections and responsive image sizing for smooth mobile browsing.' },
        { tag: 'ROAS', title: 'Higher Ad Conversion Rates', desc: 'Frictionless landing pages designed to maximize paid traffic return from Meta and Google Ads.' },
        { tag: 'SEO', title: 'Structured Product Schema', desc: 'Built-in product, offers, review, and inventory schema for enhanced Google Shopping visibility.' },
        { tag: 'Mobile', title: '100% Mobile First UX', desc: 'Sticky add-to-cart, native thumb-zone navigation, and 1-tap payment methods.' },
      ]}
      processTitle="Our Shopify Development Process"
      processSubtitle="A structured roadmap from brand strategy to launch day and continuous scaling."
      processList={[
        { num: '01', title: 'Store Architecture & Discovery', desc: 'Catalog hierarchy, buyer persona analysis, payment gateway mapping, and design wireframes.' },
        { num: '02', title: 'Custom Theme Development', desc: 'Handcrafted Shopify liquid or headless Next.js frontend built to Core Web Vitals standards.' },
        { num: '03', title: 'App & Logistics Integrations', desc: 'Connecting inventory databases, payment processors, and shipping APIs (Shiprocket, Delhivery, etc.).' },
        { num: '04', title: 'Quality Assurance & Launch', desc: 'End-to-end test transactions, cross-browser compatibility tests, 301 redirects, and live launch.' },
      ]}
      midPageCta={{
        tag: 'LAUNCH YOUR STORE',
        title: 'Ready to build a high-converting Shopify store?',
        desc: 'Schedule a free consultation with our e-commerce engineering team to discuss your catalog and conversion goals.',
        buttonText: 'Book E-Commerce Call',
        buttonHref: '#contact',
      }}
      techTitle="E-Commerce Stack & Integrations"
      techIntro="We leverage modern commerce toolkits engineered for reliability and high uptime."
      techTags={['Shopify Liquid', 'Shopify Storefront API', 'Next.js 16', 'Tailwind CSS', 'Razorpay', 'Cashfree', 'Stripe', 'Klaviyo', 'Shiprocket', 'GraphQL']}
      techOutro="Robust integrations that empower your team to manage orders effortlessly."
      industriesTitle="Industries We Build E-Commerce For"
      industriesIntro="Proven e-commerce solutions tailored to industry-specific buying patterns."
      industriesList={[
        { title: 'D2C Brands & Apparel', desc: 'Visual storytelling, size guide popups, and high-converting lookbook layouts.' },
        { title: 'Beauty & Wellness', desc: 'Subscription billing, ingredient disclosures, and customer review widgets.' },
        { title: 'Electronics & Hardware', desc: 'Technical spec comparison tables, warranty registration, and volume discounts.' },
        { title: 'Food & Gourmet Beverages', desc: 'Cold chain shipping alerts, batch tracking, and recurrent subscription boxes.' },
      ]}
      faqsTitle="Shopify Development Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'GET STARTED',
        title: 'Let’s engineer your Shopify store.',
        desc: 'Speak with our technical leads to architect a custom e-commerce solution that scales with your growth.',
        buttonText: 'Request Custom Proposal',
        buttonHref: '#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

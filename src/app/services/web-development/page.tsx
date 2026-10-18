import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Website Development Company | Custom Web Design | NexGrowth',
  description: 'Looking for a website development company? NexGrowth builds custom, high-converting websites designed to scale. Fast, SEO-optimized, and responsive.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/web-development',
  },
  openGraph: {
    title: 'Website Development Company | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company? NexGrowth builds custom, high-converting websites designed to scale. Fast, SEO-optimized, and responsive.',
    url: 'https://nexgrowth.in/services/web-development',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'B2B Custom Website Development Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company | Custom Web Design | NexGrowth',
    description: 'Looking for a website development company? NexGrowth builds custom, high-converting websites designed to scale. Fast, SEO-optimized, and responsive.',
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
};

export default function WebDevelopmentServicePage() {
  const faqs = [
    {
      q: 'How much does website development cost?',
      a: 'The cost of custom website development depends on project scope, custom designs, database requirements, and API integrations. Contact us for a detailed brief and estimate.',
    },
    {
      q: 'How long does website development take?',
      a: 'A standard corporate website redesigned or built on Next.js takes between 4 to 8 weeks from initial discovery and wireframes to launch.',
    },
    {
      q: 'Is SEO included with website development?',
      a: 'Yes. All our custom website development projects include essential technical SEO setups, optimized heading tag structures, sitemaps, and SSL certificate integrations.',
    },
    {
      q: 'What is a website redesign and why do we need it?',
      a: 'A website redesign upgrades outdated frameworks to modern codebases like Next.js, optimizing mobile viewports, site speed scores, and core web vitals while retaining your exact search query history.',
    },
    {
      q: 'Will my custom website render well on mobile viewports?',
      a: 'Absolutely. Every website layout we build undergoes thorough responsive audits across multiple hardware profiles to guarantee responsive display and tap target sizing.',
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
            serviceType: 'Custom Website Development',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Website Development Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Responsive Website Design',
                    description: 'Mobile-first layout styling and components.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Next.js Website Development',
                    description: 'Dynamic and statically generated React framework applications.',
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
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a,
              },
            })),
          }),
        }}
      />
    </>
  );

  return (
    <ServicePageTemplate
      schemaScripts={schemaScripts}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Web Development' },
      ]}
      badge="CAPABILITIES // WEB DEVELOPMENT"
      title="CUSTOM WEBSITE DEVELOPMENT COMPANY SERVICES"
      subtitle="We build fast, responsive websites designed to help businesses generate more leads, improve user experience, and rank better in search engines. As a custom website development company, NexGrowth focuses on solving your digital bottlenecks."
      primaryCtaText="Get Custom Quote"
      secondaryCtaText="Book Free Consultation"
      whyChooseTitle="Why Choose NexGrowth"
      whyChooseContent={
        <>
          <p style={{ marginBottom: '1.25rem' }}>
            When looking for a <strong>web development</strong> partner, you need a team that understands the intersection of high-end aesthetics, raw speed, and search visibility. At NexGrowth, we don&apos;t build generic templates. Generic templates are filled with bloated code, unnecessary CSS frameworks, and scripting modules that slow down client loading times.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            We design and code every <strong>custom website</strong> from the ground up, ensuring your brand story is represented with precision. Our engineering workflow prioritizes clean syntax, optimized images, and semantic layouts that rank. We treat search spiders with the same care as human visitors, building readable header structures and clean link paths.
          </p>
          <p>
            By utilizing modular design frameworks, we create web systems that are extremely easy to expand as your business grows. Whether you need additional service landing pages, database forms, or localized portals, our code remains scalable and clean.
          </p>
        </>
      }
      servicesTitle="Website Development Services"
      servicesSubtitle="Our capabilities cover the complete spectrum of frontend and backend web engineering, including:"
      servicesList={[
        {
          title: 'Business Website Development',
          desc: 'We design custom corporate portals tailored for B2B lead acquisition. We map user journeys from search click to conversion, integrating lead capture forms, scheduling tools, and CRM database connectors.',
        },
        {
          title: 'Website Redesign Services',
          desc: 'If your current website is slow, outdated, or built on restricted site builders, we provide complete migration services. We move your design layout to high-performance code, preserving your canonical tags, redirect rules, and keyword rankings.',
        },
        {
          title: 'Next.js Website Architecture',
          desc: 'We leverage static site generation (SSG) and incremental static regeneration (ISR) to compile layouts beforehand. This means pages load in milliseconds, optimizing crawling indexation.',
        },
        {
          title: 'High-Converting Landing Page Design',
          desc: 'Built for paid campaigns (Google Ads and Meta Ads), these pages feature singular conversion actions, fast load times, and optimized viewport layouts to reduce user bounce rates.',
        },
      ]}
      benefitsTitle="Benefits of Modern Web Engineering"
      benefitsSubtitle="An optimized modern website serves as your 24/7 sales representative. Partnering with NexGrowth delivers key benefits:"
      benefitsList={[
        {
          tag: '01 / Speed',
          title: 'Accelerated Load Times (LCP)',
          desc: 'Speed is a direct search ranking factor. Our custom React compiles deliver Core Web Vitals scores above 95/100, which reduces ad bounce rates and improves organic position authority.',
        },
        {
          tag: '02 / Responsive',
          title: 'Flawless Responsive Rendering',
          desc: 'More than 60% of B2B searches happen on mobile devices. We test layouts across multiple viewport widths to ensure typography sizes, images, and buttons render cleanly.',
        },
        {
          tag: '03 / Visibility',
          title: 'SEO-Friendly Structure',
          desc: 'We configure metadata, semantic HTML5 structure, custom Open Graph elements, canonical alternates, and dynamic robots.txt files to index your site correctly in search spiders.',
        },
      ]}
      processTitle="Our Rigorous 5-Stage Framework"
      processSubtitle="We follow a rigorous development framework to guarantee delivery on time:"
      processList={[
        {
          num: '01',
          title: 'Discovery & Scope',
          desc: 'We map out your business objectives, target buyer personas, key search query opportunities, and required third-party API integrations (CRMs, newsletters, databases).',
        },
        {
          num: '02',
          title: 'Wireframing & UX Design',
          desc: 'We construct high-fidelity visual mockups in Figma. This includes defining layout grids, typography scales, conversion path directions, and micro-animation timelines.',
        },
        {
          num: '03',
          title: 'Frontend & Backend Engineering',
          desc: 'Our programmers write clean React and Tailwind CSS components. We configure server-side routing hooks, deploy secure contact API handlers, and connect database records.',
        },
        {
          num: '04',
          title: 'Quality Assurance & Audits',
          desc: 'We test page performance across various hardware platforms (mobile and desktop viewports). We audit form validation systems, check for broken links, and test Lighthouse metrics.',
        },
        {
          num: '05',
          title: 'Launch & Indexation Sequence',
          desc: 'We deploy production bundles to high-speed CDN edges (Vercel/AWS). We submit dynamic XML sitemaps to Google Search Console to initiate prompt crawler indexing.',
        },
      ]}
      midPageCta={{
        tag: 'SPEED & SEO AUDIT',
        title: "Curious about your site's current performance?",
        desc: 'Get a comprehensive analysis covering Core Web Vitals, mobile viewport sizes, and crawling configurations.',
        buttonText: 'Get Free Website Audit',
        buttonHref: '/#contact',
      }}
      techTitle="Technologies We Use"
      techIntro="We select modern tech stacks built for speed, scalability, and security:"
      techTags={['React 19', 'Next.js 16', 'TypeScript', 'Node.js', 'Vercel CDN', 'Tailwind CSS', 'GSAP', 'Prismic CMS']}
      techOutro="By leveraging serverless backend runtimes and statically generated files, we compile site pages into cached assets distributed globally. This structure completely bypasses database latency issues."
      industriesTitle="Industries We Serve"
      industriesIntro="Our team has engineered responsive web solutions for a broad range of sectors:"
      industriesList={[
        {
          title: 'B2B SaaS & Tech Startups',
          desc: 'Designing visual dashboards, conversion-optimized landing pages, and interactive product calculators.',
        },
        {
          title: 'Professional Services & Consulting',
          desc: 'Building corporate portals that project enterprise credibility and capture inbound accounts.',
        },
        {
          title: 'Logistics & Operations',
          desc: 'Custom web portals configured with client login panels, tracking charts, and database integrations.',
        },
        {
          title: 'Premium E-Commerce Setups',
          desc: 'Highly responsive storefronts with fast search filters, inventory management, and checkout flows.',
        },
      ]}
      faqsTitle="Frequently Asked Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'GET STARTED',
        title: 'READY TO PARTNER WITH A TRUSTED WEBSITE DEVELOPMENT COMPANY?',
        desc: 'Submit your requirements to discuss scope and get a custom quote within 24 hours.',
        buttonText: 'Get Custom Website Quote',
        buttonHref: '/#contact',
      }}
    />
  );
}

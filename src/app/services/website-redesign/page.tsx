import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Website Redesign Company in India | Revamp & Modernize | NexGrowth',
  description: 'Leading website redesign company in India. Transform slow, outdated websites into high-speed, modern Next.js digital platforms with zero loss in SEO rankings.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/website-redesign',
  },
  keywords: [
    'Website redesign company in India',
    'Website revamp agency Delhi NCR',
    'Modernize corporate website India',
    'Next.js website redesign',
    'WordPress to Next.js migration India',
  ],
  openGraph: {
    title: 'Website Redesign Company in India | NexGrowth',
    description: 'Transform outdated websites into fast, modern, high-converting platforms with zero SEO ranking loss.',
    url: 'https://nexgrowth.in/services/website-redesign',
    siteName: 'NexGrowth',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Website Redesign Company India' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function WebsiteRedesignPage() {
  const faqs = [
    {
      q: 'Will redesigning my website hurt my existing Google rankings?',
      a: 'Not with NexGrowth. We conduct a pre-redesign SEO crawl, audit all indexable URLs, create a 1:1 301 redirect map, preserve existing meta tags and heading structures, and ensure your organic search traffic remains protected or improves.',
    },
    {
      q: 'Can you migrate our old WordPress site to a modern Next.js platform?',
      a: 'Yes. We specialize in migrating legacy WordPress, PHP, and Joomla sites to Next.js and modern headless architectures, achieving 95+ Core Web Vitals while eliminating maintenance vulnerabilities.',
    },
    {
      q: 'How do you determine what needs to be changed in the redesign?',
      a: 'We analyze your Google Analytics data, heatmaps, bounce rates, and user drop-off points alongside a comprehensive UX heuristic audit to fix conversion bottlenecks while preserving your brand equity.',
    },
    {
      q: 'How long does a full corporate website redesign take?',
      a: 'A typical 10 to 25 page corporate website redesign takes approximately 3 to 5 weeks from initial discovery and wireframes to final migration and launch.',
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
              { '@type': 'ListItem', position: 3, name: 'Website Redesign', item: 'https://nexgrowth.in/services/website-redesign' },
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
            serviceType: 'Website Redesign and Modernization Services',
            provider: {
              '@type': 'Organization',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
              telephone: '+918052731617',
              email: 'devanshnexgrowth@gmail.com',
            },
            areaServed: ['India', 'Delhi NCR', 'Ghaziabad', 'Noida', 'Worldwide'],
            description: 'Corporate website redesign, WordPress to Next.js migration, Core Web Vitals speed optimization, and SEO preservation in India.',
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
        { name: 'Website Redesign' },
      ]}
      badge="PLATFORM MODERNIZATION"
      title="Website Redesign Company in India"
      subtitle="Upgrade from outdated templates to a high-speed, modern digital experience that commands industry authority and converts visitors."
      whyChooseTitle="Why Partner with NexGrowth for Your Redesign"
      whyChooseContent={
        <>
          <p>
            An outdated website actively damages your business reputation and costs you leads every day. Slow page load times, poor mobile layouts, broken forms, and obsolete CMS systems frustrate visitors and depress Google rankings.
          </p>
          <p>
            NexGrowth re-engineers corporate websites from the ground up. We replace slow template bloat with custom Next.js architecture, elegant typography, modern micro-interactions, and rigorous 301 redirect mapping that protects your hard-earned SEO equity.
          </p>
        </>
      }
      servicesTitle="Comprehensive Redesign Services"
      servicesSubtitle="Strategic upgrades that modernize your visual brand and dramatically improve technical performance."
      servicesList={[
        { title: 'Complete UX & Brand Modernization', desc: 'Transforming dated visuals into clean, contemporary, responsive layouts that project enterprise credibility.' },
        { title: 'Core Web Vitals & Speed Overhaul', desc: 'Elevating sluggish sites from red PageSpeed scores into green 90+ ratings with Next.js static and server rendering.' },
        { title: 'SEO Preservation & 301 Redirect Mapping', desc: 'Comprehensive crawling and mapping of all existing ranking URLs to prevent 404 errors and protect organic traffic.' },
        { title: 'WordPress to Next.js Migration', desc: 'Moving away from brittle plugin ecosystems to secure, maintainable, lightning-fast modern web applications.' },
        { title: 'Mobile-First Responsive Rebuild', desc: 'Redesigning every section specifically for smartphone screens, where over 70% of business searches occur.' },
        { title: 'Conversion Funnel Restructuring', desc: 'Re-engineering navigation, service pages, proof points, and contact forms to maximize inquiry conversion rates.' },
      ]}
      benefitsTitle="Benefits of a Modern Redesign"
      benefitsSubtitle="The business impact of upgrading your digital presence."
      benefitsList={[
        { tag: 'Performance', title: '3x Faster Load Speeds', desc: 'Modern web architectures eliminate heavy database calls and bulky plugins.' },
        { tag: 'Conversion', title: 'Higher Lead Generation', desc: 'Clear messaging, modern trust badges, and frictionless inquiry forms convert more visitors.' },
        { tag: 'Authority', title: 'Stronger Brand Perception', desc: 'Contemporary design instills immediate confidence in prospective enterprise clients.' },
        { tag: 'Security', title: 'Zero Plugin Vulnerabilities', desc: 'Decoupled static-first architecture eliminates classic WordPress security risks.' },
      ]}
      processTitle="Our Risk-Free Redesign Methodology"
      processSubtitle="A proven roadmap that guarantees zero downtime and protected search rankings."
      processList={[
        { num: '01', title: 'SEO & Performance Audit', desc: 'Crawling all existing URLs, indexing status, keyword rankings, and tracking scripts.' },
        { num: '02', title: 'Information Architecture & UX', desc: 'Wireframing simplified navigation, modernized service pages, and mobile layouts.' },
        { num: '03', title: 'Modern Engineering', desc: 'Coding clean Next.js pages with Tailwind CSS, custom animations, and responsive components.' },
        { num: '04', title: 'Redirect Verification & Go-Live', desc: 'Executing 301 redirects, testing forms, submitting new sitemaps to GSC, and live launch.' },
      ]}
      midPageCta={{
        tag: 'REVAMP YOUR WEBSITE',
        title: 'Is your current website holding your business back?',
        desc: 'Request a free website redesign audit. We will review your current site, identify performance issues, and present an upgrade plan.',
        buttonText: 'Request Redesign Audit',
        buttonHref: '#contact',
      }}
      techTitle="Modern Frameworks We Use"
      techIntro="We rebuild websites using the same cutting-edge tech stack powering the world’s top digital products."
      techTags={['Next.js 16', 'React 19', 'Tailwind CSS', 'TypeScript', 'GSAP', 'Vercel Edge', 'Headless CMS', 'PostgreSQL']}
      techOutro="Future-proof technology that will not require another rebuild for years."
      industriesTitle="Industries We Have Redesigned For"
      industriesIntro="Proven modernization for B2B and consumer enterprises across Delhi NCR and India."
      industriesList={[
        { title: 'Manufacturing & Industrial', desc: 'Replacing dated PDF catalogs with dynamic product specs and quote request workflows.' },
        { title: 'Logistics & Supply Chain', desc: 'Integrating real-time tracking portals and clean corporate capabilities showcases.' },
        { title: 'Healthcare & Pharma', desc: 'Modernizing patient intake portals, doctor directories, and responsive appointment funnels.' },
        { title: 'Professional & Legal Services', desc: 'Editorial layouts, practice area breakdowns, and confidential inquiry forms.' },
      ]}
      faqsTitle="Website Redesign Questions"
      faqsList={faqs}
      bottomCta={{
        tag: 'UPGRADE NOW',
        title: 'Ready for a website that reflects your company’s true caliber?',
        desc: 'Speak directly with our technical team to plan your redesign without risking your current rankings.',
        buttonText: 'Schedule Redesign Consultation',
        buttonHref: '#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

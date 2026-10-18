import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Software Development Company in Noida | Custom SaaS & Web Apps | NexGrowth',
  description: 'Top-rated custom software development company in Noida Sector 62 & Delhi NCR. We engineer scalable SaaS platforms, client portals, enterprise dashboards, and custom APIs.',
  alternates: {
    canonical: 'https://nexgrowth.in/services/software-development/noida',
  },
  keywords: [
    'Software development company in Noida',
    'Custom software development company in Noida Sector 62',
    'SaaS application developers Noida',
    'Web application development company Noida Delhi NCR',
    'Enterprise software engineering Noida',
  ],
  openGraph: {
    title: 'Software Development Company in Noida | NexGrowth',
    description: 'Custom software, SaaS platforms, and enterprise web applications engineered in Noida and Delhi NCR.',
    url: 'https://nexgrowth.in/services/software-development/noida',
    siteName: 'NexGrowth',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Software Development Company Noida' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function NoidaSoftwareDevelopmentPage() {
  const faqs = [
    {
      q: 'What types of custom software do you build for businesses in Noida and Delhi NCR?',
      a: 'We build custom B2B SaaS platforms, enterprise workflow dashboards, inventory management systems, client portals, real-time analytics engines, and microservice APIs tailored to business operations.',
    },
    {
      q: 'Do you offer dedicated developer hiring or project-based delivery?',
      a: 'We offer flexible engagement models: end-to-end fixed-scope project development with guaranteed milestones, or dedicated engineering sprints for ongoing software evolution.',
    },
    {
      q: 'How do you ensure data security and software scalability?',
      a: 'We implement role-based access control (RBAC), end-to-end TLS encryption, automated database backups, OWASP top 10 security compliance, and containerized cloud deployment on AWS or GCP.',
    },
    {
      q: 'Can you modernize our existing legacy software without operational disruption?',
      a: 'Yes. We use phased strangler patterns and API middleware to migrate legacy databases and backend workflows to modern cloud architectures with zero downtime to your daily operations.',
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
              { '@type': 'ListItem', position: 3, name: 'Software Development', item: 'https://nexgrowth.in/services/software-development' },
              { '@type': 'ListItem', position: 4, name: 'Noida', item: 'https://nexgrowth.in/services/software-development/noida' },
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
            serviceType: 'Custom Software Development Services in Noida',
            provider: {
              '@type': 'LocalBusiness',
              name: 'NexGrowth Noida',
              url: 'https://nexgrowth.in/services/software-development/noida',
              telephone: '+918052731617',
              email: 'devanshnexgrowth@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Noida',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'IN',
              },
            },
            areaServed: ['Noida', 'Greater Noida', 'Sector 62 Noida', 'Sector 18 Noida', 'Delhi NCR'],
            description: 'Custom software engineering, SaaS platform development, and cloud web applications in Noida, Uttar Pradesh.',
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
        { name: 'Software Development', href: '/services/software-development' },
        { name: 'Noida' },
      ]}
      badge="NOIDA SOFTWARE ENGINEERING HUB"
      title="Software Development Company in Noida"
      subtitle="Engineering custom SaaS platforms, operational dashboards, and cloud-native software for startups and growing enterprises across Noida and Delhi NCR."
      whyChooseTitle="Engineering Excellence in Noida's Tech Corridor"
      whyChooseContent={
        <>
          <p>
            Noida is one of India’s premier technology corridors, home to rapid-growth startups, IT giants, and industrial leaders across Sector 62, Sector 63, and Expressway business parks. In this competitive landscape, off-the-shelf software packages often fail to accommodate unique operational workflows.
          </p>
          <p>
            NexGrowth provides custom software engineering that turns complex manual processes into automated, cloud-native platforms. We build fast, reliable web applications using modern stacks like Next.js, Node.js, Python, and PostgreSQL that scale effortlessly alongside your company’s growth.
          </p>
        </>
      }
      servicesTitle="Custom Software Engineering Solutions"
      servicesSubtitle="Tailored software architecture engineered for operational reliability and business scalability."
      servicesList={[
        { title: 'Custom SaaS Platform Engineering', desc: 'Multi-tenant software platforms featuring role-based auth, subscription billing, and real-time user management.' },
        { title: 'Enterprise Dashboards & Portals', desc: 'Secure internal portals and analytics dashboards that centralize business intelligence and operational controls.' },
        { title: 'Cloud Database & API Microservices', desc: 'High-concurrency RESTful and GraphQL APIs built on scalable PostgreSQL, MongoDB, and Redis architectures.' },
        { title: 'Legacy Software Modernization', desc: 'Migrating obsolete desktop or monolithic applications to responsive, secure cloud platforms with zero data loss.' },
        { title: 'Automated Business Workflows', desc: 'Custom integrations between CRM, ERP, accounting, and third-party logistics to eliminate manual double-entry.' },
        { title: 'SLA Support & Cloud DevOps', desc: 'Continuous CI/CD deployment pipelines, automated security patches, uptime monitoring, and cloud cost management.' },
      ]}
      benefitsTitle="Business Value Delivered"
      benefitsSubtitle="Why companies across Noida and Delhi NCR choose NexGrowth as their technical partner."
      benefitsList={[
        { tag: 'Efficiency', title: '60% Reduction in Manual Tasks', desc: 'Automating internal reports and workflows frees your team to focus on core business growth.' },
        { tag: 'Scalability', title: 'Cloud-Native Architecture', desc: 'Engineered from day one to handle exponential user growth without costly structural rewrites.' },
        { tag: 'Security', title: 'Enterprise Security Compliance', desc: 'Encrypted databases, strict role permissions, and regular vulnerability audits protect your intellectual property.' },
        { tag: 'Speed', title: 'Agile 2-Week Sprints', desc: 'Transparent development cycles with testable builds delivered every 14 days.' },
      ]}
      processTitle="Our Software Development Lifecycle"
      processSubtitle="A disciplined, transparent development process from discovery to production deployment."
      processList={[
        { num: '01', title: 'Requirements & Scope Engineering', desc: 'Deep-dive technical discovery to define user stories, data schemas, and sprint roadmaps.' },
        { num: '02', title: 'System Architecture & Wireframes', desc: 'Designing database models, API specs, and interactive Figma UI prototypes.' },
        { num: '03', title: 'Agile Code Development', desc: 'Full-stack development with rigorous code reviews, automated unit testing, and continuous deployment.' },
        { num: '04', title: 'Security Testing & Deployment', desc: 'Penetration testing, load stress testing, cloud server configuration, and live launch.' },
      ]}
      midPageCta={{
        tag: 'NOIDA TECH PARTNER',
        title: 'Have a software project in mind in Noida or Delhi NCR?',
        desc: 'Consult directly with our engineering team to review your technical specs and get an accurate architectural estimate.',
        buttonText: 'Schedule Engineering Call',
        buttonHref: '#contact',
      }}
      techTitle="Modern Technology Architecture"
      techIntro="Proven technologies selected for performance, security, and developer ecosystem longevity."
      techTags={['Next.js 16', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Docker', 'AWS', 'Tailwind CSS']}
      techOutro="Production-ready architectures built to enterprise quality standards."
      industriesTitle="Industries We Serve in Noida & NCR"
      industriesIntro="Delivering custom software across key Delhi NCR economic sectors."
      industriesList={[
        { title: 'B2B & IT Services', desc: 'Client collaboration platforms, automated timesheet tracking, and project management portals.' },
        { title: 'Manufacturing & Export', desc: 'Inventory tracking, vendor ordering portals, and factory batch quality management.' },
        { title: 'Logistics & Supply Chain', desc: 'Fleet routing dashboards, real-time shipment milestones, and driver tracking portals.' },
        { title: 'EdTech & Training', desc: 'Course delivery portals, interactive student progress dashboards, and automated certification engines.' },
      ]}
      faqsTitle="Noida Software Development FAQs"
      faqsList={faqs}
      bottomCta={{
        tag: 'BUILD WITH CONFIDENCE',
        title: 'Ready to build custom software that scales?',
        desc: 'Partner with NexGrowth for reliable software engineering. Request a free discovery session with our technical leads.',
        buttonText: 'Request Technical Consultation',
        buttonHref: '#contact',
      }}
      schemaScripts={schemaScripts}
    />
  );
}

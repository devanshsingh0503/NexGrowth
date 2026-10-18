import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import ShowcaseWindow from '@/components/ShowcaseWindow';
import ProcessRhythm from '@/components/ProcessRhythm';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FounderAndStats from '@/components/FounderAndStats';
import FAQAccordion from '@/components/FAQAccordion';
import ContactSection from '@/components/ContactSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';

export const metadata: Metadata = {
  title: 'NexGrowth | B2B Custom Website & Software Development Services',
  description: "At NexGrowth, we design and develop custom websites, web applications, and software platforms that help businesses acquire users, streamline operations, and scale with confidence.",
  alternates: {
    canonical: 'https://nexgrowth.in',
  },
  keywords: [
    'B2B website development',
    'custom software engineering',
    'enterprise dashboards',
    'SaaS web applications',
    'responsive web design',
    'SEO optimization agency',
    'NexGrowth services'
  ],
  openGraph: {
    title: 'NexGrowth | B2B Custom Website & Software Development Services',
    description: "At NexGrowth, we design and develop custom websites, web applications, and software platforms that help businesses acquire users, streamline operations, and scale with confidence.",
    url: 'https://nexgrowth.in',
    siteName: 'NexGrowth',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'NexGrowth B2B Custom Website & Software Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexGrowth | B2B Custom Website & Software Development Services',
    description: "At NexGrowth, we design and develop custom websites, web applications, and software platforms that help businesses acquire users, streamline operations, and scale with confidence.",
    images: ['/icon.png'],
    creator: '@nexgrowth',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return (
    <div style={{ backgroundColor: '#f4f2ea', minHeight: '100vh', position: 'relative' }}>
      {/* Complete JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://nexgrowth.in/#organization',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
              logo: 'https://nexgrowth.in/icon.png',
              image: 'https://nexgrowth.in/icon.png',
              description:
                'At NexGrowth, we design and develop custom websites, web applications, and software platforms that help B2B businesses acquire users, streamline operations, and scale with confidence.',
              telephone: '+918052731617',
              email: 'devanshnexgrowth@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://linkedin.com/company/nexgrowth',
                'https://twitter.com/nexgrowth',
                'https://instagram.com/nexgrowth',
              ],
              areaServed: 'Worldwide',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '4',
              },
              review: [
                {
                  '@type': 'Review',
                  author: {
                    '@type': 'Person',
                    name: 'Lindsay Dufresne',
                  },
                  reviewBody:
                    'Their ability to hear what we had to say and act on it pretty quickly is very impressive. They were highly responsive throughout the process.',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                  },
                },
                {
                  '@type': 'Review',
                  author: {
                    '@type': 'Person',
                    name: 'Mark Blackburn',
                  },
                  reviewBody:
                    'Responsive, cost-effective website designs that built trust with bilingual audiences. The engineering was top-tier.',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                  },
                },
                {
                  '@type': 'Review',
                  author: {
                    '@type': 'Person',
                    name: 'Emily Bartels',
                  },
                  reviewBody:
                    'We had a vision for what we wanted and they were able to execute on it. Amazing. They were extremely reliable and great partners to work with.',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                  },
                },
                {
                  '@type': 'Review',
                  author: {
                    '@type': 'Person',
                    name: 'Dashify Services Leadership',
                  },
                  reviewBody:
                    'NexGrowth converted complex logistics workflows into a clean, intuitive platform. Our operations team saved hours every week.',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                  },
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'NexGrowth Custom Software & Web Engineering Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Website Design & Development',
                      description:
                        'Custom, conversion-driven websites designed to captivate your audience, convey your brand identity, and achieve business goals.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Web Application Development',
                      description:
                        'B2B SaaS platforms, customer portals, custom dashboards, and web database application development services.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Search Engine Optimisation',
                      description:
                        'Technical site audit, off-page backlinks authority, and organic search visibility ranking growth services.',
                    },
                  },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://nexgrowth.in/#corp',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
              logo: 'https://nexgrowth.in/icon.png',
              sameAs: [
                'https://linkedin.com/company/nexgrowth',
                'https://twitter.com/nexgrowth',
                'https://instagram.com/nexgrowth',
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://nexgrowth.in/#website',
              name: 'NexGrowth',
              url: 'https://nexgrowth.in',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://nexgrowth.in/blog?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the NexGrowth custom website development process?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our process consists of 3 clear phases: Onboarding & Behavior Mapping, Core Engineering in Next.js, and Launch & Scale optimization.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you provide post-launch support and software maintenance?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We provide ongoing support, 99.9% uptime monitoring, monthly security patches, and optimizations to keep your digital products performing at their best long after handoff.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What B2B services does NexGrowth offer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We offer custom website design and engineering, SaaS application development, customer portals, technical SEO audits, Google & Meta Ads management, and ongoing software maintenance.',
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Capabilities Grid (01 / WEB DEV, etc.) */}
      <CapabilitiesGrid />

      {/* 4. Showcase Window (BUSY ISN’T A BADGE. SCALABILITY IS A FEELING.) */}
      <ShowcaseWindow />

      {/* 5. Process Rhythm (YOUR RHYTHM. YOUR RULES.) */}
      <ProcessRhythm />

      {/* 6. Selected Work (GOOD WORK. REAL IMPACT.) */}
      <PortfolioSection />

      {/* 7. Client Testimonials (TRUSTED PARTNERS. REAL VOICES.) */}
      <TestimonialsSection />

      {/* 8. Founder Ethos & Animated Stats (WORK IS HUMAN. WE BUILD IT THAT WAY.) */}
      <FounderAndStats />

      {/* 9. FAQ Accordion (A FEW GOOD QUESTIONS.) */}
      <FAQAccordion />

      {/* 11. Contact & Discovery Call (GOOD IDEAS LIKE COMPANY.) */}
      <ContactSection />

      {/* 12. Pre-Footer Marquee Banner (SERIOUS WORK. PLAYFUL ENERGY.) */}
      <MarqueeBanner />

      {/* 13. Footer */}
      <Footer />

      {/* 14. Quick Discovery Call Booking Modal */}
      <BookCallModal />
    </div>
  );
}

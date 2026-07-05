import type { Metadata } from 'next';

// Above-the-fold: statically imported for instant SSR render
import Navbar         from '@/components/Navbar';
import Hero           from '@/components/Hero';
import About          from '@/components/About';
import Footer         from '@/components/Footer';
// Heavy client sections lazy-loaded inside a 'use client' boundary
import ClientSections from '@/components/ClientSections';


export const metadata: Metadata = {
  title: 'NexGrowth | B2B Custom Website & Software Development Services',
  description: "At NexGrowth, we architect digital experiences that breathe life into your brand's most ambitious vision. Transforming pixels into possibilities.",
  alternates: {
    canonical: 'https://nexgrowth.com',
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
    description: "At NexGrowth, we architect digital experiences that breathe life into your brand's most ambitious vision. Transforming pixels into possibilities.",
    url: 'https://nexgrowth.com',
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
    description: "At NexGrowth, we architect digital experiences that breathe life into your brand's most ambitious vision. Transforming pixels into possibilities.",
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
    <div className="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://nexgrowth.com/#organization',
              'name': 'NexGrowth',
              'url': 'https://nexgrowth.com',
              'logo': 'https://nexgrowth.com/icon.png',
              'image': 'https://nexgrowth.com/icon.png',
              'description': 'At NexGrowth, we design and develop custom websites, web applications, and software platforms that help B2B businesses acquire users, streamline operations, and scale with confidence.',
              'telephone': '+918052731617',
              'email': 'devanshnexgrowth@gmail.com',
              'priceRange': '$$$',
              'address': {
                '@type': 'PostalAddress',
                'addressCountry': 'IN'
              },
              'sameAs': [
                'https://linkedin.com/company/nexgrowth',
                'https://twitter.com/nexgrowth',
                'https://instagram.com/nexgrowth'
              ],
              'areaServed': 'Worldwide',
              'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '5',
                'reviewCount': '3'
              },
              'review': [
                {
                  '@type': 'Review',
                  'author': {
                    '@type': 'Person',
                    'name': 'Lindsay Dufresne'
                  },
                  'reviewBody': 'Their ability to hear what we had to say and act on it pretty quickly is very impressive. They were highly responsive throughout the process.',
                  'reviewRating': {
                    '@type': 'Rating',
                    'ratingValue': '5'
                  }
                },
                {
                  '@type': 'Review',
                  'author': {
                    '@type': 'Person',
                    'name': 'Mark Blackburn'
                  },
                  'reviewBody': 'Responsive, cost-effective website designs that built trust with bilingual audiences. The engineering was top-tier.',
                  'reviewRating': {
                    '@type': 'Rating',
                    'ratingValue': '5'
                  }
                },
                {
                  '@type': 'Review',
                  'author': {
                    '@type': 'Person',
                    'name': 'Emily Bartels'
                  },
                  'reviewBody': 'We had a vision for what we wanted and they were able to execute on it. Amazing. They were extremely reliable and great partners to work with.',
                  'reviewRating': {
                    '@type': 'Rating',
                    'ratingValue': '5'
                  }
                }
              ],
              'hasOfferCatalog': {
                '@type': 'OfferCatalog',
                'name': 'NexGrowth Custom Software & Web Engineering Services',
                'itemListElement': [
                  {
                    '@type': 'Offer',
                    'itemOffered': {
                      '@type': 'Service',
                      'name': 'Website Design & Development',
                      'description': 'Custom, conversion-driven websites designed to captivate your audience, convey your brand identity, and achieve business goals.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    'itemOffered': {
                      '@type': 'Service',
                      'name': 'Web Application Development',
                      'description': 'B2B SaaS platforms, customer portals, custom dashboards, and web database application development services.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    'itemOffered': {
                      '@type': 'Service',
                      'name': 'Search Engine Optimisation',
                      'description': 'Technical site audit, off-page backlinks authority, and organic search visibility ranking growth services.'
                    }
                  }
                ]
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://nexgrowth.com/#corp',
              'name': 'NexGrowth',
              'url': 'https://nexgrowth.com',
              'logo': 'https://nexgrowth.com/icon.png',
              'sameAs': [
                'https://linkedin.com/company/nexgrowth',
                'https://twitter.com/nexgrowth',
                'https://instagram.com/nexgrowth'
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://nexgrowth.com/#website',
              'name': 'NexGrowth',
              'url': 'https://nexgrowth.com',
              'potentialAction': {
                '@type': 'SearchAction',
                'target': 'https://nexgrowth.com/blog?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'What is the NexGrowth custom website development process?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Our process consists of 8 steps: Onboarding (Know Your Business), User Behaviour Mapping (Study The Field), Wireframing (Map The Flow), Visual Design (Shape The Vision), Content Integration (Fill The Canvas), Core Engineering (Build The Machine), Launch Sequence (Ship With Confidence), and Maintenance (Sustain & Grow).'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Do you provide post-launch support and software maintenance?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes. The launch is day one, not the finish line. We provide ongoing support, performance monitoring, and optimizations to keep your software products performing at their best long after handoff.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'What B2B services does NexGrowth offer?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'We offer custom website design and development, web application engineering (SaaS, custom dashboards, portals), and search engine optimization (SEO) campaigns.'
                  }
                }
              ]
            }
          ])
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <ClientSections />
      <Footer />
    </div>
  );
}

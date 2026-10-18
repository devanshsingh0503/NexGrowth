import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Core Pages
    {
      url: 'https://nexgrowth.in',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://nexgrowth.in/services',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://nexgrowth.in/blog',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Commercial Services (India & Worldwide)
    {
      url: 'https://nexgrowth.in/services/web-development',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://nexgrowth.in/services/software-development',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://nexgrowth.in/services/shopify-development',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://nexgrowth.in/services/landing-page-development',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://nexgrowth.in/services/website-redesign',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://nexgrowth.in/services/seo',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://nexgrowth.in/services/google-ads',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nexgrowth.in/services/meta-ads',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nexgrowth.in/services/social-media-marketing',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // High-Intent Local Landing Pages (Delhi NCR & UP)
    {
      url: 'https://nexgrowth.in/services/web-development/ghaziabad',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nexgrowth.in/services/web-development/noida',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nexgrowth.in/services/web-development/delhi',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nexgrowth.in/services/software-development/noida',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nexgrowth.in/services/seo/ghaziabad',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nexgrowth.in/services/web-development/lucknow',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Legal & Information
    {
      url: 'https://nexgrowth.in/privacy-policy',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://nexgrowth.in/terms-and-condition',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}

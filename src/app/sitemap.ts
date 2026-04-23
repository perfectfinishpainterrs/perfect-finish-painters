import type { MetadataRoute } from 'next'
import { serviceAreas } from '@/data/service-areas'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://perfectfinishpainter.com'
  const lastUpdated = '2026-03-18'

  const cityPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/${area.slug}`,
    lastModified: lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastUpdated,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastUpdated,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: lastUpdated,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/interior-painting`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/exterior-painting`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/drywall-repair`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/flooring`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shed-restoration`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/deck-staining`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fence-staining`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/garage-door-painting`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/epoxy-floor-coating`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/best-exterior-paint-south-jersey`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/difference-between-flat-and-satin-paint-finish`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cedar-siding-repair-south-jersey`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/exterior-painting-south-jersey`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/sherwin-williams-snowbound-paint-south-jersey`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/popcorn-ceiling-removal`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cabinet-painting`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial-painting`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ceiling-painting`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wallpaper-removal`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pintores-cerca-de-mi`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pintores-pleasantville-nj`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pintores-atlantic-city-nj-es`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pintores-vineland-nj`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...cityPages,
  ]
}

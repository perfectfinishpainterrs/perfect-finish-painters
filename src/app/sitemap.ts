import type { MetadataRoute } from 'next'
import { serviceAreas } from '@/data/service-areas'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://perfectfinishpainter.com'
  const lastUpdated = '2026-03-10'

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
      url: `${baseUrl}/deck-fence-staining`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.7,
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
    ...cityPages,
  ]
}

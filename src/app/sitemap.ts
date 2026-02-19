import type { MetadataRoute } from 'next'
import { serviceAreas } from '@/data/service-areas'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://perfectfinishpainter.com'

  const cityPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...cityPages,
  ]
}

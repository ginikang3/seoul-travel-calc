// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://seoul-travel-calc.vercel.app', // 실제 도메인 주소
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
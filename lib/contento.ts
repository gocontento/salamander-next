import { createContentoClient } from '@gocontento/client'
import { ContentData } from '@gocontento/client/lib/types'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Metadata } from 'next'
import { ContentoClient } from '@gocontento/client/lib/client'
import { CategoryLink } from '@/types'

export function createClient(isPreview: boolean = false): ContentoClient {
  return createContentoClient({
    apiURL: process.env.CONTENTO_API_URL ?? '',
    apiKey: process.env.CONTENTO_API_KEY ?? '',
    siteId: process.env.CONTENTO_SITE_ID ?? '',
    isPreview: isPreview,
  })
}

export function generateSeo(
  content: ContentData,
  openGraph?: OpenGraph,
  canonical?: string,
): Metadata {
  // @ts-ignore
  const images: Array<any> = []

  if (content.seo.open_graph.image_secure_url) {
    images.push({
      url: content.seo.open_graph.image_secure_url,
      secureUrl: content.seo.open_graph.image_secure_url,
      width: content.seo.open_graph.image_width,
      height: content.seo.open_graph.image_height,
      alt: content.seo.open_graph.image_alt,
    })
  }

  let og: OpenGraph = {
    title: content.seo.open_graph.title ?? undefined,
    description: content.seo.open_graph.description ?? undefined,
    url: canonical ? canonical : content.seo.open_graph.url,
    images: images,
    locale: 'en_GB',
    type: 'website',
  }

  if (openGraph) {
    og = { ...og, ...openGraph }
  }

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: canonical ? canonical : content.seo.canonical_url,
    },
    openGraph: og,
  }
}

export async function getBlogCategoryLinks(): Promise<CategoryLink[]> {
  return await createClient()
    .getContentByType({
      contentType: 'blog_category',
      sortBy: 'name',
      sortDirection: 'asc',
      limit: 3,
    })
    .then((response) => {
      return response.content.map((content) => ({
        label: content.name,
        href: '/' + content.uri,
      }))
    })
    .catch(() => {
      return []
    })
}
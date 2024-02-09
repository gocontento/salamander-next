import { draftMode } from 'next/headers'
import { createClient, generateSeo } from '@/lib/contento'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Default from '@/app/components/pages/default'

const client = createClient()

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return await client
    .getContent({
      params: {
        content_type: ['general_page', 'info_page'],
        limit: '100',
      },
    })
    .then((response) => {
      return response.content
        .map((content) => ({
          slug: content.slug,
        }))
        .filter((o) => o.slug !== 'home')
    })
    .catch(() => {
      return []
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return await client
    .getContent({
      params: {
        content_type: ['general_page', 'info_page'],
        slug: params.slug,
        limit: '1',
      },
    })
    .then((response) => {
      return generateSeo(response.content[0])
    })
    .catch(() => {
      return {}
    })
}

export default async function page({ params }: Props) {
  const response = await createClient(draftMode().isEnabled)
    .getContent({
      params: {
        content_type: ['general_page', 'info_page'],
        slug: params.slug,
        limit: '1',
      },
    })
    .catch(() => {
      notFound()
    })

  const content = response.content[0]

  return <Default initialContent={content} />
}

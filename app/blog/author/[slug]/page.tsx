import { draftMode } from 'next/headers'
import { createClient, generateSeo } from '@/lib/contento'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import BlogAuthor from '@/app/components/pages/blog-author'

const client = createClient()

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return await client
    .getContentByType({
      contentType: 'authors',
      limit: 100,
    })
    .then((response) => {
      return response.content.map((content) => ({
        slug: content.slug,
      }))
    })
    .catch(() => {
      return []
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return await client
    .getContentBySlug(params.slug, 'authors')
    .then((content) => {
      const nameParts = content.fields.name.text.split(' ')

      return generateSeo(content, {
        type: 'profile',
        firstName: nameParts.length ? nameParts[0] : content.fields.name.text,
        lastName: nameParts.length >= 2 ? nameParts[1] : null,
      })
    })
    .catch(() => {
      return {}
    })
}

export default async function page({ params }: Props) {
  const content = await createClient(draftMode().isEnabled)
    .getContentBySlug(params.slug, 'authors')
    .catch(() => {
      notFound()
    })

  const postsResponse = await client.getContent({
    params: {
      content_type: 'blog_post',
      limit: '100',
      'fields[content_links][author][slug]': params.slug,
    },
  })

  const posts = postsResponse.content

  return <BlogAuthor initialContent={content} posts={posts} />
}

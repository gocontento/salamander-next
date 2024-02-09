import { draftMode } from 'next/headers'
import { createClient, generateSeo, getBlogCategoryLinks } from '@/lib/contento'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogIndex from '@/app/components/pages/blog-index'

const client = createClient()

export async function generateMetadata(): Promise<Metadata> {
  return await client
    .getContentBySlug('blog', 'blog_landing')
    .then((content) => {
      return generateSeo(content)
    })
    .catch(() => {
      return {}
    })
}

export default async function page() {
  const content = await createClient(draftMode().isEnabled)
    .getContentBySlug('blog', 'blog_landing')
    .catch(() => {
      notFound()
    })

  const postsResponse = await client.getContentByType({
    contentType: 'blog_post',
  })

  const posts = postsResponse.content

  const categoryLinks = await getBlogCategoryLinks()

  return (
    <BlogIndex
      initialContent={content}
      posts={posts}
      categoryLinks={categoryLinks}
    />
  )
}

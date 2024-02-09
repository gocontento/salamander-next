'use client'

import { useLivePreview } from '@gocontento/next'
import CategoryPills from '@/app/components/blog/category-pills'
import PostGrid from '@/app/components/blog/post-grid'
import { ContentData } from '@gocontento/client/lib/types'
import Link from 'next/link'
import { CategoryLink } from '@/types'

export default function BlogCategory({
  initialContent,
  posts,
  categoryLinks,
}: {
  initialContent: ContentData
  posts: ContentData[]
  categoryLinks: CategoryLink[]
}) {
  const { content } = useLivePreview({ content: initialContent })

  return (
    <div className="px-9 py-7 md:px-24 md:py-20">
      <header className="border-b-2 border-charcoal pb-5 md:text-center">
        <h2 className="mt-2 inline text-xs font-bold uppercase tracking-wider transition duration-300 hover:text-pink">
          <Link href="/blog">The Blog</Link>
        </h2>
        <h1 className="mb-5 text-xxl font-bold">{content.fields.title.text}</h1>
        <CategoryPills categoryLinks={categoryLinks} />
      </header>
      <PostGrid posts={posts} />
    </div>
  )
}

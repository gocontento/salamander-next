'use client'

import { useLivePreview } from '@gocontento/next'
import PostGrid from '@/app/components/blog/post-grid'
import { ContentData } from '@gocontento/client/lib/types'
import Link from 'next/link'
import AuthorCard from '@/app/components/blog/author-card'

export default function BlogAuthor({
  initialContent,
  posts,
}: {
  initialContent: ContentData
  posts: ContentData[]
}) {
  const { content } = useLivePreview({ content: initialContent })

  return (
    <div className="px-9 py-7 md:px-24 md:py-20">
      <header className="border-b-2 border-charcoal pb-5 md:text-center">
        <h2 className="mt-2 inline text-xs font-bold uppercase tracking-wider transition duration-300 hover:text-pink">
          <Link href="/blog">The Blog</Link>
        </h2>
        <AuthorCard author={content} h1={true} />
      </header>
      <PostGrid posts={posts} />
    </div>
  )
}

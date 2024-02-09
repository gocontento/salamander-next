'use client'

import { BlockData, ContentData } from '@gocontento/client/lib/types'
import BlockMatcher from '@/app/components/block-matcher'
import { useLivePreview } from '@gocontento/next'
import nl2br from 'react-nl2br'

export default function Default({
  initialContent,
}: {
  initialContent: ContentData
}) {
  const { content } = useLivePreview({ content: initialContent })
  return (
    <article
      className={`pb-12 md:pb-32 ${
        content.content_type.handle === 'info_page' ? 'mx-auto max-w-prose' : ''
      }`}
    >
      {content.content_type.handle === 'info_page' && (
        <header className="border-b-2 border-charcoal pb-7 md:pt-16 md:text-center">
          <h1 className="mb-5 text-xl font-bold">
            {content.fields.title.text}
          </h1>
          <p>{nl2br(content.fields.intro_text.text)}</p>
        </header>
      )}

      {content.fields.content.blocks.map((block: BlockData) => {
        return (
          <BlockMatcher key={`${block.name}-${block.sort}`} block={block} />
        )
      })}
    </article>
  )
}

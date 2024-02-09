'use client'

import { BlockData, ContentData } from '@gocontento/client/lib/types'
import BlockMatcher from '@/app/components/block-matcher'
import { useLivePreview } from '@gocontento/next'

export default function Home({
  initialContent,
}: {
  initialContent: ContentData
}) {
  const { content } = useLivePreview({ content: initialContent })
  return (
    <div className="pb-12 md:pb-32">
      {content.fields.content.blocks.map((block: BlockData) => {
        return (
          <BlockMatcher key={`${block.name}-${block.sort}`} block={block} />
        )
      })}
    </div>
  )
}

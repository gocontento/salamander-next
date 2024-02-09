import { BlockData } from '@gocontento/client/lib/types'

export default function RichText({ block }: { block: BlockData }) {
  return (
    <div
      className="prose prose-black mx-auto mt-5"
      dangerouslySetInnerHTML={{
        __html: block.fields.rich_text_field.text,
      }}
    />
  )
}

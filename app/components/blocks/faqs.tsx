import { BlockData } from '@gocontento/client/lib/types'

function FaqItem({ block, index }: { block: BlockData; index: number }) {
  return (
    <div className="flex w-[80%] flex-col self-stretch md:w-[40%]">
      <div className="flex items-center justify-between border-b-2 border-charcoal pb-2">
        <h4 className="text-xs font-bold">
          <span className="mr-2">{index + 1}.</span>
          {block.fields.question.text}
        </h4>
      </div>
      <div className="py-5">
        <p className="text-xs">{block.fields.answer.text}</p>
      </div>
    </div>
  )
}

export default function Faqs({ block }: { block: BlockData }) {
  return (
    <section className="px-9 py-12 md:py-32 lg:px-32">
      <div className="flex flex-col items-center justify-center rounded-md bg-light py-9 md:py-16">
        <h2 className="mb-7 text-center text-xl font-bold leading-tight md:mb-9">
          {block.fields.heading.text}
        </h2>
        <div className="mb-5 mt-5 flex flex-row flex-wrap items-center justify-center gap-x-16 gap-y-5 md:gap-y-12">
          {block.fields.content.blocks.map((item: BlockData, index: number) => {
            return (
              <FaqItem
                key={`faq-${block.content_type.handle}-${block.sort}`}
                block={item}
                index={index}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

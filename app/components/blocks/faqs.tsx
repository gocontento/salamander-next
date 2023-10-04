import {BlockData} from "@gocontento/client/lib/types";

function FaqItem({ block, index }: { block: BlockData, index: number }) {
    return (
        <div className="w-[80%] md:w-[40%] flex flex-col self-stretch">
            <div className="flex justify-between items-center border-b-2 border-charcoal pb-2">
                <h4 className="text-xs font-bold">
                    <span className="mr-2">{index+1}.</span>
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
        <section className="px-9 py-12 lg:px-32 md:py-32">
            <div className="flex flex-col items-center justify-center bg-light py-9 md:py-16 rounded-md">
                <h2 className="text-xl leading-tight font-bold mb-7 md:mb-9 text-center">
                    {block.fields.heading.text}
                </h2>
                <div className="flex flex-row flex-wrap items-center justify-center gap-x-16 gap-y-5 md:gap-y-12 mt-5 mb-5">
                    {block.fields.content.blocks.map((item: BlockData, index: number) => {
                        return (
                            <FaqItem key={`faq-${block.content_type.handle}-${block.sort}`} block={item} index={index} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
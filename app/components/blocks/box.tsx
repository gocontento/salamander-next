import { BlockApiData } from "@gocontento/client/lib/api-types";
import Image from "@/app/components/image";

export default function Box({block}: { block: BlockApiData }) {
    const bgColor = block.fields.background_color.selected_option.value;

    return (
        <section className="px-9 py-12 flex flex-col item-center lg:px-32 lg:py-40"
                 id={block.fields.skip_link_id.text ? block.fields.skip_link_id.text : null}
        >
            <div className={`${bgColor === 'light' ? 'bg-light': 'bg-charcoal'} flex flex-col justify-center items-center rounded-md w-100 p-12 lg:pt-24 lg:pb-32`}>
                <h2 className="text-center text-md leading-tight text-white md:w-[350px] lg:w-[450px] lg:text-xl">
                    {block.fields.header.text}
                </h2>

                {block.fields.body.text &&
                    <p className={`${bgColor === 'light' ? 'text-black': 'text-white text-opacity-40'} text-center mb-2 lg:w-1/2 mt-3 lg:mt-5`}>
                        {block.fields.body.text}
                    </p>
                }

                <div className="mt-5 md:flex md:flex-wrap md:justify-center md:mt-4 lg:mt-9 md:gap-5 w-full">
                    {block.fields.content.blocks[0].content_type.handle === 'horizontal_block' && block.fields.content.blocks.map((item: BlockApiData) => {
                        return (
                            <div key={`horizontal_block-${item.fields.header.text}-${item.sort}`} className="flex flex-col py-5 items-center text-center justify-center lg:flex-row md:gap-5 md:mx-auto md:text-left md:w-[400px] gap-x-2 lg:w-[480px]">
                                <Image asset={item.fields.icon.assets[0].asset} className="w-[50px] h-[50px] mb-2 mx-auto lg:w-[75px] lg:h-[75px]" noWebp={true} />
                                <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-3/4">
                                    <h4 className={`${bgColor === 'light' ? 'text-black': 'text-orange'} text-sm font-bold mb-2`}>{item.fields.header.text}</h4>
                                    <p className={bgColor === 'light' ? 'text-black': 'text-white text-opacity-40'}>{item.fields.body.text}</p>
                                </div>
                            </div>
                        )
                    })}

                    {block.fields.content.blocks[0].content_type.handle === 'stacked_block' && block.fields.content.blocks.map((item: BlockApiData) => {
                        return (
                            <div key={`horizontal_block-${item.fields.header.text}-${item.sort}`} className="flex-col py-5 items-center text-center justify-center md:w-[200px] lg:w-[300px]">
                                <Image asset={item.fields.icon.assets[0].asset} className="w-auto h-[60px] mb-3 mx-auto lg:h-[110px] lg:w-auto lg:mb-7" noWebp={true} />
                                <div className="flex flex-col">
                                    <h4 className={`${bgColor === 'light' ? 'text-black': 'text-orange'} text-md font-bold mb-2 lg:text-xl lg:mb-7`}>{item.fields.header.text}</h4>
                                    <p className={`${bgColor === 'light' ? 'text-black': 'text-white text-opacity-40'} text-xs mb-2 lg:text-sm`}>{item.fields.body.text}</p>
                                    <p className={`${bgColor === 'light' ? 'text-black': 'text-white'} text-sm lg:text-md`}>{item.fields.subtitle.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
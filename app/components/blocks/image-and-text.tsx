"use client";

import { BlockData } from "@gocontento/client/lib/types";
import Image from "@/app/components/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ImageAndText({ block }: { block: BlockData }) {
    const isBlog = usePathname().startsWith('/blog');

    return (
        <section className={`${isBlog ? 'px-0' : 'px-9'} py-12 md:px-44 lg:px-24 md:py-28 flex flex-col lg:flex-row justify-center lg:gap-20 lg:items-center`}
                 id={block.fields.skip_link_id.text ? block.fields.skip_link_id.text : null}
        >
            {/*//     :className="isBlogPage ? 'mt-0' : 'mt-5'"*/}
            <div className={`flex flex-col justify-start lg:w-2/5 ${block.fields.image_position.selected_option.value === 'left' ? 'mt-7 md:mt-0' : ''}`} >
                <h2 className="text-md leading-tight text-black mb-3 font-bold md:text-xl md:mb-5 lg:mb-5">{block.fields.header.text}</h2>
                <p className="text-xs text-grey md:text-sm lg:w-[90%]">{block.fields.body.text}</p>
                {block.fields.button.blocks.length > 0 &&
                    <Link href={block.fields.button.blocks[0].fields.button_url.text}
                          className="font-bold hover:text-white flex items-center gap-x-2 mt-4"
                    >
                        {block.fields.button.blocks[0].fields.button_text.text} <span className="text-sm">&rarr;</span>
                    </Link>
                }
            </div>

            <Image className={`mt-7 lg:mt-0 lg:w-1/3 ${block.fields.border_radius.is_on ? '[&>img]:rounded-3xl' : ''} ${block.fields.image_position.selected_option.value === 'left' ? 'lg:order-first' : ''}`} asset={block.fields.image.assets[0].asset} apiParams="fit=crop&w=600&dpr=2" />
        </section>
    )
}
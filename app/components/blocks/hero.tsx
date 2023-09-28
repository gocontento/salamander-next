import { AssetApiData, BlockApiData } from "@gocontento/client/lib/api-types";
import Markdown from 'react-markdown';
import Image from "@/app/components/image";

export default function Hero({ block }: { block: BlockApiData }) {

    const optionalBlock = block.fields.optional_blocks.blocks.length ? block.fields.optional_blocks.blocks[0] as BlockApiData : false;

    return (
        <section className="px-9 pt-9 pb-12 flex flex-col lg:flex-row item-center justify-between md:gap-20 md:px-32">
            <div className="flex flex-col justify-center lg:w-[750px]">
                <h2 className="text-xl leading-tight pb-4 md:text-xxl font-bold heading-with-white-accents">
                    <Markdown disallowedElements={["p"]} unwrapDisallowed={true}>{block.fields.hero_heading.text}</Markdown>
                </h2>

                <p className="text-xs text-grey md:text-sm lg:w-3/4">{block.fields.hero_body.text}</p>

                {/* TODO: at the moment this can accept more than one block, of two different types and we’re only handling the featured_on one */}
                {optionalBlock && (
                    <div className="flex flex-col justify-start mt-12 lg:mt-28 mb-5">
                        <h4 className="tracking-wider uppercase text-grey text-opacity-30 font-[500]">
                            {optionalBlock.fields.title.text}
                        </h4>
                        <div className="flex lg:flex-row items-center justify-between md:w-3/4 md:gap-10">
                            {/*v-for="logo in block.fields.optional_blocks.blocks[0].fields.logos.assets" :src="logo.asset.url"*/}
                            {optionalBlock.fields.logos.assets.map((item: { asset: AssetApiData }) => {
                                const asset = item.asset;
                                return (
                                    <Image key={asset.id} asset={asset} className="my-2 w-[90px] md:w-[150px]" noWebp={true} />
                                )
                            })}

                        </div>
                    </div>
                )}
            </div>
            <div
                className=" md:w-3/4 md:mx-auto mt-10 md:mt-0 lg:w-[700px] flex-shrink flex items-center justify-center lg:justify-end lg:mx-0"
            >
                <Image asset={block.fields.hero_image.assets[0].asset} apiParams="fit=fill&w=600&dpr=2" />
            </div>
        </section>
    );
}
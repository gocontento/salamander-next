import { AssetData, BlockData } from '@gocontento/client/lib/types'
import Markdown from 'react-markdown'
import Image from '@/app/components/image'

export default function Hero({ block }: { block: BlockData }) {
  const optionalBlock = block.fields.optional_blocks.blocks.length
    ? (block.fields.optional_blocks.blocks[0] as BlockData)
    : false

  return (
    <section className="item-center flex flex-col justify-between px-9 pb-12 pt-9 md:gap-20 md:px-32 lg:flex-row">
      <div className="flex flex-col justify-center lg:w-[750px]">
        <h2 className="pb-4 text-xl font-bold leading-tight md:text-xxl [&>strong]:text-white [&>strong]:[font-weight:inherit]">
          <Markdown disallowedElements={['p']} unwrapDisallowed={true}>
            {block.fields.hero_heading.text}
          </Markdown>
        </h2>

        <p className="text-xs text-grey md:text-sm lg:w-3/4">
          {block.fields.hero_body.text}
        </p>

        {/* TODO: at the moment this can accept more than one block, of two different types and we’re only handling the featured_on one */}
        {optionalBlock && (
          <div className="mb-5 mt-12 flex flex-col justify-start lg:mt-28">
            <h4 className="font-[500] uppercase tracking-wider text-grey text-opacity-30">
              {optionalBlock.fields.title.text}
            </h4>
            <div className="flex items-center justify-between md:w-3/4 md:gap-10 lg:flex-row">
              {/*v-for="logo in block.fields.optional_blocks.blocks[0].fields.logos.assets" :src="logo.asset.url"*/}
              {optionalBlock.fields.logos.assets.map(
                (item: { asset: AssetData }) => {
                  const asset = item.asset
                  return (
                    <Image
                      key={asset.id}
                      asset={asset}
                      className="my-2 w-[90px] md:w-[150px]"
                      noWebp={true}
                    />
                  )
                },
              )}
            </div>
          </div>
        )}
      </div>
      <div className=" mt-10 flex flex-shrink items-center justify-center md:mx-auto md:mt-0 md:w-3/4 lg:mx-0 lg:w-[700px] lg:justify-end">
        <Image
          asset={block.fields.hero_image.assets[0].asset}
          apiParams="fit=fill&w=600&dpr=2"
        />
      </div>
    </section>
  )
}

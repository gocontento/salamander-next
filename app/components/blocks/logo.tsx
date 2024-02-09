import { AssetData, BlockData } from '@gocontento/client/lib/types'
import Markdown from 'react-markdown'
import Image from '@/app/components/image'

export default function Logo({ block }: { block: BlockData }) {
  const logoNum = block.fields.logos.assets.length

  return (
    <section
      className="item-center flex flex-col justify-center px-9 py-10 lg:flex-row"
      id={block.fields.skip_link_id.text ? block.fields.skip_link_id.text : ''}
    >
      <div className="flex flex-col justify-center md:items-center">
        {block.fields.heading.text && (
          <h2 className="mb-4 text-xl font-bold leading-tight md:w-2/3 md:text-center lg:mb-7 lg:text-xxl [&>strong]:text-white [&>strong]:[font-weight:inherit]">
            <Markdown disallowedElements={['p']} unwrapDisallowed={true}>
              {block.fields.heading.text}
            </Markdown>
          </h2>
        )}
        <p
          className={`text-xs text-grey lg:w-[450px] lg:text-center lg:text-sm ${
            block.fields.heading.text ? 'text-left' : 'text-center'
          }`}
        >
          {block.fields.body.text}
        </p>

        <div
          className={`flex flex-wrap items-center gap-2 py-5 md:w-2/3 md:flex-row md:gap-5 lg:px-12 ${
            logoNum > 2 ? 'justify-center' : 'justify-between md:justify-center'
          }`}
        >
          {block.fields.logos.assets.map((item: { asset: AssetData }) => {
            const asset = item.asset
            return (
              <Image
                key={asset.id}
                className={
                  logoNum > 2 ? 'h-[50px] lg:h-[75px]' : 'h-[40px] lg:h-[50px]'
                }
                asset={asset}
                apiParams="dpr=2"
                noWebp={true}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

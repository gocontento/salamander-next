'use client'

import { BlockData } from '@gocontento/client/lib/types'
import Image from '@/app/components/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ImageAndText({ block }: { block: BlockData }) {
  const isBlog = usePathname().startsWith('/blog')

  return (
    <section
      className={`${
        isBlog ? 'px-0' : 'px-9'
      } flex flex-col justify-center py-12 md:px-44 md:py-28 lg:flex-row lg:items-center lg:gap-20 lg:px-24`}
      id={
        block.fields.skip_link_id.text ? block.fields.skip_link_id.text : null
      }
    >
      {/*//     :className="isBlogPage ? 'mt-0' : 'mt-5'"*/}
      <div
        className={`flex flex-col justify-start lg:w-2/5 ${
          block.fields.image_position.selected_option.value === 'left'
            ? 'mt-7 md:mt-0'
            : ''
        }`}
      >
        <h2 className="mb-3 text-md font-bold leading-tight text-black md:mb-5 md:text-xl lg:mb-5">
          {block.fields.header.text}
        </h2>
        <p className="text-xs text-grey md:text-sm lg:w-[90%]">
          {block.fields.body.text}
        </p>
        {block.fields.button.blocks.length > 0 && (
          <Link
            href={block.fields.button.blocks[0].fields.button_url.text}
            className="mt-4 flex items-center gap-x-2 font-bold hover:text-white"
          >
            {block.fields.button.blocks[0].fields.button_text.text}{' '}
            <span className="text-sm">&rarr;</span>
          </Link>
        )}
      </div>

      <Image
        className={`mt-7 lg:mt-0 lg:w-1/3 ${
          block.fields.border_radius.is_on ? '[&>img]:rounded-3xl' : ''
        } ${
          block.fields.image_position.selected_option.value === 'left'
            ? 'lg:order-first'
            : ''
        }`}
        asset={block.fields.image.assets[0].asset}
        apiParams="fit=crop&w=600&dpr=2"
      />
    </section>
  )
}

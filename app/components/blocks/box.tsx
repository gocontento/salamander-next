import { BlockData } from '@gocontento/client/lib/types'
import Image from '@/app/components/image'

export default function Box({ block }: { block: BlockData }) {
  const bgColor = block.fields.background_color.selected_option.value

  return (
    <section
      className="item-center flex flex-col px-9 py-12 lg:px-32 lg:py-40"
      id={
        block.fields.skip_link_id.text ? block.fields.skip_link_id.text : null
      }
    >
      <div
        className={`${
          bgColor === 'light' ? 'bg-light' : 'bg-charcoal'
        } w-100 flex flex-col items-center justify-center rounded-md p-12 lg:pb-32 lg:pt-24`}
      >
        <h2 className="text-center text-md leading-tight text-white md:w-[350px] lg:w-[450px] lg:text-xl">
          {block.fields.header.text}
        </h2>

        {block.fields.body.text && (
          <p
            className={`${
              bgColor === 'light' ? 'text-black' : 'text-white text-opacity-40'
            } mb-2 mt-3 text-center lg:mt-5 lg:w-1/2`}
          >
            {block.fields.body.text}
          </p>
        )}

        <div className="mt-5 w-full md:mt-4 md:flex md:flex-wrap md:justify-center md:gap-5 lg:mt-9">
          {block.fields.content.blocks[0].content_type.handle ===
            'horizontal_block' &&
            block.fields.content.blocks.map((item: BlockData) => {
              return (
                <div
                  key={`horizontal_block-${item.fields.header.text}-${item.sort}`}
                  className="flex flex-col items-center justify-center gap-x-2 py-5 text-center md:mx-auto md:w-[400px] md:gap-5 md:text-left lg:w-[480px] lg:flex-row"
                >
                  <Image
                    asset={item.fields.icon.assets[0].asset}
                    className="mx-auto mb-2 h-[50px] w-[50px] lg:h-[75px] lg:w-[75px]"
                    noWebp={true}
                  />
                  <div className="flex flex-col items-center text-center lg:w-3/4 lg:items-start lg:text-left">
                    <h4
                      className={`${
                        bgColor === 'light' ? 'text-black' : 'text-orange'
                      } mb-2 text-sm font-bold`}
                    >
                      {item.fields.header.text}
                    </h4>
                    <p
                      className={
                        bgColor === 'light'
                          ? 'text-black'
                          : 'text-white text-opacity-40'
                      }
                    >
                      {item.fields.body.text}
                    </p>
                  </div>
                </div>
              )
            })}

          {block.fields.content.blocks[0].content_type.handle ===
            'stacked_block' &&
            block.fields.content.blocks.map((item: BlockData) => {
              return (
                <div
                  key={`horizontal_block-${item.fields.header.text}-${item.sort}`}
                  className="flex-col items-center justify-center py-5 text-center md:w-[200px] lg:w-[300px]"
                >
                  <Image
                    asset={item.fields.icon.assets[0].asset}
                    className="mx-auto mb-3 h-[60px] w-auto lg:mb-7 lg:h-[110px] lg:w-auto"
                    noWebp={true}
                  />
                  <div className="flex flex-col">
                    <h4
                      className={`${
                        bgColor === 'light' ? 'text-black' : 'text-orange'
                      } mb-2 text-md font-bold lg:mb-7 lg:text-xl`}
                    >
                      {item.fields.header.text}
                    </h4>
                    <p
                      className={`${
                        bgColor === 'light'
                          ? 'text-black'
                          : 'text-white text-opacity-40'
                      } mb-2 text-xs lg:text-sm`}
                    >
                      {item.fields.body.text}
                    </p>
                    <p
                      className={`${
                        bgColor === 'light' ? 'text-black' : 'text-white'
                      } text-sm lg:text-md`}
                    >
                      {item.fields.subtitle.text}
                    </p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

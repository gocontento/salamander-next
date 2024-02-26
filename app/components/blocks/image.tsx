import { BlockData } from '@gocontento/client/lib/types'
import Image from '@/app/components/image'

export default function ImageBlock({ block }: { block: BlockData }) {
  return (
    <section className="mx-auto mt-12 flex items-center justify-center">
      <Image
        className="md:max-w-3xl [&>img]:rounded-3xl"
        asset={block.fields.image.assets[0].asset}
        apiParams="fit=crop&w=760&dpr=2"
      />
    </section>
  )
}

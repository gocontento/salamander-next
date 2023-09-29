import { BlockApiData } from "@gocontento/client/lib/api-types";
import Hero from "@/app/components/blocks/hero";
import ImageAndText from "@/app/components/blocks/image-and-text";
import Box from "@/app/components/blocks/box";
import Logo from "@/app/components/blocks/logo";
import Faqs from "@/app/components/blocks/faqs";

export default function BlockMatcher({block}: { block: BlockApiData }) {
    switch (block.content_type.handle) {
        case "hero":
            return (
                <Hero block={block} />
            );

        case "image_and_text":
            return (
                <ImageAndText block={block} />
            );

        case "box_block":
            return (
                <Box block={block} />
            );

        case "logo_block":
            return (
                <Logo block={block} />
            );

        case "faq":
            return (
                <Faqs block={block} />
            );

        default:
            return (
                <div className="bg-charcoal p-12 text-center text-4xl font-bold text-white">
                    INVALID BLOCK
                    <br />
                    <br />
                    <pre>{block.content_type.handle}</pre>
                </div>
            );
    }
}
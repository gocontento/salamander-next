import { BlockApiData } from "@gocontento/client/lib/api-types";
import Hero from "@/app/components/blocks/hero";

export default function BlockMatcher({block}: { block: BlockApiData }) {
    switch (block.content_type.handle) {
        case "hero":
            return (
                <Hero block={block} />
            );

        default:
            return null;
    }
}
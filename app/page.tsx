import { draftMode } from 'next/headers';
import { createClient } from "@/lib/contento";
import { PreviewBridge } from "@gocontento/next";
import { BlockData } from "@gocontento/client/lib/types";
import BlockMatcher from "@/app/components/block-matcher";

const client = createClient();

export default async function Home() {

    const { isEnabled } = draftMode();

    const content = await client.getContentBySlug("home", "general_page");

    return (
        <div className="pb-12 md:pb-32">
            <PreviewBridge draftMode={isEnabled} />

            {content.fields.content.blocks.map((block: BlockData) => {
                return (
                    <BlockMatcher key={`${block.name}-${block.sort}`} block={block} />
                )
            })}
        </div>
    )
}

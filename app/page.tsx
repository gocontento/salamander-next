import { draftMode } from 'next/headers';
import { createClient } from "@/lib/contento";
import { PreviewBridge } from "@gocontento/next";
import {BlockData, ContentData} from "@gocontento/client/lib/types";
import BlockMatcher from "@/app/components/block-matcher";

const client = createClient();

export default async function Home() {

    const { isEnabled } = draftMode();

    const response = await client.getContent({
        params: {
            content_type: "general_page",
            slug: "home",
            limit: "1"
        }
    });

    const homePageContent = response.content[0] as ContentData;

    return (
        <div className="pb-12 md:pb-32">
            <PreviewBridge draftMode={isEnabled} />

            {homePageContent.fields.content.blocks.map((block: BlockData) => {
                return (
                    <BlockMatcher key={`${block.name}-${block.sort}`} block={block} />
                )
            })}
        </div>
    )
}

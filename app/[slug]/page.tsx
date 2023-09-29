import { draftMode } from 'next/headers';
import { createClient } from "@/lib/contento";
import { PreviewBridge } from "@gocontento/next";
import {BlockApiData, ContentApiData} from "@gocontento/client/lib/api-types";
import BlockMatcher from "@/app/components/block-matcher";

const client = createClient();

type Props = {
    params: {
        slug: string;
    };
};


export default async function GeneralPage({ params }: Props) {

    const { isEnabled } = draftMode();

    const response = await client.getContent({
        params: {
            content_type: "general_page",
            slug: params.slug,
            limit: "1"
        }
    });

    const homePageContent = response.content[0] as ContentApiData;

    return (
        <div className="pb-12 md:pb-32">
            <PreviewBridge draftMode={isEnabled} />

            {/* TODO: handle info page here as well, probably break out the following stuff to a component or do a simple if statement */}
            {homePageContent.fields.content.blocks.map((block: BlockApiData) => {
                return (
                    <BlockMatcher key={`${block.name}-${block.sort}`} block={block} />
                )
            })}
        </div>
    )
}

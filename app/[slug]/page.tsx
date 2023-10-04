import { draftMode } from 'next/headers';
import { createClient } from "@/lib/contento";
import { PreviewBridge } from "@gocontento/next";
import {BlockData, ContentData} from "@gocontento/client/lib/types";
import BlockMatcher from "@/app/components/block-matcher";

const client = createClient();

type Props = {
    params: {
        slug: string;
    };
};

export default async function GeneralPage({ params }: Props) {
    const response = await client.getContent({
        params: {
            content_type: ["general_page", "info_page"],
            slug: params.slug,
            limit: "1"
        }
    });

    const content = response.content[0] as ContentData;

    return (
        <article className={`pb-12 md:pb-32 ${content.content_type.handle === "info_page" ? 'max-w-prose mx-auto' : ''}`}>
            <PreviewBridge draftMode={draftMode().isEnabled} />

            {content.content_type.handle === "info_page" &&
                <header className="md:pt-16 md:text-center pb-7 border-b-2 border-charcoal">
                    <h1 className="text-xl font-bold mb-5">{content.fields.heading.text}</h1>
                    <p>{content.fields.intro_text.text}</p>
                </header>
            }

            {content.fields.content.blocks.map((block: BlockData) => {
                return (
                    <BlockMatcher key={`${block.name}-${block.sort}`} block={block}/>
                )
            })}
        </article>
    )
}

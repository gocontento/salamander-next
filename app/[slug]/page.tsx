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
            "content_type[0]": "general_page",
            "content_type[1]": "info_page",
            slug: params.slug,
            limit: "1"
        }
    });

    const pageContent = response.content[0] as ContentApiData;

    return (
        <article className={`pb-12 md:pb-32 ${pageContent.content_type.handle === "info_page" ? 'max-w-prose mx-auto' : ''}`}>
            <PreviewBridge draftMode={isEnabled}/>

            {pageContent.content_type.handle === "info_page" &&
                <header className="md:pt-16 md:text-center pb-7 border-b-2 border-charcoal">
                    <h1 className="text-xl font-bold mb-5">{pageContent.fields.heading.text}</h1>
                    <p>{pageContent.fields.intro_text.text}</p>
                </header>
            }

            {pageContent.fields.content.blocks.map((block: BlockApiData) => {
                return (
                    <BlockMatcher key={`${block.name}-${block.sort}`} block={block}/>
                )
            })}
        </article>
    )
}

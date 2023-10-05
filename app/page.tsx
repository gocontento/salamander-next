import { draftMode } from 'next/headers';
import { createClient, generateSeo } from "@/lib/contento";
import { PreviewBridge } from "@gocontento/next";
import { BlockData } from "@gocontento/client/lib/types";
import BlockMatcher from "@/app/components/block-matcher";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const client = createClient();

export async function generateMetadata(): Promise<Metadata> {
    return await client.getContentBySlug("home", "general_page")
        .then((content) => {
            return generateSeo(content, {}, content.url?.replace('/home', ''));
        })
        .catch(() => {
            return {};
        });
}

export default async function Home() {
    const content = await client.getContentBySlug("home", "general_page")
        .catch(() => {
            notFound();
        });

    return (
        <div className="pb-12 md:pb-32">
            <PreviewBridge draftMode={draftMode().isEnabled} />

            {content.fields.content.blocks.map((block: BlockData) => {
                return (
                    <BlockMatcher key={`${block.name}-${block.sort}`} block={block} />
                )
            })}
        </div>
    )
}

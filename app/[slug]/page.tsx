import { draftMode } from 'next/headers';
import { createClient, generateSeo } from "@/lib/contento";
import { PreviewBridge } from "@gocontento/next";
import { BlockData } from "@gocontento/client/lib/types";
import BlockMatcher from "@/app/components/block-matcher";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const client = createClient();

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    return await client.getContent({
        params: {
            content_type: ["general_page", "info_page"],
            limit: "100"
        }
    }).then((response) => {
        return response.content.map((content) => ({
            slug: content.slug,
        })).filter((o) => o.slug !== 'home')
    }).catch(() => {
        return []
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return await client.getContent({
        params: {
            content_type: ["general_page", "info_page"],
            slug: params.slug,
            limit: "1"
        }
    }).then((response) => {
        return generateSeo(response.content[0]);
    }).catch(() => {
        return {};
    });
}

export default async function GeneralPage({ params }: Props) {
    const response = await client.getContent({
        params: {
            content_type: ["general_page", "info_page"],
            slug: params.slug,
            limit: "1"
        }
    }).catch(() => {
        notFound();
    });

    const content = response.content[0];

    return (
        <article className={`pb-12 md:pb-32 ${content.content_type.handle === "info_page" ? 'max-w-prose mx-auto' : ''}`}>
            <PreviewBridge draftMode={draftMode().isEnabled} />

            {content.content_type.handle === "info_page" &&
                <header className="md:pt-16 md:text-center pb-7 border-b-2 border-charcoal">
                    <h1 className="text-xl font-bold mb-5">{content.fields.title.text}</h1>
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

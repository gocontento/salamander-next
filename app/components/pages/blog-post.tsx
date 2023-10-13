"use client";

import { BlockData, ContentData } from "@gocontento/client/lib/types";
import BlockMatcher from "@/app/components/block-matcher";
import { useLivePreview } from "@gocontento/next";
import Link from "next/link";
import Image from "@/app/components/image";
import AuthorCard from "@/app/components/blog/author-card";

export default function BlogPost({ initialContent }: { initialContent: ContentData }){
    const { content } = useLivePreview({ content: initialContent});

    const author = content.fields.author.content_links[0].content_link as ContentData;

    return (
        <article className="px-9 py-7 md:py-20">
            <header className="md:text-center max-w-xl mx-auto">
                <h2 className="text-xs uppercase font-bold tracking-wider hover:text-pink transition duration-300"><Link href="/blog">The Blog</Link></h2>
                <h1 className="text-xl leading-tight font-bold my-6">{content.fields.title.text}</h1>
                <p>{content.fields.excerpt.text}</p>
            </header>

            <Image asset={content.fields.cover_image.assets[0].asset}
                   apiParams="fit=crop&w=760&h=530&dpr=2"
                   className="block md:max-w-3xl md:mx-auto overflow-hidden rounded-3xl my-5 md:my-12 object-cover"
            />

            {content.fields.post_body.blocks.map((block: BlockData) => {
                return (
                    <BlockMatcher key={`${block.name}-${block.sort}`} block={block} />
                )
            })}

            <AuthorCard author={author} />
        </article>
    );
}
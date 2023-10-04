import { draftMode } from 'next/headers';
import { PreviewBridge } from "@gocontento/next";
import { createClient } from "@/lib/contento";
import {BlockData, ContentData} from "@gocontento/client/lib/types";
import CategoryPills from "@/app/components/blog/category-pills";
import PostGrid from "@/app/components/blog/post-grid";
import Image from "@/app/components/image";
import Link from "next/link";
import BlockMatcher from "@/app/components/block-matcher";
import AuthorCard from "@/app/components/blog/author-card";

const client = createClient();

type Props = {
    params: {
        slug: string;
    };
};

export default async function BlogPostPage({ params }: Props) {

    const { isEnabled } = draftMode();

    const response = await client.getContent({
        params: {
            content_type: "blog_post",
            slug: params.slug,
            limit: "1"
        }
    });

    const post = response.content[0] as ContentData;

    const category = post.fields.category.content_links[0].content_link as ContentData;
    const author = post.fields.author.content_links[0].content_link as ContentData;

    return (
        <article className="px-9 py-7 md:py-20">
            <PreviewBridge draftMode={isEnabled} />

            <header className="md:text-center max-w-xl mx-auto">
                <Link href={`/${category.uri}`} className="inline-block bg-charcoal text-[12px] px-5 py-2 mb-5 text-white rounded-full hover:bg-[#FF5E6B] hover:text-white">
                    {category.name}
                </Link>

                <h1 className="text-xl leading-tight font-bold mb-2">{post.fields.title.text}</h1>
                <p>{post.fields.excerpt.text}</p>
            </header>

            <Image asset={post.fields.cover_image.assets[0].asset}
                   apiParams="fit=crop&w=760&h=530&dpr=2"
                   className="block md:max-w-3xl md:mx-auto overflow-hidden rounded-3xl my-5 md:my-12 object-cover"
            />

            {post.fields.post_body.blocks.map((block: BlockData) => {
                return (
                    <BlockMatcher key={`${block.name}-${block.sort}`} block={block} />
                )
            })}

            <AuthorCard author={author} />

    {/*// <Author className="md:w-1/2 rounded-[15px] my-12" :author="data.fields.author" />*/}
        </article>
    )
}

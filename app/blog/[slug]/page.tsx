import { draftMode } from 'next/headers';
import { PreviewBridge } from "@gocontento/next";
import { createClient, generateSeo } from "@/lib/contento";
import { BlockData, ContentData } from "@gocontento/client/lib/types";
import Image from "@/app/components/image";
import Link from "next/link";
import BlockMatcher from "@/app/components/block-matcher";
import AuthorCard from "@/app/components/blog/author-card";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const client = createClient();

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    return await client.getContentByType({
        contentType: "blog_post",
        limit: 100,
    }).then((response) => {
        return response.content.map((content) => ({
            slug: content.slug,
        }))
    }).catch(() => {
        return []
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return await client.getContentBySlug(params.slug, "blog_post")
        .then((content) => {
            return generateSeo(content, {
                type: 'article',
                publishedTime: content.published_at ?? undefined,
                modifiedTime: content.updated_at,
                authors: content.fields.author.content_links[0].content_link.url,
                section: content.fields.category.content_links[0].content_link.name,
            })
        }).catch(() => {
            return {}
        })
}

export default async function BlogPostPage({ params }: Props) {
    const post = await createClient(draftMode().isEnabled)
        .getContentBySlug(params.slug, "blog_post")
        .catch(() => {
            notFound()
        })

    const author = post.fields.author.content_links[0].content_link as ContentData;

    return (
        <article className="px-9 py-7 md:py-20">
            <PreviewBridge draftMode={draftMode().isEnabled} />

            <header className="md:text-center max-w-xl mx-auto">
                <h2 className="text-xs uppercase font-bold tracking-wider hover:text-pink transition duration-300"><Link href="/blog">The Blog</Link></h2>
                <h1 className="text-xl leading-tight font-bold my-6">{post.fields.title.text}</h1>
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
        </article>
    )
}

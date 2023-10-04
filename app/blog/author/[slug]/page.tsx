import { draftMode } from 'next/headers';
import { PreviewBridge } from "@gocontento/next";
import { createClient } from "@/lib/contento";
import { ContentData } from "@gocontento/client/lib/types";
import Link from "next/link";
import PostGrid from "@/app/components/blog/post-grid";
import AuthorCard from "@/app/components/blog/author-card";

const client = createClient();

type Props = {
    params: {
        slug: string;
    };
};

export default async function BlogAuthorPage({ params }: Props) {
    const content = await client.getContentBySlug(params.slug, "authors");
    
    const postsResponse = await client.getContent({
        params: {
            content_type: "blog_post",
            limit: "100",
            "fields[content_links][author][slug]": params.slug
        }
    });

    const posts = postsResponse.content;

    return (
        <div className="px-9 py-7 md:px-24 md:py-20">
            <PreviewBridge draftMode={draftMode().isEnabled} />
            <header className="border-b-2 border-charcoal md:text-center pb-5">
                <h2 className="inline text-xs uppercase font-bold tracking-wider mt-2 hover:text-pink transition duration-300"><Link href="/blog">The Blog</Link></h2>
                <AuthorCard author={content} h1={true} />
            </header>
            <PostGrid posts={posts} />
        </div>
    )
}

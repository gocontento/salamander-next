import { draftMode } from 'next/headers';
import { PreviewBridge } from "@gocontento/next";
import { createClient } from "@/lib/contento";
import CategoryPills from "@/app/components/blog/category-pills";
import PostGrid from "@/app/components/blog/post-grid";

const client = createClient();

export default async function BlogPage() {
    const content = await client.getContentBySlug("blog", "blog_landing");

    const postsResponse = await client.getContentByType({
        contentType: "blog_post"
    });

    const posts = postsResponse.content;

    return (
        <div className="px-9 py-7 md:px-24 md:py-20">
            <PreviewBridge draftMode={draftMode().isEnabled} />
            <header className="border-b-2 border-charcoal md:text-center pb-5">
                <h1 className="text-xxl font-bold mb-5">{content.fields.header.text}</h1>
                <p className="text-sm md:max-w-2xl md:mx-auto">{content.fields.body.text}</p>
                <CategoryPills />
            </header>
            <PostGrid posts={posts} />
        </div>
    )
}

"use client";

import { useLivePreview } from "@gocontento/next";
import CategoryPills from "@/app/components/blog/category-pills";
import PostGrid from "@/app/components/blog/post-grid";
import { ContentData } from "@gocontento/client/lib/types";
import {CategoryLink} from "@/types";

export default function BlogIndex({ initialContent, posts, categoryLinks }: { initialContent: ContentData, posts: ContentData[], categoryLinks: CategoryLink[] }) {
    const { content } = useLivePreview({ content: initialContent });

    return (
        <div className="px-9 py-7 md:px-24 md:py-20">
            <header className="border-b-2 border-charcoal md:text-center pb-5">
                <h1 className="text-xxl font-bold mb-5">{content.fields.header.text}</h1>
                <p className="text-sm md:max-w-2xl md:mx-auto">{content.fields.body.text}</p>
                <CategoryPills categoryLinks={categoryLinks} />
            </header>
            <PostGrid posts={posts} />
        </div>
    )
}
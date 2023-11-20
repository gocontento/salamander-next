"use client";

import { useLivePreview } from "@gocontento/next";
import CategoryPills from "@/app/components/blog/category-pills";
import PostGrid from "@/app/components/blog/post-grid";
import { ContentData } from "@gocontento/client/lib/types";
import Link from "next/link";
import {CategoryLink} from "@/types";

export default function BlogCategory({ initialContent, posts, categoryLinks }: { initialContent: ContentData, posts: ContentData[], categoryLinks: CategoryLink[] }) {
    const { content } = useLivePreview({ content: initialContent });

    return (
        <div className="px-9 py-7 md:px-24 md:py-20">
            <header className="border-b-2 border-charcoal md:text-center pb-5">
                <h2 className="inline text-xs uppercase font-bold tracking-wider mt-2 hover:text-pink transition duration-300"><Link href="/blog">The Blog</Link></h2>
                <h1 className="text-xxl font-bold mb-5">{content.fields.title.text}</h1>
                <CategoryPills categoryLinks={categoryLinks} />
            </header>
            <PostGrid posts={posts} />
        </div>
    )
}
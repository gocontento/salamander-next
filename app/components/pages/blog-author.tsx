"use client";

import {useLivePreview} from "@gocontento/next";
import PostGrid from "@/app/components/blog/post-grid";
import { ContentData } from "@gocontento/client/lib/types";
import Link from "next/link";
import AuthorCard from "@/app/components/blog/author-card";

export default function BlogAuthor({ initialContent, posts }: { initialContent: ContentData, posts: ContentData[] }) {
    const { content } = useLivePreview({ content: initialContent });

    return (
        <div className="px-9 py-7 md:px-24 md:py-20">
            <header className="border-b-2 border-charcoal md:text-center pb-5">
                <h2 className="inline text-xs uppercase font-bold tracking-wider mt-2 hover:text-pink transition duration-300"><Link href="/blog">The Blog</Link></h2>
                <AuthorCard author={content} h1={true} />
            </header>
            <PostGrid posts={posts} />
        </div>
    )
}
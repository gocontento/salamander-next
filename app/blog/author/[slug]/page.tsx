import { draftMode } from 'next/headers';
import { PreviewBridge } from "@gocontento/next";
import { createClient } from "@/lib/contento";
import { ContentApiData } from "@gocontento/client/lib/api-types";
import CategoryPills from "@/app/components/blog/category-pills";
import Link from "next/link";
import PostGrid from "@/app/components/blog/post-grid";
import Image from "@/app/components/image";

const client = createClient();

type Props = {
    params: {
        slug: string;
    };
};

export default async function BlogAuthorPage({ params }: Props) {

    const { isEnabled } = draftMode();

    const response = await client.getContent({
        params: {
            content_type: "authors",
            slug: params.slug,
            limit: "1"
        }
    });

    const authorPageContent = response.content[0] as ContentApiData;

    const postsResponse = await client.getContent({
        params: {
            content_type: "blog_post",
            limit: "100",
            "fields[content_links][author][slug]": params.slug
        }
    });

    const posts = postsResponse.content as ContentApiData[];

    return (
        <div className="px-9 py-7 md:px-24 md:py-20">
            <PreviewBridge draftMode={isEnabled} />
            <header className="border-b-2 border-charcoal md:text-center pb-5">
                <h2 className="inline text-xs uppercase font-bold tracking-wider mt-2 hover:text-pink transition duration-300"><Link href="/blog">The Blog</Link></h2>
                <h1 className="text-xxl font-bold mb-5">{authorPageContent.fields.name.text}</h1>

                <div className="flex items-center justify-start mt-5 gap-5 text-left max-w-lg mx-auto">
                    <Image asset={authorPageContent.fields.photo.assets[0].asset}
                           className="w-16 h-16 rounded-full"
                           apiParams="fit=crop&w=64&h=64&dpr=2"
                           noWebp={true}
                    />

                    <div>
                        <h4 className="text-sm font-bold">{authorPageContent.fields.role.text}</h4>
                        <p className="">{authorPageContent.fields.bio.text}</p>
                        <p>{authorPageContent.fields.twitter.text}</p>
                        <p>{authorPageContent.fields.linked_in.text}</p>
                    </div>
                </div>

                <CategoryPills />
            </header>
            <PostGrid posts={posts} />
        </div>
    )
}

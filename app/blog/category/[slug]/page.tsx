import { draftMode } from 'next/headers';
import { PreviewBridge } from "@gocontento/next";
import {createClient, generateSeo} from "@/lib/contento";
import CategoryPills from "@/app/components/blog/category-pills";
import Link from "next/link";
import PostGrid from "@/app/components/blog/post-grid";
import {notFound} from "next/navigation";
import {Metadata} from "next";

const client = createClient();

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    return await client.getContentByType({
        contentType: "blog_category",
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
    return await client.getContentBySlug(params.slug, "blog_category")
        .then((content) => {
            return generateSeo(content);
        }).catch(() => {
            return {};
        });
}

export default async function BlogCategoryPage({ params }: Props) {
    const content = await createClient(draftMode().isEnabled)
        .getContentBySlug(params.slug, "blog_category")
        .catch(() => {
            notFound();
        });
    
    const postsResponse = await client.getContent({
        params: {
            content_type: "blog_post",
            limit: "100",
            "fields[content_links][category][slug]": params.slug
        }
    });

    const posts = postsResponse.content;

    return (
        <div className="px-9 py-7 md:px-24 md:py-20">
            <PreviewBridge draftMode={draftMode().isEnabled} />
            <header className="border-b-2 border-charcoal md:text-center pb-5">
                <h2 className="inline text-xs uppercase font-bold tracking-wider mt-2 hover:text-pink transition duration-300"><Link href="/blog">The Blog</Link></h2>
                <h1 className="text-xxl font-bold mb-5">{content.fields.title.text}</h1>
                <CategoryPills />
            </header>
            <PostGrid posts={posts} />
        </div>
    )
}

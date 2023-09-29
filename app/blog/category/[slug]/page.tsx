import { draftMode } from 'next/headers';
import { PreviewBridge } from "@gocontento/next";
import { createClient } from "@/lib/contento";
import { ContentApiData } from "@gocontento/client/lib/api-types";
import CategoryPills from "@/app/components/blog/category-pills";
import Link from "next/link";

const client = createClient();

type Props = {
    params: {
        slug: string;
    };
};

export default async function BlogCategoryPage({ params }: Props) {

    const { isEnabled } = draftMode();

    const response = await client.getContent({
        params: {
            content_type: "blog_category",
            slug: params.slug,
            limit: "1"
        }
    });

    const categoryPageContent = response.content[0] as ContentApiData;

    return (
        <div className="px-9 py-7 md:px-24 md:py-20">
            <PreviewBridge draftMode={isEnabled} />
            <header className="border-b-2 border-charcoal md:text-center pb-5">
                <h2 className="inline text-xs uppercase font-bold tracking-wider mt-2 hover:text-pink transition duration-300"><Link href="/blog">The Blog</Link></h2>
                <h1 className="text-xxl font-bold mb-5">{categoryPageContent.fields.title.text}</h1>
                <CategoryPills />
            </header>
            {/*<BlogGallery />*/}
        </div>
    )
}

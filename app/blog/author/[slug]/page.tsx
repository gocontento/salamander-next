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
                <h1 className="text-xxl font-bold mb-8">{authorPageContent.fields.name.text}</h1>

                <div className="flex items-center justify-start mt-5 gap-5 text-left max-w-lg mx-auto mb-8">
                    <Image asset={authorPageContent.fields.photo.assets[0].asset}
                           className="w-32 h-32 rounded-full"
                           apiParams="fit=crop&w=128&h=128&dpr=2"
                           noWebp={true}
                    />

                    <div>
                        <h4 className="text-sm font-bold">{authorPageContent.fields.role.text}</h4>
                        <p className="mb-2">{authorPageContent.fields.bio.text}</p>

                        <ul className="flex gap-2">
                            {authorPageContent.fields.twitter.text &&
                                <li>
                                    <Link href={authorPageContent.fields.twitter.text} className="text-charcoal hover:text-pink">
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </Link>
                                </li>
                            }

                            {authorPageContent.fields.linked_in.text &&
                                <li>
                                    <Link href={authorPageContent.fields.linked_in.text} className="text-charcoal hover:text-pink">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>

                <CategoryPills />
            </header>
            <PostGrid posts={posts} />
        </div>
    )
}

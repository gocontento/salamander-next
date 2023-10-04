import {ContentData} from "@gocontento/client/lib/types";
import Link from "next/link";
import Image from "@/app/components/image";

export default function PostCard({post}: { post: ContentData }) {
    const author = post.fields.author.content_links[0].content_link;
    const category = post.fields.category.content_links[0].content_link;
    return (
        <div className="flex flex-col justify-between py-10 md:py-5">
            <Link href={`/${post.uri}`}>
                <Image asset={post.fields.cover_image.assets[0].asset}
                       className="h-[180px] md:h-[300px] flex items-center overflow-hidden rounded-[20px] mb-6 object-cover object-center w-full"
                       apiParams="fit=crop&w=800&h=600&dpr=2"
                />
            </Link>
            <div className="flex flex-col justify-start items-start flex-1 pb-2">
                <Link href={`/${category.uri}`} className="uppercase tracking-wider text-[12px] font-bold mb-3 md:mb-2">
                    {category.name}
                </Link>
                <Link href={`/${post.uri}`}>
                    <h3 className="text-md leading-tight font-bold mb-3">{post.name}</h3>
                </Link>
                <p>{post.fields.excerpt.text}</p>
            </div>
            <Link href={`/${author.uri}`} className="flex items-center justify-start mt-5 border-t-2 gap-5 border-charcoal pt-5">
                <Image asset={author.fields.photo.assets[0].asset}
                       className="w-16 h-16 rounded-full"
                       apiParams="fit=crop&w=64&h=64&dpr=2"
                       noWebp={true}
                />
                <div>
                    <h4 className="text-sm font-bold">{author.name}</h4>
                    <div className="text-[14px] uppercase">{author.fields.role.text}</div>
                </div>
            </Link>
        </div>
    )
}
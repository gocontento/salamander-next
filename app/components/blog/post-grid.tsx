import {ContentApiData} from "@gocontento/client/lib/api-types";
import PostCard from "@/app/components/blog/post-card";

export default function PostGrid({posts}: { posts: ContentApiData[] }) {
    return (
        <div className="grid md:grid-cols-3 md:py-12 md:gap-x-10 md:gap-y-5">
            {posts.map((post) => {
                return (
                    <PostCard key={post.id} post={post} />
                )
            })}
        </div>
    )
}
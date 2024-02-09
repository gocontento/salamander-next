import { ContentData } from '@gocontento/client/lib/types'
import PostCard from '@/app/components/blog/post-card'

export default function PostGrid({ posts }: { posts: ContentData[] }) {
  return (
    <div className="grid md:grid-cols-3 md:gap-x-10 md:gap-y-5 md:py-12">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />
      })}
    </div>
  )
}

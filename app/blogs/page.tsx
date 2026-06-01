import { getPostsByCategory } from '@/lib/posts'
import PostList from '@/components/PostList'

export const metadata = {
  title: 'Blogs — Naman Choradia',
  description: 'Thoughts on markets, learning, psychology and compounding.',
}

export default function BlogsPage() {
  const posts = getPostsByCategory('blogs')
  return (
    <PostList
      posts={posts}
      title="Blogs"
      description="Thoughts on markets, learning, psychology and the art of compounding in all areas of life."
    />
  )
}

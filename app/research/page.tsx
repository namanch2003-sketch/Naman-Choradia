import { getPostsByCategory } from '@/lib/posts'
import PostList from '@/components/PostList'

export const metadata = {
  title: 'Research — Naman Choradia',
  description: 'Sector studies, market structure analysis and technical setups.',
}

export default function ResearchPage() {
  const posts = getPostsByCategory('research')
  return (
    <PostList
      posts={posts}
      title="Technical Research"
      description="Sector studies, market structure analysis and technical setups from my ongoing research."
    />
  )
}

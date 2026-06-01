import { getPostsByCategory } from '@/lib/posts'
import PostList from '@/components/PostList'

export const metadata = {
  title: 'CA Final — Naman Choradia',
  description: 'Study notes, revision systems and exam insights for CA Final preparation.',
}

export default function CAFinalPage() {
  const posts = getPostsByCategory('ca-final')
  return (
    <PostList
      posts={posts}
      title="CA Final"
      description="Study notes, revision systems and exam insights from my CA Final preparation journey."
    />
  )
}

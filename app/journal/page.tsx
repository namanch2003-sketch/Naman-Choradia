import { getPostsByCategory } from '@/lib/posts'
import PostList from '@/components/PostList'

export const metadata = {
  title: 'Journal — Naman Choradia',
  description: 'Live trade journal — trades, reviews, mistakes and learnings.',
}

export default function JournalPage() {
  const posts = getPostsByCategory('journal')
  return (
    <PostList
      posts={posts}
      title="Live Trade Journal"
      description="Trades, reviews, mistakes and learnings from my live trading journey."
    />
  )
}

import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface Props {
  posts: Post[]
  title: string
  description: string
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function PostList({ posts, title, description }: Props) {
  return (
    <div className="mx-auto max-w-[1280px] px-8 py-[80px]">
      {/* Page header */}
      <div className="mb-12 pb-8 border-b border-[#e9e9e9]">
        <h1 className="font-cormorant text-[56px] text-[#0A1F44] mb-3">{title}</h1>
        <p className="font-inter text-[18px] text-[#555] max-w-[600px] leading-relaxed">
          {description}
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="font-inter text-[16px] text-[#777]">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 [@media(min-width:600px)]:grid-cols-2 [@media(min-width:900px)]:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={`${post.category}-${post.slug}`}
              href={`/${post.category}/${post.slug}`}
              className="block border-t-2 border-[#C9A227] pt-4 no-underline group"
            >
              <p className="font-inter text-[12px] uppercase tracking-[1px] text-[#aaa] mb-2">
                {post.readTime} · {formatDate(post.date)}
              </p>
              <h2 className="font-cormorant text-[34px] text-[#0A1F44] leading-tight mb-3 group-hover:text-[#C9A227] transition-colors">
                {post.title}
              </h2>
              <p className="font-inter text-[15px] text-[#666] leading-relaxed">
                {post.description}
              </p>
              <p className="font-inter text-[13px] text-[#C9A227] mt-4 group-hover:underline">
                Read more →
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

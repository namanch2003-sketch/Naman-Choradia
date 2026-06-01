import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPostParams } from '@/lib/posts'

interface Props {
  params: { category: string; slug: string }
}

export async function generateStaticParams() {
  return getAllPostParams()
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.category, params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Naman Choradia`,
    description: post.description,
  }
}

const categoryLabels: Record<string, string> = {
  'ca-final': 'CA Final',
  research: 'Research',
  journal: 'Journal',
  blogs: 'Blogs',
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.category, params.slug)
  if (!post) notFound()

  const categoryLabel = categoryLabels[params.category] ?? params.category

  return (
    <article className="mx-auto max-w-[800px] px-8 py-[80px]">
      {/* Back */}
      <Link
        href={`/${params.category}`}
        className="inline-flex items-center gap-2 font-inter text-[14px] text-[#0A1F44] no-underline hover:text-[#C9A227] transition-colors mb-10"
      >
        ← Back to {categoryLabel}
      </Link>

      {/* Header */}
      <header className="mb-10 pb-8 border-b border-[#e9e9e9]">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-inter text-[12px] uppercase tracking-[2px] bg-[#0A1F44] text-white px-3 py-1">
            {categoryLabel}
          </span>
          {post.readTime && (
            <span className="font-inter text-[13px] text-[#aaa]">
              {post.readTime}
            </span>
          )}
        </div>
        <h1 className="font-cormorant text-[52px] text-[#0A1F44] leading-tight mb-4">
          {post.title}
        </h1>
        {post.description && (
          <p className="font-inter text-[18px] text-[#555] leading-relaxed mb-4">
            {post.description}
          </p>
        )}
        <p className="font-inter text-[14px] text-[#aaa]">
          {formatDate(post.date)}
        </p>
      </header>

      {/* Content */}
      <div
        className="prose font-inter text-[17px] text-[#333] leading-[1.85] space-y-5
          [&_h1]:font-cormorant [&_h1]:text-[#0A1F44] [&_h1]:text-[42px] [&_h1]:leading-tight [&_h1]:mt-10 [&_h1]:mb-4
          [&_h2]:font-cormorant [&_h2]:text-[#0A1F44] [&_h2]:text-[34px] [&_h2]:leading-tight [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:font-cormorant [&_h3]:text-[#0A1F44] [&_h3]:text-[26px] [&_h3]:leading-tight [&_h3]:mt-8 [&_h3]:mb-3
          [&_p]:mb-5 [&_p]:leading-[1.9]
          [&_ul]:pl-6 [&_ul]:mb-5 [&_ul>li]:mb-2 [&_ul>li]:list-disc
          [&_ol]:pl-6 [&_ol]:mb-5 [&_ol>li]:mb-2 [&_ol>li]:list-decimal
          [&_blockquote]:border-l-[3px] [&_blockquote]:border-[#C9A227] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[#555] [&_blockquote]:my-6
          [&_a]:text-[#C9A227] [&_a]:underline
          [&_strong]:font-semibold [&_strong]:text-[#0A1F44]
          [&_hr]:border-[#e9e9e9] [&_hr]:my-8"
        dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
      />
    </article>
  )
}

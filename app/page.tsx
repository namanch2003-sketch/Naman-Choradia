import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'
import { existsSync } from 'fs'
import { join } from 'path'

const focusAreas = [
  {
    title: 'CA Final Prep',
    desc: 'Study notes, revision systems and exam insights.',
    href: '/ca-final',
  },
  {
    title: 'Technical Research',
    desc: 'Sector studies, market structure and setups.',
    href: '/research',
  },
  {
    title: 'Live Trade Journal',
    desc: 'Trades, reviews, mistakes and learnings.',
    href: '/journal',
  },
  {
    title: 'Blogs',
    desc: 'Thoughts on markets, learning and psychology.',
    href: '/blogs',
  },
  {
    title: 'Tools',
    desc: 'AI tools and projects under development.',
    href: '/tools',
  },
  {
    title: 'About',
    desc: 'Background, journey and contact details.',
    href: '/about',
  },
]

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

function categoryLabel(cat: string) {
  const map: Record<string, string> = {
    'ca-final': 'CA Final',
    research: 'Research',
    journal: 'Journal',
    blogs: 'Blogs',
  }
  return map[cat] ?? cat
}

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 4)
  const heroImageExists = existsSync(
    join(process.cwd(), 'public', 'assets', 'images', 'hero-image.jpg')
  )

  return (
    <>
      {/* ── Hero ── */}
      <section className="mx-auto max-w-[1280px] px-8 py-[70px]">
        <div className="grid [@media(min-width:900px)]:grid-cols-[42fr_58fr] gap-12 items-center grid-cols-1">
          {/* Left copy */}
          <div>
            <p
              className="font-inter text-[13px] tracking-[3px] uppercase mb-6"
              style={{ color: '#C9A227' }}
            >
              Naman Choradia
            </p>
            <h1
              className="font-cormorant text-[#0A1F44] leading-[0.92] mb-8 text-[56px] [@media(min-width:900px)]:text-[88px]"
            >
              Discipline.
              <br />
              Research.
              <br />
              Compounding.
            </h1>
            <p className="font-inter text-[20px] text-[#444] leading-relaxed mb-10 max-w-[500px]">
              Documenting my journey through CA Final, financial markets, technology and continuous learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="font-inter text-[15px] bg-[#0A1F44] text-white px-[26px] py-[14px] no-underline hover:bg-[#C9A227] transition-colors duration-200"
              >
                Read Research
              </Link>
              <Link
                href="/journal"
                className="font-inter text-[15px] border border-[#0A1F44] text-[#0A1F44] px-[26px] py-[14px] no-underline hover:bg-[#0A1F44] hover:text-white transition-colors duration-200"
              >
                View Journal
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-full aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden bg-slate-200">
            {heroImageExists ? (
              <Image
                src="/assets/images/hero-image.jpg"
                alt="Naman Choradia"
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <span className="font-cormorant text-slate-400 text-[80px] leading-none">NC</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Focus Areas ── */}
      <section className="bg-[#f8f8f8] px-8 py-[80px]">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-cormorant text-[42px] text-[#0A1F44] mb-8">
            Focus Areas
          </h2>
          <div className="grid grid-cols-1 [@media(min-width:600px)]:grid-cols-2 [@media(min-width:900px)]:grid-cols-3 gap-[22px]">
            {focusAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="block border border-[#e9e9e9] bg-white p-7 no-underline group hover:-translate-y-1 transition-transform duration-200"
              >
                <h3 className="font-cormorant text-[30px] text-[#0A1F44] mb-2 group-hover:text-[#C9A227] transition-colors">
                  {area.title}
                </h3>
                <p className="font-inter text-[15px] text-[#555] leading-relaxed">
                  {area.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Writing ── */}
      <section className="px-8 py-[80px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-cormorant text-[42px] text-[#0A1F44]">
              Latest Writing
            </h2>
            <Link
              href="/blogs"
              className="font-inter text-[14px] text-[#C9A227] no-underline hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 [@media(min-width:600px)]:grid-cols-2 [@media(min-width:900px)]:grid-cols-4 gap-5">
            {latestPosts.map((post) => (
              <Link
                key={`${post.category}-${post.slug}`}
                href={`/${post.category}/${post.slug}`}
                className="block border-t-2 border-[#C9A227] pt-4 no-underline group"
              >
                <p className="font-inter text-[12px] uppercase tracking-[1px] text-[#aaa] mb-2">
                  {post.readTime} · {categoryLabel(post.category)}
                </p>
                <h3 className="font-cormorant text-[28px] text-[#0A1F44] leading-tight mb-2 group-hover:text-[#C9A227] transition-colors">
                  {post.title}
                </h3>
                <p className="font-inter text-[14px] text-[#666] leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <p className="font-inter text-[13px] text-[#aaa] mt-3">
                  {formatDate(post.date)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-[#0A1F44] py-[90px] text-center px-8">
        <h2
          className="font-cormorant text-white leading-tight text-[40px] [@media(min-width:900px)]:text-[64px] mx-auto"
          style={{ maxWidth: '900px' }}
        >
          Process over outcomes.
          <br />
          Consistency over intensity.
          <br />
          Compounding over shortcuts.
        </h2>
      </section>
    </>
  )
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getPostBySlug, getAllPostSlugs, CATEGORIES } from "@/lib/posts";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

const categoryLabels: Record<string, string> = {
  "technical-analysis": "Technical Analysis",
  "equity-research": "Equity Research",
  "ca-final-prep": "CA Final Prep",
  "track-my-trades": "Track My Trades",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.category, params.slug);
  if (!post) return { title: "Post Not Found — NRC" };

  return {
    title: `${post.title} — NRC`,
    description: post.description,
  };
}

export default async function PostPage({ params }: PageProps) {
  // Validate category
  if (!(CATEGORIES as readonly string[]).includes(params.category)) {
    notFound();
  }

  const post = await getPostBySlug(params.category, params.slug);
  if (!post) notFound();

  const categoryLabel = categoryLabels[post.category] ?? post.category;
  const categoryHref = `/${post.category}`;

  return (
    <>
      <div className="px-6 lg:px-16 xl:px-20 py-10 lg:py-16">
        {/* Back button */}
        <Link
          href={categoryHref}
          className="inline-flex items-center gap-2 text-sm font-medium font-sans text-muted hover:text-navy-DEFAULT transition-colors duration-200 mb-10 group"
        >
          <ArrowLeft
            size={15}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          Back to {categoryLabel}
        </Link>

        {/* Article */}
        <article className="max-w-2xl">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#EEF3FF] text-accent-DEFAULT">
              <Tag size={10} strokeWidth={2} />
              {categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-sans text-muted">
              <Calendar size={12} strokeWidth={1.75} />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
          </div>

          {/* Title */}
          <h1 className="font-playfair font-bold text-navy-DEFAULT text-3xl lg:text-[2.5rem] leading-tight mb-4">
            {post.title}
          </h1>

          {/* Description */}
          <p className="font-sans text-muted text-lg leading-relaxed mb-10 pb-10 border-b border-border">
            {post.description}
          </p>

          {/* Content */}
          <div
            className="prose-nrc"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Bottom nav */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href={categoryHref}
              className="inline-flex items-center gap-2 text-sm font-medium font-sans text-accent-DEFAULT hover:text-accent-dark transition-colors duration-200 group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-0.5 transition-transform duration-200"
              />
              More in {categoryLabel}
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </>
  );
}

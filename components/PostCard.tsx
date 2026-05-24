import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { ArrowRight } from "lucide-react";

const categoryLabels: Record<string, string> = {
  "technical-analysis": "Technical Analysis",
  "equity-research": "Equity Research",
  "ca-final-prep": "CA Final Prep",
  "track-my-trades": "Track My Trades",
};

const categoryColors: Record<string, string> = {
  "technical-analysis": "bg-blue-50 text-blue-700",
  "equity-research": "bg-indigo-50 text-indigo-700",
  "ca-final-prep": "bg-violet-50 text-violet-700",
  "track-my-trades": "bg-sky-50 text-sky-700",
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

interface PostCardProps {
  post: PostMeta;
  showCategory?: boolean;
}

export default function PostCard({ post, showCategory = true }: PostCardProps) {
  const href = `/${post.category}/${post.slug}`;
  const categoryLabel = categoryLabels[post.category] ?? post.category;
  const categoryColor =
    categoryColors[post.category] ?? "bg-gray-50 text-gray-700";

  return (
    <Link href={href} className="group block h-full">
      <article
        className="h-full bg-white border border-border rounded-xl p-6
          shadow-card hover:shadow-card-hover hover:-translate-y-1
          transition-all duration-300 ease-out"
      >
        {showCategory && (
          <span
            className={`inline-block text-[11px] font-sans font-semibold uppercase tracking-widest px-2.5 py-1 rounded-md mb-4 ${categoryColor}`}
          >
            {categoryLabel}
          </span>
        )}

        <h3 className="font-playfair font-semibold text-navy-DEFAULT text-lg leading-snug mb-2.5 group-hover:text-accent-DEFAULT transition-colors duration-200">
          {post.title}
        </h3>

        <p className="font-sans text-muted text-sm leading-relaxed mb-4 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <time className="font-sans text-xs text-muted/70" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="text-accent-DEFAULT flex items-center gap-1 text-xs font-medium font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Read more
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </span>
        </div>
      </article>
    </Link>
  );
}

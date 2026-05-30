import Link from "next/link";
import { Mail, Trophy, Clock, LineChart, BarChart3 } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

// ── Category display labels ──────────────────────────────────────────────────
const categoryLabel: Record<string, string> = {
  "technical-analysis": "TECHNICAL ANALYSIS",
  "equity-research":    "EQUITY RESEARCH",
  "ca-final-prep":      "CA FINAL PREP",
  "track-my-trades":    "TRADING JOURNAL",
};

// ── Decorative mini-chart thumbnail per category ─────────────────────────────
function InsightVisual({ category }: { category: string }) {
  if (category === "equity-research") {
    // Building / fundamentals feel
    return (
      <div className="h-24 w-28 shrink-0 rounded-lg bg-gradient-to-br from-slate-200 to-blue-200 shadow-inner" />
    );
  }

  const isTrades = category === "track-my-trades";

  return (
    <svg
      viewBox="0 0 120 80"
      className="h-24 w-28 shrink-0 rounded-lg bg-slate-50"
      aria-hidden="true"
    >
      {/* Upward trend line */}
      <path
        d="M8 62 L25 55 L40 60 L56 35 L72 42 L88 22 L112 12"
        fill="none"
        stroke="#155EEF"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Bar overlay for trade journals */}
      {isTrades &&
        [20, 38, 56, 74, 92].map((x, i) => (
          <rect
            key={x}
            x={x}
            y={55 - i * 8}
            width="10"
            height={18 + i * 8}
            fill="#14B8A6"
            opacity="0.45"
          />
        ))}
    </svg>
  );
}

// ── Performance snapshot ─────────────────────────────────────────────────────
const performanceStats = [
  { label: "Total Trades",  value: "18",      icon: Trophy,   bg: "bg-purple-50", text: "text-purple-600" },
  { label: "Win Rate",      value: "61.11%",  icon: Clock,    bg: "bg-green-50",  text: "text-green-600"  },
  { label: "Profit Factor", value: "2.18",    icon: LineChart, bg: "bg-blue-50",  text: "text-blue-600"   },
  { label: "Net P&L",       value: "+12.45%", icon: BarChart3, bg: "bg-amber-50", text: "text-green-600"  },
] as const;

// ── Helper ───────────────────────────────────────────────────────────────────
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year:  "numeric",
    month: "short",
    day:   "numeric",
  });
}

// ── Component ────────────────────────────────────────────────────────────────
interface LatestInsightsProps {
  posts: PostMeta[];
}

export default function LatestInsights({ posts }: LatestInsightsProps) {
  // Show the three most recent posts
  const recent = posts.slice(0, 3);

  return (
    <section
      id="insights"
      className="grid gap-5 px-5 py-5 lg:px-10 xl:grid-cols-[1.4fr_0.6fr]"
    >
      {/* ── Left panel: latest posts + newsletter ── */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-blue-950/5">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-semibold text-slate-950">
            Latest Insights
          </h3>
          <Link
            href="/technical-analysis"
            className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
          >
            View all
          </Link>
        </div>

        {/* Post cards */}
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {recent.map((post) => (
            <Link
              key={`${post.category}-${post.slug}`}
              href={`/${post.category}/${post.slug}`}
              className="group"
            >
              <article className="rounded-xl border border-slate-100 p-4 transition hover:border-blue-200 hover:shadow-lg h-full">
                <div className="flex gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Category tag */}
                    <span className="inline-block rounded bg-blue-50 px-2 py-1 text-[10px] font-bold tracking-wide text-blue-700">
                      {categoryLabel[post.category] ?? post.category.toUpperCase()}
                    </span>

                    {/* Title */}
                    <h4 className="mt-4 text-sm font-semibold leading-5 text-slate-950 group-hover:text-blue-700 transition-colors line-clamp-3">
                      {post.title}
                    </h4>

                    {/* Date */}
                    <p className="mt-5 text-xs text-slate-500">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </p>
                  </div>

                  {/* Mini chart thumbnail */}
                  <InsightVisual category={post.category} />
                </div>
              </article>
            </Link>
          ))}

          {/* Empty state */}
          {recent.length === 0 && (
            <p className="col-span-3 text-sm text-slate-500 py-6 text-center">
              No posts yet — check back soon.
            </p>
          )}
        </div>

        {/* ── Newsletter subscribe ── */}
        <div
          id="contact"
          className="mt-6 flex flex-col gap-5 rounded-xl border border-slate-100 bg-slate-50 p-5 md:flex-row md:items-center"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
            <Mail size={26} />
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-slate-950">
              Stay updated with the latest insights and resources.
            </h4>
            <p className="mt-1 text-sm text-slate-500">No spam. Only valuable updates.</p>
          </div>

          <input
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400 md:w-72 transition-colors"
            placeholder="Enter your email"
            type="email"
          />

          <button className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>

      {/* ── Right panel: Performance Snapshot ── */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-blue-950/5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-950">
            Performance Snapshot
          </h3>
          <select className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-500 outline-none cursor-pointer hover:border-blue-300 transition-colors">
            <option>This Month</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          {performanceStats.map(({ label, value, icon: Icon, bg, text }) => (
            <div key={label} className="rounded-xl border border-slate-100 p-4">
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${bg} ${text}`}
              >
                <Icon size={18} />
              </div>
              <p className="text-xs text-slate-500">{label}</p>
              <p
                className={`mt-1 text-xl font-semibold ${
                  label === "Net P&L" ? "text-green-600" : "text-slate-950"
                }`}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Performance is personal and not a recommendation to buy/sell.
        </p>
      </div>
    </section>
  );
}

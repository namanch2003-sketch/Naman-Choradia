"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";

const categories = ["All", "Markets", "CA Final", "Technology", "Life", "Research", "Trading"];

const articles = [
  {
    id: 1,
    category: "Markets",
    title: "The Psychology of Drawdowns",
    excerpt: "Why the majority struggle in drawdowns and how the best protect their edge. The mental game of staying rational when your account is bleeding.",
    readTime: "7 min",
    date: "14 May 2024",
    featured: true,
    href: "/journal/psychology-of-drawdowns",
    imageGradient: "linear-gradient(160deg, #0d1117 0%, #1a2640 40%, #2d3f60 100%)",
  },
  {
    id: 2,
    category: "Research",
    title: "Sector Rotation Framework: Following the Money",
    excerpt: "A data-driven framework to identify leadership shifts across sectors. How money flows through the economy and how to position ahead of it.",
    readTime: "10 min",
    date: "12 May 2024",
    featured: true,
    href: "/journal/sector-rotation",
    imageGradient: "linear-gradient(160deg, #1a1a2e 0%, #2d2d4a 40%, #3d3d5c 100%)",
  },
  {
    id: 3,
    category: "Trading",
    title: "Lessons from 100 Trades",
    excerpt: "Key patterns, mistakes, and mindsets that shaped my trading journey. Every loss taught something a win never could.",
    readTime: "12 min",
    date: "10 May 2024",
    featured: true,
    href: "/journal/100-trades",
    imageGradient: "linear-gradient(160deg, #0a1628 0%, #1a3050 40%, #2a4870 100%)",
  },
  {
    id: 4,
    category: "CA Final",
    title: "My Framework for Tackling Audit Standards",
    excerpt: "Standards on Auditing can be overwhelming. Here's the mental map I use to understand, retain, and apply them.",
    readTime: "8 min",
    date: "5 May 2024",
    featured: false,
    href: "/journal/audit-framework",
    imageGradient: "linear-gradient(160deg, #1a2e1a 0%, #2d4a2d 40%, #3d5c3d 100%)",
  },
  {
    id: 5,
    category: "Technology",
    title: "AI Tools That Actually Changed My Workflow",
    excerpt: "Practical AI tools that have meaningfully improved how I research, study, and build â€” not hype, just real productivity gains.",
    readTime: "5 min",
    date: "1 May 2024",
    featured: false,
    href: "/journal/ai-tools",
    imageGradient: "linear-gradient(160deg, #1a1428 0%, #2a2040 40%, #3a3050 100%)",
  },
  {
    id: 6,
    category: "Life",
    title: "The Compounding Philosophy: Beyond Money",
    excerpt: "Why I believe compounding applies to every area of life â€” skills, relationships, knowledge, habits. The math of steady improvement.",
    readTime: "6 min",
    date: "28 Apr 2024",
    featured: false,
    href: "/journal/compounding-philosophy",
    imageGradient: "linear-gradient(160deg, #281a0a 0%, #402a14 40%, #503a20 100%)",
  },
  {
    id: 7,
    category: "Markets",
    title: "Reading Market Breadth: The Internals That Matter",
    excerpt: "Advance-decline ratios, new highs/lows, percent above MA â€” the market internals that give you a real picture of health.",
    readTime: "9 min",
    date: "22 Apr 2024",
    featured: false,
    href: "/journal/market-breadth",
    imageGradient: "linear-gradient(160deg, #0d0a1a 0%, #1a1a30 40%, #2a2a45 100%)",
  },
  {
    id: 8,
    category: "CA Final",
    title: "Financial Reporting: The Ind AS That Trip Everyone Up",
    excerpt: "Ind AS 109, 115, and 116 â€” the three standards that cause maximum confusion in CA Final exams. Simplified.",
    readTime: "11 min",
    date: "18 Apr 2024",
    featured: false,
    href: "/journal/ind-as-complex",
    imageGradient: "linear-gradient(160deg, #0a1420 0%, #14263a 40%, #1e3850 100%)",
  },
];

export default function JournalContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = filtered.filter((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <div className="pt-24 bg-parchment min-h-screen">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label text-gold mb-3 block">Writing</span>
            <h1 className="font-cormorant font-300 text-display text-navy leading-none">
              The Journal
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-warm-white sticky top-[70px] z-30">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-[11px] font-500 tracking-[0.1em] uppercase px-3.5 py-1.5 border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-navy text-parchment border-navy"
                    : "bg-transparent text-navy/50 border-border hover:border-navy/30 hover:text-navy/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative shrink-0">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border border-border pl-8 pr-4 py-2 text-[12px] font-inter text-navy placeholder:text-muted/40 focus:outline-none focus:border-gold/50 transition-colors w-[200px]"
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-10">
        {/* Featured articles */}
        {featured.length > 0 && (
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {featured.map((article, i) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    layout
                    className="group"
                  >
                    <Link href={article.href} className="block">
                      <div className="relative overflow-hidden mb-4" style={{ aspectRatio: "16/9" }}>
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: article.imageGradient }} />
                        <div className="absolute inset-0 opacity-20">
                          <svg viewBox="0 0 400 225" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                            <line x1="200" y1="0" x2="200" y2="225" stroke="white" strokeWidth="0.4" opacity="0.4" />
                            <line x1="0" y1="112" x2="400" y2="112" stroke="white" strokeWidth="0.4" opacity="0.4" />
                            <circle cx="200" cy="112" r="50" fill="none" stroke="white" strokeWidth="0.4" opacity="0.3" />
                          </svg>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="font-inter text-[10px] font-600 tracking-wider uppercase px-2.5 py-1 text-gold bg-black/40 backdrop-blur-sm">{article.category}</span>
                        </div>
                      </div>
                      <h3 className="font-cormorant font-500 text-[20px] text-navy leading-tight mb-2 group-hover:text-navy-light transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-inter text-[12px] text-muted leading-relaxed mb-3">{article.excerpt}</p>
                      <div className="flex items-center gap-3 text-muted/40">
                        <Clock size={10} />
                        <span className="font-inter text-[11px]">{article.readTime}</span>
                        <span>Â·</span>
                        <span className="font-inter text-[11px]">{article.date}</span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* Divider */}
        {featured.length > 0 && rest.length > 0 && (
          <div className="border-t border-border mb-10" />
        )}

        {/* All articles list */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <AnimatePresence mode="popLayout">
              {rest.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  layout
                  className="bg-parchment"
                >
                  <Link href={article.href} className="block p-6 lg:p-7 group hover:bg-warm-white transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="section-label text-gold">{article.category}</span>
                    </div>
                    <h3 className="font-cormorant font-500 text-[18px] text-navy leading-tight mb-2 group-hover:text-navy-light transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-inter text-[12px] text-muted leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted/40">
                        <Clock size={10} />
                        <span className="font-inter text-[11px]">{article.readTime} Â· {article.date}</span>
                      </div>
                      <ArrowRight size={11} className="text-navy/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-cormorant font-400 text-[22px] text-navy/40">No articles found</p>
          </div>
        )}
      </div>
    </div>
  );
}


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["All", "CA Final", "Markets", "Technology", "Life", "Research"];

const articles = [
  {
    category: "Markets",
    title: "The Psychology of Drawdowns",
    excerpt: "Why the majority struggle in drawdowns and how the best protect their edge.",
    readTime: "7 min",
    date: "14 May 2024",
    href: "/journal/psychology-of-drawdowns",
  },
  {
    category: "Research",
    title: "Sector Rotation Framework",
    excerpt: "A data-driven approach to identify sector leadership shifts.",
    readTime: "10 min",
    date: "12 May 2024",
    href: "/journal/sector-rotation",
  },
  {
    category: "Markets",
    title: "Lessons from 100 Trades",
    excerpt: "Key patterns, mistakes, and mindsets that shaped my trading journey.",
    readTime: "12 min",
    date: "10 May 2024",
    href: "/journal/100-trades",
  },
  {
    category: "CA Final",
    title: "How I'm Approaching Audit",
    excerpt: "A structured framework for mastering Standards on Auditing for CA Final.",
    readTime: "8 min",
    date: "5 May 2024",
    href: "/journal/audit-approach",
  },
  {
    category: "Technology",
    title: "AI Tools I Use Daily",
    excerpt: "Practical AI tools that have meaningfully improved my research and study workflow.",
    readTime: "5 min",
    date: "1 May 2024",
    href: "/journal/ai-tools",
  },
  {
    category: "Life",
    title: "The Compounding Philosophy",
    excerpt: "Why I believe compounding applies to every area of life, not just money.",
    readTime: "6 min",
    date: "28 Apr 2024",
    href: "/journal/compounding-philosophy",
  },
];

export default function JournalSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section className="bg-parchment py-16 lg:py-24 border-b border-border">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <span className="section-label">Writing</span>
            <h2 className="font-cormorant font-300 text-display text-navy mt-2 leading-none">
              From the Journal
            </h2>
          </div>
          <Link
            href="/journal"
            className="hidden md:flex items-center gap-2 font-inter text-[12px] text-navy/50 hover:text-navy tracking-[0.08em] uppercase transition-colors group hover-underline"
          >
            All articles
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-inter text-[11px] font-500 tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-navy text-parchment border-navy"
                  : "bg-transparent text-navy/50 border-border hover:border-navy/30 hover:text-navy/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          <AnimatePresence mode="popLayout">
            {filtered.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                layout
                className="bg-parchment"
              >
                <Link href={article.href} className="block p-6 lg:p-7 group hover:bg-warm-white transition-colors duration-300 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="section-label text-gold">{article.category}</span>
                  </div>
                  <h3 className="font-cormorant font-500 text-[19px] text-navy leading-tight mb-3 group-hover:text-navy-light transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-inter text-[12px] text-muted leading-relaxed mb-5">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-inter text-[11px] text-muted/50">
                      {article.readTime} read · {article.date}
                    </span>
                    <ArrowRight size={12} className="text-navy/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

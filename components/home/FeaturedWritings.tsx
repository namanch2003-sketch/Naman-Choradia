"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "MARKETS",
    title: "The Psychology of Drawdowns",
    description: "Why the majority struggle in drawdowns and how the best protect their edge.",
    readTime: "7 min read",
    date: "14 May 2024",
    href: "/journal/psychology-of-drawdowns",
    imageGradient: "linear-gradient(160deg, #0d1117 0%, #1a2640 40%, #2d3f60 70%, #1a2640 100%)",
    accentColor: "#C6A15B",
  },
  {
    category: "RESEARCH",
    title: "Sector Rotation Framework",
    description: "A data-driven framework to identify leadership shifts across sectors.",
    readTime: "10 min read",
    date: "12 May 2024",
    href: "/research/sector-rotation-framework",
    imageGradient: "linear-gradient(160deg, #1a1a2e 0%, #2d2d4a 40%, #3d3d5c 60%, #2a2a3e 100%)",
    accentColor: "#8B9DC3",
  },
  {
    category: "TRADING",
    title: "Lessons from 100 Trades",
    description: "Key patterns, mistakes, and mindsets that shaped my trading journey.",
    readTime: "12 min read",
    date: "10 May 2024",
    href: "/journal/lessons-from-100-trades",
    imageGradient: "linear-gradient(160deg, #0a1628 0%, #1a3050 40%, #2a4870 60%, #1a3050 100%)",
    accentColor: "#4A7FA8",
  },
];

function ArticleCard({ article, index }: { article: (typeof articles)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={article.href} className="block">
        {/* Image area */}
        <div
          className="relative overflow-hidden mb-5"
          style={{ aspectRatio: "16/9" }}
        >
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ background: article.imageGradient }}
          />
          {/* Architectural grid overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
              {/* Architectural lines */}
              <line x1="200" y1="0" x2="200" y2="225" stroke="white" strokeWidth="0.5" opacity="0.4" />
              <line x1="0" y1="112" x2="400" y2="112" stroke="white" strokeWidth="0.5" opacity="0.4" />
              <rect x="100" y="40" width="200" height="145" fill="none" stroke="white" strokeWidth="0.4" opacity="0.3" />
              <rect x="140" y="70" width="120" height="85" fill="none" stroke="white" strokeWidth="0.3" opacity="0.25" />
              {/* Diagonal accent */}
              <line x1="100" y1="40" x2="300" y2="185" stroke="white" strokeWidth="0.3" opacity="0.2" />
              <circle cx="200" cy="112" r="40" fill="none" stroke="white" strokeWidth="0.4" opacity="0.25" />
            </svg>
          </div>
          {/* Category tag */}
          <div className="absolute top-4 left-4">
            <span
              className="font-inter text-[10px] font-600 tracking-[0.15em] uppercase px-2.5 py-1"
              style={{
                background: "rgba(0,0,0,0.4)",
                color: article.accentColor,
                backdropFilter: "blur(8px)",
              }}
            >
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-1">
          <h3 className="font-cormorant font-500 text-[22px] lg:text-[24px] text-navy leading-tight mb-2.5 group-hover:text-navy-light transition-colors">
            {article.title}
          </h3>
          <p className="font-inter text-[13px] text-muted leading-relaxed mb-4">
            {article.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-inter text-[11px] text-muted/60">
              {article.readTime} · {article.date}
            </span>
            <div className="flex items-center gap-1.5 text-gold text-[12px] font-inter font-500 group-hover:gap-2.5 transition-all duration-300">
              Read <ArrowRight size={11} />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function FeaturedWritings() {
  return (
    <section className="bg-parchment py-16 lg:py-24 border-b border-border">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-10 lg:mb-14"
        >
          <div>
            <span className="section-label">Featured Writing</span>
            <h2 className="font-cormorant font-300 text-display text-navy mt-2 leading-none">
              Selected Articles
            </h2>
          </div>
          <Link
            href="/journal"
            className="hidden md:flex items-center gap-2 font-inter text-[12px] text-navy/50 hover:text-navy tracking-[0.08em] uppercase transition-colors group hover-underline"
          >
            View all articles
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, i) => (
            <ArticleCard key={article.title} article={article} index={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center md:hidden"
        >
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 font-inter text-[12px] text-navy/50 hover:text-navy tracking-[0.08em] uppercase border border-border px-6 py-3"
          >
            View all articles <ArrowRight size={12} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

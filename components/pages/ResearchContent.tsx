"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ArrowRight, Clock, Bookmark, Tag } from "lucide-react";

const categories = ["All", "Technical Analysis", "Fundamental", "Sector Reports", "Macro", "IPO Analysis"];

const articles = [
  {
    id: 1,
    category: "Technical Analysis",
    title: "Nifty Technical Outlook â€” May 2024",
    excerpt: "Comprehensive analysis of Nifty 50 structure, key levels, and probable scenarios for the month ahead. Multiple timeframe confluence analysis.",
    readTime: "12 min",
    date: "15 May 2024",
    tags: ["Nifty", "Index", "Weekly"],
    href: "/research/nifty-may-2024",
  },
  {
    id: 2,
    category: "Sector Reports",
    title: "Banking Sector Deep Dive: Stress, Credit, and Opportunity",
    excerpt: "Analyzing credit growth trends, NPA cycles, and identifying structural opportunities within Indian banking for long-term investors.",
    readTime: "18 min",
    date: "10 May 2024",
    tags: ["Banking", "BFSI", "Credit"],
    href: "/research/banking-sector",
  },
  {
    id: 3,
    category: "Sector Rotation Framework",
    title: "Sector Rotation Framework: Following the Money",
    excerpt: "A data-driven framework for identifying which sectors lead in each phase of the economic cycle.",
    readTime: "10 min",
    date: "5 May 2024",
    tags: ["Framework", "Sector", "Macro"],
    href: "/research/sector-rotation",
  },
  {
    id: 4,
    category: "Fundamental",
    title: "How to Read an Annual Report: A Practitioner's Guide",
    excerpt: "Beyond the headline numbers â€” the subtle signals, accounting red flags, and management quality indicators most analysts miss.",
    readTime: "20 min",
    date: "28 Apr 2024",
    tags: ["Fundamentals", "Annual Report", "Framework"],
    href: "/research/annual-report-guide",
  },
  {
    id: 5,
    category: "Macro",
    title: "India's Infrastructure Supercycle: 5-Year Thesis",
    excerpt: "The government's capital expenditure push, PLI schemes, and the multi-year opportunity in infrastructure-adjacent sectors.",
    readTime: "15 min",
    date: "20 Apr 2024",
    tags: ["India", "Infrastructure", "Macro"],
    href: "/research/india-infrastructure",
  },
  {
    id: 6,
    category: "Technical Analysis",
    title: "The Accumulation Phase: Identifying Smart Money Entry",
    excerpt: "Using volume-price analysis, Wyckoff theory, and market structure to identify institutional accumulation zones.",
    readTime: "14 min",
    date: "15 Apr 2024",
    tags: ["Technical", "Volume", "Wyckoff"],
    href: "/research/accumulation-phase",
  },
];

export default function ResearchContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 bg-parchment min-h-screen">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <span className="section-label text-gold mb-3 block">Research Library</span>
            <h1 className="font-cormorant font-300 text-display text-navy leading-none mb-4">
              Market Research
            </h1>
            <p className="font-inter text-[14px] text-muted max-w-[500px]">
              Institutional-quality analysis on Indian equities, sectors, and macroeconomic themes. Research-driven. Process-oriented.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="border-b border-border bg-warm-white sticky top-[70px] z-30">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-[11px] font-500 tracking-[0.1em] uppercase px-3.5 py-1.5 border transition-all duration-200 whitespace-nowrap ${
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
              placeholder="Search research..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border border-border pl-8 pr-4 py-2 text-[12px] font-inter text-navy placeholder:text-muted/40 focus:outline-none focus:border-gold/50 transition-colors w-[200px]"
            />
          </div>
        </div>
      </section>

      {/* Articles */}
      <section>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            <AnimatePresence mode="popLayout">
              {filtered.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  layout
                  className="bg-parchment"
                >
                  <Link href={article.href} className="block p-7 lg:p-8 group hover:bg-warm-white transition-colors duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="section-label text-gold">{article.category}</span>
                      <button className="text-navy/20 hover:text-gold transition-colors" onClick={(e) => e.preventDefault()}>
                        <Bookmark size={13} />
                      </button>
                    </div>
                    <h3 className="font-cormorant font-500 text-[20px] lg:text-[22px] text-navy leading-tight mb-3 group-hover:text-navy-light transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-inter text-[12px] text-muted leading-relaxed mb-5">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-muted/50">
                          <Clock size={11} />
                          <span className="font-inter text-[11px]">{article.readTime}</span>
                        </div>
                        <span className="text-border">Â·</span>
                        <span className="font-inter text-[11px] text-muted/50">{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-navy/20 group-hover:text-gold transition-colors duration-300">
                        <span className="font-inter text-[11px] tracking-[0.08em] uppercase">Read</span>
                        <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1 font-inter text-[10px] text-muted/50 bg-border/50 px-2 py-0.5">
                          <Tag size={8} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-cormorant font-400 text-[22px] text-navy/40">No research found</p>
              <p className="font-inter text-[13px] text-muted mt-2">Try a different category or search term</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


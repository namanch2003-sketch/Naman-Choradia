"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, TrendingUp, BarChart2, BookOpen, Code2, User } from "lucide-react";

const rows = [
  {
    icon: GraduationCap,
    title: "CA Final Vault",
    description: "Structured study notes, frameworks, and exam-oriented insights for CA Final.",
    latestLabel: "LATEST",
    latest: "Audit Sampling — Concepts, Types & Practical Approach",
    statusLabel: "PROGRESS",
    status: "72%",
    statusType: "progress" as const,
    href: "/ca-final",
  },
  {
    icon: TrendingUp,
    title: "Technical Research",
    description: "Market analysis, sector insights, and actionable stock ideas backed by data.",
    latestLabel: "LATEST ANALYSIS",
    latest: "Nifty Technical Outlook — May 2024",
    statusLabel: "MARKET VIEW",
    status: "Neutral to Positive",
    statusType: "text" as const,
    href: "/research",
  },
  {
    icon: BarChart2,
    title: "Live Trade Journal",
    description: "Real trades, real reasoning, real learnings. Transparency is the edge.",
    latestLabel: "LATEST TRADE",
    latest: "TCS — Swing Trade · 15 May 2024",
    statusLabel: "PORTFOLIO NAV",
    status: "₹12,45,678",
    statusSub: "+8.76% (All Time)",
    statusType: "currency" as const,
    href: "/markets",
  },
  {
    icon: BookOpen,
    title: "Weekly Insights",
    description: "Thoughts on markets, psychology, productivity, and everything in between.",
    latestLabel: "LATEST ARTICLE",
    latest: "The Hidden Edge in Compounders",
    statusLabel: "READING TIME",
    status: "6 min read",
    statusType: "text" as const,
    href: "/journal",
  },
  {
    icon: Code2,
    title: "AI Lab",
    description: "Building tools that solve real problems for traders and investors.",
    latestLabel: "FEATURED TOOL",
    latest: "Research Assistant",
    latestBadge: "Coming Soon",
    statusLabel: "TOOLS IN BUILD",
    status: "3",
    statusType: "number" as const,
    href: "/ai-lab",
  },
  {
    icon: User,
    title: "About & Contact",
    description: "My journey, milestones, and ways to connect.",
    latestLabel: "CURRENT FOCUS",
    latest: "CA Final Nov 2026",
    statusLabel: "YEARS LEARNING",
    status: "10+",
    statusType: "number" as const,
    href: "/about",
    ctaLabel: "Connect",
  },
];

function DashboardRow({
  row,
  index,
}: {
  row: (typeof rows)[0];
  index: number;
}) {
  const Icon = row.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={row.href} className="dashboard-row grid grid-cols-[44px_1fr_auto] lg:grid-cols-[44px_1.5fr_2fr_1fr_auto] gap-4 lg:gap-8 items-center py-5 lg:py-6 px-4 lg:px-6 group block">
        {/* Icon */}
        <div className="w-10 h-10 border border-border flex items-center justify-center text-navy/40 group-hover:border-gold/50 group-hover:text-gold transition-all duration-300">
          <Icon size={16} strokeWidth={1.5} />
        </div>

        {/* Title & Desc */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-cormorant font-500 text-[18px] text-navy group-hover:text-navy-light transition-colors leading-tight mb-0.5">
            {row.title}
          </h3>
          <p className="font-inter text-[12px] text-muted leading-relaxed hidden lg:block">
            {row.description}
          </p>
        </div>

        {/* Latest */}
        <div className="hidden lg:block">
          <span className="section-label text-muted/60 mb-1.5 block">{row.latestLabel}</span>
          <p className="font-inter text-[13px] text-navy font-500 leading-snug">
            {row.latest}
          </p>
          {row.latestBadge && (
            <span className="inline-block mt-1.5 bg-gold/10 text-gold text-[10px] font-inter font-500 tracking-wider uppercase px-2 py-0.5">
              {row.latestBadge}
            </span>
          )}
        </div>

        {/* Status */}
        <div className="hidden lg:block">
          <span className="section-label text-muted/60 mb-1.5 block">{row.statusLabel}</span>
          {row.statusType === "progress" ? (
            <>
              <p className="font-cormorant font-500 text-[22px] text-navy leading-none mb-1">{row.status}</p>
              <div className="w-full h-px bg-border mt-1">
                <div className="h-px bg-gold" style={{ width: row.status }} />
              </div>
            </>
          ) : row.statusType === "currency" ? (
            <>
              <p className="font-cormorant font-500 text-[20px] text-navy leading-none">{row.status}</p>
              {row.statusSub && (
                <p className="font-inter text-[11px] text-emerald-600 font-500 mt-0.5">{row.statusSub}</p>
              )}
            </>
          ) : row.statusType === "number" ? (
            <p className="font-cormorant font-300 text-[36px] text-navy leading-none">{row.status}</p>
          ) : (
            <p className="font-inter text-[13px] text-navy font-400">{row.status}</p>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-navy/30 group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
          <span className="font-inter text-[12px] tracking-[0.08em] uppercase">
            {row.ctaLabel ?? "Explore"}
          </span>
          <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}

export default function DashboardSection() {
  return (
    <section className="bg-parchment border-b border-border">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pt-16 lg:pt-20 pb-8 border-b border-border"
        >
          <span className="section-label text-gold">Overview</span>
          <h2 className="font-cormorant font-300 text-display text-navy mt-2 leading-none">
            What I&apos;m Building
          </h2>
        </motion.div>

        {/* Rows */}
        <div>
          {rows.map((row, i) => (
            <DashboardRow key={row.title} row={row} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

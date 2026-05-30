"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Search, Bot, Workflow, BarChart3, Brain } from "lucide-react";

const tools = [
  {
    icon: Search,
    title: "Research Assistant",
    description: "AI-powered tool to scan, summarize, and surface key insights from financial documents.",
    status: "Coming Soon",
    statusColor: "text-gold",
    statusBg: "bg-gold/10",
    href: "/ai-lab",
  },
  {
    icon: BarChart3,
    title: "Technical Scanner",
    description: "Scan 500+ stocks across multiple timeframes for technical setups in real-time.",
    status: "In Build",
    statusColor: "text-blue-500",
    statusBg: "bg-blue-500/10",
    href: "/ai-lab",
  },
  {
    icon: Brain,
    title: "CA Final Flashcards",
    description: "Spaced repetition flashcard system built specifically for CA Final exam preparation.",
    status: "Beta",
    statusColor: "text-emerald-600",
    statusBg: "bg-emerald-500/10",
    href: "/ai-lab",
  },
  {
    icon: Workflow,
    title: "Trade Analyzer",
    description: "Automated post-trade analysis with pattern recognition and risk attribution.",
    status: "Planned",
    statusColor: "text-muted",
    statusBg: "bg-muted/10",
    href: "/ai-lab",
  },
  {
    icon: Bot,
    title: "Market Summarizer",
    description: "Daily market digest: top movers, FII data, sector themes — in 60 seconds.",
    status: "Coming Soon",
    statusColor: "text-gold",
    statusBg: "bg-gold/10",
    href: "/ai-lab",
  },
  {
    icon: Zap,
    title: "Automation Hub",
    description: "Personal productivity automations for research, journaling, and learning workflows.",
    status: "In Build",
    statusColor: "text-blue-500",
    statusBg: "bg-blue-500/10",
    href: "/ai-lab",
  },
];

export default function AILabSection() {
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
            <span className="section-label">AI Lab</span>
            <h2 className="font-cormorant font-300 text-display text-navy mt-2 leading-none">
              Tools I&apos;m Building
            </h2>
            <p className="font-inter text-[14px] text-muted mt-3 max-w-[400px]">
              Building tools that solve real problems for traders, investors, and researchers.
            </p>
          </div>
          <Link
            href="/ai-lab"
            className="hidden md:flex items-center gap-2 font-inter text-[12px] text-navy/50 hover:text-navy tracking-[0.08em] uppercase transition-colors group hover-underline"
          >
            Explore AI Lab
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-parchment"
              >
                <Link href={tool.href} className="block p-6 lg:p-8 group hover:bg-warm-white transition-colors duration-300">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 border border-border flex items-center justify-center text-navy/40 group-hover:border-gold/50 group-hover:text-gold transition-all duration-300">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <span className={`${tool.statusColor} ${tool.statusBg} font-inter text-[10px] font-600 tracking-wider uppercase px-2.5 py-1`}>
                      {tool.status}
                    </span>
                  </div>
                  <h3 className="font-cormorant font-500 text-[19px] text-navy mb-2 group-hover:text-navy-light transition-colors">
                    {tool.title}
                  </h3>
                  <p className="font-inter text-[12px] text-muted leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-5 text-navy/30 group-hover:text-gold transition-colors duration-300">
                    <span className="font-inter text-[11px] tracking-[0.1em] uppercase">Learn more</span>
                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Bot, Workflow, BarChart3, Brain, Code2, Cpu, Database } from "lucide-react";

const featuredProject = {
  title: "Stock Screener AI",
  description:
    "A full-stack screener that combines technical setups (breakouts, RSI divergence, volume surges) with fundamental filters (P/E, ROCE, promoter holding) across 1,500+ NSE/BSE listed companies. Built for Indian equity research.",
  status: "In Development",
  tech: ["Next.js", "TypeScript", "Python", "NSE API", "TailwindCSS"],
  features: [
    "Technical + fundamental dual-filter engine",
    "Real-time data from NSE & BSE feeds",
    "Custom screener presets (momentum, value, quality)",
    "Watchlist tracking with price alerts",
    "Export to CSV / Notion database",
  ],
};

const experiments = [
  {
    icon: BarChart3,
    title: "Stock Screener AI",
    description:
      "Technical + fundamental screener for 1,500+ Indian equities. Identifies breakouts, divergences, and value opportunities in real-time.",
    status: "In Development",
    statusColor: "text-blue-500",
    statusBg: "bg-blue-500/10",
    tech: ["Python", "NSE API", "Next.js"],
  },
  {
    icon: Brain,
    title: "CA Exam Planner",
    description:
      "Adaptive study schedule generator for CA Final candidates. Allocates revision time intelligently based on subject difficulty and exam proximity.",
    status: "Coming Soon",
    statusColor: "text-gold",
    statusBg: "bg-gold/10",
    tech: ["GPT-4", "React", "Notion API"],
  },
  {
    icon: Bot,
    title: "Trade Journal GPT",
    description:
      "Conversational AI that analyses your trade journal entries, identifies recurring patterns, and surfaces behavioural biases.",
    status: "Coming Soon",
    statusColor: "text-gold",
    statusBg: "bg-gold/10",
    tech: ["OpenAI API", "Next.js", "Supabase"],
  },
  {
    icon: Workflow,
    title: "Earnings Summariser",
    description:
      "Auto-summarises quarterly earnings transcripts and results PDFs — key numbers, management commentary, and guidance in 60 seconds.",
    status: "Concept",
    statusColor: "text-muted",
    statusBg: "bg-muted/10",
    tech: ["Python", "LangChain", "PDF parser"],
  },
  {
    icon: Zap,
    title: "Risk Calculator",
    description:
      "Position sizing tool based on account size, stop-loss distance, and risk percentage. Works with Indian equity, F&O, and currency segments.",
    status: "Coming Soon",
    statusColor: "text-gold",
    statusBg: "bg-gold/10",
    tech: ["TypeScript", "React", "TailwindCSS"],
  },
  {
    icon: Database,
    title: "Personal Knowledge Base",
    description:
      "A structured second brain linking CA notes, market research, and investment thesis — with AI-powered semantic retrieval.",
    status: "Ongoing",
    statusColor: "text-emerald-600",
    statusBg: "bg-emerald-500/10",
    tech: ["Obsidian", "GPT-4", "Graph DB"],
  },
];

const techStack = [
  { icon: Code2, name: "Languages", items: ["Python", "TypeScript", "SQL"] },
  { icon: Cpu, name: "AI / ML", items: ["OpenAI API", "LangChain", "Hugging Face"] },
  { icon: BarChart3, name: "Finance", items: ["TA-Lib", "NSE/BSE API", "Pandas"] },
  { icon: Workflow, name: "Infrastructure", items: ["Next.js", "Vercel", "Supabase"] },
];

const stackPills = [
  "Next.js",
  "TypeScript",
  "Python",
  "OpenAI API",
  "Framer Motion",
  "TailwindCSS",
];

export default function AILabContent() {
  return (
    <div className="pt-24 bg-parchment min-h-screen">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="section-label text-gold mb-3 block">AI Lab</span>
            <h1 className="font-cormorant font-300 text-display text-navy leading-none mb-4">
              Experiments<br />& Tools
            </h1>
            <p className="font-inter text-[14px] text-muted max-w-[500px]">
              Building AI-powered tools at the intersection of finance, trading, and education. All experiments are personal projects solving real problems I face.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured project — full width navy */}
      <section className="border-b border-border bg-navy">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="section-label text-gold/80">Featured Project</span>
                <span className="font-inter text-[10px] font-500 tracking-wider uppercase text-gold bg-gold/10 px-2.5 py-1">
                  {featuredProject.status}
                </span>
              </div>
              <h2 className="font-cormorant font-300 text-headline text-parchment leading-none mb-4">
                {featuredProject.title}
              </h2>
              <p className="font-inter text-[14px] text-parchment/50 leading-relaxed mb-6">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="font-inter text-[11px] text-parchment/40 border border-parchment/10 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="https://github.com/namanch2003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold/30 text-gold font-inter text-[12px] font-500 tracking-[0.08em] uppercase px-5 py-3 hover:bg-gold/10 transition-colors group"
              >
                View on GitHub
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <ul className="space-y-3">
                {featuredProject.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-parchment/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="font-inter text-[13px]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiments grid */}
      <section className="py-12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-10"
          >
            <span className="section-label text-gold mb-3 block">All Experiments</span>
            <h2 className="font-cormorant font-300 text-headline text-navy leading-none">
              What I&apos;m Building
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experiments.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                  className="luxury-card p-6 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center text-navy/40 group-hover:border-gold/50 group-hover:text-gold transition-all duration-300">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <span
                      className={`${exp.statusColor} ${exp.statusBg} font-inter text-[10px] font-600 tracking-wider uppercase px-2.5 py-1`}
                    >
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="font-cormorant font-500 text-[18px] text-navy mb-2 group-hover:text-navy-light transition-colors">
                    {exp.title}
                  </h3>
                  <p className="font-inter text-[12px] text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-inter text-[10px] text-muted/40 bg-border/50 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-border bg-warm-white py-12">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <h2 className="font-cormorant font-300 text-headline text-navy leading-none mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {stackPills.map((pill) => (
              <span
                key={pill}
                className="font-inter text-[11px] text-navy/60 border border-border px-3 py-1"
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((stack, i) => {
              const Icon = stack.icon;
              return (
                <motion.div
                  key={stack.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, ease: "easeOut" }}
                  className="border border-border p-5 bg-parchment"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={14} strokeWidth={1.5} className="text-navy/40" />
                    <span className="section-label">{stack.name}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {stack.items.map((item) => (
                      <li key={item} className="font-inter text-[12px] text-navy/60">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Circle, BookOpen, FileText, HelpCircle, BarChart2 } from "lucide-react";

const subjects = [
  {
    code: "FR",
    name: "Financial Reporting",
    description: "Ind AS, consolidation, financial instruments, and complex accounting treatments.",
    progress: 78,
    topics: ["Ind AS 1-38", "Consolidation", "Financial Instruments", "Business Combinations", "NBFC Ind AS"],
    status: "active",
    color: "#C6A15B",
  },
  {
    code: "AFM",
    name: "Advanced Financial Management",
    description: "Corporate finance, portfolio theory, derivatives, and international finance.",
    progress: 65,
    topics: ["Capital Budgeting", "Portfolio Management", "Derivatives", "Forex", "Merger & Acquisition"],
    status: "active",
    color: "#4A7FA8",
  },
  {
    code: "AUDIT",
    name: "Advanced Auditing",
    description: "Standards on Auditing, risk-based audit, special purpose audits, and ethics.",
    progress: 72,
    topics: ["SA 200-700", "Risk Assessment", "CARO 2020", "Bank Audit", "Ethics"],
    status: "active",
    color: "#6B8E6B",
  },
  {
    code: "DT",
    name: "Direct Tax",
    description: "Income tax, international taxation, transfer pricing, and DTAA provisions.",
    progress: 55,
    topics: ["Business Income", "Capital Gains", "International Tax", "Transfer Pricing", "Assessments"],
    status: "in-progress",
    color: "#8B6B8B",
  },
  {
    code: "IDT",
    name: "Indirect Tax (GST)",
    description: "GST framework, place of supply, ITC, valuation, and compliance procedures.",
    progress: 48,
    topics: ["GST Framework", "ITC", "Place of Supply", "Valuation", "Customs"],
    status: "in-progress",
    color: "#8B7B4A",
  },
  {
    code: "IBS",
    name: "Integrated Business Solutions",
    description: "Case study based paper integrating all CA Final subjects and strategic management.",
    progress: 30,
    topics: ["Strategic Planning", "Financial Analysis", "Risk Management", "Case Studies", "Integration"],
    status: "upcoming",
    color: "#6B7A8B",
  },
];

const resourceTypes = [
  { icon: BookOpen, label: "Notes", desc: "Concise, exam-ready notes" },
  { icon: FileText, label: "Revision", desc: "Quick revision charts" },
  { icon: HelpCircle, label: "Questions", desc: "Practice question bank" },
  { icon: BarChart2, label: "Tracker", desc: "Progress tracker" },
];

export default function CAFinalContent() {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  const overallProgress = Math.round(
    subjects.reduce((sum, s) => sum + s.progress, 0) / subjects.length
  );

  return (
    <div className="pt-24 bg-parchment min-h-screen">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <span className="section-label text-gold mb-3 block">CA Final Vault</span>
                <h1 className="font-cormorant font-300 text-display text-navy leading-none mb-4">
                  CA Final<br />Study Vault
                </h1>
                <p className="font-inter text-[14px] text-muted max-w-[500px]">
                  Structured notes, revision frameworks, and practice questions for CA Final Nov 2026. Organized by subject â€” built for deep understanding, not rote learning.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-warm-white border border-border p-6"
            >
              <div className="section-label text-gold mb-1">Overall Progress</div>
              <div className="font-cormorant font-300 text-[56px] text-navy leading-none mb-2">
                {overallProgress}%
              </div>
              <div className="w-full h-1 bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${overallProgress}%` }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-1 bg-gold"
                />
              </div>
              <p className="font-inter text-[11px] text-muted mt-2">CA Final Â· Nov 2026</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resource types */}
      <section className="border-b border-border bg-warm-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-6">
          <div className="flex gap-6 overflow-x-auto pb-1">
            {resourceTypes.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.label} className="flex items-center gap-2.5 shrink-0">
                  <div className="w-7 h-7 border border-border flex items-center justify-center text-navy/40">
                    <Icon size={13} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-inter text-[12px] font-500 text-navy">{r.label}</p>
                    <p className="font-inter text-[10px] text-muted">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subjects grid */}
      <section className="py-10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, i) => (
              <motion.div
                key={subject.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveSubject(activeSubject === subject.code ? null : subject.code)}
                className="luxury-card cursor-pointer overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="section-label mb-1" style={{ color: subject.color }}>{subject.code}</div>
                      <h3 className="font-cormorant font-500 text-[19px] text-navy leading-tight">{subject.name}</h3>
                    </div>
                    <span
                      className={`font-inter text-[10px] font-500 tracking-wider uppercase px-2.5 py-1 ${
                        subject.status === "active"
                          ? "text-emerald-700 bg-emerald-50"
                          : subject.status === "in-progress"
                          ? "text-gold bg-gold/10"
                          : "text-muted bg-muted/10"
                      }`}
                    >
                      {subject.status === "active" ? "Active" : subject.status === "in-progress" ? "In Progress" : "Upcoming"}
                    </span>
                  </div>

                  <p className="font-inter text-[12px] text-muted leading-relaxed mb-5">{subject.description}</p>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-inter text-[11px] text-muted/60">Progress</span>
                      <span className="font-inter text-[11px] font-600 text-navy">{subject.progress}%</span>
                    </div>
                    <div className="w-full h-px bg-border">
                      <div className="h-px transition-all duration-700" style={{ width: `${subject.progress}%`, background: subject.color }} />
                    </div>
                  </div>

                  {/* Topics */}
                  <div className={`overflow-hidden transition-all duration-400 ${activeSubject === subject.code ? "max-h-60" : "max-h-0"}`}>
                    <div className="pt-4 border-t border-border">
                      <p className="section-label text-muted/60 mb-3">Topics</p>
                      <ul className="space-y-2">
                        {subject.topics.map((topic, j) => (
                          <li key={topic} className="flex items-center gap-2">
                            {j < Math.floor(subject.progress / 20) ? (
                              <CheckCircle2 size={12} style={{ color: subject.color }} />
                            ) : (
                              <Circle size={12} className="text-border" />
                            )}
                            <span className="font-inter text-[12px] text-navy/70">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex gap-3">
                      <Link href={`/ca-final/${subject.code.toLowerCase()}`} onClick={(e) => e.stopPropagation()} className="font-inter text-[11px] text-navy/40 hover:text-gold transition-colors flex items-center gap-1">
                        <BookOpen size={10} /> Notes
                      </Link>
                      <Link href={`/ca-final/${subject.code.toLowerCase()}/questions`} onClick={(e) => e.stopPropagation()} className="font-inter text-[11px] text-navy/40 hover:text-gold transition-colors flex items-center gap-1">
                        <HelpCircle size={10} /> Questions
                      </Link>
                    </div>
                    <div className="flex items-center gap-1 text-navy/30 hover:text-gold transition-colors">
                      <span className="font-inter text-[11px] tracking-[0.08em] uppercase">
                        {activeSubject === subject.code ? "Less" : "More"}
                      </span>
                      <ArrowRight size={10} className={`transition-transform duration-300 ${activeSubject === subject.code ? "rotate-90" : ""}`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study methodology */}
      <section className="border-t border-border bg-navy mt-8">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 text-center">
          <span className="section-label text-gold/80 mb-4 block">Study Methodology</span>
          <h2 className="font-cormorant font-300 text-[clamp(28px,4vw,52px)] text-parchment mb-6">
            Understanding over memorization
          </h2>
          <p className="font-inter text-[14px] text-parchment/40 max-w-[520px] mx-auto">
            Every note is built for conceptual clarity. Frameworks, flowcharts, and worked examples â€” not rote definitions.
          </p>
        </div>
      </section>
    </div>
  );
}


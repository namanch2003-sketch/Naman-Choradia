"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2008",
    label: "School",
    title: "Foundation Years",
    description: "Developed curiosity for numbers, patterns, and how the world works. First exposure to financial concepts through family.",
    status: "completed",
  },
  {
    year: "2019",
    label: "Commerce",
    title: "Choosing the Path",
    description: "Opted for Commerce stream. Discovered passion for accounting, economics, and business analysis.",
    status: "completed",
  },
  {
    year: "2022",
    label: "CA Journey",
    title: "Chartered Accountancy",
    description: "Enrolled in CA program. Cleared Foundation and Intermediate. Currently preparing for CA Final (Nov 2026).",
    status: "active",
  },
  {
    year: "2022",
    label: "Markets",
    title: "Financial Markets",
    description: "Deep dive into equity markets. Technical analysis, fundamental research, trade journaling, and developing a systematic edge.",
    status: "active",
  },
  {
    year: "2023",
    label: "Research",
    title: "Structured Research",
    description: "Built a research framework. Started publishing insights, sector analysis, and company deep-dives.",
    status: "active",
  },
  {
    year: "2024",
    label: "Technology",
    title: "Building with AI",
    description: "Exploring AI and automation to build tools for traders, investors, and students. Combining domain expertise with technology.",
    status: "active",
  },
  {
    year: "Future",
    label: "Vision",
    title: "The Long Game",
    description: "CA qualification, building a research-driven investment firm, creating tools that compound knowledge for thousands of learners.",
    status: "future",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-warm-white py-16 lg:py-24 border-b border-border overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-16"
        >
          <span className="section-label">The Journey</span>
          <h2 className="font-cormorant font-300 text-display text-navy mt-2 leading-none">
            Milestones
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          <div className="space-y-0">
            {milestones.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year + item.label}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-start gap-6 lg:gap-0 pb-10`}
                >
                  {/* Mobile/left content */}
                  <div className="pl-8 lg:pl-0 lg:w-[calc(50%-24px)] lg:pr-10">
                    <div className={`lg:text-${isLeft ? "right" : "left"}`}>
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isLeft ? "lg:justify-end" : "lg:justify-start"
                        }`}
                      >
                        <span className="section-label text-gold">{item.label}</span>
                        <span className="font-inter text-[11px] text-muted/50">· {item.year}</span>
                      </div>
                      <h3 className="font-cormorant font-500 text-[20px] text-navy mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-inter text-[13px] text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-1 w-6 h-6 flex items-center justify-center">
                    <div
                      className={`w-2 h-2 rounded-full transition-all ${
                        item.status === "active"
                          ? "bg-gold shadow-[0_0_8px_rgba(198,161,91,0.6)]"
                          : item.status === "future"
                          ? "bg-border border border-gold/30"
                          : "bg-navy/30"
                      }`}
                    />
                  </div>

                  {/* Right spacer for desktop */}
                  <div className="hidden lg:block lg:w-[calc(50%-24px)] lg:pl-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

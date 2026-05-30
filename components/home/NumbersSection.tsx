"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { number: 1000, suffix: "+", label: "Study Hours", desc: "Dedicated to CA Final preparation" },
  { number: 500, suffix: "+", label: "Research Notes", desc: "Market insights and analysis" },
  { number: 100, suffix: "+", label: "Articles Written", desc: "On markets, trading, and learning" },
  { number: 5, suffix: "+", label: "Years Learning", desc: "Continuous compounding of knowledge" },
];

export default function NumbersSection() {
  return (
    <section className="bg-warm-white py-16 lg:py-24 border-b border-border">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 lg:px-10 py-8 lg:py-10 first:pl-0 last:pr-0"
            >
              <div className="counter-number text-[clamp(48px,5vw,72px)] font-300 leading-none mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2200} />
              </div>
              <div className="w-6 h-px bg-gold mb-3" />
              <h3 className="font-inter text-[14px] font-600 text-navy tracking-tight mb-1">
                {stat.label}
              </h3>
              <p className="font-inter text-[12px] text-muted hidden lg:block">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

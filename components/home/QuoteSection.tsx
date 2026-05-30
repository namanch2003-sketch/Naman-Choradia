"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  "Process over outcomes.",
  "Consistency over intensity.",
  "Compounding over shortcuts.",
];

export default function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="bg-navy py-20 lg:py-32 border-b border-white/10"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 text-center">
        <div className="w-px h-12 bg-gold/30 mx-auto mb-10" />

        <div className="space-y-1 mb-10">
          {lines.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-cormorant font-300 text-[clamp(28px,4.5vw,60px)] text-parchment leading-[1.15] tracking-[-0.01em]"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="w-px h-12 bg-gold/30 mx-auto" />
      </div>
    </motion.section>
  );
}

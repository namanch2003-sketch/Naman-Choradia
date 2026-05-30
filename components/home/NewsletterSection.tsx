"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-navy py-16 lg:py-24">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label text-gold/80 mb-4 block">Stay in the loop</span>
          <h2 className="font-cormorant font-300 text-[clamp(36px,5vw,64px)] text-parchment leading-none tracking-tight mb-4">
            Insights on Markets,<br />
            <span className="text-gold">Learning & Everything</span>
          </h2>
          <p className="font-inter text-[14px] text-parchment/40 leading-relaxed mb-10 max-w-[480px] mx-auto">
            Join readers who receive weekly insights on financial markets, CA preparation,
            technology, and the compounding philosophy.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10">
            {["Weekly market insights", "CA Final study notes", "AI tool updates", "No spam, ever"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-parchment/40">
                <Check size={11} className="text-gold" />
                <span className="font-inter text-[12px]">{b}</span>
              </div>
            ))}
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 px-8 py-4"
            >
              <Check size={16} className="text-gold" />
              <span className="font-inter text-[13px] text-parchment/70">
                You&apos;re subscribed. Welcome aboard.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/5 border border-parchment/15 px-4 py-3.5 text-[13px] font-inter text-parchment placeholder:text-parchment/25 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gold text-navy text-[12px] font-inter font-600 tracking-[0.1em] uppercase px-6 py-3.5 hover:bg-gold-light transition-colors whitespace-nowrap group"
              >
                Subscribe
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="font-inter text-[11px] text-parchment/25 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

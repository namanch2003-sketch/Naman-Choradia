"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, TrendingUp, Code2, Target } from "lucide-react";

const values = [
  { icon: BookOpen, title: "First-Principles Thinking", description: "Break every problem to its foundation. Don't accept convention — understand the why behind every standard, every framework, every trade." },
  { icon: Target, title: "Process Over Outcomes", description: "Focus obsessively on process. Right outcomes from wrong process is luck. Right process with bad outcomes is variance. I optimize for process." },
  { icon: TrendingUp, title: "Compounding Everything", description: "Knowledge, skills, relationships, capital — everything compounds. An hour invested daily in understanding markets becomes 1,000+ hours over three years." },
  { icon: Code2, title: "Build, Don't Just Learn", description: "Convert learning into tangible output. Tools, articles, trade frameworks — building is the final exam of understanding." },
];

const skills = [
  { label: "Audit & Assurance", value: 92 },
  { label: "Financial Modelling", value: 90 },
  { label: "Microsoft Excel", value: 88 },
  { label: "Technical Analysis", value: 85 },
  { label: "Equity Research", value: 83 },
  { label: "Python / Data", value: 68 },
];

const achievements = [
  { year: "Feb 2026", title: "CFA Level I", detail: "Cleared · 1695/1900" },
  { year: "Jan 2026", title: "CA Final", detail: "1st Attempt · 375/600 · All India Highest in IBS" },
  { year: "Nov 2024", title: "B.Com", detail: "Bengaluru University · 90%" },
  { year: "2023–26", title: "Associate — Audit", detail: "KPMG India (BSR & Co LLP)" },
  { year: "Mar 2021", title: "Class XII", detail: "97.80% · 100/100 in Mathematics" },
];

export default function AboutContent() {
  return (
    <div className="pt-24 bg-parchment min-h-screen">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
              <span className="section-label text-gold mb-4 block">About</span>
              <h1 className="font-cormorant font-300 text-display text-navy leading-none mb-6">
                Naman<br />Choradia
              </h1>
              <div className="w-10 h-px bg-gold mb-6" />
              <p className="font-inter text-[15px] text-muted leading-relaxed mb-4">
                CA (1st attempt) · CFA Level I · Associate at KPMG India · Independent equity analyst with 50+ published research studies. Based in Bengaluru.
              </p>
              <p className="font-inter text-[15px] text-muted leading-relaxed mb-4">
                My work sits at the intersection of accounting, markets, and technology — with a deep belief that compounding applies to knowledge just as powerfully as it does to capital.
              </p>
              <p className="font-inter text-[15px] text-muted leading-relaxed">
                This platform is my digital headquarters — where I publish research, build tools, document trades, and share everything I learn.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["CA (ICAI)", "CFA L1", "KPMG India", "Equity Research", "Bengaluru"].map((tag) => (
                  <span key={tag} className="font-inter text-[11px] text-navy/50 border border-border px-3 py-1">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} className="relative">
              <div className="relative aspect-[3/4] max-w-[380px] mx-auto overflow-hidden" style={{ background: "linear-gradient(160deg, #0C1D48 0%, #13295A 50%, #1a3570 100%)" }}>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 507" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <radialGradient id="portrait-glow" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#0C1D48" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="380" height="507" fill="url(#portrait-glow)" />
                  <line x1="190" y1="0" x2="190" y2="507" stroke="#C6A15B" strokeWidth="0.3" opacity="0.3" />
                  <line x1="0" y1="253" x2="380" y2="253" stroke="#C6A15B" strokeWidth="0.3" opacity="0.3" />
                  <rect x="80" y="100" width="220" height="307" fill="none" stroke="#C6A15B" strokeWidth="0.5" opacity="0.2" />
                  <circle cx="190" cy="180" r="60" fill="none" stroke="#C6A15B" strokeWidth="0.5" opacity="0.25" />
                  <text x="190" y="270" textAnchor="middle" fill="#C6A15B" opacity="0.5" fontFamily="Georgia, serif" fontSize="72" fontWeight="300">NC</text>
                </svg>
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/40" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/40" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/40" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/40" />
              </div>
              <div className="absolute -bottom-4 -right-4 lg:right-0 bg-warm-white border border-border p-4 w-[200px]">
                <div className="section-label text-gold mb-1">Latest Achievement</div>
                <p className="font-cormorant font-500 text-navy text-[15px] leading-tight">CFA Level I<br /><span className="text-[13px] font-inter font-400 text-muted">1695/1900 · Feb 2026</span></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-18">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-10">
            <span className="section-label text-gold mb-3 block">Track Record</span>
            <h2 className="font-cormorant font-300 text-headline text-navy leading-none">Key Milestones</h2>
          </motion.div>
          <div className="space-y-0">
            {achievements.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-center gap-6 py-4 border-b border-border group">
                <div className="w-[90px] shrink-0">
                  <span className="font-inter text-[11px] text-muted/50 tracking-wide">{a.year}</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <div className="flex-1">
                  <span className="font-inter text-[14px] font-500 text-navy">{a.title}</span>
                  <span className="font-inter text-[12px] text-muted ml-3">{a.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-[720px]">
            <span className="section-label text-gold mb-4 block">Story</span>
            <h2 className="font-cormorant font-300 text-headline text-navy leading-none mb-8">How I Got Here</h2>
            <div className="space-y-5 font-inter text-[15px] text-muted leading-relaxed">
              <p>My journey started with a simple obsession: <em className="text-navy">understanding how businesses create value</em>. That curiosity led me to Commerce, then the CA program, and eventually to three years at KPMG India (BSR &amp; Co LLP) doing audit work across listed companies and financial institutions.</p>
              <p>Alongside the professional track, I built a parallel life in markets — reading annual reports, publishing equity research, and journaling every trade. What began as intellectual curiosity became a systematic process: 50+ published studies, a live trade journal, and a real understanding of what drives long-term outperformance.</p>
              <p>I&apos;m now building at the intersection of finance and AI. The next generation of analysts will need both deep domain expertise and technological fluency. That&apos;s the edge I&apos;m working toward — one compounding step at a time.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
            <span className="section-label text-gold mb-4 block">Philosophy</span>
            <h2 className="font-cormorant font-300 text-headline text-navy leading-none">What I Believe</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-parchment p-7 lg:p-10">
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-navy/40 mb-5"><Icon size={16} strokeWidth={1.5} /></div>
                  <h3 className="font-cormorant font-500 text-[20px] text-navy mb-3">{v.title}</h3>
                  <p className="font-inter text-[13px] text-muted leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills + Philosophy navy bar */}
      <section className="border-b border-border bg-navy">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="section-label text-gold/80 mb-4 block">Core Skills</span>
              <h2 className="font-cormorant font-300 text-headline text-parchment leading-none mb-8">What I Do Well</h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.label} className="flex items-center gap-4">
                    <div className="w-[180px] shrink-0"><p className="font-inter text-[12px] text-parchment/50">{skill.label}</p></div>
                    <div className="flex-1 h-px bg-parchment/10 relative">
                      <div className="h-px bg-gold absolute left-0 top-0" style={{ width: `${skill.value}%` }} />
                    </div>
                    <span className="font-inter text-[11px] text-parchment/40 w-8 text-right">{skill.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              <span className="section-label text-gold/80 mb-4 block">Learning Philosophy</span>
              <h2 className="font-cormorant font-300 text-headline text-parchment leading-none mb-6">How I Learn</h2>
              <div className="space-y-4 font-inter text-[14px] text-parchment/50 leading-relaxed">
                <p>Learning is a <span className="text-parchment/80">compounding process</span>. The foundation matters more than the speed. I prioritize depth over breadth.</p>
                <p>I learn best by <span className="text-parchment/80">doing and publishing</span>. Writing forces clarity. Building forces understanding.</p>
                <p>I maintain a <span className="text-parchment/80">personal knowledge system</span> — notes, frameworks, and mental models that compound over time.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 text-center">
          <h2 className="font-cormorant font-300 text-[clamp(28px,4vw,48px)] text-navy mb-6">Let&apos;s connect and build together.</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-navy text-parchment font-inter text-[12px] font-500 tracking-[0.08em] uppercase px-6 py-3.5 hover:bg-navy-light transition-colors group">
              Get in Touch <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/research" className="inline-flex items-center gap-2 border border-navy/20 text-navy font-inter text-[12px] font-500 tracking-[0.08em] uppercase px-6 py-3.5 hover:border-navy/50 transition-colors group">
              Read Research <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

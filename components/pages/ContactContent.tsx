"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check, MessageSquare, Briefcase, BookOpen } from "lucide-react";

function LinkedinSVG() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
}
function BlogSVG() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
}
function MailSVG() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
}

const reasons = [
  { icon: MessageSquare, label: "Collaboration", desc: "Research, writing, or project collab" },
  { icon: Briefcase, label: "Opportunities", desc: "Roles, internships, or consulting" },
  { icon: BookOpen, label: "CA / Markets", desc: "Guidance, discussion, feedback" },
  { icon: Mail, label: "General", desc: "Anything else on your mind" },
];

const socials = [
  { Icon: LinkedinSVG, label: "LinkedIn", handle: "linkedin.com/in/namanrch", href: "https://linkedin.com/in/namanrch" },
  { Icon: BlogSVG, label: "Blog", handle: "namanrchoradia.blogspot.com", href: "https://namanrchoradia.blogspot.com" },
  { Icon: MailSVG, label: "Email", handle: "namanrch@gmail.com", href: "mailto:namanrch@gmail.com" },
];

const timeline = [
  { date: "Feb 2026", title: "CFA Level I Cleared", detail: "Score: 1695/1900 · Top decile globally" },
  { date: "Jan 2026", title: "CA Final — 1st Attempt", detail: "375/600 · All India Highest in IBS" },
  { date: "Mar 2023–26", title: "Associate — Audit", detail: "KPMG India (BSR & Co LLP)" },
  { date: "Nov 2024", title: "B.Com", detail: "Bengaluru University · 90%" },
  { date: "Mar 2021", title: "Class XII", detail: "97.80% · 100/100 in Mathematics" },
  { date: "2018–Present", title: "Independent Equity Analyst", detail: "50+ published research studies" },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "General Enquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 bg-parchment min-h-screen">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <span className="section-label text-gold mb-3 block">Contact</span>
            <h1 className="font-cormorant font-300 text-display text-navy leading-none mb-4">Let&apos;s Connect</h1>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-inter text-[12px] text-muted">Bengaluru, India · Open to Relocate</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left — Achievement timeline + socials */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} className="space-y-10">
            <div>
              <span className="section-label text-muted/60 block mb-6">Track Record</span>
              <div className="relative">
                <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border" />
                <div className="space-y-0">
                  {timeline.map((item, i) => (
                    <motion.div key={item.title} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="flex gap-5 pb-6 relative">
                      <div className="w-[22px] shrink-0 flex items-start justify-center pt-1">
                        <div className="w-2 h-2 rounded-full bg-gold border-2 border-parchment" />
                      </div>
                      <div>
                        <p className="font-inter text-[10px] text-gold tracking-wider uppercase mb-0.5">{item.date}</p>
                        <p className="font-inter text-[13px] font-500 text-navy leading-snug">{item.title}</p>
                        <p className="font-inter text-[12px] text-muted mt-0.5">{item.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <span className="section-label text-muted/60 block mb-4">Find Me On</span>
              <div className="space-y-2">
                {socials.map(({ Icon, label, handle, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 py-3 border-b border-border group hover:border-gold/20 transition-colors">
                    <div className="w-9 h-9 border border-border flex items-center justify-center text-navy/40 group-hover:border-gold/30 group-hover:text-gold transition-all">
                      <Icon />
                    </div>
                    <div className="flex-1">
                      <p className="font-inter text-[13px] font-500 text-navy">{label}</p>
                      <p className="font-inter text-[11px] text-muted/50">{handle}</p>
                    </div>
                    <ArrowRight size={12} className="text-navy/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-12 h-12 border border-gold/30 bg-gold/5 flex items-center justify-center mb-5">
                  <Check size={20} className="text-gold" />
                </div>
                <h3 className="font-cormorant font-500 text-[28px] text-navy mb-3">Message Sent</h3>
                <p className="font-inter text-[13px] text-muted max-w-[300px] leading-relaxed">
                  Thank you for reaching out. I&apos;ll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="section-label text-muted/60 block mb-2">Name</label>
                    <input type="text" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-warm-white border border-border px-4 py-3 font-inter text-[13px] text-navy placeholder:text-muted/40 focus:outline-none focus:border-gold/50 transition-colors" />
                  </div>
                  <div>
                    <label className="section-label text-muted/60 block mb-2">Email</label>
                    <input type="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-warm-white border border-border px-4 py-3 font-inter text-[13px] text-navy placeholder:text-muted/40 focus:outline-none focus:border-gold/50 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="section-label text-muted/60 block mb-2">Subject</label>
                  <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-warm-white border border-border px-4 py-3 font-inter text-[13px] text-navy focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                    <option>General Enquiry</option>
                    <option>CA Guidance</option>
                    <option>Market Discussion</option>
                    <option>Collaboration</option>
                  </select>
                </div>

                {/* Reason pills */}
                <div>
                  <label className="section-label text-muted/60 block mb-3">What&apos;s this about?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {reasons.map((r) => {
                      const Icon = r.icon;
                      return (
                        <button key={r.label} type="button"
                          onClick={() => setFormData({ ...formData, subject: r.label })}
                          className={`flex items-center gap-2.5 px-4 py-3 border text-left transition-all duration-200 ${
                            formData.subject === r.label ? "border-navy bg-navy/5 text-navy" : "border-border text-navy/50 hover:border-navy/30"
                          }`}>
                          <Icon size={13} strokeWidth={1.5} />
                          <div>
                            <p className="font-inter text-[12px] font-500">{r.label}</p>
                            <p className="font-inter text-[10px] text-muted/50 hidden sm:block">{r.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="section-label text-muted/60 block mb-2">Message</label>
                  <textarea required rows={5} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me what's on your mind..."
                    className="w-full bg-warm-white border border-border px-4 py-3 font-inter text-[13px] text-navy placeholder:text-muted/40 focus:outline-none focus:border-gold/50 transition-colors resize-none" />
                </div>

                <button type="submit"
                  className="flex items-center gap-2 bg-navy text-parchment font-inter text-[12px] font-500 tracking-[0.1em] uppercase px-6 py-3.5 hover:bg-navy-light transition-colors group w-full justify-center">
                  Send Message
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

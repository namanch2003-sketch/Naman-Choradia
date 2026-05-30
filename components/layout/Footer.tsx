"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

function LinkedinSVG() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
}
function TwitterSVG() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
}
function YoutubeSVG() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>;
}
function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
}

const exploreLinks = [
  { label: "CA Final Prep", href: "/ca-final" },
  { label: "Research", href: "/research" },
  { label: "Markets", href: "/markets" },
  { label: "Journal", href: "/journal" },
  { label: "AI Lab", href: "/ai-lab" },
  { label: "About", href: "/about" },
];

const resourceLinks = [
  { label: "Study Vault", href: "/ca-final" },
  { label: "Research Library", href: "/research" },
  { label: "Trade Journal", href: "/markets" },
  { label: "Market Insights", href: "/markets" },
  { label: "AI Lab", href: "/ai-lab" },
];

const socialLinks = [
  { icon: LinkedinSVG, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterSVG, href: "https://twitter.com", label: "Twitter" },
  { icon: YoutubeSVG, href: "https://youtube.com", label: "YouTube" },
  { icon: MailIcon, href: "mailto:naman@namanrch.in", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-parchment/80">
      {/* Quote bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-12 lg:py-16 text-center">
          <p className="font-cormorant font-300 text-[clamp(28px,4vw,48px)] leading-[1.2] text-parchment/90 tracking-tight">
            &ldquo;The best investment you can make<br className="hidden md:block" />
            <span className="text-gold"> is in yourself.&rdquo;</span>
          </p>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-parchment/20 flex items-center justify-center">
                <span className="font-cormorant font-500 text-parchment text-sm tracking-wider">NC</span>
              </div>
              <span className="font-inter text-xs font-500 tracking-[0.12em] uppercase text-parchment/70">
                Naman Choradia
              </span>
            </div>
            <p className="font-cormorant text-base text-parchment/50 italic mb-2">
              Markets. Learning. Technology.
            </p>
            <p className="font-inter text-[13px] text-parchment/40 leading-relaxed max-w-[220px]">
              Documenting the pursuit of mastery through curiosity, discipline, and compounding.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-parchment/15 flex items-center justify-center text-parchment/40 hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="section-label text-parchment/60 mb-5">Explore</h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-[13px] text-parchment/40 hover:text-parchment/80 transition-colors hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="section-label text-parchment/60 mb-5">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-[13px] text-parchment/40 hover:text-parchment/80 transition-colors hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="section-label text-parchment/60 mb-5">Stay Updated</h4>
            <p className="font-inter text-[13px] text-parchment/40 leading-relaxed mb-4">
              Insights on markets, learning, and everything in between.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-parchment/15 px-3 py-2.5 text-[13px] font-inter text-parchment placeholder:text-parchment/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gold text-navy text-[12px] font-inter font-600 tracking-[0.08em] uppercase py-2.5 px-4 hover:bg-gold-light transition-colors"
              >
                Subscribe <ArrowRight size={12} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-[12px] text-parchment/30">
            © 2024 Naman Choradia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-inter text-[12px] text-parchment/30 hover:text-parchment/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-inter text-[12px] text-parchment/30 hover:text-parchment/60 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

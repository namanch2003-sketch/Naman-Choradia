"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  TrendingUp,
  Search,
  BookOpen,
  BarChart2,
  Mail,
  X,
  Menu,
} from "lucide-react";
import { LinkedinIcon, TwitterXIcon } from "./SocialIcons";

const navItems = [
  {
    label: "Technical Analysis",
    href: "/technical-analysis",
    icon: TrendingUp,
  },
  {
    label: "Equity Research",
    href: "/equity-research",
    icon: Search,
  },
  {
    label: "CA Final Prep",
    href: "/ca-final-prep",
    icon: BookOpen,
  },
  {
    label: "Track My Trades",
    href: "/track-my-trades",
    icon: BarChart2,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/namanrch",
    icon: LinkedinIcon,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/namanrch",
    icon: TwitterXIcon,
  },
  {
    label: "Email",
    href: "mailto:namanch2003@gmail.com",
    icon: Mail,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 bg-navy-DEFAULT rounded-lg text-white shadow-lg"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-sidebar bg-navy-DEFAULT flex flex-col z-50
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-1.5 text-white/60 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="px-8 pt-10 pb-8 border-b border-white/10">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <span
              className="font-playfair text-5xl font-bold text-white tracking-tight leading-none block"
              style={{ letterSpacing: "-0.02em" }}
            >
              NRC
            </span>
            <span className="text-white/40 text-xs font-sans tracking-[0.18em] uppercase mt-2 block">
              Naman R C
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 pt-4 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    flex items-center gap-3.5 px-8 py-4 text-sm font-sans font-medium
                    transition-all duration-200 group relative
                    ${
                      active
                        ? "text-white bg-white/10"
                        : "text-white/65 hover:text-white hover:bg-white/[0.07]"
                    }
                  `}
                >
                  {active && (
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent-DEFAULT rounded-r-full" />
                  )}
                  <Icon
                    size={16}
                    strokeWidth={1.75}
                    className={`flex-shrink-0 transition-colors duration-200 ${
                      active ? "text-accent-light" : "text-white/50 group-hover:text-white/80"
                    }`}
                  />
                  <span className="tracking-wide">{item.label}</span>
                </Link>
                <div className="mx-8 border-b border-white/[0.06]" />
              </div>
            );
          })}
        </nav>

        {/* Social links */}
        <div className="px-8 py-6 border-t border-white/10">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-sans mb-4">
            Connect
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/45 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                >
                  <Icon size={17} strokeWidth={1.75} />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}

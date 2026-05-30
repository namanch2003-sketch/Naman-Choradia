"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  TrendingUp,
  PieChart,
  GraduationCap,
  BarChart3,
  Quote,
  X,
} from "lucide-react";
import { LinkedinIcon, TwitterXIcon } from "./SocialIcons";
import { Mail } from "lucide-react";

const navItems = [
  { name: "Home",               icon: Home,          href: "/" },
  { name: "Technical Analysis", icon: TrendingUp,    href: "/technical-analysis" },
  { name: "Equity Research",    icon: PieChart,      href: "/equity-research" },
  { name: "CA Final Prep",      icon: GraduationCap, href: "/ca-final-prep" },
  { name: "Track my Trades",    icon: BarChart3,     href: "/track-my-trades" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/namanrch",  Icon: LinkedinIcon },
  { label: "Twitter",  href: "https://twitter.com/namanrch",       Icon: TwitterXIcon },
  { label: "Email",    href: "mailto:namanch2003@gmail.com",        Icon: Mail },
];

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export default function Sidebar({ mobileOpen, setMobileOpen }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-gradient-to-b from-[#001B4D] via-[#002866] to-[#00102F] text-white transition-transform duration-300 lg:translate-x-0 ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col px-7 py-8 overflow-y-auto">
        {/* ── Logo ── */}
        <div className="flex items-start justify-between">
          <div>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <h1 className="font-serif text-7xl tracking-[0.08em] text-white leading-none">
                NRC
              </h1>
            </Link>
            <p className="mt-2 text-lg tracking-wide text-blue-100">
              namanrch.in
            </p>
            <div className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
          </div>

          {/* Close button — mobile only */}
          <button
            className="lg:hidden text-white/70 hover:text-white transition-colors mt-1"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* ── Navigation ── */}
        <nav className="mt-10 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center gap-4 rounded-xl px-4 py-4 text-sm font-medium transition-all ${
                  active
                    ? "bg-blue-600/80 text-white shadow-lg shadow-blue-950/30"
                    : "text-blue-50 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={21} className="shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* ── Quote card ── */}
        <div className="mt-auto pt-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <Quote className="mb-3 text-blue-200" size={22} />
            <p className="text-sm leading-6 text-blue-50">
              Discipline in process creates confidence in outcomes.
            </p>
            <div className="mt-5 h-0.5 w-16 bg-amber-300" />
          </div>

          {/* ── Social icons ── */}
          <div className="mt-7 flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-blue-50 transition hover:bg-white hover:text-[#001B4D]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* ── Footer ── */}
          <div className="mt-7 border-t border-white/10 pt-6 text-xs leading-6 text-blue-100">
            <p>© 2026 Naman R C</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

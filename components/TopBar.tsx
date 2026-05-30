"use client";

import Link from "next/link";
import { Menu, Search, Bell, Send } from "lucide-react";

interface TopBarProps {
  setMobileOpen: (open: boolean) => void;
}

export default function TopBar({ setMobileOpen }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/80 px-5 py-4 backdrop-blur-xl lg:px-10">
      <div className="flex items-center justify-between gap-4">
        {/* Hamburger — mobile only */}
        <button
          className="rounded-lg border border-slate-200 p-2 lg:hidden text-slate-600 hover:bg-slate-50 transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        {/* Search bar — hidden on small screens */}
        <div className="hidden max-w-md flex-1 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2 md:flex focus-within:border-blue-400 transition-colors">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            placeholder="Search insights, notes, reports..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 text-slate-800"
          />
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-4">
          {/* Notification bell */}
          <button
            className="relative text-slate-500 hover:text-blue-700 transition-colors"
            aria-label="Notifications"
          >
            <Bell size={22} />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
          </button>

          {/* Contact CTA */}
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Contact Me <Send size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}

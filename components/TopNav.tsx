"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-end h-16 px-6 lg:px-10 gap-6">
        {/* Mobile logo — visible only when sidebar is hidden */}
        <div className="lg:hidden flex-1">
          <span className="font-playfair text-2xl font-bold text-navy-DEFAULT">
            NRC
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className={`text-sm font-medium font-sans transition-colors duration-200 ${
              pathname === "/about"
                ? "text-navy-DEFAULT"
                : "text-muted hover:text-navy-DEFAULT"
            }`}
          >
            About Me
          </Link>

          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-DEFAULT text-white text-sm font-medium font-sans
              hover:bg-navy-light transition-all duration-200 hover:shadow-md hover:-translate-y-px"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
}

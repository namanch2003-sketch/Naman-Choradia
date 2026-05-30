"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Research", href: "/research" },
  { label: "CA Final", href: "/ca-final" },
  { label: "Markets", href: "/markets" },
  { label: "AI Lab", href: "/ai-lab" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 border border-navy/20 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <span className="font-cormorant font-600 text-navy text-sm tracking-wider">NC</span>
              </div>
              <span className="font-inter text-xs font-500 tracking-[0.12em] uppercase text-navy/70 hidden sm:block">
                Naman Choradia
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-inter text-[13px] font-400 tracking-wide hover-underline transition-colors duration-200 ${
                      isActive ? "text-gold" : "text-navy/60 hover:text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden lg:flex items-center justify-center w-8 h-8 text-navy/40 hover:text-navy transition-colors">
                <Search size={15} />
              </button>
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 bg-navy text-parchment text-[12px] font-inter font-500 tracking-[0.08em] uppercase px-4 py-2.5 hover:bg-navy-light transition-colors duration-300"
              >
                Subscribe
                <ArrowRight size={12} />
              </Link>
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden w-8 h-8 flex items-center justify-center text-navy/60 hover:text-navy"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/30 backdrop-blur-sm z-50"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-warm-white z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-cormorant font-500 text-navy text-xl tracking-wide">Menu</span>
                <button onClick={() => setMenuOpen(false)} className="text-navy/40 hover:text-navy">
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-3 font-cormorant text-2xl font-400 border-b border-border/50 transition-colors ${
                        pathname === link.href ? "text-gold" : "text-navy/70 hover:text-navy"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-6">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-navy text-parchment py-3 font-inter text-sm font-500 tracking-widest uppercase"
                >
                  Subscribe <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

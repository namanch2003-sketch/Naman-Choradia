'use client'

import Link from 'next/link'

const navLinks = [
  { label: 'CA Final', href: '/ca-final' },
  { label: 'Research', href: '/research' },
  { label: 'Journal', href: '/journal' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Tools', href: '/tools' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e9e9e9] h-[88px]">
      <div className="flex items-center justify-between h-full px-8 mx-auto max-w-[1280px]">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-4">
          <span
            className="font-cormorant text-[42px] leading-none text-[#0A1F44]"
          >
            NC
          </span>
          <span className="font-inter text-[13px] tracking-[2px] uppercase text-[#0A1F44] hidden [@media(min-width:600px)]:block">
            Naman Choradia
          </span>
        </Link>

        {/* Nav — hidden below 900px */}
        <nav className="hidden [@media(min-width:900px)]:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter text-[15px] text-[#0A1F44] no-underline hover:text-[#C9A227] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

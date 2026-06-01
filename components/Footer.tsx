import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e9e9e9] mt-16">
      <div className="mx-auto max-w-[1280px] px-8 py-[60px]">
        <div
          className="grid gap-8 [@media(min-width:900px)]:grid-cols-[2fr_1fr_1fr_1fr] grid-cols-1"
        >
          {/* Col 1 */}
          <div>
            <h3 className="font-cormorant text-[28px] text-[#0A1F44] mb-3">
              Naman Choradia
            </h3>
            <p className="font-inter text-[15px] text-[#555] leading-relaxed">
              Markets • Learning • Technology
            </p>
            <p className="font-inter text-[14px] text-[#777] mt-4 leading-loose">
              Documenting the journey through CA Final, financial markets, and continuous learning.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-inter text-[13px] uppercase tracking-[2px] text-[#0A1F44] mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Research', href: '/research' },
                { label: 'Journal', href: '/journal' },
                { label: 'Blogs', href: '/blogs' },
                { label: 'CA Final', href: '/ca-final' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-[15px] text-[#555] hover:text-[#C9A227] transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-inter text-[13px] uppercase tracking-[2px] text-[#0A1F44] mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'X (Twitter)', href: 'https://x.com' },
                { label: 'Email', href: 'mailto:namanch2003@gmail.com' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-[15px] text-[#555] hover:text-[#C9A227] transition-colors no-underline"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-inter text-[13px] uppercase tracking-[2px] text-[#0A1F44] mb-5">
              Newsletter
            </h4>
            <p className="font-inter text-[14px] text-[#777] mb-4 leading-relaxed">
              Get new posts and research directly to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#e9e9e9] flex flex-col [@media(min-width:600px)]:flex-row justify-between items-center gap-2">
          <p className="font-inter text-[13px] text-[#aaa]">
            © {new Date().getFullYear()} Naman Choradia. All rights reserved.
          </p>
          <p className="font-inter text-[13px] text-[#aaa]">namanrch.in</p>
        </div>
      </div>
    </footer>
  )
}

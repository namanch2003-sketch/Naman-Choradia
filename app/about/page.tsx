import Link from 'next/link'

export const metadata = {
  title: 'About — Naman Choradia',
  description: 'Background, journey and contact details.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[800px] px-8 py-[80px]">
      <div className="mb-12 pb-8 border-b border-[#e9e9e9]">
        <p
          className="font-inter text-[13px] tracking-[3px] uppercase mb-4"
          style={{ color: '#C9A227' }}
        >
          About
        </p>
        <h1 className="font-cormorant text-[56px] text-[#0A1F44] mb-4">
          Naman Choradia
        </h1>
        <p className="font-inter text-[18px] text-[#555] leading-relaxed">
          CA Final student, market researcher and continuous learner.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="font-cormorant text-[34px] text-[#0A1F44] mb-4">
            Background
          </h2>
          <p className="font-inter text-[16px] text-[#444] leading-[1.9]">
            I am a CA Final student navigating the rigorous world of chartered accountancy while simultaneously building a deep understanding of financial markets. My interest spans technical analysis, fundamental research and the intersection of technology with investing.
          </p>
          <p className="font-inter text-[16px] text-[#444] leading-[1.9] mt-4">
            This website is my public learning journal — a space where I document trades, share research, write about mental models, and publish notes from my CA preparation. Everything here is built on the belief that the compounding of knowledge, just like compounding in markets, yields the most remarkable results over time.
          </p>
        </section>

        <section>
          <h2 className="font-cormorant text-[34px] text-[#0A1F44] mb-4">
            What I Focus On
          </h2>
          <ul className="space-y-3">
            {[
              'CA Final — SFM, Advanced Accounts, Direct & Indirect Tax',
              'Technical Analysis — Price action, market structure, sector rotation',
              'Trade Journaling — Systematic review of every trade for pattern recognition',
              'Mental Models — First principles thinking applied to markets and decisions',
              'Technology — Building AI-assisted tools for research and learning',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#C9A227] mt-1 shrink-0">—</span>
                <span className="font-inter text-[16px] text-[#444] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-cormorant text-[34px] text-[#0A1F44] mb-4">
            Philosophy
          </h2>
          <p className="font-inter text-[16px] text-[#444] leading-[1.9]">
            I believe in process over outcomes. The best traders, the best professionals, and the best learners all share one trait — they obsess over their process and let outcomes take care of themselves. Markets are humbling, and the moment you think you have them figured out, they remind you otherwise.
          </p>
          <p className="font-inter text-[16px] text-[#444] leading-[1.9] mt-4">
            Documenting and sharing is my way of thinking in public — it forces clarity, invites feedback, and creates a record I can return to. If something I write helps even one person think more clearly about markets or learning, it was worth publishing.
          </p>
        </section>

        <section>
          <h2 className="font-cormorant text-[34px] text-[#0A1F44] mb-4">
            Connect
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[15px] bg-[#0A1F44] text-white px-6 py-3 no-underline hover:bg-[#C9A227] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[15px] border border-[#0A1F44] text-[#0A1F44] px-6 py-3 no-underline hover:bg-[#0A1F44] hover:text-white transition-colors"
            >
              X (Twitter)
            </a>
            <a
              href="mailto:namanch2003@gmail.com"
              className="font-inter text-[15px] border border-[#0A1F44] text-[#0A1F44] px-6 py-3 no-underline hover:bg-[#0A1F44] hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

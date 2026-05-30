import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import MarketCard from "./MarketCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 py-12 lg:px-10 lg:py-16"
    >
      {/* ── Decorative bar-chart background ── */}
      <div className="pointer-events-none absolute right-0 top-10 h-96 w-[620px] opacity-20">
        <svg viewBox="0 0 600 360" className="h-full w-full" aria-hidden="true">
          {Array.from({ length: 22 }).map((_, i) => {
            const x = i * 28;
            const h = 40 + ((i * 17) % 120);
            const y = 250 - h - i * 3;
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width="12"
                height={h}
                rx="2"
                fill="#155EEF"
                opacity={0.35}
              />
            );
          })}
          <path
            d="M0 280 C80 250 90 230 150 220 C230 200 230 150 310 145 C390 140 380 95 470 80 C530 70 540 40 600 25"
            fill="none"
            stroke="#155EEF"
            strokeWidth="5"
          />
        </svg>
      </div>

      {/* ── Content grid ── */}
      <div className="grid items-center gap-10 xl:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <div className="relative z-10 max-w-3xl">
          <p className="text-xl font-semibold text-slate-950">
            Hi, I&apos;m Naman R C 👋
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight tracking-tight text-slate-950 md:text-7xl">
            <span className="text-blue-700">Clarity</span> in Analysis.
            <br />
            <span className="text-teal-700">Confidence</span> in Decisions.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            I share insights on stock markets, in-depth research, CA Final
            preparation, and track my trades with discipline and transparency.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/technical-analysis"
              className="inline-flex items-center gap-3 rounded-lg bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Explore Insights <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
            >
              About Me <User size={17} />
            </Link>
          </div>
        </div>

        {/* Right — market card */}
        <MarketCard />
      </div>
    </section>
  );
}

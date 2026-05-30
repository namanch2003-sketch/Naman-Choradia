"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, TrendingDown, Lightbulb } from "lucide-react";

const watchlist = [
  { name: "NIFTY 50", price: "22,143", change: "+0.82%", positive: true, type: "Index" },
  { name: "SENSEX", price: "72,987", change: "+0.74%", positive: true, type: "Index" },
  { name: "BANK NIFTY", price: "47,234", change: "-0.31%", positive: false, type: "Index" },
  { name: "TCS", price: "3,845", change: "+1.2%", positive: true, type: "IT" },
  { name: "HDFC BANK", price: "1,523", change: "-0.8%", positive: false, type: "Banking" },
  { name: "RELIANCE", price: "2,956", change: "+0.45%", positive: true, type: "Energy" },
];

const trades = [
  {
    date: "15 May 2024",
    stock: "TCS",
    type: "Swing Trade",
    entry: "3,720",
    exit: "3,845",
    pnl: "+â‚¹1,250",
    positive: true,
    lesson: "Breakout with volume confirmation works well on large caps.",
  },
  {
    date: "10 May 2024",
    stock: "NIFTY CE",
    type: "Options",
    entry: "22,000 CE @ 85",
    exit: "Expired worthless",
    pnl: "-â‚¹4,250",
    positive: false,
    lesson: "Time decay kills OTM options. Stick to higher delta trades.",
  },
  {
    date: "5 May 2024",
    stock: "HDFC BANK",
    type: "Positional",
    entry: "1,480",
    exit: "1,523",
    pnl: "+â‚¹2,150",
    positive: true,
    lesson: "Support retest with RSI divergence â€” reliable setup.",
  },
];

const frameworks = [
  {
    title: "Trend Following Framework",
    description: "Multi-timeframe trend analysis using moving averages and market structure.",
    href: "/markets/frameworks/trend-following",
  },
  {
    title: "Breakout Trading System",
    description: "Volume-confirmed breakouts with specific entry, stop-loss, and target criteria.",
    href: "/markets/frameworks/breakout",
  },
  {
    title: "Mean Reversion Strategy",
    description: "Identifying oversold conditions in trending stocks using RSI and Bollinger Bands.",
    href: "/markets/frameworks/mean-reversion",
  },
];

const lessons = [
  "Position sizing is more important than stock selection.",
  "Losses are tuition fees. Journal every trade, especially the losers.",
  "Your worst trades are usually when you deviate from your system.",
  "Markets can be irrational longer than you can stay solvent.",
  "The best trades are boring. Excitement is the enemy of good trading.",
];

export default function MarketsContent() {
  return (
    <div className="pt-24 bg-parchment min-h-screen">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label text-gold mb-3 block">Markets</span>
            <h1 className="font-cormorant font-300 text-display text-navy leading-none mb-4">
              Investment<br />Dashboard
            </h1>
            <p className="font-inter text-[14px] text-muted max-w-[500px]">
              Real trades, real reasoning, real learnings. A transparent journal of my market journey â€” frameworks, trades, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio NAV */}
      <section className="border-b border-border bg-warm-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              { label: "Portfolio NAV", value: "â‚¹12,45,678", sub: "+8.76% All Time", positive: true },
              { label: "Realized P&L (2024)", value: "â‚¹1,24,500", sub: "+12.3% YTD", positive: true },
              { label: "Win Rate", value: "62%", sub: "Last 50 trades", positive: true },
              { label: "Avg R:R", value: "1.8x", sub: "Risk/Reward", positive: true },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="px-6 lg:px-8 py-4 first:pl-0"
              >
                <div className="section-label text-muted/60 mb-1">{stat.label}</div>
                <div className="font-cormorant font-300 text-[28px] lg:text-[32px] text-navy leading-none">{stat.value}</div>
                <div className={`font-inter text-[11px] mt-1 ${stat.positive ? "text-emerald-600" : "text-red-500"}`}>{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left â€” Watchlist + Trades */}
          <div className="lg:col-span-2 space-y-8">
            {/* Watchlist */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-cormorant font-500 text-[22px] text-navy">Watchlist</h2>
                <span className="section-label text-muted/50">Live data (simulated)</span>
              </div>
              <div className="border border-border">
                {watchlist.map((item, i) => (
                  <div key={item.name} className={`flex items-center justify-between px-5 py-3.5 ${i < watchlist.length - 1 ? "border-b border-border" : ""} hover:bg-warm-white transition-colors`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.positive ? "bg-emerald-500" : "bg-red-400"}`} />
                      <div>
                        <p className="font-inter text-[13px] font-500 text-navy">{item.name}</p>
                        <p className="font-inter text-[10px] text-muted/50">{item.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-inter text-[13px] font-500 text-navy">â‚¹{item.price}</p>
                      <p className={`font-inter text-[11px] ${item.positive ? "text-emerald-600" : "text-red-500"}`}>
                        {item.positive ? <TrendingUp size={9} className="inline mr-1" /> : <TrendingDown size={9} className="inline mr-1" />}
                        {item.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Trade Journal */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-cormorant font-500 text-[22px] text-navy">Trade Journal</h2>
                <Link href="/markets/journal" className="flex items-center gap-1.5 font-inter text-[11px] text-navy/40 hover:text-gold transition-colors">
                  All trades <ArrowRight size={10} />
                </Link>
              </div>
              <div className="space-y-3">
                {trades.map((trade, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="luxury-card p-5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-inter text-[14px] font-600 text-navy">{trade.stock}</p>
                          <span className="font-inter text-[10px] text-muted/50 bg-border/60 px-2 py-0.5">{trade.type}</span>
                        </div>
                        <p className="font-inter text-[11px] text-muted/50">{trade.date}</p>
                      </div>
                      <span className={`font-inter text-[14px] font-600 ${trade.positive ? "text-emerald-600" : "text-red-500"}`}>
                        {trade.pnl}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3 text-[11px] font-inter">
                      <div><span className="text-muted/40">Entry:</span> <span className="text-navy">â‚¹{trade.entry}</span></div>
                      <div><span className="text-muted/40">Exit:</span> <span className="text-navy">{trade.exit.startsWith("E") ? trade.exit : `â‚¹${trade.exit}`}</span></div>
                    </div>
                    <div className="pt-3 border-t border-border flex items-start gap-2">
                      <Lightbulb size={11} className="text-gold mt-0.5 shrink-0" />
                      <p className="font-inter text-[11px] text-muted italic">{trade.lesson}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right â€” Frameworks + Lessons */}
          <div className="space-y-8">
            {/* Frameworks */}
            <section>
              <h2 className="font-cormorant font-500 text-[22px] text-navy mb-5">Frameworks</h2>
              <div className="space-y-3">
                {frameworks.map((f) => (
                  <Link key={f.title} href={f.href} className="luxury-card block p-5 group">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-cormorant font-500 text-[16px] text-navy leading-tight group-hover:text-navy-light transition-colors">{f.title}</h3>
                      <ArrowRight size={12} className="text-navy/20 group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                    </div>
                    <p className="font-inter text-[11px] text-muted leading-relaxed">{f.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Lessons */}
            <section className="bg-navy p-6">
              <h2 className="font-cormorant font-500 text-[20px] text-parchment mb-5">Hard-Learned Lessons</h2>
              <ul className="space-y-4">
                {lessons.map((lesson, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-cormorant text-gold text-[16px] mt-0.5 shrink-0">{i + 1}.</span>
                    <p className="font-inter text-[12px] text-parchment/50 leading-relaxed">{lesson}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


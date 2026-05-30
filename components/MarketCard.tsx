// MarketCard — decorative market data panel shown in the Hero section.
// Numbers are static placeholders; swap in a real API call when live data is needed.

const tickers = [
  { label: "NIFTY 50",  value: "22,530.70", change: "+124.35 (0.55%) ↗", color: "text-teal-600" },
  { label: "SENSEX",    value: "74,332.58", change: "+310.45 (0.42%) ↗", color: "text-teal-600" },
  { label: "USD/INR",   value: "83.12",     change: "-0.15 (0.18%) ↘",   color: "text-red-500"  },
];

const periods = ["1D", "1W", "1M", "3M", "1Y", "YTD"];

// SVG line-path for the decorative chart
const LINE =
  "M0 118 L25 110 L48 114 L70 98 L95 101 L118 90 L145 96 L168 82 L190 88 " +
  "L212 76 L235 72 L258 64 L280 54 L304 62 L328 58 L350 66 L375 55 " +
  "L398 51 L420 43 L445 38 L468 28 L492 34 L520 22";

const FILL = LINE + " L520 160 L0 160 Z";

export default function MarketCard() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-blue-950/5">
      {/* Ticker row */}
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        {tickers.map(({ label, value, change, color }) => (
          <div key={label} className="px-4 first:pl-0 last:pr-0">
            <p className="text-xs font-semibold tracking-wide text-slate-500">{label}</p>
            <p className="mt-2 text-xl font-semibold text-slate-950">{value}</p>
            <p className={`mt-1 text-sm ${color}`}>{change}</p>
          </div>
        ))}
      </div>

      {/* Decorative sparkline */}
      <svg viewBox="0 0 520 160" className="mt-5 h-40 w-full" aria-hidden="true">
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#155EEF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#155EEF" stopOpacity="0"    />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[30, 60, 90, 120].map((y) => (
          <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="#E2E8F0" strokeWidth="1" />
        ))}

        {/* Line */}
        <path d={LINE} fill="none" stroke="#155EEF" strokeWidth="3" strokeLinejoin="round" />
        {/* Fill */}
        <path d={FILL} fill="url(#chartFill)" />
      </svg>

      {/* Period selector */}
      <div className="mt-2 flex justify-between text-xs font-medium text-slate-500">
        {periods.map((p, i) => (
          <button
            key={p}
            className={`rounded-md px-5 py-2 transition-colors ${
              i === 0 ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

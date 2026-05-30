import Link from "next/link";
import { TrendingUp, PieChart, GraduationCap, BarChart3, ArrowRight } from "lucide-react";

// Colour tokens for each focus area
const focusAreas = [
  {
    id:          "technical-analysis",
    title:       "Technical Analysis",
    description: "Charts, patterns, indicators and actionable setups for short-term opportunities.",
    icon:        TrendingUp,
    border:      "border-blue-200 hover:border-blue-400",
    bg:          "bg-blue-50",
    text:        "text-blue-700",
    arrow:       "text-blue-600",
  },
  {
    id:          "equity-research",
    title:       "Equity Research",
    description: "In-depth fundamental research on companies and sectors with clear investment thesis.",
    icon:        PieChart,
    border:      "border-teal-200 hover:border-teal-400",
    bg:          "bg-teal-50",
    text:        "text-teal-700",
    arrow:       "text-teal-600",
  },
  {
    id:          "ca-final-prep",
    title:       "CA Final Prep",
    description: "Structured notes, study plans, revision strategies and exam tips for CA Final aspirants.",
    icon:        GraduationCap,
    border:      "border-amber-200 hover:border-amber-400",
    bg:          "bg-amber-50",
    text:        "text-amber-700",
    arrow:       "text-amber-600",
  },
  {
    id:          "track-my-trades",
    title:       "Track my Trades",
    description: "Real trade journal, performance analytics and learnings to continuously improve.",
    icon:        BarChart3,
    border:      "border-green-200 hover:border-green-400",
    bg:          "bg-green-50",
    text:        "text-green-700",
    arrow:       "text-green-600",
  },
] as const;

export default function FocusAreas() {
  return (
    <section className="px-5 lg:px-10">
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-blue-950/5">
        <h3 className="font-serif text-2xl font-semibold text-slate-950">
          Explore by Focus Area
        </h3>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map(({ id, title, description, icon: Icon, border, bg, text, arrow }) => (
            <Link
              key={id}
              href={`/${id}`}
              className={`group rounded-2xl border ${border} bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10`}
            >
              <div className="flex items-start gap-5">
                {/* Icon bubble */}
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${bg} ${text}`}
                >
                  <Icon size={31} />
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${text}`}>{title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </div>

              <ArrowRight
                className={`ml-auto mt-5 transition group-hover:translate-x-1 ${arrow}`}
                size={22}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

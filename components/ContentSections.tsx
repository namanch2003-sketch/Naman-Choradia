import { TrendingUp, PieChart, GraduationCap, BarChart3, ArrowRight, BookOpen, Target } from "lucide-react";

const focusAreas = [
  {
    id:          "technical-analysis",
    title:       "Technical Analysis",
    description: "Charts, patterns, indicators and actionable setups for short-term opportunities.",
    icon:        TrendingUp,
    bg:          "bg-blue-50",
    text:        "text-blue-700",
  },
  {
    id:          "equity-research",
    title:       "Equity Research",
    description: "In-depth fundamental research on companies and sectors with clear investment thesis.",
    icon:        PieChart,
    bg:          "bg-teal-50",
    text:        "text-teal-700",
  },
  {
    id:          "ca-final-prep",
    title:       "CA Final Prep",
    description: "Structured notes, study plans, revision strategies and exam tips for CA Final aspirants.",
    icon:        GraduationCap,
    bg:          "bg-amber-50",
    text:        "text-amber-700",
  },
  {
    id:          "track-my-trades",
    title:       "Track my Trades",
    description: "Real trade journal, performance analytics and learnings to continuously improve.",
    icon:        BarChart3,
    bg:          "bg-green-50",
    text:        "text-green-700",
  },
] as const;

export default function ContentSections() {
  return (
    <section className="grid gap-5 px-5 pb-10 lg:px-10 xl:grid-cols-2">
      {focusAreas.map(({ id, title, description, icon: Icon, bg, text }) => (
        <div
          key={id}
          id={id}
          className="rounded-2xl border border-slate-100 bg-white p-7 shadow-xl shadow-blue-950/5"
        >
          {/* Header */}
          <div className="flex items-center gap-4">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg} ${text}`}
            >
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
          </div>

          {/* Description */}
          <p className="mt-4 leading-7 text-slate-600">{description}</p>

          {/* Feature list */}
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <BookOpen size={17} className={`${text} mt-0.5 shrink-0`} />
              Curated notes, insights and practical examples.
            </li>
            <li className="flex items-start gap-2">
              <Target size={17} className={`${text} mt-0.5 shrink-0`} />
              Clear frameworks to improve decision-making.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight size={17} className={`${text} mt-0.5 shrink-0`} />
              Regular updates and learnings from real practice.
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}

import { TrendingUp, Search, BookOpen, BarChart2 } from "lucide-react";
import FeatureCard from "./FeatureCard";

const cards = [
  {
    icon: TrendingUp,
    title: "Technical Analysis",
    description:
      "Study charts, identify trends, and make informed decisions using price action and indicators.",
    href: "/technical-analysis",
  },
  {
    icon: Search,
    title: "Equity Research",
    description:
      "In-depth research on companies, sectors, and long-term investment opportunities.",
    href: "/equity-research",
  },
  {
    icon: BookOpen,
    title: "CA Final Prep",
    description:
      "Notes, strategies, and resources for CA Final aspirants — structured for clarity and retention.",
    href: "/ca-final-prep",
  },
  {
    icon: BarChart2,
    title: "Track My Trades",
    description:
      "Track, analyze, and improve your trading performance with detailed logs and frameworks.",
    href: "/track-my-trades",
  },
];

export default function FeatureCards() {
  return (
    <section className="px-6 lg:px-16 xl:px-20 py-16 lg:py-20">
      <div className="mb-10">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted mb-2">
          What I write about
        </p>
        <h2 className="font-playfair font-bold text-navy-DEFAULT text-3xl lg:text-4xl">
          Areas of Focus
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {cards.map((card) => (
          <FeatureCard key={card.href} {...card} />
        ))}
      </div>
    </section>
  );
}

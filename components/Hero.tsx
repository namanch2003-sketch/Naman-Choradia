import Link from "next/link";
import ChartBackground from "./ChartBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center bg-white">
      <ChartBackground />

      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-20 py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Label */}
          <p
            className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-accent-DEFAULT mb-6"
            style={{ color: "#8299c4" }}
          >
            Markets. Knowledge. Discipline.
          </p>

          {/* Headline */}
          <h1
            className="font-playfair font-bold text-navy-DEFAULT mb-6 text-balance leading-[1.1]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Clarity in Analysis.
            <br />
            <span className="text-accent-DEFAULT">Confidence</span> in
            Decisions.
          </h1>

          {/* Subtext */}
          <p className="font-sans text-muted text-lg leading-relaxed mb-10 max-w-lg">
            Insights on markets, detailed research, and a disciplined approach
            to trading and investing — by Naman R C.
          </p>

          {/* CTA */}
          <Link
            href="/technical-analysis"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-DEFAULT text-white font-sans font-medium rounded-lg
              transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:bg-navy-light group text-[15px]"
          >
            Explore Insights
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

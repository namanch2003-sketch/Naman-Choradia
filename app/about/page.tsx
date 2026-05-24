import Footer from "@/components/Footer";
import { Mail, MapPin, BookOpen, TrendingUp } from "lucide-react";
import { LinkedinIcon, TwitterXIcon, GithubIcon } from "@/components/SocialIcons";

export const metadata = {
  title: "About Me — NRC",
  description:
    "Learn about Naman R C — a CA Final aspirant, market analyst, and disciplined trader.",
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/namanrch",
    icon: LinkedinIcon,
    handle: "namanrch",
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/namanrch",
    icon: TwitterXIcon,
    handle: "@namanrch",
  },
  {
    label: "GitHub",
    href: "https://github.com/namanrch",
    icon: GithubIcon,
    handle: "namanrch",
  },
  {
    label: "Email",
    href: "mailto:namanch2003@gmail.com",
    icon: Mail,
    handle: "namanch2003@gmail.com",
  },
];

const highlights = [
  { icon: TrendingUp, text: "Technical analyst — price action & indicators" },
  { icon: BookOpen, text: "CA Final aspirant — SFM & Advanced Audit focus" },
  { icon: MapPin, text: "Based in India" },
];

export default function AboutPage() {
  return (
    <>
      <div className="px-6 lg:px-16 xl:px-20 py-16 lg:py-20 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted mb-3">
            About
          </p>
          <h1 className="font-playfair font-bold text-navy-DEFAULT text-4xl lg:text-5xl mb-4">
            Naman R C
          </h1>
          <p className="font-sans text-muted text-lg">
            Markets. Knowledge. Discipline.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Photo placeholder + social */}
          <div className="lg:col-span-1">
            {/* Photo */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#EEF3FF] to-[#dce8ff] border border-border flex items-center justify-center mb-6 max-w-xs">
              <div className="text-center">
                <span className="font-playfair text-6xl font-bold text-navy-DEFAULT/20 block">
                  NRC
                </span>
                <span className="font-sans text-xs text-muted mt-2 block">
                  Photo coming soon
                </span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.text} className="flex items-center gap-3">
                    <Icon size={15} strokeWidth={1.75} className="text-accent-DEFAULT flex-shrink-0" />
                    <span className="font-sans text-sm text-muted">{h.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="space-y-2" id="contact">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-muted/60 mb-3">
                Connect
              </p>
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-[#EEF3FF] transition-colors duration-200 group"
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.75}
                      className="text-muted group-hover:text-accent-DEFAULT transition-colors duration-200"
                    />
                    <span className="font-sans text-sm text-muted group-hover:text-navy-DEFAULT transition-colors duration-200">
                      {s.handle}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2 space-y-6 font-sans text-[#2d3748] leading-relaxed">
            <p className="text-lg">
              Hi, I&apos;m <strong className="text-navy-DEFAULT font-semibold">Naman R C</strong> — a CA Final
              aspirant with a deep passion for financial markets, equity
              research, and disciplined trading.
            </p>

            <p>
              My journey into markets began with a fascination for how prices
              move — what drives them, what charts reveal, and how the best
              investors in the world approach risk. That curiosity grew into a
              systematic study of technical analysis, fundamental research, and
              trading psychology.
            </p>

            <p>
              Alongside my CA Final preparation, I dedicate significant time to
              analyzing Indian equities — studying charts, reading annual
              reports, and building mental models for how businesses compound
              value over time. I believe that the discipline required to clear CA
              Final is the same discipline that makes a good investor: rigour,
              patience, and intellectual honesty.
            </p>

            <p>
              This site is my public notebook — a place to document my analysis,
              share research, and build a track record of decisions over time. I
              write about Nifty 50 and sector-level technical setups, deep-dive
              equity research on listed Indian companies, CA Final SFM notes and
              prep strategies, and detailed trade logs with entry/exit rationale.
            </p>

            <p>
              I believe in learning in public. Every post here is a commitment
              to clarity of thought — because if you can&apos;t explain it simply,
              you don&apos;t understand it well enough.
            </p>

            <blockquote className="border-l-4 border-accent-DEFAULT pl-5 italic text-muted my-6">
              &ldquo;The stock market is a device for transferring money from the
              impatient to the patient.&rdquo; — Warren Buffett
            </blockquote>

            <p>
              If you&apos;re a fellow CA aspirant, a market enthusiast, or just
              someone who values disciplined thinking — welcome. Let&apos;s grow
              together.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

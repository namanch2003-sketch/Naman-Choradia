import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markets | Naman Choradia — CA | CFA L1 | Equity Analyst",
  description:
    "Live trade journal, portfolio NAV, watchlist, and investment frameworks. Transparency in every trade — real reasoning, real learnings.",
  openGraph: {
    title: "Markets | Naman Choradia",
    description:
      "Real trades, real reasoning, real learnings. Portfolio NAV +24.83% · Avg R:R 1:2.4 · Win rate 62%.",
    url: "https://namanrch.in/markets",
    siteName: "Naman Choradia",
    type: "website",
  },
};

const MarketsContent = dynamic(
  () => import("@/components/pages/MarketsContent"),
  { ssr: false }
);

export default function MarketsPage() {
  return <MarketsContent />;
}

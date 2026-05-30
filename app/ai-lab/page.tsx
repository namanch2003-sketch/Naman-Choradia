import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lab | Naman Choradia — CA | CFA L1 | Equity Analyst",
  description:
    "AI-powered tools and experiments at the intersection of finance, trading, and education — built by Naman Choradia.",
  openGraph: {
    title: "AI Lab | Naman Choradia",
    description:
      "AI-powered tools and experiments at the intersection of finance, trading, and education.",
    url: "https://namanrch.in/ai-lab",
    siteName: "Naman Choradia",
    type: "website",
  },
};

const AILabContent = dynamic(
  () => import("@/components/ai-lab/AILabContent"),
  { ssr: false }
);

export default function AILabPage() {
  return <AILabContent />;
}

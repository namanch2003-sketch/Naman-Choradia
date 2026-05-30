import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Naman Choradia — CA | CFA L1 | Equity Analyst",
  description:
    "Institutional-quality equity research on Indian markets — technical analysis, sector reports, macro themes, and stock ideas by Naman Choradia.",
  openGraph: {
    title: "Research | Naman Choradia",
    description:
      "Equity research on Indian markets — technical, fundamental, and macro. 50+ published studies.",
    url: "https://namanrch.in/research",
    siteName: "Naman Choradia",
    type: "website",
  },
};

const ResearchContent = dynamic(
  () => import("@/components/pages/ResearchContent"),
  { ssr: false }
);

export default function ResearchPage() {
  return <ResearchContent />;
}

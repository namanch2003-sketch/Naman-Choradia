import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal | Naman Choradia — CA | CFA L1 | Equity Analyst",
  description:
    "Writing on markets, CA Final, technology, trading psychology, and the compounding philosophy — by Naman Choradia.",
  openGraph: {
    title: "Journal | Naman Choradia",
    description:
      "Essays on markets, CA, technology, and the compounding philosophy.",
    url: "https://namanrch.in/journal",
    siteName: "Naman Choradia",
    type: "website",
  },
};

const JournalContent = dynamic(
  () => import("@/components/pages/JournalContent"),
  { ssr: false }
);

export default function JournalPage() {
  return <JournalContent />;
}

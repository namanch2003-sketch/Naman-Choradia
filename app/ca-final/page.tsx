import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CA Final Vault | Naman Choradia — CA | CFA L1 | Equity Analyst",
  description:
    "CA Final study vault — structured notes, revision frameworks, and practice questions for FR, AFM, Audit, DT, IDT, IBS. Cleared 1st attempt, Jan 2026.",
  openGraph: {
    title: "CA Final Vault | Naman Choradia",
    description:
      "Structured CA Final notes and frameworks. Cleared 1st attempt, Jan 2026 — 375/600, All India Highest in IBS.",
    url: "https://namanrch.in/ca-final",
    siteName: "Naman Choradia",
    type: "website",
  },
};

const CAFinalContent = dynamic(
  () => import("@/components/pages/CAFinalContent"),
  { ssr: false }
);

export default function CAFinalPage() {
  return <CAFinalContent />;
}

import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Naman Choradia — CA | CFA L1 | Equity Analyst",
  description:
    "CA (1st attempt) · CFA Level I · Associate at KPMG India · Independent equity analyst. Read the story, philosophy, and milestones of Naman Choradia.",
  openGraph: {
    title: "About | Naman Choradia",
    description:
      "CA (1st attempt) · CFA Level I · KPMG India. Documenting the pursuit of mastery through discipline and compounding.",
    url: "https://namanrch.in/about",
    siteName: "Naman Choradia",
    type: "website",
  },
};

const AboutContent = dynamic(
  () => import("@/components/pages/AboutContent"),
  { ssr: false }
);

export default function AboutPage() {
  return <AboutContent />;
}

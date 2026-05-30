import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naman Choradia — Discipline. Research. Compounding.",
  description:
    "CA (1st attempt) · CFA Level I · Associate at KPMG India · Independent equity analyst. Documenting the pursuit of mastery through discipline and compounding.",
  openGraph: {
    title: "Naman Choradia — Discipline. Research. Compounding.",
    description:
      "CA (1st attempt) · CFA Level I · KPMG India. Documenting markets, finance, and continuous learning.",
    url: "https://namanrch.in",
    siteName: "Naman Choradia",
    type: "website",
  },
};

const HomeContent = dynamic(
  () => import("@/components/pages/HomeContent"),
  { ssr: false }
);

export default function HomePage() {
  return <HomeContent />;
}

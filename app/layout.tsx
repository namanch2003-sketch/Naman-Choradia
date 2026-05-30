import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Naman Choradia — Discipline. Research. Compounding.",
    template: "%s | Naman Choradia",
  },
  description:
    "Documenting my journey through CA Final, financial markets, technology, and lifelong learning. Research-driven. Process-oriented. Long-term focused.",
  metadataBase: new URL("https://namanrch.in"),
  keywords: ["CA Final", "equity research", "technical analysis", "trading journal", "financial markets", "compounding"],
  authors: [{ name: "Naman Choradia", url: "https://namanrch.in" }],
  creator: "Naman Choradia",
  openGraph: {
    title: "Naman Choradia — Discipline. Research. Compounding.",
    description:
      "Documenting the pursuit of mastery through curiosity, discipline, and compounding.",
    url: "https://namanrch.in",
    siteName: "Naman Choradia",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Choradia",
    description: "Discipline. Research. Compounding.",
    creator: "@namanchoradia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased bg-parchment text-navy overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

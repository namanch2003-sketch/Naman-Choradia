import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NRC — Naman R C | Markets. Knowledge. Discipline.",
  description:
    "Insights on markets, detailed equity research, technical analysis, CA Final prep, and disciplined trading by Naman R C.",
  metadataBase: new URL("https://namanrch.in"),
  openGraph: {
    title: "NRC — Naman R C",
    description:
      "Clarity in Analysis. Confidence in Decisions. Insights on markets and investing.",
    url: "https://namanrch.in",
    siteName: "NRC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="bg-white text-navy-DEFAULT antialiased font-sans">
        <div className="flex min-h-screen">
          {/* Fixed sidebar — desktop only */}
          <Sidebar />

          {/* Main content area */}
          <div className="flex-1 lg:ml-sidebar flex flex-col min-h-screen">
            <TopNav />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

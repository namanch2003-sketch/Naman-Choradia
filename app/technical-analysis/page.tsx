import { TrendingUp } from "lucide-react";
import CategoryPageLayout from "@/components/CategoryPageLayout";
import { getPostsByCategory } from "@/lib/posts";

export const metadata = {
  title: "Technical Analysis — NRC",
  description:
    "Chart analysis, trend studies, and technical setups on Nifty 50, BankNifty, and Indian equities.",
};

export default function TechnicalAnalysisPage() {
  const posts = getPostsByCategory("technical-analysis");

  return (
    <CategoryPageLayout
      title="Technical Analysis"
      description="Chart studies, trend analysis, key support/resistance levels, and high-probability setups on Indian indices and equities."
      icon={TrendingUp}
      posts={posts}
    />
  );
}

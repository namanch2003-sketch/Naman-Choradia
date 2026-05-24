import { Search } from "lucide-react";
import CategoryPageLayout from "@/components/CategoryPageLayout";
import { getPostsByCategory } from "@/lib/posts";

export const metadata = {
  title: "Equity Research — NRC",
  description:
    "In-depth fundamental analysis of Indian listed companies, valuations, moats, and growth outlooks.",
};

export default function EquityResearchPage() {
  const posts = getPostsByCategory("equity-research");

  return (
    <CategoryPageLayout
      title="Equity Research"
      description="Deep-dive fundamental analysis of Indian companies — valuations, competitive moats, growth drivers, and long-term investment thesis."
      icon={Search}
      posts={posts}
    />
  );
}

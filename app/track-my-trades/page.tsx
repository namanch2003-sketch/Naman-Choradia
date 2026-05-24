import { BarChart2 } from "lucide-react";
import CategoryPageLayout from "@/components/CategoryPageLayout";
import { getPostsByCategory } from "@/lib/posts";

export const metadata = {
  title: "Track My Trades — NRC",
  description:
    "Detailed trade logs, entry/exit rationale, risk management, and trading frameworks.",
};

export default function TrackMyTradesPage() {
  const posts = getPostsByCategory("track-my-trades");

  return (
    <CategoryPageLayout
      title="Track My Trades"
      description="Transparent trade logs with entry, exit, and rationale — plus the framework and risk management principles behind every decision."
      icon={BarChart2}
      posts={posts}
    />
  );
}

import { BookOpen } from "lucide-react";
import CategoryPageLayout from "@/components/CategoryPageLayout";
import { getPostsByCategory } from "@/lib/posts";

export const metadata = {
  title: "CA Final Prep — NRC",
  description:
    "Notes, strategies, and resources for CA Final aspirants covering SFM, Advanced Audit, and more.",
};

export default function CaFinalPrepPage() {
  const posts = getPostsByCategory("ca-final-prep");

  return (
    <CategoryPageLayout
      title="CA Final Prep"
      description="Structured notes, study strategies, and resources for CA Final aspirants — focused on clarity, retention, and exam performance."
      icon={BookOpen}
      posts={posts}
    />
  );
}

import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import LatestInsights from "@/components/LatestInsights";
import ContentSections from "@/components/ContentSections";
import { getAllPosts } from "@/lib/posts";

// This is a Server Component — reads posts at build time, zero client bundle cost.
export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <FocusAreas />
      <LatestInsights posts={posts} />
      <ContentSections />
    </>
  );
}

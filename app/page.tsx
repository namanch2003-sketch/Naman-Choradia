import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import PostCard from "@/components/PostCard";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 6);

  return (
    <>
      <Hero />
      <FeatureCards />

      {/* Recent Posts */}
      <section className="px-6 lg:px-16 xl:px-20 py-16 lg:py-20 bg-[#FAFBFF]">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted mb-2">
              Latest writing
            </p>
            <h2 className="font-playfair font-bold text-navy-DEFAULT text-3xl lg:text-4xl">
              Recent Posts
            </h2>
          </div>
          <Link
            href="/technical-analysis"
            className="font-sans text-sm font-medium text-accent-DEFAULT hover:text-accent-dark transition-colors duration-200 hidden sm:flex items-center gap-1"
          >
            View all <span>→</span>
          </Link>
        </div>

        {recentPosts.length === 0 ? (
          <p className="font-sans text-muted">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentPosts.map((post) => (
              <PostCard key={`${post.category}-${post.slug}`} post={post} showCategory={true} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

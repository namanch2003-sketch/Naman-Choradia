import PostCard from "./PostCard";
import Footer from "./Footer";
import { PostMeta } from "@/lib/posts";
import { LucideIcon } from "lucide-react";

interface CategoryPageLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  posts: PostMeta[];
}

export default function CategoryPageLayout({
  title,
  description,
  icon: Icon,
  posts,
}: CategoryPageLayoutProps) {
  return (
    <>
      <div className="px-6 lg:px-16 xl:px-20 py-16 lg:py-20">
        {/* Page header */}
        <div className="flex items-start gap-5 mb-12 pb-10 border-b border-border">
          <div className="w-12 h-12 rounded-xl bg-[#EEF3FF] flex items-center justify-center flex-shrink-0 mt-1">
            <Icon size={22} strokeWidth={1.75} className="text-accent-DEFAULT" />
          </div>
          <div>
            <h1 className="font-playfair font-bold text-navy-DEFAULT text-4xl lg:text-5xl mb-3 leading-tight">
              {title}
            </h1>
            <p className="font-sans text-muted text-lg max-w-xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Posts grid */}
        {posts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-sans text-muted text-lg">
              No posts yet. Check back soon.
            </p>
          </div>
        ) : (
          <>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted mb-6">
              {posts.length} {posts.length === 1 ? "post" : "posts"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  showCategory={false}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

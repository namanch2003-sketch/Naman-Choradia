import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export const CATEGORIES = [
  "technical-analysis",
  "equity-research",
  "ca-final-prep",
  "track-my-trades",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  category: string;
  slug: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function readPostFile(category: string, filename: string): PostMeta | null {
  const fullPath = path.join(contentDir, category, filename);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title ?? "Untitled",
    date: data.date ?? "2025-01-01",
    description: data.description ?? "",
    category: data.category ?? category,
    slug: data.slug ?? filename.replace(/\.md$/, ""),
  };
}

export function getAllPosts(): PostMeta[] {
  const posts: PostMeta[] = [];

  for (const category of CATEGORIES) {
    const categoryDir = path.join(contentDir, category);
    if (!fs.existsSync(categoryDir)) continue;

    const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const post = readPostFile(category, file);
      if (post) posts.push(post);
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsByCategory(category: string): PostMeta[] {
  const categoryDir = path.join(contentDir, category);
  if (!fs.existsSync(categoryDir)) return [];

  const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".md"));
  const posts: PostMeta[] = [];

  for (const file of files) {
    const post = readPostFile(category, file);
    if (post) posts.push(post);
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  category: string,
  slug: string
): Promise<Post | null> {
  const fullPath = path.join(contentDir, category, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title ?? "Untitled",
    date: data.date ?? "2025-01-01",
    description: data.description ?? "",
    category: data.category ?? category,
    slug: data.slug ?? slug,
    contentHtml,
  };
}

export function getAllPostSlugs(): { category: string; slug: string }[] {
  const slugs: { category: string; slug: string }[] = [];

  for (const category of CATEGORIES) {
    const categoryDir = path.join(contentDir, category);
    if (!fs.existsSync(categoryDir)) continue;

    const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      slugs.push({ category, slug: file.replace(/\.md$/, "") });
    }
  }

  return slugs;
}

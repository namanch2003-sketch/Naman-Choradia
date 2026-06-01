import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export interface Post {
  slug: string
  category: string
  title: string
  date: string
  description: string
  readTime?: string
  content?: string
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

function getCategoryDir(category: string): string {
  return path.join(contentDirectory, category)
}

function getCategories(): string[] {
  if (!fs.existsSync(contentDirectory)) return []
  return fs.readdirSync(contentDirectory).filter((name) => {
    return fs.statSync(path.join(contentDirectory, name)).isDirectory()
  })
}

export function getPostsByCategory(category: string): Post[] {
  const dir = getCategoryDir(category)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))

  const posts: Post[] = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const fullPath = path.join(dir, filename)
    const raw = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(raw)

    return {
      slug,
      category,
      title: data.title ?? slug,
      date: data.date ?? '',
      description: data.description ?? '',
      readTime: estimateReadTime(content),
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPosts(): Post[] {
  const categories = getCategories()
  const all = categories.flatMap((cat) => getPostsByCategory(cat))
  return all.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(
  category: string,
  slug: string
): Promise<Post | null> {
  const fullPath = path.join(getCategoryDir(category), `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  const processed = await remark().use(remarkHtml).process(content)
  const html = processed.toString()

  return {
    slug,
    category,
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    readTime: estimateReadTime(content),
    content: html,
  }
}

export function getAllPostParams(): { category: string; slug: string }[] {
  const categories = getCategories()
  return categories.flatMap((category) => {
    const dir = getCategoryDir(category)
    if (!fs.existsSync(dir)) return []
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
    return files.map((f) => ({ category, slug: f.replace(/\.md$/, '') }))
  })
}

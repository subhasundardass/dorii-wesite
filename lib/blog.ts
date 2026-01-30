import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogMeta = {
  title: string;
  description: string;
  date?: string;
  keywords?: string[];
};

export type BlogPost = {
  slug: string;
  meta: BlogMeta;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

/* -----------------------------------------------------
   Get all blog slugs (STATIC SAFE)
----------------------------------------------------- */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

/* -----------------------------------------------------
   Get single post by slug
----------------------------------------------------- */
export function getPostBySlug(slug: string): BlogPost | null {
  if (!slug) return null;

  const fullPath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    console.error(`Markdown file not found: ${fullPath}`);
    return null;
  }

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { content, data } = matter(fileContent);

  return {
    slug,
    meta: {
      title: data.title ?? "Dorii Software Blog",
      description:
        data.description ??
        "Business automation, ERP, inventory and software insights by Dorii Software.",
      date: data.date ?? "",
      keywords: data.keywords ?? [],
    },
    content,
  };
}

/* -----------------------------------------------------
   Get all posts (for blog listing)
----------------------------------------------------- */
export function getAllPosts(): BlogPost[] {
  return getAllSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter(Boolean) as BlogPost[];
}

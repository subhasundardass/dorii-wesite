import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogMeta = {
  title: string;
  description: string;
  date?: string;
  keywords?: string[];
  showOnHome?: boolean;
  isActive?: boolean;
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
      showOnHome:
        data.showOnHome === true || data.showOnHome === "true" ? true : false,
      isActive:
        data.isActive === true || data.isActive === "true" ? true : false,
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

export function getAllActivePosts(): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.meta.isActive && isPublished(post.meta.date))
    .sort((a, b) => {
      const timeA = Date.parse(a.meta.date || "") || 0;
      const timeB = Date.parse(b.meta.date || "") || 0;
      return timeB - timeA; // newest first
    });
}

/* -----------------------------------------------------
   Get showOnHome
----------------------------------------------------- */
export function getHomePosts(limit?: number): BlogPost[] {
  const allPosts = getAllPosts();

  // Filter featured posts
  const featuredPosts = allPosts
    .filter(
      (post) =>
        post.meta.showOnHome &&
        post.meta.isActive &&
        isPublished(post.meta.date),
    )
    .sort((a, b) => {
      const timeA = Date.parse(a.meta.date || "") || 0;
      const timeB = Date.parse(b.meta.date || "") || 0;
      return timeB - timeA; // newest first
    });

  // Apply limit
  if (limit && limit > 0) {
    return featuredPosts.slice(0, limit);
  }

  return featuredPosts;
}

function isPublished(date?: string): boolean {
  if (!date) return true; // no date = publish immediately

  const publishTime = Date.parse(date);
  if (isNaN(publishTime)) return true; // invalid date = fail open

  const now = new Date();
  now.setHours(23, 59, 59, 999); // include whole day

  return publishTime <= now.getTime();
}

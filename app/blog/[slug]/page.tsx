import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export const dynamicParams = false;

/* ----------------------------------------
   Static generation for all blog pages
---------------------------------------- */
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ----------------------------------------
   SEO metadata (Next.js 16 safe)
---------------------------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog | Dorii Software",
      description:
        "Business automation, ERP, inventory and warehouse insights by Dorii Software.",
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

/* ----------------------------------------
   Blog page component
---------------------------------------- */
export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="prose dark:prose-invert max-w-4xl mx-auto px-6 py-16">
      <h1>{post.meta.title}</h1>

      {post.meta.date && (
        <p className="text-sm text-muted-foreground">{post.meta.date}</p>
      )}

      <MDXRemote source={post.content} />
    </article>
  );
}

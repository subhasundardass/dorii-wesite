import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export const dynamicParams = false;

/* ----------------------------------------
   Static params
---------------------------------------- */
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }));
}

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
      keywords: [
        "Dorii Software",
        "ERP Software",
        "Business Automation",
        "Inventory Software",
        "Warehouse Management",
      ],
      alternates: {
        canonical: `/blog`,
      },
      openGraph: {
        title: "Blog | Dorii Software",
        description:
          "Business automation, ERP, inventory and warehouse insights by Dorii Software.",
        url: "https://dorii.in/blog",
        siteName: "Dorii Software",
        images: [
          {
            url: "https://dorii.in/og/about-dorii.png",
            width: 1200,
            height: 630,
            alt: "Dorii Software – ERP & Business Automation Company",
          },
        ],
        locale: "en_IN",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: "Blog | Dorii Software",
        description:
          "Business automation, ERP, inventory and warehouse insights by Dorii Software.",
        images: ["https://dorii.in/og/about-dorii.png"],
      },
    };
  }

  const ogImage = post.meta.image ?? "https://dorii.in/og/about-dorii.png";

  // Dynamically generate About-styled metadata from blog post
  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `https://dorii.in/blog/${slug}`,
      siteName: "Dorii Software",
      images: [
        {
          url: ogImage, // Always using About-style OG image
          width: 1200,
          height: 630,
          alt: `${post.meta.title} | Dorii Software`,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
      images: [ogImage], // About-style Twitter image
    },
  };
}

/* ----------------------------------------
   Blog page
---------------------------------------- */
export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ REQUIRED
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article
      className="
        mt-8 
        max-w-(--breakpoint-xl) 
        mx-auto 
        px-6 
        py-12 
        xs:py-20
        prose
        prose-neutral
        dark:prose-invert
        prose-h2:font-bold
        prose-h2:mt-12
        prose-h2:mb-6
        md:text-[17px]
        lg:text-[18px]
        
      "
    >
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight pt-4 mb-4">
        {post.meta.title}
      </h1>

      {post.meta.date && (
        <p className="text-md text-muted-foreground mb-12">
          {post.meta.description}
        </p>
      )}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              {children}
            </a>
          ),
          h2: ({ children }) => (
            <h2 className="my-4 text-2xl font-bold">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="my-4 text-xl font-semibold">{children}</h3>
          ),
          /* ---------------- Paragraph ---------------- */
          p: ({ children }) => (
            <p className="my-4 leading-7 text-subtle">{children}</p>
          ),

          /* ---------------- Lists ---------------- */
          ul: ({ children }) => (
            <ul className="my-6 ml-6 list-disc space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-6 ml-6 list-decimal space-y-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="relative my-2 pl-6 list-none">
              {/* Custom bullet */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-800"></span>
              <span>{children}</span>
            </li>
          ),

          /* ---------------- Blockquote ---------------- */
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-blue-500 pl-4 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
          /* ---------------- Pre ---------------- */
          pre: ({ children }) => (
            <pre className="not-prose bg-slate-900 text-slate-100 rounded-xl p-5 overflow-x-auto">
              {children}
            </pre>
          ),
          /* ---------------- Code ---------------- */
          code: ({ className, children }) => {
            const isBlock = className?.startsWith("language-");

            return isBlock ? (
              <pre className="my-4 rounded bg-gray-900 p-4 overflow-x-auto text-sm text-gray-100">
                <code className={className}>{children}</code>
              </pre>
            ) : (
              <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-red-600">
                {children}
              </code>
            );
          },

          /* ---------------- Horizontal rule ---------------- */
          hr: () => <hr className="my-8 border-muted" />,

          /* ---------------- Tables (remark-gfm) ---------------- */
          table: ({ children }) => (
            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse border border-muted">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted">{children}</thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-b border-muted">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="border border-muted px-4 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-muted px-4 py-2">{children}</td>
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

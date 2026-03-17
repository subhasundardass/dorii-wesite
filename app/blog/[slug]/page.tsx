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

  const ogImage = post.meta.image ?? "/og/about-dorii.png";

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
      url: `/blog/${slug}`,
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
    <article className="relative">
      {/* ---------------- Hero / Title Section ---------------- */}
      <header className="relative overflow-hidden bg-[#f5f3ee] dark:bg-[#141416] px-6 pt-28 pb-16 sm:px-12 sm:pt-40 sm:pb-24">
        {/* Background accent blob */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-amber-100/50 blur-2xl dark:bg-amber-900/10" />

        <div className="relative mx-auto max-w-5xl">
          {/* Eyebrow line */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Article
            </span>
          </div>

          <h1 className="font-['Playfair_Display',Georgia,serif] text-4xl font-black leading-[1.1] tracking-tight text-gray-950 dark:text-gray-50 sm:text-5xl md:text-6xl lg:text-7xl">
            {post.meta.title}
          </h1>

          {post.meta.description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400 sm:text-xl">
              {post.meta.description}
            </p>
          )}

          {/* Meta row */}
          {/* <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-gray-200 pt-6 dark:border-gray-700/60">
            {post.meta.date && (
              <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
                {post.meta.date}
              </span>
            )}
            <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          </div> */}
        </div>
      </header>

      {/* ── Divider rule ── */}
      {/* <div className="mx-auto max-w-5xl px-6 sm:px-0">
        <div className="h-px bg-linear-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700/50" />
      </div> */}
      {/* ---------------- Markdown Content ---------------- */}
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-0 sm:py-10">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            /* ── Links ── */
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative font-semibold text-blue-600 underline decoration-blue-300 underline-offset-2 transition-colors hover:text-blue-800 hover:decoration-blue-500 dark:text-blue-400 dark:decoration-blue-600 dark:hover:text-blue-300"
              >
                {children}
              </a>
            ),

            /* ── H2 ── */
            h2: ({ children }) => (
              <h2 className="font-['Playfair_Display',Georgia,serif] mt-16 mb-6 text-3xl font-bold leading-snug text-gray-900 dark:text-gray-100 sm:text-4xl">
                {children}
              </h2>
            ),

            /* ── H3 ── */
            h3: ({ children }) => (
              <h3 className="font-['Playfair_Display',Georgia,serif] mt-10 mb-4 text-xl font-bold text-gray-800 dark:text-gray-200 sm:text-2xl">
                {children}
              </h3>
            ),

            p: ({ children }) => (
              <p className="my-5 text-[17px] leading-[1.85] text-gray-700 dark:text-gray-300 sm:text-[18px]">
                {children}
              </p>
            ),
            /* ── Lists ── */
            ul: ({ children }) => (
              <ul className="my-6 space-y-2 pl-1">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="my-6 space-y-2 pl-1 [counter-reset:list]">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="flex gap-3 text-[17px] leading-relaxed text-gray-700 dark:text-gray-300 before:mt-[0.55em] before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-blue-500 before:content-['']">
                <span>{children}</span>
              </li>
            ),
            /* ── Blockquote ── */
            blockquote: ({ children }) => (
              <blockquote className="relative my-10 rounded-r-xl border-l-[3px] border-blue-500 bg-gradient-to-r from-blue-50 to-transparent py-5 pl-6 pr-4 italic text-gray-600 dark:from-blue-900/20 dark:to-transparent dark:text-gray-300">
                <span className="pointer-events-none absolute -top-4 -left-1 font-['Georgia'] text-7xl leading-none text-blue-200 dark:text-blue-800/50">
                  "
                </span>
                {children}
              </blockquote>
            ),

            /* ── Code blocks ── */
            pre: ({ children }) => (
              <pre className="not-prose my-8 overflow-x-auto rounded-2xl bg-[#0f1117] p-6 text-sm leading-relaxed text-gray-100 shadow-xl ring-1 ring-white/5">
                {children}
              </pre>
            ),
            code: ({ className, children }) => {
              const isBlock = className?.startsWith("language-");
              return isBlock ? (
                <pre className="my-4 rounded-lg bg-gray-900 p-4 overflow-x-auto text-sm text-gray-100">
                  <code className={className}>{children}</code>
                </pre>
              ) : (
                <code className="rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-[0.85em] text-rose-600 dark:bg-gray-800 dark:text-rose-400">
                  {children}
                </code>
              );
            },

            hr: () => (
              <div className="my-14 flex items-center justify-center gap-4">
                <span className="h-px flex-1 bg-gray-200 dark:bg-gray-700/60" />
                <span className="flex gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className="h-1 w-1 rounded-full bg-blue-400 dark:bg-blue-600"
                    />
                  ))}
                </span>
                <span className="h-px flex-1 bg-gray-200 dark:bg-gray-700/60" />
              </div>
            ),

            /* ── Table ── */
            table: ({ children }) => (
              <div className="my-10 overflow-x-auto rounded-xl shadow-sm ring-1 ring-gray-200 dark:ring-gray-700/60">
                <table className="w-full border-collapse text-sm">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-gray-50 dark:bg-gray-800/60">
                {children}
              </thead>
            ),
            tbody: ({ children }) => (
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700/40">
                {children}
              </tbody>
            ),
            tr: ({ children }) => (
              <tr className="transition-colors hover:bg-blue-50/40 dark:hover:bg-blue-900/10">
                {children}
              </tr>
            ),
            th: ({ children }) => (
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-5 py-3 text-gray-700 dark:text-gray-300">
                {children}
              </td>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

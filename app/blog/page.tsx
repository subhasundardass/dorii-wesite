// app/blog/page.tsx
import Link from "next/link";
import { getAllActivePosts, getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Dorii Software",
  description:
    "Explore our latest insights on ERP, business automation, inventory, warehouse, and transport management software solutions.",
  alternates: { canonical: "https://www.dorii.in/blog" },
  openGraph: {
    type: "website",
    title: "Dorii Software Blog | ERP & Business Automation Insights",
    description:
      "Read expert articles on ERP, inventory, warehouse, transport management, and business automation software by Dorii Software.",
    url: "https://www.dorii.in/blog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dorii Software Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dorii Software Blog | ERP & Business Automation Insights",
    description:
      "Expert insights on ERP, inventory, warehouse, transport management, and business automation software.",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  const posts = getAllActivePosts();

  if (!posts.length) {
    return (
      <div className="mt-8 max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="mt-4 text-muted-foreground">
          We are updating our insights. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <main className="mt-8 max-w-(--breakpoint-xl) mx-auto w-full py-16 xs:py-24 px-6">
      <section aria-labelledby="blogs-heading" className="text-center">
        <h1 className="text-4xl xs:text-5xl font-bold text-center mb-12">
          Insights & Articles
        </h1>

        {/* SEO-friendly description */}
        <p className="mt-6  max-w-[100ch] sm:mx-auto sm:text-center">
          Stay up-to-date with Dorii Software’s insights on ERP, inventory,
          warehouse, transport management, and business automation software.
          Learn best practices, trends, and tips to improve your operations.
        </p>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border shadow-sm hover:shadow-md transition p-6 bg-background text-left"
            >
              <div>
                <h2 className="text-2xl font-semibold leading-snug hover:text-primary transition">
                  <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
                </h2>

                {post.meta.date && (
                  <time
                    className="block mt-2 text-sm text-muted-foreground"
                    dateTime={post.meta.date}
                  >
                    {new Date(post.meta.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}

                {post.meta.description && (
                  <p className="mt-4 text-muted-foreground">
                    {post.meta.description}
                  </p>
                )}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center text-primary font-medium hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>

        {/* JSON-LD for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Dorii Software Blog",
              url: "https://www.dorii.in/blog",
              description:
                "Latest insights on ERP, inventory, warehouse, transport management, and business automation software solutions.",
              publisher: {
                "@type": "Organization",
                name: "Dorii Software",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.dorii.in/og-image.png",
                },
              },
              blogPost: posts.map((post) => ({
                "@type": "BlogPosting",
                headline: post.meta.title,
                datePublished: post.meta.date,
                description: post.meta.description,
                url: `https://www.dorii.in/blog/${post.slug}`,
              })),
            }),
          }}
        />
      </section>
    </main>
  );
}

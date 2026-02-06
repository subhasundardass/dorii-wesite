import Link from "next/link";
import { getHomePosts } from "@/lib/blog";

export default function Blogs() {
  const posts = getHomePosts(3);
  console.log(posts);

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Insights & Articles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="cursor-pointer group p-6 border rounded-lg hover:shadow-lg hover:-translate-y-1 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.meta.title}</h2>
            <p className="dark:text-muted-foreground">
              {post.meta.description}
            </p>
            {post.meta.date && (
              <p className="text-sm text-gray-400 mt-2">{post.meta.date}</p>
            )}
            <span className="mt-4 inline-flex items-center text-sm text-primary">
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}

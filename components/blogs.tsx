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
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.meta.title}</h2>
            <p className="text-gray-600">{post.meta.description}</p>
            {post.meta.date && (
              <p className="text-sm text-gray-400 mt-2">{post.meta.date}</p>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}

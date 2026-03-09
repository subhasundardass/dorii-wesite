export default function RelatedArticles() {
  const articles = [
    {
      category: "Foundations",
      title: "Understanding Distributed Systems",
      description:
        "A primer on the core concepts behind distributed architecture.",
      href: "#",
    },
    {
      category: "Architecture",
      title: "Event Sourcing in Practice",
      description:
        "How to implement event sourcing without overcomplicating your stack.",
      href: "#",
    },
    {
      category: "Advanced",
      title: "Optimising for P99 Latency",
      description:
        "Techniques for reducing tail latency in high-throughput services.",
      href: "#",
    },
    {
      category: "Patterns",
      title: "The Strangler Fig Pattern",
      description:
        "Migrating legacy systems incrementally without a big bang rewrite.",
      href: "#",
    },
  ];

  return (
    <aside className="hidden xl:block w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
      <div className="px-5 py-5">
        <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
          Related Articles
        </p>
        <div className="flex flex-col">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.href}
              className="group space-y-1 py-4 border-b border-gray-200 dark:border-gray-700 last:border-0 hover:opacity-75 transition-opacity"
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {article.category}
              </p>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {article.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

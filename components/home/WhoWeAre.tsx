export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white dark:bg-slate-950"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT PANEL */}
        <div className="relative order-2 lg:order-1">
          <div className="relative bg-linear-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

            {/* TEAM CARDS */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white dark:bg-slate-900 rounded-2xl px-4 py-3 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Business Discovery
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    We understand your workflows, operations, and challenges.
                  </p>
                </div>
                <span className="rounded-xl px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400">
                  Planning
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white dark:bg-slate-900 rounded-2xl px-4 py-3 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    System Architecture
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Our engineers design a scalable system tailored to your
                    business.
                  </p>
                </div>
                <span className="rounded-xl px-2 py-1 text-xs bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-400">
                  Design
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white dark:bg-slate-900 rounded-2xl px-4 py-3 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Agile Development
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Features are developed in structured sprints with regular
                    demos.
                  </p>
                </div>
                <span className="rounded-xl px-2 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400">
                  Development
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white dark:bg-slate-900 rounded-2xl px-4 py-3 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Testing & Deployment
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    We test the system with your team before launching it live.
                  </p>
                </div>
                <span className="rounded-xl px-2 py-1 text-xs bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400">
                  QA
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white dark:bg-slate-900 rounded-2xl px-4 py-3 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                  5
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Continuous Support
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    We continuously improve and support your system as your
                    business grows.
                  </p>
                </div>
                <span className="rounded-xl px-2 py-1 text-xs bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400">
                  Support
                </span>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-800">
                <p className="text-2xl font-extrabold text-brand-600">50+</p>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold mt-1">
                  Projects Delivered
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-800">
                <p className="text-2xl font-extrabold text-brand-600">15+</p>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold mt-1">
                  Years Expertise
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-800">
                <p className="text-2xl font-extrabold text-brand-600">10+</p>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold mt-1">
                  States Served
                </p>
              </div>
            </div>

            <div className="mt-5 grid sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4">
                <div className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center mb-3">
                  <svg
                    className="w-4 h-4 text-brand-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-ink text-sm mb-1">
                  Engineers First
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  You talk directly to the people building your system. No
                  middlemen.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4">
                <div className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center mb-3">
                  <svg
                    className="w-4 h-4 text-brand-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-ink text-sm mb-1">
                  Domain Before Code
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  We learn your business operations before opening an IDE.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4">
                <div className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center mb-3">
                  <svg
                    className="w-4 h-4 text-brand-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-ink text-sm mb-1">
                  Long-term Partners
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  98% of clients return for the next project. That's the only
                  metric we care about.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="order-1 lg:order-2">
          <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-3">
            Who We Are
          </p>

          <h2
            id="about-heading"
            className="text-3xl lg:text-4xl font-extrabold text-ink leading-tight mb-5"
          >
            <strong>Custom Software Development Company </strong>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Trusted Across India &amp; Internationally
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Dorii Software is a{" "}
            <strong>
              DPIIT-recognized custom software development company
            </strong>{" "}
            headquartered in India. We were founded by engineers who were
            frustrated with one reality: businesses spending lakhs on ERP
            systems that didn't fit how they actually worked. Generic
            off-the-shelf software. Clunky interfaces. Vendors who disappeared
            after go-live.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            So we built something different. We are a{" "}
            <strong>product-minded software engineering company</strong> that
            goes deep into your domain before writing a single line of code. Our
            engineers — not project managers — sit with your operations team,
            map every workflow, and design systems that reflect <em>your</em>{" "}
            business logic. Not a template. Not a fork of someone else's
            software.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are <strong>Govt. MSME Certified</strong> and have delivered{" "}
            <strong>enterprise software solutions</strong> for clients across
            West Bengal, Delhi NCR, Maharashtra, Rajasthan, Gujarat, Tamil Nadu,
            and internationally in the{" "}
            <strong>UAE, UK, and Southeast Asia</strong>. Our delivery model is
            fully remote-first with structured sprint-based communication —
            distance is never a barrier.
          </p>

          <div className="mt-6">
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700  font-semibold py-3 rounded-xl transition"
            >
              Learn More About Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function WhyChooseDorii() {
  const reasons = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="8" y="4" width="24" height="30" rx="4" fill="#BFDBFE" />
          <rect x="12" y="10" width="16" height="3" rx="1.5" fill="#93C5FD" />
          <rect x="12" y="16" width="12" height="3" rx="1.5" fill="#93C5FD" />
          <rect x="12" y="22" width="14" height="3" rx="1.5" fill="#93C5FD" />
          <circle cx="30" cy="30" r="8" fill="#3B82F6" />
          <path
            d="M27 30 L29.5 32.5 L34 27"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "You Own Everything",
      desc: "When we deliver your software, you get full source code ownership. No lock-in, no licensing fees — it's yours completely. You can host it, modify it, or hand it to any developer in the future.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle cx="14" cy="14" r="7" fill="#BFDBFE" />
          <circle cx="14" cy="14" r="3" fill="#3B82F6" />
          <circle cx="28" cy="26" r="7" fill="#DBEAFE" />
          <circle cx="28" cy="26" r="3" fill="#60A5FA" />
          <line
            x1="18"
            y1="17"
            x2="24"
            y2="23"
            stroke="#93C5FD"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Direct Communication",
      desc: "You talk directly to the developer building your software — not a sales rep, not a project coordinator. No telephone game, no miscommunication, no middlemen between you and the team.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle cx="20" cy="20" r="14" fill="#BFDBFE" />
          <path
            d="M20 8 L20 20 L28 26"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="3" fill="#3B82F6" />
          <circle
            cx="20"
            cy="20"
            r="12"
            stroke="#93C5FD"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 3"
          />
        </svg>
      ),
      title: "Clear Timelines, No Surprises",
      desc: "Before we start, you get a written timeline and milestone plan. We work in structured sprints so you always know what's being built, what's done, and when delivery is expected.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="6" y="10" width="28" height="20" rx="4" fill="#BFDBFE" />
          <rect x="6" y="10" width="28" height="8" rx="4" fill="#93C5FD" />
          <rect x="6" y="14" width="28" height="4" fill="#93C5FD" />
          <rect x="10" y="22" width="8" height="4" rx="1.5" fill="#DBEAFE" />
          <rect x="22" y="22" width="8" height="4" rx="1.5" fill="#DBEAFE" />
          <circle cx="32" cy="10" r="6" fill="#3B82F6" />
          <path
            d="M29 10 L31.5 12.5 L35.5 7.5"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Fixed Price, No Hidden Costs",
      desc: "We quote clearly before we start. No surprise invoices, no scope creep billing, no 'that's extra' halfway through. What we agree on paper is what you pay — nothing more.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="14" width="32" height="18" rx="4" fill="#BFDBFE" />
          <rect x="10" y="8" width="8" height="8" rx="2" fill="#93C5FD" />
          <rect x="22" y="8" width="8" height="8" rx="2" fill="#93C5FD" />
          <line
            x1="10"
            y1="24"
            x2="30"
            y2="24"
            stroke="#DBEAFE"
            strokeWidth="1.5"
          />
          <line
            x1="10"
            y1="28"
            x2="22"
            y2="28"
            stroke="#DBEAFE"
            strokeWidth="1.5"
          />
          <circle cx="30" cy="28" r="5" fill="#3B82F6" />
          <line
            x1="30"
            y1="25"
            x2="30"
            y2="31"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="27"
            y1="28"
            x2="33"
            y2="28"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Post-Delivery Support",
      desc: "We don't disappear after launch. Bug fixes, small changes, performance issues, and user queries — we stay available after delivery because we know software needs ongoing care.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <path
            d="M20 4 L28 10 L28 22 C28 30 20 34 20 34 C20 34 12 30 12 22 L12 10 Z"
            fill="#BFDBFE"
          />
          <path
            d="M20 9 L25 13 L25 22 C25 27 20 30 20 30 C20 30 15 27 15 22 L15 13 Z"
            fill="#DBEAFE"
          />
          <path
            d="M17 21 L19.5 23.5 L24 18"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Modern, Secure Technology",
      desc: "We build on Python, PostgreSQL, React, Angular, and Docker — the same stack used by serious engineering teams globally. Your software is fast, secure, and built to last.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <path
            d="M20 4 L36 12 L36 24 C36 32 28 38 20 38 C12 38 4 32 4 24 L4 12 Z"
            fill="#BFDBFE"
            opacity="0.5"
          />
          <circle cx="20" cy="16" r="6" fill="#BFDBFE" />
          <circle cx="20" cy="16" r="3" fill="#3B82F6" />
          <rect x="12" y="26" width="16" height="6" rx="3" fill="#DBEAFE" />
          <line
            x1="16"
            y1="22"
            x2="14"
            y2="26"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
          <line
            x1="24"
            y1="22"
            x2="26"
            y2="26"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Local Team, Personal Accountability",
      desc: "We are a Siliguri-based team — not a faceless agency. When you work with us, you know who is building your software. That personal accountability means we take every project seriously.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
          <path d="M20 8 L36 28 H4 Z" fill="#3B82F6" opacity="0.2" />
          <path d="M20 14 L30 28 H10 Z" fill="#3B82F6" opacity="0.5" />
          <circle cx="20" cy="20" r="4" fill="#3B82F6" />
          <rect x="8" y="30" width="24" height="3" rx="1.5" fill="#93C5FD" />
        </svg>
      ),
      title: "Odoo Expertise in North Bengal",
      desc: "We are one of the very few teams in North Bengal with deep hands-on Odoo experience. Whether you need a full Odoo implementation or targeted customisation, we've done it across multiple industries.",
    },
  ];

  return (
    <section id="why-choose-dorii" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        11 — Why Us
      </p>
      <h2 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-200">
        Why Choose Dorii Software
      </h2>

      {/* Intro */}
      <p className="text-gray-600 leading-relaxed mt-4 mb-8">
        There are other software companies in Siliguri. Here's what makes
        working with Dorii different — in plain terms, without the marketing
        fluff.
      </p>

      {/* Stat bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { value: "15+", label: "Years in Business" },
          { value: "50+", label: "Projects Delivered" },
          { value: "North Bengal", label: "Odoo Specialist" },
          { value: "100%", label: "Source Code Ownership" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center bg-blue-50 border border-blue-100 rounded-xl px-4 py-4 text-center"
          >
            <span className="text-blue-600 font-bold text-lg leading-tight">
              {stat.value}
            </span>
            <span className="text-gray-500 text-xs mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Reason cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {reasons.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200"
          >
            <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mt-0.5">
              {item.icon}
            </div>
            <div>
              <p className="text-gray-800 font-semibold text-sm mb-1 leading-snug">
                {item.title}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Honest comparison note */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 mb-6 flex gap-4 items-start">
        <span className="text-xl shrink-0 mt-0.5">🔍</span>
        <div>
          <p className="text-gray-700 font-semibold text-sm mb-1">
            Before you decide — compare properly
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            When evaluating any software company, ask these questions: Do you
            get full source code ownership? Who specifically will build my
            software? What happens after delivery if something breaks? Will the
            price change mid-project? At Dorii, every answer is clear before we
            start.
          </p>
        </div>
      </div>

      {/* CTA callout */}
      <aside
        role="note"
        className="relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 px-6 py-6"
      >
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-500 opacity-10" />
        <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-blue-400 opacity-10" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
            💬
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm mb-1">
              Still not sure? Let's talk for 15 minutes.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              No sales pitch. Tell us what you're trying to build and we'll tell
              you honestly whether we're the right fit — and what it would take
              to get started.
            </p>
          </div>

          <Link
            href="#start-project"
            className="shrink-0 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 whitespace-nowrap"
          >
            Get in Touch
            <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
              <path
                d="M2 7h10M7 3l4 4-4 4"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </aside>
    </section>
  );
}

export default function TechnologiesWeUse() {
  const stack = [
    {
      category: "Backend",
      desc: "Powerful, production-grade server-side technologies that handle your business logic reliably and at scale.",
      items: [
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <path
                d="M12 28 L20 12 L28 28"
                stroke="#3B82F6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="15"
                y1="22"
                x2="25"
                y2="22"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ),
          name: "Python",
          note: "Primary backend language",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <ellipse cx="20" cy="14" rx="12" ry="5" fill="#3B82F6" />
              <path
                d="M8 14 L8 20 C8 23 13 26 20 26 C27 26 32 23 32 20 L32 14"
                stroke="#3B82F6"
                strokeWidth="1.5"
                fill="#DBEAFE"
              />
              <path
                d="M8 20 L8 26 C8 29 13 32 20 32 C27 32 32 29 32 26 L32 20"
                stroke="#3B82F6"
                strokeWidth="1.5"
                fill="#BFDBFE"
              />
            </svg>
          ),
          name: "PostgreSQL",
          note: "Primary database",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <ellipse cx="20" cy="14" rx="12" ry="5" fill="#60A5FA" />
              <path
                d="M8 14 L8 26 C8 29.5 13 32 20 32 C27 32 32 29.5 32 26 L32 14"
                fill="#DBEAFE"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <line
                x1="8"
                y1="20"
                x2="32"
                y2="20"
                stroke="#93C5FD"
                strokeWidth="1"
                strokeDasharray="3 2"
              />
            </svg>
          ),
          name: "MySQL",
          note: "Relational database",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <rect x="10" y="10" width="8" height="20" rx="2" fill="#3B82F6" />
              <rect x="22" y="16" width="8" height="14" rx="2" fill="#93C5FD" />
              <rect x="10" y="32" width="20" height="2" rx="1" fill="#DBEAFE" />
            </svg>
          ),
          name: "Django / FastAPI",
          note: "Web frameworks",
        },
      ],
    },
    {
      category: "Frontend",
      desc: "Modern, responsive interfaces that work beautifully on desktop and mobile — built for real users, not just developers.",
      items: [
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <path d="M20 8 L34 30 H6 Z" fill="#3B82F6" opacity="0.3" />
              <path d="M20 14 L30 30 H10 Z" fill="#3B82F6" />
            </svg>
          ),
          name: "Angular",
          note: "Enterprise-grade apps",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <circle cx="20" cy="20" r="5" fill="#3B82F6" />
              <ellipse
                cx="20"
                cy="20"
                rx="16"
                ry="6"
                stroke="#60A5FA"
                strokeWidth="2"
                fill="none"
              />
              <ellipse
                cx="20"
                cy="20"
                rx="16"
                ry="6"
                stroke="#93C5FD"
                strokeWidth="2"
                fill="none"
                transform="rotate(60 20 20)"
              />
              <ellipse
                cx="20"
                cy="20"
                rx="16"
                ry="6"
                stroke="#BFDBFE"
                strokeWidth="2"
                fill="none"
                transform="rotate(120 20 20)"
              />
            </svg>
          ),
          name: "React",
          note: "Dynamic web interfaces",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <rect x="9" y="9" width="10" height="10" rx="2" fill="#3B82F6" />
              <rect x="21" y="9" width="10" height="10" rx="2" fill="#93C5FD" />
              <rect x="9" y="21" width="10" height="10" rx="2" fill="#93C5FD" />
              <rect
                x="21"
                y="21"
                width="10"
                height="10"
                rx="2"
                fill="#DBEAFE"
              />
            </svg>
          ),
          name: "Tailwind CSS",
          note: "UI styling",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <rect
                x="8"
                y="14"
                width="24"
                height="16"
                rx="3"
                fill="#DBEAFE"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <rect x="14" y="8" width="12" height="8" rx="2" fill="#3B82F6" />
              <line
                x1="14"
                y1="22"
                x2="26"
                y2="22"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <line
                x1="14"
                y1="26"
                x2="22"
                y2="26"
                stroke="#BFDBFE"
                strokeWidth="1.5"
              />
            </svg>
          ),
          name: "TypeScript",
          note: "Type-safe development",
        },
      ],
    },
    {
      category: "Dev Tools & Process",
      desc: "We follow modern engineering practices — the same workflows used by top software teams globally.",
      items: [
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <rect
                x="8"
                y="12"
                width="24"
                height="18"
                rx="3"
                fill="#DBEAFE"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <rect x="12" y="8" width="7" height="6" rx="2" fill="#3B82F6" />
              <rect x="21" y="8" width="7" height="6" rx="2" fill="#60A5FA" />
              <line
                x1="12"
                y1="20"
                x2="28"
                y2="20"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <line
                x1="12"
                y1="24"
                x2="22"
                y2="24"
                stroke="#BFDBFE"
                strokeWidth="1.5"
              />
            </svg>
          ),
          name: "Docker",
          note: "Containerised deployment",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <circle cx="20" cy="16" r="5" fill="#3B82F6" />
              <circle cx="10" cy="28" r="4" fill="#93C5FD" />
              <circle cx="30" cy="28" r="4" fill="#93C5FD" />
              <line
                x1="15"
                y1="19"
                x2="12"
                y2="25"
                stroke="#60A5FA"
                strokeWidth="1.5"
              />
              <line
                x1="25"
                y1="19"
                x2="28"
                y2="25"
                stroke="#60A5FA"
                strokeWidth="1.5"
              />
            </svg>
          ),
          name: "Git & GitHub",
          note: "Version control",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <path
                d="M12 20 L17 25 L28 14"
                stroke="#3B82F6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
          name: "Pytest",
          note: "Automated testing",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <rect
                x="8"
                y="16"
                width="24"
                height="14"
                rx="3"
                fill="#DBEAFE"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <path
                d="M14 10 L20 16 L26 10"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="12"
                y1="22"
                x2="28"
                y2="22"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <line
                x1="12"
                y1="26"
                x2="20"
                y2="26"
                stroke="#BFDBFE"
                strokeWidth="1.5"
              />
            </svg>
          ),
          name: "CI/CD Pipelines",
          note: "Automated deployment",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <rect x="8" y="8" width="10" height="10" rx="2" fill="#3B82F6" />
              <rect x="22" y="8" width="10" height="10" rx="2" fill="#93C5FD" />
              <rect x="8" y="22" width="10" height="10" rx="2" fill="#93C5FD" />
              <rect
                x="22"
                y="22"
                width="10"
                height="10"
                rx="2"
                fill="#DBEAFE"
              />
              <line
                x1="18"
                y1="13"
                x2="22"
                y2="13"
                stroke="#60A5FA"
                strokeWidth="1.5"
              />
              <line
                x1="13"
                y1="18"
                x2="13"
                y2="22"
                stroke="#60A5FA"
                strokeWidth="1.5"
              />
              <line
                x1="27"
                y1="18"
                x2="27"
                y2="22"
                stroke="#60A5FA"
                strokeWidth="1.5"
              />
              <line
                x1="18"
                y1="27"
                x2="22"
                y2="27"
                stroke="#60A5FA"
                strokeWidth="1.5"
              />
            </svg>
          ),
          name: "REST APIs",
          note: "System integration",
        },
        {
          icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
              <ellipse
                cx="20"
                cy="18"
                rx="10"
                ry="7"
                fill="#DBEAFE"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <ellipse
                cx="20"
                cy="22"
                rx="10"
                ry="7"
                fill="#BFDBFE"
                stroke="#60A5FA"
                strokeWidth="1.5"
              />
              <ellipse
                cx="20"
                cy="26"
                rx="10"
                ry="7"
                fill="#DBEAFE"
                stroke="#3B82F6"
                strokeWidth="1.5"
              />
            </svg>
          ),
          name: "Cloud Hosting",
          note: "AWS / VPS deployment",
        },
      ],
    },
  ];

  return (
    <section id="technologies-used" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        08 — Technologies
      </p>
      <h2 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-200">
        Technologies We Use
      </h2>

      <p className="text-gray-600 leading-relaxed mt-4 mb-8">
        We use modern, battle-tested technologies — the same stack trusted by
        serious software teams globally. Our focus is on backend logic, data
        systems, and functional frontend interfaces. We don't do graphic design,
        branding, or marketing creatives — just solid, reliable software
        engineering.
      </p>

      {/* Stack groups */}
      <div className="flex flex-col gap-8 mb-8">
        {stack.map((group) => (
          <div key={group.category}>
            {/* Group header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-bold text-gray-800">
                {group.category}
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 -mt-2">
              {group.desc}
            </p>

            {/* Tech cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-4 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <p className="text-gray-800 font-semibold text-sm text-center leading-tight">
                    {tech.name}
                  </p>
                  <p className="text-gray-400 text-xs text-center">
                    {tech.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* "What we don't do" honest note */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 mb-6 flex gap-4 items-start">
        <span className="text-xl shrink-0 mt-0.5">🎨</span>
        <div>
          <p className="text-gray-700 font-semibold text-sm mb-1">
            We don't do graphic design or branding
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            We specialise purely in software engineering — backend systems,
            databases, and functional frontend interfaces. If you need logo
            design, banners, or marketing creatives, we recommend working with a
            dedicated design agency alongside us.
          </p>
        </div>
      </div>

      {/* Callout */}
      <aside
        role="note"
        className="relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 px-6 py-6"
      >
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-500 opacity-10" />
        <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-blue-400 opacity-10" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
            ⚙️
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">
              Why does the tech stack matter to you?
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The technologies we use determine how reliable, fast, and scalable
              your software will be. Python and PostgreSQL are used by some of
              the world's largest platforms. Docker and CI/CD mean your software
              is deployed consistently and updated without downtime. You get
              enterprise-grade engineering — at a price that works for your
              business.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}

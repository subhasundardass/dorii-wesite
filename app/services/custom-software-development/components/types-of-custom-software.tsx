export default function TypesOfCustomSoftware() {
  const types = [
    {
      href: "#erp-development",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="4" width="14" height="14" rx="3" fill="#BFDBFE" />
          <rect x="22" y="4" width="14" height="14" rx="3" fill="#BFDBFE" />
          <rect x="4" y="22" width="14" height="14" rx="3" fill="#BFDBFE" />
          <rect x="22" y="22" width="14" height="14" rx="3" fill="#BFDBFE" />
          <line
            x1="18"
            y1="11"
            x2="22"
            y2="11"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          <line
            x1="11"
            y1="18"
            x2="11"
            y2="22"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          <line
            x1="29"
            y1="18"
            x2="29"
            y2="22"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          <line
            x1="18"
            y1="29"
            x2="22"
            y2="29"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          <circle cx="20" cy="20" r="3" fill="#3B82F6" />
        </svg>
      ),
      title: "ERP Software",
      desc: "Connect every part of your business — finance, inventory, HR, purchasing, and reporting — into one unified system that gives you a real-time view of operations.",
      tags: ["Inventory", "Finance", "HR", "Reporting"],
    },
    {
      href: "/solutions/transport-management",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="2" y="14" width="28" height="16" rx="4" fill="#BFDBFE" />
          <rect x="28" y="18" width="10" height="10" rx="3" fill="#93C5FD" />
          <circle cx="10" cy="32" r="4" fill="#3B82F6" />
          <circle cx="10" cy="32" r="2" fill="white" />
          <circle cx="26" cy="32" r="4" fill="#3B82F6" />
          <circle cx="26" cy="32" r="2" fill="white" />
          <rect x="6" y="8" width="18" height="8" rx="2" fill="#DBEAFE" />
          <line
            x1="14"
            y1="4"
            x2="14"
            y2="8"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
          <line
            x1="10"
            y1="6"
            x2="18"
            y2="6"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Transport Management System",
      desc: "Track vehicles, manage routes, handle bookings, and monitor driver activity — all from a single platform built for transport and logistics businesses.",
      tags: [
        "Fleet Tracking",
        "Route Planning",
        "Bookings",
        "Driver Management",
      ],
    },
    {
      href: "#crm-software",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle cx="14" cy="14" r="7" fill="#BFDBFE" />
          <circle cx="28" cy="10" r="5" fill="#DBEAFE" />
          <path d="M2 32 C2 24 8 20 14 20 C20 20 26 24 26 32" fill="#BFDBFE" />
          <path
            d="M24 22 C24 18 28 16 32 18 C36 20 38 26 36 30 L24 32 Z"
            fill="#DBEAFE"
          />
          <circle cx="14" cy="14" r="3" fill="#3B82F6" />
        </svg>
      ),
      title: "CRM Software",
      desc: "Manage your leads, follow up with customers, track the full sales pipeline, and never let a potential deal slip through because of a missed follow-up.",
      tags: [
        "Lead Management",
        "Sales Pipeline",
        "Follow-ups",
        "Customer History",
      ],
    },
    {
      href: "#workflow-automation",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle
            cx="8"
            cy="8"
            r="5"
            fill="#BFDBFE"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
          <circle
            cx="32"
            cy="8"
            r="5"
            fill="#BFDBFE"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
          <circle
            cx="8"
            cy="32"
            r="5"
            fill="#BFDBFE"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
          <circle
            cx="32"
            cy="32"
            r="5"
            fill="#3B82F6"
            stroke="#2563EB"
            strokeWidth="1.5"
          />
          <path
            d="M8 13 L8 27"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          <path
            d="M13 8 L27 8"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          <path d="M13 32 L27 32" stroke="#93C5FD" strokeWidth="1.5" />
          <path d="M32 13 L32 27" stroke="#93C5FD" strokeWidth="1.5" />
          <path
            d="M29 30 L31 32 L35 28"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Workflow Automation",
      desc: "Map your business processes and automate the steps that don't need a human — approvals, notifications, task assignments, and status tracking done automatically.",
      tags: ["Approvals", "Notifications", "Task Tracking", "Process Mapping"],
    },
    {
      href: "#web-applications",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="3" y="6" width="34" height="26" rx="4" fill="#BFDBFE" />
          <rect x="3" y="6" width="34" height="10" rx="4" fill="#93C5FD" />
          <rect x="3" y="12" width="34" height="4" rx="0" fill="#93C5FD" />
          <circle cx="9" cy="11" r="2" fill="#DBEAFE" />
          <circle cx="15" cy="11" r="2" fill="#DBEAFE" />
          <circle cx="21" cy="11" r="2" fill="#DBEAFE" />
          <rect x="9" y="22" width="10" height="6" rx="2" fill="#DBEAFE" />
          <rect x="23" y="22" width="10" height="2" rx="1" fill="#DBEAFE" />
          <rect x="23" y="26" width="7" height="2" rx="1" fill="#DBEAFE" />
          <rect x="15" y="34" width="10" height="4" rx="1" fill="#93C5FD" />
          <rect x="10" y="38" width="20" height="2" rx="1" fill="#BFDBFE" />
        </svg>
      ),
      title: "Web Applications",
      desc: "Custom web-based systems accessible from any browser, any device — portals, dashboards, booking systems, and internal tools built for how your team actually works.",
      tags: ["Browser-Based", "Dashboards", "Portals", "Internal Tools"],
    },
  ];

  return (
    <section id="types-of-custom-software" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        06 — Solutions
      </p>
      <h2 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-200">
        Types of Custom Software Solutions
      </h2>

      <p className="text-gray-600 leading-relaxed mt-4 mb-8">
        We don't build one type of software. We build whatever your business
        needs — from enterprise resource planning to transport tracking to
        customer management. Here are the core solution types we specialise in.
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {types.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group flex flex-col gap-3 bg-white border border-gray-100 rounded-xl px-5 py-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer"
          >
            {/* Icon + Title row */}
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-semibold text-sm leading-snug">
                  {item.title}
                </p>
              </div>
              {/* Arrow */}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-4 h-4 text-blue-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-50 text-blue-500 border border-blue-100 rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Callout */}
      <aside
        role="note"
        className="relative overflow-hidden rounded-2xl bg-violet-50 border border-violet-100 px-6 py-6"
      >
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-violet-200 opacity-30" />
        <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-violet-100 opacity-40" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-violet-100 shadow-sm flex items-center justify-center text-2xl">
            💬
          </div>
          <div>
            <p className="text-violet-900 font-semibold text-sm mb-1">
              Need something that's not on this list?
            </p>
            <p className="text-violet-600 text-sm leading-relaxed">
              These are our core solution types — but we've built software for
              all kinds of business needs. If you have something specific in
              mind, tell us about it and we'll figure out the best approach
              together.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}

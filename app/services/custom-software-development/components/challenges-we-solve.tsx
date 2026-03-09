export default function ChallengesWeSolve() {
  const challenges = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="8" width="14" height="10" rx="2" fill="#BFDBFE" />
          <rect x="22" y="8" width="14" height="10" rx="2" fill="#BFDBFE" />
          <rect x="4" y="22" width="14" height="10" rx="2" fill="#BFDBFE" />
          <rect x="22" y="22" width="14" height="10" rx="2" fill="#BFDBFE" />
          <line
            x1="18"
            y1="13"
            x2="22"
            y2="13"
            stroke="#93C5FD"
            strokeWidth="2"
            strokeDasharray="2 2"
          />
          <line
            x1="18"
            y1="27"
            x2="22"
            y2="27"
            stroke="#93C5FD"
            strokeWidth="2"
            strokeDasharray="2 2"
          />
          <line
            x1="11"
            y1="18"
            x2="11"
            y2="22"
            stroke="#93C5FD"
            strokeWidth="2"
            strokeDasharray="2 2"
          />
          <line
            x1="29"
            y1="18"
            x2="29"
            y2="22"
            stroke="#93C5FD"
            strokeWidth="2"
            strokeDasharray="2 2"
          />
        </svg>
      ),
      challenge: "Data scattered across Excel, WhatsApp & paper",
      solution:
        "One centralised system — every order, customer, stock entry, and record in a single place, accessible by the right people in real time.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle cx="20" cy="20" r="14" stroke="#BFDBFE" strokeWidth="2" />
          <path
            d="M20 10 L20 20 L27 25"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="2" fill="#3B82F6" />
        </svg>
      ),
      challenge: "Staff spending hours on repetitive manual tasks",
      solution:
        "We automate invoicing, reminders, status updates, and reports — so your team focuses only on work that actually needs a human.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect
            x="5"
            y="10"
            width="14"
            height="14"
            rx="3"
            fill="#BFDBFE"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
          <rect x="7" y="12" width="5" height="5" rx="1" fill="#3B82F6" />
          <rect
            x="21"
            y="16"
            width="14"
            height="14"
            rx="3"
            fill="#DBEAFE"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          <path
            d="M24 19 L30 25 M30 19 L24 25"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      challenge: "Ready-made software that doesn't fit your process",
      solution:
        "We build software around how you already work. No workarounds, no compromises — every feature designed for exactly your operation.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="28" width="6" height="8" rx="1.5" fill="#BFDBFE" />
          <rect x="13" y="20" width="6" height="16" rx="1.5" fill="#93C5FD" />
          <rect x="22" y="14" width="6" height="22" rx="1.5" fill="#60A5FA" />
          <rect x="31" y="8" width="6" height="28" rx="1.5" fill="#3B82F6" />
        </svg>
      ),
      challenge: "No visibility into how the business is performing",
      solution:
        "Live dashboards showing sales, stock, staff activity, and pending work — so you always know exactly where things stand.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle
            cx="10"
            cy="20"
            r="6"
            fill="#DBEAFE"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
          <circle
            cx="30"
            cy="20"
            r="6"
            fill="#DBEAFE"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
          <circle
            cx="20"
            cy="10"
            r="6"
            fill="#BFDBFE"
            stroke="#60A5FA"
            strokeWidth="1.5"
          />
          <line
            x1="15"
            y1="17"
            x2="25"
            y2="13"
            stroke="#3B82F6"
            strokeWidth="1.5"
          />
          <line
            x1="16"
            y1="23"
            x2="24"
            y2="23"
            stroke="#3B82F6"
            strokeWidth="1.5"
          />
        </svg>
      ),
      challenge: "Multiple disconnected tools that don't talk to each other",
      solution:
        "We connect your billing, inventory, CRM, and delivery into one unified platform so nothing falls through the gaps between tools.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect
            x="12"
            y="4"
            width="16"
            height="28"
            rx="4"
            fill="#DBEAFE"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
          <rect x="15" y="8" width="10" height="6" rx="2" fill="#60A5FA" />
          <rect x="15" y="18" width="10" height="2" rx="1" fill="#BFDBFE" />
          <rect x="15" y="22" width="7" height="2" rx="1" fill="#BFDBFE" />
          <circle cx="20" cy="28" r="2" fill="#3B82F6" />
        </svg>
      ),
      challenge: "No mobile access for field staff or remote teams",
      solution:
        "Mobile-friendly systems so your team on the road, at a branch, or working remotely has full access to what they need, from anywhere.",
    },
  ];

  return (
    <section id="challenges-we-solve" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        05 — Challenges
      </p>
      <h2 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-200">
        Challenges We Solve
      </h2>

      <p className="text-gray-600 leading-relaxed mt-4 mb-8">
        Over five years working with businesses across Siliguri and North
        Bengal, the same core problems come up again and again. The industry
        changes — the challenge doesn't. Here's what we solve, and exactly how.
      </p>

      {/* 2-column grid — matching Benefits section style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {challenges.map((item) => (
          <div
            key={item.challenge}
            className="flex gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Icon */}
            <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mt-0.5">
              {item.icon}
            </div>

            {/* Content */}
            <div>
              <p className="text-gray-800 font-semibold text-sm mb-1 leading-snug">
                {item.challenge}
              </p>
              <div className="flex items-center gap-1.5 mb-2">
                <div className="h-px w-4 bg-blue-200" />
                <span className="text-blue-400 text-xs tracking-wide">
                  how we solve it
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom callout */}
      <aside
        role="note"
        className="relative overflow-hidden rounded-2xl bg-blue-50 border border-blue-100 px-6 py-6"
      >
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-200 opacity-30" />
        <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-blue-100 opacity-40" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-center justify-center text-2xl">
            🙋
          </div>
          <div>
            <p className="text-blue-900 font-semibold text-sm mb-1">
              Don't see your specific problem here?
            </p>
            <p className="text-blue-600 text-sm leading-relaxed">
              Every business is different. Tell us what's slowing you down —
              we'll tell you honestly whether we can build a solution for it,
              and what it would take.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}

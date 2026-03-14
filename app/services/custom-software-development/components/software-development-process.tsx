export default function SoftwareDevelopmentProcess() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="6" y="4" width="28" height="32" rx="4" fill="#BFDBFE" />
          <rect x="10" y="10" width="20" height="3" rx="1.5" fill="#93C5FD" />
          <rect x="10" y="16" width="16" height="3" rx="1.5" fill="#93C5FD" />
          <rect x="10" y="22" width="18" height="3" rx="1.5" fill="#93C5FD" />
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
      title: "Requirement Analysis",
      desc: "We start by understanding your business — how it works, what problems you're facing, and what you need the software to do. No assumptions. We ask the right questions until we have a clear picture.",
      deliverable: "Scope Document",
    },
    {
      number: "02",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="8" width="32" height="24" rx="4" fill="#BFDBFE" />
          <rect x="8" y="12" width="10" height="8" rx="2" fill="#93C5FD" />
          <rect x="22" y="12" width="10" height="3" rx="1.5" fill="#DBEAFE" />
          <rect x="22" y="17" width="7" height="3" rx="1.5" fill="#DBEAFE" />
          <rect x="8" y="24" width="24" height="3" rx="1.5" fill="#DBEAFE" />
          <line
            x1="18"
            y1="16"
            x2="22"
            y2="16"
            stroke="#60A5FA"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <line
            x1="18"
            y1="19"
            x2="22"
            y2="19"
            stroke="#60A5FA"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
        </svg>
      ),
      title: "System Architecture & Design",
      desc: "Before writing a single line of code, we design the full system structure — database, modules, user flows, and UI wireframes. You see exactly what will be built before we build it.",
      deliverable: "Wireframes & Architecture Plan",
    },
    {
      number: "03",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="6" width="32" height="24" rx="4" fill="#BFDBFE" />
          <rect x="4" y="6" width="32" height="8" rx="4" fill="#93C5FD" />
          <rect x="4" y="10" width="32" height="4" fill="#93C5FD" />
          <circle cx="9" cy="10" r="2" fill="#DBEAFE" />
          <circle cx="15" cy="10" r="2" fill="#DBEAFE" />
          <circle cx="21" cy="10" r="2" fill="#DBEAFE" />
          <rect x="8" y="18" width="8" height="3" rx="1.5" fill="#3B82F6" />
          <rect x="20" y="18" width="12" height="3" rx="1.5" fill="#DBEAFE" />
          <rect x="8" y="24" width="16" height="3" rx="1.5" fill="#DBEAFE" />
          <rect x="28" y="24" width="4" height="3" rx="1.5" fill="#93C5FD" />
        </svg>
      ),
      title: "Development",
      desc: "Our developers build your software in structured sprints — breaking the project into manageable phases so you can see real progress regularly and give feedback along the way.",
      deliverable: "Working Software Builds",
    },
    {
      number: "04",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle cx="20" cy="18" r="12" fill="#BFDBFE" />
          <path
            d="M14 18 L18 22 L26 14"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 30 C8 26 13 24 20 24 C27 24 32 26 32 30"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle
            cx="20"
            cy="34"
            r="3"
            fill="#DBEAFE"
            stroke="#93C5FD"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Testing & Quality Assurance",
      desc: "Every feature is tested thoroughly — functional testing, edge cases, performance under load, and device compatibility. Nothing goes live until it works exactly as expected.",
      deliverable: "QA Report & Bug-Free Build",
    },
    {
      number: "05",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="6" y="24" width="28" height="12" rx="3" fill="#BFDBFE" />
          <rect x="14" y="10" width="12" height="16" rx="2" fill="#93C5FD" />
          <path
            d="M20 6 L20 18 M16 10 L20 6 L24 10"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="30" r="2" fill="#3B82F6" />
          <circle cx="20" cy="30" r="2" fill="#3B82F6" />
          <circle cx="28" cy="30" r="2" fill="#3B82F6" />
        </svg>
      ),
      title: "Deployment",
      desc: "We deploy your software to your server or cloud environment, set up the database, configure access for your team, and make sure everything runs smoothly from day one.",
      deliverable: "Live System & Handover",
    },
    {
      number: "06",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle cx="20" cy="20" r="14" fill="#BFDBFE" />
          <circle cx="20" cy="20" r="8" fill="#DBEAFE" />
          <path
            d="M20 8 C20 8 26 14 26 20 C26 26 20 32 20 32 C20 32 14 26 14 20 C14 14 20 8 20 8Z"
            fill="#93C5FD"
          />
          <circle cx="20" cy="20" r="3" fill="#3B82F6" />
          <path
            d="M20 6 L20 8 M20 32 L20 34 M6 20 L8 20 M32 20 L34 20"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Maintenance & Support",
      desc: "After delivery, we stay with you. Bug fixes, feature additions, performance improvements, and ongoing support — you have a real team to call, not a helpdesk ticket system.",
      deliverable: "Ongoing Support & Updates",
    },
  ];

  return (
    <section id="software-development-process" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        07 — Process
      </p>
      <h2 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-200">
        Our Software Development Process
      </h2>

      <p className="text-gray-600 leading-relaxed mt-4 mb-10">
        Building software with us is a structured, transparent process — no
        surprises, no black boxes. You know what's happening at every stage, and
        you see real progress throughout. Here's exactly how we work.
      </p>

      {/* Timeline steps */}
      <div className="relative flex flex-col gap-0">
        {/* Vertical line */}
        <div className="absolute left-6.75 top-8 bottom-8 w-px bg-blue-100 hidden sm:block" />

        {steps.map((step, index) => (
          <div key={step.number} className="relative flex gap-5 mb-6 last:mb-0">
            {/* Step icon circle */}
            <div className="shrink-0 flex flex-col items-center gap-0 z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm flex items-center justify-center">
                {step.icon}
              </div>
            </div>

            {/* Content card */}
            <div className="flex-1 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm mb-1">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-blue-400 tracking-widest">
                    {step.number}
                  </span>
                  <span className="text-gray-800 font-semibold text-sm">
                    {step.title}
                  </span>
                </div>
                {/* Deliverable badge */}
                <span className="text-xs bg-blue-50 text-blue-500 border border-blue-100 rounded-full px-3 py-0.5 shrink-0">
                  {step.deliverable}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <aside
        role="note"
        className="relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 px-6 py-6 mt-8"
      >
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-500 opacity-10" />
        <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-blue-400 opacity-10" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
            🗓️
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">
              How long does it take?
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              A typical custom software project takes 6 to 16 weeks depending on
              complexity. Simple tools can be ready in under 2 months. Larger
              systems with multiple modules take longer — but you'll always have
              a clear timeline before we start.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}

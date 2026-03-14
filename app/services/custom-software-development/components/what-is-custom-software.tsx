export default function WhatIsCustomSoftware() {
  return (
    <section id="what-is-custom-software" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        02 — Definition
      </p>
      <h2 className="text-2xl font-bold mb-8 pb-3 border-b border-gray-200">
        What is Custom Software Development?
      </h2>

      {/* SVG — floated left this time for visual variety */}
      <div className="float-none w-full mb-6 sm:float-left sm:w-[260px] sm:mr-8 sm:mb-4 lg:w-[300px] lg:mr-10">
        <div className="w-full rounded-2xl overflow-hidden bg-indigo-50 p-4">
          <svg
            viewBox="0 0 400 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            aria-hidden="true"
          >
            {/* Background card */}
            <rect
              x="20"
              y="20"
              width="360"
              height="300"
              rx="20"
              fill="#EEF2FF"
            />

            {/* Central document / blueprint */}
            <rect
              x="110"
              y="50"
              width="180"
              height="220"
              rx="12"
              fill="white"
              style={{
                filter: "drop-shadow(0 6px 20px rgba(99,102,241,0.15))",
              }}
            />

            {/* Document header bar */}
            <rect
              x="110"
              y="50"
              width="180"
              height="36"
              rx="12"
              fill="#4F46E5"
            />
            <rect
              x="110"
              y="74"
              width="180"
              height="12"
              rx="0"
              fill="#4F46E5"
            />

            {/* Header dots */}
            <circle cx="128" cy="68" r="5" fill="#A5B4FC" />
            <circle cx="144" cy="68" r="5" fill="#C7D2FE" />
            <circle cx="160" cy="68" r="5" fill="#E0E7FF" />

            {/* Document title line */}
            <rect
              x="128"
              y="100"
              width="100"
              height="7"
              rx="3.5"
              fill="#6366F1"
            />

            {/* Document content lines */}
            <rect
              x="128"
              y="118"
              width="144"
              height="5"
              rx="2.5"
              fill="#C7D2FE"
            />
            <rect
              x="128"
              y="130"
              width="120"
              height="5"
              rx="2.5"
              fill="#E0E7FF"
            />
            <rect
              x="128"
              y="142"
              width="134"
              height="5"
              rx="2.5"
              fill="#C7D2FE"
            />

            {/* Divider */}
            <rect
              x="128"
              y="158"
              width="144"
              height="1.5"
              rx="1"
              fill="#E0E7FF"
            />

            {/* Section 2 lines */}
            <rect
              x="128"
              y="168"
              width="90"
              height="5"
              rx="2.5"
              fill="#6366F1"
              opacity="0.5"
            />
            <rect
              x="128"
              y="182"
              width="144"
              height="5"
              rx="2.5"
              fill="#C7D2FE"
            />
            <rect
              x="128"
              y="194"
              width="110"
              height="5"
              rx="2.5"
              fill="#E0E7FF"
            />
            <rect
              x="128"
              y="206"
              width="130"
              height="5"
              rx="2.5"
              fill="#C7D2FE"
            />

            {/* Divider */}
            <rect
              x="128"
              y="222"
              width="144"
              height="1.5"
              rx="1"
              fill="#E0E7FF"
            />

            {/* Section 3 lines */}
            <rect
              x="128"
              y="232"
              width="80"
              height="5"
              rx="2.5"
              fill="#6366F1"
              opacity="0.5"
            />
            <rect
              x="128"
              y="246"
              width="120"
              height="5"
              rx="2.5"
              fill="#C7D2FE"
            />

            {/* Floating tag — top left: "Your Business" */}
            <rect
              x="24"
              y="48"
              width="88"
              height="36"
              rx="10"
              fill="white"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(99,102,241,0.18))",
              }}
            />
            <circle cx="40" cy="66" r="8" fill="#EEF2FF" />
            <rect x="36" y="63" width="8" height="2" rx="1" fill="#4F46E5" />
            <rect x="36" y="67" width="6" height="2" rx="1" fill="#4F46E5" />
            <rect x="36" y="71" width="7" height="2" rx="1" fill="#4F46E5" />
            <rect x="52" y="62" width="50" height="5" rx="2.5" fill="#C7D2FE" />
            <rect x="52" y="71" width="36" height="5" rx="2.5" fill="#E0E7FF" />

            {/* Floating tag — top right: checkmark */}
            <rect
              x="290"
              y="48"
              width="86"
              height="36"
              rx="10"
              fill="white"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(99,102,241,0.18))",
              }}
            />
            <circle cx="308" cy="66" r="8" fill="#EEF2FF" />
            <path
              d="M304 66 L308 70 L314 61"
              stroke="#4F46E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="322"
              y="62"
              width="42"
              height="5"
              rx="2.5"
              fill="#C7D2FE"
            />
            <rect
              x="322"
              y="71"
              width="30"
              height="5"
              rx="2.5"
              fill="#E0E7FF"
            />

            {/* Floating tag — bottom left: settings */}
            <rect
              x="24"
              y="240"
              width="88"
              height="58"
              rx="10"
              fill="white"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(99,102,241,0.18))",
              }}
            />
            <rect
              x="36"
              y="254"
              width="64"
              height="5"
              rx="2.5"
              fill="#C7D2FE"
            />
            <rect
              x="36"
              y="265"
              width="48"
              height="5"
              rx="2.5"
              fill="#E0E7FF"
            />
            <rect
              x="36"
              y="276"
              width="56"
              height="5"
              rx="2.5"
              fill="#C7D2FE"
            />
            <rect
              x="36"
              y="287"
              width="40"
              height="5"
              rx="2.5"
              fill="#E0E7FF"
            />

            {/* Floating tag — bottom right: pie chart */}
            <rect
              x="290"
              y="240"
              width="86"
              height="58"
              rx="10"
              fill="white"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(99,102,241,0.18))",
              }}
            />
            <circle
              cx="320"
              cy="264"
              r="16"
              fill="#EEF2FF"
              stroke="#C7D2FE"
              strokeWidth="1.5"
            />
            <path d="M320 264 L320 248 A16 16 0 0 1 334 272 Z" fill="#4F46E5" />
            <path d="M320 264 L334 272 A16 16 0 0 1 306 272 Z" fill="#818CF8" />
            <rect
              x="296"
              y="286"
              width="68"
              height="5"
              rx="2.5"
              fill="#C7D2FE"
            />
            <rect
              x="302"
              y="295"
              width="52"
              height="5"
              rx="2.5"
              fill="#E0E7FF"
            />

            {/* Connector lines from document to tags */}
            <line
              x1="110"
              y1="80"
              x2="112"
              y2="66"
              stroke="#C7D2FE"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <line
              x1="290"
              y1="80"
              x2="290"
              y2="66"
              stroke="#C7D2FE"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <line
              x1="150"
              y1="270"
              x2="112"
              y2="269"
              stroke="#C7D2FE"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <line
              x1="290"
              y1="260"
              x2="376"
              y2="265"
              stroke="#C7D2FE"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />

            {/* Pencil icon — bottom center */}
            <circle
              cx="200"
              cy="300"
              r="14"
              fill="white"
              style={{ filter: "drop-shadow(0 2px 8px rgba(99,102,241,0.14))" }}
            />
            <rect x="196" y="292" width="8" height="12" rx="2" fill="#818CF8" />
            <path d="M196 304 L200 310 L204 304 Z" fill="#4F46E5" />
            <rect x="196" y="290" width="8" height="4" rx="1" fill="#C7D2FE" />
          </svg>
        </div>
      </div>

      {/* Text content */}
      <p className="text-gray-900 leading-relaxed mb-4 text-base font-semibold">
        Software built from scratch, designed around the way your business
        works.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Custom software development means building a digital system specifically
        for your business — from the ground up. Unlike ready-made tools like
        Tally, Zoho, or generic ERP packages, custom software is designed around
        your exact workflow, your team, your processes, and your goals.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Think of it this way — a ready-made software is like buying a shirt off
        the rack. It roughly fits, but you end up adjusting yourself to the
        shirt. Custom software is the shirt made to your measurements. Every
        button, every pocket, exactly where you need it.
      </p>

      <p className="text-gray-600 leading-relaxed mb-5">
        The development process involves understanding your business
        requirements, designing the system architecture, writing the code,
        testing it thoroughly, and then deploying and maintaining it over time.
        You own it fully — the code, the data, and the freedom to grow it as
        your business grows.
      </p>

      {/* Clear float */}
      <div className="clear-both" />

      {/* Comparison: Custom vs Ready-made — simple 2 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Ready-made */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Ready-Made Software
          </p>
          {[
            "Built for everyone — fits no one perfectly",
            "You adapt your process to the software",
            "Monthly subscriptions, forever",
            "Limited features you can't change",
            "Your data on someone else's server",
          ].map((point) => (
            <div key={point} className="flex items-start gap-2 mb-2">
              <span className="text-red-400 mt-0.5 text-sm">✕</span>
              <p className="text-gray-500 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        {/* Custom */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">
            Custom Software by Dorii
          </p>
          {[
            "Built specifically for your business",
            "Software adapts to how you work",
            "One-time investment, you own it",
            "Add features anytime as you grow",
            "Your data, your control, your server",
          ].map((point) => (
            <div key={point} className="flex items-start gap-2 mb-2">
              <span className="text-green-500 mt-0.5 text-sm">✓</span>
              <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <aside
        role="note"
        className="bg-linear-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 px-6 py-5 rounded-r-xl"
      >
        <strong className="block text-indigo-700 text-sm font-semibold mb-1">
          🛠️ In simple terms
        </strong>
        <p className="text-indigo-800 text-sm leading-relaxed">
          Custom software development is the process of building a digital tool
          that works exactly the way your business needs it to — designed,
          developed, and delivered just for you.
        </p>
      </aside>
    </section>
  );
}

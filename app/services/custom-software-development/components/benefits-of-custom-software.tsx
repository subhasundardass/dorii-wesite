export default function BenefitsOfCustomSoftware() {
  return (
    <section id="benefits-of-custom-software" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        04 — Benefits
      </p>
      <h2 className="text-2xl font-bold mb-8 pb-3 border-b border-gray-200">
        Benefits of Custom Software for Your Business
      </h2>

      {/* SVG — floated left for visual variety */}
      <div className="float-none w-full mb-6 sm:float-left sm:w-[260px] sm:mr-8 sm:mb-4 lg:w-[300px] lg:mr-10">
        <div className="w-full rounded-2xl overflow-hidden bg-green-50 p-4">
          <svg
            viewBox="0 0 400 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            aria-hidden="true"
          >
            {/* Background */}
            <rect
              x="20"
              y="20"
              width="360"
              height="300"
              rx="20"
              fill="#F0FDF4"
            />

            {/* Central upward growth chart */}
            <rect
              x="80"
              y="60"
              width="240"
              height="170"
              rx="14"
              fill="white"
              style={{ filter: "drop-shadow(0 6px 20px rgba(34,197,94,0.12))" }}
            />

            {/* Chart header */}
            <rect
              x="80"
              y="60"
              width="240"
              height="32"
              rx="14"
              fill="#16A34A"
            />
            <rect x="80" y="78" width="240" height="14" rx="0" fill="#16A34A" />
            <rect x="96" y="70" width="80" height="6" rx="3" fill="#86EFAC" />
            <circle cx="296" cy="73" r="5" fill="#4ADE80" />
            <circle cx="296" cy="73" r="9" fill="#4ADE80" opacity="0.3" />

            {/* Chart grid lines */}
            <line
              x1="96"
              y1="100"
              x2="304"
              y2="100"
              stroke="#DCFCE7"
              strokeWidth="1"
            />
            <line
              x1="96"
              y1="120"
              x2="304"
              y2="120"
              stroke="#DCFCE7"
              strokeWidth="1"
            />
            <line
              x1="96"
              y1="140"
              x2="304"
              y2="140"
              stroke="#DCFCE7"
              strokeWidth="1"
            />
            <line
              x1="96"
              y1="160"
              x2="304"
              y2="160"
              stroke="#DCFCE7"
              strokeWidth="1"
            />
            <line
              x1="96"
              y1="180"
              x2="304"
              y2="180"
              stroke="#DCFCE7"
              strokeWidth="1"
            />
            <line
              x1="96"
              y1="200"
              x2="304"
              y2="200"
              stroke="#DCFCE7"
              strokeWidth="1"
            />
            <line
              x1="96"
              y1="220"
              x2="304"
              y2="220"
              stroke="#DCFCE7"
              strokeWidth="1"
            />

            {/* Growth line */}
            <polyline
              points="96,215 136,200 176,180 216,150 256,118 296,88"
              stroke="#16A34A"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Area fill under line */}
            <polygon
              points="96,215 136,200 176,180 216,150 256,118 296,88 296,225 96,225"
              fill="#16A34A"
              opacity="0.08"
            />

            {/* Data points on line */}
            <circle
              cx="136"
              cy="200"
              r="4"
              fill="white"
              stroke="#16A34A"
              strokeWidth="2"
            />
            <circle
              cx="176"
              cy="180"
              r="4"
              fill="white"
              stroke="#16A34A"
              strokeWidth="2"
            />
            <circle
              cx="216"
              cy="150"
              r="4"
              fill="white"
              stroke="#16A34A"
              strokeWidth="2"
            />
            <circle
              cx="256"
              cy="118"
              r="4"
              fill="white"
              stroke="#16A34A"
              strokeWidth="2"
            />
            <circle cx="296" cy="88" r="6" fill="#16A34A" />

            {/* Floating badge — top right */}
            <rect
              x="256"
              y="46"
              width="100"
              height="34"
              rx="10"
              fill="white"
              style={{ filter: "drop-shadow(0 4px 12px rgba(34,197,94,0.18))" }}
            />
            <circle cx="272" cy="63" r="9" fill="#DCFCE7" />
            <path
              d="M268 63 L272 67 L278 58"
              stroke="#16A34A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="286"
              y="58"
              width="58"
              height="5"
              rx="2.5"
              fill="#BBF7D0"
            />
            <rect
              x="286"
              y="67"
              width="42"
              height="5"
              rx="2.5"
              fill="#DCFCE7"
            />

            {/* Floating badge — bottom left */}
            <rect
              x="44"
              y="200"
              width="96"
              height="56"
              rx="10"
              fill="white"
              style={{ filter: "drop-shadow(0 4px 12px rgba(34,197,94,0.18))" }}
            />
            <rect x="56" y="212" width="72" height="6" rx="3" fill="#BBF7D0" />
            <rect x="56" y="224" width="52" height="6" rx="3" fill="#DCFCE7" />
            <rect x="56" y="236" width="62" height="6" rx="3" fill="#BBF7D0" />
            <rect x="56" y="248" width="40" height="6" rx="3" fill="#DCFCE7" />

            {/* Floating badge — bottom right */}
            <rect
              x="264"
              y="248"
              width="96"
              height="56"
              rx="10"
              fill="white"
              style={{ filter: "drop-shadow(0 4px 12px rgba(34,197,94,0.18))" }}
            />
            {/* Mini bar chart */}
            <rect
              x="276"
              y="272"
              width="10"
              height="24"
              rx="3"
              fill="#BBF7D0"
            />
            <rect
              x="290"
              y="262"
              width="10"
              height="34"
              rx="3"
              fill="#4ADE80"
            />
            <rect
              x="304"
              y="266"
              width="10"
              height="30"
              rx="3"
              fill="#16A34A"
            />
            <rect
              x="318"
              y="256"
              width="10"
              height="40"
              rx="3"
              fill="#15803D"
            />
            <rect x="276" y="297" width="52" height="4" rx="2" fill="#DCFCE7" />

            {/* Dashed connectors */}
            <line
              x1="80"
              y1="200"
              x2="140"
              y2="230"
              stroke="#BBF7D0"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <line
              x1="296"
              y1="88"
              x2="310"
              y2="80"
              stroke="#BBF7D0"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <line
              x1="304"
              y1="200"
              x2="280"
              y2="248"
              stroke="#BBF7D0"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />

            {/* Star / success icon bottom center */}
            <circle
              cx="200"
              cy="296"
              r="16"
              fill="white"
              style={{ filter: "drop-shadow(0 2px 8px rgba(34,197,94,0.14))" }}
            />
            <path
              d="M200 282 L202.9 291 L212 291 L204.5 296.5 L207.4 305.5 L200 300 L192.6 305.5 L195.5 296.5 L188 291 L197.1 291 Z"
              fill="#4ADE80"
            />
          </svg>
        </div>
      </div>

      {/* Text */}
      <p className="text-gray-900 leading-relaxed mb-4 text-base font-semibold">
        When your software is built for your business, everything works better —
        not just one thing.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        The real value of custom software isn't just automation. It's the
        compounding effect — when the right systems are in place, your team
        works faster, your data is reliable, your customers get better service,
        and your business can grow without the operations falling apart.
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        Here's what businesses consistently experience after switching to a
        system built specifically for them.
      </p>

      {/* Clear float */}
      <div className="clear-both" />

      {/* Benefits grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {[
          {
            icon: "⚙️",
            title: "Built Around How You Work",
            desc: "Every screen, every workflow, every report is designed around your actual process — not a generic template. Your team learns it fast because it works the way they already think.",
          },
          {
            icon: "📈",
            title: "Grows With Your Business",
            desc: "Start with what you need today. Add new features, users, or modules as your business expands — without switching platforms or migrating data.",
          },
          {
            icon: "🔒",
            title: "You Own It Completely",
            desc: "No monthly subscription. No vendor lock-in. The code, the data, and the system belong to you — hosted where you want, changed when you need.",
          },
          {
            icon: "⏱️",
            title: "Less Manual Work Every Day",
            desc: "Repetitive tasks like data entry, report generation, invoicing, and follow-ups get automated — freeing your team to focus on work that actually moves the business forward.",
          },
          {
            icon: "📊",
            title: "Real-Time Business Visibility",
            desc: "See exactly what's happening in your business — sales, stock, staff performance, pending tasks — from a single dashboard, any time, on any device.",
          },
          {
            icon: "🤝",
            title: "Better Customer Experience",
            desc: "Faster responses, accurate information, and smoother service delivery. When your internal systems work well, your customers feel the difference.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm"
          >
            <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
            <div>
              <p className="text-gray-800 font-semibold text-sm mb-1">
                {item.title}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* One-time vs subscription cost note */}
      <div className="bg-green-50 border border-green-100 rounded-xl px-5 py-4 mb-6 flex gap-4 items-start">
        <span className="text-2xl shrink-0">💡</span>
        <div>
          <p className="text-gray-800 font-semibold text-sm mb-1">
            One investment. Long-term value.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Unlike SaaS tools that charge you every month forever, custom
            software is a one-time investment. Most businesses recover the cost
            within the first year through time saved, errors reduced, and
            operations streamlined.
          </p>
        </div>
      </div>

      {/* Callout */}
      <aside
        role="note"
        className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 px-6 py-5 rounded-r-xl"
      >
        <strong className="block text-green-700 text-sm font-semibold mb-1">
          ✅ The bottom line
        </strong>
        <p className="text-green-800 text-sm leading-relaxed">
          Custom software doesn't just solve today's problems — it gives your
          business a foundation to operate more efficiently, serve customers
          better, and scale without friction. It's not an expense. It's
          infrastructure.
        </p>
      </aside>
    </section>
  );
}

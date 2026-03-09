export default function Industries() {
  const industries = [
    {
      label: "Transport & Logistics",
      desc: "TMS, LR, e-Way Bill, Fleet & Trip Management",
      color: {
        bg: "bg-blue-50",
        hover: "hover:bg-blue-100",
        border: "border-blue-100 hover:border-blue-300",
        icon: "text-blue-600",
        badge: "bg-blue-100 text-blue-700",
      },
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="16"
            width="30"
            height="18"
            rx="3"
            fill="currentColor"
            fillOpacity=".12"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M32 22h8l4 6v6h-12V22z"
            fill="currentColor"
            fillOpacity=".18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle
            cx="10"
            cy="36"
            r="4"
            fill="currentColor"
            stroke="white"
            strokeWidth="1.5"
          />
          <circle
            cx="36"
            cy="36"
            r="4"
            fill="currentColor"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M6 24h16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 28h10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M34 26h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Housing Society",
      desc: "RWA Billing, Complaints, Visitor & AGM Management",
      color: {
        bg: "bg-emerald-50",
        hover: "hover:bg-emerald-100",
        border: "border-emerald-100 hover:border-emerald-300",
        icon: "text-emerald-600",
        badge: "bg-emerald-100 text-emerald-700",
      },
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6"
            y="18"
            width="36"
            height="26"
            rx="2"
            fill="currentColor"
            fillOpacity=".12"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 20L24 6l20 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="12"
            y="28"
            width="7"
            height="7"
            rx="1"
            fill="currentColor"
            fillOpacity=".3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="29"
            y="28"
            width="7"
            height="7"
            rx="1"
            fill="currentColor"
            fillOpacity=".3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="19"
            y="32"
            width="10"
            height="12"
            rx="1"
            fill="currentColor"
            fillOpacity=".2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M24 32v12"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Manufacturing",
      desc: "Production Planning, BOM, Shop Floor & Quality",
      color: {
        bg: "bg-violet-50",
        hover: "hover:bg-violet-100",
        border: "border-violet-100 hover:border-violet-300",
        icon: "text-violet-600",
        badge: "bg-violet-100 text-violet-700",
      },
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="28"
            width="40"
            height="16"
            rx="2"
            fill="currentColor"
            fillOpacity=".1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="10"
            y="20"
            width="8"
            height="8"
            rx="1"
            fill="currentColor"
            fillOpacity=".2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="24"
            y="16"
            width="8"
            height="12"
            rx="1"
            fill="currentColor"
            fillOpacity=".2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="38"
            y="22"
            width="6"
            height="6"
            rx="1"
            fill="currentColor"
            fillOpacity=".2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="14"
            cy="36"
            r="3"
            fill="currentColor"
            fillOpacity=".4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="28"
            cy="36"
            r="3"
            fill="currentColor"
            fillOpacity=".4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="40"
            cy="36"
            r="3"
            fill="currentColor"
            fillOpacity=".4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 10c0-2 2-4 6-4s4 4 4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Warehousing",
      desc: "WMS, Inward-Outward, Barcode & Stock Reconciliation",
      color: {
        bg: "bg-amber-50",
        hover: "hover:bg-amber-100",
        border: "border-amber-100 hover:border-amber-300",
        icon: "text-amber-600",
        badge: "bg-amber-100 text-amber-700",
      },
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 20L24 8l20 12v24H4V20z"
            fill="currentColor"
            fillOpacity=".1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect
            x="10"
            y="24"
            width="8"
            height="6"
            rx="1"
            fill="currentColor"
            fillOpacity=".25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="22"
            y="24"
            width="8"
            height="6"
            rx="1"
            fill="currentColor"
            fillOpacity=".25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="34"
            y="24"
            width="6"
            height="6"
            rx="1"
            fill="currentColor"
            fillOpacity=".25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="18"
            y="32"
            width="12"
            height="12"
            rx="1"
            fill="currentColor"
            fillOpacity=".2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M4 20h40" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M24 8v36"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity=".3"
            strokeDasharray="2 3"
          />
        </svg>
      ),
    },
    {
      label: "Retail & Trading",
      desc: "POS, Multi-branch Stock, GST Invoicing & CRM",
      color: {
        bg: "bg-rose-50",
        hover: "hover:bg-rose-100",
        border: "border-rose-100 hover:border-rose-300",
        icon: "text-rose-600",
        badge: "bg-rose-100 text-rose-700",
      },
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 14l4-8h28l4 8H6z"
            fill="currentColor"
            fillOpacity=".12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect
            x="6"
            y="14"
            width="36"
            height="28"
            rx="2"
            fill="currentColor"
            fillOpacity=".08"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16 14c0 4.418 3.582 8 8 8s8-3.582 8-8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 14c0 4.418 2.686 8 6 8s6-3.582 6-8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M30 14c0 4.418 2.686 8 6 8s6-3.582 6-8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <rect
            x="16"
            y="30"
            width="16"
            height="12"
            rx="1.5"
            fill="currentColor"
            fillOpacity=".2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M24 30v12"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Pharma & Healthcare",
      desc: "Batch Tracking, Expiry, Drug Licensing & Compliance",
      color: {
        bg: "bg-cyan-50",
        hover: "hover:bg-cyan-100",
        border: "border-cyan-100 hover:border-cyan-300",
        icon: "text-cyan-600",
        badge: "bg-cyan-100 text-cyan-700",
      },
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="6"
            width="32"
            height="36"
            rx="3"
            fill="currentColor"
            fillOpacity=".08"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M20 6v36"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity=".2"
          />
          <path
            d="M16 16h6M16 22h6M16 28h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle
            cx="33"
            cy="21"
            r="7"
            fill="currentColor"
            fillOpacity=".12"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M33 18v6M30 21h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-4">
            Deep Domain Knowledge Across{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              6 Key Industries
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We don't take every project. We work in domains where we've already
            made the mistakes, learned the edge cases, and know what Indian
            businesses actually need.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className={`group relative ${ind.color.bg} ${ind.color.hover} border ${ind.color.border} rounded-3xl p-7 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden`}
            >
              {/* subtle radial glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 70%)",
                }}
              />

              {/* Icon + badge row */}
              <div className="flex items-start justify-between mb-5 relative">
                <div
                  className={`${ind.color.icon} transition-transform duration-300 group-hover:scale-110`}
                >
                  {ind.icon}
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${ind.color.badge}`}
                >
                  Live
                </span>
              </div>

              {/* Text */}
              <h3 className="font-bold text-gray-900 text-base mb-1.5 relative">
                {ind.label}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed relative">
                {ind.desc}
              </p>

              {/* Bottom arrow on hover */}
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 relative">
                <span className={ind.color.icon.replace("text-", "text-")}>
                  Learn more
                </span>
                <svg
                  className={`w-3.5 h-3.5 ${ind.color.icon}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-400 mt-10">
          Serving clients across{" "}
          <strong className="text-gray-500 font-semibold">
            West Bengal · Delhi NCR · Maharashtra · Rajasthan · Gujarat · Tamil
            Nadu
          </strong>{" "}
          and internationally in{" "}
          <strong className="text-gray-500 font-semibold">
            UAE · UK · Singapore
          </strong>
        </p>
      </div>
    </section>
  );
}

export default function CostOfCustomSoftware() {
  const tiers = [
    {
      label: "Simple Internal Tool",
      range: "₹50K – ₹1.5L",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
          <rect x="8" y="4" width="24" height="30" rx="4" fill="#BFDBFE" />
          <rect x="12" y="10" width="16" height="3" rx="1.5" fill="#93C5FD" />
          <rect x="12" y="16" width="12" height="3" rx="1.5" fill="#93C5FD" />
          <rect x="12" y="22" width="14" height="3" rx="1.5" fill="#DBEAFE" />
          <circle cx="28" cy="28" r="7" fill="#3B82F6" />
          <path
            d="M25 28 L27.5 30.5 L32 26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      desc: "Single-purpose tools for small businesses — billing software, attendance tracker, basic inventory, or a simple client portal.",
      examples: ["Billing Software", "Attendance System", "Basic Inventory"],
      highlight: false,
    },
    {
      label: "Mid-Size Business Software",
      range: "₹1.5L – ₹5L",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
          <rect x="4" y="8" width="14" height="10" rx="2" fill="#BFDBFE" />
          <rect x="22" y="8" width="14" height="10" rx="2" fill="#BFDBFE" />
          <rect x="4" y="22" width="14" height="10" rx="2" fill="#DBEAFE" />
          <rect x="22" y="22" width="14" height="10" rx="2" fill="#DBEAFE" />
          <line
            x1="18"
            y1="13"
            x2="22"
            y2="13"
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
            y1="27"
            x2="22"
            y2="27"
            stroke="#3B82F6"
            strokeWidth="2"
          />
        </svg>
      ),
      desc: "Multi-module systems combining sales, inventory, CRM, or reporting into one connected platform for growing businesses.",
      examples: ["CRM + Billing", "School ERP", "Transport System"],
      highlight: false,
    },
    {
      label: "Odoo Implementation",
      range: "₹1L – ₹8L",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
          <path d="M20 4 L34 11 L34 25 L20 32 L6 25 L6 11 Z" fill="#E8D5E3" />
          <path
            d="M20 9 L29 13.5 L29 22.5 L20 27 L11 22.5 L11 13.5 Z"
            fill="#C4A0B8"
          />
          <circle cx="20" cy="18" r="5" fill="#714B67" />
          <circle cx="20" cy="18" r="2.5" fill="white" />
        </svg>
      ),
      desc: "Odoo setup, module configuration, customisation, and data migration. Cost depends on number of modules and complexity.",
      examples: ["Odoo Setup", "Module Customisation", "Data Migration"],
      highlight: true,
    },
    {
      label: "Full ERP / Complex System",
      range: "₹5L – ₹15L+",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
          <rect x="4" y="4" width="32" height="32" rx="6" fill="#BFDBFE" />
          <rect x="8" y="8" width="10" height="10" rx="2" fill="#3B82F6" />
          <rect x="22" y="8" width="10" height="10" rx="2" fill="#60A5FA" />
          <rect x="8" y="22" width="10" height="10" rx="2" fill="#60A5FA" />
          <rect x="22" y="22" width="10" height="10" rx="2" fill="#93C5FD" />
          <line
            x1="18"
            y1="13"
            x2="22"
            y2="13"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="13"
            y1="18"
            x2="13"
            y2="22"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="27"
            y1="18"
            x2="27"
            y2="22"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="18"
            y1="27"
            x2="22"
            y2="27"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      ),
      desc: "Enterprise-grade systems with multiple integrated modules, advanced reporting, role-based access, mobile apps, and API integrations.",
      examples: ["Full ERP", "Multi-Branch System", "Enterprise Portal"],
      highlight: false,
    },
  ];

  return (
    <section id="cost-of-custom-software" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        12 — Pricing
      </p>
      <h2 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-200">
        Cost of Custom Software Development
      </h2>

      <p className="text-gray-600 leading-relaxed mt-4 mb-3">
        Custom software cost depends on what you need built. There's no single
        number — but we can give you a clear general idea based on the type of
        project. These are ballpark ranges based on our past projects to help
        you plan your budget before we talk.
      </p>

      {/* Honest note */}
      <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-8">
        <span className="text-base shrink-0 mt-0.5">💡</span>
        <p className="text-blue-700 text-xs leading-relaxed">
          Every project is scoped individually. The exact cost is confirmed only
          after a free consultation where we understand your requirements — not
          before. These ranges are a general guide, not a quote.
        </p>
      </div>

      {/* Tier cards — 2 column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className={`
              flex flex-col gap-3 rounded-xl px-5 py-5 border
              shadow-sm hover:shadow-md transition-all duration-200
              ${
                tier.highlight
                  ? "border-[#714B6730] bg-[#714B6705]"
                  : "border-gray-100 bg-white"
              }
            `}
          >
            {/* Top row — icon + label + price */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`
                    shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border
                    ${
                      tier.highlight
                        ? "bg-[#714B6710] border-[#714B6725]"
                        : "bg-blue-50 border-blue-100"
                    }
                  `}
                >
                  {tier.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-gray-800 font-semibold text-sm leading-snug">
                      {tier.label}
                    </p>
                    {tier.highlight && (
                      <span
                        className="text-xs font-semibold rounded-full px-2 py-0.5 border"
                        style={{
                          color: "#714B67",
                          backgroundColor: "#714B6710",
                          borderColor: "#714B6730",
                        }}
                      >
                        Odoo
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Price badge */}
              <div className="shrink-0 text-right">
                <p
                  className={`text-sm font-bold leading-tight ${
                    tier.highlight ? "text-[#714B67]" : "text-blue-600"
                  }`}
                >
                  {tier.range}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">approx.</p>
              </div>
            </div>

            {/* Desc */}
            <p className="text-gray-500 text-sm leading-relaxed">{tier.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {tier.examples.map((ex) => (
                <span
                  key={ex}
                  className={`
                    text-xs rounded-full px-2.5 py-0.5 border font-medium
                    ${
                      tier.highlight
                        ? "text-[#714B67] bg-[#714B6708] border-[#714B6725]"
                        : "text-blue-500 bg-blue-50 border-blue-100"
                    }
                  `}
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SaaS vs Custom ROI note */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 mb-6 flex gap-4 items-start">
        <span className="text-xl shrink-0 mt-0.5">🔄</span>
        <div>
          <p className="text-gray-700 font-semibold text-sm mb-1">
            Custom software vs monthly SaaS — the real maths
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            A SaaS tool at ₹5,000/month costs ₹3,00,000 over 5 years — and you
            own nothing. A custom-built equivalent at ₹2L is yours permanently,
            with no recurring fees. Most businesses recover the investment
            within 18–24 months.
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
            🧮
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm mb-1">
              Get a free cost estimate for your project
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tell us what you want to build — we'll give you a clear, written
              estimate within 48 hours. No obligation, no sales pressure. Just
              an honest number.
            </p>
          </div>

          <a
            href="#start-project"
            className="shrink-0 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 whitespace-nowrap"
          >
            Get Free Estimate
            <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
              <path
                d="M2 7h10M7 3l4 4-4 4"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </aside>
    </section>
  );
}

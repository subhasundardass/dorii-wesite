export default function FutureTrends() {
  const trends = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle cx="20" cy="20" r="14" fill="#FEF3C7" />
          <circle cx="20" cy="20" r="8" fill="#FDE68A" />
          <path
            d="M15 20 C15 17 17 14 20 14 C23 14 25 17 25 20 C25 22 24 23.5 22 24.5 L22 26 L18 26 L18 24.5 C16 23.5 15 22 15 20Z"
            fill="#F59E0B"
          />
          <rect x="18" y="27" width="4" height="2" rx="1" fill="#FCD34D" />
          <rect x="18" y="30" width="4" height="2" rx="1" fill="#FCD34D" />
          <path
            d="M20 6 L20 8 M20 32 L20 34 M6 20 L8 20 M32 20 L34 20"
            stroke="#FCD34D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      number: "01",
      title: "AI-Powered Business Software",
      desc: "AI is moving from buzzword to real utility. Businesses are using it for demand forecasting, automated customer responses, invoice processing, and smarter reporting. We're actively integrating AI features into custom software — not as a gimmick, but where it genuinely saves time.",
      tag: "Happening Now",
      tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="12" y="4" width="16" height="28" rx="4" fill="#FEF3C7" />
          <rect x="15" y="8" width="10" height="6" rx="2" fill="#F59E0B" />
          <rect x="15" y="18" width="10" height="2" rx="1" fill="#FDE68A" />
          <rect x="15" y="22" width="7" height="2" rx="1" fill="#FDE68A" />
          <circle cx="20" cy="28" r="2" fill="#F59E0B" />
          <rect
            x="4"
            y="28"
            width="8"
            height="8"
            rx="2"
            fill="#FEF3C7"
            stroke="#FCD34D"
            strokeWidth="1.5"
          />
          <rect
            x="28"
            y="28"
            width="8"
            height="8"
            rx="2"
            fill="#FEF3C7"
            stroke="#FCD34D"
            strokeWidth="1.5"
          />
          <line
            x1="12"
            y1="32"
            x2="4"
            y2="32"
            stroke="#FCD34D"
            strokeWidth="1.5"
          />
          <line
            x1="28"
            y1="32"
            x2="28"
            y2="32"
            stroke="#FCD34D"
            strokeWidth="1.5"
          />
        </svg>
      ),
      number: "02",
      title: "Mobile-First Software",
      desc: "Business owners and field teams increasingly expect everything on their phone. The shift to mobile-first software — where the phone is the primary interface, not the desktop — is accelerating across small and mid-size businesses in India.",
      tag: "Growing Fast",
      tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <ellipse
            cx="20"
            cy="18"
            rx="10"
            ry="7"
            fill="#FEF3C7"
            stroke="#FCD34D"
            strokeWidth="1.5"
          />
          <ellipse
            cx="20"
            cy="22"
            rx="10"
            ry="7"
            fill="#FDE68A"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
          <ellipse
            cx="20"
            cy="26"
            rx="10"
            ry="7"
            fill="#FEF3C7"
            stroke="#FCD34D"
            strokeWidth="1.5"
          />
          <ellipse
            cx="20"
            cy="26"
            rx="10"
            ry="7"
            fill="#FDE68A"
            stroke="#F59E0B"
            strokeWidth="1.5"
            opacity="0.6"
          />
        </svg>
      ),
      number: "03",
      title: "Cloud-Native Architecture",
      desc: "On-premise servers are giving way to cloud-hosted systems that are cheaper to run, easier to scale, and accessible from anywhere. All new software we build is cloud-native by default — meaning your data is secure, always available, and ready to grow.",
      tag: "Industry Standard",
      tagColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle
            cx="12"
            cy="20"
            r="6"
            fill="#FEF3C7"
            stroke="#FCD34D"
            strokeWidth="1.5"
          />
          <circle
            cx="28"
            cy="12"
            r="6"
            fill="#FDE68A"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
          <circle
            cx="28"
            cy="28"
            r="6"
            fill="#FEF3C7"
            stroke="#FCD34D"
            strokeWidth="1.5"
          />
          <line
            x1="18"
            y1="17"
            x2="22"
            y2="14"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="18"
            y1="23"
            x2="22"
            y2="26"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="20" r="2.5" fill="#F59E0B" />
          <circle cx="28" cy="12" r="2.5" fill="#F59E0B" />
          <circle cx="28" cy="28" r="2.5" fill="#F59E0B" />
        </svg>
      ),
      number: "04",
      title: "API-First & Connected Systems",
      desc: "Businesses no longer want isolated software. Everything needs to connect — your billing to your inventory, your CRM to your WhatsApp, your ERP to your bank. API-first development is the standard we build to from day one.",
      tag: "We Build This",
      tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <path
            d="M20 6 L34 14 L34 26 C34 32 28 37 20 37 C12 37 6 32 6 26 L6 14 Z"
            fill="#FEF3C7"
          />
          <path
            d="M20 11 L29 17 L29 25 C29 29 25 33 20 33 C15 33 11 29 11 25 L11 17 Z"
            fill="#FDE68A"
          />
          <path
            d="M16 23 L19 26 L25 19"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      number: "05",
      title: "Data Security & Compliance",
      desc: "With India's Digital Personal Data Protection Act (DPDPA) now in effect, businesses need software that handles data responsibly. We build with security best practices, role-based access, audit logs, and data encryption as defaults — not afterthoughts.",
      tag: "Regulatory",
      tagColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="4" width="32" height="32" rx="6" fill="#FEF3C7" />
          <rect
            x="8"
            y="14"
            width="24"
            height="14"
            rx="3"
            fill="#FDE68A"
            stroke="#FCD34D"
            strokeWidth="1.5"
          />
          <path
            d="M14 10 L20 16 L26 10"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="12"
            y1="21"
            x2="28"
            y2="21"
            stroke="#FCD34D"
            strokeWidth="1.5"
          />
          <line
            x1="12"
            y1="25"
            x2="20"
            y2="25"
            stroke="#FDE68A"
            strokeWidth="1.5"
          />
          <circle cx="26" cy="25" r="4" fill="#F59E0B" />
          <path
            d="M24 25 L26 27 L29 23"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      number: "06",
      title: "Low-Code & Odoo Customisation",
      desc: "Platforms like Odoo are making it faster and cheaper to deliver complex business software. Rather than building every feature from scratch, we use Odoo as a powerful base and customise it heavily — giving you enterprise capability at a fraction of the cost.",
      tag: "Our Core Strength",
      tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    },
  ];

  return (
    <section id="future-trends" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        13 — Trends
      </p>
      <h2 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-200">
        Future Trends in Custom Software Development
      </h2>

      <p className="text-gray-600 leading-relaxed mt-4 mb-8">
        Software is evolving fast. Here are the trends shaping how businesses
        will run their operations over the next few years — and how we're
        already building for them.
      </p>

      {/* Trend cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {trends.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 bg-white border border-amber-100 rounded-xl px-5 py-5 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-200"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-amber-400 tracking-widest">
                  {item.number}
                </span>
              </div>
              {/* Tag */}
              <span
                className={`text-xs font-semibold rounded-full px-2.5 py-0.5 border shrink-0 ${item.tagColor}`}
              >
                {item.tag}
              </span>
            </div>

            {/* Title */}
            <p className="text-gray-800 font-semibold text-sm leading-snug">
              {item.title}
            </p>

            {/* Desc */}
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom callout */}
      <aside
        role="note"
        className="relative overflow-hidden rounded-2xl px-6 py-6"
        style={{
          background: "linear-gradient(135deg, #78350F, #92400E)",
        }}
      >
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-amber-400 opacity-10" />
        <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-yellow-300 opacity-10" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
            🚀
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">
              Build for today. Ready for tomorrow.
            </p>
            <p className="text-amber-200 text-sm leading-relaxed">
              Every system we build is designed with future scalability in mind
              — so when AI, mobile, or new integrations become essential for
              your business, your software is already ready for it.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}

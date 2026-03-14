import Link from "next/link";

export default function IndustriesWeServe() {
  const industries = [
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="6" y="8" width="28" height="26" rx="4" fill="#E8D5E3" />
          <rect x="6" y="8" width="28" height="10" rx="4" fill="#C4A0B8" />
          <rect x="6" y="14" width="28" height="4" fill="#C4A0B8" />
          <rect x="10" y="22" width="8" height="8" rx="2" fill="#D4B8CC" />
          <rect x="22" y="22" width="5" height="3" rx="1" fill="#D4B8CC" />
          <rect x="22" y="27" width="8" height="3" rx="1" fill="#D4B8CC" />
          <circle cx="30" cy="12" r="3" fill="#714B67" />
        </svg>
      ),
      title: "Healthcare & Clinics",
      desc: "Patient records, appointment scheduling, billing, pharmacy management, and lab reports — all in one connected system.",
      examples: ["Hospital Management", "Clinic Software", "Lab Reports"],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="18" width="32" height="16" rx="3" fill="#E8D5E3" />
          <rect x="10" y="10" width="20" height="10" rx="3" fill="#C4A0B8" />
          <rect x="14" y="4" width="12" height="8" rx="2" fill="#D4B8CC" />
          <rect x="14" y="26" width="5" height="8" rx="1" fill="#D4B8CC" />
          <rect x="21" y="26" width="5" height="8" rx="1" fill="#D4B8CC" />
          <rect x="8" y="22" width="6" height="5" rx="1" fill="#C4A0B8" />
          <rect x="26" y="22" width="6" height="5" rx="1" fill="#C4A0B8" />
        </svg>
      ),
      title: "Education & Schools",
      desc: "Admissions, attendance, fee collection, exam results, and staff management — built for schools, colleges, and coaching centres.",
      examples: ["School ERP", "Fee Management", "Exam Portal"],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="2" y="16" width="28" height="14" rx="4" fill="#E8D5E3" />
          <rect x="28" y="20" width="10" height="8" rx="3" fill="#D4B8CC" />
          <circle cx="10" cy="32" r="4" fill="#714B67" />
          <circle cx="10" cy="32" r="2" fill="white" />
          <circle cx="24" cy="32" r="4" fill="#714B67" />
          <circle cx="24" cy="32" r="2" fill="white" />
          <rect x="6" y="10" width="16" height="8" rx="2" fill="#C4A0B8" />
          <line
            x1="10"
            y1="6"
            x2="10"
            y2="10"
            stroke="#D4B8CC"
            strokeWidth="1.5"
          />
          <line
            x1="18"
            y1="6"
            x2="18"
            y2="10"
            stroke="#D4B8CC"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Transport & Logistics",
      desc: "Fleet tracking, route management, driver records, freight billing, and delivery status — built for transport operators across North Bengal.",
      examples: ["Fleet Management", "Route Planning", "Freight Billing"],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="10" width="32" height="22" rx="4" fill="#E8D5E3" />
          <rect x="4" y="10" width="32" height="8" rx="4" fill="#C4A0B8" />
          <rect x="4" y="14" width="32" height="4" fill="#C4A0B8" />
          <rect x="8" y="22" width="6" height="6" rx="1.5" fill="#D4B8CC" />
          <rect x="17" y="22" width="6" height="6" rx="1.5" fill="#D4B8CC" />
          <rect x="26" y="22" width="6" height="6" rx="1.5" fill="#D4B8CC" />
          <circle cx="11" cy="14" r="2" fill="#E8D5E3" />
          <circle cx="17" cy="14" r="2" fill="#E8D5E3" />
        </svg>
      ),
      title: "Hotel & Hospitality",
      desc: "Room booking, check-in/check-out, housekeeping, billing, and guest management — for hotels, resorts, and guesthouses.",
      examples: ["Room Booking", "Guest Management", "Housekeeping"],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="6" y="6" width="28" height="28" rx="4" fill="#E8D5E3" />
          <rect x="10" y="10" width="8" height="8" rx="2" fill="#C4A0B8" />
          <rect x="22" y="10" width="8" height="8" rx="2" fill="#C4A0B8" />
          <rect x="10" y="22" width="8" height="8" rx="2" fill="#C4A0B8" />
          <rect x="22" y="22" width="8" height="8" rx="2" fill="#D4B8CC" />
          <line
            x1="18"
            y1="14"
            x2="22"
            y2="14"
            stroke="#714B67"
            strokeWidth="1.5"
          />
          <line
            x1="14"
            y1="18"
            x2="14"
            y2="22"
            stroke="#714B67"
            strokeWidth="1.5"
          />
          <line
            x1="26"
            y1="18"
            x2="26"
            y2="22"
            stroke="#714B67"
            strokeWidth="1.5"
          />
          <line
            x1="18"
            y1="26"
            x2="22"
            y2="26"
            stroke="#714B67"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Retail & Trading",
      desc: "Inventory tracking, purchase orders, sales billing, supplier management, and profit reports — for shops, wholesalers, and distributors.",
      examples: ["Inventory", "Billing", "Supplier Management"],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <circle cx="20" cy="14" r="8" fill="#C4A0B8" />
          <circle cx="20" cy="14" r="4" fill="#E8D5E3" />
          <path d="M6 34 C6 26 12 22 20 22 C28 22 34 26 34 34" fill="#E8D5E3" />
          <circle cx="10" cy="28" r="3" fill="#D4B8CC" />
          <circle cx="30" cy="28" r="3" fill="#D4B8CC" />
        </svg>
      ),
      title: "Tour & Travel",
      desc: "Booking management, itinerary creation, customer records, agent commissions, and payment tracking for tour operators and travel agencies.",
      examples: ["Booking System", "Itinerary Builder", "Agent Portal"],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="4" y="12" width="32" height="20" rx="4" fill="#E8D5E3" />
          <rect x="8" y="8" width="10" height="6" rx="2" fill="#C4A0B8" />
          <rect x="22" y="8" width="10" height="6" rx="2" fill="#C4A0B8" />
          <rect x="8" y="18" width="10" height="8" rx="2" fill="#D4B8CC" />
          <rect x="22" y="18" width="10" height="8" rx="2" fill="#D4B8CC" />
          <line
            x1="13"
            y1="14"
            x2="13"
            y2="18"
            stroke="#714B67"
            strokeWidth="1.5"
          />
          <line
            x1="27"
            y1="14"
            x2="27"
            y2="18"
            stroke="#714B67"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Manufacturing",
      desc: "Production planning, raw material tracking, quality control, machine downtime logs, and dispatch management for factories and small manufacturers.",
      examples: ["Production Planning", "Stock Control", "Dispatch"],
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          <rect x="6" y="4" width="28" height="32" rx="4" fill="#E8D5E3" />
          <rect x="10" y="10" width="20" height="3" rx="1.5" fill="#C4A0B8" />
          <rect x="10" y="16" width="14" height="3" rx="1.5" fill="#D4B8CC" />
          <rect x="10" y="22" width="18" height="3" rx="1.5" fill="#D4B8CC" />
          <rect x="10" y="28" width="10" height="3" rx="1.5" fill="#D4B8CC" />
          <circle cx="30" cy="30" r="7" fill="#714B67" />
          <path
            d="M27 30 L29.5 32.5 L34 27"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Professional Services",
      desc: "Client management, project tracking, invoicing, and document management for law firms, consultancies, agencies, and freelance businesses.",
      examples: ["Client Portal", "Invoicing", "Project Tracker"],
    },
  ];

  return (
    <section id="industries-we-serve" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        09 — Industries
      </p>
      <h2 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-200">
        Industries We Serve
      </h2>

      <p className="text-gray-600 leading-relaxed mt-4 mb-6">
        We build custom software for businesses across industries — and for many
        of them, we implement and customise{" "}
        <Link href={"https://www.odoo.com/"}>
          <strong className="text-[#714B67]">Odoo</strong>
        </Link>
        , the world's most widely used open-source ERP. Whether you need a fully
        custom-built system or a tailored Odoo implementation, we have the
        experience to deliver it.
      </p>

      {/* Odoo highlight banner */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl px-6 py-5 mb-8 border"
        style={{
          background: "linear-gradient(135deg, #714B6710 0%, #017E8410 100%)",
          borderColor: "#714B6730",
        }}
      >
        {/* Odoo hexagon logo mark */}
        <div
          className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: "#714B67" }}
        >
          <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
            <path
              d="M16 3 L27 9 L27 21 L16 27 L5 21 L5 9 Z"
              fill="white"
              opacity="0.3"
            />
            <circle cx="16" cy="14" r="6" fill="white" />
            <circle cx="16" cy="14" r="3" fill="#714B67" />
          </svg>
        </div>
        <div className="flex-1">
          <p
            className="font-semibold text-sm mb-1"
            style={{ color: "#714B67" }}
          >
            We work heavily in Odoo
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Odoo is at the core of what we do. We implement, customise, and
            extend Odoo for businesses across every industry below — from
            inventory and billing to HR and CRM. If Odoo can solve it, we'll
            configure it exactly the way your business needs.
          </p>
        </div>

        <Link
          href="/services/odoo-customisation"
          className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl text-white transition-opacity duration-200 hover:opacity-90 whitespace-nowrap"
          style={{ backgroundColor: "#714B67" }}
        >
          Explore Odoo Services
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

      {/* Industry cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {industries.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200 border"
            style={{ borderColor: "#714B6720" }}
          >
            {/* Icon */}
            <div
              className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5 border"
              style={{ backgroundColor: "#714B6708", borderColor: "#714B6720" }}
            >
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-gray-800 font-semibold text-sm mb-1 leading-snug">
                {item.title}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                {item.desc}
              </p>

              {/* Bottom row — tags + Odoo link */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                {/* Example tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.examples.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full px-2.5 py-0.5 border font-medium"
                      style={{
                        backgroundColor: "#714B6708",
                        borderColor: "#714B6725",
                        color: "#714B67",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Odoo link */}

                <Link
                  href="/services/odoo-customisation"
                  className="group inline-flex items-center gap-1.5 shrink-0 text-xs font-semibold rounded-full px-3 py-1 border transition-all duration-200 hover:text-white"
                  style={{
                    color: "#714B67",
                    backgroundColor: "#714B6710",
                    borderColor: "#714B6730",
                  }}
                >
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    className="w-3 h-3 shrink-0"
                  >
                    <path
                      d="M7 1 L12 3.5 L12 8.5 L7 11 L2 8.5 L2 3.5 Z"
                      fill="currentColor"
                      opacity="0.4"
                    />
                    <circle cx="7" cy="6" r="2.5" fill="currentColor" />
                  </svg>
                  Also with Odoo
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    className="w-2.5 h-2.5 shrink-0"
                  >
                    <path
                      d="M2 5h6M5 2l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom callout */}
      <aside
        role="note"
        className="relative overflow-hidden rounded-2xl px-6 py-6"
        style={{ background: "linear-gradient(135deg, #714B67, #5a3a52)" }}
      >
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white opacity-5" />
        <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-white opacity-5" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
            🏢
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">
              Don't see your industry here?
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#D4B8CC" }}>
              These are the sectors we've worked in most — but we build software
              for any kind of business. Whether it's a fully custom build or an
              Odoo implementation, if the problem is real, we can solve it.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}

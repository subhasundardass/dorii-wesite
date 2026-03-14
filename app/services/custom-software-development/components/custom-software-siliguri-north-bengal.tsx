export default function CustomSoftwareLocation() {
  return (
    <section
      id="custom-software-siliguri-north-bengal"
      className="mb-14 scroll-mt-24"
    >
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        10 — Local & Global
      </p>
      <h2 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-200">
        Custom Software in Siliguri, North Bengal & Beyond
      </h2>

      <p className="text-gray-600 leading-relaxed mt-4 mb-8">
        We are based in Siliguri — but the businesses we build software for span
        across North Bengal, the Northeast, India, and abroad. Here's how we
        serve each market.
      </p>

      {/* ── SECTION A: Siliguri & North Bengal ── */}
      <div
        id="custom-software-siliguri-north-bengal"
        className="rounded-2xl border border-blue-100 overflow-hidden mb-6"
      >
        {/* Header */}
        <div className="bg-blue-50 border-b border-blue-100 px-6 py-5 flex items-start gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center">
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <circle cx="20" cy="16" r="8" fill="#BFDBFE" />
              <circle cx="20" cy="16" r="4" fill="#3B82F6" />
              <path
                d="M20 24 C20 24 10 34 10 38 L30 38 C30 34 20 24 20 24Z"
                fill="#DBEAFE"
              />
              <line
                x1="10"
                y1="38"
                x2="30"
                y2="38"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <circle cx="30" cy="10" r="4" fill="#93C5FD" />
              <circle cx="12" cy="26" r="3" fill="#BFDBFE" />
            </svg>
          </div>
          <div>
            <p className="text-blue-700 font-bold text-base mb-0.5">
              Siliguri & North Bengal
            </p>
            <p className="text-blue-500 text-xs">
              Our home market — where we know the businesses personally
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5 bg-white">
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Siliguri is the commercial hub of North Bengal — and it's where
            we've spent the last 5+ years building software for real businesses.
            We understand how trade works here, how logistics operates along the
            NH-10 and NH-27 corridors, how the tea garden economy functions in
            the Dooars, and what healthcare and education institutions across
            the region actually need from a software partner.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            That local knowledge means we don't need to be educated about your
            market. We already know it. That saves time, reduces
            misunderstandings, and gets you better software faster.
          </p>

          {/* Local coverage grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
            {[
              "Siliguri",
              "Jalpaiguri",
              "Darjeeling",
              "Alipurduar",
              "Cooch Behar",
              "Kalimpong",
              "Gangtok (Sikkim)",
              "Dooars Region",
              "Bagdogra",
            ].map((place) => (
              <div
                key={place}
                className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span className="text-blue-700 text-xs font-medium">
                  {place}
                </span>
              </div>
            ))}
          </div>

          {/* Local advantage cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                icon: "🤝",
                title: "Face-to-Face Meetings",
                desc: "We can meet in person, visit your office, and understand your workflow directly.",
              },
              {
                icon: "📞",
                title: "Local Support",
                desc: "When something needs fixing, you call us directly — no helpdesk, no ticket queue.",
              },
              {
                icon: "🏙️",
                title: "Market Knowledge",
                desc: "We understand local business culture, local compliance, and how North Bengal operates.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-4"
              >
                <span className="text-xl">{item.icon}</span>
                <p className="text-gray-800 font-semibold text-xs">
                  {item.title}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION B: Across India ── */}
      <div
        id="custom-software-india"
        className="rounded-2xl border border-orange-100 overflow-hidden mb-6"
      >
        {/* Header */}
        <div className="bg-orange-50 border-b border-orange-100 px-6 py-5 flex items-start gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-orange-100 shadow-sm flex items-center justify-center">
            <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
              <circle cx="20" cy="20" r="14" fill="#FED7AA" />
              <circle cx="20" cy="20" r="10" fill="#FFEDD5" />
              <ellipse
                cx="20"
                cy="20"
                rx="14"
                ry="6"
                stroke="#FB923C"
                strokeWidth="1.5"
                fill="none"
              />
              <line
                x1="6"
                y1="20"
                x2="34"
                y2="20"
                stroke="#FB923C"
                strokeWidth="1.5"
              />
              <line
                x1="20"
                y1="6"
                x2="20"
                y2="34"
                stroke="#FB923C"
                strokeWidth="1.5"
              />
              <circle cx="20" cy="20" r="3" fill="#F97316" />
            </svg>
          </div>
          <div>
            <p className="text-orange-700 font-bold text-base mb-0.5">
              Across India
            </p>
            <p className="text-orange-500 text-xs">
              Remote-first delivery for businesses anywhere in India
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5 bg-white">
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Being based in Siliguri doesn't limit who we work with. We deliver
            software remotely for clients across India — from Delhi and Mumbai
            to Chennai and Kolkata. Our development process is fully
            remote-friendly: video calls for requirement discussions, shared
            project management tools for progress tracking, and cloud-based
            delivery so you can access and review builds from anywhere.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Working with a Siliguri-based team also means you get serious
            engineering quality at a significantly lower cost than teams in
            metros — without compromising on technology, process, or
            communication.
          </p>

          {/* Remote advantage cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                icon: "💻",
                title: "Fully Remote Delivery",
                desc: "Complete project delivery over calls, shared tools, and cloud environments — no location barrier.",
              },
              {
                icon: "💰",
                title: "Metro Quality, Lower Cost",
                desc: "Same engineering standards as a Bangalore or Delhi team — at a fraction of the cost.",
              },
              {
                icon: "🕐",
                title: "IST Timezone",
                desc: "We work the same hours as you — real-time communication, no timezone delays.",
              },
              {
                icon: "🌐",
                title: "English Communication",
                desc: "All requirements, documentation, and support delivered in clear, professional English.",
              },
              {
                icon: "📄",
                title: "NDA & Contracts",
                desc: "Formal agreements, IP ownership clauses, and data security standards for every international project.",
              },
              {
                icon: "💵",
                title: "INR or USD Billing",
                desc: "Flexible invoicing in Indian Rupees or US Dollars — international wire transfers supported.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 bg-orange-50 border border-orange-100 rounded-xl px-4 py-4"
              >
                <span className="text-xl">{item.icon}</span>
                <p className="text-gray-800 font-semibold text-xs">
                  {item.title}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom callout */}
      <aside
        role="note"
        className="relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 px-6 py-6"
      >
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-500 opacity-10" />
        <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-violet-400 opacity-10" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
            📍
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">
              Wherever you are — we can build it
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Local in Siliguri. Available across India. Open to international
              projects. The location doesn't change the quality of what we build
              or how we work with you.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}

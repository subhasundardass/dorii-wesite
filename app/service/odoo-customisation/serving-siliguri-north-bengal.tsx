export default function ServingSiliguri() {
  return (
    <section
      id="serving-siliguri-north-bengal"
      className="scroll-mt-28 space-y-6"
    >
      <span className="text-sm font-semibold text-[#734B66] uppercase tracking-wide">
        Local Expertise
      </span>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
        Odoo Expert in Siliguri — Serving North Bengal & Beyond
      </h2>

      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          We are Siliguri’s dedicated Odoo development team. While many agencies
          operate remotely from metros, we are right here — understanding the
          local business landscape, the trading culture of North Bengal, and
          Indian compliance requirements.
        </p>

        <p>
          Whether you run a <strong>trading company in Siliguri</strong>, a
          manufacturing unit, a professional services firm, or a retail shop
          digitising operations — we’ve worked with businesses like yours and
          know what works.
        </p>
      </div>

      {/* Local Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            icon: "📍",
            title: "In-Person Meetings in Siliguri",
            desc: "We can sit down with you, understand operations first-hand, and provide on-site training when needed.",
          },
          {
            icon: "🏙️",
            title: "We Know North Bengal Business",
            desc: "Siliguri is a major trading hub for North Bengal, Sikkim, Bhutan, and Northeast India. We understand local trade patterns.",
          },
          {
            icon: "🌐",
            title: "Local Rates, Global Standards",
            desc: "You get international-level development quality at Siliguri-friendly pricing.",
          },
          {
            icon: "⚡",
            title: "Fast Local Support",
            desc: "Same city. Same timezone. Faster response and on-site assistance when required.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border  p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-2xl mb-3">{item.icon}</div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Areas Served */}
      <div className="flex flex-wrap gap-3 pt-4">
        <span className="font-semibold text-gray-700 dark:text-gray-300">
          Areas We Serve:
        </span>

        {[
          "Siliguri",
          "Darjeeling",
          "Jalpaiguri",
          "Gangtok",
          "Kurseong",
          "Cooch Behar",
          "Alipurduar",
          "North Bengal",
          "Sikkim",
          "Globally",
        ].map((city, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm bg-[#734B66] text-[#d3d3d3] rounded-full"
          >
            {city}
          </span>
        ))}
      </div>

      {/* Callout */}
      <div className="border-l-4 border-[#734B66]  p-6 rounded-r-xl">
        <h4 className="font-semibold text-[#734B66] mb-2">
          Looking for an Odoo expert near Siliguri?
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          You’ve found one. We offer in-person consultations, on-site training,
          and dedicated local business support.
          <a
            href="/contact"
            className="text-[#734B66] font-medium ml-1 hover:underline"
          >
            Book a free meeting today.
          </a>
        </p>
      </div>
    </section>
  );
}

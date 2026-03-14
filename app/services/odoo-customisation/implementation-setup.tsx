export default function ImplimentationSetup() {
  return (
    <section id="implementation-setup" className="scroll-mt-28 space-y-10">
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
          Odoo Implementation & Setup
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          A structured implementation ensures clean data, confident users, and
          long-term scalability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Requirements & Planning",
            desc: "We map your existing processes, identify what needs to carry over, and decide which Odoo modules you actually need — not a bloated list of everything possible.",
          },
          {
            title: "Installation & Configuration",
            desc: "Server setup (cloud or on-premise), Odoo 16/17 installation, and module configuration aligned with your workflows, GST settings, and naming conventions.",
          },
          {
            title: "Data Migration",
            desc: "Importing your existing customers, products, historical orders, and financial data — cleanly, with validation checks. We handle migration from Tally, Excel, legacy ERPs, and other platforms.",
          },
          {
            title: "Training & Go-Live",
            desc: "Role-specific user training, documentation, and a supported go-live. Your team should feel confident on day one — not overwhelmed.",
          },
          {
            title: "Post-Launch Support",
            desc: "We don't disappear after go-live. Monthly support plans cover bug fixes, user queries, minor enhancements, and annual version upgrade reviews.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex gap-5 p-6 rounded-xl border  shadow-sm hover:shadow-md transition"
          >
            {/* Rounded Number */}
            <div className="shrink-0 w-12 h-12 rounded-full bg-[#734B66] text-white flex items-center justify-center font-semibold text-sm shadow">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

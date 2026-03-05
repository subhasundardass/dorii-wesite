export default function IndustriesWeServe() {
  return (
    <section id="industries-we-serve" className="scroll-mt-28 space-y-10">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-sm font-semibold text-[#734B66] uppercase tracking-wide">
          Industries We Serve
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
          Odoo Solutions for Diverse Business Industries
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We provide industry-specific Odoo implementation and customisation
          services tailored to real operational challenges. Whether you run a
          manufacturing unit, trading company, retail store, or service
          organisation — we adapt Odoo to match your business workflows,
          compliance needs, and growth strategy.
        </p>
      </div>

      {/* Industry Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Manufacturing",
            desc: "MRP, BOM management, production planning, quality control, and inventory automation.",
          },
          {
            title: "Retail & E-commerce",
            desc: "POS integration, Shopify sync, stock tracking, multi-store management, and GST billing.",
          },
          {
            title: "Trading & Distribution",
            desc: "Purchase workflows, bulk pricing rules, warehouse logistics, and multi-location inventory.",
          },
          {
            title: "Construction",
            desc: "Project costing, material tracking, contractor billing, and site-wise reporting.",
          },
          {
            title: "Professional Services",
            desc: "Timesheets, project billing, CRM pipelines, automated invoicing, and performance dashboards.",
          },
          {
            title: "Hospitality",
            desc: "Property management, vendor procurement, accounting automation, and operational reporting.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group rounded-xl border  p-6  shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            {/* Accent Line */}
            <div className="w-10 h-1 bg-[#734B66] mb-4 rounded-full"></div>

            <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-[#734B66] transition">
              {item.title}
            </h5>

            <p className=" text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-l-4 border-[#734B66]  p-6 rounded-r-xl max-w-3xl">
        <h4 className="font-semibold text-[#734B66] mb-2">
          Don’t See Your Industry Listed?
        </h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We customise Odoo for unique and niche industries as well.
          <a
            href="/contact"
            className="text-[#734B66] font-medium hover:underline ml-1"
          >
            Talk to us about your requirements →
          </a>
        </p>
      </div>
    </section>
  );
}

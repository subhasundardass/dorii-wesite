import { title } from "process";

export default function CustoomModule() {
  return (
    <section id="custom-module-development" className="scroll-mt-28 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
        Custom Module Development
      </h2>

      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          When standard modules don’t fit your business logic,
          <strong> custom module development</strong> becomes essential.
        </p>

        <p>
          Modules are built using Python (backend), XML (views), and JavaScript
          (frontend), following Odoo’s MVC architecture. Every module we build
          is upgrade-safe and fully documented.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
        Common Examples
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Custom Pricing Rules",
            desc: "Complex tiered, customer-group, or region-specific pricing that Odoo's standard pricelists can't handle.",
          },
          {
            title: "Industry-Specific Workflows",
            desc: "Modules built around niche industries — textile, construction, trading, professional services, education.",
          },
          {
            title: "Custom Reports & Dashboards",
            desc: "Bespoke PDF reports and KPI dashboards tailored to your metrics, branded to your business.",
          },
          {
            title: "Portal Enhancements",
            desc: "Extended customer or vendor portals with custom views, document access, and approval workflows.",
          },
          {
            title: "GST & Indian Compliance",
            desc: "Custom modules for GST calculations, e-invoicing (IRN/QR), and compliance reports specific to Indian businesses.",
          },
          {
            title: "WhatsApp / SMS Integration",
            desc: "Automated WhatsApp or SMS notifications for orders, invoices, and delivery updates — popular with Indian SMBs.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border  p-6 shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="border-l-4 border-[#734B66]  p-6 rounded-r-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-[#734B66] mb-2">
            Have a Specific Module in Mind?
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            We’ll scope it and send a fixed-price quote — usually within 48
            hours.
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#734B66] text-white font-medium shadow-md hover:bg-[#5e3d54] transition-all duration-300"
        >
          Contact Us →
        </a>
      </div>
    </section>
  );
}

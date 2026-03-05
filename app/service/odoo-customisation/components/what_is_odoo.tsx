export default async function WhatIsOdoo() {
  return (
    <section id="what-is-odoo-customisation" className="scroll-mt-28 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
        What Is Odoo Customisation?
      </h2>

      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          <a
            href="https://www.odoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Odoo
          </a>{" "}
          is one of the most powerful open-source business management platforms
          available — covering CRM, accounting, inventory, HR, manufacturing,
          e-commerce, and more. But out of the box, Odoo is built for the
          average business. Your business isn't average.
          <strong> Your business isn’t average.</strong>
        </p>

        <p>
          <strong>Odoo customisation</strong> means modifying or extending Odoo
          to match your exact operational requirements — from small UI
          adjustments and custom fields, all the way to fully bespoke modules
          that add entirely new functionality. As the leading{" "}
          <strong>Odoo expert in Siliguri</strong>, we work with businesses
          across North Bengal and globally, helping them unlock Odoo's true
          potential through smart, purposeful customisation.
        </p>
      </div>

      {/* Callout */}
      <div className="border-l-4 border-[#734B66] p-6 rounded-r-xl">
        <h4 className="text-lg font-semibold text-[#734B66] mb-3">
          Why It Matters for Small Businesses
        </h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Large enterprises adapt their teams around software. Small businesses
          can’t afford that luxury. The right customisation ensures your
          software adapts around you — saving hours every week and eliminating
          costly errors.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
        Four Types of Odoo Customisation
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Configuration",
            desc: "Adjusting built-in settings and enabling features within existing modules. No coding — fastest and most cost-effective.",
          },
          {
            title: "Module Extension",
            desc: "Extending existing modules using Odoo inheritance without touching core code.",
          },
          {
            title: "Custom Module Development",
            desc: "Building entirely new modules from scratch for unique business logic.",
          },
          {
            title: "Third-Party Integration",
            desc: "Connecting Odoo to Shopify, Razorpay, Stripe, WhatsApp, logistics APIs, and more.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border  p-6 shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

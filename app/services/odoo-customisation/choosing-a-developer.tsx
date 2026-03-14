export default function ChooseDeveloper() {
  return (
    <section id="choosing-a-developer" className="scroll-mt-28 space-y-10">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-sm font-semibold text-[#734B66] uppercase tracking-wide">
          Hiring Guide
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
          How to Choose the Right Odoo Developer for Your Business
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Selecting the right Odoo developer is one of the most important
          decisions for your ERP success. A poorly structured implementation can
          lead to upgrade issues, unstable modules, and long-term maintenance
          headaches.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Whether you are hiring locally in Siliguri, anywhere in India, or
          internationally — here’s what you should evaluate before signing a
          contract.
        </p>
      </div>

      {/* Checklist Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Upgrade-Safe Development",
            desc: "Ensure the developer follows Odoo inheritance patterns and never modifies core files. Poor practices cause upgrade failures.",
          },
          {
            title: "Clear Scope Documentation",
            desc: "A professional developer defines deliverables, timelines, and edge cases before coding begins.",
          },
          {
            title: "Business Understanding",
            desc: "Technical skill alone is not enough. Your developer must understand workflows, accounting logic, and compliance.",
          },
          {
            title: "Indian Compliance Experience",
            desc: "If you operate in India, experience with GST, e-invoicing (IRN), TDS, and local tax rules is essential.",
          },
          {
            title: "Post-Launch Support",
            desc: "Ask about support policies. ERP systems require adjustments after go-live.",
          },
          {
            title: "Transparent Pricing",
            desc: "Avoid vague hourly commitments without scope clarity. Fixed pricing with milestones is safer.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border  p-6  shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="w-8 h-1 bg-[#734B66] mb-4 rounded-full"></div>

            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {item.title}
            </h4>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Warning Block */}
      <div className="border-l-4 border-red-300  p-6 rounded-r-xl max-w-3xl">
        <h4 className="font-semibold text-red-400 mb-2">
          ⚠ Common Mistake to Avoid
        </h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Choosing the cheapest freelancer without verifying architecture
          standards often leads to unstable systems and expensive rework. ERP
          customisation should be treated as a long-term investment — not a
          short-term cost decision.
        </p>
      </div>

      {/* Trust CTA */}
      <div className="border-l-4 border-[#734B66]  p-6 rounded-r-xl max-w-3xl">
        <h4 className="font-semibold text-[#734B66] mb-2">
          Looking for a Reliable Odoo Developer in Siliguri or India?
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          We combine 20+ years of business software experience with structured
          Odoo development practices. Let’s discuss your requirements and
          determine the most efficient approach.
          <a
            href="/contact"
            className="text-[#734B66] font-medium hover:underline ml-1"
          >
            Book a consultation →
          </a>
        </p>
      </div>
    </section>
  );
}

export default function DecisionGuide() {
  return (
    <section id="when-should-you-customise" className="scroll-mt-28 space-y-8">
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-sm font-semibold text-[#734B66] uppercase tracking-wide">
          Decision Guide
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
          When Should You Customise Odoo Instead of Using Standard Features?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Not every business requirement needs custom Odoo development. In many
          cases, standard Odoo configuration is enough. The key is understanding
          when customisation delivers real ROI — and when it simply increases
          cost and complexity.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Below is a practical decision guide to help business owners,
          operations managers, and finance teams determine whether Odoo
          customisation is justified.
        </p>
      </div>

      {/* Decision Table */}
      <div className="overflow-x-auto rounded-xl border text-sm">
        <table className="min-w-full text-left">
          <thead className="text-gray-700 dark:text-gray-300">
            <tr>
              <th className="p-4 border">Scenario</th>
              <th className="p-4 border">Recommendation</th>
              <th className="p-4 border">Why</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Your process is standard (CRM, invoicing, inventory)",
                "Use Standard Odoo",
                "Configuration is cheaper and easier to maintain",
              ],
              [
                "You re-enter the same data in multiple modules",
                "Automate Workflow",
                "Reduces manual errors and saves staff time",
              ],
              [
                "Business rules are not supported by existing modules",
                "Custom Module Development",
                "Ensures accurate calculations and reporting",
              ],
              [
                "You need GST, e-Invoicing, TDS, or Indian compliance",
                "Localisation Customisation",
                "Required for regulatory compliance in India",
              ],
              [
                "You want UI changes for aesthetics only",
                "Avoid Customisation",
                "High cost, low business value",
              ],
              [
                "Team refuses to adapt any internal process",
                "Revisit Change Management",
                "Software cannot fix cultural resistance",
              ],
            ].map((row, i) => (
              <tr key={i} className=" transition">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="p-4 border text-gray-700 dark:text-gray-300 align-top"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SEO Paragraph Expansion */}
      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Signs You Definitely Need Odoo Customisation
        </h3>

        <p>
          If your company relies on complex approval hierarchies, custom
          commission structures, multi-location stock rules, or unique pricing
          calculations, standard configuration may not be enough. In such cases,
          tailored Odoo module development ensures accuracy, automation, and
          long-term scalability.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          When Configuration Is Better Than Custom Development
        </h3>

        <p>
          If your workflows are close to industry standards, adapting your
          processes slightly to fit Odoo’s built-in logic is often more
          cost-effective. This reduces upgrade issues and keeps long-term
          maintenance simple.
        </p>

        <p>
          The smartest Odoo strategy balances configuration first, automation
          second, and custom development only when it delivers measurable
          business value.
        </p>
      </div>

      {/* Callout */}
      <div className="border-l-4 border-[#734B66]  p-6 rounded-r-xl">
        <h4 className="font-semibold text-[#734B66] mb-2">
          Not Sure What You Need?
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          We analyse your workflow and recommend the most cost-effective
          approach — configuration, automation, or full custom module
          development.
          <a
            href="/contact"
            className="text-[#734B66] font-medium hover:underline ml-1"
          >
            Request a consultation →
          </a>
        </p>
      </div>
    </section>
  );
}

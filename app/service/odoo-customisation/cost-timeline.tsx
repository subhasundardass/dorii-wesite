export default function CostTimeline() {
  return (
    <section id="cost-timeline" className="scroll-mt-28 space-y-8">
      <div className="max-w-3xl space-y-4">
        <span className="text-sm font-semibold text-[#734B66] uppercase tracking-wide">
          Cost & Timeline
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
          What Does Odoo Customisation Cost?
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Odoo customisation costs vary depending on complexity, integrations,
          reporting needs, and automation depth. Below is a realistic pricing
          comparison based on the Indian market.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
          These are typical investment ranges for small and mid-sized
          businesses. Final pricing depends on scope clarity, documentation, and
          required turnaround time.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border ">
        <table className="min-w-full text-left">
          <thead className=" text-gray-800 dark:text-gray-300">
            <tr>
              <th className="p-4 border">Type</th>
              <th className="p-4 border">USD</th>
              <th className="p-4 border">India (₹)</th>
              <th className="p-4 border">Timeframe</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Configuration", "$150 – $750", "₹12,500 – ₹60,000", "1–3 days"],
              [
                "Workflow Automation",
                "$250 – $1,250",
                "₹20,000 – ₹1,00,000",
                "2–5 days",
              ],
              [
                "Module Extension",
                "$500 – $2,000",
                "₹40,000 – ₹1,60,000",
                "3–10 days",
              ],
              [
                "Custom Module",
                "$1,000 – $5,000",
                "₹80,000 – ₹4,00,000",
                "2–8 weeks",
              ],
              [
                "Full Implementation",
                "$1,750 – $7,500",
                "₹1,40,000 – ₹6,00,000",
                "4–10 weeks",
              ],
            ].map((row, i) => (
              <tr key={i} className="transition">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="p-4 border text-gray-700 dark:text-gray-300"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-l-4 border-[#734B66]  p-6 rounded-r-xl">
        <h4 className="font-semibold text-[#734B66] mb-2">
          Our Pricing Promise
        </h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Fixed-price quotes. Clear scope definition. No hidden surprises. We
          document every feature before development begins so you know exactly
          what you're paying for.
        </p>
      </div>
    </section>
  );
}

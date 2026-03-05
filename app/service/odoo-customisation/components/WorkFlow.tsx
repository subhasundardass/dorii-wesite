export default function WorkFlow() {
  return (
    <section id="workflow-automation" className="scroll-mt-28 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
        Workflow Automation in Odoo
      </h2>

      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          Workflow automation eliminates repetitive manual work — approvals,
          document generation, reminders, and synchronisation.
        </p>
      </div>

      {/* Two-column layout on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Approval Flows",
            desc: "Multi-step approval chains for purchase orders, expense claims, leave requests — automatically routed by amount, department, or any custom rule.Ensure the developer follows Odoo inheritance patterns and never modifies core files. Poor practices cause upgrade failures.",
          },
          {
            title: "Automated Communications",
            desc: "Trigger emails, WhatsApp messages, or internal notifications when records reach certain stages — quote sent, invoice overdue, delivery dispatched.",
          },
          {
            title: "Document Generation",
            desc: "Auto-generate branded PDFs, contracts, delivery notes, or e-invoices at specific stages without any manual step.",
          },
          {
            title: "Data Synchronisation",
            desc: "Keep records in sync across modules — or between Odoo and external platforms like Shopify, WooCommerce, Amazon, or your bank. No more double-entry.",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            {/* Number circle */}
            <div className="shrink-0 w-10 h-10 rounded-full bg-[#734B66] text-white flex items-center justify-center font-bold">
              {i + 1}
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 h-10">
                {item.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-l-4 border-[#734B66]  p-6 rounded-r-xl">
        <h4 className="font-semibold text-[#734B66] mb-2">Real-World Impact</h4>
        <p className="text-gray-700 dark:text-gray-300">
          Clients regularly save 1–3 hours per day by automating manual
          processes. Most automation projects pay for themselves within weeks.
        </p>
      </div>
    </section>
  );
}

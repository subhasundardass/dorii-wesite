import { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const generateMetadata = (): Metadata => ({
  title: "Stock & Inventory Management Software | Dorii Software",
  description:
    "Gain full visibility of your inventory with automated stock management, low-stock alerts, batch tracking, product categorization, and seamless integration with sales and purchase operations.",
  openGraph: {
    title: "Stock & Inventory Management Software | Dorii Software",
    description:
      "Automate inventory and stock management with alerts, batch tracking, and real-time visibility.",
    url: "https://www.dorii.in/solutions/stock-inventory-management",
    siteName: "Dorii Software",
    images: [
      {
        url: "/images/hero-stock-inventory.png",
        width: 1200,
        height: 630,
        alt: "Stock & Inventory Management Software – Dorii Software",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock & Inventory Management Software | Dorii Software",
    description:
      "Automate inventory and stock management with alerts, batch tracking, and real-time visibility.",
    images: ["/images/hero-stock-inventory.png"],
  },
});

export default function StockInventoryPage() {
  return (
    <main className="mt-6 max-w-7xl mx-auto px-6 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <section className="pt-28 pb-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Stock & Inventory Management Software
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-700  max-w-md">
            A powerful, scalable inventory management solution designed to give
            complete control over stock movement, valuation, and availability
            across warehouses, stores, and branches.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Request a Demo
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition"
            >
              Talk to an Expert
            </a>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="/images/hero-stock-inventory.png"
            alt="Stock & Inventory Management Software"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Problems */}
      <section className="py-16">
        <div className="mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-foreground">
            Common Inventory & Stock Management Problems We Solve
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-6xl mx-auto text-center">
            Many businesses struggle with inventory control due to manual
            processes, disconnected systems, and lack of real-time visibility.
            Our Stock & Inventory Management Software is designed to eliminate
            these Problems and bring accuracy, automation, and intelligence into
            your inventory operations.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Problem
              title="Inaccurate Stock Levels & Manual Errors"
              desc="Businesses relying on spreadsheets or manual registers often face stock mismatches, leading to frequent shortages or excess inventory. These inaccuracies cause operational delays, lost sales, and customer dissatisfaction. Our system ensures real-time stock accuracy by automatically updating inventory with every transaction."
            />

            <Problem
              title="Stock-Outs & Overstocking"
              desc="Poor demand forecasting and lack of reorder alerts result in frequent stock-outs or unnecessary overstocking. This not only affects sales but also blocks working capital. Our inventory software uses consumption trends and minimum stock rules to maintain optimal inventory levels at all times."
            />

            <Problem
              title="Lack of Real-Time Inventory Visibility"
              desc="Without real-time visibility, decision-makers are forced to rely on outdated reports. Our centralized inventory dashboard provides live stock data across warehouses, stores, and locations, enabling faster and smarter business decisions."
            />

            <Problem
              title="Inefficient Warehouse & Location Management"
              desc="Managing inventory across multiple warehouses or godowns becomes complex without proper tracking. Our solution enables location-wise inventory control, inter-warehouse transfers, and bin-level tracking, ensuring smooth warehouse operations."
            />

            <Problem
              title="Poor Integration with Purchase & Sales"
              desc="When inventory systems are not integrated with purchase orders and sales invoices, businesses face data duplication and reconciliation issues. Our software automatically syncs inventory with purchasing, sales, returns, and cancellations."
            />

            <Problem
              title="Limited Reporting & Inventory Insights"
              desc="Basic inventory systems fail to provide meaningful insights. Our advanced inventory reports include stock valuation, aging analysis, slow-moving items, batch tracking, and profitability reports, helping businesses improve planning and reduce losses."
            />
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20">
        <div className="mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Why Businesses Need Inventory Management Software
          </h2>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-6xl mx-auto">
            As businesses grow, managing inventory using Excel sheets, manual
            registers, or disconnected tools quickly becomes inefficient and
            risky. Lack of real-time visibility, frequent stock mismatches, and
            delayed decision-making directly impact sales, customer
            satisfaction, and cash flow. A modern inventory management system
            provides a centralized, automated, and accurate way to control stock
            across your entire business.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 gap-8 text-left">
            <Benefit
              title="Centralized Stock Control Across Locations"
              desc="Maintain complete visibility of inventory across warehouses, stores, and branches from a single system. Eliminate data silos and ensure every team works with the same real-time stock information."
            />

            <Benefit
              title="Accurate Inventory Valuation & Audit-Ready Reports"
              desc="Automatically calculate inventory value using FIFO, LIFO, or average costing methods. Generate detailed, audit-ready reports that simplify compliance, accounting, and financial planning."
            />

            <Benefit
              title="Faster Order Processing & Fulfillment"
              desc="Ensure accurate stock availability before confirming sales or dispatch. Reduce order delays, avoid last-minute cancellations, and improve customer satisfaction with reliable fulfillment."
            />

            <Benefit
              title="Reduced Manual Work & Human Errors"
              desc="Automate stock movements, adjustments, transfers, and reconciliation processes. Minimize manual data entry, reduce errors, and free your team to focus on growth instead of corrections."
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-foreground">
          Key Features of Our Stock & Inventory Management Software
        </h2>

        <p className="mt-6 text-center text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          Our inventory management software provides complete, end-to-end
          control over your stock — from procurement and storage to sales,
          dispatch, and reporting. Every feature is designed to improve
          accuracy, visibility, and operational efficiency as your business
          scales.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          <Feature
            title="Real-Time Stock Tracking"
            desc="Get live inventory visibility across all warehouses, stores, and locations. Every purchase, sale, transfer, or adjustment updates stock instantly, ensuring accurate and reliable inventory data at all times."
          />

          <Feature
            title="Product, Variant & SKU Management"
            desc="Manage unlimited products, variants, categories, units, barcodes, and SKUs from a centralized system. Maintain structured product data for faster operations and better reporting."
          />

          <Feature
            title="Seamless Purchase & Sales Integration"
            desc="Automatically update inventory from purchase orders, goods receipts, sales invoices, returns, and cancellations. Eliminate manual stock updates and prevent reconciliation issues."
          />

          <Feature
            title="Multi-Warehouse & Location Support"
            desc="Track inventory across multiple warehouses, godowns, and retail outlets. Perform inter-warehouse transfers with complete movement history and stock accountability."
          />

          <Feature
            title="Low Stock Alerts & Reorder Management"
            desc="Set minimum stock levels and receive automated low-stock alerts. Prevent stock-outs by planning timely reorders based on real consumption and demand patterns."
          />

          <Feature
            title="Batch, Lot & Expiry Date Tracking"
            desc="Track inventory batch-wise with manufacturing and expiry dates. Ideal for pharma, FMCG, food, and manufacturing businesses requiring strict traceability."
          />

          <Feature
            title="Inventory Valuation & Costing"
            desc="Calculate inventory value using FIFO, LIFO, or weighted average costing methods. Generate accurate valuation reports for accounting, audits, and financial planning."
          />

          <Feature
            title="Stock Audits & Adjustments"
            desc="Perform physical stock audits and record adjustments with proper approval workflows. Maintain a complete audit trail for compliance and internal control."
          />

          <Feature
            title="Advanced Reports & Inventory Analytics"
            desc="Analyze stock aging, fast-moving and slow-moving items, inventory turnover, and movement trends. Use data-driven insights to optimize inventory and reduce losses."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-foreground">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Here are some common questions businesses ask before implementing a
            stock and inventory management system.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <FAQ
              q="Does the system support multiple warehouses and locations?"
              a="Yes. Our inventory management software supports multiple warehouses, godowns, stores, and branches. You can track stock location-wise, perform inter-warehouse transfers, and view consolidated or individual warehouse reports in real time."
            />

            <FAQ
              q="Can I track batch numbers, lot details, and expiry dates?"
              a="Absolutely. The system provides batch-wise and lot-wise inventory tracking along with manufacturing and expiry dates. This is especially useful for pharma, FMCG, food, and manufacturing businesses that require strict traceability."
            />

            <FAQ
              q="Is inventory valuation supported for accounting and audits?"
              a="Yes. The software supports FIFO, LIFO, and weighted average costing methods. You can generate accurate inventory valuation reports that are audit-ready and seamlessly align with your accounting and financial statements."
            />

            <FAQ
              q="Is the inventory software easy to use for non-technical users?"
              a="Yes. The system is designed with a clean, intuitive interface that can be used by store managers, warehouse staff, and business owners without technical training. Most users can start working with minimal onboarding."
            />

            <FAQ
              q="Does the system integrate with purchase and sales processes?"
              a="Yes. Inventory is automatically updated from purchase orders, goods receipts, sales invoices, returns, and cancellations. This eliminates manual stock updates and ensures accurate real-time inventory data."
            />

            <FAQ
              q="Can the software scale as my business grows?"
              a="Absolutely. The system is built to scale with your business, whether you manage a single store or multiple warehouses across locations. You can easily add new products, warehouses, users, and transactions without performance issues."
            />
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Take Control of Your Inventory?"
        description="Replace spreadsheets with a smart, automated inventory system."
      />
    </main>
  );
}

/* Components */

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-background hover:shadow-sm transition">
      <h3 className="font-semibold text-lg text-foreground">{title}</h3>
      <p className="mt-2 text-gray-700">{desc}</p>
    </div>
  );
}

function Problem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-lg border border-border bg-background">
      <h3 className="font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-lg border border-border bg-background">
      <h3 className="font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="p-6 rounded-lg border border-border bg-background">
      <h3 className="font-semibold text-lg text-foreground">{q}</h3>
      <p className="mt-2 text-gray-700">{a}</p>
    </div>
  );
}

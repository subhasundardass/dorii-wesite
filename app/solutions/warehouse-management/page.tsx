import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Barcode, Boxes, Layers, LineChart, Plug, Truck } from "lucide-react";
import { CTA } from "@/components/CTA";

export const generateMetadata = (): Metadata => ({
  title: "Warehouse Management Software | Dorii Software",
  description:
    "Optimize warehouse operations with real-time tracking of goods, automated storage management, order fulfillment, and efficient space utilization using our warehouse ERP solution.",
  openGraph: {
    title: "Warehouse Management Software | Dorii Software",
    description:
      "Efficient warehouse management software for real-time inventory tracking, automated storage, order fulfillment, and improved warehouse operations.",
    url: "https://www.dorii.in/solutions/warehouse-management",
    siteName: "Dorii Software",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Warehouse Management Software – Dorii Software",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warehouse Management Software | Dorii Software",
    description:
      "Optimize warehouse operations with real-time tracking, automated storage, order fulfillment, and efficient space utilization using our ERP solution.",
    images: ["/og-image.png"],
  },
});

export default function WarehouseManagementPage() {
  return (
    <main className="mt-6 max-w-(--breakpoint-xl) mx-auto px-6 py-12 xs:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Warehouse Management Software
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-center max-w-3xl mx-auto">
        Optimize warehouse operations with real-time tracking of goods,
        automated storage management, order fulfillment, and efficient space
        utilization using our ERP software.
      </p>

      {/* ================= CHALLENGES ================= */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-center">
          Common Warehouse Challenges We Solve
        </h2>
        <p className="mt-4 max-w-6xl mx-auto text-center text-lg">
          Warehouses often struggle with visibility, accuracy, and speed.
          Dorii’s Warehouse Management Software is designed to eliminate
          operational bottlenecks and bring complete control to your warehouse
          floor.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Inventory Mismatch & Stock Inaccuracy",
              desc: "Manual entries, delayed updates, and spreadsheet dependency lead to frequent stock mismatches and revenue loss.",
            },
            {
              title: "No Real-Time Stock Visibility",
              desc: "Inability to track live stock across bins, racks, and warehouses results in poor planning and delayed fulfillment.",
            },
            {
              title: "Slow Picking, Packing & Dispatch",
              desc: "Unstructured warehouse layouts and manual picking processes increase order processing time and errors.",
            },
            {
              title: "Poor Space Utilization",
              desc: "Improper bin allocation and lack of storage intelligence cause overcrowding and underutilized warehouse space.",
            },
            {
              title: "Disconnected Systems & Data Silos",
              desc: "Purchase, sales, accounting, and warehouse data often live in separate systems, causing inconsistencies.",
            },
            {
              title: "Batch, Lot & Expiry Tracking Issues",
              desc: "Managing batch-wise, serial-wise, or expiry-based inventory becomes difficult without system support.",
            },
            {
              title: "High Dependency on Manual Labor",
              desc: "Manual inward, outward, and reconciliation processes increase labor costs and operational risk.",
            },
            {
              title: "Lack of Stock Aging & Dead Stock Insights",
              desc: "Without aging analysis, businesses fail to identify slow-moving or dead inventory in time.",
            },
            {
              title: "Scalability Challenges",
              desc: "As business grows, warehouses struggle to handle multi-location operations and higher order volumes.",
            },
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-lg">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold text-center">Key Features</h2>
        <p className="mt-4 max-w-6xl mx-auto text-center text-lg ">
          Dorii’s Warehouse Management Software combines intelligent inventory
          control, structured storage, and seamless ERP integration to deliver
          faster, error-free warehouse operations.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <Boxes className="mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">
              Multi-Warehouse Inventory Control
            </h3>
            <p className="text-muted-foreground">
              Manage inventory across multiple warehouses, locations, zones,
              racks, and bins with real-time quantity visibility.
            </p>
          </Card>

          <Card className="p-6">
            <Barcode className="mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">
              Barcode, Batch & Serial Tracking
            </h3>
            <p className="text-muted-foreground">
              Enable barcode-based inward, picking, and dispatch with batch,
              lot, and serial number tracking for full traceability.
            </p>
          </Card>

          <Card className="p-6">
            <Layers className="mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">
              Intelligent Storage & Bin Management
            </h3>
            <p className="text-muted-foreground">
              Define structured warehouse layouts with smart bin allocation and
              optimized space utilization.
            </p>
          </Card>

          <Card className="p-6">
            <Truck className="mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">
              Fast Order Picking & Dispatch
            </h3>
            <p className="text-muted-foreground">
              Streamline picking, packing, and dispatch workflows to reduce
              turnaround time and improve order accuracy.
            </p>
          </Card>

          <Card className="p-6">
            <LineChart className="mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">
              Stock Aging & Performance Analytics
            </h3>
            <p className="text-muted-foreground">
              Identify slow-moving, dead, and fast-moving stock with detailed
              aging and warehouse performance reports.
            </p>
          </Card>

          <Card className="p-6">
            <Plug className="mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold mb-2">
              Seamless ERP & Module Integration
            </h3>
            <p className="text-muted-foreground">
              Fully integrated with purchase, sales, accounting, manufacturing,
              and transport modules for end-to-end visibility.
            </p>
          </Card>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold text-center">
          Business Benefits
        </h2>
        <p className="mt-4 max-w-6xl mx-auto text-center text-lg ">
          Dorii’s Warehouse Management Software helps businesses reduce costs,
          improve operational efficiency, and scale warehouse operations with
          confidence.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Higher Inventory Accuracy
            </h3>
            <p className="text-muted-foreground text-lg">
              Real-time tracking and barcode-driven workflows drastically reduce
              stock mismatches, shrinkage, and manual errors.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Faster Order Fulfillment
            </h3>
            <p className="text-muted-foreground text-lg">
              Optimized picking, packing, and dispatch processes improve
              turnaround time and customer satisfaction.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Reduced Operating Costs
            </h3>
            <p className="text-muted-foreground text-lg">
              Better space utilization, reduced rework, and lower dependency on
              manual processes cut overall warehouse costs.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Complete Operational Visibility
            </h3>
            <p className="text-muted-foreground text-lg">
              Centralized dashboards and reports provide real-time insights into
              stock movement and warehouse performance.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Scalable & Future-Ready
            </h3>
            <p className="text-muted-foreground text-lg">
              Easily scale from a single warehouse to multi-location operations
              without changing systems or processes.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Seamless ERP Integration
            </h3>
            <p className="text-muted-foreground text-lg">
              Tight integration with purchase, sales, accounting, and
              manufacturing ensures data consistency across the organization.
            </p>
          </Card>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CTA
        title="Ready to Streamline Your Warehouse?"
        description="Deploy a powerful warehouse management system that scales with your business and integrates seamlessly with your ERP ecosystem."
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Warehouse Management Software",
            description:
              "Optimize warehouse operations with real-time tracking of goods, automated storage management, order fulfillment, and efficient space utilization using our warehouse ERP solution.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://www.dorii.in/solutions/warehouse-management",
            image: "https://www.dorii.in/og-image.png",
            offers: {
              "@type": "Offer",
              price: "Contact for Pricing",
              priceCurrency: "INR",
            },
          }),
        }}
      />
    </main>
  );
}

import { Metadata } from "next";
import { Card } from "@/components/ui/card";

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

      {/* Optional styled card */}
      <Card className="mt-12 p-6 border rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Real-time inventory tracking</li>
          <li>Automated storage & warehouse management</li>
          <li>Order fulfillment & shipment tracking</li>
          <li>Space utilization & layout optimization</li>
          <li>Integration with sales & supply chain</li>
        </ul>
      </Card>

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

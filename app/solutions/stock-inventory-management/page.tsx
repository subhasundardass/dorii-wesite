import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const generateMetadata = (): Metadata => ({
  title: "Stock & Inventory Management Software | Dorii Software",
  description:
    "Gain full visibility of your inventory with automated stock management, low-stock alerts, batch tracking, product categorization, and seamless integration with sales and purchase operations.",
  openGraph: {
    title: "Stock & Inventory Management Software | Dorii Software",
    description:
      "Automate inventory and stock management with alerts, batch tracking, product categorization, and seamless integration with sales and purchase processes.",
    url: "https://www.dorii.in/solutions/stock-inventory-management",
    siteName: "Dorii Software",
    images: [
      {
        url: "/og-image.png",
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
      "Automate inventory and stock management with alerts, batch tracking, product categorization, and seamless integration with sales and purchase processes.",
    images: ["/og-image.png"],
  },
});

export default function StockInventoryPage() {
  return (
    <main className="max-w-(--breakpoint-xl) mx-auto px-6 py-12 xs:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Stock & Inventory Management Software
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-center max-w-3xl mx-auto">
        Gain full control of your inventory with automated stock management,
        low-stock alerts, batch tracking, product categorization, and seamless
        integration with sales and purchase operations.
      </p>

      {/* Optional styled card */}
      <Card className="mt-12 p-6 border rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Automated stock management and tracking</li>
          <li>Low-stock & reorder alerts</li>
          <li>Batch tracking & expiry management</li>
          <li>Product categorization & SKU management</li>
          <li>Integration with sales & purchase operations</li>
        </ul>
      </Card>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Stock & Inventory Management Software",
            description:
              "Gain full visibility of your inventory with automated stock management, low-stock alerts, batch tracking, product categorization, and seamless integration with sales and purchase operations.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://www.dorii.in/solutions/stock-inventory-management",
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

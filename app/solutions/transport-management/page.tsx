import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const generateMetadata = (): Metadata => ({
  title: "Transport & Logistics Management Software | Dorii Software",
  description:
    "An end-to-end transport management system (TMS) for trip planning, LR/challan generation, billing, accounting, vehicle tracking, and day-to-day transport operations.",
  openGraph: {
    title: "Transport & Logistics Management Software | Dorii Software",
    description:
      "An all-in-one transport management system (TMS) for trip planning, LR/challan generation, billing, accounting, vehicle tracking, and streamlined transport operations.",
    url: "https://www.dorii.in/solutions/transport-management",
    siteName: "Dorii Software",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Transport & Logistics Management Software – Dorii Software",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transport & Logistics Management Software | Dorii Software",
    description:
      "An end-to-end TMS for trip planning, LR/challan generation, billing, accounting, vehicle tracking, and day-to-day transport operations.",
    images: ["/og-image.png"],
  },
});

export default function TransportManagementPage() {
  return (
    <main className="mt-6 max-w-(--breakpoint-xl) mx-auto px-6 py-12 xs:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Transport & Logistics Management Software
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-center max-w-3xl mx-auto">
        Simplify your transport operations with an end-to-end TMS that manages
        trip planning, LR/challan generation, billing, accounting, vehicle
        tracking, and daily transport operations efficiently.
      </p>

      {/* Optional styled card */}
      <Card className="mt-12 p-6 border rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Trip planning & scheduling</li>
          <li>LR / Challan generation</li>
          <li>Billing & accounting integration</li>
          <li>Vehicle tracking & fleet management</li>
          <li>Daily transport operations dashboard</li>
        </ul>
      </Card>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Transport & Logistics Management Software",
            description:
              "An end-to-end transport management system (TMS) for trip planning, LR/challan generation, billing, accounting, vehicle tracking, and day-to-day transport operations.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://www.dorii.in/solutions/transport-management",
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

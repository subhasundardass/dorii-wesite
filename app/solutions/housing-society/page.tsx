import { Metadata } from "next";
import { Card } from "@/components/ui/card"; // optional, for page styling

export const generateMetadata = (): Metadata => ({
  title: "Housing Society Management Software | Dorii Software",
  description:
    "A comprehensive housing society ERP solution to manage maintenance billing, payments, accounting, notices, complaints, and member records efficiently.",
  openGraph: {
    title: "Housing Society Management Software | Dorii Software",
    description:
      "A complete housing society ERP solution to automate maintenance billing, payments, accounting, notices, complaints, and member records.",
    url: "https://www.dorii.in/solutions/housing-society",
    siteName: "Dorii Software",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Housing Society Management Software – Dorii Software",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Housing Society Management Software | Dorii Software",
    description:
      "A complete housing society ERP solution to automate maintenance billing, payments, accounting, notices, complaints, and member records.",
    images: ["/og-image.png"],
  },
});

export default function HousingSocietyPage() {
  return (
    <main className="max-w-(--breakpoint-xl) mx-auto px-6 py-12 xs:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Housing Society Management Software
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-center max-w-3xl mx-auto">
        Streamline your society operations with a complete ERP solution to
        manage maintenance billing, online payments, accounting, notices,
        complaints, and member records all in one place.
      </p>

      {/* Optional styled card */}
      <Card className="mt-12 p-6 border rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Maintenance billing & online payments</li>
          <li>Member records management</li>
          <li>Notice & complaint tracking</li>
          <li>Accounting & financial reports</li>
          <li>Dashboard & analytics</li>
        </ul>
      </Card>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Housing Society Management Software",
            description:
              "A comprehensive housing society ERP solution to manage maintenance billing, payments, accounting, notices, complaints, and member records efficiently.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://www.dorii.in/solutions/housing-society",
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

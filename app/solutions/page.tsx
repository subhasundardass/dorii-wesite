import { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookCheck, ChartPie, FolderSync, Goal } from "lucide-react";

const solutions = [
  {
    icon: Goal,
    title: "Housing Society Management Software",
    description:
      "A comprehensive housing society ERP solution to manage maintenance billing, online payments, accounting, notices, complaints, member records, and daily society operations from a single platform.",
    href: "/solutions/housing-society",
    alt: "Housing Society Management Software – Dorii Software",
  },
  {
    icon: BookCheck,
    title: "Transport & Logistics Management Software",
    description:
      "An end-to-end transport management system (TMS) for trip planning, LR and challan generation, billing, accounting, vehicle tracking, and streamlined transport operations.",
    href: "/solutions/transport-management",
    alt: "Transport & Logistics Management Software – Dorii Software",
  },
  {
    icon: FolderSync,
    title: "Warehouse Management Software",
    description:
      "Optimize warehouse operations with real-time tracking of goods, automated storage management, order fulfillment, stock movement, and efficient space utilization using our warehouse ERP solutions.",
    href: "/solutions/warehouse-management",
    alt: "Warehouse Management Software – Dorii Software",
  },
  {
    icon: ChartPie,
    title: "Stock & Inventory Management Software",
    description:
      "Gain full visibility of your inventory with automated stock management, low-stock alerts, batch tracking, product categorization, and seamless integration with sales and purchase operations.",
    href: "/solutions/stock-inventory-management",
    alt: "Stock & Inventory Management Software – Dorii Software",
  },
];

// --- Metadata for SEO ---
export const generateMetadata = (): Metadata => ({
  title: "Business Automation & ERP Solutions | Dorii Software",
  description:
    "Explore Dorii Software's complete business automation and ERP solutions: Housing Society, Transport, Warehouse, and Stock & Inventory management software for scalable operations.",
  openGraph: {
    title: "Business Automation & ERP Solutions | Dorii Software",
    description:
      "Explore Dorii Software's complete business automation and ERP solutions: Housing Society, Transport, Warehouse, and Stock & Inventory management software for scalable operations.",
    url: "https://www.dorii.in/solutions",
    siteName: "Dorii Software",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dorii Software – Business Automation & ERP Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Automation & ERP Solutions | Dorii Software",
    description:
      "Explore Dorii Software's ERP and business automation software: Housing Society, Transport, Warehouse, and Stock & Inventory solutions.",
    images: ["/og-image.png"],
  },
});

export default function SolutionsPage() {
  return (
    <main className="mt-8 max-w-(--breakpoint-xl) mx-auto px-6 py-12 xs:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Our Solutions
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-center max-w-3xl mx-auto">
        Explore our business automation and ERP solutions designed to streamline
        operations across Housing Society management, Transport & Logistics,
        Warehouse, and Stock & Inventory management.
      </p>

      <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-2">
        {solutions.map((solution) => (
          <Card
            key={solution.title}
            className="flex flex-col border rounded-xl overflow-hidden shadow-none"
          >
            <CardHeader>
              <solution.icon aria-label={solution.alt} />
              <h4 className="mt-3! text-2xl font-bold tracking-tight">
                <a
                  href={solution.href}
                  title={solution.alt}
                  className="hover:underline"
                >
                  {solution.title}
                </a>
              </h4>
              <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                {solution.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              <div className="bg-muted h-52 ml-6 rounded-tl-xl" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* JSON-LD Structured Data for all solutions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareCompany",
            name: "Dorii Software",
            url: "https://www.dorii.in",
            logo: "https://www.dorii.in/og-image.png",
            description:
              "Dorii Software delivers business automation and ERP software solutions across Housing Society, Transport, Warehouse, and Stock & Inventory management.",
            sameAs: [
              "https://www.linkedin.com/company/dorii-software",
              "https://github.com/doriisoftware",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "customer support",
              },
            ],
            softwareProducts: solutions.map((s) => ({
              "@type": "SoftwareApplication",
              name: s.title,
              description: s.description,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: `https://www.dorii.in${s.href}`,
              image: "https://www.dorii.in/og-image.png",
              offers: {
                "@type": "Offer",
                price: "Contact for Pricing",
                priceCurrency: "INR",
              },
            })),
          }),
        }}
      />
    </main>
  );
}

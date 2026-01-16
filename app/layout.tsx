import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dorii Software | Business Automation & ERP Solutions",
    template: "%s | Dorii Software",
  },

  description:
    "Dorii Software is a business automation and custom ERP software development company delivering scalable solutions for sales, inventory, supply chain, HR, accounts, and manufacturing across industries.",

  alternates: {
    canonical: "https://dorii.in",
  },

  keywords: [
    "business automation software",
    "custom ERP development",
    "ERP software company",
    "inventory management software",
    "sales automation software",
    "HR and payroll software",
    "manufacturing ERP solutions",
    "enterprise software development",
  ],

  metadataBase: new URL("https://dorii.in"),

  openGraph: {
    type: "website",
    siteName: "Dorii Software",
    url: "https://dorii.in",
    title: "Dorii Software | Business Automation & ERP Solutions",
    description:
      "Custom business automation and ERP software solutions designed to scale operations across sales, inventory, HR, accounts, supply chain, and manufacturing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dorii Software – Business Automation & ERP Solutions",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dorii Software | Business Automation & ERP Solutions",
    description:
      "Custom ERP and business automation software for growing businesses across industries.",
    images: ["/og-image.png"],
  },

  authors: [
    {
      name: "Subha Sundar Das",
      url: "https://www.dorii.in",
    },
  ],

  creator: "Dorii Software",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // manifest: "/site.webmanifest",
};

const solutionsJSONLD = [
  {
    "@type": "SoftwareApplication",
    name: "Housing Society Management Software",
    description:
      "A comprehensive housing society ERP solution to manage maintenance billing, payments, accounting, notices, complaints, member records, and daily operations from a single platform.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.dorii.in/solutions/housing-society",
    image: "https://www.dorii.in/og-image.png",
    offers: {
      "@type": "Offer",
      price: "Contact for Pricing",
      priceCurrency: "INR",
    },
  },
  {
    "@type": "SoftwareApplication",
    name: "Transport & Logistics Management Software",
    description:
      "End-to-end TMS for trip planning, LR/challan generation, billing, accounting, vehicle tracking, and transport operations.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.dorii.in/solutions/transport-management",
    image: "https://www.dorii.in/og-image.png",
    offers: {
      "@type": "Offer",
      price: "Contact for Pricing",
      priceCurrency: "INR",
    },
  },
  {
    "@type": "SoftwareApplication",
    name: "Warehouse Management Software",
    description:
      "Optimize warehouse operations with real-time tracking, automated storage, order fulfillment, stock movement, and efficient space utilization.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.dorii.in/solutions/warehouse-management",
    image: "https://www.dorii.in/og-image.png",
    offers: {
      "@type": "Offer",
      price: "Contact for Pricing",
      priceCurrency: "INR",
    },
  },
  {
    "@type": "SoftwareApplication",
    name: "Stock & Inventory Management Software",
    description:
      "Gain full visibility of your inventory with automated stock management, low-stock alerts, batch tracking, product categorization, and integration with sales and purchases.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.dorii.in/solutions/stock-inventory-management",
    image: "https://www.dorii.in/og-image.png",
    offers: {
      "@type": "Offer",
      price: "Contact for Pricing",
      priceCurrency: "INR",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="ga-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareCompany",
              name: "Dorii Software",
              url: "https://www.dorii.in",
              logo: "https://www.dorii.in/og-image.png",
              description:
                "Custom business automation and ERP software for sales, inventory, supply chain, HR, accounts, and manufacturing.",
              sameAs: [
                "https://www.linkedin.com/company/dorii-software",
                "https://github.com/doriisoftware",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9732939123",
                  contactType: "customer support",
                },
              ],
              softwareProducts: solutionsJSONLD, // attach solutions
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Google Analytics 4 */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-2N5W23G3E5`}
          />

          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2N5W23G3E5', { page_path: window.location.pathname });
        `,
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

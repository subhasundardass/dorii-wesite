import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dorii.in"),
  title: {
    default: "Business Automation & ERP Solutions",
    template: "%s | Dorii Software",
  },

  description:
    "Dorii Software is a business automation and custom ERP software development company delivering scalable solutions for sales, inventory, supply chain, HR, accounts, and manufacturing across industries.",

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    siteName: "Dorii Software",
    url: "/",
    title: "Dorii Software | Business Automation & ERP Solutions",
    description:
      "Custom business automation and ERP software solutions designed to scale operations across sales, inventory, HR, accounts, supply chain, and manufacturing.",
    images: [
      {
        url: "/og/dorii-home.png",
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
    images: ["/og/dorii-home.png"],
  },

  authors: [
    {
      name: "Dorii Team",
      url: "/",
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

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ── ORGANIZATION / LOCAL BUSINESS ───────────────────────
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://dorii.in/#organization",
      name: "Dorii Software",
      alternateName: ["Dorii"],
      url: "https://dorii.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://dorii.in/logo.png",
        width: 180,
        height: 60,
      },
      image: {
        "@type": "ImageObject",
        url: "https://dorii.in/og-image.png",
      },
      description:
        "Dorii Software is a custom software development company in Siliguri, India. We build ERP systems, TMS, WMS, Housing ERP, and business automation solutions for SMEs.",
      foundingDate: "2020",
      founder: {
        "@type": "Person",
        name: "Subha Sundar Das",
      },
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 49,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Siliguri",
        addressRegion: "West Bengal",
        postalCode: "734001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.7271,
        longitude: 88.3953,
      },
      hasMap: "https://www.google.com/maps?q=26.7271,88.3953",
      telephone: "+919732939123",
      email: "doriisoftware@gmail.com",

      sameAs: [
        "https://www.linkedin.com/company/doriisoftware",
        "https://www.instagram.com/doriisoftware",
        "https://twitter.com/doriisoftware",
        // "https://g.page/r/XXXXXXXXXXXX", // ← replace with your real GBP link
      ],

      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+919732939123",
          contactType: "sales",
          availableLanguage: ["English", "Hindi", "Bengali"],
          areaServed: "IN",
        },
      ],

      areaServed: [
        { "@type": "City", name: "Siliguri" },
        { "@type": "City", name: "Darjeeling" },
        { "@type": "City", name: "Jalpaiguri" },
        { "@type": "City", name: "Cooch Behar" },
        { "@type": "City", name: "Alipurduar" },
      ],

      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 26.7271,
          longitude: 88.3953,
        },
        geoRadius: 150000,
      },

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:30",
          closes: "18:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "14:00",
        },
      ],

      priceRange: "₹₹",
      currenciesAccepted: ["INR", "USD"],
      paymentAccepted: ["Bank Transfer", "UPI", "Credit Card", "Razorpay"],

      knowsAbout: [
        "Custom ERP Software Development",
        "Transport Management System",
        "Warehouse Management System",
        "Odoo ERP Customisation",
        "Business Automation",
        "Mobile App Development",
      ],
    },

    // ── WEBSITE ────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": "https://dorii.in/#website",
      url: "https://dorii.in/",
      name: "Dorii Software",
      description:
        "ERP Software Company in Siliguri providing custom ERP, automation and enterprise applications.",
      publisher: {
        "@id": "https://dorii.in/#organization",
      },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://dorii.in/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
        >
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

          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

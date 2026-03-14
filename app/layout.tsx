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
  title: {
    default: "Business Automation & ERP Solutions",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                // ── 1. ORGANIZATION ──────────────────────────────────────
                {
                  "@type": [
                    "Organization",
                    "ProfessionalService",
                    "LocalBusiness",
                  ],
                  "@id": "https://dorii.in/#organization",
                  name: "Dorii Software",
                  alternateName: ["Dorii"],
                  url: "https://dorii.in",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://dorii.in/logo.png",
                    width: 180,
                    height: 60,
                  },
                  image: "https://dorii.in/og-image.png",
                  description:
                    "Dorii Software is a DPIIT-recognized custom software development company in Siliguri, India. We build ERP systems, Transport TMS, Warehouse WMS, Housing Society ERP, business automation software, and enterprise applications for Indian SMEs across North Bengal and pan-India.",
                  foundingDate: "2020",
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
                  telephone: "+919732939123",
                  email: "doriisoftware@gmail.com",
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+919732939123",
                      contactType: "sales",
                      availableLanguage: ["English", "Hindi", "Bengali"],
                      areaServed: "IN",
                    },
                    {
                      "@type": "ContactPoint",
                      telephone: "+919732939123",
                      contactType: "customer support",
                      availableLanguage: ["English", "Hindi", "Bengali"],
                    },
                  ],
                  areaServed: [
                    {
                      "@type": "City",
                      name: "Siliguri",
                      sameAs: "https://en.wikipedia.org/wiki/Siliguri",
                      containedInPlace: {
                        "@type": "AdministrativeArea",
                        name: "West Bengal",
                        sameAs: "https://en.wikipedia.org/wiki/West_Bengal",
                        containedInPlace: {
                          "@type": "Country",
                          name: "India",
                          sameAs: "https://en.wikipedia.org/wiki/India",
                        },
                      },
                    },
                    {
                      "@type": "City",
                      name: "Darjeeling",
                      sameAs:
                        "https://en.wikipedia.org/wiki/Darjeeling_district",
                    },
                    {
                      "@type": "City",
                      name: "Jalpaiguri",
                      sameAs:
                        "https://en.wikipedia.org/wiki/Jalpaiguri_district",
                    },
                    {
                      "@type": "City",
                      name: "Cooch Behar",
                      sameAs:
                        "https://en.wikipedia.org/wiki/Cooch_Behar_district",
                    },
                    {
                      "@type": "City",
                      name: "Alipurduar",
                      sameAs:
                        "https://en.wikipedia.org/wiki/Alipurduar_district",
                    },
                    {
                      "@type": "City",
                      name: "Kalimpong",
                      sameAs:
                        "https://en.wikipedia.org/wiki/Kalimpong_district",
                    },
                    {
                      "@type": "City",
                      name: "Raiganj",
                      sameAs: "https://en.wikipedia.org/wiki/Raiganj",
                    },
                    {
                      "@type": "City",
                      name: "Balurghat",
                      sameAs: "https://en.wikipedia.org/wiki/Balurghat",
                    },
                  ],
                  serviceArea: {
                    "@type": "GeoCircle",
                    geoMidpoint: {
                      "@type": "GeoCoordinates",
                      latitude: 26.7271,
                      longitude: 88.3953,
                    },
                    geoRadius: "150000",
                  },
                  knowsAbout: [
                    "Custom ERP Software Development",
                    "Business Automation Software",
                    "Transport Management System",
                    "Warehouse Management System",
                    "Housing Society ERP",
                    "Odoo ERP Customisation",
                    "Mobile App Development",
                    "GST Software India",
                    "Enterprise Software Development",
                    "Software Development Company Siliguri",
                    "ERP Software North Bengal",
                  ],
                  hasCredential: [
                    {
                      "@type": "EducationalOccupationalCredential",
                      name: "DPIIT Recognized Startup",
                      credentialCategory: "Government Recognition",
                      recognizedBy: {
                        "@type": "Organization",
                        name: "Department for Promotion of Industry and Internal Trade, Government of India",
                      },
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      name: "MSME Registered",
                      credentialCategory: "Government Certification",
                      recognizedBy: {
                        "@type": "Organization",
                        name: "Ministry of Micro, Small and Medium Enterprises, Government of India",
                      },
                    },
                  ],
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ],
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
                  paymentAccepted: "Bank Transfer, UPI, Credit Card, Razorpay",
                },

                // ── 2. WEBSITE ───────────────────────────────────────────
                {
                  "@type": "WebSite",
                  "@id": "https://dorii.in/#website",
                  url: "https://dorii.in",
                  name: "Dorii Software",
                  description:
                    "Custom Software Development Company in Siliguri, India — ERP, Automation & Enterprise Apps",
                  publisher: { "@id": "https://dorii.in/#organization" },
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
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
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

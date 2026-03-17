import CustomRequirement from "@/components/custom-requirement";
import FAQ from "@/components/faq";

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import About from "@/components/about-us";
import { Metadata } from "next";

import { CTA } from "@/components/CTA";
import Blogs from "@/components/blogs";
import { ArrowRight } from "lucide-react";
import TrustBar from "@/components/home/TrustBar";
import WhoWeAre from "@/components/home/WhoWeAre";
import SolutionsWeOffer from "@/components/home/Solutions";
import ServicesWeOffer from "@/components/home/ServicesWeOffer";
import HowWeWork from "@/components/home/HowWeWork";
import WhyDorii from "@/components/home/WhyDorii";
import Industries from "@/components/home/Industries";
import FaqSection from "@/components/home/FaqSection";
// import Pricing from "@/components/pricing";
// import Testimonial from "@/components/testimonial";

export const metadata: Metadata = {
  // ── TITLE ────────────────────────────────────────────────
  title: {
    default: "Custom ERP & Software Development Company in Siliguri, India",
    template: "%s — Dorii Software",
  },

  // ── DESCRIPTION  (149 chars) ─────────────────────────────
  description:
    "Dorii Software builds custom ERP, Transport TMS, Warehouse WMS, and business automation software for Indian SMEs. DPIIT startup. Pan-India & international delivery.",

  // ── CANONICAL ────────────────────────────────────────────
  metadataBase: new URL("https://dorii.in"),
  alternates: {
    canonical: "https://dorii.in",
  },

  // ── KEYWORDS ─────────────────────────────────────────────
  keywords: [
    // Primary — high intent
    "custom software development company India",
    "ERP software development India",
    "custom ERP software India",
    "business automation software India",
    "enterprise software development company",

    // Product-specific
    "transport management software India",
    "warehouse management system India",
    "housing society ERP software",
    "inventory management software India",
    "Odoo development company India",
    "custom CRM development India",

    // Geo-specific — local SEO
    "software development company Siliguri",
    "ERP software Siliguri",
    "software company North Bengal",
    "custom software Siliguri",
    "IT company Siliguri West Bengal",

    // Long-tail
    "GST compliant ERP software India",
    "e-Way Bill software India",
    "Flutter mobile app development India",
    "Python Django development company India",
    "Odoo ERP customisation India",
  ],

  // ── OPEN GRAPH ───────────────────────────────────────────
  openGraph: {
    type: "website",
    siteName: "Dorii Software",
    url: "https://dorii.in",
    title:
      "Dorii Software — Custom ERP & Software Development Company in Siliguri",
    // 158 chars
    description:
      "DPIIT-recognized custom software development company in India. We build ERP, TMS, WMS, and automation software for Indian SMEs. Pan-India & international.",
    images: [
      {
        url: "/og/home-dorii.png",
        width: 1200,
        height: 630,
        alt: "Dorii Software — Custom ERP & Business Automation Software, Siliguri India",
        type: "image/png",
      },
    ],
    locale: "en_IN",
  },

  // ── TWITTER / X ──────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@doriisoftware", // update if handle differs
    creator: "@doriisoftware",
    title:
      "Dorii Software — Custom ERP & Software Development Company in Siliguri",
    description:
      "Custom ERP, Transport TMS, Warehouse WMS & business automation software for Indian SMEs. DPIIT startup. Pan-India & international delivery.",
    images: [
      {
        url: "/og/home-dorii.png",
        alt: "Dorii Software — Custom ERP & Business Automation Software",
      },
    ],
  },

  // ── AUTHORSHIP & CREATOR ─────────────────────────────────
  authors: [
    {
      name: "Dorii Team",
      url: "https://dorii.in/about",
    },
  ],
  creator: "Dorii Software",
  publisher: "Dorii Software",
  category: "Software Development",

  // ── ROBOTS ───────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── ICONS ────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  // ── MANIFEST ─────────────────────────────────────────────
  // manifest: "/site.webmanifest",

  // ── CLASSIFICATION ───────────────────────────────────────
  applicationName: "Dorii Software",
  referrer: "origin-when-cross-origin",
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ── 3. WEBPAGE ───────────────────────────────────────────
    {
      "@type": "WebPage",
      "@id": "https://dorii.in/#homepage",
      url: "https://dorii.in",
      name: "Dorii Software – Custom ERP & Business Automation Company",
      description:
        "Custom ERP software, Transport TMS, Warehouse WMS, Housing Society ERP and business automation solutions built for Indian businesses.",
      isPartOf: { "@id": "https://dorii.in/#website" },
      about: { "@id": "https://dorii.in/#organization" },
      inLanguage: "en-IN",
      breadcrumb: { "@id": "https://dorii.in/#breadcrumb" },
    },

    // ── 4. BREADCRUMB ────────────────────────────────────────
    {
      "@type": "BreadcrumbList",
      "@id": "https://dorii.in/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://dorii.in/",
        },
      ],
    },

    // ── 5. SERVICES ──────────────────────────────────────────
    {
      "@type": "Service",
      "@id": "https://dorii.in/#service-erp",
      name: "Custom ERP Software Development",
      serviceType: "Enterprise Resource Planning Software Development",
      description:
        "End-to-end custom ERP software built from scratch for your exact business workflows. Covers manufacturing, logistics, trading, services, and hybrid operations with GST compliance built in.",
      provider: { "@id": "https://dorii.in/#organization" },
      areaServed: { "@type": "Country", name: "India" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ERP Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transport Management System (TMS)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Warehouse Management System (WMS)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Housing Society ERP",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Inventory Management ERP",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://dorii.in/#service-odoo",
      name: "Odoo ERP Customisation & Development",
      serviceType: "Odoo Development",
      description:
        "Custom Odoo module development, workflow customisation, third-party API integrations, data migration, and Odoo ERP implementation. Supporting Odoo 14, 15, 16, and 17.",
      provider: { "@id": "https://dorii.in/#organization" },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "Service",
      "@id": "https://dorii.in/#service-mobile",
      name: "Mobile App Development — Flutter, iOS & Android",
      serviceType: "Mobile Application Development",
      description:
        "Cross-platform business mobile apps built with Flutter for Android and iOS. Field force apps, delivery tracking, mobile ERP access, and customer portals optimised for Indian networks.",
      provider: { "@id": "https://dorii.in/#organization" },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "Service",
      "@id": "https://dorii.in/#service-automation",
      name: "Business Process Automation",
      serviceType: "Business Automation Software",
      description:
        "Automation software eliminating manual data entry, approval bottlenecks, and repetitive workflows. WhatsApp Business API alerts, GST portal sync, automated reporting, and custom workflow engines.",
      provider: { "@id": "https://dorii.in/#organization" },
      areaServed: { "@type": "Country", name: "India" },
    },

    // ── 6. SOFTWARE PRODUCTS ─────────────────────────────────
    {
      "@type": "SoftwareApplication",
      "@id": "https://dorii.in/#product-tms",
      name: "Dorii TMS — Transport Management System",
      applicationSuite: "Dorii ERP Platform",
      applicationCategory: "BusinessApplication",
      isPartOf: { "@id": "https://dorii.in/#homepage" },
      operatingSystem: "Web, Android, iOS",
      description:
        "Complete road freight TMS for Indian logistics operators. LR generation, challan management, e-Way Bill auto-filing, driver management, trip costing, GST freight billing, and multi-branch accounts.",
      featureList: [
        "LR and Challan Generation",
        "e-Way Bill Auto-filing",
        "Driver and Fleet Management",
        "Trip Costing and P&L",
        "GST-ready Freight Billing",
        "Multi-branch Accounts",
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceSpecification: {
          "@type": "PriceSpecification",
          description:
            "Custom pricing based on modules and users. Contact for quote.",
        },
      },
      provider: { "@id": "https://dorii.in/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://dorii.in/#product-wms",
      name: "Dorii WMS — Warehouse Management System",
      isPartOf: { "@id": "https://dorii.in/#homepage" },
      applicationSuite: "Dorii ERP Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      description:
        "Warehouse management software for mid-size distribution companies. Zone-rack-bin mapping, barcode scanning, FIFO/FEFO, order fulfilment, and automatic stock reconciliation across multiple locations.",
      featureList: [
        "Zone-Rack-Bin Mapping",
        "Barcode Scanning",
        "FIFO and FEFO Stock Management",
        "Order Fulfilment Workflows",
        "Multi-Warehouse Support",
        "Automated Stock Reconciliation",
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceSpecification: {
          "@type": "PriceSpecification",
          description: "Custom pricing based on warehouse count and users.",
        },
      },
      provider: { "@id": "https://dorii.in/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://dorii.in/#product-housing",
      name: "Dorii Housing ERP — Society Management",
      isPartOf: { "@id": "https://dorii.in/#homepage" },
      applicationSuite: "Dorii ERP Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android, iOS",
      description:
        "Housing society management ERP for RWAs and cooperative housing societies. Online maintenance billing, UPI collections, complaint ticketing, visitor management, and AGM documentation.",
      featureList: [
        "Online Maintenance Billing",
        "UPI and Online Collection",
        "Complaint Ticketing System",
        "Visitor Management",
        "AGM and Notice Board",
        "Committee Accounting",
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceSpecification: {
          "@type": "PriceSpecification",
          description: "Custom pricing based on number of units and modules.",
        },
      },
      provider: { "@id": "https://dorii.in/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://dorii.in/#product-inventory",
      name: "Dorii Inventory — Stock & Inventory Management ERP",
      isPartOf: { "@id": "https://dorii.in/#homepage" },
      applicationSuite: "Dorii ERP Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      description:
        "Stock and inventory management for manufacturers, distributors, and multi-branch traders. Purchase-to-sale cycle, batch/serial/expiry tracking, multi-location stock, and GST-compliant invoicing.",
      featureList: [
        "Purchase-to-Sale Cycle",
        "Batch, Serial and Expiry Tracking",
        "Multi-branch Stock Visibility",
        "Automated Reorder Alerts",
        "GST Invoicing Built-in",
        "Supplier Management",
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceSpecification: {
          "@type": "PriceSpecification",
          description: "Custom pricing based on branches and user count.",
        },
      },
      provider: { "@id": "https://dorii.in/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <TrustBar />
        <WhoWeAre />
        <SolutionsWeOffer />
        <ServicesWeOffer />
        <HowWeWork />
        <WhyDorii />

        <FaqSection />
        <Blogs />
        {/* <Solutions />
      <About />
      <ServicesWeOffer />

      <FAQ />
      <CTA
        title="Let’s Build Software That Actually Works for Your Business"
        description="Whether you need a custom ERP, system integration, or process automation, our team works closely with you to understand your operations and deliver solutions that make day-to-day work easier—not more complicated."
      />
      <Blogs /> */}
      </main>
    </>
  );
}

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
import Script from "next/script";
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

  alternates: {
    canonical: "/",
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
    url: "/",
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
      url: "/about",
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
      { url: "/dorii-logo.png" },
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
    // ── WEBPAGE ─────────────────────────────────────────────
    {
      "@type": "WebPage",
      "@id": "https://dorii.in/#homepage",
      url: "https://dorii.in/",
      name: "Dorii Software – Custom ERP & Business Automation Company",
      description:
        "Custom ERP software, Transport TMS, Warehouse WMS, Housing Society ERP and business automation solutions built for Indian businesses.",
      isPartOf: { "@id": "https://dorii.in/#website" },
      about: { "@id": "https://dorii.in/#organization" },
      inLanguage: "en-IN",
      breadcrumb: { "@id": "https://dorii.in/#breadcrumb" },
      mainEntity: [
        { "@id": "https://dorii.in/#custom-software-development" },
        { "@id": "https://dorii.in/#odoo-customisation" },
      ],
    },

    // ── BREADCRUMB ─────────────────────────────────────────
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
  ],
};

export default function Home() {
  return (
    <>
      <Script
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

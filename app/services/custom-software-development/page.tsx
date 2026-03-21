import { Metadata } from "next";
import BenefitsOfCustomSoftware from "./components/benefits-of-custom-software";
import ChallengesWeSolve from "./components/challenges-we-solve";
import CostOfCustomSoftware from "./components/cost-of-custom-software";
import CustomSoftwareLocation from "./components/custom-software-siliguri-north-bengal";
import FAQ from "./components/faq";
import FutureTrends from "./components/future-trends";
import IndustriesWeServe from "./components/industries-we-serve";
import SoftwareDevelopmentProcess from "./components/software-development-process";
import StartYourProject from "./components/start-project";
import TechnologiesWeUse from "./components/technologies-used";
import TypesOfCustomSoftware from "./components/types-of-custom-software";
import WhatIsCustomSoftware from "./components/what-is-custom-software";
import WhyBusinessesNeedCustomSoftware from "./components/why-businesses-need-custom-software";
import WhyChooseDorii from "./components/why-choose-dorii";
import Hero from "./Hero";
import Introduction from "./Intruduction";
import RelatedArticles from "./RelatedArticle";
import TableOfContent from "./TableOfContent";

export const solutionsJSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "//#business",
      name: "Dorii Software",
      description:
        "Custom software development company based in Siliguri, West Bengal. Specialising in ERP, CRM, billing, school, hospital, and Odoo software for North Bengal businesses.",
      url: "/",
      telephone: "+91XXXXXXXXXX",
      email: "hello@dorii.in",
      foundingDate: "2019",
      priceRange: "₹₹",
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
      areaServed: [
        { "@type": "City", name: "Siliguri" },
        { "@type": "City", name: "Jalpaiguri" },
        { "@type": "City", name: "Darjeeling" },
        { "@type": "City", name: "Alipurduar" },
        { "@type": "City", name: "Cooch Behar" },
        { "@type": "City", name: "Kalimpong" },
        { "@type": "City", name: "Gangtok" },
        { "@type": "State", name: "West Bengal" },
        { "@type": "State", name: "Sikkim" },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "Custom Software Development",
        "ERP Software",
        "CRM Software",
        "Odoo Implementation",
        "Hospital Management Software",
        "School Management Software",
        "Hotel Management Software",
        "Transport Management System",
        "Web Application Development",
        "Workflow Automation",
      ],
      sameAs: [
        "https://www.linkedin.com/company/doriisoftware",
        "https://www.facebook.com/doriisoftware",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "//services/custom-software-development#webpage",
      url: "//services/custom-software-development",
      name: "Custom Software Development Company in Siliguri | Dorii Software",
      description:
        "Custom software development services in Siliguri and North Bengal. ERP, CRM, billing, school, hospital and Odoo software built for your business.",
      inLanguage: "en-IN",
      isPartOf: { "@id": "//#website" },
      about: { "@id": "//#business" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "//services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Custom Software Development",
            item: "//services/custom-software-development",
          },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "//services/custom-software-development#service",
      name: "Custom Software Development",
      serviceType: "Custom Software Development",
      description:
        "End-to-end custom software development for businesses in Siliguri and North Bengal. We build ERP, CRM, billing, hospital, school, transport, and hotel management software tailored to your exact business needs.",
      provider: { "@id": "//#business" },
      areaServed: { "@type": "State", name: "West Bengal" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom Software Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ERP Software Development",
              description:
                "Custom ERP systems for trading, manufacturing, and distribution businesses in North Bengal.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CRM Software Development",
              description:
                "Customer relationship management software tailored to your sales and support workflows.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Odoo Implementation & Customisation",
              description:
                "Odoo ERP setup, module configuration, customisation, and data migration for North Bengal businesses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hospital Management Software",
              description:
                "Custom hospital and clinic management software for healthcare providers in Siliguri and North Bengal.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "School Management Software",
              description:
                "School ERP covering admissions, attendance, fees, results, and communication for North Bengal schools.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transport Management System",
              description:
                "Fleet and transport management software for logistics and transport businesses in North Bengal.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hotel & Hospitality Software",
              description:
                "Hotel management and booking software for hotels and resorts in the Dooars, Darjeeling, and Sikkim region.",
            },
          },
        ],
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Custom Software Development Company in Siliguri",
  description:
    "Siliguri-based custom software development company. ERP, CRM, billing, school & hospital software for North Bengal businesses. 5+ years, 100% source code ownership. Free consultation.",
  keywords: [
    "custom software development company in Siliguri",
    "software development company in Siliguri",
    "custom software development North Bengal",
    "ERP software Siliguri",
    "CRM software Siliguri",
    "hospital management software Siliguri",
    "school management software North Bengal",
    "Odoo implementation Siliguri",
    "software company Siliguri",
    "business software Jalpaiguri",
    "software development Darjeeling",
    "software company North Bengal",
    "custom ERP development India",
  ],
  alternates: {
    canonical: "//services/custom-software-development",
  },
  openGraph: {
    title: "Custom Software Development Company in Siliguri | Dorii Software",
    description:
      "We build custom ERP, CRM, billing, and business software for Siliguri and North Bengal businesses. Affordable, end-to-end, source code ownership guaranteed.",
    url: "//services/custom-software-development",
    siteName: "Dorii Software",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company in Siliguri | Dorii Software",
    description:
      "Siliguri-based custom software for North Bengal businesses. ERP, CRM, billing, school & hospital software. Free consultation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function CustomSoftwareDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsJSONLD) }}
      />

      <div className="pt-16">
        <Hero />
        {/* layout */}
        <div className="mt-px max-w-(--breakpoint-xl) mx-auto w-full py-16 xs:py-16 px-6">
          <div className="flex relative">
            <TableOfContent />
            <main className="flex-1 px-2 md:px-12 py-10 max-w-5xl">
              {/* ---------- */}
              <Introduction />
              {/* ---------------- */}
              <WhatIsCustomSoftware />
              {/* -------------- */}
              <WhyBusinessesNeedCustomSoftware />
              {/* --------------- */}
              <BenefitsOfCustomSoftware />
              {/* ------------ */}
              <ChallengesWeSolve />
              {/* ---------------- */}
              <TypesOfCustomSoftware />

              {/* ====================== */}
              <SoftwareDevelopmentProcess />
              <TechnologiesWeUse />

              {/* ===================== */}
              <IndustriesWeServe />
              <CustomSoftwareLocation />
              <WhyChooseDorii />
              <CostOfCustomSoftware />
              <FutureTrends />

              {/* ================== */}
              <FAQ />
              <StartYourProject />
            </main>
            {/* <RelatedArticles /> */}
          </div>
        </div>
      </div>
    </>
  );
}

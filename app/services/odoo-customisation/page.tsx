import FAQSection from "./components/faq-section";
import TableOfContents from "./components/TableOfContents";
import { Bebas_Neue } from "next/font/google";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

import { Metadata } from "next";
// import Head from "next/head";
import WhatIsOdoo from "./components/what_is_odoo";
import DecisionGuide from "./components/DecisionGuide";
import WorkFlow from "./components/WorkFlow";
import CustoomModule from "./custom-module-development";
import IndustriesWeServe from "./industries-we-serve";
import ServingSiliguri from "./serving-siliguri-north-bengal";
import CostTimeline from "./cost-timeline";
import ChooseDeveloper from "./choosing-a-developer";
import ImplimentationSetup from "./implementation-setup";
import FreeConsultationPopup from "@/components/ConsultationPopup";

const solutionsJSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Siliguri Odoo Expert Guide",
      author: {
        "@type": "Organization",
        name: "Dorii Software",
      },
    },
    {
      "@type": "WebPage",
      "@id": "/services/odoo-customisation#webpage",
      url: "/services/odoo-customisation",
      name: "Siliguri Odoo Expert | Custom Odoo Modules & Workflow Automation",
      description:
        "Siliguri’s dedicated Odoo development team — custom module development, workflow automation, and full ERP implementation for North Bengal and global clients. Book a consultation today.",
      inLanguage: "en",
      isPartOf: {
        "@id": "/#services",
      },
    },

    {
      "@type": "Service",
      "@id": "/services/odoo-customisation#service",
      name: "Odoo Customisation",
      provider: {
        "@id": "/#organization",
      },
      areaServed: ["IN", "Global"],
      serviceType: [
        "Custom Module Development",
        "Workflow Automation",
        "ERP Implementation",
      ],
      url: "/services/odoo-customisation",
      description:
        "Full Odoo customization including modules, workflow automation, and compliance for Indian and global clients.",
    },

    {
      "@type": "FAQPage",
      "@id": "/services/odoo-customisation#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What Is Odoo Customisation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Odoo customisation means modifying or extending Odoo to match your exact operational requirements — from small UI adjustments and custom fields, to fully bespoke modules.",
          },
        },
        {
          "@type": "Question",
          name: "When Should You Customise Odoo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Customisation is justified when standard Odoo configuration cannot accommodate complex business rules, automation, or regulatory compliance requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What Does Odoo Customisation Cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Costs vary based on complexity: Configuration ($150–$750), Workflow Automation ($250–$1,250), Custom Module ($1,000–$5,000), Full Implementation ($1,750–$7,500).",
          },
        },
      ],
      isPartOf: {
        "@id": "/services/odoo-customisation#webpage",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Siliguri Odoo Expert - Custom Odoo Modules & Workflow Automation",
  description:
    "Siliguri’s dedicated Odoo development team — custom module development, workflow automation, and full ERP implementation for North Bengal and global clients. Book a consultation today.",
  keywords: [
    "Odoo expert Siliguri",
    "Odoo customisation North Bengal",
    "ERP implementation",
    "Workflow automation Odoo",
    "Custom Odoo modules",
    "Odoo developer India",
    "GST compliance Odoo",
    "North Bengal business software",
  ],
  authors: [{ name: "DORII", url: "/" }],
  alternates: {
    canonical: "/services/odoo-customisation",
  },
  openGraph: {
    title: "Siliguri Odoo Expert | Custom Odoo Modules & Workflow Automation",
    description: "Siliguri’s dedicated Odoo development team...",
    url: "/services/odoo-customisation",
    siteName: "Dorii Software",
    images: [
      {
        url: "/images/service/odoo-customisation.png",
        width: 1200,
        height: 630,
        alt: "Siliguri Odoo Expert - Custom Modules & Workflow Automation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siliguri Odoo Expert | Custom Odoo Modules & Workflow Automation",
    description: "Siliguri’s dedicated Odoo development team...",
    images: ["/images/service/odoo-customisation.png"],
    creator: "@dorii",
  },
};
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(solutionsJSONLD),
        }}
      />

      <div className="">
        {/* HERO */}
        <section className="hero px-6 relative overflow-hidden bg-linear-to-br from-[#4f2f45] via-[#734B66] to-[#9b6a8e] text-white py-24">
          {/* Soft Glow Background */}
          <div className="absolute -top-32 -right-32 w-100 h-100 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-100 h-100 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-6xl mx-auto">
            {/* 🔹 Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
              <span className="px-4 py-1.5 rounded-full bg-yellow-400/20 text-yellow-200 border border-yellow-300/30">
                Odoo Expert · Siliguri, West Bengal
              </span>

              <span className="px-4 py-1.5 rounded-full bg-orange-400/20 text-orange-200 border border-orange-300/30">
                North Bengal & Global Delivery
              </span>

              <span className="text-white/70">
                14 min read · Updated February 2026
              </span>
            </div>

            {/* 🔹 Heading */}
            <h1
              className={`${bebas.className} mb-8 tracking-wide text-5xl md:text-6xl lg:text-7xl font-bold text-white`}
            >
              Siliguri's{" "}
              <em className="not-italic text-yellow-300">Odoo Expert</em> —
              Built for Local Businesses, Trusted Globally
            </h1>

            {/* 🔹 Author Block */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
                DO
              </div>
              <div className="text-sm">
                <strong className="block">
                  Odoo Developer · Siliguri, West Bengal
                </strong>
                <span className="text-white/70">
                  Serving North Bengal businesses & clients in 8+ countries
                </span>
              </div>
            </div>

            {/* 🔹 Description */}
            <p className="text-lg text-white/80 max-w-3xl mb-10 leading-relaxed">
              Siliguri's dedicated Odoo development team — custom module
              development, workflow automation, and full implementation for
              businesses in North Bengal and worldwide. We understand local
              business needs and speak your language — in every sense.
            </p>

            {/* 🔹 Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <FreeConsultationPopup
                buttonText="Talk to an Odoo Developer"
                buttonClass="inline-flex items-center gap-2 bg-white text-[#5e2b97] font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
                buttonChildren={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                }
              />

              <a
                href="#what-is-odoo-customisation"
                className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition"
              >
                Read the guide
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        {/* PAGE LAYOUT */}
        <div
          className="max-w-6xl mx-auto px-6 py-16
                      grid grid-cols-1 
                      lg:grid-cols-[260px_1fr]"
        >
          <TableOfContents />

          <article className="lg:pl-12 space-y-28">
            {/* 1. WHAT IS ODOO CUSTOMISATION */}
            <WhatIsOdoo />

            {/* When should you need */}
            <DecisionGuide />

            {/* 3. WORKFLOW AUTOMATION */}
            <WorkFlow />

            {/* 2. CUSTOM MODULE DEVELOPMENT */}
            <CustoomModule />

            {/* 4. IMPLEMENTATION */}
            <ImplimentationSetup />

            {/* 5. INDUSTRIES */}
            <IndustriesWeServe />

            {/* 7. LOCAL EXPERTISE */}
            <ServingSiliguri />

            {/* 6. COST */}
            <CostTimeline />

            {/* Choosing a Developer */}
            <ChooseDeveloper />

            {/* FAQ     */}
            <FAQSection />
            {/* CTA */}
            <section
              id="contact"
              className="mt-20 py-20 px-6 text-center text-white bg-linear-to-r from-[#5e3d54] via-[#734B66] to-[#8a5c7c] rounded-xl"
            >
              <div className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Work With Siliguri’s Odoo Expert?
                </h2>

                <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
                  Book a free consultation — in person in Siliguri or via video
                  call. We’ll scope your project and send a fixed-price quote
                  within 48 hours.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                  <FreeConsultationPopup
                    buttonText="Talk to an Odoo Developer"
                    buttonClass="inline-flex items-center gap-2 bg-white text-[#734B66] font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
                    buttonChildren={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    }
                  />

                  <a
                    href="https://wa.me/919732939123"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-[#734B66] transition"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>

                <p className="text-sm text-white/80 mt-6">
                  Pricing available in INR for Indian clients · USD for
                  international clients
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}

import FAQSection from "./components/faq-section";
import TableOfContents from "./components/TableOfContents";
import { Bebas_Neue } from "next/font/google";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

import { Metadata } from "next";
import Head from "next/head";

const solutionsJSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "DORII Software",
      url: "https://dorii.in",
      logo: "https://dorii.in/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/dorii-software",
        "https://www.facebook.com/dorii.in",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "doriisoftware@gmail.com",
        contactType: "customer support",
        areaServed: ["IN", "Global"],
      },
    },
    {
      "@type": "WebPage",
      name: "Siliguri Odoo Expert | Custom Odoo Modules & Workflow Automation",
      url: "https://dorii.in/odoo-customisation",
      description:
        "Siliguri’s dedicated Odoo development team — custom module development, workflow automation, and full ERP implementation for North Bengal and global clients. Book a consultation today.",
      inLanguage: "en",
      isPartOf: {
        "@id": "https://dorii.in/#organization",
      },
    },
    {
      "@type": "Service",
      name: "Odoo Customisation",
      provider: {
        "@type": "Organization",
        name: "DORII Software",
      },
      areaServed: ["IN", "Global"],
      serviceType: [
        "Custom Module Development",
        "Workflow Automation",
        "ERP Implementation",
      ],
      url: "https://dorii.in/odoo-customisation",
      description:
        "Full Odoo customization including modules, workflow automation, and compliance for Indian and global clients.",
    },
    {
      "@type": "FAQPage",
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
  authors: [{ name: "DORII", url: "https://dorii.in" }],
  openGraph: {
    title: "Siliguri Odoo Expert | Custom Odoo Modules & Workflow Automation",
    description: "Siliguri’s dedicated Odoo development team...",
    url: "https://dorii.in/odoo-customisation",
    siteName: "Dorii Software",
    images: [
      {
        url: "https://dorii.in/og-image.png",
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
    images: ["https://dorii.in/og-image.png"],
    creator: "@dorii",
  },
};
export default function Page() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(solutionsJSONLD),
          }}
        />
      </Head>
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
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#5e2b97] font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
              >
                Talk to an Odoo Developer
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
              </a>

              <a
                href="#toc-start"
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
            <section
              id="what-is-odoo-customisation"
              className="scroll-mt-28 space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                What Is Odoo Customisation?
              </h2>

              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Odoo is one of the most powerful open-source business
                  management platforms — covering CRM, accounting, inventory,
                  HR, manufacturing, e-commerce, and more. But out of the box,
                  Odoo is built for the average business.
                  <strong> Your business isn’t average.</strong>
                </p>

                <p>
                  <strong>Odoo customisation</strong> means modifying or
                  extending Odoo to match your exact operational requirements —
                  from small UI adjustments and custom fields, to fully bespoke
                  modules that introduce entirely new functionality.
                </p>
              </div>

              {/* Callout */}
              <div className="border-l-4 border-[#734B66] bg-purple-50/40 p-6 rounded-r-xl">
                <h4 className="text-lg font-semibold text-[#734B66] mb-3">
                  Why It Matters for Small Businesses
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Large enterprises adapt their teams around software. Small
                  businesses can’t afford that luxury. The right customisation
                  ensures your software adapts around you — saving hours every
                  week and eliminating costly errors.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Four Types of Odoo Customisation
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Configuration",
                    desc: "Adjusting built-in settings and enabling features within existing modules. No coding — fastest and most cost-effective.",
                  },
                  {
                    title: "Module Extension",
                    desc: "Extending existing modules using Odoo inheritance without touching core code.",
                  },
                  {
                    title: "Custom Module Development",
                    desc: "Building entirely new modules from scratch for unique business logic.",
                  },
                  {
                    title: "Third-Party Integration",
                    desc: "Connecting Odoo to Shopify, Razorpay, Stripe, WhatsApp, logistics APIs, and more.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                  >
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* When should you need */}
            <section
              id="when-should-you-customise"
              className="scroll-mt-28 space-y-8"
            >
              {/* Section Header */}
              <div className="space-y-4 max-w-3xl">
                <span className="text-sm font-semibold text-[#734B66] uppercase tracking-wide">
                  Decision Guide
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                  When Should You Customise Odoo Instead of Using Standard
                  Features?
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Not every business requirement needs custom Odoo development.
                  In many cases, standard Odoo configuration is enough. The key
                  is understanding when customisation delivers real ROI — and
                  when it simply increases cost and complexity.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Below is a practical decision guide to help business owners,
                  operations managers, and finance teams determine whether Odoo
                  customisation is justified.
                </p>
              </div>

              {/* Decision Table */}
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full text-left">
                  <thead className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <th className="p-4 border">Scenario</th>
                      <th className="p-4 border">Recommendation</th>
                      <th className="p-4 border">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Your process is standard (CRM, invoicing, inventory)",
                        "Use Standard Odoo",
                        "Configuration is cheaper and easier to maintain",
                      ],
                      [
                        "You re-enter the same data in multiple modules",
                        "Automate Workflow",
                        "Reduces manual errors and saves staff time",
                      ],
                      [
                        "Business rules are not supported by existing modules",
                        "Custom Module Development",
                        "Ensures accurate calculations and reporting",
                      ],
                      [
                        "You need GST, e-Invoicing, TDS, or Indian compliance",
                        "Localisation Customisation",
                        "Required for regulatory compliance in India",
                      ],
                      [
                        "You want UI changes for aesthetics only",
                        "Avoid Customisation",
                        "High cost, low business value",
                      ],
                      [
                        "Team refuses to adapt any internal process",
                        "Revisit Change Management",
                        "Software cannot fix cultural resistance",
                      ],
                    ].map((row, i) => (
                      <tr key={i} className=" transition">
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="p-4 border text-gray-700 dark:text-gray-300 align-top"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* SEO Paragraph Expansion */}
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Signs You Definitely Need Odoo Customisation
                </h3>

                <p>
                  If your company relies on complex approval hierarchies, custom
                  commission structures, multi-location stock rules, or unique
                  pricing calculations, standard configuration may not be
                  enough. In such cases, tailored Odoo module development
                  ensures accuracy, automation, and long-term scalability.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  When Configuration Is Better Than Custom Development
                </h3>

                <p>
                  If your workflows are close to industry standards, adapting
                  your processes slightly to fit Odoo’s built-in logic is often
                  more cost-effective. This reduces upgrade issues and keeps
                  long-term maintenance simple.
                </p>

                <p>
                  The smartest Odoo strategy balances configuration first,
                  automation second, and custom development only when it
                  delivers measurable business value.
                </p>
              </div>

              {/* Callout */}
              <div className="border-l-4 border-[#734B66] bg-purple-50/40 p-6 rounded-r-xl">
                <h4 className="font-semibold text-[#734B66] mb-2">
                  Not Sure What You Need?
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  We analyse your workflow and recommend the most cost-effective
                  approach — configuration, automation, or full custom module
                  development.
                  <a
                    href="/contact"
                    className="text-[#734B66] font-medium hover:underline ml-1"
                  >
                    Request a consultation →
                  </a>
                </p>
              </div>
            </section>

            {/* 3. WORKFLOW AUTOMATION */}
            <section
              id="workflow-automation"
              className="scroll-mt-28 space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                Workflow Automation in Odoo
              </h2>

              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Workflow automation eliminates repetitive manual work —
                  approvals, document generation, reminders, and
                  synchronisation.
                </p>
              </div>

              {/* Two-column layout on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Approval Flows",
                  "Automated Communications",
                  "Document Generation",
                  "Data Synchronisation",
                ].map((title, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    {/* Number circle */}
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#734B66] text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 dark:text-gray-300">
                        {title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Automating routine business processes to increase speed
                        and reduce errors.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-l-4 border-[#734B66] bg-purple-50/40 p-6 rounded-r-xl">
                <h4 className="font-semibold text-[#734B66] mb-2">
                  Real-World Impact
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Clients regularly save 1–3 hours per day by automating manual
                  processes. Most automation projects pay for themselves within
                  weeks.
                </p>
              </div>
            </section>

            {/* 2. CUSTOM MODULE DEVELOPMENT */}
            <section
              id="custom-module-development"
              className="scroll-mt-28 space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                Custom Module Development
              </h2>

              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  When standard modules don’t fit your business logic,
                  <strong> custom module development</strong> becomes essential.
                </p>

                <p>
                  Modules are built using Python (backend), XML (views), and
                  JavaScript (frontend), following Odoo’s MVC architecture.
                  Every module we build is upgrade-safe and fully documented.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Common Examples
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  "Custom Pricing Rules",
                  "Industry-Specific Workflows",
                  "Custom Reports & Dashboards",
                  "Portal Enhancements",
                  "GST & Indian Compliance",
                  "WhatsApp / SMS Integration",
                ].map((title, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                  >
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Tailored development aligned with your specific
                      operational requirements.
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-l-4 border-[#734B66] bg-purple-50/40 p-6 rounded-r-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-[#734B66] mb-2">
                    Have a Specific Module in Mind?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    We’ll scope it and send a fixed-price quote — usually within
                    48 hours.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#734B66] text-white font-medium shadow-md hover:bg-[#5e3d54] transition-all duration-300"
                >
                  Contact Us →
                </a>
              </div>
            </section>

            {/* 4. IMPLEMENTATION */}
            <section
              id="implementation-setup"
              className="scroll-mt-28 space-y-10"
            >
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                  Odoo Implementation & Setup
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  A structured implementation ensures clean data, confident
                  users, and long-term scalability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Requirements & Planning",
                  "Installation & Configuration",
                  "Data Migration",
                  "Training & Go-Live",
                  "Post-Launch Support",
                ].map((title, i) => (
                  <div
                    key={i}
                    className="flex gap-5 p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
                  >
                    {/* Rounded Number */}
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#734B66] text-white flex items-center justify-center font-semibold text-sm shadow">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        Comprehensive setup aligned with your workflows and
                        long-term operational goals.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. INDUSTRIES */}
            <section
              id="industries-we-serve"
              className="scroll-mt-28 space-y-10"
            >
              {/* Header */}
              <div className="max-w-3xl space-y-4">
                <span className="text-sm font-semibold text-[#734B66] uppercase tracking-wide">
                  Industries We Serve
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                  Odoo Solutions for Diverse Business Industries
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We provide industry-specific Odoo implementation and
                  customisation services tailored to real operational
                  challenges. Whether you run a manufacturing unit, trading
                  company, retail store, or service organisation — we adapt Odoo
                  to match your business workflows, compliance needs, and growth
                  strategy.
                </p>
              </div>

              {/* Industry Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Manufacturing",
                    desc: "MRP, BOM management, production planning, quality control, and inventory automation.",
                  },
                  {
                    title: "Retail & E-commerce",
                    desc: "POS integration, Shopify sync, stock tracking, multi-store management, and GST billing.",
                  },
                  {
                    title: "Trading & Distribution",
                    desc: "Purchase workflows, bulk pricing rules, warehouse logistics, and multi-location inventory.",
                  },
                  {
                    title: "Construction",
                    desc: "Project costing, material tracking, contractor billing, and site-wise reporting.",
                  },
                  {
                    title: "Professional Services",
                    desc: "Timesheets, project billing, CRM pipelines, automated invoicing, and performance dashboards.",
                  },
                  {
                    title: "Hospitality",
                    desc: "Property management, vendor procurement, accounting automation, and operational reporting.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
                  >
                    {/* Accent Line */}
                    <div className="w-10 h-1 bg-[#734B66] mb-4 rounded-full"></div>

                    <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-[#734B66] transition">
                      {item.title}
                    </h5>

                    <p className="text-gray-700 dark:text-gray-300text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="border-l-4 border-[#734B66] bg-purple-50/40 p-6 rounded-r-xl max-w-3xl">
                <h4 className="font-semibold text-[#734B66] mb-2">
                  Don’t See Your Industry Listed?
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We customise Odoo for unique and niche industries as well.
                  <a
                    href="/contact"
                    className="text-[#734B66] font-medium hover:underline ml-1"
                  >
                    Talk to us about your requirements →
                  </a>
                </p>
              </div>
            </section>

            {/* 7. LOCAL EXPERTISE */}
            <section
              id="serving-siliguri-north-bengal"
              className="scroll-mt-28 space-y-6"
            >
              <span className="text-sm font-semibold text-[#5e2b97] uppercase tracking-wide">
                Local Expertise
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                Odoo Expert in Siliguri — Serving North Bengal & Beyond
              </h2>

              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  We are Siliguri’s dedicated Odoo development team. While many
                  agencies operate remotely from metros, we are right here —
                  understanding the local business landscape, the trading
                  culture of North Bengal, and Indian compliance requirements.
                </p>

                <p>
                  Whether you run a <strong>trading company in Siliguri</strong>
                  , a manufacturing unit, a professional services firm, or a
                  retail shop digitising operations — we’ve worked with
                  businesses like yours and know what works.
                </p>
              </div>

              {/* Local Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "📍",
                    title: "In-Person Meetings in Siliguri",
                    desc: "We can sit down with you, understand operations first-hand, and provide on-site training when needed.",
                  },
                  {
                    icon: "🏙️",
                    title: "We Know North Bengal Business",
                    desc: "Siliguri is a major trading hub for North Bengal, Sikkim, Bhutan, and Northeast India. We understand local trade patterns.",
                  },
                  {
                    icon: "🌐",
                    title: "Local Rates, Global Standards",
                    desc: "You get international-level development quality at Siliguri-friendly pricing.",
                  },
                  {
                    icon: "⚡",
                    title: "Fast Local Support",
                    desc: "Same city. Same timezone. Faster response and on-site assistance when required.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Areas Served */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Areas We Serve:
                </span>

                {[
                  "Siliguri",
                  "Darjeeling",
                  "Jalpaiguri",
                  "Gangtok",
                  "Kurseong",
                  "Cooch Behar",
                  "Alipurduar",
                  "North Bengal",
                  "Sikkim",
                  "Globally",
                ].map((city, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-purple-50 text-[#5e2b97] rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>

              {/* Callout */}
              <div className="border-l-4 border-[#5e2b97] bg-purple-50/40 p-6 rounded-r-xl">
                <h4 className="font-semibold text-[#5e2b97] mb-2">
                  Looking for an Odoo expert near Siliguri?
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  You’ve found one. We offer in-person consultations, on-site
                  training, and dedicated local business support.
                  <a
                    href="/contact"
                    className="text-[#5e2b97] font-medium ml-1 hover:underline"
                  >
                    Book a free meeting today.
                  </a>
                </p>
              </div>
            </section>
            {/* 6. COST */}
            <section id="cost-timeline" className="scroll-mt-28 space-y-8">
              <div className="max-w-3xl space-y-4">
                <span className="text-sm font-semibold text-[#734B66] uppercase tracking-wide">
                  Cost & Timeline
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                  What Does Odoo Customisation Cost?
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Odoo customisation costs vary depending on complexity,
                  integrations, reporting needs, and automation depth. Below is
                  a realistic pricing comparison based on the Indian market.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  These are typical investment ranges for small and mid-sized
                  businesses. Final pricing depends on scope clarity,
                  documentation, and required turnaround time.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full text-left">
                  <thead className="bg-gray-100 text-gray-800">
                    <tr>
                      <th className="p-4 border">Type</th>
                      <th className="p-4 border">USD</th>
                      <th className="p-4 border">India (₹)</th>
                      <th className="p-4 border">Timeframe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Configuration",
                        "$150 – $750",
                        "₹12,500 – ₹60,000",
                        "1–3 days",
                      ],
                      [
                        "Workflow Automation",
                        "$250 – $1,250",
                        "₹20,000 – ₹1,00,000",
                        "2–5 days",
                      ],
                      [
                        "Module Extension",
                        "$500 – $2,000",
                        "₹40,000 – ₹1,60,000",
                        "3–10 days",
                      ],
                      [
                        "Custom Module",
                        "$1,000 – $5,000",
                        "₹80,000 – ₹4,00,000",
                        "2–8 weeks",
                      ],
                      [
                        "Full Implementation",
                        "$1,750 – $7,500",
                        "₹1,40,000 – ₹6,00,000",
                        "4–10 weeks",
                      ],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition">
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="p-4 border text-gray-700 dark:text-gray-300"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-l-4 border-[#734B66] bg-purple-50/40 p-6 rounded-r-xl">
                <h4 className="font-semibold text-[#734B66] mb-2">
                  Our Pricing Promise
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Fixed-price quotes. Clear scope definition. No hidden
                  surprises. We document every feature before development begins
                  so you know exactly what you're paying for.
                </p>
              </div>
            </section>
            {/* Choosing a Developer */}
            <section
              id="choosing-a-developer"
              className="scroll-mt-28 space-y-10"
            >
              {/* Header */}
              <div className="max-w-3xl space-y-4">
                <span className="text-sm font-semibold text-[#734B66] uppercase tracking-wide">
                  Hiring Guide
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                  How to Choose the Right Odoo Developer for Your Business
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Selecting the right Odoo developer is one of the most
                  important decisions for your ERP success. A poorly structured
                  implementation can lead to upgrade issues, unstable modules,
                  and long-term maintenance headaches.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Whether you are hiring locally in Siliguri, anywhere in India,
                  or internationally — here’s what you should evaluate before
                  signing a contract.
                </p>
              </div>

              {/* Checklist Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Upgrade-Safe Development",
                    desc: "Ensure the developer follows Odoo inheritance patterns and never modifies core files. Poor practices cause upgrade failures.",
                  },
                  {
                    title: "Clear Scope Documentation",
                    desc: "A professional developer defines deliverables, timelines, and edge cases before coding begins.",
                  },
                  {
                    title: "Business Understanding",
                    desc: "Technical skill alone is not enough. Your developer must understand workflows, accounting logic, and compliance.",
                  },
                  {
                    title: "Indian Compliance Experience",
                    desc: "If you operate in India, experience with GST, e-invoicing (IRN), TDS, and local tax rules is essential.",
                  },
                  {
                    title: "Post-Launch Support",
                    desc: "Ask about support policies. ERP systems require adjustments after go-live.",
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "Avoid vague hourly commitments without scope clarity. Fixed pricing with milestones is safer.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-lg transition duration-300"
                  >
                    <div className="w-8 h-1 bg-[#734B66] mb-4 rounded-full"></div>

                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Warning Block */}
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl max-w-3xl">
                <h4 className="font-semibold text-red-600 mb-2">
                  ⚠ Common Mistake to Avoid
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Choosing the cheapest freelancer without verifying
                  architecture standards often leads to unstable systems and
                  expensive rework. ERP customisation should be treated as a
                  long-term investment — not a short-term cost decision.
                </p>
              </div>

              {/* Trust CTA */}
              <div className="border-l-4 border-[#734B66] bg-purple-50/40 p-6 rounded-r-xl max-w-3xl">
                <h4 className="font-semibold text-[#734B66] mb-2">
                  Looking for a Reliable Odoo Developer in Siliguri or India?
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  We combine 20+ years of business software experience with
                  structured Odoo development practices. Let’s discuss your
                  requirements and determine the most efficient approach.
                  <a
                    href="/contact"
                    className="text-[#734B66] font-medium hover:underline ml-1"
                  >
                    Book a consultation →
                  </a>
                </p>
              </div>
            </section>
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
                  <a
                    href="mailto:doriisoftware@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-[#734B66] font-semibold shadow-lg hover:bg-gray-100 transition"
                  >
                    Book a Free Consultation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>

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

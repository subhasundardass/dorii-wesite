// app/about/page.tsx

import { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dorii Software",
  url: "https://dorii.in",
  logo: "https://dorii.in/logo.png",
  description:
    "Dorii Software is a Siliguri-based ERP and business automation company delivering scalable software for transport, inventory, warehouse, and enterprise operations across India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Siliguri",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: ["https://www.linkedin.com/company/dorii-software"],
};

export const metadata: Metadata = {
  title: "About Dorii Software | ERP & Business Automation Company in Siliguri",
  description:
    "Dorii Software is a Siliguri-based ERP and business automation company delivering scalable solutions for transport, inventory, warehouse, and enterprise operations across India.",
  keywords: [
    "Dorii Software",
    "ERP Software Company in Siliguri",
    "Business Automation India",
    "Custom ERP Development Siliguri",
    "Transport Management Software India",
    "Warehouse Management System",
    "Inventory Software North Bengal",
    "Odoo Development Company India",
    "ERP Company North Bengal",
    "Software Company Siliguri",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title:
      "About Dorii Software | ERP & Business Automation Company in Siliguri",
    description:
      "We build scalable ERP, transport, inventory, and warehouse software for growing businesses across India. Headquartered in Siliguri, West Bengal.",
    url: "https://dorii.in/about",
    siteName: "Dorii Software",
    images: [
      {
        url: "https://dorii.in/og/about-dorii.png",
        width: 1200,
        height: 630,
        alt: "Dorii Software – ERP & Business Automation Company in Siliguri",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dorii Software | ERP & Automation Company, Siliguri",
    description:
      "ERP, transport, warehouse & business automation software built for real-world operations. Based in Siliguri, North Bengal, India.",
    images: ["https://dorii.in/og/about-dorii.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Article />
    </>
  );
}

function Article() {
  return (
    <>
      <header className="relative overflow-hidden bg-[#f5f3ee] dark:bg-[#141416] px-6 pt-28 pb-16 sm:px-12 sm:pt-40 sm:pb-24">
        {/* Background accent blob */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-amber-100/50 blur-2xl dark:bg-amber-900/10" />

        <div className="relative mx-auto max-w-4xl">
          {/* Eyebrow line */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              About Us
            </span>
          </div>

          <h1 className="font-['Playfair_Display',Georgia,serif] text-4xl xs:text-5xl font-black leading-[1.1] tracking-tight text-gray-950 dark:text-gray-50 sm:text-5xl md:text-6xl lg:text-7xl">
            We build software for businesses that run on operations.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400 sm:text-xl">
            Siliguri, North Bengal · India
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-20 xs:py-0 xs:px-10">
        {/* ── Intro ── */}
        <div className="mt-10 space-y-5 text-[17px]  leading-[1.85] text-muted-foreground">
          <p>
            Dorii Software is a software development company based in Siliguri,
            West Bengal. We specialise in ERP systems, business automation, and
            custom enterprise applications — primarily for transport, logistics,
            inventory, and warehouse operations.
          </p>
          <p>
            We work with small and mid-sized businesses across India. Most of
            our clients are in industries where daily operations are complex,
            manual work is heavy, and the right software can make a real
            difference.
          </p>
        </div>

        <Divider />

        {/* ── What We Do ── */}
        <Section heading="What we do">
          <p>
            We build custom software — not packaged products. Every engagement
            starts with understanding how the business actually works: the daily
            routines, the bottlenecks, the reporting needs, and the decisions
            people make on the ground.
          </p>
          <p>
            Our core work covers transport and logistics management systems,
            custom ERP solutions, inventory and warehouse software, billing and
            accounts automation, and Odoo implementation and customisation.
          </p>
          <p>
            Most projects start small — a single module, a specific pain point,
            a process that&apos;s still running on Excel. Over time, the system
            grows with the business.
          </p>
        </Section>

        <Divider />

        {/* ── How We Think ── */}
        <Section heading="How we think about software">
          <p>
            A transporter, a distributor, and a manufacturer may all say they
            need &quot;ERP&quot; — but their workflows, decisions, and
            constraints are fundamentally different. Off-the-shelf software
            rarely accounts for that. Businesses end up changing how they work
            to fit the software, instead of the other way around.
          </p>
          <p>
            We don&apos;t believe in one-size-fits-all systems. Our focus is on
            software that people actually use every day — simple enough to
            adopt, stable enough to trust, and flexible enough to grow.
          </p>
          <p>
            We&apos;re not chasing buzzwords or building dashboards for
            demonstration purposes. The measure of good software, for us, is
            whether it quietly makes the business run better.
          </p>
        </Section>

        <Divider />

        {/* ── Why Dorii ── */}
        <Section heading="Why Dorii was started">
          <p>
            Dorii was started after years of working closely with businesses
            across logistics, manufacturing, and service operations — and seeing
            the same pattern everywhere. Teams struggling with rigid software,
            too many Excel sheets, and manual processes that created risk and
            slowed decisions.
          </p>
          <p>
            Most available solutions were either too large and expensive, too
            generic to be useful, or sold by vendors who disappeared after
            delivery. The gap wasn&apos;t in technology. It was in how software
            was being built and supported.
          </p>
          <p>
            Dorii was built to address that — with a focus on long-term
            partnership, honest assessments, and systems that work in the real
            world, not just in demos.
          </p>
        </Section>

        <Divider />

        {/* ── Who We Work With ── */}
        <Section heading="Who we work with">
          <p>
            We primarily work with businesses in transport and logistics,
            inventory and warehousing, manufacturing, and service-heavy
            operations. Many clients are based in North Bengal and Northeast
            India, though we work with businesses across the country.
          </p>
          <p>
            We&apos;re a good fit if you&apos;re looking for a team that
            understands business operations, not just code — and if you want a
            long-term partner who stays involved after the system goes live.
          </p>
          <p>
            If you&apos;re looking for the cheapest quote or a quick handoff,
            we&apos;re probably not the right fit. If you want reliable software
            built thoughtfully and supported consistently, that&apos;s what we
            do.
          </p>
        </Section>

        <Divider />

        {/* ── CTA ── */}
        <ContactCTA />
      </article>
    </>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────

// ── CTA ────────────────────────────────────────────────────────────────────
export const ContactCTA = () => (
  <section className="mt-24 rounded-2xl border border-border bg-muted/30 px-8 py-14 text-center">
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
      Exploring ERP or automation for your business?
    </p>
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
      Get in touch
    </h2>
    <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
      If you&apos;re exploring ERP, automation, or improvements to how your
      business runs — we&apos;re happy to have an honest conversation about what
      would actually help.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
      >
        Get in touch →
      </Link>
      <Link
        href="/services"
        className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold hover:bg-muted/50 transition"
      >
        See what we build
      </Link>
    </div>

    <p className="mt-6 text-xs text-muted-foreground">
      Based in Siliguri · Serving clients across India ·{" "}
      <Link
        href="/contact"
        className="underline underline-offset-2 hover:text-foreground"
      >
        contact@dorii.in
      </Link>
    </p>
  </section>
);

function Divider() {
  return <hr className="my-12 border-t border-border" />;
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight mb-5">{heading}</h2>
      <div className="space-y-5 text-[17px] leading-[1.85] text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

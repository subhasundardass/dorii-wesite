// app/about/page.tsx

import {
  Workflow,
  Layers,
  Settings,
  ShieldCheck,
  Users,
  CheckCircle,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dorii Software | ERP & Business Automation Company in Siliguri",
  description:
    "Dorii Software is a Siliguri-based ERP and business automation company delivering scalable solutions for transport, inventory, warehouse, and enterprise operations across India.",

  keywords: [
    "Dorii Software",
    "ERP Software Company in Siliguri",
    "Business Automation India",
    "Custom ERP Development",
    "Transport Management Software",
    "Warehouse Management System",
    "Inventory Software",
    "Odoo Development Company",
  ],

  alternates: {
    canonical: "https://dorii.in/about",
  },

  openGraph: {
    title: "About Dorii Software | ERP & Business Automation Experts",
    description:
      "We build scalable ERP, transport, inventory, and warehouse software for growing businesses across India. Headquartered in Siliguri.",
    url: "https://dorii.in/about",
    siteName: "Dorii Software",
    images: [
      {
        url: "https://dorii.in/og/about-dorii.png",
        width: 1200,
        height: 630,
        alt: "Dorii Software – ERP & Business Automation Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Dorii Software | ERP & Automation Company",
    description:
      "ERP, transport, warehouse & business automation software built for real-world operations. Based in Siliguri, India.",
    images: ["https://dorii.in/og/about-dorii.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="mt-6 max-w-(--breakpoint-xl) mx-auto w-full py-16 xs:py-20 px-6">
      {/* Hero */}
      <HeroSection />
      {/* Who We Are */}
      <WhoWeAre />
      {/* Who We Work With */}
      <WhoWeWorkWith />

      {/* Mission & Vision */}
      <MissionAndVission />

      {/* Founder story - optional */}
      <FounderStory />

      {/* CTA */}
      <ContactCTA />
    </main>
  );
}

export const HeroSection: React.FC = () => {
  return (
    <section className="text-center">
      <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">
        About Dorii Software
      </h1>

      <p className="mt-6 max-w-[100ch] sm:mx-auto sm:text-center text-muted-foreground text-lg">
        Dorii Software is an India-based software development company
        specializing in ERP systems, business automation, and custom enterprise
        applications for transport, logistics, inventory, and operational
        management.
      </p>
      <p className="mt-6 max-w-[100ch] sm:mx-auto sm:text-center text-lg">
        Dorii was started with a simple but recurring observation — many
        businesses work incredibly hard, yet struggle because their systems are
        scattered. We’ve seen transporters tracking bookings on WhatsApp,
        billing on Excel, accounts on paper, and follow-ups purely from memory.
        For a while, this works. Then scale, errors, and confusion creep in.
        Dorii exists to fix that gap. We build practical ERP and business
        automation software for companies that want clarity, control, and
        reliability in their daily operations — without unnecessary complexity.
      </p>
    </section>
  );
};

export const WhoWeAre: React.FC = () => {
  return (
    <section className="mt-12 max-w-6xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">What We Do</h2>

          <p className="leading-relaxed">
            We work with small and mid-sized businesses, startups, logistics
            providers, warehouse operators, manufacturers, and service-based
            enterprises that need reliable, business-centric software solutions.
          </p>
          <p className="mt-2">
            At Dorii, we design and develop custom software solutions focused on
            real business workflows, not theoretical models.
          </p>

          <p className="my-2 font-semibold">Our core areas include:</p>
          <ul>
            <li className="list-disc ml-4">
              Transport & Logistics Management Systems (TMS)
            </li>
            <li className="list-disc ml-4">Custom ERP solutions</li>
            <li className="list-disc ml-4">Inventory & Warehouse Management</li>
            <li className="list-disc ml-4">
              Billing, accounts, and operational automation
            </li>
            <li className="list-disc ml-4">
              Odoo implementation and customization
            </li>
            <li className="list-disc ml-4">
              Long-term support and system evolution
            </li>
          </ul>
          <p className="mt-2">
            Most of our work starts small — a module, a pain point, a manual
            process — and grows as the business grows.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            How We Think About Software
          </h2>

          <p className="mt-2">
            We don’t believe in one-size-fits-all software. Every business has
            its own workflows, constraints, and decision-making processes.. A
            transporter, a distributor, and a manufacturer may all need “ERP”,
            but their workflows, decisions, and constraints are very different.
            Software should adapt to the business, not force the business to
            adapt to the software.
          </p>
          <p className="my-2 font-semibold">Our focus is always on:</p>
          <ul>
            <li className="list-disc ml-4">Simplicity over buzzwords</li>
            <li className="list-disc ml-4">Stability over flashy features</li>
            <li className="list-disc ml-4">
              Systems that people actually use daily
            </li>
          </ul>
          <p className="mt-4 max-w-3xl mx-auto">
            We believe good software should fit the business, not force the
            business to fit the software. Our approach is shaped by real
            operational experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export const WhoWeWorkWith: React.FC = () => {
  return (
    <section className="mt-12 max-w-6xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Work With</h2>

          <p className="leading-relaxed">
            At Dorii, we design and develop custom software solutions focused on
            real business workflows, not theoretical models.
          </p>

          <p className="my-2 font-semibold">We primarily work with:</p>
          <ul>
            <li className="list-disc ml-4">Small and mid-sized businesses</li>
            <li className="list-disc ml-4">
              Transport and logistics companies
            </li>
            <li className="list-disc ml-4">Inventory-driven operations</li>
            <li className="list-disc ml-4">
              Service and operations-heavy organizations
            </li>
            <li className="list-disc ml-4">
              Startups that need solid foundations
            </li>
          </ul>
          <p className="mt-2">
            Based in <strong>Siliguri, North Bengal</strong>, we work closely
            with clients across India, often acting not just as developers but
            as long-term technology partners.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Dorii</h2>
          <p className="mt-2">
            Dorii was founded to bridge the gap between engineering knowledge
            and real-world business needs.
          </p>
          <p className="mt-2">
            We’ve seen too many systems fail because they looked good on paper
            but didn’t fit the ground reality. Our goal is to build software
            that supports decision-making, reduces dependency on memory and
            manual work, and brings visibility to operations.
          </p>
          <p>
            If you’re looking for flashy dashboards and generic promises, we may
            not be the right fit.
          </p>
          <p className="my-2 font-semibold">
            If you’re looking for reliable, thoughtfully built systems that grow
            with your business, Dorii is built for that.
          </p>
        </div>
      </div>
    </section>
  );
};

export const MissionAndVission: React.FC = () => {
  return (
    <section className="mt-12 max-w-6xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold">Our Mission</h2>

          <p className="mt-4 leading-relaxed">
            At Dorii Software, our mission is to bridge the gap between academic
            excellence and real-world software delivery.
          </p>

          <p className="mt-4 leading-relaxed">
            We hand-pick highly skilled and passionate engineers from leading
            colleges and place them in a structured, professional environment
            guided by seasoned industry experts. This unique collaboration
            enables us to harness the energy, creativity, and technical
            sharpness of the young generation while upholding enterprise-grade
            standards, proven best practices, and strong accountability.
          </p>

          <p className="mt-4 leading-relaxed">
            By combining fresh perspectives with battle-tested experience, we
            deliver software solutions that are:
          </p>

          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>Innovative yet practical</li>
            <li>Scalable yet maintainable</li>
            <li>Modern yet reliable</li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Our mission goes beyond building software. We are committed to
            cultivating engineering talent, delivering long-term business value,
            and creating technology solutions that evolve and grow with our
            clients’ businesses.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold">Our Vision</h2>

          <p className="mt-4 leading-relaxed">
            Our vision at Dorii Software is to become a trusted technology
            partner for businesses by delivering software solutions that are
            reliable, scalable, and built with long-term impact in mind.
          </p>

          <p className="mt-4 leading-relaxed">
            We envision a future where businesses of all sizes can leverage
            powerful ERP systems and automation tools without complexity, high
            costs, or dependency on rigid platforms. Our goal is to make
            enterprise-grade technology accessible, adaptable, and
            human-centric.
          </p>

          <p className="mt-4 leading-relaxed">
            By continuously nurturing young engineering talent and strengthening
            them with industry expertise, we aim to create a sustainable
            ecosystem where innovation, quality, and accountability coexist.
          </p>

          <p className="mt-4 leading-relaxed">
            Through this approach, we strive to build technology that:
          </p>

          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>Grows alongside evolving business needs</li>
            <li>Empowers teams instead of overwhelming them</li>
            <li>Delivers measurable value beyond implementation</li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Our vision is not just to deliver software projects, but to shape a
            future where technology becomes a strategic advantage for every
            organization we work with.
          </p>
        </div>
      </div>
      <p className="mt-6 text-lg">
        Our vision is simple — to help businesses run better through clear
        systems, honest technology, and long-term thinking. Technology should
        not be a burden. It should quietly support the business while people
        focus on what they do best.
      </p>
    </section>
  );
};

export const FounderStory: React.FC = () => {
  return (
    <section className="mt-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Founder&apos;s Story</h2>
      <p className="leading-relaxed">
        Dorii was started with a simple belief: software should work for the
        business, not the other way around.
      </p>
      <p className="mt-4 leading-relaxed">
        After spending years working closely with businesses across logistics,
        manufacturing, sales, and service operations, our founder saw the same
        problem everywhere — teams struggling with rigid software, endless Excel
        sheets, and manual processes that slowed growth instead of supporting
        it.
      </p>
      <p className="mt-4 leading-relaxed">
        Most off-the-shelf ERPs and CRMs were either too complex, too expensive,
        or poorly aligned with how businesses actually operate on the ground.
        Owners were forced to change their processes just to fit the software.
      </p>
      <p className="mt-4 leading-relaxed">Dorii was created to change that. </p>
      <p className="mt-4 leading-relaxed">
        Instead of selling generic solutions, we focus on understanding how a
        business really runs — from daily operations to reporting and
        decision-making. Every system we build is practical, purpose-driven, and
        designed to grow along with the business.
      </p>
      <p className="mt-4 leading-relaxed">
        Today, Dorii works with businesses that value clarity, efficiency, and
        long-term partnership over flashy features. We don’t just deliver
        software — we stay involved, improve continuously, and take
        responsibility for making systems work in the real world.
      </p>
      <p className="mt-4 leading-relaxed font-semibold">
        Our approach is simple:
      </p>
      <p>Listen carefully. Build thoughtfully. Support consistently.</p>
      <p className="text-lg mt-6">
        Built by a team with hands-on experience working with ERP systems,
        logistics operations, accounting workflows, and business automation in
        real-world environments.
      </p>
    </section>
  );
};

export const ContactCTA = () => {
  return (
    <section className="mt-24 rounded-2xl border bg-muted/40 px-6 py-12 text-center">
      <p className="text-lg md:text-xl font-medium">
        If you’re exploring ERP, automation, or system improvements — we’re
        happy to talk.
      </p>

      <p className="mt-4 text-sm md:text-base text-muted-foreground">
        📩 Reach out to discuss your requirements or ask questions.
      </p>

      <div className="mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          Get in touch
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
};

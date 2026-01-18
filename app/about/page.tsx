// app/about/page.tsx

import { Button } from "@/components/ui/button";
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
    "Dorii Software is a Siliguri-based ERP and business automation company delivering scalable software solutions for transport, inventory, warehouse, and enterprise operations across India.",
  keywords: [
    "Dorii Software",
    "ERP Software Company in Siliguri",
    "Business Automation India",
    "Custom ERP Development",
    "Odoo Development Company",
    "Inventory Management Software",
    "Warehouse Management System",
    "Transport Management Software",
    "Enterprise Software Solutions India",
  ],
};

export default function AboutPage() {
  return (
    <main className="mt-8 max-w-(--breakpoint-xl) mx-auto w-full py-16 xs:py-24 px-6">
      {/* Hero */}
      <section aria-labelledby="about-heading" className="text-center">
        <h1
          id="about-heading"
          className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight"
        >
          About Dorii Software
        </h1>

        <p className="mt-6  max-w-[100ch] sm:mx-auto sm:text-center">
          Dorii Software is an India-based software development company
          specializing in ERP systems, business automation, and custom
          enterprise applications for transport, logistics, inventory, and
          operational management.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mt-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Who We Work With</h2>
          <p className="mt-4 leading-relaxed ">
            We work with small and mid-sized businesses, startups, logistics
            providers, warehouse operators, manufacturers, and service-based
            enterprises that require reliable, scalable, and business-centric
            software solutions.
          </p>
          <p className="mt-4 leading-relaxed ">
            Our expertise spans transport management systems, inventory and
            warehouse software, housing society platforms, and custom enterprise
            applications. We emphasize long-term stability, performance, and
            maintainability in every solution we deliver.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Where We Come From</h2>
          <p className="mt-4 leading-relaxed ">
            Headquartered in Siliguri, North Bengal, Dorii Software was founded
            with a clear vision: to bridge the gap between academic engineering
            knowledge and real-world enterprise software requirements.
          </p>
          <p className="mt-4 leading-relaxed ">
            By combining disciplined engineering practices with practical
            business insight, we help organizations adopt technology without
            disrupting their existing workflows.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mt-24 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Our Mission</h2>

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
          <h2 className="text-2xl font-semibold">Our Vision</h2>

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
      </section>

      {/* What We Do */}
      <section className="mt-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          What We Do
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-center ">
          We design, develop, and maintain software systems that support core
          business operations across multiple industries.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "ERP Software Development",
              desc: "End-to-end ERP systems customized to match your business workflows and reporting needs.",
            },
            {
              title: "Business Process Automation",
              desc: "Automation of repetitive and manual processes to improve efficiency and accuracy.",
            },
            {
              title: "Transport Management Systems",
              desc: "Fleet operations, delivery tracking, billing, and logistics management solutions.",
            },
            {
              title: "Inventory & Warehouse Software",
              desc: "Stock tracking, warehouse operations, inward–outward flows, and audit-ready reporting.",
            },
            {
              title: "Odoo Customization & Optimization",
              desc: "Odoo implementation, module customization, performance tuning, and integrations.",
            },
            {
              title: "Technical Consulting & Architecture",
              desc: "System design, scalability planning, and long-term technology consulting.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border p-6 bg-background hover:bg-muted transition"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-3 text-sm ">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Dorii */}
      <section className="mt-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Why Choose Dorii Software
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">
          We combine business understanding with strong engineering practices to
          deliver ERP and automation systems you can rely on long term.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Workflow,
              title: "Business-First Approach",
              desc: "We design software around real operational workflows, not generic assumptions.",
            },
            {
              icon: Layers,
              title: "Scalable Architecture",
              desc: "Our systems are built to grow with your business without performance bottlenecks.",
            },
            {
              icon: Settings,
              title: "ERP & Odoo Expertise",
              desc: "Hands-on experience with custom ERP systems and deep Odoo customization.",
            },
            {
              icon: ShieldCheck,
              title: "Reliable & Secure",
              desc: "Stable, secure, and well-tested software designed for daily enterprise use.",
            },
            {
              icon: Users,
              title: "Long-Term Partnership",
              desc: "We focus on support, evolution, and continuous improvement — not one-time delivery.",
            },
            {
              icon: CheckCircle,
              title: "Transparent Delivery",
              desc: "Clear communication, realistic timelines, and no hidden surprises.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border bg-background p-6 hover:bg-muted transition"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E-E-A-T */}
      <section className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Experience You Can Rely On
        </h2>

        <p className="mt-4 leading-relaxed text-center">
          Dorii Software is guided by professionals with hands-on experience in
          ERP implementation, business process design, and enterprise software
          delivery. Our leadership ensures every project follows clean
          architecture, security best practices, and long-term maintainability.
          Our experience spans transport management systems, inventory control,
          warehouse workflows, invoicing, reporting, and role-based access
          systems used in real business environments.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-32 text-center rounded-2xl border p-12 bg-muted">
        <h2 className="text-3xl font-bold">
          Your Technology Partner for the Long Term
        </h2>
        <p className="mt-4  max-w-3xl mx-auto">
          Whether you need a custom ERP system, business automation, or expert
          consulting, Dorii Software is ready to help you build software that
          supports real growth.
        </p>
        <Link href="/solutions" className="text-primary underline">
          Explore our ERP and automation solutions
        </Link>
      </section>
    </main>
  );
}

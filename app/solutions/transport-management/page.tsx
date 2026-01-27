import { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const generateMetadata = (): Metadata => ({
  title: "Transport & Logistics Management Software | Dorii Software",
  description:
    "Simplify your transport operations with Dorii's all-in-one Transport Management Software (TMS) for trip planning, LR/challan generation, billing, accounting, vehicle tracking, and daily operations.",
  openGraph: {
    title: "Transport & Logistics Management Software | Dorii Software",
    description:
      "An all-in-one Transport Management System (TMS) for trip planning, LR/challan generation, billing, accounting, vehicle tracking, and streamlined logistics operations.",
    url: "https://www.dorii.in/solutions/transport-management",
    siteName: "Dorii Software",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Transport & Logistics Management Software – Dorii Software",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transport & Logistics Management Software | Dorii Software",
    description:
      "An end-to-end TMS for trip planning, LR/challan generation, billing, accounting, vehicle tracking, and daily transport operations.",
    images: ["/og-image.png"],
  },
  keywords: [
    "Transport Management Software",
    "Logistics Management System",
    "TMS Software",
    "Fleet Management Software",
    "Transport ERP",
    "Logistics ERP",
    "Trip Management System",
    "LR Challan Software",
    "Transport Billing Software",
  ],
});

export default function TransportManagementPage() {
  return (
    <main className="mt-6 max-w-7xl mx-auto px-6 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Side - Text & CTA */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-md">
            Transport & Logistics Management Software
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-200 max-w-md">
            Simplify your transport operations with Dorii TMS — plan trips,
            generate LR/challans, manage billing & accounting, track vehicles in
            real time, and streamline daily operations from one platform.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/demo"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Request a Demo
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 transition"
            >
              Talk to an Expert
            </a>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="lg:w-1/2">
          <img
            src="/images/hero-transport.png" // replace with your professional hero image
            alt="Transport & Logistics Management Software"
            className="w-full h-auto "
          />
        </div>
      </section>

      {/* Challenges Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
          Common Transport Challenges We Solve
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
          Daily transport operations can be challenging — delays, errors, and
          hidden costs can reduce profitability. Our TMS addresses these pain
          points with smart, easy-to-use features.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Manual Trip Planning & Poor Route Visibility",
              desc: "Eliminate errors and delays caused by manual planning. Get full visibility of trips and routes to optimize efficiency.",
            },
            {
              title: "LR / Challan Errors & Duplicates",
              desc: "Digital LR and challan generation prevents mistakes, ensures compliance, and speeds up document processing.",
            },
            {
              title: "Billing Mistakes & Revenue Loss",
              desc: "Automated billing ensures accurate freight calculation and timely invoices, reducing revenue leakage.",
            },
            {
              title: "No Real-Time Vehicle & Shipment Tracking",
              desc: "Keep customers informed and reduce queries with live tracking of vehicles and shipments.",
            },
            {
              title: "Disconnected Operations & Accounting",
              desc: "Integrates operations and accounting to reduce reconciliation errors and save manual effort.",
            },
            {
              title: "Managing Driver & Vehicle Availability",
              desc: "Easily track availability, assign vehicles, and manage drivers to avoid dispatch delays.",
            },
            {
              title: "Delayed POD Collection",
              desc: "Digital Proof of Delivery tracking speeds up billing and ensures timely payments.",
            },
            {
              title: "Poor Control Over Daily Operations",
              desc: "Centralized dashboard gives dispatchers complete control over daily trips, arrivals, and operations.",
            },
            {
              title: "Hidden Trip Costs",
              desc: "Track fuel, tolls, driver advances, and maintenance per trip for better cost control and profitability.",
            },
            {
              title: "Scaling Challenges",
              desc: "Our TMS scales with your business — whether managing 5 vehicles or 500 — without increasing complexity.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="mt-3 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Why Choose Our Transport & Logistics Software?
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-700">
            Dorii TMS is built for real-world transport businesses, helping you
            save time, reduce errors, and increase profits.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Built for Transporters, Not Generic Businesses",
                desc: "Designed around actual transport workflows — trips, LR, billing, driver advances, and settlements.",
              },
              {
                title: "Complete Transport Coverage",
                desc: "Manage booking, delivery, POD, billing, and accounting from a single system.",
              },
              {
                title: "Integrated Accounting",
                desc: "Trips, billing, advances, and expenses automatically reflect in accounts, reducing manual reconciliation.",
              },
              {
                title: "Flexible Billing Options",
                desc: "Supports per-trip, per-km, per-weight, contract-based, and customer-specific freight rates.",
              },
              {
                title: "Real-Time Visibility",
                desc: "Instant insights into vehicle status, trip progress, dispatch delays, and delivery confirmations.",
              },
              {
                title: "Reduces Manual Work & Errors",
                desc: "Automation across LR creation, billing, accounting entries, and reports saves time and reduces mistakes.",
              },
              {
                title: "Scales With Your Business",
                desc: "Easily handles small fleets or large operations without breaking workflows.",
              },
              {
                title: "Role-Based Access & Control",
                desc: "Separate access for dispatchers, accountants, managers, and hub operators improves security.",
              },
              {
                title: "Faster Billing & Cash Flow",
                desc: "Quick POD confirmation and automated billing reduce payment delays.",
              },
              {
                title: "Customizable for Your Transport Model",
                desc: "Adapt for hub-based, long-haul, last-mile, or multi-leg logistics operations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          Powerful Features for Modern Transport Businesses
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-gray-700">
          Dorii TMS offers a full set of features to streamline operations,
          improve efficiency, and boost profitability.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Trip Planning & Lifecycle Management",
              desc: "Create, schedule, and manage trips from booking to delivery with full visibility.",
            },
            {
              title: "LR / Challan & Documentation",
              desc: "Generate LR, challans, and transport documents digitally with auto numbering.",
            },
            {
              title: "Flexible Freight Billing",
              desc: "Automate billing using per-trip, per-km, per-weight, or contract-based rules.",
            },
            {
              title: "Integrated Accounting",
              desc: "Manage customer, vendor, and transporter accounts with trip-linked ledgers and settlements.",
            },
            {
              title: "Driver Advances & Expenses",
              desc: "Track driver advances, fuel, tolls, and other trip costs accurately.",
            },
            {
              title: "Fleet Management",
              desc: "Monitor vehicle availability, maintenance, costs, and utilization.",
            },
            {
              title: "Real-Time Tracking",
              desc: "Track vehicles and shipments live to improve delivery visibility.",
            },
            {
              title: "POD & Delivery Confirmation",
              desc: "Digitally capture Proof of Delivery for faster billing and payments.",
            },
            {
              title: "Daily Dispatch Dashboard",
              desc: "Manage dispatch, arrivals, unloading, and operational tasks from one view.",
            },
            {
              title: "Multi-Hub Operations",
              desc: "Manage multiple hubs, branches, and warehouses efficiently.",
            },
            {
              title: "Role-Based Controls",
              desc: "Assign roles to dispatchers, accountants, managers, and hub operators.",
            },
            {
              title: "Reports & Insights",
              desc: "Generate detailed reports for trips, vehicles, and customers to make data-driven decisions.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="border rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-3 text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Can Use This TMS */}
      <section className="px-6 py-16 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          Who Can Use This Transport Management System?
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-gray-700">
          Dorii TMS is designed for any business involved in transport and
          logistics. Small fleet or multi-hub operators — our system adapts to
          your workflow to save time and reduce costs.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: "Transport & Fleet Owners",
              desc: "Manage vehicles, drivers, and trip assignments efficiently while reducing operational costs.",
            },
            {
              title: "Logistics & Supply Chain Companies",
              desc: "Centralized control over multi-location transport operations and dispatch optimization.",
            },
            {
              title: "Manufacturers with Own Transport",
              desc: "Handle inbound/outbound logistics, integrate accounting, and ensure timely delivery.",
            },
            {
              title: "3PL & Distribution Companies",
              desc: "Optimize third-party deliveries, track shipments, manage PODs, and automate billing.",
            },
            {
              title: "Courier & Parcel Services",
              desc: "Track parcels, manage delivery routes, and speed up POD collection for customer satisfaction.",
            },
            {
              title: "Warehouse & Hub Operators",
              desc: "Monitor vehicle movements, manage loading/unloading, and maintain inventory visibility.",
            },
            {
              title: "Fleet Managers & Dispatch Teams",
              desc: "Coordinate trips, assign drivers, and track performance from one dashboard.",
            },
            {
              title: "Transport Accountants",
              desc: "Link trip data with accounting, generate invoices, manage advances, and reconcile payments easily.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Digitize Your Transport Operations?"
        description="Transform your transport and logistics business with Dorii TMS — a scalable, all-in-one system that reduces manual work, improves billing accuracy, and streamlines daily operations."
        secondaryDescription="Join hundreds of transporters already benefiting from faster dispatch, real-time tracking, and smarter decision-making."
        primaryText="Book a Free Demo"
        secondaryText="Talk to an Expert"
        primaryUrl="/demo"
        secondaryUrl="/contact"
      />
    </main>
  );
}

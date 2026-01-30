import { CTA } from "@/components/CTA";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Housing Society Management Software | Dorii Software",
  description:
    "Manage your housing society efficiently with Dorii's all-in-one Housing Society Management Software for maintenance billing, online payments, accounting, complaints, notices, visitor management, and resident communication.",
  openGraph: {
    title: "Housing Society Management Software | Dorii Software",
    description:
      "An all-in-one Housing Society Management System to manage maintenance billing, online payments, accounting, complaints, notices, visitor tracking, and transparent society operations.",
    url: "https://www.dorii.in/solutions/housing-society-management",
    siteName: "Dorii Software",
    images: [
      {
        url: "/images/hero-housing-society.png",
        width: 1200,
        height: 630,
        alt: "Housing Society Management Software – Dorii Software",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Housing Society Management Software | Dorii Software",
    description:
      "Smart Housing Society Management Software for maintenance billing, accounting, online payments, complaints, notices, and resident communication.",
    images: ["/images/hero-housing-society.png"],
  },
  keywords: [
    "Housing Society Management Software",
    "Society Management System",
    "Apartment Management Software",
    "Residential Society ERP",
    "HOA Management Software",
    "Maintenance Billing Software",
    "Society Accounting Software",
    "Apartment Management System",
    "Housing Society ERP",
    "Resident Management Software",
  ],
});

export default function HousingSocietyPage() {
  return (
    <main className="mt-6 max-w-7xl mx-auto px-6 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Side - Text & CTA */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-md">
            Housing Society Management Software
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-200 max-w-md">
            A simple and smart solution to manage your housing society
            operations, maintenance, accounts, and communication—everything in
            one place.
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
            src="/images/hero-housing-society.png" // replace with your professional hero image
            alt="Transport & Logistics Management Software"
            className="w-full h-auto "
          />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Common Problems Faced by Housing Societies
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto text-center ">
            Many housing societies struggle with daily management due to manual
            processes and lack of a centralized system. These problems grow as
            the society expands.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Maintenance Collection Issues
              </h3>
              <p className=" text-gray-700">
                Delayed payments, missed reminders, and unclear records make it
                difficult to collect maintenance on time.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Lack of Financial Transparency
              </h3>
              <p className=" text-gray-700">
                Members are often unaware of how funds are being used, leading
                to mistrust and disputes.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Poor Communication</h3>
              <p className=" text-gray-700">
                Important notices and meeting updates get lost in multiple
                WhatsApp groups.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Manual Record Keeping</h3>
              <p className=" text-gray-700">
                Registers and Excel files are hard to maintain and error-prone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Why Housing Societies Need Software
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-6xl mx-auto">
            Managing a housing society manually becomes difficult as the number
            of flats and residents increases. Excel sheets, registers, and
            WhatsApp groups are hard to track, often leading to missed payments,
            unresolved complaints, and lack of transparency. A digital system
            helps societies stay organized, efficient, and stress-free.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">
                No Manual Registers or Paperwork
              </h3>
              <p className="text-gray-700 ">
                All society records such as residents, flats, payments, and
                notices are stored digitally, reducing paperwork and human
                errors.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">
                Clear Maintenance & Billing Records
              </h3>
              <p className="text-gray-700 ">
                Maintenance bills, payment history, and pending dues are
                available in one place, making financial tracking simple and
                transparent.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">
                Faster Complaint Resolution
              </h3>
              <p className="text-gray-700 ">
                Residents can raise complaints online, and committee members can
                track progress until the issue is resolved, ensuring
                accountability.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">
                Better Communication with Residents
              </h3>
              <p className="text-gray-700 ">
                Important notices, meetings, and emergency updates reach all
                residents instantly, without relying on multiple WhatsApp
                groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">
          Key Features of Our Housing Society Management Software
        </h2>

        <p className="mt-4 text-center text-lg text-gray-700 max-w-6xl mx-auto">
          Our housing society management system covers everything required to
          run an apartment or residential society smoothly — from daily
          operations to financial transparency and resident communication.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <Feature
            title="Society & Flat Management"
            desc="Maintain complete records of buildings, flats, owners, tenants, parking details, and emergency contacts in one centralized system."
          />

          <Feature
            title="Maintenance & Billing"
            desc="Automatically generate maintenance bills, track payments, manage pending dues, and send reminders without manual effort."
          />

          <Feature
            title="Accounting & Financial Reports"
            desc="Record income and expenses, manage vendor payments, and generate clear, audit-ready financial reports for committee review."
          />

          <Feature
            title="Complaint & Service Management"
            desc="Residents can raise complaints online, track resolution status, and get timely updates—improving satisfaction and accountability."
          />

          <Feature
            title="Visitor & Security Management"
            desc="Maintain visitor entry logs, delivery tracking, and gate security records to ensure better safety and controlled access."
          />

          <Feature
            title="Notices & Society Communication"
            desc="Share important notices, meeting updates, maintenance schedules, and emergency alerts instantly with all residents."
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-3xl font-semibold text-center">
            Benefits for Everyone
          </h2>

          <p className="mt-4 text-lg text-gray-700 text-center max-w-6xl mx-auto">
            A housing society runs smoothly only when both the management
            committee and residents are satisfied. Our software is designed to
            support the needs of all stakeholders and create a transparent,
            well-organized living environment.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Committee Members */}
            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold">
                Benefits for Committee Members
              </h3>

              <p className="mt-3 text-gray-700 ">
                Committee members often handle multiple responsibilities and
                manual tasks. The system reduces their workload and provides
                better control over society operations.
              </p>

              <ul className="mt-4 space-y-3 text-gray-700 ">
                <li>
                  ✔ Less manual work by automating billing, records, and
                  reporting
                </li>
                <li>
                  ✔ Full control and transparency over finances and daily
                  activities
                </li>
                <li>✔ Easy decision-making with real-time data and reports</li>
                <li>
                  ✔ Clean and organized financial records for audits and
                  meetings
                </li>
                <li>
                  ✔ Better coordination with staff, vendors, and residents
                </li>
              </ul>
            </div>

            {/* Residents */}
            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold">Benefits for Residents</h3>

              <p className="mt-3 text-gray-700 ">
                Residents benefit from better communication, quick services, and
                easy access to important society information without dependency
                on the committee.
              </p>

              <ul className="mt-4 space-y-3 text-gray-700 ">
                <li>
                  ✔ Easy and timely maintenance payments with payment history
                </li>
                <li>
                  ✔ Faster complaint resolution with clear status tracking
                </li>
                <li>
                  ✔ Clear and timely communication about notices and meetings
                </li>
                <li>
                  ✔ Access to bills, receipts, and society updates anytime
                </li>
                <li>
                  ✔ Better living experience with improved transparency and
                  trust
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faq */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Here are some common questions housing societies ask before moving
            to a digital management system.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg">
                How does the system help with maintenance billing?
              </h3>
              <p className="mt-2 text-gray-700  leading-relaxed">
                The system automatically generates maintenance bills based on
                society rules, tracks paid and pending amounts, and sends
                reminders to residents. Committee members can easily view
                collection status and download reports without manual
                calculations.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg">
                Can residents raise complaints online?
              </h3>
              <p className="mt-2 text-gray-700  leading-relaxed">
                Yes, residents can raise complaints directly from the system.
                Each complaint is recorded with status tracking, helping the
                committee ensure timely resolution and better accountability.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg">
                Is the system secure and compliant?
              </h3>
              <p className="mt-2 text-gray-700  leading-relaxed">
                All society data is stored securely with role-based access
                control. Sensitive information is protected, and only authorized
                users can view or manage specific data.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg">
                Is the software easy to use for non-technical users?
              </h3>
              <p className="mt-2 text-gray-700  leading-relaxed">
                Yes, the system is designed with a simple and clean interface.
                Even residents and committee members with basic mobile or
                computer knowledge can use it comfortably without training.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg">
                Can this software work for small housing societies?
              </h3>
              <p className="mt-2 text-gray-700  leading-relaxed">
                Absolutely. The software is flexible and works well for both
                small and large housing societies. Features can be enabled as
                per the society’s size and requirements.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-lg">
                Will residents get notifications and updates?
              </h3>
              <p className="mt-2 text-gray-700  leading-relaxed">
                Yes, residents receive important notices, meeting updates,
                payment reminders, and emergency alerts through the system,
                ensuring clear and timely communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mt-16 bg-gray-50 py-12 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose Our Housing Society Management Software?
          </h2>

          <p className="text-center text-lg text-gray-700 max-w-6xl mx-auto mb-10">
            We built this software by understanding the real challenges faced by
            housing societies—manual records, payment confusion, communication
            gaps, and lack of transparency. Our solution is simple, reliable,
            and designed for everyday use by committee members and residents.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Built for Indian Housing Societies
              </h3>
              <p className="text-gray-700">
                Designed specifically for Indian apartments and housing
                societies, covering maintenance billing, accounting, notices,
                and resident management.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Easy for Non-Technical Users
              </h3>
              <p className="text-gray-700">
                No technical knowledge required. Committee members and residents
                can start using the system with minimal training.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Complete Transparency
              </h3>
              <p className="text-gray-700">
                Every transaction, notice, and update is visible to authorized
                users, helping build trust between the committee and residents.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Save Time & Reduce Manual Work
              </h3>
              <p className="text-gray-700">
                Automate maintenance collection, expense tracking, reports, and
                communication—no more Excel sheets or WhatsApp chaos.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Secure & Reliable</h3>
              <p className="text-gray-700">
                Your society data is safe with proper access control, role-based
                permissions, and secure data handling.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Scales as Your Society Grows
              </h3>
              <p className="text-gray-700">
                Whether you manage a small society or a large apartment complex,
                the system adapts to your needs without complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Digitize Your Housing Society?"
        description="Stop managing your society with spreadsheets and registers. Move to a smart, simple, and transparent system."
      />
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border rounded-xl hover:shadow-sm transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-700 ">{desc}</p>
    </div>
  );
}

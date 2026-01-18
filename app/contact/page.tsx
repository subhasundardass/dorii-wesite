// app/contact/page.tsx
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Dorii Software | ERP & Business Automation Experts",
  description:
    "Get in touch with Dorii Software for custom ERP, business automation, inventory, warehouse, and transport solutions. Contact us today!",
  keywords: [
    "Dorii Software contact",
    "ERP software inquiry",
    "business automation support",
    "inventory management help",
    "warehouse management software",
  ],
  alternates: { canonical: "https://dorii.in/contact" },
};

export default function ContactPage() {
  return (
    <main className="mt-8 max-w-(--breakpoint-xl) mx-auto w-full py-16 xs:py-24 px-6">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Contact Dorii Software
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or need guidance on ERP & business automation
          software? Fill out the form, or reach us using the contact info. We’re
          here to help you streamline your business operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div>
            <form className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your Name" required />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="+91 9876543210" />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-1"
                >
                  Company / Organization
                </label>
                <Input id="company" type="text" placeholder="Company Name" />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="mt-4 w-full md:w-auto">
                Submit
              </Button>
            </form>
          </div>

          {/* Right: Contact Info + Map */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Our Office</h2>
              <p className="text-muted-foreground">
                Dorii Software Pvt. Ltd. <br />
                Siliguri, West Bengal, India <br />
                Phone: <Link href="tel:+919732939123">+91-9732939123</Link>{" "}
                <br />
                Email:{" "}
                <Link href="mailto:doriisoftware@gmail.com">
                  doriisoftware@gmail.com
                </Link>
              </p>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.373732460693!2d88.42038337517756!3d26.720346883190547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e45f567c8f3a0d%3A0x1122334455667788!2sSiliguri%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-64 rounded-xl border"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dorii Software Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

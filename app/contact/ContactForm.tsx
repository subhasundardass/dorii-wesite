"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Script from "next/script";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    honey: "", // hidden honeypot field
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic frontend validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-() ]{7,20}$/; // basic international format

    if (!emailRegex.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (form.phone && !phoneRegex.test(form.phone)) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setStatus("Sending...");

    try {
      // Invisible reCAPTCHA token
      const token = await (window as any).grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "contact" },
      );

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });

      const data = await res.json();
      setStatus(data.message);

      if (res.ok) {
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          honey: "",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="mt-6 max-w-(--breakpoint-xl) mx-auto w-full py-16 xs:py-24 px-6">
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-center mb-4">
            Contact Dorii Software
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or need guidance on ERP & business automation
            software? Fill out the form, or reach us using the contact info.
            We’re here to help you streamline your business operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Honeypot field (invisible to humans) */}
                <input
                  type="text"
                  id="honey"
                  value={form.honey}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
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
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-1"
                  >
                    Company / Organization
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
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
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-4 w-full md:w-auto"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>

                {status && (
                  <p className="mt-3 text-sm text-center text-muted-foreground">
                    {status}
                  </p>
                )}
              </form>
            </div>

            {/* Right: Contact Info + Map */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Reach Us</h2>
                <p className="text-muted-foreground">
                  Dorii Software <br />
                  Siliguri, West Bengal, India <br />
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
    </>
  );
}

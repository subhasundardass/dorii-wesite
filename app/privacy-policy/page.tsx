// app/privacy/page.tsx
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Privacy Policy | Dorii Software",
  description:
    "Learn how Dorii Software collects, uses, and protects your personal information. Our Privacy Policy ensures safe and transparent data practices.",
  keywords: [
    "Dorii Software privacy",
    "ERP software privacy policy",
    "business automation software data policy",
    "personal information protection",
  ],
  alternates: { canonical: "https://dorii.in/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mt-8 max-w-(--breakpoint-xl) mx-auto w-full py-16 xs:py-24 px-6">
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* JSON-LD Schema */}
        <Script
          id="privacy-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy Policy",
              url: "https://dorii.in/privacy",
              mainEntity: {
                "@type": "PrivacyPolicy",
                provider: {
                  "@type": "Organization",
                  name: "Dorii Software",
                  url: "https://dorii.in",
                },
                privacyPolicy: "https://dorii.in/privacy",
              },
            }),
          }}
        />

        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-muted-foreground text-center mb-12">
          At Dorii Software, your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your personal
          information.
        </p>

        <div className="space-y-8">
          <article>
            <h2 className="text-1xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personal information such as name, email address,
              phone number, and company details when you submit forms or
              interact with our website. We also collect non-personal
              information like browser type, IP address, and usage data to
              improve our services.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information is used to respond to inquiries, provide
              services, improve our website, send relevant updates, and ensure
              security and compliance with applicable laws.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">
              3. Sharing Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share data with
              trusted service providers for processing, or if required by law.
              All sharing is done in accordance with privacy regulations.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">
              4. Cookies & Tracking
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and analytics tools like Google Analytics to
              understand visitor behavior, improve user experience, and monitor
              website performance. You can control cookies via your browser
              settings.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">5. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable technical and organizational measures to
              protect personal information against unauthorized access, loss, or
              misuse.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">
              6. Third-Party Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may include links to external websites. We are not
              responsible for their content or privacy practices. We encourage
              users to read the privacy policies of any third-party sites.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">
              7. Changes to Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy from time to time. Continued use of the
              website constitutes acceptance of the updated Privacy Policy.
              Important changes will be notified via our website.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions regarding your privacy or this policy, please{" "}
              <a href="/contact" className="text-primary hover:underline">
                contact us
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

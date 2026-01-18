// app/terms/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Dorii Software",
  description:
    "Read the Terms & Conditions for using Dorii Software website and services. Learn about user responsibilities, software usage, and our policies.",
  keywords: [
    "Dorii Software terms",
    "ERP software terms and conditions",
    "business automation software policy",
    "website usage policy",
  ],
  alternates: { canonical: "https://dorii.in/terms" },
};

export default function TermsPage() {
  return (
    <main className="mt-8 max-w-(--breakpoint-xl) mx-auto px-6 py-12 xs:py-20">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-muted-foreground text-center mb-12">
          Please read these Terms & Conditions carefully before using our
          website and services. By accessing Dorii Software, you agree to comply
          with and be bound by these terms.
        </p>

        <div className="space-y-8">
          <article>
            <h2 className="text-1xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Dorii Software website and services, you
              accept and agree to be bound by these Terms & Conditions, all
              applicable laws, and regulations. If you do not agree, you must
              not use our services.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">2. Use of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may use our services only for lawful purposes. You agree not
              to misuse our platform, attempt unauthorized access, or interfere
              with our services’ operation.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">
              3. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, software, trademarks, logos, and other intellectual
              property displayed on this website are owned by Dorii Software or
              its licensors. You may not use, copy, or distribute any materials
              without explicit permission.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">
              4. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dorii Software shall not be liable for any indirect, incidental,
              or consequential damages arising out of the use of our website or
              software, including errors or omissions in content.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">5. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Please refer to our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>{" "}
              for details on how we collect, use, and protect your personal
              information.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">6. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms & Conditions from time to time.
              Continued use of our services after changes constitutes acceptance
              of the updated terms.
            </p>
          </article>

          <article>
            <h2 className="text-1xl font-semibold mb-2">7. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions regarding these terms, please{" "}
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

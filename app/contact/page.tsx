import Script from "next/script";
import ContactForm from "./ContactForm";

export const metadata = {
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
    <>
      {/* Load reCAPTCHA library */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <ContactForm />;
    </>
  );
}

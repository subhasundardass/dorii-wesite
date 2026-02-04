import CustomRequirement from "@/components/custom-requirement";
import FAQ from "@/components/faq";
import Solutions from "@/components/solutions-offer";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import About from "@/components/about-us";
import { Metadata } from "next";
import ServicesWeOffer from "@/components/services";
import { CTA } from "@/components/CTA";
import Blogs from "@/components/blogs";
// import Pricing from "@/components/pricing";
// import Testimonial from "@/components/testimonial";

export const metadata: Metadata = {
  title: {
    default: "Dorii Software | Business Automation & ERP Solutions",
    template: "%s | Dorii Software",
  },

  description:
    "Dorii Software is a business automation and custom ERP software development company delivering scalable solutions for sales, inventory, supply chain, HR, accounts, and manufacturing across industries.",

  alternates: {
    canonical: "https://dorii.in",
  },

  keywords: [
    "business automation software",
    "custom ERP development",
    "ERP software company",
    "inventory management software",
    "sales automation software",
    "HR and payroll software",
    "manufacturing ERP solutions",
    "enterprise software development",
  ],

  metadataBase: new URL("https://dorii.in"),

  openGraph: {
    type: "website",
    siteName: "Dorii Software",
    url: "https://dorii.in",
    title: "Dorii Software | Business Automation & ERP Solutions",
    description:
      "Custom business automation and ERP software solutions designed to scale operations across sales, inventory, HR, accounts, supply chain, and manufacturing.",
    images: [
      {
        url: "/og/home-dorii.png",
        width: 1200,
        height: 630,
        alt: "Dorii Software – Business Automation & ERP Solutions",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dorii Software | Business Automation & ERP Solutions",
    description:
      "Custom ERP and business automation software for growing businesses across industries.",
    images: ["/og/home-dorii.png"],
  },

  authors: [
    {
      name: "Subha Sundar Das",
      url: "https://www.dorii.in",
    },
  ],

  creator: "Dorii Software",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // manifest: "/site.webmanifest",
};
export default function Home() {
  return (
    <main className="mt-6">
      <Hero />
      <Solutions />
      <About />
      <ServicesWeOffer />
      <Blogs />
      <FAQ />
      <CTA
        title="Let’s Build Software That Actually Works for Your Business"
        description="Whether you need a custom ERP, system integration, or process automation, our team works closely with you to understand your operations and deliver solutions that make day-to-day work easier—not more complicated."
      />
    </main>
  );
}

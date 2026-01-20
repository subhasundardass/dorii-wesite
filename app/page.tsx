import CustomRequirement from "@/components/custom-requirement";
import FAQ from "@/components/faq";
import Solutions from "@/components/solutions-offer";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import About from "@/components/about-us";
// import Pricing from "@/components/pricing";
// import Testimonial from "@/components/testimonial";

export const generateMetadata = () => ({
  title: "Business Automation & Custom ERP Software Solutions",
});
export default function Home() {
  return (
    <main className="mt-6">
      <Hero />
      <Solutions />
      <About />
      <FAQ />
    </main>
  );
}

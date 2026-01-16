import CustomRequirement from "@/components/custom-requirement";
import FAQ from "@/components/faq";
import Solutions from "@/components/solutions-offer";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";

export const generateMetadata = () => ({
  title: "Business Automation & Custom ERP Software Solutions",
});
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <CustomRequirement />
      <FAQ />
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      <Footer />
    </>
  );
}

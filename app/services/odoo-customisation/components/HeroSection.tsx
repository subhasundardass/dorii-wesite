import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="container py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Odoo Customisation in Siliguri —
            <span className="text-primary">
              {" "}
              Built for Local Businesses, Trusted Globally
            </span>
          </h1>

          <p className="text-muted-foreground text-lg">
            Siliguri's dedicated Odoo development team — custom module
            development, workflow automation, and full implementation for
            businesses in North Bengal and worldwide. We understand local
            business needs and speak your language — in every sense.
          </p>

          <div className="flex gap-4">
            <Button size="lg">Request Free Consultation</Button>
            <Button variant="outline" size="lg">
              View Our Process
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Trusted by businesses in Siliguri, North Bengal and across India.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative h-100 w-full">
          <Image
            src="/images/odoo-erp.jpg"
            alt="Odoo ERP Customisation Services in Siliguri"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

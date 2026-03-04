import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 ">
      <div className="container text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Ready to Transform Your Business with Odoo?
        </h2>
        <p className="max-w-2xl mx-auto">
          Partner with Dorii for reliable Odoo customisation services in
          Siliguri and across India.
        </p>
        <Button size="lg" variant="secondary">
          Schedule a Consultation
        </Button>
      </div>
    </section>
  );
}

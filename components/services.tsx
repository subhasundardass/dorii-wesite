import { Card, CardHeader } from "@/components/ui/card";
import {
  Code,
  Boxes,
  Smartphone,
  Settings,
  RefreshCcw,
  Plug,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailor-made software built around your business processes, designed to scale as you grow.",
    icon: Code,
  },
  {
    title: "Odoo Customisation & Module Development",
    description:
      "Custom Odoo modules, workflow enhancements, and integrations aligned with your operations.",
    icon: Boxes,
  },
  {
    title: "Custom ERP Solutions",
    description:
      "End-to-end ERP systems that bring sales, inventory, accounts, HR, and operations together.",
    icon: Settings,
  },
  {
    title: "Mobile App Development",
    description:
      "Reliable Android and iOS apps for internal teams and customer-facing business use cases.",
    icon: Smartphone,
  },
  {
    title: "Business Process Automation",
    description:
      "Automate repetitive tasks and approvals to reduce manual work and improve efficiency.",
    icon: RefreshCcw,
  },
  {
    title: "System Integration & APIs",
    description:
      "Seamless integration between ERP, CRM, payment gateways, and third-party tools.",
    icon: Plug,
  },
  {
    title: "ERP Migration & Modernisation",
    description:
      "Upgrade legacy systems to modern, scalable ERP platforms with minimal disruption.",
    icon: Wrench,
  },
];

const ServicesWeOffer = () => {
  return (
    <section
      id="services"
      className="
        max-w-(--breakpoint-xl) mx-auto w-full
        py-12 md:py-20 px-6
        text-center md:text-left
      "
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        Our Services
      </h2>

      <p className="mt-4 max-w-[100ch] xs:text-lg  sm:text-center sm:mx-auto ">
        Our services focus on building practical software and ERP systems that
        support everyday business operations, reduce complexity, and provide a
        strong foundation for future growth.
      </p>

      <div
        className="
        mt-10 grid gap-6
        sm:grid-cols-2 lg:grid-cols-3
      "
      >
        {services.map((service) => (
          <Card
            key={service.title}
            className="
              bg-muted/40 border-none shadow-none
              rounded-xl transition-colors duration-200
              hover:bg-muted
            "
          >
            <CardHeader className="space-y-3">
              <service.icon className="h-6 w-6 text-primary" />

              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="text-md text-muted-foreground">
                {service.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesWeOffer;

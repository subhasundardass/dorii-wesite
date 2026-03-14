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
import Link from "next/link";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailor-made software built around your business processes, designed to scale as you grow.",
    icon: Code,
    href: "/services/custom-software-development",
  },
  {
    title: "Odoo Customisation & Module Development",
    description:
      "Custom Odoo modules, workflow enhancements, and integrations aligned with your operations.",
    icon: Boxes,
    href: "/service/odoo-customisation", // <-- link added
  },

  {
    title: "Mobile App Development",
    description:
      "Reliable Android and iOS apps for internal teams and customer-facing business use cases.",
    icon: Smartphone,
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

      <p className="mt-4 max-w-[100ch] xs:text-lg  sm:text-center sm:mx-auto dark:text-muted-foreground">
        Our services focus on building practical software and ERP systems that
        support everyday business operations, reduce complexity, and provide a
        strong foundation for future growth.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const CardContent = (
            <Card
              key={service.title}
              className="bg-muted/40 border-none shadow-none rounded-xl transition-colors duration-200 hover:bg-muted"
            >
              <CardHeader className="space-y-3">
                <service.icon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-md text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>
            </Card>
          );

          // Conditionally wrap in Link if href exists
          return service.href ? (
            <Link key={service.title} href={service.href}>
              {CardContent}
            </Link>
          ) : (
            CardContent
          );
        })}
      </div>
    </section>
  );
};

export default ServicesWeOffer;

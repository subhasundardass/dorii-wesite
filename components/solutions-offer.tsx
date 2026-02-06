import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookCheck, ChartPie, FolderSync, Goal } from "lucide-react";

const solutions = [
  {
    icon: Goal,
    title: "Housing Society Management Software",
    description:
      "A comprehensive housing society ERP solution to manage maintenance billing, online payments, accounting, notices, complaints, member records, and daily society operations from a single platform.",
    href: "/solutions/housing-society",
    alt: "Housing Society Management Software – Dorii Software",
  },
  {
    icon: BookCheck,
    title: "Transport & Logistics Management Software",
    description:
      "An end-to-end transport management system (TMS) for trip planning, LR and challan generation, billing, accounting, vehicle tracking, and streamlined transport operations.",
    href: "/solutions/transport-management",
    alt: "Transport & Logistics Management Software – Dorii Software",
  },
  {
    icon: FolderSync,
    title: "Warehouse Management Software",
    description:
      "Optimize warehouse operations with real-time tracking of goods, automated storage management, order fulfillment, stock movement, and efficient space utilization using our warehouse ERP solutions.",
    href: "/solutions/warehouse-management",
    alt: "Warehouse Management Software – Dorii Software",
  },
  {
    icon: ChartPie,
    title: "Stock & Inventory Management Software",
    description:
      "Gain full visibility of your inventory with automated stock management, low-stock alerts, batch tracking, product categorization, and seamless integration with sales and purchase operations.",
    href: "/solutions/stock-inventory-management",
    alt: "Stock & Inventory Management Software – Dorii Software",
  },
];

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6 text-gray-700"
      aria-labelledby="solutions-heading"
    >
      <h2
        id="solutions-heading"
        className="text-3xl xs:text-3xl md:text-4xl md:leading-14 font-bold tracking-tight sm:max-w-xl xs:text-center sm:mx-auto"
      >
        Solutions We Offer
      </h2>

      <p className="mt-6 max-w-6xl xs:text-lg  xs:text-center sm:mx-auto">
        Our ERP and business automation solutions are built for how businesses
        actually work. Whether it’s CRM, inventory, accounting, manufacturing,
        or logistics, we help teams reduce manual work, improve control, and run
        operations smoothly.
      </p>

      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 gap-x-10 gap-y-12">
        {solutions.map((solution) => (
          <Card
            key={solution.title}
            className="flex flex-col overflow-hidden shadow-none
  w-full max-w-md md:max-w-none mx-auto cursor-pointer group p-4 border rounded-xl hover:shadow-lg hover:-translate-y-1 transition"
          >
            <CardHeader>
              <solution.icon aria-hidden="true" />

              <h3 className="mt-3! text-2xl font-bold tracking-tight">
                <a
                  href={solution.href}
                  title={solution.alt}
                  className="hover:underline"
                >
                  {solution.title}
                </a>
              </h3>

              <p className="mt-1 dark:text-muted-foreground text-sm xs:text-[17px]">
                {solution.description}
              </p>
            </CardHeader>

            <CardContent className="mt-auto px-0 pb-0">
              <div
                className="bg-muted h-52 ml-6 rounded-tl-xl"
                aria-hidden="true"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Solutions;

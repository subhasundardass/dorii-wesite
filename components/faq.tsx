import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "What types of business solutions do you offer?",
    answer:
      "We provide customized business automation tools, Housing Society Management systems, Transport Agency solutions, and tailored software designed to fit your exact workflow.",
  },
  {
    question: "Do you develop fully custom solutions?",
    answer:
      "Yes. Every business is different, so we build completely custom workflows, dashboards, automation, and integrations based on your specific requirements.",
  },
  {
    question: "How long does it take to build a solution?",
    answer:
      "Timelines vary depending on the project. Smaller tools can be delivered within a few days, while full-scale systems typically take 2–8 weeks.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern and secure technologies like Next.js, Node.js, FastAPI, Odoo, PostgreSQL, Tailwind CSS, and scalable cloud infrastructure to ensure performance and reliability.",
  },
  {
    question: "Do you offer hosting and maintenance?",
    answer:
      "Yes. We provide end-to-end hosting, maintenance, support, and regular updates so your system stays fast, secure, and always online.",
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can reach us via email, WhatsApp, or by submitting the requirement form on our website. Our team responds quickly and will guide you through the next steps.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="w-full max-w-(--breakpoint-xl) mx-auto py-8 xs:py-16 px-6"
    >
      <h2 className="md:text-center text-2xl xs:text-3xl md:text-4xl leading-[1.15]! font-bold tracking-tighter">
        Frequently Asked Questions
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg ">
        Quick answers to common questions about our products and services.
      </p>

      <div className="min-h-137.5 md:min-h-80 xl:min-h-75">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 md:columns-2 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none mt-0! mb-4! break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg",
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0  transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

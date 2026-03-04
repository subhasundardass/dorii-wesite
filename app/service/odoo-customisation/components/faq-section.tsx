import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section
      id="frequently-asked-questions"
      className="scroll-mt-28 space-y-10"
    >
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-sm font-semibold text-[#734B66] uppercase tracking-wide">
          FAQ
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-700 leading-relaxed">
          The questions we hear most often from small business owners in India
          and abroad considering Odoo customisation.
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium">
            Are you actually based in Siliguri? Can we meet in person?
          </AccordionTrigger>
          <AccordionContent>
            Yes — we are genuinely based in Siliguri, West Bengal. We're happy
            to meet in person for requirements gathering, demos, training
            sessions, and go-live support. If you're a business in Siliguri,
            Darjeeling, Jalpaiguri, or anywhere in North Bengal, we can come to
            you. This is a key advantage over remote agencies — real
            conversations, faster decisions, on-site help when needed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium">
            Will customisations break when Odoo updates to a new version?
          </AccordionTrigger>
          <AccordionContent>
            Well-built customisations use Odoo's inheritance model — designed to
            survive version upgrades. Major version upgrades (e.g. Odoo 16 → 17)
            do require a migration review, but it's typically a predictable,
            budgetable exercise. We build with upgradability in mind from day
            one and offer annual upgrade review packages.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium">
            Do I need Odoo Enterprise or is Community edition enough?
          </AccordionTrigger>
          <AccordionContent>
            Odoo Community is free and open-source — excellent for most small
            businesses. Odoo Enterprise adds advanced modules (full accounting,
            manufacturing, field service) and official Odoo support. Custom
            modules work on both. We'll advise on the right edition during your
            free scoping call based on your exact requirements.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium">
            Can you handle GST, e-invoicing, and Indian compliance requirements?
          </AccordionTrigger>
          <AccordionContent>
            Yes — Indian compliance is one of our specialisations. We build
            modules for GST calculations, IRN-based e-invoicing, e-way bills,
            TDS/TCS handling, and GST returns. We stay current with Indian GST
            portal changes and GSTIN API integrations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-medium">
            How do you work with international clients across different time
            zones?
          </AccordionTrigger>
          <AccordionContent>
            IST (India Standard Time) overlaps well with Middle East, UK
            mornings, and Asia-Pacific. We schedule regular video calls at times
            that suit your timezone, communicate in clear English, and maintain
            full project transparency through shared documentation and milestone
            updates. Most international clients find the communication
            excellent.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-medium">
            Can you migrate our data from Tally, Excel, or another ERP into
            Odoo?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Data migration from Tally is one of the most common requests we
            handle from Indian businesses. We also migrate from Excel,
            QuickBooks, SAP, Microsoft Dynamics, and various legacy ERPs. Every
            migration includes validation checks to ensure your data arrives
            accurately and completely.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger className="text-lg font-medium">
            How long does a custom module take to build?
          </AccordionTrigger>
          <AccordionContent>
            Simple modules (new fields, basic automations) typically take 2–5
            working days. Complex modules with intricate business logic usually
            take 2–6 weeks. We always provide a detailed timeline as part of the
            project scope document before any work begins.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger className="text-lg font-medium">
            We're a very small team — is Odoo overkill for us?
          </AccordionTrigger>
          <AccordionContent>
            Not at all. Odoo scales from sole traders to large enterprises. The
            key is starting with only what you need — typically 2–3 core modules
            — and adding complexity as you grow. Many of our clients start small
            and expand their Odoo usage as they see the value. The investment
            pays off quickly once manual work is eliminated.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

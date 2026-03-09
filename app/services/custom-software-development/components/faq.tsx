const faqs = [
  {
    category: "Getting Started",
    anchor: "getting-started",
    items: [
      {
        q: "How do I know if I actually need custom software — or if a ready-made tool will do?",
        a: `If you're spending hours doing manual work that a tool should handle, or you're juggling 3–4 different apps that don't talk to each other, custom software will almost certainly save you more than it costs.\n\nA simple rule: if a ready-made SaaS tool fits 80% of how you work — use it. If you're always working around it, bending your process to match its limits, or your business has unique workflows that no generic product addresses — custom is the right answer. We'll tell you honestly during a free consultation which path makes sense for your situation.`,
      },
      {
        q: "How do I start a project with Dorii Software?",
        a: `Just reach out — via email, WhatsApp, or the contact form. Tell us roughly what you want to build. We'll schedule a free 30–45 minute call to understand your requirements, suggest the right approach, and give you a written estimate within 48 hours. No commitment required at that stage.`,
      },
      {
        q: "Do you work with businesses outside Siliguri?",
        a: `Yes. While we're based in Siliguri and work closely with businesses across North Bengal — including Jalpaiguri, Darjeeling, Alipurduar, Cooch Behar, Kalimpong, and Gangtok — we also build software for clients across India and internationally, the UK, UAE, and the USA. Remote delivery is standard practice for us.`,
      },
    ],
  },
  {
    category: "Cost & Timeline",
    anchor: "cost-timeline",
    items: [
      {
        q: "How much does custom software development cost in Siliguri?",
        a: `Cost depends entirely on what you need built. Simple internal tools start from around ₹50,000. Mid-size business software — combining CRM, billing, or inventory — typically falls in the ₹1.5L–₹5L range. Full ERP systems or complex multi-module platforms can go from ₹5L to ₹15L or more.\n\nWe give you a clear written estimate after a free consultation — no surprises later.`,
      },
      {
        q: "How long does it take to build custom software?",
        a: `Most projects take between 6 and 16 weeks from requirements sign-off to deployment. Simple tools can be ready in 4–6 weeks. Complex multi-module systems or Odoo implementations can take 3–5 months depending on scope. We give you a realistic timeline upfront — not an optimistic one that slips.`,
      },
      {
        q: "Are there hidden costs after the software is delivered?",
        a: `No hidden costs. The development quote covers everything agreed in scope. Post-delivery, if you want ongoing maintenance, bug fixes, or new features, we offer a monthly support retainer (typically ₹5,000–₹20,000/month). Hosting and domain costs are separate and we'll advise you on those upfront. You'll never get an unexpected invoice from us.`,
      },
    ],
  },
  {
    category: "Ownership & Security",
    anchor: "ownership-security",
    items: [
      {
        q: "Who owns the software and source code after the project?",
        a: `You do — 100%. Once the project is complete and payment is settled, the full source code, database structure, and all related files belong to you. We don't retain any licence over your software. You can host it wherever you want, hand it to another developer, or modify it yourself. This is non-negotiable in how we work.`,
      },
      {
        q: "Will you sign an NDA to protect my business idea?",
        a: `Yes. We sign a Non-Disclosure Agreement before any detailed discussion if you request one. Your business idea, processes, and data remain confidential. We don't share client information or use your project as a case study without explicit permission.`,
      },
      {
        q: "How secure is the software you build?",
        a: `We build with security as a default — not an afterthought. This includes encrypted data storage, secure authentication (including two-factor auth where needed), role-based access control, regular dependency updates, and protection against common vulnerabilities like SQL injection and XSS. For businesses handling sensitive customer data, we follow India's Digital Personal Data Protection Act (DPDPA) guidelines.`,
      },
    ],
  },
  {
    category: "Process & Support",
    anchor: "process-support",
    items: [
      {
        q: "What happens if I want changes during development?",
        a: `Minor changes and clarifications within the agreed scope are handled as part of the project. If you want to add a significant new feature or change direction mid-build, we discuss it openly — usually a small scope-change document is raised with a revised timeline and cost. We'd rather have that conversation early than deliver something you didn't actually want.`,
      },
      {
        q: "Do you provide training after the software is built?",
        a: `Yes. Every project includes a handover and training session so your team knows how to use the software confidently. For larger systems, we provide written documentation and video walkthroughs. We don't just deploy and disappear — we make sure you're comfortable running it.`,
      },
      {
        q: "What support do you provide after launch?",
        a: `Every project includes a 30-day free support window after delivery for bug fixes and minor adjustments. After that, we offer monthly maintenance retainers covering ongoing support, security updates, performance monitoring, and minor feature additions. If you need a new module or major feature, we treat it as a fresh project scope with a clear estimate.`,
      },
    ],
  },
  {
    category: "Odoo & Technology",
    anchor: "odoo-technology",
    items: [
      {
        q: "What is Odoo and do I need it for my business?",
        a: `Odoo is an open-source business management platform that covers ERP, CRM, accounting, inventory, HR, sales, and more — all in one connected system. It's one of the most powerful business platforms available, and we specialise in implementing and customising it for North Bengal businesses.\n\nNot every business needs Odoo. It's best for businesses that need multiple departments connected in one system — trading companies, manufacturers, distributors, hotels, schools. If you need a single-purpose tool, a lighter custom build may be faster and cheaper. We'll advise you honestly.`,
      },
      {
        q: "Can you build a mobile app alongside the software?",
        a: `Yes. We build web applications that work well on mobile browsers, and we can also build dedicated Android or iOS apps if your team or customers need a native experience. Mobile apps cost more than web-only systems, so we'll help you decide whether a responsive web app covers your needs or a dedicated app is worth the investment.`,
      },
      {
        q: "Can you integrate with WhatsApp, payment gateways, or other tools?",
        a: `Yes. We regularly build integrations with WhatsApp Business API (automated notifications and updates), payment gateways like Razorpay and PayU, SMS services, email platforms, GST billing systems, and third-party APIs. If you have an existing tool you want connected, tell us during consultation and we'll confirm feasibility.`,
      },
    ],
  },
  {
    category: "Siliguri & North Bengal",
    anchor: "siliguri-north-bengal",
    items: [
      {
        q: "Is custom software affordable for small businesses in Siliguri?",
        a: `Yes — and this is where working with a Siliguri-based team makes a real difference. You're not paying metro-city rates. A simple billing or inventory tool can be built for ₹50,000–₹1.5L, which many small businesses recover within a few months through saved time and reduced errors. We work with businesses of all sizes — from single-owner shops to multi-branch operations.`,
      },
      {
        q: "Can you build software for my tour & travel or hotel business in North Bengal?",
        a: `Absolutely. Tour & travel software and hotel management systems are among the most common projects we build for North Bengal businesses — covering booking management, itinerary creation, guest records, billing, and reporting. We understand the local market and the specific needs of businesses in the Dooars, Darjeeling hills, and Siliguri corridor.`,
      },
      {
        q: "Do you serve businesses in Bhutan, Nepal, and Bangladesh?",
        a: `Yes. Given Siliguri's position as a gateway city, we regularly work with clients in Bhutan, Nepal, and Bangladesh. We handle communication in English, work across time zones, support both INR and USD billing, and sign standard NDA and contract documents. Distance is not a barrier for us.`,
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/\n/g, " "),
      },
    })),
  ),
};

export default function FAQ() {
  return (
    <section id="faq" className="mb-14 scroll-mt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        14 — FAQ
      </p>
      <h2 className="text-2xl font-bold mb-3 pb-3 border-b border-gray-200">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed mt-4 mb-8">
        Real questions from business owners — answered plainly, without the
        jargon. If your question isn't here,{" "}
        <a
          href="#start-project"
          className="text-gray-900 underline underline-offset-2"
        >
          just ask us directly
        </a>
        .
      </p>

      {/* Nav pills — monochrome */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10">
        {faqs.map((cat) => (
          <a
            key={cat.anchor}
            href={`#faq-${cat.anchor}`}
            className="flex items-center gap-2 px-3 py-3 rounded-sm border  text-xs font-semibold  transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" />
            {cat.category}
          </a>
        ))}
      </div>

      {/* FAQ blocks */}
      <div className="flex flex-col gap-10">
        {faqs.map((cat) => (
          <div key={cat.anchor} id={`faq-${cat.anchor}`}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              ☰
              <span className="text-xs font-bold uppercase tracking-widest ">
                {cat.category}
              </span>
              <div className="flex-1 h-px bg-muted" />
            </div>

            {/* Items */}
            <div className="flex flex-col gap-2">
              {cat.items.map((item, i) => (
                <details
                  key={item.q}
                  className="group border open:bg-gray-900 open:border-gray-900 open:border-l-4transition-all duration-200"
                >
                  <summary className="flex items-start justify-between gap-4 px-4 py-4 cursor-pointer list-none select-none">
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 text-xs font-bold mt-0.5 tabular-nums text-gray-500 group-open:text-gray-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-gray-800 font-semibold text-sm leading-snug group-open:text-gray-100">
                        {item.q}
                      </span>
                    </div>
                    <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-gray-100 text-gray-400 group-open:bg-white/10 group-open:text-gray-100 flex items-center justify-center transition-all duration-200">
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        className="w-3 h-3 transition-transform duration-200 group-open:rotate-180"
                      >
                        <path
                          d="M2 4 L6 8 L10 4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>

                  {/* Answer */}
                  <div className="px-5 pb-5 pt-3 border-t border-gray-800 ml-7">
                    {item.a.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-gray-400 text-sm leading-relaxed mb-2 last:mb-0"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 relative overflow-hidden rounded-2xl bg-blue-900 border border-blue-900 px-6 py-6 flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white opacity-5" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white opacity-5" />
        <div className="relative shrink-0 w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl">
          💬
        </div>
        <div className="relative flex-1">
          <p className="text-white font-bold text-sm mb-0.5">
            Still have a question?
          </p>
          <p className="text-gray-100 text-sm">
            You'll speak to the person actually building your software — not a
            salesperson.
          </p>
        </div>

        <a
          href="#start-project"
          className="relative shrink-0 inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 whitespace-nowrap"
        >
          Ask Us Directly
          <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
            <path
              d="M2 7h10M7 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

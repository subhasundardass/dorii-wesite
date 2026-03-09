const faqs = [
  {
    q: "Does Dorii Software work with clients outside India — pan-India or internationally?",
    a: "Yes. Dorii Software delivers custom software development projects across pan-India including West Bengal, Delhi NCR, Maharashtra, Gujarat, Rajasthan, and Tamil Nadu, as well as internationally in the UAE, UK, Singapore, and Malaysia. Our delivery model is remote-first with structured sprint communication, video meetings, and clear milestone tracking.",
  },
  {
    q: "What is the cost of custom ERP software development in India?",
    a: "Custom ERP development projects at Dorii Software typically start from ₹2–3 lakhs for focused single-module systems. Full multi-module ERP implementations usually range from ₹8–25 lakhs depending on integrations, automation complexity, and number of users. For international clients, projects generally start from $5,000 USD.",
  },
  {
    q: "How long does custom software development take?",
    a: "A focused internal tool or single module usually takes 4–8 weeks to develop. A complete ERP system with multiple modules, integrations, and mobile apps typically requires 3–6 months. We provide a milestone-based timeline after the discovery session so project expectations are clear from the beginning.",
  },
  {
    q: "Can you take over an incomplete software development project?",
    a: "Yes. Dorii Software regularly takes over incomplete or abandoned projects. We start with a codebase audit to evaluate architecture, documentation, and quality. After the audit, we recommend whether continuing the existing codebase or rebuilding the system will be more efficient.",
  },
  {
    q: "Do you sign an NDA before discussing project details?",
    a: "Yes. We always sign a mutual Non-Disclosure Agreement (NDA) before any discovery session or technical discussion. Your business processes, product ideas, and operational data remain fully protected.",
  },
  {
    q: "What technologies does Dorii Software use for development?",
    a: "For custom software and ERP development we primarily use Python, Django, React.js, Node.js, Flutter, PostgreSQL, AWS, and Google Cloud. For ERP projects we also implement Odoo using the Python-based Odoo framework.",
  },
  {
    q: "Is the software GST-compliant and integrated with Indian systems?",
    a: "Yes. We implement GST invoicing, e-Way Bill generation, TDS/TCS handling, UPI payments, Razorpay integrations, and WhatsApp Business API where required. All billing and financial modules can be configured to follow Indian compliance standards.",
  },
  {
    q: "What if I'm not technical — can I still work with Dorii Software?",
    a: "Absolutely. Most Dorii Software clients are business owners, operations managers, or finance teams rather than developers. We translate technical decisions into clear business language and handle architecture choices internally.",
  },
  {
    q: "Do you provide post-launch software support and maintenance?",
    a: "Yes. Every project includes 90 days of free post-launch support. After that, many clients choose an Annual Maintenance Contract (AMC) which covers hosting management, security updates, backups, performance monitoring, and feature enhancements.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a.replace(/\n/g, " "),
    },
  })),
};

export default function FaqSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section
        id="faq"
        className="py-20 lg:py-28 bg-white dark:bg-slate-950"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-brand text-sm font-bold uppercase tracking-widest mb-3">
              FAQ
            </p>

            <h2
              id="faq-heading"
              className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4"
            >
              Frequently Asked Questions
            </h2>

            <p className="text-slate-500 dark:text-slate-400">
              Everything you need to know before starting a custom software
              project.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800 rounded-2xl p-5 mb-8 flex items-center gap-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
              ?
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              Have a question not listed here?{" "}
              <a
                href="https://wa.me/919732939123"
                className="text-brand font-bold hover:underline"
              >
                WhatsApp us directly
              </a>{" "}
              — we reply within 2 hours on business days.
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl p-5 group"
              >
                <summary className="cursor-pointer font-semibold text-sm text-slate-900 dark:text-white flex justify-between items-center">
                  {faq.q}

                  <span className="text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

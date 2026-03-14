import Link from "next/link";

export default function ServicesWeOffer() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* <!-- Section illustration banner --> */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* <!-- Left: illustration --> */}
          <div className="bg-linear-to-br from-blue-50 via-sky-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 sticky top-24">
            <p className="text-brand-600 dark:text-gray-500 text-xs mono font-bold uppercase tracking-widest mb-4">
              Our Services
            </p>
            <h2
              id="services-heading"
              className="text-2xl font-extrabold text-ink mb-4 leading-tight dark:text-gray-800"
            >
              <strong>Software Development Services</strong> — Custom-Built for
              Your Business
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              From{" "}
              <strong>
                <Link href={"/services/custom-software-development"}>
                  custom ERP software development
                </Link>
              </strong>{" "}
              to{" "}
              <strong>
                <Link href={"/services/odoo-customisation"}>
                  Odoo customisation
                </Link>
              </strong>
              , <strong>mobile app development</strong>, and{" "}
              <strong>business process automation</strong> — we build what your
              business actually needs, not what fits a template.
            </p>
            {/* <!-- Service visual: terminal-style --> */}

            <div className="bg-black rounded-2xl overflow-hidden border border-white/10">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>
                <span className="ml-2 mono text-[10px] text-blue-400/40">
                  services.config
                </span>
              </div>
              <div className="p-4 mono text-[11px] space-y-1">
                <p className="text-blue-400/40">// Active service stack</p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">services</span>{" "}
                  <span className="text-white/50">=</span>{" "}
                  <span className="text-white/50">[</span>
                </p>
                <p>
                  &nbsp;&nbsp;
                  <span className="text-green-400">
                    "custom-erp-development"
                  </span>
                  <span className="text-white/40">,</span>
                </p>
                <p>
                  &nbsp;&nbsp;
                  <span className="text-green-400">"odoo-customisation"</span>
                  <span className="text-white/40">,</span>
                </p>
                <p>
                  &nbsp;&nbsp;
                  <span className="text-green-400">
                    "mobile-app-development"
                  </span>
                  <span className="text-white/40">,</span>
                </p>
                <p>
                  &nbsp;&nbsp;
                  <span className="text-green-400">"business-automation"</span>
                  <span className="text-white/40">,</span>
                </p>
                <p>
                  &nbsp;&nbsp;
                  <span className="text-green-400">"api-integration"</span>
                  <span className="text-white/40">,</span>
                </p>
                <p>
                  &nbsp;&nbsp;
                  <span className="text-green-400">"amc-support"</span>
                </p>
                <p>
                  <span className="text-white/50">];</span>
                </p>
                <p className="pt-1 flex items-center gap-1">
                  <span className="text-emerald-400">▶</span>{" "}
                  <span className="text-emerald-400/70">
                    All services active
                  </span>
                  <span className="inline-block w-1.5 h-3 bg-cyan-400/70 blink ml-1"></span>
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-xl px-2 py-1 text-xs bg-blue-100 border border-blue-200 text-brand-700 dark:text-gray-800">
                Python · Django
              </span>
              <span className="rounded-xl px-2 py-1 text-xs bg-blue-100 border border-blue-200 text-brand-700 dark:text-gray-800">
                React.js
              </span>
              <span className="rounded-xl px-2 py-1 text-xs bg-blue-100 border border-blue-200 text-brand-700 dark:text-gray-800">
                Flutter
              </span>
              <span className="rounded-xl px-2 py-1 text-xs bg-blue-100 border border-blue-200 text-brand-700 dark:text-gray-800">
                Odoo
              </span>
              <span className="rounded-xl px-2 py-1 text-xs bg-blue-100 border border-blue-200 text-brand-700 dark:text-gray-800">
                PostgreSQL
              </span>
              <span className="rounded-xl px-2 py-1 text-xs bg-blue-100 border border-blue-200 text-brand-700 dark:text-gray-800">
                AWS / GCP
              </span>
              <span className="rounded-xl px-2 py-1 text-xs bg-blue-100 border border-blue-200 text-brand-700 dark:text-gray-800">
                Node.js
              </span>
              <span className="rounded-xl px-2 py-1 text-xs bg-blue-100 border border-blue-200 text-brand-700 dark:text-gray-800">
                REST APIs
              </span>
            </div>
          </div>

          {/* <!-- Right: service list --> */}
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-ink mb-1 dark:text-gray-800">
                    <strong>Custom ERP Software Development</strong>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    End-to-end{" "}
                    <strong>enterprise resource planning software</strong> built
                    from scratch for your workflows. Not a template, not a
                    reskin — your operations logic, coded precisely. Covers
                    manufacturing, trading, logistics, services, and hybrid
                    businesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-ink mb-1 dark:text-gray-800">
                    <strong>Odoo ERP Customisation &amp; Development</strong>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Custom Odoo modules, workflow customisation, third-party API
                    integrations, data migration, and{" "}
                    <strong>Odoo ERP implementation</strong> for manufacturing,
                    trading, and service businesses. We've worked deeply with
                    Odoo 14, 15, 16, and 17.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-ink mb-1 dark:text-gray-800">
                    <strong>Mobile App Development</strong> — Flutter, iOS &amp;
                    Android
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Cross-platform <strong>business mobile apps</strong> built
                    with Flutter for Android and iOS. Field force apps, delivery
                    tracking, mobile ERP access, stock apps, and customer-facing
                    portals — performance-optimised for low-bandwidth Indian
                    networks.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-ink mb-1 dark:text-gray-800">
                    <strong>Business Process Automation</strong>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    <strong>Business automation software</strong> that
                    eliminates manual data entry, approval bottlenecks, and
                    repetitive workflows. WhatsApp Business API alerts,
                    automated reporting, GST portal sync, email/SMS triggers,
                    and custom workflow engines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

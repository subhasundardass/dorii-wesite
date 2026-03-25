// const products = [
//   {
//     title: "Transport Management System",
//     short: "Logistics platform for transport operators",
//     icon: "truck",
//     features: [
//       "LR & challan generation",
//       "e-Way bill integration",
//       "Driver & fleet management",
//       "Trip costing",
//       "GST freight billing",
//       "Multi-branch accounting",
//     ],
//   },

//   {
//     title: "Inventory Management System",
//     short: "Real-time stock and warehouse tracking",
//     icon: "inventory",
//     features: [
//       "Multi-warehouse inventory",
//       "Barcode scanning",
//       "Purchase & sales tracking",
//       "Stock alerts",
//       "Batch & expiry tracking",
//       "GST billing",
//     ],
//   },

//   {
//     title: "Retail POS Software",
//     short: "Billing system for retail stores",
//     icon: "pos",
//     features: [
//       "Fast POS billing",
//       "Barcode support",
//       "Inventory sync",
//       "GST invoices",
//       "Customer loyalty",
//       "Daily sales reports",
//     ],
//   },

//   {
//     title: "HR & Payroll Software",
//     short: "Employee management & salary automation",
//     icon: "hr",
//     features: [
//       "Employee records",
//       "Leave management",
//       "Attendance tracking",
//       "Payroll processing",
//       "PF & ESI reports",
//       "Payslip generation",
//     ],
//   },

//   {
//     title: "Manufacturing ERP",
//     short: "Production planning & factory operations",
//     icon: "factory",
//     features: [
//       "Bill of materials",
//       "Production planning",
//       "Work order tracking",
//       "Raw material inventory",
//       "Cost tracking",
//       "Quality control",
//     ],
//   },

//   {
//     title: "Custom CRM System",
//     short: "Sales pipeline & customer management",
//     icon: "crm",
//     features: [
//       "Lead management",
//       "Sales pipeline",
//       "Task automation",
//       "Customer database",
//       "Follow-up reminders",
//       "Reports & analytics",
//     ],
//   },
// ];
export default function SolutionsWeOffer() {
  return (
    <section
      id="solutions"
      className="py-20 lg:py-28 bg-blue-50/50"
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-3">
            Domain Knowledge
          </p>
          <h2
            id="solutions-heading"
            className="text-3xl lg:text-4xl font-extrabold text-ink mb-4"
          >
            <strong>ERP &amp; Business Software </strong>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              We've Built — Live in Production
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            These are not demos or concepts. These are{" "}
            <strong>live enterprise software systems</strong> running real
            businesses across India today — built from scratch after deep domain
            research.
          </p>
        </div>

        {/* <!-- Product cards --> */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* <!-- Transport TMS --> */}
          <article
            className="bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm card-hover"
            aria-labelledby="tms-heading"
          >
            <div className="bg-linear-to-br from-blue-50 to-sky-100 px-8 py-10 border-b border-blue-100 relative overflow-hidden">
              <div className="absolute right-4 top-4 w-32 h-32 bg-brand-400/10 rounded-full blur-2xl"></div>
              {/* <!-- TMS illustration --> */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-600/30">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 17l2-2h4l2 2h2a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2zm0 0v2m8-2v2M3 11h18"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    id="tms-heading"
                    className="text-xl font-extrabold text-ink mb-1"
                  >
                    Transport Management System{" "}
                    <span className="text-brand-600">(TMS)</span>
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Complete road freight &amp; logistics platform for Indian
                    operators
                  </p>
                </div>
              </div>
              {/* <!-- mini dashboard preview --> */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-blue-100 text-center">
                  <p className="text-brand-600 font-extrabold text-base">47</p>
                  <p className="text-gray-400 text-[9px] mono">ACTIVE TRIPS</p>
                </div>
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-blue-100 text-center">
                  <p className="text-brand-600 font-extrabold text-base">
                    ₹2.1L
                  </p>
                  <p className="text-gray-400 text-[9px] mono">
                    TODAY'S FREIGHT
                  </p>
                </div>
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-blue-100 text-center">
                  <p className="text-emerald-600 font-extrabold text-base">
                    98%
                  </p>
                  <p className="text-gray-400 text-[9px] mono">e-WAY FILED</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600  leading-relaxed mb-4">
                Built after weeks inside actual transport offices, our{" "}
                <strong>Transport Management Software</strong> handles the
                complete freight cycle — from trip creation to delivery
                confirmation and GST filing. Designed for road freight operators
                managing 10 to 500+ vehicles across multiple depots.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-brand-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>LR &amp; Challan generation</strong>
                  </span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-brand-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>e-Way Bill auto-filing</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-brand-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Driver &amp; fleet management</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-brand-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Trip costing &amp; P&amp;L</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-brand-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>GST-ready freight billing</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-brand-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Multi-branch accounts</span>
                </li>
              </ul>
              <a
                href="/solutions/transport-management"
                className="text-brand-600 font-bold text-sm hover:text-brand-700 flex items-center gap-1"
              >
                Learn more about TMS{" "}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </article>

          {/* <!-- Housing ERP --> */}
          <article
            className="bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm card-hover"
            aria-labelledby="housing-heading"
          >
            <div className="bg-linear-to-br from-indigo-50 to-blue-100 px-8 py-10 border-b border-blue-100 relative overflow-hidden">
              <div className="absolute right-4 top-4 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/30">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    id="housing-heading"
                    className="text-xl font-extrabold text-ink mb-1"
                  >
                    Housing Society ERP{" "}
                    <span className="text-indigo-600">(RWA)</span>
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Full society management for apartment complexes &amp; gated
                    communities
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-indigo-100 text-center">
                  <p className="text-indigo-600 font-extrabold text-base">
                    340
                  </p>
                  <p className="text-gray-400 text-[9px] mono">UNITS MANAGED</p>
                </div>
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-indigo-100 text-center">
                  <p className="text-indigo-600 font-extrabold text-base">
                    ₹12L
                  </p>
                  <p className="text-gray-400 text-[9px] mono">COLLECTED</p>
                </div>
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-indigo-100 text-center">
                  <p className="text-emerald-600 font-extrabold text-base">0</p>
                  <p className="text-gray-400 text-[9px] mono">OVERDUE</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600  leading-relaxed mb-4">
                A complete <strong>housing society management platform</strong>{" "}
                for RWAs and cooperative housing societies. Covers everything
                from online maintenance billing and UPI collections to visitor
                management and AGM documentation — web and mobile accessible.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-indigo-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Online maintenance billing</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-indigo-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>UPI &amp; online collection</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-indigo-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Complaint ticketing</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-indigo-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Visitor management</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-indigo-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>AGM &amp; notice board</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-indigo-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Committee accounting</span>
                </li>
              </ul>
              <a
                href="/solutions/housing-society"
                className="text-indigo-600 font-bold text-sm hover:text-indigo-700 flex items-center gap-1"
              >
                Learn more about Housing ERP{" "}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </article>

          {/* <!-- Warehouse WMS --> */}
          <article
            className="bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm card-hover"
            aria-labelledby="wms-heading"
          >
            <div className="bg-linear-to-br from-sky-50 to-cyan-100 px-8 py-10 border-b border-blue-100 relative overflow-hidden">
              <div className="absolute right-4 top-4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-cyan-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-cyan-600/30">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    id="wms-heading"
                    className="text-xl font-extrabold text-ink mb-1"
                  >
                    Warehouse Management System{" "}
                    <span className="text-cyan-600">(WMS)</span>
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Real-time multi-location inventory &amp; fulfilment platform
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-cyan-100 text-center">
                  <p className="text-cyan-600 font-extrabold text-base">3</p>
                  <p className="text-gray-400 text-[9px] mono">WAREHOUSES</p>
                </div>
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-cyan-100 text-center">
                  <p className="text-cyan-600 font-extrabold text-base">
                    4,820
                  </p>
                  <p className="text-gray-400 text-[9px] mono">SKUs TRACKED</p>
                </div>
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-cyan-100 text-center">
                  <p className="text-emerald-600 font-extrabold text-base">
                    Real-time
                  </p>
                  <p className="text-gray-400 text-[9px] mono">STOCK SYNC</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600  leading-relaxed mb-4">
                A <strong>warehouse management software</strong> built for
                mid-size distribution companies. Handles zone-rack-bin stock
                mapping, barcode scanning, order picking workflows, and
                automatic stock reconciliation across multiple locations —
                replacing spreadsheets with real-time visibility.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-cyan-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Zone-rack-bin mapping</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-cyan-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Barcode scanning</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-cyan-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>FIFO / FEFO stock</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-cyan-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Order fulfilment</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-cyan-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Automated reconciliation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-cyan-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Multi-warehouse support</span>
                </li>
              </ul>
              <a
                href="/solutions/warehouse-management"
                className="text-cyan-600 font-bold text-sm hover:text-cyan-700 flex items-center gap-1"
              >
                Learn more about WMS{" "}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </article>

          {/* <!-- Inventory ERP --> */}
          <article
            className="bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm card-hover"
            aria-labelledby="inventory-heading"
          >
            <div className="bg-linear-to-br from-violet-50 to-blue-100 px-8 py-10 border-b border-blue-100 relative overflow-hidden">
              <div className="absolute right-4 top-4 w-32 h-32 bg-violet-400/10 rounded-full blur-2xl"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-violet-600/30">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    id="inventory-heading"
                    className="text-xl font-extrabold text-ink mb-1"
                  >
                    Inventory &amp; Stock Management{" "}
                    <span className="text-violet-600">ERP</span>
                  </h3>
                  <p className="text-gray-500 text-sm">
                    For manufacturers, distributors &amp; multi-branch traders
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-violet-100 text-center">
                  <p className="text-violet-600 font-extrabold text-base">
                    12K
                  </p>
                  <p className="text-gray-400 text-[9px] mono">SKUs LIVE</p>
                </div>
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-violet-100 text-center">
                  <p className="text-violet-600 font-extrabold text-base">5</p>
                  <p className="text-gray-400 text-[9px] mono">BRANCHES</p>
                </div>
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-violet-100 text-center">
                  <p className="text-emerald-600 font-extrabold text-base">
                    GST
                  </p>
                  <p className="text-gray-400 text-[9px] mono">READY</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600  leading-relaxed mb-4">
                A <strong>stock and inventory management system</strong> built
                for manufacturers, distributors, and multi-branch traders.
                Covers the complete purchase-to-sale cycle with
                batch/serial/expiry management, multi-location stock visibility,
                and <strong>GST-compliant invoicing</strong> out of the box.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-violet-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Purchase-to-sale cycle</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-violet-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Batch / serial / expiry</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-violet-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Multi-branch tracking</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-violet-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Automated reorder alerts</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-violet-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>GST invoicing built-in</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-violet-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Supplier management</span>
                </li>
              </ul>
              <a
                href="/solutions/stock-inventory-management"
                className="text-violet-600 font-bold text-sm hover:text-violet-700 flex items-center gap-1"
              >
                Learn more about Inventory ERP{" "}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

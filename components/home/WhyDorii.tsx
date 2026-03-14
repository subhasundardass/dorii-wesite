export default function WhyDorii() {
  return (
    <section id="about" className="py-0 bg-mist">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block bg-brand-50 text-brand-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-brand-100 mb-6">
            Why Dorii Software
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-ink tracking-tight mb-5">
            Built by Engineers Who
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Understand Indian Business
            </span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            We're a DPIIT-recognized startup headquartered in Siliguri, West
            Bengal — combining the speed and innovation of a young tech team
            with the experience of senior engineers who've built enterprise
            systems for years.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Every solution we build carries the same promise: it will work in
            the real world, not just on paper. GST-compliant, India-first,
            scalable from 10 users to 10,000.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-brand-200 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-brand-500"
                >
                  <path
                    d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-ink text-sm mb-1">
                  Deep Vertical Expertise
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Domain knowledge in Transport, Logistics, Warehousing &
                  Housing Society operations — not generic IT.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-emerald-200 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-emerald-600"
                >
                  <rect
                    x="3"
                    y="7"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M7 7V5.5a3 3 0 016 0V7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="10"
                    cy="12"
                    r="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-ink text-sm mb-1">
                  India-First Design
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  GST compliance, Indian payment gateways, low-bandwidth
                  support, and regional language considerations built-in.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-violet-200 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-violet-600"
                >
                  <path
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M7 10l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-ink text-sm mb-1">
                  Direct Access to Developers
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  No middlemen. You talk directly to the engineers building your
                  system — faster decisions, faster delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Stats + SVG illustration --> */}
        <div className="space-y-5">
          {/* <!-- Large illustration --> */}
          <div className="bg-primary/5 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl pointer-events-none"></div>
            {/* <!-- Team / India SVG --> */}
            <svg
              viewBox="0 0 380 200"
              className="w-full text-indigo-600 dark:text-indigo-400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Map outline */}
              <path
                d="M160 20 Q200 10 240 25 L270 60 Q290 80 280 110 L260 140 Q240 170 200 180 Q175 185 155 170 L130 145 Q110 120 120 90 L135 55 Z"
                fill="rgba(99,102,241,0.08)"
                stroke="rgba(99,102,241,0.3)"
                strokeWidth="1.5"
              />

              {/* Main Pin */}
              <circle cx="190" cy="105" r="5" fill="#6366f1" />
              <path d="M190 100 L190 85" stroke="#6366f1" strokeWidth="1.5" />
              <circle
                cx="190"
                cy="83"
                r="4"
                fill="rgba(99,102,241,0.3)"
                stroke="#6366f1"
                strokeWidth="1.5"
              />

              {/* Second Pin */}
              <circle cx="220" cy="130" r="3.5" fill="#8b5cf6" />
              <path d="M220 126 L220 114" stroke="#8b5cf6" strokeWidth="1.5" />
              <circle
                cx="220"
                cy="112"
                r="3"
                fill="rgba(139,92,246,0.3)"
                stroke="#8b5cf6"
                strokeWidth="1.5"
              />

              {/* Third Pin */}
              <circle cx="165" cy="75" r="3" fill="#4f46e5" />

              {/* Connection Line */}
              <path
                d="M190 83 Q205 70 220 112"
                stroke="rgba(99,102,241,0.3)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />

              {/* Siliguri Label */}
              <rect
                x="148"
                y="66"
                width="80"
                height="20"
                rx="4"
                fill="rgba(99,102,241,0.15)"
                stroke="rgba(99,102,241,0.3)"
                strokeWidth="1"
              />

              <text
                x="155"
                y="78"
                fill="currentColor"
                opacity="0.9"
                fontSize="8"
                fontFamily="Outfit,sans-serif"
                fontWeight="600"
              >
                Siliguri HQ
              </text>

              {/* Decorative dots */}
              <circle cx="80" cy="50" r="2" fill="rgba(99,102,241,0.3)" />
              <circle cx="310" cy="80" r="2" fill="rgba(99,102,241,0.3)" />
              <circle cx="300" cy="150" r="1.5" fill="rgba(99,102,241,0.2)" />
              <circle cx="70" cy="140" r="1.5" fill="rgba(99,102,241,0.2)" />

              {/* Title */}
              <text
                x="30"
                y="30"
                fill="currentColor"
                fontSize="13"
                fontFamily="Outfit,sans-serif"
                fontWeight="800"
              >
                Serving India
              </text>

              {/* Subtitle */}
              <text
                x="30"
                y="48"
                fill="currentColor"
                opacity="0.8"
                fontSize="10"
                fontFamily="Outfit,sans-serif"
                fontWeight="600"
              >
                & International Markets
              </text>

              {/* MSME Badge */}
              <rect
                x="280"
                y="20"
                width="100"
                height="22"
                rx="6"
                fill="rgba(16,185,129,0.15)"
                stroke="rgba(16,185,129,0.3)"
                strokeWidth="1"
              />

              <text
                x="290"
                y="35"
                fill="#34d399"
                fontSize="9"
                fontFamily="Outfit,sans-serif"
                fontWeight="700"
              >
                🏆 MSME Certified
              </text>

              {/* DPIIT Badge */}
              <rect
                x="280"
                y="50"
                width="100"
                height="22"
                rx="6"
                fill="rgba(99,102,241,0.15)"
                stroke="rgba(99,102,241,0.3)"
                strokeWidth="1"
              />

              <text
                x="290"
                y="65"
                fill="currentColor"
                fontSize="9"
                fontFamily="Outfit,sans-serif"
                fontWeight="700"
              >
                🚀 DPIIT Startup
              </text>
            </svg>
          </div>
          {/* <!-- Stat grid --> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:border-brand-200 hover:shadow-lg transition-all">
              <p className="text-4xl font-black text-brand-500 tracking-tight">
                50<span className="text-2xl">+</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">Businesses Automated</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:border-emerald-200 hover:shadow-lg transition-all">
              <p className="text-4xl font-black text-emerald-600 tracking-tight">
                98<span className="text-2xl">%</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Client Retention Rate
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:border-violet-200 hover:shadow-lg transition-all">
              <p className="text-4xl font-black text-violet-600 tracking-tight">
                6<span className="text-2xl">+</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">Industries Served</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:border-amber-200 hover:shadow-lg transition-all">
              <p className="text-4xl font-black text-amber-600 tracking-tight">
                15<span className="text-2xl">+</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">Years Delivering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

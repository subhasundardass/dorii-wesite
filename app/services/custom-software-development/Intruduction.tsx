import Link from "next/link";

export default function Introduction() {
  return (
    <section id="introduction" className="mb-14 scroll-mt-24">
      {/* Label + Heading */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
        01 — Overview
      </p>
      <h2 className="text-2xl font-bold mb-8 pb-3 border-b border-gray-200">
        Introduction to Custom Software Development
      </h2>

      {/* SVG — full width on mobile, floated right on desktop */}
      <div className="float-none w-full mb-6 sm:float-right sm:w-[280px] sm:ml-8 sm:mb-4 lg:w-[320px] lg:ml-10">
        <div className="w-full rounded-2xl overflow-hidden bg-blue-50 p-4">
          <svg
            viewBox="0 0 400 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            aria-hidden="true"
          >
            <rect
              x="20"
              y="20"
              width="360"
              height="300"
              rx="20"
              fill="#EFF6FF"
            />
            <rect
              x="80"
              y="45"
              width="240"
              height="160"
              rx="12"
              fill="#1D4ED8"
            />
            <rect
              x="90"
              y="55"
              width="220"
              height="140"
              rx="8"
              fill="#DBEAFE"
            />
            <rect
              x="104"
              y="70"
              width="80"
              height="7"
              rx="3.5"
              fill="#93C5FD"
            />
            <rect x="104" y="85" width="130" height="6" rx="3" fill="#BFDBFE" />
            <rect x="114" y="98" width="95" height="6" rx="3" fill="#BFDBFE" />
            <rect x="114" y="111" width="70" height="6" rx="3" fill="#BFDBFE" />
            <rect
              x="104"
              y="124"
              width="115"
              height="6"
              rx="3"
              fill="#BFDBFE"
            />
            <rect x="114" y="137" width="60" height="6" rx="3" fill="#BFDBFE" />
            <rect
              x="104"
              y="150"
              width="100"
              height="6"
              rx="3"
              fill="#BFDBFE"
            />
            <rect x="114" y="163" width="85" height="6" rx="3" fill="#BFDBFE" />
            <circle cx="292" cy="65" r="6" fill="#34D399" />
            <circle cx="292" cy="65" r="10" fill="#34D399" opacity="0.2" />
            <rect
              x="178"
              y="205"
              width="44"
              height="14"
              rx="4"
              fill="#93C5FD"
            />
            <rect
              x="158"
              y="217"
              width="84"
              height="10"
              rx="5"
              fill="#60A5FA"
            />
            <rect
              x="264"
              y="30"
              width="100"
              height="68"
              rx="10"
              fill="white"
              style={{
                filter: "drop-shadow(0 4px 16px rgba(59,130,246,0.18))",
              }}
            />
            <circle cx="283" cy="52" r="11" fill="#DBEAFE" />
            <path
              d="M279 52 L283 56 L290 46"
              stroke="#1D4ED8"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="298"
              y="46"
              width="52"
              height="5"
              rx="2.5"
              fill="#BFDBFE"
            />
            <rect
              x="298"
              y="55"
              width="38"
              height="5"
              rx="2.5"
              fill="#DBEAFE"
            />
            <rect
              x="276"
              y="70"
              width="76"
              height="5"
              rx="2.5"
              fill="#EFF6FF"
            />
            <rect
              x="276"
              y="80"
              width="56"
              height="5"
              rx="2.5"
              fill="#EFF6FF"
            />
            <rect
              x="28"
              y="200"
              width="116"
              height="64"
              rx="10"
              fill="white"
              style={{
                filter: "drop-shadow(0 4px 16px rgba(59,130,246,0.18))",
              }}
            />
            <rect x="42" y="214" width="88" height="6" rx="3" fill="#BFDBFE" />
            <rect x="42" y="226" width="64" height="6" rx="3" fill="#DBEAFE" />
            <rect x="42" y="238" width="76" height="6" rx="3" fill="#EFF6FF" />
            <rect x="42" y="250" width="50" height="6" rx="3" fill="#EFF6FF" />
            <rect
              x="264"
              y="208"
              width="100"
              height="64"
              rx="10"
              fill="white"
              style={{
                filter: "drop-shadow(0 4px 16px rgba(59,130,246,0.18))",
              }}
            />
            <rect x="276" y="222" width="46" height="6" rx="3" fill="#BFDBFE" />
            <rect
              x="276"
              y="234"
              width="32"
              height="5"
              rx="2.5"
              fill="#DBEAFE"
            />
            <rect
              x="306"
              y="228"
              width="10"
              height="36"
              rx="3"
              fill="#BFDBFE"
            />
            <rect
              x="320"
              y="220"
              width="10"
              height="44"
              rx="3"
              fill="#93C5FD"
            />
            <rect
              x="334"
              y="224"
              width="10"
              height="40"
              rx="3"
              fill="#60A5FA"
            />
            <rect
              x="306"
              y="264"
              width="38"
              height="3"
              rx="1.5"
              fill="#DBEAFE"
            />
            <circle
              cx="56"
              cy="58"
              r="22"
              fill="white"
              style={{ filter: "drop-shadow(0 2px 8px rgba(59,130,246,0.14))" }}
            />
            <circle
              cx="56"
              cy="58"
              r="7"
              fill="#DBEAFE"
              stroke="#93C5FD"
              strokeWidth="2"
            />
            <rect x="54" y="40" width="4" height="7" rx="2" fill="#60A5FA" />
            <rect x="54" y="69" width="4" height="7" rx="2" fill="#60A5FA" />
            <rect x="38" y="56" width="7" height="4" rx="2" fill="#60A5FA" />
            <rect x="67" y="56" width="7" height="4" rx="2" fill="#60A5FA" />
            <circle cx="200" cy="242" r="5" fill="#93C5FD" />
            <circle cx="200" cy="242" r="10" fill="#DBEAFE" opacity="0.5" />
            <circle cx="200" cy="242" r="16" fill="#DBEAFE" opacity="0.2" />
          </svg>
        </div>
      </div>

      {/* Text content */}
      <p className="text-gray-900 leading-relaxed mb-4 text-base font-semibold">
        Your business is unique. Your software should be too.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Most business owners in Siliguri come to us after the same frustrating
        experience — they bought a ready-made software, spent weeks setting it
        up, and still ended up doing half the work manually because it just
        didn't fit how their business actually runs.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        We fix that. At{" "}
        <Link href={"/about"}>
          <strong className="text-blue-600">Dorii Software</strong>
        </Link>
        , we build software around your business — not the other way around.
        Every business is different, and we treat it that way. We learn how you
        operate, then build exactly what you need — whether you're in Siliguri
        or anywhere across{" "}
        <span className="text-gray-800 font-medium">
          North Bengal and Sikkim
        </span>
        .
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        We are a{" "}
        <strong>Siliguri-based custom software development company</strong> with
        5+ years of experience and a simple promise — honest pricing, clean
        delivery, and real support when you need it. No middlemen. No runaround.
        Just software that works.
      </p>

      {/* Clear float */}
      <div className="clear-both" />

      {/* Stat pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { value: "15+", label: "Years Experience" },
          { value: "100+", label: "Projects Delivered" },
          { value: "Local", label: "Siliguri Based" },
          { value: "End-to-End", label: "Full Support" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center bg-blue-50 border border-blue-100 rounded-xl px-4 py-4"
          >
            <span className="text-blue-600 font-bold text-lg leading-tight text-center">
              {stat.value}
            </span>
            <span className="text-gray-500 text-xs mt-1 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Callout */}
      <aside
        role="note"
        className="bg-linear-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 px-6 py-5 rounded-r-xl"
      >
        <strong className="block text-blue-700 text-sm font-semibold mb-1">
          💡 Sound familiar?
        </strong>
        <p className="text-blue-800 text-sm leading-relaxed">
          If your current software doesn't fit your workflow, or you're still
          managing things on Excel and WhatsApp — it's time to talk. We'll build
          you something that actually works for your business.
        </p>
        <p className="mt-3 font-bold text-gray-800 text-sm">
          Let's get started. →
        </p>
      </aside>
    </section>
  );
}

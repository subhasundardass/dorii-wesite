export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="py-20 lg:py-28 bg-ink1 grid-bg relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="scan-line"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-brand-600/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-5 relative">
        <div className="text-center mb-14">
          <p className="text-brand-400 text-sm font-bold uppercase tracking-widest mb-3">
            Our Process
          </p>
          <h2
            id="process-heading"
            className="text-3xl lg:text-4xl font-extrabold text-brand-400 mb-4"
          >
            Our <strong>5-Step Software Development Process</strong>
          </h2>
          <p className="text-brand-400/60 text-lg max-w-2xl mx-auto">
            Designed to eliminate the two biggest reasons{" "}
            <strong>software projects fail</strong>: building the wrong thing,
            and building the right thing badly.
          </p>
        </div>

        {/* <!-- Process illustration: timeline visual --> */}
        <div className="bg-white/4 border border-white/10 rounded-3xl p-6 mb-12 overflow-hidden relative">
          <div className="absolute inset-0 shimmer pointer-events-none"></div>
          {/* <!-- Process SVG Timeline --> */}
          <div className="relative">
            {/* <!-- Connector line desktop --> */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-500/20 via-brand-500 to-brand-500/20"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-24 h-24 mb-5">
                  <div className="absolute inset-0 bg-brand-500/15 rounded-full group-hover:scale-110 transition-transform"></div>
                  <div className="absolute inset-2 bg-brand-50 rounded-full border-2 border-brand-200 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="text-brand-500"
                    >
                      <path
                        d="M6 12a10 10 0 1120 0c0 5-3 9-7 11l-3 1-3-1c-4-2-7-6-7-11z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="16"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg shadow-brand-500/40">
                    1
                  </div>
                </div>
                <h4 className="font-bold text-ink text-sm mb-2">
                  Discovery Call
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  45-minute no-obligation session to understand your business,
                  pain points, and goals.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="relative w-24 h-24 mb-5">
                  <div className="absolute inset-0 bg-violet-500/15 rounded-full group-hover:scale-110 transition-transform"></div>
                  <div className="absolute inset-2 bg-violet-50 rounded-full border-2 border-violet-200 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="text-violet-600"
                    >
                      <rect
                        x="5"
                        y="5"
                        width="22"
                        height="22"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M10 11h12M10 16h8M10 21h5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-violet-500 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg shadow-violet-500/40">
                    2
                  </div>
                </div>
                <h4 className="font-bold text-ink text-sm mb-2">
                  Process Mapping
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Our analysts document your workflows and identify automation
                  opportunities.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="relative w-24 h-24 mb-5">
                  <div className="absolute inset-0 bg-emerald-500/15 rounded-full group-hover:scale-110 transition-transform"></div>
                  <div className="absolute inset-2 bg-emerald-50 rounded-full border-2 border-emerald-200 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="text-emerald-600"
                    >
                      <rect
                        x="4"
                        y="6"
                        width="24"
                        height="18"
                        rx="2.5"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M4 12h24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="8"
                        y="16"
                        width="6"
                        height="5"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="18"
                        y="16"
                        width="6"
                        height="5"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg shadow-emerald-500/40">
                    3
                  </div>
                </div>
                <h4 className="font-bold text-ink text-sm mb-2">
                  Design & Prototype
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Interactive wireframes shared for your feedback before any
                  code is written.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="relative w-24 h-24 mb-5">
                  <div className="absolute inset-0 bg-amber-500/15 rounded-full group-hover:scale-110 transition-transform"></div>
                  <div className="absolute inset-2 bg-amber-50 rounded-full border-2 border-amber-200 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="text-amber-600"
                    >
                      <path
                        d="M6 16l4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="12"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg shadow-amber-500/40">
                    4
                  </div>
                </div>
                <h4 className="font-bold text-ink text-sm mb-2">
                  Build & Test
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Agile sprints with fortnightly demos — you see real progress
                  regularly.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="relative w-24 h-24 mb-5">
                  <div className="absolute inset-0 bg-rose-500/15 rounded-full group-hover:scale-110 transition-transform"></div>
                  <div className="absolute inset-2 bg-rose-50 rounded-full border-2 border-rose-200 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="text-rose-500"
                    >
                      <path
                        d="M16 4v4M16 24v4M4 16h4M24 16h4M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="5"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg shadow-rose-500/40">
                    5
                  </div>
                </div>
                <h4 className="font-bold text-ink text-sm mb-2">
                  Launch & Support
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Deployment, staff training, data migration, and 90 days
                  post-launch support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Steps grid --> */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-blue-50/60 border border-white/10 rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center  text-sm font-extrabold mono">
                1
              </div>
              <h3 className="font-bold text-bland text-sm">
                Discovery — Week 1
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Before we talk technology, we talk about your business. A
              structured discovery session with your operations, finance, and
              management team. We map every workflow and every bottleneck — and
              come back with a document that describes your business better than
              your current software does.
            </p>
          </div>
          <div className="bg-blue-50/60 border border-white/10 rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center  text-sm font-extrabold mono">
                2
              </div>
              <h3 className="font-bold text-bland text-sm">
                Architecture &amp; Proposal — Week 1–2
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              We design the{" "}
              <strong className="text-gray-500">system architecture</strong>,
              define the tech stack, and deliver a detailed proposal with
              timeline, milestones, and fixed scope. No "that's out of scope"
              three months later. What's in the proposal is what gets built.
            </p>
          </div>
          <div className="bg-blue-50/60 border border-white/10 rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center  text-sm font-extrabold mono">
                3
              </div>
              <h3 className="font-bold text-bland text-sm">
                Design &amp; Prototype — Week 2–3
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Interactive wireframes are built and shared for feedback. You see
              screens, flows, and data structure before development begins. This
              step alone saves 30–40% of rework — you're not discovering
              problems after the code is written.
            </p>
          </div>
          <div className="bg-blue-50/60 border border-white/10 rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center  text-sm font-extrabold mono">
                4
              </div>
              <h3 className="font-bold text-bland text-sm">
                Agile Build — Sprint-Based
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              We work in{" "}
              <strong className="text-gray-500">two-week agile sprints</strong>.
              At the end of every sprint, you get a working demo on a staging
              environment. You test it, give feedback, and we improve. You're
              never waiting three months to see what was built.
            </p>
          </div>
          <div className="bg-blue-50/60 border border-white/10 rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center  text-sm font-extrabold mono">
                5
              </div>
              <h3 className="font-bold text-bland text-sm">
                QA &amp; Hardening
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Full functional testing, edge-case testing, load testing, and{" "}
              <strong className="text-brand">security review</strong> before
              go-live. We don't ship software that isn't ready. UAT is done with
              your actual team on real data before sign-off.
            </p>
          </div>
          <div className="bg-blue-50/60 border border-white/10 rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center  text-sm font-extrabold mono">
                6
              </div>
              <h3 className="font-bold text-bland text-sm">
                Go-Live &amp; Handover
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Deployment, <strong className="text-brand">data migration</strong>{" "}
              from your old system, full staff training, and documentation.{" "}
              <strong className="text-brand">
                90 days of free post-launch support
              </strong>{" "}
              is standard — we stay until the system is fully stable and your
              team is confident.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

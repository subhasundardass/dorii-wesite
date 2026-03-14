export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full flex items-center overflow-hidden border-b border-blue-900/30">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#020b18]">
        {/* Grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/15 blur-[100px] animate-[pulse_8s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-indigo-700/10 blur-[140px] animate-[pulse_10s_ease-in-out_infinite_1s]" />

        {/* Circuit lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120 H300 L340 160 H600 L640 120 H900"
            stroke="#0ea5e9"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M200 300 H450 L490 260 H750 L790 300 H1200"
            stroke="#0ea5e9"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 450 H150 L190 410 H420 L460 450 H700"
            stroke="#38bdf8"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M800 80 H1000 L1040 120 H1200"
            stroke="#0ea5e9"
            strokeWidth="1"
            fill="none"
          />
          <path d="M340 0 V160" stroke="#0ea5e9" strokeWidth="1" fill="none" />
          <path d="M640 0 V120" stroke="#0ea5e9" strokeWidth="1" fill="none" />
          <path
            d="M490 260 V600"
            stroke="#38bdf8"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M1040 120 V600"
            stroke="#0ea5e9"
            strokeWidth="0.8"
            fill="none"
          />
          <circle cx="340" cy="160" r="3" fill="#38bdf8" opacity="0.8" />
          <circle cx="640" cy="120" r="3" fill="#38bdf8" opacity="0.8" />
          <circle cx="490" cy="260" r="3" fill="#0ea5e9" opacity="0.8" />
          <circle cx="790" cy="300" r="3" fill="#38bdf8" opacity="0.6" />
          <circle cx="1040" cy="120" r="3" fill="#0ea5e9" opacity="0.8" />
          <circle
            cx="340"
            cy="160"
            r="8"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="0.5"
            opacity="0.4"
          />
          <circle
            cx="490"
            cy="260"
            r="8"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>

        {/* Animated scan line */}
        <div className="absolute inset-x-0 h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent animate-[scan_6s_linear_infinite]" />

        {/* Noise texture overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* ── Decorative terminal window (right side) ── */}
      <div className="absolute right-100 top-1/2 -translate-y-1/2 hidden lg:block w-96 select-none pointer-events-none">
        {/* Terminal chrome */}
        <div className="rounded-xl border border-blue-500/20 bg-[#030f1e]/80 backdrop-blur-sm shadow-[0_0_60px_rgba(14,165,233,0.12)] overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-blue-900/40 bg-[#020a15]/60">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-blue-400/50 font-mono"></span>
          </div>
          {/* Code content */}
          <div className="px-5 py-4 font-mono text-[11px] leading-relaxed space-y-0.5">
            <p>
              <span className="text-purple-400">import</span>{" "}
              <span className="text-cyan-300">{"{ Pipeline }"}</span>{" "}
              <span className="text-purple-400">from</span>{" "}
              <span className="text-green-400">'@infra/core'</span>
              <span className="text-blue-200/40">;</span>
            </p>
            <p className="text-blue-200/20">&nbsp;</p>
            <p>
              <span className="text-blue-400">const</span>{" "}
              <span className="text-cyan-300">deploy</span>{" "}
              <span className="text-blue-200/60">=</span>{" "}
              <span className="text-purple-400">async</span>{" "}
              <span className="text-blue-200/60">(</span>
              <span className="text-orange-300">env</span>
              <span className="text-blue-200/60">:</span>{" "}
              <span className="text-yellow-300">Env</span>
              <span className="text-blue-200/60">)</span>{" "}
              <span className="text-blue-200/60">={">"}</span>{" "}
              <span className="text-blue-200/60">{"{"}</span>
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-blue-400">const</span>{" "}
              <span className="text-cyan-300">pipeline</span>{" "}
              <span className="text-blue-200/60">=</span>{" "}
              <span className="text-blue-400">new</span>{" "}
              <span className="text-yellow-300">Pipeline</span>
              <span className="text-blue-200/60">(</span>
              <span className="text-orange-300">env</span>
              <span className="text-blue-200/60">);</span>
            </p>
            <p className="text-blue-200/20">&nbsp;</p>
            <p>
              &nbsp;&nbsp;<span className="text-purple-400">await</span>{" "}
              <span className="text-cyan-300">pipeline</span>
              <span className="text-blue-200/60">.</span>
              <span className="text-cyan-300">run</span>
              <span className="text-blue-200/60">({"{"}</span>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-cyan-300">strategy</span>
              <span className="text-blue-200/60">:</span>{" "}
              <span className="text-green-400">'blue-green'</span>
              <span className="text-blue-200/60">,</span>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-cyan-300">replicas</span>
              <span className="text-blue-200/60">:</span>{" "}
              <span className="text-orange-300">3</span>
              <span className="text-blue-200/60">,</span>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-cyan-300">healthCheck</span>
              <span className="text-blue-200/60">:</span>{" "}
              <span className="text-purple-400">true</span>
              <span className="text-blue-200/60">,</span>
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-blue-200/60">{"});"}</span>
            </p>
            <p>
              <span className="text-blue-200/60">{"};"}</span>
            </p>
            <p className="text-blue-200/20">&nbsp;</p>
            {/* Blinking cursor line */}
            <p className="flex items-center gap-1">
              <span className="text-green-400/70">▶</span>
              <span className="text-green-400/70 text-[10px]">
                Deploying to production
              </span>
              <span className="inline-block w-1.5 h-3.5 bg-cyan-400/80 animate-[blink_1s_step-end_infinite] ml-0.5" />
            </p>
          </div>
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2 border-t border-blue-900/40 bg-[#020a15]/60">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-green-400/70 font-mono">
                3/3 pods healthy
              </span>
            </div>
            <span className="text-[10px] text-blue-400/40 font-mono">
              v2.4.0
            </span>
          </div>
        </div>

        {/* Floating badges around terminal */}
        <div className="absolute -top-3 -left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          TypeScript
        </div>
        <div className="absolute -bottom-3 -right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          CI/CD Active
        </div>
      </div>

      <div className="absolute right-40 top-1/3 -translate-y-1/2 hidden lg:block w-96 select-none pointer-events-none">
        {/* Terminal */}
        <div className="rounded-xl border border-indigo-500/20 bg-[#020617]/90 backdrop-blur-sm shadow-[0_0_60px_rgba(99,102,241,0.15)] overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-indigo-900/40 bg-[#020617]/80">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-indigo-400/60 font-mono">
              ai_service.py
            </span>
          </div>

          {/* Code */}
          <div className="px-5 py-4 font-mono text-[12px] leading-relaxed space-y-0.5">
            <p>
              <span className="text-purple-400">from</span>{" "}
              <span className="text-cyan-300">fastapi</span>{" "}
              <span className="text-purple-400">import</span>{" "}
              <span className="text-green-400">FastAPI</span>
            </p>

            <p>
              <span className="text-purple-400">from</span>{" "}
              <span className="text-cyan-300">openai</span>{" "}
              <span className="text-purple-400">import</span>{" "}
              <span className="text-green-400">OpenAI</span>
            </p>

            <p className="text-slate-500"># Initialize app</p>

            <p>
              <span className="text-yellow-300">app</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-green-400">FastAPI</span>()
            </p>

            <p>
              <span className="text-yellow-300">client</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-green-400">OpenAI</span>()
            </p>

            <p className="text-slate-500"># AI job matcher API</p>

            <p>
              <span className="text-purple-400">@app</span>.
              <span className="text-cyan-300">post</span>(
              <span className="text-green-400">"/match-job"</span>)
            </p>

            <p>
              <span className="text-purple-400">async def</span>{" "}
              <span className="text-cyan-300">match_job</span>(resume:{" "}
              <span className="text-yellow-300">str</span>):
            </p>

            <p>
              &nbsp;&nbsp;<span className="text-yellow-300">response</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-cyan-300">client</span>.
              <span className="text-green-400">chat</span>.
              <span className="text-green-400">completions</span>.
              <span className="text-green-400">create</span>(
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-cyan-300">model</span>
              <span className="text-slate-400">=</span>
              <span className="text-green-400">"gpt-4o"</span>,
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-cyan-300">messages</span>
              <span className="text-slate-400">=</span>[
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-slate-400">{"{"}</span>
              <span className="text-cyan-300">"role"</span>:{" "}
              <span className="text-green-400">"user"</span>,
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-cyan-300">"content"</span>: resume
              <span className="text-slate-400">{"}"}</span>
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-400">]</span>
            </p>

            <p>
              &nbsp;&nbsp;<span className="text-purple-400">return</span>{" "}
              <span className="text-yellow-300">response</span>
            </p>

            <p className="text-slate-500">&nbsp;</p>

            {/* Cursor */}
            <p className="flex items-center gap-1">
              <span className="text-green-400">$</span>
              <span className="text-green-400 text-[11px]">
                python ai_service.py
              </span>
              <span className="inline-block w-1.5 h-3.5 bg-indigo-400 animate-[blink_1s_step-end_infinite]" />
            </p>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2 border-t border-indigo-900/40 bg-[#020617]/80">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-green-400/70 font-mono">
                API running
              </span>
            </div>

            <span className="text-[10px] text-indigo-400/50 font-mono">
              Python 3.12
            </span>
          </div>
        </div>
      </div>
      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-xs font-mono tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Trusted by Businesses in Siliguri & North Bengal
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-3xl">
          Custom Software Development Company in{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
            Siliguri
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-blue-200/70 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
          We build custom ERP, CRM, billing, and business software for companies
          in Siliguri and across North Bengal including Darjeeling, Jalpaiguri,
          and Cooch Behar.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#introduction"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium transition-colors"
          >
            Start Reading
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          {/* <a
            href="#references"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-blue-500/40 hover:border-blue-400 text-blue-300 hover:text-white text-sm font-medium transition-colors"
          >
            View References
          </a> */}
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes scan {
          0%   { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

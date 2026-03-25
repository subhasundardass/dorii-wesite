import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full flex items-center overflow-hidden border-b border-indigo-900/30">
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
                stroke="#6366f1"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-500/15 blur-[100px] animate-[pulse_8s_ease-in-out_infinite_2s]" />
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
            stroke="#6366f1"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M200 300 H450 L490 260 H750 L790 300 H1200"
            stroke="#6366f1"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 450 H150 L190 410 H420 L460 450 H700"
            stroke="#8b5cf6"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M800 80 H1000 L1040 120 H1200"
            stroke="#6366f1"
            strokeWidth="1"
            fill="none"
          />
          <path d="M340 0 V160" stroke="#6366f1" strokeWidth="1" fill="none" />
          <path d="M640 0 V120" stroke="#6366f1" strokeWidth="1" fill="none" />
          <path
            d="M490 260 V600"
            stroke="#8b5cf6"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M1040 120 V600"
            stroke="#6366f1"
            strokeWidth="0.8"
            fill="none"
          />
          <circle cx="340" cy="160" r="3" fill="#818cf8" opacity="0.8" />
          <circle cx="640" cy="120" r="3" fill="#818cf8" opacity="0.8" />
          <circle cx="490" cy="260" r="3" fill="#6366f1" opacity="0.8" />
          <circle cx="790" cy="300" r="3" fill="#818cf8" opacity="0.6" />
          <circle cx="1040" cy="120" r="3" fill="#6366f1" opacity="0.8" />
          <circle
            cx="340"
            cy="160"
            r="8"
            fill="none"
            stroke="#818cf8"
            strokeWidth="0.5"
            opacity="0.4"
          />
          <circle
            cx="490"
            cy="260"
            r="8"
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>

        {/* Scan line */}
        <div className="absolute inset-x-0 h-px bg-linear-to-r from-transparent via-indigo-400/40 to-transparent animate-[scan_6s_linear_infinite]" />

        {/* Noise overlay */}
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

      {/* ── Terminal 1: ERP Module config (back-right) ── */}
      {/* ── ERP Dashboard UI Screen (replaces terminal) ── */}
      <div className="absolute right-70 top-1/2 -translate-y-1/2 hidden lg:block w-85 select-none pointer-events-none">
        <div className="rounded-xl border border-indigo-500/20 bg-[#030f1e]/95 backdrop-blur-sm shadow-[0_0_60px_rgba(99,102,241,0.15)] overflow-hidden">
          {/* ── Title bar ── */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-indigo-900/40 bg-[#020a15]/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-indigo-300/60 font-mono">
                Dorii ERP · Live
              </span>
            </div>
            <div className="flex items-center gap-1 text-indigo-400/30">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect
                  x="1"
                  y="1"
                  width="8"
                  height="8"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 2l6 6M8 2l-6 6"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          {/* ── Top nav tabs ── */}
          <div className="flex items-center gap-0 border-b border-indigo-900/30 bg-[#020a15]/40 px-3">
            {["Dashboard", "Transport", "Warehouse", "GST"].map((tab, i) => (
              <div
                key={tab}
                className={`px-3 py-2 text-[10px] font-mono border-b-2 cursor-default ${
                  i === 0
                    ? "text-indigo-300 border-indigo-500"
                    : "text-indigo-500/40 border-transparent"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="p-4 space-y-3">
            {/* ── KPI row ── */}
            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  label: "Trips Today",
                  value: "47",
                  change: "+6",
                  up: true,
                  color: "text-indigo-400",
                },
                {
                  label: "Orders",
                  value: "1,284",
                  change: "+12%",
                  up: true,
                  color: "text-violet-400",
                },
                {
                  label: "Stock Health",
                  value: "98%",
                  change: "↑3%",
                  up: true,
                  color: "text-emerald-400",
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="bg-indigo-950/60 border border-indigo-800/30 rounded-lg p-2.5"
                >
                  <p className="text-indigo-400/50 text-[9px] font-mono mb-1 uppercase tracking-wide">
                    {kpi.label}
                  </p>
                  <p className={`text-base font-bold font-mono ${kpi.color}`}>
                    {kpi.value}
                  </p>
                  <p className="text-emerald-400/70 text-[9px] mt-0.5 font-mono">
                    {kpi.change}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Sparkline chart ── */}
            <div className="bg-indigo-950/60 border border-indigo-800/30 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-indigo-300/60 font-mono">
                  Revenue · FY 2025
                </span>
                <span className="text-[9px] text-emerald-400 font-mono bg-emerald-400/10 px-1.5 py-0.5 rounded">
                  ↑ 24% YoY
                </span>
              </div>
              <svg viewBox="0 0 260 52" className="w-full" fill="none">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line
                  x1="0"
                  y1="13"
                  x2="260"
                  y2="13"
                  stroke="#6366f1"
                  strokeWidth="0.3"
                  strokeOpacity="0.2"
                />
                <line
                  x1="0"
                  y1="26"
                  x2="260"
                  y2="26"
                  stroke="#6366f1"
                  strokeWidth="0.3"
                  strokeOpacity="0.2"
                />
                <line
                  x1="0"
                  y1="39"
                  x2="260"
                  y2="39"
                  stroke="#6366f1"
                  strokeWidth="0.3"
                  strokeOpacity="0.2"
                />
                {/* Area */}
                <path
                  d="M0 42 L22 38 L44 40 L66 28 L88 32 L110 18 L132 22 L154 12 L176 16 L198 8 L220 10 L242 4 L260 6 L260 52 L0 52Z"
                  fill="url(#areaGrad)"
                />
                {/* Line */}
                <path
                  d="M0 42 L22 38 L44 40 L66 28 L88 32 L110 18 L132 22 L154 12 L176 16 L198 8 L220 10 L242 4 L260 6"
                  stroke="#818cf8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Active dot */}
                <circle cx="260" cy="6" r="3" fill="#818cf8" />
                <circle
                  cx="260"
                  cy="6"
                  r="6"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="0.8"
                  strokeOpacity="0.4"
                />
                {/* Month labels */}
                {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m, i) => (
                  <text
                    key={m}
                    x={i * 48 + 2}
                    y="52"
                    fill="#6366f1"
                    fillOpacity="0.35"
                    fontSize="7"
                    fontFamily="monospace"
                  >
                    {m}
                  </text>
                ))}
              </svg>
            </div>

            {/* ── Active trips table ── */}
            <div className="bg-indigo-950/60 border border-indigo-800/30 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-indigo-900/30">
                <span className="text-[10px] text-indigo-300/60 font-mono">
                  Active Trips
                </span>
                <span className="text-[9px] text-indigo-400/40 font-mono">
                  Live · 3 running
                </span>
              </div>
              <div className="divide-y divide-indigo-900/20">
                {[
                  {
                    lr: "LR-2841",
                    route: "Siliguri→Kolkata",
                    status: "In Transit",
                    pct: 68,
                  },
                  {
                    lr: "LR-2840",
                    route: "Siliguri→Guwahati",
                    status: "Loading",
                    pct: 20,
                  },
                  {
                    lr: "LR-2839",
                    route: "Siliguri→Delhi",
                    status: "Delivered",
                    pct: 100,
                  },
                ].map((trip) => (
                  <div key={trip.lr} className="px-3 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-indigo-300/80 font-mono font-bold">
                          {trip.lr}
                        </span>
                        <span className="text-[9px] text-indigo-400/40 font-mono">
                          {trip.route}
                        </span>
                      </div>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                          trip.status === "Delivered"
                            ? "text-emerald-400 bg-emerald-400/10"
                            : trip.status === "In Transit"
                              ? "text-indigo-300 bg-indigo-400/10"
                              : "text-amber-400 bg-amber-400/10"
                        }`}
                      >
                        {trip.status}
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          trip.status === "Delivered"
                            ? "bg-emerald-500"
                            : "bg-indigo-500"
                        }`}
                        style={{ width: `${trip.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Bottom status row ── */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] text-emerald-400/70 font-mono">
                    GST Synced
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="text-[9px] text-indigo-400/50 font-mono">
                    e-Way: Active
                  </span>
                </div>
              </div>
              <span className="text-[9px] text-indigo-500/30 font-mono">
                v3.1.0
              </span>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute -top-3 -left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          50+ Businesses
        </div>
        <div className="absolute -bottom-3 -right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          GST Compliant
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full  max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-xs font-mono tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Trusted by Businesses in Siliguri &amp; North Bengal
        </div>

        <h1 className="text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
          <strong className="font-extrabold">
            Custom Software Development Company
          </strong>{" "}
          —<br />
          <span className="bg-linear-to-r from-brand-300 via-cyan-300 to-brand-300 bg-clip-text text-transparent grad-anim">
            ERP, Automation &amp; Enterprise Apps
          </span>
          <br />
          <span className="text-white/80 text-3xl lg:text-4xl font-semibold">
            for India &amp; Global Businesses
          </span>
        </h1>

        <p className="text-blue-200/70 text-lg leading-relaxed mb-8 max-w-xl">
          {" "}
          Dorii Software builds
          <strong className="text-white font-semibold">
            custom ERP systems
          </strong>
          ,{" "}
          <strong className="text-white font-semibold">
            business automation platforms
          </strong>
          , and{" "}
          <strong className="text-white font-semibold">
            enterprise web applications{" "}
          </strong>
          tailored to real business workflows. From Transport TMS and Warehouse
          WMS to HR, Finance, CRM and fully custom platforms — we build scalable
          software that fits your exact operations.
        </p>

        {/* Trust pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            DPIIT-Recognized Startup
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Govt. MSME Certified
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono">
            📍 Siliguri, West Bengal
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-600/30"
          >
            Get Free Consultation
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
          <a
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
          >
            Explore Solutions
          </a>
          <a
            href="https://wa.me/919732939123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a8.6 8.6 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
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
};

export default Hero;

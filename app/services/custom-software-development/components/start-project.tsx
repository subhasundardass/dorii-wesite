export default function StartYourProject() {
  return (
    <section id="start-project" className="mb-20 scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-14 border border-white/10">
        {/* Glow Background */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

        {/* Content */}
        <div className="relative flex flex-col items-center text-center gap-8">
          {/* Icon */}
          <div className="w-18 h-18 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
              <circle cx="20" cy="20" r="14" fill="#BFDBFE" opacity="0.3" />
              <path
                d="M14 20 C14 16 17 13 20 13 C23 13 26 16 26 20 C26 23 24 25.5 21 26.5 L21 28 L19 28 L19 26.5 C16 25.5 14 23 14 20Z"
                fill="#BFDBFE"
              />
              <circle cx="20" cy="20" r="3" fill="#3B82F6" />
            </svg>
          </div>

          {/* Heading */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Ready to build{" "}
              <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                software that actually works?
              </span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              Tell us about your idea or business requirement. We'll respond
              within 24 hours with a **clear technical plan and cost estimate**
              — no pushy sales calls.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: "⚡", label: "Reply within 24 hrs" },
              { icon: "💬", label: "Free consultation" },
              { icon: "📄", label: "Written estimate" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition"
              >
                <span>{item.icon}</span>
                <span className="text-white text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919732939123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-7 py-3 rounded-xl shadow-lg shadow-green-500/20 transition-all duration-200 hover:scale-[1.03]"
            >
              💬 WhatsApp Us
            </a>

            {/* Contact */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-sm px-7 py-3 rounded-xl backdrop-blur-md transition-all duration-200 hover:scale-[1.03]"
            >
              📄 Contact Form
            </a>
          </div>

          {/* Bottom reassurance */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-500 mt-2">
            <span>📍 Siliguri, India</span>
            <span>•</span>
            <span>🌏 Serving clients worldwide</span>
            <span>•</span>
            <span>⭐ 15+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

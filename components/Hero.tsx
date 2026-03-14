export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-stone-950 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-amber-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-green-800/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-stone-800/30 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-stone-800/80 border border-stone-700 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-stone-300 text-sm font-medium">
            Open-Source ML Pipeline · Katmai National Park &amp; Preserve
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Wildlife AI at the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Edge of the Wild
          </span>
        </h1>

        <p className="text-stone-400 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
          A full-stack, open-source computer-vision pipeline for detecting and
          tracking{" "}
          <span className="text-amber-400 font-semibold">
            Alaskan brown bears
          </span>{" "}
          across any footage — any angle, occlusion, or distance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demo"
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base px-8 py-3.5 rounded-full transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 hover:scale-105"
          >
            Try the Demo →
          </a>
          <a
            href="https://github.com/katmai-vision-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all hover:scale-105"
          >
            View on GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "100 %", label: "Open Source" },
            { value: "Any angle", label: "Camera Flexibility" },
            { value: "Real-time", label: "Inference Speed" },
            { value: "Katmai NP", label: "Primary Dataset" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 flex flex-col items-center"
            >
              <span className="text-amber-400 font-bold text-xl">
                {stat.value}
              </span>
              <span className="text-stone-400 text-xs mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce text-stone-500">
        <span className="text-xs">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

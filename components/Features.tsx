const features = [
  {
    status: "live",
    badge: "Live",
    badgeColor: "bg-green-500/20 text-green-400 border border-green-500/30",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Bear Detection & Localisation",
    description:
      "Detects individual Alaskan brown bears in every frame using a fine-tuned detection model. Robust to occlusion, extreme distances, adverse weather, and crowded scenes at Brooks Falls.",
    bullets: [
      "Works across all park camera angles",
      "Handles dense crowds of bears",
      "Accurate in rain, fog, and low light",
    ],
  },
  {
    status: "live",
    badge: "Live",
    badgeColor: "bg-green-500/20 text-green-400 border border-green-500/30",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Multi-Bear Tracking",
    description:
      "Maintains consistent identity for every bear across the full video stream, even through occlusion events, exits, and re-entries into frame.",
    bullets: [
      "Persistent IDs across frames",
      "Re-identification after occlusion",
      "Frame-by-frame trajectory logging",
    ],
  },
  {
    status: "roadmap",
    badge: "Coming Soon",
    badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.249 2.249 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643" />
      </svg>
    ),
    title: "Salmon Detection",
    description:
      "The next major module will detect sockeye salmon in the river — enabling the system to track what the bears are actually feeding on and when the fish are most abundant.",
    bullets: [
      "Underwater & surface detection",
      "Salmon count estimates per frame",
      "Feeding event correlation with bears",
    ],
  },
  {
    status: "roadmap",
    badge: "Coming Soon",
    badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Feeding Behavior Analysis",
    description:
      "By correlating bear positions with salmon detections, the system will derive rich behavioral insights — catch rates, feeding durations, dominance hierarchies, and more.",
    bullets: [
      "Per-bear feeding event timeline",
      "Dominance & competition scoring",
      "Exportable behavioral datasets",
    ],
  },
  {
    status: "roadmap",
    badge: "Coming Soon",
    badgeColor: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Weather Correlation Analysis",
    description:
      "Historical and real-time weather data will be overlaid with detection logs to surface how temperature, precipitation, and river levels drive bear activity patterns.",
    bullets: [
      "Temperature & activity heatmaps",
      "Precipitation vs. bear presence",
      "Multi-year seasonal trend analysis",
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-stone-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Pipeline Features
          </span>
          <h2 className="text-white text-4xl font-bold mt-3 mb-4">
            Everything the Pipeline Can Do
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            From raw video to rich ecological insight — a modular system you can
            deploy, extend, and contribute to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`relative bg-stone-900 border rounded-2xl p-6 flex flex-col gap-4 transition-all hover:scale-[1.02] ${
                f.status === "live"
                  ? "border-stone-700 hover:border-amber-500/40"
                  : "border-stone-800 opacity-90 hover:opacity-100"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="text-amber-400">{f.icon}</div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${f.badgeColor}`}
                >
                  {f.badge}
                </span>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>

              <ul className="mt-auto space-y-1.5">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-stone-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4">
            <span className="text-4xl">🔬</span>
            <h3 className="text-white font-semibold text-lg">
              Built to Be Extended
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Every module is independently deployable. Adapt it for any
              wildlife species or environment.
            </p>
            <a
              href="https://github.com/katmai-vision-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 text-sm font-semibold underline underline-offset-2"
            >
              Fork on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

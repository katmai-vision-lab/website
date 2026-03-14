const milestones = [
  {
    phase: "Phase 1",
    status: "complete",
    title: "Bear Detection",
    items: [
      "Dataset collection & annotation",
      "Fine-tuned detection model (any angle)",
      "Inference pipeline deployment",
      "Public model release on Hugging Face",
    ],
  },
  {
    phase: "Phase 2",
    status: "complete",
    title: "Multi-Bear Tracking",
    items: [
      "Multi-object tracker integration",
      "Persistent ID across frames",
      "Re-identification after occlusion",
      "Trajectory export tooling",
    ],
  },
  {
    phase: "Phase 3",
    status: "in-progress",
    title: "Salmon Detection",
    items: [
      "Salmon annotation & dataset prep",
      "Underwater & surface detection model",
      "Salmon count per frame metric",
      "Integration with bear tracker",
    ],
  },
  {
    phase: "Phase 4",
    status: "planned",
    title: "Feeding Behavior Analysis",
    items: [
      "Feeding event detection logic",
      "Per-bear timeline generation",
      "Dominance hierarchy scoring",
      "Exportable behavioral dataset",
    ],
  },
  {
    phase: "Phase 5",
    status: "planned",
    title: "Weather Correlation",
    items: [
      "NOAA weather API integration",
      "Activity-weather correlation model",
      "Multi-year seasonal visualizations",
      "Open research dashboard",
    ],
  },
];

const statusConfig: Record<string, { label: string; dot: string; line: string }> = {
  complete: {
    label: "Complete",
    dot: "bg-green-500",
    line: "bg-green-500",
  },
  "in-progress": {
    label: "In Progress",
    dot: "bg-amber-400 animate-pulse",
    line: "bg-amber-400",
  },
  planned: {
    label: "Planned",
    dot: "bg-stone-600",
    line: "bg-stone-700",
  },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-stone-900 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Roadmap
          </span>
          <h2 className="text-white text-4xl font-bold mt-3 mb-4">
            Where We&apos;re Going
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            A five-phase journey from bear detection to full ecosystem
            intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-700 hidden sm:block" />

          <div className="space-y-10">
            {milestones.map((m) => {
              const cfg = statusConfig[m.status];
              return (
                <div key={m.phase} className="sm:pl-16 relative">
                  {/* Dot */}
                  <div
                    className={`absolute left-4 top-5 w-4 h-4 rounded-full border-2 border-stone-950 ${cfg.dot} hidden sm:block`}
                  />

                  <div
                    className={`bg-stone-800/60 border rounded-2xl p-6 ${
                      m.status === "complete"
                        ? "border-green-500/20"
                        : m.status === "in-progress"
                        ? "border-amber-500/30"
                        : "border-stone-700"
                    }`}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                      <div>
                        <span className="text-stone-500 text-xs font-semibold uppercase tracking-widest">
                          {m.phase}
                        </span>
                        <h3 className="text-white font-bold text-xl mt-0.5">
                          {m.title}
                        </h3>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          m.status === "complete"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : m.status === "in-progress"
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            : "bg-stone-700 text-stone-400 border border-stone-600"
                        }`}
                      >
                        {cfg.label}
                      </span>
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-2">
                      {m.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-stone-400 text-sm"
                        >
                          {m.status === "complete" ? (
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-500 flex-shrink-0" />
                          )}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

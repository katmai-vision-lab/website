export default function About() {
  return (
    <section id="about" className="bg-stone-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
              About the Project
            </span>
            <h2 className="text-white text-4xl font-bold mt-3 mb-6 leading-snug">
              A Complete Wildlife Vision Pipeline for Katmai
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-6">
              Every summer, hundreds of brown bears gather at Brooks Falls in
              Katmai National Park and Preserve, Alaska, to feast on sockeye
              salmon — one of nature&apos;s most spectacular events. Katmai Vision
              Lab is building a fully open-source machine-learning pipeline to
              study and understand this ecosystem at scale.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              From raw footage captured at any angle, distance, or lighting
              condition, our system detects individual bears, tracks their
              movements, and — soon — cross-references salmon activity and
              weather data to uncover behavioral patterns never before
              quantifiable at this resolution.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Computer Vision",
                "Object Detection",
                "Multi-object Tracking",
                "Wildlife Ecology",
                "Open Data",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-stone-800 border border-stone-700 text-stone-300 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                emoji: "🏔️",
                title: "Katmai National Park",
                body: "Over 4 million acres of pristine Alaskan wilderness, home to one of the world's highest concentrations of brown bears.",
              },
              {
                emoji: "📷",
                title: "Multi-view Footage",
                body: "The pipeline handles footage from park webcams, research cameras, and uploaded clips — any perspective works.",
              },
              {
                emoji: "🧠",
                title: "State-of-the-art Models",
                body: "Fine-tuned detection and tracking models trained on thousands of annotated frames from real Katmai footage.",
              },
              {
                emoji: "🌍",
                title: "Open Science",
                body: "All weights, datasets, and code are released publicly. Built to be forked, extended, and applied to other wildlife.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-stone-800/60 border border-stone-700 rounded-2xl p-5 hover:border-amber-500/40 transition-colors"
              >
                <div className="text-3xl mb-3">{card.emoji}</div>
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

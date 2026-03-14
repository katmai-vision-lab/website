export default function Demo() {
  // Replace with your actual Hugging Face Space slug once published, e.g.:
  // "katmai-vision-lab/bear-tracker"
  const hfSpaceSlug = "katmai-vision-lab/bear-tracker";
  const hfEmbedUrl = `https://huggingface.co/spaces/${hfSpaceSlug}`;
  const hfIframeUrl = `${hfEmbedUrl}?embed=true`;

  return (
    <section id="demo" className="bg-stone-950 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
            Interactive Demo
          </span>
          <h2 className="text-white text-4xl font-bold mt-3 mb-4">
            Try the Bear Detector
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Upload any footage or image from Katmai — or try one of our sample
            clips — and see the pipeline detect and track bears in real time.
          </p>
        </div>

        {/* HuggingFace embed */}
        <div className="bg-stone-900 border border-stone-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-5 py-3 bg-stone-800 border-b border-stone-700">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-stone-400 text-sm font-mono flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 14.5v-9l7 4.5-7 4.5z" />
              </svg>
              huggingface.co/spaces/{hfSpaceSlug}
            </span>
            <a
              href={hfEmbedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-stone-400 hover:text-amber-400 transition-colors text-xs font-medium flex items-center gap-1"
            >
              Open full page
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="relative w-full" style={{ height: "700px" }}>
            <iframe
              src={hfIframeUrl}
              title="Katmai Bear Tracker – Hugging Face Space"
              className="w-full h-full border-0"
              allow="accelerometer; camera; microphone; clipboard-read; clipboard-write"
              loading="lazy"
            />
          </div>
        </div>

        {/* Fallback / note */}
        <p className="text-center text-stone-500 text-sm mt-5">
          The demo runs on Hugging Face Spaces. If the embed doesn&apos;t load,{" "}
          <a
            href={hfEmbedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            open it directly ↗
          </a>
        </p>

        {/* Secondary CTA cards */}
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🤗",
              title: "Hugging Face",
              desc: "Models, datasets, and the live demo — all on our Hugging Face organisation.",
              href: `https://huggingface.co/${hfSpaceSlug.split("/")[0]}`,
              cta: "Visit HF org →",
            },
            {
              icon: "💻",
              title: "GitHub",
              desc: "Full pipeline source, training scripts, and evaluation notebooks.",
              href: "https://github.com/katmai-vision-lab",
              cta: "Explore repo →",
            },
            {
              icon: "📊",
              title: "Dataset",
              desc: "Annotated Katmai footage released as a public dataset for researchers.",
              href: `https://huggingface.co/datasets/${hfSpaceSlug.split("/")[0]}`,
              cta: "Download dataset →",
            },
          ].map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 border border-stone-700 rounded-2xl p-5 flex flex-col gap-3 hover:border-amber-500/40 transition-all hover:scale-[1.02]"
            >
              <span className="text-3xl">{card.icon}</span>
              <div>
                <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <span className="text-amber-400 text-sm font-medium mt-auto">
                {card.cta}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

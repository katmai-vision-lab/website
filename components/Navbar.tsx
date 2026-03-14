import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#demo", label: "Demo" },
    { href: "#roadmap", label: "Roadmap" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐻</span>
            <span className="text-white font-bold text-lg tracking-tight">
              Katmai Vision Lab
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-stone-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#demo"
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
            >
              Try the Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-stone-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-stone-800 flex flex-col gap-3 pb-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-stone-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm px-4 py-2 rounded-full transition-colors self-start"
            >
              Try the Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

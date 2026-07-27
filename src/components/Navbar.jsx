import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#programs" },
  { label: "Admissions", href: "#programs" },
  { label: "Campus Life", href: "#campus-life" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-full border border-marigold flex items-center justify-center">
            <span className="font-display text-marigold text-sm">KIS</span>
          </span>
          <span className="font-display text-sage text-base sm:text-lg tracking-tight">
            Krishna International
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-sage/80 hover:text-marigold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#programs"
            className="font-mono text-xs uppercase tracking-wider bg-marigold text-ink px-4 py-2.5 rounded-sm hover:bg-marigold-dark transition-colors"
          >
            Enroll now
          </a>
        </div>

        <button
          className="md:hidden text-sage p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-sage/10 px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-sage/85 text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#programs"
            onClick={() => setOpen(false)}
            className="font-mono text-xs uppercase tracking-wider bg-marigold text-ink px-4 py-3 rounded-sm text-center"
          >
            Enroll now
          </a>
        </div>
      )}
    </header>
  );
}

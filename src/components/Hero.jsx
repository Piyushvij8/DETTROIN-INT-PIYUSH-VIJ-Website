import Seal from "./Seal";
import CampusArt from "./CampusArt";

const CHIPS = ["CBSE Affiliated", "5-Acre Campus", "60+ Awards"];

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* ambient glow, subtle — not the whole page */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 w-[560px] h-[560px] rounded-full bg-marigold/10 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="eyebrow text-marigold mb-5">
            Aligarh, Uttar Pradesh &middot; Est. campus of 5 acres
          </p>
          <h1 className="font-display text-sage text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.03]">
            Let's explore the{" "}
            <span className="italic text-marigold">limitless</span>{" "}
            possibilities of knowledge.
          </h1>
          <p className="mt-6 text-sage/70 text-lg leading-relaxed max-w-md">
            High-quality teaching for intellectually curious, self-motivated
            children — set amidst 5 acres of green campus, away from the
            city's pollution.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#programs" className="btn-primary">
              Begin admission
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sage/80 font-body text-sm border-b border-sage/30 pb-0.5 hover:border-marigold hover:text-marigold transition-colors"
            >
              Discover the campus
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {CHIPS.map((c) => (
              <span key={c} className="flex items-center gap-2 text-sage/50 text-xs font-mono uppercase tracking-wider">
                <span className="w-1 h-1 rounded-full bg-marigold" />
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <CampusArt className="w-full h-auto rounded-xl shadow-2xl shadow-black/40" />
          <Seal className="absolute -bottom-10 -left-8 w-32 h-32 sm:w-40 sm:h-40 -rotate-6 drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

const STATS = [
  { value: "6,000+", label: "Students & faculty" },
  { value: "60+", label: "National & international awards" },
  { value: "100%", label: "Parent satisfaction" },
  { value: "CBSE", label: "Affiliated curriculum" },
];

export default function StatStrip() {
  return (
    <section className="bg-sage border-y border-ink/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-ink/10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="py-10 px-6 text-center md:text-left">
                <p className="font-display text-4xl sm:text-[2.75rem] text-ink">{s.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-forest">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

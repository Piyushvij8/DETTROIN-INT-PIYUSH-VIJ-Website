import Reveal from "./Reveal";
import FacilityArt from "./FacilityArt";

const FACILITIES = [
  { name: "Library", type: "library" },
  { name: "Science labs", type: "labs" },
  { name: "Theatre", type: "theatre" },
  { name: "Sports fields", type: "sports" },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">
      <Reveal>
        <p className="eyebrow mb-4">About the school</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
          Dedicated to excellence, on and off the timetable.
        </h2>
        <p className="mt-6 text-ink/70 leading-relaxed">
          Amongst the best CBSE schools in Aligarh, Krishna International
          School sits on 5 acres of land, away from the city's pollution —
          giving students room to think, play, and grow. The campus is built
          around an equipped library, science laboratories, a theatre, and
          sports facilities that support both academic and co-curricular
          excellence.
        </p>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Beyond the classroom, regular counselling gives students insight
          into the world ahead, while a strong emphasis on moral values and
          cultural heritage shapes their sense of responsibility — in keeping
          with the school's motto: dedicated to excellence.
        </p>
        <a
          href="#programs"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-forest border-b border-forest/40 pb-1 hover:border-forest"
        >
          See how learning is structured &rarr;
        </a>
      </Reveal>

      <Reveal delay={120}>
        <div className="grid grid-cols-2 gap-4">
          {FACILITIES.map((f, i) => (
            <div
              key={f.name}
              className={`group relative rounded-md overflow-hidden aspect-[4/5] ${
                i % 2 === 1 ? "mt-8" : ""
              } transition-transform duration-300 hover:-translate-y-1 shadow-sm`}
            >
              <FacilityArt type={f.type} id={`facility-${f.type}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-dark/70 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-end p-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-sage">
                  {f.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

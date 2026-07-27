import { useState } from "react";
import Reveal from "./Reveal";
import FacilityArt from "./FacilityArt";

const ADMISSION_STEPS = [
  { step: "01", title: "Submit enquiry", detail: "Share your child's details through the enquiry form or admission office." },
  { step: "02", title: "Document verification", detail: "Birth certificate, previous school records, and transfer certificate (if applicable)." },
  { step: "03", title: "Student interaction", detail: "An informal, age-appropriate interaction — not a pass/fail exam." },
  { step: "04", title: "Confirmation & fee payment", detail: "Seat confirmed on receipt of the admission fee via the online portal." },
];

const FOLDERS = [
  {
    key: "academics",
    tab: "Academics",
    title: "Structured for curiosity",
    body: "A clear academic structure from foundational years through senior school, with subject specialists, regular examinations, and teaching methodology designed around student engagement, not rote memorisation.",
    points: ["Academic structure & curriculum", "Examination & promotion policy", "Career guidance"],
  },
  {
    key: "admission",
    tab: "Admission",
    title: "A straightforward process",
    body: "Krishna International School welcomes students from diverse social and cultural backgrounds who show a genuine desire to learn and grow. Here's exactly what happens, in order:",
    steps: ADMISSION_STEPS,
  },
  {
    key: "cocurricular",
    tab: "Co-Curricular",
    title: "Beyond the classroom",
    body: "Sports and life skills, performing arts, fine arts, excursions, and community engagement — built to keep the learning environment responsive, exciting, and connected to the world outside.",
    points: ["Sports & life skills", "Performing & fine arts", "Excursions & community engagement"],
  },
  {
    key: "gallery",
    tab: "Gallery",
    title: "Life on campus",
    body: "Every student is encouraged to express themselves creatively and work collaboratively — captured across school events, competitions, and everyday campus moments.",
    points: ["School events", "Student showcases", "Follow along on Instagram"],
    gallery: [
      { type: "event", label: "Annual Day" },
      { type: "art", label: "Fine Arts" },
      { type: "campus", label: "Campus Grounds" },
    ],
  },
];

export default function Programs() {
  const [active, setActive] = useState(FOLDERS[0].key);
  const current = FOLDERS.find((f) => f.key === active);

  return (
    <section id="programs" className="bg-forest py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow text-marigold mb-4">What's inside</p>
          <h2 className="font-display text-3xl sm:text-4xl text-sage leading-tight max-w-lg">
            Four folders. One school.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-1" role="tablist" aria-label="School program categories">
          {FOLDERS.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === f.key}
              onClick={() => setActive(f.key)}
              className={`font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-t-md transition-colors ${
                active === f.key
                  ? "bg-sage text-ink"
                  : "bg-forest-light/40 text-sage/70 hover:bg-forest-light/60"
              }`}
            >
              {f.tab}
            </button>
          ))}
        </div>

        <div className="bg-sage rounded-b-lg rounded-tr-lg p-8 sm:p-12">
          {current.steps ? (
            <div>
              <div className="max-w-xl mb-10">
                <h3 className="font-display text-2xl text-ink mb-4">{current.title}</h3>
                <p className="text-ink/70 leading-relaxed">{current.body}</p>
              </div>
              <ol className="grid sm:grid-cols-2 gap-6">
                {current.steps.map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="font-mono text-marigold-dark text-sm shrink-0 pt-0.5">{s.step}</span>
                    <div>
                      <p className="font-display text-lg text-ink">{s.title}</p>
                      <p className="text-ink/60 text-sm mt-1 leading-relaxed">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
              <div>
                <h3 className="font-display text-2xl text-ink mb-4">{current.title}</h3>
                <p className="text-ink/70 leading-relaxed">{current.body}</p>
                {current.gallery && (
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {current.gallery.map((g) => (
                      <div key={g.type} className="relative rounded-md overflow-hidden aspect-[4/5]">
                        <FacilityArt type={g.type} id={`gallery-${g.type}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-dark/70 via-transparent to-transparent" />
                        <span className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-wider text-sage">
                          {g.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <ul className="space-y-3 border-l border-ink/10 pl-6">
                {current.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 font-body text-sm text-ink/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-marigold mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

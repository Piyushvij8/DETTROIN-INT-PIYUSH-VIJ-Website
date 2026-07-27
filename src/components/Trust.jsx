import Reveal from "./Reveal";

export default function Trust() {
  return (
    <section id="campus-life" className="bg-ink py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <span className="font-display text-6xl text-marigold leading-none">&ldquo;</span>
          <p className="font-display text-2xl sm:text-3xl text-sage leading-snug -mt-4">
            A campus where children build the confidence to compete — and the
            character to stay grounded while they do it.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-marigold" />
            <p className="font-mono text-xs uppercase tracking-wider text-sage/60">
              From the Principal's message
            </p>
            <span className="w-8 h-px bg-marigold" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/reveal";

export function Manifesto() {
  return (
    <section
      id="work"
      className="relative border-t border-line-soft py-24 md:py-40"
    >
      <div className="mx-auto grid max-w-(--container-wide) gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-4">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
            What we do
          </p>
        </Reveal>

        <div className="md:col-span-8 space-y-10">
          <Reveal delay={80}>
            <p className="text-balance font-serif text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.15] tracking-[-0.02em] text-ink">
              We design and build software that designs and builds software.
              Production agents, internal tooling, custom model orchestration —
              for teams shipping the next decade of products.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-2xl text-[1.0625rem] leading-[1.7] text-ink-muted">
              Most teams don&rsquo;t need another wrapper. They need a small group
              of engineers who&rsquo;ve already paid the costs — evals, fallbacks,
              latency, retrieval, observability — and can compress a six-month
              roadmap into a six-week build.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line-soft pt-8 md:grid-cols-4">
              {[
                ["12+", "production agents shipped"],
                ["6 wk", "median engagement"],
                ["1.5×", "feature velocity uplift"],
                ["24/7", "on-call coverage"],
              ].map(([num, label]) => (
                <div key={label as string}>
                  <dt className="font-serif text-[2rem] leading-none tracking-[-0.02em] text-ink">
                    {num}
                  </dt>
                  <dd className="mt-2 text-[0.8125rem] leading-snug text-ink-muted">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

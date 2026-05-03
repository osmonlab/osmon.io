import { Reveal } from "@/components/reveal";

const stats: Array<[string, string, string]> = [
  ["12+", "production agents shipped", "Across seven client engagements, 2025–2026"],
  ["6 wk", "median engagement", "From kick-off to first production rollout"],
  ["1.5×", "feature velocity uplift", "Median across teams that ran the rollout 90+ days"],
  ["24/7", "on-call coverage", "On retainer engagements only; quarterly drill recorded"],
];

export function Manifesto() {
  return (
    <section
      id="work"
      className="relative py-24 md:py-40"
    >
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
            06 — What we do
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-10 text-balance font-serif text-[clamp(1.875rem,3.8vw,3.125rem)] leading-[1.15] tracking-[-0.02em] text-ink">
            We design and build software that designs and builds software.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-10 max-w-2xl text-pretty text-[1.0625rem] leading-[1.7] text-ink-muted md:text-[1.125rem]">
            Production agents, internal tooling, custom model orchestration —
            for teams shipping the next decade of products. Most teams don&rsquo;t
            need another wrapper. They need a small group of engineers who&rsquo;ve
            already paid the costs and can compress a six-month roadmap into a
            six-week build.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <figure className="mx-auto my-16 max-w-2xl border-l-2 border-sky pl-6 text-left">
            <blockquote className="font-serif text-[clamp(1.375rem,2.4vw,1.75rem)] italic leading-[1.4] text-ink">
              We&rsquo;re hired to compress the distance between &ldquo;works on
              my laptop&rdquo; and &ldquo;survives a real user base.&rdquo;
            </blockquote>
            <figcaption className="mt-3 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-muted">
              — the studio
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={360}>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line-soft pt-10 text-left md:grid-cols-4">
            {stats.map(([num, label, evidence]) => (
              <div
                key={label}
                title={evidence}
                className="cursor-help"
              >
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
    </section>
  );
}

import { Reveal } from "@/components/reveal";

export function Tension() {
  return (
    <section
      id="tension"
      className="relative py-24 md:py-40"
    >
      <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
              01 — The premise
            </p>
          </Reveal>

          <div className="md:col-span-8 space-y-10">
            <Reveal delay={80}>
              <h2 className="text-balance font-serif text-[clamp(1.875rem,4.4vw,3.25rem)] leading-[1.12] tracking-[-0.022em] text-ink">
                Most teams can build an agent demo in a week.
                <span className="block text-ink-muted">
                  Almost none of them can put one in front of a real customer.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="max-w-2xl text-[1.0625rem] leading-[1.7] text-ink-muted">
                The gap is everything that doesn&rsquo;t fit in a video — evals
                that constrain the system before the model drifts, fallback
                paths when the API is down, cost ceilings before the bill
                arrives, observability good enough to know what shipped and
                what regressed. None of it is novel. Most of it is missing.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <ul className="grid gap-x-10 gap-y-3 border-t border-line-soft pt-8 text-[0.9375rem] text-ink-soft md:grid-cols-2">
                {[
                  "Demos that pass eval and fail on the first user",
                  "Agents that double the bill before anyone notices",
                  "Prototypes that can&rsquo;t be rolled back when wrong",
                  "Systems no one else on the team can debug",
                ].map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-sky"
                    />
                    <span dangerouslySetInnerHTML={{ __html: it }} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

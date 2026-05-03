import { Reveal } from "@/components/reveal";

type Phase = {
  marker: string;
  title: string;
  body: string;
  beats: string[];
};

const phases: Phase[] = [
  {
    marker: "Week 0",
    title: "Frame the constraint",
    body:
      "We sit with the team for two days, read the code, ride along on a real workflow, and write the eval that decides whether the project worked. The eval is the spec. Everything that follows is graded against it.",
    beats: ["Pair with the team on existing flow", "Write the eval suite", "Pick the smallest shippable surface"],
  },
  {
    marker: "Week 1 — 3",
    title: "Ship the smallest agent that passes",
    body:
      "End-to-end working system in a feature gate, on real data, behind human review. Cost ceiling. Replay tooling. Fallback path. Observability that the team can read without us in the room.",
    beats: ["Production-grade infra from day one", "Daily eval runs visible to the client", "Rollback is one click"],
  },
  {
    marker: "Week 4 — 6",
    title: "Hand back the controls",
    body:
      "Gradual rollout from 1% to whatever the eval supports. Documentation, runbooks, and a recorded incident drill. We&rsquo;re available on retainer; we&rsquo;re not the only team that can debug it.",
    beats: ["Staged rollout under your gate", "Runbook + incident drill recorded", "Retainer or clean handoff"],
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-40"
    >
      <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
              04 — How we work
            </p>
          </Reveal>
          <Reveal delay={80} className="md:col-span-8">
            <h2 className="text-balance font-serif text-[clamp(1.875rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink">
              Six weeks, three phases, one shipped system.
            </h2>
            <p className="mt-6 max-w-2xl text-[1rem] leading-[1.7] text-ink-muted">
              Most engagements run six weeks end-to-end. The point of the
              cadence is to get the team operating the system before we leave —
              not to leave them with a black box.
            </p>
          </Reveal>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {phases.map((p, i) => (
            <Reveal key={p.marker} delay={i * 100} className="bg-canvas p-8 md:p-10">
              <li className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-sky-pale px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-sky-deep">
                    {p.marker}
                  </span>
                  <span className="font-serif text-[1rem] italic leading-none text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-[clamp(1.375rem,2.4vw,1.75rem)] leading-tight tracking-[-0.015em] text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.65] text-ink-muted">
                  {p.body}
                </p>
                <ul className="mt-6 space-y-2 border-t border-line-soft pt-5 text-[0.8125rem] text-ink-soft">
                  {p.beats.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 inline-block size-1 shrink-0 rounded-full bg-ink-muted/50" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

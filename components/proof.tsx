import Link from "next/link";
import { Reveal } from "@/components/reveal";

type Proof = {
  client: string;
  scope: string;
  metric: string;
  metricLabel: string;
};

const proofs: Proof[] = [
  {
    client: "Lyra Health",
    scope: "Triage agent · 6 wk to prod",
    metric: "28 min",
    metricLabel: "saved per case",
  },
  {
    client: "Northwind Robotics",
    scope: "Repo-aware code agent",
    metric: "3.4×",
    metricLabel: "review throughput",
  },
  {
    client: "Atlas Trading",
    scope: "Research desk copilot",
    metric: "0",
    metricLabel: "hallucinations · 90 days",
  },
];

export function Proof() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
            03 — In production
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {proofs.map((p, i) => (
            <Reveal key={p.client} delay={i * 80} className="bg-canvas p-8 md:p-10">
              <li className="flex h-full flex-col">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink">
                    {p.client}
                  </p>
                  <span className="size-1.5 rounded-full bg-sky" aria-hidden />
                </div>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-muted">
                  {p.scope}
                </p>
                <div className="mt-10 border-t border-line-soft pt-6">
                  <p className="font-serif text-[clamp(2rem,3.6vw,2.75rem)] leading-none tracking-[-0.02em] text-ink">
                    {p.metric}
                  </p>
                  <p className="mt-2 text-[0.8125rem] leading-snug text-ink-muted">
                    {p.metricLabel}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={300}>
          <p className="mt-8 text-[0.875rem] text-ink-muted">
            Most engagements stay private.{" "}
            <Link
              href="/work"
              className="text-ink underline decoration-line underline-offset-[5px] transition hover:text-sky-deep hover:decoration-sky"
            >
              See the full list →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

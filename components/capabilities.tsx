import { Reveal } from "@/components/reveal";
import {
  Cpu,
  Graph,
  PuzzlePiece,
  Waveform,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

type Capability = {
  tag: string;
  title: string;
  body: string;
  icon: Icon;
  span: string;
};

const items: Capability[] = [
  {
    tag: "Build",
    title: "Agentic engineering",
    body:
      "Long-running coding agents that read your repo, propose changes, and ship pull requests under human review. Designed for production codebases — not demos.",
    icon: Cpu,
    span: "md:col-span-7",
  },
  {
    tag: "Research",
    title: "Applied frontier",
    body:
      "Model orchestration, retrieval pipelines, and evals built to a standard that survives a real user base.",
    icon: Graph,
    span: "md:col-span-5",
  },
  {
    tag: "Surface",
    title: "Interfaces humans use",
    body:
      "The thinnest possible layer between your team and what the model can do. Clear inputs, legible outputs, no theatre.",
    icon: PuzzlePiece,
    span: "md:col-span-5",
  },
  {
    tag: "Operate",
    title: "Stay running",
    body:
      "Observability, fallbacks, cost ceilings, and on-call. The half of agentic software nobody puts on the deck.",
    icon: Waveform,
    span: "md:col-span-7",
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative border-t border-line-soft py-24 md:py-40"
    >
      <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
              Capabilities
            </p>
          </Reveal>
          <Reveal delay={80} className="md:col-span-8">
            <h2 className="text-balance font-serif text-[clamp(1.875rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-ink">
              Four practices, one studio.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-12">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 80}
              className={`${it.span} group bg-canvas p-8 transition-colors md:p-10 hover:bg-bone`}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-sky-pale px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-sky-deep">
                    {it.tag}
                  </span>
                  <it.icon
                    size={22}
                    weight="bold"
                    className="text-ink-muted transition-colors group-hover:text-ink"
                  />
                </div>
                <h3 className="mt-10 font-serif text-[clamp(1.375rem,2.2vw,1.75rem)] leading-tight tracking-[-0.015em] text-ink">
                  {it.title}
                </h3>
                <p className="mt-4 max-w-prose text-[0.9375rem] leading-[1.65] text-ink-muted">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

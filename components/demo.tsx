import { Reveal } from "@/components/reveal";
import { CheckCircle, Circle, CircleNotch } from "@phosphor-icons/react/dist/ssr";

type Line =
  | { kind: "prompt"; text: string }
  | { kind: "out"; text: string }
  | { kind: "step"; status: "done" | "running" | "queued"; text: string; detail?: string }
  | { kind: "result"; text: string };

const lines: Line[] = [
  { kind: "prompt", text: "agent run --repo lyra-health/triage --task PR-2841" },
  { kind: "out", text: "↳ planning · 4 steps · est. 11m" },
  { kind: "step", status: "done", text: "Read repo + recent PRs", detail: "238 files indexed · 14m commits scanned" },
  { kind: "step", status: "done", text: "Locate failing eval", detail: "tests/eval/clinician_referral.spec.ts:42 — citation accuracy 91% < 99%" },
  { kind: "step", status: "running", text: "Draft fix + run eval suite", detail: "412 / 1,000 cases · 0 regressions so far" },
  { kind: "step", status: "queued", text: "Open PR for review" },
  { kind: "result", text: "draft saved · awaiting human review · cost $0.42" },
];

const statusIcon = {
  done: CheckCircle,
  running: CircleNotch,
  queued: Circle,
} as const;

export function Demo() {
  return (
    <section className="relative py-24 md:py-40">
      <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
              02 — In motion
            </p>
            <h2 className="mt-4 text-balance font-serif text-[clamp(1.625rem,3.4vw,2.625rem)] leading-[1.15] tracking-[-0.018em] text-ink">
              An agent at the edge of a real PR — not on a slide.
            </h2>
            <p className="mt-6 max-w-md text-[1rem] leading-[1.7] text-ink-muted">
              Every shipped system has a control surface like this — pause,
              roll back, replay, escalate. Reasoning lives in a deeper view;
              the operator stays at the wheel.
            </p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-line bg-ink shadow-[0_24px_60px_-24px_rgba(11,15,20,0.45),0_2px_0_rgba(11,15,20,0.06)]">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <span className="size-2.5 rounded-full bg-white/12" />
                <span className="size-2.5 rounded-full bg-white/12" />
                <span className="size-2.5 rounded-full bg-white/12" />
                <span className="ml-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/40">
                  agent · session 9f5a · LHR
                </span>
              </div>

              <div className="space-y-3 p-6 font-mono text-[0.8125rem] leading-relaxed md:p-8">
                {lines.map((l, i) => {
                  if (l.kind === "prompt") {
                    return (
                      <div key={i} className="flex gap-2 text-white/85">
                        <span className="text-sky">$</span>
                        <span>{l.text}</span>
                      </div>
                    );
                  }
                  if (l.kind === "out") {
                    return (
                      <div key={i} className="pl-4 text-white/55">
                        {l.text}
                      </div>
                    );
                  }
                  if (l.kind === "step") {
                    const Icon = statusIcon[l.status];
                    return (
                      <div key={i} className="flex items-start gap-3 pt-2">
                        <Icon
                          size={14}
                          weight={l.status === "queued" ? "regular" : "fill"}
                          className={
                            l.status === "done"
                              ? "mt-0.5 shrink-0 text-emerald-400"
                              : l.status === "running"
                              ? "mt-0.5 shrink-0 animate-spin text-sky"
                              : "mt-0.5 shrink-0 text-white/30"
                          }
                        />
                        <div className="flex-1 space-y-1">
                          <div
                            className={
                              l.status === "queued"
                                ? "text-white/40"
                                : "text-white/85"
                            }
                          >
                            {l.text}
                          </div>
                          {l.detail ? (
                            <div className="text-[0.75rem] text-white/45">
                              {l.detail}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={i}
                      className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4 text-white/70"
                    >
                      <span className="inline-flex items-center rounded-full bg-emerald-500/14 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-emerald-300">
                        review ready
                      </span>
                      <span>{l.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="mt-4 px-1 text-[0.75rem] leading-relaxed text-ink-muted">
              Illustrative session. Metrics, costs, and project names redacted
              from real engagements.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

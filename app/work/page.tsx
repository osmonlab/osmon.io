import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A small portfolio of agentic systems osmon has shipped — production agents, orchestration layers, and the surfaces around them.",
  alternates: { canonical: "/work" },
};

type Project = {
  client: string;
  year: string;
  scope: string;
  title: string;
  body: string;
  metrics: Array<[string, string]>;
  status: "Live" | "In production" | "Internal";
};

const projects: Project[] = [
  {
    client: "Lyra Health",
    year: "2026",
    scope: "Agent · Orchestration · Evals",
    status: "In production",
    title: "Triage agent for clinician workflows",
    body:
      "An ambient agent reading EMR notes, drafting referral packets, and flagging cases for human review. Shipped behind feature gates with a strict eval suite covering hallucination, citation, and clinician override rates.",
    metrics: [
      ["28 min", "saved per case"],
      ["99.2%", "citation accuracy"],
      ["6 wk", "scope to first prod release"],
    ],
  },
  {
    client: "Northwind Robotics",
    year: "2026",
    scope: "Codegen · CI integration",
    status: "Live",
    title: "Repo-aware code agent for firmware reviews",
    body:
      "PR-time agent that reads diffs, simulates against device profiles, and posts inline review comments. Operates inside the team's existing CI without standing infra.",
    metrics: [
      ["3.4×", "review throughput"],
      ["41%", "regressions caught pre-merge"],
      ["< 8 s", "median review latency"],
    ],
  },
  {
    client: "Atlas Trading",
    year: "2025",
    scope: "Retrieval · Tool use · Surface",
    status: "In production",
    title: "Research desk copilot",
    body:
      "Internal copilot grounded on twelve years of analyst memos with citation enforcement and a tool layer for live market data. Replaced four existing tools without ceremony.",
    metrics: [
      ["12 yrs", "of memos indexed"],
      ["220+", "analysts onboarded"],
      ["0", "hallucination incidents in 90d"],
    ],
  },
  {
    client: "Internal — osmon labs",
    year: "2025",
    scope: "Research",
    status: "Internal",
    title: "Sky — a long-running coding agent",
    body:
      "Our internal agent that ships agent code. Heavy use of evals, replay, and a deliberate rollback layer. Powers most client engagements.",
    metrics: [
      ["12k+", "commits authored"],
      ["94%", "human-merged rate"],
      ["3", "humans needed to operate"],
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title={
          <>
            What we&rsquo;ve <span className="font-light italic">shipped</span> —
            for teams who couldn&rsquo;t wait for the obvious tool to exist.
          </>
        }
        lede="Engagements range from a six-week sprint to a multi-quarter operating partnership. Below is a representative slice of the last twelve months."
      />

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
          <ul className="divide-y divide-line">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <li className="group grid gap-8 py-12 md:grid-cols-12 md:py-16">
                  <div className="md:col-span-3 space-y-2">
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">
                      {p.client}
                    </p>
                    <p className="text-[0.8125rem] text-ink-muted">
                      {p.year} · {p.scope}
                    </p>
                    <span className="inline-flex items-center rounded-full bg-sky-pale px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-sky-deep">
                      {p.status}
                    </span>
                  </div>

                  <div className="md:col-span-9 space-y-6">
                    <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] tracking-[-0.015em] text-ink">
                      {p.title}
                    </h2>
                    <p className="max-w-3xl text-[1rem] leading-[1.7] text-ink-muted">
                      {p.body}
                    </p>
                    <dl className="grid grid-cols-3 gap-x-6 gap-y-2 border-t border-line-soft pt-6">
                      {p.metrics.map(([num, label]) => (
                        <div key={label}>
                          <dt className="font-serif text-[1.625rem] leading-none tracking-[-0.02em] text-ink">
                            {num}
                          </dt>
                          <dd className="mt-1.5 text-[0.75rem] leading-snug text-ink-muted">
                            {label}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="mt-20 flex flex-col items-start gap-4 border-t border-line-soft pt-12 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-[1.0625rem] text-ink-muted">
                Most engagements never make it to a public page. If a fit feels
                possible, ask us directly.
              </p>
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center gap-2 rounded-md bg-ink px-6 text-[0.9375rem] font-medium text-canvas transition-colors hover:bg-ink-soft active:scale-[0.98]"
              >
                Start a conversation
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

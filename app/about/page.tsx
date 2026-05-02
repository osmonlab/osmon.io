import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "osmon is a small studio of engineers building agentic software for production. Tashkent · Remote.",
};

const principles = [
  {
    n: "01",
    title: "Production beats demo",
    body:
      "Every system we ship has fallback paths, cost ceilings, and a rollback. Demos that fall over in front of a real user aren't a deliverable.",
  },
  {
    n: "02",
    title: "Small teams, real shipping cadence",
    body:
      "Two-to-four engineers per engagement. No project management layer between the people writing the code and the people using the result.",
  },
  {
    n: "03",
    title: "Boring infrastructure",
    body:
      "Postgres, queues, observability you can read. The agent is the only novel thing in the stack — everything around it is a known quantity.",
  },
  {
    n: "04",
    title: "Evals before features",
    body:
      "If we can't measure regression, we don't ship the feature. The eval suite is the spec.",
  },
];

const team = [
  {
    name: "The studio",
    role: "Engineers, designers, researchers",
    bio:
      "A small group rotating across engagements. We won't list names here while the lineup is fluid — ask in the call and you'll meet the people who'll be writing your code.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About osmon"
        title={
          <>
            <span className="font-light italic">Osmon</span> means sky in Uzbek.
            We chose it because the ceiling is what matters.
          </>
        }
        lede="osmon is a studio of engineers, designers, and researchers building agentic software for teams that can't afford for it not to work. Based out of Tashkent, working remote-first across Europe and North America."
      />

      <section className="relative py-20 md:py-32">
        <div className="mx-auto grid max-w-(--container-wide) gap-16 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-4">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
              Why we exist
            </p>
          </Reveal>

          <div className="md:col-span-8 space-y-8">
            <Reveal delay={80}>
              <p className="text-balance font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.018em] text-ink">
                Most teams shipping products in 2026 will be operating
                alongside agents. Almost none of them are equipped to do it
                well — the tooling is too new, the evaluation discipline
                isn&rsquo;t there yet, and the people who&rsquo;ve done it
                under load are rare.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-2xl text-[1.0625rem] leading-[1.7] text-ink-muted">
                We work as the in-house agent team for a handful of companies
                each year. Sometimes that means shipping the first thing.
                More often it means inheriting an early prototype and
                turning it into something that survives a real customer base.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative border-t border-line-soft py-20 md:py-32">
        <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
          <div className="mb-14 grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
                Principles
              </p>
            </Reveal>
            <Reveal delay={80} className="md:col-span-8">
              <h2 className="text-balance font-serif text-[clamp(1.875rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink">
                Four rules we don&rsquo;t bend.
              </h2>
            </Reveal>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className="bg-canvas p-8 md:p-10">
                <p className="font-mono text-[0.72rem] tracking-[0.16em] text-ink-muted">
                  {p.n}
                </p>
                <h3 className="mt-6 font-serif text-[clamp(1.25rem,2vw,1.625rem)] leading-tight tracking-[-0.015em] text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-prose text-[0.9375rem] leading-[1.65] text-ink-muted">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-t border-line-soft py-20 md:py-32">
        <div className="mx-auto grid max-w-(--container-wide) gap-16 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-4">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
              The team
            </p>
          </Reveal>
          <div className="md:col-span-8 space-y-10">
            {team.map((t) => (
              <Reveal key={t.name} delay={80}>
                <div className="space-y-3 border-t border-line-soft pt-6">
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-serif text-[clamp(1.5rem,2.6vw,2rem)] leading-tight tracking-[-0.015em] text-ink">
                      {t.name}
                    </h3>
                    <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-muted">
                      {t.role}
                    </p>
                  </div>
                  <p className="max-w-2xl text-[1rem] leading-[1.7] text-ink-muted">
                    {t.bio}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-[0.9375rem] text-ink underline decoration-line underline-offset-[5px] transition hover:decoration-sky hover:text-sky-deep"
              >
                Hiring? We&rsquo;re open to one or two senior engineers per quarter →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

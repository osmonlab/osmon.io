import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes from osmon — short writing on agentic software, evals, and the working practice of shipping models in production.",
};

type Entry = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  read: string;
  topic: string;
};

const entries: Entry[] = [
  {
    slug: "the-thinnest-layer",
    title: "The thinnest layer between people and the model",
    dek:
      "We&rsquo;ve been building agent surfaces for two years and the same lesson keeps surfacing — make the affordances obvious, hide the orchestration, and let people see when the model isn&rsquo;t sure.",
    date: "2026-04-22",
    read: "8 min",
    topic: "Surface design",
  },
  {
    slug: "evals-are-the-spec",
    title: "The eval suite is the spec, not the test",
    dek:
      "If your evals can be satisfied without solving the problem, the spec is wrong. A working note on writing evals that actually constrain the system.",
    date: "2026-03-30",
    read: "11 min",
    topic: "Evaluation",
  },
  {
    slug: "agents-on-call",
    title: "What it looks like to put an agent on call",
    dek:
      "Cost ceilings, fallback paths, replay tooling, and the org changes nobody warned us about. A practical writeup from one engagement.",
    date: "2026-03-04",
    read: "14 min",
    topic: "Operations",
  },
  {
    slug: "writing-tools-the-model-actually-uses",
    title: "Writing tools the model actually uses",
    dek:
      "Tool descriptions are prompts. Argument schemas are prompts. Most teams underweight both. Five rewrites that doubled tool-use accuracy.",
    date: "2026-02-12",
    read: "9 min",
    topic: "Tool use",
  },
  {
    slug: "ceilings",
    title: "Ceilings",
    dek:
      "Why we named the studio osmon — the Uzbek word for sky — and what we mean when we say the ceiling is what matters.",
    date: "2026-01-08",
    read: "5 min",
    topic: "Studio",
  },
];

export default function JournalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title={
          <>
            Working notes on{" "}
            <span className="font-light italic">agentic software</span> — slow,
            specific, written by the people doing the work.
          </>
        }
        lede="No content marketing. We publish when we&rsquo;ve learned something worth slowing down for, and we link to the code where we can."
      />

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
          <ul className="divide-y divide-line">
            {entries.map((e, i) => (
              <Reveal key={e.slug} delay={i * 60}>
                <li>
                  <Link
                    href={`/journal/${e.slug}`}
                    className="group grid gap-6 py-10 md:grid-cols-12 md:py-14"
                  >
                    <div className="md:col-span-3 space-y-2">
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">
                        {e.topic}
                      </p>
                      <p className="text-[0.8125rem] text-ink-muted">
                        <time dateTime={e.date}>
                          {new Date(e.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span className="mx-2">·</span>
                        {e.read}
                      </p>
                    </div>
                    <div className="md:col-span-9 space-y-3">
                      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.18] tracking-[-0.015em] text-ink transition-colors group-hover:text-sky-deep">
                        {e.title}
                      </h2>
                      <p
                        className="max-w-3xl text-[1rem] leading-[1.7] text-ink-muted"
                        dangerouslySetInnerHTML={{ __html: e.dek }}
                      />
                      <p className="font-mono text-[0.8125rem] text-ink-muted transition-colors group-hover:text-ink">
                        Read →
                      </p>
                    </div>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

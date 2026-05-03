import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { journalEntries as entries } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes from osmon — short writing on agentic software, evals, and the working practice of shipping models in production.",
  alternates: { canonical: "/journal" },
};

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

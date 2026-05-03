import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { journalEntries } from "@/lib/journal";

export function LatestJournal() {
  const latest = journalEntries.slice(0, 2);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between gap-6">
          <Reveal>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
              05 — In writing
            </p>
            <h2 className="mt-4 font-serif text-[clamp(1.625rem,3vw,2.25rem)] leading-[1.15] tracking-[-0.018em] text-ink">
              Working notes from the studio.
            </h2>
          </Reveal>
          <Reveal delay={80} className="hidden md:block">
            <Link
              href="/journal"
              className="group inline-flex items-center gap-1.5 font-mono text-[0.8125rem] text-ink-muted underline decoration-line decoration-1 underline-offset-[5px] transition-colors hover:text-ink hover:decoration-ink"
            >
              All entries
              <ArrowRight size={12} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {latest.map((e, i) => (
            <Reveal key={e.slug} delay={i * 80}>
              <li>
                <Link
                  href={`/journal/${e.slug}`}
                  className="group block h-full rounded-xl border border-line bg-canvas p-7 transition-colors hover:bg-bone md:p-9"
                >
                  <div className="flex items-center gap-3 text-[0.7rem] font-mono uppercase tracking-[0.16em] text-ink-muted">
                    <span>{e.topic}</span>
                    <span aria-hidden className="size-px h-2 w-2 rounded-full bg-ink-muted/40" />
                    <time dateTime={e.date}>
                      {new Date(e.date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="ml-auto">{e.read}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.18] tracking-[-0.015em] text-ink transition-colors group-hover:text-sky-deep">
                    {e.title}
                  </h3>
                  <p
                    className="mt-3 line-clamp-3 text-[0.9375rem] leading-[1.65] text-ink-muted"
                    dangerouslySetInnerHTML={{ __html: e.dek }}
                  />
                  <p className="mt-6 inline-flex items-center gap-1.5 font-mono text-[0.75rem] text-ink-muted transition-colors group-hover:text-ink">
                    Read
                    <ArrowRight size={12} weight="bold" />
                  </p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <div className="mt-8 md:hidden">
            <Link
              href="/journal"
              className="inline-flex items-center gap-1.5 font-mono text-[0.875rem] text-ink underline decoration-line underline-offset-[5px]"
            >
              All entries →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

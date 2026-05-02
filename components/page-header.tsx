import { Reveal } from "@/components/reveal";
import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
};

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-line-soft pt-40 pb-24 md:pt-48 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="osmon-drift absolute right-[-10%] top-1/2 h-[40vw] w-[40vw] -translate-y-1/2 rounded-full bg-sky/[0.12] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
        <Reveal>
          <p className="mb-8 inline-flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
            <span className="h-px w-8 bg-ink-muted/40" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-4xl text-balance font-serif text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] tracking-[-0.025em] text-ink">
            {title}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-pretty text-[1.0625rem] leading-[1.7] text-ink-muted md:text-[1.1875rem]">
              {lede}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 md:pt-56 md:pb-48">
      {/* ambient sky drift */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="osmon-drift absolute left-1/2 top-1/3 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/[0.18] blur-[140px]" />
        <div className="absolute inset-0 osmon-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto max-w-(--container-wide) px-6 md:px-10">
        <Reveal>
          <p className="mb-10 inline-flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
            <span className="h-px w-8 bg-ink-muted/40" />
            osmon lab — agentic software studio
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="text-balance text-[clamp(2.75rem,8vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.035em] text-ink">
            Software,<br />
            <span className="font-serif italic font-light text-ink">written by</span>{" "}
            software.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-10 max-w-2xl text-pretty text-[1.125rem] leading-[1.65] text-ink-muted md:text-[1.25rem]">
            osmon is a studio of engineers building agentic systems that plan,
            write, and ship code alongside your team. Osmon means sky in Uzbek —
            the work has the same ceiling.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@osmon.io"
              className="group inline-flex h-12 items-center gap-2 rounded-md bg-ink px-6 text-[0.9375rem] font-medium text-canvas transition-colors hover:bg-ink-soft active:scale-[0.98]"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#capabilities"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-line px-6 text-[0.9375rem] font-medium text-ink transition-colors hover:border-ink/40"
            >
              See what we build
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

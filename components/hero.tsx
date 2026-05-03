import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 md:pt-56 md:pb-48">
      {/* ambient sky wash — masked to a smooth circle so it never hits a hard edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 75% at 55% 45%, #000 0%, #000 35%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 75% at 55% 45%, #000 0%, #000 35%, transparent 80%)",
        }}
      >
        {/* primary halo — anchored slightly right of centre */}
        <div
          className="osmon-drift absolute left-[55%] top-[45%] h-[100vw] max-h-[1200px] w-[100vw] max-w-[1500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(61,168,255,0.45) 0%, rgba(61,168,255,0.22) 35%, rgba(61,168,255,0) 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* secondary off-axis washes for asymmetry */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 38% 32% at 22% 65%, rgba(61,168,255,0.22), transparent 65%), radial-gradient(ellipse 28% 22% at 82% 25%, rgba(61,168,255,0.20), transparent 60%)",
          }}
        />
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
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href="mailto:hello@osmon.io"
              className="group inline-flex h-13 items-center gap-2 rounded-full bg-ink px-7 text-[0.9375rem] font-medium text-canvas shadow-[0_2px_0_rgba(11,15,20,0.06),0_8px_28px_-12px_rgba(11,15,20,0.35)] transition-colors hover:bg-ink-soft active:scale-[0.98]"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#process"
              className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-ink-soft underline decoration-line decoration-1 underline-offset-[6px] transition-[color,text-decoration-color] hover:text-ink hover:decoration-ink"
            >
              See what we build
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
